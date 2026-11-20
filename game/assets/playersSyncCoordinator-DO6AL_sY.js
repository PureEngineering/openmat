import{u as Hi,w as vt,v as Vi,f as le,b as Wi,s as Me,e as wi,a as Se,c as Si,d as Kt,g as ki,p as qi,h as ke,i as Gi,j as ji,k as Yi,r as zi,l as Ne,m as Ki,S as Ji,n as Jt,o as Qt,q as Qi,t as Xi,x as yt,y as Zi,z as es,A as ts,B as is,C as ss,D as ns,E as Ei,F as Xt,G as as,H as rs,I as os,J as we,K as Ke,L as xe,M as Vt,R as st,N as Ee,O as ls,P as gt,Q as wt,T as cs,U as ds,V as je,W as Ii,X as Ye,Y as He,Z as Ve,_ as Oe,$ as Ie,a0 as dt,a1 as _t,a2 as he,a3 as _s,a4 as xt,a5 as Tt,a6 as ht,a7 as z,a8 as K,a9 as Zt,aa as hs,ab as us,ac as ms,ad as ps,ae as Nt,af as Le,ag as fs,ah as Ri,ai as qe,aj as gs,ak as Ae,al as bs,am as vs,an as Pt,ao as ei,ap as Bt,aq as nt,ar as ys,as as ws,at as Ss,au as ks,av as Es}from"./game-kylNZwBm.js";class ut{constructor(e,i){this.tournamentId=e,this.publisherHex=i}tournamentId;publisherHex;summary;brackets=new Map;eventlogs=new Map;boutRevisions=new Map;pendingEventlogs=new Map;mats=new Map;receivedAtMs=0;heads=new Map;boutRevision(e,i){return this.boutRevisions.get(`${e.bracket_id}:${i}`)??e.revision}eventlog(e,i){return this.eventlogs.get(e)?.get(i)}setEventlog(e,i,t,n){let s=this.eventlogs.get(e);s||this.eventlogs.set(e,s=new Map),(s.get(i)?.revision??0)<=t&&s.set(i,{revision:t,words:n})}applyBracketEventlogs(e,i){if(e.bracket_index!==i.bracket_index||e.revision!==i.revision)return;const t=Hi(vt(i.eventlog_words),i.bracket_index);if(t.length!==e.bouts.length)throw new Error("Bracket eventlog bout count mismatch");for(const[n,s]of e.bouts.entries())this.setEventlog(e.bracket_id,s.match_id,i.revision,t[n])}apply(e,i){const t=Vi(e,i,le(this.publisherHex),this.tournamentId),n=Wi(e,i),s=Me(wi(e,t)),a=t.revision,r=this.heads.get(n);if(r&&a<r.revision)return!1;if(r&&a===r.revision){if(!Se(s,r.digest))throw new Error("Conflicting signed state at the same revision");return!1}if(e==="tournament-summary"){this.summary=t;for(const[o,l]of this.brackets){const c=this.summary.brackets.find(d=>d.bracket_id===o);if(!c||c.bracket_index!==l.bracket_index){this.brackets.delete(o),this.eventlogs.delete(o),this.pendingEventlogs.delete(o);for(const d of this.boutRevisions.keys())d.startsWith(`${o}:`)&&this.boutRevisions.delete(d)}}}else if(e==="mat-board"){for(const o of t.mats){const l=this.mats.get(o.mat_id);(!l||o.revision>=l.revision)&&this.mats.set(o.mat_id,o)}for(const[o,l]of this.mats)l.revision<=a&&!t.mats.some(c=>c.mat_id===o)&&this.mats.delete(o)}else if(e==="mat-update"){const o=t,l=this.mats.get(o.mat_id);if(l&&l.revision>a||!l&&a<=(this.heads.get("mat-board")?.revision??0))return!1;this.mats.set(o.mat_id,o)}else if(e==="bout-update"){const o=t,l=this.brackets.get(o.bracket_id);if(!l||l.bracket_index!==o.bracket_index)throw new Error("Full bracket required before bout delta");if(a<l.revision)return!1;const c=l.bouts.find(_=>_.local_number===o.bout.local_number);if(!c||c.match_id!==o.bout.match_id)throw new Error("Bracket dictionary changed; full bracket required");const d=new Set([0,...l.athletes.map(_=>_.slot)]);if(![o.bout.red_slot,o.bout.green_slot,o.bout.winner_slot,o.bout.loser_slot].every(_=>d.has(_)))throw new Error("Unknown athlete slot in delta");this.brackets.set(o.bracket_id,{...l,bouts:l.bouts.map(_=>_.local_number===o.bout.local_number?o.bout:_)}),this.boutRevisions.set(`${o.bracket_id}:${o.bout.local_number}`,a),this.setEventlog(o.bracket_id,o.bout.match_id,a,vt(o.eventlog_words))}else if(e==="bracket-eventlog"){const o=t,l=this.brackets.get(o.bracket_id);if((l?.revision??0)>a)return!1;l?.revision===a?this.applyBracketEventlogs(l,o):this.pendingEventlogs.set(o.bracket_id,o)}else{const o=e==="bracket-full"?t.state:t;if((this.brackets.get(o.bracket_id)?.revision??0)>a)return!1;const l=this.summary?.brackets.find(m=>m.bracket_id===o.bracket_id);if(l&&(l.bracket_index!==o.bracket_index||l.revision===a&&!Se(l.state_sha256,Me(Si(o)))))throw new Error("Bracket directory hash/identity mismatch");const c=this.brackets.get(o.bracket_id),d=o.bouts.map(m=>{const v=c?.bracket_index===o.bracket_index?c.bouts.find(f=>f.local_number===m.local_number&&f.match_id===m.match_id):void 0;if(!v||!Se(Kt(v),Kt(m))){const f=`${o.bracket_id}:${m.local_number}`;this.boutRevisions.set(f,Math.max(a,this.boutRevisions.get(f)??0))}const u=this.heads.get(`bout-update:${o.bracket_id}:${m.local_number}`);return u&&u.revision>a&&c?.bracket_index===o.bracket_index?c.bouts.find(f=>f.local_number===m.local_number&&f.match_id===m.match_id)??m:m}),_=this.pendingEventlogs.get(o.bracket_id);_&&_.revision<=a&&(this.applyBracketEventlogs(o,_),this.pendingEventlogs.delete(o.bracket_id)),e==="bracket-full"&&this.applyBracketEventlogs(o,{...o,eventlog_words:t.eventlog_words}),this.brackets.set(o.bracket_id,{...o,bouts:d})}return this.heads.set(n,{revision:a,digest:s}),this.receivedAtMs=Date.now(),!0}}const Is=["EVENT_NONE","EVENT_BOUT_ASSIGN","EVENT_DISK_TOSS_RED","EVENT_DISK_TOSS_GREEN","EVENT_CLOCK_START","EVENT_CLOCK_STOP","EVENT_ADVANCE_PERIOD","EVENT_RED_CHOICE_TOP","EVENT_RED_CHOICE_BOTTOM","EVENT_RED_CHOICE_NEUTRAL","EVENT_RED_CHOICE_DEFER","EVENT_GREEN_CHOICE_TOP","EVENT_GREEN_CHOICE_BOTTOM","EVENT_GREEN_CHOICE_NEUTRAL","EVENT_GREEN_CHOICE_DEFER","EVENT_RED_TAKEDOWN_3","EVENT_RED_ESCAPE_1","EVENT_RED_REVERSAL_2","EVENT_RED_NF_2","EVENT_RED_NF_3","EVENT_RED_NF_4","EVENT_RED_NF_INJ4","EVENT_RED_CAUTION","EVENT_RED_STALLING","EVENT_RED_TECH_VIOLATION","EVENT_RED_ILLEGAL_HOLD","EVENT_RED_ROUGHNESS","EVENT_RED_UNSPORTSMANLIKE","EVENT_RED_COACH_UNSPORTSMANLIKE","EVENT_RED_FLAGRANT","EVENT_GREEN_TAKEDOWN_3","EVENT_GREEN_ESCAPE_1","EVENT_GREEN_REVERSAL_2","EVENT_GREEN_NF_2","EVENT_GREEN_NF_3","EVENT_GREEN_NF_4","EVENT_GREEN_NF_INJ4","EVENT_GREEN_CAUTION","EVENT_GREEN_STALLING","EVENT_GREEN_TECH_VIOLATION","EVENT_GREEN_ILLEGAL_HOLD","EVENT_GREEN_ROUGHNESS","EVENT_GREEN_UNSPORTSMANLIKE","EVENT_GREEN_COACH_UNSPORTSMANLIKE","EVENT_GREEN_FLAGRANT","EVENT_NEAR_FALL_BEGIN","EVENT_NEAR_FALL_END","EVENT_AUX_START_INJURY_RED","EVENT_AUX_START_INJURY_GREEN","EVENT_AUX_START_BLOOD_RED","EVENT_AUX_START_BLOOD_GREEN","EVENT_AUX_START_RECOVERY_RED","EVENT_AUX_START_RECOVERY_GREEN","EVENT_AUX_START_HNC_RED","EVENT_AUX_START_HNC_GREEN","EVENT_AUX_STOP_INJURY_RED","EVENT_AUX_STOP_INJURY_GREEN","EVENT_AUX_STOP_BLOOD_RED","EVENT_AUX_STOP_BLOOD_GREEN","EVENT_AUX_STOP_RECOVERY_RED","EVENT_AUX_STOP_RECOVERY_GREEN","EVENT_AUX_STOP_HNC_RED","EVENT_AUX_STOP_HNC_GREEN","EVENT_RED_FALL","EVENT_GREEN_FALL","EVENT_RED_INJURY_DEFAULT","EVENT_GREEN_INJURY_DEFAULT","EVENT_RED_FORFEIT","EVENT_GREEN_FORFEIT","EVENT_RED_MED_FORFEIT","EVENT_GREEN_MED_FORFEIT","EVENT_SIMULTANEOUS_PENALTY","EVENT_UNDO","EVENT_CONFIRM_RESULT","EVENT_CONFIRM_PROTEST"],Ci=[null,{kind:0,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:1,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:1,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:6,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:7,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:9,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:0,scoring:1,choice:1,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:0,scoring:1,choice:2,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:0,scoring:1,choice:4,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:1,scoring:1,choice:1,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:1,scoring:1,choice:2,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:1,scoring:1,choice:4,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:2,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:3,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:4,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:5,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:6,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:7,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:8,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:9,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:10,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:11,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:12,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:13,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:14,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:15,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:2,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:3,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:4,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:5,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:6,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:7,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:8,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:9,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:10,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:11,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:12,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:13,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:14,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:15,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:4,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:5,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:15,corner:0,scoring:1,choice:3,timer:1,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Injury"},{kind:15,corner:0,scoring:1,choice:3,timer:2,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Injury"},{kind:15,corner:0,scoring:1,choice:3,timer:3,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Blood"},{kind:15,corner:0,scoring:1,choice:3,timer:4,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Blood"},{kind:15,corner:0,scoring:1,choice:3,timer:5,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!0,reason:"Recovery"},{kind:15,corner:0,scoring:1,choice:3,timer:6,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!0,reason:"Recovery"},{kind:15,corner:0,scoring:1,choice:3,timer:7,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!0,infraction_caused:!1,reason:"HNC"},{kind:15,corner:0,scoring:1,choice:3,timer:8,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!0,infraction_caused:!1,reason:"HNC"},{kind:16,corner:0,scoring:1,choice:3,timer:1,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:2,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:3,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:4,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:5,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:6,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:7,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:8,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:10,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:2500,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:10,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:2500,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:11,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:11,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:12,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:12,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:13,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:13,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:20,corner:0,scoring:11,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:14,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Undo"},{kind:17,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Confirmed"},{kind:17,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!0,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Protest"}],Rs=33554431;function Cs(h){return Array.from(h.subarray(1),e=>{const i=Is[e&127];if(!i||i==="EVENT_NONE")throw new Error("Unknown packed mat event");return{elapsedMs:(e>>>7)*100,event:i}})}function ti(h){const e=h.kind===1?["corner"]:h.kind===2?["corner","scoring"]:h.kind===3?["corner","choice"]:[10,11,12,13].includes(Number(h.kind))?["corner"]:[15,16,19].includes(Number(h.kind))?["timer"]:h.kind===17?["under_protest"]:[];return JSON.stringify([h.kind===19?16:h.kind,...e.map(i=>h[i])])}function Ot(h,e){if(!Number.isInteger(e)||e<0||e>Rs||h.occurred_monotonic_ns!=null||[16,19].includes(Number(h.kind))&&!h.can_continue||h.kind===20&&h.scoring!==11||h.kind===10&&Number(h.pin_observed_ms)<2e3||h.kind===15&&([5,6].includes(Number(h.timer))&&!h.infraction_caused||[7,8].includes(Number(h.timer))&&!h.healthcare_present))throw new Error("Command requires the signed journal");const i=ti(h),t=Ci.findIndex(n=>n&&ti(n)===i);if(t<1)throw new Error("Unsupported atomic command");return e*128+t>>>0}new TextEncoder;new TextDecoder;function ii(h){let e="";for(let t=0;t<h.byteLength;t++)e+=String.fromCharCode(h[t]);return(typeof btoa=="function"?btoa(e):Buffer.from(h).toString("base64")).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")}function As(h){const e=h.replace(/-/g,"+").replace(/_/g,"/").padEnd(Math.ceil(h.length/4)*4,"=");if(typeof atob=="function"){const i=atob(e),t=new Uint8Array(i.length);for(let n=0;n<i.length;n++)t[n]=i.charCodeAt(n);return t}return new Uint8Array(Buffer.from(e,"base64"))}const Ms=["","DEC","MD","TF","FALL","DQ","INJURY_DEFAULT","FORFEIT","MEDICAL_FORFEIT"];function St(h,e){const i=t=>t.lifecycle>E.Ready?0:t.lifecycle===E.Ready?1:2;return i(h)-i(e)||(h.mat_queue_order||1/0)-(e.mat_queue_order||1/0)||h.bout_number-e.bout_number}const xs=["TAKEDOWN_3","ESCAPE_1","REVERSAL_2","NEAR_FALL_2","NEAR_FALL_3","NEAR_FALL_4","NEAR_FALL_INJURY_OR_SCREAMING_4","CAUTION","STALLING","TECHNICAL_VIOLATION","ILLEGAL_HOLD","UNNECESSARY_ROUGHNESS","UNSPORTSMANLIKE_WRESTLER","UNSPORTSMANLIKE_COACH","FLAGRANT_MISCONDUCT"],Ts=["TOP","BOTTOM","NEUTRAL","DEFER"],Ns=["MATCH_PERIOD","INJURY_RED","INJURY_GREEN","BLOOD_RED","BLOOD_GREEN","RECOVERY_RED","RECOVERY_GREEN","HEAD_NECK_RED","HEAD_NECK_GREEN"];function Ps(h,e){const i=t=>t==="RED"?0:t==="GREEN"?1:-1;switch(h.event_type){case"MATCH_CLOCK_TOGGLE":return{kind:e.clock_action==="START"?6:e.clock_action==="STOP"?7:-1};case"MATCH_DISK_TOSS":return{kind:1,corner:i(e.actor)};case"MATCH_PERIOD_CHOICE":return{kind:3,corner:i(e.chooser),choice:Ts.indexOf(String(e.decision))+1};case"MATCH_SCORING_ACTION":{const t=e.public_state;if(Number(e.manual_delta??0)!==0||t&&t.bout_ended!==!0&&Math.abs(Number(t.red_score)-Number(t.green_score))>=15)throw new Error("Score needs the signed journal");return{kind:2,corner:i(e.actor),scoring:xs.indexOf(String(e.action))+1}}case"MATCH_MEDICAL_DECISION":return{kind:e.start===!0?15:16,timer:Ns.indexOf(String(e.timer)),can_continue:e.can_continue===!0,healthcare_present:e.healthcare_present===!0,infraction_caused:e.infraction_caused===!0};case"MATCH_ADVANCE_PERIOD":return{kind:9};case"MATCH_CONFIRM_RESULT":return{kind:17,under_protest:e.under_protest===!0};case"MATCH_ENDING_ACTION":return{kind:{FALL:10,INJURY_DEFAULT:11,FORFEIT:12,MEDICAL_FORFEIT:13}[String(e.ending_type)]??-1,corner:i(e.actor),pin_observed_ms:String(e.ending_type)==="FALL"?Math.max(2e3,Number(e.fall_time_ms??0)):Number(e.fall_time_ms??0)};default:throw new Error("Command needs the signed journal")}}function Bs(h=[]){const e=h[0];if(!e)return new Uint8Array;const i=[Math.floor(e.audit_time_ms/1e3)];let t=e.monotonic_time_ns,n=0,s,a,r;try{if(!Number.isSafeInteger(i[0])||i[0]<0||i[0]>4294967295)return new Uint8Array;const o=h.some(l=>l.event_type!=="MATCH_COMMAND");o&&i.push(Ot(Ci[1],0));for(const l of h){if(l.boot_id!==e.boot_id||l.monotonic_time_ns<t)return new Uint8Array;let c=Math.floor((l.monotonic_time_ns-e.monotonic_time_ns)/1e8);const d=l.payload instanceof Uint8Array?ke(l.payload):l.payload,_=o?Ps(l,d):d.command;if(!_||!o&&i.length===1&&_.kind!==0)return new Uint8Array;const m=d.public_state??d.projection,v=Array.isArray(m?.timers)?m.timers[0]:void 0,u=Number(m?.clock_remaining_ms??v?.remaining_ms);if(o&&d.auto_start_clock===!0&&(i.push(Ot({kind:6},c)),s=c,a=l.monotonic_time_ns,r=u),[2,4,5,10].includes(Number(_.kind))&&s!==void 0&&a!==void 0&&Number.isFinite(r)&&l.monotonic_time_ns-a<r*1e6){const f=s+Math.ceil(r/100);if(c>=f){if(f<=n)return new Uint8Array;c=f-1}}if(c<n)return new Uint8Array;i.push(Ot(_,c)),_.kind===6?(s=c,a=l.monotonic_time_ns,r=u):(_.kind===7||_.kind===9)&&(s=a=r=void 0),t=l.monotonic_time_ns,n=c}return ki(i)}catch{return new Uint8Array}}function Os(h,e,i,t,n){const s=h.tournament_id,a=Math.max(h.snapshot_epoch,h.control_sequence_head),r={tournament_id:s,revision:a},o=new Map,l=(g,k,I="",R=0)=>{const M=wi(g,{...k,revision:1,...g==="bracket-full"?{state:{...k.state,revision:1}}:{},...g==="mat-board"?{mats:k.mats.map(y=>({...y,revision:1}))}:{}});let L;o.set(`${g}:${I}:${R}`,{topic:g,bracketId:I,content:M,get bytes(){return L??=Gi(g,k,i)}})},c=new Map(h.athletes.map(g=>[g.team_id,g.team_name])),d=new Map(h.standings.map(g=>[g.team_id,g.total_points])),_=[...c.keys()].sort().map((g,k)=>({index:k+1,team_id:g,name:c.get(g),half_points:Math.max(0,Math.round((d.get(g)??0)*2))})),m=new Map(_.map(g=>[g.team_id,g.index])),v=new Map,u=new Map;for(const g of h.bouts){const k=v.get(g.bracket_id)??[];if(k.push(g),v.set(g.bracket_id,k),g.assigned_mat_id>0&&g.lifecycle>=E.Assigned&&g.lifecycle<=E.LocallyConfirmed&&g.red_athlete_id&&g.green_athlete_id&&!g.is_bye){const I=u.get(g.assigned_mat_id)??[];I.push(g),u.set(g.assigned_mat_id,I)}}for(const g of u.values())g.sort(St);const f=[],p=[],b=n.size?Math.floor(Math.min(...[...n.values()].map(g=>g[0].audit_time_ms))/1e3):0;for(const[g,k]of[...v.keys()].sort().entries()){const I=v.get(k).sort((A,H)=>A.match_id.localeCompare(H.match_id)),R=I[0],M=(R.division_id||"VARSITY").toUpperCase(),L={GIRLS:2,JV:3,NOVICE:3,U16:4}[M]??1,y=ot(M),C=ot(L===2?"VARSITY":"GIRLS"),P=y.indexOf(R.weight_class_id),O=C.indexOf(R.weight_class_id),w=P>=0?P:O>=0?O:0,x=new Set(I.flatMap(A=>[A.red_athlete_id,A.green_athlete_id,A.winner_athlete_id,A.loser_athlete_id])),S=h.athletes.filter(A=>x.has(A.athlete_id)||A.weight_class_id===R.weight_class_id&&(A.division_id||"VARSITY").toUpperCase()===M).sort((A,H)=>A.athlete_id.localeCompare(H.athlete_id)),D=S.map((A,H)=>({slot:H+1,team_index:m.get(A.team_id),seed_rank:A.seed_rank,state:A.check_in_stage>=6?3:A.check_in_stage>=2?2:1,public_stage:A.check_in_stage,display_name:A.public_display_name,athlete_id:A.athlete_id})),F=new Map(D.map(A=>[A.athlete_id,A.slot])),N=new Map(I.map((A,H)=>[A.match_id,H+1])),V=new Uint8Array(8),W=[],B=I.map((A,H)=>{const q=Bs(n.get(A.match_id));W.push(q.length?vt(q):Uint32Array.of(0));const G={local_number:H+1,bout_number:A.bout_number,round_index:A.round_index,flags:Number(A.is_consolation)|Number(A.is_placement_bout)<<1|Number(A.is_true_second_challenge)<<2|Number(A.is_bye)<<3|(A.winner_athlete_id&&A.winner_athlete_id===A.green_athlete_id?16:0),placement_rank:A.placement_rank,red_slot:F.get(A.red_athlete_id)??0,green_slot:F.get(A.green_athlete_id)??0,winner_slot:F.get(A.winner_athlete_id)??0,loser_slot:F.get(A.loser_athlete_id)??0,winner_next:N.get(A.winner_next_match_id)??0,loser_next:N.get(A.loser_next_match_id)??0,edge_flags:0,lifecycle:A.lifecycle-1,win_type:A.win_type==="BYE"?7:Math.max(0,Ms.indexOf(A.win_type)),red_score:A.red_score,green_score:A.green_score,period:A.period_number,clock_remaining_ds:Math.floor(A.clock_remaining_ms/100),mat_id:A.assigned_mat_id,assignment_revision:A.assignment_revision,completed_offset_sec:Math.floor(A.completed_at_ms/1e3),match_id:A.match_id,eventlog_available:+(q.length>0)};l("bout-update",{...r,bracket_id:k,bracket_index:g,bout:G,eventlog_words:q},k,G.local_number),A.is_placement_bout&&!A.is_true_second_challenge&&A.placement_rank>=1&&A.placement_rank<=7&&G.winner_slot&&(V[A.placement_rank-1]=G.winner_slot,V[A.placement_rank]=G.loser_slot);const ee=u.get(A.assigned_mat_id);return ee?.[0]===A&&f.push({...r,bracket_id:k,bracket_index:g,mat_id:G.mat_id,local_number:G.local_number,bout_number:G.bout_number,red_slot:G.red_slot,green_slot:G.green_slot,red_score:G.red_score,green_score:G.green_score,period:G.period,clock_remaining_ds:G.clock_remaining_ds,clock_running:Number(A.clock_running),eventlog_words:q,on_deck:ee[1]?.bout_number??0,in_the_hole:ee[2]?.bout_number??0}),G}),U=R.format===J.RoundRobinPool?5:R.format===J.PoolToBracket?6:R.format===J.TeamDual?7:S.length<=8?1:S.length<=16?2:S.length<=32?3:4,$={...r,bracket_id:k,bracket_index:g,division:L,weight_index:w,format:U,athletes:D,bouts:B,placement_slots:V};l("bracket-state",$,k);const j=ki(qi(g,b,W));l("bracket-full",{...r,bracket_id:k,state:$,eventlog_words:j},k),p.push({bracket_id:k,bracket_index:g,division:L,weight_index:w,revision:a,eventlog_word_count:j.length/4,state_sha256:Me(Si($)),weight_class_id:R.weight_class_id})}f.sort((g,k)=>g.mat_id-k.mat_id);for(const g of f)l("mat-update",g,g.bracket_id,g.mat_id);return l("mat-board",{...r,mats:f}),l("tournament-summary",{...r,base_epoch_utc:b,mat_count:h.mat_count,rules_hash:t,authority_public_key:e,teams:_,brackets:p}),o}const si=(h,e)=>(h+(h>=0?e:-e)/Ds)/e;function Ls(h,e,i){Zi("scalar",h,Ge,i);const[[t,n],[s,a]]=e,r=si(a*h,i),o=si(-n*h,i);let l=h-r*t-o*s,c=-r*n-o*a;const d=l<Ge,_=c<Ge;d&&(l=-l),_&&(c=-c);const m=es(Math.ceil(ts(i)/2))+at;if(l<Ge||l>=m||c<Ge||c>=m)throw new Error("splitScalar (endomorphism): failed for k");return{k1neg:d,k1:l,k2neg:_,k2:c}}const Ge=BigInt(0),at=BigInt(1),Ds=BigInt(2),Lt=BigInt(3),Fs=BigInt(4);function Us(h,e={}){const i=ji("weierstrass",h,e),t=i.Fp,n=i.Fn;let s=i.CURVE;const{h:a,n:r}=s;Yi(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",randomBytes:"function"});const{endo:o,allowInfinityPoint:l,clearCofactor:c,isTorsionFree:d,fromBytes:_,toBytes:m}=e,v=e.randomBytes===void 0?zi:e.randomBytes;if(o&&(!t.is0(s.a)||typeof o.beta!="bigint"||!Array.isArray(o.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const u=o?{beta:o.beta,basises:o.basises.map(W=>[...W])}:void 0,f=Hs(t,n);function p(){if(!t.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function b(W,B,U){if(B.is0()){if(!l)throw new Error("bad point: ZERO");return Uint8Array.of(0)}const{x:$,y:j}=B.toAffine(),A=t.toBytes($);if(Qt(U,"isCompressed"),U){p();const H=!t.isOdd(j);return yt($s(H),A)}else return yt(Uint8Array.of(4),A,t.toBytes(j))}function g(W){Ne(W,void 0,"Point");const{publicKey:B,publicKeyUncompressed:U}=f,$=W.length,j=W[0],A=W.subarray(1);if(l&&$===1&&j===0)return{x:t.ZERO,y:t.ZERO};if($===B&&(j===2||j===3)){const H=t.fromBytes(A);if(!t.isValid(H))throw new Error("bad point: is not on curve, wrong x");const q=L(H);let G;try{G=t.sqrt(q)}catch(ce){const me=ce instanceof Error?": "+ce.message:"";throw new Error("bad point: is not on curve, sqrt error"+me)}p();const ee=t.isOdd(G);return(j&1)===1!==ee&&(G=t.neg(G)),{x:H,y:G}}else if($===U&&j===4){const H=t.BYTES,q=t.fromBytes(A.subarray(0,H)),G=t.fromBytes(A.subarray(H,H*2));if(!y(q,G))throw new Error("bad point: is not on curve");return{x:q,y:G}}else throw new Error(`bad point: got length ${$}, expected compressed=${B} or uncompressed=${U}`)}const k=m===void 0?b:m,I=_===void 0?g:_,R=t.mul(s.b,Lt),M=t.is0(s.a)?W=>t.ZERO:W=>t.mul(s.a,W);function L(W){const B=t.sqr(W),U=t.mul(B,W);return t.add(t.add(U,t.mul(W,s.a)),s.b)}function y(W,B){const U=t.sqr(B),$=L(W);return t.eql(U,$)}if(!y(s.Gx,s.Gy))throw new Error("bad curve params: generator point");const C=t.mul(t.pow(s.a,Lt),Fs),P=t.mul(t.sqr(s.b),BigInt(27));if(t.is0(t.add(C,P)))throw new Error("bad curve params: a or b");function O(W,B,U=!1){if(!t.isValid(B)||U&&t.is0(B))throw new Error(`bad point coordinate ${W}`);return typeof B=="object"&&B!==null?t.create(B):B}function w(W){if(!(W instanceof F))throw new Error("Weierstrass Point expected")}function x(W){if(!u||!u.basises)throw new Error("no endo");return Ls(W,u.basises,n.ORDER)}function S(W,B,U,$){if(!n.isValid($))throw new RangeError("invalid scalar: out of range");if(u){const{k1neg:j,k1:A,k2neg:H,k2:q}=x($),G=new F(t.mul(U.X,u.beta),U.Y,U.Z);W.push(j?U.negate():U,H?G.negate():G),B.push(A,q)}else W.push(U),B.push($)}const D=new WeakSet;class F{static BASE=new F(s.Gx,s.Gy,t.ONE);static ZERO=new F(t.ZERO,t.ONE,t.ZERO);static Fp=t;static Fn=n;X;Y;Z;constructor(B,U,$){this.X=O("x",B),this.Y=O("y",U,!0),this.Z=O("z",$),Object.freeze(this)}static CURVE(){return s}static fromAffine(B){const{x:U,y:$}=B||{};if(!B||!t.isValid(U)||!t.isValid($))throw new Error("invalid affine point");if(B instanceof F)throw new Error("projective point not allowed");return t.is0(U)&&t.is0($)?F.ZERO:new F(U,$,t.ONE)}static fromBytes(B){const U=F.fromAffine(I(Ne(B,void 0,"point")));return U.assertValidity(),U}static fromHex(B){return F.fromBytes(Ki(B))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(B=6,U=!0){return V.setWindowSize(this,B),U||this.multiply(Lt),this}assertValidity(){const B=this;if(B.is0()){if(l&&t.is0(B.X)&&t.eql(B.Y,t.ONE)&&t.is0(B.Z))return;throw new Error("bad point: ZERO")}if(D.has(B))return;const{x:U,y:$}=B.toAffine();if(!t.isValid(U)||!t.isValid($))throw new Error("bad point: x or y not field elements");if(!y(U,$))throw new Error("bad point: equation left != right");if(!B.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");D.add(B)}hasEvenY(){const{y:B}=this.toAffine();if(!t.isOdd)throw new Error("Field doesn't support isOdd");return!t.isOdd(B)}equals(B){w(B);const{X:U,Y:$,Z:j}=this,{X:A,Y:H,Z:q}=B,G=t.eql(t.mul(U,q),t.mul(A,j)),ee=t.eql(t.mul($,q),t.mul(H,j));return G&&ee}negate(){return new F(this.X,t.neg(this.Y),this.Z)}double(){const{X:B,Y:U,Z:$}=this;let j=t.ZERO,A=t.ZERO,H=t.ZERO,q=t.mul(B,B),G=t.mul(U,U),ee=t.mul($,$),ie=t.mul(B,U);return ie=t.add(ie,ie),H=t.mul(B,$),H=t.add(H,H),j=M(H),A=t.mul(R,ee),A=t.add(j,A),j=t.sub(G,A),A=t.add(G,A),A=t.mul(j,A),j=t.mul(ie,j),H=t.mul(R,H),ee=M(ee),ie=t.sub(q,ee),ie=M(ie),ie=t.add(ie,H),H=t.add(q,q),q=t.add(H,q),q=t.add(q,ee),q=t.mul(q,ie),A=t.add(A,q),ee=t.mul(U,$),ee=t.add(ee,ee),q=t.mul(ee,ie),j=t.sub(j,q),H=t.mul(ee,G),H=t.add(H,H),H=t.add(H,H),new F(j,A,H)}add(B){w(B);const{X:U,Y:$,Z:j}=this,{X:A,Y:H,Z:q}=B;let G=t.ZERO,ee=t.ZERO,ie=t.ZERO,ce=t.mul(U,A),me=t.mul($,H),ae=t.mul(j,q),de=t.add(U,$),X=t.add(A,H);de=t.mul(de,X),X=t.add(ce,me),de=t.sub(de,X),X=t.add(U,j);let pe=t.add(A,q);return X=t.mul(X,pe),pe=t.add(ce,ae),X=t.sub(X,pe),pe=t.add($,j),G=t.add(H,q),pe=t.mul(pe,G),G=t.add(me,ae),pe=t.sub(pe,G),ie=M(X),G=t.mul(R,ae),ie=t.add(G,ie),G=t.sub(me,ie),ie=t.add(me,ie),ee=t.mul(G,ie),me=t.add(ce,ce),me=t.add(me,ce),ae=M(ae),X=t.mul(R,X),me=t.add(me,ae),ae=t.sub(ce,ae),ae=M(ae),X=t.add(X,ae),ce=t.mul(me,X),ee=t.add(ee,ce),ce=t.mul(pe,X),G=t.mul(de,G),G=t.sub(G,ce),ce=t.mul(de,me),ie=t.mul(pe,ie),ie=t.add(ie,ce),new F(G,ee,ie)}subtract(B){return w(B),this.add(B.negate())}is0(){return this.equals(F.ZERO)}multiply(B){if(!n.isValidNot0(B))throw new RangeError("invalid scalar: out of range");const{p:U,f:$}=V.mulSecret(this,B,a,N);return N([U,$])[0]}multiplyUnsafe(B){const U=this,$=B;if(!n.isValid($))throw new RangeError("invalid scalar: out of range");if($===Ge||U.is0())return F.ZERO;if($===at)return U;if(V.hasWindowSize(this))return V.mulUnsafe(U,$,N);const j=[],A=[];return S(j,A,U,$),Jt(F,j,A)}mulAddUnsafe(B,U,$){w(U);const j=[],A=[];return S(j,A,this,B),S(j,A,U,$),Jt(F,j,A)}toAffine(B){const U=this;let $=B;if($!=null&&!t.isValid($))throw new RangeError('"invertedZ" expected valid field element');const{X:j,Y:A,Z:H}=U;if(t.eql(H,t.ONE))return{x:j,y:A};const q=U.is0();$==null&&($=q?t.ONE:t.inv(H));const G=t.mul(j,$),ee=t.mul(A,$),ie=t.mul(H,$);if(q)return{x:t.ZERO,y:t.ZERO};if(!t.eql(ie,t.ONE))throw new Error("invZ was invalid");return{x:G,y:ee}}isTorsionFree(){return a===at?!0:d?d(F,this):V.mulUnsafe(this,r).is0()}clearCofactor(){return a===at?this:c?c(F,this):this.multiplyUnsafe(a)}isSmallOrder(){return a===at?this.is0():this.clearCofactor().is0()}toBytes(B=!0){return Qt(B,"isCompressed"),this.assertValidity(),k(F,this,B)}toHex(B=!0){return Qi(this.toBytes(B))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}const N=W=>Xi(F,W),V=new Ji(F,v);return V.bits>=6&&F.BASE.precompute(6),Object.freeze(F.prototype),Object.freeze(F),F}function $s(h){return Uint8Array.of(h?2:3)}function Hs(h,e){return{secretKey:e.BYTES,publicKey:1+h.BYTES,publicKeyUncompressed:1+2*h.BYTES,publicKeyHasPrefix:!0,signature:2*e.BYTES}}const Rt={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},Vs={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},Ws=BigInt(0),ni=BigInt(2);function qs(h){const e=Rt.p,i=BigInt(3),t=BigInt(6),n=BigInt(11),s=BigInt(22),a=BigInt(23),r=BigInt(44),o=BigInt(88),l=h*h*h%e,c=l*l*h%e,d=we(c,i,e)*c%e,_=we(d,i,e)*c%e,m=we(_,ni,e)*l%e,v=we(m,n,e)*m%e,u=we(v,s,e)*v%e,f=we(u,r,e)*u%e,p=we(f,o,e)*f%e,b=we(p,r,e)*u%e,g=we(b,i,e)*c%e,k=we(g,a,e)*v%e,I=we(k,t,e)*l%e,R=we(I,ni,e);if(!Qe.eql(Qe.sqr(R),h))throw new Error("Cannot find square root");return R}const Qe=os(Rt.p,{sqrt:qs}),Ze=Us(Rt,{Fp:Qe,endo:Vs}),ai=Object.create(null);function kt(h,...e){let i=ai[h];if(i===void 0){const t=Xt(as(h));i=yt(t,t),ai[h]=i}return Xt(yt(i,...e))}const Ai=h=>h.toBytes(!0).slice(1),Mi=({x:h})=>Qe.toBytes(h),Ct=h=>!Qe.isOdd(h);function xi(h){const{Fn:e,BASE:i}=Ze,t=e.fromBytes(Ne(h,32,"secretKey")),s=i.multiply(t).toAffine();return{scalar:Ct(s.y)?t:e.neg(t),bytes:Mi(s)}}function Ti(h){const e=Qe;if(!e.isValidNot0(h))throw new Error("invalid x: Fail if x ≥ p");const i=e.sqr(h),t=e.add(e.mulN(i,h),BigInt(7));let n=e.sqrt(t);Ct(n)||(n=e.neg(n));const s=Ze.fromAffine({x:h,y:n});return s.assertValidity(),s}const Je=ss;function Ni(...h){return Ze.Fn.create(Je(kt("BIP0340/challenge",...h)))}function ri(h){return xi(h).bytes}function Gs(h,e,i=Ei(32)){const{Fn:t,BASE:n}=Ze,s=ns(Ne(h,void 0,"message")),{bytes:a,scalar:r}=xi(e),o=Ne(i,32,"auxRand"),l=t.toBytes(r^Je(kt("BIP0340/aux",o))),c=kt("BIP0340/nonce",l,a,s),d=t.create(Je(c));if(d===Ws)throw new Error("sign failed: k is zero");const m=n.multiply(d).toAffine(),v=Ct(m.y)?d:t.neg(d),u=Mi(m),f=Ni(u,a,s),p=new Uint8Array(64);if(p.set(u,0),p.set(t.toBytes(t.create(v+f*r)),32),!Pi(p,s,a))throw new Error("sign: Invalid signature produced");return p}function Pi(h,e,i){const{Fp:t,Fn:n,BASE:s}=Ze,a=Ne(h,64,"signature"),r=Ne(e,void 0,"message"),o=Ne(i,32,"publicKey");try{const l=Ti(Je(o)),c=a.subarray(0,32),d=Je(c);if(!t.isValidNot0(d))return!1;const _=Je(a.subarray(32,64));if(!n.isValidNot0(_))return!1;const m=Ni(c,Ai(l),r),v=s.mulAddUnsafe(_,l,n.neg(m)),{x:u,y:f}=v.toAffine();return!(v.is0()||!Ct(f)||!t.eql(u,d))}catch{return!1}}const oi=(()=>{const i=t=>(t=t===void 0?Ei(48):t,rs(Ne(t,48,"seed"),Rt.n));return Object.freeze({keygen:is(i,ri),getPublicKey:ri,sign:Gs,verify:Pi,Point:Ze,utils:Object.freeze({randomSecretKey:i,taggedHash:kt,lift_x:Ti,pointToBytes:Ai}),lengths:Object.freeze({secretKey:32,publicKey:32,publicKeyHasPrefix:!1,signature:64,seed:48})})})();function js(h){const e=(s,a)=>a.every(r=>typeof s[r]=="string"),i=(s,a)=>a.every(r=>Number.isSafeInteger(s[r])&&s[r]>=0),t=(s,a)=>Array.isArray(h[s])&&h[s].every(r=>r!==null&&typeof r=="object"&&a(r)),n=/^OPENMAT-VENUE-[A-F0-9]{8}$/.test(h?.tournament_id??"")&&Array.isArray(h.bouts)&&[20,60].includes(h.bouts.length)&&Array.isArray(h.athletes)&&h.athletes.length===h.bouts.length*2&&h.bouts.every(s=>/^mat-(?:[1-9]|1[0-9]|20)-bout-[123]$/.test(s?.match_id??""))&&h.athletes.every(s=>/^mat-(?:[1-9]|1[0-9]|20)-(?:q[23]-)?(?:red|green)$/.test(s?.athlete_id??""));return!!(h&&!n&&e(h,["tournament_id","tournament_name","rules_version","publisher_pubkey_hex","payload_sha256_hex","signature_hex"])&&i(h,["snapshot_epoch","control_sequence_head","published_at_ms","mat_count"])&&h.mat_count<=20&&t("athletes",s=>e(s,["athlete_id","public_display_name","team_id","team_name","weight_class_id"]))&&t("bouts",s=>e(s,["match_id","weight_class_id","round_label","red_athlete_id","green_athlete_id"])&&i(s,["bout_number","lifecycle","assigned_mat_id","red_score","green_score","period_number","clock_remaining_ms"])&&typeof s.clock_running=="boolean")&&t("mats",s=>i(s,["mat_id","authority_epoch"])&&e(s,["status"]))&&t("standings",s=>e(s,["team_id","team_name"])&&Number.isFinite(s.total_points))&&h.bracket_frozen_by_class&&typeof h.bracket_frozen_by_class=="object"&&h.ow_vote_tallies&&typeof h.ow_vote_tallies=="object"&&Object.values(h.ow_vote_tallies).every(s=>Number.isSafeInteger(s)&&Number(s)>=0))}function lt(h,e){const i=new Map;for(const n of h){const s=n.bracket_id||JSON.stringify([n.division_id?.toUpperCase()||"VARSITY",n.weight_class_id]),a=i.get(s)??new Map;a.set(n.match_id,n),i.set(s,a)}const t=new Map;for(const n of i.values()){const s=new Map,a=new Map;for(const r of n.values())if(r.is_bye||r.win_type?.toUpperCase()==="BYE"){const o=e(r),l=r.red_athlete_id&&r.green_athlete_id?"":r.red_athlete_id||r.green_athlete_id;s.set(r,!r.is_true_second_challenge&&!r.loser_athlete_id&&o===l?o:"")}else{const o=`${r.is_consolation}:${r.round_index}`,l=a.get(o)??{bouts:[],wrestled:!1};l.bouts.push(r),r.red_athlete_id&&r.green_athlete_id&&e(r)&&!["FF","FORFEIT","MEDICAL_FORFEIT"].includes(r.win_type?.toUpperCase())&&(l.wrestled=!0),a.set(o,l)}for(const[r,o]of s){if(!o||r.format==="ROUND_ROBIN_POOL"||r.format==="BEST_OF_THREE")continue;const l=a.get(`${r.is_consolation}:${r.round_index}`);if(!l)continue;const c=new Set([r.match_id]);let d=n.get(r.winner_next_match_id);for(;d&&s.get(d)===o&&d.is_consolation===r.is_consolation&&!c.has(d.match_id);)c.add(d.match_id),d=n.get(d.winner_next_match_id);if(!d||s.has(d)||d.is_consolation!==r.is_consolation||d.red_athlete_id!==o&&d.green_athlete_id!==o)continue;const _=t.get(d.match_id)??{earnedPoints:0,conditions:[]},m=r.is_consolation?1:2,v=d.red_athlete_id===o?"R":"G";_.conditions.push({corner:v,points:m,roundBouts:l.bouts}),l.wrestled&&d.red_athlete_id&&d.green_athlete_id&&e(d)===o&&(_.earnedPoints+=m),t.set(d.match_id,_)}}return t}const Ys="NFHS-2026-27-v1",zt="NFHS-2026-27-NOVICE-1-2-2",zs=/novice|jv|1-2-2/i;function Ks(h,e=18e5,i=6,t=10){const n=zs.test(h)?6e4:12e4;return{ruleset_id:h,takedown_points:3,escape_points:1,reversal_points:2,near_fall_2_points:2,near_fall_3_points:3,near_fall_4_points:4,technical_fall_margin:15,period_1_duration_ms:n,period_2_duration_ms:12e4,period_3_duration_ms:12e4,sv_duration_ms:6e4,tb_period_duration_ms:3e4,utb_duration_ms:3e4,injury_allowance_ms:9e4,blood_allowance_ms:3e5,recovery_allowance_ms:12e4,head_neck_cervical_allowance_ms:3e5,min_rest_championship_ms:e,min_rest_consolation_ms:e,max_matches_per_day:i,max_matches_in_consecutive_days:t}}function Js(h){return Me(Ke(h))}function Qs(h,e){const i=le(e);if(i.length!==32||!h.length)throw new Error("Native replay requires a pinned root and nonempty trace");const t=new Map;return h.map(n=>{const s=(u,f)=>{if(!u)throw new Error(`Native trace ${n.match}:${n.sequence}: ${f}`)};s(Se(le(n.root_public_key),i),"root key changed");const a=xe(le(n.wire_cbor)),r=ke(le(n.certificate_cbor)),o={...ke(r.body),root_signature:r.signature};Vt(o,i,a.audit_time_ms,!0),s(o.role===st.MatOperator&&(o.allowed_scopes&Ee.ScoreMat)!==0&&o.certificate_id===a.certificate_id&&o.subject_key_id===a.signer_key_id&&o.tournament_id===a.tournament_id&&o.allowed_stream_id===a.stream_id&&o.assignment_revision===a.assignment_revision&&a.audit_time_ms>=o.issued_at_ms,"certificate scope mismatch");const l=ls(a);s(gt(wt,l,o.subject_pubkey,a.signature),"signature mismatch"),s(Se(cs(wt,l,a.signature),a.event_id),"event ID mismatch"),s(Se(ds(a),le(n.wire_cbor)),"wire round trip differs");const c=a.payload,d=c.command,_=c.projection.state;s(Se(Ke(d),le(n.command_cbor)),"unsigned command differs"),s(Se(Ke(_),le(n.state_cbor)),"unsigned state differs"),s(a.match_id===n.match&&a.sequence===n.sequence&&a.monotonic_time_ns===n.at_ms*1e6,"trace identity/time mismatch");const m=`${a.tournament_id}:${a.match_id}`;let v=t.get(m);return d.kind===0&&(s(a.sequence===1&&(!v||a.assignment_revision>v.assignment_revision),"assignment replay"),v=void 0),s(a.sequence===(v?.sequence??0)+1&&Se(a.previous_event_hash,v?.event_id??new Uint8Array(32)),"hash chain gap"),s(!v||a.authority_epoch>=v.authority_epoch,"authority epoch regressed"),ke(le(n.command_cbor)),ke(le(n.state_cbor)),t.set(m,a),a})}function Xs(h,e,i){const t=Qs(h,i);if(ke(le(e),{maxBytes:1024*1024}).closed!==!0)throw new Error("Native campaign did not close");return t.map((s,a)=>{const r=h[a],o=ke(le(r.certificate_cbor)),l=ke(o.body),d=s.payload.projection;if(!d||!d.state||!Array.isArray(d.timers))throw new Error("Native projection missing");return{line:r,event:s,matId:Number(l.assigned_mat_id),projection:d,state:d.state,timer:d.timers[0]}})}const Dt=[{teamId:"SBHS",teamName:"Santa Barbara High School"},{teamId:"DPHS",teamName:"Dos Pueblos High School"},{teamId:"SMHS",teamName:"San Marcos High School"},{teamId:"VHS",teamName:"Ventura High School"},{teamId:"BHS",teamName:"Buena High School"},{teamId:"OHS",teamName:"Oxnard High School"},{teamId:"PHS",teamName:"Pacifica High School"},{teamId:"RMHS",teamName:"Rio Mesa High School"},{teamId:"LOMP",teamName:"Lompoc High School"},{teamId:"CABR",teamName:"Cabrillo High School"},{teamId:"SYHS",teamName:"Santa Ynez High School"},{teamId:"OAHS",teamName:"Orcutt Academy High School"}],Zs=["NOVICE","JV","VARSITY","GIRLS","BOYS","U16","U18"],en=["106","113","120","126","132","138","144","150","157","165","175","190","215","285"],tn=["100","107","114","120","126","132","138","145","152","165","175","185","205","235"],sn=2500;function nn(h){const e=(h??"").trim().toUpperCase();return e.includes("GIRL")||e==="F"||e==="W"?tn:en}function Re(h,e){return typeof h!="string"?"":h.replace(/[\u0000-\u001F\u007F]/g," ").replace(/\s+/g," ").trim().slice(0,e)}function Xe(h){return/^SR-[0-9A-F]{16}$/.test(h.trim().toUpperCase())}function mt(h){const e=h.trim().toUpperCase();if(!Xe(e))throw new Error(`Invalid self-registration ID: ${h}`);return`ATH-${e}`}function Wt(h,e="channel-league-novice-2026-11-20",i=Date.now()){if(!h||typeof h!="object")throw new Error("Self-registration payload must be an object");const t=h,n=Re(t.registration_id,32).toUpperCase();if(!Xe(n))throw new Error("Registration ID must match format SR-<16 hex characters>");const s=Re(t.tournament_id,64)||Re(e,64);if(!s||!/^[A-Za-z0-9][A-Za-z0-9_-]{1,63}$/.test(s))throw new Error("Valid tournament ID is required");let a=Re(t.first_name,48),r=Re(t.last_name,48);const o=Re(t.public_display_name,96);if((!a||!r)&&o){const y=o.split(" ");!a&&y.length>0&&(a=y[0].slice(0,48)),!r&&y.length>1&&(r=y.slice(1).join(" ").slice(0,48))}if(!a)throw new Error("First name is required");if(!r)throw new Error("Last name is required");const l=`${a} ${r}`.slice(0,96),c=Re(t.team_name,80),d=Re(t.team_id,12).toUpperCase().replace(/[^A-Z0-9_-]/g,"").slice(0,8),_=c?Dt.find(y=>y.teamName.toLowerCase()===c.toLowerCase()||c.length>=4&&y.teamId===d&&y.teamName.toLowerCase().startsWith(c.toLowerCase()+" ")):void 0,m=c?void 0:Dt.find(y=>y.teamId===d),v=_??m;let u=v?.teamId??(d.length>=2?d:"");const f=v?.teamName??c;if(!v&&u&&Dt.some(y=>y.teamId===u)){let y=0;for(let P=0;P<f.length;P++)y=y*31+f.toUpperCase().charCodeAt(P)>>>0;const C=(y%90+10).toString();u=`${u.slice(0,6)}${C}`}if(!u||u.length<2)throw new Error("School or team code (2 to 8 characters) is required");if(!f||f.length<2)throw new Error("School or team name is required");const p=Re(t.division_id,24).toUpperCase()||"NOVICE";if(!Zs.includes(p))throw new Error(`Unsupported division: ${p}`);const b=Re(t.weight_class_id,8);if(!nn(p).includes(b))throw new Error(`Unsupported NFHS weight class: ${b}`);const g=Number(t.revision??1),k=Number.isInteger(g)&&g>=1&&g<=1e4?g:1,I=Number(t.submitted_at_ms??i),R=Number.isFinite(I)&&I>0?Math.trunc(I):i,M=Number(t.updated_at_ms??0),L=Number.isFinite(M)&&M>=0?Math.trunc(M):0;return{registration_id:n,tournament_id:s,first_name:a,last_name:r,public_display_name:l,team_id:u,team_name:f,division_id:p,weight_class_id:b,revision:k,submitted_at_ms:R,updated_at_ms:L}}function li(h){const e=h.baseRegisterUrl.trim().replace(/\/+$/,""),i=new URLSearchParams({tid:h.tournamentId.trim(),name:h.tournamentName.trim()});return h.defaultDivision?.trim()&&i.set("div",h.defaultDivision.trim().toUpperCase()),h.apiOrigin?.trim()&&i.set("origin",h.apiOrigin.trim().replace(/\/+$/,"")),`${e}/?${i.toString()}`}function qt(h,e="channel-league-novice-2026-11-20"){const i=h.trim();if(!i)return{valid:!1,reason:"Empty QR token"};if(Xe(i))return{valid:!0,reason:"Matched self-registration ID",registrationIdOnly:i.toUpperCase()};try{let t=null;if(i.toLowerCase().startsWith("openmat://self-register")){const l=i.indexOf("?");if(l<0)return{valid:!1,reason:"Missing self-registration query parameters"};t=new URLSearchParams(i.slice(l+1))}else if(i.startsWith("http://")||i.startsWith("https://")){const l=new URL(i),c=new URLSearchParams(l.search),d=l.hash.replace(/^#\/?\??/,"").trim();if(d){const m=new URLSearchParams(d);for(const[v,u]of m.entries())c.has(v)||c.set(v,u)}const _=c.get("selfreg");if(_&&_.toLowerCase().startsWith("openmat://self-register"))return qt(_,e);(c.has("sr")||c.has("rid"))&&(t=c)}if(!t)return{valid:!1,reason:"Not a wrestler self-registration QR code"};const n=(t.get("rid")??t.get("sr")??"").trim().toUpperCase();if(!n)return{valid:!1,reason:"Missing registration ID in QR code"};if(!!!(t.get("fn")&&t.get("ln")&&t.get("wc"))&&Xe(n))return{valid:!0,reason:"Matched self-registration ID",registrationIdOnly:n,tournamentId:t.get("tid")||void 0};const a=Number(t.get("u")??t.get("ts")??"0"),r=Number.isFinite(a)&&a>=0?a:0;return{valid:!0,reason:"Decoded wrestler self-registration QR pass",record:Wt({registration_id:n,tournament_id:t.get("tid")??e,first_name:t.get("fn")??"",last_name:t.get("ln")??"",team_id:t.get("tc")??"",team_name:t.get("tn")??"",division_id:t.get("dv")??"NOVICE",weight_class_id:t.get("wc")??"",revision:Number(t.get("rv")??"1"),submitted_at_ms:r,updated_at_ms:r},e,r)}}catch(t){return{valid:!1,reason:t instanceof Error?t.message:String(t)}}}const an=["106","113","120","126","132","138","144","150","157","165","175","190","215","285"],ci=[{teamId:"SBHS",teamName:"Santa Barbara High School"},{teamId:"DPHS",teamName:"Dos Pueblos High School"},{teamId:"SMHS",teamName:"San Marcos High School"},{teamId:"VHS",teamName:"Ventura High School"},{teamId:"BHS",teamName:"Buena High School"},{teamId:"OHS",teamName:"Oxnard High School"},{teamId:"PHS",teamName:"Pacifica High School"},{teamId:"RMHS",teamName:"Rio Mesa High School"},{teamId:"CIHS",teamName:"Channel Islands High School"},{teamId:"HHS",teamName:"Hueneme High School"},{teamId:"ACHS",teamName:"Adolfo Camarillo High School"},{teamId:"TOHS",teamName:"Thousand Oaks High School"},{teamId:"NPHS",teamName:"Newbury Park High School"},{teamId:"WHS",teamName:"Westlake High School"},{teamId:"MHS",teamName:"Moorpark High School"},{teamId:"SYHS",teamName:"Santa Ynez Valley Union High School"}],di=["Jordan","Marcus","Mateo","Liam","Carlos","Noah","Ethan","Diego","Lucas","Julian","Caleb","Adrian","Gavin","Isaac","Owen","Devon","Logan","Sebastian","Eli","Xavier","Dominic","Hector","Nathan","Cole","Victor","Wesley","Damian","Micah","Rafael","Tristan","Brody","Kai"],_i=["Rivera","Vance","Delgado","Sullivan","Mendoza","Takahashi","Castillo","Bennett","Morales","Navarro","Kowalski","Salazar","Patel","Brooks","Herrera","Kim","Ortega","Campbell","Guerrero","Foster","Espinoza","Reed","Sandoval","Hayes","Cabrera","Murphy","Rios","Wallace"];function rn(h){const e=String(h);return/[",\r\n]/.test(e)||e.startsWith("#")?`"${e.replace(/"/g,'""')}"`:e}function on(h="NOVICE"){const e=(h||"NOVICE").trim().toUpperCase(),i=["# OpenMat Full 16-Bracket Onboarding Demo Roster Template (DemoTemplate.csv)","# Contains 224 wrestlers across all 14 NFHS weight classes (16 seeded wrestlers per weight class).","# Import this CSV on Tab 1 (Check-In and Weigh-In) to test onboarding and generate all 14 full 16-wrestler brackets.","athlete_id,public_display_name,team_id,team_name,division_id,weight_class_id,seed_rank,flowrestling_id,first_name,last_name,school_name,weight_lbs,actual_weight_lbs,grade,check_in_stage,weigh_in_eligible,medically_cleared,medical_decision,medical_reviewer,scale_station_id,scale_id,bracket_frozen,bracket_format,opaque_pass_token"];return an.forEach((t,n)=>{for(let s=0;s<16;s++){const a=s+1,r=String(a).padStart(2,"0"),o=ci[(s+n)%ci.length],l=di[(s+n%2*16)%di.length],c=_i[(n+s)%_i.length],d=`${l} ${c}`,_=`ATH-${e}-${t}-${o.teamId}-${r}`,m=`FLO-26${t}${r}`,v=String(9+(s+n)%2),u=`PASS-${e}-${t}-${o.teamId}-${r}`,f=[_,d,o.teamId,o.teamName,e,t,a,m,l,c,o.teamName,t,"",v,"","","","","","","","","",u].map(rn);i.push(f.join(","))}}),i.join(`
`)+`
`}const ct=0,Y=1,Pe=2,et=3,pt=4,fe=5,Be=6,ln=(()=>{const h=new Uint32Array(256);for(let e=0;e<256;e++){let i=e;for(let t=0;t<8;t++)i=(i&1)!==0?3988292384^i>>>1:i>>>1;h[e]=i>>>0}return h})();function cn(h){let e=4294967295;for(let i=0;i<h.length;i++)e=ln[(e^h[i])&255]^e>>>8;return(e^4294967295)>>>0}function rt(h){return h.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function dn(h){let e=h+1,i="";for(;e>0;){const t=(e-1)%26;i=String.fromCharCode(65+t)+i,e=Math.floor((e-1)/26)}return i}function T(h,e=ct){return{kind:"str",value:h,style:e}}function ue(h,e=ct){return{kind:"num",value:Number.isFinite(h)?h:0,style:e}}function ge(h,e,i=ct){return{kind:"formula-str",formula:h,value:e,style:i}}function Ce(h,e,i=ct){return{kind:"formula-num",formula:h,value:Number.isFinite(e)?e:0,style:i}}function _n(h){const e=h.colWidths.length>0?`<cols>${h.colWidths.map((s,a)=>`<col min="${a+1}" max="${a+1}" width="${s}" customWidth="1"/>`).join("")}</cols>`:"",i=h.freezeHeader?'<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>':'<sheetViews><sheetView workbookViewId="0"/></sheetViews>',t=[];for(let s=0;s<h.rows.length;s++){const a=h.rows[s],r=s+1,o=[];for(let l=0;l<a.length;l++){const c=a[l];if(!c)continue;const d=`${dn(l)}${r}`,_=c.style??ct;if(c.kind==="str"){const m=String(c.value??"");o.push(`<c r="${d}" s="${_}" t="inlineStr"><is><t xml:space="preserve">${rt(m)}</t></is></c>`)}else c.kind==="num"?o.push(`<c r="${d}" s="${_}"><v>${Number(c.value)}</v></c>`):c.kind==="formula-str"?o.push(`<c r="${d}" s="${_}" t="str"><f>${rt(c.formula??"")}</f><v>${rt(String(c.value??""))}</v></c>`):c.kind==="formula-num"&&o.push(`<c r="${d}" s="${_}"><f>${rt(c.formula??"")}</f><v>${Number(c.value)}</v></c>`)}t.push(`<row r="${r}">${o.join("")}</row>`)}const n=h.landscape?'<pageSetup orientation="landscape" fitToWidth="1" fitToHeight="0"/>':"";return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'+i+'<sheetFormatPr defaultRowHeight="19"/>'+e+`<sheetData>${t.join("")}</sheetData><pageMargins left="0.4" right="0.4" top="0.5" bottom="0.5" header="0.25" footer="0.25"/>`+n+"</worksheet>"}function hn(){return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="164" formatCode="0.0"/></numFmts><fonts count="5"><font><sz val="10"/><color rgb="FF0F172A"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FF0F172A"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FF991B1B"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FF166534"/><name val="Calibri"/></font></fonts><fills count="7"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF1E293B"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFEF3C7"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFEE2E2"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFDCFCE7"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE2E8F0"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border><border><left style="thin"><color rgb="FFCBD5E1"/></left><right style="thin"><color rgb="FFCBD5E1"/></right><top style="thin"><color rgb="FFCBD5E1"/></top><bottom style="thin"><color rgb="FFCBD5E1"/></bottom><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="7"><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="164" fontId="2" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyBorder="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>'}function un(h){const e=new TextEncoder,i=h.map(v=>{const u=e.encode(v.path),f=cn(v.data);return{nameBytes:u,data:v.data,crc:f}});let t=0,n=0;for(const v of i)t+=30+v.nameBytes.length+v.data.length,n+=46+v.nameBytes.length;const s=t+n+22,a=new Uint8Array(s),r=new DataView(a.buffer),o=16384,l=23924;let c=0;const d=[];for(const v of i)d.push(c),r.setUint32(c,67324752,!0),r.setUint16(c+4,20,!0),r.setUint16(c+6,2048,!0),r.setUint16(c+8,0,!0),r.setUint16(c+10,o,!0),r.setUint16(c+12,l,!0),r.setUint32(c+14,v.crc,!0),r.setUint32(c+18,v.data.length,!0),r.setUint32(c+22,v.data.length,!0),r.setUint16(c+26,v.nameBytes.length,!0),r.setUint16(c+28,0,!0),a.set(v.nameBytes,c+30),a.set(v.data,c+30+v.nameBytes.length),c+=30+v.nameBytes.length+v.data.length;const _=c;for(let v=0;v<i.length;v++){const u=i[v];r.setUint32(c,33639248,!0),r.setUint16(c+4,20,!0),r.setUint16(c+6,20,!0),r.setUint16(c+8,2048,!0),r.setUint16(c+10,0,!0),r.setUint16(c+12,o,!0),r.setUint16(c+14,l,!0),r.setUint32(c+16,u.crc,!0),r.setUint32(c+20,u.data.length,!0),r.setUint32(c+24,u.data.length,!0),r.setUint16(c+28,u.nameBytes.length,!0),r.setUint16(c+30,0,!0),r.setUint16(c+32,0,!0),r.setUint16(c+34,0,!0),r.setUint16(c+36,0,!0),r.setUint32(c+38,0,!0),r.setUint32(c+42,d[v],!0),a.set(u.nameBytes,c+46),c+=46+u.nameBytes.length}const m=c-_;return r.setUint32(c,101010256,!0),r.setUint16(c+4,0,!0),r.setUint16(c+6,0,!0),r.setUint16(c+8,i.length,!0),r.setUint16(c+10,i.length,!0),r.setUint32(c+12,m,!0),r.setUint32(c+16,_,!0),r.setUint16(c+20,0,!0),a}function We(h){return`#${h.seed_rank} ${h.public_display_name} (${h.team_id})`}function mn(h){return h.is_true_second_challenge?"True 2nd":h.is_placement_bout&&h.placement_rank===1?"1st Place":h.is_placement_bout&&h.placement_rank===3?"3rd Place":h.is_placement_bout&&h.placement_rank===5?"5th Place":h.is_placement_bout&&h.placement_rank===7?"7th Place":h.format===J.RoundRobinPool?"Pool":h.format===J.BestOfThree?"Best of 3":h.is_consolation?"Cons":"Champ"}function Bi(h,e,i,t,n){return h.map(({corner:s,points:a,roundBouts:r})=>{const o=r.map(l=>{const c=e.get(l.match_id),d=n+c,_=t+c;return`AND(OR(${_}="R",${_}="G"),${d}<>"FF",${d}<>"FORFEIT",${d}<>"MEDICAL_FORFEIT",${d}<>"BYE")`});return`+IF(AND(${t}${i}="${s}",OR(${o.join(",")})),${a},0)`}).join("")}function Gt(h,e){const i=h.is_consolation?1:2,t=(h.win_type||"DEC").toUpperCase(),n=t==="FALL"||t==="PIN"||t==="FORFEIT"||t==="FF"||t==="INJURY_DEFAULT"||t==="DQ"?2:t==="TF"?1.5:t==="MD"?1:0,s=h.is_placement_bout&&h.placement_rank===1?16:h.is_placement_bout&&h.placement_rank===3?9:0;return i+e+n+s}function pn(h){const e=new Map(h.athletes.map(w=>[w.athlete_id,w])),i=[...h.bouts].sort((w,x)=>w.bout_number-x.bout_number||w.match_id.localeCompare(x.match_id)),t=i.filter(w=>!w.is_bye),n=lt(i,jt),s=new Map(i.map(w=>[w.match_id,w])),a=new Map;t.forEach((w,x)=>{a.set(w.match_id,x+2)});const r=h.rules_version===zt?"Novice / JV (1:00 / 2:00 / 2:00)":"Varsity (2:00 / 2:00 / 2:00)",o=[[T("OPENMAT EMERGENCY OFFLINE FALLBACK WORKBOOK",Y),T("VALUE / ACTION",Y)],[T("Tournament Name",fe),T(h.tournament_name||"OpenMat Tournament")],[T("Event Date",fe),T(h.event_date||"")],[T("Venue",fe),T(h.venue||"")],[T("Match Periods",fe),T(r)],[T("Active Mats",fe),ue(h.mat_count)],[T("Weight Allowance (lbs)",fe),ue(h.growth_allowance_tenths/10,Be)],[T("Registered Wrestlers",fe),ue(h.athletes.length)],[T("Contested Bouts",fe),ue(t.length)],[],[T("EMERGENCY SINGLE-LAPTOP + PAPER RUNNER WORKFLOW",Y),T("INSTRUCTIONS",Y)],[T("1. Mat Devices -> Practice Mode",fe),T(`Open Scorekeeper on each mat phone or tablet and tap Start Practice Mode (${r}). Connect HDMI TVs directly if available.`)],[T("2. Send Paper Slips to Mats",fe),T("Print paper runner slips from the Standalone Fallback HTML app or print the Brackets by Weight tab for mat tables.")],[T("3. Record Runner Slips Here",fe),T("Open the Bout Runner Log tab. Enter Red Pts (Col I), Green Pts (Col J), Winner R or G (Col K), and Win Type (Col L) in the yellow cells.")],[T("4. Automatic Bracket Advancement",fe),T("Excel formulas automatically advance winners and losers into downstream Championship, Consolation, and Placement bouts.")],[T("5. Valid Win Type Codes",fe),T("FALL (or PIN), TF, MD, DEC, FORFEIT (or FF), INJURY_DEFAULT, DQ")],[T("6. 30-Minute NFHS Rest Rule",fe),T("Write completion time in Col M (Time Done). Verify 30 minutes of recovery before calling a wrestler back to a mat.")]],c=[[T("Bout #",Y),T("Mat",Y),T("Division",Y),T("Weight",Y),T("Round",Y),T("Type",Y),T("Red Corner",Y),T("Green Corner",Y),T("Red Pts (Input)",Y),T("Green Pts (Input)",Y),T("Winner R/G (Input)",Y),T("Win Type (Input)",Y),T("Time Done",Y),T("Winning Wrestler",Y),T("Winning Team",Y),T("Team Pts",Y),T("Red Team",Y),T("Green Team",Y),T("Next Routing",Y)]],d=w=>{if(w.format===J.BestOfThree)return{};const x=t.filter(S=>S.bracket_id===w.bracket_id&&(S.winner_next_match_id===w.match_id||S.loser_next_match_id===w.match_id)).sort((S,D)=>S.bout_number-D.bout_number||S.match_id.localeCompare(D.match_id));if(x.length===0)return{};if(x.length===1){const S=x[0];if(w.red_athlete_id&&!w.green_athlete_id)return{greenFeeder:S};if(!w.red_athlete_id&&w.green_athlete_id)return{redFeeder:S};const D=S.winner_athlete_id,F=S.loser_athlete_id,N=S.winner_next_match_id===w.match_id?D:F;return N&&w.green_athlete_id===N?{greenFeeder:S}:{redFeeder:S}}return{redFeeder:x[0],greenFeeder:x[1]}};for(let w=0;w<t.length;w++){const x=t[w],S=w+2,D=x.red_athlete_id?e.get(x.red_athlete_id):void 0,F=x.green_athlete_id?e.get(x.green_athlete_id):void 0,{redFeeder:N,greenFeeder:V}=d(x);let W,B;if(N&&a.has(N.match_id)){const te=a.get(N.match_id),Z=N.winner_next_match_id===x.match_id,oe=`${Z?"Winner":"Loser"} #${N.bout_number}`,_e=D?We(D):oe,be=D?.team_id??"";W=ge(Z?`IF(K${te}="R",G${te},IF(K${te}="G",H${te},"${oe}"))`:`IF(K${te}="R",H${te},IF(K${te}="G",G${te},"${oe}"))`,_e,et),B=ge(Z?`IF(K${te}="R",Q${te},IF(K${te}="G",R${te},""))`:`IF(K${te}="R",R${te},IF(K${te}="G",Q${te},""))`,be)}else W=T(D?We(D):x.red_athlete_id||"TBD",et),B=T(D?.team_id??"");let U,$;if(V&&a.has(V.match_id)){const te=a.get(V.match_id),Z=V.winner_next_match_id===x.match_id,oe=`${Z?"Winner":"Loser"} #${V.bout_number}`,_e=F?We(F):oe,be=F?.team_id??"";U=ge(Z?`IF(K${te}="R",G${te},IF(K${te}="G",H${te},"${oe}"))`:`IF(K${te}="R",H${te},IF(K${te}="G",G${te},"${oe}"))`,_e,pt),$=ge(Z?`IF(K${te}="R",Q${te},IF(K${te}="G",R${te},""))`:`IF(K${te}="R",R${te},IF(K${te}="G",Q${te},""))`,be)}else U=T(F?We(F):x.green_athlete_id||"TBD",pt),$=T(F?.team_id??"");const j=re(x),A=j?x.winner_athlete_id===x.red_athlete_id?"R":x.winner_athlete_id===x.green_athlete_id?"G":"":"",H=j?(x.win_type||"DEC").toUpperCase():"",q=A==="R"?String(W.value):A==="G"?String(U.value):"",G=A==="R"?String(B.value):A==="G"?String($.value):"",ee=n.get(x.match_id),ie=(x.is_consolation?1:2)+Bi(ee?.conditions??[],a,S,"K","L"),ce=x.is_placement_bout&&x.placement_rank===1?16:x.is_placement_bout&&x.placement_rank===3?9:0,me=`IF(O${S}="",0,${ie}+IF(OR(L${S}="FALL",L${S}="PIN",L${S}="FORFEIT",L${S}="FF",L${S}="INJURY_DEFAULT",L${S}="INJ",L${S}="DQ"),2,IF(L${S}="TF",1.5,IF(L${S}="MD",1,0)))+${ce})`,ae=x.winner_next_match_id?s.get(x.winner_next_match_id):void 0,de=x.loser_next_match_id?s.get(x.loser_next_match_id):void 0,X=[];ae&&!ae.is_bye&&X.push(`Win -> #${ae.bout_number}`),de&&!de.is_bye&&X.push(`Loss -> #${de.bout_number}`);const pe=X.join(" | ")||(x.is_placement_bout?`Medal (#${x.placement_rank})`:"Pool / End"),At=j&&x.completed_at_ms>0?new Date(x.completed_at_ms).toISOString().slice(11,16)+" UTC":"";c.push([ue(x.bout_number),ue(x.assigned_mat_id||1,Pe),T((x.division_id||"VARSITY").toUpperCase()),T(x.weight_class_id),T(x.round_label),T(mn(x)),W,U,j||x.red_score>0||x.lifecycle>=E.InProgress?ue(x.red_score,Pe):T("",Pe),j||x.green_score>0||x.lifecycle>=E.InProgress?ue(x.green_score,Pe):T("",Pe),T(A,Pe),T(H,Pe),T(At,Pe),ge(`IF(K${S}="R",G${S},IF(K${S}="G",H${S},""))`,q),ge(`IF(K${S}="R",Q${S},IF(K${S}="G",R${S},""))`,G),Ce(me,A?Gt(x,ee?.earnedPoints??0):0,Be),B,$,T(pe)])}t.length===0&&c.push([T("No bouts generated yet. Generate brackets in OpenMat or use the Standalone Fallback HTML app.")]);const _=new Map;for(const w of h.athletes)w.team_id&&!_.has(w.team_id)&&_.set(w.team_id,w.team_name||w.team_id);const m=[..._.keys()].sort((w,x)=>(_.get(w)??w).localeCompare(_.get(x)??x)),v=new Map;for(const w of i)if(w.is_bye&&w.is_placement_bout&&w.placement_rank===1&&!w.green_athlete_id&&w.winner_athlete_id){const x=e.get(w.winner_athlete_id);x&&v.set(x.team_id,(v.get(x.team_id)??0)+1)}const u=[[T("Team Code",Y),T("School / Team Name",Y),T("Total Points",Y),T("Bout Points",Y),T("Walkover Pts",Y),T("Bout Wins",Y),T("Falls / FF / DQ",Y),T("Tech Falls",Y),T("Major Decisions",Y),T("Champions (1st)",Y)]],f=Math.max(2,t.length+1);m.forEach((w,x)=>{const S=x+2,D=_.get(w)??w,F=v.get(w)??0,N=F*16;let V=0,W=0,B=0,U=0,$=0,j=0;for(const A of t){if(!re(A)||!A.winner_athlete_id)continue;const H=e.get(A.winner_athlete_id);if(!H||H.team_id!==w)continue;W+=1,V+=Gt(A,n.get(A.match_id)?.earnedPoints??0);const q=(A.win_type||"DEC").toUpperCase();q==="FALL"||q==="PIN"||q==="FORFEIT"||q==="FF"||q==="INJURY_DEFAULT"||q==="DQ"?B+=1:q==="TF"?U+=1:q==="MD"&&($+=1),A.is_placement_bout&&A.placement_rank===1&&(j+=1)}if(t.length===0)u.push([T(w,fe),T(D),ue(N,Be),ue(0,Be),ue(N,Be),ue(0),ue(0),ue(0),ue(0),ue(F)]);else{const A=`'Bout Runner Log'!$O$2:$O$${f}`,H=`'Bout Runner Log'!$P$2:$P$${f}`,q=`'Bout Runner Log'!$L$2:$L$${f}`,G=`'Bout Runner Log'!$F$2:$F$${f}`;u.push([T(w,fe),T(D),Ce(`D${S}+E${S}`,V+N,Be),Ce(`SUMIF(${A},A${S},${H})`,V,Be),ue(N,Be),Ce(`COUNTIF(${A},A${S})`,W),Ce(`COUNTIFS(${A},A${S},${q},"FALL")+COUNTIFS(${A},A${S},${q},"PIN")+COUNTIFS(${A},A${S},${q},"FORFEIT")+COUNTIFS(${A},A${S},${q},"FF")+COUNTIFS(${A},A${S},${q},"INJURY_DEFAULT")+COUNTIFS(${A},A${S},${q},"DQ")`,B),Ce(`COUNTIFS(${A},A${S},${q},"TF")`,U),Ce(`COUNTIFS(${A},A${S},${q},"MD")`,$),Ce(`COUNTIFS(${A},A${S},${G},"1st Place")+${F}`,j+F)])}});const p=[[T("Weight Class",Y),T("Round",Y),T("Bout #",Y),T("Mat",Y),T("Red Corner",Y),T("Red Pts",Y),T("Green Corner",Y),T("Green Pts",Y),T("Winner",Y),T("Win Type",Y)]],b=new Map;for(const w of i){const x=`${(w.division_id||"VARSITY").toUpperCase()} ${w.weight_class_id} lbs`,S=b.get(x)??[];S.push(w),b.set(x,S)}const g=[...b.keys()].sort((w,x)=>{const[S,D]=w.split(" "),[F,N]=x.split(" ");return(S||"").localeCompare(F||"")||Number(D)-Number(N)});for(const w of g){const x=(b.get(w)??[]).sort((S,D)=>Number(S.is_consolation)-Number(D.is_consolation)||S.round_index-D.round_index||S.bout_number-D.bout_number);p.push([T(`=== ${w} (${x[0]?.format??""}) ===`,fe)]);for(const S of x){if(S.is_bye){const N=S.red_athlete_id?e.get(S.red_athlete_id):void 0;if(!N)continue;p.push([T(w),T(S.round_label),ue(S.bout_number),ue(S.assigned_mat_id||1),T(We(N),et),T("—"),T("BYE"),T("—"),T(We(N)),T("BYE")]);continue}const D=a.get(S.match_id),F=c[D-1];p.push([T(w),T(S.round_label),Ce(`'Bout Runner Log'!A${D}`,S.bout_number),Ce(`'Bout Runner Log'!B${D}`,S.assigned_mat_id||1),ge(`'Bout Runner Log'!G${D}`,String(F[6]?.value??""),et),ge(`'Bout Runner Log'!I${D}&""`,String(F[8]?.value??"")),ge(`'Bout Runner Log'!H${D}`,String(F[7]?.value??""),pt),ge(`'Bout Runner Log'!J${D}&""`,String(F[9]?.value??"")),ge(`'Bout Runner Log'!N${D}`,String(F[13]?.value??"")),ge(`'Bout Runner Log'!L${D}`,String(F[11]?.value??""))])}p.push([])}const k=[[T("Division",Y),T("Weight Class",Y),T("Seed #",Y),T("Wrestler Name",Y),T("Team Code",Y),T("School Name",Y),T("Eligibility Status",Y),T("Athlete ID",Y)]],I=[...h.athletes].sort((w,x)=>(w.division_id||"VARSITY").localeCompare(x.division_id||"VARSITY")||Number(w.weight_class_id)-Number(x.weight_class_id)||w.seed_rank-x.seed_rank||w.public_display_name.localeCompare(x.public_display_name));for(const w of I){const x=w.check_in_stage===Q.Eligible&&w.weigh_in_eligible&&w.medically_cleared;k.push([T((w.division_id||"VARSITY").toUpperCase()),T(w.weight_class_id),ue(w.seed_rank),T(w.public_display_name),T(w.team_id),T(w.team_name),T(x?"ELIGIBLE":Et[w.check_in_stage]??"PENDING"),T(w.athlete_id)])}const R=[{id:"rIdGuide",partName:"worksheets/guide.xml",sheetName:"Emergency Guide",freezeHeader:!0,colWidths:[34,96],rows:o,landscape:!0},{id:"rIdBouts",partName:"worksheets/bouts.xml",sheetName:"Bout Runner Log",freezeHeader:!0,colWidths:[8,7,11,8,28,11,28,28,13,13,16,16,12,28,13,10,10,10,24],rows:c,landscape:!0},{id:"rIdStandings",partName:"worksheets/standings.xml",sheetName:"Team Standings",freezeHeader:!0,colWidths:[12,30,14,14,14,12,14,12,15,15],rows:u},{id:"rIdBrackets",partName:"worksheets/brackets.xml",sheetName:"Brackets by Weight",freezeHeader:!0,colWidths:[18,28,9,7,28,10,28,10,28,14],rows:p,landscape:!0},{id:"rIdRoster",partName:"worksheets/roster.xml",sheetName:"Roster & Seeds",freezeHeader:!0,colWidths:[12,13,9,26,12,28,18,24],rows:k}],M='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'+R.map(w=>`<Override PartName="/xl/${w.partName}" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("")+"</Types>",L='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdWorkbook" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',y=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><workbookViews><workbookView activeTab="1"/></workbookViews><sheets>${R.map((w,x)=>`<sheet name="${rt(w.sheetName)}" sheetId="${x+1}" r:id="${w.id}"/>`).join("")}</sheets><calcPr fullCalcOnLoad="1"/></workbook>`,C='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'+R.map(w=>`<Relationship Id="${w.id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="${w.partName}"/>`).join("")+"</Relationships>",P=new TextEncoder,O=[{path:"[Content_Types].xml",data:P.encode(M)},{path:"_rels/.rels",data:P.encode(L)},{path:"xl/workbook.xml",data:P.encode(y)},{path:"xl/_rels/workbook.xml.rels",data:P.encode(C)},{path:"xl/styles.xml",data:P.encode(hn())},...R.map(w=>({path:`xl/${w.partName}`,data:P.encode(_n(w))}))];return un(O)}function hi(h,e=Date.now()){if(!h)return{version:1,revision:1,updated_at_ms:e,tournament_id:ne.tournamentId,tournament_name:ne.tournamentName,event_date:ne.eventDate,venue:ne.venue,rules_version:ne.rulesVersion,mat_count:ne.matCount,growth_allowance_tenths:ne.growthAllowanceTenths,consecutive_day_allowance_tenths:0,required_rest_ms:1800*1e3,bracket_frozen_by_class:[],athletes:[],bouts:[],weigh_ins:{},medicals:{}};const i={};for(const[r,o]of h.privateWeighIns.entries())i[r]={station_id:o.station_id,scale_id:o.scale_id,measured_weight_tenths:o.measured_weight_tenths};const t={};for(const[r,o]of h.privateMedicals.entries())t[r]={reviewer_id:o.reviewer_id,decision:o.decision};const n=Array.from(h.bouts.values()).map(r=>structuredClone(r)),s=Array.from(h.athletes.values()).map(r=>structuredClone(r)),a=n.filter(r=>!r.is_bye&&!!r.winner_athlete_id).length;return{version:1,revision:Math.max(1,h.snapshotEpoch,h.controlSequenceHead,a+1),updated_at_ms:e,tournament_id:h.tournamentId,tournament_name:h.tournamentName,event_date:h.eventDate,venue:h.venue,rules_version:h.rulesVersion,mat_count:h.matCount,growth_allowance_tenths:h.growthAllowanceTenths,consecutive_day_allowance_tenths:h.consecutiveDayAllowanceTenths,required_rest_ms:h.requiredRestMs,bracket_frozen_by_class:Array.from(h.bracketFrozenByClass.entries()),athletes:s,bouts:n,weigh_ins:i,medicals:t}}function Oi(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function fn(h){return JSON.stringify(h).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026")}const gn=`
:root,
[data-theme="light"] {
  --bg-page: #f1f5f9;
  --bg-surface: #ffffff;
  --bg-inset: #e2e8f0;
  --text-primary: #0f172a;
  --text-secondary: #334155;
  --text-muted: #475569;
  --border-subtle: #cbd5e1;
  --border-strong: #94a3b8;
  --accent-primary: #1d4ed8;
  --accent-hover: #1e40af;
  --status-ok: #15803d;
  --status-ok-bg: #dcfce7;
  --status-warn: #b45309;
  --status-warn-bg: #fef3c7;
  --status-err: #b91c1c;
  --status-err-bg: #fee2e2;
  --corner-red: #b91c1c;
  --corner-red-bg: #fee2e2;
  --corner-green: #15803d;
  --corner-green-bg: #dcfce7;
}
[data-theme="dark"] {
  --bg-page: #0b1120;
  --bg-surface: #111827;
  --bg-inset: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --border-subtle: #334155;
  --border-strong: #475569;
  --accent-primary: #3b82f6;
  --accent-hover: #2563eb;
  --status-ok: #4ade80;
  --status-ok-bg: rgba(22, 101, 52, 0.35);
  --status-warn: #fbbf24;
  --status-warn-bg: rgba(180, 83, 9, 0.35);
  --status-err: #f87171;
  --status-err-bg: rgba(185, 28, 28, 0.35);
  --corner-red: #fca5a5;
  --corner-red-bg: rgba(185, 28, 28, 0.32);
  --corner-green: #86efac;
  --corner-green-bg: rgba(21, 128, 61, 0.32);
}
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: var(--bg-page);
  color: var(--text-primary);
  line-height: 1.4;
}
button, input, select {
  font-family: inherit;
  font-size: 13px;
}
button {
  min-height: 34px;
  padding: 5px 11px;
  border-radius: 7px;
  border: 1px solid var(--border-strong);
  background: var(--bg-surface);
  color: var(--text-primary);
  font-weight: 700;
  cursor: pointer;
}
button:hover:not(:disabled) { filter: brightness(0.96); }
button:disabled { opacity: 0.5; cursor: not-allowed; }
button:focus-visible, input:focus-visible, select:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}
.btn-primary { background: var(--accent-primary); border-color: var(--accent-hover); color: #ffffff; }
.btn-ok { background: #15803d; border-color: #166534; color: #ffffff; }
.btn-warn { background: #d97706; border-color: #b45309; color: #ffffff; }
.btn-danger { background: #dc2626; border-color: #b91c1c; color: #ffffff; }
input, select {
  min-height: 34px;
  padding: 5px 9px;
  border-radius: 7px;
  border: 1px solid var(--border-strong);
  background: var(--bg-surface);
  color: var(--text-primary);
}
.topbar {
  background: var(--bg-surface);
  border-bottom: 2px solid var(--border-strong);
  padding: 10px 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.topbar h1 { margin: 2px 0 0; font-size: 19px; }
.eyebrow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
}
.pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
}
.pill.ok { background: var(--status-ok-bg); color: var(--status-ok); }
.pill.warn { background: var(--status-warn-bg); color: var(--status-warn); }
.pill.err { background: var(--status-err-bg); color: var(--status-err); }
.topbar-actions { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
.tabbar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 16px;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
}
.tab-btn {
  border-radius: 8px;
  padding: 7px 13px;
  background: transparent;
  border: 1px solid transparent;
}
.tab-btn[aria-selected="true"] {
  background: var(--accent-primary);
  color: #ffffff;
}
main { max-width: 1480px; margin: 0 auto; padding: 14px 16px 40px; display: grid; gap: 14px; }
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 14px;
}
.card-head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.card-head h2 { margin: 0; font-size: 16px; }
.sub { margin: 2px 0 0; font-size: 12px; color: var(--text-muted); }
.toast {
  padding: 9px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.toast.ok { background: var(--status-ok-bg); color: var(--status-ok); border: 1px solid var(--status-ok); }
.toast.err { background: var(--status-err-bg); color: var(--status-err); border: 1px solid var(--status-err); }
.mats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 12px;
}
.mat-card {
  background: var(--bg-surface);
  border: 2px solid var(--border-strong);
  border-radius: 10px;
  padding: 12px;
  display: grid;
  gap: 8px;
  align-content: start;
}
.corner-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 6px;
  font-weight: 700;
}
.corner-row.red { background: var(--corner-red-bg); color: var(--corner-red); }
.corner-row.green { background: var(--corner-green-bg); color: var(--corner-green); }
.corner-tag {
  display: inline-block;
  min-width: 20px;
  text-align: center;
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 900;
  color: #ffffff;
  margin-right: 5px;
}
.corner-tag.red { background: #dc2626; }
.corner-tag.green { background: #16a34a; }
.slip-form {
  background: var(--bg-inset);
  border-radius: 8px;
  padding: 8px;
  display: grid;
  gap: 6px;
}
.queue-row {
  border: 1px solid var(--border-subtle);
  border-radius: 7px;
  padding: 7px 9px;
  font-size: 12px;
  display: grid;
  gap: 4px;
}
table { width: 100%; border-collapse: collapse; font-size: 13px; }
th, td {
  padding: 7px 8px;
  border-bottom: 1px solid var(--border-subtle);
  text-align: left;
  vertical-align: middle;
}
th {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
  background: var(--bg-inset);
}
.num { text-align: right; }
.filter-bar { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
.pill-btn { min-height: 30px; padding: 3px 10px; border-radius: 999px; font-size: 12px; }
.pill-btn.active { background: var(--accent-primary); color: #ffffff; border-color: var(--accent-hover); }
.bracket-cols { display: flex; gap: 14px; overflow-x: auto; padding-bottom: 8px; align-items: stretch; }
.bracket-col { min-width: 255px; flex: 1; display: flex; flex-direction: column; gap: 10px; }
.bracket-node {
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  padding: 8px;
  background: var(--bg-surface);
  display: grid;
  gap: 5px;
  font-size: 12px;
}
dialog {
  border: 2px solid var(--border-strong);
  border-radius: 12px;
  padding: 18px;
  max-width: 520px;
  width: calc(100% - 24px);
  background: var(--bg-surface);
  color: var(--text-primary);
}
dialog::backdrop { background: rgba(15, 23, 42, 0.6); }

/* Printable Runner Slips and Wall Brackets */
.print-slips-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.runner-slip {
  border: 2px solid #0f172a;
  border-radius: 8px;
  padding: 10px 12px;
  background: #ffffff;
  color: #0f172a;
  break-inside: avoid;
  page-break-inside: avoid;
  display: grid;
  gap: 6px;
  font-size: 12px;
}
.runner-slip-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #0f172a;
  padding-bottom: 4px;
  font-weight: 900;
  font-size: 14px;
}
.runner-slip-corner {
  border: 1px solid #334155;
  border-radius: 5px;
  padding: 6px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
}
.runner-box {
  display: inline-block;
  min-width: 48px;
  height: 22px;
  border: 1.5px solid #0f172a;
  border-radius: 3px;
  vertical-align: middle;
}
.wall-bracket-sheet {
  background: #ffffff;
  color: #0f172a;
  border: 1px solid #94a3b8;
  border-radius: 8px;
  padding: 14px;
  margin-bottom: 16px;
  break-inside: avoid;
}
#print-only-container { display: none; }
@media print {
  body { background: #ffffff !important; color: #000000 !important; }
  .topbar, .tabbar, main, dialog { display: none !important; }
  #print-only-container {
    display: block !important;
    padding: 0;
    margin: 0;
  }
  .wall-page-break { break-after: page; page-break-after: always; }
}
`;function bn(h){return`  <header class="topbar">
    <div>
      <div class="eyebrow">
        <span class="pill warn" id="hdr-mode-pill">OFFLINE FALLBACK</span>
        <span id="hdr-save-status">Saved in browser</span>
        <span id="hdr-progress-summary">0 / 0 Bouts</span>
      </div>
      <h1 id="hdr-tournament-title">${Oi(h||"OpenMat Emergency Fallback Tournament")}</h1>
    </div>
    <div class="topbar-actions">
      <button type="button" class="btn-primary" id="btn-save-html" title="Download an updated single-file HTML checkpoint for USB or laptop backup">Save Updated HTML</button>
      <button type="button" class="btn-ok" id="btn-export-csv" title="Download an OpenMat backup CSV to restore results into Officials Console">Export OpenMat CSV</button>
      <button type="button" id="btn-export-xlsx" title="Download a multi-sheet Excel workbook with bracket and team formulas">Export Excel (.xlsx)</button>
      <label for="input-import-csv" style="display:inline-flex;align-items:center;min-height:34px;padding:5px 11px;border-radius:7px;border:1px solid var(--border-strong);background:var(--bg-surface);font-size:13px;font-weight:700;cursor:pointer;">Import CSV</label>
      <input id="input-import-csv" type="file" accept=".csv,text/csv" style="display:none" />
      <button type="button" id="btn-open-wallboard" title="Open a local second-screen scoreboard window for an HDMI TV or projector">Open Wall Board</button>
      <button type="button" id="btn-toggle-theme" title="Toggle daylight or dark display">Theme</button>
    </div>
  </header>

  <nav class="tabbar" role="tablist" aria-label="Emergency tournament views">
    <button type="button" role="tab" class="tab-btn" id="tab-btn-desk" data-tab="desk" aria-selected="true">1. Paper Runner Desk</button>
    <button type="button" role="tab" class="tab-btn" id="tab-btn-brackets" data-tab="brackets" aria-selected="false">2. Brackets and Seeds</button>
    <button type="button" role="tab" class="tab-btn" id="tab-btn-print" data-tab="print" aria-selected="false">3. Print Slips and Wall Charts</button>
    <button type="button" role="tab" class="tab-btn" id="tab-btn-standings" data-tab="standings" aria-selected="false">4. Standings and Roster</button>
  </nav>

  <main id="fallback-main">
    <section class="card" aria-label="Emergency fallback instructions">
      <h2>Single-Laptop Paper Runner Mode</h2>
      <p class="sub">Start Practice Mode on each mat device. Print bout slips and record paper runner results on this laptop without internet.</p>
    </section>
  </main>

  <section id="print-only-container" aria-label="Printable tournament output"></section>

  <dialog id="fallback-correction-dialog" aria-label="Correct or reopen bout result"></dialog>`}function vn(){const h=JSON.stringify(wn),e=JSON.stringify(Et);return`(function () {
  "use strict";

  var NOVICE_RULESET = ${JSON.stringify(zt)};
  var VARSITY_RULESET = ${JSON.stringify(Ys)};
  var PRESET_SCHOOLS = ${h};
  var STAGE_LABELS = ${e};
  var BOYS_WEIGHTS = ["106","113","120","126","132","138","144","150","157","165","175","190","215","285"];
  var GIRLS_WEIGHTS = ["100","107","114","120","126","132","138","145","152","165","175","185","205","235"];
  var ALL_WEIGHTS = ["100","106","107","113","114","120","126","132","138","144","145","150","152","157","165","175","185","190","205","215","235","285"];
  var DIVISIONS = ["NOVICE","JV","VARSITY","GIRLS","BOYS","U16","U18"];
  var WIN_TYPES = ["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"];
  var PAPER_MARGINS = ${JSON.stringify(Di)};
  var computeByeAdvancement = ${lt.toString()};
  var byeAdvancementFormula = ${Bi.toString()};
  var completedBoutTeamPoints = ${Gt.toString()};

  function byeAdvancement() {
    return computeByeAdvancement(state.bouts || [], function (b) {
      return isBoutDone(b) ? b.winner_athlete_id : "";
    });
  }

  var Lifecycle = {
    PendingUpstream: 1,
    Assigned: 2,
    Ready: 3,
    InProgress: 4,
    EndedLocal: 5,
    LocallyConfirmed: 6,
    ResultAccepted: 7
  };

  var Format = {
    AutoByCount: "AUTO_BY_COUNT",
    BestOfThree: "BEST_OF_THREE",
    DoubleElimCrossover: "DOUBLE_ELIM_CROSSOVER",
    RoundRobinPool: "ROUND_ROBIN_POOL",
    PoolToBracket: "POOL_TO_BRACKET",
    TeamDual: "TEAM_DUAL",
    TrueSecondChallenge: "TRUE_SECOND_CHALLENGE"
  };

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function safeScriptJson(val) {
    return JSON.stringify(val)
      .replace(/</g, "\\\\u003c")
      .replace(/>/g, "\\\\u003e")
      .replace(/&/g, "\\\\u0026");
  }

  function cloneObj(val) {
    return JSON.parse(JSON.stringify(val));
  }

  function weightsForDivision(div) {
    var up = String(div || "").trim().toUpperCase();
    if (up === "ALL") return ALL_WEIGHTS;
    if (up.indexOf("GIRL") >= 0 || up.indexOf("FEMALE") >= 0 || up === "F" || up === "W") return GIRLS_WEIGHTS;
    return BOYS_WEIGHTS;
  }

  function period1MsForRules(rulesVersion) {
    return rulesVersion === NOVICE_RULESET ? 60000 : 120000;
  }

  function isBoutDone(b) {
    if (!b) return false;
    if (b.is_bye) return b.lifecycle === Lifecycle.ResultAccepted;
    return Boolean(b.winner_athlete_id) && (
      b.lifecycle === Lifecycle.EndedLocal ||
      b.lifecycle === Lifecycle.LocallyConfirmed ||
      b.lifecycle === Lifecycle.ResultAccepted
    );
  }

  // Load embedded state and reconcile with localStorage by revision
  var stateEl = document.getElementById("openmat-fallback-state");
  var embeddedState = JSON.parse(stateEl ? stateEl.textContent : "{}");
  var state = cloneObj(embeddedState);
  var storageAvailable = false;
  var dirtySinceFileExport = false;
  var lastSavedLabel = "Loaded from file";

  function storageKeyFor(tournamentId) {
    return "openmat_emergency_fallback_v1:" + (tournamentId || "default");
  }

  try {
    var testKey = "__openmat_fallback_probe__";
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
    storageAvailable = true;
  } catch (_err) {
    storageAvailable = false;
  }

  if (storageAvailable && state.tournament_id) {
    try {
      var rawSaved = window.localStorage.getItem(storageKeyFor(state.tournament_id));
      if (rawSaved) {
        var parsedSaved = JSON.parse(rawSaved);
        if (
          parsedSaved &&
          parsedSaved.tournament_id === state.tournament_id &&
          ((parsedSaved.revision || 0) > (state.revision || 0) ||
            ((parsedSaved.revision || 0) === (state.revision || 0) &&
              (parsedSaved.updated_at_ms || 0) > (state.updated_at_ms || 0)))
        ) {
          state = parsedSaved;
          lastSavedLabel = "Restored newer browser auto-save (rev " + state.revision + ")";
        }
      }
    } catch (_err2) {}
  }

  // UI view state
  var ui = {
    tab: (state.bouts && state.bouts.length > 0) ? "desk" : "brackets",
    theme: "light",
    toastMsg: "",
    toastKind: "ok",
    deskSearch: "",
    deskFilter: "OPEN",
    selectedDivision: "ALL",
    selectedWeight: "",
    selectedFormat: Format.AutoByCount,
    printMode: "staged-slips",
    printRound: 1,
    rosterSearch: "",
    walkupName: "",
    walkupTeamId: PRESET_SCHOOLS[0] ? PRESET_SCHOOLS[0].teamId : "SBHS",
    walkupTeamName: PRESET_SCHOOLS[0] ? PRESET_SCHOOLS[0].teamName : "Santa Barbara High School",
    walkupDivision: state.athletes && state.athletes[0] ? state.athletes[0].division_id : "NOVICE",
    walkupWeight: "132",
    walkupSeed: 1,
    slipInputs: {},
    correctionMatchId: "",
    correctionWinnerId: "",
    correctionWinType: "FALL",
    correctionRedScore: "0",
    correctionGreenScore: "0",
    wallboardWin: null
  };

  function ensureSelectedWeight() {
    var weights = populatedWeights();
    if (!ui.selectedWeight || (weights.length > 0 && weights.indexOf(ui.selectedWeight) < 0 && ALL_WEIGHTS.indexOf(ui.selectedWeight) < 0)) {
      ui.selectedWeight = weights[0] || "132";
    } else if (weights.length > 0 && weights.indexOf(ui.selectedWeight) < 0) {
      ui.selectedWeight = weights[0];
    }
  }

  function athleteMap() {
    var m = new Map();
    (state.athletes || []).forEach(function (a) { m.set(a.athlete_id, a); });
    return m;
  }

  function boutMap() {
    var m = new Map();
    (state.bouts || []).forEach(function (b) { m.set(b.match_id, b); });
    return m;
  }

  function frozenMap() {
    return new Map(state.bracket_frozen_by_class || []);
  }

  function saveFrozenMap(m) {
    state.bracket_frozen_by_class = Array.from(m.entries());
  }

  function isAthleteEligible(a) {
    return a && a.check_in_stage === 5 && a.weigh_in_eligible && a.medically_cleared;
  }

  function isWithdrawn(athleteId, aMap) {
    var a = aMap.get(athleteId);
    return a ? (a.check_in_stage === 6 || a.check_in_stage === 7) : false;
  }

  function populatedWeights() {
    var set = {};
    (state.athletes || []).forEach(function (a) {
      if (a.weight_class_id) set[a.weight_class_id] = true;
    });
    (state.bouts || []).forEach(function (b) {
      if (b.weight_class_id) set[b.weight_class_id] = true;
    });
    return Object.keys(set).sort(function (a, b) { return Number(a) - Number(b); });
  }

  function showToast(msg, kind) {
    ui.toastMsg = msg;
    ui.toastKind = kind || "ok";
    render();
  }

  function persistState(markDirty) {
    state.revision = (state.revision || 1) + 1;
    state.updated_at_ms = Date.now();
    if (markDirty !== false) dirtySinceFileExport = true;
    if (stateEl) stateEl.textContent = safeScriptJson(state);
    if (storageAvailable && state.tournament_id) {
      try {
        window.localStorage.setItem(storageKeyFor(state.tournament_id), JSON.stringify(state));
        var d = new Date(state.updated_at_ms);
        lastSavedLabel = "Auto-saved " + d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      } catch (_e) {
        lastSavedLabel = "Memory mode (click Save Updated HTML)";
      }
    } else {
      lastSavedLabel = "Offline file mode (click Save Updated HTML)";
    }
    refreshWallboard();
  }

  window.addEventListener("beforeunload", function (e) {
    if (dirtySinceFileExport && !storageAvailable) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  // ===========================================================================
  // Rest Status, Bracket Advancement, Best-of-3, True Second, and Standings
  // ===========================================================================

  function getAthleteRest(athleteId, nowMs) {
    var now = nowMs || Date.now();
    var reqMs = state.required_rest_ms || (30 * 60 * 1000);
    var a = athleteMap().get(athleteId);
    if (!a || !a.last_bout_ended_ms || a.last_bout_ended_ms <= 0) {
      return { restLocked: false, remainingMs: 0, remainingMinutes: 0 };
    }
    var elapsed = now - a.last_bout_ended_ms;
    if (elapsed >= reqMs) {
      return { restLocked: false, remainingMs: 0, remainingMinutes: 0 };
    }
    var rem = reqMs - elapsed;
    return { restLocked: true, remainingMs: rem, remainingMinutes: Math.ceil(rem / 60000) };
  }

  function getBoutRest(bout, nowMs) {
    var now = nowMs || Date.now();
    var aMap = athleteMap();
    var names = [];
    var maxRem = 0;
    [bout.red_athlete_id, bout.green_athlete_id].forEach(function (id) {
      if (!id) return;
      var st = getAthleteRest(id, now);
      if (st.restLocked) {
        var ath = aMap.get(id);
        names.push(ath ? ath.public_display_name : id);
        if (st.remainingMs > maxRem) maxRem = st.remainingMs;
      }
    });
    return {
      restLocked: names.length > 0,
      remainingMs: maxRem,
      remainingMinutes: Math.ceil(maxRem / 60000),
      restingNames: names
    };
  }

  function recomputeWorkloadAndRestFromBouts() {
    var counts = {};
    var latestEnd = {};
    (state.bouts || []).forEach(function (b) {
      if (b.is_bye || !isBoutDone(b)) return;
      var wt = String(b.win_type || "").toUpperCase();
      if (wt === "FORFEIT" || wt === "BYE") return;
      [b.red_athlete_id, b.green_athlete_id].forEach(function (id) {
        if (!id) return;
        counts[id] = (counts[id] || 0) + 1;
        var endMs = b.completed_at_ms || 0;
        if (endMs > (latestEnd[id] || 0)) latestEnd[id] = endMs;
      });
    });
    (state.athletes || []).forEach(function (a) {
      a.matches_wrestled_today = counts[a.athlete_id] || 0;
      a.last_bout_ended_ms = latestEnd[a.athlete_id] || 0;
    });
  }

  function advanceParticipantToDownstream(bMap, targetMatchId, athleteId, sourceMatchId) {
    var target = bMap.get(targetMatchId);
    if (!target || !athleteId) return;
    if (target.format === Format.BestOfThree) return;
    if (target.red_athlete_id === athleteId || target.green_athlete_id === athleteId) {
      if (target.red_athlete_id && target.green_athlete_id && target.lifecycle === Lifecycle.PendingUpstream) {
        target.lifecycle = Lifecycle.Assigned;
      }
      return;
    }
    var preferGreen = false;
    if (sourceMatchId) {
      var nonByeFeeders = Array.from(bMap.values())
        .filter(function (u) {
          return !u.is_bye && (u.winner_next_match_id === targetMatchId || u.loser_next_match_id === targetMatchId);
        })
        .sort(function (a, b) {
          return (a.bout_number - b.bout_number) || a.match_id.localeCompare(b.match_id);
        });
      if (nonByeFeeders.length === 2 && nonByeFeeders[1] && nonByeFeeders[1].match_id === sourceMatchId) {
        preferGreen = true;
      }
    }
    if (preferGreen && !target.green_athlete_id) {
      target.green_athlete_id = athleteId;
    } else if (!target.red_athlete_id) {
      target.red_athlete_id = athleteId;
    } else if (!target.green_athlete_id && target.red_athlete_id !== athleteId) {
      target.green_athlete_id = athleteId;
    }
    if (target.red_athlete_id && target.green_athlete_id && target.lifecycle === Lifecycle.PendingUpstream) {
      target.lifecycle = Lifecycle.Assigned;
    }
  }

  function reconcileBestOfThree(bMap, bracketId, nowMs) {
    var bo3 = Array.from(bMap.values())
      .filter(function (b) { return b.bracket_id === bracketId && b.format === Format.BestOfThree; })
      .sort(function (a, b) { return a.round_index - b.round_index; });
    if (bo3.length < 3) return;
    var m1 = bo3[0], m2 = bo3[1], m3 = bo3[2];
    var seed1Id = m1.red_athlete_id;
    var seed2Id = m1.green_athlete_id;
    if (!seed1Id || !seed2Id) return;
    m2.red_athlete_id = seed2Id;
    m2.green_athlete_id = seed1Id;
    m3.red_athlete_id = seed1Id;
    m3.green_athlete_id = seed2Id;

    if (!isBoutDone(m1)) {
      if (m2.lifecycle === Lifecycle.Assigned) m2.lifecycle = Lifecycle.PendingUpstream;
      m2.is_placement_bout = false; m2.placement_rank = 0;
      m3.is_bye = false; m3.lifecycle = Lifecycle.PendingUpstream;
      m3.is_placement_bout = true; m3.placement_rank = 1;
      m3.winner_athlete_id = ""; m3.loser_athlete_id = ""; m3.win_type = ""; m3.completed_at_ms = 0;
      return;
    }
    if (!isBoutDone(m2)) {
      if (m2.lifecycle === Lifecycle.PendingUpstream) m2.lifecycle = Lifecycle.Assigned;
      m2.is_placement_bout = false; m2.placement_rank = 0;
      m3.is_bye = false; m3.lifecycle = Lifecycle.PendingUpstream;
      m3.is_placement_bout = true; m3.placement_rank = 1;
      m3.winner_athlete_id = ""; m3.loser_athlete_id = ""; m3.win_type = ""; m3.completed_at_ms = 0;
      return;
    }
    if (m1.winner_athlete_id === m2.winner_athlete_id) {
      m2.is_placement_bout = Boolean(m2.winner_athlete_id);
      m2.placement_rank = m2.is_placement_bout ? 1 : 0;
      m3.is_placement_bout = false; m3.placement_rank = 0;
      m3.is_bye = true; m3.lifecycle = Lifecycle.ResultAccepted;
      m3.winner_athlete_id = m2.winner_athlete_id;
      m3.loser_athlete_id = m2.loser_athlete_id;
      m3.win_type = "BYE";
      m3.completed_at_ms = m2.completed_at_ms || nowMs;
    } else {
      m2.is_placement_bout = false; m2.placement_rank = 0;
      m3.is_placement_bout = true; m3.placement_rank = 1;
      if ((m3.is_bye && m3.winner_athlete_id) || m3.lifecycle === Lifecycle.PendingUpstream) {
        m3.is_bye = false;
        m3.lifecycle = Lifecycle.Assigned;
        m3.winner_athlete_id = ""; m3.loser_athlete_id = ""; m3.win_type = ""; m3.completed_at_ms = 0;
      }
    }
  }

  function resolveCompletedByesForBracket(bMap, aMap, bracketId, nowMs) {
    reconcileBestOfThree(bMap, bracketId, nowMs);
    var changed = true;
    while (changed) {
      changed = false;
      var bracketBouts = Array.from(bMap.values()).filter(function (b) { return b.bracket_id === bracketId; });
      for (var i = 0; i < bracketBouts.length; i++) {
        var target = bracketBouts[i];
        if (target.format === Format.BestOfThree) continue;
        if (
          target.is_true_second_challenge &&
          target.lifecycle < Lifecycle.InProgress &&
          target.red_athlete_id &&
          target.green_athlete_id
        ) {
          var previouslyMet = bracketBouts.some(function (other) {
            return !other.is_true_second_challenge &&
              !other.is_bye &&
              isBoutDone(other) &&
              ((other.red_athlete_id === target.red_athlete_id && other.green_athlete_id === target.green_athlete_id) ||
               (other.red_athlete_id === target.green_athlete_id && other.green_athlete_id === target.red_athlete_id));
          });
          if (previouslyMet) {
            var firstBout = bracketBouts.find(function (other) {
              return !other.is_true_second_challenge && other.is_placement_bout && other.placement_rank === 1;
            });
            var secondPlaceId = (firstBout && firstBout.loser_athlete_id) || target.red_athlete_id;
            var thirdPlaceId = secondPlaceId === target.red_athlete_id ? target.green_athlete_id : target.red_athlete_id;
            target.red_athlete_id = secondPlaceId;
            target.green_athlete_id = thirdPlaceId;
            target.is_bye = true;
            target.lifecycle = Lifecycle.ResultAccepted;
            target.winner_athlete_id = secondPlaceId;
            target.loser_athlete_id = thirdPlaceId;
            target.win_type = "DEC";
            target.completed_at_ms = nowMs;
            changed = true;
            continue;
          }
        }
        if (target.lifecycle !== Lifecycle.PendingUpstream) continue;
        var feeders = bracketBouts.filter(function (u) {
          return u.winner_next_match_id === target.match_id || u.loser_next_match_id === target.match_id;
        });
        if (feeders.length === 0 || !feeders.every(isBoutDone)) continue;
        if (target.red_athlete_id && target.green_athlete_id) {
          target.lifecycle = Lifecycle.Assigned;
          changed = true;
        } else if (target.red_athlete_id || target.green_athlete_id) {
          var cand = target.red_athlete_id || target.green_athlete_id;
          var sole = isWithdrawn(cand, aMap) ? "" : cand;
          target.red_athlete_id = sole;
          target.green_athlete_id = "";
          target.is_bye = true;
          target.lifecycle = Lifecycle.ResultAccepted;
          target.winner_athlete_id = sole;
          target.loser_athlete_id = "";
          target.win_type = "BYE";
          target.completed_at_ms = nowMs;
          if (target.winner_next_match_id) {
            advanceParticipantToDownstream(bMap, target.winner_next_match_id, sole, target.match_id);
          }
          changed = true;
        } else {
          target.is_bye = true;
          target.lifecycle = Lifecycle.ResultAccepted;
          target.winner_athlete_id = "";
          target.loser_athlete_id = "";
          target.win_type = "BYE";
          target.completed_at_ms = nowMs;
          changed = true;
        }
      }
    }
  }

  function acceptBoutInternal(bMap, aMap, bout, winnerId, winType, redScore, greenScore, nowMs) {
    var loserId = !winnerId ? "" : (winnerId === bout.red_athlete_id ? bout.green_athlete_id : bout.red_athlete_id);
    bout.red_score = redScore;
    bout.green_score = greenScore;
    bout.winner_athlete_id = winnerId;
    bout.loser_athlete_id = loserId;
    bout.win_type = winType;
    bout.clock_running = false;
    bout.clock_remaining_ms = 0;
    bout.completed_at_ms = nowMs;
    bout.lifecycle = Lifecycle.ResultAccepted;

    [bout.red_athlete_id, bout.green_athlete_id].forEach(function (pid) {
      var ath = aMap.get(pid);
      if (ath && winType !== "FORFEIT" && winType !== "BYE") {
        ath.matches_wrestled_today = (ath.matches_wrestled_today || 0) + 1;
        ath.last_bout_ended_ms = nowMs;
        ath.updated_at_ms = nowMs;
      }
    });

    if (bout.winner_next_match_id) {
      advanceParticipantToDownstream(bMap, bout.winner_next_match_id, winnerId, bout.match_id);
    }
    if (bout.loser_next_match_id && !isWithdrawn(loserId, aMap)) {
      advanceParticipantToDownstream(bMap, bout.loser_next_match_id, loserId, bout.match_id);
    }
    resolveCompletedByesForBracket(bMap, aMap, bout.bracket_id, nowMs);
  }

  function advanceScratchesInternal(bMap, aMap, nowMs) {
    var advanced = false;
    for (;;) {
      var nextBout = Array.from(bMap.values()).find(function (b) {
        return !b.is_bye &&
          !b.clock_running &&
          (b.lifecycle === Lifecycle.Assigned || b.lifecycle === Lifecycle.Ready) &&
          b.red_athlete_id &&
          b.green_athlete_id &&
          (isWithdrawn(b.red_athlete_id, aMap) || isWithdrawn(b.green_athlete_id, aMap));
      });
      if (!nextBout) return advanced;
      var redOut = isWithdrawn(nextBout.red_athlete_id, aMap);
      var greenOut = isWithdrawn(nextBout.green_athlete_id, aMap);
      if (redOut && greenOut) nextBout.is_bye = true;
      var winId = (redOut && greenOut) ? "" : (redOut ? nextBout.green_athlete_id : nextBout.red_athlete_id);
      acceptBoutInternal(bMap, aMap, nextBout, winId, nextBout.is_bye ? "BYE" : "FORFEIT", 0, 0, nowMs);
      advanced = true;
    }
  }

  function promoteMatReadyBout(matId, nowMs) {
    var uncompleted = (state.bouts || []).filter(function (b) {
      return !b.is_bye && !isBoutDone(b);
    });
    if (uncompleted.length === 0) return;
    var currentRound = Math.min.apply(null, uncompleted.map(function (b) { return b.round_index; }));
    var matQueue = uncompleted
      .filter(function (b) {
        return b.assigned_mat_id === matId && b.red_athlete_id && b.green_athlete_id;
      })
      .sort(function (a, b) {
        return (a.mat_queue_order || 9999) - (b.mat_queue_order || 9999) || (a.bout_number - b.bout_number);
      });
    var alreadyActive = matQueue.some(function (b) {
      return b.lifecycle === Lifecycle.Ready || b.lifecycle === Lifecycle.InProgress;
    });
    if (alreadyActive) return;
    var candidate = matQueue.find(function (b) {
      return b.lifecycle === Lifecycle.Assigned &&
        b.round_index === currentRound &&
        !getBoutRest(b, nowMs).restLocked;
    });
    if (candidate) {
      candidate.lifecycle = Lifecycle.Ready;
    }
  }

  function validatePaperScores(bout, winnerId, winType, redScore, greenScore) {
    if (!winnerId || (winnerId !== bout.red_athlete_id && winnerId !== bout.green_athlete_id)) {
      throw new Error("Select either the Red or Green wrestler as the winner.");
    }
    if (WIN_TYPES.indexOf(winType) < 0) {
      throw new Error("Select a valid win type.");
    }
    if (!Number.isInteger(redScore) || redScore < 0 || redScore > 999 ||
        !Number.isInteger(greenScore) || greenScore < 0 || greenScore > 999) {
      throw new Error("Enter whole-number scores between 0 and 999.");
    }
    var rule = PAPER_MARGINS[winType];
    var lead = winnerId === bout.red_athlete_id ? redScore - greenScore : greenScore - redScore;
    if (rule && (lead < rule.min || lead > (rule.max ?? Infinity))) {
      throw new Error(rule.message);
    }
  }

  function recordPaperResult(matchId, form) {
    var bMap = boutMap();
    var aMap = athleteMap();
    var bout = bMap.get(matchId);
    if (!bout) return;
    var winnerId = form.querySelector("[data-slip-winner]").value;
    var winType = form.querySelector("[data-slip-wintype]").value;
    var redScore = form.querySelector("[data-slip-red]").valueAsNumber;
    var greenScore = form.querySelector("[data-slip-green]").valueAsNumber;
    validatePaperScores(bout, winnerId, winType, redScore, greenScore);
    if (isBoutDone(bout)) {
      throw new Error("Bout #" + bout.bout_number + " already has a saved result. Use Correct Result.");
    }
    var nowMs = Date.now();
    acceptBoutInternal(bMap, aMap, bout, winnerId, winType, redScore, greenScore, nowMs);
    advanceScratchesInternal(bMap, aMap, nowMs);
    state.bouts = Array.from(bMap.values());
    state.athletes = Array.from(aMap.values());
    if (bout.assigned_mat_id > 0) promoteMatReadyBout(bout.assigned_mat_id, nowMs);
    delete ui.slipInputs[matchId];
    persistState(true);
    var winnerAth = aMap.get(bout.winner_athlete_id);
    showToast(
      "Saved Bout #" + bout.bout_number + ": " +
      (winnerAth ? winnerAth.public_display_name : bout.winner_athlete_id) +
      " won by " + bout.win_type + " (" + bout.red_score + "-" + bout.green_score + ").",
      "ok"
    );
  }

  function previewDownstreamImpact(matchId) {
    var bMap = boutMap();
    var root = bMap.get(matchId);
    if (!root) return { affected: [], safe: false };
    var affected = [];
    var safe = true;
    var queue = [];
    if (root.winner_next_match_id) queue.push(root.winner_next_match_id);
    if (root.loser_next_match_id) queue.push(root.loser_next_match_id);
    var visited = {};
    while (queue.length > 0) {
      var id = queue.shift();
      if (!id || visited[id]) continue;
      visited[id] = true;
      var node = bMap.get(id);
      if (!node) continue;
      affected.push(node);
      var unstarted = (node.lifecycle === Lifecycle.PendingUpstream ||
        node.lifecycle === Lifecycle.Assigned ||
        node.lifecycle === Lifecycle.Ready) ||
        (node.lifecycle === Lifecycle.ResultAccepted && node.is_bye);
      if (!unstarted) safe = false;
      if (node.winner_next_match_id) queue.push(node.winner_next_match_id);
      if (node.loser_next_match_id) queue.push(node.loser_next_match_id);
    }
    return { affected: affected, safe: safe };
  }

  function resetAndRefillAffectedDownstream(bMap, aMap, root, affectedNodes, nowMs) {
    var affectedIds = {};
    affectedNodes.forEach(function (node) {
      affectedIds[node.match_id] = true;
      node.red_athlete_id = "";
      node.green_athlete_id = "";
      node.winner_athlete_id = "";
      node.loser_athlete_id = "";
      node.is_bye = false;
      node.lifecycle = Lifecycle.PendingUpstream;
      node.red_score = 0;
      node.green_score = 0;
      node.win_type = "";
      node.completed_at_ms = 0;
      node.period_number = 1;
      node.clock_running = false;
      node.clock_remaining_ms = period1MsForRules(state.rules_version);
      node.assignment_revision = (node.assignment_revision || 1) + 1;
    });
    Array.from(bMap.values())
      .sort(function (a, b) { return a.bout_number - b.bout_number; })
      .forEach(function (b) {
        if (!isBoutDone(b)) return;
        if (b.winner_next_match_id && affectedIds[b.winner_next_match_id]) {
          advanceParticipantToDownstream(bMap, b.winner_next_match_id, b.winner_athlete_id, b.match_id);
        }
        if (b.loser_next_match_id && affectedIds[b.loser_next_match_id] && b.loser_athlete_id && !isWithdrawn(b.loser_athlete_id, aMap)) {
          advanceParticipantToDownstream(bMap, b.loser_next_match_id, b.loser_athlete_id, b.match_id);
        }
      });
    resolveCompletedByesForBracket(bMap, aMap, root.bracket_id, nowMs);
  }

  function applyCorrectionFromDialog() {
    var bMap = boutMap();
    var aMap = athleteMap();
    var root = bMap.get(ui.correctionMatchId);
    if (!root) return;
    var impact = previewDownstreamImpact(root.match_id);
    if (!impact.safe) {
      throw new Error("Downstream bouts already have results. Reopen or correct the later bout first.");
    }
    var rScore = Number(ui.correctionRedScore);
    var gScore = Number(ui.correctionGreenScore);
    validatePaperScores(root, ui.correctionWinnerId, ui.correctionWinType, rScore, gScore);
    root.winner_athlete_id = ui.correctionWinnerId;
    root.loser_athlete_id = ui.correctionWinnerId === root.red_athlete_id ? root.green_athlete_id : root.red_athlete_id;
    root.win_type = ui.correctionWinType;
    root.red_score = rScore;
    root.green_score = gScore;
    root.lifecycle = Lifecycle.ResultAccepted;
    root.completed_at_ms = root.completed_at_ms || Date.now();
    root.assignment_revision = (root.assignment_revision || 1) + 1;

    var nowMs = Date.now();
    resetAndRefillAffectedDownstream(bMap, aMap, root, impact.affected, nowMs);
    state.bouts = Array.from(bMap.values());
    recomputeWorkloadAndRestFromBouts();
    persistState(true);
    closeCorrectionDialog();
    showToast("Updated Bout #" + root.bout_number + " and refreshed downstream bracket slots.", "ok");
  }

  function reopenBoutFromDialog() {
    var bMap = boutMap();
    var aMap = athleteMap();
    var root = bMap.get(ui.correctionMatchId);
    if (!root) return;
    var impact = previewDownstreamImpact(root.match_id);
    if (!impact.safe) {
      throw new Error("Downstream bouts already have results. Reopen the downstream bout first.");
    }
    root.winner_athlete_id = "";
    root.loser_athlete_id = "";
    root.win_type = "";
    root.red_score = 0;
    root.green_score = 0;
    root.completed_at_ms = 0;
    root.clock_running = false;
    root.clock_remaining_ms = period1MsForRules(state.rules_version);
    root.lifecycle = (root.red_athlete_id && root.green_athlete_id) ? Lifecycle.Assigned : Lifecycle.PendingUpstream;
    root.assignment_revision = (root.assignment_revision || 1) + 1;

    var nowMs = Date.now();
    resetAndRefillAffectedDownstream(bMap, aMap, root, impact.affected, nowMs);
    state.bouts = Array.from(bMap.values());
    recomputeWorkloadAndRestFromBouts();
    persistState(true);
    closeCorrectionDialog();
    showToast("Reopened Bout #" + root.bout_number + " as unstarted.", "ok");
  }

  function autoDispatchRestedBouts() {
    var nowMs = Date.now();
    var bMap = boutMap();
    var aMap = athleteMap();
    advanceScratchesInternal(bMap, aMap, nowMs);
    state.bouts = Array.from(bMap.values());

    var uncompleted = state.bouts.filter(function (b) { return !b.is_bye && !isBoutDone(b); });
    if (uncompleted.length === 0) {
      showToast("All bouts are complete.", "ok");
      return;
    }
    var currentRound = Math.min.apply(null, uncompleted.map(function (b) { return b.round_index; }));
    var activeAthletes = {};
    var busyMats = {};
    uncompleted.forEach(function (b) {
      if (b.lifecycle === Lifecycle.Ready || b.lifecycle === Lifecycle.InProgress) {
        busyMats[b.assigned_mat_id] = true;
        if (b.red_athlete_id) activeAthletes[b.red_athlete_id] = true;
        if (b.green_athlete_id) activeAthletes[b.green_athlete_id] = true;
      }
    });

    var candidates = uncompleted
      .filter(function (b) {
        return b.round_index === currentRound &&
          b.lifecycle === Lifecycle.Assigned &&
          Boolean(b.red_athlete_id && b.green_athlete_id);
      })
      .sort(function (a, b) {
        return (a.mat_queue_order || 9999) - (b.mat_queue_order || 9999) || (a.bout_number - b.bout_number);
      });

    var staged = [];
    var restingCount = 0;
    candidates.forEach(function (bout) {
      if (activeAthletes[bout.red_athlete_id] || activeAthletes[bout.green_athlete_id]) return;
      var rest = getBoutRest(bout, nowMs);
      if (rest.restLocked) {
        restingCount += 1;
        return;
      }
      var targetMat = (!busyMats[bout.assigned_mat_id] && bout.assigned_mat_id >= 1 && bout.assigned_mat_id <= state.mat_count)
        ? bout.assigned_mat_id
        : 0;
      if (!targetMat) {
        for (var m = 1; m <= state.mat_count; m++) {
          if (!busyMats[m]) { targetMat = m; break; }
        }
      }
      if (!targetMat) return;
      bout.assigned_mat_id = targetMat;
      bout.lifecycle = Lifecycle.Ready;
      bout.assignment_revision = (bout.assignment_revision || 1) + 1;
      busyMats[targetMat] = true;
      activeAthletes[bout.red_athlete_id] = true;
      activeAthletes[bout.green_athlete_id] = true;
      staged.push("Bout #" + bout.bout_number + " -> Mat " + targetMat);
    });

    persistState(true);
    if (staged.length > 0) {
      showToast("Staged " + staged.length + " rested bout(s): " + staged.join(", ") + ".", "ok");
    } else if (restingCount > 0) {
      showToast(restingCount + " current-round bout(s) are still inside 30-minute NFHS recovery rest.", "err");
    } else {
      showToast("All mats already have active bouts staged.", "ok");
    }
  }

  function detectCoachConflicts() {
    var aMap = athleteMap();
    var active = (state.bouts || []).filter(function (b) {
      return !b.is_bye && !isBoutDone(b) && (b.lifecycle === Lifecycle.Ready || b.lifecycle === Lifecycle.InProgress);
    });
    var seen = {};
    var alerts = [];
    for (var i = 0; i < active.length; i++) {
      for (var j = i + 1; j < active.length; j++) {
        var a = active[i], b = active[j];
        if (a.assigned_mat_id === b.assigned_mat_id) continue;
        var aList = [aMap.get(a.red_athlete_id), aMap.get(a.green_athlete_id)].filter(Boolean);
        var bList = [aMap.get(b.red_athlete_id), aMap.get(b.green_athlete_id)].filter(Boolean);
        aList.forEach(function (athA) {
          bList.forEach(function (athB) {
            if (athA.team_id && athA.team_id === athB.team_id) {
              var key = athA.team_id + ":" + a.match_id + ":" + b.match_id;
              if (seen[key]) return;
              seen[key] = true;
              alerts.push({
                teamName: athA.team_name || athA.team_id,
                firstBout: a,
                secondBout: b
              });
            }
          });
        });
      }
    }
    return alerts;
  }

  // ===========================================================================
  // Offline Bracket Generation (1..64 Entrants)
  // ===========================================================================

  function buildStandardTopSeeds(bracketSize) {
    var topSeeds = [1];
    var numMatches = 1;
    while (numMatches * 2 <= bracketSize / 2) {
      var nextMatches = numMatches * 2;
      var next = [];
      for (var i = 0; i < topSeeds.length; i++) {
        var x = topSeeds[i];
        var comp = nextMatches + 1 - x;
        if (i % 2 === 0) next.push(x, comp);
        else next.push(comp, x);
      }
      topSeeds = next;
      numMatches = nextMatches;
    }
    return topSeeds;
  }

  function numberBoutsInRunningOrder() {
    var ordered = (state.bouts || []).slice().sort(function (a, b) {
      return (a.round_index - b.round_index) ||
        (Number(a.weight_class_id) - Number(b.weight_class_id)) ||
        String(a.division_id || "").localeCompare(String(b.division_id || "")) ||
        (Number(a.is_consolation) - Number(b.is_consolation)) ||
        (a.bout_number - b.bout_number) ||
        a.match_id.localeCompare(b.match_id);
    });
    var matPos = {};
    ordered.forEach(function (b, idx) {
      b.bout_number = 101 + idx;
      var pos = (matPos[b.assigned_mat_id] || 0) + 1;
      matPos[b.assigned_mat_id] = pos;
      b.mat_queue_order = pos;
    });
    state.bouts = ordered;
  }

  function generateBracketForClass(weightClassId, requestedFormat, divisionId) {
    var cleanDiv = String(divisionId || "").trim().toUpperCase();
    var matchingDivs = {};
    (state.athletes || []).forEach(function (a) {
      if (a.weight_class_id === weightClassId && isAthleteEligible(a)) {
        matchingDivs[String(a.division_id || "VARSITY").toUpperCase()] = true;
      }
    });
    var divKeys = Object.keys(matchingDivs);
    if ((!cleanDiv || cleanDiv === "ALL") && divKeys.length > 1) {
      throw new Error("Select a specific division before generating " + weightClassId + " lbs.");
    }
    var resolvedDiv = (cleanDiv && cleanDiv !== "ALL") ? cleanDiv : (divKeys[0] || "VARSITY");
    var existingStarted = (state.bouts || []).some(function (b) {
      return b.weight_class_id === weightClassId &&
        String(b.division_id || "VARSITY").toUpperCase() === resolvedDiv &&
        !b.is_bye &&
        (isBoutDone(b) || b.red_score > 0 || b.green_score > 0);
    });
    if (existingStarted) {
      throw new Error("Completed bouts exist in " + resolvedDiv + " " + weightClassId + " lbs. Reopen them before regenerating.");
    }

    var allDivsAtWeight = {};
    (state.athletes || []).forEach(function (a) {
      if (a.weight_class_id === weightClassId) allDivsAtWeight[String(a.division_id || "VARSITY").toUpperCase()] = true;
    });
    var usePrefix = Object.keys(allDivsAtWeight).length > 1 || (resolvedDiv !== "VARSITY");
    var scopeToken = usePrefix ? (resolvedDiv + "-" + weightClassId) : weightClassId;

    var entrants = (state.athletes || [])
      .filter(function (a) {
        return a.weight_class_id === weightClassId &&
          String(a.division_id || "VARSITY").toUpperCase() === resolvedDiv &&
          isAthleteEligible(a);
      })
      .sort(function (a, b) {
        return (a.seed_rank - b.seed_rank) || a.athlete_id.localeCompare(b.athlete_id);
      });

    if (entrants.length > 64) {
      throw new Error("Bracket capacity is 64 wrestlers.");
    }

    state.bouts = (state.bouts || []).filter(function (b) {
      return !(b.weight_class_id === weightClassId && String(b.division_id || "VARSITY").toUpperCase() === resolvedDiv);
    });
    if (entrants.length === 0) return [];
    entrants.forEach(function (a, idx) { a.seed_rank = idx + 1; });

    var fmt = requestedFormat || Format.AutoByCount;
    if (entrants.length === 1) fmt = Format.RoundRobinPool;
    else if (entrants.length === 2) fmt = (fmt === Format.RoundRobinPool) ? Format.RoundRobinPool : Format.BestOfThree;
    else if (entrants.length >= 3 && entrants.length <= 5) fmt = Format.RoundRobinPool;
    else if (fmt === Format.AutoByCount || fmt === Format.BestOfThree) fmt = Format.DoubleElimCrossover;

    var bracketId = "BRK-" + scopeToken + "-" + fmt;
    var p1Ms = period1MsForRules(state.rules_version);
    var matCount = Math.max(1, state.mat_count || 5);
    var nowMs = Date.now();
    var created = [];
    var bMap = boutMap();
    var aMap = athleteMap();

    function mkBout(fields) {
      var matId = fields.assigned_mat_id || 1;
      var node = {
        match_id: fields.match_id,
        bracket_id: bracketId,
        weight_class_id: weightClassId,
        division_id: resolvedDiv,
        format: fmt,
        bout_number: 100 + bMap.size + 1,
        round_index: fields.round_index,
        round_label: fields.round_label,
        is_consolation: Boolean(fields.is_consolation),
        is_placement_bout: Boolean(fields.is_placement_bout),
        is_true_second_challenge: Boolean(fields.is_true_second_challenge),
        placement_rank: fields.placement_rank || 0,
        red_athlete_id: fields.red_athlete_id || "",
        green_athlete_id: fields.green_athlete_id || "",
        is_bye: Boolean(fields.is_bye),
        winner_next_match_id: fields.winner_next_match_id || "",
        loser_next_match_id: fields.loser_next_match_id || "",
        lifecycle: fields.lifecycle || Lifecycle.PendingUpstream,
        assigned_mat_id: matId,
        mat_queue_order: fields.mat_queue_order || 1,
        assignment_revision: 1,
        authority_epoch: 1,
        delegated_android_device_id: "mat-" + matId + "-scorekeeper",
        red_score: 0,
        green_score: 0,
        period_number: 1,
        clock_remaining_ms: fields.is_bye ? 0 : p1Ms,
        clock_running: false,
        winner_athlete_id: fields.winner_athlete_id || "",
        loser_athlete_id: "",
        win_type: fields.win_type || "",
        completed_at_ms: fields.completed_at_ms || 0
      };
      bMap.set(node.match_id, node);
      created.push(node);
      return node;
    }

    if (entrants.length === 1) {
      var sole = entrants[0];
      mkBout({
        match_id: "BOUT-" + scopeToken + "-WALKOVER-1ST",
        round_index: 1,
        round_label: "Uncontested 1st Place (Walkover)",
        is_placement_bout: true,
        placement_rank: 1,
        red_athlete_id: sole.athlete_id,
        is_bye: true,
        lifecycle: Lifecycle.ResultAccepted,
        assigned_mat_id: 1,
        winner_athlete_id: sole.athlete_id,
        win_type: "BYE",
        completed_at_ms: nowMs
      });
    } else if (fmt === Format.BestOfThree) {
      var s1 = entrants[0], s2 = entrants[1];
      var m1Id = "BOUT-" + scopeToken + "-BO3-1";
      var m2Id = "BOUT-" + scopeToken + "-BO3-2";
      var m3Id = "BOUT-" + scopeToken + "-BO3-3";
      mkBout({ match_id: m1Id, round_index: 1, round_label: "Best of 3 - Match 1", red_athlete_id: s1.athlete_id, green_athlete_id: s2.athlete_id, winner_next_match_id: m2Id, loser_next_match_id: m2Id, lifecycle: Lifecycle.Assigned, assigned_mat_id: 1 });
      mkBout({ match_id: m2Id, round_index: 2, round_label: "Best of 3 - Match 2", red_athlete_id: s2.athlete_id, green_athlete_id: s1.athlete_id, winner_next_match_id: m3Id, loser_next_match_id: m3Id, lifecycle: Lifecycle.PendingUpstream, assigned_mat_id: (1 % matCount) + 1 });
      mkBout({ match_id: m3Id, round_index: 3, round_label: "Best of 3 - Match 3 (If Needed)", red_athlete_id: s1.athlete_id, green_athlete_id: s2.athlete_id, is_placement_bout: true, placement_rank: 1, lifecycle: Lifecycle.PendingUpstream, assigned_mat_id: (2 % matCount) + 1 });
    } else if (fmt === Format.RoundRobinPool) {
      var circle = entrants.slice();
      if (circle.length % 2 === 1) circle.push(null);
      for (var rIdx = 1; rIdx < circle.length; rIdx++) {
        for (var ci = 0; ci < circle.length / 2; ci++) {
          var rAth = circle[ci];
          var gAth = circle[circle.length - 1 - ci];
          if (!rAth || !gAth) continue;
          mkBout({
            match_id: "BOUT-" + scopeToken + "-RR" + (created.length + 1),
            round_index: rIdx,
            round_label: "Pool Round " + rIdx,
            red_athlete_id: rAth.athlete_id,
            green_athlete_id: gAth.athlete_id,
            lifecycle: Lifecycle.Assigned,
            assigned_mat_id: (created.length % matCount) + 1
          });
        }
        circle.splice(1, 0, circle.pop());
      }
    } else if (entrants.length <= 8) {
      var slotSeeds = [[0,7],[3,4],[1,6],[2,5]];
      var qfIds = ["QF1","QF2","QF3","QF4"].map(function (s) { return "BOUT-" + scopeToken + "-" + s; });
      var sfIds = ["SF1","SF2"].map(function (s) { return "BOUT-" + scopeToken + "-" + s; });
      var c1Ids = ["C1-1","C1-2"].map(function (s) { return "BOUT-" + scopeToken + "-" + s; });
      var c2Ids = ["C2-1","C2-2"].map(function (s) { return "BOUT-" + scopeToken + "-" + s; });
      var f1Id = "BOUT-" + scopeToken + "-FINAL-1ST";
      var f3Id = "BOUT-" + scopeToken + "-FINAL-3RD";
      var t2Id = "BOUT-" + scopeToken + "-TRUE-2ND";

      slotSeeds.forEach(function (pair, idx) {
        var rId = entrants[pair[0]] ? entrants[pair[0]].athlete_id : "";
        var gId = entrants[pair[1]] ? entrants[pair[1]].athlete_id : "";
        var bye = !rId || !gId;
        mkBout({
          match_id: qfIds[idx],
          round_index: 1,
          round_label: "Championship Quarterfinal",
          red_athlete_id: rId,
          green_athlete_id: gId,
          is_bye: bye,
          winner_next_match_id: idx < 2 ? sfIds[0] : sfIds[1],
          loser_next_match_id: idx < 2 ? c1Ids[0] : c1Ids[1],
          lifecycle: bye ? Lifecycle.ResultAccepted : Lifecycle.Assigned,
          assigned_mat_id: (idx % matCount) + 1,
          winner_athlete_id: bye ? (rId || gId) : "",
          win_type: bye ? "BYE" : "",
          completed_at_ms: bye ? nowMs : 0
        });
      });
      c1Ids.forEach(function (mId, idx) {
        mkBout({ match_id: mId, round_index: 2, round_label: "Consolation Round 1", is_consolation: true, winner_next_match_id: c2Ids[idx], assigned_mat_id: ((idx + 2) % matCount) + 1 });
      });
      sfIds.forEach(function (mId, idx) {
        mkBout({ match_id: mId, round_index: 2, round_label: "Championship Semifinal", winner_next_match_id: f1Id, loser_next_match_id: idx === 0 ? c2Ids[1] : c2Ids[0], assigned_mat_id: (idx % matCount) + 1 });
      });
      c2Ids.forEach(function (mId, idx) {
        mkBout({ match_id: mId, round_index: 3, round_label: "Consolation Semifinal (Crossover)", is_consolation: true, winner_next_match_id: f3Id, assigned_mat_id: ((idx + 2) % matCount) + 1 });
      });
      mkBout({ match_id: f3Id, round_index: 4, round_label: "3rd Place Match", is_consolation: true, is_placement_bout: true, placement_rank: 3, winner_next_match_id: fmt === Format.TrueSecondChallenge ? t2Id : "", assigned_mat_id: Math.min(2, matCount) });
      mkBout({ match_id: f1Id, round_index: 4, round_label: "1st Place Championship Final", is_placement_bout: true, placement_rank: 1, loser_next_match_id: fmt === Format.TrueSecondChallenge ? t2Id : "", assigned_mat_id: 1 });
      if (fmt === Format.TrueSecondChallenge) {
        mkBout({ match_id: t2Id, round_index: 5, round_label: "True Second Challenge Match", is_consolation: true, is_placement_bout: true, is_true_second_challenge: true, placement_rank: 2, assigned_mat_id: 1 });
      }
      created.forEach(function (b) {
        if (b.is_bye && b.winner_athlete_id && b.winner_next_match_id) {
          advanceParticipantToDownstream(bMap, b.winner_next_match_id, b.winner_athlete_id);
        }
      });
      resolveCompletedByesForBracket(bMap, aMap, bracketId, nowMs);
    } else {
      var N = entrants.length <= 16 ? 16 : (entrants.length <= 32 ? 32 : 64);
      var R = Math.round(Math.log(N) / Math.log(2));
      var makeId = function (suf) { return "BOUT-" + scopeToken + "-" + suf; };
      var qSeq = 1;
      var champIds = [];
      for (var ri = 0; ri <= R; ri++) champIds.push([]);
      for (var r = 1; r <= R; r++) {
        var cnt = N >> r;
        var lbl = r === R ? "1st Place Championship Final" : (cnt === 2 ? "Championship Semifinal" : (cnt === 4 ? "Championship Quarterfinal" : "Championship Round of " + (cnt * 2)));
        for (var bi = 0; bi < cnt; bi++) {
          var cid = r === R ? makeId("FINAL-1ST") : makeId("C" + r + "-" + (bi + 1));
          champIds[r].push(cid);
          mkBout({ match_id: cid, round_index: r, round_label: lbl, is_placement_bout: r === R, placement_rank: r === R ? 1 : 0, assigned_mat_id: ((qSeq++ - 1) % matCount) + 1 });
        }
      }
      for (var r2 = 1; r2 < R; r2++) {
        champIds[r2].forEach(function (cid2, idx2) {
          bMap.get(cid2).winner_next_match_id = champIds[r2 + 1][Math.floor(idx2 / 2)];
        });
      }
      var f3 = makeId("FINAL-3RD"), p5 = makeId("P5"), p7 = makeId("P7"), t2 = makeId("TRUE-2ND");
      var consRound = 1;
      var prevCons = [];
      for (var li = 0; li < N / 4; li++) {
        var lid = makeId("L" + consRound + "-" + (li + 1));
        prevCons.push(lid);
        mkBout({ match_id: lid, round_index: consRound + 1, round_label: "Consolation Round " + consRound, is_consolation: true, assigned_mat_id: ((qSeq++ - 1) % matCount) + 1 });
        bMap.get(champIds[1][2 * li]).loser_next_match_id = lid;
        bMap.get(champIds[1][2 * li + 1]).loser_next_match_id = lid;
      }
      for (var c = 2; c < R; c++) {
        var dropCnt = champIds[c].length;
        consRound += 1;
        var dropCons = [];
        for (var di = 0; di < dropCnt; di++) {
          var did = makeId("L" + consRound + "-" + (di + 1));
          dropCons.push(did);
          var dlbl = c === R - 1 ? "Consolation Semifinal (Crossover)" : "Consolation Round " + consRound + " (Crossover)";
          mkBout({ match_id: did, round_index: c + consRound, round_label: dlbl, is_consolation: true, assigned_mat_id: ((qSeq++ - 1) % matCount) + 1 });
          bMap.get(prevCons[di]).winner_next_match_id = did;
          var crossIdx = (c % 2 === 0) ? (dropCnt - 1 - di) : (di ^ Math.floor(dropCnt / 2));
          bMap.get(champIds[c][crossIdx]).loser_next_match_id = did;
        }
        if (c < R - 1) {
          consRound += 1;
          var redCnt = dropCnt / 2;
          var redCons = [];
          for (var rci = 0; rci < redCnt; rci++) {
            var rid = makeId("L" + consRound + "-" + (rci + 1));
            redCons.push(rid);
            var rq = mkBout({ match_id: rid, round_index: c + consRound, round_label: redCnt === 2 ? "Consolation Quarterfinal" : "Consolation Round " + consRound, is_consolation: true, assigned_mat_id: ((qSeq++ - 1) % matCount) + 1 });
            bMap.get(dropCons[2 * rci]).winner_next_match_id = rid;
            bMap.get(dropCons[2 * rci + 1]).winner_next_match_id = rid;
            if (redCnt === 2) rq.loser_next_match_id = p7;
          }
          prevCons = redCons;
        } else {
          for (var si = 0; si < 2; si++) {
            bMap.get(dropCons[si]).winner_next_match_id = f3;
            bMap.get(dropCons[si]).loser_next_match_id = p5;
          }
          prevCons = dropCons;
        }
      }
      var placeRnd = R + consRound + 1;
      var p3Node = mkBout({ match_id: f3, round_index: placeRnd, round_label: "3rd Place Match", is_consolation: true, is_placement_bout: true, placement_rank: 3, assigned_mat_id: ((qSeq++ - 1) % matCount) + 1 });
      mkBout({ match_id: p5, round_index: placeRnd, round_label: "5th Place Match", is_consolation: true, is_placement_bout: true, placement_rank: 5, assigned_mat_id: ((qSeq++ - 1) % matCount) + 1 });
      mkBout({ match_id: p7, round_index: placeRnd, round_label: "7th Place Match", is_consolation: true, is_placement_bout: true, placement_rank: 7, assigned_mat_id: ((qSeq++ - 1) % matCount) + 1 });
      if (fmt === Format.TrueSecondChallenge) {
        mkBout({ match_id: t2, round_index: placeRnd + 1, round_label: "True Second Challenge Match", is_consolation: true, is_placement_bout: true, is_true_second_challenge: true, placement_rank: 2, assigned_mat_id: 1 });
        bMap.get(champIds[R][0]).loser_next_match_id = t2;
        p3Node.winner_next_match_id = t2;
      }
      var topSeeds = buildStandardTopSeeds(N);
      for (var m = 0; m < N / 2; m++) {
        var sA = topSeeds[m], sB = N + 1 - sA;
        var cb = bMap.get(champIds[1][m]);
        var rEnt = (sA >= 1 && sA <= entrants.length) ? entrants[sA - 1].athlete_id : "";
        var gEnt = (sB >= 1 && sB <= entrants.length) ? entrants[sB - 1].athlete_id : "";
        if (rEnt && gEnt) {
          cb.red_athlete_id = rEnt; cb.green_athlete_id = gEnt; cb.is_bye = false; cb.lifecycle = Lifecycle.Assigned;
        } else if (rEnt || gEnt) {
          var only = rEnt || gEnt;
          cb.red_athlete_id = only; cb.green_athlete_id = ""; cb.is_bye = true; cb.lifecycle = Lifecycle.ResultAccepted;
          cb.winner_athlete_id = only; cb.win_type = "BYE"; cb.completed_at_ms = nowMs;
        } else {
          cb.is_bye = true; cb.lifecycle = Lifecycle.ResultAccepted; cb.win_type = "BYE"; cb.completed_at_ms = nowMs;
        }
      }
      created.forEach(function (b) {
        if (b.is_bye && b.winner_athlete_id && b.winner_next_match_id) {
          advanceParticipantToDownstream(bMap, b.winner_next_match_id, b.winner_athlete_id);
        }
      });
      resolveCompletedByesForBracket(bMap, aMap, bracketId, nowMs);
    }

    state.bouts = Array.from(bMap.values());
    numberBoutsInRunningOrder();
    var fm = frozenMap();
    fm.set(resolvedDiv + ":" + weightClassId, true);
    if (!usePrefix) fm.set(weightClassId, true);
    saveFrozenMap(fm);
    persistState(true);
    return created;
  }

  function generateAllBracketsOffline() {
    var groups = {};
    (state.athletes || []).forEach(function (a) {
      if (!isAthleteEligible(a)) return;
      var d = String(a.division_id || "VARSITY").toUpperCase();
      if (ui.selectedDivision !== "ALL" && d !== ui.selectedDivision) return;
      groups[d + ":" + a.weight_class_id] = true;
    });
    var keys = Object.keys(groups).sort(function (a, b) {
      var pa = a.split(":"), pb = b.split(":");
      return pa[0].localeCompare(pb[0]) || (Number(pa[1]) - Number(pb[1]));
    });
    var total = 0;
    keys.forEach(function (k) {
      var parts = k.split(":");
      var created = generateBracketForClass(parts[1], ui.selectedFormat, parts[0]);
      total += created.length;
    });
    showToast("Generated " + keys.length + " bracket(s) (" + total + " nodes).", "ok");
  }

  // ===========================================================================
  // Standings & Placements (Identical to TournamentAuthorityEngine)
  // ===========================================================================

  function computeBracketStandings(weightClassId, divisionId) {
    var cleanDiv = String(divisionId || "").trim().toUpperCase();
    var entrants = (state.athletes || []).filter(function (a) {
      return a.weight_class_id === weightClassId &&
        (!cleanDiv || cleanDiv === "ALL" || String(a.division_id || "VARSITY").toUpperCase() === cleanDiv) &&
        isAthleteEligible(a);
    });
    var classBouts = (state.bouts || []).filter(function (b) {
      return b.weight_class_id === weightClassId &&
        (!cleanDiv || cleanDiv === "ALL" || String(b.division_id || "VARSITY").toUpperCase() === cleanDiv);
    });
    var rows = new Map();
    entrants.forEach(function (a) {
      rows.set(a.athlete_id, {
        place: 0,
        athlete_id: a.athlete_id,
        public_display_name: a.public_display_name,
        team_id: a.team_id,
        team_name: a.team_name,
        seed_rank: a.seed_rank,
        wins: 0,
        losses: 0,
        falls_forfeits_dq: 0,
        tech_falls: 0,
        major_decisions: 0,
        bonus_points: 0,
        points_scored: 0,
        points_allowed: 0
      });
    });
    var h2h = {};
    classBouts.forEach(function (b) {
      if (b.is_bye || !isBoutDone(b)) return;
      var wRow = rows.get(b.winner_athlete_id);
      var lRow = rows.get(b.loser_athlete_id);
      var wRed = b.winner_athlete_id === b.red_athlete_id;
      var wPts = wRed ? b.red_score : b.green_score;
      var lPts = wRed ? b.green_score : b.red_score;
      if (wRow) {
        wRow.wins += 1;
        wRow.points_scored += wPts;
        wRow.points_allowed += lPts;
        if (b.win_type === "FALL" || b.win_type === "FORFEIT" || b.win_type === "INJURY_DEFAULT" || b.win_type === "DQ") {
          wRow.falls_forfeits_dq += 1;
          wRow.bonus_points += 2;
        } else if (b.win_type === "TF") {
          wRow.tech_falls += 1;
          wRow.bonus_points += 1.5;
        } else if (b.win_type === "MD") {
          wRow.major_decisions += 1;
          wRow.bonus_points += 1;
        }
      }
      if (lRow) {
        lRow.losses += 1;
        lRow.points_scored += lPts;
        lRow.points_allowed += wPts;
      }
      if (b.winner_athlete_id && b.loser_athlete_id) {
        var k = b.winner_athlete_id + ":" + b.loser_athlete_id;
        h2h[k] = (h2h[k] || 0) + 1;
      }
    });
    var sorted = Array.from(rows.values()).sort(function (a, b) {
      if (b.wins !== a.wins) return b.wins - a.wins;
      if (a.losses !== b.losses) return a.losses - b.losses;
      var ab = h2h[a.athlete_id + ":" + b.athlete_id] || 0;
      var ba = h2h[b.athlete_id + ":" + a.athlete_id] || 0;
      if (ab !== ba) return ba - ab;
      if (b.bonus_points !== a.bonus_points) return b.bonus_points - a.bonus_points;
      if (b.falls_forfeits_dq !== a.falls_forfeits_dq) return b.falls_forfeits_dq - a.falls_forfeits_dq;
      if (b.tech_falls !== a.tech_falls) return b.tech_falls - a.tech_falls;
      if (b.major_decisions !== a.major_decisions) return b.major_decisions - a.major_decisions;
      var dA = a.points_scored - a.points_allowed;
      var dB = b.points_scored - b.points_allowed;
      if (dB !== dA) return dB - dA;
      if (b.points_scored !== a.points_scored) return b.points_scored - a.points_scored;
      return (a.seed_rank - b.seed_rank) || a.athlete_id.localeCompare(b.athlete_id);
    });
    sorted.forEach(function (r, idx) { r.place = idx + 1; });
    return sorted;
  }

  function computeTeamStandings() {
    var aMap = athleteMap();
    var byePoints = byeAdvancement();
    var map = new Map();
    (state.athletes || []).forEach(function (a) {
      if (!map.has(a.team_id)) {
        map.set(a.team_id, {
          rank: 0,
          team_id: a.team_id,
          team_name: a.team_name,
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
    });
    (state.bouts || []).forEach(function (b) {
      if (!isBoutDone(b) || !b.winner_athlete_id) return;
      var w = aMap.get(b.winner_athlete_id);
      if (!w) return;
      var row = map.get(w.team_id);
      if (!row) return;
      if (b.is_bye) {
        if (b.is_placement_bout && b.placement_rank === 1 && !b.green_athlete_id) {
          row.placement_points += 16;
          row.first_place_winners += 1;
          row.total_points = row.advancement_points + row.placement_points + row.bonus_points;
        }
        return;
      }
      row.advancement_points += (b.is_consolation ? 1 : 2) + (byePoints.get(b.match_id)?.earnedPoints || 0);
      if (b.win_type === "FALL" || b.win_type === "FORFEIT" || b.win_type === "INJURY_DEFAULT" || b.win_type === "DQ") {
        row.bonus_points += 2;
        row.falls_forfeits_dq += 1;
      } else if (b.win_type === "TF") {
        row.bonus_points += 1.5;
        row.tech_falls += 1;
      } else if (b.win_type === "MD") {
        row.bonus_points += 1;
        row.major_decisions += 1;
      }
      if (b.is_placement_bout && b.placement_rank === 1) {
        row.placement_points += 16;
        row.first_place_winners += 1;
      } else if (b.is_placement_bout && b.placement_rank === 3) {
        row.placement_points += 9;
      }
      row.total_points = row.advancement_points + row.placement_points + row.bonus_points;
    });

    var rrGroups = {};
    (state.bouts || []).forEach(function (b) {
      if (b.format === Format.RoundRobinPool && !b.is_bye) {
        var d = String(b.division_id || "VARSITY").toUpperCase();
        var k = d + ":" + b.weight_class_id;
        if (!rrGroups[k]) rrGroups[k] = { wc: b.weight_class_id, div: d, bouts: [] };
        rrGroups[k].bouts.push(b);
      }
    });
    Object.keys(rrGroups).forEach(function (k) {
      var grp = rrGroups[k];
      if (grp.bouts.length > 0 && grp.bouts.every(isBoutDone)) {
        var ps = computeBracketStandings(grp.wc, grp.div);
        if (ps[0] && ps[0].wins > 0 && map.has(ps[0].team_id)) {
          var t1 = map.get(ps[0].team_id);
          t1.placement_points += 16;
          t1.first_place_winners += 1;
          t1.total_points = t1.advancement_points + t1.placement_points + t1.bonus_points;
        }
        if (ps[2] && map.has(ps[2].team_id)) {
          var t3 = map.get(ps[2].team_id);
          t3.placement_points += 9;
          t3.total_points = t3.advancement_points + t3.placement_points + t3.bonus_points;
        }
      }
    });

    var sorted = Array.from(map.values()).sort(function (a, b) {
      return (b.total_points - a.total_points) ||
        (b.falls_forfeits_dq - a.falls_forfeits_dq) ||
        (b.tech_falls - a.tech_falls) ||
        (b.major_decisions - a.major_decisions) ||
        (b.first_place_winners - a.first_place_winners) ||
        a.team_name.localeCompare(b.team_name);
    });
    sorted.forEach(function (r, idx) { r.rank = idx + 1; });
    return sorted;
  }

  // ===========================================================================
  // File Exports & Imports (Self-Saving HTML, OpenMat CSV, OOXML XLSX)
  // ===========================================================================

  function triggerDownload(bytesOrText, mimeType, fileName) {
    var blob = new Blob([bytesOrText], { type: mimeType });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  function slugifyFilePrefix() {
    return String(state.tournament_id || state.tournament_name || "openmat-tournament")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "openmat-tournament";
  }

  function exportUpdatedStandaloneHtml() {
    var stylesText = document.getElementById("openmat-fallback-styles").textContent;
    var runtimeText = document.getElementById("openmat-fallback-runtime").textContent;
    var shellTemplateHtml = document.getElementById("openmat-shell-template").innerHTML;
    var safeTitle = esc(state.tournament_name || "OpenMat Emergency Fallback Tournament");
    var htmlDoc =
      "<!DOCTYPE html>\\n" +
      "<html lang=\\"en\\" data-theme=\\"" + esc(ui.theme) + "\\">\\n" +
      "<head>\\n" +
      "  <meta charset=\\"utf-8\\">\\n" +
      "  <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n" +
      "  <title>" + safeTitle + " - Offline Emergency Fallback</title>\\n" +
      "  <style id=\\"openmat-fallback-styles\\">" + stylesText + "</style>\\n" +
      "</head>\\n" +
      "<body>\\n" +
      shellTemplateHtml + "\\n" +
      "  <template id=\\"openmat-shell-template\\">" + shellTemplateHtml + "</template>\\n" +
      "  <" + "script id=\\"openmat-fallback-state\\" type=\\"application/json\\">" + safeScriptJson(state) + "<\\/script>\\n" +
      "  <" + "script id=\\"openmat-fallback-runtime\\">" + runtimeText + "<\\/script>\\n" +
      "</body>\\n" +
      "</html>\\n";
    dirtySinceFileExport = false;
    triggerDownload(htmlDoc, "text/html;charset=utf-8", slugifyFilePrefix() + "-emergency-fallback.html");
    showToast("Downloaded updated standalone HTML checkpoint.", "ok");
  }

  function escapeCsvCell(val) {
    var s = String(val == null ? "" : val);
    if (s.indexOf(",") >= 0 || s.indexOf("\\"") >= 0 || s.indexOf("\\n") >= 0 || s.indexOf("\\r") >= 0) {
      return "\\"" + s.replace(/"/g, "\\"\\"") + "\\"";
    }
    return s;
  }

  function exportOpenMatBackupCsv() {
    var backupMeta = {
      version: 1,
      tournament_id: state.tournament_id,
      tournament_name: state.tournament_name,
      event_date: state.event_date,
      venue: state.venue,
      rules_version: state.rules_version,
      mat_count: state.mat_count,
      growth_allowance_tenths: state.growth_allowance_tenths,
      consecutive_day_allowance_tenths: state.consecutive_day_allowance_tenths || 0,
      bracket_frozen_by_class: state.bracket_frozen_by_class || [],
      bouts: state.bouts || []
    };
    var formatByClassKey = {};
    (state.bouts || []).forEach(function (b) {
      var k = String(b.division_id || "VARSITY").toUpperCase() + ":" + b.weight_class_id;
      if (!formatByClassKey[k]) formatByClassKey[k] = b.format || Format.DoubleElimCrossover;
    });
    var fm = frozenMap();
    var lines = [
      "# OpenMat Full Tournament Backup & Disaster Recovery CSV (v1)",
      "# Re-importing this CSV into OpenMat Officials Console fully rebuilds all wrestlers, seeds, scale weigh-ins, skin/medical checks, and generated brackets.",
      "#openmat_tournament_backup_v1:" + JSON.stringify(backupMeta),
      "athlete_id,public_display_name,team_id,team_name,division_id,weight_class_id,seed_rank,flowrestling_id,first_name,last_name,school_name,weight_lbs,actual_weight_lbs,grade,check_in_stage,weigh_in_eligible,medically_cleared,medical_decision,medical_reviewer,scale_station_id,scale_id,bracket_frozen,bracket_format,opaque_pass_token"
    ];
    var sortedAthletes = (state.athletes || []).slice().sort(function (a, b) {
      return String(a.division_id || "VARSITY").localeCompare(String(b.division_id || "VARSITY")) ||
        (Number(a.weight_class_id) - Number(b.weight_class_id)) ||
        (a.seed_rank - b.seed_rank) ||
        a.athlete_id.localeCompare(b.athlete_id);
    });
    sortedAthletes.forEach(function (a) {
      var div = String(a.division_id || "VARSITY").toUpperCase();
      var wc = a.weight_class_id;
      var parts = String(a.public_display_name || "").trim().split(/\\s+/);
      var firstName = parts[0] || "";
      var lastName = parts.slice(1).join(" ");
      var wRec = state.weigh_ins ? state.weigh_ins[a.athlete_id] : null;
      var mRec = state.medicals ? state.medicals[a.athlete_id] : null;
      var actualLbs = wRec ? (wRec.measured_weight_tenths / 10).toFixed(1) : "";
      var stageName = String(STAGE_LABELS[a.check_in_stage] || a.check_in_stage || "ELIGIBLE")
        .toUpperCase()
        .replace(/[^A-Z0-9]+/g, "_");
      var isFrz = Boolean(fm.get(div + ":" + wc) || fm.get(wc));
      var row = [
        a.athlete_id,
        a.public_display_name,
        a.team_id,
        a.team_name,
        div,
        wc,
        a.seed_rank,
        a.flowrestling_id || "",
        firstName,
        lastName,
        a.team_name,
        wc,
        actualLbs,
        "",
        stageName,
        Boolean(a.weigh_in_eligible),
        Boolean(a.medically_cleared),
        (mRec && mRec.decision) || (a.medically_cleared ? "CLEARED" : ""),
        (mRec && mRec.reviewer_id) || "Emergency Fallback",
        (wRec && wRec.station_id) || "",
        (wRec && wRec.scale_id) || "",
        isFrz,
        formatByClassKey[div + ":" + wc] || Format.DoubleElimCrossover,
        a.opaque_pass_token || ("PASS-" + wc + "-FALLBACK")
      ].map(escapeCsvCell);
      lines.push(row.join(","));
    });
    dirtySinceFileExport = false;
    triggerDownload(lines.join("\\n") + "\\n", "text/csv;charset=utf-8", slugifyFilePrefix() + "-openmat-backup.csv");
    showToast("Exported OpenMat recovery CSV (" + sortedAthletes.length + " wrestlers, " + (state.bouts || []).length + " bouts).", "ok");
  }

  // Minimal offline OOXML XLSX builder inside standalone HTML
  var crcTable = (function () {
    var t = new Uint32Array(256);
    for (var i = 0; i < 256; i++) {
      var c = i;
      for (var k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
      t[i] = c >>> 0;
    }
    return t;
  })();

  function crc32(bytes) {
    var c = 0xffffffff;
    for (var i = 0; i < bytes.length; i++) c = crcTable[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }

  function colLetter(idx) {
    var n = idx + 1, out = "";
    while (n > 0) { var r = (n - 1) % 26; out = String.fromCharCode(65 + r) + out; n = Math.floor((n - 1) / 26); }
    return out;
  }

  function xmlEsc(s) {
    return String(s == null ? "" : s)
      .replace(/[\\x00-\\x08\\x0B\\x0C\\x0E-\\x1F]/g, "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function exportOfflineXlsx() {
    var enc = new TextEncoder();
    var aMap = athleteMap();
    var contested = (state.bouts || []).filter(function (b) { return !b.is_bye; })
      .sort(function (a, b) { return a.bout_number - b.bout_number; });
    var rowById = new Map(contested.map(function (b, idx) { return [b.match_id, idx + 2]; }));
    var credits = byeAdvancement();

    function sheetXml(rows) {
      var rXml = rows.map(function (r, rIdx) {
        var rn = rIdx + 1;
        var cXml = r.map(function (cell, cIdx) {
          if (!cell) return "";
          var ref = colLetter(cIdx) + rn;
          if (cell.f) {
            return "<c r=\\"" + ref + "\\" t=\\"" + (cell.num ? "" : "str") + "\\"><f>" + xmlEsc(cell.f) + "</f><v>" + xmlEsc(cell.v) + "</v></c>";
          }
          if (typeof cell.v === "number") return "<c r=\\"" + ref + "\\"><v>" + cell.v + "</v></c>";
          return "<c r=\\"" + ref + "\\" t=\\"inlineStr\\"><is><t xml:space=\\"preserve\\">" + xmlEsc(cell.v) + "</t></is></c>";
        }).join("");
        return "<row r=\\"" + rn + "\\">" + cXml + "</row>";
      }).join("");
      return "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\" standalone=\\"yes\\"?>" +
        "<worksheet xmlns=\\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\\"><sheetData>" + rXml + "</sheetData></worksheet>";
    }

    var logRows = [[
      {v:"Bout #"},{v:"Mat"},{v:"Division"},{v:"Weight"},{v:"Round"},{v:"Red Corner"},{v:"Green Corner"},
      {v:"Red Pts"},{v:"Green Pts"},{v:"Winner (R/G)"},{v:"Win Type"},{v:"Winning Wrestler"},{v:"Winning Team"},{v:"Team Pts"},{v:"Red Team"},{v:"Green Team"}
    ]];
    contested.forEach(function (b, idx) {
      var r = idx + 2;
      var ra = aMap.get(b.red_athlete_id), ga = aMap.get(b.green_athlete_id);
      var rLabel = ra ? ("#" + ra.seed_rank + " " + ra.public_display_name + " (" + ra.team_id + ")") : (b.red_athlete_id || "TBD");
      var gLabel = ga ? ("#" + ga.seed_rank + " " + ga.public_display_name + " (" + ga.team_id + ")") : (b.green_athlete_id || "TBD");
      var done = isBoutDone(b);
      var winCode = done ? (b.winner_athlete_id === b.red_athlete_id ? "R" : "G") : "";
      var credit = credits.get(b.match_id);
      var adv = (b.is_consolation ? 1 : 2) + byeAdvancementFormula(credit?.conditions || [], rowById, r, "J", "K");
      var plc = (b.is_placement_bout && b.placement_rank === 1) ? 16 : ((b.is_placement_bout && b.placement_rank === 3) ? 9 : 0);
      var ptsF = "IF(M" + r + "=\\"\\",0," + adv + "+IF(OR(K" + r + "=\\"FALL\\",K" + r + "=\\"FORFEIT\\",K" + r + "=\\"INJURY_DEFAULT\\",K" + r + "=\\"DQ\\"),2,IF(K" + r + "=\\"TF\\",1.5,IF(K" + r + "=\\"MD\\",1,0)))+" + plc + ")";
      logRows.push([
        {v:b.bout_number},{v:b.assigned_mat_id || 1},{v:b.division_id || "VARSITY"},{v:b.weight_class_id},{v:b.round_label},
        {v:rLabel},{v:gLabel},
        {v:done ? b.red_score : ""},{v:done ? b.green_score : ""},{v:winCode},{v:done ? b.win_type : ""},
        {f:"IF(J" + r + "=\\"R\\",F" + r + ",IF(J" + r + "=\\"G\\",G" + r + ",\\"\\"))", v: winCode === "R" ? rLabel : (winCode === "G" ? gLabel : "")},
        {f:"IF(J" + r + "=\\"R\\",O" + r + ",IF(J" + r + "=\\"G\\",P" + r + ",\\"\\"))", v: winCode === "R" ? (ra ? ra.team_id : "") : (winCode === "G" ? (ga ? ga.team_id : "") : "")},
        {f:ptsF, v:winCode ? completedBoutTeamPoints(b, credit?.earnedPoints || 0) : 0, num:true},
        {v:ra ? ra.team_id : ""},{v:ga ? ga.team_id : ""}
      ]);
    });

    var standings = computeTeamStandings();
    var lastRow = Math.max(2, contested.length + 1);
    var stRows = [[{v:"Team Code"},{v:"School"},{v:"Total Pts"},{v:"Wins"}]];
    standings.forEach(function (s, idx) {
      var sr = idx + 2;
      stRows.push([
        {v:s.team_id},{v:s.team_name},
        contested.length > 0
          ? {f:"SUMIF('Bout Runner Log'!$M$2:$M$" + lastRow + ",A" + sr + ",'Bout Runner Log'!$N$2:$N$" + lastRow + ")", v:s.total_points, num:true}
          : {v:s.total_points},
        contested.length > 0
          ? {f:"COUNTIF('Bout Runner Log'!$M$2:$M$" + lastRow + ",A" + sr + ")", v:0, num:true}
          : {v:0}
      ]);
    });

    var files = [
      { p: "[Content_Types].xml", d: enc.encode("<?xml version=\\"1.0\\" encoding=\\"UTF-8\\" standalone=\\"yes\\"?><Types xmlns=\\"http://schemas.openxmlformats.org/package/2006/content-types\\"><Default Extension=\\"rels\\" ContentType=\\"application/vnd.openxmlformats-package.relationships+xml\\"/><Default Extension=\\"xml\\" ContentType=\\"application/xml\\"/><Override PartName=\\"/xl/workbook.xml\\" ContentType=\\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml\\"/><Override PartName=\\"/xl/worksheets/bouts.xml\\" ContentType=\\"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml\\"/><Override PartName=\\"/xl/worksheets/standings.xml\\" ContentType=\\"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml\\"/></Types>") },
      { p: "_rels/.rels", d: enc.encode("<?xml version=\\"1.0\\" encoding=\\"UTF-8\\" standalone=\\"yes\\"?><Relationships xmlns=\\"http://schemas.openxmlformats.org/package/2006/relationships\\"><Relationship Id=\\"rId1\\" Type=\\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\\" Target=\\"xl/workbook.xml\\"/></Relationships>") },
      { p: "xl/workbook.xml", d: enc.encode("<?xml version=\\"1.0\\" encoding=\\"UTF-8\\" standalone=\\"yes\\"?><workbook xmlns=\\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\\" xmlns:r=\\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\\"><sheets><sheet name=\\"Bout Runner Log\\" sheetId=\\"1\\" r:id=\\"rBouts\\"/><sheet name=\\"Team Standings\\" sheetId=\\"2\\" r:id=\\"rStandings\\"/></sheets><calcPr fullCalcOnLoad=\\"1\\"/></workbook>") },
      { p: "xl/_rels/workbook.xml.rels", d: enc.encode("<?xml version=\\"1.0\\" encoding=\\"UTF-8\\" standalone=\\"yes\\"?><Relationships xmlns=\\"http://schemas.openxmlformats.org/package/2006/relationships\\"><Relationship Id=\\"rBouts\\" Type=\\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet\\" Target=\\"worksheets/bouts.xml\\"/><Relationship Id=\\"rStandings\\" Type=\\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet\\" Target=\\"worksheets/standings.xml\\"/></Relationships>") },
      { p: "xl/worksheets/bouts.xml", d: enc.encode(sheetXml(logRows)) },
      { p: "xl/worksheets/standings.xml", d: enc.encode(sheetXml(stRows)) }
    ];

    var localLen = 0, centralLen = 0;
    var prep = files.map(function (f) {
      var nb = enc.encode(f.p);
      localLen += 30 + nb.length + f.d.length;
      centralLen += 46 + nb.length;
      return { nb: nb, d: f.d, crc: crc32(f.d) };
    });
    var out = new Uint8Array(localLen + centralLen + 22);
    var dv = new DataView(out.buffer);
    var off = 0, offs = [];
    prep.forEach(function (it) {
      offs.push(off);
      dv.setUint32(off, 0x04034b50, true); dv.setUint16(off + 4, 20, true); dv.setUint16(off + 6, 0x0800, true);
      dv.setUint32(off + 14, it.crc, true); dv.setUint32(off + 18, it.d.length, true); dv.setUint32(off + 22, it.d.length, true);
      dv.setUint16(off + 26, it.nb.length, true);
      out.set(it.nb, off + 30); out.set(it.d, off + 30 + it.nb.length);
      off += 30 + it.nb.length + it.d.length;
    });
    var cStart = off;
    prep.forEach(function (it, i) {
      dv.setUint32(off, 0x02014b50, true); dv.setUint16(off + 4, 20, true); dv.setUint16(off + 6, 20, true); dv.setUint16(off + 8, 0x0800, true);
      dv.setUint32(off + 16, it.crc, true); dv.setUint32(off + 20, it.d.length, true); dv.setUint32(off + 24, it.d.length, true);
      dv.setUint16(off + 28, it.nb.length, true); dv.setUint32(off + 42, offs[i], true);
      out.set(it.nb, off + 46); off += 46 + it.nb.length;
    });
    dv.setUint32(off, 0x06054b50, true); dv.setUint16(off + 8, prep.length, true); dv.setUint16(off + 10, prep.length, true);
    dv.setUint32(off + 12, off - cStart, true); dv.setUint32(off + 16, cStart, true);

    triggerDownload(out, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", slugifyFilePrefix() + "-emergency-spreadsheet.xlsx");
    showToast("Downloaded offline Excel workbook (.xlsx).", "ok");
  }

  function parseCsvRows(csvText) {
    var rows = [];
    var row = [];
    var cur = "";
    var inQ = false;
    for (var i = 0; i < csvText.length; i++) {
      var ch = csvText[i];
      if (inQ) {
        if (ch === "\\"") {
          if (csvText[i + 1] === "\\"") { cur += "\\""; i++; }
          else inQ = false;
        } else cur += ch;
      } else {
        if (ch === "\\"") inQ = true;
        else if (ch === ",") { row.push(cur); cur = ""; }
        else if (ch === "\\n" || ch === "\\r") {
          if (ch === "\\r" && csvText[i + 1] === "\\n") i++;
          row.push(cur); cur = "";
          if (row.some(function (c) { return c.trim() !== ""; })) rows.push(row);
          row = [];
        } else cur += ch;
      }
    }
    row.push(cur);
    if (row.some(function (c) { return c.trim() !== ""; })) rows.push(row);
    return rows;
  }

  function importCsvOffline(csvText) {
    var clean = String(csvText || "").replace(/^\\uFEFF/, "");
    var backupMeta = null;
    clean.split(/\\r?\\n/).forEach(function (line) {
      var t = line.trim();
      if (t.indexOf("#openmat_tournament_backup_v1:") === 0) {
        try { backupMeta = JSON.parse(t.slice("#openmat_tournament_backup_v1:".length)); } catch (_e) {}
      }
    });
    var rows = parseCsvRows(clean).filter(function (r) { return String(r[0] || "").trim().indexOf("#") !== 0; });
    if (rows.length === 0) throw new Error("CSV file is empty.");
    var hdr = rows[0].map(function (h) { return String(h || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "_"); });
    var idxOf = function (names) {
      for (var i = 0; i < names.length; i++) {
        var p = hdr.indexOf(names[i]);
        if (p >= 0) return p;
      }
      return -1;
    };
    var hasHeader = idxOf(["athlete_id","first_name","public_display_name","name","wrestler","weight_class_id","weight_class_lbs","weight"]) >= 0;
    var dataRows = hasHeader ? rows.slice(1) : rows;
    var importedAthletes = [];
    var weighIns = {};
    var medicals = {};

    dataRows.forEach(function (cols, rIdx) {
      var get = function (names) {
        var p = idxOf(names);
        return (p >= 0 && p < cols.length) ? String(cols[p] || "").trim() : "";
      };
      var fName = get(["first_name","firstname","first"]);
      var lName = get(["last_name","lastname","last"]);
      var fullName = get(["public_display_name","full_name","name","athlete_name","wrestler"]) || [fName, lName].filter(Boolean).join(" ");
      var teamName = get(["team_name","school_name","school","club"]);
      var teamId = (get(["team_id","team_code","team","school_code"]) || teamName.replace(/[^A-Za-z]/g, "").slice(0, 4) || "TEAM").toUpperCase();
      if (!teamName) teamName = teamId;
      var div = (get(["division_id","division","div"]) || "NOVICE").toUpperCase();
      var wc = get(["weight_class_id","weight_class_lbs","weight_class","weight_lbs","weight","wt"]).replace(/\\s*lbs?\\.?$/i, "");
      if (!fullName || !wc) return;
      var athId = get(["athlete_id","id"]) || ("ATH-" + teamId + "-" + wc + "-" + (rIdx + 1));
      var seed = Math.max(1, parseInt(get(["seed_rank","seed"]), 10) || (rIdx + 1));
      var stageRaw = get(["check_in_stage","status"]).toUpperCase();
      var stage = stageRaw === "SCRATCHED" ? 7 : (stageRaw === "WITHDRAWN" ? 6 : 5);
      var actualW = parseFloat(get(["actual_weight_lbs","actual_weight","scale_weight"]));
      if (Number.isFinite(actualW) && actualW >= 50) {
        weighIns[athId] = { station_id: "CSV", scale_id: "CSV", measured_weight_tenths: Math.round(actualW * 10) };
      } else {
        weighIns[athId] = { station_id: "CSV", scale_id: "CSV", measured_weight_tenths: (Number(wc) || 132) * 10 };
      }
      medicals[athId] = { reviewer_id: "CSV", decision: "CLEARED" };
      importedAthletes.push({
        athlete_id: athId,
        opaque_pass_token: get(["opaque_pass_token"]) || ("PASS-" + wc + "-" + (rIdx + 1)),
        public_display_name: fullName,
        team_id: teamId,
        team_name: teamName,
        division_id: div,
        weight_class_id: wc,
        seed_rank: seed,
        flowrestling_id: get(["flowrestling_id"]) || "",
        check_in_stage: stage,
        weigh_in_eligible: stage === 5,
        medically_cleared: stage === 5,
        matches_wrestled_today: 0,
        prior_day_matches: 0,
        last_bout_ended_ms: 0,
        updated_at_ms: Date.now()
      });
    });

    if (backupMeta) {
      state.tournament_id = backupMeta.tournament_id || state.tournament_id;
      state.tournament_name = backupMeta.tournament_name || state.tournament_name;
      state.event_date = backupMeta.event_date || state.event_date;
      state.venue = backupMeta.venue || state.venue;
      state.rules_version = backupMeta.rules_version || state.rules_version;
      state.mat_count = backupMeta.mat_count || state.mat_count;
      state.growth_allowance_tenths = backupMeta.growth_allowance_tenths != null ? backupMeta.growth_allowance_tenths : state.growth_allowance_tenths;
      state.bracket_frozen_by_class = backupMeta.bracket_frozen_by_class || [];
      state.bouts = backupMeta.bouts || [];
    } else {
      state.bouts = [];
      state.bracket_frozen_by_class = [];
    }
    state.athletes = importedAthletes;
    state.weigh_ins = weighIns;
    state.medicals = medicals;
    recomputeWorkloadAndRestFromBouts();
    ensureSelectedWeight();
    ui.tab = (state.bouts && state.bouts.length > 0) ? "desk" : "brackets";
    persistState(true);
    showToast("Imported " + importedAthletes.length + " wrestlers" + (state.bouts.length ? (" and " + state.bouts.length + " bouts") : "") + ".", "ok");
  }

  // ===========================================================================
  // Local HDMI / Projector Wall Board (Zero Network Required)
  // ===========================================================================

  function openWallboardWindow() {
    var win = window.open("", "openmat_fallback_wallboard", "width=1280,height=720");
    if (!win) {
      showToast("Allow pop-ups for this file to open the second-screen Wall Board.", "err");
      return;
    }
    ui.wallboardWin = win;
    refreshWallboard();
  }

  function refreshWallboard() {
    var win = ui.wallboardWin;
    if (!win || win.closed) return;
    var aMap = athleteMap();
    var openBouts = (state.bouts || []).filter(function (b) {
      return !b.is_bye && !isBoutDone(b) && b.red_athlete_id && b.green_athlete_id;
    });
    var matsHtml = "";
    for (var m = 1; m <= (state.mat_count || 5); m++) {
      var mb = openBouts
        .filter(function (b) { return b.assigned_mat_id === m; })
        .sort(function (a, b) {
          var ar = (a.lifecycle === Lifecycle.Ready || a.lifecycle === Lifecycle.InProgress) ? 0 : 1;
          var br = (b.lifecycle === Lifecycle.Ready || b.lifecycle === Lifecycle.InProgress) ? 0 : 1;
          return (ar - br) || (a.mat_queue_order - b.mat_queue_order) || (a.bout_number - b.bout_number);
        });
      var cur = mb[0], deck = mb[1];
      var rCur = cur ? aMap.get(cur.red_athlete_id) : null;
      var gCur = cur ? aMap.get(cur.green_athlete_id) : null;
      var rDeck = deck ? aMap.get(deck.red_athlete_id) : null;
      var gDeck = deck ? aMap.get(deck.green_athlete_id) : null;
      matsHtml += "<div style=\\"background:#111827;border:2px solid #334155;border-radius:12px;padding:14px;display:grid;gap:8px;\\">" +
        "<div style=\\"display:flex;justify-content:space-between;font-weight:900;font-size:20px;color:#f8fafc;\\"><span>MAT " + m + "</span><span style=\\"font-size:14px;color:#94a3b8;\\">" + (cur ? ("BOUT #" + cur.bout_number + " · " + esc(cur.weight_class_id) + " LBS") : "OPEN") + "</span></div>" +
        (cur
          ? "<div style=\\"background:rgba(185,28,28,0.35);color:#fecaca;padding:8px 10px;border-radius:8px;font-size:17px;font-weight:800;\\">R: " + esc(rCur ? rCur.public_display_name : cur.red_athlete_id) + " <small>(" + esc(rCur ? rCur.team_id : "") + ")</small></div>" +
            "<div style=\\"background:rgba(21,128,61,0.35);color:#bbf7d0;padding:8px 10px;border-radius:8px;font-size:17px;font-weight:800;\\">G: " + esc(gCur ? gCur.public_display_name : cur.green_athlete_id) + " <small>(" + esc(gCur ? gCur.team_id : "") + ")</small></div>"
          : "<div style=\\"padding:18px;text-align:center;color:#64748b;\\">Waiting for next bout</div>") +
        (deck
          ? "<div style=\\"border-top:1px solid #334155;padding-top:6px;font-size:13px;color:#cbd5e1;\\"><strong>ON DECK #" + deck.bout_number + " (" + esc(deck.weight_class_id) + " lbs):</strong> " + esc(rDeck ? rDeck.public_display_name : "") + " vs " + esc(gDeck ? gDeck.public_display_name : "") + "</div>"
          : "") +
        "</div>";
    }
    var standings = computeTeamStandings().slice(0, 8);
    var stHtml = standings.map(function (s) {
      return "<span style=\\"background:#1e293b;padding:5px 12px;border-radius:999px;font-size:14px;font-weight:800;\\">#" + s.rank + " " + esc(s.team_name) + ": " + s.total_points.toFixed(1) + "</span>";
    }).join(" ");

    win.document.open();
    win.document.write(
      "<!DOCTYPE html><html lang=\\"en\\"><head><meta charset=\\"utf-8\\"><title>Gym Wall Board</title></head>" +
      "<body style=\\"margin:0;padding:20px;background:#020617;color:#f8fafc;font-family:system-ui,sans-serif;\\">" +
      "<div style=\\"display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;\\">" +
      "<h1 style=\\"margin:0;font-size:26px;\\">" + esc(state.tournament_name || "OpenMat Tournament") + " — Live Mat Assignments</h1>" +
      "<span style=\\"font-size:14px;color:#94a3b8;\\">Updated " + new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"}) + "</span></div>" +
      "<div style=\\"display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:14px;margin-bottom:18px;\\">" + matsHtml + "</div>" +
      "<div style=\\"display:flex;flex-wrap:wrap;gap:8px;align-items:center;\\"><strong style=\\"font-size:14px;color:#94a3b8;\\">TEAM STANDINGS:</strong> " + stHtml + "</div>" +
      "</body></html>"
    );
    win.document.close();
  }

  // ===========================================================================
  // Rendering Helpers & Views
  // ===========================================================================

  function getSlipInput(bout) {
    if (!ui.slipInputs[bout.match_id]) {
      ui.slipInputs[bout.match_id] = {
        winnerId: bout.winner_athlete_id || bout.red_athlete_id || "",
        winType: (bout.win_type && WIN_TYPES.indexOf(bout.win_type) >= 0) ? bout.win_type : "FALL",
        redScore: String(bout.red_score || 0),
        greenScore: String(bout.green_score || 0)
      };
    }
    return ui.slipInputs[bout.match_id];
  }

  function renderSlipEntryControls(bout, aMap) {
    var r = aMap.get(bout.red_athlete_id);
    var g = aMap.get(bout.green_athlete_id);
    var inp = getSlipInput(bout);
    var winOpts =
      "<option value=\\"" + esc(bout.red_athlete_id) + "\\"" + (inp.winnerId === bout.red_athlete_id ? " selected" : "") + ">Red: " + esc(r ? r.public_display_name : bout.red_athlete_id) + "</option>" +
      "<option value=\\"" + esc(bout.green_athlete_id) + "\\"" + (inp.winnerId === bout.green_athlete_id ? " selected" : "") + ">Green: " + esc(g ? g.public_display_name : bout.green_athlete_id) + "</option>";
    var typeOpts = WIN_TYPES.map(function (wt) {
      return "<option value=\\"" + wt + "\\"" + (inp.winType === wt ? " selected" : "") + ">" + wt + "</option>";
    }).join("");

    return "<div class=\\"slip-form\\">" +
      "<div style=\\"display:grid;grid-template-columns:1.5fr 1fr;gap:6px;\\">" +
      "<select aria-label=\\"Winner for Bout #" + bout.bout_number + "\\" data-slip-winner=\\"" + esc(bout.match_id) + "\\">" + winOpts + "</select>" +
      "<select aria-label=\\"Win type for Bout #" + bout.bout_number + "\\" data-slip-wintype=\\"" + esc(bout.match_id) + "\\">" + typeOpts + "</select>" +
      "</div>" +
      "<div style=\\"display:grid;grid-template-columns:1fr 1fr auto;gap:6px;align-items:center;\\">" +
      "<input type=\\"number\\" min=\\"0\\" max=\\"999\\" aria-label=\\"Red score for Bout #" + bout.bout_number + "\\" placeholder=\\"Red Pts\\" value=\\"" + esc(inp.redScore) + "\\" data-slip-red=\\"" + esc(bout.match_id) + "\\" />" +
      "<input type=\\"number\\" min=\\"0\\" max=\\"999\\" aria-label=\\"Green score for Bout #" + bout.bout_number + "\\" placeholder=\\"Green Pts\\" value=\\"" + esc(inp.greenScore) + "\\" data-slip-green=\\"" + esc(bout.match_id) + "\\" />" +
      "<button type=\\"button\\" class=\\"btn-ok\\" data-save-bout=\\"" + esc(bout.match_id) + "\\">Save Result</button>" +
      "</div></div>";
  }

  function renderDeskTab() {
    var aMap = athleteMap();
    var allContested = (state.bouts || []).filter(function (b) { return !b.is_bye; })
      .sort(function (a, b) { return a.bout_number - b.bout_number; });
    var openWithBoth = allContested.filter(function (b) {
      return !isBoutDone(b) && b.red_athlete_id && b.green_athlete_id;
    });
    var curRound = openWithBoth.length > 0
      ? Math.min.apply(null, openWithBoth.map(function (b) { return b.round_index; }))
      : 1;
    var conflicts = detectCoachConflicts();
    var periodText = state.rules_version === NOVICE_RULESET ? "Novice 1-2-2 (1:00 / 2:00 / 2:00)" : "Varsity 2-2-2 (2:00 / 2:00 / 2:00)";

    var html = "";

    html += "<details class=\\"card\\"><summary style=\\"cursor:pointer;font-weight:800;font-size:14px;\\">Emergency Operations Checklist (Single Laptop + Practice Mode + Paper Runners)</summary>" +
      "<ol style=\\"margin:8px 0 0;padding-left:20px;font-size:13px;display:grid;gap:4px;\\">" +
      "<li>Open the Scorekeeper app on each mat phone or tablet and start <strong>Practice Mode (" + esc(periodText) + ")</strong>.</li>" +
      "<li>Open <strong>3. Print Slips and Wall Charts</strong> to print cuttable paper runner bout slips for Mats 1 through " + (state.mat_count || 5) + ".</li>" +
      "<li>When a paper runner brings a completed bout slip to this laptop, enter the winner, win type, and score below.</li>" +
      "<li>Click <strong>Save Updated HTML</strong> or <strong>Export OpenMat CSV</strong> after each round to save a portable backup file.</li>" +
      "</ol></details>";

    if (conflicts.length > 0) {
      html += "<div class=\\"toast err\\"><div><strong>Same-School Mat Conflict:</strong> " +
        conflicts.map(function (c) {
          return esc(c.teamName) + " has Bout #" + c.firstBout.bout_number + " (Mat " + c.firstBout.assigned_mat_id + ") and Bout #" + c.secondBout.bout_number + " (Mat " + c.secondBout.assigned_mat_id + ")";
        }).join(" · ") +
        "</div><div style=\\"display:flex;gap:6px;\\">" +
        conflicts.map(function (c) {
          return "<button type=\\"button\\" class=\\"btn-warn\\" data-hold-bout=\\"" + esc(c.secondBout.match_id) + "\\">Hold #" + c.secondBout.bout_number + " On Deck</button>";
        }).join("") +
        "</div></div>";
    }

    if (allContested.length === 0) {
      html += "<section class=\\"card\\" style=\\"text-align:center;padding:28px;\\">" +
        "<h2>No Brackets Generated Yet</h2>" +
        "<p class=\\"sub\\">Import a roster CSV above or open Tab 2 (Brackets and Seeds) to build brackets offline.</p>" +
        "<button type=\\"button\\" class=\\"btn-primary\\" data-goto-tab=\\"brackets\\" style=\\"margin-top:10px;\\">Open Tab 2: Brackets and Seeds</button>" +
        "</section>";
      return html;
    }

    html += "<section class=\\"card\\"><div class=\\"card-head\\"><div><h2>Active Mats (" + (state.mat_count || 5) + " Mats · Active Round " + curRound + ")</h2>" +
      "<p class=\\"sub\\">Enter paper runner slips directly on each mat card or search any bout number below.</p></div>" +
      "<div class=\\"filter-bar\\">" +
      "<button type=\\"button\\" class=\\"btn-primary\\" id=\\"btn-auto-dispatch\\">Auto-Assign Rested Bouts</button>" +
      "<button type=\\"button\\" data-quick-print=\\"staged-slips\\">Print Active Mat Slips</button>" +
      "</div></div><div class=\\"mats-grid\\">";

    for (var m = 1; m <= (state.mat_count || 5); m++) {
      var matBouts = openWithBoth
        .filter(function (b) { return b.assigned_mat_id === m; })
        .sort(function (a, b) {
          var aReady = (a.lifecycle === Lifecycle.Ready || a.lifecycle === Lifecycle.InProgress) ? 0 : 1;
          var bReady = (b.lifecycle === Lifecycle.Ready || b.lifecycle === Lifecycle.InProgress) ? 0 : 1;
          if (aReady !== bReady) return aReady - bReady;
          var aCur = a.round_index === curRound ? 0 : 1;
          var bCur = b.round_index === curRound ? 0 : 1;
          if (aCur !== bCur) return aCur - bCur;
          var aRest = getBoutRest(a).restLocked ? 1 : 0;
          var bRest = getBoutRest(b).restLocked ? 1 : 0;
          if (aRest !== bRest) return aRest - bRest;
          return (a.mat_queue_order || 9999) - (b.mat_queue_order || 9999) || (a.bout_number - b.bout_number);
        });

      var activeBout = matBouts[0];
      var queueBouts = matBouts.slice(1, 5);
      html += "<article class=\\"mat-card\\" aria-label=\\"Mat " + m + "\\">" +
        "<div style=\\"display:flex;justify-content:space-between;align-items:center;\\">" +
        "<strong style=\\"font-size:16px;\\">MAT " + m + "</strong>" +
        "<span class=\\"pill " + (activeBout ? "ok" : "warn") + "\\">" + (activeBout ? ("ON MAT · #" + activeBout.bout_number) : "OPEN") + "</span></div>";

      if (activeBout) {
        var rAth = aMap.get(activeBout.red_athlete_id);
        var gAth = aMap.get(activeBout.green_athlete_id);
        var restSt = getBoutRest(activeBout);
        html += "<div style=\\"font-size:12px;font-weight:700;color:var(--text-muted);\\">" +
          esc((activeBout.division_id || "VARSITY") + " · " + activeBout.weight_class_id + " lbs · " + activeBout.round_label) + "</div>";
        if (restSt.restLocked) {
          html += "<div class=\\"pill warn\\" style=\\"justify-content:space-between;width:100%;border-radius:6px;padding:5px 8px;\\">" +
            "<span>30m Rest: " + esc(restSt.restingNames.join(", ")) + " (" + restSt.remainingMinutes + "m left)</span>" +
            "<button type=\\"button\\" style=\\"min-height:24px;padding:1px 7px;font-size:11px;\\" data-clear-rest=\\"" + esc(activeBout.match_id) + "\\">Rest Done</button></div>";
        }
        html += "<div class=\\"corner-row red\\"><span><span class=\\"corner-tag red\\">R</span>" +
          esc(rAth ? ("#" + rAth.seed_rank + " " + rAth.public_display_name + " (" + rAth.team_id + ")") : activeBout.red_athlete_id) + "</span></div>" +
          "<div class=\\"corner-row green\\"><span><span class=\\"corner-tag green\\">G</span>" +
          esc(gAth ? ("#" + gAth.seed_rank + " " + gAth.public_display_name + " (" + gAth.team_id + ")") : activeBout.green_athlete_id) + "</span></div>" +
          renderSlipEntryControls(activeBout, aMap);
      } else {
        html += "<div style=\\"padding:16px;text-align:center;background:var(--bg-inset);border-radius:7px;font-size:12px;color:var(--text-muted);\\">No bout staged on Mat " + m + ".</div>";
      }

      if (queueBouts.length > 0) {
        html += "<div style=\\"font-size:11px;font-weight:800;text-transform:uppercase;color:var(--text-muted);margin-top:4px;\\">On Deck (" + queueBouts.length + ")</div>";
        queueBouts.forEach(function (qb, qIdx) {
          var rq = aMap.get(qb.red_athlete_id), gq = aMap.get(qb.green_athlete_id);
          var qRest = getBoutRest(qb);
          var matOpts = "";
          for (var mm = 1; mm <= (state.mat_count || 5); mm++) {
            matOpts += "<option value=\\"" + mm + "\\"" + (qb.assigned_mat_id === mm ? " selected" : "") + ">Mat " + mm + "</option>";
          }
          html += "<div class=\\"queue-row\\"><div style=\\"display:flex;justify-content:space-between;align-items:center;gap:4px;\\">" +
            "<strong>" + (qIdx === 0 ? "ON DECK" : "QUEUE") + " #" + qb.bout_number + " (" + esc(qb.weight_class_id) + " lbs)</strong>" +
            "<div style=\\"display:flex;gap:4px;align-items:center;\\">" +
            (qRest.restLocked
              ? "<span class=\\"pill warn\\">" + qRest.remainingMinutes + "m rest</span><button type=\\"button\\" style=\\"min-height:24px;padding:1px 6px;font-size:11px;\\" data-clear-rest=\\"" + esc(qb.match_id) + "\\">Rest Done</button>"
              : "<button type=\\"button\\" style=\\"min-height:24px;padding:1px 6px;font-size:11px;\\" data-call-bout=\\"" + esc(qb.match_id) + "\\">Call Now</button>") +
            "<select aria-label=\\"Move Bout #" + qb.bout_number + "\\" style=\\"min-height:24px;padding:1px 4px;font-size:11px;\\" data-move-mat=\\"" + esc(qb.match_id) + "\\">" + matOpts + "</select>" +
            "</div></div><div>" + esc(rq ? rq.public_display_name : "TBD") + " vs " + esc(gq ? gq.public_display_name : "TBD") + "</div></div>";
        });
      }
      html += "</article>";
    }
    html += "</div></section>";

    // Fast Bout Lookup & All-Bouts Paper Slip Table
    var q = ui.deskSearch.trim().toLowerCase();
    var filteredBouts = allContested.filter(function (b) {
      var done = isBoutDone(b);
      if (ui.deskFilter === "OPEN" && done) return false;
      if (ui.deskFilter === "DONE" && !done) return false;
      if (ui.deskFilter === "REST" && (done || !getBoutRest(b).restLocked)) return false;
      if (ui.deskFilter.indexOf("MAT:") === 0) {
        var fmId = Number(ui.deskFilter.slice(4));
        if (done || b.assigned_mat_id !== fmId) return false;
      }
      if (!q) return true;
      var ra = aMap.get(b.red_athlete_id), ga = aMap.get(b.green_athlete_id);
      return String(b.bout_number).indexOf(q) >= 0 ||
        ("#" + b.bout_number).indexOf(q) >= 0 ||
        String(b.weight_class_id).toLowerCase().indexOf(q) >= 0 ||
        String(b.round_label).toLowerCase().indexOf(q) >= 0 ||
        (ra && (ra.public_display_name.toLowerCase().indexOf(q) >= 0 || ra.team_id.toLowerCase().indexOf(q) >= 0 || ra.team_name.toLowerCase().indexOf(q) >= 0)) ||
        (ga && (ga.public_display_name.toLowerCase().indexOf(q) >= 0 || ga.team_id.toLowerCase().indexOf(q) >= 0 || ga.team_name.toLowerCase().indexOf(q) >= 0));
    });

    var matFilterBtns = "";
    for (var mf = 1; mf <= (state.mat_count || 5); mf++) {
      var tok = "MAT:" + mf;
      matFilterBtns += "<button type=\\"button\\" class=\\"pill-btn " + (ui.deskFilter === tok ? "active" : "") + "\\" data-desk-filter=\\"" + tok + "\\">Mat " + mf + "</button>";
    }

    html += "<section class=\\"card\\"><div class=\\"card-head\\"><div><h2>Quick Bout Lookup and Paper Result Log (" + filteredBouts.length + ")</h2>" +
      "<p class=\\"sub\\">Search by Bout #, wrestler, school, or weight class to record out-of-order paper slips or correct results.</p></div></div>" +
      "<search class=\\"filter-bar\\" style=\\"margin-bottom:10px;\\">" +
      "<input type=\\"search\\" id=\\"input-desk-search\\" aria-label=\\"Search bout number or wrestler\\" placeholder=\\"Type Bout # (e.g. 104), wrestler, school, or weight...\\" style=\\"min-width:280px;flex:1;\\" value=\\"" + esc(ui.deskSearch) + "\\" />" +
      "<button type=\\"button\\" class=\\"pill-btn " + (ui.deskFilter === "OPEN" ? "active" : "") + "\\" data-desk-filter=\\"OPEN\\">Open Bouts</button>" +
      matFilterBtns +
      "<button type=\\"button\\" class=\\"pill-btn " + (ui.deskFilter === "REST" ? "active" : "") + "\\" data-desk-filter=\\"REST\\">30m Rest</button>" +
      "<button type=\\"button\\" class=\\"pill-btn " + (ui.deskFilter === "DONE" ? "active" : "") + "\\" data-desk-filter=\\"DONE\\">Completed</button>" +
      "<button type=\\"button\\" class=\\"pill-btn " + (ui.deskFilter === "ALL" ? "active" : "") + "\\" data-desk-filter=\\"ALL\\">All</button>" +
      "</search>" +
      "<div style=\\"overflow-x:auto;\\"><table><thead><tr><th>Bout</th><th>Mat</th><th>Weight &amp; Round</th><th>Red Corner</th><th>Green Corner</th><th>Paper Result / Action</th></tr></thead><tbody>";

    filteredBouts.slice(0, 120).forEach(function (b) {
      var ra = aMap.get(b.red_athlete_id), ga = aMap.get(b.green_athlete_id);
      var done = isBoutDone(b);
      var wa = b.winner_athlete_id ? aMap.get(b.winner_athlete_id) : null;
      var actionCell = "";
      if (done) {
        actionCell = "<div style=\\"display:flex;justify-content:space-between;align-items:center;gap:8px;\\">" +
          "<span class=\\"pill ok\\">Winner: " + esc(wa ? wa.public_display_name : b.winner_athlete_id) + " (" + esc(b.win_type) + " " + b.red_score + "-" + b.green_score + ")</span>" +
          "<button type=\\"button\\" style=\\"min-height:28px;padding:2px 9px;font-size:12px;\\" data-open-correction=\\"" + esc(b.match_id) + "\\">Correct / Reopen</button></div>";
      } else if (b.red_athlete_id && b.green_athlete_id) {
        actionCell = renderSlipEntryControls(b, aMap);
      } else {
        actionCell = "<span class=\\"sub\\">Waiting on upstream bouts</span>";
      }
      html += "<tr><td><strong>#" + b.bout_number + "</strong></td><td>Mat " + (b.assigned_mat_id || 1) + "</td>" +
        "<td>" + esc((b.division_id || "VARSITY") + " " + b.weight_class_id + " lbs · " + b.round_label) + "</td>" +
        "<td><strong style=\\"color:var(--corner-red);\\">" + esc(ra ? ("#" + ra.seed_rank + " " + ra.public_display_name + " (" + ra.team_id + ")") : "TBD") + "</strong></td>" +
        "<td><strong style=\\"color:var(--corner-green);\\">" + esc(ga ? ("#" + ga.seed_rank + " " + ga.public_display_name + " (" + ga.team_id + ")") : "TBD") + "</strong></td>" +
        "<td style=\\"min-width:310px;\\">" + actionCell + "</td></tr>";
    });
    html += "</tbody></table></div></section>";
    return html;
  }

  function renderBracketsTab() {
    ensureSelectedWeight();
    var aMap = athleteMap();
    var pWeights = populatedWeights();
    var weightTabs = pWeights.length > 0 ? pWeights : BOYS_WEIGHTS;
    var classAthletes = (state.athletes || [])
      .filter(function (a) {
        return a.weight_class_id === ui.selectedWeight &&
          (ui.selectedDivision === "ALL" || String(a.division_id || "VARSITY").toUpperCase() === ui.selectedDivision);
      })
      .sort(function (a, b) { return a.seed_rank - b.seed_rank; });
    var eligCount = classAthletes.filter(isAthleteEligible).length;
    var classBouts = (state.bouts || [])
      .filter(function (b) {
        return b.weight_class_id === ui.selectedWeight &&
          (ui.selectedDivision === "ALL" || String(b.division_id || "VARSITY").toUpperCase() === ui.selectedDivision);
      })
      .sort(function (a, b) { return (a.round_index - b.round_index) || (a.bout_number - b.bout_number); });

    var champRounds = new Map();
    var consRounds = new Map();
    classBouts.forEach(function (b) {
      var m = b.is_consolation ? consRounds : champRounds;
      var arr = m.get(b.round_label) || [];
      arr.push(b);
      m.set(b.round_label, arr);
    });

    var divOpts = "<option value=\\"ALL\\">All Divisions</option>" + DIVISIONS.map(function (d) {
      return "<option value=\\"" + d + "\\"" + (ui.selectedDivision === d ? " selected" : "") + ">" + d + "</option>";
    }).join("");

    var wtBtns = weightTabs.map(function (wc) {
      var cnt = (state.athletes || []).filter(function (a) {
        return a.weight_class_id === wc && isAthleteEligible(a) &&
          (ui.selectedDivision === "ALL" || String(a.division_id || "VARSITY").toUpperCase() === ui.selectedDivision);
      }).length;
      return "<button type=\\"button\\" class=\\"pill-btn " + (ui.selectedWeight === wc ? "active" : "") + "\\" data-select-weight=\\"" + wc + "\\">" + wc + " lbs" + (cnt > 0 ? (" (" + cnt + ")") : "") + "</button>";
    }).join("");

    var html = "<section class=\\"card\\"><div class=\\"filter-bar\\" style=\\"margin-bottom:10px;\\">" +
      "<select id=\\"select-bracket-div\\" aria-label=\\"Select division\\">" + divOpts + "</select>" +
      wtBtns + "</div>" +
      "<div class=\\"card-head\\" style=\\"border-top:1px solid var(--border-subtle);padding-top:10px;\\">" +
      "<div><h2>" + esc(ui.selectedWeight) + " lbs Bracket (" + eligCount + " Eligible Wrestlers)</h2></div>" +
      "<div class=\\"filter-bar\\">" +
      "<select id=\\"select-bracket-format\\" aria-label=\\"Bracket format\\">" +
      "<option value=\\"AUTO_BY_COUNT\\"" + (ui.selectedFormat === "AUTO_BY_COUNT" ? " selected" : "") + ">Auto by Count (2=Bo3, 3-5=Pool, 6+=Double Elim)</option>" +
      "<option value=\\"BEST_OF_THREE\\"" + (ui.selectedFormat === "BEST_OF_THREE" ? " selected" : "") + ">Best of 3 Series</option>" +
      "<option value=\\"ROUND_ROBIN_POOL\\"" + (ui.selectedFormat === "ROUND_ROBIN_POOL" ? " selected" : "") + ">Round-Robin Pool</option>" +
      "<option value=\\"DOUBLE_ELIM_CROSSOVER\\"" + (ui.selectedFormat === "DOUBLE_ELIM_CROSSOVER" ? " selected" : "") + ">Double-Elimination (Crossover)</option>" +
      "<option value=\\"TRUE_SECOND_CHALLENGE\\"" + (ui.selectedFormat === "TRUE_SECOND_CHALLENGE" ? " selected" : "") + ">Double-Elimination + True Second</option>" +
      "</select>" +
      "<button type=\\"button\\" class=\\"btn-primary\\" id=\\"btn-gen-class\\">Generate " + esc(ui.selectedWeight) + " lbs</button>" +
      "<button type=\\"button\\" class=\\"btn-ok\\" id=\\"btn-gen-all\\">Generate All Weight Classes</button>" +
      "<button type=\\"button\\" data-quick-print=\\"class-bracket\\">Print " + esc(ui.selectedWeight) + " lbs Wall Sheet</button>" +
      "</div></div>";

    function renderRoundCols(rMap) {
      var out = "<div class=\\"bracket-cols\\">";
      rMap.forEach(function (bouts, label) {
        out += "<div class=\\"bracket-col\\"><div style=\\"font-size:11px;font-weight:800;text-transform:uppercase;color:var(--text-muted);border-bottom:1px solid var(--border-subtle);padding-bottom:4px;\\">" + esc(label) + "</div>";
        bouts.forEach(function (b) {
          var ra = aMap.get(b.red_athlete_id), ga = aMap.get(b.green_athlete_id);
          var done = isBoutDone(b);
          out += "<div class=\\"bracket-node\\"><div style=\\"display:flex;justify-content:space-between;color:var(--text-muted);font-weight:700;\\"><span>#" + b.bout_number + " · Mat " + (b.assigned_mat_id || 1) + "</span><span>" + (b.is_bye ? "BYE" : (done ? ("FINAL (" + esc(b.win_type) + ")") : "OPEN")) + "</span></div>" +
            "<div class=\\"corner-row red\\" style=\\"padding:4px 6px;\\"><span>R: " + esc(ra ? ("#" + ra.seed_rank + " " + ra.public_display_name + " (" + ra.team_id + ")") : (b.is_bye ? "BYE" : "TBD")) + "</span><strong>" + (b.is_bye ? "" : b.red_score) + "</strong></div>" +
            "<div class=\\"corner-row green\\" style=\\"padding:4px 6px;\\"><span>G: " + esc(ga ? ("#" + ga.seed_rank + " " + ga.public_display_name + " (" + ga.team_id + ")") : (b.is_bye ? "BYE" : "TBD")) + "</span><strong>" + (b.is_bye ? "" : b.green_score) + "</strong></div>" +
            (!b.is_bye && done ? "<button type=\\"button\\" style=\\"min-height:26px;font-size:11px;\\" data-open-correction=\\"" + esc(b.match_id) + "\\">Correct / Reopen</button>" : "") +
            "</div>";
        });
        out += "</div>";
      });
      out += "</div>";
      return out;
    }

    if (classBouts.length === 0) {
      html += "<p class=\\"sub\\">No bracket generated yet for " + esc(ui.selectedWeight) + " lbs.</p>";
    } else {
      if (champRounds.size > 0) {
        html += "<h3 style=\\"font-size:12px;text-transform:uppercase;color:var(--text-muted);margin:8px 0;\\">Championship / Pool Rounds</h3>" + renderRoundCols(champRounds);
      }
      if (consRounds.size > 0) {
        html += "<h3 style=\\"font-size:12px;text-transform:uppercase;color:var(--text-muted);margin:14px 0 8px;\\">Consolation &amp; Placement Rounds</h3>" + renderRoundCols(consRounds);
      }
      if (classBouts[0].format === Format.RoundRobinPool || classBouts[0].format === Format.BestOfThree) {
        var ps = computeBracketStandings(ui.selectedWeight, ui.selectedDivision === "ALL" ? undefined : ui.selectedDivision);
        html += "<h3 style=\\"font-size:12px;text-transform:uppercase;color:var(--text-muted);margin:14px 0 8px;\\">Pool / Series Standings</h3>" +
          "<table><thead><tr><th>Place</th><th>Wrestler</th><th>School</th><th class=\\"num\\">W-L</th><th class=\\"num\\">Falls</th><th class=\\"num\\">Bonus</th><th class=\\"num\\">Pt Diff</th></tr></thead><tbody>" +
          ps.map(function (r) {
            var diff = r.points_scored - r.points_allowed;
            return "<tr><td><strong>#" + r.place + "</strong></td><td>" + esc(r.public_display_name) + "</td><td>" + esc(r.team_name) + "</td><td class=\\"num\\">" + r.wins + "-" + r.losses + "</td><td class=\\"num\\">" + r.falls_forfeits_dq + "</td><td class=\\"num\\">+" + r.bonus_points.toFixed(1) + "</td><td class=\\"num\\">" + (diff >= 0 ? ("+" + diff) : diff) + "</td></tr>";
          }).join("") + "</tbody></table>";
      }
    }
    html += "</section>";

    // Seed table
    html += "<section class=\\"card\\"><div class=\\"card-head\\"><h2>Seed Order — " + esc(ui.selectedWeight) + " lbs</h2></div>" +
      (classAthletes.length === 0 ? "<p class=\\"sub\\">No wrestlers in this weight class.</p>" :
        "<table><thead><tr><th>Seed</th><th>Wrestler</th><th>School</th><th>Status</th><th class=\\"num\\">Reorder</th></tr></thead><tbody>" +
        classAthletes.map(function (a, i) {
          return "<tr><td><strong>#" + a.seed_rank + "</strong></td><td>" + esc(a.public_display_name) + "</td><td>" + esc(a.team_name + " (" + a.team_id + ")") + "</td><td>" + (isAthleteEligible(a) ? "ELIGIBLE" : esc(STAGE_LABELS[a.check_in_stage] || "PENDING")) + "</td>" +
            "<td class=\\"num\\"><button type=\\"button\\" style=\\"min-height:26px;padding:2px 8px;\\" data-seed-up=\\"" + esc(a.athlete_id) + "\\"" + (i === 0 ? " disabled" : "") + ">↑</button> " +
            "<button type=\\"button\\" style=\\"min-height:26px;padding:2px 8px;\\" data-seed-down=\\"" + esc(a.athlete_id) + "\\"" + (i === classAthletes.length - 1 ? " disabled" : "") + ">↓</button></td></tr>";
        }).join("") + "</tbody></table>") +
      "</section>";
    return html;
  }

  function buildPrintableHtml(mode) {
    var aMap = athleteMap();
    var allContested = (state.bouts || []).filter(function (b) { return !b.is_bye; })
      .sort(function (a, b) { return a.bout_number - b.bout_number; });
    var pDesc = state.rules_version === NOVICE_RULESET ? "1-2-2 Periods" : "2-2-2 Periods";

    function slipCardHtml(b) {
      var ra = b ? aMap.get(b.red_athlete_id) : null;
      var ga = b ? aMap.get(b.green_athlete_id) : null;
      return "<div class=\\"runner-slip\\">" +
        "<div class=\\"runner-slip-head\\"><span>" + (b ? ("MAT " + (b.assigned_mat_id || 1) + " · BOUT #" + b.bout_number) : "MAT ____ · BOUT #______") + "</span>" +
        "<span style=\\"font-size:12px;\\">" + (b ? esc((b.division_id || "VARSITY") + " · " + b.weight_class_id + " LBS · " + b.round_label) : "DIV ______ · WT ______ LBS") + "</span></div>" +
        "<div style=\\"font-size:11px;color:#334155;\\">" + esc(state.tournament_name || "OpenMat Tournament") + " (" + pDesc + ") — Circle Winner &amp; Return Slip to Head Table Laptop</div>" +
        "<div class=\\"runner-slip-corner\\"><span>[  ] RED: " + (b ? esc(ra ? ("#" + ra.seed_rank + " " + ra.public_display_name + " (" + ra.team_name + ")") : (b.red_athlete_id || "________________")) : "________________________________") + "</span><span>Pts: <span class=\\"runner-box\\"></span></span></div>" +
        "<div class=\\"runner-slip-corner\\"><span>[  ] GREEN: " + (b ? esc(ga ? ("#" + ga.seed_rank + " " + ga.public_display_name + " (" + ga.team_name + ")") : (b.green_athlete_id || "________________")) : "________________________________") + "</span><span>Pts: <span class=\\"runner-box\\"></span></span></div>" +
        "<div style=\\"display:flex;justify-content:space-between;align-items:center;font-size:11px;font-weight:700;padding-top:2px;\\">" +
        "<span>Win Type: [ ] FALL (Time ______)  [ ] TF  [ ] MD  [ ] DEC  [ ] FF  [ ] INJ  [ ] DQ</span>" +
        "<span>Ref / Table: ________</span></div></div>";
    }

    if (mode === "blank-slips") {
      var blanks = [];
      for (var bi = 0; bi < 8; bi++) blanks.push(slipCardHtml(null));
      return "<div class=\\"print-slips-grid\\">" + blanks.join("") + "</div>";
    }
    if (mode === "staged-slips" || mode === "round-slips") {
      var slips = allContested.filter(function (b) {
        if (isBoutDone(b)) return false;
        if (mode === "staged-slips") {
          return Boolean(b.red_athlete_id && b.green_athlete_id) &&
            (b.lifecycle === Lifecycle.Ready || b.lifecycle === Lifecycle.InProgress || b.mat_queue_order <= 2);
        }
        return b.round_index === Number(ui.printRound || 1);
      });
      if (slips.length === 0) {
        return "<p>No matching uncompleted bouts for this slip selection. Try Round Slips or Blank Emergency Slips.</p>";
      }
      return "<div class=\\"print-slips-grid\\">" + slips.map(slipCardHtml).join("") + "</div>";
    }

    // Wall bracket sheets
    ensureSelectedWeight();
    var targetWeights = mode === "class-bracket" ? [ui.selectedWeight] : populatedWeights();
    var sheets = [];
    if (mode === "all-brackets") {
      var standings = computeTeamStandings();
      sheets.push("<div class=\\"wall-bracket-sheet wall-page-break\\"><h2 style=\\"margin:0 0 8px;\\">" + esc(state.tournament_name) + " — Official Team Standings</h2>" +
        "<table><thead><tr><th>Rank</th><th>School</th><th class=\\"num\\">Total Pts</th><th class=\\"num\\">Adv</th><th class=\\"num\\">Place</th><th class=\\"num\\">Bonus</th><th class=\\"num\\">Falls</th><th class=\\"num\\">Champs</th></tr></thead><tbody>" +
        standings.map(function (s) {
          return "<tr><td>#" + s.rank + "</td><td><strong>" + esc(s.team_name) + "</strong> (" + esc(s.team_id) + ")</td><td class=\\"num\\"><strong>" + s.total_points.toFixed(1) + "</strong></td><td class=\\"num\\">" + s.advancement_points.toFixed(1) + "</td><td class=\\"num\\">" + s.placement_points.toFixed(1) + "</td><td class=\\"num\\">" + s.bonus_points.toFixed(1) + "</td><td class=\\"num\\">" + s.falls_forfeits_dq + "</td><td class=\\"num\\">" + s.first_place_winners + "</td></tr>";
        }).join("") + "</tbody></table></div>");
    }
    targetWeights.forEach(function (wc, idx) {
      var bouts = (state.bouts || []).filter(function (b) { return b.weight_class_id === wc && !b.is_bye; })
        .sort(function (a, b) { return (Number(a.is_consolation) - Number(b.is_consolation)) || (a.round_index - b.round_index) || (a.bout_number - b.bout_number); });
      if (bouts.length === 0) return;
      var cls = (idx < targetWeights.length - 1) ? "wall-bracket-sheet wall-page-break" : "wall-bracket-sheet";
      sheets.push("<div class=\\"" + cls + "\\"><h2 style=\\"margin:0 0 8px;\\">" + esc(state.tournament_name) + " — " + esc(wc) + " lbs Bracket</h2>" +
        "<table><thead><tr><th>Bout #</th><th>Mat</th><th>Round</th><th>Red Corner</th><th>Green Corner</th><th>Winner &amp; Result</th></tr></thead><tbody>" +
        bouts.map(function (b) {
          var ra = aMap.get(b.red_athlete_id), ga = aMap.get(b.green_athlete_id);
          var wa = b.winner_athlete_id ? aMap.get(b.winner_athlete_id) : null;
          return "<tr><td><strong>#" + b.bout_number + "</strong></td><td>Mat " + (b.assigned_mat_id || 1) + "</td><td>" + esc(b.round_label) + "</td>" +
            "<td>" + esc(ra ? ("#" + ra.seed_rank + " " + ra.public_display_name + " (" + ra.team_id + ")") : "TBD") + "</td>" +
            "<td>" + esc(ga ? ("#" + ga.seed_rank + " " + ga.public_display_name + " (" + ga.team_id + ")") : "TBD") + "</td>" +
            "<td>" + (isBoutDone(b) ? ("<strong>" + esc(wa ? wa.public_display_name : b.winner_athlete_id) + "</strong> (" + esc(b.win_type) + " " + b.red_score + "-" + b.green_score + ")") : "________________") + "</td></tr>";
        }).join("") + "</tbody></table></div>");
    });
    return sheets.join("") || "<p>No brackets generated yet.</p>";
  }

  function renderPrintTab() {
    var roundsSet = {};
    (state.bouts || []).forEach(function (b) { if (!b.is_bye) roundsSet[b.round_index] = true; });
    var rounds = Object.keys(roundsSet).map(Number).sort(function (a, b) { return a - b; });
    if (rounds.length === 0) rounds = [1];

    var previewHtml = buildPrintableHtml(ui.printMode);
    document.getElementById("print-only-container").innerHTML = previewHtml;

    return "<section class=\\"card\\"><div class=\\"card-head\\"><div><h2>Print Paper Runner Slips and Wall Brackets</h2>" +
      "<p class=\\"sub\\">Print cuttable bout slips for mat runners or full bracket sheets to tape on the gymnasium wall.</p></div>" +
      "<button type=\\"button\\" class=\\"btn-primary\\" id=\\"btn-trigger-print\\">Print Selected Packet</button></div>" +
      "<div class=\\"filter-bar\\" style=\\"margin-bottom:14px;\\">" +
      "<button type=\\"button\\" class=\\"pill-btn " + (ui.printMode === "staged-slips" ? "active" : "") + "\\" data-print-mode=\\"staged-slips\\">Active Mat &amp; On-Deck Slips</button>" +
      "<button type=\\"button\\" class=\\"pill-btn " + (ui.printMode === "round-slips" ? "active" : "") + "\\" data-print-mode=\\"round-slips\\">Round Slips</button>" +
      (ui.printMode === "round-slips"
        ? "<select id=\\"select-print-round\\" aria-label=\\"Select round for slips\\">" + rounds.map(function (r) { return "<option value=\\"" + r + "\\"" + (Number(ui.printRound) === r ? " selected" : "") + ">Round " + r + "</option>"; }).join("") + "</select>"
        : "") +
      "<button type=\\"button\\" class=\\"pill-btn " + (ui.printMode === "blank-slips" ? "active" : "") + "\\" data-print-mode=\\"blank-slips\\">Blank Emergency Slips (8)</button>" +
      "<button type=\\"button\\" class=\\"pill-btn " + (ui.printMode === "class-bracket" ? "active" : "") + "\\" data-print-mode=\\"class-bracket\\">Selected Weight Wall Sheet (" + esc(ui.selectedWeight || "132") + " lbs)</button>" +
      "<button type=\\"button\\" class=\\"pill-btn " + (ui.printMode === "all-brackets" ? "active" : "") + "\\" data-print-mode=\\"all-brackets\\">All Wall Brackets + Standings</button>" +
      "</div>" +
      "<div style=\\"border-top:1px solid var(--border-subtle);padding-top:12px;\\">" + previewHtml + "</div></section>";
  }

  function renderStandingsTab() {
    var standings = computeTeamStandings();
    var q = ui.rosterSearch.trim().toLowerCase();
    var filteredRoster = (state.athletes || []).filter(function (a) {
      if (!q) return true;
      return a.public_display_name.toLowerCase().indexOf(q) >= 0 ||
        a.team_name.toLowerCase().indexOf(q) >= 0 ||
        a.team_id.toLowerCase().indexOf(q) >= 0 ||
        a.weight_class_id.indexOf(q) >= 0;
    });

    var schoolOpts = PRESET_SCHOOLS.map(function (s) {
      return "<option value=\\"" + esc(s.teamId) + "\\"" + (ui.walkupTeamId === s.teamId ? " selected" : "") + ">" + esc(s.teamName + " (" + s.teamId + ")") + "</option>";
    }).join("") + "<option value=\\"CUSTOM\\">Custom School</option>";

    var html = "<section class=\\"card\\"><div class=\\"card-head\\"><div><h2>NFHS Team Standings</h2>" +
      "<p class=\\"sub\\">Advancement (+2 Champ / +1 Cons), Bonus (+2 Fall/FF/DQ, +1.5 TF, +1 MD), and Placement (+16 1st, +9 3rd).</p></div>" +
      "<button type=\\"button\\" data-quick-print=\\"all-brackets\\">Print Standings &amp; Brackets</button></div>" +
      (standings.length === 0 ? "<p class=\\"sub\\">No schools registered yet.</p>" :
        "<div style=\\"overflow-x:auto;\\"><table><thead><tr><th>Rank</th><th>School / Team</th><th class=\\"num\\">Total Pts</th><th class=\\"num\\">Adv</th><th class=\\"num\\">Place</th><th class=\\"num\\">Bonus</th><th class=\\"num\\">Pins/FF</th><th class=\\"num\\">TF</th><th class=\\"num\\">MD</th><th class=\\"num\\">Champs</th></tr></thead><tbody>" +
        standings.map(function (s) {
          return "<tr><td><strong>#" + s.rank + "</strong></td><td><strong>" + esc(s.team_name) + "</strong> (" + esc(s.team_id) + ")</td><td class=\\"num\\"><strong>" + s.total_points.toFixed(1) + "</strong></td><td class=\\"num\\">" + s.advancement_points.toFixed(1) + "</td><td class=\\"num\\">" + s.placement_points.toFixed(1) + "</td><td class=\\"num\\">" + s.bonus_points.toFixed(1) + "</td><td class=\\"num\\">" + s.falls_forfeits_dq + "</td><td class=\\"num\\">" + s.tech_falls + "</td><td class=\\"num\\">" + s.major_decisions + "</td><td class=\\"num\\">" + s.first_place_winners + "</td></tr>";
        }).join("") + "</tbody></table></div>") + "</section>";

    // Offline Event Settings & Walk-up Wrestler
    html += "<section class=\\"card\\"><div class=\\"card-head\\"><h2>Event Settings and Walk-Up Wrestler</h2></div>" +
      "<div class=\\"filter-bar\\" style=\\"margin-bottom:12px;\\">" +
      "<label>Mats: <select id=\\"select-mat-count\\">" + [1,2,3,4,5,6,7,8,10,12,16,20].map(function (n) { return "<option value=\\"" + n + "\\"" + (Number(state.mat_count) === n ? " selected" : "") + ">" + n + " Mats</option>"; }).join("") + "</select></label>" +
      "<label>Periods: <select id=\\"select-rules-version\\">" +
      "<option value=\\"" + NOVICE_RULESET + "\\"" + (state.rules_version === NOVICE_RULESET ? " selected" : "") + ">Novice / JV (1-2-2 min)</option>" +
      "<option value=\\"" + VARSITY_RULESET + "\\"" + (state.rules_version === VARSITY_RULESET ? " selected" : "") + ">Varsity (2-2-2 min)</option>" +
      "</select></label></div>" +
      "<div class=\\"filter-bar\\">" +
      "<input type=\\"text\\" id=\\"input-walkup-name\\" placeholder=\\"Walk-up wrestler full name\\" value=\\"" + esc(ui.walkupName) + "\\" />" +
      "<select id=\\"select-walkup-school\\" aria-label=\\"Preset school\\">" + schoolOpts + "</select>" +
      "<input type=\\"text\\" id=\\"input-walkup-team-name\\" placeholder=\\"School name\\" value=\\"" + esc(ui.walkupTeamName) + "\\" />" +
      "<input type=\\"text\\" id=\\"input-walkup-team-id\\" placeholder=\\"Code\\" style=\\"width:80px;\\" value=\\"" + esc(ui.walkupTeamId) + "\\" />" +
      "<select id=\\"select-walkup-div\\" aria-label=\\"Walk-up division\\">" + DIVISIONS.map(function (d) { return "<option value=\\"" + d + "\\"" + (ui.walkupDivision === d ? " selected" : "") + ">" + d + "</option>"; }).join("") + "</select>" +
      "<select id=\\"select-walkup-wt\\" aria-label=\\"Walk-up weight\\">" + ALL_WEIGHTS.map(function (w) { return "<option value=\\"" + w + "\\"" + (ui.walkupWeight === w ? " selected" : "") + ">" + w + " lbs</option>"; }).join("") + "</select>" +
      "<button type=\\"button\\" class=\\"btn-primary\\" id=\\"btn-add-walkup\\">+ Add Eligible Wrestler</button>" +
      "</div></section>";

    // Roster & Scratch
    html += "<section class=\\"card\\"><div class=\\"card-head\\"><div><h2>Roster and Scratch Controls (" + (state.athletes || []).length + ")</h2>" +
      "<p class=\\"sub\\">Scratching a wrestler automatically forfeits unstarted bouts and advances opponents.</p></div>" +
      "<input type=\\"search\\" id=\\"input-roster-search\\" aria-label=\\"Search roster\\" placeholder=\\"Search wrestler, school, or weight...\\" value=\\"" + esc(ui.rosterSearch) + "\\" /></div>" +
      "<div style=\\"overflow-x:auto;max-height:440px;overflow-y:auto;\\"><table><thead><tr><th>Wrestler</th><th>School</th><th>Div / Wt</th><th>Seed</th><th>Status</th><th class=\\"num\\">Action</th></tr></thead><tbody>" +
      filteredRoster.map(function (a) {
        var scratched = a.check_in_stage === 6 || a.check_in_stage === 7;
        return "<tr><td><strong>" + esc(a.public_display_name) + "</strong></td><td>" + esc(a.team_name + " (" + a.team_id + ")") + "</td><td>" + esc(a.division_id + " " + a.weight_class_id + " lbs") + "</td><td>#" + a.seed_rank + "</td>" +
          "<td><span class=\\"pill " + (scratched ? "err" : "ok") + "\\">" + (scratched ? "SCRATCHED" : "ELIGIBLE") + "</span></td>" +
          "<td class=\\"num\\">" + (scratched
            ? "<button type=\\"button\\" style=\\"min-height:28px;font-size:12px;\\" data-reinstate-ath=\\"" + esc(a.athlete_id) + "\\">Reinstate</button>"
            : "<button type=\\"button\\" class=\\"btn-danger\\" style=\\"min-height:28px;font-size:12px;\\" data-scratch-ath=\\"" + esc(a.athlete_id) + "\\">Scratch</button>") +
          "</td></tr>";
      }).join("") + "</tbody></table></div></section>";

    return html;
  }

  function openCorrectionDialog(matchId) {
    var bout = boutMap().get(matchId);
    if (!bout) return;
    var aMap = athleteMap();
    var ra = aMap.get(bout.red_athlete_id), ga = aMap.get(bout.green_athlete_id);
    var impact = previewDownstreamImpact(matchId);
    ui.correctionMatchId = matchId;
    ui.correctionWinnerId = bout.winner_athlete_id || bout.red_athlete_id;
    ui.correctionWinType = (bout.win_type && WIN_TYPES.indexOf(bout.win_type) >= 0) ? bout.win_type : "DEC";
    ui.correctionRedScore = String(bout.red_score || 0);
    ui.correctionGreenScore = String(bout.green_score || 0);

    var dlg = document.getElementById("fallback-correction-dialog");
    dlg.innerHTML = "<h3 style=\\"margin:0 0 8px;\\">Correct or Reopen Bout #" + bout.bout_number + "</h3>" +
      "<p class=\\"sub\\" style=\\"margin-bottom:12px;\\">Downstream bouts affected: <strong>" +
      (impact.affected.length > 0 ? impact.affected.map(function (n) { return "#" + n.bout_number; }).join(", ") : "None") +
      "</strong>" + (!impact.safe ? " — <span style=\\"color:var(--status-err);\\">Later downstream bouts have results. Correct or reopen the downstream bout first.</span>" : "") + "</p>" +
      "<div style=\\"display:grid;gap:8px;margin-bottom:14px;\\">" +
      "<label>Winner<br/><select id=\\"dlg-corr-winner\\" style=\\"width:100%;\\">" +
      "<option value=\\"" + esc(bout.red_athlete_id) + "\\"" + (ui.correctionWinnerId === bout.red_athlete_id ? " selected" : "") + ">Red: " + esc(ra ? ra.public_display_name : bout.red_athlete_id) + "</option>" +
      "<option value=\\"" + esc(bout.green_athlete_id) + "\\"" + (ui.correctionWinnerId === bout.green_athlete_id ? " selected" : "") + ">Green: " + esc(ga ? ga.public_display_name : bout.green_athlete_id) + "</option>" +
      "</select></label>" +
      "<label>Win Type<br/><select id=\\"dlg-corr-wintype\\" style=\\"width:100%;\\">" +
      WIN_TYPES.map(function (wt) { return "<option value=\\"" + wt + "\\"" + (ui.correctionWinType === wt ? " selected" : "") + ">" + wt + "</option>"; }).join("") +
      "</select></label>" +
      "<div style=\\"display:grid;grid-template-columns:1fr 1fr;gap:8px;\\">" +
      "<label>Red Score<br/><input type=\\"number\\" id=\\"dlg-corr-red\\" min=\\"0\\" max=\\"999\\" style=\\"width:100%;\\" value=\\"" + esc(ui.correctionRedScore) + "\\" /></label>" +
      "<label>Green Score<br/><input type=\\"number\\" id=\\"dlg-corr-green\\" min=\\"0\\" max=\\"999\\" style=\\"width:100%;\\" value=\\"" + esc(ui.correctionGreenScore) + "\\" /></label>" +
      "</div></div>" +
      "<div style=\\"display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;\\">" +
      "<button type=\\"button\\" class=\\"btn-danger\\" id=\\"btn-dlg-reopen\\"" + (!impact.safe ? " disabled" : "") + ">Clear Result (Reopen Bout)</button>" +
      "<div style=\\"display:flex;gap:6px;\\">" +
      "<button type=\\"button\\" id=\\"btn-dlg-cancel\\">Cancel</button>" +
      "<button type=\\"button\\" class=\\"btn-primary\\" id=\\"btn-dlg-apply\\"" + (!impact.safe ? " disabled" : "") + ">Apply Correction</button>" +
      "</div></div>";
    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
  }

  function closeCorrectionDialog() {
    var dlg = document.getElementById("fallback-correction-dialog");
    if (dlg && typeof dlg.close === "function" && dlg.open) dlg.close();
    else if (dlg) dlg.removeAttribute("open");
  }

  function render() {
    document.documentElement.setAttribute("data-theme", ui.theme);
    var contested = (state.bouts || []).filter(function (b) { return !b.is_bye; });
    var doneCount = contested.filter(isBoutDone).length;
    var eligAthletes = (state.athletes || []).filter(isAthleteEligible).length;

    var titleEl = document.getElementById("hdr-tournament-title");
    if (titleEl) titleEl.textContent = state.tournament_name || "OpenMat Emergency Fallback Tournament";
    var saveEl = document.getElementById("hdr-save-status");
    if (saveEl) saveEl.textContent = lastSavedLabel + (dirtySinceFileExport ? " · Unexported edits" : "");
    var progEl = document.getElementById("hdr-progress-summary");
    if (progEl) progEl.textContent = eligAthletes + " Eligible · " + doneCount + " / " + contested.length + " Bouts · " + (state.mat_count || 5) + " Mats";

    ["desk","brackets","print","standings"].forEach(function (t) {
      var btn = document.getElementById("tab-btn-" + t);
      if (btn) btn.setAttribute("aria-selected", ui.tab === t ? "true" : "false");
    });

    var mainEl = document.getElementById("fallback-main");
    var toastHtml = ui.toastMsg
      ? "<div class=\\"toast " + (ui.toastKind === "err" ? "err" : "ok") + "\\" role=\\"status\\"><span>" + esc(ui.toastMsg) + "</span><button type=\\"button\\" id=\\"btn-dismiss-toast\\" style=\\"min-height:26px;padding:2px 8px;font-size:11px;\\">Dismiss</button></div>"
      : "";

    var bodyHtml = "";
    if (ui.tab === "desk") bodyHtml = renderDeskTab();
    else if (ui.tab === "brackets") bodyHtml = renderBracketsTab();
    else if (ui.tab === "print") bodyHtml = renderPrintTab();
    else bodyHtml = renderStandingsTab();

    mainEl.innerHTML = toastHtml + bodyHtml;
  }

  // ===========================================================================
  // Event Delegation (Zero Inline Event Handlers)
  // ===========================================================================

  document.addEventListener("click", function (e) {
    var target = e.target && e.target.closest ? e.target.closest("button") : null;
    if (!target) return;
    try {
      if (target.id === "btn-save-html") { exportUpdatedStandaloneHtml(); return; }
      if (target.id === "btn-export-csv") { exportOpenMatBackupCsv(); return; }
      if (target.id === "btn-export-xlsx") { exportOfflineXlsx(); return; }
      if (target.id === "btn-open-wallboard") { openWallboardWindow(); return; }
      if (target.id === "btn-toggle-theme") { ui.theme = ui.theme === "dark" ? "light" : "dark"; render(); return; }
      if (target.id === "btn-dismiss-toast") { ui.toastMsg = ""; render(); return; }
      if (target.id === "btn-auto-dispatch") { autoDispatchRestedBouts(); return; }
      if (target.id === "btn-trigger-print") { window.print(); return; }
      if (target.id === "btn-gen-class") {
        var created = generateBracketForClass(ui.selectedWeight, ui.selectedFormat, ui.selectedDivision === "ALL" ? undefined : ui.selectedDivision);
        showToast("Generated " + ui.selectedWeight + " lbs bracket (" + created.length + " nodes).", "ok");
        return;
      }
      if (target.id === "btn-gen-all") { generateAllBracketsOffline(); return; }
      if (target.id === "btn-add-walkup") {
        var nm = ui.walkupName.trim();
        if (!nm) throw new Error("Enter the walk-up wrestler's name.");
        var tId = (ui.walkupTeamId.trim() || "UNAT").toUpperCase();
        var tName = ui.walkupTeamName.trim() || tId;
        var athId = "ATH-" + tId + "-" + ui.walkupWeight + "-" + Date.now().toString(36).toUpperCase();
        state.athletes.push({
          athlete_id: athId,
          opaque_pass_token: "PASS-" + ui.walkupWeight + "-" + Date.now().toString(36),
          public_display_name: nm,
          team_id: tId,
          team_name: tName,
          division_id: ui.walkupDivision,
          weight_class_id: ui.walkupWeight,
          seed_rank: (state.athletes.filter(function (a) { return a.weight_class_id === ui.walkupWeight; }).length + 1),
          flowrestling_id: "",
          check_in_stage: 5,
          weigh_in_eligible: true,
          medically_cleared: true,
          matches_wrestled_today: 0,
          prior_day_matches: 0,
          last_bout_ended_ms: 0,
          updated_at_ms: Date.now()
        });
        state.weigh_ins[athId] = { station_id: "WALKUP", scale_id: "WALKUP", measured_weight_tenths: Number(ui.walkupWeight) * 10 };
        state.medicals[athId] = { reviewer_id: "Head Official", decision: "CLEARED" };
        ui.walkupName = "";
        persistState(true);
        showToast("Added walk-up wrestler " + nm + " (" + ui.walkupWeight + " lbs).", "ok");
        return;
      }
      if (target.id === "btn-dlg-cancel") { closeCorrectionDialog(); return; }
      if (target.id === "btn-dlg-apply") { applyCorrectionFromDialog(); return; }
      if (target.id === "btn-dlg-reopen") { reopenBoutFromDialog(); return; }

      var tabAttr = target.getAttribute("data-tab") || target.getAttribute("data-goto-tab");
      if (tabAttr) { ui.tab = tabAttr; render(); return; }

      var quickPrint = target.getAttribute("data-quick-print");
      if (quickPrint) {
        ui.printMode = quickPrint;
        ui.tab = "print";
        render();
        window.print();
        return;
      }

      var printMode = target.getAttribute("data-print-mode");
      if (printMode) { ui.printMode = printMode; render(); return; }

      var deskFilter = target.getAttribute("data-desk-filter");
      if (deskFilter) { ui.deskFilter = deskFilter; render(); return; }

      var selWt = target.getAttribute("data-select-weight");
      if (selWt) { ui.selectedWeight = selWt; render(); return; }

      var saveMatchId = target.getAttribute("data-save-bout");
      if (saveMatchId) { recordPaperResult(saveMatchId, target.closest(".slip-form")); return; }

      var clearRestId = target.getAttribute("data-clear-rest");
      if (clearRestId) {
        var bRest = boutMap().get(clearRestId);
        if (bRest) {
          var aMap = athleteMap();
          [bRest.red_athlete_id, bRest.green_athlete_id].forEach(function (id) {
            var a = aMap.get(id);
            if (a) a.last_bout_ended_ms = 0;
          });
          state.athletes = Array.from(aMap.values());
          persistState(true);
          showToast("Cleared 30-minute rest timer for Bout #" + bRest.bout_number + ".", "ok");
        }
        return;
      }

      var callBoutId = target.getAttribute("data-call-bout");
      if (callBoutId) {
        var bMap = boutMap();
        var cb = bMap.get(callBoutId);
        if (cb) {
          Array.from(bMap.values()).forEach(function (other) {
            if (other.assigned_mat_id === cb.assigned_mat_id && other.lifecycle === Lifecycle.Ready) {
              other.lifecycle = Lifecycle.Assigned;
            }
          });
          cb.lifecycle = Lifecycle.Ready;
          state.bouts = Array.from(bMap.values());
          persistState(true);
          showToast("Called Bout #" + cb.bout_number + " onto Mat " + cb.assigned_mat_id + ".", "ok");
        }
        return;
      }

      var holdBoutId = target.getAttribute("data-hold-bout");
      if (holdBoutId) {
        var hb = boutMap().get(holdBoutId);
        if (hb) {
          var bMap2 = boutMap();
          bMap2.get(holdBoutId).lifecycle = Lifecycle.Assigned;
          bMap2.get(holdBoutId).mat_queue_order = (hb.mat_queue_order || 1) + 2;
          state.bouts = Array.from(bMap2.values());
          promoteMatReadyBout(hb.assigned_mat_id, Date.now());
          persistState(true);
          showToast("Held Bout #" + hb.bout_number + " on deck.", "ok");
        }
        return;
      }

      var corrId = target.getAttribute("data-open-correction");
      if (corrId) { openCorrectionDialog(corrId); return; }

      var seedUp = target.getAttribute("data-seed-up");
      var seedDown = target.getAttribute("data-seed-down");
      if (seedUp || seedDown) {
        var targetAthId = seedUp || seedDown;
        var delta = seedUp ? -1 : 1;
        var targetAth = athleteMap().get(targetAthId);
        if (targetAth) {
          var peers = state.athletes.filter(function (a) {
            return a.weight_class_id === targetAth.weight_class_id && a.division_id === targetAth.division_id;
          }).sort(function (a, b) { return a.seed_rank - b.seed_rank; });
          var idx = peers.findIndex(function (a) { return a.athlete_id === targetAthId; });
          var sw = idx + delta;
          if (idx >= 0 && sw >= 0 && sw < peers.length) {
            var tmp = peers[idx].seed_rank;
            peers[idx].seed_rank = peers[sw].seed_rank;
            peers[sw].seed_rank = tmp;
            if (peers[idx].seed_rank === peers[sw].seed_rank) {
              peers.forEach(function (p, pi) { p.seed_rank = pi + 1; });
            }
            persistState(true);
            render();
          }
        }
        return;
      }

      var scratchId = target.getAttribute("data-scratch-ath");
      if (scratchId) {
        var aMapS = athleteMap();
        var bMapS = boutMap();
        var sa = aMapS.get(scratchId);
        if (sa) {
          sa.check_in_stage = 7;
          advanceScratchesInternal(bMapS, aMapS, Date.now());
          state.athletes = Array.from(aMapS.values());
          state.bouts = Array.from(bMapS.values());
          persistState(true);
          showToast("Scratched " + sa.public_display_name + " and updated open bouts.", "ok");
        }
        return;
      }

      var reinstateId = target.getAttribute("data-reinstate-ath");
      if (reinstateId) {
        var aMapR = athleteMap();
        var ra2 = aMapR.get(reinstateId);
        if (ra2) {
          ra2.check_in_stage = 5;
          ra2.weigh_in_eligible = true;
          ra2.medically_cleared = true;
          state.athletes = Array.from(aMapR.values());
          persistState(true);
          showToast("Reinstated " + ra2.public_display_name + ".", "ok");
        }
        return;
      }
    } catch (err) {
      showToast(err && err.message ? err.message : String(err), "err");
    }
  });

  document.addEventListener("change", function (e) {
    var el = e.target;
    if (!el) return;
    try {
      if (el.id === "input-import-csv" && el.files && el.files[0]) {
        var reader = new FileReader();
        reader.onload = function () {
          try { importCsvOffline(String(reader.result || "")); }
          catch (err) { showToast(err && err.message ? err.message : String(err), "err"); }
          el.value = "";
        };
        reader.readAsText(el.files[0]);
        return;
      }
      if (el.id === "select-bracket-div") { ui.selectedDivision = el.value; render(); return; }
      if (el.id === "select-bracket-format") { ui.selectedFormat = el.value; return; }
      if (el.id === "select-print-round") { ui.printRound = Number(el.value); render(); return; }
      if (el.id === "select-mat-count") { state.mat_count = Number(el.value); persistState(true); render(); return; }
      if (el.id === "select-rules-version") { state.rules_version = el.value; persistState(true); render(); return; }
      if (el.id === "select-walkup-school") {
        var found = PRESET_SCHOOLS.find(function (s) { return s.teamId === el.value; });
        if (found) { ui.walkupTeamId = found.teamId; ui.walkupTeamName = found.teamName; render(); }
        return;
      }
      if (el.id === "select-walkup-div") { ui.walkupDivision = el.value; return; }
      if (el.id === "select-walkup-wt") { ui.walkupWeight = el.value; return; }
      if (el.id === "dlg-corr-winner") { ui.correctionWinnerId = el.value; return; }
      if (el.id === "dlg-corr-wintype") { ui.correctionWinType = el.value; return; }

      var slipWinnerId = el.getAttribute("data-slip-winner");
      if (slipWinnerId) {
        var b1 = boutMap().get(slipWinnerId);
        if (b1) getSlipInput(b1).winnerId = el.value;
        return;
      }
      var slipTypeId = el.getAttribute("data-slip-wintype");
      if (slipTypeId) {
        var b2 = boutMap().get(slipTypeId);
        if (b2) getSlipInput(b2).winType = el.value;
        return;
      }
      var moveMatId = el.getAttribute("data-move-mat");
      if (moveMatId) {
        var bMapM = boutMap();
        var bm = bMapM.get(moveMatId);
        if (bm) {
          bm.assigned_mat_id = Number(el.value);
          state.bouts = Array.from(bMapM.values());
          persistState(true);
          showToast("Moved Bout #" + bm.bout_number + " to Mat " + bm.assigned_mat_id + ".", "ok");
        }
        return;
      }
    } catch (err) {
      showToast(err && err.message ? err.message : String(err), "err");
    }
  });

  document.addEventListener("input", function (e) {
    var el = e.target;
    if (!el) return;
    if (el.id === "input-desk-search") {
      var pos = el.selectionStart;
      ui.deskSearch = el.value;
      render();
      var nextInput = document.getElementById("input-desk-search");
      if (nextInput) { nextInput.focus(); try { nextInput.setSelectionRange(pos, pos); } catch (_e) {} }
      return;
    }
    if (el.id === "input-roster-search") {
      var pos2 = el.selectionStart;
      ui.rosterSearch = el.value;
      render();
      var nextR = document.getElementById("input-roster-search");
      if (nextR) { nextR.focus(); try { nextR.setSelectionRange(pos2, pos2); } catch (_e2) {} }
      return;
    }
    if (el.id === "input-walkup-name") { ui.walkupName = el.value; return; }
    if (el.id === "input-walkup-team-name") { ui.walkupTeamName = el.value; return; }
    if (el.id === "input-walkup-team-id") { ui.walkupTeamId = el.value; return; }
    if (el.id === "dlg-corr-red") { ui.correctionRedScore = el.value; return; }
    if (el.id === "dlg-corr-green") { ui.correctionGreenScore = el.value; return; }

    var rId = el.getAttribute("data-slip-red");
    if (rId) {
      var br = boutMap().get(rId);
      if (br) getSlipInput(br).redScore = el.value;
      return;
    }
    var gId = el.getAttribute("data-slip-green");
    if (gId) {
      var bg = boutMap().get(gId);
      if (bg) getSlipInput(bg).greenScore = el.value;
      return;
    }
  });

  // Periodic refresh for 30-minute NFHS recovery rest countdowns
  setInterval(function () {
    var activeTag = document.activeElement ? document.activeElement.tagName : "";
    if (activeTag !== "INPUT" && activeTag !== "SELECT" && ui.tab === "desk") {
      render();
    }
  }, 30000);

  ensureSelectedWeight();
  render();
})();`}function yn(h){const e=Oi(h.tournament_name||"OpenMat Emergency Fallback Tournament"),i=bn(h.tournament_name),t=fn(h),n=vn();return`<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${e} - Offline Emergency Fallback</title>
  <style id="openmat-fallback-styles">${gn}</style>
</head>
<body>
`+i+`
  <template id="openmat-shell-template">
${i}
  </template>
  <script id="openmat-fallback-state" type="application/json">${t}<\/script>
  <script id="openmat-fallback-runtime">${n}<\/script>
</body>
</html>
`}const wn=[{teamId:"SBHS",teamName:"Santa Barbara High School"},{teamId:"DPHS",teamName:"Dos Pueblos High School"},{teamId:"SMHS",teamName:"San Marcos High School"},{teamId:"VHS",teamName:"Ventura High School"},{teamId:"BHS",teamName:"Buena High School"},{teamId:"OHS",teamName:"Oxnard High School"},{teamId:"PHS",teamName:"Pacifica High School"},{teamId:"RMHS",teamName:"Rio Mesa High School"}],ne={tournamentId:"channel-league-novice-2026-11-20",tournamentName:"Nov 20 - Channel League Novice Tournament",eventDate:"2026-11-20",venue:"Channel League Main Gymnasium",rulesVersion:zt,growthAllowanceTenths:20,matCount:5,defaultDivision:"NOVICE"},Sn=["106","113","120","126","132","138","144","150","157","165","175","190","215","285"],kn=["100","107","114","120","126","132","138","145","152","165","175","185","205","235"],Li=["100","106","107","113","114","120","126","132","138","144","145","150","152","157","165","175","185","190","205","215","235","285"],En=["VARSITY","JV","BOYS","GIRLS","U16","U18","NOVICE"];function ot(h){const e=(h??"").trim().toUpperCase();return e==="ALL"?Li:e.includes("GIRL")||e.includes("FEMALE")||e.includes("WOMEN")||e==="W"||e==="F"?kn:Sn}const Q={Expected:1,Arrived:2,WeighInPending:3,MedicalPending:4,Eligible:5,Withdrawn:6,Scratched:7},Et={1:"Expected",2:"Arrived",3:"Weigh-In Pending",4:"Medical Pending",5:"Eligible",6:"Withdrawn",7:"Scratched"},J={AutoByCount:"AUTO_BY_COUNT",BestOfThree:"BEST_OF_THREE",DoubleElimCrossover:"DOUBLE_ELIM_CROSSOVER",RoundRobinPool:"ROUND_ROBIN_POOL",PoolToBracket:"POOL_TO_BRACKET",TeamDual:"TEAM_DUAL",TrueSecondChallenge:"TRUE_SECOND_CHALLENGE"},E={PendingUpstream:1,Assigned:2,Ready:3,InProgress:4,EndedLocal:5,LocallyConfirmed:6,ResultAccepted:7,UnderProtestHold:8,InvalidatedForCorrection:9},Di={DEC:{min:1,max:7,message:"For a decision, the winner must lead by 1 to 7 points."},MD:{min:8,max:14,message:"For a major decision, the winner must lead by 8 to 14 points."},TF:{min:15,message:"For a technical fall, the winner must lead by at least 15 points."}};function In(h,e){const i=Di[h];if(i&&(e<i.min||e>(i.max??1/0)))throw new Error(i.message)}function re(h){return h.is_bye?h.lifecycle===E.ResultAccepted:!!h.winner_athlete_id&&(h.lifecycle===E.EndedLocal||h.lifecycle===E.LocallyConfirmed||h.lifecycle===E.ResultAccepted)}function jt(h){return re(h)?h.winner_athlete_id:""}const Rn=["tournament_id","tournament_name","event_date","venue","athlete_id","wrestler_name","team_id","team_name","division_id","weight_class_lbs","seed_rank","flowrestling_id","check_in_status","weigh_in_eligible","medically_cleared","bracket_format","bracket_complete","placement","standing_rank","matches_played","wins","losses","win_pct","byes_received","championship_wins","championship_losses","consolation_wins","consolation_losses","matches_wrestled_today","prior_day_matches","wins_by_fall","wins_by_tech_fall","wins_by_major_decision","wins_by_decision","wins_by_forfeit","wins_by_injury_default","wins_by_dq","bonus_wins","bonus_win_pct","losses_by_fall","losses_by_tech_fall","losses_by_major_decision","losses_by_decision","losses_by_forfeit_default_dq","match_points_scored","match_points_allowed","match_point_differential","avg_match_points_scored","avg_match_points_allowed","event_logged_bouts","takedowns_scored","takedowns_allowed","escapes_scored","escapes_allowed","reversals_scored","reversals_allowed","near_falls_2_scored","near_falls_3_scored","near_falls_4_scored","near_falls_total_scored","near_falls_allowed","cautions_committed","stalling_calls_committed","penalties_committed","fastest_fall_sec","team_advancement_points","team_bonus_points","team_placement_points","team_points_total","ow_votes"],Ft="openmat_officials_channel_league_authority",ui="openmat_officials_authority_key",tt=()=>typeof location>"u"?"http://127.0.0.1:5174":location.origin;class se{keyPair;verifiers=new Map;protocolJournal=[];knownProvisionHeads=new Set;owVotes=new Map;now;tournamentId=ne.tournamentId;tournamentName=ne.tournamentName;eventDate=ne.eventDate;venue=ne.venue;rulesVersion=ne.rulesVersion;growthAllowanceTenths=ne.growthAllowanceTenths;consecutiveDayAllowanceTenths=0;matCount=ne.matCount;snapshotEpoch=1;controlSequenceHead=1;requiredRestMs=1800*1e3;dailyMatchCap=6;consecutiveTwoDayCap=10;athletes=new Map;pendingSelfRegistrations=new Map;selfRegistrationDispositions=new Map;selectedPendingSelfRegId="";privateWeighIns=new Map;privateMedicals=new Map;bouts=new Map;mats=new Map;revokedCertificateIds=new Set;scratches=new Map;resultCorrections=[];bracketFrozenByClass=new Map;nextBoutNumber=101;roomRouter=new je(ne.matCount);overlayMesh=new Ii({peerId:`official-${Ye()}`});get livePeerId(){return this.overlayMesh.peerId}liveTransportError="";liveOrigin="";liveTournamentId="";liveTransportRole="";registryTimer=null;liveConsoleRole="primary";hasExplicitStoredRole=!1;liveTransportChain=Promise.resolve();liveTransportGeneration=0;registryChain=Promise.resolve();lastRegistryUpdatedAtMs=0;onStateChanged;static DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL="https://pureengineering.github.io/openmat";static DEFAULT_PUBLIC_OFFICIALS_WEB_BASE_URL="https://pureengineering.github.io/openmat/officials";static DEFAULT_PUBLIC_REGISTER_WEB_BASE_URL="https://pureengineering.github.io/openmat/register";static DEFAULT_PUBLIC_NOSTR_RELAYS=["wss://relay.damus.io","wss://nos.lol","wss://relay.primal.net"];publicNostrRelays=[...se.DEFAULT_PUBLIC_NOSTR_RELAYS];publicNostrRelayPublishingEnabled=!1;linkedVenuePubkeyHex="";linkedVenueJoinQrUri="";hasExternalVenueServer=!1;lastNostrPublishedAtMs=0;pendingProjections=new Map;officialsPassword=typeof window>"u"?"":new URLSearchParams(window.location.hash.slice(1)).get("password")??"";projectionFlushes=new Map;get pendingProjectionPostCount(){return this.pendingProjections.size}publicationRevision=0;publicationTournamentId="";publicationPackets=new Map;livePacketHeads=new Map;lastSyncedVenueEpochByPublisher=new Map;nostrRelayStatuses=new Map;get activeVenueOrigin(){return this.liveOrigin||tt()}setVenueOrigin(e){const i=this.activeVenueOrigin;this.liveOrigin=e,this.activeVenueOrigin!==i&&this.onStateChanged?.()}get consoleRole(){return this.liveConsoleRole}setConsoleRole(e){this.liveConsoleRole=e,this.hasExplicitStoredRole=!0,this.broadcastEnabled&&typeof localStorage<"u"&&localStorage.setItem("openmat_officials_console_role",e)}get rulesBundle(){return Ks(this.rulesVersion,this.requiredRestMs,this.dailyMatchCap,this.consecutiveTwoDayCap)}get rulesHash(){return Js(this.rulesBundle)}async startLiveTransport(e,i=this.liveConsoleRole,t){const n=this.liveTransportGeneration,s=async()=>{if(t?.aborted||n!==this.liveTransportGeneration)return;const r=this.tournamentId,o=this.liveTransportRole!==i||this.liveOrigin!==e||this.liveTournamentId!==r;this.liveTournamentId=r,this.liveTransportRole=i,this.liveConsoleRole=i,this.setVenueOrigin(e),o&&(this.overlayMesh.stopLiveRooms(),this.livePacketHeads.clear());const l=async m=>{let v="";if(this.overlayMesh.liveRooms.has(m))return;let u;try{u=await this.overlayMesh.joinLiveRoom({origin:e,tournamentId:r,roomId:m,peerId:this.livePeerId,rootPublicKeyHex:this.publisherPublicKeyHex,publicKey:this.keyPair.publicKey,role:this.liveConsoleRole,sign:f=>Oe(Ie,f,this.keyPair.privateKey),onMembership:f=>{this.syncVenueRoomRouter();const p=this.overlayMesh.liveRooms.get(m),b=JSON.stringify([p?.reconnectCount,f.map(g=>g.peer_id).sort()]);n===this.liveTransportGeneration&&i==="primary"&&m.startsWith("subtree:")&&b!==v&&(v=b,this.livePacketHeads.delete(m),this.broadcastLiveRooms(JSON.stringify(this.buildSignedPublicProjection())))},onError:f=>{this.liveTransportError=f.message},onMessage:(f,p)=>{if(f==="control-state"&&m===He&&this.acceptControlSnapshot(p),f==="signed-event"&&m.startsWith("mat:")){if(xe(p).stream_id!==m)throw new Error("Cross-mat event rejected");this.acceptMatsideSignedEvent(p)}},onRpc:(f,p)=>{if(f==="matside"&&m.startsWith("mat:"))return this.handleMatsideRequest(p,m);if(f==="bracket-sync"&&i==="primary"&&m.startsWith("subtree:"))return this.bracketSync(p,m);if(f==="projection"&&m.startsWith("subtree:"))return new TextEncoder().encode(JSON.stringify(this.buildSignedPublicProjection()));if(f==="ow-vote"&&m.startsWith("subtree:"))try{const b=JSON.parse(new TextDecoder().decode(p)),g=this.submitOwVote(b);return new TextEncoder().encode(JSON.stringify({ok:!0,result:g,envelope:this.buildSignedPublicProjection()}))}catch(b){return new TextEncoder().encode(JSON.stringify({ok:!1,error:b instanceof Error?b.message:String(b)}))}if(f==="scorekeeper-event"&&(m.startsWith("subtree:")||m.startsWith("mat:")))try{const b=this.acceptMatsideSignedEvent(p);return new TextEncoder().encode(JSON.stringify({ok:!0,result:b,envelope:this.buildSignedPublicProjection()}))}catch(b){return new TextEncoder().encode(JSON.stringify({ok:!1,error:b instanceof Error?b.message:String(b)}))}if(f==="control-sync"&&m===He)return this.signedControlSnapshot();throw new Error("RPC forbidden in this room")}})}catch(f){throw this.overlayMesh.liveRooms.get(m)?.stop(),this.overlayMesh.liveRooms.delete(m),new Error(`Cannot join ${m}: ${String(f)}`)}if(n!==this.liveTransportGeneration){u.stop(),this.overlayMesh.liveRooms.get(m)===u&&this.overlayMesh.liveRooms.delete(m);return}if(m===He){const f=[...u.members.keys()].find(p=>p!==this.livePeerId);f&&this.acceptControlSnapshot(await u.request("control-sync",new Uint8Array,f))}};if(i==="primary"&&await this.flushPendingProjections(e,o),n!==this.liveTransportGeneration)return;if(this.hasExternalVenueServer&&this.linkedVenuePubkeyHex&&this.linkedVenuePubkeyHex.toLowerCase()!==this.publisherPublicKeyHex.toLowerCase()){this.overlayMesh.stopLiveRooms(),this.livePacketHeads.clear(),this.pendingProjectionPostCount||(this.liveTransportError="");return}const c=this.desiredLiveRooms(i);for(const[m,v]of this.overlayMesh.liveRooms)c.includes(m)||(v.stop(),this.overlayMesh.liveRooms.delete(m),this.livePacketHeads.delete(m));if(!o&&c.every(m=>this.overlayMesh.liveRooms.has(m))){!this.pendingProjectionPostCount&&c.every(m=>this.overlayMesh.liveRooms.get(m)?.diagnostics().brokerConnected)&&(this.liveTransportError="");return}if(await this.publishRegistry(e),n!==this.liveTransportGeneration)return;this.registryTimer||(this.registryTimer=setInterval(()=>{this.liveOrigin&&this.publishRegistry(this.liveOrigin).catch(m=>{this.liveTransportError=String(m)})},15e3));const _=(await Promise.allSettled(c.map(l))).find(m=>m.status==="rejected");if(_)throw _.reason;c.every(m=>this.overlayMesh.liveRooms.get(m)?.diagnostics().brokerConnected)&&(this.liveTransportError="")},a=this.liveTransportChain.then(s,s);return this.liveTransportChain=a.catch(()=>{}),a}desiredLiveRooms(e=this.liveConsoleRole){const i=[He];if(e!=="official")for(let t=1;t<=this.matCount;t++)i.push(`mat:${t}`);if(e==="primary"){i.push("subtree:venue-super-seed");for(const t of new Set([...this.bouts.values()].map(n=>n.bracket_id)))typeof t=="string"&&t!=="undefined"&&t!=="null"&&/^[A-Za-z0-9_-]{1,100}$/.test(t)&&i.push(`subtree:b:${t}`)}return i}async publishRegistry(e){const i=async()=>{const n=o=>{const l=new URL(o,e);return l.protocol=l.protocol==="https:"?"wss:":"ws:",l.href},s=this.desiredLiveRooms().slice(0,64);this.lastRegistryUpdatedAtMs=Math.max(this.now(),this.lastRegistryUpdatedAtMs+1);const a=bs({tournament_id:this.tournamentId,root_pubkey_hex:this.publisherPublicKeyHex,peer_pubkey_hex:this.publisherPublicKeyHex,authority_epoch:Math.max(1,...[...this.mats.values()].map(o=>o.authority_epoch)),role:this.liveConsoleRole==="standby"?"BACKUP":"PRIMARY",origins:[new URL(e).origin],nostr_relay_urls:[n("/api/openmat-nostr")],p2p_broker_urls:[n("/api/openmat-p2p")],active_rooms:s,assigned_mats:[],updated_at_ms:this.lastRegistryUpdatedAtMs},o=>Oe(Ie,o,this.keyPair.privateKey)),r=await fetch(new URL("/api/openmat-registry",e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),signal:AbortSignal.timeout(3e3)});if(!r.ok)throw new Error(`Registry publication failed: ${r.status} ${await r.text()}`)},t=this.registryChain.then(i,i);return this.registryChain=t.catch(()=>{}),t}stopLiveTransport(){this.liveTransportGeneration++,this.livePacketHeads.clear(),this.registryTimer&&clearInterval(this.registryTimer),this.registryTimer=null,this.overlayMesh.stopLiveRooms(),this.syncVenueRoomRouter(),this.setVenueOrigin("")}signedControlSnapshot(){const e=this.storageState(),i=Ve({tournament_id:this.tournamentId,sequence:this.controlSequenceHead,state:JSON.stringify(e)});return Ve({body:i,signature:Oe(Ie,i,this.keyPair.privateKey)})}acceptControlSnapshot(e){const i=dt(e),t=i.body;if(!gt(Ie,t,this.keyPair.publicKey,i.signature))throw new Error("Invalid control snapshot");const n=dt(t);if(!(n.tournament_id!==this.tournamentId||Number(n.sequence)<=this.controlSequenceHead)){if(typeof localStorage>"u")throw new Error("Officials control sync requires durable storage");localStorage.setItem(Ft,String(n.state)),this.loadFromStorage(!0),this.syncVenueRoomRouter(),this.onStateChanged?.()}}handleMatsideRequest(e,i,t=this.now()){const n=dt(e),s=n.body,a=dt(s),r=Number(a.mat_number),o=this.mats.get(r);if(!o||a.tournament_id!==this.tournamentId||i&&i!==`mat:${r}`||!(a.nonce instanceof Uint8Array)||a.nonce.length!==32||!(a.device_public_key instanceof Uint8Array)||!Se(a.device_public_key,le(o.device_pubkey_hex))||a.device_key_id!==o.android_device_id||!gt(Ie,s,a.device_public_key,n.signature))throw new Error("Unauthorized matside request");const l=_t(o.cert_cbor_hex);if(this.revokedCertificateIds.has(l.certificate_id))throw new Error("Certificate revoked");const c={nonce:a.nonce,tournament_id:this.tournamentId,mat_number:r};let d;if(a.operation==="provision"||a.operation==="push_bout"){Vt(l,this.keyPair.publicKey,t,!1);const m=a.operation==="push_bout"&&this.pushMatBout(r,a.match_id,a.after_match_id,t),v=[...this.matQueue(r),...[...this.bouts.values()].filter(g=>g.assigned_mat_id===r&&!g.is_bye&&g.lifecycle===E.ResultAccepted&&g.red_athlete_id&&g.green_athlete_id)].map(g=>({match_id:g.match_id,bout_number:String(g.bout_number),...g.lifecycle===E.ResultAccepted?{completed:!0}:{},weight_class:g.weight_class_id,red_name:this.athletes.get(g.red_athlete_id).public_display_name,red_school:this.athletes.get(g.red_athlete_id).team_name,green_name:this.athletes.get(g.green_athlete_id).public_display_name,green_school:this.athletes.get(g.green_athlete_id).team_name,assignment_revision:g.assignment_revision}));if(!v.length&&a.operation==="push_bout")throw new Error("No director-approved bouts assigned to this mat");const u=Me(Ve({certificate:l.certificate_id,rules_hash:this.rulesHash,queue:v})),f=he(u),p=`${r}:${f}`;this.knownProvisionHeads.has(p)?m&&this.publishAndSave():(this.verifiers.get(r).markControlHeadKnown(u),this.knownProvisionHeads.add(p),this.protocolJournal.push({matId:r,controlHeadHex:f}),this.publishAndSave());const b=this.getMatsideStreamHead(r);d={...c,revision:l.assignment_revision,certificate:l,control_head:u,rules:this.rulesBundle,rules_hash:this.rulesHash,queue:v,stream_head_sequence:b.sequence,stream_head_hash:le(b.hashHex)}}else if(a.operation==="event"&&a.event instanceof Uint8Array){const m=xe(a.event);if(m.stream_id!==`mat:${r}`)throw new Error("Cross-mat event");this.acceptMatsideSignedEvent(a.event,t),d={...c,match_id:m.match_id,sequence:m.sequence,event_id:m.event_id}}else if(a.operation==="events"&&Array.isArray(a.events)){if(a.events.length===0||a.events.length>128)throw new Error("Invalid matside event batch");const m=this.isSeeding;this.isSeeding=!0;try{for(const v of a.events){if(!(v instanceof Uint8Array))throw new Error("Invalid matside event bytes");if(xe(v).stream_id!==`mat:${r}`)throw new Error("Cross-mat event");this.acceptMatsideSignedEvent(v,t)}}finally{this.isSeeding=m}this.publishAndSave(),d={...c,accepted_sequence:this.getMatsideStreamHead(r).sequence}}else throw new Error("Unsupported matside operation");(a.operation==="provision"||a.operation==="push_bout")&&(d.registry_authorization=he(Oe(Ie,Ve({tournament_id:this.tournamentId,peer_pubkey_hex:he(a.device_public_key),role:"MAT_PEER"}),this.keyPair.privateKey)));const _=Ve(d);return Ve({body:_,signature:Oe(Ie,_,this.keyPair.privateKey)})}matQueue(e){return[...this.bouts.values()].filter(i=>i.assigned_mat_id===e&&!i.is_bye&&i.lifecycle>=E.Assigned&&i.lifecycle<=E.LocallyConfirmed&&i.red_athlete_id&&i.green_athlete_id).sort(St)}pushMatBout(e,i,t,n){const s=this.matQueue(e),a=s.findIndex(d=>d.match_id===i),r=s[a],o=r?[...this.protocolJournal].reverse().map(d=>{try{return d.wireHex?xe(le(d.wireHex)):null}catch{return null}}).find(d=>d?.match_id===r.match_id):null,l=!!r&&r.lifecycle===E.InProgress&&o?.event_type==="MATCH_UNDO_LAST_ACTION"&&!r.clock_running&&!r.completed_at_ms&&r.period_number===1&&r.red_score===0&&r.green_score===0&&r.clock_remaining_ms===this.rulesBundle.period_1_duration_ms;if(!r||r.lifecycle>E.Ready&&!l||r.clock_running||r.completed_at_ms)throw new Error("Only an unstarted bout on this mat can move");if(a>0&&s[a-1]?.match_id===t)return this.saveToStorage(),!1;const c=s[a+1];if(!c||c.match_id!==t||c.lifecycle>E.Ready)throw new Error("Select the next unconfirmed bout on this mat");return a===0&&this.validateBoutSafetyGates(c,n),l&&(r.lifecycle=E.Assigned),s[a]=c,s[a+1]=r,s.forEach((d,_)=>{d.mat_queue_order=_+1}),this.promoteMatReadyBout(e,n),!0}promoteMatReadyBout(e,i){const t=this.matQueue(e),n=t.filter(a=>a.lifecycle<=E.Ready).sort((a,r)=>(a.mat_queue_order||1/0)-(r.mat_queue_order||1/0)||a.bout_number-r.bout_number),s=t.some(a=>a.lifecycle===E.InProgress)?void 0:n.find(a=>this.isBoutReadyEligible(a,i));n.forEach(a=>{a.lifecycle=a===s?E.Ready:E.Assigned})}isBoutReadyEligible(e,i){try{return this.validateBoutSafetyGates(e,i),!0}catch{return!1}}broadcastEnabled;isSeeding=!1;broadcastChannel;deletedMatchIds=new Set;clearedRestMatchIds=new Set;syncedOwVoteTallies={};constructor(e){const i=Date.now(),t=performance.now();this.now=e?.now??(()=>i+Math.floor(performance.now()-t));let n=e?.broadcastEnabled!==!1&&typeof localStorage<"u"?localStorage.getItem(ui):null;n||(n=he(crypto.getRandomValues(new Uint8Array(32))),e?.broadcastEnabled!==!1&&typeof localStorage<"u"&&localStorage.setItem(ui,n)),this.keyPair=_s("officials-authority",le(n));const s=e?.broadcastEnabled!==!1&&typeof localStorage<"u"?localStorage.getItem("openmat_officials_console_role"):null;if((s==="standby"||s==="official"||s==="primary")&&(this.liveConsoleRole=s,this.hasExplicitStoredRole=!0),this.broadcastEnabled=e?.broadcastEnabled??!0,this.broadcastChannel=this.broadcastEnabled&&typeof window<"u"&&typeof BroadcastChannel<"u"?new BroadcastChannel("openmat-live-sync"):null,!this.broadcastEnabled||!this.loadFromStorage()){this.isSeeding=!0;try{this.initializeTournamentRegistrationManifest(),this.syncVenueRoomRouter()}finally{this.isSeeding=!1}this.broadcastEnabled&&this.saveToStorage()}this.syncVenueRoomRouter()}get publisherPublicKeyHex(){return he(this.keyPair.publicKey)}resetTournamentState(e=!1){e||this.assertDrawNotStarted(),this.athletes.clear(),this.pendingSelfRegistrations.clear(),this.selfRegistrationDispositions.clear(),this.selectedPendingSelfRegId="",this.privateWeighIns.clear(),this.privateMedicals.clear(),this.owVotes.clear(),this.syncedOwVoteTallies={},this.deletedMatchIds.clear(),this.clearedRestMatchIds.clear(),this.tournamentId=ne.tournamentId,this.tournamentName=ne.tournamentName,this.eventDate=ne.eventDate,this.venue=ne.venue,this.rulesVersion=ne.rulesVersion,this.growthAllowanceTenths=ne.growthAllowanceTenths,this.consecutiveDayAllowanceTenths=0,this.matCount=ne.matCount,this.clearMatchState(),this.syncVenueRoomRouter(),this.publishAndSave(!0,!0)}resetAllMatches(){this.owVotes.clear(),this.syncedOwVoteTallies={},this.clearMatchState();const e=this.now();for(const i of this.athletes.values())i.matches_wrestled_today=0,i.prior_day_matches=0,i.last_bout_ended_ms=0,i.updated_at_ms=e;this.publishAndSave(!0,!0)}clearMatchState(){for(const e of this.bouts.keys())this.deletedMatchIds.add(e);this.clearedRestMatchIds.clear();for(const e of this.mats.values())e.certificate_id&&this.revokedCertificateIds.add(e.certificate_id);this.bouts.clear(),this.mats.clear(),this.verifiers.clear(),this.protocolJournal=[],this.resultCorrections=[],this.scratches.clear(),this.knownProvisionHeads.clear(),this.bracketFrozenByClass.clear(),this.lastSyncedVenueEpochByPublisher.clear(),this.nextBoutNumber=101,this.initializeTournamentRegistrationManifest()}syncVenueRoomRouter(){const e=new je(this.matCount);for(const[i,t]of this.overlayMesh.liveRooms)for(const[n,s]of t.members)i===He?e.joinControlOfficialsRoom(n,s.role==="primary"?xt.DirectorPrimary:s.role==="standby"?xt.DirectorStandby:xt.BoutDispatchClerk):i.startsWith("mat:")?e.joinMatRoom(Number(i.slice(4)),n,s.role==="primary"?Tt.HeadTablePrimary:s.role==="standby"?Tt.HeadTableStandby:Tt.MatPrimaryScorekeeper):e.joinSubtreeRoom(i.slice(8),n,t.lastPingRttMs??0);return this.roomRouter=e,e.computeAccountingSummary()}configureMatCount(e){if(!Number.isInteger(e)||e<1||e>ht)throw new z(K.BoundsExceeded,`matCount must be between 1 and ${ht}`);this.matCount=e,this.liveOrigin&&this.startLiveTransport(this.liveOrigin).catch(t=>{this.liveTransportError=String(t)});for(let t=1;t<=this.matCount;t++)this.mats.has(t)||this.mats.set(t,this.unprovisionedMat(t));for(const t of Array.from(this.mats.keys()))t>this.matCount&&this.mats.delete(t);const i=this.syncVenueRoomRouter();return this.publishAndSave(),i}getVenueRoomTopologySummary(){return this.roomRouter.computeAccountingSummary()}activateStandbyDirectorFailover(){const e=this.roomRouter.activateStandbyHeadTableFailover();return e===this.livePeerId&&this.liveOrigin&&(this.liveConsoleRole="primary",this.startLiveTransport(this.liveOrigin).catch(i=>{this.liveTransportError=String(i)})),this.publishAndSave(),e}unprovisionedMat(e){return{mat_id:e,android_device_id:"",operator_name:"",authority_epoch:1,device_pubkey_hex:"",certificate_id:"",allowed_scopes:0,issued_at_ms:0,expires_at_ms:0,cert_cbor_hex:"",scorekeeper_qr_uri:"",status:"HANDOFF_STOPPED",last_heartbeat_ms:0}}buildSignedMatDelegation(e,i,t,n,s,a=this.now()){const r=a+2592e5,o=`CERT-MAT-${e}-${Ye()}`,l=Ee.ReadPublic|Ee.ScoreMat|Ee.ConfirmLocalResult,c=Zt({certificate_id:o,tournament_id:this.tournamentId,subject_key_id:i,subject_pubkey:le(s),role:st.MatOperator,allowed_scopes:l,allowed_stream_id:`mat:${e}`,assigned_mat_id:e,assignment_revision:n,authority_generation:n,issued_at_ms:a,expires_at_ms:r,allow_in_progress_completion:!0},this.keyPair.privateKey),d=hs(c),_=us({tournament_id:this.tournamentId,tournament_name:this.tournamentName,publisher_pubkey_hex:this.publisherPublicKeyHex,relay_origin:tt(),cert_cbor_hex:d});return{mat_id:e,android_device_id:i,operator_name:t,authority_epoch:n,device_pubkey_hex:s,certificate_id:o,allowed_scopes:l,issued_at_ms:a,expires_at_ms:r,cert_cbor_hex:d,scorekeeper_qr_uri:_,status:"ONLINE_SYNCED",last_heartbeat_ms:a}}initializeTournamentRegistrationManifest(){for(let e=1;e<=this.matCount;e++)this.mats.set(e,this.unprovisionedMat(e))}configureTournament(e){const i=e.name.trim(),t=e.eventDate.trim(),n=e.venue.trim();if(!i||!n||!/^\d{4}-\d{2}-\d{2}$/.test(t)||!Number.isFinite(Date.parse(`${t}T00:00:00Z`))||new Date(`${t}T00:00:00Z`).toISOString().slice(0,10)!==t)throw new z(K.InvalidArgument,"Enter the event name, date and venue");this.tournamentName=i,this.eventDate=t,this.venue=n,this.publishAndSave()}configureRulesVersion(e){const i=e.trim();if(!i)throw new z(K.InvalidArgument,"Select a match period ruleset");this.rulesVersion=i;const t=this.rulesBundle.period_1_duration_ms;for(const n of this.bouts.values())n.lifecycle<=E.Ready&&!n.clock_running&&n.red_score===0&&n.green_score===0&&n.period_number===1&&(n.clock_remaining_ms=t);this.publishAndSave()}registerMatDelegation(e,i=!0){const t=_t(e.cert_cbor_hex);let n=this.verifiers.get(e.mat_id);n||(n=new ms(this.keyPair.publicKey),this.verifiers.set(e.mat_id,n));const s=t.allowed_stream_id;if(e.authority_epoch>n.activeEpoch(s)){const a=n.headHash(s);n.applyAuthorityTransfer({transfer_id:e.certificate_id,tournament_id:this.tournamentId,stream_id:s,match_id:"",reason:ps.NormalDeviceReplacement,director_generation:e.authority_epoch,assignment_revision:t.assignment_revision,old_epoch:n.activeEpoch(s),old_last_sequence:n.headSequence(s),old_head_hash:a,new_epoch:e.authority_epoch,new_device_key_id:t.subject_key_id,new_certificate_id:t.certificate_id,seed_state_hash:a,unknown_tail_resolution:"Previous device stopped by official",old_operator_physically_stopped:!0,timers_initialized_stopped:!0,director_signature:t.root_signature},a)}n.registerCertificate(t),i&&this.protocolJournal.push({mat:structuredClone(e)})}issueMatBackupDisplayCertificate(e,i,t){const n=this.mats.get(e);if(!n||!i||!/^[a-f0-9]{64}$/i.test(t))throw new Error("A configured mat and device public key are required");return Zt({certificate_id:`display-${Ye()}`,tournament_id:this.tournamentId,subject_key_id:i,subject_pubkey:le(t),role:st.RelayOperator,allowed_scopes:Ee.ReadPublic|Ee.RelaySignedBytes,allowed_stream_id:`mat:${e}`,assigned_mat_id:e,assignment_revision:n.authority_epoch,authority_generation:n.authority_epoch,issued_at_ms:this.now(),expires_at_ms:this.now()+4320*60*1e3,allow_in_progress_completion:!1},this.keyPair.privateKey)}getMatsideStreamHead(e){const i=this.verifiers.get(e),t=`mat:${e}`;return{sequence:i?.headSequence(t)??0,hashHex:he(i?.headHash(t)??new Uint8Array(32))}}acceptMatsideSignedEvent(e,i=this.now()){const t=xe(e),n=this.bouts.get(t.match_id),s=n&&this.mats.get(n.assigned_mat_id);if(!n||!s||t.tournament_id!==this.tournamentId||t.stream_id!==`mat:${s.mat_id}`||t.certificate_id!==s.certificate_id||t.authority_epoch!==s.authority_epoch||t.assignment_revision<1||t.assignment_revision>n.assignment_revision||!Se(t.rules_hash,this.rulesHash))throw new z(K.UnauthorizedScope,"Event does not match the current tournament, mat, assignment or rules");if(this.revokedCertificateIds.has(t.certificate_id))throw new z(K.CertificateRevoked,"Matside certificate revoked");const a=_t(s.cert_cbor_hex);if(a.assigned_mat_id!==s.mat_id||a.role!==st.MatOperator||i+3e5<a.issued_at_ms)throw new Error("Invalid matside delegation");const r=t.payload instanceof Uint8Array?ke(t.payload):t.payload;if(!r||typeof r!="object"||Array.isArray(r)||r instanceof Uint8Array||r instanceof Map)throw new Error("Matside payload must be a CBOR map");const o=r,l=["MATCH_SCORING_ACTION","MATCH_SCORE_CORRECTION","MATCH_ENDING_ACTION","MATCH_CLOCK_TOGGLE","MATCH_PERIOD_CHOICE","MATCH_ADVANCE_PERIOD","MATCH_DISK_TOSS","MATCH_CONFIRM_RESULT","MATCH_PERIOD_EXPIRED","MATCH_UNDO_LAST_ACTION","MATCH_CLOCK_CORRECTION","MATCH_MEDICAL_DECISION","MATCH_FINALIZE_TECH_FALL","MATCH_POSITION_CHANGE"],c=l.includes(t.event_type),d=c?o.public_state:o;if(!d||typeof d!="object"||Array.isArray(d)||d instanceof Uint8Array)throw new Error("Missing signed match state");const _=c?t.event_type:o.command_type??t.event_type;if(typeof _!="string"||![...["START_BOUT_CLOCK","STOP_BOUT_CLOCK","CLOCK_STATE","SCORE_ACTION_RECORDED","TAKEDOWN_3","ESCAPE_1","REVERSAL_2","NEARFALL_2","NEARFALL_3","NEARFALL_4","STALL_WARN","PIN_FALL","CONFIRM_RESULT"],...l].includes(_)||_!==t.event_type)throw new Error("Unsupported or inconsistent matside command");const v=(C,P,O)=>{const w=d[C]??P;if(typeof w!="number"||!Number.isSafeInteger(w)||w<0||w>O)throw new Error(`Invalid matside ${C}`);return w},u=v("red_score",n.red_score,1e3),f=v("green_score",n.green_score,1e3),p=v("period",n.period_number,9),b=v("clock_remaining_ms",n.clock_remaining_ms,6e5);if(p===0||"clock_running"in d&&typeof d.clock_running!="boolean")throw new Error("Invalid clock state");const g=_==="CONFIRM_RESULT"||_==="MATCH_CONFIRM_RESULT",k=String(d.win_type??""),I=c?d.winner_corner==="RED"?n.red_athlete_id:d.winner_corner==="GREEN"?n.green_athlete_id:"":String(o.winner_athlete_id??"");g&&this.validateConfirmedResult(n,I,k,u,f);const R=this.verifiers.get(s.mat_id);if(!R)throw new Error("Mat has no registered verifier");if(!this.protocolJournal.some(C=>C.wireHex===he(e))){if(t.assignment_revision!==n.assignment_revision)throw new Error("Refresh the bout assignment before scoring.");const C=!g&&n.lifecycle===E.Assigned&&this.matQueue(s.mat_id).every(P=>P===n||P.lifecycle<=E.Ready);if(!C&&![E.Ready,E.InProgress,E.EndedLocal,E.LocallyConfirmed].includes(n.lifecycle))throw new Error("Bout is not ready to accept matside events");(n.lifecycle===E.Ready||C)&&this.validateBoutSafetyGates(n,i)}const L=R.verifyAndAccept(t,wt,Ee.ScoreMat|(g?Ee.ConfirmLocalResult:0),i,n.lifecycle===E.InProgress||n.lifecycle===E.EndedLocal),y={outcome:L,eventIdHex:he(t.event_id),matchId:n.match_id};if(L===Nt.DuplicateIgnored)return this.saveToStorage(),y;if(L!==Nt.Applied)throw new z(K.SequenceGap,`Matside event not applied: ${L}`);if(this.protocolJournal.push({wireHex:he(e),atMs:i}),g)n.period_number=p,n.clock_remaining_ms=b,this.recordMatsideConfirmedResult(n.match_id,I,k,u,f,t.authority_epoch,n.completed_at_ms||i);else{const C=_==="PIN_FALL"||d.bout_ended===!0,P=!!n.winner_athlete_id&&n.lifecycle===E.EndedLocal,O=C?I||(_==="PIN_FALL"?o.actor==="GREEN"?n.green_athlete_id:n.red_athlete_id:u>f?n.red_athlete_id:f>u?n.green_athlete_id:""):"",w=O?O===n.red_athlete_id?n.green_athlete_id:n.red_athlete_id:"",x=Math.abs(u-f),S=C?se.normalizeSyncedWinType(k)||(_==="PIN_FALL"?"FALL":x>=this.rulesBundle.technical_fall_margin?"TF":x>=8?"MD":"DEC"):"";if(n.red_score=u,n.green_score=f,n.period_number=p,n.clock_remaining_ms=b,n.clock_running=typeof d.clock_running=="boolean"?d.clock_running:_!=="STOP_BOUT_CLOCK"&&_!=="PIN_FALL",n.lifecycle=C?E.EndedLocal:E.InProgress,n.winner_athlete_id=O,n.loser_athlete_id=w,n.win_type=S,n.completed_at_ms=C?n.completed_at_ms||i:0,C&&O){for(const N of[n.red_athlete_id,n.green_athlete_id]){const V=this.athletes.get(N);V&&S!=="FORFEIT"&&S!=="BYE"&&(V.last_bout_ended_ms=Math.max(V.last_bout_ended_ms,n.completed_at_ms),V.updated_at_ms=Math.max(V.updated_at_ms,n.completed_at_ms))}const D=String(d.win_type??o.ending_type??"").toUpperCase(),F=this.isWithdrawn(w)||S==="DQ"||D==="MEDICAL_FORFEIT";n.winner_next_match_id&&this.advanceParticipantToDownstream(n.winner_next_match_id,O,n.match_id),n.loser_next_match_id&&!F&&this.advanceParticipantToDownstream(n.loser_next_match_id,w,n.match_id),this.resolveCompletedByesForBracket(n.bracket_id,n.completed_at_ms),this.advanceScratches(n.completed_at_ms);for(let N=1;N<=this.matCount;N++)this.promoteMatReadyBout(N,n.completed_at_ms)}else P&&!C&&this.revertProvisionalDownstreamAdvancement(n.match_id,i);this.publishAndSave()}return y}submitOwVote(e){if(e.tournamentId!==this.tournamentId||!/^[a-zA-Z0-9_-]{16,128}$/.test(e.voterId)||!this.athletes.has(e.athleteId))throw new Error("Invalid tournament, voter identifier or athlete");return this.owVotes.get(e.voterId)!==e.athleteId&&(this.owVotes.set(e.voterId,e.athleteId),this.publishAndSave()),this.getOwVoteTallies()}getOwVoteTallies(){if(this.owVotes.size===0&&Object.keys(this.syncedOwVoteTallies).length>0)return{...this.syncedOwVoteTallies};const e={};for(const i of this.owVotes.values())e[i]=(e[i]??0)+1;return e}signRelayReceipt(e,i,t){const n={requestId:e,ok:i,result:t};return{...n,signatureHex:he(Oe(Ie,Ke(n),this.keyPair.privateKey))}}registerAthlete(e){const i=e.name.trim();if(!i)throw new z(K.InvalidArgument,"Athlete name is required");const t=(e.divisionId??"VARSITY").trim().toUpperCase()||"VARSITY",n=e.athleteId?.trim()||`ATH-${Ye()}`;if(this.athletes.has(n))throw new z(K.InvalidArgument,"Athlete ID is already registered");if(!e.weightClassId.trim()||this.isBracketFrozen(e.weightClassId,t))throw new z(K.InvalidArgument,"Select an open weight class before adding wrestlers");const s=he(crypto.getRandomValues(new Uint8Array(16))),a=(e.flowrestlingId??"").trim(),r={athlete_id:n,opaque_pass_token:`PASS-${e.weightClassId}-${s}`,public_display_name:i,team_id:e.teamId.trim().toUpperCase()||"IND",team_name:e.teamName.trim()||"Independent",division_id:t,weight_class_id:e.weightClassId,seed_rank:Math.max(1,Math.floor(e.seedRank||1)),flowrestling_id:a,check_in_stage:Q.Arrived,weigh_in_eligible:!1,medically_cleared:!1,matches_wrestled_today:0,prior_day_matches:Math.max(0,Math.floor(e.priorDayMatches??0)),last_bout_ended_ms:0,updated_at_ms:this.now()};return this.athletes.set(n,r),this.publishAndSave(),r}static parseRosterCsv(e,i=","){const t=[];let n=[],s="",a=!1,r=!1;const o=()=>{throw new z(K.InvalidArgument,"Invalid quoted field in roster CSV")};for(let l=0;l<=e.length;l++){const c=l===e.length?`
`:e[l];if(!a&&!n.length&&!s.trim()&&c==="#"){for(;l<e.length&&e[l]!==`
`;)l++;s="";continue}a?(l===e.length&&o(),c==='"'?e[l+1]==='"'?(s+='"',l++):(a=!1,r=!0):s+=c):c===i||c===`
`||c==="\r"?(n.push(s.trim()),s="",r=!1,c!==i&&(n.some(d=>d.length>0)&&t.push(n),n=[],c==="\r"&&e[l+1]===`
`&&l++)):c==='"'?((s.trim()||r)&&o(),s="",a=!0):(r&&c.trim()&&o(),s+=c)}return t}static normalizeCsvHeaderName(e){return e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}static deriveTeamCodeFromSchool(e){const i=e.trim();if(!i)return"";const t=i.replace(/[^A-Za-z0-9\s]/g," ").split(/\s+/).filter(Boolean);if(t.length===1)return t[0].slice(0,6).toUpperCase();const n=t.map(s=>s[0].toUpperCase()).join("");return(n.length>=2?n.slice(0,6):i.replace(/[^A-Za-z0-9]/g,"").slice(0,6)).toUpperCase()}static deriveAthleteIdFromFields(e,i,t,n){const s=n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().toUpperCase().replace(/[^A-Z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,28),a=t.replace(/[^A-Z0-9]+/g,"").slice(0,8)||"IND",r=(e||"VARSITY").replace(/[^A-Z0-9]+/g,"").slice(0,8),o=i.replace(/[^A-Z0-9]+/g,"").slice(0,6);return`ATH-${r}-${o}-${a}-${s||"WRESTLER"}`}static escapeCsvCell(e){const i=e==null?"":String(e);return/[",\r\n]/.test(i)||i.startsWith("#")?`"${i.replace(/"/g,'""')}"`:i}exportRosterTemplateCsv(){return["# OpenMat Tournament Roster & Full Backup Template","# Fill out one row per wrestler. Lines starting with '#' are ignored on spreadsheet import.","#","# COLUMN GUIDE (You can use this full template OR a simple coach spreadsheet with columns:","#   first_name, last_name, school_name, team_code, division, weight_class_lbs, actual_weight_lbs, seed_rank, grade, flowrestling_id):","#   - first_name / last_name (or public_display_name): Wrestler First & Last Name","#   - school_name / team_name: High School or Club Name","#   - team_id / team_code: Short 2-6 letter school/team abbreviation","#   - division_id: VARSITY, JV, BOYS, GIRLS, U16, U18, or NOVICE (defaults to VARSITY)","#   - weight_class_id / weight_lbs: NFHS Weight Class in lbs (106, 113, 120, 126, 132, 138, 144, 150, 157, 165, 175, 190, 215, 285)","#   - actual_weight_lbs: Measured scale weight in lbs (for example 131.4)","#   - seed_rank: Seeding rank in weight class (1 = #1 seed, 2 = #2 seed)","#   - check_in_stage / weigh_in_eligible / medically_cleared / medical_decision / bracket_frozen / bracket_format:","#     Full tournament state columns for restoring a saved backup CSV.","athlete_id,public_display_name,team_id,team_name,division_id,weight_class_id,seed_rank,flowrestling_id,first_name,last_name,school_name,weight_lbs,actual_weight_lbs,grade,check_in_stage,weigh_in_eligible,medically_cleared,medical_decision,medical_reviewer,scale_station_id,scale_id,bracket_frozen,bracket_format,opaque_pass_token"].join(`
`)+`
`}exportTournamentBackupCsv(){const e={version:1,tournament_id:this.tournamentId,tournament_name:this.tournamentName,event_date:this.eventDate,venue:this.venue,rules_version:this.rulesVersion,mat_count:this.matCount,growth_allowance_tenths:this.growthAllowanceTenths,consecutive_day_allowance_tenths:this.consecutiveDayAllowanceTenths,bracket_frozen_by_class:Array.from(this.bracketFrozenByClass.entries()),bouts:Array.from(this.bouts.values())},i=new Map;for(const s of this.bouts.values()){const r=`${(s.division_id||"VARSITY").toUpperCase()}:${s.weight_class_id}`;if(!i.has(r)){const l=[J.DoubleElimCrossover,J.TrueSecondChallenge,J.RoundRobinPool,J.PoolToBracket,J.TeamDual].find(c=>s.bracket_id.endsWith(c));i.set(r,l??J.DoubleElimCrossover)}}const t=["# OpenMat Full Tournament Backup & Disaster Recovery CSV (v1)","# Re-importing this CSV into OpenMat Officials Console fully rebuilds all wrestlers, seeds, scale weigh-ins, skin/medical checks, and generated brackets.",`#openmat_tournament_backup_v1:${JSON.stringify(e)}`,`# OPENMAT_SELF_REG_JSON: ${JSON.stringify({registrations:[...this.pendingSelfRegistrations.values()],dispositions:[...this.selfRegistrationDispositions.entries()]})}`,"athlete_id,public_display_name,team_id,team_name,division_id,weight_class_id,seed_rank,flowrestling_id,first_name,last_name,school_name,weight_lbs,actual_weight_lbs,grade,check_in_stage,weigh_in_eligible,medically_cleared,medical_decision,medical_reviewer,scale_station_id,scale_id,bracket_frozen,bracket_format,opaque_pass_token"],n=Array.from(this.athletes.values()).sort((s,a)=>(s.division_id||"VARSITY").localeCompare(a.division_id||"VARSITY")||Number(s.weight_class_id)-Number(a.weight_class_id)||s.seed_rank-a.seed_rank||s.athlete_id.localeCompare(a.athlete_id));for(const s of n){const a=(s.division_id||"VARSITY").toUpperCase(),r=s.weight_class_id,o=s.public_display_name.trim().split(/\s+/),l=o[0]??"",c=o.slice(1).join(" "),d=this.privateWeighIns.get(s.athlete_id),_=d?(d.measured_weight_tenths/10).toFixed(1):"",m=d?.station_id??"",v=d?.scale_id??"",u=this.privateMedicals.get(s.athlete_id),f=u?.decision??(s.medically_cleared?"CLEARED":""),p=u?.reviewer_id??(s.medically_cleared?"Head Official":""),b=this.isBracketFrozen(r,a),g=i.get(`${a}:${r}`)??J.DoubleElimCrossover,k=(Et[s.check_in_stage]??String(s.check_in_stage)).toUpperCase().replace(/[^A-Z0-9]+/g,"_"),I=[s.athlete_id,s.public_display_name,s.team_id,s.team_name,a,r,s.seed_rank,s.flowrestling_id??"",l,c,s.team_name,r,_,"",k,s.weigh_in_eligible,s.medically_cleared,f,p,m,v,b,g,s.opaque_pass_token].map(R=>se.escapeCsvCell(R));t.push(I.join(","))}return t.join(`
`)+`
`}exportCoachRosterTemplateCsv(e=!0){const i=["# OpenMat Coach & School Spreadsheet Roster Template","# Edit in Excel, Google Sheets, or Numbers and save as CSV. Lines starting with '#' are ignored.","# Channel League School Codes: SBHS, DPHS, SMHS, VHS, BHS, OHS, PHS, RMHS (Division: NOVICE, JV, VARSITY, GIRLS)","first_name,last_name,school_name,team_code,division,weight_class_lbs,actual_weight_lbs,seed_rank,grade,flowrestling_id,athlete_id"];return e&&i.push("Jordan,Rivera,Santa Barbara High School,SBHS,VARSITY,132,131.4,1,12,FLO-88413201,ATH-SBHS-132-01","Marcus,Vance,San Marcos High School,SMHS,VARSITY,132,131.8,2,11,FLO-88413202,ATH-SMHS-132-02","Mateo,Delgado,Dos Pueblos High School,DPHS,VARSITY,132,130.9,3,12,,ATH-DPHS-132-03","Liam,O'Connor,Ventura High School,VHS,VARSITY,132,132.0,4,10,,ATH-VHS-132-04","Carlos,Mendoza,Buena High School,BHS,VARSITY,138,137.4,1,12,FLO-88413801,ATH-BHS-138-01","Noah,Takahashi,Rio Mesa High School,RMHS,VARSITY,138,137.8,2,11,,ATH-RMHS-138-02","Elena,Rostova,Santa Barbara High School,SBHS,GIRLS,120,119.2,1,11,FLO-88412001,ATH-SBHS-G120-01","Sofia,Morales,Oxnard High School,OHS,GIRLS,120,118.6,2,12,,ATH-OHS-G120-02"),i.join(`
`)+`
`}exportDemoTemplateCsv(e=ne.defaultDivision){return on(e)}exportEmergencyFallbackHtml(){return yn(hi(this,this.now()))}exportEmergencyFallbackXlsx(){return pn(hi(this,this.now()))}parsePastedRoster(e){const t=e.text.replace(/^\uFEFF/,"").split(/\r\n?|\n/),n=u=>u.trim()&&!u.trimStart().startsWith("#"),s=t.findIndex(n);if(s<0)return[];const a=u=>{const f=u.replace(/"(?:[^"]|"")*"/g,"");return f.includes("	")?"	":f.includes(";")?";":","},r=t[s],o=a(r),[l=[]]=se.parseRosterCsv(r,o),c=l.map(se.normalizeCsvHeaderName),d=["name","athlete_name","public_display_name","full_name","wrestler","wrestler_name","first_name","firstname","first"],_=["weight","weight_class","weight_class_id","weight_class_lbs","weight_lbs","wt_class","wt"];if(c.some(u=>d.includes(u))&&c.some(u=>_.includes(u)))return se.parseRosterCsv(t.slice(s).join(`
`),o).filter(u=>!u[0]?.startsWith("#"));const m=new Set([...this.athletes.values()].flatMap(u=>[u.team_name.toLowerCase(),u.team_id.toLowerCase()])),v=[["name","school","division","weight","seed"]];for(const[u,f]of t.entries()){if(!n(f))continue;const p=f.replace(/^\s*(?:[-*•]|\d+[.)])\s+/,""),b=a(p),[g=[]]=se.parseRosterCsv(p,b),k=g.findIndex(w=>/^\d{2,3}(?:\.\d+)?(?:\s*(?:lbs?|pounds?)\.?)?$/i.test(w));let I="",R="";const M=g.filter((w,x)=>{if(!w||x===k)return!1;if(/^(VARSITY|JV|NOVICE|GIRLS|FROSH)$/i.test(w))return I=w,!1;const S=/^(?:#\s*|seed\s+)?([1-9]|1[0-6])$/i.exec(w);return x>k&&S?(R=S[1],!1):!0}),[L="",y="",C=""]=M;if(k<0||!L||M.length>3)throw new Error(`Check the name, school, and weight on roster row ${u+1}`);let P=L,O=y;C?(P=`${L} ${y}`,O=C):e.defaultTeamName?.trim()&&y&&[L,y].every(w=>!/\s/.test(w)&&!m.has(w.toLowerCase()))&&(P=b===","?`${y} ${L}`:`${L} ${y}`,O=""),v.push([P,O,I,g[k],R])}return v}previewPastedRosterText(e){const{importedCount:i,skippedDuplicates:t}=this.importRoster("",e,!0);return{importedCount:i,skippedDuplicates:t}}importPastedRosterText(e){return this.importRoster("",e)}importRosterCsv(e){return this.importRoster(e)}importRoster(e,i,t=!1){const n=e.replace(/^\uFEFF/,"");let s=null,a=null;for(const R of n.split(/\r?\n/)){const M=R.trim();if(M.startsWith("# OPENMAT_SELF_REG_JSON:"))try{a=JSON.parse(M.slice(24).trim())}catch{}if(M.startsWith("#openmat_tournament_backup_v1:"))try{s=JSON.parse(M.slice(30))}catch{}}s&&this.assertDrawNotStarted();const r=i?this.parsePastedRoster(i):se.parseRosterCsv(n);let o=null;const l=[],c=[],d=[],_=[],m=new Map,v=new Map,u=new Map;let f=0;const p=new Set(["athlete_id","id","athleteid","public_display_name","name","athlete_name","full_name","wrestler","wrestler_name","first_name","firstname","first","last_name","lastname","last","team_id","team_code","team","school_code","team_name","teamname","school_name","school","high_school","club","division_id","division","div","weight_class_id","weight_class_lbs","weight_class","weight_lbs","weight","wt_class","wt","actual_weight_lbs","actual_weight","scale_weight","measured_weight_lbs","seed_rank","seed","grade","year","flowrestling_id","flo_id","check_in_stage","weigh_in_eligible","medically_cleared","medical_decision","medical_reviewer","scale_station_id","scale_id","bracket_frozen","bracket_format","opaque_pass_token"]),b=new Set(En),g=R=>{const M=R.toUpperCase();return M==="FROSH"?"JV":M};for(const[R,M]of r.entries()){if(R===0){const Z=M.map(ye=>se.normalizeCsvHeaderName(ye)),oe=Z[0]??"",_e=oe==="athlete_id"||oe==="id"||oe==="athleteid",be=Z.filter(ye=>p.has(ye)).length;if(_e||be>=2){const ye=new Map;Z.forEach((Ue,$e)=>{Ue&&!ye.has(Ue)&&ye.set(Ue,$e)}),o=ye;continue}}let L="",y="",C="",P="",O="VARSITY",w="",x="",S="",D="",F=!1;const N=(...Z)=>{if(!o)return"";for(const oe of Z){const _e=o.get(oe);if(_e!==void 0&&_e<M.length){const be=(M[_e]??"").trim();if(be)return be}}return""};if(o){const Z=N("first_name","firstname","first"),oe=N("last_name","lastname","last");y=N("public_display_name","full_name","name","athlete_name","wrestler","wrestler_name")||[Z,oe].filter(Boolean).join(" ").trim();const be=N("school_name","school","high_school","team_name","teamname","club"),ye=N("team_code","team_id","team","school_code");P=be||ye,C=(ye||se.deriveTeamCodeFromSchool(P)).toUpperCase(),P||(P=C),O=g(N("division_id","division","div")||i?.defaultDivisionId?.trim()||"VARSITY");const Ue=N("weight_class_id","weight_class_lbs","weight_class","wt_class");if(w=Ue||N("weight_lbs","weight","wt"),F=!!i||!Ue,D=N("actual_weight_lbs","actual_weight","scale_weight","measured_weight_lbs"),x=N("seed_rank","seed"),S=N("flowrestling_id","flo_id"),L=N("athlete_id","id","athleteid"),i){const $e=/^([^,]+),\s*([^,]+)$/.exec(y);$e&&!/^(?:jr\.?|sr\.?|ii|iii|iv)$/i.test($e[2].trim())&&(y=`${$e[2].trim()} ${$e[1].trim()}`);const Mt=i.defaultTeamName?.trim()??"";P=be||Mt||ye||"Unattached";const $i=!be||!Mt||be.toLowerCase()===Mt.toLowerCase()?i.defaultTeamId?.trim():"";C=(ye||$i||se.deriveTeamCodeFromSchool(P)).toUpperCase()}}else{if(M.length<5)throw new z(K.InvalidArgument,"Roster CSV row requires at least 5 columns (athlete_id,public_display_name,team_id,division_id,weight_class_id)");L=(M[0]??"").trim(),y=(M[1]??"").trim(),C=(M[2]??"").trim().toUpperCase();const Z=g(M[3]||"VARSITY"),oe=g(M[4]||"VARSITY"),_e=M.length>=6&&!/^\d/.test(oe)&&(b.has(oe)||!b.has(Z));P=_e&&(M[3]??"").trim()||C,O=_e?oe:Z,w=(_e?M[5]:M[4])??"",x=((_e?M[6]:M[5])??"").trim(),S=((_e?M[7]:M[6])??"").trim()}const V=R+1;if(!i&&!b.has(O))throw new z(K.InvalidArgument,`Select a supported division in CSV record ${V}.`);w=w.replace(/\s*(lbs?|pounds?)\.?$/i,"").trim().replace(/^(\d+)\.0+$/,"$1");const W=ot(O);if(F&&!W.includes(w)){const Z=/^\d+(?:\.\d+)?$/.test(w)?Number(w):NaN;Z>=50&&(D||=w,w=W.find(oe=>Number(oe)>=Z)??"")}if(!i&&!W.includes(w))throw new z(K.InvalidArgument,`Enter a valid weight class for ${O} in CSV record ${V}.`);if(!o&&!L||!y||!C||!w)throw new z(K.InvalidArgument,"Roster CSV row contains empty required identifier field");L||=se.deriveAthleteIdFromFields(O,w,C,y),x=x.replace(/^(?:#\s*|seed\s+)/i,"");let B=0;if(x){const Z=Number(x);if(!Number.isInteger(Z)||Z<0)throw new z(K.InvalidArgument,"Invalid seed_rank in roster CSV");B=Z}const U=i?"":N("check_in_stage","stage","status").toUpperCase(),$=N("weigh_in_eligible","weigh_in_passed").toLowerCase(),j=N("medically_cleared","skin_check_cleared","medical_cleared").toLowerCase(),A=N("medical_decision").toUpperCase(),H=N("medical_reviewer","reviewer_id"),q=N("scale_station_id","station_id"),G=N("scale_id"),ee=N("bracket_frozen").toLowerCase(),ie=N("bracket_format").toUpperCase(),ce=N("opaque_pass_token","pass_token"),ae={1:Q.Expected,EXPECTED:Q.Expected,2:Q.Arrived,ARRIVED:Q.Arrived,3:Q.WeighInPending,WEIGH_IN_PENDING:Q.WeighInPending,"WEIGH-IN PENDING":Q.WeighInPending,4:Q.MedicalPending,MEDICAL_PENDING:Q.MedicalPending,"MEDICAL PENDING":Q.MedicalPending,5:Q.Eligible,ELIGIBLE:Q.Eligible,6:Q.Withdrawn,WITHDRAWN:Q.Withdrawn,7:Q.Scratched,SCRATCHED:Q.Scratched}[U],de=!i&&!!(s||U||$||j||A||ee);if(u.has(L)){const Z=u.get(L);if(Z.team_id!==C||(Z.division_id||"VARSITY").toUpperCase()!==O||Z.weight_class_id!==w||Z.public_display_name!==y||Z.flowrestling_id&&S&&Z.flowrestling_id!==S)throw new z(K.InvalidArgument,`Conflicting duplicate athlete_id in roster CSV: ${L}`);f++;continue}const X=this.athletes.get(L);if(X&&!de){if(X.team_id!==C||(X.division_id||"VARSITY").toUpperCase()!==O||X.weight_class_id!==w||X.public_display_name!==y||X.flowrestling_id&&S&&X.flowrestling_id!==S)throw new z(K.InvalidArgument,`Conflicting duplicate athlete_id in roster CSV: ${L}`);!X.flowrestling_id&&S&&m.set(X,S),f++;continue}if(!de&&this.isBracketFrozen(w,O))throw new z(K.InvalidArgument,"Unfreeze the bracket before importing wrestlers");if(de&&(X||this.isBracketFrozen(w,O))&&this.assertDrawNotStarted(),D){const Z=D.replace(/\s*(lbs?|pounds?)\.?$/i,"").trim(),oe=Number(Z),_e=Math.round(oe*10);if(!Number.isFinite(oe)||_e<500||_e>3500)throw new z(K.InvalidArgument,"Invalid actual_weight_lbs in roster CSV (must be between 50.0 and 350.0 lbs)");c.push({athleteId:L,stationId:i?.stationId?.trim()||q||"CSV-IMPORT",scaleId:G||"CSV-SCALE",measuredWeightTenths:_e})}else if(i?i.autoClearEligibility:$==="true"||$==="1"||$==="yes"||ae===Q.Eligible){const Z=Math.max(550,Math.min(3450,Number(w)*10||1320));c.push({athleteId:L,stationId:i?.stationId?.trim()||q||"CSV-RESTORE",scaleId:G||"CSV-SCALE",measuredWeightTenths:Z})}const pe=new Set(["CLEARED","CLEARED_PHYSICIAN_FORM","MEDICAL_HOLD_DISQUALIFIED","GROOMING_HOLD"]);if(i?.autoClearEligibility?d.push({athleteId:L,reviewerId:i.reviewerId?.trim()||"Head Official",decision:"CLEARED"}):!i&&pe.has(A)?d.push({athleteId:L,reviewerId:H||"CSV-RESTORE",decision:A}):!i&&(j==="true"||j==="1"||j==="yes"||ae===Q.Eligible)&&d.push({athleteId:L,reviewerId:H||"CSV-RESTORE",decision:"CLEARED"}),ae!==void 0&&_.push({athleteId:L,stage:ae}),!i&&(ee==="true"||ee==="1"||ee==="yes")){const oe=new Set(Object.values(J)).has(ie)?ie:J.DoubleElimCrossover;v.set(`${O}:${w}`,{divisionId:O,weightClassId:w,format:oe})}const At=t?"":he(crypto.getRandomValues(new Uint8Array(16))),te={athlete_id:L,opaque_pass_token:!i&&ce||X?.opaque_pass_token||`PASS-${w}-${At}`,public_display_name:y,team_id:C,team_name:P,division_id:O,weight_class_id:w,seed_rank:B,flowrestling_id:S||X?.flowrestling_id||"",check_in_stage:Q.Arrived,weigh_in_eligible:!1,medically_cleared:!1,matches_wrestled_today:X?.matches_wrestled_today??0,prior_day_matches:X?.prior_day_matches??0,last_bout_ended_ms:X?.last_bout_ended_ms??0,updated_at_ms:this.now()};u.set(L,te),l.push(te)}const k=new Map;for(const R of this.athletes.values()){const M=`${(R.division_id||"VARSITY").toUpperCase()}:${R.weight_class_id}`;R.seed_rank>0&&k.set(M,Math.max(k.get(M)??0,R.seed_rank))}for(const R of l){const M=`${(R.division_id||"VARSITY").toUpperCase()}:${R.weight_class_id}`;R.seed_rank>0&&k.set(M,Math.max(k.get(M)??0,R.seed_rank))}for(const R of l)if(R.seed_rank<=0){const M=`${(R.division_id||"VARSITY").toUpperCase()}:${R.weight_class_id}`,L=k.get(M)??0;L>0?(R.seed_rank=L+1,k.set(M,R.seed_rank)):R.seed_rank=1}if(t)return{importedCount:l.length,skippedDuplicates:f,athletes:[]};v.size&&this.assertDrawNotStarted();for(const[R,M]of m)R.flowrestling_id=M;const I=this.isSeeding;this.isSeeding=!0;try{if(a){for(const R of a.registrations??[])try{const M=Wt(R,this.tournamentId);this.pendingSelfRegistrations.set(M.registration_id,{...M,received_at_ms:R.received_at_ms??this.now(),source:R.source??"NETWORK_FORM",checked_in_athlete_id:R.checked_in_athlete_id,checked_in_at_ms:R.checked_in_at_ms})}catch{}for(const[R,M]of a.dispositions??[])Xe(R)&&["APPROVED","DISMISSED","PENDING"].includes(M.status)&&this.selfRegistrationDispositions.set(R,M)}s&&(s.tournament_id&&(this.tournamentId=s.tournament_id),s.tournament_name&&(this.tournamentName=s.tournament_name),s.event_date&&(this.eventDate=s.event_date),s.venue&&(this.venue=s.venue),s.rules_version&&(this.rulesVersion=s.rules_version),typeof s.growth_allowance_tenths=="number"&&(this.growthAllowanceTenths=s.growth_allowance_tenths),typeof s.consecutive_day_allowance_tenths=="number"&&(this.consecutiveDayAllowanceTenths=s.consecutive_day_allowance_tenths),typeof s.mat_count=="number"&&s.mat_count>=1&&s.mat_count<=ht&&this.configureMatCount(s.mat_count));for(const R of l)this.athletes.set(R.athlete_id,R);for(const R of c)this.athletes.has(R.athleteId)&&this.recordScaleWeighIn({athleteId:R.athleteId,stationId:R.stationId,scaleId:R.scaleId,measuredWeightTenths:R.measuredWeightTenths});for(const R of d)this.athletes.has(R.athleteId)&&this.recordMedicalDecision({athleteId:R.athleteId,reviewerId:R.reviewerId,reviewerRole:"Physician",decision:R.decision,privateClinicalNotes:""});for(const R of _){const M=this.athletes.get(R.athleteId);M&&(M.check_in_stage=R.stage,M.updated_at_ms=this.now())}if(v.size>0)for(const R of v.values())this.generateBracketForClass(R.weightClassId,R.format,R.divisionId);if(s?.bouts&&Array.isArray(s.bouts)&&s.bouts.length>0&&s.bouts.every(M=>(!M.red_athlete_id||this.athletes.has(M.red_athlete_id))&&(!M.green_athlete_id||this.athletes.has(M.green_athlete_id)))){this.bouts=new Map(s.bouts.map(y=>[y.match_id,structuredClone(y)])),this.nextBoutNumber=1+Math.max(100,...Array.from(this.bouts.values()).map(y=>y.bout_number||100)),Array.isArray(s.bracket_frozen_by_class)&&(this.bracketFrozenByClass=new Map(s.bracket_frozen_by_class));const M=new Map,L=new Map;for(const y of this.bouts.values()){if(y.is_bye||!re(y))continue;const C=(y.win_type||"").toUpperCase();if(!(C==="FORFEIT"||C==="BYE"))for(const P of[y.red_athlete_id,y.green_athlete_id]){if(!P)continue;M.set(P,(M.get(P)??0)+1);const O=y.completed_at_ms||0;O>(L.get(P)??0)&&L.set(P,O)}}for(const[y,C]of this.athletes.entries())C.matches_wrestled_today=M.get(y)??0,C.last_bout_ended_ms=L.get(y)??0}}finally{this.isSeeding=I}return(l.length>0||m.size>0||c.length>0||d.length>0||v.size>0||a||s)&&this.publishAndSave(),{importedCount:l.length,skippedDuplicates:f,rebuiltBracketClasses:v.size,athletes:l}}hasFailedWeighInOrHold(e){const i=this.privateMedicals.get(e)?.decision;return this.privateWeighIns.get(e)?.passed===!1||i!==void 0&&i!=="CLEARED"&&i!=="CLEARED_PHYSICIAN_FORM"}canBatchClearRosterEligibility(e){return(!e.weigh_in_eligible||!e.medically_cleared)&&!this.isWithdrawn(e.athlete_id)&&!this.hasFailedWeighInOrHold(e.athlete_id)}batchClearRosterEligibility(e){const i=(e?.divisionId??"").trim().toUpperCase(),t=(e?.weightClassId??"").trim(),n=e?.athleteIds&&new Set(e.athleteIds),s=(e?.reviewerId??"").trim()||"Head Official",a=(e?.stationId??"").trim()||"STATION-1";let r=0,o=0;const l=this.isSeeding;this.isSeeding=!0;try{for(const c of this.athletes.values())if(!(n&&!n.has(c.athlete_id))&&!(i&&i!=="ALL"&&(c.division_id||"VARSITY").toUpperCase()!==i)&&!(t&&t!=="ALL"&&c.weight_class_id!==t)){if(!this.canBatchClearRosterEligibility(c)){this.hasFailedWeighInOrHold(c.athlete_id)&&o++;continue}if(!c.weigh_in_eligible){const d=this.privateWeighIns.get(c.athlete_id)?.measured_weight_tenths??Math.max(550,Math.min(3450,Number(c.weight_class_id)*10||1320));this.recordScaleWeighIn({athleteId:c.athlete_id,stationId:a,scaleId:"SCALE-BATCH",measuredWeightTenths:d})}c.medically_cleared||this.recordMedicalDecision({athleteId:c.athlete_id,reviewerId:s,reviewerRole:"Physician",decision:"CLEARED",privateClinicalNotes:""}),r++}}finally{this.isSeeding=l}return r>0&&this.publishAndSave(),{clearedCount:r,skippedHoldOrFailedCount:o}}lookupByOpaquePassToken(e){const i=e.trim().toUpperCase();for(const t of this.athletes.values())if(t.opaque_pass_token.toUpperCase()===i||t.athlete_id.toUpperCase()===i)return{found:!0,athlete:t,impliesEligibilityAttestation:!1};return{found:!1,impliesEligibilityAttestation:!1}}stageSelfRegistration(e,i="NETWORK_FORM",t=!0){const n=Wt(e,this.tournamentId,this.now());if(n.tournament_id!==this.tournamentId)throw new Error("This pass belongs to another tournament");const s=mt(n.registration_id),a=this.selfRegistrationDispositions.get(n.registration_id);if(a?.status==="DISMISSED"&&n.revision<=a.revision&&i!=="QR_SCAN"){const _=this.pendingSelfRegistrations.get(n.registration_id);if(_)return{entry:_};const m={...n,received_at_ms:this.now(),source:i};return this.pendingSelfRegistrations.set(n.registration_id,m),t&&this.saveToStorage(),{entry:m}}const r=i==="QR_SCAN"&&a?.status==="DISMISSED";r&&(this.selfRegistrationDispositions.set(n.registration_id,{status:"PENDING",revision:Math.max(n.revision,a.revision),updated_at_ms:Math.max(this.now(),a.updated_at_ms+1),synced:!1}),t&&this.postSelfRegistrationDisposition(n.registration_id));const o=this.pendingSelfRegistrations.get(n.registration_id),l=this.athletes.get(a?.athlete_id??o?.checked_in_athlete_id??s);if(l){const _={...o??n,received_at_ms:o?.received_at_ms??this.now(),source:o?.source??i,checked_in_athlete_id:l.athlete_id,checked_in_at_ms:o?.checked_in_at_ms??l.updated_at_ms};return(!o||!o.checked_in_athlete_id)&&(this.pendingSelfRegistrations.set(n.registration_id,_),t&&this.saveToStorage()),{entry:_,alreadyCheckedInAthlete:l}}if(!o&&i!=="QR_SCAN"&&this.listUncheckedSelfRegistrations().length>=sn)throw new z(K.InvalidArgument,"Pending self-registration staging queue is full");if(!(!o||n.revision>o.revision||n.revision===o.revision&&(n.updated_at_ms>o.updated_at_ms||n.updated_at_ms===o.updated_at_ms&&o.source==="NETWORK_FORM"&&Object.keys(n).some(_=>_!=="submitted_at_ms"&&n[_]!==o[_]))))return r&&(o.source="QR_SCAN"),r&&t&&(this.saveToStorage(),this.onStateChanged?.()),{entry:o};const d={...n,received_at_ms:o?.received_at_ms??this.now(),source:i};return this.pendingSelfRegistrations.set(n.registration_id,d),t&&(this.saveToStorage(),this.onStateChanged?.()),{entry:d}}listUncheckedSelfRegistrations(e){const i=(e?.search??"").trim().toLowerCase(),t=(e?.divisionId??"").trim().toUpperCase(),n=[];for(const s of this.pendingSelfRegistrations.values()){const a=this.selfRegistrationDispositions.get(s.registration_id);if(a?.status==="DISMISSED"&&s.revision<=a.revision)continue;const r=`ATH-${s.registration_id}`;a?.status==="APPROVED"&&this.athletes.has(a.athlete_id??r)||s.checked_in_athlete_id&&this.athletes.has(s.checked_in_athlete_id)||this.athletes.has(r)||t&&t!=="ALL"&&s.division_id.toUpperCase()!==t||i&&!(s.public_display_name.toLowerCase().includes(i)||s.first_name.toLowerCase().includes(i)||s.last_name.toLowerCase().includes(i)||s.team_name.toLowerCase().includes(i)||s.team_id.toLowerCase().includes(i)||s.weight_class_id.toLowerCase().includes(i)||s.registration_id.toLowerCase().includes(i))||n.push(s)}return n.sort((s,a)=>(s.registration_id===this.selectedPendingSelfRegId?-1:0)-(a.registration_id===this.selectedPendingSelfRegId?-1:0)||a.updated_at_ms-s.updated_at_ms||s.public_display_name.localeCompare(a.public_display_name))}scanOrLookupWrestlerQrOrToken(e){const i=e.trim();if(!i)return{kind:"NOT_FOUND",reason:"Empty pass or QR code"};const t=qt(i,this.tournamentId);if(t.valid){if(t.record){let s;try{s=this.stageSelfRegistration(t.record,"QR_SCAN")}catch(a){return{kind:"NOT_FOUND",reason:a instanceof Error?a.message:String(a)}}return s.alreadyCheckedInAthlete?{kind:"ATHLETE",athlete:s.alreadyCheckedInAthlete,pendingEntry:s.entry,reason:`Already checked in: ${s.alreadyCheckedInAthlete.public_display_name}`}:(this.selectedPendingSelfRegId=s.entry.registration_id,this.onStateChanged?.(),{kind:"PENDING_SELF_REG",pendingEntry:s.entry,reason:`Staged self-registration for ${s.entry.public_display_name} (${s.entry.team_name}, ${s.entry.weight_class_id} lbs) — confirm weigh-in to check in`})}if(t.registrationIdOnly){if(t.tournamentId&&t.tournamentId!==this.tournamentId)return{kind:"NOT_FOUND",reason:"This pass belongs to another tournament"};const s=t.registrationIdOnly,a=this.athletes.get(this.selfRegistrationDispositions.get(s)?.athlete_id??mt(s));if(a)return{kind:"ATHLETE",athlete:a,reason:`Already checked in: ${a.public_display_name}`};const r=this.pendingSelfRegistrations.get(s);if(r){const o=this.stageSelfRegistration(r,"QR_SCAN");return this.selectedPendingSelfRegId=o.entry.registration_id,this.onStateChanged?.(),{kind:"PENDING_SELF_REG",pendingEntry:o.entry,reason:`Selected pending self-registration: ${o.entry.public_display_name} (${o.entry.weight_class_id} lbs)`}}}}const n=this.lookupByOpaquePassToken(i);return n.found&&n.athlete?{kind:"ATHLETE",athlete:n.athlete,reason:`Found registered wrestler: ${n.athlete.public_display_name}`}:{kind:"NOT_FOUND",reason:`No wrestler or self-registration found for "${i}"`}}approveSelfRegistration(e){const i=e.registrationId.trim().toUpperCase();if(!Xe(i))throw new z(K.InvalidArgument,`Invalid self-registration ID: ${e.registrationId}`);const t=this.pendingSelfRegistrations.get(i);if(!t)throw new z(K.InvalidArgument,`Unknown self-registration: ${i}`);if(e.checkInAndClear&&(e.measuredWeightTenths===void 0||!Number.isInteger(e.measuredWeightTenths)||e.measuredWeightTenths<500||e.measuredWeightTenths>3500))throw new z(K.InvalidArgument,"Enter a scale weight between 50.0 and 350.0 lb");const n=mt(i);let s=this.findSelfRegistrationAthlete(t);const a=e.reassignWeightClassId||s?.weight_class_id||t.weight_class_id;return this.validateWeightClass(s?.division_id??t.division_id,a,s?.weight_class_id),s||(s=this.registerAthlete({athleteId:n,name:t.public_display_name,teamId:t.team_id,teamName:t.team_name,divisionId:t.division_id,weightClassId:a,seedRank:e.seedRank??1})),e.checkInAndClear?s=this.completeUnifiedCheckIn({athleteId:s.athlete_id,measuredWeightTenths:e.measuredWeightTenths,reassignWeightClassId:a!==s.weight_class_id?a:void 0,skinDecision:e.skinDecision??"CLEARED",stationId:e.stationId,scaleId:e.scaleId,reviewerId:e.reviewerId,reviewerRole:e.reviewerRole,privateClinicalNotes:e.privateClinicalNotes}):s.weight_class_id!==a&&(s.weight_class_id=a,s.updated_at_ms=this.now(),this.publishAndSave()),t.checked_in_athlete_id=s.athlete_id,t.checked_in_at_ms=this.now(),this.selfRegistrationDispositions.set(i,{status:"APPROVED",athlete_id:s.athlete_id,revision:t.revision,updated_at_ms:Math.max(this.now(),(this.selfRegistrationDispositions.get(i)?.updated_at_ms??0)+1),synced:!1}),this.selectedPendingSelfRegId===i&&(this.selectedPendingSelfRegId=""),this.isSeeding||(this.postSelfRegistrationDisposition(i),this.saveToStorage(),this.onStateChanged?.()),s}findSelfRegistrationAthlete(e){const i=this.athletes.get(e.checked_in_athlete_id??mt(e.registration_id));if(i)return i;const t=c=>c.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/\s+/g," ").trim(),n=t(e.public_display_name),s=t(e.team_id),a=t(e.team_name),r=t(e.division_id),o=[...this.athletes.values()].filter(c=>!this.isWithdrawn(c.athlete_id)&&t(c.public_display_name)===n&&(t(c.team_id)===s||t(c.team_name)===a)),l=o.filter(c=>t(c.division_id)===r);return l.length===1?l[0]:l.length===0&&o.length===1?o[0]:void 0}selfRegistrationWeightClass(e,i){return i<=this.maxAllowedTenthsForClass(e.weight_class_id)?e.weight_class_id:ot(e.division_id).find(t=>Number(t)>=Number(e.weight_class_id)&&i<=this.maxAllowedTenthsForClass(t))??e.weight_class_id}batchApproveSelfRegistrations(e={}){const i=e.registrationIds&&new Set(e.registrationIds.map(r=>r.trim().toUpperCase()));let t=0,n=0;const s=[],a=this.isSeeding;this.isSeeding=!0;try{for(const r of this.listUncheckedSelfRegistrations()){const o=r.registration_id;if(i&&!i.has(o))continue;const l=e.weightInputsByRegId?.[o]?.trim(),c=l?Math.round(Number(l)*10):void 0,d=this.findSelfRegistrationAthlete(r),_=d??r,m=e.checkInAndClear&&!(d&&this.hasFailedWeighInOrHold(d.athlete_id)),v=c!==void 0||!!m,u=e.classInputsByRegId?.[o],f=u||(c===void 0?_.weight_class_id:this.selfRegistrationWeightClass(_,c)),p=d&&this.privateMedicals.get(d.athlete_id),b=d&&this.privateWeighIns.get(d.athlete_id);try{const g=this.approveSelfRegistration({registrationId:o,checkInAndClear:v,measuredWeightTenths:c??b?.measured_weight_tenths??Number(f)*10,reassignWeightClassId:v?f:u,skinDecision:e.skinInputsByRegId?.[o]??p?.decision??"CLEARED",stationId:e.stationId,scaleId:e.scaleId,reviewerId:e.reviewerId,privateClinicalNotes:p?.private_clinical_notes});t++,v&&g.check_in_stage===Q.Eligible&&n++}catch(g){s.push({registrationId:o,message:g instanceof Error?g.message:String(g)})}}}finally{this.isSeeding=a}return t&&(this.publishAndSave(),this.syncPendingSelfRegistrationsFromVenue()),{approvedCount:t,clearedCount:n,failures:s}}dismissSelfRegistration(e){const i=e.trim().toUpperCase(),t=this.pendingSelfRegistrations.get(i),n=!!t;return this.selectedPendingSelfRegId===i&&(this.selectedPendingSelfRegId=""),n&&(this.selfRegistrationDispositions.set(i,{status:"DISMISSED",revision:t.revision,updated_at_ms:Math.max(this.now(),(this.selfRegistrationDispositions.get(i)?.updated_at_ms??0)+1),synced:!1}),this.postSelfRegistrationDisposition(i),this.saveToStorage(),this.onStateChanged?.()),n}async postSelfRegistrationDisposition(e,i=this.activeVenueOrigin,t=!0){const n=this.selfRegistrationDispositions.get(e);if(!n||!i||typeof fetch>"u")return!1;try{if((await fetch(`${i.replace(/\/+$/,"")}/api/openmat-self-register`,{method:"POST",headers:{"Content-Type":"application/json"},signal:AbortSignal.timeout(3500),body:JSON.stringify({disposition:{registration_id:e,tournament_id:this.tournamentId,status:n.status,revision:n.revision,updated_at_ms:n.updated_at_ms,athlete_id:n.athlete_id}})})).ok&&this.selfRegistrationDispositions.get(e)===n)return n.synced=!0,t&&this.saveToStorage(),!0}catch{}return!1}selfRegistrationPolls=new Map;syncPendingSelfRegistrationsFromVenue(e=this.activeVenueOrigin){if(typeof fetch>"u"||!e||globalThis.navigator?.onLine===!1)return Promise.resolve(0);const i=`${this.tournamentId}:${e}`,t=this.selfRegistrationPolls.get(i);if(t)return t;const n=this.fetchPendingSelfRegistrations(e).finally(()=>this.selfRegistrationPolls.delete(i));return this.selfRegistrationPolls.set(i,n),n}async fetchPendingSelfRegistrations(e){try{const i=this.tournamentId,t=e.trim().replace(/\/+$/,"");if(/github\.io$/i.test(new URL(t).hostname))return 0;const n=[...this.selfRegistrationDispositions.entries()].filter(([,_])=>!_.synced).map(([_])=>_);let s=!1;for(let _=0;_<n.length&&this.tournamentId===i&&(await Promise.all(n.slice(_,_+12).map(v=>this.postSelfRegistrationDisposition(v,t,!1)))).some(Boolean);_+=12)s=!0;if(this.tournamentId!==i)return 0;s&&this.saveToStorage(),s=!1;const a=await fetch(`${t}/api/openmat-self-registrations?tournament=${encodeURIComponent(i)}`,{signal:AbortSignal.timeout(3500)});if(!a.ok)return 0;const r=await a.json();if(this.tournamentId!==i||!Array.isArray(r.registrations))return 0;const o=new Map(this.listUncheckedSelfRegistrations().map(_=>[_.registration_id,_]));let l=0;const c=new Set(r.registrations.flatMap(_=>{const m=_;return m?.tournament_id===i&&typeof m.registration_id=="string"?[m.registration_id]:[]}));for(const _ of r.dispositions??[]){if((_?.tournament_id?_.tournament_id!==i:!c.has(_?.registration_id)&&!this.pendingSelfRegistrations.has(_?.registration_id))||!_?.registration_id||!["APPROVED","DISMISSED","PENDING"].includes(_.status))continue;const m=this.pendingSelfRegistrations.get(_.registration_id);if(_.status==="DISMISSED"&&m?.source==="QR_SCAN"&&m.revision<=_.revision)continue;const v=this.selfRegistrationDispositions.get(_.registration_id);v?.status==="APPROVED"&&_.status==="PENDING"||(!v||_.revision>v.revision||_.revision===v.revision&&_.updated_at_ms>v.updated_at_ms?(this.selfRegistrationDispositions.set(_.registration_id,{..._,synced:!0}),l++):v.revision===_.revision&&v.updated_at_ms===_.updated_at_ms&&v.status===_.status&&!v.synced&&(v.synced=!0,s=!0))}for(const _ of r.registrations)try{const m=_&&typeof _=="object"&&typeof _.registration_id=="string"?this.pendingSelfRegistrations.get(String(_.registration_id).toUpperCase()):void 0,{entry:v}=this.stageSelfRegistration(_,"NETWORK_FORM",!1);this.pendingSelfRegistrations.get(v.registration_id)===v&&v!==m&&l++}catch{}if(!l&&!s)return 0;this.saveToStorage();let d=0;for(const _ of this.listUncheckedSelfRegistrations())o.get(_.registration_id)!==_&&d++,o.delete(_.registration_id);return d+=o.size,d&&this.onStateChanged?.(),d}catch{return 0}}setCheckInStage(e,i){const t=this.athletes.get(e);if(!t)throw new z(K.InvalidArgument,`Unknown athlete: ${e}`);const n=i===Q.Scratched||i===Q.Withdrawn;if(this.isWithdrawn(e)&&!n){if(i!==Q.Arrived)throw new Error("Reinstate the wrestler before check-in.");return this.reinstateAthlete(t),this.publishAndSave(),t}if(n&&!this.isWithdrawn(e)){const s=this.scheduledBoutsForAthlete(e).find(r=>!this.isUnstartedBout(r));if(s)throw new Error(`Ask the tournament director to review bout ${s.bout_number} before scratching this wrestler.`);const a=this.forfeitsForAthlete(e).map(r=>r.match_id);this.scratches.set(e,{priorForfeits:a,results:[]})}if(i===Q.Eligible&&(!t.weigh_in_eligible||!t.medically_cleared))throw new z(K.InvalidArgument,`Cannot mark ${t.public_display_name} Eligible until both Weigh-In and Medical/Skin Check are passed.`);if(t.check_in_stage=i,t.updated_at_ms=this.now(),n&&this.advanceScratches(t.updated_at_ms))for(const s of this.mats.keys())this.promoteMatReadyBout(s,t.updated_at_ms);return this.publishAndSave(),t}maxAllowedTenthsForClass(e){return Number(e)*10+this.growthAllowanceTenths+this.consecutiveDayAllowanceTenths}validateWeightClass(e,i,t){if(i===t)return;const n=(e||"VARSITY").trim().toUpperCase();if(!ot(n).includes(i))throw new Error("Select a weight class in this division");if(t){const s=[...this.bouts.values()].filter(r=>(r.division_id||"VARSITY").toUpperCase()===n&&(r.weight_class_id===t||r.weight_class_id===i)),a=s.find(r=>this.drawLocked(r));if(a)throw new Error(`Bout ${a.bout_number} locks the ${n} ${a.weight_class_id} lb bracket. Keep the wrestler in the current class.`);if(s.length)throw new Error(`Check ${n} ${t} lb and ${i} lb in Brackets & Seeds. Select Clear Bracket for each class with bouts before you change weight class.`)}if(t&&this.isBracketFrozen(t,n)||this.isBracketFrozen(i,n))throw new Error("You cannot move a wrestler into or out of a frozen bracket")}forfeitsForAthlete(e){return[...this.bouts.values()].filter(i=>(i.red_athlete_id===e||i.green_athlete_id===e)&&(i.win_type==="FORFEIT"&&i.winner_athlete_id!==e||i.is_bye&&!i.winner_athlete_id))}needsReinstatement(e){return e.check_in_stage===Q.Scratched?!0:e.check_in_stage===Q.Withdrawn&&(this.scratches.has(e.athlete_id)||this.forfeitsForAthlete(e.athlete_id).length>0)}recordScaleWeighIn(e){const i=this.athletes.get(e.athleteId);if(!i)throw new z(K.InvalidArgument,`Unknown athlete: ${e.athleteId}`);if(this.needsReinstatement(i))throw new Error("Reinstate the wrestler before check-in.");if(!Number.isInteger(e.measuredWeightTenths)||e.measuredWeightTenths<500||e.measuredWeightTenths>3500)throw new z(K.InvalidArgument,"Weight must be an integer in tenths of a pound between 50.0 and 350.0 lbs");e.reassignWeightClassId&&(this.validateWeightClass(i.division_id,e.reassignWeightClassId,i.weight_class_id),i.weight_class_id=e.reassignWeightClassId);const n=(this.privateWeighIns.get(i.athlete_id)?.attempt_number??0)+1,s=this.maxAllowedTenthsForClass(i.weight_class_id),a=e.measuredWeightTenths<=s,r={athlete_id:i.athlete_id,station_id:e.stationId,scale_id:e.scaleId,attempt_number:n,measured_weight_tenths:e.measuredWeightTenths,max_allowed_tenths:s,passed:a,recorded_at_ms:this.now()};return this.privateWeighIns.set(i.athlete_id,r),i.weigh_in_eligible=a,this.privateMedicals.get(i.athlete_id)?.decision==="MEDICAL_HOLD_DISQUALIFIED"?i.check_in_stage=Q.Withdrawn:a&&i.medically_cleared?i.check_in_stage=Q.Eligible:a?i.check_in_stage=Q.MedicalPending:i.check_in_stage=Q.WeighInPending,i.updated_at_ms=this.now(),this.publishAndSave(),r}recordMedicalDecision(e){const i=this.athletes.get(e.athleteId);if(!i)throw new z(K.InvalidArgument,`Unknown athlete: ${e.athleteId}`);const t=this.needsReinstatement(i);if(!e.reviewerId.trim())throw new z(K.InvalidArgument,"Authorized human medical reviewer ID is required (REQ-MED-01)");const n=e.decision==="CLEARED"||e.decision==="CLEARED_PHYSICIAN_FORM",s={athlete_id:i.athlete_id,reviewer_id:e.reviewerId.trim(),reviewer_role:e.reviewerRole,decision:e.decision,skin_clear:e.decision!=="MEDICAL_HOLD_DISQUALIFIED",grooming_compliant:e.decision!=="GROOMING_HOLD",private_clinical_notes:e.privateClinicalNotes.trim(),recorded_at_ms:this.now()};return this.privateMedicals.set(i.athlete_id,s),i.medically_cleared=n,t||(n&&i.weigh_in_eligible?i.check_in_stage=Q.Eligible:n&&!i.weigh_in_eligible?i.check_in_stage=Q.WeighInPending:!n&&e.decision==="MEDICAL_HOLD_DISQUALIFIED"?i.check_in_stage=Q.Withdrawn:i.check_in_stage=Q.MedicalPending),i.updated_at_ms=this.now(),this.publishAndSave(),s}completeUnifiedCheckIn(e){const i=this.athletes.get(e.athleteId);if(!i)throw new z(K.InvalidArgument,`Unknown athlete: ${e.athleteId}`);const t=e.reassignWeightClassId&&Li.includes(e.reassignWeightClassId)?e.reassignWeightClassId:i.weight_class_id,s=this.privateWeighIns.get(i.athlete_id)?.measured_weight_tenths??Math.max(550,Math.min(3450,Number(t)*10||1320)),a=e.measuredWeightTenths??s,r=this.isSeeding;this.isSeeding=!0;try{this.recordScaleWeighIn({athleteId:i.athlete_id,stationId:(e.stationId??"").trim()||"CHECKIN-1",scaleId:(e.scaleId??"").trim()||"SCALE-1",measuredWeightTenths:a,reassignWeightClassId:e.reassignWeightClassId}),(e.skinDecision!==void 0||!this.privateMedicals.has(i.athlete_id))&&this.recordMedicalDecision({athleteId:i.athlete_id,reviewerId:(e.reviewerId??"").trim()||"Head Official",reviewerRole:e.reviewerRole??"Physician",decision:e.skinDecision??"CLEARED",privateClinicalNotes:e.privateClinicalNotes??""})}finally{this.isSeeding=r}return this.publishAndSave(),this.athletes.get(i.athlete_id)}generateAllBrackets(e=J.DoubleElimCrossover,i){const t=(i??"").trim().toUpperCase(),n=new Set;for(const o of this.athletes.values())if(o.check_in_stage===Q.Eligible&&o.weigh_in_eligible&&o.medically_cleared){const l=(o.division_id||"VARSITY").toUpperCase();if(t&&t!=="ALL"&&l!==t)continue;n.add(`${l}:${o.weight_class_id}`)}const s=Array.from(n).sort((o,l)=>{const[c,d]=o.split(":"),[_,m]=l.split(":");return(c||"").localeCompare(_||"")||Number(d)-Number(m)}),a=[];let r=0;for(const o of s){const[l,c]=o.split(":"),d=this.generateBracketForClass(c,e,l);d.length>0&&(a.push(`${l} ${c} lbs`),r+=d.length)}return a.length>0&&![...this.bouts.values()].some(o=>this.drawLocked(o))&&(this.rebalanceMatsInRunningOrder(),this.publishAndSave()),{generatedClasses:a,totalBouts:r}}purgePrivateClinicalNotes(){let e=0;for(const i of this.privateMedicals.values())i.private_clinical_notes&&(i.private_clinical_notes="[PURGED POST-EVENT PER REQ-PRIV-04]",e++);return this.saveToStorage(),e}isBracketFrozen(e,i){const t=(i??"").trim().toUpperCase();if(t&&t!=="ALL"){const n=this.bracketFrozenByClass.get(`${t}:${e}`);if(n!==void 0)return n;const s=new Set(Array.from(this.athletes.values()).filter(r=>r.weight_class_id===e).map(r=>(r.division_id||"VARSITY").toUpperCase()));if(s.size>1)return!1;const[a]=s;if(a&&this.bracketFrozenByClass.has(`${a}:${e}`))return!1}return this.bracketFrozenByClass.get(e)??!1}frozenSeedDivisions(e){const i=new Set;for(const t of[...this.athletes.values(),...this.bouts.values()])t.weight_class_id===e&&i.add((t.division_id||"VARSITY").toUpperCase());return new Set([...i].filter(t=>this.isBracketFrozen(e,t)))}unfreezeSeeds(e,i){const t=this.frozenSeedDivisions(e),n=i.trim().toUpperCase(),s=[...t].filter(a=>n==="ALL"||n===a);if(!s.length)return!1;for(const a of s)this.bracketFrozenByClass.set(`${a}:${e}`,!1);return s.length===t.size&&this.bracketFrozenByClass.get(e)&&this.bracketFrozenByClass.set(e,!1),this.publishAndSave(),!0}moveSeed(e,i){const t=this.athletes.get(e);if(!t)return;if(this.isBracketFrozen(t.weight_class_id,t.division_id))throw new z(K.InvalidArgument,`Bracket for ${t.division_id} ${t.weight_class_id} lbs is frozen. Unfreeze before reordering seeds.`);const n=Array.from(this.athletes.values()).filter(l=>l.weight_class_id===t.weight_class_id&&l.division_id===t.division_id).sort((l,c)=>l.seed_rank-c.seed_rank||l.athlete_id.localeCompare(c.athlete_id)),s=n.findIndex(l=>l.athlete_id===e),a=s+i;if(s<0||a<0||a>=n.length)return;const r=n[a],o=t.seed_rank;t.seed_rank=r.seed_rank,r.seed_rank=o,t.seed_rank===r.seed_rank&&n.forEach((l,c)=>{l.seed_rank=c+1}),this.publishAndSave()}autoSeparateSameTeamSeeds(e,i){const t=(i??"").trim().toUpperCase(),n=Array.from(this.athletes.values()).filter(s=>s.weight_class_id===e&&(!t||t==="ALL"||s.division_id.toUpperCase()===t)&&s.check_in_stage===Q.Eligible&&s.weigh_in_eligible&&s.medically_cleared).sort((s,a)=>s.seed_rank-a.seed_rank);for(let s=0;s<n.length-1;s++){const a=n[s],r=n[s+1];if(a.team_id===r.team_id&&s+2<n.length){const o=n[s+2],l=r.seed_rank;r.seed_rank=o.seed_rank,o.seed_rank=l}}n.sort((s,a)=>s.seed_rank-a.seed_rank).forEach((s,a)=>{s.seed_rank=a+1}),this.publishAndSave()}drawLocked(e){return!e.is_bye&&(e.lifecycle>=E.Ready||e.clock_running||e.red_score>0||e.green_score>0||e.completed_at_ms>0)}assertDrawNotStarted(){if([...this.bouts.values()].some(e=>this.drawLocked(e)))throw new Error("Bout numbers are locked. Finish the tournament before you replace its brackets.")}unfreezeBracket(e,i){const t=(i??"").trim().toUpperCase(),n=new Set(Array.from(this.athletes.values()).filter(a=>a.weight_class_id===e).map(a=>(a.division_id||"VARSITY").toUpperCase())),s=t&&t!=="ALL"?t:n.size===1?Array.from(n)[0]:"";for(const a of this.bouts.values()){const r=(a.division_id||"VARSITY").toUpperCase();if(a.weight_class_id===e&&(!s||r===s)&&this.drawLocked(a))throw new Error(`Bout ${a.bout_number} locks this bracket. You cannot clear it.`)}for(const[a,r]of this.bouts.entries()){const o=(r.division_id||"VARSITY").toUpperCase();r.weight_class_id===e&&(!s||o===s)&&(this.bouts.delete(a),this.deletedMatchIds.add(a),this.clearedRestMatchIds.delete(a))}if(s)this.bracketFrozenByClass.set(`${s}:${e}`,!1);else for(const a of this.bracketFrozenByClass.keys())a.endsWith(`:${e}`)&&this.bracketFrozenByClass.set(a,!1);this.bracketFrozenByClass.get(e)&&!this.frozenSeedDivisions(e).size&&this.bracketFrozenByClass.set(e,!1),[...this.bouts.values()].some(a=>this.drawLocked(a))||this.numberBoutsInRunningOrder(),this.publishAndSave()}numberBoutsInRunningOrder(){const e=[...this.bouts.values()].sort((t,n)=>t.round_index-n.round_index||Number(t.weight_class_id)-Number(n.weight_class_id)||(t.division_id||"").localeCompare(n.division_id||"")||Number(t.is_consolation)-Number(n.is_consolation)||t.bout_number-n.bout_number||t.match_id.localeCompare(n.match_id)),i=new Map;e.forEach((t,n)=>{t.bout_number=101+n;const s=(i.get(t.assigned_mat_id)||0)+1;i.set(t.assigned_mat_id,s),t.mat_queue_order=s}),this.bouts=new Map(e.map(t=>[t.match_id,t])),this.nextBoutNumber=101+e.length}rebalanceMatsInRunningOrder(){const e=[...this.bouts.values()].sort((n,s)=>n.round_index-s.round_index||Number(n.weight_class_id)-Number(s.weight_class_id)||(n.division_id||"").localeCompare(s.division_id||"")||Number(n.is_consolation)-Number(s.is_consolation)||n.bout_number-s.bout_number||n.match_id.localeCompare(s.match_id)),i=new Map;let t=0;e.forEach((n,s)=>{if(n.bout_number=101+s,!n.is_bye){const r=t%this.matCount+1;t+=1,n.assigned_mat_id=r,n.delegated_android_device_id=this.mats.get(r)?.android_device_id||`mat-${r}-scorekeeper`}const a=(i.get(n.assigned_mat_id)||0)+1;i.set(n.assigned_mat_id,a),n.mat_queue_order=a}),this.bouts=new Map(e.map(n=>[n.match_id,n])),this.nextBoutNumber=101+e.length}static recommendBracketFormatForCount(e,i=J.DoubleElimCrossover){return e===2?J.BestOfThree:e>=1&&e<=5?J.RoundRobinPool:i===J.TrueSecondChallenge?J.TrueSecondChallenge:i===J.RoundRobinPool?J.RoundRobinPool:J.DoubleElimCrossover}generateBracketForClass(e,i=J.AutoByCount,t){const n=(t??"").trim().toUpperCase(),s=new Set(Array.from(this.athletes.values()).filter(u=>u.weight_class_id===e&&u.check_in_stage===Q.Eligible&&u.weigh_in_eligible&&u.medically_cleared).map(u=>(u.division_id||"VARSITY").toUpperCase()));if((!n||n==="ALL")&&s.size>1)throw new z(K.InvalidArgument,`Multiple divisions (${Array.from(s).join(", ")}) share weight class ${e}; specify divisionId.`);const a=n&&n!=="ALL"?n:s.size===1?Array.from(s)[0]:"VARSITY";for(const u of this.bouts.values()){const f=(u.division_id||"VARSITY").toUpperCase();if(u.weight_class_id===e&&f===a&&this.drawLocked(u))throw new Error("Bout numbers are locked. Finish the tournament before you replace its brackets.")}const r=new Set(Array.from(this.athletes.values()).filter(u=>u.weight_class_id===e).map(u=>(u.division_id||"VARSITY").toUpperCase())).size>1,l=r||!!n&&n!=="ALL"&&n!=="VARSITY"?`${a}-${e}`:e,c=Array.from(this.athletes.values()).filter(u=>u.weight_class_id===e&&(u.division_id||"VARSITY").toUpperCase()===a&&u.check_in_stage===Q.Eligible&&u.weigh_in_eligible&&u.medically_cleared).sort((u,f)=>u.seed_rank-f.seed_rank||u.athlete_id.localeCompare(f.athlete_id));if(c.length>64)throw new z(K.BoundsExceeded,`Active entrants (${c.length}) exceed 64-athlete bracket capacity.`);for(const[u,f]of this.bouts.entries()){const p=(f.division_id||"VARSITY").toUpperCase();f.weight_class_id===e&&p===a&&(this.bouts.delete(u),this.deletedMatchIds.add(u))}if(c.length===0)return[];c.forEach((u,f)=>{u.seed_rank=f+1});let d=i;c.length===1?d=J.RoundRobinPool:c.length===2?d=i===J.RoundRobinPool?J.RoundRobinPool:J.BestOfThree:c.length>=3&&c.length<=5?d=J.RoundRobinPool:(i===J.AutoByCount||i===J.BestOfThree)&&(d=J.DoubleElimCrossover);const _=[],m=`BRK-${l}-${d}`;if(c.length===1){const u=c[0],f=`BOUT-${l}-WALKOVER-1ST`,p={match_id:f,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:1,round_label:"Uncontested 1st Place (Walkover)",is_consolation:!1,is_placement_bout:!0,is_true_second_challenge:!1,placement_rank:1,red_athlete_id:u.athlete_id,green_athlete_id:"",is_bye:!0,winner_next_match_id:"",loser_next_match_id:"",lifecycle:E.ResultAccepted,assigned_mat_id:1,mat_queue_order:1,assignment_revision:1,authority_epoch:1,delegated_android_device_id:"mat-1-scorekeeper",red_score:0,green_score:0,period_number:1,clock_remaining_ms:0,clock_running:!1,winner_athlete_id:u.athlete_id,loser_athlete_id:"",win_type:"BYE",completed_at_ms:this.now()};this.bouts.set(f,p),_.push(p)}else if(d===J.BestOfThree){const u=c[0],f=c[1],p=`BOUT-${l}-BO3-1`,b=`BOUT-${l}-BO3-2`,g=`BOUT-${l}-BO3-3`;[{matchId:p,roundIndex:1,roundLabel:"Best of 3 — Match 1",redId:u.athlete_id,greenId:f.athlete_id,nextId:b,lifecycle:E.Assigned,isPlacement:!1,placementRank:0},{matchId:b,roundIndex:2,roundLabel:"Best of 3 — Match 2",redId:f.athlete_id,greenId:u.athlete_id,nextId:g,lifecycle:E.PendingUpstream,isPlacement:!1,placementRank:0},{matchId:g,roundIndex:3,roundLabel:"Best of 3 — Match 3 (If Necessary)",redId:u.athlete_id,greenId:f.athlete_id,nextId:"",lifecycle:E.PendingUpstream,isPlacement:!0,placementRank:1}].forEach((I,R)=>{const M=R%this.matCount+1,L={match_id:I.matchId,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:I.roundIndex,round_label:I.roundLabel,is_consolation:!1,is_placement_bout:I.isPlacement,is_true_second_challenge:!1,placement_rank:I.placementRank,red_athlete_id:I.redId,green_athlete_id:I.greenId,is_bye:!1,winner_next_match_id:I.nextId,loser_next_match_id:I.nextId,lifecycle:I.lifecycle,assigned_mat_id:M,mat_queue_order:R+1,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${M}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(I.matchId,L),_.push(L)})}else if(d===J.RoundRobinPool){const u=[...c];u.length%2&&u.push(void 0);for(let f=1;f<u.length;f++){for(let p=0;p<u.length/2;p++){const b=u[p],g=u[u.length-1-p];if(!b||!g)continue;const k=this.nextBoutNumber++,I=`BOUT-${l}-RR${_.length+1}`,R={match_id:I,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:k,round_index:f,round_label:`Pool Round ${f}`,is_consolation:!1,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:b.athlete_id,green_athlete_id:g.athlete_id,is_bye:!1,winner_next_match_id:"",loser_next_match_id:"",lifecycle:E.Assigned,assigned_mat_id:_.length%this.matCount+1,mat_queue_order:_.length+1,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${_.length%this.matCount+1}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(I,R),_.push(R)}u.splice(1,0,u.pop())}}else if(c.length<=8){const u=[[0,7],[3,4],[1,6],[2,5]],f=["QF1","QF2","QF3","QF4"].map(O=>`BOUT-${l}-${O}`),p=["SF1","SF2"].map(O=>`BOUT-${l}-${O}`),b=["C1-1","C1-2"].map(O=>`BOUT-${l}-${O}`),g=["C2-1","C2-2"].map(O=>`BOUT-${l}-${O}`),k=`BOUT-${l}-FINAL-1ST`,I=`BOUT-${l}-FINAL-3RD`,R=`BOUT-${l}-TRUE-2ND`;u.forEach(([O,w],x)=>{const S=c[O]?.athlete_id??"",D=c[w]?.athlete_id??"",F=!S||!D,N=f[x],V=x<2?p[0]:p[1],W=x<2?b[0]:b[1],B={match_id:N,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:1,round_label:"Championship Quarterfinal",is_consolation:!1,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:S,green_athlete_id:D,is_bye:F,winner_next_match_id:V,loser_next_match_id:W,lifecycle:F?E.ResultAccepted:E.Assigned,assigned_mat_id:x%this.matCount+1,mat_queue_order:x+1,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${x%this.matCount+1}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:F?S:"",loser_athlete_id:"",win_type:F?"BYE":"",completed_at_ms:F?this.now():0};this.bouts.set(N,B),_.push(B)});let M=4;b.forEach((O,w)=>{const x=M++%this.matCount+1,S={match_id:O,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:2,round_label:"Consolation Round 1",is_consolation:!0,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:g[w],loser_next_match_id:"",lifecycle:E.PendingUpstream,assigned_mat_id:x,mat_queue_order:10+w,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${x}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(O,S),_.push(S)}),p.forEach((O,w)=>{const x=w===0?g[1]:g[0],S=M++%this.matCount+1,D={match_id:O,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:2,round_label:"Championship Semifinal",is_consolation:!1,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:k,loser_next_match_id:x,lifecycle:E.PendingUpstream,assigned_mat_id:S,mat_queue_order:12+w,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${S}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(O,D),_.push(D)}),g.forEach((O,w)=>{const x=M++%this.matCount+1,S={match_id:O,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:3,round_label:"Consolation Semifinal (Crossover)",is_consolation:!0,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:I,loser_next_match_id:"",lifecycle:E.PendingUpstream,assigned_mat_id:x,mat_queue_order:15+w,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${x}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(O,S),_.push(S)});const L=M++%this.matCount+1,y={match_id:I,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:4,round_label:"3rd Place Match",is_consolation:!0,is_placement_bout:!0,is_true_second_challenge:!1,placement_rank:3,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:d===J.TrueSecondChallenge?R:"",loser_next_match_id:"",lifecycle:E.PendingUpstream,assigned_mat_id:L,mat_queue_order:20,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${L}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(I,y),_.push(y);const C=M++%this.matCount+1,P={match_id:k,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:4,round_label:"1st Place Championship Final",is_consolation:!1,is_placement_bout:!0,is_true_second_challenge:!1,placement_rank:1,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:"",loser_next_match_id:d===J.TrueSecondChallenge?R:"",lifecycle:E.PendingUpstream,assigned_mat_id:C,mat_queue_order:21,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${C}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};if(this.bouts.set(k,P),_.push(P),d===J.TrueSecondChallenge){const O={match_id:R,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:5,round_label:"True Second Challenge Match",is_consolation:!0,is_placement_bout:!0,is_true_second_challenge:!0,placement_rank:2,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:"",loser_next_match_id:"",lifecycle:E.PendingUpstream,assigned_mat_id:1,mat_queue_order:22,assignment_revision:1,authority_epoch:1,delegated_android_device_id:"mat-1-scorekeeper",red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(R,O),_.push(O)}for(const O of _)O.is_bye&&O.winner_athlete_id&&O.winner_next_match_id&&this.advanceParticipantToDownstream(O.winner_next_match_id,O.winner_athlete_id);this.resolveCompletedByesForBracket(m)}else{const u=c.length<=16?16:c.length<=32?32:64,f=Math.log2(u),p=S=>`BOUT-${l}-${S}`;let b=1;const g=(S,D,F,N,V=!1,W=0,B=!1)=>{const U=(b-1)%this.matCount+1,$={match_id:S,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:D,round_label:F,is_consolation:N,is_placement_bout:V,is_true_second_challenge:B,placement_rank:W,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:"",loser_next_match_id:"",lifecycle:E.PendingUpstream,assigned_mat_id:U,mat_queue_order:b++,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${U}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};return this.bouts.set(S,$),_.push($),$},k=Array.from({length:f+1},()=>[]);for(let S=1;S<=f;S++){const D=u>>S,F=S===f?"1st Place Championship Final":D===2?"Championship Semifinal":D===4?"Championship Quarterfinal":`Championship Round of ${D*2}`;for(let N=0;N<D;N++){const V=p(S===f?"FINAL-1ST":`C${S}-${N+1}`);k[S].push(V),g(V,S,F,!1,S===f,S===f?1:0)}}for(let S=1;S<f;S++){const D=k[S];for(let F=0;F<D.length;F++){const N=this.bouts.get(D[F]);N.winner_next_match_id=k[S+1][Math.floor(F/2)]}}const I=p("FINAL-3RD"),R=p("P5"),M=p("P7"),L=p("TRUE-2ND");let y=1,C=[];for(let S=0;S<u/4;S++){const D=p(`L${y}-${S+1}`);C.push(D),g(D,y+1,`Consolation Round ${y}`,!0);const F=this.bouts.get(k[1][2*S]),N=this.bouts.get(k[1][2*S+1]);F.loser_next_match_id=D,N.loser_next_match_id=D}for(let S=2;S<f;S++){const D=k[S].length;y+=1;const F=[];for(let N=0;N<D;N++){const V=p(`L${y}-${N+1}`);F.push(V);const W=S===f-1?"Consolation Semifinal (Crossover)":`Consolation Round ${y} (Crossover)`;g(V,S+y,W,!0);const B=this.bouts.get(C[N]);B.winner_next_match_id=V;const U=S%2===0?D-1-N:N^Math.floor(D/2),$=this.bouts.get(k[S][U]);$.loser_next_match_id=V}if(S<f-1){y+=1;const N=D/2,V=[];for(let W=0;W<N;W++){const B=p(`L${y}-${W+1}`);V.push(B);const U=N===2?"Consolation Quarterfinal":`Consolation Round ${y}`,$=g(B,S+y,U,!0),j=this.bouts.get(F[2*W]),A=this.bouts.get(F[2*W+1]);j.winner_next_match_id=B,A.winner_next_match_id=B,N===2&&($.loser_next_match_id=M)}C=V}else{for(let N=0;N<2;N++){const V=this.bouts.get(F[N]);V.winner_next_match_id=I,V.loser_next_match_id=R}C=F}}const P=f+y+1;this.bouts.get(k[f][0]).round_index=P;const O=g(I,P,"3rd Place Match",!0,!0,3);if(g(R,P,"5th Place Match",!0,!0,5),g(M,P,"7th Place Match",!0,!0,7),d===J.TrueSecondChallenge){g(L,P+1,"True Second Challenge Match",!0,!0,2,!0);const S=this.bouts.get(k[f][0]);S.loser_next_match_id=L,O.winner_next_match_id=L}const w=se.buildStandardTopSeeds(u),x=this.now();for(let S=0;S<u/2;S++){const D=w[S],F=u+1-D,N=this.bouts.get(k[1][S]),V=D>=1&&D<=c.length?c[D-1].athlete_id:"",W=F>=1&&F<=c.length?c[F-1].athlete_id:"";if(V&&W)N.red_athlete_id=V,N.green_athlete_id=W,N.is_bye=!1,N.lifecycle=E.Assigned;else if(V||W){const B=V||W;N.red_athlete_id=B,N.green_athlete_id="",N.is_bye=!0,N.lifecycle=E.ResultAccepted,N.winner_athlete_id=B,N.loser_athlete_id="",N.win_type="BYE",N.completed_at_ms=x}else N.red_athlete_id="",N.green_athlete_id="",N.is_bye=!0,N.lifecycle=E.ResultAccepted,N.winner_athlete_id="",N.loser_athlete_id="",N.win_type="BYE",N.completed_at_ms=x}for(const S of _)S.is_bye&&S.winner_athlete_id&&S.winner_next_match_id&&this.advanceParticipantToDownstream(S.winner_next_match_id,S.winner_athlete_id);this.resolveCompletedByesForBracket(m,x)}for(const u of _)this.deletedMatchIds.delete(u.match_id);if(![...this.bouts.values()].some(u=>this.drawLocked(u)))this.numberBoutsInRunningOrder();else{let u=1+Math.max(100,...[...this.bouts.values()].filter(p=>!_.includes(p)).map(p=>p.bout_number||100));[..._].sort((p,b)=>p.round_index-b.round_index||Number(p.is_consolation)-Number(b.is_consolation)||p.bout_number-b.bout_number).forEach((p,b)=>{if(p.bout_number=u++,!p.is_bye){const g=b%this.matCount+1;p.assigned_mat_id=g,p.delegated_android_device_id=this.mats.get(g)?.android_device_id||`mat-${g}-scorekeeper`;const k=Math.max(0,...[...this.bouts.values()].filter(I=>I!==p&&I.assigned_mat_id===g).map(I=>I.mat_queue_order||0));p.mat_queue_order=k+1}}),this.nextBoutNumber=u}return this.bracketFrozenByClass.set(`${a}:${e}`,!0),r||this.bracketFrozenByClass.set(e,!0),this.publishAndSave(),_}static buildStandardTopSeeds(e){let i=[1],t=1;for(;t*2<=e/2;){const n=t*2,s=[];for(let a=0;a<i.length;a++){const r=i[a],o=n+1-r;a%2===0?s.push(r,o):s.push(o,r)}i=s,t=n}return i}advanceCompetitionDay(e=this.now()){for(const i of this.athletes.values())i.prior_day_matches=i.matches_wrestled_today,i.matches_wrestled_today=0,i.last_bout_ended_ms=0,i.updated_at_ms=e;this.publishAndSave()}reconcileBestOfThreeBracket(e,i=this.now()){const t=Array.from(this.bouts.values()).filter(l=>l.bracket_id===e&&l.format===J.BestOfThree).sort((l,c)=>l.round_index-c.round_index);if(t.length<3)return;const[n,s,a]=t,r=n.red_athlete_id,o=n.green_athlete_id;if(!(!r||!o)){if(s.red_athlete_id=o,s.green_athlete_id=r,a.red_athlete_id=r,a.green_athlete_id=o,!re(n)){s.lifecycle===E.Assigned&&(s.lifecycle=E.PendingUpstream),s.is_placement_bout=!1,s.placement_rank=0,a.is_bye=!1,a.lifecycle=E.PendingUpstream,a.is_placement_bout=!0,a.placement_rank=1,a.winner_athlete_id="",a.loser_athlete_id="",a.win_type="",a.completed_at_ms=0;return}if(!re(s)){s.lifecycle===E.PendingUpstream&&(s.lifecycle=E.Assigned),s.is_placement_bout=!1,s.placement_rank=0,a.is_bye=!1,a.lifecycle=E.PendingUpstream,a.is_placement_bout=!0,a.placement_rank=1,a.winner_athlete_id="",a.loser_athlete_id="",a.win_type="",a.completed_at_ms=0;return}n.winner_athlete_id===s.winner_athlete_id?(s.is_placement_bout=!!s.winner_athlete_id,s.placement_rank=s.is_placement_bout?1:0,a.is_placement_bout=!1,a.placement_rank=0,a.is_bye=!0,a.lifecycle=E.ResultAccepted,a.winner_athlete_id=s.winner_athlete_id,a.loser_athlete_id=s.loser_athlete_id,a.win_type="BYE",a.completed_at_ms=s.completed_at_ms||i):(s.is_placement_bout=!1,s.placement_rank=0,a.is_placement_bout=!0,a.placement_rank=1,(a.is_bye&&a.winner_athlete_id||a.lifecycle===E.PendingUpstream)&&(a.is_bye=!1,a.lifecycle=E.Assigned,a.winner_athlete_id="",a.loser_athlete_id="",a.win_type="",a.completed_at_ms=0))}}resolveCompletedByesForBracket(e,i=this.now()){this.reconcileBestOfThreeBracket(e,i);let t=!0;for(;t;){t=!1;const n=Array.from(this.bouts.values()).filter(s=>s.bracket_id===e);for(const s of n){if(s.format===J.BestOfThree)continue;if(s.is_true_second_challenge&&s.lifecycle<E.InProgress&&s.red_athlete_id&&s.green_athlete_id&&n.some(o=>!o.is_true_second_challenge&&!o.is_bye&&re(o)&&(o.red_athlete_id===s.red_athlete_id&&o.green_athlete_id===s.green_athlete_id||o.red_athlete_id===s.green_athlete_id&&o.green_athlete_id===s.red_athlete_id))){const l=n.find(d=>!d.is_true_second_challenge&&d.is_placement_bout&&d.placement_rank===1)?.loser_athlete_id||s.red_athlete_id,c=l===s.red_athlete_id?s.green_athlete_id:s.red_athlete_id;s.red_athlete_id=l,s.green_athlete_id=c,s.is_bye=!0,s.lifecycle=E.ResultAccepted,s.winner_athlete_id=l,s.loser_athlete_id=c,s.win_type="DEC",s.completed_at_ms=i,t=!0;continue}if(s.lifecycle!==E.PendingUpstream)continue;const a=n.filter(r=>r.winner_next_match_id===s.match_id||r.loser_next_match_id===s.match_id);if(!(a.length===0||!a.every(r=>re(r))))if(s.red_athlete_id&&s.green_athlete_id)s.lifecycle=E.Assigned,t=!0;else if(s.red_athlete_id||s.green_athlete_id){const r=s.red_athlete_id||s.green_athlete_id,o=this.isWithdrawn(r)?"":r;s.red_athlete_id=o,s.green_athlete_id="",s.is_bye=!0,s.lifecycle=E.ResultAccepted,s.winner_athlete_id=o,s.loser_athlete_id="",s.win_type="BYE",s.completed_at_ms=i,o||this.rememberScratchResult(r,s),s.winner_next_match_id&&this.advanceParticipantToDownstream(s.winner_next_match_id,o,s.match_id),t=!0}else s.is_bye=!0,s.lifecycle=E.ResultAccepted,s.winner_athlete_id="",s.loser_athlete_id="",s.win_type="BYE",s.completed_at_ms=i,t=!0}}}advanceParticipantToDownstream(e,i,t){const n=this.bouts.get(e);if(!n||!i||n.format===J.BestOfThree)return;if(n.red_athlete_id===i||n.green_athlete_id===i){n.red_athlete_id&&n.green_athlete_id&&n.lifecycle===E.PendingUpstream&&(n.lifecycle=E.Assigned);return}let s=!1;if(t){const a=Array.from(this.bouts.values()).filter(r=>!r.is_bye&&(r.winner_next_match_id===e||r.loser_next_match_id===e)).sort((r,o)=>r.bout_number-o.bout_number||r.match_id.localeCompare(o.match_id));a.length===2&&a[1]?.match_id===t&&(s=!0)}s&&!n.green_athlete_id?n.green_athlete_id=i:n.red_athlete_id?!n.green_athlete_id&&n.red_athlete_id!==i&&(n.green_athlete_id=i):n.red_athlete_id=i,n.red_athlete_id&&n.green_athlete_id&&n.lifecycle===E.PendingUpstream&&(n.lifecycle=E.Assigned)}revertProvisionalDownstreamAdvancement(e,i=this.now()){const t=this.bouts.get(e);if(!t)return;const n=this.previewCorrectionImpact(e),s=new Set;for(const a of n.affected_downstream_matches){const r=this.bouts.get(a);r&&(r.lifecycle<E.InProgress||r.lifecycle===E.ResultAccepted&&r.is_bye)&&(Object.assign(r,{red_athlete_id:"",green_athlete_id:"",winner_athlete_id:"",loser_athlete_id:"",is_bye:!1,lifecycle:E.PendingUpstream,red_score:0,green_score:0,win_type:"",completed_at_ms:0,period_number:1,clock_running:!1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms}),s.add(a))}s.size===0&&t.format!==J.BestOfThree||(this.refillDownstreamBouts(s),this.resolveCompletedByesForBracket(t.bracket_id,i))}refillDownstreamBouts(e){for(const i of[...this.bouts.values()].sort((t,n)=>t.bout_number-n.bout_number))re(i)&&(i.winner_next_match_id&&e.has(i.winner_next_match_id)&&this.advanceParticipantToDownstream(i.winner_next_match_id,i.winner_athlete_id,i.match_id),i.loser_next_match_id&&e.has(i.loser_next_match_id)&&i.loser_athlete_id&&!this.isWithdrawn(i.loser_athlete_id)&&i.win_type!=="DQ"&&i.win_type!=="MEDICAL_FORFEIT"&&this.advanceParticipantToDownstream(i.loser_next_match_id,i.loser_athlete_id,i.match_id))}assignBoutToMat(e,i,t,n=this.now()){const s=this.bouts.get(e);if(!s)throw new z(K.InvalidArgument,`Unknown bout: ${e}`);const a=this.mats.get(i);if(!a)throw new z(K.InvalidArgument,`Unknown Mat ${i}`);if(s.lifecycle!==E.Assigned&&s.lifecycle!==E.Ready)throw new z(K.InvalidArgument,"Only unstarted bouts may be queued or moved");if(!s.red_athlete_id||!s.green_athlete_id)throw new z(K.InvalidArgument,`Bout #${s.bout_number} does not have both participants determined yet.`);const r=s.assigned_mat_id,o=this.matQueue(i).filter(d=>d!==s&&d.lifecycle<=E.InProgress),l=o[0]?.lifecycle===E.InProgress;t==="READY"&&!l&&this.validateBoutSafetyGates(s,n);let c=l?1:0;if(t==="ON_DECK"&&!l){const d=o.findIndex(_=>this.isBoutReadyEligible(_,n));if(d<0&&r===i&&s.lifecycle===E.Ready&&this.isBoutReadyEligible(s,n))throw new Error(`Queue another eligible bout on Mat ${i} before holding Bout ${s.bout_number}`);d>=0&&(o.unshift(...o.splice(d,1)),c=1)}else(t==="IN_THE_HOLE"||t==="IN_HOLE")&&(c=2);return s.assigned_mat_id=i,s.delegated_android_device_id=a.android_device_id,s.authority_epoch=a.authority_epoch,r>0&&r!==i&&(s.assignment_revision+=1),s.lifecycle=E.Assigned,o.splice(c,0,s),o.forEach((d,_)=>{d.mat_queue_order=_+1}),this.promoteMatReadyBout(i,n),r>0&&r!==i&&(this.matQueue(r).filter(d=>d.lifecycle<=E.InProgress).forEach((d,_)=>{d.mat_queue_order=_+1}),this.promoteMatReadyBout(r,n)),this.publishAndSave(),s}isBoutCapBlocked(e){for(const i of[e.red_athlete_id,e.green_athlete_id]){const t=this.athletes.get(i);if(t&&(t.matches_wrestled_today>=this.dailyMatchCap||t.prior_day_matches+t.matches_wrestled_today>=this.consecutiveTwoDayCap))return!0}return!1}validateBoutSafetyGates(e,i=this.now()){const t=!!e.rest_lock_cleared_by_official||this.clearedRestMatchIds.has(e.match_id);for(const a of[e.red_athlete_id,e.green_athlete_id]){const r=this.athletes.get(a);if(r){if(!r.weigh_in_eligible||!r.medically_cleared||this.isWithdrawn(a))throw new z(K.InvalidArgument,`SAFETY LOCK: ${r.public_display_name} has not completed Weigh-In and Medical clearance.`);if(r.matches_wrestled_today>=this.dailyMatchCap)throw new z(K.InvalidArgument,`NFHS DAILY CAP LOCK (REQ-SCH-04): ${r.public_display_name} has already wrestled ${r.matches_wrestled_today}/${this.dailyMatchCap} matches today.`);if(r.prior_day_matches+r.matches_wrestled_today>=this.consecutiveTwoDayCap)throw new z(K.InvalidArgument,`NFHS TWO-DAY CAP LOCK (REQ-SCH-04): ${r.public_display_name} has reached the 10-match consecutive two-day limit.`);if(!t&&r.last_bout_ended_ms>0){const o=i-r.last_bout_ended_ms;if(o<this.requiredRestMs){const l=Math.ceil((this.requiredRestMs-o)/6e4);throw new z(K.InvalidArgument,`NFHS 30-MIN REST LOCK (REQ-SCH-03): ${r.public_display_name} requires ${l} more minute(s) of mandatory recovery before starting.`)}}}}const n=[...this.bouts.values()].filter(a=>!a.is_bye&&!(a.lifecycle===E.ResultAccepted||re(a))&&!this.isBoutCapBlocked(a)).map(a=>a.round_index),s=n.length>0?Math.min(...n):e.round_index;if(e.round_index>s)throw new Error(`ROUND ORDER LOCK: Complete round ${s} across all weight classes before starting round ${e.round_index}.`)}clearAthleteRestWindowForTesting(e){const i=this.athletes.get(e);i&&(i.last_bout_ended_ms=this.now()-2100*1e3,this.publishAndSave())}getAthleteRestStatus(e,i=this.now()){const t=this.athletes.get(e);if(!t||t.last_bout_ended_ms<=0)return{restLocked:!1,remainingMs:0,remainingMinutes:0,lastBoutEndedMs:0,readyAtMs:0};const n=i-t.last_bout_ended_ms,s=t.last_bout_ended_ms+this.requiredRestMs;if(n>=this.requiredRestMs)return{restLocked:!1,remainingMs:0,remainingMinutes:0,lastBoutEndedMs:t.last_bout_ended_ms,readyAtMs:s};const a=this.requiredRestMs-n;return{restLocked:!0,remainingMs:a,remainingMinutes:Math.ceil(a/6e4),lastBoutEndedMs:t.last_bout_ended_ms,readyAtMs:s}}clearBoutRestLock(e){const i=this.bouts.get(e);if(!i)return;this.clearedRestMatchIds.add(e),i.rest_lock_cleared_by_official=!0;const t=this.now();for(const n of[i.red_athlete_id,i.green_athlete_id]){if(!n)continue;const s=this.athletes.get(n);s&&(s.last_bout_ended_ms=0,s.updated_at_ms=t)}i.assigned_mat_id>0&&this.promoteMatReadyBout(i.assigned_mat_id,t),this.publishAndSave()}getBoutRestStatus(e,i=this.now()){const t=this.bouts.get(e);if(!t||t.rest_lock_cleared_by_official||this.clearedRestMatchIds.has(e))return{restLocked:!1,remainingMs:0,remainingMinutes:0,readyAtMs:0,restingAthleteNames:[],restingAthletes:[]};const n=[];let s=0,a=0;for(const r of[t.red_athlete_id,t.green_athlete_id]){if(!r)continue;const o=this.getAthleteRestStatus(r,i);if(o.restLocked){const l=this.athletes.get(r);n.push({athleteId:r,name:l?.public_display_name??r,remainingMs:o.remainingMs,remainingMinutes:o.remainingMinutes}),o.remainingMs>s&&(s=o.remainingMs),o.readyAtMs>a&&(a=o.readyAtMs)}}return{restLocked:n.length>0,remainingMs:s,remainingMinutes:Math.ceil(s/6e4),readyAtMs:a,restingAthleteNames:n.map(r=>r.name),restingAthletes:n}}dispatchNextAvailableBoutsToMats(e=this.now()){this.advanceScratches(e)&&this.publishAndSave();const i=Array.from(this.bouts.values()).filter(l=>!l.is_bye&&!(l.lifecycle===E.ResultAccepted||re(l))&&!this.isBoutCapBlocked(l));if(i.length===0)return{stagedBouts:[],restingBouts:[]};const t=Math.min(...i.map(l=>l.round_index)),n=new Set,s=new Set;for(const l of i)(l.lifecycle===E.Ready||l.lifecycle===E.InProgress)&&(s.add(l.assigned_mat_id),l.red_athlete_id&&n.add(l.red_athlete_id),l.green_athlete_id&&n.add(l.green_athlete_id));const a=i.filter(l=>l.round_index===t&&l.lifecycle===E.Assigned&&!!(l.red_athlete_id&&l.green_athlete_id)).sort(St),r=[],o=[];for(const l of a){if(n.has(l.red_athlete_id)||n.has(l.green_athlete_id))continue;const c=this.getBoutRestStatus(l.match_id,e);if(c.restLocked){o.push({bout:l,remainingMinutes:c.remainingMinutes,restingNames:c.restingAthletes.map(_=>_.name)});continue}let d=!s.has(l.assigned_mat_id)&&this.mats.has(l.assigned_mat_id)?l.assigned_mat_id:0;if(!d){for(const _ of this.mats.keys())if(!s.has(_)){d=_;break}}if(d)try{const _=this.assignBoutToMat(l.match_id,d,"READY",e);r.push(_),s.add(d),n.add(l.red_athlete_id),n.add(l.green_athlete_id)}catch{}}return{stagedBouts:r,restingBouts:o}}validateConfirmedResult(e,i,t,n,s){if(!i||![e.red_athlete_id,e.green_athlete_id].includes(i)||!["FALL","TF","MD","DEC","FORFEIT","MEDICAL_FORFEIT","INJURY_DEFAULT","DQ"].includes(t)||!Number.isSafeInteger(n)||n<0||n>1e3||!Number.isSafeInteger(s)||s<0||s>1e3)throw new Error("Invalid confirmed result");if(["DEC","MD","TF"].includes(t)&&(i===e.red_athlete_id?n<s:s<n))throw new Error("Confirmed winner contradicts the score")}recordMatsideConfirmedResult(e,i,t,n,s,a=1,r=this.now()){const o=this.bouts.get(e);if(!o)throw new z(K.InvalidArgument,`Unknown bout: ${e}`);if(a<o.authority_epoch)throw new z(K.EpochFencedOldEvent,`Rejected Android matside result from stale authority_epoch ${a} < ${o.authority_epoch}`);if(this.validateConfirmedResult(o,i,t,n,s),o.lifecycle===E.ResultAccepted){if(o.winner_athlete_id===i&&o.win_type===t&&o.red_score===n&&o.green_score===s)return o;throw new Error("Accepted results require the correction workflow")}this.acceptBoutResult(o,i,t,n,s,r),this.advanceScratches(r);for(let l=1;l<=this.matCount;l++)this.promoteMatReadyBout(l,r);return this.publishAndSave(),o}isWithdrawn(e){const i=this.athletes.get(e)?.check_in_stage;return i===Q.Withdrawn||i===Q.Scratched}scheduledBoutsForAthlete(e){return[...this.bouts.values()].filter(i=>!i.is_bye&&i.lifecycle!==E.ResultAccepted&&(i.red_athlete_id===e||i.green_athlete_id===e))}isUnstartedBout(e){return e.lifecycle<=E.Ready&&!e.clock_running&&!e.red_score&&!e.green_score&&!e.completed_at_ms&&!e.winner_athlete_id&&e.period_number===1&&e.clock_remaining_ms===this.rulesBundle.period_1_duration_ms}rememberScratchResult(e,i){const t=this.scratches.get(e)??{priorForfeits:[],results:[]};t.results.push({...i}),this.scratches.set(e,t)}advanceScratches(e){let i=!1;for(;;){const t=[...this.bouts.values()].find(a=>!a.is_bye&&this.isUnstartedBout(a)&&(a.lifecycle===E.Assigned||a.lifecycle===E.Ready)&&a.red_athlete_id&&a.green_athlete_id&&(this.isWithdrawn(a.red_athlete_id)||this.isWithdrawn(a.green_athlete_id)));if(!t)return i;const n=this.isWithdrawn(t.red_athlete_id),s=this.isWithdrawn(t.green_athlete_id);n&&s&&(t.is_bye=!0),t.assignment_revision++,this.acceptBoutResult(t,n&&s?"":n?t.green_athlete_id:t.red_athlete_id,t.is_bye?"BYE":"FORFEIT",0,0,e),n&&this.rememberScratchResult(t.red_athlete_id,t),s&&this.rememberScratchResult(t.green_athlete_id,t),i=!0}}acceptBoutResult(e,i,t,n,s,a){const r=i?i===e.red_athlete_id?e.green_athlete_id:e.red_athlete_id:"";e.red_score=n,e.green_score=s,e.winner_athlete_id=i,e.loser_athlete_id=r,e.win_type=t,e.clock_running=!1,e.clock_remaining_ms=t==="FALL"?e.clock_remaining_ms:0,e.completed_at_ms=a,e.lifecycle=E.ResultAccepted,this.clearedRestMatchIds.delete(e.match_id),delete e.rest_lock_cleared_by_official;for(const o of[e.red_athlete_id,e.green_athlete_id]){const l=this.athletes.get(o);l&&t!=="FORFEIT"&&t!=="MEDICAL_FORFEIT"&&t!=="BYE"&&(l.matches_wrestled_today+=1,l.last_bout_ended_ms=a,l.updated_at_ms=a)}e.winner_next_match_id&&this.advanceParticipantToDownstream(e.winner_next_match_id,i,e.match_id),e.loser_next_match_id&&!this.isWithdrawn(r)&&t!=="DQ"&&t!=="MEDICAL_FORFEIT"&&this.advanceParticipantToDownstream(e.loser_next_match_id,r,e.match_id),this.resolveCompletedByesForBracket(e.bracket_id,a)}detectCoachConflicts(){const e=Array.from(this.bouts.values()).filter(n=>n.lifecycle===E.InProgress||n.lifecycle===E.Ready),i=new Set,t=[];for(let n=0;n<e.length;n++)for(let s=n+1;s<e.length;s++){const a=e[n],r=e[s];if(a.assigned_mat_id===r.assigned_mat_id)continue;const o=[this.athletes.get(a.red_athlete_id),this.athletes.get(a.green_athlete_id)].filter(Boolean),l=[this.athletes.get(r.red_athlete_id),this.athletes.get(r.green_athlete_id)].filter(Boolean),[c,d]=a.match_id<=r.match_id?[a.match_id,r.match_id]:[r.match_id,a.match_id];for(const _ of o)for(const m of l)if(_&&m&&_.team_id&&_.team_id===m.team_id){const v=`${_.team_id}:${c}:${d}`;if(i.has(v))continue;i.add(v),t.push({team_id:_.team_id,team_name:_.team_name,first_match_id:a.match_id,first_bout_number:a.bout_number,first_mat_id:a.assigned_mat_id,first_athlete_id:_.athlete_id,first_athlete_name:_.public_display_name,second_match_id:r.match_id,second_bout_number:r.bout_number,second_mat_id:r.assigned_mat_id,second_athlete_id:m.athlete_id,second_athlete_name:m.public_display_name})}}return t}previewCorrectionImpact(e){const i=this.bouts.get(e);if(!i)throw new z(K.InvalidArgument,`Unknown match_id: ${e}`);const t=[],n=[];let s=!0;const a=[];i.winner_next_match_id&&a.push(i.winner_next_match_id),i.loser_next_match_id&&a.push(i.loser_next_match_id);const r=new Set;for(;a.length>0;){const o=a.shift();if(!o||r.has(o))continue;r.add(o);const l=this.bouts.get(o);l&&(t.push(l.match_id),l.lifecycle===E.InProgress?(n.push(l.match_id),s=!1):![E.PendingUpstream,E.Assigned,E.Ready].includes(l.lifecycle)&&!(l.lifecycle===E.ResultAccepted&&l.is_bye)&&(s=!1),l.winner_next_match_id&&a.push(l.winner_next_match_id),l.loser_next_match_id&&a.push(l.loser_next_match_id))}return{target_match_id:e,bout_number:i.bout_number,affected_downstream_matches:t,active_matches_requiring_halt:n,safe_to_auto_apply:s}}resetUnstartedResult(e,i,t){t||(e.red_athlete_id="",e.green_athlete_id=""),this.clearedRestMatchIds.delete(e.match_id),delete e.rest_lock_cleared_by_official,Object.assign(e,{winner_athlete_id:"",loser_athlete_id:"",is_bye:!1,lifecycle:i,red_score:0,green_score:0,win_type:"",completed_at_ms:0,period_number:1,clock_running:!1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,assignment_revision:e.assignment_revision+1})}reinstateAthlete(e){const i=e.athlete_id,t=d=>new Error(`Ask the tournament director to review bout ${d.bout_number} before reinstatement.`),n=this.scratches.get(i),s=n?.results??[],a=this.forfeitsForAthlete(i).find(d=>!n?.priorForfeits.includes(d.match_id)&&!s.some(_=>_.match_id===d.match_id));if(a)throw t(a);if(s.length&&this.consoleRole!=="primary")throw new Error("Ask the primary official to reopen the scratch results.");const r=new Map,o=new Set;for(const d of s){const _=this.bouts.get(d.match_id);if(!_||_.is_bye||_.lifecycle!==E.ResultAccepted||_.win_type!=="FORFEIT"||_.loser_athlete_id!==i||_.winner_athlete_id!==d.winner_athlete_id||_.red_athlete_id!==d.red_athlete_id||_.green_athlete_id!==d.green_athlete_id||_.bracket_id!==d.bracket_id||_.winner_next_match_id!==d.winner_next_match_id||_.loser_next_match_id!==d.loser_next_match_id||_.assignment_revision!==d.assignment_revision||_.completed_at_ms!==d.completed_at_ms||_.red_score||_.green_score||_.clock_running||this.isWithdrawn(_.winner_athlete_id))throw t(_??d);r.set(_.match_id,{..._});for(const m of this.previewCorrectionImpact(_.match_id).affected_downstream_matches)o.add(m)}const l=new Set([...r.keys(),...o]);for(const d of l){const _=this.bouts.get(d);for(const v of[_.winner_next_match_id,_.loser_next_match_id])if(v&&this.bouts.get(v)?.bracket_id!==_.bracket_id)throw t(_);if(r.has(d))continue;const m=_.is_bye&&_.lifecycle===E.ResultAccepted&&(_.win_type==="BYE"||_.is_true_second_challenge&&_.win_type==="DEC")&&!_.clock_running&&!_.red_score&&!_.green_score;if(!this.isUnstartedBout(_)&&!m)throw t(_)}const c=this.now();if(e.check_in_stage=Q.Arrived,e.weigh_in_eligible=!1,e.updated_at_ms=c,this.scratches.delete(i),!!r.size){for(const d of l){const _=this.bouts.get(d),m=o.has(d);this.resetUnstartedResult(_,m?E.PendingUpstream:E.Assigned,!m||_.format===J.BestOfThree)}this.refillDownstreamBouts(o);for(const d of new Set([...r.values()].map(_=>_.bracket_id)))this.resolveCompletedByesForBracket(d,c);for(const d of this.mats.keys())this.promoteMatReadyBout(d,c);for(const d of r.values())this.resultCorrections.push({before:d,after:{...this.bouts.get(d.match_id)},reason:"Reinstated wrestler after scratch.",atMs:c,affected:this.previewCorrectionImpact(d.match_id).affected_downstream_matches})}}correctAcceptedResult(e){if(this.consoleRole!=="primary")throw new Error("Only the primary head table may correct results");const i=this.bouts.get(e.matchId);if(!i||i.is_bye||!re(i))throw new Error("Correction requires an accepted contested result");if(se.normalizeSyncedWinType(i.win_type)==="FORFEIT"!=(e.winType==="FORFEIT"))throw new Error("Correction cannot change forfeit participation");if(!e.reason.trim()||![i.red_athlete_id,i.green_athlete_id].includes(e.winnerAthleteId)||!["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"].includes(e.winType)||!Number.isSafeInteger(e.redScore)||e.redScore<0||e.redScore>1e3||!Number.isSafeInteger(e.greenScore)||e.greenScore<0||e.greenScore>1e3)throw new Error("Invalid result correction");In(e.winType,e.winnerAthleteId===i.red_athlete_id?e.redScore-e.greenScore:e.greenScore-e.redScore);const t=this.previewCorrectionImpact(e.matchId);if(!t.safe_to_auto_apply)throw new Error("Downstream bouts already progressed; correction requires physical halt and director review");const n=structuredClone(i),s=new Set(t.affected_downstream_matches),a=new Set([i.assigned_mat_id]);i.lifecycle!==E.ResultAccepted?this.acceptBoutResult(i,e.winnerAthleteId,e.winType,e.redScore,e.greenScore,i.completed_at_ms||this.now()):Object.assign(i,{winner_athlete_id:e.winnerAthleteId,loser_athlete_id:e.winnerAthleteId===i.red_athlete_id?i.green_athlete_id:i.red_athlete_id,win_type:e.winType,red_score:e.redScore,green_score:e.greenScore}),i.assignment_revision++;for(const o of s){const l=this.bouts.get(o);a.add(l.assigned_mat_id),this.resetUnstartedResult(l,E.PendingUpstream,l.format===J.BestOfThree)}const r=this.now();this.refillDownstreamBouts(s),this.resolveCompletedByesForBracket(i.bracket_id,r);for(const o of a)o>0&&this.promoteMatReadyBout(o,r);return this.resultCorrections.push({before:n,after:structuredClone(i),reason:e.reason.trim(),atMs:r,affected:[...s]}),this.publishAndSave(),i}transferMatAuthority(e){if(e.reason==="TIMEOUT_ONLY_INVALID")throw new z(K.TimeoutTakeoverForbidden,"Timeout-only authority takeover is forbidden (REQ-AUTH-08).");if(!e.oldDevicePhysicallyStopped||!e.timersInitializedStopped)throw new z(K.InvalidArgument,"Old Android scoring device must be physically stopped and all handoff timers must initialize stopped (REQ-AUTH-10).");const i=this.mats.get(e.matId);if(!i)throw new z(K.InvalidArgument,`Unknown Mat ${e.matId}`);const t=i.authority_epoch+1,n=e.newAndroidDeviceId.trim()||i.android_device_id,s=e.newOperatorName.trim()||i.operator_name;let a=e.subjectPubkeyHex?.trim().toLowerCase()??"";if(!/^[a-f0-9]{64}$/i.test(a))throw new Error("A device-generated Ed25519 public key is required");i.certificate_id&&this.revokedCertificateIds.add(i.certificate_id);const r=this.buildSignedMatDelegation(e.matId,n,s,t,a,this.now());this.registerMatDelegation(r),this.mats.set(e.matId,r),this.syncVenueRoomRouter();for(const o of this.bouts.values())o.assigned_mat_id===e.matId&&o.lifecycle!==E.ResultAccepted&&(o.authority_epoch=r.authority_epoch,o.delegated_android_device_id=r.android_device_id,o.clock_running=!1);return this.publishAndSave(),r}getTournamentJoinQrUri(e=tt()){if(this.linkedVenueJoinQrUri&&(e===tt()||e===this.activeVenueOrigin)){const t=Le(this.linkedVenueJoinQrUri);if(t.valid&&t.payload&&(!this.tournamentId||t.payload.tournament_id===this.tournamentId||this.athletes.size===0))return this.linkedVenueJoinQrUri}const i=fs({tournamentId:this.tournamentId,tournamentName:this.tournamentName,rulesVersion:this.rulesVersion,publisherPubkeyHex:this.publisherPublicKeyHex,relayOrigin:e,issuedAtMs:this.now(),rootPrivateKey:this.keyPair.privateKey});return Ri(i)}async refreshVenueBootstrap(e=this.activeVenueOrigin,i){if(!(typeof fetch>"u"||!e))try{const t=e.trim().replace(/\/+$/,"");if(/github\.io$/i.test(new URL(t).hostname))return;const n=AbortSignal.timeout(3500),s=await fetch(`${t}/api/openmat-join-bootstrap`,{signal:i?AbortSignal.any([i,n]):n});if(!s.ok)return;const a=await s.json();if(i?.aborted)return;const r=(a.joinQrUri||a.qr_uri||"").trim(),o=Le(r);if(o.valid&&o.payload){let l=!1;this.linkedVenueJoinQrUri!==r&&(this.linkedVenueJoinQrUri=r,l=!0);const c=o.payload.publisher_pubkey_hex.toLowerCase(),d=!!(c&&c!==this.publisherPublicKeyHex.toLowerCase());d!==this.hasExternalVenueServer&&(this.hasExternalVenueServer=d,l=!0),d&&this.linkedVenuePubkeyHex!==c&&(this.linkedVenuePubkeyHex=c,l=!0),l&&this.onStateChanged?.()}}catch{}}getTournamentJoinQrSvg(e=tt()){return qe(this.getTournamentJoinQrUri(e))}getActiveSharePubkeyHex(){return this.linkedVenuePubkeyHex||this.publisherPublicKeyHex}getPublicPlayerWebUrl(e=se.DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL){const i=e.trim().replace(/\/+$/,""),t=this.getActiveSharePubkeyHex();return t?`${i}/?${t}`:`${i}/`}getPublicOfficialsWebUrl(e=se.DEFAULT_PUBLIC_OFFICIALS_WEB_BASE_URL){const i=e.trim().replace(/\/+$/,""),t=this.getActiveSharePubkeyHex();return t?`${i}/?${t}`:`${i}/`}getLocalWifiPlayerWebUrl(e=this.activeVenueOrigin){try{const i=new URL("/",e),t=this.getActiveSharePubkeyHex();return t?`${i.href}?${t}`:i.href}catch{return`${e.replace(/\/+$/,"")}/?${this.getActiveSharePubkeyHex()}`}}getLocalWifiOfficialsWebUrl(e=this.activeVenueOrigin){try{const i=new URL("/officials/",e),t=this.getActiveSharePubkeyHex();return t?`${i.href}?${t}`:i.href}catch{return`${e.replace(/\/+$/,"")}/officials/?${this.getActiveSharePubkeyHex()}`}}getPublicPlayerWebQrSvg(e=se.DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL){return qe(this.getPublicPlayerWebUrl(e))}getPublicOfficialsWebQrSvg(e=se.DEFAULT_PUBLIC_OFFICIALS_WEB_BASE_URL){return qe(this.getPublicOfficialsWebUrl(e))}getLocalWifiSelfRegisterWebUrl(e=this.activeVenueOrigin){const i=e.trim().replace(/\/+$/,""),t=`${i}/register`;return li({baseRegisterUrl:t,tournamentId:this.tournamentId,tournamentName:this.tournamentName,defaultDivision:ne.defaultDivision,apiOrigin:/github\.io$/i.test(i)?void 0:i})}getPublicSelfRegisterWebUrl(e=se.DEFAULT_PUBLIC_REGISTER_WEB_BASE_URL){const i=this.activeVenueOrigin.trim().replace(/\/+$/,""),t=!!i&&!/github\.io$/i.test(i);return li({baseRegisterUrl:e,tournamentId:this.tournamentId,tournamentName:this.tournamentName,defaultDivision:ne.defaultDivision,apiOrigin:t?i:void 0})}getSelfRegisterPosterUrl(){const e=this.activeVenueOrigin.trim().replace(/\/+$/,"");return e&&!/github\.io$/i.test(e)?this.getLocalWifiSelfRegisterWebUrl(e):this.getPublicSelfRegisterWebUrl()}getSelfRegisterPosterQrSvg(e=this.getSelfRegisterPosterUrl()){return qe(e)}signProjectionNostrEvent(e=this.buildSignedPublicProjection()){const i=Me(this.keyPair.privateKey.slice(0,32)),t=he(oi.getPublicKey(i)).toLowerCase(),n=Math.floor(this.now()/1e3),s=[["d",`openmat:${e.tournament_id}`],["x",`openmat-proj:${e.tournament_id}`],["x",`openmat-pub:${e.publisher_pubkey_hex.toLowerCase()}`],["x","openmat:v1"]];this.linkedVenuePubkeyHex&&this.linkedVenuePubkeyHex.toLowerCase()!==e.publisher_pubkey_hex.toLowerCase()&&s.push(["x",`openmat-pub:${this.linkedVenuePubkeyHex.toLowerCase()}`]);const a=JSON.stringify(e),r=JSON.stringify([0,t,n,30078,s,a]),o=Me(new TextEncoder().encode(r)),l=he(o),c=he(oi.sign(o,i));return{id:l,pubkey:t,created_at:n,kind:30078,tags:s,content:a,sig:c}}pendingNostrProjections=new Map;nostrUploads=new Set;publishProjectionToPublicNostrRelays(e=this.buildSignedPublicProjection()){if(typeof window>"u"||typeof WebSocket>"u"||!this.broadcastEnabled||this.isSeeding||this.liveConsoleRole!=="primary")return;const i=this.signProjectionNostrEvent(e),t={id:i.id,frame:JSON.stringify(["EVENT",i])};for(const n of this.publicNostrRelays)(window.location?.protocol!=="https:"||n.startsWith("wss:"))&&this.pendingNostrProjections.set(n,t);this.flushPublicNostrProjections()}flushPublicNostrProjections(){if(this.liveConsoleRole==="primary"){for(const[e,i]of this.pendingNostrProjections)if(!this.nostrUploads.has(e)){this.nostrRelayStatuses.set(e,"CONNECTING");try{const t=new WebSocket(e);this.nostrUploads.add(e);const n=setTimeout(()=>t.close(),6e3);let s=!1;t.onopen=()=>{try{t.send(i.frame)}catch{t.close()}},t.onmessage=({data:a})=>{try{const r=JSON.parse(String(a));if(r[0]!=="OK"||r[1]!==i.id)return;s=r[2]===!0||String(r[3]).startsWith("duplicate:"),s&&(this.pendingNostrProjections.get(e)===i&&this.pendingNostrProjections.delete(e),this.lastNostrPublishedAtMs=this.now()),t.close()}catch{}},t.onerror=()=>t.close(),t.onclose=()=>{clearTimeout(n),this.nostrUploads.delete(e),this.nostrRelayStatuses.set(e,s?"CONNECTED":"OFFLINE"),this.onStateChanged?.(),s&&this.flushPublicNostrProjections()}}catch{this.nostrRelayStatuses.set(e,"OFFLINE")}}}}static normalizeSyncedWinType(e){const i=(e??"").trim().toUpperCase();return i==="DECISION"?"DEC":i==="MAJOR_DECISION"?"MD":i==="TECHNICAL_FALL"?"TF":i==="DISQUALIFICATION"?"DQ":i==="MEDICAL_FORFEIT"?"FORFEIT":i==="PIN"||i==="PIN_FALL"?"FALL":i}propagateEndedBoutDownstream(e,i=this.now()){e.winner_athlete_id&&(e.loser_athlete_id||(e.loser_athlete_id=e.winner_athlete_id===e.red_athlete_id?e.green_athlete_id:e.red_athlete_id),e.win_type=se.normalizeSyncedWinType(e.win_type)||"DEC",e.winner_next_match_id&&this.advanceParticipantToDownstream(e.winner_next_match_id,e.winner_athlete_id,e.match_id),e.loser_next_match_id&&e.loser_athlete_id&&!this.isWithdrawn(e.loser_athlete_id)&&this.advanceParticipantToDownstream(e.loser_next_match_id,e.loser_athlete_id,e.match_id),this.resolveCompletedByesForBracket(e.bracket_id,e.completed_at_ms||i))}adoptExternalProjectionIfEmpty(e){if(!se.verifySignedPublicProjection(e)||(e.publisher_pubkey_hex&&e.publisher_pubkey_hex!==this.publisherPublicKeyHex&&(this.linkedVenuePubkeyHex=e.publisher_pubkey_hex.toLowerCase()),this.athletes.size>0||this.bouts.size>0))return!1;let i=!1;const t=this.isSeeding;this.isSeeding=!0;try{this.tournamentId=e.tournament_id||this.tournamentId,this.tournamentName=e.tournament_name||this.tournamentName,this.rulesVersion=e.rules_version||this.rulesVersion,this.growthAllowanceTenths=e.growth_allowance_tenths??this.growthAllowanceTenths,this.consecutiveDayAllowanceTenths=e.consecutive_day_allowance_tenths??this.consecutiveDayAllowanceTenths,e.mat_count>=1&&e.mat_count<=ht&&(this.matCount=e.mat_count);for(const s of e.athletes??[])this.athletes.set(s.athlete_id,structuredClone(s));for(const s of e.bouts??[])this.bouts.set(s.match_id,structuredClone(s));this.nextBoutNumber=1+Math.max(100,...Array.from(this.bouts.values()).map(s=>s.bout_number||100));for(const s of e.mats??[])s&&typeof s.mat_id=="number"&&this.mats.set(s.mat_id,structuredClone(s));for(const[s,a]of Object.entries(e.bracket_frozen_by_class??{}))this.bracketFrozenByClass.set(s,!!a);const n=new Set;for(const s of[...this.bouts.values()].sort((a,r)=>a.bout_number-r.bout_number))if(s.lifecycle===E.LocallyConfirmed&&s.winner_athlete_id){const a=se.normalizeSyncedWinType(s.win_type)||"DEC";[s.red_athlete_id,s.green_athlete_id].includes(s.winner_athlete_id)&&["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"].includes(a)&&(this.acceptBoutResult(s,s.winner_athlete_id,a,s.red_score,s.green_score,s.completed_at_ms||this.now()),s.assigned_mat_id>0&&n.add(s.assigned_mat_id),i=!0)}else(s.lifecycle===E.EndedLocal||s.lifecycle===E.ResultAccepted)&&s.winner_athlete_id&&!s.is_bye&&(this.propagateEndedBoutDownstream(s),s.assigned_mat_id>0&&n.add(s.assigned_mat_id));if(n.size>0){this.advanceScratches(this.now());for(const s of n)this.promoteMatReadyBout(s,this.now())}}finally{this.isSeeding=t}return i&&this.broadcastEnabled&&this.liveConsoleRole==="primary"?(this.publishAndSave(),!0):(this.saveToStorage(),this.onStateChanged?.(),!0)}syncLiveProjectionFromVenue(e,i){if(!se.verifySignedPublicProjection(e))return!1;i?.();const t=e.publisher_pubkey_hex.toLowerCase(),n=!!t&&t!==this.publisherPublicKeyHex.toLowerCase();if(this.consoleRole!=="primary"&&n&&this.linkedVenuePubkeyHex&&this.linkedVenuePubkeyHex!==t)return!1;n&&this.liveConsoleRole==="official"&&e.tournament_id&&e.tournament_id!==this.tournamentId&&this.pendingProjectionPostCount===0&&(this.athletes.clear(),this.bouts.clear(),this.scratches.clear(),this.mats.clear(),this.bracketFrozenByClass.clear(),this.tournamentId=e.tournament_id);const s=this.athletes.size>0||this.bouts.size>0;if(s&&e.tournament_id!==this.tournamentId||n&&this.pendingProjectionPostCount>0||!n&&s&&e.snapshot_epoch<=this.snapshotEpoch)return!1;const a=!n||this.consoleRole!=="primary"&&this.linkedVenuePubkeyHex===t;let r=!1;n&&this.linkedVenuePubkeyHex!==t&&(this.linkedVenuePubkeyHex=t,r=!0);const o=`${e.tournament_id}:${t}`,l=this.lastSyncedVenueEpochByPublisher.get(o)??0;if(typeof e.snapshot_epoch=="number"&&e.snapshot_epoch<l)return!1;if(typeof e.snapshot_epoch=="number"&&e.snapshot_epoch>l&&this.lastSyncedVenueEpochByPublisher.set(o,e.snapshot_epoch),this.athletes.size===0&&this.bouts.size===0)return this.adoptExternalProjectionIfEmpty(e);if(e.tournament_id&&e.tournament_id!==this.tournamentId)return!1;let c=r,d=!1;const _=new Set,m=this.isSeeding;this.isSeeding=!0;try{for(const u of e.mats??[]){if(!u||typeof u.mat_id!="number")continue;const f=this.mats.get(u.mat_id);(!f||!f.certificate_id&&u.certificate_id||u.authority_epoch>f.authority_epoch||u.last_heartbeat_ms>f.last_heartbeat_ms)&&(this.mats.set(u.mat_id,structuredClone(u)),c=!0)}if(a)for(const u of e.athletes){const f=this.athletes.get(u.athlete_id);f&&u.updated_at_ms>=f.updated_at_ms&&(f.check_in_stage!==u.check_in_stage||f.weigh_in_eligible!==u.weigh_in_eligible||f.medically_cleared!==u.medically_cleared)&&(f.check_in_stage=u.check_in_stage,f.weigh_in_eligible=u.weigh_in_eligible,f.medically_cleared=u.medically_cleared,f.updated_at_ms=u.updated_at_ms,c=!0)}const v=[...e.bouts??[]].sort((u,f)=>u.bout_number-f.bout_number);if(n&&this.pendingProjectionPostCount===0&&v.length>0){const u=new Set(v.map(p=>p.match_id)),f=new Set([...this.bouts.values()].filter(p=>this.drawLocked(p)).map(p=>p.bracket_id));for(const[p,b]of this.bouts.entries())!u.has(p)&&(this.liveConsoleRole==="official"||!f.has(b.bracket_id))&&b.lifecycle<E.InProgress&&b.red_score===0&&b.green_score===0&&!b.clock_running&&(this.liveConsoleRole==="official"||v.some(g=>g.division_id===b.division_id&&g.weight_class_id===b.weight_class_id))&&(this.bouts.delete(p),c=!0)}for(const u of v){const f=this.bouts.get(u.match_id);if(!f){if(this.deletedMatchIds.has(u.match_id)&&this.liveConsoleRole==="primary")continue;if(this.pendingProjectionPostCount===0){const I=structuredClone(u);if(this.bouts.set(I.match_id,I),I.lifecycle===E.LocallyConfirmed&&I.winner_athlete_id){const R=se.normalizeSyncedWinType(I.win_type)||"DEC";[I.red_athlete_id,I.green_athlete_id].includes(I.winner_athlete_id)&&["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"].includes(R)&&(this.acceptBoutResult(I,I.winner_athlete_id,R,I.red_score,I.green_score,I.completed_at_ms||this.now()),I.assigned_mat_id>0&&_.add(I.assigned_mat_id),d=!0)}else(I.lifecycle===E.EndedLocal||I.lifecycle===E.ResultAccepted)&&I.winner_athlete_id&&!I.is_bye&&(this.propagateEndedBoutDownstream(I),I.assigned_mat_id>0&&_.add(I.assigned_mat_id));c=!0}continue}const p=u.assignment_revision??1;if(p<f.assignment_revision)continue;if(a&&p>f.assignment_revision&&u.lifecycle<=E.Ready&&(this.isUnstartedBout(f)||f.lifecycle===E.ResultAccepted&&(f.is_bye||f.win_type==="FORFEIT"))){this.bouts.set(u.match_id,structuredClone(u)),u.rest_lock_cleared_by_official||this.clearedRestMatchIds.delete(u.match_id),c=!0;continue}if(u.lifecycle===E.LocallyConfirmed&&f.lifecycle<E.ResultAccepted&&u.winner_athlete_id){const I=se.normalizeSyncedWinType(u.win_type)||"DEC";if([f.red_athlete_id||u.red_athlete_id,f.green_athlete_id||u.green_athlete_id].includes(u.winner_athlete_id)&&["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"].includes(I)){!f.red_athlete_id&&u.red_athlete_id&&(f.red_athlete_id=u.red_athlete_id),!f.green_athlete_id&&u.green_athlete_id&&(f.green_athlete_id=u.green_athlete_id),f.period_number=u.period_number||f.period_number,this.acceptBoutResult(f,u.winner_athlete_id,I,u.red_score,u.green_score,u.completed_at_ms||this.now()),f.assigned_mat_id>0&&_.add(f.assigned_mat_id),d=!0,c=!0;continue}}if(u.lifecycle===E.ResultAccepted){const I=se.normalizeSyncedWinType(u.win_type)||u.win_type;f.lifecycle<E.ResultAccepted?(!f.red_athlete_id&&u.red_athlete_id&&(f.red_athlete_id=u.red_athlete_id),!f.green_athlete_id&&u.green_athlete_id&&(f.green_athlete_id=u.green_athlete_id),!u.is_bye&&u.winner_athlete_id&&this.acceptBoutResult(f,u.winner_athlete_id,I||"DEC",u.red_score,u.green_score,u.completed_at_ms||this.now()),this.bouts.set(u.match_id,structuredClone({...u,win_type:I})),u.assigned_mat_id>0&&_.add(u.assigned_mat_id),c=!0):this.pendingProjectionPostCount===0&&(u.winner_athlete_id!==f.winner_athlete_id||I!==f.win_type||u.red_score!==f.red_score||u.green_score!==f.green_score)&&(this.bouts.set(u.match_id,structuredClone({...u,win_type:I})),c=!0);continue}const b=f.lifecycle===E.EndedLocal&&!!f.winner_athlete_id,g=this.pendingProjectionPostCount===0&&f.lifecycle<E.InProgress&&u.lifecycle<E.InProgress&&(!f.red_athlete_id&&!!u.red_athlete_id||!f.green_athlete_id&&!!u.green_athlete_id||!f.is_bye&&!!u.is_bye||u.assigned_mat_id===f.assigned_mat_id&&u.lifecycle>=E.Assigned&&f.lifecycle>=E.Assigned&&(u.mat_queue_order!==f.mat_queue_order||u.lifecycle!==f.lifecycle)),k=u.lifecycle>f.lifecycle||f.lifecycle>=E.InProgress&&f.lifecycle<=E.EndedLocal&&u.lifecycle>=E.Assigned&&u.lifecycle<=E.EndedLocal&&(this.pendingProjectionPostCount===0||u.lifecycle>=f.lifecycle)&&(u.lifecycle!==f.lifecycle||u.red_score!==f.red_score||u.green_score!==f.green_score||u.period_number!==f.period_number||u.clock_running!==f.clock_running||u.clock_remaining_ms!==f.clock_remaining_ms||u.winner_athlete_id!==f.winner_athlete_id||u.win_type!==f.win_type||u.mat_queue_order!==f.mat_queue_order);if(g||k){const I=u.win_type?se.normalizeSyncedWinType(u.win_type):"",R=!!(u.rest_lock_cleared_by_official||f.rest_lock_cleared_by_official);R&&this.clearedRestMatchIds.add(u.match_id);const M=structuredClone({...u,win_type:I,...R?{rest_lock_cleared_by_official:!0}:{}});if(this.bouts.set(u.match_id,M),M.lifecycle===E.EndedLocal&&M.winner_athlete_id){const L=M.winner_next_match_id?this.bouts.get(M.winner_next_match_id):void 0,y=!!(!M.winner_next_match_id||L&&[L.red_athlete_id,L.green_athlete_id].includes(M.winner_athlete_id));this.propagateEndedBoutDownstream(M),y||(d=!0),M.assigned_mat_id>0&&_.add(M.assigned_mat_id)}else b&&!M.winner_athlete_id&&(this.revertProvisionalDownstreamAdvancement(M.match_id),d=!0);c=!0}}if(_.size>0){for(const u of[...this.bouts.values()].sort((f,p)=>f.bout_number-p.bout_number))!u.is_bye&&re(u)&&this.propagateEndedBoutDownstream(u);this.advanceScratches(this.now());for(const u of _)this.promoteMatReadyBout(u,this.now())}for(const u of e.athletes??[]){const f=this.athletes.get(u.athlete_id);f?(u.matches_wrestled_today>f.matches_wrestled_today&&(f.matches_wrestled_today=u.matches_wrestled_today,c=!0),u.last_bout_ended_ms>f.last_bout_ended_ms&&(u.updated_at_ms>=f.updated_at_ms||f.last_bout_ended_ms===0)&&(f.last_bout_ended_ms=u.last_bout_ended_ms,f.updated_at_ms=Math.max(f.updated_at_ms,u.updated_at_ms),c=!0)):(this.athletes.set(u.athlete_id,structuredClone(u)),c=!0)}if(e.ow_vote_tallies&&typeof e.ow_vote_tallies=="object"){const u={};for(const[f,p]of Object.entries(e.ow_vote_tallies))typeof p=="number"&&p>0&&(u[f]=p);JSON.stringify(u)!==JSON.stringify(this.syncedOwVoteTallies)&&(this.syncedOwVoteTallies=u,c=!0)}this.nextBoutNumber=Math.max(this.nextBoutNumber,1+Math.max(100,...Array.from(this.bouts.values()).map(u=>u.bout_number||100)))}finally{this.isSeeding=m}return d&&this.broadcastEnabled&&this.liveConsoleRole==="primary"?(this.publishAndSave(),!0):(c&&(this.saveToStorage(),this.onStateChanged?.()),c)}bootstrapFromLocationQuery(e=typeof window<"u"?window.location.search:""){typeof window<"u"&&/github\.io$/i.test(window.location.hostname)&&(this.publicNostrRelayPublishingEnabled=!0);const i=(e??"").trim();if(!i||i==="?")return{joined:!1,linkedPubkeyHex:this.linkedVenuePubkeyHex,relayOrigin:this.liveOrigin};const t=new URLSearchParams(i.startsWith("?")?i.slice(1):i);if(t.has("sr")||t.has("selfreg")){const l=typeof window<"u"&&window.location?.href?window.location.href:`https://openmat.local/officials/?${t.toString()}`,c=qt(l,this.tournamentId);if(c.valid&&c.record?.tournament_id===this.tournamentId){const d=this.stageSelfRegistration(c.record,"QR_SCAN");d.alreadyCheckedInAthlete||(this.selectedPendingSelfRegId=d.entry.registration_id)}}const n=t.get("venue")?.trim()||t.get("origin")?.trim()||"";n&&/^https?:\/\//i.test(n)&&this.setVenueOrigin(n.replace(/\/+$/,""));const s=t.get("join")?.trim()||t.get("qr")?.trim()||t.get("pubkey")?.trim()||i.replace(/^\?+/,"").trim(),a=Le(s);if(!a.valid||!a.payload)return{joined:!1,linkedPubkeyHex:this.linkedVenuePubkeyHex,relayOrigin:this.liveOrigin};const r=a.payload;if(r.publisher_pubkey_hex&&r.publisher_pubkey_hex.toLowerCase()!==this.publisherPublicKeyHex.toLowerCase()&&(this.linkedVenuePubkeyHex=r.publisher_pubkey_hex.toLowerCase(),!this.hasExplicitStoredRole&&this.athletes.size===0&&this.bouts.size===0&&(this.liveConsoleRole="official"),this.liveConsoleRole==="official"&&r.tournament_id&&r.tournament_id!=="manual-pubkey"&&this.tournamentId!==r.tournament_id&&(this.athletes.clear(),this.bouts.clear(),this.scratches.clear(),this.mats.clear(),this.bracketFrozenByClass.clear())),r.relay_origin&&!/github\.io$/i.test(r.relay_origin)&&this.setVenueOrigin(r.relay_origin),r.nostr_relays?.length&&(this.publicNostrRelays=[...r.nostr_relays]),r.tournament_id&&r.tournament_id!=="manual-pubkey"&&this.athletes.size===0&&(this.tournamentId=r.tournament_id,r.tournament_name&&r.tournament_name!=="OpenMat Tournament"&&(this.tournamentName=r.tournament_name)),this.publicNostrRelayPublishingEnabled=!0,typeof window<"u"&&typeof WebSocket<"u"&&this.linkedVenuePubkeyHex){const l=`om-off-boot-${this.linkedVenuePubkeyHex.slice(0,12)}`,c={kinds:[24880,30078],"#x":[`openmat-pub:${this.linkedVenuePubkeyHex}`]};for(const d of this.publicNostrRelays)if(!(window.location?.protocol==="https:"&&!d.startsWith("wss:")))try{const _=new WebSocket(d),m=setTimeout(()=>{try{_.close()}catch{}},5e3);_.onopen=()=>{this.nostrRelayStatuses.set(d,"CONNECTED");try{_.send(JSON.stringify(["REQ",l,c]))}catch{}},_.onmessage=v=>{if(typeof v.data=="string")try{const u=JSON.parse(v.data);if(Array.isArray(u)&&u[0]==="EVENT"&&u[2]?.content){const f=JSON.parse(u[2].content);this.syncLiveProjectionFromVenue(f)}else if(Array.isArray(u)&&u[0]==="EOSE"){clearTimeout(m);try{_.close()}catch{}}}catch{}},_.onerror=()=>{clearTimeout(m);try{_.close()}catch{}}}catch{}}return{joined:!0,linkedPubkeyHex:this.linkedVenuePubkeyHex,relayOrigin:this.liveOrigin}}getMatScorekeeperQrSvg(e){const i=this.mats.get(e);if(!i)throw new z(K.InvalidArgument,`Unknown Mat ${e}`);return qe(i.scorekeeper_qr_uri)}issueMatScorekeeperCertificate(e){if(!Number.isInteger(e.matId)||e.matId<1||e.matId>this.matCount||!e.androidDeviceId.trim()||!e.operatorName.trim())throw new Error("Mat, device ID and operator are required");const i=this.mats.get(e.matId);if([...this.bouts.values()].some(o=>o.assigned_mat_id===e.matId&&[E.InProgress,E.EndedLocal,E.LocallyConfirmed].includes(o.lifecycle)))throw new Error("An active mat requires the physical-stop authority-transfer workflow");const t=i?.certificate_id?i.authority_epoch+1:1,n=e.androidDeviceId.trim()||`mat-${e.matId}-scorekeeper`,s=e.operatorName.trim()||`Table ${e.matId} Scorer`;let a=e.subjectPubkeyHex?.trim().toLowerCase()??"";if(!/^[a-f0-9]{64}$/i.test(a))throw new Error("A device-generated Ed25519 public key is required");i?.certificate_id&&this.revokedCertificateIds.add(i.certificate_id);const r=this.buildSignedMatDelegation(e.matId,n,s,t,a,this.now());this.registerMatDelegation(r),this.mats.set(e.matId,r),this.syncVenueRoomRouter();for(const o of this.bouts.values())o.assigned_mat_id===e.matId&&o.lifecycle!==E.ResultAccepted&&(o.authority_epoch=r.authority_epoch,o.delegated_android_device_id=r.android_device_id);return this.publishAndSave(),r}revokeMatScorekeeperCertificate(e){this.revokedCertificateIds.add(e.trim()),this.saveToStorage()}validateScorekeeperQrOrCert(e,i,t=!1){const n=typeof e=="string"?e.trim():"";if(!n)return{valid:!1,reason:"Empty scorekeeper QR URI or certificate hex",tournamentIdMatch:!1,signatureValid:!1,notExpired:!1,notRevoked:!1,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1};let s,a=this.tournamentId,r=this.publisherPublicKeyHex;if(n.startsWith("openmat://scorekeeper-auth")){const g=gs(n);if(!g.valid||!g.bundle)return{valid:!1,reason:g.reason,tournamentIdMatch:!1,signatureValid:!1,notExpired:!1,notRevoked:!1,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1};s=g.bundle.certificate,a=g.bundle.tournament_id,r=g.bundle.publisher_pubkey_hex}else try{s=_t(n)}catch(g){return{valid:!1,reason:`Malformed certificate CBOR hex: ${String(g)}`,tournamentIdMatch:!1,signatureValid:!1,notExpired:!1,notRevoked:!1,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1}}const o=s.tournament_id===this.tournamentId&&a===this.tournamentId&&r.toLowerCase()===this.publisherPublicKeyHex.toLowerCase();if(!o)return{valid:!1,reason:`Tournament mismatch: certificate is for '${s.tournament_id}', expected '${this.tournamentId}'`,tournamentIdMatch:!1,signatureValid:!1,notExpired:!0,notRevoked:!0,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1,certificate:s};const l=!this.revokedCertificateIds.has(s.certificate_id);if(!l)return{valid:!1,reason:`Certificate ${s.certificate_id} has been revoked by tournament authority`,tournamentIdMatch:!0,signatureValid:!0,notExpired:!0,notRevoked:!1,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1,certificate:s};let c=!1,d=!1;try{Vt(s,this.keyPair.publicKey,this.now(),t),c=!0,d=!0}catch(g){const k=g instanceof z&&g.code===K.CertificateExpired;return{valid:!1,reason:g instanceof Error?g.message:String(g),tournamentIdMatch:!0,signatureValid:k,notExpired:!k,notRevoked:!0,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1,certificate:s}}const _=Ee.ScoreMat|Ee.ConfirmLocalResult,m=s.role===st.MatOperator&&(s.allowed_scopes&_)===_,v=s.assigned_mat_id>=1&&s.assigned_mat_id<=this.matCount&&(i===void 0||s.assigned_mat_id===i),u=this.mats.get(s.assigned_mat_id),f=u?s.authority_generation===u.authority_epoch:!1,p=o&&c&&d&&l&&m&&v&&f;let b=`Authorized Scorekeeper '${s.subject_key_id}' verified for ${this.tournamentName} · Mat ${s.assigned_mat_id} (Epoch #${s.authority_generation})`;return m?v?f||(b=`Stale authority epoch #${s.authority_generation} (Mat ${s.assigned_mat_id} is currently on epoch #${u?.authority_epoch??"?"})`):b=`Scorekeeper is assigned to Mat ${s.assigned_mat_id}, not Mat ${i}`:b="Unauthorized role or missing ScoreMat / ConfirmLocalResult scope bits",{valid:p,reason:b,tournamentIdMatch:o,signatureValid:c,notExpired:d,notRevoked:l,matAuthorized:v,epochCurrent:f,scopesAllowed:m,certificate:s}}simActive=!1;simPhase="Idle (Manual Officials Mode)";simStepCursor=0;simTotalSteps=0;simSignedEventsProcessed=0;simSpectatorNodes=40;simBleacherDeliveries=0;simLatestEventSummary="Ready to load C++ OpenMat-Sim campaign trace.";simLatestEventIdHex="";simCppSnapshotReady=!1;simCppPublisherKeyHex="";simTelemetryLog=[];simActionQueue=[];generateCppCompatibleBracketForClass(e,i="varsity"){this.assertDrawNotStarted();for(const[p,b]of this.bouts.entries())b.weight_class_id===e&&b.division_id?.toLowerCase()===i.toLowerCase()&&this.bouts.delete(p);const t=Array.from(this.athletes.values()).filter(p=>p.weight_class_id===e&&p.division_id.toLowerCase()===i.toLowerCase()&&p.check_in_stage===Q.Eligible&&p.weigh_in_eligible&&p.medically_cleared).sort((p,b)=>p.seed_rank-b.seed_rank||p.athlete_id.localeCompare(b.athlete_id)),n=t.reduce((p,b)=>Math.max(p,b.seed_rank),t.length),s=n<=8?8:n<=16?16:n<=32?32:64,a=Math.log2(s);t.forEach((p,b)=>{p.seed_rank=b+1});const r=i.toLowerCase()==="varsity"?`bracket-${e}`:`bracket-${i.toLowerCase()}-${e}`,o=J.TrueSecondChallenge,l=[],c=p=>{const b=`${r}-${p.suffix}`,g=!!(p.redId&&p.greenId),k={match_id:b,bracket_id:r,weight_class_id:e,division_id:i,format:o,bout_number:this.nextBoutNumber++,round_index:p.roundIndex,round_label:p.roundLabel,is_consolation:p.isConsolation,is_placement_bout:!!p.isPlacement,is_true_second_challenge:!!p.isTrueSecond,placement_rank:p.placementRank??0,red_athlete_id:p.redId??"",green_athlete_id:p.greenId??"",is_bye:!1,winner_next_match_id:p.winnerNext?`${r}-${p.winnerNext}`:"",loser_next_match_id:p.loserNext?`${r}-${p.loserNext}`:"",lifecycle:g?E.Assigned:E.PendingUpstream,assigned_mat_id:p.matId,mat_queue_order:p.queueOrder,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${p.matId}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};return this.bouts.set(b,k),l.push(k),k};let d=1;const _=Array.from({length:a+1},()=>[]);for(let p=1;p<=a;p++){const b=s>>p,g=p===a?"1st Place Championship Final":b===2?"Championship Semifinal":b===4?"Championship Quarterfinal":`Championship Round of ${b*2}`;for(let k=0;k<b;k++){const I=`C${p}-${k+1}`;_[p].push(I),c({suffix:I,roundIndex:p,roundLabel:g,isConsolation:!1,isPlacement:p===a,placementRank:p===a?1:0,winnerNext:p<a?`C${p+1}-${Math.floor(k/2)+1}`:void 0,loserNext:p===a?"TRUE-2ND":void 0,matId:(d-1)%this.matCount+1,queueOrder:d++})}}let m=1,v=[];for(let p=0;p<s/4;p++){const b=`L${m}-${p+1}`;v.push(b),c({suffix:b,roundIndex:m+1,roundLabel:`Consolation Round ${m}`,isConsolation:!0,loserNext:s===8?"P7":void 0,matId:(d-1)%this.matCount+1,queueOrder:d++});const g=this.bouts.get(`${r}-${_[1][2*p]}`),k=this.bouts.get(`${r}-${_[1][2*p+1]}`);g.loser_next_match_id=`${r}-${b}`,k.loser_next_match_id=`${r}-${b}`}for(let p=2;p<a;p++){const b=_[p].length;m+=1;const g=[];for(let k=0;k<b;k++){const I=`L${m}-${k+1}`;g.push(I);const R=p===a-1?"Consolation Semifinal (Crossover)":`Consolation Round ${m} (Crossover)`;c({suffix:I,roundIndex:p+m,roundLabel:R,isConsolation:!0,matId:(d-1)%this.matCount+1,queueOrder:d++});const M=this.bouts.get(`${r}-${v[k]}`);M.winner_next_match_id=`${r}-${I}`;const L=p%2===0?b-1-k:k^Math.floor(b/2),y=this.bouts.get(`${r}-${_[p][L]}`);y.loser_next_match_id=`${r}-${I}`}if(p<a-1){m+=1;const k=b/2,I=[];for(let R=0;R<k;R++){const M=`L${m}-${R+1}`;I.push(M),c({suffix:M,roundIndex:p+m,roundLabel:k===2?"Consolation Quarterfinal":`Consolation Round ${m}`,isConsolation:!0,loserNext:k===2?"P7":void 0,matId:(d-1)%this.matCount+1,queueOrder:d++});const L=this.bouts.get(`${r}-${g[2*R]}`),y=this.bouts.get(`${r}-${g[2*R+1]}`);L.winner_next_match_id=`${r}-${M}`,y.winner_next_match_id=`${r}-${M}`}v=I}else{for(let k=0;k<2;k++){const I=this.bouts.get(`${r}-${g[k]}`);I.winner_next_match_id=`${r}-P3`,I.loser_next_match_id=`${r}-P5`}v=g}}const u=a+m+1;c({suffix:"P7",roundIndex:u,roundLabel:"7th Place Match",isConsolation:!0,isPlacement:!0,placementRank:7,matId:(d-1)%this.matCount+1,queueOrder:d++}),c({suffix:"P5",roundIndex:u,roundLabel:"5th Place Match",isConsolation:!0,isPlacement:!0,placementRank:5,matId:(d-1)%this.matCount+1,queueOrder:d++}),c({suffix:"P3",roundIndex:u,roundLabel:"3rd Place Match",isConsolation:!0,isPlacement:!0,placementRank:3,winnerNext:"TRUE-2ND",matId:(d-1)%this.matCount+1,queueOrder:d++}),c({suffix:"TRUE-2ND",roundIndex:u+1,roundLabel:"True Second Challenge Match",isConsolation:!0,isPlacement:!0,isTrueSecond:!0,placementRank:2,matId:1,queueOrder:d++});const f=se.buildStandardTopSeeds(s);for(let p=0;p<s/2;p++){const b=f[p],g=s+1-b,k=this.bouts.get(`${r}-${_[1][p]}`);k.red_athlete_id=b>=1&&b<=t.length?t[b-1].athlete_id:"",k.green_athlete_id=g>=1&&g<=t.length?t[g-1].athlete_id:"",k.red_athlete_id&&k.green_athlete_id&&(k.lifecycle=E.Assigned)}return this.numberBoutsInRunningOrder(),this.bracketFrozenByClass.set(`${i.toUpperCase()}:${e}`,!0),l}loadCppSimulationTrace(e,i="",t=""){const n=Xs(e,i,t);this.resetTournamentState(),this.athletes.clear(),this.bouts.clear(),this.simActionQueue=[],this.simTelemetryLog=[],this.simStepCursor=0,this.simSignedEventsProcessed=0,this.simBleacherDeliveries=0,this.simSpectatorNodes=0,this.simCppPublisherKeyHex=t,this.simCppSnapshotReady=!1;for(const a of n){const r=/^bracket-(?:([a-z0-9_]+)-)?(\d+)-/i.exec(a.event.match_id);if(!r)throw new Error("Native trace has an unknown division or weight class");const o=r[1]??"varsity",l=r[2];for(const c of[a.projection.red_athlete_id,a.projection.green_athlete_id])typeof c!="string"||!c||this.athletes.has(c)||this.athletes.set(c,{athlete_id:c,opaque_pass_token:`NATIVE-${c}`,public_display_name:c,team_id:`team-${Number(c.split("-")[2])%8}`,team_name:`Native campaign team ${Number(c.split("-")[2])%8}`,division_id:o,weight_class_id:l,seed_rank:Number(c.split("-")[2])+1,check_in_stage:Q.Eligible,weigh_in_eligible:!0,medically_cleared:!0,matches_wrestled_today:0,prior_day_matches:0,last_bout_ended_ms:0,updated_at_ms:this.now()})}for(const a of new Set([...this.athletes.values()].map(r=>`${r.division_id}:${r.weight_class_id}`))){const[r,o]=a.split(":");this.generateCppCompatibleBracketForClass(o,r)}let s=0;for(const a of n)this.simActionQueue.push(()=>{const{event:r,state:o,timer:l,projection:c,matId:d}=a,_=Math.floor(a.line.at_ms/864e5);for(;s<_;)this.advanceCompetitionDay(r.audit_time_ms),s+=1;const m=this.bouts.get(r.match_id);if(!m)throw new Error(`Native bracket is missing ${r.match_id}`);if(m.red_athlete_id=String(c.red_athlete_id),m.green_athlete_id=String(c.green_athlete_id),m.assigned_mat_id=d,m.authority_epoch=r.authority_epoch,m.assignment_revision=r.assignment_revision,m.delegated_android_device_id=r.signer_key_id,m.period_number=Number(o.period),m.clock_remaining_ms=Number(l.remaining_ms),m.clock_running=l.running===!0,m.red_score=Number(o.red_score),m.green_score=Number(o.green_score),c.confirmed===!0){const u=["","DEC","MD","TF","FALL","DQ","INJURY_DEFAULT","FORFEIT","MEDICAL_FORFEIT"][Number(o.win_type)];if(!u||o.bout_ended!==!0||![0,1].includes(Number(o.winner)))throw new Error("Invalid native confirmed result");this.recordMatsideConfirmedResult(m.match_id,Number(o.winner)===0?m.red_athlete_id:m.green_athlete_id,u,m.red_score,m.green_score,r.authority_epoch,r.audit_time_ms)}else m.lifecycle=o.bout_ended===!0?E.EndedLocal:E.InProgress;return this.simSignedEventsProcessed++,this.simPhase="Verified Native Campaign Replay",{stepIndex:this.simStepCursor,phase:this.simPhase,actorRole:"SCOREKEEPER",matId:d,matchId:r.match_id,sequence:r.sequence,signerKeyId:r.signer_key_id,eventIdHex:he(r.event_id),summary:`Verified ${r.event_type}: ${r.match_id} (${m.red_score}–${m.green_score})`,atSimulatedMs:a.line.at_ms}});return this.simActionQueue.push(()=>{for(const a of this.bouts.values())a.is_true_second_challenge&&a.lifecycle!==E.ResultAccepted&&a.red_athlete_id&&a.green_athlete_id&&(a.is_bye=!0,a.lifecycle=E.ResultAccepted,a.winner_athlete_id=a.red_athlete_id,a.loser_athlete_id=a.green_athlete_id,a.win_type="DEC",a.completed_at_ms=n.at(-1).line.at_ms);return this.simPhase="Phase 4: Verified Native Campaign Replay Complete",{stepIndex:this.simStepCursor,phase:this.simPhase,actorRole:"OFFICIAL",summary:`Verified ${n.length} native packets. Snapshot files require separate manifest verification.`,atSimulatedMs:n.at(-1).line.at_ms}}),this.simTotalSteps=this.simActionQueue.length,this.simPhase="Verified Native Campaign Ready",this.publishAndSave(),{totalSteps:this.simTotalSteps,traceCount:n.length}}stepSimulationTick(e=1){const i=[],t=Math.max(1,Math.floor(e)),n=this.isSeeding;this.isSeeding=!0;try{for(let a=0;a<t;a++){if(this.simStepCursor>=this.simActionQueue.length){this.simActive=!1;break}const r=this.simActionQueue[this.simStepCursor];this.simStepCursor+=1;const o=r();this.simLatestEventSummary=o.summary,o.eventIdHex&&(this.simLatestEventIdHex=o.eventIdHex),this.simTelemetryLog=[o,...this.simTelemetryLog].slice(0,40),i.push(o)}}finally{this.isSeeding=n}const s=this.simStepCursor>=this.simActionQueue.length;return s&&(this.simActive=!1),this.publishAndSave(),{done:s,entries:i}}getSimPublicStatus(){let e=0;for(const i of this.bouts.values())i.lifecycle===E.ResultAccepted&&!i.is_bye&&e++;return{active:this.simActive,phase:this.simPhase,stepCursor:this.simStepCursor,totalSteps:this.simTotalSteps,acceptedBouts:e,signedEventsProcessed:this.simSignedEventsProcessed,spectatorNodes:this.simSpectatorNodes,bleacherDeliveries:this.simBleacherDeliveries,latestEventSummary:this.simLatestEventSummary,latestEventIdHex:this.simLatestEventIdHex,cppSnapshotReady:this.simCppSnapshotReady,cppPublisherKeyHex:this.simCppPublisherKeyHex}}computeBracketStandings(e,i){const t=(i??"").trim().toUpperCase(),n=Array.from(this.athletes.values()).filter(d=>d.weight_class_id===e&&(!t||t==="ALL"||(d.division_id||"VARSITY").toUpperCase()===t)&&d.check_in_stage===Q.Eligible&&d.weigh_in_eligible&&d.medically_cleared),s=Array.from(this.bouts.values()).filter(d=>d.weight_class_id===e&&(!t||t==="ALL"||(d.division_id||"VARSITY").toUpperCase()===t)),a=s.length>0&&s.every(re),r=new Map;for(const d of n)r.set(d.athlete_id,{place:0,athlete_id:d.athlete_id,public_display_name:d.public_display_name,team_id:d.team_id,team_name:d.team_name,seed_rank:d.seed_rank,wins:0,losses:0,matches_played:0,falls_forfeits_dq:0,tech_falls:0,major_decisions:0,decisions:0,bonus_points:0,points_scored:0,points_allowed:0,bracket_complete:a});const o=new Map;for(const d of s){if(d.is_bye||!re(d))continue;const _=r.get(d.winner_athlete_id),m=r.get(d.loser_athlete_id),v=d.winner_athlete_id===d.red_athlete_id,u=v?d.red_score:d.green_score,f=v?d.green_score:d.red_score;if(_&&(_.wins+=1,_.matches_played+=1,_.points_scored+=u,_.points_allowed+=f,d.win_type==="FALL"||d.win_type==="FORFEIT"||d.win_type==="INJURY_DEFAULT"||d.win_type==="DQ"?(_.falls_forfeits_dq+=1,_.bonus_points+=2):d.win_type==="TF"?(_.tech_falls+=1,_.bonus_points+=1.5):d.win_type==="MD"?(_.major_decisions+=1,_.bonus_points+=1):_.decisions+=1),m&&(m.losses+=1,m.matches_played+=1,m.points_scored+=f,m.points_allowed+=u),d.winner_athlete_id&&d.loser_athlete_id){const p=`${d.winner_athlete_id}:${d.loser_athlete_id}`;o.set(p,(o.get(p)??0)+1)}}const l=new Map;for(const d of r.values()){const _=`${d.wins}:${d.losses}`;l.set(_,(l.get(_)??0)+1)}const c=Array.from(r.values()).sort((d,_)=>{if(_.wins!==d.wins)return _.wins-d.wins;if(d.losses!==_.losses)return d.losses-_.losses;if((l.get(`${d.wins}:${d.losses}`)??0)===2){const u=o.get(`${d.athlete_id}:${_.athlete_id}`)??0,f=o.get(`${_.athlete_id}:${d.athlete_id}`)??0;if(u!==f)return f-u}if(_.bonus_points!==d.bonus_points)return _.bonus_points-d.bonus_points;if(_.falls_forfeits_dq!==d.falls_forfeits_dq)return _.falls_forfeits_dq-d.falls_forfeits_dq;if(_.tech_falls!==d.tech_falls)return _.tech_falls-d.tech_falls;if(_.major_decisions!==d.major_decisions)return _.major_decisions-d.major_decisions;const m=d.points_scored-d.points_allowed,v=_.points_scored-_.points_allowed;return v!==m?v-m:_.points_scored!==d.points_scored?_.points_scored-d.points_scored:d.seed_rank-_.seed_rank||d.athlete_id.localeCompare(_.athlete_id)});return c.forEach((d,_)=>{d.place=_+1}),c}static PLACEMENT_POINTS_BY_RANK={1:16,2:12,3:9,4:7,5:5,6:3,7:2,8:1};computePlacementByAthleteForGroup(e,i,t){const n=new Map;if(t.length===0)return n;if(t.some(o=>o.format===J.RoundRobinPool)){if(t.length===1&&t[0].is_bye&&re(t[0])){const l=t[0].winner_athlete_id;return l&&!this.isWithdrawn(l)&&n.set(l,1),n}const o=t.filter(l=>!l.is_bye);return o.length>0&&o.every(re)&&this.computeBracketStandings(i,e).slice(0,8).forEach((c,d)=>{(d>0||c.wins>0)&&!this.isWithdrawn(c.athlete_id)&&n.set(c.athlete_id,d+1)}),n}if(t.some(o=>o.format===J.BestOfThree)){const o=t.filter(l=>!l.is_bye);if(t.every(re)&&o.length>0){const l=new Map,c=new Set;for(const _ of o)_.red_athlete_id&&c.add(_.red_athlete_id),_.green_athlete_id&&c.add(_.green_athlete_id),_.winner_athlete_id&&l.set(_.winner_athlete_id,(l.get(_.winner_athlete_id)??0)+1);const d=[...c].sort((_,m)=>(l.get(m)??0)-(l.get(_)??0)||_.localeCompare(m));d[0]&&(l.get(d[0])??0)>=2&&!this.isWithdrawn(d[0])&&(n.set(d[0],1),d[1]&&!this.isWithdrawn(d[1])&&(o.some(m=>m.loser_athlete_id===d[1]&&m.win_type==="DQ")||n.set(d[1],2)))}return n}const s=t.find(o=>o.is_true_second_challenge&&o.placement_rank===2),a=t.find(o=>o.is_placement_bout&&o.placement_rank===1&&!o.is_true_second_challenge&&re(o));a&&(a.is_bye&&a.winner_athlete_id&&!a.green_athlete_id?this.isWithdrawn(a.winner_athlete_id)||n.set(a.winner_athlete_id,1):!a.is_bye&&a.winner_athlete_id&&(this.isWithdrawn(a.winner_athlete_id)||n.set(a.winner_athlete_id,1),a.loser_athlete_id&&!s&&!this.isWithdrawn(a.loser_athlete_id)&&a.win_type!=="DQ"&&n.set(a.loser_athlete_id,2)));const r=t.find(o=>o.is_placement_bout&&o.placement_rank===3&&re(o));r&&(!r.is_bye&&r.winner_athlete_id?(!s&&!this.isWithdrawn(r.winner_athlete_id)&&n.set(r.winner_athlete_id,3),r.loser_athlete_id&&!this.isWithdrawn(r.loser_athlete_id)&&r.win_type!=="DQ"&&n.set(r.loser_athlete_id,4)):r.is_bye&&r.winner_athlete_id&&!r.green_athlete_id&&!s&&!this.isWithdrawn(r.winner_athlete_id)&&n.set(r.winner_athlete_id,3)),s&&re(s)&&(s.winner_athlete_id&&!this.isWithdrawn(s.winner_athlete_id)&&n.set(s.winner_athlete_id,2),s.loser_athlete_id&&!this.isWithdrawn(s.loser_athlete_id)&&s.win_type!=="DQ"?n.set(s.loser_athlete_id,3):s.is_bye&&!s.winner_athlete_id&&a&&!a.is_bye&&a.loser_athlete_id&&!this.isWithdrawn(a.loser_athlete_id)&&a.win_type!=="DQ"&&n.set(a.loser_athlete_id,2));for(const o of[5,7]){const l=t.find(c=>c.is_placement_bout&&c.placement_rank===o&&re(c));l&&(!l.is_bye&&l.winner_athlete_id?(this.isWithdrawn(l.winner_athlete_id)||n.set(l.winner_athlete_id,o),l.loser_athlete_id&&!this.isWithdrawn(l.loser_athlete_id)&&l.win_type!=="DQ"&&n.set(l.loser_athlete_id,o+1)):l.is_bye&&l.winner_athlete_id&&!l.green_athlete_id&&(this.isWithdrawn(l.winner_athlete_id)||n.set(l.winner_athlete_id,o)))}return n}computeTeamStandings(){const e=lt(this.bouts.values(),jt),i=new Map;for(const s of this.athletes.values())i.has(s.team_id)||i.set(s.team_id,{rank:0,team_id:s.team_id,team_name:s.team_name,total_points:0,advancement_points:0,placement_points:0,bonus_points:0,falls_forfeits_dq:0,tech_falls:0,major_decisions:0,first_place_winners:0});const t=new Map;for(const s of this.bouts.values()){const a=(s.division_id||"VARSITY").trim().toUpperCase()||"VARSITY",r=`${a}:${s.weight_class_id}`,o=t.get(r)??{divisionId:a,weightClassId:s.weight_class_id,bouts:[]};if(o.bouts.push(s),t.set(r,o),!re(s)||!s.winner_athlete_id||s.is_bye)continue;const l=this.athletes.get(s.winner_athlete_id);if(!l)continue;const c=i.get(l.team_id);if(!c)continue;const d=s.is_consolation?1:2;c.advancement_points+=d+(e.get(s.match_id)?.earnedPoints??0);let _=0;s.win_type==="FALL"||s.win_type==="FORFEIT"||s.win_type==="MEDICAL_FORFEIT"||s.win_type==="INJURY_DEFAULT"||s.win_type==="DQ"?(_=2,c.falls_forfeits_dq+=1):s.win_type==="TF"?(_=1.5,c.tech_falls+=1):s.win_type==="MD"&&(_=1,c.major_decisions+=1),c.bonus_points+=_,c.total_points=c.advancement_points+c.placement_points+c.bonus_points}for(const s of t.values()){const a=this.computePlacementByAthleteForGroup(s.divisionId,s.weightClassId,s.bouts);for(const[r,o]of a){const l=se.PLACEMENT_POINTS_BY_RANK[o]??0;if(l<=0)continue;const c=this.athletes.get(r),d=c&&i.get(c.team_id);d&&(d.placement_points+=l,o===1&&(d.first_place_winners+=1),d.total_points=d.advancement_points+d.placement_points+d.bonus_points)}}const n=Array.from(i.values()).sort((s,a)=>a.total_points-s.total_points||a.falls_forfeits_dq-s.falls_forfeits_dq||a.tech_falls-s.tech_falls||a.major_decisions-s.major_decisions||a.first_place_winners-s.first_place_winners||s.team_name.localeCompare(a.team_name));return n.forEach((s,a)=>{s.rank=a+1}),n}computeElapsedBoutTimeMs(e,i,t){if(typeof e!="number"||!Number.isInteger(e)||e<1||e>9||typeof i!="number"||!Number.isInteger(i)||i<0)return null;const n=this.rulesBundle,s=l=>l===1?n.period_1_duration_ms:l===2?n.period_2_duration_ms:l===3?n.period_3_duration_ms:l===4?n.sv_duration_ms:l<=8?n.tb_period_duration_ms:n.utb_duration_ms,a=s(e),r=t==="event"&&e===1&&i>a?12e4:a;if(i>r||t==="bout"&&(i===0||i===r))return null;let o=r-i;for(let l=1;l<e;l++)o+=s(l);return o>0?o:null}computeWrestlerStats(){const e=lt(this.bouts.values(),jt),i=this.getOwVoteTallies(),t=new Map;for(const o of this.athletes.values()){const l=(o.division_id||"VARSITY").trim().toUpperCase()||"VARSITY";t.set(o.athlete_id,{tournament_id:this.tournamentId,tournament_name:this.tournamentName,event_date:this.eventDate,venue:this.venue,athlete_id:o.athlete_id,wrestler_name:o.public_display_name,team_id:o.team_id,team_name:o.team_name,division_id:l,weight_class_lbs:o.weight_class_id,seed_rank:o.seed_rank,flowrestling_id:o.flowrestling_id??"",check_in_status:Et[o.check_in_stage]??String(o.check_in_stage),weigh_in_eligible:o.weigh_in_eligible,medically_cleared:o.medically_cleared,bracket_format:"UNSCHEDULED",bracket_complete:!1,placement:null,standing_rank:null,matches_played:0,wins:0,losses:0,win_pct:0,byes_received:0,championship_wins:0,championship_losses:0,consolation_wins:0,consolation_losses:0,matches_wrestled_today:o.matches_wrestled_today,prior_day_matches:o.prior_day_matches,wins_by_fall:0,wins_by_tech_fall:0,wins_by_major_decision:0,wins_by_decision:0,wins_by_forfeit:0,wins_by_injury_default:0,wins_by_dq:0,bonus_wins:0,bonus_win_pct:0,losses_by_fall:0,losses_by_tech_fall:0,losses_by_major_decision:0,losses_by_decision:0,losses_by_forfeit_default_dq:0,match_points_scored:0,match_points_allowed:0,match_point_differential:0,avg_match_points_scored:0,avg_match_points_allowed:0,event_logged_bouts:0,takedowns_scored:0,takedowns_allowed:0,escapes_scored:0,escapes_allowed:0,reversals_scored:0,reversals_allowed:0,near_falls_2_scored:0,near_falls_3_scored:0,near_falls_4_scored:0,near_falls_total_scored:0,near_falls_allowed:0,cautions_committed:0,stalling_calls_committed:0,penalties_committed:0,fastest_fall_ms:null,team_advancement_points:0,team_bonus_points:0,team_placement_points:0,team_points_total:0,ow_votes:i[o.athlete_id]??0})}const n=new Map;for(const o of this.bouts.values()){const l=(o.division_id||"VARSITY").trim().toUpperCase()||"VARSITY",c=`${l}:${o.weight_class_id}`,d=n.get(c)??{divisionId:l,weightClassId:o.weight_class_id,bouts:[]};if(d.bouts.push(o),n.set(c,d),!re(o))continue;if(o.is_bye){if(o.winner_athlete_id&&!o.green_athlete_id&&!o.loser_athlete_id&&!o.is_true_second_challenge){const b=t.get(o.winner_athlete_id);b&&(b.byes_received+=1)}continue}const _=t.get(o.winner_athlete_id),m=o.loser_athlete_id?t.get(o.loser_athlete_id):void 0,v=o.winner_athlete_id===o.red_athlete_id,u=v?o.red_score:o.green_score,f=v?o.green_score:o.red_score,p=o.win_type.toUpperCase();if(_){_.matches_played+=1,_.wins+=1,o.is_consolation?_.consolation_wins+=1:_.championship_wins+=1,_.match_points_scored+=u,_.match_points_allowed+=f;const b=o.is_consolation?1:2;_.team_advancement_points+=b+(e.get(o.match_id)?.earnedPoints??0);let g=0;p==="FALL"?(_.wins_by_fall+=1,_.bonus_wins+=1,g=2):p==="FORFEIT"||p==="MEDICAL_FORFEIT"?(_.wins_by_forfeit+=1,_.bonus_wins+=1,g=2):p==="INJURY_DEFAULT"?(_.wins_by_injury_default+=1,_.bonus_wins+=1,g=2):p==="DQ"?(_.wins_by_dq+=1,_.bonus_wins+=1,g=2):p==="TF"?(_.wins_by_tech_fall+=1,_.bonus_wins+=1,g=1.5):p==="MD"?(_.wins_by_major_decision+=1,_.bonus_wins+=1,g=1):_.wins_by_decision+=1,_.team_bonus_points+=g}m&&(m.matches_played+=1,m.losses+=1,o.is_consolation?m.consolation_losses+=1:m.championship_losses+=1,m.match_points_scored+=f,m.match_points_allowed+=u,p==="FALL"?m.losses_by_fall+=1:p==="TF"?m.losses_by_tech_fall+=1:p==="MD"?m.losses_by_major_decision+=1:p==="FORFEIT"||p==="MEDICAL_FORFEIT"||p==="INJURY_DEFAULT"||p==="DQ"?m.losses_by_forfeit_default_dq+=1:m.losses_by_decision+=1)}for(const o of n.values()){const{divisionId:l,weightClassId:c,bouts:d}=o,_=d[0]?.format??"UNSCHEDULED",m=d.length>0&&d.every(re),v=this.computeBracketStandings(c,l);for(const p of this.athletes.values())if(((p.division_id||"VARSITY").trim().toUpperCase()||"VARSITY")===l&&p.weight_class_id===c){const g=t.get(p.athlete_id);g&&(g.bracket_format=_,g.bracket_complete=m)}const u=this.computePlacementByAthleteForGroup(l,c,d);for(const[p,b]of u.entries()){const g=t.get(p);g&&(g.placement=b,g.team_placement_points+=se.PLACEMENT_POINTS_BY_RANK[b]??0)}if(d.some(p=>p.format===J.RoundRobinPool))for(const p of v){const b=t.get(p.athlete_id);b&&(b.standing_rank=p.place)}else{const p=new Map;v.forEach((g,k)=>p.set(g.athlete_id,k+1)),v.map(g=>g.athlete_id).sort((g,k)=>{const I=u.get(g)??Number.MAX_SAFE_INTEGER,R=u.get(k)??Number.MAX_SAFE_INTEGER;return I!==R?I-R:(p.get(g)??0)-(p.get(k)??0)}).forEach((g,k)=>{const I=t.get(g);I&&(I.standing_rank=k+1)})}}const s=new Map,a=new Set;for(const o of this.protocolJournal)if(o.wireHex)try{const l=xe(le(o.wireHex)),c=`${l.stream_id}:${l.authority_epoch}:${l.sequence}`;if(a.has(c))continue;a.add(c);const d=this.bouts.get(l.match_id);if(!d||d.is_bye||!re(d)||l.assignment_revision!==d.assignment_revision)continue;const _=l.payload instanceof Uint8Array?ke(l.payload):l.payload;if(!_||typeof _!="object"||Array.isArray(_)||_ instanceof Uint8Array||_ instanceof Map)continue;const m=_,v=m.public_state,u=v&&typeof v=="object"&&!Array.isArray(v)&&!(v instanceof Uint8Array)&&!(v instanceof Map)?v:null,f=s.get(d.match_id)??[];l.event_type==="MATCH_UNDO_LAST_ACTION"?f.pop():f.push({eventType:l.event_type,payload:m,publicState:u}),s.set(d.match_id,f)}catch{}for(const o of this.bouts.values()){if(o.is_bye||!re(o))continue;const l=s.get(o.match_id)??[],c=t.get(o.red_athlete_id),d=t.get(o.green_athlete_id);l.length>0&&(c&&(c.event_logged_bouts+=1),d&&(d.event_logged_bouts+=1));const _=o.winner_athlete_id===o.red_athlete_id?"RED":o.winner_athlete_id===o.green_athlete_id?"GREEN":"",m=_&&o.win_type.toUpperCase()==="FALL"?t.get(o.winner_athlete_id):void 0;let v=null;for(const f of l){const{eventType:p,payload:b,publicState:g}=f,k=String(b.actor??b.corner??"").toUpperCase(),I=k==="RED"?c:k==="GREEN"?d:void 0,R=k==="RED"?d:k==="GREEN"?c:void 0,M=p==="MATCH_SCORING_ACTION"?String(b.action??"").toUpperCase():String(b.command_type??b.action??p).toUpperCase();if(I)switch(M){case"TAKEDOWN_3":I.takedowns_scored+=1,R&&(R.takedowns_allowed+=1);break;case"ESCAPE_1":I.escapes_scored+=1,R&&(R.escapes_allowed+=1);break;case"REVERSAL_2":I.reversals_scored+=1,R&&(R.reversals_allowed+=1);break;case"NEAR_FALL_2":case"NEARFALL_2":I.near_falls_2_scored+=1,I.near_falls_total_scored+=1,R&&(R.near_falls_allowed+=1);break;case"NEAR_FALL_3":case"NEARFALL_3":I.near_falls_3_scored+=1,I.near_falls_total_scored+=1,R&&(R.near_falls_allowed+=1);break;case"NEAR_FALL_4":case"NEARFALL_4":case"NEAR_FALL_INJURY_OR_SCREAMING_4":I.near_falls_4_scored+=1,I.near_falls_total_scored+=1,R&&(R.near_falls_allowed+=1);break;case"CAUTION":I.cautions_committed+=1;break;case"STALLING":case"STALL_WARN":I.stalling_calls_committed+=1;break;case"TECHNICAL_VIOLATION":case"ILLEGAL_HOLD":case"UNNECESSARY_ROUGHNESS":case"UNSPORTSMANLIKE_WRESTLER":case"UNSPORTSMANLIKE_COACH":case"FLAGRANT_MISCONDUCT":I.penalties_committed+=1;break}if(m&&k===_&&(p==="MATCH_ENDING_ACTION"&&String(b.ending_type??"").toUpperCase()==="FALL"||M==="PIN_FALL")){const y=this.computeElapsedBoutTimeMs(g?.period??b.period,g?.clock_remaining_ms??b.clock_remaining_ms,"event");y!==null&&(v=Math.min(v??y,y))}}if(!m)continue;const u=v??(o.clock_running?null:this.computeElapsedBoutTimeMs(o.period_number,o.clock_remaining_ms,"bout"));u!==null&&(m.fastest_fall_ms=Math.min(m.fastest_fall_ms??u,u))}const r=Array.from(t.values());for(const o of r)o.win_pct=o.matches_played>0?o.wins/o.matches_played:0,o.bonus_win_pct=o.wins>0?o.bonus_wins/o.wins:0,o.match_point_differential=o.match_points_scored-o.match_points_allowed,o.avg_match_points_scored=o.matches_played>0?o.match_points_scored/o.matches_played:0,o.avg_match_points_allowed=o.matches_played>0?o.match_points_allowed/o.matches_played:0,o.team_points_total=o.team_advancement_points+o.team_bonus_points+o.team_placement_points;return r.sort((o,l)=>{if(o.division_id!==l.division_id)return o.division_id.localeCompare(l.division_id);const c=Number(o.weight_class_lbs)-Number(l.weight_class_lbs);if(Number.isFinite(c)&&c!==0)return c;if(o.weight_class_lbs!==l.weight_class_lbs)return o.weight_class_lbs.localeCompare(l.weight_class_lbs);const d=o.placement??Number.MAX_SAFE_INTEGER,_=l.placement??Number.MAX_SAFE_INTEGER;if(d!==_)return d-_;const m=o.standing_rank??Number.MAX_SAFE_INTEGER,v=l.standing_rank??Number.MAX_SAFE_INTEGER;return m!==v?m-v:o.seed_rank!==l.seed_rank?o.seed_rank-l.seed_rank:o.wrestler_name!==l.wrestler_name?o.wrestler_name.localeCompare(l.wrestler_name):o.athlete_id.localeCompare(l.athlete_id)}),r}exportWrestlerStatsCsv(){const e=this.computeWrestlerStats(),i=[Rn.join(",")];for(const t of e){const n=[t.tournament_id,t.tournament_name,t.event_date,t.venue,t.athlete_id,t.wrestler_name,t.team_id,t.team_name,t.division_id,t.weight_class_lbs,t.seed_rank,t.flowrestling_id,t.check_in_status,t.weigh_in_eligible,t.medically_cleared,t.bracket_format,t.bracket_complete,t.placement??"",t.standing_rank??"",t.matches_played,t.wins,t.losses,t.win_pct.toFixed(3),t.byes_received,t.championship_wins,t.championship_losses,t.consolation_wins,t.consolation_losses,t.matches_wrestled_today,t.prior_day_matches,t.wins_by_fall,t.wins_by_tech_fall,t.wins_by_major_decision,t.wins_by_decision,t.wins_by_forfeit,t.wins_by_injury_default,t.wins_by_dq,t.bonus_wins,t.bonus_win_pct.toFixed(3),t.losses_by_fall,t.losses_by_tech_fall,t.losses_by_major_decision,t.losses_by_decision,t.losses_by_forfeit_default_dq,t.match_points_scored,t.match_points_allowed,t.match_point_differential,t.avg_match_points_scored.toFixed(2),t.avg_match_points_allowed.toFixed(2),t.event_logged_bouts,t.takedowns_scored,t.takedowns_allowed,t.escapes_scored,t.escapes_allowed,t.reversals_scored,t.reversals_allowed,t.near_falls_2_scored,t.near_falls_3_scored,t.near_falls_4_scored,t.near_falls_total_scored,t.near_falls_allowed,t.cautions_committed,t.stalling_calls_committed,t.penalties_committed,t.fastest_fall_ms!==null?(t.fastest_fall_ms/1e3).toFixed(1):"",t.team_advancement_points.toFixed(1),t.team_bonus_points.toFixed(1),t.team_placement_points.toFixed(1),t.team_points_total.toFixed(1),t.ow_votes].map(s=>se.escapeCsvCell(s));i.push(n.join(","))}return i.join(`
`)+`
`}buildSignedPublicProjection(e=!1){const i=Array.from(this.athletes.values()).sort((d,_)=>d.weight_class_id.localeCompare(_.weight_class_id)||d.seed_rank-_.seed_rank),t=new Map;for(const d of this.mats.keys()){const _=this.matQueue(d);_[0]&&_[0].lifecycle>=E.Ready&&_.forEach((m,v)=>t.set(m.match_id,v+1))}const n=[...this.bouts.values()].sort((d,_)=>d.bout_number-_.bout_number).map(d=>t.has(d.match_id)?{...d,mat_queue_order:t.get(d.match_id)}:d),s=Array.from(this.mats.values()).sort((d,_)=>d.mat_id-_.mat_id),a=this.computeTeamStandings(),r={};for(const[d,_]of this.bracketFrozenByClass.entries())r[d]=_;const o=this.now(),l={...e?{allow_reset:!0}:{},tournament_id:this.tournamentId,tournament_name:this.tournamentName,rules_version:this.rulesVersion,growth_allowance_tenths:this.growthAllowanceTenths,consecutive_day_allowance_tenths:this.consecutiveDayAllowanceTenths,mat_count:this.matCount,snapshot_epoch:this.snapshotEpoch,control_sequence_head:this.controlSequenceHead,published_at_ms:o,publisher_pubkey_hex:he(this.keyPair.publicKey),payload_sha256_hex:"",signature_hex:"",athletes:i,bouts:n,mats:s,standings:a,bracket_frozen_by_class:r,...this.simActive||this.simTotalSteps>0||this.simStepCursor>0?{sim_status:this.getSimPublicStatus()}:{},p2p_topology:this.getVenueRoomTopologySummary(),revoked_certificate_ids:[...this.revokedCertificateIds],ow_vote_tallies:this.getOwVoteTallies()},c=se.projectionBytes(l);return l.payload_sha256_hex=he(Me(c)),l.signature_hex=he(Oe(Ie,c,this.keyPair.privateKey)),structuredClone(l)}static projectionBytes(e){const{signature_hex:i,payload_sha256_hex:t,...n}=e;return Ke({state_digest_hex:he(Me(new TextEncoder().encode(JSON.stringify(n))))})}static verifySignedPublicProjection(e){try{if(!js(e))return!1;const i=this.projectionBytes(e);return he(Me(i))===e.payload_sha256_hex&&gt(Ie,i,le(e.publisher_pubkey_hex),le(e.signature_hex))}catch{return!1}}publishAndSave(e=!1,i=!1){if(this.controlSequenceHead+=1,this.snapshotEpoch+=1,this.isSeeding)return null;const t=this.buildSignedPublicProjection(i);return this.broadcastEnabled?(this.saveToStorage(),this.broadcastEnvelope(t,e),this.onStateChanged?.(),t):(this.broadcastLiveRooms(JSON.stringify(t)),this.onStateChanged?.(),t)}currentBracketPackets(){const e=Math.max(this.snapshotEpoch,this.controlSequenceHead);if(this.publicationTournamentId===this.tournamentId&&this.publicationRevision===e)return this.publicationPackets;const i=new Map;for(const t of this.protocolJournal){if(!t.wireHex)continue;const n=xe(le(t.wireHex));if(n.tournament_id!==this.tournamentId||!this.bouts.has(n.match_id))continue;const s=i.get(n.match_id)??[];s.push(n),i.set(n.match_id,s)}return this.publicationPackets=Os(this.buildSignedPublicProjection(),this.keyPair.publicKey,this.keyPair.privateKey,this.rulesHash,i),this.publicationTournamentId=this.tournamentId,this.publicationRevision=e,this.publicationPackets}bracketSync(e,i){const t=new TextDecoder("utf-8",{fatal:!0}).decode(e);if(t&&!/^[A-Za-z0-9_-]{1,100}$/.test(t))throw new Error("Invalid bracket ID");if(t&&i.startsWith("subtree:b:")&&i!==`subtree:b:${t}`)throw new Error("Wrong bracket room");const n=this.currentBracketPackets(),s=n.get("tournament-summary::0"),a=n.get("mat-board::0"),r=n.get(`bracket-full:${t}:0`);return Ke([s,...r?[r]:[],a].map(({topic:o,bytes:l})=>({topic:o,bytes:l})),{maxBytes:4194304})}pendingBroadcastJson=null;broadcastMicrotaskScheduled=!1;broadcastLiveRooms(e){this.liveConsoleRole!=="primary"||this.overlayMesh.liveRooms.size===0||(this.pendingBroadcastJson=e,!this.broadcastMicrotaskScheduled&&(this.broadcastMicrotaskScheduled=!0,queueMicrotask(()=>{this.broadcastMicrotaskScheduled=!1;const i=this.pendingBroadcastJson;if(this.pendingBroadcastJson=null,!i||this.liveConsoleRole!=="primary")return;const t=new TextEncoder().encode(i);for(const[n,s]of this.overlayMesh.liveRooms)try{if(n===He)s.send("control-state",this.signedControlSnapshot(),Ae.CurrentStateUnorderedNewest);else if(n.startsWith("subtree:")&&[...s.members.keys()].some(a=>a!==this.livePeerId)){s.send("public-projection",t,Ae.CurrentStateUnorderedNewest);const a=this.livePacketHeads.get(n),r=new Map,o=n.startsWith("subtree:b:")?n.slice(10):"",l=this.currentBracketPackets(),c=["tournament-summary::0","mat-board::0"],d=`bracket-state:${o}:0`;for(const _ of new Set([...c,d,...l.keys()])){const m=l.get(_);if(!m||m.topic==="bracket-full"||m.bracketId&&m.bracketId!==o&&(o||m.topic!=="mat-update"))continue;const v=a?.get(_);(!v||!Se(v.content,m.content))&&(a||m.topic!=="bout-update")&&s.send(m.topic,m.bytes,Ae.CurrentStateUnorderedNewest),r.set(_,m)}this.livePacketHeads.set(n,r)}}catch(a){this.liveTransportError=String(a)}})))}broadcastEnvelope(e,i=!1){if(this.liveConsoleRole!=="primary"||!this.broadcastEnabled||this.isSeeding)return;const t=JSON.stringify(e);this.broadcastLiveRooms(t);try{this.broadcastChannel?.postMessage(e)}catch{}if(this.publicNostrRelayPublishingEnabled&&e.athletes.length>0&&this.publishProjectionToPublicNostrRelays(e),!(typeof window>"u")){for(const n of new Set([window.location.origin,this.activeVenueOrigin])){const s=new URL(n);if(/github\.io$/i.test(s.hostname))continue;const a=i||this.pendingProjections.get(s.origin)?.override===!0;this.pendingProjections.set(s.origin,{json:t,override:a})}this.flushPendingProjections()}}async flushPendingProjections(e,i=!1){if(!(typeof window>"u"||!this.broadcastEnabled||this.liveConsoleRole!=="primary")){if(e){const t=new URL(e).origin;i&&(this.athletes.size||this.bouts.size)&&!this.linkedVenuePubkeyHex&&!/github\.io$/i.test(new URL(t).hostname)&&!this.pendingProjections.has(t)&&this.pendingProjections.set(t,{json:JSON.stringify(this.buildSignedPublicProjection()),override:!1})}await Promise.all([...this.pendingProjections.keys()].map(t=>{const n=this.projectionFlushes.get(t);if(n)return n;const s=(async()=>{for(;this.liveConsoleRole==="primary";){const a=this.pendingProjections.get(t);if(!a)return;const r={"Content-Type":"application/json"};this.officialsPassword&&(r["x-openmat-officials-password"]=this.officialsPassword),a.override&&(r["x-openmat-authority-override"]="1");try{const o=await fetch(new URL("/api/openmat-live-projection",t),{method:"POST",headers:r,body:a.json,signal:AbortSignal.timeout(4e3)});if(!o.ok)throw new Error(`Projection upload failed with HTTP ${o.status}`);this.pendingProjections.get(t)===a&&this.pendingProjections.delete(t);try{const l=await o.json();l?.envelope&&this.pendingProjectionPostCount===0&&this.syncLiveProjectionFromVenue(l.envelope)}catch{}}catch(o){this.liveTransportError=String(o);return}}})().finally(()=>this.projectionFlushes.delete(t));return this.projectionFlushes.set(t,s),s}))}}saveToStorage(){if(!(!this.broadcastEnabled||typeof localStorage>"u"))try{const e=this.storageState();localStorage.setItem(Ft,JSON.stringify(e))}catch(e){throw new Error(`Authority state could not be persisted: ${String(e)}`)}}storageState(){return{tournamentId:this.tournamentId,tournamentName:this.tournamentName,eventDate:this.eventDate,venue:this.venue,rulesVersion:this.rulesVersion,growthAllowanceTenths:this.growthAllowanceTenths,consecutiveDayAllowanceTenths:this.consecutiveDayAllowanceTenths,matCount:this.matCount,snapshotEpoch:this.snapshotEpoch,controlSequenceHead:this.controlSequenceHead,nextBoutNumber:this.nextBoutNumber,linkedVenuePubkeyHex:this.linkedVenuePubkeyHex,linkedVenueJoinQrUri:this.linkedVenueJoinQrUri,hasExternalVenueServer:this.hasExternalVenueServer,lastSyncedVenueEpochByPublisher:[...this.lastSyncedVenueEpochByPublisher],protocolJournal:this.protocolJournal,resultCorrections:this.resultCorrections,scratches:[...this.scratches],revokedCertificateIds:[...this.revokedCertificateIds],owVotes:[...this.owVotes],athletes:Array.from(this.athletes.entries()),pendingSelfRegistrations:Array.from(this.pendingSelfRegistrations.entries()),selfRegistrationDispositions:Array.from(this.selfRegistrationDispositions.entries()),privateWeighIns:Array.from(this.privateWeighIns.entries()),privateMedicals:Array.from(this.privateMedicals.entries()),bouts:Array.from(this.bouts.entries()),mats:Array.from(this.mats.entries()),bracketFrozenByClass:Array.from(this.bracketFrozenByClass.entries())}}loadFromStorage(e=!1){if(typeof localStorage>"u")return!1;try{const i=localStorage.getItem(Ft);if(!i)return!1;const t=JSON.parse(i);if(!t||!Array.isArray(t.athletes))throw new Error("Invalid stored roster");if(!Array.isArray(t.mats)||t.mats.length===0)throw new Error("Invalid stored mats");const n=t.tournamentName==="New tournament"&&t.athletes.length===0&&(!Array.isArray(t.bouts)||t.bouts.length===0)&&(!Array.isArray(t.protocolJournal)||t.protocolJournal.length===0);if(n){this.tournamentId=ne.tournamentId,this.tournamentName=ne.tournamentName,this.eventDate=ne.eventDate,this.venue=ne.venue,this.rulesVersion=ne.rulesVersion,this.growthAllowanceTenths=ne.growthAllowanceTenths,this.consecutiveDayAllowanceTenths=0,this.matCount=ne.matCount,this.mats=new Map;for(let o=1;o<=this.matCount;o++)this.mats.set(o,this.unprovisionedMat(o))}else this.tournamentId=t.tournamentId??this.tournamentId,this.tournamentName=t.tournamentName??this.tournamentName,this.eventDate=t.eventDate??this.eventDate,this.venue=t.venue??this.venue,this.rulesVersion=t.rulesVersion??this.rulesVersion,this.growthAllowanceTenths=t.growthAllowanceTenths??0,this.consecutiveDayAllowanceTenths=t.consecutiveDayAllowanceTenths??0,this.matCount=t.matCount??ne.matCount,this.mats=new Map(t.mats);this.snapshotEpoch=t.snapshotEpoch??1,this.controlSequenceHead=t.controlSequenceHead??1,this.nextBoutNumber=t.nextBoutNumber??101,n||(this.linkedVenuePubkeyHex=typeof t.linkedVenuePubkeyHex=="string"?t.linkedVenuePubkeyHex:this.linkedVenuePubkeyHex,this.linkedVenueJoinQrUri=typeof t.linkedVenueJoinQrUri=="string"?t.linkedVenueJoinQrUri:this.linkedVenueJoinQrUri),this.hasExternalVenueServer=t.hasExternalVenueServer??!!(this.linkedVenueJoinQrUri&&this.linkedVenuePubkeyHex&&this.linkedVenuePubkeyHex!==this.publisherPublicKeyHex),this.lastSyncedVenueEpochByPublisher=new Map(t.lastSyncedVenueEpochByPublisher??[]),this.athletes=new Map(t.athletes),this.pendingSelfRegistrations=new Map(t.pendingSelfRegistrations??[]),this.selfRegistrationDispositions=new Map(t.selfRegistrationDispositions??[]),this.privateWeighIns=new Map(t.privateWeighIns),this.privateMedicals=new Map(t.privateMedicals),this.bouts=new Map(t.bouts),this.bracketFrozenByClass=new Map(t.bracketFrozenByClass),this.resultCorrections=t.resultCorrections??[],this.scratches=new Map(t.scratches??[]),this.owVotes=new Map(t.owVotes??[]),this.revokedCertificateIds=new Set(t.revokedCertificateIds??[]);const s=t.protocolJournal??[],a=e&&s.length>=this.protocolJournal.length&&this.protocolJournal.every((o,l)=>{const c=s[l];return c&&c.wireHex===o.wireHex&&c.controlHeadHex===o.controlHeadHex&&c.mat?.certificate_id===o.mat?.certificate_id}),r=a?this.protocolJournal.length:0;a||(this.verifiers.clear(),this.knownProvisionHeads.clear());for(let o=r;o<s.length;o++){const l=s[o];if(l.mat&&this.registerMatDelegation(l.mat,!1),l.controlHeadHex){const c=this.verifiers.get(l.matId);if(!c)throw new Error("Provision head precedes mat delegation");c.markControlHeadKnown(le(l.controlHeadHex)),this.knownProvisionHeads.add(`${l.matId}:${l.controlHeadHex}`)}if(l.wireHex){const c=xe(le(l.wireHex)),d=Number(c.stream_id.split(":")[1]),_=this.verifiers.get(d);if(!_||_.verifyAndAccept(c,wt,Ee.ScoreMat,l.atMs,!0)!==Nt.Applied)throw new Error("Invalid persisted stream journal")}}return this.protocolJournal=s,!0}catch(i){throw new Error(`Stored authority state requires recovery: ${String(i)}`)}}}const Fi=/novice|jv|1-2-2/i,Cn=1800*1e3;function De(h,e,i){return Number.isFinite(h)?Math.min(i,Math.max(e,h)):e}function Ut(h="",e){const i=Fi.test(h),t={defaultAvgCycleMs:i?36e4:42e4,minAvgCycleMs:i?21e4:24e4,maxAvgCycleMs:i?6e5:72e4,minSampleMs:9e4,maxSampleMs:9e5,minInterCompletionGapMs:45e3,maxInterCompletionGapMs:12e5,changeoverMs:45e3,idleStagingBufferMs:6e4,period1Ms:i?6e4:12e4,period2Ms:12e4,period3Ms:12e4,ewmaAlpha:.18,matBlendWeight:.3,requiredRestMs:Cn};return e?{...t,...e}:t}function ve(h){return h===E.EndedLocal||h===E.LocallyConfirmed||h===E.ResultAccepted}function bt(h,e){const i=t=>t.mat_queue_order>0?t.mat_queue_order:Number.MAX_SAFE_INTEGER;return i(h)-i(e)||h.bout_number-e.bout_number}function ft(h){const e=(h??"").trim().toUpperCase();return e==="FORFEIT"||e==="MEDICAL_FORFEIT"||e==="BYE"}function Fe(h){return h.is_bye||(h.win_type??"").trim().toUpperCase()==="BYE"}function It(h,e){if(h.is_bye)return!0;if(h.match_id&&!h.red_athlete_id&&!h.green_athlete_id&&e.length>0){const i=e.filter(s=>s.winner_next_match_id===h.match_id||s.loser_next_match_id===h.match_id),t=i.some(s=>s.is_bye&&s.loser_next_match_id===h.match_id),n=i.filter(s=>!s.is_bye);if(t&&n.length<=1)return!0}return!1}function mi(h){if(!Number.isFinite(h)||h<=0)return"PT0S";if(h<6e4)return"PT1M";const e=Math.max(1,Math.round(h/6e4)),i=Math.floor(e/60),t=e%60;return i>0&&t>0?`PT${i}H${t}M`:i>0?`PT${i}H`:`PT${t}M`}let it;function An(){if(it!==void 0)return it;try{const h=Intl;if(typeof h?.DurationFormat=="function")return it=new h.DurationFormat("en-US",{style:"short"}),it}catch{}return it=null,null}function Yt(h){if(!Number.isFinite(h)||h<=0)return"Now";if(h<6e4)return"< 1 min";const e=Math.max(1,Math.round(h/6e4)),i=Math.floor(e/60),t=e%60,n=An();return n?`~${(i>0&&t>0?n.format({hours:i,minutes:t}):i>0?n.format({hours:i}):n.format({minutes:e})).replace(/,\s*/g," ")}`:i>0&&t>0?`~${i} hr ${t} min`:i>0?`~${i} hr`:`~${e} min`}function pi(h){if(!Number.isFinite(h)||h<=0)return"NOW";if(h<6e4)return"<1m";const e=Math.max(1,Math.round(h/6e4)),i=Math.floor(e/60),t=e%60;return i>0&&t>0?`~${i}h ${t}m`:i>0?`~${i}h`:`~${e}m`}function fi(h,e){if(e<=0)return"On mat now";if(e<6e4)return"Under 1 min";const i=Math.max(1,Math.floor(h/6e4)),t=Math.max(i,Math.ceil(e/6e4));if(i===t)return Yt(t*6e4);if(t>=60){const n=s=>{const a=Math.floor(s/60),r=s%60;return r>0?`${a}h ${r}m`:`${a}h`};return`${n(i)}–${n(t)}`}return`${i}–${t} min`}class Mn{overrides;trackedTournamentId="";observedStartMsByMatch=new Map;observedCompletedMsByMatch=new Map;constructor(e){this.overrides=e}reset(){this.trackedTournamentId="",this.observedStartMsByMatch.clear(),this.observedCompletedMsByMatch.clear()}estimateElapsedRegClockMs(e,i,t){const n=i.period1Ms+i.period2Ms+i.period3Ms,s=this.remainingRegulationClockMs(e,i,t);return De(n-s,0,n)}remainingRegulationClockMs(e,i,t){const n=Math.max(0,t),s=Math.max(1,Math.trunc(e.period_number||1));return s===1?Math.min(i.period1Ms,n)+i.period2Ms+i.period3Ms:s===2?Math.min(i.period2Ms,n)+i.period3Ms:s===3?Math.min(i.period3Ms,n):0}observeEnvelope(e,i=Date.now(),t){e.tournament_id!==this.trackedTournamentId&&(this.trackedTournamentId=e.tournament_id,this.observedStartMsByMatch.clear(),this.observedCompletedMsByMatch.clear());const n=Ut(e.rules_version,this.overrides),s=new Set;for(const a of e.bouts){s.add(a.match_id);const r=ve(a.lifecycle);if(!r&&(a.lifecycle===E.InProgress||!!a.clock_running)&&(!!a.clock_running||(a.period_number||1)>1||(a.red_score||0)>0||(a.green_score||0)>0||a.clock_remaining_ms>0&&a.clock_remaining_ms<n.period1Ms)&&!this.observedStartMsByMatch.has(a.match_id)){const c=t?t(a,i):Math.max(0,a.clock_remaining_ms),d=this.estimateElapsedRegClockMs(a,n,c),_=Math.round(d*1.2);this.observedStartMsByMatch.set(a.match_id,i-_)}r?a.completed_at_ms>0?this.observedCompletedMsByMatch.set(a.match_id,a.completed_at_ms):this.observedCompletedMsByMatch.has(a.match_id)||this.observedCompletedMsByMatch.set(a.match_id,i):this.observedCompletedMsByMatch.delete(a.match_id)}for(const a of this.observedStartMsByMatch.keys())s.has(a)||this.observedStartMsByMatch.delete(a);for(const a of this.observedCompletedMsByMatch.keys())s.has(a)||this.observedCompletedMsByMatch.delete(a)}extractCycleSamples(e,i){const t=new Map;for(const s of e.bouts){if(!ve(s.lifecycle)||s.is_bye||ft(s.win_type))continue;const a=s.completed_at_ms>0?s.completed_at_ms:this.observedCompletedMsByMatch.get(s.match_id)??0;if(a<=0)continue;const r=Math.max(0,Math.trunc(s.assigned_mat_id||0)),o=t.get(r)??[];o.push({bout:s,doneAtMs:a}),t.set(r,o)}const n=[];for(const[s,a]of t.entries()){a.sort((r,o)=>r.doneAtMs-o.doneAtMs||r.bout.bout_number-o.bout.bout_number);for(let r=0;r<a.length;r++){const o=a[r],l=this.observedStartMsByMatch.get(o.bout.match_id);if(s>0&&r>0){const c=a[r-1],d=o.doneAtMs-c.doneAtMs;if(d>=i.minInterCompletionGapMs&&d<=i.maxInterCompletionGapMs){n.push({matchId:o.bout.match_id,matId:s,completedAtMs:o.doneAtMs,durationMs:De(d,i.minSampleMs,i.maxSampleMs)});continue}}if(l!==void 0){const c=o.doneAtMs-l+i.changeoverMs;c>=i.minInterCompletionGapMs&&c<=i.maxInterCompletionGapMs&&n.push({matchId:o.bout.match_id,matId:s,completedAtMs:o.doneAtMs,durationMs:De(c,i.minSampleMs,i.maxSampleMs)})}}}return n.sort((s,a)=>s.completedAtMs-a.completedAtMs||s.matId-a.matId),n}computePaceSummary(e,i){const t=Ut(e.rules_version,this.overrides),n=Fi.test(e.rules_version??""),s=this.extractCycleSamples(e,t);let a=t.defaultAvgCycleMs;for(const f of s)a=(1-t.ewmaAlpha)*a+t.ewmaAlpha*f.durationMs;const r=Math.round(De(a,t.minAvgCycleMs,t.maxAvgCycleMs));let o=.22;if(s.length>=2){const f=s.reduce((p,b)=>p+Math.abs(b.durationMs-r),0)/s.length;o=De(f/Math.max(1,r),.15,.35)}const l=new Map,c=new Map,d=new Map;for(const f of s){if(f.matId<=0)continue;const p=d.get(f.matId)??[];p.push(f),d.set(f.matId,p)}const _=Math.max(1,i);for(let f=1;f<=_;f++){const p=d.get(f)??[];if(c.set(f,p.length),p.length===0)l.set(f,r);else{let b=r;for(const I of p)b=(1-t.ewmaAlpha)*b+t.ewmaAlpha*I.durationMs;const g=p.length>=2?t.matBlendWeight:t.matBlendWeight*.5,k=(1-g)*r+g*b;l.set(f,Math.round(De(k,t.minAvgCycleMs,t.maxAvgCycleMs)))}}const m=(r/6e4).toFixed(1),v=`~${m} min/bout`,u=s.length===0?`Match pace ~${m} min/bout (initial average)`:`Match pace ~${m} min/bout (adapted from ${s.length} ${s.length===1?"match":"matches"})`;return{rulesVersion:e.rules_version??"",isNoviceRuleset:n,defaultAvgCycleMs:t.defaultAvgCycleMs,minAvgCycleMs:t.minAvgCycleMs,maxAvgCycleMs:t.maxAvgCycleMs,learnedAvgCycleMs:r,sampleCount:s.length,matAvgCycleMs:l,matSampleCounts:c,spreadRatio:o,paceSource:s.length>0?"BLENDED_LIVE":"INITIAL_AVERAGE",formattedPaceShort:v,formattedPaceDetail:u}}estimateActiveBoutRemainingMs(e,i,t,n,s){const a=i.matAvgCycleMs.get(e.assigned_mat_id)??i.learnedAvgCycleMs,r=Math.max(6e4,a-t.changeoverMs),o=s?s(e,n):Math.max(0,e.clock_remaining_ms);if(Math.max(1,Math.trunc(e.period_number||1))>=4)return t.changeoverMs+Math.max(3e4,Math.round(o*1.35));const c=Math.max(1,t.period1Ms+t.period2Ms+t.period3Ms),d=this.remainingRegulationClockMs(e,t,o),_=De(d/c,0,1);return Math.round(t.changeoverMs+r*_)}computeSnapshot(e,i=Date.now(),t){this.observeEnvelope(e,i,t);const n=Ut(e.rules_version,this.overrides),s=e.bouts.reduce((y,C)=>Math.max(y,Math.trunc(C.assigned_mat_id||0)),0),a=Math.min(20,Math.max(1,Math.trunc(e.mat_count||0),s,...e.mats.map(y=>Math.trunc(y.mat_id||0)))),r=this.computePaceSummary(e,a),o=new Map,l=e.bouts;if(l.length===0)return{nowMs:i,pace:r,byMatchId:o};const c=new Map(e.athletes.map(y=>[y.athlete_id,y])),d=new Map;for(const y of e.athletes)y.last_bout_ended_ms>0&&d.set(y.athlete_id,y.last_bout_ended_ms);for(const y of l)if(ve(y.lifecycle)&&!(y.is_bye||ft(y.win_type)||y.completed_at_ms<=0))for(const C of[y.red_athlete_id,y.green_athlete_id]){if(!C)continue;const P=d.get(C)??0;y.completed_at_ms>P&&d.set(C,y.completed_at_ms)}const _=new Map;for(const y of l)for(const C of[y.winner_next_match_id,y.loser_next_match_id]){if(!C)continue;const P=_.get(C)??[];P.push(y),_.set(C,P)}const m=new Map,v=new Map,u=new Map,f=new Map;for(let y=1;y<=a;y++)v.set(y,i),u.set(y,0),f.set(y,!1);const p=[],b=[],g=[];for(const y of l){if(ve(y.lifecycle)){const C=y.completed_at_ms>0?y.completed_at_ms:this.observedCompletedMsByMatch.get(y.match_id)??i;m.set(y.match_id,C),o.set(y.match_id,{matchId:y.match_id,boutNumber:y.bout_number,assignedMatId:y.assigned_mat_id,projectedMatId:y.assigned_mat_id,boutsAheadOnMat:0,matQueuePosition:0,estimatedWaitMs:0,minWaitMs:0,maxWaitMs:0,estimatedMinutes:0,estimatedStartAtMs:C,estimatedFinishAtMs:C,governingReason:"COMPLETED",restWaitMs:0,feederWaitMs:0,roundBarrierWaitMs:0,isoDuration:"PT0S",shortLabel:"Final",compactLabel:"FINAL",rangeLabel:"Completed",contextLabel:"Match completed"});continue}if(It(y,l)){m.set(y.match_id,i);continue}y.lifecycle===E.InProgress||y.clock_running?p.push(y):y.lifecycle===E.Ready?b.push(y):g.push(y)}p.sort(bt),b.sort(bt);const k=y=>{const C=Math.trunc(y.assigned_mat_id||0);if(C>=1&&C<=a)return C;let P=1,O=v.get(1)??i;for(let w=2;w<=a;w++){const x=v.get(w)??i;x<O&&(O=x,P=w)}return P};for(const y of p){const C=k(y),P=u.get(C)??0,O=v.get(C)??i,w=Math.max(0,O-i),x=this.estimateActiveBoutRemainingMs(y,r,n,i,t),S=O+x;v.set(C,S),u.set(C,P+1),f.set(C,!0),m.set(y.match_id,S),y.red_athlete_id&&d.set(y.red_athlete_id,S),y.green_athlete_id&&d.set(y.green_athlete_id,S),o.set(y.match_id,{matchId:y.match_id,boutNumber:y.bout_number,assignedMatId:y.assigned_mat_id,projectedMatId:C,boutsAheadOnMat:P,matQueuePosition:P,estimatedWaitMs:w,minWaitMs:w,maxWaitMs:w,estimatedMinutes:0,estimatedStartAtMs:O,estimatedFinishAtMs:S,governingReason:"ON_MAT_NOW",restWaitMs:0,feederWaitMs:0,roundBarrierWaitMs:0,isoDuration:"PT0S",shortLabel:"On mat now",compactLabel:"LIVE",rangeLabel:"On mat now",contextLabel:`Active on Mat ${C}`})}for(const y of b){const C=k(y),P=u.get(C)??0,O=v.get(C)??i,w=Math.max(0,O-i),x=ft(y.win_type)?3e4:r.matAvgCycleMs.get(C)??r.learnedAvgCycleMs,S=O+x;v.set(C,S),u.set(C,P+1),f.set(C,!0),m.set(y.match_id,S),y.red_athlete_id&&d.set(y.red_athlete_id,S),y.green_athlete_id&&d.set(y.green_athlete_id,S);const D=w===0,F=r.spreadRatio/Math.sqrt(Math.max(1,P)),N=D?0:Math.max(3e4,Math.round(w*(1-F))),V=D?6e4:Math.max(w,Math.round(w*(1+F))),W=D?0:Math.max(1,Math.round(w/6e4));o.set(y.match_id,{matchId:y.match_id,boutNumber:y.bout_number,assignedMatId:y.assigned_mat_id,projectedMatId:C,boutsAheadOnMat:P,matQueuePosition:P===0?1:P+1,estimatedWaitMs:w,minWaitMs:N,maxWaitMs:V,estimatedMinutes:W,estimatedStartAtMs:O,estimatedFinishAtMs:S,governingReason:D?"UP_NEXT_AT_MAT":"MAT_QUEUE",restWaitMs:0,feederWaitMs:0,roundBarrierWaitMs:0,isoDuration:D?"PT0S":mi(w),shortLabel:D?"Up next":Yt(w),compactLabel:D?"NEXT":pi(w),rangeLabel:D?"Report to mat now":fi(N,V),contextLabel:D?`Report to Mat ${C} now`:`Report to Mat ${C} (${P} ${P===1?"bout":"bouts"} finishing)`})}const I=new Map;for(const y of g){const C=Math.max(1,Math.trunc(y.round_index||1)),P=I.get(C)??[];P.push(y),I.set(C,P)}const R=Array.from(I.keys()).sort((y,C)=>y-C);let M=i;const L=new Map;for(const y of[...p,...b]){const C=Math.max(1,Math.trunc(y.round_index||1)),P=m.get(y.match_id)??i;L.set(C,Math.max(L.get(C)??i,P))}for(const y of R){M=i;for(const[P,O]of L.entries())P<y&&O>M&&(M=O);const C=(I.get(y)??[]).sort(bt);for(const P of C){const O=k(P),w=u.get(O)??0;let x=v.get(O)??i;w===0&&!(f.get(O)??!1)&&(x=Math.max(x,i+n.idleStagingBufferMs));let S=i;for(const de of[P.red_athlete_id,P.green_athlete_id]){if(!de)continue;const X=c.get(de),pe=d.get(de)??X?.last_bout_ended_ms??0;pe>0&&(S=Math.max(S,pe+n.requiredRestMs))}let D=i;const F=_.get(P.match_id)??[];for(const de of F){if(It(de,l))continue;const X=m.get(de.match_id)??i;ve(de.lifecycle)?D=Math.max(D,X):D=Math.max(D,X+n.requiredRestMs)}const N=Math.max(x,M,S,D),V=Math.max(0,N-i),W=Math.max(0,x-i),B=Math.max(0,S-i),U=Math.max(0,D-i),$=Math.max(0,M-i),j=ft(P.win_type)?3e4:r.matAvgCycleMs.get(O)??r.learnedAvgCycleMs,A=N+j;v.set(O,A),u.set(O,w+1),m.set(P.match_id,A),L.set(y,Math.max(L.get(y)??i,A)),P.red_athlete_id&&d.set(P.red_athlete_id,A),P.green_athlete_id&&d.set(P.green_athlete_id,A);let H=P.assigned_mat_id>0?"MAT_QUEUE":"UNASSIGNED_POOL";U>W&&U>=B&&U>=$?H="AWAITING_FEEDER":B>W&&B>=$?H="MANDATORY_REST":$>W&&(H="ROUND_LOCK");const q=Math.max(1,w),G=r.spreadRatio/Math.sqrt(q),ee=Math.max(B,6e4),ie=Math.min(V,Math.max(ee,Math.round(V*(1-G)))),ce=Math.max(V,Math.round(V*(1+G))),me=Math.max(1,Math.round(V/6e4));let ae;H==="AWAITING_FEEDER"?ae="Awaiting feeder bout and rest":H==="MANDATORY_REST"?ae="Includes 30-min mandatory rest":H==="ROUND_LOCK"?ae="Waiting for earlier round to finish":P.assigned_mat_id<=0?ae=`Queued across ${a} ${a===1?"mat":"mats"}`:w===0?ae=`First queued on Mat ${O}`:w===1?ae=`1 bout ahead on Mat ${O}`:ae=`${w} bouts ahead on Mat ${O}`,o.set(P.match_id,{matchId:P.match_id,boutNumber:P.bout_number,assignedMatId:P.assigned_mat_id,projectedMatId:O,boutsAheadOnMat:w,matQueuePosition:w+1,estimatedWaitMs:V,minWaitMs:ie,maxWaitMs:ce,estimatedMinutes:me,estimatedStartAtMs:N,estimatedFinishAtMs:A,governingReason:H,restWaitMs:B,feederWaitMs:U,roundBarrierWaitMs:$,isoDuration:mi(V),shortLabel:Yt(V),compactLabel:pi(V),rangeLabel:fi(ie,ce),contextLabel:ae})}}return{nowMs:i,pace:r,byMatchId:o}}}function xn(h,e,i){if(h.mat_queue_order>0)return h.mat_queue_order;if(i?.projectedMatId!==h.assigned_mat_id||!h.red_athlete_id||!h.green_athlete_id||i.boutsAheadOnMat!==1&&i.boutsAheadOnMat!==2)return;const t=e.filter(n=>n.assigned_mat_id===h.assigned_mat_id&&n.lifecycle>=E.Assigned&&n.lifecycle<=E.InProgress&&n.red_athlete_id&&n.green_athlete_id&&!Fe(n)&&St(n,h)<0);if(!(t.length!==i.boutsAheadOnMat||t.some(n=>n.mat_queue_order>t.length)))return t.length+1}function Tn(h,e,i){if(h.lifecycle===E.InProgress||h.clock_running)return"IN_PROGRESS";if(h.lifecycle===E.Ready)return"READY_UP_NEXT";if(!(h.assigned_mat_id>0)||h.lifecycle!==E.Assigned)return"SCHEDULED";const t=xn(h,e,i);return t===2?"ON_DECK":t===3?"IN_THE_HOLE":"SCHEDULED"}function Ui(h,e){return{rank:0,team_id:h,team_name:e,total_points:0,advancement_points:0,placement_points:0,bonus_points:0,falls_forfeits_dq:0,tech_falls:0,major_decisions:0,first_place_winners:0}}function gi(h){return[...h].sort((e,i)=>i.total_points-e.total_points||i.falls_forfeits_dq-e.falls_forfeits_dq||i.tech_falls-e.tech_falls||i.major_decisions-e.major_decisions||i.first_place_winners-e.first_place_winners||e.team_name.localeCompare(i.team_name)).map((e,i)=>({...e,rank:i+1}))}function Nn(h,e,i){const t={...h};for(const n of["total_points","advancement_points","placement_points","bonus_points","falls_forfeits_dq","tech_falls","major_decisions","first_place_winners"])t[n]=Math.max(0,h[n]+(i?.[n]??0)-(e?.[n]??0));return t}const Pn={1:16,2:12,3:9,4:7,5:5,6:3,7:2,8:1};function ze(h){return Fe(h)?h.lifecycle===E.ResultAccepted?h.winner_athlete_id:"":ve(h.lifecycle)?h.winner_athlete_id?h.winner_athlete_id:h.red_score>h.green_score?h.red_athlete_id:h.green_score>h.red_score?h.green_athlete_id:"":""}function $t(h,e){const i=new Map;for(const l of h.values())i.has(l.team_id)||i.set(l.team_id,Ui(l.team_id,l.team_name||l.team_id));const t=[...e],n=lt(t,ze),s=(l,c)=>l.loser_athlete_id||(c===l.red_athlete_id?l.green_athlete_id:c===l.green_athlete_id?l.red_athlete_id:""),a=(l,c)=>{const d=Pn[c]??0;if(!l||d<=0)return;const _=h.get(l);if(!_||(_.check_in_stage??0)===6||(_.check_in_stage??0)===7)return;const m=i.get(_.team_id);m&&(m.placement_points+=d,c===1&&m.first_place_winners++)},r=new Map;for(const l of t){const c=l.bracket_id||`${l.division_id||"ALL"}:${l.weight_class_id}`,d=r.get(c);d?d.push(l):r.set(c,[l])}const o=new Set;for(const[l,c]of r)c.some(d=>(d.is_true_second_challenge||d.placement_rank===2)&&ve(d.lifecycle)&&!Fe(d))&&o.add(l);for(const l of t){if(!ve(l.lifecycle))continue;const c=Fe(l),d=ze(l),_=s(l,d),m=h.get(d),v=m&&i.get(m.team_id),u=l.bracket_id||`${l.division_id||"ALL"}:${l.weight_class_id}`;if(l.is_placement_bout&&l.format!=="ROUND_ROBIN_POOL"&&l.format!=="BEST_OF_THREE"){const f=o.has(u);l.placement_rank===1?((!c||!l.green_athlete_id)&&a(d,1),!c&&_&&!f&&l.win_type!=="DQ"&&l.win_type!=="MEDICAL_FORFEIT"&&a(_,2)):l.placement_rank===2||l.is_true_second_challenge?c||(a(d,2),_&&l.win_type!=="DQ"&&l.win_type!=="MEDICAL_FORFEIT"&&a(_,3)):l.placement_rank===3?c||(f||a(d,3),_&&l.win_type!=="DQ"&&l.win_type!=="MEDICAL_FORFEIT"&&a(_,4)):(l.placement_rank===5||l.placement_rank===7)&&(c||(a(d,l.placement_rank),_&&l.win_type!=="DQ"&&l.win_type!=="MEDICAL_FORFEIT"&&a(_,l.placement_rank+1)))}if(v&&!c)switch(v.advancement_points+=(l.is_consolation?1:2)+(n.get(l.match_id)?.earnedPoints??0),(l.win_type||"").toUpperCase()){case"FALL":case"FORFEIT":case"INJURY_DEFAULT":case"DQ":v.bonus_points+=2,v.falls_forfeits_dq++;break;case"TF":case"TECHNICAL_FALL":v.bonus_points+=1.5,v.tech_falls++;break;case"MD":case"MAJOR_DECISION":v.bonus_points+=1,v.major_decisions++;break}}for(const[,l]of r){if(l.length===0)continue;const c=l[0].format;if(l.length===1&&Fe(l[0])&&ve(l[0].lifecycle)&&!l[0].is_placement_bout){a(l[0].winner_athlete_id||l[0].red_athlete_id,1);continue}const d=l.filter(_=>!Fe(_));if(!(d.length===0||!d.every(_=>ve(_.lifecycle)))){if(c==="BEST_OF_THREE"||l.some(_=>_.match_id.includes("-BO3-"))){const _=new Map,m=new Set;for(const u of d){u.red_athlete_id&&m.add(u.red_athlete_id),u.green_athlete_id&&m.add(u.green_athlete_id);const f=ze(u);f&&_.set(f,(_.get(f)??0)+1)}const v=[...m].sort((u,f)=>(_.get(f)??0)-(_.get(u)??0)||u.localeCompare(f));v[0]&&(_.get(v[0])??0)>=2&&(a(v[0],1),v[1]&&a(v[1],2))}else if(c==="ROUND_ROBIN_POOL"){const _=new Map,m=f=>{let p=_.get(f);return p||(p={wins:0,bonus:0,falls:0,diff:0,h2h:new Set},_.set(f,p)),p};for(const f of d){f.red_athlete_id&&(m(f.red_athlete_id).diff+=f.red_score-f.green_score),f.green_athlete_id&&(m(f.green_athlete_id).diff+=f.green_score-f.red_score);const p=ze(f),b=s(f,p);if(!p)continue;const g=m(p);g.wins+=1,b&&g.h2h.add(b);const k=(f.win_type||"").toUpperCase();k==="FALL"||k==="FORFEIT"||k==="INJURY_DEFAULT"||k==="DQ"?(g.bonus+=4,g.falls+=1):k==="TF"||k==="TECHNICAL_FALL"?g.bonus+=3:(k==="MD"||k==="MAJOR_DECISION")&&(g.bonus+=2)}const v=new Map;for(const[f,p]of _){const b=v.get(p.wins);b?b.push(f):v.set(p.wins,[f])}const u=[];for(const f of[...v.keys()].sort((p,b)=>b-p)){const p=v.get(f);if(p.length===2){const[b,g]=p,k=_.get(b),I=_.get(g);k.h2h.has(g)&&!I.h2h.has(b)?u.push(b,g):I.h2h.has(b)&&!k.h2h.has(g)?u.push(g,b):(p.sort((R,M)=>{const L=_.get(R),y=_.get(M);return y.bonus-L.bonus||y.falls-L.falls||y.diff-L.diff||R.localeCompare(M)}),u.push(...p))}else p.sort((b,g)=>{const k=_.get(b),I=_.get(g);return I.bonus-k.bonus||I.falls-k.falls||I.diff-k.diff||b.localeCompare(g)}),u.push(...p)}u.slice(0,8).forEach((f,p)=>a(f,p+1))}}}for(const l of i.values())l.total_points=l.advancement_points+l.placement_points+l.bonus_points;return i}const Ht=ne.tournamentId,Bn=ne.tournamentName;function On(h,e){return e===3&&/(?:^|-)novice-/i.test(h)?"NOVICE":["","VARSITY","GIRLS","JV","U16"][e]||"VARSITY"}const bi="openmat_players_watchlist_v4_1",vi="openmat_players_verified_projection",Ln=8;function yi(){const h=typeof window>"u"?void 0:window.location;return h&&(h.protocol==="http:"||h.protocol==="https:")&&!/(^|\.)github\.io\.?$/i.test(h.hostname)?h.origin:nt}class Te{constructor(e,i=`player-${Ye()}`,t=vs("spectator")){this.peerKey=t,this.onUpdateCallback=e,this.overlayMesh=new Ii({peerId:i,configuredMats:4}),this.envelope={tournament_id:"",tournament_name:"Join a tournament",rules_version:"",growth_allowance_tenths:0,consecutive_day_allowance_tenths:0,mat_count:0,snapshot_epoch:0,control_sequence_head:0,published_at_ms:0,publisher_pubkey_hex:"",payload_sha256_hex:"",signature_hex:"",athletes:[],bouts:[],mats:[],standings:[],bracket_frozen_by_class:{},ow_vote_tallies:{}},this.pinnedPublisherPubkeyHex="",this.defaultJoinQrUri="",this.defaultJoinQrSvg="",this.loadWatchlist();try{const n=JSON.parse(globalThis.localStorage?.getItem(vi)??"null");if(typeof n?.joinQrUri=="string"&&se.verifySignedPublicProjection(n.envelope)){const{valid:s,payload:a}=Le(n.joinQrUri);s&&a&&(!a.tournament_id||a.tournament_id==="manual-pubkey"||a.tournament_id===n.envelope.tournament_id)&&(!a.publisher_pubkey_hex||a.publisher_pubkey_hex===n.envelope.publisher_pubkey_hex.toLowerCase())&&(this.applyScannedTournamentJoinQr(n.joinQrUri),this.ingestSignedEnvelope(n.envelope,"VERIFIED_LOCAL_CACHE"))}}catch{}if(typeof window<"u"&&window.location?.href&&(window.location.search||window.location.hash))try{this.applyScannedTournamentJoinQr(window.location.href)}catch{}this.recordCurrentUrgencies()}peerKey;envelope;etaEstimator=new Mn;overlayMesh;assignedSubtreeParentId="venue-super-seed";assignedSubtreeRoomId=je.subtreeRoomId("venue-super-seed");lastSubtreePingRttMs=0;framesRoutedViaMux=0;lastRelayedProjection="";pinnedPublisherPubkeyHex;defaultJoinQrUri;defaultJoinQrSvg;lastVerifiedUpdateMs=0;connectionState="AWAITING_TOURNAMENT_JOIN";watchedAthleteIds=new Set;webPushState="UNSUBSCRIBED";webPushStatusMessage="";vapidPublicKeyBase64Url="";activePushSubscription=null;webPushAvailable;joinBootstrapRequest;officialsOrigin=typeof window<"u"&&window.location?.origin&&window.location.origin.startsWith("http")&&!window.location.origin.endsWith(":5173")?window.location.origin:"http://127.0.0.1:5174";owVotedAthleteId="";owVoteTallies=new Map;owVoteStatusMessage="";voterId="";pinnedTournamentId="";pinnedIssuedAtMs=0;publisherOnlyJoin=!1;pendingVote;gameMessageListener;gameIceServers=[];gameRevision=-1;gameTimestamp=-1;gameSnapshotTimestamp=-1;gameStatePending=null;cachedGameState=null;cachedGameStateAt=0;gameRoutes=new Map;gameReceipts=new Map;gameBackupParents=[];gameRelayChildren=10;maintainGameAdmission=!1;compactReplica;compactStandingBaseline;projectedView;decodedEventlogs=new WeakMap;watchedBracketIds=[];get selectedBracketId(){return this.watchedBracketIds[0]??""}compactSyncGeneration;liveParent=null;liveChildren=null;p2pError="";serviceWorkerVersion="";syncGeneration=0;liveSyncGeneration=0;bootstrapping=!1;p2pAvailable=!0;compactSseAvailable=!1;isRefreshing=!1;refreshPromise=null;lastCompactSseSeq=0;compactSseModeActive=!1;resyncTimer=null;fetchedBracketEventlogIds=new Set;bracketHttpRequests=new Map;lastDelivery=null;apiLastAttemptAtMs=0;apiLastSuccessAtMs=0;apiError="";static propagateCompletedBracketFeeders(e,i){if(e.length===0)return[];const t=new Map(e.map(c=>[c.match_id,c])),n=c=>{const d=i.get(c)?.check_in_stage??0;return d===6||d===7};let s=!1;const a=c=>{if(t.get(c)){if(!s){for(const[_,m]of t.entries())t.set(_,{...m});s=!0}return t.get(c)}},r=(c,d,_)=>{if(!c||!d)return;const m=t.get(c);if(!m||m.format==="BEST_OF_THREE")return;if(m.red_athlete_id===d||m.green_athlete_id===d){if(m.red_athlete_id&&m.green_athlete_id&&m.lifecycle===E.PendingUpstream){const p=a(c);p.lifecycle=E.Assigned}return}const v=Array.from(t.values()).filter(p=>!p.is_bye&&(p.winner_next_match_id===c||p.loser_next_match_id===c)).sort((p,b)=>p.bout_number-b.bout_number||p.match_id.localeCompare(b.match_id));if(v.length===2&&v[1]?.match_id===_&&!m.green_athlete_id){const p=a(c);p.green_athlete_id=d}else if(m.red_athlete_id){if(!m.green_athlete_id&&m.red_athlete_id!==d){const p=a(c);p.green_athlete_id=d}}else{const p=a(c);p.red_athlete_id=d}const f=t.get(c);if(f.red_athlete_id&&f.green_athlete_id&&f.lifecycle===E.PendingUpstream){const p=a(c);p.lifecycle=E.Assigned}},o=Array.from(t.values()).sort((c,d)=>c.bout_number-d.bout_number||c.match_id.localeCompare(d.match_id));for(const c of o){const d=ze(c);if(!d)continue;const _=c.loser_athlete_id||(d===c.red_athlete_id?c.green_athlete_id:c.red_athlete_id);c.winner_next_match_id&&r(c.winner_next_match_id,d,c.match_id),c.loser_next_match_id&&_&&!n(_)&&r(c.loser_next_match_id,_,c.match_id)}let l=!0;for(;l;){l=!1;for(const c of Array.from(t.values())){if(c.format==="BEST_OF_THREE"||c.lifecycle!==E.PendingUpstream)continue;const d=Array.from(t.values()).filter(_=>_.winner_next_match_id===c.match_id||_.loser_next_match_id===c.match_id);if(!(d.length===0||!d.every(_=>_.is_bye&&_.lifecycle===E.ResultAccepted||!!ze(_)))){if(c.red_athlete_id&&c.green_athlete_id){const _=a(c.match_id);_.lifecycle=E.Assigned,l=!0}else if(c.red_athlete_id||c.green_athlete_id){const _=c.red_athlete_id||c.green_athlete_id,m=n(_)?"":_,v=a(c.match_id);v.red_athlete_id=m,v.green_athlete_id="",v.is_bye=!0,v.lifecycle=E.ResultAccepted,v.winner_athlete_id=m,v.loser_athlete_id="",v.win_type="BYE",v.winner_next_match_id&&m&&r(v.winner_next_match_id,m,v.match_id),l=!0}}}}return s?Array.from(t.values()):e}publicView(){const e=this.compactReplica;if(this.projectedView?.envelope===this.envelope&&this.projectedView.replica===e&&(!e||e.tournamentId===this.pinnedTournamentId&&e.publisherHex===this.pinnedPublisherPubkeyHex))return this.projectedView.view;const i=new Map;if(!e||e.tournamentId!==this.pinnedTournamentId||e.publisherHex!==this.pinnedPublisherPubkeyHex||!e.receivedAtMs){this.compactStandingBaseline=void 0;const b=new Map(this.envelope.athletes.map(I=>[I.athlete_id,I])),g=Te.propagateCompletedBracketFeeders(this.envelope.bouts,b),k={...this.envelope,bouts:g,boutEventlogs:i,compactBrackets:[],hasCompactStandings:!1};return this.projectedView={envelope:this.envelope,replica:e,view:k},k}const t=(b,g)=>{if(g.length<=1)return;let k=this.decodedEventlogs.get(g);k||(k=Cs(g),this.decodedEventlogs.set(g,k)),i.set(b,k)},n=this.envelope.signature_hex?Math.max(this.envelope.snapshot_epoch,this.envelope.control_sequence_head):0,s=e.summary,a=new Map(this.envelope.athletes.map(b=>[b.athlete_id,b])),r=new Map(this.envelope.bouts.map(b=>[b.match_id,b])),o=new Map(a),l=new Map(r);if(s&&s.revision>n){const b=new Set(s.brackets.map(g=>g.bracket_id));for(const[g,k]of l)k.bracket_id&&!b.has(k.bracket_id)&&l.delete(g)}const c=new Map,d=new Map(s?.teams.map(b=>[b.index,b])),_=["","DEC","MD","TF","FALL","DQ","INJURY_DEFAULT","FORFEIT","MEDICAL_FORFEIT"];for(const[b,g]of e.brackets){const k=s?.brackets.find(y=>y.bracket_id===b);if(!k&&s&&s.revision>n)continue;const I=k?.weight_class_id??(b.split("-").pop()||""),R=On(b,g.division).toLowerCase();if(g.revision>n){const y=new Set(g.bouts.map(C=>C.match_id));for(const[C,P]of l)P.bracket_id===b&&!y.has(C)&&l.delete(C)}const M=new Map(g.athletes.map(y=>[y.slot,y.athlete_id]));M.set(0,"");for(const y of g.athletes){if(g.revision<=n)break;const C=o.get(y.athlete_id),P=d.get(y.team_index);o.set(y.athlete_id,{opaque_pass_token:"",weigh_in_eligible:!1,medically_cleared:!1,matches_wrestled_today:0,prior_day_matches:0,last_bout_ended_ms:0,updated_at_ms:0,...C,athlete_id:y.athlete_id,public_display_name:y.display_name,team_id:P?.team_id??C?.team_id??"",team_name:P?.name??C?.team_name??"",division_id:C?.division_id||R,weight_class_id:I||C?.weight_class_id||"",seed_rank:y.seed_rank,check_in_stage:y.public_stage||y.state})}const L=new Map(g.bouts.map(y=>[y.local_number,y.match_id]));L.set(0,"");for(const y of g.bouts){const C=l.get(y.match_id),P=e.boutRevision(g,y.local_number);c.set(y.match_id,P);const O=e.eventlog(b,y.match_id);if(O&&(C||P>n)&&t(y.match_id,O.words),P<=n)continue;const w=C?.assigned_mat_id===y.mat_id&&C.assignment_revision===y.assignment_revision,x=y.match_id.includes("-BO3-")?"BEST_OF_THREE":g.format===5?"ROUND_ROBIN_POOL":g.format===6?"POOL_TO_BRACKET":g.format===7?"TEAM_DUAL":"DOUBLE_ELIM_CROSSOVER";l.set(y.match_id,{authority_epoch:0,delegated_android_device_id:"",...C,mat_queue_order:w?C.mat_queue_order:0,match_id:y.match_id,bracket_id:b,weight_class_id:I||C?.weight_class_id||"",division_id:C?.division_id||R,format:C?.format??x,bout_number:y.bout_number,round_index:y.round_index,round_label:C?.round_label??`Round ${y.round_index}`,is_consolation:!!(y.flags&1),is_placement_bout:!!(y.flags&2),is_true_second_challenge:!!(y.flags&4),is_bye:!!(y.flags&8),placement_rank:y.placement_rank,red_athlete_id:M.get(y.red_slot)??"",green_athlete_id:M.get(y.green_slot)??"",winner_athlete_id:M.get(y.winner_slot)??"",loser_athlete_id:M.get(y.loser_slot)??"",winner_next_match_id:L.get(y.winner_next)??"",loser_next_match_id:L.get(y.loser_next)??"",lifecycle:y.lifecycle+1,assigned_mat_id:y.mat_id,assignment_revision:y.assignment_revision,red_score:y.red_score,green_score:y.green_score,period_number:y.period,clock_remaining_ms:y.clock_remaining_ds*100,clock_running:w&&C.lifecycle===y.lifecycle+1&&C.period_number===y.period&&C.clock_running,win_type:y.flags&8?"BYE":_[y.win_type]??"",completed_at_ms:y.completed_offset_sec*1e3})}}for(const b of e.mats.values()){if(b.revision>n)for(const[M,L]of l){if(L.assigned_mat_id!==b.mat_id||ve(L.lifecycle))continue;const y=b.bout_number>0&&L.bout_number===b.bout_number?1:b.on_deck>0&&L.bout_number===b.on_deck?2:b.in_the_hole>0&&L.bout_number===b.in_the_hole?3:L.mat_queue_order>=1&&L.mat_queue_order<=3?4:L.mat_queue_order;y!==L.mat_queue_order&&l.set(M,{...L,mat_queue_order:y})}const g=e.brackets.get(b.bracket_id),k=g?.bracket_index===b.bracket_index?g.bouts.find(M=>M.local_number===b.local_number&&M.bout_number===b.bout_number):void 0;if(g&&!k)continue;const I=k?l.get(k.match_id):[...l.values()].find(M=>M.bracket_id===b.bracket_id&&M.bout_number===b.bout_number);if(!I||I.assigned_mat_id!==b.mat_id||ve(I.lifecycle))continue;const R=e.eventlog(b.bracket_id,I.match_id);b.revision>(R?.revision??0)&&b.eventlog_words.length>4&&t(I.match_id,vt(b.eventlog_words)),!(b.revision<=n||b.revision<(c.get(I.match_id)??0))&&l.set(I.match_id,{...I,red_score:b.red_score,green_score:b.green_score,period_number:b.period,clock_remaining_ms:b.clock_remaining_ds*100,clock_running:!!b.clock_running})}const m=Te.propagateCompletedBracketFeeders([...l.values()],o),v=!!(s?.teams.length&&s.revision>=n);let u=this.envelope.standings;const f=()=>{const b=$t(a,this.envelope.bouts),g=$t(o,m);for(const k of this.envelope.standings??[])g.set(k.team_id,Nn(k,b.get(k.team_id),g.get(k.team_id)));return g};if(s&&v){(this.compactStandingBaseline?.replica!==e||this.compactStandingBaseline.revision!==s.revision)&&(this.compactStandingBaseline={replica:e,revision:s.revision,bouts:new Map});const b=this.compactStandingBaseline.bouts,g=new Set;for(const C of l.values())if((c.get(C.match_id)??n)<=s.revision)b.set(C.match_id,C);else{const P=b.get(C.match_id)??(s.revision===n?r.get(C.match_id):void 0);P&&(b.set(C.match_id,P),g.add(C.bracket_id))}const k=[...l.values()].filter(C=>g.has(C.bracket_id)&&b.has(C.match_id)),I=k.map(C=>b.get(C.match_id)),R=C=>$t(o,Te.propagateCompletedBracketFeeders(C,o)),M=R(I),L=R(k),y=f();u=gi(s.teams.map(C=>{const P=y.get(C.team_id)??Ui(C.team_id,C.name),O=C.half_points/2+(L.get(C.team_id)?.total_points??0)-(M.get(C.team_id)?.total_points??0);return{...P,team_name:C.name,total_points:Math.max(0,O)}}))}else[...c.values()].some(b=>b>n)&&(u=gi(f().values()));const p={...this.envelope,tournament_id:e.tournamentId,mat_count:s&&s.revision>n?s.mat_count:this.envelope.mat_count,athletes:[...o.values()],bouts:m,standings:u,boutEventlogs:i,compactBrackets:s&&s.revision>=n?s.brackets:[],hasCompactStandings:v,published_at_ms:Math.max(this.envelope.published_at_ms,e.receivedAtMs),signature_hex:"",payload_sha256_hex:""};return this.projectedView={envelope:this.envelope,replica:e,view:p},p}p2pDelivery(){return{kind:"P2P",peerId:this.findUpstreamParentPeerId(),roomId:this.assignedSubtreeRoomId}}findUpstreamParentPeerId(){if(this.liveParent){if(this.assignedSubtreeParentId==="venue-super-seed"&&this.liveParent.members.has("official-venue"))return"official-venue";if(this.assignedSubtreeParentId&&this.liveParent.members.has(this.assignedSubtreeParentId)&&this.assignedSubtreeParentId!==this.overlayMesh.peerId)return this.assignedSubtreeParentId;for(const[e,i]of this.liveParent.members.entries())if(e!==this.overlayMesh.peerId&&(i.role==="primary"||i.role==="official"||e==="official-venue"))return e}}isP2pConnected(){const e=this.findUpstreamParentPeerId();if(!e||!this.liveParent)return!1;const i=this.liveParent.diagnostics();return i.brokerConnected||i.peers.some(t=>t.peerId===e&&t.transport==="WEBRTC")}async requestViaP2p(e,i=new Uint8Array){const t=this.findUpstreamParentPeerId();if(!this.liveParent||!t)throw new Error("No upstream P2P parent connected");return this.liveParent.request(e,i,t)}async refreshCompactBracket(){const e=this.syncGeneration;if(this.compactSyncGeneration===e||!this.selectedBracketId||!this.isP2pConnected())return!1;this.compactSyncGeneration=e;try{const i=ke(await this.requestViaP2p("bracket-sync",new TextEncoder().encode(this.selectedBracketId)),{maxBytes:4194304});if(e!==this.syncGeneration)return!1;if(!Array.isArray(i)||!i.length)throw new Error("Invalid compact catch-up response");(!this.compactReplica||this.compactReplica.tournamentId!==this.pinnedTournamentId||this.compactReplica.publisherHex!==this.pinnedPublisherPubkeyHex)&&(this.compactReplica=new ut(this.pinnedTournamentId,this.pinnedPublisherPubkeyHex));for(const t of i){const n=t;this.compactReplica.apply(n.topic,n.bytes)&&(this.projectedView=void 0)}return this.lastVerifiedUpdateMs=Date.now(),this.connectionState="LIVE_OFFICIALS_STREAM",this.lastDelivery={...this.p2pDelivery(),receivedAtMs:Date.now()},this.etaEstimator.observeEnvelope(this.publicView(),this.lastVerifiedUpdateMs),this.onUpdateCallback?.(),!0}catch(i){return e===this.syncGeneration&&(this.p2pError=String(i)),!1}finally{this.compactSyncGeneration===e&&(this.compactSyncGeneration=void 0)}}canHostSpectatorSubtree(){if(typeof window>"u")return!0;if(typeof document<"u"&&document.visibilityState==="hidden")return!1;const e=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,i=typeof navigator<"u"&&/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent??"");if(e||i)return!1;const t=window.location?.hostname??"";return/^(127\.0\.0\.1|localhost|\[::1\])$/i.test(t)||/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(t)||t.endsWith(".local")||this.gameIceServers.length>0}shouldPreferCompactSse(){return this.compactSseAvailable&&typeof EventSource<"u"}isCompactSseOpen(){return this.compactSseModeActive&&this.eventSource?.readyState===1}decodeBase64Bytes(e){if(typeof atob=="function"){const i=atob(e),t=new Uint8Array(i.length);for(let n=0;n<i.length;n++)t[n]=i.charCodeAt(n);return t}return new Uint8Array(Buffer.from(e,"base64"))}fetchCompactBracketHttp(e=this.officialsOrigin,i=this.selectedBracketId){const t=this.pinnedTournamentId,n=this.pinnedPublisherPubkeyHex;if(!i||!n||!t)return Promise.resolve(!1);const s=JSON.stringify([e,t,n,i]),a=this.bracketHttpRequests.get(s);if(a)return a;const r=this.loadCompactBracketHttp(e,i,t,n).finally(()=>this.bracketHttpRequests.delete(s));return this.bracketHttpRequests.set(s,r),r}async loadCompactBracketHttp(e,i,t,n){try{const s=await fetch(`${e}/api/openmat-bracket-sync?bracket=${encodeURIComponent(i)}`,{signal:AbortSignal.timeout(5e3)});if(!s.ok)return!1;const a=ke(new Uint8Array(await s.arrayBuffer()),{maxBytes:4194304});if(!Array.isArray(a)||!a.length||t!==this.pinnedTournamentId||n!==this.pinnedPublisherPubkeyHex)return!1;(!this.compactReplica||this.compactReplica.tournamentId!==t||this.compactReplica.publisherHex!==n)&&(this.compactReplica=new ut(t,n));let r=!1;for(const o of a){const l=o;Pt.includes(l.topic)&&this.compactReplica.apply(l.topic,l.bytes)&&(r=!0)}return this.fetchedBracketEventlogIds.add(i),r&&(this.projectedView=void 0,this.lastVerifiedUpdateMs=Date.now(),this.etaEstimator.observeEnvelope(this.publicView(),this.lastVerifiedUpdateMs),this.onUpdateCallback?.()),!0}catch{return!1}}fetchWatchedCompactBrackets(e,i=this.watchedBracketIds,t=!1){for(const n of i)(t||!this.fetchedBracketEventlogIds.has(n))&&this.fetchCompactBracketHttp(e,n)}scheduleProjectionResync(e=this.officialsOrigin,i=this.liveSyncGeneration,t){if(this.resyncTimer||i!==this.liveSyncGeneration)return;const n=t??200+Math.floor(Math.random()*800);this.resyncTimer=setTimeout(()=>{this.resyncTimer=null,i===this.liveSyncGeneration&&this.fetchProjectionHttpBackup(e,i)},n)}ingestCompactSseEvent(e,i,t=this.officialsOrigin,n=this.liveSyncGeneration){if(!this.pinnedPublisherPubkeyHex||!this.pinnedTournamentId&&!i)return!1;try{const s=JSON.parse(i),a=typeof s.seq=="number"&&Number.isSafeInteger(s.seq)&&s.seq>0?s.seq:0,r=typeof s.tournamentId=="string"?s.tournamentId:"",o=typeof s.sha256=="string"?s.sha256:"";if(r&&this.pinnedTournamentId&&this.pinnedTournamentId!=="manual-pubkey"&&r!==this.pinnedTournamentId)return!1;if(a>this.lastCompactSseSeq&&(this.lastCompactSseSeq=a),e==="compact"){if(!Array.isArray(s.packets)||s.packets.length===0)return!1;const l=r||this.pinnedTournamentId;if(!l)return!1;(!this.compactReplica||this.compactReplica.tournamentId!==l||this.compactReplica.publisherHex!==this.pinnedPublisherPubkeyHex)&&(this.compactReplica=new ut(l,this.pinnedPublisherPubkeyHex));let c=!1,d=!1;for(const m of s.packets){const v=m?.topic;if(!(!Pt.includes(v)||typeof m?.b64!="string"||!m.b64))try{this.compactReplica.apply(v,this.decodeBase64Bytes(m.b64))&&(c=!0)}catch{d=!0}}if(d&&(this.scheduleProjectionResync(t,n,100),this.fetchWatchedCompactBrackets(t,this.watchedBracketIds,!0),!c))return!1;if(!this.pinnedTournamentId||this.pinnedTournamentId==="manual-pubkey"){if(!c)return!1;this.setTournamentIdentity(l,this.pinnedPublisherPubkeyHex)}c&&(this.projectedView=void 0);const _=Date.now();return this.lastVerifiedUpdateMs=_,this.apiLastSuccessAtMs=_,this.apiError="",this.connectionState="LIVE_OFFICIALS_STREAM",this.lastDelivery={kind:"COMPACT_SSE",endpoint:t,receivedAtMs:_},this.etaEstimator.observeEnvelope(this.publicView(),_),this.evaluateWatchedNotifications(_,"LIVE_OFFICIALS_STREAM"),this.onUpdateCallback?.(),!0}if(e==="sync"){const l=!!(this.compactReplica?.tournamentId===this.pinnedTournamentId&&this.compactReplica?.receivedAtMs);if(o&&o===this.envelope.payload_sha256_hex&&this.envelope.signature_hex||l){const c=Date.now();return this.lastVerifiedUpdateMs=c,this.apiLastSuccessAtMs=c,this.apiError="",this.connectionState="LIVE_OFFICIALS_STREAM",this.lastDelivery={kind:"COMPACT_SSE",endpoint:t,receivedAtMs:c},this.onUpdateCallback?.(),!0}return this.scheduleProjectionResync(t,n,50),!1}if(e==="resync"){if(!o||o!==this.envelope.payload_sha256_hex||!this.envelope.signature_hex)this.scheduleProjectionResync(t,n);else{const l=Date.now();this.lastVerifiedUpdateMs=l,this.lastDelivery={kind:"COMPACT_SSE",endpoint:t,receivedAtMs:l},this.connectionState="LIVE_OFFICIALS_STREAM",this.onUpdateCallback?.()}return!0}return!1}catch{return!1}}openLiveEventStream(e=this.officialsOrigin,i=this.liveSyncGeneration){if(typeof EventSource>"u"||i!==this.liveSyncGeneration)return;const t=this.compactSseAvailable;if(this.eventSource&&this.eventSource.readyState!==2&&this.compactSseModeActive===t)return;this.eventSource?.close(),this.compactSseModeActive=t;const n=t?`${e}/api/openmat-live-events?mode=compact${this.lastCompactSseSeq>0?`&since=${this.lastCompactSseSeq}`:""}`:`${e}/api/openmat-live-events`,s=new EventSource(n);this.eventSource=s,t&&(this.fetchWatchedCompactBrackets(e),s.addEventListener("compact",a=>{i!==this.liveSyncGeneration||this.eventSource!==s||this.ingestCompactSseEvent("compact",a.data,e,i)}),s.addEventListener("sync",a=>{i!==this.liveSyncGeneration||this.eventSource!==s||this.ingestCompactSseEvent("sync",a.data,e,i)}),s.addEventListener("resync",a=>{i!==this.liveSyncGeneration||this.eventSource!==s||this.ingestCompactSseEvent("resync",a.data,e,i)})),s.onmessage=a=>{if(!(i!==this.liveSyncGeneration||this.eventSource!==s))try{this.ingestSignedEnvelope(JSON.parse(a.data),"LIVE_OFFICIALS_STREAM",{kind:t?"COMPACT_SSE":"HTTP_SSE",endpoint:e})}catch{}},s.onopen=()=>{i===this.liveSyncGeneration&&this.eventSource===s&&(this.closePublicNostrRelaySockets(),this.onUpdateCallback?.())},s.onerror=()=>{i===this.liveSyncGeneration&&this.eventSource===s&&this.onUpdateCallback?.()}}setOfficialsOrigin(e){this.officialsOrigin!==e&&(this.officialsOrigin=e,this.joinBootstrapRequest=void 0,this.webPushAvailable=void 0,this.vapidPublicKeyBase64Url="",this.activePushSubscription=null)}async resolveStaticHostVenueOrigin(){if(typeof window>"u"||!window.location?.href||!/(^|\.)github\.io\.?$/i.test(window.location.hostname))return null;try{const e=window.location.href.endsWith("/")||/\.html$/i.test(window.location.pathname??"")?window.location.href:`${window.location.href}/`,i=new URL("game/game-config.json",e);i.searchParams.set("refresh",String(Date.now()));const t=await fetch(i.href,{cache:"no-store",signal:AbortSignal.timeout(5e3)});if(!t.ok)return null;const n=await t.json();if(typeof n?.origin!="string"||!n.origin.trim())return null;const s=new URL(n.origin.trim());return s.protocol!=="https:"?null:s.origin}catch{return null}}fetchJoinBootstrap(){if(this.joinBootstrapRequest)return this.joinBootstrapRequest;const e=fetch(`${this.officialsOrigin}/api/openmat-join-bootstrap`,{signal:AbortSignal.timeout(5e3)}).then(async i=>{if(!i.ok||!i.headers.get("content-type")?.includes("application/json"))return null;const t=await i.json();return!t||this.joinBootstrapRequest!==e?null:(this.webPushAvailable=t.capabilities?.webPush!==!1,t)}).catch(()=>null).finally(()=>{this.joinBootstrapRequest===e&&(this.joinBootstrapRequest=void 0)});return this.joinBootstrapRequest=e,e}async refreshNow(){if(this.refreshPromise)return this.refreshPromise;const e=async()=>{this.isRefreshing=!0,this.resyncTimer&&(clearTimeout(this.resyncTimer),this.resyncTimer=null),this.onUpdateCallback?.();try{if(!this.pinnedPublisherPubkeyHex&&(!this.pinnedTournamentId||this.pinnedTournamentId===Ht))try{if(typeof window<"u"&&/(^|\.)github\.io\.?$/i.test(window.location.hostname)&&this.officialsOrigin===window.location.origin){const n=await this.resolveStaticHostVenueOrigin();n&&this.setOfficialsOrigin(n)}const t=await this.fetchJoinBootstrap();if(t?.joinQrUri){const n=Le(t.joinQrUri);if(n.valid&&n.payload&&n.payload.relay_origin===this.officialsOrigin){this.bootstrapping=!0;try{this.applyScannedTournamentJoinQr(t.joinQrUri)}finally{this.bootstrapping=!1}Array.isArray(t.iceServers)&&t.iceServers.length>0&&this.gameIceServers.length===0&&(this.gameIceServers=t.iceServers),this.p2pAvailable=t.capabilities?.p2p!==!1,t.capabilities?.compactSse===!0&&(this.compactSseAvailable=!0)}}}catch{}if(!this.pinnedPublisherPubkeyHex)return!1;if(this.isP2pConnected()&&!this.shouldPreferCompactSse()){const[t]=await Promise.all([this.refreshViaP2p(!0),this.selectedBracketId?this.refreshCompactBracket():Promise.resolve(!1)]);return t}const i=await this.fetchProjectionHttpBackup(this.officialsOrigin,this.liveSyncGeneration);return this.compactSseAvailable&&this.fetchWatchedCompactBrackets(this.officialsOrigin),this.pollTimer!==null&&(!this.eventSource||this.eventSource.readyState===2||this.compactSseAvailable&&!this.compactSseModeActive)&&this.openLiveEventStream(this.officialsOrigin,this.liveSyncGeneration),i}finally{this.isRefreshing=!1,this.onUpdateCallback?.()}};return this.refreshPromise=e().finally(()=>{this.refreshPromise=null}),this.refreshPromise}async watchBracket(e,i=[]){const t=[...new Set([e,...i].filter(Boolean))].slice(0,Ln);if(t.some(s=>!/^[A-Za-z0-9_-]{1,100}$/.test(s)))throw new Error("Invalid bracket id");if(t.length===this.watchedBracketIds.length&&t.every((s,a)=>s===this.watchedBracketIds[a]))return;const n=this.selectedBracketId!==(t[0]??"");if(this.watchedBracketIds=t,this.shouldPreferCompactSse()||!this.p2pAvailable){this.fetchWatchedCompactBrackets(this.officialsOrigin);return}if(this.fetchWatchedCompactBrackets(this.officialsOrigin,t.slice(1)),n&&this.pinnedTournamentId&&this.p2pAvailable)try{await this.startP2p()}catch(s){this.p2pError=String(s)}}async startP2p(e=this.officialsOrigin,i){if(i===this.overlayMesh.peerId)throw new Error("Cannot use own subtree as parent");const t=++this.syncGeneration;if(!this.pinnedPublisherPubkeyHex)return;if(this.overlayMesh.stopLiveRooms(),this.liveParent=null,this.liveChildren=null,!i){try{const a=await fetch(`${e}/api/openmat-subtree?tournament=${encodeURIComponent(this.pinnedTournamentId)}&peer=${encodeURIComponent(this.overlayMesh.peerId)}&children=${this.gameRelayChildren}${this.selectedBracketId?`&bracket=${encodeURIComponent(this.selectedBracketId)}`:""}`,{signal:AbortSignal.timeout(3500)});if(a.ok){const r=String((await a.json()).roomId??"");r.startsWith("subtree:")&&r.length>8&&r!==`subtree:${this.overlayMesh.peerId}`&&(i=r.slice(8))}}catch{}i||(i=this.selectedBracketId?`b:${this.selectedBracketId}`:"venue-super-seed")}if(t!==this.syncGeneration)return;this.assignedSubtreeParentId=i,this.assignedSubtreeRoomId=je.subtreeRoomId(i);const n=async a=>this.overlayMesh.joinLiveRoom({origin:e,rootPublicKeyHex:this.pinnedPublisherPubkeyHex,tournamentId:this.pinnedTournamentId,roomId:a,peerId:this.overlayMesh.peerId,publicKey:this.peerKey.publicKey,role:"spectator",iceServers:this.gameIceServers,sign:r=>Oe(Ie,r,this.peerKey.privateKey),onMembership:()=>{t===this.syncGeneration&&(a===this.assignedSubtreeRoomId&&this.isP2pConnected()&&!this.shouldPreferCompactSse()&&(this.eventSource&&(this.eventSource.close(),this.eventSource=null),this.selectedBracketId&&this.refreshCompactBracket(),this.envelope.signature_hex||this.refreshViaP2p(!1)),this.onUpdateCallback?.())},onError:r=>{this.p2pError=r.message},onMessage:(r,o,l)=>{if(t===this.syncGeneration){if(Pt.includes(r))try{(!this.compactReplica||this.compactReplica.tournamentId!==this.pinnedTournamentId||this.compactReplica.publisherHex!==this.pinnedPublisherPubkeyHex)&&(this.compactReplica=new ut(this.pinnedTournamentId,this.pinnedPublisherPubkeyHex)),this.compactReplica.apply(r,o)&&(this.projectedView=void 0,this.lastVerifiedUpdateMs=Date.now(),this.connectionState="LIVE_OFFICIALS_STREAM",this.lastDelivery={kind:"P2P",peerId:l,roomId:a,receivedAtMs:Date.now()},this.etaEstimator.observeEnvelope(this.publicView(),this.lastVerifiedUpdateMs),this.liveChildren?.send(r,o,r.includes("eventlog")||r==="bracket-full"?Ae.BulkChunksBackground:Ae.CurrentStateUnorderedNewest),this.onUpdateCallback?.())}catch(c){this.p2pError=String(c),this.refreshCompactBracket()}if(r==="public-projection")try{this.ingestSignedEnvelope(JSON.parse(new TextDecoder().decode(o)),"LIVE_OFFICIALS_STREAM",{kind:"P2P",peerId:l,roomId:a})}catch(c){this.p2pError=String(c)}if((r==="game-state"||r==="game-snapshot")&&this.ingestGameMessage(r,o),r==="game-tap")try{if(a===this.assignedSubtreeRoomId&&l===this.findUpstreamParentPeerId())this.acceptBackupGameMessage(r,o);else if(a===je.subtreeRoomId(this.overlayMesh.peerId)&&o.length<=1024){this.retryGameTaps();const c=Es(o),d=this.gameRoutes.get(c),_=this.gameReceipts.get(c);if(_){this.liveChildren?.send(r,_.bytes,Ae.OfficialEventsOrderedReliable,l);return}if(d){d.peers.add(l);return}if(this.gameRoutes.size>=5e3)return;this.gameRoutes.set(c,{peers:new Set([l]),at:Date.now(),lastSent:Date.now(),bytes:o}),this.sendGameTap(o)}}catch(c){this.p2pError=String(c)}}},onRpc:async(r,o)=>{if(r==="bracket-sync")return this.requestViaP2p(r,o);if(r==="game-sync")return this.cachedGameState&&performance.now()-this.cachedGameStateAt<1500?this.cachedGameState:this.getTapGameState();if(r==="game-tap"){if(o.length>1024)throw new Error("Game tap too large");return this.requestViaP2p(r,o)}if(r==="projection"){if(this.envelope.signature_hex)return new TextEncoder().encode(JSON.stringify(this.envelope));if(this.isP2pConnected())return this.requestViaP2p("projection",o);throw new Error("No verified projection available")}if(r==="ow-vote"||r==="scorekeeper-event"){const l=await this.requestViaP2p(r,o);try{const c=JSON.parse(new TextDecoder().decode(l));c?.ok&&c.envelope&&this.ingestSignedEnvelope(c.envelope,"LIVE_OFFICIALS_STREAM",this.p2pDelivery())}catch{}return l}throw new Error("Unsupported room RPC")}}),s=await n(this.assignedSubtreeRoomId);if(t!==this.syncGeneration){s.stop();return}if(this.liveParent=s,this.canHostSpectatorSubtree()){const a=await n(je.subtreeRoomId(this.overlayMesh.peerId));if(t!==this.syncGeneration){a.stop();return}this.liveChildren=a}this.isP2pConnected()&&!this.shouldPreferCompactSse()&&(this.eventSource?.close(),this.eventSource=null,this.compactSseModeActive=!1,await Promise.all([this.refreshViaP2p(!1),this.refreshCompactBracket()]))}async refreshViaP2p(e=!0){const i=this.syncGeneration,t=this.liveParent,n=this.findUpstreamParentPeerId();if(t&&n&&this.isP2pConnected()){try{const s=await t.request("projection",new Uint8Array,n);if(i!==this.syncGeneration)return!1;const a=JSON.parse(new TextDecoder().decode(s));if(this.ingestSignedEnvelope(a,"LIVE_OFFICIALS_STREAM",this.p2pDelivery()))return t.ping(n).then(o=>{i===this.syncGeneration&&o!==null&&(this.lastSubtreePingRttMs=o)}).catch(()=>{}),!0}catch(s){if(i!==this.syncGeneration)return!1;this.p2pError=String(s)}if(!e)return!1}return e?this.fetchProjectionHttpBackup(this.officialsOrigin):!1}async fetchProjectionHttpBackup(e=this.officialsOrigin,i=this.liveSyncGeneration){if(!this.pinnedPublisherPubkeyHex||i!==this.liveSyncGeneration)return!1;this.apiLastAttemptAtMs=Date.now();try{const t={};this.envelope.payload_sha256_hex&&(t["If-None-Match"]=`"${this.envelope.payload_sha256_hex}"`);const n=await fetch(`${e}/api/openmat-live-projection`,{headers:t,signal:AbortSignal.timeout(5e3)});if(i!==this.liveSyncGeneration)return!1;(n.headers?.get?.("x-openmat-capabilities")??"").includes("compact-sse")&&(this.compactSseAvailable=!0);const a=this.isCompactSseOpen()?"COMPACT_SSE":"HTTP_POLL";if(n.status===304&&this.envelope.signature_hex)return this.lastVerifiedUpdateMs=Date.now(),this.lastDelivery={kind:a,endpoint:e,receivedAtMs:this.lastVerifiedUpdateMs},this.apiLastSuccessAtMs=this.lastVerifiedUpdateMs,this.apiError="",this.connectionState="LIVE_OFFICIALS_STREAM",this.onUpdateCallback?.(),!0;if(!n.ok)return this.apiError=`HTTP ${n.status}`,!1;const r=await n.json();if(i!==this.liveSyncGeneration)return!1;const o=this.ingestSignedEnvelope(r,"LIVE_OFFICIALS_STREAM",{kind:a,endpoint:e});return o&&(this.apiLastSuccessAtMs=Date.now()),this.apiError=o?"":"Projection verification rejected",o}catch(t){return i===this.liveSyncGeneration&&(this.apiError=t instanceof Error?t.message:String(t)),!1}}broadcastChannel=typeof window<"u"&&typeof BroadcastChannel<"u"?new BroadcastChannel("openmat-live-sync"):null;eventSource=null;pollTimer=null;resumeLiveSync;previousUrgencyByAthlete=new Map;onUpdateCallback;publicNostrRelays=[...ei];nostrRelaySockets=new Map;nostrSocketFilterKeys=new Map;getGamePeerRooms(){return{parent:this.liveParent,children:this.liveChildren}}acceptBackupGameMessage(e,i){if(e==="game-state"||e==="game-snapshot"){this.ingestGameMessage(e,i);return}if(e!=="game-tap")return;const t=Bt(i,`game:${this.pinnedTournamentId}`,this.pinnedPublisherPubkeyHex);if(t.kind!=="receipt"||typeof t.id!="string")return;const n=this.gameRoutes.get(t.id);if(n){this.gameRoutes.delete(t.id),this.gameReceipts.size>=5e3&&this.gameReceipts.delete(this.gameReceipts.keys().next().value),this.gameReceipts.set(t.id,{bytes:i,at:Date.now()});for(const s of n.peers)try{this.liveChildren?.send(e,i,Ae.OfficialEventsOrderedReliable,s)}catch(a){this.p2pError=String(a)}}this.gameMessageListener?.(e,i)}retryGameTaps(){for(const[e,i]of this.gameRoutes){if(Date.now()-i.at>15e3){this.gameRoutes.delete(e);continue}if(Date.now()-i.lastSent>1e3){i.lastSent=Date.now();try{this.sendGameTap(i.bytes,!0)}catch(t){this.p2pError=String(t)}}}for(const[e,i]of this.gameReceipts)Date.now()-i.at>15e3&&this.gameReceipts.delete(e)}ingestGameMessage(e,i){try{const t=Bt(i,`game:${this.pinnedTournamentId}`,this.pinnedPublisherPubkeyHex);if(t.kind!=="state"&&t.kind!=="snapshot"||!Number.isSafeInteger(t.revision)||!Number.isSafeInteger(t.at_ms)||Number(t.at_ms)<0||Number(t.revision)<this.gameRevision||t.revision===this.gameRevision&&Number(t.at_ms)<=(t.kind==="snapshot"?this.gameSnapshotTimestamp:this.gameTimestamp))return!1;this.gameRevision=Number(t.revision),this.gameTimestamp=Math.max(this.gameTimestamp,Number(t.at_ms)),t.kind==="snapshot"&&(this.gameSnapshotTimestamp=Number(t.at_ms)),t.kind==="state"&&(this.cachedGameState=i,this.cachedGameStateAt=performance.now()),this.gameMessageListener?.(t.kind==="snapshot"?"game-snapshot":"game-state",i);try{this.liveChildren?.send(t.kind==="snapshot"?"game-snapshot":"game-state",i,t.kind==="snapshot"?Ae.BulkChunksBackground:Ae.CurrentStateUnorderedNewest)}catch(n){this.p2pError=String(n)}return!0}catch(t){return this.p2pError=String(t),!1}}getTapGameState(){if(this.gameStatePending)return this.gameStatePending;const e=this.readTapGameState().finally(()=>{this.gameStatePending===e&&(this.gameStatePending=null)});return this.gameStatePending=e,e}async readTapGameState(){const e=this.liveSyncGeneration,i=this.findUpstreamParentPeerId(),t=[...this.isP2pConnected()&&this.liveParent&&i?[{room:this.liveParent,target:i}]:[],...this.gameBackupParents.flatMap(r=>{const o=r.hostPeerId();return o?[{room:r,target:o}]:[]})];if(t.length)try{return await Promise.any(t.map(async({room:r,target:o})=>{const l=await r.request("game-sync",new Uint8Array,o);if(e!==this.liveSyncGeneration)throw new Error("Game sync generation changed");if(!this.ingestGameMessage("game-state",l))throw new Error("Peer returned stale or invalid game state");return l}))}catch(r){e===this.liveSyncGeneration&&(this.p2pError=String(r))}if(e!==this.liveSyncGeneration)throw new Error("Game sync generation changed");const n=await fetch(`${this.officialsOrigin}/api/game/state`,{cache:"no-store",signal:AbortSignal.timeout(5e3)});if(!n.ok)throw new Error("Game scorekeeper is offline");const s=new Uint8Array(await n.arrayBuffer());if(e!==this.liveSyncGeneration)throw new Error("Game sync generation changed");const a=Bt(s,`game:${this.pinnedTournamentId}`,this.pinnedPublisherPubkeyHex);if(a.kind!=="state"&&a.kind!=="snapshot"||!Number.isSafeInteger(a.revision)||Number(a.revision)<0||!Number.isSafeInteger(a.at_ms)||Number(a.at_ms)<0)throw new Error("Invalid signed game state");return this.ingestGameMessage("game-state",s),s}async submitGameTap(e){if(e.length>1024)throw new Error("Game tap too large");const i=await fetch(`${this.officialsOrigin}/api/game/tap`,{method:"POST",headers:{"Content-Type":"application/cbor"},body:new Uint8Array(e),signal:AbortSignal.timeout(8e3)});if(!i.ok)throw new Error("Game scorekeeper is offline");return new Uint8Array(await i.arrayBuffer())}sendGameTap(e,i=!1){const t=this.findUpstreamParentPeerId();if(e.length>1024)throw new Error("Game tap too large");const n=this.gameBackupParents.filter(d=>d.diagnostics().peers.some(_=>_.peerId===d.hostPeerId()&&_.transport!=="DISCONNECTED")),s=this.isP2pConnected()&&this.liveParent&&t,a=s?this.liveParent.diagnostics().peers.some(d=>d.peerId===t&&d.transport==="WEBRTC"):!1,r=n.filter(d=>d.diagnostics().peers.some(_=>_.peerId===d.hostPeerId()&&_.transport==="WEBRTC")),o=i?n.length?!a&&r.length&&s?[this.liveParent,...n]:n:s?[this.liveParent]:[]:s?!a&&r.length?[r[0]]:[this.liveParent]:n;if(!o.length)throw new Error("No game parent connected");let l=!1,c;for(const d of o)try{d.send("game-tap",e,Ae.OfficialEventsOrderedReliable,d===this.liveParent?t:d.hostPeerId()),l=!0}catch(_){c=_}if(!l&&c)throw c}getPublicPlayerWebUrl(e=nt){if(!this.defaultJoinQrUri)return"";const i=Le(this.defaultJoinQrUri);if(!i.valid||!i.payload)return"";if(!i.payload.signature_hex&&i.payload.tournament_id){const t=new URL(`${e.trim().replace(/\/+$/,"")}/`);return i.payload.publisher_pubkey_hex?t.hash=new URLSearchParams({session:`game:${i.payload.tournament_id}`,root:i.payload.publisher_pubkey_hex}).toString():t.search=i.payload.tournament_id,t.href}return ys(i.payload,e,this.publicNostrRelays)}getDirectJoinKeyUrl(e=yi()){const i=e.trim().replace(/\/+$/,""),t=this.pinnedPublisherPubkeyHex||this.envelope.publisher_pubkey_hex||this.pinnedTournamentId||this.envelope.tournament_id;return t?`${i}/?${t}`:`${i}/`}getDirectOfficialsUrl(e){const i=typeof window<"u"&&window.location?.origin&&!window.location.origin.includes("github.io")&&window.location.origin!=="null"?`${window.location.origin}/officials`:`${nt.replace(/\/+$/,"")}/officials`,t=(e??i).trim().replace(/\/+$/,""),n=this.pinnedPublisherPubkeyHex||this.envelope.publisher_pubkey_hex||this.pinnedTournamentId||this.envelope.tournament_id;return n?`${t}/?${n}`:`${t}/`}getPublicFallbackOfficialsUrl(e=`${nt.replace(/\/+$/,"")}/officials`){const i=e.trim().replace(/\/+$/,""),t=this.pinnedPublisherPubkeyHex||this.envelope.publisher_pubkey_hex||this.pinnedTournamentId||this.envelope.tournament_id;return t?`${i}/?${t}`:`${i}/`}ingestNostrRelayEvent(e,i){try{const t=JSON.parse(e);if(!Array.isArray(t)||t[0]!=="EVENT"||!t[2]||typeof t[2]!="object")return!1;const n=t[2];if(typeof n.content!="string"||!n.content)return!1;const s=JSON.parse(n.content);return this.ingestSignedEnvelope(s,"LIVE_OFFICIALS_STREAM",{kind:"NOSTR",endpoint:i})}catch{return!1}}buildNostrSubscriptionFilters(){const e=[];return this.pinnedTournamentId&&this.pinnedTournamentId!=="manual-pubkey"&&e.push(`openmat-proj:${this.pinnedTournamentId}`),this.pinnedPublisherPubkeyHex&&e.push(`openmat-pub:${this.pinnedPublisherPubkeyHex.toLowerCase()}`),e.length===0&&e.push("openmat:v1"),[{kinds:[24880,30078],"#x":e}]}closePublicNostrRelaySockets(){for(const e of this.nostrRelaySockets.values())try{e.close()}catch{}this.nostrRelaySockets.clear(),this.nostrSocketFilterKeys.clear()}startPublicNostrRelaySync(e=this.liveSyncGeneration){if(typeof WebSocket>"u"||!this.pinnedPublisherPubkeyHex&&!this.pinnedTournamentId)return;if(this.isCompactSseOpen()||this.isP2pConnected()||this.eventSource?.readyState===1){this.closePublicNostrRelaySockets();return}const t=`om-proj-${(this.pinnedTournamentId||this.pinnedPublisherPubkeyHex||"live").slice(0,24)}`,n=this.buildNostrSubscriptionFilters(),s=JSON.stringify(n);for(const a of this.publicNostrRelays){if(typeof window<"u"&&window.location?.protocol==="https:"&&!a.startsWith("wss:"))continue;const r=this.nostrRelaySockets.get(a);if(r){if(r.readyState===WebSocket.OPEN&&this.nostrSocketFilterKeys.get(a)!==s)try{r.send(JSON.stringify(["REQ",t,...n])),this.nostrSocketFilterKeys.set(a,s)}catch{}continue}try{const o=new WebSocket(a);this.nostrRelaySockets.set(a,o),o.onopen=()=>{if(e!==this.liveSyncGeneration||this.nostrRelaySockets.get(a)!==o){o.close();return}try{const l=this.buildNostrSubscriptionFilters(),c=JSON.stringify(l);o.send(JSON.stringify(["REQ",t,...l])),this.nostrSocketFilterKeys.set(a,c)}catch{}},o.onmessage=l=>{e===this.liveSyncGeneration&&typeof l.data=="string"&&this.ingestNostrRelayEvent(l.data,a)},o.onclose=()=>{this.nostrRelaySockets.get(a)===o&&(this.nostrRelaySockets.delete(a),this.nostrSocketFilterKeys.delete(a))},o.onerror=()=>{try{o.close()}catch{}}}catch{}}}applyScannedTournamentJoinQr(e){const i=Le(e);if(!i.valid||!i.payload)return{valid:!1,reason:i.reason};const t=i.payload.publisher_pubkey_hex,n=i.payload.tournament_id==="manual-pubkey",s=n?t===this.pinnedPublisherPubkeyHex?this.pinnedTournamentId:"":i.payload.tournament_id,a=!this.bootstrapping&&(this.eventSource!==null||this.pollTimer!==null||i.payload.issued_at_ms>0&&i.payload.issued_at_ms>this.pinnedIssuedAtMs),r=this.pinnedPublisherPubkeyHex!==t||this.pinnedTournamentId!==s||a;this.setTournamentIdentity(s,t),this.publisherOnlyJoin=!!(t&&n),this.pinnedIssuedAtMs=i.payload.issued_at_ms||0;const o=typeof window<"u"&&window.location?.protocol==="https:"&&i.payload.relay_origin.startsWith("http://")&&!i.payload.relay_origin.startsWith("http://127.0.0.1")&&!i.payload.relay_origin.startsWith("http://localhost"),l=!i.payload.signature_hex&&i.payload.relay_origin==="http://127.0.0.1:5174"&&typeof window<"u"&&window.location?.protocol==="https:";!o&&!l&&this.setOfficialsOrigin(i.payload.relay_origin),this.p2pAvailable=!0,this.p2pError="",this.lastRelayedProjection="",this.publicNostrRelays=[...i.payload.nostr_relays?.length?i.payload.nostr_relays:ei];const c=n?t:i.payload.signature_hex&&!o?Ri(i.payload):t&&s?`${nt}/#${new URLSearchParams({session:`game:${s}`,root:t})}`:t||s||e.trim();this.defaultJoinQrUri=c;try{this.defaultJoinQrSvg=qe(this.getPublicPlayerWebUrl(yi()))}catch{this.defaultJoinQrSvg=""}if(r){this.compactReplica=void 0,this.watchedBracketIds=[],this.lastCompactSseSeq=0,this.fetchedBracketEventlogIds.clear(),this.gameRevision=-1,this.gameTimestamp=-1,this.gameSnapshotTimestamp=-1,this.cachedGameState=null,this.gameRoutes.clear(),this.gameReceipts.clear();const _=s===Ht&&(!i.payload.tournament_name||i.payload.tournament_name===s)?Bn:i.payload.tournament_name||"Live Tournament";this.envelope={...this.envelope,tournament_id:s,tournament_name:_,snapshot_epoch:0,control_sequence_head:0,published_at_ms:0,publisher_pubkey_hex:t,signature_hex:"",payload_sha256_hex:"",athletes:[],bouts:[],mats:[],standings:[],bracket_frozen_by_class:{},ow_vote_tallies:{}},this.owVoteTallies.clear(),this.previousUrgencyByAthlete.clear(),this.lastVerifiedUpdateMs=0,this.lastDelivery=null,this.apiLastAttemptAtMs=0,this.apiLastSuccessAtMs=0,this.apiError="",this.connectionState="AWAITING_TOURNAMENT_JOIN"}!this.bootstrapping&&(this.eventSource||this.pollTimer)&&(this.stopLiveSync(),this.startLiveSync(this.officialsOrigin));const d=this.defaultJoinQrSvg;return this.onUpdateCallback?.(),{valid:!0,reason:i.reason,pubkeyHex:this.pinnedPublisherPubkeyHex,qrSvg:d}}onServiceWorkerMessage=e=>{e.data?.type==="OPENMAT_SW_VERSION"&&typeof e.data.version=="string"&&(this.serviceWorkerVersion=e.data.version,this.onUpdateCallback?.())};onVisibilityChange=()=>{document.visibilityState==="visible"&&this.onNetworkOnline()};onNetworkOnline=()=>{this.onUpdateCallback?.(),this.resumeLiveSync?.()};startLiveSync(e=this.officialsOrigin){this.stopLiveSync();const i=this.liveSyncGeneration;if(this.setOfficialsOrigin(e),this.broadcastChannel&&(this.broadcastChannel.onmessage=({data:l})=>{l&&typeof l=="object"&&"signature_hex"in l&&this.ingestSignedEnvelope(l,"LIVE_OFFICIALS_STREAM",{kind:"BROADCAST"})}),typeof window>"u")return;"serviceWorker"in navigator&&(navigator.serviceWorker.addEventListener("message",this.onServiceWorkerMessage),navigator.serviceWorker.ready.then(l=>l.active?.postMessage({type:"OPENMAT_GET_SW_VERSION"})).catch(()=>{})),this.restoreExistingWebPushSubscription();let t=!1,n=!1,s=!!(this.pinnedPublisherPubkeyHex||this.pinnedTournamentId),a=!1,r=!1;const o=async(l=!1)=>{if(i===this.liveSyncGeneration){if(t){n||=l;return}t=!0;try{if(!s&&!this.pinnedPublisherPubkeyHex&&!this.pinnedTournamentId||a&&!this.pinnedPublisherPubkeyHex){try{if(!a&&typeof window<"u"&&/(^|\.)github\.io\.?$/i.test(window.location.hostname)&&e===window.location.origin){const _=await this.resolveStaticHostVenueOrigin();if(i!==this.liveSyncGeneration)return;_&&(e=_,a=!0,this.setOfficialsOrigin(_))}const d=await this.fetchJoinBootstrap();if(i!==this.liveSyncGeneration)return;if(d?.joinQrUri){const _=Le(d.joinQrUri);if(_.valid&&_.payload?.relay_origin===e&&(!this.pinnedPublisherPubkeyHex||_.payload.publisher_pubkey_hex===this.pinnedPublisherPubkeyHex)){this.bootstrapping=!0;try{this.applyScannedTournamentJoinQr(d.joinQrUri)}finally{this.bootstrapping=!1}Array.isArray(d.iceServers)&&d.iceServers.length>0&&this.gameIceServers.length===0&&(this.gameIceServers=d.iceServers),this.p2pAvailable=d.capabilities?.p2p!==!1,d.capabilities?.compactSse===!0&&(this.compactSseAvailable=!0),s=!0,r=!0}}}catch{}if(!s&&!this.pinnedPublisherPubkeyHex&&!this.pinnedTournamentId&&typeof window<"u"&&!/^(127\.0\.0\.1|localhost)$/i.test(window.location.hostname)){this.bootstrapping=!0;try{this.applyScannedTournamentJoinQr(Ht)}finally{this.bootstrapping=!1}s=!0,this.onUpdateCallback?.()}}if(i!==this.liveSyncGeneration||!this.pinnedPublisherPubkeyHex&&!this.pinnedTournamentId||(this.startPublicNostrRelaySync(i),!this.pinnedPublisherPubkeyHex))return;const c=this.officialsOrigin;if(typeof window<"u"&&window.location?.protocol==="https:"&&c.startsWith("http://")&&!c.startsWith("http://127.0.0.1")&&!c.startsWith("http://localhost")||!r&&!this.compactSseAvailable&&typeof EventSource<"u"&&typeof window<"u"&&!/^(127\.0\.0\.1|localhost|\[::1\])$/i.test(window.location.hostname)&&(r=!0,await this.fetchProjectionHttpBackup(c,i),i!==this.liveSyncGeneration))return;if(this.shouldPreferCompactSse()){if(!this.maintainGameAdmission&&(this.liveParent||this.liveChildren)&&(this.syncGeneration++,this.overlayMesh.stopLiveRooms(),this.liveParent=null,this.liveChildren=null),(l||!this.envelope.signature_hex)&&(await this.fetchProjectionHttpBackup(c,i),i!==this.liveSyncGeneration))return;if(!this.eventSource||this.eventSource.readyState===2||!this.compactSseModeActive?this.openLiveEventStream(c,i):!this.isCompactSseOpen()&&Date.now()-this.lastVerifiedUpdateMs>=1e4&&await this.fetchProjectionHttpBackup(c,i),i===this.liveSyncGeneration&&this.maintainGameAdmission&&this.p2pAvailable&&!this.liveParent)try{await this.startP2p(c)}catch(d){this.p2pError=String(d)}return}if(this.p2pAvailable&&!this.isP2pConnected())try{await this.startP2p(c)}catch(d){this.p2pError=String(d)}if(i!==this.liveSyncGeneration)return;if(this.isP2pConnected()){this.eventSource&&(this.eventSource.close(),this.eventSource=null,this.compactSseModeActive=!1);const d=this.findUpstreamParentPeerId(),_=Date.now()-this.lastVerifiedUpdateMs,m=this.liveParent;if(l||!this.envelope.signature_hex||_>=15e3){const[v,u]=await Promise.all([this.refreshViaP2p(!1),l&&this.refreshCompactBracket()]);if(i!==this.liveSyncGeneration)return;!v&&!u&&m===this.liveParent&&(l||Date.now()-this.lastVerifiedUpdateMs>=15e3)&&(this.syncGeneration++,this.overlayMesh.stopLiveRooms(),this.liveParent=null,this.liveChildren=null)}else if(d&&this.liveParent)try{this.lastSubtreePingRttMs=await this.liveParent.ping(d)??this.lastSubtreePingRttMs}catch(v){this.p2pError=String(v)}if(this.isP2pConnected())return}if(!await this.fetchProjectionHttpBackup(c,i))return;!this.isP2pConnected()&&typeof EventSource<"u"&&this.openLiveEventStream(c,i)}catch{}finally{t=!1,n&&(n=!1,o(!0))}}};this.resumeLiveSync=()=>{o(!0)},typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisibilityChange),window.addEventListener("online",this.onNetworkOnline),o(),this.pollTimer=setInterval(()=>{o()},2500)}stopLiveSync(){typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisibilityChange),typeof window<"u"&&window.removeEventListener?.("online",this.onNetworkOnline),this.resumeLiveSync=void 0,typeof navigator<"u"&&"serviceWorker"in navigator&&navigator.serviceWorker.removeEventListener("message",this.onServiceWorkerMessage),this.liveSyncGeneration++,this.gameStatePending=null,this.syncGeneration++,this.overlayMesh.stopLiveRooms(),this.liveParent=null,this.liveChildren=null;for(const e of this.nostrRelaySockets.values())try{e.close()}catch{}this.nostrRelaySockets.clear(),this.nostrSocketFilterKeys.clear(),this.broadcastChannel&&(this.broadcastChannel.onmessage=null),this.resyncTimer&&(clearTimeout(this.resyncTimer),this.resyncTimer=null),this.eventSource?.close(),this.eventSource=null,this.compactSseModeActive=!1,this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}evaluateWatchedNotifications(e,i){const t=this.computeWatchedAthleteNotifications(e),n=new Set;for(const s of t){n.add(s.athleteId);const a=this.previousUrgencyByAthlete.get(s.athleteId),r=`${s.boutNumber}:${s.MatAndUrgencyKey}`;i==="LIVE_OFFICIALS_STREAM"&&a!==r&&this.dispatchServiceWorkerPushNotification(s),this.previousUrgencyByAthlete.set(s.athleteId,r)}for(const s of[...this.previousUrgencyByAthlete.keys()])n.has(s)||this.previousUrgencyByAthlete.delete(s)}ingestSignedEnvelope(e,i,t){if(!this.pinnedPublisherPubkeyHex&&!this.pinnedTournamentId||typeof e?.publisher_pubkey_hex!="string"||this.pinnedPublisherPubkeyHex&&e.publisher_pubkey_hex.toLowerCase()!==this.pinnedPublisherPubkeyHex.toLowerCase()||!se.verifySignedPublicProjection(e)||/^OPENMAT-VENUE-[A-F0-9]{8}$/.test(e.tournament_id??"")&&Array.isArray(e.athletes)&&e.athletes.length>0&&e.athletes.every(o=>/^mat-(?:[1-9]|1[0-9]|20)-(?:q[23]-)?(?:red|green)$/.test(o?.athlete_id))||this.publisherOnlyJoin&&this.publicView().athletes.length>0&&(!Array.isArray(e.athletes)||e.athletes.length===0))return!1;const s=!this.pinnedTournamentId||this.pinnedTournamentId==="manual-pubkey"||e.tournament_id===this.pinnedTournamentId,a=!s&&this.publisherOnlyJoin&&!!this.pinnedPublisherPubkeyHex&&e.publisher_pubkey_hex?.toLowerCase()===this.pinnedPublisherPubkeyHex.toLowerCase()&&e.published_at_ms>Math.max(this.envelope.published_at_ms,this.pinnedIssuedAtMs);if(!s&&!a||s&&e.tournament_id===this.envelope.tournament_id&&(e.snapshot_epoch<this.envelope.snapshot_epoch||e.control_sequence_head<this.envelope.control_sequence_head||this.envelope.signature_hex&&e.control_sequence_head===this.envelope.control_sequence_head&&e.published_at_ms<this.envelope.published_at_ms))return!1;this.setTournamentIdentity(e.tournament_id,e.publisher_pubkey_hex.toLowerCase()),this.compactReplica&&(this.compactReplica.tournamentId!==this.pinnedTournamentId||this.compactReplica.publisherHex!==this.pinnedPublisherPubkeyHex)&&(this.compactReplica=void 0),a&&(this.watchedBracketIds=[],this.fetchedBracketEventlogIds.clear(),this.pollTimer&&this.startLiveSync());const r=e.payload_sha256_hex!==this.envelope.payload_sha256_hex;if(r&&(this.envelope=structuredClone(e)),this.lastVerifiedUpdateMs=Date.now(),this.lastDelivery={...t??{kind:i==="VERIFIED_LOCAL_CACHE"?"CACHE":i==="OFFLINE_SNAPSHOT"?"SNAPSHOT":"UNKNOWN"},receivedAtMs:this.lastVerifiedUpdateMs},this.connectionState=i,this.liveChildren&&e.payload_sha256_hex!==this.lastRelayedProjection)try{this.liveChildren.send("public-projection",new TextEncoder().encode(JSON.stringify(e))),this.lastRelayedProjection=e.payload_sha256_hex}catch(o){this.p2pError=String(o)}if(this.framesRoutedViaMux=[...this.overlayMesh.liveRooms.values()].reduce((o,l)=>o+l.framesSent+l.framesReceived,0),r)try{const o=this.defaultJoinQrUri||this.pinnedPublisherPubkeyHex||this.pinnedTournamentId;globalThis.localStorage?.setItem(vi,JSON.stringify({joinQrUri:o,envelope:e}))}catch{}return this.owVoteTallies=new Map(Object.entries(e.ow_vote_tallies??{})),this.etaEstimator.observeEnvelope(this.publicView(),this.lastVerifiedUpdateMs),this.evaluateWatchedNotifications(this.lastVerifiedUpdateMs,i),this.onUpdateCallback?.(),!0}getSubtreeP2pStatus(){const e=this.liveParent?[...this.liveParent.members.keys()]:[];return{roomId:this.assignedSubtreeRoomId,parentId:this.assignedSubtreeParentId,peerId:this.overlayMesh.peerId,maxRoomPeers:ks,activePeersInRoom:e.length,signalingAction:Ss,rpcAction:ws,pingRttMs:this.liveParent?.lastPingRttMs??this.lastSubtreePingRttMs,muxChannels:["official-events","current-state","bulk-chunks"],framesRoutedViaMux:[...this.overlayMesh.liveRooms.values()].reduce((i,t)=>i+t.framesSent+t.framesReceived,0)}}getConnectionStatus(e=Date.now()){const i=[...this.overlayMesh.liveRooms.values()].map(p=>p.diagnostics()),t=this.liveParent?.diagnostics(),n=this.liveChildren?.diagnostics(),s=this.findUpstreamParentPeerId(),a=t?.peers.find(p=>p.peerId===s)??null,r=this.publicNostrRelays.map(p=>{const b=this.nostrRelaySockets.get(p)?.readyState;return{url:p,state:b===1?"OPEN":b===0?"CONNECTING":"CLOSED"}}),o=this.eventSource?.readyState===1?"OPEN":this.eventSource?.readyState===0?"CONNECTING":"CLOSED",l=this.lastDelivery,c=l?Math.max(0,e-l.receivedAtMs):null,d=i.find(p=>p.roomId===l?.roomId)?.peers.find(p=>p.peerId===l?.peerId),_=typeof navigator>"u"?null:navigator.onLine,m=l?.kind==="P2P"?!!(d&&d.transport!=="DISCONNECTED"):l?.kind==="NOSTR"?r.some(p=>p.url===l.endpoint&&p.state==="OPEN"):l?.kind==="COMPACT_SSE"||l?.kind==="HTTP_SSE"?o==="OPEN"&&_!==!1:l?.kind==="HTTP_POLL"?this.pollTimer!==null&&c!==null&&c<1e4&&_!==!1:l?.kind==="BROADCAST"?this.pollTimer!==null&&c!==null&&c<1e4:!1,v=!!(this.envelope.signature_hex||this.compactReplica?.tournamentId===this.pinnedTournamentId&&this.compactReplica?.receivedAtMs),u=!!(v&&this.connectionState==="LIVE_OFFICIALS_STREAM"&&m),f=Math.max(this.envelope.published_at_ms,this.compactReplica?.receivedAtMs??0);return{live:u,delivery:l,ageMs:c,sourceConnected:m,transport:l?.kind==="P2P"?d?.transport??"DISCONNECTED":l?.kind??"NONE",peerId:this.overlayMesh.peerId,upstream:a,downstream:n?.peers??[],roomPeers:t?.peers.filter(p=>p.peerId!==s)??[],pingRttMs:t?.pingRttMs??null,framesSent:i.reduce((p,b)=>p+b.framesSent,0),framesReceived:i.reduce((p,b)=>p+b.framesReceived,0),rtcFramesSent:i.reduce((p,b)=>p+b.rtcFramesSent,0),forwardedFramesSent:i.reduce((p,b)=>p+b.wsFramesSent,0),reconnectCount:i.reduce((p,b)=>p+b.reconnectCount,0),api:{origin:this.officialsOrigin,stream:o,polling:this.pollTimer!==null&&this.apiLastAttemptAtMs>0&&e-this.apiLastAttemptAtMs<1e4&&!this.isP2pConnected()&&!this.isCompactSseOpen(),lastAttemptAtMs:this.apiLastAttemptAtMs,lastSuccessAtMs:this.apiLastSuccessAtMs,error:this.apiError},relays:r,rooms:i,p2pError:this.p2pError,browserOnline:_,publisher:this.pinnedPublisherPubkeyHex,verified:v,publishedAtMs:f,snapshotEpoch:this.envelope.snapshot_epoch,serviceWorkerVersion:this.serviceWorkerVersion}}static isValidSchoolTeam(e,i=""){const t=(e||"").trim(),n=(i||t).trim();if(!t||!n)return!1;const s=new Set(["RED","GREEN","GRN","TBD","BYE","NONE","UNKNOWN"]);return!(s.has(t.toUpperCase())||s.has(n.toUpperCase()))}toggleFollowAthlete(e){return this.watchedAthleteIds.has(e)?this.watchedAthleteIds.delete(e):this.watchedAthleteIds.add(e),this.saveWatchlist(),this.syncActiveSubscriptionWatchlist(),this.onUpdateCallback?.(),this.watchedAthleteIds.has(e)}isFollowingTeam(e){if(!Te.isValidSchoolTeam(e))return!1;const i=this.publicView().athletes.filter(t=>t.team_id===e&&Te.isValidSchoolTeam(t.team_id,t.team_name));return i.length>0&&i.every(t=>this.watchedAthleteIds.has(t.athlete_id))}followTeam(e){if(Te.isValidSchoolTeam(e)){for(const i of this.publicView().athletes)i.team_id===e&&Te.isValidSchoolTeam(i.team_id,i.team_name)&&this.watchedAthleteIds.add(i.athlete_id);this.saveWatchlist(),this.syncActiveSubscriptionWatchlist(),this.onUpdateCallback?.()}}unfollowTeam(e){for(const i of this.publicView().athletes)i.team_id===e&&this.watchedAthleteIds.delete(i.athlete_id);this.saveWatchlist(),this.syncActiveSubscriptionWatchlist(),this.onUpdateCallback?.()}toggleFollowTeam(e){return Te.isValidSchoolTeam(e)?this.isFollowingTeam(e)?(this.unfollowTeam(e),!1):(this.followTeam(e),!0):!1}clearWatchedAthletes(){this.watchedAthleteIds.clear(),this.saveWatchlist(),this.syncActiveSubscriptionWatchlist(),this.onUpdateCallback?.()}get owVoteStorageKey(){return`openmat_players_ow_vote:${this.pinnedPublisherPubkeyHex}:${this.pinnedTournamentId}`}setTournamentIdentity(e,i){if(!(this.pinnedTournamentId===e&&this.pinnedPublisherPubkeyHex===i)&&(this.pinnedTournamentId=e,this.pinnedPublisherPubkeyHex=i,this.pendingVote=void 0,this.voterId="",this.owVoteStatusMessage="",this.owVotedAthleteId="",e&&i))try{this.owVotedAthleteId=globalThis.localStorage?.getItem(this.owVoteStorageKey)??""}catch{}}async castOwVote(e){const i=this.pinnedTournamentId;if(this.pendingVote||!i||!this.pinnedPublisherPubkeyHex||!this.getAthlete(e))return!1;const t=Symbol();this.pendingVote=t,this.owVoteStatusMessage="Submitting vote to tournament officials…";try{if(this.onUpdateCallback?.(),this.pendingVote!==t)return!1;if(!this.voterId){const r=`openmat_ow_voter_${i}`;this.voterId=(typeof localStorage<"u"?localStorage.getItem(r):null)??Ye(),typeof localStorage<"u"&&localStorage.setItem(r,this.voterId)}const n={tournamentId:i,voterId:this.voterId,athleteId:e};let s=this.p2pDelivery(),a=null;if(this.isP2pConnected())try{const r=await this.requestViaP2p("ow-vote",new TextEncoder().encode(JSON.stringify(n)));a=JSON.parse(new TextDecoder().decode(r))}catch(r){if(this.pendingVote!==t)return!1;if(this.p2pError=String(r),this.isP2pConnected())throw r}if(!a&&this.pendingVote===t&&!this.isP2pConnected()){s={kind:"HTTP_POLL",endpoint:this.officialsOrigin};const r=await fetch(`${this.officialsOrigin}/api/openmat-ow-vote`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});a=await r.json(),!r.ok&&a&&(a.ok=!1)}if(this.pendingVote!==t)return!1;if(!a?.ok||a.envelope?.tournament_id!==i||!this.ingestSignedEnvelope(a.envelope,"LIVE_OFFICIALS_STREAM",s))throw new Error(String(a?.error??a?.result??"Vote acknowledgement rejected"));if(this.pendingVote!==t)return!1;this.owVotedAthleteId=e;try{globalThis.localStorage?.setItem(this.owVoteStorageKey,e)}catch{}return this.owVoteStatusMessage="Vote confirmed by tournament officials.",!0}catch(n){return this.pendingVote!==t||(this.owVoteStatusMessage=`Vote not confirmed: ${n instanceof Error?n.message:String(n)}. Retry when connected.`),!1}finally{this.pendingVote===t&&(this.pendingVote=void 0,this.onUpdateCallback?.())}}async submitScorekeeperEvent(e){let i=this.p2pDelivery(),t=null;if(this.isP2pConnected())try{const n=await this.requestViaP2p("scorekeeper-event",new Uint8Array(e));t=JSON.parse(new TextDecoder().decode(n))}catch(n){if(this.p2pError=String(n),this.isP2pConnected())throw n}if(!t&&!this.isP2pConnected()){i={kind:"HTTP_POLL",endpoint:this.officialsOrigin};const n=await fetch(`${this.officialsOrigin}/api/openmat-scorekeeper-event`,{method:"POST",headers:{"Content-Type":"application/cbor"},body:new Uint8Array(e)});t=await n.json(),!n.ok&&t&&(t.ok=!1)}if(!t?.ok||!t.envelope||!this.ingestSignedEnvelope(t.envelope,"LIVE_OFFICIALS_STREAM",i))throw new Error(String(t?.error??t?.result??"Scorekeeper acknowledgement rejected"));return t.result.eventIdHex}getAthlete(e){return this.publicView().athletes.find(i=>i.athlete_id===e)}getEtaSnapshot(e=Date.now(),i){return this.etaEstimator.computeSnapshot(this.publicView(),e,i)}getBoutEta(e,i=Date.now(),t){if(e)return this.getEtaSnapshot(i,t).byMatchId.get(e)}getAthleteNextBoutEta(e,i=Date.now(),t){const n=this.findAthleteNextOrActiveBout(e);if(n)return this.getBoutEta(n.match_id,i,t)}computeWatchedAthleteNotifications(e=Date.now(),i){const t=[],n=this.publicView(),s=this.etaEstimator.computeSnapshot(n,e,i),a=n.bouts.filter(c=>!It(c,n.bouts)&&(c.lifecycle===E.InProgress||c.lifecycle===E.Ready||c.lifecycle===E.Assigned));for(const c of a){const d=s.byMatchId.get(c.match_id);for(const _ of["RED","GREEN"]){const m=_==="RED"?c.red_athlete_id:c.green_athlete_id;if(!m||!this.watchedAthleteIds.has(m))continue;const v=Tn(c,n.bouts,d);if(v==="SCHEDULED")continue;const u=this.getAthlete(m);if(!u)continue;const f=_==="RED"?c.green_athlete_id:c.red_athlete_id,p=this.getAthlete(f);let b="",g;v==="IN_PROGRESS"?(b=`MAT ${c.assigned_mat_id} ACTIVE — BOUT #${c.bout_number}`,g=0):v==="READY_UP_NEXT"?(g=d?.estimatedMinutes??0,b=g>0?`REPORT TO MAT ${c.assigned_mat_id} — BOUT #${c.bout_number} UP NEXT (~${g} MIN)`:`REPORT TO MAT ${c.assigned_mat_id} — BOUT #${c.bout_number} UP NEXT`):v==="ON_DECK"?(g=Math.max(1,d?.estimatedMinutes??6),b=`ON DECK MAT ${c.assigned_mat_id} — BOUT #${c.bout_number} (~${g} MIN)`):(g=Math.max(1,d?.estimatedMinutes??12),b=`IN THE HOLE MAT ${c.assigned_mat_id} — BOUT #${c.bout_number} (~${g} MIN)`);const k=d?Math.max(0,Math.floor(d.minWaitMs/6e4)):g,I=d?Math.max(k,Math.ceil(d.maxWaitMs/6e4)):g;t.push({id:`${c.match_id}:${m}`,athleteId:m,athleteName:u.public_display_name,teamName:u.team_name,weightClassId:c.weight_class_id,boutNumber:c.bout_number,matId:c.assigned_mat_id,corner:_,opponentName:p?.public_display_name??(f||"TBD"),opponentTeam:p?.team_name??"",urgency:v,headline:b,detail:`${u.public_display_name} (${_} Corner) vs ${p?.public_display_name??"TBD"} · ${c.weight_class_id} lbs ${c.round_label}`,estimatedMinutes:g,minEstimatedMinutes:k,maxEstimatedMinutes:I,shortEtaLabel:d?.shortLabel??(g===0?"Now":`~${g} min`),MatAndUrgencyKey:`${c.assigned_mat_id}:${v}`})}}const r={READY_UP_NEXT:0,IN_PROGRESS:1,ON_DECK:2,IN_THE_HOLE:3},o=t.sort((c,d)=>r[c.urgency]-r[d.urgency]||c.boutNumber-d.boutNumber),l=new Set;return o.filter(c=>l.has(c.athleteId)?!1:(l.add(c.athleteId),!0))}findAthleteNextOrActiveBout(e){const i=this.publicView().bouts,t=s=>s.lifecycle===E.InProgress||s.clock_running?0:s.lifecycle===E.Ready?1:2;return i.filter(s=>(s.red_athlete_id===e||s.green_athlete_id===e)&&!ve(s.lifecycle)&&!It(s,i)).sort((s,a)=>t(s)-t(a)||Math.max(1,s.round_index||1)-Math.max(1,a.round_index||1)||bt(s,a))[0]}findAthleteCompletedBouts(e){return this.publicView().bouts.filter(i=>(i.red_athlete_id===e||i.green_athlete_id===e)&&ve(i.lifecycle)&&!Fe(i)).sort((i,t)=>i.completed_at_ms!==t.completed_at_ms?i.completed_at_ms-t.completed_at_ms:i.round_index-t.round_index||i.bout_number-t.bout_number||i.match_id.localeCompare(t.match_id))}recordCurrentUrgencies(){for(const e of this.computeWatchedAthleteNotifications())this.previousUrgencyByAthlete.set(e.athleteId,`${e.boutNumber}:${e.MatAndUrgencyKey}`)}async toggleCellularWebPush(){return this.webPushState==="SUBSCRIBED_CELLULAR"?(await this.unsubscribeCellularWebPush(),this.webPushState):this.subscribeCellularWebPush()}canUseWebPush(e){return this.officialsOrigin===e&&this.webPushAvailable!==!1}async subscribeCellularWebPush(){if(typeof window>"u"||typeof Notification>"u"){const i=typeof window<"u"&&window.location?.protocol==="http:"&&!/^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname);return this.webPushState="UNSUPPORTED_OR_REQUIRES_PWA",this.webPushStatusMessage=i?"Browser alerts require HTTPS. Open the HTTPS venue link or install from the public link.":"Install OpenMat to your Home Screen or use a notification-capable browser for alerts.",this.onUpdateCallback?.(),this.webPushState}if(this.webPushState="SUBSCRIBING",this.webPushStatusMessage="Enabling mat call alerts...",this.onUpdateCallback?.(),(Notification.permission==="granted"?"granted":await Notification.requestPermission())!=="granted")return this.webPushState="PERMISSION_DENIED",this.webPushStatusMessage="Notification permission denied. Enable notifications in browser settings.",this.onUpdateCallback?.(),this.webPushState;try{const i=this.officialsOrigin;if((this.joinBootstrapRequest||this.webPushAvailable===void 0)&&await this.fetchJoinBootstrap(),this.canUseWebPush(i)&&!this.vapidPublicKeyBase64Url)try{const t=await fetch(`${i}/api/openmat-webpush/vapid-public-key`);if(t.ok){const n=await t.json();n.publicKeyBase64Url&&this.canUseWebPush(i)&&(this.vapidPublicKeyBase64Url=n.publicKeyBase64Url)}}catch{}if(this.canUseWebPush(i)&&"serviceWorker"in navigator)try{const n=await navigator.serviceWorker.getRegistration()??await navigator.serviceWorker.register("./offline.js");if(await navigator.serviceWorker.ready,"PushManager"in window&&n.pushManager){let s=await n.pushManager.getSubscription();if(this.canUseWebPush(i)&&this.vapidPublicKeyBase64Url){const a=As(this.vapidPublicKeyBase64Url);if(s&&s.options?.applicationServerKey){const r=new Uint8Array(s.options.applicationServerKey);r.byteLength===a.byteLength&&r.every((l,c)=>l===a[c])||(await s.unsubscribe(),s=null)}!s&&this.canUseWebPush(i)&&(s=await n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)}))}if(s&&this.canUseWebPush(i)){const a=s.toJSON(),r=s.getKey("p256dh"),o=s.getKey("auth");this.activePushSubscription={endpoint:s.endpoint,expirationTime:s.expirationTime,keys:{p256dh:a.keys?.p256dh??(r?ii(new Uint8Array(r)):""),auth:a.keys?.auth??(o?ii(new Uint8Array(o)):"")}},await this.syncActiveSubscriptionWatchlist()}}}catch{}try{typeof localStorage<"u"&&localStorage.setItem("openmat_players_alerts_enabled","1")}catch{}return this.recordCurrentUrgencies(),this.webPushState="SUBSCRIBED_CELLULAR",this.webPushStatusMessage=`Mat call alerts active (${this.watchedAthleteIds.size} followed).`,this.onUpdateCallback?.(),this.webPushState}catch(i){return this.webPushState="UNSUPPORTED_OR_REQUIRES_PWA",this.webPushStatusMessage=`Alert setup error: ${i instanceof Error?i.message:String(i)}`,this.onUpdateCallback?.(),this.webPushState}}async unsubscribeCellularWebPush(){const e=this.officialsOrigin;try{if(typeof navigator<"u"&&"serviceWorker"in navigator){const t=await(await navigator.serviceWorker.getRegistration())?.pushManager?.getSubscription();if(t){const n=t.endpoint;await t.unsubscribe(),this.canUseWebPush(e)&&await fetch(`${e}/api/openmat-webpush/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:n})}).catch(()=>{})}}typeof localStorage<"u"&&localStorage.removeItem("openmat_players_alerts_enabled")}catch{}this.activePushSubscription=null,this.webPushState="UNSUBSCRIBED",this.webPushStatusMessage="Mat call alerts disabled.",this.onUpdateCallback?.()}async restoreExistingWebPushSubscription(){if(!(typeof window>"u"||typeof Notification>"u"))try{let e=!1;try{e=typeof localStorage<"u"&&localStorage.getItem("openmat_players_alerts_enabled")==="1"}catch{}if(Notification.permission!=="granted"||!e&&!await("serviceWorker"in navigator?await navigator.serviceWorker.getRegistration():void 0)?.pushManager?.getSubscription())return;await this.subscribeCellularWebPush()}catch{}}async syncActiveSubscriptionWatchlist(){if(this.webPushState==="SUBSCRIBED_CELLULAR"&&(this.webPushStatusMessage=`Mat call alerts active (${this.watchedAthleteIds.size} followed).`),!(!this.activePushSubscription||this.webPushAvailable===!1))try{await fetch(`${this.officialsOrigin}/api/openmat-webpush/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subscription:this.activePushSubscription,watchedAthleteIds:Array.from(this.watchedAthleteIds)})})}catch{}}async dispatchServiceWorkerPushNotification(e){if(this.webPushState!=="SUBSCRIBED_CELLULAR")return;const i=`openmat-call-${e.athleteId}`;if(typeof navigator<"u"&&"serviceWorker"in navigator)try{const t=await navigator.serviceWorker.getRegistration();if(t&&typeof t.showNotification=="function"){await t.showNotification(e.headline,{body:e.detail,tag:i,requireInteraction:e.urgency==="READY_UP_NEXT"||e.urgency==="ON_DECK",data:{matId:e.matId,boutNumber:e.boutNumber,athleteId:e.athleteId,urgency:e.urgency}});return}}catch{}try{typeof Notification=="function"&&Notification.permission==="granted"&&new Notification(e.headline,{body:e.detail,tag:i})}catch{}}loadWatchlist(){try{const e=JSON.parse(globalThis.localStorage?.getItem(bi)??"[]");Array.isArray(e)&&(this.watchedAthleteIds=new Set(e.filter(i=>typeof i=="string"&&i.trim().length>0&&!/^mat-(?:[1-9]|1[0-9]|20)-(?:q[23]-)?(?:red|green)$/i.test(i))))}catch{}}saveWatchlist(){try{globalThis.localStorage?.setItem(bi,JSON.stringify(Array.from(this.watchedAthleteIds)))}catch{}}}export{Ht as DEFAULT_UPCOMING_TOURNAMENT_ID,Bn as DEFAULT_UPCOMING_TOURNAMENT_NAME,Te as PlayersSyncCoordinator,On as compactBracketDivision};
