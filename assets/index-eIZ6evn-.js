(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const t$1 = globalThis, e$2 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = /* @__PURE__ */ Symbol(), o$3 = /* @__PURE__ */ new WeakMap();
let n$2 = class n {
  constructor(t2, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$2 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$3.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$3.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$2 = (t2) => new n$2("string" == typeof t2 ? t2 : t2 + "", void 0, s$2), S$1 = (s2, o2) => {
  if (e$2) s2.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (const e2 of o2) {
    const o3 = document.createElement("style"), n3 = t$1.litNonce;
    void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e2.cssText, s2.appendChild(o3);
  }
}, c$2 = e$2 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules) e2 += s2.cssText;
  return r$2(e2);
})(t2) : t2;
const { is: i$2, defineProperty: e$1, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$1, getOwnPropertySymbols: o$2, getPrototypeOf: n$1 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$1 = { toAttribute(t2, s2) {
  switch (s2) {
    case Boolean:
      t2 = t2 ? l$1 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, s2) {
  let i2 = t2;
  switch (s2) {
    case Boolean:
      i2 = null !== t2;
      break;
    case Number:
      i2 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i2 = JSON.parse(t2);
      } catch (t3) {
        i2 = null;
      }
  }
  return i2;
} }, f$1 = (t2, s2) => !i$2(t2, s2), b$1 = { attribute: true, type: String, converter: u$1, reflect: false, useDefault: false, hasChanged: f$1 };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), a$1.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let y$1 = class y extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ??= []).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = b$1) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i2 = /* @__PURE__ */ Symbol(), h2 = this.getPropertyDescriptor(t2, i2, s2);
      void 0 !== h2 && e$1(this.prototype, t2, h2);
    }
  }
  static getPropertyDescriptor(t2, s2, i2) {
    const { get: e2, set: r2 } = h$1(this.prototype, t2) ?? { get() {
      return this[s2];
    }, set(t3) {
      this[s2] = t3;
    } };
    return { get: e2, set(s3) {
      const h2 = e2?.call(this);
      r2?.call(this, s3), this.requestUpdate(t2, h2, i2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? b$1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t2 = n$1(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t3 = this.properties, s2 = [...r$1(t3), ...o$2(t3)];
      for (const i2 of s2) this.createProperty(i2, t3[i2]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i2] of s2) this.elementProperties.set(t3, i2);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i2 = this._$Eu(t3, s2);
      void 0 !== i2 && this._$Eh.set(i2, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i2 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i2.unshift(c$2(s3));
    } else void 0 !== s2 && i2.push(c$2(s2));
    return i2;
  }
  static _$Eu(t2, s2) {
    const i2 = s2.attribute;
    return false === i2 ? void 0 : "string" == typeof i2 ? i2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t2) => t2(this));
  }
  addController(t2) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t2), void 0 !== this.renderRoot && this.isConnected && t2.hostConnected?.();
  }
  removeController(t2) {
    this._$EO?.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i2 of s2.keys()) this.hasOwnProperty(i2) && (t2.set(i2, this[i2]), delete this[i2]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t2) => t2.hostConnected?.());
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t2) => t2.hostDisconnected?.());
  }
  attributeChangedCallback(t2, s2, i2) {
    this._$AK(t2, i2);
  }
  _$ET(t2, s2) {
    const i2 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i2);
    if (void 0 !== e2 && true === i2.reflect) {
      const h2 = (void 0 !== i2.converter?.toAttribute ? i2.converter : u$1).toAttribute(s2, i2.type);
      this._$Em = t2, null == h2 ? this.removeAttribute(e2) : this.setAttribute(e2, h2), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    const i2 = this.constructor, e2 = i2._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i2.getPropertyOptions(e2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== t3.converter?.fromAttribute ? t3.converter : u$1;
      this._$Em = e2;
      const r2 = h2.fromAttribute(s2, t3.type);
      this[e2] = r2 ?? this._$Ej?.get(e2) ?? r2, this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i2, e2 = false, h2) {
    if (void 0 !== t2) {
      const r2 = this.constructor;
      if (false === e2 && (h2 = this[t2]), i2 ??= r2.getPropertyOptions(t2), !((i2.hasChanged ?? f$1)(h2, s2) || i2.useDefault && i2.reflect && h2 === this._$Ej?.get(t2) && !this.hasAttribute(r2._$Eu(t2, i2)))) return;
      this.C(t2, s2, i2);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t2, s2, { useDefault: i2, reflect: e2, wrapped: h2 }, r2) {
    i2 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h2 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i2 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t2));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i2] of t3) {
        const { wrapped: t4 } = i2, e2 = this[s3];
        true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i2, e2);
      }
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), this._$EO?.forEach((t3) => t3.hostUpdate?.()), this.update(s2)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    this._$EO?.forEach((t3) => t3.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Eq &&= this._$Eq.forEach((t3) => this._$ET(t3, this[t3])), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1?.({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ??= []).push("2.1.2");
const t = globalThis, i$1 = (t2) => t2, s$1 = t.trustedTypes, e = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, h = "$lit$", o$1 = `lit$${Math.random().toFixed(9).slice(2)}$`, n2 = "?" + o$1, r = `<${n2}>`, l = document, c = () => l.createComment(""), a = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, u = Array.isArray, d = (t2) => u(t2) || "function" == typeof t2?.[Symbol.iterator], f = "[ 	\n\f\r]", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y2 = /^(?:script|style|textarea|title)$/i, x = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), b = x(1), w = x(2), E = /* @__PURE__ */ Symbol.for("lit-noChange"), A = /* @__PURE__ */ Symbol.for("lit-nothing"), C = /* @__PURE__ */ new WeakMap(), P = l.createTreeWalker(l, 129);
function V(t2, i2) {
  if (!u(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e ? e.createHTML(i2) : i2;
}
const N = (t2, i2) => {
  const s2 = t2.length - 1, e2 = [];
  let n3, l2 = 2 === i2 ? "<svg>" : 3 === i2 ? "<math>" : "", c2 = v;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let a2, u2, d2 = -1, f2 = 0;
    for (; f2 < s3.length && (c2.lastIndex = f2, u2 = c2.exec(s3), null !== u2); ) f2 = c2.lastIndex, c2 === v ? "!--" === u2[1] ? c2 = _ : void 0 !== u2[1] ? c2 = m : void 0 !== u2[2] ? (y2.test(u2[2]) && (n3 = RegExp("</" + u2[2], "g")), c2 = p) : void 0 !== u2[3] && (c2 = p) : c2 === p ? ">" === u2[0] ? (c2 = n3 ?? v, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? p : '"' === u2[3] ? $ : g) : c2 === $ || c2 === g ? c2 = p : c2 === _ || c2 === m ? c2 = v : (c2 = p, n3 = void 0);
    const x2 = c2 === p && t2[i3 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === v ? s3 + r : d2 >= 0 ? (e2.push(a2), s3.slice(0, d2) + h + s3.slice(d2) + o$1 + x2) : s3 + o$1 + (-2 === d2 ? i3 : x2);
  }
  return [V(t2, l2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : 3 === i2 ? "</math>" : "")), e2];
};
class S {
  constructor({ strings: t2, _$litType$: i2 }, e2) {
    let r2;
    this.parts = [];
    let l2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = N(t2, i2);
    if (this.el = S.createElement(f2, e2), P.currentNode = this.el.content, 2 === i2 || 3 === i2) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = P.nextNode()) && d2.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(h)) {
          const i3 = v2[a2++], s2 = r2.getAttribute(t3).split(o$1), e3 = /([.?@])?(.*)/.exec(i3);
          d2.push({ type: 1, index: l2, name: e3[2], strings: s2, ctor: "." === e3[1] ? I : "?" === e3[1] ? L : "@" === e3[1] ? z : H }), r2.removeAttribute(t3);
        } else t3.startsWith(o$1) && (d2.push({ type: 6, index: l2 }), r2.removeAttribute(t3));
        if (y2.test(r2.tagName)) {
          const t3 = r2.textContent.split(o$1), i3 = t3.length - 1;
          if (i3 > 0) {
            r2.textContent = s$1 ? s$1.emptyScript : "";
            for (let s2 = 0; s2 < i3; s2++) r2.append(t3[s2], c()), P.nextNode(), d2.push({ type: 2, index: ++l2 });
            r2.append(t3[i3], c());
          }
        }
      } else if (8 === r2.nodeType) if (r2.data === n2) d2.push({ type: 2, index: l2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r2.data.indexOf(o$1, t3 + 1)); ) d2.push({ type: 7, index: l2 }), t3 += o$1.length - 1;
      }
      l2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function M(t2, i2, s2 = t2, e2) {
  if (i2 === E) return i2;
  let h2 = void 0 !== e2 ? s2._$Co?.[e2] : s2._$Cl;
  const o2 = a(i2) ? void 0 : i2._$litDirective$;
  return h2?.constructor !== o2 && (h2?._$AO?.(false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ??= [])[e2] = h2 : s2._$Cl = h2), void 0 !== h2 && (i2 = M(t2, h2._$AS(t2, i2.values), h2, e2)), i2;
}
class R {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i2 }, parts: s2 } = this._$AD, e2 = (t2?.creationScope ?? l).importNode(i2, true);
    P.currentNode = e2;
    let h2 = P.nextNode(), o2 = 0, n3 = 0, r2 = s2[0];
    for (; void 0 !== r2; ) {
      if (o2 === r2.index) {
        let i3;
        2 === r2.type ? i3 = new k(h2, h2.nextSibling, this, t2) : 1 === r2.type ? i3 = new r2.ctor(h2, r2.name, r2.strings, this, t2) : 6 === r2.type && (i3 = new Z(h2, this, t2)), this._$AV.push(i3), r2 = s2[++n3];
      }
      o2 !== r2?.index && (h2 = P.nextNode(), o2++);
    }
    return P.currentNode = l, e2;
  }
  p(t2) {
    let i2 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t2, i2, s2, e2) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cv = e2?.isConnected ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === t2?.nodeType && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = M(this, t2, i2), a(t2) ? t2 === A || null == t2 || "" === t2 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t2 !== this._$AH && t2 !== E && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : d(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(l.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    const { values: i2, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = S.createElement(V(s2.h, s2.h[0]), this.options)), s2);
    if (this._$AH?._$AD === e2) this._$AH.p(i2);
    else {
      const t3 = new R(e2, this), s3 = t3.u(this.options);
      t3.p(i2), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = C.get(t2.strings);
    return void 0 === i2 && C.set(t2.strings, i2 = new S(t2)), i2;
  }
  k(t2) {
    u(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const h2 of t2) e2 === i2.length ? i2.push(s2 = new k(this.O(c()), this.O(c()), this, this.options)) : s2 = i2[e2], s2._$AI(h2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, s2) {
    for (this._$AP?.(false, true, s2); t2 !== this._$AB; ) {
      const s3 = i$1(t2).nextSibling;
      i$1(t2).remove(), t2 = s3;
    }
  }
  setConnected(t2) {
    void 0 === this._$AM && (this._$Cv = t2, this._$AP?.(t2));
  }
}
class H {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i2, s2, e2, h2) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2) t2 = M(this, t2, i2, 0), o2 = !a(t2) || t2 !== this._$AH && t2 !== E, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n3, r2;
      for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++) r2 = M(this, e3[s2 + n3], i2, n3), r2 === E && (r2 = this._$AH[n3]), o2 ||= !a(r2) || r2 !== this._$AH[n3], r2 === A ? t2 = A : t2 !== A && (t2 += (r2 ?? "") + h2[n3 + 1]), this._$AH[n3] = r2;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
}
class I extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A ? void 0 : t2;
  }
}
class L extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== A);
  }
}
class z extends H {
  constructor(t2, i2, s2, e2, h2) {
    super(t2, i2, s2, e2, h2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    if ((t2 = M(this, t2, i2, 0) ?? A) === E) return;
    const s2 = this._$AH, e2 = t2 === A && s2 !== A || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== A && (s2 === A || e2);
    e2 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class Z {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    M(this, t2);
  }
}
const B = t.litHtmlPolyfillSupport;
B?.(S, k), (t.litHtmlVersions ??= []).push("3.3.3");
const D = (t2, i2, s2) => {
  const e2 = s2?.renderBefore ?? i2;
  let h2 = e2._$litPart$;
  if (void 0 === h2) {
    const t3 = s2?.renderBefore ?? null;
    e2._$litPart$ = h2 = new k(i2.insertBefore(c(), t3), t3, void 0, s2 ?? {});
  }
  return h2._$AI(t2), h2;
};
const s = globalThis;
class i extends y$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t2 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t2.firstChild, t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E;
  }
}
i._$litElement$ = true, i["finalized"] = true, s.litElementHydrateSupport?.({ LitElement: i });
const o = s.litElementPolyfillSupport;
o?.({ LitElement: i });
(s.litElementVersions ??= []).push("4.2.2");
const U32_MASK64 = /* @__PURE__ */ (() => BigInt(2 ** 32 - 1))();
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n3, le = false) {
  if (le)
    return { h: Number(n3 & U32_MASK64), l: Number(n3 >> _32n & U32_MASK64) };
  return { h: Number(n3 >> _32n & U32_MASK64) | 0, l: Number(n3 & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  const len = lst.length;
  let Ah = new Uint32Array(len);
  let Al = new Uint32Array(len);
  for (let i2 = 0; i2 < len; i2++) {
    const { h: h2, l: l2 } = fromBig(lst[i2], le);
    [Ah[i2], Al[i2]] = [h2, l2];
  }
  return [Ah, Al];
}
const fromNumH = (n3) => n3 / 2 ** 32 | 0;
const fromNumL = (n3) => n3 >>> 0;
function setU64FromNum(view, byteOffset, n3, isLE) {
  const h2 = fromNumH(n3);
  const l2 = fromNumL(n3);
  view.setUint32(byteOffset, isLE ? l2 : h2, isLE);
  view.setUint32(byteOffset + 4, isLE ? h2 : l2, isLE);
}
const shrSH = (h2, _l, s2) => h2 >>> s2;
const shrSL = (h2, l2, s2) => h2 << 32 - s2 | l2 >>> s2;
const rotrSH = (h2, l2, s2) => h2 >>> s2 | l2 << 32 - s2;
const rotrSL = (h2, l2, s2) => h2 << 32 - s2 | l2 >>> s2;
const rotrBH = (h2, l2, s2) => h2 << 64 - s2 | l2 >>> s2 - 32;
const rotrBL = (h2, l2, s2) => h2 >>> s2 - 32 | l2 << 64 - s2;
function add(Ah, Al, Bh, Bl) {
  const l2 = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l2 / 2 ** 32 | 0) | 0, l: l2 | 0 };
}
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
function isBytes$1(a2) {
  return a2 instanceof Uint8Array || ArrayBuffer.isView(a2) && a2.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in a2 && a2.BYTES_PER_ELEMENT === 1;
}
const atitle$1 = (title) => title ? `"${title}" ` : "";
function anumber$1(n3, title = "") {
  if (typeof n3 !== "number")
    throw new TypeError(atitle$1(title) + "expected number, got " + typeof n3);
  if (!Number.isSafeInteger(n3) || n3 < 0)
    throw new RangeError(atitle$1(title) + "expected integer >= 0, got " + n3);
  return n3;
}
function abytes$1(value, length, title = "") {
  if (isBytes$1(value) && (length === void 0 || value.length === length))
    return value;
  if (length !== void 0)
    anumber$1(length, "length");
  const bytes = isBytes$1(value);
  const ofLen = length !== void 0 ? ` of length ${length}` : "";
  const got = bytes ? `length=${value.length}` : `type=${typeof value}`;
  const message = atitle$1(title) + "expected Uint8Array" + ofLen + ", got " + got;
  if (!bytes)
    throw new TypeError(message);
  throw new RangeError(message);
}
const aobject$1 = (value, label) => {
  if (value === null || typeof value !== "object" || Array.isArray(value))
    throw new TypeError((label === "object" ? "" : `"${label}" `) + "expected object, got type=" + typeof value);
};
const aopts = (value, label) => {
  aobject$1(value, label);
  const proto = Object.getPrototypeOf(value);
  if (proto !== Object.prototype && proto !== null)
    throw new TypeError(`"${label}" expected plain object`);
  if (Object.hasOwn(value, "__proto__"))
    throw new TypeError(`"${label}.__proto__" is not allowed`);
};
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("hash was destroyed");
  if (checkFinished && instance.finished)
    throw new Error("digest() was already called");
}
function aoutput(out, instance) {
  abytes$1(out, void 0, "output");
  const min = instance.outputLen;
  if (!(out.length >= min)) {
    throw new RangeError('"output" expected length >= ' + min);
  }
}
function clean(...arrays) {
  for (let i2 = 0; i2 < arrays.length; i2++) {
    arrays[i2].fill(0);
  }
}
function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
  return word << 32 - shift | word >>> shift;
}
const hasHexBuiltin = /* @__PURE__ */ (() => (
  // @ts-ignore
  typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
))();
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i2) => i2.toString(16).padStart(2, "0"));
function bytesToHex$1(bytes) {
  abytes$1(bytes);
  if (hasHexBuiltin)
    return bytes.toHex();
  let hex = "";
  for (let i2 = 0; i2 < bytes.length; i2++) {
    hex += hexes[bytes[i2]];
  }
  return hex;
}
function asciiToBase16(ch) {
  return ch >= 48 && ch <= 57 ? ch - 48 : ch >= 65 && ch <= 70 ? ch - (65 - 10) : ch >= 97 && ch <= 102 ? ch - (97 - 10) : void 0;
}
function hexToBytes$1(hex) {
  if (typeof hex !== "string")
    throw new TypeError("hex string expected, got " + typeof hex);
  if (hasHexBuiltin) {
    try {
      return Uint8Array.fromHex(hex);
    } catch (error) {
      if (error instanceof SyntaxError)
        throw new RangeError(error.message);
      throw error;
    }
  }
  const hl = hex.length;
  const al = hl / 2;
  if (hl % 2)
    throw new RangeError("hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
    const n1 = asciiToBase16(hex.charCodeAt(hi));
    const n22 = asciiToBase16(hex.charCodeAt(hi + 1));
    if (n1 === void 0 || n22 === void 0) {
      const char = hex[hi] + hex[hi + 1];
      throw new RangeError('hex string expected, got non-hex character "' + char + '" at index ' + hi);
    }
    array[ai] = n1 * 16 + n22;
  }
  return array;
}
function concatBytes$1(...arrays) {
  let sum = 0;
  for (let i2 = 0; i2 < arrays.length; i2++) {
    const a2 = arrays[i2];
    abytes$1(a2);
    sum += a2.length;
  }
  const res = new Uint8Array(sum);
  for (let i2 = 0, pad = 0; i2 < arrays.length; i2++) {
    const a2 = arrays[i2];
    res.set(a2, pad);
    pad += a2.length;
  }
  return res;
}
function checkOpts(defaults, opts, title = "opts") {
  aopts(defaults, "defaults");
  if (opts !== void 0)
    aopts(opts, title);
  const merged = Object.assign(/* @__PURE__ */ Object.create(null), defaults, opts);
  return merged;
}
function createHasher(hashCons, info = {}) {
  if (typeof hashCons !== "function")
    throw new TypeError('"hashCons" expected function, got type=' + typeof hashCons);
  info = checkOpts({}, info, "info");
  const hashC = (msg, opts) => hashCons(opts).update(msg).digest();
  const tmp = hashCons(void 0);
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.canXOF = tmp.canXOF;
  hashC.create = (opts) => hashCons(opts);
  Object.assign(hashC, info);
  return Object.freeze(hashC);
}
function randomBytes$1(bytesLength = 32) {
  anumber$1(bytesLength, "bytesLength");
  const cr = typeof globalThis === "object" ? globalThis.crypto : null;
  if (typeof cr?.getRandomValues !== "function")
    throw new Error("crypto.getRandomValues must be defined");
  if (bytesLength > 65536)
    throw new RangeError(`"bytesLength" expected <= 65536, got ${bytesLength}`);
  return cr.getRandomValues(new Uint8Array(bytesLength));
}
const oidNist = (suffix) => ({
  // Current NIST hashAlgs suffixes used here fit in one DER subidentifier octet.
  // Larger suffix values would need base-128 OID encoding and a different length byte.
  oid: Uint8Array.from([6, 9, 96, 134, 72, 1, 101, 3, 4, 2, suffix])
});
function Chi(a2, b2, c2) {
  return a2 & b2 ^ ~a2 & c2;
}
function Maj(a2, b2, c2) {
  return a2 & b2 ^ a2 & c2 ^ b2 & c2;
}
class HashMD {
  blockLen;
  outputLen;
  canXOF = false;
  padOffset;
  isLE;
  // For partial updates less than block size
  buffer;
  view;
  finished = false;
  length = 0;
  pos = 0;
  destroyed = false;
  constructor(blockLen, outputLen, padOffset, isLE) {
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    aexists(this);
    abytes$1(data);
    const { view, buffer, blockLen } = this;
    const len = data.length;
    let processed = false;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        processed = true;
        continue;
      }
      buffer.set(pos === 0 && take === len ? data : data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
        processed = true;
      }
    }
    this.length += data.length;
    if (processed)
      this.roundClean();
    return this;
  }
  digestInto(out) {
    aexists(this);
    aoutput(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    buffer.fill(0, pos);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      buffer.fill(0);
    }
    setU64FromNum(view, blockLen - 8, this.length * 8, isLE);
    this.process(view, 0);
    this.roundClean();
    const oview = out === buffer ? view : createView(out);
    const len = this.outputLen;
    const outLen = len / 4;
    const state = this.get();
    if (len % 4 || outLen > state.length)
      throw new Error("invalid outputLen");
    for (let i2 = 0; i2 < outLen; i2++)
      oview.setUint32(4 * i2, state[i2], isLE);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneIntoMeta(to) {
    const { buffer, length, finished, destroyed, pos } = this;
    to.destroyed = destroyed;
    to.finished = finished;
    to.length = length;
    to.pos = pos;
    if (pos)
      to.buffer.set(buffer);
    return to;
  }
  clone() {
    return this._cloneInto();
  }
}
const SHA256_IV = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
const SHA512_IV = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  4089235720,
  3144134277,
  2227873595,
  1013904242,
  4271175723,
  2773480762,
  1595750129,
  1359893119,
  2917565137,
  2600822924,
  725511199,
  528734635,
  4215389547,
  1541459225,
  327033209
]);
const SHA256_K = /* @__PURE__ */ Uint32Array.from([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA2_32B extends HashMD {
  // We cannot use array here since array allows indexing by variable
  // which means optimizer/compiler cannot use registers.
  // Numeric initializers matter: starting the fields as `undefined` changes
  // V8's field representation and makes sha256 3x slower (measured).
  A = 0;
  B = 0;
  C = 0;
  D = 0;
  E = 0;
  F = 0;
  G = 0;
  H = 0;
  constructor(outputLen, IV) {
    super(64, outputLen, 8, false);
    this.A = IV[0] | 0;
    this.B = IV[1] | 0;
    this.C = IV[2] | 0;
    this.D = IV[3] | 0;
    this.E = IV[4] | 0;
    this.F = IV[5] | 0;
    this.G = IV[6] | 0;
    this.H = IV[7] | 0;
  }
  get() {
    const { A: A2, B: B2, C: C2, D: D2, E: E2, F, G, H: H2 } = this;
    return [A2, B2, C2, D2, E2, F, G, H2];
  }
  // prettier-ignore
  set(A2, B2, C2, D2, E2, F, G, H2) {
    this.A = A2 | 0;
    this.B = B2 | 0;
    this.C = C2 | 0;
    this.D = D2 | 0;
    this.E = E2 | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H2 | 0;
  }
  _cloneInto(to) {
    (to ||= new this.constructor()).set(...this.get());
    return this._cloneIntoMeta(to);
  }
  process(view, offset) {
    for (let i2 = 0; i2 < 16; i2++, offset += 4)
      SHA256_W[i2] = view.getUint32(offset, false);
    for (let i2 = 16; i2 < 64; i2++) {
      const W15 = SHA256_W[i2 - 15];
      const W2 = SHA256_W[i2 - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i2] = s1 + SHA256_W[i2 - 7] + s0 + SHA256_W[i2 - 16] | 0;
    }
    let { A: A2, B: B2, C: C2, D: D2, E: E2, F, G, H: H2 } = this;
    for (let i2 = 0; i2 < 64; i2++) {
      const sigma1 = rotr(E2, 6) ^ rotr(E2, 11) ^ rotr(E2, 25);
      const T1 = H2 + sigma1 + Chi(E2, F, G) + SHA256_K[i2] + SHA256_W[i2] | 0;
      const sigma0 = rotr(A2, 2) ^ rotr(A2, 13) ^ rotr(A2, 22);
      const T2 = sigma0 + Maj(A2, B2, C2) | 0;
      H2 = G;
      G = F;
      F = E2;
      E2 = D2 + T1 | 0;
      D2 = C2;
      C2 = B2;
      B2 = A2;
      A2 = T1 + T2 | 0;
    }
    A2 = A2 + this.A | 0;
    B2 = B2 + this.B | 0;
    C2 = C2 + this.C | 0;
    D2 = D2 + this.D | 0;
    E2 = E2 + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H2 = H2 + this.H | 0;
    this.set(A2, B2, C2, D2, E2, F, G, H2);
  }
  roundClean() {
    clean(SHA256_W);
  }
  destroy() {
    this.destroyed = true;
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    clean(this.buffer);
  }
}
class _SHA256 extends SHA2_32B {
  constructor() {
    super(32, SHA256_IV);
  }
}
const K512 = /* @__PURE__ */ (() => split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n3) => BigInt(n3))))();
const SHA512_Kh = /* @__PURE__ */ (() => K512[0])();
const SHA512_Kl = /* @__PURE__ */ (() => K512[1])();
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
class SHA2_64B extends HashMD {
  // We cannot use array here since array allows indexing by variable
  // which means optimizer/compiler cannot use registers.
  // h -- high 32 bits, l -- low 32 bits
  // Numeric initializers matter: starting the fields as `undefined` changes
  // V8's field representation and slows hashing down (measured on sha256).
  Ah = 0;
  Al = 0;
  Bh = 0;
  Bl = 0;
  Ch = 0;
  Cl = 0;
  Dh = 0;
  Dl = 0;
  Eh = 0;
  El = 0;
  Fh = 0;
  Fl = 0;
  Gh = 0;
  Gl = 0;
  Hh = 0;
  Hl = 0;
  constructor(outputLen, IV) {
    super(128, outputLen, 16, false);
    this.Ah = IV[0] | 0;
    this.Al = IV[1] | 0;
    this.Bh = IV[2] | 0;
    this.Bl = IV[3] | 0;
    this.Ch = IV[4] | 0;
    this.Cl = IV[5] | 0;
    this.Dh = IV[6] | 0;
    this.Dl = IV[7] | 0;
    this.Eh = IV[8] | 0;
    this.El = IV[9] | 0;
    this.Fh = IV[10] | 0;
    this.Fl = IV[11] | 0;
    this.Gh = IV[12] | 0;
    this.Gl = IV[13] | 0;
    this.Hh = IV[14] | 0;
    this.Hl = IV[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
  set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
    this.Ah = Ah | 0;
    this.Al = Al | 0;
    this.Bh = Bh | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh | 0;
    this.El = El | 0;
    this.Fh = Fh | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh | 0;
    this.Hl = Hl | 0;
  }
  _cloneInto(to) {
    (to ||= new this.constructor()).set(...this.get());
    return this._cloneIntoMeta(to);
  }
  process(view, offset) {
    for (let i2 = 0; i2 < 16; i2++, offset += 4) {
      SHA512_W_H[i2] = view.getUint32(offset);
      SHA512_W_L[i2] = view.getUint32(offset += 4);
    }
    for (let i2 = 16; i2 < 80; i2++) {
      const W15h = SHA512_W_H[i2 - 15] | 0;
      const W15l = SHA512_W_L[i2 - 15] | 0;
      const s0h = rotrSH(W15h, W15l, 1) ^ rotrSH(W15h, W15l, 8) ^ shrSH(W15h, W15l, 7);
      const s0l = rotrSL(W15h, W15l, 1) ^ rotrSL(W15h, W15l, 8) ^ shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i2 - 2] | 0;
      const W2l = SHA512_W_L[i2 - 2] | 0;
      const s1h = rotrSH(W2h, W2l, 19) ^ rotrBH(W2h, W2l, 61) ^ shrSH(W2h, W2l, 6);
      const s1l = rotrSL(W2h, W2l, 19) ^ rotrBL(W2h, W2l, 61) ^ shrSL(W2h, W2l, 6);
      const SUMl = add4L(s0l, s1l, SHA512_W_L[i2 - 7], SHA512_W_L[i2 - 16]);
      const SUMh = add4H(SUMl, s0h, s1h, SHA512_W_H[i2 - 7], SHA512_W_H[i2 - 16]);
      SHA512_W_H[i2] = SUMh | 0;
      SHA512_W_L[i2] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i2 = 0; i2 < 80; i2++) {
      const sigma1h = rotrSH(Eh, El, 14) ^ rotrSH(Eh, El, 18) ^ rotrBH(Eh, El, 41);
      const sigma1l = rotrSL(Eh, El, 14) ^ rotrSL(Eh, El, 18) ^ rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = add5L(Hl, sigma1l, CHIl, SHA512_Kl[i2], SHA512_W_L[i2]);
      const T1h = add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i2], SHA512_W_H[i2]);
      const T1l = T1ll | 0;
      const sigma0h = rotrSH(Ah, Al, 28) ^ rotrBH(Ah, Al, 34) ^ rotrBH(Ah, Al, 39);
      const sigma0l = rotrSL(Ah, Al, 28) ^ rotrBL(Ah, Al, 34) ^ rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = add3L(T1l, sigma0l, MAJl);
      Ah = add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    clean(SHA512_W_H, SHA512_W_L);
  }
  destroy() {
    this.destroyed = true;
    clean(this.buffer);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class _SHA512 extends SHA2_64B {
  constructor() {
    super(64, SHA512_IV);
  }
}
const sha256$1 = /* @__PURE__ */ createHasher(
  () => new _SHA256(),
  /* @__PURE__ */ oidNist(1)
);
const sha512 = /* @__PURE__ */ createHasher(
  () => new _SHA512(),
  /* @__PURE__ */ oidNist(3)
);
function aarray(item, title, inner = () => {
}) {
  if (!Array.isArray(item))
    throw new TypeError(`"${title}" expected array, got type=${typeof item}`);
  for (let i2 = 0; i2 < item.length; i2++)
    inner(item[i2], `${title}[${i2}]`);
  return item;
}
const abytes = (value, length, title) => abytes$1(value, length, title);
const anumber = anumber$1;
function aobject(value, title = "object") {
  if (value === null || typeof value !== "object" || Array.isArray(value))
    throw new TypeError(title === "object" ? "expected valid options object" : `"${title}" expected object, got type=${typeof value}`);
  return value;
}
function afunction(value, title) {
  if (typeof value !== "function")
    throw new TypeError(`"${title}" is invalid: expected function, got ${typeof value}`);
  return value;
}
const bytesToHex = bytesToHex$1;
const concatBytes = (...arrays) => concatBytes$1(...arrays);
const hexToBytes = (hex) => hexToBytes$1(hex);
const isBytes = isBytes$1;
const randomBytes = (bytesLength) => randomBytes$1(bytesLength);
const _0n$5 = /* @__PURE__ */ BigInt(0);
const _1n$5 = /* @__PURE__ */ BigInt(1);
const atitle = (title) => title ? `"${title}" ` : "";
function abool(value, title = "") {
  if (typeof value !== "boolean")
    throw new TypeError(atitle(title) + "expected boolean, got type=" + typeof value);
  return value;
}
function abignumber(n3) {
  if (typeof n3 === "bigint") {
    if (!isPosBig(n3))
      throw new RangeError("positive bigint expected, got " + n3);
  } else
    anumber(n3);
  return n3;
}
function asafenumber(value, title = "") {
  if (typeof value !== "number") {
    const prefix = title && `"${title}" `;
    throw new TypeError(prefix + "expected number, got type=" + typeof value);
  }
  if (!Number.isSafeInteger(value)) {
    const prefix = title && `"${title}" `;
    throw new RangeError(prefix + "expected safe integer, got " + value);
  }
}
function hexToNumber(hex) {
  if (typeof hex !== "string")
    throw new TypeError("hex string expected, got " + typeof hex);
  return hex === "" ? _0n$5 : BigInt("0x" + hex);
}
function bytesToNumberBE(bytes) {
  return hexToNumber(bytesToHex$1(bytes));
}
function bytesToNumberLE(bytes) {
  return hexToNumber(bytesToHex$1(copyBytes(abytes$1(bytes)).reverse()));
}
function numberToBytesBE(n3, len) {
  anumber$1(len);
  if (len === 0)
    throw new Error("zero output length is invalid");
  n3 = abignumber(n3);
  const expectedLen = len * 2;
  const hex = n3.toString(16);
  if (hex.length > expectedLen)
    throw new RangeError("number is too large");
  return hexToBytes$1(hex.padStart(expectedLen, "0"));
}
function numberToBytesLE(n3, len) {
  return numberToBytesBE(n3, len).reverse();
}
function copyBytes(bytes) {
  return Uint8Array.from(abytes(bytes));
}
function asciiToBytes(ascii) {
  if (typeof ascii !== "string")
    throw new TypeError("ascii string expected, got " + typeof ascii);
  return Uint8Array.from(ascii, (c2, i2) => {
    const charCode = c2.charCodeAt(0);
    if (c2.length !== 1 || charCode > 127) {
      throw new RangeError(`string contains non-ASCII character "${ascii[i2]}" with code ${charCode} at position ${i2}`);
    }
    return charCode;
  });
}
function isPosBig(n3) {
  return typeof n3 === "bigint" && _0n$5 <= n3;
}
function inRange(n3, min, max) {
  return isPosBig(n3) && isPosBig(min) && isPosBig(max) && min <= n3 && n3 < max;
}
function aInRange(title, n3, min, max) {
  if (!inRange(n3, min, max))
    throw new RangeError("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n3);
}
function bitLen(n3) {
  if (n3 < _0n$5)
    throw new Error("expected non-negative bigint, got " + n3);
  return n3 === _0n$5 ? 0 : n3.toString(2).length;
}
const bitMask = (n3) => {
  asafenumber(n3, "n");
  return (_1n$5 << BigInt(n3)) - _1n$5;
};
function validateObject(object, fields = {}, optFields = {}, title = "object") {
  aobject(object, title);
  aobject(fields, "fields");
  aobject(optFields, "optFields");
  function checkField(fieldName, expectedType, isOpt) {
    const label = title === "object" ? `param "${String(fieldName)}"` : `"${title}.${String(fieldName)}"`;
    const val = object[fieldName];
    if (!Object.hasOwn(object, fieldName) && (isOpt ? val !== void 0 : expectedType !== "function")) {
      throw new TypeError(`${label} is invalid: expected own property`);
    }
    if (isOpt && val === void 0)
      return;
    const current = typeof val;
    if (current !== expectedType || val === null)
      throw new TypeError(`${label} is invalid: expected ${expectedType}, got ${current}`);
  }
  const iter = (f2, isOpt) => Object.entries(f2).forEach(([k2, v2]) => checkField(k2, v2, isOpt));
  iter(fields, false);
  iter(optFields, true);
}
const _0n$4 = /* @__PURE__ */ BigInt(0), _1n$4 = /* @__PURE__ */ BigInt(1), _2n$4 = /* @__PURE__ */ BigInt(2);
const _3n$1 = /* @__PURE__ */ BigInt(3), _4n$3 = /* @__PURE__ */ BigInt(4), _5n$1 = /* @__PURE__ */ BigInt(5);
const _7n = /* @__PURE__ */ BigInt(7), _8n$2 = /* @__PURE__ */ BigInt(8), _9n = /* @__PURE__ */ BigInt(9);
const _15n = /* @__PURE__ */ BigInt(15), _16n = /* @__PURE__ */ BigInt(16);
const POW_WINDOWED_MIN = /* @__PURE__ */ BigInt("0x10000000000000000");
function mod(a2, b2) {
  if (b2 <= _0n$4)
    throw new Error("mod: expected positive modulus, got " + b2);
  const result = a2 % b2;
  return result >= _0n$4 ? result : b2 + result;
}
function pow(num2, power, modulo) {
  if (modulo <= _1n$4)
    throw new Error("pow: expected modulus > 1, got " + modulo);
  if (typeof power !== "bigint")
    throw new TypeError("invalid exponent: expected bigint, got " + typeof power);
  if (power < _0n$4)
    throw new Error("invalid exponent, negatives unsupported");
  if (power === _0n$4)
    return _1n$4;
  if (power === _1n$4)
    return num2;
  let d2 = num2 % modulo;
  if (d2 < _0n$4)
    d2 += modulo;
  if (power < POW_WINDOWED_MIN) {
    let p3 = _1n$4;
    while (power > _0n$4) {
      if (power & _1n$4)
        p3 = p3 * d2 % modulo;
      d2 = d2 * d2 % modulo;
      power >>= _1n$4;
    }
    return p3;
  }
  const digits = [];
  while (power > _0n$4) {
    digits.push(Number(power & _15n));
    power >>= _4n$3;
  }
  const table = new Array(16);
  table[0] = _1n$4;
  table[1] = d2;
  for (let i2 = 2; i2 < 16; i2++)
    table[i2] = table[i2 - 1] * d2 % modulo;
  let p2 = table[digits[digits.length - 1]];
  for (let w2 = digits.length - 2; w2 >= 0; w2--) {
    p2 = p2 * p2 % modulo;
    p2 = p2 * p2 % modulo;
    p2 = p2 * p2 % modulo;
    p2 = p2 * p2 % modulo;
    const digit = digits[w2];
    if (digit !== 0)
      p2 = p2 * table[digit] % modulo;
  }
  return p2;
}
function pow2(x2, power, modulo) {
  if (modulo <= _1n$4)
    throw new Error("pow2: expected modulus > 1, got " + modulo);
  if (power < _0n$4)
    throw new Error("pow2: expected non-negative exponent, got " + power);
  let res = x2;
  while (power-- > _0n$4) {
    res *= res;
    res %= modulo;
  }
  return res;
}
function invert(number, modulo) {
  if (number === _0n$4)
    throw new Error("invert: expected non-zero number");
  if (modulo <= _1n$4)
    throw new Error("invert: expected modulus > 1, got " + modulo);
  let a2 = mod(number, modulo);
  let b2 = modulo;
  let x2 = _0n$4, u2 = _1n$4;
  while (a2 !== _0n$4) {
    const q = b2 / a2;
    const r2 = b2 - a2 * q;
    const m2 = x2 - u2 * q;
    b2 = a2, a2 = r2, x2 = u2, u2 = m2;
  }
  const gcd = b2;
  if (gcd !== _1n$4)
    throw new Error("invert: does not exist");
  return mod(x2, modulo);
}
function assertIsSquare(Fp2, root, n3) {
  const F = Fp2;
  if (!F.eql(F.sqr(root), n3))
    throw new Error("Cannot find square root");
}
function aoddModulus(order, fnName) {
  if ((order & _1n$4) === _0n$4)
    throw new Error(fnName + ": expected odd modulus, got " + order);
}
function sqrt3mod4(Fp2, n3) {
  const F = Fp2;
  const p1div4 = (F.ORDER + _1n$4) / _4n$3;
  const root = F.pow(n3, p1div4);
  assertIsSquare(F, root, n3);
  return root;
}
function sqrt5mod8(Fp2, n3) {
  const F = Fp2;
  const p5div8 = (F.ORDER - _5n$1) / _8n$2;
  const n22 = F.mul(n3, _2n$4);
  const v2 = F.pow(n22, p5div8);
  const nv = F.mul(n3, v2);
  const i2 = F.mul(F.mul(nv, _2n$4), v2);
  const root = F.mul(nv, F.sub(i2, F.ONE));
  assertIsSquare(F, root, n3);
  return root;
}
function sqrt9mod16(P2) {
  const Fp_ = Field(P2);
  const tn = tonelliShanks(P2);
  const c1 = tn(Fp_, Fp_.neg(Fp_.ONE));
  const c2 = tn(Fp_, c1);
  const c3 = tn(Fp_, Fp_.neg(c1));
  const c4 = (P2 + _7n) / _16n;
  return ((Fp2, n3) => {
    const F = Fp2;
    let tv1 = F.pow(n3, c4);
    let tv2 = F.mul(tv1, c1);
    const tv3 = F.mul(tv1, c2);
    const tv4 = F.mul(tv1, c3);
    const e1 = F.eql(F.sqr(tv2), n3);
    const e2 = F.eql(F.sqr(tv3), n3);
    tv1 = F.cmov(tv1, tv2, e1);
    tv2 = F.cmov(tv4, tv3, e2);
    const e3 = F.eql(F.sqr(tv2), n3);
    const root = F.cmov(tv1, tv2, e3);
    assertIsSquare(F, root, n3);
    return root;
  });
}
function tonelliShanks(P2) {
  if (P2 < _3n$1)
    throw new Error("sqrt is not defined for small field");
  aoddModulus(P2, "tonelliShanks");
  let Q = P2 - _1n$4;
  let S2 = 0;
  while (Q % _2n$4 === _0n$4) {
    Q /= _2n$4;
    S2++;
  }
  let Z2 = _2n$4;
  const _Fp = Field(P2);
  while (FpLegendre(_Fp, Z2) === 1) {
    if (Z2++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  }
  if (S2 === 1)
    return sqrt3mod4;
  let cc = _Fp.pow(Z2, Q);
  const Q1div2 = (Q + _1n$4) / _2n$4;
  return function tonelliSlow(Fp2, n3) {
    const F = Fp2;
    if (F.is0(n3))
      return n3;
    if (FpLegendre(F, n3) !== 1)
      throw new Error("Cannot find square root");
    let M2 = S2;
    let c2 = F.mul(F.ONE, cc);
    let t2 = F.pow(n3, Q);
    let R2 = F.pow(n3, Q1div2);
    while (!F.eql(t2, F.ONE)) {
      if (F.is0(t2))
        throw new Error("Cannot find square root: probably non-prime P");
      let i2 = 1;
      let t_tmp = F.sqr(t2);
      while (!F.eql(t_tmp, F.ONE)) {
        i2++;
        t_tmp = F.sqr(t_tmp);
        if (i2 === M2)
          throw new Error("Cannot find square root");
      }
      const exponent = _1n$4 << BigInt(M2 - i2 - 1);
      const b2 = F.pow(c2, exponent);
      M2 = i2;
      c2 = F.sqr(b2);
      t2 = F.mul(t2, c2);
      R2 = F.mul(R2, b2);
    }
    return R2;
  };
}
function FpSqrt(P2) {
  aoddModulus(P2, "Fp.sqrt");
  if (P2 % _4n$3 === _3n$1)
    return sqrt3mod4;
  if (P2 % _8n$2 === _5n$1)
    return sqrt5mod8;
  if (P2 % _16n === _9n)
    return sqrt9mod16(P2);
  return tonelliShanks(P2);
}
const isNegativeLE = (num2, modulo) => (mod(num2, modulo) & _1n$4) === _1n$4;
const FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  aobject(field, "field");
  if (typeof field.ORDER !== "bigint")
    throw new TypeError('param "ORDER" is invalid: expected bigint, got ' + typeof field.ORDER);
  asafenumber(field.BYTES, "BYTES");
  asafenumber(field.BITS, "BITS");
  for (const name of FIELD_FIELDS)
    afunction(field[name], "field." + name);
  if (field.BYTES < 1 || field.BITS < 1)
    throw new Error("invalid field: expected BYTES/BITS > 0");
  if (field.ORDER <= _1n$4)
    throw new Error("invalid field: expected ORDER > 1, got " + field.ORDER);
  return field;
}
function FpInvertBatch(Fp2, nums, passZero = false) {
  validateField(Fp2);
  aarray(nums, "nums");
  abool(passZero, "passZero");
  const F = Fp2;
  const inverted = new Array(nums.length).fill(passZero ? F.ZERO : void 0);
  const multipliedAcc = nums.reduce((acc, num2, i2) => {
    if (F.is0(num2))
      return acc;
    inverted[i2] = acc;
    return F.mul(acc, num2);
  }, F.ONE);
  const invertedAcc = F.inv(multipliedAcc);
  nums.reduceRight((acc, num2, i2) => {
    if (F.is0(num2))
      return acc;
    inverted[i2] = F.mul(acc, inverted[i2]);
    return F.mul(acc, num2);
  }, invertedAcc);
  return inverted;
}
function FpLegendre(Fp2, n3) {
  validateField(Fp2);
  const F = Fp2;
  aoddModulus(F.ORDER, "FpLegendre");
  const p1mod2 = (F.ORDER - _1n$4) / _2n$4;
  const powered = F.pow(n3, p1mod2);
  const yes = F.eql(powered, F.ONE);
  const zero = F.eql(powered, F.ZERO);
  const no = F.eql(powered, F.neg(F.ONE));
  if (!yes && !zero && !no)
    throw new Error("invalid Legendre symbol result");
  return yes ? 1 : zero ? 0 : -1;
}
function nLength(n3, nBitLength) {
  if (nBitLength !== void 0)
    anumber(nBitLength);
  if (n3 <= _0n$4)
    throw new Error("invalid n length: expected positive n, got " + n3);
  if (nBitLength !== void 0 && nBitLength < 1)
    throw new Error("invalid n length: expected positive bit length, got " + nBitLength);
  const bits = bitLen(n3);
  if (nBitLength !== void 0 && nBitLength < bits)
    throw new Error(`invalid n length: expected nBitLength (${nBitLength}) >= bitLen(n) (${bits})`);
  const _nBitLength = nBitLength !== void 0 ? nBitLength : bits;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
const FIELD_SQRT = /* @__PURE__ */ new WeakMap();
class _Field {
  ORDER;
  BITS;
  BYTES;
  isLE;
  ZERO = _0n$4;
  ONE = _1n$4;
  _lengths;
  _mod;
  constructor(ORDER, opts = {}) {
    if (ORDER <= _1n$4)
      throw new Error("invalid field: expected ORDER > 1, got " + ORDER);
    let _nbitLength = void 0;
    this.isLE = false;
    if (opts != null && typeof opts === "object") {
      if (typeof opts.BITS === "number")
        _nbitLength = opts.BITS;
      if (typeof opts.sqrt === "function")
        Object.defineProperty(this, "sqrt", { value: opts.sqrt, enumerable: true });
      if (typeof opts.isLE === "boolean")
        this.isLE = opts.isLE;
      if (opts.allowedLengths)
        this._lengths = Object.freeze(opts.allowedLengths.slice());
      if (typeof opts.modFromBytes === "boolean")
        this._mod = opts.modFromBytes;
    }
    const { nBitLength, nByteLength } = nLength(ORDER, _nbitLength);
    if (nByteLength > 2048)
      throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    this.ORDER = ORDER;
    this.BITS = nBitLength;
    this.BYTES = nByteLength;
    Object.freeze(this);
  }
  create(num2) {
    return mod(num2, this.ORDER);
  }
  isValid(num2) {
    if (typeof num2 !== "bigint")
      throw new TypeError("invalid field element: expected bigint, got " + typeof num2);
    return _0n$4 <= num2 && num2 < this.ORDER;
  }
  is0(num2) {
    return num2 === _0n$4;
  }
  // is valid and invertible
  isValidNot0(num2) {
    return !this.is0(num2) && this.isValid(num2);
  }
  isOdd(num2) {
    return (num2 & _1n$4) === _1n$4;
  }
  neg(num2) {
    return mod(-num2, this.ORDER);
  }
  eql(lhs, rhs) {
    return lhs === rhs;
  }
  sqr(num2) {
    return mod(num2 * num2, this.ORDER);
  }
  add(lhs, rhs) {
    return mod(lhs + rhs, this.ORDER);
  }
  sub(lhs, rhs) {
    return mod(lhs - rhs, this.ORDER);
  }
  mul(lhs, rhs) {
    return mod(lhs * rhs, this.ORDER);
  }
  pow(num2, power) {
    return pow(num2, power, this.ORDER);
  }
  div(lhs, rhs) {
    return mod(lhs * invert(rhs, this.ORDER), this.ORDER);
  }
  // Same as above, but doesn't normalize
  sqrN(num2) {
    return num2 * num2;
  }
  addN(lhs, rhs) {
    return lhs + rhs;
  }
  subN(lhs, rhs) {
    return lhs - rhs;
  }
  mulN(lhs, rhs) {
    return lhs * rhs;
  }
  inv(num2) {
    return invert(num2, this.ORDER);
  }
  sqrt(num2) {
    let sqrt = FIELD_SQRT.get(this);
    if (!sqrt)
      FIELD_SQRT.set(this, sqrt = FpSqrt(this.ORDER));
    return sqrt(this, num2);
  }
  toBytes(num2) {
    return this.isLE ? numberToBytesLE(num2, this.BYTES) : numberToBytesBE(num2, this.BYTES);
  }
  fromBytes(bytes, skipValidation = false) {
    abytes(bytes);
    const { _lengths: allowedLengths, BYTES, isLE, ORDER, _mod: modFromBytes } = this;
    if (allowedLengths) {
      if (bytes.length < 1 || !allowedLengths.includes(bytes.length) || bytes.length > BYTES) {
        throw new Error("Field.fromBytes: expected " + allowedLengths + " bytes, got " + bytes.length);
      }
      const padded = new Uint8Array(BYTES);
      padded.set(bytes, isLE ? 0 : padded.length - bytes.length);
      bytes = padded;
    }
    if (bytes.length !== BYTES)
      throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
    let scalar = isLE ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
    if (modFromBytes)
      scalar = mod(scalar, ORDER);
    if (!skipValidation) {
      if (!this.isValid(scalar))
        throw new Error("invalid field element: outside of range 0..ORDER");
    }
    return scalar;
  }
  // TODO: we don't need it here, move out to separate fn
  invertBatch(lst) {
    return FpInvertBatch(this, lst, true);
  }
  // We can't move this out because Fp6, Fp12 implement it
  // and it's unclear what to return in there.
  cmov(a2, b2, condition) {
    abool(condition, "condition");
    return condition ? b2 : a2;
  }
}
function Field(ORDER, opts = {}) {
  Object.freeze(_Field.prototype);
  return new _Field(ORDER, opts);
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  if (fieldOrder <= _1n$4)
    throw new Error("field order must be greater than 1");
  const bitLength = bitLen(fieldOrder - _1n$4);
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  const length = getFieldBytesLength(fieldOrder);
  return length + Math.ceil(length / 2);
}
function mapHashToField(key, fieldOrder, isLE = false) {
  abytes(key);
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = Math.max(getMinHashLength(fieldOrder), 16);
  if (len < minLen || len > 1024)
    throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
  const num2 = isLE ? bytesToNumberLE(key) : bytesToNumberBE(key);
  const reduced = mod(num2, fieldOrder - _1n$4) + _1n$4;
  return isLE ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}
const _0n$3 = /* @__PURE__ */ BigInt(0);
const _1n$3 = /* @__PURE__ */ BigInt(1);
const _4n$2 = /* @__PURE__ */ BigInt(4);
const BLIND_BYTES = 16;
const BLIND_BITS = 128;
const FW_WINDOW = 5;
const TABLE_BYTES_MAX = /* @__PURE__ */ (() => 2 ** 31)();
function validatePointCons(Point) {
  const pc = Point;
  if (typeof pc !== "function")
    throw new TypeError('"Point" expected constructor, got type=' + typeof Point);
  afunction(pc.fromAffine, "Point.fromAffine");
  afunction(pc.fromBytes, "Point.fromBytes");
  afunction(pc.fromHex, "Point.fromHex");
  aobject(pc.BASE, "Point.BASE");
  aobject(pc.ZERO, "Point.ZERO");
  validateField(pc.Fp);
  validateField(pc.Fn);
}
function normalizeZ(c2, points) {
  validatePointCons(c2);
  validateMSMPoints(points, c2);
  const invertedZs = FpInvertBatch(c2.Fp, points.map((p2) => p2.Z));
  return points.map((p2, i2) => c2.fromAffine(p2.toAffine(invertedZs[i2])));
}
function validateW(W, bits, min = 1) {
  if (!Number.isSafeInteger(W) || W < min || W > bits)
    throw new Error("invalid window size, expected [" + min + ".." + bits + "], got W=" + W);
}
function validateTableBytes(numPoints, fpBytes) {
  const bytes = numPoints * (4 * fpBytes + 128);
  if (bytes > TABLE_BYTES_MAX)
    throw new Error("invalid window size: table would need ~" + Math.ceil(bytes / 2 ** 20) + " MiB, max " + TABLE_BYTES_MAX / 2 ** 20 + " MiB");
}
function probeRandomBytes(randomBytes2, length) {
  if (randomBytes2 === void 0)
    return void 0;
  afunction(randomBytes2, "randomBytes");
  try {
    const probe = randomBytes2(length);
    if (!isBytes(probe) || probe.length !== length)
      return void 0;
  } catch {
    return void 0;
  }
  return randomBytes2;
}
function validateMSMPoints(points, c2) {
  aarray(points, "points");
  points.forEach((p2, i2) => {
    if (!(p2 instanceof c2))
      throw new Error("invalid point at index " + i2);
  });
}
function validateMSMScalars(scalars, field, maxScalar) {
  if (!Array.isArray(scalars))
    throw new Error("array of scalars expected");
  scalars.forEach((s2, i2) => {
    const ok = maxScalar === void 0 ? field.isValid(s2) : isPosBig(s2) && s2 < maxScalar;
    if (!ok)
      throw new Error("invalid scalar at index " + i2);
  });
}
const pointWindowSizes = /* @__PURE__ */ new WeakMap();
function getWindowSize(P2) {
  return pointWindowSizes.get(P2) || 1;
}
function oddMultiples(p2, size) {
  const dbl = p2.double();
  const t2 = [p2];
  for (let j = 1; j < size; j++)
    t2.push(t2[j - 1].add(dbl));
  return t2;
}
function wnafDigits(n3, W) {
  const size = 2 ** W;
  const half = size / 2;
  const mask = BigInt(size - 1);
  const d2 = [];
  while (n3 > _0n$3) {
    let w2 = 0;
    if (n3 & _1n$3) {
      w2 = Number(n3 & mask);
      if (w2 >= half)
        w2 -= size;
      n3 -= BigInt(w2);
    }
    d2.push(w2);
    n3 >>= _1n$3;
  }
  return d2;
}
function signedWindowDigits(n3, W, windows) {
  const size = 2 ** W;
  const half = size / 2;
  const mask = BigInt(size - 1);
  const shiftBy = BigInt(W);
  const d2 = [];
  for (let w2 = 0; w2 < windows; w2++) {
    let v2 = Number(n3 & mask);
    n3 >>= shiftBy;
    if (v2 > half) {
      v2 -= size;
      n3 += _1n$3;
    }
    d2.push(v2);
  }
  if (n3 !== _0n$3)
    throw new Error("invalid wnaf");
  return d2;
}
function wnafWalk(zero, tables, digits) {
  let max = 0;
  for (const d2 of digits)
    max = Math.max(max, d2.length);
  let acc = zero;
  for (let bit = max - 1; bit >= 0; bit--) {
    if (bit !== max - 1)
      acc = acc.double();
    for (let i2 = 0; i2 < digits.length; i2++) {
      const w2 = digits[i2][bit];
      if (w2) {
        const item = tables[i2][Math.abs(w2) - 1 >> 1];
        acc = acc.add(w2 < 0 ? item.negate() : item);
      }
    }
  }
  return acc;
}
class ScalarMultiplier {
  Point;
  BASE;
  ZERO;
  randomBytes;
  wnafPrecomputes = /* @__PURE__ */ new WeakMap();
  baseCanBeBlinded;
  bits;
  // Parametrized with a given Point class (not individual point)
  constructor(Point, randomBytes2) {
    validatePointCons(Point);
    this.randomBytes = probeRandomBytes(randomBytes2, BLIND_BYTES);
    this.Point = Point;
    this.BASE = Point.BASE;
    this.ZERO = Point.ZERO;
    this.bits = Point.Fn.BITS;
  }
  /**
   * Creates a signed fixed-window wNAF precomputation table: for every window w, the
   * multiples `[1..2^(W−1)]⋅2^(w⋅W)⋅P`, flattened. All doublings are baked into the table,
   * so cached multiplication is additions-only. `windows = ceil(bits/W) + 1`: the extra
   * window absorbs the final carry of signed-digit recoding.
   * For a 256-bit curve and W=6, the table is 44⋅32 = 1408 points.
   * @param point - Point instance
   * @param W - window size
   * @param bits - scalar bitlength the table must cover
   */
  buildWnafTable(point, W, bits) {
    const windows = Math.ceil(bits / W) + 1;
    const half = 2 ** (W - 1);
    const comp = [];
    let base = point;
    for (let w2 = 0; w2 < windows; w2++) {
      let acc = base;
      for (let i2 = 0; i2 < half; i2++) {
        comp.push(acc);
        acc = acc.add(base);
      }
      base = comp[comp.length - 1].double();
    }
    return { W, bits, windows, comp };
  }
  /**
   * Implements ec multiplication using precomputed signed fixed-window wNAF tables.
   * Constant-time: fixed window count with one table addition per window — zero digits feed
   * the fake accumulator — and no doublings; the lookup scans the whole window slice.
   * Scalar bounds are validated by the public entry points ({@link ScalarMultiplier.mulCT},
   * {@link ScalarMultiplier.mulCTBlinded}, {@link ScalarMultiplier.mulUnsafe});
   * signedWindowDigits throws if `n` exceeds the table.
   * @returns real and fake (for const-time) points
   */
  wnafCachedCT(precomputes, n3) {
    const { W, windows, comp } = precomputes;
    const half = 2 ** (W - 1);
    const digits = signedWindowDigits(n3, W, windows);
    let p2 = this.ZERO;
    let f2 = this.BASE;
    for (let w2 = 0; w2 < windows; w2++) {
      const digit = digits[w2];
      const start = w2 * half;
      const idx = Math.abs(digit) - 1;
      let sel = comp[start];
      for (let i2 = 1; i2 < half; i2++)
        sel = i2 === idx ? comp[start + i2] : sel;
      const neg = sel.negate();
      if (digit === 0)
        f2 = f2.add(comp[start]);
      else
        p2 = p2.add(digit < 0 ? neg : sel);
    }
    return { p: p2, f: f2 };
  }
  // Cache key is point identity plus (W, bits); at most two entries exist per point (public-width
  // `Fn.BITS` and blinded `Fn.BITS + BLIND_BITS`). Callers must not reuse the same point with
  // incompatible `transform(...)` layouts and expect a separate cache entry.
  getWnafPrecomputes(W, point, bits, transform) {
    let entries = this.wnafPrecomputes.get(point);
    let comp = entries?.find((entry) => entry.W === W && entry.bits === bits);
    if (!comp) {
      comp = this.buildWnafTable(point, W, bits);
      if (typeof transform === "function")
        comp = { ...comp, comp: transform(comp.comp) };
      if (!entries) {
        entries = [];
        this.wnafPrecomputes.set(point, entries);
      }
      entries.push(comp);
    }
    return comp;
  }
  assertPoint(point) {
    if (!(point instanceof this.Point))
      throw new TypeError('"point" expected Point instance, got type=' + typeof point);
  }
  // Shared prologue of the constant-time entry points. Rejects scalar 0: in key/signature-style
  // callers a zero scalar means broken upstream plumbing, and concrete Points already reject it.
  // Uses inRange instead of Fn.isValidNot0: validateField() only certifies the arithmetic subset.
  validateMulInput(point, scalar) {
    this.assertPoint(point);
    if (!inRange(scalar, _1n$3, this.Point.Fn.ORDER))
      throw new Error("invalid scalar");
  }
  // Constant-time dispatch shared by mulCT / mulCTBlinded. Un-precomputed points (W===1, e.g.
  // ECDH peer keys) skip building a throwaway cached table in favor of a small fixed-window
  // multiply. `n` must be < 2^bits.
  runCT(point, n3, bits, transform) {
    const W = getWindowSize(point);
    if (W === 1)
      return this.fixedWindowCT(point, n3, bits);
    return this.wnafCachedCT(this.getWnafPrecomputes(W, point, bits, transform), n3);
  }
  mulCT(point, scalar, transform) {
    this.validateMulInput(point, scalar);
    return this.runCT(point, scalar, this.bits, transform);
  }
  mulCTBlinded(point, scalar, transform) {
    this.validateMulInput(point, scalar);
    if (this.randomBytes === void 0)
      throw new Error("randomBytes is required for scalar blinding");
    const bits = this.Point.Fn.BITS + BLIND_BITS;
    const blind = this.randomBytes(BLIND_BYTES);
    if (!isBytes(blind) || blind.length !== BLIND_BYTES)
      throw new Error("randomBytes returned invalid byte array");
    blind[0] = blind[0] & 63 | 128;
    const n3 = scalar + bytesToNumberBE(blind) * this.Point.Fn.ORDER;
    return this.runCT(point, n3, bits, transform);
  }
  /**
   * Constant-time multiplication `n*point` for an un-precomputed point, via a small fixed window.
   * A cached wNAF table only pays off when reused; a flat 2^FW_WINDOW table (`size-1` adds) is
   * far cheaper to build for a single use. The point-operation sequence is independent of `n`:
   * build the table, then per window exactly FW_WINDOW doublings, a data-oblivious scan over
   * every table entry, and one addition (adds the identity when the window digit is 0 — never
   * skipped).
   *
   * `n` must be `< 2^bits`. Assumes complete addition (adding the identity costs the same as any
   * add), which holds for the Weierstrass/Edwards point types used here. The table is left in
   * projective form (no normalizeZ): normalizing this small a table costs more than the
   * mixed-add savings it would buy for a single multiply.
   * @returns real point `p`; `f` duplicates it only to match {@link wnafCachedCT}'s return shape
   * (this path needs no fake accumulator — its op-count is already scalar-independent).
   */
  fixedWindowCT(point, n3, bits) {
    const W = FW_WINDOW;
    const size = 1 << W;
    const mask = bitMask(W);
    const table = new Array(size);
    table[0] = this.ZERO;
    for (let i2 = 1; i2 < size; i2++)
      table[i2] = table[i2 - 1].add(point);
    const windows = Math.ceil(bits / W);
    let acc = this.ZERO;
    for (let window2 = windows - 1; window2 >= 0; window2--) {
      if (window2 !== windows - 1)
        for (let d2 = 0; d2 < W; d2++)
          acc = acc.double();
      const digit = Number(n3 >> BigInt(window2 * W) & mask);
      let sel = table[0];
      for (let i2 = 1; i2 < size; i2++)
        sel = i2 === digit ? table[i2] : sel;
      acc = acc.add(sel);
    }
    return { p: acc, f: acc };
  }
  shouldBlind(point, cofactor) {
    if (this.randomBytes === void 0)
      return false;
    if (cofactor === _1n$3)
      return true;
    if (point !== this.BASE)
      return false;
    if (this.baseCanBeBlinded === void 0)
      this.baseCanBeBlinded = this.mulUnsafe(this.BASE, this.Point.Fn.ORDER).is0();
    return this.baseCanBeBlinded;
  }
  mulSecret(point, scalar, cofactor, transform) {
    return this.shouldBlind(point, cofactor) ? this.mulCTBlinded(point, scalar, transform) : this.mulCT(point, scalar, transform);
  }
  mulUnsafe(point, scalar, transform) {
    this.assertPoint(point);
    if (!isPosBig(scalar))
      throw new Error("invalid scalar");
    const W = getWindowSize(point);
    if (W === 1 || scalar >= this.Point.Fn.ORDER)
      return mulAddUnsafe(this.Point, [point], [scalar], true);
    const precomputes = this.getWnafPrecomputes(W, point, this.bits, transform);
    return this.wnafCachedCT(precomputes, scalar).p;
  }
  // Remembers the window size used for precomputed wNAF multiplication of the given point
  // and drops any previously built tables. Usually only the base point is precomputed.
  // W=1 resets the point to the un-precomputed (table-less) paths.
  // W is additionally capped so tables stay under ~2 GiB ({@link TABLE_BYTES_MAX}).
  setWindowSize(point, W) {
    this.assertPoint(point);
    validateW(W, this.bits);
    const windows = Math.ceil((this.bits + BLIND_BITS) / W) + 1;
    validateTableBytes(windows * 2 ** (W - 1), this.Point.Fp.BYTES);
    pointWindowSizes.set(point, W);
    this.wnafPrecomputes.delete(point);
  }
  // True when a window size is set: tables themselves are built lazily on first multiply.
  hasWindowSize(point) {
    return getWindowSize(point) !== 1;
  }
}
function mulAddUnsafe(c2, points, scalars, allowOversized = false) {
  validatePointCons(c2);
  validateMSMPoints(points, c2);
  abool(allowOversized, "allowOversized");
  validateMSMScalars(scalars, c2.Fn, allowOversized ? c2.Fn.ORDER ** _4n$2 : void 0);
  if (points.length !== scalars.length)
    throw new Error("arrays of points and scalars must have equal length");
  const tables = points.map((p2) => oddMultiples(p2, 4));
  const digits = scalars.map((n3) => wnafDigits(n3, 4));
  return wnafWalk(c2.ZERO, tables, digits);
}
function createField(order, field, isLE) {
  if (field) {
    if (field.ORDER !== order)
      throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    validateField(field);
    return field;
  } else {
    return Field(order, { isLE });
  }
}
function createCurveFields(type, CURVE, curveOpts = {}, FpFnLE) {
  if (type !== "weierstrass" && type !== "edwards")
    throw new Error('expected curve type "weierstrass" or "edwards"');
  if (FpFnLE === void 0)
    FpFnLE = type === "edwards";
  if (!CURVE || typeof CURVE !== "object")
    throw new Error(`expected valid ${type} CURVE object`);
  validateObject(curveOpts);
  for (const p2 of ["p", "n", "h"]) {
    const val = CURVE[p2];
    if (!(isPosBig(val) && val !== _0n$3))
      throw new Error(`CURVE.${p2} must be positive bigint`);
  }
  const Fp2 = createField(CURVE.p, curveOpts.Fp, FpFnLE);
  const Fn = createField(CURVE.n, curveOpts.Fn, FpFnLE);
  const _b = type === "weierstrass" ? "b" : "d";
  const params = ["Gx", "Gy", "a", _b];
  for (const p2 of params) {
    if (!Fp2.isValid(CURVE[p2]))
      throw new Error(`CURVE.${p2} must be valid field element of CURVE.Fp`);
  }
  CURVE = Object.freeze(Object.assign({}, CURVE));
  return { CURVE, Fp: Fp2, Fn };
}
function createKeygen(randomSecretKey, getPublicKey) {
  return function keygen(seed) {
    const secretKey = randomSecretKey(seed);
    return { secretKey, publicKey: getPublicKey(secretKey) };
  };
}
const _0n$2 = /* @__PURE__ */ BigInt(0), _1n$2 = /* @__PURE__ */ BigInt(1), _2n$3 = /* @__PURE__ */ BigInt(2), _4n$1 = /* @__PURE__ */ BigInt(4), _8n$1 = /* @__PURE__ */ BigInt(8);
function isEdValidXY(Fp2, CURVE, x2, y3) {
  const x22 = Fp2.sqr(x2);
  const y22 = Fp2.sqr(y3);
  const left = Fp2.add(Fp2.mul(CURVE.a, x22), y22);
  const right = Fp2.add(Fp2.ONE, Fp2.mul(CURVE.d, Fp2.mul(x22, y22)));
  return Fp2.eql(left, right);
}
function edwards(params, extraOpts = {}) {
  validateObject(extraOpts, {}, {}, "extraOpts");
  const opts = extraOpts;
  const validated = createCurveFields("edwards", params, opts, opts.FpFnLE);
  const { Fp: Fp2, Fn } = validated;
  let CURVE = validated.CURVE;
  const { h: cofactor } = CURVE;
  if (FpLegendre(Fp2, CURVE.a) !== 1)
    throw new Error("edwards: CURVE.a must be a square in Fp for complete addition formulas");
  if (FpLegendre(Fp2, CURVE.d) !== -1)
    throw new Error("edwards: CURVE.d must be a non-square in Fp for complete addition formulas");
  validateObject(opts, {}, { uvRatio: "function", randomBytes: "function" });
  const randomBytes$12 = opts.randomBytes === void 0 ? randomBytes : opts.randomBytes;
  const MASK = _2n$3 << BigInt(Fp2.BYTES * 8) - _1n$2;
  function isOdd(n3) {
    if (!Fp2.isOdd)
      throw new Error("Field does not have .isOdd()");
    return Fp2.isOdd(n3);
  }
  const uvRatio2 = opts.uvRatio === void 0 ? (u2, v2) => {
    try {
      return { isValid: true, value: Fp2.sqrt(Fp2.div(u2, v2)) };
    } catch (e2) {
      return { isValid: false, value: _0n$2 };
    }
  } : opts.uvRatio;
  if (!isEdValidXY(Fp2, CURVE, CURVE.Gx, CURVE.Gy))
    throw new Error("bad curve params: generator point");
  const mulA = Fp2.eql(CURVE.a, Fp2.neg(Fp2.ONE)) ? (x2) => Fp2.neg(x2) : Fp2.eql(CURVE.a, Fp2.ONE) ? (x2) => x2 : (x2) => Fp2.mul(CURVE.a, x2);
  function acoord(title, n3, banZero = false) {
    const min = banZero ? _1n$2 : _0n$2;
    aInRange("coordinate " + title, n3, min, MASK);
    return n3;
  }
  function aedpoint(other) {
    if (!(other instanceof Point))
      throw new Error("EdwardsPoint expected");
  }
  class Point {
    static BASE = new Point(CURVE.Gx, CURVE.Gy, Fp2.ONE, Fp2.mul(CURVE.Gx, CURVE.Gy));
    static ZERO = new Point(Fp2.ZERO, Fp2.ONE, Fp2.ONE, Fp2.ZERO);
    static Fp = Fp2;
    static Fn = Fn;
    X;
    Y;
    Z;
    T;
    constructor(X, Y, Z2, T) {
      this.X = acoord("x", X);
      this.Y = acoord("y", Y);
      this.Z = acoord("z", Z2, true);
      this.T = acoord("t", T);
      Object.freeze(this);
    }
    static CURVE() {
      return CURVE;
    }
    /**
     * Create one extended Edwards point from affine coordinates.
     * Does NOT validate that the point is on-curve or torsion-free.
     * Use `.assertValidity()` on adversarial inputs.
     */
    static fromAffine(p2) {
      if (p2 instanceof Point)
        throw new Error("extended point not allowed");
      const { x: x2, y: y3 } = p2 || {};
      acoord("x", x2);
      acoord("y", y3);
      return new Point(x2, y3, Fp2.ONE, Fp2.mul(x2, y3));
    }
    // Uses algo from RFC8032 5.1.3.
    static fromBytes(bytes, zip215 = false) {
      const len = Fp2.BYTES;
      const { a: a2, d: d2 } = CURVE;
      bytes = copyBytes(abytes(bytes, len, "point"));
      abool(zip215, "zip215");
      const normed = copyBytes(bytes);
      const lastByte = bytes[len - 1];
      normed[len - 1] = lastByte & -129;
      const y3 = bytesToNumberLE(normed);
      const max = zip215 ? MASK : Fp2.ORDER;
      aInRange("point.y", y3, _0n$2, max);
      const y22 = Fp2.sqr(y3);
      const u2 = Fp2.sub(y22, Fp2.ONE);
      const v2 = Fp2.sub(Fp2.mulN(d2, y22), a2);
      let { isValid, value: x2 } = uvRatio2(u2, v2);
      if (!isValid)
        throw new Error("bad point: invalid y coordinate");
      const isXOdd = isOdd(x2);
      const isLastByteOdd = (lastByte & 128) !== 0;
      if (!zip215 && Fp2.is0(x2) && isLastByteOdd)
        throw new Error("bad point: x=0 and x_0=1");
      if (isLastByteOdd !== isXOdd)
        x2 = Fp2.neg(x2);
      return Point.fromAffine({ x: x2, y: y3 });
    }
    static fromHex(hex, zip215 = false) {
      return Point.fromBytes(hexToBytes(hex), zip215);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(windowSize = 6, isLazy = true) {
      wnaf.setWindowSize(this, windowSize);
      if (!isLazy)
        this.multiply(_2n$3);
      return this;
    }
    // Useful in fromAffine() - not for fromBytes(), which always created valid points.
    assertValidity() {
      const p2 = this;
      const { a: a2, d: d2 } = CURVE;
      if (p2.is0())
        throw new Error("bad point: ZERO");
      const { X, Y, Z: Z2, T } = p2;
      const X2 = Fp2.sqr(X);
      const Y2 = Fp2.sqr(Y);
      const Z22 = Fp2.sqr(Z2);
      const Z4 = Fp2.sqr(Z22);
      const aX2 = Fp2.mul(X2, a2);
      const left = Fp2.mul(Fp2.add(aX2, Y2), Z22);
      const right = Fp2.add(Z4, Fp2.mul(d2, Fp2.mul(X2, Y2)));
      if (!Fp2.eql(left, right))
        throw new Error("bad point: equation left != right (1)");
      const XY = Fp2.mul(X, Y);
      const ZT = Fp2.mul(Z2, T);
      if (!Fp2.eql(XY, ZT))
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(other) {
      aedpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      const X1Z2 = Fp2.mul(X1, Z2);
      const X2Z1 = Fp2.mul(X2, Z1);
      const Y1Z2 = Fp2.mul(Y1, Z2);
      const Y2Z1 = Fp2.mul(Y2, Z1);
      return Fp2.eql(X1Z2, X2Z1) && Fp2.eql(Y1Z2, Y2Z1);
    }
    is0() {
      return this.equals(Point.ZERO);
    }
    negate() {
      return new Point(Fp2.neg(this.X), this.Y, this.Z, Fp2.neg(this.T));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const A2 = Fp2.sqr(X1);
      const B2 = Fp2.sqr(Y1);
      const C2 = Fp2.mul(Fp2.sqr(Z1), _2n$3);
      const D2 = mulA(A2);
      const x1y1 = Fp2.addN(X1, Y1);
      const E2 = Fp2.sub(Fp2.subN(Fp2.sqr(x1y1), A2), B2);
      const G = Fp2.addN(D2, B2);
      const F = Fp2.subN(G, C2);
      const H2 = Fp2.subN(D2, B2);
      const X3 = Fp2.mul(E2, F);
      const Y3 = Fp2.mul(G, H2);
      const T3 = Fp2.mul(E2, H2);
      const Z3 = Fp2.mul(F, G);
      return new Point(X3, Y3, Z3, T3);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(other) {
      aedpoint(other);
      const { d: d2 } = CURVE;
      const { X: X1, Y: Y1, Z: Z1, T: T1 } = this;
      const { X: X2, Y: Y2, Z: Z2, T: T2 } = other;
      const A2 = Fp2.mul(X1, X2);
      const B2 = Fp2.mul(Y1, Y2);
      const C2 = Fp2.mul(Fp2.mulN(T1, d2), T2);
      const D2 = Fp2.mul(Z1, Z2);
      const E2 = Fp2.sub(Fp2.subN(Fp2.mulN(Fp2.addN(X1, Y1), Fp2.addN(X2, Y2)), A2), B2);
      const F = Fp2.subN(D2, C2);
      const G = Fp2.addN(D2, C2);
      const H2 = Fp2.sub(B2, mulA(A2));
      const X3 = Fp2.mul(E2, F);
      const Y3 = Fp2.mul(G, H2);
      const T3 = Fp2.mul(E2, H2);
      const Z3 = Fp2.mul(F, G);
      return new Point(X3, Y3, Z3, T3);
    }
    subtract(other) {
      aedpoint(other);
      return this.add(other.negate());
    }
    // Constant-time multiplication.
    multiply(scalar) {
      if (!Fn.isValidNot0(scalar))
        throw new RangeError("invalid scalar: expected 1 <= sc < curve.n");
      const { p: p2, f: f2 } = wnaf.mulSecret(this, scalar, cofactor, normalize);
      return normalize([p2, f2])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Keeps the same subgroup-scalar contract: 0 is allowed for public-scalar callers, but
    // n and larger values are rejected instead of being reduced mod n to the identity point.
    multiplyUnsafe(scalar) {
      if (!Fn.isValid(scalar))
        throw new RangeError("invalid scalar: expected 0 <= sc < curve.n");
      if (scalar === _0n$2)
        return Point.ZERO;
      if (this.is0() || scalar === _1n$2)
        return this;
      return wnaf.mulUnsafe(this, scalar, normalize);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Clears cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.clearCofactor().is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return wnaf.mulUnsafe(this, CURVE.n).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(invertedZ) {
      const p2 = this;
      let iz = invertedZ;
      if (iz != null && typeof iz !== "bigint")
        throw new TypeError('"invertedZ" expected bigint, got type=' + typeof iz);
      const { X, Y, Z: Z2 } = p2;
      const is0 = p2.is0();
      if (iz == null)
        iz = is0 ? Fp2.create(_8n$1) : Fp2.inv(Z2);
      const x2 = Fp2.mul(X, iz);
      const y3 = Fp2.mul(Y, iz);
      const zz = Fp2.mul(Z2, iz);
      if (is0)
        return { x: Fp2.ZERO, y: Fp2.ONE };
      if (!Fp2.eql(zz, Fp2.ONE))
        throw new Error("invZ was invalid");
      return { x: x2, y: y3 };
    }
    clearCofactor() {
      if (cofactor === _1n$2)
        return this;
      if (cofactor === _2n$3)
        return this.double();
      if (cofactor === _4n$1)
        return this.double().double();
      if (cofactor === _8n$1)
        return this.double().double().double();
      return this.multiplyUnsafe(cofactor);
    }
    toBytes() {
      const { x: x2, y: y3 } = this.toAffine();
      const bytes = Fp2.toBytes(y3);
      bytes[bytes.length - 1] |= isOdd(x2) ? 128 : 0;
      return bytes;
    }
    toHex() {
      return bytesToHex(this.toBytes());
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
  }
  const normalize = (points) => normalizeZ(Point, points);
  const wnaf = new ScalarMultiplier(Point, randomBytes$12);
  if (wnaf.bits >= 6)
    Point.BASE.precompute(6);
  Object.freeze(Point.prototype);
  Object.freeze(Point);
  return Point;
}
function eddsa(Point, cHash, eddsaOpts = {}) {
  validatePointCons(Point);
  if (typeof cHash !== "function")
    throw new Error('"hash" function param is required');
  const hash = cHash;
  const opts = eddsaOpts;
  validateObject(opts, {}, {
    adjustScalarBytes: "function",
    randomBytes: "function",
    domain: "function",
    prehash: "function",
    zip215: "boolean",
    mapToCurve: "function",
    toMontgomery: "function",
    toMontgomerySecret: "function"
  });
  const { prehash } = opts;
  const { BASE, Fp: Fp2, Fn } = Point;
  const outputLen = hash.outputLen;
  const expectedLen = 2 * Fp2.BYTES;
  if (outputLen !== void 0) {
    asafenumber(outputLen, "hash.outputLen");
    if (outputLen !== expectedLen)
      throw new Error(`hash.outputLen must be ${expectedLen}, got ${outputLen}`);
  }
  const randomBytes$12 = opts.randomBytes === void 0 ? randomBytes : opts.randomBytes;
  const toMontgomery2 = opts.toMontgomery;
  const toMontgomerySecret2 = opts.toMontgomerySecret;
  const adjustScalarBytes2 = opts.adjustScalarBytes === void 0 ? (bytes) => bytes : opts.adjustScalarBytes;
  const domain = opts.domain === void 0 ? (data, ctx, phflag) => {
    abool(phflag, "phflag");
    if (ctx.length || phflag)
      throw new Error("Contexts/pre-hash are not supported");
    return data;
  } : opts.domain;
  function modN_LE(hash2) {
    return Fn.create(bytesToNumberLE(hash2));
  }
  function getPrivateScalar(key) {
    const len = lengths.secretKey;
    abytes(key, lengths.secretKey, "secretKey");
    const hashed = abytes(hash(key), 2 * len, "hashedSecretKey");
    const head = adjustScalarBytes2(hashed.slice(0, len));
    const prefix = hashed.slice(len, 2 * len);
    const scalar = modN_LE(head);
    return { head, prefix, scalar };
  }
  function getExtendedPublicKey(secretKey) {
    const { head, prefix, scalar } = getPrivateScalar(secretKey);
    const point = BASE.multiply(scalar);
    const pointBytes = point.toBytes();
    return { head, prefix, scalar, point, pointBytes };
  }
  function getPublicKey(secretKey) {
    return getExtendedPublicKey(secretKey).pointBytes;
  }
  function hashDomainToScalar(context = Uint8Array.of(), ...msgs) {
    const msg = concatBytes(...msgs);
    return modN_LE(hash(domain(msg, abytes(context, void 0, "context"), !!prehash)));
  }
  function sign(msg, secretKey, options = {}) {
    validateObject(options, {}, {}, "options");
    msg = copyBytes(abytes(msg, void 0, "message"));
    if (prehash)
      msg = prehash(msg);
    const { prefix, scalar, pointBytes } = getExtendedPublicKey(secretKey);
    const r2 = hashDomainToScalar(options.context, prefix, msg);
    const R2 = BASE.multiply(r2).toBytes();
    const k2 = hashDomainToScalar(options.context, R2, pointBytes, msg);
    const s2 = Fn.create(r2 + k2 * scalar);
    if (!Fn.isValid(s2))
      throw new Error("sign failed: invalid s");
    const rs = concatBytes(R2, Fn.toBytes(s2));
    return abytes(rs, lengths.signature, "result");
  }
  const verifyOpts = {
    zip215: opts.zip215
  };
  function verify(sig, msg, publicKey, options = verifyOpts) {
    validateObject(options);
    const { context } = options;
    const zip215 = options.zip215 === void 0 ? !!verifyOpts.zip215 : options.zip215;
    const len = lengths.signature;
    sig = abytes(sig, len, "signature");
    msg = abytes(msg, void 0, "message");
    publicKey = abytes(publicKey, lengths.publicKey, "publicKey");
    if (zip215 !== void 0)
      abool(zip215, "zip215");
    if (prehash)
      msg = prehash(msg);
    const mid = len / 2;
    const r2 = sig.subarray(0, mid);
    const s2 = bytesToNumberLE(sig.subarray(mid, len));
    let A2, R2, SB;
    try {
      A2 = Point.fromBytes(publicKey, zip215);
      R2 = Point.fromBytes(r2, zip215);
      SB = BASE.multiplyUnsafe(s2);
    } catch (error) {
      return false;
    }
    if (!zip215 && A2.isSmallOrder())
      return false;
    const k2 = hashDomainToScalar(context, r2, publicKey, msg);
    const RkA = R2.add(A2.multiplyUnsafe(k2));
    return RkA.subtract(SB).clearCofactor().is0();
  }
  const _size = Fp2.BYTES;
  const lengths = {
    secretKey: _size,
    publicKey: _size,
    signature: 2 * _size,
    seed: _size
  };
  function randomSecretKey(seed) {
    seed = seed === void 0 ? randomBytes$12(lengths.seed) : seed;
    return abytes(seed, lengths.seed, "seed");
  }
  function isValidSecretKey(key) {
    return isBytes(key) && key.length === lengths.secretKey;
  }
  function isValidPublicKey(key, zip215) {
    try {
      return !!Point.fromBytes(key, zip215 === void 0 ? verifyOpts.zip215 : zip215);
    } catch (error) {
      return false;
    }
  }
  const utils = {
    getExtendedPublicKey,
    randomSecretKey,
    isValidSecretKey,
    isValidPublicKey,
    /** Converts an Edwards public key to a companion Montgomery public key. */
    toMontgomery(publicKey) {
      if (toMontgomery2 === void 0)
        throw new Error("Montgomery conversion is not supported for this curve");
      return toMontgomery2(Point.fromBytes(publicKey));
    },
    toMontgomerySecret(secretKey) {
      if (toMontgomerySecret2 === void 0)
        throw new Error("Montgomery conversion is not supported for this curve");
      return toMontgomerySecret2(secretKey);
    }
  };
  Object.freeze(lengths);
  Object.freeze(utils);
  return Object.freeze({
    keygen: createKeygen(randomSecretKey, getPublicKey),
    getPublicKey,
    sign,
    verify,
    utils,
    Point,
    lengths
  });
}
const _1n$1 = /* @__PURE__ */ BigInt(1), _2n$2 = /* @__PURE__ */ BigInt(2);
const _5n = /* @__PURE__ */ BigInt(5), _8n = /* @__PURE__ */ BigInt(8);
const ed25519_CURVE_p = /* @__PURE__ */ BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed");
const ed25519_CURVE = /* @__PURE__ */ (() => ({
  p: ed25519_CURVE_p,
  n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
  h: _8n,
  a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
  d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
  Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
  Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
}))();
function ed25519_pow_2_252_3(x2) {
  const _10n = BigInt(10), _20n = BigInt(20), _40n = BigInt(40), _80n = BigInt(80);
  const P2 = ed25519_CURVE_p;
  const x22 = x2 * x2 % P2;
  const b2 = x22 * x2 % P2;
  const b4 = pow2(b2, _2n$2, P2) * b2 % P2;
  const b5 = pow2(b4, _1n$1, P2) * x2 % P2;
  const b10 = pow2(b5, _5n, P2) * b5 % P2;
  const b20 = pow2(b10, _10n, P2) * b10 % P2;
  const b40 = pow2(b20, _20n, P2) * b20 % P2;
  const b80 = pow2(b40, _40n, P2) * b40 % P2;
  const b160 = pow2(b80, _80n, P2) * b80 % P2;
  const b240 = pow2(b160, _80n, P2) * b80 % P2;
  const b250 = pow2(b240, _10n, P2) * b10 % P2;
  const pow_p_5_8 = pow2(b250, _2n$2, P2) * x2 % P2;
  return { pow_p_5_8, b2 };
}
function adjustScalarBytes(bytes) {
  bytes[0] &= 248;
  bytes[31] &= 127;
  bytes[31] |= 64;
  return bytes;
}
const ED25519_SQRT_M1 = /* @__PURE__ */ BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
function uvRatio(u2, v2) {
  const P2 = ed25519_CURVE_p;
  const v3 = mod(v2 * v2 * v2, P2);
  const v7 = mod(v3 * v3 * v2, P2);
  const pow3 = ed25519_pow_2_252_3(u2 * v7).pow_p_5_8;
  let x2 = mod(u2 * v3 * pow3, P2);
  const vx2 = mod(v2 * x2 * x2, P2);
  const root1 = x2;
  const root2 = mod(x2 * ED25519_SQRT_M1, P2);
  const useRoot1 = vx2 === u2;
  const useRoot2 = vx2 === mod(-u2, P2);
  const noRoot = vx2 === mod(-u2 * ED25519_SQRT_M1, P2);
  if (useRoot1)
    x2 = root1;
  if (useRoot2 || noRoot)
    x2 = root2;
  if (isNegativeLE(x2, P2))
    x2 = mod(-x2, P2);
  return { isValid: useRoot1 || useRoot2, value: x2 };
}
const ed25519_Point = /* @__PURE__ */ edwards(ed25519_CURVE, { uvRatio });
const Fp = /* @__PURE__ */ (() => ed25519_Point.Fp)();
function toMontgomery(point) {
  const { y: y3 } = point;
  return Fp.toBytes(Fp.div(_1n$1 + y3, _1n$1 - y3));
}
function toMontgomerySecret(secretKey) {
  const size = ed25519_Point.Fp.BYTES;
  abytes$1(secretKey, size);
  return adjustScalarBytes(sha512(secretKey.subarray(0, size))).subarray(0, size);
}
function ed(opts) {
  return eddsa(ed25519_Point, sha512, Object.assign({ adjustScalarBytes, toMontgomery, toMontgomerySecret, zip215: true }, opts));
}
const ed25519 = /* @__PURE__ */ ed({});
const PROTOCOL_VERSION = 1;
const SCHEMA_VERSION = 1;
const MAX_EVENT_BYTES = 16384;
const MAX_CBOR_DEPTH = 16;
const MAX_CBOR_CONTAINER_LEN = 4096;
const MAX_PENDING_AUTH_EVENTS = 128;
const DOMAIN_EVENT = "OpenMat:event:v1";
const DOMAIN_CONTROL = "OpenMat:control:v1";
const DOMAIN_MANIFEST = "OpenMat:manifest:v1";
const DOMAIN_CLOCK = "OpenMat:clock:v1";
const DOMAIN_CERT = "OpenMat:cert:v1";
const DOMAIN_HEARTBEAT = "OpenMat:heartbeat:v1";
const ErrorCode = {
  InvalidArgument: "InvalidArgument",
  BoundsExceeded: "BoundsExceeded",
  MalformedCbor: "MalformedCbor",
  NonDeterministicCbor: "NonDeterministicCbor",
  UnsupportedVersion: "UnsupportedVersion",
  InvalidSignature: "InvalidSignature",
  CertificateExpired: "CertificateExpired",
  CertificateRevoked: "CertificateRevoked",
  UnauthorizedScope: "UnauthorizedScope",
  EpochFencedOldEvent: "EpochFencedOldEvent",
  SequenceGap: "SequenceGap",
  HashChainMismatch: "HashChainMismatch",
  PendingDependencyOverflow: "PendingDependencyOverflow",
  PrivacyViolation: "PrivacyViolation",
  ReplayHeartbeatRejected: "ReplayHeartbeatRejected",
  TimeoutTakeoverForbidden: "TimeoutTakeoverForbidden"
};
class OpenMatProtocolError extends Error {
  code;
  constructor(code, message) {
    super(message);
    this.name = "OpenMatProtocolError";
    this.code = code;
  }
}
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder("utf-8", { fatal: true });
function appendCborHeader(out, majorType, arg) {
  if (arg < 0n || arg > 0xffffffffffffffffn) {
    throw new OpenMatProtocolError(
      ErrorCode.BoundsExceeded,
      `CBOR unsigned argument out of 64-bit bounds: ${arg.toString()}`
    );
  }
  const prefix = (majorType & 7) << 5;
  if (arg < 24n) {
    out.push(prefix | Number(arg));
  } else if (arg <= 0xffn) {
    out.push(prefix | 24, Number(arg));
  } else if (arg <= 0xffffn) {
    const n3 = Number(arg);
    out.push(prefix | 25, n3 >>> 8 & 255, n3 & 255);
  } else if (arg <= 0xffffffffn) {
    const n3 = Number(arg);
    out.push(
      prefix | 26,
      n3 >>> 24 & 255,
      n3 >>> 16 & 255,
      n3 >>> 8 & 255,
      n3 & 255
    );
  } else {
    out.push(prefix | 27);
    for (let shift = 56n; shift >= 0n; shift -= 8n) {
      out.push(Number(arg >> shift & 0xffn));
    }
  }
}
function appendBytes(out, bytes, maxBytes) {
  if (out.length + bytes.length > maxBytes) {
    throw new OpenMatProtocolError(
      ErrorCode.BoundsExceeded,
      `Encoded CBOR exceeds maxBytes (${maxBytes})`
    );
  }
  for (let i2 = 0; i2 < bytes.length; i2++) {
    out.push(bytes[i2]);
  }
}
function compareCanonicalEncodedKeys(a2, b2) {
  if (a2.length !== b2.length) {
    return a2.length - b2.length;
  }
  for (let i2 = 0; i2 < a2.length; i2++) {
    const diff = a2[i2] - b2[i2];
    if (diff !== 0) {
      return diff;
    }
  }
  return 0;
}
function bytesEqual(a2, b2) {
  if (a2.length !== b2.length) {
    return false;
  }
  let diff = 0;
  for (let i2 = 0; i2 < a2.length; i2++) {
    diff |= a2[i2] ^ b2[i2];
  }
  return diff === 0;
}
function encodeCborRecursive(value, depth, out, maxDepth, maxContainerLen, maxBytes) {
  if (depth > maxDepth) {
    throw new OpenMatProtocolError(
      ErrorCode.BoundsExceeded,
      `CBOR maximum nesting depth (${maxDepth}) exceeded`
    );
  }
  if (value === null) {
    out.push(246);
  } else if (typeof value === "boolean") {
    out.push(value ? 245 : 244);
  } else if (typeof value === "number") {
    if (!Number.isFinite(value) || !Number.isInteger(value)) {
      throw new OpenMatProtocolError(
        ErrorCode.NonDeterministicCbor,
        "Floating-point numbers are forbidden in OpenMat deterministic CBOR"
      );
    }
    if (!Number.isSafeInteger(value)) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        "Unsafe integer number; use BigInt for 64-bit integers"
      );
    }
    if (value >= 0) {
      appendCborHeader(out, 0, BigInt(value));
    } else {
      const negArg = BigInt(-1 - value);
      appendCborHeader(out, 1, negArg);
    }
  } else if (typeof value === "bigint") {
    if (value >= 0n) {
      if (value > 0xffffffffffffffffn) {
        throw new OpenMatProtocolError(
          ErrorCode.BoundsExceeded,
          "Unsigned BigInt overflows uint64"
        );
      }
      appendCborHeader(out, 0, value);
    } else {
      const negArg = -1n - value;
      if (negArg > 0x7fffffffffffffffn) {
        throw new OpenMatProtocolError(
          ErrorCode.BoundsExceeded,
          "Negative BigInt overflows int64"
        );
      }
      appendCborHeader(out, 1, negArg);
    }
  } else if (value instanceof Uint8Array) {
    if (value.byteLength > maxBytes) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        `CBOR byte string length (${value.byteLength}) exceeds maxBytes (${maxBytes})`
      );
    }
    appendCborHeader(out, 2, BigInt(value.byteLength));
    appendBytes(out, value, maxBytes);
  } else if (typeof value === "string") {
    const utf8 = textEncoder.encode(value);
    if (utf8.byteLength > maxBytes) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        `CBOR text string length (${utf8.byteLength}) exceeds maxBytes (${maxBytes})`
      );
    }
    appendCborHeader(out, 3, BigInt(utf8.byteLength));
    appendBytes(out, utf8, maxBytes);
  } else if (Array.isArray(value) && true) {
    if (value.length > maxContainerLen) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        `CBOR array length (${value.length}) exceeds maxContainerLen (${maxContainerLen})`
      );
    }
    if (depth + 1 > maxDepth) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        `CBOR maximum nesting depth (${maxDepth}) exceeded`
      );
    }
    appendCborHeader(out, 4, BigInt(value.length));
    for (let i2 = 0; i2 < value.length; i2++) {
      encodeCborRecursive(value[i2], depth + 1, out, maxDepth, maxContainerLen, maxBytes);
    }
  } else if (value instanceof Map || typeof value === "object" && value !== null) {
    const rawEntries = value instanceof Map ? Array.from(value.entries()) : Object.entries(value);
    if (rawEntries.length > maxContainerLen) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        `CBOR map length (${rawEntries.length}) exceeds maxContainerLen (${maxContainerLen})`
      );
    }
    if (depth + 1 > maxDepth) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        `CBOR maximum nesting depth (${maxDepth}) exceeded`
      );
    }
    const encodedEntries = [];
    for (const [k2, v2] of rawEntries) {
      if (typeof k2 !== "string") {
        throw new OpenMatProtocolError(
          ErrorCode.NonDeterministicCbor,
          "CBOR map keys must be strings"
        );
      }
      const utf8Key = textEncoder.encode(k2);
      if (utf8Key.byteLength > maxBytes) {
        throw new OpenMatProtocolError(
          ErrorCode.BoundsExceeded,
          "CBOR map key exceeds maxBytes"
        );
      }
      const keyBuf = [];
      appendCborHeader(keyBuf, 3, BigInt(utf8Key.byteLength));
      appendBytes(keyBuf, utf8Key, maxBytes);
      encodedEntries.push({
        rawKey: k2,
        encodedKey: new Uint8Array(keyBuf),
        val: v2
      });
    }
    encodedEntries.sort(
      (lhs, rhs) => compareCanonicalEncodedKeys(lhs.encodedKey, rhs.encodedKey)
    );
    for (let i2 = 1; i2 < encodedEntries.length; i2++) {
      if (encodedEntries[i2 - 1].rawKey === encodedEntries[i2].rawKey) {
        throw new OpenMatProtocolError(
          ErrorCode.NonDeterministicCbor,
          `Duplicate key in deterministic CBOR map: ${encodedEntries[i2].rawKey}`
        );
      }
    }
    appendCborHeader(out, 5, BigInt(encodedEntries.length));
    for (const entry of encodedEntries) {
      appendBytes(out, entry.encodedKey, maxBytes);
      encodeCborRecursive(entry.val, depth + 1, out, maxDepth, maxContainerLen, maxBytes);
    }
  } else {
    throw new OpenMatProtocolError(
      ErrorCode.MalformedCbor,
      `Unsupported value type in deterministic CBOR: ${typeof value}`
    );
  }
  if (out.length > maxBytes) {
    throw new OpenMatProtocolError(
      ErrorCode.BoundsExceeded,
      `Encoded CBOR exceeds maxBytes (${maxBytes})`
    );
  }
}
function encodeDeterministicCbor(value, options) {
  const maxDepth = options?.maxDepth ?? MAX_CBOR_DEPTH;
  const maxContainerLen = options?.maxContainerLen ?? MAX_CBOR_CONTAINER_LEN;
  const maxBytes = options?.maxBytes ?? MAX_EVENT_BYTES;
  const out = [];
  encodeCborRecursive(value, 0, out, maxDepth, maxContainerLen, maxBytes);
  return new Uint8Array(out);
}
function decodeCborRecursive(bytes, cursor, depth, maxDepth, maxContainerLen, maxBytes) {
  if (depth > maxDepth) {
    throw new OpenMatProtocolError(
      ErrorCode.BoundsExceeded,
      `CBOR depth limit (${maxDepth}) exceeded`
    );
  }
  if (cursor.offset >= bytes.length) {
    throw new OpenMatProtocolError(
      ErrorCode.MalformedCbor,
      "Unexpected end of CBOR input"
    );
  }
  const initial = bytes[cursor.offset++];
  const major = initial >>> 5;
  const ai = initial & 31;
  if (ai === 31) {
    throw new OpenMatProtocolError(
      ErrorCode.NonDeterministicCbor,
      "Indefinite-length CBOR items are forbidden"
    );
  }
  if (ai >= 28 && ai <= 30) {
    throw new OpenMatProtocolError(
      ErrorCode.MalformedCbor,
      `Reserved CBOR additional information value (${ai})`
    );
  }
  let arg = 0n;
  if (ai < 24) {
    arg = BigInt(ai);
  } else if (ai === 24) {
    if (cursor.offset + 1 > bytes.length) {
      throw new OpenMatProtocolError(ErrorCode.MalformedCbor, "Truncated 1-byte CBOR uint");
    }
    const b0 = bytes[cursor.offset++];
    arg = BigInt(b0);
    if (arg < 24n && major !== 7) {
      throw new OpenMatProtocolError(
        ErrorCode.NonDeterministicCbor,
        "Non-minimal 1-byte CBOR integer encoding"
      );
    }
  } else if (ai === 25) {
    if (major === 7) {
      throw new OpenMatProtocolError(
        ErrorCode.NonDeterministicCbor,
        "Floating-point values (float16) are forbidden"
      );
    }
    if (cursor.offset + 2 > bytes.length) {
      throw new OpenMatProtocolError(ErrorCode.MalformedCbor, "Truncated 2-byte CBOR uint");
    }
    const b0 = bytes[cursor.offset];
    const b1 = bytes[cursor.offset + 1];
    cursor.offset += 2;
    arg = BigInt(b0) << 8n | BigInt(b1);
    if (arg <= 0xffn) {
      throw new OpenMatProtocolError(
        ErrorCode.NonDeterministicCbor,
        "Non-minimal 2-byte CBOR integer encoding"
      );
    }
  } else if (ai === 26) {
    if (major === 7) {
      throw new OpenMatProtocolError(
        ErrorCode.NonDeterministicCbor,
        "Floating-point values (float32) are forbidden"
      );
    }
    if (cursor.offset + 4 > bytes.length) {
      throw new OpenMatProtocolError(ErrorCode.MalformedCbor, "Truncated 4-byte CBOR uint");
    }
    const b0 = bytes[cursor.offset];
    const b1 = bytes[cursor.offset + 1];
    const b2 = bytes[cursor.offset + 2];
    const b3 = bytes[cursor.offset + 3];
    cursor.offset += 4;
    arg = BigInt(b0) << 24n | BigInt(b1) << 16n | BigInt(b2) << 8n | BigInt(b3);
    if (arg <= 0xffffn) {
      throw new OpenMatProtocolError(
        ErrorCode.NonDeterministicCbor,
        "Non-minimal 4-byte CBOR integer encoding"
      );
    }
  } else if (ai === 27) {
    if (major === 7) {
      throw new OpenMatProtocolError(
        ErrorCode.NonDeterministicCbor,
        "Floating-point values (float64) are forbidden"
      );
    }
    if (cursor.offset + 8 > bytes.length) {
      throw new OpenMatProtocolError(ErrorCode.MalformedCbor, "Truncated 8-byte CBOR uint");
    }
    arg = 0n;
    for (let i2 = 0; i2 < 8; i2++) {
      arg = arg << 8n | BigInt(bytes[cursor.offset + i2]);
    }
    cursor.offset += 8;
    if (arg <= 0xffffffffn) {
      throw new OpenMatProtocolError(
        ErrorCode.NonDeterministicCbor,
        "Non-minimal 8-byte CBOR integer encoding"
      );
    }
  }
  switch (major) {
    case 0: {
      if (arg <= BigInt(Number.MAX_SAFE_INTEGER)) {
        return Number(arg);
      }
      return arg;
    }
    case 1: {
      if (arg > 0x7fffffffffffffffn) {
        throw new OpenMatProtocolError(
          ErrorCode.BoundsExceeded,
          "Negative integer overflows int64"
        );
      }
      const val = -1n - arg;
      if (val >= BigInt(Number.MIN_SAFE_INTEGER)) {
        return Number(val);
      }
      return val;
    }
    case 2: {
      if (arg > BigInt(maxBytes)) {
        throw new OpenMatProtocolError(
          ErrorCode.BoundsExceeded,
          "CBOR byte string length exceeds limit"
        );
      }
      const len = Number(arg);
      if (cursor.offset + len > bytes.length) {
        throw new OpenMatProtocolError(ErrorCode.MalformedCbor, "Truncated CBOR byte string");
      }
      const slice = bytes.slice(cursor.offset, cursor.offset + len);
      cursor.offset += len;
      return slice;
    }
    case 3: {
      if (arg > BigInt(maxBytes)) {
        throw new OpenMatProtocolError(
          ErrorCode.BoundsExceeded,
          "CBOR text string length exceeds limit"
        );
      }
      const len = Number(arg);
      if (cursor.offset + len > bytes.length) {
        throw new OpenMatProtocolError(ErrorCode.MalformedCbor, "Truncated CBOR text string");
      }
      const slice = bytes.subarray(cursor.offset, cursor.offset + len);
      cursor.offset += len;
      try {
        return textDecoder.decode(slice);
      } catch {
        throw new OpenMatProtocolError(ErrorCode.MalformedCbor, "Invalid UTF-8 in CBOR text string");
      }
    }
    case 4: {
      if (arg > BigInt(maxContainerLen)) {
        throw new OpenMatProtocolError(
          ErrorCode.BoundsExceeded,
          `CBOR array length (${arg.toString()}) exceeds limit (${maxContainerLen})`
        );
      }
      if (depth + 1 > maxDepth) {
        throw new OpenMatProtocolError(
          ErrorCode.BoundsExceeded,
          `CBOR depth limit (${maxDepth}) exceeded`
        );
      }
      const count = Number(arg);
      const arr = [];
      for (let i2 = 0; i2 < count; i2++) {
        arr.push(
          decodeCborRecursive(bytes, cursor, depth + 1, maxDepth, maxContainerLen, maxBytes)
        );
      }
      return arr;
    }
    case 5: {
      if (arg > BigInt(maxContainerLen)) {
        throw new OpenMatProtocolError(
          ErrorCode.BoundsExceeded,
          `CBOR map length (${arg.toString()}) exceeds limit (${maxContainerLen})`
        );
      }
      if (depth + 1 > maxDepth) {
        throw new OpenMatProtocolError(
          ErrorCode.BoundsExceeded,
          `CBOR depth limit (${maxDepth}) exceeded`
        );
      }
      const count = Number(arg);
      const obj = /* @__PURE__ */ Object.create(null);
      let prevKeyEncoded = null;
      for (let i2 = 0; i2 < count; i2++) {
        const keyStart = cursor.offset;
        const keyVal = decodeCborRecursive(
          bytes,
          cursor,
          depth + 1,
          maxDepth,
          maxContainerLen,
          maxBytes
        );
        const keyEnd = cursor.offset;
        if (typeof keyVal !== "string") {
          throw new OpenMatProtocolError(
            ErrorCode.NonDeterministicCbor,
            "CBOR map keys must be text strings"
          );
        }
        const currKeyEncoded = bytes.subarray(keyStart, keyEnd);
        if (prevKeyEncoded !== null && compareCanonicalEncodedKeys(prevKeyEncoded, currKeyEncoded) >= 0) {
          throw new OpenMatProtocolError(
            ErrorCode.NonDeterministicCbor,
            "CBOR map keys are not sorted in canonical order or contain duplicates"
          );
        }
        prevKeyEncoded = currKeyEncoded;
        const val = decodeCborRecursive(
          bytes,
          cursor,
          depth + 1,
          maxDepth,
          maxContainerLen,
          maxBytes
        );
        obj[keyVal] = val;
      }
      return obj;
    }
    case 6:
      throw new OpenMatProtocolError(
        ErrorCode.NonDeterministicCbor,
        "Semantic tags are forbidden in deterministic CBOR"
      );
    case 7: {
      if (ai === 20) return false;
      if (ai === 21) return true;
      if (ai === 22) return null;
      throw new OpenMatProtocolError(
        ErrorCode.NonDeterministicCbor,
        `Unsupported simple value or float in deterministic CBOR (ai=${ai})`
      );
    }
    default:
      throw new OpenMatProtocolError(ErrorCode.MalformedCbor, "Unknown CBOR major type");
  }
}
function decodeDeterministicCbor(bytes, options) {
  const maxDepth = options?.maxDepth ?? MAX_CBOR_DEPTH;
  const maxContainerLen = options?.maxContainerLen ?? MAX_CBOR_CONTAINER_LEN;
  const maxBytes = options?.maxBytes ?? MAX_EVENT_BYTES;
  if (bytes.byteLength === 0) {
    throw new OpenMatProtocolError(ErrorCode.MalformedCbor, "Empty CBOR input");
  }
  if (bytes.byteLength > maxBytes) {
    throw new OpenMatProtocolError(
      ErrorCode.BoundsExceeded,
      `CBOR input (${bytes.byteLength}) exceeds maxBytes (${maxBytes})`
    );
  }
  const cursor = { offset: 0 };
  const result = decodeCborRecursive(bytes, cursor, 0, maxDepth, maxContainerLen, maxBytes);
  if (cursor.offset !== bytes.byteLength) {
    throw new OpenMatProtocolError(
      ErrorCode.MalformedCbor,
      "Trailing bytes after deterministic CBOR root value"
    );
  }
  return result;
}
function sha256(data) {
  return sha256$1(data);
}
function toHex(data) {
  return bytesToHex$1(data);
}
function fromHex(hex) {
  if (hex.length % 2 !== 0 || !/^[0-9a-fA-F]*$/.test(hex)) {
    throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "Invalid hex string");
  }
  return hexToBytes$1(hex);
}
function generateEd25519KeyPair(keyId) {
  const seed = globalThis.crypto.getRandomValues(new Uint8Array(32));
  return deriveEd25519KeyPairFromSeed(keyId, seed);
}
function deriveEd25519KeyPairFromSeed(keyId, seed) {
  if (seed.byteLength !== 32) {
    throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "Ed25519 seed must be 32 bytes");
  }
  return { keyId, publicKey: ed25519.getPublicKey(seed), privateKey: new Uint8Array(seed) };
}
function buildDomainMessage(domain, canonicalCbor) {
  const domainBytes = textEncoder.encode(domain);
  const out = new Uint8Array(domainBytes.byteLength + 1 + canonicalCbor.byteLength);
  out.set(domainBytes, 0);
  out[domainBytes.byteLength] = 0;
  out.set(canonicalCbor, domainBytes.byteLength + 1);
  return out;
}
function signDomainBytes(domain, canonicalCbor, privateKey) {
  if (!domain) {
    throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "Signing domain must not be empty");
  }
  if (privateKey.byteLength !== 32) {
    throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "Ed25519 private key must be 32 bytes");
  }
  const msg = buildDomainMessage(domain, canonicalCbor);
  return ed25519.sign(msg, privateKey);
}
function verifyDomainBytes(domain, canonicalCbor, publicKey, signature) {
  if (!domain || publicKey.byteLength !== 32 || signature.byteLength !== 64) {
    return false;
  }
  try {
    const msg = buildDomainMessage(domain, canonicalCbor);
    return ed25519.verify(signature, msg, publicKey, { zip215: false });
  } catch {
    return false;
  }
}
function computeEventId(domain, canonicalCbor, signature) {
  const domainBytes = textEncoder.encode(domain);
  const buf = new Uint8Array(
    domainBytes.byteLength + 1 + canonicalCbor.byteLength + signature.byteLength
  );
  buf.set(domainBytes, 0);
  buf[domainBytes.byteLength] = 0;
  buf.set(canonicalCbor, domainBytes.byteLength + 1);
  buf.set(signature, domainBytes.byteLength + 1 + canonicalCbor.byteLength);
  return sha256(buf);
}
const Role = {
  MatOperator: 2,
  RelayOperator: 8
};
const ScopeBits = {
  None: 0,
  ReadPublic: 1 << 0,
  ScoreMat: 1 << 1,
  ConfirmLocalResult: 1 << 2,
  RefereeDecision: 1 << 3,
  RecordWeighIn: 1 << 4,
  RecordMedicalDecision: 1 << 5,
  SubmitCoachRoster: 1 << 6,
  ManageTournament: 1 << 7,
  PublishSnapshot: 1 << 8,
  RelaySignedBytes: 1 << 9
};
function encodeDelegatedCertificateBody(cert) {
  return encodeDeterministicCbor({
    certificate_id: cert.certificate_id,
    tournament_id: cert.tournament_id,
    subject_key_id: cert.subject_key_id,
    subject_pubkey: cert.subject_pubkey,
    role: cert.role,
    allowed_scopes: cert.allowed_scopes,
    allowed_stream_id: cert.allowed_stream_id,
    assigned_mat_id: cert.assigned_mat_id,
    assignment_revision: cert.assignment_revision,
    authority_generation: cert.authority_generation,
    issued_at_ms: cert.issued_at_ms,
    expires_at_ms: cert.expires_at_ms,
    allow_in_progress_completion: cert.allow_in_progress_completion
  });
}
function issueDelegatedCertificate(cert, rootPrivateKey) {
  if (!cert.certificate_id || !cert.tournament_id || !cert.subject_key_id) {
    throw new OpenMatProtocolError(
      ErrorCode.InvalidArgument,
      "DelegatedCertificate missing required identifiers"
    );
  }
  if (cert.expires_at_ms < cert.issued_at_ms) {
    throw new OpenMatProtocolError(
      ErrorCode.InvalidArgument,
      "DelegatedCertificate expires_at_ms precedes issued_at_ms"
    );
  }
  const fullCert = {
    ...cert,
    root_signature: new Uint8Array(64)
  };
  const body = encodeDelegatedCertificateBody(fullCert);
  fullCert.root_signature = signDomainBytes(DOMAIN_CERT, body, rootPrivateKey);
  return fullCert;
}
function verifyDelegatedCertificate(cert, rootPublicKey, currentWallMs, boutInProgress) {
  const body = encodeDelegatedCertificateBody(cert);
  if (!verifyDomainBytes(DOMAIN_CERT, body, rootPublicKey, cert.root_signature)) {
    throw new OpenMatProtocolError(
      ErrorCode.InvalidSignature,
      "Invalid root signature on delegated certificate"
    );
  }
  if (currentWallMs > cert.expires_at_ms) {
    if (!(boutInProgress && cert.allow_in_progress_completion)) {
      throw new OpenMatProtocolError(
        ErrorCode.CertificateExpired,
        "Delegated certificate expired and in-progress completion not active"
      );
    }
  }
  return true;
}
function buildEventBodyMap(ev) {
  if (ev.protocol_version !== PROTOCOL_VERSION || ev.schema_version !== SCHEMA_VERSION) {
    throw new OpenMatProtocolError(
      ErrorCode.UnsupportedVersion,
      "Unsupported protocol or schema version"
    );
  }
  return {
    protocol_version: ev.protocol_version,
    schema_version: ev.schema_version,
    tournament_id: ev.tournament_id,
    stream_id: ev.stream_id,
    match_id: ev.match_id,
    authority_epoch: ev.authority_epoch,
    sequence: ev.sequence,
    previous_event_hash: ev.previous_event_hash,
    assignment_revision: ev.assignment_revision,
    rules_hash: ev.rules_hash,
    required_public_control_head: ev.required_public_control_head,
    command_id: ev.command_id,
    event_type: ev.event_type,
    signer_key_id: ev.signer_key_id,
    certificate_id: ev.certificate_id,
    boot_id: ev.boot_id,
    monotonic_time_ns: ev.monotonic_time_ns,
    audit_time_ms: ev.audit_time_ms,
    time_uncertainty_ms: ev.time_uncertainty_ms,
    payload: ev.payload
  };
}
function encodeEventBodyCbor(ev) {
  return encodeDeterministicCbor(buildEventBodyMap(ev));
}
function encodeEventWireCbor(ev) {
  const map = buildEventBodyMap(ev);
  map.signature = ev.signature;
  map.event_id = ev.event_id;
  return encodeDeterministicCbor(map);
}
function decodeEventWireCbor(wireBytes) {
  if (wireBytes.byteLength > MAX_EVENT_BYTES) {
    throw new OpenMatProtocolError(
      ErrorCode.BoundsExceeded,
      "Wire event exceeds MAX_EVENT_BYTES"
    );
  }
  const decoded = decodeDeterministicCbor(wireBytes);
  if (typeof decoded !== "object" || decoded === null || Array.isArray(decoded) || decoded instanceof Uint8Array || decoded instanceof Map) {
    throw new OpenMatProtocolError(
      ErrorCode.MalformedCbor,
      "SignedEvent wire root must be a CBOR map"
    );
  }
  const root = decoded;
  const requireUint = (key) => {
    const val = root[key];
    if (typeof val === "number" && Number.isInteger(val) && val >= 0) return val;
    if (typeof val === "bigint" && val >= 0n) return Number(val);
    throw new OpenMatProtocolError(ErrorCode.MalformedCbor, `Missing or invalid uint field: ${key}`);
  };
  const requireText = (key) => {
    const val = root[key];
    if (typeof val === "string") return val;
    throw new OpenMatProtocolError(ErrorCode.MalformedCbor, `Missing or invalid text field: ${key}`);
  };
  const requireFixedBytes = (key, len) => {
    const val = root[key];
    if (val instanceof Uint8Array && val.byteLength === len) return val;
    throw new OpenMatProtocolError(
      ErrorCode.MalformedCbor,
      `Missing or invalid ${len}-byte field: ${key}`
    );
  };
  const protocol_version = requireUint("protocol_version");
  const schema_version = requireUint("schema_version");
  if (protocol_version !== PROTOCOL_VERSION || schema_version !== SCHEMA_VERSION) {
    throw new OpenMatProtocolError(
      ErrorCode.UnsupportedVersion,
      "Unsupported protocol or schema version on wire"
    );
  }
  if (!("payload" in root)) {
    throw new OpenMatProtocolError(ErrorCode.MalformedCbor, "Missing payload field");
  }
  return {
    protocol_version,
    schema_version,
    tournament_id: requireText("tournament_id"),
    stream_id: requireText("stream_id"),
    match_id: requireText("match_id"),
    authority_epoch: requireUint("authority_epoch"),
    sequence: requireUint("sequence"),
    previous_event_hash: requireFixedBytes("previous_event_hash", 32),
    assignment_revision: requireUint("assignment_revision"),
    rules_hash: requireFixedBytes("rules_hash", 32),
    required_public_control_head: requireFixedBytes("required_public_control_head", 32),
    command_id: requireText("command_id"),
    event_type: requireText("event_type"),
    signer_key_id: requireText("signer_key_id"),
    certificate_id: requireText("certificate_id"),
    boot_id: requireText("boot_id"),
    monotonic_time_ns: requireUint("monotonic_time_ns"),
    audit_time_ms: requireUint("audit_time_ms"),
    time_uncertainty_ms: requireUint("time_uncertainty_ms"),
    payload: root.payload,
    signature: requireFixedBytes("signature", 64),
    event_id: requireFixedBytes("event_id", 32)
  };
}
const MAX_MANIFEST_BYTES = 1024 * 1024;
function encodeSnapshotManifestBody(manifest) {
  const chunksArray = manifest.chunks.map((c2) => ({
    byte_length: c2.byte_length,
    chunk_index: c2.chunk_index,
    sha256_hash: c2.sha256_hash
  }));
  return encodeDeterministicCbor({
    chunk_size_bytes: manifest.chunk_size_bytes,
    chunks: chunksArray,
    full_file_sha256: manifest.full_file_sha256,
    public_control_head: manifest.public_control_head,
    published_at_ms: manifest.published_at_ms,
    schema_version: manifest.schema_version,
    signer_key_id: manifest.signer_key_id,
    snapshot_epoch: manifest.snapshot_epoch,
    stream_watermarks: { ...manifest.stream_watermarks },
    total_bytes: manifest.total_bytes,
    tournament_id: manifest.tournament_id
  }, { maxBytes: MAX_MANIFEST_BYTES });
}
function verifySnapshotManifest(manifest, publisherPublicKey) {
  const body = encodeSnapshotManifestBody(manifest);
  if (!verifyDomainBytes(DOMAIN_MANIFEST, body, publisherPublicKey, manifest.signature)) {
    throw new OpenMatProtocolError(
      ErrorCode.InvalidSignature,
      "Snapshot manifest signature verification failed"
    );
  }
  return true;
}
function encodeHeartbeatBody(hb) {
  return encodeDeterministicCbor({
    tournament_id: hb.tournament_id,
    stream_id: hb.stream_id,
    authority_epoch: hb.authority_epoch,
    heartbeat_counter: hb.heartbeat_counter,
    head_sequence: hb.head_sequence,
    head_hash: hb.head_hash,
    monotonic_time_ns: hb.monotonic_time_ns
  });
}
function verifyHeartbeat(hb, publicKey, lastSeenCounter) {
  if (hb.heartbeat_counter <= lastSeenCounter) {
    throw new OpenMatProtocolError(
      ErrorCode.ReplayHeartbeatRejected,
      `Replayed or non-increasing heartbeat counter (${hb.heartbeat_counter} <= ${lastSeenCounter})`
    );
  }
  const body = encodeHeartbeatBody(hb);
  if (!verifyDomainBytes(DOMAIN_HEARTBEAT, body, publicKey, hb.signature)) {
    throw new OpenMatProtocolError(
      ErrorCode.InvalidSignature,
      "SourceHeartbeat signature verification failed"
    );
  }
  return true;
}
const TransferReason = {
  NormalDeviceReplacement: 1,
  TimeoutOnlyInvalid: 3
};
const ApplyOutcome = {
  Applied: "Applied",
  DuplicateIgnored: "DuplicateIgnored",
  QueuedPendingDependency: "QueuedPendingDependency",
  QuarantinedOldEpoch: "QuarantinedOldEpoch",
  GapReplayRequested: "GapReplayRequested",
  EquivocationConflict: "EquivocationConflict"
};
class StreamVerifier {
  rootPubkey;
  highestAuthorityGeneration = 1;
  certs = /* @__PURE__ */ new Map();
  revokedCerts = /* @__PURE__ */ new Map();
  knownControlHeads = [new Uint8Array(32)];
  usedTransferIds = /* @__PURE__ */ new Set();
  streams = /* @__PURE__ */ new Map();
  pendingEvents = [];
  quarantinedEvents = [];
  equivocationsList = [];
  constructor(rootPubkey) {
    this.rootPubkey = new Uint8Array(rootPubkey);
  }
  registerCertificate(cert) {
    const body = encodeDelegatedCertificateBody(cert);
    if (!verifyDomainBytes(DOMAIN_CERT, body, this.rootPubkey, cert.root_signature)) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidSignature,
        "DelegatedCertificate root signature invalid"
      );
    }
    if (cert.authority_generation < this.highestAuthorityGeneration) {
      throw new OpenMatProtocolError(
        ErrorCode.EpochFencedOldEvent,
        "Certificate authority generation superseded"
      );
    }
    this.highestAuthorityGeneration = Math.max(
      this.highestAuthorityGeneration,
      cert.authority_generation
    );
    this.certs.set(cert.certificate_id, cert);
    return true;
  }
  revokeCertificate(certId, controlRevision) {
    this.revokedCerts.set(certId, controlRevision);
  }
  markControlHeadKnown(controlHead) {
    if (!this.knownControlHeads.some((h2) => bytesEqual(h2, controlHead))) {
      this.knownControlHeads.push(new Uint8Array(controlHead));
    }
  }
  applyAuthorityTransfer(transfer, transferAnchorHash) {
    if (transfer.reason === TransferReason.TimeoutOnlyInvalid || !transfer.old_operator_physically_stopped || !transfer.timers_initialized_stopped) {
      throw new OpenMatProtocolError(
        ErrorCode.TimeoutTakeoverForbidden,
        "Authority transfer requires physical stop and stopped timers; timeout-only takeover forbidden"
      );
    }
    if (!transfer.transfer_id || !transfer.stream_id) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "Transfer ID and stream ID must not be empty"
      );
    }
    if (this.usedTransferIds.has(transfer.transfer_id)) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "Authority transfer_id has already been applied"
      );
    }
    if (transfer.director_generation < this.highestAuthorityGeneration) {
      throw new OpenMatProtocolError(
        ErrorCode.EpochFencedOldEvent,
        "Transfer director_generation is superseded"
      );
    }
    const st = this.getOrCreateStream(transfer.stream_id);
    if (transfer.new_epoch <= st.activeEpoch || transfer.new_epoch <= transfer.old_epoch) {
      throw new OpenMatProtocolError(
        ErrorCode.EpochFencedOldEvent,
        "Transfer new_epoch must strictly exceed active epoch"
      );
    }
    this.usedTransferIds.add(transfer.transfer_id);
    this.highestAuthorityGeneration = Math.max(
      this.highestAuthorityGeneration,
      transfer.director_generation
    );
    st.activeEpoch = transfer.new_epoch;
    st.headSequence = transfer.old_last_sequence;
    st.headHash = new Uint8Array(transferAnchorHash);
    st.epochAnchorHash = new Uint8Array(transferAnchorHash);
    st.acceptedBySeq.clear();
    this.markControlHeadKnown(transferAnchorHash);
    return true;
  }
  verifyAndAccept(event, domain, requiredScope, currentWallMs, boutInProgress) {
    if (event.protocol_version !== PROTOCOL_VERSION || event.schema_version !== SCHEMA_VERSION) {
      throw new OpenMatProtocolError(
        ErrorCode.UnsupportedVersion,
        "Unsupported protocol or schema version"
      );
    }
    const body = encodeEventBodyCbor(event);
    if (this.revokedCerts.has(event.certificate_id)) {
      throw new OpenMatProtocolError(
        ErrorCode.CertificateRevoked,
        "Event signer certificate has been revoked"
      );
    }
    const cert = this.certs.get(event.certificate_id);
    if (!cert) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidSignature,
        "Unknown certificate_id on SignedEvent"
      );
    }
    if (event.signer_key_id && event.signer_key_id !== cert.subject_key_id) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidSignature,
        "Event signer_key_id does not match certificate subject"
      );
    }
    verifyDelegatedCertificate(cert, this.rootPubkey, currentWallMs, boutInProgress);
    if ((cert.allowed_scopes & requiredScope) !== requiredScope) {
      throw new OpenMatProtocolError(
        ErrorCode.UnauthorizedScope,
        "Certificate lacks required scope for operation"
      );
    }
    if (cert.allowed_stream_id && cert.allowed_stream_id !== "*" && cert.allowed_stream_id !== event.stream_id) {
      throw new OpenMatProtocolError(
        ErrorCode.UnauthorizedScope,
        "Certificate is not authorized for this stream_id"
      );
    }
    if (cert.tournament_id && event.tournament_id && cert.tournament_id !== event.tournament_id) {
      throw new OpenMatProtocolError(
        ErrorCode.UnauthorizedScope,
        "Certificate tournament_id mismatch"
      );
    }
    if (!verifyDomainBytes(domain, body, cert.subject_pubkey, event.signature)) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidSignature,
        "SignedEvent signature verification failed"
      );
    }
    const expectedId = computeEventId(domain, body, event.signature);
    if (!bytesEqual(expectedId, event.event_id)) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidSignature,
        "SignedEvent event_id does not match computed hash"
      );
    }
    const st = this.getOrCreateStream(event.stream_id);
    if (event.authority_epoch < st.activeEpoch) {
      this.quarantinedEvents.push(event);
      return ApplyOutcome.QuarantinedOldEpoch;
    }
    const controlHeadKnown = this.knownControlHeads.some(
      (h2) => bytesEqual(h2, event.required_public_control_head)
    );
    if (!controlHeadKnown) {
      if (this.pendingEvents.some((p2) => bytesEqual(p2.event_id, event.event_id))) {
        return ApplyOutcome.QueuedPendingDependency;
      }
      if (this.pendingEvents.length >= MAX_PENDING_AUTH_EVENTS) {
        throw new OpenMatProtocolError(
          ErrorCode.PendingDependencyOverflow,
          "Pending authorization dependency queue capacity exceeded"
        );
      }
      this.pendingEvents.push(event);
      return ApplyOutcome.QueuedPendingDependency;
    }
    if (event.authority_epoch > st.activeEpoch) {
      throw new OpenMatProtocolError(
        ErrorCode.EpochFencedOldEvent,
        "Event epoch exceeds active stream epoch without transfer"
      );
    }
    const existingAtSeq = st.acceptedBySeq.get(event.sequence);
    if (existingAtSeq) {
      if (bytesEqual(existingAtSeq.event_id, event.event_id)) {
        return ApplyOutcome.DuplicateIgnored;
      }
      this.equivocationsList.push({
        stream_id: event.stream_id,
        authority_epoch: event.authority_epoch,
        sequence: event.sequence,
        first_event: existingAtSeq,
        conflicting_event: event
      });
      return ApplyOutcome.EquivocationConflict;
    }
    if (event.sequence <= st.headSequence) {
      throw new OpenMatProtocolError(
        ErrorCode.SequenceGap,
        "Event sequence precedes epoch anchor sequence"
      );
    }
    if (event.sequence > st.headSequence + 1) {
      return ApplyOutcome.GapReplayRequested;
    }
    if (!bytesEqual(event.previous_event_hash, st.headHash)) {
      throw new OpenMatProtocolError(
        ErrorCode.HashChainMismatch,
        "SignedEvent previous_event_hash mismatch"
      );
    }
    st.headSequence = event.sequence;
    st.headHash = new Uint8Array(event.event_id);
    st.acceptedBySeq.set(event.sequence, event);
    if (domain === DOMAIN_CONTROL) {
      this.markControlHeadKnown(event.event_id);
    }
    return ApplyOutcome.Applied;
  }
  drainReadyPending(domain, requiredScope, currentWallMs, boutInProgress) {
    const applied = [];
    if (this.pendingEvents.length === 0) {
      return applied;
    }
    this.pendingEvents.sort((a2, b2) => {
      if (a2.stream_id !== b2.stream_id) return a2.stream_id.localeCompare(b2.stream_id);
      if (a2.authority_epoch !== b2.authority_epoch) return a2.authority_epoch - b2.authority_epoch;
      return a2.sequence - b2.sequence;
    });
    let progress = true;
    while (progress && this.pendingEvents.length > 0) {
      progress = false;
      const remaining = [];
      for (const ev of this.pendingEvents) {
        const ready = this.knownControlHeads.some(
          (h2) => bytesEqual(h2, ev.required_public_control_head)
        );
        if (!ready) {
          remaining.push(ev);
          continue;
        }
        const outcome = this.verifyAndAccept(
          ev,
          domain,
          requiredScope,
          currentWallMs,
          boutInProgress
        );
        if (outcome === ApplyOutcome.Applied) {
          applied.push(ev);
          progress = true;
        } else if (outcome === ApplyOutcome.GapReplayRequested || outcome === ApplyOutcome.QueuedPendingDependency) {
          remaining.push(ev);
        }
      }
      this.pendingEvents = remaining;
    }
    return applied;
  }
  activeEpoch(streamId) {
    return this.streams.get(streamId)?.activeEpoch ?? 1;
  }
  headSequence(streamId) {
    return this.streams.get(streamId)?.headSequence ?? 0;
  }
  headHash(streamId) {
    return this.streams.get(streamId)?.headHash ?? new Uint8Array(32);
  }
  quarantinedOldEpochEvents() {
    return this.quarantinedEvents;
  }
  equivocations() {
    return this.equivocationsList;
  }
  getOrCreateStream(streamId) {
    let st = this.streams.get(streamId);
    if (!st) {
      st = {
        activeEpoch: 1,
        headSequence: 0,
        headHash: new Uint8Array(32),
        epochAnchorHash: new Uint8Array(32),
        acceptedBySeq: /* @__PURE__ */ new Map()
      };
      this.streams.set(streamId, st);
    }
    return st;
  }
}
function randomUuid() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    crypto.getRandomValues(bytes);
  } else {
    for (let i2 = 0; i2 < 16; i2++) bytes[i2] = Math.floor(Math.random() * 256);
  }
  bytes[6] = bytes[6] & 15 | 64;
  bytes[8] = bytes[8] & 63 | 128;
  const hex = toHex(bytes);
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}
const OPENMAT_DB_BUS_CHANNEL = "openmat-public-database";
class LocalDatabaseCoordinator {
  worker = new Worker(new URL(
    /* @vite-ignore */
    "" + new URL("localDatabase.worker-BQ8LvFa2.js", import.meta.url).href,
    import.meta.url
  ), { type: "module" });
  channel = new BroadcastChannel(OPENMAT_DB_BUS_CHANNEL);
  pending = /* @__PURE__ */ new Map();
  onPageHide = () => this.close();
  initializationError = "";
  constructor() {
    this.worker.onerror = (event) => {
      this.initializationError = event.message || "Local Database worker failed";
    };
    window.addEventListener("pagehide", this.onPageHide, { once: true });
    this.channel.onmessage = ({ data }) => {
      if (!data.id && data.error) this.initializationError = String(data.error);
      const request = this.pending.get(data.id);
      if (!request) return;
      this.pending.delete(data.id);
      if (data.error) request.reject(new Error(data.error));
      else request.resolve(data.value);
    };
  }
  async connect() {
    const deadline = Date.now() + 3e4;
    while (Date.now() < deadline) {
      if (this.initializationError) throw new Error(this.initializationError);
      try {
        return await this.request("status", {}, 500);
      } catch {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
    throw new Error("Local Database unavailable. Browser storage or worker initialization failed.");
  }
  query(name) {
    return this.request(name);
  }
  installSnapshot(manifest, bytes, publicKey) {
    return this.request("install", { manifest, bytes, publicKey });
  }
  close() {
    window.removeEventListener("pagehide", this.onPageHide);
    this.worker.terminate();
    this.channel.close();
    for (const request of this.pending.values()) request.reject(new Error("Local Database client closed"));
    this.pending.clear();
  }
  request(method, args = {}, timeoutMs = 3e4) {
    const id = randomUuid();
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error("Local Database request timed out; cached results may be stale."));
      }, timeoutMs);
      this.pending.set(id, {
        resolve: (value) => {
          clearTimeout(timer);
          resolve(value);
        },
        reject: (error) => {
          clearTimeout(timer);
          reject(error);
        }
      });
      this.channel.postMessage({ id, method, args });
    });
  }
}
const LIMIT = 4194304;
function canonical(a2, b2) {
  if (a2.length !== b2.length || a2.some((v2, i2) => v2 !== b2[i2])) throw new Error("Noncanonical binary packet");
}
class Writer {
  data = [];
  varint(n3) {
    do {
      const low = n3 % 128;
      n3 = Math.floor(n3 / 128);
      this.data.push(low + (n3 ? 128 : 0));
    } while (n3);
  }
  number(f2, n3, max) {
    if (!Number.isSafeInteger(n3) || n3 < 0 || n3 > max) throw new Error("Binary integer/enum out of range");
    if (n3) {
      this.varint(f2 * 8);
      this.varint(n3);
    }
  }
  bytes(f2, b2, omitEmpty = true) {
    if (!b2.length && omitEmpty) return;
    if (b2.length + this.data.length + 10 > LIMIT) throw new Error("Binary packet exceeds limit");
    this.varint(f2 * 8 + 2);
    this.varint(b2.length);
    for (const v2 of b2) this.data.push(v2);
  }
  text(f2, s2) {
    const bytes = new TextEncoder().encode(s2);
    if (new TextDecoder("utf-8", { fatal: true }).decode(bytes) !== s2) throw new Error("Invalid UTF-8");
    this.bytes(f2, bytes);
  }
  take() {
    if (this.data.length > LIMIT) throw new Error("Binary packet exceeds limit");
    return Uint8Array.from(this.data);
  }
}
class Reader {
  constructor(data) {
    this.data = data;
    if (data.length > LIMIT) throw new Error("Binary packet exceeds limit");
  }
  data;
  offset = 0;
  wire = 0;
  field = 0;
  varint() {
    let n3 = 0;
    for (let shift = 0; shift <= 49; shift += 7) {
      if (this.offset === this.data.length) throw new Error("Truncated varint");
      const c2 = this.data[this.offset++];
      n3 += (c2 & 127) * 2 ** shift;
      if (!(c2 & 128)) {
        if (!Number.isSafeInteger(n3)) throw new Error("Unsafe integer");
        return n3;
      }
    }
    throw new Error("Varint overflow");
  }
  next() {
    if (this.offset === this.data.length) return false;
    const tag = this.varint(), field = Math.floor(tag / 8);
    if (!field || field > 536870911 || field < this.field) throw new Error("Invalid field order");
    this.field = field;
    this.wire = tag % 8;
    return true;
  }
  number() {
    if (this.wire !== 0) throw new Error("Wrong wire type");
    return this.varint();
  }
  bytes() {
    if (this.wire !== 2) throw new Error("Wrong wire type");
    const length = this.varint();
    if (length > this.data.length - this.offset) throw new Error("Truncated bytes");
    const bytes = this.data.slice(this.offset, this.offset + length);
    this.offset += length;
    return bytes;
  }
  text() {
    return new TextDecoder("utf-8", { fatal: true }).decode(this.bytes());
  }
}
function encodeTeam(v2) {
  const w2 = new Writer();
  w2.number(1, v2.index, 4294967295);
  w2.number(2, v2.half_points, 4294967295);
  w2.text(3, v2.name);
  w2.text(4, v2.team_id);
  return w2.take();
}
function decodeTeam(bytes) {
  const v2 = {
    index: 0,
    half_points: 0,
    name: "",
    team_id: ""
  };
  const r2 = new Reader(bytes);
  while (r2.next()) switch (r2.field) {
    case 1:
      v2.index = r2.number();
      break;
    case 2:
      v2.half_points = r2.number();
      break;
    case 3:
      v2.name = r2.text();
      break;
    case 4:
      v2.team_id = r2.text();
      break;
    default:
      throw new Error("Unknown binary field");
  }
  canonical(bytes, encodeTeam(v2));
  return v2;
}
function encodeAthlete(v2) {
  const w2 = new Writer();
  w2.number(1, v2.slot, 4294967295);
  w2.number(2, v2.team_index, 4294967295);
  w2.number(3, v2.seed_rank, 4294967295);
  w2.number(4, v2.state, 4294967295);
  w2.text(5, v2.display_name);
  w2.text(6, v2.athlete_id);
  w2.number(7, v2.public_stage, 4294967295);
  return w2.take();
}
function decodeAthlete(bytes) {
  const v2 = {
    slot: 0,
    team_index: 0,
    seed_rank: 0,
    state: 0,
    display_name: "",
    athlete_id: "",
    public_stage: 0
  };
  const r2 = new Reader(bytes);
  while (r2.next()) switch (r2.field) {
    case 1:
      v2.slot = r2.number();
      break;
    case 2:
      v2.team_index = r2.number();
      break;
    case 3:
      v2.seed_rank = r2.number();
      break;
    case 4:
      v2.state = r2.number();
      break;
    case 5:
      v2.display_name = r2.text();
      break;
    case 6:
      v2.athlete_id = r2.text();
      break;
    case 7:
      v2.public_stage = r2.number();
      break;
    default:
      throw new Error("Unknown binary field");
  }
  canonical(bytes, encodeAthlete(v2));
  return v2;
}
function encodeBout(v2) {
  const w2 = new Writer();
  w2.number(1, v2.local_number, 4294967295);
  w2.number(2, v2.bout_number, 4294967295);
  w2.number(3, v2.round_index, 4294967295);
  w2.number(4, v2.flags, 4294967295);
  w2.number(5, v2.placement_rank, 4294967295);
  w2.number(6, v2.red_slot, 4294967295);
  w2.number(7, v2.green_slot, 4294967295);
  w2.number(8, v2.winner_slot, 4294967295);
  w2.number(9, v2.loser_slot, 4294967295);
  w2.number(10, v2.winner_next, 4294967295);
  w2.number(11, v2.loser_next, 4294967295);
  w2.number(12, v2.lifecycle, 8);
  w2.number(13, v2.win_type, 8);
  w2.number(14, v2.red_score, 4294967295);
  w2.number(15, v2.green_score, 4294967295);
  w2.number(16, v2.period, 4294967295);
  w2.number(17, v2.clock_remaining_ds, 4294967295);
  w2.number(18, v2.mat_id, 4294967295);
  w2.number(19, v2.assignment_revision, 4294967295);
  w2.number(20, v2.completed_offset_sec, 4294967295);
  w2.text(21, v2.match_id);
  w2.number(22, v2.eventlog_available, 4294967295);
  w2.number(23, v2.edge_flags, 4294967295);
  return w2.take();
}
function decodeBout(bytes) {
  const v2 = {
    local_number: 0,
    bout_number: 0,
    round_index: 0,
    flags: 0,
    placement_rank: 0,
    red_slot: 0,
    green_slot: 0,
    winner_slot: 0,
    loser_slot: 0,
    winner_next: 0,
    loser_next: 0,
    lifecycle: 0,
    win_type: 0,
    red_score: 0,
    green_score: 0,
    period: 0,
    clock_remaining_ds: 0,
    mat_id: 0,
    assignment_revision: 0,
    completed_offset_sec: 0,
    match_id: "",
    eventlog_available: 0,
    edge_flags: 0
  };
  const r2 = new Reader(bytes);
  while (r2.next()) switch (r2.field) {
    case 1:
      v2.local_number = r2.number();
      break;
    case 2:
      v2.bout_number = r2.number();
      break;
    case 3:
      v2.round_index = r2.number();
      break;
    case 4:
      v2.flags = r2.number();
      break;
    case 5:
      v2.placement_rank = r2.number();
      break;
    case 6:
      v2.red_slot = r2.number();
      break;
    case 7:
      v2.green_slot = r2.number();
      break;
    case 8:
      v2.winner_slot = r2.number();
      break;
    case 9:
      v2.loser_slot = r2.number();
      break;
    case 10:
      v2.winner_next = r2.number();
      break;
    case 11:
      v2.loser_next = r2.number();
      break;
    case 12:
      v2.lifecycle = r2.number();
      break;
    case 13:
      v2.win_type = r2.number();
      break;
    case 14:
      v2.red_score = r2.number();
      break;
    case 15:
      v2.green_score = r2.number();
      break;
    case 16:
      v2.period = r2.number();
      break;
    case 17:
      v2.clock_remaining_ds = r2.number();
      break;
    case 18:
      v2.mat_id = r2.number();
      break;
    case 19:
      v2.assignment_revision = r2.number();
      break;
    case 20:
      v2.completed_offset_sec = r2.number();
      break;
    case 21:
      v2.match_id = r2.text();
      break;
    case 22:
      v2.eventlog_available = r2.number();
      break;
    case 23:
      v2.edge_flags = r2.number();
      break;
    default:
      throw new Error("Unknown binary field");
  }
  canonical(bytes, encodeBout(v2));
  return v2;
}
function defaultsBout() {
  return {
    local_number: 0,
    bout_number: 0,
    round_index: 0,
    flags: 0,
    placement_rank: 0,
    red_slot: 0,
    green_slot: 0,
    winner_slot: 0,
    loser_slot: 0,
    winner_next: 0,
    loser_next: 0,
    lifecycle: 0,
    win_type: 0,
    red_score: 0,
    green_score: 0,
    period: 0,
    clock_remaining_ds: 0,
    mat_id: 0,
    assignment_revision: 0,
    completed_offset_sec: 0,
    match_id: "",
    eventlog_available: 0,
    edge_flags: 0
  };
}
function encodeDirectoryEntry(v2) {
  const w2 = new Writer();
  w2.number(1, v2.bracket_index, 4294967295);
  w2.number(2, v2.division, 4);
  w2.number(3, v2.weight_index, 4294967295);
  w2.number(4, v2.revision, 9007199254740991);
  w2.number(5, v2.eventlog_word_count, 4294967295);
  w2.bytes(6, v2.state_sha256);
  w2.text(7, v2.bracket_id);
  w2.text(8, v2.weight_class_id);
  return w2.take();
}
function decodeDirectoryEntry(bytes) {
  const v2 = {
    bracket_index: 0,
    division: 0,
    weight_index: 0,
    revision: 0,
    eventlog_word_count: 0,
    state_sha256: new Uint8Array(),
    bracket_id: "",
    weight_class_id: ""
  };
  const r2 = new Reader(bytes);
  while (r2.next()) switch (r2.field) {
    case 1:
      v2.bracket_index = r2.number();
      break;
    case 2:
      v2.division = r2.number();
      break;
    case 3:
      v2.weight_index = r2.number();
      break;
    case 4:
      v2.revision = r2.number();
      break;
    case 5:
      v2.eventlog_word_count = r2.number();
      break;
    case 6:
      v2.state_sha256 = r2.bytes();
      break;
    case 7:
      v2.bracket_id = r2.text();
      break;
    case 8:
      v2.weight_class_id = r2.text();
      break;
    default:
      throw new Error("Unknown binary field");
  }
  canonical(bytes, encodeDirectoryEntry(v2));
  return v2;
}
function encodeSummary(v2) {
  const w2 = new Writer();
  w2.text(1, v2.tournament_id);
  w2.number(2, v2.base_epoch_utc, 4294967295);
  w2.number(3, v2.revision, 9007199254740991);
  w2.number(4, v2.mat_count, 4294967295);
  w2.bytes(5, v2.rules_hash);
  w2.bytes(6, v2.authority_public_key);
  for (const item of v2.teams) w2.bytes(7, encodeTeam(item), false);
  for (const item of v2.brackets) w2.bytes(8, encodeDirectoryEntry(item), false);
  return w2.take();
}
function decodeSummary(bytes) {
  const v2 = {
    tournament_id: "",
    base_epoch_utc: 0,
    revision: 0,
    mat_count: 0,
    rules_hash: new Uint8Array(),
    authority_public_key: new Uint8Array(),
    teams: [],
    brackets: []
  };
  const r2 = new Reader(bytes);
  while (r2.next()) switch (r2.field) {
    case 1:
      v2.tournament_id = r2.text();
      break;
    case 2:
      v2.base_epoch_utc = r2.number();
      break;
    case 3:
      v2.revision = r2.number();
      break;
    case 4:
      v2.mat_count = r2.number();
      break;
    case 5:
      v2.rules_hash = r2.bytes();
      break;
    case 6:
      v2.authority_public_key = r2.bytes();
      break;
    case 7:
      v2.teams.push(decodeTeam(r2.bytes()));
      break;
    case 8:
      v2.brackets.push(decodeDirectoryEntry(r2.bytes()));
      break;
    default:
      throw new Error("Unknown binary field");
  }
  canonical(bytes, encodeSummary(v2));
  return v2;
}
function encodeBracketState(v2) {
  const w2 = new Writer();
  w2.number(1, v2.bracket_index, 4294967295);
  w2.number(2, v2.division, 4);
  w2.number(3, v2.weight_index, 4294967295);
  w2.number(4, v2.format, 4294967295);
  w2.number(5, v2.revision, 9007199254740991);
  for (const item of v2.athletes) w2.bytes(6, encodeAthlete(item), false);
  for (const item of v2.bouts) w2.bytes(7, encodeBout(item), false);
  w2.bytes(8, v2.placement_slots);
  w2.text(30, v2.tournament_id);
  w2.text(31, v2.bracket_id);
  return w2.take();
}
function decodeBracketState(bytes) {
  const v2 = {
    bracket_index: 0,
    division: 0,
    weight_index: 0,
    format: 0,
    revision: 0,
    athletes: [],
    bouts: [],
    placement_slots: new Uint8Array(),
    tournament_id: "",
    bracket_id: ""
  };
  const r2 = new Reader(bytes);
  while (r2.next()) switch (r2.field) {
    case 1:
      v2.bracket_index = r2.number();
      break;
    case 2:
      v2.division = r2.number();
      break;
    case 3:
      v2.weight_index = r2.number();
      break;
    case 4:
      v2.format = r2.number();
      break;
    case 5:
      v2.revision = r2.number();
      break;
    case 6:
      v2.athletes.push(decodeAthlete(r2.bytes()));
      break;
    case 7:
      v2.bouts.push(decodeBout(r2.bytes()));
      break;
    case 8:
      v2.placement_slots = r2.bytes();
      break;
    case 30:
      v2.tournament_id = r2.text();
      break;
    case 31:
      v2.bracket_id = r2.text();
      break;
    default:
      throw new Error("Unknown binary field");
  }
  canonical(bytes, encodeBracketState(v2));
  return v2;
}
function defaultsBracketState() {
  return {
    bracket_index: 0,
    division: 0,
    weight_index: 0,
    format: 0,
    revision: 0,
    athletes: [],
    bouts: [],
    placement_slots: new Uint8Array(),
    tournament_id: "",
    bracket_id: ""
  };
}
function encodeMatUpdate(v2) {
  const w2 = new Writer();
  w2.number(1, v2.mat_id, 4294967295);
  w2.number(2, v2.bracket_index, 4294967295);
  w2.number(3, v2.local_number, 4294967295);
  w2.number(4, v2.bout_number, 4294967295);
  w2.number(5, v2.red_slot, 4294967295);
  w2.number(6, v2.green_slot, 4294967295);
  w2.number(7, v2.red_score, 4294967295);
  w2.number(8, v2.green_score, 4294967295);
  w2.number(9, v2.period, 4294967295);
  w2.number(10, v2.clock_remaining_ds, 4294967295);
  w2.number(11, v2.clock_running, 4294967295);
  w2.number(12, v2.on_deck, 4294967295);
  w2.number(13, v2.in_the_hole, 4294967295);
  w2.bytes(14, v2.eventlog_words);
  w2.text(30, v2.tournament_id);
  w2.text(31, v2.bracket_id);
  w2.number(32, v2.revision, 9007199254740991);
  return w2.take();
}
function decodeMatUpdate(bytes) {
  const v2 = {
    mat_id: 0,
    bracket_index: 0,
    local_number: 0,
    bout_number: 0,
    red_slot: 0,
    green_slot: 0,
    red_score: 0,
    green_score: 0,
    period: 0,
    clock_remaining_ds: 0,
    clock_running: 0,
    on_deck: 0,
    in_the_hole: 0,
    eventlog_words: new Uint8Array(),
    tournament_id: "",
    bracket_id: "",
    revision: 0
  };
  const r2 = new Reader(bytes);
  while (r2.next()) switch (r2.field) {
    case 1:
      v2.mat_id = r2.number();
      break;
    case 2:
      v2.bracket_index = r2.number();
      break;
    case 3:
      v2.local_number = r2.number();
      break;
    case 4:
      v2.bout_number = r2.number();
      break;
    case 5:
      v2.red_slot = r2.number();
      break;
    case 6:
      v2.green_slot = r2.number();
      break;
    case 7:
      v2.red_score = r2.number();
      break;
    case 8:
      v2.green_score = r2.number();
      break;
    case 9:
      v2.period = r2.number();
      break;
    case 10:
      v2.clock_remaining_ds = r2.number();
      break;
    case 11:
      v2.clock_running = r2.number();
      break;
    case 12:
      v2.on_deck = r2.number();
      break;
    case 13:
      v2.in_the_hole = r2.number();
      break;
    case 14:
      v2.eventlog_words = r2.bytes();
      break;
    case 30:
      v2.tournament_id = r2.text();
      break;
    case 31:
      v2.bracket_id = r2.text();
      break;
    case 32:
      v2.revision = r2.number();
      break;
    default:
      throw new Error("Unknown binary field");
  }
  canonical(bytes, encodeMatUpdate(v2));
  return v2;
}
function encodeMatBoard(v2) {
  const w2 = new Writer();
  for (const item of v2.mats) w2.bytes(1, encodeMatUpdate(item), false);
  w2.text(30, v2.tournament_id);
  w2.number(32, v2.revision, 9007199254740991);
  return w2.take();
}
function decodeMatBoard(bytes) {
  const v2 = {
    mats: [],
    tournament_id: "",
    revision: 0
  };
  const r2 = new Reader(bytes);
  while (r2.next()) switch (r2.field) {
    case 1:
      v2.mats.push(decodeMatUpdate(r2.bytes()));
      break;
    case 30:
      v2.tournament_id = r2.text();
      break;
    case 32:
      v2.revision = r2.number();
      break;
    default:
      throw new Error("Unknown binary field");
  }
  canonical(bytes, encodeMatBoard(v2));
  return v2;
}
function encodeBoutUpdate(v2) {
  const w2 = new Writer();
  w2.number(1, v2.bracket_index, 4294967295);
  w2.number(2, v2.revision, 9007199254740991);
  w2.bytes(3, encodeBout(v2.bout), false);
  w2.bytes(4, v2.eventlog_words);
  w2.text(30, v2.tournament_id);
  w2.text(31, v2.bracket_id);
  return w2.take();
}
function decodeBoutUpdate(bytes) {
  const v2 = {
    bracket_index: 0,
    revision: 0,
    bout: defaultsBout(),
    eventlog_words: new Uint8Array(),
    tournament_id: "",
    bracket_id: ""
  };
  const r2 = new Reader(bytes);
  while (r2.next()) switch (r2.field) {
    case 1:
      v2.bracket_index = r2.number();
      break;
    case 2:
      v2.revision = r2.number();
      break;
    case 3:
      v2.bout = decodeBout(r2.bytes());
      break;
    case 4:
      v2.eventlog_words = r2.bytes();
      break;
    case 30:
      v2.tournament_id = r2.text();
      break;
    case 31:
      v2.bracket_id = r2.text();
      break;
    default:
      throw new Error("Unknown binary field");
  }
  canonical(bytes, encodeBoutUpdate(v2));
  return v2;
}
function encodeBracketEventlog(v2) {
  const w2 = new Writer();
  w2.number(1, v2.bracket_index, 4294967295);
  w2.bytes(2, v2.eventlog_words);
  w2.text(30, v2.tournament_id);
  w2.text(31, v2.bracket_id);
  w2.number(32, v2.revision, 9007199254740991);
  return w2.take();
}
function decodeBracketEventlog(bytes) {
  const v2 = {
    bracket_index: 0,
    eventlog_words: new Uint8Array(),
    tournament_id: "",
    bracket_id: "",
    revision: 0
  };
  const r2 = new Reader(bytes);
  while (r2.next()) switch (r2.field) {
    case 1:
      v2.bracket_index = r2.number();
      break;
    case 2:
      v2.eventlog_words = r2.bytes();
      break;
    case 30:
      v2.tournament_id = r2.text();
      break;
    case 31:
      v2.bracket_id = r2.text();
      break;
    case 32:
      v2.revision = r2.number();
      break;
    default:
      throw new Error("Unknown binary field");
  }
  canonical(bytes, encodeBracketEventlog(v2));
  return v2;
}
function encodeBracketFull(v2) {
  const w2 = new Writer();
  w2.bytes(1, encodeBracketState(v2.state), false);
  w2.bytes(2, v2.eventlog_words);
  w2.text(30, v2.tournament_id);
  w2.text(31, v2.bracket_id);
  w2.number(32, v2.revision, 9007199254740991);
  return w2.take();
}
function decodeBracketFull(bytes) {
  const v2 = {
    state: defaultsBracketState(),
    eventlog_words: new Uint8Array(),
    tournament_id: "",
    bracket_id: "",
    revision: 0
  };
  const r2 = new Reader(bytes);
  while (r2.next()) switch (r2.field) {
    case 1:
      v2.state = decodeBracketState(r2.bytes());
      break;
    case 2:
      v2.eventlog_words = r2.bytes();
      break;
    case 30:
      v2.tournament_id = r2.text();
      break;
    case 31:
      v2.bracket_id = r2.text();
      break;
    case 32:
      v2.revision = r2.number();
      break;
    default:
      throw new Error("Unknown binary field");
  }
  canonical(bytes, encodeBracketFull(v2));
  return v2;
}
function encodeSignedPacket(v2) {
  const w2 = new Writer();
  w2.bytes(1, v2.body);
  w2.bytes(2, v2.signature);
  return w2.take();
}
function decodeSignedPacket(bytes) {
  const v2 = {
    body: new Uint8Array(),
    signature: new Uint8Array()
  };
  const r2 = new Reader(bytes);
  while (r2.next()) switch (r2.field) {
    case 1:
      v2.body = r2.bytes();
      break;
    case 2:
      v2.signature = r2.bytes();
      break;
    default:
      throw new Error("Unknown binary field");
  }
  canonical(bytes, encodeSignedPacket(v2));
  return v2;
}
const BRACKET_TOPICS = ["tournament-summary", "mat-board", "mat-update", "bout-update", "bracket-state", "bracket-eventlog", "bracket-full"];
const codecs = {
  "tournament-summary": [encodeSummary, decodeSummary],
  "mat-board": [encodeMatBoard, decodeMatBoard],
  "mat-update": [encodeMatUpdate, decodeMatUpdate],
  "bout-update": [encodeBoutUpdate, decodeBoutUpdate],
  "bracket-state": [encodeBracketState, decodeBracketState],
  "bracket-eventlog": [encodeBracketEventlog, decodeBracketEventlog],
  "bracket-full": [encodeBracketFull, decodeBracketFull]
};
function bracketDomain(topic) {
  check(BRACKET_TOPICS.includes(topic), "Unknown binary topic");
  return `OpenMat:v2:${topic === "tournament-summary" ? "summary" : topic}`;
}
function check(ok, message) {
  if (!ok) throw new Error(message);
}
function wordsToBytes(words) {
  const bytes = new Uint8Array(words.length * 4), view = new DataView(bytes.buffer);
  for (let i2 = 0; i2 < words.length; i2++) {
    const word = words[i2];
    check(Number.isInteger(word) && word >= 0 && word <= 4294967295, "Invalid eventlog word");
    view.setUint32(i2 * 4, word, true);
  }
  return bytes;
}
function wordsFromBytes(bytes) {
  check(bytes.length % 4 === 0, "Truncated eventlog word");
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength), words = new Uint32Array(bytes.length / 4);
  for (let i2 = 0; i2 < words.length; i2++) words[i2] = view.getUint32(i2 * 4, true);
  return words;
}
function validateBoutLog(bytes) {
  if (!bytes.length) return;
  const words = wordsFromBytes(bytes);
  let previous = 0;
  for (const word of words.subarray(1)) {
    const id = word & 127, delta = word >>> 7;
    check(id > 0 && id < 75 && delta >= previous, "Invalid packed bout log");
    previous = delta;
  }
}
function unpackBracketEventlogs(words, index) {
  check(words.length >= 4 && words[0] === 1296389682 && (words[1] & 255) === index, "Invalid bracket log header");
  const count = words[1] >>> 8 & 255, payload = words[1] >>> 16, start = 3 + Math.ceil((count + 1) / 2);
  check(words.length === start + payload, "Truncated bracket log");
  const offset = (i2) => words[3 + (i2 >>> 1)] >>> i2 % 2 * 16 & 65535;
  check(offset(0) === 0 && offset(count) === payload, "Invalid bracket log offsets");
  if (count % 2 === 0) check(words[start - 1] >>> 16 === 0, "Nonzero offset padding");
  const bouts = [];
  for (let i2 = 0; i2 < count; i2++) {
    const a2 = offset(i2), b2 = offset(i2 + 1);
    check(a2 < b2 && b2 <= payload, "Invalid bout offset");
    const bout = words.slice(start + a2, start + b2);
    validateBoutLog(wordsToBytes(bout));
    bouts.push(bout);
  }
  return bouts;
}
function identity(t2, b2, revision, tournament, bracket, scoped) {
  check(t2.length > 0 && t2.length <= 150 && revision > 0, "Missing tournament identity or revision");
  check(!tournament || t2 === tournament, "Wrong tournament");
  check(!bracket || b2 === bracket, "Wrong bracket");
  check(!scoped || /^[A-Za-z0-9_-]{1,100}$/.test(b2), "Invalid bracket id");
}
function validateMat(m2) {
  check(m2.mat_id >= 1 && m2.mat_id <= 20 && m2.bracket_index <= 255 && m2.clock_running <= 1 && m2.period <= 9, "Invalid mat update");
  validateBoutLog(m2.eventlog_words);
}
function validateState(s2) {
  check(s2.bracket_index <= 255 && s2.division >= 1 && s2.division <= 4 && s2.weight_index < 14 && s2.format >= 1 && s2.format <= 7 && s2.athletes.length <= 255 && s2.bouts.length <= 255, "Invalid bracket state");
  const slots = /* @__PURE__ */ new Set([0]), numbers = /* @__PURE__ */ new Set([0]), athletes = /* @__PURE__ */ new Set(), matches = /* @__PURE__ */ new Set();
  let previous = 0;
  for (const a2 of s2.athletes) {
    check(a2.slot > previous && a2.slot <= 255 && a2.team_index > 0 && a2.state >= 1 && a2.state <= 5 && a2.athlete_id && !athletes.has(a2.athlete_id), "Invalid bracket athlete");
    previous = a2.slot;
    slots.add(a2.slot);
    athletes.add(a2.athlete_id);
  }
  previous = 0;
  for (const b2 of s2.bouts) {
    check(b2.local_number > previous && b2.local_number <= 255 && b2.flags <= 31 && b2.period <= 9 && b2.mat_id <= 20 && b2.match_id && !matches.has(b2.match_id), "Invalid bracket bout");
    previous = b2.local_number;
    numbers.add(b2.local_number);
    matches.add(b2.match_id);
    check([b2.red_slot, b2.green_slot, b2.winner_slot, b2.loser_slot].every((slot) => slots.has(slot)), "Unknown athlete slot");
  }
  for (const b2 of s2.bouts) check(numbers.has(b2.winner_next) && numbers.has(b2.loser_next), "Unknown bout edge");
  for (const slot of s2.placement_slots) check(slots.has(slot), "Unknown placement slot");
}
function decodeBracketBody(topic, bytes, tournament = "", bracket = "") {
  bracketDomain(topic);
  const value = codecs[topic][1](bytes);
  if (topic === "tournament-summary") {
    const v2 = value;
    identity(v2.tournament_id, "", v2.revision, tournament, bracket, false);
    check(v2.mat_count <= 20 && v2.rules_hash.length === 32 && v2.authority_public_key.length === 32, "Invalid summary");
    const teams = /* @__PURE__ */ new Set(), ids = /* @__PURE__ */ new Set();
    let previous = -1;
    for (const t2 of v2.teams) {
      check(t2.index > 0 && !teams.has(t2.index), "Duplicate team index");
      teams.add(t2.index);
    }
    for (const b2 of v2.brackets) {
      identity(v2.tournament_id, b2.bracket_id, b2.revision, tournament, "", true);
      check(b2.bracket_index <= 255 && b2.bracket_index > previous && b2.division >= 1 && b2.division <= 4 && b2.weight_index < 14 && b2.state_sha256.length === 32 && !ids.has(b2.bracket_id), "Invalid bracket directory");
      previous = b2.bracket_index;
      ids.add(b2.bracket_id);
    }
  } else if (topic === "mat-board") {
    const v2 = value;
    identity(v2.tournament_id, "", v2.revision, tournament, bracket, false);
    let previous = 0;
    for (const m2 of v2.mats) {
      identity(m2.tournament_id, m2.bracket_id, m2.revision, v2.tournament_id, "", true);
      validateMat(m2);
      check(m2.mat_id > previous && m2.revision <= v2.revision, "Invalid mat board order/revision");
      previous = m2.mat_id;
    }
  } else if (topic === "mat-update") {
    const v2 = value;
    identity(v2.tournament_id, v2.bracket_id, v2.revision, tournament, bracket, true);
    validateMat(v2);
  } else if (topic === "bout-update") {
    const v2 = value;
    identity(v2.tournament_id, v2.bracket_id, v2.revision, tournament, bracket, true);
    check(v2.bracket_index <= 255 && v2.bout.local_number > 0 && v2.bout.local_number <= 255 && v2.bout.flags <= 31 && v2.bout.period <= 9 && v2.bout.mat_id <= 20 && v2.bout.match_id, "Invalid bout update");
    validateBoutLog(v2.eventlog_words);
  } else if (topic === "bracket-state") {
    const v2 = value;
    identity(v2.tournament_id, v2.bracket_id, v2.revision, tournament, bracket, true);
    validateState(v2);
  } else if (topic === "bracket-eventlog") {
    const v2 = value;
    identity(v2.tournament_id, v2.bracket_id, v2.revision, tournament, bracket, true);
    unpackBracketEventlogs(wordsFromBytes(v2.eventlog_words), v2.bracket_index);
  } else {
    const v2 = value;
    identity(v2.tournament_id, v2.bracket_id, v2.revision, tournament, bracket, true);
    identity(v2.state.tournament_id, v2.state.bracket_id, v2.state.revision, v2.tournament_id, v2.bracket_id, true);
    check(v2.revision === v2.state.revision, "Full packet revision mismatch");
    validateState(v2.state);
    check(unpackBracketEventlogs(wordsFromBytes(v2.eventlog_words), v2.state.bracket_index).length === v2.state.bouts.length, "Full packet bout count mismatch");
  }
  return value;
}
function encodeBracketBody(topic, value) {
  const encoder = codecs[topic][0];
  const bytes = encoder(value);
  decodeBracketBody(topic, bytes);
  return bytes;
}
function verifyBracketPacket(topic, bytes, key, tournament, bracket = "") {
  const { body, signature } = decodeSignedPacket(bytes);
  check(signature.length === 64 && verifyDomainBytes(bracketDomain(topic), body, key, signature), "Invalid binary signature");
  const value = decodeBracketBody(topic, body, tournament, bracket);
  if (topic === "tournament-summary") check(bytesEqual(value.authority_public_key, key), "Summary key differs from pinned authority");
  return value;
}
function bracketPacketScope(topic, packet2) {
  if (!BRACKET_TOPICS.includes(topic)) return topic;
  const value = decodeBracketBody(topic, decodeSignedPacket(packet2).body);
  if (topic === "mat-update") return `${topic}:${value.mat_id}`;
  if (topic === "bout-update") {
    const v2 = value;
    return `${topic}:${v2.bracket_id}:${v2.bout.local_number}`;
  }
  if ("bracket_id" in value) return `${topic}:${value.bracket_id}`;
  return topic;
}
class BracketReplica {
  constructor(tournamentId, publisherHex) {
    this.tournamentId = tournamentId;
    this.publisherHex = publisherHex;
  }
  tournamentId;
  publisherHex;
  summary;
  brackets = /* @__PURE__ */ new Map();
  eventlogs = /* @__PURE__ */ new Map();
  mats = /* @__PURE__ */ new Map();
  receivedAtMs = 0;
  heads = /* @__PURE__ */ new Map();
  apply(topic, bytes) {
    const value = verifyBracketPacket(topic, bytes, fromHex(this.publisherHex), this.tournamentId);
    const scope = bracketPacketScope(topic, bytes), digest = sha256(encodeBracketBody(topic, value));
    const revision = value.revision, head = this.heads.get(scope);
    if (head && revision < head.revision) return false;
    if (head && revision === head.revision) {
      if (!bytesEqual(digest, head.digest)) throw new Error("Conflicting signed state at the same revision");
      return false;
    }
    if (topic === "tournament-summary") {
      this.summary = value;
      for (const [id, state] of this.brackets) {
        const entry = this.summary.brackets.find((b2) => b2.bracket_id === id);
        if (!entry || entry.bracket_index !== state.bracket_index) {
          this.brackets.delete(id);
          this.eventlogs.delete(id);
        }
      }
    } else if (topic === "mat-board") {
      for (const m2 of value.mats) {
        const current = this.mats.get(m2.mat_id);
        if (!current || m2.revision >= current.revision) this.mats.set(m2.mat_id, m2);
      }
      for (const [id, m2] of this.mats) if (m2.revision <= revision && !value.mats.some((item) => item.mat_id === id)) this.mats.delete(id);
    } else if (topic === "mat-update") {
      const m2 = value, current = this.mats.get(m2.mat_id);
      if (current && current.revision > revision) return false;
      this.mats.set(m2.mat_id, m2);
    } else if (topic === "bout-update") {
      const v2 = value, state = this.brackets.get(v2.bracket_id);
      if (!state || state.bracket_index !== v2.bracket_index) throw new Error("Full bracket required before bout delta");
      if (revision < state.revision) return false;
      const old = state.bouts.find((b2) => b2.local_number === v2.bout.local_number);
      if (!old || old.match_id !== v2.bout.match_id) throw new Error("Bracket dictionary changed; full bracket required");
      const slots = /* @__PURE__ */ new Set([0, ...state.athletes.map((a2) => a2.slot)]);
      if (![v2.bout.red_slot, v2.bout.green_slot, v2.bout.winner_slot, v2.bout.loser_slot].every((slot) => slots.has(slot))) throw new Error("Unknown athlete slot in delta");
      this.brackets.set(v2.bracket_id, { ...state, bouts: state.bouts.map((b2) => b2.local_number === v2.bout.local_number ? v2.bout : b2) });
    } else if (topic === "bracket-eventlog") {
      const v2 = value;
      if ((this.brackets.get(v2.bracket_id)?.revision ?? 0) > revision) return false;
      this.eventlogs.set(v2.bracket_id, unpackBracketEventlogs(wordsFromBytes(v2.eventlog_words), v2.bracket_index));
    } else {
      const v2 = topic === "bracket-full" ? value.state : value;
      if ((this.brackets.get(v2.bracket_id)?.revision ?? 0) > revision) return false;
      const entry = this.summary?.brackets.find((b2) => b2.bracket_id === v2.bracket_id);
      if (entry && (entry.bracket_index !== v2.bracket_index || entry.revision === revision && !bytesEqual(entry.state_sha256, sha256(encodeBracketState(v2))))) throw new Error("Bracket directory hash/identity mismatch");
      const current = this.brackets.get(v2.bracket_id);
      const bouts = v2.bouts.map((b2) => {
        const newer = this.heads.get(`bout-update:${v2.bracket_id}:${b2.local_number}`);
        return newer && newer.revision > revision ? current?.bouts.find((old) => old.local_number === b2.local_number) ?? b2 : b2;
      });
      this.brackets.set(v2.bracket_id, { ...v2, bouts });
      if (topic === "bracket-full") this.eventlogs.set(v2.bracket_id, unpackBracketEventlogs(wordsFromBytes(value.eventlog_words), v2.bracket_index));
    }
    this.heads.set(scope, { revision, digest });
    this.receivedAtMs = Date.now();
    return true;
  }
}
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p2) => Promise.resolve(p2).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(deps.map((dep) => {
      dep = assetsURL(dep, importerUrl);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (!!importerUrl) for (let i$12 = links.length - 1; i$12 >= 0; i$12--) {
        const link$1 = links[i$12];
        if (link$1.href === dep && (!isCss || link$1.rel === "stylesheet")) return;
      }
      else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$12 = new Event("vite:preloadError", { cancelable: true });
    e$12.payload = err$2;
    window.dispatchEvent(e$12);
    if (!e$12.defaultPrevented) throw err$2;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const MAX_RELAY_CHILDREN = 10;
const MAX_TREE_HOPS = 6;
const MAX_FRAME_BYTES = 16384;
const FRAME_PAYLOAD_BYTES = MAX_FRAME_BYTES - 256;
const MAX_TOURNAMENT_MATS = 20;
const MAX_MAT_ROOM_PEERS = 4;
const MAX_CONTROL_OFFICIALS_PEERS = 12;
const MAX_SUBTREE_ROOM_PEERS = 11;
const CONTROL_OFFICIALS_ROOM_ID = "control:officials";
const TRYSTERO_ACTION_SIG = "om-sig";
const TRYSTERO_ACTION_RPC = "om-rpc";
const LIVE_BADGE_EXPIRY_MS = 5e3;
const STALE_FEED_BANNER_THRESHOLD_MS = 6e3;
const PeerRole = {
  AuthoritySource: 1,
  SuperSeedRelay: 2,
  PromotedRelay: 3,
  LeafSpectator: 4
};
function isRelayRole(role) {
  return role === PeerRole.AuthoritySource || role === PeerRole.SuperSeedRelay || role === PeerRole.PromotedRelay;
}
function normalizeTopics(topics) {
  const out = [];
  for (const t2 of topics) {
    if (!t2) continue;
    if (!out.includes(t2)) {
      out.push(t2);
    }
  }
  return out;
}
function topicListContains(topics, target) {
  return topics.some((t2) => t2 === target || t2 === "*");
}
class OverlayTreeManager {
  topologyRevision = 1;
  peersMap = /* @__PURE__ */ new Map();
  registerSuperSeed(peerId, uplinkKbps = 5e4) {
    if (!peerId) return;
    const node = {
      peer_id: peerId,
      role: PeerRole.SuperSeedRelay,
      capabilities: {
        plugged_into_power: true,
        battery_percent: 100,
        page_foreground_visible: true,
        stable_uptime_ms: 6e4,
        uplink_kbps: uplinkKbps,
        rtt_ms: 1,
        packet_loss_bps: 0,
        nat_accepts_inbound: true
      },
      primary_parent_id: "",
      backup_parent_id: "",
      children_ids: [],
      ancestry_path: [],
      subscribed_topics: ["*"],
      topology_revision: ++this.topologyRevision,
      hop_depth: 1,
      online: true
    };
    this.peersMap.set(peerId, node);
    for (const [id, existing] of this.peersMap.entries()) {
      if (!existing.online || !existing.primary_parent_id) continue;
      if (!existing.backup_parent_id) {
        const backup = this.selectBestParent(id, existing.primary_parent_id);
        if (backup) {
          existing.backup_parent_id = backup;
        }
      }
    }
  }
  static qualifiesForRelayPromotion(metrics) {
    return (metrics.plugged_into_power || metrics.battery_percent >= 50) && metrics.page_foreground_visible && metrics.stable_uptime_ms >= 3e4 && metrics.uplink_kbps >= 1500 && metrics.rtt_ms <= 80 && metrics.packet_loss_bps <= 200 && metrics.nat_accepts_inbound;
  }
  /**
   * Joins strictly as a leaf first; promotes only if qualified (REQ-NET-02, REQ-NET-03).
   */
  joinPeer(peerId, capabilities, initialTopics, preferredParentId = "") {
    if (!peerId) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "peer_id must not be empty"
      );
    }
    const existing = this.peersMap.get(peerId);
    if (existing && existing.online) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        `peer_id ${peerId} is already online in overlay tree`
      );
    }
    let primaryParent = null;
    if (preferredParentId) {
      const pref = this.peersMap.get(preferredParentId);
      if (pref && pref.online && isRelayRole(pref.role) && pref.children_ids.length < MAX_RELAY_CHILDREN && pref.hop_depth > 0 && pref.hop_depth + 1 <= MAX_TREE_HOPS && !pref.ancestry_path.includes(peerId)) {
        primaryParent = preferredParentId;
      }
    }
    if (!primaryParent) {
      primaryParent = this.selectBestParent(peerId, "");
    }
    if (!primaryParent) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        "No eligible parent relay with available capacity and hop budget"
      );
    }
    const backupParent = this.selectBestParent(peerId, primaryParent) ?? "";
    const parentNode = this.peersMap.get(primaryParent);
    const node = {
      peer_id: peerId,
      role: PeerRole.LeafSpectator,
      // Strictly leaf first (REQ-NET-02)
      capabilities: { ...capabilities },
      primary_parent_id: primaryParent,
      backup_parent_id: backupParent,
      children_ids: [],
      ancestry_path: [...parentNode.ancestry_path, parentNode.peer_id],
      subscribed_topics: normalizeTopics(initialTopics),
      topology_revision: ++this.topologyRevision,
      hop_depth: parentNode.hop_depth + 1,
      online: true
    };
    if (!parentNode.children_ids.includes(peerId)) {
      parentNode.children_ids.push(peerId);
    }
    parentNode.topology_revision = this.topologyRevision;
    this.peersMap.set(peerId, node);
    return { ...node, children_ids: [...node.children_ids], ancestry_path: [...node.ancestry_path] };
  }
  promoteIfQualified(peerId) {
    const node = this.peersMap.get(peerId);
    if (!node || !node.online) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        `Peer ${peerId} not found or offline`
      );
    }
    if (isRelayRole(node.role)) {
      return true;
    }
    if (node.hop_depth >= MAX_TREE_HOPS || !OverlayTreeManager.qualifiesForRelayPromotion(node.capabilities)) {
      return false;
    }
    node.role = PeerRole.PromotedRelay;
    node.topology_revision = ++this.topologyRevision;
    for (const [id, peer] of this.peersMap.entries()) {
      if (!peer.online || !peer.primary_parent_id) continue;
      if (!peer.backup_parent_id) {
        const backup = this.selectBestParent(id, peer.primary_parent_id);
        if (backup) {
          peer.backup_parent_id = backup;
        }
      }
    }
    return true;
  }
  updateTopicSubscriptions(peerId, topics) {
    const node = this.peersMap.get(peerId);
    if (!node || !node.online) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        `Peer ${peerId} not found or offline`
      );
    }
    node.subscribed_topics = normalizeTopics(topics);
    return true;
  }
  /**
   * Graceful departure with PEER_DEPARTING backup handoff (REQ-NET-06, REQ-NET-09).
   */
  departPeerGracefully(peerId, currentStreamSeq) {
    const departing = this.peersMap.get(peerId);
    if (!departing || !departing.online) {
      return [];
    }
    departing.online = false;
    departing.topology_revision = ++this.topologyRevision;
    if (departing.primary_parent_id) {
      const parent = this.peersMap.get(departing.primary_parent_id);
      if (parent) {
        parent.children_ids = parent.children_ids.filter((id) => id !== peerId);
      }
    }
    departing.primary_parent_id = "";
    departing.backup_parent_id = "";
    const orphanedChildren = [...departing.children_ids];
    departing.children_ids = [];
    if (departing.role === PeerRole.LeafSpectator && orphanedChildren.length === 0) {
      return [];
    }
    const events = [];
    for (const childId of orphanedChildren) {
      const ev = this.reparentOrphanedChild(childId, peerId, currentStreamSeq, 0, true);
      if (ev) {
        events.push(ev);
      }
    }
    this.refreshBackupParentsAfterDeparture();
    return events;
  }
  /**
   * Abrupt parent drop with bounded <250ms jittered backup activation (REQ-NET-04, REQ-NET-07).
   */
  handleAbruptParentDrop(droppedPeerId, currentStreamSeq, deterministicSeed = 42) {
    const dropped = this.peersMap.get(droppedPeerId);
    if (!dropped || !dropped.online) {
      return [];
    }
    dropped.online = false;
    dropped.topology_revision = ++this.topologyRevision;
    if (dropped.primary_parent_id) {
      const parent = this.peersMap.get(dropped.primary_parent_id);
      if (parent) {
        parent.children_ids = parent.children_ids.filter((id) => id !== droppedPeerId);
      }
    }
    dropped.primary_parent_id = "";
    dropped.backup_parent_id = "";
    const orphanedChildren = [...dropped.children_ids];
    dropped.children_ids = [];
    if (dropped.role === PeerRole.LeafSpectator && orphanedChildren.length === 0) {
      return [];
    }
    const events = [];
    for (const childId of orphanedChildren) {
      let hash = BigInt(deterministicSeed) ^ 0x9e3779b97f4a7c15n;
      for (let i2 = 0; i2 < childId.length; i2++) {
        hash ^= BigInt(childId.charCodeAt(i2));
        hash = hash * 1099511628211n & 0xffffffffffffffffn;
      }
      const jitterMs = 10 + Number(hash % 231n);
      const ev = this.reparentOrphanedChild(
        childId,
        droppedPeerId,
        currentStreamSeq,
        jitterMs,
        false
      );
      if (ev) {
        events.push(ev);
      }
    }
    this.refreshBackupParentsAfterDeparture();
    return events;
  }
  computeTopicFanoutRecipients(senderPeerId, topic) {
    if (!topic) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "topic must not be empty");
    }
    const sender = this.peersMap.get(senderPeerId);
    if (!sender || !sender.online) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        `Sender peer ${senderPeerId} not found or offline`
      );
    }
    const recipients = [];
    for (const childId of sender.children_ids) {
      if (recipients.length >= MAX_RELAY_CHILDREN) break;
      const visited = /* @__PURE__ */ new Set([senderPeerId]);
      if (this.subtreeSubscribesToTopic(childId, topic, visited)) {
        recipients.push(childId);
      }
    }
    return recipients;
  }
  verifyLoopFreeInvariants() {
    for (const [id, peer] of this.peersMap.entries()) {
      if (peer.children_ids.length > MAX_RELAY_CHILDREN) {
        return false;
      }
      if (!peer.online) continue;
      if (peer.hop_depth === 0 || peer.hop_depth > MAX_TREE_HOPS) {
        return false;
      }
      const seenAncestors = /* @__PURE__ */ new Set();
      for (const ancId of peer.ancestry_path) {
        if (ancId === id || seenAncestors.has(ancId)) {
          return false;
        }
        seenAncestors.add(ancId);
      }
      const reverseChain = [];
      const chainVisited = /* @__PURE__ */ new Set([id]);
      let cursor = peer.primary_parent_id;
      while (cursor) {
        if (chainVisited.has(cursor)) {
          return false;
        }
        chainVisited.add(cursor);
        const parent = this.peersMap.get(cursor);
        if (!parent || !parent.online) {
          return false;
        }
        reverseChain.push(cursor);
        cursor = parent.primary_parent_id;
      }
      reverseChain.reverse();
      if (reverseChain.length !== peer.ancestry_path.length) {
        return false;
      }
      for (let i2 = 0; i2 < reverseChain.length; i2++) {
        if (reverseChain[i2] !== peer.ancestry_path[i2]) {
          return false;
        }
      }
      if (peer.hop_depth !== reverseChain.length + 1) {
        return false;
      }
    }
    return true;
  }
  peers() {
    return this.peersMap;
  }
  reparentOrphanedChild(childId, oldParentId, currentStreamSeq, jitterMs, isGraceful) {
    const child = this.peersMap.get(childId);
    if (!child || !child.online) return null;
    let newParentId = "";
    let promotedBackup = false;
    const selected = this.selectBestParent(childId, oldParentId);
    if (selected) {
      newParentId = selected;
      promotedBackup = Boolean(
        child.backup_parent_id && newParentId === child.backup_parent_id
      );
    }
    if (!newParentId) {
      const disconnected = [childId];
      while (disconnected.length > 0) {
        const nextId = disconnected.pop();
        const node = this.peersMap.get(nextId);
        if (!node) continue;
        disconnected.push(...node.children_ids);
        node.online = false;
        node.primary_parent_id = "";
        node.backup_parent_id = "";
        node.ancestry_path = [];
        node.children_ids = [];
        node.hop_depth = 0;
        node.topology_revision = ++this.topologyRevision;
      }
      return null;
    }
    const newParent = this.peersMap.get(newParentId);
    if (!newParent.children_ids.includes(childId)) {
      newParent.children_ids.push(childId);
    }
    child.primary_parent_id = newParentId;
    this.recomputeSubtreeAncestry(
      childId,
      ++this.topologyRevision,
      /* @__PURE__ */ new Set()
    );
    newParent.topology_revision = this.topologyRevision;
    child.backup_parent_id = this.selectBestParent(childId, newParentId) ?? "";
    return {
      child_peer_id: childId,
      old_parent_id: oldParentId,
      new_parent_id: newParentId,
      resume_from_sequence: currentStreamSeq,
      reconnect_jitter_ms: isGraceful ? 0 : jitterMs,
      promoted_backup: promotedBackup
    };
  }
  refreshBackupParentsAfterDeparture() {
    for (const [id, peer] of this.peersMap.entries()) {
      if (!peer.online || !peer.primary_parent_id) continue;
      peer.backup_parent_id = this.selectBestParent(id, peer.primary_parent_id) ?? "";
    }
  }
  selectBestParent(candidateId, excludePeerId) {
    const candidateSubtreeDepth = this.maxRelativeSubtreeDepth(
      candidateId,
      /* @__PURE__ */ new Set()
    );
    let best = null;
    for (const [id, peer] of this.peersMap.entries()) {
      if (!peer.online) continue;
      if (id === candidateId || id === excludePeerId) continue;
      if (!isRelayRole(peer.role)) continue;
      if (peer.children_ids.length >= MAX_RELAY_CHILDREN) continue;
      if (peer.hop_depth === 0 || peer.hop_depth + 1 + candidateSubtreeDepth > MAX_TREE_HOPS) {
        continue;
      }
      let ancestryValid = true;
      for (const ancId of peer.ancestry_path) {
        if (ancId === candidateId || ancId === excludePeerId) {
          ancestryValid = false;
          break;
        }
        const anc = this.peersMap.get(ancId);
        if (!anc || !anc.online) {
          ancestryValid = false;
          break;
        }
      }
      if (!ancestryValid) continue;
      if (!best) {
        best = peer;
        continue;
      }
      if (peer.hop_depth < best.hop_depth || peer.hop_depth === best.hop_depth && peer.capabilities.rtt_ms < best.capabilities.rtt_ms || peer.hop_depth === best.hop_depth && peer.capabilities.rtt_ms === best.capabilities.rtt_ms && peer.children_ids.length < best.children_ids.length || peer.hop_depth === best.hop_depth && peer.capabilities.rtt_ms === best.capabilities.rtt_ms && peer.children_ids.length === best.children_ids.length && peer.peer_id < best.peer_id) {
        best = peer;
      }
    }
    return best ? best.peer_id : null;
  }
  maxRelativeSubtreeDepth(rootId, visited) {
    const node = this.peersMap.get(rootId);
    if (!node || !node.online || visited.has(rootId)) return 0;
    visited.add(rootId);
    let best = 0;
    for (const childId of node.children_ids) {
      const child = this.peersMap.get(childId);
      if (child && child.online) {
        const d2 = 1 + this.maxRelativeSubtreeDepth(childId, visited);
        if (d2 > best) best = d2;
      }
    }
    return best;
  }
  recomputeSubtreeAncestry(nodeId, topologyRev, visited) {
    const node = this.peersMap.get(nodeId);
    if (!node || !node.online || visited.has(nodeId)) return;
    visited.add(nodeId);
    if (node.primary_parent_id) {
      const parent = this.peersMap.get(node.primary_parent_id);
      if (parent && parent.online) {
        node.ancestry_path = [...parent.ancestry_path, parent.peer_id];
        node.hop_depth = parent.hop_depth + 1;
      }
    }
    node.topology_revision = topologyRev;
    for (const childId of node.children_ids) {
      this.recomputeSubtreeAncestry(childId, topologyRev, visited);
    }
  }
  subtreeSubscribesToTopic(nodeId, topic, visited) {
    const node = this.peersMap.get(nodeId);
    if (!node || !node.online || visited.has(nodeId)) return false;
    visited.add(nodeId);
    if (topicListContains(node.subscribed_topics, topic)) return true;
    for (const childId of node.children_ids) {
      if (this.subtreeSubscribesToTopic(childId, topic, visited)) return true;
    }
    return false;
  }
}
const ChannelClass = {
  OfficialEventsOrderedReliable: 1,
  CurrentStateUnorderedNewest: 2,
  BulkChunksBackground: 3
};
class TransportMultiplexer {
  nextMessageId = 1;
  highWatermarkBytes;
  queuedLiveBytesCount = 0;
  bulkPaused = false;
  officialQueue = [];
  currentStateQueue = [];
  bulkQueue = [];
  reassembly = /* @__PURE__ */ new Map();
  constructor(highWatermarkBytes = 65536) {
    this.highWatermarkBytes = highWatermarkBytes;
  }
  enqueueMessage(channel, topic, payload, stateScope = topic) {
    if (!topic) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "topic must not be empty");
    }
    const rawFragments = payload.byteLength === 0 ? 1 : Math.ceil(payload.byteLength / FRAME_PAYLOAD_BYTES);
    if (rawFragments > 65535) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        "Message exceeds maximum fragment count (65535)"
      );
    }
    const fragmentCount = rawFragments;
    const messageId = this.nextMessageId++;
    const frames = [];
    for (let i2 = 0; i2 < fragmentCount; i2++) {
      const offset = i2 * FRAME_PAYLOAD_BYTES;
      const len = payload.byteLength === 0 ? 0 : Math.min(FRAME_PAYLOAD_BYTES, payload.byteLength - offset);
      frames.push({
        channel,
        message_id: messageId,
        fragment_index: i2,
        fragment_count: fragmentCount,
        topic,
        stateScope,
        payload: len > 0 ? payload.slice(offset, offset + len) : new Uint8Array(0)
      });
    }
    if (channel === ChannelClass.OfficialEventsOrderedReliable) {
      this.officialQueue.push(...frames);
    } else if (channel === ChannelClass.CurrentStateUnorderedNewest) {
      const firstForTopic = this.currentStateQueue.find((f2) => (f2.stateScope ?? f2.topic) === stateScope);
      const inFlightId = firstForTopic && firstForTopic.fragment_index > 0 ? firstForTopic.message_id : void 0;
      this.currentStateQueue = this.currentStateQueue.filter(
        (f2) => (f2.stateScope ?? f2.topic) !== stateScope || inFlightId !== void 0 && f2.message_id === inFlightId
      );
      this.currentStateQueue.push(...frames);
    } else {
      this.bulkQueue.push(...frames);
    }
    this.recomputeLiveWatermark();
    return frames;
  }
  /**
   * Dequeues frames prioritizing OfficialEvents > CurrentState > BulkChunks,
   * and pauses BulkChunks whenever live channels exceed highWatermarkBytes (REQ-WIRE-02, REQ-WIRE-06, T09).
   */
  drainNextFrames(maxBytesBudget) {
    const out = [];
    if (maxBytesBudget <= 0) return out;
    let usedBytes = 0;
    const drainFromQueue = (queue, isLiveQueue) => {
      let removeCount = 0;
      for (let i2 = 0; i2 < queue.length; i2++) {
        const frame = queue[i2];
        const frameBytes = frame.payload.byteLength;
        if (usedBytes + frameBytes > maxBytesBudget) {
          break;
        }
        usedBytes += frameBytes;
        if (isLiveQueue) {
          this.queuedLiveBytesCount = Math.max(
            0,
            this.queuedLiveBytesCount - frameBytes
          );
        }
        out.push(frame);
        removeCount++;
      }
      if (removeCount > 0) {
        queue.splice(0, removeCount);
      }
    };
    drainFromQueue(this.officialQueue, true);
    if (this.officialQueue.length === 0) {
      drainFromQueue(this.currentStateQueue, true);
    }
    this.bulkPaused = this.queuedLiveBytesCount > this.highWatermarkBytes;
    if (!this.bulkPaused && this.officialQueue.length === 0 && this.currentStateQueue.length === 0) {
      drainFromQueue(this.bulkQueue, false);
    }
    return out;
  }
  reassembleFrame(frame) {
    if (![frame.message_id, frame.fragment_index, frame.fragment_count].every(Number.isSafeInteger) || frame.message_id < 1 || frame.fragment_index < 0 || frame.fragment_count < 1 || frame.fragment_count > 261 || frame.fragment_index >= frame.fragment_count) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "Invalid fragment_index or fragment_count"
      );
    }
    if (frame.payload.byteLength > MAX_FRAME_BYTES) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        "WireFrame payload exceeds MAX_FRAME_BYTES (16 KiB)"
      );
    }
    if (frame.fragment_count === 1) {
      return new Uint8Array(frame.payload);
    }
    for (const [id, old] of this.reassembly) if (Date.now() - old.createdAt > 1e4) this.reassembly.delete(id);
    let buf = this.reassembly.get(frame.message_id);
    if (!buf) {
      if (frame.channel === ChannelClass.CurrentStateUnorderedNewest) {
        for (const [id, existing] of this.reassembly) {
          if (existing.channel === ChannelClass.CurrentStateUnorderedNewest && existing.topic === frame.topic && id < frame.message_id) {
            this.reassembly.delete(id);
          }
        }
      }
      if (this.reassembly.size >= 32) {
        const oldestKey = this.reassembly.keys().next().value;
        if (oldestKey !== void 0) this.reassembly.delete(oldestKey);
      }
      buf = { totalFragments: frame.fragment_count, topic: frame.topic, channel: frame.channel, createdAt: Date.now(), parts: /* @__PURE__ */ new Map() };
      this.reassembly.set(frame.message_id, buf);
    } else if (buf.totalFragments !== frame.fragment_count || buf.topic !== frame.topic || buf.channel !== frame.channel) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "Mismatched fragment_count for message_id"
      );
    }
    buf.parts.set(frame.fragment_index, new Uint8Array(frame.payload));
    if (buf.parts.size < buf.totalFragments) {
      return null;
    }
    let totalSize = 0;
    for (let i2 = 0; i2 < buf.totalFragments; i2++) {
      const part = buf.parts.get(i2);
      if (!part) return null;
      totalSize += part.byteLength;
    }
    const assembled = new Uint8Array(totalSize);
    let offset = 0;
    for (let i2 = 0; i2 < buf.totalFragments; i2++) {
      const part = buf.parts.get(i2);
      assembled.set(part, offset);
      offset += part.byteLength;
    }
    this.reassembly.delete(frame.message_id);
    return assembled;
  }
  bulkChannelPaused() {
    return this.bulkPaused;
  }
  queuedPayloadBytes() {
    return [...this.officialQueue, ...this.currentStateQueue, ...this.bulkQueue].reduce((n3, frame) => n3 + frame.payload.length, 0);
  }
  queuedLiveBytes() {
    return this.queuedLiveBytesCount;
  }
  recomputeLiveWatermark() {
    let liveBytes = 0;
    for (const f2 of this.officialQueue) {
      liveBytes += f2.payload.byteLength;
    }
    for (const f2 of this.currentStateQueue) {
      liveBytes += f2.payload.byteLength;
    }
    this.queuedLiveBytesCount = liveBytes;
    this.bulkPaused = this.queuedLiveBytesCount > this.highWatermarkBytes;
  }
}
class ChunkSwarmClient {
  manifest = null;
  bitmap = [];
  chunks = [];
  acceptSignedManifest(manifest, publisherPubkey) {
    if (this.manifest && manifest.snapshot_epoch < this.manifest.snapshot_epoch) {
      throw new OpenMatProtocolError(
        ErrorCode.EpochFencedOldEvent,
        "Snapshot manifest epoch rollback rejected"
      );
    }
    verifySnapshotManifest(manifest, publisherPubkey);
    for (let i2 = 0; i2 < manifest.chunks.length; i2++) {
      if (manifest.chunks[i2].chunk_index !== i2) {
        throw new OpenMatProtocolError(
          ErrorCode.InvalidArgument,
          "Snapshot manifest chunk indices not contiguous"
        );
      }
    }
    this.manifest = manifest;
    this.bitmap = new Array(manifest.chunks.length).fill(false);
    this.chunks = new Array(manifest.chunks.length).fill(new Uint8Array(0));
    return true;
  }
  ingestChunk(chunkIndex, chunkBytes) {
    if (!this.manifest) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "Cannot ingest chunk before accepting manifest"
      );
    }
    if (chunkIndex < 0 || chunkIndex >= this.manifest.chunks.length) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        "chunk_index out of bounds"
      );
    }
    const desc = this.manifest.chunks[chunkIndex];
    const computedHash = sha256(chunkBytes);
    if (!bytesEqual(computedHash, desc.sha256_hash)) {
      throw new OpenMatProtocolError(
        ErrorCode.HashChainMismatch,
        `Chunk #${chunkIndex} SHA-256 mismatch against manifest`
      );
    }
    if (desc.byte_length !== 0 && chunkBytes.byteLength !== desc.byte_length) {
      throw new OpenMatProtocolError(
        ErrorCode.HashChainMismatch,
        `Chunk #${chunkIndex} byte_length mismatch against manifest`
      );
    }
    this.chunks[chunkIndex] = new Uint8Array(chunkBytes);
    this.bitmap[chunkIndex] = true;
    return true;
  }
  missingChunks() {
    const missing = [];
    for (let i2 = 0; i2 < this.bitmap.length; i2++) {
      if (!this.bitmap[i2]) {
        missing.push(i2);
      }
    }
    return missing;
  }
  availabilityBitmap() {
    return this.bitmap;
  }
  isComplete() {
    if (!this.manifest) return false;
    return this.bitmap.every(Boolean);
  }
  assembleVerifiedSnapshot() {
    if (!this.manifest || !this.isComplete()) {
      throw new OpenMatProtocolError(
        ErrorCode.SequenceGap,
        "Cannot assemble snapshot while chunks are missing"
      );
    }
    let totalLen = 0;
    for (const c2 of this.chunks) {
      totalLen += c2.byteLength;
    }
    const snapshot = new Uint8Array(totalLen);
    let offset = 0;
    for (const c2 of this.chunks) {
      snapshot.set(c2, offset);
      offset += c2.byteLength;
    }
    if (this.manifest.total_bytes !== 0 && snapshot.byteLength !== this.manifest.total_bytes) {
      throw new OpenMatProtocolError(
        ErrorCode.HashChainMismatch,
        "Assembled snapshot total_bytes mismatch"
      );
    }
    const fullHash = sha256(snapshot);
    if (!bytesEqual(fullHash, this.manifest.full_file_sha256)) {
      throw new OpenMatProtocolError(
        ErrorCode.HashChainMismatch,
        "Assembled snapshot full-file SHA-256 mismatch"
      );
    }
    return snapshot;
  }
}
class LiveFreshnessMonitor {
  streams = /* @__PURE__ */ new Map();
  /**
   * Accepts a signed SourceHeartbeat, verifying signature and monotonic counter (REQ-LIVE-02).
   * Replayed heartbeats throw ReplayHeartbeatRejected and never reset freshness!
   */
  recordVerifiedSourceHeartbeat(heartbeat, sourcePubkey, receivedMonotonicMs, receivedWallMs = receivedMonotonicMs) {
    const existing = this.streams.get(heartbeat.stream_id);
    const lastCounter = existing?.lastHeartbeatCounter ?? 0;
    verifyHeartbeat(heartbeat, sourcePubkey, lastCounter);
    this.streams.set(heartbeat.stream_id, {
      lastConfirmedSequence: Math.max(
        existing?.lastConfirmedSequence ?? 0,
        heartbeat.head_sequence
      ),
      lastHeartbeatCounter: heartbeat.heartbeat_counter,
      lastSourceEvidenceMonotonicMs: receivedMonotonicMs,
      lastConfirmedWallMs: receivedWallMs
    });
  }
  /**
   * Records fresh signed sporting event evidence from the source authority.
   */
  recordVerifiedSourceEvent(event, receivedMonotonicMs, receivedWallMs = event.audit_time_ms || receivedMonotonicMs) {
    const existing = this.streams.get(event.stream_id);
    if (existing && event.sequence <= existing.lastConfirmedSequence) {
      return;
    }
    this.streams.set(event.stream_id, {
      lastConfirmedSequence: event.sequence,
      lastHeartbeatCounter: existing?.lastHeartbeatCounter ?? 0,
      lastSourceEvidenceMonotonicMs: receivedMonotonicMs,
      lastConfirmedWallMs: receivedWallMs
    });
  }
  /**
   * Relay keepalives are transport-level only and NEVER advance source freshness (REQ-LIVE-03).
   */
  recordRelayKeepaliveOnly(_streamId, _receivedMonotonicMs) {
  }
  evaluateStreamFreshness(streamId, currentMonotonicMs) {
    const rec = this.streams.get(streamId);
    if (!rec) {
      return {
        streamId,
        lastConfirmedSequence: 0,
        lastHeartbeatCounter: 0,
        lastSourceEvidenceMonotonicMs: 0,
        lastConfirmedWallTimestampIso: "NEVER",
        ageMs: Number.POSITIVE_INFINITY,
        liveBadgeActive: false,
        isStaleFeed: true,
        suppressClockExtrapolation: true,
        staleBannerText: "STALE FEED — LAST CONFIRMED AT NEVER (SEQ #0)"
      };
    }
    const ageMs = Math.max(0, currentMonotonicMs - rec.lastSourceEvidenceMonotonicMs);
    const liveBadgeActive = ageMs <= LIVE_BADGE_EXPIRY_MS;
    const isStaleFeed = ageMs >= STALE_FEED_BANNER_THRESHOLD_MS;
    const isoTime = new Date(rec.lastConfirmedWallMs).toISOString();
    return {
      streamId,
      lastConfirmedSequence: rec.lastConfirmedSequence,
      lastHeartbeatCounter: rec.lastHeartbeatCounter,
      lastSourceEvidenceMonotonicMs: rec.lastSourceEvidenceMonotonicMs,
      lastConfirmedWallTimestampIso: isoTime,
      ageMs,
      liveBadgeActive,
      isStaleFeed,
      suppressClockExtrapolation: isStaleFeed || !liveBadgeActive,
      staleBannerText: isStaleFeed ? `STALE FEED — LAST CONFIRMED AT ${isoTime} (SEQ #${rec.lastConfirmedSequence})` : ""
    };
  }
  /**
   * Computes the displayed clock remaining ms, freezing extrapolation immediately when stale (REQ-CLK-05, T27).
   */
  computeDisplayedClockMs(streamId, anchorRemainingMs, anchorMonotonicMs, clockRunning, currentMonotonicMs) {
    const freshness = this.evaluateStreamFreshness(streamId, currentMonotonicMs);
    if (!clockRunning || freshness.suppressClockExtrapolation) {
      return {
        displayedRemainingMs: Math.max(0, anchorRemainingMs),
        extrapolated: false,
        isStale: freshness.isStaleFeed
      };
    }
    const elapsed = Math.max(0, currentMonotonicMs - anchorMonotonicMs);
    return {
      displayedRemainingMs: Math.max(0, anchorRemainingMs - elapsed),
      extrapolated: true,
      isStale: false
    };
  }
}
class ObservabilityCollector {
  connectedSamples = [];
  catchupSamples = [];
  bracketSamples = [];
  disconnectedPeers = 0;
  relayFailovers = 0;
  rejectedSignatures = 0;
  recordConnectedPropagationMs(latencyMs) {
    this.connectedSamples.push(latencyMs);
  }
  recordReconnectingCatchupMs(latencyMs) {
    this.catchupSamples.push(latencyMs);
  }
  recordBracketAcceptToRenderMs(latencyMs) {
    this.bracketSamples.push(latencyMs);
  }
  recordDisconnectedPeer() {
    this.disconnectedPeers++;
  }
  recordRelayFailover() {
    this.relayFailovers++;
  }
  recordRejectedSignature() {
    this.rejectedSignatures++;
  }
  snapshot() {
    return {
      connected_spectator_propagation: ObservabilityCollector.computePercentiles(
        this.connectedSamples
      ),
      reconnecting_catchup_cohort: ObservabilityCollector.computePercentiles(
        this.catchupSamples
      ),
      bracket_accept_to_render: ObservabilityCollector.computePercentiles(
        this.bracketSamples
      ),
      disconnected_peer_count: this.disconnectedPeers,
      relay_failover_count: this.relayFailovers,
      rejected_signature_count: this.rejectedSignatures
    };
  }
  static computePercentiles(values) {
    if (values.length === 0) {
      return { sample_count: 0, p50_ms: 0, p95_ms: 0, p99_ms: 0, max_ms: 0 };
    }
    const sorted = [...values].sort((a2, b2) => a2 - b2);
    const n3 = sorted.length;
    const pctAt = (pct) => {
      const rank = Math.floor((n3 * pct + 99) / 100);
      const idx = rank === 0 ? 0 : Math.min(n3 - 1, rank - 1);
      return sorted[idx];
    };
    return {
      sample_count: n3,
      p50_ms: pctAt(50),
      p95_ms: pctAt(95),
      p99_ms: pctAt(99),
      max_ms: sorted[n3 - 1]
    };
  }
}
const OfficialConsoleRole = {
  DirectorPrimary: 1,
  DirectorStandby: 2,
  BoutDispatchClerk: 3
};
const MatRoomMemberRole = {
  MatPrimaryScorekeeper: 1,
  MatBackupDisplay: 2,
  HeadTablePrimary: 3,
  HeadTableStandby: 4
};
class TwoPlaneVenueRoomRouter {
  configuredMats;
  controlOfficialsPeers = /* @__PURE__ */ new Map();
  matRooms = /* @__PURE__ */ new Map();
  subtreeRooms = /* @__PURE__ */ new Map();
  subtreePingRttMs = /* @__PURE__ */ new Map();
  primaryDirectorId = "";
  standbyDirectorId = "";
  activeDirectorId = "";
  constructor(configuredMats = MAX_TOURNAMENT_MATS) {
    this.configuredMats = Math.max(1, Math.min(MAX_TOURNAMENT_MATS, configuredMats));
  }
  clearMembership() {
    this.controlOfficialsPeers.clear();
    this.matRooms.clear();
    this.subtreeRooms.clear();
    this.subtreePingRttMs.clear();
    this.primaryDirectorId = "";
    this.standbyDirectorId = "";
    this.activeDirectorId = "";
  }
  static matRoomId(matId) {
    return `mat:${matId}`;
  }
  static subtreeRoomId(parentId) {
    return `subtree:${parentId}`;
  }
  static bracketSubtreeRoomId(bracketId) {
    if (!/^[A-Za-z0-9_-]{1,100}$/.test(bracketId)) throw new Error("Invalid bracket id");
    return `subtree:b:${bracketId}`;
  }
  joinControlOfficialsRoom(peerId, role) {
    if (!peerId) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "peer_id must not be empty"
      );
    }
    if (!this.controlOfficialsPeers.has(peerId) && this.controlOfficialsPeers.size >= MAX_CONTROL_OFFICIALS_PEERS) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        `control:officials room bounded to ${MAX_CONTROL_OFFICIALS_PEERS} official consoles`
      );
    }
    this.controlOfficialsPeers.set(peerId, role);
    if (role === OfficialConsoleRole.DirectorPrimary) {
      this.primaryDirectorId = peerId;
      if (!this.activeDirectorId) {
        this.activeDirectorId = peerId;
      }
    } else if (role === OfficialConsoleRole.DirectorStandby) {
      this.standbyDirectorId = peerId;
      if (!this.activeDirectorId) {
        this.activeDirectorId = peerId;
      }
    }
    return true;
  }
  joinMatRoom(matId, peerId, role) {
    if (matId < 1 || matId > this.configuredMats || matId > MAX_TOURNAMENT_MATS) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        `mat_id must be within 1..${this.configuredMats}`
      );
    }
    if (!peerId) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "peer_id must not be empty"
      );
    }
    if (role === MatRoomMemberRole.MatPrimaryScorekeeper || role === MatRoomMemberRole.MatBackupDisplay) {
      if (this.controlOfficialsPeers.has(peerId)) {
        throw new OpenMatProtocolError(
          ErrorCode.UnauthorizedScope,
          "Matside scorekeeper/display cannot join control:officials room"
        );
      }
      for (const [otherMatId, members2] of this.matRooms.entries()) {
        if (otherMatId !== matId && members2.has(peerId)) {
          throw new OpenMatProtocolError(
            ErrorCode.UnauthorizedScope,
            "Matside device cannot join multiple mat rooms"
          );
        }
      }
    }
    let members = this.matRooms.get(matId);
    if (!members) {
      members = /* @__PURE__ */ new Map();
      this.matRooms.set(matId, members);
    }
    if (!members.has(peerId) && members.size >= MAX_MAT_ROOM_PEERS) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        `mat:${matId} room bounded to ${MAX_MAT_ROOM_PEERS} peers (Primary, Backup/Display, Head Table Primary, Head Table Standby)`
      );
    }
    members.set(peerId, role);
    return true;
  }
  joinSubtreeRoom(parentId, peerId, pingRttMs = 1) {
    if (!parentId || !peerId) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "parent_id and peer_id must not be empty"
      );
    }
    const roomId = TwoPlaneVenueRoomRouter.subtreeRoomId(parentId);
    let members = this.subtreeRooms.get(roomId);
    if (!members) {
      members = [parentId];
      this.subtreeRooms.set(roomId, members);
    }
    if (members.includes(peerId)) {
      this.subtreePingRttMs.set(peerId, pingRttMs);
      return true;
    }
    if (members.length >= MAX_SUBTREE_ROOM_PEERS) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        `${roomId} room bounded to ${MAX_SUBTREE_ROOM_PEERS} peers (1 parent + 10 children)`
      );
    }
    members.push(peerId);
    this.subtreePingRttMs.set(peerId, pingRttMs);
    return true;
  }
  validateRoomDomainTraffic(roomId, domainPrefix) {
    if (roomId === CONTROL_OFFICIALS_ROOM_ID) {
      return true;
    }
    if (domainPrefix === DOMAIN_CONTROL) {
      throw new OpenMatProtocolError(
        ErrorCode.PrivacyViolation,
        "OpenMat:control:v1 traffic is restricted to control:officials room"
      );
    }
    if (roomId.startsWith("mat:")) {
      if (domainPrefix === DOMAIN_EVENT || domainPrefix === DOMAIN_CLOCK || domainPrefix === DOMAIN_HEARTBEAT || domainPrefix === DOMAIN_CERT) {
        return true;
      }
      throw new OpenMatProtocolError(
        ErrorCode.UnauthorizedScope,
        `Unsupported domain prefix ${domainPrefix} on ${roomId}`
      );
    }
    if (roomId.startsWith("subtree:")) {
      if (BRACKET_TOPICS.some((topic) => bracketDomain(topic) === domainPrefix) || domainPrefix === DOMAIN_EVENT || domainPrefix === DOMAIN_CLOCK || domainPrefix === DOMAIN_HEARTBEAT || domainPrefix === DOMAIN_MANIFEST) {
        return true;
      }
      throw new OpenMatProtocolError(
        ErrorCode.UnauthorizedScope,
        `Unsupported domain prefix ${domainPrefix} on ${roomId}`
      );
    }
    throw new OpenMatProtocolError(
      ErrorCode.InvalidArgument,
      `Unknown room_id prefix: ${roomId}`
    );
  }
  activateStandbyHeadTableFailover() {
    if (!this.standbyDirectorId) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "No standby head-table director registered in control:officials"
      );
    }
    this.activeDirectorId = this.standbyDirectorId;
    return this.activeDirectorId;
  }
  getMatRoomPeerIds(matId) {
    const m2 = this.matRooms.get(matId);
    return m2 ? Array.from(m2.keys()) : [];
  }
  getSubtreeRoomPeerIds(parentId) {
    const rid = TwoPlaneVenueRoomRouter.subtreeRoomId(parentId);
    return [...this.subtreeRooms.get(rid) ?? []];
  }
  computeAccountingSummary() {
    const controlOfficialCount = this.controlOfficialsPeers.size;
    const controlConns = controlOfficialCount > 1 ? controlOfficialCount * (controlOfficialCount - 1) : 0;
    const connsPerOfficialTablet = controlOfficialCount > 1 ? controlOfficialCount - 1 : 0;
    let totalMatRoomPeers = 0;
    let matRoomConns = 0;
    let uniqueMatDevices = 0;
    let maxMatPhoneConns = 0;
    let headTableMatConns = 0;
    for (const members of this.matRooms.values()) {
      const n3 = members.size;
      totalMatRoomPeers += n3;
      if (n3 > 1) {
        matRoomConns += n3 * (n3 - 1);
        maxMatPhoneConns = Math.max(maxMatPhoneConns, n3 - 1);
      }
      let nonHeadInRoom = 0;
      let headPresent = false;
      for (const role of members.values()) {
        if (role === MatRoomMemberRole.MatPrimaryScorekeeper || role === MatRoomMemberRole.MatBackupDisplay) {
          uniqueMatDevices++;
          nonHeadInRoom++;
        } else if (role === MatRoomMemberRole.HeadTablePrimary) {
          headPresent = true;
        }
      }
      if (headPresent) {
        headTableMatConns += nonHeadInRoom;
      }
    }
    const totalOfficiatingConns = controlConns + matRoomConns;
    const totalOfficiatingDevices = controlOfficialCount + uniqueMatDevices;
    const flatBaselineConns = totalOfficiatingDevices > 1 ? totalOfficiatingDevices * (totalOfficiatingDevices - 1) : 0;
    const reductionPct = flatBaselineConns > totalOfficiatingConns && flatBaselineConns > 0 ? Math.floor(
      (flatBaselineConns - totalOfficiatingConns) * 100 / flatBaselineConns
    ) : 0;
    const uniqueSubtreePeers = /* @__PURE__ */ new Set();
    for (const peers of this.subtreeRooms.values()) {
      for (const p2 of peers) {
        uniqueSubtreePeers.add(p2);
      }
    }
    return {
      configured_mats: this.configuredMats,
      control_officials_peers: controlOfficialCount,
      total_mat_room_peers: totalMatRoomPeers,
      total_subtree_rooms: this.subtreeRooms.size,
      total_subtree_peers: uniqueSubtreePeers.size,
      connections_per_mat_scorekeeper: maxMatPhoneConns,
      connections_per_official_tablet: connsPerOfficialTablet,
      connections_on_head_table_hub: connsPerOfficialTablet + headTableMatConns,
      total_officiating_connections: totalOfficiatingConns,
      flat_room_baseline_connections: flatBaselineConns,
      connection_reduction_percent: reductionPct,
      active_head_table_leader_id: this.activeDirectorId,
      trystero_actions: {
        signaling: TRYSTERO_ACTION_SIG,
        rpc: TRYSTERO_ACTION_RPC
      },
      multiplexer_channels: ["official-events", "current-state", "bulk-chunks"]
    };
  }
}
class OverlayMeshClient {
  liveRooms = /* @__PURE__ */ new Map();
  async joinLiveRoom(options) {
    this.liveRooms.get(options.roomId)?.stop();
    const { LiveVenueRoom } = await __vitePreload(async () => {
      const { LiveVenueRoom: LiveVenueRoom2 } = await import("./live-venue-transport-BSeI3tJ-.js");
      return { LiveVenueRoom: LiveVenueRoom2 };
    }, true ? [] : void 0, import.meta.url);
    const room = new LiveVenueRoom(options);
    this.liveRooms.set(options.roomId, room);
    await room.start();
    return room;
  }
  stopLiveRooms() {
    for (const room of this.liveRooms.values()) room.stop();
    this.liveRooms.clear();
  }
  peerId;
  tree;
  roomRouter;
  multiplexer;
  chunkSwarm;
  freshness;
  observability;
  constructor(options) {
    this.peerId = options.peerId;
    this.tree = options.tree ?? new OverlayTreeManager();
    this.roomRouter = options.roomRouter ?? new TwoPlaneVenueRoomRouter(options.configuredMats ?? MAX_TOURNAMENT_MATS);
    this.multiplexer = new TransportMultiplexer(options.highWatermarkBytes ?? 65536);
    this.chunkSwarm = new ChunkSwarmClient();
    this.freshness = new LiveFreshnessMonitor();
    this.observability = new ObservabilityCollector();
  }
}
const VENUE_PACKET_LIMIT = 4194304;
const MUX_CHANNELS = [
  { label: "official-events", id: 10, ordered: true },
  { label: "current-state", id: 11, ordered: false, maxRetransmits: 0 },
  { label: "bulk-chunks", id: 12, ordered: true }
];
function packet(bytes) {
  const value = decodeDeterministicCbor(bytes, { maxBytes: VENUE_PACKET_LIMIT });
  if (!value || typeof value !== "object" || Array.isArray(value) || value instanceof Uint8Array || value instanceof Map) throw new Error("Expected CBOR map");
  return value;
}
function encodePacket(value) {
  return encodeDeterministicCbor(value, { maxBytes: VENUE_PACKET_LIMIT });
}
function encodeVenueFrame(frame) {
  const bytes = encodePacket({ c: frame.channel, id: frame.message_id, fi: frame.fragment_index, fc: frame.fragment_count, t: frame.topic, p: frame.payload });
  if (bytes.length > MAX_FRAME_BYTES) throw new Error("Encoded venue frame exceeds 16 KiB");
  return bytes;
}
function decodeVenueFrame(bytes) {
  if (bytes.length > MAX_FRAME_BYTES) throw new Error("Encoded venue frame exceeds 16 KiB");
  const v2 = packet(bytes);
  if (![1, 2, 3].includes(Number(v2.c)) || ![v2.id, v2.fi, v2.fc].every((x2) => typeof x2 === "number" && Number.isSafeInteger(x2)) || Number(v2.id) < 1 || Number(v2.fi) < 0 || Number(v2.fc) < 1 || Number(v2.fc) > 261 || Number(v2.fi) >= Number(v2.fc) || typeof v2.t !== "string" || !v2.t || v2.t.length > 256 || !(v2.p instanceof Uint8Array) || v2.p.length > MAX_FRAME_BYTES) throw new Error("Invalid venue frame");
  return {
    channel: Number(v2.c),
    message_id: Number(v2.id),
    fragment_index: Number(v2.fi),
    fragment_count: Number(v2.fc),
    topic: v2.t,
    payload: v2.p
  };
}
function roomCapacity(roomId) {
  if (roomId === "control:officials") return 12;
  if (/^mat:([1-9]|1[0-9]|20)$/.test(roomId)) return 4;
  if (/^subtree:(?:b:)?[A-Za-z0-9_-]{1,100}$/.test(roomId)) return 11;
  throw new Error("Invalid venue room");
}
function validateVenueTopic(roomId, topic) {
  roomCapacity(roomId);
  const allowed = roomId === "control:officials" ? ["control-state", "public-projection"] : roomId.startsWith("mat:") ? ["signed-event", "clock", "heartbeat"] : ["public-projection", "snapshot-manifest", "snapshot-chunk", "game-tap", "game-state", "game-snapshot", ...BRACKET_TOPICS];
  if (!allowed.includes(topic)) throw new Error(`Topic ${topic} forbidden on ${roomId}`);
}
const GAME_APP = "openmat-tap-battle";
function verified(bytes, session, publicKeyHex) {
  const { signature, ...body } = packet(bytes);
  if (body.app !== GAME_APP || body.session !== session || !(signature instanceof Uint8Array) || !verifyDomainBytes(DOMAIN_CONTROL, encodePacket(body), fromHex(publicKeyHex), signature)) throw new Error("Invalid signed game message");
  return body;
}
const actionId = (bytes) => toHex(sha256(bytes));
const DEFAULT_PUBLIC_NOSTR_RELAYS = [
  "wss://relay.damus.io",
  "wss://nos.lol",
  "wss://relay.primal.net"
];
const DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL = "https://pureengineering.github.io/openmat";
function createSignedTournamentJoinPayload(input) {
  const issuedAtMs = input.issuedAtMs ?? Date.now();
  const canonical2 = encodeDeterministicCbor({
    issued_at_ms: issuedAtMs,
    publisher_pubkey_hex: input.publisherPubkeyHex.toLowerCase(),
    relay_origin: input.relayOrigin,
    rules_version: input.rulesVersion,
    tournament_id: input.tournamentId,
    tournament_name: input.tournamentName
  });
  const sig = signDomainBytes(DOMAIN_CONTROL, canonical2, input.rootPrivateKey);
  return {
    tournament_id: input.tournamentId,
    tournament_name: input.tournamentName,
    rules_version: input.rulesVersion,
    publisher_pubkey_hex: input.publisherPubkeyHex.toLowerCase(),
    relay_origin: input.relayOrigin,
    issued_at_ms: issuedAtMs,
    signature_hex: toHex(sig)
  };
}
function verifyTournamentJoinPayload(payload) {
  try {
    if (!/^[0-9a-fA-F]{64}$/.test(payload.publisher_pubkey_hex)) return false;
    const canonical2 = encodeDeterministicCbor({
      issued_at_ms: payload.issued_at_ms,
      publisher_pubkey_hex: payload.publisher_pubkey_hex.toLowerCase(),
      relay_origin: payload.relay_origin,
      rules_version: payload.rules_version,
      tournament_id: payload.tournament_id,
      tournament_name: payload.tournament_name
    });
    return verifyDomainBytes(
      DOMAIN_CONTROL,
      canonical2,
      fromHex(payload.publisher_pubkey_hex),
      fromHex(payload.signature_hex)
    );
  } catch {
    return false;
  }
}
function encodeTournamentJoinQrUri(payload) {
  const params = new URLSearchParams({
    tid: payload.tournament_id,
    name: payload.tournament_name,
    rules: payload.rules_version,
    pub: payload.publisher_pubkey_hex,
    origin: payload.relay_origin,
    iat: String(payload.issued_at_ms),
    sig: payload.signature_hex
  });
  return `openmat://join?${params.toString()}`;
}
function encodePublicPlayerWebUrl(payload, baseUrl = DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL, relays = payload.nostr_relays ?? DEFAULT_PUBLIC_NOSTR_RELAYS) {
  const cleanBase = baseUrl.trim().replace(/\/+$/, "");
  if (!payload.signature_hex && /^[0-9a-fA-F]{64}$/.test(payload.publisher_pubkey_hex)) {
    return `${cleanBase}/?${payload.publisher_pubkey_hex.toLowerCase()}`;
  }
  const joinUri = encodeTournamentJoinQrUri(payload);
  const params = new URLSearchParams({ join: joinUri });
  if (relays.length > 0) {
    params.set("relays", relays.join(","));
  }
  return `${cleanBase}/?${params.toString()}`;
}
function parseNostrRelaysParam(raw) {
  if (!raw) return void 0;
  const list = raw.split(",").map((u2) => u2.trim()).filter((u2) => u2.startsWith("wss://") || u2.startsWith("ws://"));
  return list.length > 0 ? list : void 0;
}
function decodeTournamentJoinQrUri(rawInput) {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    return { valid: false, reason: "Join key or QR URI is empty" };
  }
  if (/^[0-9a-fA-F]{64}$/.test(trimmed)) {
    return {
      valid: true,
      reason: "Pinned tournament publisher key",
      payload: {
        tournament_id: "",
        tournament_name: "Live Tournament",
        rules_version: "NFHS-2026-27-v1",
        publisher_pubkey_hex: trimmed.toLowerCase(),
        relay_origin: "http://127.0.0.1:5174",
        issued_at_ms: Date.now(),
        signature_hex: ""
      }
    };
  }
  if (/^[A-Za-z0-9][A-Za-z0-9_-]{3,63}$/.test(trimmed)) {
    return {
      valid: true,
      reason: `Find tournament ${trimmed}`,
      payload: {
        tournament_id: trimmed,
        tournament_name: trimmed,
        rules_version: "NFHS-2026-27-v1",
        publisher_pubkey_hex: "",
        relay_origin: "http://127.0.0.1:5174",
        issued_at_ms: Date.now(),
        signature_hex: ""
      }
    };
  }
  try {
    let params;
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      const url = new URL(trimmed);
      const rawSearch = url.search.replace(/^\?/, "").trim();
      const rawHash = url.hash.replace(/^#\/?\??/, "").trim();
      for (const candidateRaw of [rawSearch, rawHash]) {
        if (!candidateRaw) continue;
        const decodedCandidate = (() => {
          try {
            return candidateRaw.startsWith("openmat://join?") ? candidateRaw : decodeURIComponent(candidateRaw);
          } catch {
            return candidateRaw;
          }
        })();
        if (decodedCandidate.startsWith("openmat://join")) {
          const nested = decodeTournamentJoinQrUri(decodedCandidate);
          if (nested.valid && nested.payload) {
            const outerRelays2 = parseNostrRelaysParam(new URLSearchParams(url.search).get("relays"));
            if (outerRelays2) nested.payload.nostr_relays = outerRelays2;
          }
          return nested;
        }
      }
      params = new URLSearchParams(url.search);
      if (rawHash) {
        const hashParams = new URLSearchParams(rawHash);
        for (const [k2, v2] of hashParams.entries()) {
          if (!params.has(k2)) params.set(k2, v2);
        }
      }
      const outerRelays = parseNostrRelaysParam(params.get("relays"));
      const nestedJoin = params.get("join");
      if (nestedJoin) {
        const nested = decodeTournamentJoinQrUri(nestedJoin);
        if (nested.valid && nested.payload && outerRelays) {
          nested.payload.nostr_relays = outerRelays;
        }
        return nested;
      }
      const bareToken = decodeURIComponent(rawSearch.split("&")[0] ?? "").replace(/=+$/, "").trim();
      const bareHashToken = decodeURIComponent(rawHash.split("&")[0] ?? "").replace(/=+$/, "").trim();
      const candidateKey = params.get("key")?.trim() || (!params.get("sig") ? params.get("pub")?.trim() || params.get("root")?.trim() : "") || (/^[0-9a-fA-F]{64}$/.test(bareToken) ? bareToken : "") || (/^[0-9a-fA-F]{64}$/.test(bareHashToken) ? bareHashToken : "");
      if (candidateKey && /^[0-9a-fA-F]{64}$/.test(candidateKey) && !params.get("sig")) {
        const rawSession = params.get("session")?.trim() ?? "";
        const sessionTid = rawSession.startsWith("game:") ? rawSession.slice(5) : "";
        return {
          valid: true,
          reason: "Pinned tournament publisher key",
          payload: {
            tournament_id: params.get("tid")?.trim() || sessionTid,
            tournament_name: params.get("name")?.trim() || "Live Tournament",
            rules_version: params.get("rules")?.trim() || "NFHS-2026-27-v1",
            publisher_pubkey_hex: candidateKey.toLowerCase(),
            relay_origin: params.get("origin")?.trim() || "http://127.0.0.1:5174",
            issued_at_ms: Date.now(),
            signature_hex: "",
            ...outerRelays ? { nostr_relays: outerRelays } : {}
          }
        };
      }
      const candidateTid = (!params.get("sig") && !params.get("pub") ? params.get("tid")?.trim() : "") || params.get("key")?.trim() || (!bareToken.includes("=") && /^[A-Za-z0-9][A-Za-z0-9_-]{3,63}$/.test(bareToken) ? bareToken : "") || (!bareHashToken.includes("=") && /^[A-Za-z0-9][A-Za-z0-9_-]{3,63}$/.test(bareHashToken) ? bareHashToken : "");
      if (candidateTid && /^[A-Za-z0-9][A-Za-z0-9_-]{3,63}$/.test(candidateTid) && !params.get("sig")) {
        return {
          valid: true,
          reason: `Find tournament ${candidateTid}`,
          payload: {
            tournament_id: candidateTid,
            tournament_name: params.get("name")?.trim() || candidateTid,
            rules_version: params.get("rules")?.trim() || "NFHS-2026-27-v1",
            publisher_pubkey_hex: (params.get("pub") ?? "").trim().toLowerCase(),
            relay_origin: params.get("origin")?.trim() || "http://127.0.0.1:5174",
            issued_at_ms: Date.now(),
            signature_hex: "",
            ...outerRelays ? { nostr_relays: outerRelays } : {}
          }
        };
      }
      if (!params.get("tid") && !params.get("pub")) {
        return { valid: false, reason: "URL does not contain tournament join parameters" };
      }
    } else {
      const queryIdx = trimmed.indexOf("?");
      if (!trimmed.startsWith("openmat://join") || queryIdx < 0) {
        return { valid: false, reason: "Enter an openmat://join link or 64-character join key" };
      }
      params = new URLSearchParams(trimmed.slice(queryIdx + 1));
    }
    const relays = parseNostrRelaysParam(params.get("relays"));
    const payload = {
      tournament_id: params.get("tid") ?? "",
      tournament_name: params.get("name") ?? "",
      rules_version: params.get("rules") ?? "NFHS-2026-27-v1",
      publisher_pubkey_hex: (params.get("pub") ?? "").toLowerCase(),
      relay_origin: params.get("origin") ?? "http://127.0.0.1:5174",
      issued_at_ms: Number(params.get("iat") ?? "0"),
      signature_hex: (params.get("sig") ?? "").toLowerCase(),
      ...relays ? { nostr_relays: relays } : {}
    };
    if (!payload.tournament_id || !payload.publisher_pubkey_hex || !payload.signature_hex) {
      return { valid: false, reason: "Missing required fields in openmat://join QR payload" };
    }
    if (!verifyTournamentJoinPayload(payload)) {
      return {
        valid: false,
        reason: "Signature verification failed on tournament join link"
      };
    }
    return {
      valid: true,
      reason: `Connected to ${payload.tournament_name}`,
      payload
    };
  } catch (err) {
    return { valid: false, reason: `Malformed join link: ${String(err)}` };
  }
}
function encodeCertificateToCborHex(cert) {
  const cborBytes = encodeDeterministicCbor([
    cert.certificate_id,
    cert.tournament_id,
    cert.subject_key_id,
    cert.subject_pubkey,
    cert.role,
    cert.allowed_scopes,
    cert.allowed_stream_id,
    cert.assigned_mat_id,
    cert.assignment_revision,
    cert.authority_generation,
    cert.issued_at_ms,
    cert.expires_at_ms,
    cert.allow_in_progress_completion,
    cert.root_signature
  ]);
  return toHex(cborBytes);
}
function decodeCertificateFromCborHex(cborHex) {
  const raw = decodeDeterministicCbor(fromHex(cborHex));
  if (Array.isArray(raw)) {
    return {
      certificate_id: String(raw[0] ?? ""),
      tournament_id: String(raw[1] ?? ""),
      subject_key_id: String(raw[2] ?? ""),
      subject_pubkey: raw[3] instanceof Uint8Array ? raw[3] : new Uint8Array(0),
      role: Number(raw[4] ?? Role.MatOperator),
      allowed_scopes: Number(raw[5] ?? 0),
      allowed_stream_id: String(raw[6] ?? ""),
      assigned_mat_id: Number(raw[7] ?? 0),
      assignment_revision: Number(raw[8] ?? 1),
      authority_generation: Number(raw[9] ?? 1),
      issued_at_ms: Number(raw[10] ?? 0),
      expires_at_ms: Number(raw[11] ?? 0),
      allow_in_progress_completion: Boolean(raw[12]),
      root_signature: raw[13] instanceof Uint8Array ? raw[13] : new Uint8Array(0)
    };
  }
  const decoded = raw;
  return {
    certificate_id: String(decoded.certificate_id ?? ""),
    tournament_id: String(decoded.tournament_id ?? ""),
    subject_key_id: String(decoded.subject_key_id ?? ""),
    subject_pubkey: decoded.subject_pubkey instanceof Uint8Array ? decoded.subject_pubkey : new Uint8Array(0),
    role: Number(decoded.role ?? Role.MatOperator),
    allowed_scopes: Number(decoded.allowed_scopes ?? 0),
    allowed_stream_id: String(decoded.allowed_stream_id ?? ""),
    assigned_mat_id: Number(decoded.assigned_mat_id ?? 0),
    assignment_revision: Number(decoded.assignment_revision ?? 1),
    authority_generation: Number(decoded.authority_generation ?? 1),
    issued_at_ms: Number(decoded.issued_at_ms ?? 0),
    expires_at_ms: Number(decoded.expires_at_ms ?? 0),
    allow_in_progress_completion: Boolean(decoded.allow_in_progress_completion),
    root_signature: decoded.root_signature instanceof Uint8Array ? decoded.root_signature : new Uint8Array(0)
  };
}
function encodeScorekeeperCertQrUri(bundle) {
  const params = new URLSearchParams({
    tid: bundle.tournament_id,
    name: bundle.tournament_name,
    pub: bundle.publisher_pubkey_hex.toLowerCase(),
    origin: bundle.relay_origin,
    cert: bundle.cert_cbor_hex
  });
  return `openmat://scorekeeper-auth?${params.toString()}`;
}
function decodeScorekeeperCertQrUri(rawInput) {
  try {
    const trimmed = rawInput.trim();
    const queryIdx = trimmed.indexOf("?");
    if (!trimmed.startsWith("openmat://scorekeeper-auth") || queryIdx < 0) {
      return { valid: false, reason: "QR URI must start with openmat://scorekeeper-auth?..." };
    }
    const params = new URLSearchParams(trimmed.slice(queryIdx + 1));
    const tid = params.get("tid") ?? "";
    const name = params.get("name") ?? "";
    const pub = (params.get("pub") ?? "").toLowerCase();
    const origin = params.get("origin") ?? "http://127.0.0.1:5174";
    const certHex = params.get("cert") ?? "";
    if (!tid || !pub || !certHex) {
      return { valid: false, reason: "Missing tid, pub, or cert in scorekeeper QR URI" };
    }
    const cert = decodeCertificateFromCborHex(certHex);
    return {
      valid: true,
      reason: "Parsed scorekeeper delegated certificate bundle",
      bundle: {
        tournament_id: tid,
        tournament_name: name,
        publisher_pubkey_hex: pub,
        relay_origin: origin,
        certificate: cert,
        cert_cbor_hex: certHex
      }
    };
  } catch (err) {
    return { valid: false, reason: `Malformed scorekeeper QR URI: ${String(err)}` };
  }
}
const VERSION_EC_L_TABLE = [
  { totalDataBytes: 0, ecBytesPerBlock: 0, numBlocksGroup1: 0, dataBytesGroup1: 0, numBlocksGroup2: 0, dataBytesGroup2: 0 },
  // QR version zero is reserved
  { totalDataBytes: 19, ecBytesPerBlock: 7, numBlocksGroup1: 1, dataBytesGroup1: 19, numBlocksGroup2: 0, dataBytesGroup2: 0 },
  // V1
  { totalDataBytes: 34, ecBytesPerBlock: 10, numBlocksGroup1: 1, dataBytesGroup1: 34, numBlocksGroup2: 0, dataBytesGroup2: 0 },
  // V2
  { totalDataBytes: 55, ecBytesPerBlock: 15, numBlocksGroup1: 1, dataBytesGroup1: 55, numBlocksGroup2: 0, dataBytesGroup2: 0 },
  // V3
  { totalDataBytes: 80, ecBytesPerBlock: 20, numBlocksGroup1: 1, dataBytesGroup1: 80, numBlocksGroup2: 0, dataBytesGroup2: 0 },
  // V4
  { totalDataBytes: 108, ecBytesPerBlock: 26, numBlocksGroup1: 1, dataBytesGroup1: 108, numBlocksGroup2: 0, dataBytesGroup2: 0 },
  // V5
  { totalDataBytes: 136, ecBytesPerBlock: 18, numBlocksGroup1: 2, dataBytesGroup1: 68, numBlocksGroup2: 0, dataBytesGroup2: 0 },
  // V6
  { totalDataBytes: 156, ecBytesPerBlock: 20, numBlocksGroup1: 2, dataBytesGroup1: 78, numBlocksGroup2: 0, dataBytesGroup2: 0 },
  // V7
  { totalDataBytes: 194, ecBytesPerBlock: 24, numBlocksGroup1: 2, dataBytesGroup1: 97, numBlocksGroup2: 0, dataBytesGroup2: 0 },
  // V8
  { totalDataBytes: 232, ecBytesPerBlock: 30, numBlocksGroup1: 2, dataBytesGroup1: 116, numBlocksGroup2: 0, dataBytesGroup2: 0 },
  // V9
  { totalDataBytes: 274, ecBytesPerBlock: 18, numBlocksGroup1: 2, dataBytesGroup1: 68, numBlocksGroup2: 2, dataBytesGroup2: 69 },
  // V10
  { totalDataBytes: 324, ecBytesPerBlock: 20, numBlocksGroup1: 4, dataBytesGroup1: 81, numBlocksGroup2: 0, dataBytesGroup2: 0 },
  // V11
  { totalDataBytes: 370, ecBytesPerBlock: 24, numBlocksGroup1: 2, dataBytesGroup1: 92, numBlocksGroup2: 2, dataBytesGroup2: 93 },
  // V12
  { totalDataBytes: 428, ecBytesPerBlock: 26, numBlocksGroup1: 4, dataBytesGroup1: 107, numBlocksGroup2: 0, dataBytesGroup2: 0 },
  // V13
  { totalDataBytes: 461, ecBytesPerBlock: 30, numBlocksGroup1: 3, dataBytesGroup1: 115, numBlocksGroup2: 1, dataBytesGroup2: 116 },
  // V14
  { totalDataBytes: 523, ecBytesPerBlock: 22, numBlocksGroup1: 5, dataBytesGroup1: 87, numBlocksGroup2: 1, dataBytesGroup2: 88 },
  // V15
  { totalDataBytes: 589, ecBytesPerBlock: 24, numBlocksGroup1: 5, dataBytesGroup1: 98, numBlocksGroup2: 1, dataBytesGroup2: 99 },
  // V16
  { totalDataBytes: 647, ecBytesPerBlock: 28, numBlocksGroup1: 1, dataBytesGroup1: 107, numBlocksGroup2: 5, dataBytesGroup2: 108 },
  // V17
  { totalDataBytes: 721, ecBytesPerBlock: 30, numBlocksGroup1: 5, dataBytesGroup1: 120, numBlocksGroup2: 1, dataBytesGroup2: 121 },
  // V18
  { totalDataBytes: 795, ecBytesPerBlock: 28, numBlocksGroup1: 3, dataBytesGroup1: 113, numBlocksGroup2: 4, dataBytesGroup2: 114 },
  // V19
  { totalDataBytes: 861, ecBytesPerBlock: 28, numBlocksGroup1: 3, dataBytesGroup1: 107, numBlocksGroup2: 5, dataBytesGroup2: 108 }
  // V20
];
const ALIGNMENT_PATTERNS = [
  [],
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90]
];
const GF_EXP = new Uint8Array(512);
const GF_LOG = new Uint8Array(256);
(() => {
  let x2 = 1;
  for (let i2 = 0; i2 < 255; i2++) {
    GF_EXP[i2] = x2;
    GF_LOG[x2] = i2;
    x2 <<= 1;
    if (x2 & 256) x2 ^= 285;
  }
  for (let i2 = 255; i2 < 512; i2++) {
    GF_EXP[i2] = GF_EXP[i2 - 255];
  }
})();
function gfMul(a2, b2) {
  if (a2 === 0 || b2 === 0) return 0;
  return GF_EXP[GF_LOG[a2] + GF_LOG[b2]];
}
function computeReedSolomonGenerator(degree) {
  let poly = new Uint8Array([1]);
  for (let i2 = 0; i2 < degree; i2++) {
    const next = new Uint8Array(poly.length + 1);
    const root = GF_EXP[i2];
    for (let j = 0; j < poly.length; j++) {
      next[j] ^= poly[j];
      next[j + 1] ^= gfMul(poly[j], root);
    }
    poly = next;
  }
  return poly;
}
function computeReedSolomonRemainder(data, ecDegree) {
  const gen = computeReedSolomonGenerator(ecDegree);
  const rem = new Uint8Array(ecDegree);
  for (let i2 = 0; i2 < data.length; i2++) {
    const factor = data[i2] ^ rem[0];
    rem.copyWithin(0, 1);
    rem[ecDegree - 1] = 0;
    for (let j = 0; j < ecDegree; j++) {
      rem[j] ^= gfMul(gen[j + 1], factor);
    }
  }
  return rem;
}
function encodeQrMatrix(text) {
  const payloadBytes = new TextEncoder().encode(text);
  let version = 1;
  while (version <= 20) {
    const cap = VERSION_EC_L_TABLE[version].totalDataBytes;
    const headerBits = version <= 9 ? 4 + 8 : 4 + 16;
    const neededBytes = Math.ceil((headerBits + payloadBytes.length * 8) / 8);
    if (neededBytes <= cap) break;
    version++;
  }
  if (version > 20) {
    throw new Error(`QR payload exceeds Version 20 capacity (${payloadBytes.length} bytes)`);
  }
  const spec = VERSION_EC_L_TABLE[version];
  const bits = [];
  const pushBits = (val, len) => {
    for (let i2 = len - 1; i2 >= 0; i2--) {
      bits.push(val >>> i2 & 1);
    }
  };
  pushBits(4, 4);
  pushBits(payloadBytes.length, version <= 9 ? 8 : 16);
  for (const b2 of payloadBytes) {
    pushBits(b2, 8);
  }
  const maxDataBits = spec.totalDataBytes * 8;
  const terminatorLen = Math.min(4, maxDataBits - bits.length);
  pushBits(0, terminatorLen);
  while (bits.length % 8 !== 0) bits.push(0);
  const dataBytes = new Uint8Array(spec.totalDataBytes);
  const fullByteCount = bits.length >>> 3;
  for (let i2 = 0; i2 < fullByteCount; i2++) {
    let b2 = 0;
    for (let j = 0; j < 8; j++) {
      b2 = b2 << 1 | bits[i2 * 8 + j];
    }
    dataBytes[i2] = b2;
  }
  const padBytes = [236, 17];
  for (let i2 = fullByteCount; i2 < spec.totalDataBytes; i2++) {
    dataBytes[i2] = padBytes[i2 - fullByteCount & 1];
  }
  const dataBlocks = [];
  const ecBlocks = [];
  let offset = 0;
  for (let i2 = 0; i2 < spec.numBlocksGroup1; i2++) {
    const blk = dataBytes.slice(offset, offset + spec.dataBytesGroup1);
    offset += spec.dataBytesGroup1;
    dataBlocks.push(blk);
    ecBlocks.push(computeReedSolomonRemainder(blk, spec.ecBytesPerBlock));
  }
  for (let i2 = 0; i2 < spec.numBlocksGroup2; i2++) {
    const blk = dataBytes.slice(offset, offset + spec.dataBytesGroup2);
    offset += spec.dataBytesGroup2;
    dataBlocks.push(blk);
    ecBlocks.push(computeReedSolomonRemainder(blk, spec.ecBytesPerBlock));
  }
  const interleaved = [];
  const maxBlockLen = Math.max(spec.dataBytesGroup1, spec.dataBytesGroup2);
  for (let i2 = 0; i2 < maxBlockLen; i2++) {
    for (const blk of dataBlocks) {
      if (i2 < blk.length) interleaved.push(blk[i2]);
    }
  }
  for (let i2 = 0; i2 < spec.ecBytesPerBlock; i2++) {
    for (const ec of ecBlocks) {
      interleaved.push(ec[i2]);
    }
  }
  const size = version * 4 + 17;
  const modules = Array.from({ length: size }, () => Array(size).fill(false));
  const isFunc = Array.from({ length: size }, () => Array(size).fill(false));
  const setFunctionModule = (r2, c2, dark) => {
    if (r2 < 0 || r2 >= size || c2 < 0 || c2 >= size) return;
    modules[r2][c2] = dark;
    isFunc[r2][c2] = true;
  };
  const drawFinder = (topR, leftC) => {
    for (let dr = -1; dr <= 7; dr++) {
      for (let dc = -1; dc <= 7; dc++) {
        const r2 = topR + dr;
        const c2 = leftC + dc;
        if (r2 < 0 || r2 >= size || c2 < 0 || c2 >= size) continue;
        const inOuter = dr >= 0 && dr <= 6 && dc >= 0 && dc <= 6;
        const onBorder = dr === 0 || dr === 6 || dc === 0 || dc === 6;
        const inCenter = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
        setFunctionModule(r2, c2, inOuter && (onBorder || inCenter));
      }
    }
  };
  drawFinder(0, 0);
  drawFinder(0, size - 7);
  drawFinder(size - 7, 0);
  for (let i2 = 8; i2 < size - 8; i2++) {
    setFunctionModule(6, i2, i2 % 2 === 0);
    setFunctionModule(i2, 6, i2 % 2 === 0);
  }
  const alignCoords = ALIGNMENT_PATTERNS[version];
  for (let i2 = 0; i2 < alignCoords.length; i2++) {
    for (let j = 0; j < alignCoords.length; j++) {
      if (i2 === 0 && j === 0 || i2 === 0 && j === alignCoords.length - 1 || i2 === alignCoords.length - 1 && j === 0) {
        continue;
      }
      const cr = alignCoords[i2];
      const cc = alignCoords[j];
      for (let dr = -2; dr <= 2; dr++) {
        for (let dc = -2; dc <= 2; dc++) {
          const dark = Math.max(Math.abs(dr), Math.abs(dc)) !== 1;
          setFunctionModule(cr + dr, cc + dc, dark);
        }
      }
    }
  }
  setFunctionModule(size - 8, 8, true);
  for (let i2 = 0; i2 < 9; i2++) {
    if (!isFunc[8][i2]) setFunctionModule(8, i2, false);
    if (!isFunc[i2][8]) setFunctionModule(i2, 8, false);
  }
  for (let i2 = 0; i2 < 8; i2++) {
    if (!isFunc[8][size - 1 - i2]) setFunctionModule(8, size - 1 - i2, false);
    if (!isFunc[size - 1 - i2][8]) setFunctionModule(size - 1 - i2, 8, false);
  }
  if (version >= 7) {
    let rem = version;
    for (let i2 = 0; i2 < 12; i2++) {
      rem = rem << 1 ^ (rem >>> 11) * 7973;
    }
    const vBits = version << 12 | rem;
    for (let i2 = 0; i2 < 18; i2++) {
      const bit = (vBits >>> i2 & 1) !== 0;
      const a2 = size - 11 + i2 % 3;
      const b2 = Math.floor(i2 / 3);
      setFunctionModule(a2, b2, bit);
      setFunctionModule(b2, a2, bit);
    }
  }
  let bitIdx = 0;
  const totalBits = interleaved.length * 8;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let vert = 0; vert < size; vert++) {
      for (let j = 0; j < 2; j++) {
        const c2 = right - j;
        const upward = (right + 1 & 2) === 0;
        const r2 = upward ? size - 1 - vert : vert;
        if (!isFunc[r2][c2] && bitIdx < totalBits) {
          const byteVal = interleaved[bitIdx >>> 3];
          const bit = (byteVal >>> 7 - (bitIdx & 7) & 1) !== 0;
          modules[r2][c2] = bit;
          bitIdx++;
        }
      }
    }
  }
  for (let r2 = 0; r2 < size; r2++) {
    for (let c2 = 0; c2 < size; c2++) {
      if (!isFunc[r2][c2] && (r2 + c2) % 2 === 0) {
        modules[r2][c2] = !modules[r2][c2];
      }
    }
  }
  const formatData = 1 << 3 | 0;
  let fRem = formatData;
  for (let i2 = 0; i2 < 10; i2++) {
    fRem = fRem << 1 ^ (fRem >>> 9) * 1335;
  }
  const formatBits = (formatData << 10 | fRem) ^ 21522;
  const getFormatBit = (idx) => (formatBits >>> idx & 1) !== 0;
  for (let i2 = 0; i2 <= 5; i2++) modules[8][i2] = getFormatBit(i2);
  modules[8][7] = getFormatBit(6);
  modules[8][8] = getFormatBit(7);
  modules[7][8] = getFormatBit(8);
  for (let i2 = 9; i2 < 15; i2++) modules[14 - i2][8] = getFormatBit(i2);
  for (let i2 = 0; i2 < 8; i2++) modules[8][size - 1 - i2] = getFormatBit(i2);
  for (let i2 = 8; i2 < 15; i2++) modules[size - 15 + i2][8] = getFormatBit(i2);
  modules[size - 8][8] = true;
  return modules;
}
function renderQrSvgDataUrl(text, margin = 3) {
  const matrix = encodeQrMatrix(text);
  const size = matrix.length;
  const total = size + margin * 2;
  let path = "";
  for (let r2 = 0; r2 < size; r2++) {
    for (let c2 = 0; c2 < size; c2++) {
      if (matrix[r2][c2]) {
        path += `M${c2 + margin},${r2 + margin}h1v1h-1z`;
      }
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${total}" shape-rendering="crispEdges"><rect width="${total}" height="${total}" fill="#ffffff"/><path d="${path}" fill="#040b0a"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
new TextEncoder();
new TextDecoder();
function toBase64Url(bytes) {
  let binary = "";
  for (let i2 = 0; i2 < bytes.byteLength; i2++) {
    binary += String.fromCharCode(bytes[i2]);
  }
  const b64 = typeof btoa === "function" ? btoa(binary) : Buffer.from(bytes).toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function fromBase64Url(base64Url) {
  const padded = base64Url.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(base64Url.length / 4) * 4, "=");
  if (typeof atob === "function") {
    const binary = atob(padded);
    const out = new Uint8Array(binary.length);
    for (let i2 = 0; i2 < binary.length; i2++) {
      out[i2] = binary.charCodeAt(i2);
    }
    return out;
  }
  return new Uint8Array(Buffer.from(padded, "base64"));
}
const divNearest = (num2, den) => (num2 + (num2 >= 0 ? den : -den) / _2n$1) / den;
function _splitEndoScalar(k2, basis, n3) {
  aInRange("scalar", k2, _0n$1, n3);
  const [[a1, b1], [a2, b2]] = basis;
  const c1 = divNearest(b2 * k2, n3);
  const c2 = divNearest(-b1 * k2, n3);
  let k1 = k2 - c1 * a1 - c2 * a2;
  let k22 = -c1 * b1 - c2 * b2;
  const k1neg = k1 < _0n$1;
  const k2neg = k22 < _0n$1;
  if (k1neg)
    k1 = -k1;
  if (k2neg)
    k22 = -k22;
  const MAX_NUM = bitMask(Math.ceil(bitLen(n3) / 2)) + _1n;
  if (k1 < _0n$1 || k1 >= MAX_NUM || k22 < _0n$1 || k22 >= MAX_NUM) {
    throw new Error("splitScalar (endomorphism): failed for k");
  }
  return { k1neg, k1, k2neg, k2: k22 };
}
const _0n$1 = /* @__PURE__ */ BigInt(0), _1n = /* @__PURE__ */ BigInt(1), _2n$1 = /* @__PURE__ */ BigInt(2), _3n = /* @__PURE__ */ BigInt(3), _4n = /* @__PURE__ */ BigInt(4);
function weierstrass(params, extraOpts = {}) {
  const validated = createCurveFields("weierstrass", params, extraOpts);
  const Fp2 = validated.Fp;
  const Fn = validated.Fn;
  let CURVE = validated.CURVE;
  const { h: cofactor, n: CURVE_ORDER } = CURVE;
  validateObject(extraOpts, {}, {
    allowInfinityPoint: "boolean",
    clearCofactor: "function",
    isTorsionFree: "function",
    fromBytes: "function",
    toBytes: "function",
    endo: "object",
    randomBytes: "function"
  });
  const { endo: endoOpts, allowInfinityPoint, clearCofactor, isTorsionFree, fromBytes, toBytes } = extraOpts;
  const randomBytes$12 = extraOpts.randomBytes === void 0 ? randomBytes : extraOpts.randomBytes;
  if (endoOpts) {
    if (!Fp2.is0(CURVE.a) || typeof endoOpts.beta !== "bigint" || !Array.isArray(endoOpts.basises)) {
      throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    }
  }
  const endo = endoOpts ? {
    beta: endoOpts.beta,
    basises: endoOpts.basises.map((basis) => [...basis])
  } : void 0;
  const lengths = getWLengths(Fp2, Fn);
  function assertCompressionIsSupported() {
    if (!Fp2.isOdd)
      throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function pointToBytes2(_c, point, isCompressed) {
    if (point.is0()) {
      if (!allowInfinityPoint)
        throw new Error("bad point: ZERO");
      return Uint8Array.of(0);
    }
    const { x: x2, y: y3 } = point.toAffine();
    const bx = Fp2.toBytes(x2);
    abool(isCompressed, "isCompressed");
    if (isCompressed) {
      assertCompressionIsSupported();
      const hasEvenY = !Fp2.isOdd(y3);
      return concatBytes(pprefix(hasEvenY), bx);
    } else {
      return concatBytes(Uint8Array.of(4), bx, Fp2.toBytes(y3));
    }
  }
  function pointFromBytes(bytes) {
    abytes(bytes, void 0, "Point");
    const { publicKey: comp, publicKeyUncompressed: uncomp } = lengths;
    const length = bytes.length;
    const head = bytes[0];
    const tail = bytes.subarray(1);
    if (allowInfinityPoint && length === 1 && head === 0)
      return { x: Fp2.ZERO, y: Fp2.ZERO };
    if (length === comp && (head === 2 || head === 3)) {
      const x2 = Fp2.fromBytes(tail);
      if (!Fp2.isValid(x2))
        throw new Error("bad point: is not on curve, wrong x");
      const y22 = weierstrassEquation(x2);
      let y3;
      try {
        y3 = Fp2.sqrt(y22);
      } catch (sqrtError) {
        const err = sqrtError instanceof Error ? ": " + sqrtError.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + err);
      }
      assertCompressionIsSupported();
      const evenY = Fp2.isOdd(y3);
      const evenH = (head & 1) === 1;
      if (evenH !== evenY)
        y3 = Fp2.neg(y3);
      return { x: x2, y: y3 };
    } else if (length === uncomp && head === 4) {
      const L2 = Fp2.BYTES;
      const x2 = Fp2.fromBytes(tail.subarray(0, L2));
      const y3 = Fp2.fromBytes(tail.subarray(L2, L2 * 2));
      if (!isValidXY(x2, y3))
        throw new Error("bad point: is not on curve");
      return { x: x2, y: y3 };
    } else {
      throw new Error(`bad point: got length ${length}, expected compressed=${comp} or uncompressed=${uncomp}`);
    }
  }
  const encodePoint = toBytes === void 0 ? pointToBytes2 : toBytes;
  const decodePoint = fromBytes === void 0 ? pointFromBytes : fromBytes;
  const b3 = Fp2.mul(CURVE.b, _3n);
  const mulA = Fp2.is0(CURVE.a) ? (_2) => Fp2.ZERO : (x2) => Fp2.mul(CURVE.a, x2);
  function weierstrassEquation(x2) {
    const x22 = Fp2.sqr(x2);
    const x3 = Fp2.mul(x22, x2);
    return Fp2.add(Fp2.add(x3, Fp2.mul(x2, CURVE.a)), CURVE.b);
  }
  function isValidXY(x2, y3) {
    const left = Fp2.sqr(y3);
    const right = weierstrassEquation(x2);
    return Fp2.eql(left, right);
  }
  if (!isValidXY(CURVE.Gx, CURVE.Gy))
    throw new Error("bad curve params: generator point");
  const _4a3 = Fp2.mul(Fp2.pow(CURVE.a, _3n), _4n);
  const _27b2 = Fp2.mul(Fp2.sqr(CURVE.b), BigInt(27));
  if (Fp2.is0(Fp2.add(_4a3, _27b2)))
    throw new Error("bad curve params: a or b");
  function acoord(title, n3, banZero = false) {
    if (!Fp2.isValid(n3) || banZero && Fp2.is0(n3))
      throw new Error(`bad point coordinate ${title}`);
    return typeof n3 === "object" && n3 !== null ? Fp2.create(n3) : n3;
  }
  function aprjpoint(other) {
    if (!(other instanceof Point))
      throw new Error("Weierstrass Point expected");
  }
  function splitEndoScalarN(k2) {
    if (!endo || !endo.basises)
      throw new Error("no endo");
    return _splitEndoScalar(k2, endo.basises, Fn.ORDER);
  }
  function pushWnafPair(points, scalars, p2, k2) {
    if (!Fn.isValid(k2))
      throw new RangeError("invalid scalar: out of range");
    if (endo) {
      const { k1neg, k1, k2neg, k2: k22 } = splitEndoScalarN(k2);
      const psi = new Point(Fp2.mul(p2.X, endo.beta), p2.Y, p2.Z);
      points.push(k1neg ? p2.negate() : p2, k2neg ? psi.negate() : psi);
      scalars.push(k1, k22);
    } else {
      points.push(p2);
      scalars.push(k2);
    }
  }
  const validityCache = /* @__PURE__ */ new WeakSet();
  class Point {
    static BASE = new Point(CURVE.Gx, CURVE.Gy, Fp2.ONE);
    static ZERO = new Point(Fp2.ZERO, Fp2.ONE, Fp2.ZERO);
    static Fp = Fp2;
    static Fn = Fn;
    X;
    Y;
    Z;
    /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
    constructor(X, Y, Z2) {
      this.X = acoord("x", X);
      this.Y = acoord("y", Y, true);
      this.Z = acoord("z", Z2);
      Object.freeze(this);
    }
    static CURVE() {
      return CURVE;
    }
    /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
    static fromAffine(p2) {
      const { x: x2, y: y3 } = p2 || {};
      if (!p2 || !Fp2.isValid(x2) || !Fp2.isValid(y3))
        throw new Error("invalid affine point");
      if (p2 instanceof Point)
        throw new Error("projective point not allowed");
      if (Fp2.is0(x2) && Fp2.is0(y3))
        return Point.ZERO;
      return new Point(x2, y3, Fp2.ONE);
    }
    static fromBytes(bytes) {
      const P2 = Point.fromAffine(decodePoint(abytes(bytes, void 0, "point")));
      P2.assertValidity();
      return P2;
    }
    static fromHex(hex) {
      return Point.fromBytes(hexToBytes(hex));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * @param isLazy - true will defer table computation until the first multiplication
     */
    precompute(windowSize = 6, isLazy = true) {
      wnaf.setWindowSize(this, windowSize);
      if (!isLazy)
        this.multiply(_3n);
      return this;
    }
    // TODO: return `this`
    /** A point on curve is valid if it conforms to equation. */
    assertValidity() {
      const p2 = this;
      if (p2.is0()) {
        if (allowInfinityPoint && Fp2.is0(p2.X) && Fp2.eql(p2.Y, Fp2.ONE) && Fp2.is0(p2.Z))
          return;
        throw new Error("bad point: ZERO");
      }
      if (validityCache.has(p2))
        return;
      const { x: x2, y: y3 } = p2.toAffine();
      if (!Fp2.isValid(x2) || !Fp2.isValid(y3))
        throw new Error("bad point: x or y not field elements");
      if (!isValidXY(x2, y3))
        throw new Error("bad point: equation left != right");
      if (!p2.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      validityCache.add(p2);
    }
    hasEvenY() {
      const { y: y3 } = this.toAffine();
      if (!Fp2.isOdd)
        throw new Error("Field doesn't support isOdd");
      return !Fp2.isOdd(y3);
    }
    /** Compare one point to another. */
    equals(other) {
      aprjpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      const U1 = Fp2.eql(Fp2.mul(X1, Z2), Fp2.mul(X2, Z1));
      const U2 = Fp2.eql(Fp2.mul(Y1, Z2), Fp2.mul(Y2, Z1));
      return U1 && U2;
    }
    /** Flips point to one corresponding to (x, -y) in Affine coordinates. */
    negate() {
      return new Point(this.X, Fp2.neg(this.Y), this.Z);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { X: X1, Y: Y1, Z: Z1 } = this;
      let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
      let t0 = Fp2.mul(X1, X1);
      let t1 = Fp2.mul(Y1, Y1);
      let t2 = Fp2.mul(Z1, Z1);
      let t3 = Fp2.mul(X1, Y1);
      t3 = Fp2.add(t3, t3);
      Z3 = Fp2.mul(X1, Z1);
      Z3 = Fp2.add(Z3, Z3);
      X3 = mulA(Z3);
      Y3 = Fp2.mul(b3, t2);
      Y3 = Fp2.add(X3, Y3);
      X3 = Fp2.sub(t1, Y3);
      Y3 = Fp2.add(t1, Y3);
      Y3 = Fp2.mul(X3, Y3);
      X3 = Fp2.mul(t3, X3);
      Z3 = Fp2.mul(b3, Z3);
      t2 = mulA(t2);
      t3 = Fp2.sub(t0, t2);
      t3 = mulA(t3);
      t3 = Fp2.add(t3, Z3);
      Z3 = Fp2.add(t0, t0);
      t0 = Fp2.add(Z3, t0);
      t0 = Fp2.add(t0, t2);
      t0 = Fp2.mul(t0, t3);
      Y3 = Fp2.add(Y3, t0);
      t2 = Fp2.mul(Y1, Z1);
      t2 = Fp2.add(t2, t2);
      t0 = Fp2.mul(t2, t3);
      X3 = Fp2.sub(X3, t0);
      Z3 = Fp2.mul(t2, t1);
      Z3 = Fp2.add(Z3, Z3);
      Z3 = Fp2.add(Z3, Z3);
      return new Point(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      aprjpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
      let t0 = Fp2.mul(X1, X2);
      let t1 = Fp2.mul(Y1, Y2);
      let t2 = Fp2.mul(Z1, Z2);
      let t3 = Fp2.add(X1, Y1);
      let t4 = Fp2.add(X2, Y2);
      t3 = Fp2.mul(t3, t4);
      t4 = Fp2.add(t0, t1);
      t3 = Fp2.sub(t3, t4);
      t4 = Fp2.add(X1, Z1);
      let t5 = Fp2.add(X2, Z2);
      t4 = Fp2.mul(t4, t5);
      t5 = Fp2.add(t0, t2);
      t4 = Fp2.sub(t4, t5);
      t5 = Fp2.add(Y1, Z1);
      X3 = Fp2.add(Y2, Z2);
      t5 = Fp2.mul(t5, X3);
      X3 = Fp2.add(t1, t2);
      t5 = Fp2.sub(t5, X3);
      Z3 = mulA(t4);
      X3 = Fp2.mul(b3, t2);
      Z3 = Fp2.add(X3, Z3);
      X3 = Fp2.sub(t1, Z3);
      Z3 = Fp2.add(t1, Z3);
      Y3 = Fp2.mul(X3, Z3);
      t1 = Fp2.add(t0, t0);
      t1 = Fp2.add(t1, t0);
      t2 = mulA(t2);
      t4 = Fp2.mul(b3, t4);
      t1 = Fp2.add(t1, t2);
      t2 = Fp2.sub(t0, t2);
      t2 = mulA(t2);
      t4 = Fp2.add(t4, t2);
      t0 = Fp2.mul(t1, t4);
      Y3 = Fp2.add(Y3, t0);
      t0 = Fp2.mul(t5, t4);
      X3 = Fp2.mul(t3, X3);
      X3 = Fp2.sub(X3, t0);
      t0 = Fp2.mul(t3, t1);
      Z3 = Fp2.mul(t5, Z3);
      Z3 = Fp2.add(Z3, t0);
      return new Point(X3, Y3, Z3);
    }
    subtract(other) {
      aprjpoint(other);
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point.ZERO);
    }
    /**
     * Constant time multiplication.
     * Uses precomputed tables (signed fixed-window wNAF) when available.
     * Uses scalar blinding and avoids endomorphism splitting in the secret-scalar path.
     * @param scalar - by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      if (!Fn.isValidNot0(scalar))
        throw new RangeError("invalid scalar: out of range");
      const { p: p2, f: f2 } = wnaf.mulSecret(this, scalar, cofactor, normalize);
      return normalize([p2, f2])[0];
    }
    /**
     * Non-constant-time multiplication. Uses width-4 wNAF with GLV endomorphism splitting
     * when available (two half-width scalars sharing one halved doubling chain).
     * It's faster, but should only be used when you don't care about
     * an exposed secret key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(scalar) {
      const p2 = this;
      const sc = scalar;
      if (!Fn.isValid(sc))
        throw new RangeError("invalid scalar: out of range");
      if (sc === _0n$1 || p2.is0())
        return Point.ZERO;
      if (sc === _1n)
        return p2;
      if (wnaf.hasWindowSize(this))
        return wnaf.mulUnsafe(p2, sc, normalize);
      const points = [];
      const scalars = [];
      pushWnafPair(points, scalars, p2, sc);
      return mulAddUnsafe(Point, points, scalars);
    }
    /**
     * Non-constant-time double-scalar multiplication `a⋅this + b⋅other` (Strauss–Shamir).
     * Both walks share one doubling chain via {@link mulAddUnsafe}, and GLV endomorphism
     * (when available) halves the chain again by splitting each scalar into two half-width
     * parts. Used by ECDSA verification and public-key recovery for `R = u1⋅G + u2⋅P`.
     * Only for public scalars.
     */
    mulAddUnsafe(a2, other, b2) {
      aprjpoint(other);
      const points = [];
      const scalars = [];
      pushWnafPair(points, scalars, this, a2);
      pushWnafPair(points, scalars, other, b2);
      return mulAddUnsafe(Point, points, scalars);
    }
    /**
     * Converts Projective point to affine (x, y) coordinates.
     * (X, Y, Z) ∋ (x=X/Z, y=Y/Z).
     * @param invertedZ - Z^-1 (inverted zero) - optional, precomputation is useful for invertBatch
     */
    toAffine(invertedZ) {
      const p2 = this;
      let iz = invertedZ;
      if (iz != null && !Fp2.isValid(iz))
        throw new RangeError('"invertedZ" expected valid field element');
      const { X, Y, Z: Z2 } = p2;
      if (Fp2.eql(Z2, Fp2.ONE))
        return { x: X, y: Y };
      const is0 = p2.is0();
      if (iz == null)
        iz = is0 ? Fp2.ONE : Fp2.inv(Z2);
      const x2 = Fp2.mul(X, iz);
      const y3 = Fp2.mul(Y, iz);
      const zz = Fp2.mul(Z2, iz);
      if (is0)
        return { x: Fp2.ZERO, y: Fp2.ZERO };
      if (!Fp2.eql(zz, Fp2.ONE))
        throw new Error("invZ was invalid");
      return { x: x2, y: y3 };
    }
    /**
     * Checks whether Point is free of torsion elements (is in prime subgroup).
     * Always torsion-free for cofactor=1 curves.
     */
    isTorsionFree() {
      if (cofactor === _1n)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point, this);
      return wnaf.mulUnsafe(this, CURVE_ORDER).is0();
    }
    clearCofactor() {
      if (cofactor === _1n)
        return this;
      if (clearCofactor)
        return clearCofactor(Point, this);
      return this.multiplyUnsafe(cofactor);
    }
    isSmallOrder() {
      if (cofactor === _1n)
        return this.is0();
      return this.clearCofactor().is0();
    }
    toBytes(isCompressed = true) {
      abool(isCompressed, "isCompressed");
      this.assertValidity();
      return encodePoint(Point, this, isCompressed);
    }
    toHex(isCompressed = true) {
      return bytesToHex(this.toBytes(isCompressed));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
  }
  const normalize = (points) => normalizeZ(Point, points);
  const wnaf = new ScalarMultiplier(Point, randomBytes$12);
  if (wnaf.bits >= 6)
    Point.BASE.precompute(6);
  Object.freeze(Point.prototype);
  Object.freeze(Point);
  return Point;
}
function pprefix(hasEvenY) {
  return Uint8Array.of(hasEvenY ? 2 : 3);
}
function getWLengths(Fp2, Fn) {
  return {
    secretKey: Fn.BYTES,
    publicKey: 1 + Fp2.BYTES,
    publicKeyUncompressed: 1 + 2 * Fp2.BYTES,
    publicKeyHasPrefix: true,
    // Raw compact `(r || s)` signature width; DER and recovered signatures use
    // different lengths outside this helper.
    signature: 2 * Fn.BYTES
  };
}
const secp256k1_CURVE = {
  p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: BigInt(1),
  a: BigInt(0),
  b: BigInt(7),
  Gx: BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
  Gy: BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")
};
const secp256k1_ENDO = {
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
  basises: [
    [BigInt("0x3086d221a7d46bcde86c90e49284eb15"), -BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],
    [BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), BigInt("0x3086d221a7d46bcde86c90e49284eb15")]
  ]
};
const _0n = /* @__PURE__ */ BigInt(0);
const _2n = /* @__PURE__ */ BigInt(2);
function sqrtMod(y3) {
  const P2 = secp256k1_CURVE.p;
  const _3n2 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
  const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
  const b2 = y3 * y3 * y3 % P2;
  const b3 = b2 * b2 * y3 % P2;
  const b6 = pow2(b3, _3n2, P2) * b3 % P2;
  const b9 = pow2(b6, _3n2, P2) * b3 % P2;
  const b11 = pow2(b9, _2n, P2) * b2 % P2;
  const b22 = pow2(b11, _11n, P2) * b11 % P2;
  const b44 = pow2(b22, _22n, P2) * b22 % P2;
  const b88 = pow2(b44, _44n, P2) * b44 % P2;
  const b176 = pow2(b88, _88n, P2) * b88 % P2;
  const b220 = pow2(b176, _44n, P2) * b44 % P2;
  const b223 = pow2(b220, _3n2, P2) * b3 % P2;
  const t1 = pow2(b223, _23n, P2) * b22 % P2;
  const t2 = pow2(t1, _6n, P2) * b2 % P2;
  const root = pow2(t2, _2n, P2);
  if (!Fpk1.eql(Fpk1.sqr(root), y3))
    throw new Error("Cannot find square root");
  return root;
}
const Fpk1 = /* @__PURE__ */ Field(secp256k1_CURVE.p, { sqrt: sqrtMod });
const Pointk1 = /* @__PURE__ */ weierstrass(secp256k1_CURVE, {
  Fp: Fpk1,
  endo: secp256k1_ENDO
});
const TAGGED_HASH_PREFIXES = /* @__PURE__ */ Object.create(null);
function taggedHash(tag, ...messages) {
  let tagP = TAGGED_HASH_PREFIXES[tag];
  if (tagP === void 0) {
    const tagH = sha256$1(asciiToBytes(tag));
    tagP = concatBytes(tagH, tagH);
    TAGGED_HASH_PREFIXES[tag] = tagP;
  }
  return sha256$1(concatBytes(tagP, ...messages));
}
const pointToBytes = (point) => point.toBytes(true).slice(1);
const affineXToBytes = ({ x: x2 }) => Fpk1.toBytes(x2);
const hasEven = (y3) => !Fpk1.isOdd(y3);
function schnorrGetExtPubKey(priv) {
  const { Fn, BASE } = Pointk1;
  const d_ = Fn.fromBytes(abytes(priv, 32, "secretKey"));
  const p2 = BASE.multiply(d_);
  const affine = p2.toAffine();
  const scalar = hasEven(affine.y) ? d_ : Fn.neg(d_);
  return { scalar, bytes: affineXToBytes(affine) };
}
function lift_x(x2) {
  const Fp2 = Fpk1;
  if (!Fp2.isValidNot0(x2))
    throw new Error("invalid x: Fail if x ≥ p");
  const xx = Fp2.sqr(x2);
  const c2 = Fp2.add(Fp2.mulN(xx, x2), BigInt(7));
  let y3 = Fp2.sqrt(c2);
  if (!hasEven(y3))
    y3 = Fp2.neg(y3);
  const p2 = Pointk1.fromAffine({ x: x2, y: y3 });
  p2.assertValidity();
  return p2;
}
const num = bytesToNumberBE;
function challenge(...args) {
  return Pointk1.Fn.create(num(taggedHash("BIP0340/challenge", ...args)));
}
function schnorrGetPublicKey(secretKey) {
  return schnorrGetExtPubKey(secretKey).bytes;
}
function schnorrSign(message, secretKey, auxRand = randomBytes$1(32)) {
  const { Fn, BASE } = Pointk1;
  const m2 = copyBytes(abytes(message, void 0, "message"));
  const { bytes: px, scalar: d2 } = schnorrGetExtPubKey(secretKey);
  const a2 = abytes(auxRand, 32, "auxRand");
  const t2 = Fn.toBytes(d2 ^ num(taggedHash("BIP0340/aux", a2)));
  const rand = taggedHash("BIP0340/nonce", t2, px, m2);
  const k_ = Fn.create(num(rand));
  if (k_ === _0n)
    throw new Error("sign failed: k is zero");
  const p2 = BASE.multiply(k_);
  const affine = p2.toAffine();
  const k2 = hasEven(affine.y) ? k_ : Fn.neg(k_);
  const rx = affineXToBytes(affine);
  const e2 = challenge(rx, px, m2);
  const sig = new Uint8Array(64);
  sig.set(rx, 0);
  sig.set(Fn.toBytes(Fn.create(k2 + e2 * d2)), 32);
  if (!schnorrVerify(sig, m2, px))
    throw new Error("sign: Invalid signature produced");
  return sig;
}
function schnorrVerify(signature, message, publicKey) {
  const { Fp: Fp2, Fn, BASE } = Pointk1;
  const sig = abytes(signature, 64, "signature");
  const m2 = abytes(message, void 0, "message");
  const pub = abytes(publicKey, 32, "publicKey");
  try {
    const P2 = lift_x(num(pub));
    const rBytes = sig.subarray(0, 32);
    const r2 = num(rBytes);
    if (!Fp2.isValidNot0(r2))
      return false;
    const s2 = num(sig.subarray(32, 64));
    if (!Fn.isValidNot0(s2))
      return false;
    const e2 = challenge(rBytes, pointToBytes(P2), m2);
    const R2 = BASE.mulAddUnsafe(s2, P2, Fn.neg(e2));
    const { x: x2, y: y3 } = R2.toAffine();
    if (R2.is0() || !hasEven(y3) || !Fp2.eql(x2, r2))
      return false;
    return true;
  } catch (error) {
    return false;
  }
}
const schnorr = /* @__PURE__ */ (() => {
  const size = 32;
  const seedLength = 48;
  const randomSecretKey = (seed) => {
    seed = seed === void 0 ? randomBytes$1(seedLength) : seed;
    return mapHashToField(abytes(seed, seedLength, "seed"), secp256k1_CURVE.n);
  };
  return Object.freeze({
    keygen: createKeygen(randomSecretKey, schnorrGetPublicKey),
    getPublicKey: schnorrGetPublicKey,
    sign: schnorrSign,
    verify: schnorrVerify,
    Point: Pointk1,
    utils: Object.freeze({
      randomSecretKey,
      taggedHash,
      lift_x,
      pointToBytes
    }),
    lengths: Object.freeze({
      secretKey: size,
      publicKey: size,
      publicKeyHasPrefix: false,
      signature: size * 2,
      seed: seedLength
    })
  });
})();
function hasPublicProjectionShape(value) {
  const text = (record, keys) => keys.every((key) => typeof record[key] === "string");
  const counts = (record, keys) => keys.every((key) => Number.isSafeInteger(record[key]) && record[key] >= 0);
  const rows = (key, check2) => Array.isArray(value[key]) && value[key].every((row) => row !== null && typeof row === "object" && check2(row));
  const generated = /^OPENMAT-VENUE-[A-F0-9]{8}$/.test(value?.tournament_id ?? "") && Array.isArray(value.bouts) && [20, 60].includes(value.bouts.length) && Array.isArray(value.athletes) && value.athletes.length === value.bouts.length * 2 && value.bouts.every((bout) => /^mat-(?:[1-9]|1[0-9]|20)-bout-[123]$/.test(bout?.match_id ?? "")) && value.athletes.every((athlete) => /^mat-(?:[1-9]|1[0-9]|20)-(?:q[23]-)?(?:red|green)$/.test(athlete?.athlete_id ?? ""));
  return Boolean(value && !generated && text(value, ["tournament_id", "tournament_name", "rules_version", "publisher_pubkey_hex", "payload_sha256_hex", "signature_hex"]) && counts(value, ["snapshot_epoch", "control_sequence_head", "published_at_ms", "mat_count"]) && value.mat_count <= 20 && rows("athletes", (row) => text(row, ["athlete_id", "public_display_name", "team_id", "team_name", "weight_class_id"])) && rows("bouts", (row) => text(row, ["match_id", "weight_class_id", "round_label", "red_athlete_id", "green_athlete_id"]) && counts(row, ["bout_number", "lifecycle", "assigned_mat_id", "red_score", "green_score", "period_number", "clock_remaining_ms"]) && typeof row.clock_running === "boolean") && rows("mats", (row) => counts(row, ["mat_id", "authority_epoch"]) && text(row, ["status"])) && rows("standings", (row) => text(row, ["team_id", "team_name"]) && Number.isFinite(row.total_points)) && value.bracket_frozen_by_class && typeof value.bracket_frozen_by_class === "object" && value.ow_vote_tallies && typeof value.ow_vote_tallies === "object" && Object.values(value.ow_vote_tallies).every((count) => Number.isSafeInteger(count) && Number(count) >= 0));
}
const REGISTRY_MAX_AGE_MS = 12e4;
function registryBinding(r2) {
  return { tournament_id: r2.tournament_id, peer_pubkey_hex: r2.peer_pubkey_hex, role: r2.role };
}
function registryBody(r2) {
  const { signature: _signature, root_authorization: _authorization, ...body } = r2;
  return body;
}
function signVenueRecord(body, sign, rootAuthorization = "") {
  const record = { ...body, root_authorization: rootAuthorization, signature: "" };
  record.signature = toHex(sign(encodeDeterministicCbor(registryBody(record))));
  return record;
}
function verifyVenueRecord(raw, root, tournament, now = Date.now(), fresh = true) {
  try {
    const r2 = raw;
    if (!r2 || !/^[0-9a-f]{64}$/.test(r2.root_pubkey_hex) || !/^[0-9a-f]{64}$/.test(r2.peer_pubkey_hex) || !/^[0-9a-f]{128}$/.test(r2.signature) || root && root !== r2.root_pubkey_hex || tournament && tournament !== r2.tournament_id || typeof r2.tournament_id !== "string" || !r2.tournament_id || r2.tournament_id.length > 150 || !["PRIMARY", "BACKUP", "MAT_PEER"].includes(r2.role) || !Number.isSafeInteger(r2.authority_epoch) || r2.authority_epoch < 1 || !Number.isSafeInteger(r2.updated_at_ms) || r2.updated_at_ms > now + 3e4 || fresh && now - r2.updated_at_ms > REGISTRY_MAX_AGE_MS) return false;
    if (!Array.isArray(r2.assigned_mats) || r2.assigned_mats.length > 20 || r2.assigned_mats.some((m2) => !Number.isInteger(m2) || m2 < 1 || m2 > 20) || !Array.isArray(r2.active_rooms) || r2.active_rooms.length > 64 || r2.active_rooms.some((s2) => typeof s2 !== "string" || s2.length > 120)) return false;
    for (const [field, protocols, path] of [
      [r2.origins, ["http:", "https:"], "/"],
      [r2.nostr_relay_urls, ["ws:", "wss:"], "/api/openmat-nostr"],
      [r2.p2p_broker_urls, ["ws:", "wss:"], "/api/openmat-p2p"]
    ]) {
      if (!Array.isArray(field) || field.length > 8) return false;
      for (const value of field) {
        const u2 = new URL(value);
        if (!protocols.includes(u2.protocol) || u2.username || u2.password || u2.hash || u2.search || u2.pathname !== path) return false;
        if (path !== "/" && !r2.origins.some((o2) => {
          const origin = new URL(o2);
          return origin.host === u2.host && origin.protocol === "https:" === (u2.protocol === "wss:");
        })) return false;
      }
    }
    const rootKey = fromHex(r2.root_pubkey_hex);
    if (r2.peer_pubkey_hex !== r2.root_pubkey_hex && !verifyDomainBytes(DOMAIN_CONTROL, encodeDeterministicCbor(registryBinding(r2)), rootKey, fromHex(r2.root_authorization))) return false;
    return verifyDomainBytes(DOMAIN_CONTROL, encodeDeterministicCbor(registryBody(r2)), fromHex(r2.peer_pubkey_hex), fromHex(r2.signature));
  } catch {
    return false;
  }
}
async function discoverVenueRecords(origins, root, tournament) {
  const records = /* @__PURE__ */ new Map();
  await Promise.allSettled([...new Set(origins)].slice(0, 8).map(async (origin) => {
    const reply = await fetch(new URL("/api/openmat-registry", origin), { signal: AbortSignal.timeout(2e3), redirect: "error" });
    if (!reply.ok) return;
    const text = await reply.text();
    if (text.length > 262144) return;
    const body = JSON.parse(text);
    if (!Array.isArray(body.entries) || body.entries.length > 128) return;
    for (const r2 of body.entries) if (verifyVenueRecord(r2, root, tournament)) {
      const identity2 = `${r2.peer_pubkey_hex}:${r2.role}`;
      const old = records.get(identity2);
      if (!old || r2.authority_epoch > old.authority_epoch || r2.authority_epoch === old.authority_epoch && r2.updated_at_ms > old.updated_at_ms) records.set(identity2, r2);
    }
  }));
  return [...records.values()].sort((a2, b2) => (a2.role === "PRIMARY" ? -1 : 1) - (b2.role === "PRIMARY" ? -1 : 1));
}
function nfhsRulesBundle(rulesetId, minRestMs = 18e5, dailyCap = 6, twoDayCap = 10) {
  return {
    ruleset_id: rulesetId,
    takedown_points: 3,
    escape_points: 1,
    reversal_points: 2,
    near_fall_2_points: 2,
    near_fall_3_points: 3,
    near_fall_4_points: 4,
    technical_fall_margin: 15,
    period_1_duration_ms: 12e4,
    period_2_duration_ms: 12e4,
    period_3_duration_ms: 12e4,
    sv_duration_ms: 6e4,
    tb_period_duration_ms: 3e4,
    utb_duration_ms: 3e4,
    injury_allowance_ms: 9e4,
    blood_allowance_ms: 3e5,
    recovery_allowance_ms: 12e4,
    head_neck_cervical_allowance_ms: 3e5,
    min_rest_championship_ms: minRestMs,
    min_rest_consolation_ms: minRestMs,
    max_matches_per_day: dailyCap,
    max_matches_in_consecutive_days: twoDayCap
  };
}
function rulesBundleHash(bundle) {
  return sha256(encodeDeterministicCbor(bundle));
}
function verifyNativeTrace(lines, pinnedRootHex) {
  const root = fromHex(pinnedRootHex);
  if (root.length !== 32 || !lines.length) throw new Error("Native replay requires a pinned root and nonempty trace");
  const heads = /* @__PURE__ */ new Map();
  return lines.map((line) => {
    const require2 = (valid, message) => {
      if (!valid) throw new Error(`Native trace ${line.match}:${line.sequence}: ${message}`);
    };
    require2(bytesEqual(fromHex(line.root_public_key), root), "root key changed");
    const event = decodeEventWireCbor(fromHex(line.wire_cbor));
    const certificate = decodeDeterministicCbor(fromHex(line.certificate_cbor));
    const cert = {
      ...decodeDeterministicCbor(certificate.body),
      root_signature: certificate.signature
    };
    verifyDelegatedCertificate(cert, root, event.audit_time_ms, true);
    require2(
      cert.role === Role.MatOperator && (cert.allowed_scopes & ScopeBits.ScoreMat) !== 0 && cert.certificate_id === event.certificate_id && cert.subject_key_id === event.signer_key_id && cert.tournament_id === event.tournament_id && cert.allowed_stream_id === event.stream_id && cert.assignment_revision === event.assignment_revision && event.audit_time_ms >= cert.issued_at_ms,
      "certificate scope mismatch"
    );
    const body = encodeEventBodyCbor(event);
    require2(verifyDomainBytes(DOMAIN_EVENT, body, cert.subject_pubkey, event.signature), "signature mismatch");
    require2(bytesEqual(computeEventId(DOMAIN_EVENT, body, event.signature), event.event_id), "event ID mismatch");
    require2(bytesEqual(encodeEventWireCbor(event), fromHex(line.wire_cbor)), "wire round trip differs");
    const payload = event.payload;
    const command = payload.command;
    const state = payload.projection.state;
    require2(bytesEqual(encodeDeterministicCbor(command), fromHex(line.command_cbor)), "unsigned command differs");
    require2(bytesEqual(encodeDeterministicCbor(state), fromHex(line.state_cbor)), "unsigned state differs");
    require2(event.match_id === line.match && event.sequence === line.sequence && event.monotonic_time_ns === line.at_ms * 1e6, "trace identity/time mismatch");
    const key = `${event.tournament_id}:${event.match_id}`;
    let previous = heads.get(key);
    if (command.kind === 0) {
      require2(event.sequence === 1 && (!previous || event.assignment_revision > previous.assignment_revision), "assignment replay");
      previous = void 0;
    }
    require2(event.sequence === (previous?.sequence ?? 0) + 1 && bytesEqual(event.previous_event_hash, previous?.event_id ?? new Uint8Array(32)), "hash chain gap");
    require2(!previous || event.authority_epoch >= previous.authority_epoch, "authority epoch regressed");
    decodeDeterministicCbor(fromHex(line.command_cbor));
    decodeDeterministicCbor(fromHex(line.state_cbor));
    heads.set(key, event);
    return event;
  });
}
function verifyNativeCampaignTrace(lines, receiptHex, publisherHex) {
  const events = verifyNativeTrace(lines, publisherHex);
  const receipt = decodeDeterministicCbor(fromHex(receiptHex), { maxBytes: 1024 * 1024 });
  if (receipt.closed !== true) throw new Error("Native campaign did not close");
  return events.map((event, index) => {
    const line = lines[index];
    const envelope = decodeDeterministicCbor(fromHex(line.certificate_cbor));
    const certificate = decodeDeterministicCbor(envelope.body);
    const payload = event.payload;
    const projection = payload.projection;
    if (!projection || !projection.state || !Array.isArray(projection.timers)) throw new Error("Native projection missing");
    return {
      line,
      event,
      matId: Number(certificate.assigned_mat_id),
      projection,
      state: projection.state,
      timer: projection.timers[0]
    };
  });
}
const NFHS_WEIGHT_CLASSES = [
  "106",
  "113",
  "120",
  "126",
  "132",
  "138",
  "144",
  "150",
  "157",
  "165",
  "175",
  "190",
  "215",
  "285"
];
const ALL_SUPPORTED_WEIGHT_CLASSES = [
  "100",
  "106",
  "107",
  "113",
  "114",
  "120",
  "126",
  "132",
  "138",
  "144",
  "145",
  "150",
  "152",
  "157",
  "165",
  "175",
  "185",
  "190",
  "205",
  "215",
  "235",
  "285"
];
const CheckInStage = {
  Expected: 1,
  Arrived: 2,
  WeighInPending: 3,
  MedicalPending: 4,
  Eligible: 5,
  Withdrawn: 6,
  Scratched: 7
};
const CheckInStageLabels = {
  1: "Expected",
  2: "Arrived",
  3: "Weigh-In Pending",
  4: "Medical Pending",
  5: "Eligible",
  6: "Withdrawn",
  7: "Scratched"
};
const BracketFormat = {
  AutoByCount: "AUTO_BY_COUNT",
  BestOfThree: "BEST_OF_THREE",
  DoubleElimCrossover: "DOUBLE_ELIM_CROSSOVER",
  RoundRobinPool: "ROUND_ROBIN_POOL",
  PoolToBracket: "POOL_TO_BRACKET",
  TeamDual: "TEAM_DUAL",
  TrueSecondChallenge: "TRUE_SECOND_CHALLENGE"
};
const BoutLifecycle = {
  PendingUpstream: 1,
  Assigned: 2,
  Ready: 3,
  InProgress: 4,
  EndedLocal: 5,
  LocallyConfirmed: 6,
  ResultAccepted: 7,
  UnderProtestHold: 8,
  InvalidatedForCorrection: 9
};
const STORAGE_KEY_PRIVATE = "openmat_officials_channel_league_authority";
const AUTHORITY_KEY_STORAGE = "openmat_officials_authority_key";
const authorityOrigin = () => typeof location === "undefined" ? "http://127.0.0.1:5174" : location.origin;
class TournamentAuthorityEngine {
  keyPair;
  verifiers = /* @__PURE__ */ new Map();
  protocolJournal = [];
  knownProvisionHeads = /* @__PURE__ */ new Set();
  owVotes = /* @__PURE__ */ new Map();
  now;
  tournamentId = `OPENMAT-${randomUuid()}`;
  tournamentName = "New tournament";
  eventDate = "";
  venue = "";
  rulesVersion = "NFHS-2026-27-v1";
  growthAllowanceTenths = 0;
  consecutiveDayAllowanceTenths = 0;
  // +0.0 lbs day 1
  matCount = 4;
  snapshotEpoch = 1;
  controlSequenceHead = 1;
  requiredRestMs = 30 * 60 * 1e3;
  // 30-min mandatory NFHS rest
  dailyMatchCap = 6;
  // NFHS 6-match daily limit
  consecutiveTwoDayCap = 10;
  // NFHS 10-match consecutive two-day limit
  athletes = /* @__PURE__ */ new Map();
  privateWeighIns = /* @__PURE__ */ new Map();
  privateMedicals = /* @__PURE__ */ new Map();
  bouts = /* @__PURE__ */ new Map();
  mats = /* @__PURE__ */ new Map();
  revokedCertificateIds = /* @__PURE__ */ new Set();
  resultCorrections = [];
  bracketFrozenByClass = /* @__PURE__ */ new Map();
  nextBoutNumber = 101;
  roomRouter = new TwoPlaneVenueRoomRouter(4);
  overlayMesh = new OverlayMeshClient({ peerId: `official-${randomUuid()}` });
  get livePeerId() {
    return this.overlayMesh.peerId;
  }
  liveTransportError = "";
  liveOrigin = "";
  liveTournamentId = "";
  liveTransportRole = "";
  registryTimer = null;
  liveConsoleRole = "primary";
  liveTransportChain = Promise.resolve();
  registryChain = Promise.resolve();
  lastRegistryUpdatedAtMs = 0;
  onStateChanged;
  static DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL = "https://pureengineering.github.io/openmat";
  static DEFAULT_PUBLIC_OFFICIALS_WEB_BASE_URL = "https://pureengineering.github.io/openmat/officials";
  static DEFAULT_PUBLIC_NOSTR_RELAYS = [
    "wss://relay.damus.io",
    "wss://nos.lol",
    "wss://relay.primal.net"
  ];
  publicNostrRelays = [...TournamentAuthorityEngine.DEFAULT_PUBLIC_NOSTR_RELAYS];
  publicNostrRelayPublishingEnabled = false;
  linkedVenuePubkeyHex = "";
  lastNostrPublishedAtMs = 0;
  nostrRelayStatuses = /* @__PURE__ */ new Map();
  get activeVenueOrigin() {
    return this.liveOrigin || authorityOrigin();
  }
  get consoleRole() {
    return this.liveConsoleRole;
  }
  setConsoleRole(role) {
    this.liveConsoleRole = role;
    if (this.broadcastEnabled && typeof localStorage !== "undefined") {
      localStorage.setItem("openmat_officials_console_role", role);
    }
  }
  get rulesBundle() {
    return nfhsRulesBundle(this.rulesVersion, this.requiredRestMs, this.dailyMatchCap, this.consecutiveTwoDayCap);
  }
  get rulesHash() {
    return rulesBundleHash(this.rulesBundle);
  }
  async startLiveTransport(origin, role = this.liveConsoleRole) {
    const run = async () => {
      const tournamentId = this.tournamentId;
      const connectionChanged = this.liveTransportRole !== role || this.liveOrigin !== origin || this.liveTournamentId !== tournamentId;
      this.liveOrigin = origin;
      this.liveTournamentId = tournamentId;
      this.liveTransportRole = role;
      this.liveConsoleRole = role;
      if (connectionChanged) {
        this.overlayMesh.stopLiveRooms();
      }
      const join = async (roomId) => {
        if (this.overlayMesh.liveRooms.has(roomId)) return;
        let room;
        try {
          room = await this.overlayMesh.joinLiveRoom({
            origin,
            tournamentId,
            roomId,
            peerId: this.livePeerId,
            rootPublicKeyHex: this.publisherPublicKeyHex,
            publicKey: this.keyPair.publicKey,
            role: this.liveConsoleRole,
            sign: (bytes) => signDomainBytes(DOMAIN_CONTROL, bytes, this.keyPair.privateKey),
            onMembership: () => {
              this.syncVenueRoomRouter();
            },
            onError: (error) => {
              this.liveTransportError = error.message;
            },
            onMessage: (topic, bytes) => {
              if (topic === "control-state" && roomId === CONTROL_OFFICIALS_ROOM_ID) this.acceptControlSnapshot(bytes);
              if (topic === "signed-event" && roomId.startsWith("mat:")) {
                const event = decodeEventWireCbor(bytes);
                if (event.stream_id !== roomId) throw new Error("Cross-mat event rejected");
                this.acceptMatsideSignedEvent(bytes);
              }
            },
            onRpc: (operation, bytes) => {
              if (operation === "matside" && roomId.startsWith("mat:")) return this.handleMatsideRequest(bytes, roomId);
              if (operation === "projection" && roomId.startsWith("subtree:")) return new TextEncoder().encode(JSON.stringify(this.buildSignedPublicProjection()));
              if (operation === "ow-vote" && roomId.startsWith("subtree:")) {
                try {
                  const req = JSON.parse(new TextDecoder().decode(bytes));
                  const result = this.submitOwVote(req);
                  return new TextEncoder().encode(JSON.stringify({ ok: true, result, envelope: this.buildSignedPublicProjection() }));
                } catch (error) {
                  return new TextEncoder().encode(JSON.stringify({ ok: false, error: error instanceof Error ? error.message : String(error) }));
                }
              }
              if (operation === "scorekeeper-event" && (roomId.startsWith("subtree:") || roomId.startsWith("mat:"))) {
                try {
                  const result = this.acceptMatsideSignedEvent(bytes);
                  return new TextEncoder().encode(JSON.stringify({ ok: true, result, envelope: this.buildSignedPublicProjection() }));
                } catch (error) {
                  return new TextEncoder().encode(JSON.stringify({ ok: false, error: error instanceof Error ? error.message : String(error) }));
                }
              }
              if (operation === "control-sync" && roomId === CONTROL_OFFICIALS_ROOM_ID) return this.signedControlSnapshot();
              throw new Error("RPC forbidden in this room");
            }
          });
        } catch (error) {
          throw new Error(`Cannot join ${roomId}: ${String(error)}`);
        }
        if (roomId === CONTROL_OFFICIALS_ROOM_ID) {
          const peer = [...room.members.keys()].find((id) => id !== this.livePeerId);
          if (peer) this.acceptControlSnapshot(await room.request("control-sync", new Uint8Array(), peer));
        }
      };
      if (role === "primary" && typeof fetch !== "undefined" && typeof window !== "undefined") {
        await fetch(new URL("/api/openmat-live-projection", origin), {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-openmat-authority-override": "1" },
          body: JSON.stringify(this.buildSignedPublicProjection())
        }).catch(() => {
        });
      }
      await this.publishRegistry(origin);
      if (!this.registryTimer) this.registryTimer = setInterval(() => {
        if (this.liveOrigin) void this.publishRegistry(this.liveOrigin).catch((e2) => {
          this.liveTransportError = String(e2);
        });
      }, 15e3);
      await join(CONTROL_OFFICIALS_ROOM_ID);
      if (role !== "official") {
        for (let mat = 1; mat <= this.matCount; mat++) await join(`mat:${mat}`);
      }
      if (role === "primary") await join("subtree:venue-super-seed");
    };
    const next = this.liveTransportChain.then(run, run);
    this.liveTransportChain = next.catch(() => {
    });
    return next;
  }
  async publishRegistry(origin) {
    const run = async () => {
      const ws = (path) => {
        const u2 = new URL(path, origin);
        u2.protocol = u2.protocol === "https:" ? "wss:" : "ws:";
        return u2.href;
      };
      const activeRooms = [CONTROL_OFFICIALS_ROOM_ID, ...Array.from({ length: this.matCount }, (_2, i2) => `mat:${i2 + 1}`)];
      if (this.liveConsoleRole === "primary") activeRooms.push("subtree:venue-super-seed");
      this.lastRegistryUpdatedAtMs = Math.max(this.now(), this.lastRegistryUpdatedAtMs + 1);
      const record = signVenueRecord({
        tournament_id: this.tournamentId,
        root_pubkey_hex: this.publisherPublicKeyHex,
        peer_pubkey_hex: this.publisherPublicKeyHex,
        authority_epoch: Math.max(1, ...[...this.mats.values()].map((m2) => m2.authority_epoch)),
        role: this.liveConsoleRole === "standby" ? "BACKUP" : "PRIMARY",
        origins: [new URL(origin).origin],
        nostr_relay_urls: [ws("/api/openmat-nostr")],
        p2p_broker_urls: [ws("/api/openmat-p2p")],
        active_rooms: activeRooms,
        assigned_mats: [],
        updated_at_ms: this.lastRegistryUpdatedAtMs
      }, (bytes) => signDomainBytes(DOMAIN_CONTROL, bytes, this.keyPair.privateKey));
      const response = await fetch(new URL("/api/openmat-registry", origin), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(record), signal: AbortSignal.timeout(3e3) });
      if (!response.ok) throw new Error(`Registry publication failed: ${response.status} ${await response.text()}`);
    };
    const next = this.registryChain.then(run, run);
    this.registryChain = next.catch(() => {
    });
    return next;
  }
  stopLiveTransport() {
    if (this.registryTimer) clearInterval(this.registryTimer);
    this.registryTimer = null;
    this.liveOrigin = "";
    this.overlayMesh.stopLiveRooms();
    this.syncVenueRoomRouter();
  }
  signedControlSnapshot() {
    const state = this.storageState();
    const body = encodePacket({ tournament_id: this.tournamentId, sequence: this.controlSequenceHead, state: JSON.stringify(state) });
    return encodePacket({ body, signature: signDomainBytes(DOMAIN_CONTROL, body, this.keyPair.privateKey) });
  }
  acceptControlSnapshot(bytes) {
    const envelope = packet(bytes);
    const body = envelope.body;
    if (!verifyDomainBytes(DOMAIN_CONTROL, body, this.keyPair.publicKey, envelope.signature)) throw new Error("Invalid control snapshot");
    const value = packet(body);
    if (value.tournament_id !== this.tournamentId || Number(value.sequence) <= this.controlSequenceHead) return;
    if (typeof localStorage === "undefined") throw new Error("Officials control sync requires durable storage");
    localStorage.setItem(STORAGE_KEY_PRIVATE, String(value.state));
    this.loadFromStorage(true);
    this.syncVenueRoomRouter();
    this.onStateChanged?.();
  }
  handleMatsideRequest(wire, expectedRoom, receivedAtMs = this.now()) {
    const envelope = packet(wire);
    const body = envelope.body;
    const request = packet(body);
    const matId = Number(request.mat_number);
    const mat = this.mats.get(matId);
    if (!mat || request.tournament_id !== this.tournamentId || expectedRoom && expectedRoom !== `mat:${matId}` || !(request.nonce instanceof Uint8Array) || request.nonce.length !== 32 || !(request.device_public_key instanceof Uint8Array) || !bytesEqual(request.device_public_key, fromHex(mat.device_pubkey_hex)) || request.device_key_id !== mat.android_device_id || !verifyDomainBytes(DOMAIN_CONTROL, body, request.device_public_key, envelope.signature)) throw new Error("Unauthorized matside request");
    const cert = decodeCertificateFromCborHex(mat.cert_cbor_hex);
    if (this.revokedCertificateIds.has(cert.certificate_id)) throw new Error("Certificate revoked");
    const common = { nonce: request.nonce, tournament_id: this.tournamentId, mat_number: matId };
    let reply;
    if (request.operation === "provision") {
      verifyDelegatedCertificate(cert, this.keyPair.publicKey, receivedAtMs, false);
      const queue = [...this.bouts.values()].filter((b2) => b2.assigned_mat_id === matId && b2.red_athlete_id && b2.green_athlete_id && [BoutLifecycle.Assigned, BoutLifecycle.Ready, BoutLifecycle.InProgress, BoutLifecycle.EndedLocal, BoutLifecycle.LocallyConfirmed, BoutLifecycle.ResultAccepted].includes(b2.lifecycle)).sort((a2, b2) => a2.bout_number - b2.bout_number).map((b2) => ({
        match_id: b2.match_id,
        bout_number: String(b2.bout_number),
        weight_class: b2.weight_class_id,
        red_name: this.athletes.get(b2.red_athlete_id).public_display_name,
        red_school: this.athletes.get(b2.red_athlete_id).team_name,
        green_name: this.athletes.get(b2.green_athlete_id).public_display_name,
        green_school: this.athletes.get(b2.green_athlete_id).team_name,
        assignment_revision: b2.assignment_revision
      }));
      if (!queue.length) throw new Error("No director-approved bouts assigned to this mat");
      const controlHead = sha256(encodePacket({ certificate: cert.certificate_id, rules_hash: this.rulesHash, queue }));
      const headHex = toHex(controlHead);
      const headKey = `${matId}:${headHex}`;
      if (!this.knownProvisionHeads.has(headKey)) {
        this.verifiers.get(matId).markControlHeadKnown(controlHead);
        this.knownProvisionHeads.add(headKey);
        this.protocolJournal.push({ matId, controlHeadHex: headHex });
        this.publishAndSave();
      }
      const streamHead = this.getMatsideStreamHead(matId);
      reply = {
        ...common,
        revision: cert.assignment_revision,
        certificate: cert,
        control_head: controlHead,
        rules: this.rulesBundle,
        rules_hash: this.rulesHash,
        queue,
        stream_head_sequence: streamHead.sequence,
        stream_head_hash: fromHex(streamHead.hashHex)
      };
    } else if (request.operation === "event" && request.event instanceof Uint8Array) {
      const event = decodeEventWireCbor(request.event);
      if (event.stream_id !== `mat:${matId}`) throw new Error("Cross-mat event");
      this.acceptMatsideSignedEvent(request.event, receivedAtMs);
      reply = { ...common, match_id: event.match_id, sequence: event.sequence, event_id: event.event_id };
    } else if (request.operation === "events" && Array.isArray(request.events)) {
      if (request.events.length === 0 || request.events.length > 128) throw new Error("Invalid matside event batch");
      const prevSeeding = this.isSeeding;
      this.isSeeding = true;
      try {
        for (const item of request.events) {
          if (!(item instanceof Uint8Array)) throw new Error("Invalid matside event bytes");
          const event = decodeEventWireCbor(item);
          if (event.stream_id !== `mat:${matId}`) throw new Error("Cross-mat event");
          this.acceptMatsideSignedEvent(item, receivedAtMs);
        }
      } finally {
        this.isSeeding = prevSeeding;
      }
      this.publishAndSave();
      reply = { ...common, accepted_sequence: this.getMatsideStreamHead(matId).sequence };
    } else throw new Error("Unsupported matside operation");
    if (request.operation === "provision") reply.registry_authorization = toHex(signDomainBytes(
      DOMAIN_CONTROL,
      encodePacket({ tournament_id: this.tournamentId, peer_pubkey_hex: toHex(request.device_public_key), role: "MAT_PEER" }),
      this.keyPair.privateKey
    ));
    const encoded = encodePacket(reply);
    return encodePacket({ body: encoded, signature: signDomainBytes(DOMAIN_CONTROL, encoded, this.keyPair.privateKey) });
  }
  broadcastEnabled;
  isSeeding = false;
  broadcastChannel;
  constructor(options) {
    const epochMs = Date.now(), monotonicMs = performance.now();
    this.now = options?.now ?? (() => epochMs + Math.floor(performance.now() - monotonicMs));
    let seedHex = options?.broadcastEnabled !== false && typeof localStorage !== "undefined" ? localStorage.getItem(AUTHORITY_KEY_STORAGE) : null;
    if (!seedHex) {
      seedHex = toHex(crypto.getRandomValues(new Uint8Array(32)));
      if (options?.broadcastEnabled !== false && typeof localStorage !== "undefined") {
        localStorage.setItem(AUTHORITY_KEY_STORAGE, seedHex);
      }
    }
    this.keyPair = deriveEd25519KeyPairFromSeed("officials-authority", fromHex(seedHex));
    const storedRole = options?.broadcastEnabled !== false && typeof localStorage !== "undefined" ? localStorage.getItem("openmat_officials_console_role") : null;
    if (storedRole === "standby" || storedRole === "official" || storedRole === "primary") {
      this.liveConsoleRole = storedRole;
    }
    this.broadcastEnabled = options?.broadcastEnabled ?? true;
    this.broadcastChannel = this.broadcastEnabled && typeof window !== "undefined" && typeof BroadcastChannel !== "undefined" ? new BroadcastChannel("openmat-live-sync") : null;
    if (!this.broadcastEnabled || !this.loadFromStorage()) {
      this.isSeeding = true;
      try {
        this.initializeTournamentRegistrationManifest();
        this.syncVenueRoomRouter();
      } finally {
        this.isSeeding = false;
      }
      if (this.broadcastEnabled) {
        this.saveToStorage();
      }
    }
    this.syncVenueRoomRouter();
  }
  get publisherPublicKeyHex() {
    return toHex(this.keyPair.publicKey);
  }
  resetTournamentState() {
    this.athletes.clear();
    this.privateWeighIns.clear();
    this.privateMedicals.clear();
    this.bouts.clear();
    this.mats.clear();
    this.revokedCertificateIds.clear();
    this.verifiers.clear();
    this.protocolJournal = [];
    this.resultCorrections = [];
    this.knownProvisionHeads.clear();
    this.owVotes.clear();
    this.bracketFrozenByClass.clear();
    this.nextBoutNumber = 101;
    this.initializeTournamentRegistrationManifest();
    this.syncVenueRoomRouter();
    this.publishAndSave(true);
  }
  syncVenueRoomRouter() {
    const router = new TwoPlaneVenueRoomRouter(this.matCount);
    for (const [roomId, room] of this.overlayMesh.liveRooms) {
      for (const [peerId, member] of room.members) {
        if (roomId === CONTROL_OFFICIALS_ROOM_ID) router.joinControlOfficialsRoom(
          peerId,
          member.role === "primary" ? OfficialConsoleRole.DirectorPrimary : member.role === "standby" ? OfficialConsoleRole.DirectorStandby : OfficialConsoleRole.BoutDispatchClerk
        );
        else if (roomId.startsWith("mat:")) router.joinMatRoom(
          Number(roomId.slice(4)),
          peerId,
          member.role === "primary" ? MatRoomMemberRole.HeadTablePrimary : member.role === "standby" ? MatRoomMemberRole.HeadTableStandby : MatRoomMemberRole.MatPrimaryScorekeeper
        );
        else router.joinSubtreeRoom(roomId.slice(8), peerId, room.lastPingRttMs ?? 0);
      }
    }
    this.roomRouter = router;
    return router.computeAccountingSummary();
  }
  configureMatCount(matCount) {
    if (!Number.isInteger(matCount) || matCount < 1 || matCount > MAX_TOURNAMENT_MATS) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        `matCount must be between 1 and ${MAX_TOURNAMENT_MATS}`
      );
    }
    this.matCount = matCount;
    if (this.liveOrigin) void this.startLiveTransport(this.liveOrigin).catch((e2) => {
      this.liveTransportError = String(e2);
    });
    for (let matId = 1; matId <= this.matCount; matId++) {
      if (!this.mats.has(matId)) this.mats.set(matId, this.unprovisionedMat(matId));
    }
    for (const existingMatId of Array.from(this.mats.keys())) {
      if (existingMatId > this.matCount) {
        this.mats.delete(existingMatId);
      }
    }
    const summary = this.syncVenueRoomRouter();
    this.publishAndSave();
    return summary;
  }
  getVenueRoomTopologySummary() {
    return this.roomRouter.computeAccountingSummary();
  }
  activateStandbyDirectorFailover() {
    const newLeader = this.roomRouter.activateStandbyHeadTableFailover();
    if (newLeader === this.livePeerId && this.liveOrigin) {
      this.liveConsoleRole = "primary";
      void this.startLiveTransport(this.liveOrigin).catch((e2) => {
        this.liveTransportError = String(e2);
      });
    }
    this.publishAndSave();
    return newLeader;
  }
  unprovisionedMat(matId) {
    return {
      mat_id: matId,
      android_device_id: "",
      operator_name: "",
      authority_epoch: 1,
      device_pubkey_hex: "",
      certificate_id: "",
      allowed_scopes: 0,
      issued_at_ms: 0,
      expires_at_ms: 0,
      cert_cbor_hex: "",
      scorekeeper_qr_uri: "",
      status: "HANDOFF_STOPPED",
      last_heartbeat_ms: 0
    };
  }
  buildSignedMatDelegation(matId, androidDeviceId, operatorName, authorityEpoch, devicePubkeyHex, issuedAtMs = this.now()) {
    const expiresAtMs = issuedAtMs + 24 * 60 * 60 * 1e3;
    const certId = `CERT-MAT-${matId}-EPOCH-${authorityEpoch}`;
    const allowedScopes = ScopeBits.ReadPublic | ScopeBits.ScoreMat | ScopeBits.ConfirmLocalResult;
    const cert = issueDelegatedCertificate(
      {
        certificate_id: certId,
        tournament_id: this.tournamentId,
        subject_key_id: androidDeviceId,
        subject_pubkey: fromHex(devicePubkeyHex),
        role: Role.MatOperator,
        allowed_scopes: allowedScopes,
        allowed_stream_id: `mat:${matId}`,
        assigned_mat_id: matId,
        assignment_revision: authorityEpoch,
        authority_generation: authorityEpoch,
        issued_at_ms: issuedAtMs,
        expires_at_ms: expiresAtMs,
        allow_in_progress_completion: true
      },
      this.keyPair.privateKey
    );
    const certCborHex = encodeCertificateToCborHex(cert);
    const qrUri = encodeScorekeeperCertQrUri({
      tournament_id: this.tournamentId,
      tournament_name: this.tournamentName,
      publisher_pubkey_hex: this.publisherPublicKeyHex,
      relay_origin: authorityOrigin(),
      cert_cbor_hex: certCborHex
    });
    return {
      mat_id: matId,
      android_device_id: androidDeviceId,
      operator_name: operatorName,
      authority_epoch: authorityEpoch,
      device_pubkey_hex: devicePubkeyHex,
      certificate_id: certId,
      allowed_scopes: allowedScopes,
      issued_at_ms: issuedAtMs,
      expires_at_ms: expiresAtMs,
      cert_cbor_hex: certCborHex,
      scorekeeper_qr_uri: qrUri,
      status: "ONLINE_SYNCED",
      last_heartbeat_ms: issuedAtMs
    };
  }
  initializeTournamentRegistrationManifest() {
    for (let matId = 1; matId <= this.matCount; matId++) {
      this.mats.set(matId, this.unprovisionedMat(matId));
    }
  }
  configureTournament(input) {
    const name = input.name.trim();
    const date = input.eventDate.trim();
    const venue = input.venue.trim();
    if (!name || !venue || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(`${date}T00:00:00Z`)) || (/* @__PURE__ */ new Date(`${date}T00:00:00Z`)).toISOString().slice(0, 10) !== date) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "Enter the event name, date and venue");
    }
    this.tournamentName = name;
    this.eventDate = date;
    this.venue = venue;
    this.publishAndSave();
  }
  registerMatDelegation(mat, journal = true) {
    const cert = decodeCertificateFromCborHex(mat.cert_cbor_hex);
    let verifier = this.verifiers.get(mat.mat_id);
    if (!verifier) {
      verifier = new StreamVerifier(this.keyPair.publicKey);
      this.verifiers.set(mat.mat_id, verifier);
    }
    const stream = cert.allowed_stream_id;
    if (mat.authority_epoch > verifier.activeEpoch(stream)) {
      const head = verifier.headHash(stream);
      verifier.applyAuthorityTransfer({
        transfer_id: mat.certificate_id,
        tournament_id: this.tournamentId,
        stream_id: stream,
        match_id: "",
        reason: TransferReason.NormalDeviceReplacement,
        director_generation: mat.authority_epoch,
        assignment_revision: cert.assignment_revision,
        old_epoch: verifier.activeEpoch(stream),
        old_last_sequence: verifier.headSequence(stream),
        old_head_hash: head,
        new_epoch: mat.authority_epoch,
        new_device_key_id: cert.subject_key_id,
        new_certificate_id: cert.certificate_id,
        seed_state_hash: head,
        unknown_tail_resolution: "Previous device stopped by official",
        old_operator_physically_stopped: true,
        timers_initialized_stopped: true,
        director_signature: cert.root_signature
      }, head);
    }
    verifier.registerCertificate(cert);
    if (journal) this.protocolJournal.push({ mat: structuredClone(mat) });
  }
  issueMatBackupDisplayCertificate(matId, deviceId, publicKeyHex) {
    const mat = this.mats.get(matId);
    if (!mat || !deviceId || !/^[a-f0-9]{64}$/i.test(publicKeyHex)) throw new Error("A configured mat and device public key are required");
    return issueDelegatedCertificate({
      certificate_id: `display-${randomUuid()}`,
      tournament_id: this.tournamentId,
      subject_key_id: deviceId,
      subject_pubkey: fromHex(publicKeyHex),
      role: Role.RelayOperator,
      allowed_scopes: ScopeBits.ReadPublic | ScopeBits.RelaySignedBytes,
      allowed_stream_id: `mat:${matId}`,
      assigned_mat_id: matId,
      assignment_revision: mat.authority_epoch,
      authority_generation: mat.authority_epoch,
      issued_at_ms: this.now(),
      expires_at_ms: this.now() + 24 * 60 * 60 * 1e3,
      allow_in_progress_completion: false
    }, this.keyPair.privateKey);
  }
  getMatsideStreamHead(matId) {
    const verifier = this.verifiers.get(matId);
    const stream = `mat:${matId}`;
    return {
      sequence: verifier?.headSequence(stream) ?? 0,
      hashHex: toHex(verifier?.headHash(stream) ?? new Uint8Array(32))
    };
  }
  acceptMatsideSignedEvent(wireBytes, receivedAtMs = this.now()) {
    const event = decodeEventWireCbor(wireBytes);
    const bout = this.bouts.get(event.match_id);
    const mat = bout && this.mats.get(bout.assigned_mat_id);
    if (!bout || !mat || event.tournament_id !== this.tournamentId || event.stream_id !== `mat:${mat.mat_id}` || event.certificate_id !== mat.certificate_id || event.authority_epoch !== mat.authority_epoch || event.assignment_revision !== bout.assignment_revision || !bytesEqual(event.rules_hash, this.rulesHash)) {
      throw new OpenMatProtocolError(ErrorCode.UnauthorizedScope, "Event does not match the current tournament, mat, assignment or rules");
    }
    if (this.revokedCertificateIds.has(event.certificate_id)) {
      throw new OpenMatProtocolError(ErrorCode.CertificateRevoked, "Matside certificate revoked");
    }
    const cert = decodeCertificateFromCborHex(mat.cert_cbor_hex);
    if (cert.assigned_mat_id !== mat.mat_id || cert.role !== Role.MatOperator || receivedAtMs < cert.issued_at_ms) throw new Error("Invalid matside delegation");
    const decoded = event.payload instanceof Uint8Array ? decodeDeterministicCbor(event.payload) : event.payload;
    if (!decoded || typeof decoded !== "object" || Array.isArray(decoded) || decoded instanceof Uint8Array || decoded instanceof Map) {
      throw new Error("Matside payload must be a CBOR map");
    }
    const payload = decoded;
    const nativeTypes = [
      "MATCH_SCORING_ACTION",
      "MATCH_SCORE_CORRECTION",
      "MATCH_ENDING_ACTION",
      "MATCH_CLOCK_TOGGLE",
      "MATCH_PERIOD_CHOICE",
      "MATCH_ADVANCE_PERIOD",
      "MATCH_DISK_TOSS",
      "MATCH_CONFIRM_RESULT",
      "MATCH_PERIOD_EXPIRED",
      "MATCH_UNDO_LAST_ACTION",
      "MATCH_CLOCK_CORRECTION",
      "MATCH_MEDICAL_DECISION",
      "MATCH_FINALIZE_TECH_FALL",
      "MATCH_POSITION_CHANGE"
    ];
    const native = nativeTypes.includes(event.event_type);
    const state = native ? payload.public_state : payload;
    if (!state || typeof state !== "object" || Array.isArray(state) || state instanceof Uint8Array) throw new Error("Missing signed match state");
    const command = native ? event.event_type : payload.command_type ?? event.event_type;
    const supported = [
      "START_BOUT_CLOCK",
      "STOP_BOUT_CLOCK",
      "CLOCK_STATE",
      "SCORE_ACTION_RECORDED",
      "TAKEDOWN_3",
      "ESCAPE_1",
      "REVERSAL_2",
      "NEARFALL_2",
      "NEARFALL_3",
      "NEARFALL_4",
      "STALL_WARN",
      "PIN_FALL",
      "CONFIRM_RESULT"
    ];
    if (typeof command !== "string" || ![...supported, ...nativeTypes].includes(command) || command !== event.event_type) {
      throw new Error("Unsupported or inconsistent matside command");
    }
    const uint = (name, fallback, max) => {
      const value = state[name] ?? fallback;
      if (typeof value !== "number" || !Number.isSafeInteger(value) || value < 0 || value > max) {
        throw new Error(`Invalid matside ${name}`);
      }
      return value;
    };
    const red = uint("red_score", bout.red_score, 1e3);
    const green = uint("green_score", bout.green_score, 1e3);
    const period = uint("period", bout.period_number, 10);
    const remaining = uint("clock_remaining_ms", bout.clock_remaining_ms, 12e4);
    if (period === 0 || "clock_running" in state && typeof state.clock_running !== "boolean") throw new Error("Invalid clock state");
    const confirming = command === "CONFIRM_RESULT" || command === "MATCH_CONFIRM_RESULT";
    const winType = String(state.win_type ?? "");
    const winner = native ? state.winner_corner === "RED" ? bout.red_athlete_id : state.winner_corner === "GREEN" ? bout.green_athlete_id : "" : String(payload.winner_athlete_id ?? "");
    if (confirming) this.validateConfirmedResult(bout, winner, winType, red, green);
    const verifier = this.verifiers.get(mat.mat_id);
    if (!verifier) throw new Error("Mat has no registered verifier");
    const alreadyAccepted = this.protocolJournal.some((entry) => entry.wireHex === toHex(wireBytes));
    if (!alreadyAccepted) {
      if (![BoutLifecycle.Ready, BoutLifecycle.InProgress, BoutLifecycle.EndedLocal, BoutLifecycle.LocallyConfirmed].includes(bout.lifecycle)) {
        throw new Error("Bout is not ready to accept matside events");
      }
      if (bout.lifecycle === BoutLifecycle.Ready) this.validateBoutSafetyGates(bout, receivedAtMs);
    }
    const outcome = verifier.verifyAndAccept(
      event,
      DOMAIN_EVENT,
      ScopeBits.ScoreMat | (confirming ? ScopeBits.ConfirmLocalResult : 0),
      receivedAtMs,
      bout.lifecycle === BoutLifecycle.InProgress || bout.lifecycle === BoutLifecycle.EndedLocal
    );
    const result = { outcome, eventIdHex: toHex(event.event_id), matchId: bout.match_id };
    if (outcome === ApplyOutcome.DuplicateIgnored) {
      this.saveToStorage();
      return result;
    }
    if (outcome !== ApplyOutcome.Applied) throw new OpenMatProtocolError(ErrorCode.SequenceGap, `Matside event not applied: ${outcome}`);
    this.protocolJournal.push({ wireHex: toHex(wireBytes), atMs: receivedAtMs });
    if (confirming) {
      this.recordMatsideConfirmedResult(bout.match_id, winner, winType, red, green, event.authority_epoch, bout.completed_at_ms || receivedAtMs);
    } else {
      bout.red_score = red;
      bout.green_score = green;
      bout.period_number = period;
      bout.clock_remaining_ms = remaining;
      bout.clock_running = typeof state.clock_running === "boolean" ? state.clock_running : command !== "STOP_BOUT_CLOCK" && command !== "PIN_FALL";
      bout.lifecycle = command === "PIN_FALL" || state.bout_ended === true ? BoutLifecycle.EndedLocal : BoutLifecycle.InProgress;
      bout.completed_at_ms = bout.lifecycle === BoutLifecycle.EndedLocal ? bout.completed_at_ms || receivedAtMs : 0;
      this.publishAndSave();
    }
    return result;
  }
  submitOwVote(input) {
    if (input.tournamentId !== this.tournamentId || !/^[a-zA-Z0-9_-]{16,128}$/.test(input.voterId) || !this.athletes.has(input.athleteId)) throw new Error("Invalid tournament, voter identifier or athlete");
    if (this.owVotes.get(input.voterId) !== input.athleteId) {
      this.owVotes.set(input.voterId, input.athleteId);
      this.publishAndSave();
    }
    return this.getOwVoteTallies();
  }
  getOwVoteTallies() {
    const tallies = {};
    for (const athleteId of this.owVotes.values()) tallies[athleteId] = (tallies[athleteId] ?? 0) + 1;
    return tallies;
  }
  signRelayReceipt(requestId, ok, result) {
    const body = { requestId, ok, result };
    return { ...body, signatureHex: toHex(signDomainBytes(
      DOMAIN_CONTROL,
      encodeDeterministicCbor(body),
      this.keyPair.privateKey
    )) };
  }
  // ============================================================================
  // 1. Check-In & Opaque QR Lookup (REQ-CHK-01..03)
  // ============================================================================
  registerAthlete(input) {
    const cleanName = input.name.trim();
    if (!cleanName) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "Athlete name is required");
    }
    const cleanDivision = (input.divisionId ?? "VARSITY").trim().toUpperCase() || "VARSITY";
    const id = input.athleteId?.trim() || `ATH-${randomUuid()}`;
    if (this.athletes.has(id)) throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "Athlete ID is already registered");
    if (!input.weightClassId.trim() || this.isBracketFrozen(input.weightClassId, cleanDivision)) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "Select an open weight class before adding wrestlers");
    }
    const passHash = toHex(crypto.getRandomValues(new Uint8Array(16)));
    const cleanFloId = (input.flowrestlingId ?? "").trim();
    const record = {
      athlete_id: id,
      opaque_pass_token: `PASS-${input.weightClassId}-${passHash}`,
      public_display_name: cleanName,
      team_id: input.teamId.trim().toUpperCase() || "IND",
      team_name: input.teamName.trim() || "Independent",
      division_id: cleanDivision,
      weight_class_id: input.weightClassId,
      seed_rank: Math.max(1, Math.floor(input.seedRank || 1)),
      flowrestling_id: cleanFloId,
      check_in_stage: CheckInStage.Arrived,
      weigh_in_eligible: false,
      medically_cleared: false,
      matches_wrestled_today: 0,
      prior_day_matches: Math.max(0, Math.floor(input.priorDayMatches ?? 0)),
      last_bout_ended_ms: 0,
      updated_at_ms: this.now()
    };
    this.athletes.set(id, record);
    this.publishAndSave();
    return record;
  }
  static parseRosterCsv(text) {
    const rows = [];
    let row = [];
    let field = "";
    let quoted = false;
    let closedQuote = false;
    const fail = () => {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "Invalid quoted field in roster CSV");
    };
    for (let i2 = 0; i2 <= text.length; i2++) {
      const ch = i2 === text.length ? "\n" : text[i2];
      if (!quoted && !row.length && !field.trim() && ch === "#") {
        while (i2 < text.length && text[i2] !== "\n") i2++;
        field = "";
        continue;
      }
      if (quoted) {
        if (i2 === text.length) fail();
        if (ch === '"') {
          if (text[i2 + 1] === '"') {
            field += '"';
            i2++;
          } else {
            quoted = false;
            closedQuote = true;
          }
        } else field += ch;
      } else if (ch === "," || ch === "\n" || ch === "\r") {
        row.push(field.trim());
        field = "";
        closedQuote = false;
        if (ch !== ",") {
          if (row.some((value) => value.length > 0)) rows.push(row);
          row = [];
          if (ch === "\r" && text[i2 + 1] === "\n") i2++;
        }
      } else if (ch === '"') {
        if (field.trim() || closedQuote) fail();
        field = "";
        quoted = true;
      } else {
        if (closedQuote && ch.trim()) fail();
        field += ch;
      }
    }
    return rows;
  }
  static normalizeCsvHeaderName(raw) {
    return raw.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  }
  static deriveTeamCodeFromSchool(schoolName) {
    const cleaned = schoolName.trim();
    if (!cleaned) return "";
    const words = cleaned.replace(/[^A-Za-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
    if (words.length === 1) {
      return words[0].slice(0, 6).toUpperCase();
    }
    const initials = words.map((w2) => w2[0].toUpperCase()).join("");
    return (initials.length >= 2 ? initials.slice(0, 6) : cleaned.replace(/[^A-Za-z0-9]/g, "").slice(0, 6)).toUpperCase();
  }
  static deriveAthleteIdFromFields(divisionId, weightClassId, teamId, fullName) {
    const slug = fullName.trim().toUpperCase().replace(/[^A-Z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 28);
    const cleanTeam = teamId.replace(/[^A-Z0-9]+/g, "").slice(0, 8) || "IND";
    const cleanDiv = (divisionId || "VARSITY").replace(/[^A-Z0-9]+/g, "").slice(0, 8);
    const cleanWc = weightClassId.replace(/[^A-Z0-9]+/g, "").slice(0, 6);
    return `ATH-${cleanDiv}-${cleanWc}-${cleanTeam}-${slug || "WRESTLER"}`;
  }
  static escapeCsvCell(val) {
    const str = val === void 0 || val === null ? "" : String(val);
    if (/[",\r\n]/.test(str) || str.startsWith("#")) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  }
  exportRosterTemplateCsv() {
    const lines = [
      "# OpenMat Tournament Roster & Full Backup Template (REQ-DATA-04, REQ-WGT-07)",
      "# Fill out one row per wrestler. Lines starting with '#' are ignored on spreadsheet import.",
      "#",
      "# COLUMN GUIDE (You can use this full template OR a simple coach spreadsheet with columns:",
      "#   first_name, last_name, school_name, team_code, division, weight_class_lbs, actual_weight_lbs, seed_rank, grade, flowrestling_id):",
      "#   - first_name / last_name (or public_display_name): Wrestler First & Last Name (e.g. Jordan, Rivera)",
      "#   - school_name / team_name: High School or Club Name (e.g. Santa Barbara High School)",
      "#   - team_id / team_code: Short 2-6 letter school/team abbreviation (e.g. SBHS)",
      "#   - division_id: VARSITY, JV, BOYS, GIRLS, U16, U18, or NOVICE (defaults to VARSITY)",
      "#   - weight_class_id / weight_lbs: NFHS Weight Class in lbs (e.g. 106, 113, 120, 126, 132, 138, 144, 150, 157, 165, 175, 190, 215, 285)",
      "#   - actual_weight_lbs: Measured scale weight in lbs (e.g. 131.4) to auto-record private scale weigh-in",
      "#   - seed_rank: Seeding rank in weight class (1 = #1 seed, 2 = #2 seed, etc.)",
      "#   - check_in_stage / weigh_in_eligible / medically_cleared / medical_decision / bracket_frozen / bracket_format:",
      "#     Full tournament state columns enabling 1-click disaster recovery & bracket rebuild from a saved CSV.",
      "#",
      "# EXAMPLE ROWS (remove leading # to import, or add your own rows below the header):",
      "# ATH-132-01,Jordan Rivera,SBHS,Santa Barbara High School,VARSITY,132,1,FLO-88413201,Jordan,Rivera,Santa Barbara High School,132,131.4,12,ELIGIBLE,true,true,CLEARED,Dr. Smith,STATION-1,OHAUS-1,true,DOUBLE_ELIM_CROSSOVER,PASS-132-DEMO01",
      "# ATH-132-02,Marcus Vance,SMHS,San Marcos High School,VARSITY,132,2,FLO-88413202,Marcus,Vance,San Marcos High School,132,131.8,11,ELIGIBLE,true,true,CLEARED,Dr. Smith,STATION-1,OHAUS-1,true,DOUBLE_ELIM_CROSSOVER,PASS-132-DEMO02",
      "athlete_id,public_display_name,team_id,team_name,division_id,weight_class_id,seed_rank,flowrestling_id,first_name,last_name,school_name,weight_lbs,actual_weight_lbs,grade,check_in_stage,weigh_in_eligible,medically_cleared,medical_decision,medical_reviewer,scale_station_id,scale_id,bracket_frozen,bracket_format,opaque_pass_token"
    ];
    return lines.join("\n") + "\n";
  }
  exportTournamentBackupCsv() {
    const backupMeta = {
      version: 1,
      tournament_id: this.tournamentId,
      tournament_name: this.tournamentName,
      event_date: this.eventDate,
      venue: this.venue,
      rules_version: this.rulesVersion,
      mat_count: this.matCount,
      growth_allowance_tenths: this.growthAllowanceTenths,
      consecutive_day_allowance_tenths: this.consecutiveDayAllowanceTenths,
      bracket_frozen_by_class: Array.from(this.bracketFrozenByClass.entries()),
      bouts: Array.from(this.bouts.values())
    };
    const formatByClassKey = /* @__PURE__ */ new Map();
    for (const bout of this.bouts.values()) {
      const div = (bout.division_id || "VARSITY").toUpperCase();
      const key = `${div}:${bout.weight_class_id}`;
      if (!formatByClassKey.has(key)) {
        const knownFormats = [
          BracketFormat.DoubleElimCrossover,
          BracketFormat.TrueSecondChallenge,
          BracketFormat.RoundRobinPool,
          BracketFormat.PoolToBracket,
          BracketFormat.TeamDual
        ];
        const matchedFormat = knownFormats.find((fmt) => bout.bracket_id.endsWith(fmt));
        formatByClassKey.set(key, matchedFormat ?? BracketFormat.DoubleElimCrossover);
      }
    }
    const lines = [
      "# OpenMat Full Tournament Backup & Disaster Recovery CSV (v1)",
      "# Re-importing this CSV into OpenMat Officials Console fully rebuilds all wrestlers, seeds, scale weigh-ins, skin/medical checks, and generated brackets.",
      `#openmat_tournament_backup_v1:${JSON.stringify(backupMeta)}`,
      "athlete_id,public_display_name,team_id,team_name,division_id,weight_class_id,seed_rank,flowrestling_id,first_name,last_name,school_name,weight_lbs,actual_weight_lbs,grade,check_in_stage,weigh_in_eligible,medically_cleared,medical_decision,medical_reviewer,scale_station_id,scale_id,bracket_frozen,bracket_format,opaque_pass_token"
    ];
    const sortedAthletes = Array.from(this.athletes.values()).sort(
      (a2, b2) => (a2.division_id || "VARSITY").localeCompare(b2.division_id || "VARSITY") || Number(a2.weight_class_id) - Number(b2.weight_class_id) || a2.seed_rank - b2.seed_rank || a2.athlete_id.localeCompare(b2.athlete_id)
    );
    for (const athlete of sortedAthletes) {
      const div = (athlete.division_id || "VARSITY").toUpperCase();
      const wc = athlete.weight_class_id;
      const nameParts = athlete.public_display_name.trim().split(/\s+/);
      const firstName = nameParts[0] ?? "";
      const lastName = nameParts.slice(1).join(" ");
      const weighIn = this.privateWeighIns.get(athlete.athlete_id);
      const actualWeightLbs = weighIn ? (weighIn.measured_weight_tenths / 10).toFixed(1) : "";
      const scaleStationId = weighIn?.station_id ?? "";
      const scaleId = weighIn?.scale_id ?? "";
      const medical = this.privateMedicals.get(athlete.athlete_id);
      const medicalDecision = medical?.decision ?? (athlete.medically_cleared ? "CLEARED" : "");
      const medicalReviewer = medical?.reviewer_id ?? (athlete.medically_cleared ? "Head Official" : "");
      const bracketFrozen = this.isBracketFrozen(wc, div);
      const bracketFormat = formatByClassKey.get(`${div}:${wc}`) ?? BracketFormat.DoubleElimCrossover;
      const stageLabel = (CheckInStageLabels[athlete.check_in_stage] ?? String(athlete.check_in_stage)).toUpperCase().replace(/[^A-Z0-9]+/g, "_");
      const row = [
        athlete.athlete_id,
        athlete.public_display_name,
        athlete.team_id,
        athlete.team_name,
        div,
        wc,
        athlete.seed_rank,
        athlete.flowrestling_id ?? "",
        firstName,
        lastName,
        athlete.team_name,
        wc,
        actualWeightLbs,
        "",
        stageLabel,
        athlete.weigh_in_eligible,
        athlete.medically_cleared,
        medicalDecision,
        medicalReviewer,
        scaleStationId,
        scaleId,
        bracketFrozen,
        bracketFormat,
        athlete.opaque_pass_token
      ].map((cell) => TournamentAuthorityEngine.escapeCsvCell(cell));
      lines.push(row.join(","));
    }
    return lines.join("\n") + "\n";
  }
  exportCoachRosterTemplateCsv(includeSamples = true) {
    const lines = [
      "# OpenMat Coach & School Spreadsheet Roster Template",
      "# Edit in Excel, Google Sheets, or Numbers and save as CSV. Lines starting with '#' are ignored.",
      "first_name,last_name,school_name,team_code,division,weight_class_lbs,actual_weight_lbs,seed_rank,grade,flowrestling_id,athlete_id"
    ];
    if (includeSamples) {
      lines.push(
        "Jordan,Rivera,Santa Barbara High School,SBHS,VARSITY,132,131.4,1,12,FLO-88413201,ATH-SBHS-132-01",
        "Marcus,Vance,San Marcos High School,SMHS,VARSITY,132,131.8,2,11,FLO-88413202,ATH-SMHS-132-02",
        "Mateo,Delgado,Dos Pueblos High School,DPHS,VARSITY,132,130.9,3,12,,ATH-DPHS-132-03",
        "Liam,O'Connor,Ventura High School,VHS,VARSITY,132,132.0,4,10,,ATH-VHS-132-04",
        "Carlos,Mendoza,Buena High School,BHS,VARSITY,138,137.4,1,12,FLO-88413801,ATH-BHS-138-01",
        "Noah,Takahashi,Rio Mesa High School,RMHS,VARSITY,138,137.8,2,11,,ATH-RMHS-138-02",
        "Elena,Rostova,Santa Barbara High School,SBHS,GIRLS,120,119.2,1,11,FLO-88412001,ATH-SBHS-G120-01",
        "Sofia,Morales,Oxnard High School,OHS,GIRLS,120,118.6,2,12,,ATH-OHS-G120-02"
      );
    }
    return lines.join("\n") + "\n";
  }
  importRosterCsv(csvText) {
    const cleanText = csvText.replace(/^\uFEFF/, "");
    let backupMeta = null;
    for (const rawLine of cleanText.split(/\r?\n/)) {
      const trimmed = rawLine.trim();
      if (trimmed.startsWith("#openmat_tournament_backup_v1:")) {
        try {
          backupMeta = JSON.parse(trimmed.slice("#openmat_tournament_backup_v1:".length));
        } catch {
        }
        break;
      }
    }
    const rows = TournamentAuthorityEngine.parseRosterCsv(cleanText);
    let firstNonEmpty = true;
    let hasTeamNameCol = false;
    let headerMap = null;
    let isCanonicalAthleteIdHeader = false;
    const staged = [];
    const stagedWeighIns = [];
    const stagedMedicals = [];
    const stagedStages = [];
    const stagedFrozenBrackets = /* @__PURE__ */ new Map();
    const seen2 = /* @__PURE__ */ new Map();
    let skippedDuplicates = 0;
    const knownHeaderNames = /* @__PURE__ */ new Set([
      "athlete_id",
      "id",
      "athleteid",
      "public_display_name",
      "name",
      "full_name",
      "wrestler",
      "wrestler_name",
      "first_name",
      "firstname",
      "first",
      "last_name",
      "lastname",
      "last",
      "team_id",
      "team_code",
      "team",
      "school_code",
      "team_name",
      "school_name",
      "school",
      "high_school",
      "club",
      "division_id",
      "division",
      "div",
      "weight_class_id",
      "weight_class_lbs",
      "weight_class",
      "weight_lbs",
      "weight",
      "wt_class",
      "wt",
      "actual_weight_lbs",
      "actual_weight",
      "scale_weight",
      "measured_weight_lbs",
      "seed_rank",
      "seed",
      "grade",
      "year",
      "flowrestling_id",
      "flo_id",
      "check_in_stage",
      "weigh_in_eligible",
      "medically_cleared",
      "medical_decision",
      "medical_reviewer",
      "scale_station_id",
      "scale_id",
      "bracket_frozen",
      "bracket_format",
      "opaque_pass_token"
    ]);
    for (const cols of rows) {
      if (firstNonEmpty) {
        firstNonEmpty = false;
        const normalizedCols = cols.map((c2) => TournamentAuthorityEngine.normalizeCsvHeaderName(c2));
        const firstColLower = normalizedCols[0] ?? "";
        const matchedHeaders = normalizedCols.filter((c2) => knownHeaderNames.has(c2)).length;
        if (firstColLower === "athlete_id" || firstColLower === "id" || firstColLower === "athleteid") {
          isCanonicalAthleteIdHeader = true;
          const fourthColLower = normalizedCols[3] ?? "";
          hasTeamNameCol = fourthColLower === "team_name" || fourthColLower === "school" || fourthColLower === "teamname" || fourthColLower === "school_name";
          headerMap = /* @__PURE__ */ new Map();
          normalizedCols.forEach((h2, idx) => {
            if (h2 && !headerMap.has(h2)) headerMap.set(h2, idx);
          });
          continue;
        } else if (matchedHeaders >= 2) {
          headerMap = /* @__PURE__ */ new Map();
          normalizedCols.forEach((h2, idx) => {
            if (h2 && !headerMap.has(h2)) headerMap.set(h2, idx);
          });
          continue;
        }
      }
      let athleteId = "";
      let name = "";
      let teamId = "";
      let teamName = "";
      let divisionId = "VARSITY";
      let weightClassId = "";
      let seedRaw = "";
      let flowrestlingId = "";
      let actualWeightRaw = "";
      const getByHeader = (...aliases) => {
        if (!headerMap) return "";
        for (const alias of aliases) {
          const idx = headerMap.get(alias);
          if (idx !== void 0 && idx < cols.length) {
            const val = (cols[idx] ?? "").trim();
            if (val) return val;
          }
        }
        return "";
      };
      const hasExtendedFriendlyCells = isCanonicalAthleteIdHeader && cols.length > 8 && Boolean(
        getByHeader(
          "first_name",
          "last_name",
          "school_name",
          "weight_lbs",
          "actual_weight_lbs",
          "check_in_stage",
          "weigh_in_eligible",
          "medically_cleared",
          "bracket_frozen"
        )
      );
      if (headerMap && (!isCanonicalAthleteIdHeader || hasExtendedFriendlyCells)) {
        const firstName = getByHeader("first_name", "firstname", "first");
        const lastName = getByHeader("last_name", "lastname", "last");
        const fullName = getByHeader("public_display_name", "full_name", "name", "wrestler", "wrestler_name");
        name = fullName || [firstName, lastName].filter(Boolean).join(" ").trim();
        const schoolName = getByHeader("school_name", "school", "high_school", "team_name", "club");
        const rawTeamCode = getByHeader("team_code", "team_id", "team", "school_code");
        teamName = schoolName || rawTeamCode;
        teamId = (rawTeamCode || TournamentAuthorityEngine.deriveTeamCodeFromSchool(teamName)).toUpperCase();
        if (!teamName) teamName = teamId;
        divisionId = (getByHeader("division_id", "division", "div") || "VARSITY").toUpperCase();
        const rawWeight = getByHeader("weight_class_id", "weight_class_lbs", "weight_class", "weight_lbs", "weight", "wt_class", "wt");
        weightClassId = rawWeight.replace(/\s*(lbs?|pounds?)\.?$/i, "").trim();
        actualWeightRaw = getByHeader("actual_weight_lbs", "actual_weight", "scale_weight", "measured_weight_lbs");
        seedRaw = getByHeader("seed_rank", "seed");
        flowrestlingId = getByHeader("flowrestling_id", "flo_id");
        const explicitId = getByHeader("athlete_id", "id", "athleteid");
        if (!name || !teamId || !weightClassId) {
          throw new OpenMatProtocolError(
            ErrorCode.InvalidArgument,
            "Roster CSV row contains empty required identifier field"
          );
        }
        athleteId = explicitId || TournamentAuthorityEngine.deriveAthleteIdFromFields(divisionId, weightClassId, teamId, name);
      } else {
        const minCols = hasTeamNameCol ? 6 : 5;
        if (cols.length < minCols) {
          throw new OpenMatProtocolError(
            ErrorCode.InvalidArgument,
            "Roster CSV row requires at least 5 columns (athlete_id,public_display_name,team_id,division_id,weight_class_id)"
          );
        }
        athleteId = (cols[0] ?? "").trim();
        name = (cols[1] ?? "").trim();
        teamId = (cols[2] ?? "").trim().toUpperCase();
        teamName = hasTeamNameCol ? (cols[3] ?? "").trim() || teamId : teamId;
        divisionId = ((hasTeamNameCol ? cols[4] : cols[3]) ?? "").trim().toUpperCase() || "VARSITY";
        weightClassId = ((hasTeamNameCol ? cols[5] : cols[4]) ?? "").trim().replace(/\s*(lbs?|pounds?)\.?$/i, "");
        seedRaw = ((hasTeamNameCol ? cols[6] : cols[5]) ?? "").trim();
        flowrestlingId = ((hasTeamNameCol ? cols[7] : cols[6]) ?? "").trim();
        if (!athleteId || !name || !teamId || !weightClassId) {
          throw new OpenMatProtocolError(
            ErrorCode.InvalidArgument,
            "Roster CSV row contains empty required identifier field"
          );
        }
      }
      let seedRank = 1;
      if (seedRaw) {
        const parsedSeed = Number(seedRaw);
        if (!Number.isInteger(parsedSeed) || parsedSeed < 0) {
          throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "Invalid seed_rank in roster CSV");
        }
        seedRank = Math.max(1, parsedSeed);
      }
      const checkInStageRaw = getByHeader("check_in_stage", "stage", "status").toUpperCase();
      const weighInEligibleRaw = getByHeader("weigh_in_eligible", "weigh_in_passed").toLowerCase();
      const medicallyClearedRaw = getByHeader("medically_cleared", "skin_check_cleared", "medical_cleared").toLowerCase();
      const medicalDecisionRaw = getByHeader("medical_decision").toUpperCase();
      const medicalReviewerRaw = getByHeader("medical_reviewer", "reviewer_id");
      const scaleStationIdRaw = getByHeader("scale_station_id", "station_id");
      const scaleIdRaw = getByHeader("scale_id");
      const bracketFrozenRaw = getByHeader("bracket_frozen").toLowerCase();
      const bracketFormatRaw = getByHeader("bracket_format").toUpperCase();
      const opaquePassTokenRaw = getByHeader("opaque_pass_token", "pass_token");
      const stageNameMap = {
        "1": CheckInStage.Expected,
        EXPECTED: CheckInStage.Expected,
        "2": CheckInStage.Arrived,
        ARRIVED: CheckInStage.Arrived,
        "3": CheckInStage.WeighInPending,
        WEIGH_IN_PENDING: CheckInStage.WeighInPending,
        "WEIGH-IN PENDING": CheckInStage.WeighInPending,
        "4": CheckInStage.MedicalPending,
        MEDICAL_PENDING: CheckInStage.MedicalPending,
        "MEDICAL PENDING": CheckInStage.MedicalPending,
        "5": CheckInStage.Eligible,
        ELIGIBLE: CheckInStage.Eligible,
        "6": CheckInStage.Withdrawn,
        WITHDRAWN: CheckInStage.Withdrawn,
        "7": CheckInStage.Scratched,
        SCRATCHED: CheckInStage.Scratched
      };
      const parsedStage = stageNameMap[checkInStageRaw];
      const isBackupStateRow = Boolean(
        backupMeta || checkInStageRaw || weighInEligibleRaw || medicallyClearedRaw || medicalDecisionRaw || bracketFrozenRaw
      );
      if (actualWeightRaw) {
        const cleanedActual = actualWeightRaw.replace(/\s*(lbs?|pounds?)\.?$/i, "").trim();
        const parsedLbs = Number(cleanedActual);
        const tenths = Math.round(parsedLbs * 10);
        if (!Number.isFinite(parsedLbs) || tenths <= 500 || tenths > 3500) {
          throw new OpenMatProtocolError(
            ErrorCode.InvalidArgument,
            "Invalid actual_weight_lbs in roster CSV (must be between 50.0 and 350.0 lbs)"
          );
        }
        stagedWeighIns.push({
          athleteId,
          stationId: scaleStationIdRaw || "CSV-IMPORT",
          scaleId: scaleIdRaw || "CSV-SCALE",
          measuredWeightTenths: tenths
        });
      } else if (weighInEligibleRaw === "true" || weighInEligibleRaw === "1" || weighInEligibleRaw === "yes" || parsedStage === CheckInStage.Eligible) {
        const defaultTenths = Math.max(550, Math.min(3450, Number(weightClassId) * 10 || 1320));
        stagedWeighIns.push({
          athleteId,
          stationId: scaleStationIdRaw || "CSV-RESTORE",
          scaleId: scaleIdRaw || "CSV-SCALE",
          measuredWeightTenths: defaultTenths
        });
      }
      const validDecisions = /* @__PURE__ */ new Set([
        "CLEARED",
        "CLEARED_PHYSICIAN_FORM",
        "MEDICAL_HOLD_DISQUALIFIED",
        "GROOMING_HOLD"
      ]);
      if (validDecisions.has(medicalDecisionRaw)) {
        stagedMedicals.push({
          athleteId,
          reviewerId: medicalReviewerRaw || "CSV-RESTORE",
          decision: medicalDecisionRaw
        });
      } else if (medicallyClearedRaw === "true" || medicallyClearedRaw === "1" || medicallyClearedRaw === "yes" || parsedStage === CheckInStage.Eligible) {
        stagedMedicals.push({
          athleteId,
          reviewerId: medicalReviewerRaw || "CSV-RESTORE",
          decision: "CLEARED"
        });
      }
      if (parsedStage !== void 0) {
        stagedStages.push({
          athleteId,
          stage: parsedStage
        });
      }
      if (bracketFrozenRaw === "true" || bracketFrozenRaw === "1" || bracketFrozenRaw === "yes") {
        const validFormats = new Set(Object.values(BracketFormat));
        const resolvedFormat = validFormats.has(bracketFormatRaw) ? bracketFormatRaw : BracketFormat.DoubleElimCrossover;
        stagedFrozenBrackets.set(`${divisionId}:${weightClassId}`, {
          divisionId,
          weightClassId,
          format: resolvedFormat
        });
      }
      if (seen2.has(athleteId)) {
        const prevInBatch = seen2.get(athleteId);
        if (prevInBatch.team_id !== teamId || (prevInBatch.division_id || "VARSITY").toUpperCase() !== divisionId || prevInBatch.weight_class_id !== weightClassId || prevInBatch.public_display_name !== name || prevInBatch.flowrestling_id && flowrestlingId && prevInBatch.flowrestling_id !== flowrestlingId) {
          throw new OpenMatProtocolError(
            ErrorCode.InvalidArgument,
            `Conflicting duplicate athlete_id in roster CSV: ${athleteId}`
          );
        }
        skippedDuplicates++;
        continue;
      }
      const existingInStore = this.athletes.get(athleteId);
      if (existingInStore && !isBackupStateRow) {
        if (existingInStore.team_id !== teamId || (existingInStore.division_id || "VARSITY").toUpperCase() !== divisionId || existingInStore.weight_class_id !== weightClassId || existingInStore.public_display_name !== name || existingInStore.flowrestling_id && flowrestlingId && existingInStore.flowrestling_id !== flowrestlingId) {
          throw new OpenMatProtocolError(
            ErrorCode.InvalidArgument,
            `Conflicting duplicate athlete_id in roster CSV: ${athleteId}`
          );
        }
        if (!existingInStore.flowrestling_id && flowrestlingId) {
          existingInStore.flowrestling_id = flowrestlingId;
        }
        skippedDuplicates++;
        continue;
      }
      if (!isBackupStateRow && this.isBracketFrozen(weightClassId, divisionId)) {
        throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "Unfreeze the bracket before importing wrestlers");
      }
      if (isBackupStateRow && this.isBracketFrozen(weightClassId, divisionId)) {
        this.bracketFrozenByClass.set(`${divisionId}:${weightClassId}`, false);
        this.bracketFrozenByClass.set(weightClassId, false);
      }
      const passHash = toHex(crypto.getRandomValues(new Uint8Array(16)));
      const record = {
        athlete_id: athleteId,
        opaque_pass_token: opaquePassTokenRaw || existingInStore?.opaque_pass_token || `PASS-${weightClassId}-${passHash}`,
        public_display_name: name,
        team_id: teamId,
        team_name: teamName,
        division_id: divisionId,
        weight_class_id: weightClassId,
        seed_rank: seedRank,
        flowrestling_id: flowrestlingId || existingInStore?.flowrestling_id || "",
        check_in_stage: CheckInStage.Arrived,
        weigh_in_eligible: false,
        medically_cleared: false,
        matches_wrestled_today: existingInStore?.matches_wrestled_today ?? 0,
        prior_day_matches: existingInStore?.prior_day_matches ?? 0,
        last_bout_ended_ms: existingInStore?.last_bout_ended_ms ?? 0,
        updated_at_ms: this.now()
      };
      seen2.set(athleteId, record);
      staged.push(record);
    }
    const prevSeeding = this.isSeeding;
    this.isSeeding = true;
    try {
      if (backupMeta) {
        if (backupMeta.tournament_id) this.tournamentId = backupMeta.tournament_id;
        if (backupMeta.tournament_name) this.tournamentName = backupMeta.tournament_name;
        if (backupMeta.event_date) this.eventDate = backupMeta.event_date;
        if (backupMeta.venue) this.venue = backupMeta.venue;
        if (typeof backupMeta.growth_allowance_tenths === "number") {
          this.growthAllowanceTenths = backupMeta.growth_allowance_tenths;
        }
        if (typeof backupMeta.consecutive_day_allowance_tenths === "number") {
          this.consecutiveDayAllowanceTenths = backupMeta.consecutive_day_allowance_tenths;
        }
        if (typeof backupMeta.mat_count === "number" && backupMeta.mat_count >= 1 && backupMeta.mat_count <= MAX_TOURNAMENT_MATS) {
          this.configureMatCount(backupMeta.mat_count);
        }
      }
      for (const rec of staged) {
        this.athletes.set(rec.athlete_id, rec);
      }
      for (const item of stagedWeighIns) {
        if (this.athletes.has(item.athleteId)) {
          this.recordScaleWeighIn({
            athleteId: item.athleteId,
            stationId: item.stationId,
            scaleId: item.scaleId,
            measuredWeightTenths: item.measuredWeightTenths
          });
        }
      }
      for (const med of stagedMedicals) {
        if (this.athletes.has(med.athleteId)) {
          this.recordMedicalDecision({
            athleteId: med.athleteId,
            reviewerId: med.reviewerId,
            reviewerRole: "Physician",
            decision: med.decision,
            privateClinicalNotes: ""
          });
        }
      }
      for (const st of stagedStages) {
        const ath = this.athletes.get(st.athleteId);
        if (ath) {
          ath.check_in_stage = st.stage;
          ath.updated_at_ms = this.now();
        }
      }
      if (stagedFrozenBrackets.size > 0) {
        for (const [id, bout] of this.bouts.entries()) {
          const bDiv = (bout.division_id || "VARSITY").toUpperCase();
          if (stagedFrozenBrackets.has(`${bDiv}:${bout.weight_class_id}`) || backupMeta) {
            this.bouts.delete(id);
          }
        }
        for (const item of stagedFrozenBrackets.values()) {
          this.generateBracketForClass(item.weightClassId, item.format, item.divisionId);
        }
      }
      if (backupMeta?.bouts && Array.isArray(backupMeta.bouts) && backupMeta.bouts.length > 0) {
        const allAthletesPresent = backupMeta.bouts.every(
          (b2) => (!b2.red_athlete_id || this.athletes.has(b2.red_athlete_id)) && (!b2.green_athlete_id || this.athletes.has(b2.green_athlete_id))
        );
        if (allAthletesPresent) {
          this.bouts = new Map(backupMeta.bouts.map((b2) => [b2.match_id, structuredClone(b2)]));
          this.nextBoutNumber = 1 + Math.max(100, ...Array.from(this.bouts.values()).map((b2) => b2.bout_number || 100));
          if (Array.isArray(backupMeta.bracket_frozen_by_class)) {
            this.bracketFrozenByClass = new Map(backupMeta.bracket_frozen_by_class);
          }
        }
      }
    } finally {
      this.isSeeding = prevSeeding;
    }
    if (staged.length > 0 || stagedWeighIns.length > 0 || stagedMedicals.length > 0 || stagedFrozenBrackets.size > 0 || backupMeta) {
      this.publishAndSave();
    }
    return {
      importedCount: staged.length,
      skippedDuplicates,
      rebuiltBracketClasses: stagedFrozenBrackets.size,
      athletes: staged
    };
  }
  batchClearRosterEligibility(options) {
    const filterDiv = (options?.divisionId ?? "").trim().toUpperCase();
    const filterWc = (options?.weightClassId ?? "").trim();
    const reviewerId = (options?.reviewerId ?? "").trim() || "Head Official";
    const stationId = (options?.stationId ?? "").trim() || "STATION-1";
    let clearedCount = 0;
    const prevSeeding = this.isSeeding;
    this.isSeeding = true;
    try {
      for (const athlete of this.athletes.values()) {
        if (athlete.check_in_stage === CheckInStage.Withdrawn || athlete.check_in_stage === CheckInStage.Scratched) {
          continue;
        }
        if (filterDiv && filterDiv !== "ALL" && (athlete.division_id || "VARSITY").toUpperCase() !== filterDiv) {
          continue;
        }
        if (filterWc && filterWc !== "ALL" && athlete.weight_class_id !== filterWc) {
          continue;
        }
        let changed = false;
        if (!athlete.weigh_in_eligible) {
          const targetTenths = Math.max(550, Math.min(3450, Number(athlete.weight_class_id) * 10 || 1320));
          this.recordScaleWeighIn({
            athleteId: athlete.athlete_id,
            stationId,
            scaleId: "SCALE-BATCH",
            measuredWeightTenths: targetTenths
          });
          changed = true;
        }
        if (!athlete.medically_cleared) {
          this.recordMedicalDecision({
            athleteId: athlete.athlete_id,
            reviewerId,
            reviewerRole: "Physician",
            decision: "CLEARED",
            privateClinicalNotes: ""
          });
          changed = true;
        }
        if (changed) {
          clearedCount++;
        }
      }
    } finally {
      this.isSeeding = prevSeeding;
    }
    if (clearedCount > 0) {
      this.publishAndSave();
    }
    return { clearedCount };
  }
  lookupByOpaquePassToken(passToken) {
    const normalized = passToken.trim().toUpperCase();
    for (const athlete of this.athletes.values()) {
      if (athlete.opaque_pass_token.toUpperCase() === normalized || athlete.athlete_id.toUpperCase() === normalized) {
        return {
          found: true,
          athlete,
          impliesEligibilityAttestation: false
        };
      }
    }
    return { found: false, impliesEligibilityAttestation: false };
  }
  setCheckInStage(athleteId, stage) {
    const athlete = this.athletes.get(athleteId);
    if (!athlete) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, `Unknown athlete: ${athleteId}`);
    }
    if (stage === CheckInStage.Eligible && (!athlete.weigh_in_eligible || !athlete.medically_cleared)) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        `Cannot mark ${athlete.public_display_name} Eligible until both Weigh-In and Medical/Skin Check are passed.`
      );
    }
    athlete.check_in_stage = stage;
    athlete.updated_at_ms = this.now();
    this.publishAndSave();
    return athlete;
  }
  // ============================================================================
  // 2. Weigh-In Station (REQ-WGT-01..06, REQ-PRIV-03)
  // ============================================================================
  maxAllowedTenthsForClass(weightClassId) {
    const baseTenths = Number(weightClassId) * 10;
    return baseTenths + this.growthAllowanceTenths + this.consecutiveDayAllowanceTenths;
  }
  recordScaleWeighIn(input) {
    const athlete = this.athletes.get(input.athleteId);
    if (!athlete) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, `Unknown athlete: ${input.athleteId}`);
    }
    if (!Number.isInteger(input.measuredWeightTenths) || input.measuredWeightTenths <= 500 || input.measuredWeightTenths > 3500) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "Weight must be an integer in tenths of a pound between 50.0 and 350.0 lbs"
      );
    }
    if (input.reassignWeightClassId && ALL_SUPPORTED_WEIGHT_CLASSES.includes(input.reassignWeightClassId)) {
      athlete.weight_class_id = input.reassignWeightClassId;
    }
    const previous = this.privateWeighIns.get(athlete.athlete_id);
    const attemptNumber = (previous?.attempt_number ?? 0) + 1;
    const maxAllowedTenths = this.maxAllowedTenthsForClass(athlete.weight_class_id);
    const passed = input.measuredWeightTenths <= maxAllowedTenths;
    const record = {
      athlete_id: athlete.athlete_id,
      station_id: input.stationId,
      scale_id: input.scaleId,
      attempt_number: attemptNumber,
      measured_weight_tenths: input.measuredWeightTenths,
      max_allowed_tenths: maxAllowedTenths,
      passed,
      recorded_at_ms: this.now()
    };
    this.privateWeighIns.set(athlete.athlete_id, record);
    athlete.weigh_in_eligible = passed;
    if (passed && athlete.medically_cleared) {
      athlete.check_in_stage = CheckInStage.Eligible;
    } else if (passed) {
      athlete.check_in_stage = CheckInStage.MedicalPending;
    } else {
      athlete.check_in_stage = CheckInStage.WeighInPending;
    }
    athlete.updated_at_ms = this.now();
    this.publishAndSave();
    return record;
  }
  // ============================================================================
  // 3. Medical & Skin/Grooming Clearance (REQ-MED-01..04, REQ-PRIV-04)
  // ============================================================================
  recordMedicalDecision(input) {
    const athlete = this.athletes.get(input.athleteId);
    if (!athlete) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, `Unknown athlete: ${input.athleteId}`);
    }
    if (!input.reviewerId.trim()) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "Authorized human medical reviewer ID is required (REQ-MED-01)"
      );
    }
    const cleared = input.decision === "CLEARED" || input.decision === "CLEARED_PHYSICIAN_FORM";
    const record = {
      athlete_id: athlete.athlete_id,
      reviewer_id: input.reviewerId.trim(),
      reviewer_role: input.reviewerRole,
      decision: input.decision,
      skin_clear: input.decision !== "MEDICAL_HOLD_DISQUALIFIED",
      grooming_compliant: input.decision !== "GROOMING_HOLD",
      private_clinical_notes: input.privateClinicalNotes.trim(),
      recorded_at_ms: this.now()
    };
    this.privateMedicals.set(athlete.athlete_id, record);
    athlete.medically_cleared = cleared;
    if (cleared && athlete.weigh_in_eligible) {
      athlete.check_in_stage = CheckInStage.Eligible;
    } else if (!cleared && input.decision === "MEDICAL_HOLD_DISQUALIFIED") {
      athlete.check_in_stage = CheckInStage.Withdrawn;
    } else {
      athlete.check_in_stage = CheckInStage.MedicalPending;
    }
    athlete.updated_at_ms = this.now();
    this.publishAndSave();
    return record;
  }
  /**
   * Unified single-step Check-In, Scale Weigh-In & Skin/Medical Clearance for coaches and weigh-in tables.
   * Records both the private scale reading and skin/grooming check in one atomic operation.
   */
  completeUnifiedCheckIn(input) {
    const athlete = this.athletes.get(input.athleteId);
    if (!athlete) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, `Unknown athlete: ${input.athleteId}`);
    }
    const targetWc = input.reassignWeightClassId && ALL_SUPPORTED_WEIGHT_CLASSES.includes(input.reassignWeightClassId) ? input.reassignWeightClassId : athlete.weight_class_id;
    const existingWeighIn = this.privateWeighIns.get(athlete.athlete_id);
    const defaultWeightTenths = existingWeighIn?.measured_weight_tenths ?? Math.max(550, Math.min(3450, Number(targetWc) * 10 || 1320));
    const measuredWeightTenths = input.measuredWeightTenths ?? defaultWeightTenths;
    const prevSeeding = this.isSeeding;
    this.isSeeding = true;
    try {
      this.recordScaleWeighIn({
        athleteId: athlete.athlete_id,
        stationId: (input.stationId ?? "").trim() || "CHECKIN-1",
        scaleId: (input.scaleId ?? "").trim() || "SCALE-1",
        measuredWeightTenths,
        reassignWeightClassId: input.reassignWeightClassId
      });
      this.recordMedicalDecision({
        athleteId: athlete.athlete_id,
        reviewerId: (input.reviewerId ?? "").trim() || "Head Official",
        reviewerRole: input.reviewerRole ?? "Physician",
        decision: input.skinDecision ?? "CLEARED",
        privateClinicalNotes: input.privateClinicalNotes ?? ""
      });
    } finally {
      this.isSeeding = prevSeeding;
    }
    this.publishAndSave();
    return this.athletes.get(athlete.athlete_id);
  }
  generateAllBrackets(format = BracketFormat.DoubleElimCrossover, divisionFilter) {
    const cleanDiv = (divisionFilter ?? "").trim().toUpperCase();
    const groups = /* @__PURE__ */ new Set();
    for (const athlete of this.athletes.values()) {
      if (athlete.check_in_stage === CheckInStage.Eligible && athlete.weigh_in_eligible && athlete.medically_cleared) {
        const div = (athlete.division_id || "VARSITY").toUpperCase();
        if (cleanDiv && cleanDiv !== "ALL" && div !== cleanDiv) continue;
        groups.add(`${div}:${athlete.weight_class_id}`);
      }
    }
    const sortedGroups = Array.from(groups).sort((a2, b2) => {
      const [divA, wcA] = a2.split(":");
      const [divB, wcB] = b2.split(":");
      return (divA || "").localeCompare(divB || "") || Number(wcA) - Number(wcB);
    });
    const generatedClasses = [];
    let totalBouts = 0;
    for (const group of sortedGroups) {
      const [div, wc] = group.split(":");
      const bouts = this.generateBracketForClass(wc, format, div);
      if (bouts.length > 0) {
        generatedClasses.push(`${div} ${wc} lbs`);
        totalBouts += bouts.length;
      }
    }
    return { generatedClasses, totalBouts };
  }
  purgePrivateClinicalNotes() {
    let purgedCount = 0;
    for (const rec of this.privateMedicals.values()) {
      if (rec.private_clinical_notes) {
        rec.private_clinical_notes = "[PURGED POST-EVENT PER REQ-PRIV-04]";
        purgedCount++;
      }
    }
    this.saveToStorage();
    return purgedCount;
  }
  // ============================================================================
  // 4. Seeding & Bracket DAG Generation (REQ-BRK-01..06, REQ-WGT-07)
  // ============================================================================
  isBracketFrozen(weightClassId, divisionId) {
    const cleanDiv = (divisionId ?? "").trim().toUpperCase();
    if (cleanDiv && cleanDiv !== "ALL") {
      const scoped = this.bracketFrozenByClass.get(`${cleanDiv}:${weightClassId}`);
      if (scoped !== void 0) return scoped;
      const divisionsInClass = new Set(
        Array.from(this.athletes.values()).filter((a2) => a2.weight_class_id === weightClassId).map((a2) => (a2.division_id || "VARSITY").toUpperCase())
      );
      if (divisionsInClass.size > 1) return false;
    }
    return this.bracketFrozenByClass.get(weightClassId) ?? false;
  }
  moveSeed(athleteId, delta) {
    const target = this.athletes.get(athleteId);
    if (!target) return;
    if (this.isBracketFrozen(target.weight_class_id, target.division_id)) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        `Bracket for ${target.division_id} ${target.weight_class_id} lbs is frozen. Unfreeze before reordering seeds.`
      );
    }
    const classAthletes = Array.from(this.athletes.values()).filter((a2) => a2.weight_class_id === target.weight_class_id && a2.division_id === target.division_id).sort((a2, b2) => a2.seed_rank - b2.seed_rank || a2.athlete_id.localeCompare(b2.athlete_id));
    const idx = classAthletes.findIndex((a2) => a2.athlete_id === athleteId);
    const swapIdx = idx + delta;
    if (idx < 0 || swapIdx < 0 || swapIdx >= classAthletes.length) return;
    const neighbor = classAthletes[swapIdx];
    const tmp = target.seed_rank;
    target.seed_rank = neighbor.seed_rank;
    neighbor.seed_rank = tmp;
    if (target.seed_rank === neighbor.seed_rank) {
      classAthletes.forEach((a2, i2) => {
        a2.seed_rank = i2 + 1;
      });
    }
    this.publishAndSave();
  }
  autoSeparateSameTeamSeeds(weightClassId, divisionId) {
    const cleanDiv = (divisionId ?? "").trim().toUpperCase();
    const eligible = Array.from(this.athletes.values()).filter(
      (a2) => a2.weight_class_id === weightClassId && (!cleanDiv || cleanDiv === "ALL" || a2.division_id.toUpperCase() === cleanDiv) && a2.check_in_stage === CheckInStage.Eligible && a2.weigh_in_eligible && a2.medically_cleared
    ).sort((a2, b2) => a2.seed_rank - b2.seed_rank);
    for (let i2 = 0; i2 < eligible.length - 1; i2++) {
      const a2 = eligible[i2];
      const b2 = eligible[i2 + 1];
      if (a2.team_id === b2.team_id && i2 + 2 < eligible.length) {
        const c2 = eligible[i2 + 2];
        const tmpSeed = b2.seed_rank;
        b2.seed_rank = c2.seed_rank;
        c2.seed_rank = tmpSeed;
      }
    }
    eligible.sort((a2, b2) => a2.seed_rank - b2.seed_rank).forEach((a2, idx) => {
      a2.seed_rank = idx + 1;
    });
    this.publishAndSave();
  }
  assertDrawNotStarted() {
    if ([...this.bouts.values()].some((b2) => !b2.is_bye && b2.lifecycle >= BoutLifecycle.Ready)) {
      throw new Error("Generate all weight-class brackets before calling or starting matches; published bout numbers are locked once dispatch begins.");
    }
  }
  numberBoutsInRunningOrder() {
    const ordered = [...this.bouts.values()].sort((a2, b2) => a2.round_index - b2.round_index || Number(a2.weight_class_id) - Number(b2.weight_class_id) || (a2.division_id || "").localeCompare(b2.division_id || "") || Number(a2.is_consolation) - Number(b2.is_consolation) || a2.bout_number - b2.bout_number || a2.match_id.localeCompare(b2.match_id));
    const matPositions = /* @__PURE__ */ new Map();
    ordered.forEach((bout, index) => {
      bout.bout_number = 101 + index;
      const position = (matPositions.get(bout.assigned_mat_id) || 0) + 1;
      matPositions.set(bout.assigned_mat_id, position);
      bout.mat_queue_order = position;
    });
    this.bouts = new Map(ordered.map((bout) => [bout.match_id, bout]));
    this.nextBoutNumber = 101 + ordered.length;
  }
  static recommendBracketFormatForCount(entrantCount, preferredElimFormat = BracketFormat.DoubleElimCrossover) {
    if (entrantCount === 2) {
      return BracketFormat.BestOfThree;
    }
    if (entrantCount >= 1 && entrantCount <= 5) {
      return BracketFormat.RoundRobinPool;
    }
    if (preferredElimFormat === BracketFormat.TrueSecondChallenge) {
      return BracketFormat.TrueSecondChallenge;
    }
    if (preferredElimFormat === BracketFormat.RoundRobinPool) {
      return BracketFormat.RoundRobinPool;
    }
    return BracketFormat.DoubleElimCrossover;
  }
  generateBracketForClass(weightClassId, format = BracketFormat.AutoByCount, divisionId) {
    this.assertDrawNotStarted();
    const cleanDiv = (divisionId ?? "").trim().toUpperCase();
    const matchingDivisions = new Set(
      Array.from(this.athletes.values()).filter(
        (a2) => a2.weight_class_id === weightClassId && a2.check_in_stage === CheckInStage.Eligible && a2.weigh_in_eligible && a2.medically_cleared
      ).map((a2) => (a2.division_id || "VARSITY").toUpperCase())
    );
    if ((!cleanDiv || cleanDiv === "ALL") && matchingDivisions.size > 1) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        `Multiple divisions (${Array.from(matchingDivisions).join(", ")}) share weight class ${weightClassId}; specify divisionId.`
      );
    }
    const resolvedDivision = cleanDiv && cleanDiv !== "ALL" ? cleanDiv : matchingDivisions.size === 1 ? Array.from(matchingDivisions)[0] : "VARSITY";
    const hasMultipleDivisionsAtWeight = new Set(
      Array.from(this.athletes.values()).filter((a2) => a2.weight_class_id === weightClassId).map((a2) => (a2.division_id || "VARSITY").toUpperCase())
    ).size > 1;
    const useDivisionPrefix = hasMultipleDivisionsAtWeight || Boolean(cleanDiv) && cleanDiv !== "ALL" && cleanDiv !== "VARSITY";
    const classScopeToken = useDivisionPrefix ? `${resolvedDivision}-${weightClassId}` : weightClassId;
    const entrants = Array.from(this.athletes.values()).filter(
      (a2) => a2.weight_class_id === weightClassId && (a2.division_id || "VARSITY").toUpperCase() === resolvedDivision && a2.check_in_stage === CheckInStage.Eligible && a2.weigh_in_eligible && a2.medically_cleared
    ).sort((a2, b2) => a2.seed_rank - b2.seed_rank || a2.athlete_id.localeCompare(b2.athlete_id));
    if (entrants.length > 64) {
      throw new OpenMatProtocolError(
        ErrorCode.BoundsExceeded,
        `Active entrants (${entrants.length}) exceed 64-athlete bracket capacity.`
      );
    }
    for (const [id, bout] of this.bouts.entries()) {
      const boutDiv = (bout.division_id || "VARSITY").toUpperCase();
      if (bout.weight_class_id === weightClassId && (!cleanDiv || cleanDiv === "ALL" || boutDiv === resolvedDivision)) {
        this.bouts.delete(id);
      }
    }
    if (entrants.length === 0) {
      return [];
    }
    entrants.forEach((a2, idx) => {
      a2.seed_rank = idx + 1;
    });
    let effectiveFormat = format;
    if (entrants.length === 1) {
      effectiveFormat = BracketFormat.RoundRobinPool;
    } else if (entrants.length === 2) {
      effectiveFormat = format === BracketFormat.RoundRobinPool ? BracketFormat.RoundRobinPool : BracketFormat.BestOfThree;
    } else if (entrants.length >= 3 && entrants.length <= 5) {
      effectiveFormat = BracketFormat.RoundRobinPool;
    } else if (format === BracketFormat.AutoByCount || format === BracketFormat.BestOfThree) {
      effectiveFormat = BracketFormat.DoubleElimCrossover;
    }
    const created = [];
    const bracketId = `BRK-${classScopeToken}-${effectiveFormat}`;
    if (entrants.length === 1) {
      const sole = entrants[0];
      const matchId = `BOUT-${classScopeToken}-WALKOVER-1ST`;
      const bout = {
        match_id: matchId,
        bracket_id: bracketId,
        weight_class_id: weightClassId,
        division_id: resolvedDivision,
        format: effectiveFormat,
        bout_number: this.nextBoutNumber++,
        round_index: 1,
        round_label: "Uncontested 1st Place (Walkover)",
        is_consolation: false,
        is_placement_bout: true,
        is_true_second_challenge: false,
        placement_rank: 1,
        red_athlete_id: sole.athlete_id,
        green_athlete_id: "",
        is_bye: true,
        winner_next_match_id: "",
        loser_next_match_id: "",
        lifecycle: BoutLifecycle.ResultAccepted,
        assigned_mat_id: 1,
        mat_queue_order: 1,
        assignment_revision: 1,
        authority_epoch: 1,
        delegated_android_device_id: "ANDROID-MAT-1-S921U1",
        red_score: 0,
        green_score: 0,
        period_number: 1,
        clock_remaining_ms: 0,
        clock_running: false,
        winner_athlete_id: sole.athlete_id,
        loser_athlete_id: "",
        win_type: "BYE",
        completed_at_ms: this.now()
      };
      this.bouts.set(matchId, bout);
      created.push(bout);
    } else if (effectiveFormat === BracketFormat.BestOfThree) {
      const seed1 = entrants[0];
      const seed2 = entrants[1];
      const m1Id = `BOUT-${classScopeToken}-BO3-1`;
      const m2Id = `BOUT-${classScopeToken}-BO3-2`;
      const m3Id = `BOUT-${classScopeToken}-BO3-3`;
      const specs = [
        {
          matchId: m1Id,
          roundIndex: 1,
          roundLabel: "Best of 3 — Match 1",
          redId: seed1.athlete_id,
          greenId: seed2.athlete_id,
          nextId: m2Id,
          lifecycle: BoutLifecycle.Assigned,
          isPlacement: false,
          placementRank: 0
        },
        {
          matchId: m2Id,
          roundIndex: 2,
          roundLabel: "Best of 3 — Match 2",
          redId: seed2.athlete_id,
          greenId: seed1.athlete_id,
          nextId: m3Id,
          lifecycle: BoutLifecycle.PendingUpstream,
          isPlacement: false,
          placementRank: 0
        },
        {
          matchId: m3Id,
          roundIndex: 3,
          roundLabel: "Best of 3 — Match 3 (If Necessary)",
          redId: seed1.athlete_id,
          greenId: seed2.athlete_id,
          nextId: "",
          lifecycle: BoutLifecycle.PendingUpstream,
          isPlacement: true,
          placementRank: 1
        }
      ];
      specs.forEach((sp, idx) => {
        const matId = idx % this.matCount + 1;
        const bout = {
          match_id: sp.matchId,
          bracket_id: bracketId,
          weight_class_id: weightClassId,
          division_id: resolvedDivision,
          format: effectiveFormat,
          bout_number: this.nextBoutNumber++,
          round_index: sp.roundIndex,
          round_label: sp.roundLabel,
          is_consolation: false,
          is_placement_bout: sp.isPlacement,
          is_true_second_challenge: false,
          placement_rank: sp.placementRank,
          red_athlete_id: sp.redId,
          green_athlete_id: sp.greenId,
          is_bye: false,
          winner_next_match_id: sp.nextId,
          loser_next_match_id: sp.nextId,
          lifecycle: sp.lifecycle,
          assigned_mat_id: matId,
          mat_queue_order: idx + 1,
          assignment_revision: 1,
          authority_epoch: 1,
          delegated_android_device_id: `ANDROID-MAT-${matId}-S921U1`,
          red_score: 0,
          green_score: 0,
          period_number: 1,
          clock_remaining_ms: 12e4,
          clock_running: false,
          winner_athlete_id: "",
          loser_athlete_id: "",
          win_type: "",
          completed_at_ms: 0
        };
        this.bouts.set(sp.matchId, bout);
        created.push(bout);
      });
    } else if (effectiveFormat === BracketFormat.RoundRobinPool) {
      const circle = [...entrants];
      if (circle.length % 2) circle.push(void 0);
      for (let roundIdx = 1; roundIdx < circle.length; roundIdx++) {
        for (let i2 = 0; i2 < circle.length / 2; i2++) {
          const red = circle[i2];
          const green = circle[circle.length - 1 - i2];
          if (!red || !green) continue;
          const boutNum = this.nextBoutNumber++;
          const matchId = `BOUT-${classScopeToken}-RR${created.length + 1}`;
          const bout = {
            match_id: matchId,
            bracket_id: bracketId,
            weight_class_id: weightClassId,
            division_id: resolvedDivision,
            format: effectiveFormat,
            bout_number: boutNum,
            round_index: roundIdx,
            round_label: `Pool Round ${roundIdx}`,
            is_consolation: false,
            is_placement_bout: false,
            is_true_second_challenge: false,
            placement_rank: 0,
            red_athlete_id: red.athlete_id,
            green_athlete_id: green.athlete_id,
            is_bye: false,
            winner_next_match_id: "",
            loser_next_match_id: "",
            lifecycle: BoutLifecycle.Assigned,
            assigned_mat_id: created.length % this.matCount + 1,
            mat_queue_order: created.length + 1,
            assignment_revision: 1,
            authority_epoch: 1,
            delegated_android_device_id: `ANDROID-MAT-${created.length % this.matCount + 1}-S921U1`,
            red_score: 0,
            green_score: 0,
            period_number: 1,
            clock_remaining_ms: 12e4,
            clock_running: false,
            winner_athlete_id: "",
            loser_athlete_id: "",
            win_type: "",
            completed_at_ms: 0
          };
          this.bouts.set(matchId, bout);
          created.push(bout);
        }
        circle.splice(1, 0, circle.pop());
      }
    } else if (entrants.length <= 8) {
      const slotSeeds = [
        [0, 7],
        // Seed 1 vs Seed 8 (QF1)
        [3, 4],
        // Seed 4 vs Seed 5 (QF2)
        [1, 6],
        // Seed 2 vs Seed 7 (QF3)
        [2, 5]
        // Seed 3 vs Seed 6 (QF4)
      ];
      const qfIds = ["QF1", "QF2", "QF3", "QF4"].map((s2) => `BOUT-${classScopeToken}-${s2}`);
      const sfIds = ["SF1", "SF2"].map((s2) => `BOUT-${classScopeToken}-${s2}`);
      const c1Ids = ["C1-1", "C1-2"].map((s2) => `BOUT-${classScopeToken}-${s2}`);
      const c2Ids = ["C2-1", "C2-2"].map((s2) => `BOUT-${classScopeToken}-${s2}`);
      const final1stId = `BOUT-${classScopeToken}-FINAL-1ST`;
      const final3rdId = `BOUT-${classScopeToken}-FINAL-3RD`;
      const true2ndId = `BOUT-${classScopeToken}-TRUE-2ND`;
      slotSeeds.forEach(([rIdx, gIdx], i2) => {
        const red = entrants[rIdx]?.athlete_id ?? "";
        const green = entrants[gIdx]?.athlete_id ?? "";
        const isBye = !red || !green;
        const matchId = qfIds[i2];
        const sfTarget = i2 < 2 ? sfIds[0] : sfIds[1];
        const c1Target = i2 < 2 ? c1Ids[0] : c1Ids[1];
        const bout = {
          match_id: matchId,
          bracket_id: bracketId,
          weight_class_id: weightClassId,
          division_id: resolvedDivision,
          format: effectiveFormat,
          bout_number: this.nextBoutNumber++,
          round_index: 1,
          round_label: "Championship Quarterfinal",
          is_consolation: false,
          is_placement_bout: false,
          is_true_second_challenge: false,
          placement_rank: 0,
          red_athlete_id: red,
          green_athlete_id: green,
          is_bye: isBye,
          winner_next_match_id: sfTarget,
          loser_next_match_id: c1Target,
          lifecycle: isBye ? BoutLifecycle.ResultAccepted : BoutLifecycle.Assigned,
          assigned_mat_id: i2 % this.matCount + 1,
          mat_queue_order: i2 + 1,
          assignment_revision: 1,
          authority_epoch: 1,
          delegated_android_device_id: `ANDROID-MAT-${i2 % this.matCount + 1}-S921U1`,
          red_score: 0,
          green_score: 0,
          period_number: 1,
          clock_remaining_ms: 12e4,
          clock_running: false,
          winner_athlete_id: isBye ? red : "",
          loser_athlete_id: "",
          win_type: isBye ? "BYE" : "",
          completed_at_ms: isBye ? this.now() : 0
        };
        this.bouts.set(matchId, bout);
        created.push(bout);
      });
      c1Ids.forEach((matchId, i2) => {
        const bout = {
          match_id: matchId,
          bracket_id: bracketId,
          weight_class_id: weightClassId,
          division_id: resolvedDivision,
          format: effectiveFormat,
          bout_number: this.nextBoutNumber++,
          round_index: 2,
          round_label: "Consolation Round 1",
          is_consolation: true,
          is_placement_bout: false,
          is_true_second_challenge: false,
          placement_rank: 0,
          red_athlete_id: "",
          green_athlete_id: "",
          is_bye: false,
          winner_next_match_id: c2Ids[i2],
          loser_next_match_id: "",
          lifecycle: BoutLifecycle.PendingUpstream,
          assigned_mat_id: (i2 + 2) % this.matCount + 1,
          mat_queue_order: 10 + i2,
          assignment_revision: 1,
          authority_epoch: 1,
          delegated_android_device_id: `ANDROID-MAT-${(i2 + 2) % this.matCount + 1}-S921U1`,
          red_score: 0,
          green_score: 0,
          period_number: 1,
          clock_remaining_ms: 12e4,
          clock_running: false,
          winner_athlete_id: "",
          loser_athlete_id: "",
          win_type: "",
          completed_at_ms: 0
        };
        this.bouts.set(matchId, bout);
        created.push(bout);
      });
      sfIds.forEach((matchId, i2) => {
        const crossoverConsSemi = i2 === 0 ? c2Ids[1] : c2Ids[0];
        const bout = {
          match_id: matchId,
          bracket_id: bracketId,
          weight_class_id: weightClassId,
          division_id: resolvedDivision,
          format: effectiveFormat,
          bout_number: this.nextBoutNumber++,
          round_index: 2,
          round_label: "Championship Semifinal",
          is_consolation: false,
          is_placement_bout: false,
          is_true_second_challenge: false,
          placement_rank: 0,
          red_athlete_id: "",
          green_athlete_id: "",
          is_bye: false,
          winner_next_match_id: final1stId,
          loser_next_match_id: crossoverConsSemi,
          lifecycle: BoutLifecycle.PendingUpstream,
          assigned_mat_id: i2 % this.matCount + 1,
          mat_queue_order: 12 + i2,
          assignment_revision: 1,
          authority_epoch: 1,
          delegated_android_device_id: `ANDROID-MAT-${i2 % this.matCount + 1}-S921U1`,
          red_score: 0,
          green_score: 0,
          period_number: 1,
          clock_remaining_ms: 12e4,
          clock_running: false,
          winner_athlete_id: "",
          loser_athlete_id: "",
          win_type: "",
          completed_at_ms: 0
        };
        this.bouts.set(matchId, bout);
        created.push(bout);
      });
      c2Ids.forEach((matchId, i2) => {
        const bout = {
          match_id: matchId,
          bracket_id: bracketId,
          weight_class_id: weightClassId,
          division_id: resolvedDivision,
          format: effectiveFormat,
          bout_number: this.nextBoutNumber++,
          round_index: 3,
          round_label: "Consolation Semifinal (Crossover)",
          is_consolation: true,
          is_placement_bout: false,
          is_true_second_challenge: false,
          placement_rank: 0,
          red_athlete_id: "",
          green_athlete_id: "",
          is_bye: false,
          winner_next_match_id: final3rdId,
          loser_next_match_id: "",
          lifecycle: BoutLifecycle.PendingUpstream,
          assigned_mat_id: (i2 + 2) % this.matCount + 1,
          mat_queue_order: 15 + i2,
          assignment_revision: 1,
          authority_epoch: 1,
          delegated_android_device_id: `ANDROID-MAT-${(i2 + 2) % this.matCount + 1}-S921U1`,
          red_score: 0,
          green_score: 0,
          period_number: 1,
          clock_remaining_ms: 12e4,
          clock_running: false,
          winner_athlete_id: "",
          loser_athlete_id: "",
          win_type: "",
          completed_at_ms: 0
        };
        this.bouts.set(matchId, bout);
        created.push(bout);
      });
      const bout3rd = {
        match_id: final3rdId,
        bracket_id: bracketId,
        weight_class_id: weightClassId,
        division_id: resolvedDivision,
        format: effectiveFormat,
        bout_number: this.nextBoutNumber++,
        round_index: 4,
        round_label: "3rd Place Match",
        is_consolation: true,
        is_placement_bout: true,
        is_true_second_challenge: false,
        placement_rank: 3,
        red_athlete_id: "",
        green_athlete_id: "",
        is_bye: false,
        winner_next_match_id: effectiveFormat === BracketFormat.TrueSecondChallenge ? true2ndId : "",
        loser_next_match_id: "",
        lifecycle: BoutLifecycle.PendingUpstream,
        assigned_mat_id: 2,
        mat_queue_order: 20,
        assignment_revision: 1,
        authority_epoch: 1,
        delegated_android_device_id: "ANDROID-MAT-2-S921U1",
        red_score: 0,
        green_score: 0,
        period_number: 1,
        clock_remaining_ms: 12e4,
        clock_running: false,
        winner_athlete_id: "",
        loser_athlete_id: "",
        win_type: "",
        completed_at_ms: 0
      };
      this.bouts.set(final3rdId, bout3rd);
      created.push(bout3rd);
      const bout1st = {
        match_id: final1stId,
        bracket_id: bracketId,
        weight_class_id: weightClassId,
        division_id: resolvedDivision,
        format: effectiveFormat,
        bout_number: this.nextBoutNumber++,
        round_index: 4,
        round_label: "1st Place Championship Final",
        is_consolation: false,
        is_placement_bout: true,
        is_true_second_challenge: false,
        placement_rank: 1,
        red_athlete_id: "",
        green_athlete_id: "",
        is_bye: false,
        winner_next_match_id: "",
        loser_next_match_id: effectiveFormat === BracketFormat.TrueSecondChallenge ? true2ndId : "",
        lifecycle: BoutLifecycle.PendingUpstream,
        assigned_mat_id: 1,
        mat_queue_order: 21,
        assignment_revision: 1,
        authority_epoch: 1,
        delegated_android_device_id: "ANDROID-MAT-1-S921U1",
        red_score: 0,
        green_score: 0,
        period_number: 1,
        clock_remaining_ms: 12e4,
        clock_running: false,
        winner_athlete_id: "",
        loser_athlete_id: "",
        win_type: "",
        completed_at_ms: 0
      };
      this.bouts.set(final1stId, bout1st);
      created.push(bout1st);
      if (effectiveFormat === BracketFormat.TrueSecondChallenge) {
        const boutTrue2nd = {
          match_id: true2ndId,
          bracket_id: bracketId,
          weight_class_id: weightClassId,
          division_id: resolvedDivision,
          format: effectiveFormat,
          bout_number: this.nextBoutNumber++,
          round_index: 5,
          round_label: "True Second Challenge Match",
          is_consolation: true,
          is_placement_bout: true,
          is_true_second_challenge: true,
          placement_rank: 2,
          red_athlete_id: "",
          green_athlete_id: "",
          is_bye: false,
          winner_next_match_id: "",
          loser_next_match_id: "",
          lifecycle: BoutLifecycle.PendingUpstream,
          assigned_mat_id: 1,
          mat_queue_order: 22,
          assignment_revision: 1,
          authority_epoch: 1,
          delegated_android_device_id: "ANDROID-MAT-1-S921U1",
          red_score: 0,
          green_score: 0,
          period_number: 1,
          clock_remaining_ms: 12e4,
          clock_running: false,
          winner_athlete_id: "",
          loser_athlete_id: "",
          win_type: "",
          completed_at_ms: 0
        };
        this.bouts.set(true2ndId, boutTrue2nd);
        created.push(boutTrue2nd);
      }
      for (const b2 of created) {
        if (b2.is_bye && b2.winner_athlete_id && b2.winner_next_match_id) {
          this.advanceParticipantToDownstream(b2.winner_next_match_id, b2.winner_athlete_id);
        }
      }
      this.resolveCompletedByesForBracket(bracketId);
    } else {
      const N2 = entrants.length <= 16 ? 16 : entrants.length <= 32 ? 32 : 64;
      const R2 = Math.log2(N2);
      const makeId = (suffix) => `BOUT-${classScopeToken}-${suffix}`;
      let queueSeq = 1;
      const createEmptyNode = (matchId, roundIndex, roundLabel, isConsolation, isPlacement = false, placementRank = 0, isTrueSecond = false) => {
        const matId = (queueSeq - 1) % this.matCount + 1;
        const bout = {
          match_id: matchId,
          bracket_id: bracketId,
          weight_class_id: weightClassId,
          division_id: resolvedDivision,
          format: effectiveFormat,
          bout_number: this.nextBoutNumber++,
          round_index: roundIndex,
          round_label: roundLabel,
          is_consolation: isConsolation,
          is_placement_bout: isPlacement,
          is_true_second_challenge: isTrueSecond,
          placement_rank: placementRank,
          red_athlete_id: "",
          green_athlete_id: "",
          is_bye: false,
          winner_next_match_id: "",
          loser_next_match_id: "",
          lifecycle: BoutLifecycle.PendingUpstream,
          assigned_mat_id: matId,
          mat_queue_order: queueSeq++,
          assignment_revision: 1,
          authority_epoch: 1,
          delegated_android_device_id: `ANDROID-MAT-${matId}-S921U1`,
          red_score: 0,
          green_score: 0,
          period_number: 1,
          clock_remaining_ms: 12e4,
          clock_running: false,
          winner_athlete_id: "",
          loser_athlete_id: "",
          win_type: "",
          completed_at_ms: 0
        };
        this.bouts.set(matchId, bout);
        created.push(bout);
        return bout;
      };
      const champIds = Array.from({ length: R2 + 1 }, () => []);
      for (let r2 = 1; r2 <= R2; r2++) {
        const count = N2 >> r2;
        const label = r2 === R2 ? "1st Place Championship Final" : count === 2 ? "Championship Semifinal" : count === 4 ? "Championship Quarterfinal" : `Championship Round of ${count * 2}`;
        for (let i2 = 0; i2 < count; i2++) {
          const mId = r2 === R2 ? makeId("FINAL-1ST") : makeId(`C${r2}-${i2 + 1}`);
          champIds[r2].push(mId);
          createEmptyNode(mId, r2, label, false, r2 === R2, r2 === R2 ? 1 : 0);
        }
      }
      for (let r2 = 1; r2 < R2; r2++) {
        const list = champIds[r2];
        for (let i2 = 0; i2 < list.length; i2++) {
          const bout = this.bouts.get(list[i2]);
          bout.winner_next_match_id = champIds[r2 + 1][Math.floor(i2 / 2)];
        }
      }
      const final3rdId = makeId("FINAL-3RD");
      const place5Id = makeId("P5");
      const place7Id = makeId("P7");
      const true2ndId = makeId("TRUE-2ND");
      let consRoundNum = 1;
      let prevConsIds = [];
      for (let i2 = 0; i2 < N2 / 4; i2++) {
        const mId = makeId(`L${consRoundNum}-${i2 + 1}`);
        prevConsIds.push(mId);
        createEmptyNode(mId, consRoundNum + 1, `Consolation Round ${consRoundNum}`, true);
        const c0 = this.bouts.get(champIds[1][2 * i2]);
        const c1 = this.bouts.get(champIds[1][2 * i2 + 1]);
        c0.loser_next_match_id = mId;
        c1.loser_next_match_id = mId;
      }
      for (let c2 = 2; c2 < R2; c2++) {
        const dropCount = champIds[c2].length;
        consRoundNum += 1;
        const dropConsIds = [];
        for (let i2 = 0; i2 < dropCount; i2++) {
          const mId = makeId(`L${consRoundNum}-${i2 + 1}`);
          dropConsIds.push(mId);
          const label = c2 === R2 - 1 ? "Consolation Semifinal (Crossover)" : `Consolation Round ${consRoundNum} (Crossover)`;
          createEmptyNode(mId, c2 + consRoundNum, label, true);
          const prevB = this.bouts.get(prevConsIds[i2]);
          prevB.winner_next_match_id = mId;
          const crossoverIdx = c2 % 2 === 0 ? dropCount - 1 - i2 : i2 ^ Math.floor(dropCount / 2);
          const champB = this.bouts.get(champIds[c2][crossoverIdx]);
          champB.loser_next_match_id = mId;
        }
        if (c2 < R2 - 1) {
          consRoundNum += 1;
          const redCount = dropCount / 2;
          const redConsIds = [];
          for (let i2 = 0; i2 < redCount; i2++) {
            const mId = makeId(`L${consRoundNum}-${i2 + 1}`);
            redConsIds.push(mId);
            const label = redCount === 2 ? "Consolation Quarterfinal" : `Consolation Round ${consRoundNum}`;
            const rq = createEmptyNode(mId, c2 + consRoundNum, label, true);
            const d0 = this.bouts.get(dropConsIds[2 * i2]);
            const d1 = this.bouts.get(dropConsIds[2 * i2 + 1]);
            d0.winner_next_match_id = mId;
            d1.winner_next_match_id = mId;
            if (redCount === 2) {
              rq.loser_next_match_id = place7Id;
            }
          }
          prevConsIds = redConsIds;
        } else {
          for (let i2 = 0; i2 < 2; i2++) {
            const cs = this.bouts.get(dropConsIds[i2]);
            cs.winner_next_match_id = final3rdId;
            cs.loser_next_match_id = place5Id;
          }
          prevConsIds = dropConsIds;
        }
      }
      const placementRound = R2 + consRoundNum + 1;
      const p3 = createEmptyNode(final3rdId, placementRound, "3rd Place Match", true, true, 3);
      createEmptyNode(place5Id, placementRound, "5th Place Match", true, true, 5);
      createEmptyNode(place7Id, placementRound, "7th Place Match", true, true, 7);
      if (effectiveFormat === BracketFormat.TrueSecondChallenge) {
        createEmptyNode(
          true2ndId,
          placementRound + 1,
          "True Second Challenge Match",
          true,
          true,
          2,
          true
        );
        const finalBout = this.bouts.get(champIds[R2][0]);
        finalBout.loser_next_match_id = true2ndId;
        p3.winner_next_match_id = true2ndId;
      }
      const topSeeds = TournamentAuthorityEngine.buildStandardTopSeeds(N2);
      const nowMs = this.now();
      for (let m2 = 0; m2 < N2 / 2; m2++) {
        const seedA = topSeeds[m2];
        const seedB = N2 + 1 - seedA;
        const bout = this.bouts.get(champIds[1][m2]);
        const red = seedA >= 1 && seedA <= entrants.length ? entrants[seedA - 1].athlete_id : "";
        const green = seedB >= 1 && seedB <= entrants.length ? entrants[seedB - 1].athlete_id : "";
        if (red && green) {
          bout.red_athlete_id = red;
          bout.green_athlete_id = green;
          bout.is_bye = false;
          bout.lifecycle = BoutLifecycle.Assigned;
        } else if (red || green) {
          const sole = red || green;
          bout.red_athlete_id = sole;
          bout.green_athlete_id = "";
          bout.is_bye = true;
          bout.lifecycle = BoutLifecycle.ResultAccepted;
          bout.winner_athlete_id = sole;
          bout.loser_athlete_id = "";
          bout.win_type = "BYE";
          bout.completed_at_ms = nowMs;
        } else {
          bout.red_athlete_id = "";
          bout.green_athlete_id = "";
          bout.is_bye = true;
          bout.lifecycle = BoutLifecycle.ResultAccepted;
          bout.winner_athlete_id = "";
          bout.loser_athlete_id = "";
          bout.win_type = "BYE";
          bout.completed_at_ms = nowMs;
        }
      }
      for (const b2 of created) {
        if (b2.is_bye && b2.winner_athlete_id && b2.winner_next_match_id) {
          this.advanceParticipantToDownstream(b2.winner_next_match_id, b2.winner_athlete_id);
        }
      }
      this.resolveCompletedByesForBracket(bracketId, nowMs);
    }
    this.numberBoutsInRunningOrder();
    this.bracketFrozenByClass.set(`${resolvedDivision}:${weightClassId}`, true);
    if (!hasMultipleDivisionsAtWeight) {
      this.bracketFrozenByClass.set(weightClassId, true);
    }
    this.publishAndSave();
    return created;
  }
  static buildStandardTopSeeds(bracketSize) {
    let topSeeds = [1];
    let numMatches = 1;
    while (numMatches * 2 <= bracketSize / 2) {
      const nextMatches = numMatches * 2;
      const next = [];
      for (let i2 = 0; i2 < topSeeds.length; i2++) {
        const x2 = topSeeds[i2];
        const complement = nextMatches + 1 - x2;
        if (i2 % 2 === 0) {
          next.push(x2, complement);
        } else {
          next.push(complement, x2);
        }
      }
      topSeeds = next;
      numMatches = nextMatches;
    }
    return topSeeds;
  }
  advanceCompetitionDay(nowMs = this.now()) {
    for (const athlete of this.athletes.values()) {
      athlete.prior_day_matches = athlete.matches_wrestled_today;
      athlete.matches_wrestled_today = 0;
      athlete.last_bout_ended_ms = 0;
      athlete.updated_at_ms = nowMs;
    }
    this.publishAndSave();
  }
  reconcileBestOfThreeBracket(bracketId, nowMs = this.now()) {
    const bo3Bouts = Array.from(this.bouts.values()).filter((b2) => b2.bracket_id === bracketId && b2.format === BracketFormat.BestOfThree).sort((a2, b2) => a2.round_index - b2.round_index);
    if (bo3Bouts.length < 3) return;
    const [m1, m2, m3] = bo3Bouts;
    const seed1Id = m1.red_athlete_id;
    const seed2Id = m1.green_athlete_id;
    if (!seed1Id || !seed2Id) return;
    m2.red_athlete_id = seed2Id;
    m2.green_athlete_id = seed1Id;
    m3.red_athlete_id = seed1Id;
    m3.green_athlete_id = seed2Id;
    if (m1.lifecycle !== BoutLifecycle.ResultAccepted) {
      if (m2.lifecycle === BoutLifecycle.Assigned) {
        m2.lifecycle = BoutLifecycle.PendingUpstream;
      }
      m2.is_placement_bout = false;
      m2.placement_rank = 0;
      m3.is_bye = false;
      m3.lifecycle = BoutLifecycle.PendingUpstream;
      m3.is_placement_bout = true;
      m3.placement_rank = 1;
      m3.winner_athlete_id = "";
      m3.loser_athlete_id = "";
      m3.win_type = "";
      m3.completed_at_ms = 0;
      return;
    }
    if (m2.lifecycle !== BoutLifecycle.ResultAccepted) {
      if (m2.lifecycle === BoutLifecycle.PendingUpstream) {
        m2.lifecycle = BoutLifecycle.Assigned;
      }
      m2.is_placement_bout = false;
      m2.placement_rank = 0;
      m3.is_bye = false;
      m3.lifecycle = BoutLifecycle.PendingUpstream;
      m3.is_placement_bout = true;
      m3.placement_rank = 1;
      m3.winner_athlete_id = "";
      m3.loser_athlete_id = "";
      m3.win_type = "";
      m3.completed_at_ms = 0;
      return;
    }
    if (m1.winner_athlete_id && m1.winner_athlete_id === m2.winner_athlete_id) {
      m2.is_placement_bout = true;
      m2.placement_rank = 1;
      m3.is_placement_bout = false;
      m3.placement_rank = 0;
      m3.is_bye = true;
      m3.lifecycle = BoutLifecycle.ResultAccepted;
      m3.winner_athlete_id = m2.winner_athlete_id;
      m3.loser_athlete_id = m2.loser_athlete_id;
      m3.win_type = "BYE";
      m3.completed_at_ms = m2.completed_at_ms || nowMs;
    } else {
      m2.is_placement_bout = false;
      m2.placement_rank = 0;
      m3.is_placement_bout = true;
      m3.placement_rank = 1;
      if (m3.is_bye || m3.lifecycle === BoutLifecycle.PendingUpstream) {
        m3.is_bye = false;
        m3.lifecycle = BoutLifecycle.Assigned;
        m3.winner_athlete_id = "";
        m3.loser_athlete_id = "";
        m3.win_type = "";
        m3.completed_at_ms = 0;
      }
    }
  }
  resolveCompletedByesForBracket(bracketId, nowMs = this.now()) {
    this.reconcileBestOfThreeBracket(bracketId, nowMs);
    let changed = true;
    while (changed) {
      changed = false;
      const bracketBouts = Array.from(this.bouts.values()).filter((b2) => b2.bracket_id === bracketId);
      for (const target of bracketBouts) {
        if (target.format === BracketFormat.BestOfThree) continue;
        if (target.lifecycle !== BoutLifecycle.PendingUpstream) continue;
        const feeders = bracketBouts.filter(
          (u2) => u2.winner_next_match_id === target.match_id || u2.loser_next_match_id === target.match_id
        );
        if (feeders.length === 0 || !feeders.every((u2) => u2.lifecycle === BoutLifecycle.ResultAccepted)) {
          continue;
        }
        if (target.red_athlete_id && target.green_athlete_id) {
          target.lifecycle = BoutLifecycle.Assigned;
          changed = true;
        } else if (target.red_athlete_id || target.green_athlete_id) {
          const soleAthleteId = target.red_athlete_id || target.green_athlete_id;
          target.red_athlete_id = soleAthleteId;
          target.green_athlete_id = "";
          target.is_bye = true;
          target.lifecycle = BoutLifecycle.ResultAccepted;
          target.winner_athlete_id = soleAthleteId;
          target.loser_athlete_id = "";
          target.win_type = "BYE";
          target.completed_at_ms = nowMs;
          if (target.winner_next_match_id) {
            this.advanceParticipantToDownstream(target.winner_next_match_id, soleAthleteId);
          }
          changed = true;
        } else {
          target.is_bye = true;
          target.lifecycle = BoutLifecycle.ResultAccepted;
          target.winner_athlete_id = "";
          target.loser_athlete_id = "";
          target.win_type = "BYE";
          target.completed_at_ms = nowMs;
          changed = true;
        }
      }
    }
  }
  advanceParticipantToDownstream(targetMatchId, athleteId) {
    const target = this.bouts.get(targetMatchId);
    if (!target || !athleteId) return;
    if (!target.red_athlete_id) {
      target.red_athlete_id = athleteId;
    } else if (!target.green_athlete_id && target.red_athlete_id !== athleteId) {
      target.green_athlete_id = athleteId;
    }
    if (target.red_athlete_id && target.green_athlete_id && target.lifecycle === BoutLifecycle.PendingUpstream) {
      target.lifecycle = BoutLifecycle.Assigned;
    }
  }
  // ============================================================================
  // 5. Mat Queue Dispatch, Safety Locks & Android Result Acceptance
  // ============================================================================
  assignBoutToMat(matchId, matId, queueStage, currentTimeMs = this.now()) {
    const bout = this.bouts.get(matchId);
    if (!bout) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, `Unknown bout: ${matchId}`);
    }
    const mat = this.mats.get(matId);
    if (!mat) throw new OpenMatProtocolError(ErrorCode.InvalidArgument, `Unknown Mat ${matId}`);
    if (bout.lifecycle !== BoutLifecycle.Assigned && bout.lifecycle !== BoutLifecycle.Ready) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, "Only unstarted bouts may be queued or moved");
    }
    if (!bout.red_athlete_id || !bout.green_athlete_id) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        `Bout #${bout.bout_number} does not have both participants determined yet.`
      );
    }
    if (queueStage === "READY") {
      this.validateBoutSafetyGates(bout, currentTimeMs);
    }
    bout.assigned_mat_id = matId;
    bout.delegated_android_device_id = mat.android_device_id;
    bout.authority_epoch = mat.authority_epoch;
    bout.assignment_revision += 1;
    if (queueStage === "READY") {
      bout.lifecycle = BoutLifecycle.Ready;
      bout.mat_queue_order = 1;
    } else if (queueStage === "ON_DECK") {
      bout.lifecycle = BoutLifecycle.Assigned;
      bout.mat_queue_order = 2;
    } else {
      bout.lifecycle = BoutLifecycle.Assigned;
      bout.mat_queue_order = 3;
    }
    this.publishAndSave();
    return bout;
  }
  validateBoutSafetyGates(bout, currentTimeMs = this.now()) {
    for (const id of [bout.red_athlete_id, bout.green_athlete_id]) {
      const athlete = this.athletes.get(id);
      if (!athlete) continue;
      if (!athlete.weigh_in_eligible || !athlete.medically_cleared) {
        throw new OpenMatProtocolError(
          ErrorCode.InvalidArgument,
          `SAFETY LOCK: ${athlete.public_display_name} has not completed Weigh-In and Medical clearance.`
        );
      }
      if (athlete.matches_wrestled_today >= this.dailyMatchCap) {
        throw new OpenMatProtocolError(
          ErrorCode.InvalidArgument,
          `NFHS DAILY CAP LOCK (REQ-SCH-04): ${athlete.public_display_name} has already wrestled ${athlete.matches_wrestled_today}/${this.dailyMatchCap} matches today.`
        );
      }
      if (athlete.prior_day_matches + athlete.matches_wrestled_today >= this.consecutiveTwoDayCap) {
        throw new OpenMatProtocolError(
          ErrorCode.InvalidArgument,
          `NFHS TWO-DAY CAP LOCK (REQ-SCH-04): ${athlete.public_display_name} has reached the 10-match consecutive two-day limit.`
        );
      }
      if (athlete.last_bout_ended_ms > 0) {
        const elapsed = currentTimeMs - athlete.last_bout_ended_ms;
        if (elapsed < this.requiredRestMs) {
          const remainingMin = Math.ceil((this.requiredRestMs - elapsed) / 6e4);
          throw new OpenMatProtocolError(
            ErrorCode.InvalidArgument,
            `NFHS 30-MIN REST LOCK (REQ-SCH-03): ${athlete.public_display_name} requires ${remainingMin} more minute(s) of mandatory recovery before starting.`
          );
        }
      }
    }
    const currentRound = Math.min(...[...this.bouts.values()].filter((b2) => !b2.is_bye && b2.lifecycle !== BoutLifecycle.ResultAccepted).map((b2) => b2.round_index));
    if (bout.round_index > currentRound) {
      throw new Error(`ROUND ORDER LOCK: Complete round ${currentRound} across all weight classes before starting round ${bout.round_index}.`);
    }
  }
  clearAthleteRestWindowForTesting(athleteId) {
    const athlete = this.athletes.get(athleteId);
    if (!athlete) return;
    athlete.last_bout_ended_ms = this.now() - 35 * 60 * 1e3;
    this.publishAndSave();
  }
  getAthleteRestStatus(athleteId, currentTimeMs = this.now()) {
    const athlete = this.athletes.get(athleteId);
    if (!athlete || athlete.last_bout_ended_ms <= 0) {
      return {
        restLocked: false,
        remainingMs: 0,
        remainingMinutes: 0,
        lastBoutEndedMs: 0,
        readyAtMs: 0
      };
    }
    const elapsed = currentTimeMs - athlete.last_bout_ended_ms;
    const readyAtMs = athlete.last_bout_ended_ms + this.requiredRestMs;
    if (elapsed >= this.requiredRestMs) {
      return {
        restLocked: false,
        remainingMs: 0,
        remainingMinutes: 0,
        lastBoutEndedMs: athlete.last_bout_ended_ms,
        readyAtMs
      };
    }
    const remainingMs = this.requiredRestMs - elapsed;
    return {
      restLocked: true,
      remainingMs,
      remainingMinutes: Math.ceil(remainingMs / 6e4),
      lastBoutEndedMs: athlete.last_bout_ended_ms,
      readyAtMs
    };
  }
  clearBoutRestLock(matchId) {
    const bout = this.bouts.get(matchId);
    if (!bout) return;
    for (const id of [bout.red_athlete_id, bout.green_athlete_id]) {
      if (!id) continue;
      const athlete = this.athletes.get(id);
      if (athlete) {
        athlete.last_bout_ended_ms = 0;
      }
    }
    this.publishAndSave();
  }
  getBoutRestStatus(matchId, currentTimeMs = this.now()) {
    const bout = this.bouts.get(matchId);
    if (!bout) {
      return {
        restLocked: false,
        remainingMs: 0,
        remainingMinutes: 0,
        readyAtMs: 0,
        restingAthleteNames: [],
        restingAthletes: []
      };
    }
    const restingAthletes = [];
    let maxRemainingMs = 0;
    let maxReadyAtMs = 0;
    for (const id of [bout.red_athlete_id, bout.green_athlete_id]) {
      if (!id) continue;
      const st = this.getAthleteRestStatus(id, currentTimeMs);
      if (st.restLocked) {
        const ath = this.athletes.get(id);
        restingAthletes.push({
          athleteId: id,
          name: ath?.public_display_name ?? id,
          remainingMs: st.remainingMs,
          remainingMinutes: st.remainingMinutes
        });
        if (st.remainingMs > maxRemainingMs) maxRemainingMs = st.remainingMs;
        if (st.readyAtMs > maxReadyAtMs) maxReadyAtMs = st.readyAtMs;
      }
    }
    return {
      restLocked: restingAthletes.length > 0,
      remainingMs: maxRemainingMs,
      remainingMinutes: Math.ceil(maxRemainingMs / 6e4),
      readyAtMs: maxReadyAtMs,
      restingAthleteNames: restingAthletes.map((a2) => a2.name),
      restingAthletes
    };
  }
  /**
   * Automatically stages the next eligible, rested bouts in the active round onto open mats,
   * while holding bouts whose wrestlers are still inside their 30-minute NFHS recovery window.
   */
  dispatchNextAvailableBoutsToMats(currentTimeMs = this.now()) {
    const uncompleted = Array.from(this.bouts.values()).filter(
      (b2) => !b2.is_bye && b2.lifecycle !== BoutLifecycle.ResultAccepted
    );
    if (uncompleted.length === 0) {
      return { stagedBouts: [], restingBouts: [] };
    }
    const currentRound = Math.min(...uncompleted.map((b2) => b2.round_index));
    const activeAthleteIds = /* @__PURE__ */ new Set();
    const busyMatIds = /* @__PURE__ */ new Set();
    for (const b2 of uncompleted) {
      if (b2.lifecycle === BoutLifecycle.InProgress || b2.lifecycle === BoutLifecycle.Ready) {
        busyMatIds.add(b2.assigned_mat_id);
        if (b2.red_athlete_id) activeAthleteIds.add(b2.red_athlete_id);
        if (b2.green_athlete_id) activeAthleteIds.add(b2.green_athlete_id);
      }
    }
    const candidates = uncompleted.filter(
      (b2) => b2.round_index === currentRound && b2.lifecycle === BoutLifecycle.Assigned && Boolean(b2.red_athlete_id && b2.green_athlete_id)
    ).sort((a2, b2) => a2.bout_number - b2.bout_number);
    const stagedBouts = [];
    const restingBouts = [];
    for (const bout of candidates) {
      if (activeAthleteIds.has(bout.red_athlete_id) || activeAthleteIds.has(bout.green_athlete_id)) {
        continue;
      }
      const rest = this.getBoutRestStatus(bout.match_id, currentTimeMs);
      if (rest.restLocked) {
        restingBouts.push({
          bout,
          remainingMinutes: rest.remainingMinutes,
          restingNames: rest.restingAthletes.map((r2) => r2.name)
        });
        continue;
      }
      let targetMatId = !busyMatIds.has(bout.assigned_mat_id) && this.mats.has(bout.assigned_mat_id) ? bout.assigned_mat_id : 0;
      if (!targetMatId) {
        for (const mId of this.mats.keys()) {
          if (!busyMatIds.has(mId)) {
            targetMatId = mId;
            break;
          }
        }
      }
      if (!targetMatId) continue;
      try {
        const staged = this.assignBoutToMat(bout.match_id, targetMatId, "READY", currentTimeMs);
        stagedBouts.push(staged);
        busyMatIds.add(targetMatId);
        activeAthleteIds.add(bout.red_athlete_id);
        activeAthleteIds.add(bout.green_athlete_id);
      } catch {
      }
    }
    return { stagedBouts, restingBouts };
  }
  validateConfirmedResult(bout, winner, winType, red, green) {
    if (!winner || ![bout.red_athlete_id, bout.green_athlete_id].includes(winner) || !["FALL", "TF", "MD", "DEC", "FORFEIT", "INJURY_DEFAULT", "DQ"].includes(winType) || !Number.isSafeInteger(red) || red < 0 || red > 1e3 || !Number.isSafeInteger(green) || green < 0 || green > 1e3) throw new Error("Invalid confirmed result");
    if (["DEC", "MD", "TF"].includes(winType) && (winner === bout.red_athlete_id ? red < green : green < red)) {
      throw new Error("Confirmed winner contradicts the score");
    }
  }
  /** Accept a confirmed result and atomically advance the bracket DAG. */
  recordMatsideConfirmedResult(matchId, winnerAthleteId, winType, redScore, greenScore, authorityEpoch = 1, completedAtMs = this.now()) {
    const bout = this.bouts.get(matchId);
    if (!bout) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, `Unknown bout: ${matchId}`);
    }
    if (authorityEpoch < bout.authority_epoch) {
      throw new OpenMatProtocolError(
        ErrorCode.EpochFencedOldEvent,
        `Rejected Android matside result from stale authority_epoch ${authorityEpoch} < ${bout.authority_epoch}`
      );
    }
    this.validateConfirmedResult(bout, winnerAthleteId, winType, redScore, greenScore);
    if (bout.lifecycle === BoutLifecycle.ResultAccepted) {
      if (bout.winner_athlete_id === winnerAthleteId && bout.win_type === winType && bout.red_score === redScore && bout.green_score === greenScore) return bout;
      throw new Error("Accepted results require the correction workflow");
    }
    const loserId = winnerAthleteId === bout.red_athlete_id ? bout.green_athlete_id : bout.red_athlete_id;
    const now = completedAtMs;
    bout.red_score = redScore;
    bout.green_score = greenScore;
    bout.winner_athlete_id = winnerAthleteId;
    bout.loser_athlete_id = loserId;
    bout.win_type = winType;
    bout.clock_running = false;
    bout.clock_remaining_ms = 0;
    bout.completed_at_ms = now;
    bout.lifecycle = BoutLifecycle.ResultAccepted;
    for (const pid of [bout.red_athlete_id, bout.green_athlete_id]) {
      const athlete = this.athletes.get(pid);
      if (athlete && winType !== "FORFEIT") {
        athlete.matches_wrestled_today += 1;
        athlete.last_bout_ended_ms = now;
        athlete.updated_at_ms = now;
      }
    }
    if (bout.winner_next_match_id) {
      this.advanceParticipantToDownstream(bout.winner_next_match_id, winnerAthleteId);
    }
    if (bout.loser_next_match_id) {
      this.advanceParticipantToDownstream(bout.loser_next_match_id, loserId);
    }
    this.resolveCompletedByesForBracket(bout.bracket_id, now);
    this.publishAndSave();
    return bout;
  }
  detectCoachConflicts() {
    const activeBouts = Array.from(this.bouts.values()).filter(
      (b2) => b2.lifecycle === BoutLifecycle.InProgress || b2.lifecycle === BoutLifecycle.Ready
    );
    const alerts = [];
    for (let i2 = 0; i2 < activeBouts.length; i2++) {
      for (let j = i2 + 1; j < activeBouts.length; j++) {
        const a2 = activeBouts[i2];
        const b2 = activeBouts[j];
        if (a2.assigned_mat_id === b2.assigned_mat_id) continue;
        const aAthletes = [this.athletes.get(a2.red_athlete_id), this.athletes.get(a2.green_athlete_id)].filter(Boolean);
        const bAthletes = [this.athletes.get(b2.red_athlete_id), this.athletes.get(b2.green_athlete_id)].filter(Boolean);
        for (const athA of aAthletes) {
          for (const athB of bAthletes) {
            if (athA && athB && athA.team_id === athB.team_id) {
              alerts.push({
                team_id: athA.team_id,
                team_name: athA.team_name,
                first_match_id: a2.match_id,
                first_bout_number: a2.bout_number,
                first_mat_id: a2.assigned_mat_id,
                first_athlete_id: athA.athlete_id,
                first_athlete_name: athA.public_display_name,
                second_match_id: b2.match_id,
                second_bout_number: b2.bout_number,
                second_mat_id: b2.assigned_mat_id,
                second_athlete_id: athB.athlete_id,
                second_athlete_name: athB.public_display_name
              });
            }
          }
        }
      }
    }
    return alerts;
  }
  previewCorrectionImpact(matchId) {
    const root = this.bouts.get(matchId);
    if (!root) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, `Unknown match_id: ${matchId}`);
    }
    const affected = [];
    const activeHalt = [];
    let safe = true;
    const queue = [];
    if (root.winner_next_match_id) queue.push(root.winner_next_match_id);
    if (root.loser_next_match_id) queue.push(root.loser_next_match_id);
    const visited = /* @__PURE__ */ new Set();
    while (queue.length > 0) {
      const nextId = queue.shift();
      if (!nextId || visited.has(nextId)) continue;
      visited.add(nextId);
      const node = this.bouts.get(nextId);
      if (!node) continue;
      affected.push(node.match_id);
      if (node.lifecycle === BoutLifecycle.InProgress) {
        activeHalt.push(node.match_id);
        safe = false;
      } else if (![BoutLifecycle.PendingUpstream, BoutLifecycle.Assigned, BoutLifecycle.Ready].includes(node.lifecycle) && !(node.lifecycle === BoutLifecycle.ResultAccepted && node.is_bye)) {
        safe = false;
      }
      if (node.winner_next_match_id) queue.push(node.winner_next_match_id);
      if (node.loser_next_match_id) queue.push(node.loser_next_match_id);
    }
    return {
      target_match_id: matchId,
      bout_number: root.bout_number,
      affected_downstream_matches: affected,
      active_matches_requiring_halt: activeHalt,
      safe_to_auto_apply: safe
    };
  }
  /** Correct an accepted result only while every contested descendant is unstarted. */
  correctAcceptedResult(input) {
    if (this.consoleRole !== "primary") throw new Error("Only the primary head table may correct results");
    const root = this.bouts.get(input.matchId);
    if (!root || root.is_bye || root.lifecycle !== BoutLifecycle.ResultAccepted) throw new Error("Correction requires an accepted contested result");
    if (root.win_type === "FORFEIT" !== (input.winType === "FORFEIT")) throw new Error("Correction cannot change forfeit participation");
    if (!input.reason.trim() || ![root.red_athlete_id, root.green_athlete_id].includes(input.winnerAthleteId) || !["FALL", "TF", "MD", "DEC", "FORFEIT", "INJURY_DEFAULT", "DQ"].includes(input.winType) || !Number.isSafeInteger(input.redScore) || input.redScore < 0 || input.redScore > 1e3 || !Number.isSafeInteger(input.greenScore) || input.greenScore < 0 || input.greenScore > 1e3) throw new Error("Invalid result correction");
    const margin = Math.abs(input.redScore - input.greenScore);
    const winnerLeads = input.winnerAthleteId === root.red_athlete_id ? input.redScore > input.greenScore : input.greenScore > input.redScore;
    if (["DEC", "MD", "TF"].includes(input.winType) && (!winnerLeads || input.winType === "DEC" && margin >= 8 || input.winType === "MD" && (margin < 8 || margin >= 15) || input.winType === "TF" && margin < 15)) throw new Error("Corrected winner and win type must match the score");
    const impact = this.previewCorrectionImpact(input.matchId);
    if (!impact.safe_to_auto_apply) throw new Error("Downstream bouts already progressed; correction requires physical halt and director review");
    const before = structuredClone(root);
    const affected = new Set(impact.affected_downstream_matches);
    Object.assign(root, {
      winner_athlete_id: input.winnerAthleteId,
      loser_athlete_id: input.winnerAthleteId === root.red_athlete_id ? root.green_athlete_id : root.red_athlete_id,
      win_type: input.winType,
      red_score: input.redScore,
      green_score: input.greenScore,
      assignment_revision: root.assignment_revision + 1
    });
    for (const id of affected) {
      const bout = this.bouts.get(id);
      Object.assign(bout, {
        red_athlete_id: "",
        green_athlete_id: "",
        winner_athlete_id: "",
        loser_athlete_id: "",
        is_bye: false,
        lifecycle: BoutLifecycle.PendingUpstream,
        red_score: 0,
        green_score: 0,
        win_type: "",
        completed_at_ms: 0,
        period_number: 1,
        clock_running: false,
        clock_remaining_ms: this.rulesBundle.period_1_duration_ms,
        mat_queue_order: 0,
        assignment_revision: bout.assignment_revision + 1
      });
    }
    for (const bout of [...this.bouts.values()].sort((a2, b2) => a2.bout_number - b2.bout_number)) {
      if (bout.lifecycle !== BoutLifecycle.ResultAccepted) continue;
      if (affected.has(bout.winner_next_match_id)) this.advanceParticipantToDownstream(bout.winner_next_match_id, bout.winner_athlete_id);
      if (affected.has(bout.loser_next_match_id)) this.advanceParticipantToDownstream(bout.loser_next_match_id, bout.loser_athlete_id);
    }
    this.resolveCompletedByesForBracket(root.bracket_id);
    this.resultCorrections.push({ before, after: structuredClone(root), reason: input.reason.trim(), atMs: this.now(), affected: [...affected] });
    this.publishAndSave();
    return root;
  }
  transferMatAuthority(input) {
    if (input.reason === "TIMEOUT_ONLY_INVALID") {
      throw new OpenMatProtocolError(
        ErrorCode.TimeoutTakeoverForbidden,
        "Timeout-only authority takeover is forbidden (REQ-AUTH-08)."
      );
    }
    if (!input.oldDevicePhysicallyStopped || !input.timersInitializedStopped) {
      throw new OpenMatProtocolError(
        ErrorCode.InvalidArgument,
        "Old Android scoring device must be physically stopped and all handoff timers must initialize stopped (REQ-AUTH-10)."
      );
    }
    const mat = this.mats.get(input.matId);
    if (!mat) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, `Unknown Mat ${input.matId}`);
    }
    const newEpoch = mat.authority_epoch + 1;
    const newDeviceId = input.newAndroidDeviceId.trim() || mat.android_device_id;
    const newOpName = input.newOperatorName.trim() || mat.operator_name;
    let pubHex = input.subjectPubkeyHex?.trim().toLowerCase() ?? "";
    if (!/^[a-f0-9]{64}$/i.test(pubHex)) throw new Error("A device-generated Ed25519 public key is required");
    if (mat.certificate_id) {
      this.revokedCertificateIds.add(mat.certificate_id);
    }
    const updatedMat = this.buildSignedMatDelegation(
      input.matId,
      newDeviceId,
      newOpName,
      newEpoch,
      pubHex,
      this.now()
    );
    this.registerMatDelegation(updatedMat);
    this.mats.set(input.matId, updatedMat);
    this.syncVenueRoomRouter();
    for (const bout of this.bouts.values()) {
      if (bout.assigned_mat_id === input.matId && bout.lifecycle !== BoutLifecycle.ResultAccepted) {
        bout.authority_epoch = updatedMat.authority_epoch;
        bout.delegated_android_device_id = updatedMat.android_device_id;
        bout.clock_running = false;
      }
    }
    this.publishAndSave();
    return updatedMat;
  }
  // ============================================================================
  // 5b. QR Code Public Key Sharing & Scorekeeper Delegated Certificate Auth
  // ============================================================================
  getTournamentJoinQrUri(relayOrigin = authorityOrigin()) {
    const payload = createSignedTournamentJoinPayload({
      tournamentId: this.tournamentId,
      tournamentName: this.tournamentName,
      rulesVersion: this.rulesVersion,
      publisherPubkeyHex: this.publisherPublicKeyHex,
      relayOrigin,
      issuedAtMs: this.now(),
      rootPrivateKey: this.keyPair.privateKey
    });
    return encodeTournamentJoinQrUri(payload);
  }
  getTournamentJoinQrSvg(relayOrigin = authorityOrigin()) {
    return renderQrSvgDataUrl(this.getTournamentJoinQrUri(relayOrigin));
  }
  getActiveSharePubkeyHex() {
    return this.linkedVenuePubkeyHex || this.publisherPublicKeyHex;
  }
  getPublicPlayerWebUrl(baseUrl = TournamentAuthorityEngine.DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL) {
    const cleanBase = baseUrl.trim().replace(/\/+$/, "");
    const key = this.getActiveSharePubkeyHex();
    return key ? `${cleanBase}/?${key}` : `${cleanBase}/`;
  }
  getPublicOfficialsWebUrl(baseUrl = TournamentAuthorityEngine.DEFAULT_PUBLIC_OFFICIALS_WEB_BASE_URL) {
    const cleanBase = baseUrl.trim().replace(/\/+$/, "");
    const key = this.getActiveSharePubkeyHex();
    return key ? `${cleanBase}/?${key}` : `${cleanBase}/`;
  }
  getLocalWifiPlayerWebUrl(origin = this.activeVenueOrigin) {
    try {
      const u2 = new URL("/", origin);
      const key = this.getActiveSharePubkeyHex();
      return key ? `${u2.href}?${key}` : u2.href;
    } catch {
      return `${origin.replace(/\/+$/, "")}/?${this.getActiveSharePubkeyHex()}`;
    }
  }
  getLocalWifiOfficialsWebUrl(origin = this.activeVenueOrigin) {
    try {
      const u2 = new URL("/officials/", origin);
      const key = this.getActiveSharePubkeyHex();
      return key ? `${u2.href}?${key}` : u2.href;
    } catch {
      return `${origin.replace(/\/+$/, "")}/officials/?${this.getActiveSharePubkeyHex()}`;
    }
  }
  getPublicPlayerWebQrSvg(baseUrl = TournamentAuthorityEngine.DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL) {
    return renderQrSvgDataUrl(this.getPublicPlayerWebUrl(baseUrl));
  }
  getPublicOfficialsWebQrSvg(baseUrl = TournamentAuthorityEngine.DEFAULT_PUBLIC_OFFICIALS_WEB_BASE_URL) {
    return renderQrSvgDataUrl(this.getPublicOfficialsWebUrl(baseUrl));
  }
  signProjectionNostrEvent(envelope = this.buildSignedPublicProjection()) {
    const secretBytes = sha256(this.keyPair.privateKey.slice(0, 32));
    const pubkeyHex = toHex(schnorr.getPublicKey(secretBytes)).toLowerCase();
    const createdAt = Math.floor(this.now() / 1e3);
    const tags = [
      ["d", `openmat:${envelope.tournament_id}`],
      ["x", `openmat-proj:${envelope.tournament_id}`],
      ["x", `openmat-pub:${envelope.publisher_pubkey_hex.toLowerCase()}`],
      ["x", "openmat:v1"]
    ];
    if (this.linkedVenuePubkeyHex && this.linkedVenuePubkeyHex.toLowerCase() !== envelope.publisher_pubkey_hex.toLowerCase()) {
      tags.push(["x", `openmat-pub:${this.linkedVenuePubkeyHex.toLowerCase()}`]);
    }
    const content = JSON.stringify(envelope);
    const canonical2 = JSON.stringify([0, pubkeyHex, createdAt, 30078, tags, content]);
    const idBytes = sha256(new TextEncoder().encode(canonical2));
    const id = toHex(idBytes);
    const sig = toHex(schnorr.sign(idBytes, secretBytes));
    return {
      id,
      pubkey: pubkeyHex,
      created_at: createdAt,
      kind: 30078,
      tags,
      content,
      sig
    };
  }
  publishProjectionToPublicNostrRelays(envelope = this.buildSignedPublicProjection()) {
    if (typeof window === "undefined" || typeof WebSocket === "undefined" || !this.broadcastEnabled || this.isSeeding) {
      return;
    }
    const nostrEvent = this.signProjectionNostrEvent(envelope);
    const frame = JSON.stringify(["EVENT", nostrEvent]);
    for (const relayUrl of this.publicNostrRelays) {
      if (window.location?.protocol === "https:" && !relayUrl.startsWith("wss:")) continue;
      this.nostrRelayStatuses.set(relayUrl, "CONNECTING");
      try {
        const ws = new WebSocket(relayUrl);
        const timer = setTimeout(() => {
          try {
            ws.close();
          } catch {
          }
        }, 6e3);
        ws.onopen = () => {
          this.nostrRelayStatuses.set(relayUrl, "CONNECTED");
          this.lastNostrPublishedAtMs = this.now();
          try {
            ws.send(frame);
          } catch {
          }
          setTimeout(() => {
            clearTimeout(timer);
            try {
              ws.close();
            } catch {
            }
          }, 800);
          this.onStateChanged?.();
        };
        ws.onerror = () => {
          clearTimeout(timer);
          this.nostrRelayStatuses.set(relayUrl, "OFFLINE");
          try {
            ws.close();
          } catch {
          }
        };
      } catch {
        this.nostrRelayStatuses.set(relayUrl, "OFFLINE");
      }
    }
  }
  adoptExternalProjectionIfEmpty(envelope) {
    if (!TournamentAuthorityEngine.verifySignedPublicProjection(envelope)) {
      return false;
    }
    if (envelope.publisher_pubkey_hex && envelope.publisher_pubkey_hex !== this.publisherPublicKeyHex) {
      this.linkedVenuePubkeyHex = envelope.publisher_pubkey_hex.toLowerCase();
    }
    if (this.athletes.size > 0 || this.bouts.size > 0) {
      return false;
    }
    const prevSeeding = this.isSeeding;
    this.isSeeding = true;
    try {
      this.tournamentId = envelope.tournament_id || this.tournamentId;
      this.tournamentName = envelope.tournament_name || this.tournamentName;
      this.rulesVersion = envelope.rules_version || this.rulesVersion;
      this.growthAllowanceTenths = envelope.growth_allowance_tenths ?? this.growthAllowanceTenths;
      this.consecutiveDayAllowanceTenths = envelope.consecutive_day_allowance_tenths ?? this.consecutiveDayAllowanceTenths;
      if (envelope.mat_count >= 1 && envelope.mat_count <= MAX_TOURNAMENT_MATS) {
        this.matCount = envelope.mat_count;
      }
      for (const a2 of envelope.athletes ?? []) {
        this.athletes.set(a2.athlete_id, structuredClone(a2));
      }
      for (const b2 of envelope.bouts ?? []) {
        this.bouts.set(b2.match_id, structuredClone(b2));
      }
      for (const m2 of envelope.mats ?? []) {
        if (m2 && typeof m2.mat_id === "number") {
          this.mats.set(m2.mat_id, structuredClone(m2));
        }
      }
      for (const [k2, v2] of Object.entries(envelope.bracket_frozen_by_class ?? {})) {
        this.bracketFrozenByClass.set(k2, Boolean(v2));
      }
    } finally {
      this.isSeeding = prevSeeding;
    }
    this.saveToStorage();
    this.onStateChanged?.();
    return true;
  }
  /**
   * Synchronizes live matside bout scoring and mat phone delegations from the venue server or Nostr relay
   * without overwriting local private weigh-in or medical records.
   */
  syncLiveProjectionFromVenue(envelope) {
    if (!TournamentAuthorityEngine.verifySignedPublicProjection(envelope)) {
      return false;
    }
    if (envelope.publisher_pubkey_hex && envelope.publisher_pubkey_hex !== this.publisherPublicKeyHex) {
      this.linkedVenuePubkeyHex = envelope.publisher_pubkey_hex.toLowerCase();
    }
    if (this.athletes.size === 0 && this.bouts.size === 0) {
      return this.adoptExternalProjectionIfEmpty(envelope);
    }
    if (envelope.tournament_id && envelope.tournament_id !== this.tournamentId) {
      return false;
    }
    let changed = false;
    const prevSeeding = this.isSeeding;
    this.isSeeding = true;
    try {
      for (const remoteMat of envelope.mats ?? []) {
        if (!remoteMat || typeof remoteMat.mat_id !== "number") continue;
        const localMat = this.mats.get(remoteMat.mat_id);
        if (!localMat || !localMat.certificate_id && remoteMat.certificate_id || remoteMat.authority_epoch > localMat.authority_epoch || remoteMat.last_heartbeat_ms > localMat.last_heartbeat_ms) {
          this.mats.set(remoteMat.mat_id, structuredClone(remoteMat));
          changed = true;
        }
      }
      for (const remoteBout of envelope.bouts ?? []) {
        const localBout = this.bouts.get(remoteBout.match_id);
        if (!localBout) {
          this.bouts.set(remoteBout.match_id, structuredClone(remoteBout));
          changed = true;
          continue;
        }
        const remoteProgressed = remoteBout.lifecycle > localBout.lifecycle || remoteBout.lifecycle === localBout.lifecycle && remoteBout.lifecycle >= BoutLifecycle.InProgress && (remoteBout.red_score !== localBout.red_score || remoteBout.green_score !== localBout.green_score || remoteBout.period_number !== localBout.period_number || remoteBout.clock_running !== localBout.clock_running || remoteBout.clock_remaining_ms !== localBout.clock_remaining_ms || remoteBout.winner_athlete_id !== localBout.winner_athlete_id);
        if (remoteProgressed) {
          this.bouts.set(remoteBout.match_id, structuredClone(remoteBout));
          changed = true;
        }
      }
      for (const remoteAth of envelope.athletes ?? []) {
        const localAth = this.athletes.get(remoteAth.athlete_id);
        if (!localAth) {
          this.athletes.set(remoteAth.athlete_id, structuredClone(remoteAth));
          changed = true;
        } else if (remoteAth.matches_wrestled_today > localAth.matches_wrestled_today) {
          localAth.matches_wrestled_today = remoteAth.matches_wrestled_today;
          localAth.last_bout_ended_ms = Math.max(localAth.last_bout_ended_ms, remoteAth.last_bout_ended_ms);
          changed = true;
        }
      }
    } finally {
      this.isSeeding = prevSeeding;
    }
    if (changed) {
      this.saveToStorage();
      this.onStateChanged?.();
    }
    return changed;
  }
  bootstrapFromLocationQuery(search = typeof window !== "undefined" ? window.location.search : "") {
    if (typeof window !== "undefined" && /github\.io$/i.test(window.location.hostname)) {
      this.publicNostrRelayPublishingEnabled = true;
    }
    const rawSearch = (search ?? "").trim();
    if (!rawSearch || rawSearch === "?") {
      return { joined: false, linkedPubkeyHex: this.linkedVenuePubkeyHex, relayOrigin: this.liveOrigin };
    }
    const params = new URLSearchParams(rawSearch.startsWith("?") ? rawSearch.slice(1) : rawSearch);
    const venueParam = params.get("venue")?.trim() || params.get("origin")?.trim() || "";
    if (venueParam && /^https?:\/\//i.test(venueParam)) {
      this.liveOrigin = venueParam.replace(/\/+$/, "");
    }
    const joinCandidate = params.get("join")?.trim() || params.get("qr")?.trim() || params.get("pubkey")?.trim() || rawSearch.replace(/^\?+/, "").trim();
    const decoded = decodeTournamentJoinQrUri(joinCandidate);
    if (!decoded.valid || !decoded.payload) {
      return { joined: false, linkedPubkeyHex: this.linkedVenuePubkeyHex, relayOrigin: this.liveOrigin };
    }
    const payload = decoded.payload;
    if (payload.publisher_pubkey_hex && payload.publisher_pubkey_hex.toLowerCase() !== this.publisherPublicKeyHex.toLowerCase()) {
      this.linkedVenuePubkeyHex = payload.publisher_pubkey_hex.toLowerCase();
    }
    if (payload.relay_origin && !/github\.io$/i.test(payload.relay_origin)) {
      this.liveOrigin = payload.relay_origin;
    }
    if (payload.nostr_relays?.length) {
      this.publicNostrRelays = [...payload.nostr_relays];
    }
    if (payload.tournament_id && payload.tournament_id !== "manual-pubkey" && this.athletes.size === 0) {
      this.tournamentId = payload.tournament_id;
      if (payload.tournament_name && payload.tournament_name !== "OpenMat Tournament") {
        this.tournamentName = payload.tournament_name;
      }
    }
    this.publicNostrRelayPublishingEnabled = true;
    if (typeof window !== "undefined" && typeof WebSocket !== "undefined" && this.linkedVenuePubkeyHex) {
      const subId = `om-off-boot-${this.linkedVenuePubkeyHex.slice(0, 12)}`;
      const filter = { kinds: [24880, 30078], "#x": [`openmat-pub:${this.linkedVenuePubkeyHex}`] };
      for (const relayUrl of this.publicNostrRelays) {
        if (window.location?.protocol === "https:" && !relayUrl.startsWith("wss:")) continue;
        try {
          const ws = new WebSocket(relayUrl);
          const timer = setTimeout(() => {
            try {
              ws.close();
            } catch {
            }
          }, 5e3);
          ws.onopen = () => {
            this.nostrRelayStatuses.set(relayUrl, "CONNECTED");
            try {
              ws.send(JSON.stringify(["REQ", subId, filter]));
            } catch {
            }
          };
          ws.onmessage = (ev) => {
            if (typeof ev.data !== "string") return;
            try {
              const parsed = JSON.parse(ev.data);
              if (Array.isArray(parsed) && parsed[0] === "EVENT" && parsed[2]?.content) {
                const candidate = JSON.parse(parsed[2].content);
                this.syncLiveProjectionFromVenue(candidate);
              } else if (Array.isArray(parsed) && parsed[0] === "EOSE") {
                clearTimeout(timer);
                try {
                  ws.close();
                } catch {
                }
              }
            } catch {
            }
          };
          ws.onerror = () => {
            clearTimeout(timer);
            try {
              ws.close();
            } catch {
            }
          };
        } catch {
        }
      }
    }
    return {
      joined: true,
      linkedPubkeyHex: this.linkedVenuePubkeyHex,
      relayOrigin: this.liveOrigin
    };
  }
  getMatScorekeeperQrSvg(matId) {
    const mat = this.mats.get(matId);
    if (!mat) {
      throw new OpenMatProtocolError(ErrorCode.InvalidArgument, `Unknown Mat ${matId}`);
    }
    return renderQrSvgDataUrl(mat.scorekeeper_qr_uri);
  }
  issueMatScorekeeperCertificate(input) {
    if (!Number.isInteger(input.matId) || input.matId < 1 || input.matId > this.matCount || !input.androidDeviceId.trim() || !input.operatorName.trim()) throw new Error("Mat, device ID and operator are required");
    const existing = this.mats.get(input.matId);
    if ([...this.bouts.values()].some((b2) => b2.assigned_mat_id === input.matId && [BoutLifecycle.InProgress, BoutLifecycle.EndedLocal, BoutLifecycle.LocallyConfirmed].includes(b2.lifecycle))) {
      throw new Error("An active mat requires the physical-stop authority-transfer workflow");
    }
    const nextEpoch = existing?.certificate_id ? existing.authority_epoch + 1 : 1;
    const devId = input.androidDeviceId.trim() || `ANDROID-MAT-${input.matId}-S921U1`;
    const opName = input.operatorName.trim() || `Table ${input.matId} Scorer`;
    let pubHex = input.subjectPubkeyHex?.trim().toLowerCase() ?? "";
    if (!/^[a-f0-9]{64}$/i.test(pubHex)) throw new Error("A device-generated Ed25519 public key is required");
    if (existing?.certificate_id) {
      this.revokedCertificateIds.add(existing.certificate_id);
    }
    const record = this.buildSignedMatDelegation(
      input.matId,
      devId,
      opName,
      nextEpoch,
      pubHex,
      this.now()
    );
    this.registerMatDelegation(record);
    this.mats.set(input.matId, record);
    this.syncVenueRoomRouter();
    for (const bout of this.bouts.values()) {
      if (bout.assigned_mat_id === input.matId && bout.lifecycle !== BoutLifecycle.ResultAccepted) {
        bout.authority_epoch = record.authority_epoch;
        bout.delegated_android_device_id = record.android_device_id;
      }
    }
    this.publishAndSave();
    return record;
  }
  revokeMatScorekeeperCertificate(certificateId) {
    this.revokedCertificateIds.add(certificateId.trim());
    this.saveToStorage();
  }
  validateScorekeeperQrOrCert(qrUriOrCertHex, expectedMatId, boutInProgress = false) {
    const trimmed = typeof qrUriOrCertHex === "string" ? qrUriOrCertHex.trim() : "";
    if (!trimmed) {
      return {
        valid: false,
        reason: "Empty scorekeeper QR URI or certificate hex",
        tournamentIdMatch: false,
        signatureValid: false,
        notExpired: false,
        notRevoked: false,
        matAuthorized: false,
        epochCurrent: false,
        scopesAllowed: false
      };
    }
    let cert;
    let uriTournamentId = this.tournamentId;
    let uriPubkeyHex = this.publisherPublicKeyHex;
    if (trimmed.startsWith("openmat://scorekeeper-auth")) {
      const parsed = decodeScorekeeperCertQrUri(trimmed);
      if (!parsed.valid || !parsed.bundle) {
        return {
          valid: false,
          reason: parsed.reason,
          tournamentIdMatch: false,
          signatureValid: false,
          notExpired: false,
          notRevoked: false,
          matAuthorized: false,
          epochCurrent: false,
          scopesAllowed: false
        };
      }
      cert = parsed.bundle.certificate;
      uriTournamentId = parsed.bundle.tournament_id;
      uriPubkeyHex = parsed.bundle.publisher_pubkey_hex;
    } else {
      try {
        cert = decodeCertificateFromCborHex(trimmed);
      } catch (err) {
        return {
          valid: false,
          reason: `Malformed certificate CBOR hex: ${String(err)}`,
          tournamentIdMatch: false,
          signatureValid: false,
          notExpired: false,
          notRevoked: false,
          matAuthorized: false,
          epochCurrent: false,
          scopesAllowed: false
        };
      }
    }
    const tournamentIdMatch = cert.tournament_id === this.tournamentId && uriTournamentId === this.tournamentId && uriPubkeyHex.toLowerCase() === this.publisherPublicKeyHex.toLowerCase();
    if (!tournamentIdMatch) {
      return {
        valid: false,
        reason: `Tournament mismatch: certificate is for '${cert.tournament_id}', expected '${this.tournamentId}'`,
        tournamentIdMatch: false,
        signatureValid: false,
        notExpired: true,
        notRevoked: true,
        matAuthorized: false,
        epochCurrent: false,
        scopesAllowed: false,
        certificate: cert
      };
    }
    const notRevoked = !this.revokedCertificateIds.has(cert.certificate_id);
    if (!notRevoked) {
      return {
        valid: false,
        reason: `Certificate ${cert.certificate_id} has been revoked by tournament authority`,
        tournamentIdMatch: true,
        signatureValid: true,
        notExpired: true,
        notRevoked: false,
        matAuthorized: false,
        epochCurrent: false,
        scopesAllowed: false,
        certificate: cert
      };
    }
    let signatureValid = false;
    let notExpired = false;
    try {
      verifyDelegatedCertificate(cert, this.keyPair.publicKey, this.now(), boutInProgress);
      signatureValid = true;
      notExpired = true;
    } catch (err) {
      const isExpired = err instanceof OpenMatProtocolError && err.code === ErrorCode.CertificateExpired;
      return {
        valid: false,
        reason: err instanceof Error ? err.message : String(err),
        tournamentIdMatch: true,
        signatureValid: isExpired,
        notExpired: !isExpired,
        notRevoked: true,
        matAuthorized: false,
        epochCurrent: false,
        scopesAllowed: false,
        certificate: cert
      };
    }
    const requiredScopeMask = ScopeBits.ScoreMat | ScopeBits.ConfirmLocalResult;
    const scopesAllowed = cert.role === Role.MatOperator && (cert.allowed_scopes & requiredScopeMask) === requiredScopeMask;
    const matAuthorized = cert.assigned_mat_id >= 1 && cert.assigned_mat_id <= this.matCount && (expectedMatId === void 0 || cert.assigned_mat_id === expectedMatId);
    const currentMat = this.mats.get(cert.assigned_mat_id);
    const epochCurrent = currentMat ? cert.authority_generation === currentMat.authority_epoch : false;
    const allValid = tournamentIdMatch && signatureValid && notExpired && notRevoked && scopesAllowed && matAuthorized && epochCurrent;
    let reason = `Authorized Scorekeeper '${cert.subject_key_id}' verified for ${this.tournamentName} · Mat ${cert.assigned_mat_id} (Epoch #${cert.authority_generation})`;
    if (!scopesAllowed) {
      reason = `Unauthorized role or missing ScoreMat / ConfirmLocalResult scope bits`;
    } else if (!matAuthorized) {
      reason = `Scorekeeper is assigned to Mat ${cert.assigned_mat_id}, not Mat ${expectedMatId}`;
    } else if (!epochCurrent) {
      reason = `Stale authority epoch #${cert.authority_generation} (Mat ${cert.assigned_mat_id} is currently on epoch #${currentMat?.authority_epoch ?? "?"})`;
    }
    return {
      valid: allValid,
      reason,
      tournamentIdMatch,
      signatureValid,
      notExpired,
      notRevoked,
      matAuthorized,
      epochCurrent,
      scopesAllowed,
      certificate: cert
    };
  }
  // ============================================================================
  // 5c. Software-in-the-Loop (SITL) C++ Reality Engine Simulation Driver
  // ============================================================================
  simActive = false;
  simPhase = "Idle (Manual Officials Mode)";
  simStepCursor = 0;
  simTotalSteps = 0;
  simSignedEventsProcessed = 0;
  simSpectatorNodes = 40;
  simBleacherDeliveries = 0;
  simLatestEventSummary = "Ready to load C++ OpenMat-Sim campaign trace.";
  simLatestEventIdHex = "";
  simCppSnapshotReady = false;
  simCppPublisherKeyHex = "";
  simTelemetryLog = [];
  simActionQueue = [];
  generateCppCompatibleBracketForClass(weightClassId, divisionId = "varsity") {
    this.assertDrawNotStarted();
    for (const [id, bout] of this.bouts.entries()) {
      if (bout.weight_class_id === weightClassId && bout.division_id?.toLowerCase() === divisionId.toLowerCase()) {
        this.bouts.delete(id);
      }
    }
    const entrants = Array.from(this.athletes.values()).filter(
      (a2) => a2.weight_class_id === weightClassId && a2.division_id.toLowerCase() === divisionId.toLowerCase() && a2.check_in_stage === CheckInStage.Eligible && a2.weigh_in_eligible && a2.medically_cleared
    ).sort((a2, b2) => a2.seed_rank - b2.seed_rank || a2.athlete_id.localeCompare(b2.athlete_id));
    const maxSeed = entrants.reduce((m2, a2) => Math.max(m2, a2.seed_rank), entrants.length);
    const N2 = maxSeed <= 8 ? 8 : maxSeed <= 16 ? 16 : maxSeed <= 32 ? 32 : 64;
    const R2 = Math.log2(N2);
    entrants.forEach((a2, idx) => {
      a2.seed_rank = idx + 1;
    });
    const bracketId = divisionId.toLowerCase() === "varsity" ? `bracket-${weightClassId}` : `bracket-${divisionId.toLowerCase()}-${weightClassId}`;
    const format = BracketFormat.TrueSecondChallenge;
    const created = [];
    const makeBout = (input) => {
      const matchId = `${bracketId}-${input.suffix}`;
      const hasBoth = Boolean(input.redId && input.greenId);
      const bout = {
        match_id: matchId,
        bracket_id: bracketId,
        weight_class_id: weightClassId,
        division_id: divisionId,
        format,
        bout_number: this.nextBoutNumber++,
        round_index: input.roundIndex,
        round_label: input.roundLabel,
        is_consolation: input.isConsolation,
        is_placement_bout: Boolean(input.isPlacement),
        is_true_second_challenge: Boolean(input.isTrueSecond),
        placement_rank: input.placementRank ?? 0,
        red_athlete_id: input.redId ?? "",
        green_athlete_id: input.greenId ?? "",
        is_bye: false,
        winner_next_match_id: input.winnerNext ? `${bracketId}-${input.winnerNext}` : "",
        loser_next_match_id: input.loserNext ? `${bracketId}-${input.loserNext}` : "",
        lifecycle: hasBoth ? BoutLifecycle.Assigned : BoutLifecycle.PendingUpstream,
        assigned_mat_id: input.matId,
        mat_queue_order: input.queueOrder,
        assignment_revision: 1,
        authority_epoch: 1,
        delegated_android_device_id: `ANDROID-MAT-${input.matId}-S921U1`,
        red_score: 0,
        green_score: 0,
        period_number: 1,
        clock_remaining_ms: 12e4,
        clock_running: false,
        winner_athlete_id: "",
        loser_athlete_id: "",
        win_type: "",
        completed_at_ms: 0
      };
      this.bouts.set(matchId, bout);
      created.push(bout);
      return bout;
    };
    let queueSeq = 1;
    const champSuffixes = Array.from({ length: R2 + 1 }, () => []);
    for (let r2 = 1; r2 <= R2; r2++) {
      const count = N2 >> r2;
      const label = r2 === R2 ? "1st Place Championship Final" : count === 2 ? "Championship Semifinal" : count === 4 ? "Championship Quarterfinal" : `Championship Round of ${count * 2}`;
      for (let i2 = 0; i2 < count; i2++) {
        const suffix = `C${r2}-${i2 + 1}`;
        champSuffixes[r2].push(suffix);
        makeBout({
          suffix,
          roundIndex: r2,
          roundLabel: label,
          isConsolation: false,
          isPlacement: r2 === R2,
          placementRank: r2 === R2 ? 1 : 0,
          winnerNext: r2 < R2 ? `C${r2 + 1}-${Math.floor(i2 / 2) + 1}` : void 0,
          loserNext: r2 === R2 ? "TRUE-2ND" : void 0,
          matId: (queueSeq - 1) % this.matCount + 1,
          queueOrder: queueSeq++
        });
      }
    }
    let consRoundNum = 1;
    let prevConsSuffixes = [];
    for (let i2 = 0; i2 < N2 / 4; i2++) {
      const suffix = `L${consRoundNum}-${i2 + 1}`;
      prevConsSuffixes.push(suffix);
      makeBout({
        suffix,
        roundIndex: consRoundNum + 1,
        roundLabel: `Consolation Round ${consRoundNum}`,
        isConsolation: true,
        loserNext: N2 === 8 ? "P7" : void 0,
        matId: (queueSeq - 1) % this.matCount + 1,
        queueOrder: queueSeq++
      });
      const c0 = this.bouts.get(`${bracketId}-${champSuffixes[1][2 * i2]}`);
      const c1 = this.bouts.get(`${bracketId}-${champSuffixes[1][2 * i2 + 1]}`);
      c0.loser_next_match_id = `${bracketId}-${suffix}`;
      c1.loser_next_match_id = `${bracketId}-${suffix}`;
    }
    for (let c2 = 2; c2 < R2; c2++) {
      const dropCount = champSuffixes[c2].length;
      consRoundNum += 1;
      const dropConsSuffixes = [];
      for (let i2 = 0; i2 < dropCount; i2++) {
        const suffix = `L${consRoundNum}-${i2 + 1}`;
        dropConsSuffixes.push(suffix);
        const label = c2 === R2 - 1 ? "Consolation Semifinal (Crossover)" : `Consolation Round ${consRoundNum} (Crossover)`;
        makeBout({
          suffix,
          roundIndex: c2 + consRoundNum,
          roundLabel: label,
          isConsolation: true,
          matId: (queueSeq - 1) % this.matCount + 1,
          queueOrder: queueSeq++
        });
        const prevB = this.bouts.get(`${bracketId}-${prevConsSuffixes[i2]}`);
        prevB.winner_next_match_id = `${bracketId}-${suffix}`;
        const crossoverIdx = c2 % 2 === 0 ? dropCount - 1 - i2 : i2 ^ Math.floor(dropCount / 2);
        const champB = this.bouts.get(`${bracketId}-${champSuffixes[c2][crossoverIdx]}`);
        champB.loser_next_match_id = `${bracketId}-${suffix}`;
      }
      if (c2 < R2 - 1) {
        consRoundNum += 1;
        const redCount = dropCount / 2;
        const redConsSuffixes = [];
        for (let i2 = 0; i2 < redCount; i2++) {
          const suffix = `L${consRoundNum}-${i2 + 1}`;
          redConsSuffixes.push(suffix);
          makeBout({
            suffix,
            roundIndex: c2 + consRoundNum,
            roundLabel: redCount === 2 ? "Consolation Quarterfinal" : `Consolation Round ${consRoundNum}`,
            isConsolation: true,
            loserNext: redCount === 2 ? "P7" : void 0,
            matId: (queueSeq - 1) % this.matCount + 1,
            queueOrder: queueSeq++
          });
          const d0 = this.bouts.get(`${bracketId}-${dropConsSuffixes[2 * i2]}`);
          const d1 = this.bouts.get(`${bracketId}-${dropConsSuffixes[2 * i2 + 1]}`);
          d0.winner_next_match_id = `${bracketId}-${suffix}`;
          d1.winner_next_match_id = `${bracketId}-${suffix}`;
        }
        prevConsSuffixes = redConsSuffixes;
      } else {
        for (let i2 = 0; i2 < 2; i2++) {
          const cs = this.bouts.get(`${bracketId}-${dropConsSuffixes[i2]}`);
          cs.winner_next_match_id = `${bracketId}-P3`;
          cs.loser_next_match_id = `${bracketId}-P5`;
        }
        prevConsSuffixes = dropConsSuffixes;
      }
    }
    const placementRound = R2 + consRoundNum + 1;
    makeBout({
      suffix: "P7",
      roundIndex: placementRound,
      roundLabel: "7th Place Match",
      isConsolation: true,
      isPlacement: true,
      placementRank: 7,
      matId: (queueSeq - 1) % this.matCount + 1,
      queueOrder: queueSeq++
    });
    makeBout({
      suffix: "P5",
      roundIndex: placementRound,
      roundLabel: "5th Place Match",
      isConsolation: true,
      isPlacement: true,
      placementRank: 5,
      matId: (queueSeq - 1) % this.matCount + 1,
      queueOrder: queueSeq++
    });
    makeBout({
      suffix: "P3",
      roundIndex: placementRound,
      roundLabel: "3rd Place Match",
      isConsolation: true,
      isPlacement: true,
      placementRank: 3,
      winnerNext: "TRUE-2ND",
      matId: (queueSeq - 1) % this.matCount + 1,
      queueOrder: queueSeq++
    });
    makeBout({
      suffix: "TRUE-2ND",
      roundIndex: placementRound + 1,
      roundLabel: "True Second Challenge Match",
      isConsolation: true,
      isPlacement: true,
      isTrueSecond: true,
      placementRank: 2,
      matId: 1,
      queueOrder: queueSeq++
    });
    const topSeeds = TournamentAuthorityEngine.buildStandardTopSeeds(N2);
    for (let m2 = 0; m2 < N2 / 2; m2++) {
      const seedA = topSeeds[m2];
      const seedB = N2 + 1 - seedA;
      const bout = this.bouts.get(`${bracketId}-${champSuffixes[1][m2]}`);
      bout.red_athlete_id = seedA >= 1 && seedA <= entrants.length ? entrants[seedA - 1].athlete_id : "";
      bout.green_athlete_id = seedB >= 1 && seedB <= entrants.length ? entrants[seedB - 1].athlete_id : "";
      if (bout.red_athlete_id && bout.green_athlete_id) {
        bout.lifecycle = BoutLifecycle.Assigned;
      }
    }
    this.numberBoutsInRunningOrder();
    this.bracketFrozenByClass.set(`${divisionId.toUpperCase()}:${weightClassId}`, true);
    return created;
  }
  loadCppSimulationTrace(traceLines, receiptCborHex = "", cppPublisherKeyHex = "") {
    const trace = verifyNativeCampaignTrace(traceLines, receiptCborHex, cppPublisherKeyHex);
    this.resetTournamentState();
    this.athletes.clear();
    this.bouts.clear();
    this.simActionQueue = [];
    this.simTelemetryLog = [];
    this.simStepCursor = 0;
    this.simSignedEventsProcessed = 0;
    this.simBleacherDeliveries = 0;
    this.simSpectatorNodes = 0;
    this.simCppPublisherKeyHex = cppPublisherKeyHex;
    this.simCppSnapshotReady = false;
    for (const item of trace) {
      const bracket = /^bracket-(?:([a-z0-9_]+)-)?(\d+)-/i.exec(item.event.match_id);
      if (!bracket) throw new Error("Native trace has an unknown division or weight class");
      const division = bracket[1] ?? "varsity";
      const wc = bracket[2];
      for (const id of [item.projection.red_athlete_id, item.projection.green_athlete_id]) {
        if (typeof id !== "string" || !id || this.athletes.has(id)) continue;
        this.athletes.set(id, {
          athlete_id: id,
          opaque_pass_token: `NATIVE-${id}`,
          public_display_name: id,
          team_id: `team-${Number(id.split("-")[2]) % 8}`,
          team_name: `Native campaign team ${Number(id.split("-")[2]) % 8}`,
          division_id: division,
          weight_class_id: wc,
          seed_rank: Number(id.split("-")[2]) + 1,
          check_in_stage: CheckInStage.Eligible,
          weigh_in_eligible: true,
          medically_cleared: true,
          matches_wrestled_today: 0,
          prior_day_matches: 0,
          last_bout_ended_ms: 0,
          updated_at_ms: this.now()
        });
      }
    }
    for (const group of new Set([...this.athletes.values()].map((a2) => `${a2.division_id}:${a2.weight_class_id}`))) {
      const [division, wc] = group.split(":");
      this.generateCppCompatibleBracketForClass(wc, division);
    }
    let currentReplayDay = 0;
    for (const item of trace) this.simActionQueue.push(() => {
      const { event, state, timer, projection, matId } = item;
      const itemDay = Math.floor(item.line.at_ms / 864e5);
      while (currentReplayDay < itemDay) {
        this.advanceCompetitionDay(event.audit_time_ms);
        currentReplayDay += 1;
      }
      const bout = this.bouts.get(event.match_id);
      if (!bout) throw new Error(`Native bracket is missing ${event.match_id}`);
      bout.red_athlete_id = String(projection.red_athlete_id);
      bout.green_athlete_id = String(projection.green_athlete_id);
      bout.assigned_mat_id = matId;
      bout.authority_epoch = event.authority_epoch;
      bout.assignment_revision = event.assignment_revision;
      bout.delegated_android_device_id = event.signer_key_id;
      bout.period_number = Number(state.period);
      bout.clock_remaining_ms = Number(timer.remaining_ms);
      bout.clock_running = timer.running === true;
      bout.red_score = Number(state.red_score);
      bout.green_score = Number(state.green_score);
      if (projection.confirmed === true) {
        const winTypes = ["", "DEC", "MD", "TF", "FALL", "FORFEIT", "FORFEIT", "INJURY_DEFAULT", "DQ"];
        const winType = winTypes[Number(state.win_type)];
        if (!winType || state.bout_ended !== true || ![0, 1].includes(Number(state.winner))) throw new Error("Invalid native confirmed result");
        this.recordMatsideConfirmedResult(
          bout.match_id,
          Number(state.winner) === 0 ? bout.red_athlete_id : bout.green_athlete_id,
          winType,
          bout.red_score,
          bout.green_score,
          event.authority_epoch,
          event.audit_time_ms
        );
      } else bout.lifecycle = state.bout_ended === true ? BoutLifecycle.EndedLocal : BoutLifecycle.InProgress;
      this.simSignedEventsProcessed++;
      this.simPhase = "Verified Native Campaign Replay";
      return {
        stepIndex: this.simStepCursor,
        phase: this.simPhase,
        actorRole: "SCOREKEEPER",
        matId,
        matchId: event.match_id,
        sequence: event.sequence,
        signerKeyId: event.signer_key_id,
        eventIdHex: toHex(event.event_id),
        summary: `Verified ${event.event_type}: ${event.match_id} (${bout.red_score}–${bout.green_score})`,
        atSimulatedMs: item.line.at_ms
      };
    });
    this.simActionQueue.push(() => {
      for (const bout of this.bouts.values()) {
        if (bout.is_true_second_challenge && bout.lifecycle !== BoutLifecycle.ResultAccepted && bout.red_athlete_id && bout.green_athlete_id) {
          bout.is_bye = true;
          bout.lifecycle = BoutLifecycle.ResultAccepted;
          bout.winner_athlete_id = bout.red_athlete_id;
          bout.loser_athlete_id = bout.green_athlete_id;
          bout.win_type = "DEC";
          bout.completed_at_ms = trace.at(-1).line.at_ms;
        }
      }
      this.simPhase = "Phase 4: Verified Native Campaign Replay Complete";
      return {
        stepIndex: this.simStepCursor,
        phase: this.simPhase,
        actorRole: "OFFICIAL",
        summary: `Verified ${trace.length} native packets. Snapshot files require separate manifest verification.`,
        atSimulatedMs: trace.at(-1).line.at_ms
      };
    });
    this.simTotalSteps = this.simActionQueue.length;
    this.simPhase = "Verified Native Campaign Ready";
    this.publishAndSave();
    return { totalSteps: this.simTotalSteps, traceCount: trace.length };
  }
  stepSimulationTick(stepsCount = 1) {
    const entries = [];
    const count = Math.max(1, Math.floor(stepsCount));
    const prevSeeding = this.isSeeding;
    this.isSeeding = true;
    try {
      for (let i2 = 0; i2 < count; i2++) {
        if (this.simStepCursor >= this.simActionQueue.length) {
          this.simActive = false;
          break;
        }
        const fn = this.simActionQueue[this.simStepCursor];
        this.simStepCursor += 1;
        const entry = fn();
        this.simLatestEventSummary = entry.summary;
        if (entry.eventIdHex) {
          this.simLatestEventIdHex = entry.eventIdHex;
        }
        this.simTelemetryLog = [entry, ...this.simTelemetryLog].slice(0, 40);
        entries.push(entry);
      }
    } finally {
      this.isSeeding = prevSeeding;
    }
    const done = this.simStepCursor >= this.simActionQueue.length;
    if (done) {
      this.simActive = false;
    }
    this.publishAndSave();
    return { done, entries };
  }
  getSimPublicStatus() {
    let acceptedBouts = 0;
    for (const b2 of this.bouts.values()) {
      if (b2.lifecycle === BoutLifecycle.ResultAccepted && !b2.is_bye) {
        acceptedBouts++;
      }
    }
    return {
      active: this.simActive,
      phase: this.simPhase,
      stepCursor: this.simStepCursor,
      totalSteps: this.simTotalSteps,
      acceptedBouts,
      signedEventsProcessed: this.simSignedEventsProcessed,
      spectatorNodes: this.simSpectatorNodes,
      bleacherDeliveries: this.simBleacherDeliveries,
      latestEventSummary: this.simLatestEventSummary,
      latestEventIdHex: this.simLatestEventIdHex,
      cppSnapshotReady: this.simCppSnapshotReady,
      cppPublisherKeyHex: this.simCppPublisherKeyHex
    };
  }
  // ============================================================================
  // 6. NFHS 7-Step Team Standings & Signed Public Projection
  // ============================================================================
  computeBracketStandings(weightClassId, divisionId) {
    const cleanDiv = (divisionId ?? "").trim().toUpperCase();
    const entrants = Array.from(this.athletes.values()).filter(
      (a2) => a2.weight_class_id === weightClassId && (!cleanDiv || cleanDiv === "ALL" || (a2.division_id || "VARSITY").toUpperCase() === cleanDiv) && a2.check_in_stage === CheckInStage.Eligible && a2.weigh_in_eligible && a2.medically_cleared
    );
    const classBouts = Array.from(this.bouts.values()).filter(
      (b2) => b2.weight_class_id === weightClassId && (!cleanDiv || cleanDiv === "ALL" || (b2.division_id || "VARSITY").toUpperCase() === cleanDiv)
    );
    const bracketComplete = classBouts.length > 0 && classBouts.every((b2) => b2.lifecycle === BoutLifecycle.ResultAccepted);
    const rows = /* @__PURE__ */ new Map();
    for (const a2 of entrants) {
      rows.set(a2.athlete_id, {
        place: 0,
        athlete_id: a2.athlete_id,
        public_display_name: a2.public_display_name,
        team_id: a2.team_id,
        team_name: a2.team_name,
        seed_rank: a2.seed_rank,
        wins: 0,
        losses: 0,
        matches_played: 0,
        falls_forfeits_dq: 0,
        tech_falls: 0,
        major_decisions: 0,
        decisions: 0,
        bonus_points: 0,
        points_scored: 0,
        points_allowed: 0,
        bracket_complete: bracketComplete
      });
    }
    const headToHeadWins = /* @__PURE__ */ new Map();
    for (const b2 of classBouts) {
      if (b2.lifecycle !== BoutLifecycle.ResultAccepted || b2.is_bye || !b2.winner_athlete_id) {
        continue;
      }
      const wRow = rows.get(b2.winner_athlete_id);
      const lRow = rows.get(b2.loser_athlete_id);
      const winnerIsRed = b2.winner_athlete_id === b2.red_athlete_id;
      const winPts = winnerIsRed ? b2.red_score : b2.green_score;
      const losePts = winnerIsRed ? b2.green_score : b2.red_score;
      if (wRow) {
        wRow.wins += 1;
        wRow.matches_played += 1;
        wRow.points_scored += winPts;
        wRow.points_allowed += losePts;
        if (b2.win_type === "FALL" || b2.win_type === "FORFEIT" || b2.win_type === "INJURY_DEFAULT" || b2.win_type === "DQ") {
          wRow.falls_forfeits_dq += 1;
          wRow.bonus_points += 2;
        } else if (b2.win_type === "TF") {
          wRow.tech_falls += 1;
          wRow.bonus_points += 1.5;
        } else if (b2.win_type === "MD") {
          wRow.major_decisions += 1;
          wRow.bonus_points += 1;
        } else {
          wRow.decisions += 1;
        }
      }
      if (lRow) {
        lRow.losses += 1;
        lRow.matches_played += 1;
        lRow.points_scored += losePts;
        lRow.points_allowed += winPts;
      }
      if (b2.winner_athlete_id && b2.loser_athlete_id) {
        const key = `${b2.winner_athlete_id}:${b2.loser_athlete_id}`;
        headToHeadWins.set(key, (headToHeadWins.get(key) ?? 0) + 1);
      }
    }
    const sorted = Array.from(rows.values()).sort((a2, b2) => {
      if (b2.wins !== a2.wins) return b2.wins - a2.wins;
      if (a2.losses !== b2.losses) return a2.losses - b2.losses;
      const aBeatB = headToHeadWins.get(`${a2.athlete_id}:${b2.athlete_id}`) ?? 0;
      const bBeatA = headToHeadWins.get(`${b2.athlete_id}:${a2.athlete_id}`) ?? 0;
      if (aBeatB !== bBeatA) return bBeatA - aBeatB;
      if (b2.bonus_points !== a2.bonus_points) return b2.bonus_points - a2.bonus_points;
      if (b2.falls_forfeits_dq !== a2.falls_forfeits_dq) return b2.falls_forfeits_dq - a2.falls_forfeits_dq;
      if (b2.tech_falls !== a2.tech_falls) return b2.tech_falls - a2.tech_falls;
      if (b2.major_decisions !== a2.major_decisions) return b2.major_decisions - a2.major_decisions;
      const diffA = a2.points_scored - a2.points_allowed;
      const diffB = b2.points_scored - b2.points_allowed;
      if (diffB !== diffA) return diffB - diffA;
      if (b2.points_scored !== a2.points_scored) return b2.points_scored - a2.points_scored;
      return a2.seed_rank - b2.seed_rank || a2.athlete_id.localeCompare(b2.athlete_id);
    });
    sorted.forEach((r2, idx) => {
      r2.place = idx + 1;
    });
    return sorted;
  }
  computeTeamStandings() {
    const map = /* @__PURE__ */ new Map();
    for (const athlete of this.athletes.values()) {
      if (!map.has(athlete.team_id)) {
        map.set(athlete.team_id, {
          rank: 0,
          team_id: athlete.team_id,
          team_name: athlete.team_name,
          total_points: 0,
          advancement_points: 0,
          placement_points: 0,
          bonus_points: 0,
          falls_forfeits_dq: 0,
          tech_falls: 0,
          major_decisions: 0,
          first_place_winners: 0
        });
      }
    }
    for (const bout of this.bouts.values()) {
      if (bout.lifecycle !== BoutLifecycle.ResultAccepted || !bout.winner_athlete_id) {
        continue;
      }
      const winner = this.athletes.get(bout.winner_athlete_id);
      if (!winner) continue;
      const row = map.get(winner.team_id);
      if (!row) continue;
      if (bout.is_bye) {
        if (bout.is_placement_bout && bout.placement_rank === 1 && !bout.green_athlete_id) {
          row.placement_points += 16;
          row.first_place_winners += 1;
          row.total_points = row.advancement_points + row.placement_points + row.bonus_points;
        }
        continue;
      }
      const adv = bout.is_consolation ? 1 : 2;
      row.advancement_points += adv;
      let bonus = 0;
      if (bout.win_type === "FALL" || bout.win_type === "FORFEIT" || bout.win_type === "INJURY_DEFAULT" || bout.win_type === "DQ") {
        bonus = 2;
        row.falls_forfeits_dq += 1;
      } else if (bout.win_type === "TF") {
        bonus = 1.5;
        row.tech_falls += 1;
      } else if (bout.win_type === "MD") {
        bonus = 1;
        row.major_decisions += 1;
      }
      row.bonus_points += bonus;
      if (bout.is_placement_bout && bout.placement_rank === 1) {
        row.placement_points += 16;
        row.first_place_winners += 1;
      } else if (bout.is_placement_bout && bout.placement_rank === 3) {
        row.placement_points += 9;
      }
      row.total_points = row.advancement_points + row.placement_points + row.bonus_points;
    }
    const rrGroups = /* @__PURE__ */ new Map();
    for (const bout of this.bouts.values()) {
      if (bout.format === BracketFormat.RoundRobinPool && !bout.is_bye) {
        const div = (bout.division_id || "VARSITY").toUpperCase();
        const key = `${div}:${bout.weight_class_id}`;
        const group = rrGroups.get(key) ?? { weightClassId: bout.weight_class_id, divisionId: div, bouts: [] };
        group.bouts.push(bout);
        rrGroups.set(key, group);
      }
    }
    for (const group of rrGroups.values()) {
      if (group.bouts.length > 0 && group.bouts.every((b2) => b2.lifecycle === BoutLifecycle.ResultAccepted)) {
        const poolStandings = this.computeBracketStandings(group.weightClassId, group.divisionId);
        const first = poolStandings[0];
        if (first && first.wins > 0) {
          const teamRow = map.get(first.team_id);
          if (teamRow) {
            teamRow.placement_points += 16;
            teamRow.first_place_winners += 1;
            teamRow.total_points = teamRow.advancement_points + teamRow.placement_points + teamRow.bonus_points;
          }
        }
        const third = poolStandings[2];
        if (third) {
          const teamRow = map.get(third.team_id);
          if (teamRow) {
            teamRow.placement_points += 9;
            teamRow.total_points = teamRow.advancement_points + teamRow.placement_points + teamRow.bonus_points;
          }
        }
      }
    }
    const sorted = Array.from(map.values()).sort(
      (a2, b2) => b2.total_points - a2.total_points || b2.falls_forfeits_dq - a2.falls_forfeits_dq || b2.tech_falls - a2.tech_falls || b2.major_decisions - a2.major_decisions || b2.first_place_winners - a2.first_place_winners || a2.team_name.localeCompare(b2.team_name)
    );
    sorted.forEach((r2, idx) => {
      r2.rank = idx + 1;
    });
    return sorted;
  }
  buildSignedPublicProjection() {
    const athletes = Array.from(this.athletes.values()).sort(
      (a2, b2) => a2.weight_class_id.localeCompare(b2.weight_class_id) || a2.seed_rank - b2.seed_rank
    );
    const bouts = Array.from(this.bouts.values()).sort((a2, b2) => a2.bout_number - b2.bout_number);
    const mats = Array.from(this.mats.values()).sort((a2, b2) => a2.mat_id - b2.mat_id);
    const standings = this.computeTeamStandings();
    const frozenObj = {};
    for (const [k2, v2] of this.bracketFrozenByClass.entries()) {
      frozenObj[k2] = v2;
    }
    const publishedAtMs = this.now();
    const envelope = {
      tournament_id: this.tournamentId,
      tournament_name: this.tournamentName,
      rules_version: this.rulesVersion,
      growth_allowance_tenths: this.growthAllowanceTenths,
      consecutive_day_allowance_tenths: this.consecutiveDayAllowanceTenths,
      mat_count: this.matCount,
      snapshot_epoch: this.snapshotEpoch,
      control_sequence_head: this.controlSequenceHead,
      published_at_ms: publishedAtMs,
      publisher_pubkey_hex: toHex(this.keyPair.publicKey),
      payload_sha256_hex: "",
      signature_hex: "",
      athletes,
      bouts,
      mats,
      standings,
      bracket_frozen_by_class: frozenObj,
      sim_status: this.getSimPublicStatus(),
      p2p_topology: this.getVenueRoomTopologySummary(),
      revoked_certificate_ids: [...this.revokedCertificateIds],
      ow_vote_tallies: this.getOwVoteTallies()
    };
    const bytes = TournamentAuthorityEngine.projectionBytes(envelope);
    envelope.payload_sha256_hex = toHex(sha256(bytes));
    envelope.signature_hex = toHex(signDomainBytes(DOMAIN_CONTROL, bytes, this.keyPair.privateKey));
    return structuredClone(envelope);
  }
  static projectionBytes(envelope) {
    const { signature_hex, payload_sha256_hex, ...body } = envelope;
    return encodeDeterministicCbor({ state_digest_hex: toHex(sha256(new TextEncoder().encode(JSON.stringify(body)))) });
  }
  static verifySignedPublicProjection(envelope) {
    try {
      if (!hasPublicProjectionShape(envelope)) return false;
      const bytes = this.projectionBytes(envelope);
      return toHex(sha256(bytes)) === envelope.payload_sha256_hex && verifyDomainBytes(
        DOMAIN_CONTROL,
        bytes,
        fromHex(envelope.publisher_pubkey_hex),
        fromHex(envelope.signature_hex)
      );
    } catch {
      return false;
    }
  }
  publishAndSave(overrideAuthority = false) {
    this.controlSequenceHead += 1;
    this.snapshotEpoch += 1;
    if (this.isSeeding) {
      return null;
    }
    const envelope = this.buildSignedPublicProjection();
    if (!this.broadcastEnabled) {
      this.broadcastLiveRooms(JSON.stringify(envelope));
      this.onStateChanged?.();
      return envelope;
    }
    this.saveToStorage();
    this.broadcastEnvelope(envelope, overrideAuthority);
    this.onStateChanged?.();
    return envelope;
  }
  pendingBroadcastJson = null;
  broadcastMicrotaskScheduled = false;
  broadcastLiveRooms(json) {
    if (this.overlayMesh.liveRooms.size === 0) return;
    this.pendingBroadcastJson = json;
    if (this.broadcastMicrotaskScheduled) return;
    this.broadcastMicrotaskScheduled = true;
    queueMicrotask(() => {
      this.broadcastMicrotaskScheduled = false;
      const latestJson = this.pendingBroadcastJson;
      this.pendingBroadcastJson = null;
      if (!latestJson) return;
      for (const [roomId, room] of this.overlayMesh.liveRooms) {
        try {
          if (roomId === CONTROL_OFFICIALS_ROOM_ID) room.send("control-state", this.signedControlSnapshot(), ChannelClass.CurrentStateUnorderedNewest);
          else if (roomId.startsWith("subtree:")) room.send("public-projection", new TextEncoder().encode(latestJson), ChannelClass.CurrentStateUnorderedNewest);
        } catch (error) {
          this.liveTransportError = String(error);
        }
      }
    });
  }
  broadcastEnvelope(envelope, overrideAuthority = false) {
    if (this.liveConsoleRole !== "primary") return;
    if (!this.broadcastEnabled || this.isSeeding) return;
    const json = JSON.stringify(envelope);
    this.broadcastLiveRooms(json);
    try {
      this.broadcastChannel?.postMessage(envelope);
    } catch {
    }
    if (this.publicNostrRelayPublishingEnabled && envelope.athletes.length > 0) {
      this.publishProjectionToPublicNostrRelays(envelope);
    }
    if (typeof fetch !== "undefined" && typeof window !== "undefined") {
      const headers = { "Content-Type": "application/json" };
      if (overrideAuthority) headers["x-openmat-authority-override"] = "1";
      if (!/github\.io$/i.test(window.location.hostname)) {
        void fetch("/api/openmat-live-projection", {
          method: "POST",
          headers,
          body: json
        }).then(() => {
          if (this.liveOrigin) {
            return this.publishRegistry(this.liveOrigin);
          }
        }).catch((e2) => {
          this.liveTransportError = String(e2);
        });
      }
      if (this.liveOrigin) {
        try {
          const remoteOrigin = new URL(this.liveOrigin).origin;
          if (remoteOrigin !== window.location.origin) {
            void fetch(new URL("/api/openmat-live-projection", remoteOrigin), {
              method: "POST",
              headers,
              body: json
            }).catch(() => {
            });
          }
        } catch {
        }
      }
    }
  }
  saveToStorage() {
    if (!this.broadcastEnabled || typeof localStorage === "undefined") return;
    try {
      const state = this.storageState();
      localStorage.setItem(STORAGE_KEY_PRIVATE, JSON.stringify(state));
    } catch (error) {
      throw new Error(`Authority state could not be persisted: ${String(error)}`);
    }
  }
  storageState() {
    return {
      tournamentId: this.tournamentId,
      tournamentName: this.tournamentName,
      eventDate: this.eventDate,
      venue: this.venue,
      rulesVersion: this.rulesVersion,
      growthAllowanceTenths: this.growthAllowanceTenths,
      consecutiveDayAllowanceTenths: this.consecutiveDayAllowanceTenths,
      matCount: this.matCount,
      snapshotEpoch: this.snapshotEpoch,
      controlSequenceHead: this.controlSequenceHead,
      nextBoutNumber: this.nextBoutNumber,
      protocolJournal: this.protocolJournal,
      resultCorrections: this.resultCorrections,
      revokedCertificateIds: [...this.revokedCertificateIds],
      owVotes: [...this.owVotes],
      athletes: Array.from(this.athletes.entries()),
      privateWeighIns: Array.from(this.privateWeighIns.entries()),
      privateMedicals: Array.from(this.privateMedicals.entries()),
      bouts: Array.from(this.bouts.entries()),
      mats: Array.from(this.mats.entries()),
      bracketFrozenByClass: Array.from(this.bracketFrozenByClass.entries())
    };
  }
  loadFromStorage(incremental = false) {
    if (typeof localStorage === "undefined") return false;
    try {
      const raw = localStorage.getItem(STORAGE_KEY_PRIVATE);
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.athletes)) throw new Error("Invalid stored roster");
      if (!Array.isArray(parsed.mats) || parsed.mats.length === 0) throw new Error("Invalid stored mats");
      this.tournamentId = parsed.tournamentId ?? this.tournamentId;
      this.tournamentName = parsed.tournamentName ?? this.tournamentName;
      this.eventDate = parsed.eventDate ?? this.eventDate;
      this.venue = parsed.venue ?? this.venue;
      this.rulesVersion = parsed.rulesVersion ?? this.rulesVersion;
      this.growthAllowanceTenths = parsed.growthAllowanceTenths ?? 0;
      this.consecutiveDayAllowanceTenths = parsed.consecutiveDayAllowanceTenths ?? 0;
      this.matCount = parsed.matCount ?? 4;
      this.snapshotEpoch = parsed.snapshotEpoch ?? 1;
      this.controlSequenceHead = parsed.controlSequenceHead ?? 1;
      this.nextBoutNumber = parsed.nextBoutNumber ?? 101;
      this.athletes = new Map(parsed.athletes);
      this.privateWeighIns = new Map(parsed.privateWeighIns);
      this.privateMedicals = new Map(parsed.privateMedicals);
      this.bouts = new Map(parsed.bouts);
      this.mats = new Map(parsed.mats);
      this.bracketFrozenByClass = new Map(parsed.bracketFrozenByClass);
      this.resultCorrections = parsed.resultCorrections ?? [];
      this.owVotes = new Map(parsed.owVotes ?? []);
      this.revokedCertificateIds = new Set(parsed.revokedCertificateIds ?? []);
      const journal = parsed.protocolJournal ?? [];
      const canIncremental = incremental && journal.length >= this.protocolJournal.length && this.protocolJournal.every((prev, idx) => {
        const cur = journal[idx];
        return cur && cur.wireHex === prev.wireHex && cur.controlHeadHex === prev.controlHeadHex && cur.mat?.certificate_id === prev.mat?.certificate_id;
      });
      const startIndex = canIncremental ? this.protocolJournal.length : 0;
      if (!canIncremental) {
        this.verifiers.clear();
        this.knownProvisionHeads.clear();
      }
      for (let i2 = startIndex; i2 < journal.length; i2++) {
        const entry = journal[i2];
        if (entry.mat) this.registerMatDelegation(entry.mat, false);
        if (entry.controlHeadHex) {
          const verifier = this.verifiers.get(entry.matId);
          if (!verifier) throw new Error("Provision head precedes mat delegation");
          verifier.markControlHeadKnown(fromHex(entry.controlHeadHex));
          this.knownProvisionHeads.add(`${entry.matId}:${entry.controlHeadHex}`);
        }
        if (entry.wireHex) {
          const event = decodeEventWireCbor(fromHex(entry.wireHex));
          const matId = Number(event.stream_id.split(":")[1]);
          const target = this.verifiers.get(matId);
          if (!target || target.verifyAndAccept(
            event,
            DOMAIN_EVENT,
            ScopeBits.ScoreMat,
            entry.atMs,
            true
          ) !== ApplyOutcome.Applied) throw new Error("Invalid persisted stream journal");
        }
      }
      this.protocolJournal = journal;
      return true;
    } catch (error) {
      throw new Error(`Stored authority state requires recovery: ${String(error)}`);
    }
  }
}
const WATCHLIST_STORAGE_KEY = "openmat_players_watchlist_v4_1";
const OW_VOTE_STORAGE_KEY = "openmat_players_ow_vote_v4_1";
const PROJECTION_CACHE_KEY = "openmat_players_verified_projection";
class PlayersSyncCoordinator {
  constructor(onUpdate, peerId = `player-${randomUuid()}`, peerKey = generateEd25519KeyPair("spectator")) {
    this.peerKey = peerKey;
    this.onUpdateCallback = onUpdate;
    this.overlayMesh = new OverlayMeshClient({ peerId, configuredMats: 4 });
    this.envelope = {
      tournament_id: "",
      tournament_name: "Join a tournament",
      rules_version: "",
      growth_allowance_tenths: 0,
      consecutive_day_allowance_tenths: 0,
      mat_count: 0,
      snapshot_epoch: 0,
      control_sequence_head: 0,
      published_at_ms: 0,
      publisher_pubkey_hex: "",
      payload_sha256_hex: "",
      signature_hex: "",
      athletes: [],
      bouts: [],
      mats: [],
      standings: [],
      bracket_frozen_by_class: {},
      ow_vote_tallies: {}
    };
    this.pinnedPublisherPubkeyHex = "";
    this.defaultJoinQrUri = "";
    this.defaultJoinQrSvg = "";
    this.loadWatchlist();
    if (typeof localStorage !== "undefined") {
      try {
        const cached = JSON.parse(localStorage.getItem(PROJECTION_CACHE_KEY) ?? "null");
        if (cached && this.applyScannedTournamentJoinQr(cached.joinQrUri).valid) {
          this.ingestSignedEnvelope(cached.envelope, "VERIFIED_LOCAL_CACHE");
        }
      } catch {
      }
    }
    if (typeof window !== "undefined" && window.location?.href && (window.location.search || window.location.hash)) {
      try {
        this.applyScannedTournamentJoinQr(window.location.href);
      } catch {
      }
    }
    this.recordCurrentUrgencies();
  }
  peerKey;
  envelope;
  overlayMesh;
  assignedSubtreeParentId = "venue-super-seed";
  assignedSubtreeRoomId = TwoPlaneVenueRoomRouter.subtreeRoomId("venue-super-seed");
  lastSubtreePingRttMs = 0;
  framesRoutedViaMux = 0;
  lastRelayedProjection = "";
  pinnedPublisherPubkeyHex;
  defaultJoinQrUri;
  defaultJoinQrSvg;
  lastVerifiedUpdateMs = 0;
  connectionState = "AWAITING_TOURNAMENT_JOIN";
  watchedAthleteIds = /* @__PURE__ */ new Set();
  webPushState = "UNSUBSCRIBED";
  webPushStatusMessage = "";
  vapidPublicKeyBase64Url = "";
  activePushSubscription = null;
  officialsOrigin = typeof window !== "undefined" && window.location?.origin && window.location.origin.startsWith("http") && !window.location.origin.endsWith(":5173") ? window.location.origin : "http://127.0.0.1:5174";
  owVotedAthleteId = "";
  owVoteTallies = /* @__PURE__ */ new Map();
  owVoteStatusMessage = "";
  voterId = "";
  pinnedTournamentId = "";
  pinnedIssuedAtMs = 0;
  publisherOnlyJoin = false;
  votePending = false;
  gameMessageListener;
  gameIceServers = [];
  gameRevision = -1;
  gameTimestamp = -1;
  gameSnapshotTimestamp = -1;
  gameStatePending = null;
  cachedGameState = null;
  cachedGameStateAt = 0;
  gameRoutes = /* @__PURE__ */ new Map();
  gameReceipts = /* @__PURE__ */ new Map();
  gameBackupParents = [];
  gameRelayChildren = 10;
  compactReplica;
  selectedBracketId = "";
  compactSyncPending = false;
  liveParent = null;
  liveChildren = null;
  p2pError = "";
  serviceWorkerVersion = "";
  syncGeneration = 0;
  liveSyncGeneration = 0;
  bootstrapping = false;
  p2pAvailable = true;
  lastDelivery = null;
  apiLastAttemptAtMs = 0;
  apiLastSuccessAtMs = 0;
  apiError = "";
  publicView() {
    const replica = this.compactReplica;
    if (!replica || replica.tournamentId !== this.pinnedTournamentId || !replica.receivedAtMs) return this.envelope;
    const athletes = new Map(this.envelope.athletes.map((a2) => [a2.athlete_id, a2]));
    const bouts = new Map(this.envelope.bouts.map((b2) => [b2.match_id, b2]));
    const teams = new Map(replica.summary?.teams.map((t2) => [t2.index, t2]));
    const winTypes = ["", "DEC", "MD", "TF", "FALL", "DQ", "INJURY_DEFAULT", "FORFEIT", "MEDICAL_FORFEIT"];
    for (const [id, state] of replica.brackets) {
      const directory = replica.summary?.brackets.find((b2) => b2.bracket_id === id);
      if (!directory) continue;
      const division = ["", "varsity", "girls", "jv", "u16"][state.division] ?? "";
      const slots = new Map(state.athletes.map((a2) => [a2.slot, a2.athlete_id]));
      slots.set(0, "");
      for (const a2 of state.athletes) {
        const old = athletes.get(a2.athlete_id), team = teams.get(a2.team_index);
        athletes.set(a2.athlete_id, {
          opaque_pass_token: "",
          weigh_in_eligible: false,
          medically_cleared: false,
          matches_wrestled_today: 0,
          prior_day_matches: 0,
          last_bout_ended_ms: 0,
          updated_at_ms: 0,
          ...old,
          athlete_id: a2.athlete_id,
          public_display_name: a2.display_name,
          team_id: team?.team_id ?? old?.team_id ?? "",
          team_name: team?.name ?? old?.team_name ?? "",
          division_id: division,
          weight_class_id: directory.weight_class_id,
          seed_rank: a2.seed_rank,
          check_in_stage: a2.public_stage || a2.state
        });
      }
      const numbers = new Map(state.bouts.map((b2) => [b2.local_number, b2.match_id]));
      numbers.set(0, "");
      for (const b2 of state.bouts) {
        const old = bouts.get(b2.match_id);
        bouts.set(b2.match_id, {
          mat_queue_order: 0,
          authority_epoch: 0,
          delegated_android_device_id: "",
          ...old,
          match_id: b2.match_id,
          bracket_id: id,
          weight_class_id: directory.weight_class_id,
          division_id: division,
          format: state.format === 5 ? "ROUND_ROBIN_POOL" : state.format === 6 ? "POOL_TO_BRACKET" : state.format === 7 ? "TEAM_DUAL" : "DOUBLE_ELIM_CROSSOVER",
          bout_number: b2.bout_number,
          round_index: b2.round_index,
          round_label: old?.round_label ?? `Round ${b2.round_index}`,
          is_consolation: !!(b2.flags & 1),
          is_placement_bout: !!(b2.flags & 2),
          is_true_second_challenge: !!(b2.flags & 4),
          is_bye: !!(b2.flags & 8),
          placement_rank: b2.placement_rank,
          red_athlete_id: slots.get(b2.red_slot) ?? "",
          green_athlete_id: slots.get(b2.green_slot) ?? "",
          winner_athlete_id: slots.get(b2.winner_slot) ?? "",
          loser_athlete_id: slots.get(b2.loser_slot) ?? "",
          winner_next_match_id: numbers.get(b2.winner_next) ?? "",
          loser_next_match_id: numbers.get(b2.loser_next) ?? "",
          lifecycle: b2.lifecycle + 1,
          assigned_mat_id: b2.mat_id,
          assignment_revision: b2.assignment_revision,
          red_score: b2.red_score,
          green_score: b2.green_score,
          period_number: b2.period,
          clock_remaining_ms: b2.clock_remaining_ds * 100,
          clock_running: false,
          win_type: winTypes[b2.win_type] ?? "",
          completed_at_ms: b2.completed_offset_sec * 1e3
        });
      }
    }
    for (const m2 of replica.mats.values()) {
      const state = replica.brackets.get(m2.bracket_id), bout = state?.bouts.find((b2) => b2.local_number === m2.local_number);
      const old = (bout && bouts.get(bout.match_id)) ?? [...bouts.values()].find((b2) => b2.bracket_id === m2.bracket_id && b2.bout_number === m2.bout_number);
      if (old) bouts.set(old.match_id, {
        ...old,
        red_score: m2.red_score,
        green_score: m2.green_score,
        period_number: m2.period,
        clock_remaining_ms: m2.clock_remaining_ds * 100,
        clock_running: !!m2.clock_running,
        assigned_mat_id: m2.mat_id
      });
    }
    return {
      ...this.envelope,
      tournament_id: replica.tournamentId,
      mat_count: replica.summary?.mat_count ?? this.envelope.mat_count,
      athletes: [...athletes.values()],
      bouts: [...bouts.values()],
      published_at_ms: replica.receivedAtMs,
      signature_hex: "",
      payload_sha256_hex: ""
    };
  }
  p2pDelivery() {
    return { kind: "P2P", peerId: this.findUpstreamParentPeerId(), roomId: this.assignedSubtreeRoomId };
  }
  findUpstreamParentPeerId() {
    if (!this.liveParent) return void 0;
    if (this.assignedSubtreeParentId && this.liveParent.members.has(this.assignedSubtreeParentId) && this.assignedSubtreeParentId !== this.overlayMesh.peerId) {
      return this.assignedSubtreeParentId;
    }
    for (const [id, member] of this.liveParent.members.entries()) {
      if (id !== this.overlayMesh.peerId && (member.role === "primary" || member.role === "official" || id === "official-venue")) {
        return id;
      }
    }
    return void 0;
  }
  isP2pConnected() {
    const parent = this.findUpstreamParentPeerId();
    if (!parent || !this.liveParent) return false;
    const status = this.liveParent.diagnostics();
    return status.brokerConnected || status.peers.some((p2) => p2.peerId === parent && p2.transport === "WEBRTC");
  }
  async requestViaP2p(operation, payload = new Uint8Array()) {
    const parent = this.findUpstreamParentPeerId();
    if (!this.liveParent || !parent) {
      throw new Error("No upstream P2P parent connected");
    }
    return this.liveParent.request(operation, payload, parent);
  }
  async refreshCompactBracket() {
    if (this.compactSyncPending || !this.selectedBracketId || !this.isP2pConnected()) return;
    this.compactSyncPending = true;
    try {
      const packets = decodeDeterministicCbor(await this.requestViaP2p("bracket-sync", new TextEncoder().encode(this.selectedBracketId)), { maxBytes: 4194304 });
      if (!Array.isArray(packets)) throw new Error("Invalid compact catch-up response");
      if (!this.compactReplica || this.compactReplica.tournamentId !== this.pinnedTournamentId || this.compactReplica.publisherHex !== this.pinnedPublisherPubkeyHex)
        this.compactReplica = new BracketReplica(this.pinnedTournamentId, this.pinnedPublisherPubkeyHex);
      for (const item of packets) {
        const packet2 = item;
        this.compactReplica.apply(packet2.topic, packet2.bytes);
      }
      this.lastVerifiedUpdateMs = Date.now();
      this.connectionState = "LIVE_OFFICIALS_STREAM";
      this.lastDelivery = { ...this.p2pDelivery(), receivedAtMs: Date.now() };
      this.onUpdateCallback?.();
    } catch (error) {
      this.p2pError = String(error);
    } finally {
      this.compactSyncPending = false;
    }
  }
  async watchBracket(bracketId) {
    if (bracketId && !/^[A-Za-z0-9_-]{1,100}$/.test(bracketId)) throw new Error("Invalid bracket id");
    if (this.selectedBracketId === bracketId) return;
    this.selectedBracketId = bracketId;
    if (this.pinnedTournamentId) await this.startP2p();
  }
  async startP2p(origin = this.officialsOrigin, parentId) {
    if (parentId === this.overlayMesh.peerId) throw new Error("Cannot use own subtree as parent");
    const generation = ++this.syncGeneration;
    if (!this.pinnedPublisherPubkeyHex) return;
    this.overlayMesh.stopLiveRooms();
    this.liveParent = null;
    this.liveChildren = null;
    if (!parentId) {
      try {
        const response = await fetch(`${origin}/api/openmat-subtree?tournament=${encodeURIComponent(this.pinnedTournamentId)}&peer=${encodeURIComponent(this.overlayMesh.peerId)}&children=${this.gameRelayChildren}${this.selectedBracketId ? `&bracket=${encodeURIComponent(this.selectedBracketId)}` : ""}`);
        if (response.ok) {
          const roomId = String((await response.json()).roomId ?? "");
          if (roomId.startsWith("subtree:") && roomId.length > 8 && roomId !== `subtree:${this.overlayMesh.peerId}`) {
            parentId = roomId.slice(8);
          }
        }
      } catch {
      }
      if (!parentId) {
        parentId = this.selectedBracketId ? `b:${this.selectedBracketId}` : "venue-super-seed";
      }
    }
    if (generation !== this.syncGeneration) return;
    this.assignedSubtreeParentId = parentId;
    this.assignedSubtreeRoomId = TwoPlaneVenueRoomRouter.subtreeRoomId(parentId);
    const join = async (roomId) => this.overlayMesh.joinLiveRoom({
      origin,
      rootPublicKeyHex: this.pinnedPublisherPubkeyHex,
      tournamentId: this.pinnedTournamentId,
      roomId,
      peerId: this.overlayMesh.peerId,
      publicKey: this.peerKey.publicKey,
      role: "spectator",
      iceServers: this.gameIceServers,
      sign: (bytes) => signDomainBytes(DOMAIN_CONTROL, bytes, this.peerKey.privateKey),
      onMembership: () => {
        if (generation !== this.syncGeneration) return;
        if (roomId === this.assignedSubtreeRoomId && this.isP2pConnected()) {
          if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
          }
          if (this.selectedBracketId) void this.refreshCompactBracket();
          if (!this.envelope.signature_hex) {
            void this.refreshViaP2p(false);
          }
        }
        this.onUpdateCallback?.();
      },
      onError: (error) => {
        this.p2pError = error.message;
      },
      onMessage: (topic, bytes, from) => {
        if (generation !== this.syncGeneration) return;
        if (BRACKET_TOPICS.includes(topic)) {
          try {
            if (!this.compactReplica || this.compactReplica.tournamentId !== this.pinnedTournamentId || this.compactReplica.publisherHex !== this.pinnedPublisherPubkeyHex)
              this.compactReplica = new BracketReplica(this.pinnedTournamentId, this.pinnedPublisherPubkeyHex);
            if (this.compactReplica.apply(topic, bytes)) {
              this.lastVerifiedUpdateMs = Date.now();
              this.connectionState = "LIVE_OFFICIALS_STREAM";
              this.lastDelivery = { kind: "P2P", peerId: from, roomId, receivedAtMs: Date.now() };
              this.liveChildren?.send(topic, bytes, topic.includes("eventlog") || topic === "bracket-full" ? ChannelClass.BulkChunksBackground : ChannelClass.CurrentStateUnorderedNewest);
              this.onUpdateCallback?.();
            }
          } catch (error) {
            this.p2pError = String(error);
            void this.refreshCompactBracket();
          }
        }
        if (topic === "public-projection") {
          try {
            this.ingestSignedEnvelope(JSON.parse(new TextDecoder().decode(bytes)), "LIVE_OFFICIALS_STREAM", { kind: "P2P", peerId: from, roomId });
          } catch (error) {
            this.p2pError = String(error);
          }
        }
        if (topic === "game-state" || topic === "game-snapshot") this.ingestGameMessage(topic, bytes);
        if (topic === "game-tap") {
          try {
            if (roomId === this.assignedSubtreeRoomId && from === this.findUpstreamParentPeerId()) {
              this.acceptBackupGameMessage(topic, bytes);
            } else if (roomId === TwoPlaneVenueRoomRouter.subtreeRoomId(this.overlayMesh.peerId) && bytes.length <= 1024) {
              this.retryGameTaps();
              const id = actionId(bytes), route = this.gameRoutes.get(id);
              const receipt = this.gameReceipts.get(id);
              if (receipt) {
                this.liveChildren?.send(topic, receipt.bytes, ChannelClass.OfficialEventsOrderedReliable, from);
                return;
              }
              if (route) {
                route.peers.add(from);
                return;
              }
              if (this.gameRoutes.size >= 5e3) return;
              this.gameRoutes.set(id, { peers: /* @__PURE__ */ new Set([from]), at: Date.now(), lastSent: Date.now(), bytes });
              this.sendGameTap(bytes);
            }
          } catch (error) {
            this.p2pError = String(error);
          }
        }
      },
      onRpc: async (operation, bytes) => {
        if (operation === "bracket-sync") return this.requestViaP2p(operation, bytes);
        if (operation === "game-sync") return this.cachedGameState && performance.now() - this.cachedGameStateAt < 1500 ? this.cachedGameState : this.getTapGameState();
        if (operation === "game-tap") {
          if (bytes.length > 1024) throw new Error("Game tap too large");
          return this.requestViaP2p(operation, bytes);
        }
        if (operation === "projection") {
          if (this.envelope.signature_hex) {
            return new TextEncoder().encode(JSON.stringify(this.envelope));
          }
          if (this.isP2pConnected()) {
            return this.requestViaP2p("projection", bytes);
          }
          throw new Error("No verified projection available");
        }
        if (operation === "ow-vote" || operation === "scorekeeper-event") {
          const replyBytes = await this.requestViaP2p(operation, bytes);
          try {
            const reply = JSON.parse(new TextDecoder().decode(replyBytes));
            if (reply?.ok && reply.envelope) {
              this.ingestSignedEnvelope(reply.envelope, "LIVE_OFFICIALS_STREAM", this.p2pDelivery());
            }
          } catch {
          }
          return replyBytes;
        }
        throw new Error("Unsupported room RPC");
      }
    });
    const parentRoom = await join(this.assignedSubtreeRoomId);
    if (generation !== this.syncGeneration) {
      parentRoom.stop();
      return;
    }
    this.liveParent = parentRoom;
    const childrenRoom = await join(TwoPlaneVenueRoomRouter.subtreeRoomId(this.overlayMesh.peerId));
    if (generation !== this.syncGeneration) {
      childrenRoom.stop();
      return;
    }
    this.liveChildren = childrenRoom;
    const parent = this.findUpstreamParentPeerId();
    if (parent) {
      const bytes = await this.liveParent.request("projection", new Uint8Array(), parent);
      if (generation !== this.syncGeneration) return;
      this.ingestSignedEnvelope(JSON.parse(new TextDecoder().decode(bytes)), "LIVE_OFFICIALS_STREAM", this.p2pDelivery());
      this.lastSubtreePingRttMs = await this.liveParent.ping(parent) ?? 0;
      this.p2pError = "";
      if (this.selectedBracketId) await this.refreshCompactBracket();
      this.eventSource?.close();
      this.eventSource = null;
    }
  }
  async refreshViaP2p(allowHttpFallback = true) {
    if (this.isP2pConnected() && this.liveParent) {
      try {
        const parent = this.findUpstreamParentPeerId();
        const bytes = await this.liveParent.request("projection", new Uint8Array(), parent);
        const envelope = JSON.parse(new TextDecoder().decode(bytes));
        this.lastSubtreePingRttMs = await this.liveParent.ping(parent) ?? this.lastSubtreePingRttMs;
        const accepted = this.ingestSignedEnvelope(envelope, "LIVE_OFFICIALS_STREAM", this.p2pDelivery());
        if (accepted) {
          this.lastVerifiedUpdateMs = Date.now();
          this.connectionState = "LIVE_OFFICIALS_STREAM";
          this.onUpdateCallback?.();
          return true;
        }
      } catch (error) {
        this.p2pError = String(error);
      }
      if (!allowHttpFallback) return false;
    }
    if (!allowHttpFallback) return false;
    return this.fetchProjectionHttpBackup(this.officialsOrigin);
  }
  async fetchProjectionHttpBackup(origin = this.officialsOrigin, generation = this.liveSyncGeneration) {
    if (!this.pinnedPublisherPubkeyHex || generation !== this.liveSyncGeneration) return false;
    this.apiLastAttemptAtMs = Date.now();
    try {
      const headers = {};
      if (this.envelope.payload_sha256_hex) {
        headers["If-None-Match"] = `"${this.envelope.payload_sha256_hex}"`;
      }
      const response = await fetch(`${origin}/api/openmat-live-projection`, { headers });
      if (generation !== this.liveSyncGeneration) return false;
      if (response.status === 304 && this.envelope.signature_hex) {
        this.lastVerifiedUpdateMs = Date.now();
        this.lastDelivery = { kind: "HTTP_POLL", endpoint: origin, receivedAtMs: this.lastVerifiedUpdateMs };
        this.apiLastSuccessAtMs = this.lastVerifiedUpdateMs;
        this.apiError = "";
        this.connectionState = "LIVE_OFFICIALS_STREAM";
        this.onUpdateCallback?.();
        return true;
      }
      if (!response.ok) {
        this.apiError = `HTTP ${response.status}`;
        return false;
      }
      const envelope = await response.json();
      if (generation !== this.liveSyncGeneration) return false;
      const accepted = this.ingestSignedEnvelope(envelope, "LIVE_OFFICIALS_STREAM", { kind: "HTTP_POLL", endpoint: origin });
      if (accepted) this.apiLastSuccessAtMs = Date.now();
      this.apiError = accepted ? "" : "Projection verification rejected";
      return accepted;
    } catch (error) {
      if (generation === this.liveSyncGeneration) this.apiError = error instanceof Error ? error.message : String(error);
      throw error;
    }
  }
  broadcastChannel = typeof window !== "undefined" && typeof BroadcastChannel !== "undefined" ? new BroadcastChannel("openmat-live-sync") : null;
  eventSource = null;
  pollTimer = null;
  previousUrgencyByAthlete = /* @__PURE__ */ new Map();
  onUpdateCallback;
  publicNostrRelays = [...DEFAULT_PUBLIC_NOSTR_RELAYS];
  nostrRelaySockets = /* @__PURE__ */ new Map();
  nostrSocketFilterKeys = /* @__PURE__ */ new Map();
  getGamePeerRooms() {
    return { parent: this.liveParent, children: this.liveChildren };
  }
  acceptBackupGameMessage(topic, bytes) {
    if (topic === "game-state" || topic === "game-snapshot") {
      this.ingestGameMessage(topic, bytes);
      return;
    }
    if (topic !== "game-tap") return;
    const body = verified(bytes, `game:${this.pinnedTournamentId}`, this.pinnedPublisherPubkeyHex);
    if (body.kind !== "receipt" || typeof body.id !== "string") return;
    const route = this.gameRoutes.get(body.id);
    if (route) {
      this.gameRoutes.delete(body.id);
      if (this.gameReceipts.size >= 5e3) this.gameReceipts.delete(this.gameReceipts.keys().next().value);
      this.gameReceipts.set(body.id, { bytes, at: Date.now() });
      for (const peer of route.peers) {
        try {
          this.liveChildren?.send(topic, bytes, ChannelClass.OfficialEventsOrderedReliable, peer);
        } catch (error) {
          this.p2pError = String(error);
        }
      }
    }
    this.gameMessageListener?.(topic, bytes);
  }
  retryGameTaps() {
    for (const [id, route] of this.gameRoutes) {
      if (Date.now() - route.at > 15e3) {
        this.gameRoutes.delete(id);
        continue;
      }
      if (Date.now() - route.lastSent > 1e3) {
        route.lastSent = Date.now();
        try {
          this.sendGameTap(route.bytes, true);
        } catch (error) {
          this.p2pError = String(error);
        }
      }
    }
    for (const [id, receipt] of this.gameReceipts) if (Date.now() - receipt.at > 15e3) this.gameReceipts.delete(id);
  }
  ingestGameMessage(topic, bytes) {
    try {
      const body = verified(bytes, `game:${this.pinnedTournamentId}`, this.pinnedPublisherPubkeyHex);
      if (body.kind !== "state" && body.kind !== "snapshot" || !Number.isSafeInteger(body.revision) || !Number.isSafeInteger(body.at_ms) || Number(body.at_ms) < 0 || Number(body.revision) < this.gameRevision || body.revision === this.gameRevision && Number(body.at_ms) <= (body.kind === "snapshot" ? this.gameSnapshotTimestamp : this.gameTimestamp)) return false;
      this.gameRevision = Number(body.revision);
      this.gameTimestamp = Math.max(this.gameTimestamp, Number(body.at_ms));
      if (body.kind === "snapshot") this.gameSnapshotTimestamp = Number(body.at_ms);
      if (body.kind === "state") {
        this.cachedGameState = bytes;
        this.cachedGameStateAt = performance.now();
      }
      this.gameMessageListener?.(body.kind === "snapshot" ? "game-snapshot" : "game-state", bytes);
      try {
        this.liveChildren?.send(
          body.kind === "snapshot" ? "game-snapshot" : "game-state",
          bytes,
          body.kind === "snapshot" ? ChannelClass.BulkChunksBackground : ChannelClass.CurrentStateUnorderedNewest
        );
      } catch (error) {
        this.p2pError = String(error);
      }
      return true;
    } catch (error) {
      this.p2pError = String(error);
      return false;
    }
  }
  getTapGameState() {
    if (this.gameStatePending) return this.gameStatePending;
    const pending = this.readTapGameState().finally(() => {
      if (this.gameStatePending === pending) this.gameStatePending = null;
    });
    this.gameStatePending = pending;
    return pending;
  }
  async readTapGameState() {
    const generation = this.liveSyncGeneration;
    const parent = this.findUpstreamParentPeerId();
    const candidates = [
      ...this.isP2pConnected() && this.liveParent && parent ? [{ room: this.liveParent, target: parent }] : [],
      ...this.gameBackupParents.flatMap((room) => {
        const target = room.hostPeerId();
        return target ? [{ room, target }] : [];
      })
    ];
    if (candidates.length) {
      try {
        return await Promise.any(candidates.map(async ({ room, target }) => {
          const bytes2 = await room.request("game-sync", new Uint8Array(), target);
          if (generation !== this.liveSyncGeneration) throw new Error("Game sync generation changed");
          if (!this.ingestGameMessage("game-state", bytes2)) throw new Error("Peer returned stale or invalid game state");
          return bytes2;
        }));
      } catch (error) {
        if (generation === this.liveSyncGeneration) this.p2pError = String(error);
      }
    }
    if (generation !== this.liveSyncGeneration) throw new Error("Game sync generation changed");
    const response = await fetch(`${this.officialsOrigin}/api/game/state`, { cache: "no-store", signal: AbortSignal.timeout(5e3) });
    if (!response.ok) throw new Error("Game scorekeeper is offline");
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (generation !== this.liveSyncGeneration) throw new Error("Game sync generation changed");
    const body = verified(bytes, `game:${this.pinnedTournamentId}`, this.pinnedPublisherPubkeyHex);
    if (body.kind !== "state" && body.kind !== "snapshot" || !Number.isSafeInteger(body.revision) || Number(body.revision) < 0 || !Number.isSafeInteger(body.at_ms) || Number(body.at_ms) < 0) throw new Error("Invalid signed game state");
    this.ingestGameMessage("game-state", bytes);
    return bytes;
  }
  async submitGameTap(bytes) {
    if (bytes.length > 1024) throw new Error("Game tap too large");
    const response = await fetch(`${this.officialsOrigin}/api/game/tap`, { method: "POST", headers: { "Content-Type": "application/cbor" }, body: new Uint8Array(bytes), signal: AbortSignal.timeout(8e3) });
    if (!response.ok) throw new Error("Game scorekeeper is offline");
    return new Uint8Array(await response.arrayBuffer());
  }
  sendGameTap(bytes, alternate = false) {
    const parent = this.findUpstreamParentPeerId();
    if (bytes.length > 1024) throw new Error("Game tap too large");
    const backups = this.gameBackupParents.filter((room) => room.diagnostics().peers.some((p2) => p2.peerId === room.hostPeerId() && p2.transport !== "DISCONNECTED"));
    const primaryConnected = this.isP2pConnected() && this.liveParent && parent;
    const primaryRtc = primaryConnected ? this.liveParent.diagnostics().peers.some((p2) => p2.peerId === parent && p2.transport === "WEBRTC") : false;
    const webrtcBackups = backups.filter((room) => room.diagnostics().peers.some((p2) => p2.peerId === room.hostPeerId() && p2.transport === "WEBRTC"));
    const rooms = alternate ? backups.length ? !primaryRtc && webrtcBackups.length && primaryConnected ? [this.liveParent, ...backups] : backups : primaryConnected ? [this.liveParent] : [] : !primaryConnected ? backups : !primaryRtc && webrtcBackups.length ? [webrtcBackups[0]] : [this.liveParent];
    if (!rooms.length) throw new Error("No game parent connected");
    let sent = false, failure;
    for (const room of rooms) {
      try {
        room.send("game-tap", bytes, ChannelClass.OfficialEventsOrderedReliable, room === this.liveParent ? parent : room.hostPeerId());
        sent = true;
      } catch (error) {
        failure = error;
      }
    }
    if (!sent && failure) throw failure;
  }
  getPublicPlayerWebUrl(baseUrl = DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL) {
    if (!this.defaultJoinQrUri) return "";
    const decoded = decodeTournamentJoinQrUri(this.defaultJoinQrUri);
    if (!decoded.valid || !decoded.payload) return "";
    if (!decoded.payload.signature_hex && decoded.payload.publisher_pubkey_hex && decoded.payload.tournament_id) {
      const url = new URL(`${baseUrl.trim().replace(/\/+$/, "")}/`);
      url.hash = new URLSearchParams({ session: `game:${decoded.payload.tournament_id}`, root: decoded.payload.publisher_pubkey_hex }).toString();
      return url.href;
    }
    return encodePublicPlayerWebUrl(decoded.payload, baseUrl, this.publicNostrRelays);
  }
  getDirectJoinKeyUrl(baseUrl = DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL) {
    const cleanBase = baseUrl.trim().replace(/\/+$/, "");
    const key = this.pinnedPublisherPubkeyHex || this.envelope.publisher_pubkey_hex || this.pinnedTournamentId || this.envelope.tournament_id;
    return key ? `${cleanBase}/?${key}` : `${cleanBase}/`;
  }
  getDirectOfficialsUrl(baseUrl) {
    const defaultBase = typeof window !== "undefined" && window.location?.origin && !window.location.origin.includes("github.io") && window.location.origin !== "null" ? `${window.location.origin}/officials` : `${DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL.replace(/\/+$/, "")}/officials`;
    const cleanBase = (baseUrl ?? defaultBase).trim().replace(/\/+$/, "");
    const key = this.pinnedPublisherPubkeyHex || this.envelope.publisher_pubkey_hex || this.pinnedTournamentId || this.envelope.tournament_id;
    return key ? `${cleanBase}/?${key}` : `${cleanBase}/`;
  }
  getPublicFallbackOfficialsUrl(baseUrl = `${DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL.replace(/\/+$/, "")}/officials`) {
    const cleanBase = baseUrl.trim().replace(/\/+$/, "");
    const key = this.pinnedPublisherPubkeyHex || this.envelope.publisher_pubkey_hex || this.pinnedTournamentId || this.envelope.tournament_id;
    return key ? `${cleanBase}/?${key}` : `${cleanBase}/`;
  }
  ingestNostrRelayEvent(rawFrame, relayUrl) {
    try {
      const parsed = JSON.parse(rawFrame);
      if (!Array.isArray(parsed) || parsed[0] !== "EVENT" || !parsed[2] || typeof parsed[2] !== "object") {
        return false;
      }
      const eventObj = parsed[2];
      if (typeof eventObj.content !== "string" || !eventObj.content) return false;
      const candidate = JSON.parse(eventObj.content);
      return this.ingestSignedEnvelope(candidate, "LIVE_OFFICIALS_STREAM", { kind: "NOSTR", endpoint: relayUrl });
    } catch {
      return false;
    }
  }
  buildNostrSubscriptionFilters() {
    const xTags = [];
    if (this.pinnedTournamentId && this.pinnedTournamentId !== "manual-pubkey") {
      xTags.push(`openmat-proj:${this.pinnedTournamentId}`);
    }
    if (this.pinnedPublisherPubkeyHex) {
      xTags.push(`openmat-pub:${this.pinnedPublisherPubkeyHex.toLowerCase()}`);
    }
    if (xTags.length === 0) {
      xTags.push("openmat:v1");
    }
    return [{ kinds: [24880, 30078], "#x": xTags }];
  }
  startPublicNostrRelaySync(generation = this.liveSyncGeneration) {
    if (typeof WebSocket === "undefined" || !this.pinnedPublisherPubkeyHex && !this.pinnedTournamentId) {
      return;
    }
    const idSeed = (this.pinnedTournamentId || this.pinnedPublisherPubkeyHex || "live").slice(0, 24);
    const subId = `om-proj-${idSeed}`;
    const filters = this.buildNostrSubscriptionFilters();
    const filterKey = JSON.stringify(filters);
    for (const relayUrl of this.publicNostrRelays) {
      if (typeof window !== "undefined" && window.location?.protocol === "https:" && !relayUrl.startsWith("wss:")) continue;
      const existing = this.nostrRelaySockets.get(relayUrl);
      if (existing) {
        if (existing.readyState === WebSocket.OPEN && this.nostrSocketFilterKeys.get(relayUrl) !== filterKey) {
          try {
            existing.send(JSON.stringify(["REQ", subId, ...filters]));
            this.nostrSocketFilterKeys.set(relayUrl, filterKey);
          } catch {
          }
        }
        continue;
      }
      try {
        const ws = new WebSocket(relayUrl);
        this.nostrRelaySockets.set(relayUrl, ws);
        ws.onopen = () => {
          if (generation !== this.liveSyncGeneration || this.nostrRelaySockets.get(relayUrl) !== ws) {
            ws.close();
            return;
          }
          try {
            const currentFilters = this.buildNostrSubscriptionFilters();
            const currentKey = JSON.stringify(currentFilters);
            ws.send(JSON.stringify(["REQ", subId, ...currentFilters]));
            this.nostrSocketFilterKeys.set(relayUrl, currentKey);
          } catch {
          }
        };
        ws.onmessage = (ev) => {
          if (generation !== this.liveSyncGeneration) return;
          if (typeof ev.data === "string") {
            this.ingestNostrRelayEvent(ev.data, relayUrl);
          }
        };
        ws.onclose = () => {
          if (this.nostrRelaySockets.get(relayUrl) === ws) {
            this.nostrRelaySockets.delete(relayUrl);
            this.nostrSocketFilterKeys.delete(relayUrl);
          }
        };
        ws.onerror = () => {
          try {
            ws.close();
          } catch {
          }
        };
      } catch {
      }
    }
  }
  applyScannedTournamentJoinQr(rawInput) {
    const res = decodeTournamentJoinQrUri(rawInput);
    if (!res.valid || !res.payload) {
      return { valid: false, reason: res.reason };
    }
    const nextPubkey = res.payload.publisher_pubkey_hex;
    const nextTid = res.payload.tournament_id === "manual-pubkey" ? "" : res.payload.tournament_id;
    const changed = this.pinnedPublisherPubkeyHex !== nextPubkey || this.pinnedTournamentId !== nextTid;
    this.pinnedPublisherPubkeyHex = nextPubkey;
    this.publisherOnlyJoin = Boolean(nextPubkey && !nextTid);
    this.pinnedTournamentId = nextTid;
    this.pinnedIssuedAtMs = res.payload.issued_at_ms || 0;
    const isMixedContentLanOrigin = typeof window !== "undefined" && window.location?.protocol === "https:" && res.payload.relay_origin.startsWith("http://") && !res.payload.relay_origin.startsWith("http://127.0.0.1") && !res.payload.relay_origin.startsWith("http://localhost");
    const isUnsignedDefaultOrigin = !res.payload.signature_hex && res.payload.relay_origin === "http://127.0.0.1:5174" && typeof window !== "undefined" && window.location?.protocol === "https:";
    if (!isMixedContentLanOrigin && !isUnsignedDefaultOrigin) {
      this.officialsOrigin = res.payload.relay_origin;
    }
    this.p2pAvailable = true;
    this.p2pError = "";
    this.lastRelayedProjection = "";
    this.publicNostrRelays = [...res.payload.nostr_relays?.length ? res.payload.nostr_relays : DEFAULT_PUBLIC_NOSTR_RELAYS];
    const canonicalJoinUri = res.payload.signature_hex && !isMixedContentLanOrigin ? encodeTournamentJoinQrUri(res.payload) : nextPubkey && nextTid ? `${DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL}/#${new URLSearchParams({ session: `game:${nextTid}`, root: nextPubkey })}` : nextPubkey || nextTid || rawInput.trim();
    this.defaultJoinQrUri = canonicalJoinUri;
    this.defaultJoinQrSvg = renderQrSvgDataUrl(canonicalJoinUri);
    if (changed) {
      this.gameRevision = -1;
      this.gameTimestamp = -1;
      this.gameSnapshotTimestamp = -1;
      this.cachedGameState = null;
      this.gameRoutes.clear();
      this.gameReceipts.clear();
      this.envelope = {
        ...this.envelope,
        tournament_id: nextTid,
        tournament_name: res.payload.tournament_name || "Live Tournament",
        snapshot_epoch: 0,
        control_sequence_head: 0,
        published_at_ms: 0,
        publisher_pubkey_hex: nextPubkey,
        signature_hex: "",
        payload_sha256_hex: "",
        athletes: [],
        bouts: [],
        mats: [],
        standings: [],
        bracket_frozen_by_class: {},
        ow_vote_tallies: {}
      };
      this.owVoteTallies.clear();
      this.owVotedAthleteId = "";
      this.voterId = "";
      this.previousUrgencyByAthlete.clear();
      this.lastVerifiedUpdateMs = 0;
      this.lastDelivery = null;
      this.apiLastAttemptAtMs = 0;
      this.apiLastSuccessAtMs = 0;
      this.apiError = "";
      this.connectionState = "AWAITING_TOURNAMENT_JOIN";
    }
    if (!this.bootstrapping && (this.eventSource || this.pollTimer)) {
      this.stopLiveSync();
      this.startLiveSync(this.officialsOrigin);
    }
    const qrSvg = this.defaultJoinQrSvg;
    this.onUpdateCallback?.();
    return {
      valid: true,
      reason: res.reason,
      pubkeyHex: this.pinnedPublisherPubkeyHex,
      qrSvg
    };
  }
  onServiceWorkerMessage = (event) => {
    if (event.data?.type === "OPENMAT_SW_VERSION" && typeof event.data.version === "string") {
      this.serviceWorkerVersion = event.data.version;
      this.onUpdateCallback?.();
    }
  };
  startLiveSync(officialsOrigin = this.officialsOrigin) {
    this.stopLiveSync();
    const generation = this.liveSyncGeneration;
    this.officialsOrigin = officialsOrigin;
    if (this.broadcastChannel) {
      this.broadcastChannel.onmessage = ({ data }) => {
        if (data && typeof data === "object" && "signature_hex" in data) {
          this.ingestSignedEnvelope(data, "LIVE_OFFICIALS_STREAM", { kind: "BROADCAST" });
        }
      };
    }
    if (typeof window === "undefined") return;
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", this.onServiceWorkerMessage);
      void navigator.serviceWorker.ready.then((reg) => reg.active?.postMessage({ type: "OPENMAT_GET_SW_VERSION" })).catch(() => {
      });
    }
    void this.restoreExistingWebPushSubscription();
    let fetching = false;
    let discoveredCapabilities = Boolean(this.pinnedPublisherPubkeyHex || this.pinnedTournamentId);
    const fetchLatest = async () => {
      if (fetching || generation !== this.liveSyncGeneration) return;
      fetching = true;
      try {
        if (!discoveredCapabilities && !this.pinnedPublisherPubkeyHex && !this.pinnedTournamentId) {
          const response = await fetch(`${officialsOrigin}/api/openmat-join-bootstrap`);
          if (generation !== this.liveSyncGeneration) return;
          if (response.ok && response.headers.get("content-type")?.includes("application/json")) {
            const bootstrap = await response.json();
            const decoded = decodeTournamentJoinQrUri(bootstrap.joinQrUri ?? "");
            if (decoded.valid && decoded.payload?.relay_origin === officialsOrigin && (!this.pinnedPublisherPubkeyHex || decoded.payload.publisher_pubkey_hex === this.pinnedPublisherPubkeyHex)) {
              this.bootstrapping = true;
              try {
                this.applyScannedTournamentJoinQr(bootstrap.joinQrUri);
              } finally {
                this.bootstrapping = false;
              }
              this.p2pAvailable = bootstrap.capabilities?.p2p !== false;
              discoveredCapabilities = true;
            }
          }
        }
        if (generation !== this.liveSyncGeneration || !this.pinnedPublisherPubkeyHex && !this.pinnedTournamentId) return;
        this.startPublicNostrRelaySync(generation);
        if (!this.pinnedPublisherPubkeyHex) return;
        const origin = this.officialsOrigin;
        if (typeof window !== "undefined" && window.location?.protocol === "https:" && origin.startsWith("http://") && !origin.startsWith("http://127.0.0.1") && !origin.startsWith("http://localhost")) {
          return;
        }
        if (this.p2pAvailable && !this.isP2pConnected()) {
          try {
            await this.startP2p(origin);
          } catch (error) {
            this.p2pError = String(error);
          }
        }
        if (generation !== this.liveSyncGeneration) return;
        if (this.isP2pConnected()) {
          if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
          }
          const parentId = this.findUpstreamParentPeerId();
          if (!this.envelope.signature_hex || parentId === "official-venue") {
            await this.refreshViaP2p(false);
          } else if (parentId && this.liveParent) {
            try {
              this.lastSubtreePingRttMs = await this.liveParent.ping(parentId) ?? this.lastSubtreePingRttMs;
            } catch (error) {
              this.p2pError = String(error);
            }
          }
          return;
        }
        if (!await this.fetchProjectionHttpBackup(origin, generation)) return;
        if (!this.isP2pConnected() && !this.eventSource && typeof EventSource !== "undefined") {
          this.eventSource = new EventSource(`${origin}/api/openmat-live-events`);
          this.eventSource.onmessage = (event) => {
            if (generation !== this.liveSyncGeneration) return;
            try {
              this.ingestSignedEnvelope(JSON.parse(event.data), "LIVE_OFFICIALS_STREAM", { kind: "HTTP_SSE", endpoint: origin });
            } catch {
            }
          };
        }
      } catch {
      } finally {
        fetching = false;
      }
    };
    void fetchLatest();
    this.pollTimer = setInterval(() => {
      void fetchLatest();
    }, 2500);
  }
  stopLiveSync() {
    if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.removeEventListener("message", this.onServiceWorkerMessage);
    }
    this.liveSyncGeneration++;
    this.gameStatePending = null;
    this.syncGeneration++;
    this.overlayMesh.stopLiveRooms();
    this.liveParent = null;
    this.liveChildren = null;
    for (const ws of this.nostrRelaySockets.values()) {
      try {
        ws.close();
      } catch {
      }
    }
    this.nostrRelaySockets.clear();
    this.nostrSocketFilterKeys.clear();
    if (this.broadcastChannel) this.broadcastChannel.onmessage = null;
    this.eventSource?.close();
    this.eventSource = null;
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  ingestSignedEnvelope(candidate, source, delivery) {
    if (!candidate || typeof candidate !== "object") return false;
    if (!this.pinnedPublisherPubkeyHex && !this.pinnedTournamentId) return false;
    if (this.pinnedPublisherPubkeyHex && candidate.publisher_pubkey_hex?.toLowerCase() !== this.pinnedPublisherPubkeyHex.toLowerCase()) {
      return false;
    }
    const isLegacyGeneratedPlaceholder = /^OPENMAT-VENUE-[A-F0-9]{8}$/.test(candidate.tournament_id ?? "") && Array.isArray(candidate.athletes) && candidate.athletes.length > 0 && candidate.athletes.every((a2) => /^mat-(?:[1-9]|1[0-9]|20)-(?:q[23]-)?(?:red|green)$/.test(a2.athlete_id));
    if (isLegacyGeneratedPlaceholder) {
      return false;
    }
    if (this.publisherOnlyJoin && this.publicView().athletes.length > 0 && (!Array.isArray(candidate.athletes) || candidate.athletes.length === 0)) {
      return false;
    }
    const isSameTournament = !this.pinnedTournamentId || this.pinnedTournamentId === "manual-pubkey" || candidate.tournament_id === this.pinnedTournamentId;
    const isNewerTournamentFromSamePublisher = !isSameTournament && this.publisherOnlyJoin && Boolean(this.pinnedPublisherPubkeyHex) && candidate.publisher_pubkey_hex?.toLowerCase() === this.pinnedPublisherPubkeyHex.toLowerCase() && candidate.published_at_ms > Math.max(this.envelope.published_at_ms, this.pinnedIssuedAtMs);
    if (!isSameTournament && !isNewerTournamentFromSamePublisher) {
      return false;
    }
    if (isSameTournament && candidate.tournament_id === this.envelope.tournament_id && (candidate.snapshot_epoch < this.envelope.snapshot_epoch || candidate.control_sequence_head < this.envelope.control_sequence_head || this.envelope.signature_hex && candidate.control_sequence_head === this.envelope.control_sequence_head && candidate.published_at_ms < this.envelope.published_at_ms)) {
      return false;
    }
    if (!TournamentAuthorityEngine.verifySignedPublicProjection(candidate)) {
      return false;
    }
    if (!this.pinnedPublisherPubkeyHex && candidate.publisher_pubkey_hex) {
      this.pinnedPublisherPubkeyHex = candidate.publisher_pubkey_hex.toLowerCase();
    }
    if (!this.pinnedTournamentId || this.pinnedTournamentId === "manual-pubkey" || isNewerTournamentFromSamePublisher) {
      this.pinnedTournamentId = candidate.tournament_id;
    }
    this.envelope = structuredClone(candidate);
    this.compactReplica = void 0;
    this.lastVerifiedUpdateMs = Date.now();
    this.lastDelivery = { ...delivery ?? { kind: source === "VERIFIED_LOCAL_CACHE" ? "CACHE" : source === "OFFLINE_SNAPSHOT" ? "SNAPSHOT" : "UNKNOWN" }, receivedAtMs: this.lastVerifiedUpdateMs };
    this.connectionState = source;
    if (this.liveChildren && candidate.payload_sha256_hex !== this.lastRelayedProjection) {
      try {
        this.liveChildren.send("public-projection", new TextEncoder().encode(JSON.stringify(candidate)));
        this.lastRelayedProjection = candidate.payload_sha256_hex;
      } catch (error) {
        this.p2pError = String(error);
      }
    }
    this.framesRoutedViaMux = [...this.overlayMesh.liveRooms.values()].reduce((n3, room) => n3 + room.framesSent + room.framesReceived, 0);
    if (typeof localStorage !== "undefined") {
      try {
        const joinKeyToStore = this.defaultJoinQrUri || this.pinnedPublisherPubkeyHex || this.pinnedTournamentId;
        localStorage.setItem(PROJECTION_CACHE_KEY, JSON.stringify({ joinQrUri: joinKeyToStore, envelope: candidate }));
      } catch {
      }
    }
    this.owVoteTallies = new Map(Object.entries(candidate.ow_vote_tallies ?? {}));
    const notifications = this.computeWatchedAthleteNotifications();
    for (const notif of notifications) {
      const prev = this.previousUrgencyByAthlete.get(notif.athleteId);
      const currentKey = `${notif.boutNumber}:${notif.MatAndUrgencyKey}`;
      if (prev && prev !== currentKey) {
        void this.dispatchServiceWorkerPushNotification(notif);
      }
      this.previousUrgencyByAthlete.set(notif.athleteId, currentKey);
    }
    this.onUpdateCallback?.();
    return true;
  }
  getSubtreeP2pStatus() {
    const peersInRoom = this.liveParent ? [...this.liveParent.members.keys()] : [];
    return {
      roomId: this.assignedSubtreeRoomId,
      parentId: this.assignedSubtreeParentId,
      peerId: this.overlayMesh.peerId,
      maxRoomPeers: MAX_SUBTREE_ROOM_PEERS,
      activePeersInRoom: peersInRoom.length,
      signalingAction: TRYSTERO_ACTION_SIG,
      rpcAction: TRYSTERO_ACTION_RPC,
      pingRttMs: this.liveParent?.lastPingRttMs ?? this.lastSubtreePingRttMs,
      muxChannels: ["official-events", "current-state", "bulk-chunks"],
      framesRoutedViaMux: [...this.overlayMesh.liveRooms.values()].reduce((n3, room) => n3 + room.framesSent + room.framesReceived, 0)
    };
  }
  getConnectionStatus(nowMs = Date.now()) {
    const rooms = [...this.overlayMesh.liveRooms.values()].map((room) => room.diagnostics());
    const parent = this.liveParent?.diagnostics();
    const children = this.liveChildren?.diagnostics();
    const upstreamId = this.findUpstreamParentPeerId();
    const upstream = parent?.peers.find((peer) => peer.peerId === upstreamId) ?? null;
    const relays = this.publicNostrRelays.map((url) => {
      const state = this.nostrRelaySockets.get(url)?.readyState;
      return { url, state: state === 1 ? "OPEN" : state === 0 ? "CONNECTING" : "CLOSED" };
    });
    const apiStream = this.eventSource?.readyState === 1 ? "OPEN" : this.eventSource?.readyState === 0 ? "CONNECTING" : "CLOSED";
    const delivery = this.lastDelivery;
    const ageMs = delivery ? Math.max(0, nowMs - delivery.receivedAtMs) : null;
    const deliveryPeer = rooms.find((room) => room.roomId === delivery?.roomId)?.peers.find((peer) => peer.peerId === delivery?.peerId);
    const sourceConnected = delivery?.kind === "P2P" ? Boolean(deliveryPeer && deliveryPeer.transport !== "DISCONNECTED") : delivery?.kind === "NOSTR" ? relays.some((relay) => relay.url === delivery.endpoint && relay.state === "OPEN") : delivery?.kind === "HTTP_SSE" ? apiStream === "OPEN" : delivery?.kind === "HTTP_POLL" ? this.pollTimer !== null && ageMs !== null && ageMs < 1e4 : delivery?.kind === "BROADCAST" ? this.pollTimer !== null && ageMs !== null && ageMs < 1e4 : false;
    const verified2 = Boolean(this.envelope.signature_hex || this.compactReplica?.tournamentId === this.pinnedTournamentId && this.compactReplica?.receivedAtMs);
    const live = Boolean(verified2 && this.connectionState === "LIVE_OFFICIALS_STREAM" && sourceConnected);
    return {
      live,
      delivery,
      ageMs,
      sourceConnected,
      transport: delivery?.kind === "P2P" ? deliveryPeer?.transport ?? "DISCONNECTED" : delivery?.kind ?? "NONE",
      peerId: this.overlayMesh.peerId,
      upstream,
      downstream: children?.peers ?? [],
      roomPeers: parent?.peers.filter((peer) => peer.peerId !== upstreamId) ?? [],
      pingRttMs: parent?.pingRttMs ?? null,
      framesSent: rooms.reduce((sum, room) => sum + room.framesSent, 0),
      framesReceived: rooms.reduce((sum, room) => sum + room.framesReceived, 0),
      rtcFramesSent: rooms.reduce((sum, room) => sum + room.rtcFramesSent, 0),
      forwardedFramesSent: rooms.reduce((sum, room) => sum + room.wsFramesSent, 0),
      reconnectCount: rooms.reduce((sum, room) => sum + room.reconnectCount, 0),
      api: {
        origin: this.officialsOrigin,
        stream: apiStream,
        polling: this.pollTimer !== null && this.apiLastAttemptAtMs > 0 && nowMs - this.apiLastAttemptAtMs < 1e4 && !this.isP2pConnected(),
        lastAttemptAtMs: this.apiLastAttemptAtMs,
        lastSuccessAtMs: this.apiLastSuccessAtMs,
        error: this.apiError
      },
      relays,
      rooms,
      p2pError: this.p2pError,
      browserOnline: typeof navigator === "undefined" ? null : navigator.onLine,
      publisher: this.pinnedPublisherPubkeyHex,
      verified: verified2,
      publishedAtMs: this.envelope.published_at_ms,
      snapshotEpoch: this.envelope.snapshot_epoch,
      serviceWorkerVersion: this.serviceWorkerVersion
    };
  }
  static isValidSchoolTeam(teamId, teamName = "") {
    const cleanId = (teamId || "").trim();
    const cleanName = (teamName || cleanId).trim();
    if (!cleanId || !cleanName) return false;
    const forbidden = /* @__PURE__ */ new Set(["RED", "GREEN", "GRN", "TBD", "BYE", "NONE", "UNKNOWN"]);
    if (forbidden.has(cleanId.toUpperCase()) || forbidden.has(cleanName.toUpperCase())) {
      return false;
    }
    return true;
  }
  toggleFollowAthlete(athleteId) {
    if (this.watchedAthleteIds.has(athleteId)) {
      this.watchedAthleteIds.delete(athleteId);
    } else {
      this.watchedAthleteIds.add(athleteId);
    }
    this.saveWatchlist();
    void this.syncActiveSubscriptionWatchlist();
    this.onUpdateCallback?.();
    return this.watchedAthleteIds.has(athleteId);
  }
  isFollowingTeam(teamId) {
    if (!PlayersSyncCoordinator.isValidSchoolTeam(teamId)) return false;
    const teamAthletes = this.publicView().athletes.filter(
      (a2) => a2.team_id === teamId && PlayersSyncCoordinator.isValidSchoolTeam(a2.team_id, a2.team_name)
    );
    return teamAthletes.length > 0 && teamAthletes.every((a2) => this.watchedAthleteIds.has(a2.athlete_id));
  }
  followTeam(teamId) {
    if (!PlayersSyncCoordinator.isValidSchoolTeam(teamId)) return;
    for (const a2 of this.publicView().athletes) {
      if (a2.team_id === teamId && PlayersSyncCoordinator.isValidSchoolTeam(a2.team_id, a2.team_name)) {
        this.watchedAthleteIds.add(a2.athlete_id);
      }
    }
    this.saveWatchlist();
    void this.syncActiveSubscriptionWatchlist();
    this.onUpdateCallback?.();
  }
  unfollowTeam(teamId) {
    for (const a2 of this.publicView().athletes) {
      if (a2.team_id === teamId) {
        this.watchedAthleteIds.delete(a2.athlete_id);
      }
    }
    this.saveWatchlist();
    void this.syncActiveSubscriptionWatchlist();
    this.onUpdateCallback?.();
  }
  toggleFollowTeam(teamId) {
    if (!PlayersSyncCoordinator.isValidSchoolTeam(teamId)) return false;
    if (this.isFollowingTeam(teamId)) {
      this.unfollowTeam(teamId);
      return false;
    }
    this.followTeam(teamId);
    return true;
  }
  clearWatchedAthletes() {
    this.watchedAthleteIds.clear();
    this.saveWatchlist();
    void this.syncActiveSubscriptionWatchlist();
    this.onUpdateCallback?.();
  }
  async castOwVote(athleteId) {
    if (this.votePending || !this.pinnedPublisherPubkeyHex || !this.getAthlete(athleteId)) return false;
    this.votePending = true;
    this.owVoteStatusMessage = "Submitting vote to tournament officials…";
    this.onUpdateCallback?.();
    try {
      if (!this.voterId) {
        const key = `openmat_ow_voter_${this.envelope.tournament_id}`;
        this.voterId = (typeof localStorage !== "undefined" ? localStorage.getItem(key) : null) ?? randomUuid();
        if (typeof localStorage !== "undefined") localStorage.setItem(key, this.voterId);
      }
      const votePayload = { tournamentId: this.envelope.tournament_id, voterId: this.voterId, athleteId };
      let delivery = this.p2pDelivery();
      let reply = null;
      if (this.isP2pConnected()) {
        try {
          const bytes = await this.requestViaP2p("ow-vote", new TextEncoder().encode(JSON.stringify(votePayload)));
          reply = JSON.parse(new TextDecoder().decode(bytes));
        } catch (error) {
          this.p2pError = String(error);
          if (this.isP2pConnected()) {
            throw error;
          }
        }
      }
      if (!reply && !this.isP2pConnected()) {
        delivery = { kind: "HTTP_POLL", endpoint: this.officialsOrigin };
        const response = await fetch(`${this.officialsOrigin}/api/openmat-ow-vote`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(votePayload)
        });
        reply = await response.json();
        if (!response.ok && reply) reply.ok = false;
      }
      if (!reply?.ok || !reply.envelope || !this.ingestSignedEnvelope(reply.envelope, "LIVE_OFFICIALS_STREAM", delivery)) {
        throw new Error(String(reply?.error ?? reply?.result ?? "Vote acknowledgement rejected"));
      }
      this.owVotedAthleteId = athleteId;
      if (typeof localStorage !== "undefined") localStorage.setItem(OW_VOTE_STORAGE_KEY, athleteId);
      this.owVoteStatusMessage = "Vote confirmed by tournament officials.";
      return true;
    } catch (error) {
      this.owVoteStatusMessage = `Vote not confirmed: ${error instanceof Error ? error.message : String(error)}. Retry when connected.`;
      return false;
    } finally {
      this.votePending = false;
      this.onUpdateCallback?.();
    }
  }
  async submitScorekeeperEvent(wireBytes) {
    let delivery = this.p2pDelivery();
    let reply = null;
    if (this.isP2pConnected()) {
      try {
        const bytes = await this.requestViaP2p("scorekeeper-event", new Uint8Array(wireBytes));
        reply = JSON.parse(new TextDecoder().decode(bytes));
      } catch (error) {
        this.p2pError = String(error);
        if (this.isP2pConnected()) {
          throw error;
        }
      }
    }
    if (!reply && !this.isP2pConnected()) {
      delivery = { kind: "HTTP_POLL", endpoint: this.officialsOrigin };
      const response = await fetch(`${this.officialsOrigin}/api/openmat-scorekeeper-event`, {
        method: "POST",
        headers: { "Content-Type": "application/cbor" },
        body: new Uint8Array(wireBytes)
      });
      reply = await response.json();
      if (!response.ok && reply) reply.ok = false;
    }
    if (!reply?.ok || !reply.envelope || !this.ingestSignedEnvelope(reply.envelope, "LIVE_OFFICIALS_STREAM", delivery)) {
      throw new Error(String(reply?.error ?? reply?.result ?? "Scorekeeper acknowledgement rejected"));
    }
    return reply.result.eventIdHex;
  }
  getAthlete(athleteId) {
    return this.publicView().athletes.find((a2) => a2.athlete_id === athleteId);
  }
  computeWatchedAthleteNotifications() {
    const out = [];
    const activeBouts = this.publicView().bouts.filter(
      (b2) => b2.lifecycle === BoutLifecycle.InProgress || b2.lifecycle === BoutLifecycle.Ready || b2.lifecycle === BoutLifecycle.Assigned
    );
    for (const bout of activeBouts) {
      for (const corner of ["RED", "GREEN"]) {
        const athleteId = corner === "RED" ? bout.red_athlete_id : bout.green_athlete_id;
        if (!athleteId || !this.watchedAthleteIds.has(athleteId)) continue;
        const athlete = this.getAthlete(athleteId);
        if (!athlete) continue;
        const oppId = corner === "RED" ? bout.green_athlete_id : bout.red_athlete_id;
        const opp = this.getAthlete(oppId);
        let urgency = "IN_THE_HOLE";
        let headline = "";
        let estMins = 12;
        if (bout.lifecycle === BoutLifecycle.InProgress) {
          urgency = "IN_PROGRESS";
          headline = `MAT ${bout.assigned_mat_id} ACTIVE — BOUT #${bout.bout_number}`;
          estMins = 0;
        } else if (bout.mat_queue_order === 2) {
          urgency = "ON_DECK";
          headline = `ON DECK MAT ${bout.assigned_mat_id} — BOUT #${bout.bout_number} (~6 MIN)`;
          estMins = 6;
        } else if (bout.mat_queue_order >= 3) {
          urgency = "IN_THE_HOLE";
          headline = `IN THE HOLE MAT ${bout.assigned_mat_id} — BOUT #${bout.bout_number} (~12 MIN)`;
          estMins = 12;
        } else if (bout.lifecycle === BoutLifecycle.Ready || bout.mat_queue_order === 1) {
          urgency = "READY_UP_NEXT";
          headline = `REPORT TO MAT ${bout.assigned_mat_id} — BOUT #${bout.bout_number} UP NEXT`;
          estMins = 2;
        } else {
          urgency = "IN_THE_HOLE";
          headline = `IN THE HOLE MAT ${bout.assigned_mat_id} — BOUT #${bout.bout_number} (~12 MIN)`;
          estMins = 12;
        }
        out.push({
          id: `${bout.match_id}:${athleteId}`,
          athleteId,
          athleteName: athlete.public_display_name,
          teamName: athlete.team_name,
          weightClassId: bout.weight_class_id,
          boutNumber: bout.bout_number,
          matId: bout.assigned_mat_id,
          corner,
          opponentName: opp?.public_display_name ?? (oppId || "TBD"),
          opponentTeam: opp?.team_name ?? "",
          urgency,
          headline,
          detail: `${athlete.public_display_name} (${corner} Corner) vs ${opp?.public_display_name ?? "TBD"} · ${bout.weight_class_id} lbs ${bout.round_label}`,
          estimatedMinutes: estMins,
          MatAndUrgencyKey: `${bout.assigned_mat_id}:${urgency}`
        });
      }
    }
    const order = {
      READY_UP_NEXT: 0,
      IN_PROGRESS: 1,
      ON_DECK: 2,
      IN_THE_HOLE: 3
    };
    const sorted = out.sort(
      (a2, b2) => order[a2.urgency] - order[b2.urgency] || a2.boutNumber - b2.boutNumber
    );
    const seenAthletes = /* @__PURE__ */ new Set();
    return sorted.filter((n3) => {
      if (seenAthletes.has(n3.athleteId)) return false;
      seenAthletes.add(n3.athleteId);
      return true;
    });
  }
  findAthleteNextOrActiveBout(athleteId) {
    const bouts = this.publicView().bouts.filter(
      (b2) => (b2.red_athlete_id === athleteId || b2.green_athlete_id === athleteId) && b2.lifecycle !== BoutLifecycle.EndedLocal && b2.lifecycle !== BoutLifecycle.LocallyConfirmed && b2.lifecycle !== BoutLifecycle.ResultAccepted
    ).sort((a2, b2) => a2.mat_queue_order - b2.mat_queue_order || a2.bout_number - b2.bout_number);
    return bouts[0];
  }
  findAthleteCompletedBouts(athleteId) {
    return this.publicView().bouts.filter(
      (b2) => (b2.red_athlete_id === athleteId || b2.green_athlete_id === athleteId) && (b2.lifecycle === BoutLifecycle.EndedLocal || b2.lifecycle === BoutLifecycle.LocallyConfirmed || b2.lifecycle === BoutLifecycle.ResultAccepted)
    );
  }
  recordCurrentUrgencies() {
    for (const n3 of this.computeWatchedAthleteNotifications()) {
      this.previousUrgencyByAthlete.set(n3.athleteId, `${n3.boutNumber}:${n3.MatAndUrgencyKey}`);
    }
  }
  async toggleCellularWebPush() {
    if (this.webPushState === "SUBSCRIBED_CELLULAR") {
      await this.unsubscribeCellularWebPush();
      return this.webPushState;
    }
    return this.subscribeCellularWebPush();
  }
  async subscribeCellularWebPush() {
    if (typeof window === "undefined" || !("serviceWorker" in navigator) || !("PushManager" in window) || typeof Notification === "undefined") {
      this.webPushState = "UNSUPPORTED_OR_REQUIRES_PWA";
      this.webPushStatusMessage = "Cellular Web Push requires installing OpenMat to your Home Screen (iOS 16.4+ PWA) or a Push-capable browser.";
      this.onUpdateCallback?.();
      return this.webPushState;
    }
    this.webPushState = "SUBSCRIBING";
    this.webPushStatusMessage = "Requesting W3C Web Push permission & VAPID key...";
    this.onUpdateCallback?.();
    const permission = Notification.permission === "granted" ? "granted" : await Notification.requestPermission();
    if (permission !== "granted") {
      this.webPushState = "PERMISSION_DENIED";
      this.webPushStatusMessage = "OS Push Notification permission denied. Enable notifications in browser/OS settings.";
      this.onUpdateCallback?.();
      return this.webPushState;
    }
    try {
      if (!this.vapidPublicKeyBase64Url) {
        const keyRes = await fetch(
          `${this.officialsOrigin}/api/openmat-webpush/vapid-public-key`
        );
        if (keyRes.ok) {
          const data = await keyRes.json();
          if (data.publicKeyBase64Url) {
            this.vapidPublicKeyBase64Url = data.publicKeyBase64Url;
          }
        }
      }
      const swScript = true ? "./offline.js" : "./sw.js";
      const registration = await navigator.serviceWorker.getRegistration() ?? await navigator.serviceWorker.register(swScript);
      await navigator.serviceWorker.ready;
      let pushSub = await registration.pushManager.getSubscription();
      if (this.vapidPublicKeyBase64Url) {
        const appServerKey = fromBase64Url(this.vapidPublicKeyBase64Url);
        if (pushSub && pushSub.options?.applicationServerKey) {
          const existingKey = new Uint8Array(pushSub.options.applicationServerKey);
          const sameKey = existingKey.byteLength === appServerKey.byteLength && existingKey.every((b2, idx) => b2 === appServerKey[idx]);
          if (!sameKey) {
            await pushSub.unsubscribe();
            pushSub = null;
          }
        }
        if (!pushSub) {
          pushSub = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: appServerKey.buffer.slice(
              appServerKey.byteOffset,
              appServerKey.byteOffset + appServerKey.byteLength
            )
          });
        }
      }
      if (pushSub) {
        const subJson = pushSub.toJSON();
        const p256dhKey = pushSub.getKey("p256dh");
        const authKey = pushSub.getKey("auth");
        this.activePushSubscription = {
          endpoint: pushSub.endpoint,
          expirationTime: pushSub.expirationTime,
          keys: {
            p256dh: subJson.keys?.p256dh ?? (p256dhKey ? toBase64Url(new Uint8Array(p256dhKey)) : ""),
            auth: subJson.keys?.auth ?? (authKey ? toBase64Url(new Uint8Array(authKey)) : "")
          }
        };
        await this.syncActiveSubscriptionWatchlist();
      }
      if (!this.activePushSubscription) throw new Error("No Push subscription was created");
      this.webPushState = "SUBSCRIBED_CELLULAR";
      this.webPushStatusMessage = this.activePushSubscription ? `Subscribed to Cellular W3C Web Push (VAPID P-256 · ${this.watchedAthleteIds.size} wrestlers)` : `OS Service Worker Push active (${this.watchedAthleteIds.size} wrestlers)`;
      this.onUpdateCallback?.();
      return this.webPushState;
    } catch (err) {
      this.webPushState = "UNSUPPORTED_OR_REQUIRES_PWA";
      this.webPushStatusMessage = `Web Push subscription error: ${err instanceof Error ? err.message : String(err)}`;
      this.onUpdateCallback?.();
      return this.webPushState;
    }
  }
  async unsubscribeCellularWebPush() {
    try {
      if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
        const reg = await navigator.serviceWorker.getRegistration();
        const sub = await reg?.pushManager.getSubscription();
        if (sub) {
          const endpoint = sub.endpoint;
          await sub.unsubscribe();
          await fetch(`${this.officialsOrigin}/api/openmat-webpush/unsubscribe`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ endpoint })
          }).catch(() => {
          });
        }
      }
    } catch {
    }
    this.activePushSubscription = null;
    this.webPushState = "UNSUBSCRIBED";
    this.webPushStatusMessage = "Cellular Web Push notifications disabled.";
    this.onUpdateCallback?.();
  }
  async restoreExistingWebPushSubscription() {
    if (typeof window === "undefined" || !("serviceWorker" in navigator) || !("PushManager" in window)) {
      return;
    }
    try {
      const reg = await navigator.serviceWorker.getRegistration();
      const sub = await reg?.pushManager.getSubscription();
      if (sub && typeof Notification !== "undefined" && Notification.permission === "granted") {
        await this.subscribeCellularWebPush();
      }
    } catch {
    }
  }
  async syncActiveSubscriptionWatchlist() {
    if (!this.activePushSubscription) return;
    try {
      await fetch(`${this.officialsOrigin}/api/openmat-webpush/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subscription: this.activePushSubscription,
          watchedAthleteIds: Array.from(this.watchedAthleteIds)
        })
      });
    } catch {
    }
  }
  async dispatchServiceWorkerPushNotification(notif) {
    if (this.webPushState !== "SUBSCRIBED_CELLULAR") return;
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
    try {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg && typeof reg.showNotification === "function") {
        await reg.showNotification(notif.headline, {
          body: notif.detail,
          tag: `openmat-call-${notif.athleteId}`,
          requireInteraction: notif.urgency === "READY_UP_NEXT" || notif.urgency === "ON_DECK",
          data: {
            matId: notif.matId,
            boutNumber: notif.boutNumber,
            athleteId: notif.athleteId,
            urgency: notif.urgency
          }
        });
      }
    } catch {
    }
  }
  loadWatchlist() {
    if (typeof localStorage !== "undefined") {
      try {
        const raw = localStorage.getItem(WATCHLIST_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const validIds = parsed.filter(
              (id) => typeof id === "string" && !/^mat-(?:[1-9]|1[0-9]|20)-(?:q[23]-)?(?:red|green)$/i.test(id)
            );
            this.watchedAthleteIds = new Set(validIds);
          }
        }
        const voted = localStorage.getItem(OW_VOTE_STORAGE_KEY);
        if (voted) this.owVotedAthleteId = voted;
      } catch {
      }
    }
  }
  saveWatchlist() {
    if (typeof localStorage === "undefined") return;
    try {
      localStorage.setItem(WATCHLIST_STORAGE_KEY, JSON.stringify(Array.from(this.watchedAthleteIds)));
    } catch {
    }
  }
}
function formatMatchClockMs(msRemaining) {
  const secondsRemaining = Math.max(0, Math.ceil(msRemaining / 1e3));
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
class MatBoutClockTracker {
  anchors = /* @__PURE__ */ new Map();
  computeScorekeeperSignature(bout) {
    return [
      bout.lifecycle,
      bout.period_number,
      Math.max(0, Math.trunc(bout.clock_remaining_ms)),
      bout.clock_running ? 1 : 0,
      bout.red_score,
      bout.green_score,
      bout.authority_epoch,
      bout.assignment_revision,
      bout.winner_athlete_id ?? "",
      bout.win_type ?? ""
    ].join("|");
  }
  isBoutEnded(lifecycle) {
    return lifecycle === BoutLifecycle.EndedLocal || lifecycle === BoutLifecycle.LocallyConfirmed || lifecycle === BoutLifecycle.ResultAccepted;
  }
  syncBout(bout, nowMs = Date.now(), forceResync = false) {
    const signature = this.computeScorekeeperSignature(bout);
    const existing = this.anchors.get(bout.match_id);
    const running = (bout.lifecycle === BoutLifecycle.InProgress || bout.lifecycle === BoutLifecycle.Ready) && Boolean(bout.clock_running);
    const sanitizedRemainingMs = Math.max(0, Math.trunc(bout.clock_remaining_ms));
    if (!existing) {
      const created = {
        matchId: bout.match_id,
        anchorRemainingMs: sanitizedRemainingMs,
        anchorSyncedAtMs: nowMs,
        clockRunning: running,
        resyncCount: 1,
        lastScorekeeperSignature: signature
      };
      this.anchors.set(bout.match_id, created);
      return created;
    }
    if (forceResync || existing.lastScorekeeperSignature !== signature) {
      existing.anchorRemainingMs = sanitizedRemainingMs;
      existing.anchorSyncedAtMs = nowMs;
      existing.clockRunning = running;
      existing.resyncCount += 1;
      existing.lastScorekeeperSignature = signature;
    }
    return existing;
  }
  resyncBout(bout, nowMs = Date.now()) {
    this.syncBout(bout, nowMs, true);
    return this.getClockView(bout, nowMs);
  }
  syncBouts(bouts, nowMs = Date.now()) {
    const activeIds = /* @__PURE__ */ new Set();
    for (const bout of bouts) {
      activeIds.add(bout.match_id);
      this.syncBout(bout, nowMs);
    }
    for (const matchId of this.anchors.keys()) {
      if (!activeIds.has(matchId)) {
        this.anchors.delete(matchId);
      }
    }
  }
  getClockView(bout, nowMs = Date.now()) {
    const anchor = this.syncBout(bout, nowMs);
    const elapsedMs = anchor.clockRunning ? Math.max(0, nowMs - anchor.anchorSyncedAtMs) : 0;
    const displayedRemainingMs = anchor.clockRunning ? Math.max(0, anchor.anchorRemainingMs - elapsedMs) : Math.max(0, anchor.anchorRemainingMs);
    let state;
    let stateLabel;
    if (this.isBoutEnded(bout.lifecycle)) {
      state = "ENDED";
      stateLabel = "FINAL";
    } else if (bout.lifecycle === BoutLifecycle.InProgress && displayedRemainingMs === 0) {
      state = "EXPIRED";
      stateLabel = "0:00";
    } else if (anchor.clockRunning && displayedRemainingMs > 0) {
      state = "RUNNING";
      stateLabel = "RUNNING";
    } else {
      state = "STOPPED";
      stateLabel = "STOPPED";
    }
    return {
      matchId: bout.match_id,
      state,
      stateLabel,
      countingDown: state === "RUNNING",
      displayedRemainingMs,
      formattedClock: formatMatchClockMs(displayedRemainingMs),
      anchorRemainingMs: anchor.anchorRemainingMs,
      anchorSyncedAtMs: anchor.anchorSyncedAtMs,
      resyncCount: anchor.resyncCount
    };
  }
}
class OpenMatPlayersApp extends i {
  static properties = {
    status: { state: true },
    error: { state: true },
    bouts: { state: true },
    athletes: { state: true },
    activeTab: { state: true },
    selectedMatFilter: { state: true },
    searchQuery: { state: true },
    selectedTeamFilter: { state: true },
    selectedDivisionFilter: { state: true },
    selectedWeightFilter: { state: true },
    selectedBracketDivision: { state: true },
    selectedBracketWeight: { state: true },
    selectedBracketView: { state: true },
    selectedProfileAthleteId: { state: true },
    previousTabBeforeProfile: { state: true },
    bracketPanX: { state: true },
    bracketPanY: { state: true },
    bracketScale: { state: true },
    highlightedMatchId: { state: true },
    qrScanInput: { state: true },
    qrScanStatus: { state: true },
    copyLinkStatus: { state: true },
    colorScheme: { state: true },
    nowEpochMs: { state: true },
    syncTick: { state: true },
    connectionPanelOpen: { state: true },
    connectionCopyStatus: { state: true }
  };
  database = new LocalDatabaseCoordinator();
  clockTracker = new MatBoutClockTracker();
  sync = new PlayersSyncCoordinator(() => {
    if (this.clockInterval !== null) {
      this.nowEpochMs = Date.now();
    }
    this.clockTracker.syncBouts(this.sync.publicView().bouts, this.nowEpochMs);
    this.syncTick++;
    this.autoSelectPopulatedBracketWeight();
    this.requestUpdate();
  });
  clockInterval = null;
  activePointers = /* @__PURE__ */ new Map();
  isPanningBracket = false;
  bracketPointerMoved = false;
  panStartClientX = 0;
  panStartClientY = 0;
  panOriginX = 0;
  panOriginY = 0;
  pinchStartDistance = 0;
  pinchStartScale = 1;
  pinchCenterX = 0;
  pinchCenterY = 0;
  constructor() {
    super();
    this.error = "";
    this.bouts = [];
    this.athletes = [];
    this.activeTab = "my-wrestlers";
    this.selectedMatFilter = "ALL";
    this.searchQuery = "";
    this.selectedTeamFilter = "ALL";
    this.selectedDivisionFilter = "ALL";
    this.selectedWeightFilter = "ALL";
    this.selectedBracketDivision = "ALL";
    this.selectedBracketWeight = "132";
    this.selectedBracketView = "ALL";
    this.selectedProfileAthleteId = "";
    this.previousTabBeforeProfile = "my-wrestlers";
    this.bracketPanX = 16;
    this.bracketPanY = 12;
    this.bracketScale = 1;
    this.highlightedMatchId = "";
    this.qrScanInput = this.sync.defaultJoinQrUri || this.sync.pinnedPublisherPubkeyHex;
    this.qrScanStatus = "";
    this.copyLinkStatus = "";
    this.colorScheme = this.readCurrentColorScheme();
    this.nowEpochMs = Date.now();
    this.syncTick = 0;
    this.connectionPanelOpen = false;
    this.connectionCopyStatus = "";
    this.clockTracker.syncBouts(this.sync.publicView().bouts, this.nowEpochMs);
    this.autoSelectPopulatedBracketWeight();
  }
  createRenderRoot() {
    return this;
  }
  readCurrentColorScheme() {
    if (typeof document !== "undefined") {
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta?.getAttribute("content") === "dark") {
        return "dark";
      }
    }
    if (typeof localStorage !== "undefined") {
      try {
        if (localStorage.getItem("color-scheme") === "dark") {
          return "dark";
        }
      } catch {
      }
    }
    return "light";
  }
  applyColorScheme(scheme) {
    this.colorScheme = scheme;
    if (typeof document !== "undefined") {
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.setAttribute("content", scheme);
      const themeMeta = document.querySelector('meta[name="theme-color"]');
      if (themeMeta) themeMeta.setAttribute("content", scheme === "dark" ? "#0b0f17" : "#f8fafc");
    }
    if (typeof localStorage !== "undefined") {
      try {
        localStorage.setItem("color-scheme", scheme);
      } catch {
      }
    }
  }
  toggleColorScheme() {
    this.applyColorScheme(this.colorScheme === "light" ? "dark" : "light");
  }
  onStorageEvent = (event) => {
    if (event.key === "color-scheme") {
      this.applyColorScheme(event.newValue === "dark" ? "dark" : "light");
    }
  };
  onPopState = () => {
    if (typeof window === "undefined") return;
    const searchParams = new URLSearchParams(window.location.search);
    const wrestlerParam = (searchParams.get("wrestler") || searchParams.get("athlete") || "").trim();
    if (wrestlerParam) {
      this.selectedProfileAthleteId = wrestlerParam;
      this.activeTab = "wrestler-profile";
    } else if (this.activeTab === "wrestler-profile") {
      this.activeTab = this.previousTabBeforeProfile || "my-wrestlers";
    }
  };
  openWrestlerProfile(athleteId, pushHistory = true) {
    const cleanId = (athleteId || "").trim();
    if (!cleanId) return;
    if (this.activeTab !== "wrestler-profile") {
      this.previousTabBeforeProfile = this.activeTab;
    }
    this.selectedProfileAthleteId = cleanId;
    this.activeTab = "wrestler-profile";
    if (pushHistory && typeof window !== "undefined" && window.history?.pushState) {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("wrestler", cleanId);
        window.history.pushState({ athleteId: cleanId, tab: "wrestler-profile" }, "", url.toString());
      } catch {
      }
    }
  }
  closeWrestlerProfile() {
    this.activeTab = this.previousTabBeforeProfile || "my-wrestlers";
    if (typeof window !== "undefined" && window.history?.replaceState) {
      try {
        const url = new URL(window.location.href);
        if (url.searchParams.has("wrestler") || url.searchParams.has("athlete")) {
          url.searchParams.delete("wrestler");
          url.searchParams.delete("athlete");
          window.history.replaceState({}, "", url.toString());
        }
      } catch {
      }
    }
  }
  jumpToBracketNode(bout) {
    this.selectedBracketWeight = bout.weight_class_id;
    this.selectedBracketDivision = bout.division_id || "ALL";
    this.selectedBracketView = "ALL";
    void this.sync.watchBracket(bout.bracket_id);
    this.highlightedMatchId = bout.match_id;
    this.activeTab = "brackets";
    this.updateComplete.then(() => {
      this.centerBracketOnMatchId(bout.match_id);
    });
  }
  onServiceWorkerMessage = (event) => {
    const data = event.data;
    if (data?.type === "OPENMAT_PUSH_JUMP_MAT" && Number(data.matId) > 0) {
      this.jumpToMat(Number(data.matId));
    }
  };
  onKeyDown = (event) => {
    if (!event.shiftKey && (event.key === "F5" || (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "r") && this.sync.pinnedPublisherPubkeyHex) {
      event.preventDefault();
      void this.sync.refreshViaP2p();
    }
  };
  connectedCallback() {
    super.connectedCallback();
    if (typeof window !== "undefined") {
      this.applyColorScheme(this.readCurrentColorScheme());
      window.addEventListener("keydown", this.onKeyDown);
      window.addEventListener("storage", this.onStorageEvent);
      window.addEventListener("popstate", this.onPopState);
      if (window.location.search || window.location.hash) {
        const res = this.sync.applyScannedTournamentJoinQr(window.location.href);
        if (res.valid) {
          this.qrScanInput = this.sync.defaultJoinQrUri || this.sync.pinnedPublisherPubkeyHex;
          this.qrScanStatus = res.reason;
        }
      }
      const searchParams = new URLSearchParams(window.location.search);
      const matParam = Number(searchParams.get("mat"));
      if (matParam >= 1 && matParam <= 20) {
        this.jumpToMat(matParam);
      }
      const wrestlerParam = (searchParams.get("wrestler") || searchParams.get("athlete") || "").trim();
      if (wrestlerParam) {
        this.selectedProfileAthleteId = wrestlerParam;
        this.activeTab = "wrestler-profile";
      }
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.addEventListener("message", this.onServiceWorkerMessage);
      }
    }
    this.sync.startLiveSync();
    void this.refresh();
    this.clockInterval = setInterval(() => {
      this.nowEpochMs = Date.now();
    }, 250);
  }
  disconnectedCallback() {
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", this.onKeyDown);
      window.removeEventListener("storage", this.onStorageEvent);
      window.removeEventListener("popstate", this.onPopState);
    }
    this.sync.stopLiveSync();
    this.database.close();
    if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.removeEventListener("message", this.onServiceWorkerMessage);
    }
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
    super.disconnectedCallback();
  }
  availableDivisions() {
    const env = this.sync.publicView();
    const set = /* @__PURE__ */ new Set();
    for (const a2 of env.athletes) {
      const div = (a2.division_id || "VARSITY").trim().toUpperCase();
      if (div) set.add(div);
    }
    for (const b2 of env.bouts) {
      const div = (b2.division_id || "").trim().toUpperCase();
      if (div) set.add(div);
    }
    return Array.from(set);
  }
  hasMultipleOrNonDefaultDivisions() {
    const divs = this.availableDivisions();
    return divs.length > 1 || divs.length === 1 && divs[0] !== "VARSITY";
  }
  formatDivisionWeightLabel(weightClassId, divisionId) {
    const div = (divisionId || "").trim().toUpperCase();
    if (div && (div !== "VARSITY" || this.hasMultipleOrNonDefaultDivisions())) {
      return `${div} ${weightClassId} lbs`;
    }
    return `${weightClassId} lbs`;
  }
  autoSelectPopulatedBracketWeight() {
    const bouts = this.sync.publicView().bouts;
    if (bouts.length === 0) return;
    const hasCurrent = bouts.some((b2) => b2.weight_class_id === this.selectedBracketWeight);
    if (!hasCurrent) {
      const firstWc = bouts[0]?.weight_class_id;
      if (firstWc) {
        this.selectedBracketWeight = firstWc;
      }
    }
  }
  async refresh() {
    try {
      this.status = await this.database.connect();
      this.bouts = await this.database.query("bouts");
      this.athletes = await this.database.query("athletes");
      this.error = "";
    } catch (error) {
      this.error = String(error);
    }
  }
  getBoutClockView(bout, nowMs = this.nowEpochMs) {
    return this.clockTracker.getClockView(bout, nowMs);
  }
  getAthleteStatusText(athlete) {
    if (athlete.check_in_stage === CheckInStage.Withdrawn || athlete.check_in_stage === CheckInStage.Scratched) {
      return "WITHDRAWN";
    }
    if (typeof athlete.check_in_stage === "number" && athlete.check_in_stage > 0 && athlete.check_in_stage < CheckInStage.Eligible) {
      return "CHECK-IN PENDING";
    }
    return "CLEARED · AWAITING BOUT";
  }
  formatRestCountdown(lastMatchEndMs) {
    if (!lastMatchEndMs || lastMatchEndMs <= 0) {
      return { ready: true, label: "Rest complete" };
    }
    const elapsedMs = Math.max(0, this.nowEpochMs - lastMatchEndMs);
    const requiredMs = 30 * 60 * 1e3;
    if (elapsedMs >= requiredMs) {
      return { ready: true, label: "Rest complete (30m)" };
    }
    const remSec = Math.ceil((requiredMs - elapsedMs) / 1e3);
    const mins = Math.floor(remSec / 60);
    const secs = remSec % 60;
    return {
      ready: false,
      label: `Rest remaining: ${mins}m ${secs.toString().padStart(2, "0")}s`
    };
  }
  async toggleCellularWebPush() {
    await this.sync.toggleCellularWebPush();
    this.requestUpdate();
  }
  jumpToMat(matId) {
    this.selectedMatFilter = matId;
    this.activeTab = "mats";
  }
  getUrgencyRank(athleteId) {
    const b2 = this.sync.findAthleteNextOrActiveBout(athleteId);
    if (!b2) return 99;
    if (b2.lifecycle === BoutLifecycle.Ready || b2.mat_queue_order === 1) return 1;
    if (b2.lifecycle === BoutLifecycle.InProgress) return 2;
    if (b2.mat_queue_order === 2) return 3;
    if (b2.assigned_mat_id > 0) return 4;
    return 10;
  }
  isBoutCompleted(bout) {
    return bout.lifecycle === BoutLifecycle.EndedLocal || bout.lifecycle === BoutLifecycle.LocallyConfirmed || bout.lifecycle === BoutLifecycle.ResultAccepted;
  }
  computeSchoolTeams() {
    const env = this.sync.publicView();
    const byTeam = /* @__PURE__ */ new Map();
    for (const a2 of env.athletes) {
      if (!PlayersSyncCoordinator.isValidSchoolTeam(a2.team_id, a2.team_name)) continue;
      let summary = byTeam.get(a2.team_id);
      if (!summary) {
        summary = {
          teamId: a2.team_id,
          teamName: a2.team_name || a2.team_id,
          totalWrestlers: 0,
          followedWrestlers: 0,
          isFollowingAll: false,
          activeOnMatCount: 0
        };
        byTeam.set(a2.team_id, summary);
      }
      summary.totalWrestlers += 1;
      if (this.sync.watchedAthleteIds.has(a2.athlete_id)) {
        summary.followedWrestlers += 1;
      }
      const nextBout = this.sync.findAthleteNextOrActiveBout(a2.athlete_id);
      if (nextBout && nextBout.assigned_mat_id > 0) {
        summary.activeOnMatCount += 1;
      }
    }
    for (const summary of byTeam.values()) {
      summary.isFollowingAll = summary.totalWrestlers > 0 && summary.followedWrestlers === summary.totalWrestlers;
    }
    return Array.from(byTeam.values()).sort((a2, b2) => a2.teamName.localeCompare(b2.teamName));
  }
  computeEffectiveStandings() {
    const env = this.sync.publicView();
    if (Array.isArray(env.standings) && env.standings.length > 0) {
      return env.standings.filter(
        (r2) => PlayersSyncCoordinator.isValidSchoolTeam(r2.team_id, r2.team_name)
      );
    }
    const map = /* @__PURE__ */ new Map();
    for (const a2 of env.athletes) {
      if (!PlayersSyncCoordinator.isValidSchoolTeam(a2.team_id, a2.team_name)) continue;
      if (!map.has(a2.team_id)) {
        map.set(a2.team_id, {
          rank: 0,
          team_id: a2.team_id,
          team_name: a2.team_name || a2.team_id,
          total_points: 0,
          advancement_points: 0,
          placement_points: 0,
          bonus_points: 0,
          falls_forfeits_dq: 0,
          tech_falls: 0,
          major_decisions: 0,
          first_place_winners: 0
        });
      }
    }
    for (const bout of env.bouts) {
      if (!this.isBoutCompleted(bout) || bout.is_bye) continue;
      const winnerId = bout.winner_athlete_id || (bout.red_score > bout.green_score ? bout.red_athlete_id : bout.green_score > bout.red_score ? bout.green_athlete_id : "");
      if (!winnerId) continue;
      const winner = this.sync.getAthlete(winnerId);
      if (!winner) continue;
      const row = map.get(winner.team_id);
      if (!row) continue;
      const adv = bout.is_consolation ? 1 : 2;
      row.advancement_points += adv;
      const wt = (bout.win_type || "").toUpperCase();
      let bonus = 0;
      if (wt === "FALL" || wt === "FORFEIT" || wt === "INJURY_DEFAULT" || wt === "DQ") {
        bonus = 2;
        row.falls_forfeits_dq += 1;
      } else if (wt === "TF" || wt === "TECHNICAL_FALL") {
        bonus = 1.5;
        row.tech_falls += 1;
      } else if (wt === "MD" || wt === "MAJOR_DECISION") {
        bonus = 1;
        row.major_decisions += 1;
      }
      row.bonus_points += bonus;
      row.total_points = row.advancement_points + row.placement_points + row.bonus_points;
    }
    const sorted = Array.from(map.values()).sort(
      (a2, b2) => b2.total_points - a2.total_points || b2.falls_forfeits_dq - a2.falls_forfeits_dq || b2.tech_falls - a2.tech_falls || b2.major_decisions - a2.major_decisions || a2.team_name.localeCompare(b2.team_name)
    );
    sorted.forEach((r2, idx) => {
      r2.rank = idx + 1;
    });
    return sorted;
  }
  computeBracketTreeLayout(weightBouts) {
    const NODE_WIDTH = 256;
    const NODE_HEIGHT = 84;
    const COL_GAP = 64;
    const COL_STRIDE = NODE_WIDTH + COL_GAP;
    const ROW_GAP = 20;
    const ROW_STRIDE = NODE_HEIGHT + ROW_GAP;
    const PAD_X = 24;
    const HEADER_H = 64;
    if (weightBouts.length === 0) {
      return {
        width: 640,
        height: 320,
        nodes: [],
        headers: [],
        banners: [],
        edges: []
      };
    }
    const sortedAll = [...weightBouts].sort((a2, b2) => a2.bout_number - b2.bout_number);
    const champBouts = sortedAll.filter((b2) => !b2.is_consolation && (!b2.is_placement_bout || b2.placement_rank === 1));
    const champIds = new Set(champBouts.map((b2) => b2.match_id));
    const consAndMedalBouts = sortedAll.filter((b2) => !champIds.has(b2.match_id));
    const nodes = [];
    const nodesById = /* @__PURE__ */ new Map();
    const headers = [];
    const banners = [];
    const edges = [];
    let maxRight = 640;
    let champMaxBottom = HEADER_H;
    if (champBouts.length > 0) {
      const topBannerTitle = champBouts[0]?.format === "BEST_OF_THREE" ? "Best of 3 Series" : champBouts[0]?.format === "ROUND_ROBIN_POOL" ? "Round Robin Pool" : "Championship";
      banners.push({ title: topBannerTitle, x: PAD_X, y: 4 });
      const champById = new Map(champBouts.map((b2) => [b2.match_id, b2]));
      const feedersByTarget = /* @__PURE__ */ new Map();
      let hasTreeLinks = false;
      for (const b2 of champBouts) {
        const nextId = b2.winner_next_match_id;
        if (nextId && champById.has(nextId)) {
          hasTreeLinks = true;
          const list = feedersByTarget.get(nextId) ?? [];
          list.push(b2);
          feedersByTarget.set(nextId, list);
        }
      }
      const colGroups = /* @__PURE__ */ new Map();
      const colTitles = /* @__PURE__ */ new Map();
      if (hasTreeLinks) {
        const distToRoot = /* @__PURE__ */ new Map();
        const computeDist = (id, visited = /* @__PURE__ */ new Set()) => {
          if (distToRoot.has(id)) return distToRoot.get(id);
          if (visited.has(id)) return 0;
          visited.add(id);
          const bout = champById.get(id);
          const nextId = bout?.winner_next_match_id;
          if (!nextId || !champById.has(nextId)) {
            distToRoot.set(id, 0);
            return 0;
          }
          const d2 = 1 + computeDist(nextId, visited);
          distToRoot.set(id, d2);
          return d2;
        };
        let maxDist = 0;
        for (const b2 of champBouts) {
          maxDist = Math.max(maxDist, computeDist(b2.match_id));
        }
        for (const b2 of champBouts) {
          const d2 = distToRoot.get(b2.match_id) ?? 0;
          const col = maxDist - d2;
          const list = colGroups.get(col) ?? [];
          list.push(b2);
          colGroups.set(col, list);
          if (!colTitles.has(col) && b2.round_label) {
            colTitles.set(col, b2.round_label);
          }
        }
      } else {
        const labelToCol = /* @__PURE__ */ new Map();
        for (const b2 of champBouts) {
          const label = (b2.round_label || "Championship").trim();
          if (!labelToCol.has(label)) {
            const idx = labelToCol.size;
            labelToCol.set(label, idx);
            colTitles.set(idx, label);
          }
          const col = labelToCol.get(label);
          const list = colGroups.get(col) ?? [];
          list.push(b2);
          colGroups.set(col, list);
        }
      }
      const sortedCols = Array.from(colGroups.keys()).sort((a2, b2) => a2 - b2);
      for (const col of sortedCols) {
        const colBouts = (colGroups.get(col) ?? []).sort((a2, b2) => a2.bout_number - b2.bout_number);
        const x2 = PAD_X + col * COL_STRIDE;
        headers.push({
          title: colTitles.get(col) || `Round ${col + 1}`,
          x: x2,
          y: 30,
          width: NODE_WIDTH
        });
        let minNextY = HEADER_H;
        for (let idx = 0; idx < colBouts.length; idx++) {
          const bout = colBouts[idx];
          const feeders = (feedersByTarget.get(bout.match_id) ?? []).map((f2) => nodesById.get(f2.match_id)).filter((n3) => Boolean(n3));
          let y3 = HEADER_H + idx * ROW_STRIDE;
          if (feeders.length > 0) {
            const avgY = feeders.reduce((sum, f2) => sum + f2.y, 0) / feeders.length;
            y3 = Math.round(avgY);
          }
          if (y3 < minNextY) {
            y3 = minNextY;
          }
          minNextY = y3 + ROW_STRIDE;
          const node = {
            bout,
            x: x2,
            y: y3,
            width: NODE_WIDTH,
            height: NODE_HEIGHT,
            section: "CHAMPIONSHIP"
          };
          nodes.push(node);
          nodesById.set(bout.match_id, node);
          maxRight = Math.max(maxRight, x2 + NODE_WIDTH + PAD_X);
          champMaxBottom = Math.max(champMaxBottom, y3 + NODE_HEIGHT);
        }
      }
    }
    if (consAndMedalBouts.length > 0) {
      const consStartY = champBouts.length > 0 ? champMaxBottom + 88 : HEADER_H;
      banners.push({
        title: "Consolation & Placement",
        x: PAD_X,
        y: consStartY - 60
      });
      const consById = new Map(
        consAndMedalBouts.map((b2) => [b2.match_id, b2])
      );
      const feedersByTarget = /* @__PURE__ */ new Map();
      for (const b2 of consAndMedalBouts) {
        const nextId = b2.winner_next_match_id;
        if (nextId && consById.has(nextId)) {
          const list = feedersByTarget.get(nextId) ?? [];
          list.push(b2);
          feedersByTarget.set(nextId, list);
        }
      }
      const labelToCol = /* @__PURE__ */ new Map();
      const colGroups = /* @__PURE__ */ new Map();
      const colTitles = /* @__PURE__ */ new Map();
      const consOnly = consAndMedalBouts.filter((b2) => !b2.is_placement_bout);
      const medalOnly = consAndMedalBouts.filter((b2) => b2.is_placement_bout);
      for (const b2 of consOnly) {
        const label = (b2.round_label || "Consolation").trim();
        if (!labelToCol.has(label)) {
          const idx = labelToCol.size;
          labelToCol.set(label, idx);
          colTitles.set(idx, label);
        }
        const col = labelToCol.get(label);
        const list = colGroups.get(col) ?? [];
        list.push(b2);
        colGroups.set(col, list);
      }
      if (medalOnly.length > 0) {
        const medalCol = labelToCol.size;
        colTitles.set(medalCol, "Placement / Medals");
        colGroups.set(medalCol, medalOnly);
      }
      const sortedConsCols = Array.from(colGroups.keys()).sort((a2, b2) => a2 - b2);
      for (const col of sortedConsCols) {
        const colBouts = (colGroups.get(col) ?? []).sort((a2, b2) => a2.bout_number - b2.bout_number);
        const x2 = PAD_X + col * COL_STRIDE;
        headers.push({
          title: colTitles.get(col) || `Consolation ${col + 1}`,
          x: x2,
          y: consStartY - 34,
          width: NODE_WIDTH
        });
        let minNextY = consStartY;
        for (let idx = 0; idx < colBouts.length; idx++) {
          const bout = colBouts[idx];
          const feeders = (feedersByTarget.get(bout.match_id) ?? []).map((f2) => nodesById.get(f2.match_id)).filter((n3) => Boolean(n3));
          let y3 = consStartY + idx * ROW_STRIDE;
          if (feeders.length > 0) {
            const avgY = feeders.reduce((sum, f2) => sum + f2.y, 0) / feeders.length;
            y3 = Math.round(avgY);
          }
          if (y3 < minNextY) {
            y3 = minNextY;
          }
          minNextY = y3 + ROW_STRIDE;
          const node = {
            bout,
            x: x2,
            y: y3,
            width: NODE_WIDTH,
            height: NODE_HEIGHT,
            section: bout.is_placement_bout ? "PLACEMENT" : "CONSOLATION"
          };
          nodes.push(node);
          nodesById.set(bout.match_id, node);
          maxRight = Math.max(maxRight, x2 + NODE_WIDTH + PAD_X);
          champMaxBottom = Math.max(champMaxBottom, y3 + NODE_HEIGHT);
        }
      }
    }
    for (const srcNode of nodes) {
      const nextId = srcNode.bout.winner_next_match_id;
      if (!nextId) continue;
      const dstNode = nodesById.get(nextId);
      if (!dstNode || dstNode.x <= srcNode.x) continue;
      const x1 = srcNode.x + srcNode.width;
      const y1 = srcNode.y + Math.round(srcNode.height / 2);
      const x2 = dstNode.x;
      const y22 = dstNode.y + Math.round(dstNode.height / 2);
      const midX = Math.round(x1 + (x2 - x1) * 0.5);
      const isWatchedPath = this.sync.watchedAthleteIds.has(srcNode.bout.red_athlete_id) || this.sync.watchedAthleteIds.has(srcNode.bout.green_athlete_id);
      edges.push({
        fromMatchId: srcNode.bout.match_id,
        toMatchId: dstNode.bout.match_id,
        d: `M ${x1} ${y1} H ${midX} V ${y22} H ${x2}`,
        isWatchedPath,
        isCompleted: this.isBoutCompleted(srcNode.bout)
      });
    }
    return {
      width: Math.max(640, maxRight),
      height: Math.max(320, champMaxBottom + 36),
      nodes,
      headers,
      banners,
      edges
    };
  }
  bracketFitScale() {
    const viewport = this.querySelector(".bracket-viewport");
    const stage = this.querySelector(".bracket-stage");
    if (!viewport || !stage || viewport.clientWidth <= 24 || viewport.clientHeight <= 72 || !stage.offsetWidth || !stage.offsetHeight) return 1;
    return Math.min(1, (viewport.clientWidth - 24) / stage.offsetWidth, (viewport.clientHeight - 72) / stage.offsetHeight);
  }
  zoomBracketAt(scale, x2, y3) {
    const oldScale = this.bracketScale;
    const nextScale = Math.min(2.2, Math.max(this.bracketFitScale() * 0.9, scale));
    if (nextScale === oldScale) return;
    const ratio = nextScale / oldScale;
    this.bracketPanX = x2 - (x2 - this.bracketPanX) * ratio;
    this.bracketPanY = y3 - (y3 - this.bracketPanY) * ratio;
    this.bracketScale = nextScale;
  }
  zoomBracketBy(step) {
    const viewport = this.querySelector(".bracket-viewport");
    if (!viewport) return;
    const factor = step >= 0 ? 1 + step : 1 / (1 - step);
    this.zoomBracketAt(this.bracketScale * factor, viewport.clientWidth / 2, viewport.clientHeight / 2);
  }
  fitBracketToViewport(layout) {
    const viewport = this.querySelector(".bracket-viewport");
    if (!viewport || layout.nodes.length === 0) {
      this.bracketPanX = 16;
      this.bracketPanY = 12;
      this.bracketScale = 1;
      return;
    }
    const rect = viewport.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
      this.bracketPanX = 16;
      this.bracketPanY = 12;
      this.bracketScale = 1;
      return;
    }
    const nextScale = this.bracketFitScale();
    this.bracketScale = nextScale;
    this.bracketPanX = Math.max(12, Math.round((rect.width - layout.width * nextScale) / 2));
    this.bracketPanY = 12;
  }
  centerBracketOnMatchId(matchId) {
    const target = [...this.querySelectorAll(".bracket-tree-node")].find((node) => node.dataset.matchId === matchId);
    if (!target) return;
    const viewport = this.querySelector(".bracket-viewport");
    const vw = viewport ? viewport.clientWidth || 720 : 720;
    const vh = viewport ? viewport.clientHeight || 460 : 460;
    const nodeCenterX = target.offsetLeft + target.offsetWidth / 2;
    const nodeCenterY = target.offsetTop + target.offsetHeight / 2;
    this.bracketPanX = Math.round(vw / 2 - nodeCenterX * this.bracketScale);
    this.bracketPanY = Math.round(vh / 2 - nodeCenterY * this.bracketScale);
  }
  centerBracketOnFollowedWrestler(weightBouts) {
    const followedBout = weightBouts.find(
      (b2) => !this.isBoutCompleted(b2) && (this.sync.watchedAthleteIds.has(b2.red_athlete_id) || this.sync.watchedAthleteIds.has(b2.green_athlete_id))
    ) ?? weightBouts.find(
      (b2) => this.sync.watchedAthleteIds.has(b2.red_athlete_id) || this.sync.watchedAthleteIds.has(b2.green_athlete_id)
    );
    if (!followedBout) return;
    this.highlightedMatchId = followedBout.match_id;
    this.centerBracketOnMatchId(followedBout.match_id);
  }
  handleBracketPointerDown = (e2) => {
    const targetEl = e2.target;
    if (targetEl?.closest("a, input, select")) {
      return;
    }
    this.activePointers.set(e2.pointerId, { x: e2.clientX, y: e2.clientY });
    if (this.activePointers.size === 1) {
      this.bracketPointerMoved = false;
      this.isPanningBracket = true;
      this.panStartClientX = e2.clientX;
      this.panStartClientY = e2.clientY;
      this.panOriginX = this.bracketPanX;
      this.panOriginY = this.bracketPanY;
    } else if (this.activePointers.size === 2) {
      const pts = Array.from(this.activePointers.values());
      this.pinchStartDistance = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      this.pinchStartScale = this.bracketScale;
      this.pinchCenterX = (pts[0].x + pts[1].x) / 2;
      this.pinchCenterY = (pts[0].y + pts[1].y) / 2;
    }
  };
  handleBracketPointerMove = (e2) => {
    if (!this.activePointers.has(e2.pointerId)) return;
    this.activePointers.set(e2.pointerId, { x: e2.clientX, y: e2.clientY });
    if (this.activePointers.size === 2 && this.pinchStartDistance > 10) {
      this.bracketPointerMoved = true;
      const pts = Array.from(this.activePointers.values());
      const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      const ratio = dist / this.pinchStartDistance;
      const cx = (pts[0].x + pts[1].x) / 2;
      const cy = (pts[0].y + pts[1].y) / 2;
      const rect = e2.currentTarget.getBoundingClientRect();
      this.bracketPanX += cx - this.pinchCenterX;
      this.bracketPanY += cy - this.pinchCenterY;
      this.zoomBracketAt(this.pinchStartScale * ratio, cx - rect.left, cy - rect.top);
      this.pinchCenterX = cx;
      this.pinchCenterY = cy;
      return;
    }
    if (this.activePointers.size === 1 && this.isPanningBracket) {
      const dx = e2.clientX - this.panStartClientX;
      const dy = e2.clientY - this.panStartClientY;
      if (!this.bracketPointerMoved && Math.hypot(dx, dy) < 5) return;
      this.bracketPointerMoved = true;
      const viewport = e2.currentTarget;
      if (!viewport.hasPointerCapture(e2.pointerId)) viewport.setPointerCapture(e2.pointerId);
      this.bracketPanX = this.panOriginX + dx;
      this.bracketPanY = this.panOriginY + dy;
    }
  };
  handleBracketPointerUp = (e2) => {
    this.activePointers.delete(e2.pointerId);
    if (this.activePointers.size === 0) {
      this.isPanningBracket = false;
      this.pinchStartDistance = 0;
    } else if (this.activePointers.size === 1) {
      const remaining = Array.from(this.activePointers.values())[0];
      this.panStartClientX = remaining.x;
      this.panStartClientY = remaining.y;
      this.panOriginX = this.bracketPanX;
      this.panOriginY = this.bracketPanY;
    }
  };
  handleBracketWheel = (e2) => {
    if (e2.deltaY === 0) return;
    e2.preventDefault();
    const viewport = e2.currentTarget;
    const rect = viewport.getBoundingClientRect();
    const unit = e2.deltaMode === 1 ? 16 : e2.deltaMode === 2 ? viewport.clientHeight : 1;
    this.zoomBracketAt(this.bracketScale * Math.exp(-e2.deltaY * unit * 15e-4), e2.clientX - rect.left, e2.clientY - rect.top);
  };
  handleBracketKeyDown = (e2) => {
    if (e2.target !== e2.currentTarget) return;
    switch (e2.key) {
      case "ArrowLeft":
        this.bracketPanX += 64;
        break;
      case "ArrowRight":
        this.bracketPanX -= 64;
        break;
      case "ArrowUp":
        this.bracketPanY += 64;
        break;
      case "ArrowDown":
        this.bracketPanY -= 64;
        break;
      case "+":
      case "=":
        this.zoomBracketBy(0.15);
        break;
      case "-":
        this.zoomBracketBy(-0.15);
        break;
      default:
        return;
    }
    e2.preventDefault();
  };
  renderMyWrestlersTab() {
    const env = this.sync.publicView();
    const watchedList = env.athletes.filter((a2) => this.sync.watchedAthleteIds.has(a2.athlete_id)).sort(
      (a2, b2) => this.getUrgencyRank(a2.athlete_id) - this.getUrgencyRank(b2.athlete_id) || a2.public_display_name.localeCompare(b2.public_display_name)
    );
    const schoolTeams = this.computeSchoolTeams();
    const followedTeams = schoolTeams.filter((t2) => t2.isFollowingAll);
    const activeTeamSummary = this.selectedTeamFilter !== "ALL" ? schoolTeams.find((t2) => t2.teamId === this.selectedTeamFilter) : void 0;
    const filteredDirectory = env.athletes.filter((a2) => {
      const athleteDiv = (a2.division_id || "VARSITY").trim().toUpperCase();
      if (this.selectedTeamFilter !== "ALL" && a2.team_id !== this.selectedTeamFilter) {
        return false;
      }
      if (this.selectedDivisionFilter !== "ALL" && athleteDiv !== this.selectedDivisionFilter) {
        return false;
      }
      if (this.selectedWeightFilter !== "ALL" && a2.weight_class_id !== this.selectedWeightFilter) {
        return false;
      }
      if (!this.searchQuery.trim()) return true;
      const q = this.searchQuery.toLowerCase().trim();
      return a2.public_display_name.toLowerCase().includes(q) || a2.team_name.toLowerCase().includes(q) || a2.team_id.toLowerCase().includes(q) || a2.weight_class_id.includes(q) || athleteDiv.toLowerCase().includes(q) || (a2.flowrestling_id ?? "").toLowerCase().includes(q);
    }).sort(
      (a2, b2) => Number(a2.weight_class_id) - Number(b2.weight_class_id) || (a2.seed_rank || 99) - (b2.seed_rank || 99) || a2.public_display_name.localeCompare(b2.public_display_name)
    );
    const divisions = this.availableDivisions();
    const showDivisionFilter = this.hasMultipleOrNonDefaultDivisions();
    const populatedWeights = Array.from(new Set(env.athletes.map((a2) => a2.weight_class_id))).sort(
      (a2, b2) => Number(a2) - Number(b2)
    );
    const weightFilterOptions = populatedWeights.length > 0 ? populatedWeights : showDivisionFilter ? ALL_SUPPORTED_WEIGHT_CLASSES : NFHS_WEIGHT_CLASSES;
    return b`
      <section aria-label="My Followed Wrestlers and Tournament Roster">
        <div class="my-wrestlers-split">
          <div>
            <div class="section-header">
              <div>
                <h2 class="section-title">My Wrestlers (${watchedList.length})</h2>
                ${followedTeams.length > 0 ? b`
                      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
                        Following teams: ${followedTeams.map((t2) => t2.teamName).join(", ")}
                      </div>
                    ` : ""}
              </div>
              ${watchedList.length > 0 ? b`
                    <button
                      type="button"
                      style="min-height: 30px; padding: 4px 10px; font-size: 12px;"
                      @click=${() => this.sync.clearWatchedAthletes()}
                    >
                      Unfollow All
                    </button>
                  ` : ""}
            </div>

            ${watchedList.length === 0 ? b`
                  <div class="finder-card" style="margin-bottom: 14px;">
                    <strong style="display: block; font-size: 14px; margin-bottom: 4px;">
                      Follow Wrestlers or a High School Team
                    </strong>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 13px;">
                      Search for your wrestler by name, or select a high school team in the roster to follow every wrestler on that school's roster and receive mat calls.
                    </p>
                  </div>
                ` : b`
                  <div class="pass-grid">
                    ${watchedList.map((athlete) => this.renderFollowedAthletePass(athlete))}
                  </div>
                `}
          </div>

          <div class="finder-panel">
            <div class="finder-card" aria-label="Find and Follow Wrestlers">
              <div class="section-header" style="margin-bottom: 10px;">
                <div>
                  <h3 class="section-title">Tournament Roster (${env.athletes.length})</h3>
                  <div style="font-size: 12px; color: var(--text-muted);">
                    Search by wrestler name, school, or weight class
                  </div>
                </div>
                ${this.searchQuery || this.selectedTeamFilter !== "ALL" || this.selectedWeightFilter !== "ALL" || this.selectedDivisionFilter !== "ALL" ? b`
                      <button
                        type="button"
                        style="min-height: 28px; padding: 3px 9px; font-size: 11px;"
                        @click=${() => {
      this.searchQuery = "";
      this.selectedTeamFilter = "ALL";
      this.selectedWeightFilter = "ALL";
      this.selectedDivisionFilter = "ALL";
    }}
                      >
                        Reset Filters
                      </button>
                    ` : ""}
              </div>

              <div class="search-box-row">
                <input
                  type="search"
                  aria-label="Search wrestlers or high schools"
                  placeholder="Search wrestler name, high school, or weight (e.g. Jordan Smith, Santa Barbara, 132)..."
                  .value=${this.searchQuery}
                  @input=${(e2) => {
      this.searchQuery = e2.target.value;
    }}
                />
                ${this.searchQuery ? b`
                      <button
                        type="button"
                        aria-label="Clear search"
                        @click=${() => {
      this.searchQuery = "";
    }}
                      >
                        Clear
                      </button>
                    ` : ""}
              </div>

              <div class="finder-controls">
                <select
                  aria-label="Filter by school"
                  .value=${this.selectedTeamFilter}
                  @change=${(e2) => {
      this.selectedTeamFilter = e2.target.value;
    }}
                >
                  <option value="ALL">All High Schools (${schoolTeams.length})</option>
                  ${schoolTeams.map(
      (t2) => b`<option value=${t2.teamId}>${t2.teamName} (${t2.totalWrestlers})</option>`
    )}
                </select>

                <select
                  aria-label="Filter by weight class"
                  .value=${this.selectedWeightFilter}
                  @change=${(e2) => {
      this.selectedWeightFilter = e2.target.value;
    }}
                >
                  <option value="ALL">All Weights</option>
                  ${weightFilterOptions.map((w2) => b`<option value=${w2}>${w2} lbs</option>`)}
                </select>

                ${showDivisionFilter ? b`
                      <select
                        aria-label="Filter by division"
                        .value=${this.selectedDivisionFilter}
                        @change=${(e2) => {
      this.selectedDivisionFilter = e2.target.value;
    }}
                      >
                        <option value="ALL">All Divisions</option>
                        ${divisions.map((div) => b`<option value=${div}>${div}</option>`)}
                      </select>
                    ` : ""}
              </div>

              ${activeTeamSummary ? b`
                    <div class="team-banner-bar">
                      <div>
                        <strong>${activeTeamSummary.teamName} (${activeTeamSummary.teamId})</strong>
                        <span style="margin-left: 6px; font-weight: 500;">
                          ${activeTeamSummary.totalWrestlers} wrestlers · ${activeTeamSummary.followedWrestlers} followed
                        </span>
                      </div>
                      <button
                        type="button"
                        class=${activeTeamSummary.isFollowingAll ? "" : "btn-primary"}
                        style="min-height: 30px; padding: 4px 10px; font-size: 12px;"
                        @click=${() => this.sync.toggleFollowTeam(activeTeamSummary.teamId)}
                      >
                        ${activeTeamSummary.isFollowingAll ? `Unfollow ${activeTeamSummary.teamName}` : `Follow All ${activeTeamSummary.totalWrestlers} Wrestlers`}
                      </button>
                    </div>
                  ` : ""}

              <div style="font-size: 11px; font-weight: 700; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.04em;">
                Showing ${filteredDirectory.length} of ${env.athletes.length} wrestlers
              </div>

              <div class="roster-list">
                ${filteredDirectory.length === 0 ? b`
                      <div style="padding: 14px; text-align: center; color: var(--text-muted); font-size: 13px;">
                        ${env.athletes.length === 0 ? "No wrestlers registered in this tournament yet." : "No wrestlers match your current search or filter."}
                      </div>
                    ` : filteredDirectory.map((a2) => {
      const isFollowed = this.sync.watchedAthleteIds.has(a2.athlete_id);
      const nextBout = this.sync.findAthleteNextOrActiveBout(a2.athlete_id);
      const completed = this.sync.findAthleteCompletedBouts(a2.athlete_id);
      const wins = completed.filter((b2) => b2.winner_athlete_id === a2.athlete_id).length;
      const losses = completed.length - wins;
      const hasSeed = Number(a2.seed_rank) > 0;
      const isOnMatNow = nextBout && (nextBout.lifecycle === BoutLifecycle.InProgress || nextBout.clock_running);
      const isUpNext = nextBout && !isOnMatNow && (nextBout.lifecycle === BoutLifecycle.Ready || nextBout.mat_queue_order === 1);
      return b`
                        <div class="roster-row ${isFollowed ? "followed" : ""}">
                          <div style="min-width: 0; flex: 1;">
                            <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                              <button
                                type="button"
                                class="wrestler-link-btn"
                                style="font-size: 14px;"
                                title="View wrestler profile"
                                @click=${() => this.openWrestlerProfile(a2.athlete_id)}
                              >
                                ${a2.public_display_name}
                              </button>
                              <span class="badge-weight">${this.formatDivisionWeightLabel(a2.weight_class_id, a2.division_id)}</span>
                              ${hasSeed ? b`<span style="font-size: 11px; font-weight: 700; color: var(--text-muted);">Seed #${a2.seed_rank}</span>` : ""}
                              ${a2.flowrestling_id ? b`<span class="badge-flo" title="FloWrestling ID">FLO: ${a2.flowrestling_id}</span>` : ""}
                            </div>
                            <div style="font-size: 12px; color: var(--text-secondary); margin-top: 3px;">
                              <strong>${a2.team_name}</strong>
                              ${a2.team_id && a2.team_id !== a2.team_name ? b` (${a2.team_id})` : ""}
                              · Record ${wins}-${losses}
                              ${nextBout && nextBout.assigned_mat_id ? b`
                                    ·
                                    <strong style="color: ${isOnMatNow ? "var(--status-live-text)" : isUpNext ? "var(--status-alert-text)" : "var(--text-primary)"};">
                                      ${isOnMatNow ? `LIVE Mat ${nextBout.assigned_mat_id}` : isUpNext ? `UP NEXT Mat ${nextBout.assigned_mat_id}` : `Mat ${nextBout.assigned_mat_id}`}
                                      (Bout #${nextBout.bout_number})
                                    </strong>
                                  ` : ""}
                            </div>
                          </div>
                          <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                            <button
                              type="button"
                              style="min-height: 34px; padding: 5px 10px; font-size: 12px;"
                              @click=${() => this.openWrestlerProfile(a2.athlete_id)}
                            >
                              Profile
                            </button>
                            <button
                              type="button"
                              class=${isFollowed ? "btn-primary" : ""}
                              style="min-height: 34px; padding: 5px 12px; font-size: 12px;"
                              @click=${() => this.sync.toggleFollowAthlete(a2.athlete_id)}
                            >
                              ${isFollowed ? "Following ✓" : "Follow"}
                            </button>
                          </div>
                        </div>
                      `;
    })}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
  renderFollowedAthletePass(athlete) {
    const nextBout = this.sync.findAthleteNextOrActiveBout(athlete.athlete_id);
    const completedBouts = this.sync.findAthleteCompletedBouts(athlete.athlete_id);
    const restStatus = this.formatRestCountdown(athlete.last_bout_ended_ms);
    const hasSeed = Number(athlete.seed_rank) > 0;
    const wins = completedBouts.filter((b2) => b2.winner_athlete_id === athlete.athlete_id).length;
    const losses = completedBouts.length - wins;
    const matchesToday = typeof athlete.matches_wrestled_today === "number" ? athlete.matches_wrestled_today : completedBouts.length;
    let cardClass = "";
    let bannerClass = "banner-idle";
    let bannerText = this.getAthleteStatusText(athlete);
    let corner = "RED";
    let oppName = "TBD";
    let oppTeam = "";
    if (nextBout) {
      corner = nextBout.red_athlete_id === athlete.athlete_id ? "RED" : "GREEN";
      const oppId = corner === "RED" ? nextBout.green_athlete_id : nextBout.red_athlete_id;
      const opp = this.sync.getAthlete(oppId);
      oppName = opp?.public_display_name ?? (oppId || "TBD");
      oppTeam = opp?.team_name ?? "";
      if (nextBout.lifecycle === BoutLifecycle.InProgress || nextBout.clock_running) {
        const clockView = this.getBoutClockView(nextBout);
        cardClass = "pass-live";
        bannerClass = "banner-live";
        bannerText = `MAT ${nextBout.assigned_mat_id} ACTIVE · P${nextBout.period_number} ${clockView.formattedClock} · ${nextBout.red_score}-${nextBout.green_score}`;
      } else if (nextBout.lifecycle === BoutLifecycle.Ready || nextBout.mat_queue_order === 1) {
        cardClass = "pass-urgent";
        bannerClass = "banner-urgent";
        bannerText = `REPORT TO MAT ${nextBout.assigned_mat_id} · UP NEXT`;
      } else if (nextBout.mat_queue_order === 2) {
        cardClass = "pass-ondeck";
        bannerClass = "banner-ondeck";
        bannerText = `MAT ${nextBout.assigned_mat_id} · ON DECK (2ND IN LINE)`;
      } else if (nextBout.assigned_mat_id > 0) {
        bannerClass = "banner-hole";
        bannerText = `MAT ${nextBout.assigned_mat_id} · IN THE HOLE`;
      }
    } else if (completedBouts.length > 0) {
      bannerText = `COMPLETED TODAY (${wins}W-${losses}L)`;
    }
    const latestCompleted = completedBouts[completedBouts.length - 1];
    return b`
      <article class="pass-card ${cardClass}">
        <div class="pass-banner ${bannerClass}">
          <span>${bannerText}</span>
          <button
            type="button"
            style="min-height: 24px; padding: 2px 8px; font-size: 11px; background: var(--bg-surface); border-color: var(--border-strong); color: var(--text-primary);"
            title="Unfollow wrestler"
            @click=${() => this.sync.toggleFollowAthlete(athlete.athlete_id)}
          >
            Unfollow
          </button>
        </div>

        <div class="pass-body">
          <div class="pass-identity">
            <div>
              <h3 class="pass-name">
                <button
                  type="button"
                  class="wrestler-link-btn"
                  style="font-size: 16px; font-weight: 800;"
                  @click=${() => this.openWrestlerProfile(athlete.athlete_id)}
                >
                  ${athlete.public_display_name}
                </button>
              </h3>
              <p class="pass-sub">
                ${athlete.team_name}${athlete.team_id && athlete.team_id !== athlete.team_name ? ` (${athlete.team_id})` : ""}
                ${athlete.flowrestling_id ? b` · <span class="badge-flo">FLO: ${athlete.flowrestling_id}</span>` : ""}
              </p>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 3px;">
              <span class="badge-weight">
                ${this.formatDivisionWeightLabel(athlete.weight_class_id, athlete.division_id)}${hasSeed ? ` · Seed #${athlete.seed_rank}` : ""}
              </span>
              <span style="font-size: 12px; font-weight: 700; color: var(--text-secondary);">Record: ${wins}-${losses}</span>
            </div>
          </div>

          ${nextBout ? b`
                <div class="callout-tiles">
                  <div class="tile">
                    <span class="tile-label">Mat</span>
                    <span class="tile-val tile-mat">
                      ${nextBout.assigned_mat_id ? `Mat ${nextBout.assigned_mat_id}` : "TBD"}
                    </span>
                  </div>
                  <div
                    class="tile"
                    style="cursor: pointer;"
                    title="View bout in bracket tree"
                    @click=${() => this.jumpToBracketNode(nextBout)}
                  >
                    <span class="tile-label">Bout</span>
                    <span class="tile-val" style="text-decoration: underline; text-underline-offset: 2px;">#${nextBout.bout_number}</span>
                  </div>
                  <div class="tile">
                    <span class="tile-label">Ankle Band</span>
                    <span class="tile-val ${corner === "RED" ? "corner-red" : "corner-green"}">
                      ${corner === "RED" ? "Red" : "Green"}
                    </span>
                  </div>
                </div>

                <div class="opponent-bar">
                  <div style="min-width: 0; flex: 1;">
                    <span style="color: var(--text-muted); font-size: 11px; font-weight: 700; display: block;">
                      ${nextBout.round_label}
                    </span>
                    <strong>
                      vs
                      ${(() => {
      const oppId = corner === "RED" ? nextBout.green_athlete_id : nextBout.red_athlete_id;
      const oppRec = this.sync.getAthlete(oppId);
      if (oppRec) {
        return b`
                            <button
                              type="button"
                              class="wrestler-link-btn"
                              @click=${() => this.openWrestlerProfile(oppRec.athlete_id)}
                            >
                              ${oppName}
                            </button>
                          `;
      }
      return oppName;
    })()}
                    </strong>
                    ${oppTeam ? b`<span style="color: var(--text-secondary); font-size: 12px;"> · ${oppTeam}</span>` : ""}
                  </div>
                  ${nextBout.assigned_mat_id ? b`
                        <button
                          type="button"
                          class="btn-primary"
                          style="min-height: 30px; padding: 4px 10px; font-size: 12px;"
                          @click=${() => this.jumpToMat(nextBout.assigned_mat_id)}
                        >
                          Open Mat ${nextBout.assigned_mat_id}
                        </button>
                      ` : ""}
                </div>
              ` : ""}

          <div class="pass-footer">
            <span class=${restStatus.ready ? "rest-ok" : "rest-wait"}>${restStatus.label}</span>
            <span>Daily matches: <strong>${matchesToday}/6</strong></span>
            ${latestCompleted ? b`
                  <span>
                    Last:
                    <span class=${latestCompleted.winner_athlete_id === athlete.athlete_id ? "win-tag" : "loss-tag"}>
                      ${latestCompleted.winner_athlete_id === athlete.athlete_id ? "W" : "L"}
                      ${latestCompleted.win_type ? ` (${latestCompleted.win_type})` : ""}
                    </span>
                  </span>
                ` : ""}
          </div>
        </div>
      </article>
    `;
  }
  renderMatsTab() {
    const env = this.sync.publicView();
    const maxAssignedMat = env.bouts.reduce((m2, b2) => Math.max(m2, b2.assigned_mat_id || 0), 0);
    const matCount = Math.min(
      20,
      Math.max(0, env.mat_count, maxAssignedMat, ...env.mats.map((m2) => m2.mat_id))
    );
    const allMats = Array.from({ length: matCount }, (_2, idx) => idx + 1);
    const matsToShow = this.selectedMatFilter === "ALL" ? allMats : [this.selectedMatFilter];
    return b`
      <section aria-label="Live Mat Scoreboards and Queues">
        <div class="pill-strip" aria-label="Select Mat Filter">
          <button
            type="button"
            class="pill-btn ${this.selectedMatFilter === "ALL" ? "active" : ""}"
            @click=${() => {
      this.selectedMatFilter = "ALL";
    }}
          >
            All Mats (${matCount})
          </button>
          ${allMats.map(
      (m2) => b`
              <button
                type="button"
                class="pill-btn ${this.selectedMatFilter === m2 ? "active" : ""}"
                @click=${() => {
        this.selectedMatFilter = m2;
      }}
              >
                Mat ${m2}
              </button>
            `
    )}
        </div>

        ${matCount === 0 ? b`
              <div class="finder-card">
                <p style="margin: 0; color: var(--text-secondary);">
                  No mats active yet. Connect to a tournament to view live mat scoreboards.
                </p>
              </div>
            ` : b`
              <div class="mats-grid">
                ${matsToShow.map((matId) => {
      const allMatBouts = env.bouts.filter((b2) => b2.assigned_mat_id === matId).sort((a2, b2) => a2.mat_queue_order - b2.mat_queue_order || a2.bout_number - b2.bout_number);
      const uncompletedMatBouts = allMatBouts.filter((b2) => !this.isBoutCompleted(b2));
      const currentBout = uncompletedMatBouts.find((b2) => b2.lifecycle === BoutLifecycle.InProgress || b2.clock_running) ?? uncompletedMatBouts.find((b2) => b2.lifecycle === BoutLifecycle.Ready) ?? uncompletedMatBouts[0] ?? allMatBouts[allMatBouts.length - 1];
      const queuedBouts = uncompletedMatBouts.filter((b2) => b2.match_id !== currentBout?.match_id).slice(0, 4);
      return b`
                    <div class="mat-card">
                      <div class="mat-header">
                        <h3>Mat ${matId}</h3>
                        <span style="font-size: 12px; font-weight: 600; color: var(--text-muted);">
                          ${uncompletedMatBouts.length} scheduled
                        </span>
                      </div>

                      ${currentBout ? this.renderActiveMatScoreboard(currentBout) : b`
                            <div
                              style="padding: 12px; border-radius: 6px; border: 1px dashed var(--border-strong); text-align: center; font-size: 12px; color: var(--text-muted);"
                            >
                              No bout assigned to Mat ${matId}
                            </div>
                          `}

                      <div style="display: grid; gap: 6px;">
                        <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted);">
                          Mat Queue
                        </div>
                        ${queuedBouts.length === 0 ? b`<div style="font-size: 12px; color: var(--text-muted);">No additional bouts queued.</div>` : queuedBouts.map((b2, idx) => this.renderMatQueueCard(b2, idx))}
                      </div>
                    </div>
                  `;
    })}
              </div>
            `}
      </section>
    `;
  }
  renderActiveMatScoreboard(bout) {
    const red = this.sync.getAthlete(bout.red_athlete_id);
    const green = this.sync.getAthlete(bout.green_athlete_id);
    const isWatched = this.sync.watchedAthleteIds.has(bout.red_athlete_id) || this.sync.watchedAthleteIds.has(bout.green_athlete_id);
    const clockView = this.getBoutClockView(bout);
    const stateBadgeBg = clockView.state === "RUNNING" ? "#047857" : clockView.state === "ENDED" ? "#334155" : "#b45309";
    const statusTitle = clockView.state === "RUNNING" ? "ACTIVE" : clockView.state === "ENDED" ? `FINAL${bout.win_type ? ` (${bout.win_type})` : ""}` : bout.lifecycle === BoutLifecycle.Ready ? "READY AT MAT" : "CLOCK STOPPED";
    return b`
      <div class="live-scoreboard ${clockView.countingDown ? "is-running" : ""} ${isWatched ? "scoreboard-watched" : ""}">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; flex-wrap: wrap; font-size: 11px;">
          <strong style="color: ${clockView.countingDown ? "var(--status-live-text)" : "var(--text-secondary)"};">
            ${statusTitle} · BOUT #${bout.bout_number}
          </strong>
          <span
            data-bout-clock-id=${bout.match_id}
            data-clock-state=${clockView.state}
            data-clock-running=${clockView.countingDown ? "true" : "false"}
            data-clock-resync-count=${String(clockView.resyncCount)}
            style="background: var(--bg-elevated); padding: 2px 7px; border-radius: 4px; font-weight: 700; font-variant-numeric: tabular-nums; display: inline-flex; align-items: center; gap: 6px;"
          >
            <span>${this.formatDivisionWeightLabel(bout.weight_class_id, bout.division_id)} · P${bout.period_number} · ${clockView.formattedClock}</span>
            <span
              style="background: ${stateBadgeBg}; color: #fff; padding: 1px 5px; border-radius: 3px; font-size: 10px; letter-spacing: 0.03em;"
            >
              ${clockView.stateLabel}
            </span>
          </span>
        </div>
        <div class="score-row">
          <div style="min-width: 0; flex: 1;">
            <span class="corner-red">RED</span>
            ${red ? b`
                  <button
                    type="button"
                    class="wrestler-link-btn"
                    style="margin-left: 6px;"
                    @click=${() => this.openWrestlerProfile(red.athlete_id)}
                  >
                    ${red.public_display_name}
                  </button>
                ` : b`<strong style="margin-left: 6px;">${bout.red_athlete_id}</strong>`}
            <div style="font-size: 11px; color: var(--text-secondary);">${red?.team_name ?? ""}</div>
          </div>
          <span class="score-digits">${bout.red_score}</span>
        </div>
        <div class="score-row">
          <div style="min-width: 0; flex: 1;">
            <span class="corner-green">GRN</span>
            ${green ? b`
                  <button
                    type="button"
                    class="wrestler-link-btn"
                    style="margin-left: 6px;"
                    @click=${() => this.openWrestlerProfile(green.athlete_id)}
                  >
                    ${green.public_display_name}
                  </button>
                ` : b`<strong style="margin-left: 6px;">${bout.green_athlete_id}</strong>`}
            <div style="font-size: 11px; color: var(--text-secondary);">${green?.team_name ?? ""}</div>
          </div>
          <span class="score-digits">${bout.green_score}</span>
        </div>
      </div>
    `;
  }
  renderMatQueueCard(bout, index) {
    const red = this.sync.getAthlete(bout.red_athlete_id);
    const green = this.sync.getAthlete(bout.green_athlete_id);
    const isWatched = this.sync.watchedAthleteIds.has(bout.red_athlete_id) || this.sync.watchedAthleteIds.has(bout.green_athlete_id);
    const stageLabel = index === 0 ? "ON DECK" : index === 1 ? "IN THE HOLE" : `QUEUE #${index + 1}`;
    return b`
      <div class="queue-item ${isWatched ? "queue-item-watched" : ""}">
        <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700;">
          <span style="color: ${index === 0 ? "var(--status-warn-text)" : "var(--text-secondary)"};">
            ${stageLabel}
          </span>
          <span style="color: var(--text-muted);">
            #${bout.bout_number} · ${this.formatDivisionWeightLabel(bout.weight_class_id, bout.division_id)}
          </span>
        </div>
        <div style="display: flex; justify-content: space-between; gap: 6px; font-size: 12px;">
          <span>
            <span class="corner-red">R</span>
            ${red ? b`
                  <button
                    type="button"
                    class="wrestler-link-btn"
                    @click=${() => this.openWrestlerProfile(red.athlete_id)}
                  >
                    ${red.public_display_name}
                  </button>
                ` : b`<strong>TBD</strong>`}
          </span>
          <span style="color: var(--text-muted);">vs</span>
          <span>
            <span class="corner-green">G</span>
            ${green ? b`
                  <button
                    type="button"
                    class="wrestler-link-btn"
                    @click=${() => this.openWrestlerProfile(green.athlete_id)}
                  >
                    ${green.public_display_name}
                  </button>
                ` : b`<strong>TBD</strong>`}
          </span>
        </div>
      </div>
    `;
  }
  renderBracketsTab() {
    const env = this.sync.publicView();
    const divisions = this.availableDivisions();
    const resolveBoutDivision = (b2) => (b2.division_id || this.sync.getAthlete(b2.red_athlete_id)?.division_id || this.sync.getAthlete(b2.green_athlete_id)?.division_id || "VARSITY").toUpperCase();
    const divisionBouts = this.selectedBracketDivision === "ALL" ? env.bouts : env.bouts.filter((b2) => resolveBoutDivision(b2) === this.selectedBracketDivision);
    const populatedClasses = [...new Set(divisionBouts.map((b2) => b2.weight_class_id))].sort((a2, b2) => Number(a2) - Number(b2));
    const weightOptions = populatedClasses.length ? populatedClasses : [...NFHS_WEIGHT_CLASSES];
    const weightBouts = divisionBouts.filter((b2) => b2.weight_class_id === this.selectedBracketWeight);
    const visibleBouts = weightBouts.filter((b2) => {
      const championship = !b2.is_consolation && (!b2.is_placement_bout || b2.placement_rank === 1);
      return this.selectedBracketView === "ALL" || (this.selectedBracketView === "CHAMPIONSHIP" ? championship : !championship);
    });
    const layout = this.computeBracketTreeLayout(visibleBouts);
    const hasFollowedInWeight = visibleBouts.some((b2) => this.sync.watchedAthleteIds.has(b2.red_athlete_id) || this.sync.watchedAthleteIds.has(b2.green_athlete_id));
    return b`
      <section class="bracket-browser" aria-label="Weight Class Brackets">
        <div class="bracket-selection-bar">
          ${this.hasMultipleOrNonDefaultDivisions() ? b`
            <select aria-label="Bracket division" .value=${this.selectedBracketDivision}
              @change=${(e2) => {
      this.selectedBracketDivision = e2.target.value;
      const scoped = env.bouts.filter((b2) => this.selectedBracketDivision === "ALL" || resolveBoutDivision(b2) === this.selectedBracketDivision);
      if (!scoped.some((b2) => b2.weight_class_id === this.selectedBracketWeight)) {
        this.selectedBracketWeight = scoped[0]?.weight_class_id || this.selectedBracketWeight;
      }
      const bracket = scoped.find((b2) => b2.weight_class_id === this.selectedBracketWeight);
      if (bracket) void this.sync.watchBracket(bracket.bracket_id);
      this.bracketPanX = 16;
      this.bracketPanY = 12;
      this.bracketScale = 1;
    }}>
              <option value="ALL">All divisions</option>
              ${divisions.map((div) => b`<option value=${div}>${div}</option>`)}
            </select>` : ""}
          <div class="bracket-weight-tabs" aria-label="Select Weight Class">
            ${weightOptions.map((w2) => b`
              <button type="button" class="bracket-weight-tab ${this.selectedBracketWeight === w2 ? "active" : ""}"
                aria-pressed=${this.selectedBracketWeight === w2}
                @click=${() => {
      this.selectedBracketWeight = w2;
      const bracket = divisionBouts.find((b2) => b2.weight_class_id === w2);
      if (bracket) void this.sync.watchBracket(bracket.bracket_id);
      this.bracketPanX = 16;
      this.bracketPanY = 12;
      this.bracketScale = 1;
    }}>${w2} lbs</button>`)}
          </div>
        </div>
        <div class="bracket-toolbar" aria-label="Bracket Controls">
          <div class="bracket-view-tabs" aria-label="Bracket view">
            ${["ALL", "CHAMPIONSHIP", "CONSOLATION"].map((view) => b`
              <button type="button" class=${this.selectedBracketView === view ? "active" : ""}
                aria-pressed=${this.selectedBracketView === view}
                @click=${() => {
      this.selectedBracketView = view;
      this.bracketPanX = 16;
      this.bracketPanY = 12;
      this.bracketScale = 1;
    }}>${view === "ALL" ? "Full bracket" : view === "CHAMPIONSHIP" ? "Championship" : "Consolation"}</button>`)}
          </div>
          ${hasFollowedInWeight ? b`
            <button type="button" id="btn-bracket-center-followed"
              @click=${() => this.centerBracketOnFollowedWrestler(visibleBouts)}>Find followed wrestler</button>` : ""}
        </div>
        ${visibleBouts.length === 0 ? b`
          <p class="bracket-empty">No ${this.selectedBracketView === "CONSOLATION" ? "consolation " : ""}bouts scheduled for ${this.selectedBracketWeight} lbs.</p>
        ` : b`
          <div class="bracket-canvas">
            <div class="bracket-viewport" role="region" tabindex="0"
              aria-label="${this.selectedBracketWeight} lbs Pan and Zoom Bracket Tree"
              @keydown=${this.handleBracketKeyDown}
              @pointerdown=${this.handleBracketPointerDown}
              @pointermove=${this.handleBracketPointerMove}
              @pointerup=${this.handleBracketPointerUp}
              @pointercancel=${this.handleBracketPointerUp}
              @wheel=${this.handleBracketWheel}>
              <div class="bracket-stage"
                style="width: ${layout.width}px; height: ${layout.height}px; transform: translate3d(${this.bracketPanX}px, ${this.bracketPanY}px, 0) scale(${this.bracketScale});">
                <svg class="bracket-svg-layer" width=${layout.width} height=${layout.height}
                  viewBox="0 0 ${layout.width} ${layout.height}" aria-hidden="true">
                  ${layout.edges.map((edge) => w`
                    <path class="bracket-edge ${edge.isCompleted ? "edge-completed" : ""} ${edge.isWatchedPath ? "edge-watched" : ""}" d=${edge.d} />`)}
                </svg>
                ${layout.headers.map((hdr) => b`
                  <div class="bracket-col-header" style="left: ${hdr.x}px; top: ${hdr.y}px; width: ${hdr.width}px;">${hdr.title}</div>`)}
                ${layout.banners.map((bnr) => b`
                  <div class="bracket-section-banner" style="left: ${bnr.x}px; top: ${bnr.y}px;">${bnr.title}</div>`)}
                ${layout.nodes.map((node) => this.renderBracketTreeNode(node))}
              </div>
            </div>
            <div class="bracket-canvas-hint">Drag to move · Scroll to zoom</div>
            <div class="bracket-zoom-controls" aria-label="Bracket zoom">
              <button type="button" id="btn-bracket-fit" @click=${() => this.fitBracketToViewport(layout)}>Fit bracket</button>
              <button type="button" id="btn-bracket-reset" aria-label="Reset bracket to actual size"
                @click=${() => {
      this.bracketPanX = 16;
      this.bracketPanY = 12;
      this.bracketScale = 1;
    }}>100%</button>
              <button type="button" id="btn-bracket-zoom-out" aria-label="Zoom out bracket" @click=${() => this.zoomBracketBy(-0.15)}>−</button>
              <span class="bracket-zoom-readout">${Math.round(this.bracketScale * 100)}%</span>
              <button type="button" id="btn-bracket-zoom-in" aria-label="Zoom in bracket" @click=${() => this.zoomBracketBy(0.15)}>+</button>
            </div>
          </div>
        `}
      </section>
    `;
  }
  renderBracketTreeNode(node) {
    const bout = node.bout;
    const red = this.sync.getAthlete(bout.red_athlete_id);
    const green = this.sync.getAthlete(bout.green_athlete_id);
    const completed = this.isBoutCompleted(bout);
    const isLive = bout.lifecycle === BoutLifecycle.InProgress || bout.clock_running;
    const isFollowed = this.sync.watchedAthleteIds.has(bout.red_athlete_id) || this.sync.watchedAthleteIds.has(bout.green_athlete_id);
    const showScores = !bout.is_bye && (completed || isLive || bout.red_score > 0 || bout.green_score > 0);
    const winnerId = bout.winner_athlete_id || (completed && bout.red_score !== bout.green_score ? bout.red_score > bout.green_score ? bout.red_athlete_id : bout.green_athlete_id : "");
    const roundLabel = bout.round_label.replace("1st Place Championship Final", "Final").replace(/^Championship /, "").replace(/^Consolation /, "Cons. ").replace(" (Crossover)", "");
    const status = isLive ? `LIVE · Mat ${bout.assigned_mat_id || "?"}` : completed ? bout.is_bye ? "BYE" : bout.win_type || "FINAL" : bout.assigned_mat_id ? `Mat ${bout.assigned_mat_id}` : "";
    const renderSlot = (athlete, score) => {
      const isWinner = Boolean(athlete && completed && winnerId === athlete.athlete_id);
      const followed = Boolean(athlete && this.sync.watchedAthleteIds.has(athlete.athlete_id));
      const nameParts = athlete?.public_display_name.trim().split(/\s+/) || [];
      const displayName = nameParts.length > 1 ? `${nameParts[0][0]}. ${nameParts.slice(1).join(" ")}` : nameParts[0] || (bout.is_bye ? "BYE" : "TBD");
      const content = b`
        <span class="slot-seed">${athlete && athlete.seed_rank > 0 ? athlete.seed_rank : "–"}</span>
        <span class="slot-name">${displayName}</span>
        <span class="slot-school">${athlete?.team_id || ""}</span>
        <strong class="slot-score">${showScores ? score : ""}</strong>
      `;
      return athlete ? b`
        <button type="button"
          class="bracket-slot is-clickable ${isWinner ? "slot-winner" : completed ? "slot-loser" : ""} ${followed ? "slot-followed" : ""}"
          title="${athlete.public_display_name} · ${athlete.team_name}${isWinner ? " · Winner" : ""}"
          @click=${(e2) => {
        e2.stopPropagation();
        if (this.bracketPointerMoved && e2.detail > 0) return;
        this.openWrestlerProfile(athlete.athlete_id);
      }}>${content}</button>
      ` : b`<div class="bracket-slot slot-placeholder">${content}</div>`;
    };
    return b`
      <div class="bracket-tree-node ${bout.is_placement_bout ? "node-final" : ""} ${isLive ? "node-live" : ""} ${isFollowed ? "node-followed" : ""} ${this.highlightedMatchId === bout.match_id ? "node-highlighted" : ""}"
        data-match-id=${bout.match_id}
        aria-label="Bout ${bout.bout_number} · ${bout.round_label} · ${status}"
        style="left: ${node.x}px; top: ${node.y}px; width: ${node.width}px; height: ${node.height}px;">
        <div class="bracket-node-meta" title=${bout.round_label}>
          <span class="bracket-bout-label">${bout.is_placement_bout ? b`<svg class="bracket-trophy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 3h8v7a4 4 0 0 1-8 0V3ZM8 5H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4M12 14v6m-4 1h8"/></svg>` : ""}#${bout.bout_number} · ${roundLabel}</span>
          <span class="bracket-node-status">${status}</span>
        </div>
        ${renderSlot(red, bout.red_score)}
        ${renderSlot(green, bout.green_score)}
      </div>
    `;
  }
  renderWrestlerProfileTab() {
    const env = this.sync.publicView();
    const athleteId = this.selectedProfileAthleteId;
    const athlete = athleteId ? this.sync.getAthlete(athleteId) : void 0;
    if (!athlete) {
      return b`
        <section class="profile-shell" aria-label="Wrestler Profile">
          <div style="margin-bottom: 12px;">
            <button type="button" @click=${() => this.closeWrestlerProfile()}>
              ← Back to Tournament
            </button>
          </div>
          <div class="finder-card">
            <h2 class="section-title">Wrestler Not Found</h2>
            <p style="margin: 6px 0 0; color: var(--text-secondary);">
              No wrestler record found for ID <code>${athleteId || "unknown"}</code> in the current tournament roster.
            </p>
          </div>
        </section>
      `;
    }
    const isFollowed = this.sync.watchedAthleteIds.has(athlete.athlete_id);
    const isFollowingTeam = this.sync.isFollowingTeam(athlete.team_id);
    const hasSeed = Number(athlete.seed_rank) > 0;
    const restStatus = this.formatRestCountdown(athlete.last_bout_ended_ms);
    const nextBout = this.sync.findAthleteNextOrActiveBout(athlete.athlete_id);
    const allAthleteBouts = env.bouts.filter(
      (b2) => !b2.is_bye && (b2.red_athlete_id === athlete.athlete_id || b2.green_athlete_id === athlete.athlete_id)
    ).sort((a2, b2) => a2.bout_number - b2.bout_number);
    const completedBouts = allAthleteBouts.filter((b2) => this.isBoutCompleted(b2));
    let wins = 0;
    let losses = 0;
    let falls = 0;
    let tfs = 0;
    let mds = 0;
    let teamPointsScored = 0;
    for (const bout of completedBouts) {
      const winnerId = bout.winner_athlete_id || (bout.red_score > bout.green_score ? bout.red_athlete_id : bout.green_score > bout.red_score ? bout.green_athlete_id : "");
      if (winnerId === athlete.athlete_id) {
        wins += 1;
        const adv = bout.is_consolation ? 1 : 2;
        const wt = (bout.win_type || "").toUpperCase();
        let bonus = 0;
        if (wt === "FALL" || wt === "FORFEIT" || wt === "INJURY_DEFAULT" || wt === "DQ") {
          bonus = 2;
          falls += 1;
        } else if (wt === "TF" || wt === "TECHNICAL_FALL") {
          bonus = 1.5;
          tfs += 1;
        } else if (wt === "MD" || wt === "MAJOR_DECISION") {
          bonus = 1;
          mds += 1;
        }
        teamPointsScored += adv + bonus;
      } else {
        losses += 1;
      }
    }
    const matchesToday = typeof athlete.matches_wrestled_today === "number" ? athlete.matches_wrestled_today : completedBouts.length;
    const floDigits = (athlete.flowrestling_id || "").replace(/[^0-9a-zA-Z_-]/g, "");
    const floSearchUrl = floDigits ? `https://www.flowrestling.org/search?q=${encodeURIComponent(athlete.public_display_name + " " + floDigits)}` : "";
    return b`
      <section class="profile-shell" aria-label="Wrestler Profile: ${athlete.public_display_name}">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
          <button
            type="button"
            id="btn-profile-back"
            @click=${() => this.closeWrestlerProfile()}
          >
            ← Back
          </button>
          <button
            type="button"
            id="btn-profile-view-bracket"
            @click=${() => {
      this.selectedBracketWeight = athlete.weight_class_id;
      this.selectedBracketDivision = athlete.division_id || "ALL";
      this.selectedBracketView = "ALL";
      this.activeTab = "brackets";
      const targetBout = nextBout ?? allAthleteBouts[allAthleteBouts.length - 1];
      if (targetBout) {
        this.highlightedMatchId = targetBout.match_id;
      }
    }}
          >
            View ${athlete.weight_class_id} lbs Bracket Tree →
          </button>
        </div>

        <article class="profile-hero-card">
          <div class="profile-hero-top">
            <div>
              <h2 class="profile-name">${athlete.public_display_name}</h2>
              <p class="profile-school-line">
                <strong>${athlete.team_name}</strong>
                ${athlete.team_id && athlete.team_id !== athlete.team_name ? b` <span style="color: var(--text-muted);">(${athlete.team_id})</span>` : ""}
              </p>
              <div class="profile-badges">
                <span class="badge-weight">
                  ${this.formatDivisionWeightLabel(athlete.weight_class_id, athlete.division_id)}
                </span>
                ${hasSeed ? b`<span class="badge-weight" style="background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong);">Seed #${athlete.seed_rank}</span>` : ""}
                ${athlete.flowrestling_id ? b`
                      <a
                        class="badge-flo"
                        href=${floSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open FloWrestling profile lookup"
                      >
                        FloWrestling #${athlete.flowrestling_id} ↗
                      </a>
                    ` : ""}
              </div>
            </div>

            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button
                type="button"
                id="btn-profile-follow-athlete"
                class=${isFollowed ? "btn-primary" : ""}
                @click=${() => this.sync.toggleFollowAthlete(athlete.athlete_id)}
              >
                ${isFollowed ? "Following Wrestler ✓" : "Follow Wrestler"}
              </button>
              <button
                type="button"
                id="btn-profile-follow-team"
                @click=${() => this.sync.toggleFollowTeam(athlete.team_id)}
              >
                ${isFollowingTeam ? `Following ${athlete.team_name} ✓` : `Follow ${athlete.team_name}`}
              </button>
              <button
                type="button"
                id="btn-profile-school-roster"
                @click=${() => {
      this.selectedTeamFilter = athlete.team_id;
      this.activeTab = "my-wrestlers";
    }}
              >
                School Roster
              </button>
            </div>
          </div>

          <div class="profile-kpi-strip">
            <div class="profile-kpi">
              <span class="profile-kpi-label">Tournament Record</span>
              <span class="profile-kpi-val">${wins}-${losses}</span>
            </div>
            <div class="profile-kpi">
              <span class="profile-kpi-label">Bonus Wins</span>
              <span class="profile-kpi-val" style="font-size: 14px;">
                ${falls} Fall · ${tfs} TF · ${mds} MD
              </span>
            </div>
            <div class="profile-kpi">
              <span class="profile-kpi-label">Team Points Scored</span>
              <span class="profile-kpi-val" style="color: var(--brand);">${teamPointsScored.toFixed(1)} pts</span>
            </div>
            <div class="profile-kpi">
              <span class="profile-kpi-label">NFHS Rest &amp; Daily Limit</span>
              <span class="profile-kpi-val" style="font-size: 13px; color: ${restStatus.ready ? "var(--status-live-text)" : "var(--status-warn-text)"};">
                ${restStatus.label} (${matchesToday}/6)
              </span>
            </div>
          </div>
        </article>

        ${nextBout ? b`
              <div style="margin-bottom: 14px;">
                <h3 class="section-title" style="margin-bottom: 8px;">Current / Next Mat Callout</h3>
                ${this.renderFollowedAthletePass(athlete)}
              </div>
            ` : ""}

        <div class="finder-card">
          <div class="section-header" style="margin-bottom: 10px;">
            <h3 class="section-title">Tournament Match History &amp; Schedule (${allAthleteBouts.length})</h3>
          </div>

          ${allAthleteBouts.length === 0 ? b`
                <p style="margin: 0; color: var(--text-muted); font-size: 13px;">
                  No bouts scheduled for ${athlete.public_display_name} yet.
                </p>
              ` : b`
                <div class="profile-bouts-list">
                  ${allAthleteBouts.map((bout) => {
      const isRed = bout.red_athlete_id === athlete.athlete_id;
      const oppId = isRed ? bout.green_athlete_id : bout.red_athlete_id;
      const opp = this.sync.getAthlete(oppId);
      const oppName = opp?.public_display_name ?? (oppId || "TBD");
      const oppTeam = opp?.team_name ?? "";
      const completed = this.isBoutCompleted(bout);
      const isLive = bout.lifecycle === BoutLifecycle.InProgress || bout.clock_running;
      const myScore = isRed ? bout.red_score : bout.green_score;
      const theirScore = isRed ? bout.green_score : bout.red_score;
      const winnerId = bout.winner_athlete_id || (completed && bout.red_score > bout.green_score ? bout.red_athlete_id : completed && bout.green_score > bout.red_score ? bout.green_athlete_id : "");
      const didWin = completed && winnerId === athlete.athlete_id;
      return b`
                      <div class="profile-bout-row">
                        <div style="min-width: 0; flex: 1;">
                          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 12px;">
                            <strong>Bout #${bout.bout_number} · ${bout.round_label}</strong>
                            <span class="corner-pill ${isRed ? "corner-red-pill" : "corner-green-pill"}">
                              ${isRed ? "RED ANKLE" : "GREEN ANKLE"}
                            </span>
                            ${completed ? b`
                                  <span class=${didWin ? "win-tag" : "loss-tag"}>
                                    ${didWin ? "WIN" : "LOSS"}
                                    ${bout.win_type ? ` (${bout.win_type})` : ""}
                                    · ${myScore}-${theirScore}
                                  </span>
                                ` : isLive ? b`
                                    <span style="color: var(--status-live-text); font-weight: 800;">
                                      LIVE ON MAT ${bout.assigned_mat_id} · ${myScore}-${theirScore}
                                    </span>
                                  ` : b`
                                    <span style="color: var(--text-muted); font-weight: 600;">
                                      ${bout.assigned_mat_id ? `Scheduled · Mat ${bout.assigned_mat_id}` : "Scheduled · Mat TBD"}
                                    </span>
                                  `}
                          </div>
                          <div style="margin-top: 4px; font-size: 13px;">
                            vs
                            ${opp ? b`
                                  <button
                                    type="button"
                                    class="wrestler-link-btn"
                                    @click=${() => this.openWrestlerProfile(opp.athlete_id)}
                                  >
                                    ${oppName}
                                  </button>
                                ` : b`<strong>${oppName}</strong>`}
                            ${oppTeam ? b`<span style="color: var(--text-secondary);"> · ${oppTeam}</span>` : ""}
                          </div>
                        </div>

                        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                          ${!completed && bout.assigned_mat_id ? b`
                                <button
                                  type="button"
                                  style="min-height: 30px; padding: 4px 10px; font-size: 12px;"
                                  @click=${() => this.jumpToMat(bout.assigned_mat_id)}
                                >
                                  Mat ${bout.assigned_mat_id}
                                </button>
                              ` : ""}
                          <button
                            type="button"
                            style="min-height: 30px; padding: 4px 10px; font-size: 12px;"
                            @click=${() => this.jumpToBracketNode(bout)}
                          >
                            View in Bracket →
                          </button>
                        </div>
                      </div>
                    `;
    })}
                </div>
              `}
        </div>
      </section>
    `;
  }
  renderStandingsAndQrTab() {
    const env = this.sync.publicView();
    const standings = this.computeEffectiveStandings();
    const directJoinUrl = this.sync.getDirectJoinKeyUrl();
    const name = (id) => this.athletes.find((athlete) => athlete.athlete_id === id)?.public_display_name ?? id;
    return b`
      <section aria-label="Team Standings and Tournament Share">
        <div class="standings-qr-split">
          <div>
            <div class="section-header">
              <h2 class="section-title">High School Team Standings</h2>
            </div>

            <div class="desktop-standings-table finder-card" style="margin-bottom: 16px; overflow-x: auto;">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>High School</th>
                    <th class="num">Total</th>
                    <th class="num">Adv</th>
                    <th class="num">Place</th>
                    <th class="num">Bonus</th>
                    <th class="num">Fall/DQ</th>
                    <th class="num">TF</th>
                    <th class="num">MD</th>
                    <th class="num">1st</th>
                  </tr>
                </thead>
                <tbody>
                  ${standings.map(
      (t2) => b`
                      <tr>
                        <td style="font-weight: 700;">#${t2.rank}</td>
                        <td style="font-weight: 600;">
                          ${t2.team_name}
                          <span style="color: var(--text-muted); font-size: 11px;">(${t2.team_id})</span>
                        </td>
                        <td class="num" style="font-weight: 800; font-size: 14px;">${t2.total_points.toFixed(1)}</td>
                        <td class="num">${t2.advancement_points.toFixed(1)}</td>
                        <td class="num">${t2.placement_points.toFixed(1)}</td>
                        <td class="num">${t2.bonus_points.toFixed(1)}</td>
                        <td class="num">${t2.falls_forfeits_dq}</td>
                        <td class="num">${t2.tech_falls}</td>
                        <td class="num">${t2.major_decisions}</td>
                        <td class="num">${t2.first_place_winners}</td>
                      </tr>
                    `
    )}
                </tbody>
              </table>
            </div>

            <div class="mobile-standings-list" style="margin-bottom: 16px;">
              ${standings.map(
      (t2) => b`
                  <div class="standing-row">
                    <div>
                      <strong style="font-size: 14px;">#${t2.rank} ${t2.team_name}</strong>
                      <div style="font-size: 11px; color: var(--text-muted);">
                        Adv ${t2.advancement_points} · Place ${t2.placement_points} · Bonus ${t2.bonus_points} · Falls ${t2.falls_forfeits_dq}
                      </div>
                    </div>
                    <span class="pts-badge">${t2.total_points.toFixed(1)} pts</span>
                  </div>
                `
    )}
            </div>

            <div class="finder-card" style="margin-bottom: 14px;">
              <h3 class="section-title" style="margin-bottom: 6px;">Outstanding Wrestler Vote</h3>
              <p role="status" style="margin: 0 0 8px; font-size: 12px; color: var(--text-muted);">
                ${this.sync.owVoteStatusMessage}
              </p>
              <div class="roster-list" style="max-height: 320px;">
                ${env.athletes.map((a2) => {
      const votes = this.sync.owVoteTallies.get(a2.athlete_id) ?? 0;
      const isVoted = this.sync.owVotedAthleteId === a2.athlete_id;
      return b`
                    <div class="roster-row ${isVoted ? "followed" : ""}">
                      <div>
                        <button
                          type="button"
                          class="wrestler-link-btn"
                          style="font-size: 13px;"
                          @click=${() => this.openWrestlerProfile(a2.athlete_id)}
                        >
                          ${a2.public_display_name}
                        </button>
                        <div style="font-size: 11px; color: var(--text-secondary);">
                          ${a2.team_name} · ${a2.weight_class_id} lbs
                        </div>
                      </div>
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 12px; font-weight: 700;">${votes}</span>
                        <button
                          type="button"
                          class=${isVoted ? "btn-primary" : ""}
                          style="min-height: 28px; padding: 4px 10px; font-size: 12px;"
                          @click=${() => {
        void this.sync.castOwVote(a2.athlete_id);
      }}
                        >
                          ${isVoted ? "Voted" : "Vote"}
                        </button>
                      </div>
                    </div>
                  `;
    })}
              </div>
            </div>
          </div>

          <div>
            <div class="finder-card" style="margin-bottom: 14px;">
              <h3 class="section-title" style="margin-bottom: 8px;">Share or Switch Tournament</h3>
              <p style="margin: 0 0 10px; font-size: 12px; color: var(--text-secondary);">
                Share this link or QR code with wrestlers, parents, and coaches to view live brackets and mat calls.
              </p>
              <div style="display: flex; gap: 14px; flex-wrap: wrap; align-items: flex-start;">
                ${this.sync.defaultJoinQrSvg ? b`
                      <div class="qr-box">
                        <img
                          src=${this.sync.defaultJoinQrSvg}
                          alt="Tournament Join QR Code"
                          width="132"
                          height="132"
                          style="display: block;"
                        />
                      </div>
                    ` : ""}
                <div style="flex: 1; min-width: 220px; display: grid; gap: 8px; font-size: 12px;">
                  <div>
                    <div style="color: var(--text-muted); margin-bottom: 3px; font-weight: 600;">Direct Tournament Link (Players &amp; Spectators):</div>
                    <code class="code-box">${directJoinUrl}</code>
                    <div style="display: flex; gap: 6px; margin-top: 6px; align-items: center; flex-wrap: wrap;">
                      <button
                        type="button"
                        style="min-height: 30px; font-size: 12px;"
                        @click=${async () => {
      try {
        await navigator.clipboard.writeText(directJoinUrl);
        this.copyLinkStatus = "Link copied";
      } catch {
        this.copyLinkStatus = directJoinUrl;
      }
    }}
                      >
                        Copy Link
                      </button>
                      ${this.copyLinkStatus ? b`<span style="color: var(--status-live-text); font-weight: 700; font-size: 11px;">${this.copyLinkStatus}</span>` : ""}
                    </div>
                  </div>

                  <div style="padding-top: 6px; border-top: 1px solid var(--border-subtle);">
                    <div style="color: var(--text-muted); margin-bottom: 3px; font-weight: 600;">Officials Bracket &amp; Setup Console (Wi-Fi / Public Fallback):</div>
                    <code class="code-box">${this.sync.getPublicFallbackOfficialsUrl()}</code>
                    <div style="display: flex; gap: 6px; margin-top: 6px; align-items: center; flex-wrap: wrap;">
                      <a
                        href=${this.sync.getDirectOfficialsUrl()}
                        style="display: inline-flex; align-items: center; min-height: 30px; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700; text-decoration: none; background: var(--bg-inset); color: var(--brand); border: 1px solid var(--border-subtle);"
                      >
                        Open Officials Console ↗
                      </a>
                      <button
                        type="button"
                        style="min-height: 30px; font-size: 12px;"
                        @click=${async () => {
      const url = this.sync.getPublicFallbackOfficialsUrl();
      try {
        await navigator.clipboard.writeText(url);
        this.copyLinkStatus = "Officials URL copied";
      } catch {
        this.copyLinkStatus = url;
      }
    }}
                      >
                        Copy Officials Fallback URL
                      </button>
                    </div>
                  </div>

                  <form
                    style="display: flex; gap: 6px; margin-top: 4px;"
                    @submit=${(e2) => {
      e2.preventDefault();
      const res = this.sync.applyScannedTournamentJoinQr(this.qrScanInput);
      this.qrScanStatus = res.reason;
    }}
                  >
                    <input
                      style="flex: 1; min-width: 0; font-size: 12px; min-height: 34px; padding: 4px 8px;"
                      .value=${this.qrScanInput}
                      @input=${(e2) => {
      this.qrScanInput = e2.target.value;
    }}
                      aria-label="Tournament join key"
                      placeholder="Enter join key or openmat://join link"
                      required
                    />
                    <button type="submit" class="btn-primary" style="min-height: 34px;">Connect</button>
                  </form>
                  ${this.qrScanStatus ? b`<div style="color: var(--text-secondary); font-size: 11px;">${this.qrScanStatus}</div>` : ""}
                </div>
              </div>
            </div>

            ${this.bouts.length ? b`
                  <div class="finder-card" style="margin-bottom: 14px;" aria-label="Tournament bouts">
                    <h3 class="section-title" style="margin-bottom: 8px;">Snapshot Bouts (${this.bouts.length})</h3>
                    <div style="overflow-x: auto;">
                      <table class="data-table">
                        <thead>
                          <tr>
                            <th>Bout</th>
                            <th>Mat</th>
                            <th>Red</th>
                            <th>Green</th>
                            <th>Winner</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${this.bouts.map(
      (bout) => b`
                              <tr>
                                <td>${bout.bout_number}</td>
                                <td>${bout.assigned_mat_id || "—"}</td>
                                <td>${name(bout.red_athlete_id)}</td>
                                <td>${name(bout.green_athlete_id)}</td>
                                <td>
                                  ${bout.lifecycle === 6n || bout.lifecycle === 6 || bout.lifecycle === 7n || bout.lifecycle === 7 ? name(bout.winner_athlete_id) : "Pending"}
                                </td>
                              </tr>
                            `
    )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ` : ""}

          </div>
        </div>
      </section>
    `;
  }
  async openConnectionPanel() {
    this.connectionPanelOpen = true;
    this.connectionCopyStatus = "";
    await this.updateComplete;
    this.querySelector("#connection-panel")?.showModal();
  }
  closeConnectionPanel() {
    this.querySelector("#connection-panel")?.close();
  }
  connectionAge(milliseconds) {
    if (milliseconds === null) return "—";
    if (milliseconds < 1e3) return "Just now";
    if (milliseconds < 6e4) return `${Math.floor(milliseconds / 1e3)}s ago`;
    if (milliseconds < 36e5) return `${Math.floor(milliseconds / 6e4)}m ago`;
    return `${Math.floor(milliseconds / 36e5)}h ago`;
  }
  connectionEndpoint(value) {
    try {
      return new URL(value).host;
    } catch {
      return value;
    }
  }
  renderConnectionPanel() {
    const status = this.sync.getConnectionStatus(this.nowEpochMs);
    const labels = {
      WEBRTC: "Direct P2P",
      VENUE_RELAY: "Venue relay",
      HTTP_POLL: "API fallback",
      HTTP_SSE: "API fallback",
      NOSTR: "Public relay",
      BROADCAST: "Nearby tab",
      CACHE: "Saved copy",
      SNAPSHOT: "Offline snapshot",
      UNKNOWN: "Verified copy",
      DISCONNECTED: "Source disconnected",
      NONE: "Finding a source",
      P2P: "P2P"
    };
    const shortId = (id) => id.length > 27 ? `${id.slice(0, 17)}…${id.slice(-6)}` : id;
    const peerRow = (peer) => b`
      <div class="connection-peer">
        <div><strong>${{ primary: "Tournament host", official: "Officials", standby: "Standby host", mat: "Mat station", spectator: "Spectator" }[peer.role] ?? "Peer"}</strong>
          <code title=${peer.peerId}>${shortId(peer.peerId)}</code></div>
        <span class="connection-path ${peer.transport === "WEBRTC" ? "direct" : peer.transport === "VENUE_RELAY" ? "relay" : ""}">${labels[peer.transport]}</span>
      </div>`;
    const apiActive = status.sourceConnected && (status.delivery?.kind === "HTTP_POLL" || status.delivery?.kind === "HTTP_SSE");
    const openRelays = status.relays.filter((relay) => relay.state === "OPEN").length;
    const frameCount = new Intl.NumberFormat(void 0, { notation: "compact", maximumFractionDigits: 1 });
    return b`
      <dialog id="connection-panel" class="connection-panel" aria-labelledby="connection-title"
        @close=${() => {
      this.connectionPanelOpen = false;
      this.querySelector("#connection-toggle")?.focus();
    }}
        @click=${(event) => {
      const dialog = event.currentTarget;
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    }}>
        ${this.connectionPanelOpen ? b`
          <div class="connection-heading">
            <div><span class="connection-eyebrow">OPENMAT NETWORK</span><h2 id="connection-title">Connection</h2></div>
            <button class="connection-close" type="button" aria-label="Close connection status" @click=${this.closeConnectionPanel} autofocus>✕</button>
          </div>
          <div class="connection-route ${status.live ? "connected" : ""}">
            <span class="connection-orbit" aria-hidden="true">${w`<svg viewBox="0 0 32 32" fill="none"><path d="M8 21a11 11 0 0 1 16 0M4 16a17 17 0 0 1 24 0M12 26a6 6 0 0 1 8 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="29" r="1.5" fill="currentColor"/></svg>`}</span>
            <div><strong>${labels[status.transport]}</strong><span>${status.live ? "Receiving verified tournament data" : status.verified ? "Showing the last verified schedule" : "Waiting for verified tournament data"}</span></div>
            <span class="connection-state">${status.live ? "LIVE" : status.verified ? "SAVED" : "CONNECTING"}</span>
          </div>
          <dl class="connection-metrics">
            <div><dt>Peer latency</dt><dd>${status.pingRttMs === null ? "—" : b`${Math.round(status.pingRttMs)}<small> ms</small>`}</dd></div>
            <div><dt>Last received</dt><dd>${this.connectionAge(status.ageMs)}</dd></div>
            <div><dt>Peer frames <span aria-hidden="true">↓ / ↑</span></dt><dd title="${status.framesReceived} received / ${status.framesSent} sent">${frameCount.format(status.framesReceived)} <small>/</small> ${frameCount.format(status.framesSent)}</dd></div>
          </dl>
          <div class="connection-topology">
            <section class="connection-hop"><h3><span class="connection-step" aria-hidden="true">↓</span>Upstream peer</h3>
              ${status.upstream ? peerRow(status.upstream) : b`<p class="connection-empty">No upstream peer connected</p>`}
              ${status.delivery ? b`<div class="connection-delivery">Last delivery <strong>${labels[status.delivery.kind]}</strong>${status.delivery.endpoint ? b` · <span title=${status.delivery.endpoint}>${this.connectionEndpoint(status.delivery.endpoint)}</span>` : ""}</div>` : ""}
            </section>
            <section class="connection-hop connection-self"><h3><span class="connection-step" aria-hidden="true">●</span>This device <span class="connection-you">YOU</span></h3>
              <code title=${status.peerId}>${status.peerId}</code>
            </section>
            <section class="connection-hop"><h3><span class="connection-step" aria-hidden="true">↑</span>Sharing with <span class="connection-count">${status.downstream.filter((peer) => peer.transport !== "DISCONNECTED").length}</span></h3>
              ${status.downstream.length ? status.downstream.map(peerRow) : b`<p class="connection-empty">No devices connected to you</p>`}
            </section>
          </div>
          ${status.roomPeers.length ? b`<details class="connection-details"><summary>Other peers in your room <span>${status.roomPeers.length}</span></summary><div>${status.roomPeers.map(peerRow)}</div></details>` : ""}
          <details class="connection-details">
            <summary>Fallback & discovery <span>${apiActive ? "API ACTIVE" : `${openRelays} RELAYS OPEN`}</span></summary>
            <div class="connection-source-row"><div><strong>Venue API</strong><code>${this.connectionEndpoint(status.api.origin)}</code></div><span class="connection-path ${apiActive ? "relay" : ""}">${apiActive ? "Active fallback" : status.api.polling ? "Polling" : "Standby"}</span></div>
            <dl class="connection-facts"><dt>Event stream</dt><dd>${status.api.stream.toLowerCase()}</dd><dt>Last API response</dt><dd>${this.connectionAge(status.api.lastSuccessAtMs ? Math.max(0, this.nowEpochMs - status.api.lastSuccessAtMs) : null)}</dd></dl>
            ${status.api.error ? b`<p class="connection-error">API · ${status.api.error}</p>` : ""}
            ${status.relays.map((relay) => b`<div class="connection-source-row"><code title=${relay.url}>${this.connectionEndpoint(relay.url)}</code><span class="connection-socket ${relay.state === "OPEN" ? "open" : ""}"><i></i>${relay.state.toLowerCase()}</span></div>`)}
            ${status.browserOnline === false ? b`<p class="connection-error">Browser reports no network connection</p>` : ""}
            ${status.p2pError ? b`<p class="connection-error">Last P2P error · ${status.p2pError}</p>` : ""}
          </details>
          <details class="connection-details connection-identity">
            <summary>${status.verified ? "✓ Signature verified" : "No verified signature"}<span>${status.verified ? `REV ${status.snapshotEpoch}` : "ED25519"}</span></summary>
            <dl class="connection-facts"><dt>Publisher</dt><dd><code>${status.publisher || "Not joined"}</code></dd>
              <dt>State published</dt><dd>${this.connectionAge(status.publishedAtMs ? Math.max(0, this.nowEpochMs - status.publishedAtMs) : null)}</dd>
              <dt>Direct / forwarded frames sent</dt><dd>${status.rtcFramesSent} / ${status.forwardedFramesSent}</dd>
              <dt>Room reconnects</dt><dd>${status.reconnectCount}</dd>
              ${status.rooms.map((room) => b`<dt>Room broker</dt><dd><code>${room.activeBroker || "Not connected"}</code> · ${room.brokerConnected ? "open" : "closed"}</dd>`)}
              <dt>App version</dt><dd><code>${status.serviceWorkerVersion || "Version unavailable"}</code></dd>
            </dl>
          </details>
          <div class="connection-footer"><span>Measured on this device</span><button type="button" @click=${async () => {
      try {
        await navigator.clipboard.writeText(JSON.stringify(this.sync.getConnectionStatus(), null, 2));
        this.connectionCopyStatus = "Copied";
      } catch {
        this.connectionCopyStatus = "Copy unavailable";
      }
    }}>${this.connectionCopyStatus || "Copy report"}</button></div>
        ` : ""}
      </dialog>
    `;
  }
  render() {
    const env = this.sync.publicView();
    const notifications = this.sync.computeWatchedAthleteNotifications();
    const topUrgent = notifications.find(
      (n3) => n3.urgency === "READY_UP_NEXT" || n3.urgency === "IN_PROGRESS"
    );
    const isLive = this.sync.getConnectionStatus(this.nowEpochMs).live;
    const hasTournament = Boolean(env.signature_hex);
    const isJoining = Boolean(this.sync.pinnedPublisherPubkeyHex || this.sync.pinnedTournamentId);
    const maxAssignedMat = env.bouts.reduce((m2, b2) => Math.max(m2, b2.assigned_mat_id || 0), 0);
    const matCount = Math.min(
      20,
      Math.max(0, env.mat_count, maxAssignedMat, ...env.mats.map((m2) => m2.mat_id))
    );
    const statusMessage = this.status?.freshness === "snapshot" ? `Offline snapshot loaded · revision ${this.status.snapshotEpoch}` : isLive ? `Connected · ${env.bouts.length} bouts across ${matCount} mats` : hasTournament ? `Saved schedule · ${env.bouts.length} bouts` : "Enter a tournament join key or open a tournament link to view live mats and brackets.";
    return b`
      <main class="players-shell">
        <header class="topbar">
          <div class="topbar-left">
            <div class="topbar-status-row">
              <button id="connection-toggle" type="button" class="status-badge ${isLive ? "live" : "idle"}"
                aria-label="Connection status" aria-haspopup="dialog" aria-expanded=${this.connectionPanelOpen}
                title="View connection status" @click=${this.openConnectionPanel}>
                <span class="live-pulse"></span>
                <span>${isLive ? "LIVE" : hasTournament ? "SAVED" : isJoining ? "CONNECTING" : "OFFLINE"}</span>
              </button>
              ${hasTournament ? b`
                    <span class="desktop-only-inline">
                      ${env.athletes.length} wrestlers · ${env.bouts.length} bouts · ${matCount} mats
                    </span>
                  ` : ""}
            </div>
            <h1 class="topbar-title">${this.status?.tournamentId || (hasTournament ? env.tournament_name : "Join a tournament")}</h1>
          </div>
          <div class="topbar-actions">
            <button
              type="button"
              id="btn-toggle-theme"
              class="btn-icon-pill"
              title="Switch between outdoor Daylight mode and Dark mode"
              @click=${this.toggleColorScheme}
            >
              <span>${this.colorScheme === "light" ? "Theme: Daylight" : "Theme: Dark"}</span>
            </button>
            <button
              type="button"
              class="btn-icon-pill ${this.sync.webPushState === "SUBSCRIBED_CELLULAR" ? "alerts-on" : ""}"
              @click=${this.toggleCellularWebPush}
            >
              <span>
                ${this.sync.webPushState === "SUBSCRIBED_CELLULAR" ? "Alerts: On" : this.sync.webPushState === "SUBSCRIBING" ? "Alerts..." : "Alerts: Off"}
              </span>
            </button>
            <button
              type="button"
              class="btn-icon-pill"
              @click=${() => {
      this.activeTab = "standings";
    }}
            >
              <span>Share</span>
            </button>
          </div>
        </header>
        ${this.renderConnectionPanel()}

        <p role="status" class="sr-status">
          ${statusMessage}
          ${this.sync.webPushStatusMessage ? b` · <strong>${this.sync.webPushStatusMessage}</strong>` : ""}
        </p>
        ${this.error || this.status?.warning ? b`<p role="alert">${this.error || this.status?.warning}</p>` : ""}

        ${!hasTournament ? b`
              <div class="join-bar" aria-label="Connect to Tournament">
                <div style="font-size: 13px; font-weight: 700;">
                  Connect to a live tournament:
                </div>
                <form
                  class="join-bar-form"
                  @submit=${(e2) => {
      e2.preventDefault();
      const res = this.sync.applyScannedTournamentJoinQr(this.qrScanInput);
      this.qrScanStatus = res.reason;
    }}
                >
                  <input
                    .value=${this.qrScanInput}
                    @input=${(e2) => {
      this.qrScanInput = e2.target.value;
    }}
                    aria-label="Tournament join key"
                    placeholder="Paste tournament join key or link..."
                    required
                  />
                  <button type="submit" class="btn-primary">Connect</button>
                </form>
              </div>
            ` : ""}

        ${this.activeTab !== "my-wrestlers" && topUrgent ? b`
              <div class="urgent-strip">
                <span>
                  <strong>${topUrgent.athleteName}</strong>: Mat ${topUrgent.matId} (${topUrgent.corner} Ankle)
                </span>
                <button
                  type="button"
                  style="min-height: 28px; padding: 3px 10px; font-size: 12px;"
                  @click=${() => this.jumpToMat(topUrgent.matId)}
                >
                  Open Mat ${topUrgent.matId}
                </button>
              </div>
            ` : ""}

        <nav class="bottom-nav" aria-label="Players App Navigation">
          <button
            type="button"
            class="nav-item ${this.activeTab === "my-wrestlers" ? "active" : ""}"
            @click=${() => {
      this.activeTab = "my-wrestlers";
    }}
          >
            <span>Wrestlers &amp; Roster (${this.sync.watchedAthleteIds.size})</span>
          </button>
          <button
            type="button"
            class="nav-item ${this.activeTab === "mats" ? "active" : ""}"
            @click=${() => {
      this.activeTab = "mats";
    }}
          >
            <span>Mats (${matCount})</span>
          </button>
          <button
            type="button"
            class="nav-item ${this.activeTab === "brackets" ? "active" : ""}"
            @click=${() => {
      this.activeTab = "brackets";
    }}
          >
            <span>Brackets</span>
          </button>
          <button
            type="button"
            class="nav-item ${this.activeTab === "standings" ? "active" : ""}"
            @click=${() => {
      this.activeTab = "standings";
    }}
          >
            <span>Standings &amp; Share</span>
          </button>
        </nav>

        ${this.activeTab === "my-wrestlers" ? this.renderMyWrestlersTab() : this.activeTab === "wrestler-profile" ? this.renderWrestlerProfileTab() : this.activeTab === "mats" ? this.renderMatsTab() : this.activeTab === "brackets" ? this.renderBracketsTab() : this.renderStandingsAndQrTab()}
      </main>
      <a class="tap-game-link" href=${(() => {
      const base = new URL(".", window.location.href);
      base.pathname = base.pathname.replace(/\/players\/$/, "/");
      const url = new URL("game/", base);
      const root = this.sync.pinnedPublisherPubkeyHex || (this.sync.envelope.signature_hex ? this.sync.envelope.publisher_pubkey_hex : "");
      const tid = this.sync.pinnedTournamentId || (this.sync.envelope.signature_hex ? this.sync.envelope.tournament_id : "");
      if (root) {
        const pin = new URLSearchParams();
        if (tid && tid !== "manual-pubkey") pin.set("session", `game:${tid}`);
        pin.set("root", root);
        url.hash = pin.toString();
      }
      return url.href;
    })()} title="Tap Battle" aria-label="Play Tap Battle" style="display:block;text-align:center;font-size:10px;color:var(--muted,#8996a6);padding:8px;opacity:.6;text-decoration:none">coral · mint</a>
    `;
  }
}
if (typeof customElements !== "undefined" && !customElements.get("openmat-app")) {
  customElements.define("openmat-app", OpenMatPlayersApp);
}
const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
if (/(?:^|\/)(?:officials|game)(?:\/|$)/.test(currentPath)) {
  void (async () => {
    try {
      if ("serviceWorker" in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map((r2) => r2.unregister()));
      }
      if (typeof caches !== "undefined") {
        const keys = await caches.keys();
        await Promise.all(keys.filter((k2) => k2.startsWith("openmat-players-")).map((k2) => caches.delete(k2)));
      }
    } catch {
    }
    window.location.reload();
  })();
} else if ("serviceWorker" in navigator) {
  const swUrl = "./offline.js";
  void navigator.serviceWorker.register(swUrl).catch(() => {
  });
}
export {
  ChannelClass as C,
  MUX_CHANNELS as M,
  TransportMultiplexer as T,
  __vitePreload as _,
  validateVenueTopic as a,
  bracketPacketScope as b,
  encodeVenueFrame as c,
  discoverVenueRecords as d,
  encodePacket as e,
  fromHex as f,
  decodeVenueFrame as g,
  packet as p,
  roomCapacity as r,
  toHex as t,
  verifyVenueRecord as v
};
