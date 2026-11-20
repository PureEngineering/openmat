(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const Ti=globalThis,qn=Ti.ShadowRoot&&(Ti.ShadyCSS===void 0||Ti.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Er=Symbol(),bs=new WeakMap;let Ja=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Er)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(qn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=bs.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&bs.set(t,e))}return e}toString(){return this.cssText}};const Xa=r=>new Ja(typeof r=="string"?r:r+"",void 0,Er),Za=(r,e)=>{if(qn)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Ti.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},ys=qn?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Xa(t)})(r):r;const{is:eo,defineProperty:to,getOwnPropertyDescriptor:io,getOwnPropertyNames:no,getOwnPropertySymbols:so,getPrototypeOf:ro}=Object,zi=globalThis,ws=zi.trustedTypes,ao=ws?ws.emptyScript:"",oo=zi.reactiveElementPolyfillSupport,Xt=(r,e)=>r,Sn={toAttribute(r,e){switch(e){case Boolean:r=r?ao:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},xr=(r,e)=>!eo(r,e),vs={attribute:!0,type:String,converter:Sn,reflect:!1,useDefault:!1,hasChanged:xr};Symbol.metadata??=Symbol("metadata"),zi.litPropertyMetadata??=new WeakMap;let Ct=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=vs){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&to(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=io(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){const o=s?.call(this);n?.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??vs}static _$Ei(){if(this.hasOwnProperty(Xt("elementProperties")))return;const e=ro(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Xt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xt("properties"))){const t=this.properties,i=[...no(t),...so(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ys(s))}else e!==void 0&&t.push(ys(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Za(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:Sn).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Sn;this._$Em=s;const o=a.fromAttribute(t,n.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(e,t,i,s=!1,n){if(e!==void 0){const a=this.constructor;if(s===!1&&(n=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??xr)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:a}=n,o=this[s];a!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,n,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Ct[Xt("elementProperties")]=new Map,Ct[Xt("finalized")]=new Map,oo?.({ReactiveElement:Ct}),(zi.reactiveElementVersions??=[]).push("2.1.2");const Gn=globalThis,ks=r=>r,$i=Gn.trustedTypes,Ss=$i?$i.createPolicy("lit-html",{createHTML:r=>r}):void 0,Rr="$lit$",rt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ar="?"+rt,co=`<${Ar}>`,vt=document,ai=()=>vt.createComment(""),oi=r=>r===null||typeof r!="object"&&typeof r!="function",jn=Array.isArray,lo=r=>jn(r)||typeof r?.[Symbol.iterator]=="function",ln=`[ 	
\f\r]`,qt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Es=/-->/g,xs=/>/g,ht=RegExp(`>|${ln}(?:([^\\s"'>=/]+)(${ln}*=${ln}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rs=/'/g,As=/"/g,Ir=/^(?:script|style|textarea|title)$/i,Cr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),U=Cr(1),dn=Cr(2),Lt=Symbol.for("lit-noChange"),Se=Symbol.for("lit-nothing"),Is=new WeakMap,mt=vt.createTreeWalker(vt,129);function Mr(r,e){if(!jn(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ss!==void 0?Ss.createHTML(e):e}const ho=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",a=qt;for(let o=0;o<t;o++){const c=r[o];let l,h,d=-1,u=0;for(;u<c.length&&(a.lastIndex=u,h=a.exec(c),h!==null);)u=a.lastIndex,a===qt?h[1]==="!--"?a=Es:h[1]!==void 0?a=xs:h[2]!==void 0?(Ir.test(h[2])&&(s=RegExp("</"+h[2],"g")),a=ht):h[3]!==void 0&&(a=ht):a===ht?h[0]===">"?(a=s??qt,d=-1):h[1]===void 0?d=-2:(d=a.lastIndex-h[2].length,l=h[1],a=h[3]===void 0?ht:h[3]==='"'?As:Rs):a===As||a===Rs?a=ht:a===Es||a===xs?a=qt:(a=ht,s=void 0);const m=a===ht&&r[o+1].startsWith("/>")?" ":"";n+=a===qt?c+co:d>=0?(i.push(l),c.slice(0,d)+Rr+c.slice(d)+rt+m):c+rt+(d===-2?o:m)}return[Mr(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class ci{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,c=this.parts,[l,h]=ho(e,t);if(this.el=ci.createElement(l,i),mt.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=mt.nextNode())!==null&&c.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(Rr)){const u=h[a++],m=s.getAttribute(d).split(rt),p=/([.?@])?(.*)/.exec(u);c.push({type:1,index:n,name:p[2],strings:m,ctor:p[1]==="."?_o:p[1]==="?"?mo:p[1]==="@"?po:Yi}),s.removeAttribute(d)}else d.startsWith(rt)&&(c.push({type:6,index:n}),s.removeAttribute(d));if(Ir.test(s.tagName)){const d=s.textContent.split(rt),u=d.length-1;if(u>0){s.textContent=$i?$i.emptyScript:"";for(let m=0;m<u;m++)s.append(d[m],ai()),mt.nextNode(),c.push({type:2,index:++n});s.append(d[u],ai())}}}else if(s.nodeType===8)if(s.data===Ar)c.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(rt,d+1))!==-1;)c.push({type:7,index:n}),d+=rt.length-1}n++}}static createElement(e,t){const i=vt.createElement("template");return i.innerHTML=e,i}}function Dt(r,e,t=r,i){if(e===Lt)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl;const n=oi(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=Dt(r,s._$AS(r,e.values),s,i)),e}class uo{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??vt).importNode(t,!0);mt.currentNode=s;let n=mt.nextNode(),a=0,o=0,c=i[0];for(;c!==void 0;){if(a===c.index){let l;c.type===2?l=new fi(n,n.nextSibling,this,e):c.type===1?l=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(l=new fo(n,this,e)),this._$AV.push(l),c=i[++o]}a!==c?.index&&(n=mt.nextNode(),a++)}return mt.currentNode=vt,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class fi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=Se,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Dt(this,e,t),oi(e)?e===Se||e==null||e===""?(this._$AH!==Se&&this._$AR(),this._$AH=Se):e!==this._$AH&&e!==Lt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):lo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Se&&oi(this._$AH)?this._$AA.nextSibling.data=e:this.T(vt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ci.createElement(Mr(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const n=new uo(s,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=Is.get(e.strings);return t===void 0&&Is.set(e.strings,t=new ci(e)),t}k(e){jn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new fi(this.O(ai()),this.O(ai()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const i=ks(e).nextSibling;ks(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Yi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=Se,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Se}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=Dt(this,e,t,0),a=!oi(e)||e!==this._$AH&&e!==Lt,a&&(this._$AH=e);else{const o=e;let c,l;for(e=n[0],c=0;c<n.length-1;c++)l=Dt(this,o[i+c],t,c),l===Lt&&(l=this._$AH[c]),a||=!oi(l)||l!==this._$AH[c],l===Se?e=Se:e!==Se&&(e+=(l??"")+n[c+1]),this._$AH[c]=l}a&&!s&&this.j(e)}j(e){e===Se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class _o extends Yi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Se?void 0:e}}class mo extends Yi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Se)}}class po extends Yi{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=Dt(this,e,t,0)??Se)===Lt)return;const i=this._$AH,s=e===Se&&i!==Se||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Se&&(i===Se||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class fo{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Dt(this,e)}}const go=Gn.litHtmlPolyfillSupport;go?.(ci,fi),(Gn.litHtmlVersions??=[]).push("3.3.3");const bo=(r,e,t)=>{const i=t?.renderBefore??e;let s=i._$litPart$;if(s===void 0){const n=t?.renderBefore??null;i._$litPart$=s=new fi(e.insertBefore(ai(),n),n,void 0,t??{})}return s._$AI(r),s};const zn=globalThis;class Zt extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=bo(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Lt}}Zt._$litElement$=!0,Zt.finalized=!0,zn.litElementHydrateSupport?.({LitElement:Zt});const yo=zn.litElementPolyfillSupport;yo?.({LitElement:Zt});(zn.litElementVersions??=[]).push("4.2.2");const yi=BigInt(2**32-1),Cs=BigInt(32);function wo(r,e=!1){return e?{h:Number(r&yi),l:Number(r>>Cs&yi)}:{h:Number(r>>Cs&yi)|0,l:Number(r&yi)|0}}function vo(r,e=!1){const t=r.length;let i=new Uint32Array(t),s=new Uint32Array(t);for(let n=0;n<t;n++){const{h:a,l:o}=wo(r[n],e);[i[n],s[n]]=[a,o]}return[i,s]}const ko=r=>r/2**32|0,So=r=>r>>>0;function Eo(r,e,t,i){const s=ko(t),n=So(t);r.setUint32(e,i?n:s,i),r.setUint32(e+4,i?s:n,i)}const Ms=(r,e,t)=>r>>>t,Ts=(r,e,t)=>r<<32-t|e>>>t,Rt=(r,e,t)=>r>>>t|e<<32-t,At=(r,e,t)=>r<<32-t|e>>>t,wi=(r,e,t)=>r<<64-t|e>>>t-32,vi=(r,e,t)=>r>>>t-32|e<<64-t;function Qe(r,e,t,i){const s=(e>>>0)+(i>>>0);return{h:r+t+(s/2**32|0)|0,l:s|0}}const xo=(r,e,t)=>(r>>>0)+(e>>>0)+(t>>>0),Ro=(r,e,t,i)=>e+t+i+(r/2**32|0)|0,Ao=(r,e,t,i)=>(r>>>0)+(e>>>0)+(t>>>0)+(i>>>0),Io=(r,e,t,i,s)=>e+t+i+s+(r/2**32|0)|0,Co=(r,e,t,i,s)=>(r>>>0)+(e>>>0)+(t>>>0)+(i>>>0)+(s>>>0),Mo=(r,e,t,i,s,n)=>e+t+i+s+n+(r/2**32|0)|0;function En(r){return r instanceof Uint8Array||ArrayBuffer.isView(r)&&r.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in r&&r.BYTES_PER_ELEMENT===1}const xn=r=>r?`"${r}" `:"";function Ki(r,e=""){if(typeof r!="number")throw new TypeError(xn(e)+"expected number, got "+typeof r);if(!Number.isSafeInteger(r)||r<0)throw new RangeError(xn(e)+"expected integer >= 0, got "+r);return r}function St(r,e,t=""){if(En(r)&&(e===void 0||r.length===e))return r;e!==void 0&&Ki(e,"length");const i=En(r),s=e!==void 0?` of length ${e}`:"",n=i?`length=${r.length}`:`type=${typeof r}`,a=xn(t)+"expected Uint8Array"+s+", got "+n;throw i?new RangeError(a):new TypeError(a)}const To=(r,e)=>{if(r===null||typeof r!="object"||Array.isArray(r))throw new TypeError((e==="object"?"":`"${e}" `)+"expected object, got type="+typeof r)},Bs=(r,e)=>{To(r,e);const t=Object.getPrototypeOf(r);if(t!==Object.prototype&&t!==null)throw new TypeError(`"${e}" expected plain object`);if(Object.hasOwn(r,"__proto__"))throw new TypeError(`"${e}.__proto__" is not allowed`)};function Ns(r,e=!0){if(r.destroyed)throw new Error("hash was destroyed");if(e&&r.finished)throw new Error("digest() was already called")}function Bo(r,e){St(r,void 0,"output");const t=e.outputLen;if(!(r.length>=t))throw new RangeError('"output" expected length >= '+t)}function Oi(...r){for(let e=0;e<r.length;e++)r[e].fill(0)}function hn(r){return new DataView(r.buffer,r.byteOffset,r.byteLength)}function qe(r,e){return r<<32-e|r>>>e}const Tr=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",No=Array.from({length:256},(r,e)=>e.toString(16).padStart(2,"0"));function Qi(r){if(St(r),Tr)return r.toHex();let e="";for(let t=0;t<r.length;t++)e+=No[r[t]];return e}function Ps(r){return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:void 0}function Yn(r){if(typeof r!="string")throw new TypeError("hex string expected, got "+typeof r);if(Tr)try{return Uint8Array.fromHex(r)}catch(s){throw s instanceof SyntaxError?new RangeError(s.message):s}const e=r.length,t=e/2;if(e%2)throw new RangeError("hex string expected, got unpadded hex of length "+e);const i=new Uint8Array(t);for(let s=0,n=0;s<t;s++,n+=2){const a=Ps(r.charCodeAt(n)),o=Ps(r.charCodeAt(n+1));if(a===void 0||o===void 0){const c=r[n]+r[n+1];throw new RangeError('hex string expected, got non-hex character "'+c+'" at index '+n)}i[s]=a*16+o}return i}function Po(...r){let e=0;for(let i=0;i<r.length;i++){const s=r[i];St(s),e+=s.length}const t=new Uint8Array(e);for(let i=0,s=0;i<r.length;i++){const n=r[i];t.set(n,s),s+=n.length}return t}function $o(r,e,t="opts"){return Bs(r,"defaults"),e!==void 0&&Bs(e,t),Object.assign(Object.create(null),r,e)}function Br(r,e={}){if(typeof r!="function")throw new TypeError('"hashCons" expected function, got type='+typeof r);e=$o({},e,"info");const t=(s,n)=>r(n).update(s).digest(),i=r(void 0);return t.outputLen=i.outputLen,t.blockLen=i.blockLen,t.canXOF=i.canXOF,t.create=s=>r(s),Object.assign(t,e),Object.freeze(t)}function Kn(r=32){Ki(r,"bytesLength");const e=typeof globalThis=="object"?globalThis.crypto:null;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined");if(r>65536)throw new RangeError(`"bytesLength" expected <= 65536, got ${r}`);return e.getRandomValues(new Uint8Array(r))}const Nr=r=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,r])});function Oo(r,e,t){return r&e^~r&t}function Lo(r,e,t){return r&e^r&t^e&t}class Pr{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,t,i,s){this.blockLen=e,this.outputLen=t,this.padOffset=i,this.isLE=s,this.buffer=new Uint8Array(e),this.view=hn(this.buffer)}update(e){Ns(this),St(e);const{view:t,buffer:i,blockLen:s}=this,n=e.length;let a=!1;for(let o=0;o<n;){const c=Math.min(s-this.pos,n-o);if(c===s){const l=hn(e);for(;s<=n-o;o+=s)this.process(l,o);a=!0;continue}i.set(o===0&&c===n?e:e.subarray(o,o+c),this.pos),this.pos+=c,o+=c,this.pos===s&&(this.process(t,0),this.pos=0,a=!0)}return this.length+=e.length,a&&this.roundClean(),this}digestInto(e){Ns(this),Bo(e,this),this.finished=!0;const{buffer:t,view:i,blockLen:s,isLE:n}=this;let{pos:a}=this;t[a++]=128,t.fill(0,a),this.padOffset>s-a&&(this.process(i,0),t.fill(0)),Eo(i,s-8,this.length*8,n),this.process(i,0),this.roundClean();const o=e===t?i:hn(e),c=this.outputLen,l=c/4,h=this.get();if(c%4||l>h.length)throw new Error("invalid outputLen");for(let d=0;d<l;d++)o.setUint32(4*d,h[d],n)}digest(){const{buffer:e,outputLen:t}=this;this.digestInto(e);const i=e.slice(0,t);return this.destroy(),i}_cloneIntoMeta(e){const{buffer:t,length:i,finished:s,destroyed:n,pos:a}=this;return e.destroyed=n,e.finished=s,e.length=i,e.pos=a,a&&e.buffer.set(t),e}clone(){return this._cloneInto()}}const Do=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Fo=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),Uo=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ze=new Uint32Array(64);class Ho extends Pr{A=0;B=0;C=0;D=0;E=0;F=0;G=0;H=0;constructor(e,t){super(64,e,8,!1),this.A=t[0]|0,this.B=t[1]|0,this.C=t[2]|0,this.D=t[3]|0,this.E=t[4]|0,this.F=t[5]|0,this.G=t[6]|0,this.H=t[7]|0}get(){const{A:e,B:t,C:i,D:s,E:n,F:a,G:o,H:c}=this;return[e,t,i,s,n,a,o,c]}set(e,t,i,s,n,a,o,c){this.A=e|0,this.B=t|0,this.C=i|0,this.D=s|0,this.E=n|0,this.F=a|0,this.G=o|0,this.H=c|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let d=0;d<16;d++,t+=4)Ze[d]=e.getUint32(t,!1);for(let d=16;d<64;d++){const u=Ze[d-15],m=Ze[d-2],p=qe(u,7)^qe(u,18)^u>>>3,_=qe(m,17)^qe(m,19)^m>>>10;Ze[d]=_+Ze[d-7]+p+Ze[d-16]|0}let{A:i,B:s,C:n,D:a,E:o,F:c,G:l,H:h}=this;for(let d=0;d<64;d++){const u=qe(o,6)^qe(o,11)^qe(o,25),m=h+u+Oo(o,c,l)+Uo[d]+Ze[d]|0,_=(qe(i,2)^qe(i,13)^qe(i,22))+Lo(i,s,n)|0;h=l,l=c,c=o,o=a+m|0,a=n,n=s,s=i,i=m+_|0}i=i+this.A|0,s=s+this.B|0,n=n+this.C|0,a=a+this.D|0,o=o+this.E|0,c=c+this.F|0,l=l+this.G|0,h=h+this.H|0,this.set(i,s,n,a,o,c,l,h)}roundClean(){Oi(Ze)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),Oi(this.buffer)}}class Wo extends Ho{constructor(){super(32,Do)}}const $r=vo(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(r=>BigInt(r))),Vo=$r[0],qo=$r[1],et=new Uint32Array(80),tt=new Uint32Array(80);class Go extends Pr{Ah=0;Al=0;Bh=0;Bl=0;Ch=0;Cl=0;Dh=0;Dl=0;Eh=0;El=0;Fh=0;Fl=0;Gh=0;Gl=0;Hh=0;Hl=0;constructor(e,t){super(128,e,16,!1),this.Ah=t[0]|0,this.Al=t[1]|0,this.Bh=t[2]|0,this.Bl=t[3]|0,this.Ch=t[4]|0,this.Cl=t[5]|0,this.Dh=t[6]|0,this.Dl=t[7]|0,this.Eh=t[8]|0,this.El=t[9]|0,this.Fh=t[10]|0,this.Fl=t[11]|0,this.Gh=t[12]|0,this.Gl=t[13]|0,this.Hh=t[14]|0,this.Hl=t[15]|0}get(){const{Ah:e,Al:t,Bh:i,Bl:s,Ch:n,Cl:a,Dh:o,Dl:c,Eh:l,El:h,Fh:d,Fl:u,Gh:m,Gl:p,Hh:_,Hl:f}=this;return[e,t,i,s,n,a,o,c,l,h,d,u,m,p,_,f]}set(e,t,i,s,n,a,o,c,l,h,d,u,m,p,_,f){this.Ah=e|0,this.Al=t|0,this.Bh=i|0,this.Bl=s|0,this.Ch=n|0,this.Cl=a|0,this.Dh=o|0,this.Dl=c|0,this.Eh=l|0,this.El=h|0,this.Fh=d|0,this.Fl=u|0,this.Gh=m|0,this.Gl=p|0,this.Hh=_|0,this.Hl=f|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let b=0;b<16;b++,t+=4)et[b]=e.getUint32(t),tt[b]=e.getUint32(t+=4);for(let b=16;b<80;b++){const A=et[b-15]|0,S=tt[b-15]|0,E=Rt(A,S,1)^Rt(A,S,8)^Ms(A,S,7),C=At(A,S,1)^At(A,S,8)^Ts(A,S,7),$=et[b-2]|0,y=tt[b-2]|0,I=Rt($,y,19)^wi($,y,61)^Ms($,y,6),D=At($,y,19)^vi($,y,61)^Ts($,y,6),x=Ao(C,D,tt[b-7],tt[b-16]),v=Io(x,E,I,et[b-7],et[b-16]);et[b]=v|0,tt[b]=x|0}let{Ah:i,Al:s,Bh:n,Bl:a,Ch:o,Cl:c,Dh:l,Dl:h,Eh:d,El:u,Fh:m,Fl:p,Gh:_,Gl:f,Hh:g,Hl:w}=this;for(let b=0;b<80;b++){const A=Rt(d,u,14)^Rt(d,u,18)^wi(d,u,41),S=At(d,u,14)^At(d,u,18)^vi(d,u,41),E=d&m^~d&_,C=u&p^~u&f,$=Co(w,S,C,qo[b],tt[b]),y=Mo($,g,A,E,Vo[b],et[b]),I=$|0,D=Rt(i,s,28)^wi(i,s,34)^wi(i,s,39),x=At(i,s,28)^vi(i,s,34)^vi(i,s,39),v=i&n^i&o^n&o,R=s&a^s&c^a&c;g=_|0,w=f|0,_=m|0,f=p|0,m=d|0,p=u|0,{h:d,l:u}=Qe(l|0,h|0,y|0,I|0),l=o|0,h=c|0,o=n|0,c=a|0,n=i|0,a=s|0;const k=xo(I,x,R);i=Ro(k,y,D,v),s=k|0}({h:i,l:s}=Qe(this.Ah|0,this.Al|0,i|0,s|0)),{h:n,l:a}=Qe(this.Bh|0,this.Bl|0,n|0,a|0),{h:o,l:c}=Qe(this.Ch|0,this.Cl|0,o|0,c|0),{h:l,l:h}=Qe(this.Dh|0,this.Dl|0,l|0,h|0),{h:d,l:u}=Qe(this.Eh|0,this.El|0,d|0,u|0),{h:m,l:p}=Qe(this.Fh|0,this.Fl|0,m|0,p|0),{h:_,l:f}=Qe(this.Gh|0,this.Gl|0,_|0,f|0),{h:g,l:w}=Qe(this.Hh|0,this.Hl|0,g|0,w|0),this.set(i,s,n,a,o,c,l,h,d,u,m,p,_,f,g,w)}roundClean(){Oi(et,tt)}destroy(){this.destroyed=!0,Oi(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class jo extends Go{constructor(){super(64,Fo)}}const Rn=Br(()=>new Wo,Nr(1)),Or=Br(()=>new jo,Nr(3));function Lr(r,e,t=()=>{}){if(!Array.isArray(r))throw new TypeError(`"${e}" expected array, got type=${typeof r}`);for(let i=0;i<r.length;i++)t(r[i],`${e}[${i}]`);return r}const ge=(r,e,t)=>St(r,e,t),Dr=Ki;function $t(r,e="object"){if(r===null||typeof r!="object"||Array.isArray(r))throw new TypeError(e==="object"?"expected valid options object":`"${e}" expected object, got type=${typeof r}`);return r}function ei(r,e){if(typeof r!="function")throw new TypeError(`"${e}" is invalid: expected function, got ${typeof r}`);return r}const Fr=Qi,Ft=(...r)=>Po(...r),Ur=r=>Yn(r),Qn=En,Jn=r=>Kn(r),Li=BigInt(0),$s=BigInt(1),zo=r=>r?`"${r}" `:"";function dt(r,e=""){if(typeof r!="boolean")throw new TypeError(zo(e)+"expected boolean, got type="+typeof r);return r}function Yo(r){if(typeof r=="bigint"){if(!bt(r))throw new RangeError("positive bigint expected, got "+r)}else Dr(r);return r}function Di(r,e=""){if(typeof r!="number"){const t=e&&`"${e}" `;throw new TypeError(t+"expected number, got type="+typeof r)}if(!Number.isSafeInteger(r)){const t=e&&`"${e}" `;throw new RangeError(t+"expected safe integer, got "+r)}}function Hr(r){if(typeof r!="string")throw new TypeError("hex string expected, got "+typeof r);return r===""?Li:BigInt("0x"+r)}function Ji(r){return Hr(Qi(r))}function li(r){return Hr(Qi(di(St(r)).reverse()))}function Xn(r,e){if(Ki(e),e===0)throw new Error("zero output length is invalid");r=Yo(r);const t=e*2,i=r.toString(16);if(i.length>t)throw new RangeError("number is too large");return Yn(i.padStart(t,"0"))}function Wr(r,e){return Xn(r,e).reverse()}function di(r){return Uint8Array.from(ge(r))}function Ko(r){if(typeof r!="string")throw new TypeError("ascii string expected, got "+typeof r);return Uint8Array.from(r,(e,t)=>{const i=e.charCodeAt(0);if(e.length!==1||i>127)throw new RangeError(`string contains non-ASCII character "${r[t]}" with code ${i} at position ${t}`);return i})}function bt(r){return typeof r=="bigint"&&Li<=r}function Vr(r,e,t){return bt(r)&&bt(e)&&bt(t)&&e<=r&&r<t}function An(r,e,t,i){if(!Vr(e,t,i))throw new RangeError("expected valid "+r+": "+t+" <= n < "+i+", got "+e)}function Zn(r){if(r<Li)throw new Error("expected non-negative bigint, got "+r);return r===Li?0:r.toString(2).length}const qr=r=>(Di(r,"n"),($s<<BigInt(r))-$s);function yt(r,e={},t={},i="object"){$t(r,i),$t(e,"fields"),$t(t,"optFields");function s(a,o,c){const l=i==="object"?`param "${String(a)}"`:`"${i}.${String(a)}"`,h=r[a];if(!Object.hasOwn(r,a)&&(c?h!==void 0:o!=="function"))throw new TypeError(`${l} is invalid: expected own property`);if(c&&h===void 0)return;const d=typeof h;if(d!==o||h===null)throw new TypeError(`${l} is invalid: expected ${o}, got ${d}`)}const n=(a,o)=>Object.entries(a).forEach(([c,l])=>s(c,l,o));n(e,!1),n(t,!0)}const Ee=BigInt(0),le=BigInt(1),pt=BigInt(2),Gr=BigInt(3),es=BigInt(4),jr=BigInt(5),Qo=BigInt(7),zr=BigInt(8),Jo=BigInt(9),Xo=BigInt(15),Yr=BigInt(16),Zo=BigInt("0x10000000000000000");function we(r,e){if(e<=Ee)throw new Error("mod: expected positive modulus, got "+e);const t=r%e;return t>=Ee?t:e+t}function ec(r,e,t){if(t<=le)throw new Error("pow: expected modulus > 1, got "+t);if(typeof e!="bigint")throw new TypeError("invalid exponent: expected bigint, got "+typeof e);if(e<Ee)throw new Error("invalid exponent, negatives unsupported");if(e===Ee)return le;if(e===le)return r;let i=r%t;if(i<Ee&&(i+=t),e<Zo){let o=le;for(;e>Ee;)e&le&&(o=o*i%t),i=i*i%t,e>>=le;return o}const s=[];for(;e>Ee;)s.push(Number(e&Xo)),e>>=es;const n=new Array(16);n[0]=le,n[1]=i;for(let o=2;o<16;o++)n[o]=n[o-1]*i%t;let a=n[s[s.length-1]];for(let o=s.length-2;o>=0;o--){a=a*a%t,a=a*a%t,a=a*a%t,a=a*a%t;const c=s[o];c!==0&&(a=a*n[c]%t)}return a}function fe(r,e,t){if(t<=le)throw new Error("pow2: expected modulus > 1, got "+t);if(e<Ee)throw new Error("pow2: expected non-negative exponent, got "+e);let i=r;for(;e-- >Ee;)i*=i,i%=t;return i}function Os(r,e){if(r===Ee)throw new Error("invert: expected non-zero number");if(e<=le)throw new Error("invert: expected modulus > 1, got "+e);let t=we(r,e),i=e,s=Ee,n=le;for(;t!==Ee;){const o=i/t,c=i-t*o,l=s-n*o;i=t,t=c,s=n,n=l}if(i!==le)throw new Error("invert: does not exist");return we(s,e)}function ts(r,e,t){const i=r;if(!i.eql(i.sqr(e),t))throw new Error("Cannot find square root")}function is(r,e){if((r&le)===Ee)throw new Error(e+": expected odd modulus, got "+r)}function Kr(r,e){const t=r,i=(t.ORDER+le)/es,s=t.pow(e,i);return ts(t,s,e),s}function tc(r,e){const t=r,i=(t.ORDER-jr)/zr,s=t.mul(e,pt),n=t.pow(s,i),a=t.mul(e,n),o=t.mul(t.mul(a,pt),n),c=t.mul(a,t.sub(o,t.ONE));return ts(t,c,e),c}function ic(r){const e=Xi(r),t=Qr(r),i=t(e,e.neg(e.ONE)),s=t(e,i),n=t(e,e.neg(i)),a=(r+Qo)/Yr;return((o,c)=>{const l=o;let h=l.pow(c,a),d=l.mul(h,i);const u=l.mul(h,s),m=l.mul(h,n),p=l.eql(l.sqr(d),c),_=l.eql(l.sqr(u),c);h=l.cmov(h,d,p),d=l.cmov(m,u,_);const f=l.eql(l.sqr(d),c),g=l.cmov(h,d,f);return ts(l,g,c),g})}function Qr(r){if(r<Gr)throw new Error("sqrt is not defined for small field");is(r,"tonelliShanks");let e=r-le,t=0;for(;e%pt===Ee;)e/=pt,t++;let i=pt;const s=Xi(r);for(;Fi(s,i)===1;)if(i++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(t===1)return Kr;let n=s.pow(i,e);const a=(e+le)/pt;return function(c,l){const h=c;if(h.is0(l))return l;if(Fi(h,l)!==1)throw new Error("Cannot find square root");let d=t,u=h.mul(h.ONE,n),m=h.pow(l,e),p=h.pow(l,a);for(;!h.eql(m,h.ONE);){if(h.is0(m))throw new Error("Cannot find square root: probably non-prime P");let _=1,f=h.sqr(m);for(;!h.eql(f,h.ONE);)if(_++,f=h.sqr(f),_===d)throw new Error("Cannot find square root");const g=le<<BigInt(d-_-1),w=h.pow(u,g);d=_,u=h.sqr(w),m=h.mul(m,u),p=h.mul(p,w)}return p}}function nc(r){return is(r,"Fp.sqrt"),r%es===Gr?Kr:r%zr===jr?tc:r%Yr===Jo?ic(r):Qr(r)}const sc=(r,e)=>(we(r,e)&le)===le,rc=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function hi(r){if($t(r,"field"),typeof r.ORDER!="bigint")throw new TypeError('param "ORDER" is invalid: expected bigint, got '+typeof r.ORDER);Di(r.BYTES,"BYTES"),Di(r.BITS,"BITS");for(const e of rc)ei(r[e],"field."+e);if(r.BYTES<1||r.BITS<1)throw new Error("invalid field: expected BYTES/BITS > 0");if(r.ORDER<=le)throw new Error("invalid field: expected ORDER > 1, got "+r.ORDER);return r}function Jr(r,e,t=!1){hi(r),Lr(e,"nums"),dt(t,"passZero");const i=r,s=new Array(e.length).fill(t?i.ZERO:void 0),n=e.reduce((o,c,l)=>i.is0(c)?o:(s[l]=o,i.mul(o,c)),i.ONE),a=i.inv(n);return e.reduceRight((o,c,l)=>i.is0(c)?o:(s[l]=i.mul(o,s[l]),i.mul(o,c)),a),s}function Fi(r,e){hi(r);const t=r;is(t.ORDER,"FpLegendre");const i=(t.ORDER-le)/pt,s=t.pow(e,i),n=t.eql(s,t.ONE),a=t.eql(s,t.ZERO),o=t.eql(s,t.neg(t.ONE));if(!n&&!a&&!o)throw new Error("invalid Legendre symbol result");return n?1:a?0:-1}function ac(r,e){if(e!==void 0&&Dr(e),r<=Ee)throw new Error("invalid n length: expected positive n, got "+r);if(e!==void 0&&e<1)throw new Error("invalid n length: expected positive bit length, got "+e);const t=Zn(r);if(e!==void 0&&e<t)throw new Error(`invalid n length: expected nBitLength (${e}) >= bitLen(n) (${t})`);const i=e!==void 0?e:t,s=Math.ceil(i/8);return{nBitLength:i,nByteLength:s}}const Ls=new WeakMap;class Ds{ORDER;BITS;BYTES;isLE;ZERO=Ee;ONE=le;_lengths;_mod;constructor(e,t={}){if(e<=le)throw new Error("invalid field: expected ORDER > 1, got "+e);let i;this.isLE=!1,t!=null&&typeof t=="object"&&(typeof t.BITS=="number"&&(i=t.BITS),typeof t.sqrt=="function"&&Object.defineProperty(this,"sqrt",{value:t.sqrt,enumerable:!0}),typeof t.isLE=="boolean"&&(this.isLE=t.isLE),t.allowedLengths&&(this._lengths=Object.freeze(t.allowedLengths.slice())),typeof t.modFromBytes=="boolean"&&(this._mod=t.modFromBytes));const{nBitLength:s,nByteLength:n}=ac(e,i);if(n>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");this.ORDER=e,this.BITS=s,this.BYTES=n,Object.freeze(this)}create(e){return we(e,this.ORDER)}isValid(e){if(typeof e!="bigint")throw new TypeError("invalid field element: expected bigint, got "+typeof e);return Ee<=e&&e<this.ORDER}is0(e){return e===Ee}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}isOdd(e){return(e&le)===le}neg(e){return we(-e,this.ORDER)}eql(e,t){return e===t}sqr(e){return we(e*e,this.ORDER)}add(e,t){return we(e+t,this.ORDER)}sub(e,t){return we(e-t,this.ORDER)}mul(e,t){return we(e*t,this.ORDER)}pow(e,t){return ec(e,t,this.ORDER)}div(e,t){return we(e*Os(t,this.ORDER),this.ORDER)}sqrN(e){return e*e}addN(e,t){return e+t}subN(e,t){return e-t}mulN(e,t){return e*t}inv(e){return Os(e,this.ORDER)}sqrt(e){let t=Ls.get(this);return t||Ls.set(this,t=nc(this.ORDER)),t(this,e)}toBytes(e){return this.isLE?Wr(e,this.BYTES):Xn(e,this.BYTES)}fromBytes(e,t=!1){ge(e);const{_lengths:i,BYTES:s,isLE:n,ORDER:a,_mod:o}=this;if(i){if(e.length<1||!i.includes(e.length)||e.length>s)throw new Error("Field.fromBytes: expected "+i+" bytes, got "+e.length);const l=new Uint8Array(s);l.set(e,n?0:l.length-e.length),e=l}if(e.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+e.length);let c=n?li(e):Ji(e);if(o&&(c=we(c,a)),!t&&!this.isValid(c))throw new Error("invalid field element: outside of range 0..ORDER");return c}invertBatch(e){return Jr(this,e,!0)}cmov(e,t,i){return dt(i,"condition"),i?t:e}}function Xi(r,e={}){return Object.freeze(Ds.prototype),new Ds(r,e)}function Xr(r){if(typeof r!="bigint")throw new Error("field order must be bigint");if(r<=le)throw new Error("field order must be greater than 1");const e=Zn(r-le);return Math.ceil(e/8)}function oc(r){const e=Xr(r);return e+Math.ceil(e/2)}function cc(r,e,t=!1){ge(r);const i=r.length,s=Xr(e),n=Math.max(oc(e),16);if(i<n||i>1024)throw new Error("expected "+n+"-1024 bytes of input, got "+i);const a=t?li(r):Ji(r),o=we(a,e-le)+le;return t?Wr(o,s):Xn(o,s)}const ns=BigInt(0),ui=BigInt(1),lc=BigInt(4),un=16,Fs=128,dc=5,Us=2**31;function Zi(r){const e=r;if(typeof e!="function")throw new TypeError('"Point" expected constructor, got type='+typeof r);ei(e.fromAffine,"Point.fromAffine"),ei(e.fromBytes,"Point.fromBytes"),ei(e.fromHex,"Point.fromHex"),$t(e.BASE,"Point.BASE"),$t(e.ZERO,"Point.ZERO"),hi(e.Fp),hi(e.Fn)}function Zr(r,e){Zi(r),ea(e,r);const t=Jr(r.Fp,e.map(i=>i.Z));return e.map((i,s)=>r.fromAffine(i.toAffine(t[s])))}function hc(r,e,t=1){if(!Number.isSafeInteger(r)||r<t||r>e)throw new Error("invalid window size, expected ["+t+".."+e+"], got W="+r)}function uc(r,e){const t=r*(4*e+128);if(t>Us)throw new Error("invalid window size: table would need ~"+Math.ceil(t/2**20)+" MiB, max "+Us/2**20+" MiB")}function _c(r,e){if(r!==void 0){ei(r,"randomBytes");try{const t=r(e);if(!Qn(t)||t.length!==e)return}catch{return}return r}}function ea(r,e){Lr(r,"points"),r.forEach((t,i)=>{if(!(t instanceof e))throw new Error("invalid point at index "+i)})}function mc(r,e,t){if(!Array.isArray(r))throw new Error("array of scalars expected");r.forEach((i,s)=>{if(!(t===void 0?e.isValid(i):bt(i)&&i<t))throw new Error("invalid scalar at index "+s)})}const ta=new WeakMap;function _n(r){return ta.get(r)||1}function pc(r,e){const t=r.double(),i=[r];for(let s=1;s<e;s++)i.push(i[s-1].add(t));return i}function fc(r,e){const t=2**e,i=t/2,s=BigInt(t-1),n=[];for(;r>ns;){let a=0;r&ui&&(a=Number(r&s),a>=i&&(a-=t),r-=BigInt(a)),n.push(a),r>>=ui}return n}function gc(r,e,t){const i=2**e,s=i/2,n=BigInt(i-1),a=BigInt(e),o=[];for(let c=0;c<t;c++){let l=Number(r&n);r>>=a,l>s&&(l-=i,r+=ui),o.push(l)}if(r!==ns)throw new Error("invalid wnaf");return o}function bc(r,e,t){let i=0;for(const n of t)i=Math.max(i,n.length);let s=r;for(let n=i-1;n>=0;n--){n!==i-1&&(s=s.double());for(let a=0;a<t.length;a++){const o=t[a][n];if(o){const c=e[a][Math.abs(o)-1>>1];s=s.add(o<0?c.negate():c)}}}return s}class ia{Point;BASE;ZERO;randomBytes;wnafPrecomputes=new WeakMap;baseCanBeBlinded;bits;constructor(e,t){Zi(e),this.randomBytes=_c(t,un),this.Point=e,this.BASE=e.BASE,this.ZERO=e.ZERO,this.bits=e.Fn.BITS}buildWnafTable(e,t,i){const s=Math.ceil(i/t)+1,n=2**(t-1),a=[];let o=e;for(let c=0;c<s;c++){let l=o;for(let h=0;h<n;h++)a.push(l),l=l.add(o);o=a[a.length-1].double()}return{W:t,bits:i,windows:s,comp:a}}wnafCachedCT(e,t){const{W:i,windows:s,comp:n}=e,a=2**(i-1),o=gc(t,i,s);let c=this.ZERO,l=this.BASE;for(let h=0;h<s;h++){const d=o[h],u=h*a,m=Math.abs(d)-1;let p=n[u];for(let f=1;f<a;f++)p=f===m?n[u+f]:p;const _=p.negate();d===0?l=l.add(n[u]):c=c.add(d<0?_:p)}return{p:c,f:l}}getWnafPrecomputes(e,t,i,s){let n=this.wnafPrecomputes.get(t),a=n?.find(o=>o.W===e&&o.bits===i);return a||(a=this.buildWnafTable(t,e,i),typeof s=="function"&&(a={...a,comp:s(a.comp)}),n||(n=[],this.wnafPrecomputes.set(t,n)),n.push(a)),a}assertPoint(e){if(!(e instanceof this.Point))throw new TypeError('"point" expected Point instance, got type='+typeof e)}validateMulInput(e,t){if(this.assertPoint(e),!Vr(t,ui,this.Point.Fn.ORDER))throw new Error("invalid scalar")}runCT(e,t,i,s){const n=_n(e);return n===1?this.fixedWindowCT(e,t,i):this.wnafCachedCT(this.getWnafPrecomputes(n,e,i,s),t)}mulCT(e,t,i){return this.validateMulInput(e,t),this.runCT(e,t,this.bits,i)}mulCTBlinded(e,t,i){if(this.validateMulInput(e,t),this.randomBytes===void 0)throw new Error("randomBytes is required for scalar blinding");const s=this.Point.Fn.BITS+Fs,n=this.randomBytes(un);if(!Qn(n)||n.length!==un)throw new Error("randomBytes returned invalid byte array");n[0]=n[0]&63|128;const a=t+Ji(n)*this.Point.Fn.ORDER;return this.runCT(e,a,s,i)}fixedWindowCT(e,t,i){const s=dc,n=1<<s,a=qr(s),o=new Array(n);o[0]=this.ZERO;for(let h=1;h<n;h++)o[h]=o[h-1].add(e);const c=Math.ceil(i/s);let l=this.ZERO;for(let h=c-1;h>=0;h--){if(h!==c-1)for(let m=0;m<s;m++)l=l.double();const d=Number(t>>BigInt(h*s)&a);let u=o[0];for(let m=1;m<n;m++)u=m===d?o[m]:u;l=l.add(u)}return{p:l,f:l}}shouldBlind(e,t){return this.randomBytes===void 0?!1:t===ui?!0:e!==this.BASE?!1:(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(e,t,i,s){return this.shouldBlind(e,i)?this.mulCTBlinded(e,t,s):this.mulCT(e,t,s)}mulUnsafe(e,t,i){if(this.assertPoint(e),!bt(t))throw new Error("invalid scalar");const s=_n(e);if(s===1||t>=this.Point.Fn.ORDER)return In(this.Point,[e],[t],!0);const n=this.getWnafPrecomputes(s,e,this.bits,i);return this.wnafCachedCT(n,t).p}setWindowSize(e,t){this.assertPoint(e),hc(t,this.bits);const i=Math.ceil((this.bits+Fs)/t)+1;uc(i*2**(t-1),this.Point.Fp.BYTES),ta.set(e,t),this.wnafPrecomputes.delete(e)}hasWindowSize(e){return _n(e)!==1}}function In(r,e,t,i=!1){if(Zi(r),ea(e,r),dt(i,"allowOversized"),mc(t,r.Fn,i?r.Fn.ORDER**lc:void 0),e.length!==t.length)throw new Error("arrays of points and scalars must have equal length");const s=e.map(a=>pc(a,4)),n=t.map(a=>fc(a,4));return bc(r.ZERO,s,n)}function Hs(r,e,t){if(e){if(e.ORDER!==r)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return hi(e),e}else return Xi(r,{isLE:t})}function na(r,e,t={},i){if(r!=="weierstrass"&&r!=="edwards")throw new Error('expected curve type "weierstrass" or "edwards"');if(i===void 0&&(i=r==="edwards"),!e||typeof e!="object")throw new Error(`expected valid ${r} CURVE object`);yt(t);for(const c of["p","n","h"]){const l=e[c];if(!(bt(l)&&l!==ns))throw new Error(`CURVE.${c} must be positive bigint`)}const s=Hs(e.p,t.Fp,i),n=Hs(e.n,t.Fn,i),o=["Gx","Gy","a",r==="weierstrass"?"b":"d"];for(const c of o)if(!s.isValid(e[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return e=Object.freeze(Object.assign({},e)),{CURVE:e,Fp:s,Fn:n}}function sa(r,e){return function(i){const s=r(i);return{secretKey:s,publicKey:e(s)}}}const ki=BigInt(0),Si=BigInt(1),Ei=BigInt(2),yc=BigInt(4),Ws=BigInt(8);function wc(r,e,t,i){const s=r.sqr(t),n=r.sqr(i),a=r.add(r.mul(e.a,s),n),o=r.add(r.ONE,r.mul(e.d,r.mul(s,n)));return r.eql(a,o)}function vc(r,e={}){yt(e,{},{},"extraOpts");const t=e,i=na("edwards",r,t,t.FpFnLE),{Fp:s,Fn:n}=i;let a=i.CURVE;const{h:o}=a;if(Fi(s,a.a)!==1)throw new Error("edwards: CURVE.a must be a square in Fp for complete addition formulas");if(Fi(s,a.d)!==-1)throw new Error("edwards: CURVE.d must be a non-square in Fp for complete addition formulas");yt(t,{},{uvRatio:"function",randomBytes:"function"});const c=t.randomBytes===void 0?Jn:t.randomBytes,l=Ei<<BigInt(s.BYTES*8)-Si;function h(w){if(!s.isOdd)throw new Error("Field does not have .isOdd()");return s.isOdd(w)}const d=t.uvRatio===void 0?(w,b)=>{try{return{isValid:!0,value:s.sqrt(s.div(w,b))}}catch{return{isValid:!1,value:ki}}}:t.uvRatio;if(!wc(s,a,a.Gx,a.Gy))throw new Error("bad curve params: generator point");const u=s.eql(a.a,s.neg(s.ONE))?w=>s.neg(w):s.eql(a.a,s.ONE)?w=>w:w=>s.mul(a.a,w);function m(w,b,A=!1){const S=A?Si:ki;return An("coordinate "+w,b,S,l),b}function p(w){if(!(w instanceof _))throw new Error("EdwardsPoint expected")}class _{static BASE=new _(a.Gx,a.Gy,s.ONE,s.mul(a.Gx,a.Gy));static ZERO=new _(s.ZERO,s.ONE,s.ONE,s.ZERO);static Fp=s;static Fn=n;X;Y;Z;T;constructor(b,A,S,E){this.X=m("x",b),this.Y=m("y",A),this.Z=m("z",S,!0),this.T=m("t",E),Object.freeze(this)}static CURVE(){return a}static fromAffine(b){if(b instanceof _)throw new Error("extended point not allowed");const{x:A,y:S}=b||{};return m("x",A),m("y",S),new _(A,S,s.ONE,s.mul(A,S))}static fromBytes(b,A=!1){const S=s.BYTES,{a:E,d:C}=a;b=di(ge(b,S,"point")),dt(A,"zip215");const $=di(b),y=b[S-1];$[S-1]=y&-129;const I=li($),D=A?l:s.ORDER;An("point.y",I,ki,D);const x=s.sqr(I),v=s.sub(x,s.ONE),R=s.sub(s.mulN(C,x),E);let{isValid:k,value:T}=d(v,R);if(!k)throw new Error("bad point: invalid y coordinate");const O=h(T),P=(y&128)!==0;if(!A&&s.is0(T)&&P)throw new Error("bad point: x=0 and x_0=1");return P!==O&&(T=s.neg(T)),_.fromAffine({x:T,y:I})}static fromHex(b,A=!1){return _.fromBytes(Ur(b),A)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(b=6,A=!0){return g.setWindowSize(this,b),A||this.multiply(Ei),this}assertValidity(){const b=this,{a:A,d:S}=a;if(b.is0())throw new Error("bad point: ZERO");const{X:E,Y:C,Z:$,T:y}=b,I=s.sqr(E),D=s.sqr(C),x=s.sqr($),v=s.sqr(x),R=s.mul(I,A),k=s.mul(s.add(R,D),x),T=s.add(v,s.mul(S,s.mul(I,D)));if(!s.eql(k,T))throw new Error("bad point: equation left != right (1)");const O=s.mul(E,C),P=s.mul($,y);if(!s.eql(O,P))throw new Error("bad point: equation left != right (2)")}equals(b){p(b);const{X:A,Y:S,Z:E}=this,{X:C,Y:$,Z:y}=b,I=s.mul(A,y),D=s.mul(C,E),x=s.mul(S,y),v=s.mul($,E);return s.eql(I,D)&&s.eql(x,v)}is0(){return this.equals(_.ZERO)}negate(){return new _(s.neg(this.X),this.Y,this.Z,s.neg(this.T))}double(){const{X:b,Y:A,Z:S}=this,E=s.sqr(b),C=s.sqr(A),$=s.mul(s.sqr(S),Ei),y=u(E),I=s.addN(b,A),D=s.sub(s.subN(s.sqr(I),E),C),x=s.addN(y,C),v=s.subN(x,$),R=s.subN(y,C),k=s.mul(D,v),T=s.mul(x,R),O=s.mul(D,R),P=s.mul(v,x);return new _(k,T,P,O)}add(b){p(b);const{d:A}=a,{X:S,Y:E,Z:C,T:$}=this,{X:y,Y:I,Z:D,T:x}=b,v=s.mul(S,y),R=s.mul(E,I),k=s.mul(s.mulN($,A),x),T=s.mul(C,D),O=s.sub(s.subN(s.mulN(s.addN(S,E),s.addN(y,I)),v),R),P=s.subN(T,k),W=s.addN(T,k),G=s.sub(R,u(v)),F=s.mul(O,P),q=s.mul(W,G),V=s.mul(O,G),z=s.mul(P,W);return new _(F,q,z,V)}subtract(b){return p(b),this.add(b.negate())}multiply(b){if(!n.isValidNot0(b))throw new RangeError("invalid scalar: expected 1 <= sc < curve.n");const{p:A,f:S}=g.mulSecret(this,b,o,f);return f([A,S])[0]}multiplyUnsafe(b){if(!n.isValid(b))throw new RangeError("invalid scalar: expected 0 <= sc < curve.n");return b===ki?_.ZERO:this.is0()||b===Si?this:g.mulUnsafe(this,b,f)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return g.mulUnsafe(this,a.n).is0()}toAffine(b){const A=this;let S=b;if(S!=null&&typeof S!="bigint")throw new TypeError('"invertedZ" expected bigint, got type='+typeof S);const{X:E,Y:C,Z:$}=A,y=A.is0();S==null&&(S=y?s.create(Ws):s.inv($));const I=s.mul(E,S),D=s.mul(C,S),x=s.mul($,S);if(y)return{x:s.ZERO,y:s.ONE};if(!s.eql(x,s.ONE))throw new Error("invZ was invalid");return{x:I,y:D}}clearCofactor(){return o===Si?this:o===Ei?this.double():o===yc?this.double().double():o===Ws?this.double().double().double():this.multiplyUnsafe(o)}toBytes(){const{x:b,y:A}=this.toAffine(),S=s.toBytes(A);return S[S.length-1]|=h(b)?128:0,S}toHex(){return Fr(this.toBytes())}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}const f=w=>Zr(_,w),g=new ia(_,c);return g.bits>=6&&_.BASE.precompute(6),Object.freeze(_.prototype),Object.freeze(_),_}function kc(r,e,t={}){if(Zi(r),typeof e!="function")throw new Error('"hash" function param is required');const i=e,s=t;yt(s,{},{adjustScalarBytes:"function",randomBytes:"function",domain:"function",prehash:"function",zip215:"boolean",mapToCurve:"function",toMontgomery:"function",toMontgomerySecret:"function"});const{prehash:n}=s,{BASE:a,Fp:o,Fn:c}=r,l=i.outputLen,h=2*o.BYTES;if(l!==void 0&&(Di(l,"hash.outputLen"),l!==h))throw new Error(`hash.outputLen must be ${h}, got ${l}`);const d=s.randomBytes===void 0?Jn:s.randomBytes,u=s.toMontgomery,m=s.toMontgomerySecret,p=s.adjustScalarBytes===void 0?R=>R:s.adjustScalarBytes,_=s.domain===void 0?(R,k,T)=>{if(dt(T,"phflag"),k.length||T)throw new Error("Contexts/pre-hash are not supported");return R}:s.domain;function f(R){return c.create(li(R))}function g(R){const k=y.secretKey;ge(R,y.secretKey,"secretKey");const T=ge(i(R),2*k,"hashedSecretKey"),O=p(T.slice(0,k)),P=T.slice(k,2*k),W=f(O);return{head:O,prefix:P,scalar:W}}function w(R){const{head:k,prefix:T,scalar:O}=g(R),P=a.multiply(O),W=P.toBytes();return{head:k,prefix:T,scalar:O,point:P,pointBytes:W}}function b(R){return w(R).pointBytes}function A(R=Uint8Array.of(),...k){const T=Ft(...k);return f(i(_(T,ge(R,void 0,"context"),!!n)))}function S(R,k,T={}){yt(T,{},{},"options"),R=di(ge(R,void 0,"message")),n&&(R=n(R));const{prefix:O,scalar:P,pointBytes:W}=w(k),G=A(T.context,O,R),F=a.multiply(G).toBytes(),q=A(T.context,F,W,R),V=c.create(G+q*P);if(!c.isValid(V))throw new Error("sign failed: invalid s");const z=Ft(F,c.toBytes(V));return ge(z,y.signature,"result")}const E={zip215:s.zip215};function C(R,k,T,O=E){yt(O);const{context:P}=O,W=O.zip215===void 0?!!E.zip215:O.zip215,G=y.signature;R=ge(R,G,"signature"),k=ge(k,void 0,"message"),T=ge(T,y.publicKey,"publicKey"),W!==void 0&&dt(W,"zip215"),n&&(k=n(k));const F=G/2,q=R.subarray(0,F),V=li(R.subarray(F,G));let z,L,j;try{z=r.fromBytes(T,W),L=r.fromBytes(q,W),j=a.multiplyUnsafe(V)}catch{return!1}if(!W&&z.isSmallOrder())return!1;const Y=A(P,q,T,k);return L.add(z.multiplyUnsafe(Y)).subtract(j).clearCofactor().is0()}const $=o.BYTES,y={secretKey:$,publicKey:$,signature:2*$,seed:$};function I(R){return R=R===void 0?d(y.seed):R,ge(R,y.seed,"seed")}function D(R){return Qn(R)&&R.length===y.secretKey}function x(R,k){try{return!!r.fromBytes(R,k===void 0?E.zip215:k)}catch{return!1}}const v={getExtendedPublicKey:w,randomSecretKey:I,isValidSecretKey:D,isValidPublicKey:x,toMontgomery(R){if(u===void 0)throw new Error("Montgomery conversion is not supported for this curve");return u(r.fromBytes(R))},toMontgomerySecret(R){if(m===void 0)throw new Error("Montgomery conversion is not supported for this curve");return m(R)}};return Object.freeze(y),Object.freeze(v),Object.freeze({keygen:sa(I,b),getPublicKey:b,sign:S,verify:C,utils:v,Point:r,lengths:y})}const Cn=BigInt(1),Vs=BigInt(2),Sc=BigInt(5),Ec=BigInt(8),ss=BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),xc={p:ss,n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:Ec,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")};function Rc(r){const e=BigInt(10),t=BigInt(20),i=BigInt(40),s=BigInt(80),n=ss,o=r*r%n*r%n,c=fe(o,Vs,n)*o%n,l=fe(c,Cn,n)*r%n,h=fe(l,Sc,n)*l%n,d=fe(h,e,n)*h%n,u=fe(d,t,n)*d%n,m=fe(u,i,n)*u%n,p=fe(m,s,n)*m%n,_=fe(p,s,n)*m%n,f=fe(_,e,n)*h%n;return{pow_p_5_8:fe(f,Vs,n)*r%n,b2:o}}function ra(r){return r[0]&=248,r[31]&=127,r[31]|=64,r}const qs=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");function Ac(r,e){const t=ss,i=we(e*e*e,t),s=we(i*i*e,t),n=Rc(r*s).pow_p_5_8;let a=we(r*i*n,t);const o=we(e*a*a,t),c=a,l=we(a*qs,t),h=o===r,d=o===we(-r,t),u=o===we(-r*qs,t);return h&&(a=c),(d||u)&&(a=l),sc(a,t)&&(a=we(-a,t)),{isValid:h||d,value:a}}const rs=vc(xc,{uvRatio:Ac}),Gs=rs.Fp;function Ic(r){const{y:e}=r;return Gs.toBytes(Gs.div(Cn+e,Cn-e))}function Cc(r){const e=rs.Fp.BYTES;return St(r,e),ra(Or(r.subarray(0,e))).subarray(0,e)}function Mc(r){return kc(rs,Or,Object.assign({adjustScalarBytes:ra,toMontgomery:Ic,toMontgomerySecret:Cc,zip215:!0},r))}const as=Mc({}),os=1,cs=1,ls=16384,aa=16,oa=4096,Tc=128,Ut="OpenMat:event:v1",ke="OpenMat:control:v1",ca="OpenMat:manifest:v1",js="OpenMat:clock:v1",en="OpenMat:cert:v1",Mn="OpenMat:heartbeat:v1",B={InvalidArgument:"InvalidArgument",BoundsExceeded:"BoundsExceeded",MalformedCbor:"MalformedCbor",NonDeterministicCbor:"NonDeterministicCbor",UnsupportedVersion:"UnsupportedVersion",InvalidSignature:"InvalidSignature",CertificateExpired:"CertificateExpired",CertificateRevoked:"CertificateRevoked",UnauthorizedScope:"UnauthorizedScope",EpochFencedOldEvent:"EpochFencedOldEvent",SequenceGap:"SequenceGap",HashChainMismatch:"HashChainMismatch",PendingDependencyOverflow:"PendingDependencyOverflow",PrivacyViolation:"PrivacyViolation",ReplayHeartbeatRejected:"ReplayHeartbeatRejected",TimeoutTakeoverForbidden:"TimeoutTakeoverForbidden"};class N extends Error{code;constructor(e,t){super(t),this.name="OpenMatProtocolError",this.code=e}}const Ui=new TextEncoder,Bc=new TextDecoder("utf-8",{fatal:!0});function Je(r,e,t){if(t<0n||t>0xffffffffffffffffn)throw new N(B.BoundsExceeded,`CBOR unsigned argument out of 64-bit bounds: ${t.toString()}`);const i=(e&7)<<5;if(t<24n)r.push(i|Number(t));else if(t<=0xffn)r.push(i|24,Number(t));else if(t<=0xffffn){const s=Number(t);r.push(i|25,s>>>8&255,s&255)}else if(t<=0xffffffffn){const s=Number(t);r.push(i|26,s>>>24&255,s>>>16&255,s>>>8&255,s&255)}else{r.push(i|27);for(let s=56n;s>=0n;s-=8n)r.push(Number(t>>s&0xffn))}}function xi(r,e,t){if(r.length+e.length>t)throw new N(B.BoundsExceeded,`Encoded CBOR exceeds maxBytes (${t})`);for(let i=0;i<e.length;i++)r.push(e[i])}function la(r,e){if(r.length!==e.length)return r.length-e.length;for(let t=0;t<r.length;t++){const i=r[t]-e[t];if(i!==0)return i}return 0}function be(r,e){if(r.length!==e.length)return!1;let t=0;for(let i=0;i<r.length;i++)t|=r[i]^e[i];return t===0}function Tn(r,e,t,i,s,n){if(e>i)throw new N(B.BoundsExceeded,`CBOR maximum nesting depth (${i}) exceeded`);if(r===null)t.push(246);else if(typeof r=="boolean")t.push(r?245:244);else if(typeof r=="number"){if(!Number.isFinite(r)||!Number.isInteger(r))throw new N(B.NonDeterministicCbor,"Floating-point numbers are forbidden in OpenMat deterministic CBOR");if(!Number.isSafeInteger(r))throw new N(B.BoundsExceeded,"Unsafe integer number; use BigInt for 64-bit integers");if(r>=0)Je(t,0,BigInt(r));else{const a=BigInt(-1-r);Je(t,1,a)}}else if(typeof r=="bigint")if(r>=0n){if(r>0xffffffffffffffffn)throw new N(B.BoundsExceeded,"Unsigned BigInt overflows uint64");Je(t,0,r)}else{const a=-1n-r;if(a>0x7fffffffffffffffn)throw new N(B.BoundsExceeded,"Negative BigInt overflows int64");Je(t,1,a)}else if(r instanceof Uint8Array){if(r.byteLength>n)throw new N(B.BoundsExceeded,`CBOR byte string length (${r.byteLength}) exceeds maxBytes (${n})`);Je(t,2,BigInt(r.byteLength)),xi(t,r,n)}else if(typeof r=="string"){const a=Ui.encode(r);if(a.byteLength>n)throw new N(B.BoundsExceeded,`CBOR text string length (${a.byteLength}) exceeds maxBytes (${n})`);Je(t,3,BigInt(a.byteLength)),xi(t,a,n)}else if(Array.isArray(r)){if(r.length>s)throw new N(B.BoundsExceeded,`CBOR array length (${r.length}) exceeds maxContainerLen (${s})`);if(e+1>i)throw new N(B.BoundsExceeded,`CBOR maximum nesting depth (${i}) exceeded`);Je(t,4,BigInt(r.length));for(let a=0;a<r.length;a++)Tn(r[a],e+1,t,i,s,n)}else if(r instanceof Map||typeof r=="object"&&r!==null){const a=r instanceof Map?Array.from(r.entries()):Object.entries(r);if(a.length>s)throw new N(B.BoundsExceeded,`CBOR map length (${a.length}) exceeds maxContainerLen (${s})`);if(e+1>i)throw new N(B.BoundsExceeded,`CBOR maximum nesting depth (${i}) exceeded`);const o=[];for(const[c,l]of a){if(typeof c!="string")throw new N(B.NonDeterministicCbor,"CBOR map keys must be strings");const h=Ui.encode(c);if(h.byteLength>n)throw new N(B.BoundsExceeded,"CBOR map key exceeds maxBytes");const d=[];Je(d,3,BigInt(h.byteLength)),xi(d,h,n),o.push({rawKey:c,encodedKey:new Uint8Array(d),val:l})}o.sort((c,l)=>la(c.encodedKey,l.encodedKey));for(let c=1;c<o.length;c++)if(o[c-1].rawKey===o[c].rawKey)throw new N(B.NonDeterministicCbor,`Duplicate key in deterministic CBOR map: ${o[c].rawKey}`);Je(t,5,BigInt(o.length));for(const c of o)xi(t,c.encodedKey,n),Tn(c.val,e+1,t,i,s,n)}else throw new N(B.MalformedCbor,`Unsupported value type in deterministic CBOR: ${typeof r}`);if(t.length>n)throw new N(B.BoundsExceeded,`Encoded CBOR exceeds maxBytes (${n})`)}function xe(r,e){const t=e?.maxDepth??aa,i=e?.maxContainerLen??oa,s=e?.maxBytes??ls,n=[];return Tn(r,0,n,t,i,s),new Uint8Array(n)}function Bi(r,e,t,i,s,n){if(t>i)throw new N(B.BoundsExceeded,`CBOR depth limit (${i}) exceeded`);if(e.offset>=r.length)throw new N(B.MalformedCbor,"Unexpected end of CBOR input");const a=r[e.offset++],o=a>>>5,c=a&31;if(c===31)throw new N(B.NonDeterministicCbor,"Indefinite-length CBOR items are forbidden");if(c>=28&&c<=30)throw new N(B.MalformedCbor,`Reserved CBOR additional information value (${c})`);let l=0n;if(c<24)l=BigInt(c);else if(c===24){if(e.offset+1>r.length)throw new N(B.MalformedCbor,"Truncated 1-byte CBOR uint");const h=r[e.offset++];if(l=BigInt(h),l<24n&&o!==7)throw new N(B.NonDeterministicCbor,"Non-minimal 1-byte CBOR integer encoding")}else if(c===25){if(o===7)throw new N(B.NonDeterministicCbor,"Floating-point values (float16) are forbidden");if(e.offset+2>r.length)throw new N(B.MalformedCbor,"Truncated 2-byte CBOR uint");const h=r[e.offset],d=r[e.offset+1];if(e.offset+=2,l=BigInt(h)<<8n|BigInt(d),l<=0xffn)throw new N(B.NonDeterministicCbor,"Non-minimal 2-byte CBOR integer encoding")}else if(c===26){if(o===7)throw new N(B.NonDeterministicCbor,"Floating-point values (float32) are forbidden");if(e.offset+4>r.length)throw new N(B.MalformedCbor,"Truncated 4-byte CBOR uint");const h=r[e.offset],d=r[e.offset+1],u=r[e.offset+2],m=r[e.offset+3];if(e.offset+=4,l=BigInt(h)<<24n|BigInt(d)<<16n|BigInt(u)<<8n|BigInt(m),l<=0xffffn)throw new N(B.NonDeterministicCbor,"Non-minimal 4-byte CBOR integer encoding")}else if(c===27){if(o===7)throw new N(B.NonDeterministicCbor,"Floating-point values (float64) are forbidden");if(e.offset+8>r.length)throw new N(B.MalformedCbor,"Truncated 8-byte CBOR uint");l=0n;for(let h=0;h<8;h++)l=l<<8n|BigInt(r[e.offset+h]);if(e.offset+=8,l<=0xffffffffn)throw new N(B.NonDeterministicCbor,"Non-minimal 8-byte CBOR integer encoding")}switch(o){case 0:return l<=BigInt(Number.MAX_SAFE_INTEGER)?Number(l):l;case 1:{if(l>0x7fffffffffffffffn)throw new N(B.BoundsExceeded,"Negative integer overflows int64");const h=-1n-l;return h>=BigInt(Number.MIN_SAFE_INTEGER)?Number(h):h}case 2:{if(l>BigInt(n))throw new N(B.BoundsExceeded,"CBOR byte string length exceeds limit");const h=Number(l);if(e.offset+h>r.length)throw new N(B.MalformedCbor,"Truncated CBOR byte string");const d=r.slice(e.offset,e.offset+h);return e.offset+=h,d}case 3:{if(l>BigInt(n))throw new N(B.BoundsExceeded,"CBOR text string length exceeds limit");const h=Number(l);if(e.offset+h>r.length)throw new N(B.MalformedCbor,"Truncated CBOR text string");const d=r.subarray(e.offset,e.offset+h);e.offset+=h;try{return Bc.decode(d)}catch{throw new N(B.MalformedCbor,"Invalid UTF-8 in CBOR text string")}}case 4:{if(l>BigInt(s))throw new N(B.BoundsExceeded,`CBOR array length (${l.toString()}) exceeds limit (${s})`);if(t+1>i)throw new N(B.BoundsExceeded,`CBOR depth limit (${i}) exceeded`);const h=Number(l),d=[];for(let u=0;u<h;u++)d.push(Bi(r,e,t+1,i,s,n));return d}case 5:{if(l>BigInt(s))throw new N(B.BoundsExceeded,`CBOR map length (${l.toString()}) exceeds limit (${s})`);if(t+1>i)throw new N(B.BoundsExceeded,`CBOR depth limit (${i}) exceeded`);const h=Number(l),d=Object.create(null);let u=null;for(let m=0;m<h;m++){const p=e.offset,_=Bi(r,e,t+1,i,s,n),f=e.offset;if(typeof _!="string")throw new N(B.NonDeterministicCbor,"CBOR map keys must be text strings");const g=r.subarray(p,f);if(u!==null&&la(u,g)>=0)throw new N(B.NonDeterministicCbor,"CBOR map keys are not sorted in canonical order or contain duplicates");u=g;const w=Bi(r,e,t+1,i,s,n);d[_]=w}return d}case 6:throw new N(B.NonDeterministicCbor,"Semantic tags are forbidden in deterministic CBOR");case 7:{if(c===20)return!1;if(c===21)return!0;if(c===22)return null;throw new N(B.NonDeterministicCbor,`Unsupported simple value or float in deterministic CBOR (ai=${c})`)}default:throw new N(B.MalformedCbor,"Unknown CBOR major type")}}function Me(r,e){const t=e?.maxDepth??aa,i=e?.maxContainerLen??oa,s=e?.maxBytes??ls;if(r.byteLength===0)throw new N(B.MalformedCbor,"Empty CBOR input");if(r.byteLength>s)throw new N(B.BoundsExceeded,`CBOR input (${r.byteLength}) exceeds maxBytes (${s})`);const n={offset:0},a=Bi(r,n,0,t,i,s);if(n.offset!==r.byteLength)throw new N(B.MalformedCbor,"Trailing bytes after deterministic CBOR root value");return a}function Be(r){return Rn(r)}function ue(r){return Qi(r)}function ae(r){if(r.length%2!==0||!/^[0-9a-fA-F]*$/.test(r))throw new N(B.InvalidArgument,"Invalid hex string");return Yn(r)}function Nc(r){const e=globalThis.crypto.getRandomValues(new Uint8Array(32));return da(r,e)}function da(r,e){if(e.byteLength!==32)throw new N(B.InvalidArgument,"Ed25519 seed must be 32 bytes");return{keyId:r,publicKey:as.getPublicKey(e),privateKey:new Uint8Array(e)}}function ha(r,e){const t=Ui.encode(r),i=new Uint8Array(t.byteLength+1+e.byteLength);return i.set(t,0),i[t.byteLength]=0,i.set(e,t.byteLength+1),i}function Ve(r,e,t){if(!r)throw new N(B.InvalidArgument,"Signing domain must not be empty");if(t.byteLength!==32)throw new N(B.InvalidArgument,"Ed25519 private key must be 32 bytes");const i=ha(r,e);return as.sign(i,t)}function Pe(r,e,t,i){if(!r||t.byteLength!==32||i.byteLength!==64)return!1;try{const s=ha(r,e);return as.verify(i,s,t,{zip215:!1})}catch{return!1}}function ua(r,e,t){const i=Ui.encode(r),s=new Uint8Array(i.byteLength+1+e.byteLength+t.byteLength);return s.set(i,0),s[i.byteLength]=0,s.set(e,i.byteLength+1),s.set(t,i.byteLength+1+e.byteLength),Be(s)}const ft={MatOperator:2,RelayOperator:8},We={None:0,ReadPublic:1,ScoreMat:2,ConfirmLocalResult:4,RefereeDecision:8,RecordWeighIn:16,RecordMedicalDecision:32,SubmitCoachRoster:64,ManageTournament:128,PublishSnapshot:256,RelaySignedBytes:512};function ds(r){return xe({certificate_id:r.certificate_id,tournament_id:r.tournament_id,subject_key_id:r.subject_key_id,subject_pubkey:r.subject_pubkey,role:r.role,allowed_scopes:r.allowed_scopes,allowed_stream_id:r.allowed_stream_id,assigned_mat_id:r.assigned_mat_id,assignment_revision:r.assignment_revision,authority_generation:r.authority_generation,issued_at_ms:r.issued_at_ms,expires_at_ms:r.expires_at_ms,allow_in_progress_completion:r.allow_in_progress_completion})}function zs(r,e){if(!r.certificate_id||!r.tournament_id||!r.subject_key_id)throw new N(B.InvalidArgument,"DelegatedCertificate missing required identifiers");if(r.expires_at_ms<r.issued_at_ms)throw new N(B.InvalidArgument,"DelegatedCertificate expires_at_ms precedes issued_at_ms");const t={...r,root_signature:new Uint8Array(64)},i=ds(t);return t.root_signature=Ve(en,i,e),t}function Hi(r,e,t,i){const s=ds(r);if(!Pe(en,s,e,r.root_signature))throw new N(B.InvalidSignature,"Invalid root signature on delegated certificate");if(t>r.expires_at_ms&&!(i&&r.allow_in_progress_completion))throw new N(B.CertificateExpired,"Delegated certificate expired and in-progress completion not active");return!0}function _a(r){if(r.protocol_version!==os||r.schema_version!==cs)throw new N(B.UnsupportedVersion,"Unsupported protocol or schema version");return{protocol_version:r.protocol_version,schema_version:r.schema_version,tournament_id:r.tournament_id,stream_id:r.stream_id,match_id:r.match_id,authority_epoch:r.authority_epoch,sequence:r.sequence,previous_event_hash:r.previous_event_hash,assignment_revision:r.assignment_revision,rules_hash:r.rules_hash,required_public_control_head:r.required_public_control_head,command_id:r.command_id,event_type:r.event_type,signer_key_id:r.signer_key_id,certificate_id:r.certificate_id,boot_id:r.boot_id,monotonic_time_ns:r.monotonic_time_ns,audit_time_ms:r.audit_time_ms,time_uncertainty_ms:r.time_uncertainty_ms,payload:r.payload}}function ma(r){return xe(_a(r))}function Pc(r){const e=_a(r);return e.signature=r.signature,e.event_id=r.event_id,xe(e)}function Xe(r){if(r.byteLength>ls)throw new N(B.BoundsExceeded,"Wire event exceeds MAX_EVENT_BYTES");const e=Me(r);if(typeof e!="object"||e===null||Array.isArray(e)||e instanceof Uint8Array||e instanceof Map)throw new N(B.MalformedCbor,"SignedEvent wire root must be a CBOR map");const t=e,i=c=>{const l=t[c];if(typeof l=="number"&&Number.isInteger(l)&&l>=0)return l;if(typeof l=="bigint"&&l>=0n)return Number(l);throw new N(B.MalformedCbor,`Missing or invalid uint field: ${c}`)},s=c=>{const l=t[c];if(typeof l=="string")return l;throw new N(B.MalformedCbor,`Missing or invalid text field: ${c}`)},n=(c,l)=>{const h=t[c];if(h instanceof Uint8Array&&h.byteLength===l)return h;throw new N(B.MalformedCbor,`Missing or invalid ${l}-byte field: ${c}`)},a=i("protocol_version"),o=i("schema_version");if(a!==os||o!==cs)throw new N(B.UnsupportedVersion,"Unsupported protocol or schema version on wire");if(!("payload"in t))throw new N(B.MalformedCbor,"Missing payload field");return{protocol_version:a,schema_version:o,tournament_id:s("tournament_id"),stream_id:s("stream_id"),match_id:s("match_id"),authority_epoch:i("authority_epoch"),sequence:i("sequence"),previous_event_hash:n("previous_event_hash",32),assignment_revision:i("assignment_revision"),rules_hash:n("rules_hash",32),required_public_control_head:n("required_public_control_head",32),command_id:s("command_id"),event_type:s("event_type"),signer_key_id:s("signer_key_id"),certificate_id:s("certificate_id"),boot_id:s("boot_id"),monotonic_time_ns:i("monotonic_time_ns"),audit_time_ms:i("audit_time_ms"),time_uncertainty_ms:i("time_uncertainty_ms"),payload:t.payload,signature:n("signature",64),event_id:n("event_id",32)}}const $c=1024*1024;function Oc(r){const e=r.chunks.map(t=>({byte_length:t.byte_length,chunk_index:t.chunk_index,sha256_hash:t.sha256_hash}));return xe({chunk_size_bytes:r.chunk_size_bytes,chunks:e,full_file_sha256:r.full_file_sha256,public_control_head:r.public_control_head,published_at_ms:r.published_at_ms,schema_version:r.schema_version,signer_key_id:r.signer_key_id,snapshot_epoch:r.snapshot_epoch,stream_watermarks:{...r.stream_watermarks},total_bytes:r.total_bytes,tournament_id:r.tournament_id},{maxBytes:$c})}function Lc(r,e){const t=Oc(r);if(!Pe(ca,t,e,r.signature))throw new N(B.InvalidSignature,"Snapshot manifest signature verification failed");return!0}function Dc(r){return xe({tournament_id:r.tournament_id,stream_id:r.stream_id,authority_epoch:r.authority_epoch,heartbeat_counter:r.heartbeat_counter,head_sequence:r.head_sequence,head_hash:r.head_hash,monotonic_time_ns:r.monotonic_time_ns})}function Fc(r,e,t){if(r.heartbeat_counter<=t)throw new N(B.ReplayHeartbeatRejected,`Replayed or non-increasing heartbeat counter (${r.heartbeat_counter} <= ${t})`);const i=Dc(r);if(!Pe(Mn,i,e,r.signature))throw new N(B.InvalidSignature,"SourceHeartbeat signature verification failed");return!0}const pa={NormalDeviceReplacement:1,TimeoutOnlyInvalid:3},$e={Applied:"Applied",DuplicateIgnored:"DuplicateIgnored",QueuedPendingDependency:"QueuedPendingDependency",QuarantinedOldEpoch:"QuarantinedOldEpoch",GapReplayRequested:"GapReplayRequested",EquivocationConflict:"EquivocationConflict"};class Uc{rootPubkey;highestAuthorityGeneration=1;certs=new Map;revokedCerts=new Map;knownControlHeads=[new Uint8Array(32)];usedTransferIds=new Set;streams=new Map;pendingEvents=[];quarantinedEvents=[];equivocationsList=[];constructor(e){this.rootPubkey=new Uint8Array(e)}registerCertificate(e){const t=ds(e);if(!Pe(en,t,this.rootPubkey,e.root_signature))throw new N(B.InvalidSignature,"DelegatedCertificate root signature invalid");if(e.authority_generation<this.highestAuthorityGeneration)throw new N(B.EpochFencedOldEvent,"Certificate authority generation superseded");return this.highestAuthorityGeneration=Math.max(this.highestAuthorityGeneration,e.authority_generation),this.certs.set(e.certificate_id,e),!0}revokeCertificate(e,t){this.revokedCerts.set(e,t)}markControlHeadKnown(e){this.knownControlHeads.some(t=>be(t,e))||this.knownControlHeads.push(new Uint8Array(e))}applyAuthorityTransfer(e,t){if(e.reason===pa.TimeoutOnlyInvalid||!e.old_operator_physically_stopped||!e.timers_initialized_stopped)throw new N(B.TimeoutTakeoverForbidden,"Authority transfer requires physical stop and stopped timers; timeout-only takeover forbidden");if(!e.transfer_id||!e.stream_id)throw new N(B.InvalidArgument,"Transfer ID and stream ID must not be empty");if(this.usedTransferIds.has(e.transfer_id))throw new N(B.InvalidArgument,"Authority transfer_id has already been applied");if(e.director_generation<this.highestAuthorityGeneration)throw new N(B.EpochFencedOldEvent,"Transfer director_generation is superseded");const i=this.getOrCreateStream(e.stream_id);if(e.new_epoch<=i.activeEpoch||e.new_epoch<=e.old_epoch)throw new N(B.EpochFencedOldEvent,"Transfer new_epoch must strictly exceed active epoch");return this.usedTransferIds.add(e.transfer_id),this.highestAuthorityGeneration=Math.max(this.highestAuthorityGeneration,e.director_generation),i.activeEpoch=e.new_epoch,i.headSequence=e.old_last_sequence,i.headHash=new Uint8Array(t),i.epochAnchorHash=new Uint8Array(t),i.acceptedBySeq.clear(),this.markControlHeadKnown(t),!0}verifyAndAccept(e,t,i,s,n){if(e.protocol_version!==os||e.schema_version!==cs)throw new N(B.UnsupportedVersion,"Unsupported protocol or schema version");const a=ma(e);if(this.revokedCerts.has(e.certificate_id))throw new N(B.CertificateRevoked,"Event signer certificate has been revoked");const o=this.certs.get(e.certificate_id);if(!o)throw new N(B.InvalidSignature,"Unknown certificate_id on SignedEvent");if(e.signer_key_id&&e.signer_key_id!==o.subject_key_id)throw new N(B.InvalidSignature,"Event signer_key_id does not match certificate subject");if(Hi(o,this.rootPubkey,s,n),(o.allowed_scopes&i)!==i)throw new N(B.UnauthorizedScope,"Certificate lacks required scope for operation");if(o.allowed_stream_id&&o.allowed_stream_id!=="*"&&o.allowed_stream_id!==e.stream_id)throw new N(B.UnauthorizedScope,"Certificate is not authorized for this stream_id");if(o.tournament_id&&e.tournament_id&&o.tournament_id!==e.tournament_id)throw new N(B.UnauthorizedScope,"Certificate tournament_id mismatch");if(!Pe(t,a,o.subject_pubkey,e.signature))throw new N(B.InvalidSignature,"SignedEvent signature verification failed");const c=ua(t,a,e.signature);if(!be(c,e.event_id))throw new N(B.InvalidSignature,"SignedEvent event_id does not match computed hash");const l=this.getOrCreateStream(e.stream_id);if(e.authority_epoch<l.activeEpoch)return this.quarantinedEvents.push(e),$e.QuarantinedOldEpoch;if(!this.knownControlHeads.some(u=>be(u,e.required_public_control_head))){if(this.pendingEvents.some(u=>be(u.event_id,e.event_id)))return $e.QueuedPendingDependency;if(this.pendingEvents.length>=Tc)throw new N(B.PendingDependencyOverflow,"Pending authorization dependency queue capacity exceeded");return this.pendingEvents.push(e),$e.QueuedPendingDependency}if(e.authority_epoch>l.activeEpoch)throw new N(B.EpochFencedOldEvent,"Event epoch exceeds active stream epoch without transfer");const d=l.acceptedBySeq.get(e.sequence);if(d)return be(d.event_id,e.event_id)?$e.DuplicateIgnored:(this.equivocationsList.push({stream_id:e.stream_id,authority_epoch:e.authority_epoch,sequence:e.sequence,first_event:d,conflicting_event:e}),$e.EquivocationConflict);if(e.sequence<=l.headSequence)throw new N(B.SequenceGap,"Event sequence precedes epoch anchor sequence");if(e.sequence>l.headSequence+1)return $e.GapReplayRequested;if(!be(e.previous_event_hash,l.headHash))throw new N(B.HashChainMismatch,"SignedEvent previous_event_hash mismatch");return l.headSequence=e.sequence,l.headHash=new Uint8Array(e.event_id),l.acceptedBySeq.set(e.sequence,e),t===ke&&this.markControlHeadKnown(e.event_id),$e.Applied}drainReadyPending(e,t,i,s){const n=[];if(this.pendingEvents.length===0)return n;this.pendingEvents.sort((o,c)=>o.stream_id!==c.stream_id?o.stream_id.localeCompare(c.stream_id):o.authority_epoch!==c.authority_epoch?o.authority_epoch-c.authority_epoch:o.sequence-c.sequence);let a=!0;for(;a&&this.pendingEvents.length>0;){a=!1;const o=[];for(const c of this.pendingEvents){if(!this.knownControlHeads.some(d=>be(d,c.required_public_control_head))){o.push(c);continue}const h=this.verifyAndAccept(c,e,t,i,s);h===$e.Applied?(n.push(c),a=!0):(h===$e.GapReplayRequested||h===$e.QueuedPendingDependency)&&o.push(c)}this.pendingEvents=o}return n}activeEpoch(e){return this.streams.get(e)?.activeEpoch??1}headSequence(e){return this.streams.get(e)?.headSequence??0}headHash(e){return this.streams.get(e)?.headHash??new Uint8Array(32)}quarantinedOldEpochEvents(){return this.quarantinedEvents}equivocations(){return this.equivocationsList}getOrCreateStream(e){let t=this.streams.get(e);return t||(t={activeEpoch:1,headSequence:0,headHash:new Uint8Array(32),epochAnchorHash:new Uint8Array(32),acceptedBySeq:new Map},this.streams.set(e,t)),t}}function gt(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();const r=new Uint8Array(16);if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function")crypto.getRandomValues(r);else for(let t=0;t<16;t++)r[t]=Math.floor(Math.random()*256);r[6]=r[6]&15|64,r[8]=r[8]&63|128;const e=ue(r);return`${e.slice(0,8)}-${e.slice(8,12)}-${e.slice(12,16)}-${e.slice(16,20)}-${e.slice(20,32)}`}const Hc="openmat-public-database";class Ys extends Error{}class Wc{constructor(e){this.onResume=e,this.open()}onResume;worker;channel;pending=new Map;lifetime=new AbortController;connecting;initializationError="";visibilityChanges=0;get session(){return this.lifetime.signal}onPageHide=e=>{e.persisted?this.suspend():this.close()};onPageShow=e=>{e.persisted&&this.session.aborted&&(this.open(),this.onResume?.())};onVisibilityChange=()=>{this.visibilityChanges++,!document.hidden&&!this.session.aborted&&this.onResume?.()};open(){this.session.aborted&&(this.lifetime=new AbortController),window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow),document.addEventListener("visibilitychange",this.onVisibilityChange),this.channel||this.openTransport()}openTransport(){this.initializationError="";try{const e=new BroadcastChannel(Hc);this.channel=e;const t=new Worker(new URL(""+new URL("localDatabase.worker-CWMWfUVC.js",import.meta.url).href,import.meta.url),{type:"module"});this.worker=t,t.onerror=i=>{t===this.worker&&(this.initializationError=i.message||"Local Database worker failed")},t.onmessage=({data:i})=>{t===this.worker&&i.error&&(this.initializationError=String(i.error))},e.onmessage=({data:i})=>{if(e!==this.channel)return;const s=this.pending.get(i.id);s&&(i.error?s.reject(new Error(i.error)):s.resolve(i.value))}}catch(e){this.releaseTransport(),this.initializationError=String(e)}}releaseTransport(){this.worker?.terminate(),this.worker=void 0,this.channel?.close(),this.channel=void 0;for(const e of this.pending.values())e.reject(new Error("Local Database connection closed."));this.pending.clear()}suspend(){this.lifetime.abort(),this.connecting=void 0,this.releaseTransport()}close(){window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow),document.removeEventListener("visibilitychange",this.onVisibilityChange),this.suspend()}connect(){const e=this.session;return e.aborted?Promise.reject(new Error("Local Database connection closed.")):this.connecting??=this.waitForOwner(e).finally(()=>{e.aborted||(this.connecting=void 0)})}async waitForOwner(e){let i=0,s=!1;for(;!e.aborted&&i<3e4;){if(this.initializationError||!s&&i>=15e3){if(s)throw new Error(this.initializationError);if(this.releaseTransport(),this.openTransport(),s=!0,this.initializationError)throw new Error(this.initializationError)}const n=this.visibilityChanges;try{return await this.request("status",{},500)}catch(a){if(e.aborted||!(a instanceof Ys))throw a;!document.hidden&&n===this.visibilityChanges&&(i+=500)}}throw new Error("Local Database unavailable. Browser storage or worker initialization failed.")}query(e){return this.request(e)}installSnapshot(e,t,i){return this.request("install",{manifest:e,bytes:t,publicKey:i})}request(e,t={},i=3e4){const s=this.channel;if(!s)return Promise.reject(new Error("Local Database connection closed."));const n=gt();let a;return new Promise((o,c)=>{this.pending.set(n,{resolve:o,reject:c}),a=setTimeout(()=>c(new Ys("Local Database request timed out. Cached results may be stale.")),i),s.postMessage({id:n,method:e,args:t})}).finally(()=>{clearTimeout(a),this.pending.delete(n)})}}const Bn=4194304;function De(r,e){if(r.length!==e.length||r.some((t,i)=>t!==e[i]))throw new Error("Noncanonical binary packet")}class Fe{data=[];varint(e){do{const t=e%128;e=Math.floor(e/128),this.data.push(t+(e?128:0))}while(e)}number(e,t,i){if(!Number.isSafeInteger(t)||t<0||t>i)throw new Error("Binary integer/enum out of range");t&&(this.varint(e*8),this.varint(t))}bytes(e,t,i=!0){if(!(!t.length&&i)){if(t.length+this.data.length+10>Bn)throw new Error("Binary packet exceeds limit");this.varint(e*8+2),this.varint(t.length);for(const s of t)this.data.push(s)}}text(e,t){const i=new TextEncoder().encode(t);if(new TextDecoder("utf-8",{fatal:!0}).decode(i)!==t)throw new Error("Invalid UTF-8");this.bytes(e,i)}take(){if(this.data.length>Bn)throw new Error("Binary packet exceeds limit");return Uint8Array.from(this.data)}}class Ue{constructor(e){if(this.data=e,e.length>Bn)throw new Error("Binary packet exceeds limit")}data;offset=0;wire=0;field=0;varint(){let e=0;for(let t=0;t<=49;t+=7){if(this.offset===this.data.length)throw new Error("Truncated varint");const i=this.data[this.offset++];if(e+=(i&127)*2**t,!(i&128)){if(!Number.isSafeInteger(e))throw new Error("Unsafe integer");return e}}throw new Error("Varint overflow")}next(){if(this.offset===this.data.length)return!1;const e=this.varint(),t=Math.floor(e/8);if(!t||t>536870911||t<this.field)throw new Error("Invalid field order");return this.field=t,this.wire=e%8,!0}number(){if(this.wire!==0)throw new Error("Wrong wire type");return this.varint()}bytes(){if(this.wire!==2)throw new Error("Wrong wire type");const e=this.varint();if(e>this.data.length-this.offset)throw new Error("Truncated bytes");const t=this.data.slice(this.offset,this.offset+e);return this.offset+=e,t}text(){return new TextDecoder("utf-8",{fatal:!0}).decode(this.bytes())}}function fa(r){const e=new Fe;return e.number(1,r.index,4294967295),e.number(2,r.half_points,4294967295),e.text(3,r.name),e.text(4,r.team_id),e.take()}function Vc(r){const e={index:0,half_points:0,name:"",team_id:""},t=new Ue(r);for(;t.next();)switch(t.field){case 1:e.index=t.number();break;case 2:e.half_points=t.number();break;case 3:e.name=t.text();break;case 4:e.team_id=t.text();break;default:throw new Error("Unknown binary field")}return De(r,fa(e)),e}function ga(r){const e=new Fe;return e.number(1,r.slot,4294967295),e.number(2,r.team_index,4294967295),e.number(3,r.seed_rank,4294967295),e.number(4,r.state,4294967295),e.text(5,r.display_name),e.text(6,r.athlete_id),e.number(7,r.public_stage,4294967295),e.take()}function qc(r){const e={slot:0,team_index:0,seed_rank:0,state:0,display_name:"",athlete_id:"",public_stage:0},t=new Ue(r);for(;t.next();)switch(t.field){case 1:e.slot=t.number();break;case 2:e.team_index=t.number();break;case 3:e.seed_rank=t.number();break;case 4:e.state=t.number();break;case 5:e.display_name=t.text();break;case 6:e.athlete_id=t.text();break;case 7:e.public_stage=t.number();break;default:throw new Error("Unknown binary field")}return De(r,ga(e)),e}function _i(r){const e=new Fe;return e.number(1,r.local_number,4294967295),e.number(2,r.bout_number,4294967295),e.number(3,r.round_index,4294967295),e.number(4,r.flags,4294967295),e.number(5,r.placement_rank,4294967295),e.number(6,r.red_slot,4294967295),e.number(7,r.green_slot,4294967295),e.number(8,r.winner_slot,4294967295),e.number(9,r.loser_slot,4294967295),e.number(10,r.winner_next,4294967295),e.number(11,r.loser_next,4294967295),e.number(12,r.lifecycle,8),e.number(13,r.win_type,8),e.number(14,r.red_score,4294967295),e.number(15,r.green_score,4294967295),e.number(16,r.period,4294967295),e.number(17,r.clock_remaining_ds,4294967295),e.number(18,r.mat_id,4294967295),e.number(19,r.assignment_revision,4294967295),e.number(20,r.completed_offset_sec,4294967295),e.text(21,r.match_id),e.number(22,r.eventlog_available,4294967295),e.number(23,r.edge_flags,4294967295),e.take()}function ba(r){const e={local_number:0,bout_number:0,round_index:0,flags:0,placement_rank:0,red_slot:0,green_slot:0,winner_slot:0,loser_slot:0,winner_next:0,loser_next:0,lifecycle:0,win_type:0,red_score:0,green_score:0,period:0,clock_remaining_ds:0,mat_id:0,assignment_revision:0,completed_offset_sec:0,match_id:"",eventlog_available:0,edge_flags:0},t=new Ue(r);for(;t.next();)switch(t.field){case 1:e.local_number=t.number();break;case 2:e.bout_number=t.number();break;case 3:e.round_index=t.number();break;case 4:e.flags=t.number();break;case 5:e.placement_rank=t.number();break;case 6:e.red_slot=t.number();break;case 7:e.green_slot=t.number();break;case 8:e.winner_slot=t.number();break;case 9:e.loser_slot=t.number();break;case 10:e.winner_next=t.number();break;case 11:e.loser_next=t.number();break;case 12:e.lifecycle=t.number();break;case 13:e.win_type=t.number();break;case 14:e.red_score=t.number();break;case 15:e.green_score=t.number();break;case 16:e.period=t.number();break;case 17:e.clock_remaining_ds=t.number();break;case 18:e.mat_id=t.number();break;case 19:e.assignment_revision=t.number();break;case 20:e.completed_offset_sec=t.number();break;case 21:e.match_id=t.text();break;case 22:e.eventlog_available=t.number();break;case 23:e.edge_flags=t.number();break;default:throw new Error("Unknown binary field")}return De(r,_i(e)),e}function Gc(){return{local_number:0,bout_number:0,round_index:0,flags:0,placement_rank:0,red_slot:0,green_slot:0,winner_slot:0,loser_slot:0,winner_next:0,loser_next:0,lifecycle:0,win_type:0,red_score:0,green_score:0,period:0,clock_remaining_ds:0,mat_id:0,assignment_revision:0,completed_offset_sec:0,match_id:"",eventlog_available:0,edge_flags:0}}function ya(r){const e=new Fe;return e.number(1,r.bracket_index,4294967295),e.number(2,r.division,4),e.number(3,r.weight_index,4294967295),e.number(4,r.revision,9007199254740991),e.number(5,r.eventlog_word_count,4294967295),e.bytes(6,r.state_sha256),e.text(7,r.bracket_id),e.text(8,r.weight_class_id),e.take()}function jc(r){const e={bracket_index:0,division:0,weight_index:0,revision:0,eventlog_word_count:0,state_sha256:new Uint8Array,bracket_id:"",weight_class_id:""},t=new Ue(r);for(;t.next();)switch(t.field){case 1:e.bracket_index=t.number();break;case 2:e.division=t.number();break;case 3:e.weight_index=t.number();break;case 4:e.revision=t.number();break;case 5:e.eventlog_word_count=t.number();break;case 6:e.state_sha256=t.bytes();break;case 7:e.bracket_id=t.text();break;case 8:e.weight_class_id=t.text();break;default:throw new Error("Unknown binary field")}return De(r,ya(e)),e}function wa(r){const e=new Fe;e.text(1,r.tournament_id),e.number(2,r.base_epoch_utc,4294967295),e.number(3,r.revision,9007199254740991),e.number(4,r.mat_count,4294967295),e.bytes(5,r.rules_hash),e.bytes(6,r.authority_public_key);for(const t of r.teams)e.bytes(7,fa(t),!1);for(const t of r.brackets)e.bytes(8,ya(t),!1);return e.take()}function zc(r){const e={tournament_id:"",base_epoch_utc:0,revision:0,mat_count:0,rules_hash:new Uint8Array,authority_public_key:new Uint8Array,teams:[],brackets:[]},t=new Ue(r);for(;t.next();)switch(t.field){case 1:e.tournament_id=t.text();break;case 2:e.base_epoch_utc=t.number();break;case 3:e.revision=t.number();break;case 4:e.mat_count=t.number();break;case 5:e.rules_hash=t.bytes();break;case 6:e.authority_public_key=t.bytes();break;case 7:e.teams.push(Vc(t.bytes()));break;case 8:e.brackets.push(jc(t.bytes()));break;default:throw new Error("Unknown binary field")}return De(r,wa(e)),e}function gi(r){const e=new Fe;e.number(1,r.bracket_index,4294967295),e.number(2,r.division,4),e.number(3,r.weight_index,4294967295),e.number(4,r.format,4294967295),e.number(5,r.revision,9007199254740991);for(const t of r.athletes)e.bytes(6,ga(t),!1);for(const t of r.bouts)e.bytes(7,_i(t),!1);return e.bytes(8,r.placement_slots),e.text(30,r.tournament_id),e.text(31,r.bracket_id),e.take()}function va(r){const e={bracket_index:0,division:0,weight_index:0,format:0,revision:0,athletes:[],bouts:[],placement_slots:new Uint8Array,tournament_id:"",bracket_id:""},t=new Ue(r);for(;t.next();)switch(t.field){case 1:e.bracket_index=t.number();break;case 2:e.division=t.number();break;case 3:e.weight_index=t.number();break;case 4:e.format=t.number();break;case 5:e.revision=t.number();break;case 6:e.athletes.push(qc(t.bytes()));break;case 7:e.bouts.push(ba(t.bytes()));break;case 8:e.placement_slots=t.bytes();break;case 30:e.tournament_id=t.text();break;case 31:e.bracket_id=t.text();break;default:throw new Error("Unknown binary field")}return De(r,gi(e)),e}function Yc(){return{bracket_index:0,division:0,weight_index:0,format:0,revision:0,athletes:[],bouts:[],placement_slots:new Uint8Array,tournament_id:"",bracket_id:""}}function hs(r){const e=new Fe;return e.number(1,r.mat_id,4294967295),e.number(2,r.bracket_index,4294967295),e.number(3,r.local_number,4294967295),e.number(4,r.bout_number,4294967295),e.number(5,r.red_slot,4294967295),e.number(6,r.green_slot,4294967295),e.number(7,r.red_score,4294967295),e.number(8,r.green_score,4294967295),e.number(9,r.period,4294967295),e.number(10,r.clock_remaining_ds,4294967295),e.number(11,r.clock_running,4294967295),e.number(12,r.on_deck,4294967295),e.number(13,r.in_the_hole,4294967295),e.bytes(14,r.eventlog_words),e.text(30,r.tournament_id),e.text(31,r.bracket_id),e.number(32,r.revision,9007199254740991),e.take()}function ka(r){const e={mat_id:0,bracket_index:0,local_number:0,bout_number:0,red_slot:0,green_slot:0,red_score:0,green_score:0,period:0,clock_remaining_ds:0,clock_running:0,on_deck:0,in_the_hole:0,eventlog_words:new Uint8Array,tournament_id:"",bracket_id:"",revision:0},t=new Ue(r);for(;t.next();)switch(t.field){case 1:e.mat_id=t.number();break;case 2:e.bracket_index=t.number();break;case 3:e.local_number=t.number();break;case 4:e.bout_number=t.number();break;case 5:e.red_slot=t.number();break;case 6:e.green_slot=t.number();break;case 7:e.red_score=t.number();break;case 8:e.green_score=t.number();break;case 9:e.period=t.number();break;case 10:e.clock_remaining_ds=t.number();break;case 11:e.clock_running=t.number();break;case 12:e.on_deck=t.number();break;case 13:e.in_the_hole=t.number();break;case 14:e.eventlog_words=t.bytes();break;case 30:e.tournament_id=t.text();break;case 31:e.bracket_id=t.text();break;case 32:e.revision=t.number();break;default:throw new Error("Unknown binary field")}return De(r,hs(e)),e}function Sa(r){const e=new Fe;for(const t of r.mats)e.bytes(1,hs(t),!1);return e.text(30,r.tournament_id),e.number(32,r.revision,9007199254740991),e.take()}function Kc(r){const e={mats:[],tournament_id:"",revision:0},t=new Ue(r);for(;t.next();)switch(t.field){case 1:e.mats.push(ka(t.bytes()));break;case 30:e.tournament_id=t.text();break;case 32:e.revision=t.number();break;default:throw new Error("Unknown binary field")}return De(r,Sa(e)),e}function Ea(r){const e=new Fe;return e.number(1,r.bracket_index,4294967295),e.number(2,r.revision,9007199254740991),e.bytes(3,_i(r.bout),!1),e.bytes(4,r.eventlog_words),e.text(30,r.tournament_id),e.text(31,r.bracket_id),e.take()}function Qc(r){const e={bracket_index:0,revision:0,bout:Gc(),eventlog_words:new Uint8Array,tournament_id:"",bracket_id:""},t=new Ue(r);for(;t.next();)switch(t.field){case 1:e.bracket_index=t.number();break;case 2:e.revision=t.number();break;case 3:e.bout=ba(t.bytes());break;case 4:e.eventlog_words=t.bytes();break;case 30:e.tournament_id=t.text();break;case 31:e.bracket_id=t.text();break;default:throw new Error("Unknown binary field")}return De(r,Ea(e)),e}function xa(r){const e=new Fe;return e.number(1,r.bracket_index,4294967295),e.bytes(2,r.eventlog_words),e.text(30,r.tournament_id),e.text(31,r.bracket_id),e.number(32,r.revision,9007199254740991),e.take()}function Jc(r){const e={bracket_index:0,eventlog_words:new Uint8Array,tournament_id:"",bracket_id:"",revision:0},t=new Ue(r);for(;t.next();)switch(t.field){case 1:e.bracket_index=t.number();break;case 2:e.eventlog_words=t.bytes();break;case 30:e.tournament_id=t.text();break;case 31:e.bracket_id=t.text();break;case 32:e.revision=t.number();break;default:throw new Error("Unknown binary field")}return De(r,xa(e)),e}function Ra(r){const e=new Fe;return e.bytes(1,gi(r.state),!1),e.bytes(2,r.eventlog_words),e.text(30,r.tournament_id),e.text(31,r.bracket_id),e.number(32,r.revision,9007199254740991),e.take()}function Xc(r){const e={state:Yc(),eventlog_words:new Uint8Array,tournament_id:"",bracket_id:"",revision:0},t=new Ue(r);for(;t.next();)switch(t.field){case 1:e.state=va(t.bytes());break;case 2:e.eventlog_words=t.bytes();break;case 30:e.tournament_id=t.text();break;case 31:e.bracket_id=t.text();break;case 32:e.revision=t.number();break;default:throw new Error("Unknown binary field")}return De(r,Ra(e)),e}function Aa(r){const e=new Fe;return e.bytes(1,r.body),e.bytes(2,r.signature),e.take()}function Ia(r){const e={body:new Uint8Array,signature:new Uint8Array},t=new Ue(r);for(;t.next();)switch(t.field){case 1:e.body=t.bytes();break;case 2:e.signature=t.bytes();break;default:throw new Error("Unknown binary field")}return De(r,Aa(e)),e}const wt=["tournament-summary","mat-board","mat-update","bout-update","bracket-state","bracket-eventlog","bracket-full"],Ca={"tournament-summary":[wa,zc],"mat-board":[Sa,Kc],"mat-update":[hs,ka],"bout-update":[Ea,Qc],"bracket-state":[gi,va],"bracket-eventlog":[xa,Jc],"bracket-full":[Ra,Xc]};function tn(r){return oe(wt.includes(r),"Unknown binary topic"),`OpenMat:v2:${r==="tournament-summary"?"summary":r}`}function oe(r,e){if(!r)throw new Error(e)}function nn(r){const e=new Uint8Array(r.length*4),t=new DataView(e.buffer);for(let i=0;i<r.length;i++){const s=r[i];oe(Number.isInteger(s)&&s>=0&&s<=4294967295,"Invalid eventlog word"),t.setUint32(i*4,s,!0)}return e}function kt(r){oe(r.length%4===0,"Truncated eventlog word");const e=new DataView(r.buffer,r.byteOffset,r.byteLength),t=new Uint32Array(r.length/4);for(let i=0;i<t.length;i++)t[i]=e.getUint32(i*4,!0);return t}function sn(r){if(!r.length)return;const e=kt(r);let t=0;for(const i of e.subarray(1)){const s=i&127,n=i>>>7;oe(s>0&&s<75&&n>=t,"Invalid packed bout log"),t=n}}function Zc(r,e,t){oe(Number.isInteger(r)&&r>=0&&r<=255&&t.length<=255,"Bracket log header overflow");let i=0;for(const o of t)oe(o.length>0,"Missing bout base word"),sn(nn(o)),i+=o.length;oe(i<=65535,"Bracket log offsets exceed uint16");const s=3+Math.ceil((t.length+1)/2),n=new Uint32Array(s+i);n[0]=1296389682,n[1]=(r|t.length<<8|i<<16)>>>0,n[2]=e;let a=0;for(let o=0;o<=t.length;o++)n[3+(o>>>1)]|=a<<o%2*16,o<t.length&&(n.set(Array.from(t[o]),s+a),a+=t[o].length);return n}function Nn(r,e){oe(r.length>=4&&r[0]===1296389682&&(r[1]&255)===e,"Invalid bracket log header");const t=r[1]>>>8&255,i=r[1]>>>16,s=3+Math.ceil((t+1)/2);oe(r.length===s+i,"Truncated bracket log");const n=o=>r[3+(o>>>1)]>>>o%2*16&65535;oe(n(0)===0&&n(t)===i,"Invalid bracket log offsets"),t%2===0&&oe(r[s-1]>>>16===0,"Nonzero offset padding");const a=[];for(let o=0;o<t;o++){const c=n(o),l=n(o+1);oe(c<l&&l<=i,"Invalid bout offset");const h=r.slice(s+c,s+l);sn(nn(h)),a.push(h)}return a}function Ge(r,e,t,i,s,n){oe(r.length>0&&r.length<=150&&t>0,"Missing tournament identity or revision"),oe(!i||r===i,"Wrong tournament"),oe(!s||e===s,"Wrong bracket"),oe(!n||/^[A-Za-z0-9_-]{1,100}$/.test(e),"Invalid bracket id")}function Ks(r){oe(r.mat_id>=1&&r.mat_id<=20&&r.bracket_index<=255&&r.clock_running<=1&&r.period<=9,"Invalid mat update"),sn(r.eventlog_words)}function Qs(r){oe(r.bracket_index<=255&&r.division>=1&&r.division<=4&&r.weight_index<14&&r.format>=1&&r.format<=7&&r.athletes.length<=255&&r.bouts.length<=255,"Invalid bracket state");const e=new Set([0]),t=new Set([0]),i=new Set,s=new Set;let n=0;for(const a of r.athletes)oe(a.slot>n&&a.slot<=255&&a.team_index>0&&a.state>=1&&a.state<=5&&a.athlete_id&&!i.has(a.athlete_id),"Invalid bracket athlete"),n=a.slot,e.add(a.slot),i.add(a.athlete_id);n=0;for(const a of r.bouts)oe(a.local_number>n&&a.local_number<=255&&a.flags<=31&&a.period<=9&&a.mat_id<=20&&a.match_id&&!s.has(a.match_id),"Invalid bracket bout"),n=a.local_number,t.add(a.local_number),s.add(a.match_id),oe([a.red_slot,a.green_slot,a.winner_slot,a.loser_slot].every(o=>e.has(o)),"Unknown athlete slot");for(const a of r.bouts)oe(t.has(a.winner_next)&&t.has(a.loser_next),"Unknown bout edge");for(const a of r.placement_slots)oe(e.has(a),"Unknown placement slot")}function us(r,e,t="",i=""){tn(r);const s=Ca[r][1](e);if(r==="tournament-summary"){const n=s;Ge(n.tournament_id,"",n.revision,t,i,!1),oe(n.mat_count<=20&&n.rules_hash.length===32&&n.authority_public_key.length===32,"Invalid summary");const a=new Set,o=new Set;let c=-1;for(const l of n.teams)oe(l.index>0&&!a.has(l.index),"Duplicate team index"),a.add(l.index);for(const l of n.brackets)Ge(n.tournament_id,l.bracket_id,l.revision,t,"",!0),oe(l.bracket_index<=255&&l.bracket_index>c&&l.division>=1&&l.division<=4&&l.weight_index<14&&l.state_sha256.length===32&&!o.has(l.bracket_id),"Invalid bracket directory"),c=l.bracket_index,o.add(l.bracket_id)}else if(r==="mat-board"){const n=s;Ge(n.tournament_id,"",n.revision,t,i,!1);let a=0;for(const o of n.mats)Ge(o.tournament_id,o.bracket_id,o.revision,n.tournament_id,"",!0),Ks(o),oe(o.mat_id>a&&o.revision<=n.revision,"Invalid mat board order/revision"),a=o.mat_id}else if(r==="mat-update"){const n=s;Ge(n.tournament_id,n.bracket_id,n.revision,t,i,!0),Ks(n)}else if(r==="bout-update"){const n=s;Ge(n.tournament_id,n.bracket_id,n.revision,t,i,!0),oe(n.bracket_index<=255&&n.bout.local_number>0&&n.bout.local_number<=255&&n.bout.flags<=31&&n.bout.period<=9&&n.bout.mat_id<=20&&n.bout.match_id,"Invalid bout update"),sn(n.eventlog_words)}else if(r==="bracket-state"){const n=s;Ge(n.tournament_id,n.bracket_id,n.revision,t,i,!0),Qs(n)}else if(r==="bracket-eventlog"){const n=s;Ge(n.tournament_id,n.bracket_id,n.revision,t,i,!0),Nn(kt(n.eventlog_words),n.bracket_index)}else{const n=s;Ge(n.tournament_id,n.bracket_id,n.revision,t,i,!0),Ge(n.state.tournament_id,n.state.bracket_id,n.state.revision,n.tournament_id,n.bracket_id,!0),oe(n.revision===n.state.revision,"Full packet revision mismatch"),Qs(n.state),oe(Nn(kt(n.eventlog_words),n.state.bracket_index).length===n.state.bouts.length,"Full packet bout count mismatch")}return s}function _s(r,e){const t=Ca[r][0],i=t(e);return us(r,i),i}function el(r,e,t){const i=_s(r,e);return Aa({body:i,signature:Ve(tn(r),i,t)})}function tl(r,e,t,i,s=""){const{body:n,signature:a}=Ia(e);oe(a.length===64&&Pe(tn(r),n,t,a),"Invalid binary signature");const o=us(r,n,i,s);return r==="tournament-summary"&&oe(be(o.authority_public_key,t),"Summary key differs from pinned authority"),o}function il(r,e){if(!wt.includes(r))return r;const t=us(r,Ia(e).body);if(r==="mat-update")return`${r}:${t.mat_id}`;if(r==="bout-update"){const i=t;return`${r}:${i.bracket_id}:${i.bout.local_number}`}return"bracket_id"in t?`${r}:${t.bracket_id}`:r}class Ri{constructor(e,t){this.tournamentId=e,this.publisherHex=t}tournamentId;publisherHex;summary;brackets=new Map;eventlogs=new Map;boutRevisions=new Map;pendingEventlogs=new Map;mats=new Map;receivedAtMs=0;heads=new Map;boutRevision(e,t){return this.boutRevisions.get(`${e.bracket_id}:${t}`)??e.revision}eventlog(e,t){return this.eventlogs.get(e)?.get(t)}setEventlog(e,t,i,s){let n=this.eventlogs.get(e);n||this.eventlogs.set(e,n=new Map),(n.get(t)?.revision??0)<=i&&n.set(t,{revision:i,words:s})}applyBracketEventlogs(e,t){if(e.bracket_index!==t.bracket_index||e.revision!==t.revision)return;const i=Nn(kt(t.eventlog_words),t.bracket_index);if(i.length!==e.bouts.length)throw new Error("Bracket eventlog bout count mismatch");for(const[s,n]of e.bouts.entries())this.setEventlog(e.bracket_id,n.match_id,t.revision,i[s])}apply(e,t){const i=tl(e,t,ae(this.publisherHex),this.tournamentId),s=il(e,t),n=Be(_s(e,i)),a=i.revision,o=this.heads.get(s);if(o&&a<o.revision)return!1;if(o&&a===o.revision){if(!be(n,o.digest))throw new Error("Conflicting signed state at the same revision");return!1}if(e==="tournament-summary"){this.summary=i;for(const[c,l]of this.brackets){const h=this.summary.brackets.find(d=>d.bracket_id===c);if(!h||h.bracket_index!==l.bracket_index){this.brackets.delete(c),this.eventlogs.delete(c),this.pendingEventlogs.delete(c);for(const d of this.boutRevisions.keys())d.startsWith(`${c}:`)&&this.boutRevisions.delete(d)}}}else if(e==="mat-board"){for(const c of i.mats){const l=this.mats.get(c.mat_id);(!l||c.revision>=l.revision)&&this.mats.set(c.mat_id,c)}for(const[c,l]of this.mats)l.revision<=a&&!i.mats.some(h=>h.mat_id===c)&&this.mats.delete(c)}else if(e==="mat-update"){const c=i,l=this.mats.get(c.mat_id);if(l&&l.revision>a||!l&&a<=(this.heads.get("mat-board")?.revision??0))return!1;this.mats.set(c.mat_id,c)}else if(e==="bout-update"){const c=i,l=this.brackets.get(c.bracket_id);if(!l||l.bracket_index!==c.bracket_index)throw new Error("Full bracket required before bout delta");if(a<l.revision)return!1;const h=l.bouts.find(u=>u.local_number===c.bout.local_number);if(!h||h.match_id!==c.bout.match_id)throw new Error("Bracket dictionary changed; full bracket required");const d=new Set([0,...l.athletes.map(u=>u.slot)]);if(![c.bout.red_slot,c.bout.green_slot,c.bout.winner_slot,c.bout.loser_slot].every(u=>d.has(u)))throw new Error("Unknown athlete slot in delta");this.brackets.set(c.bracket_id,{...l,bouts:l.bouts.map(u=>u.local_number===c.bout.local_number?c.bout:u)}),this.boutRevisions.set(`${c.bracket_id}:${c.bout.local_number}`,a),this.setEventlog(c.bracket_id,c.bout.match_id,a,kt(c.eventlog_words))}else if(e==="bracket-eventlog"){const c=i,l=this.brackets.get(c.bracket_id);if((l?.revision??0)>a)return!1;l?.revision===a?this.applyBracketEventlogs(l,c):this.pendingEventlogs.set(c.bracket_id,c)}else{const c=e==="bracket-full"?i.state:i;if((this.brackets.get(c.bracket_id)?.revision??0)>a)return!1;const l=this.summary?.brackets.find(m=>m.bracket_id===c.bracket_id);if(l&&(l.bracket_index!==c.bracket_index||l.revision===a&&!be(l.state_sha256,Be(gi(c)))))throw new Error("Bracket directory hash/identity mismatch");const h=this.brackets.get(c.bracket_id),d=c.bouts.map(m=>{const p=h?.bracket_index===c.bracket_index?h.bouts.find(f=>f.local_number===m.local_number&&f.match_id===m.match_id):void 0;if(!p||!be(_i(p),_i(m))){const f=`${c.bracket_id}:${m.local_number}`;this.boutRevisions.set(f,Math.max(a,this.boutRevisions.get(f)??0))}const _=this.heads.get(`bout-update:${c.bracket_id}:${m.local_number}`);return _&&_.revision>a&&h?.bracket_index===c.bracket_index?h.bouts.find(f=>f.local_number===m.local_number&&f.match_id===m.match_id)??m:m}),u=this.pendingEventlogs.get(c.bracket_id);u&&u.revision<=a&&(this.applyBracketEventlogs(c,u),this.pendingEventlogs.delete(c.bracket_id)),e==="bracket-full"&&this.applyBracketEventlogs(c,{...c,eventlog_words:i.eventlog_words}),this.brackets.set(c.bracket_id,{...c,bouts:d})}return this.heads.set(s,{revision:a,digest:n}),this.receivedAtMs=Date.now(),!0}}const nl=["EVENT_NONE","EVENT_BOUT_ASSIGN","EVENT_DISK_TOSS_RED","EVENT_DISK_TOSS_GREEN","EVENT_CLOCK_START","EVENT_CLOCK_STOP","EVENT_ADVANCE_PERIOD","EVENT_RED_CHOICE_TOP","EVENT_RED_CHOICE_BOTTOM","EVENT_RED_CHOICE_NEUTRAL","EVENT_RED_CHOICE_DEFER","EVENT_GREEN_CHOICE_TOP","EVENT_GREEN_CHOICE_BOTTOM","EVENT_GREEN_CHOICE_NEUTRAL","EVENT_GREEN_CHOICE_DEFER","EVENT_RED_TAKEDOWN_3","EVENT_RED_ESCAPE_1","EVENT_RED_REVERSAL_2","EVENT_RED_NF_2","EVENT_RED_NF_3","EVENT_RED_NF_4","EVENT_RED_NF_INJ4","EVENT_RED_CAUTION","EVENT_RED_STALLING","EVENT_RED_TECH_VIOLATION","EVENT_RED_ILLEGAL_HOLD","EVENT_RED_ROUGHNESS","EVENT_RED_UNSPORTSMANLIKE","EVENT_RED_COACH_UNSPORTSMANLIKE","EVENT_RED_FLAGRANT","EVENT_GREEN_TAKEDOWN_3","EVENT_GREEN_ESCAPE_1","EVENT_GREEN_REVERSAL_2","EVENT_GREEN_NF_2","EVENT_GREEN_NF_3","EVENT_GREEN_NF_4","EVENT_GREEN_NF_INJ4","EVENT_GREEN_CAUTION","EVENT_GREEN_STALLING","EVENT_GREEN_TECH_VIOLATION","EVENT_GREEN_ILLEGAL_HOLD","EVENT_GREEN_ROUGHNESS","EVENT_GREEN_UNSPORTSMANLIKE","EVENT_GREEN_COACH_UNSPORTSMANLIKE","EVENT_GREEN_FLAGRANT","EVENT_NEAR_FALL_BEGIN","EVENT_NEAR_FALL_END","EVENT_AUX_START_INJURY_RED","EVENT_AUX_START_INJURY_GREEN","EVENT_AUX_START_BLOOD_RED","EVENT_AUX_START_BLOOD_GREEN","EVENT_AUX_START_RECOVERY_RED","EVENT_AUX_START_RECOVERY_GREEN","EVENT_AUX_START_HNC_RED","EVENT_AUX_START_HNC_GREEN","EVENT_AUX_STOP_INJURY_RED","EVENT_AUX_STOP_INJURY_GREEN","EVENT_AUX_STOP_BLOOD_RED","EVENT_AUX_STOP_BLOOD_GREEN","EVENT_AUX_STOP_RECOVERY_RED","EVENT_AUX_STOP_RECOVERY_GREEN","EVENT_AUX_STOP_HNC_RED","EVENT_AUX_STOP_HNC_GREEN","EVENT_RED_FALL","EVENT_GREEN_FALL","EVENT_RED_INJURY_DEFAULT","EVENT_GREEN_INJURY_DEFAULT","EVENT_RED_FORFEIT","EVENT_GREEN_FORFEIT","EVENT_RED_MED_FORFEIT","EVENT_GREEN_MED_FORFEIT","EVENT_SIMULTANEOUS_PENALTY","EVENT_UNDO","EVENT_CONFIRM_RESULT","EVENT_CONFIRM_PROTEST"],Ma=[null,{kind:0,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:1,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:1,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:6,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:7,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:9,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:0,scoring:1,choice:1,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:0,scoring:1,choice:2,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:0,scoring:1,choice:4,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:1,scoring:1,choice:1,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:1,scoring:1,choice:2,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:1,scoring:1,choice:4,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:2,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:3,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:4,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:5,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:6,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:7,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:8,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:9,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:10,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:11,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:12,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:13,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:14,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:15,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:2,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:3,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:4,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:5,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:6,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:7,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:8,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:9,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:10,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:11,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:12,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:13,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:14,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:15,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:4,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:5,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:15,corner:0,scoring:1,choice:3,timer:1,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Injury"},{kind:15,corner:0,scoring:1,choice:3,timer:2,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Injury"},{kind:15,corner:0,scoring:1,choice:3,timer:3,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Blood"},{kind:15,corner:0,scoring:1,choice:3,timer:4,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Blood"},{kind:15,corner:0,scoring:1,choice:3,timer:5,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!0,reason:"Recovery"},{kind:15,corner:0,scoring:1,choice:3,timer:6,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!0,reason:"Recovery"},{kind:15,corner:0,scoring:1,choice:3,timer:7,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!0,infraction_caused:!1,reason:"HNC"},{kind:15,corner:0,scoring:1,choice:3,timer:8,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!0,infraction_caused:!1,reason:"HNC"},{kind:16,corner:0,scoring:1,choice:3,timer:1,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:2,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:3,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:4,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:5,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:6,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:7,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:8,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:10,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:2500,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:10,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:2500,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:11,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:11,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:12,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:12,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:13,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:13,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:20,corner:0,scoring:11,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:14,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Undo"},{kind:17,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Confirmed"},{kind:17,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!0,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Protest"}],sl=33554431;function rl(r){return Array.from(r.subarray(1),e=>{const t=nl[e&127];if(!t||t==="EVENT_NONE")throw new Error("Unknown packed mat event");return{elapsedMs:(e>>>7)*100,event:t}})}function Js(r){const e=r.kind===1?["corner"]:r.kind===2?["corner","scoring"]:r.kind===3?["corner","choice"]:[10,11,12,13].includes(Number(r.kind))?["corner"]:[15,16,19].includes(Number(r.kind))?["timer"]:r.kind===17?["under_protest"]:[];return JSON.stringify([r.kind===19?16:r.kind,...e.map(t=>r[t])])}function mn(r,e){if(!Number.isInteger(e)||e<0||e>sl||r.occurred_monotonic_ns!=null||[16,19].includes(Number(r.kind))&&!r.can_continue||r.kind===20&&r.scoring!==11||r.kind===10&&Number(r.pin_observed_ms)<2e3||r.kind===15&&([5,6].includes(Number(r.timer))&&!r.infraction_caused||[7,8].includes(Number(r.timer))&&!r.healthcare_present))throw new Error("Command requires the signed journal");const t=Js(r),i=Ma.findIndex(s=>s&&Js(s)===t);if(i<1)throw new Error("Unsupported atomic command");return e*128+i>>>0}const al="modulepreload",ol=function(r,e){return new URL(r,e).href},Xs={},cl=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let l=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(t.map(h=>{if(h=ol(h,i),h in Xs)return;Xs[h]=!0;const d=h.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(i)for(let p=a.length-1;p>=0;p--){const _=a[p];if(_.href===h&&(!d||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":al,d||(m.as="script"),m.crossOrigin="",m.href=h,c&&m.setAttribute("nonce",c),document.head.appendChild(m),d)return new Promise((p,_)=>{m.addEventListener("load",p),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function n(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&n(o.reason);return e().catch(n)})},Ai=10,Ii=6,mi=16384,pn=mi-256,ct=20,Zs=4,er=12,Pn=11,_t="control:officials",Ta="om-sig",Ba="om-rpc",ll=5e3,dl=6e3,at={AuthoritySource:1,SuperSeedRelay:2,PromotedRelay:3,LeafSpectator:4};function fn(r){return r===at.AuthoritySource||r===at.SuperSeedRelay||r===at.PromotedRelay}function tr(r){const e=[];for(const t of r)t&&(e.includes(t)||e.push(t));return e}function hl(r,e){return r.some(t=>t===e||t==="*")}class ms{topologyRevision=1;peersMap=new Map;registerSuperSeed(e,t=5e4){if(!e)return;const i={peer_id:e,role:at.SuperSeedRelay,capabilities:{plugged_into_power:!0,battery_percent:100,page_foreground_visible:!0,stable_uptime_ms:6e4,uplink_kbps:t,rtt_ms:1,packet_loss_bps:0,nat_accepts_inbound:!0},primary_parent_id:"",backup_parent_id:"",children_ids:[],ancestry_path:[],subscribed_topics:["*"],topology_revision:++this.topologyRevision,hop_depth:1,online:!0};this.peersMap.set(e,i);for(const[s,n]of this.peersMap.entries())if(!(!n.online||!n.primary_parent_id)&&!n.backup_parent_id){const a=this.selectBestParent(s,n.primary_parent_id);a&&(n.backup_parent_id=a)}}static qualifiesForRelayPromotion(e){return(e.plugged_into_power||e.battery_percent>=50)&&e.page_foreground_visible&&e.stable_uptime_ms>=3e4&&e.uplink_kbps>=1500&&e.rtt_ms<=80&&e.packet_loss_bps<=200&&e.nat_accepts_inbound}joinPeer(e,t,i,s=""){if(!e)throw new N(B.InvalidArgument,"peer_id must not be empty");const n=this.peersMap.get(e);if(n&&n.online)throw new N(B.InvalidArgument,`peer_id ${e} is already online in overlay tree`);let a=null;if(s){const h=this.peersMap.get(s);h&&h.online&&fn(h.role)&&h.children_ids.length<Ai&&h.hop_depth>0&&h.hop_depth+1<=Ii&&!h.ancestry_path.includes(e)&&(a=s)}if(a||(a=this.selectBestParent(e,"")),!a)throw new N(B.BoundsExceeded,"No eligible parent relay with available capacity and hop budget");const o=this.selectBestParent(e,a)??"",c=this.peersMap.get(a),l={peer_id:e,role:at.LeafSpectator,capabilities:{...t},primary_parent_id:a,backup_parent_id:o,children_ids:[],ancestry_path:[...c.ancestry_path,c.peer_id],subscribed_topics:tr(i),topology_revision:++this.topologyRevision,hop_depth:c.hop_depth+1,online:!0};return c.children_ids.includes(e)||c.children_ids.push(e),c.topology_revision=this.topologyRevision,this.peersMap.set(e,l),{...l,children_ids:[...l.children_ids],ancestry_path:[...l.ancestry_path]}}promoteIfQualified(e){const t=this.peersMap.get(e);if(!t||!t.online)throw new N(B.InvalidArgument,`Peer ${e} not found or offline`);if(fn(t.role))return!0;if(t.hop_depth>=Ii||!ms.qualifiesForRelayPromotion(t.capabilities))return!1;t.role=at.PromotedRelay,t.topology_revision=++this.topologyRevision;for(const[i,s]of this.peersMap.entries())if(!(!s.online||!s.primary_parent_id)&&!s.backup_parent_id){const n=this.selectBestParent(i,s.primary_parent_id);n&&(s.backup_parent_id=n)}return!0}updateTopicSubscriptions(e,t){const i=this.peersMap.get(e);if(!i||!i.online)throw new N(B.InvalidArgument,`Peer ${e} not found or offline`);return i.subscribed_topics=tr(t),!0}departPeerGracefully(e,t){const i=this.peersMap.get(e);if(!i||!i.online)return[];if(i.online=!1,i.topology_revision=++this.topologyRevision,i.primary_parent_id){const a=this.peersMap.get(i.primary_parent_id);a&&(a.children_ids=a.children_ids.filter(o=>o!==e))}i.primary_parent_id="",i.backup_parent_id="";const s=[...i.children_ids];if(i.children_ids=[],i.role===at.LeafSpectator&&s.length===0)return[];const n=[];for(const a of s){const o=this.reparentOrphanedChild(a,e,t,0,!0);o&&n.push(o)}return this.refreshBackupParentsAfterDeparture(),n}handleAbruptParentDrop(e,t,i=42){const s=this.peersMap.get(e);if(!s||!s.online)return[];if(s.online=!1,s.topology_revision=++this.topologyRevision,s.primary_parent_id){const o=this.peersMap.get(s.primary_parent_id);o&&(o.children_ids=o.children_ids.filter(c=>c!==e))}s.primary_parent_id="",s.backup_parent_id="";const n=[...s.children_ids];if(s.children_ids=[],s.role===at.LeafSpectator&&n.length===0)return[];const a=[];for(const o of n){let c=BigInt(i)^0x9e3779b97f4a7c15n;for(let d=0;d<o.length;d++)c^=BigInt(o.charCodeAt(d)),c=c*1099511628211n&0xffffffffffffffffn;const l=10+Number(c%231n),h=this.reparentOrphanedChild(o,e,t,l,!1);h&&a.push(h)}return this.refreshBackupParentsAfterDeparture(),a}computeTopicFanoutRecipients(e,t){if(!t)throw new N(B.InvalidArgument,"topic must not be empty");const i=this.peersMap.get(e);if(!i||!i.online)throw new N(B.InvalidArgument,`Sender peer ${e} not found or offline`);const s=[];for(const n of i.children_ids){if(s.length>=Ai)break;const a=new Set([e]);this.subtreeSubscribesToTopic(n,t,a)&&s.push(n)}return s}verifyLoopFreeInvariants(){for(const[e,t]of this.peersMap.entries()){if(t.children_ids.length>Ai)return!1;if(!t.online)continue;if(t.hop_depth===0||t.hop_depth>Ii)return!1;const i=new Set;for(const o of t.ancestry_path){if(o===e||i.has(o))return!1;i.add(o)}const s=[],n=new Set([e]);let a=t.primary_parent_id;for(;a;){if(n.has(a))return!1;n.add(a);const o=this.peersMap.get(a);if(!o||!o.online)return!1;s.push(a),a=o.primary_parent_id}if(s.reverse(),s.length!==t.ancestry_path.length)return!1;for(let o=0;o<s.length;o++)if(s[o]!==t.ancestry_path[o])return!1;if(t.hop_depth!==s.length+1)return!1}return!0}peers(){return this.peersMap}reparentOrphanedChild(e,t,i,s,n){const a=this.peersMap.get(e);if(!a||!a.online)return null;let o="",c=!1;const l=this.selectBestParent(e,t);if(l&&(o=l,c=!!(a.backup_parent_id&&o===a.backup_parent_id)),!o){const d=[e];for(;d.length>0;){const u=d.pop(),m=this.peersMap.get(u);m&&(d.push(...m.children_ids),m.online=!1,m.primary_parent_id="",m.backup_parent_id="",m.ancestry_path=[],m.children_ids=[],m.hop_depth=0,m.topology_revision=++this.topologyRevision)}return null}const h=this.peersMap.get(o);return h.children_ids.includes(e)||h.children_ids.push(e),a.primary_parent_id=o,this.recomputeSubtreeAncestry(e,++this.topologyRevision,new Set),h.topology_revision=this.topologyRevision,a.backup_parent_id=this.selectBestParent(e,o)??"",{child_peer_id:e,old_parent_id:t,new_parent_id:o,resume_from_sequence:i,reconnect_jitter_ms:n?0:s,promoted_backup:c}}refreshBackupParentsAfterDeparture(){for(const[e,t]of this.peersMap.entries())!t.online||!t.primary_parent_id||(t.backup_parent_id=this.selectBestParent(e,t.primary_parent_id)??"")}selectBestParent(e,t){const i=this.maxRelativeSubtreeDepth(e,new Set);let s=null;for(const[n,a]of this.peersMap.entries()){if(!a.online||n===e||n===t||!fn(a.role)||a.children_ids.length>=Ai||a.hop_depth===0||a.hop_depth+1+i>Ii)continue;let o=!0;for(const c of a.ancestry_path){if(c===e||c===t){o=!1;break}const l=this.peersMap.get(c);if(!l||!l.online){o=!1;break}}if(o){if(!s){s=a;continue}(a.hop_depth<s.hop_depth||a.hop_depth===s.hop_depth&&a.capabilities.rtt_ms<s.capabilities.rtt_ms||a.hop_depth===s.hop_depth&&a.capabilities.rtt_ms===s.capabilities.rtt_ms&&a.children_ids.length<s.children_ids.length||a.hop_depth===s.hop_depth&&a.capabilities.rtt_ms===s.capabilities.rtt_ms&&a.children_ids.length===s.children_ids.length&&a.peer_id<s.peer_id)&&(s=a)}}return s?s.peer_id:null}maxRelativeSubtreeDepth(e,t){const i=this.peersMap.get(e);if(!i||!i.online||t.has(e))return 0;t.add(e);let s=0;for(const n of i.children_ids){const a=this.peersMap.get(n);if(a&&a.online){const o=1+this.maxRelativeSubtreeDepth(n,t);o>s&&(s=o)}}return s}recomputeSubtreeAncestry(e,t,i){const s=this.peersMap.get(e);if(!(!s||!s.online||i.has(e))){if(i.add(e),s.primary_parent_id){const n=this.peersMap.get(s.primary_parent_id);n&&n.online&&(s.ancestry_path=[...n.ancestry_path,n.peer_id],s.hop_depth=n.hop_depth+1)}s.topology_revision=t;for(const n of s.children_ids)this.recomputeSubtreeAncestry(n,t,i)}}subtreeSubscribesToTopic(e,t,i){const s=this.peersMap.get(e);if(!s||!s.online||i.has(e))return!1;if(i.add(e),hl(s.subscribed_topics,t))return!0;for(const n of s.children_ids)if(this.subtreeSubscribesToTopic(n,t,i))return!0;return!1}}const Te={OfficialEventsOrderedReliable:1,CurrentStateUnorderedNewest:2,BulkChunksBackground:3};class ul{nextMessageId=1;highWatermarkBytes;queuedLiveBytesCount=0;bulkPaused=!1;officialQueue=[];currentStateQueue=[];bulkQueue=[];reassembly=new Map;constructor(e=65536){this.highWatermarkBytes=e}enqueueMessage(e,t,i,s=t){if(!t)throw new N(B.InvalidArgument,"topic must not be empty");const n=i.byteLength===0?1:Math.ceil(i.byteLength/pn);if(n>65535)throw new N(B.BoundsExceeded,"Message exceeds maximum fragment count (65535)");const a=n,o=this.nextMessageId++,c=[];for(let l=0;l<a;l++){const h=l*pn,d=i.byteLength===0?0:Math.min(pn,i.byteLength-h);c.push({channel:e,message_id:o,fragment_index:l,fragment_count:a,topic:t,stateScope:s,payload:d>0?i.slice(h,h+d):new Uint8Array(0)})}if(e===Te.OfficialEventsOrderedReliable)this.officialQueue.push(...c);else if(e===Te.CurrentStateUnorderedNewest){const l=this.currentStateQueue.find(d=>(d.stateScope??d.topic)===s),h=l&&l.fragment_index>0?l.message_id:void 0;this.currentStateQueue=this.currentStateQueue.filter(d=>(d.stateScope??d.topic)!==s||h!==void 0&&d.message_id===h),this.currentStateQueue.push(...c)}else this.bulkQueue.push(...c);return this.recomputeLiveWatermark(),c}drainNextFrames(e){const t=[];if(e<=0)return t;let i=0;const s=(n,a)=>{let o=0;for(let c=0;c<n.length;c++){const l=n[c],h=l.payload.byteLength;if(i+h>e)break;i+=h,a&&(this.queuedLiveBytesCount=Math.max(0,this.queuedLiveBytesCount-h)),t.push(l),o++}o>0&&n.splice(0,o)};return s(this.officialQueue,!0),this.officialQueue.length===0&&s(this.currentStateQueue,!0),this.bulkPaused=this.queuedLiveBytesCount>this.highWatermarkBytes,!this.bulkPaused&&this.officialQueue.length===0&&this.currentStateQueue.length===0&&s(this.bulkQueue,!1),t}reassembleFrame(e){if(![e.message_id,e.fragment_index,e.fragment_count].every(Number.isSafeInteger)||e.message_id<1||e.fragment_index<0||e.fragment_count<1||e.fragment_count>261||e.fragment_index>=e.fragment_count)throw new N(B.InvalidArgument,"Invalid fragment_index or fragment_count");if(e.payload.byteLength>mi)throw new N(B.BoundsExceeded,"WireFrame payload exceeds MAX_FRAME_BYTES (16 KiB)");if(e.fragment_count===1)return new Uint8Array(e.payload);for(const[a,o]of this.reassembly)Date.now()-o.createdAt>1e4&&this.reassembly.delete(a);let t=this.reassembly.get(e.message_id);if(t){if(t.totalFragments!==e.fragment_count||t.topic!==e.topic||t.channel!==e.channel)throw new N(B.InvalidArgument,"Mismatched fragment_count for message_id")}else{if(e.channel===Te.CurrentStateUnorderedNewest)for(const[a,o]of this.reassembly)o.channel===Te.CurrentStateUnorderedNewest&&o.topic===e.topic&&a<e.message_id&&this.reassembly.delete(a);if(this.reassembly.size>=32){const a=this.reassembly.keys().next().value;a!==void 0&&this.reassembly.delete(a)}t={totalFragments:e.fragment_count,topic:e.topic,channel:e.channel,createdAt:Date.now(),parts:new Map},this.reassembly.set(e.message_id,t)}if(t.parts.set(e.fragment_index,new Uint8Array(e.payload)),t.parts.size<t.totalFragments)return null;let i=0;for(let a=0;a<t.totalFragments;a++){const o=t.parts.get(a);if(!o)return null;i+=o.byteLength}const s=new Uint8Array(i);let n=0;for(let a=0;a<t.totalFragments;a++){const o=t.parts.get(a);s.set(o,n),n+=o.byteLength}return this.reassembly.delete(e.message_id),s}bulkChannelPaused(){return this.bulkPaused}queuedPayloadBytes(){return[...this.officialQueue,...this.currentStateQueue,...this.bulkQueue].reduce((e,t)=>e+t.payload.length,0)}queuedLiveBytes(){return this.queuedLiveBytesCount}recomputeLiveWatermark(){let e=0;for(const t of this.officialQueue)e+=t.payload.byteLength;for(const t of this.currentStateQueue)e+=t.payload.byteLength;this.queuedLiveBytesCount=e,this.bulkPaused=this.queuedLiveBytesCount>this.highWatermarkBytes}}class _l{manifest=null;bitmap=[];chunks=[];acceptSignedManifest(e,t){if(this.manifest&&e.snapshot_epoch<this.manifest.snapshot_epoch)throw new N(B.EpochFencedOldEvent,"Snapshot manifest epoch rollback rejected");Lc(e,t);for(let i=0;i<e.chunks.length;i++)if(e.chunks[i].chunk_index!==i)throw new N(B.InvalidArgument,"Snapshot manifest chunk indices not contiguous");return this.manifest=e,this.bitmap=new Array(e.chunks.length).fill(!1),this.chunks=new Array(e.chunks.length).fill(new Uint8Array(0)),!0}ingestChunk(e,t){if(!this.manifest)throw new N(B.InvalidArgument,"Cannot ingest chunk before accepting manifest");if(e<0||e>=this.manifest.chunks.length)throw new N(B.BoundsExceeded,"chunk_index out of bounds");const i=this.manifest.chunks[e],s=Be(t);if(!be(s,i.sha256_hash))throw new N(B.HashChainMismatch,`Chunk #${e} SHA-256 mismatch against manifest`);if(i.byte_length!==0&&t.byteLength!==i.byte_length)throw new N(B.HashChainMismatch,`Chunk #${e} byte_length mismatch against manifest`);return this.chunks[e]=new Uint8Array(t),this.bitmap[e]=!0,!0}missingChunks(){const e=[];for(let t=0;t<this.bitmap.length;t++)this.bitmap[t]||e.push(t);return e}availabilityBitmap(){return this.bitmap}isComplete(){return this.manifest?this.bitmap.every(Boolean):!1}assembleVerifiedSnapshot(){if(!this.manifest||!this.isComplete())throw new N(B.SequenceGap,"Cannot assemble snapshot while chunks are missing");let e=0;for(const n of this.chunks)e+=n.byteLength;const t=new Uint8Array(e);let i=0;for(const n of this.chunks)t.set(n,i),i+=n.byteLength;if(this.manifest.total_bytes!==0&&t.byteLength!==this.manifest.total_bytes)throw new N(B.HashChainMismatch,"Assembled snapshot total_bytes mismatch");const s=Be(t);if(!be(s,this.manifest.full_file_sha256))throw new N(B.HashChainMismatch,"Assembled snapshot full-file SHA-256 mismatch");return t}}class ml{streams=new Map;recordVerifiedSourceHeartbeat(e,t,i,s=i){const n=this.streams.get(e.stream_id),a=n?.lastHeartbeatCounter??0;Fc(e,t,a),this.streams.set(e.stream_id,{lastConfirmedSequence:Math.max(n?.lastConfirmedSequence??0,e.head_sequence),lastHeartbeatCounter:e.heartbeat_counter,lastSourceEvidenceMonotonicMs:i,lastConfirmedWallMs:s})}recordVerifiedSourceEvent(e,t,i=e.audit_time_ms||t){const s=this.streams.get(e.stream_id);s&&e.sequence<=s.lastConfirmedSequence||this.streams.set(e.stream_id,{lastConfirmedSequence:e.sequence,lastHeartbeatCounter:s?.lastHeartbeatCounter??0,lastSourceEvidenceMonotonicMs:t,lastConfirmedWallMs:i})}recordRelayKeepaliveOnly(e,t){}evaluateStreamFreshness(e,t){const i=this.streams.get(e);if(!i)return{streamId:e,lastConfirmedSequence:0,lastHeartbeatCounter:0,lastSourceEvidenceMonotonicMs:0,lastConfirmedWallTimestampIso:"NEVER",ageMs:Number.POSITIVE_INFINITY,liveBadgeActive:!1,isStaleFeed:!0,suppressClockExtrapolation:!0,staleBannerText:"STALE FEED — LAST CONFIRMED AT NEVER (SEQ #0)"};const s=Math.max(0,t-i.lastSourceEvidenceMonotonicMs),n=s<=ll,a=s>=dl,o=new Date(i.lastConfirmedWallMs).toISOString();return{streamId:e,lastConfirmedSequence:i.lastConfirmedSequence,lastHeartbeatCounter:i.lastHeartbeatCounter,lastSourceEvidenceMonotonicMs:i.lastSourceEvidenceMonotonicMs,lastConfirmedWallTimestampIso:o,ageMs:s,liveBadgeActive:n,isStaleFeed:a,suppressClockExtrapolation:a||!n,staleBannerText:a?`STALE FEED — LAST CONFIRMED AT ${o} (SEQ #${i.lastConfirmedSequence})`:""}}computeDisplayedClockMs(e,t,i,s,n){const a=this.evaluateStreamFreshness(e,n);if(!s||a.suppressClockExtrapolation)return{displayedRemainingMs:Math.max(0,t),extrapolated:!1,isStale:a.isStaleFeed};const o=Math.max(0,n-i);return{displayedRemainingMs:Math.max(0,t-o),extrapolated:!0,isStale:!1}}}class ti{connectedSamples=[];catchupSamples=[];bracketSamples=[];disconnectedPeers=0;relayFailovers=0;rejectedSignatures=0;recordConnectedPropagationMs(e){this.connectedSamples.push(e)}recordReconnectingCatchupMs(e){this.catchupSamples.push(e)}recordBracketAcceptToRenderMs(e){this.bracketSamples.push(e)}recordDisconnectedPeer(){this.disconnectedPeers++}recordRelayFailover(){this.relayFailovers++}recordRejectedSignature(){this.rejectedSignatures++}snapshot(){return{connected_spectator_propagation:ti.computePercentiles(this.connectedSamples),reconnecting_catchup_cohort:ti.computePercentiles(this.catchupSamples),bracket_accept_to_render:ti.computePercentiles(this.bracketSamples),disconnected_peer_count:this.disconnectedPeers,relay_failover_count:this.relayFailovers,rejected_signature_count:this.rejectedSignatures}}static computePercentiles(e){if(e.length===0)return{sample_count:0,p50_ms:0,p95_ms:0,p99_ms:0,max_ms:0};const t=[...e].sort((n,a)=>n-a),i=t.length,s=n=>{const a=Math.floor((i*n+99)/100),o=a===0?0:Math.min(i-1,a-1);return t[o]};return{sample_count:i,p50_ms:s(50),p95_ms:s(95),p99_ms:s(99),max_ms:t[i-1]}}}const ii={DirectorPrimary:1,DirectorStandby:2,BoutDispatchClerk:3},ot={MatPrimaryScorekeeper:1,MatBackupDisplay:2,HeadTablePrimary:3,HeadTableStandby:4};class Ke{configuredMats;controlOfficialsPeers=new Map;matRooms=new Map;subtreeRooms=new Map;subtreePingRttMs=new Map;primaryDirectorId="";standbyDirectorId="";activeDirectorId="";constructor(e=ct){this.configuredMats=Math.max(1,Math.min(ct,e))}clearMembership(){this.controlOfficialsPeers.clear(),this.matRooms.clear(),this.subtreeRooms.clear(),this.subtreePingRttMs.clear(),this.primaryDirectorId="",this.standbyDirectorId="",this.activeDirectorId=""}static matRoomId(e){return`mat:${e}`}static subtreeRoomId(e){return`subtree:${e}`}static bracketSubtreeRoomId(e){if(!/^[A-Za-z0-9_-]{1,100}$/.test(e))throw new Error("Invalid bracket id");return`subtree:b:${e}`}joinControlOfficialsRoom(e,t){if(!e)throw new N(B.InvalidArgument,"peer_id must not be empty");if(!this.controlOfficialsPeers.has(e)&&this.controlOfficialsPeers.size>=er)throw new N(B.BoundsExceeded,`control:officials room bounded to ${er} official consoles`);return this.controlOfficialsPeers.set(e,t),t===ii.DirectorPrimary?(this.primaryDirectorId=e,this.activeDirectorId||(this.activeDirectorId=e)):t===ii.DirectorStandby&&(this.standbyDirectorId=e,this.activeDirectorId||(this.activeDirectorId=e)),!0}joinMatRoom(e,t,i){if(e<1||e>this.configuredMats||e>ct)throw new N(B.BoundsExceeded,`mat_id must be within 1..${this.configuredMats}`);if(!t)throw new N(B.InvalidArgument,"peer_id must not be empty");if(i===ot.MatPrimaryScorekeeper||i===ot.MatBackupDisplay){if(this.controlOfficialsPeers.has(t))throw new N(B.UnauthorizedScope,"Matside scorekeeper/display cannot join control:officials room");for(const[n,a]of this.matRooms.entries())if(n!==e&&a.has(t))throw new N(B.UnauthorizedScope,"Matside device cannot join multiple mat rooms")}let s=this.matRooms.get(e);if(s||(s=new Map,this.matRooms.set(e,s)),!s.has(t)&&s.size>=Zs)throw new N(B.BoundsExceeded,`mat:${e} room bounded to ${Zs} peers (Primary, Backup/Display, Head Table Primary, Head Table Standby)`);return s.set(t,i),!0}joinSubtreeRoom(e,t,i=1){if(!e||!t)throw new N(B.InvalidArgument,"parent_id and peer_id must not be empty");const s=Ke.subtreeRoomId(e);let n=this.subtreeRooms.get(s);if(n||(n=[e],this.subtreeRooms.set(s,n)),n.includes(t))return this.subtreePingRttMs.set(t,i),!0;if(n.length>=Pn)throw new N(B.BoundsExceeded,`${s} room bounded to ${Pn} peers (1 parent + 10 children)`);return n.push(t),this.subtreePingRttMs.set(t,i),!0}validateRoomDomainTraffic(e,t){if(e===_t)return!0;if(t===ke)throw new N(B.PrivacyViolation,"OpenMat:control:v1 traffic is restricted to control:officials room");if(e.startsWith("mat:")){if(t===Ut||t===js||t===Mn||t===en)return!0;throw new N(B.UnauthorizedScope,`Unsupported domain prefix ${t} on ${e}`)}if(e.startsWith("subtree:")){if(wt.some(i=>tn(i)===t)||t===Ut||t===js||t===Mn||t===ca)return!0;throw new N(B.UnauthorizedScope,`Unsupported domain prefix ${t} on ${e}`)}throw new N(B.InvalidArgument,`Unknown room_id prefix: ${e}`)}activateStandbyHeadTableFailover(){if(!this.standbyDirectorId)throw new N(B.InvalidArgument,"No standby head-table director registered in control:officials");return this.activeDirectorId=this.standbyDirectorId,this.activeDirectorId}getMatRoomPeerIds(e){const t=this.matRooms.get(e);return t?Array.from(t.keys()):[]}getSubtreeRoomPeerIds(e){const t=Ke.subtreeRoomId(e);return[...this.subtreeRooms.get(t)??[]]}computeAccountingSummary(){const e=this.controlOfficialsPeers.size,t=e>1?e*(e-1):0,i=e>1?e-1:0;let s=0,n=0,a=0,o=0,c=0;for(const p of this.matRooms.values()){const _=p.size;s+=_,_>1&&(n+=_*(_-1),o=Math.max(o,_-1));let f=0,g=!1;for(const w of p.values())w===ot.MatPrimaryScorekeeper||w===ot.MatBackupDisplay?(a++,f++):w===ot.HeadTablePrimary&&(g=!0);g&&(c+=f)}const l=t+n,h=e+a,d=h>1?h*(h-1):0,u=d>l&&d>0?Math.floor((d-l)*100/d):0,m=new Set;for(const p of this.subtreeRooms.values())for(const _ of p)m.add(_);return{configured_mats:this.configuredMats,control_officials_peers:e,total_mat_room_peers:s,total_subtree_rooms:this.subtreeRooms.size,total_subtree_peers:m.size,connections_per_mat_scorekeeper:o,connections_per_official_tablet:i,connections_on_head_table_hub:i+c,total_officiating_connections:l,flat_room_baseline_connections:d,connection_reduction_percent:u,active_head_table_leader_id:this.activeDirectorId,trystero_actions:{signaling:Ta,rpc:Ba},multiplexer_channels:["official-events","current-state","bulk-chunks"]}}}class Na{liveRooms=new Map;async joinLiveRoom(e){this.liveRooms.get(e.roomId)?.stop();const{LiveVenueRoom:t}=await cl(async()=>{const{LiveVenueRoom:s}=await import("./live-venue-transport-Bw2HGwPa.js");return{LiveVenueRoom:s}},[],import.meta.url),i=new t(e);return this.liveRooms.set(e.roomId,i),await i.start(),i}stopLiveRooms(){for(const e of this.liveRooms.values())e.stop();this.liveRooms.clear()}peerId;tree;roomRouter;multiplexer;chunkSwarm;freshness;observability;constructor(e){this.peerId=e.peerId,this.tree=e.tree??new ms,this.roomRouter=e.roomRouter??new Ke(e.configuredMats??ct),this.multiplexer=new ul(e.highWatermarkBytes??65536),this.chunkSwarm=new _l,this.freshness=new ml,this.observability=new ti}}const Pa=4194304,Wd=[{label:"official-events",id:10,ordered:!0},{label:"current-state",id:11,ordered:!1,maxRetransmits:0},{label:"bulk-chunks",id:12,ordered:!0}];function Bt(r){const e=Me(r,{maxBytes:Pa});if(!e||typeof e!="object"||Array.isArray(e)||e instanceof Uint8Array||e instanceof Map)throw new Error("Expected CBOR map");return e}function st(r){return xe(r,{maxBytes:Pa})}function Vd(r){const e=st({c:r.channel,id:r.message_id,fi:r.fragment_index,fc:r.fragment_count,t:r.topic,p:r.payload});if(e.length>mi)throw new Error("Encoded venue frame exceeds 16 KiB");return e}function qd(r){if(r.length>mi)throw new Error("Encoded venue frame exceeds 16 KiB");const e=Bt(r);if(![1,2,3].includes(Number(e.c))||![e.id,e.fi,e.fc].every(t=>typeof t=="number"&&Number.isSafeInteger(t))||Number(e.id)<1||Number(e.fi)<0||Number(e.fc)<1||Number(e.fc)>261||Number(e.fi)>=Number(e.fc)||typeof e.t!="string"||!e.t||e.t.length>256||!(e.p instanceof Uint8Array)||e.p.length>mi)throw new Error("Invalid venue frame");return{channel:Number(e.c),message_id:Number(e.id),fragment_index:Number(e.fi),fragment_count:Number(e.fc),topic:e.t,payload:e.p}}function pl(r){if(r==="control:officials")return 12;if(/^mat:([1-9]|1[0-9]|20)$/.test(r))return 4;if(/^subtree:(?:b:)?[A-Za-z0-9_-]{1,100}$/.test(r))return 11;throw new Error("Invalid venue room")}function Gd(r,e){if(pl(r),!(r==="control:officials"?["control-state","public-projection"]:r.startsWith("mat:")?["signed-event","clock","heartbeat"]:["public-projection","snapshot-manifest","snapshot-chunk","game-tap","game-state","game-snapshot",...wt]).includes(e))throw new Error(`Topic ${e} forbidden on ${r}`)}const fl="openmat-tap-battle";function gn(r,e,t){const{signature:i,...s}=Bt(r);if(s.app!==fl||s.session!==e||!(i instanceof Uint8Array)||!Pe(ke,st(s),ae(t),i))throw new Error("Invalid signed game message");return s}const gl=r=>ue(Be(r)),$n=["wss://relay.damus.io","wss://nos.lol","wss://relay.primal.net"],Nt="https://pureengineering.github.io/openmat";function bl(r){const e=r.issuedAtMs??Date.now(),t=xe({issued_at_ms:e,publisher_pubkey_hex:r.publisherPubkeyHex.toLowerCase(),relay_origin:r.relayOrigin,rules_version:r.rulesVersion,tournament_id:r.tournamentId,tournament_name:r.tournamentName}),i=Ve(ke,t,r.rootPrivateKey);return{tournament_id:r.tournamentId,tournament_name:r.tournamentName,rules_version:r.rulesVersion,publisher_pubkey_hex:r.publisherPubkeyHex.toLowerCase(),relay_origin:r.relayOrigin,issued_at_ms:e,signature_hex:ue(i)}}function yl(r){try{if(!/^[0-9a-fA-F]{64}$/.test(r.publisher_pubkey_hex))return!1;const e=xe({issued_at_ms:r.issued_at_ms,publisher_pubkey_hex:r.publisher_pubkey_hex.toLowerCase(),relay_origin:r.relay_origin,rules_version:r.rules_version,tournament_id:r.tournament_id,tournament_name:r.tournament_name});return Pe(ke,e,ae(r.publisher_pubkey_hex),ae(r.signature_hex))}catch{return!1}}function ps(r){return`openmat://join?${new URLSearchParams({tid:r.tournament_id,name:r.tournament_name,rules:r.rules_version,pub:r.publisher_pubkey_hex,origin:r.relay_origin,iat:String(r.issued_at_ms),sig:r.signature_hex}).toString()}`}function wl(r,e=Nt,t=r.nostr_relays??$n){const i=e.trim().replace(/\/+$/,"");if(!r.signature_hex&&/^[0-9a-fA-F]{64}$/.test(r.publisher_pubkey_hex))return`${i}/?${r.publisher_pubkey_hex.toLowerCase()}`;const s=ps(r),n=new URLSearchParams({join:s});return t.length>0&&n.set("relays",t.join(",")),`${i}/?${n.toString()}`}function bn(r){if(!r)return;const e=r.split(",").map(t=>t.trim()).filter(t=>t.startsWith("wss://")||t.startsWith("ws://"));return e.length>0?e:void 0}function Ye(r){const e=r.trim();if(!e)return{valid:!1,reason:"Join key or QR URI is empty"};if(/^[0-9a-fA-F]{64}$/.test(e))return{valid:!0,reason:"Pinned tournament publisher key",payload:{tournament_id:"",tournament_name:"Live Tournament",rules_version:"NFHS-2026-27-v1",publisher_pubkey_hex:e.toLowerCase(),relay_origin:"http://127.0.0.1:5174",issued_at_ms:Date.now(),signature_hex:""}};if(/^[A-Za-z0-9][A-Za-z0-9_-]{3,63}$/.test(e))return{valid:!0,reason:`Find tournament ${e}`,payload:{tournament_id:e,tournament_name:e,rules_version:"NFHS-2026-27-v1",publisher_pubkey_hex:"",relay_origin:"http://127.0.0.1:5174",issued_at_ms:Date.now(),signature_hex:""}};try{let t;if(e.startsWith("http://")||e.startsWith("https://")){const n=new URL(e),a=n.search.replace(/^\?/,"").trim(),o=n.hash.replace(/^#\/?\??/,"").trim();for(const p of[a,o]){if(!p)continue;const _=(()=>{try{return p.startsWith("openmat://join?")?p:decodeURIComponent(p)}catch{return p}})();if(_.startsWith("openmat://join")){const f=Ye(_);if(f.valid&&f.payload){const g=bn(new URLSearchParams(n.search).get("relays"));g&&(f.payload.nostr_relays=g)}return f}}if(t=new URLSearchParams(n.search),o){const p=new URLSearchParams(o);for(const[_,f]of p.entries())t.has(_)||t.set(_,f)}const c=bn(t.get("relays")),l=t.get("join");if(l){const p=Ye(l);return p.valid&&p.payload&&c&&(p.payload.nostr_relays=c),p}const h=decodeURIComponent(a.split("&")[0]??"").replace(/=+$/,"").trim(),d=decodeURIComponent(o.split("&")[0]??"").replace(/=+$/,"").trim(),u=t.get("key")?.trim()||(t.get("sig")?"":t.get("pub")?.trim()||t.get("root")?.trim())||(/^[0-9a-fA-F]{64}$/.test(h)?h:"")||(/^[0-9a-fA-F]{64}$/.test(d)?d:"");if(u&&/^[0-9a-fA-F]{64}$/.test(u)&&!t.get("sig")){const p=t.get("session")?.trim()??"",_=p.startsWith("game:")?p.slice(5):"";return{valid:!0,reason:"Pinned tournament publisher key",payload:{tournament_id:t.get("tid")?.trim()||_,tournament_name:t.get("name")?.trim()||"Live Tournament",rules_version:t.get("rules")?.trim()||"NFHS-2026-27-v1",publisher_pubkey_hex:u.toLowerCase(),relay_origin:t.get("origin")?.trim()||"http://127.0.0.1:5174",issued_at_ms:Date.now(),signature_hex:"",...c?{nostr_relays:c}:{}}}}const m=(!t.get("sig")&&!t.get("pub")?t.get("tid")?.trim():"")||t.get("key")?.trim()||(!h.includes("=")&&/^[A-Za-z0-9][A-Za-z0-9_-]{3,63}$/.test(h)?h:"")||(!d.includes("=")&&/^[A-Za-z0-9][A-Za-z0-9_-]{3,63}$/.test(d)?d:"");if(m&&/^[A-Za-z0-9][A-Za-z0-9_-]{3,63}$/.test(m)&&!t.get("sig"))return{valid:!0,reason:`Find tournament ${m}`,payload:{tournament_id:m,tournament_name:t.get("name")?.trim()||m,rules_version:t.get("rules")?.trim()||"NFHS-2026-27-v1",publisher_pubkey_hex:(t.get("pub")??"").trim().toLowerCase(),relay_origin:t.get("origin")?.trim()||"http://127.0.0.1:5174",issued_at_ms:Date.now(),signature_hex:"",...c?{nostr_relays:c}:{}}};if(!t.get("tid")&&!t.get("pub"))return{valid:!1,reason:"URL does not contain tournament join parameters"}}else{const n=e.indexOf("?");if(!e.startsWith("openmat://join")||n<0)return{valid:!1,reason:"Enter an openmat://join link or 64-character join key"};t=new URLSearchParams(e.slice(n+1))}const i=bn(t.get("relays")),s={tournament_id:t.get("tid")??"",tournament_name:t.get("name")??"",rules_version:t.get("rules")??"NFHS-2026-27-v1",publisher_pubkey_hex:(t.get("pub")??"").toLowerCase(),relay_origin:t.get("origin")??"http://127.0.0.1:5174",issued_at_ms:Number(t.get("iat")??"0"),signature_hex:(t.get("sig")??"").toLowerCase(),...i?{nostr_relays:i}:{}};return!s.tournament_id||!s.publisher_pubkey_hex||!s.signature_hex?{valid:!1,reason:"Missing required fields in openmat://join QR payload"}:yl(s)?{valid:!0,reason:`Connected to ${s.tournament_name}`,payload:s}:{valid:!1,reason:"Signature verification failed on tournament join link"}}catch(t){return{valid:!1,reason:`Malformed join link: ${String(t)}`}}}function vl(r){const e=xe([r.certificate_id,r.tournament_id,r.subject_key_id,r.subject_pubkey,r.role,r.allowed_scopes,r.allowed_stream_id,r.assigned_mat_id,r.assignment_revision,r.authority_generation,r.issued_at_ms,r.expires_at_ms,r.allow_in_progress_completion,r.root_signature]);return ue(e)}function Yt(r){const e=Me(ae(r));if(Array.isArray(e))return{certificate_id:String(e[0]??""),tournament_id:String(e[1]??""),subject_key_id:String(e[2]??""),subject_pubkey:e[3]instanceof Uint8Array?e[3]:new Uint8Array(0),role:Number(e[4]??ft.MatOperator),allowed_scopes:Number(e[5]??0),allowed_stream_id:String(e[6]??""),assigned_mat_id:Number(e[7]??0),assignment_revision:Number(e[8]??1),authority_generation:Number(e[9]??1),issued_at_ms:Number(e[10]??0),expires_at_ms:Number(e[11]??0),allow_in_progress_completion:!!e[12],root_signature:e[13]instanceof Uint8Array?e[13]:new Uint8Array(0)};const t=e;return{certificate_id:String(t.certificate_id??""),tournament_id:String(t.tournament_id??""),subject_key_id:String(t.subject_key_id??""),subject_pubkey:t.subject_pubkey instanceof Uint8Array?t.subject_pubkey:new Uint8Array(0),role:Number(t.role??ft.MatOperator),allowed_scopes:Number(t.allowed_scopes??0),allowed_stream_id:String(t.allowed_stream_id??""),assigned_mat_id:Number(t.assigned_mat_id??0),assignment_revision:Number(t.assignment_revision??1),authority_generation:Number(t.authority_generation??1),issued_at_ms:Number(t.issued_at_ms??0),expires_at_ms:Number(t.expires_at_ms??0),allow_in_progress_completion:!!t.allow_in_progress_completion,root_signature:t.root_signature instanceof Uint8Array?t.root_signature:new Uint8Array(0)}}function kl(r){return`openmat://scorekeeper-auth?${new URLSearchParams({tid:r.tournament_id,name:r.tournament_name,pub:r.publisher_pubkey_hex.toLowerCase(),origin:r.relay_origin,cert:r.cert_cbor_hex}).toString()}`}function Sl(r){try{const e=r.trim(),t=e.indexOf("?");if(!e.startsWith("openmat://scorekeeper-auth")||t<0)return{valid:!1,reason:"QR URI must start with openmat://scorekeeper-auth?..."};const i=new URLSearchParams(e.slice(t+1)),s=i.get("tid")??"",n=i.get("name")??"",a=(i.get("pub")??"").toLowerCase(),o=i.get("origin")??"http://127.0.0.1:5174",c=i.get("cert")??"";if(!s||!a||!c)return{valid:!1,reason:"Missing tid, pub, or cert in scorekeeper QR URI"};const l=Yt(c);return{valid:!0,reason:"Parsed scorekeeper delegated certificate bundle",bundle:{tournament_id:s,tournament_name:n,publisher_pubkey_hex:a,relay_origin:o,certificate:l,cert_cbor_hex:c}}}catch(e){return{valid:!1,reason:`Malformed scorekeeper QR URI: ${String(e)}`}}}const ir=[{totalDataBytes:0,ecBytesPerBlock:0,numBlocksGroup1:0,dataBytesGroup1:0,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:19,ecBytesPerBlock:7,numBlocksGroup1:1,dataBytesGroup1:19,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:34,ecBytesPerBlock:10,numBlocksGroup1:1,dataBytesGroup1:34,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:55,ecBytesPerBlock:15,numBlocksGroup1:1,dataBytesGroup1:55,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:80,ecBytesPerBlock:20,numBlocksGroup1:1,dataBytesGroup1:80,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:108,ecBytesPerBlock:26,numBlocksGroup1:1,dataBytesGroup1:108,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:136,ecBytesPerBlock:18,numBlocksGroup1:2,dataBytesGroup1:68,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:156,ecBytesPerBlock:20,numBlocksGroup1:2,dataBytesGroup1:78,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:194,ecBytesPerBlock:24,numBlocksGroup1:2,dataBytesGroup1:97,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:232,ecBytesPerBlock:30,numBlocksGroup1:2,dataBytesGroup1:116,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:274,ecBytesPerBlock:18,numBlocksGroup1:2,dataBytesGroup1:68,numBlocksGroup2:2,dataBytesGroup2:69},{totalDataBytes:324,ecBytesPerBlock:20,numBlocksGroup1:4,dataBytesGroup1:81,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:370,ecBytesPerBlock:24,numBlocksGroup1:2,dataBytesGroup1:92,numBlocksGroup2:2,dataBytesGroup2:93},{totalDataBytes:428,ecBytesPerBlock:26,numBlocksGroup1:4,dataBytesGroup1:107,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:461,ecBytesPerBlock:30,numBlocksGroup1:3,dataBytesGroup1:115,numBlocksGroup2:1,dataBytesGroup2:116},{totalDataBytes:523,ecBytesPerBlock:22,numBlocksGroup1:5,dataBytesGroup1:87,numBlocksGroup2:1,dataBytesGroup2:88},{totalDataBytes:589,ecBytesPerBlock:24,numBlocksGroup1:5,dataBytesGroup1:98,numBlocksGroup2:1,dataBytesGroup2:99},{totalDataBytes:647,ecBytesPerBlock:28,numBlocksGroup1:1,dataBytesGroup1:107,numBlocksGroup2:5,dataBytesGroup2:108},{totalDataBytes:721,ecBytesPerBlock:30,numBlocksGroup1:5,dataBytesGroup1:120,numBlocksGroup2:1,dataBytesGroup2:121},{totalDataBytes:795,ecBytesPerBlock:28,numBlocksGroup1:3,dataBytesGroup1:113,numBlocksGroup2:4,dataBytesGroup2:114},{totalDataBytes:861,ecBytesPerBlock:28,numBlocksGroup1:3,dataBytesGroup1:107,numBlocksGroup2:5,dataBytesGroup2:108}],El=[[],[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90]],ni=new Uint8Array(512),On=new Uint8Array(256);(()=>{let r=1;for(let e=0;e<255;e++)ni[e]=r,On[r]=e,r<<=1,r&256&&(r^=285);for(let e=255;e<512;e++)ni[e]=ni[e-255]})();function $a(r,e){return r===0||e===0?0:ni[On[r]+On[e]]}function xl(r){let e=new Uint8Array([1]);for(let t=0;t<r;t++){const i=new Uint8Array(e.length+1),s=ni[t];for(let n=0;n<e.length;n++)i[n]^=e[n],i[n+1]^=$a(e[n],s);e=i}return e}function nr(r,e){const t=xl(e),i=new Uint8Array(e);for(let s=0;s<r.length;s++){const n=r[s]^i[0];i.copyWithin(0,1),i[e-1]=0;for(let a=0;a<e;a++)i[a]^=$a(t[a+1],n)}return i}function Rl(r){const e=new TextEncoder().encode(r);let t=1;for(;t<=20;){const x=ir[t].totalDataBytes,v=t<=9?12:20;if(Math.ceil((v+e.length*8)/8)<=x)break;t++}if(t>20)throw new Error(`QR payload exceeds Version 20 capacity (${e.length} bytes)`);const i=ir[t],s=[],n=(x,v)=>{for(let R=v-1;R>=0;R--)s.push(x>>>R&1)};n(4,4),n(e.length,t<=9?8:16);for(const x of e)n(x,8);const a=i.totalDataBytes*8,o=Math.min(4,a-s.length);for(n(0,o);s.length%8!==0;)s.push(0);const c=new Uint8Array(i.totalDataBytes),l=s.length>>>3;for(let x=0;x<l;x++){let v=0;for(let R=0;R<8;R++)v=v<<1|s[x*8+R];c[x]=v}const h=[236,17];for(let x=l;x<i.totalDataBytes;x++)c[x]=h[x-l&1];const d=[],u=[];let m=0;for(let x=0;x<i.numBlocksGroup1;x++){const v=c.slice(m,m+i.dataBytesGroup1);m+=i.dataBytesGroup1,d.push(v),u.push(nr(v,i.ecBytesPerBlock))}for(let x=0;x<i.numBlocksGroup2;x++){const v=c.slice(m,m+i.dataBytesGroup2);m+=i.dataBytesGroup2,d.push(v),u.push(nr(v,i.ecBytesPerBlock))}const p=[],_=Math.max(i.dataBytesGroup1,i.dataBytesGroup2);for(let x=0;x<_;x++)for(const v of d)x<v.length&&p.push(v[x]);for(let x=0;x<i.ecBytesPerBlock;x++)for(const v of u)p.push(v[x]);const f=t*4+17,g=Array.from({length:f},()=>Array(f).fill(!1)),w=Array.from({length:f},()=>Array(f).fill(!1)),b=(x,v,R)=>{x<0||x>=f||v<0||v>=f||(g[x][v]=R,w[x][v]=!0)},A=(x,v)=>{for(let R=-1;R<=7;R++)for(let k=-1;k<=7;k++){const T=x+R,O=v+k;if(T<0||T>=f||O<0||O>=f)continue;const P=R>=0&&R<=6&&k>=0&&k<=6,W=R===0||R===6||k===0||k===6,G=R>=2&&R<=4&&k>=2&&k<=4;b(T,O,P&&(W||G))}};A(0,0),A(0,f-7),A(f-7,0);for(let x=8;x<f-8;x++)b(6,x,x%2===0),b(x,6,x%2===0);const S=El[t];for(let x=0;x<S.length;x++)for(let v=0;v<S.length;v++){if(x===0&&v===0||x===0&&v===S.length-1||x===S.length-1&&v===0)continue;const R=S[x],k=S[v];for(let T=-2;T<=2;T++)for(let O=-2;O<=2;O++){const P=Math.max(Math.abs(T),Math.abs(O))!==1;b(R+T,k+O,P)}}b(f-8,8,!0);for(let x=0;x<9;x++)w[8][x]||b(8,x,!1),w[x][8]||b(x,8,!1);for(let x=0;x<8;x++)w[8][f-1-x]||b(8,f-1-x,!1),w[f-1-x][8]||b(f-1-x,8,!1);if(t>=7){let x=t;for(let R=0;R<12;R++)x=x<<1^(x>>>11)*7973;const v=t<<12|x;for(let R=0;R<18;R++){const k=(v>>>R&1)!==0,T=f-11+R%3,O=Math.floor(R/3);b(T,O,k),b(O,T,k)}}let E=0;const C=p.length*8;for(let x=f-1;x>=1;x-=2){x===6&&(x=5);for(let v=0;v<f;v++)for(let R=0;R<2;R++){const k=x-R,O=(x+1&2)===0?f-1-v:v;if(!w[O][k]&&E<C){const W=(p[E>>>3]>>>7-(E&7)&1)!==0;g[O][k]=W,E++}}}for(let x=0;x<f;x++)for(let v=0;v<f;v++)!w[x][v]&&(x+v)%2===0&&(g[x][v]=!g[x][v]);const $=8;let y=$;for(let x=0;x<10;x++)y=y<<1^(y>>>9)*1335;const I=($<<10|y)^21522,D=x=>(I>>>x&1)!==0;for(let x=0;x<=5;x++)g[8][x]=D(x);g[8][7]=D(6),g[8][8]=D(7),g[7][8]=D(8);for(let x=9;x<15;x++)g[14-x][8]=D(x);for(let x=0;x<8;x++)g[8][f-1-x]=D(x);for(let x=8;x<15;x++)g[f-15+x][8]=D(x);return g[f-8][8]=!0,g}function Mt(r,e=3){const t=Rl(r),i=t.length,s=i+e*2;let n="";for(let o=0;o<i;o++)for(let c=0;c<i;c++)t[o][c]&&(n+=`M${c+e},${o+e}h1v1h-1z`);const a=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}" shape-rendering="crispEdges"><rect width="${s}" height="${s}" fill="#ffffff"/><path d="${n}" fill="#040b0a"/></svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(a)}`}new TextEncoder;new TextDecoder;function sr(r){let e="";for(let i=0;i<r.byteLength;i++)e+=String.fromCharCode(r[i]);return(typeof btoa=="function"?btoa(e):Buffer.from(r).toString("base64")).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")}function Al(r){const e=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(Math.ceil(r.length/4)*4,"=");if(typeof atob=="function"){const t=atob(e),i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}return new Uint8Array(Buffer.from(e,"base64"))}const Il=["","DEC","MD","TF","FALL","DQ","INJURY_DEFAULT","FORFEIT","MEDICAL_FORFEIT"];function Wi(r,e){const t=i=>i.lifecycle>M.Ready?0:i.lifecycle===M.Ready?1:2;return t(r)-t(e)||(r.mat_queue_order||1/0)-(e.mat_queue_order||1/0)||r.bout_number-e.bout_number}const Cl=["TAKEDOWN_3","ESCAPE_1","REVERSAL_2","NEAR_FALL_2","NEAR_FALL_3","NEAR_FALL_4","NEAR_FALL_INJURY_OR_SCREAMING_4","CAUTION","STALLING","TECHNICAL_VIOLATION","ILLEGAL_HOLD","UNNECESSARY_ROUGHNESS","UNSPORTSMANLIKE_WRESTLER","UNSPORTSMANLIKE_COACH","FLAGRANT_MISCONDUCT"],Ml=["TOP","BOTTOM","NEUTRAL","DEFER"],Tl=["MATCH_PERIOD","INJURY_RED","INJURY_GREEN","BLOOD_RED","BLOOD_GREEN","RECOVERY_RED","RECOVERY_GREEN","HEAD_NECK_RED","HEAD_NECK_GREEN"];function Bl(r,e){const t=i=>i==="RED"?0:i==="GREEN"?1:-1;switch(r.event_type){case"MATCH_CLOCK_TOGGLE":return{kind:e.clock_action==="START"?6:e.clock_action==="STOP"?7:-1};case"MATCH_DISK_TOSS":return{kind:1,corner:t(e.actor)};case"MATCH_PERIOD_CHOICE":return{kind:3,corner:t(e.chooser),choice:Ml.indexOf(String(e.decision))+1};case"MATCH_SCORING_ACTION":{const i=e.public_state;if(Number(e.manual_delta??0)!==0||i&&i.bout_ended!==!0&&Math.abs(Number(i.red_score)-Number(i.green_score))>=15)throw new Error("Score needs the signed journal");return{kind:2,corner:t(e.actor),scoring:Cl.indexOf(String(e.action))+1}}case"MATCH_MEDICAL_DECISION":return{kind:e.start===!0?15:16,timer:Tl.indexOf(String(e.timer)),can_continue:e.can_continue===!0,healthcare_present:e.healthcare_present===!0,infraction_caused:e.infraction_caused===!0};case"MATCH_ADVANCE_PERIOD":return{kind:9};case"MATCH_CONFIRM_RESULT":return{kind:17,under_protest:e.under_protest===!0};case"MATCH_ENDING_ACTION":return{kind:{FALL:10,INJURY_DEFAULT:11,FORFEIT:12,MEDICAL_FORFEIT:13}[String(e.ending_type)]??-1,corner:t(e.actor),pin_observed_ms:String(e.ending_type)==="FALL"?Math.max(2e3,Number(e.fall_time_ms??0)):Number(e.fall_time_ms??0)};default:throw new Error("Command needs the signed journal")}}function Nl(r=[]){const e=r[0];if(!e)return new Uint8Array;const t=[Math.floor(e.audit_time_ms/1e3)];let i=e.monotonic_time_ns,s=0,n,a,o;try{if(!Number.isSafeInteger(t[0])||t[0]<0||t[0]>4294967295)return new Uint8Array;const c=r.some(l=>l.event_type!=="MATCH_COMMAND");c&&t.push(mn(Ma[1],0));for(const l of r){if(l.boot_id!==e.boot_id||l.monotonic_time_ns<i)return new Uint8Array;let h=Math.floor((l.monotonic_time_ns-e.monotonic_time_ns)/1e8);const d=l.payload instanceof Uint8Array?Me(l.payload):l.payload,u=c?Bl(l,d):d.command;if(!u||!c&&t.length===1&&u.kind!==0)return new Uint8Array;const m=d.public_state??d.projection,p=Array.isArray(m?.timers)?m.timers[0]:void 0,_=Number(m?.clock_remaining_ms??p?.remaining_ms);if(c&&d.auto_start_clock===!0&&(t.push(mn({kind:6},h)),n=h,a=l.monotonic_time_ns,o=_),[2,4,5,10].includes(Number(u.kind))&&n!==void 0&&a!==void 0&&Number.isFinite(o)&&l.monotonic_time_ns-a<o*1e6){const f=n+Math.ceil(o/100);if(h>=f){if(f<=s)return new Uint8Array;h=f-1}}if(h<s)return new Uint8Array;t.push(mn(u,h)),u.kind===6?(n=h,a=l.monotonic_time_ns,o=_):(u.kind===7||u.kind===9)&&(n=a=o=void 0),i=l.monotonic_time_ns,s=h}return nn(t)}catch{return new Uint8Array}}function Pl(r,e,t,i,s){const n=r.tournament_id,a=Math.max(r.snapshot_epoch,r.control_sequence_head),o={tournament_id:n,revision:a},c=new Map,l=(b,A,S="",E=0)=>{const C=_s(b,{...A,revision:1,...b==="bracket-full"?{state:{...A.state,revision:1}}:{},...b==="mat-board"?{mats:A.mats.map(y=>({...y,revision:1}))}:{}});let $;c.set(`${b}:${S}:${E}`,{topic:b,bracketId:S,content:C,get bytes(){return $??=el(b,A,t)}})},h=new Map(r.athletes.map(b=>[b.team_id,b.team_name])),d=new Map(r.standings.map(b=>[b.team_id,b.total_points])),u=[...h.keys()].sort().map((b,A)=>({index:A+1,team_id:b,name:h.get(b),half_points:Math.max(0,Math.round((d.get(b)??0)*2))})),m=new Map(u.map(b=>[b.team_id,b.index])),p=new Map,_=new Map;for(const b of r.bouts){const A=p.get(b.bracket_id)??[];if(A.push(b),p.set(b.bracket_id,A),b.assigned_mat_id>0&&b.lifecycle>=M.Assigned&&b.lifecycle<=M.LocallyConfirmed&&b.red_athlete_id&&b.green_athlete_id&&!b.is_bye){const S=_.get(b.assigned_mat_id)??[];S.push(b),_.set(b.assigned_mat_id,S)}}for(const b of _.values())b.sort(Wi);const f=[],g=[],w=s.size?Math.floor(Math.min(...[...s.values()].map(b=>b[0].audit_time_ms))/1e3):0;for(const[b,A]of[...p.keys()].sort().entries()){const S=p.get(A).sort((L,j)=>L.match_id.localeCompare(j.match_id)),E=S[0],C=(E.division_id||"VARSITY").toUpperCase(),$={GIRLS:2,JV:3,NOVICE:3,U16:4}[C]??1,y=si(C),I=si($===2?"VARSITY":"GIRLS"),D=y.indexOf(E.weight_class_id),x=I.indexOf(E.weight_class_id),v=D>=0?D:x>=0?x:0,R=new Set(S.flatMap(L=>[L.red_athlete_id,L.green_athlete_id,L.winner_athlete_id,L.loser_athlete_id])),k=r.athletes.filter(L=>R.has(L.athlete_id)||L.weight_class_id===E.weight_class_id&&(L.division_id||"VARSITY").toUpperCase()===C).sort((L,j)=>L.athlete_id.localeCompare(j.athlete_id)),T=k.map((L,j)=>({slot:j+1,team_index:m.get(L.team_id),seed_rank:L.seed_rank,state:L.check_in_stage>=6?3:L.check_in_stage>=2?2:1,public_stage:L.check_in_stage,display_name:L.public_display_name,athlete_id:L.athlete_id})),O=new Map(T.map(L=>[L.athlete_id,L.slot])),P=new Map(S.map((L,j)=>[L.match_id,j+1])),W=new Uint8Array(8),G=[],F=S.map((L,j)=>{const Y=Nl(s.get(L.match_id));G.push(Y.length?kt(Y):Uint32Array.of(0));const K={local_number:j+1,bout_number:L.bout_number,round_index:L.round_index,flags:Number(L.is_consolation)|Number(L.is_placement_bout)<<1|Number(L.is_true_second_challenge)<<2|Number(L.is_bye)<<3|(L.winner_athlete_id&&L.winner_athlete_id===L.green_athlete_id?16:0),placement_rank:L.placement_rank,red_slot:O.get(L.red_athlete_id)??0,green_slot:O.get(L.green_athlete_id)??0,winner_slot:O.get(L.winner_athlete_id)??0,loser_slot:O.get(L.loser_athlete_id)??0,winner_next:P.get(L.winner_next_match_id)??0,loser_next:P.get(L.loser_next_match_id)??0,edge_flags:0,lifecycle:L.lifecycle-1,win_type:L.win_type==="BYE"?7:Math.max(0,Il.indexOf(L.win_type)),red_score:L.red_score,green_score:L.green_score,period:L.period_number,clock_remaining_ds:Math.floor(L.clock_remaining_ms/100),mat_id:L.assigned_mat_id,assignment_revision:L.assignment_revision,completed_offset_sec:Math.floor(L.completed_at_ms/1e3),match_id:L.match_id,eventlog_available:+(Y.length>0)};l("bout-update",{...o,bracket_id:A,bracket_index:b,bout:K,eventlog_words:Y},A,K.local_number),L.is_placement_bout&&!L.is_true_second_challenge&&L.placement_rank>=1&&L.placement_rank<=7&&K.winner_slot&&(W[L.placement_rank-1]=K.winner_slot,W[L.placement_rank]=K.loser_slot);const ee=_.get(L.assigned_mat_id);return ee?.[0]===L&&f.push({...o,bracket_id:A,bracket_index:b,mat_id:K.mat_id,local_number:K.local_number,bout_number:K.bout_number,red_slot:K.red_slot,green_slot:K.green_slot,red_score:K.red_score,green_score:K.green_score,period:K.period,clock_remaining_ds:K.clock_remaining_ds,clock_running:Number(L.clock_running),eventlog_words:Y,on_deck:ee[1]?.bout_number??0,in_the_hole:ee[2]?.bout_number??0}),K}),q=E.format===X.RoundRobinPool?5:E.format===X.PoolToBracket?6:E.format===X.TeamDual?7:k.length<=8?1:k.length<=16?2:k.length<=32?3:4,V={...o,bracket_id:A,bracket_index:b,division:$,weight_index:v,format:q,athletes:T,bouts:F,placement_slots:W};l("bracket-state",V,A);const z=nn(Zc(b,w,G));l("bracket-full",{...o,bracket_id:A,state:V,eventlog_words:z},A),g.push({bracket_id:A,bracket_index:b,division:$,weight_index:v,revision:a,eventlog_word_count:z.length/4,state_sha256:Be(gi(V)),weight_class_id:E.weight_class_id})}f.sort((b,A)=>b.mat_id-A.mat_id);for(const b of f)l("mat-update",b,b.bracket_id,b.mat_id);return l("mat-board",{...o,mats:f}),l("tournament-summary",{...o,base_epoch_utc:w,mat_count:r.mat_count,rules_hash:i,authority_public_key:e,teams:u,brackets:g}),c}const rr=(r,e)=>(r+(r>=0?e:-e)/Ol)/e;function $l(r,e,t){An("scalar",r,Tt,t);const[[i,s],[n,a]]=e,o=rr(a*r,t),c=rr(-s*r,t);let l=r-o*i-c*n,h=-o*s-c*a;const d=l<Tt,u=h<Tt;d&&(l=-l),u&&(h=-h);const m=qr(Math.ceil(Zn(t)/2))+Kt;if(l<Tt||l>=m||h<Tt||h>=m)throw new Error("splitScalar (endomorphism): failed for k");return{k1neg:d,k1:l,k2neg:u,k2:h}}const Tt=BigInt(0),Kt=BigInt(1),Ol=BigInt(2),yn=BigInt(3),Ll=BigInt(4);function Dl(r,e={}){const t=na("weierstrass",r,e),i=t.Fp,s=t.Fn;let n=t.CURVE;const{h:a,n:o}=n;yt(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",randomBytes:"function"});const{endo:c,allowInfinityPoint:l,clearCofactor:h,isTorsionFree:d,fromBytes:u,toBytes:m}=e,p=e.randomBytes===void 0?Jn:e.randomBytes;if(c&&(!i.is0(n.a)||typeof c.beta!="bigint"||!Array.isArray(c.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const _=c?{beta:c.beta,basises:c.basises.map(G=>[...G])}:void 0,f=Ul(i,s);function g(){if(!i.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function w(G,F,q){if(F.is0()){if(!l)throw new Error("bad point: ZERO");return Uint8Array.of(0)}const{x:V,y:z}=F.toAffine(),L=i.toBytes(V);if(dt(q,"isCompressed"),q){g();const j=!i.isOdd(z);return Ft(Fl(j),L)}else return Ft(Uint8Array.of(4),L,i.toBytes(z))}function b(G){ge(G,void 0,"Point");const{publicKey:F,publicKeyUncompressed:q}=f,V=G.length,z=G[0],L=G.subarray(1);if(l&&V===1&&z===0)return{x:i.ZERO,y:i.ZERO};if(V===F&&(z===2||z===3)){const j=i.fromBytes(L);if(!i.isValid(j))throw new Error("bad point: is not on curve, wrong x");const Y=$(j);let K;try{K=i.sqrt(Y)}catch(_e){const ve=_e instanceof Error?": "+_e.message:"";throw new Error("bad point: is not on curve, sqrt error"+ve)}g();const ee=i.isOdd(K);return(z&1)===1!==ee&&(K=i.neg(K)),{x:j,y:K}}else if(V===q&&z===4){const j=i.BYTES,Y=i.fromBytes(L.subarray(0,j)),K=i.fromBytes(L.subarray(j,j*2));if(!y(Y,K))throw new Error("bad point: is not on curve");return{x:Y,y:K}}else throw new Error(`bad point: got length ${V}, expected compressed=${F} or uncompressed=${q}`)}const A=m===void 0?w:m,S=u===void 0?b:u,E=i.mul(n.b,yn),C=i.is0(n.a)?G=>i.ZERO:G=>i.mul(n.a,G);function $(G){const F=i.sqr(G),q=i.mul(F,G);return i.add(i.add(q,i.mul(G,n.a)),n.b)}function y(G,F){const q=i.sqr(F),V=$(G);return i.eql(q,V)}if(!y(n.Gx,n.Gy))throw new Error("bad curve params: generator point");const I=i.mul(i.pow(n.a,yn),Ll),D=i.mul(i.sqr(n.b),BigInt(27));if(i.is0(i.add(I,D)))throw new Error("bad curve params: a or b");function x(G,F,q=!1){if(!i.isValid(F)||q&&i.is0(F))throw new Error(`bad point coordinate ${G}`);return typeof F=="object"&&F!==null?i.create(F):F}function v(G){if(!(G instanceof O))throw new Error("Weierstrass Point expected")}function R(G){if(!_||!_.basises)throw new Error("no endo");return $l(G,_.basises,s.ORDER)}function k(G,F,q,V){if(!s.isValid(V))throw new RangeError("invalid scalar: out of range");if(_){const{k1neg:z,k1:L,k2neg:j,k2:Y}=R(V),K=new O(i.mul(q.X,_.beta),q.Y,q.Z);G.push(z?q.negate():q,j?K.negate():K),F.push(L,Y)}else G.push(q),F.push(V)}const T=new WeakSet;class O{static BASE=new O(n.Gx,n.Gy,i.ONE);static ZERO=new O(i.ZERO,i.ONE,i.ZERO);static Fp=i;static Fn=s;X;Y;Z;constructor(F,q,V){this.X=x("x",F),this.Y=x("y",q,!0),this.Z=x("z",V),Object.freeze(this)}static CURVE(){return n}static fromAffine(F){const{x:q,y:V}=F||{};if(!F||!i.isValid(q)||!i.isValid(V))throw new Error("invalid affine point");if(F instanceof O)throw new Error("projective point not allowed");return i.is0(q)&&i.is0(V)?O.ZERO:new O(q,V,i.ONE)}static fromBytes(F){const q=O.fromAffine(S(ge(F,void 0,"point")));return q.assertValidity(),q}static fromHex(F){return O.fromBytes(Ur(F))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(F=6,q=!0){return W.setWindowSize(this,F),q||this.multiply(yn),this}assertValidity(){const F=this;if(F.is0()){if(l&&i.is0(F.X)&&i.eql(F.Y,i.ONE)&&i.is0(F.Z))return;throw new Error("bad point: ZERO")}if(T.has(F))return;const{x:q,y:V}=F.toAffine();if(!i.isValid(q)||!i.isValid(V))throw new Error("bad point: x or y not field elements");if(!y(q,V))throw new Error("bad point: equation left != right");if(!F.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");T.add(F)}hasEvenY(){const{y:F}=this.toAffine();if(!i.isOdd)throw new Error("Field doesn't support isOdd");return!i.isOdd(F)}equals(F){v(F);const{X:q,Y:V,Z:z}=this,{X:L,Y:j,Z:Y}=F,K=i.eql(i.mul(q,Y),i.mul(L,z)),ee=i.eql(i.mul(V,Y),i.mul(j,z));return K&&ee}negate(){return new O(this.X,i.neg(this.Y),this.Z)}double(){const{X:F,Y:q,Z:V}=this;let z=i.ZERO,L=i.ZERO,j=i.ZERO,Y=i.mul(F,F),K=i.mul(q,q),ee=i.mul(V,V),ne=i.mul(F,q);return ne=i.add(ne,ne),j=i.mul(F,V),j=i.add(j,j),z=C(j),L=i.mul(E,ee),L=i.add(z,L),z=i.sub(K,L),L=i.add(K,L),L=i.mul(z,L),z=i.mul(ne,z),j=i.mul(E,j),ee=C(ee),ne=i.sub(Y,ee),ne=C(ne),ne=i.add(ne,j),j=i.add(Y,Y),Y=i.add(j,Y),Y=i.add(Y,ee),Y=i.mul(Y,ne),L=i.add(L,Y),ee=i.mul(q,V),ee=i.add(ee,ee),Y=i.mul(ee,ne),z=i.sub(z,Y),j=i.mul(ee,K),j=i.add(j,j),j=i.add(j,j),new O(z,L,j)}add(F){v(F);const{X:q,Y:V,Z:z}=this,{X:L,Y:j,Z:Y}=F;let K=i.ZERO,ee=i.ZERO,ne=i.ZERO,_e=i.mul(q,L),ve=i.mul(V,j),ce=i.mul(z,Y),me=i.add(q,V),Z=i.add(L,j);me=i.mul(me,Z),Z=i.add(_e,ve),me=i.sub(me,Z),Z=i.add(q,z);let Re=i.add(L,Y);return Z=i.mul(Z,Re),Re=i.add(_e,ce),Z=i.sub(Z,Re),Re=i.add(V,z),K=i.add(j,Y),Re=i.mul(Re,K),K=i.add(ve,ce),Re=i.sub(Re,K),ne=C(Z),K=i.mul(E,ce),ne=i.add(K,ne),K=i.sub(ve,ne),ne=i.add(ve,ne),ee=i.mul(K,ne),ve=i.add(_e,_e),ve=i.add(ve,_e),ce=C(ce),Z=i.mul(E,Z),ve=i.add(ve,ce),ce=i.sub(_e,ce),ce=C(ce),Z=i.add(Z,ce),_e=i.mul(ve,Z),ee=i.add(ee,_e),_e=i.mul(Re,Z),K=i.mul(me,K),K=i.sub(K,_e),_e=i.mul(me,ve),ne=i.mul(Re,ne),ne=i.add(ne,_e),new O(K,ee,ne)}subtract(F){return v(F),this.add(F.negate())}is0(){return this.equals(O.ZERO)}multiply(F){if(!s.isValidNot0(F))throw new RangeError("invalid scalar: out of range");const{p:q,f:V}=W.mulSecret(this,F,a,P);return P([q,V])[0]}multiplyUnsafe(F){const q=this,V=F;if(!s.isValid(V))throw new RangeError("invalid scalar: out of range");if(V===Tt||q.is0())return O.ZERO;if(V===Kt)return q;if(W.hasWindowSize(this))return W.mulUnsafe(q,V,P);const z=[],L=[];return k(z,L,q,V),In(O,z,L)}mulAddUnsafe(F,q,V){v(q);const z=[],L=[];return k(z,L,this,F),k(z,L,q,V),In(O,z,L)}toAffine(F){const q=this;let V=F;if(V!=null&&!i.isValid(V))throw new RangeError('"invertedZ" expected valid field element');const{X:z,Y:L,Z:j}=q;if(i.eql(j,i.ONE))return{x:z,y:L};const Y=q.is0();V==null&&(V=Y?i.ONE:i.inv(j));const K=i.mul(z,V),ee=i.mul(L,V),ne=i.mul(j,V);if(Y)return{x:i.ZERO,y:i.ZERO};if(!i.eql(ne,i.ONE))throw new Error("invZ was invalid");return{x:K,y:ee}}isTorsionFree(){return a===Kt?!0:d?d(O,this):W.mulUnsafe(this,o).is0()}clearCofactor(){return a===Kt?this:h?h(O,this):this.multiplyUnsafe(a)}isSmallOrder(){return a===Kt?this.is0():this.clearCofactor().is0()}toBytes(F=!0){return dt(F,"isCompressed"),this.assertValidity(),A(O,this,F)}toHex(F=!0){return Fr(this.toBytes(F))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}const P=G=>Zr(O,G),W=new ia(O,p);return W.bits>=6&&O.BASE.precompute(6),Object.freeze(O.prototype),Object.freeze(O),O}function Fl(r){return Uint8Array.of(r?2:3)}function Ul(r,e){return{secretKey:e.BYTES,publicKey:1+r.BYTES,publicKeyUncompressed:1+2*r.BYTES,publicKeyHasPrefix:!0,signature:2*e.BYTES}}const rn={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},Hl={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},Wl=BigInt(0),ar=BigInt(2);function Vl(r){const e=rn.p,t=BigInt(3),i=BigInt(6),s=BigInt(11),n=BigInt(22),a=BigInt(23),o=BigInt(44),c=BigInt(88),l=r*r*r%e,h=l*l*r%e,d=fe(h,t,e)*h%e,u=fe(d,t,e)*h%e,m=fe(u,ar,e)*l%e,p=fe(m,s,e)*m%e,_=fe(p,n,e)*p%e,f=fe(_,o,e)*_%e,g=fe(f,c,e)*f%e,w=fe(g,o,e)*_%e,b=fe(w,t,e)*h%e,A=fe(b,a,e)*p%e,S=fe(A,i,e)*l%e,E=fe(S,ar,e);if(!Ht.eql(Ht.sqr(E),r))throw new Error("Cannot find square root");return E}const Ht=Xi(rn.p,{sqrt:Vl}),Vt=Dl(rn,{Fp:Ht,endo:Hl}),or=Object.create(null);function Vi(r,...e){let t=or[r];if(t===void 0){const i=Rn(Ko(r));t=Ft(i,i),or[r]=t}return Rn(Ft(t,...e))}const Oa=r=>r.toBytes(!0).slice(1),La=({x:r})=>Ht.toBytes(r),an=r=>!Ht.isOdd(r);function Da(r){const{Fn:e,BASE:t}=Vt,i=e.fromBytes(ge(r,32,"secretKey")),n=t.multiply(i).toAffine();return{scalar:an(n.y)?i:e.neg(i),bytes:La(n)}}function Fa(r){const e=Ht;if(!e.isValidNot0(r))throw new Error("invalid x: Fail if x ≥ p");const t=e.sqr(r),i=e.add(e.mulN(t,r),BigInt(7));let s=e.sqrt(i);an(s)||(s=e.neg(s));const n=Vt.fromAffine({x:r,y:s});return n.assertValidity(),n}const Ot=Ji;function Ua(...r){return Vt.Fn.create(Ot(Vi("BIP0340/challenge",...r)))}function cr(r){return Da(r).bytes}function ql(r,e,t=Kn(32)){const{Fn:i,BASE:s}=Vt,n=di(ge(r,void 0,"message")),{bytes:a,scalar:o}=Da(e),c=ge(t,32,"auxRand"),l=i.toBytes(o^Ot(Vi("BIP0340/aux",c))),h=Vi("BIP0340/nonce",l,a,n),d=i.create(Ot(h));if(d===Wl)throw new Error("sign failed: k is zero");const m=s.multiply(d).toAffine(),p=an(m.y)?d:i.neg(d),_=La(m),f=Ua(_,a,n),g=new Uint8Array(64);if(g.set(_,0),g.set(i.toBytes(i.create(p+f*o)),32),!Ha(g,n,a))throw new Error("sign: Invalid signature produced");return g}function Ha(r,e,t){const{Fp:i,Fn:s,BASE:n}=Vt,a=ge(r,64,"signature"),o=ge(e,void 0,"message"),c=ge(t,32,"publicKey");try{const l=Fa(Ot(c)),h=a.subarray(0,32),d=Ot(h);if(!i.isValidNot0(d))return!1;const u=Ot(a.subarray(32,64));if(!s.isValidNot0(u))return!1;const m=Ua(h,Oa(l),o),p=n.mulAddUnsafe(u,l,s.neg(m)),{x:_,y:f}=p.toAffine();return!(p.is0()||!an(f)||!i.eql(_,d))}catch{return!1}}const lr=(()=>{const t=i=>(i=i===void 0?Kn(48):i,cc(ge(i,48,"seed"),rn.n));return Object.freeze({keygen:sa(t,cr),getPublicKey:cr,sign:ql,verify:Ha,Point:Vt,utils:Object.freeze({randomSecretKey:t,taggedHash:Vi,lift_x:Fa,pointToBytes:Oa}),lengths:Object.freeze({secretKey:32,publicKey:32,publicKeyHasPrefix:!1,signature:64,seed:48})})})();function Gl(r){const e=(n,a)=>a.every(o=>typeof n[o]=="string"),t=(n,a)=>a.every(o=>Number.isSafeInteger(n[o])&&n[o]>=0),i=(n,a)=>Array.isArray(r[n])&&r[n].every(o=>o!==null&&typeof o=="object"&&a(o)),s=/^OPENMAT-VENUE-[A-F0-9]{8}$/.test(r?.tournament_id??"")&&Array.isArray(r.bouts)&&[20,60].includes(r.bouts.length)&&Array.isArray(r.athletes)&&r.athletes.length===r.bouts.length*2&&r.bouts.every(n=>/^mat-(?:[1-9]|1[0-9]|20)-bout-[123]$/.test(n?.match_id??""))&&r.athletes.every(n=>/^mat-(?:[1-9]|1[0-9]|20)-(?:q[23]-)?(?:red|green)$/.test(n?.athlete_id??""));return!!(r&&!s&&e(r,["tournament_id","tournament_name","rules_version","publisher_pubkey_hex","payload_sha256_hex","signature_hex"])&&t(r,["snapshot_epoch","control_sequence_head","published_at_ms","mat_count"])&&r.mat_count<=20&&i("athletes",n=>e(n,["athlete_id","public_display_name","team_id","team_name","weight_class_id"]))&&i("bouts",n=>e(n,["match_id","weight_class_id","round_label","red_athlete_id","green_athlete_id"])&&t(n,["bout_number","lifecycle","assigned_mat_id","red_score","green_score","period_number","clock_remaining_ms"])&&typeof n.clock_running=="boolean")&&i("mats",n=>t(n,["mat_id","authority_epoch"])&&e(n,["status"]))&&i("standings",n=>e(n,["team_id","team_name"])&&Number.isFinite(n.total_points))&&r.bracket_frozen_by_class&&typeof r.bracket_frozen_by_class=="object"&&r.ow_vote_tallies&&typeof r.ow_vote_tallies=="object"&&Object.values(r.ow_vote_tallies).every(n=>Number.isSafeInteger(n)&&Number(n)>=0))}function pi(r,e){const t=new Map;for(const s of r){const n=s.bracket_id||JSON.stringify([s.division_id?.toUpperCase()||"VARSITY",s.weight_class_id]),a=t.get(n)??new Map;a.set(s.match_id,s),t.set(n,a)}const i=new Map;for(const s of t.values()){const n=new Map,a=new Map;for(const o of s.values())if(o.is_bye||o.win_type?.toUpperCase()==="BYE"){const c=e(o),l=o.red_athlete_id&&o.green_athlete_id?"":o.red_athlete_id||o.green_athlete_id;n.set(o,!o.is_true_second_challenge&&!o.loser_athlete_id&&c===l?c:"")}else{const c=`${o.is_consolation}:${o.round_index}`,l=a.get(c)??{bouts:[],wrestled:!1};l.bouts.push(o),o.red_athlete_id&&o.green_athlete_id&&e(o)&&!["FF","FORFEIT","MEDICAL_FORFEIT"].includes(o.win_type?.toUpperCase())&&(l.wrestled=!0),a.set(c,l)}for(const[o,c]of n){if(!c||o.format==="ROUND_ROBIN_POOL"||o.format==="BEST_OF_THREE")continue;const l=a.get(`${o.is_consolation}:${o.round_index}`);if(!l)continue;const h=new Set([o.match_id]);let d=s.get(o.winner_next_match_id);for(;d&&n.get(d)===c&&d.is_consolation===o.is_consolation&&!h.has(d.match_id);)h.add(d.match_id),d=s.get(d.winner_next_match_id);if(!d||n.has(d)||d.is_consolation!==o.is_consolation||d.red_athlete_id!==c&&d.green_athlete_id!==c)continue;const u=i.get(d.match_id)??{earnedPoints:0,conditions:[]},m=o.is_consolation?1:2,p=d.red_athlete_id===c?"R":"G";u.conditions.push({corner:p,points:m,roundBouts:l.bouts}),l.wrestled&&d.red_athlete_id&&d.green_athlete_id&&e(d)===c&&(u.earnedPoints+=m),i.set(d.match_id,u)}}return i}const jl=12e4;function zl(r){return{tournament_id:r.tournament_id,peer_pubkey_hex:r.peer_pubkey_hex,role:r.role}}function Wa(r){const{signature:e,root_authorization:t,...i}=r;return i}function Yl(r,e,t=""){const i={...r,root_authorization:t,signature:""};return i.signature=ue(e(xe(Wa(i)))),i}function Kl(r,e,t,i=Date.now(),s=!0){try{const n=r;if(!n||!/^[0-9a-f]{64}$/.test(n.root_pubkey_hex)||!/^[0-9a-f]{64}$/.test(n.peer_pubkey_hex)||!/^[0-9a-f]{128}$/.test(n.signature)||e&&e!==n.root_pubkey_hex||t&&t!==n.tournament_id||typeof n.tournament_id!="string"||!n.tournament_id||n.tournament_id.length>150||!["PRIMARY","BACKUP","MAT_PEER"].includes(n.role)||!Number.isSafeInteger(n.authority_epoch)||n.authority_epoch<1||!Number.isSafeInteger(n.updated_at_ms)||n.updated_at_ms>i+3e4||s&&i-n.updated_at_ms>jl||!Array.isArray(n.assigned_mats)||n.assigned_mats.length>20||n.assigned_mats.some(o=>!Number.isInteger(o)||o<1||o>20)||!Array.isArray(n.active_rooms)||n.active_rooms.length>64||n.active_rooms.some(o=>typeof o!="string"||o.length>120))return!1;for(const[o,c,l]of[[n.origins,["http:","https:"],"/"],[n.nostr_relay_urls,["ws:","wss:"],"/api/openmat-nostr"],[n.p2p_broker_urls,["ws:","wss:"],"/api/openmat-p2p"]]){if(!Array.isArray(o)||o.length>8)return!1;for(const h of o){const d=new URL(h);if(!c.includes(d.protocol)||d.username||d.password||d.hash||d.search||d.pathname!==l||l!=="/"&&!n.origins.some(u=>{const m=new URL(u);return m.host===d.host&&m.protocol==="https:"==(d.protocol==="wss:")}))return!1}}const a=ae(n.root_pubkey_hex);return n.peer_pubkey_hex!==n.root_pubkey_hex&&!Pe(ke,xe(zl(n)),a,ae(n.root_authorization))?!1:Pe(ke,xe(Wa(n)),ae(n.peer_pubkey_hex),ae(n.signature))}catch{return!1}}async function jd(r,e,t){const i=new Map;return await Promise.allSettled([...new Set(r)].slice(0,8).map(async s=>{const n=await fetch(new URL("/api/openmat-registry",s),{signal:AbortSignal.timeout(2e3),redirect:"error"});if(!n.ok)return;const a=await n.text();if(a.length>262144)return;const o=JSON.parse(a);if(!(!Array.isArray(o.entries)||o.entries.length>128)){for(const c of o.entries)if(Kl(c,e,t)){const l=`${c.peer_pubkey_hex}:${c.role}`,h=i.get(l);(!h||c.authority_epoch>h.authority_epoch||c.authority_epoch===h.authority_epoch&&c.updated_at_ms>h.updated_at_ms)&&i.set(l,c)}}})),[...i.values()].sort((s,n)=>(s.role==="PRIMARY"?-1:1)-(n.role==="PRIMARY"?-1:1))}const Ql="NFHS-2026-27-v1",fs="NFHS-2026-27-NOVICE-1-2-2",Jl=/novice|jv|1-2-2/i;function Xl(r,e=18e5,t=6,i=10){const s=Jl.test(r)?6e4:12e4;return{ruleset_id:r,takedown_points:3,escape_points:1,reversal_points:2,near_fall_2_points:2,near_fall_3_points:3,near_fall_4_points:4,technical_fall_margin:15,period_1_duration_ms:s,period_2_duration_ms:12e4,period_3_duration_ms:12e4,sv_duration_ms:6e4,tb_period_duration_ms:3e4,utb_duration_ms:3e4,injury_allowance_ms:9e4,blood_allowance_ms:3e5,recovery_allowance_ms:12e4,head_neck_cervical_allowance_ms:3e5,min_rest_championship_ms:e,min_rest_consolation_ms:e,max_matches_per_day:t,max_matches_in_consecutive_days:i}}function Zl(r){return Be(xe(r))}function ed(r,e){const t=ae(e);if(t.length!==32||!r.length)throw new Error("Native replay requires a pinned root and nonempty trace");const i=new Map;return r.map(s=>{const n=(_,f)=>{if(!_)throw new Error(`Native trace ${s.match}:${s.sequence}: ${f}`)};n(be(ae(s.root_public_key),t),"root key changed");const a=Xe(ae(s.wire_cbor)),o=Me(ae(s.certificate_cbor)),c={...Me(o.body),root_signature:o.signature};Hi(c,t,a.audit_time_ms,!0),n(c.role===ft.MatOperator&&(c.allowed_scopes&We.ScoreMat)!==0&&c.certificate_id===a.certificate_id&&c.subject_key_id===a.signer_key_id&&c.tournament_id===a.tournament_id&&c.allowed_stream_id===a.stream_id&&c.assignment_revision===a.assignment_revision&&a.audit_time_ms>=c.issued_at_ms,"certificate scope mismatch");const l=ma(a);n(Pe(Ut,l,c.subject_pubkey,a.signature),"signature mismatch"),n(be(ua(Ut,l,a.signature),a.event_id),"event ID mismatch"),n(be(Pc(a),ae(s.wire_cbor)),"wire round trip differs");const h=a.payload,d=h.command,u=h.projection.state;n(be(xe(d),ae(s.command_cbor)),"unsigned command differs"),n(be(xe(u),ae(s.state_cbor)),"unsigned state differs"),n(a.match_id===s.match&&a.sequence===s.sequence&&a.monotonic_time_ns===s.at_ms*1e6,"trace identity/time mismatch");const m=`${a.tournament_id}:${a.match_id}`;let p=i.get(m);return d.kind===0&&(n(a.sequence===1&&(!p||a.assignment_revision>p.assignment_revision),"assignment replay"),p=void 0),n(a.sequence===(p?.sequence??0)+1&&be(a.previous_event_hash,p?.event_id??new Uint8Array(32)),"hash chain gap"),n(!p||a.authority_epoch>=p.authority_epoch,"authority epoch regressed"),Me(ae(s.command_cbor)),Me(ae(s.state_cbor)),i.set(m,a),a})}function td(r,e,t){const i=ed(r,t);if(Me(ae(e),{maxBytes:1024*1024}).closed!==!0)throw new Error("Native campaign did not close");return i.map((n,a)=>{const o=r[a],c=Me(ae(o.certificate_cbor)),l=Me(c.body),d=n.payload.projection;if(!d||!d.state||!Array.isArray(d.timers))throw new Error("Native projection missing");return{line:o,event:n,matId:Number(l.assigned_mat_id),projection:d,state:d.state,timer:d.timers[0]}})}const wn=[{teamId:"SBHS",teamName:"Santa Barbara High School"},{teamId:"DPHS",teamName:"Dos Pueblos High School"},{teamId:"SMHS",teamName:"San Marcos High School"},{teamId:"VHS",teamName:"Ventura High School"},{teamId:"BHS",teamName:"Buena High School"},{teamId:"OHS",teamName:"Oxnard High School"},{teamId:"PHS",teamName:"Pacifica High School"},{teamId:"RMHS",teamName:"Rio Mesa High School"},{teamId:"LOMP",teamName:"Lompoc High School"},{teamId:"CABR",teamName:"Cabrillo High School"},{teamId:"SYHS",teamName:"Santa Ynez High School"},{teamId:"OAHS",teamName:"Orcutt Academy High School"}],id=["NOVICE","JV","VARSITY","GIRLS","BOYS","U16","U18"],nd=["106","113","120","126","132","138","144","150","157","165","175","190","215","285"],sd=["100","107","114","120","126","132","138","145","152","165","175","185","205","235"],rd=2500;function ad(r){const e=(r??"").trim().toUpperCase();return e.includes("GIRL")||e==="F"||e==="W"?sd:nd}function je(r,e){return typeof r!="string"?"":r.replace(/[\u0000-\u001F\u007F]/g," ").replace(/\s+/g," ").trim().slice(0,e)}function Wt(r){return/^SR-[0-9A-F]{16}$/.test(r.trim().toUpperCase())}function Ci(r){const e=r.trim().toUpperCase();if(!Wt(e))throw new Error(`Invalid self-registration ID: ${r}`);return`ATH-${e}`}function Ln(r,e="channel-league-novice-2026-11-20",t=Date.now()){if(!r||typeof r!="object")throw new Error("Self-registration payload must be an object");const i=r,s=je(i.registration_id,32).toUpperCase();if(!Wt(s))throw new Error("Registration ID must match format SR-<16 hex characters>");const n=je(i.tournament_id,64)||je(e,64);if(!n||!/^[A-Za-z0-9][A-Za-z0-9_-]{1,63}$/.test(n))throw new Error("Valid tournament ID is required");let a=je(i.first_name,48),o=je(i.last_name,48);const c=je(i.public_display_name,96);if((!a||!o)&&c){const y=c.split(" ");!a&&y.length>0&&(a=y[0].slice(0,48)),!o&&y.length>1&&(o=y.slice(1).join(" ").slice(0,48))}if(!a)throw new Error("First name is required");if(!o)throw new Error("Last name is required");const l=`${a} ${o}`.slice(0,96),h=je(i.team_name,80),d=je(i.team_id,12).toUpperCase().replace(/[^A-Z0-9_-]/g,"").slice(0,8),u=h?wn.find(y=>y.teamName.toLowerCase()===h.toLowerCase()||h.length>=4&&y.teamId===d&&y.teamName.toLowerCase().startsWith(h.toLowerCase()+" ")):void 0,m=h?void 0:wn.find(y=>y.teamId===d),p=u??m;let _=p?.teamId??(d.length>=2?d:"");const f=p?.teamName??h;if(!p&&_&&wn.some(y=>y.teamId===_)){let y=0;for(let D=0;D<f.length;D++)y=y*31+f.toUpperCase().charCodeAt(D)>>>0;const I=(y%90+10).toString();_=`${_.slice(0,6)}${I}`}if(!_||_.length<2)throw new Error("School or team code (2 to 8 characters) is required");if(!f||f.length<2)throw new Error("School or team name is required");const g=je(i.division_id,24).toUpperCase()||"NOVICE";if(!id.includes(g))throw new Error(`Unsupported division: ${g}`);const w=je(i.weight_class_id,8);if(!ad(g).includes(w))throw new Error(`Unsupported NFHS weight class: ${w}`);const b=Number(i.revision??1),A=Number.isInteger(b)&&b>=1&&b<=1e4?b:1,S=Number(i.submitted_at_ms??t),E=Number.isFinite(S)&&S>0?Math.trunc(S):t,C=Number(i.updated_at_ms??0),$=Number.isFinite(C)&&C>=0?Math.trunc(C):0;return{registration_id:s,tournament_id:n,first_name:a,last_name:o,public_display_name:l,team_id:_,team_name:f,division_id:g,weight_class_id:w,revision:A,submitted_at_ms:E,updated_at_ms:$}}function dr(r){const e=r.baseRegisterUrl.trim().replace(/\/+$/,""),t=new URLSearchParams({tid:r.tournamentId.trim(),name:r.tournamentName.trim()});return r.defaultDivision?.trim()&&t.set("div",r.defaultDivision.trim().toUpperCase()),r.apiOrigin?.trim()&&t.set("origin",r.apiOrigin.trim().replace(/\/+$/,"")),`${e}/?${t.toString()}`}function Dn(r,e="channel-league-novice-2026-11-20"){const t=r.trim();if(!t)return{valid:!1,reason:"Empty QR token"};if(Wt(t))return{valid:!0,reason:"Matched self-registration ID",registrationIdOnly:t.toUpperCase()};try{let i=null;if(t.toLowerCase().startsWith("openmat://self-register")){const l=t.indexOf("?");if(l<0)return{valid:!1,reason:"Missing self-registration query parameters"};i=new URLSearchParams(t.slice(l+1))}else if(t.startsWith("http://")||t.startsWith("https://")){const l=new URL(t),h=new URLSearchParams(l.search),d=l.hash.replace(/^#\/?\??/,"").trim();if(d){const m=new URLSearchParams(d);for(const[p,_]of m.entries())h.has(p)||h.set(p,_)}const u=h.get("selfreg");if(u&&u.toLowerCase().startsWith("openmat://self-register"))return Dn(u,e);(h.has("sr")||h.has("rid"))&&(i=h)}if(!i)return{valid:!1,reason:"Not a wrestler self-registration QR code"};const s=(i.get("rid")??i.get("sr")??"").trim().toUpperCase();if(!s)return{valid:!1,reason:"Missing registration ID in QR code"};if(!!!(i.get("fn")&&i.get("ln")&&i.get("wc"))&&Wt(s))return{valid:!0,reason:"Matched self-registration ID",registrationIdOnly:s,tournamentId:i.get("tid")||void 0};const a=Number(i.get("u")??i.get("ts")??"0"),o=Number.isFinite(a)&&a>=0?a:0;return{valid:!0,reason:"Decoded wrestler self-registration QR pass",record:Ln({registration_id:s,tournament_id:i.get("tid")??e,first_name:i.get("fn")??"",last_name:i.get("ln")??"",team_id:i.get("tc")??"",team_name:i.get("tn")??"",division_id:i.get("dv")??"NOVICE",weight_class_id:i.get("wc")??"",revision:Number(i.get("rv")??"1"),submitted_at_ms:o,updated_at_ms:o},e,o)}}catch(i){return{valid:!1,reason:i instanceof Error?i.message:String(i)}}}const od=["106","113","120","126","132","138","144","150","157","165","175","190","215","285"],hr=[{teamId:"SBHS",teamName:"Santa Barbara High School"},{teamId:"DPHS",teamName:"Dos Pueblos High School"},{teamId:"SMHS",teamName:"San Marcos High School"},{teamId:"VHS",teamName:"Ventura High School"},{teamId:"BHS",teamName:"Buena High School"},{teamId:"OHS",teamName:"Oxnard High School"},{teamId:"PHS",teamName:"Pacifica High School"},{teamId:"RMHS",teamName:"Rio Mesa High School"},{teamId:"CIHS",teamName:"Channel Islands High School"},{teamId:"HHS",teamName:"Hueneme High School"},{teamId:"ACHS",teamName:"Adolfo Camarillo High School"},{teamId:"TOHS",teamName:"Thousand Oaks High School"},{teamId:"NPHS",teamName:"Newbury Park High School"},{teamId:"WHS",teamName:"Westlake High School"},{teamId:"MHS",teamName:"Moorpark High School"},{teamId:"SYHS",teamName:"Santa Ynez Valley Union High School"}],ur=["Jordan","Marcus","Mateo","Liam","Carlos","Noah","Ethan","Diego","Lucas","Julian","Caleb","Adrian","Gavin","Isaac","Owen","Devon","Logan","Sebastian","Eli","Xavier","Dominic","Hector","Nathan","Cole","Victor","Wesley","Damian","Micah","Rafael","Tristan","Brody","Kai"],_r=["Rivera","Vance","Delgado","Sullivan","Mendoza","Takahashi","Castillo","Bennett","Morales","Navarro","Kowalski","Salazar","Patel","Brooks","Herrera","Kim","Ortega","Campbell","Guerrero","Foster","Espinoza","Reed","Sandoval","Hayes","Cabrera","Murphy","Rios","Wallace"];function cd(r){const e=String(r);return/[",\r\n]/.test(e)||e.startsWith("#")?`"${e.replace(/"/g,'""')}"`:e}function ld(r="NOVICE"){const e=(r||"NOVICE").trim().toUpperCase(),t=["# OpenMat Full 16-Bracket Onboarding Demo Roster Template (DemoTemplate.csv)","# Contains 224 wrestlers across all 14 NFHS weight classes (16 seeded wrestlers per weight class).","# Import this CSV on Tab 1 (Check-In and Weigh-In) to test onboarding and generate all 14 full 16-wrestler brackets.","athlete_id,public_display_name,team_id,team_name,division_id,weight_class_id,seed_rank,flowrestling_id,first_name,last_name,school_name,weight_lbs,actual_weight_lbs,grade,check_in_stage,weigh_in_eligible,medically_cleared,medical_decision,medical_reviewer,scale_station_id,scale_id,bracket_frozen,bracket_format,opaque_pass_token"];return od.forEach((i,s)=>{for(let n=0;n<16;n++){const a=n+1,o=String(a).padStart(2,"0"),c=hr[(n+s)%hr.length],l=ur[(n+s%2*16)%ur.length],h=_r[(s+n)%_r.length],d=`${l} ${h}`,u=`ATH-${e}-${i}-${c.teamId}-${o}`,m=`FLO-26${i}${o}`,p=String(9+(n+s)%2),_=`PASS-${e}-${i}-${c.teamId}-${o}`,f=[u,d,c.teamId,c.teamName,e,i,a,m,l,h,c.teamName,i,"",p,"","","","","","","","","",_].map(cd);t.push(f.join(","))}}),t.join(`
`)+`
`}const bi=0,Q=1,it=2,Gt=3,Mi=4,Ae=5,nt=6,dd=(()=>{const r=new Uint32Array(256);for(let e=0;e<256;e++){let t=e;for(let i=0;i<8;i++)t=(t&1)!==0?3988292384^t>>>1:t>>>1;r[e]=t>>>0}return r})();function hd(r){let e=4294967295;for(let t=0;t<r.length;t++)e=dd[(e^r[t])&255]^e>>>8;return(e^4294967295)>>>0}function Qt(r){return r.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ud(r){let e=r+1,t="";for(;e>0;){const i=(e-1)%26;t=String.fromCharCode(65+i)+t,e=Math.floor((e-1)/26)}return t}function H(r,e=bi){return{kind:"str",value:r,style:e}}function ye(r,e=bi){return{kind:"num",value:Number.isFinite(r)?r:0,style:e}}function Ie(r,e,t=bi){return{kind:"formula-str",formula:r,value:e,style:t}}function ze(r,e,t=bi){return{kind:"formula-num",formula:r,value:Number.isFinite(e)?e:0,style:t}}function _d(r){const e=r.colWidths.length>0?`<cols>${r.colWidths.map((n,a)=>`<col min="${a+1}" max="${a+1}" width="${n}" customWidth="1"/>`).join("")}</cols>`:"",t=r.freezeHeader?'<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>':'<sheetViews><sheetView workbookViewId="0"/></sheetViews>',i=[];for(let n=0;n<r.rows.length;n++){const a=r.rows[n],o=n+1,c=[];for(let l=0;l<a.length;l++){const h=a[l];if(!h)continue;const d=`${ud(l)}${o}`,u=h.style??bi;if(h.kind==="str"){const m=String(h.value??"");c.push(`<c r="${d}" s="${u}" t="inlineStr"><is><t xml:space="preserve">${Qt(m)}</t></is></c>`)}else h.kind==="num"?c.push(`<c r="${d}" s="${u}"><v>${Number(h.value)}</v></c>`):h.kind==="formula-str"?c.push(`<c r="${d}" s="${u}" t="str"><f>${Qt(h.formula??"")}</f><v>${Qt(String(h.value??""))}</v></c>`):h.kind==="formula-num"&&c.push(`<c r="${d}" s="${u}"><f>${Qt(h.formula??"")}</f><v>${Number(h.value)}</v></c>`)}i.push(`<row r="${o}">${c.join("")}</row>`)}const s=r.landscape?'<pageSetup orientation="landscape" fitToWidth="1" fitToHeight="0"/>':"";return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'+t+'<sheetFormatPr defaultRowHeight="19"/>'+e+`<sheetData>${i.join("")}</sheetData><pageMargins left="0.4" right="0.4" top="0.5" bottom="0.5" header="0.25" footer="0.25"/>`+s+"</worksheet>"}function md(){return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="164" formatCode="0.0"/></numFmts><fonts count="5"><font><sz val="10"/><color rgb="FF0F172A"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FF0F172A"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FF991B1B"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FF166534"/><name val="Calibri"/></font></fonts><fills count="7"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF1E293B"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFEF3C7"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFEE2E2"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFDCFCE7"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE2E8F0"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border><border><left style="thin"><color rgb="FFCBD5E1"/></left><right style="thin"><color rgb="FFCBD5E1"/></right><top style="thin"><color rgb="FFCBD5E1"/></top><bottom style="thin"><color rgb="FFCBD5E1"/></bottom><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="7"><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="164" fontId="2" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyBorder="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>'}function pd(r){const e=new TextEncoder,t=r.map(p=>{const _=e.encode(p.path),f=hd(p.data);return{nameBytes:_,data:p.data,crc:f}});let i=0,s=0;for(const p of t)i+=30+p.nameBytes.length+p.data.length,s+=46+p.nameBytes.length;const n=i+s+22,a=new Uint8Array(n),o=new DataView(a.buffer),c=16384,l=23924;let h=0;const d=[];for(const p of t)d.push(h),o.setUint32(h,67324752,!0),o.setUint16(h+4,20,!0),o.setUint16(h+6,2048,!0),o.setUint16(h+8,0,!0),o.setUint16(h+10,c,!0),o.setUint16(h+12,l,!0),o.setUint32(h+14,p.crc,!0),o.setUint32(h+18,p.data.length,!0),o.setUint32(h+22,p.data.length,!0),o.setUint16(h+26,p.nameBytes.length,!0),o.setUint16(h+28,0,!0),a.set(p.nameBytes,h+30),a.set(p.data,h+30+p.nameBytes.length),h+=30+p.nameBytes.length+p.data.length;const u=h;for(let p=0;p<t.length;p++){const _=t[p];o.setUint32(h,33639248,!0),o.setUint16(h+4,20,!0),o.setUint16(h+6,20,!0),o.setUint16(h+8,2048,!0),o.setUint16(h+10,0,!0),o.setUint16(h+12,c,!0),o.setUint16(h+14,l,!0),o.setUint32(h+16,_.crc,!0),o.setUint32(h+20,_.data.length,!0),o.setUint32(h+24,_.data.length,!0),o.setUint16(h+28,_.nameBytes.length,!0),o.setUint16(h+30,0,!0),o.setUint16(h+32,0,!0),o.setUint16(h+34,0,!0),o.setUint16(h+36,0,!0),o.setUint32(h+38,0,!0),o.setUint32(h+42,d[p],!0),a.set(_.nameBytes,h+46),h+=46+_.nameBytes.length}const m=h-u;return o.setUint32(h,101010256,!0),o.setUint16(h+4,0,!0),o.setUint16(h+6,0,!0),o.setUint16(h+8,t.length,!0),o.setUint16(h+10,t.length,!0),o.setUint32(h+12,m,!0),o.setUint32(h+16,u,!0),o.setUint16(h+20,0,!0),a}function It(r){return`#${r.seed_rank} ${r.public_display_name} (${r.team_id})`}function fd(r){return r.is_true_second_challenge?"True 2nd":r.is_placement_bout&&r.placement_rank===1?"1st Place":r.is_placement_bout&&r.placement_rank===3?"3rd Place":r.is_placement_bout&&r.placement_rank===5?"5th Place":r.is_placement_bout&&r.placement_rank===7?"7th Place":r.format===X.RoundRobinPool?"Pool":r.format===X.BestOfThree?"Best of 3":r.is_consolation?"Cons":"Champ"}function Va(r,e,t,i,s){return r.map(({corner:n,points:a,roundBouts:o})=>{const c=o.map(l=>{const h=e.get(l.match_id),d=s+h,u=i+h;return`AND(OR(${u}="R",${u}="G"),${d}<>"FF",${d}<>"FORFEIT",${d}<>"MEDICAL_FORFEIT",${d}<>"BYE")`});return`+IF(AND(${i}${t}="${n}",OR(${c.join(",")})),${a},0)`}).join("")}function Fn(r,e){const t=r.is_consolation?1:2,i=(r.win_type||"DEC").toUpperCase(),s=i==="FALL"||i==="PIN"||i==="FORFEIT"||i==="FF"||i==="INJURY_DEFAULT"||i==="DQ"?2:i==="TF"?1.5:i==="MD"?1:0,n=r.is_placement_bout&&r.placement_rank===1?16:r.is_placement_bout&&r.placement_rank===3?9:0;return t+e+s+n}function gd(r){const e=new Map(r.athletes.map(v=>[v.athlete_id,v])),t=[...r.bouts].sort((v,R)=>v.bout_number-R.bout_number||v.match_id.localeCompare(R.match_id)),i=t.filter(v=>!v.is_bye),s=pi(t,Hn),n=new Map(t.map(v=>[v.match_id,v])),a=new Map;i.forEach((v,R)=>{a.set(v.match_id,R+2)});const o=r.rules_version===fs?"Novice / JV (1:00 / 2:00 / 2:00)":"Varsity (2:00 / 2:00 / 2:00)",c=[[H("OPENMAT EMERGENCY OFFLINE FALLBACK WORKBOOK",Q),H("VALUE / ACTION",Q)],[H("Tournament Name",Ae),H(r.tournament_name||"OpenMat Tournament")],[H("Event Date",Ae),H(r.event_date||"")],[H("Venue",Ae),H(r.venue||"")],[H("Match Periods",Ae),H(o)],[H("Active Mats",Ae),ye(r.mat_count)],[H("Weight Allowance (lbs)",Ae),ye(r.growth_allowance_tenths/10,nt)],[H("Registered Wrestlers",Ae),ye(r.athletes.length)],[H("Contested Bouts",Ae),ye(i.length)],[],[H("EMERGENCY SINGLE-LAPTOP + PAPER RUNNER WORKFLOW",Q),H("INSTRUCTIONS",Q)],[H("1. Mat Devices -> Practice Mode",Ae),H(`Open Scorekeeper on each mat phone or tablet and tap Start Practice Mode (${o}). Connect HDMI TVs directly if available.`)],[H("2. Send Paper Slips to Mats",Ae),H("Print paper runner slips from the Standalone Fallback HTML app or print the Brackets by Weight tab for mat tables.")],[H("3. Record Runner Slips Here",Ae),H("Open the Bout Runner Log tab. Enter Red Pts (Col I), Green Pts (Col J), Winner R or G (Col K), and Win Type (Col L) in the yellow cells.")],[H("4. Automatic Bracket Advancement",Ae),H("Excel formulas automatically advance winners and losers into downstream Championship, Consolation, and Placement bouts.")],[H("5. Valid Win Type Codes",Ae),H("FALL (or PIN), TF, MD, DEC, FORFEIT (or FF), INJURY_DEFAULT, DQ")],[H("6. 30-Minute NFHS Rest Rule",Ae),H("Write completion time in Col M (Time Done). Verify 30 minutes of recovery before calling a wrestler back to a mat.")]],h=[[H("Bout #",Q),H("Mat",Q),H("Division",Q),H("Weight",Q),H("Round",Q),H("Type",Q),H("Red Corner",Q),H("Green Corner",Q),H("Red Pts (Input)",Q),H("Green Pts (Input)",Q),H("Winner R/G (Input)",Q),H("Win Type (Input)",Q),H("Time Done",Q),H("Winning Wrestler",Q),H("Winning Team",Q),H("Team Pts",Q),H("Red Team",Q),H("Green Team",Q),H("Next Routing",Q)]],d=v=>{if(v.format===X.BestOfThree)return{};const R=i.filter(k=>k.bracket_id===v.bracket_id&&(k.winner_next_match_id===v.match_id||k.loser_next_match_id===v.match_id)).sort((k,T)=>k.bout_number-T.bout_number||k.match_id.localeCompare(T.match_id));if(R.length===0)return{};if(R.length===1){const k=R[0];if(v.red_athlete_id&&!v.green_athlete_id)return{greenFeeder:k};if(!v.red_athlete_id&&v.green_athlete_id)return{redFeeder:k};const T=k.winner_athlete_id,O=k.loser_athlete_id,P=k.winner_next_match_id===v.match_id?T:O;return P&&v.green_athlete_id===P?{greenFeeder:k}:{redFeeder:k}}return{redFeeder:R[0],greenFeeder:R[1]}};for(let v=0;v<i.length;v++){const R=i[v],k=v+2,T=R.red_athlete_id?e.get(R.red_athlete_id):void 0,O=R.green_athlete_id?e.get(R.green_athlete_id):void 0,{redFeeder:P,greenFeeder:W}=d(R);let G,F;if(P&&a.has(P.match_id)){const ie=a.get(P.match_id),te=P.winner_next_match_id===R.match_id,he=`${te?"Winner":"Loser"} #${P.bout_number}`,pe=T?It(T):he,Ce=T?.team_id??"";G=Ie(te?`IF(K${ie}="R",G${ie},IF(K${ie}="G",H${ie},"${he}"))`:`IF(K${ie}="R",H${ie},IF(K${ie}="G",G${ie},"${he}"))`,pe,Gt),F=Ie(te?`IF(K${ie}="R",Q${ie},IF(K${ie}="G",R${ie},""))`:`IF(K${ie}="R",R${ie},IF(K${ie}="G",Q${ie},""))`,Ce)}else G=H(T?It(T):R.red_athlete_id||"TBD",Gt),F=H(T?.team_id??"");let q,V;if(W&&a.has(W.match_id)){const ie=a.get(W.match_id),te=W.winner_next_match_id===R.match_id,he=`${te?"Winner":"Loser"} #${W.bout_number}`,pe=O?It(O):he,Ce=O?.team_id??"";q=Ie(te?`IF(K${ie}="R",G${ie},IF(K${ie}="G",H${ie},"${he}"))`:`IF(K${ie}="R",H${ie},IF(K${ie}="G",G${ie},"${he}"))`,pe,Mi),V=Ie(te?`IF(K${ie}="R",Q${ie},IF(K${ie}="G",R${ie},""))`:`IF(K${ie}="R",R${ie},IF(K${ie}="G",Q${ie},""))`,Ce)}else q=H(O?It(O):R.green_athlete_id||"TBD",Mi),V=H(O?.team_id??"");const z=de(R),L=z?R.winner_athlete_id===R.red_athlete_id?"R":R.winner_athlete_id===R.green_athlete_id?"G":"":"",j=z?(R.win_type||"DEC").toUpperCase():"",Y=L==="R"?String(G.value):L==="G"?String(q.value):"",K=L==="R"?String(F.value):L==="G"?String(V.value):"",ee=s.get(R.match_id),ne=(R.is_consolation?1:2)+Va(ee?.conditions??[],a,k,"K","L"),_e=R.is_placement_bout&&R.placement_rank===1?16:R.is_placement_bout&&R.placement_rank===3?9:0,ve=`IF(O${k}="",0,${ne}+IF(OR(L${k}="FALL",L${k}="PIN",L${k}="FORFEIT",L${k}="FF",L${k}="INJURY_DEFAULT",L${k}="INJ",L${k}="DQ"),2,IF(L${k}="TF",1.5,IF(L${k}="MD",1,0)))+${_e})`,ce=R.winner_next_match_id?n.get(R.winner_next_match_id):void 0,me=R.loser_next_match_id?n.get(R.loser_next_match_id):void 0,Z=[];ce&&!ce.is_bye&&Z.push(`Win -> #${ce.bout_number}`),me&&!me.is_bye&&Z.push(`Loss -> #${me.bout_number}`);const Re=Z.join(" | ")||(R.is_placement_bout?`Medal (#${R.placement_rank})`:"Pool / End"),on=z&&R.completed_at_ms>0?new Date(R.completed_at_ms).toISOString().slice(11,16)+" UTC":"";h.push([ye(R.bout_number),ye(R.assigned_mat_id||1,it),H((R.division_id||"VARSITY").toUpperCase()),H(R.weight_class_id),H(R.round_label),H(fd(R)),G,q,z||R.red_score>0||R.lifecycle>=M.InProgress?ye(R.red_score,it):H("",it),z||R.green_score>0||R.lifecycle>=M.InProgress?ye(R.green_score,it):H("",it),H(L,it),H(j,it),H(on,it),Ie(`IF(K${k}="R",G${k},IF(K${k}="G",H${k},""))`,Y),Ie(`IF(K${k}="R",Q${k},IF(K${k}="G",R${k},""))`,K),ze(ve,L?Fn(R,ee?.earnedPoints??0):0,nt),F,V,H(Re)])}i.length===0&&h.push([H("No bouts generated yet. Generate brackets in OpenMat or use the Standalone Fallback HTML app.")]);const u=new Map;for(const v of r.athletes)v.team_id&&!u.has(v.team_id)&&u.set(v.team_id,v.team_name||v.team_id);const m=[...u.keys()].sort((v,R)=>(u.get(v)??v).localeCompare(u.get(R)??R)),p=new Map;for(const v of t)if(v.is_bye&&v.is_placement_bout&&v.placement_rank===1&&!v.green_athlete_id&&v.winner_athlete_id){const R=e.get(v.winner_athlete_id);R&&p.set(R.team_id,(p.get(R.team_id)??0)+1)}const _=[[H("Team Code",Q),H("School / Team Name",Q),H("Total Points",Q),H("Bout Points",Q),H("Walkover Pts",Q),H("Bout Wins",Q),H("Falls / FF / DQ",Q),H("Tech Falls",Q),H("Major Decisions",Q),H("Champions (1st)",Q)]],f=Math.max(2,i.length+1);m.forEach((v,R)=>{const k=R+2,T=u.get(v)??v,O=p.get(v)??0,P=O*16;let W=0,G=0,F=0,q=0,V=0,z=0;for(const L of i){if(!de(L)||!L.winner_athlete_id)continue;const j=e.get(L.winner_athlete_id);if(!j||j.team_id!==v)continue;G+=1,W+=Fn(L,s.get(L.match_id)?.earnedPoints??0);const Y=(L.win_type||"DEC").toUpperCase();Y==="FALL"||Y==="PIN"||Y==="FORFEIT"||Y==="FF"||Y==="INJURY_DEFAULT"||Y==="DQ"?F+=1:Y==="TF"?q+=1:Y==="MD"&&(V+=1),L.is_placement_bout&&L.placement_rank===1&&(z+=1)}if(i.length===0)_.push([H(v,Ae),H(T),ye(P,nt),ye(0,nt),ye(P,nt),ye(0),ye(0),ye(0),ye(0),ye(O)]);else{const L=`'Bout Runner Log'!$O$2:$O$${f}`,j=`'Bout Runner Log'!$P$2:$P$${f}`,Y=`'Bout Runner Log'!$L$2:$L$${f}`,K=`'Bout Runner Log'!$F$2:$F$${f}`;_.push([H(v,Ae),H(T),ze(`D${k}+E${k}`,W+P,nt),ze(`SUMIF(${L},A${k},${j})`,W,nt),ye(P,nt),ze(`COUNTIF(${L},A${k})`,G),ze(`COUNTIFS(${L},A${k},${Y},"FALL")+COUNTIFS(${L},A${k},${Y},"PIN")+COUNTIFS(${L},A${k},${Y},"FORFEIT")+COUNTIFS(${L},A${k},${Y},"FF")+COUNTIFS(${L},A${k},${Y},"INJURY_DEFAULT")+COUNTIFS(${L},A${k},${Y},"DQ")`,F),ze(`COUNTIFS(${L},A${k},${Y},"TF")`,q),ze(`COUNTIFS(${L},A${k},${Y},"MD")`,V),ze(`COUNTIFS(${L},A${k},${K},"1st Place")+${O}`,z+O)])}});const g=[[H("Weight Class",Q),H("Round",Q),H("Bout #",Q),H("Mat",Q),H("Red Corner",Q),H("Red Pts",Q),H("Green Corner",Q),H("Green Pts",Q),H("Winner",Q),H("Win Type",Q)]],w=new Map;for(const v of t){const R=`${(v.division_id||"VARSITY").toUpperCase()} ${v.weight_class_id} lbs`,k=w.get(R)??[];k.push(v),w.set(R,k)}const b=[...w.keys()].sort((v,R)=>{const[k,T]=v.split(" "),[O,P]=R.split(" ");return(k||"").localeCompare(O||"")||Number(T)-Number(P)});for(const v of b){const R=(w.get(v)??[]).sort((k,T)=>Number(k.is_consolation)-Number(T.is_consolation)||k.round_index-T.round_index||k.bout_number-T.bout_number);g.push([H(`=== ${v} (${R[0]?.format??""}) ===`,Ae)]);for(const k of R){if(k.is_bye){const P=k.red_athlete_id?e.get(k.red_athlete_id):void 0;if(!P)continue;g.push([H(v),H(k.round_label),ye(k.bout_number),ye(k.assigned_mat_id||1),H(It(P),Gt),H("—"),H("BYE"),H("—"),H(It(P)),H("BYE")]);continue}const T=a.get(k.match_id),O=h[T-1];g.push([H(v),H(k.round_label),ze(`'Bout Runner Log'!A${T}`,k.bout_number),ze(`'Bout Runner Log'!B${T}`,k.assigned_mat_id||1),Ie(`'Bout Runner Log'!G${T}`,String(O[6]?.value??""),Gt),Ie(`'Bout Runner Log'!I${T}&""`,String(O[8]?.value??"")),Ie(`'Bout Runner Log'!H${T}`,String(O[7]?.value??""),Mi),Ie(`'Bout Runner Log'!J${T}&""`,String(O[9]?.value??"")),Ie(`'Bout Runner Log'!N${T}`,String(O[13]?.value??"")),Ie(`'Bout Runner Log'!L${T}`,String(O[11]?.value??""))])}g.push([])}const A=[[H("Division",Q),H("Weight Class",Q),H("Seed #",Q),H("Wrestler Name",Q),H("Team Code",Q),H("School Name",Q),H("Eligibility Status",Q),H("Athlete ID",Q)]],S=[...r.athletes].sort((v,R)=>(v.division_id||"VARSITY").localeCompare(R.division_id||"VARSITY")||Number(v.weight_class_id)-Number(R.weight_class_id)||v.seed_rank-R.seed_rank||v.public_display_name.localeCompare(R.public_display_name));for(const v of S){const R=v.check_in_stage===J.Eligible&&v.weigh_in_eligible&&v.medically_cleared;A.push([H((v.division_id||"VARSITY").toUpperCase()),H(v.weight_class_id),ye(v.seed_rank),H(v.public_display_name),H(v.team_id),H(v.team_name),H(R?"ELIGIBLE":qi[v.check_in_stage]??"PENDING"),H(v.athlete_id)])}const E=[{id:"rIdGuide",partName:"worksheets/guide.xml",sheetName:"Emergency Guide",freezeHeader:!0,colWidths:[34,96],rows:c,landscape:!0},{id:"rIdBouts",partName:"worksheets/bouts.xml",sheetName:"Bout Runner Log",freezeHeader:!0,colWidths:[8,7,11,8,28,11,28,28,13,13,16,16,12,28,13,10,10,10,24],rows:h,landscape:!0},{id:"rIdStandings",partName:"worksheets/standings.xml",sheetName:"Team Standings",freezeHeader:!0,colWidths:[12,30,14,14,14,12,14,12,15,15],rows:_},{id:"rIdBrackets",partName:"worksheets/brackets.xml",sheetName:"Brackets by Weight",freezeHeader:!0,colWidths:[18,28,9,7,28,10,28,10,28,14],rows:g,landscape:!0},{id:"rIdRoster",partName:"worksheets/roster.xml",sheetName:"Roster & Seeds",freezeHeader:!0,colWidths:[12,13,9,26,12,28,18,24],rows:A}],C='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'+E.map(v=>`<Override PartName="/xl/${v.partName}" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("")+"</Types>",$='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdWorkbook" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',y=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><workbookViews><workbookView activeTab="1"/></workbookViews><sheets>${E.map((v,R)=>`<sheet name="${Qt(v.sheetName)}" sheetId="${R+1}" r:id="${v.id}"/>`).join("")}</sheets><calcPr fullCalcOnLoad="1"/></workbook>`,I='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'+E.map(v=>`<Relationship Id="${v.id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="${v.partName}"/>`).join("")+"</Relationships>",D=new TextEncoder,x=[{path:"[Content_Types].xml",data:D.encode(C)},{path:"_rels/.rels",data:D.encode($)},{path:"xl/workbook.xml",data:D.encode(y)},{path:"xl/_rels/workbook.xml.rels",data:D.encode(I)},{path:"xl/styles.xml",data:D.encode(md())},...E.map(v=>({path:`xl/${v.partName}`,data:D.encode(_d(v))}))];return pd(x)}function mr(r,e=Date.now()){if(!r)return{version:1,revision:1,updated_at_ms:e,tournament_id:re.tournamentId,tournament_name:re.tournamentName,event_date:re.eventDate,venue:re.venue,rules_version:re.rulesVersion,mat_count:re.matCount,growth_allowance_tenths:re.growthAllowanceTenths,consecutive_day_allowance_tenths:0,required_rest_ms:1800*1e3,bracket_frozen_by_class:[],athletes:[],bouts:[],weigh_ins:{},medicals:{}};const t={};for(const[o,c]of r.privateWeighIns.entries())t[o]={station_id:c.station_id,scale_id:c.scale_id,measured_weight_tenths:c.measured_weight_tenths};const i={};for(const[o,c]of r.privateMedicals.entries())i[o]={reviewer_id:c.reviewer_id,decision:c.decision};const s=Array.from(r.bouts.values()).map(o=>structuredClone(o)),n=Array.from(r.athletes.values()).map(o=>structuredClone(o)),a=s.filter(o=>!o.is_bye&&!!o.winner_athlete_id).length;return{version:1,revision:Math.max(1,r.snapshotEpoch,r.controlSequenceHead,a+1),updated_at_ms:e,tournament_id:r.tournamentId,tournament_name:r.tournamentName,event_date:r.eventDate,venue:r.venue,rules_version:r.rulesVersion,mat_count:r.matCount,growth_allowance_tenths:r.growthAllowanceTenths,consecutive_day_allowance_tenths:r.consecutiveDayAllowanceTenths,required_rest_ms:r.requiredRestMs,bracket_frozen_by_class:Array.from(r.bracketFrozenByClass.entries()),athletes:n,bouts:s,weigh_ins:t,medicals:i}}function qa(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function bd(r){return JSON.stringify(r).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026")}const yd=`
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
`;function wd(r){return`  <header class="topbar">
    <div>
      <div class="eyebrow">
        <span class="pill warn" id="hdr-mode-pill">OFFLINE FALLBACK</span>
        <span id="hdr-save-status">Saved in browser</span>
        <span id="hdr-progress-summary">0 / 0 Bouts</span>
      </div>
      <h1 id="hdr-tournament-title">${qa(r||"OpenMat Emergency Fallback Tournament")}</h1>
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

  <dialog id="fallback-correction-dialog" aria-label="Correct or reopen bout result"></dialog>`}function vd(){const r=JSON.stringify(Sd),e=JSON.stringify(qi);return`(function () {
  "use strict";

  var NOVICE_RULESET = ${JSON.stringify(fs)};
  var VARSITY_RULESET = ${JSON.stringify(Ql)};
  var PRESET_SCHOOLS = ${r};
  var STAGE_LABELS = ${e};
  var BOYS_WEIGHTS = ["106","113","120","126","132","138","144","150","157","165","175","190","215","285"];
  var GIRLS_WEIGHTS = ["100","107","114","120","126","132","138","145","152","165","175","185","205","235"];
  var ALL_WEIGHTS = ["100","106","107","113","114","120","126","132","138","144","145","150","152","157","165","175","185","190","205","215","235","285"];
  var DIVISIONS = ["NOVICE","JV","VARSITY","GIRLS","BOYS","U16","U18"];
  var WIN_TYPES = ["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"];
  var PAPER_MARGINS = ${JSON.stringify(Ga)};
  var computeByeAdvancement = ${pi.toString()};
  var byeAdvancementFormula = ${Va.toString()};
  var completedBoutTeamPoints = ${Fn.toString()};

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
})();`}function kd(r){const e=qa(r.tournament_name||"OpenMat Emergency Fallback Tournament"),t=wd(r.tournament_name),i=bd(r),s=vd();return`<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${e} - Offline Emergency Fallback</title>
  <style id="openmat-fallback-styles">${yd}</style>
</head>
<body>
`+t+`
  <template id="openmat-shell-template">
${t}
  </template>
  <script id="openmat-fallback-state" type="application/json">${i}<\/script>
  <script id="openmat-fallback-runtime">${s}<\/script>
</body>
</html>
`}const Sd=[{teamId:"SBHS",teamName:"Santa Barbara High School"},{teamId:"DPHS",teamName:"Dos Pueblos High School"},{teamId:"SMHS",teamName:"San Marcos High School"},{teamId:"VHS",teamName:"Ventura High School"},{teamId:"BHS",teamName:"Buena High School"},{teamId:"OHS",teamName:"Oxnard High School"},{teamId:"PHS",teamName:"Pacifica High School"},{teamId:"RMHS",teamName:"Rio Mesa High School"}],re={tournamentId:"channel-league-novice-2026-11-20",tournamentName:"Nov 20 - Channel League Novice Tournament",eventDate:"2026-11-20",venue:"Channel League Main Gymnasium",rulesVersion:fs,growthAllowanceTenths:20,matCount:5,defaultDivision:"NOVICE"},Un=["106","113","120","126","132","138","144","150","157","165","175","190","215","285"],Ed=["100","107","114","120","126","132","138","145","152","165","175","185","205","235"],gs=["100","106","107","113","114","120","126","132","138","144","145","150","152","157","165","175","185","190","205","215","235","285"],xd=["VARSITY","JV","BOYS","GIRLS","U16","U18","NOVICE"];function si(r){const e=(r??"").trim().toUpperCase();return e==="ALL"?gs:e.includes("GIRL")||e.includes("FEMALE")||e.includes("WOMEN")||e==="W"||e==="F"?Ed:Un}const J={Expected:1,Arrived:2,WeighInPending:3,MedicalPending:4,Eligible:5,Withdrawn:6,Scratched:7},qi={1:"Expected",2:"Arrived",3:"Weigh-In Pending",4:"Medical Pending",5:"Eligible",6:"Withdrawn",7:"Scratched"},X={AutoByCount:"AUTO_BY_COUNT",BestOfThree:"BEST_OF_THREE",DoubleElimCrossover:"DOUBLE_ELIM_CROSSOVER",RoundRobinPool:"ROUND_ROBIN_POOL",PoolToBracket:"POOL_TO_BRACKET",TeamDual:"TEAM_DUAL",TrueSecondChallenge:"TRUE_SECOND_CHALLENGE"},M={PendingUpstream:1,Assigned:2,Ready:3,InProgress:4,EndedLocal:5,LocallyConfirmed:6,ResultAccepted:7,UnderProtestHold:8,InvalidatedForCorrection:9},Ga={DEC:{min:1,max:7,message:"For a decision, the winner must lead by 1 to 7 points."},MD:{min:8,max:14,message:"For a major decision, the winner must lead by 8 to 14 points."},TF:{min:15,message:"For a technical fall, the winner must lead by at least 15 points."}};function Rd(r,e){const t=Ga[r];if(t&&(e<t.min||e>(t.max??1/0)))throw new Error(t.message)}function de(r){return r.is_bye?r.lifecycle===M.ResultAccepted:!!r.winner_athlete_id&&(r.lifecycle===M.EndedLocal||r.lifecycle===M.LocallyConfirmed||r.lifecycle===M.ResultAccepted)}function Hn(r){return de(r)?r.winner_athlete_id:""}const Ad=["tournament_id","tournament_name","event_date","venue","athlete_id","wrestler_name","team_id","team_name","division_id","weight_class_lbs","seed_rank","flowrestling_id","check_in_status","weigh_in_eligible","medically_cleared","bracket_format","bracket_complete","placement","standing_rank","matches_played","wins","losses","win_pct","byes_received","championship_wins","championship_losses","consolation_wins","consolation_losses","matches_wrestled_today","prior_day_matches","wins_by_fall","wins_by_tech_fall","wins_by_major_decision","wins_by_decision","wins_by_forfeit","wins_by_injury_default","wins_by_dq","bonus_wins","bonus_win_pct","losses_by_fall","losses_by_tech_fall","losses_by_major_decision","losses_by_decision","losses_by_forfeit_default_dq","match_points_scored","match_points_allowed","match_point_differential","avg_match_points_scored","avg_match_points_allowed","event_logged_bouts","takedowns_scored","takedowns_allowed","escapes_scored","escapes_allowed","reversals_scored","reversals_allowed","near_falls_2_scored","near_falls_3_scored","near_falls_4_scored","near_falls_total_scored","near_falls_allowed","cautions_committed","stalling_calls_committed","penalties_committed","fastest_fall_sec","team_advancement_points","team_bonus_points","team_placement_points","team_points_total","ow_votes"],vn="openmat_officials_channel_league_authority",pr="openmat_officials_authority_key",jt=()=>typeof location>"u"?"http://127.0.0.1:5174":location.origin;class se{keyPair;verifiers=new Map;protocolJournal=[];knownProvisionHeads=new Set;owVotes=new Map;now;tournamentId=re.tournamentId;tournamentName=re.tournamentName;eventDate=re.eventDate;venue=re.venue;rulesVersion=re.rulesVersion;growthAllowanceTenths=re.growthAllowanceTenths;consecutiveDayAllowanceTenths=0;matCount=re.matCount;snapshotEpoch=1;controlSequenceHead=1;requiredRestMs=1800*1e3;dailyMatchCap=6;consecutiveTwoDayCap=10;athletes=new Map;pendingSelfRegistrations=new Map;selfRegistrationDispositions=new Map;selectedPendingSelfRegId="";privateWeighIns=new Map;privateMedicals=new Map;bouts=new Map;mats=new Map;revokedCertificateIds=new Set;scratches=new Map;resultCorrections=[];bracketFrozenByClass=new Map;nextBoutNumber=101;roomRouter=new Ke(re.matCount);overlayMesh=new Na({peerId:`official-${gt()}`});get livePeerId(){return this.overlayMesh.peerId}liveTransportError="";liveOrigin="";liveTournamentId="";liveTransportRole="";registryTimer=null;liveConsoleRole="primary";hasExplicitStoredRole=!1;liveTransportChain=Promise.resolve();liveTransportGeneration=0;registryChain=Promise.resolve();lastRegistryUpdatedAtMs=0;onStateChanged;static DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL="https://pureengineering.github.io/openmat";static DEFAULT_PUBLIC_OFFICIALS_WEB_BASE_URL="https://pureengineering.github.io/openmat/officials";static DEFAULT_PUBLIC_REGISTER_WEB_BASE_URL="https://pureengineering.github.io/openmat/register";static DEFAULT_PUBLIC_NOSTR_RELAYS=["wss://relay.damus.io","wss://nos.lol","wss://relay.primal.net"];publicNostrRelays=[...se.DEFAULT_PUBLIC_NOSTR_RELAYS];publicNostrRelayPublishingEnabled=!1;linkedVenuePubkeyHex="";linkedVenueJoinQrUri="";hasExternalVenueServer=!1;lastNostrPublishedAtMs=0;pendingProjections=new Map;officialsPassword=typeof window>"u"?"":new URLSearchParams(window.location.hash.slice(1)).get("password")??"";projectionFlushes=new Map;get pendingProjectionPostCount(){return this.pendingProjections.size}publicationRevision=0;publicationTournamentId="";publicationPackets=new Map;livePacketHeads=new Map;lastSyncedVenueEpochByPublisher=new Map;nostrRelayStatuses=new Map;get activeVenueOrigin(){return this.liveOrigin||jt()}setVenueOrigin(e){const t=this.activeVenueOrigin;this.liveOrigin=e,this.activeVenueOrigin!==t&&this.onStateChanged?.()}get consoleRole(){return this.liveConsoleRole}setConsoleRole(e){this.liveConsoleRole=e,this.hasExplicitStoredRole=!0,this.broadcastEnabled&&typeof localStorage<"u"&&localStorage.setItem("openmat_officials_console_role",e)}get rulesBundle(){return Xl(this.rulesVersion,this.requiredRestMs,this.dailyMatchCap,this.consecutiveTwoDayCap)}get rulesHash(){return Zl(this.rulesBundle)}async startLiveTransport(e,t=this.liveConsoleRole,i){const s=this.liveTransportGeneration,n=async()=>{if(i?.aborted||s!==this.liveTransportGeneration)return;const o=this.tournamentId,c=this.liveTransportRole!==t||this.liveOrigin!==e||this.liveTournamentId!==o;this.liveTournamentId=o,this.liveTransportRole=t,this.liveConsoleRole=t,this.setVenueOrigin(e),c&&(this.overlayMesh.stopLiveRooms(),this.livePacketHeads.clear());const l=async m=>{let p="";if(this.overlayMesh.liveRooms.has(m))return;let _;try{_=await this.overlayMesh.joinLiveRoom({origin:e,tournamentId:o,roomId:m,peerId:this.livePeerId,rootPublicKeyHex:this.publisherPublicKeyHex,publicKey:this.keyPair.publicKey,role:this.liveConsoleRole,sign:f=>Ve(ke,f,this.keyPair.privateKey),onMembership:f=>{this.syncVenueRoomRouter();const g=this.overlayMesh.liveRooms.get(m),w=JSON.stringify([g?.reconnectCount,f.map(b=>b.peer_id).sort()]);s===this.liveTransportGeneration&&t==="primary"&&m.startsWith("subtree:")&&w!==p&&(p=w,this.livePacketHeads.delete(m),this.broadcastLiveRooms(JSON.stringify(this.buildSignedPublicProjection())))},onError:f=>{this.liveTransportError=f.message},onMessage:(f,g)=>{if(f==="control-state"&&m===_t&&this.acceptControlSnapshot(g),f==="signed-event"&&m.startsWith("mat:")){if(Xe(g).stream_id!==m)throw new Error("Cross-mat event rejected");this.acceptMatsideSignedEvent(g)}},onRpc:(f,g)=>{if(f==="matside"&&m.startsWith("mat:"))return this.handleMatsideRequest(g,m);if(f==="bracket-sync"&&t==="primary"&&m.startsWith("subtree:"))return this.bracketSync(g,m);if(f==="projection"&&m.startsWith("subtree:"))return new TextEncoder().encode(JSON.stringify(this.buildSignedPublicProjection()));if(f==="ow-vote"&&m.startsWith("subtree:"))try{const w=JSON.parse(new TextDecoder().decode(g)),b=this.submitOwVote(w);return new TextEncoder().encode(JSON.stringify({ok:!0,result:b,envelope:this.buildSignedPublicProjection()}))}catch(w){return new TextEncoder().encode(JSON.stringify({ok:!1,error:w instanceof Error?w.message:String(w)}))}if(f==="scorekeeper-event"&&(m.startsWith("subtree:")||m.startsWith("mat:")))try{const w=this.acceptMatsideSignedEvent(g);return new TextEncoder().encode(JSON.stringify({ok:!0,result:w,envelope:this.buildSignedPublicProjection()}))}catch(w){return new TextEncoder().encode(JSON.stringify({ok:!1,error:w instanceof Error?w.message:String(w)}))}if(f==="control-sync"&&m===_t)return this.signedControlSnapshot();throw new Error("RPC forbidden in this room")}})}catch(f){throw this.overlayMesh.liveRooms.get(m)?.stop(),this.overlayMesh.liveRooms.delete(m),new Error(`Cannot join ${m}: ${String(f)}`)}if(s!==this.liveTransportGeneration){_.stop(),this.overlayMesh.liveRooms.get(m)===_&&this.overlayMesh.liveRooms.delete(m);return}if(m===_t){const f=[..._.members.keys()].find(g=>g!==this.livePeerId);f&&this.acceptControlSnapshot(await _.request("control-sync",new Uint8Array,f))}};if(t==="primary"&&await this.flushPendingProjections(e,c),s!==this.liveTransportGeneration)return;if(this.hasExternalVenueServer&&this.linkedVenuePubkeyHex&&this.linkedVenuePubkeyHex.toLowerCase()!==this.publisherPublicKeyHex.toLowerCase()){this.overlayMesh.stopLiveRooms(),this.livePacketHeads.clear(),this.pendingProjectionPostCount||(this.liveTransportError="");return}const h=this.desiredLiveRooms(t);for(const[m,p]of this.overlayMesh.liveRooms)h.includes(m)||(p.stop(),this.overlayMesh.liveRooms.delete(m),this.livePacketHeads.delete(m));if(!c&&h.every(m=>this.overlayMesh.liveRooms.has(m))){!this.pendingProjectionPostCount&&h.every(m=>this.overlayMesh.liveRooms.get(m)?.diagnostics().brokerConnected)&&(this.liveTransportError="");return}if(await this.publishRegistry(e),s!==this.liveTransportGeneration)return;this.registryTimer||(this.registryTimer=setInterval(()=>{this.liveOrigin&&this.publishRegistry(this.liveOrigin).catch(m=>{this.liveTransportError=String(m)})},15e3));const u=(await Promise.allSettled(h.map(l))).find(m=>m.status==="rejected");if(u)throw u.reason;h.every(m=>this.overlayMesh.liveRooms.get(m)?.diagnostics().brokerConnected)&&(this.liveTransportError="")},a=this.liveTransportChain.then(n,n);return this.liveTransportChain=a.catch(()=>{}),a}desiredLiveRooms(e=this.liveConsoleRole){const t=[_t];if(e!=="official")for(let i=1;i<=this.matCount;i++)t.push(`mat:${i}`);if(e==="primary"){t.push("subtree:venue-super-seed");for(const i of new Set([...this.bouts.values()].map(s=>s.bracket_id)))typeof i=="string"&&i!=="undefined"&&i!=="null"&&/^[A-Za-z0-9_-]{1,100}$/.test(i)&&t.push(`subtree:b:${i}`)}return t}async publishRegistry(e){const t=async()=>{const s=c=>{const l=new URL(c,e);return l.protocol=l.protocol==="https:"?"wss:":"ws:",l.href},n=this.desiredLiveRooms().slice(0,64);this.lastRegistryUpdatedAtMs=Math.max(this.now(),this.lastRegistryUpdatedAtMs+1);const a=Yl({tournament_id:this.tournamentId,root_pubkey_hex:this.publisherPublicKeyHex,peer_pubkey_hex:this.publisherPublicKeyHex,authority_epoch:Math.max(1,...[...this.mats.values()].map(c=>c.authority_epoch)),role:this.liveConsoleRole==="standby"?"BACKUP":"PRIMARY",origins:[new URL(e).origin],nostr_relay_urls:[s("/api/openmat-nostr")],p2p_broker_urls:[s("/api/openmat-p2p")],active_rooms:n,assigned_mats:[],updated_at_ms:this.lastRegistryUpdatedAtMs},c=>Ve(ke,c,this.keyPair.privateKey)),o=await fetch(new URL("/api/openmat-registry",e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),signal:AbortSignal.timeout(3e3)});if(!o.ok)throw new Error(`Registry publication failed: ${o.status} ${await o.text()}`)},i=this.registryChain.then(t,t);return this.registryChain=i.catch(()=>{}),i}stopLiveTransport(){this.liveTransportGeneration++,this.livePacketHeads.clear(),this.registryTimer&&clearInterval(this.registryTimer),this.registryTimer=null,this.overlayMesh.stopLiveRooms(),this.syncVenueRoomRouter(),this.setVenueOrigin("")}signedControlSnapshot(){const e=this.storageState(),t=st({tournament_id:this.tournamentId,sequence:this.controlSequenceHead,state:JSON.stringify(e)});return st({body:t,signature:Ve(ke,t,this.keyPair.privateKey)})}acceptControlSnapshot(e){const t=Bt(e),i=t.body;if(!Pe(ke,i,this.keyPair.publicKey,t.signature))throw new Error("Invalid control snapshot");const s=Bt(i);if(!(s.tournament_id!==this.tournamentId||Number(s.sequence)<=this.controlSequenceHead)){if(typeof localStorage>"u")throw new Error("Officials control sync requires durable storage");localStorage.setItem(vn,String(s.state)),this.loadFromStorage(!0),this.syncVenueRoomRouter(),this.onStateChanged?.()}}handleMatsideRequest(e,t,i=this.now()){const s=Bt(e),n=s.body,a=Bt(n),o=Number(a.mat_number),c=this.mats.get(o);if(!c||a.tournament_id!==this.tournamentId||t&&t!==`mat:${o}`||!(a.nonce instanceof Uint8Array)||a.nonce.length!==32||!(a.device_public_key instanceof Uint8Array)||!be(a.device_public_key,ae(c.device_pubkey_hex))||a.device_key_id!==c.android_device_id||!Pe(ke,n,a.device_public_key,s.signature))throw new Error("Unauthorized matside request");const l=Yt(c.cert_cbor_hex);if(this.revokedCertificateIds.has(l.certificate_id))throw new Error("Certificate revoked");const h={nonce:a.nonce,tournament_id:this.tournamentId,mat_number:o};let d;if(a.operation==="provision"||a.operation==="push_bout"){Hi(l,this.keyPair.publicKey,i,!1);const m=a.operation==="push_bout"&&this.pushMatBout(o,a.match_id,a.after_match_id,i),p=[...this.matQueue(o),...[...this.bouts.values()].filter(b=>b.assigned_mat_id===o&&!b.is_bye&&b.lifecycle===M.ResultAccepted&&b.red_athlete_id&&b.green_athlete_id)].map(b=>({match_id:b.match_id,bout_number:String(b.bout_number),...b.lifecycle===M.ResultAccepted?{completed:!0}:{},weight_class:b.weight_class_id,red_name:this.athletes.get(b.red_athlete_id).public_display_name,red_school:this.athletes.get(b.red_athlete_id).team_name,green_name:this.athletes.get(b.green_athlete_id).public_display_name,green_school:this.athletes.get(b.green_athlete_id).team_name,assignment_revision:b.assignment_revision}));if(!p.length&&a.operation==="push_bout")throw new Error("No director-approved bouts assigned to this mat");const _=Be(st({certificate:l.certificate_id,rules_hash:this.rulesHash,queue:p})),f=ue(_),g=`${o}:${f}`;this.knownProvisionHeads.has(g)?m&&this.publishAndSave():(this.verifiers.get(o).markControlHeadKnown(_),this.knownProvisionHeads.add(g),this.protocolJournal.push({matId:o,controlHeadHex:f}),this.publishAndSave());const w=this.getMatsideStreamHead(o);d={...h,revision:l.assignment_revision,certificate:l,control_head:_,rules:this.rulesBundle,rules_hash:this.rulesHash,queue:p,stream_head_sequence:w.sequence,stream_head_hash:ae(w.hashHex)}}else if(a.operation==="event"&&a.event instanceof Uint8Array){const m=Xe(a.event);if(m.stream_id!==`mat:${o}`)throw new Error("Cross-mat event");this.acceptMatsideSignedEvent(a.event,i),d={...h,match_id:m.match_id,sequence:m.sequence,event_id:m.event_id}}else if(a.operation==="events"&&Array.isArray(a.events)){if(a.events.length===0||a.events.length>128)throw new Error("Invalid matside event batch");const m=this.isSeeding;this.isSeeding=!0;try{for(const p of a.events){if(!(p instanceof Uint8Array))throw new Error("Invalid matside event bytes");if(Xe(p).stream_id!==`mat:${o}`)throw new Error("Cross-mat event");this.acceptMatsideSignedEvent(p,i)}}finally{this.isSeeding=m}this.publishAndSave(),d={...h,accepted_sequence:this.getMatsideStreamHead(o).sequence}}else throw new Error("Unsupported matside operation");(a.operation==="provision"||a.operation==="push_bout")&&(d.registry_authorization=ue(Ve(ke,st({tournament_id:this.tournamentId,peer_pubkey_hex:ue(a.device_public_key),role:"MAT_PEER"}),this.keyPair.privateKey)));const u=st(d);return st({body:u,signature:Ve(ke,u,this.keyPair.privateKey)})}matQueue(e){return[...this.bouts.values()].filter(t=>t.assigned_mat_id===e&&!t.is_bye&&t.lifecycle>=M.Assigned&&t.lifecycle<=M.LocallyConfirmed&&t.red_athlete_id&&t.green_athlete_id).sort(Wi)}pushMatBout(e,t,i,s){const n=this.matQueue(e),a=n.findIndex(d=>d.match_id===t),o=n[a],c=o?[...this.protocolJournal].reverse().map(d=>{try{return d.wireHex?Xe(ae(d.wireHex)):null}catch{return null}}).find(d=>d?.match_id===o.match_id):null,l=!!o&&o.lifecycle===M.InProgress&&c?.event_type==="MATCH_UNDO_LAST_ACTION"&&!o.clock_running&&!o.completed_at_ms&&o.period_number===1&&o.red_score===0&&o.green_score===0&&o.clock_remaining_ms===this.rulesBundle.period_1_duration_ms;if(!o||o.lifecycle>M.Ready&&!l||o.clock_running||o.completed_at_ms)throw new Error("Only an unstarted bout on this mat can move");if(a>0&&n[a-1]?.match_id===i)return this.saveToStorage(),!1;const h=n[a+1];if(!h||h.match_id!==i||h.lifecycle>M.Ready)throw new Error("Select the next unconfirmed bout on this mat");return a===0&&this.validateBoutSafetyGates(h,s),l&&(o.lifecycle=M.Assigned),n[a]=h,n[a+1]=o,n.forEach((d,u)=>{d.mat_queue_order=u+1}),this.promoteMatReadyBout(e,s),!0}promoteMatReadyBout(e,t){const i=this.matQueue(e),s=i.filter(a=>a.lifecycle<=M.Ready).sort((a,o)=>(a.mat_queue_order||1/0)-(o.mat_queue_order||1/0)||a.bout_number-o.bout_number),n=i.some(a=>a.lifecycle===M.InProgress)?void 0:s.find(a=>this.isBoutReadyEligible(a,t));s.forEach(a=>{a.lifecycle=a===n?M.Ready:M.Assigned})}isBoutReadyEligible(e,t){try{return this.validateBoutSafetyGates(e,t),!0}catch{return!1}}broadcastEnabled;isSeeding=!1;broadcastChannel;deletedMatchIds=new Set;clearedRestMatchIds=new Set;syncedOwVoteTallies={};constructor(e){const t=Date.now(),i=performance.now();this.now=e?.now??(()=>t+Math.floor(performance.now()-i));let s=e?.broadcastEnabled!==!1&&typeof localStorage<"u"?localStorage.getItem(pr):null;s||(s=ue(crypto.getRandomValues(new Uint8Array(32))),e?.broadcastEnabled!==!1&&typeof localStorage<"u"&&localStorage.setItem(pr,s)),this.keyPair=da("officials-authority",ae(s));const n=e?.broadcastEnabled!==!1&&typeof localStorage<"u"?localStorage.getItem("openmat_officials_console_role"):null;if((n==="standby"||n==="official"||n==="primary")&&(this.liveConsoleRole=n,this.hasExplicitStoredRole=!0),this.broadcastEnabled=e?.broadcastEnabled??!0,this.broadcastChannel=this.broadcastEnabled&&typeof window<"u"&&typeof BroadcastChannel<"u"?new BroadcastChannel("openmat-live-sync"):null,!this.broadcastEnabled||!this.loadFromStorage()){this.isSeeding=!0;try{this.initializeTournamentRegistrationManifest(),this.syncVenueRoomRouter()}finally{this.isSeeding=!1}this.broadcastEnabled&&this.saveToStorage()}this.syncVenueRoomRouter()}get publisherPublicKeyHex(){return ue(this.keyPair.publicKey)}resetTournamentState(e=!1){e||this.assertDrawNotStarted(),this.athletes.clear(),this.pendingSelfRegistrations.clear(),this.selfRegistrationDispositions.clear(),this.selectedPendingSelfRegId="",this.privateWeighIns.clear(),this.privateMedicals.clear(),this.owVotes.clear(),this.syncedOwVoteTallies={},this.deletedMatchIds.clear(),this.clearedRestMatchIds.clear(),this.tournamentId=re.tournamentId,this.tournamentName=re.tournamentName,this.eventDate=re.eventDate,this.venue=re.venue,this.rulesVersion=re.rulesVersion,this.growthAllowanceTenths=re.growthAllowanceTenths,this.consecutiveDayAllowanceTenths=0,this.matCount=re.matCount,this.clearMatchState(),this.syncVenueRoomRouter(),this.publishAndSave(!0,!0)}resetAllMatches(){this.owVotes.clear(),this.syncedOwVoteTallies={},this.clearMatchState();const e=this.now();for(const t of this.athletes.values())t.matches_wrestled_today=0,t.prior_day_matches=0,t.last_bout_ended_ms=0,t.updated_at_ms=e;this.publishAndSave(!0,!0)}clearMatchState(){for(const e of this.bouts.keys())this.deletedMatchIds.add(e);this.clearedRestMatchIds.clear();for(const e of this.mats.values())e.certificate_id&&this.revokedCertificateIds.add(e.certificate_id);this.bouts.clear(),this.mats.clear(),this.verifiers.clear(),this.protocolJournal=[],this.resultCorrections=[],this.scratches.clear(),this.knownProvisionHeads.clear(),this.bracketFrozenByClass.clear(),this.lastSyncedVenueEpochByPublisher.clear(),this.nextBoutNumber=101,this.initializeTournamentRegistrationManifest()}syncVenueRoomRouter(){const e=new Ke(this.matCount);for(const[t,i]of this.overlayMesh.liveRooms)for(const[s,n]of i.members)t===_t?e.joinControlOfficialsRoom(s,n.role==="primary"?ii.DirectorPrimary:n.role==="standby"?ii.DirectorStandby:ii.BoutDispatchClerk):t.startsWith("mat:")?e.joinMatRoom(Number(t.slice(4)),s,n.role==="primary"?ot.HeadTablePrimary:n.role==="standby"?ot.HeadTableStandby:ot.MatPrimaryScorekeeper):e.joinSubtreeRoom(t.slice(8),s,i.lastPingRttMs??0);return this.roomRouter=e,e.computeAccountingSummary()}configureMatCount(e){if(!Number.isInteger(e)||e<1||e>ct)throw new N(B.BoundsExceeded,`matCount must be between 1 and ${ct}`);this.matCount=e,this.liveOrigin&&this.startLiveTransport(this.liveOrigin).catch(i=>{this.liveTransportError=String(i)});for(let i=1;i<=this.matCount;i++)this.mats.has(i)||this.mats.set(i,this.unprovisionedMat(i));for(const i of Array.from(this.mats.keys()))i>this.matCount&&this.mats.delete(i);const t=this.syncVenueRoomRouter();return this.publishAndSave(),t}getVenueRoomTopologySummary(){return this.roomRouter.computeAccountingSummary()}activateStandbyDirectorFailover(){const e=this.roomRouter.activateStandbyHeadTableFailover();return e===this.livePeerId&&this.liveOrigin&&(this.liveConsoleRole="primary",this.startLiveTransport(this.liveOrigin).catch(t=>{this.liveTransportError=String(t)})),this.publishAndSave(),e}unprovisionedMat(e){return{mat_id:e,android_device_id:"",operator_name:"",authority_epoch:1,device_pubkey_hex:"",certificate_id:"",allowed_scopes:0,issued_at_ms:0,expires_at_ms:0,cert_cbor_hex:"",scorekeeper_qr_uri:"",status:"HANDOFF_STOPPED",last_heartbeat_ms:0}}buildSignedMatDelegation(e,t,i,s,n,a=this.now()){const o=a+2592e5,c=`CERT-MAT-${e}-${gt()}`,l=We.ReadPublic|We.ScoreMat|We.ConfirmLocalResult,h=zs({certificate_id:c,tournament_id:this.tournamentId,subject_key_id:t,subject_pubkey:ae(n),role:ft.MatOperator,allowed_scopes:l,allowed_stream_id:`mat:${e}`,assigned_mat_id:e,assignment_revision:s,authority_generation:s,issued_at_ms:a,expires_at_ms:o,allow_in_progress_completion:!0},this.keyPair.privateKey),d=vl(h),u=kl({tournament_id:this.tournamentId,tournament_name:this.tournamentName,publisher_pubkey_hex:this.publisherPublicKeyHex,relay_origin:jt(),cert_cbor_hex:d});return{mat_id:e,android_device_id:t,operator_name:i,authority_epoch:s,device_pubkey_hex:n,certificate_id:c,allowed_scopes:l,issued_at_ms:a,expires_at_ms:o,cert_cbor_hex:d,scorekeeper_qr_uri:u,status:"ONLINE_SYNCED",last_heartbeat_ms:a}}initializeTournamentRegistrationManifest(){for(let e=1;e<=this.matCount;e++)this.mats.set(e,this.unprovisionedMat(e))}configureTournament(e){const t=e.name.trim(),i=e.eventDate.trim(),s=e.venue.trim();if(!t||!s||!/^\d{4}-\d{2}-\d{2}$/.test(i)||!Number.isFinite(Date.parse(`${i}T00:00:00Z`))||new Date(`${i}T00:00:00Z`).toISOString().slice(0,10)!==i)throw new N(B.InvalidArgument,"Enter the event name, date and venue");this.tournamentName=t,this.eventDate=i,this.venue=s,this.publishAndSave()}configureRulesVersion(e){const t=e.trim();if(!t)throw new N(B.InvalidArgument,"Select a match period ruleset");this.rulesVersion=t;const i=this.rulesBundle.period_1_duration_ms;for(const s of this.bouts.values())s.lifecycle<=M.Ready&&!s.clock_running&&s.red_score===0&&s.green_score===0&&s.period_number===1&&(s.clock_remaining_ms=i);this.publishAndSave()}registerMatDelegation(e,t=!0){const i=Yt(e.cert_cbor_hex);let s=this.verifiers.get(e.mat_id);s||(s=new Uc(this.keyPair.publicKey),this.verifiers.set(e.mat_id,s));const n=i.allowed_stream_id;if(e.authority_epoch>s.activeEpoch(n)){const a=s.headHash(n);s.applyAuthorityTransfer({transfer_id:e.certificate_id,tournament_id:this.tournamentId,stream_id:n,match_id:"",reason:pa.NormalDeviceReplacement,director_generation:e.authority_epoch,assignment_revision:i.assignment_revision,old_epoch:s.activeEpoch(n),old_last_sequence:s.headSequence(n),old_head_hash:a,new_epoch:e.authority_epoch,new_device_key_id:i.subject_key_id,new_certificate_id:i.certificate_id,seed_state_hash:a,unknown_tail_resolution:"Previous device stopped by official",old_operator_physically_stopped:!0,timers_initialized_stopped:!0,director_signature:i.root_signature},a)}s.registerCertificate(i),t&&this.protocolJournal.push({mat:structuredClone(e)})}issueMatBackupDisplayCertificate(e,t,i){const s=this.mats.get(e);if(!s||!t||!/^[a-f0-9]{64}$/i.test(i))throw new Error("A configured mat and device public key are required");return zs({certificate_id:`display-${gt()}`,tournament_id:this.tournamentId,subject_key_id:t,subject_pubkey:ae(i),role:ft.RelayOperator,allowed_scopes:We.ReadPublic|We.RelaySignedBytes,allowed_stream_id:`mat:${e}`,assigned_mat_id:e,assignment_revision:s.authority_epoch,authority_generation:s.authority_epoch,issued_at_ms:this.now(),expires_at_ms:this.now()+4320*60*1e3,allow_in_progress_completion:!1},this.keyPair.privateKey)}getMatsideStreamHead(e){const t=this.verifiers.get(e),i=`mat:${e}`;return{sequence:t?.headSequence(i)??0,hashHex:ue(t?.headHash(i)??new Uint8Array(32))}}acceptMatsideSignedEvent(e,t=this.now()){const i=Xe(e),s=this.bouts.get(i.match_id),n=s&&this.mats.get(s.assigned_mat_id);if(!s||!n||i.tournament_id!==this.tournamentId||i.stream_id!==`mat:${n.mat_id}`||i.certificate_id!==n.certificate_id||i.authority_epoch!==n.authority_epoch||i.assignment_revision<1||i.assignment_revision>s.assignment_revision||!be(i.rules_hash,this.rulesHash))throw new N(B.UnauthorizedScope,"Event does not match the current tournament, mat, assignment or rules");if(this.revokedCertificateIds.has(i.certificate_id))throw new N(B.CertificateRevoked,"Matside certificate revoked");const a=Yt(n.cert_cbor_hex);if(a.assigned_mat_id!==n.mat_id||a.role!==ft.MatOperator||t+3e5<a.issued_at_ms)throw new Error("Invalid matside delegation");const o=i.payload instanceof Uint8Array?Me(i.payload):i.payload;if(!o||typeof o!="object"||Array.isArray(o)||o instanceof Uint8Array||o instanceof Map)throw new Error("Matside payload must be a CBOR map");const c=o,l=["MATCH_SCORING_ACTION","MATCH_SCORE_CORRECTION","MATCH_ENDING_ACTION","MATCH_CLOCK_TOGGLE","MATCH_PERIOD_CHOICE","MATCH_ADVANCE_PERIOD","MATCH_DISK_TOSS","MATCH_CONFIRM_RESULT","MATCH_PERIOD_EXPIRED","MATCH_UNDO_LAST_ACTION","MATCH_CLOCK_CORRECTION","MATCH_MEDICAL_DECISION","MATCH_FINALIZE_TECH_FALL","MATCH_POSITION_CHANGE"],h=l.includes(i.event_type),d=h?c.public_state:c;if(!d||typeof d!="object"||Array.isArray(d)||d instanceof Uint8Array)throw new Error("Missing signed match state");const u=h?i.event_type:c.command_type??i.event_type;if(typeof u!="string"||![...["START_BOUT_CLOCK","STOP_BOUT_CLOCK","CLOCK_STATE","SCORE_ACTION_RECORDED","TAKEDOWN_3","ESCAPE_1","REVERSAL_2","NEARFALL_2","NEARFALL_3","NEARFALL_4","STALL_WARN","PIN_FALL","CONFIRM_RESULT"],...l].includes(u)||u!==i.event_type)throw new Error("Unsupported or inconsistent matside command");const p=(I,D,x)=>{const v=d[I]??D;if(typeof v!="number"||!Number.isSafeInteger(v)||v<0||v>x)throw new Error(`Invalid matside ${I}`);return v},_=p("red_score",s.red_score,1e3),f=p("green_score",s.green_score,1e3),g=p("period",s.period_number,9),w=p("clock_remaining_ms",s.clock_remaining_ms,6e5);if(g===0||"clock_running"in d&&typeof d.clock_running!="boolean")throw new Error("Invalid clock state");const b=u==="CONFIRM_RESULT"||u==="MATCH_CONFIRM_RESULT",A=String(d.win_type??""),S=h?d.winner_corner==="RED"?s.red_athlete_id:d.winner_corner==="GREEN"?s.green_athlete_id:"":String(c.winner_athlete_id??"");b&&this.validateConfirmedResult(s,S,A,_,f);const E=this.verifiers.get(n.mat_id);if(!E)throw new Error("Mat has no registered verifier");if(!this.protocolJournal.some(I=>I.wireHex===ue(e))){if(i.assignment_revision!==s.assignment_revision)throw new Error("Refresh the bout assignment before scoring.");const I=!b&&s.lifecycle===M.Assigned&&this.matQueue(n.mat_id).every(D=>D===s||D.lifecycle<=M.Ready);if(!I&&![M.Ready,M.InProgress,M.EndedLocal,M.LocallyConfirmed].includes(s.lifecycle))throw new Error("Bout is not ready to accept matside events");(s.lifecycle===M.Ready||I)&&this.validateBoutSafetyGates(s,t)}const $=E.verifyAndAccept(i,Ut,We.ScoreMat|(b?We.ConfirmLocalResult:0),t,s.lifecycle===M.InProgress||s.lifecycle===M.EndedLocal),y={outcome:$,eventIdHex:ue(i.event_id),matchId:s.match_id};if($===$e.DuplicateIgnored)return this.saveToStorage(),y;if($!==$e.Applied)throw new N(B.SequenceGap,`Matside event not applied: ${$}`);if(this.protocolJournal.push({wireHex:ue(e),atMs:t}),b)s.period_number=g,s.clock_remaining_ms=w,this.recordMatsideConfirmedResult(s.match_id,S,A,_,f,i.authority_epoch,s.completed_at_ms||t);else{const I=u==="PIN_FALL"||d.bout_ended===!0,D=!!s.winner_athlete_id&&s.lifecycle===M.EndedLocal,x=I?S||(u==="PIN_FALL"?c.actor==="GREEN"?s.green_athlete_id:s.red_athlete_id:_>f?s.red_athlete_id:f>_?s.green_athlete_id:""):"",v=x?x===s.red_athlete_id?s.green_athlete_id:s.red_athlete_id:"",R=Math.abs(_-f),k=I?se.normalizeSyncedWinType(A)||(u==="PIN_FALL"?"FALL":R>=this.rulesBundle.technical_fall_margin?"TF":R>=8?"MD":"DEC"):"";if(s.red_score=_,s.green_score=f,s.period_number=g,s.clock_remaining_ms=w,s.clock_running=typeof d.clock_running=="boolean"?d.clock_running:u!=="STOP_BOUT_CLOCK"&&u!=="PIN_FALL",s.lifecycle=I?M.EndedLocal:M.InProgress,s.winner_athlete_id=x,s.loser_athlete_id=v,s.win_type=k,s.completed_at_ms=I?s.completed_at_ms||t:0,I&&x){for(const P of[s.red_athlete_id,s.green_athlete_id]){const W=this.athletes.get(P);W&&k!=="FORFEIT"&&k!=="BYE"&&(W.last_bout_ended_ms=Math.max(W.last_bout_ended_ms,s.completed_at_ms),W.updated_at_ms=Math.max(W.updated_at_ms,s.completed_at_ms))}const T=String(d.win_type??c.ending_type??"").toUpperCase(),O=this.isWithdrawn(v)||k==="DQ"||T==="MEDICAL_FORFEIT";s.winner_next_match_id&&this.advanceParticipantToDownstream(s.winner_next_match_id,x,s.match_id),s.loser_next_match_id&&!O&&this.advanceParticipantToDownstream(s.loser_next_match_id,v,s.match_id),this.resolveCompletedByesForBracket(s.bracket_id,s.completed_at_ms),this.advanceScratches(s.completed_at_ms);for(let P=1;P<=this.matCount;P++)this.promoteMatReadyBout(P,s.completed_at_ms)}else D&&!I&&this.revertProvisionalDownstreamAdvancement(s.match_id,t);this.publishAndSave()}return y}submitOwVote(e){if(e.tournamentId!==this.tournamentId||!/^[a-zA-Z0-9_-]{16,128}$/.test(e.voterId)||!this.athletes.has(e.athleteId))throw new Error("Invalid tournament, voter identifier or athlete");return this.owVotes.get(e.voterId)!==e.athleteId&&(this.owVotes.set(e.voterId,e.athleteId),this.publishAndSave()),this.getOwVoteTallies()}getOwVoteTallies(){if(this.owVotes.size===0&&Object.keys(this.syncedOwVoteTallies).length>0)return{...this.syncedOwVoteTallies};const e={};for(const t of this.owVotes.values())e[t]=(e[t]??0)+1;return e}signRelayReceipt(e,t,i){const s={requestId:e,ok:t,result:i};return{...s,signatureHex:ue(Ve(ke,xe(s),this.keyPair.privateKey))}}registerAthlete(e){const t=e.name.trim();if(!t)throw new N(B.InvalidArgument,"Athlete name is required");const i=(e.divisionId??"VARSITY").trim().toUpperCase()||"VARSITY",s=e.athleteId?.trim()||`ATH-${gt()}`;if(this.athletes.has(s))throw new N(B.InvalidArgument,"Athlete ID is already registered");if(!e.weightClassId.trim()||this.isBracketFrozen(e.weightClassId,i))throw new N(B.InvalidArgument,"Select an open weight class before adding wrestlers");const n=ue(crypto.getRandomValues(new Uint8Array(16))),a=(e.flowrestlingId??"").trim(),o={athlete_id:s,opaque_pass_token:`PASS-${e.weightClassId}-${n}`,public_display_name:t,team_id:e.teamId.trim().toUpperCase()||"IND",team_name:e.teamName.trim()||"Independent",division_id:i,weight_class_id:e.weightClassId,seed_rank:Math.max(1,Math.floor(e.seedRank||1)),flowrestling_id:a,check_in_stage:J.Arrived,weigh_in_eligible:!1,medically_cleared:!1,matches_wrestled_today:0,prior_day_matches:Math.max(0,Math.floor(e.priorDayMatches??0)),last_bout_ended_ms:0,updated_at_ms:this.now()};return this.athletes.set(s,o),this.publishAndSave(),o}static parseRosterCsv(e,t=","){const i=[];let s=[],n="",a=!1,o=!1;const c=()=>{throw new N(B.InvalidArgument,"Invalid quoted field in roster CSV")};for(let l=0;l<=e.length;l++){const h=l===e.length?`
`:e[l];if(!a&&!s.length&&!n.trim()&&h==="#"){for(;l<e.length&&e[l]!==`
`;)l++;n="";continue}a?(l===e.length&&c(),h==='"'?e[l+1]==='"'?(n+='"',l++):(a=!1,o=!0):n+=h):h===t||h===`
`||h==="\r"?(s.push(n.trim()),n="",o=!1,h!==t&&(s.some(d=>d.length>0)&&i.push(s),s=[],h==="\r"&&e[l+1]===`
`&&l++)):h==='"'?((n.trim()||o)&&c(),n="",a=!0):(o&&h.trim()&&c(),n+=h)}return i}static normalizeCsvHeaderName(e){return e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}static deriveTeamCodeFromSchool(e){const t=e.trim();if(!t)return"";const i=t.replace(/[^A-Za-z0-9\s]/g," ").split(/\s+/).filter(Boolean);if(i.length===1)return i[0].slice(0,6).toUpperCase();const s=i.map(n=>n[0].toUpperCase()).join("");return(s.length>=2?s.slice(0,6):t.replace(/[^A-Za-z0-9]/g,"").slice(0,6)).toUpperCase()}static deriveAthleteIdFromFields(e,t,i,s){const n=s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().toUpperCase().replace(/[^A-Z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,28),a=i.replace(/[^A-Z0-9]+/g,"").slice(0,8)||"IND",o=(e||"VARSITY").replace(/[^A-Z0-9]+/g,"").slice(0,8),c=t.replace(/[^A-Z0-9]+/g,"").slice(0,6);return`ATH-${o}-${c}-${a}-${n||"WRESTLER"}`}static escapeCsvCell(e){const t=e==null?"":String(e);return/[",\r\n]/.test(t)||t.startsWith("#")?`"${t.replace(/"/g,'""')}"`:t}exportRosterTemplateCsv(){return["# OpenMat Tournament Roster & Full Backup Template","# Fill out one row per wrestler. Lines starting with '#' are ignored on spreadsheet import.","#","# COLUMN GUIDE (You can use this full template OR a simple coach spreadsheet with columns:","#   first_name, last_name, school_name, team_code, division, weight_class_lbs, actual_weight_lbs, seed_rank, grade, flowrestling_id):","#   - first_name / last_name (or public_display_name): Wrestler First & Last Name","#   - school_name / team_name: High School or Club Name","#   - team_id / team_code: Short 2-6 letter school/team abbreviation","#   - division_id: VARSITY, JV, BOYS, GIRLS, U16, U18, or NOVICE (defaults to VARSITY)","#   - weight_class_id / weight_lbs: NFHS Weight Class in lbs (106, 113, 120, 126, 132, 138, 144, 150, 157, 165, 175, 190, 215, 285)","#   - actual_weight_lbs: Measured scale weight in lbs (for example 131.4)","#   - seed_rank: Seeding rank in weight class (1 = #1 seed, 2 = #2 seed)","#   - check_in_stage / weigh_in_eligible / medically_cleared / medical_decision / bracket_frozen / bracket_format:","#     Full tournament state columns for restoring a saved backup CSV.","athlete_id,public_display_name,team_id,team_name,division_id,weight_class_id,seed_rank,flowrestling_id,first_name,last_name,school_name,weight_lbs,actual_weight_lbs,grade,check_in_stage,weigh_in_eligible,medically_cleared,medical_decision,medical_reviewer,scale_station_id,scale_id,bracket_frozen,bracket_format,opaque_pass_token"].join(`
`)+`
`}exportTournamentBackupCsv(){const e={version:1,tournament_id:this.tournamentId,tournament_name:this.tournamentName,event_date:this.eventDate,venue:this.venue,rules_version:this.rulesVersion,mat_count:this.matCount,growth_allowance_tenths:this.growthAllowanceTenths,consecutive_day_allowance_tenths:this.consecutiveDayAllowanceTenths,bracket_frozen_by_class:Array.from(this.bracketFrozenByClass.entries()),bouts:Array.from(this.bouts.values())},t=new Map;for(const n of this.bouts.values()){const o=`${(n.division_id||"VARSITY").toUpperCase()}:${n.weight_class_id}`;if(!t.has(o)){const l=[X.DoubleElimCrossover,X.TrueSecondChallenge,X.RoundRobinPool,X.PoolToBracket,X.TeamDual].find(h=>n.bracket_id.endsWith(h));t.set(o,l??X.DoubleElimCrossover)}}const i=["# OpenMat Full Tournament Backup & Disaster Recovery CSV (v1)","# Re-importing this CSV into OpenMat Officials Console fully rebuilds all wrestlers, seeds, scale weigh-ins, skin/medical checks, and generated brackets.",`#openmat_tournament_backup_v1:${JSON.stringify(e)}`,`# OPENMAT_SELF_REG_JSON: ${JSON.stringify({registrations:[...this.pendingSelfRegistrations.values()],dispositions:[...this.selfRegistrationDispositions.entries()]})}`,"athlete_id,public_display_name,team_id,team_name,division_id,weight_class_id,seed_rank,flowrestling_id,first_name,last_name,school_name,weight_lbs,actual_weight_lbs,grade,check_in_stage,weigh_in_eligible,medically_cleared,medical_decision,medical_reviewer,scale_station_id,scale_id,bracket_frozen,bracket_format,opaque_pass_token"],s=Array.from(this.athletes.values()).sort((n,a)=>(n.division_id||"VARSITY").localeCompare(a.division_id||"VARSITY")||Number(n.weight_class_id)-Number(a.weight_class_id)||n.seed_rank-a.seed_rank||n.athlete_id.localeCompare(a.athlete_id));for(const n of s){const a=(n.division_id||"VARSITY").toUpperCase(),o=n.weight_class_id,c=n.public_display_name.trim().split(/\s+/),l=c[0]??"",h=c.slice(1).join(" "),d=this.privateWeighIns.get(n.athlete_id),u=d?(d.measured_weight_tenths/10).toFixed(1):"",m=d?.station_id??"",p=d?.scale_id??"",_=this.privateMedicals.get(n.athlete_id),f=_?.decision??(n.medically_cleared?"CLEARED":""),g=_?.reviewer_id??(n.medically_cleared?"Head Official":""),w=this.isBracketFrozen(o,a),b=t.get(`${a}:${o}`)??X.DoubleElimCrossover,A=(qi[n.check_in_stage]??String(n.check_in_stage)).toUpperCase().replace(/[^A-Z0-9]+/g,"_"),S=[n.athlete_id,n.public_display_name,n.team_id,n.team_name,a,o,n.seed_rank,n.flowrestling_id??"",l,h,n.team_name,o,u,"",A,n.weigh_in_eligible,n.medically_cleared,f,g,m,p,w,b,n.opaque_pass_token].map(E=>se.escapeCsvCell(E));i.push(S.join(","))}return i.join(`
`)+`
`}exportCoachRosterTemplateCsv(e=!0){const t=["# OpenMat Coach & School Spreadsheet Roster Template","# Edit in Excel, Google Sheets, or Numbers and save as CSV. Lines starting with '#' are ignored.","# Channel League School Codes: SBHS, DPHS, SMHS, VHS, BHS, OHS, PHS, RMHS (Division: NOVICE, JV, VARSITY, GIRLS)","first_name,last_name,school_name,team_code,division,weight_class_lbs,actual_weight_lbs,seed_rank,grade,flowrestling_id,athlete_id"];return e&&t.push("Jordan,Rivera,Santa Barbara High School,SBHS,VARSITY,132,131.4,1,12,FLO-88413201,ATH-SBHS-132-01","Marcus,Vance,San Marcos High School,SMHS,VARSITY,132,131.8,2,11,FLO-88413202,ATH-SMHS-132-02","Mateo,Delgado,Dos Pueblos High School,DPHS,VARSITY,132,130.9,3,12,,ATH-DPHS-132-03","Liam,O'Connor,Ventura High School,VHS,VARSITY,132,132.0,4,10,,ATH-VHS-132-04","Carlos,Mendoza,Buena High School,BHS,VARSITY,138,137.4,1,12,FLO-88413801,ATH-BHS-138-01","Noah,Takahashi,Rio Mesa High School,RMHS,VARSITY,138,137.8,2,11,,ATH-RMHS-138-02","Elena,Rostova,Santa Barbara High School,SBHS,GIRLS,120,119.2,1,11,FLO-88412001,ATH-SBHS-G120-01","Sofia,Morales,Oxnard High School,OHS,GIRLS,120,118.6,2,12,,ATH-OHS-G120-02"),t.join(`
`)+`
`}exportDemoTemplateCsv(e=re.defaultDivision){return ld(e)}exportEmergencyFallbackHtml(){return kd(mr(this,this.now()))}exportEmergencyFallbackXlsx(){return gd(mr(this,this.now()))}parsePastedRoster(e){const i=e.text.replace(/^\uFEFF/,"").split(/\r\n?|\n/),s=_=>_.trim()&&!_.trimStart().startsWith("#"),n=i.findIndex(s);if(n<0)return[];const a=_=>{const f=_.replace(/"(?:[^"]|"")*"/g,"");return f.includes("	")?"	":f.includes(";")?";":","},o=i[n],c=a(o),[l=[]]=se.parseRosterCsv(o,c),h=l.map(se.normalizeCsvHeaderName),d=["name","athlete_name","public_display_name","full_name","wrestler","wrestler_name","first_name","firstname","first"],u=["weight","weight_class","weight_class_id","weight_class_lbs","weight_lbs","wt_class","wt"];if(h.some(_=>d.includes(_))&&h.some(_=>u.includes(_)))return se.parseRosterCsv(i.slice(n).join(`
`),c).filter(_=>!_[0]?.startsWith("#"));const m=new Set([...this.athletes.values()].flatMap(_=>[_.team_name.toLowerCase(),_.team_id.toLowerCase()])),p=[["name","school","division","weight","seed"]];for(const[_,f]of i.entries()){if(!s(f))continue;const g=f.replace(/^\s*(?:[-*•]|\d+[.)])\s+/,""),w=a(g),[b=[]]=se.parseRosterCsv(g,w),A=b.findIndex(v=>/^\d{2,3}(?:\.\d+)?(?:\s*(?:lbs?|pounds?)\.?)?$/i.test(v));let S="",E="";const C=b.filter((v,R)=>{if(!v||R===A)return!1;if(/^(VARSITY|JV|NOVICE|GIRLS|FROSH)$/i.test(v))return S=v,!1;const k=/^(?:#\s*|seed\s+)?([1-9]|1[0-6])$/i.exec(v);return R>A&&k?(E=k[1],!1):!0}),[$="",y="",I=""]=C;if(A<0||!$||C.length>3)throw new Error(`Check the name, school, and weight on roster row ${_+1}`);let D=$,x=y;I?(D=`${$} ${y}`,x=I):e.defaultTeamName?.trim()&&y&&[$,y].every(v=>!/\s/.test(v)&&!m.has(v.toLowerCase()))&&(D=w===","?`${y} ${$}`:`${$} ${y}`,x=""),p.push([D,x,S,b[A],E])}return p}previewPastedRosterText(e){const{importedCount:t,skippedDuplicates:i}=this.importRoster("",e,!0);return{importedCount:t,skippedDuplicates:i}}importPastedRosterText(e){return this.importRoster("",e)}importRosterCsv(e){return this.importRoster(e)}importRoster(e,t,i=!1){const s=e.replace(/^\uFEFF/,"");let n=null,a=null;for(const E of s.split(/\r?\n/)){const C=E.trim();if(C.startsWith("# OPENMAT_SELF_REG_JSON:"))try{a=JSON.parse(C.slice(24).trim())}catch{}if(C.startsWith("#openmat_tournament_backup_v1:"))try{n=JSON.parse(C.slice(30))}catch{}}n&&this.assertDrawNotStarted();const o=t?this.parsePastedRoster(t):se.parseRosterCsv(s);let c=null;const l=[],h=[],d=[],u=[],m=new Map,p=new Map,_=new Map;let f=0;const g=new Set(["athlete_id","id","athleteid","public_display_name","name","athlete_name","full_name","wrestler","wrestler_name","first_name","firstname","first","last_name","lastname","last","team_id","team_code","team","school_code","team_name","teamname","school_name","school","high_school","club","division_id","division","div","weight_class_id","weight_class_lbs","weight_class","weight_lbs","weight","wt_class","wt","actual_weight_lbs","actual_weight","scale_weight","measured_weight_lbs","seed_rank","seed","grade","year","flowrestling_id","flo_id","check_in_stage","weigh_in_eligible","medically_cleared","medical_decision","medical_reviewer","scale_station_id","scale_id","bracket_frozen","bracket_format","opaque_pass_token"]),w=new Set(xd),b=E=>{const C=E.toUpperCase();return C==="FROSH"?"JV":C};for(const[E,C]of o.entries()){if(E===0){const te=C.map(Oe=>se.normalizeCsvHeaderName(Oe)),he=te[0]??"",pe=he==="athlete_id"||he==="id"||he==="athleteid",Ce=te.filter(Oe=>g.has(Oe)).length;if(pe||Ce>=2){const Oe=new Map;te.forEach((Et,xt)=>{Et&&!Oe.has(Et)&&Oe.set(Et,xt)}),c=Oe;continue}}let $="",y="",I="",D="",x="VARSITY",v="",R="",k="",T="",O=!1;const P=(...te)=>{if(!c)return"";for(const he of te){const pe=c.get(he);if(pe!==void 0&&pe<C.length){const Ce=(C[pe]??"").trim();if(Ce)return Ce}}return""};if(c){const te=P("first_name","firstname","first"),he=P("last_name","lastname","last");y=P("public_display_name","full_name","name","athlete_name","wrestler","wrestler_name")||[te,he].filter(Boolean).join(" ").trim();const Ce=P("school_name","school","high_school","team_name","teamname","club"),Oe=P("team_code","team_id","team","school_code");D=Ce||Oe,I=(Oe||se.deriveTeamCodeFromSchool(D)).toUpperCase(),D||(D=I),x=b(P("division_id","division","div")||t?.defaultDivisionId?.trim()||"VARSITY");const Et=P("weight_class_id","weight_class_lbs","weight_class","wt_class");if(v=Et||P("weight_lbs","weight","wt"),O=!!t||!Et,T=P("actual_weight_lbs","actual_weight","scale_weight","measured_weight_lbs"),R=P("seed_rank","seed"),k=P("flowrestling_id","flo_id"),$=P("athlete_id","id","athleteid"),t){const xt=/^([^,]+),\s*([^,]+)$/.exec(y);xt&&!/^(?:jr\.?|sr\.?|ii|iii|iv)$/i.test(xt[2].trim())&&(y=`${xt[2].trim()} ${xt[1].trim()}`);const cn=t.defaultTeamName?.trim()??"";D=Ce||cn||Oe||"Unattached";const Qa=!Ce||!cn||Ce.toLowerCase()===cn.toLowerCase()?t.defaultTeamId?.trim():"";I=(Oe||Qa||se.deriveTeamCodeFromSchool(D)).toUpperCase()}}else{if(C.length<5)throw new N(B.InvalidArgument,"Roster CSV row requires at least 5 columns (athlete_id,public_display_name,team_id,division_id,weight_class_id)");$=(C[0]??"").trim(),y=(C[1]??"").trim(),I=(C[2]??"").trim().toUpperCase();const te=b(C[3]||"VARSITY"),he=b(C[4]||"VARSITY"),pe=C.length>=6&&!/^\d/.test(he)&&(w.has(he)||!w.has(te));D=pe&&(C[3]??"").trim()||I,x=pe?he:te,v=(pe?C[5]:C[4])??"",R=((pe?C[6]:C[5])??"").trim(),k=((pe?C[7]:C[6])??"").trim()}const W=E+1;if(!t&&!w.has(x))throw new N(B.InvalidArgument,`Select a supported division in CSV record ${W}.`);v=v.replace(/\s*(lbs?|pounds?)\.?$/i,"").trim().replace(/^(\d+)\.0+$/,"$1");const G=si(x);if(O&&!G.includes(v)){const te=/^\d+(?:\.\d+)?$/.test(v)?Number(v):NaN;te>=50&&(T||=v,v=G.find(he=>Number(he)>=te)??"")}if(!t&&!G.includes(v))throw new N(B.InvalidArgument,`Enter a valid weight class for ${x} in CSV record ${W}.`);if(!c&&!$||!y||!I||!v)throw new N(B.InvalidArgument,"Roster CSV row contains empty required identifier field");$||=se.deriveAthleteIdFromFields(x,v,I,y),R=R.replace(/^(?:#\s*|seed\s+)/i,"");let F=0;if(R){const te=Number(R);if(!Number.isInteger(te)||te<0)throw new N(B.InvalidArgument,"Invalid seed_rank in roster CSV");F=te}const q=t?"":P("check_in_stage","stage","status").toUpperCase(),V=P("weigh_in_eligible","weigh_in_passed").toLowerCase(),z=P("medically_cleared","skin_check_cleared","medical_cleared").toLowerCase(),L=P("medical_decision").toUpperCase(),j=P("medical_reviewer","reviewer_id"),Y=P("scale_station_id","station_id"),K=P("scale_id"),ee=P("bracket_frozen").toLowerCase(),ne=P("bracket_format").toUpperCase(),_e=P("opaque_pass_token","pass_token"),ce={1:J.Expected,EXPECTED:J.Expected,2:J.Arrived,ARRIVED:J.Arrived,3:J.WeighInPending,WEIGH_IN_PENDING:J.WeighInPending,"WEIGH-IN PENDING":J.WeighInPending,4:J.MedicalPending,MEDICAL_PENDING:J.MedicalPending,"MEDICAL PENDING":J.MedicalPending,5:J.Eligible,ELIGIBLE:J.Eligible,6:J.Withdrawn,WITHDRAWN:J.Withdrawn,7:J.Scratched,SCRATCHED:J.Scratched}[q],me=!t&&!!(n||q||V||z||L||ee);if(_.has($)){const te=_.get($);if(te.team_id!==I||(te.division_id||"VARSITY").toUpperCase()!==x||te.weight_class_id!==v||te.public_display_name!==y||te.flowrestling_id&&k&&te.flowrestling_id!==k)throw new N(B.InvalidArgument,`Conflicting duplicate athlete_id in roster CSV: ${$}`);f++;continue}const Z=this.athletes.get($);if(Z&&!me){if(Z.team_id!==I||(Z.division_id||"VARSITY").toUpperCase()!==x||Z.weight_class_id!==v||Z.public_display_name!==y||Z.flowrestling_id&&k&&Z.flowrestling_id!==k)throw new N(B.InvalidArgument,`Conflicting duplicate athlete_id in roster CSV: ${$}`);!Z.flowrestling_id&&k&&m.set(Z,k),f++;continue}if(!me&&this.isBracketFrozen(v,x))throw new N(B.InvalidArgument,"Unfreeze the bracket before importing wrestlers");if(me&&(Z||this.isBracketFrozen(v,x))&&this.assertDrawNotStarted(),T){const te=T.replace(/\s*(lbs?|pounds?)\.?$/i,"").trim(),he=Number(te),pe=Math.round(he*10);if(!Number.isFinite(he)||pe<500||pe>3500)throw new N(B.InvalidArgument,"Invalid actual_weight_lbs in roster CSV (must be between 50.0 and 350.0 lbs)");h.push({athleteId:$,stationId:t?.stationId?.trim()||Y||"CSV-IMPORT",scaleId:K||"CSV-SCALE",measuredWeightTenths:pe})}else if(t?t.autoClearEligibility:V==="true"||V==="1"||V==="yes"||ce===J.Eligible){const te=Math.max(550,Math.min(3450,Number(v)*10||1320));h.push({athleteId:$,stationId:t?.stationId?.trim()||Y||"CSV-RESTORE",scaleId:K||"CSV-SCALE",measuredWeightTenths:te})}const Re=new Set(["CLEARED","CLEARED_PHYSICIAN_FORM","MEDICAL_HOLD_DISQUALIFIED","GROOMING_HOLD"]);if(t?.autoClearEligibility?d.push({athleteId:$,reviewerId:t.reviewerId?.trim()||"Head Official",decision:"CLEARED"}):!t&&Re.has(L)?d.push({athleteId:$,reviewerId:j||"CSV-RESTORE",decision:L}):!t&&(z==="true"||z==="1"||z==="yes"||ce===J.Eligible)&&d.push({athleteId:$,reviewerId:j||"CSV-RESTORE",decision:"CLEARED"}),ce!==void 0&&u.push({athleteId:$,stage:ce}),!t&&(ee==="true"||ee==="1"||ee==="yes")){const he=new Set(Object.values(X)).has(ne)?ne:X.DoubleElimCrossover;p.set(`${x}:${v}`,{divisionId:x,weightClassId:v,format:he})}const on=i?"":ue(crypto.getRandomValues(new Uint8Array(16))),ie={athlete_id:$,opaque_pass_token:!t&&_e||Z?.opaque_pass_token||`PASS-${v}-${on}`,public_display_name:y,team_id:I,team_name:D,division_id:x,weight_class_id:v,seed_rank:F,flowrestling_id:k||Z?.flowrestling_id||"",check_in_stage:J.Arrived,weigh_in_eligible:!1,medically_cleared:!1,matches_wrestled_today:Z?.matches_wrestled_today??0,prior_day_matches:Z?.prior_day_matches??0,last_bout_ended_ms:Z?.last_bout_ended_ms??0,updated_at_ms:this.now()};_.set($,ie),l.push(ie)}const A=new Map;for(const E of this.athletes.values()){const C=`${(E.division_id||"VARSITY").toUpperCase()}:${E.weight_class_id}`;E.seed_rank>0&&A.set(C,Math.max(A.get(C)??0,E.seed_rank))}for(const E of l){const C=`${(E.division_id||"VARSITY").toUpperCase()}:${E.weight_class_id}`;E.seed_rank>0&&A.set(C,Math.max(A.get(C)??0,E.seed_rank))}for(const E of l)if(E.seed_rank<=0){const C=`${(E.division_id||"VARSITY").toUpperCase()}:${E.weight_class_id}`,$=A.get(C)??0;$>0?(E.seed_rank=$+1,A.set(C,E.seed_rank)):E.seed_rank=1}if(i)return{importedCount:l.length,skippedDuplicates:f,athletes:[]};p.size&&this.assertDrawNotStarted();for(const[E,C]of m)E.flowrestling_id=C;const S=this.isSeeding;this.isSeeding=!0;try{if(a){for(const E of a.registrations??[])try{const C=Ln(E,this.tournamentId);this.pendingSelfRegistrations.set(C.registration_id,{...C,received_at_ms:E.received_at_ms??this.now(),source:E.source??"NETWORK_FORM",checked_in_athlete_id:E.checked_in_athlete_id,checked_in_at_ms:E.checked_in_at_ms})}catch{}for(const[E,C]of a.dispositions??[])Wt(E)&&["APPROVED","DISMISSED","PENDING"].includes(C.status)&&this.selfRegistrationDispositions.set(E,C)}n&&(n.tournament_id&&(this.tournamentId=n.tournament_id),n.tournament_name&&(this.tournamentName=n.tournament_name),n.event_date&&(this.eventDate=n.event_date),n.venue&&(this.venue=n.venue),n.rules_version&&(this.rulesVersion=n.rules_version),typeof n.growth_allowance_tenths=="number"&&(this.growthAllowanceTenths=n.growth_allowance_tenths),typeof n.consecutive_day_allowance_tenths=="number"&&(this.consecutiveDayAllowanceTenths=n.consecutive_day_allowance_tenths),typeof n.mat_count=="number"&&n.mat_count>=1&&n.mat_count<=ct&&this.configureMatCount(n.mat_count));for(const E of l)this.athletes.set(E.athlete_id,E);for(const E of h)this.athletes.has(E.athleteId)&&this.recordScaleWeighIn({athleteId:E.athleteId,stationId:E.stationId,scaleId:E.scaleId,measuredWeightTenths:E.measuredWeightTenths});for(const E of d)this.athletes.has(E.athleteId)&&this.recordMedicalDecision({athleteId:E.athleteId,reviewerId:E.reviewerId,reviewerRole:"Physician",decision:E.decision,privateClinicalNotes:""});for(const E of u){const C=this.athletes.get(E.athleteId);C&&(C.check_in_stage=E.stage,C.updated_at_ms=this.now())}if(p.size>0)for(const E of p.values())this.generateBracketForClass(E.weightClassId,E.format,E.divisionId);if(n?.bouts&&Array.isArray(n.bouts)&&n.bouts.length>0&&n.bouts.every(C=>(!C.red_athlete_id||this.athletes.has(C.red_athlete_id))&&(!C.green_athlete_id||this.athletes.has(C.green_athlete_id)))){this.bouts=new Map(n.bouts.map(y=>[y.match_id,structuredClone(y)])),this.nextBoutNumber=1+Math.max(100,...Array.from(this.bouts.values()).map(y=>y.bout_number||100)),Array.isArray(n.bracket_frozen_by_class)&&(this.bracketFrozenByClass=new Map(n.bracket_frozen_by_class));const C=new Map,$=new Map;for(const y of this.bouts.values()){if(y.is_bye||!de(y))continue;const I=(y.win_type||"").toUpperCase();if(!(I==="FORFEIT"||I==="BYE"))for(const D of[y.red_athlete_id,y.green_athlete_id]){if(!D)continue;C.set(D,(C.get(D)??0)+1);const x=y.completed_at_ms||0;x>($.get(D)??0)&&$.set(D,x)}}for(const[y,I]of this.athletes.entries())I.matches_wrestled_today=C.get(y)??0,I.last_bout_ended_ms=$.get(y)??0}}finally{this.isSeeding=S}return(l.length>0||m.size>0||h.length>0||d.length>0||p.size>0||a||n)&&this.publishAndSave(),{importedCount:l.length,skippedDuplicates:f,rebuiltBracketClasses:p.size,athletes:l}}hasFailedWeighInOrHold(e){const t=this.privateMedicals.get(e)?.decision;return this.privateWeighIns.get(e)?.passed===!1||t!==void 0&&t!=="CLEARED"&&t!=="CLEARED_PHYSICIAN_FORM"}canBatchClearRosterEligibility(e){return(!e.weigh_in_eligible||!e.medically_cleared)&&!this.isWithdrawn(e.athlete_id)&&!this.hasFailedWeighInOrHold(e.athlete_id)}batchClearRosterEligibility(e){const t=(e?.divisionId??"").trim().toUpperCase(),i=(e?.weightClassId??"").trim(),s=e?.athleteIds&&new Set(e.athleteIds),n=(e?.reviewerId??"").trim()||"Head Official",a=(e?.stationId??"").trim()||"STATION-1";let o=0,c=0;const l=this.isSeeding;this.isSeeding=!0;try{for(const h of this.athletes.values())if(!(s&&!s.has(h.athlete_id))&&!(t&&t!=="ALL"&&(h.division_id||"VARSITY").toUpperCase()!==t)&&!(i&&i!=="ALL"&&h.weight_class_id!==i)){if(!this.canBatchClearRosterEligibility(h)){this.hasFailedWeighInOrHold(h.athlete_id)&&c++;continue}if(!h.weigh_in_eligible){const d=this.privateWeighIns.get(h.athlete_id)?.measured_weight_tenths??Math.max(550,Math.min(3450,Number(h.weight_class_id)*10||1320));this.recordScaleWeighIn({athleteId:h.athlete_id,stationId:a,scaleId:"SCALE-BATCH",measuredWeightTenths:d})}h.medically_cleared||this.recordMedicalDecision({athleteId:h.athlete_id,reviewerId:n,reviewerRole:"Physician",decision:"CLEARED",privateClinicalNotes:""}),o++}}finally{this.isSeeding=l}return o>0&&this.publishAndSave(),{clearedCount:o,skippedHoldOrFailedCount:c}}lookupByOpaquePassToken(e){const t=e.trim().toUpperCase();for(const i of this.athletes.values())if(i.opaque_pass_token.toUpperCase()===t||i.athlete_id.toUpperCase()===t)return{found:!0,athlete:i,impliesEligibilityAttestation:!1};return{found:!1,impliesEligibilityAttestation:!1}}stageSelfRegistration(e,t="NETWORK_FORM",i=!0){const s=Ln(e,this.tournamentId,this.now());if(s.tournament_id!==this.tournamentId)throw new Error("This pass belongs to another tournament");const n=Ci(s.registration_id),a=this.selfRegistrationDispositions.get(s.registration_id);if(a?.status==="DISMISSED"&&s.revision<=a.revision&&t!=="QR_SCAN"){const u=this.pendingSelfRegistrations.get(s.registration_id);if(u)return{entry:u};const m={...s,received_at_ms:this.now(),source:t};return this.pendingSelfRegistrations.set(s.registration_id,m),i&&this.saveToStorage(),{entry:m}}const o=t==="QR_SCAN"&&a?.status==="DISMISSED";o&&(this.selfRegistrationDispositions.set(s.registration_id,{status:"PENDING",revision:Math.max(s.revision,a.revision),updated_at_ms:Math.max(this.now(),a.updated_at_ms+1),synced:!1}),i&&this.postSelfRegistrationDisposition(s.registration_id));const c=this.pendingSelfRegistrations.get(s.registration_id),l=this.athletes.get(a?.athlete_id??c?.checked_in_athlete_id??n);if(l){const u={...c??s,received_at_ms:c?.received_at_ms??this.now(),source:c?.source??t,checked_in_athlete_id:l.athlete_id,checked_in_at_ms:c?.checked_in_at_ms??l.updated_at_ms};return(!c||!c.checked_in_athlete_id)&&(this.pendingSelfRegistrations.set(s.registration_id,u),i&&this.saveToStorage()),{entry:u,alreadyCheckedInAthlete:l}}if(!c&&t!=="QR_SCAN"&&this.listUncheckedSelfRegistrations().length>=rd)throw new N(B.InvalidArgument,"Pending self-registration staging queue is full");if(!(!c||s.revision>c.revision||s.revision===c.revision&&(s.updated_at_ms>c.updated_at_ms||s.updated_at_ms===c.updated_at_ms&&c.source==="NETWORK_FORM"&&Object.keys(s).some(u=>u!=="submitted_at_ms"&&s[u]!==c[u]))))return o&&(c.source="QR_SCAN"),o&&i&&(this.saveToStorage(),this.onStateChanged?.()),{entry:c};const d={...s,received_at_ms:c?.received_at_ms??this.now(),source:t};return this.pendingSelfRegistrations.set(s.registration_id,d),i&&(this.saveToStorage(),this.onStateChanged?.()),{entry:d}}listUncheckedSelfRegistrations(e){const t=(e?.search??"").trim().toLowerCase(),i=(e?.divisionId??"").trim().toUpperCase(),s=[];for(const n of this.pendingSelfRegistrations.values()){const a=this.selfRegistrationDispositions.get(n.registration_id);if(a?.status==="DISMISSED"&&n.revision<=a.revision)continue;const o=`ATH-${n.registration_id}`;a?.status==="APPROVED"&&this.athletes.has(a.athlete_id??o)||n.checked_in_athlete_id&&this.athletes.has(n.checked_in_athlete_id)||this.athletes.has(o)||i&&i!=="ALL"&&n.division_id.toUpperCase()!==i||t&&!(n.public_display_name.toLowerCase().includes(t)||n.first_name.toLowerCase().includes(t)||n.last_name.toLowerCase().includes(t)||n.team_name.toLowerCase().includes(t)||n.team_id.toLowerCase().includes(t)||n.weight_class_id.toLowerCase().includes(t)||n.registration_id.toLowerCase().includes(t))||s.push(n)}return s.sort((n,a)=>(n.registration_id===this.selectedPendingSelfRegId?-1:0)-(a.registration_id===this.selectedPendingSelfRegId?-1:0)||a.updated_at_ms-n.updated_at_ms||n.public_display_name.localeCompare(a.public_display_name))}scanOrLookupWrestlerQrOrToken(e){const t=e.trim();if(!t)return{kind:"NOT_FOUND",reason:"Empty pass or QR code"};const i=Dn(t,this.tournamentId);if(i.valid){if(i.record){let n;try{n=this.stageSelfRegistration(i.record,"QR_SCAN")}catch(a){return{kind:"NOT_FOUND",reason:a instanceof Error?a.message:String(a)}}return n.alreadyCheckedInAthlete?{kind:"ATHLETE",athlete:n.alreadyCheckedInAthlete,pendingEntry:n.entry,reason:`Already checked in: ${n.alreadyCheckedInAthlete.public_display_name}`}:(this.selectedPendingSelfRegId=n.entry.registration_id,this.onStateChanged?.(),{kind:"PENDING_SELF_REG",pendingEntry:n.entry,reason:`Staged self-registration for ${n.entry.public_display_name} (${n.entry.team_name}, ${n.entry.weight_class_id} lbs) — confirm weigh-in to check in`})}if(i.registrationIdOnly){if(i.tournamentId&&i.tournamentId!==this.tournamentId)return{kind:"NOT_FOUND",reason:"This pass belongs to another tournament"};const n=i.registrationIdOnly,a=this.athletes.get(this.selfRegistrationDispositions.get(n)?.athlete_id??Ci(n));if(a)return{kind:"ATHLETE",athlete:a,reason:`Already checked in: ${a.public_display_name}`};const o=this.pendingSelfRegistrations.get(n);if(o){const c=this.stageSelfRegistration(o,"QR_SCAN");return this.selectedPendingSelfRegId=c.entry.registration_id,this.onStateChanged?.(),{kind:"PENDING_SELF_REG",pendingEntry:c.entry,reason:`Selected pending self-registration: ${c.entry.public_display_name} (${c.entry.weight_class_id} lbs)`}}}}const s=this.lookupByOpaquePassToken(t);return s.found&&s.athlete?{kind:"ATHLETE",athlete:s.athlete,reason:`Found registered wrestler: ${s.athlete.public_display_name}`}:{kind:"NOT_FOUND",reason:`No wrestler or self-registration found for "${t}"`}}approveSelfRegistration(e){const t=e.registrationId.trim().toUpperCase();if(!Wt(t))throw new N(B.InvalidArgument,`Invalid self-registration ID: ${e.registrationId}`);const i=this.pendingSelfRegistrations.get(t);if(!i)throw new N(B.InvalidArgument,`Unknown self-registration: ${t}`);if(e.checkInAndClear&&(e.measuredWeightTenths===void 0||!Number.isInteger(e.measuredWeightTenths)||e.measuredWeightTenths<500||e.measuredWeightTenths>3500))throw new N(B.InvalidArgument,"Enter a scale weight between 50.0 and 350.0 lb");const s=Ci(t);let n=this.findSelfRegistrationAthlete(i);const a=e.reassignWeightClassId||n?.weight_class_id||i.weight_class_id;return this.validateWeightClass(n?.division_id??i.division_id,a,n?.weight_class_id),n||(n=this.registerAthlete({athleteId:s,name:i.public_display_name,teamId:i.team_id,teamName:i.team_name,divisionId:i.division_id,weightClassId:a,seedRank:e.seedRank??1})),e.checkInAndClear?n=this.completeUnifiedCheckIn({athleteId:n.athlete_id,measuredWeightTenths:e.measuredWeightTenths,reassignWeightClassId:a!==n.weight_class_id?a:void 0,skinDecision:e.skinDecision??"CLEARED",stationId:e.stationId,scaleId:e.scaleId,reviewerId:e.reviewerId,reviewerRole:e.reviewerRole,privateClinicalNotes:e.privateClinicalNotes}):n.weight_class_id!==a&&(n.weight_class_id=a,n.updated_at_ms=this.now(),this.publishAndSave()),i.checked_in_athlete_id=n.athlete_id,i.checked_in_at_ms=this.now(),this.selfRegistrationDispositions.set(t,{status:"APPROVED",athlete_id:n.athlete_id,revision:i.revision,updated_at_ms:Math.max(this.now(),(this.selfRegistrationDispositions.get(t)?.updated_at_ms??0)+1),synced:!1}),this.selectedPendingSelfRegId===t&&(this.selectedPendingSelfRegId=""),this.isSeeding||(this.postSelfRegistrationDisposition(t),this.saveToStorage(),this.onStateChanged?.()),n}findSelfRegistrationAthlete(e){const t=this.athletes.get(e.checked_in_athlete_id??Ci(e.registration_id));if(t)return t;const i=h=>h.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/\s+/g," ").trim(),s=i(e.public_display_name),n=i(e.team_id),a=i(e.team_name),o=i(e.division_id),c=[...this.athletes.values()].filter(h=>!this.isWithdrawn(h.athlete_id)&&i(h.public_display_name)===s&&(i(h.team_id)===n||i(h.team_name)===a)),l=c.filter(h=>i(h.division_id)===o);return l.length===1?l[0]:l.length===0&&c.length===1?c[0]:void 0}selfRegistrationWeightClass(e,t){return t<=this.maxAllowedTenthsForClass(e.weight_class_id)?e.weight_class_id:si(e.division_id).find(i=>Number(i)>=Number(e.weight_class_id)&&t<=this.maxAllowedTenthsForClass(i))??e.weight_class_id}batchApproveSelfRegistrations(e={}){const t=e.registrationIds&&new Set(e.registrationIds.map(o=>o.trim().toUpperCase()));let i=0,s=0;const n=[],a=this.isSeeding;this.isSeeding=!0;try{for(const o of this.listUncheckedSelfRegistrations()){const c=o.registration_id;if(t&&!t.has(c))continue;const l=e.weightInputsByRegId?.[c]?.trim(),h=l?Math.round(Number(l)*10):void 0,d=this.findSelfRegistrationAthlete(o),u=d??o,m=e.checkInAndClear&&!(d&&this.hasFailedWeighInOrHold(d.athlete_id)),p=h!==void 0||!!m,_=e.classInputsByRegId?.[c],f=_||(h===void 0?u.weight_class_id:this.selfRegistrationWeightClass(u,h)),g=d&&this.privateMedicals.get(d.athlete_id),w=d&&this.privateWeighIns.get(d.athlete_id);try{const b=this.approveSelfRegistration({registrationId:c,checkInAndClear:p,measuredWeightTenths:h??w?.measured_weight_tenths??Number(f)*10,reassignWeightClassId:p?f:_,skinDecision:e.skinInputsByRegId?.[c]??g?.decision??"CLEARED",stationId:e.stationId,scaleId:e.scaleId,reviewerId:e.reviewerId,privateClinicalNotes:g?.private_clinical_notes});i++,p&&b.check_in_stage===J.Eligible&&s++}catch(b){n.push({registrationId:c,message:b instanceof Error?b.message:String(b)})}}}finally{this.isSeeding=a}return i&&(this.publishAndSave(),this.syncPendingSelfRegistrationsFromVenue()),{approvedCount:i,clearedCount:s,failures:n}}dismissSelfRegistration(e){const t=e.trim().toUpperCase(),i=this.pendingSelfRegistrations.get(t),s=!!i;return this.selectedPendingSelfRegId===t&&(this.selectedPendingSelfRegId=""),s&&(this.selfRegistrationDispositions.set(t,{status:"DISMISSED",revision:i.revision,updated_at_ms:Math.max(this.now(),(this.selfRegistrationDispositions.get(t)?.updated_at_ms??0)+1),synced:!1}),this.postSelfRegistrationDisposition(t),this.saveToStorage(),this.onStateChanged?.()),s}async postSelfRegistrationDisposition(e,t=this.activeVenueOrigin,i=!0){const s=this.selfRegistrationDispositions.get(e);if(!s||!t||typeof fetch>"u")return!1;try{if((await fetch(`${t.replace(/\/+$/,"")}/api/openmat-self-register`,{method:"POST",headers:{"Content-Type":"application/json"},signal:AbortSignal.timeout(3500),body:JSON.stringify({disposition:{registration_id:e,tournament_id:this.tournamentId,status:s.status,revision:s.revision,updated_at_ms:s.updated_at_ms,athlete_id:s.athlete_id}})})).ok&&this.selfRegistrationDispositions.get(e)===s)return s.synced=!0,i&&this.saveToStorage(),!0}catch{}return!1}selfRegistrationPolls=new Map;syncPendingSelfRegistrationsFromVenue(e=this.activeVenueOrigin){if(typeof fetch>"u"||!e||globalThis.navigator?.onLine===!1)return Promise.resolve(0);const t=`${this.tournamentId}:${e}`,i=this.selfRegistrationPolls.get(t);if(i)return i;const s=this.fetchPendingSelfRegistrations(e).finally(()=>this.selfRegistrationPolls.delete(t));return this.selfRegistrationPolls.set(t,s),s}async fetchPendingSelfRegistrations(e){try{const t=this.tournamentId,i=e.trim().replace(/\/+$/,"");if(/github\.io$/i.test(new URL(i).hostname))return 0;const s=[...this.selfRegistrationDispositions.entries()].filter(([,u])=>!u.synced).map(([u])=>u);let n=!1;for(let u=0;u<s.length&&this.tournamentId===t&&(await Promise.all(s.slice(u,u+12).map(p=>this.postSelfRegistrationDisposition(p,i,!1)))).some(Boolean);u+=12)n=!0;if(this.tournamentId!==t)return 0;n&&this.saveToStorage(),n=!1;const a=await fetch(`${i}/api/openmat-self-registrations?tournament=${encodeURIComponent(t)}`,{signal:AbortSignal.timeout(3500)});if(!a.ok)return 0;const o=await a.json();if(this.tournamentId!==t||!Array.isArray(o.registrations))return 0;const c=new Map(this.listUncheckedSelfRegistrations().map(u=>[u.registration_id,u]));let l=0;const h=new Set(o.registrations.flatMap(u=>{const m=u;return m?.tournament_id===t&&typeof m.registration_id=="string"?[m.registration_id]:[]}));for(const u of o.dispositions??[]){if((u?.tournament_id?u.tournament_id!==t:!h.has(u?.registration_id)&&!this.pendingSelfRegistrations.has(u?.registration_id))||!u?.registration_id||!["APPROVED","DISMISSED","PENDING"].includes(u.status))continue;const m=this.pendingSelfRegistrations.get(u.registration_id);if(u.status==="DISMISSED"&&m?.source==="QR_SCAN"&&m.revision<=u.revision)continue;const p=this.selfRegistrationDispositions.get(u.registration_id);p?.status==="APPROVED"&&u.status==="PENDING"||(!p||u.revision>p.revision||u.revision===p.revision&&u.updated_at_ms>p.updated_at_ms?(this.selfRegistrationDispositions.set(u.registration_id,{...u,synced:!0}),l++):p.revision===u.revision&&p.updated_at_ms===u.updated_at_ms&&p.status===u.status&&!p.synced&&(p.synced=!0,n=!0))}for(const u of o.registrations)try{const m=u&&typeof u=="object"&&typeof u.registration_id=="string"?this.pendingSelfRegistrations.get(String(u.registration_id).toUpperCase()):void 0,{entry:p}=this.stageSelfRegistration(u,"NETWORK_FORM",!1);this.pendingSelfRegistrations.get(p.registration_id)===p&&p!==m&&l++}catch{}if(!l&&!n)return 0;this.saveToStorage();let d=0;for(const u of this.listUncheckedSelfRegistrations())c.get(u.registration_id)!==u&&d++,c.delete(u.registration_id);return d+=c.size,d&&this.onStateChanged?.(),d}catch{return 0}}setCheckInStage(e,t){const i=this.athletes.get(e);if(!i)throw new N(B.InvalidArgument,`Unknown athlete: ${e}`);const s=t===J.Scratched||t===J.Withdrawn;if(this.isWithdrawn(e)&&!s){if(t!==J.Arrived)throw new Error("Reinstate the wrestler before check-in.");return this.reinstateAthlete(i),this.publishAndSave(),i}if(s&&!this.isWithdrawn(e)){const n=this.scheduledBoutsForAthlete(e).find(o=>!this.isUnstartedBout(o));if(n)throw new Error(`Ask the tournament director to review bout ${n.bout_number} before scratching this wrestler.`);const a=this.forfeitsForAthlete(e).map(o=>o.match_id);this.scratches.set(e,{priorForfeits:a,results:[]})}if(t===J.Eligible&&(!i.weigh_in_eligible||!i.medically_cleared))throw new N(B.InvalidArgument,`Cannot mark ${i.public_display_name} Eligible until both Weigh-In and Medical/Skin Check are passed.`);if(i.check_in_stage=t,i.updated_at_ms=this.now(),s&&this.advanceScratches(i.updated_at_ms))for(const n of this.mats.keys())this.promoteMatReadyBout(n,i.updated_at_ms);return this.publishAndSave(),i}maxAllowedTenthsForClass(e){return Number(e)*10+this.growthAllowanceTenths+this.consecutiveDayAllowanceTenths}validateWeightClass(e,t,i){if(t===i)return;const s=(e||"VARSITY").trim().toUpperCase();if(!si(s).includes(t))throw new Error("Select a weight class in this division");if(i){const n=[...this.bouts.values()].filter(o=>(o.division_id||"VARSITY").toUpperCase()===s&&(o.weight_class_id===i||o.weight_class_id===t)),a=n.find(o=>this.drawLocked(o));if(a)throw new Error(`Bout ${a.bout_number} locks the ${s} ${a.weight_class_id} lb bracket. Keep the wrestler in the current class.`);if(n.length)throw new Error(`Check ${s} ${i} lb and ${t} lb in Brackets & Seeds. Select Clear Bracket for each class with bouts before you change weight class.`)}if(i&&this.isBracketFrozen(i,s)||this.isBracketFrozen(t,s))throw new Error("You cannot move a wrestler into or out of a frozen bracket")}forfeitsForAthlete(e){return[...this.bouts.values()].filter(t=>(t.red_athlete_id===e||t.green_athlete_id===e)&&(t.win_type==="FORFEIT"&&t.winner_athlete_id!==e||t.is_bye&&!t.winner_athlete_id))}needsReinstatement(e){return e.check_in_stage===J.Scratched?!0:e.check_in_stage===J.Withdrawn&&(this.scratches.has(e.athlete_id)||this.forfeitsForAthlete(e.athlete_id).length>0)}recordScaleWeighIn(e){const t=this.athletes.get(e.athleteId);if(!t)throw new N(B.InvalidArgument,`Unknown athlete: ${e.athleteId}`);if(this.needsReinstatement(t))throw new Error("Reinstate the wrestler before check-in.");if(!Number.isInteger(e.measuredWeightTenths)||e.measuredWeightTenths<500||e.measuredWeightTenths>3500)throw new N(B.InvalidArgument,"Weight must be an integer in tenths of a pound between 50.0 and 350.0 lbs");e.reassignWeightClassId&&(this.validateWeightClass(t.division_id,e.reassignWeightClassId,t.weight_class_id),t.weight_class_id=e.reassignWeightClassId);const s=(this.privateWeighIns.get(t.athlete_id)?.attempt_number??0)+1,n=this.maxAllowedTenthsForClass(t.weight_class_id),a=e.measuredWeightTenths<=n,o={athlete_id:t.athlete_id,station_id:e.stationId,scale_id:e.scaleId,attempt_number:s,measured_weight_tenths:e.measuredWeightTenths,max_allowed_tenths:n,passed:a,recorded_at_ms:this.now()};return this.privateWeighIns.set(t.athlete_id,o),t.weigh_in_eligible=a,this.privateMedicals.get(t.athlete_id)?.decision==="MEDICAL_HOLD_DISQUALIFIED"?t.check_in_stage=J.Withdrawn:a&&t.medically_cleared?t.check_in_stage=J.Eligible:a?t.check_in_stage=J.MedicalPending:t.check_in_stage=J.WeighInPending,t.updated_at_ms=this.now(),this.publishAndSave(),o}recordMedicalDecision(e){const t=this.athletes.get(e.athleteId);if(!t)throw new N(B.InvalidArgument,`Unknown athlete: ${e.athleteId}`);const i=this.needsReinstatement(t);if(!e.reviewerId.trim())throw new N(B.InvalidArgument,"Authorized human medical reviewer ID is required (REQ-MED-01)");const s=e.decision==="CLEARED"||e.decision==="CLEARED_PHYSICIAN_FORM",n={athlete_id:t.athlete_id,reviewer_id:e.reviewerId.trim(),reviewer_role:e.reviewerRole,decision:e.decision,skin_clear:e.decision!=="MEDICAL_HOLD_DISQUALIFIED",grooming_compliant:e.decision!=="GROOMING_HOLD",private_clinical_notes:e.privateClinicalNotes.trim(),recorded_at_ms:this.now()};return this.privateMedicals.set(t.athlete_id,n),t.medically_cleared=s,i||(s&&t.weigh_in_eligible?t.check_in_stage=J.Eligible:s&&!t.weigh_in_eligible?t.check_in_stage=J.WeighInPending:!s&&e.decision==="MEDICAL_HOLD_DISQUALIFIED"?t.check_in_stage=J.Withdrawn:t.check_in_stage=J.MedicalPending),t.updated_at_ms=this.now(),this.publishAndSave(),n}completeUnifiedCheckIn(e){const t=this.athletes.get(e.athleteId);if(!t)throw new N(B.InvalidArgument,`Unknown athlete: ${e.athleteId}`);const i=e.reassignWeightClassId&&gs.includes(e.reassignWeightClassId)?e.reassignWeightClassId:t.weight_class_id,n=this.privateWeighIns.get(t.athlete_id)?.measured_weight_tenths??Math.max(550,Math.min(3450,Number(i)*10||1320)),a=e.measuredWeightTenths??n,o=this.isSeeding;this.isSeeding=!0;try{this.recordScaleWeighIn({athleteId:t.athlete_id,stationId:(e.stationId??"").trim()||"CHECKIN-1",scaleId:(e.scaleId??"").trim()||"SCALE-1",measuredWeightTenths:a,reassignWeightClassId:e.reassignWeightClassId}),(e.skinDecision!==void 0||!this.privateMedicals.has(t.athlete_id))&&this.recordMedicalDecision({athleteId:t.athlete_id,reviewerId:(e.reviewerId??"").trim()||"Head Official",reviewerRole:e.reviewerRole??"Physician",decision:e.skinDecision??"CLEARED",privateClinicalNotes:e.privateClinicalNotes??""})}finally{this.isSeeding=o}return this.publishAndSave(),this.athletes.get(t.athlete_id)}generateAllBrackets(e=X.DoubleElimCrossover,t){const i=(t??"").trim().toUpperCase(),s=new Set;for(const c of this.athletes.values())if(c.check_in_stage===J.Eligible&&c.weigh_in_eligible&&c.medically_cleared){const l=(c.division_id||"VARSITY").toUpperCase();if(i&&i!=="ALL"&&l!==i)continue;s.add(`${l}:${c.weight_class_id}`)}const n=Array.from(s).sort((c,l)=>{const[h,d]=c.split(":"),[u,m]=l.split(":");return(h||"").localeCompare(u||"")||Number(d)-Number(m)}),a=[];let o=0;for(const c of n){const[l,h]=c.split(":"),d=this.generateBracketForClass(h,e,l);d.length>0&&(a.push(`${l} ${h} lbs`),o+=d.length)}return a.length>0&&![...this.bouts.values()].some(c=>this.drawLocked(c))&&(this.rebalanceMatsInRunningOrder(),this.publishAndSave()),{generatedClasses:a,totalBouts:o}}purgePrivateClinicalNotes(){let e=0;for(const t of this.privateMedicals.values())t.private_clinical_notes&&(t.private_clinical_notes="[PURGED POST-EVENT PER REQ-PRIV-04]",e++);return this.saveToStorage(),e}isBracketFrozen(e,t){const i=(t??"").trim().toUpperCase();if(i&&i!=="ALL"){const s=this.bracketFrozenByClass.get(`${i}:${e}`);if(s!==void 0)return s;const n=new Set(Array.from(this.athletes.values()).filter(o=>o.weight_class_id===e).map(o=>(o.division_id||"VARSITY").toUpperCase()));if(n.size>1)return!1;const[a]=n;if(a&&this.bracketFrozenByClass.has(`${a}:${e}`))return!1}return this.bracketFrozenByClass.get(e)??!1}frozenSeedDivisions(e){const t=new Set;for(const i of[...this.athletes.values(),...this.bouts.values()])i.weight_class_id===e&&t.add((i.division_id||"VARSITY").toUpperCase());return new Set([...t].filter(i=>this.isBracketFrozen(e,i)))}unfreezeSeeds(e,t){const i=this.frozenSeedDivisions(e),s=t.trim().toUpperCase(),n=[...i].filter(a=>s==="ALL"||s===a);if(!n.length)return!1;for(const a of n)this.bracketFrozenByClass.set(`${a}:${e}`,!1);return n.length===i.size&&this.bracketFrozenByClass.get(e)&&this.bracketFrozenByClass.set(e,!1),this.publishAndSave(),!0}moveSeed(e,t){const i=this.athletes.get(e);if(!i)return;if(this.isBracketFrozen(i.weight_class_id,i.division_id))throw new N(B.InvalidArgument,`Bracket for ${i.division_id} ${i.weight_class_id} lbs is frozen. Unfreeze before reordering seeds.`);const s=Array.from(this.athletes.values()).filter(l=>l.weight_class_id===i.weight_class_id&&l.division_id===i.division_id).sort((l,h)=>l.seed_rank-h.seed_rank||l.athlete_id.localeCompare(h.athlete_id)),n=s.findIndex(l=>l.athlete_id===e),a=n+t;if(n<0||a<0||a>=s.length)return;const o=s[a],c=i.seed_rank;i.seed_rank=o.seed_rank,o.seed_rank=c,i.seed_rank===o.seed_rank&&s.forEach((l,h)=>{l.seed_rank=h+1}),this.publishAndSave()}autoSeparateSameTeamSeeds(e,t){const i=(t??"").trim().toUpperCase(),s=Array.from(this.athletes.values()).filter(n=>n.weight_class_id===e&&(!i||i==="ALL"||n.division_id.toUpperCase()===i)&&n.check_in_stage===J.Eligible&&n.weigh_in_eligible&&n.medically_cleared).sort((n,a)=>n.seed_rank-a.seed_rank);for(let n=0;n<s.length-1;n++){const a=s[n],o=s[n+1];if(a.team_id===o.team_id&&n+2<s.length){const c=s[n+2],l=o.seed_rank;o.seed_rank=c.seed_rank,c.seed_rank=l}}s.sort((n,a)=>n.seed_rank-a.seed_rank).forEach((n,a)=>{n.seed_rank=a+1}),this.publishAndSave()}drawLocked(e){return!e.is_bye&&(e.lifecycle>=M.Ready||e.clock_running||e.red_score>0||e.green_score>0||e.completed_at_ms>0)}assertDrawNotStarted(){if([...this.bouts.values()].some(e=>this.drawLocked(e)))throw new Error("Bout numbers are locked. Finish the tournament before you replace its brackets.")}unfreezeBracket(e,t){const i=(t??"").trim().toUpperCase(),s=new Set(Array.from(this.athletes.values()).filter(a=>a.weight_class_id===e).map(a=>(a.division_id||"VARSITY").toUpperCase())),n=i&&i!=="ALL"?i:s.size===1?Array.from(s)[0]:"";for(const a of this.bouts.values()){const o=(a.division_id||"VARSITY").toUpperCase();if(a.weight_class_id===e&&(!n||o===n)&&this.drawLocked(a))throw new Error(`Bout ${a.bout_number} locks this bracket. You cannot clear it.`)}for(const[a,o]of this.bouts.entries()){const c=(o.division_id||"VARSITY").toUpperCase();o.weight_class_id===e&&(!n||c===n)&&(this.bouts.delete(a),this.deletedMatchIds.add(a),this.clearedRestMatchIds.delete(a))}if(n)this.bracketFrozenByClass.set(`${n}:${e}`,!1);else for(const a of this.bracketFrozenByClass.keys())a.endsWith(`:${e}`)&&this.bracketFrozenByClass.set(a,!1);this.bracketFrozenByClass.get(e)&&!this.frozenSeedDivisions(e).size&&this.bracketFrozenByClass.set(e,!1),[...this.bouts.values()].some(a=>this.drawLocked(a))||this.numberBoutsInRunningOrder(),this.publishAndSave()}numberBoutsInRunningOrder(){const e=[...this.bouts.values()].sort((i,s)=>i.round_index-s.round_index||Number(i.weight_class_id)-Number(s.weight_class_id)||(i.division_id||"").localeCompare(s.division_id||"")||Number(i.is_consolation)-Number(s.is_consolation)||i.bout_number-s.bout_number||i.match_id.localeCompare(s.match_id)),t=new Map;e.forEach((i,s)=>{i.bout_number=101+s;const n=(t.get(i.assigned_mat_id)||0)+1;t.set(i.assigned_mat_id,n),i.mat_queue_order=n}),this.bouts=new Map(e.map(i=>[i.match_id,i])),this.nextBoutNumber=101+e.length}rebalanceMatsInRunningOrder(){const e=[...this.bouts.values()].sort((s,n)=>s.round_index-n.round_index||Number(s.weight_class_id)-Number(n.weight_class_id)||(s.division_id||"").localeCompare(n.division_id||"")||Number(s.is_consolation)-Number(n.is_consolation)||s.bout_number-n.bout_number||s.match_id.localeCompare(n.match_id)),t=new Map;let i=0;e.forEach((s,n)=>{if(s.bout_number=101+n,!s.is_bye){const o=i%this.matCount+1;i+=1,s.assigned_mat_id=o,s.delegated_android_device_id=this.mats.get(o)?.android_device_id||`mat-${o}-scorekeeper`}const a=(t.get(s.assigned_mat_id)||0)+1;t.set(s.assigned_mat_id,a),s.mat_queue_order=a}),this.bouts=new Map(e.map(s=>[s.match_id,s])),this.nextBoutNumber=101+e.length}static recommendBracketFormatForCount(e,t=X.DoubleElimCrossover){return e===2?X.BestOfThree:e>=1&&e<=5?X.RoundRobinPool:t===X.TrueSecondChallenge?X.TrueSecondChallenge:t===X.RoundRobinPool?X.RoundRobinPool:X.DoubleElimCrossover}generateBracketForClass(e,t=X.AutoByCount,i){const s=(i??"").trim().toUpperCase(),n=new Set(Array.from(this.athletes.values()).filter(_=>_.weight_class_id===e&&_.check_in_stage===J.Eligible&&_.weigh_in_eligible&&_.medically_cleared).map(_=>(_.division_id||"VARSITY").toUpperCase()));if((!s||s==="ALL")&&n.size>1)throw new N(B.InvalidArgument,`Multiple divisions (${Array.from(n).join(", ")}) share weight class ${e}; specify divisionId.`);const a=s&&s!=="ALL"?s:n.size===1?Array.from(n)[0]:"VARSITY";for(const _ of this.bouts.values()){const f=(_.division_id||"VARSITY").toUpperCase();if(_.weight_class_id===e&&f===a&&this.drawLocked(_))throw new Error("Bout numbers are locked. Finish the tournament before you replace its brackets.")}const o=new Set(Array.from(this.athletes.values()).filter(_=>_.weight_class_id===e).map(_=>(_.division_id||"VARSITY").toUpperCase())).size>1,l=o||!!s&&s!=="ALL"&&s!=="VARSITY"?`${a}-${e}`:e,h=Array.from(this.athletes.values()).filter(_=>_.weight_class_id===e&&(_.division_id||"VARSITY").toUpperCase()===a&&_.check_in_stage===J.Eligible&&_.weigh_in_eligible&&_.medically_cleared).sort((_,f)=>_.seed_rank-f.seed_rank||_.athlete_id.localeCompare(f.athlete_id));if(h.length>64)throw new N(B.BoundsExceeded,`Active entrants (${h.length}) exceed 64-athlete bracket capacity.`);for(const[_,f]of this.bouts.entries()){const g=(f.division_id||"VARSITY").toUpperCase();f.weight_class_id===e&&g===a&&(this.bouts.delete(_),this.deletedMatchIds.add(_))}if(h.length===0)return[];h.forEach((_,f)=>{_.seed_rank=f+1});let d=t;h.length===1?d=X.RoundRobinPool:h.length===2?d=t===X.RoundRobinPool?X.RoundRobinPool:X.BestOfThree:h.length>=3&&h.length<=5?d=X.RoundRobinPool:(t===X.AutoByCount||t===X.BestOfThree)&&(d=X.DoubleElimCrossover);const u=[],m=`BRK-${l}-${d}`;if(h.length===1){const _=h[0],f=`BOUT-${l}-WALKOVER-1ST`,g={match_id:f,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:1,round_label:"Uncontested 1st Place (Walkover)",is_consolation:!1,is_placement_bout:!0,is_true_second_challenge:!1,placement_rank:1,red_athlete_id:_.athlete_id,green_athlete_id:"",is_bye:!0,winner_next_match_id:"",loser_next_match_id:"",lifecycle:M.ResultAccepted,assigned_mat_id:1,mat_queue_order:1,assignment_revision:1,authority_epoch:1,delegated_android_device_id:"mat-1-scorekeeper",red_score:0,green_score:0,period_number:1,clock_remaining_ms:0,clock_running:!1,winner_athlete_id:_.athlete_id,loser_athlete_id:"",win_type:"BYE",completed_at_ms:this.now()};this.bouts.set(f,g),u.push(g)}else if(d===X.BestOfThree){const _=h[0],f=h[1],g=`BOUT-${l}-BO3-1`,w=`BOUT-${l}-BO3-2`,b=`BOUT-${l}-BO3-3`;[{matchId:g,roundIndex:1,roundLabel:"Best of 3 — Match 1",redId:_.athlete_id,greenId:f.athlete_id,nextId:w,lifecycle:M.Assigned,isPlacement:!1,placementRank:0},{matchId:w,roundIndex:2,roundLabel:"Best of 3 — Match 2",redId:f.athlete_id,greenId:_.athlete_id,nextId:b,lifecycle:M.PendingUpstream,isPlacement:!1,placementRank:0},{matchId:b,roundIndex:3,roundLabel:"Best of 3 — Match 3 (If Necessary)",redId:_.athlete_id,greenId:f.athlete_id,nextId:"",lifecycle:M.PendingUpstream,isPlacement:!0,placementRank:1}].forEach((S,E)=>{const C=E%this.matCount+1,$={match_id:S.matchId,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:S.roundIndex,round_label:S.roundLabel,is_consolation:!1,is_placement_bout:S.isPlacement,is_true_second_challenge:!1,placement_rank:S.placementRank,red_athlete_id:S.redId,green_athlete_id:S.greenId,is_bye:!1,winner_next_match_id:S.nextId,loser_next_match_id:S.nextId,lifecycle:S.lifecycle,assigned_mat_id:C,mat_queue_order:E+1,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${C}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(S.matchId,$),u.push($)})}else if(d===X.RoundRobinPool){const _=[...h];_.length%2&&_.push(void 0);for(let f=1;f<_.length;f++){for(let g=0;g<_.length/2;g++){const w=_[g],b=_[_.length-1-g];if(!w||!b)continue;const A=this.nextBoutNumber++,S=`BOUT-${l}-RR${u.length+1}`,E={match_id:S,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:A,round_index:f,round_label:`Pool Round ${f}`,is_consolation:!1,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:w.athlete_id,green_athlete_id:b.athlete_id,is_bye:!1,winner_next_match_id:"",loser_next_match_id:"",lifecycle:M.Assigned,assigned_mat_id:u.length%this.matCount+1,mat_queue_order:u.length+1,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${u.length%this.matCount+1}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(S,E),u.push(E)}_.splice(1,0,_.pop())}}else if(h.length<=8){const _=[[0,7],[3,4],[1,6],[2,5]],f=["QF1","QF2","QF3","QF4"].map(x=>`BOUT-${l}-${x}`),g=["SF1","SF2"].map(x=>`BOUT-${l}-${x}`),w=["C1-1","C1-2"].map(x=>`BOUT-${l}-${x}`),b=["C2-1","C2-2"].map(x=>`BOUT-${l}-${x}`),A=`BOUT-${l}-FINAL-1ST`,S=`BOUT-${l}-FINAL-3RD`,E=`BOUT-${l}-TRUE-2ND`;_.forEach(([x,v],R)=>{const k=h[x]?.athlete_id??"",T=h[v]?.athlete_id??"",O=!k||!T,P=f[R],W=R<2?g[0]:g[1],G=R<2?w[0]:w[1],F={match_id:P,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:1,round_label:"Championship Quarterfinal",is_consolation:!1,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:k,green_athlete_id:T,is_bye:O,winner_next_match_id:W,loser_next_match_id:G,lifecycle:O?M.ResultAccepted:M.Assigned,assigned_mat_id:R%this.matCount+1,mat_queue_order:R+1,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${R%this.matCount+1}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:O?k:"",loser_athlete_id:"",win_type:O?"BYE":"",completed_at_ms:O?this.now():0};this.bouts.set(P,F),u.push(F)});let C=4;w.forEach((x,v)=>{const R=C++%this.matCount+1,k={match_id:x,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:2,round_label:"Consolation Round 1",is_consolation:!0,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:b[v],loser_next_match_id:"",lifecycle:M.PendingUpstream,assigned_mat_id:R,mat_queue_order:10+v,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${R}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(x,k),u.push(k)}),g.forEach((x,v)=>{const R=v===0?b[1]:b[0],k=C++%this.matCount+1,T={match_id:x,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:2,round_label:"Championship Semifinal",is_consolation:!1,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:A,loser_next_match_id:R,lifecycle:M.PendingUpstream,assigned_mat_id:k,mat_queue_order:12+v,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${k}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(x,T),u.push(T)}),b.forEach((x,v)=>{const R=C++%this.matCount+1,k={match_id:x,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:3,round_label:"Consolation Semifinal (Crossover)",is_consolation:!0,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:S,loser_next_match_id:"",lifecycle:M.PendingUpstream,assigned_mat_id:R,mat_queue_order:15+v,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${R}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(x,k),u.push(k)});const $=C++%this.matCount+1,y={match_id:S,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:4,round_label:"3rd Place Match",is_consolation:!0,is_placement_bout:!0,is_true_second_challenge:!1,placement_rank:3,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:d===X.TrueSecondChallenge?E:"",loser_next_match_id:"",lifecycle:M.PendingUpstream,assigned_mat_id:$,mat_queue_order:20,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${$}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(S,y),u.push(y);const I=C++%this.matCount+1,D={match_id:A,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:4,round_label:"1st Place Championship Final",is_consolation:!1,is_placement_bout:!0,is_true_second_challenge:!1,placement_rank:1,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:"",loser_next_match_id:d===X.TrueSecondChallenge?E:"",lifecycle:M.PendingUpstream,assigned_mat_id:I,mat_queue_order:21,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${I}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};if(this.bouts.set(A,D),u.push(D),d===X.TrueSecondChallenge){const x={match_id:E,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:5,round_label:"True Second Challenge Match",is_consolation:!0,is_placement_bout:!0,is_true_second_challenge:!0,placement_rank:2,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:"",loser_next_match_id:"",lifecycle:M.PendingUpstream,assigned_mat_id:1,mat_queue_order:22,assignment_revision:1,authority_epoch:1,delegated_android_device_id:"mat-1-scorekeeper",red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(E,x),u.push(x)}for(const x of u)x.is_bye&&x.winner_athlete_id&&x.winner_next_match_id&&this.advanceParticipantToDownstream(x.winner_next_match_id,x.winner_athlete_id);this.resolveCompletedByesForBracket(m)}else{const _=h.length<=16?16:h.length<=32?32:64,f=Math.log2(_),g=k=>`BOUT-${l}-${k}`;let w=1;const b=(k,T,O,P,W=!1,G=0,F=!1)=>{const q=(w-1)%this.matCount+1,V={match_id:k,bracket_id:m,weight_class_id:e,division_id:a,format:d,bout_number:this.nextBoutNumber++,round_index:T,round_label:O,is_consolation:P,is_placement_bout:W,is_true_second_challenge:F,placement_rank:G,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:"",loser_next_match_id:"",lifecycle:M.PendingUpstream,assigned_mat_id:q,mat_queue_order:w++,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${q}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};return this.bouts.set(k,V),u.push(V),V},A=Array.from({length:f+1},()=>[]);for(let k=1;k<=f;k++){const T=_>>k,O=k===f?"1st Place Championship Final":T===2?"Championship Semifinal":T===4?"Championship Quarterfinal":`Championship Round of ${T*2}`;for(let P=0;P<T;P++){const W=g(k===f?"FINAL-1ST":`C${k}-${P+1}`);A[k].push(W),b(W,k,O,!1,k===f,k===f?1:0)}}for(let k=1;k<f;k++){const T=A[k];for(let O=0;O<T.length;O++){const P=this.bouts.get(T[O]);P.winner_next_match_id=A[k+1][Math.floor(O/2)]}}const S=g("FINAL-3RD"),E=g("P5"),C=g("P7"),$=g("TRUE-2ND");let y=1,I=[];for(let k=0;k<_/4;k++){const T=g(`L${y}-${k+1}`);I.push(T),b(T,y+1,`Consolation Round ${y}`,!0);const O=this.bouts.get(A[1][2*k]),P=this.bouts.get(A[1][2*k+1]);O.loser_next_match_id=T,P.loser_next_match_id=T}for(let k=2;k<f;k++){const T=A[k].length;y+=1;const O=[];for(let P=0;P<T;P++){const W=g(`L${y}-${P+1}`);O.push(W);const G=k===f-1?"Consolation Semifinal (Crossover)":`Consolation Round ${y} (Crossover)`;b(W,k+y,G,!0);const F=this.bouts.get(I[P]);F.winner_next_match_id=W;const q=k%2===0?T-1-P:P^Math.floor(T/2),V=this.bouts.get(A[k][q]);V.loser_next_match_id=W}if(k<f-1){y+=1;const P=T/2,W=[];for(let G=0;G<P;G++){const F=g(`L${y}-${G+1}`);W.push(F);const q=P===2?"Consolation Quarterfinal":`Consolation Round ${y}`,V=b(F,k+y,q,!0),z=this.bouts.get(O[2*G]),L=this.bouts.get(O[2*G+1]);z.winner_next_match_id=F,L.winner_next_match_id=F,P===2&&(V.loser_next_match_id=C)}I=W}else{for(let P=0;P<2;P++){const W=this.bouts.get(O[P]);W.winner_next_match_id=S,W.loser_next_match_id=E}I=O}}const D=f+y+1;this.bouts.get(A[f][0]).round_index=D;const x=b(S,D,"3rd Place Match",!0,!0,3);if(b(E,D,"5th Place Match",!0,!0,5),b(C,D,"7th Place Match",!0,!0,7),d===X.TrueSecondChallenge){b($,D+1,"True Second Challenge Match",!0,!0,2,!0);const k=this.bouts.get(A[f][0]);k.loser_next_match_id=$,x.winner_next_match_id=$}const v=se.buildStandardTopSeeds(_),R=this.now();for(let k=0;k<_/2;k++){const T=v[k],O=_+1-T,P=this.bouts.get(A[1][k]),W=T>=1&&T<=h.length?h[T-1].athlete_id:"",G=O>=1&&O<=h.length?h[O-1].athlete_id:"";if(W&&G)P.red_athlete_id=W,P.green_athlete_id=G,P.is_bye=!1,P.lifecycle=M.Assigned;else if(W||G){const F=W||G;P.red_athlete_id=F,P.green_athlete_id="",P.is_bye=!0,P.lifecycle=M.ResultAccepted,P.winner_athlete_id=F,P.loser_athlete_id="",P.win_type="BYE",P.completed_at_ms=R}else P.red_athlete_id="",P.green_athlete_id="",P.is_bye=!0,P.lifecycle=M.ResultAccepted,P.winner_athlete_id="",P.loser_athlete_id="",P.win_type="BYE",P.completed_at_ms=R}for(const k of u)k.is_bye&&k.winner_athlete_id&&k.winner_next_match_id&&this.advanceParticipantToDownstream(k.winner_next_match_id,k.winner_athlete_id);this.resolveCompletedByesForBracket(m,R)}for(const _ of u)this.deletedMatchIds.delete(_.match_id);if(![...this.bouts.values()].some(_=>this.drawLocked(_)))this.numberBoutsInRunningOrder();else{let _=1+Math.max(100,...[...this.bouts.values()].filter(g=>!u.includes(g)).map(g=>g.bout_number||100));[...u].sort((g,w)=>g.round_index-w.round_index||Number(g.is_consolation)-Number(w.is_consolation)||g.bout_number-w.bout_number).forEach((g,w)=>{if(g.bout_number=_++,!g.is_bye){const b=w%this.matCount+1;g.assigned_mat_id=b,g.delegated_android_device_id=this.mats.get(b)?.android_device_id||`mat-${b}-scorekeeper`;const A=Math.max(0,...[...this.bouts.values()].filter(S=>S!==g&&S.assigned_mat_id===b).map(S=>S.mat_queue_order||0));g.mat_queue_order=A+1}}),this.nextBoutNumber=_}return this.bracketFrozenByClass.set(`${a}:${e}`,!0),o||this.bracketFrozenByClass.set(e,!0),this.publishAndSave(),u}static buildStandardTopSeeds(e){let t=[1],i=1;for(;i*2<=e/2;){const s=i*2,n=[];for(let a=0;a<t.length;a++){const o=t[a],c=s+1-o;a%2===0?n.push(o,c):n.push(c,o)}t=n,i=s}return t}advanceCompetitionDay(e=this.now()){for(const t of this.athletes.values())t.prior_day_matches=t.matches_wrestled_today,t.matches_wrestled_today=0,t.last_bout_ended_ms=0,t.updated_at_ms=e;this.publishAndSave()}reconcileBestOfThreeBracket(e,t=this.now()){const i=Array.from(this.bouts.values()).filter(l=>l.bracket_id===e&&l.format===X.BestOfThree).sort((l,h)=>l.round_index-h.round_index);if(i.length<3)return;const[s,n,a]=i,o=s.red_athlete_id,c=s.green_athlete_id;if(!(!o||!c)){if(n.red_athlete_id=c,n.green_athlete_id=o,a.red_athlete_id=o,a.green_athlete_id=c,!de(s)){n.lifecycle===M.Assigned&&(n.lifecycle=M.PendingUpstream),n.is_placement_bout=!1,n.placement_rank=0,a.is_bye=!1,a.lifecycle=M.PendingUpstream,a.is_placement_bout=!0,a.placement_rank=1,a.winner_athlete_id="",a.loser_athlete_id="",a.win_type="",a.completed_at_ms=0;return}if(!de(n)){n.lifecycle===M.PendingUpstream&&(n.lifecycle=M.Assigned),n.is_placement_bout=!1,n.placement_rank=0,a.is_bye=!1,a.lifecycle=M.PendingUpstream,a.is_placement_bout=!0,a.placement_rank=1,a.winner_athlete_id="",a.loser_athlete_id="",a.win_type="",a.completed_at_ms=0;return}s.winner_athlete_id===n.winner_athlete_id?(n.is_placement_bout=!!n.winner_athlete_id,n.placement_rank=n.is_placement_bout?1:0,a.is_placement_bout=!1,a.placement_rank=0,a.is_bye=!0,a.lifecycle=M.ResultAccepted,a.winner_athlete_id=n.winner_athlete_id,a.loser_athlete_id=n.loser_athlete_id,a.win_type="BYE",a.completed_at_ms=n.completed_at_ms||t):(n.is_placement_bout=!1,n.placement_rank=0,a.is_placement_bout=!0,a.placement_rank=1,(a.is_bye&&a.winner_athlete_id||a.lifecycle===M.PendingUpstream)&&(a.is_bye=!1,a.lifecycle=M.Assigned,a.winner_athlete_id="",a.loser_athlete_id="",a.win_type="",a.completed_at_ms=0))}}resolveCompletedByesForBracket(e,t=this.now()){this.reconcileBestOfThreeBracket(e,t);let i=!0;for(;i;){i=!1;const s=Array.from(this.bouts.values()).filter(n=>n.bracket_id===e);for(const n of s){if(n.format===X.BestOfThree)continue;if(n.is_true_second_challenge&&n.lifecycle<M.InProgress&&n.red_athlete_id&&n.green_athlete_id&&s.some(c=>!c.is_true_second_challenge&&!c.is_bye&&de(c)&&(c.red_athlete_id===n.red_athlete_id&&c.green_athlete_id===n.green_athlete_id||c.red_athlete_id===n.green_athlete_id&&c.green_athlete_id===n.red_athlete_id))){const l=s.find(d=>!d.is_true_second_challenge&&d.is_placement_bout&&d.placement_rank===1)?.loser_athlete_id||n.red_athlete_id,h=l===n.red_athlete_id?n.green_athlete_id:n.red_athlete_id;n.red_athlete_id=l,n.green_athlete_id=h,n.is_bye=!0,n.lifecycle=M.ResultAccepted,n.winner_athlete_id=l,n.loser_athlete_id=h,n.win_type="DEC",n.completed_at_ms=t,i=!0;continue}if(n.lifecycle!==M.PendingUpstream)continue;const a=s.filter(o=>o.winner_next_match_id===n.match_id||o.loser_next_match_id===n.match_id);if(!(a.length===0||!a.every(o=>de(o))))if(n.red_athlete_id&&n.green_athlete_id)n.lifecycle=M.Assigned,i=!0;else if(n.red_athlete_id||n.green_athlete_id){const o=n.red_athlete_id||n.green_athlete_id,c=this.isWithdrawn(o)?"":o;n.red_athlete_id=c,n.green_athlete_id="",n.is_bye=!0,n.lifecycle=M.ResultAccepted,n.winner_athlete_id=c,n.loser_athlete_id="",n.win_type="BYE",n.completed_at_ms=t,c||this.rememberScratchResult(o,n),n.winner_next_match_id&&this.advanceParticipantToDownstream(n.winner_next_match_id,c,n.match_id),i=!0}else n.is_bye=!0,n.lifecycle=M.ResultAccepted,n.winner_athlete_id="",n.loser_athlete_id="",n.win_type="BYE",n.completed_at_ms=t,i=!0}}}advanceParticipantToDownstream(e,t,i){const s=this.bouts.get(e);if(!s||!t||s.format===X.BestOfThree)return;if(s.red_athlete_id===t||s.green_athlete_id===t){s.red_athlete_id&&s.green_athlete_id&&s.lifecycle===M.PendingUpstream&&(s.lifecycle=M.Assigned);return}let n=!1;if(i){const a=Array.from(this.bouts.values()).filter(o=>!o.is_bye&&(o.winner_next_match_id===e||o.loser_next_match_id===e)).sort((o,c)=>o.bout_number-c.bout_number||o.match_id.localeCompare(c.match_id));a.length===2&&a[1]?.match_id===i&&(n=!0)}n&&!s.green_athlete_id?s.green_athlete_id=t:s.red_athlete_id?!s.green_athlete_id&&s.red_athlete_id!==t&&(s.green_athlete_id=t):s.red_athlete_id=t,s.red_athlete_id&&s.green_athlete_id&&s.lifecycle===M.PendingUpstream&&(s.lifecycle=M.Assigned)}revertProvisionalDownstreamAdvancement(e,t=this.now()){const i=this.bouts.get(e);if(!i)return;const s=this.previewCorrectionImpact(e),n=new Set;for(const a of s.affected_downstream_matches){const o=this.bouts.get(a);o&&(o.lifecycle<M.InProgress||o.lifecycle===M.ResultAccepted&&o.is_bye)&&(Object.assign(o,{red_athlete_id:"",green_athlete_id:"",winner_athlete_id:"",loser_athlete_id:"",is_bye:!1,lifecycle:M.PendingUpstream,red_score:0,green_score:0,win_type:"",completed_at_ms:0,period_number:1,clock_running:!1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms}),n.add(a))}n.size===0&&i.format!==X.BestOfThree||(this.refillDownstreamBouts(n),this.resolveCompletedByesForBracket(i.bracket_id,t))}refillDownstreamBouts(e){for(const t of[...this.bouts.values()].sort((i,s)=>i.bout_number-s.bout_number))de(t)&&(t.winner_next_match_id&&e.has(t.winner_next_match_id)&&this.advanceParticipantToDownstream(t.winner_next_match_id,t.winner_athlete_id,t.match_id),t.loser_next_match_id&&e.has(t.loser_next_match_id)&&t.loser_athlete_id&&!this.isWithdrawn(t.loser_athlete_id)&&t.win_type!=="DQ"&&t.win_type!=="MEDICAL_FORFEIT"&&this.advanceParticipantToDownstream(t.loser_next_match_id,t.loser_athlete_id,t.match_id))}assignBoutToMat(e,t,i,s=this.now()){const n=this.bouts.get(e);if(!n)throw new N(B.InvalidArgument,`Unknown bout: ${e}`);const a=this.mats.get(t);if(!a)throw new N(B.InvalidArgument,`Unknown Mat ${t}`);if(n.lifecycle!==M.Assigned&&n.lifecycle!==M.Ready)throw new N(B.InvalidArgument,"Only unstarted bouts may be queued or moved");if(!n.red_athlete_id||!n.green_athlete_id)throw new N(B.InvalidArgument,`Bout #${n.bout_number} does not have both participants determined yet.`);const o=n.assigned_mat_id,c=this.matQueue(t).filter(d=>d!==n&&d.lifecycle<=M.InProgress),l=c[0]?.lifecycle===M.InProgress;i==="READY"&&!l&&this.validateBoutSafetyGates(n,s);let h=l?1:0;if(i==="ON_DECK"&&!l){const d=c.findIndex(u=>this.isBoutReadyEligible(u,s));if(d<0&&o===t&&n.lifecycle===M.Ready&&this.isBoutReadyEligible(n,s))throw new Error(`Queue another eligible bout on Mat ${t} before holding Bout ${n.bout_number}`);d>=0&&(c.unshift(...c.splice(d,1)),h=1)}else(i==="IN_THE_HOLE"||i==="IN_HOLE")&&(h=2);return n.assigned_mat_id=t,n.delegated_android_device_id=a.android_device_id,n.authority_epoch=a.authority_epoch,o>0&&o!==t&&(n.assignment_revision+=1),n.lifecycle=M.Assigned,c.splice(h,0,n),c.forEach((d,u)=>{d.mat_queue_order=u+1}),this.promoteMatReadyBout(t,s),o>0&&o!==t&&(this.matQueue(o).filter(d=>d.lifecycle<=M.InProgress).forEach((d,u)=>{d.mat_queue_order=u+1}),this.promoteMatReadyBout(o,s)),this.publishAndSave(),n}isBoutCapBlocked(e){for(const t of[e.red_athlete_id,e.green_athlete_id]){const i=this.athletes.get(t);if(i&&(i.matches_wrestled_today>=this.dailyMatchCap||i.prior_day_matches+i.matches_wrestled_today>=this.consecutiveTwoDayCap))return!0}return!1}validateBoutSafetyGates(e,t=this.now()){const i=!!e.rest_lock_cleared_by_official||this.clearedRestMatchIds.has(e.match_id);for(const a of[e.red_athlete_id,e.green_athlete_id]){const o=this.athletes.get(a);if(o){if(!o.weigh_in_eligible||!o.medically_cleared||this.isWithdrawn(a))throw new N(B.InvalidArgument,`SAFETY LOCK: ${o.public_display_name} has not completed Weigh-In and Medical clearance.`);if(o.matches_wrestled_today>=this.dailyMatchCap)throw new N(B.InvalidArgument,`NFHS DAILY CAP LOCK (REQ-SCH-04): ${o.public_display_name} has already wrestled ${o.matches_wrestled_today}/${this.dailyMatchCap} matches today.`);if(o.prior_day_matches+o.matches_wrestled_today>=this.consecutiveTwoDayCap)throw new N(B.InvalidArgument,`NFHS TWO-DAY CAP LOCK (REQ-SCH-04): ${o.public_display_name} has reached the 10-match consecutive two-day limit.`);if(!i&&o.last_bout_ended_ms>0){const c=t-o.last_bout_ended_ms;if(c<this.requiredRestMs){const l=Math.ceil((this.requiredRestMs-c)/6e4);throw new N(B.InvalidArgument,`NFHS 30-MIN REST LOCK (REQ-SCH-03): ${o.public_display_name} requires ${l} more minute(s) of mandatory recovery before starting.`)}}}}const s=[...this.bouts.values()].filter(a=>!a.is_bye&&!(a.lifecycle===M.ResultAccepted||de(a))&&!this.isBoutCapBlocked(a)).map(a=>a.round_index),n=s.length>0?Math.min(...s):e.round_index;if(e.round_index>n)throw new Error(`ROUND ORDER LOCK: Complete round ${n} across all weight classes before starting round ${e.round_index}.`)}clearAthleteRestWindowForTesting(e){const t=this.athletes.get(e);t&&(t.last_bout_ended_ms=this.now()-2100*1e3,this.publishAndSave())}getAthleteRestStatus(e,t=this.now()){const i=this.athletes.get(e);if(!i||i.last_bout_ended_ms<=0)return{restLocked:!1,remainingMs:0,remainingMinutes:0,lastBoutEndedMs:0,readyAtMs:0};const s=t-i.last_bout_ended_ms,n=i.last_bout_ended_ms+this.requiredRestMs;if(s>=this.requiredRestMs)return{restLocked:!1,remainingMs:0,remainingMinutes:0,lastBoutEndedMs:i.last_bout_ended_ms,readyAtMs:n};const a=this.requiredRestMs-s;return{restLocked:!0,remainingMs:a,remainingMinutes:Math.ceil(a/6e4),lastBoutEndedMs:i.last_bout_ended_ms,readyAtMs:n}}clearBoutRestLock(e){const t=this.bouts.get(e);if(!t)return;this.clearedRestMatchIds.add(e),t.rest_lock_cleared_by_official=!0;const i=this.now();for(const s of[t.red_athlete_id,t.green_athlete_id]){if(!s)continue;const n=this.athletes.get(s);n&&(n.last_bout_ended_ms=0,n.updated_at_ms=i)}t.assigned_mat_id>0&&this.promoteMatReadyBout(t.assigned_mat_id,i),this.publishAndSave()}getBoutRestStatus(e,t=this.now()){const i=this.bouts.get(e);if(!i||i.rest_lock_cleared_by_official||this.clearedRestMatchIds.has(e))return{restLocked:!1,remainingMs:0,remainingMinutes:0,readyAtMs:0,restingAthleteNames:[],restingAthletes:[]};const s=[];let n=0,a=0;for(const o of[i.red_athlete_id,i.green_athlete_id]){if(!o)continue;const c=this.getAthleteRestStatus(o,t);if(c.restLocked){const l=this.athletes.get(o);s.push({athleteId:o,name:l?.public_display_name??o,remainingMs:c.remainingMs,remainingMinutes:c.remainingMinutes}),c.remainingMs>n&&(n=c.remainingMs),c.readyAtMs>a&&(a=c.readyAtMs)}}return{restLocked:s.length>0,remainingMs:n,remainingMinutes:Math.ceil(n/6e4),readyAtMs:a,restingAthleteNames:s.map(o=>o.name),restingAthletes:s}}dispatchNextAvailableBoutsToMats(e=this.now()){this.advanceScratches(e)&&this.publishAndSave();const t=Array.from(this.bouts.values()).filter(l=>!l.is_bye&&!(l.lifecycle===M.ResultAccepted||de(l))&&!this.isBoutCapBlocked(l));if(t.length===0)return{stagedBouts:[],restingBouts:[]};const i=Math.min(...t.map(l=>l.round_index)),s=new Set,n=new Set;for(const l of t)(l.lifecycle===M.Ready||l.lifecycle===M.InProgress)&&(n.add(l.assigned_mat_id),l.red_athlete_id&&s.add(l.red_athlete_id),l.green_athlete_id&&s.add(l.green_athlete_id));const a=t.filter(l=>l.round_index===i&&l.lifecycle===M.Assigned&&!!(l.red_athlete_id&&l.green_athlete_id)).sort(Wi),o=[],c=[];for(const l of a){if(s.has(l.red_athlete_id)||s.has(l.green_athlete_id))continue;const h=this.getBoutRestStatus(l.match_id,e);if(h.restLocked){c.push({bout:l,remainingMinutes:h.remainingMinutes,restingNames:h.restingAthletes.map(u=>u.name)});continue}let d=!n.has(l.assigned_mat_id)&&this.mats.has(l.assigned_mat_id)?l.assigned_mat_id:0;if(!d){for(const u of this.mats.keys())if(!n.has(u)){d=u;break}}if(d)try{const u=this.assignBoutToMat(l.match_id,d,"READY",e);o.push(u),n.add(d),s.add(l.red_athlete_id),s.add(l.green_athlete_id)}catch{}}return{stagedBouts:o,restingBouts:c}}validateConfirmedResult(e,t,i,s,n){if(!t||![e.red_athlete_id,e.green_athlete_id].includes(t)||!["FALL","TF","MD","DEC","FORFEIT","MEDICAL_FORFEIT","INJURY_DEFAULT","DQ"].includes(i)||!Number.isSafeInteger(s)||s<0||s>1e3||!Number.isSafeInteger(n)||n<0||n>1e3)throw new Error("Invalid confirmed result");if(["DEC","MD","TF"].includes(i)&&(t===e.red_athlete_id?s<n:n<s))throw new Error("Confirmed winner contradicts the score")}recordMatsideConfirmedResult(e,t,i,s,n,a=1,o=this.now()){const c=this.bouts.get(e);if(!c)throw new N(B.InvalidArgument,`Unknown bout: ${e}`);if(a<c.authority_epoch)throw new N(B.EpochFencedOldEvent,`Rejected Android matside result from stale authority_epoch ${a} < ${c.authority_epoch}`);if(this.validateConfirmedResult(c,t,i,s,n),c.lifecycle===M.ResultAccepted){if(c.winner_athlete_id===t&&c.win_type===i&&c.red_score===s&&c.green_score===n)return c;throw new Error("Accepted results require the correction workflow")}this.acceptBoutResult(c,t,i,s,n,o),this.advanceScratches(o);for(let l=1;l<=this.matCount;l++)this.promoteMatReadyBout(l,o);return this.publishAndSave(),c}isWithdrawn(e){const t=this.athletes.get(e)?.check_in_stage;return t===J.Withdrawn||t===J.Scratched}scheduledBoutsForAthlete(e){return[...this.bouts.values()].filter(t=>!t.is_bye&&t.lifecycle!==M.ResultAccepted&&(t.red_athlete_id===e||t.green_athlete_id===e))}isUnstartedBout(e){return e.lifecycle<=M.Ready&&!e.clock_running&&!e.red_score&&!e.green_score&&!e.completed_at_ms&&!e.winner_athlete_id&&e.period_number===1&&e.clock_remaining_ms===this.rulesBundle.period_1_duration_ms}rememberScratchResult(e,t){const i=this.scratches.get(e)??{priorForfeits:[],results:[]};i.results.push({...t}),this.scratches.set(e,i)}advanceScratches(e){let t=!1;for(;;){const i=[...this.bouts.values()].find(a=>!a.is_bye&&this.isUnstartedBout(a)&&(a.lifecycle===M.Assigned||a.lifecycle===M.Ready)&&a.red_athlete_id&&a.green_athlete_id&&(this.isWithdrawn(a.red_athlete_id)||this.isWithdrawn(a.green_athlete_id)));if(!i)return t;const s=this.isWithdrawn(i.red_athlete_id),n=this.isWithdrawn(i.green_athlete_id);s&&n&&(i.is_bye=!0),i.assignment_revision++,this.acceptBoutResult(i,s&&n?"":s?i.green_athlete_id:i.red_athlete_id,i.is_bye?"BYE":"FORFEIT",0,0,e),s&&this.rememberScratchResult(i.red_athlete_id,i),n&&this.rememberScratchResult(i.green_athlete_id,i),t=!0}}acceptBoutResult(e,t,i,s,n,a){const o=t?t===e.red_athlete_id?e.green_athlete_id:e.red_athlete_id:"";e.red_score=s,e.green_score=n,e.winner_athlete_id=t,e.loser_athlete_id=o,e.win_type=i,e.clock_running=!1,e.clock_remaining_ms=i==="FALL"?e.clock_remaining_ms:0,e.completed_at_ms=a,e.lifecycle=M.ResultAccepted,this.clearedRestMatchIds.delete(e.match_id),delete e.rest_lock_cleared_by_official;for(const c of[e.red_athlete_id,e.green_athlete_id]){const l=this.athletes.get(c);l&&i!=="FORFEIT"&&i!=="MEDICAL_FORFEIT"&&i!=="BYE"&&(l.matches_wrestled_today+=1,l.last_bout_ended_ms=a,l.updated_at_ms=a)}e.winner_next_match_id&&this.advanceParticipantToDownstream(e.winner_next_match_id,t,e.match_id),e.loser_next_match_id&&!this.isWithdrawn(o)&&i!=="DQ"&&i!=="MEDICAL_FORFEIT"&&this.advanceParticipantToDownstream(e.loser_next_match_id,o,e.match_id),this.resolveCompletedByesForBracket(e.bracket_id,a)}detectCoachConflicts(){const e=Array.from(this.bouts.values()).filter(s=>s.lifecycle===M.InProgress||s.lifecycle===M.Ready),t=new Set,i=[];for(let s=0;s<e.length;s++)for(let n=s+1;n<e.length;n++){const a=e[s],o=e[n];if(a.assigned_mat_id===o.assigned_mat_id)continue;const c=[this.athletes.get(a.red_athlete_id),this.athletes.get(a.green_athlete_id)].filter(Boolean),l=[this.athletes.get(o.red_athlete_id),this.athletes.get(o.green_athlete_id)].filter(Boolean),[h,d]=a.match_id<=o.match_id?[a.match_id,o.match_id]:[o.match_id,a.match_id];for(const u of c)for(const m of l)if(u&&m&&u.team_id&&u.team_id===m.team_id){const p=`${u.team_id}:${h}:${d}`;if(t.has(p))continue;t.add(p),i.push({team_id:u.team_id,team_name:u.team_name,first_match_id:a.match_id,first_bout_number:a.bout_number,first_mat_id:a.assigned_mat_id,first_athlete_id:u.athlete_id,first_athlete_name:u.public_display_name,second_match_id:o.match_id,second_bout_number:o.bout_number,second_mat_id:o.assigned_mat_id,second_athlete_id:m.athlete_id,second_athlete_name:m.public_display_name})}}return i}previewCorrectionImpact(e){const t=this.bouts.get(e);if(!t)throw new N(B.InvalidArgument,`Unknown match_id: ${e}`);const i=[],s=[];let n=!0;const a=[];t.winner_next_match_id&&a.push(t.winner_next_match_id),t.loser_next_match_id&&a.push(t.loser_next_match_id);const o=new Set;for(;a.length>0;){const c=a.shift();if(!c||o.has(c))continue;o.add(c);const l=this.bouts.get(c);l&&(i.push(l.match_id),l.lifecycle===M.InProgress?(s.push(l.match_id),n=!1):![M.PendingUpstream,M.Assigned,M.Ready].includes(l.lifecycle)&&!(l.lifecycle===M.ResultAccepted&&l.is_bye)&&(n=!1),l.winner_next_match_id&&a.push(l.winner_next_match_id),l.loser_next_match_id&&a.push(l.loser_next_match_id))}return{target_match_id:e,bout_number:t.bout_number,affected_downstream_matches:i,active_matches_requiring_halt:s,safe_to_auto_apply:n}}resetUnstartedResult(e,t,i){i||(e.red_athlete_id="",e.green_athlete_id=""),this.clearedRestMatchIds.delete(e.match_id),delete e.rest_lock_cleared_by_official,Object.assign(e,{winner_athlete_id:"",loser_athlete_id:"",is_bye:!1,lifecycle:t,red_score:0,green_score:0,win_type:"",completed_at_ms:0,period_number:1,clock_running:!1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,assignment_revision:e.assignment_revision+1})}reinstateAthlete(e){const t=e.athlete_id,i=d=>new Error(`Ask the tournament director to review bout ${d.bout_number} before reinstatement.`),s=this.scratches.get(t),n=s?.results??[],a=this.forfeitsForAthlete(t).find(d=>!s?.priorForfeits.includes(d.match_id)&&!n.some(u=>u.match_id===d.match_id));if(a)throw i(a);if(n.length&&this.consoleRole!=="primary")throw new Error("Ask the primary official to reopen the scratch results.");const o=new Map,c=new Set;for(const d of n){const u=this.bouts.get(d.match_id);if(!u||u.is_bye||u.lifecycle!==M.ResultAccepted||u.win_type!=="FORFEIT"||u.loser_athlete_id!==t||u.winner_athlete_id!==d.winner_athlete_id||u.red_athlete_id!==d.red_athlete_id||u.green_athlete_id!==d.green_athlete_id||u.bracket_id!==d.bracket_id||u.winner_next_match_id!==d.winner_next_match_id||u.loser_next_match_id!==d.loser_next_match_id||u.assignment_revision!==d.assignment_revision||u.completed_at_ms!==d.completed_at_ms||u.red_score||u.green_score||u.clock_running||this.isWithdrawn(u.winner_athlete_id))throw i(u??d);o.set(u.match_id,{...u});for(const m of this.previewCorrectionImpact(u.match_id).affected_downstream_matches)c.add(m)}const l=new Set([...o.keys(),...c]);for(const d of l){const u=this.bouts.get(d);for(const p of[u.winner_next_match_id,u.loser_next_match_id])if(p&&this.bouts.get(p)?.bracket_id!==u.bracket_id)throw i(u);if(o.has(d))continue;const m=u.is_bye&&u.lifecycle===M.ResultAccepted&&(u.win_type==="BYE"||u.is_true_second_challenge&&u.win_type==="DEC")&&!u.clock_running&&!u.red_score&&!u.green_score;if(!this.isUnstartedBout(u)&&!m)throw i(u)}const h=this.now();if(e.check_in_stage=J.Arrived,e.weigh_in_eligible=!1,e.updated_at_ms=h,this.scratches.delete(t),!!o.size){for(const d of l){const u=this.bouts.get(d),m=c.has(d);this.resetUnstartedResult(u,m?M.PendingUpstream:M.Assigned,!m||u.format===X.BestOfThree)}this.refillDownstreamBouts(c);for(const d of new Set([...o.values()].map(u=>u.bracket_id)))this.resolveCompletedByesForBracket(d,h);for(const d of this.mats.keys())this.promoteMatReadyBout(d,h);for(const d of o.values())this.resultCorrections.push({before:d,after:{...this.bouts.get(d.match_id)},reason:"Reinstated wrestler after scratch.",atMs:h,affected:this.previewCorrectionImpact(d.match_id).affected_downstream_matches})}}correctAcceptedResult(e){if(this.consoleRole!=="primary")throw new Error("Only the primary head table may correct results");const t=this.bouts.get(e.matchId);if(!t||t.is_bye||!de(t))throw new Error("Correction requires an accepted contested result");if(se.normalizeSyncedWinType(t.win_type)==="FORFEIT"!=(e.winType==="FORFEIT"))throw new Error("Correction cannot change forfeit participation");if(!e.reason.trim()||![t.red_athlete_id,t.green_athlete_id].includes(e.winnerAthleteId)||!["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"].includes(e.winType)||!Number.isSafeInteger(e.redScore)||e.redScore<0||e.redScore>1e3||!Number.isSafeInteger(e.greenScore)||e.greenScore<0||e.greenScore>1e3)throw new Error("Invalid result correction");Rd(e.winType,e.winnerAthleteId===t.red_athlete_id?e.redScore-e.greenScore:e.greenScore-e.redScore);const i=this.previewCorrectionImpact(e.matchId);if(!i.safe_to_auto_apply)throw new Error("Downstream bouts already progressed; correction requires physical halt and director review");const s=structuredClone(t),n=new Set(i.affected_downstream_matches),a=new Set([t.assigned_mat_id]);t.lifecycle!==M.ResultAccepted?this.acceptBoutResult(t,e.winnerAthleteId,e.winType,e.redScore,e.greenScore,t.completed_at_ms||this.now()):Object.assign(t,{winner_athlete_id:e.winnerAthleteId,loser_athlete_id:e.winnerAthleteId===t.red_athlete_id?t.green_athlete_id:t.red_athlete_id,win_type:e.winType,red_score:e.redScore,green_score:e.greenScore}),t.assignment_revision++;for(const c of n){const l=this.bouts.get(c);a.add(l.assigned_mat_id),this.resetUnstartedResult(l,M.PendingUpstream,l.format===X.BestOfThree)}const o=this.now();this.refillDownstreamBouts(n),this.resolveCompletedByesForBracket(t.bracket_id,o);for(const c of a)c>0&&this.promoteMatReadyBout(c,o);return this.resultCorrections.push({before:s,after:structuredClone(t),reason:e.reason.trim(),atMs:o,affected:[...n]}),this.publishAndSave(),t}transferMatAuthority(e){if(e.reason==="TIMEOUT_ONLY_INVALID")throw new N(B.TimeoutTakeoverForbidden,"Timeout-only authority takeover is forbidden (REQ-AUTH-08).");if(!e.oldDevicePhysicallyStopped||!e.timersInitializedStopped)throw new N(B.InvalidArgument,"Old Android scoring device must be physically stopped and all handoff timers must initialize stopped (REQ-AUTH-10).");const t=this.mats.get(e.matId);if(!t)throw new N(B.InvalidArgument,`Unknown Mat ${e.matId}`);const i=t.authority_epoch+1,s=e.newAndroidDeviceId.trim()||t.android_device_id,n=e.newOperatorName.trim()||t.operator_name;let a=e.subjectPubkeyHex?.trim().toLowerCase()??"";if(!/^[a-f0-9]{64}$/i.test(a))throw new Error("A device-generated Ed25519 public key is required");t.certificate_id&&this.revokedCertificateIds.add(t.certificate_id);const o=this.buildSignedMatDelegation(e.matId,s,n,i,a,this.now());this.registerMatDelegation(o),this.mats.set(e.matId,o),this.syncVenueRoomRouter();for(const c of this.bouts.values())c.assigned_mat_id===e.matId&&c.lifecycle!==M.ResultAccepted&&(c.authority_epoch=o.authority_epoch,c.delegated_android_device_id=o.android_device_id,c.clock_running=!1);return this.publishAndSave(),o}getTournamentJoinQrUri(e=jt()){if(this.linkedVenueJoinQrUri&&(e===jt()||e===this.activeVenueOrigin)){const i=Ye(this.linkedVenueJoinQrUri);if(i.valid&&i.payload&&(!this.tournamentId||i.payload.tournament_id===this.tournamentId||this.athletes.size===0))return this.linkedVenueJoinQrUri}const t=bl({tournamentId:this.tournamentId,tournamentName:this.tournamentName,rulesVersion:this.rulesVersion,publisherPubkeyHex:this.publisherPublicKeyHex,relayOrigin:e,issuedAtMs:this.now(),rootPrivateKey:this.keyPair.privateKey});return ps(t)}async refreshVenueBootstrap(e=this.activeVenueOrigin,t){if(!(typeof fetch>"u"||!e))try{const i=e.trim().replace(/\/+$/,"");if(/github\.io$/i.test(new URL(i).hostname))return;const s=AbortSignal.timeout(3500),n=await fetch(`${i}/api/openmat-join-bootstrap`,{signal:t?AbortSignal.any([t,s]):s});if(!n.ok)return;const a=await n.json();if(t?.aborted)return;const o=(a.joinQrUri||a.qr_uri||"").trim(),c=Ye(o);if(c.valid&&c.payload){let l=!1;this.linkedVenueJoinQrUri!==o&&(this.linkedVenueJoinQrUri=o,l=!0);const h=c.payload.publisher_pubkey_hex.toLowerCase(),d=!!(h&&h!==this.publisherPublicKeyHex.toLowerCase());d!==this.hasExternalVenueServer&&(this.hasExternalVenueServer=d,l=!0),d&&this.linkedVenuePubkeyHex!==h&&(this.linkedVenuePubkeyHex=h,l=!0),l&&this.onStateChanged?.()}}catch{}}getTournamentJoinQrSvg(e=jt()){return Mt(this.getTournamentJoinQrUri(e))}getActiveSharePubkeyHex(){return this.linkedVenuePubkeyHex||this.publisherPublicKeyHex}getPublicPlayerWebUrl(e=se.DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL){const t=e.trim().replace(/\/+$/,""),i=this.getActiveSharePubkeyHex();return i?`${t}/?${i}`:`${t}/`}getPublicOfficialsWebUrl(e=se.DEFAULT_PUBLIC_OFFICIALS_WEB_BASE_URL){const t=e.trim().replace(/\/+$/,""),i=this.getActiveSharePubkeyHex();return i?`${t}/?${i}`:`${t}/`}getLocalWifiPlayerWebUrl(e=this.activeVenueOrigin){try{const t=new URL("/",e),i=this.getActiveSharePubkeyHex();return i?`${t.href}?${i}`:t.href}catch{return`${e.replace(/\/+$/,"")}/?${this.getActiveSharePubkeyHex()}`}}getLocalWifiOfficialsWebUrl(e=this.activeVenueOrigin){try{const t=new URL("/officials/",e),i=this.getActiveSharePubkeyHex();return i?`${t.href}?${i}`:t.href}catch{return`${e.replace(/\/+$/,"")}/officials/?${this.getActiveSharePubkeyHex()}`}}getPublicPlayerWebQrSvg(e=se.DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL){return Mt(this.getPublicPlayerWebUrl(e))}getPublicOfficialsWebQrSvg(e=se.DEFAULT_PUBLIC_OFFICIALS_WEB_BASE_URL){return Mt(this.getPublicOfficialsWebUrl(e))}getLocalWifiSelfRegisterWebUrl(e=this.activeVenueOrigin){const t=e.trim().replace(/\/+$/,""),i=`${t}/register`;return dr({baseRegisterUrl:i,tournamentId:this.tournamentId,tournamentName:this.tournamentName,defaultDivision:re.defaultDivision,apiOrigin:/github\.io$/i.test(t)?void 0:t})}getPublicSelfRegisterWebUrl(e=se.DEFAULT_PUBLIC_REGISTER_WEB_BASE_URL){const t=this.activeVenueOrigin.trim().replace(/\/+$/,""),i=!!t&&!/github\.io$/i.test(t);return dr({baseRegisterUrl:e,tournamentId:this.tournamentId,tournamentName:this.tournamentName,defaultDivision:re.defaultDivision,apiOrigin:i?t:void 0})}getSelfRegisterPosterUrl(){const e=this.activeVenueOrigin.trim().replace(/\/+$/,"");return e&&!/github\.io$/i.test(e)?this.getLocalWifiSelfRegisterWebUrl(e):this.getPublicSelfRegisterWebUrl()}getSelfRegisterPosterQrSvg(e=this.getSelfRegisterPosterUrl()){return Mt(e)}signProjectionNostrEvent(e=this.buildSignedPublicProjection()){const t=Be(this.keyPair.privateKey.slice(0,32)),i=ue(lr.getPublicKey(t)).toLowerCase(),s=Math.floor(this.now()/1e3),n=[["d",`openmat:${e.tournament_id}`],["x",`openmat-proj:${e.tournament_id}`],["x",`openmat-pub:${e.publisher_pubkey_hex.toLowerCase()}`],["x","openmat:v1"]];this.linkedVenuePubkeyHex&&this.linkedVenuePubkeyHex.toLowerCase()!==e.publisher_pubkey_hex.toLowerCase()&&n.push(["x",`openmat-pub:${this.linkedVenuePubkeyHex.toLowerCase()}`]);const a=JSON.stringify(e),o=JSON.stringify([0,i,s,30078,n,a]),c=Be(new TextEncoder().encode(o)),l=ue(c),h=ue(lr.sign(c,t));return{id:l,pubkey:i,created_at:s,kind:30078,tags:n,content:a,sig:h}}pendingNostrProjections=new Map;nostrUploads=new Set;publishProjectionToPublicNostrRelays(e=this.buildSignedPublicProjection()){if(typeof window>"u"||typeof WebSocket>"u"||!this.broadcastEnabled||this.isSeeding||this.liveConsoleRole!=="primary")return;const t=this.signProjectionNostrEvent(e),i={id:t.id,frame:JSON.stringify(["EVENT",t])};for(const s of this.publicNostrRelays)(window.location?.protocol!=="https:"||s.startsWith("wss:"))&&this.pendingNostrProjections.set(s,i);this.flushPublicNostrProjections()}flushPublicNostrProjections(){if(this.liveConsoleRole==="primary"){for(const[e,t]of this.pendingNostrProjections)if(!this.nostrUploads.has(e)){this.nostrRelayStatuses.set(e,"CONNECTING");try{const i=new WebSocket(e);this.nostrUploads.add(e);const s=setTimeout(()=>i.close(),6e3);let n=!1;i.onopen=()=>{try{i.send(t.frame)}catch{i.close()}},i.onmessage=({data:a})=>{try{const o=JSON.parse(String(a));if(o[0]!=="OK"||o[1]!==t.id)return;n=o[2]===!0||String(o[3]).startsWith("duplicate:"),n&&(this.pendingNostrProjections.get(e)===t&&this.pendingNostrProjections.delete(e),this.lastNostrPublishedAtMs=this.now()),i.close()}catch{}},i.onerror=()=>i.close(),i.onclose=()=>{clearTimeout(s),this.nostrUploads.delete(e),this.nostrRelayStatuses.set(e,n?"CONNECTED":"OFFLINE"),this.onStateChanged?.(),n&&this.flushPublicNostrProjections()}}catch{this.nostrRelayStatuses.set(e,"OFFLINE")}}}}static normalizeSyncedWinType(e){const t=(e??"").trim().toUpperCase();return t==="DECISION"?"DEC":t==="MAJOR_DECISION"?"MD":t==="TECHNICAL_FALL"?"TF":t==="DISQUALIFICATION"?"DQ":t==="MEDICAL_FORFEIT"?"FORFEIT":t==="PIN"||t==="PIN_FALL"?"FALL":t}propagateEndedBoutDownstream(e,t=this.now()){e.winner_athlete_id&&(e.loser_athlete_id||(e.loser_athlete_id=e.winner_athlete_id===e.red_athlete_id?e.green_athlete_id:e.red_athlete_id),e.win_type=se.normalizeSyncedWinType(e.win_type)||"DEC",e.winner_next_match_id&&this.advanceParticipantToDownstream(e.winner_next_match_id,e.winner_athlete_id,e.match_id),e.loser_next_match_id&&e.loser_athlete_id&&!this.isWithdrawn(e.loser_athlete_id)&&this.advanceParticipantToDownstream(e.loser_next_match_id,e.loser_athlete_id,e.match_id),this.resolveCompletedByesForBracket(e.bracket_id,e.completed_at_ms||t))}adoptExternalProjectionIfEmpty(e){if(!se.verifySignedPublicProjection(e)||(e.publisher_pubkey_hex&&e.publisher_pubkey_hex!==this.publisherPublicKeyHex&&(this.linkedVenuePubkeyHex=e.publisher_pubkey_hex.toLowerCase()),this.athletes.size>0||this.bouts.size>0))return!1;let t=!1;const i=this.isSeeding;this.isSeeding=!0;try{this.tournamentId=e.tournament_id||this.tournamentId,this.tournamentName=e.tournament_name||this.tournamentName,this.rulesVersion=e.rules_version||this.rulesVersion,this.growthAllowanceTenths=e.growth_allowance_tenths??this.growthAllowanceTenths,this.consecutiveDayAllowanceTenths=e.consecutive_day_allowance_tenths??this.consecutiveDayAllowanceTenths,e.mat_count>=1&&e.mat_count<=ct&&(this.matCount=e.mat_count);for(const n of e.athletes??[])this.athletes.set(n.athlete_id,structuredClone(n));for(const n of e.bouts??[])this.bouts.set(n.match_id,structuredClone(n));this.nextBoutNumber=1+Math.max(100,...Array.from(this.bouts.values()).map(n=>n.bout_number||100));for(const n of e.mats??[])n&&typeof n.mat_id=="number"&&this.mats.set(n.mat_id,structuredClone(n));for(const[n,a]of Object.entries(e.bracket_frozen_by_class??{}))this.bracketFrozenByClass.set(n,!!a);const s=new Set;for(const n of[...this.bouts.values()].sort((a,o)=>a.bout_number-o.bout_number))if(n.lifecycle===M.LocallyConfirmed&&n.winner_athlete_id){const a=se.normalizeSyncedWinType(n.win_type)||"DEC";[n.red_athlete_id,n.green_athlete_id].includes(n.winner_athlete_id)&&["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"].includes(a)&&(this.acceptBoutResult(n,n.winner_athlete_id,a,n.red_score,n.green_score,n.completed_at_ms||this.now()),n.assigned_mat_id>0&&s.add(n.assigned_mat_id),t=!0)}else(n.lifecycle===M.EndedLocal||n.lifecycle===M.ResultAccepted)&&n.winner_athlete_id&&!n.is_bye&&(this.propagateEndedBoutDownstream(n),n.assigned_mat_id>0&&s.add(n.assigned_mat_id));if(s.size>0){this.advanceScratches(this.now());for(const n of s)this.promoteMatReadyBout(n,this.now())}}finally{this.isSeeding=i}return t&&this.broadcastEnabled&&this.liveConsoleRole==="primary"?(this.publishAndSave(),!0):(this.saveToStorage(),this.onStateChanged?.(),!0)}syncLiveProjectionFromVenue(e,t){if(!se.verifySignedPublicProjection(e))return!1;t?.();const i=e.publisher_pubkey_hex.toLowerCase(),s=!!i&&i!==this.publisherPublicKeyHex.toLowerCase();if(this.consoleRole!=="primary"&&s&&this.linkedVenuePubkeyHex&&this.linkedVenuePubkeyHex!==i)return!1;s&&this.liveConsoleRole==="official"&&e.tournament_id&&e.tournament_id!==this.tournamentId&&this.pendingProjectionPostCount===0&&(this.athletes.clear(),this.bouts.clear(),this.scratches.clear(),this.mats.clear(),this.bracketFrozenByClass.clear(),this.tournamentId=e.tournament_id);const n=this.athletes.size>0||this.bouts.size>0;if(n&&e.tournament_id!==this.tournamentId||s&&this.pendingProjectionPostCount>0||!s&&n&&e.snapshot_epoch<=this.snapshotEpoch)return!1;const a=!s||this.consoleRole!=="primary"&&this.linkedVenuePubkeyHex===i;let o=!1;s&&this.linkedVenuePubkeyHex!==i&&(this.linkedVenuePubkeyHex=i,o=!0);const c=`${e.tournament_id}:${i}`,l=this.lastSyncedVenueEpochByPublisher.get(c)??0;if(typeof e.snapshot_epoch=="number"&&e.snapshot_epoch<l)return!1;if(typeof e.snapshot_epoch=="number"&&e.snapshot_epoch>l&&this.lastSyncedVenueEpochByPublisher.set(c,e.snapshot_epoch),this.athletes.size===0&&this.bouts.size===0)return this.adoptExternalProjectionIfEmpty(e);if(e.tournament_id&&e.tournament_id!==this.tournamentId)return!1;let h=o,d=!1;const u=new Set,m=this.isSeeding;this.isSeeding=!0;try{for(const _ of e.mats??[]){if(!_||typeof _.mat_id!="number")continue;const f=this.mats.get(_.mat_id);(!f||!f.certificate_id&&_.certificate_id||_.authority_epoch>f.authority_epoch||_.last_heartbeat_ms>f.last_heartbeat_ms)&&(this.mats.set(_.mat_id,structuredClone(_)),h=!0)}if(a)for(const _ of e.athletes){const f=this.athletes.get(_.athlete_id);f&&_.updated_at_ms>=f.updated_at_ms&&(f.check_in_stage!==_.check_in_stage||f.weigh_in_eligible!==_.weigh_in_eligible||f.medically_cleared!==_.medically_cleared)&&(f.check_in_stage=_.check_in_stage,f.weigh_in_eligible=_.weigh_in_eligible,f.medically_cleared=_.medically_cleared,f.updated_at_ms=_.updated_at_ms,h=!0)}const p=[...e.bouts??[]].sort((_,f)=>_.bout_number-f.bout_number);if(s&&this.pendingProjectionPostCount===0&&p.length>0){const _=new Set(p.map(g=>g.match_id)),f=new Set([...this.bouts.values()].filter(g=>this.drawLocked(g)).map(g=>g.bracket_id));for(const[g,w]of this.bouts.entries())!_.has(g)&&(this.liveConsoleRole==="official"||!f.has(w.bracket_id))&&w.lifecycle<M.InProgress&&w.red_score===0&&w.green_score===0&&!w.clock_running&&(this.liveConsoleRole==="official"||p.some(b=>b.division_id===w.division_id&&b.weight_class_id===w.weight_class_id))&&(this.bouts.delete(g),h=!0)}for(const _ of p){const f=this.bouts.get(_.match_id);if(!f){if(this.deletedMatchIds.has(_.match_id)&&this.liveConsoleRole==="primary")continue;if(this.pendingProjectionPostCount===0){const S=structuredClone(_);if(this.bouts.set(S.match_id,S),S.lifecycle===M.LocallyConfirmed&&S.winner_athlete_id){const E=se.normalizeSyncedWinType(S.win_type)||"DEC";[S.red_athlete_id,S.green_athlete_id].includes(S.winner_athlete_id)&&["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"].includes(E)&&(this.acceptBoutResult(S,S.winner_athlete_id,E,S.red_score,S.green_score,S.completed_at_ms||this.now()),S.assigned_mat_id>0&&u.add(S.assigned_mat_id),d=!0)}else(S.lifecycle===M.EndedLocal||S.lifecycle===M.ResultAccepted)&&S.winner_athlete_id&&!S.is_bye&&(this.propagateEndedBoutDownstream(S),S.assigned_mat_id>0&&u.add(S.assigned_mat_id));h=!0}continue}const g=_.assignment_revision??1;if(g<f.assignment_revision)continue;if(a&&g>f.assignment_revision&&_.lifecycle<=M.Ready&&(this.isUnstartedBout(f)||f.lifecycle===M.ResultAccepted&&(f.is_bye||f.win_type==="FORFEIT"))){this.bouts.set(_.match_id,structuredClone(_)),_.rest_lock_cleared_by_official||this.clearedRestMatchIds.delete(_.match_id),h=!0;continue}if(_.lifecycle===M.LocallyConfirmed&&f.lifecycle<M.ResultAccepted&&_.winner_athlete_id){const S=se.normalizeSyncedWinType(_.win_type)||"DEC";if([f.red_athlete_id||_.red_athlete_id,f.green_athlete_id||_.green_athlete_id].includes(_.winner_athlete_id)&&["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"].includes(S)){!f.red_athlete_id&&_.red_athlete_id&&(f.red_athlete_id=_.red_athlete_id),!f.green_athlete_id&&_.green_athlete_id&&(f.green_athlete_id=_.green_athlete_id),f.period_number=_.period_number||f.period_number,this.acceptBoutResult(f,_.winner_athlete_id,S,_.red_score,_.green_score,_.completed_at_ms||this.now()),f.assigned_mat_id>0&&u.add(f.assigned_mat_id),d=!0,h=!0;continue}}if(_.lifecycle===M.ResultAccepted){const S=se.normalizeSyncedWinType(_.win_type)||_.win_type;f.lifecycle<M.ResultAccepted?(!f.red_athlete_id&&_.red_athlete_id&&(f.red_athlete_id=_.red_athlete_id),!f.green_athlete_id&&_.green_athlete_id&&(f.green_athlete_id=_.green_athlete_id),!_.is_bye&&_.winner_athlete_id&&this.acceptBoutResult(f,_.winner_athlete_id,S||"DEC",_.red_score,_.green_score,_.completed_at_ms||this.now()),this.bouts.set(_.match_id,structuredClone({..._,win_type:S})),_.assigned_mat_id>0&&u.add(_.assigned_mat_id),h=!0):this.pendingProjectionPostCount===0&&(_.winner_athlete_id!==f.winner_athlete_id||S!==f.win_type||_.red_score!==f.red_score||_.green_score!==f.green_score)&&(this.bouts.set(_.match_id,structuredClone({..._,win_type:S})),h=!0);continue}const w=f.lifecycle===M.EndedLocal&&!!f.winner_athlete_id,b=this.pendingProjectionPostCount===0&&f.lifecycle<M.InProgress&&_.lifecycle<M.InProgress&&(!f.red_athlete_id&&!!_.red_athlete_id||!f.green_athlete_id&&!!_.green_athlete_id||!f.is_bye&&!!_.is_bye||_.assigned_mat_id===f.assigned_mat_id&&_.lifecycle>=M.Assigned&&f.lifecycle>=M.Assigned&&(_.mat_queue_order!==f.mat_queue_order||_.lifecycle!==f.lifecycle)),A=_.lifecycle>f.lifecycle||f.lifecycle>=M.InProgress&&f.lifecycle<=M.EndedLocal&&_.lifecycle>=M.Assigned&&_.lifecycle<=M.EndedLocal&&(this.pendingProjectionPostCount===0||_.lifecycle>=f.lifecycle)&&(_.lifecycle!==f.lifecycle||_.red_score!==f.red_score||_.green_score!==f.green_score||_.period_number!==f.period_number||_.clock_running!==f.clock_running||_.clock_remaining_ms!==f.clock_remaining_ms||_.winner_athlete_id!==f.winner_athlete_id||_.win_type!==f.win_type||_.mat_queue_order!==f.mat_queue_order);if(b||A){const S=_.win_type?se.normalizeSyncedWinType(_.win_type):"",E=!!(_.rest_lock_cleared_by_official||f.rest_lock_cleared_by_official);E&&this.clearedRestMatchIds.add(_.match_id);const C=structuredClone({..._,win_type:S,...E?{rest_lock_cleared_by_official:!0}:{}});if(this.bouts.set(_.match_id,C),C.lifecycle===M.EndedLocal&&C.winner_athlete_id){const $=C.winner_next_match_id?this.bouts.get(C.winner_next_match_id):void 0,y=!!(!C.winner_next_match_id||$&&[$.red_athlete_id,$.green_athlete_id].includes(C.winner_athlete_id));this.propagateEndedBoutDownstream(C),y||(d=!0),C.assigned_mat_id>0&&u.add(C.assigned_mat_id)}else w&&!C.winner_athlete_id&&(this.revertProvisionalDownstreamAdvancement(C.match_id),d=!0);h=!0}}if(u.size>0){for(const _ of[...this.bouts.values()].sort((f,g)=>f.bout_number-g.bout_number))!_.is_bye&&de(_)&&this.propagateEndedBoutDownstream(_);this.advanceScratches(this.now());for(const _ of u)this.promoteMatReadyBout(_,this.now())}for(const _ of e.athletes??[]){const f=this.athletes.get(_.athlete_id);f?(_.matches_wrestled_today>f.matches_wrestled_today&&(f.matches_wrestled_today=_.matches_wrestled_today,h=!0),_.last_bout_ended_ms>f.last_bout_ended_ms&&(_.updated_at_ms>=f.updated_at_ms||f.last_bout_ended_ms===0)&&(f.last_bout_ended_ms=_.last_bout_ended_ms,f.updated_at_ms=Math.max(f.updated_at_ms,_.updated_at_ms),h=!0)):(this.athletes.set(_.athlete_id,structuredClone(_)),h=!0)}if(e.ow_vote_tallies&&typeof e.ow_vote_tallies=="object"){const _={};for(const[f,g]of Object.entries(e.ow_vote_tallies))typeof g=="number"&&g>0&&(_[f]=g);JSON.stringify(_)!==JSON.stringify(this.syncedOwVoteTallies)&&(this.syncedOwVoteTallies=_,h=!0)}this.nextBoutNumber=Math.max(this.nextBoutNumber,1+Math.max(100,...Array.from(this.bouts.values()).map(_=>_.bout_number||100)))}finally{this.isSeeding=m}return d&&this.broadcastEnabled&&this.liveConsoleRole==="primary"?(this.publishAndSave(),!0):(h&&(this.saveToStorage(),this.onStateChanged?.()),h)}bootstrapFromLocationQuery(e=typeof window<"u"?window.location.search:""){typeof window<"u"&&/github\.io$/i.test(window.location.hostname)&&(this.publicNostrRelayPublishingEnabled=!0);const t=(e??"").trim();if(!t||t==="?")return{joined:!1,linkedPubkeyHex:this.linkedVenuePubkeyHex,relayOrigin:this.liveOrigin};const i=new URLSearchParams(t.startsWith("?")?t.slice(1):t);if(i.has("sr")||i.has("selfreg")){const l=typeof window<"u"&&window.location?.href?window.location.href:`https://openmat.local/officials/?${i.toString()}`,h=Dn(l,this.tournamentId);if(h.valid&&h.record?.tournament_id===this.tournamentId){const d=this.stageSelfRegistration(h.record,"QR_SCAN");d.alreadyCheckedInAthlete||(this.selectedPendingSelfRegId=d.entry.registration_id)}}const s=i.get("venue")?.trim()||i.get("origin")?.trim()||"";s&&/^https?:\/\//i.test(s)&&this.setVenueOrigin(s.replace(/\/+$/,""));const n=i.get("join")?.trim()||i.get("qr")?.trim()||i.get("pubkey")?.trim()||t.replace(/^\?+/,"").trim(),a=Ye(n);if(!a.valid||!a.payload)return{joined:!1,linkedPubkeyHex:this.linkedVenuePubkeyHex,relayOrigin:this.liveOrigin};const o=a.payload;if(o.publisher_pubkey_hex&&o.publisher_pubkey_hex.toLowerCase()!==this.publisherPublicKeyHex.toLowerCase()&&(this.linkedVenuePubkeyHex=o.publisher_pubkey_hex.toLowerCase(),!this.hasExplicitStoredRole&&this.athletes.size===0&&this.bouts.size===0&&(this.liveConsoleRole="official"),this.liveConsoleRole==="official"&&o.tournament_id&&o.tournament_id!=="manual-pubkey"&&this.tournamentId!==o.tournament_id&&(this.athletes.clear(),this.bouts.clear(),this.scratches.clear(),this.mats.clear(),this.bracketFrozenByClass.clear())),o.relay_origin&&!/github\.io$/i.test(o.relay_origin)&&this.setVenueOrigin(o.relay_origin),o.nostr_relays?.length&&(this.publicNostrRelays=[...o.nostr_relays]),o.tournament_id&&o.tournament_id!=="manual-pubkey"&&this.athletes.size===0&&(this.tournamentId=o.tournament_id,o.tournament_name&&o.tournament_name!=="OpenMat Tournament"&&(this.tournamentName=o.tournament_name)),this.publicNostrRelayPublishingEnabled=!0,typeof window<"u"&&typeof WebSocket<"u"&&this.linkedVenuePubkeyHex){const l=`om-off-boot-${this.linkedVenuePubkeyHex.slice(0,12)}`,h={kinds:[24880,30078],"#x":[`openmat-pub:${this.linkedVenuePubkeyHex}`]};for(const d of this.publicNostrRelays)if(!(window.location?.protocol==="https:"&&!d.startsWith("wss:")))try{const u=new WebSocket(d),m=setTimeout(()=>{try{u.close()}catch{}},5e3);u.onopen=()=>{this.nostrRelayStatuses.set(d,"CONNECTED");try{u.send(JSON.stringify(["REQ",l,h]))}catch{}},u.onmessage=p=>{if(typeof p.data=="string")try{const _=JSON.parse(p.data);if(Array.isArray(_)&&_[0]==="EVENT"&&_[2]?.content){const f=JSON.parse(_[2].content);this.syncLiveProjectionFromVenue(f)}else if(Array.isArray(_)&&_[0]==="EOSE"){clearTimeout(m);try{u.close()}catch{}}}catch{}},u.onerror=()=>{clearTimeout(m);try{u.close()}catch{}}}catch{}}return{joined:!0,linkedPubkeyHex:this.linkedVenuePubkeyHex,relayOrigin:this.liveOrigin}}getMatScorekeeperQrSvg(e){const t=this.mats.get(e);if(!t)throw new N(B.InvalidArgument,`Unknown Mat ${e}`);return Mt(t.scorekeeper_qr_uri)}issueMatScorekeeperCertificate(e){if(!Number.isInteger(e.matId)||e.matId<1||e.matId>this.matCount||!e.androidDeviceId.trim()||!e.operatorName.trim())throw new Error("Mat, device ID and operator are required");const t=this.mats.get(e.matId);if([...this.bouts.values()].some(c=>c.assigned_mat_id===e.matId&&[M.InProgress,M.EndedLocal,M.LocallyConfirmed].includes(c.lifecycle)))throw new Error("An active mat requires the physical-stop authority-transfer workflow");const i=t?.certificate_id?t.authority_epoch+1:1,s=e.androidDeviceId.trim()||`mat-${e.matId}-scorekeeper`,n=e.operatorName.trim()||`Table ${e.matId} Scorer`;let a=e.subjectPubkeyHex?.trim().toLowerCase()??"";if(!/^[a-f0-9]{64}$/i.test(a))throw new Error("A device-generated Ed25519 public key is required");t?.certificate_id&&this.revokedCertificateIds.add(t.certificate_id);const o=this.buildSignedMatDelegation(e.matId,s,n,i,a,this.now());this.registerMatDelegation(o),this.mats.set(e.matId,o),this.syncVenueRoomRouter();for(const c of this.bouts.values())c.assigned_mat_id===e.matId&&c.lifecycle!==M.ResultAccepted&&(c.authority_epoch=o.authority_epoch,c.delegated_android_device_id=o.android_device_id);return this.publishAndSave(),o}revokeMatScorekeeperCertificate(e){this.revokedCertificateIds.add(e.trim()),this.saveToStorage()}validateScorekeeperQrOrCert(e,t,i=!1){const s=typeof e=="string"?e.trim():"";if(!s)return{valid:!1,reason:"Empty scorekeeper QR URI or certificate hex",tournamentIdMatch:!1,signatureValid:!1,notExpired:!1,notRevoked:!1,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1};let n,a=this.tournamentId,o=this.publisherPublicKeyHex;if(s.startsWith("openmat://scorekeeper-auth")){const b=Sl(s);if(!b.valid||!b.bundle)return{valid:!1,reason:b.reason,tournamentIdMatch:!1,signatureValid:!1,notExpired:!1,notRevoked:!1,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1};n=b.bundle.certificate,a=b.bundle.tournament_id,o=b.bundle.publisher_pubkey_hex}else try{n=Yt(s)}catch(b){return{valid:!1,reason:`Malformed certificate CBOR hex: ${String(b)}`,tournamentIdMatch:!1,signatureValid:!1,notExpired:!1,notRevoked:!1,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1}}const c=n.tournament_id===this.tournamentId&&a===this.tournamentId&&o.toLowerCase()===this.publisherPublicKeyHex.toLowerCase();if(!c)return{valid:!1,reason:`Tournament mismatch: certificate is for '${n.tournament_id}', expected '${this.tournamentId}'`,tournamentIdMatch:!1,signatureValid:!1,notExpired:!0,notRevoked:!0,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1,certificate:n};const l=!this.revokedCertificateIds.has(n.certificate_id);if(!l)return{valid:!1,reason:`Certificate ${n.certificate_id} has been revoked by tournament authority`,tournamentIdMatch:!0,signatureValid:!0,notExpired:!0,notRevoked:!1,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1,certificate:n};let h=!1,d=!1;try{Hi(n,this.keyPair.publicKey,this.now(),i),h=!0,d=!0}catch(b){const A=b instanceof N&&b.code===B.CertificateExpired;return{valid:!1,reason:b instanceof Error?b.message:String(b),tournamentIdMatch:!0,signatureValid:A,notExpired:!A,notRevoked:!0,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1,certificate:n}}const u=We.ScoreMat|We.ConfirmLocalResult,m=n.role===ft.MatOperator&&(n.allowed_scopes&u)===u,p=n.assigned_mat_id>=1&&n.assigned_mat_id<=this.matCount&&(t===void 0||n.assigned_mat_id===t),_=this.mats.get(n.assigned_mat_id),f=_?n.authority_generation===_.authority_epoch:!1,g=c&&h&&d&&l&&m&&p&&f;let w=`Authorized Scorekeeper '${n.subject_key_id}' verified for ${this.tournamentName} · Mat ${n.assigned_mat_id} (Epoch #${n.authority_generation})`;return m?p?f||(w=`Stale authority epoch #${n.authority_generation} (Mat ${n.assigned_mat_id} is currently on epoch #${_?.authority_epoch??"?"})`):w=`Scorekeeper is assigned to Mat ${n.assigned_mat_id}, not Mat ${t}`:w="Unauthorized role or missing ScoreMat / ConfirmLocalResult scope bits",{valid:g,reason:w,tournamentIdMatch:c,signatureValid:h,notExpired:d,notRevoked:l,matAuthorized:p,epochCurrent:f,scopesAllowed:m,certificate:n}}simActive=!1;simPhase="Idle (Manual Officials Mode)";simStepCursor=0;simTotalSteps=0;simSignedEventsProcessed=0;simSpectatorNodes=40;simBleacherDeliveries=0;simLatestEventSummary="Ready to load C++ OpenMat-Sim campaign trace.";simLatestEventIdHex="";simCppSnapshotReady=!1;simCppPublisherKeyHex="";simTelemetryLog=[];simActionQueue=[];generateCppCompatibleBracketForClass(e,t="varsity"){this.assertDrawNotStarted();for(const[g,w]of this.bouts.entries())w.weight_class_id===e&&w.division_id?.toLowerCase()===t.toLowerCase()&&this.bouts.delete(g);const i=Array.from(this.athletes.values()).filter(g=>g.weight_class_id===e&&g.division_id.toLowerCase()===t.toLowerCase()&&g.check_in_stage===J.Eligible&&g.weigh_in_eligible&&g.medically_cleared).sort((g,w)=>g.seed_rank-w.seed_rank||g.athlete_id.localeCompare(w.athlete_id)),s=i.reduce((g,w)=>Math.max(g,w.seed_rank),i.length),n=s<=8?8:s<=16?16:s<=32?32:64,a=Math.log2(n);i.forEach((g,w)=>{g.seed_rank=w+1});const o=t.toLowerCase()==="varsity"?`bracket-${e}`:`bracket-${t.toLowerCase()}-${e}`,c=X.TrueSecondChallenge,l=[],h=g=>{const w=`${o}-${g.suffix}`,b=!!(g.redId&&g.greenId),A={match_id:w,bracket_id:o,weight_class_id:e,division_id:t,format:c,bout_number:this.nextBoutNumber++,round_index:g.roundIndex,round_label:g.roundLabel,is_consolation:g.isConsolation,is_placement_bout:!!g.isPlacement,is_true_second_challenge:!!g.isTrueSecond,placement_rank:g.placementRank??0,red_athlete_id:g.redId??"",green_athlete_id:g.greenId??"",is_bye:!1,winner_next_match_id:g.winnerNext?`${o}-${g.winnerNext}`:"",loser_next_match_id:g.loserNext?`${o}-${g.loserNext}`:"",lifecycle:b?M.Assigned:M.PendingUpstream,assigned_mat_id:g.matId,mat_queue_order:g.queueOrder,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${g.matId}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};return this.bouts.set(w,A),l.push(A),A};let d=1;const u=Array.from({length:a+1},()=>[]);for(let g=1;g<=a;g++){const w=n>>g,b=g===a?"1st Place Championship Final":w===2?"Championship Semifinal":w===4?"Championship Quarterfinal":`Championship Round of ${w*2}`;for(let A=0;A<w;A++){const S=`C${g}-${A+1}`;u[g].push(S),h({suffix:S,roundIndex:g,roundLabel:b,isConsolation:!1,isPlacement:g===a,placementRank:g===a?1:0,winnerNext:g<a?`C${g+1}-${Math.floor(A/2)+1}`:void 0,loserNext:g===a?"TRUE-2ND":void 0,matId:(d-1)%this.matCount+1,queueOrder:d++})}}let m=1,p=[];for(let g=0;g<n/4;g++){const w=`L${m}-${g+1}`;p.push(w),h({suffix:w,roundIndex:m+1,roundLabel:`Consolation Round ${m}`,isConsolation:!0,loserNext:n===8?"P7":void 0,matId:(d-1)%this.matCount+1,queueOrder:d++});const b=this.bouts.get(`${o}-${u[1][2*g]}`),A=this.bouts.get(`${o}-${u[1][2*g+1]}`);b.loser_next_match_id=`${o}-${w}`,A.loser_next_match_id=`${o}-${w}`}for(let g=2;g<a;g++){const w=u[g].length;m+=1;const b=[];for(let A=0;A<w;A++){const S=`L${m}-${A+1}`;b.push(S);const E=g===a-1?"Consolation Semifinal (Crossover)":`Consolation Round ${m} (Crossover)`;h({suffix:S,roundIndex:g+m,roundLabel:E,isConsolation:!0,matId:(d-1)%this.matCount+1,queueOrder:d++});const C=this.bouts.get(`${o}-${p[A]}`);C.winner_next_match_id=`${o}-${S}`;const $=g%2===0?w-1-A:A^Math.floor(w/2),y=this.bouts.get(`${o}-${u[g][$]}`);y.loser_next_match_id=`${o}-${S}`}if(g<a-1){m+=1;const A=w/2,S=[];for(let E=0;E<A;E++){const C=`L${m}-${E+1}`;S.push(C),h({suffix:C,roundIndex:g+m,roundLabel:A===2?"Consolation Quarterfinal":`Consolation Round ${m}`,isConsolation:!0,loserNext:A===2?"P7":void 0,matId:(d-1)%this.matCount+1,queueOrder:d++});const $=this.bouts.get(`${o}-${b[2*E]}`),y=this.bouts.get(`${o}-${b[2*E+1]}`);$.winner_next_match_id=`${o}-${C}`,y.winner_next_match_id=`${o}-${C}`}p=S}else{for(let A=0;A<2;A++){const S=this.bouts.get(`${o}-${b[A]}`);S.winner_next_match_id=`${o}-P3`,S.loser_next_match_id=`${o}-P5`}p=b}}const _=a+m+1;h({suffix:"P7",roundIndex:_,roundLabel:"7th Place Match",isConsolation:!0,isPlacement:!0,placementRank:7,matId:(d-1)%this.matCount+1,queueOrder:d++}),h({suffix:"P5",roundIndex:_,roundLabel:"5th Place Match",isConsolation:!0,isPlacement:!0,placementRank:5,matId:(d-1)%this.matCount+1,queueOrder:d++}),h({suffix:"P3",roundIndex:_,roundLabel:"3rd Place Match",isConsolation:!0,isPlacement:!0,placementRank:3,winnerNext:"TRUE-2ND",matId:(d-1)%this.matCount+1,queueOrder:d++}),h({suffix:"TRUE-2ND",roundIndex:_+1,roundLabel:"True Second Challenge Match",isConsolation:!0,isPlacement:!0,isTrueSecond:!0,placementRank:2,matId:1,queueOrder:d++});const f=se.buildStandardTopSeeds(n);for(let g=0;g<n/2;g++){const w=f[g],b=n+1-w,A=this.bouts.get(`${o}-${u[1][g]}`);A.red_athlete_id=w>=1&&w<=i.length?i[w-1].athlete_id:"",A.green_athlete_id=b>=1&&b<=i.length?i[b-1].athlete_id:"",A.red_athlete_id&&A.green_athlete_id&&(A.lifecycle=M.Assigned)}return this.numberBoutsInRunningOrder(),this.bracketFrozenByClass.set(`${t.toUpperCase()}:${e}`,!0),l}loadCppSimulationTrace(e,t="",i=""){const s=td(e,t,i);this.resetTournamentState(),this.athletes.clear(),this.bouts.clear(),this.simActionQueue=[],this.simTelemetryLog=[],this.simStepCursor=0,this.simSignedEventsProcessed=0,this.simBleacherDeliveries=0,this.simSpectatorNodes=0,this.simCppPublisherKeyHex=i,this.simCppSnapshotReady=!1;for(const a of s){const o=/^bracket-(?:([a-z0-9_]+)-)?(\d+)-/i.exec(a.event.match_id);if(!o)throw new Error("Native trace has an unknown division or weight class");const c=o[1]??"varsity",l=o[2];for(const h of[a.projection.red_athlete_id,a.projection.green_athlete_id])typeof h!="string"||!h||this.athletes.has(h)||this.athletes.set(h,{athlete_id:h,opaque_pass_token:`NATIVE-${h}`,public_display_name:h,team_id:`team-${Number(h.split("-")[2])%8}`,team_name:`Native campaign team ${Number(h.split("-")[2])%8}`,division_id:c,weight_class_id:l,seed_rank:Number(h.split("-")[2])+1,check_in_stage:J.Eligible,weigh_in_eligible:!0,medically_cleared:!0,matches_wrestled_today:0,prior_day_matches:0,last_bout_ended_ms:0,updated_at_ms:this.now()})}for(const a of new Set([...this.athletes.values()].map(o=>`${o.division_id}:${o.weight_class_id}`))){const[o,c]=a.split(":");this.generateCppCompatibleBracketForClass(c,o)}let n=0;for(const a of s)this.simActionQueue.push(()=>{const{event:o,state:c,timer:l,projection:h,matId:d}=a,u=Math.floor(a.line.at_ms/864e5);for(;n<u;)this.advanceCompetitionDay(o.audit_time_ms),n+=1;const m=this.bouts.get(o.match_id);if(!m)throw new Error(`Native bracket is missing ${o.match_id}`);if(m.red_athlete_id=String(h.red_athlete_id),m.green_athlete_id=String(h.green_athlete_id),m.assigned_mat_id=d,m.authority_epoch=o.authority_epoch,m.assignment_revision=o.assignment_revision,m.delegated_android_device_id=o.signer_key_id,m.period_number=Number(c.period),m.clock_remaining_ms=Number(l.remaining_ms),m.clock_running=l.running===!0,m.red_score=Number(c.red_score),m.green_score=Number(c.green_score),h.confirmed===!0){const _=["","DEC","MD","TF","FALL","DQ","INJURY_DEFAULT","FORFEIT","MEDICAL_FORFEIT"][Number(c.win_type)];if(!_||c.bout_ended!==!0||![0,1].includes(Number(c.winner)))throw new Error("Invalid native confirmed result");this.recordMatsideConfirmedResult(m.match_id,Number(c.winner)===0?m.red_athlete_id:m.green_athlete_id,_,m.red_score,m.green_score,o.authority_epoch,o.audit_time_ms)}else m.lifecycle=c.bout_ended===!0?M.EndedLocal:M.InProgress;return this.simSignedEventsProcessed++,this.simPhase="Verified Native Campaign Replay",{stepIndex:this.simStepCursor,phase:this.simPhase,actorRole:"SCOREKEEPER",matId:d,matchId:o.match_id,sequence:o.sequence,signerKeyId:o.signer_key_id,eventIdHex:ue(o.event_id),summary:`Verified ${o.event_type}: ${o.match_id} (${m.red_score}–${m.green_score})`,atSimulatedMs:a.line.at_ms}});return this.simActionQueue.push(()=>{for(const a of this.bouts.values())a.is_true_second_challenge&&a.lifecycle!==M.ResultAccepted&&a.red_athlete_id&&a.green_athlete_id&&(a.is_bye=!0,a.lifecycle=M.ResultAccepted,a.winner_athlete_id=a.red_athlete_id,a.loser_athlete_id=a.green_athlete_id,a.win_type="DEC",a.completed_at_ms=s.at(-1).line.at_ms);return this.simPhase="Phase 4: Verified Native Campaign Replay Complete",{stepIndex:this.simStepCursor,phase:this.simPhase,actorRole:"OFFICIAL",summary:`Verified ${s.length} native packets. Snapshot files require separate manifest verification.`,atSimulatedMs:s.at(-1).line.at_ms}}),this.simTotalSteps=this.simActionQueue.length,this.simPhase="Verified Native Campaign Ready",this.publishAndSave(),{totalSteps:this.simTotalSteps,traceCount:s.length}}stepSimulationTick(e=1){const t=[],i=Math.max(1,Math.floor(e)),s=this.isSeeding;this.isSeeding=!0;try{for(let a=0;a<i;a++){if(this.simStepCursor>=this.simActionQueue.length){this.simActive=!1;break}const o=this.simActionQueue[this.simStepCursor];this.simStepCursor+=1;const c=o();this.simLatestEventSummary=c.summary,c.eventIdHex&&(this.simLatestEventIdHex=c.eventIdHex),this.simTelemetryLog=[c,...this.simTelemetryLog].slice(0,40),t.push(c)}}finally{this.isSeeding=s}const n=this.simStepCursor>=this.simActionQueue.length;return n&&(this.simActive=!1),this.publishAndSave(),{done:n,entries:t}}getSimPublicStatus(){let e=0;for(const t of this.bouts.values())t.lifecycle===M.ResultAccepted&&!t.is_bye&&e++;return{active:this.simActive,phase:this.simPhase,stepCursor:this.simStepCursor,totalSteps:this.simTotalSteps,acceptedBouts:e,signedEventsProcessed:this.simSignedEventsProcessed,spectatorNodes:this.simSpectatorNodes,bleacherDeliveries:this.simBleacherDeliveries,latestEventSummary:this.simLatestEventSummary,latestEventIdHex:this.simLatestEventIdHex,cppSnapshotReady:this.simCppSnapshotReady,cppPublisherKeyHex:this.simCppPublisherKeyHex}}computeBracketStandings(e,t){const i=(t??"").trim().toUpperCase(),s=Array.from(this.athletes.values()).filter(d=>d.weight_class_id===e&&(!i||i==="ALL"||(d.division_id||"VARSITY").toUpperCase()===i)&&d.check_in_stage===J.Eligible&&d.weigh_in_eligible&&d.medically_cleared),n=Array.from(this.bouts.values()).filter(d=>d.weight_class_id===e&&(!i||i==="ALL"||(d.division_id||"VARSITY").toUpperCase()===i)),a=n.length>0&&n.every(de),o=new Map;for(const d of s)o.set(d.athlete_id,{place:0,athlete_id:d.athlete_id,public_display_name:d.public_display_name,team_id:d.team_id,team_name:d.team_name,seed_rank:d.seed_rank,wins:0,losses:0,matches_played:0,falls_forfeits_dq:0,tech_falls:0,major_decisions:0,decisions:0,bonus_points:0,points_scored:0,points_allowed:0,bracket_complete:a});const c=new Map;for(const d of n){if(d.is_bye||!de(d))continue;const u=o.get(d.winner_athlete_id),m=o.get(d.loser_athlete_id),p=d.winner_athlete_id===d.red_athlete_id,_=p?d.red_score:d.green_score,f=p?d.green_score:d.red_score;if(u&&(u.wins+=1,u.matches_played+=1,u.points_scored+=_,u.points_allowed+=f,d.win_type==="FALL"||d.win_type==="FORFEIT"||d.win_type==="INJURY_DEFAULT"||d.win_type==="DQ"?(u.falls_forfeits_dq+=1,u.bonus_points+=2):d.win_type==="TF"?(u.tech_falls+=1,u.bonus_points+=1.5):d.win_type==="MD"?(u.major_decisions+=1,u.bonus_points+=1):u.decisions+=1),m&&(m.losses+=1,m.matches_played+=1,m.points_scored+=f,m.points_allowed+=_),d.winner_athlete_id&&d.loser_athlete_id){const g=`${d.winner_athlete_id}:${d.loser_athlete_id}`;c.set(g,(c.get(g)??0)+1)}}const l=new Map;for(const d of o.values()){const u=`${d.wins}:${d.losses}`;l.set(u,(l.get(u)??0)+1)}const h=Array.from(o.values()).sort((d,u)=>{if(u.wins!==d.wins)return u.wins-d.wins;if(d.losses!==u.losses)return d.losses-u.losses;if((l.get(`${d.wins}:${d.losses}`)??0)===2){const _=c.get(`${d.athlete_id}:${u.athlete_id}`)??0,f=c.get(`${u.athlete_id}:${d.athlete_id}`)??0;if(_!==f)return f-_}if(u.bonus_points!==d.bonus_points)return u.bonus_points-d.bonus_points;if(u.falls_forfeits_dq!==d.falls_forfeits_dq)return u.falls_forfeits_dq-d.falls_forfeits_dq;if(u.tech_falls!==d.tech_falls)return u.tech_falls-d.tech_falls;if(u.major_decisions!==d.major_decisions)return u.major_decisions-d.major_decisions;const m=d.points_scored-d.points_allowed,p=u.points_scored-u.points_allowed;return p!==m?p-m:u.points_scored!==d.points_scored?u.points_scored-d.points_scored:d.seed_rank-u.seed_rank||d.athlete_id.localeCompare(u.athlete_id)});return h.forEach((d,u)=>{d.place=u+1}),h}static PLACEMENT_POINTS_BY_RANK={1:16,2:12,3:9,4:7,5:5,6:3,7:2,8:1};computePlacementByAthleteForGroup(e,t,i){const s=new Map;if(i.length===0)return s;if(i.some(c=>c.format===X.RoundRobinPool)){if(i.length===1&&i[0].is_bye&&de(i[0])){const l=i[0].winner_athlete_id;return l&&!this.isWithdrawn(l)&&s.set(l,1),s}const c=i.filter(l=>!l.is_bye);return c.length>0&&c.every(de)&&this.computeBracketStandings(t,e).slice(0,8).forEach((h,d)=>{(d>0||h.wins>0)&&!this.isWithdrawn(h.athlete_id)&&s.set(h.athlete_id,d+1)}),s}if(i.some(c=>c.format===X.BestOfThree)){const c=i.filter(l=>!l.is_bye);if(i.every(de)&&c.length>0){const l=new Map,h=new Set;for(const u of c)u.red_athlete_id&&h.add(u.red_athlete_id),u.green_athlete_id&&h.add(u.green_athlete_id),u.winner_athlete_id&&l.set(u.winner_athlete_id,(l.get(u.winner_athlete_id)??0)+1);const d=[...h].sort((u,m)=>(l.get(m)??0)-(l.get(u)??0)||u.localeCompare(m));d[0]&&(l.get(d[0])??0)>=2&&!this.isWithdrawn(d[0])&&(s.set(d[0],1),d[1]&&!this.isWithdrawn(d[1])&&(c.some(m=>m.loser_athlete_id===d[1]&&m.win_type==="DQ")||s.set(d[1],2)))}return s}const n=i.find(c=>c.is_true_second_challenge&&c.placement_rank===2),a=i.find(c=>c.is_placement_bout&&c.placement_rank===1&&!c.is_true_second_challenge&&de(c));a&&(a.is_bye&&a.winner_athlete_id&&!a.green_athlete_id?this.isWithdrawn(a.winner_athlete_id)||s.set(a.winner_athlete_id,1):!a.is_bye&&a.winner_athlete_id&&(this.isWithdrawn(a.winner_athlete_id)||s.set(a.winner_athlete_id,1),a.loser_athlete_id&&!n&&!this.isWithdrawn(a.loser_athlete_id)&&a.win_type!=="DQ"&&s.set(a.loser_athlete_id,2)));const o=i.find(c=>c.is_placement_bout&&c.placement_rank===3&&de(c));o&&(!o.is_bye&&o.winner_athlete_id?(!n&&!this.isWithdrawn(o.winner_athlete_id)&&s.set(o.winner_athlete_id,3),o.loser_athlete_id&&!this.isWithdrawn(o.loser_athlete_id)&&o.win_type!=="DQ"&&s.set(o.loser_athlete_id,4)):o.is_bye&&o.winner_athlete_id&&!o.green_athlete_id&&!n&&!this.isWithdrawn(o.winner_athlete_id)&&s.set(o.winner_athlete_id,3)),n&&de(n)&&(n.winner_athlete_id&&!this.isWithdrawn(n.winner_athlete_id)&&s.set(n.winner_athlete_id,2),n.loser_athlete_id&&!this.isWithdrawn(n.loser_athlete_id)&&n.win_type!=="DQ"?s.set(n.loser_athlete_id,3):n.is_bye&&!n.winner_athlete_id&&a&&!a.is_bye&&a.loser_athlete_id&&!this.isWithdrawn(a.loser_athlete_id)&&a.win_type!=="DQ"&&s.set(a.loser_athlete_id,2));for(const c of[5,7]){const l=i.find(h=>h.is_placement_bout&&h.placement_rank===c&&de(h));l&&(!l.is_bye&&l.winner_athlete_id?(this.isWithdrawn(l.winner_athlete_id)||s.set(l.winner_athlete_id,c),l.loser_athlete_id&&!this.isWithdrawn(l.loser_athlete_id)&&l.win_type!=="DQ"&&s.set(l.loser_athlete_id,c+1)):l.is_bye&&l.winner_athlete_id&&!l.green_athlete_id&&(this.isWithdrawn(l.winner_athlete_id)||s.set(l.winner_athlete_id,c)))}return s}computeTeamStandings(){const e=pi(this.bouts.values(),Hn),t=new Map;for(const n of this.athletes.values())t.has(n.team_id)||t.set(n.team_id,{rank:0,team_id:n.team_id,team_name:n.team_name,total_points:0,advancement_points:0,placement_points:0,bonus_points:0,falls_forfeits_dq:0,tech_falls:0,major_decisions:0,first_place_winners:0});const i=new Map;for(const n of this.bouts.values()){const a=(n.division_id||"VARSITY").trim().toUpperCase()||"VARSITY",o=`${a}:${n.weight_class_id}`,c=i.get(o)??{divisionId:a,weightClassId:n.weight_class_id,bouts:[]};if(c.bouts.push(n),i.set(o,c),!de(n)||!n.winner_athlete_id||n.is_bye)continue;const l=this.athletes.get(n.winner_athlete_id);if(!l)continue;const h=t.get(l.team_id);if(!h)continue;const d=n.is_consolation?1:2;h.advancement_points+=d+(e.get(n.match_id)?.earnedPoints??0);let u=0;n.win_type==="FALL"||n.win_type==="FORFEIT"||n.win_type==="MEDICAL_FORFEIT"||n.win_type==="INJURY_DEFAULT"||n.win_type==="DQ"?(u=2,h.falls_forfeits_dq+=1):n.win_type==="TF"?(u=1.5,h.tech_falls+=1):n.win_type==="MD"&&(u=1,h.major_decisions+=1),h.bonus_points+=u,h.total_points=h.advancement_points+h.placement_points+h.bonus_points}for(const n of i.values()){const a=this.computePlacementByAthleteForGroup(n.divisionId,n.weightClassId,n.bouts);for(const[o,c]of a){const l=se.PLACEMENT_POINTS_BY_RANK[c]??0;if(l<=0)continue;const h=this.athletes.get(o),d=h&&t.get(h.team_id);d&&(d.placement_points+=l,c===1&&(d.first_place_winners+=1),d.total_points=d.advancement_points+d.placement_points+d.bonus_points)}}const s=Array.from(t.values()).sort((n,a)=>a.total_points-n.total_points||a.falls_forfeits_dq-n.falls_forfeits_dq||a.tech_falls-n.tech_falls||a.major_decisions-n.major_decisions||a.first_place_winners-n.first_place_winners||n.team_name.localeCompare(a.team_name));return s.forEach((n,a)=>{n.rank=a+1}),s}computeElapsedBoutTimeMs(e,t,i){if(typeof e!="number"||!Number.isInteger(e)||e<1||e>9||typeof t!="number"||!Number.isInteger(t)||t<0)return null;const s=this.rulesBundle,n=l=>l===1?s.period_1_duration_ms:l===2?s.period_2_duration_ms:l===3?s.period_3_duration_ms:l===4?s.sv_duration_ms:l<=8?s.tb_period_duration_ms:s.utb_duration_ms,a=n(e),o=i==="event"&&e===1&&t>a?12e4:a;if(t>o||i==="bout"&&(t===0||t===o))return null;let c=o-t;for(let l=1;l<e;l++)c+=n(l);return c>0?c:null}computeWrestlerStats(){const e=pi(this.bouts.values(),Hn),t=this.getOwVoteTallies(),i=new Map;for(const c of this.athletes.values()){const l=(c.division_id||"VARSITY").trim().toUpperCase()||"VARSITY";i.set(c.athlete_id,{tournament_id:this.tournamentId,tournament_name:this.tournamentName,event_date:this.eventDate,venue:this.venue,athlete_id:c.athlete_id,wrestler_name:c.public_display_name,team_id:c.team_id,team_name:c.team_name,division_id:l,weight_class_lbs:c.weight_class_id,seed_rank:c.seed_rank,flowrestling_id:c.flowrestling_id??"",check_in_status:qi[c.check_in_stage]??String(c.check_in_stage),weigh_in_eligible:c.weigh_in_eligible,medically_cleared:c.medically_cleared,bracket_format:"UNSCHEDULED",bracket_complete:!1,placement:null,standing_rank:null,matches_played:0,wins:0,losses:0,win_pct:0,byes_received:0,championship_wins:0,championship_losses:0,consolation_wins:0,consolation_losses:0,matches_wrestled_today:c.matches_wrestled_today,prior_day_matches:c.prior_day_matches,wins_by_fall:0,wins_by_tech_fall:0,wins_by_major_decision:0,wins_by_decision:0,wins_by_forfeit:0,wins_by_injury_default:0,wins_by_dq:0,bonus_wins:0,bonus_win_pct:0,losses_by_fall:0,losses_by_tech_fall:0,losses_by_major_decision:0,losses_by_decision:0,losses_by_forfeit_default_dq:0,match_points_scored:0,match_points_allowed:0,match_point_differential:0,avg_match_points_scored:0,avg_match_points_allowed:0,event_logged_bouts:0,takedowns_scored:0,takedowns_allowed:0,escapes_scored:0,escapes_allowed:0,reversals_scored:0,reversals_allowed:0,near_falls_2_scored:0,near_falls_3_scored:0,near_falls_4_scored:0,near_falls_total_scored:0,near_falls_allowed:0,cautions_committed:0,stalling_calls_committed:0,penalties_committed:0,fastest_fall_ms:null,team_advancement_points:0,team_bonus_points:0,team_placement_points:0,team_points_total:0,ow_votes:t[c.athlete_id]??0})}const s=new Map;for(const c of this.bouts.values()){const l=(c.division_id||"VARSITY").trim().toUpperCase()||"VARSITY",h=`${l}:${c.weight_class_id}`,d=s.get(h)??{divisionId:l,weightClassId:c.weight_class_id,bouts:[]};if(d.bouts.push(c),s.set(h,d),!de(c))continue;if(c.is_bye){if(c.winner_athlete_id&&!c.green_athlete_id&&!c.loser_athlete_id&&!c.is_true_second_challenge){const w=i.get(c.winner_athlete_id);w&&(w.byes_received+=1)}continue}const u=i.get(c.winner_athlete_id),m=c.loser_athlete_id?i.get(c.loser_athlete_id):void 0,p=c.winner_athlete_id===c.red_athlete_id,_=p?c.red_score:c.green_score,f=p?c.green_score:c.red_score,g=c.win_type.toUpperCase();if(u){u.matches_played+=1,u.wins+=1,c.is_consolation?u.consolation_wins+=1:u.championship_wins+=1,u.match_points_scored+=_,u.match_points_allowed+=f;const w=c.is_consolation?1:2;u.team_advancement_points+=w+(e.get(c.match_id)?.earnedPoints??0);let b=0;g==="FALL"?(u.wins_by_fall+=1,u.bonus_wins+=1,b=2):g==="FORFEIT"||g==="MEDICAL_FORFEIT"?(u.wins_by_forfeit+=1,u.bonus_wins+=1,b=2):g==="INJURY_DEFAULT"?(u.wins_by_injury_default+=1,u.bonus_wins+=1,b=2):g==="DQ"?(u.wins_by_dq+=1,u.bonus_wins+=1,b=2):g==="TF"?(u.wins_by_tech_fall+=1,u.bonus_wins+=1,b=1.5):g==="MD"?(u.wins_by_major_decision+=1,u.bonus_wins+=1,b=1):u.wins_by_decision+=1,u.team_bonus_points+=b}m&&(m.matches_played+=1,m.losses+=1,c.is_consolation?m.consolation_losses+=1:m.championship_losses+=1,m.match_points_scored+=f,m.match_points_allowed+=_,g==="FALL"?m.losses_by_fall+=1:g==="TF"?m.losses_by_tech_fall+=1:g==="MD"?m.losses_by_major_decision+=1:g==="FORFEIT"||g==="MEDICAL_FORFEIT"||g==="INJURY_DEFAULT"||g==="DQ"?m.losses_by_forfeit_default_dq+=1:m.losses_by_decision+=1)}for(const c of s.values()){const{divisionId:l,weightClassId:h,bouts:d}=c,u=d[0]?.format??"UNSCHEDULED",m=d.length>0&&d.every(de),p=this.computeBracketStandings(h,l);for(const g of this.athletes.values())if(((g.division_id||"VARSITY").trim().toUpperCase()||"VARSITY")===l&&g.weight_class_id===h){const b=i.get(g.athlete_id);b&&(b.bracket_format=u,b.bracket_complete=m)}const _=this.computePlacementByAthleteForGroup(l,h,d);for(const[g,w]of _.entries()){const b=i.get(g);b&&(b.placement=w,b.team_placement_points+=se.PLACEMENT_POINTS_BY_RANK[w]??0)}if(d.some(g=>g.format===X.RoundRobinPool))for(const g of p){const w=i.get(g.athlete_id);w&&(w.standing_rank=g.place)}else{const g=new Map;p.forEach((b,A)=>g.set(b.athlete_id,A+1)),p.map(b=>b.athlete_id).sort((b,A)=>{const S=_.get(b)??Number.MAX_SAFE_INTEGER,E=_.get(A)??Number.MAX_SAFE_INTEGER;return S!==E?S-E:(g.get(b)??0)-(g.get(A)??0)}).forEach((b,A)=>{const S=i.get(b);S&&(S.standing_rank=A+1)})}}const n=new Map,a=new Set;for(const c of this.protocolJournal)if(c.wireHex)try{const l=Xe(ae(c.wireHex)),h=`${l.stream_id}:${l.authority_epoch}:${l.sequence}`;if(a.has(h))continue;a.add(h);const d=this.bouts.get(l.match_id);if(!d||d.is_bye||!de(d)||l.assignment_revision!==d.assignment_revision)continue;const u=l.payload instanceof Uint8Array?Me(l.payload):l.payload;if(!u||typeof u!="object"||Array.isArray(u)||u instanceof Uint8Array||u instanceof Map)continue;const m=u,p=m.public_state,_=p&&typeof p=="object"&&!Array.isArray(p)&&!(p instanceof Uint8Array)&&!(p instanceof Map)?p:null,f=n.get(d.match_id)??[];l.event_type==="MATCH_UNDO_LAST_ACTION"?f.pop():f.push({eventType:l.event_type,payload:m,publicState:_}),n.set(d.match_id,f)}catch{}for(const c of this.bouts.values()){if(c.is_bye||!de(c))continue;const l=n.get(c.match_id)??[],h=i.get(c.red_athlete_id),d=i.get(c.green_athlete_id);l.length>0&&(h&&(h.event_logged_bouts+=1),d&&(d.event_logged_bouts+=1));const u=c.winner_athlete_id===c.red_athlete_id?"RED":c.winner_athlete_id===c.green_athlete_id?"GREEN":"",m=u&&c.win_type.toUpperCase()==="FALL"?i.get(c.winner_athlete_id):void 0;let p=null;for(const f of l){const{eventType:g,payload:w,publicState:b}=f,A=String(w.actor??w.corner??"").toUpperCase(),S=A==="RED"?h:A==="GREEN"?d:void 0,E=A==="RED"?d:A==="GREEN"?h:void 0,C=g==="MATCH_SCORING_ACTION"?String(w.action??"").toUpperCase():String(w.command_type??w.action??g).toUpperCase();if(S)switch(C){case"TAKEDOWN_3":S.takedowns_scored+=1,E&&(E.takedowns_allowed+=1);break;case"ESCAPE_1":S.escapes_scored+=1,E&&(E.escapes_allowed+=1);break;case"REVERSAL_2":S.reversals_scored+=1,E&&(E.reversals_allowed+=1);break;case"NEAR_FALL_2":case"NEARFALL_2":S.near_falls_2_scored+=1,S.near_falls_total_scored+=1,E&&(E.near_falls_allowed+=1);break;case"NEAR_FALL_3":case"NEARFALL_3":S.near_falls_3_scored+=1,S.near_falls_total_scored+=1,E&&(E.near_falls_allowed+=1);break;case"NEAR_FALL_4":case"NEARFALL_4":case"NEAR_FALL_INJURY_OR_SCREAMING_4":S.near_falls_4_scored+=1,S.near_falls_total_scored+=1,E&&(E.near_falls_allowed+=1);break;case"CAUTION":S.cautions_committed+=1;break;case"STALLING":case"STALL_WARN":S.stalling_calls_committed+=1;break;case"TECHNICAL_VIOLATION":case"ILLEGAL_HOLD":case"UNNECESSARY_ROUGHNESS":case"UNSPORTSMANLIKE_WRESTLER":case"UNSPORTSMANLIKE_COACH":case"FLAGRANT_MISCONDUCT":S.penalties_committed+=1;break}if(m&&A===u&&(g==="MATCH_ENDING_ACTION"&&String(w.ending_type??"").toUpperCase()==="FALL"||C==="PIN_FALL")){const y=this.computeElapsedBoutTimeMs(b?.period??w.period,b?.clock_remaining_ms??w.clock_remaining_ms,"event");y!==null&&(p=Math.min(p??y,y))}}if(!m)continue;const _=p??(c.clock_running?null:this.computeElapsedBoutTimeMs(c.period_number,c.clock_remaining_ms,"bout"));_!==null&&(m.fastest_fall_ms=Math.min(m.fastest_fall_ms??_,_))}const o=Array.from(i.values());for(const c of o)c.win_pct=c.matches_played>0?c.wins/c.matches_played:0,c.bonus_win_pct=c.wins>0?c.bonus_wins/c.wins:0,c.match_point_differential=c.match_points_scored-c.match_points_allowed,c.avg_match_points_scored=c.matches_played>0?c.match_points_scored/c.matches_played:0,c.avg_match_points_allowed=c.matches_played>0?c.match_points_allowed/c.matches_played:0,c.team_points_total=c.team_advancement_points+c.team_bonus_points+c.team_placement_points;return o.sort((c,l)=>{if(c.division_id!==l.division_id)return c.division_id.localeCompare(l.division_id);const h=Number(c.weight_class_lbs)-Number(l.weight_class_lbs);if(Number.isFinite(h)&&h!==0)return h;if(c.weight_class_lbs!==l.weight_class_lbs)return c.weight_class_lbs.localeCompare(l.weight_class_lbs);const d=c.placement??Number.MAX_SAFE_INTEGER,u=l.placement??Number.MAX_SAFE_INTEGER;if(d!==u)return d-u;const m=c.standing_rank??Number.MAX_SAFE_INTEGER,p=l.standing_rank??Number.MAX_SAFE_INTEGER;return m!==p?m-p:c.seed_rank!==l.seed_rank?c.seed_rank-l.seed_rank:c.wrestler_name!==l.wrestler_name?c.wrestler_name.localeCompare(l.wrestler_name):c.athlete_id.localeCompare(l.athlete_id)}),o}exportWrestlerStatsCsv(){const e=this.computeWrestlerStats(),t=[Ad.join(",")];for(const i of e){const s=[i.tournament_id,i.tournament_name,i.event_date,i.venue,i.athlete_id,i.wrestler_name,i.team_id,i.team_name,i.division_id,i.weight_class_lbs,i.seed_rank,i.flowrestling_id,i.check_in_status,i.weigh_in_eligible,i.medically_cleared,i.bracket_format,i.bracket_complete,i.placement??"",i.standing_rank??"",i.matches_played,i.wins,i.losses,i.win_pct.toFixed(3),i.byes_received,i.championship_wins,i.championship_losses,i.consolation_wins,i.consolation_losses,i.matches_wrestled_today,i.prior_day_matches,i.wins_by_fall,i.wins_by_tech_fall,i.wins_by_major_decision,i.wins_by_decision,i.wins_by_forfeit,i.wins_by_injury_default,i.wins_by_dq,i.bonus_wins,i.bonus_win_pct.toFixed(3),i.losses_by_fall,i.losses_by_tech_fall,i.losses_by_major_decision,i.losses_by_decision,i.losses_by_forfeit_default_dq,i.match_points_scored,i.match_points_allowed,i.match_point_differential,i.avg_match_points_scored.toFixed(2),i.avg_match_points_allowed.toFixed(2),i.event_logged_bouts,i.takedowns_scored,i.takedowns_allowed,i.escapes_scored,i.escapes_allowed,i.reversals_scored,i.reversals_allowed,i.near_falls_2_scored,i.near_falls_3_scored,i.near_falls_4_scored,i.near_falls_total_scored,i.near_falls_allowed,i.cautions_committed,i.stalling_calls_committed,i.penalties_committed,i.fastest_fall_ms!==null?(i.fastest_fall_ms/1e3).toFixed(1):"",i.team_advancement_points.toFixed(1),i.team_bonus_points.toFixed(1),i.team_placement_points.toFixed(1),i.team_points_total.toFixed(1),i.ow_votes].map(n=>se.escapeCsvCell(n));t.push(s.join(","))}return t.join(`
`)+`
`}buildSignedPublicProjection(e=!1){const t=Array.from(this.athletes.values()).sort((d,u)=>d.weight_class_id.localeCompare(u.weight_class_id)||d.seed_rank-u.seed_rank),i=new Map;for(const d of this.mats.keys()){const u=this.matQueue(d);u[0]&&u[0].lifecycle>=M.Ready&&u.forEach((m,p)=>i.set(m.match_id,p+1))}const s=[...this.bouts.values()].sort((d,u)=>d.bout_number-u.bout_number).map(d=>i.has(d.match_id)?{...d,mat_queue_order:i.get(d.match_id)}:d),n=Array.from(this.mats.values()).sort((d,u)=>d.mat_id-u.mat_id),a=this.computeTeamStandings(),o={};for(const[d,u]of this.bracketFrozenByClass.entries())o[d]=u;const c=this.now(),l={...e?{allow_reset:!0}:{},tournament_id:this.tournamentId,tournament_name:this.tournamentName,rules_version:this.rulesVersion,growth_allowance_tenths:this.growthAllowanceTenths,consecutive_day_allowance_tenths:this.consecutiveDayAllowanceTenths,mat_count:this.matCount,snapshot_epoch:this.snapshotEpoch,control_sequence_head:this.controlSequenceHead,published_at_ms:c,publisher_pubkey_hex:ue(this.keyPair.publicKey),payload_sha256_hex:"",signature_hex:"",athletes:t,bouts:s,mats:n,standings:a,bracket_frozen_by_class:o,...this.simActive||this.simTotalSteps>0||this.simStepCursor>0?{sim_status:this.getSimPublicStatus()}:{},p2p_topology:this.getVenueRoomTopologySummary(),revoked_certificate_ids:[...this.revokedCertificateIds],ow_vote_tallies:this.getOwVoteTallies()},h=se.projectionBytes(l);return l.payload_sha256_hex=ue(Be(h)),l.signature_hex=ue(Ve(ke,h,this.keyPair.privateKey)),structuredClone(l)}static projectionBytes(e){const{signature_hex:t,payload_sha256_hex:i,...s}=e;return xe({state_digest_hex:ue(Be(new TextEncoder().encode(JSON.stringify(s))))})}static verifySignedPublicProjection(e){try{if(!Gl(e))return!1;const t=this.projectionBytes(e);return ue(Be(t))===e.payload_sha256_hex&&Pe(ke,t,ae(e.publisher_pubkey_hex),ae(e.signature_hex))}catch{return!1}}publishAndSave(e=!1,t=!1){if(this.controlSequenceHead+=1,this.snapshotEpoch+=1,this.isSeeding)return null;const i=this.buildSignedPublicProjection(t);return this.broadcastEnabled?(this.saveToStorage(),this.broadcastEnvelope(i,e),this.onStateChanged?.(),i):(this.broadcastLiveRooms(JSON.stringify(i)),this.onStateChanged?.(),i)}currentBracketPackets(){const e=Math.max(this.snapshotEpoch,this.controlSequenceHead);if(this.publicationTournamentId===this.tournamentId&&this.publicationRevision===e)return this.publicationPackets;const t=new Map;for(const i of this.protocolJournal){if(!i.wireHex)continue;const s=Xe(ae(i.wireHex));if(s.tournament_id!==this.tournamentId||!this.bouts.has(s.match_id))continue;const n=t.get(s.match_id)??[];n.push(s),t.set(s.match_id,n)}return this.publicationPackets=Pl(this.buildSignedPublicProjection(),this.keyPair.publicKey,this.keyPair.privateKey,this.rulesHash,t),this.publicationTournamentId=this.tournamentId,this.publicationRevision=e,this.publicationPackets}bracketSync(e,t){const i=new TextDecoder("utf-8",{fatal:!0}).decode(e);if(i&&!/^[A-Za-z0-9_-]{1,100}$/.test(i))throw new Error("Invalid bracket ID");if(i&&t.startsWith("subtree:b:")&&t!==`subtree:b:${i}`)throw new Error("Wrong bracket room");const s=this.currentBracketPackets(),n=s.get("tournament-summary::0"),a=s.get("mat-board::0"),o=s.get(`bracket-full:${i}:0`);return xe([n,...o?[o]:[],a].map(({topic:c,bytes:l})=>({topic:c,bytes:l})),{maxBytes:4194304})}pendingBroadcastJson=null;broadcastMicrotaskScheduled=!1;broadcastLiveRooms(e){this.liveConsoleRole!=="primary"||this.overlayMesh.liveRooms.size===0||(this.pendingBroadcastJson=e,!this.broadcastMicrotaskScheduled&&(this.broadcastMicrotaskScheduled=!0,queueMicrotask(()=>{this.broadcastMicrotaskScheduled=!1;const t=this.pendingBroadcastJson;if(this.pendingBroadcastJson=null,!t||this.liveConsoleRole!=="primary")return;const i=new TextEncoder().encode(t);for(const[s,n]of this.overlayMesh.liveRooms)try{if(s===_t)n.send("control-state",this.signedControlSnapshot(),Te.CurrentStateUnorderedNewest);else if(s.startsWith("subtree:")&&[...n.members.keys()].some(a=>a!==this.livePeerId)){n.send("public-projection",i,Te.CurrentStateUnorderedNewest);const a=this.livePacketHeads.get(s),o=new Map,c=s.startsWith("subtree:b:")?s.slice(10):"",l=this.currentBracketPackets(),h=["tournament-summary::0","mat-board::0"],d=`bracket-state:${c}:0`;for(const u of new Set([...h,d,...l.keys()])){const m=l.get(u);if(!m||m.topic==="bracket-full"||m.bracketId&&m.bracketId!==c&&(c||m.topic!=="mat-update"))continue;const p=a?.get(u);(!p||!be(p.content,m.content))&&(a||m.topic!=="bout-update")&&n.send(m.topic,m.bytes,Te.CurrentStateUnorderedNewest),o.set(u,m)}this.livePacketHeads.set(s,o)}}catch(a){this.liveTransportError=String(a)}})))}broadcastEnvelope(e,t=!1){if(this.liveConsoleRole!=="primary"||!this.broadcastEnabled||this.isSeeding)return;const i=JSON.stringify(e);this.broadcastLiveRooms(i);try{this.broadcastChannel?.postMessage(e)}catch{}if(this.publicNostrRelayPublishingEnabled&&e.athletes.length>0&&this.publishProjectionToPublicNostrRelays(e),!(typeof window>"u")){for(const s of new Set([window.location.origin,this.activeVenueOrigin])){const n=new URL(s);if(/github\.io$/i.test(n.hostname))continue;const a=t||this.pendingProjections.get(n.origin)?.override===!0;this.pendingProjections.set(n.origin,{json:i,override:a})}this.flushPendingProjections()}}async flushPendingProjections(e,t=!1){if(!(typeof window>"u"||!this.broadcastEnabled||this.liveConsoleRole!=="primary")){if(e){const i=new URL(e).origin;t&&(this.athletes.size||this.bouts.size)&&!this.linkedVenuePubkeyHex&&!/github\.io$/i.test(new URL(i).hostname)&&!this.pendingProjections.has(i)&&this.pendingProjections.set(i,{json:JSON.stringify(this.buildSignedPublicProjection()),override:!1})}await Promise.all([...this.pendingProjections.keys()].map(i=>{const s=this.projectionFlushes.get(i);if(s)return s;const n=(async()=>{for(;this.liveConsoleRole==="primary";){const a=this.pendingProjections.get(i);if(!a)return;const o={"Content-Type":"application/json"};this.officialsPassword&&(o["x-openmat-officials-password"]=this.officialsPassword),a.override&&(o["x-openmat-authority-override"]="1");try{const c=await fetch(new URL("/api/openmat-live-projection",i),{method:"POST",headers:o,body:a.json,signal:AbortSignal.timeout(4e3)});if(!c.ok)throw new Error(`Projection upload failed with HTTP ${c.status}`);this.pendingProjections.get(i)===a&&this.pendingProjections.delete(i);try{const l=await c.json();l?.envelope&&this.pendingProjectionPostCount===0&&this.syncLiveProjectionFromVenue(l.envelope)}catch{}}catch(c){this.liveTransportError=String(c);return}}})().finally(()=>this.projectionFlushes.delete(i));return this.projectionFlushes.set(i,n),n}))}}saveToStorage(){if(!(!this.broadcastEnabled||typeof localStorage>"u"))try{const e=this.storageState();localStorage.setItem(vn,JSON.stringify(e))}catch(e){throw new Error(`Authority state could not be persisted: ${String(e)}`)}}storageState(){return{tournamentId:this.tournamentId,tournamentName:this.tournamentName,eventDate:this.eventDate,venue:this.venue,rulesVersion:this.rulesVersion,growthAllowanceTenths:this.growthAllowanceTenths,consecutiveDayAllowanceTenths:this.consecutiveDayAllowanceTenths,matCount:this.matCount,snapshotEpoch:this.snapshotEpoch,controlSequenceHead:this.controlSequenceHead,nextBoutNumber:this.nextBoutNumber,linkedVenuePubkeyHex:this.linkedVenuePubkeyHex,linkedVenueJoinQrUri:this.linkedVenueJoinQrUri,hasExternalVenueServer:this.hasExternalVenueServer,lastSyncedVenueEpochByPublisher:[...this.lastSyncedVenueEpochByPublisher],protocolJournal:this.protocolJournal,resultCorrections:this.resultCorrections,scratches:[...this.scratches],revokedCertificateIds:[...this.revokedCertificateIds],owVotes:[...this.owVotes],athletes:Array.from(this.athletes.entries()),pendingSelfRegistrations:Array.from(this.pendingSelfRegistrations.entries()),selfRegistrationDispositions:Array.from(this.selfRegistrationDispositions.entries()),privateWeighIns:Array.from(this.privateWeighIns.entries()),privateMedicals:Array.from(this.privateMedicals.entries()),bouts:Array.from(this.bouts.entries()),mats:Array.from(this.mats.entries()),bracketFrozenByClass:Array.from(this.bracketFrozenByClass.entries())}}loadFromStorage(e=!1){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem(vn);if(!t)return!1;const i=JSON.parse(t);if(!i||!Array.isArray(i.athletes))throw new Error("Invalid stored roster");if(!Array.isArray(i.mats)||i.mats.length===0)throw new Error("Invalid stored mats");const s=i.tournamentName==="New tournament"&&i.athletes.length===0&&(!Array.isArray(i.bouts)||i.bouts.length===0)&&(!Array.isArray(i.protocolJournal)||i.protocolJournal.length===0);if(s){this.tournamentId=re.tournamentId,this.tournamentName=re.tournamentName,this.eventDate=re.eventDate,this.venue=re.venue,this.rulesVersion=re.rulesVersion,this.growthAllowanceTenths=re.growthAllowanceTenths,this.consecutiveDayAllowanceTenths=0,this.matCount=re.matCount,this.mats=new Map;for(let c=1;c<=this.matCount;c++)this.mats.set(c,this.unprovisionedMat(c))}else this.tournamentId=i.tournamentId??this.tournamentId,this.tournamentName=i.tournamentName??this.tournamentName,this.eventDate=i.eventDate??this.eventDate,this.venue=i.venue??this.venue,this.rulesVersion=i.rulesVersion??this.rulesVersion,this.growthAllowanceTenths=i.growthAllowanceTenths??0,this.consecutiveDayAllowanceTenths=i.consecutiveDayAllowanceTenths??0,this.matCount=i.matCount??re.matCount,this.mats=new Map(i.mats);this.snapshotEpoch=i.snapshotEpoch??1,this.controlSequenceHead=i.controlSequenceHead??1,this.nextBoutNumber=i.nextBoutNumber??101,s||(this.linkedVenuePubkeyHex=typeof i.linkedVenuePubkeyHex=="string"?i.linkedVenuePubkeyHex:this.linkedVenuePubkeyHex,this.linkedVenueJoinQrUri=typeof i.linkedVenueJoinQrUri=="string"?i.linkedVenueJoinQrUri:this.linkedVenueJoinQrUri),this.hasExternalVenueServer=i.hasExternalVenueServer??!!(this.linkedVenueJoinQrUri&&this.linkedVenuePubkeyHex&&this.linkedVenuePubkeyHex!==this.publisherPublicKeyHex),this.lastSyncedVenueEpochByPublisher=new Map(i.lastSyncedVenueEpochByPublisher??[]),this.athletes=new Map(i.athletes),this.pendingSelfRegistrations=new Map(i.pendingSelfRegistrations??[]),this.selfRegistrationDispositions=new Map(i.selfRegistrationDispositions??[]),this.privateWeighIns=new Map(i.privateWeighIns),this.privateMedicals=new Map(i.privateMedicals),this.bouts=new Map(i.bouts),this.bracketFrozenByClass=new Map(i.bracketFrozenByClass),this.resultCorrections=i.resultCorrections??[],this.scratches=new Map(i.scratches??[]),this.owVotes=new Map(i.owVotes??[]),this.revokedCertificateIds=new Set(i.revokedCertificateIds??[]);const n=i.protocolJournal??[],a=e&&n.length>=this.protocolJournal.length&&this.protocolJournal.every((c,l)=>{const h=n[l];return h&&h.wireHex===c.wireHex&&h.controlHeadHex===c.controlHeadHex&&h.mat?.certificate_id===c.mat?.certificate_id}),o=a?this.protocolJournal.length:0;a||(this.verifiers.clear(),this.knownProvisionHeads.clear());for(let c=o;c<n.length;c++){const l=n[c];if(l.mat&&this.registerMatDelegation(l.mat,!1),l.controlHeadHex){const h=this.verifiers.get(l.matId);if(!h)throw new Error("Provision head precedes mat delegation");h.markControlHeadKnown(ae(l.controlHeadHex)),this.knownProvisionHeads.add(`${l.matId}:${l.controlHeadHex}`)}if(l.wireHex){const h=Xe(ae(l.wireHex)),d=Number(h.stream_id.split(":")[1]),u=this.verifiers.get(d);if(!u||u.verifyAndAccept(h,Ut,We.ScoreMat,l.atMs,!0)!==$e.Applied)throw new Error("Invalid persisted stream journal")}}return this.protocolJournal=n,!0}catch(t){throw new Error(`Stored authority state requires recovery: ${String(t)}`)}}}const ja=/novice|jv|1-2-2/i,Id=1800*1e3;function ut(r,e,t){return Number.isFinite(r)?Math.min(t,Math.max(e,r)):e}function kn(r="",e){const t=ja.test(r),i={defaultAvgCycleMs:t?36e4:42e4,minAvgCycleMs:t?21e4:24e4,maxAvgCycleMs:t?6e5:72e4,minSampleMs:9e4,maxSampleMs:9e5,minInterCompletionGapMs:45e3,maxInterCompletionGapMs:12e5,changeoverMs:45e3,idleStagingBufferMs:6e4,period1Ms:t?6e4:12e4,period2Ms:12e4,period3Ms:12e4,ewmaAlpha:.18,matBlendWeight:.3,requiredRestMs:Id};return e?{...i,...e}:i}function Ne(r){return r===M.EndedLocal||r===M.LocallyConfirmed||r===M.ResultAccepted}function ri(r,e){const t=i=>i.mat_queue_order>0?i.mat_queue_order:Number.MAX_SAFE_INTEGER;return t(r)-t(e)||r.bout_number-e.bout_number}function Jt(r){const e=(r??"").trim().toUpperCase();return e==="FORFEIT"||e==="MEDICAL_FORFEIT"||e==="BYE"}function lt(r){return r.is_bye||(r.win_type??"").trim().toUpperCase()==="BYE"}function Gi(r,e){if(r.is_bye)return!0;if(r.match_id&&!r.red_athlete_id&&!r.green_athlete_id&&e.length>0){const t=e.filter(n=>n.winner_next_match_id===r.match_id||n.loser_next_match_id===r.match_id),i=t.some(n=>n.is_bye&&n.loser_next_match_id===r.match_id),s=t.filter(n=>!n.is_bye);if(i&&s.length<=1)return!0}return!1}function fr(r){if(!Number.isFinite(r)||r<=0)return"PT0S";if(r<6e4)return"PT1M";const e=Math.max(1,Math.round(r/6e4)),t=Math.floor(e/60),i=e%60;return t>0&&i>0?`PT${t}H${i}M`:t>0?`PT${t}H`:`PT${i}M`}let zt;function Cd(){if(zt!==void 0)return zt;try{const r=Intl;if(typeof r?.DurationFormat=="function")return zt=new r.DurationFormat("en-US",{style:"short"}),zt}catch{}return zt=null,null}function Wn(r){if(!Number.isFinite(r)||r<=0)return"Now";if(r<6e4)return"< 1 min";const e=Math.max(1,Math.round(r/6e4)),t=Math.floor(e/60),i=e%60,s=Cd();return s?`~${(t>0&&i>0?s.format({hours:t,minutes:i}):t>0?s.format({hours:t}):s.format({minutes:e})).replace(/,\s*/g," ")}`:t>0&&i>0?`~${t} hr ${i} min`:t>0?`~${t} hr`:`~${e} min`}function gr(r){if(!Number.isFinite(r)||r<=0)return"NOW";if(r<6e4)return"<1m";const e=Math.max(1,Math.round(r/6e4)),t=Math.floor(e/60),i=e%60;return t>0&&i>0?`~${t}h ${i}m`:t>0?`~${t}h`:`~${e}m`}function br(r,e){if(e<=0)return"On mat now";if(e<6e4)return"Under 1 min";const t=Math.max(1,Math.floor(r/6e4)),i=Math.max(t,Math.ceil(e/6e4));if(t===i)return Wn(i*6e4);if(i>=60){const s=n=>{const a=Math.floor(n/60),o=n%60;return o>0?`${a}h ${o}m`:`${a}h`};return`${s(t)}–${s(i)}`}return`${t}–${i} min`}class Md{overrides;trackedTournamentId="";observedStartMsByMatch=new Map;observedCompletedMsByMatch=new Map;constructor(e){this.overrides=e}reset(){this.trackedTournamentId="",this.observedStartMsByMatch.clear(),this.observedCompletedMsByMatch.clear()}estimateElapsedRegClockMs(e,t,i){const s=t.period1Ms+t.period2Ms+t.period3Ms,n=this.remainingRegulationClockMs(e,t,i);return ut(s-n,0,s)}remainingRegulationClockMs(e,t,i){const s=Math.max(0,i),n=Math.max(1,Math.trunc(e.period_number||1));return n===1?Math.min(t.period1Ms,s)+t.period2Ms+t.period3Ms:n===2?Math.min(t.period2Ms,s)+t.period3Ms:n===3?Math.min(t.period3Ms,s):0}observeEnvelope(e,t=Date.now(),i){e.tournament_id!==this.trackedTournamentId&&(this.trackedTournamentId=e.tournament_id,this.observedStartMsByMatch.clear(),this.observedCompletedMsByMatch.clear());const s=kn(e.rules_version,this.overrides),n=new Set;for(const a of e.bouts){n.add(a.match_id);const o=Ne(a.lifecycle);if(!o&&(a.lifecycle===M.InProgress||!!a.clock_running)&&(!!a.clock_running||(a.period_number||1)>1||(a.red_score||0)>0||(a.green_score||0)>0||a.clock_remaining_ms>0&&a.clock_remaining_ms<s.period1Ms)&&!this.observedStartMsByMatch.has(a.match_id)){const h=i?i(a,t):Math.max(0,a.clock_remaining_ms),d=this.estimateElapsedRegClockMs(a,s,h),u=Math.round(d*1.2);this.observedStartMsByMatch.set(a.match_id,t-u)}o?a.completed_at_ms>0?this.observedCompletedMsByMatch.set(a.match_id,a.completed_at_ms):this.observedCompletedMsByMatch.has(a.match_id)||this.observedCompletedMsByMatch.set(a.match_id,t):this.observedCompletedMsByMatch.delete(a.match_id)}for(const a of this.observedStartMsByMatch.keys())n.has(a)||this.observedStartMsByMatch.delete(a);for(const a of this.observedCompletedMsByMatch.keys())n.has(a)||this.observedCompletedMsByMatch.delete(a)}extractCycleSamples(e,t){const i=new Map;for(const n of e.bouts){if(!Ne(n.lifecycle)||n.is_bye||Jt(n.win_type))continue;const a=n.completed_at_ms>0?n.completed_at_ms:this.observedCompletedMsByMatch.get(n.match_id)??0;if(a<=0)continue;const o=Math.max(0,Math.trunc(n.assigned_mat_id||0)),c=i.get(o)??[];c.push({bout:n,doneAtMs:a}),i.set(o,c)}const s=[];for(const[n,a]of i.entries()){a.sort((o,c)=>o.doneAtMs-c.doneAtMs||o.bout.bout_number-c.bout.bout_number);for(let o=0;o<a.length;o++){const c=a[o],l=this.observedStartMsByMatch.get(c.bout.match_id);if(n>0&&o>0){const h=a[o-1],d=c.doneAtMs-h.doneAtMs;if(d>=t.minInterCompletionGapMs&&d<=t.maxInterCompletionGapMs){s.push({matchId:c.bout.match_id,matId:n,completedAtMs:c.doneAtMs,durationMs:ut(d,t.minSampleMs,t.maxSampleMs)});continue}}if(l!==void 0){const h=c.doneAtMs-l+t.changeoverMs;h>=t.minInterCompletionGapMs&&h<=t.maxInterCompletionGapMs&&s.push({matchId:c.bout.match_id,matId:n,completedAtMs:c.doneAtMs,durationMs:ut(h,t.minSampleMs,t.maxSampleMs)})}}}return s.sort((n,a)=>n.completedAtMs-a.completedAtMs||n.matId-a.matId),s}computePaceSummary(e,t){const i=kn(e.rules_version,this.overrides),s=ja.test(e.rules_version??""),n=this.extractCycleSamples(e,i);let a=i.defaultAvgCycleMs;for(const f of n)a=(1-i.ewmaAlpha)*a+i.ewmaAlpha*f.durationMs;const o=Math.round(ut(a,i.minAvgCycleMs,i.maxAvgCycleMs));let c=.22;if(n.length>=2){const f=n.reduce((g,w)=>g+Math.abs(w.durationMs-o),0)/n.length;c=ut(f/Math.max(1,o),.15,.35)}const l=new Map,h=new Map,d=new Map;for(const f of n){if(f.matId<=0)continue;const g=d.get(f.matId)??[];g.push(f),d.set(f.matId,g)}const u=Math.max(1,t);for(let f=1;f<=u;f++){const g=d.get(f)??[];if(h.set(f,g.length),g.length===0)l.set(f,o);else{let w=o;for(const S of g)w=(1-i.ewmaAlpha)*w+i.ewmaAlpha*S.durationMs;const b=g.length>=2?i.matBlendWeight:i.matBlendWeight*.5,A=(1-b)*o+b*w;l.set(f,Math.round(ut(A,i.minAvgCycleMs,i.maxAvgCycleMs)))}}const m=(o/6e4).toFixed(1),p=`~${m} min/bout`,_=n.length===0?`Match pace ~${m} min/bout (initial average)`:`Match pace ~${m} min/bout (adapted from ${n.length} ${n.length===1?"match":"matches"})`;return{rulesVersion:e.rules_version??"",isNoviceRuleset:s,defaultAvgCycleMs:i.defaultAvgCycleMs,minAvgCycleMs:i.minAvgCycleMs,maxAvgCycleMs:i.maxAvgCycleMs,learnedAvgCycleMs:o,sampleCount:n.length,matAvgCycleMs:l,matSampleCounts:h,spreadRatio:c,paceSource:n.length>0?"BLENDED_LIVE":"INITIAL_AVERAGE",formattedPaceShort:p,formattedPaceDetail:_}}estimateActiveBoutRemainingMs(e,t,i,s,n){const a=t.matAvgCycleMs.get(e.assigned_mat_id)??t.learnedAvgCycleMs,o=Math.max(6e4,a-i.changeoverMs),c=n?n(e,s):Math.max(0,e.clock_remaining_ms);if(Math.max(1,Math.trunc(e.period_number||1))>=4)return i.changeoverMs+Math.max(3e4,Math.round(c*1.35));const h=Math.max(1,i.period1Ms+i.period2Ms+i.period3Ms),d=this.remainingRegulationClockMs(e,i,c),u=ut(d/h,0,1);return Math.round(i.changeoverMs+o*u)}computeSnapshot(e,t=Date.now(),i){this.observeEnvelope(e,t,i);const s=kn(e.rules_version,this.overrides),n=e.bouts.reduce((y,I)=>Math.max(y,Math.trunc(I.assigned_mat_id||0)),0),a=Math.min(20,Math.max(1,Math.trunc(e.mat_count||0),n,...e.mats.map(y=>Math.trunc(y.mat_id||0)))),o=this.computePaceSummary(e,a),c=new Map,l=e.bouts;if(l.length===0)return{nowMs:t,pace:o,byMatchId:c};const h=new Map(e.athletes.map(y=>[y.athlete_id,y])),d=new Map;for(const y of e.athletes)y.last_bout_ended_ms>0&&d.set(y.athlete_id,y.last_bout_ended_ms);for(const y of l)if(Ne(y.lifecycle)&&!(y.is_bye||Jt(y.win_type)||y.completed_at_ms<=0))for(const I of[y.red_athlete_id,y.green_athlete_id]){if(!I)continue;const D=d.get(I)??0;y.completed_at_ms>D&&d.set(I,y.completed_at_ms)}const u=new Map;for(const y of l)for(const I of[y.winner_next_match_id,y.loser_next_match_id]){if(!I)continue;const D=u.get(I)??[];D.push(y),u.set(I,D)}const m=new Map,p=new Map,_=new Map,f=new Map;for(let y=1;y<=a;y++)p.set(y,t),_.set(y,0),f.set(y,!1);const g=[],w=[],b=[];for(const y of l){if(Ne(y.lifecycle)){const I=y.completed_at_ms>0?y.completed_at_ms:this.observedCompletedMsByMatch.get(y.match_id)??t;m.set(y.match_id,I),c.set(y.match_id,{matchId:y.match_id,boutNumber:y.bout_number,assignedMatId:y.assigned_mat_id,projectedMatId:y.assigned_mat_id,boutsAheadOnMat:0,matQueuePosition:0,estimatedWaitMs:0,minWaitMs:0,maxWaitMs:0,estimatedMinutes:0,estimatedStartAtMs:I,estimatedFinishAtMs:I,governingReason:"COMPLETED",restWaitMs:0,feederWaitMs:0,roundBarrierWaitMs:0,isoDuration:"PT0S",shortLabel:"Final",compactLabel:"FINAL",rangeLabel:"Completed",contextLabel:"Match completed"});continue}if(Gi(y,l)){m.set(y.match_id,t);continue}y.lifecycle===M.InProgress||y.clock_running?g.push(y):y.lifecycle===M.Ready?w.push(y):b.push(y)}g.sort(ri),w.sort(ri);const A=y=>{const I=Math.trunc(y.assigned_mat_id||0);if(I>=1&&I<=a)return I;let D=1,x=p.get(1)??t;for(let v=2;v<=a;v++){const R=p.get(v)??t;R<x&&(x=R,D=v)}return D};for(const y of g){const I=A(y),D=_.get(I)??0,x=p.get(I)??t,v=Math.max(0,x-t),R=this.estimateActiveBoutRemainingMs(y,o,s,t,i),k=x+R;p.set(I,k),_.set(I,D+1),f.set(I,!0),m.set(y.match_id,k),y.red_athlete_id&&d.set(y.red_athlete_id,k),y.green_athlete_id&&d.set(y.green_athlete_id,k),c.set(y.match_id,{matchId:y.match_id,boutNumber:y.bout_number,assignedMatId:y.assigned_mat_id,projectedMatId:I,boutsAheadOnMat:D,matQueuePosition:D,estimatedWaitMs:v,minWaitMs:v,maxWaitMs:v,estimatedMinutes:0,estimatedStartAtMs:x,estimatedFinishAtMs:k,governingReason:"ON_MAT_NOW",restWaitMs:0,feederWaitMs:0,roundBarrierWaitMs:0,isoDuration:"PT0S",shortLabel:"On mat now",compactLabel:"LIVE",rangeLabel:"On mat now",contextLabel:`Active on Mat ${I}`})}for(const y of w){const I=A(y),D=_.get(I)??0,x=p.get(I)??t,v=Math.max(0,x-t),R=Jt(y.win_type)?3e4:o.matAvgCycleMs.get(I)??o.learnedAvgCycleMs,k=x+R;p.set(I,k),_.set(I,D+1),f.set(I,!0),m.set(y.match_id,k),y.red_athlete_id&&d.set(y.red_athlete_id,k),y.green_athlete_id&&d.set(y.green_athlete_id,k);const T=v===0,O=o.spreadRatio/Math.sqrt(Math.max(1,D)),P=T?0:Math.max(3e4,Math.round(v*(1-O))),W=T?6e4:Math.max(v,Math.round(v*(1+O))),G=T?0:Math.max(1,Math.round(v/6e4));c.set(y.match_id,{matchId:y.match_id,boutNumber:y.bout_number,assignedMatId:y.assigned_mat_id,projectedMatId:I,boutsAheadOnMat:D,matQueuePosition:D===0?1:D+1,estimatedWaitMs:v,minWaitMs:P,maxWaitMs:W,estimatedMinutes:G,estimatedStartAtMs:x,estimatedFinishAtMs:k,governingReason:T?"UP_NEXT_AT_MAT":"MAT_QUEUE",restWaitMs:0,feederWaitMs:0,roundBarrierWaitMs:0,isoDuration:T?"PT0S":fr(v),shortLabel:T?"Up next":Wn(v),compactLabel:T?"NEXT":gr(v),rangeLabel:T?"Report to mat now":br(P,W),contextLabel:T?`Report to Mat ${I} now`:`Report to Mat ${I} (${D} ${D===1?"bout":"bouts"} finishing)`})}const S=new Map;for(const y of b){const I=Math.max(1,Math.trunc(y.round_index||1)),D=S.get(I)??[];D.push(y),S.set(I,D)}const E=Array.from(S.keys()).sort((y,I)=>y-I);let C=t;const $=new Map;for(const y of[...g,...w]){const I=Math.max(1,Math.trunc(y.round_index||1)),D=m.get(y.match_id)??t;$.set(I,Math.max($.get(I)??t,D))}for(const y of E){C=t;for(const[D,x]of $.entries())D<y&&x>C&&(C=x);const I=(S.get(y)??[]).sort(ri);for(const D of I){const x=A(D),v=_.get(x)??0;let R=p.get(x)??t;v===0&&!(f.get(x)??!1)&&(R=Math.max(R,t+s.idleStagingBufferMs));let k=t;for(const me of[D.red_athlete_id,D.green_athlete_id]){if(!me)continue;const Z=h.get(me),Re=d.get(me)??Z?.last_bout_ended_ms??0;Re>0&&(k=Math.max(k,Re+s.requiredRestMs))}let T=t;const O=u.get(D.match_id)??[];for(const me of O){if(Gi(me,l))continue;const Z=m.get(me.match_id)??t;Ne(me.lifecycle)?T=Math.max(T,Z):T=Math.max(T,Z+s.requiredRestMs)}const P=Math.max(R,C,k,T),W=Math.max(0,P-t),G=Math.max(0,R-t),F=Math.max(0,k-t),q=Math.max(0,T-t),V=Math.max(0,C-t),z=Jt(D.win_type)?3e4:o.matAvgCycleMs.get(x)??o.learnedAvgCycleMs,L=P+z;p.set(x,L),_.set(x,v+1),m.set(D.match_id,L),$.set(y,Math.max($.get(y)??t,L)),D.red_athlete_id&&d.set(D.red_athlete_id,L),D.green_athlete_id&&d.set(D.green_athlete_id,L);let j=D.assigned_mat_id>0?"MAT_QUEUE":"UNASSIGNED_POOL";q>G&&q>=F&&q>=V?j="AWAITING_FEEDER":F>G&&F>=V?j="MANDATORY_REST":V>G&&(j="ROUND_LOCK");const Y=Math.max(1,v),K=o.spreadRatio/Math.sqrt(Y),ee=Math.max(F,6e4),ne=Math.min(W,Math.max(ee,Math.round(W*(1-K)))),_e=Math.max(W,Math.round(W*(1+K))),ve=Math.max(1,Math.round(W/6e4));let ce;j==="AWAITING_FEEDER"?ce="Awaiting feeder bout and rest":j==="MANDATORY_REST"?ce="Includes 30-min mandatory rest":j==="ROUND_LOCK"?ce="Waiting for earlier round to finish":D.assigned_mat_id<=0?ce=`Queued across ${a} ${a===1?"mat":"mats"}`:v===0?ce=`First queued on Mat ${x}`:v===1?ce=`1 bout ahead on Mat ${x}`:ce=`${v} bouts ahead on Mat ${x}`,c.set(D.match_id,{matchId:D.match_id,boutNumber:D.bout_number,assignedMatId:D.assigned_mat_id,projectedMatId:x,boutsAheadOnMat:v,matQueuePosition:v+1,estimatedWaitMs:W,minWaitMs:ne,maxWaitMs:_e,estimatedMinutes:ve,estimatedStartAtMs:P,estimatedFinishAtMs:L,governingReason:j,restWaitMs:F,feederWaitMs:q,roundBarrierWaitMs:V,isoDuration:fr(W),shortLabel:Wn(W),compactLabel:gr(W),rangeLabel:br(ne,_e),contextLabel:ce})}}return{nowMs:t,pace:o,byMatchId:c}}}function Td(r,e,t){if(r.mat_queue_order>0)return r.mat_queue_order;if(t?.projectedMatId!==r.assigned_mat_id||!r.red_athlete_id||!r.green_athlete_id||t.boutsAheadOnMat!==1&&t.boutsAheadOnMat!==2)return;const i=e.filter(s=>s.assigned_mat_id===r.assigned_mat_id&&s.lifecycle>=M.Assigned&&s.lifecycle<=M.InProgress&&s.red_athlete_id&&s.green_athlete_id&&!lt(s)&&Wi(s,r)<0);if(!(i.length!==t.boutsAheadOnMat||i.some(s=>s.mat_queue_order>i.length)))return i.length+1}function za(r,e,t){if(r.lifecycle===M.InProgress||r.clock_running)return"IN_PROGRESS";if(r.lifecycle===M.Ready)return"READY_UP_NEXT";if(!(r.assigned_mat_id>0)||r.lifecycle!==M.Assigned)return"SCHEDULED";const i=Td(r,e,t);return i===2?"ON_DECK":i===3?"IN_THE_HOLE":"SCHEDULED"}function Ya(r,e){return{rank:0,team_id:r,team_name:e,total_points:0,advancement_points:0,placement_points:0,bonus_points:0,falls_forfeits_dq:0,tech_falls:0,major_decisions:0,first_place_winners:0}}function ji(r){return[...r].sort((e,t)=>t.total_points-e.total_points||t.falls_forfeits_dq-e.falls_forfeits_dq||t.tech_falls-e.tech_falls||t.major_decisions-e.major_decisions||t.first_place_winners-e.first_place_winners||e.team_name.localeCompare(t.team_name)).map((e,t)=>({...e,rank:t+1}))}function Bd(r,e,t){const i={...r};for(const s of["total_points","advancement_points","placement_points","bonus_points","falls_forfeits_dq","tech_falls","major_decisions","first_place_winners"])i[s]=Math.max(0,r[s]+(t?.[s]??0)-(e?.[s]??0));return i}const Nd={1:16,2:12,3:9,4:7,5:5,6:3,7:2,8:1};function Pt(r){return lt(r)?r.lifecycle===M.ResultAccepted?r.winner_athlete_id:"":Ne(r.lifecycle)?r.winner_athlete_id?r.winner_athlete_id:r.red_score>r.green_score?r.red_athlete_id:r.green_score>r.red_score?r.green_athlete_id:"":""}function Ni(r,e){const t=new Map;for(const l of r.values())t.has(l.team_id)||t.set(l.team_id,Ya(l.team_id,l.team_name||l.team_id));const i=[...e],s=pi(i,Pt),n=(l,h)=>l.loser_athlete_id||(h===l.red_athlete_id?l.green_athlete_id:h===l.green_athlete_id?l.red_athlete_id:""),a=(l,h)=>{const d=Nd[h]??0;if(!l||d<=0)return;const u=r.get(l);if(!u||(u.check_in_stage??0)===6||(u.check_in_stage??0)===7)return;const m=t.get(u.team_id);m&&(m.placement_points+=d,h===1&&m.first_place_winners++)},o=new Map;for(const l of i){const h=l.bracket_id||`${l.division_id||"ALL"}:${l.weight_class_id}`,d=o.get(h);d?d.push(l):o.set(h,[l])}const c=new Set;for(const[l,h]of o)h.some(d=>(d.is_true_second_challenge||d.placement_rank===2)&&Ne(d.lifecycle)&&!lt(d))&&c.add(l);for(const l of i){if(!Ne(l.lifecycle))continue;const h=lt(l),d=Pt(l),u=n(l,d),m=r.get(d),p=m&&t.get(m.team_id),_=l.bracket_id||`${l.division_id||"ALL"}:${l.weight_class_id}`;if(l.is_placement_bout&&l.format!=="ROUND_ROBIN_POOL"&&l.format!=="BEST_OF_THREE"){const f=c.has(_);l.placement_rank===1?((!h||!l.green_athlete_id)&&a(d,1),!h&&u&&!f&&l.win_type!=="DQ"&&l.win_type!=="MEDICAL_FORFEIT"&&a(u,2)):l.placement_rank===2||l.is_true_second_challenge?h||(a(d,2),u&&l.win_type!=="DQ"&&l.win_type!=="MEDICAL_FORFEIT"&&a(u,3)):l.placement_rank===3?h||(f||a(d,3),u&&l.win_type!=="DQ"&&l.win_type!=="MEDICAL_FORFEIT"&&a(u,4)):(l.placement_rank===5||l.placement_rank===7)&&(h||(a(d,l.placement_rank),u&&l.win_type!=="DQ"&&l.win_type!=="MEDICAL_FORFEIT"&&a(u,l.placement_rank+1)))}if(p&&!h)switch(p.advancement_points+=(l.is_consolation?1:2)+(s.get(l.match_id)?.earnedPoints??0),(l.win_type||"").toUpperCase()){case"FALL":case"FORFEIT":case"INJURY_DEFAULT":case"DQ":p.bonus_points+=2,p.falls_forfeits_dq++;break;case"TF":case"TECHNICAL_FALL":p.bonus_points+=1.5,p.tech_falls++;break;case"MD":case"MAJOR_DECISION":p.bonus_points+=1,p.major_decisions++;break}}for(const[,l]of o){if(l.length===0)continue;const h=l[0].format;if(l.length===1&&lt(l[0])&&Ne(l[0].lifecycle)&&!l[0].is_placement_bout){a(l[0].winner_athlete_id||l[0].red_athlete_id,1);continue}const d=l.filter(u=>!lt(u));if(!(d.length===0||!d.every(u=>Ne(u.lifecycle)))){if(h==="BEST_OF_THREE"||l.some(u=>u.match_id.includes("-BO3-"))){const u=new Map,m=new Set;for(const _ of d){_.red_athlete_id&&m.add(_.red_athlete_id),_.green_athlete_id&&m.add(_.green_athlete_id);const f=Pt(_);f&&u.set(f,(u.get(f)??0)+1)}const p=[...m].sort((_,f)=>(u.get(f)??0)-(u.get(_)??0)||_.localeCompare(f));p[0]&&(u.get(p[0])??0)>=2&&(a(p[0],1),p[1]&&a(p[1],2))}else if(h==="ROUND_ROBIN_POOL"){const u=new Map,m=f=>{let g=u.get(f);return g||(g={wins:0,bonus:0,falls:0,diff:0,h2h:new Set},u.set(f,g)),g};for(const f of d){f.red_athlete_id&&(m(f.red_athlete_id).diff+=f.red_score-f.green_score),f.green_athlete_id&&(m(f.green_athlete_id).diff+=f.green_score-f.red_score);const g=Pt(f),w=n(f,g);if(!g)continue;const b=m(g);b.wins+=1,w&&b.h2h.add(w);const A=(f.win_type||"").toUpperCase();A==="FALL"||A==="FORFEIT"||A==="INJURY_DEFAULT"||A==="DQ"?(b.bonus+=4,b.falls+=1):A==="TF"||A==="TECHNICAL_FALL"?b.bonus+=3:(A==="MD"||A==="MAJOR_DECISION")&&(b.bonus+=2)}const p=new Map;for(const[f,g]of u){const w=p.get(g.wins);w?w.push(f):p.set(g.wins,[f])}const _=[];for(const f of[...p.keys()].sort((g,w)=>w-g)){const g=p.get(f);if(g.length===2){const[w,b]=g,A=u.get(w),S=u.get(b);A.h2h.has(b)&&!S.h2h.has(w)?_.push(w,b):S.h2h.has(w)&&!A.h2h.has(b)?_.push(b,w):(g.sort((E,C)=>{const $=u.get(E),y=u.get(C);return y.bonus-$.bonus||y.falls-$.falls||y.diff-$.diff||E.localeCompare(C)}),_.push(...g))}else g.sort((w,b)=>{const A=u.get(w),S=u.get(b);return S.bonus-A.bonus||S.falls-A.falls||S.diff-A.diff||w.localeCompare(b)}),_.push(...g)}_.slice(0,8).forEach((f,g)=>a(f,g+1))}}}for(const l of t.values())l.total_points=l.advancement_points+l.placement_points+l.bonus_points;return t}const Pi=re.tournamentId,Ka=re.tournamentName;function Vn(r,e){return e===3&&/(?:^|-)novice-/i.test(r)?"NOVICE":["","VARSITY","GIRLS","JV","U16"][e]||"VARSITY"}const yr="openmat_players_watchlist_v4_1",wr="openmat_players_verified_projection",Pd=8;function vr(){const r=typeof window>"u"?void 0:window.location;return r&&(r.protocol==="http:"||r.protocol==="https:")&&!/(^|\.)github\.io\.?$/i.test(r.hostname)?r.origin:Nt}class Le{constructor(e,t=`player-${gt()}`,i=Nc("spectator")){this.peerKey=i,this.onUpdateCallback=e,this.overlayMesh=new Na({peerId:t,configuredMats:4}),this.envelope={tournament_id:"",tournament_name:"Join a tournament",rules_version:"",growth_allowance_tenths:0,consecutive_day_allowance_tenths:0,mat_count:0,snapshot_epoch:0,control_sequence_head:0,published_at_ms:0,publisher_pubkey_hex:"",payload_sha256_hex:"",signature_hex:"",athletes:[],bouts:[],mats:[],standings:[],bracket_frozen_by_class:{},ow_vote_tallies:{}},this.pinnedPublisherPubkeyHex="",this.defaultJoinQrUri="",this.defaultJoinQrSvg="",this.loadWatchlist();try{const s=JSON.parse(globalThis.localStorage?.getItem(wr)??"null");if(typeof s?.joinQrUri=="string"&&se.verifySignedPublicProjection(s.envelope)){const{valid:n,payload:a}=Ye(s.joinQrUri);n&&a&&(!a.tournament_id||a.tournament_id==="manual-pubkey"||a.tournament_id===s.envelope.tournament_id)&&(!a.publisher_pubkey_hex||a.publisher_pubkey_hex===s.envelope.publisher_pubkey_hex.toLowerCase())&&(this.applyScannedTournamentJoinQr(s.joinQrUri),this.ingestSignedEnvelope(s.envelope,"VERIFIED_LOCAL_CACHE"))}}catch{}if(typeof window<"u"&&window.location?.href&&(window.location.search||window.location.hash))try{this.applyScannedTournamentJoinQr(window.location.href)}catch{}this.recordCurrentUrgencies()}peerKey;envelope;etaEstimator=new Md;overlayMesh;assignedSubtreeParentId="venue-super-seed";assignedSubtreeRoomId=Ke.subtreeRoomId("venue-super-seed");lastSubtreePingRttMs=0;framesRoutedViaMux=0;lastRelayedProjection="";pinnedPublisherPubkeyHex;defaultJoinQrUri;defaultJoinQrSvg;lastVerifiedUpdateMs=0;connectionState="AWAITING_TOURNAMENT_JOIN";watchedAthleteIds=new Set;webPushState="UNSUBSCRIBED";webPushStatusMessage="";vapidPublicKeyBase64Url="";activePushSubscription=null;webPushAvailable;joinBootstrapRequest;officialsOrigin=typeof window<"u"&&window.location?.origin&&window.location.origin.startsWith("http")&&!window.location.origin.endsWith(":5173")?window.location.origin:"http://127.0.0.1:5174";owVotedAthleteId="";owVoteTallies=new Map;owVoteStatusMessage="";voterId="";pinnedTournamentId="";pinnedIssuedAtMs=0;publisherOnlyJoin=!1;pendingVote;gameMessageListener;gameIceServers=[];gameRevision=-1;gameTimestamp=-1;gameSnapshotTimestamp=-1;gameStatePending=null;cachedGameState=null;cachedGameStateAt=0;gameRoutes=new Map;gameReceipts=new Map;gameBackupParents=[];gameRelayChildren=10;maintainGameAdmission=!1;compactReplica;compactStandingBaseline;projectedView;decodedEventlogs=new WeakMap;watchedBracketIds=[];get selectedBracketId(){return this.watchedBracketIds[0]??""}compactSyncGeneration;liveParent=null;liveChildren=null;p2pError="";serviceWorkerVersion="";syncGeneration=0;liveSyncGeneration=0;bootstrapping=!1;p2pAvailable=!0;compactSseAvailable=!1;isRefreshing=!1;refreshPromise=null;lastCompactSseSeq=0;compactSseModeActive=!1;resyncTimer=null;fetchedBracketEventlogIds=new Set;bracketHttpRequests=new Map;lastDelivery=null;apiLastAttemptAtMs=0;apiLastSuccessAtMs=0;apiError="";static propagateCompletedBracketFeeders(e,t){if(e.length===0)return[];const i=new Map(e.map(h=>[h.match_id,h])),s=h=>{const d=t.get(h)?.check_in_stage??0;return d===6||d===7};let n=!1;const a=h=>{if(i.get(h)){if(!n){for(const[u,m]of i.entries())i.set(u,{...m});n=!0}return i.get(h)}},o=(h,d,u)=>{if(!h||!d)return;const m=i.get(h);if(!m||m.format==="BEST_OF_THREE")return;if(m.red_athlete_id===d||m.green_athlete_id===d){if(m.red_athlete_id&&m.green_athlete_id&&m.lifecycle===M.PendingUpstream){const g=a(h);g.lifecycle=M.Assigned}return}const p=Array.from(i.values()).filter(g=>!g.is_bye&&(g.winner_next_match_id===h||g.loser_next_match_id===h)).sort((g,w)=>g.bout_number-w.bout_number||g.match_id.localeCompare(w.match_id));if(p.length===2&&p[1]?.match_id===u&&!m.green_athlete_id){const g=a(h);g.green_athlete_id=d}else if(m.red_athlete_id){if(!m.green_athlete_id&&m.red_athlete_id!==d){const g=a(h);g.green_athlete_id=d}}else{const g=a(h);g.red_athlete_id=d}const f=i.get(h);if(f.red_athlete_id&&f.green_athlete_id&&f.lifecycle===M.PendingUpstream){const g=a(h);g.lifecycle=M.Assigned}},c=Array.from(i.values()).sort((h,d)=>h.bout_number-d.bout_number||h.match_id.localeCompare(d.match_id));for(const h of c){const d=Pt(h);if(!d)continue;const u=h.loser_athlete_id||(d===h.red_athlete_id?h.green_athlete_id:h.red_athlete_id);h.winner_next_match_id&&o(h.winner_next_match_id,d,h.match_id),h.loser_next_match_id&&u&&!s(u)&&o(h.loser_next_match_id,u,h.match_id)}let l=!0;for(;l;){l=!1;for(const h of Array.from(i.values())){if(h.format==="BEST_OF_THREE"||h.lifecycle!==M.PendingUpstream)continue;const d=Array.from(i.values()).filter(u=>u.winner_next_match_id===h.match_id||u.loser_next_match_id===h.match_id);if(!(d.length===0||!d.every(u=>u.is_bye&&u.lifecycle===M.ResultAccepted||!!Pt(u)))){if(h.red_athlete_id&&h.green_athlete_id){const u=a(h.match_id);u.lifecycle=M.Assigned,l=!0}else if(h.red_athlete_id||h.green_athlete_id){const u=h.red_athlete_id||h.green_athlete_id,m=s(u)?"":u,p=a(h.match_id);p.red_athlete_id=m,p.green_athlete_id="",p.is_bye=!0,p.lifecycle=M.ResultAccepted,p.winner_athlete_id=m,p.loser_athlete_id="",p.win_type="BYE",p.winner_next_match_id&&m&&o(p.winner_next_match_id,m,p.match_id),l=!0}}}}return n?Array.from(i.values()):e}publicView(){const e=this.compactReplica;if(this.projectedView?.envelope===this.envelope&&this.projectedView.replica===e&&(!e||e.tournamentId===this.pinnedTournamentId&&e.publisherHex===this.pinnedPublisherPubkeyHex))return this.projectedView.view;const t=new Map;if(!e||e.tournamentId!==this.pinnedTournamentId||e.publisherHex!==this.pinnedPublisherPubkeyHex||!e.receivedAtMs){this.compactStandingBaseline=void 0;const w=new Map(this.envelope.athletes.map(S=>[S.athlete_id,S])),b=Le.propagateCompletedBracketFeeders(this.envelope.bouts,w),A={...this.envelope,bouts:b,boutEventlogs:t,compactBrackets:[],hasCompactStandings:!1};return this.projectedView={envelope:this.envelope,replica:e,view:A},A}const i=(w,b)=>{if(b.length<=1)return;let A=this.decodedEventlogs.get(b);A||(A=rl(b),this.decodedEventlogs.set(b,A)),t.set(w,A)},s=this.envelope.signature_hex?Math.max(this.envelope.snapshot_epoch,this.envelope.control_sequence_head):0,n=e.summary,a=new Map(this.envelope.athletes.map(w=>[w.athlete_id,w])),o=new Map(this.envelope.bouts.map(w=>[w.match_id,w])),c=new Map(a),l=new Map(o);if(n&&n.revision>s){const w=new Set(n.brackets.map(b=>b.bracket_id));for(const[b,A]of l)A.bracket_id&&!w.has(A.bracket_id)&&l.delete(b)}const h=new Map,d=new Map(n?.teams.map(w=>[w.index,w])),u=["","DEC","MD","TF","FALL","DQ","INJURY_DEFAULT","FORFEIT","MEDICAL_FORFEIT"];for(const[w,b]of e.brackets){const A=n?.brackets.find(y=>y.bracket_id===w);if(!A&&n&&n.revision>s)continue;const S=A?.weight_class_id??(w.split("-").pop()||""),E=Vn(w,b.division).toLowerCase();if(b.revision>s){const y=new Set(b.bouts.map(I=>I.match_id));for(const[I,D]of l)D.bracket_id===w&&!y.has(I)&&l.delete(I)}const C=new Map(b.athletes.map(y=>[y.slot,y.athlete_id]));C.set(0,"");for(const y of b.athletes){if(b.revision<=s)break;const I=c.get(y.athlete_id),D=d.get(y.team_index);c.set(y.athlete_id,{opaque_pass_token:"",weigh_in_eligible:!1,medically_cleared:!1,matches_wrestled_today:0,prior_day_matches:0,last_bout_ended_ms:0,updated_at_ms:0,...I,athlete_id:y.athlete_id,public_display_name:y.display_name,team_id:D?.team_id??I?.team_id??"",team_name:D?.name??I?.team_name??"",division_id:I?.division_id||E,weight_class_id:S||I?.weight_class_id||"",seed_rank:y.seed_rank,check_in_stage:y.public_stage||y.state})}const $=new Map(b.bouts.map(y=>[y.local_number,y.match_id]));$.set(0,"");for(const y of b.bouts){const I=l.get(y.match_id),D=e.boutRevision(b,y.local_number);h.set(y.match_id,D);const x=e.eventlog(w,y.match_id);if(x&&(I||D>s)&&i(y.match_id,x.words),D<=s)continue;const v=I?.assigned_mat_id===y.mat_id&&I.assignment_revision===y.assignment_revision,R=y.match_id.includes("-BO3-")?"BEST_OF_THREE":b.format===5?"ROUND_ROBIN_POOL":b.format===6?"POOL_TO_BRACKET":b.format===7?"TEAM_DUAL":"DOUBLE_ELIM_CROSSOVER";l.set(y.match_id,{authority_epoch:0,delegated_android_device_id:"",...I,mat_queue_order:v?I.mat_queue_order:0,match_id:y.match_id,bracket_id:w,weight_class_id:S||I?.weight_class_id||"",division_id:I?.division_id||E,format:I?.format??R,bout_number:y.bout_number,round_index:y.round_index,round_label:I?.round_label??`Round ${y.round_index}`,is_consolation:!!(y.flags&1),is_placement_bout:!!(y.flags&2),is_true_second_challenge:!!(y.flags&4),is_bye:!!(y.flags&8),placement_rank:y.placement_rank,red_athlete_id:C.get(y.red_slot)??"",green_athlete_id:C.get(y.green_slot)??"",winner_athlete_id:C.get(y.winner_slot)??"",loser_athlete_id:C.get(y.loser_slot)??"",winner_next_match_id:$.get(y.winner_next)??"",loser_next_match_id:$.get(y.loser_next)??"",lifecycle:y.lifecycle+1,assigned_mat_id:y.mat_id,assignment_revision:y.assignment_revision,red_score:y.red_score,green_score:y.green_score,period_number:y.period,clock_remaining_ms:y.clock_remaining_ds*100,clock_running:v&&I.lifecycle===y.lifecycle+1&&I.period_number===y.period&&I.clock_running,win_type:y.flags&8?"BYE":u[y.win_type]??"",completed_at_ms:y.completed_offset_sec*1e3})}}for(const w of e.mats.values()){if(w.revision>s)for(const[C,$]of l){if($.assigned_mat_id!==w.mat_id||Ne($.lifecycle))continue;const y=w.bout_number>0&&$.bout_number===w.bout_number?1:w.on_deck>0&&$.bout_number===w.on_deck?2:w.in_the_hole>0&&$.bout_number===w.in_the_hole?3:$.mat_queue_order>=1&&$.mat_queue_order<=3?4:$.mat_queue_order;y!==$.mat_queue_order&&l.set(C,{...$,mat_queue_order:y})}const b=e.brackets.get(w.bracket_id),A=b?.bracket_index===w.bracket_index?b.bouts.find(C=>C.local_number===w.local_number&&C.bout_number===w.bout_number):void 0;if(b&&!A)continue;const S=A?l.get(A.match_id):[...l.values()].find(C=>C.bracket_id===w.bracket_id&&C.bout_number===w.bout_number);if(!S||S.assigned_mat_id!==w.mat_id||Ne(S.lifecycle))continue;const E=e.eventlog(w.bracket_id,S.match_id);w.revision>(E?.revision??0)&&w.eventlog_words.length>4&&i(S.match_id,kt(w.eventlog_words)),!(w.revision<=s||w.revision<(h.get(S.match_id)??0))&&l.set(S.match_id,{...S,red_score:w.red_score,green_score:w.green_score,period_number:w.period,clock_remaining_ms:w.clock_remaining_ds*100,clock_running:!!w.clock_running})}const m=Le.propagateCompletedBracketFeeders([...l.values()],c),p=!!(n?.teams.length&&n.revision>=s);let _=this.envelope.standings;const f=()=>{const w=Ni(a,this.envelope.bouts),b=Ni(c,m);for(const A of this.envelope.standings??[])b.set(A.team_id,Bd(A,w.get(A.team_id),b.get(A.team_id)));return b};if(n&&p){(this.compactStandingBaseline?.replica!==e||this.compactStandingBaseline.revision!==n.revision)&&(this.compactStandingBaseline={replica:e,revision:n.revision,bouts:new Map});const w=this.compactStandingBaseline.bouts,b=new Set;for(const I of l.values())if((h.get(I.match_id)??s)<=n.revision)w.set(I.match_id,I);else{const D=w.get(I.match_id)??(n.revision===s?o.get(I.match_id):void 0);D&&(w.set(I.match_id,D),b.add(I.bracket_id))}const A=[...l.values()].filter(I=>b.has(I.bracket_id)&&w.has(I.match_id)),S=A.map(I=>w.get(I.match_id)),E=I=>Ni(c,Le.propagateCompletedBracketFeeders(I,c)),C=E(S),$=E(A),y=f();_=ji(n.teams.map(I=>{const D=y.get(I.team_id)??Ya(I.team_id,I.name),x=I.half_points/2+($.get(I.team_id)?.total_points??0)-(C.get(I.team_id)?.total_points??0);return{...D,team_name:I.name,total_points:Math.max(0,x)}}))}else[...h.values()].some(w=>w>s)&&(_=ji(f().values()));const g={...this.envelope,tournament_id:e.tournamentId,mat_count:n&&n.revision>s?n.mat_count:this.envelope.mat_count,athletes:[...c.values()],bouts:m,standings:_,boutEventlogs:t,compactBrackets:n&&n.revision>=s?n.brackets:[],hasCompactStandings:p,published_at_ms:Math.max(this.envelope.published_at_ms,e.receivedAtMs),signature_hex:"",payload_sha256_hex:""};return this.projectedView={envelope:this.envelope,replica:e,view:g},g}p2pDelivery(){return{kind:"P2P",peerId:this.findUpstreamParentPeerId(),roomId:this.assignedSubtreeRoomId}}findUpstreamParentPeerId(){if(this.liveParent){if(this.assignedSubtreeParentId==="venue-super-seed"&&this.liveParent.members.has("official-venue"))return"official-venue";if(this.assignedSubtreeParentId&&this.liveParent.members.has(this.assignedSubtreeParentId)&&this.assignedSubtreeParentId!==this.overlayMesh.peerId)return this.assignedSubtreeParentId;for(const[e,t]of this.liveParent.members.entries())if(e!==this.overlayMesh.peerId&&(t.role==="primary"||t.role==="official"||e==="official-venue"))return e}}isP2pConnected(){const e=this.findUpstreamParentPeerId();if(!e||!this.liveParent)return!1;const t=this.liveParent.diagnostics();return t.brokerConnected||t.peers.some(i=>i.peerId===e&&i.transport==="WEBRTC")}async requestViaP2p(e,t=new Uint8Array){const i=this.findUpstreamParentPeerId();if(!this.liveParent||!i)throw new Error("No upstream P2P parent connected");return this.liveParent.request(e,t,i)}async refreshCompactBracket(){const e=this.syncGeneration;if(this.compactSyncGeneration===e||!this.selectedBracketId||!this.isP2pConnected())return!1;this.compactSyncGeneration=e;try{const t=Me(await this.requestViaP2p("bracket-sync",new TextEncoder().encode(this.selectedBracketId)),{maxBytes:4194304});if(e!==this.syncGeneration)return!1;if(!Array.isArray(t)||!t.length)throw new Error("Invalid compact catch-up response");(!this.compactReplica||this.compactReplica.tournamentId!==this.pinnedTournamentId||this.compactReplica.publisherHex!==this.pinnedPublisherPubkeyHex)&&(this.compactReplica=new Ri(this.pinnedTournamentId,this.pinnedPublisherPubkeyHex));for(const i of t){const s=i;this.compactReplica.apply(s.topic,s.bytes)&&(this.projectedView=void 0)}return this.lastVerifiedUpdateMs=Date.now(),this.connectionState="LIVE_OFFICIALS_STREAM",this.lastDelivery={...this.p2pDelivery(),receivedAtMs:Date.now()},this.etaEstimator.observeEnvelope(this.publicView(),this.lastVerifiedUpdateMs),this.onUpdateCallback?.(),!0}catch(t){return e===this.syncGeneration&&(this.p2pError=String(t)),!1}finally{this.compactSyncGeneration===e&&(this.compactSyncGeneration=void 0)}}canHostSpectatorSubtree(){if(typeof window>"u")return!0;if(typeof document<"u"&&document.visibilityState==="hidden")return!1;const e=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,t=typeof navigator<"u"&&/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent??"");if(e||t)return!1;const i=window.location?.hostname??"";return/^(127\.0\.0\.1|localhost|\[::1\])$/i.test(i)||/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(i)||i.endsWith(".local")||this.gameIceServers.length>0}shouldPreferCompactSse(){return this.compactSseAvailable&&typeof EventSource<"u"}isCompactSseOpen(){return this.compactSseModeActive&&this.eventSource?.readyState===1}decodeBase64Bytes(e){if(typeof atob=="function"){const t=atob(e),i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}return new Uint8Array(Buffer.from(e,"base64"))}fetchCompactBracketHttp(e=this.officialsOrigin,t=this.selectedBracketId){const i=this.pinnedTournamentId,s=this.pinnedPublisherPubkeyHex;if(!t||!s||!i)return Promise.resolve(!1);const n=JSON.stringify([e,i,s,t]),a=this.bracketHttpRequests.get(n);if(a)return a;const o=this.loadCompactBracketHttp(e,t,i,s).finally(()=>this.bracketHttpRequests.delete(n));return this.bracketHttpRequests.set(n,o),o}async loadCompactBracketHttp(e,t,i,s){try{const n=await fetch(`${e}/api/openmat-bracket-sync?bracket=${encodeURIComponent(t)}`,{signal:AbortSignal.timeout(5e3)});if(!n.ok)return!1;const a=Me(new Uint8Array(await n.arrayBuffer()),{maxBytes:4194304});if(!Array.isArray(a)||!a.length||i!==this.pinnedTournamentId||s!==this.pinnedPublisherPubkeyHex)return!1;(!this.compactReplica||this.compactReplica.tournamentId!==i||this.compactReplica.publisherHex!==s)&&(this.compactReplica=new Ri(i,s));let o=!1;for(const c of a){const l=c;wt.includes(l.topic)&&this.compactReplica.apply(l.topic,l.bytes)&&(o=!0)}return this.fetchedBracketEventlogIds.add(t),o&&(this.projectedView=void 0,this.lastVerifiedUpdateMs=Date.now(),this.etaEstimator.observeEnvelope(this.publicView(),this.lastVerifiedUpdateMs),this.onUpdateCallback?.()),!0}catch{return!1}}fetchWatchedCompactBrackets(e,t=this.watchedBracketIds,i=!1){for(const s of t)(i||!this.fetchedBracketEventlogIds.has(s))&&this.fetchCompactBracketHttp(e,s)}scheduleProjectionResync(e=this.officialsOrigin,t=this.liveSyncGeneration,i){if(this.resyncTimer||t!==this.liveSyncGeneration)return;const s=i??200+Math.floor(Math.random()*800);this.resyncTimer=setTimeout(()=>{this.resyncTimer=null,t===this.liveSyncGeneration&&this.fetchProjectionHttpBackup(e,t)},s)}ingestCompactSseEvent(e,t,i=this.officialsOrigin,s=this.liveSyncGeneration){if(!this.pinnedPublisherPubkeyHex||!this.pinnedTournamentId&&!t)return!1;try{const n=JSON.parse(t),a=typeof n.seq=="number"&&Number.isSafeInteger(n.seq)&&n.seq>0?n.seq:0,o=typeof n.tournamentId=="string"?n.tournamentId:"",c=typeof n.sha256=="string"?n.sha256:"";if(o&&this.pinnedTournamentId&&this.pinnedTournamentId!=="manual-pubkey"&&o!==this.pinnedTournamentId)return!1;if(a>this.lastCompactSseSeq&&(this.lastCompactSseSeq=a),e==="compact"){if(!Array.isArray(n.packets)||n.packets.length===0)return!1;const l=o||this.pinnedTournamentId;if(!l)return!1;(!this.compactReplica||this.compactReplica.tournamentId!==l||this.compactReplica.publisherHex!==this.pinnedPublisherPubkeyHex)&&(this.compactReplica=new Ri(l,this.pinnedPublisherPubkeyHex));let h=!1,d=!1;for(const m of n.packets){const p=m?.topic;if(!(!wt.includes(p)||typeof m?.b64!="string"||!m.b64))try{this.compactReplica.apply(p,this.decodeBase64Bytes(m.b64))&&(h=!0)}catch{d=!0}}if(d&&(this.scheduleProjectionResync(i,s,100),this.fetchWatchedCompactBrackets(i,this.watchedBracketIds,!0),!h))return!1;if(!this.pinnedTournamentId||this.pinnedTournamentId==="manual-pubkey"){if(!h)return!1;this.setTournamentIdentity(l,this.pinnedPublisherPubkeyHex)}h&&(this.projectedView=void 0);const u=Date.now();return this.lastVerifiedUpdateMs=u,this.apiLastSuccessAtMs=u,this.apiError="",this.connectionState="LIVE_OFFICIALS_STREAM",this.lastDelivery={kind:"COMPACT_SSE",endpoint:i,receivedAtMs:u},this.etaEstimator.observeEnvelope(this.publicView(),u),this.evaluateWatchedNotifications(u,"LIVE_OFFICIALS_STREAM"),this.onUpdateCallback?.(),!0}if(e==="sync"){const l=!!(this.compactReplica?.tournamentId===this.pinnedTournamentId&&this.compactReplica?.receivedAtMs);if(c&&c===this.envelope.payload_sha256_hex&&this.envelope.signature_hex||l){const h=Date.now();return this.lastVerifiedUpdateMs=h,this.apiLastSuccessAtMs=h,this.apiError="",this.connectionState="LIVE_OFFICIALS_STREAM",this.lastDelivery={kind:"COMPACT_SSE",endpoint:i,receivedAtMs:h},this.onUpdateCallback?.(),!0}return this.scheduleProjectionResync(i,s,50),!1}if(e==="resync"){if(!c||c!==this.envelope.payload_sha256_hex||!this.envelope.signature_hex)this.scheduleProjectionResync(i,s);else{const l=Date.now();this.lastVerifiedUpdateMs=l,this.lastDelivery={kind:"COMPACT_SSE",endpoint:i,receivedAtMs:l},this.connectionState="LIVE_OFFICIALS_STREAM",this.onUpdateCallback?.()}return!0}return!1}catch{return!1}}openLiveEventStream(e=this.officialsOrigin,t=this.liveSyncGeneration){if(typeof EventSource>"u"||t!==this.liveSyncGeneration)return;const i=this.compactSseAvailable;if(this.eventSource&&this.eventSource.readyState!==2&&this.compactSseModeActive===i)return;this.eventSource?.close(),this.compactSseModeActive=i;const s=i?`${e}/api/openmat-live-events?mode=compact${this.lastCompactSseSeq>0?`&since=${this.lastCompactSseSeq}`:""}`:`${e}/api/openmat-live-events`,n=new EventSource(s);this.eventSource=n,i&&(this.fetchWatchedCompactBrackets(e),n.addEventListener("compact",a=>{t!==this.liveSyncGeneration||this.eventSource!==n||this.ingestCompactSseEvent("compact",a.data,e,t)}),n.addEventListener("sync",a=>{t!==this.liveSyncGeneration||this.eventSource!==n||this.ingestCompactSseEvent("sync",a.data,e,t)}),n.addEventListener("resync",a=>{t!==this.liveSyncGeneration||this.eventSource!==n||this.ingestCompactSseEvent("resync",a.data,e,t)})),n.onmessage=a=>{if(!(t!==this.liveSyncGeneration||this.eventSource!==n))try{this.ingestSignedEnvelope(JSON.parse(a.data),"LIVE_OFFICIALS_STREAM",{kind:i?"COMPACT_SSE":"HTTP_SSE",endpoint:e})}catch{}},n.onopen=()=>{t===this.liveSyncGeneration&&this.eventSource===n&&(this.closePublicNostrRelaySockets(),this.onUpdateCallback?.())},n.onerror=()=>{t===this.liveSyncGeneration&&this.eventSource===n&&this.onUpdateCallback?.()}}setOfficialsOrigin(e){this.officialsOrigin!==e&&(this.officialsOrigin=e,this.joinBootstrapRequest=void 0,this.webPushAvailable=void 0,this.vapidPublicKeyBase64Url="",this.activePushSubscription=null)}async resolveStaticHostVenueOrigin(){if(typeof window>"u"||!window.location?.href||!/(^|\.)github\.io\.?$/i.test(window.location.hostname))return null;try{const e=window.location.href.endsWith("/")||/\.html$/i.test(window.location.pathname??"")?window.location.href:`${window.location.href}/`,t=new URL("game/game-config.json",e);t.searchParams.set("refresh",String(Date.now()));const i=await fetch(t.href,{cache:"no-store",signal:AbortSignal.timeout(5e3)});if(!i.ok)return null;const s=await i.json();if(typeof s?.origin!="string"||!s.origin.trim())return null;const n=new URL(s.origin.trim());return n.protocol!=="https:"?null:n.origin}catch{return null}}fetchJoinBootstrap(){if(this.joinBootstrapRequest)return this.joinBootstrapRequest;const e=fetch(`${this.officialsOrigin}/api/openmat-join-bootstrap`,{signal:AbortSignal.timeout(5e3)}).then(async t=>{if(!t.ok||!t.headers.get("content-type")?.includes("application/json"))return null;const i=await t.json();return!i||this.joinBootstrapRequest!==e?null:(this.webPushAvailable=i.capabilities?.webPush!==!1,i)}).catch(()=>null).finally(()=>{this.joinBootstrapRequest===e&&(this.joinBootstrapRequest=void 0)});return this.joinBootstrapRequest=e,e}async refreshNow(){if(this.refreshPromise)return this.refreshPromise;const e=async()=>{this.isRefreshing=!0,this.resyncTimer&&(clearTimeout(this.resyncTimer),this.resyncTimer=null),this.onUpdateCallback?.();try{if(!this.pinnedPublisherPubkeyHex&&(!this.pinnedTournamentId||this.pinnedTournamentId===Pi))try{if(typeof window<"u"&&/(^|\.)github\.io\.?$/i.test(window.location.hostname)&&this.officialsOrigin===window.location.origin){const s=await this.resolveStaticHostVenueOrigin();s&&this.setOfficialsOrigin(s)}const i=await this.fetchJoinBootstrap();if(i?.joinQrUri){const s=Ye(i.joinQrUri);if(s.valid&&s.payload&&s.payload.relay_origin===this.officialsOrigin){this.bootstrapping=!0;try{this.applyScannedTournamentJoinQr(i.joinQrUri)}finally{this.bootstrapping=!1}Array.isArray(i.iceServers)&&i.iceServers.length>0&&this.gameIceServers.length===0&&(this.gameIceServers=i.iceServers),this.p2pAvailable=i.capabilities?.p2p!==!1,i.capabilities?.compactSse===!0&&(this.compactSseAvailable=!0)}}}catch{}if(!this.pinnedPublisherPubkeyHex)return!1;if(this.isP2pConnected()&&!this.shouldPreferCompactSse()){const[i]=await Promise.all([this.refreshViaP2p(!0),this.selectedBracketId?this.refreshCompactBracket():Promise.resolve(!1)]);return i}const t=await this.fetchProjectionHttpBackup(this.officialsOrigin,this.liveSyncGeneration);return this.compactSseAvailable&&this.fetchWatchedCompactBrackets(this.officialsOrigin),this.pollTimer!==null&&(!this.eventSource||this.eventSource.readyState===2||this.compactSseAvailable&&!this.compactSseModeActive)&&this.openLiveEventStream(this.officialsOrigin,this.liveSyncGeneration),t}finally{this.isRefreshing=!1,this.onUpdateCallback?.()}};return this.refreshPromise=e().finally(()=>{this.refreshPromise=null}),this.refreshPromise}async watchBracket(e,t=[]){const i=[...new Set([e,...t].filter(Boolean))].slice(0,Pd);if(i.some(n=>!/^[A-Za-z0-9_-]{1,100}$/.test(n)))throw new Error("Invalid bracket id");if(i.length===this.watchedBracketIds.length&&i.every((n,a)=>n===this.watchedBracketIds[a]))return;const s=this.selectedBracketId!==(i[0]??"");if(this.watchedBracketIds=i,this.shouldPreferCompactSse()||!this.p2pAvailable){this.fetchWatchedCompactBrackets(this.officialsOrigin);return}if(this.fetchWatchedCompactBrackets(this.officialsOrigin,i.slice(1)),s&&this.pinnedTournamentId&&this.p2pAvailable)try{await this.startP2p()}catch(n){this.p2pError=String(n)}}async startP2p(e=this.officialsOrigin,t){if(t===this.overlayMesh.peerId)throw new Error("Cannot use own subtree as parent");const i=++this.syncGeneration;if(!this.pinnedPublisherPubkeyHex)return;if(this.overlayMesh.stopLiveRooms(),this.liveParent=null,this.liveChildren=null,!t){try{const a=await fetch(`${e}/api/openmat-subtree?tournament=${encodeURIComponent(this.pinnedTournamentId)}&peer=${encodeURIComponent(this.overlayMesh.peerId)}&children=${this.gameRelayChildren}${this.selectedBracketId?`&bracket=${encodeURIComponent(this.selectedBracketId)}`:""}`,{signal:AbortSignal.timeout(3500)});if(a.ok){const o=String((await a.json()).roomId??"");o.startsWith("subtree:")&&o.length>8&&o!==`subtree:${this.overlayMesh.peerId}`&&(t=o.slice(8))}}catch{}t||(t=this.selectedBracketId?`b:${this.selectedBracketId}`:"venue-super-seed")}if(i!==this.syncGeneration)return;this.assignedSubtreeParentId=t,this.assignedSubtreeRoomId=Ke.subtreeRoomId(t);const s=async a=>this.overlayMesh.joinLiveRoom({origin:e,rootPublicKeyHex:this.pinnedPublisherPubkeyHex,tournamentId:this.pinnedTournamentId,roomId:a,peerId:this.overlayMesh.peerId,publicKey:this.peerKey.publicKey,role:"spectator",iceServers:this.gameIceServers,sign:o=>Ve(ke,o,this.peerKey.privateKey),onMembership:()=>{i===this.syncGeneration&&(a===this.assignedSubtreeRoomId&&this.isP2pConnected()&&!this.shouldPreferCompactSse()&&(this.eventSource&&(this.eventSource.close(),this.eventSource=null),this.selectedBracketId&&this.refreshCompactBracket(),this.envelope.signature_hex||this.refreshViaP2p(!1)),this.onUpdateCallback?.())},onError:o=>{this.p2pError=o.message},onMessage:(o,c,l)=>{if(i===this.syncGeneration){if(wt.includes(o))try{(!this.compactReplica||this.compactReplica.tournamentId!==this.pinnedTournamentId||this.compactReplica.publisherHex!==this.pinnedPublisherPubkeyHex)&&(this.compactReplica=new Ri(this.pinnedTournamentId,this.pinnedPublisherPubkeyHex)),this.compactReplica.apply(o,c)&&(this.projectedView=void 0,this.lastVerifiedUpdateMs=Date.now(),this.connectionState="LIVE_OFFICIALS_STREAM",this.lastDelivery={kind:"P2P",peerId:l,roomId:a,receivedAtMs:Date.now()},this.etaEstimator.observeEnvelope(this.publicView(),this.lastVerifiedUpdateMs),this.liveChildren?.send(o,c,o.includes("eventlog")||o==="bracket-full"?Te.BulkChunksBackground:Te.CurrentStateUnorderedNewest),this.onUpdateCallback?.())}catch(h){this.p2pError=String(h),this.refreshCompactBracket()}if(o==="public-projection")try{this.ingestSignedEnvelope(JSON.parse(new TextDecoder().decode(c)),"LIVE_OFFICIALS_STREAM",{kind:"P2P",peerId:l,roomId:a})}catch(h){this.p2pError=String(h)}if((o==="game-state"||o==="game-snapshot")&&this.ingestGameMessage(o,c),o==="game-tap")try{if(a===this.assignedSubtreeRoomId&&l===this.findUpstreamParentPeerId())this.acceptBackupGameMessage(o,c);else if(a===Ke.subtreeRoomId(this.overlayMesh.peerId)&&c.length<=1024){this.retryGameTaps();const h=gl(c),d=this.gameRoutes.get(h),u=this.gameReceipts.get(h);if(u){this.liveChildren?.send(o,u.bytes,Te.OfficialEventsOrderedReliable,l);return}if(d){d.peers.add(l);return}if(this.gameRoutes.size>=5e3)return;this.gameRoutes.set(h,{peers:new Set([l]),at:Date.now(),lastSent:Date.now(),bytes:c}),this.sendGameTap(c)}}catch(h){this.p2pError=String(h)}}},onRpc:async(o,c)=>{if(o==="bracket-sync")return this.requestViaP2p(o,c);if(o==="game-sync")return this.cachedGameState&&performance.now()-this.cachedGameStateAt<1500?this.cachedGameState:this.getTapGameState();if(o==="game-tap"){if(c.length>1024)throw new Error("Game tap too large");return this.requestViaP2p(o,c)}if(o==="projection"){if(this.envelope.signature_hex)return new TextEncoder().encode(JSON.stringify(this.envelope));if(this.isP2pConnected())return this.requestViaP2p("projection",c);throw new Error("No verified projection available")}if(o==="ow-vote"||o==="scorekeeper-event"){const l=await this.requestViaP2p(o,c);try{const h=JSON.parse(new TextDecoder().decode(l));h?.ok&&h.envelope&&this.ingestSignedEnvelope(h.envelope,"LIVE_OFFICIALS_STREAM",this.p2pDelivery())}catch{}return l}throw new Error("Unsupported room RPC")}}),n=await s(this.assignedSubtreeRoomId);if(i!==this.syncGeneration){n.stop();return}if(this.liveParent=n,this.canHostSpectatorSubtree()){const a=await s(Ke.subtreeRoomId(this.overlayMesh.peerId));if(i!==this.syncGeneration){a.stop();return}this.liveChildren=a}this.isP2pConnected()&&!this.shouldPreferCompactSse()&&(this.eventSource?.close(),this.eventSource=null,this.compactSseModeActive=!1,await Promise.all([this.refreshViaP2p(!1),this.refreshCompactBracket()]))}async refreshViaP2p(e=!0){const t=this.syncGeneration,i=this.liveParent,s=this.findUpstreamParentPeerId();if(i&&s&&this.isP2pConnected()){try{const n=await i.request("projection",new Uint8Array,s);if(t!==this.syncGeneration)return!1;const a=JSON.parse(new TextDecoder().decode(n));if(this.ingestSignedEnvelope(a,"LIVE_OFFICIALS_STREAM",this.p2pDelivery()))return i.ping(s).then(c=>{t===this.syncGeneration&&c!==null&&(this.lastSubtreePingRttMs=c)}).catch(()=>{}),!0}catch(n){if(t!==this.syncGeneration)return!1;this.p2pError=String(n)}if(!e)return!1}return e?this.fetchProjectionHttpBackup(this.officialsOrigin):!1}async fetchProjectionHttpBackup(e=this.officialsOrigin,t=this.liveSyncGeneration){if(!this.pinnedPublisherPubkeyHex||t!==this.liveSyncGeneration)return!1;this.apiLastAttemptAtMs=Date.now();try{const i={};this.envelope.payload_sha256_hex&&(i["If-None-Match"]=`"${this.envelope.payload_sha256_hex}"`);const s=await fetch(`${e}/api/openmat-live-projection`,{headers:i,signal:AbortSignal.timeout(5e3)});if(t!==this.liveSyncGeneration)return!1;(s.headers?.get?.("x-openmat-capabilities")??"").includes("compact-sse")&&(this.compactSseAvailable=!0);const a=this.isCompactSseOpen()?"COMPACT_SSE":"HTTP_POLL";if(s.status===304&&this.envelope.signature_hex)return this.lastVerifiedUpdateMs=Date.now(),this.lastDelivery={kind:a,endpoint:e,receivedAtMs:this.lastVerifiedUpdateMs},this.apiLastSuccessAtMs=this.lastVerifiedUpdateMs,this.apiError="",this.connectionState="LIVE_OFFICIALS_STREAM",this.onUpdateCallback?.(),!0;if(!s.ok)return this.apiError=`HTTP ${s.status}`,!1;const o=await s.json();if(t!==this.liveSyncGeneration)return!1;const c=this.ingestSignedEnvelope(o,"LIVE_OFFICIALS_STREAM",{kind:a,endpoint:e});return c&&(this.apiLastSuccessAtMs=Date.now()),this.apiError=c?"":"Projection verification rejected",c}catch(i){return t===this.liveSyncGeneration&&(this.apiError=i instanceof Error?i.message:String(i)),!1}}broadcastChannel=typeof window<"u"&&typeof BroadcastChannel<"u"?new BroadcastChannel("openmat-live-sync"):null;eventSource=null;pollTimer=null;resumeLiveSync;previousUrgencyByAthlete=new Map;onUpdateCallback;publicNostrRelays=[...$n];nostrRelaySockets=new Map;nostrSocketFilterKeys=new Map;getGamePeerRooms(){return{parent:this.liveParent,children:this.liveChildren}}acceptBackupGameMessage(e,t){if(e==="game-state"||e==="game-snapshot"){this.ingestGameMessage(e,t);return}if(e!=="game-tap")return;const i=gn(t,`game:${this.pinnedTournamentId}`,this.pinnedPublisherPubkeyHex);if(i.kind!=="receipt"||typeof i.id!="string")return;const s=this.gameRoutes.get(i.id);if(s){this.gameRoutes.delete(i.id),this.gameReceipts.size>=5e3&&this.gameReceipts.delete(this.gameReceipts.keys().next().value),this.gameReceipts.set(i.id,{bytes:t,at:Date.now()});for(const n of s.peers)try{this.liveChildren?.send(e,t,Te.OfficialEventsOrderedReliable,n)}catch(a){this.p2pError=String(a)}}this.gameMessageListener?.(e,t)}retryGameTaps(){for(const[e,t]of this.gameRoutes){if(Date.now()-t.at>15e3){this.gameRoutes.delete(e);continue}if(Date.now()-t.lastSent>1e3){t.lastSent=Date.now();try{this.sendGameTap(t.bytes,!0)}catch(i){this.p2pError=String(i)}}}for(const[e,t]of this.gameReceipts)Date.now()-t.at>15e3&&this.gameReceipts.delete(e)}ingestGameMessage(e,t){try{const i=gn(t,`game:${this.pinnedTournamentId}`,this.pinnedPublisherPubkeyHex);if(i.kind!=="state"&&i.kind!=="snapshot"||!Number.isSafeInteger(i.revision)||!Number.isSafeInteger(i.at_ms)||Number(i.at_ms)<0||Number(i.revision)<this.gameRevision||i.revision===this.gameRevision&&Number(i.at_ms)<=(i.kind==="snapshot"?this.gameSnapshotTimestamp:this.gameTimestamp))return!1;this.gameRevision=Number(i.revision),this.gameTimestamp=Math.max(this.gameTimestamp,Number(i.at_ms)),i.kind==="snapshot"&&(this.gameSnapshotTimestamp=Number(i.at_ms)),i.kind==="state"&&(this.cachedGameState=t,this.cachedGameStateAt=performance.now()),this.gameMessageListener?.(i.kind==="snapshot"?"game-snapshot":"game-state",t);try{this.liveChildren?.send(i.kind==="snapshot"?"game-snapshot":"game-state",t,i.kind==="snapshot"?Te.BulkChunksBackground:Te.CurrentStateUnorderedNewest)}catch(s){this.p2pError=String(s)}return!0}catch(i){return this.p2pError=String(i),!1}}getTapGameState(){if(this.gameStatePending)return this.gameStatePending;const e=this.readTapGameState().finally(()=>{this.gameStatePending===e&&(this.gameStatePending=null)});return this.gameStatePending=e,e}async readTapGameState(){const e=this.liveSyncGeneration,t=this.findUpstreamParentPeerId(),i=[...this.isP2pConnected()&&this.liveParent&&t?[{room:this.liveParent,target:t}]:[],...this.gameBackupParents.flatMap(o=>{const c=o.hostPeerId();return c?[{room:o,target:c}]:[]})];if(i.length)try{return await Promise.any(i.map(async({room:o,target:c})=>{const l=await o.request("game-sync",new Uint8Array,c);if(e!==this.liveSyncGeneration)throw new Error("Game sync generation changed");if(!this.ingestGameMessage("game-state",l))throw new Error("Peer returned stale or invalid game state");return l}))}catch(o){e===this.liveSyncGeneration&&(this.p2pError=String(o))}if(e!==this.liveSyncGeneration)throw new Error("Game sync generation changed");const s=await fetch(`${this.officialsOrigin}/api/game/state`,{cache:"no-store",signal:AbortSignal.timeout(5e3)});if(!s.ok)throw new Error("Game scorekeeper is offline");const n=new Uint8Array(await s.arrayBuffer());if(e!==this.liveSyncGeneration)throw new Error("Game sync generation changed");const a=gn(n,`game:${this.pinnedTournamentId}`,this.pinnedPublisherPubkeyHex);if(a.kind!=="state"&&a.kind!=="snapshot"||!Number.isSafeInteger(a.revision)||Number(a.revision)<0||!Number.isSafeInteger(a.at_ms)||Number(a.at_ms)<0)throw new Error("Invalid signed game state");return this.ingestGameMessage("game-state",n),n}async submitGameTap(e){if(e.length>1024)throw new Error("Game tap too large");const t=await fetch(`${this.officialsOrigin}/api/game/tap`,{method:"POST",headers:{"Content-Type":"application/cbor"},body:new Uint8Array(e),signal:AbortSignal.timeout(8e3)});if(!t.ok)throw new Error("Game scorekeeper is offline");return new Uint8Array(await t.arrayBuffer())}sendGameTap(e,t=!1){const i=this.findUpstreamParentPeerId();if(e.length>1024)throw new Error("Game tap too large");const s=this.gameBackupParents.filter(d=>d.diagnostics().peers.some(u=>u.peerId===d.hostPeerId()&&u.transport!=="DISCONNECTED")),n=this.isP2pConnected()&&this.liveParent&&i,a=n?this.liveParent.diagnostics().peers.some(d=>d.peerId===i&&d.transport==="WEBRTC"):!1,o=s.filter(d=>d.diagnostics().peers.some(u=>u.peerId===d.hostPeerId()&&u.transport==="WEBRTC")),c=t?s.length?!a&&o.length&&n?[this.liveParent,...s]:s:n?[this.liveParent]:[]:n?!a&&o.length?[o[0]]:[this.liveParent]:s;if(!c.length)throw new Error("No game parent connected");let l=!1,h;for(const d of c)try{d.send("game-tap",e,Te.OfficialEventsOrderedReliable,d===this.liveParent?i:d.hostPeerId()),l=!0}catch(u){h=u}if(!l&&h)throw h}getPublicPlayerWebUrl(e=Nt){if(!this.defaultJoinQrUri)return"";const t=Ye(this.defaultJoinQrUri);if(!t.valid||!t.payload)return"";if(!t.payload.signature_hex&&t.payload.tournament_id){const i=new URL(`${e.trim().replace(/\/+$/,"")}/`);return t.payload.publisher_pubkey_hex?i.hash=new URLSearchParams({session:`game:${t.payload.tournament_id}`,root:t.payload.publisher_pubkey_hex}).toString():i.search=t.payload.tournament_id,i.href}return wl(t.payload,e,this.publicNostrRelays)}getDirectJoinKeyUrl(e=vr()){const t=e.trim().replace(/\/+$/,""),i=this.pinnedPublisherPubkeyHex||this.envelope.publisher_pubkey_hex||this.pinnedTournamentId||this.envelope.tournament_id;return i?`${t}/?${i}`:`${t}/`}getDirectOfficialsUrl(e){const t=typeof window<"u"&&window.location?.origin&&!window.location.origin.includes("github.io")&&window.location.origin!=="null"?`${window.location.origin}/officials`:`${Nt.replace(/\/+$/,"")}/officials`,i=(e??t).trim().replace(/\/+$/,""),s=this.pinnedPublisherPubkeyHex||this.envelope.publisher_pubkey_hex||this.pinnedTournamentId||this.envelope.tournament_id;return s?`${i}/?${s}`:`${i}/`}getPublicFallbackOfficialsUrl(e=`${Nt.replace(/\/+$/,"")}/officials`){const t=e.trim().replace(/\/+$/,""),i=this.pinnedPublisherPubkeyHex||this.envelope.publisher_pubkey_hex||this.pinnedTournamentId||this.envelope.tournament_id;return i?`${t}/?${i}`:`${t}/`}ingestNostrRelayEvent(e,t){try{const i=JSON.parse(e);if(!Array.isArray(i)||i[0]!=="EVENT"||!i[2]||typeof i[2]!="object")return!1;const s=i[2];if(typeof s.content!="string"||!s.content)return!1;const n=JSON.parse(s.content);return this.ingestSignedEnvelope(n,"LIVE_OFFICIALS_STREAM",{kind:"NOSTR",endpoint:t})}catch{return!1}}buildNostrSubscriptionFilters(){const e=[];return this.pinnedTournamentId&&this.pinnedTournamentId!=="manual-pubkey"&&e.push(`openmat-proj:${this.pinnedTournamentId}`),this.pinnedPublisherPubkeyHex&&e.push(`openmat-pub:${this.pinnedPublisherPubkeyHex.toLowerCase()}`),e.length===0&&e.push("openmat:v1"),[{kinds:[24880,30078],"#x":e}]}closePublicNostrRelaySockets(){for(const e of this.nostrRelaySockets.values())try{e.close()}catch{}this.nostrRelaySockets.clear(),this.nostrSocketFilterKeys.clear()}startPublicNostrRelaySync(e=this.liveSyncGeneration){if(typeof WebSocket>"u"||!this.pinnedPublisherPubkeyHex&&!this.pinnedTournamentId)return;if(this.isCompactSseOpen()||this.isP2pConnected()||this.eventSource?.readyState===1){this.closePublicNostrRelaySockets();return}const i=`om-proj-${(this.pinnedTournamentId||this.pinnedPublisherPubkeyHex||"live").slice(0,24)}`,s=this.buildNostrSubscriptionFilters(),n=JSON.stringify(s);for(const a of this.publicNostrRelays){if(typeof window<"u"&&window.location?.protocol==="https:"&&!a.startsWith("wss:"))continue;const o=this.nostrRelaySockets.get(a);if(o){if(o.readyState===WebSocket.OPEN&&this.nostrSocketFilterKeys.get(a)!==n)try{o.send(JSON.stringify(["REQ",i,...s])),this.nostrSocketFilterKeys.set(a,n)}catch{}continue}try{const c=new WebSocket(a);this.nostrRelaySockets.set(a,c),c.onopen=()=>{if(e!==this.liveSyncGeneration||this.nostrRelaySockets.get(a)!==c){c.close();return}try{const l=this.buildNostrSubscriptionFilters(),h=JSON.stringify(l);c.send(JSON.stringify(["REQ",i,...l])),this.nostrSocketFilterKeys.set(a,h)}catch{}},c.onmessage=l=>{e===this.liveSyncGeneration&&typeof l.data=="string"&&this.ingestNostrRelayEvent(l.data,a)},c.onclose=()=>{this.nostrRelaySockets.get(a)===c&&(this.nostrRelaySockets.delete(a),this.nostrSocketFilterKeys.delete(a))},c.onerror=()=>{try{c.close()}catch{}}}catch{}}}applyScannedTournamentJoinQr(e){const t=Ye(e);if(!t.valid||!t.payload)return{valid:!1,reason:t.reason};const i=t.payload.publisher_pubkey_hex,s=t.payload.tournament_id==="manual-pubkey",n=s?i===this.pinnedPublisherPubkeyHex?this.pinnedTournamentId:"":t.payload.tournament_id,a=!this.bootstrapping&&(this.eventSource!==null||this.pollTimer!==null||t.payload.issued_at_ms>0&&t.payload.issued_at_ms>this.pinnedIssuedAtMs),o=this.pinnedPublisherPubkeyHex!==i||this.pinnedTournamentId!==n||a;this.setTournamentIdentity(n,i),this.publisherOnlyJoin=!!(i&&s),this.pinnedIssuedAtMs=t.payload.issued_at_ms||0;const c=typeof window<"u"&&window.location?.protocol==="https:"&&t.payload.relay_origin.startsWith("http://")&&!t.payload.relay_origin.startsWith("http://127.0.0.1")&&!t.payload.relay_origin.startsWith("http://localhost"),l=!t.payload.signature_hex&&t.payload.relay_origin==="http://127.0.0.1:5174"&&typeof window<"u"&&window.location?.protocol==="https:";!c&&!l&&this.setOfficialsOrigin(t.payload.relay_origin),this.p2pAvailable=!0,this.p2pError="",this.lastRelayedProjection="",this.publicNostrRelays=[...t.payload.nostr_relays?.length?t.payload.nostr_relays:$n];const h=s?i:t.payload.signature_hex&&!c?ps(t.payload):i&&n?`${Nt}/#${new URLSearchParams({session:`game:${n}`,root:i})}`:i||n||e.trim();this.defaultJoinQrUri=h;try{this.defaultJoinQrSvg=Mt(this.getPublicPlayerWebUrl(vr()))}catch{this.defaultJoinQrSvg=""}if(o){this.compactReplica=void 0,this.watchedBracketIds=[],this.lastCompactSseSeq=0,this.fetchedBracketEventlogIds.clear(),this.gameRevision=-1,this.gameTimestamp=-1,this.gameSnapshotTimestamp=-1,this.cachedGameState=null,this.gameRoutes.clear(),this.gameReceipts.clear();const u=n===Pi&&(!t.payload.tournament_name||t.payload.tournament_name===n)?Ka:t.payload.tournament_name||"Live Tournament";this.envelope={...this.envelope,tournament_id:n,tournament_name:u,snapshot_epoch:0,control_sequence_head:0,published_at_ms:0,publisher_pubkey_hex:i,signature_hex:"",payload_sha256_hex:"",athletes:[],bouts:[],mats:[],standings:[],bracket_frozen_by_class:{},ow_vote_tallies:{}},this.owVoteTallies.clear(),this.previousUrgencyByAthlete.clear(),this.lastVerifiedUpdateMs=0,this.lastDelivery=null,this.apiLastAttemptAtMs=0,this.apiLastSuccessAtMs=0,this.apiError="",this.connectionState="AWAITING_TOURNAMENT_JOIN"}!this.bootstrapping&&(this.eventSource||this.pollTimer)&&(this.stopLiveSync(),this.startLiveSync(this.officialsOrigin));const d=this.defaultJoinQrSvg;return this.onUpdateCallback?.(),{valid:!0,reason:t.reason,pubkeyHex:this.pinnedPublisherPubkeyHex,qrSvg:d}}onServiceWorkerMessage=e=>{e.data?.type==="OPENMAT_SW_VERSION"&&typeof e.data.version=="string"&&(this.serviceWorkerVersion=e.data.version,this.onUpdateCallback?.())};onVisibilityChange=()=>{document.visibilityState==="visible"&&this.onNetworkOnline()};onNetworkOnline=()=>{this.onUpdateCallback?.(),this.resumeLiveSync?.()};startLiveSync(e=this.officialsOrigin){this.stopLiveSync();const t=this.liveSyncGeneration;if(this.setOfficialsOrigin(e),this.broadcastChannel&&(this.broadcastChannel.onmessage=({data:l})=>{l&&typeof l=="object"&&"signature_hex"in l&&this.ingestSignedEnvelope(l,"LIVE_OFFICIALS_STREAM",{kind:"BROADCAST"})}),typeof window>"u")return;"serviceWorker"in navigator&&(navigator.serviceWorker.addEventListener("message",this.onServiceWorkerMessage),navigator.serviceWorker.ready.then(l=>l.active?.postMessage({type:"OPENMAT_GET_SW_VERSION"})).catch(()=>{})),this.restoreExistingWebPushSubscription();let i=!1,s=!1,n=!!(this.pinnedPublisherPubkeyHex||this.pinnedTournamentId),a=!1,o=!1;const c=async(l=!1)=>{if(t===this.liveSyncGeneration){if(i){s||=l;return}i=!0;try{if(!n&&!this.pinnedPublisherPubkeyHex&&!this.pinnedTournamentId||a&&!this.pinnedPublisherPubkeyHex){try{if(!a&&typeof window<"u"&&/(^|\.)github\.io\.?$/i.test(window.location.hostname)&&e===window.location.origin){const u=await this.resolveStaticHostVenueOrigin();if(t!==this.liveSyncGeneration)return;u&&(e=u,a=!0,this.setOfficialsOrigin(u))}const d=await this.fetchJoinBootstrap();if(t!==this.liveSyncGeneration)return;if(d?.joinQrUri){const u=Ye(d.joinQrUri);if(u.valid&&u.payload?.relay_origin===e&&(!this.pinnedPublisherPubkeyHex||u.payload.publisher_pubkey_hex===this.pinnedPublisherPubkeyHex)){this.bootstrapping=!0;try{this.applyScannedTournamentJoinQr(d.joinQrUri)}finally{this.bootstrapping=!1}Array.isArray(d.iceServers)&&d.iceServers.length>0&&this.gameIceServers.length===0&&(this.gameIceServers=d.iceServers),this.p2pAvailable=d.capabilities?.p2p!==!1,d.capabilities?.compactSse===!0&&(this.compactSseAvailable=!0),n=!0,o=!0}}}catch{}if(!n&&!this.pinnedPublisherPubkeyHex&&!this.pinnedTournamentId&&typeof window<"u"&&!/^(127\.0\.0\.1|localhost)$/i.test(window.location.hostname)){this.bootstrapping=!0;try{this.applyScannedTournamentJoinQr(Pi)}finally{this.bootstrapping=!1}n=!0,this.onUpdateCallback?.()}}if(t!==this.liveSyncGeneration||!this.pinnedPublisherPubkeyHex&&!this.pinnedTournamentId||(this.startPublicNostrRelaySync(t),!this.pinnedPublisherPubkeyHex))return;const h=this.officialsOrigin;if(typeof window<"u"&&window.location?.protocol==="https:"&&h.startsWith("http://")&&!h.startsWith("http://127.0.0.1")&&!h.startsWith("http://localhost")||!o&&!this.compactSseAvailable&&typeof EventSource<"u"&&typeof window<"u"&&!/^(127\.0\.0\.1|localhost|\[::1\])$/i.test(window.location.hostname)&&(o=!0,await this.fetchProjectionHttpBackup(h,t),t!==this.liveSyncGeneration))return;if(this.shouldPreferCompactSse()){if(!this.maintainGameAdmission&&(this.liveParent||this.liveChildren)&&(this.syncGeneration++,this.overlayMesh.stopLiveRooms(),this.liveParent=null,this.liveChildren=null),(l||!this.envelope.signature_hex)&&(await this.fetchProjectionHttpBackup(h,t),t!==this.liveSyncGeneration))return;if(!this.eventSource||this.eventSource.readyState===2||!this.compactSseModeActive?this.openLiveEventStream(h,t):!this.isCompactSseOpen()&&Date.now()-this.lastVerifiedUpdateMs>=1e4&&await this.fetchProjectionHttpBackup(h,t),t===this.liveSyncGeneration&&this.maintainGameAdmission&&this.p2pAvailable&&!this.liveParent)try{await this.startP2p(h)}catch(d){this.p2pError=String(d)}return}if(this.p2pAvailable&&!this.isP2pConnected())try{await this.startP2p(h)}catch(d){this.p2pError=String(d)}if(t!==this.liveSyncGeneration)return;if(this.isP2pConnected()){this.eventSource&&(this.eventSource.close(),this.eventSource=null,this.compactSseModeActive=!1);const d=this.findUpstreamParentPeerId(),u=Date.now()-this.lastVerifiedUpdateMs,m=this.liveParent;if(l||!this.envelope.signature_hex||u>=15e3){const[p,_]=await Promise.all([this.refreshViaP2p(!1),l&&this.refreshCompactBracket()]);if(t!==this.liveSyncGeneration)return;!p&&!_&&m===this.liveParent&&(l||Date.now()-this.lastVerifiedUpdateMs>=15e3)&&(this.syncGeneration++,this.overlayMesh.stopLiveRooms(),this.liveParent=null,this.liveChildren=null)}else if(d&&this.liveParent)try{this.lastSubtreePingRttMs=await this.liveParent.ping(d)??this.lastSubtreePingRttMs}catch(p){this.p2pError=String(p)}if(this.isP2pConnected())return}if(!await this.fetchProjectionHttpBackup(h,t))return;!this.isP2pConnected()&&typeof EventSource<"u"&&this.openLiveEventStream(h,t)}catch{}finally{i=!1,s&&(s=!1,c(!0))}}};this.resumeLiveSync=()=>{c(!0)},typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisibilityChange),window.addEventListener("online",this.onNetworkOnline),c(),this.pollTimer=setInterval(()=>{c()},2500)}stopLiveSync(){typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisibilityChange),typeof window<"u"&&window.removeEventListener?.("online",this.onNetworkOnline),this.resumeLiveSync=void 0,typeof navigator<"u"&&"serviceWorker"in navigator&&navigator.serviceWorker.removeEventListener("message",this.onServiceWorkerMessage),this.liveSyncGeneration++,this.gameStatePending=null,this.syncGeneration++,this.overlayMesh.stopLiveRooms(),this.liveParent=null,this.liveChildren=null;for(const e of this.nostrRelaySockets.values())try{e.close()}catch{}this.nostrRelaySockets.clear(),this.nostrSocketFilterKeys.clear(),this.broadcastChannel&&(this.broadcastChannel.onmessage=null),this.resyncTimer&&(clearTimeout(this.resyncTimer),this.resyncTimer=null),this.eventSource?.close(),this.eventSource=null,this.compactSseModeActive=!1,this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}evaluateWatchedNotifications(e,t){const i=this.computeWatchedAthleteNotifications(e),s=new Set;for(const n of i){s.add(n.athleteId);const a=this.previousUrgencyByAthlete.get(n.athleteId),o=`${n.boutNumber}:${n.MatAndUrgencyKey}`;t==="LIVE_OFFICIALS_STREAM"&&a!==o&&this.dispatchServiceWorkerPushNotification(n),this.previousUrgencyByAthlete.set(n.athleteId,o)}for(const n of[...this.previousUrgencyByAthlete.keys()])s.has(n)||this.previousUrgencyByAthlete.delete(n)}ingestSignedEnvelope(e,t,i){if(!this.pinnedPublisherPubkeyHex&&!this.pinnedTournamentId||typeof e?.publisher_pubkey_hex!="string"||this.pinnedPublisherPubkeyHex&&e.publisher_pubkey_hex.toLowerCase()!==this.pinnedPublisherPubkeyHex.toLowerCase()||!se.verifySignedPublicProjection(e)||/^OPENMAT-VENUE-[A-F0-9]{8}$/.test(e.tournament_id??"")&&Array.isArray(e.athletes)&&e.athletes.length>0&&e.athletes.every(c=>/^mat-(?:[1-9]|1[0-9]|20)-(?:q[23]-)?(?:red|green)$/.test(c?.athlete_id))||this.publisherOnlyJoin&&this.publicView().athletes.length>0&&(!Array.isArray(e.athletes)||e.athletes.length===0))return!1;const n=!this.pinnedTournamentId||this.pinnedTournamentId==="manual-pubkey"||e.tournament_id===this.pinnedTournamentId,a=!n&&this.publisherOnlyJoin&&!!this.pinnedPublisherPubkeyHex&&e.publisher_pubkey_hex?.toLowerCase()===this.pinnedPublisherPubkeyHex.toLowerCase()&&e.published_at_ms>Math.max(this.envelope.published_at_ms,this.pinnedIssuedAtMs);if(!n&&!a||n&&e.tournament_id===this.envelope.tournament_id&&(e.snapshot_epoch<this.envelope.snapshot_epoch||e.control_sequence_head<this.envelope.control_sequence_head||this.envelope.signature_hex&&e.control_sequence_head===this.envelope.control_sequence_head&&e.published_at_ms<this.envelope.published_at_ms))return!1;this.setTournamentIdentity(e.tournament_id,e.publisher_pubkey_hex.toLowerCase()),this.compactReplica&&(this.compactReplica.tournamentId!==this.pinnedTournamentId||this.compactReplica.publisherHex!==this.pinnedPublisherPubkeyHex)&&(this.compactReplica=void 0),a&&(this.watchedBracketIds=[],this.fetchedBracketEventlogIds.clear(),this.pollTimer&&this.startLiveSync());const o=e.payload_sha256_hex!==this.envelope.payload_sha256_hex;if(o&&(this.envelope=structuredClone(e)),this.lastVerifiedUpdateMs=Date.now(),this.lastDelivery={...i??{kind:t==="VERIFIED_LOCAL_CACHE"?"CACHE":t==="OFFLINE_SNAPSHOT"?"SNAPSHOT":"UNKNOWN"},receivedAtMs:this.lastVerifiedUpdateMs},this.connectionState=t,this.liveChildren&&e.payload_sha256_hex!==this.lastRelayedProjection)try{this.liveChildren.send("public-projection",new TextEncoder().encode(JSON.stringify(e))),this.lastRelayedProjection=e.payload_sha256_hex}catch(c){this.p2pError=String(c)}if(this.framesRoutedViaMux=[...this.overlayMesh.liveRooms.values()].reduce((c,l)=>c+l.framesSent+l.framesReceived,0),o)try{const c=this.defaultJoinQrUri||this.pinnedPublisherPubkeyHex||this.pinnedTournamentId;globalThis.localStorage?.setItem(wr,JSON.stringify({joinQrUri:c,envelope:e}))}catch{}return this.owVoteTallies=new Map(Object.entries(e.ow_vote_tallies??{})),this.etaEstimator.observeEnvelope(this.publicView(),this.lastVerifiedUpdateMs),this.evaluateWatchedNotifications(this.lastVerifiedUpdateMs,t),this.onUpdateCallback?.(),!0}getSubtreeP2pStatus(){const e=this.liveParent?[...this.liveParent.members.keys()]:[];return{roomId:this.assignedSubtreeRoomId,parentId:this.assignedSubtreeParentId,peerId:this.overlayMesh.peerId,maxRoomPeers:Pn,activePeersInRoom:e.length,signalingAction:Ta,rpcAction:Ba,pingRttMs:this.liveParent?.lastPingRttMs??this.lastSubtreePingRttMs,muxChannels:["official-events","current-state","bulk-chunks"],framesRoutedViaMux:[...this.overlayMesh.liveRooms.values()].reduce((t,i)=>t+i.framesSent+i.framesReceived,0)}}getConnectionStatus(e=Date.now()){const t=[...this.overlayMesh.liveRooms.values()].map(g=>g.diagnostics()),i=this.liveParent?.diagnostics(),s=this.liveChildren?.diagnostics(),n=this.findUpstreamParentPeerId(),a=i?.peers.find(g=>g.peerId===n)??null,o=this.publicNostrRelays.map(g=>{const w=this.nostrRelaySockets.get(g)?.readyState;return{url:g,state:w===1?"OPEN":w===0?"CONNECTING":"CLOSED"}}),c=this.eventSource?.readyState===1?"OPEN":this.eventSource?.readyState===0?"CONNECTING":"CLOSED",l=this.lastDelivery,h=l?Math.max(0,e-l.receivedAtMs):null,d=t.find(g=>g.roomId===l?.roomId)?.peers.find(g=>g.peerId===l?.peerId),u=typeof navigator>"u"?null:navigator.onLine,m=l?.kind==="P2P"?!!(d&&d.transport!=="DISCONNECTED"):l?.kind==="NOSTR"?o.some(g=>g.url===l.endpoint&&g.state==="OPEN"):l?.kind==="COMPACT_SSE"||l?.kind==="HTTP_SSE"?c==="OPEN"&&u!==!1:l?.kind==="HTTP_POLL"?this.pollTimer!==null&&h!==null&&h<1e4&&u!==!1:l?.kind==="BROADCAST"?this.pollTimer!==null&&h!==null&&h<1e4:!1,p=!!(this.envelope.signature_hex||this.compactReplica?.tournamentId===this.pinnedTournamentId&&this.compactReplica?.receivedAtMs),_=!!(p&&this.connectionState==="LIVE_OFFICIALS_STREAM"&&m),f=Math.max(this.envelope.published_at_ms,this.compactReplica?.receivedAtMs??0);return{live:_,delivery:l,ageMs:h,sourceConnected:m,transport:l?.kind==="P2P"?d?.transport??"DISCONNECTED":l?.kind??"NONE",peerId:this.overlayMesh.peerId,upstream:a,downstream:s?.peers??[],roomPeers:i?.peers.filter(g=>g.peerId!==n)??[],pingRttMs:i?.pingRttMs??null,framesSent:t.reduce((g,w)=>g+w.framesSent,0),framesReceived:t.reduce((g,w)=>g+w.framesReceived,0),rtcFramesSent:t.reduce((g,w)=>g+w.rtcFramesSent,0),forwardedFramesSent:t.reduce((g,w)=>g+w.wsFramesSent,0),reconnectCount:t.reduce((g,w)=>g+w.reconnectCount,0),api:{origin:this.officialsOrigin,stream:c,polling:this.pollTimer!==null&&this.apiLastAttemptAtMs>0&&e-this.apiLastAttemptAtMs<1e4&&!this.isP2pConnected()&&!this.isCompactSseOpen(),lastAttemptAtMs:this.apiLastAttemptAtMs,lastSuccessAtMs:this.apiLastSuccessAtMs,error:this.apiError},relays:o,rooms:t,p2pError:this.p2pError,browserOnline:u,publisher:this.pinnedPublisherPubkeyHex,verified:p,publishedAtMs:f,snapshotEpoch:this.envelope.snapshot_epoch,serviceWorkerVersion:this.serviceWorkerVersion}}static isValidSchoolTeam(e,t=""){const i=(e||"").trim(),s=(t||i).trim();if(!i||!s)return!1;const n=new Set(["RED","GREEN","GRN","TBD","BYE","NONE","UNKNOWN"]);return!(n.has(i.toUpperCase())||n.has(s.toUpperCase()))}toggleFollowAthlete(e){return this.watchedAthleteIds.has(e)?this.watchedAthleteIds.delete(e):this.watchedAthleteIds.add(e),this.saveWatchlist(),this.syncActiveSubscriptionWatchlist(),this.onUpdateCallback?.(),this.watchedAthleteIds.has(e)}isFollowingTeam(e){if(!Le.isValidSchoolTeam(e))return!1;const t=this.publicView().athletes.filter(i=>i.team_id===e&&Le.isValidSchoolTeam(i.team_id,i.team_name));return t.length>0&&t.every(i=>this.watchedAthleteIds.has(i.athlete_id))}followTeam(e){if(Le.isValidSchoolTeam(e)){for(const t of this.publicView().athletes)t.team_id===e&&Le.isValidSchoolTeam(t.team_id,t.team_name)&&this.watchedAthleteIds.add(t.athlete_id);this.saveWatchlist(),this.syncActiveSubscriptionWatchlist(),this.onUpdateCallback?.()}}unfollowTeam(e){for(const t of this.publicView().athletes)t.team_id===e&&this.watchedAthleteIds.delete(t.athlete_id);this.saveWatchlist(),this.syncActiveSubscriptionWatchlist(),this.onUpdateCallback?.()}toggleFollowTeam(e){return Le.isValidSchoolTeam(e)?this.isFollowingTeam(e)?(this.unfollowTeam(e),!1):(this.followTeam(e),!0):!1}clearWatchedAthletes(){this.watchedAthleteIds.clear(),this.saveWatchlist(),this.syncActiveSubscriptionWatchlist(),this.onUpdateCallback?.()}get owVoteStorageKey(){return`openmat_players_ow_vote:${this.pinnedPublisherPubkeyHex}:${this.pinnedTournamentId}`}setTournamentIdentity(e,t){if(!(this.pinnedTournamentId===e&&this.pinnedPublisherPubkeyHex===t)&&(this.pinnedTournamentId=e,this.pinnedPublisherPubkeyHex=t,this.pendingVote=void 0,this.voterId="",this.owVoteStatusMessage="",this.owVotedAthleteId="",e&&t))try{this.owVotedAthleteId=globalThis.localStorage?.getItem(this.owVoteStorageKey)??""}catch{}}async castOwVote(e){const t=this.pinnedTournamentId;if(this.pendingVote||!t||!this.pinnedPublisherPubkeyHex||!this.getAthlete(e))return!1;const i=Symbol();this.pendingVote=i,this.owVoteStatusMessage="Submitting vote to tournament officials…";try{if(this.onUpdateCallback?.(),this.pendingVote!==i)return!1;if(!this.voterId){const o=`openmat_ow_voter_${t}`;this.voterId=(typeof localStorage<"u"?localStorage.getItem(o):null)??gt(),typeof localStorage<"u"&&localStorage.setItem(o,this.voterId)}const s={tournamentId:t,voterId:this.voterId,athleteId:e};let n=this.p2pDelivery(),a=null;if(this.isP2pConnected())try{const o=await this.requestViaP2p("ow-vote",new TextEncoder().encode(JSON.stringify(s)));a=JSON.parse(new TextDecoder().decode(o))}catch(o){if(this.pendingVote!==i)return!1;if(this.p2pError=String(o),this.isP2pConnected())throw o}if(!a&&this.pendingVote===i&&!this.isP2pConnected()){n={kind:"HTTP_POLL",endpoint:this.officialsOrigin};const o=await fetch(`${this.officialsOrigin}/api/openmat-ow-vote`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});a=await o.json(),!o.ok&&a&&(a.ok=!1)}if(this.pendingVote!==i)return!1;if(!a?.ok||a.envelope?.tournament_id!==t||!this.ingestSignedEnvelope(a.envelope,"LIVE_OFFICIALS_STREAM",n))throw new Error(String(a?.error??a?.result??"Vote acknowledgement rejected"));if(this.pendingVote!==i)return!1;this.owVotedAthleteId=e;try{globalThis.localStorage?.setItem(this.owVoteStorageKey,e)}catch{}return this.owVoteStatusMessage="Vote confirmed by tournament officials.",!0}catch(s){return this.pendingVote!==i||(this.owVoteStatusMessage=`Vote not confirmed: ${s instanceof Error?s.message:String(s)}. Retry when connected.`),!1}finally{this.pendingVote===i&&(this.pendingVote=void 0,this.onUpdateCallback?.())}}async submitScorekeeperEvent(e){let t=this.p2pDelivery(),i=null;if(this.isP2pConnected())try{const s=await this.requestViaP2p("scorekeeper-event",new Uint8Array(e));i=JSON.parse(new TextDecoder().decode(s))}catch(s){if(this.p2pError=String(s),this.isP2pConnected())throw s}if(!i&&!this.isP2pConnected()){t={kind:"HTTP_POLL",endpoint:this.officialsOrigin};const s=await fetch(`${this.officialsOrigin}/api/openmat-scorekeeper-event`,{method:"POST",headers:{"Content-Type":"application/cbor"},body:new Uint8Array(e)});i=await s.json(),!s.ok&&i&&(i.ok=!1)}if(!i?.ok||!i.envelope||!this.ingestSignedEnvelope(i.envelope,"LIVE_OFFICIALS_STREAM",t))throw new Error(String(i?.error??i?.result??"Scorekeeper acknowledgement rejected"));return i.result.eventIdHex}getAthlete(e){return this.publicView().athletes.find(t=>t.athlete_id===e)}getEtaSnapshot(e=Date.now(),t){return this.etaEstimator.computeSnapshot(this.publicView(),e,t)}getBoutEta(e,t=Date.now(),i){if(e)return this.getEtaSnapshot(t,i).byMatchId.get(e)}getAthleteNextBoutEta(e,t=Date.now(),i){const s=this.findAthleteNextOrActiveBout(e);if(s)return this.getBoutEta(s.match_id,t,i)}computeWatchedAthleteNotifications(e=Date.now(),t){const i=[],s=this.publicView(),n=this.etaEstimator.computeSnapshot(s,e,t),a=s.bouts.filter(h=>!Gi(h,s.bouts)&&(h.lifecycle===M.InProgress||h.lifecycle===M.Ready||h.lifecycle===M.Assigned));for(const h of a){const d=n.byMatchId.get(h.match_id);for(const u of["RED","GREEN"]){const m=u==="RED"?h.red_athlete_id:h.green_athlete_id;if(!m||!this.watchedAthleteIds.has(m))continue;const p=za(h,s.bouts,d);if(p==="SCHEDULED")continue;const _=this.getAthlete(m);if(!_)continue;const f=u==="RED"?h.green_athlete_id:h.red_athlete_id,g=this.getAthlete(f);let w="",b;p==="IN_PROGRESS"?(w=`MAT ${h.assigned_mat_id} ACTIVE — BOUT #${h.bout_number}`,b=0):p==="READY_UP_NEXT"?(b=d?.estimatedMinutes??0,w=b>0?`REPORT TO MAT ${h.assigned_mat_id} — BOUT #${h.bout_number} UP NEXT (~${b} MIN)`:`REPORT TO MAT ${h.assigned_mat_id} — BOUT #${h.bout_number} UP NEXT`):p==="ON_DECK"?(b=Math.max(1,d?.estimatedMinutes??6),w=`ON DECK MAT ${h.assigned_mat_id} — BOUT #${h.bout_number} (~${b} MIN)`):(b=Math.max(1,d?.estimatedMinutes??12),w=`IN THE HOLE MAT ${h.assigned_mat_id} — BOUT #${h.bout_number} (~${b} MIN)`);const A=d?Math.max(0,Math.floor(d.minWaitMs/6e4)):b,S=d?Math.max(A,Math.ceil(d.maxWaitMs/6e4)):b;i.push({id:`${h.match_id}:${m}`,athleteId:m,athleteName:_.public_display_name,teamName:_.team_name,weightClassId:h.weight_class_id,boutNumber:h.bout_number,matId:h.assigned_mat_id,corner:u,opponentName:g?.public_display_name??(f||"TBD"),opponentTeam:g?.team_name??"",urgency:p,headline:w,detail:`${_.public_display_name} (${u} Corner) vs ${g?.public_display_name??"TBD"} · ${h.weight_class_id} lbs ${h.round_label}`,estimatedMinutes:b,minEstimatedMinutes:A,maxEstimatedMinutes:S,shortEtaLabel:d?.shortLabel??(b===0?"Now":`~${b} min`),MatAndUrgencyKey:`${h.assigned_mat_id}:${p}`})}}const o={READY_UP_NEXT:0,IN_PROGRESS:1,ON_DECK:2,IN_THE_HOLE:3},c=i.sort((h,d)=>o[h.urgency]-o[d.urgency]||h.boutNumber-d.boutNumber),l=new Set;return c.filter(h=>l.has(h.athleteId)?!1:(l.add(h.athleteId),!0))}findAthleteNextOrActiveBout(e){const t=this.publicView().bouts,i=n=>n.lifecycle===M.InProgress||n.clock_running?0:n.lifecycle===M.Ready?1:2;return t.filter(n=>(n.red_athlete_id===e||n.green_athlete_id===e)&&!Ne(n.lifecycle)&&!Gi(n,t)).sort((n,a)=>i(n)-i(a)||Math.max(1,n.round_index||1)-Math.max(1,a.round_index||1)||ri(n,a))[0]}findAthleteCompletedBouts(e){return this.publicView().bouts.filter(t=>(t.red_athlete_id===e||t.green_athlete_id===e)&&Ne(t.lifecycle)&&!lt(t)).sort((t,i)=>t.completed_at_ms!==i.completed_at_ms?t.completed_at_ms-i.completed_at_ms:t.round_index-i.round_index||t.bout_number-i.bout_number||t.match_id.localeCompare(i.match_id))}recordCurrentUrgencies(){for(const e of this.computeWatchedAthleteNotifications())this.previousUrgencyByAthlete.set(e.athleteId,`${e.boutNumber}:${e.MatAndUrgencyKey}`)}async toggleCellularWebPush(){return this.webPushState==="SUBSCRIBED_CELLULAR"?(await this.unsubscribeCellularWebPush(),this.webPushState):this.subscribeCellularWebPush()}canUseWebPush(e){return this.officialsOrigin===e&&this.webPushAvailable!==!1}async subscribeCellularWebPush(){if(typeof window>"u"||typeof Notification>"u"){const t=typeof window<"u"&&window.location?.protocol==="http:"&&!/^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname);return this.webPushState="UNSUPPORTED_OR_REQUIRES_PWA",this.webPushStatusMessage=t?"Browser alerts require HTTPS. Open the HTTPS venue link or install from the public link.":"Install OpenMat to your Home Screen or use a notification-capable browser for alerts.",this.onUpdateCallback?.(),this.webPushState}if(this.webPushState="SUBSCRIBING",this.webPushStatusMessage="Enabling mat call alerts...",this.onUpdateCallback?.(),(Notification.permission==="granted"?"granted":await Notification.requestPermission())!=="granted")return this.webPushState="PERMISSION_DENIED",this.webPushStatusMessage="Notification permission denied. Enable notifications in browser settings.",this.onUpdateCallback?.(),this.webPushState;try{const t=this.officialsOrigin;if((this.joinBootstrapRequest||this.webPushAvailable===void 0)&&await this.fetchJoinBootstrap(),this.canUseWebPush(t)&&!this.vapidPublicKeyBase64Url)try{const i=await fetch(`${t}/api/openmat-webpush/vapid-public-key`);if(i.ok){const s=await i.json();s.publicKeyBase64Url&&this.canUseWebPush(t)&&(this.vapidPublicKeyBase64Url=s.publicKeyBase64Url)}}catch{}if(this.canUseWebPush(t)&&"serviceWorker"in navigator)try{const s=await navigator.serviceWorker.getRegistration()??await navigator.serviceWorker.register("./offline.js");if(await navigator.serviceWorker.ready,"PushManager"in window&&s.pushManager){let n=await s.pushManager.getSubscription();if(this.canUseWebPush(t)&&this.vapidPublicKeyBase64Url){const a=Al(this.vapidPublicKeyBase64Url);if(n&&n.options?.applicationServerKey){const o=new Uint8Array(n.options.applicationServerKey);o.byteLength===a.byteLength&&o.every((l,h)=>l===a[h])||(await n.unsubscribe(),n=null)}!n&&this.canUseWebPush(t)&&(n=await s.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)}))}if(n&&this.canUseWebPush(t)){const a=n.toJSON(),o=n.getKey("p256dh"),c=n.getKey("auth");this.activePushSubscription={endpoint:n.endpoint,expirationTime:n.expirationTime,keys:{p256dh:a.keys?.p256dh??(o?sr(new Uint8Array(o)):""),auth:a.keys?.auth??(c?sr(new Uint8Array(c)):"")}},await this.syncActiveSubscriptionWatchlist()}}}catch{}try{typeof localStorage<"u"&&localStorage.setItem("openmat_players_alerts_enabled","1")}catch{}return this.recordCurrentUrgencies(),this.webPushState="SUBSCRIBED_CELLULAR",this.webPushStatusMessage=`Mat call alerts active (${this.watchedAthleteIds.size} followed).`,this.onUpdateCallback?.(),this.webPushState}catch(t){return this.webPushState="UNSUPPORTED_OR_REQUIRES_PWA",this.webPushStatusMessage=`Alert setup error: ${t instanceof Error?t.message:String(t)}`,this.onUpdateCallback?.(),this.webPushState}}async unsubscribeCellularWebPush(){const e=this.officialsOrigin;try{if(typeof navigator<"u"&&"serviceWorker"in navigator){const i=await(await navigator.serviceWorker.getRegistration())?.pushManager?.getSubscription();if(i){const s=i.endpoint;await i.unsubscribe(),this.canUseWebPush(e)&&await fetch(`${e}/api/openmat-webpush/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:s})}).catch(()=>{})}}typeof localStorage<"u"&&localStorage.removeItem("openmat_players_alerts_enabled")}catch{}this.activePushSubscription=null,this.webPushState="UNSUBSCRIBED",this.webPushStatusMessage="Mat call alerts disabled.",this.onUpdateCallback?.()}async restoreExistingWebPushSubscription(){if(!(typeof window>"u"||typeof Notification>"u"))try{let e=!1;try{e=typeof localStorage<"u"&&localStorage.getItem("openmat_players_alerts_enabled")==="1"}catch{}if(Notification.permission!=="granted"||!e&&!await("serviceWorker"in navigator?await navigator.serviceWorker.getRegistration():void 0)?.pushManager?.getSubscription())return;await this.subscribeCellularWebPush()}catch{}}async syncActiveSubscriptionWatchlist(){if(this.webPushState==="SUBSCRIBED_CELLULAR"&&(this.webPushStatusMessage=`Mat call alerts active (${this.watchedAthleteIds.size} followed).`),!(!this.activePushSubscription||this.webPushAvailable===!1))try{await fetch(`${this.officialsOrigin}/api/openmat-webpush/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subscription:this.activePushSubscription,watchedAthleteIds:Array.from(this.watchedAthleteIds)})})}catch{}}async dispatchServiceWorkerPushNotification(e){if(this.webPushState!=="SUBSCRIBED_CELLULAR")return;const t=`openmat-call-${e.athleteId}`;if(typeof navigator<"u"&&"serviceWorker"in navigator)try{const i=await navigator.serviceWorker.getRegistration();if(i&&typeof i.showNotification=="function"){await i.showNotification(e.headline,{body:e.detail,tag:t,requireInteraction:e.urgency==="READY_UP_NEXT"||e.urgency==="ON_DECK",data:{matId:e.matId,boutNumber:e.boutNumber,athleteId:e.athleteId,urgency:e.urgency}});return}}catch{}try{typeof Notification=="function"&&Notification.permission==="granted"&&new Notification(e.headline,{body:e.detail,tag:t})}catch{}}loadWatchlist(){try{const e=JSON.parse(globalThis.localStorage?.getItem(yr)??"[]");Array.isArray(e)&&(this.watchedAthleteIds=new Set(e.filter(t=>typeof t=="string"&&t.trim().length>0&&!/^mat-(?:[1-9]|1[0-9]|20)-(?:q[23]-)?(?:red|green)$/i.test(t))))}catch{}}saveWatchlist(){try{globalThis.localStorage?.setItem(yr,JSON.stringify(Array.from(this.watchedAthleteIds)))}catch{}}}const He={x:16,y:12,scale:1};function kr(r,e){const t=e.filter(s=>!s.is_bye&&!Jt(s.win_type)),i=r.last_bout_ended_ms||r.updated_at_ms||0;return{lastEndMs:t.reduce((s,n)=>Math.max(s,n.completed_at_ms||0),r.last_bout_ended_ms||0),matchesToday:(r.matches_wrestled_today||0)+t.filter(s=>s.completed_at_ms>i).length}}function $d(r){const e=Math.max(0,Math.ceil(r/1e3)),t=Math.floor(e/60),i=e%60;return`${t}:${i.toString().padStart(2,"0")}`}const Od={TAKEDOWN_3:"takedown (+3)",ESCAPE_1:"escape (+1)",REVERSAL_2:"reversal (+2)",NF_2:"near fall (+2)",NF_3:"near fall (+3)",NF_4:"near fall (+4)",NF_INJ4:"near fall with injury (+4)",CAUTION:"caution",STALLING:"stalling",TECH_VIOLATION:"technical violation",ILLEGAL_HOLD:"illegal hold",ROUGHNESS:"unnecessary roughness",UNSPORTSMANLIKE:"unsportsmanlike conduct",COACH_UNSPORTSMANLIKE:"coach misconduct",FLAGRANT:"flagrant misconduct",FALL:"wins by fall",INJURY_DEFAULT:"defaults due to injury",FORFEIT:"forfeits",MED_FORFEIT:"forfeits for medical reasons"};function Sr(r){let e=1;return U`<ol class="bout-timeline" aria-label="Events by time since bout assignment">
    ${r.map(({event:t,elapsedMs:i})=>{const s=/^EVENT_(RED|GREEN)_(.+)$/.exec(t),n=s&&Od[s[2]];let a;t==="EVENT_ADVANCE_PERIOD"?a=`Period ${++e}`:n?a=`${s[1]==="RED"?"Red":"Green"} ${n}`:t==="EVENT_BOUT_ASSIGN"?a="Bout assignment":t==="EVENT_DISK_TOSS_RED"?a="Red wins the disk toss":t==="EVENT_DISK_TOSS_GREEN"?a="Green wins the disk toss":t==="EVENT_CLOCK_START"?a="Clock starts":t==="EVENT_CLOCK_STOP"?a="Clock stops":t==="EVENT_UNDO"?a="Scorekeeper undo":t==="EVENT_CONFIRM_PROTEST"?a="Result confirmed under protest":a=t.slice(6).toLowerCase().replaceAll("_"," ");const o=Math.floor(i/6e4),c=(i%6e4/1e3).toFixed(1).padStart(4,"0");return U`<li><span class="bout-timeline-time">${o}:${c}</span><span>${a}</span></li>`})}
  </ol>`}class Ld{anchors=new Map;computeScorekeeperSignature(e){return[e.lifecycle,e.period_number,Math.max(0,Math.trunc(e.clock_remaining_ms)),e.clock_running?1:0,e.authority_epoch,e.assignment_revision,e.winner_athlete_id??"",e.win_type??""].join("|")}isBoutEnded(e){return e===M.EndedLocal||e===M.LocallyConfirmed||e===M.ResultAccepted}syncBout(e,t=Date.now(),i=!1){const s=this.computeScorekeeperSignature(e),n=this.anchors.get(e.match_id),a=(e.lifecycle===M.InProgress||e.lifecycle===M.Ready)&&!!e.clock_running,o=Math.max(0,Math.trunc(e.clock_remaining_ms));if(!n){const c={matchId:e.match_id,anchorRemainingMs:o,anchorSyncedAtMs:t,clockRunning:a,resyncCount:1,lastScorekeeperSignature:s};return this.anchors.set(e.match_id,c),c}return(i||n.lastScorekeeperSignature!==s)&&(n.anchorRemainingMs=o,n.anchorSyncedAtMs=t,n.clockRunning=a,n.resyncCount+=1,n.lastScorekeeperSignature=s),n}resyncBout(e,t=Date.now()){return this.syncBout(e,t,!0),this.getClockView(e,t)}syncBouts(e,t=Date.now()){const i=new Set;for(const s of e)i.add(s.match_id),this.syncBout(s,t);for(const s of this.anchors.keys())i.has(s)||this.anchors.delete(s)}getClockView(e,t=Date.now()){const i=this.syncBout(e,t),s=i.clockRunning?Math.max(0,t-i.anchorSyncedAtMs):0,n=i.clockRunning?Math.max(0,i.anchorRemainingMs-s):Math.max(0,i.anchorRemainingMs);let a,o;return this.isBoutEnded(e.lifecycle)?(a="ENDED",o="FINAL"):e.lifecycle===M.InProgress&&n===0?(a="EXPIRED",o="0:00"):i.clockRunning&&n>0?(a="RUNNING",o="RUNNING"):(a="STOPPED",o="STOPPED"),{matchId:e.match_id,state:a,stateLabel:o,countingDown:a==="RUNNING",displayedRemainingMs:n,formattedClock:$d(n),anchorRemainingMs:i.anchorRemainingMs,anchorSyncedAtMs:i.anchorSyncedAtMs,resyncCount:i.resyncCount}}}class Dd extends Zt{static properties={status:{state:!0},error:{state:!0},bouts:{state:!0},athletes:{state:!0},activeTab:{state:!0},selectedMatFilter:{state:!0},searchQuery:{state:!0},selectedTeamFilter:{state:!0},selectedDivisionFilter:{state:!0},selectedWeightFilter:{state:!0},selectedBracketDivision:{state:!0},selectedBracketWeight:{state:!0},selectedBracketView:{state:!0},selectedProfileAthleteId:{state:!0},previousTabBeforeProfile:{state:!0},bracketPanX:{state:!0},bracketPanY:{state:!0},bracketScale:{state:!0},highlightedMatchId:{state:!0},qrScanInput:{state:!0},qrScanStatus:{state:!0},copyLinkStatus:{state:!0},colorScheme:{state:!0},nowEpochMs:{state:!0},syncTick:{state:!0},connectionPanelOpen:{state:!0},connectionCopyStatus:{state:!0},refreshStatusMessage:{state:!0}};database=new Wc(()=>{this.refresh()});databaseRead;clockTracker=new Ld;sync=new Le(()=>{this.sync&&(this.nowEpochMs=Date.now(),this.clockTracker.syncBouts(this.sync.publicView().bouts,this.nowEpochMs),this.syncTick++)});clockInterval=null;refreshFeedbackTimer=null;cachedEtaKey="";cachedEtaSnapshot=null;bracketViewportKey="";bracketTransforms=new Map;activePointers=new Map;isPanningBracket=!1;bracketPointerMoved=!1;panStartClientX=0;panStartClientY=0;panOriginX=0;panOriginY=0;pinchStartDistance=0;pinchStartScale=1;pinchCenterX=0;pinchCenterY=0;constructor(){super(),this.error="",this.bouts=[],this.athletes=[],this.activeTab="my-wrestlers",this.selectedMatFilter="ALL",this.searchQuery="",this.selectedTeamFilter="ALL",this.selectedDivisionFilter="ALL",this.selectedWeightFilter="ALL",this.selectedBracketDivision="ALL",this.selectedBracketWeight="",this.selectedBracketView="ALL",this.selectedProfileAthleteId="",this.previousTabBeforeProfile="my-wrestlers",this.bracketPanX=16,this.bracketPanY=12,this.bracketScale=1,this.highlightedMatchId="",this.qrScanInput=this.sync.defaultJoinQrUri||this.sync.pinnedPublisherPubkeyHex,this.qrScanStatus="",this.copyLinkStatus="",this.colorScheme=this.readCurrentColorScheme(),this.nowEpochMs=Date.now(),this.syncTick=0,this.connectionPanelOpen=!1,this.connectionCopyStatus="",this.refreshStatusMessage="",this.clockTracker.syncBouts(this.sync.publicView().bouts,this.nowEpochMs)}createRenderRoot(){return this}readCurrentColorScheme(){if(typeof document<"u"&&document.querySelector('meta[name="color-scheme"]')?.getAttribute("content")==="dark")return"dark";try{if(globalThis.localStorage?.getItem("color-scheme")==="dark")return"dark"}catch{}return"light"}applyColorScheme(e){if(this.colorScheme=e,typeof document<"u"){const t=document.querySelector('meta[name="color-scheme"]');t&&t.setAttribute("content",e);const i=document.querySelector('meta[name="theme-color"]');i&&i.setAttribute("content",e==="dark"?"#0b0f17":"#f8fafc")}try{globalThis.localStorage?.setItem("color-scheme",e)}catch{}}toggleColorScheme(){this.applyColorScheme(this.colorScheme==="light"?"dark":"light")}onStorageEvent=e=>{e.key==="color-scheme"&&this.applyColorScheme(e.newValue==="dark"?"dark":"light")};onPopState=()=>{if(typeof window>"u")return;const e=new URLSearchParams(window.location.search),t=(e.get("wrestler")||e.get("athlete")||"").trim();t?(this.selectedProfileAthleteId=t,this.activeTab="wrestler-profile"):this.activeTab==="wrestler-profile"&&(this.activeTab=this.previousTabBeforeProfile||"my-wrestlers")};openWrestlerProfile(e,t=!0){const i=(e||"").trim();if(i&&(this.activeTab!=="wrestler-profile"&&(this.previousTabBeforeProfile=this.activeTab),this.selectedProfileAthleteId=i,this.activeTab="wrestler-profile",t&&typeof window<"u"&&window.history?.pushState))try{const s=new URL(window.location.href);s.searchParams.set("wrestler",i),window.history.pushState({athleteId:i,tab:"wrestler-profile"},"",s.toString())}catch{}}closeWrestlerProfile(){this.navigateToTab(this.previousTabBeforeProfile||"my-wrestlers")}navigateToTab(e){const t=this.activeTab==="wrestler-profile";if(this.activeTab=e,t&&typeof window<"u"&&window.history?.replaceState)try{const i=new URL(window.location.href);(i.searchParams.has("wrestler")||i.searchParams.has("athlete"))&&(i.searchParams.delete("wrestler"),i.searchParams.delete("athlete"),window.history.replaceState({},"",i.toString()))}catch{}}jumpToBracketNode(e){this.selectedBracketWeight=e.weight_class_id,this.selectedBracketDivision=(e.division_id||"ALL").toUpperCase(),this.selectedBracketView="ALL",this.highlightedMatchId=e.match_id,this.navigateToTab("brackets"),this.updateComplete.then(()=>{this.centerBracketOnMatchId(e.match_id)})}onServiceWorkerMessage=e=>{const t=e.data;t?.type==="OPENMAT_PUSH_JUMP_MAT"&&Number(t.matId)>0&&this.jumpToMat(Number(t.matId))};handleManualRefresh=async()=>{if(this.sync.isRefreshing)return;this.refreshFeedbackTimer&&(clearTimeout(this.refreshFeedbackTimer),this.refreshFeedbackTimer=null);const e=await this.sync.refreshNow();this.nowEpochMs=Date.now(),this.clockTracker.syncBouts(this.sync.publicView().bouts,this.nowEpochMs),this.refreshStatusMessage=e?"Scores updated":"Showing saved schedule",this.refreshFeedbackTimer=setTimeout(()=>{this.refreshFeedbackTimer=null,this.refreshStatusMessage=""},2500)};onKeyDown=e=>{!e.shiftKey&&(e.key==="F5"||(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="r")&&this.sync.pinnedPublisherPubkeyHex&&(e.preventDefault(),this.handleManualRefresh())};connectedCallback(){if(super.connectedCallback(),typeof window<"u"){if(this.applyColorScheme(this.readCurrentColorScheme()),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("storage",this.onStorageEvent),window.addEventListener("popstate",this.onPopState),window.location.search||window.location.hash){const s=this.sync.applyScannedTournamentJoinQr(window.location.href);s.valid&&(this.qrScanInput=this.sync.defaultJoinQrUri||this.sync.pinnedPublisherPubkeyHex,this.qrScanStatus=s.reason)}const e=new URLSearchParams(window.location.search),t=Number(e.get("mat"));t>=1&&t<=20&&(this.selectedMatFilter=t,this.activeTab="mats");const i=(e.get("wrestler")||e.get("athlete")||"").trim();i&&(this.selectedProfileAthleteId=i,this.activeTab="wrestler-profile"),"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",this.onServiceWorkerMessage)}this.sync.startLiveSync(),this.database.session.aborted&&this.database.open(),this.refresh(),this.clockInterval=setInterval(()=>{this.nowEpochMs=Date.now()},250)}disconnectedCallback(){typeof window<"u"&&(window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("storage",this.onStorageEvent),window.removeEventListener("popstate",this.onPopState)),this.sync.stopLiveSync(),this.database.close(),typeof navigator<"u"&&"serviceWorker"in navigator&&navigator.serviceWorker.removeEventListener("message",this.onServiceWorkerMessage),this.clockInterval&&(clearInterval(this.clockInterval),this.clockInterval=null),this.refreshFeedbackTimer&&(clearTimeout(this.refreshFeedbackTimer),this.refreshFeedbackTimer=null),super.disconnectedCallback()}willUpdate(e){(e.has("syncTick")||e.has("activeTab")||e.has("selectedBracketDivision")||e.has("selectedBracketWeight")||e.has("highlightedMatchId"))&&this.autoSelectPopulatedBracketWeight()}updated(){if(this.activeTab!=="brackets"||this.selectedBracketView!=="ALL")return;let e=!1;for(const t of this.querySelectorAll(".bracket-viewport")){const i=t.dataset.bracketKey;if(i===this.bracketViewportKey||this.bracketTransforms.has(i))continue;const s=this.measureBracketFit(t);s&&(this.bracketTransforms.set(i,s),e=!0)}e&&this.requestUpdate()}availableDivisions(){const e=this.sync.publicView(),t=new Set,i=new Set;for(const s of e.athletes){const n=(s.division_id||"VARSITY").trim().toUpperCase();n&&t.add(n)}for(const s of e.bouts){const n=(s.division_id||"").trim().toUpperCase();n&&(t.add(n),i.add(s.bracket_id))}for(const s of e.compactBrackets)i.has(s.bracket_id)||t.add(Vn(s.bracket_id,s.division));return Array.from(t)}hasMultipleOrNonDefaultDivisions(){const e=this.availableDivisions();return e.length>1||e.length===1&&e[0]!=="VARSITY"}formatDivisionWeightLabel(e,t){const i=(t||"").trim().toUpperCase();return i&&(i!=="VARSITY"||this.hasMultipleOrNonDefaultDivisions())?`${i} ${e} lbs`:`${e} lbs`}bracketGroups(){const e=this.sync.publicView(),t=new Map,i=new Set;for(const s of e.bouts){const n=(s.division_id||this.sync.getAthlete(s.red_athlete_id)?.division_id||this.sync.getAthlete(s.green_athlete_id)?.division_id||"VARSITY").trim().toUpperCase(),a=JSON.stringify([s.bracket_id,n,s.weight_class_id]);let o=t.get(a);o||(o={id:s.bracket_id,division:n,weight:s.weight_class_id,bouts:[]},t.set(a,o)),o.bouts.push(s),i.add(s.bracket_id)}for(const s of e.compactBrackets){if(i.has(s.bracket_id))continue;const n=Vn(s.bracket_id,s.division),a=s.weight_class_id;t.set(JSON.stringify([s.bracket_id,n,a]),{id:s.bracket_id,division:n,weight:a,bouts:[]})}return[...t.values()]}autoSelectPopulatedBracketWeight(){const e=this.bracketGroups();let t=e.filter(n=>this.selectedBracketDivision==="ALL"||n.division===this.selectedBracketDivision);if(e.length&&!t.length&&(this.selectedBracketDivision="ALL",t=e),!t.length)return;t.some(n=>n.weight===this.selectedBracketWeight)||(this.selectedBracketWeight=t[0].weight);const i=t.filter(n=>n.weight===this.selectedBracketWeight&&n.id),s=i.find(n=>n.bouts.some(a=>a.match_id===this.highlightedMatchId))??i[0];s&&this.sync.watchBracket(s.id,i.filter(n=>n!==s).map(n=>n.id))}async refresh(){const e=this.database.session;if(!(e.aborted||e===this.databaseRead)){this.databaseRead=e;try{let t=await this.database.connect();for(;!e.aborted&&t.freshness==="snapshot";){const[i,s,n]=await Promise.all([this.database.query("bouts"),this.database.query("athletes"),this.database.query("status")]);if(e.aborted)return;if(n.ownerId!==t.ownerId||n.snapshotEpoch!==t.snapshotEpoch||n.tournamentId!==t.tournamentId||n.freshness!==t.freshness){t=n;continue}this.bouts=i,this.athletes=s;break}if(e.aborted)return;if(t.freshness==="no-snapshot"&&this.status?.freshness==="snapshot"){this.error=t.warning||"Showing the last verified snapshot.";return}this.status=t,this.error=""}catch(t){e.aborted||(this.error=String(t))}finally{this.databaseRead===e&&(this.databaseRead=void 0)}}}getBoutClockView(e,t=this.nowEpochMs){return this.clockTracker.getClockView(e,t)}getEtaSnapshot(e=this.nowEpochMs){const t=this.sync.publicView(),i=Math.floor(e/1e3),s=`${this.syncTick}:${t.tournament_id}:${t.control_sequence_head}:${t.published_at_ms}:${t.bouts.length}:${i}`;if(this.cachedEtaSnapshot&&this.cachedEtaKey===s)return this.cachedEtaSnapshot;const n=this.sync.etaEstimator.computeSnapshot(t,e,(a,o)=>this.clockTracker.getClockView(a,o).displayedRemainingMs);return this.cachedEtaKey=s,this.cachedEtaSnapshot=n,n}getBoutEta(e,t=this.nowEpochMs){if(e)return this.getEtaSnapshot(t).byMatchId.get(e)}getAthleteNextBoutEta(e,t=this.nowEpochMs){const i=this.sync.findAthleteNextOrActiveBout(e);if(i)return this.getBoutEta(i.match_id,t)}formatEstimatedClockTime(e){if(!Number.isFinite(e)||e<=0)return"";try{return new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"2-digit"}).format(new Date(e))}catch{return""}}renderPaceSummaryBar(e){const{pace:t}=e,i=(t.minAvgCycleMs/6e4).toFixed(1),s=(t.maxAvgCycleMs/6e4).toFixed(1);return U`
      <div class="pace-summary-bar" aria-label="Live tournament match pace">
        <span
          class="pace-pill ${t.paceSource==="BLENDED_LIVE"?"pace-adapted":""}"
          data-pace-source=${t.paceSource}
          data-pace-samples=${String(t.sampleCount)}
          data-pace-ms=${String(t.learnedAvgCycleMs)}
          title="Bounded between ${i} and ${s} min per bout"
        >
          <span>${t.formattedPaceDetail}</span>
        </span>
      </div>
    `}getAthleteStatusText(e){return e.check_in_stage===J.Withdrawn||e.check_in_stage===J.Scratched?"WITHDRAWN":typeof e.check_in_stage=="number"&&e.check_in_stage>0&&e.check_in_stage<J.Eligible?"CHECK-IN PENDING":"CLEARED · AWAITING BOUT"}formatRestCountdown(e){if(!e||e<=0)return{ready:!0,label:"Rest complete"};const t=Math.max(0,this.nowEpochMs-e),i=1800*1e3;if(t>=i)return{ready:!0,label:"Rest complete (30m)"};const s=Math.ceil((i-t)/1e3),n=Math.floor(s/60),a=s%60;return{ready:!1,label:`Rest remaining: ${n}m ${a.toString().padStart(2,"0")}s`}}async toggleCellularWebPush(){await this.sync.toggleCellularWebPush(),this.requestUpdate()}jumpToMat(e){this.selectedMatFilter=e,this.navigateToTab("mats")}getUrgencyRank(e){const t=this.sync.findAthleteNextOrActiveBout(e);return t?t.lifecycle===M.Ready?1:t.lifecycle===M.InProgress?2:t.mat_queue_order===2?3:t.assigned_mat_id>0?4:10:99}isBoutCompleted(e){return e.lifecycle===M.EndedLocal||e.lifecycle===M.LocallyConfirmed||e.lifecycle===M.ResultAccepted}computeSchoolTeams(){const e=this.sync.publicView(),t=new Map;for(const i of e.athletes){if(!Le.isValidSchoolTeam(i.team_id,i.team_name))continue;let s=t.get(i.team_id);s||(s={teamId:i.team_id,teamName:i.team_name||i.team_id,totalWrestlers:0,followedWrestlers:0,isFollowingAll:!1,activeOnMatCount:0},t.set(i.team_id,s)),s.totalWrestlers+=1,this.sync.watchedAthleteIds.has(i.athlete_id)&&(s.followedWrestlers+=1);const n=this.sync.findAthleteNextOrActiveBout(i.athlete_id);n&&n.assigned_mat_id>0&&(s.activeOnMatCount+=1)}for(const i of t.values())i.isFollowingAll=i.totalWrestlers>0&&i.followedWrestlers===i.totalWrestlers;return Array.from(t.values()).sort((i,s)=>i.teamName.localeCompare(s.teamName))}computeEffectiveStandings(){const e=this.sync.publicView(),t=c=>Le.isValidSchoolTeam(c.team_id,c.team_name),i=(e.standings??[]).filter(t);if(e.hasCompactStandings)return ji(i);const s=new Map(e.athletes.map(c=>[c.athlete_id,c])),n=Ni(s,e.bouts),a=new Map(i.map(c=>[c.team_id,c]));let o=!1;for(const[c,l]of n){const h=a.get(c);t(l)&&(!h||l.total_points>h.total_points)&&(a.set(c,l),o=!0)}return o?ji(a.values()):i}computeBracketTreeLayout(e){if(e.length===0)return{width:640,height:320,nodes:[],headers:[],banners:[],edges:[]};const h=[...e].sort((S,E)=>S.bout_number-E.bout_number),d=h.filter(S=>!S.is_consolation&&(!S.is_placement_bout||S.placement_rank===1)),u=new Set(d.map(S=>S.match_id)),m=h.filter(S=>!u.has(S.match_id)),p=new Map,_=[],f=[];let g=640,w=64;if(d.length>0){const S=d[0]?.format==="BEST_OF_THREE"?"Best of 3 Series":d[0]?.format==="ROUND_ROBIN_POOL"?"Round Robin Pool":"Championship",E=[];_.push({title:S,x:24,y:4,rounds:E});const C=new Map(d.map(v=>[v.match_id,v])),$=new Map;let y=!1;for(const v of d){const R=v.winner_next_match_id;if(R&&C.has(R)){y=!0;const k=$.get(R)??[];k.push(v),$.set(R,k)}}const I=new Map,D=new Map;if(y){const v=new Map,R=(T,O=new Set)=>{if(v.has(T))return v.get(T);if(O.has(T))return 0;O.add(T);const W=C.get(T)?.winner_next_match_id;if(!W||!C.has(W))return v.set(T,0),0;const G=1+R(W,O);return v.set(T,G),G};let k=0;for(const T of d)k=Math.max(k,R(T.match_id));for(const T of d){const O=v.get(T.match_id)??0,P=k-O,W=I.get(P)??[];W.push(T),I.set(P,W),!D.has(P)&&T.round_label&&D.set(P,T.round_label)}}else{const v=new Map;for(const R of d){const k=(R.round_label||"Championship").trim();if(!v.has(k)){const P=v.size;v.set(k,P),D.set(P,k)}const T=v.get(k),O=I.get(T)??[];O.push(R),I.set(T,O)}}const x=Array.from(I.keys()).sort((v,R)=>v-R);for(const v of x){const R=(I.get(v)??[]).sort((P,W)=>P.bout_number-W.bout_number),k=24+v*320,T=[];E.push({nodes:T,title:D.get(v)||`Round ${v+1}`,x:k,y:30,width:256});let O=64;for(let P=0;P<R.length;P++){const W=R[P],G=($.get(W.match_id)??[]).map(V=>p.get(V.match_id)).filter(V=>!!V);let F=64+P*104;if(G.length>0){const V=G.reduce((z,L)=>z+L.y,0)/G.length;F=Math.round(V)}F<O&&(F=O),O=F+104;const q={bout:W,x:k,y:F,width:256,height:84,section:"CHAMPIONSHIP"};T.push(q),p.set(W.match_id,q),g=Math.max(g,k+256+24),w=Math.max(w,F+84)}}}if(m.length>0){const S=d.length>0?w+88:64,E=[];_.push({rounds:E,title:"Consolation & Placement",x:24,y:S-60});const C=new Map(m.map(k=>[k.match_id,k])),$=new Map;for(const k of m){const T=k.winner_next_match_id;if(T&&C.has(T)){const O=$.get(T)??[];O.push(k),$.set(T,O)}}const y=new Map,I=new Map,D=new Map,x=m.filter(k=>!k.is_placement_bout),v=m.filter(k=>k.is_placement_bout);for(const k of x){const T=(k.round_label||"Consolation").trim();if(!y.has(T)){const W=y.size;y.set(T,W),D.set(W,T)}const O=y.get(T),P=I.get(O)??[];P.push(k),I.set(O,P)}if(v.length>0){const k=y.size;D.set(k,"Placement / Medals"),I.set(k,v)}const R=Array.from(I.keys()).sort((k,T)=>k-T);for(const k of R){const T=(I.get(k)??[]).sort((G,F)=>G.bout_number-F.bout_number),O=24+k*320,P=[];E.push({nodes:P,title:D.get(k)||`Consolation ${k+1}`,x:O,y:S-34,width:256});let W=S;for(let G=0;G<T.length;G++){const F=T[G],q=($.get(F.match_id)??[]).map(L=>p.get(L.match_id)).filter(L=>!!L);let V=S+G*104;if(q.length>0){const L=q.reduce((j,Y)=>j+Y.y,0)/q.length;V=Math.round(L)}V<W&&(V=W),W=V+104;const z={bout:F,x:O,y:V,width:256,height:84,section:F.is_placement_bout?"PLACEMENT":"CONSOLATION"};P.push(z),p.set(F.match_id,z),g=Math.max(g,O+256+24),w=Math.max(w,V+84)}}}const b=_.flatMap(S=>S.rounds),A=b.flatMap(S=>S.nodes);for(const S of A){const E=S.bout.winner_next_match_id;if(!E)continue;const C=p.get(E);if(!C||C.x<=S.x)continue;const $=S.x+S.width,y=S.y+Math.round(S.height/2),I=C.x,D=C.y+Math.round(C.height/2),x=Math.round($+(I-$)*.5),v=this.sync.watchedAthleteIds.has(S.bout.red_athlete_id)||this.sync.watchedAthleteIds.has(S.bout.green_athlete_id);f.push({fromMatchId:S.bout.match_id,toMatchId:C.bout.match_id,d:`M ${$} ${y} H ${x} V ${D} H ${I}`,isWatchedPath:v,isCompleted:this.isBoutCompleted(S.bout)})}return{width:Math.max(640,g),height:Math.max(320,w+36),nodes:A,headers:b,banners:_,edges:f}}resetBracketTransforms(){this.bracketTransforms.clear(),this.bracketViewportKey="",this.bracketPanX=He.x,this.bracketPanY=He.y,this.bracketScale=He.scale,this.requestUpdate()}activateBracketViewport(e){const t=e.dataset.bracketKey;if(t===this.bracketViewportKey)return;this.bracketViewportKey&&this.bracketTransforms.set(this.bracketViewportKey,{x:this.bracketPanX,y:this.bracketPanY,scale:this.bracketScale}),this.bracketViewportKey=t;const i=this.bracketTransforms.get(t)??He;this.bracketPanX=i.x,this.bracketPanY=i.y,this.bracketScale=i.scale}measureBracketFit(e){const t=e.querySelector(".bracket-stage");if(!t)return;const{clientWidth:i,clientHeight:s}=e,{offsetWidth:n,offsetHeight:a}=t;if(i<=24||s<=72||!n||!a)return;const o=Math.min(1,(i-24)/n,(s-72)/a);return{x:Math.max(12,Math.round((i-n*o)/2)),y:He.y,scale:o}}zoomBracketAt(e,t,i,s){const n=this.bracketScale,a=this.measureBracketFit(e)?.scale??He.scale,o=Math.min(2.2,Math.max(a*.9,t));if(o===n)return;const c=o/n;this.bracketPanX=i-(i-this.bracketPanX)*c,this.bracketPanY=s-(s-this.bracketPanY)*c,this.bracketScale=o}zoomBracketBy(e,t){const i=t>=0?1+t:1/(1-t);this.zoomBracketAt(e,this.bracketScale*i,e.clientWidth/2,e.clientHeight/2)}fitBracketToViewport(e){const{x:t,y:i,scale:s}=this.measureBracketFit(e)??He;this.bracketPanX=t,this.bracketPanY=i,this.bracketScale=s}centerBracketOnMatchId(e){const t=[...this.querySelectorAll(".bracket-tree-node")].find(c=>c.dataset.matchId===e),i=t?.closest(".bracket-viewport");if(!t||!i)return;this.activateBracketViewport(i),this.querySelectorAll(".bracket-viewport").length>1&&i.scrollIntoView({block:"nearest"});const s=i.clientWidth,n=i.clientHeight,a=t.offsetLeft+t.offsetWidth/2,o=t.offsetTop+t.offsetHeight/2;this.bracketPanX=Math.round(s/2-a*this.bracketScale),this.bracketPanY=Math.round(n/2-o*this.bracketScale)}centerBracketOnFollowedWrestler(e){const t=e.find(i=>!this.isBoutCompleted(i)&&(this.sync.watchedAthleteIds.has(i.red_athlete_id)||this.sync.watchedAthleteIds.has(i.green_athlete_id)))??e.find(i=>this.sync.watchedAthleteIds.has(i.red_athlete_id)||this.sync.watchedAthleteIds.has(i.green_athlete_id));t&&(this.highlightedMatchId=t.match_id,this.centerBracketOnMatchId(t.match_id))}handleBracketPointerDown=e=>{if(e.target?.closest("a, input, select, .bracket-log-button"))return;const i=e.currentTarget;if(!(this.activePointers.size>0&&this.bracketViewportKey!==i.dataset.bracketKey)){if(this.activateBracketViewport(i),this.activePointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.activePointers.size===1)this.bracketPointerMoved=!1,this.isPanningBracket=!0,this.panStartClientX=e.clientX,this.panStartClientY=e.clientY,this.panOriginX=this.bracketPanX,this.panOriginY=this.bracketPanY;else if(this.activePointers.size===2){const s=Array.from(this.activePointers.values());this.pinchStartDistance=Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y),this.pinchStartScale=this.bracketScale,this.pinchCenterX=(s[0].x+s[1].x)/2,this.pinchCenterY=(s[0].y+s[1].y)/2}}};handleBracketPointerMove=e=>{if(this.activePointers.has(e.pointerId)){if(this.activePointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.activePointers.size===2&&this.pinchStartDistance>10){this.bracketPointerMoved=!0;const t=Array.from(this.activePointers.values()),s=Math.hypot(t[1].x-t[0].x,t[1].y-t[0].y)/this.pinchStartDistance,n=(t[0].x+t[1].x)/2,a=(t[0].y+t[1].y)/2,o=e.currentTarget,c=o.getBoundingClientRect();this.bracketPanX+=n-this.pinchCenterX,this.bracketPanY+=a-this.pinchCenterY,this.zoomBracketAt(o,this.pinchStartScale*s,n-c.left,a-c.top),this.pinchCenterX=n,this.pinchCenterY=a;return}if(this.activePointers.size===1&&this.isPanningBracket){const t=e.clientX-this.panStartClientX,i=e.clientY-this.panStartClientY;if(!this.bracketPointerMoved&&Math.hypot(t,i)<5)return;this.bracketPointerMoved=!0;const s=e.currentTarget;s.hasPointerCapture(e.pointerId)||s.setPointerCapture(e.pointerId),this.bracketPanX=this.panOriginX+t,this.bracketPanY=this.panOriginY+i}}};handleBracketPointerUp=e=>{if(this.activePointers.delete(e.pointerId),this.activePointers.size===0)this.isPanningBracket=!1,this.pinchStartDistance=0;else if(this.activePointers.size===1){const t=Array.from(this.activePointers.values())[0];this.panStartClientX=t.x,this.panStartClientY=t.y,this.panOriginX=this.bracketPanX,this.panOriginY=this.bracketPanY}};handleBracketWheel=e=>{if(e.deltaY===0)return;e.preventDefault();const t=e.currentTarget;this.activateBracketViewport(t);const i=t.getBoundingClientRect(),s=e.deltaMode===1?16:e.deltaMode===2?t.clientHeight:1;this.zoomBracketAt(t,this.bracketScale*Math.exp(-e.deltaY*s*.0015),e.clientX-i.left,e.clientY-i.top)};handleBracketKeyDown=e=>{if(e.target!==e.currentTarget)return;const t=e.currentTarget;switch(this.activateBracketViewport(t),e.key){case"ArrowLeft":this.bracketPanX+=64;break;case"ArrowRight":this.bracketPanX-=64;break;case"ArrowUp":this.bracketPanY+=64;break;case"ArrowDown":this.bracketPanY-=64;break;case"+":case"=":this.zoomBracketBy(t,.15);break;case"-":this.zoomBracketBy(t,-.15);break;default:return}e.preventDefault()};renderMyWrestlersTab(){const e=this.sync.publicView(),t=this.getEtaSnapshot(),i=e.athletes.filter(p=>this.sync.watchedAthleteIds.has(p.athlete_id)).sort((p,_)=>{const f=this.getUrgencyRank(p.athlete_id)-this.getUrgencyRank(_.athlete_id);if(f!==0)return f;const g=this.sync.findAthleteNextOrActiveBout(p.athlete_id),w=this.sync.findAthleteNextOrActiveBout(_.athlete_id),b=(g&&t.byMatchId.get(g.match_id)?.estimatedWaitMs)??Number.MAX_SAFE_INTEGER,A=(w&&t.byMatchId.get(w.match_id)?.estimatedWaitMs)??Number.MAX_SAFE_INTEGER;return b!==A?b-A:p.public_display_name.localeCompare(_.public_display_name)}),s=this.computeSchoolTeams(),n=s.filter(p=>p.isFollowingAll),a=this.selectedTeamFilter!=="ALL"?s.find(p=>p.teamId===this.selectedTeamFilter):void 0,o=this.searchQuery.toLowerCase().trim(),c=/^(\d+)\s*lbs?$/.exec(o)?.[1],l=e.athletes.filter(p=>{const _=(p.division_id||"VARSITY").trim().toUpperCase();return this.selectedTeamFilter!=="ALL"&&p.team_id!==this.selectedTeamFilter||this.selectedDivisionFilter!=="ALL"&&_!==this.selectedDivisionFilter||this.selectedWeightFilter!=="ALL"&&p.weight_class_id!==this.selectedWeightFilter?!1:o?p.public_display_name.toLowerCase().includes(o)||p.team_name.toLowerCase().includes(o)||p.team_id.toLowerCase().includes(o)||(c===void 0?p.weight_class_id.includes(o):p.weight_class_id===c)||_.toLowerCase().includes(o)||(p.flowrestling_id??"").toLowerCase().includes(o):!0}).sort((p,_)=>Number(p.weight_class_id)-Number(_.weight_class_id)||(p.seed_rank||99)-(_.seed_rank||99)||p.public_display_name.localeCompare(_.public_display_name)),h=this.availableDivisions(),d=this.hasMultipleOrNonDefaultDivisions(),u=Array.from(new Set(e.athletes.map(p=>p.weight_class_id))).sort((p,_)=>Number(p)-Number(_)),m=u.length>0?u:d?gs:Un;return U`
      <section aria-label="My Followed Wrestlers and Tournament Roster">
        <div class="my-wrestlers-split">
          <div>
            <div class="section-header">
              <div>
                <h2 class="section-title">My Wrestlers (${i.length})</h2>
                ${n.length>0?U`
                      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
                        Following teams: ${n.map(p=>p.teamName).join(", ")}
                      </div>
                    `:""}
              </div>
              ${i.length>0?U`
                    <button
                      type="button"
                      style="min-height: 30px; padding: 4px 10px; font-size: 12px;"
                      @click=${()=>this.sync.clearWatchedAthletes()}
                    >
                      Unfollow All
                    </button>
                  `:""}
            </div>

            ${e.bouts.length>0?this.renderPaceSummaryBar(t):""}

            ${i.length===0?U`
                  <div class="finder-card" style="margin-bottom: 14px;">
                    <strong style="display: block; font-size: 14px; margin-bottom: 4px;">
                      Follow Wrestlers or a High School Team
                    </strong>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 13px;">
                      Search by wrestler name or select a high school team to follow wrestlers and receive mat calls.
                    </p>
                  </div>
                `:U`
                  <div class="pass-grid">
                    ${i.map(p=>this.renderAthletePass(p,"my-wrestlers"))}
                  </div>
                `}
          </div>

          <div class="finder-panel">
            <div class="finder-card" aria-label="Find and Follow Wrestlers">
              <div class="section-header" style="margin-bottom: 10px;">
                <div>
                  <h3 class="section-title">Tournament Roster (${e.athletes.length})</h3>
                  <div style="font-size: 12px; color: var(--text-muted);">
                    Search by wrestler name, school, or weight class
                  </div>
                </div>
                ${this.searchQuery||this.selectedTeamFilter!=="ALL"||this.selectedWeightFilter!=="ALL"||this.selectedDivisionFilter!=="ALL"?U`
                      <button
                        type="button"
                        style="min-height: 28px; padding: 3px 9px; font-size: 11px;"
                        @click=${()=>{this.searchQuery="",this.selectedTeamFilter="ALL",this.selectedWeightFilter="ALL",this.selectedDivisionFilter="ALL"}}
                      >
                        Reset Filters
                      </button>
                    `:""}
              </div>

              <div class="search-box-row">
                <input
                  type="search"
                  aria-label="Search wrestlers or high schools"
                  placeholder="Search wrestler name, high school, or weight (e.g. Jordan Smith, Santa Barbara, 132)..."
                  .value=${this.searchQuery}
                  @input=${p=>{this.searchQuery=p.target.value}}
                />
                ${this.searchQuery?U`
                      <button
                        type="button"
                        aria-label="Clear search"
                        @click=${()=>{this.searchQuery=""}}
                      >
                        Clear
                      </button>
                    `:""}
              </div>

              <div class="finder-controls">
                <select
                  aria-label="Filter by school"
                  @change=${p=>{this.selectedTeamFilter=p.target.value}}
                >
                  <option value="ALL" .selected=${this.selectedTeamFilter==="ALL"}>All High Schools (${s.length})</option>
                  ${s.map(p=>U`<option value=${p.teamId} .selected=${this.selectedTeamFilter===p.teamId}>${p.teamName} (${p.totalWrestlers})</option>`)}
                </select>

                <select
                  aria-label="Filter by weight class"
                  .value=${this.selectedWeightFilter}
                  @change=${p=>{this.selectedWeightFilter=p.target.value}}
                >
                  <option value="ALL">All Weights</option>
                  ${m.map(p=>U`<option value=${p}>${p} lbs</option>`)}
                </select>

                ${d?U`
                      <select
                        aria-label="Filter by division"
                        .value=${this.selectedDivisionFilter}
                        @change=${p=>{this.selectedDivisionFilter=p.target.value}}
                      >
                        <option value="ALL">All Divisions</option>
                        ${h.map(p=>U`<option value=${p}>${p}</option>`)}
                      </select>
                    `:""}
              </div>

              ${a?U`
                    <div class="team-banner-bar">
                      <div>
                        <strong>${a.teamName} (${a.teamId})</strong>
                        <span style="margin-left: 6px; font-weight: 500;">
                          ${a.totalWrestlers} wrestlers · ${a.followedWrestlers} followed
                        </span>
                      </div>
                      <button
                        type="button"
                        class=${a.isFollowingAll?"":"btn-primary"}
                        style="min-height: 30px; padding: 4px 10px; font-size: 12px;"
                        @click=${()=>this.sync.toggleFollowTeam(a.teamId)}
                      >
                        ${a.isFollowingAll?`Unfollow ${a.teamName}`:`Follow All ${a.totalWrestlers} Wrestlers`}
                      </button>
                    </div>
                  `:""}

              <div style="font-size: 11px; font-weight: 700; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.04em;">
                Showing ${l.length} of ${e.athletes.length} wrestlers
              </div>

              <div class="roster-list">
                ${l.length===0?U`
                      <div style="padding: 14px; text-align: center; color: var(--text-muted); font-size: 13px;">
                        ${e.athletes.length===0?"No wrestlers registered in this tournament.":"No wrestlers match the current filter."}
                      </div>
                    `:l.map(p=>{const _=this.sync.watchedAthleteIds.has(p.athlete_id),f=this.sync.findAthleteNextOrActiveBout(p.athlete_id),g=this.sync.findAthleteCompletedBouts(p.athlete_id),w=g.filter(C=>C.winner_athlete_id===p.athlete_id).length,b=g.length-w,A=Number(p.seed_rank)>0,S=f&&(f.lifecycle===M.InProgress||f.clock_running),E=f&&!S&&f.lifecycle===M.Ready;return U`
                        <div class="roster-row ${_?"followed":""}">
                          <div style="min-width: 0; flex: 1;">
                            <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                              <button
                                type="button"
                                class="wrestler-link-btn"
                                style="font-size: 14px;"
                                title="View wrestler profile"
                                @click=${()=>this.openWrestlerProfile(p.athlete_id)}
                              >
                                ${p.public_display_name}
                              </button>
                              <span class="badge-weight">${this.formatDivisionWeightLabel(p.weight_class_id,p.division_id)}</span>
                              ${A?U`<span style="font-size: 11px; font-weight: 700; color: var(--text-muted);">Seed #${p.seed_rank}</span>`:""}
                              ${p.flowrestling_id?U`<span class="badge-flo" title="FloWrestling ID">FLO: ${p.flowrestling_id}</span>`:""}
                            </div>
                            <div style="font-size: 12px; color: var(--text-secondary); margin-top: 3px;">
                              <strong>${p.team_name}</strong>
                              ${p.team_id&&p.team_id!==p.team_name?U` (${p.team_id})`:""}
                              · Record ${w}-${b}
                              ${f?(()=>{const C=t.byMatchId.get(f.match_id),$=!S&&C&&C.estimatedWaitMs>0?` · ${C.compactLabel}`:"";return U`
                                      ·
                                      <strong style="color: ${S?"var(--status-live-text)":E?"var(--status-alert-text)":"var(--text-primary)"};">
                                        ${f.assigned_mat_id?S?`LIVE Mat ${f.assigned_mat_id}`:E?`UP NEXT Mat ${f.assigned_mat_id}`:`Mat ${f.assigned_mat_id}`:"Next"}
                                        (Bout #${f.bout_number}${$})
                                      </strong>
                                    `})():""}
                            </div>
                          </div>
                          <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                            <button
                              type="button"
                              style="min-height: 34px; padding: 5px 10px; font-size: 12px;"
                              @click=${()=>this.openWrestlerProfile(p.athlete_id)}
                            >
                              Profile
                            </button>
                            <button
                              type="button"
                              class=${_?"btn-primary":""}
                              style="min-height: 34px; padding: 5px 12px; font-size: 12px;"
                              @click=${()=>this.sync.toggleFollowAthlete(p.athlete_id)}
                            >
                              ${_?"Following ✓":"Follow"}
                            </button>
                          </div>
                        </div>
                      `})}
              </div>
            </div>
          </div>
        </div>
      </section>
    `}renderAthletePass(e,t){const i=this.sync.findAthleteNextOrActiveBout(e.athlete_id),s=this.getEtaSnapshot(),n=i?s.byMatchId.get(i.match_id):void 0,a=this.sync.findAthleteCompletedBouts(e.athlete_id),{lastEndMs:o,matchesToday:c}=kr(e,a),l=this.formatRestCountdown(o),h=Number(e.seed_rank)>0,d=a.filter(E=>E.winner_athlete_id===e.athlete_id).length,u=a.length-d;let m="",p="banner-idle",_="",f=this.getAthleteStatusText(e),g="RED",w="TBD",b="";if(i){g=i.red_athlete_id===e.athlete_id?"RED":"GREEN";const E=g==="RED"?i.green_athlete_id:i.red_athlete_id,C=this.sync.getAthlete(E);w=C?.public_display_name??(E||"Awaiting Opponent"),b=C?.team_name??"";const $=n&&n.estimatedWaitMs>0?` · ${n.shortLabel.toUpperCase()}`:"",y=za(i,this.sync.publicView().bouts,n);if(y==="IN_PROGRESS"){const I=this.getBoutClockView(i);m="pass-live",p="banner-live",_="eta-live",f=`MAT ${i.assigned_mat_id} ACTIVE · P${i.period_number} ${I.formattedClock} · ${i.red_score}-${i.green_score}`}else y==="READY_UP_NEXT"?(m="pass-urgent",p="banner-urgent",_="eta-urgent",f=`REPORT TO MAT ${i.assigned_mat_id} · UP NEXT${$}`):y==="ON_DECK"?(m="pass-ondeck",p="banner-ondeck",_="eta-ondeck",f=`MAT ${i.assigned_mat_id} · ON DECK${$}`):y==="IN_THE_HOLE"?(p="banner-hole",f=`MAT ${i.assigned_mat_id} · IN THE HOLE${$}`):i.assigned_mat_id>0?f=`MAT ${i.assigned_mat_id} · SCHEDULED${$}`:E?(p="banner-hole",f=`NEXT BOUT #${i.bout_number}${$}`):(p="banner-hole",f=`ADVANCING · BOUT #${i.bout_number} (AWAITING OPPONENT)`)}else if(a.length>0){const E=new Map(this.sync.publicView().bouts.map($=>[$.match_id,$]));a.some($=>{const y=$.winner_athlete_id===e.athlete_id?$.winner_next_match_id:$.loser_athlete_id===e.athlete_id?$.loser_next_match_id:"";if(!y)return!1;const I=E.get(y);return!!(I&&!this.isBoutCompleted(I))})?(p="banner-hole",f=`ADVANCING · AWAITING NEXT OPPONENT (${d}W-${u}L)`):f=`COMPLETED TODAY (${d}W-${u}L)`}const A=a[a.length-1],S=n&&n.estimatedWaitMs>=6e4?this.formatEstimatedClockTime(n.estimatedStartAtMs):"";return U`
      <article class="pass-card ${m}">
        <div class="pass-banner ${p}">
          <span>${f}</span>
          ${t==="my-wrestlers"?U`
                <button
                  type="button"
                  style="min-height: 24px; padding: 2px 8px; font-size: 11px; background: var(--bg-surface); border-color: var(--border-strong); color: var(--text-primary);"
                  title="Unfollow wrestler"
                  @click=${()=>this.sync.toggleFollowAthlete(e.athlete_id)}
                >
                  Unfollow
                </button>
              `:""}
        </div>

        <div class="pass-body">
          <div class="pass-identity">
            <div>
              <h3 class="pass-name">
                <button
                  type="button"
                  class="wrestler-link-btn"
                  style="font-size: 16px; font-weight: 800;"
                  @click=${()=>this.openWrestlerProfile(e.athlete_id)}
                >
                  ${e.public_display_name}
                </button>
              </h3>
              <p class="pass-sub">
                ${e.team_name}${e.team_id&&e.team_id!==e.team_name?` (${e.team_id})`:""}
                ${e.flowrestling_id?U` · <span class="badge-flo">FLO: ${e.flowrestling_id}</span>`:""}
              </p>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 3px;">
              <span class="badge-weight">
                ${this.formatDivisionWeightLabel(e.weight_class_id,e.division_id)}${h?` · Seed #${e.seed_rank}`:""}
              </span>
              <span style="font-size: 12px; font-weight: 700; color: var(--text-secondary);">Record: ${d}-${u}</span>
            </div>
          </div>

          ${i?U`
                ${n?U`
                      <div
                        class="eta-callout-row ${_}"
                        data-eta-card-match-id=${i.match_id}
                        data-eta-reason=${n.governingReason}
                      >
                        <div class="eta-callout-main">
                          <span class="eta-eyebrow">Estimated Time Till Next Match</span>
                          <div class="eta-value-line">
                            <time
                              class="eta-primary-value"
                              datetime=${n.isoDuration}
                              data-eta-match-id=${i.match_id}
                              data-eta-wait-ms=${String(n.estimatedWaitMs)}
                            >
                              ${n.shortLabel}
                            </time>
                            ${n.estimatedWaitMs>=6e4?U`<span class="eta-window-pill" title="Bounded wait-time window">${n.rangeLabel}</span>`:""}
                          </div>
                        </div>
                        <div class="eta-callout-meta">
                          <span>${n.contextLabel}</span>
                          <span>
                            ${S?`Est. start ${S} · ${s.pace.formattedPaceShort}`:s.pace.formattedPaceShort}
                          </span>
                        </div>
                      </div>
                    `:""}

                <div class="callout-tiles">
                  <div class="tile">
                    <span class="tile-label">Mat</span>
                    <span class="tile-val tile-mat">
                      ${i.assigned_mat_id?`Mat ${i.assigned_mat_id}`:"TBD"}
                    </span>
                  </div>
                  <div
                    class="tile"
                    style="cursor: pointer;"
                    title="View bout in bracket tree"
                    @click=${()=>this.jumpToBracketNode(i)}
                  >
                    <span class="tile-label">Bout</span>
                    <span class="tile-val" style="text-decoration: underline; text-underline-offset: 2px;">#${i.bout_number}</span>
                  </div>
                  <div class="tile">
                    <span class="tile-label">Ankle Band</span>
                    <span class="tile-val ${g==="RED"?"corner-red":"corner-green"}">
                      ${g==="RED"?"Red":"Green"}
                    </span>
                  </div>
                </div>

                <div class="opponent-bar">
                  <div style="min-width: 0; flex: 1;">
                    <span style="color: var(--text-muted); font-size: 11px; font-weight: 700; display: block;">
                      ${i.round_label}
                    </span>
                    <strong>
                      vs
                      ${(()=>{const E=g==="RED"?i.green_athlete_id:i.red_athlete_id,C=this.sync.getAthlete(E);return C?U`
                            <button
                              type="button"
                              class="wrestler-link-btn"
                              @click=${()=>this.openWrestlerProfile(C.athlete_id)}
                            >
                              ${w}
                            </button>
                          `:w})()}
                    </strong>
                    ${b?U`<span style="color: var(--text-secondary); font-size: 12px;"> · ${b}</span>`:""}
                  </div>
                  ${i.assigned_mat_id?U`
                        <button
                          type="button"
                          class="btn-primary"
                          style="min-height: 30px; padding: 4px 10px; font-size: 12px;"
                          @click=${()=>this.jumpToMat(i.assigned_mat_id)}
                        >
                          Open Mat ${i.assigned_mat_id}
                        </button>
                      `:""}
                </div>
              `:""}

          <div class="pass-footer">
            <span class=${l.ready?"rest-ok":"rest-wait"}>${l.label}</span>
            <span>Daily matches: <strong>${c}/6</strong></span>
            ${A?U`
                  <span>
                    Last:
                    <span class=${A.winner_athlete_id===e.athlete_id?"win-tag":"loss-tag"}>
                      ${A.winner_athlete_id===e.athlete_id?"W":"L"}
                      ${A.win_type?` (${A.win_type})`:""}
                    </span>
                  </span>
                `:""}
          </div>
        </div>
      </article>
    `}renderMatsTab(){const e=this.sync.publicView(),t=this.getEtaSnapshot(),i=e.bouts.reduce((o,c)=>Math.max(o,c.assigned_mat_id||0),0),s=Math.min(20,Math.max(0,e.mat_count,i,...e.mats.map(o=>o.mat_id))),n=Array.from({length:s},(o,c)=>c+1),a=this.selectedMatFilter==="ALL"?n:[this.selectedMatFilter];return U`
      <section aria-label="Live Mat Scoreboards and Queues">
        <div class="pill-strip" aria-label="Select Mat Filter">
          <button
            type="button"
            class="pill-btn ${this.selectedMatFilter==="ALL"?"active":""}"
            @click=${()=>{this.selectedMatFilter="ALL"}}
          >
            All Mats (${s})
          </button>
          ${n.map(o=>U`
              <button
                type="button"
                class="pill-btn ${this.selectedMatFilter===o?"active":""}"
                @click=${()=>{this.selectedMatFilter=o}}
              >
                Mat ${o}
              </button>
            `)}
        </div>

        ${s>0&&e.bouts.length>0?this.renderPaceSummaryBar(t):""}

        ${s===0?U`
              <div class="finder-card">
                <p style="margin: 0; color: var(--text-secondary);">
                  No mats active yet. Connect to a tournament to view live mat scoreboards.
                </p>
              </div>
            `:U`
              <div class="mats-grid">
                ${a.map(o=>{const c=e.bouts.filter(p=>p.assigned_mat_id===o).sort(ri),l=c.filter(p=>!this.isBoutCompleted(p)),h=l.find(p=>p.lifecycle===M.InProgress||p.clock_running)??l.find(p=>p.lifecycle===M.Ready)??l[0]??c[c.length-1],d=l.filter(p=>p.match_id!==h?.match_id).slice(0,4),m=((t.pace.matAvgCycleMs.get(o)??t.pace.learnedAvgCycleMs)/6e4).toFixed(1);return U`
                    <div class="mat-card">
                      <div class="mat-header">
                        <h3>Mat ${o}</h3>
                        <span style="font-size: 12px; font-weight: 600; color: var(--text-muted);">
                          ${l.length} scheduled · ~${m}m/bout
                        </span>
                      </div>

                      ${h?this.renderActiveMatScoreboard(h,e.boutEventlogs.get(h.match_id)):U`
                            <div
                              style="padding: 12px; border-radius: 6px; border: 1px dashed var(--border-strong); text-align: center; font-size: 12px; color: var(--text-muted);"
                            >
                              No bout assigned to Mat ${o}
                            </div>
                          `}

                      <div style="display: grid; gap: 6px;">
                        <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted);">
                          Mat Queue
                        </div>
                        ${d.length===0?U`<div style="font-size: 12px; color: var(--text-muted);">No additional bouts queued.</div>`:d.map((p,_)=>this.renderMatQueueCard(p,_,t))}
                      </div>
                    </div>
                  `})}
              </div>
            `}
      </section>
    `}renderActiveMatScoreboard(e,t){const i=this.sync.getAthlete(e.red_athlete_id),s=this.sync.getAthlete(e.green_athlete_id),n=this.sync.watchedAthleteIds.has(e.red_athlete_id)||this.sync.watchedAthleteIds.has(e.green_athlete_id),a=this.getBoutClockView(e),o=a.state==="RUNNING"?"#047857":a.state==="ENDED"?"#334155":"#b45309";let c,l=a.stateLabel;return a.state==="RUNNING"?c="ACTIVE":a.state==="ENDED"?c=`FINAL${e.win_type?` (${e.win_type})`:""}`:a.state==="EXPIRED"?c="PERIOD EXPIRED":e.lifecycle===M.Ready?c="READY AT MAT":e.lifecycle===M.InProgress?c="CLOCK STOPPED":(c="SCHEDULED",l=c),U`
      <div class="live-scoreboard ${a.countingDown?"is-running":""} ${n?"scoreboard-watched":""}">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; flex-wrap: wrap; font-size: 11px;">
          <strong style="color: ${a.countingDown?"var(--status-live-text)":"var(--text-secondary)"};">
            ${c} · BOUT #${e.bout_number}
          </strong>
          <span
            data-bout-clock-id=${e.match_id}
            data-clock-state=${a.state}
            data-clock-running=${a.countingDown?"true":"false"}
            data-clock-resync-count=${String(a.resyncCount)}
            style="background: var(--bg-elevated); padding: 2px 7px; border-radius: 4px; font-weight: 700; font-variant-numeric: tabular-nums; display: inline-flex; align-items: center; gap: 6px;"
          >
            <span>${this.formatDivisionWeightLabel(e.weight_class_id,e.division_id)} · P${e.period_number} · ${a.formattedClock}</span>
            <span
              style="background: ${o}; color: #fff; padding: 1px 5px; border-radius: 3px; font-size: 10px; letter-spacing: 0.03em;"
            >
              ${l}
            </span>
          </span>
        </div>
        <div class="score-row">
          <div style="min-width: 0; flex: 1;">
            <span class="corner-red">RED</span>
            ${i?U`
                  <button
                    type="button"
                    class="wrestler-link-btn"
                    style="margin-left: 6px;"
                    @click=${()=>this.openWrestlerProfile(i.athlete_id)}
                  >
                    ${i.public_display_name}
                  </button>
                `:U`<strong style="margin-left: 6px;">${e.red_athlete_id}</strong>`}
            <div style="font-size: 11px; color: var(--text-secondary);">${i?.team_name??""}</div>
          </div>
          <span class="score-digits">${e.red_score}</span>
        </div>
        <div class="score-row">
          <div style="min-width: 0; flex: 1;">
            <span class="corner-green">GRN</span>
            ${s?U`
                  <button
                    type="button"
                    class="wrestler-link-btn"
                    style="margin-left: 6px;"
                    @click=${()=>this.openWrestlerProfile(s.athlete_id)}
                  >
                    ${s.public_display_name}
                  </button>
                `:U`<strong style="margin-left: 6px;">${e.green_athlete_id}</strong>`}
            <div style="font-size: 11px; color: var(--text-secondary);">${s?.team_name??""}</div>
          </div>
          <span class="score-digits">${e.green_score}</span>
        </div>
        ${t?.length?U`
          <details class="bout-log">
            <summary>Play-by-play</summary>
            ${Sr(t)}
          </details>`:""}
      </div>
    `}renderMatQueueCard(e,t,i=this.getEtaSnapshot()){const s=this.sync.getAthlete(e.red_athlete_id),n=this.sync.getAthlete(e.green_athlete_id),a=this.sync.watchedAthleteIds.has(e.red_athlete_id)||this.sync.watchedAthleteIds.has(e.green_athlete_id),o=i.byMatchId.get(e.match_id),c=t===0?"ON DECK":t===1?"IN THE HOLE":`QUEUE #${t+1}`;return U`
      <div class="queue-item ${a?"queue-item-watched":""}">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; font-size: 11px; font-weight: 700;">
          <span style="color: ${t===0?"var(--status-warn-text)":"var(--text-secondary)"}; display: inline-flex; align-items: center; gap: 6px;">
            <span>${c}</span>
            ${o?U`
                  <time
                    class="eta-queue-badge"
                    datetime=${o.isoDuration}
                    data-queue-eta-match-id=${e.match_id}
                    title=${o.rangeLabel}
                  >
                    ${o.shortLabel}
                  </time>
                `:""}
          </span>
          <span style="color: var(--text-muted);">
            #${e.bout_number} · ${this.formatDivisionWeightLabel(e.weight_class_id,e.division_id)}
          </span>
        </div>
        <div style="display: flex; justify-content: space-between; gap: 6px; font-size: 12px;">
          <span>
            <span class="corner-red">R</span>
            ${s?U`
                  <button
                    type="button"
                    class="wrestler-link-btn"
                    @click=${()=>this.openWrestlerProfile(s.athlete_id)}
                  >
                    ${s.public_display_name}
                  </button>
                `:U`<strong>TBD</strong>`}
          </span>
          <span style="color: var(--text-muted);">vs</span>
          <span>
            <span class="corner-green">G</span>
            ${n?U`
                  <button
                    type="button"
                    class="wrestler-link-btn"
                    @click=${()=>this.openWrestlerProfile(n.athlete_id)}
                  >
                    ${n.public_display_name}
                  </button>
                `:U`<strong>TBD</strong>`}
          </span>
        </div>
      </div>
    `}async toggleBracketLog(e){if(this.highlightedMatchId===e)return this.closeBracketLog();if(this.highlightedMatchId=e,await this.updateComplete,this.highlightedMatchId!==e)return;const t=this.querySelector("#bracket-bout-log-title");t?.closest(".bout-log")?.scrollIntoView({block:"center"}),t?.focus({preventScroll:!0})}async closeBracketLog(){const e=this.querySelector('.bracket-log-button[aria-pressed="true"]');this.highlightedMatchId="",await this.updateComplete,e?.focus()}renderBracketsTab(){const e=this.sync.publicView(),t=this.availableDivisions(),i=this.bracketGroups().filter(d=>this.selectedBracketDivision==="ALL"||d.division===this.selectedBracketDivision),s=[...new Set(i.map(d=>d.weight))].sort((d,u)=>Number(d)-Number(u)),n=s.length?s:[...Un],a=i.filter(d=>d.weight===this.selectedBracketWeight).map(d=>({...d,bouts:d.bouts.filter(u=>{const m=!u.is_consolation&&(!u.is_placement_bout||u.placement_rank===1);return this.selectedBracketView==="ALL"||(this.selectedBracketView==="CHAMPIONSHIP"?m:!m)})})).filter(d=>d.bouts.length>0),o=a.flatMap(d=>d.bouts),c=o.find(d=>d.match_id===this.highlightedMatchId),l=c&&e.boutEventlogs.get(c.match_id),h=o.some(d=>this.sync.watchedAthleteIds.has(d.red_athlete_id)||this.sync.watchedAthleteIds.has(d.green_athlete_id));return U`
      <section class="bracket-browser" aria-label="Weight Class Brackets">
        <div class="bracket-selection-bar">
          ${this.hasMultipleOrNonDefaultDivisions()?U`
            <select aria-label="Bracket division" .value=${this.selectedBracketDivision}
              @change=${d=>{this.selectedBracketDivision=d.target.value,this.highlightedMatchId="",this.resetBracketTransforms()}}>
              <option value="ALL" ?selected=${this.selectedBracketDivision==="ALL"}>All divisions</option>
              ${t.map(d=>U`<option value=${d} ?selected=${this.selectedBracketDivision===d}>${d}</option>`)}
            </select>`:""}
          <div class="bracket-weight-tabs" aria-label="Select Weight Class">
            ${n.map(d=>U`
              <button type="button" class="bracket-weight-tab ${this.selectedBracketWeight===d?"active":""}"
                aria-pressed=${this.selectedBracketWeight===d}
                @click=${()=>{this.selectedBracketWeight=d,this.highlightedMatchId="",this.resetBracketTransforms()}}>${d} lbs</button>`)}
          </div>
        </div>
        <div class="bracket-toolbar" aria-label="Bracket Controls">
          <div class="bracket-view-tabs" aria-label="Bracket view">
            ${["ALL","CHAMPIONSHIP","CONSOLATION"].map(d=>U`
              <button type="button" class=${this.selectedBracketView===d?"active":""}
                aria-pressed=${this.selectedBracketView===d}
                @click=${()=>{this.selectedBracketView=d,this.resetBracketTransforms()}}>${d==="ALL"?"Full bracket":d==="CHAMPIONSHIP"?"Championship":"Consolation"}</button>`)}
          </div>
          ${h?U`
            <button type="button" id="btn-bracket-center-followed"
              @click=${()=>this.centerBracketOnFollowedWrestler(o)}>Find followed wrestler</button>`:""}
        </div>
        ${a.length===0?U`
          <p class="bracket-empty">No ${this.selectedBracketView==="CONSOLATION"?"consolation ":""}bouts scheduled for ${this.selectedBracketWeight||"106"} lbs.</p>
        `:a.map(d=>this.renderBracketCanvas(d,a.length>1,e.boutEventlogs))}
        ${c&&l?.length?U`
          <section class="bout-log" aria-labelledby="bracket-bout-log-title">
            <div class="bout-log-heading">
              <h3 id="bracket-bout-log-title" tabindex="-1">Bout ${c.bout_number} play-by-play</h3>
              <button type="button" @click=${this.closeBracketLog}>Close</button>
            </div>
            ${Sr(l)}
          </section>`:""}
      </section>
    `}renderBracketCanvas(e,t,i){const s=JSON.stringify([e.id,e.division,e.weight,this.selectedBracketView]),n=`${e.division} ${e.weight} lbs`,a=this.computeBracketTreeLayout(e.bouts),o=Math.min(1,672/Math.max(a.width,a.height)),c=this.bracketViewportKey===s?{x:this.bracketPanX,y:this.bracketPanY,scale:this.bracketScale}:this.bracketTransforms.get(s)??He,l=h=>d=>{const u=d.currentTarget.closest(".bracket-canvas")?.querySelector(".bracket-viewport");u&&(this.activateBracketViewport(u),h(u))};return U`
        <section class="bracket-group">
          <h3 class="bracket-group-title ${t?"":"bracket-print-only"}">${n}</h3>
          <div class="bracket-canvas">
            <div class="bracket-viewport" role="region" tabindex="0" data-bracket-key=${s}
              aria-label="${n} Pan and Zoom Bracket Tree"
              @keydown=${this.handleBracketKeyDown}
              @pointerdown=${this.handleBracketPointerDown}
              @pointermove=${this.handleBracketPointerMove}
              @pointerup=${this.handleBracketPointerUp}
              @pointercancel=${this.handleBracketPointerUp}
              @wheel=${this.handleBracketWheel}>
              <div class="bracket-stage ${o<.85?"print-by-round":""}"
                style="--print-scale: ${o}; width: ${a.width}px; height: ${a.height}px; transform: translate3d(${c.x}px, ${c.y}px, 0) scale(${c.scale});">
                <svg class="bracket-svg-layer" width=${a.width} height=${a.height}
                  viewBox="0 0 ${a.width} ${a.height}" aria-hidden="true">
                  ${a.edges.map(h=>dn`
                    <path class="bracket-edge ${h.isCompleted?"edge-completed":""} ${h.isWatchedPath?"edge-watched":""}" d=${h.d} />`)}
                </svg>
                ${a.banners.map(h=>U`
                  <div class="bracket-section-banner" style="left: ${h.x}px; top: ${h.y}px;">${h.title}</div>
                  ${h.rounds.map(d=>U`
                    <div class="bracket-round">
                      <div class="bracket-col-header" style="left: ${d.x}px; top: ${d.y}px; width: ${d.width}px;">${d.title}</div>
                      ${d.nodes.map(u=>this.renderBracketTreeNode(u,i.has(u.bout.match_id)))}
                    </div>`)}`)}
              </div>
            </div>
            <div class="bracket-canvas-hint">Drag to move. Scroll to zoom.</div>
            <div class="bracket-zoom-controls" aria-label="Bracket zoom">
              <button type="button" @click=${l(h=>this.fitBracketToViewport(h))}>Fit bracket</button>
              <button type="button" class="bracket-zoom-step" aria-label="Zoom out bracket" @click=${l(h=>this.zoomBracketBy(h,-.15))}>−</button>
              <button type="button" class="bracket-zoom-readout" aria-label="Reset bracket to actual size"
                title="Reset zoom to 100%"
                @click=${l(()=>{this.bracketPanX=He.x,this.bracketPanY=He.y,this.bracketScale=He.scale})}>${Math.round(c.scale*100)}%</button>
              <button type="button" class="bracket-zoom-step" aria-label="Zoom in bracket" @click=${l(h=>this.zoomBracketBy(h,.15))}>+</button>
            </div>
          </div>
        </section>
    `}renderBracketTreeNode(e,t){const i=e.bout,s=this.sync.getAthlete(i.red_athlete_id),n=this.sync.getAthlete(i.green_athlete_id),a=this.isBoutCompleted(i),o=i.lifecycle===M.InProgress||i.clock_running,c=this.sync.watchedAthleteIds.has(i.red_athlete_id)||this.sync.watchedAthleteIds.has(i.green_athlete_id),l=!i.is_bye&&(a||o||i.red_score>0||i.green_score>0),h=i.winner_athlete_id||(a&&i.red_score!==i.green_score?i.red_score>i.green_score?i.red_athlete_id:i.green_athlete_id:""),d=i.round_label.replace("1st Place Championship Final","Final").replace(/^Championship /,"").replace(/^Consolation /,"Cons. ").replace(" (Crossover)",""),u=!a&&!o&&!i.is_bye?this.getBoutEta(i.match_id):void 0,m=o?`LIVE · Mat ${i.assigned_mat_id||"?"}`:a?i.is_bye?"BYE":i.win_type||"FINAL":i.assigned_mat_id?u?`Mat ${i.assigned_mat_id} · ${u.compactLabel}`:`Mat ${i.assigned_mat_id}`:u?u.compactLabel:"",p=(_,f)=>{const g=!!(_&&a&&h===_.athlete_id),w=!!(_&&this.sync.watchedAthleteIds.has(_.athlete_id)),b=_?.public_display_name.trim().split(/\s+/)||[],A=b.length>1?`${b[0][0]}. ${b.slice(1).join(" ")}`:b[0]||(i.is_bye?"BYE":"TBD"),S=U`
        <span class="slot-seed">${_&&_.seed_rank>0?_.seed_rank:"–"}</span>
        <span class="slot-name">${A}</span>
        <span class="slot-school">${_?.team_id||""}</span>
        <strong class="slot-score">${l?f:""}</strong>
      `;return _?U`
        <button type="button"
          class="bracket-slot is-clickable ${g?"slot-winner":a?"slot-loser":""} ${w?"slot-followed":""}"
          title="${_.public_display_name} · ${_.team_name}${g?" · Winner":""}"
          @click=${E=>{E.stopPropagation(),!(this.bracketPointerMoved&&E.detail>0)&&this.openWrestlerProfile(_.athlete_id)}}>${S}</button>
      `:U`<div class="bracket-slot slot-placeholder">${S}</div>`};return U`
      <div class="bracket-tree-node ${i.is_placement_bout?"node-final":""} ${o?"node-live":""} ${c?"node-followed":""} ${this.highlightedMatchId===i.match_id?"node-highlighted":""}"
        data-match-id=${i.match_id}
        aria-label="Bout ${i.bout_number} · ${i.round_label} · ${m}"
        style="left: ${e.x}px; top: ${e.y}px; width: ${e.width}px; height: ${e.height}px;">
        <div class="bracket-node-meta" title=${i.round_label}>
          <span class="bracket-bout-label">${i.is_placement_bout?U`<svg class="bracket-trophy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 3h8v7a4 4 0 0 1-8 0V3ZM8 5H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4M12 14v6m-4 1h8"/></svg>`:""}#${i.bout_number} · ${d}</span>
          <span class="bracket-node-status">${m}</span>
          ${t?U`<button type="button" class="bracket-log-button"
            aria-label="Play-by-play for bout ${i.bout_number}"
            aria-pressed=${this.highlightedMatchId===i.match_id}
            @click=${()=>this.toggleBracketLog(i.match_id)}>Log</button>`:""}
        </div>
        ${p(s,i.red_score)}
        ${p(n,i.green_score)}
      </div>
    `}renderWrestlerProfileTab(){const e=this.sync.publicView(),t=this.selectedProfileAthleteId,i=t?this.sync.getAthlete(t):void 0;if(!i)return U`
        <section class="profile-shell" aria-label="Wrestler Profile">
          <div style="margin-bottom: 12px;">
            <button type="button" @click=${()=>this.closeWrestlerProfile()}>
              ← Back to Tournament
            </button>
          </div>
          <div class="finder-card">
            <h2 class="section-title">Wrestler Not Found</h2>
            <p style="margin: 6px 0 0; color: var(--text-secondary);">
              No wrestler record found for ID <code>${t||"unknown"}</code> in the current roster.
            </p>
          </div>
        </section>
      `;const s=this.sync.watchedAthleteIds.has(i.athlete_id),n=this.sync.isFollowingTeam(i.team_id),a=Number(i.seed_rank)>0,o=this.sync.findAthleteNextOrActiveBout(i.athlete_id),c=this.sync.findAthleteCompletedBouts(i.athlete_id),{lastEndMs:l,matchesToday:h}=kr(i,c),d=this.formatRestCountdown(l),u=e.bouts.filter(E=>!lt(E)&&!this.isBoutCompleted(E)&&(E.red_athlete_id===i.athlete_id||E.green_athlete_id===i.athlete_id)).sort((E,C)=>E.bout_number-C.bout_number),m=[...c,...u];let p=0,_=0,f=0,g=0,w=0,b=0;for(const E of c)if((E.winner_athlete_id||(E.red_score>E.green_score?E.red_athlete_id:E.green_score>E.red_score?E.green_athlete_id:""))===i.athlete_id){p+=1;const $=E.is_consolation?1:2,y=(E.win_type||"").toUpperCase();let I=0;y==="FALL"||y==="FORFEIT"||y==="INJURY_DEFAULT"||y==="DQ"?(I=2,f+=1):y==="TF"||y==="TECHNICAL_FALL"?(I=1.5,g+=1):(y==="MD"||y==="MAJOR_DECISION")&&(I=1,w+=1),b+=$+I}else _+=1;const A=(i.flowrestling_id||"").replace(/[^0-9a-zA-Z_-]/g,""),S=A?`https://www.flowrestling.org/search?q=${encodeURIComponent(i.public_display_name+" "+A)}`:"";return U`
      <section class="profile-shell" aria-label="Wrestler Profile: ${i.public_display_name}">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
          <button
            type="button"
            id="btn-profile-back"
            @click=${()=>this.closeWrestlerProfile()}
          >
            ← Back
          </button>
          <button
            type="button"
            id="btn-profile-view-bracket"
            @click=${()=>{this.selectedBracketWeight=i.weight_class_id,this.selectedBracketDivision=(i.division_id||"ALL").toUpperCase(),this.selectedBracketView="ALL",this.navigateToTab("brackets");const E=o??c.at(-1)??u.at(-1);E&&(this.highlightedMatchId=E.match_id)}}
          >
            View ${i.weight_class_id} lbs Bracket Tree →
          </button>
        </div>

        <article class="profile-hero-card">
          <div class="profile-hero-top">
            <div>
              <h2 class="profile-name">${i.public_display_name}</h2>
              <p class="profile-school-line">
                <strong>${i.team_name}</strong>
                ${i.team_id&&i.team_id!==i.team_name?U` <span style="color: var(--text-muted);">(${i.team_id})</span>`:""}
              </p>
              <div class="profile-badges">
                <span class="badge-weight">
                  ${this.formatDivisionWeightLabel(i.weight_class_id,i.division_id)}
                </span>
                ${a?U`<span class="badge-weight" style="background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong);">Seed #${i.seed_rank}</span>`:""}
                ${i.flowrestling_id?U`
                      <a
                        class="badge-flo"
                        href=${S}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open FloWrestling profile lookup"
                      >
                        FloWrestling #${i.flowrestling_id} ↗
                      </a>
                    `:""}
              </div>
            </div>

            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button
                type="button"
                id="btn-profile-follow-athlete"
                class=${s?"btn-primary":""}
                @click=${()=>this.sync.toggleFollowAthlete(i.athlete_id)}
              >
                ${s?"Following Wrestler ✓":"Follow Wrestler"}
              </button>
              <button
                type="button"
                id="btn-profile-follow-team"
                @click=${()=>this.sync.toggleFollowTeam(i.team_id)}
              >
                ${n?`Following ${i.team_name} ✓`:`Follow ${i.team_name}`}
              </button>
              <button
                type="button"
                id="btn-profile-school-roster"
                @click=${()=>{this.selectedTeamFilter=i.team_id,this.searchQuery="",this.selectedWeightFilter="ALL",this.selectedDivisionFilter="ALL",this.navigateToTab("my-wrestlers")}}
              >
                School Roster
              </button>
            </div>
          </div>

          <div class="profile-kpi-strip">
            <div class="profile-kpi">
              <span class="profile-kpi-label">Tournament Record</span>
              <span class="profile-kpi-val">${p}-${_}</span>
            </div>
            <div class="profile-kpi">
              <span class="profile-kpi-label">Bonus Wins</span>
              <span class="profile-kpi-val" style="font-size: 14px;">
                ${f} Fall · ${g} TF · ${w} MD
              </span>
            </div>
            <div class="profile-kpi">
              <span class="profile-kpi-label">Team Points Scored</span>
              <span class="profile-kpi-val" style="color: var(--brand);">${b.toFixed(1)} pts</span>
            </div>
            <div class="profile-kpi">
              <span class="profile-kpi-label">NFHS Rest &amp; Daily Limit</span>
              <span class="profile-kpi-val" style="font-size: 13px; color: ${d.ready?"var(--status-live-text)":"var(--status-warn-text)"};">
                ${d.label} (${h}/6)
              </span>
            </div>
          </div>
        </article>

        ${o?U`
              <div style="margin-bottom: 14px;">
                <h3 class="section-title" style="margin-bottom: 8px;">Current / Next Mat Callout</h3>
                ${this.renderAthletePass(i,"wrestler-profile")}
              </div>
            `:""}

        <div class="finder-card">
          <div class="section-header" style="margin-bottom: 10px;">
            <h3 class="section-title">Tournament Match History &amp; Schedule (${m.length})</h3>
          </div>

          ${m.length===0?U`
                <p style="margin: 0; color: var(--text-muted); font-size: 13px;">
                  No bouts scheduled for ${i.public_display_name} yet.
                </p>
              `:U`
                <div class="profile-bouts-list">
                  ${m.map(E=>{const C=E.red_athlete_id===i.athlete_id,$=C?E.green_athlete_id:E.red_athlete_id,y=this.sync.getAthlete($),I=y?.public_display_name??($||"TBD"),D=y?.team_name??"",x=this.isBoutCompleted(E),v=E.lifecycle===M.InProgress||E.clock_running,R=C?E.red_score:E.green_score,k=C?E.green_score:E.red_score,T=E.winner_athlete_id||(x&&E.red_score>E.green_score?E.red_athlete_id:x&&E.green_score>E.red_score?E.green_athlete_id:""),O=x&&T===i.athlete_id;return U`
                      <div class="profile-bout-row">
                        <div style="min-width: 0; flex: 1;">
                          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 12px;">
                            <strong>Bout #${E.bout_number} · ${E.round_label}</strong>
                            <span class="corner-pill ${C?"corner-red-pill":"corner-green-pill"}">
                              ${C?"RED ANKLE":"GREEN ANKLE"}
                            </span>
                            ${x?U`
                                  <span class=${O?"win-tag":"loss-tag"}>
                                    ${O?"WIN":"LOSS"}
                                    ${E.win_type?` (${E.win_type})`:""}
                                    · ${R}-${k}
                                  </span>
                                `:v?U`
                                    <span style="color: var(--status-live-text); font-weight: 800;">
                                      LIVE ON MAT ${E.assigned_mat_id} · ${R}-${k}
                                    </span>
                                  `:U`
                                    <span style="color: var(--text-muted); font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
                                      <span>${E.assigned_mat_id?`Scheduled · Mat ${E.assigned_mat_id}`:"Scheduled · Mat TBD"}</span>
                                      ${(()=>{const P=this.getBoutEta(E.match_id);return P?U`
                                              <time
                                                class="eta-queue-badge"
                                                datetime=${P.isoDuration}
                                                title=${P.contextLabel}
                                              >
                                                ${P.shortLabel}
                                              </time>
                                            `:""})()}
                                    </span>
                                  `}
                          </div>
                          <div style="margin-top: 4px; font-size: 13px;">
                            vs
                            ${y?U`
                                  <button
                                    type="button"
                                    class="wrestler-link-btn"
                                    @click=${()=>this.openWrestlerProfile(y.athlete_id)}
                                  >
                                    ${I}
                                  </button>
                                `:U`<strong>${I}</strong>`}
                            ${D?U`<span style="color: var(--text-secondary);"> · ${D}</span>`:""}
                          </div>
                        </div>

                        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                          ${!x&&E.assigned_mat_id?U`
                                <button
                                  type="button"
                                  style="min-height: 30px; padding: 4px 10px; font-size: 12px;"
                                  @click=${()=>this.jumpToMat(E.assigned_mat_id)}
                                >
                                  Mat ${E.assigned_mat_id}
                                </button>
                              `:""}
                          <button
                            type="button"
                            style="min-height: 30px; padding: 4px 10px; font-size: 12px;"
                            @click=${()=>this.jumpToBracketNode(E)}
                          >
                            View in Bracket →
                          </button>
                        </div>
                      </div>
                    `})}
                </div>
              `}
        </div>
      </section>
    `}renderStandingsAndQrTab(){const e=this.sync.publicView(),t=this.computeEffectiveStandings(),i=this.sync.getDirectJoinKeyUrl(),s=n=>this.athletes.find(a=>a.athlete_id===n)?.public_display_name??n;return U`
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
                  ${t.map(n=>U`
                      <tr>
                        <td style="font-weight: 700;">#${n.rank}</td>
                        <td style="font-weight: 600;">
                          ${n.team_name}
                          <span style="color: var(--text-muted); font-size: 11px;">(${n.team_id})</span>
                        </td>
                        <td class="num" style="font-weight: 800; font-size: 14px;">${n.total_points.toFixed(1)}</td>
                        <td class="num">${n.advancement_points.toFixed(1)}</td>
                        <td class="num">${n.placement_points.toFixed(1)}</td>
                        <td class="num">${n.bonus_points.toFixed(1)}</td>
                        <td class="num">${n.falls_forfeits_dq}</td>
                        <td class="num">${n.tech_falls}</td>
                        <td class="num">${n.major_decisions}</td>
                        <td class="num">${n.first_place_winners}</td>
                      </tr>
                    `)}
                </tbody>
              </table>
            </div>

            <div class="mobile-standings-list" style="margin-bottom: 16px;">
              ${t.map(n=>U`
                  <div class="standing-row">
                    <div>
                      <strong style="font-size: 14px;">#${n.rank} ${n.team_name}</strong>
                      <div style="font-size: 11px; color: var(--text-muted);">
                        Adv ${n.advancement_points} · Place ${n.placement_points} · Bonus ${n.bonus_points} · Falls ${n.falls_forfeits_dq}
                      </div>
                    </div>
                    <span class="pts-badge">${n.total_points.toFixed(1)} pts</span>
                  </div>
                `)}
            </div>

            <div class="finder-card" style="margin-bottom: 14px;">
              <h3 class="section-title" style="margin-bottom: 6px;">Outstanding Wrestler Vote</h3>
              <p role="status" style="margin: 0 0 8px; font-size: 12px; color: var(--text-muted);">
                ${this.sync.owVoteStatusMessage}
              </p>
              <div class="roster-list" style="max-height: 320px;">
                ${e.athletes.map(n=>{const a=this.sync.owVoteTallies.get(n.athlete_id)??0,o=this.sync.owVotedAthleteId===n.athlete_id;return U`
                    <div class="roster-row ${o?"followed":""}">
                      <div>
                        <button
                          type="button"
                          class="wrestler-link-btn"
                          style="font-size: 13px;"
                          @click=${()=>this.openWrestlerProfile(n.athlete_id)}
                        >
                          ${n.public_display_name}
                        </button>
                        <div style="font-size: 11px; color: var(--text-secondary);">
                          ${n.team_name} · ${n.weight_class_id} lbs
                        </div>
                      </div>
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 12px; font-weight: 700;">${a}</span>
                        <button
                          type="button"
                          class=${o?"btn-primary":""}
                          style="min-height: 28px; padding: 4px 10px; font-size: 12px;"
                          @click=${()=>{this.sync.castOwVote(n.athlete_id)}}
                        >
                          ${o?"Voted":"Vote"}
                        </button>
                      </div>
                    </div>
                  `})}
              </div>
            </div>
          </div>

          <div>
            <div class="finder-card" style="margin-bottom: 14px;">
              <h3 class="section-title" style="margin-bottom: 8px;">Share or Switch Tournament</h3>
              <p style="margin: 0 0 10px; font-size: 12px; color: var(--text-secondary);">
                Share this link or QR code to view live brackets and mat calls.
              </p>
              <div style="display: flex; gap: 14px; flex-wrap: wrap; align-items: flex-start;">
                ${this.sync.defaultJoinQrSvg?U`
                      <div class="qr-box">
                        <img
                          src=${this.sync.defaultJoinQrSvg}
                          alt="Tournament Join QR Code"
                          width="132"
                          height="132"
                          style="display: block;"
                        />
                      </div>
                    `:""}
                <div style="flex: 1; min-width: 220px; display: grid; gap: 8px; font-size: 12px;">
                  <div>
                    <div style="color: var(--text-muted); margin-bottom: 3px; font-weight: 600;">Direct Tournament Link (Players &amp; Spectators):</div>
                    <code class="code-box">${i}</code>
                    <div style="display: flex; gap: 6px; margin-top: 6px; align-items: center; flex-wrap: wrap;">
                      <button
                        type="button"
                        style="min-height: 30px; font-size: 12px;"
                        @click=${async()=>{try{await navigator.clipboard.writeText(i),this.copyLinkStatus="Link copied"}catch{this.copyLinkStatus=i}}}
                      >
                        Copy Link
                      </button>
                      ${this.copyLinkStatus?U`<span style="color: var(--status-live-text); font-weight: 700; font-size: 11px;">${this.copyLinkStatus}</span>`:""}
                    </div>
                  </div>

                  <div style="padding-top: 6px; border-top: 1px solid var(--border-subtle); font-size: 11px; color: var(--text-muted);">
                    Tournament staff:
                    <a
                      href=${this.sync.getDirectOfficialsUrl()}
                      style="color: var(--brand); font-weight: 700; text-decoration: none;"
                    >
                      Officials Console ↗
                    </a>
                  </div>

                  <form
                    style="display: flex; gap: 6px; margin-top: 4px;"
                    @submit=${n=>{n.preventDefault();const a=this.sync.applyScannedTournamentJoinQr(this.qrScanInput);this.qrScanStatus=a.reason}}
                  >
                    <input
                      style="flex: 1; min-width: 0; font-size: 12px; min-height: 34px; padding: 4px 8px;"
                      .value=${this.qrScanInput}
                      @input=${n=>{this.qrScanInput=n.target.value}}
                      aria-label="Tournament join key"
                      placeholder="Enter tournament join key or link"
                      required
                    />
                    <button type="submit" class="btn-primary" style="min-height: 34px;">Connect</button>
                  </form>
                  ${this.qrScanStatus?U`<div style="color: var(--text-secondary); font-size: 11px;">${this.qrScanStatus}</div>`:""}
                </div>
              </div>
            </div>

            ${this.bouts.length?U`
                  <div class="finder-card" style="margin-bottom: 14px;" aria-label="Tournament bouts">
                    <h3 class="section-title" style="margin-bottom: 8px;">Recorded Bouts (${this.bouts.length})</h3>
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
                          ${this.bouts.map(n=>U`
                              <tr>
                                <td>${n.bout_number}</td>
                                <td>${n.assigned_mat_id||"—"}</td>
                                <td>${s(n.red_athlete_id)}</td>
                                <td>${s(n.green_athlete_id)}</td>
                                <td>
                                  ${n.lifecycle===6n||n.lifecycle===6||n.lifecycle===7n||n.lifecycle===7?s(n.winner_athlete_id):"Pending"}
                                </td>
                              </tr>
                            `)}
                        </tbody>
                      </table>
                    </div>
                  </div>
                `:""}

          </div>
        </div>
      </section>
    `}async openConnectionPanel(){this.connectionPanelOpen=!0,this.connectionCopyStatus="",await this.updateComplete,this.querySelector("#connection-panel")?.showModal()}closeConnectionPanel(){this.querySelector("#connection-panel")?.close()}connectionAge(e){return e===null?"—":e<1e3?"Just now":e<6e4?`${Math.floor(e/1e3)}s ago`:e<36e5?`${Math.floor(e/6e4)}m ago`:`${Math.floor(e/36e5)}h ago`}connectionEndpoint(e){try{return new URL(e).host}catch{return e}}renderConnectionPanel(){const e=this.sync.getConnectionStatus(this.nowEpochMs),t={WEBRTC:"Direct P2P",VENUE_RELAY:"Venue relay",COMPACT_SSE:"Live delta stream",HTTP_POLL:"API fallback",HTTP_SSE:"API fallback",NOSTR:"Public relay",BROADCAST:"Nearby tab",CACHE:"Saved copy",SNAPSHOT:"Offline snapshot",UNKNOWN:"Verified copy",DISCONNECTED:"Source disconnected",NONE:"Finding a source",P2P:"P2P"},i=l=>l.length>27?`${l.slice(0,17)}…${l.slice(-6)}`:l,s=l=>U`
      <div class="connection-peer">
        <div><strong>${{primary:"Tournament host",official:"Officials",standby:"Standby host",mat:"Mat station",spectator:"Spectator"}[l.role]??"Peer"}</strong>
          <code title=${l.peerId}>${i(l.peerId)}</code></div>
        <span class="connection-path ${l.transport==="WEBRTC"?"direct":l.transport==="VENUE_RELAY"?"relay":""}">${t[l.transport]}</span>
      </div>`,n=e.sourceConnected&&e.delivery?.kind==="COMPACT_SSE",a=e.sourceConnected&&(e.delivery?.kind==="HTTP_POLL"||e.delivery?.kind==="HTTP_SSE"),o=e.relays.filter(l=>l.state==="OPEN").length,c=new Intl.NumberFormat(void 0,{notation:"compact",maximumFractionDigits:1});return U`
      <dialog id="connection-panel" class="connection-panel" aria-labelledby="connection-title"
        @close=${l=>{l.currentTarget.open||(this.connectionPanelOpen=!1,this.querySelector("#connection-toggle")?.focus())}}
        @click=${l=>{const h=l.currentTarget,d=h.getBoundingClientRect();l.target===h&&(l.clientX<d.left||l.clientX>d.right||l.clientY<d.top||l.clientY>d.bottom)&&h.close()}}>
        ${this.connectionPanelOpen?U`
          <div class="connection-heading">
            <div><span class="connection-eyebrow">OPENMAT NETWORK</span><h2 id="connection-title">Connection</h2></div>
            <button class="connection-close" type="button" aria-label="Close connection status" @click=${this.closeConnectionPanel} autofocus>✕</button>
          </div>
          <div class="connection-route ${e.live?"connected":""}">
            <span class="connection-orbit" aria-hidden="true">${dn`<svg viewBox="0 0 32 32" fill="none"><path d="M8 21a11 11 0 0 1 16 0M4 16a17 17 0 0 1 24 0M12 26a6 6 0 0 1 8 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="29" r="1.5" fill="currentColor"/></svg>`}</span>
            <div><strong>${t[e.transport]}</strong><span>${e.live?"Receiving verified tournament data":e.verified?"Showing the last verified schedule":"Waiting for verified tournament data"}</span></div>
            <span class="connection-state">${e.live?"LIVE":e.verified?"SAVED":"CONNECTING"}</span>
          </div>
          <dl class="connection-metrics">
            <div><dt>Peer latency</dt><dd>${e.pingRttMs===null?"—":U`${Math.round(e.pingRttMs)}<small> ms</small>`}</dd></div>
            <div><dt>Last received</dt><dd>${this.connectionAge(e.ageMs)}</dd></div>
            <div><dt>Peer frames <span aria-hidden="true">↓ / ↑</span></dt><dd title="${e.framesReceived} received / ${e.framesSent} sent">${c.format(e.framesReceived)} <small>/</small> ${c.format(e.framesSent)}</dd></div>
          </dl>
          <div class="connection-topology">
            <section class="connection-hop"><h3><span class="connection-step" aria-hidden="true">↓</span>Upstream peer</h3>
              ${e.upstream?s(e.upstream):U`<p class="connection-empty">No upstream peer connected</p>`}
              ${e.delivery?U`<div class="connection-delivery">Last delivery <strong>${t[e.delivery.kind]}</strong>${e.delivery.endpoint?U` · <span title=${e.delivery.endpoint}>${this.connectionEndpoint(e.delivery.endpoint)}</span>`:""}</div>`:""}
            </section>
            <section class="connection-hop connection-self"><h3><span class="connection-step" aria-hidden="true">●</span>This device <span class="connection-you">YOU</span></h3>
              <code title=${e.peerId}>${e.peerId}</code>
            </section>
            <section class="connection-hop"><h3><span class="connection-step" aria-hidden="true">↑</span>Sharing with <span class="connection-count">${e.downstream.filter(l=>l.transport!=="DISCONNECTED").length}</span></h3>
              ${e.downstream.length?e.downstream.map(s):U`<p class="connection-empty">No devices connected to you</p>`}
            </section>
          </div>
          ${e.roomPeers.length?U`<details class="connection-details"><summary>Other peers in your room <span>${e.roomPeers.length}</span></summary><div>${e.roomPeers.map(s)}</div></details>`:""}
          <details class="connection-details">
            <summary>Fallback & discovery <span>${n?"DELTA STREAM":a?"API ACTIVE":`${o} RELAYS OPEN`}</span></summary>
            <div class="connection-source-row"><div><strong>Venue API</strong><code>${this.connectionEndpoint(e.api.origin)}</code></div><span class="connection-path ${n?"direct":a?"relay":""}">${n?"Live delta stream":a?"Active fallback":e.api.polling?"Polling":"Standby"}</span></div>
            <dl class="connection-facts"><dt>Event stream</dt><dd>${e.api.stream.toLowerCase()}</dd><dt>Last API response</dt><dd>${this.connectionAge(e.api.lastSuccessAtMs?Math.max(0,this.nowEpochMs-e.api.lastSuccessAtMs):null)}</dd></dl>
            ${e.api.error?U`<p class="connection-error">API · ${e.api.error}</p>`:""}
            ${e.relays.map(l=>U`<div class="connection-source-row"><code title=${l.url}>${this.connectionEndpoint(l.url)}</code><span class="connection-socket ${l.state==="OPEN"?"open":""}"><i></i>${l.state.toLowerCase()}</span></div>`)}
            ${e.browserOnline===!1?U`<p class="connection-error">Browser reports no network connection</p>`:""}
            ${e.p2pError?U`<p class="connection-error">Last P2P error · ${e.p2pError}</p>`:""}
          </details>
          <details class="connection-details connection-identity">
            <summary>${e.verified?"✓ Signature verified":"No verified signature"}<span>${e.verified?`REV ${e.snapshotEpoch}`:"UNVERIFIED"}</span></summary>
            <dl class="connection-facts"><dt>Publisher</dt><dd><code>${e.publisher||"Not joined"}</code></dd>
              <dt>State published</dt><dd>${this.connectionAge(e.publishedAtMs?Math.max(0,this.nowEpochMs-e.publishedAtMs):null)}</dd>
              <dt>Direct / forwarded frames sent</dt><dd>${e.rtcFramesSent} / ${e.forwardedFramesSent}</dd>
              <dt>Room reconnects</dt><dd>${e.reconnectCount}</dd>
              ${e.rooms.map(l=>U`<dt>Room broker</dt><dd><code>${l.activeBroker||"Not connected"}</code> · ${l.brokerConnected?"open":"closed"}</dd>`)}
              <dt>App version</dt><dd><code>${e.serviceWorkerVersion||"Version unavailable"}</code></dd>
            </dl>
          </details>
          <div class="connection-footer"><span>Measured on this device</span><button type="button" @click=${async()=>{try{await navigator.clipboard.writeText(JSON.stringify(this.sync.getConnectionStatus(),null,2)),this.connectionCopyStatus="Copied"}catch{this.connectionCopyStatus="Copy unavailable"}}}>${this.connectionCopyStatus||"Copy report"}</button></div>
        `:""}
      </dialog>
    `}render(){const e=this.sync.publicView(),i=this.sync.computeWatchedAthleteNotifications(this.nowEpochMs,(d,u)=>this.clockTracker.getClockView(d,u).displayedRemainingMs).find(d=>d.urgency==="READY_UP_NEXT"||d.urgency==="IN_PROGRESS"),s=this.sync.getConnectionStatus(this.nowEpochMs),n=s.live,a=!!(this.sync.envelope.signature_hex||e.bouts.length),o=!!(this.sync.pinnedPublisherPubkeyHex||this.sync.pinnedTournamentId),c=e.bouts.reduce((d,u)=>Math.max(d,u.assigned_mat_id||0),0),l=Math.min(20,Math.max(0,e.mat_count,c,...e.mats.map(d=>d.mat_id))),h=this.status?.freshness==="snapshot"?`Offline snapshot loaded · revision ${this.status.snapshotEpoch}`:n?`Connected · ${e.bouts.length} bouts across ${l} mats`:a?`Saved schedule · ${e.bouts.length} bouts`:"Enter a tournament join key or open a tournament link to view live mats and brackets.";return U`
      <main class="players-shell">
        <header class="topbar">
          <div class="topbar-left">
            <div class="topbar-status-row">
              <button id="connection-toggle" type="button" class="status-badge ${n?"live":"idle"}"
                aria-label="Connection status" aria-haspopup="dialog" aria-expanded=${this.connectionPanelOpen}
                title="View connection status" @click=${this.openConnectionPanel}>
                <span class="live-pulse"></span>
                <span>${n?"LIVE":a?"SAVED":o?"CONNECTING":"OFFLINE"}</span>
              </button>
              ${this.refreshStatusMessage||s.ageMs!==null?U`
                    <span class="freshness-pill">
                      ${this.refreshStatusMessage||`Updated ${this.connectionAge(s.ageMs).toLowerCase()}`}
                    </span>
                  `:""}
              ${a?U`
                    <span class="desktop-only-inline">
                      ${e.athletes.length} wrestlers · ${e.bouts.length} bouts · ${l} mats
                    </span>
                  `:""}
            </div>
            <h1 class="topbar-title">${this.status?.tournamentId||(a?e.tournament_name:"Join a tournament")}</h1>
          </div>
          <div class="topbar-actions">
            <button
              type="button"
              id="btn-refresh-live"
              class="btn-icon-pill btn-refresh ${this.sync.isRefreshing?"is-refreshing":""}"
              aria-disabled=${this.sync.isRefreshing?"true":"false"}
              title="Fetch latest live scores and mat calls"
              @click=${this.handleManualRefresh}
            >
              ${dn`<svg class="refresh-icon" aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><polyline points="21 3 21 9 15 9"/></svg>`}
              <span>${this.sync.isRefreshing?"Syncing":"Refresh"}</span>
            </button>
            <button
              type="button"
              id="btn-toggle-theme"
              class="btn-icon-pill"
              title="Switch between outdoor Daylight mode and Dark mode"
              @click=${this.toggleColorScheme}
            >
              <span>${this.colorScheme==="light"?"Theme: Daylight":"Theme: Dark"}</span>
            </button>
            <button
              type="button"
              class="btn-icon-pill ${this.sync.webPushState==="SUBSCRIBED_CELLULAR"?"alerts-on":""}"
              @click=${this.toggleCellularWebPush}
            >
              <span>
                ${this.sync.webPushState==="SUBSCRIBED_CELLULAR"?"Alerts: On":this.sync.webPushState==="SUBSCRIBING"?"Alerts...":"Alerts: Off"}
              </span>
            </button>
            <button
              type="button"
              class="btn-icon-pill"
              @click=${()=>this.navigateToTab("standings")}
            >
              <span>Share</span>
            </button>
          </div>
        </header>
        ${this.renderConnectionPanel()}

        <p role="status" class="sr-status">
          ${h}
          ${this.sync.webPushStatusMessage?U` · <strong>${this.sync.webPushStatusMessage}</strong>`:""}
        </p>
        ${this.error||this.status?.warning?U`<p role="alert">${this.error||this.status?.warning}</p>`:""}

        ${a?"":U`
              <div class="join-bar" aria-label="Connect to Tournament">
                <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center; justify-content: space-between;">
                  <span style="font-size: 13px; font-weight: 700;">
                    Connect to a live tournament:
                  </span>
                  <button
                    type="button"
                    class="btn-secondary"
                    style="min-height: 32px; padding: 4px 10px; font-size: 12px;"
                    @click=${()=>{const d=this.sync.applyScannedTournamentJoinQr(Pi);this.qrScanStatus=d.reason}}
                  >
                    Join ${Ka}
                  </button>
                </div>
                <form
                  class="join-bar-form"
                  @submit=${d=>{d.preventDefault();const u=this.sync.applyScannedTournamentJoinQr(this.qrScanInput);this.qrScanStatus=u.reason}}
                >
                  <input
                    .value=${this.qrScanInput}
                    @input=${d=>{this.qrScanInput=d.target.value}}
                    aria-label="Tournament join key"
                    placeholder="Paste tournament join key or link..."
                    required
                  />
                  <button type="submit" class="btn-primary">Connect</button>
                </form>
              </div>
            `}

        ${this.activeTab!=="my-wrestlers"&&i?U`
              <div class="urgent-strip">
                <span>
                  <strong>${i.athleteName}</strong>: Mat ${i.matId} (${i.corner} Ankle)
                  · ${i.urgency==="IN_PROGRESS"?"ACTIVE NOW":i.shortEtaLabel??"UP NEXT"}
                </span>
                <button
                  type="button"
                  style="min-height: 28px; padding: 3px 10px; font-size: 12px;"
                  @click=${()=>this.jumpToMat(i.matId)}
                >
                  Open Mat ${i.matId}
                </button>
              </div>
            `:""}

        <nav class="bottom-nav" aria-label="Players App Navigation">
          <button
            type="button"
            class="nav-item ${this.activeTab==="my-wrestlers"?"active":""}"
            @click=${()=>this.navigateToTab("my-wrestlers")}
          >
            <span>Wrestlers &amp; Roster (${this.sync.watchedAthleteIds.size})</span>
          </button>
          <button
            type="button"
            class="nav-item ${this.activeTab==="mats"?"active":""}"
            @click=${()=>this.navigateToTab("mats")}
          >
            <span>Mats (${l})</span>
          </button>
          <button
            type="button"
            class="nav-item ${this.activeTab==="brackets"?"active":""}"
            @click=${()=>this.navigateToTab("brackets")}
          >
            <span>Brackets</span>
          </button>
          <button
            type="button"
            class="nav-item ${this.activeTab==="standings"?"active":""}"
            @click=${()=>this.navigateToTab("standings")}
          >
            <span>Standings &amp; Share</span>
          </button>
        </nav>

        ${this.activeTab==="my-wrestlers"?this.renderMyWrestlersTab():this.activeTab==="wrestler-profile"?this.renderWrestlerProfileTab():this.activeTab==="mats"?this.renderMatsTab():this.activeTab==="brackets"?this.renderBracketsTab():this.renderStandingsAndQrTab()}
      </main>
      <a class="tap-game-link" href=${(()=>{const d=new URL(".",window.location.href);d.pathname=d.pathname.replace(/\/players\/$/,"/");const u=new URL("game/",d),m=this.sync.pinnedPublisherPubkeyHex||(this.sync.envelope.signature_hex?this.sync.envelope.publisher_pubkey_hex:""),p=this.sync.pinnedTournamentId||(this.sync.envelope.signature_hex?this.sync.envelope.tournament_id:"");if(m){const _=new URLSearchParams;p&&p!=="manual-pubkey"&&_.set("session",`game:${p}`),_.set("root",m),u.hash=_.toString()}return u.href})()} title="Tap Battle" aria-label="Play Tap Battle" style="display:block;text-align:center;font-size:10px;color:var(--muted,#8996a6);padding:8px;opacity:.6;text-decoration:none">coral · mint</a>
    `}}typeof customElements<"u"&&!customElements.get("openmat-app")&&customElements.define("openmat-app",Dd);const Fd=typeof window<"u"?window.location.pathname:"";if(/(?:^|\/)(?:officials|scorekeeper|register|feedback|game)(?:\/|$)/.test(Fd))(async()=>{try{if("serviceWorker"in navigator){const r=await navigator.serviceWorker.getRegistrations();await Promise.all(r.map(e=>e.unregister()))}if(typeof caches<"u"){const r=await caches.keys();await Promise.all(r.filter(e=>e.startsWith("openmat-players-")).map(e=>caches.delete(e)))}}catch{}window.location.reload()})();else if("serviceWorker"in navigator){const r="./offline.js",e=!!navigator.serviceWorker.controller;let t=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{!e||t||(t=!0,window.location.reload())}),navigator.serviceWorker.register(r,{updateViaCache:"none"}).then(i=>i.update().catch(()=>{})).catch(()=>{})}export{Te as C,Wd as M,ul as T,cl as _,Gd as a,il as b,Vd as c,jd as d,st as e,ae as f,qd as g,Bt as p,pl as r,ue as t,Kl as v};
