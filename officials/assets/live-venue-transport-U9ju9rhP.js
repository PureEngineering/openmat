import { r as roomCapacity, t as toHex, v as verifyVenueRecord, d as discoverVenueRecords, _ as __vitePreload, e as encodePacket, p as packet, M as MUX_CHANNELS, f as fromHex, C as ChannelClass, a as validateVenueTopic, b as bracketPacketScope, c as encodeVenueFrame, T as TransportMultiplexer, g as decodeVenueFrame } from "./index-d6u-GKEc.js";
class LiveVenueRoom {
  constructor(options) {
    this.options = options;
    roomCapacity(options.roomId);
  }
  options;
  members = /* @__PURE__ */ new Map();
  framesSent = 0;
  framesReceived = 0;
  rtcFramesSent = 0;
  wsFramesSent = 0;
  directRtcFramesSent = 0;
  turnRtcFramesSent = 0;
  unknownRtcFramesSent = 0;
  payloadBytesSent = 0;
  payloadBytesReceived = 0;
  framesSentByChannel = [0, 0, 0];
  framesReceivedByChannel = [0, 0, 0];
  lastPingRttMs = null;
  ws = null;
  room = null;
  links = /* @__PURE__ */ new Map();
  senders = /* @__PURE__ */ new Map();
  receivers = /* @__PURE__ */ new Map();
  rpcPending = /* @__PURE__ */ new Map();
  stopped = false;
  timer = null;
  reconnect = null;
  trysteroId = "";
  sendSignal;
  rtcRpc;
  candidates = [];
  relayUrls = [];
  brokerUrls = [];
  candidateIndex = 0;
  activeBroker = "";
  discoveryAt = 0;
  generation = 0;
  connecting = null;
  password = "";
  signalSequence = 0;
  rtcLeaving = Promise.resolve();
  missingRtcSince = 0;
  admittedBefore = false;
  membershipGraceUntil = 0;
  lastMembership;
  reconnectCount = 0;
  async discover() {
    const root = this.options.rootPublicKeyHex ?? toHex(this.options.publicKey);
    const cacheKey = `openmat-registry:${this.options.tournamentId}:${root}`;
    let cached = [];
    try {
      cached = JSON.parse(globalThis.localStorage?.getItem(cacheKey) ?? "[]").filter((r) => verifyVenueRecord(r, root, this.options.tournamentId, Date.now(), false));
    } catch {
    }
    const origins = [.../* @__PURE__ */ new Set([this.options.origin, ...this.options.candidateOrigins ?? [], ...this.candidates, ...cached.flatMap((r) => r.origins)])];
    const freshCache = this.reconnectCount === 0 && cached.length > 0 && cached.every((r) => Date.now() - r.updated_at_ms < 1e4);
    const records = freshCache ? cached : await discoverVenueRecords(origins, root, this.options.tournamentId);
    const live = records.length ? records : cached.filter((r) => verifyVenueRecord(r, root, this.options.tournamentId));
    this.candidates = [.../* @__PURE__ */ new Set([this.options.origin, ...this.options.candidateOrigins ?? [], ...live.flatMap((r) => r.origins)])];
    const wsUrl = (origin, path) => {
      const u = new URL(path, origin);
      u.protocol = u.protocol === "https:" ? "wss:" : "ws:";
      return u.href;
    };
    this.brokerUrls = [.../* @__PURE__ */ new Set([...live.filter((r) => r.role !== "MAT_PEER" || r.active_rooms.includes(this.options.roomId)).flatMap((r) => r.p2p_broker_urls), ...[this.options.origin, ...this.options.candidateOrigins ?? []].map((o) => wsUrl(o, "/api/openmat-p2p"))])];
    this.relayUrls = [.../* @__PURE__ */ new Set([...live.flatMap((r) => r.nostr_relay_urls), ...this.candidates.map((o) => wsUrl(o, "/api/openmat-nostr"))])];
    if (globalThis.location?.protocol === "https:") {
      this.brokerUrls = this.brokerUrls.filter((u) => u.startsWith("wss:"));
      this.relayUrls = this.relayUrls.filter((u) => u.startsWith("wss:"));
    }
    try {
      if (records.length) globalThis.localStorage?.setItem(cacheKey, JSON.stringify(records));
    } catch {
    }
    this.discoveryAt = Date.now();
  }
  start() {
    if (this.connecting) return this.connecting;
    if (this.ws?.readyState === WebSocket.OPEN) return Promise.resolve();
    this.stopped = false;
    this.connecting = this.connect().finally(() => {
      this.connecting = null;
    });
    return this.connecting;
  }
  async connect() {
    const generation = this.generation;
    if (typeof RTCPeerConnection !== "undefined" && globalThis.crypto?.subtle) this.trysteroId = this.options.roomId.startsWith("subtree:") ? this.options.peerId : (await __vitePreload(async () => {
      const { selfId } = await import("./nostr-_Zpx1ca2.js");
      return { selfId };
    }, true ? [] : void 0, import.meta.url)).selfId;
    await this.discover();
    let lastError = new Error("No venue broker candidates");
    for (let attempt = 0; attempt < this.brokerUrls.length; attempt++) {
      if (this.stopped || generation !== this.generation) throw new Error("Room stopped");
      const url = this.brokerUrls[this.candidateIndex++ % this.brokerUrls.length];
      try {
        await this.connectBroker(url, generation);
        return;
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError;
  }
  connectBroker(url, generation) {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(url);
      this.ws = ws;
      ws.binaryType = "arraybuffer";
      let joined = false;
      const timeout = setTimeout(() => {
        reject(new Error("Room admission timed out"));
        ws.close();
      }, 4e3);
      ws.onopen = () => {
        if (this.stopped || generation !== this.generation) {
          ws.close();
          return;
        }
        const body = {
          type: "join",
          tournament_id: this.options.tournamentId,
          room_id: this.options.roomId,
          peer_id: this.options.peerId,
          role: this.options.role ?? "",
          trystero_id: this.trysteroId,
          public_key: this.options.publicKey,
          certificate: this.options.certificate ?? new Uint8Array(),
          timestamp_ms: Date.now(),
          nonce: crypto.getRandomValues(new Uint8Array(32))
        };
        ws.send(new Uint8Array(encodePacket({ ...body, signature: this.options.sign(encodePacket(body)) })));
      };
      ws.onmessage = ({ data }) => {
        if (this.ws !== ws || this.stopped || generation !== this.generation) return;
        void (async () => {
          const msg = packet(new Uint8Array(data));
          if (msg.type === "error") throw new Error(String(msg.error));
          if (msg.type === "joined") {
            if (this.admittedBefore && this.options.roomId.startsWith("subtree:")) this.membershipGraceUntil = Date.now() + 3e3;
            this.admittedBefore = true;
            clearTimeout(timeout);
            joined = true;
            this.activeBroker = url;
            this.updateMembers(msg.members);
            this.password = String(msg.password);
            if (this.trysteroId) await this.startRtc(this.password);
            if (!this.timer) this.timer = setInterval(() => {
              if (this.ws?.readyState !== WebSocket.OPEN) return;
              if (this.membershipGraceUntil && Date.now() >= this.membershipGraceUntil) {
                this.membershipGraceUntil = 0;
                this.updateMembers(this.lastMembership);
              }
              this.flush();
              this.maintainRtc();
              void this.ping().catch((e) => this.fail(e));
              if (Date.now() - this.discoveryAt > 15e3) {
                this.discoveryAt = Date.now();
                void this.discover().catch((e) => this.fail(e));
              }
            }, 2e3);
            resolve();
          } else if (msg.type === "members") this.updateMembers(msg.members);
          else await this.receive(msg);
        })().catch((e) => {
          clearTimeout(timeout);
          reject(e);
          this.fail(e);
          if (!joined) ws.close();
        });
      };
      ws.onerror = () => {
        clearTimeout(timeout);
        reject(new Error("Venue WebSocket failed"));
      };
      ws.onclose = () => {
        clearTimeout(timeout);
        reject(new Error("Room disconnected"));
        if (this.ws !== ws) return;
        this.ws = null;
        if (!this.options.roomId.startsWith("subtree:")) {
          this.clearRtc();
          this.members.clear();
          this.options.onMembership?.([]);
        }
        for (const pending of this.rpcPending.values()) {
          clearTimeout(pending.timer);
          pending.reject(new Error("Room disconnected"));
        }
        this.rpcPending.clear();
        if (joined && !this.stopped) this.scheduleReconnect();
      };
    });
  }
  scheduleReconnect() {
    if (this.reconnect || this.stopped) return;
    this.reconnect = setTimeout(() => {
      this.reconnect = null;
      this.reconnectCount++;
      void this.start().catch((e) => {
        this.fail(e);
        this.scheduleReconnect();
      });
    }, 500);
  }
  fail(error) {
    this.options.onError?.(error instanceof Error ? error : new Error(String(error)));
  }
  relayLink(member) {
    if (!this.options.roomId.startsWith("subtree:")) return true;
    const host = this.options.roomId.slice(8);
    return this.options.peerId === host || this.options.role === "primary" || this.options.role === "official" || member.peer_id === host || member.role === "primary" || member.role === "official";
  }
  updateMembers(raw) {
    if (!Array.isArray(raw) || raw.length > roomCapacity(this.options.roomId)) throw new Error("Invalid membership");
    this.lastMembership = raw;
    const previous = [...this.members.values()];
    this.members.clear();
    for (const value of raw) {
      const member = value;
      this.members.set(member.peer_id, member);
    }
    if (Date.now() < this.membershipGraceUntil) for (const member of previous) {
      const link = this.links.get(member.peer_id);
      if (!this.members.has(member.peer_id) && link?.pc.connectionState === "connected" && link.channels.length === MUX_CHANNELS.length && link.channels.every((c) => c.readyState === "open")) this.members.set(member.peer_id, member);
    }
    for (const [id, link] of this.links) if (!this.members.has(id)) {
      link.channels.forEach((c) => c.close());
      if (this.options.roomId.startsWith("subtree:")) link.pc.close();
      this.links.delete(id);
      this.receivers.delete(id);
    }
    if (this.options.roomId.startsWith("subtree:") && this.trysteroId) {
      for (const member of this.members.values()) if (member.peer_id !== this.options.peerId && member.trystero_id && this.relayLink(member)) this.attachRtc(member.peer_id);
    }
    this.options.onMembership?.([...this.members.values()]);
  }
  async startRtc(password) {
    if (this.options.roomId.startsWith("subtree:")) return;
    if (this.room || this.stopped || !this.trysteroId) return;
    const generation = this.generation;
    await this.rtcLeaving;
    const { joinRoom } = await __vitePreload(async () => {
      const { joinRoom: joinRoom2 } = await import("./nostr-_Zpx1ca2.js");
      return { joinRoom: joinRoom2 };
    }, true ? [] : void 0, import.meta.url);
    if (this.stopped || generation !== this.generation) return;
    const room = joinRoom({
      appId: `openmat:${this.options.tournamentId}:${this.options.roomId}`,
      password,
      rtcConfig: { iceServers: this.options.iceServers ?? [] },
      relayConfig: { urls: this.relayUrls, redundancy: this.relayUrls.length }
    }, this.options.roomId, {
      onPeerHandshake: async (peer) => {
        if (![...this.members.values()].some((m) => m.trystero_id === peer && this.relayLink(m))) throw new Error("Peer is not an admitted relay link");
      }
    });
    this.room = room;
    const signal = room.makeAction("om-sig", { onMessage: (msg, ctx) => {
      if (msg.kind === "mux" && msg.version === 1 && msg.channels === "official-events,current-state,bulk-chunks") this.attachRtc(ctx.peerId);
    } });
    this.sendSignal = (data, peer) => signal.send(data, { target: peer });
    const rpc = room.makeAction("om-rpc", {
      kind: "request",
      onRequest: async (req, ctx) => {
        const from = this.logicalPeer(ctx.peerId);
        if (!from) throw new Error("Unadmitted RPC");
        return { payload: toHex(await this.handleRpc(req.operation, fromHex(req.payload), from)) };
      }
    });
    this.rtcRpc = async (operation, payload, peer) => fromHex((await rpc.request({ operation, payload: toHex(payload) }, { target: peer, timeoutMs: operation === "game-sync" ? 1500 : 7e3 })).payload);
    room.onPeerJoin = (peer) => {
      void this.sendSignal?.({ kind: "mux", version: 1, channels: "official-events,current-state,bulk-chunks" }, peer).catch((e) => this.fail(e));
    };
    room.onPeerLeave = (peer) => {
      const id = this.logicalPeer(peer);
      if (id) {
        this.links.get(id)?.channels.forEach((c) => c.close());
        this.links.delete(id);
      }
    };
  }
  logicalPeer(trystero) {
    return [...this.members.values()].find((m) => m.trystero_id === trystero)?.peer_id;
  }
  attachRtc(peer) {
    const native = this.options.roomId.startsWith("subtree:");
    const id = native ? peer : this.logicalPeer(peer);
    if (!id || id === this.options.peerId || typeof RTCPeerConnection === "undefined" || !this.members.has(id) || !this.relayLink(this.members.get(id))) return;
    const previous = this.links.get(id);
    const pc = native ? previous && previous.pc.connectionState !== "closed" ? previous.pc : new RTCPeerConnection({ iceServers: this.options.iceServers ?? [] }) : this.room?.getPeers()[peer];
    if (!id || !pc || pc.connectionState === "closed") return;
    const old = this.links.get(id);
    if (old?.pc === pc) {
      if (old.channels.some((c) => c.readyState === "closed")) pc.close();
      return;
    }
    old?.channels.forEach((c) => c.close());
    const link = { pc, restartAt: 0, makingOffer: false, ignoreOffer: false, settingAnswer: false, candidates: [], signaling: Promise.resolve(), mux: this.senderMux(id), channels: [], pending: old?.pending ?? [], icePath: "UNKNOWN", readingStats: false };
    this.links.set(id, link);
    pc.addEventListener("iceconnectionstatechange", () => {
      link.icePath = "UNKNOWN";
    });
    const negotiate = async () => {
      if (link.makingOffer || pc.signalingState === "closed") return;
      if (native && !pc.localDescription && this.options.peerId > id) return;
      try {
        link.makingOffer = true;
        await pc.setLocalDescription();
        this.sendRtcSignal(id, { description: { type: pc.localDescription.type, sdp: pc.localDescription.sdp } });
      } finally {
        link.makingOffer = false;
      }
    };
    pc.onnegotiationneeded = () => {
      void negotiate().catch((e) => this.fail(e));
    };
    pc.onicecandidate = ({ candidate }) => {
      if (candidate) {
        try {
          this.sendRtcSignal(id, { candidate: JSON.parse(JSON.stringify(candidate.toJSON())) });
        } catch (e) {
          this.fail(e);
        }
      }
    };
    for (const config of MUX_CHANNELS) {
      const dc = pc.createDataChannel(config.label, { ...config, negotiated: true });
      dc.binaryType = "arraybuffer";
      dc.bufferedAmountLowThreshold = 32768;
      dc.onbufferedamountlow = () => this.flushLink(id, link);
      dc.onopen = () => this.flushLink(id, link);
      dc.onmessage = (ev) => {
        try {
          this.acceptFrame(id, new Uint8Array(ev.data));
        } catch (e) {
          this.fail(e);
        }
      };
      link.channels.push(dc);
    }
    if (native) void negotiate().catch((e) => this.fail(e));
  }
  sendRtcSignal(id, body) {
    this.sendWs({ type: "rpc", operation: "om-sig", id: `signal-${++this.signalSequence}`, to: id, payload: encodePacket(body) });
  }
  async receiveRtcSignal(id, bytes) {
    const member = this.members.get(id);
    if (!member) throw new Error("Unadmitted RTC signal");
    this.attachRtc(this.options.roomId.startsWith("subtree:") ? id : member.trystero_id);
    const link = this.links.get(id);
    if (!link) return;
    const msg = packet(bytes);
    const pc = link.pc;
    link.signaling = link.signaling.catch(() => {
    }).then(async () => {
      if (msg.description) {
        const description = msg.description;
        if (!["offer", "answer"].includes(description.type) || typeof description.sdp !== "string" || description.sdp.length > 65536) throw new Error("Invalid RTC description");
        const collision = description.type === "offer" && (link.makingOffer || pc.signalingState !== "stable" && !link.settingAnswer);
        link.ignoreOffer = this.options.peerId < id && collision;
        if (link.ignoreOffer) return;
        link.settingAnswer = description.type === "answer";
        try {
          await pc.setRemoteDescription(description);
        } finally {
          link.settingAnswer = false;
        }
        for (const candidate of link.candidates.splice(0)) {
          if (!candidate.usernameFragment || pc.remoteDescription?.sdp.includes(`a=ice-ufrag:${candidate.usernameFragment}`)) await pc.addIceCandidate(candidate);
        }
        if (description.type === "offer") {
          await pc.setLocalDescription();
          this.sendRtcSignal(id, { description: { type: pc.localDescription.type, sdp: pc.localDescription.sdp } });
        }
      } else if (msg.candidate && !link.ignoreOffer) {
        const candidate = msg.candidate;
        if (typeof candidate.candidate !== "string" || candidate.candidate.length > 8192) throw new Error("Invalid ICE candidate");
        if (!pc.remoteDescription) {
          if (link.candidates.length >= 128) throw new Error("Too many ICE candidates");
          link.candidates.push(candidate);
        } else if (!candidate.usernameFragment || pc.remoteDescription.sdp.includes(`a=ice-ufrag:${candidate.usernameFragment}`)) await pc.addIceCandidate(candidate);
      }
    });
    await link.signaling;
  }
  maintainRtc() {
    for (const link of this.links.values()) {
      if (link.readingStats || link.pc.connectionState !== "connected") continue;
      link.readingStats = true;
      void link.pc.getStats().then((reports) => {
        let pairId;
        reports.forEach((stat) => {
          if (stat.type === "transport" && stat.selectedCandidatePairId) pairId = stat.selectedCandidatePairId;
        });
        const pair = pairId ? reports.get(pairId) : void 0;
        const local = pair ? reports.get(pair.localCandidateId) : void 0;
        const remote = pair ? reports.get(pair.remoteCandidateId) : void 0;
        link.icePath = local?.candidateType === "relay" || remote?.candidateType === "relay" ? "TURN" : local?.candidateType && remote?.candidateType ? "DIRECT" : "UNKNOWN";
      }).catch(() => {
        link.icePath = "UNKNOWN";
      }).finally(() => {
        link.readingStats = false;
      });
    }
    if (this.options.roomId.startsWith("subtree:")) {
      for (const member of this.members.values()) if (member.peer_id !== this.options.peerId && member.trystero_id && this.relayLink(member)) {
        const link = this.links.get(member.peer_id);
        if (link?.pc.connectionState === "connected") link.restartAt = 0;
        else if (link?.pc.connectionState === "failed") link.pc.close();
        else if (link?.pc.connectionState === "disconnected") {
          if (!link.restartAt) {
            link.restartAt = Date.now();
            if (this.options.peerId < member.peer_id) link.pc.restartIce();
          } else if (Date.now() - link.restartAt > 4e3) link.pc.close();
        }
        this.attachRtc(member.peer_id);
      }
      return;
    }
    const peers = this.room?.getPeers() ?? {};
    for (const [peer, pc] of Object.entries(peers)) {
      this.attachRtc(peer);
      void this.sendSignal?.({ kind: "mux", version: 1, channels: "official-events,current-state,bulk-chunks" }, peer).catch((e) => this.fail(e));
      const id = this.logicalPeer(peer);
      const link = id ? this.links.get(id) : void 0;
      if (!link) continue;
      if (pc.connectionState === "connected") link.restartAt = 0;
      else if (pc.connectionState === "disconnected" && !link.restartAt) {
        link.restartAt = Date.now();
        if (this.trysteroId < peer && pc.signalingState === "stable") pc.restartIce();
      } else if (link.restartAt && Date.now() - link.restartAt > 4e3) pc.close();
    }
    const expected = [...this.members.values()].filter((m) => m.peer_id !== this.options.peerId && m.trystero_id && this.relayLink(m));
    if (expected.some((m) => !peers[m.trystero_id])) {
      this.missingRtcSince ||= Date.now();
      if (Date.now() - this.missingRtcSince > 12e3) {
        this.clearRtc();
        void this.startRtc(this.password).catch((e) => this.fail(e));
        this.missingRtcSince = 0;
      }
    } else this.missingRtcSince = 0;
  }
  send(topic, payload, channel = ChannelClass.OfficialEventsOrderedReliable, target) {
    validateVenueTopic(this.options.roomId, topic);
    if (payload.length > 4194304) throw new Error("Room message exceeds 4 MiB");
    const peers = target ? [target] : [...this.members.keys()].filter((id) => id !== this.options.peerId);
    let delivered = false, failure;
    for (const id of peers) {
      try {
        if (!this.members.has(id)) throw new Error("Target is not a room member");
        const link = this.links.get(id);
        if (link && link.channels.length === MUX_CHANNELS.length && link.channels.every((c) => c.readyState === "open")) {
          if (link.mux.queuedPayloadBytes() + link.pending.reduce((n, f) => n + f.payload.length, 0) + payload.length > 4 * 1024 * 1024) throw new Error("Peer backpressure limit reached");
          link.mux.enqueueMessage(channel, topic, payload, bracketPacketScope(topic, payload));
          this.flushLink(id, link);
        } else {
          const mux = this.senderMux(id);
          mux.enqueueMessage(channel, topic, payload, bracketPacketScope(topic, payload));
          for (const frame of mux.drainNextFrames(4194304)) {
            this.sendWs({ type: "frame", to: id, frame: encodeVenueFrame(frame) });
            this.framesSent++;
            this.wsFramesSent++;
            this.payloadBytesSent += frame.payload.length;
            this.framesSentByChannel[frame.channel - 1]++;
          }
        }
        delivered = true;
      } catch (error) {
        if (target) throw error;
        failure = error;
        this.fail(error);
      }
    }
    if (peers.length && !delivered && failure) throw failure;
  }
  senderMux(id) {
    let mux = this.senders.get(id);
    if (!mux) {
      mux = new TransportMultiplexer();
      this.senders.set(id, mux);
    }
    return mux;
  }
  sendWs(msg) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN || this.ws.bufferedAmount > 4 * 1024 * 1024) throw new Error("Venue socket unavailable or backpressured");
    this.ws.send(new Uint8Array(encodePacket(msg)));
  }
  flush() {
    for (const [id, link] of this.links) this.flushLink(id, link);
  }
  flushLink(_id, link) {
    if (link.channels.length !== MUX_CHANNELS.length || !link.channels.every((c) => c.readyState === "open") || link.channels.some((c) => c.bufferedAmount > 1048576)) return;
    if (!link.pending.length) link.pending = link.mux.drainNextFrames(262144);
    while (link.pending.length && !link.channels.some((c) => c.bufferedAmount > 1048576)) {
      const frame = link.pending[0];
      const dcIndex = frame.channel === ChannelClass.CurrentStateUnorderedNewest && frame.fragment_count > 1 ? 0 : frame.channel - 1;
      link.channels[dcIndex].send(new Uint8Array(encodeVenueFrame(frame)));
      link.pending.shift();
      this.framesSent++;
      this.rtcFramesSent++;
      this.framesSentByChannel[frame.channel - 1]++;
      this.payloadBytesSent += frame.payload.length;
      if (link.icePath === "DIRECT") this.directRtcFramesSent++;
      else if (link.icePath === "TURN") this.turnRtcFramesSent++;
      else this.unknownRtcFramesSent++;
      if (!link.pending.length) link.pending = link.mux.drainNextFrames(262144);
    }
  }
  acceptFrame(from, bytes) {
    if (!this.members.has(from)) throw new Error("Unadmitted sender");
    const frame = decodeVenueFrame(bytes);
    validateVenueTopic(this.options.roomId, frame.topic);
    let mux = this.receivers.get(from);
    if (!mux) {
      mux = new TransportMultiplexer();
      this.receivers.set(from, mux);
    }
    const body = mux.reassembleFrame(frame);
    this.framesReceived++;
    this.payloadBytesReceived += frame.payload.length;
    this.framesReceivedByChannel[frame.channel - 1]++;
    if (body) this.options.onMessage(frame.topic, body, from);
  }
  async handleRpc(operation, payload, from) {
    if (operation === "ping") return payload;
    if (operation === "status") return encodePacket({ room_id: this.options.roomId, frames_received: this.framesReceived });
    if (!this.options.onRpc) throw new Error("Unsupported room RPC");
    return this.options.onRpc(operation, payload, from);
  }
  hostPeerId() {
    if (!this.options.roomId.startsWith("subtree:")) return void 0;
    const host = this.options.roomId.slice(8);
    if (this.members.has(host)) return host;
    return [...this.members.values()].find((member) => member.role === "primary" || member.role === "official")?.peer_id;
  }
  async receive(msg) {
    const from = String(msg.from);
    if (!this.members.has(from)) return;
    if (msg.type === "frame") this.acceptFrame(from, msg.frame);
    else if (msg.type === "rpc") {
      if (msg.operation === "om-sig") {
        await this.receiveRtcSignal(from, msg.payload);
        return;
      }
      try {
        this.sendWs({ type: "rpc-result", to: from, id: msg.id, payload: await this.handleRpc(String(msg.operation), msg.payload, from), ok: true });
      } catch (e) {
        this.sendWs({ type: "rpc-result", to: from, id: msg.id, ok: false, error: String(e) });
      }
    } else if (msg.type === "rpc-result") {
      const pending = this.rpcPending.get(String(msg.id));
      if (!pending || pending.target !== from) return;
      clearTimeout(pending.timer);
      this.rpcPending.delete(String(msg.id));
      if (msg.ok) pending.resolve(msg.payload);
      else pending.reject(new Error(String(msg.error)));
    }
  }
  async request(operation, payload, target) {
    if (!this.members.has(target)) throw new Error("RPC target is not a room member");
    const member = this.members.get(target);
    const channels = this.links.get(target)?.channels;
    if (member.trystero_id && channels?.length === MUX_CHANNELS.length && channels.every((c) => c.readyState === "open") && this.rtcRpc) return this.rtcRpc(operation, payload, member.trystero_id);
    const id = typeof crypto !== "undefined" && typeof crypto.randomUUID === "function" ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.rpcPending.delete(id);
        reject(new Error("Room RPC timed out"));
      }, operation === "game-sync" ? 1500 : 8e3);
      this.rpcPending.set(id, { resolve, reject, timer, target });
      try {
        this.sendWs({ type: "rpc", id, to: target, operation, payload });
      } catch (e) {
        clearTimeout(timer);
        this.rpcPending.delete(id);
        reject(e);
      }
    });
  }
  async ping(target = [...this.members.keys()].find((id) => id !== this.options.peerId)) {
    if (!target) return null;
    const member = this.members.get(target);
    const start = performance.now();
    if (this.room && member?.trystero_id && this.room.getPeers()[member.trystero_id]) this.lastPingRttMs = await this.room.ping(member.trystero_id);
    else {
      await this.request("ping", new Uint8Array(), target);
      this.lastPingRttMs = performance.now() - start;
    }
    return this.lastPingRttMs;
  }
  diagnostics() {
    const brokerConnected = this.ws?.readyState === 1;
    return {
      activeBroker: this.activeBroker,
      brokerConnected,
      relayUrls: [...this.relayUrls],
      reconnectCount: this.reconnectCount,
      roomId: this.options.roomId,
      members: [...this.members.keys()],
      framesSent: this.framesSent,
      framesReceived: this.framesReceived,
      directRtcFramesSent: this.directRtcFramesSent,
      turnRtcFramesSent: this.turnRtcFramesSent,
      unknownRtcFramesSent: this.unknownRtcFramesSent,
      payloadBytesSent: this.payloadBytesSent,
      payloadBytesReceived: this.payloadBytesReceived,
      bufferedBytes: (this.ws?.bufferedAmount ?? 0) + [...this.links.values()].reduce((n, l) => n + l.channels.reduce((s, c) => s + c.bufferedAmount, 0), 0),
      queuedPayloadBytes: [...this.senders.values()].reduce((n, mux) => n + mux.queuedPayloadBytes(), 0) + [...this.links.values()].reduce((n, l) => n + l.pending.reduce((s, f) => s + f.payload.length, 0), 0),
      rtcFramesSent: this.rtcFramesSent,
      wsFramesSent: this.wsFramesSent,
      framesSentByChannel: this.framesSentByChannel,
      framesReceivedByChannel: this.framesReceivedByChannel,
      pingRttMs: this.lastPingRttMs,
      rtcPeers: [...this.links.values()].filter((link) => link.pc.connectionState === "connected").length,
      peers: [...this.members.values()].filter((member) => member.peer_id !== this.options.peerId).map((member) => {
        const link = this.links.get(member.peer_id);
        const direct = link?.pc.connectionState === "connected" && link.channels.length === MUX_CHANNELS.length && link.channels.every((channel) => channel.readyState === "open");
        return {
          peerId: member.peer_id,
          role: member.role || "peer",
          icePath: direct ? link.icePath : "UNKNOWN",
          transport: direct ? "WEBRTC" : brokerConnected ? "VENUE_RELAY" : "DISCONNECTED",
          connectionState: link?.pc.connectionState ?? null,
          openChannels: link?.channels.filter((channel) => channel.readyState === "open").length ?? 0
        };
      }),
      channels: [...this.links].map(([id, link]) => ({
        peer: id,
        connectionState: link.pc.connectionState,
        signalingState: link.pc.signalingState,
        iceConnectionState: link.pc.iceConnectionState,
        iceGatheringState: link.pc.iceGatheringState,
        localDescriptionType: link.pc.localDescription?.type ?? null,
        remoteDescriptionType: link.pc.remoteDescription?.type ?? null,
        channels: link.channels.map((c) => ({ label: c.label, state: c.readyState, ordered: c.ordered, maxRetransmits: c.maxRetransmits }))
      }))
    };
  }
  clearRtc() {
    this.links.forEach((l) => {
      l.channels.forEach((c) => c.close());
      if (this.options.roomId.startsWith("subtree:")) l.pc.close();
    });
    this.links.clear();
    if (this.room) this.rtcLeaving = Promise.resolve(this.room.leave()).catch((e) => this.fail(e));
    this.room = null;
    this.receivers.clear();
    this.senders.clear();
  }
  stop() {
    this.stopped = true;
    this.generation++;
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    if (this.reconnect) clearTimeout(this.reconnect);
    this.reconnect = null;
    this.clearRtc();
    this.ws?.close();
    this.ws = null;
    for (const pending of this.rpcPending.values()) {
      clearTimeout(pending.timer);
      pending.reject(new Error("Room stopped"));
    }
    this.rpcPending.clear();
  }
}
export {
  LiveVenueRoom
};
