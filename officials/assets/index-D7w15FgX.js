(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();const ws=globalThis,Dn=ws.ShadowRoot&&(ws.ShadyCSS===void 0||ws.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rr=Symbol(),ei=new WeakMap;let ko=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==rr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Dn&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=ei.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ei.set(t,e))}return e}toString(){return this.cssText}};const Fo=r=>new ko(typeof r=="string"?r:r+"",void 0,rr),Do=(r,e)=>{if(Dn)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),n=ws.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,r.appendChild(s)}},ti=Dn?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Fo(t)})(r):r;const{is:So,defineProperty:Ro,getOwnPropertyDescriptor:Io,getOwnPropertyNames:To,getOwnPropertySymbols:Po,getPrototypeOf:Mo}=Object,Ls=globalThis,si=Ls.trustedTypes,$o=si?si.emptyScript:"",Lo=Ls.reactiveElementPolyfillSupport,Qt=(r,e)=>r,un={toAttribute(r,e){switch(e){case Boolean:r=r?$o:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},or=(r,e)=>!So(r,e),ni={attribute:!0,type:String,converter:un,reflect:!1,useDefault:!1,hasChanged:or};Symbol.metadata??=Symbol("metadata"),Ls.litPropertyMetadata??=new WeakMap;let vt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ni){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(e,s,t);n!==void 0&&Ro(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){const{get:n,set:i}=Io(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:n,set(o){const a=n?.call(this);i?.call(this,o),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ni}static _$Ei(){if(this.hasOwnProperty(Qt("elementProperties")))return;const e=Mo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Qt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Qt("properties"))){const t=this.properties,s=[...To(t),...Po(t)];for(const n of s)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,n]of t)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const n=this._$Eu(t,s);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const n of s)t.unshift(ti(n))}else e!==void 0&&t.push(ti(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Do(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,s);if(n!==void 0&&s.reflect===!0){const i=(s.converter?.toAttribute!==void 0?s.converter:un).toAttribute(t,s.type);this._$Em=e,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const s=this.constructor,n=s._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const i=s.getPropertyOptions(n),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:un;this._$Em=n;const a=o.fromAttribute(t,i.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(e,t,s,n=!1,i){if(e!==void 0){const o=this.constructor;if(n===!1&&(i=this[e]),s??=o.getPropertyOptions(e),!((s.hasChanged??or)(i,t)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:n,wrapped:i},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),i!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,i]of s){const{wrapped:o}=i,a=this[n];o!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,i,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};vt.elementStyles=[],vt.shadowRootOptions={mode:"open"},vt[Qt("elementProperties")]=new Map,vt[Qt("finalized")]=new Map,Lo?.({ReactiveElement:vt}),(Ls.reactiveElementVersions??=[]).push("2.1.2");const Sn=globalThis,ii=r=>r,ks=Sn.trustedTypes,ri=ks?ks.createPolicy("lit-html",{createHTML:r=>r}):void 0,ar="$lit$",tt=`lit$${Math.random().toFixed(9).slice(2)}$`,lr="?"+tt,No=`<${lr}>`,ft=document,ss=()=>ft.createComment(""),ns=r=>r===null||typeof r!="object"&&typeof r!="function",Rn=Array.isArray,Oo=r=>Rn(r)||typeof r?.[Symbol.iterator]=="function",Xs=`[ 	
\f\r]`,Ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oi=/-->/g,ai=/>/g,rt=RegExp(`>|${Xs}(?:([^\\s"'>=/]+)(${Xs}*=${Xs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),li=/'/g,ci=/"/g,cr=/^(?:script|style|textarea|title)$/i,Uo=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),G=Uo(1),pt=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),di=new WeakMap,ct=ft.createTreeWalker(ft,129);function dr(r,e){if(!Rn(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ri!==void 0?ri.createHTML(e):e}const Wo=(r,e)=>{const t=r.length-1,s=[];let n,i=e===2?"<svg>":e===3?"<math>":"",o=Ut;for(let a=0;a<t;a++){const l=r[a];let c,x,d=-1,u=0;for(;u<l.length&&(o.lastIndex=u,x=o.exec(l),x!==null);)u=o.lastIndex,o===Ut?x[1]==="!--"?o=oi:x[1]!==void 0?o=ai:x[2]!==void 0?(cr.test(x[2])&&(n=RegExp("</"+x[2],"g")),o=rt):x[3]!==void 0&&(o=rt):o===rt?x[0]===">"?(o=n??Ut,d=-1):x[1]===void 0?d=-2:(d=o.lastIndex-x[2].length,c=x[1],o=x[3]===void 0?rt:x[3]==='"'?ci:li):o===ci||o===li?o=rt:o===oi||o===ai?o=Ut:(o=rt,n=void 0);const _=o===rt&&r[a+1].startsWith("/>")?" ":"";i+=o===Ut?l+No:d>=0?(s.push(c),l.slice(0,d)+ar+l.slice(d)+tt+_):l+tt+(d===-2?a:_)}return[dr(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class is{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let i=0,o=0;const a=e.length-1,l=this.parts,[c,x]=Wo(e,t);if(this.el=is.createElement(c,s),ct.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=ct.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(ar)){const u=x[o++],_=n.getAttribute(d).split(tt),p=/([.?@])?(.*)/.exec(u);l.push({type:1,index:i,name:p[2],strings:_,ctor:p[1]==="."?Vo:p[1]==="?"?qo:p[1]==="@"?zo:Ns}),n.removeAttribute(d)}else d.startsWith(tt)&&(l.push({type:6,index:i}),n.removeAttribute(d));if(cr.test(n.tagName)){const d=n.textContent.split(tt),u=d.length-1;if(u>0){n.textContent=ks?ks.emptyScript:"";for(let _=0;_<u;_++)n.append(d[_],ss()),ct.nextNode(),l.push({type:2,index:++i});n.append(d[u],ss())}}}else if(n.nodeType===8)if(n.data===lr)l.push({type:2,index:i});else{let d=-1;for(;(d=n.data.indexOf(tt,d+1))!==-1;)l.push({type:7,index:i}),d+=tt.length-1}i++}}static createElement(e,t){const s=ft.createElement("template");return s.innerHTML=e,s}}function It(r,e,t=r,s){if(e===pt)return e;let n=s!==void 0?t._$Co?.[s]:t._$Cl;const i=ns(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(r),n._$AT(r,t,s)),s!==void 0?(t._$Co??=[])[s]=n:t._$Cl=n),n!==void 0&&(e=It(r,n._$AS(r,e.values),n,s)),e}class Ho{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,n=(e?.creationScope??ft).importNode(t,!0);ct.currentNode=n;let i=ct.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new Nt(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new Go(i,this,e)),this._$AV.push(c),l=s[++a]}o!==l?.index&&(i=ct.nextNode(),o++)}return ct.currentNode=ft,n}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class Nt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,n){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=It(this,e,t),ns(e)?e===Z||e==null||e===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==pt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Oo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&ns(this._$AH)?this._$AA.nextSibling.data=e:this.T(ft.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=is.createElement(dr(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(t);else{const i=new Ho(n,this),o=i.u(this.options);i.p(t),this.T(o),this._$AH=i}}_$AC(e){let t=di.get(e.strings);return t===void 0&&di.set(e.strings,t=new is(e)),t}k(e){Rn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,n=0;for(const i of e)n===t.length?t.push(s=new Nt(this.O(ss()),this.O(ss()),this,this.options)):s=t[n],s._$AI(i),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const s=ii(e).nextSibling;ii(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Ns{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,n,i){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Z}_$AI(e,t=this,s,n){const i=this.strings;let o=!1;if(i===void 0)e=It(this,e,t,0),o=!ns(e)||e!==this._$AH&&e!==pt,o&&(this._$AH=e);else{const a=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=It(this,a[s+l],t,l),c===pt&&(c=this._$AH[l]),o||=!ns(c)||c!==this._$AH[l],c===Z?e=Z:e!==Z&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}o&&!n&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Vo extends Ns{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}class qo extends Ns{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class zo extends Ns{constructor(e,t,s,n,i){super(e,t,s,n,i),this.type=5}_$AI(e,t=this){if((e=It(this,e,t,0)??Z)===pt)return;const s=this._$AH,n=e===Z&&s!==Z||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==Z&&(s===Z||n);n&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Go{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){It(this,e)}}const jo={I:Nt},Yo=Sn.litHtmlPolyfillSupport;Yo?.(is,Nt),(Sn.litHtmlVersions??=[]).push("3.3.3");const Qo=(r,e,t)=>{const s=t?.renderBefore??e;let n=s._$litPart$;if(n===void 0){const i=t?.renderBefore??null;s._$litPart$=n=new Nt(e.insertBefore(ss(),i),i,void 0,t??{})}return n._$AI(r),n};const In=globalThis;let Kt=class extends vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qo(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return pt}};Kt._$litElement$=!0,Kt.finalized=!0,In.litElementHydrateSupport?.({LitElement:Kt});const Ko=In.litElementPolyfillSupport;Ko?.({LitElement:Kt});(In.litElementVersions??=[]).push("4.2.2");const Jo={CHILD:2},Xo=r=>(...e)=>({_$litDirective$:r,values:e});let Zo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const{I:ea}=jo,xi=r=>r,ui=()=>document.createComment(""),Wt=(r,e,t)=>{const s=r._$AA.parentNode,n=e===void 0?r._$AB:e._$AA;if(t===void 0){const i=s.insertBefore(ui(),n),o=s.insertBefore(ui(),n);t=new ea(i,o,r,r.options)}else{const i=t._$AB.nextSibling,o=t._$AM,a=o!==r;if(a){let l;t._$AQ?.(r),t._$AM=r,t._$AP!==void 0&&(l=r._$AU)!==o._$AU&&t._$AP(l)}if(i!==n||a){let l=t._$AA;for(;l!==i;){const c=xi(l).nextSibling;xi(s).insertBefore(l,n),l=c}}}return t},ot=(r,e,t=r)=>(r._$AI(e,t),r),ta={},sa=(r,e=ta)=>r._$AH=e,na=r=>r._$AH,Zs=r=>{r._$AR(),r._$AA.remove()};const hi=(r,e,t)=>{const s=new Map;for(let n=e;n<=t;n++)s.set(r[n],n);return s},_i=Xo(class extends Zo{constructor(r){if(super(r),r.type!==Jo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let s;t===void 0?t=e:e!==void 0&&(s=e);const n=[],i=[];let o=0;for(const a of r)n[o]=s?s(a,o):o,i[o]=t(a,o),o++;return{values:i,keys:n}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,s]){const n=na(r),{values:i,keys:o}=this.dt(e,t,s);if(!Array.isArray(n))return this.ut=o,i;const a=this.ut??=[],l=[];let c,x,d=0,u=n.length-1,_=0,p=i.length-1;for(;d<=u&&_<=p;)if(n[d]===null)d++;else if(n[u]===null)u--;else if(a[d]===o[_])l[_]=ot(n[d],i[_]),d++,_++;else if(a[u]===o[p])l[p]=ot(n[u],i[p]),u--,p--;else if(a[d]===o[p])l[p]=ot(n[d],i[p]),Wt(r,l[p+1],n[d]),d++,p--;else if(a[u]===o[_])l[_]=ot(n[u],i[_]),Wt(r,n[d],n[u]),u--,_++;else if(c===void 0&&(c=hi(o,_,p),x=hi(a,d,u)),c.has(a[d]))if(c.has(a[u])){const h=x.get(o[_]),m=h!==void 0?n[h]:null;if(m===null){const E=Wt(r,n[d]);ot(E,i[_]),l[_]=E}else l[_]=ot(m,i[_]),Wt(r,n[d],m),n[h]=null;_++}else Zs(n[u]),u--;else Zs(n[d]),d++;for(;_<=p;){const h=Wt(r,l[p+1]);ot(h,i[_]),l[_++]=h}for(;d<=u;){const h=n[d++];h!==null&&Zs(h)}return this.ut=o,sa(r,l),pt}});function ia(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ys={exports:{}},ra=ys.exports,mi;function oa(){return mi||(mi=1,(function(r,e){(function(s,n){r.exports=n()})(typeof self<"u"?self:ra,function(){return(function(t){var s={};function n(i){if(s[i])return s[i].exports;var o=s[i]={i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=s,n.d=function(i,o,a){n.o(i,o)||Object.defineProperty(i,o,{configurable:!1,enumerable:!0,get:a})},n.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(o,"a",o),o},n.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},n.p="",n(n.s=3)})([(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0});var i=(function(){function o(a,l){this.width=l,this.height=a.length/l,this.data=a}return o.createEmpty=function(a,l){return new o(new Uint8ClampedArray(a*l),a)},o.prototype.get=function(a,l){return a<0||a>=this.width||l<0||l>=this.height?!1:!!this.data[l*this.width+a]},o.prototype.set=function(a,l,c){this.data[l*this.width+a]=c?1:0},o.prototype.setRegion=function(a,l,c,x,d){for(var u=l;u<l+x;u++)for(var _=a;_<a+c;_++)this.set(_,u,!!d)},o})();s.BitMatrix=i}),(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0});var i=n(2);function o(l,c){return l^c}s.addOrSubtractGF=o;var a=(function(){function l(c,x,d){this.primitive=c,this.size=x,this.generatorBase=d,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var u=1,_=0;_<this.size;_++)this.expTable[_]=u,u=u*2,u>=this.size&&(u=(u^this.primitive)&this.size-1);for(var _=0;_<this.size-1;_++)this.logTable[this.expTable[_]]=_;this.zero=new i.default(this,Uint8ClampedArray.from([0])),this.one=new i.default(this,Uint8ClampedArray.from([1]))}return l.prototype.multiply=function(c,x){return c===0||x===0?0:this.expTable[(this.logTable[c]+this.logTable[x])%(this.size-1)]},l.prototype.inverse=function(c){if(c===0)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[c]-1]},l.prototype.buildMonomial=function(c,x){if(c<0)throw new Error("Invalid monomial degree less than 0");if(x===0)return this.zero;var d=new Uint8ClampedArray(c+1);return d[0]=x,new i.default(this,d)},l.prototype.log=function(c){if(c===0)throw new Error("Can't take log(0)");return this.logTable[c]},l.prototype.exp=function(c){return this.expTable[c]},l})();s.default=a}),(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0});var i=n(1),o=(function(){function a(l,c){if(c.length===0)throw new Error("No coefficients.");this.field=l;var x=c.length;if(x>1&&c[0]===0){for(var d=1;d<x&&c[d]===0;)d++;if(d===x)this.coefficients=l.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(x-d);for(var u=0;u<this.coefficients.length;u++)this.coefficients[u]=c[d+u]}}else this.coefficients=c}return a.prototype.degree=function(){return this.coefficients.length-1},a.prototype.isZero=function(){return this.coefficients[0]===0},a.prototype.getCoefficient=function(l){return this.coefficients[this.coefficients.length-1-l]},a.prototype.addOrSubtract=function(l){var c;if(this.isZero())return l;if(l.isZero())return this;var x=this.coefficients,d=l.coefficients;x.length>d.length&&(c=[d,x],x=c[0],d=c[1]);for(var u=new Uint8ClampedArray(d.length),_=d.length-x.length,p=0;p<_;p++)u[p]=d[p];for(var p=_;p<d.length;p++)u[p]=i.addOrSubtractGF(x[p-_],d[p]);return new a(this.field,u)},a.prototype.multiply=function(l){if(l===0)return this.field.zero;if(l===1)return this;for(var c=this.coefficients.length,x=new Uint8ClampedArray(c),d=0;d<c;d++)x[d]=this.field.multiply(this.coefficients[d],l);return new a(this.field,x)},a.prototype.multiplyPoly=function(l){if(this.isZero()||l.isZero())return this.field.zero;for(var c=this.coefficients,x=c.length,d=l.coefficients,u=d.length,_=new Uint8ClampedArray(x+u-1),p=0;p<x;p++)for(var h=c[p],m=0;m<u;m++)_[p+m]=i.addOrSubtractGF(_[p+m],this.field.multiply(h,d[m]));return new a(this.field,_)},a.prototype.multiplyByMonomial=function(l,c){if(l<0)throw new Error("Invalid degree less than 0");if(c===0)return this.field.zero;for(var x=this.coefficients.length,d=new Uint8ClampedArray(x+l),u=0;u<x;u++)d[u]=this.field.multiply(this.coefficients[u],c);return new a(this.field,d)},a.prototype.evaluateAt=function(l){var c=0;if(l===0)return this.getCoefficient(0);var x=this.coefficients.length;if(l===1)return this.coefficients.forEach(function(u){c=i.addOrSubtractGF(c,u)}),c;c=this.coefficients[0];for(var d=1;d<x;d++)c=i.addOrSubtractGF(this.field.multiply(l,c),this.coefficients[d]);return c},a})();s.default=o}),(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0});var i=n(4),o=n(5),a=n(11),l=n(12);function c(u){var _=l.locate(u);if(!_)return null;for(var p=0,h=_;p<h.length;p++){var m=h[p],E=a.extract(u,m),F=o.decode(E.matrix);if(F)return{binaryData:F.bytes,data:F.text,chunks:F.chunks,version:F.version,location:{topRightCorner:E.mappingFunction(m.dimension,0),topLeftCorner:E.mappingFunction(0,0),bottomRightCorner:E.mappingFunction(m.dimension,m.dimension),bottomLeftCorner:E.mappingFunction(0,m.dimension),topRightFinderPattern:m.topRight,topLeftFinderPattern:m.topLeft,bottomLeftFinderPattern:m.bottomLeft,bottomRightAlignmentPattern:m.alignmentPattern}}}return null}var x={inversionAttempts:"attemptBoth"};function d(u,_,p,h){h===void 0&&(h={});var m=x;Object.keys(m||{}).forEach(function(w){m[w]=h[w]||m[w]});var E=m.inversionAttempts==="attemptBoth"||m.inversionAttempts==="invertFirst",F=m.inversionAttempts==="onlyInvert"||m.inversionAttempts==="invertFirst",g=i.binarize(u,_,p,E),b=g.binarized,C=g.inverted,B=c(F?C:b);return!B&&(m.inversionAttempts==="attemptBoth"||m.inversionAttempts==="invertFirst")&&(B=c(F?b:C)),B}d.default=d,s.default=d}),(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0});var i=n(0),o=8,a=24;function l(d,u,_){return d<u?u:d>_?_:d}var c=(function(){function d(u,_){this.width=u,this.data=new Uint8ClampedArray(u*_)}return d.prototype.get=function(u,_){return this.data[_*this.width+u]},d.prototype.set=function(u,_,p){this.data[_*this.width+u]=p},d})();function x(d,u,_,p){if(d.length!==u*_*4)throw new Error("Malformed data passed to binarizer.");for(var h=new c(u,_),m=0;m<u;m++)for(var E=0;E<_;E++){var F=d[(E*u+m)*4+0],g=d[(E*u+m)*4+1],b=d[(E*u+m)*4+2];h.set(m,E,.2126*F+.7152*g+.0722*b)}for(var C=Math.ceil(u/o),B=Math.ceil(_/o),w=new c(C,B),D=0;D<B;D++)for(var f=0;f<C;f++){for(var P=0,N=1/0,y=0,E=0;E<o;E++)for(var m=0;m<o;m++){var A=h.get(f*o+m,D*o+E);P+=A,N=Math.min(N,A),y=Math.max(y,A)}var k=P/Math.pow(o,2);if(y-N<=a&&(k=N/2,D>0&&f>0)){var v=(w.get(f,D-1)+2*w.get(f-1,D)+w.get(f-1,D-1))/4;N<v&&(k=v)}w.set(f,D,k)}var M=i.BitMatrix.createEmpty(u,_),S=null;p&&(S=i.BitMatrix.createEmpty(u,_));for(var D=0;D<B;D++)for(var f=0;f<C;f++){for(var T=l(f,2,C-3),q=l(D,2,B-3),P=0,z=-2;z<=2;z++)for(var L=-2;L<=2;L++)P+=w.get(T+z,q+L);for(var W=P/25,z=0;z<o;z++)for(var L=0;L<o;L++){var m=f*o+z,E=D*o+L,V=h.get(m,E);M.set(m,E,V<=W),p&&S.set(m,E,!(V<=W))}}return p?{binarized:M,inverted:S}:{binarized:M}}s.binarize=x}),(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0});var i=n(0),o=n(6),a=n(9),l=n(10);function c(b,C){for(var B=b^C,w=0;B;)w++,B&=B-1;return w}function x(b,C){return C<<1|b}var d=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],u=[function(b){return(b.y+b.x)%2===0},function(b){return b.y%2===0},function(b){return b.x%3===0},function(b){return(b.y+b.x)%3===0},function(b){return(Math.floor(b.y/2)+Math.floor(b.x/3))%2===0},function(b){return b.x*b.y%2+b.x*b.y%3===0},function(b){return(b.y*b.x%2+b.y*b.x%3)%2===0},function(b){return((b.y+b.x)%2+b.y*b.x%3)%2===0}];function _(b){var C=17+4*b.versionNumber,B=i.BitMatrix.createEmpty(C,C);B.setRegion(0,0,9,9,!0),B.setRegion(C-8,0,8,9,!0),B.setRegion(0,C-8,9,8,!0);for(var w=0,D=b.alignmentPatternCenters;w<D.length;w++)for(var f=D[w],P=0,N=b.alignmentPatternCenters;P<N.length;P++){var y=N[P];f===6&&y===6||f===6&&y===C-7||f===C-7&&y===6||B.setRegion(f-2,y-2,5,5,!0)}return B.setRegion(6,9,1,C-17,!0),B.setRegion(9,6,C-17,1,!0),b.versionNumber>6&&(B.setRegion(C-11,0,3,6,!0),B.setRegion(0,C-11,6,3,!0)),B}function p(b,C,B){for(var w=u[B.dataMask],D=b.height,f=_(C),P=[],N=0,y=0,A=!0,k=D-1;k>0;k-=2){k===6&&k--;for(var v=0;v<D;v++)for(var M=A?D-1-v:v,S=0;S<2;S++){var T=k-S;if(!f.get(T,M)){y++;var q=b.get(T,M);w({y:M,x:T})&&(q=!q),N=x(q,N),y===8&&(P.push(N),y=0,N=0)}}A=!A}return P}function h(b){var C=b.height,B=Math.floor((C-17)/4);if(B<=6)return l.VERSIONS[B-1];for(var w=0,D=5;D>=0;D--)for(var f=C-9;f>=C-11;f--)w=x(b.get(f,D),w);for(var P=0,f=5;f>=0;f--)for(var D=C-9;D>=C-11;D--)P=x(b.get(f,D),P);for(var N=1/0,y,A=0,k=l.VERSIONS;A<k.length;A++){var v=k[A];if(v.infoBits===w||v.infoBits===P)return v;var M=c(w,v.infoBits);M<N&&(y=v,N=M),M=c(P,v.infoBits),M<N&&(y=v,N=M)}if(N<=3)return y}function m(b){for(var C=0,B=0;B<=8;B++)B!==6&&(C=x(b.get(B,8),C));for(var w=7;w>=0;w--)w!==6&&(C=x(b.get(8,w),C));for(var D=b.height,f=0,w=D-1;w>=D-7;w--)f=x(b.get(8,w),f);for(var B=D-8;B<D;B++)f=x(b.get(B,8),f);for(var P=1/0,N=null,y=0,A=d;y<A.length;y++){var k=A[y],v=k.bits,M=k.formatInfo;if(v===C||v===f)return M;var S=c(C,v);S<P&&(N=M,P=S),C!==f&&(S=c(f,v),S<P&&(N=M,P=S))}return P<=3?N:null}function E(b,C,B){var w=C.errorCorrectionLevels[B],D=[],f=0;if(w.ecBlocks.forEach(function(q){for(var z=0;z<q.numBlocks;z++)D.push({numDataCodewords:q.dataCodewordsPerBlock,codewords:[]}),f+=q.dataCodewordsPerBlock+w.ecCodewordsPerBlock}),b.length<f)return null;b=b.slice(0,f);for(var P=w.ecBlocks[0].dataCodewordsPerBlock,N=0;N<P;N++)for(var y=0,A=D;y<A.length;y++){var k=A[y];k.codewords.push(b.shift())}if(w.ecBlocks.length>1)for(var v=w.ecBlocks[0].numBlocks,M=w.ecBlocks[1].numBlocks,N=0;N<M;N++)D[v+N].codewords.push(b.shift());for(;b.length>0;)for(var S=0,T=D;S<T.length;S++){var k=T[S];k.codewords.push(b.shift())}return D}function F(b){var C=h(b);if(!C)return null;var B=m(b);if(!B)return null;var w=p(b,C,B),D=E(w,C,B.errorCorrectionLevel);if(!D)return null;for(var f=D.reduce(function(S,T){return S+T.numDataCodewords},0),P=new Uint8ClampedArray(f),N=0,y=0,A=D;y<A.length;y++){var k=A[y],v=a.decode(k.codewords,k.codewords.length-k.numDataCodewords);if(!v)return null;for(var M=0;M<k.numDataCodewords;M++)P[N++]=v[M]}try{return o.decode(P,C.versionNumber)}catch{return null}}function g(b){if(b==null)return null;var C=F(b);if(C)return C;for(var B=0;B<b.width;B++)for(var w=B+1;w<b.height;w++)b.get(B,w)!==b.get(w,B)&&(b.set(B,w,!b.get(B,w)),b.set(w,B,!b.get(w,B)));return F(b)}s.decode=g}),(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0});var i=n(7),o=n(8),a;(function(h){h.Numeric="numeric",h.Alphanumeric="alphanumeric",h.Byte="byte",h.Kanji="kanji",h.ECI="eci"})(a=s.Mode||(s.Mode={}));var l;(function(h){h[h.Terminator=0]="Terminator",h[h.Numeric=1]="Numeric",h[h.Alphanumeric=2]="Alphanumeric",h[h.Byte=4]="Byte",h[h.Kanji=8]="Kanji",h[h.ECI=7]="ECI"})(l||(l={}));function c(h,m){for(var E=[],F="",g=[10,12,14][m],b=h.readBits(g);b>=3;){var C=h.readBits(10);if(C>=1e3)throw new Error("Invalid numeric value above 999");var B=Math.floor(C/100),w=Math.floor(C/10)%10,D=C%10;E.push(48+B,48+w,48+D),F+=B.toString()+w.toString()+D.toString(),b-=3}if(b===2){var C=h.readBits(7);if(C>=100)throw new Error("Invalid numeric value above 99");var B=Math.floor(C/10),w=C%10;E.push(48+B,48+w),F+=B.toString()+w.toString()}else if(b===1){var C=h.readBits(4);if(C>=10)throw new Error("Invalid numeric value above 9");E.push(48+C),F+=C.toString()}return{bytes:E,text:F}}var x=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function d(h,m){for(var E=[],F="",g=[9,11,13][m],b=h.readBits(g);b>=2;){var C=h.readBits(11),B=Math.floor(C/45),w=C%45;E.push(x[B].charCodeAt(0),x[w].charCodeAt(0)),F+=x[B]+x[w],b-=2}if(b===1){var B=h.readBits(6);E.push(x[B].charCodeAt(0)),F+=x[B]}return{bytes:E,text:F}}function u(h,m){for(var E=[],F="",g=[8,16,16][m],b=h.readBits(g),C=0;C<b;C++){var B=h.readBits(8);E.push(B)}try{F+=decodeURIComponent(E.map(function(w){return"%"+("0"+w.toString(16)).substr(-2)}).join(""))}catch{}return{bytes:E,text:F}}function _(h,m){for(var E=[],F="",g=[8,10,12][m],b=h.readBits(g),C=0;C<b;C++){var B=h.readBits(13),w=Math.floor(B/192)<<8|B%192;w<7936?w+=33088:w+=49472,E.push(w>>8,w&255),F+=String.fromCharCode(o.shiftJISTable[w])}return{bytes:E,text:F}}function p(h,m){for(var E,F,g,b,C=new i.BitStream(h),B=m<=9?0:m<=26?1:2,w={text:"",bytes:[],chunks:[],version:m};C.available()>=4;){var D=C.readBits(4);if(D===l.Terminator)return w;if(D===l.ECI)C.readBits(1)===0?w.chunks.push({type:a.ECI,assignmentNumber:C.readBits(7)}):C.readBits(1)===0?w.chunks.push({type:a.ECI,assignmentNumber:C.readBits(14)}):C.readBits(1)===0?w.chunks.push({type:a.ECI,assignmentNumber:C.readBits(21)}):w.chunks.push({type:a.ECI,assignmentNumber:-1});else if(D===l.Numeric){var f=c(C,B);w.text+=f.text,(E=w.bytes).push.apply(E,f.bytes),w.chunks.push({type:a.Numeric,text:f.text})}else if(D===l.Alphanumeric){var P=d(C,B);w.text+=P.text,(F=w.bytes).push.apply(F,P.bytes),w.chunks.push({type:a.Alphanumeric,text:P.text})}else if(D===l.Byte){var N=u(C,B);w.text+=N.text,(g=w.bytes).push.apply(g,N.bytes),w.chunks.push({type:a.Byte,bytes:N.bytes,text:N.text})}else if(D===l.Kanji){var y=_(C,B);w.text+=y.text,(b=w.bytes).push.apply(b,y.bytes),w.chunks.push({type:a.Kanji,bytes:y.bytes,text:y.text})}}if(C.available()===0||C.readBits(C.available())===0)return w}s.decode=p}),(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0});var i=(function(){function o(a){this.byteOffset=0,this.bitOffset=0,this.bytes=a}return o.prototype.readBits=function(a){if(a<1||a>32||a>this.available())throw new Error("Cannot read "+a.toString()+" bits");var l=0;if(this.bitOffset>0){var c=8-this.bitOffset,x=a<c?a:c,d=c-x,u=255>>8-x<<d;l=(this.bytes[this.byteOffset]&u)>>d,a-=x,this.bitOffset+=x,this.bitOffset===8&&(this.bitOffset=0,this.byteOffset++)}if(a>0){for(;a>=8;)l=l<<8|this.bytes[this.byteOffset]&255,this.byteOffset++,a-=8;if(a>0){var d=8-a,u=255>>d<<d;l=l<<a|(this.bytes[this.byteOffset]&u)>>d,this.bitOffset+=a}}return l},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o})();s.BitStream=i}),(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0}),s.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}}),(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0});var i=n(1),o=n(2);function a(d,u,_,p){var h;u.degree()<_.degree()&&(h=[_,u],u=h[0],_=h[1]);for(var m=u,E=_,F=d.zero,g=d.one;E.degree()>=p/2;){var b=m,C=F;if(m=E,F=g,m.isZero())return null;E=b;for(var B=d.zero,w=m.getCoefficient(m.degree()),D=d.inverse(w);E.degree()>=m.degree()&&!E.isZero();){var f=E.degree()-m.degree(),P=d.multiply(E.getCoefficient(E.degree()),D);B=B.addOrSubtract(d.buildMonomial(f,P)),E=E.addOrSubtract(m.multiplyByMonomial(f,P))}if(g=B.multiplyPoly(F).addOrSubtract(C),E.degree()>=m.degree())return null}var N=g.getCoefficient(0);if(N===0)return null;var y=d.inverse(N);return[g.multiply(y),E.multiply(y)]}function l(d,u){var _=u.degree();if(_===1)return[u.getCoefficient(1)];for(var p=new Array(_),h=0,m=1;m<d.size&&h<_;m++)u.evaluateAt(m)===0&&(p[h]=d.inverse(m),h++);return h!==_?null:p}function c(d,u,_){for(var p=_.length,h=new Array(p),m=0;m<p;m++){for(var E=d.inverse(_[m]),F=1,g=0;g<p;g++)m!==g&&(F=d.multiply(F,i.addOrSubtractGF(1,d.multiply(_[g],E))));h[m]=d.multiply(u.evaluateAt(E),d.inverse(F)),d.generatorBase!==0&&(h[m]=d.multiply(h[m],E))}return h}function x(d,u){var _=new Uint8ClampedArray(d.length);_.set(d);for(var p=new i.default(285,256,0),h=new o.default(p,_),m=new Uint8ClampedArray(u),E=!1,F=0;F<u;F++){var g=h.evaluateAt(p.exp(F+p.generatorBase));m[m.length-1-F]=g,g!==0&&(E=!0)}if(!E)return _;var b=new o.default(p,m),C=a(p,p.buildMonomial(u,1),b,u);if(C===null)return null;var B=l(p,C[0]);if(B==null)return null;for(var w=c(p,C[1],B),D=0;D<B.length;D++){var f=_.length-1-p.log(B[D]);if(f<0)return null;_[f]=i.addOrSubtractGF(_[f],w[D])}return _}s.decode=x}),(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0}),s.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]}),(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0});var i=n(0);function o(x,d,u,_){var p=x.x-d.x+u.x-_.x,h=x.y-d.y+u.y-_.y;if(p===0&&h===0)return{a11:d.x-x.x,a12:d.y-x.y,a13:0,a21:u.x-d.x,a22:u.y-d.y,a23:0,a31:x.x,a32:x.y,a33:1};var m=d.x-u.x,E=_.x-u.x,F=d.y-u.y,g=_.y-u.y,b=m*g-E*F,C=(p*g-E*h)/b,B=(m*h-p*F)/b;return{a11:d.x-x.x+C*d.x,a12:d.y-x.y+C*d.y,a13:C,a21:_.x-x.x+B*_.x,a22:_.y-x.y+B*_.y,a23:B,a31:x.x,a32:x.y,a33:1}}function a(x,d,u,_){var p=o(x,d,u,_);return{a11:p.a22*p.a33-p.a23*p.a32,a12:p.a13*p.a32-p.a12*p.a33,a13:p.a12*p.a23-p.a13*p.a22,a21:p.a23*p.a31-p.a21*p.a33,a22:p.a11*p.a33-p.a13*p.a31,a23:p.a13*p.a21-p.a11*p.a23,a31:p.a21*p.a32-p.a22*p.a31,a32:p.a12*p.a31-p.a11*p.a32,a33:p.a11*p.a22-p.a12*p.a21}}function l(x,d){return{a11:x.a11*d.a11+x.a21*d.a12+x.a31*d.a13,a12:x.a12*d.a11+x.a22*d.a12+x.a32*d.a13,a13:x.a13*d.a11+x.a23*d.a12+x.a33*d.a13,a21:x.a11*d.a21+x.a21*d.a22+x.a31*d.a23,a22:x.a12*d.a21+x.a22*d.a22+x.a32*d.a23,a23:x.a13*d.a21+x.a23*d.a22+x.a33*d.a23,a31:x.a11*d.a31+x.a21*d.a32+x.a31*d.a33,a32:x.a12*d.a31+x.a22*d.a32+x.a32*d.a33,a33:x.a13*d.a31+x.a23*d.a32+x.a33*d.a33}}function c(x,d){for(var u=a({x:3.5,y:3.5},{x:d.dimension-3.5,y:3.5},{x:d.dimension-6.5,y:d.dimension-6.5},{x:3.5,y:d.dimension-3.5}),_=o(d.topLeft,d.topRight,d.alignmentPattern,d.bottomLeft),p=l(_,u),h=i.BitMatrix.createEmpty(d.dimension,d.dimension),m=function(B,w){var D=p.a13*B+p.a23*w+p.a33;return{x:(p.a11*B+p.a21*w+p.a31)/D,y:(p.a12*B+p.a22*w+p.a32)/D}},E=0;E<d.dimension;E++)for(var F=0;F<d.dimension;F++){var g=F+.5,b=E+.5,C=m(g,b);h.set(F,E,x.get(Math.floor(C.x),Math.floor(C.y)))}return{matrix:h,mappingFunction:m}}s.extract=c}),(function(t,s,n){Object.defineProperty(s,"__esModule",{value:!0});var i=4,o=.5,a=1.5,l=function(g,b){return Math.sqrt(Math.pow(b.x-g.x,2)+Math.pow(b.y-g.y,2))};function c(g){return g.reduce(function(b,C){return b+C})}function x(g,b,C){var B,w,D,f,P=l(g,b),N=l(b,C),y=l(g,C),A,k,v;return N>=P&&N>=y?(B=[b,g,C],A=B[0],k=B[1],v=B[2]):y>=N&&y>=P?(w=[g,b,C],A=w[0],k=w[1],v=w[2]):(D=[g,C,b],A=D[0],k=D[1],v=D[2]),(v.x-k.x)*(A.y-k.y)-(v.y-k.y)*(A.x-k.x)<0&&(f=[v,A],A=f[0],v=f[1]),{bottomLeft:A,topLeft:k,topRight:v}}function d(g,b,C,B){var w=(c(_(g,C,B,5))/7+c(_(g,b,B,5))/7+c(_(C,g,B,5))/7+c(_(b,g,B,5))/7)/4;if(w<1)throw new Error("Invalid module size");var D=Math.round(l(g,b)/w),f=Math.round(l(g,C)/w),P=Math.floor((D+f)/2)+7;switch(P%4){case 0:P++;break;case 2:P--;break}return{dimension:P,moduleSize:w}}function u(g,b,C,B){var w=[{x:Math.floor(g.x),y:Math.floor(g.y)}],D=Math.abs(b.y-g.y)>Math.abs(b.x-g.x),f,P,N,y;D?(f=Math.floor(g.y),P=Math.floor(g.x),N=Math.floor(b.y),y=Math.floor(b.x)):(f=Math.floor(g.x),P=Math.floor(g.y),N=Math.floor(b.x),y=Math.floor(b.y));for(var A=Math.abs(N-f),k=Math.abs(y-P),v=Math.floor(-A/2),M=f<N?1:-1,S=P<y?1:-1,T=!0,q=f,z=P;q!==N+M;q+=M){var L=D?z:q,W=D?q:z;if(C.get(L,W)!==T&&(T=!T,w.push({x:L,y:W}),w.length===B+1))break;if(v+=k,v>0){if(z===y)break;z+=S,v-=A}}for(var V=[],H=0;H<B;H++)w[H]&&w[H+1]?V.push(l(w[H],w[H+1])):V.push(0);return V}function _(g,b,C,B){var w,D=b.y-g.y,f=b.x-g.x,P=u(g,b,C,Math.ceil(B/2)),N=u(g,{x:g.x-f,y:g.y-D},C,Math.ceil(B/2)),y=P.shift()+N.shift()-1;return(w=N.concat(y)).concat.apply(w,P)}function p(g,b){var C=c(g)/c(b),B=0;return b.forEach(function(w,D){B+=Math.pow(g[D]-w*C,2)}),{averageSize:C,error:B}}function h(g,b,C){try{var B=_(g,{x:-1,y:g.y},C,b.length),w=_(g,{x:g.x,y:-1},C,b.length),D={x:Math.max(0,g.x-g.y)-1,y:Math.max(0,g.y-g.x)-1},f=_(g,D,C,b.length),P={x:Math.min(C.width,g.x+g.y)+1,y:Math.min(C.height,g.y+g.x)+1},N=_(g,P,C,b.length),y=p(B,b),A=p(w,b),k=p(f,b),v=p(N,b),M=Math.sqrt(y.error*y.error+A.error*A.error+k.error*k.error+v.error*v.error),S=(y.averageSize+A.averageSize+k.averageSize+v.averageSize)/4,T=(Math.pow(y.averageSize-S,2)+Math.pow(A.averageSize-S,2)+Math.pow(k.averageSize-S,2)+Math.pow(v.averageSize-S,2))/S;return M+T}catch{return 1/0}}function m(g,b){for(var C=Math.round(b.x);g.get(C,Math.round(b.y));)C--;for(var B=Math.round(b.x);g.get(B,Math.round(b.y));)B++;for(var w=(C+B)/2,D=Math.round(b.y);g.get(Math.round(w),D);)D--;for(var f=Math.round(b.y);g.get(Math.round(w),f);)f++;var P=(D+f)/2;return{x:w,y:P}}function E(g){for(var b=[],C=[],B=[],w=[],D=function(L){for(var W=0,V=!1,H=[0,0,0,0,0],O=function(Y){var K=g.get(Y,L);if(K===V)W++;else{H=[H[1],H[2],H[3],H[4],W],W=1,V=K;var te=c(H)/7,re=Math.abs(H[0]-te)<te&&Math.abs(H[1]-te)<te&&Math.abs(H[2]-3*te)<3*te&&Math.abs(H[3]-te)<te&&Math.abs(H[4]-te)<te&&!K,ue=c(H.slice(-3))/3,Be=Math.abs(H[2]-ue)<ue&&Math.abs(H[3]-ue)<ue&&Math.abs(H[4]-ue)<ue&&K;if(re){var me=Y-H[3]-H[4],ge=me-H[2],se={startX:ge,endX:me,y:L},Ee=C.filter(function(ee){return ge>=ee.bottom.startX&&ge<=ee.bottom.endX||me>=ee.bottom.startX&&ge<=ee.bottom.endX||ge<=ee.bottom.startX&&me>=ee.bottom.endX&&H[2]/(ee.bottom.endX-ee.bottom.startX)<a&&H[2]/(ee.bottom.endX-ee.bottom.startX)>o});Ee.length>0?Ee[0].bottom=se:C.push({top:se,bottom:se})}if(Be){var Qe=Y-H[4],ne=Qe-H[3],se={startX:ne,y:L,endX:Qe},Ee=w.filter(function(ae){return ne>=ae.bottom.startX&&ne<=ae.bottom.endX||Qe>=ae.bottom.startX&&ne<=ae.bottom.endX||ne<=ae.bottom.startX&&Qe>=ae.bottom.endX&&H[2]/(ae.bottom.endX-ae.bottom.startX)<a&&H[2]/(ae.bottom.endX-ae.bottom.startX)>o});Ee.length>0?Ee[0].bottom=se:w.push({top:se,bottom:se})}}},j=-1;j<=g.width;j++)O(j);b.push.apply(b,C.filter(function(Y){return Y.bottom.y!==L&&Y.bottom.y-Y.top.y>=2})),C=C.filter(function(Y){return Y.bottom.y===L}),B.push.apply(B,w.filter(function(Y){return Y.bottom.y!==L})),w=w.filter(function(Y){return Y.bottom.y===L})},f=0;f<=g.height;f++)D(f);b.push.apply(b,C.filter(function(L){return L.bottom.y-L.top.y>=2})),B.push.apply(B,w);var P=b.filter(function(L){return L.bottom.y-L.top.y>=2}).map(function(L){var W=(L.top.startX+L.top.endX+L.bottom.startX+L.bottom.endX)/4,V=(L.top.y+L.bottom.y+1)/2;if(g.get(Math.round(W),Math.round(V))){var H=[L.top.endX-L.top.startX,L.bottom.endX-L.bottom.startX,L.bottom.y-L.top.y+1],O=c(H)/H.length,j=h({x:Math.round(W),y:Math.round(V)},[1,1,3,1,1],g);return{score:j,x:W,y:V,size:O}}}).filter(function(L){return!!L}).sort(function(L,W){return L.score-W.score}).map(function(L,W,V){if(W>i)return null;var H=V.filter(function(j,Y){return W!==Y}).map(function(j){return{x:j.x,y:j.y,score:j.score+Math.pow(j.size-L.size,2)/L.size,size:j.size}}).sort(function(j,Y){return j.score-Y.score});if(H.length<2)return null;var O=L.score+H[0].score+H[1].score;return{points:[L].concat(H.slice(0,2)),score:O}}).filter(function(L){return!!L}).sort(function(L,W){return L.score-W.score});if(P.length===0)return null;var N=x(P[0].points[0],P[0].points[1],P[0].points[2]),y=N.topRight,A=N.topLeft,k=N.bottomLeft,v=F(g,B,y,A,k),M=[];v&&M.push({alignmentPattern:{x:v.alignmentPattern.x,y:v.alignmentPattern.y},bottomLeft:{x:k.x,y:k.y},dimension:v.dimension,topLeft:{x:A.x,y:A.y},topRight:{x:y.x,y:y.y}});var S=m(g,y),T=m(g,A),q=m(g,k),z=F(g,B,S,T,q);return z&&M.push({alignmentPattern:{x:z.alignmentPattern.x,y:z.alignmentPattern.y},bottomLeft:{x:q.x,y:q.y},topLeft:{x:T.x,y:T.y},topRight:{x:S.x,y:S.y},dimension:z.dimension}),M.length===0?null:M}s.locate=E;function F(g,b,C,B,w){var D,f,P;try{D=d(B,C,w,g),f=D.dimension,P=D.moduleSize}catch{return null}var N={x:C.x-B.x+w.x,y:C.y-B.y+w.y},y=(l(B,w)+l(B,C))/2/P,A=1-3/y,k={x:B.x+A*(N.x-B.x),y:B.y+A*(N.y-B.y)},v=b.map(function(S){var T=(S.top.startX+S.top.endX+S.bottom.startX+S.bottom.endX)/4,q=(S.top.y+S.bottom.y+1)/2;if(g.get(Math.floor(T),Math.floor(q))){var z=[S.top.endX-S.top.startX,S.bottom.endX-S.bottom.startX,S.bottom.y-S.top.y+1];c(z)/z.length;var L=h({x:Math.floor(T),y:Math.floor(q)},[1,1,1],g),W=L+l({x:T,y:q},k);return{x:T,y:q,score:W}}}).filter(function(S){return!!S}).sort(function(S,T){return S.score-T.score}),M=y>=15&&v.length?v[0]:k;return{alignmentPattern:M,dimension:f}}})]).default})})(ys)),ys.exports}var aa=oa();const la=ia(aa),xs=BigInt(2**32-1),fi=BigInt(32);function ca(r,e=!1){return e?{h:Number(r&xs),l:Number(r>>fi&xs)}:{h:Number(r>>fi&xs)|0,l:Number(r&xs)|0}}function da(r,e=!1){const t=r.length;let s=new Uint32Array(t),n=new Uint32Array(t);for(let i=0;i<t;i++){const{h:o,l:a}=ca(r[i],e);[s[i],n[i]]=[o,a]}return[s,n]}const xa=r=>r/2**32|0,ua=r=>r>>>0;function ha(r,e,t,s){const n=xa(t),i=ua(t);r.setUint32(e,s?i:n,s),r.setUint32(e+4,s?n:i,s)}const pi=(r,e,t)=>r>>>t,gi=(r,e,t)=>r<<32-t|e>>>t,Ct=(r,e,t)=>r>>>t|e<<32-t,Bt=(r,e,t)=>r<<32-t|e>>>t,us=(r,e,t)=>r<<64-t|e>>>t-32,hs=(r,e,t)=>r>>>t-32|e<<64-t;function ze(r,e,t,s){const n=(e>>>0)+(s>>>0);return{h:r+t+(n/2**32|0)|0,l:n|0}}const _a=(r,e,t)=>(r>>>0)+(e>>>0)+(t>>>0),ma=(r,e,t,s)=>e+t+s+(r/2**32|0)|0,fa=(r,e,t,s)=>(r>>>0)+(e>>>0)+(t>>>0)+(s>>>0),pa=(r,e,t,s,n)=>e+t+s+n+(r/2**32|0)|0,ga=(r,e,t,s,n)=>(r>>>0)+(e>>>0)+(t>>>0)+(s>>>0)+(n>>>0),Ea=(r,e,t,s,n,i)=>e+t+s+n+i+(r/2**32|0)|0;function hn(r){return r instanceof Uint8Array||ArrayBuffer.isView(r)&&r.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in r&&r.BYTES_PER_ELEMENT===1}const _n=r=>r?`"${r}" `:"";function Os(r,e=""){if(typeof r!="number")throw new TypeError(_n(e)+"expected number, got "+typeof r);if(!Number.isSafeInteger(r)||r<0)throw new RangeError(_n(e)+"expected integer >= 0, got "+r);return r}function gt(r,e,t=""){if(hn(r)&&(e===void 0||r.length===e))return r;e!==void 0&&Os(e,"length");const s=hn(r),n=e!==void 0?` of length ${e}`:"",i=s?`length=${r.length}`:`type=${typeof r}`,o=_n(t)+"expected Uint8Array"+n+", got "+i;throw s?new RangeError(o):new TypeError(o)}const ba=(r,e)=>{if(r===null||typeof r!="object"||Array.isArray(r))throw new TypeError((e==="object"?"":`"${e}" `)+"expected object, got type="+typeof r)},Ei=(r,e)=>{ba(r,e);const t=Object.getPrototypeOf(r);if(t!==Object.prototype&&t!==null)throw new TypeError(`"${e}" expected plain object`);if(Object.hasOwn(r,"__proto__"))throw new TypeError(`"${e}.__proto__" is not allowed`)};function bi(r,e=!0){if(r.destroyed)throw new Error("hash was destroyed");if(e&&r.finished)throw new Error("digest() was already called")}function Ca(r,e){gt(r,void 0,"output");const t=e.outputLen;if(!(r.length>=t))throw new RangeError('"output" expected length >= '+t)}function Fs(...r){for(let e=0;e<r.length;e++)r[e].fill(0)}function en(r){return new DataView(r.buffer,r.byteOffset,r.byteLength)}function Ue(r,e){return r<<32-e|r>>>e}const xr=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Ba=Array.from({length:256},(r,e)=>e.toString(16).padStart(2,"0"));function Us(r){if(gt(r),xr)return r.toHex();let e="";for(let t=0;t<r.length;t++)e+=Ba[r[t]];return e}function Ci(r){return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:void 0}function Tn(r){if(typeof r!="string")throw new TypeError("hex string expected, got "+typeof r);if(xr)try{return Uint8Array.fromHex(r)}catch(n){throw n instanceof SyntaxError?new RangeError(n.message):n}const e=r.length,t=e/2;if(e%2)throw new RangeError("hex string expected, got unpadded hex of length "+e);const s=new Uint8Array(t);for(let n=0,i=0;n<t;n++,i+=2){const o=Ci(r.charCodeAt(i)),a=Ci(r.charCodeAt(i+1));if(o===void 0||a===void 0){const l=r[i]+r[i+1];throw new RangeError('hex string expected, got non-hex character "'+l+'" at index '+i)}s[n]=o*16+a}return s}function wa(...r){let e=0;for(let s=0;s<r.length;s++){const n=r[s];gt(n),e+=n.length}const t=new Uint8Array(e);for(let s=0,n=0;s<r.length;s++){const i=r[s];t.set(i,n),n+=i.length}return t}function ya(r,e,t="opts"){return Ei(r,"defaults"),e!==void 0&&Ei(e,t),Object.assign(Object.create(null),r,e)}function ur(r,e={}){if(typeof r!="function")throw new TypeError('"hashCons" expected function, got type='+typeof r);e=ya({},e,"info");const t=(n,i)=>r(i).update(n).digest(),s=r(void 0);return t.outputLen=s.outputLen,t.blockLen=s.blockLen,t.canXOF=s.canXOF,t.create=n=>r(n),Object.assign(t,e),Object.freeze(t)}function Pn(r=32){Os(r,"bytesLength");const e=typeof globalThis=="object"?globalThis.crypto:null;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined");if(r>65536)throw new RangeError(`"bytesLength" expected <= 65536, got ${r}`);return e.getRandomValues(new Uint8Array(r))}const hr=r=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,r])});function va(r,e,t){return r&e^~r&t}function Aa(r,e,t){return r&e^r&t^e&t}class _r{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,t,s,n){this.blockLen=e,this.outputLen=t,this.padOffset=s,this.isLE=n,this.buffer=new Uint8Array(e),this.view=en(this.buffer)}update(e){bi(this),gt(e);const{view:t,buffer:s,blockLen:n}=this,i=e.length;let o=!1;for(let a=0;a<i;){const l=Math.min(n-this.pos,i-a);if(l===n){const c=en(e);for(;n<=i-a;a+=n)this.process(c,a);o=!0;continue}s.set(a===0&&l===i?e:e.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===n&&(this.process(t,0),this.pos=0,o=!0)}return this.length+=e.length,o&&this.roundClean(),this}digestInto(e){bi(this),Ca(e,this),this.finished=!0;const{buffer:t,view:s,blockLen:n,isLE:i}=this;let{pos:o}=this;t[o++]=128,t.fill(0,o),this.padOffset>n-o&&(this.process(s,0),t.fill(0)),ha(s,n-8,this.length*8,i),this.process(s,0),this.roundClean();const a=e===t?s:en(e),l=this.outputLen,c=l/4,x=this.get();if(l%4||c>x.length)throw new Error("invalid outputLen");for(let d=0;d<c;d++)a.setUint32(4*d,x[d],i)}digest(){const{buffer:e,outputLen:t}=this;this.digestInto(e);const s=e.slice(0,t);return this.destroy(),s}_cloneIntoMeta(e){const{buffer:t,length:s,finished:n,destroyed:i,pos:o}=this;return e.destroyed=i,e.finished=n,e.length=s,e.pos=o,o&&e.buffer.set(t),e}clone(){return this._cloneInto()}}const ka=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Fa=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),Da=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ke=new Uint32Array(64);class Sa extends _r{A=0;B=0;C=0;D=0;E=0;F=0;G=0;H=0;constructor(e,t){super(64,e,8,!1),this.A=t[0]|0,this.B=t[1]|0,this.C=t[2]|0,this.D=t[3]|0,this.E=t[4]|0,this.F=t[5]|0,this.G=t[6]|0,this.H=t[7]|0}get(){const{A:e,B:t,C:s,D:n,E:i,F:o,G:a,H:l}=this;return[e,t,s,n,i,o,a,l]}set(e,t,s,n,i,o,a,l){this.A=e|0,this.B=t|0,this.C=s|0,this.D=n|0,this.E=i|0,this.F=o|0,this.G=a|0,this.H=l|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let d=0;d<16;d++,t+=4)Ke[d]=e.getUint32(t,!1);for(let d=16;d<64;d++){const u=Ke[d-15],_=Ke[d-2],p=Ue(u,7)^Ue(u,18)^u>>>3,h=Ue(_,17)^Ue(_,19)^_>>>10;Ke[d]=h+Ke[d-7]+p+Ke[d-16]|0}let{A:s,B:n,C:i,D:o,E:a,F:l,G:c,H:x}=this;for(let d=0;d<64;d++){const u=Ue(a,6)^Ue(a,11)^Ue(a,25),_=x+u+va(a,l,c)+Da[d]+Ke[d]|0,h=(Ue(s,2)^Ue(s,13)^Ue(s,22))+Aa(s,n,i)|0;x=c,c=l,l=a,a=o+_|0,o=i,i=n,n=s,s=_+h|0}s=s+this.A|0,n=n+this.B|0,i=i+this.C|0,o=o+this.D|0,a=a+this.E|0,l=l+this.F|0,c=c+this.G|0,x=x+this.H|0,this.set(s,n,i,o,a,l,c,x)}roundClean(){Fs(Ke)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),Fs(this.buffer)}}class Ra extends Sa{constructor(){super(32,ka)}}const mr=da(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(r=>BigInt(r))),Ia=mr[0],Ta=mr[1],Je=new Uint32Array(80),Xe=new Uint32Array(80);class Pa extends _r{Ah=0;Al=0;Bh=0;Bl=0;Ch=0;Cl=0;Dh=0;Dl=0;Eh=0;El=0;Fh=0;Fl=0;Gh=0;Gl=0;Hh=0;Hl=0;constructor(e,t){super(128,e,16,!1),this.Ah=t[0]|0,this.Al=t[1]|0,this.Bh=t[2]|0,this.Bl=t[3]|0,this.Ch=t[4]|0,this.Cl=t[5]|0,this.Dh=t[6]|0,this.Dl=t[7]|0,this.Eh=t[8]|0,this.El=t[9]|0,this.Fh=t[10]|0,this.Fl=t[11]|0,this.Gh=t[12]|0,this.Gl=t[13]|0,this.Hh=t[14]|0,this.Hl=t[15]|0}get(){const{Ah:e,Al:t,Bh:s,Bl:n,Ch:i,Cl:o,Dh:a,Dl:l,Eh:c,El:x,Fh:d,Fl:u,Gh:_,Gl:p,Hh:h,Hl:m}=this;return[e,t,s,n,i,o,a,l,c,x,d,u,_,p,h,m]}set(e,t,s,n,i,o,a,l,c,x,d,u,_,p,h,m){this.Ah=e|0,this.Al=t|0,this.Bh=s|0,this.Bl=n|0,this.Ch=i|0,this.Cl=o|0,this.Dh=a|0,this.Dl=l|0,this.Eh=c|0,this.El=x|0,this.Fh=d|0,this.Fl=u|0,this.Gh=_|0,this.Gl=p|0,this.Hh=h|0,this.Hl=m|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let g=0;g<16;g++,t+=4)Je[g]=e.getUint32(t),Xe[g]=e.getUint32(t+=4);for(let g=16;g<80;g++){const b=Je[g-15]|0,C=Xe[g-15]|0,B=Ct(b,C,1)^Ct(b,C,8)^pi(b,C,7),w=Bt(b,C,1)^Bt(b,C,8)^gi(b,C,7),D=Je[g-2]|0,f=Xe[g-2]|0,P=Ct(D,f,19)^us(D,f,61)^pi(D,f,6),N=Bt(D,f,19)^hs(D,f,61)^gi(D,f,6),y=fa(w,N,Xe[g-7],Xe[g-16]),A=pa(y,B,P,Je[g-7],Je[g-16]);Je[g]=A|0,Xe[g]=y|0}let{Ah:s,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:c,Dl:x,Eh:d,El:u,Fh:_,Fl:p,Gh:h,Gl:m,Hh:E,Hl:F}=this;for(let g=0;g<80;g++){const b=Ct(d,u,14)^Ct(d,u,18)^us(d,u,41),C=Bt(d,u,14)^Bt(d,u,18)^hs(d,u,41),B=d&_^~d&h,w=u&p^~u&m,D=ga(F,C,w,Ta[g],Xe[g]),f=Ea(D,E,b,B,Ia[g],Je[g]),P=D|0,N=Ct(s,n,28)^us(s,n,34)^us(s,n,39),y=Bt(s,n,28)^hs(s,n,34)^hs(s,n,39),A=s&i^s&a^i&a,k=n&o^n&l^o&l;E=h|0,F=m|0,h=_|0,m=p|0,_=d|0,p=u|0,{h:d,l:u}=ze(c|0,x|0,f|0,P|0),c=a|0,x=l|0,a=i|0,l=o|0,i=s|0,o=n|0;const v=_a(P,y,k);s=ma(v,f,N,A),n=v|0}({h:s,l:n}=ze(this.Ah|0,this.Al|0,s|0,n|0)),{h:i,l:o}=ze(this.Bh|0,this.Bl|0,i|0,o|0),{h:a,l}=ze(this.Ch|0,this.Cl|0,a|0,l|0),{h:c,l:x}=ze(this.Dh|0,this.Dl|0,c|0,x|0),{h:d,l:u}=ze(this.Eh|0,this.El|0,d|0,u|0),{h:_,l:p}=ze(this.Fh|0,this.Fl|0,_|0,p|0),{h,l:m}=ze(this.Gh|0,this.Gl|0,h|0,m|0),{h:E,l:F}=ze(this.Hh|0,this.Hl|0,E|0,F|0),this.set(s,n,i,o,a,l,c,x,d,u,_,p,h,m,E,F)}roundClean(){Fs(Je,Xe)}destroy(){this.destroyed=!0,Fs(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class Ma extends Pa{constructor(){super(64,Fa)}}const mn=ur(()=>new Ra,hr(1)),fr=ur(()=>new Ma,hr(3));function pr(r,e,t=()=>{}){if(!Array.isArray(r))throw new TypeError(`"${e}" expected array, got type=${typeof r}`);for(let s=0;s<r.length;s++)t(r[s],`${e}[${s}]`);return r}const pe=(r,e,t)=>gt(r,e,t),gr=Os;function Dt(r,e="object"){if(r===null||typeof r!="object"||Array.isArray(r))throw new TypeError(e==="object"?"expected valid options object":`"${e}" expected object, got type=${typeof r}`);return r}function Jt(r,e){if(typeof r!="function")throw new TypeError(`"${e}" is invalid: expected function, got ${typeof r}`);return r}const Er=Us,Tt=(...r)=>wa(...r),br=r=>Tn(r),Mn=hn,$n=r=>Pn(r),Ds=BigInt(0),Bi=BigInt(1),$a=r=>r?`"${r}" `:"";function it(r,e=""){if(typeof r!="boolean")throw new TypeError($a(e)+"expected boolean, got type="+typeof r);return r}function La(r){if(typeof r=="bigint"){if(!ht(r))throw new RangeError("positive bigint expected, got "+r)}else gr(r);return r}function Ss(r,e=""){if(typeof r!="number"){const t=e&&`"${e}" `;throw new TypeError(t+"expected number, got type="+typeof r)}if(!Number.isSafeInteger(r)){const t=e&&`"${e}" `;throw new RangeError(t+"expected safe integer, got "+r)}}function Cr(r){if(typeof r!="string")throw new TypeError("hex string expected, got "+typeof r);return r===""?Ds:BigInt("0x"+r)}function Ws(r){return Cr(Us(r))}function rs(r){return Cr(Us(os(gt(r)).reverse()))}function Ln(r,e){if(Os(e),e===0)throw new Error("zero output length is invalid");r=La(r);const t=e*2,s=r.toString(16);if(s.length>t)throw new RangeError("number is too large");return Tn(s.padStart(t,"0"))}function Br(r,e){return Ln(r,e).reverse()}function os(r){return Uint8Array.from(pe(r))}function Na(r){if(typeof r!="string")throw new TypeError("ascii string expected, got "+typeof r);return Uint8Array.from(r,(e,t)=>{const s=e.charCodeAt(0);if(e.length!==1||s>127)throw new RangeError(`string contains non-ASCII character "${r[t]}" with code ${s} at position ${t}`);return s})}function ht(r){return typeof r=="bigint"&&Ds<=r}function wr(r,e,t){return ht(r)&&ht(e)&&ht(t)&&e<=r&&r<t}function fn(r,e,t,s){if(!wr(e,t,s))throw new RangeError("expected valid "+r+": "+t+" <= n < "+s+", got "+e)}function Nn(r){if(r<Ds)throw new Error("expected non-negative bigint, got "+r);return r===Ds?0:r.toString(2).length}const yr=r=>(Ss(r,"n"),(Bi<<BigInt(r))-Bi);function _t(r,e={},t={},s="object"){Dt(r,s),Dt(e,"fields"),Dt(t,"optFields");function n(o,a,l){const c=s==="object"?`param "${String(o)}"`:`"${s}.${String(o)}"`,x=r[o];if(!Object.hasOwn(r,o)&&(l?x!==void 0:a!=="function"))throw new TypeError(`${c} is invalid: expected own property`);if(l&&x===void 0)return;const d=typeof x;if(d!==a||x===null)throw new TypeError(`${c} is invalid: expected ${a}, got ${d}`)}const i=(o,a)=>Object.entries(o).forEach(([l,c])=>n(l,c,a));i(e,!1),i(t,!0)}const ye=BigInt(0),xe=BigInt(1),dt=BigInt(2),vr=BigInt(3),On=BigInt(4),Ar=BigInt(5),Oa=BigInt(7),kr=BigInt(8),Ua=BigInt(9),Wa=BigInt(15),Fr=BigInt(16),Ha=BigInt("0x10000000000000000");function Ce(r,e){if(e<=ye)throw new Error("mod: expected positive modulus, got "+e);const t=r%e;return t>=ye?t:e+t}function Va(r,e,t){if(t<=xe)throw new Error("pow: expected modulus > 1, got "+t);if(typeof e!="bigint")throw new TypeError("invalid exponent: expected bigint, got "+typeof e);if(e<ye)throw new Error("invalid exponent, negatives unsupported");if(e===ye)return xe;if(e===xe)return r;let s=r%t;if(s<ye&&(s+=t),e<Ha){let a=xe;for(;e>ye;)e&xe&&(a=a*s%t),s=s*s%t,e>>=xe;return a}const n=[];for(;e>ye;)n.push(Number(e&Wa)),e>>=On;const i=new Array(16);i[0]=xe,i[1]=s;for(let a=2;a<16;a++)i[a]=i[a-1]*s%t;let o=i[n[n.length-1]];for(let a=n.length-2;a>=0;a--){o=o*o%t,o=o*o%t,o=o*o%t,o=o*o%t;const l=n[a];l!==0&&(o=o*i[l]%t)}return o}function fe(r,e,t){if(t<=xe)throw new Error("pow2: expected modulus > 1, got "+t);if(e<ye)throw new Error("pow2: expected non-negative exponent, got "+e);let s=r;for(;e-- >ye;)s*=s,s%=t;return s}function wi(r,e){if(r===ye)throw new Error("invert: expected non-zero number");if(e<=xe)throw new Error("invert: expected modulus > 1, got "+e);let t=Ce(r,e),s=e,n=ye,i=xe;for(;t!==ye;){const a=s/t,l=s-t*a,c=n-i*a;s=t,t=l,n=i,i=c}if(s!==xe)throw new Error("invert: does not exist");return Ce(n,e)}function Un(r,e,t){const s=r;if(!s.eql(s.sqr(e),t))throw new Error("Cannot find square root")}function Wn(r,e){if((r&xe)===ye)throw new Error(e+": expected odd modulus, got "+r)}function Dr(r,e){const t=r,s=(t.ORDER+xe)/On,n=t.pow(e,s);return Un(t,n,e),n}function qa(r,e){const t=r,s=(t.ORDER-Ar)/kr,n=t.mul(e,dt),i=t.pow(n,s),o=t.mul(e,i),a=t.mul(t.mul(o,dt),i),l=t.mul(o,t.sub(a,t.ONE));return Un(t,l,e),l}function za(r){const e=Hs(r),t=Sr(r),s=t(e,e.neg(e.ONE)),n=t(e,s),i=t(e,e.neg(s)),o=(r+Oa)/Fr;return((a,l)=>{const c=a;let x=c.pow(l,o),d=c.mul(x,s);const u=c.mul(x,n),_=c.mul(x,i),p=c.eql(c.sqr(d),l),h=c.eql(c.sqr(u),l);x=c.cmov(x,d,p),d=c.cmov(_,u,h);const m=c.eql(c.sqr(d),l),E=c.cmov(x,d,m);return Un(c,E,l),E})}function Sr(r){if(r<vr)throw new Error("sqrt is not defined for small field");Wn(r,"tonelliShanks");let e=r-xe,t=0;for(;e%dt===ye;)e/=dt,t++;let s=dt;const n=Hs(r);for(;Rs(n,s)===1;)if(s++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(t===1)return Dr;let i=n.pow(s,e);const o=(e+xe)/dt;return function(l,c){const x=l;if(x.is0(c))return c;if(Rs(x,c)!==1)throw new Error("Cannot find square root");let d=t,u=x.mul(x.ONE,i),_=x.pow(c,e),p=x.pow(c,o);for(;!x.eql(_,x.ONE);){if(x.is0(_))throw new Error("Cannot find square root: probably non-prime P");let h=1,m=x.sqr(_);for(;!x.eql(m,x.ONE);)if(h++,m=x.sqr(m),h===d)throw new Error("Cannot find square root");const E=xe<<BigInt(d-h-1),F=x.pow(u,E);d=h,u=x.sqr(F),_=x.mul(_,u),p=x.mul(p,F)}return p}}function Ga(r){return Wn(r,"Fp.sqrt"),r%On===vr?Dr:r%kr===Ar?qa:r%Fr===Ua?za(r):Sr(r)}const ja=(r,e)=>(Ce(r,e)&xe)===xe,Ya=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function as(r){if(Dt(r,"field"),typeof r.ORDER!="bigint")throw new TypeError('param "ORDER" is invalid: expected bigint, got '+typeof r.ORDER);Ss(r.BYTES,"BYTES"),Ss(r.BITS,"BITS");for(const e of Ya)Jt(r[e],"field."+e);if(r.BYTES<1||r.BITS<1)throw new Error("invalid field: expected BYTES/BITS > 0");if(r.ORDER<=xe)throw new Error("invalid field: expected ORDER > 1, got "+r.ORDER);return r}function Rr(r,e,t=!1){as(r),pr(e,"nums"),it(t,"passZero");const s=r,n=new Array(e.length).fill(t?s.ZERO:void 0),i=e.reduce((a,l,c)=>s.is0(l)?a:(n[c]=a,s.mul(a,l)),s.ONE),o=s.inv(i);return e.reduceRight((a,l,c)=>s.is0(l)?a:(n[c]=s.mul(a,n[c]),s.mul(a,l)),o),n}function Rs(r,e){as(r);const t=r;Wn(t.ORDER,"FpLegendre");const s=(t.ORDER-xe)/dt,n=t.pow(e,s),i=t.eql(n,t.ONE),o=t.eql(n,t.ZERO),a=t.eql(n,t.neg(t.ONE));if(!i&&!o&&!a)throw new Error("invalid Legendre symbol result");return i?1:o?0:-1}function Qa(r,e){if(e!==void 0&&gr(e),r<=ye)throw new Error("invalid n length: expected positive n, got "+r);if(e!==void 0&&e<1)throw new Error("invalid n length: expected positive bit length, got "+e);const t=Nn(r);if(e!==void 0&&e<t)throw new Error(`invalid n length: expected nBitLength (${e}) >= bitLen(n) (${t})`);const s=e!==void 0?e:t,n=Math.ceil(s/8);return{nBitLength:s,nByteLength:n}}const yi=new WeakMap;class vi{ORDER;BITS;BYTES;isLE;ZERO=ye;ONE=xe;_lengths;_mod;constructor(e,t={}){if(e<=xe)throw new Error("invalid field: expected ORDER > 1, got "+e);let s;this.isLE=!1,t!=null&&typeof t=="object"&&(typeof t.BITS=="number"&&(s=t.BITS),typeof t.sqrt=="function"&&Object.defineProperty(this,"sqrt",{value:t.sqrt,enumerable:!0}),typeof t.isLE=="boolean"&&(this.isLE=t.isLE),t.allowedLengths&&(this._lengths=Object.freeze(t.allowedLengths.slice())),typeof t.modFromBytes=="boolean"&&(this._mod=t.modFromBytes));const{nBitLength:n,nByteLength:i}=Qa(e,s);if(i>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");this.ORDER=e,this.BITS=n,this.BYTES=i,Object.freeze(this)}create(e){return Ce(e,this.ORDER)}isValid(e){if(typeof e!="bigint")throw new TypeError("invalid field element: expected bigint, got "+typeof e);return ye<=e&&e<this.ORDER}is0(e){return e===ye}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}isOdd(e){return(e&xe)===xe}neg(e){return Ce(-e,this.ORDER)}eql(e,t){return e===t}sqr(e){return Ce(e*e,this.ORDER)}add(e,t){return Ce(e+t,this.ORDER)}sub(e,t){return Ce(e-t,this.ORDER)}mul(e,t){return Ce(e*t,this.ORDER)}pow(e,t){return Va(e,t,this.ORDER)}div(e,t){return Ce(e*wi(t,this.ORDER),this.ORDER)}sqrN(e){return e*e}addN(e,t){return e+t}subN(e,t){return e-t}mulN(e,t){return e*t}inv(e){return wi(e,this.ORDER)}sqrt(e){let t=yi.get(this);return t||yi.set(this,t=Ga(this.ORDER)),t(this,e)}toBytes(e){return this.isLE?Br(e,this.BYTES):Ln(e,this.BYTES)}fromBytes(e,t=!1){pe(e);const{_lengths:s,BYTES:n,isLE:i,ORDER:o,_mod:a}=this;if(s){if(e.length<1||!s.includes(e.length)||e.length>n)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+e.length);const c=new Uint8Array(n);c.set(e,i?0:c.length-e.length),e=c}if(e.length!==n)throw new Error("Field.fromBytes: expected "+n+" bytes, got "+e.length);let l=i?rs(e):Ws(e);if(a&&(l=Ce(l,o)),!t&&!this.isValid(l))throw new Error("invalid field element: outside of range 0..ORDER");return l}invertBatch(e){return Rr(this,e,!0)}cmov(e,t,s){return it(s,"condition"),s?t:e}}function Hs(r,e={}){return Object.freeze(vi.prototype),new vi(r,e)}function Ir(r){if(typeof r!="bigint")throw new Error("field order must be bigint");if(r<=xe)throw new Error("field order must be greater than 1");const e=Nn(r-xe);return Math.ceil(e/8)}function Ka(r){const e=Ir(r);return e+Math.ceil(e/2)}function Ja(r,e,t=!1){pe(r);const s=r.length,n=Ir(e),i=Math.max(Ka(e),16);if(s<i||s>1024)throw new Error("expected "+i+"-1024 bytes of input, got "+s);const o=t?rs(r):Ws(r),a=Ce(o,e-xe)+xe;return t?Br(a,n):Ln(a,n)}const Hn=BigInt(0),ls=BigInt(1),Xa=BigInt(4),tn=16,Ai=128,Za=5,ki=2**31;function Vs(r){const e=r;if(typeof e!="function")throw new TypeError('"Point" expected constructor, got type='+typeof r);Jt(e.fromAffine,"Point.fromAffine"),Jt(e.fromBytes,"Point.fromBytes"),Jt(e.fromHex,"Point.fromHex"),Dt(e.BASE,"Point.BASE"),Dt(e.ZERO,"Point.ZERO"),as(e.Fp),as(e.Fn)}function Tr(r,e){Vs(r),Pr(e,r);const t=Rr(r.Fp,e.map(s=>s.Z));return e.map((s,n)=>r.fromAffine(s.toAffine(t[n])))}function e0(r,e,t=1){if(!Number.isSafeInteger(r)||r<t||r>e)throw new Error("invalid window size, expected ["+t+".."+e+"], got W="+r)}function t0(r,e){const t=r*(4*e+128);if(t>ki)throw new Error("invalid window size: table would need ~"+Math.ceil(t/2**20)+" MiB, max "+ki/2**20+" MiB")}function s0(r,e){if(r!==void 0){Jt(r,"randomBytes");try{const t=r(e);if(!Mn(t)||t.length!==e)return}catch{return}return r}}function Pr(r,e){pr(r,"points"),r.forEach((t,s)=>{if(!(t instanceof e))throw new Error("invalid point at index "+s)})}function n0(r,e,t){if(!Array.isArray(r))throw new Error("array of scalars expected");r.forEach((s,n)=>{if(!(t===void 0?e.isValid(s):ht(s)&&s<t))throw new Error("invalid scalar at index "+n)})}const Mr=new WeakMap;function sn(r){return Mr.get(r)||1}function i0(r,e){const t=r.double(),s=[r];for(let n=1;n<e;n++)s.push(s[n-1].add(t));return s}function r0(r,e){const t=2**e,s=t/2,n=BigInt(t-1),i=[];for(;r>Hn;){let o=0;r&ls&&(o=Number(r&n),o>=s&&(o-=t),r-=BigInt(o)),i.push(o),r>>=ls}return i}function o0(r,e,t){const s=2**e,n=s/2,i=BigInt(s-1),o=BigInt(e),a=[];for(let l=0;l<t;l++){let c=Number(r&i);r>>=o,c>n&&(c-=s,r+=ls),a.push(c)}if(r!==Hn)throw new Error("invalid wnaf");return a}function a0(r,e,t){let s=0;for(const i of t)s=Math.max(s,i.length);let n=r;for(let i=s-1;i>=0;i--){i!==s-1&&(n=n.double());for(let o=0;o<t.length;o++){const a=t[o][i];if(a){const l=e[o][Math.abs(a)-1>>1];n=n.add(a<0?l.negate():l)}}}return n}class $r{Point;BASE;ZERO;randomBytes;wnafPrecomputes=new WeakMap;baseCanBeBlinded;bits;constructor(e,t){Vs(e),this.randomBytes=s0(t,tn),this.Point=e,this.BASE=e.BASE,this.ZERO=e.ZERO,this.bits=e.Fn.BITS}buildWnafTable(e,t,s){const n=Math.ceil(s/t)+1,i=2**(t-1),o=[];let a=e;for(let l=0;l<n;l++){let c=a;for(let x=0;x<i;x++)o.push(c),c=c.add(a);a=o[o.length-1].double()}return{W:t,bits:s,windows:n,comp:o}}wnafCachedCT(e,t){const{W:s,windows:n,comp:i}=e,o=2**(s-1),a=o0(t,s,n);let l=this.ZERO,c=this.BASE;for(let x=0;x<n;x++){const d=a[x],u=x*o,_=Math.abs(d)-1;let p=i[u];for(let m=1;m<o;m++)p=m===_?i[u+m]:p;const h=p.negate();d===0?c=c.add(i[u]):l=l.add(d<0?h:p)}return{p:l,f:c}}getWnafPrecomputes(e,t,s,n){let i=this.wnafPrecomputes.get(t),o=i?.find(a=>a.W===e&&a.bits===s);return o||(o=this.buildWnafTable(t,e,s),typeof n=="function"&&(o={...o,comp:n(o.comp)}),i||(i=[],this.wnafPrecomputes.set(t,i)),i.push(o)),o}assertPoint(e){if(!(e instanceof this.Point))throw new TypeError('"point" expected Point instance, got type='+typeof e)}validateMulInput(e,t){if(this.assertPoint(e),!wr(t,ls,this.Point.Fn.ORDER))throw new Error("invalid scalar")}runCT(e,t,s,n){const i=sn(e);return i===1?this.fixedWindowCT(e,t,s):this.wnafCachedCT(this.getWnafPrecomputes(i,e,s,n),t)}mulCT(e,t,s){return this.validateMulInput(e,t),this.runCT(e,t,this.bits,s)}mulCTBlinded(e,t,s){if(this.validateMulInput(e,t),this.randomBytes===void 0)throw new Error("randomBytes is required for scalar blinding");const n=this.Point.Fn.BITS+Ai,i=this.randomBytes(tn);if(!Mn(i)||i.length!==tn)throw new Error("randomBytes returned invalid byte array");i[0]=i[0]&63|128;const o=t+Ws(i)*this.Point.Fn.ORDER;return this.runCT(e,o,n,s)}fixedWindowCT(e,t,s){const n=Za,i=1<<n,o=yr(n),a=new Array(i);a[0]=this.ZERO;for(let x=1;x<i;x++)a[x]=a[x-1].add(e);const l=Math.ceil(s/n);let c=this.ZERO;for(let x=l-1;x>=0;x--){if(x!==l-1)for(let _=0;_<n;_++)c=c.double();const d=Number(t>>BigInt(x*n)&o);let u=a[0];for(let _=1;_<i;_++)u=_===d?a[_]:u;c=c.add(u)}return{p:c,f:c}}shouldBlind(e,t){return this.randomBytes===void 0?!1:t===ls?!0:e!==this.BASE?!1:(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(e,t,s,n){return this.shouldBlind(e,s)?this.mulCTBlinded(e,t,n):this.mulCT(e,t,n)}mulUnsafe(e,t,s){if(this.assertPoint(e),!ht(t))throw new Error("invalid scalar");const n=sn(e);if(n===1||t>=this.Point.Fn.ORDER)return pn(this.Point,[e],[t],!0);const i=this.getWnafPrecomputes(n,e,this.bits,s);return this.wnafCachedCT(i,t).p}setWindowSize(e,t){this.assertPoint(e),e0(t,this.bits);const s=Math.ceil((this.bits+Ai)/t)+1;t0(s*2**(t-1),this.Point.Fp.BYTES),Mr.set(e,t),this.wnafPrecomputes.delete(e)}hasWindowSize(e){return sn(e)!==1}}function pn(r,e,t,s=!1){if(Vs(r),Pr(e,r),it(s,"allowOversized"),n0(t,r.Fn,s?r.Fn.ORDER**Xa:void 0),e.length!==t.length)throw new Error("arrays of points and scalars must have equal length");const n=e.map(o=>i0(o,4)),i=t.map(o=>r0(o,4));return a0(r.ZERO,n,i)}function Fi(r,e,t){if(e){if(e.ORDER!==r)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return as(e),e}else return Hs(r,{isLE:t})}function Lr(r,e,t={},s){if(r!=="weierstrass"&&r!=="edwards")throw new Error('expected curve type "weierstrass" or "edwards"');if(s===void 0&&(s=r==="edwards"),!e||typeof e!="object")throw new Error(`expected valid ${r} CURVE object`);_t(t);for(const l of["p","n","h"]){const c=e[l];if(!(ht(c)&&c!==Hn))throw new Error(`CURVE.${l} must be positive bigint`)}const n=Fi(e.p,t.Fp,s),i=Fi(e.n,t.Fn,s),a=["Gx","Gy","a",r==="weierstrass"?"b":"d"];for(const l of a)if(!n.isValid(e[l]))throw new Error(`CURVE.${l} must be valid field element of CURVE.Fp`);return e=Object.freeze(Object.assign({},e)),{CURVE:e,Fp:n,Fn:i}}function Nr(r,e){return function(s){const n=r(s);return{secretKey:n,publicKey:e(n)}}}const _s=BigInt(0),ms=BigInt(1),fs=BigInt(2),l0=BigInt(4),Di=BigInt(8);function c0(r,e,t,s){const n=r.sqr(t),i=r.sqr(s),o=r.add(r.mul(e.a,n),i),a=r.add(r.ONE,r.mul(e.d,r.mul(n,i)));return r.eql(o,a)}function d0(r,e={}){_t(e,{},{},"extraOpts");const t=e,s=Lr("edwards",r,t,t.FpFnLE),{Fp:n,Fn:i}=s;let o=s.CURVE;const{h:a}=o;if(Rs(n,o.a)!==1)throw new Error("edwards: CURVE.a must be a square in Fp for complete addition formulas");if(Rs(n,o.d)!==-1)throw new Error("edwards: CURVE.d must be a non-square in Fp for complete addition formulas");_t(t,{},{uvRatio:"function",randomBytes:"function"});const l=t.randomBytes===void 0?$n:t.randomBytes,c=fs<<BigInt(n.BYTES*8)-ms;function x(F){if(!n.isOdd)throw new Error("Field does not have .isOdd()");return n.isOdd(F)}const d=t.uvRatio===void 0?(F,g)=>{try{return{isValid:!0,value:n.sqrt(n.div(F,g))}}catch{return{isValid:!1,value:_s}}}:t.uvRatio;if(!c0(n,o,o.Gx,o.Gy))throw new Error("bad curve params: generator point");const u=n.eql(o.a,n.neg(n.ONE))?F=>n.neg(F):n.eql(o.a,n.ONE)?F=>F:F=>n.mul(o.a,F);function _(F,g,b=!1){const C=b?ms:_s;return fn("coordinate "+F,g,C,c),g}function p(F){if(!(F instanceof h))throw new Error("EdwardsPoint expected")}class h{static BASE=new h(o.Gx,o.Gy,n.ONE,n.mul(o.Gx,o.Gy));static ZERO=new h(n.ZERO,n.ONE,n.ONE,n.ZERO);static Fp=n;static Fn=i;X;Y;Z;T;constructor(g,b,C,B){this.X=_("x",g),this.Y=_("y",b),this.Z=_("z",C,!0),this.T=_("t",B),Object.freeze(this)}static CURVE(){return o}static fromAffine(g){if(g instanceof h)throw new Error("extended point not allowed");const{x:b,y:C}=g||{};return _("x",b),_("y",C),new h(b,C,n.ONE,n.mul(b,C))}static fromBytes(g,b=!1){const C=n.BYTES,{a:B,d:w}=o;g=os(pe(g,C,"point")),it(b,"zip215");const D=os(g),f=g[C-1];D[C-1]=f&-129;const P=rs(D),N=b?c:n.ORDER;fn("point.y",P,_s,N);const y=n.sqr(P),A=n.sub(y,n.ONE),k=n.sub(n.mulN(w,y),B);let{isValid:v,value:M}=d(A,k);if(!v)throw new Error("bad point: invalid y coordinate");const S=x(M),T=(f&128)!==0;if(!b&&n.is0(M)&&T)throw new Error("bad point: x=0 and x_0=1");return T!==S&&(M=n.neg(M)),h.fromAffine({x:M,y:P})}static fromHex(g,b=!1){return h.fromBytes(br(g),b)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(g=6,b=!0){return E.setWindowSize(this,g),b||this.multiply(fs),this}assertValidity(){const g=this,{a:b,d:C}=o;if(g.is0())throw new Error("bad point: ZERO");const{X:B,Y:w,Z:D,T:f}=g,P=n.sqr(B),N=n.sqr(w),y=n.sqr(D),A=n.sqr(y),k=n.mul(P,b),v=n.mul(n.add(k,N),y),M=n.add(A,n.mul(C,n.mul(P,N)));if(!n.eql(v,M))throw new Error("bad point: equation left != right (1)");const S=n.mul(B,w),T=n.mul(D,f);if(!n.eql(S,T))throw new Error("bad point: equation left != right (2)")}equals(g){p(g);const{X:b,Y:C,Z:B}=this,{X:w,Y:D,Z:f}=g,P=n.mul(b,f),N=n.mul(w,B),y=n.mul(C,f),A=n.mul(D,B);return n.eql(P,N)&&n.eql(y,A)}is0(){return this.equals(h.ZERO)}negate(){return new h(n.neg(this.X),this.Y,this.Z,n.neg(this.T))}double(){const{X:g,Y:b,Z:C}=this,B=n.sqr(g),w=n.sqr(b),D=n.mul(n.sqr(C),fs),f=u(B),P=n.addN(g,b),N=n.sub(n.subN(n.sqr(P),B),w),y=n.addN(f,w),A=n.subN(y,D),k=n.subN(f,w),v=n.mul(N,A),M=n.mul(y,k),S=n.mul(N,k),T=n.mul(A,y);return new h(v,M,T,S)}add(g){p(g);const{d:b}=o,{X:C,Y:B,Z:w,T:D}=this,{X:f,Y:P,Z:N,T:y}=g,A=n.mul(C,f),k=n.mul(B,P),v=n.mul(n.mulN(D,b),y),M=n.mul(w,N),S=n.sub(n.subN(n.mulN(n.addN(C,B),n.addN(f,P)),A),k),T=n.subN(M,v),q=n.addN(M,v),z=n.sub(k,u(A)),L=n.mul(S,T),W=n.mul(q,z),V=n.mul(S,z),H=n.mul(T,q);return new h(L,W,H,V)}subtract(g){return p(g),this.add(g.negate())}multiply(g){if(!i.isValidNot0(g))throw new RangeError("invalid scalar: expected 1 <= sc < curve.n");const{p:b,f:C}=E.mulSecret(this,g,a,m);return m([b,C])[0]}multiplyUnsafe(g){if(!i.isValid(g))throw new RangeError("invalid scalar: expected 0 <= sc < curve.n");return g===_s?h.ZERO:this.is0()||g===ms?this:E.mulUnsafe(this,g,m)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return E.mulUnsafe(this,o.n).is0()}toAffine(g){const b=this;let C=g;if(C!=null&&typeof C!="bigint")throw new TypeError('"invertedZ" expected bigint, got type='+typeof C);const{X:B,Y:w,Z:D}=b,f=b.is0();C==null&&(C=f?n.create(Di):n.inv(D));const P=n.mul(B,C),N=n.mul(w,C),y=n.mul(D,C);if(f)return{x:n.ZERO,y:n.ONE};if(!n.eql(y,n.ONE))throw new Error("invZ was invalid");return{x:P,y:N}}clearCofactor(){return a===ms?this:a===fs?this.double():a===l0?this.double().double():a===Di?this.double().double().double():this.multiplyUnsafe(a)}toBytes(){const{x:g,y:b}=this.toAffine(),C=n.toBytes(b);return C[C.length-1]|=x(g)?128:0,C}toHex(){return Er(this.toBytes())}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}const m=F=>Tr(h,F),E=new $r(h,l);return E.bits>=6&&h.BASE.precompute(6),Object.freeze(h.prototype),Object.freeze(h),h}function x0(r,e,t={}){if(Vs(r),typeof e!="function")throw new Error('"hash" function param is required');const s=e,n=t;_t(n,{},{adjustScalarBytes:"function",randomBytes:"function",domain:"function",prehash:"function",zip215:"boolean",mapToCurve:"function",toMontgomery:"function",toMontgomerySecret:"function"});const{prehash:i}=n,{BASE:o,Fp:a,Fn:l}=r,c=s.outputLen,x=2*a.BYTES;if(c!==void 0&&(Ss(c,"hash.outputLen"),c!==x))throw new Error(`hash.outputLen must be ${x}, got ${c}`);const d=n.randomBytes===void 0?$n:n.randomBytes,u=n.toMontgomery,_=n.toMontgomerySecret,p=n.adjustScalarBytes===void 0?k=>k:n.adjustScalarBytes,h=n.domain===void 0?(k,v,M)=>{if(it(M,"phflag"),v.length||M)throw new Error("Contexts/pre-hash are not supported");return k}:n.domain;function m(k){return l.create(rs(k))}function E(k){const v=f.secretKey;pe(k,f.secretKey,"secretKey");const M=pe(s(k),2*v,"hashedSecretKey"),S=p(M.slice(0,v)),T=M.slice(v,2*v),q=m(S);return{head:S,prefix:T,scalar:q}}function F(k){const{head:v,prefix:M,scalar:S}=E(k),T=o.multiply(S),q=T.toBytes();return{head:v,prefix:M,scalar:S,point:T,pointBytes:q}}function g(k){return F(k).pointBytes}function b(k=Uint8Array.of(),...v){const M=Tt(...v);return m(s(h(M,pe(k,void 0,"context"),!!i)))}function C(k,v,M={}){_t(M,{},{},"options"),k=os(pe(k,void 0,"message")),i&&(k=i(k));const{prefix:S,scalar:T,pointBytes:q}=F(v),z=b(M.context,S,k),L=o.multiply(z).toBytes(),W=b(M.context,L,q,k),V=l.create(z+W*T);if(!l.isValid(V))throw new Error("sign failed: invalid s");const H=Tt(L,l.toBytes(V));return pe(H,f.signature,"result")}const B={zip215:n.zip215};function w(k,v,M,S=B){_t(S);const{context:T}=S,q=S.zip215===void 0?!!B.zip215:S.zip215,z=f.signature;k=pe(k,z,"signature"),v=pe(v,void 0,"message"),M=pe(M,f.publicKey,"publicKey"),q!==void 0&&it(q,"zip215"),i&&(v=i(v));const L=z/2,W=k.subarray(0,L),V=rs(k.subarray(L,z));let H,O,j;try{H=r.fromBytes(M,q),O=r.fromBytes(W,q),j=o.multiplyUnsafe(V)}catch{return!1}if(!q&&H.isSmallOrder())return!1;const Y=b(T,W,M,v);return O.add(H.multiplyUnsafe(Y)).subtract(j).clearCofactor().is0()}const D=a.BYTES,f={secretKey:D,publicKey:D,signature:2*D,seed:D};function P(k){return k=k===void 0?d(f.seed):k,pe(k,f.seed,"seed")}function N(k){return Mn(k)&&k.length===f.secretKey}function y(k,v){try{return!!r.fromBytes(k,v===void 0?B.zip215:v)}catch{return!1}}const A={getExtendedPublicKey:F,randomSecretKey:P,isValidSecretKey:N,isValidPublicKey:y,toMontgomery(k){if(u===void 0)throw new Error("Montgomery conversion is not supported for this curve");return u(r.fromBytes(k))},toMontgomerySecret(k){if(_===void 0)throw new Error("Montgomery conversion is not supported for this curve");return _(k)}};return Object.freeze(f),Object.freeze(A),Object.freeze({keygen:Nr(P,g),getPublicKey:g,sign:C,verify:w,utils:A,Point:r,lengths:f})}const gn=BigInt(1),Si=BigInt(2),u0=BigInt(5),h0=BigInt(8),Vn=BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),_0={p:Vn,n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:h0,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")};function m0(r){const e=BigInt(10),t=BigInt(20),s=BigInt(40),n=BigInt(80),i=Vn,a=r*r%i*r%i,l=fe(a,Si,i)*a%i,c=fe(l,gn,i)*r%i,x=fe(c,u0,i)*c%i,d=fe(x,e,i)*x%i,u=fe(d,t,i)*d%i,_=fe(u,s,i)*u%i,p=fe(_,n,i)*_%i,h=fe(p,n,i)*_%i,m=fe(h,e,i)*x%i;return{pow_p_5_8:fe(m,Si,i)*r%i,b2:a}}function Or(r){return r[0]&=248,r[31]&=127,r[31]|=64,r}const Ri=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");function f0(r,e){const t=Vn,s=Ce(e*e*e,t),n=Ce(s*s*e,t),i=m0(r*n).pow_p_5_8;let o=Ce(r*s*i,t);const a=Ce(e*o*o,t),l=o,c=Ce(o*Ri,t),x=a===r,d=a===Ce(-r,t),u=a===Ce(-r*Ri,t);return x&&(o=l),(d||u)&&(o=c),ja(o,t)&&(o=Ce(-o,t)),{isValid:x||d,value:o}}const qn=d0(_0,{uvRatio:f0}),Ii=qn.Fp;function p0(r){const{y:e}=r;return Ii.toBytes(Ii.div(gn+e,gn-e))}function g0(r){const e=qn.Fp.BYTES;return gt(r,e),Or(fr(r.subarray(0,e))).subarray(0,e)}function E0(r){return x0(qn,fr,Object.assign({adjustScalarBytes:Or,toMontgomery:p0,toMontgomerySecret:g0,zip215:!0},r))}const zn=E0({}),Gn=1,jn=1,Yn=16384,Ur=16,Wr=4096,b0=128,Pt="OpenMat:event:v1",Fe="OpenMat:control:v1",Hr="OpenMat:manifest:v1",Ti="OpenMat:clock:v1",qs="OpenMat:cert:v1",En="OpenMat:heartbeat:v1",R={InvalidArgument:"InvalidArgument",BoundsExceeded:"BoundsExceeded",MalformedCbor:"MalformedCbor",NonDeterministicCbor:"NonDeterministicCbor",UnsupportedVersion:"UnsupportedVersion",InvalidSignature:"InvalidSignature",CertificateExpired:"CertificateExpired",CertificateRevoked:"CertificateRevoked",UnauthorizedScope:"UnauthorizedScope",EpochFencedOldEvent:"EpochFencedOldEvent",SequenceGap:"SequenceGap",HashChainMismatch:"HashChainMismatch",PendingDependencyOverflow:"PendingDependencyOverflow",PrivacyViolation:"PrivacyViolation",ReplayHeartbeatRejected:"ReplayHeartbeatRejected",TimeoutTakeoverForbidden:"TimeoutTakeoverForbidden"};class I extends Error{code;constructor(e,t){super(t),this.name="OpenMatProtocolError",this.code=e}}const Is=new TextEncoder,C0=new TextDecoder("utf-8",{fatal:!0});function Ge(r,e,t){if(t<0n||t>0xffffffffffffffffn)throw new I(R.BoundsExceeded,`CBOR unsigned argument out of 64-bit bounds: ${t.toString()}`);const s=(e&7)<<5;if(t<24n)r.push(s|Number(t));else if(t<=0xffn)r.push(s|24,Number(t));else if(t<=0xffffn){const n=Number(t);r.push(s|25,n>>>8&255,n&255)}else if(t<=0xffffffffn){const n=Number(t);r.push(s|26,n>>>24&255,n>>>16&255,n>>>8&255,n&255)}else{r.push(s|27);for(let n=56n;n>=0n;n-=8n)r.push(Number(t>>n&0xffn))}}function ps(r,e,t){if(r.length+e.length>t)throw new I(R.BoundsExceeded,`Encoded CBOR exceeds maxBytes (${t})`);for(let s=0;s<e.length;s++)r.push(e[s])}function Vr(r,e){if(r.length!==e.length)return r.length-e.length;for(let t=0;t<r.length;t++){const s=r[t]-e[t];if(s!==0)return s}return 0}function we(r,e){if(r.length!==e.length)return!1;let t=0;for(let s=0;s<r.length;s++)t|=r[s]^e[s];return t===0}function bn(r,e,t,s,n,i){if(e>s)throw new I(R.BoundsExceeded,`CBOR maximum nesting depth (${s}) exceeded`);if(r===null)t.push(246);else if(typeof r=="boolean")t.push(r?245:244);else if(typeof r=="number"){if(!Number.isFinite(r)||!Number.isInteger(r))throw new I(R.NonDeterministicCbor,"Floating-point numbers are forbidden in OpenMat deterministic CBOR");if(!Number.isSafeInteger(r))throw new I(R.BoundsExceeded,"Unsafe integer number; use BigInt for 64-bit integers");if(r>=0)Ge(t,0,BigInt(r));else{const o=BigInt(-1-r);Ge(t,1,o)}}else if(typeof r=="bigint")if(r>=0n){if(r>0xffffffffffffffffn)throw new I(R.BoundsExceeded,"Unsigned BigInt overflows uint64");Ge(t,0,r)}else{const o=-1n-r;if(o>0x7fffffffffffffffn)throw new I(R.BoundsExceeded,"Negative BigInt overflows int64");Ge(t,1,o)}else if(r instanceof Uint8Array){if(r.byteLength>i)throw new I(R.BoundsExceeded,`CBOR byte string length (${r.byteLength}) exceeds maxBytes (${i})`);Ge(t,2,BigInt(r.byteLength)),ps(t,r,i)}else if(typeof r=="string"){const o=Is.encode(r);if(o.byteLength>i)throw new I(R.BoundsExceeded,`CBOR text string length (${o.byteLength}) exceeds maxBytes (${i})`);Ge(t,3,BigInt(o.byteLength)),ps(t,o,i)}else if(Array.isArray(r)){if(r.length>n)throw new I(R.BoundsExceeded,`CBOR array length (${r.length}) exceeds maxContainerLen (${n})`);if(e+1>s)throw new I(R.BoundsExceeded,`CBOR maximum nesting depth (${s}) exceeded`);Ge(t,4,BigInt(r.length));for(let o=0;o<r.length;o++)bn(r[o],e+1,t,s,n,i)}else if(r instanceof Map||typeof r=="object"&&r!==null){const o=r instanceof Map?Array.from(r.entries()):Object.entries(r);if(o.length>n)throw new I(R.BoundsExceeded,`CBOR map length (${o.length}) exceeds maxContainerLen (${n})`);if(e+1>s)throw new I(R.BoundsExceeded,`CBOR maximum nesting depth (${s}) exceeded`);const a=[];for(const[l,c]of o){if(typeof l!="string")throw new I(R.NonDeterministicCbor,"CBOR map keys must be strings");const x=Is.encode(l);if(x.byteLength>i)throw new I(R.BoundsExceeded,"CBOR map key exceeds maxBytes");const d=[];Ge(d,3,BigInt(x.byteLength)),ps(d,x,i),a.push({rawKey:l,encodedKey:new Uint8Array(d),val:c})}a.sort((l,c)=>Vr(l.encodedKey,c.encodedKey));for(let l=1;l<a.length;l++)if(a[l-1].rawKey===a[l].rawKey)throw new I(R.NonDeterministicCbor,`Duplicate key in deterministic CBOR map: ${a[l].rawKey}`);Ge(t,5,BigInt(a.length));for(const l of a)ps(t,l.encodedKey,i),bn(l.val,e+1,t,s,n,i)}else throw new I(R.MalformedCbor,`Unsupported value type in deterministic CBOR: ${typeof r}`);if(t.length>i)throw new I(R.BoundsExceeded,`Encoded CBOR exceeds maxBytes (${i})`)}function ve(r,e){const t=e?.maxDepth??Ur,s=e?.maxContainerLen??Wr,n=e?.maxBytes??Yn,i=[];return bn(r,0,i,t,s,n),new Uint8Array(i)}function vs(r,e,t,s,n,i){if(t>s)throw new I(R.BoundsExceeded,`CBOR depth limit (${s}) exceeded`);if(e.offset>=r.length)throw new I(R.MalformedCbor,"Unexpected end of CBOR input");const o=r[e.offset++],a=o>>>5,l=o&31;if(l===31)throw new I(R.NonDeterministicCbor,"Indefinite-length CBOR items are forbidden");if(l>=28&&l<=30)throw new I(R.MalformedCbor,`Reserved CBOR additional information value (${l})`);let c=0n;if(l<24)c=BigInt(l);else if(l===24){if(e.offset+1>r.length)throw new I(R.MalformedCbor,"Truncated 1-byte CBOR uint");const x=r[e.offset++];if(c=BigInt(x),c<24n&&a!==7)throw new I(R.NonDeterministicCbor,"Non-minimal 1-byte CBOR integer encoding")}else if(l===25){if(a===7)throw new I(R.NonDeterministicCbor,"Floating-point values (float16) are forbidden");if(e.offset+2>r.length)throw new I(R.MalformedCbor,"Truncated 2-byte CBOR uint");const x=r[e.offset],d=r[e.offset+1];if(e.offset+=2,c=BigInt(x)<<8n|BigInt(d),c<=0xffn)throw new I(R.NonDeterministicCbor,"Non-minimal 2-byte CBOR integer encoding")}else if(l===26){if(a===7)throw new I(R.NonDeterministicCbor,"Floating-point values (float32) are forbidden");if(e.offset+4>r.length)throw new I(R.MalformedCbor,"Truncated 4-byte CBOR uint");const x=r[e.offset],d=r[e.offset+1],u=r[e.offset+2],_=r[e.offset+3];if(e.offset+=4,c=BigInt(x)<<24n|BigInt(d)<<16n|BigInt(u)<<8n|BigInt(_),c<=0xffffn)throw new I(R.NonDeterministicCbor,"Non-minimal 4-byte CBOR integer encoding")}else if(l===27){if(a===7)throw new I(R.NonDeterministicCbor,"Floating-point values (float64) are forbidden");if(e.offset+8>r.length)throw new I(R.MalformedCbor,"Truncated 8-byte CBOR uint");c=0n;for(let x=0;x<8;x++)c=c<<8n|BigInt(r[e.offset+x]);if(e.offset+=8,c<=0xffffffffn)throw new I(R.NonDeterministicCbor,"Non-minimal 8-byte CBOR integer encoding")}switch(a){case 0:return c<=BigInt(Number.MAX_SAFE_INTEGER)?Number(c):c;case 1:{if(c>0x7fffffffffffffffn)throw new I(R.BoundsExceeded,"Negative integer overflows int64");const x=-1n-c;return x>=BigInt(Number.MIN_SAFE_INTEGER)?Number(x):x}case 2:{if(c>BigInt(i))throw new I(R.BoundsExceeded,"CBOR byte string length exceeds limit");const x=Number(c);if(e.offset+x>r.length)throw new I(R.MalformedCbor,"Truncated CBOR byte string");const d=r.slice(e.offset,e.offset+x);return e.offset+=x,d}case 3:{if(c>BigInt(i))throw new I(R.BoundsExceeded,"CBOR text string length exceeds limit");const x=Number(c);if(e.offset+x>r.length)throw new I(R.MalformedCbor,"Truncated CBOR text string");const d=r.subarray(e.offset,e.offset+x);e.offset+=x;try{return C0.decode(d)}catch{throw new I(R.MalformedCbor,"Invalid UTF-8 in CBOR text string")}}case 4:{if(c>BigInt(n))throw new I(R.BoundsExceeded,`CBOR array length (${c.toString()}) exceeds limit (${n})`);if(t+1>s)throw new I(R.BoundsExceeded,`CBOR depth limit (${s}) exceeded`);const x=Number(c),d=[];for(let u=0;u<x;u++)d.push(vs(r,e,t+1,s,n,i));return d}case 5:{if(c>BigInt(n))throw new I(R.BoundsExceeded,`CBOR map length (${c.toString()}) exceeds limit (${n})`);if(t+1>s)throw new I(R.BoundsExceeded,`CBOR depth limit (${s}) exceeded`);const x=Number(c),d=Object.create(null);let u=null;for(let _=0;_<x;_++){const p=e.offset,h=vs(r,e,t+1,s,n,i),m=e.offset;if(typeof h!="string")throw new I(R.NonDeterministicCbor,"CBOR map keys must be text strings");const E=r.subarray(p,m);if(u!==null&&Vr(u,E)>=0)throw new I(R.NonDeterministicCbor,"CBOR map keys are not sorted in canonical order or contain duplicates");u=E;const F=vs(r,e,t+1,s,n,i);d[h]=F}return d}case 6:throw new I(R.NonDeterministicCbor,"Semantic tags are forbidden in deterministic CBOR");case 7:{if(l===20)return!1;if(l===21)return!0;if(l===22)return null;throw new I(R.NonDeterministicCbor,`Unsupported simple value or float in deterministic CBOR (ai=${l})`)}default:throw new I(R.MalformedCbor,"Unknown CBOR major type")}}function Re(r,e){const t=e?.maxDepth??Ur,s=e?.maxContainerLen??Wr,n=e?.maxBytes??Yn;if(r.byteLength===0)throw new I(R.MalformedCbor,"Empty CBOR input");if(r.byteLength>n)throw new I(R.BoundsExceeded,`CBOR input (${r.byteLength}) exceeds maxBytes (${n})`);const i={offset:0},o=vs(r,i,0,t,s,n);if(i.offset!==r.byteLength)throw new I(R.MalformedCbor,"Trailing bytes after deterministic CBOR root value");return o}function Oe(r){return mn(r)}function _e(r){return Us(r)}function ce(r){if(r.length%2!==0||!/^[0-9a-fA-F]*$/.test(r))throw new I(R.InvalidArgument,"Invalid hex string");return Tn(r)}function B0(r,e){if(e.byteLength!==32)throw new I(R.InvalidArgument,"Ed25519 seed must be 32 bytes");return{keyId:r,publicKey:zn.getPublicKey(e),privateKey:new Uint8Array(e)}}function qr(r,e){const t=Is.encode(r),s=new Uint8Array(t.byteLength+1+e.byteLength);return s.set(t,0),s[t.byteLength]=0,s.set(e,t.byteLength+1),s}function qe(r,e,t){if(!r)throw new I(R.InvalidArgument,"Signing domain must not be empty");if(t.byteLength!==32)throw new I(R.InvalidArgument,"Ed25519 private key must be 32 bytes");const s=qr(r,e);return zn.sign(s,t)}function Pe(r,e,t,s){if(!r||t.byteLength!==32||s.byteLength!==64)return!1;try{const n=qr(r,e);return zn.verify(s,n,t,{zip215:!1})}catch{return!1}}function zr(r,e,t){const s=Is.encode(r),n=new Uint8Array(s.byteLength+1+e.byteLength+t.byteLength);return n.set(s,0),n[s.byteLength]=0,n.set(e,s.byteLength+1),n.set(t,s.byteLength+1+e.byteLength),Oe(n)}const xt={MatOperator:2,RelayOperator:8},Ne={None:0,ReadPublic:1,ScoreMat:2,ConfirmLocalResult:4,RefereeDecision:8,RecordWeighIn:16,RecordMedicalDecision:32,SubmitCoachRoster:64,ManageTournament:128,PublishSnapshot:256,RelaySignedBytes:512};function Qn(r){return ve({certificate_id:r.certificate_id,tournament_id:r.tournament_id,subject_key_id:r.subject_key_id,subject_pubkey:r.subject_pubkey,role:r.role,allowed_scopes:r.allowed_scopes,allowed_stream_id:r.allowed_stream_id,assigned_mat_id:r.assigned_mat_id,assignment_revision:r.assignment_revision,authority_generation:r.authority_generation,issued_at_ms:r.issued_at_ms,expires_at_ms:r.expires_at_ms,allow_in_progress_completion:r.allow_in_progress_completion})}function Pi(r,e){if(!r.certificate_id||!r.tournament_id||!r.subject_key_id)throw new I(R.InvalidArgument,"DelegatedCertificate missing required identifiers");if(r.expires_at_ms<r.issued_at_ms)throw new I(R.InvalidArgument,"DelegatedCertificate expires_at_ms precedes issued_at_ms");const t={...r,root_signature:new Uint8Array(64)},s=Qn(t);return t.root_signature=qe(qs,s,e),t}function Ts(r,e,t,s){const n=Qn(r);if(!Pe(qs,n,e,r.root_signature))throw new I(R.InvalidSignature,"Invalid root signature on delegated certificate");if(t>r.expires_at_ms&&!(s&&r.allow_in_progress_completion))throw new I(R.CertificateExpired,"Delegated certificate expired and in-progress completion not active");return!0}function Gr(r){if(r.protocol_version!==Gn||r.schema_version!==jn)throw new I(R.UnsupportedVersion,"Unsupported protocol or schema version");return{protocol_version:r.protocol_version,schema_version:r.schema_version,tournament_id:r.tournament_id,stream_id:r.stream_id,match_id:r.match_id,authority_epoch:r.authority_epoch,sequence:r.sequence,previous_event_hash:r.previous_event_hash,assignment_revision:r.assignment_revision,rules_hash:r.rules_hash,required_public_control_head:r.required_public_control_head,command_id:r.command_id,event_type:r.event_type,signer_key_id:r.signer_key_id,certificate_id:r.certificate_id,boot_id:r.boot_id,monotonic_time_ns:r.monotonic_time_ns,audit_time_ms:r.audit_time_ms,time_uncertainty_ms:r.time_uncertainty_ms,payload:r.payload}}function jr(r){return ve(Gr(r))}function w0(r){const e=Gr(r);return e.signature=r.signature,e.event_id=r.event_id,ve(e)}function je(r){if(r.byteLength>Yn)throw new I(R.BoundsExceeded,"Wire event exceeds MAX_EVENT_BYTES");const e=Re(r);if(typeof e!="object"||e===null||Array.isArray(e)||e instanceof Uint8Array||e instanceof Map)throw new I(R.MalformedCbor,"SignedEvent wire root must be a CBOR map");const t=e,s=l=>{const c=t[l];if(typeof c=="number"&&Number.isInteger(c)&&c>=0)return c;if(typeof c=="bigint"&&c>=0n)return Number(c);throw new I(R.MalformedCbor,`Missing or invalid uint field: ${l}`)},n=l=>{const c=t[l];if(typeof c=="string")return c;throw new I(R.MalformedCbor,`Missing or invalid text field: ${l}`)},i=(l,c)=>{const x=t[l];if(x instanceof Uint8Array&&x.byteLength===c)return x;throw new I(R.MalformedCbor,`Missing or invalid ${c}-byte field: ${l}`)},o=s("protocol_version"),a=s("schema_version");if(o!==Gn||a!==jn)throw new I(R.UnsupportedVersion,"Unsupported protocol or schema version on wire");if(!("payload"in t))throw new I(R.MalformedCbor,"Missing payload field");return{protocol_version:o,schema_version:a,tournament_id:n("tournament_id"),stream_id:n("stream_id"),match_id:n("match_id"),authority_epoch:s("authority_epoch"),sequence:s("sequence"),previous_event_hash:i("previous_event_hash",32),assignment_revision:s("assignment_revision"),rules_hash:i("rules_hash",32),required_public_control_head:i("required_public_control_head",32),command_id:n("command_id"),event_type:n("event_type"),signer_key_id:n("signer_key_id"),certificate_id:n("certificate_id"),boot_id:n("boot_id"),monotonic_time_ns:s("monotonic_time_ns"),audit_time_ms:s("audit_time_ms"),time_uncertainty_ms:s("time_uncertainty_ms"),payload:t.payload,signature:i("signature",64),event_id:i("event_id",32)}}const y0=1024*1024;function v0(r){const e=r.chunks.map(t=>({byte_length:t.byte_length,chunk_index:t.chunk_index,sha256_hash:t.sha256_hash}));return ve({chunk_size_bytes:r.chunk_size_bytes,chunks:e,full_file_sha256:r.full_file_sha256,public_control_head:r.public_control_head,published_at_ms:r.published_at_ms,schema_version:r.schema_version,signer_key_id:r.signer_key_id,snapshot_epoch:r.snapshot_epoch,stream_watermarks:{...r.stream_watermarks},total_bytes:r.total_bytes,tournament_id:r.tournament_id},{maxBytes:y0})}function A0(r,e){const t=v0(r);if(!Pe(Hr,t,e,r.signature))throw new I(R.InvalidSignature,"Snapshot manifest signature verification failed");return!0}function k0(r){return ve({tournament_id:r.tournament_id,stream_id:r.stream_id,authority_epoch:r.authority_epoch,heartbeat_counter:r.heartbeat_counter,head_sequence:r.head_sequence,head_hash:r.head_hash,monotonic_time_ns:r.monotonic_time_ns})}function F0(r,e,t){if(r.heartbeat_counter<=t)throw new I(R.ReplayHeartbeatRejected,`Replayed or non-increasing heartbeat counter (${r.heartbeat_counter} <= ${t})`);const s=k0(r);if(!Pe(En,s,e,r.signature))throw new I(R.InvalidSignature,"SourceHeartbeat signature verification failed");return!0}const Yr={NormalDeviceReplacement:1,TimeoutOnlyInvalid:3},Se={Applied:"Applied",DuplicateIgnored:"DuplicateIgnored",QueuedPendingDependency:"QueuedPendingDependency",QuarantinedOldEpoch:"QuarantinedOldEpoch",GapReplayRequested:"GapReplayRequested",EquivocationConflict:"EquivocationConflict"};class D0{rootPubkey;highestAuthorityGeneration=1;certs=new Map;revokedCerts=new Map;knownControlHeads=[new Uint8Array(32)];usedTransferIds=new Set;streams=new Map;pendingEvents=[];quarantinedEvents=[];equivocationsList=[];constructor(e){this.rootPubkey=new Uint8Array(e)}registerCertificate(e){const t=Qn(e);if(!Pe(qs,t,this.rootPubkey,e.root_signature))throw new I(R.InvalidSignature,"DelegatedCertificate root signature invalid");if(e.authority_generation<this.highestAuthorityGeneration)throw new I(R.EpochFencedOldEvent,"Certificate authority generation superseded");return this.highestAuthorityGeneration=Math.max(this.highestAuthorityGeneration,e.authority_generation),this.certs.set(e.certificate_id,e),!0}revokeCertificate(e,t){this.revokedCerts.set(e,t)}markControlHeadKnown(e){this.knownControlHeads.some(t=>we(t,e))||this.knownControlHeads.push(new Uint8Array(e))}applyAuthorityTransfer(e,t){if(e.reason===Yr.TimeoutOnlyInvalid||!e.old_operator_physically_stopped||!e.timers_initialized_stopped)throw new I(R.TimeoutTakeoverForbidden,"Authority transfer requires physical stop and stopped timers; timeout-only takeover forbidden");if(!e.transfer_id||!e.stream_id)throw new I(R.InvalidArgument,"Transfer ID and stream ID must not be empty");if(this.usedTransferIds.has(e.transfer_id))throw new I(R.InvalidArgument,"Authority transfer_id has already been applied");if(e.director_generation<this.highestAuthorityGeneration)throw new I(R.EpochFencedOldEvent,"Transfer director_generation is superseded");const s=this.getOrCreateStream(e.stream_id);if(e.new_epoch<=s.activeEpoch||e.new_epoch<=e.old_epoch)throw new I(R.EpochFencedOldEvent,"Transfer new_epoch must strictly exceed active epoch");return this.usedTransferIds.add(e.transfer_id),this.highestAuthorityGeneration=Math.max(this.highestAuthorityGeneration,e.director_generation),s.activeEpoch=e.new_epoch,s.headSequence=e.old_last_sequence,s.headHash=new Uint8Array(t),s.epochAnchorHash=new Uint8Array(t),s.acceptedBySeq.clear(),this.markControlHeadKnown(t),!0}verifyAndAccept(e,t,s,n,i){if(e.protocol_version!==Gn||e.schema_version!==jn)throw new I(R.UnsupportedVersion,"Unsupported protocol or schema version");const o=jr(e);if(this.revokedCerts.has(e.certificate_id))throw new I(R.CertificateRevoked,"Event signer certificate has been revoked");const a=this.certs.get(e.certificate_id);if(!a)throw new I(R.InvalidSignature,"Unknown certificate_id on SignedEvent");if(e.signer_key_id&&e.signer_key_id!==a.subject_key_id)throw new I(R.InvalidSignature,"Event signer_key_id does not match certificate subject");if(Ts(a,this.rootPubkey,n,i),(a.allowed_scopes&s)!==s)throw new I(R.UnauthorizedScope,"Certificate lacks required scope for operation");if(a.allowed_stream_id&&a.allowed_stream_id!=="*"&&a.allowed_stream_id!==e.stream_id)throw new I(R.UnauthorizedScope,"Certificate is not authorized for this stream_id");if(a.tournament_id&&e.tournament_id&&a.tournament_id!==e.tournament_id)throw new I(R.UnauthorizedScope,"Certificate tournament_id mismatch");if(!Pe(t,o,a.subject_pubkey,e.signature))throw new I(R.InvalidSignature,"SignedEvent signature verification failed");const l=zr(t,o,e.signature);if(!we(l,e.event_id))throw new I(R.InvalidSignature,"SignedEvent event_id does not match computed hash");const c=this.getOrCreateStream(e.stream_id);if(e.authority_epoch<c.activeEpoch)return this.quarantinedEvents.push(e),Se.QuarantinedOldEpoch;if(!this.knownControlHeads.some(u=>we(u,e.required_public_control_head))){if(this.pendingEvents.some(u=>we(u.event_id,e.event_id)))return Se.QueuedPendingDependency;if(this.pendingEvents.length>=b0)throw new I(R.PendingDependencyOverflow,"Pending authorization dependency queue capacity exceeded");return this.pendingEvents.push(e),Se.QueuedPendingDependency}if(e.authority_epoch>c.activeEpoch)throw new I(R.EpochFencedOldEvent,"Event epoch exceeds active stream epoch without transfer");const d=c.acceptedBySeq.get(e.sequence);if(d)return we(d.event_id,e.event_id)?Se.DuplicateIgnored:(this.equivocationsList.push({stream_id:e.stream_id,authority_epoch:e.authority_epoch,sequence:e.sequence,first_event:d,conflicting_event:e}),Se.EquivocationConflict);if(e.sequence<=c.headSequence)throw new I(R.SequenceGap,"Event sequence precedes epoch anchor sequence");if(e.sequence>c.headSequence+1)return Se.GapReplayRequested;if(!we(e.previous_event_hash,c.headHash))throw new I(R.HashChainMismatch,"SignedEvent previous_event_hash mismatch");return c.headSequence=e.sequence,c.headHash=new Uint8Array(e.event_id),c.acceptedBySeq.set(e.sequence,e),t===Fe&&this.markControlHeadKnown(e.event_id),Se.Applied}drainReadyPending(e,t,s,n){const i=[];if(this.pendingEvents.length===0)return i;this.pendingEvents.sort((a,l)=>a.stream_id!==l.stream_id?a.stream_id.localeCompare(l.stream_id):a.authority_epoch!==l.authority_epoch?a.authority_epoch-l.authority_epoch:a.sequence-l.sequence);let o=!0;for(;o&&this.pendingEvents.length>0;){o=!1;const a=[];for(const l of this.pendingEvents){if(!this.knownControlHeads.some(d=>we(d,l.required_public_control_head))){a.push(l);continue}const x=this.verifyAndAccept(l,e,t,s,n);x===Se.Applied?(i.push(l),o=!0):(x===Se.GapReplayRequested||x===Se.QueuedPendingDependency)&&a.push(l)}this.pendingEvents=a}return i}activeEpoch(e){return this.streams.get(e)?.activeEpoch??1}headSequence(e){return this.streams.get(e)?.headSequence??0}headHash(e){return this.streams.get(e)?.headHash??new Uint8Array(32)}quarantinedOldEpochEvents(){return this.quarantinedEvents}equivocations(){return this.equivocationsList}getOrCreateStream(e){let t=this.streams.get(e);return t||(t={activeEpoch:1,headSequence:0,headHash:new Uint8Array(32),epochAnchorHash:new Uint8Array(32),acceptedBySeq:new Map},this.streams.set(e,t)),t}}function gs(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();const r=new Uint8Array(16);if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function")crypto.getRandomValues(r);else for(let t=0;t<16;t++)r[t]=Math.floor(Math.random()*256);r[6]=r[6]&15|64,r[8]=r[8]&63|128;const e=_e(r);return`${e.slice(0,8)}-${e.slice(8,12)}-${e.slice(12,16)}-${e.slice(16,20)}-${e.slice(20,32)}`}const Cn=4194304;function Me(r,e){if(r.length!==e.length||r.some((t,s)=>t!==e[s]))throw new Error("Noncanonical binary packet")}class $e{data=[];varint(e){do{const t=e%128;e=Math.floor(e/128),this.data.push(t+(e?128:0))}while(e)}number(e,t,s){if(!Number.isSafeInteger(t)||t<0||t>s)throw new Error("Binary integer/enum out of range");t&&(this.varint(e*8),this.varint(t))}bytes(e,t,s=!0){if(!(!t.length&&s)){if(t.length+this.data.length+10>Cn)throw new Error("Binary packet exceeds limit");this.varint(e*8+2),this.varint(t.length);for(const n of t)this.data.push(n)}}text(e,t){const s=new TextEncoder().encode(t);if(new TextDecoder("utf-8",{fatal:!0}).decode(s)!==t)throw new Error("Invalid UTF-8");this.bytes(e,s)}take(){if(this.data.length>Cn)throw new Error("Binary packet exceeds limit");return Uint8Array.from(this.data)}}class Le{constructor(e){if(this.data=e,e.length>Cn)throw new Error("Binary packet exceeds limit")}data;offset=0;wire=0;field=0;varint(){let e=0;for(let t=0;t<=49;t+=7){if(this.offset===this.data.length)throw new Error("Truncated varint");const s=this.data[this.offset++];if(e+=(s&127)*2**t,!(s&128)){if(!Number.isSafeInteger(e))throw new Error("Unsafe integer");return e}}throw new Error("Varint overflow")}next(){if(this.offset===this.data.length)return!1;const e=this.varint(),t=Math.floor(e/8);if(!t||t>536870911||t<this.field)throw new Error("Invalid field order");return this.field=t,this.wire=e%8,!0}number(){if(this.wire!==0)throw new Error("Wrong wire type");return this.varint()}bytes(){if(this.wire!==2)throw new Error("Wrong wire type");const e=this.varint();if(e>this.data.length-this.offset)throw new Error("Truncated bytes");const t=this.data.slice(this.offset,this.offset+e);return this.offset+=e,t}text(){return new TextDecoder("utf-8",{fatal:!0}).decode(this.bytes())}}function Qr(r){const e=new $e;return e.number(1,r.index,4294967295),e.number(2,r.half_points,4294967295),e.text(3,r.name),e.text(4,r.team_id),e.take()}function S0(r){const e={index:0,half_points:0,name:"",team_id:""},t=new Le(r);for(;t.next();)switch(t.field){case 1:e.index=t.number();break;case 2:e.half_points=t.number();break;case 3:e.name=t.text();break;case 4:e.team_id=t.text();break;default:throw new Error("Unknown binary field")}return Me(r,Qr(e)),e}function Kr(r){const e=new $e;return e.number(1,r.slot,4294967295),e.number(2,r.team_index,4294967295),e.number(3,r.seed_rank,4294967295),e.number(4,r.state,4294967295),e.text(5,r.display_name),e.text(6,r.athlete_id),e.number(7,r.public_stage,4294967295),e.take()}function R0(r){const e={slot:0,team_index:0,seed_rank:0,state:0,display_name:"",athlete_id:"",public_stage:0},t=new Le(r);for(;t.next();)switch(t.field){case 1:e.slot=t.number();break;case 2:e.team_index=t.number();break;case 3:e.seed_rank=t.number();break;case 4:e.state=t.number();break;case 5:e.display_name=t.text();break;case 6:e.athlete_id=t.text();break;case 7:e.public_stage=t.number();break;default:throw new Error("Unknown binary field")}return Me(r,Kr(e)),e}function Kn(r){const e=new $e;return e.number(1,r.local_number,4294967295),e.number(2,r.bout_number,4294967295),e.number(3,r.round_index,4294967295),e.number(4,r.flags,4294967295),e.number(5,r.placement_rank,4294967295),e.number(6,r.red_slot,4294967295),e.number(7,r.green_slot,4294967295),e.number(8,r.winner_slot,4294967295),e.number(9,r.loser_slot,4294967295),e.number(10,r.winner_next,4294967295),e.number(11,r.loser_next,4294967295),e.number(12,r.lifecycle,8),e.number(13,r.win_type,8),e.number(14,r.red_score,4294967295),e.number(15,r.green_score,4294967295),e.number(16,r.period,4294967295),e.number(17,r.clock_remaining_ds,4294967295),e.number(18,r.mat_id,4294967295),e.number(19,r.assignment_revision,4294967295),e.number(20,r.completed_offset_sec,4294967295),e.text(21,r.match_id),e.number(22,r.eventlog_available,4294967295),e.number(23,r.edge_flags,4294967295),e.take()}function Jr(r){const e={local_number:0,bout_number:0,round_index:0,flags:0,placement_rank:0,red_slot:0,green_slot:0,winner_slot:0,loser_slot:0,winner_next:0,loser_next:0,lifecycle:0,win_type:0,red_score:0,green_score:0,period:0,clock_remaining_ds:0,mat_id:0,assignment_revision:0,completed_offset_sec:0,match_id:"",eventlog_available:0,edge_flags:0},t=new Le(r);for(;t.next();)switch(t.field){case 1:e.local_number=t.number();break;case 2:e.bout_number=t.number();break;case 3:e.round_index=t.number();break;case 4:e.flags=t.number();break;case 5:e.placement_rank=t.number();break;case 6:e.red_slot=t.number();break;case 7:e.green_slot=t.number();break;case 8:e.winner_slot=t.number();break;case 9:e.loser_slot=t.number();break;case 10:e.winner_next=t.number();break;case 11:e.loser_next=t.number();break;case 12:e.lifecycle=t.number();break;case 13:e.win_type=t.number();break;case 14:e.red_score=t.number();break;case 15:e.green_score=t.number();break;case 16:e.period=t.number();break;case 17:e.clock_remaining_ds=t.number();break;case 18:e.mat_id=t.number();break;case 19:e.assignment_revision=t.number();break;case 20:e.completed_offset_sec=t.number();break;case 21:e.match_id=t.text();break;case 22:e.eventlog_available=t.number();break;case 23:e.edge_flags=t.number();break;default:throw new Error("Unknown binary field")}return Me(r,Kn(e)),e}function I0(){return{local_number:0,bout_number:0,round_index:0,flags:0,placement_rank:0,red_slot:0,green_slot:0,winner_slot:0,loser_slot:0,winner_next:0,loser_next:0,lifecycle:0,win_type:0,red_score:0,green_score:0,period:0,clock_remaining_ds:0,mat_id:0,assignment_revision:0,completed_offset_sec:0,match_id:"",eventlog_available:0,edge_flags:0}}function Xr(r){const e=new $e;return e.number(1,r.bracket_index,4294967295),e.number(2,r.division,4),e.number(3,r.weight_index,4294967295),e.number(4,r.revision,9007199254740991),e.number(5,r.eventlog_word_count,4294967295),e.bytes(6,r.state_sha256),e.text(7,r.bracket_id),e.text(8,r.weight_class_id),e.take()}function T0(r){const e={bracket_index:0,division:0,weight_index:0,revision:0,eventlog_word_count:0,state_sha256:new Uint8Array,bracket_id:"",weight_class_id:""},t=new Le(r);for(;t.next();)switch(t.field){case 1:e.bracket_index=t.number();break;case 2:e.division=t.number();break;case 3:e.weight_index=t.number();break;case 4:e.revision=t.number();break;case 5:e.eventlog_word_count=t.number();break;case 6:e.state_sha256=t.bytes();break;case 7:e.bracket_id=t.text();break;case 8:e.weight_class_id=t.text();break;default:throw new Error("Unknown binary field")}return Me(r,Xr(e)),e}function Zr(r){const e=new $e;e.text(1,r.tournament_id),e.number(2,r.base_epoch_utc,4294967295),e.number(3,r.revision,9007199254740991),e.number(4,r.mat_count,4294967295),e.bytes(5,r.rules_hash),e.bytes(6,r.authority_public_key);for(const t of r.teams)e.bytes(7,Qr(t),!1);for(const t of r.brackets)e.bytes(8,Xr(t),!1);return e.take()}function P0(r){const e={tournament_id:"",base_epoch_utc:0,revision:0,mat_count:0,rules_hash:new Uint8Array,authority_public_key:new Uint8Array,teams:[],brackets:[]},t=new Le(r);for(;t.next();)switch(t.field){case 1:e.tournament_id=t.text();break;case 2:e.base_epoch_utc=t.number();break;case 3:e.revision=t.number();break;case 4:e.mat_count=t.number();break;case 5:e.rules_hash=t.bytes();break;case 6:e.authority_public_key=t.bytes();break;case 7:e.teams.push(S0(t.bytes()));break;case 8:e.brackets.push(T0(t.bytes()));break;default:throw new Error("Unknown binary field")}return Me(r,Zr(e)),e}function zs(r){const e=new $e;e.number(1,r.bracket_index,4294967295),e.number(2,r.division,4),e.number(3,r.weight_index,4294967295),e.number(4,r.format,4294967295),e.number(5,r.revision,9007199254740991);for(const t of r.athletes)e.bytes(6,Kr(t),!1);for(const t of r.bouts)e.bytes(7,Kn(t),!1);return e.bytes(8,r.placement_slots),e.text(30,r.tournament_id),e.text(31,r.bracket_id),e.take()}function eo(r){const e={bracket_index:0,division:0,weight_index:0,format:0,revision:0,athletes:[],bouts:[],placement_slots:new Uint8Array,tournament_id:"",bracket_id:""},t=new Le(r);for(;t.next();)switch(t.field){case 1:e.bracket_index=t.number();break;case 2:e.division=t.number();break;case 3:e.weight_index=t.number();break;case 4:e.format=t.number();break;case 5:e.revision=t.number();break;case 6:e.athletes.push(R0(t.bytes()));break;case 7:e.bouts.push(Jr(t.bytes()));break;case 8:e.placement_slots=t.bytes();break;case 30:e.tournament_id=t.text();break;case 31:e.bracket_id=t.text();break;default:throw new Error("Unknown binary field")}return Me(r,zs(e)),e}function M0(){return{bracket_index:0,division:0,weight_index:0,format:0,revision:0,athletes:[],bouts:[],placement_slots:new Uint8Array,tournament_id:"",bracket_id:""}}function Jn(r){const e=new $e;return e.number(1,r.mat_id,4294967295),e.number(2,r.bracket_index,4294967295),e.number(3,r.local_number,4294967295),e.number(4,r.bout_number,4294967295),e.number(5,r.red_slot,4294967295),e.number(6,r.green_slot,4294967295),e.number(7,r.red_score,4294967295),e.number(8,r.green_score,4294967295),e.number(9,r.period,4294967295),e.number(10,r.clock_remaining_ds,4294967295),e.number(11,r.clock_running,4294967295),e.number(12,r.on_deck,4294967295),e.number(13,r.in_the_hole,4294967295),e.bytes(14,r.eventlog_words),e.text(30,r.tournament_id),e.text(31,r.bracket_id),e.number(32,r.revision,9007199254740991),e.take()}function to(r){const e={mat_id:0,bracket_index:0,local_number:0,bout_number:0,red_slot:0,green_slot:0,red_score:0,green_score:0,period:0,clock_remaining_ds:0,clock_running:0,on_deck:0,in_the_hole:0,eventlog_words:new Uint8Array,tournament_id:"",bracket_id:"",revision:0},t=new Le(r);for(;t.next();)switch(t.field){case 1:e.mat_id=t.number();break;case 2:e.bracket_index=t.number();break;case 3:e.local_number=t.number();break;case 4:e.bout_number=t.number();break;case 5:e.red_slot=t.number();break;case 6:e.green_slot=t.number();break;case 7:e.red_score=t.number();break;case 8:e.green_score=t.number();break;case 9:e.period=t.number();break;case 10:e.clock_remaining_ds=t.number();break;case 11:e.clock_running=t.number();break;case 12:e.on_deck=t.number();break;case 13:e.in_the_hole=t.number();break;case 14:e.eventlog_words=t.bytes();break;case 30:e.tournament_id=t.text();break;case 31:e.bracket_id=t.text();break;case 32:e.revision=t.number();break;default:throw new Error("Unknown binary field")}return Me(r,Jn(e)),e}function so(r){const e=new $e;for(const t of r.mats)e.bytes(1,Jn(t),!1);return e.text(30,r.tournament_id),e.number(32,r.revision,9007199254740991),e.take()}function $0(r){const e={mats:[],tournament_id:"",revision:0},t=new Le(r);for(;t.next();)switch(t.field){case 1:e.mats.push(to(t.bytes()));break;case 30:e.tournament_id=t.text();break;case 32:e.revision=t.number();break;default:throw new Error("Unknown binary field")}return Me(r,so(e)),e}function no(r){const e=new $e;return e.number(1,r.bracket_index,4294967295),e.number(2,r.revision,9007199254740991),e.bytes(3,Kn(r.bout),!1),e.bytes(4,r.eventlog_words),e.text(30,r.tournament_id),e.text(31,r.bracket_id),e.take()}function L0(r){const e={bracket_index:0,revision:0,bout:I0(),eventlog_words:new Uint8Array,tournament_id:"",bracket_id:""},t=new Le(r);for(;t.next();)switch(t.field){case 1:e.bracket_index=t.number();break;case 2:e.revision=t.number();break;case 3:e.bout=Jr(t.bytes());break;case 4:e.eventlog_words=t.bytes();break;case 30:e.tournament_id=t.text();break;case 31:e.bracket_id=t.text();break;default:throw new Error("Unknown binary field")}return Me(r,no(e)),e}function io(r){const e=new $e;return e.number(1,r.bracket_index,4294967295),e.bytes(2,r.eventlog_words),e.text(30,r.tournament_id),e.text(31,r.bracket_id),e.number(32,r.revision,9007199254740991),e.take()}function N0(r){const e={bracket_index:0,eventlog_words:new Uint8Array,tournament_id:"",bracket_id:"",revision:0},t=new Le(r);for(;t.next();)switch(t.field){case 1:e.bracket_index=t.number();break;case 2:e.eventlog_words=t.bytes();break;case 30:e.tournament_id=t.text();break;case 31:e.bracket_id=t.text();break;case 32:e.revision=t.number();break;default:throw new Error("Unknown binary field")}return Me(r,io(e)),e}function ro(r){const e=new $e;return e.bytes(1,zs(r.state),!1),e.bytes(2,r.eventlog_words),e.text(30,r.tournament_id),e.text(31,r.bracket_id),e.number(32,r.revision,9007199254740991),e.take()}function O0(r){const e={state:M0(),eventlog_words:new Uint8Array,tournament_id:"",bracket_id:"",revision:0},t=new Le(r);for(;t.next();)switch(t.field){case 1:e.state=eo(t.bytes());break;case 2:e.eventlog_words=t.bytes();break;case 30:e.tournament_id=t.text();break;case 31:e.bracket_id=t.text();break;case 32:e.revision=t.number();break;default:throw new Error("Unknown binary field")}return Me(r,ro(e)),e}function oo(r){const e=new $e;return e.bytes(1,r.body),e.bytes(2,r.signature),e.take()}function U0(r){const e={body:new Uint8Array,signature:new Uint8Array},t=new Le(r);for(;t.next();)switch(t.field){case 1:e.body=t.bytes();break;case 2:e.signature=t.bytes();break;default:throw new Error("Unknown binary field")}return Me(r,oo(e)),e}const Gs=["tournament-summary","mat-board","mat-update","bout-update","bracket-state","bracket-eventlog","bracket-full"],ao={"tournament-summary":[Zr,P0],"mat-board":[so,$0],"mat-update":[Jn,to],"bout-update":[no,L0],"bracket-state":[zs,eo],"bracket-eventlog":[io,N0],"bracket-full":[ro,O0]};function Xn(r){return de(Gs.includes(r),"Unknown binary topic"),`OpenMat:v2:${r==="tournament-summary"?"summary":r}`}function de(r,e){if(!r)throw new Error(e)}function js(r){const e=new Uint8Array(r.length*4),t=new DataView(e.buffer);for(let s=0;s<r.length;s++){const n=r[s];de(Number.isInteger(n)&&n>=0&&n<=4294967295,"Invalid eventlog word"),t.setUint32(s*4,n,!0)}return e}function Ps(r){de(r.length%4===0,"Truncated eventlog word");const e=new DataView(r.buffer,r.byteOffset,r.byteLength),t=new Uint32Array(r.length/4);for(let s=0;s<t.length;s++)t[s]=e.getUint32(s*4,!0);return t}function Ys(r){if(!r.length)return;const e=Ps(r);let t=0;for(const s of e.subarray(1)){const n=s&127,i=s>>>7;de(n>0&&n<75&&i>=t,"Invalid packed bout log"),t=i}}function W0(r,e,t){de(Number.isInteger(r)&&r>=0&&r<=255&&t.length<=255,"Bracket log header overflow");let s=0;for(const a of t)de(a.length>0,"Missing bout base word"),Ys(js(a)),s+=a.length;de(s<=65535,"Bracket log offsets exceed uint16");const n=3+Math.ceil((t.length+1)/2),i=new Uint32Array(n+s);i[0]=1296389682,i[1]=(r|t.length<<8|s<<16)>>>0,i[2]=e;let o=0;for(let a=0;a<=t.length;a++)i[3+(a>>>1)]|=o<<a%2*16,a<t.length&&(i.set(Array.from(t[a]),n+o),o+=t[a].length);return i}function Mi(r,e){de(r.length>=4&&r[0]===1296389682&&(r[1]&255)===e,"Invalid bracket log header");const t=r[1]>>>8&255,s=r[1]>>>16,n=3+Math.ceil((t+1)/2);de(r.length===n+s,"Truncated bracket log");const i=a=>r[3+(a>>>1)]>>>a%2*16&65535;de(i(0)===0&&i(t)===s,"Invalid bracket log offsets"),t%2===0&&de(r[n-1]>>>16===0,"Nonzero offset padding");const o=[];for(let a=0;a<t;a++){const l=i(a),c=i(a+1);de(l<c&&c<=s,"Invalid bout offset");const x=r.slice(n+l,n+c);Ys(js(x)),o.push(x)}return o}function We(r,e,t,s,n,i){de(r.length>0&&r.length<=150&&t>0,"Missing tournament identity or revision"),de(!s||r===s,"Wrong tournament"),de(!n||e===n,"Wrong bracket"),de(!i||/^[A-Za-z0-9_-]{1,100}$/.test(e),"Invalid bracket id")}function $i(r){de(r.mat_id>=1&&r.mat_id<=20&&r.bracket_index<=255&&r.clock_running<=1&&r.period<=9,"Invalid mat update"),Ys(r.eventlog_words)}function Li(r){de(r.bracket_index<=255&&r.division>=1&&r.division<=4&&r.weight_index<14&&r.format>=1&&r.format<=7&&r.athletes.length<=255&&r.bouts.length<=255,"Invalid bracket state");const e=new Set([0]),t=new Set([0]),s=new Set,n=new Set;let i=0;for(const o of r.athletes)de(o.slot>i&&o.slot<=255&&o.team_index>0&&o.state>=1&&o.state<=5&&o.athlete_id&&!s.has(o.athlete_id),"Invalid bracket athlete"),i=o.slot,e.add(o.slot),s.add(o.athlete_id);i=0;for(const o of r.bouts)de(o.local_number>i&&o.local_number<=255&&o.flags<=31&&o.period<=9&&o.mat_id<=20&&o.match_id&&!n.has(o.match_id),"Invalid bracket bout"),i=o.local_number,t.add(o.local_number),n.add(o.match_id),de([o.red_slot,o.green_slot,o.winner_slot,o.loser_slot].every(a=>e.has(a)),"Unknown athlete slot");for(const o of r.bouts)de(t.has(o.winner_next)&&t.has(o.loser_next),"Unknown bout edge");for(const o of r.placement_slots)de(e.has(o),"Unknown placement slot")}function lo(r,e,t="",s=""){Xn(r);const n=ao[r][1](e);if(r==="tournament-summary"){const i=n;We(i.tournament_id,"",i.revision,t,s,!1),de(i.mat_count<=20&&i.rules_hash.length===32&&i.authority_public_key.length===32,"Invalid summary");const o=new Set,a=new Set;let l=-1;for(const c of i.teams)de(c.index>0&&!o.has(c.index),"Duplicate team index"),o.add(c.index);for(const c of i.brackets)We(i.tournament_id,c.bracket_id,c.revision,t,"",!0),de(c.bracket_index<=255&&c.bracket_index>l&&c.division>=1&&c.division<=4&&c.weight_index<14&&c.state_sha256.length===32&&!a.has(c.bracket_id),"Invalid bracket directory"),l=c.bracket_index,a.add(c.bracket_id)}else if(r==="mat-board"){const i=n;We(i.tournament_id,"",i.revision,t,s,!1);let o=0;for(const a of i.mats)We(a.tournament_id,a.bracket_id,a.revision,i.tournament_id,"",!0),$i(a),de(a.mat_id>o&&a.revision<=i.revision,"Invalid mat board order/revision"),o=a.mat_id}else if(r==="mat-update"){const i=n;We(i.tournament_id,i.bracket_id,i.revision,t,s,!0),$i(i)}else if(r==="bout-update"){const i=n;We(i.tournament_id,i.bracket_id,i.revision,t,s,!0),de(i.bracket_index<=255&&i.bout.local_number>0&&i.bout.local_number<=255&&i.bout.flags<=31&&i.bout.period<=9&&i.bout.mat_id<=20&&i.bout.match_id,"Invalid bout update"),Ys(i.eventlog_words)}else if(r==="bracket-state"){const i=n;We(i.tournament_id,i.bracket_id,i.revision,t,s,!0),Li(i)}else if(r==="bracket-eventlog"){const i=n;We(i.tournament_id,i.bracket_id,i.revision,t,s,!0),Mi(Ps(i.eventlog_words),i.bracket_index)}else{const i=n;We(i.tournament_id,i.bracket_id,i.revision,t,s,!0),We(i.state.tournament_id,i.state.bracket_id,i.state.revision,i.tournament_id,i.bracket_id,!0),de(i.revision===i.state.revision,"Full packet revision mismatch"),Li(i.state),de(Mi(Ps(i.eventlog_words),i.state.bracket_index).length===i.state.bouts.length,"Full packet bout count mismatch")}return n}function co(r,e){const t=ao[r][0],s=t(e);return lo(r,s),s}function H0(r,e,t){const s=co(r,e);return oo({body:s,signature:qe(Xn(r),s,t)})}function _c(r,e){if(!Gs.includes(r))return r;const t=lo(r,U0(e).body);if(r==="mat-update")return`${r}:${t.mat_id}`;if(r==="bout-update"){const s=t;return`${r}:${s.bracket_id}:${s.bout.local_number}`}return"bracket_id"in t?`${r}:${t.bracket_id}`:r}const xo=[null,{kind:0,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:1,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:1,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:6,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:7,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:9,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:0,scoring:1,choice:1,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:0,scoring:1,choice:2,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:0,scoring:1,choice:4,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:1,scoring:1,choice:1,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:1,scoring:1,choice:2,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:3,corner:1,scoring:1,choice:4,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:2,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:3,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:4,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:5,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:6,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:7,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:8,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:9,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:10,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:11,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:12,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:13,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:14,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:0,scoring:15,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:2,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:3,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:4,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:5,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:6,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:7,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:8,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:9,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:10,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:11,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:12,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:13,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:14,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:2,corner:1,scoring:15,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:4,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:5,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:15,corner:0,scoring:1,choice:3,timer:1,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Injury"},{kind:15,corner:0,scoring:1,choice:3,timer:2,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Injury"},{kind:15,corner:0,scoring:1,choice:3,timer:3,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Blood"},{kind:15,corner:0,scoring:1,choice:3,timer:4,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Blood"},{kind:15,corner:0,scoring:1,choice:3,timer:5,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!0,reason:"Recovery"},{kind:15,corner:0,scoring:1,choice:3,timer:6,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!0,reason:"Recovery"},{kind:15,corner:0,scoring:1,choice:3,timer:7,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!0,infraction_caused:!1,reason:"HNC"},{kind:15,corner:0,scoring:1,choice:3,timer:8,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!0,infraction_caused:!1,reason:"HNC"},{kind:16,corner:0,scoring:1,choice:3,timer:1,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:2,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:3,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:4,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:5,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:6,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:7,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:16,corner:0,scoring:1,choice:3,timer:8,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!0,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:10,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:2500,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:10,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:2500,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:11,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:11,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:12,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:12,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:13,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:13,corner:1,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:20,corner:0,scoring:11,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:""},{kind:14,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Undo"},{kind:17,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!1,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Confirmed"},{kind:17,corner:0,scoring:1,choice:3,timer:0,remaining_ms:0,pin_observed_ms:0,occurred_monotonic_ns:null,score_delta:0,under_protest:!0,can_continue:!1,healthcare_present:!1,infraction_caused:!1,reason:"Protest"}],V0=33554431;function Ni(r){const e=r.kind===1?["corner"]:r.kind===2?["corner","scoring"]:r.kind===3?["corner","choice"]:[10,11,12,13].includes(Number(r.kind))?["corner"]:[15,16,19].includes(Number(r.kind))?["timer"]:r.kind===17?["under_protest"]:[];return JSON.stringify([r.kind===19?16:r.kind,...e.map(t=>r[t])])}function nn(r,e){if(!Number.isInteger(e)||e<0||e>V0||r.occurred_monotonic_ns!=null||[16,19].includes(Number(r.kind))&&!r.can_continue||r.kind===20&&r.scoring!==11||r.kind===10&&Number(r.pin_observed_ms)<2e3||r.kind===15&&([5,6].includes(Number(r.timer))&&!r.infraction_caused||[7,8].includes(Number(r.timer))&&!r.healthcare_present))throw new Error("Command requires the signed journal");const t=Ni(r),s=xo.findIndex(n=>n&&Ni(n)===t);if(s<1)throw new Error("Unsupported atomic command");return e*128+s>>>0}const q0=["","DEC","MD","TF","FALL","DQ","INJURY_DEFAULT","FORFEIT","MEDICAL_FORFEIT"];function Bn(r,e){const t=s=>s.lifecycle>$.Ready?0:s.lifecycle===$.Ready?1:2;return t(r)-t(e)||(r.mat_queue_order||1/0)-(e.mat_queue_order||1/0)||r.bout_number-e.bout_number}const z0=["TAKEDOWN_3","ESCAPE_1","REVERSAL_2","NEAR_FALL_2","NEAR_FALL_3","NEAR_FALL_4","NEAR_FALL_INJURY_OR_SCREAMING_4","CAUTION","STALLING","TECHNICAL_VIOLATION","ILLEGAL_HOLD","UNNECESSARY_ROUGHNESS","UNSPORTSMANLIKE_WRESTLER","UNSPORTSMANLIKE_COACH","FLAGRANT_MISCONDUCT"],G0=["TOP","BOTTOM","NEUTRAL","DEFER"],j0=["MATCH_PERIOD","INJURY_RED","INJURY_GREEN","BLOOD_RED","BLOOD_GREEN","RECOVERY_RED","RECOVERY_GREEN","HEAD_NECK_RED","HEAD_NECK_GREEN"];function Y0(r,e){const t=s=>s==="RED"?0:s==="GREEN"?1:-1;switch(r.event_type){case"MATCH_CLOCK_TOGGLE":return{kind:e.clock_action==="START"?6:e.clock_action==="STOP"?7:-1};case"MATCH_DISK_TOSS":return{kind:1,corner:t(e.actor)};case"MATCH_PERIOD_CHOICE":return{kind:3,corner:t(e.chooser),choice:G0.indexOf(String(e.decision))+1};case"MATCH_SCORING_ACTION":{const s=e.public_state;if(Number(e.manual_delta??0)!==0||s&&s.bout_ended!==!0&&Math.abs(Number(s.red_score)-Number(s.green_score))>=15)throw new Error("Score needs the signed journal");return{kind:2,corner:t(e.actor),scoring:z0.indexOf(String(e.action))+1}}case"MATCH_MEDICAL_DECISION":return{kind:e.start===!0?15:16,timer:j0.indexOf(String(e.timer)),can_continue:e.can_continue===!0,healthcare_present:e.healthcare_present===!0,infraction_caused:e.infraction_caused===!0};case"MATCH_ADVANCE_PERIOD":return{kind:9};case"MATCH_CONFIRM_RESULT":return{kind:17,under_protest:e.under_protest===!0};case"MATCH_ENDING_ACTION":return{kind:{FALL:10,INJURY_DEFAULT:11,FORFEIT:12,MEDICAL_FORFEIT:13}[String(e.ending_type)]??-1,corner:t(e.actor),pin_observed_ms:String(e.ending_type)==="FALL"?Math.max(2e3,Number(e.fall_time_ms??0)):Number(e.fall_time_ms??0)};default:throw new Error("Command needs the signed journal")}}function Q0(r=[]){const e=r[0];if(!e)return new Uint8Array;const t=[Math.floor(e.audit_time_ms/1e3)];let s=e.monotonic_time_ns,n=0,i,o,a;try{if(!Number.isSafeInteger(t[0])||t[0]<0||t[0]>4294967295)return new Uint8Array;const l=r.some(c=>c.event_type!=="MATCH_COMMAND");l&&t.push(nn(xo[1],0));for(const c of r){if(c.boot_id!==e.boot_id||c.monotonic_time_ns<s)return new Uint8Array;let x=Math.floor((c.monotonic_time_ns-e.monotonic_time_ns)/1e8);const d=c.payload instanceof Uint8Array?Re(c.payload):c.payload,u=l?Y0(c,d):d.command;if(!u||!l&&t.length===1&&u.kind!==0)return new Uint8Array;const _=d.public_state??d.projection,p=Array.isArray(_?.timers)?_.timers[0]:void 0,h=Number(_?.clock_remaining_ms??p?.remaining_ms);if(l&&d.auto_start_clock===!0&&(t.push(nn({kind:6},x)),i=x,o=c.monotonic_time_ns,a=h),[2,4,5,10].includes(Number(u.kind))&&i!==void 0&&o!==void 0&&Number.isFinite(a)&&c.monotonic_time_ns-o<a*1e6){const m=i+Math.ceil(a/100);if(x>=m){if(m<=n)return new Uint8Array;x=m-1}}if(x<n)return new Uint8Array;t.push(nn(u,x)),u.kind===6?(i=x,o=c.monotonic_time_ns,a=h):(u.kind===7||u.kind===9)&&(i=o=a=void 0),s=c.monotonic_time_ns,n=x}return js(t)}catch{return new Uint8Array}}function K0(r,e,t,s,n){const i=r.tournament_id,o=Math.max(r.snapshot_epoch,r.control_sequence_head),a={tournament_id:i,revision:o},l=new Map,c=(g,b,C="",B=0)=>{const w=co(g,{...b,revision:1,...g==="bracket-full"?{state:{...b.state,revision:1}}:{},...g==="mat-board"?{mats:b.mats.map(f=>({...f,revision:1}))}:{}});let D;l.set(`${g}:${C}:${B}`,{topic:g,bracketId:C,content:w,get bytes(){return D??=H0(g,b,t)}})},x=new Map(r.athletes.map(g=>[g.team_id,g.team_name])),d=new Map(r.standings.map(g=>[g.team_id,g.total_points])),u=[...x.keys()].sort().map((g,b)=>({index:b+1,team_id:g,name:x.get(g),half_points:Math.max(0,Math.round((d.get(g)??0)*2))})),_=new Map(u.map(g=>[g.team_id,g.index])),p=new Map,h=new Map;for(const g of r.bouts){const b=p.get(g.bracket_id)??[];if(b.push(g),p.set(g.bracket_id,b),g.assigned_mat_id>0&&g.lifecycle>=$.Assigned&&g.lifecycle<=$.LocallyConfirmed&&g.red_athlete_id&&g.green_athlete_id&&!g.is_bye){const C=h.get(g.assigned_mat_id)??[];C.push(g),h.set(g.assigned_mat_id,C)}}for(const g of h.values())g.sort(Bn);const m=[],E=[],F=n.size?Math.floor(Math.min(...[...n.values()].map(g=>g[0].audit_time_ms))/1e3):0;for(const[g,b]of[...p.keys()].sort().entries()){const C=p.get(b).sort((O,j)=>O.match_id.localeCompare(j.match_id)),B=C[0],w=(B.division_id||"VARSITY").toUpperCase(),D={GIRLS:2,JV:3,NOVICE:3,U16:4}[w]??1,f=mt(w),P=mt(D===2?"VARSITY":"GIRLS"),N=f.indexOf(B.weight_class_id),y=P.indexOf(B.weight_class_id),A=N>=0?N:y>=0?y:0,k=new Set(C.flatMap(O=>[O.red_athlete_id,O.green_athlete_id,O.winner_athlete_id,O.loser_athlete_id])),v=r.athletes.filter(O=>k.has(O.athlete_id)||O.weight_class_id===B.weight_class_id&&(O.division_id||"VARSITY").toUpperCase()===w).sort((O,j)=>O.athlete_id.localeCompare(j.athlete_id)),M=v.map((O,j)=>({slot:j+1,team_index:_.get(O.team_id),seed_rank:O.seed_rank,state:O.check_in_stage>=6?3:O.check_in_stage>=2?2:1,public_stage:O.check_in_stage,display_name:O.public_display_name,athlete_id:O.athlete_id})),S=new Map(M.map(O=>[O.athlete_id,O.slot])),T=new Map(C.map((O,j)=>[O.match_id,j+1])),q=new Uint8Array(8),z=[],L=C.map((O,j)=>{const Y=Q0(n.get(O.match_id));z.push(Y.length?Ps(Y):Uint32Array.of(0));const K={local_number:j+1,bout_number:O.bout_number,round_index:O.round_index,flags:Number(O.is_consolation)|Number(O.is_placement_bout)<<1|Number(O.is_true_second_challenge)<<2|Number(O.is_bye)<<3|(O.winner_athlete_id&&O.winner_athlete_id===O.green_athlete_id?16:0),placement_rank:O.placement_rank,red_slot:S.get(O.red_athlete_id)??0,green_slot:S.get(O.green_athlete_id)??0,winner_slot:S.get(O.winner_athlete_id)??0,loser_slot:S.get(O.loser_athlete_id)??0,winner_next:T.get(O.winner_next_match_id)??0,loser_next:T.get(O.loser_next_match_id)??0,edge_flags:0,lifecycle:O.lifecycle-1,win_type:O.win_type==="BYE"?7:Math.max(0,q0.indexOf(O.win_type)),red_score:O.red_score,green_score:O.green_score,period:O.period_number,clock_remaining_ds:Math.floor(O.clock_remaining_ms/100),mat_id:O.assigned_mat_id,assignment_revision:O.assignment_revision,completed_offset_sec:Math.floor(O.completed_at_ms/1e3),match_id:O.match_id,eventlog_available:+(Y.length>0)};c("bout-update",{...a,bracket_id:b,bracket_index:g,bout:K,eventlog_words:Y},b,K.local_number),O.is_placement_bout&&!O.is_true_second_challenge&&O.placement_rank>=1&&O.placement_rank<=7&&K.winner_slot&&(q[O.placement_rank-1]=K.winner_slot,q[O.placement_rank]=K.loser_slot);const te=h.get(O.assigned_mat_id);return te?.[0]===O&&m.push({...a,bracket_id:b,bracket_index:g,mat_id:K.mat_id,local_number:K.local_number,bout_number:K.bout_number,red_slot:K.red_slot,green_slot:K.green_slot,red_score:K.red_score,green_score:K.green_score,period:K.period,clock_remaining_ds:K.clock_remaining_ds,clock_running:Number(O.clock_running),eventlog_words:Y,on_deck:te[1]?.bout_number??0,in_the_hole:te[2]?.bout_number??0}),K}),W=B.format===J.RoundRobinPool?5:B.format===J.PoolToBracket?6:B.format===J.TeamDual?7:v.length<=8?1:v.length<=16?2:v.length<=32?3:4,V={...a,bracket_id:b,bracket_index:g,division:D,weight_index:A,format:W,athletes:M,bouts:L,placement_slots:q};c("bracket-state",V,b);const H=js(W0(g,F,z));c("bracket-full",{...a,bracket_id:b,state:V,eventlog_words:H},b),E.push({bracket_id:b,bracket_index:g,division:D,weight_index:A,revision:o,eventlog_word_count:H.length/4,state_sha256:Oe(zs(V)),weight_class_id:B.weight_class_id})}m.sort((g,b)=>g.mat_id-b.mat_id);for(const g of m)c("mat-update",g,g.bracket_id,g.mat_id);return c("mat-board",{...a,mats:m}),c("tournament-summary",{...a,base_epoch_utc:F,mat_count:r.mat_count,rules_hash:s,authority_public_key:e,teams:u,brackets:E}),l}const Oi=(r,e)=>(r+(r>=0?e:-e)/X0)/e;function J0(r,e,t){fn("scalar",r,At,t);const[[s,n],[i,o]]=e,a=Oi(o*r,t),l=Oi(-n*r,t);let c=r-a*s-l*i,x=-a*n-l*o;const d=c<At,u=x<At;d&&(c=-c),u&&(x=-x);const _=yr(Math.ceil(Nn(t)/2))+qt;if(c<At||c>=_||x<At||x>=_)throw new Error("splitScalar (endomorphism): failed for k");return{k1neg:d,k1:c,k2neg:u,k2:x}}const At=BigInt(0),qt=BigInt(1),X0=BigInt(2),rn=BigInt(3),Z0=BigInt(4);function el(r,e={}){const t=Lr("weierstrass",r,e),s=t.Fp,n=t.Fn;let i=t.CURVE;const{h:o,n:a}=i;_t(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",randomBytes:"function"});const{endo:l,allowInfinityPoint:c,clearCofactor:x,isTorsionFree:d,fromBytes:u,toBytes:_}=e,p=e.randomBytes===void 0?$n:e.randomBytes;if(l&&(!s.is0(i.a)||typeof l.beta!="bigint"||!Array.isArray(l.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const h=l?{beta:l.beta,basises:l.basises.map(z=>[...z])}:void 0,m=sl(s,n);function E(){if(!s.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function F(z,L,W){if(L.is0()){if(!c)throw new Error("bad point: ZERO");return Uint8Array.of(0)}const{x:V,y:H}=L.toAffine(),O=s.toBytes(V);if(it(W,"isCompressed"),W){E();const j=!s.isOdd(H);return Tt(tl(j),O)}else return Tt(Uint8Array.of(4),O,s.toBytes(H))}function g(z){pe(z,void 0,"Point");const{publicKey:L,publicKeyUncompressed:W}=m,V=z.length,H=z[0],O=z.subarray(1);if(c&&V===1&&H===0)return{x:s.ZERO,y:s.ZERO};if(V===L&&(H===2||H===3)){const j=s.fromBytes(O);if(!s.isValid(j))throw new Error("bad point: is not on curve, wrong x");const Y=D(j);let K;try{K=s.sqrt(Y)}catch(ue){const Be=ue instanceof Error?": "+ue.message:"";throw new Error("bad point: is not on curve, sqrt error"+Be)}E();const te=s.isOdd(K);return(H&1)===1!==te&&(K=s.neg(K)),{x:j,y:K}}else if(V===W&&H===4){const j=s.BYTES,Y=s.fromBytes(O.subarray(0,j)),K=s.fromBytes(O.subarray(j,j*2));if(!f(Y,K))throw new Error("bad point: is not on curve");return{x:Y,y:K}}else throw new Error(`bad point: got length ${V}, expected compressed=${L} or uncompressed=${W}`)}const b=_===void 0?F:_,C=u===void 0?g:u,B=s.mul(i.b,rn),w=s.is0(i.a)?z=>s.ZERO:z=>s.mul(i.a,z);function D(z){const L=s.sqr(z),W=s.mul(L,z);return s.add(s.add(W,s.mul(z,i.a)),i.b)}function f(z,L){const W=s.sqr(L),V=D(z);return s.eql(W,V)}if(!f(i.Gx,i.Gy))throw new Error("bad curve params: generator point");const P=s.mul(s.pow(i.a,rn),Z0),N=s.mul(s.sqr(i.b),BigInt(27));if(s.is0(s.add(P,N)))throw new Error("bad curve params: a or b");function y(z,L,W=!1){if(!s.isValid(L)||W&&s.is0(L))throw new Error(`bad point coordinate ${z}`);return typeof L=="object"&&L!==null?s.create(L):L}function A(z){if(!(z instanceof S))throw new Error("Weierstrass Point expected")}function k(z){if(!h||!h.basises)throw new Error("no endo");return J0(z,h.basises,n.ORDER)}function v(z,L,W,V){if(!n.isValid(V))throw new RangeError("invalid scalar: out of range");if(h){const{k1neg:H,k1:O,k2neg:j,k2:Y}=k(V),K=new S(s.mul(W.X,h.beta),W.Y,W.Z);z.push(H?W.negate():W,j?K.negate():K),L.push(O,Y)}else z.push(W),L.push(V)}const M=new WeakSet;class S{static BASE=new S(i.Gx,i.Gy,s.ONE);static ZERO=new S(s.ZERO,s.ONE,s.ZERO);static Fp=s;static Fn=n;X;Y;Z;constructor(L,W,V){this.X=y("x",L),this.Y=y("y",W,!0),this.Z=y("z",V),Object.freeze(this)}static CURVE(){return i}static fromAffine(L){const{x:W,y:V}=L||{};if(!L||!s.isValid(W)||!s.isValid(V))throw new Error("invalid affine point");if(L instanceof S)throw new Error("projective point not allowed");return s.is0(W)&&s.is0(V)?S.ZERO:new S(W,V,s.ONE)}static fromBytes(L){const W=S.fromAffine(C(pe(L,void 0,"point")));return W.assertValidity(),W}static fromHex(L){return S.fromBytes(br(L))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(L=6,W=!0){return q.setWindowSize(this,L),W||this.multiply(rn),this}assertValidity(){const L=this;if(L.is0()){if(c&&s.is0(L.X)&&s.eql(L.Y,s.ONE)&&s.is0(L.Z))return;throw new Error("bad point: ZERO")}if(M.has(L))return;const{x:W,y:V}=L.toAffine();if(!s.isValid(W)||!s.isValid(V))throw new Error("bad point: x or y not field elements");if(!f(W,V))throw new Error("bad point: equation left != right");if(!L.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");M.add(L)}hasEvenY(){const{y:L}=this.toAffine();if(!s.isOdd)throw new Error("Field doesn't support isOdd");return!s.isOdd(L)}equals(L){A(L);const{X:W,Y:V,Z:H}=this,{X:O,Y:j,Z:Y}=L,K=s.eql(s.mul(W,Y),s.mul(O,H)),te=s.eql(s.mul(V,Y),s.mul(j,H));return K&&te}negate(){return new S(this.X,s.neg(this.Y),this.Z)}double(){const{X:L,Y:W,Z:V}=this;let H=s.ZERO,O=s.ZERO,j=s.ZERO,Y=s.mul(L,L),K=s.mul(W,W),te=s.mul(V,V),re=s.mul(L,W);return re=s.add(re,re),j=s.mul(L,V),j=s.add(j,j),H=w(j),O=s.mul(B,te),O=s.add(H,O),H=s.sub(K,O),O=s.add(K,O),O=s.mul(H,O),H=s.mul(re,H),j=s.mul(B,j),te=w(te),re=s.sub(Y,te),re=w(re),re=s.add(re,j),j=s.add(Y,Y),Y=s.add(j,Y),Y=s.add(Y,te),Y=s.mul(Y,re),O=s.add(O,Y),te=s.mul(W,V),te=s.add(te,te),Y=s.mul(te,re),H=s.sub(H,Y),j=s.mul(te,K),j=s.add(j,j),j=s.add(j,j),new S(H,O,j)}add(L){A(L);const{X:W,Y:V,Z:H}=this,{X:O,Y:j,Z:Y}=L;let K=s.ZERO,te=s.ZERO,re=s.ZERO,ue=s.mul(W,O),Be=s.mul(V,j),me=s.mul(H,Y),ge=s.add(W,V),se=s.add(O,j);ge=s.mul(ge,se),se=s.add(ue,Be),ge=s.sub(ge,se),se=s.add(W,H);let Ee=s.add(O,Y);return se=s.mul(se,Ee),Ee=s.add(ue,me),se=s.sub(se,Ee),Ee=s.add(V,H),K=s.add(j,Y),Ee=s.mul(Ee,K),K=s.add(Be,me),Ee=s.sub(Ee,K),re=w(se),K=s.mul(B,me),re=s.add(K,re),K=s.sub(Be,re),re=s.add(Be,re),te=s.mul(K,re),Be=s.add(ue,ue),Be=s.add(Be,ue),me=w(me),se=s.mul(B,se),Be=s.add(Be,me),me=s.sub(ue,me),me=w(me),se=s.add(se,me),ue=s.mul(Be,se),te=s.add(te,ue),ue=s.mul(Ee,se),K=s.mul(ge,K),K=s.sub(K,ue),ue=s.mul(ge,Be),re=s.mul(Ee,re),re=s.add(re,ue),new S(K,te,re)}subtract(L){return A(L),this.add(L.negate())}is0(){return this.equals(S.ZERO)}multiply(L){if(!n.isValidNot0(L))throw new RangeError("invalid scalar: out of range");const{p:W,f:V}=q.mulSecret(this,L,o,T);return T([W,V])[0]}multiplyUnsafe(L){const W=this,V=L;if(!n.isValid(V))throw new RangeError("invalid scalar: out of range");if(V===At||W.is0())return S.ZERO;if(V===qt)return W;if(q.hasWindowSize(this))return q.mulUnsafe(W,V,T);const H=[],O=[];return v(H,O,W,V),pn(S,H,O)}mulAddUnsafe(L,W,V){A(W);const H=[],O=[];return v(H,O,this,L),v(H,O,W,V),pn(S,H,O)}toAffine(L){const W=this;let V=L;if(V!=null&&!s.isValid(V))throw new RangeError('"invertedZ" expected valid field element');const{X:H,Y:O,Z:j}=W;if(s.eql(j,s.ONE))return{x:H,y:O};const Y=W.is0();V==null&&(V=Y?s.ONE:s.inv(j));const K=s.mul(H,V),te=s.mul(O,V),re=s.mul(j,V);if(Y)return{x:s.ZERO,y:s.ZERO};if(!s.eql(re,s.ONE))throw new Error("invZ was invalid");return{x:K,y:te}}isTorsionFree(){return o===qt?!0:d?d(S,this):q.mulUnsafe(this,a).is0()}clearCofactor(){return o===qt?this:x?x(S,this):this.multiplyUnsafe(o)}isSmallOrder(){return o===qt?this.is0():this.clearCofactor().is0()}toBytes(L=!0){return it(L,"isCompressed"),this.assertValidity(),b(S,this,L)}toHex(L=!0){return Er(this.toBytes(L))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}const T=z=>Tr(S,z),q=new $r(S,p);return q.bits>=6&&S.BASE.precompute(6),Object.freeze(S.prototype),Object.freeze(S),S}function tl(r){return Uint8Array.of(r?2:3)}function sl(r,e){return{secretKey:e.BYTES,publicKey:1+r.BYTES,publicKeyUncompressed:1+2*r.BYTES,publicKeyHasPrefix:!0,signature:2*e.BYTES}}const Qs={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},nl={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},il=BigInt(0),Ui=BigInt(2);function rl(r){const e=Qs.p,t=BigInt(3),s=BigInt(6),n=BigInt(11),i=BigInt(22),o=BigInt(23),a=BigInt(44),l=BigInt(88),c=r*r*r%e,x=c*c*r%e,d=fe(x,t,e)*x%e,u=fe(d,t,e)*x%e,_=fe(u,Ui,e)*c%e,p=fe(_,n,e)*_%e,h=fe(p,i,e)*p%e,m=fe(h,a,e)*h%e,E=fe(m,l,e)*m%e,F=fe(E,a,e)*h%e,g=fe(F,t,e)*x%e,b=fe(g,o,e)*p%e,C=fe(b,s,e)*c%e,B=fe(C,Ui,e);if(!Mt.eql(Mt.sqr(B),r))throw new Error("Cannot find square root");return B}const Mt=Hs(Qs.p,{sqrt:rl}),Ot=el(Qs,{Fp:Mt,endo:nl}),Wi=Object.create(null);function Ms(r,...e){let t=Wi[r];if(t===void 0){const s=mn(Na(r));t=Tt(s,s),Wi[r]=t}return mn(Tt(t,...e))}const uo=r=>r.toBytes(!0).slice(1),ho=({x:r})=>Mt.toBytes(r),Ks=r=>!Mt.isOdd(r);function _o(r){const{Fn:e,BASE:t}=Ot,s=e.fromBytes(pe(r,32,"secretKey")),i=t.multiply(s).toAffine();return{scalar:Ks(i.y)?s:e.neg(s),bytes:ho(i)}}function mo(r){const e=Mt;if(!e.isValidNot0(r))throw new Error("invalid x: Fail if x ≥ p");const t=e.sqr(r),s=e.add(e.mulN(t,r),BigInt(7));let n=e.sqrt(s);Ks(n)||(n=e.neg(n));const i=Ot.fromAffine({x:r,y:n});return i.assertValidity(),i}const St=Ws;function fo(...r){return Ot.Fn.create(St(Ms("BIP0340/challenge",...r)))}function Hi(r){return _o(r).bytes}function ol(r,e,t=Pn(32)){const{Fn:s,BASE:n}=Ot,i=os(pe(r,void 0,"message")),{bytes:o,scalar:a}=_o(e),l=pe(t,32,"auxRand"),c=s.toBytes(a^St(Ms("BIP0340/aux",l))),x=Ms("BIP0340/nonce",c,o,i),d=s.create(St(x));if(d===il)throw new Error("sign failed: k is zero");const _=n.multiply(d).toAffine(),p=Ks(_.y)?d:s.neg(d),h=ho(_),m=fo(h,o,i),E=new Uint8Array(64);if(E.set(h,0),E.set(s.toBytes(s.create(p+m*a)),32),!po(E,i,o))throw new Error("sign: Invalid signature produced");return E}function po(r,e,t){const{Fp:s,Fn:n,BASE:i}=Ot,o=pe(r,64,"signature"),a=pe(e,void 0,"message"),l=pe(t,32,"publicKey");try{const c=mo(St(l)),x=o.subarray(0,32),d=St(x);if(!s.isValidNot0(d))return!1;const u=St(o.subarray(32,64));if(!n.isValidNot0(u))return!1;const _=fo(x,uo(c),a),p=i.mulAddUnsafe(u,c,n.neg(_)),{x:h,y:m}=p.toAffine();return!(p.is0()||!Ks(m)||!s.eql(h,d))}catch{return!1}}const Vi=(()=>{const t=s=>(s=s===void 0?Pn(48):s,Ja(pe(s,48,"seed"),Qs.n));return Object.freeze({keygen:Nr(t,Hi),getPublicKey:Hi,sign:ol,verify:po,Point:Ot,utils:Object.freeze({randomSecretKey:t,taggedHash:Ms,lift_x:mo,pointToBytes:uo}),lengths:Object.freeze({secretKey:32,publicKey:32,publicKeyHasPrefix:!1,signature:64,seed:48})})})();function al(r){const e=(i,o)=>o.every(a=>typeof i[a]=="string"),t=(i,o)=>o.every(a=>Number.isSafeInteger(i[a])&&i[a]>=0),s=(i,o)=>Array.isArray(r[i])&&r[i].every(a=>a!==null&&typeof a=="object"&&o(a)),n=/^OPENMAT-VENUE-[A-F0-9]{8}$/.test(r?.tournament_id??"")&&Array.isArray(r.bouts)&&[20,60].includes(r.bouts.length)&&Array.isArray(r.athletes)&&r.athletes.length===r.bouts.length*2&&r.bouts.every(i=>/^mat-(?:[1-9]|1[0-9]|20)-bout-[123]$/.test(i?.match_id??""))&&r.athletes.every(i=>/^mat-(?:[1-9]|1[0-9]|20)-(?:q[23]-)?(?:red|green)$/.test(i?.athlete_id??""));return!!(r&&!n&&e(r,["tournament_id","tournament_name","rules_version","publisher_pubkey_hex","payload_sha256_hex","signature_hex"])&&t(r,["snapshot_epoch","control_sequence_head","published_at_ms","mat_count"])&&r.mat_count<=20&&s("athletes",i=>e(i,["athlete_id","public_display_name","team_id","team_name","weight_class_id"]))&&s("bouts",i=>e(i,["match_id","weight_class_id","round_label","red_athlete_id","green_athlete_id"])&&t(i,["bout_number","lifecycle","assigned_mat_id","red_score","green_score","period_number","clock_remaining_ms"])&&typeof i.clock_running=="boolean")&&s("mats",i=>t(i,["mat_id","authority_epoch"])&&e(i,["status"]))&&s("standings",i=>e(i,["team_id","team_name"])&&Number.isFinite(i.total_points))&&r.bracket_frozen_by_class&&typeof r.bracket_frozen_by_class=="object"&&r.ow_vote_tallies&&typeof r.ow_vote_tallies=="object"&&Object.values(r.ow_vote_tallies).every(i=>Number.isSafeInteger(i)&&Number(i)>=0))}function $s(r,e){const t=new Map;for(const n of r){const i=n.bracket_id||JSON.stringify([n.division_id?.toUpperCase()||"VARSITY",n.weight_class_id]),o=t.get(i)??new Map;o.set(n.match_id,n),t.set(i,o)}const s=new Map;for(const n of t.values()){const i=new Map,o=new Map;for(const a of n.values())if(a.is_bye||a.win_type?.toUpperCase()==="BYE"){const l=e(a),c=a.red_athlete_id&&a.green_athlete_id?"":a.red_athlete_id||a.green_athlete_id;i.set(a,!a.is_true_second_challenge&&!a.loser_athlete_id&&l===c?l:"")}else{const l=`${a.is_consolation}:${a.round_index}`,c=o.get(l)??{bouts:[],wrestled:!1};c.bouts.push(a),a.red_athlete_id&&a.green_athlete_id&&e(a)&&!["FF","FORFEIT","MEDICAL_FORFEIT"].includes(a.win_type?.toUpperCase())&&(c.wrestled=!0),o.set(l,c)}for(const[a,l]of i){if(!l||a.format==="ROUND_ROBIN_POOL"||a.format==="BEST_OF_THREE")continue;const c=o.get(`${a.is_consolation}:${a.round_index}`);if(!c)continue;const x=new Set([a.match_id]);let d=n.get(a.winner_next_match_id);for(;d&&i.get(d)===l&&d.is_consolation===a.is_consolation&&!x.has(d.match_id);)x.add(d.match_id),d=n.get(d.winner_next_match_id);if(!d||i.has(d)||d.is_consolation!==a.is_consolation||d.red_athlete_id!==l&&d.green_athlete_id!==l)continue;const u=s.get(d.match_id)??{earnedPoints:0,conditions:[]},_=a.is_consolation?1:2,p=d.red_athlete_id===l?"R":"G";u.conditions.push({corner:p,points:_,roundBouts:c.bouts}),c.wrestled&&d.red_athlete_id&&d.green_athlete_id&&e(d)===l&&(u.earnedPoints+=_),s.set(d.match_id,u)}}return s}const ll=12e4;function cl(r){return{tournament_id:r.tournament_id,peer_pubkey_hex:r.peer_pubkey_hex,role:r.role}}function go(r){const{signature:e,root_authorization:t,...s}=r;return s}function dl(r,e,t=""){const s={...r,root_authorization:t,signature:""};return s.signature=_e(e(ve(go(s)))),s}function xl(r,e,t,s=Date.now(),n=!0){try{const i=r;if(!i||!/^[0-9a-f]{64}$/.test(i.root_pubkey_hex)||!/^[0-9a-f]{64}$/.test(i.peer_pubkey_hex)||!/^[0-9a-f]{128}$/.test(i.signature)||e&&e!==i.root_pubkey_hex||t&&t!==i.tournament_id||typeof i.tournament_id!="string"||!i.tournament_id||i.tournament_id.length>150||!["PRIMARY","BACKUP","MAT_PEER"].includes(i.role)||!Number.isSafeInteger(i.authority_epoch)||i.authority_epoch<1||!Number.isSafeInteger(i.updated_at_ms)||i.updated_at_ms>s+3e4||n&&s-i.updated_at_ms>ll||!Array.isArray(i.assigned_mats)||i.assigned_mats.length>20||i.assigned_mats.some(a=>!Number.isInteger(a)||a<1||a>20)||!Array.isArray(i.active_rooms)||i.active_rooms.length>64||i.active_rooms.some(a=>typeof a!="string"||a.length>120))return!1;for(const[a,l,c]of[[i.origins,["http:","https:"],"/"],[i.nostr_relay_urls,["ws:","wss:"],"/api/openmat-nostr"],[i.p2p_broker_urls,["ws:","wss:"],"/api/openmat-p2p"]]){if(!Array.isArray(a)||a.length>8)return!1;for(const x of a){const d=new URL(x);if(!l.includes(d.protocol)||d.username||d.password||d.hash||d.search||d.pathname!==c||c!=="/"&&!i.origins.some(u=>{const _=new URL(u);return _.host===d.host&&_.protocol==="https:"==(d.protocol==="wss:")}))return!1}}const o=ce(i.root_pubkey_hex);return i.peer_pubkey_hex!==i.root_pubkey_hex&&!Pe(Fe,ve(cl(i)),o,ce(i.root_authorization))?!1:Pe(Fe,ve(go(i)),ce(i.peer_pubkey_hex),ce(i.signature))}catch{return!1}}async function mc(r,e,t){const s=new Map;return await Promise.allSettled([...new Set(r)].slice(0,8).map(async n=>{const i=await fetch(new URL("/api/openmat-registry",n),{signal:AbortSignal.timeout(2e3),redirect:"error"});if(!i.ok)return;const o=await i.text();if(o.length>262144)return;const a=JSON.parse(o);if(!(!Array.isArray(a.entries)||a.entries.length>128)){for(const l of a.entries)if(xl(l,e,t)){const c=`${l.peer_pubkey_hex}:${l.role}`,x=s.get(c);(!x||l.authority_epoch>x.authority_epoch||l.authority_epoch===x.authority_epoch&&l.updated_at_ms>x.updated_at_ms)&&s.set(c,l)}}})),[...s.values()].sort((n,i)=>(n.role==="PRIMARY"?-1:1)-(i.role==="PRIMARY"?-1:1))}const As="NFHS-2026-27-v1",Rt="NFHS-2026-27-NOVICE-1-2-2",ul=/novice|jv|1-2-2/i;function hl(r,e=18e5,t=6,s=10){const n=ul.test(r)?6e4:12e4;return{ruleset_id:r,takedown_points:3,escape_points:1,reversal_points:2,near_fall_2_points:2,near_fall_3_points:3,near_fall_4_points:4,technical_fall_margin:15,period_1_duration_ms:n,period_2_duration_ms:12e4,period_3_duration_ms:12e4,sv_duration_ms:6e4,tb_period_duration_ms:3e4,utb_duration_ms:3e4,injury_allowance_ms:9e4,blood_allowance_ms:3e5,recovery_allowance_ms:12e4,head_neck_cervical_allowance_ms:3e5,min_rest_championship_ms:e,min_rest_consolation_ms:e,max_matches_per_day:t,max_matches_in_consecutive_days:s}}function _l(r){return Oe(ve(r))}const ml="modulepreload",fl=function(r,e){return new URL(r,e).href},qi={},pl=function(e,t,s){let n=Promise.resolve();if(t&&t.length>0){let c=function(x){return Promise.all(x.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");n=c(t.map(x=>{if(x=fl(x,s),x in qi)return;qi[x]=!0;const d=x.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(s)for(let p=o.length-1;p>=0;p--){const h=o[p];if(h.href===x&&(!d||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${x}"]${u}`))return;const _=document.createElement("link");if(_.rel=d?"stylesheet":ml,d||(_.as="script"),_.crossOrigin="",_.href=x,l&&_.setAttribute("nonce",l),document.head.appendChild(_),d)return new Promise((p,h)=>{_.addEventListener("load",p),_.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${x}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return n.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},Es=10,bs=6,cs=16384,on=cs-256,Ye=20,zi=4,Gi=12,ji=11,at="control:officials",gl="om-sig",El="om-rpc",bl=5e3,Cl=6e3,st={AuthoritySource:1,SuperSeedRelay:2,PromotedRelay:3,LeafSpectator:4};function an(r){return r===st.AuthoritySource||r===st.SuperSeedRelay||r===st.PromotedRelay}function Yi(r){const e=[];for(const t of r)t&&(e.includes(t)||e.push(t));return e}function Bl(r,e){return r.some(t=>t===e||t==="*")}class Zn{topologyRevision=1;peersMap=new Map;registerSuperSeed(e,t=5e4){if(!e)return;const s={peer_id:e,role:st.SuperSeedRelay,capabilities:{plugged_into_power:!0,battery_percent:100,page_foreground_visible:!0,stable_uptime_ms:6e4,uplink_kbps:t,rtt_ms:1,packet_loss_bps:0,nat_accepts_inbound:!0},primary_parent_id:"",backup_parent_id:"",children_ids:[],ancestry_path:[],subscribed_topics:["*"],topology_revision:++this.topologyRevision,hop_depth:1,online:!0};this.peersMap.set(e,s);for(const[n,i]of this.peersMap.entries())if(!(!i.online||!i.primary_parent_id)&&!i.backup_parent_id){const o=this.selectBestParent(n,i.primary_parent_id);o&&(i.backup_parent_id=o)}}static qualifiesForRelayPromotion(e){return(e.plugged_into_power||e.battery_percent>=50)&&e.page_foreground_visible&&e.stable_uptime_ms>=3e4&&e.uplink_kbps>=1500&&e.rtt_ms<=80&&e.packet_loss_bps<=200&&e.nat_accepts_inbound}joinPeer(e,t,s,n=""){if(!e)throw new I(R.InvalidArgument,"peer_id must not be empty");const i=this.peersMap.get(e);if(i&&i.online)throw new I(R.InvalidArgument,`peer_id ${e} is already online in overlay tree`);let o=null;if(n){const x=this.peersMap.get(n);x&&x.online&&an(x.role)&&x.children_ids.length<Es&&x.hop_depth>0&&x.hop_depth+1<=bs&&!x.ancestry_path.includes(e)&&(o=n)}if(o||(o=this.selectBestParent(e,"")),!o)throw new I(R.BoundsExceeded,"No eligible parent relay with available capacity and hop budget");const a=this.selectBestParent(e,o)??"",l=this.peersMap.get(o),c={peer_id:e,role:st.LeafSpectator,capabilities:{...t},primary_parent_id:o,backup_parent_id:a,children_ids:[],ancestry_path:[...l.ancestry_path,l.peer_id],subscribed_topics:Yi(s),topology_revision:++this.topologyRevision,hop_depth:l.hop_depth+1,online:!0};return l.children_ids.includes(e)||l.children_ids.push(e),l.topology_revision=this.topologyRevision,this.peersMap.set(e,c),{...c,children_ids:[...c.children_ids],ancestry_path:[...c.ancestry_path]}}promoteIfQualified(e){const t=this.peersMap.get(e);if(!t||!t.online)throw new I(R.InvalidArgument,`Peer ${e} not found or offline`);if(an(t.role))return!0;if(t.hop_depth>=bs||!Zn.qualifiesForRelayPromotion(t.capabilities))return!1;t.role=st.PromotedRelay,t.topology_revision=++this.topologyRevision;for(const[s,n]of this.peersMap.entries())if(!(!n.online||!n.primary_parent_id)&&!n.backup_parent_id){const i=this.selectBestParent(s,n.primary_parent_id);i&&(n.backup_parent_id=i)}return!0}updateTopicSubscriptions(e,t){const s=this.peersMap.get(e);if(!s||!s.online)throw new I(R.InvalidArgument,`Peer ${e} not found or offline`);return s.subscribed_topics=Yi(t),!0}departPeerGracefully(e,t){const s=this.peersMap.get(e);if(!s||!s.online)return[];if(s.online=!1,s.topology_revision=++this.topologyRevision,s.primary_parent_id){const o=this.peersMap.get(s.primary_parent_id);o&&(o.children_ids=o.children_ids.filter(a=>a!==e))}s.primary_parent_id="",s.backup_parent_id="";const n=[...s.children_ids];if(s.children_ids=[],s.role===st.LeafSpectator&&n.length===0)return[];const i=[];for(const o of n){const a=this.reparentOrphanedChild(o,e,t,0,!0);a&&i.push(a)}return this.refreshBackupParentsAfterDeparture(),i}handleAbruptParentDrop(e,t,s=42){const n=this.peersMap.get(e);if(!n||!n.online)return[];if(n.online=!1,n.topology_revision=++this.topologyRevision,n.primary_parent_id){const a=this.peersMap.get(n.primary_parent_id);a&&(a.children_ids=a.children_ids.filter(l=>l!==e))}n.primary_parent_id="",n.backup_parent_id="";const i=[...n.children_ids];if(n.children_ids=[],n.role===st.LeafSpectator&&i.length===0)return[];const o=[];for(const a of i){let l=BigInt(s)^0x9e3779b97f4a7c15n;for(let d=0;d<a.length;d++)l^=BigInt(a.charCodeAt(d)),l=l*1099511628211n&0xffffffffffffffffn;const c=10+Number(l%231n),x=this.reparentOrphanedChild(a,e,t,c,!1);x&&o.push(x)}return this.refreshBackupParentsAfterDeparture(),o}computeTopicFanoutRecipients(e,t){if(!t)throw new I(R.InvalidArgument,"topic must not be empty");const s=this.peersMap.get(e);if(!s||!s.online)throw new I(R.InvalidArgument,`Sender peer ${e} not found or offline`);const n=[];for(const i of s.children_ids){if(n.length>=Es)break;const o=new Set([e]);this.subtreeSubscribesToTopic(i,t,o)&&n.push(i)}return n}verifyLoopFreeInvariants(){for(const[e,t]of this.peersMap.entries()){if(t.children_ids.length>Es)return!1;if(!t.online)continue;if(t.hop_depth===0||t.hop_depth>bs)return!1;const s=new Set;for(const a of t.ancestry_path){if(a===e||s.has(a))return!1;s.add(a)}const n=[],i=new Set([e]);let o=t.primary_parent_id;for(;o;){if(i.has(o))return!1;i.add(o);const a=this.peersMap.get(o);if(!a||!a.online)return!1;n.push(o),o=a.primary_parent_id}if(n.reverse(),n.length!==t.ancestry_path.length)return!1;for(let a=0;a<n.length;a++)if(n[a]!==t.ancestry_path[a])return!1;if(t.hop_depth!==n.length+1)return!1}return!0}peers(){return this.peersMap}reparentOrphanedChild(e,t,s,n,i){const o=this.peersMap.get(e);if(!o||!o.online)return null;let a="",l=!1;const c=this.selectBestParent(e,t);if(c&&(a=c,l=!!(o.backup_parent_id&&a===o.backup_parent_id)),!a){const d=[e];for(;d.length>0;){const u=d.pop(),_=this.peersMap.get(u);_&&(d.push(..._.children_ids),_.online=!1,_.primary_parent_id="",_.backup_parent_id="",_.ancestry_path=[],_.children_ids=[],_.hop_depth=0,_.topology_revision=++this.topologyRevision)}return null}const x=this.peersMap.get(a);return x.children_ids.includes(e)||x.children_ids.push(e),o.primary_parent_id=a,this.recomputeSubtreeAncestry(e,++this.topologyRevision,new Set),x.topology_revision=this.topologyRevision,o.backup_parent_id=this.selectBestParent(e,a)??"",{child_peer_id:e,old_parent_id:t,new_parent_id:a,resume_from_sequence:s,reconnect_jitter_ms:i?0:n,promoted_backup:l}}refreshBackupParentsAfterDeparture(){for(const[e,t]of this.peersMap.entries())!t.online||!t.primary_parent_id||(t.backup_parent_id=this.selectBestParent(e,t.primary_parent_id)??"")}selectBestParent(e,t){const s=this.maxRelativeSubtreeDepth(e,new Set);let n=null;for(const[i,o]of this.peersMap.entries()){if(!o.online||i===e||i===t||!an(o.role)||o.children_ids.length>=Es||o.hop_depth===0||o.hop_depth+1+s>bs)continue;let a=!0;for(const l of o.ancestry_path){if(l===e||l===t){a=!1;break}const c=this.peersMap.get(l);if(!c||!c.online){a=!1;break}}if(a){if(!n){n=o;continue}(o.hop_depth<n.hop_depth||o.hop_depth===n.hop_depth&&o.capabilities.rtt_ms<n.capabilities.rtt_ms||o.hop_depth===n.hop_depth&&o.capabilities.rtt_ms===n.capabilities.rtt_ms&&o.children_ids.length<n.children_ids.length||o.hop_depth===n.hop_depth&&o.capabilities.rtt_ms===n.capabilities.rtt_ms&&o.children_ids.length===n.children_ids.length&&o.peer_id<n.peer_id)&&(n=o)}}return n?n.peer_id:null}maxRelativeSubtreeDepth(e,t){const s=this.peersMap.get(e);if(!s||!s.online||t.has(e))return 0;t.add(e);let n=0;for(const i of s.children_ids){const o=this.peersMap.get(i);if(o&&o.online){const a=1+this.maxRelativeSubtreeDepth(i,t);a>n&&(n=a)}}return n}recomputeSubtreeAncestry(e,t,s){const n=this.peersMap.get(e);if(!(!n||!n.online||s.has(e))){if(s.add(e),n.primary_parent_id){const i=this.peersMap.get(n.primary_parent_id);i&&i.online&&(n.ancestry_path=[...i.ancestry_path,i.peer_id],n.hop_depth=i.hop_depth+1)}n.topology_revision=t;for(const i of n.children_ids)this.recomputeSubtreeAncestry(i,t,s)}}subtreeSubscribesToTopic(e,t,s){const n=this.peersMap.get(e);if(!n||!n.online||s.has(e))return!1;if(s.add(e),Bl(n.subscribed_topics,t))return!0;for(const i of n.children_ids)if(this.subtreeSubscribesToTopic(i,t,s))return!0;return!1}}const ut={OfficialEventsOrderedReliable:1,CurrentStateUnorderedNewest:2,BulkChunksBackground:3};class wl{nextMessageId=1;highWatermarkBytes;queuedLiveBytesCount=0;bulkPaused=!1;officialQueue=[];currentStateQueue=[];bulkQueue=[];reassembly=new Map;constructor(e=65536){this.highWatermarkBytes=e}enqueueMessage(e,t,s,n=t){if(!t)throw new I(R.InvalidArgument,"topic must not be empty");const i=s.byteLength===0?1:Math.ceil(s.byteLength/on);if(i>65535)throw new I(R.BoundsExceeded,"Message exceeds maximum fragment count (65535)");const o=i,a=this.nextMessageId++,l=[];for(let c=0;c<o;c++){const x=c*on,d=s.byteLength===0?0:Math.min(on,s.byteLength-x);l.push({channel:e,message_id:a,fragment_index:c,fragment_count:o,topic:t,stateScope:n,payload:d>0?s.slice(x,x+d):new Uint8Array(0)})}if(e===ut.OfficialEventsOrderedReliable)this.officialQueue.push(...l);else if(e===ut.CurrentStateUnorderedNewest){const c=this.currentStateQueue.find(d=>(d.stateScope??d.topic)===n),x=c&&c.fragment_index>0?c.message_id:void 0;this.currentStateQueue=this.currentStateQueue.filter(d=>(d.stateScope??d.topic)!==n||x!==void 0&&d.message_id===x),this.currentStateQueue.push(...l)}else this.bulkQueue.push(...l);return this.recomputeLiveWatermark(),l}drainNextFrames(e){const t=[];if(e<=0)return t;let s=0;const n=(i,o)=>{let a=0;for(let l=0;l<i.length;l++){const c=i[l],x=c.payload.byteLength;if(s+x>e)break;s+=x,o&&(this.queuedLiveBytesCount=Math.max(0,this.queuedLiveBytesCount-x)),t.push(c),a++}a>0&&i.splice(0,a)};return n(this.officialQueue,!0),this.officialQueue.length===0&&n(this.currentStateQueue,!0),this.bulkPaused=this.queuedLiveBytesCount>this.highWatermarkBytes,!this.bulkPaused&&this.officialQueue.length===0&&this.currentStateQueue.length===0&&n(this.bulkQueue,!1),t}reassembleFrame(e){if(![e.message_id,e.fragment_index,e.fragment_count].every(Number.isSafeInteger)||e.message_id<1||e.fragment_index<0||e.fragment_count<1||e.fragment_count>261||e.fragment_index>=e.fragment_count)throw new I(R.InvalidArgument,"Invalid fragment_index or fragment_count");if(e.payload.byteLength>cs)throw new I(R.BoundsExceeded,"WireFrame payload exceeds MAX_FRAME_BYTES (16 KiB)");if(e.fragment_count===1)return new Uint8Array(e.payload);for(const[o,a]of this.reassembly)Date.now()-a.createdAt>1e4&&this.reassembly.delete(o);let t=this.reassembly.get(e.message_id);if(t){if(t.totalFragments!==e.fragment_count||t.topic!==e.topic||t.channel!==e.channel)throw new I(R.InvalidArgument,"Mismatched fragment_count for message_id")}else{if(e.channel===ut.CurrentStateUnorderedNewest)for(const[o,a]of this.reassembly)a.channel===ut.CurrentStateUnorderedNewest&&a.topic===e.topic&&o<e.message_id&&this.reassembly.delete(o);if(this.reassembly.size>=32){const o=this.reassembly.keys().next().value;o!==void 0&&this.reassembly.delete(o)}t={totalFragments:e.fragment_count,topic:e.topic,channel:e.channel,createdAt:Date.now(),parts:new Map},this.reassembly.set(e.message_id,t)}if(t.parts.set(e.fragment_index,new Uint8Array(e.payload)),t.parts.size<t.totalFragments)return null;let s=0;for(let o=0;o<t.totalFragments;o++){const a=t.parts.get(o);if(!a)return null;s+=a.byteLength}const n=new Uint8Array(s);let i=0;for(let o=0;o<t.totalFragments;o++){const a=t.parts.get(o);n.set(a,i),i+=a.byteLength}return this.reassembly.delete(e.message_id),n}bulkChannelPaused(){return this.bulkPaused}queuedPayloadBytes(){return[...this.officialQueue,...this.currentStateQueue,...this.bulkQueue].reduce((e,t)=>e+t.payload.length,0)}queuedLiveBytes(){return this.queuedLiveBytesCount}recomputeLiveWatermark(){let e=0;for(const t of this.officialQueue)e+=t.payload.byteLength;for(const t of this.currentStateQueue)e+=t.payload.byteLength;this.queuedLiveBytesCount=e,this.bulkPaused=this.queuedLiveBytesCount>this.highWatermarkBytes}}class yl{manifest=null;bitmap=[];chunks=[];acceptSignedManifest(e,t){if(this.manifest&&e.snapshot_epoch<this.manifest.snapshot_epoch)throw new I(R.EpochFencedOldEvent,"Snapshot manifest epoch rollback rejected");A0(e,t);for(let s=0;s<e.chunks.length;s++)if(e.chunks[s].chunk_index!==s)throw new I(R.InvalidArgument,"Snapshot manifest chunk indices not contiguous");return this.manifest=e,this.bitmap=new Array(e.chunks.length).fill(!1),this.chunks=new Array(e.chunks.length).fill(new Uint8Array(0)),!0}ingestChunk(e,t){if(!this.manifest)throw new I(R.InvalidArgument,"Cannot ingest chunk before accepting manifest");if(e<0||e>=this.manifest.chunks.length)throw new I(R.BoundsExceeded,"chunk_index out of bounds");const s=this.manifest.chunks[e],n=Oe(t);if(!we(n,s.sha256_hash))throw new I(R.HashChainMismatch,`Chunk #${e} SHA-256 mismatch against manifest`);if(s.byte_length!==0&&t.byteLength!==s.byte_length)throw new I(R.HashChainMismatch,`Chunk #${e} byte_length mismatch against manifest`);return this.chunks[e]=new Uint8Array(t),this.bitmap[e]=!0,!0}missingChunks(){const e=[];for(let t=0;t<this.bitmap.length;t++)this.bitmap[t]||e.push(t);return e}availabilityBitmap(){return this.bitmap}isComplete(){return this.manifest?this.bitmap.every(Boolean):!1}assembleVerifiedSnapshot(){if(!this.manifest||!this.isComplete())throw new I(R.SequenceGap,"Cannot assemble snapshot while chunks are missing");let e=0;for(const i of this.chunks)e+=i.byteLength;const t=new Uint8Array(e);let s=0;for(const i of this.chunks)t.set(i,s),s+=i.byteLength;if(this.manifest.total_bytes!==0&&t.byteLength!==this.manifest.total_bytes)throw new I(R.HashChainMismatch,"Assembled snapshot total_bytes mismatch");const n=Oe(t);if(!we(n,this.manifest.full_file_sha256))throw new I(R.HashChainMismatch,"Assembled snapshot full-file SHA-256 mismatch");return t}}class vl{streams=new Map;recordVerifiedSourceHeartbeat(e,t,s,n=s){const i=this.streams.get(e.stream_id),o=i?.lastHeartbeatCounter??0;F0(e,t,o),this.streams.set(e.stream_id,{lastConfirmedSequence:Math.max(i?.lastConfirmedSequence??0,e.head_sequence),lastHeartbeatCounter:e.heartbeat_counter,lastSourceEvidenceMonotonicMs:s,lastConfirmedWallMs:n})}recordVerifiedSourceEvent(e,t,s=e.audit_time_ms||t){const n=this.streams.get(e.stream_id);n&&e.sequence<=n.lastConfirmedSequence||this.streams.set(e.stream_id,{lastConfirmedSequence:e.sequence,lastHeartbeatCounter:n?.lastHeartbeatCounter??0,lastSourceEvidenceMonotonicMs:t,lastConfirmedWallMs:s})}recordRelayKeepaliveOnly(e,t){}evaluateStreamFreshness(e,t){const s=this.streams.get(e);if(!s)return{streamId:e,lastConfirmedSequence:0,lastHeartbeatCounter:0,lastSourceEvidenceMonotonicMs:0,lastConfirmedWallTimestampIso:"NEVER",ageMs:Number.POSITIVE_INFINITY,liveBadgeActive:!1,isStaleFeed:!0,suppressClockExtrapolation:!0,staleBannerText:"STALE FEED — LAST CONFIRMED AT NEVER (SEQ #0)"};const n=Math.max(0,t-s.lastSourceEvidenceMonotonicMs),i=n<=bl,o=n>=Cl,a=new Date(s.lastConfirmedWallMs).toISOString();return{streamId:e,lastConfirmedSequence:s.lastConfirmedSequence,lastHeartbeatCounter:s.lastHeartbeatCounter,lastSourceEvidenceMonotonicMs:s.lastSourceEvidenceMonotonicMs,lastConfirmedWallTimestampIso:a,ageMs:n,liveBadgeActive:i,isStaleFeed:o,suppressClockExtrapolation:o||!i,staleBannerText:o?`STALE FEED — LAST CONFIRMED AT ${a} (SEQ #${s.lastConfirmedSequence})`:""}}computeDisplayedClockMs(e,t,s,n,i){const o=this.evaluateStreamFreshness(e,i);if(!n||o.suppressClockExtrapolation)return{displayedRemainingMs:Math.max(0,t),extrapolated:!1,isStale:o.isStaleFeed};const a=Math.max(0,i-s);return{displayedRemainingMs:Math.max(0,t-a),extrapolated:!0,isStale:!1}}}class Xt{connectedSamples=[];catchupSamples=[];bracketSamples=[];disconnectedPeers=0;relayFailovers=0;rejectedSignatures=0;recordConnectedPropagationMs(e){this.connectedSamples.push(e)}recordReconnectingCatchupMs(e){this.catchupSamples.push(e)}recordBracketAcceptToRenderMs(e){this.bracketSamples.push(e)}recordDisconnectedPeer(){this.disconnectedPeers++}recordRelayFailover(){this.relayFailovers++}recordRejectedSignature(){this.rejectedSignatures++}snapshot(){return{connected_spectator_propagation:Xt.computePercentiles(this.connectedSamples),reconnecting_catchup_cohort:Xt.computePercentiles(this.catchupSamples),bracket_accept_to_render:Xt.computePercentiles(this.bracketSamples),disconnected_peer_count:this.disconnectedPeers,relay_failover_count:this.relayFailovers,rejected_signature_count:this.rejectedSignatures}}static computePercentiles(e){if(e.length===0)return{sample_count:0,p50_ms:0,p95_ms:0,p99_ms:0,max_ms:0};const t=[...e].sort((i,o)=>i-o),s=t.length,n=i=>{const o=Math.floor((s*i+99)/100),a=o===0?0:Math.min(s-1,o-1);return t[a]};return{sample_count:s,p50_ms:n(50),p95_ms:n(95),p99_ms:n(99),max_ms:t[s-1]}}}const Zt={DirectorPrimary:1,DirectorStandby:2,BoutDispatchClerk:3},nt={MatPrimaryScorekeeper:1,MatBackupDisplay:2,HeadTablePrimary:3,HeadTableStandby:4};class $t{configuredMats;controlOfficialsPeers=new Map;matRooms=new Map;subtreeRooms=new Map;subtreePingRttMs=new Map;primaryDirectorId="";standbyDirectorId="";activeDirectorId="";constructor(e=Ye){this.configuredMats=Math.max(1,Math.min(Ye,e))}clearMembership(){this.controlOfficialsPeers.clear(),this.matRooms.clear(),this.subtreeRooms.clear(),this.subtreePingRttMs.clear(),this.primaryDirectorId="",this.standbyDirectorId="",this.activeDirectorId=""}static matRoomId(e){return`mat:${e}`}static subtreeRoomId(e){return`subtree:${e}`}static bracketSubtreeRoomId(e){if(!/^[A-Za-z0-9_-]{1,100}$/.test(e))throw new Error("Invalid bracket id");return`subtree:b:${e}`}joinControlOfficialsRoom(e,t){if(!e)throw new I(R.InvalidArgument,"peer_id must not be empty");if(!this.controlOfficialsPeers.has(e)&&this.controlOfficialsPeers.size>=Gi)throw new I(R.BoundsExceeded,`control:officials room bounded to ${Gi} official consoles`);return this.controlOfficialsPeers.set(e,t),t===Zt.DirectorPrimary?(this.primaryDirectorId=e,this.activeDirectorId||(this.activeDirectorId=e)):t===Zt.DirectorStandby&&(this.standbyDirectorId=e,this.activeDirectorId||(this.activeDirectorId=e)),!0}joinMatRoom(e,t,s){if(e<1||e>this.configuredMats||e>Ye)throw new I(R.BoundsExceeded,`mat_id must be within 1..${this.configuredMats}`);if(!t)throw new I(R.InvalidArgument,"peer_id must not be empty");if(s===nt.MatPrimaryScorekeeper||s===nt.MatBackupDisplay){if(this.controlOfficialsPeers.has(t))throw new I(R.UnauthorizedScope,"Matside scorekeeper/display cannot join control:officials room");for(const[i,o]of this.matRooms.entries())if(i!==e&&o.has(t))throw new I(R.UnauthorizedScope,"Matside device cannot join multiple mat rooms")}let n=this.matRooms.get(e);if(n||(n=new Map,this.matRooms.set(e,n)),!n.has(t)&&n.size>=zi)throw new I(R.BoundsExceeded,`mat:${e} room bounded to ${zi} peers (Primary, Backup/Display, Head Table Primary, Head Table Standby)`);return n.set(t,s),!0}joinSubtreeRoom(e,t,s=1){if(!e||!t)throw new I(R.InvalidArgument,"parent_id and peer_id must not be empty");const n=$t.subtreeRoomId(e);let i=this.subtreeRooms.get(n);if(i||(i=[e],this.subtreeRooms.set(n,i)),i.includes(t))return this.subtreePingRttMs.set(t,s),!0;if(i.length>=ji)throw new I(R.BoundsExceeded,`${n} room bounded to ${ji} peers (1 parent + 10 children)`);return i.push(t),this.subtreePingRttMs.set(t,s),!0}validateRoomDomainTraffic(e,t){if(e===at)return!0;if(t===Fe)throw new I(R.PrivacyViolation,"OpenMat:control:v1 traffic is restricted to control:officials room");if(e.startsWith("mat:")){if(t===Pt||t===Ti||t===En||t===qs)return!0;throw new I(R.UnauthorizedScope,`Unsupported domain prefix ${t} on ${e}`)}if(e.startsWith("subtree:")){if(Gs.some(s=>Xn(s)===t)||t===Pt||t===Ti||t===En||t===Hr)return!0;throw new I(R.UnauthorizedScope,`Unsupported domain prefix ${t} on ${e}`)}throw new I(R.InvalidArgument,`Unknown room_id prefix: ${e}`)}activateStandbyHeadTableFailover(){if(!this.standbyDirectorId)throw new I(R.InvalidArgument,"No standby head-table director registered in control:officials");return this.activeDirectorId=this.standbyDirectorId,this.activeDirectorId}getMatRoomPeerIds(e){const t=this.matRooms.get(e);return t?Array.from(t.keys()):[]}getSubtreeRoomPeerIds(e){const t=$t.subtreeRoomId(e);return[...this.subtreeRooms.get(t)??[]]}computeAccountingSummary(){const e=this.controlOfficialsPeers.size,t=e>1?e*(e-1):0,s=e>1?e-1:0;let n=0,i=0,o=0,a=0,l=0;for(const p of this.matRooms.values()){const h=p.size;n+=h,h>1&&(i+=h*(h-1),a=Math.max(a,h-1));let m=0,E=!1;for(const F of p.values())F===nt.MatPrimaryScorekeeper||F===nt.MatBackupDisplay?(o++,m++):F===nt.HeadTablePrimary&&(E=!0);E&&(l+=m)}const c=t+i,x=e+o,d=x>1?x*(x-1):0,u=d>c&&d>0?Math.floor((d-c)*100/d):0,_=new Set;for(const p of this.subtreeRooms.values())for(const h of p)_.add(h);return{configured_mats:this.configuredMats,control_officials_peers:e,total_mat_room_peers:n,total_subtree_rooms:this.subtreeRooms.size,total_subtree_peers:_.size,connections_per_mat_scorekeeper:a,connections_per_official_tablet:s,connections_on_head_table_hub:s+l,total_officiating_connections:c,flat_room_baseline_connections:d,connection_reduction_percent:u,active_head_table_leader_id:this.activeDirectorId,trystero_actions:{signaling:gl,rpc:El},multiplexer_channels:["official-events","current-state","bulk-chunks"]}}}class Al{liveRooms=new Map;async joinLiveRoom(e){this.liveRooms.get(e.roomId)?.stop();const{LiveVenueRoom:t}=await pl(async()=>{const{LiveVenueRoom:n}=await import("./live-venue-transport-zJXYtChM.js");return{LiveVenueRoom:n}},[],import.meta.url),s=new t(e);return this.liveRooms.set(e.roomId,s),await s.start(),s}stopLiveRooms(){for(const e of this.liveRooms.values())e.stop();this.liveRooms.clear()}peerId;tree;roomRouter;multiplexer;chunkSwarm;freshness;observability;constructor(e){this.peerId=e.peerId,this.tree=e.tree??new Zn,this.roomRouter=e.roomRouter??new $t(e.configuredMats??Ye),this.multiplexer=new wl(e.highWatermarkBytes??65536),this.chunkSwarm=new yl,this.freshness=new vl,this.observability=new Xt}}const Eo=4194304,fc=[{label:"official-events",id:10,ordered:!0},{label:"current-state",id:11,ordered:!1,maxRetransmits:0},{label:"bulk-chunks",id:12,ordered:!0}];function zt(r){const e=Re(r,{maxBytes:Eo});if(!e||typeof e!="object"||Array.isArray(e)||e instanceof Uint8Array||e instanceof Map)throw new Error("Expected CBOR map");return e}function lt(r){return ve(r,{maxBytes:Eo})}function pc(r){const e=lt({c:r.channel,id:r.message_id,fi:r.fragment_index,fc:r.fragment_count,t:r.topic,p:r.payload});if(e.length>cs)throw new Error("Encoded venue frame exceeds 16 KiB");return e}function gc(r){if(r.length>cs)throw new Error("Encoded venue frame exceeds 16 KiB");const e=zt(r);if(![1,2,3].includes(Number(e.c))||![e.id,e.fi,e.fc].every(t=>typeof t=="number"&&Number.isSafeInteger(t))||Number(e.id)<1||Number(e.fi)<0||Number(e.fc)<1||Number(e.fc)>261||Number(e.fi)>=Number(e.fc)||typeof e.t!="string"||!e.t||e.t.length>256||!(e.p instanceof Uint8Array)||e.p.length>cs)throw new Error("Invalid venue frame");return{channel:Number(e.c),message_id:Number(e.id),fragment_index:Number(e.fi),fragment_count:Number(e.fc),topic:e.t,payload:e.p}}function kl(r){if(r==="control:officials")return 12;if(/^mat:([1-9]|1[0-9]|20)$/.test(r))return 4;if(/^subtree:(?:b:)?[A-Za-z0-9_-]{1,100}$/.test(r))return 11;throw new Error("Invalid venue room")}function Ec(r,e){if(kl(r),!(r==="control:officials"?["control-state","public-projection"]:r.startsWith("mat:")?["signed-event","clock","heartbeat"]:["public-projection","snapshot-manifest","snapshot-chunk","game-tap","game-state","game-snapshot",...Gs]).includes(e))throw new Error(`Topic ${e} forbidden on ${r}`)}function Fl(r,e){const t=ce(e);if(t.length!==32||!r.length)throw new Error("Native replay requires a pinned root and nonempty trace");const s=new Map;return r.map(n=>{const i=(h,m)=>{if(!h)throw new Error(`Native trace ${n.match}:${n.sequence}: ${m}`)};i(we(ce(n.root_public_key),t),"root key changed");const o=je(ce(n.wire_cbor)),a=Re(ce(n.certificate_cbor)),l={...Re(a.body),root_signature:a.signature};Ts(l,t,o.audit_time_ms,!0),i(l.role===xt.MatOperator&&(l.allowed_scopes&Ne.ScoreMat)!==0&&l.certificate_id===o.certificate_id&&l.subject_key_id===o.signer_key_id&&l.tournament_id===o.tournament_id&&l.allowed_stream_id===o.stream_id&&l.assignment_revision===o.assignment_revision&&o.audit_time_ms>=l.issued_at_ms,"certificate scope mismatch");const c=jr(o);i(Pe(Pt,c,l.subject_pubkey,o.signature),"signature mismatch"),i(we(zr(Pt,c,o.signature),o.event_id),"event ID mismatch"),i(we(w0(o),ce(n.wire_cbor)),"wire round trip differs");const x=o.payload,d=x.command,u=x.projection.state;i(we(ve(d),ce(n.command_cbor)),"unsigned command differs"),i(we(ve(u),ce(n.state_cbor)),"unsigned state differs"),i(o.match_id===n.match&&o.sequence===n.sequence&&o.monotonic_time_ns===n.at_ms*1e6,"trace identity/time mismatch");const _=`${o.tournament_id}:${o.match_id}`;let p=s.get(_);return d.kind===0&&(i(o.sequence===1&&(!p||o.assignment_revision>p.assignment_revision),"assignment replay"),p=void 0),i(o.sequence===(p?.sequence??0)+1&&we(o.previous_event_hash,p?.event_id??new Uint8Array(32)),"hash chain gap"),i(!p||o.authority_epoch>=p.authority_epoch,"authority epoch regressed"),Re(ce(n.command_cbor)),Re(ce(n.state_cbor)),s.set(_,o),o})}function Dl(r,e,t){const s=Fl(r,t);if(Re(ce(e),{maxBytes:1024*1024}).closed!==!0)throw new Error("Native campaign did not close");return s.map((i,o)=>{const a=r[o],l=Re(ce(a.certificate_cbor)),c=Re(l.body),d=i.payload.projection;if(!d||!d.state||!Array.isArray(d.timers))throw new Error("Native projection missing");return{line:a,event:i,matId:Number(c.assigned_mat_id),projection:d,state:d.state,timer:d.timers[0]}})}function Sl(r){const e=r.issuedAtMs??Date.now(),t=ve({issued_at_ms:e,publisher_pubkey_hex:r.publisherPubkeyHex.toLowerCase(),relay_origin:r.relayOrigin,rules_version:r.rulesVersion,tournament_id:r.tournamentId,tournament_name:r.tournamentName}),s=qe(Fe,t,r.rootPrivateKey);return{tournament_id:r.tournamentId,tournament_name:r.tournamentName,rules_version:r.rulesVersion,publisher_pubkey_hex:r.publisherPubkeyHex.toLowerCase(),relay_origin:r.relayOrigin,issued_at_ms:e,signature_hex:_e(s)}}function Rl(r){try{if(!/^[0-9a-fA-F]{64}$/.test(r.publisher_pubkey_hex))return!1;const e=ve({issued_at_ms:r.issued_at_ms,publisher_pubkey_hex:r.publisher_pubkey_hex.toLowerCase(),relay_origin:r.relay_origin,rules_version:r.rules_version,tournament_id:r.tournament_id,tournament_name:r.tournament_name});return Pe(Fe,e,ce(r.publisher_pubkey_hex),ce(r.signature_hex))}catch{return!1}}function Il(r){return`openmat://join?${new URLSearchParams({tid:r.tournament_id,name:r.tournament_name,rules:r.rules_version,pub:r.publisher_pubkey_hex,origin:r.relay_origin,iat:String(r.issued_at_ms),sig:r.signature_hex}).toString()}`}function ln(r){if(!r)return;const e=r.split(",").map(t=>t.trim()).filter(t=>t.startsWith("wss://")||t.startsWith("ws://"));return e.length>0?e:void 0}function es(r){const e=r.trim();if(!e)return{valid:!1,reason:"Join key or QR URI is empty"};if(/^[0-9a-fA-F]{64}$/.test(e))return{valid:!0,reason:"Pinned tournament publisher key",payload:{tournament_id:"",tournament_name:"Live Tournament",rules_version:"NFHS-2026-27-v1",publisher_pubkey_hex:e.toLowerCase(),relay_origin:"http://127.0.0.1:5174",issued_at_ms:Date.now(),signature_hex:""}};if(/^[A-Za-z0-9][A-Za-z0-9_-]{3,63}$/.test(e))return{valid:!0,reason:`Find tournament ${e}`,payload:{tournament_id:e,tournament_name:e,rules_version:"NFHS-2026-27-v1",publisher_pubkey_hex:"",relay_origin:"http://127.0.0.1:5174",issued_at_ms:Date.now(),signature_hex:""}};try{let t;if(e.startsWith("http://")||e.startsWith("https://")){const i=new URL(e),o=i.search.replace(/^\?/,"").trim(),a=i.hash.replace(/^#\/?\??/,"").trim();for(const p of[o,a]){if(!p)continue;const h=(()=>{try{return p.startsWith("openmat://join?")?p:decodeURIComponent(p)}catch{return p}})();if(h.startsWith("openmat://join")){const m=es(h);if(m.valid&&m.payload){const E=ln(new URLSearchParams(i.search).get("relays"));E&&(m.payload.nostr_relays=E)}return m}}if(t=new URLSearchParams(i.search),a){const p=new URLSearchParams(a);for(const[h,m]of p.entries())t.has(h)||t.set(h,m)}const l=ln(t.get("relays")),c=t.get("join");if(c){const p=es(c);return p.valid&&p.payload&&l&&(p.payload.nostr_relays=l),p}const x=decodeURIComponent(o.split("&")[0]??"").replace(/=+$/,"").trim(),d=decodeURIComponent(a.split("&")[0]??"").replace(/=+$/,"").trim(),u=t.get("key")?.trim()||(t.get("sig")?"":t.get("pub")?.trim()||t.get("root")?.trim())||(/^[0-9a-fA-F]{64}$/.test(x)?x:"")||(/^[0-9a-fA-F]{64}$/.test(d)?d:"");if(u&&/^[0-9a-fA-F]{64}$/.test(u)&&!t.get("sig")){const p=t.get("session")?.trim()??"",h=p.startsWith("game:")?p.slice(5):"";return{valid:!0,reason:"Pinned tournament publisher key",payload:{tournament_id:t.get("tid")?.trim()||h,tournament_name:t.get("name")?.trim()||"Live Tournament",rules_version:t.get("rules")?.trim()||"NFHS-2026-27-v1",publisher_pubkey_hex:u.toLowerCase(),relay_origin:t.get("origin")?.trim()||"http://127.0.0.1:5174",issued_at_ms:Date.now(),signature_hex:"",...l?{nostr_relays:l}:{}}}}const _=(!t.get("sig")&&!t.get("pub")?t.get("tid")?.trim():"")||t.get("key")?.trim()||(!x.includes("=")&&/^[A-Za-z0-9][A-Za-z0-9_-]{3,63}$/.test(x)?x:"")||(!d.includes("=")&&/^[A-Za-z0-9][A-Za-z0-9_-]{3,63}$/.test(d)?d:"");if(_&&/^[A-Za-z0-9][A-Za-z0-9_-]{3,63}$/.test(_)&&!t.get("sig"))return{valid:!0,reason:`Find tournament ${_}`,payload:{tournament_id:_,tournament_name:t.get("name")?.trim()||_,rules_version:t.get("rules")?.trim()||"NFHS-2026-27-v1",publisher_pubkey_hex:(t.get("pub")??"").trim().toLowerCase(),relay_origin:t.get("origin")?.trim()||"http://127.0.0.1:5174",issued_at_ms:Date.now(),signature_hex:"",...l?{nostr_relays:l}:{}}};if(!t.get("tid")&&!t.get("pub"))return{valid:!1,reason:"URL does not contain tournament join parameters"}}else{const i=e.indexOf("?");if(!e.startsWith("openmat://join")||i<0)return{valid:!1,reason:"Enter an openmat://join link or 64-character join key"};t=new URLSearchParams(e.slice(i+1))}const s=ln(t.get("relays")),n={tournament_id:t.get("tid")??"",tournament_name:t.get("name")??"",rules_version:t.get("rules")??"NFHS-2026-27-v1",publisher_pubkey_hex:(t.get("pub")??"").toLowerCase(),relay_origin:t.get("origin")??"http://127.0.0.1:5174",issued_at_ms:Number(t.get("iat")??"0"),signature_hex:(t.get("sig")??"").toLowerCase(),...s?{nostr_relays:s}:{}};return!n.tournament_id||!n.publisher_pubkey_hex||!n.signature_hex?{valid:!1,reason:"Missing required fields in openmat://join QR payload"}:Rl(n)?{valid:!0,reason:`Connected to ${n.tournament_name}`,payload:n}:{valid:!1,reason:"Signature verification failed on tournament join link"}}catch(t){return{valid:!1,reason:`Malformed join link: ${String(t)}`}}}function Tl(r){const e=ve([r.certificate_id,r.tournament_id,r.subject_key_id,r.subject_pubkey,r.role,r.allowed_scopes,r.allowed_stream_id,r.assigned_mat_id,r.assignment_revision,r.authority_generation,r.issued_at_ms,r.expires_at_ms,r.allow_in_progress_completion,r.root_signature]);return _e(e)}function Gt(r){const e=Re(ce(r));if(Array.isArray(e))return{certificate_id:String(e[0]??""),tournament_id:String(e[1]??""),subject_key_id:String(e[2]??""),subject_pubkey:e[3]instanceof Uint8Array?e[3]:new Uint8Array(0),role:Number(e[4]??xt.MatOperator),allowed_scopes:Number(e[5]??0),allowed_stream_id:String(e[6]??""),assigned_mat_id:Number(e[7]??0),assignment_revision:Number(e[8]??1),authority_generation:Number(e[9]??1),issued_at_ms:Number(e[10]??0),expires_at_ms:Number(e[11]??0),allow_in_progress_completion:!!e[12],root_signature:e[13]instanceof Uint8Array?e[13]:new Uint8Array(0)};const t=e;return{certificate_id:String(t.certificate_id??""),tournament_id:String(t.tournament_id??""),subject_key_id:String(t.subject_key_id??""),subject_pubkey:t.subject_pubkey instanceof Uint8Array?t.subject_pubkey:new Uint8Array(0),role:Number(t.role??xt.MatOperator),allowed_scopes:Number(t.allowed_scopes??0),allowed_stream_id:String(t.allowed_stream_id??""),assigned_mat_id:Number(t.assigned_mat_id??0),assignment_revision:Number(t.assignment_revision??1),authority_generation:Number(t.authority_generation??1),issued_at_ms:Number(t.issued_at_ms??0),expires_at_ms:Number(t.expires_at_ms??0),allow_in_progress_completion:!!t.allow_in_progress_completion,root_signature:t.root_signature instanceof Uint8Array?t.root_signature:new Uint8Array(0)}}function Pl(r){return`openmat://scorekeeper-auth?${new URLSearchParams({tid:r.tournament_id,name:r.tournament_name,pub:r.publisher_pubkey_hex.toLowerCase(),origin:r.relay_origin,cert:r.cert_cbor_hex}).toString()}`}function Ml(r){try{const e=r.trim(),t=e.indexOf("?");if(!e.startsWith("openmat://scorekeeper-auth")||t<0)return{valid:!1,reason:"QR URI must start with openmat://scorekeeper-auth?..."};const s=new URLSearchParams(e.slice(t+1)),n=s.get("tid")??"",i=s.get("name")??"",o=(s.get("pub")??"").toLowerCase(),a=s.get("origin")??"http://127.0.0.1:5174",l=s.get("cert")??"";if(!n||!o||!l)return{valid:!1,reason:"Missing tid, pub, or cert in scorekeeper QR URI"};const c=Gt(l);return{valid:!0,reason:"Parsed scorekeeper delegated certificate bundle",bundle:{tournament_id:n,tournament_name:i,publisher_pubkey_hex:o,relay_origin:a,certificate:c,cert_cbor_hex:l}}}catch(e){return{valid:!1,reason:`Malformed scorekeeper QR URI: ${String(e)}`}}}const Qi=[{totalDataBytes:0,ecBytesPerBlock:0,numBlocksGroup1:0,dataBytesGroup1:0,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:19,ecBytesPerBlock:7,numBlocksGroup1:1,dataBytesGroup1:19,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:34,ecBytesPerBlock:10,numBlocksGroup1:1,dataBytesGroup1:34,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:55,ecBytesPerBlock:15,numBlocksGroup1:1,dataBytesGroup1:55,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:80,ecBytesPerBlock:20,numBlocksGroup1:1,dataBytesGroup1:80,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:108,ecBytesPerBlock:26,numBlocksGroup1:1,dataBytesGroup1:108,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:136,ecBytesPerBlock:18,numBlocksGroup1:2,dataBytesGroup1:68,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:156,ecBytesPerBlock:20,numBlocksGroup1:2,dataBytesGroup1:78,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:194,ecBytesPerBlock:24,numBlocksGroup1:2,dataBytesGroup1:97,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:232,ecBytesPerBlock:30,numBlocksGroup1:2,dataBytesGroup1:116,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:274,ecBytesPerBlock:18,numBlocksGroup1:2,dataBytesGroup1:68,numBlocksGroup2:2,dataBytesGroup2:69},{totalDataBytes:324,ecBytesPerBlock:20,numBlocksGroup1:4,dataBytesGroup1:81,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:370,ecBytesPerBlock:24,numBlocksGroup1:2,dataBytesGroup1:92,numBlocksGroup2:2,dataBytesGroup2:93},{totalDataBytes:428,ecBytesPerBlock:26,numBlocksGroup1:4,dataBytesGroup1:107,numBlocksGroup2:0,dataBytesGroup2:0},{totalDataBytes:461,ecBytesPerBlock:30,numBlocksGroup1:3,dataBytesGroup1:115,numBlocksGroup2:1,dataBytesGroup2:116},{totalDataBytes:523,ecBytesPerBlock:22,numBlocksGroup1:5,dataBytesGroup1:87,numBlocksGroup2:1,dataBytesGroup2:88},{totalDataBytes:589,ecBytesPerBlock:24,numBlocksGroup1:5,dataBytesGroup1:98,numBlocksGroup2:1,dataBytesGroup2:99},{totalDataBytes:647,ecBytesPerBlock:28,numBlocksGroup1:1,dataBytesGroup1:107,numBlocksGroup2:5,dataBytesGroup2:108},{totalDataBytes:721,ecBytesPerBlock:30,numBlocksGroup1:5,dataBytesGroup1:120,numBlocksGroup2:1,dataBytesGroup2:121},{totalDataBytes:795,ecBytesPerBlock:28,numBlocksGroup1:3,dataBytesGroup1:113,numBlocksGroup2:4,dataBytesGroup2:114},{totalDataBytes:861,ecBytesPerBlock:28,numBlocksGroup1:3,dataBytesGroup1:107,numBlocksGroup2:5,dataBytesGroup2:108}],$l=[[],[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90]],ts=new Uint8Array(512),wn=new Uint8Array(256);(()=>{let r=1;for(let e=0;e<255;e++)ts[e]=r,wn[r]=e,r<<=1,r&256&&(r^=285);for(let e=255;e<512;e++)ts[e]=ts[e-255]})();function bo(r,e){return r===0||e===0?0:ts[wn[r]+wn[e]]}function Ll(r){let e=new Uint8Array([1]);for(let t=0;t<r;t++){const s=new Uint8Array(e.length+1),n=ts[t];for(let i=0;i<e.length;i++)s[i]^=e[i],s[i+1]^=bo(e[i],n);e=s}return e}function Ki(r,e){const t=Ll(e),s=new Uint8Array(e);for(let n=0;n<r.length;n++){const i=r[n]^s[0];s.copyWithin(0,1),s[e-1]=0;for(let o=0;o<e;o++)s[o]^=bo(t[o+1],i)}return s}function Nl(r){const e=new TextEncoder().encode(r);let t=1;for(;t<=20;){const y=Qi[t].totalDataBytes,A=t<=9?12:20;if(Math.ceil((A+e.length*8)/8)<=y)break;t++}if(t>20)throw new Error(`QR payload exceeds Version 20 capacity (${e.length} bytes)`);const s=Qi[t],n=[],i=(y,A)=>{for(let k=A-1;k>=0;k--)n.push(y>>>k&1)};i(4,4),i(e.length,t<=9?8:16);for(const y of e)i(y,8);const o=s.totalDataBytes*8,a=Math.min(4,o-n.length);for(i(0,a);n.length%8!==0;)n.push(0);const l=new Uint8Array(s.totalDataBytes),c=n.length>>>3;for(let y=0;y<c;y++){let A=0;for(let k=0;k<8;k++)A=A<<1|n[y*8+k];l[y]=A}const x=[236,17];for(let y=c;y<s.totalDataBytes;y++)l[y]=x[y-c&1];const d=[],u=[];let _=0;for(let y=0;y<s.numBlocksGroup1;y++){const A=l.slice(_,_+s.dataBytesGroup1);_+=s.dataBytesGroup1,d.push(A),u.push(Ki(A,s.ecBytesPerBlock))}for(let y=0;y<s.numBlocksGroup2;y++){const A=l.slice(_,_+s.dataBytesGroup2);_+=s.dataBytesGroup2,d.push(A),u.push(Ki(A,s.ecBytesPerBlock))}const p=[],h=Math.max(s.dataBytesGroup1,s.dataBytesGroup2);for(let y=0;y<h;y++)for(const A of d)y<A.length&&p.push(A[y]);for(let y=0;y<s.ecBytesPerBlock;y++)for(const A of u)p.push(A[y]);const m=t*4+17,E=Array.from({length:m},()=>Array(m).fill(!1)),F=Array.from({length:m},()=>Array(m).fill(!1)),g=(y,A,k)=>{y<0||y>=m||A<0||A>=m||(E[y][A]=k,F[y][A]=!0)},b=(y,A)=>{for(let k=-1;k<=7;k++)for(let v=-1;v<=7;v++){const M=y+k,S=A+v;if(M<0||M>=m||S<0||S>=m)continue;const T=k>=0&&k<=6&&v>=0&&v<=6,q=k===0||k===6||v===0||v===6,z=k>=2&&k<=4&&v>=2&&v<=4;g(M,S,T&&(q||z))}};b(0,0),b(0,m-7),b(m-7,0);for(let y=8;y<m-8;y++)g(6,y,y%2===0),g(y,6,y%2===0);const C=$l[t];for(let y=0;y<C.length;y++)for(let A=0;A<C.length;A++){if(y===0&&A===0||y===0&&A===C.length-1||y===C.length-1&&A===0)continue;const k=C[y],v=C[A];for(let M=-2;M<=2;M++)for(let S=-2;S<=2;S++){const T=Math.max(Math.abs(M),Math.abs(S))!==1;g(k+M,v+S,T)}}g(m-8,8,!0);for(let y=0;y<9;y++)F[8][y]||g(8,y,!1),F[y][8]||g(y,8,!1);for(let y=0;y<8;y++)F[8][m-1-y]||g(8,m-1-y,!1),F[m-1-y][8]||g(m-1-y,8,!1);if(t>=7){let y=t;for(let k=0;k<12;k++)y=y<<1^(y>>>11)*7973;const A=t<<12|y;for(let k=0;k<18;k++){const v=(A>>>k&1)!==0,M=m-11+k%3,S=Math.floor(k/3);g(M,S,v),g(S,M,v)}}let B=0;const w=p.length*8;for(let y=m-1;y>=1;y-=2){y===6&&(y=5);for(let A=0;A<m;A++)for(let k=0;k<2;k++){const v=y-k,S=(y+1&2)===0?m-1-A:A;if(!F[S][v]&&B<w){const q=(p[B>>>3]>>>7-(B&7)&1)!==0;E[S][v]=q,B++}}}for(let y=0;y<m;y++)for(let A=0;A<m;A++)!F[y][A]&&(y+A)%2===0&&(E[y][A]=!E[y][A]);const D=8;let f=D;for(let y=0;y<10;y++)f=f<<1^(f>>>9)*1335;const P=(D<<10|f)^21522,N=y=>(P>>>y&1)!==0;for(let y=0;y<=5;y++)E[8][y]=N(y);E[8][7]=N(6),E[8][8]=N(7),E[7][8]=N(8);for(let y=9;y<15;y++)E[14-y][8]=N(y);for(let y=0;y<8;y++)E[8][m-1-y]=N(y);for(let y=8;y<15;y++)E[m-15+y][8]=N(y);return E[m-8][8]=!0,E}function kt(r,e=3){const t=Nl(r),s=t.length,n=s+e*2;let i="";for(let a=0;a<s;a++)for(let l=0;l<s;l++)t[a][l]&&(i+=`M${l+e},${a+e}h1v1h-1z`);const o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges"><rect width="${n}" height="${n}" fill="#ffffff"/><path d="${i}" fill="#040b0a"/></svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(o)}`}const cn=[{teamId:"SBHS",teamName:"Santa Barbara High School"},{teamId:"DPHS",teamName:"Dos Pueblos High School"},{teamId:"SMHS",teamName:"San Marcos High School"},{teamId:"VHS",teamName:"Ventura High School"},{teamId:"BHS",teamName:"Buena High School"},{teamId:"OHS",teamName:"Oxnard High School"},{teamId:"PHS",teamName:"Pacifica High School"},{teamId:"RMHS",teamName:"Rio Mesa High School"},{teamId:"LOMP",teamName:"Lompoc High School"},{teamId:"CABR",teamName:"Cabrillo High School"},{teamId:"SYHS",teamName:"Santa Ynez High School"},{teamId:"OAHS",teamName:"Orcutt Academy High School"}],Ol=["NOVICE","JV","VARSITY","GIRLS","BOYS","U16","U18"],Ul=["106","113","120","126","132","138","144","150","157","165","175","190","215","285"],Wl=["100","107","114","120","126","132","138","145","152","165","175","185","205","235"],Hl=2500;function Vl(r){const e=(r??"").trim().toUpperCase();return e.includes("GIRL")||e==="F"||e==="W"?Wl:Ul}function He(r,e){return typeof r!="string"?"":r.replace(/[\u0000-\u001F\u007F]/g," ").replace(/\s+/g," ").trim().slice(0,e)}function Lt(r){return/^SR-[0-9A-F]{16}$/.test(r.trim().toUpperCase())}function Cs(r){const e=r.trim().toUpperCase();if(!Lt(e))throw new Error(`Invalid self-registration ID: ${r}`);return`ATH-${e}`}function yn(r,e="channel-league-novice-2026-11-20",t=Date.now()){if(!r||typeof r!="object")throw new Error("Self-registration payload must be an object");const s=r,n=He(s.registration_id,32).toUpperCase();if(!Lt(n))throw new Error("Registration ID must match format SR-<16 hex characters>");const i=He(s.tournament_id,64)||He(e,64);if(!i||!/^[A-Za-z0-9][A-Za-z0-9_-]{1,63}$/.test(i))throw new Error("Valid tournament ID is required");let o=He(s.first_name,48),a=He(s.last_name,48);const l=He(s.public_display_name,96);if((!o||!a)&&l){const f=l.split(" ");!o&&f.length>0&&(o=f[0].slice(0,48)),!a&&f.length>1&&(a=f.slice(1).join(" ").slice(0,48))}if(!o)throw new Error("First name is required");if(!a)throw new Error("Last name is required");const c=`${o} ${a}`.slice(0,96),x=He(s.team_name,80),d=He(s.team_id,12).toUpperCase().replace(/[^A-Z0-9_-]/g,"").slice(0,8),u=x?cn.find(f=>f.teamName.toLowerCase()===x.toLowerCase()||x.length>=4&&f.teamId===d&&f.teamName.toLowerCase().startsWith(x.toLowerCase()+" ")):void 0,_=x?void 0:cn.find(f=>f.teamId===d),p=u??_;let h=p?.teamId??(d.length>=2?d:"");const m=p?.teamName??x;if(!p&&h&&cn.some(f=>f.teamId===h)){let f=0;for(let N=0;N<m.length;N++)f=f*31+m.toUpperCase().charCodeAt(N)>>>0;const P=(f%90+10).toString();h=`${h.slice(0,6)}${P}`}if(!h||h.length<2)throw new Error("School or team code (2 to 8 characters) is required");if(!m||m.length<2)throw new Error("School or team name is required");const E=He(s.division_id,24).toUpperCase()||"NOVICE";if(!Ol.includes(E))throw new Error(`Unsupported division: ${E}`);const F=He(s.weight_class_id,8);if(!Vl(E).includes(F))throw new Error(`Unsupported NFHS weight class: ${F}`);const g=Number(s.revision??1),b=Number.isInteger(g)&&g>=1&&g<=1e4?g:1,C=Number(s.submitted_at_ms??t),B=Number.isFinite(C)&&C>0?Math.trunc(C):t,w=Number(s.updated_at_ms??0),D=Number.isFinite(w)&&w>=0?Math.trunc(w):0;return{registration_id:n,tournament_id:i,first_name:o,last_name:a,public_display_name:c,team_id:h,team_name:m,division_id:E,weight_class_id:F,revision:b,submitted_at_ms:B,updated_at_ms:D}}function Ji(r){const e=r.baseRegisterUrl.trim().replace(/\/+$/,""),t=new URLSearchParams({tid:r.tournamentId.trim(),name:r.tournamentName.trim()});return r.defaultDivision?.trim()&&t.set("div",r.defaultDivision.trim().toUpperCase()),r.apiOrigin?.trim()&&t.set("origin",r.apiOrigin.trim().replace(/\/+$/,"")),`${e}/?${t.toString()}`}function vn(r,e="channel-league-novice-2026-11-20"){const t=r.trim();if(!t)return{valid:!1,reason:"Empty QR token"};if(Lt(t))return{valid:!0,reason:"Matched self-registration ID",registrationIdOnly:t.toUpperCase()};try{let s=null;if(t.toLowerCase().startsWith("openmat://self-register")){const c=t.indexOf("?");if(c<0)return{valid:!1,reason:"Missing self-registration query parameters"};s=new URLSearchParams(t.slice(c+1))}else if(t.startsWith("http://")||t.startsWith("https://")){const c=new URL(t),x=new URLSearchParams(c.search),d=c.hash.replace(/^#\/?\??/,"").trim();if(d){const _=new URLSearchParams(d);for(const[p,h]of _.entries())x.has(p)||x.set(p,h)}const u=x.get("selfreg");if(u&&u.toLowerCase().startsWith("openmat://self-register"))return vn(u,e);(x.has("sr")||x.has("rid"))&&(s=x)}if(!s)return{valid:!1,reason:"Not a wrestler self-registration QR code"};const n=(s.get("rid")??s.get("sr")??"").trim().toUpperCase();if(!n)return{valid:!1,reason:"Missing registration ID in QR code"};if(!!!(s.get("fn")&&s.get("ln")&&s.get("wc"))&&Lt(n))return{valid:!0,reason:"Matched self-registration ID",registrationIdOnly:n,tournamentId:s.get("tid")||void 0};const o=Number(s.get("u")??s.get("ts")??"0"),a=Number.isFinite(o)&&o>=0?o:0;return{valid:!0,reason:"Decoded wrestler self-registration QR pass",record:yn({registration_id:n,tournament_id:s.get("tid")??e,first_name:s.get("fn")??"",last_name:s.get("ln")??"",team_id:s.get("tc")??"",team_name:s.get("tn")??"",division_id:s.get("dv")??"NOVICE",weight_class_id:s.get("wc")??"",revision:Number(s.get("rv")??"1"),submitted_at_ms:a,updated_at_ms:a},e,a)}}catch(s){return{valid:!1,reason:s instanceof Error?s.message:String(s)}}}const ql=["106","113","120","126","132","138","144","150","157","165","175","190","215","285"],Xi=[{teamId:"SBHS",teamName:"Santa Barbara High School"},{teamId:"DPHS",teamName:"Dos Pueblos High School"},{teamId:"SMHS",teamName:"San Marcos High School"},{teamId:"VHS",teamName:"Ventura High School"},{teamId:"BHS",teamName:"Buena High School"},{teamId:"OHS",teamName:"Oxnard High School"},{teamId:"PHS",teamName:"Pacifica High School"},{teamId:"RMHS",teamName:"Rio Mesa High School"},{teamId:"CIHS",teamName:"Channel Islands High School"},{teamId:"HHS",teamName:"Hueneme High School"},{teamId:"ACHS",teamName:"Adolfo Camarillo High School"},{teamId:"TOHS",teamName:"Thousand Oaks High School"},{teamId:"NPHS",teamName:"Newbury Park High School"},{teamId:"WHS",teamName:"Westlake High School"},{teamId:"MHS",teamName:"Moorpark High School"},{teamId:"SYHS",teamName:"Santa Ynez Valley Union High School"}],Zi=["Jordan","Marcus","Mateo","Liam","Carlos","Noah","Ethan","Diego","Lucas","Julian","Caleb","Adrian","Gavin","Isaac","Owen","Devon","Logan","Sebastian","Eli","Xavier","Dominic","Hector","Nathan","Cole","Victor","Wesley","Damian","Micah","Rafael","Tristan","Brody","Kai"],er=["Rivera","Vance","Delgado","Sullivan","Mendoza","Takahashi","Castillo","Bennett","Morales","Navarro","Kowalski","Salazar","Patel","Brooks","Herrera","Kim","Ortega","Campbell","Guerrero","Foster","Espinoza","Reed","Sandoval","Hayes","Cabrera","Murphy","Rios","Wallace"];function zl(r){const e=String(r);return/[",\r\n]/.test(e)||e.startsWith("#")?`"${e.replace(/"/g,'""')}"`:e}function Gl(r="NOVICE"){const e=(r||"NOVICE").trim().toUpperCase(),t=["# OpenMat Full 16-Bracket Onboarding Demo Roster Template (DemoTemplate.csv)","# Contains 224 wrestlers across all 14 NFHS weight classes (16 seeded wrestlers per weight class).","# Import this CSV on Tab 1 (Check-In and Weigh-In) to test onboarding and generate all 14 full 16-wrestler brackets.","athlete_id,public_display_name,team_id,team_name,division_id,weight_class_id,seed_rank,flowrestling_id,first_name,last_name,school_name,weight_lbs,actual_weight_lbs,grade,check_in_stage,weigh_in_eligible,medically_cleared,medical_decision,medical_reviewer,scale_station_id,scale_id,bracket_frozen,bracket_format,opaque_pass_token"];return ql.forEach((s,n)=>{for(let i=0;i<16;i++){const o=i+1,a=String(o).padStart(2,"0"),l=Xi[(i+n)%Xi.length],c=Zi[(i+n%2*16)%Zi.length],x=er[(n+i)%er.length],d=`${c} ${x}`,u=`ATH-${e}-${s}-${l.teamId}-${a}`,_=`FLO-26${s}${a}`,p=String(9+(i+n)%2),h=`PASS-${e}-${s}-${l.teamId}-${a}`,m=[u,d,l.teamId,l.teamName,e,s,o,_,c,x,l.teamName,s,"",p,"","","","","","","","","",h].map(zl);t.push(m.join(","))}}),t.join(`
`)+`
`}const ds=0,X=1,Ze=2,Ht=3,Bs=4,Ae=5,et=6,jl=(()=>{const r=new Uint32Array(256);for(let e=0;e<256;e++){let t=e;for(let s=0;s<8;s++)t=(t&1)!==0?3988292384^t>>>1:t>>>1;r[e]=t>>>0}return r})();function Yl(r){let e=4294967295;for(let t=0;t<r.length;t++)e=jl[(e^r[t])&255]^e>>>8;return(e^4294967295)>>>0}function jt(r){return r.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ql(r){let e=r+1,t="";for(;e>0;){const s=(e-1)%26;t=String.fromCharCode(65+s)+t,e=Math.floor((e-1)/26)}return t}function U(r,e=ds){return{kind:"str",value:r,style:e}}function be(r,e=ds){return{kind:"num",value:Number.isFinite(r)?r:0,style:e}}function ke(r,e,t=ds){return{kind:"formula-str",formula:r,value:e,style:t}}function Ve(r,e,t=ds){return{kind:"formula-num",formula:r,value:Number.isFinite(e)?e:0,style:t}}function Kl(r){const e=r.colWidths.length>0?`<cols>${r.colWidths.map((i,o)=>`<col min="${o+1}" max="${o+1}" width="${i}" customWidth="1"/>`).join("")}</cols>`:"",t=r.freezeHeader?'<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>':'<sheetViews><sheetView workbookViewId="0"/></sheetViews>',s=[];for(let i=0;i<r.rows.length;i++){const o=r.rows[i],a=i+1,l=[];for(let c=0;c<o.length;c++){const x=o[c];if(!x)continue;const d=`${Ql(c)}${a}`,u=x.style??ds;if(x.kind==="str"){const _=String(x.value??"");l.push(`<c r="${d}" s="${u}" t="inlineStr"><is><t xml:space="preserve">${jt(_)}</t></is></c>`)}else x.kind==="num"?l.push(`<c r="${d}" s="${u}"><v>${Number(x.value)}</v></c>`):x.kind==="formula-str"?l.push(`<c r="${d}" s="${u}" t="str"><f>${jt(x.formula??"")}</f><v>${jt(String(x.value??""))}</v></c>`):x.kind==="formula-num"&&l.push(`<c r="${d}" s="${u}"><f>${jt(x.formula??"")}</f><v>${Number(x.value)}</v></c>`)}s.push(`<row r="${a}">${l.join("")}</row>`)}const n=r.landscape?'<pageSetup orientation="landscape" fitToWidth="1" fitToHeight="0"/>':"";return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'+t+'<sheetFormatPr defaultRowHeight="19"/>'+e+`<sheetData>${s.join("")}</sheetData><pageMargins left="0.4" right="0.4" top="0.5" bottom="0.5" header="0.25" footer="0.25"/>`+n+"</worksheet>"}function Jl(){return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="164" formatCode="0.0"/></numFmts><fonts count="5"><font><sz val="10"/><color rgb="FF0F172A"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FF0F172A"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FF991B1B"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FF166534"/><name val="Calibri"/></font></fonts><fills count="7"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF1E293B"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFEF3C7"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFEE2E2"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFDCFCE7"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE2E8F0"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border><border><left style="thin"><color rgb="FFCBD5E1"/></left><right style="thin"><color rgb="FFCBD5E1"/></right><top style="thin"><color rgb="FFCBD5E1"/></top><bottom style="thin"><color rgb="FFCBD5E1"/></bottom><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="7"><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="164" fontId="2" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyBorder="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>'}function Xl(r){const e=new TextEncoder,t=r.map(p=>{const h=e.encode(p.path),m=Yl(p.data);return{nameBytes:h,data:p.data,crc:m}});let s=0,n=0;for(const p of t)s+=30+p.nameBytes.length+p.data.length,n+=46+p.nameBytes.length;const i=s+n+22,o=new Uint8Array(i),a=new DataView(o.buffer),l=16384,c=23924;let x=0;const d=[];for(const p of t)d.push(x),a.setUint32(x,67324752,!0),a.setUint16(x+4,20,!0),a.setUint16(x+6,2048,!0),a.setUint16(x+8,0,!0),a.setUint16(x+10,l,!0),a.setUint16(x+12,c,!0),a.setUint32(x+14,p.crc,!0),a.setUint32(x+18,p.data.length,!0),a.setUint32(x+22,p.data.length,!0),a.setUint16(x+26,p.nameBytes.length,!0),a.setUint16(x+28,0,!0),o.set(p.nameBytes,x+30),o.set(p.data,x+30+p.nameBytes.length),x+=30+p.nameBytes.length+p.data.length;const u=x;for(let p=0;p<t.length;p++){const h=t[p];a.setUint32(x,33639248,!0),a.setUint16(x+4,20,!0),a.setUint16(x+6,20,!0),a.setUint16(x+8,2048,!0),a.setUint16(x+10,0,!0),a.setUint16(x+12,l,!0),a.setUint16(x+14,c,!0),a.setUint32(x+16,h.crc,!0),a.setUint32(x+20,h.data.length,!0),a.setUint32(x+24,h.data.length,!0),a.setUint16(x+28,h.nameBytes.length,!0),a.setUint16(x+30,0,!0),a.setUint16(x+32,0,!0),a.setUint16(x+34,0,!0),a.setUint16(x+36,0,!0),a.setUint32(x+38,0,!0),a.setUint32(x+42,d[p],!0),o.set(h.nameBytes,x+46),x+=46+h.nameBytes.length}const _=x-u;return a.setUint32(x,101010256,!0),a.setUint16(x+4,0,!0),a.setUint16(x+6,0,!0),a.setUint16(x+8,t.length,!0),a.setUint16(x+10,t.length,!0),a.setUint32(x+12,_,!0),a.setUint32(x+16,u,!0),a.setUint16(x+20,0,!0),o}function wt(r){return`#${r.seed_rank} ${r.public_display_name} (${r.team_id})`}function Zl(r){return r.is_true_second_challenge?"True 2nd":r.is_placement_bout&&r.placement_rank===1?"1st Place":r.is_placement_bout&&r.placement_rank===3?"3rd Place":r.is_placement_bout&&r.placement_rank===5?"5th Place":r.is_placement_bout&&r.placement_rank===7?"7th Place":r.format===J.RoundRobinPool?"Pool":r.format===J.BestOfThree?"Best of 3":r.is_consolation?"Cons":"Champ"}function Co(r,e,t,s,n){return r.map(({corner:i,points:o,roundBouts:a})=>{const l=a.map(c=>{const x=e.get(c.match_id),d=n+x,u=s+x;return`AND(OR(${u}="R",${u}="G"),${d}<>"FF",${d}<>"FORFEIT",${d}<>"MEDICAL_FORFEIT",${d}<>"BYE")`});return`+IF(AND(${s}${t}="${i}",OR(${l.join(",")})),${o},0)`}).join("")}function An(r,e){const t=r.is_consolation?1:2,s=(r.win_type||"DEC").toUpperCase(),n=s==="FALL"||s==="PIN"||s==="FORFEIT"||s==="FF"||s==="INJURY_DEFAULT"||s==="DQ"?2:s==="TF"?1.5:s==="MD"?1:0,i=r.is_placement_bout&&r.placement_rank===1?16:r.is_placement_bout&&r.placement_rank===3?9:0;return t+e+n+i}function ec(r){const e=new Map(r.athletes.map(A=>[A.athlete_id,A])),t=[...r.bouts].sort((A,k)=>A.bout_number-k.bout_number||A.match_id.localeCompare(k.match_id)),s=t.filter(A=>!A.is_bye),n=$s(t,Fn),i=new Map(t.map(A=>[A.match_id,A])),o=new Map;s.forEach((A,k)=>{o.set(A.match_id,k+2)});const a=r.rules_version===Rt?"Novice / JV (1:00 / 2:00 / 2:00)":"Varsity (2:00 / 2:00 / 2:00)",l=[[U("OPENMAT EMERGENCY OFFLINE FALLBACK WORKBOOK",X),U("VALUE / ACTION",X)],[U("Tournament Name",Ae),U(r.tournament_name||"OpenMat Tournament")],[U("Event Date",Ae),U(r.event_date||"")],[U("Venue",Ae),U(r.venue||"")],[U("Match Periods",Ae),U(a)],[U("Active Mats",Ae),be(r.mat_count)],[U("Weight Allowance (lbs)",Ae),be(r.growth_allowance_tenths/10,et)],[U("Registered Wrestlers",Ae),be(r.athletes.length)],[U("Contested Bouts",Ae),be(s.length)],[],[U("EMERGENCY SINGLE-LAPTOP + PAPER RUNNER WORKFLOW",X),U("INSTRUCTIONS",X)],[U("1. Mat Devices -> Practice Mode",Ae),U(`Open Scorekeeper on each mat phone or tablet and tap Start Practice Mode (${a}). Connect HDMI TVs directly if available.`)],[U("2. Send Paper Slips to Mats",Ae),U("Print paper runner slips from the Standalone Fallback HTML app or print the Brackets by Weight tab for mat tables.")],[U("3. Record Runner Slips Here",Ae),U("Open the Bout Runner Log tab. Enter Red Pts (Col I), Green Pts (Col J), Winner R or G (Col K), and Win Type (Col L) in the yellow cells.")],[U("4. Automatic Bracket Advancement",Ae),U("Excel formulas automatically advance winners and losers into downstream Championship, Consolation, and Placement bouts.")],[U("5. Valid Win Type Codes",Ae),U("FALL (or PIN), TF, MD, DEC, FORFEIT (or FF), INJURY_DEFAULT, DQ")],[U("6. 30-Minute NFHS Rest Rule",Ae),U("Write completion time in Col M (Time Done). Verify 30 minutes of recovery before calling a wrestler back to a mat.")]],x=[[U("Bout #",X),U("Mat",X),U("Division",X),U("Weight",X),U("Round",X),U("Type",X),U("Red Corner",X),U("Green Corner",X),U("Red Pts (Input)",X),U("Green Pts (Input)",X),U("Winner R/G (Input)",X),U("Win Type (Input)",X),U("Time Done",X),U("Winning Wrestler",X),U("Winning Team",X),U("Team Pts",X),U("Red Team",X),U("Green Team",X),U("Next Routing",X)]],d=A=>{if(A.format===J.BestOfThree)return{};const k=s.filter(v=>v.bracket_id===A.bracket_id&&(v.winner_next_match_id===A.match_id||v.loser_next_match_id===A.match_id)).sort((v,M)=>v.bout_number-M.bout_number||v.match_id.localeCompare(M.match_id));if(k.length===0)return{};if(k.length===1){const v=k[0];if(A.red_athlete_id&&!A.green_athlete_id)return{greenFeeder:v};if(!A.red_athlete_id&&A.green_athlete_id)return{redFeeder:v};const M=v.winner_athlete_id,S=v.loser_athlete_id,T=v.winner_next_match_id===A.match_id?M:S;return T&&A.green_athlete_id===T?{greenFeeder:v}:{redFeeder:v}}return{redFeeder:k[0],greenFeeder:k[1]}};for(let A=0;A<s.length;A++){const k=s[A],v=A+2,M=k.red_athlete_id?e.get(k.red_athlete_id):void 0,S=k.green_athlete_id?e.get(k.green_athlete_id):void 0,{redFeeder:T,greenFeeder:q}=d(k);let z,L;if(T&&o.has(T.match_id)){const ne=o.get(T.match_id),ee=T.winner_next_match_id===k.match_id,he=`${ee?"Winner":"Loser"} #${T.bout_number}`,ae=M?wt(M):he,De=M?.team_id??"";z=ke(ee?`IF(K${ne}="R",G${ne},IF(K${ne}="G",H${ne},"${he}"))`:`IF(K${ne}="R",H${ne},IF(K${ne}="G",G${ne},"${he}"))`,ae,Ht),L=ke(ee?`IF(K${ne}="R",Q${ne},IF(K${ne}="G",R${ne},""))`:`IF(K${ne}="R",R${ne},IF(K${ne}="G",Q${ne},""))`,De)}else z=U(M?wt(M):k.red_athlete_id||"TBD",Ht),L=U(M?.team_id??"");let W,V;if(q&&o.has(q.match_id)){const ne=o.get(q.match_id),ee=q.winner_next_match_id===k.match_id,he=`${ee?"Winner":"Loser"} #${q.bout_number}`,ae=S?wt(S):he,De=S?.team_id??"";W=ke(ee?`IF(K${ne}="R",G${ne},IF(K${ne}="G",H${ne},"${he}"))`:`IF(K${ne}="R",H${ne},IF(K${ne}="G",G${ne},"${he}"))`,ae,Bs),V=ke(ee?`IF(K${ne}="R",Q${ne},IF(K${ne}="G",R${ne},""))`:`IF(K${ne}="R",R${ne},IF(K${ne}="G",Q${ne},""))`,De)}else W=U(S?wt(S):k.green_athlete_id||"TBD",Bs),V=U(S?.team_id??"");const H=le(k),O=H?k.winner_athlete_id===k.red_athlete_id?"R":k.winner_athlete_id===k.green_athlete_id?"G":"":"",j=H?(k.win_type||"DEC").toUpperCase():"",Y=O==="R"?String(z.value):O==="G"?String(W.value):"",K=O==="R"?String(L.value):O==="G"?String(V.value):"",te=n.get(k.match_id),re=(k.is_consolation?1:2)+Co(te?.conditions??[],o,v,"K","L"),ue=k.is_placement_bout&&k.placement_rank===1?16:k.is_placement_bout&&k.placement_rank===3?9:0,Be=`IF(O${v}="",0,${re}+IF(OR(L${v}="FALL",L${v}="PIN",L${v}="FORFEIT",L${v}="FF",L${v}="INJURY_DEFAULT",L${v}="INJ",L${v}="DQ"),2,IF(L${v}="TF",1.5,IF(L${v}="MD",1,0)))+${ue})`,me=k.winner_next_match_id?i.get(k.winner_next_match_id):void 0,ge=k.loser_next_match_id?i.get(k.loser_next_match_id):void 0,se=[];me&&!me.is_bye&&se.push(`Win -> #${me.bout_number}`),ge&&!ge.is_bye&&se.push(`Loss -> #${ge.bout_number}`);const Ee=se.join(" | ")||(k.is_placement_bout?`Medal (#${k.placement_rank})`:"Pool / End"),Qe=H&&k.completed_at_ms>0?new Date(k.completed_at_ms).toISOString().slice(11,16)+" UTC":"";x.push([be(k.bout_number),be(k.assigned_mat_id||1,Ze),U((k.division_id||"VARSITY").toUpperCase()),U(k.weight_class_id),U(k.round_label),U(Zl(k)),z,W,H||k.red_score>0||k.lifecycle>=$.InProgress?be(k.red_score,Ze):U("",Ze),H||k.green_score>0||k.lifecycle>=$.InProgress?be(k.green_score,Ze):U("",Ze),U(O,Ze),U(j,Ze),U(Qe,Ze),ke(`IF(K${v}="R",G${v},IF(K${v}="G",H${v},""))`,Y),ke(`IF(K${v}="R",Q${v},IF(K${v}="G",R${v},""))`,K),Ve(Be,O?An(k,te?.earnedPoints??0):0,et),L,V,U(Ee)])}s.length===0&&x.push([U("No bouts generated yet. Generate brackets in OpenMat or use the Standalone Fallback HTML app.")]);const u=new Map;for(const A of r.athletes)A.team_id&&!u.has(A.team_id)&&u.set(A.team_id,A.team_name||A.team_id);const _=[...u.keys()].sort((A,k)=>(u.get(A)??A).localeCompare(u.get(k)??k)),p=new Map;for(const A of t)if(A.is_bye&&A.is_placement_bout&&A.placement_rank===1&&!A.green_athlete_id&&A.winner_athlete_id){const k=e.get(A.winner_athlete_id);k&&p.set(k.team_id,(p.get(k.team_id)??0)+1)}const h=[[U("Team Code",X),U("School / Team Name",X),U("Total Points",X),U("Bout Points",X),U("Walkover Pts",X),U("Bout Wins",X),U("Falls / FF / DQ",X),U("Tech Falls",X),U("Major Decisions",X),U("Champions (1st)",X)]],m=Math.max(2,s.length+1);_.forEach((A,k)=>{const v=k+2,M=u.get(A)??A,S=p.get(A)??0,T=S*16;let q=0,z=0,L=0,W=0,V=0,H=0;for(const O of s){if(!le(O)||!O.winner_athlete_id)continue;const j=e.get(O.winner_athlete_id);if(!j||j.team_id!==A)continue;z+=1,q+=An(O,n.get(O.match_id)?.earnedPoints??0);const Y=(O.win_type||"DEC").toUpperCase();Y==="FALL"||Y==="PIN"||Y==="FORFEIT"||Y==="FF"||Y==="INJURY_DEFAULT"||Y==="DQ"?L+=1:Y==="TF"?W+=1:Y==="MD"&&(V+=1),O.is_placement_bout&&O.placement_rank===1&&(H+=1)}if(s.length===0)h.push([U(A,Ae),U(M),be(T,et),be(0,et),be(T,et),be(0),be(0),be(0),be(0),be(S)]);else{const O=`'Bout Runner Log'!$O$2:$O$${m}`,j=`'Bout Runner Log'!$P$2:$P$${m}`,Y=`'Bout Runner Log'!$L$2:$L$${m}`,K=`'Bout Runner Log'!$F$2:$F$${m}`;h.push([U(A,Ae),U(M),Ve(`D${v}+E${v}`,q+T,et),Ve(`SUMIF(${O},A${v},${j})`,q,et),be(T,et),Ve(`COUNTIF(${O},A${v})`,z),Ve(`COUNTIFS(${O},A${v},${Y},"FALL")+COUNTIFS(${O},A${v},${Y},"PIN")+COUNTIFS(${O},A${v},${Y},"FORFEIT")+COUNTIFS(${O},A${v},${Y},"FF")+COUNTIFS(${O},A${v},${Y},"INJURY_DEFAULT")+COUNTIFS(${O},A${v},${Y},"DQ")`,L),Ve(`COUNTIFS(${O},A${v},${Y},"TF")`,W),Ve(`COUNTIFS(${O},A${v},${Y},"MD")`,V),Ve(`COUNTIFS(${O},A${v},${K},"1st Place")+${S}`,H+S)])}});const E=[[U("Weight Class",X),U("Round",X),U("Bout #",X),U("Mat",X),U("Red Corner",X),U("Red Pts",X),U("Green Corner",X),U("Green Pts",X),U("Winner",X),U("Win Type",X)]],F=new Map;for(const A of t){const k=`${(A.division_id||"VARSITY").toUpperCase()} ${A.weight_class_id} lbs`,v=F.get(k)??[];v.push(A),F.set(k,v)}const g=[...F.keys()].sort((A,k)=>{const[v,M]=A.split(" "),[S,T]=k.split(" ");return(v||"").localeCompare(S||"")||Number(M)-Number(T)});for(const A of g){const k=(F.get(A)??[]).sort((v,M)=>Number(v.is_consolation)-Number(M.is_consolation)||v.round_index-M.round_index||v.bout_number-M.bout_number);E.push([U(`=== ${A} (${k[0]?.format??""}) ===`,Ae)]);for(const v of k){if(v.is_bye){const T=v.red_athlete_id?e.get(v.red_athlete_id):void 0;if(!T)continue;E.push([U(A),U(v.round_label),be(v.bout_number),be(v.assigned_mat_id||1),U(wt(T),Ht),U("—"),U("BYE"),U("—"),U(wt(T)),U("BYE")]);continue}const M=o.get(v.match_id),S=x[M-1];E.push([U(A),U(v.round_label),Ve(`'Bout Runner Log'!A${M}`,v.bout_number),Ve(`'Bout Runner Log'!B${M}`,v.assigned_mat_id||1),ke(`'Bout Runner Log'!G${M}`,String(S[6]?.value??""),Ht),ke(`'Bout Runner Log'!I${M}&""`,String(S[8]?.value??"")),ke(`'Bout Runner Log'!H${M}`,String(S[7]?.value??""),Bs),ke(`'Bout Runner Log'!J${M}&""`,String(S[9]?.value??"")),ke(`'Bout Runner Log'!N${M}`,String(S[13]?.value??"")),ke(`'Bout Runner Log'!L${M}`,String(S[11]?.value??""))])}E.push([])}const b=[[U("Division",X),U("Weight Class",X),U("Seed #",X),U("Wrestler Name",X),U("Team Code",X),U("School Name",X),U("Eligibility Status",X),U("Athlete ID",X)]],C=[...r.athletes].sort((A,k)=>(A.division_id||"VARSITY").localeCompare(k.division_id||"VARSITY")||Number(A.weight_class_id)-Number(k.weight_class_id)||A.seed_rank-k.seed_rank||A.public_display_name.localeCompare(k.public_display_name));for(const A of C){const k=A.check_in_stage===Q.Eligible&&A.weigh_in_eligible&&A.medically_cleared;b.push([U((A.division_id||"VARSITY").toUpperCase()),U(A.weight_class_id),be(A.seed_rank),U(A.public_display_name),U(A.team_id),U(A.team_name),U(k?"ELIGIBLE":Te[A.check_in_stage]??"PENDING"),U(A.athlete_id)])}const B=[{id:"rIdGuide",partName:"worksheets/guide.xml",sheetName:"Emergency Guide",freezeHeader:!0,colWidths:[34,96],rows:l,landscape:!0},{id:"rIdBouts",partName:"worksheets/bouts.xml",sheetName:"Bout Runner Log",freezeHeader:!0,colWidths:[8,7,11,8,28,11,28,28,13,13,16,16,12,28,13,10,10,10,24],rows:x,landscape:!0},{id:"rIdStandings",partName:"worksheets/standings.xml",sheetName:"Team Standings",freezeHeader:!0,colWidths:[12,30,14,14,14,12,14,12,15,15],rows:h},{id:"rIdBrackets",partName:"worksheets/brackets.xml",sheetName:"Brackets by Weight",freezeHeader:!0,colWidths:[18,28,9,7,28,10,28,10,28,14],rows:E,landscape:!0},{id:"rIdRoster",partName:"worksheets/roster.xml",sheetName:"Roster & Seeds",freezeHeader:!0,colWidths:[12,13,9,26,12,28,18,24],rows:b}],w='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'+B.map(A=>`<Override PartName="/xl/${A.partName}" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("")+"</Types>",D='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdWorkbook" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',f=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><workbookViews><workbookView activeTab="1"/></workbookViews><sheets>${B.map((A,k)=>`<sheet name="${jt(A.sheetName)}" sheetId="${k+1}" r:id="${A.id}"/>`).join("")}</sheets><calcPr fullCalcOnLoad="1"/></workbook>`,P='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'+B.map(A=>`<Relationship Id="${A.id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="${A.partName}"/>`).join("")+"</Relationships>",N=new TextEncoder,y=[{path:"[Content_Types].xml",data:N.encode(w)},{path:"_rels/.rels",data:N.encode(D)},{path:"xl/workbook.xml",data:N.encode(f)},{path:"xl/_rels/workbook.xml.rels",data:N.encode(P)},{path:"xl/styles.xml",data:N.encode(Jl())},...B.map(A=>({path:`xl/${A.partName}`,data:N.encode(Kl(A))}))];return Xl(y)}function tr(r,e=Date.now()){if(!r)return{version:1,revision:1,updated_at_ms:e,tournament_id:ie.tournamentId,tournament_name:ie.tournamentName,event_date:ie.eventDate,venue:ie.venue,rules_version:ie.rulesVersion,mat_count:ie.matCount,growth_allowance_tenths:ie.growthAllowanceTenths,consecutive_day_allowance_tenths:0,required_rest_ms:1800*1e3,bracket_frozen_by_class:[],athletes:[],bouts:[],weigh_ins:{},medicals:{}};const t={};for(const[a,l]of r.privateWeighIns.entries())t[a]={station_id:l.station_id,scale_id:l.scale_id,measured_weight_tenths:l.measured_weight_tenths};const s={};for(const[a,l]of r.privateMedicals.entries())s[a]={reviewer_id:l.reviewer_id,decision:l.decision};const n=Array.from(r.bouts.values()).map(a=>structuredClone(a)),i=Array.from(r.athletes.values()).map(a=>structuredClone(a)),o=n.filter(a=>!a.is_bye&&!!a.winner_athlete_id).length;return{version:1,revision:Math.max(1,r.snapshotEpoch,r.controlSequenceHead,o+1),updated_at_ms:e,tournament_id:r.tournamentId,tournament_name:r.tournamentName,event_date:r.eventDate,venue:r.venue,rules_version:r.rulesVersion,mat_count:r.matCount,growth_allowance_tenths:r.growthAllowanceTenths,consecutive_day_allowance_tenths:r.consecutiveDayAllowanceTenths,required_rest_ms:r.requiredRestMs,bracket_frozen_by_class:Array.from(r.bracketFrozenByClass.entries()),athletes:i,bouts:n,weigh_ins:t,medicals:s}}function Bo(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function tc(r){return JSON.stringify(r).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026")}const sc=`
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
`;function nc(r){return`  <header class="topbar">
    <div>
      <div class="eyebrow">
        <span class="pill warn" id="hdr-mode-pill">OFFLINE FALLBACK</span>
        <span id="hdr-save-status">Saved in browser</span>
        <span id="hdr-progress-summary">0 / 0 Bouts</span>
      </div>
      <h1 id="hdr-tournament-title">${Bo(r||"OpenMat Emergency Fallback Tournament")}</h1>
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

  <dialog id="fallback-correction-dialog" aria-label="Correct or reopen bout result"></dialog>`}function ic(){const r=JSON.stringify(Ft),e=JSON.stringify(Te);return`(function () {
  "use strict";

  var NOVICE_RULESET = ${JSON.stringify(Rt)};
  var VARSITY_RULESET = ${JSON.stringify(As)};
  var PRESET_SCHOOLS = ${r};
  var STAGE_LABELS = ${e};
  var BOYS_WEIGHTS = ["106","113","120","126","132","138","144","150","157","165","175","190","215","285"];
  var GIRLS_WEIGHTS = ["100","107","114","120","126","132","138","145","152","165","175","185","205","235"];
  var ALL_WEIGHTS = ["100","106","107","113","114","120","126","132","138","144","145","150","152","157","165","175","185","190","205","215","235","285"];
  var DIVISIONS = ["NOVICE","JV","VARSITY","GIRLS","BOYS","U16","U18"];
  var WIN_TYPES = ["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"];
  var PAPER_MARGINS = ${JSON.stringify(yo)};
  var computeByeAdvancement = ${$s.toString()};
  var byeAdvancementFormula = ${Co.toString()};
  var completedBoutTeamPoints = ${An.toString()};

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
})();`}function rc(r){const e=Bo(r.tournament_name||"OpenMat Emergency Fallback Tournament"),t=nc(r.tournament_name),s=tc(r),n=ic();return`<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${e} - Offline Emergency Fallback</title>
  <style id="openmat-fallback-styles">${sc}</style>
</head>
<body>
`+t+`
  <template id="openmat-shell-template">
${t}
  </template>
  <script id="openmat-fallback-state" type="application/json">${s}<\/script>
  <script id="openmat-fallback-runtime">${n}<\/script>
</body>
</html>
`}const Ft=[{teamId:"SBHS",teamName:"Santa Barbara High School"},{teamId:"DPHS",teamName:"Dos Pueblos High School"},{teamId:"SMHS",teamName:"San Marcos High School"},{teamId:"VHS",teamName:"Ventura High School"},{teamId:"BHS",teamName:"Buena High School"},{teamId:"OHS",teamName:"Oxnard High School"},{teamId:"PHS",teamName:"Pacifica High School"},{teamId:"RMHS",teamName:"Rio Mesa High School"}],ie={tournamentId:"channel-league-novice-2026-11-20",tournamentName:"Nov 20 - Channel League Novice Tournament",eventDate:"2026-11-20",venue:"Channel League Main Gymnasium",rulesVersion:Rt,growthAllowanceTenths:20,matCount:5,defaultDivision:"NOVICE"},kn=["106","113","120","126","132","138","144","150","157","165","175","190","215","285"],oc=["100","107","114","120","126","132","138","145","152","165","175","185","205","235"],wo=["100","106","107","113","114","120","126","132","138","144","145","150","152","157","165","175","185","190","205","215","235","285"],Yt=["VARSITY","JV","BOYS","GIRLS","U16","U18","NOVICE"];function mt(r){const e=(r??"").trim().toUpperCase();return e==="ALL"?wo:e.includes("GIRL")||e.includes("FEMALE")||e.includes("WOMEN")||e==="W"||e==="F"?oc:kn}const Q={Expected:1,Arrived:2,WeighInPending:3,MedicalPending:4,Eligible:5,Withdrawn:6,Scratched:7},Te={1:"Expected",2:"Arrived",3:"Weigh-In Pending",4:"Medical Pending",5:"Eligible",6:"Withdrawn",7:"Scratched"},J={AutoByCount:"AUTO_BY_COUNT",BestOfThree:"BEST_OF_THREE",DoubleElimCrossover:"DOUBLE_ELIM_CROSSOVER",RoundRobinPool:"ROUND_ROBIN_POOL",PoolToBracket:"POOL_TO_BRACKET",TeamDual:"TEAM_DUAL",TrueSecondChallenge:"TRUE_SECOND_CHALLENGE"},$={PendingUpstream:1,Assigned:2,Ready:3,InProgress:4,EndedLocal:5,LocallyConfirmed:6,ResultAccepted:7,UnderProtestHold:8,InvalidatedForCorrection:9},yo={DEC:{min:1,max:7,message:"For a decision, the winner must lead by 1 to 7 points."},MD:{min:8,max:14,message:"For a major decision, the winner must lead by 8 to 14 points."},TF:{min:15,message:"For a technical fall, the winner must lead by at least 15 points."}};function vo(r,e){const t=yo[r];if(t&&(e<t.min||e>(t.max??1/0)))throw new Error(t.message)}function le(r){return r.is_bye?r.lifecycle===$.ResultAccepted:!!r.winner_athlete_id&&(r.lifecycle===$.EndedLocal||r.lifecycle===$.LocallyConfirmed||r.lifecycle===$.ResultAccepted)}function Fn(r){return le(r)?r.winner_athlete_id:""}const ac=["tournament_id","tournament_name","event_date","venue","athlete_id","wrestler_name","team_id","team_name","division_id","weight_class_lbs","seed_rank","flowrestling_id","check_in_status","weigh_in_eligible","medically_cleared","bracket_format","bracket_complete","placement","standing_rank","matches_played","wins","losses","win_pct","byes_received","championship_wins","championship_losses","consolation_wins","consolation_losses","matches_wrestled_today","prior_day_matches","wins_by_fall","wins_by_tech_fall","wins_by_major_decision","wins_by_decision","wins_by_forfeit","wins_by_injury_default","wins_by_dq","bonus_wins","bonus_win_pct","losses_by_fall","losses_by_tech_fall","losses_by_major_decision","losses_by_decision","losses_by_forfeit_default_dq","match_points_scored","match_points_allowed","match_point_differential","avg_match_points_scored","avg_match_points_allowed","event_logged_bouts","takedowns_scored","takedowns_allowed","escapes_scored","escapes_allowed","reversals_scored","reversals_allowed","near_falls_2_scored","near_falls_3_scored","near_falls_4_scored","near_falls_total_scored","near_falls_allowed","cautions_committed","stalling_calls_committed","penalties_committed","fastest_fall_sec","team_advancement_points","team_bonus_points","team_placement_points","team_points_total","ow_votes"],dn="openmat_officials_channel_league_authority",sr="openmat_officials_authority_key",Vt=()=>typeof location>"u"?"http://127.0.0.1:5174":location.origin;class oe{keyPair;verifiers=new Map;protocolJournal=[];knownProvisionHeads=new Set;owVotes=new Map;now;tournamentId=ie.tournamentId;tournamentName=ie.tournamentName;eventDate=ie.eventDate;venue=ie.venue;rulesVersion=ie.rulesVersion;growthAllowanceTenths=ie.growthAllowanceTenths;consecutiveDayAllowanceTenths=0;matCount=ie.matCount;snapshotEpoch=1;controlSequenceHead=1;requiredRestMs=1800*1e3;dailyMatchCap=6;consecutiveTwoDayCap=10;athletes=new Map;pendingSelfRegistrations=new Map;selfRegistrationDispositions=new Map;selectedPendingSelfRegId="";privateWeighIns=new Map;privateMedicals=new Map;bouts=new Map;mats=new Map;revokedCertificateIds=new Set;scratches=new Map;resultCorrections=[];bracketFrozenByClass=new Map;nextBoutNumber=101;roomRouter=new $t(ie.matCount);overlayMesh=new Al({peerId:`official-${gs()}`});get livePeerId(){return this.overlayMesh.peerId}liveTransportError="";liveOrigin="";liveTournamentId="";liveTransportRole="";registryTimer=null;liveConsoleRole="primary";hasExplicitStoredRole=!1;liveTransportChain=Promise.resolve();liveTransportGeneration=0;registryChain=Promise.resolve();lastRegistryUpdatedAtMs=0;onStateChanged;static DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL="https://pureengineering.github.io/openmat";static DEFAULT_PUBLIC_OFFICIALS_WEB_BASE_URL="https://pureengineering.github.io/openmat/officials";static DEFAULT_PUBLIC_REGISTER_WEB_BASE_URL="https://pureengineering.github.io/openmat/register";static DEFAULT_PUBLIC_NOSTR_RELAYS=["wss://relay.damus.io","wss://nos.lol","wss://relay.primal.net"];publicNostrRelays=[...oe.DEFAULT_PUBLIC_NOSTR_RELAYS];publicNostrRelayPublishingEnabled=!1;linkedVenuePubkeyHex="";linkedVenueJoinQrUri="";hasExternalVenueServer=!1;lastNostrPublishedAtMs=0;pendingProjections=new Map;officialsPassword=typeof window>"u"?"":new URLSearchParams(window.location.hash.slice(1)).get("password")??"";projectionFlushes=new Map;get pendingProjectionPostCount(){return this.pendingProjections.size}publicationRevision=0;publicationTournamentId="";publicationPackets=new Map;livePacketHeads=new Map;lastSyncedVenueEpochByPublisher=new Map;nostrRelayStatuses=new Map;get activeVenueOrigin(){return this.liveOrigin||Vt()}setVenueOrigin(e){const t=this.activeVenueOrigin;this.liveOrigin=e,this.activeVenueOrigin!==t&&this.onStateChanged?.()}get consoleRole(){return this.liveConsoleRole}setConsoleRole(e){this.liveConsoleRole=e,this.hasExplicitStoredRole=!0,this.broadcastEnabled&&typeof localStorage<"u"&&localStorage.setItem("openmat_officials_console_role",e)}get rulesBundle(){return hl(this.rulesVersion,this.requiredRestMs,this.dailyMatchCap,this.consecutiveTwoDayCap)}get rulesHash(){return _l(this.rulesBundle)}async startLiveTransport(e,t=this.liveConsoleRole,s){const n=this.liveTransportGeneration,i=async()=>{if(s?.aborted||n!==this.liveTransportGeneration)return;const a=this.tournamentId,l=this.liveTransportRole!==t||this.liveOrigin!==e||this.liveTournamentId!==a;this.liveTournamentId=a,this.liveTransportRole=t,this.liveConsoleRole=t,this.setVenueOrigin(e),l&&(this.overlayMesh.stopLiveRooms(),this.livePacketHeads.clear());const c=async _=>{let p="";if(this.overlayMesh.liveRooms.has(_))return;let h;try{h=await this.overlayMesh.joinLiveRoom({origin:e,tournamentId:a,roomId:_,peerId:this.livePeerId,rootPublicKeyHex:this.publisherPublicKeyHex,publicKey:this.keyPair.publicKey,role:this.liveConsoleRole,sign:m=>qe(Fe,m,this.keyPair.privateKey),onMembership:m=>{this.syncVenueRoomRouter();const E=this.overlayMesh.liveRooms.get(_),F=JSON.stringify([E?.reconnectCount,m.map(g=>g.peer_id).sort()]);n===this.liveTransportGeneration&&t==="primary"&&_.startsWith("subtree:")&&F!==p&&(p=F,this.livePacketHeads.delete(_),this.broadcastLiveRooms(JSON.stringify(this.buildSignedPublicProjection())))},onError:m=>{this.liveTransportError=m.message},onMessage:(m,E)=>{if(m==="control-state"&&_===at&&this.acceptControlSnapshot(E),m==="signed-event"&&_.startsWith("mat:")){if(je(E).stream_id!==_)throw new Error("Cross-mat event rejected");this.acceptMatsideSignedEvent(E)}},onRpc:(m,E)=>{if(m==="matside"&&_.startsWith("mat:"))return this.handleMatsideRequest(E,_);if(m==="bracket-sync"&&t==="primary"&&_.startsWith("subtree:"))return this.bracketSync(E,_);if(m==="projection"&&_.startsWith("subtree:"))return new TextEncoder().encode(JSON.stringify(this.buildSignedPublicProjection()));if(m==="ow-vote"&&_.startsWith("subtree:"))try{const F=JSON.parse(new TextDecoder().decode(E)),g=this.submitOwVote(F);return new TextEncoder().encode(JSON.stringify({ok:!0,result:g,envelope:this.buildSignedPublicProjection()}))}catch(F){return new TextEncoder().encode(JSON.stringify({ok:!1,error:F instanceof Error?F.message:String(F)}))}if(m==="scorekeeper-event"&&(_.startsWith("subtree:")||_.startsWith("mat:")))try{const F=this.acceptMatsideSignedEvent(E);return new TextEncoder().encode(JSON.stringify({ok:!0,result:F,envelope:this.buildSignedPublicProjection()}))}catch(F){return new TextEncoder().encode(JSON.stringify({ok:!1,error:F instanceof Error?F.message:String(F)}))}if(m==="control-sync"&&_===at)return this.signedControlSnapshot();throw new Error("RPC forbidden in this room")}})}catch(m){throw this.overlayMesh.liveRooms.get(_)?.stop(),this.overlayMesh.liveRooms.delete(_),new Error(`Cannot join ${_}: ${String(m)}`)}if(n!==this.liveTransportGeneration){h.stop(),this.overlayMesh.liveRooms.get(_)===h&&this.overlayMesh.liveRooms.delete(_);return}if(_===at){const m=[...h.members.keys()].find(E=>E!==this.livePeerId);m&&this.acceptControlSnapshot(await h.request("control-sync",new Uint8Array,m))}};if(t==="primary"&&await this.flushPendingProjections(e,l),n!==this.liveTransportGeneration)return;if(this.hasExternalVenueServer&&this.linkedVenuePubkeyHex&&this.linkedVenuePubkeyHex.toLowerCase()!==this.publisherPublicKeyHex.toLowerCase()){this.overlayMesh.stopLiveRooms(),this.livePacketHeads.clear(),this.pendingProjectionPostCount||(this.liveTransportError="");return}const x=this.desiredLiveRooms(t);for(const[_,p]of this.overlayMesh.liveRooms)x.includes(_)||(p.stop(),this.overlayMesh.liveRooms.delete(_),this.livePacketHeads.delete(_));if(!l&&x.every(_=>this.overlayMesh.liveRooms.has(_))){!this.pendingProjectionPostCount&&x.every(_=>this.overlayMesh.liveRooms.get(_)?.diagnostics().brokerConnected)&&(this.liveTransportError="");return}if(await this.publishRegistry(e),n!==this.liveTransportGeneration)return;this.registryTimer||(this.registryTimer=setInterval(()=>{this.liveOrigin&&this.publishRegistry(this.liveOrigin).catch(_=>{this.liveTransportError=String(_)})},15e3));const u=(await Promise.allSettled(x.map(c))).find(_=>_.status==="rejected");if(u)throw u.reason;x.every(_=>this.overlayMesh.liveRooms.get(_)?.diagnostics().brokerConnected)&&(this.liveTransportError="")},o=this.liveTransportChain.then(i,i);return this.liveTransportChain=o.catch(()=>{}),o}desiredLiveRooms(e=this.liveConsoleRole){const t=[at];if(e!=="official")for(let s=1;s<=this.matCount;s++)t.push(`mat:${s}`);if(e==="primary"){t.push("subtree:venue-super-seed");for(const s of new Set([...this.bouts.values()].map(n=>n.bracket_id)))typeof s=="string"&&s!=="undefined"&&s!=="null"&&/^[A-Za-z0-9_-]{1,100}$/.test(s)&&t.push(`subtree:b:${s}`)}return t}async publishRegistry(e){const t=async()=>{const n=l=>{const c=new URL(l,e);return c.protocol=c.protocol==="https:"?"wss:":"ws:",c.href},i=this.desiredLiveRooms().slice(0,64);this.lastRegistryUpdatedAtMs=Math.max(this.now(),this.lastRegistryUpdatedAtMs+1);const o=dl({tournament_id:this.tournamentId,root_pubkey_hex:this.publisherPublicKeyHex,peer_pubkey_hex:this.publisherPublicKeyHex,authority_epoch:Math.max(1,...[...this.mats.values()].map(l=>l.authority_epoch)),role:this.liveConsoleRole==="standby"?"BACKUP":"PRIMARY",origins:[new URL(e).origin],nostr_relay_urls:[n("/api/openmat-nostr")],p2p_broker_urls:[n("/api/openmat-p2p")],active_rooms:i,assigned_mats:[],updated_at_ms:this.lastRegistryUpdatedAtMs},l=>qe(Fe,l,this.keyPair.privateKey)),a=await fetch(new URL("/api/openmat-registry",e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o),signal:AbortSignal.timeout(3e3)});if(!a.ok)throw new Error(`Registry publication failed: ${a.status} ${await a.text()}`)},s=this.registryChain.then(t,t);return this.registryChain=s.catch(()=>{}),s}stopLiveTransport(){this.liveTransportGeneration++,this.livePacketHeads.clear(),this.registryTimer&&clearInterval(this.registryTimer),this.registryTimer=null,this.overlayMesh.stopLiveRooms(),this.syncVenueRoomRouter(),this.setVenueOrigin("")}signedControlSnapshot(){const e=this.storageState(),t=lt({tournament_id:this.tournamentId,sequence:this.controlSequenceHead,state:JSON.stringify(e)});return lt({body:t,signature:qe(Fe,t,this.keyPair.privateKey)})}acceptControlSnapshot(e){const t=zt(e),s=t.body;if(!Pe(Fe,s,this.keyPair.publicKey,t.signature))throw new Error("Invalid control snapshot");const n=zt(s);if(!(n.tournament_id!==this.tournamentId||Number(n.sequence)<=this.controlSequenceHead)){if(typeof localStorage>"u")throw new Error("Officials control sync requires durable storage");localStorage.setItem(dn,String(n.state)),this.loadFromStorage(!0),this.syncVenueRoomRouter(),this.onStateChanged?.()}}handleMatsideRequest(e,t,s=this.now()){const n=zt(e),i=n.body,o=zt(i),a=Number(o.mat_number),l=this.mats.get(a);if(!l||o.tournament_id!==this.tournamentId||t&&t!==`mat:${a}`||!(o.nonce instanceof Uint8Array)||o.nonce.length!==32||!(o.device_public_key instanceof Uint8Array)||!we(o.device_public_key,ce(l.device_pubkey_hex))||o.device_key_id!==l.android_device_id||!Pe(Fe,i,o.device_public_key,n.signature))throw new Error("Unauthorized matside request");const c=Gt(l.cert_cbor_hex);if(this.revokedCertificateIds.has(c.certificate_id))throw new Error("Certificate revoked");const x={nonce:o.nonce,tournament_id:this.tournamentId,mat_number:a};let d;if(o.operation==="provision"||o.operation==="push_bout"){Ts(c,this.keyPair.publicKey,s,!1);const _=o.operation==="push_bout"&&this.pushMatBout(a,o.match_id,o.after_match_id,s),p=[...this.matQueue(a),...[...this.bouts.values()].filter(g=>g.assigned_mat_id===a&&!g.is_bye&&g.lifecycle===$.ResultAccepted&&g.red_athlete_id&&g.green_athlete_id)].map(g=>({match_id:g.match_id,bout_number:String(g.bout_number),...g.lifecycle===$.ResultAccepted?{completed:!0}:{},weight_class:g.weight_class_id,red_name:this.athletes.get(g.red_athlete_id).public_display_name,red_school:this.athletes.get(g.red_athlete_id).team_name,green_name:this.athletes.get(g.green_athlete_id).public_display_name,green_school:this.athletes.get(g.green_athlete_id).team_name,assignment_revision:g.assignment_revision}));if(!p.length&&o.operation==="push_bout")throw new Error("No director-approved bouts assigned to this mat");const h=Oe(lt({certificate:c.certificate_id,rules_hash:this.rulesHash,queue:p})),m=_e(h),E=`${a}:${m}`;this.knownProvisionHeads.has(E)?_&&this.publishAndSave():(this.verifiers.get(a).markControlHeadKnown(h),this.knownProvisionHeads.add(E),this.protocolJournal.push({matId:a,controlHeadHex:m}),this.publishAndSave());const F=this.getMatsideStreamHead(a);d={...x,revision:c.assignment_revision,certificate:c,control_head:h,rules:this.rulesBundle,rules_hash:this.rulesHash,queue:p,stream_head_sequence:F.sequence,stream_head_hash:ce(F.hashHex)}}else if(o.operation==="event"&&o.event instanceof Uint8Array){const _=je(o.event);if(_.stream_id!==`mat:${a}`)throw new Error("Cross-mat event");this.acceptMatsideSignedEvent(o.event,s),d={...x,match_id:_.match_id,sequence:_.sequence,event_id:_.event_id}}else if(o.operation==="events"&&Array.isArray(o.events)){if(o.events.length===0||o.events.length>128)throw new Error("Invalid matside event batch");const _=this.isSeeding;this.isSeeding=!0;try{for(const p of o.events){if(!(p instanceof Uint8Array))throw new Error("Invalid matside event bytes");if(je(p).stream_id!==`mat:${a}`)throw new Error("Cross-mat event");this.acceptMatsideSignedEvent(p,s)}}finally{this.isSeeding=_}this.publishAndSave(),d={...x,accepted_sequence:this.getMatsideStreamHead(a).sequence}}else throw new Error("Unsupported matside operation");(o.operation==="provision"||o.operation==="push_bout")&&(d.registry_authorization=_e(qe(Fe,lt({tournament_id:this.tournamentId,peer_pubkey_hex:_e(o.device_public_key),role:"MAT_PEER"}),this.keyPair.privateKey)));const u=lt(d);return lt({body:u,signature:qe(Fe,u,this.keyPair.privateKey)})}matQueue(e){return[...this.bouts.values()].filter(t=>t.assigned_mat_id===e&&!t.is_bye&&t.lifecycle>=$.Assigned&&t.lifecycle<=$.LocallyConfirmed&&t.red_athlete_id&&t.green_athlete_id).sort(Bn)}pushMatBout(e,t,s,n){const i=this.matQueue(e),o=i.findIndex(d=>d.match_id===t),a=i[o],l=a?[...this.protocolJournal].reverse().map(d=>{try{return d.wireHex?je(ce(d.wireHex)):null}catch{return null}}).find(d=>d?.match_id===a.match_id):null,c=!!a&&a.lifecycle===$.InProgress&&l?.event_type==="MATCH_UNDO_LAST_ACTION"&&!a.clock_running&&!a.completed_at_ms&&a.period_number===1&&a.red_score===0&&a.green_score===0&&a.clock_remaining_ms===this.rulesBundle.period_1_duration_ms;if(!a||a.lifecycle>$.Ready&&!c||a.clock_running||a.completed_at_ms)throw new Error("Only an unstarted bout on this mat can move");if(o>0&&i[o-1]?.match_id===s)return this.saveToStorage(),!1;const x=i[o+1];if(!x||x.match_id!==s||x.lifecycle>$.Ready)throw new Error("Select the next unconfirmed bout on this mat");return o===0&&this.validateBoutSafetyGates(x,n),c&&(a.lifecycle=$.Assigned),i[o]=x,i[o+1]=a,i.forEach((d,u)=>{d.mat_queue_order=u+1}),this.promoteMatReadyBout(e,n),!0}promoteMatReadyBout(e,t){const s=this.matQueue(e),n=s.filter(o=>o.lifecycle<=$.Ready).sort((o,a)=>(o.mat_queue_order||1/0)-(a.mat_queue_order||1/0)||o.bout_number-a.bout_number),i=s.some(o=>o.lifecycle===$.InProgress)?void 0:n.find(o=>this.isBoutReadyEligible(o,t));n.forEach(o=>{o.lifecycle=o===i?$.Ready:$.Assigned})}isBoutReadyEligible(e,t){try{return this.validateBoutSafetyGates(e,t),!0}catch{return!1}}broadcastEnabled;isSeeding=!1;broadcastChannel;deletedMatchIds=new Set;clearedRestMatchIds=new Set;syncedOwVoteTallies={};constructor(e){const t=Date.now(),s=performance.now();this.now=e?.now??(()=>t+Math.floor(performance.now()-s));let n=e?.broadcastEnabled!==!1&&typeof localStorage<"u"?localStorage.getItem(sr):null;n||(n=_e(crypto.getRandomValues(new Uint8Array(32))),e?.broadcastEnabled!==!1&&typeof localStorage<"u"&&localStorage.setItem(sr,n)),this.keyPair=B0("officials-authority",ce(n));const i=e?.broadcastEnabled!==!1&&typeof localStorage<"u"?localStorage.getItem("openmat_officials_console_role"):null;if((i==="standby"||i==="official"||i==="primary")&&(this.liveConsoleRole=i,this.hasExplicitStoredRole=!0),this.broadcastEnabled=e?.broadcastEnabled??!0,this.broadcastChannel=this.broadcastEnabled&&typeof window<"u"&&typeof BroadcastChannel<"u"?new BroadcastChannel("openmat-live-sync"):null,!this.broadcastEnabled||!this.loadFromStorage()){this.isSeeding=!0;try{this.initializeTournamentRegistrationManifest(),this.syncVenueRoomRouter()}finally{this.isSeeding=!1}this.broadcastEnabled&&this.saveToStorage()}this.syncVenueRoomRouter()}get publisherPublicKeyHex(){return _e(this.keyPair.publicKey)}resetTournamentState(e=!1){e||this.assertDrawNotStarted(),this.athletes.clear(),this.pendingSelfRegistrations.clear(),this.selfRegistrationDispositions.clear(),this.selectedPendingSelfRegId="",this.privateWeighIns.clear(),this.privateMedicals.clear(),this.owVotes.clear(),this.syncedOwVoteTallies={},this.deletedMatchIds.clear(),this.clearedRestMatchIds.clear(),this.tournamentId=ie.tournamentId,this.tournamentName=ie.tournamentName,this.eventDate=ie.eventDate,this.venue=ie.venue,this.rulesVersion=ie.rulesVersion,this.growthAllowanceTenths=ie.growthAllowanceTenths,this.consecutiveDayAllowanceTenths=0,this.matCount=ie.matCount,this.clearMatchState(),this.syncVenueRoomRouter(),this.publishAndSave(!0,!0)}resetAllMatches(){this.owVotes.clear(),this.syncedOwVoteTallies={},this.clearMatchState();const e=this.now();for(const t of this.athletes.values())t.matches_wrestled_today=0,t.prior_day_matches=0,t.last_bout_ended_ms=0,t.updated_at_ms=e;this.publishAndSave(!0,!0)}clearMatchState(){for(const e of this.bouts.keys())this.deletedMatchIds.add(e);this.clearedRestMatchIds.clear();for(const e of this.mats.values())e.certificate_id&&this.revokedCertificateIds.add(e.certificate_id);this.bouts.clear(),this.mats.clear(),this.verifiers.clear(),this.protocolJournal=[],this.resultCorrections=[],this.scratches.clear(),this.knownProvisionHeads.clear(),this.bracketFrozenByClass.clear(),this.lastSyncedVenueEpochByPublisher.clear(),this.nextBoutNumber=101,this.initializeTournamentRegistrationManifest()}syncVenueRoomRouter(){const e=new $t(this.matCount);for(const[t,s]of this.overlayMesh.liveRooms)for(const[n,i]of s.members)t===at?e.joinControlOfficialsRoom(n,i.role==="primary"?Zt.DirectorPrimary:i.role==="standby"?Zt.DirectorStandby:Zt.BoutDispatchClerk):t.startsWith("mat:")?e.joinMatRoom(Number(t.slice(4)),n,i.role==="primary"?nt.HeadTablePrimary:i.role==="standby"?nt.HeadTableStandby:nt.MatPrimaryScorekeeper):e.joinSubtreeRoom(t.slice(8),n,s.lastPingRttMs??0);return this.roomRouter=e,e.computeAccountingSummary()}configureMatCount(e){if(!Number.isInteger(e)||e<1||e>Ye)throw new I(R.BoundsExceeded,`matCount must be between 1 and ${Ye}`);this.matCount=e,this.liveOrigin&&this.startLiveTransport(this.liveOrigin).catch(s=>{this.liveTransportError=String(s)});for(let s=1;s<=this.matCount;s++)this.mats.has(s)||this.mats.set(s,this.unprovisionedMat(s));for(const s of Array.from(this.mats.keys()))s>this.matCount&&this.mats.delete(s);const t=this.syncVenueRoomRouter();return this.publishAndSave(),t}getVenueRoomTopologySummary(){return this.roomRouter.computeAccountingSummary()}activateStandbyDirectorFailover(){const e=this.roomRouter.activateStandbyHeadTableFailover();return e===this.livePeerId&&this.liveOrigin&&(this.liveConsoleRole="primary",this.startLiveTransport(this.liveOrigin).catch(t=>{this.liveTransportError=String(t)})),this.publishAndSave(),e}unprovisionedMat(e){return{mat_id:e,android_device_id:"",operator_name:"",authority_epoch:1,device_pubkey_hex:"",certificate_id:"",allowed_scopes:0,issued_at_ms:0,expires_at_ms:0,cert_cbor_hex:"",scorekeeper_qr_uri:"",status:"HANDOFF_STOPPED",last_heartbeat_ms:0}}buildSignedMatDelegation(e,t,s,n,i,o=this.now()){const a=o+2592e5,l=`CERT-MAT-${e}-${gs()}`,c=Ne.ReadPublic|Ne.ScoreMat|Ne.ConfirmLocalResult,x=Pi({certificate_id:l,tournament_id:this.tournamentId,subject_key_id:t,subject_pubkey:ce(i),role:xt.MatOperator,allowed_scopes:c,allowed_stream_id:`mat:${e}`,assigned_mat_id:e,assignment_revision:n,authority_generation:n,issued_at_ms:o,expires_at_ms:a,allow_in_progress_completion:!0},this.keyPair.privateKey),d=Tl(x),u=Pl({tournament_id:this.tournamentId,tournament_name:this.tournamentName,publisher_pubkey_hex:this.publisherPublicKeyHex,relay_origin:Vt(),cert_cbor_hex:d});return{mat_id:e,android_device_id:t,operator_name:s,authority_epoch:n,device_pubkey_hex:i,certificate_id:l,allowed_scopes:c,issued_at_ms:o,expires_at_ms:a,cert_cbor_hex:d,scorekeeper_qr_uri:u,status:"ONLINE_SYNCED",last_heartbeat_ms:o}}initializeTournamentRegistrationManifest(){for(let e=1;e<=this.matCount;e++)this.mats.set(e,this.unprovisionedMat(e))}configureTournament(e){const t=e.name.trim(),s=e.eventDate.trim(),n=e.venue.trim();if(!t||!n||!/^\d{4}-\d{2}-\d{2}$/.test(s)||!Number.isFinite(Date.parse(`${s}T00:00:00Z`))||new Date(`${s}T00:00:00Z`).toISOString().slice(0,10)!==s)throw new I(R.InvalidArgument,"Enter the event name, date and venue");this.tournamentName=t,this.eventDate=s,this.venue=n,this.publishAndSave()}configureRulesVersion(e){const t=e.trim();if(!t)throw new I(R.InvalidArgument,"Select a match period ruleset");this.rulesVersion=t;const s=this.rulesBundle.period_1_duration_ms;for(const n of this.bouts.values())n.lifecycle<=$.Ready&&!n.clock_running&&n.red_score===0&&n.green_score===0&&n.period_number===1&&(n.clock_remaining_ms=s);this.publishAndSave()}registerMatDelegation(e,t=!0){const s=Gt(e.cert_cbor_hex);let n=this.verifiers.get(e.mat_id);n||(n=new D0(this.keyPair.publicKey),this.verifiers.set(e.mat_id,n));const i=s.allowed_stream_id;if(e.authority_epoch>n.activeEpoch(i)){const o=n.headHash(i);n.applyAuthorityTransfer({transfer_id:e.certificate_id,tournament_id:this.tournamentId,stream_id:i,match_id:"",reason:Yr.NormalDeviceReplacement,director_generation:e.authority_epoch,assignment_revision:s.assignment_revision,old_epoch:n.activeEpoch(i),old_last_sequence:n.headSequence(i),old_head_hash:o,new_epoch:e.authority_epoch,new_device_key_id:s.subject_key_id,new_certificate_id:s.certificate_id,seed_state_hash:o,unknown_tail_resolution:"Previous device stopped by official",old_operator_physically_stopped:!0,timers_initialized_stopped:!0,director_signature:s.root_signature},o)}n.registerCertificate(s),t&&this.protocolJournal.push({mat:structuredClone(e)})}issueMatBackupDisplayCertificate(e,t,s){const n=this.mats.get(e);if(!n||!t||!/^[a-f0-9]{64}$/i.test(s))throw new Error("A configured mat and device public key are required");return Pi({certificate_id:`display-${gs()}`,tournament_id:this.tournamentId,subject_key_id:t,subject_pubkey:ce(s),role:xt.RelayOperator,allowed_scopes:Ne.ReadPublic|Ne.RelaySignedBytes,allowed_stream_id:`mat:${e}`,assigned_mat_id:e,assignment_revision:n.authority_epoch,authority_generation:n.authority_epoch,issued_at_ms:this.now(),expires_at_ms:this.now()+4320*60*1e3,allow_in_progress_completion:!1},this.keyPair.privateKey)}getMatsideStreamHead(e){const t=this.verifiers.get(e),s=`mat:${e}`;return{sequence:t?.headSequence(s)??0,hashHex:_e(t?.headHash(s)??new Uint8Array(32))}}acceptMatsideSignedEvent(e,t=this.now()){const s=je(e),n=this.bouts.get(s.match_id),i=n&&this.mats.get(n.assigned_mat_id);if(!n||!i||s.tournament_id!==this.tournamentId||s.stream_id!==`mat:${i.mat_id}`||s.certificate_id!==i.certificate_id||s.authority_epoch!==i.authority_epoch||s.assignment_revision<1||s.assignment_revision>n.assignment_revision||!we(s.rules_hash,this.rulesHash))throw new I(R.UnauthorizedScope,"Event does not match the current tournament, mat, assignment or rules");if(this.revokedCertificateIds.has(s.certificate_id))throw new I(R.CertificateRevoked,"Matside certificate revoked");const o=Gt(i.cert_cbor_hex);if(o.assigned_mat_id!==i.mat_id||o.role!==xt.MatOperator||t+3e5<o.issued_at_ms)throw new Error("Invalid matside delegation");const a=s.payload instanceof Uint8Array?Re(s.payload):s.payload;if(!a||typeof a!="object"||Array.isArray(a)||a instanceof Uint8Array||a instanceof Map)throw new Error("Matside payload must be a CBOR map");const l=a,c=["MATCH_SCORING_ACTION","MATCH_SCORE_CORRECTION","MATCH_ENDING_ACTION","MATCH_CLOCK_TOGGLE","MATCH_PERIOD_CHOICE","MATCH_ADVANCE_PERIOD","MATCH_DISK_TOSS","MATCH_CONFIRM_RESULT","MATCH_PERIOD_EXPIRED","MATCH_UNDO_LAST_ACTION","MATCH_CLOCK_CORRECTION","MATCH_MEDICAL_DECISION","MATCH_FINALIZE_TECH_FALL","MATCH_POSITION_CHANGE"],x=c.includes(s.event_type),d=x?l.public_state:l;if(!d||typeof d!="object"||Array.isArray(d)||d instanceof Uint8Array)throw new Error("Missing signed match state");const u=x?s.event_type:l.command_type??s.event_type;if(typeof u!="string"||![...["START_BOUT_CLOCK","STOP_BOUT_CLOCK","CLOCK_STATE","SCORE_ACTION_RECORDED","TAKEDOWN_3","ESCAPE_1","REVERSAL_2","NEARFALL_2","NEARFALL_3","NEARFALL_4","STALL_WARN","PIN_FALL","CONFIRM_RESULT"],...c].includes(u)||u!==s.event_type)throw new Error("Unsupported or inconsistent matside command");const p=(P,N,y)=>{const A=d[P]??N;if(typeof A!="number"||!Number.isSafeInteger(A)||A<0||A>y)throw new Error(`Invalid matside ${P}`);return A},h=p("red_score",n.red_score,1e3),m=p("green_score",n.green_score,1e3),E=p("period",n.period_number,9),F=p("clock_remaining_ms",n.clock_remaining_ms,6e5);if(E===0||"clock_running"in d&&typeof d.clock_running!="boolean")throw new Error("Invalid clock state");const g=u==="CONFIRM_RESULT"||u==="MATCH_CONFIRM_RESULT",b=String(d.win_type??""),C=x?d.winner_corner==="RED"?n.red_athlete_id:d.winner_corner==="GREEN"?n.green_athlete_id:"":String(l.winner_athlete_id??"");g&&this.validateConfirmedResult(n,C,b,h,m);const B=this.verifiers.get(i.mat_id);if(!B)throw new Error("Mat has no registered verifier");if(!this.protocolJournal.some(P=>P.wireHex===_e(e))){if(s.assignment_revision!==n.assignment_revision)throw new Error("Refresh the bout assignment before scoring.");const P=!g&&n.lifecycle===$.Assigned&&this.matQueue(i.mat_id).every(N=>N===n||N.lifecycle<=$.Ready);if(!P&&![$.Ready,$.InProgress,$.EndedLocal,$.LocallyConfirmed].includes(n.lifecycle))throw new Error("Bout is not ready to accept matside events");(n.lifecycle===$.Ready||P)&&this.validateBoutSafetyGates(n,t)}const D=B.verifyAndAccept(s,Pt,Ne.ScoreMat|(g?Ne.ConfirmLocalResult:0),t,n.lifecycle===$.InProgress||n.lifecycle===$.EndedLocal),f={outcome:D,eventIdHex:_e(s.event_id),matchId:n.match_id};if(D===Se.DuplicateIgnored)return this.saveToStorage(),f;if(D!==Se.Applied)throw new I(R.SequenceGap,`Matside event not applied: ${D}`);if(this.protocolJournal.push({wireHex:_e(e),atMs:t}),g)n.period_number=E,n.clock_remaining_ms=F,this.recordMatsideConfirmedResult(n.match_id,C,b,h,m,s.authority_epoch,n.completed_at_ms||t);else{const P=u==="PIN_FALL"||d.bout_ended===!0,N=!!n.winner_athlete_id&&n.lifecycle===$.EndedLocal,y=P?C||(u==="PIN_FALL"?l.actor==="GREEN"?n.green_athlete_id:n.red_athlete_id:h>m?n.red_athlete_id:m>h?n.green_athlete_id:""):"",A=y?y===n.red_athlete_id?n.green_athlete_id:n.red_athlete_id:"",k=Math.abs(h-m),v=P?oe.normalizeSyncedWinType(b)||(u==="PIN_FALL"?"FALL":k>=this.rulesBundle.technical_fall_margin?"TF":k>=8?"MD":"DEC"):"";if(n.red_score=h,n.green_score=m,n.period_number=E,n.clock_remaining_ms=F,n.clock_running=typeof d.clock_running=="boolean"?d.clock_running:u!=="STOP_BOUT_CLOCK"&&u!=="PIN_FALL",n.lifecycle=P?$.EndedLocal:$.InProgress,n.winner_athlete_id=y,n.loser_athlete_id=A,n.win_type=v,n.completed_at_ms=P?n.completed_at_ms||t:0,P&&y){for(const T of[n.red_athlete_id,n.green_athlete_id]){const q=this.athletes.get(T);q&&v!=="FORFEIT"&&v!=="BYE"&&(q.last_bout_ended_ms=Math.max(q.last_bout_ended_ms,n.completed_at_ms),q.updated_at_ms=Math.max(q.updated_at_ms,n.completed_at_ms))}const M=String(d.win_type??l.ending_type??"").toUpperCase(),S=this.isWithdrawn(A)||v==="DQ"||M==="MEDICAL_FORFEIT";n.winner_next_match_id&&this.advanceParticipantToDownstream(n.winner_next_match_id,y,n.match_id),n.loser_next_match_id&&!S&&this.advanceParticipantToDownstream(n.loser_next_match_id,A,n.match_id),this.resolveCompletedByesForBracket(n.bracket_id,n.completed_at_ms),this.advanceScratches(n.completed_at_ms);for(let T=1;T<=this.matCount;T++)this.promoteMatReadyBout(T,n.completed_at_ms)}else N&&!P&&this.revertProvisionalDownstreamAdvancement(n.match_id,t);this.publishAndSave()}return f}submitOwVote(e){if(e.tournamentId!==this.tournamentId||!/^[a-zA-Z0-9_-]{16,128}$/.test(e.voterId)||!this.athletes.has(e.athleteId))throw new Error("Invalid tournament, voter identifier or athlete");return this.owVotes.get(e.voterId)!==e.athleteId&&(this.owVotes.set(e.voterId,e.athleteId),this.publishAndSave()),this.getOwVoteTallies()}getOwVoteTallies(){if(this.owVotes.size===0&&Object.keys(this.syncedOwVoteTallies).length>0)return{...this.syncedOwVoteTallies};const e={};for(const t of this.owVotes.values())e[t]=(e[t]??0)+1;return e}signRelayReceipt(e,t,s){const n={requestId:e,ok:t,result:s};return{...n,signatureHex:_e(qe(Fe,ve(n),this.keyPair.privateKey))}}registerAthlete(e){const t=e.name.trim();if(!t)throw new I(R.InvalidArgument,"Athlete name is required");const s=(e.divisionId??"VARSITY").trim().toUpperCase()||"VARSITY",n=e.athleteId?.trim()||`ATH-${gs()}`;if(this.athletes.has(n))throw new I(R.InvalidArgument,"Athlete ID is already registered");if(!e.weightClassId.trim()||this.isBracketFrozen(e.weightClassId,s))throw new I(R.InvalidArgument,"Select an open weight class before adding wrestlers");const i=_e(crypto.getRandomValues(new Uint8Array(16))),o=(e.flowrestlingId??"").trim(),a={athlete_id:n,opaque_pass_token:`PASS-${e.weightClassId}-${i}`,public_display_name:t,team_id:e.teamId.trim().toUpperCase()||"IND",team_name:e.teamName.trim()||"Independent",division_id:s,weight_class_id:e.weightClassId,seed_rank:Math.max(1,Math.floor(e.seedRank||1)),flowrestling_id:o,check_in_stage:Q.Arrived,weigh_in_eligible:!1,medically_cleared:!1,matches_wrestled_today:0,prior_day_matches:Math.max(0,Math.floor(e.priorDayMatches??0)),last_bout_ended_ms:0,updated_at_ms:this.now()};return this.athletes.set(n,a),this.publishAndSave(),a}static parseRosterCsv(e,t=","){const s=[];let n=[],i="",o=!1,a=!1;const l=()=>{throw new I(R.InvalidArgument,"Invalid quoted field in roster CSV")};for(let c=0;c<=e.length;c++){const x=c===e.length?`
`:e[c];if(!o&&!n.length&&!i.trim()&&x==="#"){for(;c<e.length&&e[c]!==`
`;)c++;i="";continue}o?(c===e.length&&l(),x==='"'?e[c+1]==='"'?(i+='"',c++):(o=!1,a=!0):i+=x):x===t||x===`
`||x==="\r"?(n.push(i.trim()),i="",a=!1,x!==t&&(n.some(d=>d.length>0)&&s.push(n),n=[],x==="\r"&&e[c+1]===`
`&&c++)):x==='"'?((i.trim()||a)&&l(),i="",o=!0):(a&&x.trim()&&l(),i+=x)}return s}static normalizeCsvHeaderName(e){return e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}static deriveTeamCodeFromSchool(e){const t=e.trim();if(!t)return"";const s=t.replace(/[^A-Za-z0-9\s]/g," ").split(/\s+/).filter(Boolean);if(s.length===1)return s[0].slice(0,6).toUpperCase();const n=s.map(i=>i[0].toUpperCase()).join("");return(n.length>=2?n.slice(0,6):t.replace(/[^A-Za-z0-9]/g,"").slice(0,6)).toUpperCase()}static deriveAthleteIdFromFields(e,t,s,n){const i=n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().toUpperCase().replace(/[^A-Z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,28),o=s.replace(/[^A-Z0-9]+/g,"").slice(0,8)||"IND",a=(e||"VARSITY").replace(/[^A-Z0-9]+/g,"").slice(0,8),l=t.replace(/[^A-Z0-9]+/g,"").slice(0,6);return`ATH-${a}-${l}-${o}-${i||"WRESTLER"}`}static escapeCsvCell(e){const t=e==null?"":String(e);return/[",\r\n]/.test(t)||t.startsWith("#")?`"${t.replace(/"/g,'""')}"`:t}exportRosterTemplateCsv(){return["# OpenMat Tournament Roster & Full Backup Template","# Fill out one row per wrestler. Lines starting with '#' are ignored on spreadsheet import.","#","# COLUMN GUIDE (You can use this full template OR a simple coach spreadsheet with columns:","#   first_name, last_name, school_name, team_code, division, weight_class_lbs, actual_weight_lbs, seed_rank, grade, flowrestling_id):","#   - first_name / last_name (or public_display_name): Wrestler First & Last Name","#   - school_name / team_name: High School or Club Name","#   - team_id / team_code: Short 2-6 letter school/team abbreviation","#   - division_id: VARSITY, JV, BOYS, GIRLS, U16, U18, or NOVICE (defaults to VARSITY)","#   - weight_class_id / weight_lbs: NFHS Weight Class in lbs (106, 113, 120, 126, 132, 138, 144, 150, 157, 165, 175, 190, 215, 285)","#   - actual_weight_lbs: Measured scale weight in lbs (for example 131.4)","#   - seed_rank: Seeding rank in weight class (1 = #1 seed, 2 = #2 seed)","#   - check_in_stage / weigh_in_eligible / medically_cleared / medical_decision / bracket_frozen / bracket_format:","#     Full tournament state columns for restoring a saved backup CSV.","athlete_id,public_display_name,team_id,team_name,division_id,weight_class_id,seed_rank,flowrestling_id,first_name,last_name,school_name,weight_lbs,actual_weight_lbs,grade,check_in_stage,weigh_in_eligible,medically_cleared,medical_decision,medical_reviewer,scale_station_id,scale_id,bracket_frozen,bracket_format,opaque_pass_token"].join(`
`)+`
`}exportTournamentBackupCsv(){const e={version:1,tournament_id:this.tournamentId,tournament_name:this.tournamentName,event_date:this.eventDate,venue:this.venue,rules_version:this.rulesVersion,mat_count:this.matCount,growth_allowance_tenths:this.growthAllowanceTenths,consecutive_day_allowance_tenths:this.consecutiveDayAllowanceTenths,bracket_frozen_by_class:Array.from(this.bracketFrozenByClass.entries()),bouts:Array.from(this.bouts.values())},t=new Map;for(const i of this.bouts.values()){const a=`${(i.division_id||"VARSITY").toUpperCase()}:${i.weight_class_id}`;if(!t.has(a)){const c=[J.DoubleElimCrossover,J.TrueSecondChallenge,J.RoundRobinPool,J.PoolToBracket,J.TeamDual].find(x=>i.bracket_id.endsWith(x));t.set(a,c??J.DoubleElimCrossover)}}const s=["# OpenMat Full Tournament Backup & Disaster Recovery CSV (v1)","# Re-importing this CSV into OpenMat Officials Console fully rebuilds all wrestlers, seeds, scale weigh-ins, skin/medical checks, and generated brackets.",`#openmat_tournament_backup_v1:${JSON.stringify(e)}`,`# OPENMAT_SELF_REG_JSON: ${JSON.stringify({registrations:[...this.pendingSelfRegistrations.values()],dispositions:[...this.selfRegistrationDispositions.entries()]})}`,"athlete_id,public_display_name,team_id,team_name,division_id,weight_class_id,seed_rank,flowrestling_id,first_name,last_name,school_name,weight_lbs,actual_weight_lbs,grade,check_in_stage,weigh_in_eligible,medically_cleared,medical_decision,medical_reviewer,scale_station_id,scale_id,bracket_frozen,bracket_format,opaque_pass_token"],n=Array.from(this.athletes.values()).sort((i,o)=>(i.division_id||"VARSITY").localeCompare(o.division_id||"VARSITY")||Number(i.weight_class_id)-Number(o.weight_class_id)||i.seed_rank-o.seed_rank||i.athlete_id.localeCompare(o.athlete_id));for(const i of n){const o=(i.division_id||"VARSITY").toUpperCase(),a=i.weight_class_id,l=i.public_display_name.trim().split(/\s+/),c=l[0]??"",x=l.slice(1).join(" "),d=this.privateWeighIns.get(i.athlete_id),u=d?(d.measured_weight_tenths/10).toFixed(1):"",_=d?.station_id??"",p=d?.scale_id??"",h=this.privateMedicals.get(i.athlete_id),m=h?.decision??(i.medically_cleared?"CLEARED":""),E=h?.reviewer_id??(i.medically_cleared?"Head Official":""),F=this.isBracketFrozen(a,o),g=t.get(`${o}:${a}`)??J.DoubleElimCrossover,b=(Te[i.check_in_stage]??String(i.check_in_stage)).toUpperCase().replace(/[^A-Z0-9]+/g,"_"),C=[i.athlete_id,i.public_display_name,i.team_id,i.team_name,o,a,i.seed_rank,i.flowrestling_id??"",c,x,i.team_name,a,u,"",b,i.weigh_in_eligible,i.medically_cleared,m,E,_,p,F,g,i.opaque_pass_token].map(B=>oe.escapeCsvCell(B));s.push(C.join(","))}return s.join(`
`)+`
`}exportCoachRosterTemplateCsv(e=!0){const t=["# OpenMat Coach & School Spreadsheet Roster Template","# Edit in Excel, Google Sheets, or Numbers and save as CSV. Lines starting with '#' are ignored.","# Channel League School Codes: SBHS, DPHS, SMHS, VHS, BHS, OHS, PHS, RMHS (Division: NOVICE, JV, VARSITY, GIRLS)","first_name,last_name,school_name,team_code,division,weight_class_lbs,actual_weight_lbs,seed_rank,grade,flowrestling_id,athlete_id"];return e&&t.push("Jordan,Rivera,Santa Barbara High School,SBHS,VARSITY,132,131.4,1,12,FLO-88413201,ATH-SBHS-132-01","Marcus,Vance,San Marcos High School,SMHS,VARSITY,132,131.8,2,11,FLO-88413202,ATH-SMHS-132-02","Mateo,Delgado,Dos Pueblos High School,DPHS,VARSITY,132,130.9,3,12,,ATH-DPHS-132-03","Liam,O'Connor,Ventura High School,VHS,VARSITY,132,132.0,4,10,,ATH-VHS-132-04","Carlos,Mendoza,Buena High School,BHS,VARSITY,138,137.4,1,12,FLO-88413801,ATH-BHS-138-01","Noah,Takahashi,Rio Mesa High School,RMHS,VARSITY,138,137.8,2,11,,ATH-RMHS-138-02","Elena,Rostova,Santa Barbara High School,SBHS,GIRLS,120,119.2,1,11,FLO-88412001,ATH-SBHS-G120-01","Sofia,Morales,Oxnard High School,OHS,GIRLS,120,118.6,2,12,,ATH-OHS-G120-02"),t.join(`
`)+`
`}exportDemoTemplateCsv(e=ie.defaultDivision){return Gl(e)}exportEmergencyFallbackHtml(){return rc(tr(this,this.now()))}exportEmergencyFallbackXlsx(){return ec(tr(this,this.now()))}parsePastedRoster(e){const s=e.text.replace(/^\uFEFF/,"").split(/\r\n?|\n/),n=h=>h.trim()&&!h.trimStart().startsWith("#"),i=s.findIndex(n);if(i<0)return[];const o=h=>{const m=h.replace(/"(?:[^"]|"")*"/g,"");return m.includes("	")?"	":m.includes(";")?";":","},a=s[i],l=o(a),[c=[]]=oe.parseRosterCsv(a,l),x=c.map(oe.normalizeCsvHeaderName),d=["name","athlete_name","public_display_name","full_name","wrestler","wrestler_name","first_name","firstname","first"],u=["weight","weight_class","weight_class_id","weight_class_lbs","weight_lbs","wt_class","wt"];if(x.some(h=>d.includes(h))&&x.some(h=>u.includes(h)))return oe.parseRosterCsv(s.slice(i).join(`
`),l).filter(h=>!h[0]?.startsWith("#"));const _=new Set([...this.athletes.values()].flatMap(h=>[h.team_name.toLowerCase(),h.team_id.toLowerCase()])),p=[["name","school","division","weight","seed"]];for(const[h,m]of s.entries()){if(!n(m))continue;const E=m.replace(/^\s*(?:[-*•]|\d+[.)])\s+/,""),F=o(E),[g=[]]=oe.parseRosterCsv(E,F),b=g.findIndex(A=>/^\d{2,3}(?:\.\d+)?(?:\s*(?:lbs?|pounds?)\.?)?$/i.test(A));let C="",B="";const w=g.filter((A,k)=>{if(!A||k===b)return!1;if(/^(VARSITY|JV|NOVICE|GIRLS|FROSH)$/i.test(A))return C=A,!1;const v=/^(?:#\s*|seed\s+)?([1-9]|1[0-6])$/i.exec(A);return k>b&&v?(B=v[1],!1):!0}),[D="",f="",P=""]=w;if(b<0||!D||w.length>3)throw new Error(`Check the name, school, and weight on roster row ${h+1}`);let N=D,y=f;P?(N=`${D} ${f}`,y=P):e.defaultTeamName?.trim()&&f&&[D,f].every(A=>!/\s/.test(A)&&!_.has(A.toLowerCase()))&&(N=F===","?`${f} ${D}`:`${D} ${f}`,y=""),p.push([N,y,C,g[b],B])}return p}previewPastedRosterText(e){const{importedCount:t,skippedDuplicates:s}=this.importRoster("",e,!0);return{importedCount:t,skippedDuplicates:s}}importPastedRosterText(e){return this.importRoster("",e)}importRosterCsv(e){return this.importRoster(e)}importRoster(e,t,s=!1){const n=e.replace(/^\uFEFF/,"");let i=null,o=null;for(const B of n.split(/\r?\n/)){const w=B.trim();if(w.startsWith("# OPENMAT_SELF_REG_JSON:"))try{o=JSON.parse(w.slice(24).trim())}catch{}if(w.startsWith("#openmat_tournament_backup_v1:"))try{i=JSON.parse(w.slice(30))}catch{}}i&&this.assertDrawNotStarted();const a=t?this.parsePastedRoster(t):oe.parseRosterCsv(n);let l=null;const c=[],x=[],d=[],u=[],_=new Map,p=new Map,h=new Map;let m=0;const E=new Set(["athlete_id","id","athleteid","public_display_name","name","athlete_name","full_name","wrestler","wrestler_name","first_name","firstname","first","last_name","lastname","last","team_id","team_code","team","school_code","team_name","teamname","school_name","school","high_school","club","division_id","division","div","weight_class_id","weight_class_lbs","weight_class","weight_lbs","weight","wt_class","wt","actual_weight_lbs","actual_weight","scale_weight","measured_weight_lbs","seed_rank","seed","grade","year","flowrestling_id","flo_id","check_in_stage","weigh_in_eligible","medically_cleared","medical_decision","medical_reviewer","scale_station_id","scale_id","bracket_frozen","bracket_format","opaque_pass_token"]),F=new Set(Yt),g=B=>{const w=B.toUpperCase();return w==="FROSH"?"JV":w};for(const[B,w]of a.entries()){if(B===0){const ee=w.map(Ie=>oe.normalizeCsvHeaderName(Ie)),he=ee[0]??"",ae=he==="athlete_id"||he==="id"||he==="athleteid",De=ee.filter(Ie=>E.has(Ie)).length;if(ae||De>=2){const Ie=new Map;ee.forEach((Et,bt)=>{Et&&!Ie.has(Et)&&Ie.set(Et,bt)}),l=Ie;continue}}let D="",f="",P="",N="",y="VARSITY",A="",k="",v="",M="",S=!1;const T=(...ee)=>{if(!l)return"";for(const he of ee){const ae=l.get(he);if(ae!==void 0&&ae<w.length){const De=(w[ae]??"").trim();if(De)return De}}return""};if(l){const ee=T("first_name","firstname","first"),he=T("last_name","lastname","last");f=T("public_display_name","full_name","name","athlete_name","wrestler","wrestler_name")||[ee,he].filter(Boolean).join(" ").trim();const De=T("school_name","school","high_school","team_name","teamname","club"),Ie=T("team_code","team_id","team","school_code");N=De||Ie,P=(Ie||oe.deriveTeamCodeFromSchool(N)).toUpperCase(),N||(N=P),y=g(T("division_id","division","div")||t?.defaultDivisionId?.trim()||"VARSITY");const Et=T("weight_class_id","weight_class_lbs","weight_class","wt_class");if(A=Et||T("weight_lbs","weight","wt"),S=!!t||!Et,M=T("actual_weight_lbs","actual_weight","scale_weight","measured_weight_lbs"),k=T("seed_rank","seed"),v=T("flowrestling_id","flo_id"),D=T("athlete_id","id","athleteid"),t){const bt=/^([^,]+),\s*([^,]+)$/.exec(f);bt&&!/^(?:jr\.?|sr\.?|ii|iii|iv)$/i.test(bt[2].trim())&&(f=`${bt[2].trim()} ${bt[1].trim()}`);const Js=t.defaultTeamName?.trim()??"";N=De||Js||Ie||"Unattached";const Ao=!De||!Js||De.toLowerCase()===Js.toLowerCase()?t.defaultTeamId?.trim():"";P=(Ie||Ao||oe.deriveTeamCodeFromSchool(N)).toUpperCase()}}else{if(w.length<5)throw new I(R.InvalidArgument,"Roster CSV row requires at least 5 columns (athlete_id,public_display_name,team_id,division_id,weight_class_id)");D=(w[0]??"").trim(),f=(w[1]??"").trim(),P=(w[2]??"").trim().toUpperCase();const ee=g(w[3]||"VARSITY"),he=g(w[4]||"VARSITY"),ae=w.length>=6&&!/^\d/.test(he)&&(F.has(he)||!F.has(ee));N=ae&&(w[3]??"").trim()||P,y=ae?he:ee,A=(ae?w[5]:w[4])??"",k=((ae?w[6]:w[5])??"").trim(),v=((ae?w[7]:w[6])??"").trim()}const q=B+1;if(!t&&!F.has(y))throw new I(R.InvalidArgument,`Select a supported division in CSV record ${q}.`);A=A.replace(/\s*(lbs?|pounds?)\.?$/i,"").trim().replace(/^(\d+)\.0+$/,"$1");const z=mt(y);if(S&&!z.includes(A)){const ee=/^\d+(?:\.\d+)?$/.test(A)?Number(A):NaN;ee>=50&&(M||=A,A=z.find(he=>Number(he)>=ee)??"")}if(!t&&!z.includes(A))throw new I(R.InvalidArgument,`Enter a valid weight class for ${y} in CSV record ${q}.`);if(!l&&!D||!f||!P||!A)throw new I(R.InvalidArgument,"Roster CSV row contains empty required identifier field");D||=oe.deriveAthleteIdFromFields(y,A,P,f),k=k.replace(/^(?:#\s*|seed\s+)/i,"");let L=0;if(k){const ee=Number(k);if(!Number.isInteger(ee)||ee<0)throw new I(R.InvalidArgument,"Invalid seed_rank in roster CSV");L=ee}const W=t?"":T("check_in_stage","stage","status").toUpperCase(),V=T("weigh_in_eligible","weigh_in_passed").toLowerCase(),H=T("medically_cleared","skin_check_cleared","medical_cleared").toLowerCase(),O=T("medical_decision").toUpperCase(),j=T("medical_reviewer","reviewer_id"),Y=T("scale_station_id","station_id"),K=T("scale_id"),te=T("bracket_frozen").toLowerCase(),re=T("bracket_format").toUpperCase(),ue=T("opaque_pass_token","pass_token"),me={1:Q.Expected,EXPECTED:Q.Expected,2:Q.Arrived,ARRIVED:Q.Arrived,3:Q.WeighInPending,WEIGH_IN_PENDING:Q.WeighInPending,"WEIGH-IN PENDING":Q.WeighInPending,4:Q.MedicalPending,MEDICAL_PENDING:Q.MedicalPending,"MEDICAL PENDING":Q.MedicalPending,5:Q.Eligible,ELIGIBLE:Q.Eligible,6:Q.Withdrawn,WITHDRAWN:Q.Withdrawn,7:Q.Scratched,SCRATCHED:Q.Scratched}[W],ge=!t&&!!(i||W||V||H||O||te);if(h.has(D)){const ee=h.get(D);if(ee.team_id!==P||(ee.division_id||"VARSITY").toUpperCase()!==y||ee.weight_class_id!==A||ee.public_display_name!==f||ee.flowrestling_id&&v&&ee.flowrestling_id!==v)throw new I(R.InvalidArgument,`Conflicting duplicate athlete_id in roster CSV: ${D}`);m++;continue}const se=this.athletes.get(D);if(se&&!ge){if(se.team_id!==P||(se.division_id||"VARSITY").toUpperCase()!==y||se.weight_class_id!==A||se.public_display_name!==f||se.flowrestling_id&&v&&se.flowrestling_id!==v)throw new I(R.InvalidArgument,`Conflicting duplicate athlete_id in roster CSV: ${D}`);!se.flowrestling_id&&v&&_.set(se,v),m++;continue}if(!ge&&this.isBracketFrozen(A,y))throw new I(R.InvalidArgument,"Unfreeze the bracket before importing wrestlers");if(ge&&(se||this.isBracketFrozen(A,y))&&this.assertDrawNotStarted(),M){const ee=M.replace(/\s*(lbs?|pounds?)\.?$/i,"").trim(),he=Number(ee),ae=Math.round(he*10);if(!Number.isFinite(he)||ae<500||ae>3500)throw new I(R.InvalidArgument,"Invalid actual_weight_lbs in roster CSV (must be between 50.0 and 350.0 lbs)");x.push({athleteId:D,stationId:t?.stationId?.trim()||Y||"CSV-IMPORT",scaleId:K||"CSV-SCALE",measuredWeightTenths:ae})}else if(t?t.autoClearEligibility:V==="true"||V==="1"||V==="yes"||me===Q.Eligible){const ee=Math.max(550,Math.min(3450,Number(A)*10||1320));x.push({athleteId:D,stationId:t?.stationId?.trim()||Y||"CSV-RESTORE",scaleId:K||"CSV-SCALE",measuredWeightTenths:ee})}const Ee=new Set(["CLEARED","CLEARED_PHYSICIAN_FORM","MEDICAL_HOLD_DISQUALIFIED","GROOMING_HOLD"]);if(t?.autoClearEligibility?d.push({athleteId:D,reviewerId:t.reviewerId?.trim()||"Head Official",decision:"CLEARED"}):!t&&Ee.has(O)?d.push({athleteId:D,reviewerId:j||"CSV-RESTORE",decision:O}):!t&&(H==="true"||H==="1"||H==="yes"||me===Q.Eligible)&&d.push({athleteId:D,reviewerId:j||"CSV-RESTORE",decision:"CLEARED"}),me!==void 0&&u.push({athleteId:D,stage:me}),!t&&(te==="true"||te==="1"||te==="yes")){const he=new Set(Object.values(J)).has(re)?re:J.DoubleElimCrossover;p.set(`${y}:${A}`,{divisionId:y,weightClassId:A,format:he})}const Qe=s?"":_e(crypto.getRandomValues(new Uint8Array(16))),ne={athlete_id:D,opaque_pass_token:!t&&ue||se?.opaque_pass_token||`PASS-${A}-${Qe}`,public_display_name:f,team_id:P,team_name:N,division_id:y,weight_class_id:A,seed_rank:L,flowrestling_id:v||se?.flowrestling_id||"",check_in_stage:Q.Arrived,weigh_in_eligible:!1,medically_cleared:!1,matches_wrestled_today:se?.matches_wrestled_today??0,prior_day_matches:se?.prior_day_matches??0,last_bout_ended_ms:se?.last_bout_ended_ms??0,updated_at_ms:this.now()};h.set(D,ne),c.push(ne)}const b=new Map;for(const B of this.athletes.values()){const w=`${(B.division_id||"VARSITY").toUpperCase()}:${B.weight_class_id}`;B.seed_rank>0&&b.set(w,Math.max(b.get(w)??0,B.seed_rank))}for(const B of c){const w=`${(B.division_id||"VARSITY").toUpperCase()}:${B.weight_class_id}`;B.seed_rank>0&&b.set(w,Math.max(b.get(w)??0,B.seed_rank))}for(const B of c)if(B.seed_rank<=0){const w=`${(B.division_id||"VARSITY").toUpperCase()}:${B.weight_class_id}`,D=b.get(w)??0;D>0?(B.seed_rank=D+1,b.set(w,B.seed_rank)):B.seed_rank=1}if(s)return{importedCount:c.length,skippedDuplicates:m,athletes:[]};p.size&&this.assertDrawNotStarted();for(const[B,w]of _)B.flowrestling_id=w;const C=this.isSeeding;this.isSeeding=!0;try{if(o){for(const B of o.registrations??[])try{const w=yn(B,this.tournamentId);this.pendingSelfRegistrations.set(w.registration_id,{...w,received_at_ms:B.received_at_ms??this.now(),source:B.source??"NETWORK_FORM",checked_in_athlete_id:B.checked_in_athlete_id,checked_in_at_ms:B.checked_in_at_ms})}catch{}for(const[B,w]of o.dispositions??[])Lt(B)&&["APPROVED","DISMISSED","PENDING"].includes(w.status)&&this.selfRegistrationDispositions.set(B,w)}i&&(i.tournament_id&&(this.tournamentId=i.tournament_id),i.tournament_name&&(this.tournamentName=i.tournament_name),i.event_date&&(this.eventDate=i.event_date),i.venue&&(this.venue=i.venue),i.rules_version&&(this.rulesVersion=i.rules_version),typeof i.growth_allowance_tenths=="number"&&(this.growthAllowanceTenths=i.growth_allowance_tenths),typeof i.consecutive_day_allowance_tenths=="number"&&(this.consecutiveDayAllowanceTenths=i.consecutive_day_allowance_tenths),typeof i.mat_count=="number"&&i.mat_count>=1&&i.mat_count<=Ye&&this.configureMatCount(i.mat_count));for(const B of c)this.athletes.set(B.athlete_id,B);for(const B of x)this.athletes.has(B.athleteId)&&this.recordScaleWeighIn({athleteId:B.athleteId,stationId:B.stationId,scaleId:B.scaleId,measuredWeightTenths:B.measuredWeightTenths});for(const B of d)this.athletes.has(B.athleteId)&&this.recordMedicalDecision({athleteId:B.athleteId,reviewerId:B.reviewerId,reviewerRole:"Physician",decision:B.decision,privateClinicalNotes:""});for(const B of u){const w=this.athletes.get(B.athleteId);w&&(w.check_in_stage=B.stage,w.updated_at_ms=this.now())}if(p.size>0)for(const B of p.values())this.generateBracketForClass(B.weightClassId,B.format,B.divisionId);if(i?.bouts&&Array.isArray(i.bouts)&&i.bouts.length>0&&i.bouts.every(w=>(!w.red_athlete_id||this.athletes.has(w.red_athlete_id))&&(!w.green_athlete_id||this.athletes.has(w.green_athlete_id)))){this.bouts=new Map(i.bouts.map(f=>[f.match_id,structuredClone(f)])),this.nextBoutNumber=1+Math.max(100,...Array.from(this.bouts.values()).map(f=>f.bout_number||100)),Array.isArray(i.bracket_frozen_by_class)&&(this.bracketFrozenByClass=new Map(i.bracket_frozen_by_class));const w=new Map,D=new Map;for(const f of this.bouts.values()){if(f.is_bye||!le(f))continue;const P=(f.win_type||"").toUpperCase();if(!(P==="FORFEIT"||P==="BYE"))for(const N of[f.red_athlete_id,f.green_athlete_id]){if(!N)continue;w.set(N,(w.get(N)??0)+1);const y=f.completed_at_ms||0;y>(D.get(N)??0)&&D.set(N,y)}}for(const[f,P]of this.athletes.entries())P.matches_wrestled_today=w.get(f)??0,P.last_bout_ended_ms=D.get(f)??0}}finally{this.isSeeding=C}return(c.length>0||_.size>0||x.length>0||d.length>0||p.size>0||o||i)&&this.publishAndSave(),{importedCount:c.length,skippedDuplicates:m,rebuiltBracketClasses:p.size,athletes:c}}hasFailedWeighInOrHold(e){const t=this.privateMedicals.get(e)?.decision;return this.privateWeighIns.get(e)?.passed===!1||t!==void 0&&t!=="CLEARED"&&t!=="CLEARED_PHYSICIAN_FORM"}canBatchClearRosterEligibility(e){return(!e.weigh_in_eligible||!e.medically_cleared)&&!this.isWithdrawn(e.athlete_id)&&!this.hasFailedWeighInOrHold(e.athlete_id)}batchClearRosterEligibility(e){const t=(e?.divisionId??"").trim().toUpperCase(),s=(e?.weightClassId??"").trim(),n=e?.athleteIds&&new Set(e.athleteIds),i=(e?.reviewerId??"").trim()||"Head Official",o=(e?.stationId??"").trim()||"STATION-1";let a=0,l=0;const c=this.isSeeding;this.isSeeding=!0;try{for(const x of this.athletes.values())if(!(n&&!n.has(x.athlete_id))&&!(t&&t!=="ALL"&&(x.division_id||"VARSITY").toUpperCase()!==t)&&!(s&&s!=="ALL"&&x.weight_class_id!==s)){if(!this.canBatchClearRosterEligibility(x)){this.hasFailedWeighInOrHold(x.athlete_id)&&l++;continue}if(!x.weigh_in_eligible){const d=this.privateWeighIns.get(x.athlete_id)?.measured_weight_tenths??Math.max(550,Math.min(3450,Number(x.weight_class_id)*10||1320));this.recordScaleWeighIn({athleteId:x.athlete_id,stationId:o,scaleId:"SCALE-BATCH",measuredWeightTenths:d})}x.medically_cleared||this.recordMedicalDecision({athleteId:x.athlete_id,reviewerId:i,reviewerRole:"Physician",decision:"CLEARED",privateClinicalNotes:""}),a++}}finally{this.isSeeding=c}return a>0&&this.publishAndSave(),{clearedCount:a,skippedHoldOrFailedCount:l}}lookupByOpaquePassToken(e){const t=e.trim().toUpperCase();for(const s of this.athletes.values())if(s.opaque_pass_token.toUpperCase()===t||s.athlete_id.toUpperCase()===t)return{found:!0,athlete:s,impliesEligibilityAttestation:!1};return{found:!1,impliesEligibilityAttestation:!1}}stageSelfRegistration(e,t="NETWORK_FORM",s=!0){const n=yn(e,this.tournamentId,this.now());if(n.tournament_id!==this.tournamentId)throw new Error("This pass belongs to another tournament");const i=Cs(n.registration_id),o=this.selfRegistrationDispositions.get(n.registration_id);if(o?.status==="DISMISSED"&&n.revision<=o.revision&&t!=="QR_SCAN"){const u=this.pendingSelfRegistrations.get(n.registration_id);if(u)return{entry:u};const _={...n,received_at_ms:this.now(),source:t};return this.pendingSelfRegistrations.set(n.registration_id,_),s&&this.saveToStorage(),{entry:_}}const a=t==="QR_SCAN"&&o?.status==="DISMISSED";a&&(this.selfRegistrationDispositions.set(n.registration_id,{status:"PENDING",revision:Math.max(n.revision,o.revision),updated_at_ms:Math.max(this.now(),o.updated_at_ms+1),synced:!1}),s&&this.postSelfRegistrationDisposition(n.registration_id));const l=this.pendingSelfRegistrations.get(n.registration_id),c=this.athletes.get(o?.athlete_id??l?.checked_in_athlete_id??i);if(c){const u={...l??n,received_at_ms:l?.received_at_ms??this.now(),source:l?.source??t,checked_in_athlete_id:c.athlete_id,checked_in_at_ms:l?.checked_in_at_ms??c.updated_at_ms};return(!l||!l.checked_in_athlete_id)&&(this.pendingSelfRegistrations.set(n.registration_id,u),s&&this.saveToStorage()),{entry:u,alreadyCheckedInAthlete:c}}if(!l&&t!=="QR_SCAN"&&this.listUncheckedSelfRegistrations().length>=Hl)throw new I(R.InvalidArgument,"Pending self-registration staging queue is full");if(!(!l||n.revision>l.revision||n.revision===l.revision&&(n.updated_at_ms>l.updated_at_ms||n.updated_at_ms===l.updated_at_ms&&l.source==="NETWORK_FORM"&&Object.keys(n).some(u=>u!=="submitted_at_ms"&&n[u]!==l[u]))))return a&&(l.source="QR_SCAN"),a&&s&&(this.saveToStorage(),this.onStateChanged?.()),{entry:l};const d={...n,received_at_ms:l?.received_at_ms??this.now(),source:t};return this.pendingSelfRegistrations.set(n.registration_id,d),s&&(this.saveToStorage(),this.onStateChanged?.()),{entry:d}}listUncheckedSelfRegistrations(e){const t=(e?.search??"").trim().toLowerCase(),s=(e?.divisionId??"").trim().toUpperCase(),n=[];for(const i of this.pendingSelfRegistrations.values()){const o=this.selfRegistrationDispositions.get(i.registration_id);if(o?.status==="DISMISSED"&&i.revision<=o.revision)continue;const a=`ATH-${i.registration_id}`;o?.status==="APPROVED"&&this.athletes.has(o.athlete_id??a)||i.checked_in_athlete_id&&this.athletes.has(i.checked_in_athlete_id)||this.athletes.has(a)||s&&s!=="ALL"&&i.division_id.toUpperCase()!==s||t&&!(i.public_display_name.toLowerCase().includes(t)||i.first_name.toLowerCase().includes(t)||i.last_name.toLowerCase().includes(t)||i.team_name.toLowerCase().includes(t)||i.team_id.toLowerCase().includes(t)||i.weight_class_id.toLowerCase().includes(t)||i.registration_id.toLowerCase().includes(t))||n.push(i)}return n.sort((i,o)=>(i.registration_id===this.selectedPendingSelfRegId?-1:0)-(o.registration_id===this.selectedPendingSelfRegId?-1:0)||o.updated_at_ms-i.updated_at_ms||i.public_display_name.localeCompare(o.public_display_name))}scanOrLookupWrestlerQrOrToken(e){const t=e.trim();if(!t)return{kind:"NOT_FOUND",reason:"Empty pass or QR code"};const s=vn(t,this.tournamentId);if(s.valid){if(s.record){let i;try{i=this.stageSelfRegistration(s.record,"QR_SCAN")}catch(o){return{kind:"NOT_FOUND",reason:o instanceof Error?o.message:String(o)}}return i.alreadyCheckedInAthlete?{kind:"ATHLETE",athlete:i.alreadyCheckedInAthlete,pendingEntry:i.entry,reason:`Already checked in: ${i.alreadyCheckedInAthlete.public_display_name}`}:(this.selectedPendingSelfRegId=i.entry.registration_id,this.onStateChanged?.(),{kind:"PENDING_SELF_REG",pendingEntry:i.entry,reason:`Staged self-registration for ${i.entry.public_display_name} (${i.entry.team_name}, ${i.entry.weight_class_id} lbs) — confirm weigh-in to check in`})}if(s.registrationIdOnly){if(s.tournamentId&&s.tournamentId!==this.tournamentId)return{kind:"NOT_FOUND",reason:"This pass belongs to another tournament"};const i=s.registrationIdOnly,o=this.athletes.get(this.selfRegistrationDispositions.get(i)?.athlete_id??Cs(i));if(o)return{kind:"ATHLETE",athlete:o,reason:`Already checked in: ${o.public_display_name}`};const a=this.pendingSelfRegistrations.get(i);if(a){const l=this.stageSelfRegistration(a,"QR_SCAN");return this.selectedPendingSelfRegId=l.entry.registration_id,this.onStateChanged?.(),{kind:"PENDING_SELF_REG",pendingEntry:l.entry,reason:`Selected pending self-registration: ${l.entry.public_display_name} (${l.entry.weight_class_id} lbs)`}}}}const n=this.lookupByOpaquePassToken(t);return n.found&&n.athlete?{kind:"ATHLETE",athlete:n.athlete,reason:`Found registered wrestler: ${n.athlete.public_display_name}`}:{kind:"NOT_FOUND",reason:`No wrestler or self-registration found for "${t}"`}}approveSelfRegistration(e){const t=e.registrationId.trim().toUpperCase();if(!Lt(t))throw new I(R.InvalidArgument,`Invalid self-registration ID: ${e.registrationId}`);const s=this.pendingSelfRegistrations.get(t);if(!s)throw new I(R.InvalidArgument,`Unknown self-registration: ${t}`);if(e.checkInAndClear&&(e.measuredWeightTenths===void 0||!Number.isInteger(e.measuredWeightTenths)||e.measuredWeightTenths<500||e.measuredWeightTenths>3500))throw new I(R.InvalidArgument,"Enter a scale weight between 50.0 and 350.0 lb");const n=Cs(t);let i=this.findSelfRegistrationAthlete(s);const o=e.reassignWeightClassId||i?.weight_class_id||s.weight_class_id;return this.validateWeightClass(i?.division_id??s.division_id,o,i?.weight_class_id),i||(i=this.registerAthlete({athleteId:n,name:s.public_display_name,teamId:s.team_id,teamName:s.team_name,divisionId:s.division_id,weightClassId:o,seedRank:e.seedRank??1})),e.checkInAndClear?i=this.completeUnifiedCheckIn({athleteId:i.athlete_id,measuredWeightTenths:e.measuredWeightTenths,reassignWeightClassId:o!==i.weight_class_id?o:void 0,skinDecision:e.skinDecision??"CLEARED",stationId:e.stationId,scaleId:e.scaleId,reviewerId:e.reviewerId,reviewerRole:e.reviewerRole,privateClinicalNotes:e.privateClinicalNotes}):i.weight_class_id!==o&&(i.weight_class_id=o,i.updated_at_ms=this.now(),this.publishAndSave()),s.checked_in_athlete_id=i.athlete_id,s.checked_in_at_ms=this.now(),this.selfRegistrationDispositions.set(t,{status:"APPROVED",athlete_id:i.athlete_id,revision:s.revision,updated_at_ms:Math.max(this.now(),(this.selfRegistrationDispositions.get(t)?.updated_at_ms??0)+1),synced:!1}),this.selectedPendingSelfRegId===t&&(this.selectedPendingSelfRegId=""),this.isSeeding||(this.postSelfRegistrationDisposition(t),this.saveToStorage(),this.onStateChanged?.()),i}findSelfRegistrationAthlete(e){const t=this.athletes.get(e.checked_in_athlete_id??Cs(e.registration_id));if(t)return t;const s=x=>x.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/\s+/g," ").trim(),n=s(e.public_display_name),i=s(e.team_id),o=s(e.team_name),a=s(e.division_id),l=[...this.athletes.values()].filter(x=>!this.isWithdrawn(x.athlete_id)&&s(x.public_display_name)===n&&(s(x.team_id)===i||s(x.team_name)===o)),c=l.filter(x=>s(x.division_id)===a);return c.length===1?c[0]:c.length===0&&l.length===1?l[0]:void 0}selfRegistrationWeightClass(e,t){return t<=this.maxAllowedTenthsForClass(e.weight_class_id)?e.weight_class_id:mt(e.division_id).find(s=>Number(s)>=Number(e.weight_class_id)&&t<=this.maxAllowedTenthsForClass(s))??e.weight_class_id}batchApproveSelfRegistrations(e={}){const t=e.registrationIds&&new Set(e.registrationIds.map(a=>a.trim().toUpperCase()));let s=0,n=0;const i=[],o=this.isSeeding;this.isSeeding=!0;try{for(const a of this.listUncheckedSelfRegistrations()){const l=a.registration_id;if(t&&!t.has(l))continue;const c=e.weightInputsByRegId?.[l]?.trim(),x=c?Math.round(Number(c)*10):void 0,d=this.findSelfRegistrationAthlete(a),u=d??a,_=e.checkInAndClear&&!(d&&this.hasFailedWeighInOrHold(d.athlete_id)),p=x!==void 0||!!_,h=e.classInputsByRegId?.[l],m=h||(x===void 0?u.weight_class_id:this.selfRegistrationWeightClass(u,x)),E=d&&this.privateMedicals.get(d.athlete_id),F=d&&this.privateWeighIns.get(d.athlete_id);try{const g=this.approveSelfRegistration({registrationId:l,checkInAndClear:p,measuredWeightTenths:x??F?.measured_weight_tenths??Number(m)*10,reassignWeightClassId:p?m:h,skinDecision:e.skinInputsByRegId?.[l]??E?.decision??"CLEARED",stationId:e.stationId,scaleId:e.scaleId,reviewerId:e.reviewerId,privateClinicalNotes:E?.private_clinical_notes});s++,p&&g.check_in_stage===Q.Eligible&&n++}catch(g){i.push({registrationId:l,message:g instanceof Error?g.message:String(g)})}}}finally{this.isSeeding=o}return s&&(this.publishAndSave(),this.syncPendingSelfRegistrationsFromVenue()),{approvedCount:s,clearedCount:n,failures:i}}dismissSelfRegistration(e){const t=e.trim().toUpperCase(),s=this.pendingSelfRegistrations.get(t),n=!!s;return this.selectedPendingSelfRegId===t&&(this.selectedPendingSelfRegId=""),n&&(this.selfRegistrationDispositions.set(t,{status:"DISMISSED",revision:s.revision,updated_at_ms:Math.max(this.now(),(this.selfRegistrationDispositions.get(t)?.updated_at_ms??0)+1),synced:!1}),this.postSelfRegistrationDisposition(t),this.saveToStorage(),this.onStateChanged?.()),n}async postSelfRegistrationDisposition(e,t=this.activeVenueOrigin,s=!0){const n=this.selfRegistrationDispositions.get(e);if(!n||!t||typeof fetch>"u")return!1;try{if((await fetch(`${t.replace(/\/+$/,"")}/api/openmat-self-register`,{method:"POST",headers:{"Content-Type":"application/json"},signal:AbortSignal.timeout(3500),body:JSON.stringify({disposition:{registration_id:e,tournament_id:this.tournamentId,status:n.status,revision:n.revision,updated_at_ms:n.updated_at_ms,athlete_id:n.athlete_id}})})).ok&&this.selfRegistrationDispositions.get(e)===n)return n.synced=!0,s&&this.saveToStorage(),!0}catch{}return!1}selfRegistrationPolls=new Map;syncPendingSelfRegistrationsFromVenue(e=this.activeVenueOrigin){if(typeof fetch>"u"||!e||globalThis.navigator?.onLine===!1)return Promise.resolve(0);const t=`${this.tournamentId}:${e}`,s=this.selfRegistrationPolls.get(t);if(s)return s;const n=this.fetchPendingSelfRegistrations(e).finally(()=>this.selfRegistrationPolls.delete(t));return this.selfRegistrationPolls.set(t,n),n}async fetchPendingSelfRegistrations(e){try{const t=this.tournamentId,s=e.trim().replace(/\/+$/,"");if(/github\.io$/i.test(new URL(s).hostname))return 0;const n=[...this.selfRegistrationDispositions.entries()].filter(([,u])=>!u.synced).map(([u])=>u);let i=!1;for(let u=0;u<n.length&&this.tournamentId===t&&(await Promise.all(n.slice(u,u+12).map(p=>this.postSelfRegistrationDisposition(p,s,!1)))).some(Boolean);u+=12)i=!0;if(this.tournamentId!==t)return 0;i&&this.saveToStorage(),i=!1;const o=await fetch(`${s}/api/openmat-self-registrations?tournament=${encodeURIComponent(t)}`,{signal:AbortSignal.timeout(3500)});if(!o.ok)return 0;const a=await o.json();if(this.tournamentId!==t||!Array.isArray(a.registrations))return 0;const l=new Map(this.listUncheckedSelfRegistrations().map(u=>[u.registration_id,u]));let c=0;const x=new Set(a.registrations.flatMap(u=>{const _=u;return _?.tournament_id===t&&typeof _.registration_id=="string"?[_.registration_id]:[]}));for(const u of a.dispositions??[]){if((u?.tournament_id?u.tournament_id!==t:!x.has(u?.registration_id)&&!this.pendingSelfRegistrations.has(u?.registration_id))||!u?.registration_id||!["APPROVED","DISMISSED","PENDING"].includes(u.status))continue;const _=this.pendingSelfRegistrations.get(u.registration_id);if(u.status==="DISMISSED"&&_?.source==="QR_SCAN"&&_.revision<=u.revision)continue;const p=this.selfRegistrationDispositions.get(u.registration_id);p?.status==="APPROVED"&&u.status==="PENDING"||(!p||u.revision>p.revision||u.revision===p.revision&&u.updated_at_ms>p.updated_at_ms?(this.selfRegistrationDispositions.set(u.registration_id,{...u,synced:!0}),c++):p.revision===u.revision&&p.updated_at_ms===u.updated_at_ms&&p.status===u.status&&!p.synced&&(p.synced=!0,i=!0))}for(const u of a.registrations)try{const _=u&&typeof u=="object"&&typeof u.registration_id=="string"?this.pendingSelfRegistrations.get(String(u.registration_id).toUpperCase()):void 0,{entry:p}=this.stageSelfRegistration(u,"NETWORK_FORM",!1);this.pendingSelfRegistrations.get(p.registration_id)===p&&p!==_&&c++}catch{}if(!c&&!i)return 0;this.saveToStorage();let d=0;for(const u of this.listUncheckedSelfRegistrations())l.get(u.registration_id)!==u&&d++,l.delete(u.registration_id);return d+=l.size,d&&this.onStateChanged?.(),d}catch{return 0}}setCheckInStage(e,t){const s=this.athletes.get(e);if(!s)throw new I(R.InvalidArgument,`Unknown athlete: ${e}`);const n=t===Q.Scratched||t===Q.Withdrawn;if(this.isWithdrawn(e)&&!n){if(t!==Q.Arrived)throw new Error("Reinstate the wrestler before check-in.");return this.reinstateAthlete(s),this.publishAndSave(),s}if(n&&!this.isWithdrawn(e)){const i=this.scheduledBoutsForAthlete(e).find(a=>!this.isUnstartedBout(a));if(i)throw new Error(`Ask the tournament director to review bout ${i.bout_number} before scratching this wrestler.`);const o=this.forfeitsForAthlete(e).map(a=>a.match_id);this.scratches.set(e,{priorForfeits:o,results:[]})}if(t===Q.Eligible&&(!s.weigh_in_eligible||!s.medically_cleared))throw new I(R.InvalidArgument,`Cannot mark ${s.public_display_name} Eligible until both Weigh-In and Medical/Skin Check are passed.`);if(s.check_in_stage=t,s.updated_at_ms=this.now(),n&&this.advanceScratches(s.updated_at_ms))for(const i of this.mats.keys())this.promoteMatReadyBout(i,s.updated_at_ms);return this.publishAndSave(),s}maxAllowedTenthsForClass(e){return Number(e)*10+this.growthAllowanceTenths+this.consecutiveDayAllowanceTenths}validateWeightClass(e,t,s){if(t===s)return;const n=(e||"VARSITY").trim().toUpperCase();if(!mt(n).includes(t))throw new Error("Select a weight class in this division");if(s){const i=[...this.bouts.values()].filter(a=>(a.division_id||"VARSITY").toUpperCase()===n&&(a.weight_class_id===s||a.weight_class_id===t)),o=i.find(a=>this.drawLocked(a));if(o)throw new Error(`Bout ${o.bout_number} locks the ${n} ${o.weight_class_id} lb bracket. Keep the wrestler in the current class.`);if(i.length)throw new Error(`Check ${n} ${s} lb and ${t} lb in Brackets & Seeds. Select Clear Bracket for each class with bouts before you change weight class.`)}if(s&&this.isBracketFrozen(s,n)||this.isBracketFrozen(t,n))throw new Error("You cannot move a wrestler into or out of a frozen bracket")}forfeitsForAthlete(e){return[...this.bouts.values()].filter(t=>(t.red_athlete_id===e||t.green_athlete_id===e)&&(t.win_type==="FORFEIT"&&t.winner_athlete_id!==e||t.is_bye&&!t.winner_athlete_id))}needsReinstatement(e){return e.check_in_stage===Q.Scratched?!0:e.check_in_stage===Q.Withdrawn&&(this.scratches.has(e.athlete_id)||this.forfeitsForAthlete(e.athlete_id).length>0)}recordScaleWeighIn(e){const t=this.athletes.get(e.athleteId);if(!t)throw new I(R.InvalidArgument,`Unknown athlete: ${e.athleteId}`);if(this.needsReinstatement(t))throw new Error("Reinstate the wrestler before check-in.");if(!Number.isInteger(e.measuredWeightTenths)||e.measuredWeightTenths<500||e.measuredWeightTenths>3500)throw new I(R.InvalidArgument,"Weight must be an integer in tenths of a pound between 50.0 and 350.0 lbs");e.reassignWeightClassId&&(this.validateWeightClass(t.division_id,e.reassignWeightClassId,t.weight_class_id),t.weight_class_id=e.reassignWeightClassId);const n=(this.privateWeighIns.get(t.athlete_id)?.attempt_number??0)+1,i=this.maxAllowedTenthsForClass(t.weight_class_id),o=e.measuredWeightTenths<=i,a={athlete_id:t.athlete_id,station_id:e.stationId,scale_id:e.scaleId,attempt_number:n,measured_weight_tenths:e.measuredWeightTenths,max_allowed_tenths:i,passed:o,recorded_at_ms:this.now()};return this.privateWeighIns.set(t.athlete_id,a),t.weigh_in_eligible=o,this.privateMedicals.get(t.athlete_id)?.decision==="MEDICAL_HOLD_DISQUALIFIED"?t.check_in_stage=Q.Withdrawn:o&&t.medically_cleared?t.check_in_stage=Q.Eligible:o?t.check_in_stage=Q.MedicalPending:t.check_in_stage=Q.WeighInPending,t.updated_at_ms=this.now(),this.publishAndSave(),a}recordMedicalDecision(e){const t=this.athletes.get(e.athleteId);if(!t)throw new I(R.InvalidArgument,`Unknown athlete: ${e.athleteId}`);const s=this.needsReinstatement(t);if(!e.reviewerId.trim())throw new I(R.InvalidArgument,"Authorized human medical reviewer ID is required (REQ-MED-01)");const n=e.decision==="CLEARED"||e.decision==="CLEARED_PHYSICIAN_FORM",i={athlete_id:t.athlete_id,reviewer_id:e.reviewerId.trim(),reviewer_role:e.reviewerRole,decision:e.decision,skin_clear:e.decision!=="MEDICAL_HOLD_DISQUALIFIED",grooming_compliant:e.decision!=="GROOMING_HOLD",private_clinical_notes:e.privateClinicalNotes.trim(),recorded_at_ms:this.now()};return this.privateMedicals.set(t.athlete_id,i),t.medically_cleared=n,s||(n&&t.weigh_in_eligible?t.check_in_stage=Q.Eligible:n&&!t.weigh_in_eligible?t.check_in_stage=Q.WeighInPending:!n&&e.decision==="MEDICAL_HOLD_DISQUALIFIED"?t.check_in_stage=Q.Withdrawn:t.check_in_stage=Q.MedicalPending),t.updated_at_ms=this.now(),this.publishAndSave(),i}completeUnifiedCheckIn(e){const t=this.athletes.get(e.athleteId);if(!t)throw new I(R.InvalidArgument,`Unknown athlete: ${e.athleteId}`);const s=e.reassignWeightClassId&&wo.includes(e.reassignWeightClassId)?e.reassignWeightClassId:t.weight_class_id,i=this.privateWeighIns.get(t.athlete_id)?.measured_weight_tenths??Math.max(550,Math.min(3450,Number(s)*10||1320)),o=e.measuredWeightTenths??i,a=this.isSeeding;this.isSeeding=!0;try{this.recordScaleWeighIn({athleteId:t.athlete_id,stationId:(e.stationId??"").trim()||"CHECKIN-1",scaleId:(e.scaleId??"").trim()||"SCALE-1",measuredWeightTenths:o,reassignWeightClassId:e.reassignWeightClassId}),(e.skinDecision!==void 0||!this.privateMedicals.has(t.athlete_id))&&this.recordMedicalDecision({athleteId:t.athlete_id,reviewerId:(e.reviewerId??"").trim()||"Head Official",reviewerRole:e.reviewerRole??"Physician",decision:e.skinDecision??"CLEARED",privateClinicalNotes:e.privateClinicalNotes??""})}finally{this.isSeeding=a}return this.publishAndSave(),this.athletes.get(t.athlete_id)}generateAllBrackets(e=J.DoubleElimCrossover,t){const s=(t??"").trim().toUpperCase(),n=new Set;for(const l of this.athletes.values())if(l.check_in_stage===Q.Eligible&&l.weigh_in_eligible&&l.medically_cleared){const c=(l.division_id||"VARSITY").toUpperCase();if(s&&s!=="ALL"&&c!==s)continue;n.add(`${c}:${l.weight_class_id}`)}const i=Array.from(n).sort((l,c)=>{const[x,d]=l.split(":"),[u,_]=c.split(":");return(x||"").localeCompare(u||"")||Number(d)-Number(_)}),o=[];let a=0;for(const l of i){const[c,x]=l.split(":"),d=this.generateBracketForClass(x,e,c);d.length>0&&(o.push(`${c} ${x} lbs`),a+=d.length)}return o.length>0&&![...this.bouts.values()].some(l=>this.drawLocked(l))&&(this.rebalanceMatsInRunningOrder(),this.publishAndSave()),{generatedClasses:o,totalBouts:a}}purgePrivateClinicalNotes(){let e=0;for(const t of this.privateMedicals.values())t.private_clinical_notes&&(t.private_clinical_notes="[PURGED POST-EVENT PER REQ-PRIV-04]",e++);return this.saveToStorage(),e}isBracketFrozen(e,t){const s=(t??"").trim().toUpperCase();if(s&&s!=="ALL"){const n=this.bracketFrozenByClass.get(`${s}:${e}`);if(n!==void 0)return n;const i=new Set(Array.from(this.athletes.values()).filter(a=>a.weight_class_id===e).map(a=>(a.division_id||"VARSITY").toUpperCase()));if(i.size>1)return!1;const[o]=i;if(o&&this.bracketFrozenByClass.has(`${o}:${e}`))return!1}return this.bracketFrozenByClass.get(e)??!1}frozenSeedDivisions(e){const t=new Set;for(const s of[...this.athletes.values(),...this.bouts.values()])s.weight_class_id===e&&t.add((s.division_id||"VARSITY").toUpperCase());return new Set([...t].filter(s=>this.isBracketFrozen(e,s)))}unfreezeSeeds(e,t){const s=this.frozenSeedDivisions(e),n=t.trim().toUpperCase(),i=[...s].filter(o=>n==="ALL"||n===o);if(!i.length)return!1;for(const o of i)this.bracketFrozenByClass.set(`${o}:${e}`,!1);return i.length===s.size&&this.bracketFrozenByClass.get(e)&&this.bracketFrozenByClass.set(e,!1),this.publishAndSave(),!0}moveSeed(e,t){const s=this.athletes.get(e);if(!s)return;if(this.isBracketFrozen(s.weight_class_id,s.division_id))throw new I(R.InvalidArgument,`Bracket for ${s.division_id} ${s.weight_class_id} lbs is frozen. Unfreeze before reordering seeds.`);const n=Array.from(this.athletes.values()).filter(c=>c.weight_class_id===s.weight_class_id&&c.division_id===s.division_id).sort((c,x)=>c.seed_rank-x.seed_rank||c.athlete_id.localeCompare(x.athlete_id)),i=n.findIndex(c=>c.athlete_id===e),o=i+t;if(i<0||o<0||o>=n.length)return;const a=n[o],l=s.seed_rank;s.seed_rank=a.seed_rank,a.seed_rank=l,s.seed_rank===a.seed_rank&&n.forEach((c,x)=>{c.seed_rank=x+1}),this.publishAndSave()}autoSeparateSameTeamSeeds(e,t){const s=(t??"").trim().toUpperCase(),n=Array.from(this.athletes.values()).filter(i=>i.weight_class_id===e&&(!s||s==="ALL"||i.division_id.toUpperCase()===s)&&i.check_in_stage===Q.Eligible&&i.weigh_in_eligible&&i.medically_cleared).sort((i,o)=>i.seed_rank-o.seed_rank);for(let i=0;i<n.length-1;i++){const o=n[i],a=n[i+1];if(o.team_id===a.team_id&&i+2<n.length){const l=n[i+2],c=a.seed_rank;a.seed_rank=l.seed_rank,l.seed_rank=c}}n.sort((i,o)=>i.seed_rank-o.seed_rank).forEach((i,o)=>{i.seed_rank=o+1}),this.publishAndSave()}drawLocked(e){return!e.is_bye&&(e.lifecycle>=$.Ready||e.clock_running||e.red_score>0||e.green_score>0||e.completed_at_ms>0)}assertDrawNotStarted(){if([...this.bouts.values()].some(e=>this.drawLocked(e)))throw new Error("Bout numbers are locked. Finish the tournament before you replace its brackets.")}unfreezeBracket(e,t){const s=(t??"").trim().toUpperCase(),n=new Set(Array.from(this.athletes.values()).filter(o=>o.weight_class_id===e).map(o=>(o.division_id||"VARSITY").toUpperCase())),i=s&&s!=="ALL"?s:n.size===1?Array.from(n)[0]:"";for(const o of this.bouts.values()){const a=(o.division_id||"VARSITY").toUpperCase();if(o.weight_class_id===e&&(!i||a===i)&&this.drawLocked(o))throw new Error(`Bout ${o.bout_number} locks this bracket. You cannot clear it.`)}for(const[o,a]of this.bouts.entries()){const l=(a.division_id||"VARSITY").toUpperCase();a.weight_class_id===e&&(!i||l===i)&&(this.bouts.delete(o),this.deletedMatchIds.add(o),this.clearedRestMatchIds.delete(o))}if(i)this.bracketFrozenByClass.set(`${i}:${e}`,!1);else for(const o of this.bracketFrozenByClass.keys())o.endsWith(`:${e}`)&&this.bracketFrozenByClass.set(o,!1);this.bracketFrozenByClass.get(e)&&!this.frozenSeedDivisions(e).size&&this.bracketFrozenByClass.set(e,!1),[...this.bouts.values()].some(o=>this.drawLocked(o))||this.numberBoutsInRunningOrder(),this.publishAndSave()}numberBoutsInRunningOrder(){const e=[...this.bouts.values()].sort((s,n)=>s.round_index-n.round_index||Number(s.weight_class_id)-Number(n.weight_class_id)||(s.division_id||"").localeCompare(n.division_id||"")||Number(s.is_consolation)-Number(n.is_consolation)||s.bout_number-n.bout_number||s.match_id.localeCompare(n.match_id)),t=new Map;e.forEach((s,n)=>{s.bout_number=101+n;const i=(t.get(s.assigned_mat_id)||0)+1;t.set(s.assigned_mat_id,i),s.mat_queue_order=i}),this.bouts=new Map(e.map(s=>[s.match_id,s])),this.nextBoutNumber=101+e.length}rebalanceMatsInRunningOrder(){const e=[...this.bouts.values()].sort((n,i)=>n.round_index-i.round_index||Number(n.weight_class_id)-Number(i.weight_class_id)||(n.division_id||"").localeCompare(i.division_id||"")||Number(n.is_consolation)-Number(i.is_consolation)||n.bout_number-i.bout_number||n.match_id.localeCompare(i.match_id)),t=new Map;let s=0;e.forEach((n,i)=>{if(n.bout_number=101+i,!n.is_bye){const a=s%this.matCount+1;s+=1,n.assigned_mat_id=a,n.delegated_android_device_id=this.mats.get(a)?.android_device_id||`mat-${a}-scorekeeper`}const o=(t.get(n.assigned_mat_id)||0)+1;t.set(n.assigned_mat_id,o),n.mat_queue_order=o}),this.bouts=new Map(e.map(n=>[n.match_id,n])),this.nextBoutNumber=101+e.length}static recommendBracketFormatForCount(e,t=J.DoubleElimCrossover){return e===2?J.BestOfThree:e>=1&&e<=5?J.RoundRobinPool:t===J.TrueSecondChallenge?J.TrueSecondChallenge:t===J.RoundRobinPool?J.RoundRobinPool:J.DoubleElimCrossover}generateBracketForClass(e,t=J.AutoByCount,s){const n=(s??"").trim().toUpperCase(),i=new Set(Array.from(this.athletes.values()).filter(h=>h.weight_class_id===e&&h.check_in_stage===Q.Eligible&&h.weigh_in_eligible&&h.medically_cleared).map(h=>(h.division_id||"VARSITY").toUpperCase()));if((!n||n==="ALL")&&i.size>1)throw new I(R.InvalidArgument,`Multiple divisions (${Array.from(i).join(", ")}) share weight class ${e}; specify divisionId.`);const o=n&&n!=="ALL"?n:i.size===1?Array.from(i)[0]:"VARSITY";for(const h of this.bouts.values()){const m=(h.division_id||"VARSITY").toUpperCase();if(h.weight_class_id===e&&m===o&&this.drawLocked(h))throw new Error("Bout numbers are locked. Finish the tournament before you replace its brackets.")}const a=new Set(Array.from(this.athletes.values()).filter(h=>h.weight_class_id===e).map(h=>(h.division_id||"VARSITY").toUpperCase())).size>1,c=a||!!n&&n!=="ALL"&&n!=="VARSITY"?`${o}-${e}`:e,x=Array.from(this.athletes.values()).filter(h=>h.weight_class_id===e&&(h.division_id||"VARSITY").toUpperCase()===o&&h.check_in_stage===Q.Eligible&&h.weigh_in_eligible&&h.medically_cleared).sort((h,m)=>h.seed_rank-m.seed_rank||h.athlete_id.localeCompare(m.athlete_id));if(x.length>64)throw new I(R.BoundsExceeded,`Active entrants (${x.length}) exceed 64-athlete bracket capacity.`);for(const[h,m]of this.bouts.entries()){const E=(m.division_id||"VARSITY").toUpperCase();m.weight_class_id===e&&E===o&&(this.bouts.delete(h),this.deletedMatchIds.add(h))}if(x.length===0)return[];x.forEach((h,m)=>{h.seed_rank=m+1});let d=t;x.length===1?d=J.RoundRobinPool:x.length===2?d=t===J.RoundRobinPool?J.RoundRobinPool:J.BestOfThree:x.length>=3&&x.length<=5?d=J.RoundRobinPool:(t===J.AutoByCount||t===J.BestOfThree)&&(d=J.DoubleElimCrossover);const u=[],_=`BRK-${c}-${d}`;if(x.length===1){const h=x[0],m=`BOUT-${c}-WALKOVER-1ST`,E={match_id:m,bracket_id:_,weight_class_id:e,division_id:o,format:d,bout_number:this.nextBoutNumber++,round_index:1,round_label:"Uncontested 1st Place (Walkover)",is_consolation:!1,is_placement_bout:!0,is_true_second_challenge:!1,placement_rank:1,red_athlete_id:h.athlete_id,green_athlete_id:"",is_bye:!0,winner_next_match_id:"",loser_next_match_id:"",lifecycle:$.ResultAccepted,assigned_mat_id:1,mat_queue_order:1,assignment_revision:1,authority_epoch:1,delegated_android_device_id:"mat-1-scorekeeper",red_score:0,green_score:0,period_number:1,clock_remaining_ms:0,clock_running:!1,winner_athlete_id:h.athlete_id,loser_athlete_id:"",win_type:"BYE",completed_at_ms:this.now()};this.bouts.set(m,E),u.push(E)}else if(d===J.BestOfThree){const h=x[0],m=x[1],E=`BOUT-${c}-BO3-1`,F=`BOUT-${c}-BO3-2`,g=`BOUT-${c}-BO3-3`;[{matchId:E,roundIndex:1,roundLabel:"Best of 3 — Match 1",redId:h.athlete_id,greenId:m.athlete_id,nextId:F,lifecycle:$.Assigned,isPlacement:!1,placementRank:0},{matchId:F,roundIndex:2,roundLabel:"Best of 3 — Match 2",redId:m.athlete_id,greenId:h.athlete_id,nextId:g,lifecycle:$.PendingUpstream,isPlacement:!1,placementRank:0},{matchId:g,roundIndex:3,roundLabel:"Best of 3 — Match 3 (If Necessary)",redId:h.athlete_id,greenId:m.athlete_id,nextId:"",lifecycle:$.PendingUpstream,isPlacement:!0,placementRank:1}].forEach((C,B)=>{const w=B%this.matCount+1,D={match_id:C.matchId,bracket_id:_,weight_class_id:e,division_id:o,format:d,bout_number:this.nextBoutNumber++,round_index:C.roundIndex,round_label:C.roundLabel,is_consolation:!1,is_placement_bout:C.isPlacement,is_true_second_challenge:!1,placement_rank:C.placementRank,red_athlete_id:C.redId,green_athlete_id:C.greenId,is_bye:!1,winner_next_match_id:C.nextId,loser_next_match_id:C.nextId,lifecycle:C.lifecycle,assigned_mat_id:w,mat_queue_order:B+1,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${w}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(C.matchId,D),u.push(D)})}else if(d===J.RoundRobinPool){const h=[...x];h.length%2&&h.push(void 0);for(let m=1;m<h.length;m++){for(let E=0;E<h.length/2;E++){const F=h[E],g=h[h.length-1-E];if(!F||!g)continue;const b=this.nextBoutNumber++,C=`BOUT-${c}-RR${u.length+1}`,B={match_id:C,bracket_id:_,weight_class_id:e,division_id:o,format:d,bout_number:b,round_index:m,round_label:`Pool Round ${m}`,is_consolation:!1,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:F.athlete_id,green_athlete_id:g.athlete_id,is_bye:!1,winner_next_match_id:"",loser_next_match_id:"",lifecycle:$.Assigned,assigned_mat_id:u.length%this.matCount+1,mat_queue_order:u.length+1,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${u.length%this.matCount+1}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(C,B),u.push(B)}h.splice(1,0,h.pop())}}else if(x.length<=8){const h=[[0,7],[3,4],[1,6],[2,5]],m=["QF1","QF2","QF3","QF4"].map(y=>`BOUT-${c}-${y}`),E=["SF1","SF2"].map(y=>`BOUT-${c}-${y}`),F=["C1-1","C1-2"].map(y=>`BOUT-${c}-${y}`),g=["C2-1","C2-2"].map(y=>`BOUT-${c}-${y}`),b=`BOUT-${c}-FINAL-1ST`,C=`BOUT-${c}-FINAL-3RD`,B=`BOUT-${c}-TRUE-2ND`;h.forEach(([y,A],k)=>{const v=x[y]?.athlete_id??"",M=x[A]?.athlete_id??"",S=!v||!M,T=m[k],q=k<2?E[0]:E[1],z=k<2?F[0]:F[1],L={match_id:T,bracket_id:_,weight_class_id:e,division_id:o,format:d,bout_number:this.nextBoutNumber++,round_index:1,round_label:"Championship Quarterfinal",is_consolation:!1,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:v,green_athlete_id:M,is_bye:S,winner_next_match_id:q,loser_next_match_id:z,lifecycle:S?$.ResultAccepted:$.Assigned,assigned_mat_id:k%this.matCount+1,mat_queue_order:k+1,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${k%this.matCount+1}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:S?v:"",loser_athlete_id:"",win_type:S?"BYE":"",completed_at_ms:S?this.now():0};this.bouts.set(T,L),u.push(L)});let w=4;F.forEach((y,A)=>{const k=w++%this.matCount+1,v={match_id:y,bracket_id:_,weight_class_id:e,division_id:o,format:d,bout_number:this.nextBoutNumber++,round_index:2,round_label:"Consolation Round 1",is_consolation:!0,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:g[A],loser_next_match_id:"",lifecycle:$.PendingUpstream,assigned_mat_id:k,mat_queue_order:10+A,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${k}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(y,v),u.push(v)}),E.forEach((y,A)=>{const k=A===0?g[1]:g[0],v=w++%this.matCount+1,M={match_id:y,bracket_id:_,weight_class_id:e,division_id:o,format:d,bout_number:this.nextBoutNumber++,round_index:2,round_label:"Championship Semifinal",is_consolation:!1,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:b,loser_next_match_id:k,lifecycle:$.PendingUpstream,assigned_mat_id:v,mat_queue_order:12+A,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${v}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(y,M),u.push(M)}),g.forEach((y,A)=>{const k=w++%this.matCount+1,v={match_id:y,bracket_id:_,weight_class_id:e,division_id:o,format:d,bout_number:this.nextBoutNumber++,round_index:3,round_label:"Consolation Semifinal (Crossover)",is_consolation:!0,is_placement_bout:!1,is_true_second_challenge:!1,placement_rank:0,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:C,loser_next_match_id:"",lifecycle:$.PendingUpstream,assigned_mat_id:k,mat_queue_order:15+A,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${k}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(y,v),u.push(v)});const D=w++%this.matCount+1,f={match_id:C,bracket_id:_,weight_class_id:e,division_id:o,format:d,bout_number:this.nextBoutNumber++,round_index:4,round_label:"3rd Place Match",is_consolation:!0,is_placement_bout:!0,is_true_second_challenge:!1,placement_rank:3,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:d===J.TrueSecondChallenge?B:"",loser_next_match_id:"",lifecycle:$.PendingUpstream,assigned_mat_id:D,mat_queue_order:20,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${D}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(C,f),u.push(f);const P=w++%this.matCount+1,N={match_id:b,bracket_id:_,weight_class_id:e,division_id:o,format:d,bout_number:this.nextBoutNumber++,round_index:4,round_label:"1st Place Championship Final",is_consolation:!1,is_placement_bout:!0,is_true_second_challenge:!1,placement_rank:1,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:"",loser_next_match_id:d===J.TrueSecondChallenge?B:"",lifecycle:$.PendingUpstream,assigned_mat_id:P,mat_queue_order:21,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${P}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};if(this.bouts.set(b,N),u.push(N),d===J.TrueSecondChallenge){const y={match_id:B,bracket_id:_,weight_class_id:e,division_id:o,format:d,bout_number:this.nextBoutNumber++,round_index:5,round_label:"True Second Challenge Match",is_consolation:!0,is_placement_bout:!0,is_true_second_challenge:!0,placement_rank:2,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:"",loser_next_match_id:"",lifecycle:$.PendingUpstream,assigned_mat_id:1,mat_queue_order:22,assignment_revision:1,authority_epoch:1,delegated_android_device_id:"mat-1-scorekeeper",red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};this.bouts.set(B,y),u.push(y)}for(const y of u)y.is_bye&&y.winner_athlete_id&&y.winner_next_match_id&&this.advanceParticipantToDownstream(y.winner_next_match_id,y.winner_athlete_id);this.resolveCompletedByesForBracket(_)}else{const h=x.length<=16?16:x.length<=32?32:64,m=Math.log2(h),E=v=>`BOUT-${c}-${v}`;let F=1;const g=(v,M,S,T,q=!1,z=0,L=!1)=>{const W=(F-1)%this.matCount+1,V={match_id:v,bracket_id:_,weight_class_id:e,division_id:o,format:d,bout_number:this.nextBoutNumber++,round_index:M,round_label:S,is_consolation:T,is_placement_bout:q,is_true_second_challenge:L,placement_rank:z,red_athlete_id:"",green_athlete_id:"",is_bye:!1,winner_next_match_id:"",loser_next_match_id:"",lifecycle:$.PendingUpstream,assigned_mat_id:W,mat_queue_order:F++,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${W}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};return this.bouts.set(v,V),u.push(V),V},b=Array.from({length:m+1},()=>[]);for(let v=1;v<=m;v++){const M=h>>v,S=v===m?"1st Place Championship Final":M===2?"Championship Semifinal":M===4?"Championship Quarterfinal":`Championship Round of ${M*2}`;for(let T=0;T<M;T++){const q=E(v===m?"FINAL-1ST":`C${v}-${T+1}`);b[v].push(q),g(q,v,S,!1,v===m,v===m?1:0)}}for(let v=1;v<m;v++){const M=b[v];for(let S=0;S<M.length;S++){const T=this.bouts.get(M[S]);T.winner_next_match_id=b[v+1][Math.floor(S/2)]}}const C=E("FINAL-3RD"),B=E("P5"),w=E("P7"),D=E("TRUE-2ND");let f=1,P=[];for(let v=0;v<h/4;v++){const M=E(`L${f}-${v+1}`);P.push(M),g(M,f+1,`Consolation Round ${f}`,!0);const S=this.bouts.get(b[1][2*v]),T=this.bouts.get(b[1][2*v+1]);S.loser_next_match_id=M,T.loser_next_match_id=M}for(let v=2;v<m;v++){const M=b[v].length;f+=1;const S=[];for(let T=0;T<M;T++){const q=E(`L${f}-${T+1}`);S.push(q);const z=v===m-1?"Consolation Semifinal (Crossover)":`Consolation Round ${f} (Crossover)`;g(q,v+f,z,!0);const L=this.bouts.get(P[T]);L.winner_next_match_id=q;const W=v%2===0?M-1-T:T^Math.floor(M/2),V=this.bouts.get(b[v][W]);V.loser_next_match_id=q}if(v<m-1){f+=1;const T=M/2,q=[];for(let z=0;z<T;z++){const L=E(`L${f}-${z+1}`);q.push(L);const W=T===2?"Consolation Quarterfinal":`Consolation Round ${f}`,V=g(L,v+f,W,!0),H=this.bouts.get(S[2*z]),O=this.bouts.get(S[2*z+1]);H.winner_next_match_id=L,O.winner_next_match_id=L,T===2&&(V.loser_next_match_id=w)}P=q}else{for(let T=0;T<2;T++){const q=this.bouts.get(S[T]);q.winner_next_match_id=C,q.loser_next_match_id=B}P=S}}const N=m+f+1;this.bouts.get(b[m][0]).round_index=N;const y=g(C,N,"3rd Place Match",!0,!0,3);if(g(B,N,"5th Place Match",!0,!0,5),g(w,N,"7th Place Match",!0,!0,7),d===J.TrueSecondChallenge){g(D,N+1,"True Second Challenge Match",!0,!0,2,!0);const v=this.bouts.get(b[m][0]);v.loser_next_match_id=D,y.winner_next_match_id=D}const A=oe.buildStandardTopSeeds(h),k=this.now();for(let v=0;v<h/2;v++){const M=A[v],S=h+1-M,T=this.bouts.get(b[1][v]),q=M>=1&&M<=x.length?x[M-1].athlete_id:"",z=S>=1&&S<=x.length?x[S-1].athlete_id:"";if(q&&z)T.red_athlete_id=q,T.green_athlete_id=z,T.is_bye=!1,T.lifecycle=$.Assigned;else if(q||z){const L=q||z;T.red_athlete_id=L,T.green_athlete_id="",T.is_bye=!0,T.lifecycle=$.ResultAccepted,T.winner_athlete_id=L,T.loser_athlete_id="",T.win_type="BYE",T.completed_at_ms=k}else T.red_athlete_id="",T.green_athlete_id="",T.is_bye=!0,T.lifecycle=$.ResultAccepted,T.winner_athlete_id="",T.loser_athlete_id="",T.win_type="BYE",T.completed_at_ms=k}for(const v of u)v.is_bye&&v.winner_athlete_id&&v.winner_next_match_id&&this.advanceParticipantToDownstream(v.winner_next_match_id,v.winner_athlete_id);this.resolveCompletedByesForBracket(_,k)}for(const h of u)this.deletedMatchIds.delete(h.match_id);if(![...this.bouts.values()].some(h=>this.drawLocked(h)))this.numberBoutsInRunningOrder();else{let h=1+Math.max(100,...[...this.bouts.values()].filter(E=>!u.includes(E)).map(E=>E.bout_number||100));[...u].sort((E,F)=>E.round_index-F.round_index||Number(E.is_consolation)-Number(F.is_consolation)||E.bout_number-F.bout_number).forEach((E,F)=>{if(E.bout_number=h++,!E.is_bye){const g=F%this.matCount+1;E.assigned_mat_id=g,E.delegated_android_device_id=this.mats.get(g)?.android_device_id||`mat-${g}-scorekeeper`;const b=Math.max(0,...[...this.bouts.values()].filter(C=>C!==E&&C.assigned_mat_id===g).map(C=>C.mat_queue_order||0));E.mat_queue_order=b+1}}),this.nextBoutNumber=h}return this.bracketFrozenByClass.set(`${o}:${e}`,!0),a||this.bracketFrozenByClass.set(e,!0),this.publishAndSave(),u}static buildStandardTopSeeds(e){let t=[1],s=1;for(;s*2<=e/2;){const n=s*2,i=[];for(let o=0;o<t.length;o++){const a=t[o],l=n+1-a;o%2===0?i.push(a,l):i.push(l,a)}t=i,s=n}return t}advanceCompetitionDay(e=this.now()){for(const t of this.athletes.values())t.prior_day_matches=t.matches_wrestled_today,t.matches_wrestled_today=0,t.last_bout_ended_ms=0,t.updated_at_ms=e;this.publishAndSave()}reconcileBestOfThreeBracket(e,t=this.now()){const s=Array.from(this.bouts.values()).filter(c=>c.bracket_id===e&&c.format===J.BestOfThree).sort((c,x)=>c.round_index-x.round_index);if(s.length<3)return;const[n,i,o]=s,a=n.red_athlete_id,l=n.green_athlete_id;if(!(!a||!l)){if(i.red_athlete_id=l,i.green_athlete_id=a,o.red_athlete_id=a,o.green_athlete_id=l,!le(n)){i.lifecycle===$.Assigned&&(i.lifecycle=$.PendingUpstream),i.is_placement_bout=!1,i.placement_rank=0,o.is_bye=!1,o.lifecycle=$.PendingUpstream,o.is_placement_bout=!0,o.placement_rank=1,o.winner_athlete_id="",o.loser_athlete_id="",o.win_type="",o.completed_at_ms=0;return}if(!le(i)){i.lifecycle===$.PendingUpstream&&(i.lifecycle=$.Assigned),i.is_placement_bout=!1,i.placement_rank=0,o.is_bye=!1,o.lifecycle=$.PendingUpstream,o.is_placement_bout=!0,o.placement_rank=1,o.winner_athlete_id="",o.loser_athlete_id="",o.win_type="",o.completed_at_ms=0;return}n.winner_athlete_id===i.winner_athlete_id?(i.is_placement_bout=!!i.winner_athlete_id,i.placement_rank=i.is_placement_bout?1:0,o.is_placement_bout=!1,o.placement_rank=0,o.is_bye=!0,o.lifecycle=$.ResultAccepted,o.winner_athlete_id=i.winner_athlete_id,o.loser_athlete_id=i.loser_athlete_id,o.win_type="BYE",o.completed_at_ms=i.completed_at_ms||t):(i.is_placement_bout=!1,i.placement_rank=0,o.is_placement_bout=!0,o.placement_rank=1,(o.is_bye&&o.winner_athlete_id||o.lifecycle===$.PendingUpstream)&&(o.is_bye=!1,o.lifecycle=$.Assigned,o.winner_athlete_id="",o.loser_athlete_id="",o.win_type="",o.completed_at_ms=0))}}resolveCompletedByesForBracket(e,t=this.now()){this.reconcileBestOfThreeBracket(e,t);let s=!0;for(;s;){s=!1;const n=Array.from(this.bouts.values()).filter(i=>i.bracket_id===e);for(const i of n){if(i.format===J.BestOfThree)continue;if(i.is_true_second_challenge&&i.lifecycle<$.InProgress&&i.red_athlete_id&&i.green_athlete_id&&n.some(l=>!l.is_true_second_challenge&&!l.is_bye&&le(l)&&(l.red_athlete_id===i.red_athlete_id&&l.green_athlete_id===i.green_athlete_id||l.red_athlete_id===i.green_athlete_id&&l.green_athlete_id===i.red_athlete_id))){const c=n.find(d=>!d.is_true_second_challenge&&d.is_placement_bout&&d.placement_rank===1)?.loser_athlete_id||i.red_athlete_id,x=c===i.red_athlete_id?i.green_athlete_id:i.red_athlete_id;i.red_athlete_id=c,i.green_athlete_id=x,i.is_bye=!0,i.lifecycle=$.ResultAccepted,i.winner_athlete_id=c,i.loser_athlete_id=x,i.win_type="DEC",i.completed_at_ms=t,s=!0;continue}if(i.lifecycle!==$.PendingUpstream)continue;const o=n.filter(a=>a.winner_next_match_id===i.match_id||a.loser_next_match_id===i.match_id);if(!(o.length===0||!o.every(a=>le(a))))if(i.red_athlete_id&&i.green_athlete_id)i.lifecycle=$.Assigned,s=!0;else if(i.red_athlete_id||i.green_athlete_id){const a=i.red_athlete_id||i.green_athlete_id,l=this.isWithdrawn(a)?"":a;i.red_athlete_id=l,i.green_athlete_id="",i.is_bye=!0,i.lifecycle=$.ResultAccepted,i.winner_athlete_id=l,i.loser_athlete_id="",i.win_type="BYE",i.completed_at_ms=t,l||this.rememberScratchResult(a,i),i.winner_next_match_id&&this.advanceParticipantToDownstream(i.winner_next_match_id,l,i.match_id),s=!0}else i.is_bye=!0,i.lifecycle=$.ResultAccepted,i.winner_athlete_id="",i.loser_athlete_id="",i.win_type="BYE",i.completed_at_ms=t,s=!0}}}advanceParticipantToDownstream(e,t,s){const n=this.bouts.get(e);if(!n||!t||n.format===J.BestOfThree)return;if(n.red_athlete_id===t||n.green_athlete_id===t){n.red_athlete_id&&n.green_athlete_id&&n.lifecycle===$.PendingUpstream&&(n.lifecycle=$.Assigned);return}let i=!1;if(s){const o=Array.from(this.bouts.values()).filter(a=>!a.is_bye&&(a.winner_next_match_id===e||a.loser_next_match_id===e)).sort((a,l)=>a.bout_number-l.bout_number||a.match_id.localeCompare(l.match_id));o.length===2&&o[1]?.match_id===s&&(i=!0)}i&&!n.green_athlete_id?n.green_athlete_id=t:n.red_athlete_id?!n.green_athlete_id&&n.red_athlete_id!==t&&(n.green_athlete_id=t):n.red_athlete_id=t,n.red_athlete_id&&n.green_athlete_id&&n.lifecycle===$.PendingUpstream&&(n.lifecycle=$.Assigned)}revertProvisionalDownstreamAdvancement(e,t=this.now()){const s=this.bouts.get(e);if(!s)return;const n=this.previewCorrectionImpact(e),i=new Set;for(const o of n.affected_downstream_matches){const a=this.bouts.get(o);a&&(a.lifecycle<$.InProgress||a.lifecycle===$.ResultAccepted&&a.is_bye)&&(Object.assign(a,{red_athlete_id:"",green_athlete_id:"",winner_athlete_id:"",loser_athlete_id:"",is_bye:!1,lifecycle:$.PendingUpstream,red_score:0,green_score:0,win_type:"",completed_at_ms:0,period_number:1,clock_running:!1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms}),i.add(o))}i.size===0&&s.format!==J.BestOfThree||(this.refillDownstreamBouts(i),this.resolveCompletedByesForBracket(s.bracket_id,t))}refillDownstreamBouts(e){for(const t of[...this.bouts.values()].sort((s,n)=>s.bout_number-n.bout_number))le(t)&&(t.winner_next_match_id&&e.has(t.winner_next_match_id)&&this.advanceParticipantToDownstream(t.winner_next_match_id,t.winner_athlete_id,t.match_id),t.loser_next_match_id&&e.has(t.loser_next_match_id)&&t.loser_athlete_id&&!this.isWithdrawn(t.loser_athlete_id)&&t.win_type!=="DQ"&&t.win_type!=="MEDICAL_FORFEIT"&&this.advanceParticipantToDownstream(t.loser_next_match_id,t.loser_athlete_id,t.match_id))}assignBoutToMat(e,t,s,n=this.now()){const i=this.bouts.get(e);if(!i)throw new I(R.InvalidArgument,`Unknown bout: ${e}`);const o=this.mats.get(t);if(!o)throw new I(R.InvalidArgument,`Unknown Mat ${t}`);if(i.lifecycle!==$.Assigned&&i.lifecycle!==$.Ready)throw new I(R.InvalidArgument,"Only unstarted bouts may be queued or moved");if(!i.red_athlete_id||!i.green_athlete_id)throw new I(R.InvalidArgument,`Bout #${i.bout_number} does not have both participants determined yet.`);const a=i.assigned_mat_id,l=this.matQueue(t).filter(d=>d!==i&&d.lifecycle<=$.InProgress),c=l[0]?.lifecycle===$.InProgress;s==="READY"&&!c&&this.validateBoutSafetyGates(i,n);let x=c?1:0;if(s==="ON_DECK"&&!c){const d=l.findIndex(u=>this.isBoutReadyEligible(u,n));if(d<0&&a===t&&i.lifecycle===$.Ready&&this.isBoutReadyEligible(i,n))throw new Error(`Queue another eligible bout on Mat ${t} before holding Bout ${i.bout_number}`);d>=0&&(l.unshift(...l.splice(d,1)),x=1)}else(s==="IN_THE_HOLE"||s==="IN_HOLE")&&(x=2);return i.assigned_mat_id=t,i.delegated_android_device_id=o.android_device_id,i.authority_epoch=o.authority_epoch,a>0&&a!==t&&(i.assignment_revision+=1),i.lifecycle=$.Assigned,l.splice(x,0,i),l.forEach((d,u)=>{d.mat_queue_order=u+1}),this.promoteMatReadyBout(t,n),a>0&&a!==t&&(this.matQueue(a).filter(d=>d.lifecycle<=$.InProgress).forEach((d,u)=>{d.mat_queue_order=u+1}),this.promoteMatReadyBout(a,n)),this.publishAndSave(),i}isBoutCapBlocked(e){for(const t of[e.red_athlete_id,e.green_athlete_id]){const s=this.athletes.get(t);if(s&&(s.matches_wrestled_today>=this.dailyMatchCap||s.prior_day_matches+s.matches_wrestled_today>=this.consecutiveTwoDayCap))return!0}return!1}validateBoutSafetyGates(e,t=this.now()){const s=!!e.rest_lock_cleared_by_official||this.clearedRestMatchIds.has(e.match_id);for(const o of[e.red_athlete_id,e.green_athlete_id]){const a=this.athletes.get(o);if(a){if(!a.weigh_in_eligible||!a.medically_cleared||this.isWithdrawn(o))throw new I(R.InvalidArgument,`SAFETY LOCK: ${a.public_display_name} has not completed Weigh-In and Medical clearance.`);if(a.matches_wrestled_today>=this.dailyMatchCap)throw new I(R.InvalidArgument,`NFHS DAILY CAP LOCK (REQ-SCH-04): ${a.public_display_name} has already wrestled ${a.matches_wrestled_today}/${this.dailyMatchCap} matches today.`);if(a.prior_day_matches+a.matches_wrestled_today>=this.consecutiveTwoDayCap)throw new I(R.InvalidArgument,`NFHS TWO-DAY CAP LOCK (REQ-SCH-04): ${a.public_display_name} has reached the 10-match consecutive two-day limit.`);if(!s&&a.last_bout_ended_ms>0){const l=t-a.last_bout_ended_ms;if(l<this.requiredRestMs){const c=Math.ceil((this.requiredRestMs-l)/6e4);throw new I(R.InvalidArgument,`NFHS 30-MIN REST LOCK (REQ-SCH-03): ${a.public_display_name} requires ${c} more minute(s) of mandatory recovery before starting.`)}}}}const n=[...this.bouts.values()].filter(o=>!o.is_bye&&!(o.lifecycle===$.ResultAccepted||le(o))&&!this.isBoutCapBlocked(o)).map(o=>o.round_index),i=n.length>0?Math.min(...n):e.round_index;if(e.round_index>i)throw new Error(`ROUND ORDER LOCK: Complete round ${i} across all weight classes before starting round ${e.round_index}.`)}clearAthleteRestWindowForTesting(e){const t=this.athletes.get(e);t&&(t.last_bout_ended_ms=this.now()-2100*1e3,this.publishAndSave())}getAthleteRestStatus(e,t=this.now()){const s=this.athletes.get(e);if(!s||s.last_bout_ended_ms<=0)return{restLocked:!1,remainingMs:0,remainingMinutes:0,lastBoutEndedMs:0,readyAtMs:0};const n=t-s.last_bout_ended_ms,i=s.last_bout_ended_ms+this.requiredRestMs;if(n>=this.requiredRestMs)return{restLocked:!1,remainingMs:0,remainingMinutes:0,lastBoutEndedMs:s.last_bout_ended_ms,readyAtMs:i};const o=this.requiredRestMs-n;return{restLocked:!0,remainingMs:o,remainingMinutes:Math.ceil(o/6e4),lastBoutEndedMs:s.last_bout_ended_ms,readyAtMs:i}}clearBoutRestLock(e){const t=this.bouts.get(e);if(!t)return;this.clearedRestMatchIds.add(e),t.rest_lock_cleared_by_official=!0;const s=this.now();for(const n of[t.red_athlete_id,t.green_athlete_id]){if(!n)continue;const i=this.athletes.get(n);i&&(i.last_bout_ended_ms=0,i.updated_at_ms=s)}t.assigned_mat_id>0&&this.promoteMatReadyBout(t.assigned_mat_id,s),this.publishAndSave()}getBoutRestStatus(e,t=this.now()){const s=this.bouts.get(e);if(!s||s.rest_lock_cleared_by_official||this.clearedRestMatchIds.has(e))return{restLocked:!1,remainingMs:0,remainingMinutes:0,readyAtMs:0,restingAthleteNames:[],restingAthletes:[]};const n=[];let i=0,o=0;for(const a of[s.red_athlete_id,s.green_athlete_id]){if(!a)continue;const l=this.getAthleteRestStatus(a,t);if(l.restLocked){const c=this.athletes.get(a);n.push({athleteId:a,name:c?.public_display_name??a,remainingMs:l.remainingMs,remainingMinutes:l.remainingMinutes}),l.remainingMs>i&&(i=l.remainingMs),l.readyAtMs>o&&(o=l.readyAtMs)}}return{restLocked:n.length>0,remainingMs:i,remainingMinutes:Math.ceil(i/6e4),readyAtMs:o,restingAthleteNames:n.map(a=>a.name),restingAthletes:n}}dispatchNextAvailableBoutsToMats(e=this.now()){this.advanceScratches(e)&&this.publishAndSave();const t=Array.from(this.bouts.values()).filter(c=>!c.is_bye&&!(c.lifecycle===$.ResultAccepted||le(c))&&!this.isBoutCapBlocked(c));if(t.length===0)return{stagedBouts:[],restingBouts:[]};const s=Math.min(...t.map(c=>c.round_index)),n=new Set,i=new Set;for(const c of t)(c.lifecycle===$.Ready||c.lifecycle===$.InProgress)&&(i.add(c.assigned_mat_id),c.red_athlete_id&&n.add(c.red_athlete_id),c.green_athlete_id&&n.add(c.green_athlete_id));const o=t.filter(c=>c.round_index===s&&c.lifecycle===$.Assigned&&!!(c.red_athlete_id&&c.green_athlete_id)).sort(Bn),a=[],l=[];for(const c of o){if(n.has(c.red_athlete_id)||n.has(c.green_athlete_id))continue;const x=this.getBoutRestStatus(c.match_id,e);if(x.restLocked){l.push({bout:c,remainingMinutes:x.remainingMinutes,restingNames:x.restingAthletes.map(u=>u.name)});continue}let d=!i.has(c.assigned_mat_id)&&this.mats.has(c.assigned_mat_id)?c.assigned_mat_id:0;if(!d){for(const u of this.mats.keys())if(!i.has(u)){d=u;break}}if(d)try{const u=this.assignBoutToMat(c.match_id,d,"READY",e);a.push(u),i.add(d),n.add(c.red_athlete_id),n.add(c.green_athlete_id)}catch{}}return{stagedBouts:a,restingBouts:l}}validateConfirmedResult(e,t,s,n,i){if(!t||![e.red_athlete_id,e.green_athlete_id].includes(t)||!["FALL","TF","MD","DEC","FORFEIT","MEDICAL_FORFEIT","INJURY_DEFAULT","DQ"].includes(s)||!Number.isSafeInteger(n)||n<0||n>1e3||!Number.isSafeInteger(i)||i<0||i>1e3)throw new Error("Invalid confirmed result");if(["DEC","MD","TF"].includes(s)&&(t===e.red_athlete_id?n<i:i<n))throw new Error("Confirmed winner contradicts the score")}recordMatsideConfirmedResult(e,t,s,n,i,o=1,a=this.now()){const l=this.bouts.get(e);if(!l)throw new I(R.InvalidArgument,`Unknown bout: ${e}`);if(o<l.authority_epoch)throw new I(R.EpochFencedOldEvent,`Rejected Android matside result from stale authority_epoch ${o} < ${l.authority_epoch}`);if(this.validateConfirmedResult(l,t,s,n,i),l.lifecycle===$.ResultAccepted){if(l.winner_athlete_id===t&&l.win_type===s&&l.red_score===n&&l.green_score===i)return l;throw new Error("Accepted results require the correction workflow")}this.acceptBoutResult(l,t,s,n,i,a),this.advanceScratches(a);for(let c=1;c<=this.matCount;c++)this.promoteMatReadyBout(c,a);return this.publishAndSave(),l}isWithdrawn(e){const t=this.athletes.get(e)?.check_in_stage;return t===Q.Withdrawn||t===Q.Scratched}scheduledBoutsForAthlete(e){return[...this.bouts.values()].filter(t=>!t.is_bye&&t.lifecycle!==$.ResultAccepted&&(t.red_athlete_id===e||t.green_athlete_id===e))}isUnstartedBout(e){return e.lifecycle<=$.Ready&&!e.clock_running&&!e.red_score&&!e.green_score&&!e.completed_at_ms&&!e.winner_athlete_id&&e.period_number===1&&e.clock_remaining_ms===this.rulesBundle.period_1_duration_ms}rememberScratchResult(e,t){const s=this.scratches.get(e)??{priorForfeits:[],results:[]};s.results.push({...t}),this.scratches.set(e,s)}advanceScratches(e){let t=!1;for(;;){const s=[...this.bouts.values()].find(o=>!o.is_bye&&this.isUnstartedBout(o)&&(o.lifecycle===$.Assigned||o.lifecycle===$.Ready)&&o.red_athlete_id&&o.green_athlete_id&&(this.isWithdrawn(o.red_athlete_id)||this.isWithdrawn(o.green_athlete_id)));if(!s)return t;const n=this.isWithdrawn(s.red_athlete_id),i=this.isWithdrawn(s.green_athlete_id);n&&i&&(s.is_bye=!0),s.assignment_revision++,this.acceptBoutResult(s,n&&i?"":n?s.green_athlete_id:s.red_athlete_id,s.is_bye?"BYE":"FORFEIT",0,0,e),n&&this.rememberScratchResult(s.red_athlete_id,s),i&&this.rememberScratchResult(s.green_athlete_id,s),t=!0}}acceptBoutResult(e,t,s,n,i,o){const a=t?t===e.red_athlete_id?e.green_athlete_id:e.red_athlete_id:"";e.red_score=n,e.green_score=i,e.winner_athlete_id=t,e.loser_athlete_id=a,e.win_type=s,e.clock_running=!1,e.clock_remaining_ms=s==="FALL"?e.clock_remaining_ms:0,e.completed_at_ms=o,e.lifecycle=$.ResultAccepted,this.clearedRestMatchIds.delete(e.match_id),delete e.rest_lock_cleared_by_official;for(const l of[e.red_athlete_id,e.green_athlete_id]){const c=this.athletes.get(l);c&&s!=="FORFEIT"&&s!=="MEDICAL_FORFEIT"&&s!=="BYE"&&(c.matches_wrestled_today+=1,c.last_bout_ended_ms=o,c.updated_at_ms=o)}e.winner_next_match_id&&this.advanceParticipantToDownstream(e.winner_next_match_id,t,e.match_id),e.loser_next_match_id&&!this.isWithdrawn(a)&&s!=="DQ"&&s!=="MEDICAL_FORFEIT"&&this.advanceParticipantToDownstream(e.loser_next_match_id,a,e.match_id),this.resolveCompletedByesForBracket(e.bracket_id,o)}detectCoachConflicts(){const e=Array.from(this.bouts.values()).filter(n=>n.lifecycle===$.InProgress||n.lifecycle===$.Ready),t=new Set,s=[];for(let n=0;n<e.length;n++)for(let i=n+1;i<e.length;i++){const o=e[n],a=e[i];if(o.assigned_mat_id===a.assigned_mat_id)continue;const l=[this.athletes.get(o.red_athlete_id),this.athletes.get(o.green_athlete_id)].filter(Boolean),c=[this.athletes.get(a.red_athlete_id),this.athletes.get(a.green_athlete_id)].filter(Boolean),[x,d]=o.match_id<=a.match_id?[o.match_id,a.match_id]:[a.match_id,o.match_id];for(const u of l)for(const _ of c)if(u&&_&&u.team_id&&u.team_id===_.team_id){const p=`${u.team_id}:${x}:${d}`;if(t.has(p))continue;t.add(p),s.push({team_id:u.team_id,team_name:u.team_name,first_match_id:o.match_id,first_bout_number:o.bout_number,first_mat_id:o.assigned_mat_id,first_athlete_id:u.athlete_id,first_athlete_name:u.public_display_name,second_match_id:a.match_id,second_bout_number:a.bout_number,second_mat_id:a.assigned_mat_id,second_athlete_id:_.athlete_id,second_athlete_name:_.public_display_name})}}return s}previewCorrectionImpact(e){const t=this.bouts.get(e);if(!t)throw new I(R.InvalidArgument,`Unknown match_id: ${e}`);const s=[],n=[];let i=!0;const o=[];t.winner_next_match_id&&o.push(t.winner_next_match_id),t.loser_next_match_id&&o.push(t.loser_next_match_id);const a=new Set;for(;o.length>0;){const l=o.shift();if(!l||a.has(l))continue;a.add(l);const c=this.bouts.get(l);c&&(s.push(c.match_id),c.lifecycle===$.InProgress?(n.push(c.match_id),i=!1):![$.PendingUpstream,$.Assigned,$.Ready].includes(c.lifecycle)&&!(c.lifecycle===$.ResultAccepted&&c.is_bye)&&(i=!1),c.winner_next_match_id&&o.push(c.winner_next_match_id),c.loser_next_match_id&&o.push(c.loser_next_match_id))}return{target_match_id:e,bout_number:t.bout_number,affected_downstream_matches:s,active_matches_requiring_halt:n,safe_to_auto_apply:i}}resetUnstartedResult(e,t,s){s||(e.red_athlete_id="",e.green_athlete_id=""),this.clearedRestMatchIds.delete(e.match_id),delete e.rest_lock_cleared_by_official,Object.assign(e,{winner_athlete_id:"",loser_athlete_id:"",is_bye:!1,lifecycle:t,red_score:0,green_score:0,win_type:"",completed_at_ms:0,period_number:1,clock_running:!1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,assignment_revision:e.assignment_revision+1})}reinstateAthlete(e){const t=e.athlete_id,s=d=>new Error(`Ask the tournament director to review bout ${d.bout_number} before reinstatement.`),n=this.scratches.get(t),i=n?.results??[],o=this.forfeitsForAthlete(t).find(d=>!n?.priorForfeits.includes(d.match_id)&&!i.some(u=>u.match_id===d.match_id));if(o)throw s(o);if(i.length&&this.consoleRole!=="primary")throw new Error("Ask the primary official to reopen the scratch results.");const a=new Map,l=new Set;for(const d of i){const u=this.bouts.get(d.match_id);if(!u||u.is_bye||u.lifecycle!==$.ResultAccepted||u.win_type!=="FORFEIT"||u.loser_athlete_id!==t||u.winner_athlete_id!==d.winner_athlete_id||u.red_athlete_id!==d.red_athlete_id||u.green_athlete_id!==d.green_athlete_id||u.bracket_id!==d.bracket_id||u.winner_next_match_id!==d.winner_next_match_id||u.loser_next_match_id!==d.loser_next_match_id||u.assignment_revision!==d.assignment_revision||u.completed_at_ms!==d.completed_at_ms||u.red_score||u.green_score||u.clock_running||this.isWithdrawn(u.winner_athlete_id))throw s(u??d);a.set(u.match_id,{...u});for(const _ of this.previewCorrectionImpact(u.match_id).affected_downstream_matches)l.add(_)}const c=new Set([...a.keys(),...l]);for(const d of c){const u=this.bouts.get(d);for(const p of[u.winner_next_match_id,u.loser_next_match_id])if(p&&this.bouts.get(p)?.bracket_id!==u.bracket_id)throw s(u);if(a.has(d))continue;const _=u.is_bye&&u.lifecycle===$.ResultAccepted&&(u.win_type==="BYE"||u.is_true_second_challenge&&u.win_type==="DEC")&&!u.clock_running&&!u.red_score&&!u.green_score;if(!this.isUnstartedBout(u)&&!_)throw s(u)}const x=this.now();if(e.check_in_stage=Q.Arrived,e.weigh_in_eligible=!1,e.updated_at_ms=x,this.scratches.delete(t),!!a.size){for(const d of c){const u=this.bouts.get(d),_=l.has(d);this.resetUnstartedResult(u,_?$.PendingUpstream:$.Assigned,!_||u.format===J.BestOfThree)}this.refillDownstreamBouts(l);for(const d of new Set([...a.values()].map(u=>u.bracket_id)))this.resolveCompletedByesForBracket(d,x);for(const d of this.mats.keys())this.promoteMatReadyBout(d,x);for(const d of a.values())this.resultCorrections.push({before:d,after:{...this.bouts.get(d.match_id)},reason:"Reinstated wrestler after scratch.",atMs:x,affected:this.previewCorrectionImpact(d.match_id).affected_downstream_matches})}}correctAcceptedResult(e){if(this.consoleRole!=="primary")throw new Error("Only the primary head table may correct results");const t=this.bouts.get(e.matchId);if(!t||t.is_bye||!le(t))throw new Error("Correction requires an accepted contested result");if(oe.normalizeSyncedWinType(t.win_type)==="FORFEIT"!=(e.winType==="FORFEIT"))throw new Error("Correction cannot change forfeit participation");if(!e.reason.trim()||![t.red_athlete_id,t.green_athlete_id].includes(e.winnerAthleteId)||!["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"].includes(e.winType)||!Number.isSafeInteger(e.redScore)||e.redScore<0||e.redScore>1e3||!Number.isSafeInteger(e.greenScore)||e.greenScore<0||e.greenScore>1e3)throw new Error("Invalid result correction");vo(e.winType,e.winnerAthleteId===t.red_athlete_id?e.redScore-e.greenScore:e.greenScore-e.redScore);const s=this.previewCorrectionImpact(e.matchId);if(!s.safe_to_auto_apply)throw new Error("Downstream bouts already progressed; correction requires physical halt and director review");const n=structuredClone(t),i=new Set(s.affected_downstream_matches),o=new Set([t.assigned_mat_id]);t.lifecycle!==$.ResultAccepted?this.acceptBoutResult(t,e.winnerAthleteId,e.winType,e.redScore,e.greenScore,t.completed_at_ms||this.now()):Object.assign(t,{winner_athlete_id:e.winnerAthleteId,loser_athlete_id:e.winnerAthleteId===t.red_athlete_id?t.green_athlete_id:t.red_athlete_id,win_type:e.winType,red_score:e.redScore,green_score:e.greenScore}),t.assignment_revision++;for(const l of i){const c=this.bouts.get(l);o.add(c.assigned_mat_id),this.resetUnstartedResult(c,$.PendingUpstream,c.format===J.BestOfThree)}const a=this.now();this.refillDownstreamBouts(i),this.resolveCompletedByesForBracket(t.bracket_id,a);for(const l of o)l>0&&this.promoteMatReadyBout(l,a);return this.resultCorrections.push({before:n,after:structuredClone(t),reason:e.reason.trim(),atMs:a,affected:[...i]}),this.publishAndSave(),t}transferMatAuthority(e){if(e.reason==="TIMEOUT_ONLY_INVALID")throw new I(R.TimeoutTakeoverForbidden,"Timeout-only authority takeover is forbidden (REQ-AUTH-08).");if(!e.oldDevicePhysicallyStopped||!e.timersInitializedStopped)throw new I(R.InvalidArgument,"Old Android scoring device must be physically stopped and all handoff timers must initialize stopped (REQ-AUTH-10).");const t=this.mats.get(e.matId);if(!t)throw new I(R.InvalidArgument,`Unknown Mat ${e.matId}`);const s=t.authority_epoch+1,n=e.newAndroidDeviceId.trim()||t.android_device_id,i=e.newOperatorName.trim()||t.operator_name;let o=e.subjectPubkeyHex?.trim().toLowerCase()??"";if(!/^[a-f0-9]{64}$/i.test(o))throw new Error("A device-generated Ed25519 public key is required");t.certificate_id&&this.revokedCertificateIds.add(t.certificate_id);const a=this.buildSignedMatDelegation(e.matId,n,i,s,o,this.now());this.registerMatDelegation(a),this.mats.set(e.matId,a),this.syncVenueRoomRouter();for(const l of this.bouts.values())l.assigned_mat_id===e.matId&&l.lifecycle!==$.ResultAccepted&&(l.authority_epoch=a.authority_epoch,l.delegated_android_device_id=a.android_device_id,l.clock_running=!1);return this.publishAndSave(),a}getTournamentJoinQrUri(e=Vt()){if(this.linkedVenueJoinQrUri&&(e===Vt()||e===this.activeVenueOrigin)){const s=es(this.linkedVenueJoinQrUri);if(s.valid&&s.payload&&(!this.tournamentId||s.payload.tournament_id===this.tournamentId||this.athletes.size===0))return this.linkedVenueJoinQrUri}const t=Sl({tournamentId:this.tournamentId,tournamentName:this.tournamentName,rulesVersion:this.rulesVersion,publisherPubkeyHex:this.publisherPublicKeyHex,relayOrigin:e,issuedAtMs:this.now(),rootPrivateKey:this.keyPair.privateKey});return Il(t)}async refreshVenueBootstrap(e=this.activeVenueOrigin,t){if(!(typeof fetch>"u"||!e))try{const s=e.trim().replace(/\/+$/,"");if(/github\.io$/i.test(new URL(s).hostname))return;const n=AbortSignal.timeout(3500),i=await fetch(`${s}/api/openmat-join-bootstrap`,{signal:t?AbortSignal.any([t,n]):n});if(!i.ok)return;const o=await i.json();if(t?.aborted)return;const a=(o.joinQrUri||o.qr_uri||"").trim(),l=es(a);if(l.valid&&l.payload){let c=!1;this.linkedVenueJoinQrUri!==a&&(this.linkedVenueJoinQrUri=a,c=!0);const x=l.payload.publisher_pubkey_hex.toLowerCase(),d=!!(x&&x!==this.publisherPublicKeyHex.toLowerCase());d!==this.hasExternalVenueServer&&(this.hasExternalVenueServer=d,c=!0),d&&this.linkedVenuePubkeyHex!==x&&(this.linkedVenuePubkeyHex=x,c=!0),c&&this.onStateChanged?.()}}catch{}}getTournamentJoinQrSvg(e=Vt()){return kt(this.getTournamentJoinQrUri(e))}getActiveSharePubkeyHex(){return this.linkedVenuePubkeyHex||this.publisherPublicKeyHex}getPublicPlayerWebUrl(e=oe.DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL){const t=e.trim().replace(/\/+$/,""),s=this.getActiveSharePubkeyHex();return s?`${t}/?${s}`:`${t}/`}getPublicOfficialsWebUrl(e=oe.DEFAULT_PUBLIC_OFFICIALS_WEB_BASE_URL){const t=e.trim().replace(/\/+$/,""),s=this.getActiveSharePubkeyHex();return s?`${t}/?${s}`:`${t}/`}getLocalWifiPlayerWebUrl(e=this.activeVenueOrigin){try{const t=new URL("/",e),s=this.getActiveSharePubkeyHex();return s?`${t.href}?${s}`:t.href}catch{return`${e.replace(/\/+$/,"")}/?${this.getActiveSharePubkeyHex()}`}}getLocalWifiOfficialsWebUrl(e=this.activeVenueOrigin){try{const t=new URL("/officials/",e),s=this.getActiveSharePubkeyHex();return s?`${t.href}?${s}`:t.href}catch{return`${e.replace(/\/+$/,"")}/officials/?${this.getActiveSharePubkeyHex()}`}}getPublicPlayerWebQrSvg(e=oe.DEFAULT_PUBLIC_PLAYER_WEB_BASE_URL){return kt(this.getPublicPlayerWebUrl(e))}getPublicOfficialsWebQrSvg(e=oe.DEFAULT_PUBLIC_OFFICIALS_WEB_BASE_URL){return kt(this.getPublicOfficialsWebUrl(e))}getLocalWifiSelfRegisterWebUrl(e=this.activeVenueOrigin){const t=e.trim().replace(/\/+$/,""),s=`${t}/register`;return Ji({baseRegisterUrl:s,tournamentId:this.tournamentId,tournamentName:this.tournamentName,defaultDivision:ie.defaultDivision,apiOrigin:/github\.io$/i.test(t)?void 0:t})}getPublicSelfRegisterWebUrl(e=oe.DEFAULT_PUBLIC_REGISTER_WEB_BASE_URL){const t=this.activeVenueOrigin.trim().replace(/\/+$/,""),s=!!t&&!/github\.io$/i.test(t);return Ji({baseRegisterUrl:e,tournamentId:this.tournamentId,tournamentName:this.tournamentName,defaultDivision:ie.defaultDivision,apiOrigin:s?t:void 0})}getSelfRegisterPosterUrl(){const e=this.activeVenueOrigin.trim().replace(/\/+$/,"");return e&&!/github\.io$/i.test(e)?this.getLocalWifiSelfRegisterWebUrl(e):this.getPublicSelfRegisterWebUrl()}getSelfRegisterPosterQrSvg(e=this.getSelfRegisterPosterUrl()){return kt(e)}signProjectionNostrEvent(e=this.buildSignedPublicProjection()){const t=Oe(this.keyPair.privateKey.slice(0,32)),s=_e(Vi.getPublicKey(t)).toLowerCase(),n=Math.floor(this.now()/1e3),i=[["d",`openmat:${e.tournament_id}`],["x",`openmat-proj:${e.tournament_id}`],["x",`openmat-pub:${e.publisher_pubkey_hex.toLowerCase()}`],["x","openmat:v1"]];this.linkedVenuePubkeyHex&&this.linkedVenuePubkeyHex.toLowerCase()!==e.publisher_pubkey_hex.toLowerCase()&&i.push(["x",`openmat-pub:${this.linkedVenuePubkeyHex.toLowerCase()}`]);const o=JSON.stringify(e),a=JSON.stringify([0,s,n,30078,i,o]),l=Oe(new TextEncoder().encode(a)),c=_e(l),x=_e(Vi.sign(l,t));return{id:c,pubkey:s,created_at:n,kind:30078,tags:i,content:o,sig:x}}pendingNostrProjections=new Map;nostrUploads=new Set;publishProjectionToPublicNostrRelays(e=this.buildSignedPublicProjection()){if(typeof window>"u"||typeof WebSocket>"u"||!this.broadcastEnabled||this.isSeeding||this.liveConsoleRole!=="primary")return;const t=this.signProjectionNostrEvent(e),s={id:t.id,frame:JSON.stringify(["EVENT",t])};for(const n of this.publicNostrRelays)(window.location?.protocol!=="https:"||n.startsWith("wss:"))&&this.pendingNostrProjections.set(n,s);this.flushPublicNostrProjections()}flushPublicNostrProjections(){if(this.liveConsoleRole==="primary"){for(const[e,t]of this.pendingNostrProjections)if(!this.nostrUploads.has(e)){this.nostrRelayStatuses.set(e,"CONNECTING");try{const s=new WebSocket(e);this.nostrUploads.add(e);const n=setTimeout(()=>s.close(),6e3);let i=!1;s.onopen=()=>{try{s.send(t.frame)}catch{s.close()}},s.onmessage=({data:o})=>{try{const a=JSON.parse(String(o));if(a[0]!=="OK"||a[1]!==t.id)return;i=a[2]===!0||String(a[3]).startsWith("duplicate:"),i&&(this.pendingNostrProjections.get(e)===t&&this.pendingNostrProjections.delete(e),this.lastNostrPublishedAtMs=this.now()),s.close()}catch{}},s.onerror=()=>s.close(),s.onclose=()=>{clearTimeout(n),this.nostrUploads.delete(e),this.nostrRelayStatuses.set(e,i?"CONNECTED":"OFFLINE"),this.onStateChanged?.(),i&&this.flushPublicNostrProjections()}}catch{this.nostrRelayStatuses.set(e,"OFFLINE")}}}}static normalizeSyncedWinType(e){const t=(e??"").trim().toUpperCase();return t==="DECISION"?"DEC":t==="MAJOR_DECISION"?"MD":t==="TECHNICAL_FALL"?"TF":t==="DISQUALIFICATION"?"DQ":t==="MEDICAL_FORFEIT"?"FORFEIT":t==="PIN"||t==="PIN_FALL"?"FALL":t}propagateEndedBoutDownstream(e,t=this.now()){e.winner_athlete_id&&(e.loser_athlete_id||(e.loser_athlete_id=e.winner_athlete_id===e.red_athlete_id?e.green_athlete_id:e.red_athlete_id),e.win_type=oe.normalizeSyncedWinType(e.win_type)||"DEC",e.winner_next_match_id&&this.advanceParticipantToDownstream(e.winner_next_match_id,e.winner_athlete_id,e.match_id),e.loser_next_match_id&&e.loser_athlete_id&&!this.isWithdrawn(e.loser_athlete_id)&&this.advanceParticipantToDownstream(e.loser_next_match_id,e.loser_athlete_id,e.match_id),this.resolveCompletedByesForBracket(e.bracket_id,e.completed_at_ms||t))}adoptExternalProjectionIfEmpty(e){if(!oe.verifySignedPublicProjection(e)||(e.publisher_pubkey_hex&&e.publisher_pubkey_hex!==this.publisherPublicKeyHex&&(this.linkedVenuePubkeyHex=e.publisher_pubkey_hex.toLowerCase()),this.athletes.size>0||this.bouts.size>0))return!1;let t=!1;const s=this.isSeeding;this.isSeeding=!0;try{this.tournamentId=e.tournament_id||this.tournamentId,this.tournamentName=e.tournament_name||this.tournamentName,this.rulesVersion=e.rules_version||this.rulesVersion,this.growthAllowanceTenths=e.growth_allowance_tenths??this.growthAllowanceTenths,this.consecutiveDayAllowanceTenths=e.consecutive_day_allowance_tenths??this.consecutiveDayAllowanceTenths,e.mat_count>=1&&e.mat_count<=Ye&&(this.matCount=e.mat_count);for(const i of e.athletes??[])this.athletes.set(i.athlete_id,structuredClone(i));for(const i of e.bouts??[])this.bouts.set(i.match_id,structuredClone(i));this.nextBoutNumber=1+Math.max(100,...Array.from(this.bouts.values()).map(i=>i.bout_number||100));for(const i of e.mats??[])i&&typeof i.mat_id=="number"&&this.mats.set(i.mat_id,structuredClone(i));for(const[i,o]of Object.entries(e.bracket_frozen_by_class??{}))this.bracketFrozenByClass.set(i,!!o);const n=new Set;for(const i of[...this.bouts.values()].sort((o,a)=>o.bout_number-a.bout_number))if(i.lifecycle===$.LocallyConfirmed&&i.winner_athlete_id){const o=oe.normalizeSyncedWinType(i.win_type)||"DEC";[i.red_athlete_id,i.green_athlete_id].includes(i.winner_athlete_id)&&["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"].includes(o)&&(this.acceptBoutResult(i,i.winner_athlete_id,o,i.red_score,i.green_score,i.completed_at_ms||this.now()),i.assigned_mat_id>0&&n.add(i.assigned_mat_id),t=!0)}else(i.lifecycle===$.EndedLocal||i.lifecycle===$.ResultAccepted)&&i.winner_athlete_id&&!i.is_bye&&(this.propagateEndedBoutDownstream(i),i.assigned_mat_id>0&&n.add(i.assigned_mat_id));if(n.size>0){this.advanceScratches(this.now());for(const i of n)this.promoteMatReadyBout(i,this.now())}}finally{this.isSeeding=s}return t&&this.broadcastEnabled&&this.liveConsoleRole==="primary"?(this.publishAndSave(),!0):(this.saveToStorage(),this.onStateChanged?.(),!0)}syncLiveProjectionFromVenue(e,t){if(!oe.verifySignedPublicProjection(e))return!1;t?.();const s=e.publisher_pubkey_hex.toLowerCase(),n=!!s&&s!==this.publisherPublicKeyHex.toLowerCase();if(this.consoleRole!=="primary"&&n&&this.linkedVenuePubkeyHex&&this.linkedVenuePubkeyHex!==s)return!1;n&&this.liveConsoleRole==="official"&&e.tournament_id&&e.tournament_id!==this.tournamentId&&this.pendingProjectionPostCount===0&&(this.athletes.clear(),this.bouts.clear(),this.scratches.clear(),this.mats.clear(),this.bracketFrozenByClass.clear(),this.tournamentId=e.tournament_id);const i=this.athletes.size>0||this.bouts.size>0;if(i&&e.tournament_id!==this.tournamentId||n&&this.pendingProjectionPostCount>0||!n&&i&&e.snapshot_epoch<=this.snapshotEpoch)return!1;const o=!n||this.consoleRole!=="primary"&&this.linkedVenuePubkeyHex===s;let a=!1;n&&this.linkedVenuePubkeyHex!==s&&(this.linkedVenuePubkeyHex=s,a=!0);const l=`${e.tournament_id}:${s}`,c=this.lastSyncedVenueEpochByPublisher.get(l)??0;if(typeof e.snapshot_epoch=="number"&&e.snapshot_epoch<c)return!1;if(typeof e.snapshot_epoch=="number"&&e.snapshot_epoch>c&&this.lastSyncedVenueEpochByPublisher.set(l,e.snapshot_epoch),this.athletes.size===0&&this.bouts.size===0)return this.adoptExternalProjectionIfEmpty(e);if(e.tournament_id&&e.tournament_id!==this.tournamentId)return!1;let x=a,d=!1;const u=new Set,_=this.isSeeding;this.isSeeding=!0;try{for(const h of e.mats??[]){if(!h||typeof h.mat_id!="number")continue;const m=this.mats.get(h.mat_id);(!m||!m.certificate_id&&h.certificate_id||h.authority_epoch>m.authority_epoch||h.last_heartbeat_ms>m.last_heartbeat_ms)&&(this.mats.set(h.mat_id,structuredClone(h)),x=!0)}if(o)for(const h of e.athletes){const m=this.athletes.get(h.athlete_id);m&&h.updated_at_ms>=m.updated_at_ms&&(m.check_in_stage!==h.check_in_stage||m.weigh_in_eligible!==h.weigh_in_eligible||m.medically_cleared!==h.medically_cleared)&&(m.check_in_stage=h.check_in_stage,m.weigh_in_eligible=h.weigh_in_eligible,m.medically_cleared=h.medically_cleared,m.updated_at_ms=h.updated_at_ms,x=!0)}const p=[...e.bouts??[]].sort((h,m)=>h.bout_number-m.bout_number);if(n&&this.pendingProjectionPostCount===0&&p.length>0){const h=new Set(p.map(E=>E.match_id)),m=new Set([...this.bouts.values()].filter(E=>this.drawLocked(E)).map(E=>E.bracket_id));for(const[E,F]of this.bouts.entries())!h.has(E)&&(this.liveConsoleRole==="official"||!m.has(F.bracket_id))&&F.lifecycle<$.InProgress&&F.red_score===0&&F.green_score===0&&!F.clock_running&&(this.liveConsoleRole==="official"||p.some(g=>g.division_id===F.division_id&&g.weight_class_id===F.weight_class_id))&&(this.bouts.delete(E),x=!0)}for(const h of p){const m=this.bouts.get(h.match_id);if(!m){if(this.deletedMatchIds.has(h.match_id)&&this.liveConsoleRole==="primary")continue;if(this.pendingProjectionPostCount===0){const C=structuredClone(h);if(this.bouts.set(C.match_id,C),C.lifecycle===$.LocallyConfirmed&&C.winner_athlete_id){const B=oe.normalizeSyncedWinType(C.win_type)||"DEC";[C.red_athlete_id,C.green_athlete_id].includes(C.winner_athlete_id)&&["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"].includes(B)&&(this.acceptBoutResult(C,C.winner_athlete_id,B,C.red_score,C.green_score,C.completed_at_ms||this.now()),C.assigned_mat_id>0&&u.add(C.assigned_mat_id),d=!0)}else(C.lifecycle===$.EndedLocal||C.lifecycle===$.ResultAccepted)&&C.winner_athlete_id&&!C.is_bye&&(this.propagateEndedBoutDownstream(C),C.assigned_mat_id>0&&u.add(C.assigned_mat_id));x=!0}continue}const E=h.assignment_revision??1;if(E<m.assignment_revision)continue;if(o&&E>m.assignment_revision&&h.lifecycle<=$.Ready&&(this.isUnstartedBout(m)||m.lifecycle===$.ResultAccepted&&(m.is_bye||m.win_type==="FORFEIT"))){this.bouts.set(h.match_id,structuredClone(h)),h.rest_lock_cleared_by_official||this.clearedRestMatchIds.delete(h.match_id),x=!0;continue}if(h.lifecycle===$.LocallyConfirmed&&m.lifecycle<$.ResultAccepted&&h.winner_athlete_id){const C=oe.normalizeSyncedWinType(h.win_type)||"DEC";if([m.red_athlete_id||h.red_athlete_id,m.green_athlete_id||h.green_athlete_id].includes(h.winner_athlete_id)&&["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"].includes(C)){!m.red_athlete_id&&h.red_athlete_id&&(m.red_athlete_id=h.red_athlete_id),!m.green_athlete_id&&h.green_athlete_id&&(m.green_athlete_id=h.green_athlete_id),m.period_number=h.period_number||m.period_number,this.acceptBoutResult(m,h.winner_athlete_id,C,h.red_score,h.green_score,h.completed_at_ms||this.now()),m.assigned_mat_id>0&&u.add(m.assigned_mat_id),d=!0,x=!0;continue}}if(h.lifecycle===$.ResultAccepted){const C=oe.normalizeSyncedWinType(h.win_type)||h.win_type;m.lifecycle<$.ResultAccepted?(!m.red_athlete_id&&h.red_athlete_id&&(m.red_athlete_id=h.red_athlete_id),!m.green_athlete_id&&h.green_athlete_id&&(m.green_athlete_id=h.green_athlete_id),!h.is_bye&&h.winner_athlete_id&&this.acceptBoutResult(m,h.winner_athlete_id,C||"DEC",h.red_score,h.green_score,h.completed_at_ms||this.now()),this.bouts.set(h.match_id,structuredClone({...h,win_type:C})),h.assigned_mat_id>0&&u.add(h.assigned_mat_id),x=!0):this.pendingProjectionPostCount===0&&(h.winner_athlete_id!==m.winner_athlete_id||C!==m.win_type||h.red_score!==m.red_score||h.green_score!==m.green_score)&&(this.bouts.set(h.match_id,structuredClone({...h,win_type:C})),x=!0);continue}const F=m.lifecycle===$.EndedLocal&&!!m.winner_athlete_id,g=this.pendingProjectionPostCount===0&&m.lifecycle<$.InProgress&&h.lifecycle<$.InProgress&&(!m.red_athlete_id&&!!h.red_athlete_id||!m.green_athlete_id&&!!h.green_athlete_id||!m.is_bye&&!!h.is_bye||h.assigned_mat_id===m.assigned_mat_id&&h.lifecycle>=$.Assigned&&m.lifecycle>=$.Assigned&&(h.mat_queue_order!==m.mat_queue_order||h.lifecycle!==m.lifecycle)),b=h.lifecycle>m.lifecycle||m.lifecycle>=$.InProgress&&m.lifecycle<=$.EndedLocal&&h.lifecycle>=$.Assigned&&h.lifecycle<=$.EndedLocal&&(this.pendingProjectionPostCount===0||h.lifecycle>=m.lifecycle)&&(h.lifecycle!==m.lifecycle||h.red_score!==m.red_score||h.green_score!==m.green_score||h.period_number!==m.period_number||h.clock_running!==m.clock_running||h.clock_remaining_ms!==m.clock_remaining_ms||h.winner_athlete_id!==m.winner_athlete_id||h.win_type!==m.win_type||h.mat_queue_order!==m.mat_queue_order);if(g||b){const C=h.win_type?oe.normalizeSyncedWinType(h.win_type):"",B=!!(h.rest_lock_cleared_by_official||m.rest_lock_cleared_by_official);B&&this.clearedRestMatchIds.add(h.match_id);const w=structuredClone({...h,win_type:C,...B?{rest_lock_cleared_by_official:!0}:{}});if(this.bouts.set(h.match_id,w),w.lifecycle===$.EndedLocal&&w.winner_athlete_id){const D=w.winner_next_match_id?this.bouts.get(w.winner_next_match_id):void 0,f=!!(!w.winner_next_match_id||D&&[D.red_athlete_id,D.green_athlete_id].includes(w.winner_athlete_id));this.propagateEndedBoutDownstream(w),f||(d=!0),w.assigned_mat_id>0&&u.add(w.assigned_mat_id)}else F&&!w.winner_athlete_id&&(this.revertProvisionalDownstreamAdvancement(w.match_id),d=!0);x=!0}}if(u.size>0){for(const h of[...this.bouts.values()].sort((m,E)=>m.bout_number-E.bout_number))!h.is_bye&&le(h)&&this.propagateEndedBoutDownstream(h);this.advanceScratches(this.now());for(const h of u)this.promoteMatReadyBout(h,this.now())}for(const h of e.athletes??[]){const m=this.athletes.get(h.athlete_id);m?(h.matches_wrestled_today>m.matches_wrestled_today&&(m.matches_wrestled_today=h.matches_wrestled_today,x=!0),h.last_bout_ended_ms>m.last_bout_ended_ms&&(h.updated_at_ms>=m.updated_at_ms||m.last_bout_ended_ms===0)&&(m.last_bout_ended_ms=h.last_bout_ended_ms,m.updated_at_ms=Math.max(m.updated_at_ms,h.updated_at_ms),x=!0)):(this.athletes.set(h.athlete_id,structuredClone(h)),x=!0)}if(e.ow_vote_tallies&&typeof e.ow_vote_tallies=="object"){const h={};for(const[m,E]of Object.entries(e.ow_vote_tallies))typeof E=="number"&&E>0&&(h[m]=E);JSON.stringify(h)!==JSON.stringify(this.syncedOwVoteTallies)&&(this.syncedOwVoteTallies=h,x=!0)}this.nextBoutNumber=Math.max(this.nextBoutNumber,1+Math.max(100,...Array.from(this.bouts.values()).map(h=>h.bout_number||100)))}finally{this.isSeeding=_}return d&&this.broadcastEnabled&&this.liveConsoleRole==="primary"?(this.publishAndSave(),!0):(x&&(this.saveToStorage(),this.onStateChanged?.()),x)}bootstrapFromLocationQuery(e=typeof window<"u"?window.location.search:""){typeof window<"u"&&/github\.io$/i.test(window.location.hostname)&&(this.publicNostrRelayPublishingEnabled=!0);const t=(e??"").trim();if(!t||t==="?")return{joined:!1,linkedPubkeyHex:this.linkedVenuePubkeyHex,relayOrigin:this.liveOrigin};const s=new URLSearchParams(t.startsWith("?")?t.slice(1):t);if(s.has("sr")||s.has("selfreg")){const c=typeof window<"u"&&window.location?.href?window.location.href:`https://openmat.local/officials/?${s.toString()}`,x=vn(c,this.tournamentId);if(x.valid&&x.record?.tournament_id===this.tournamentId){const d=this.stageSelfRegistration(x.record,"QR_SCAN");d.alreadyCheckedInAthlete||(this.selectedPendingSelfRegId=d.entry.registration_id)}}const n=s.get("venue")?.trim()||s.get("origin")?.trim()||"";n&&/^https?:\/\//i.test(n)&&this.setVenueOrigin(n.replace(/\/+$/,""));const i=s.get("join")?.trim()||s.get("qr")?.trim()||s.get("pubkey")?.trim()||t.replace(/^\?+/,"").trim(),o=es(i);if(!o.valid||!o.payload)return{joined:!1,linkedPubkeyHex:this.linkedVenuePubkeyHex,relayOrigin:this.liveOrigin};const a=o.payload;if(a.publisher_pubkey_hex&&a.publisher_pubkey_hex.toLowerCase()!==this.publisherPublicKeyHex.toLowerCase()&&(this.linkedVenuePubkeyHex=a.publisher_pubkey_hex.toLowerCase(),!this.hasExplicitStoredRole&&this.athletes.size===0&&this.bouts.size===0&&(this.liveConsoleRole="official"),this.liveConsoleRole==="official"&&a.tournament_id&&a.tournament_id!=="manual-pubkey"&&this.tournamentId!==a.tournament_id&&(this.athletes.clear(),this.bouts.clear(),this.scratches.clear(),this.mats.clear(),this.bracketFrozenByClass.clear())),a.relay_origin&&!/github\.io$/i.test(a.relay_origin)&&this.setVenueOrigin(a.relay_origin),a.nostr_relays?.length&&(this.publicNostrRelays=[...a.nostr_relays]),a.tournament_id&&a.tournament_id!=="manual-pubkey"&&this.athletes.size===0&&(this.tournamentId=a.tournament_id,a.tournament_name&&a.tournament_name!=="OpenMat Tournament"&&(this.tournamentName=a.tournament_name)),this.publicNostrRelayPublishingEnabled=!0,typeof window<"u"&&typeof WebSocket<"u"&&this.linkedVenuePubkeyHex){const c=`om-off-boot-${this.linkedVenuePubkeyHex.slice(0,12)}`,x={kinds:[24880,30078],"#x":[`openmat-pub:${this.linkedVenuePubkeyHex}`]};for(const d of this.publicNostrRelays)if(!(window.location?.protocol==="https:"&&!d.startsWith("wss:")))try{const u=new WebSocket(d),_=setTimeout(()=>{try{u.close()}catch{}},5e3);u.onopen=()=>{this.nostrRelayStatuses.set(d,"CONNECTED");try{u.send(JSON.stringify(["REQ",c,x]))}catch{}},u.onmessage=p=>{if(typeof p.data=="string")try{const h=JSON.parse(p.data);if(Array.isArray(h)&&h[0]==="EVENT"&&h[2]?.content){const m=JSON.parse(h[2].content);this.syncLiveProjectionFromVenue(m)}else if(Array.isArray(h)&&h[0]==="EOSE"){clearTimeout(_);try{u.close()}catch{}}}catch{}},u.onerror=()=>{clearTimeout(_);try{u.close()}catch{}}}catch{}}return{joined:!0,linkedPubkeyHex:this.linkedVenuePubkeyHex,relayOrigin:this.liveOrigin}}getMatScorekeeperQrSvg(e){const t=this.mats.get(e);if(!t)throw new I(R.InvalidArgument,`Unknown Mat ${e}`);return kt(t.scorekeeper_qr_uri)}issueMatScorekeeperCertificate(e){if(!Number.isInteger(e.matId)||e.matId<1||e.matId>this.matCount||!e.androidDeviceId.trim()||!e.operatorName.trim())throw new Error("Mat, device ID and operator are required");const t=this.mats.get(e.matId);if([...this.bouts.values()].some(l=>l.assigned_mat_id===e.matId&&[$.InProgress,$.EndedLocal,$.LocallyConfirmed].includes(l.lifecycle)))throw new Error("An active mat requires the physical-stop authority-transfer workflow");const s=t?.certificate_id?t.authority_epoch+1:1,n=e.androidDeviceId.trim()||`mat-${e.matId}-scorekeeper`,i=e.operatorName.trim()||`Table ${e.matId} Scorer`;let o=e.subjectPubkeyHex?.trim().toLowerCase()??"";if(!/^[a-f0-9]{64}$/i.test(o))throw new Error("A device-generated Ed25519 public key is required");t?.certificate_id&&this.revokedCertificateIds.add(t.certificate_id);const a=this.buildSignedMatDelegation(e.matId,n,i,s,o,this.now());this.registerMatDelegation(a),this.mats.set(e.matId,a),this.syncVenueRoomRouter();for(const l of this.bouts.values())l.assigned_mat_id===e.matId&&l.lifecycle!==$.ResultAccepted&&(l.authority_epoch=a.authority_epoch,l.delegated_android_device_id=a.android_device_id);return this.publishAndSave(),a}revokeMatScorekeeperCertificate(e){this.revokedCertificateIds.add(e.trim()),this.saveToStorage()}validateScorekeeperQrOrCert(e,t,s=!1){const n=typeof e=="string"?e.trim():"";if(!n)return{valid:!1,reason:"Empty scorekeeper QR URI or certificate hex",tournamentIdMatch:!1,signatureValid:!1,notExpired:!1,notRevoked:!1,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1};let i,o=this.tournamentId,a=this.publisherPublicKeyHex;if(n.startsWith("openmat://scorekeeper-auth")){const g=Ml(n);if(!g.valid||!g.bundle)return{valid:!1,reason:g.reason,tournamentIdMatch:!1,signatureValid:!1,notExpired:!1,notRevoked:!1,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1};i=g.bundle.certificate,o=g.bundle.tournament_id,a=g.bundle.publisher_pubkey_hex}else try{i=Gt(n)}catch(g){return{valid:!1,reason:`Malformed certificate CBOR hex: ${String(g)}`,tournamentIdMatch:!1,signatureValid:!1,notExpired:!1,notRevoked:!1,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1}}const l=i.tournament_id===this.tournamentId&&o===this.tournamentId&&a.toLowerCase()===this.publisherPublicKeyHex.toLowerCase();if(!l)return{valid:!1,reason:`Tournament mismatch: certificate is for '${i.tournament_id}', expected '${this.tournamentId}'`,tournamentIdMatch:!1,signatureValid:!1,notExpired:!0,notRevoked:!0,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1,certificate:i};const c=!this.revokedCertificateIds.has(i.certificate_id);if(!c)return{valid:!1,reason:`Certificate ${i.certificate_id} has been revoked by tournament authority`,tournamentIdMatch:!0,signatureValid:!0,notExpired:!0,notRevoked:!1,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1,certificate:i};let x=!1,d=!1;try{Ts(i,this.keyPair.publicKey,this.now(),s),x=!0,d=!0}catch(g){const b=g instanceof I&&g.code===R.CertificateExpired;return{valid:!1,reason:g instanceof Error?g.message:String(g),tournamentIdMatch:!0,signatureValid:b,notExpired:!b,notRevoked:!0,matAuthorized:!1,epochCurrent:!1,scopesAllowed:!1,certificate:i}}const u=Ne.ScoreMat|Ne.ConfirmLocalResult,_=i.role===xt.MatOperator&&(i.allowed_scopes&u)===u,p=i.assigned_mat_id>=1&&i.assigned_mat_id<=this.matCount&&(t===void 0||i.assigned_mat_id===t),h=this.mats.get(i.assigned_mat_id),m=h?i.authority_generation===h.authority_epoch:!1,E=l&&x&&d&&c&&_&&p&&m;let F=`Authorized Scorekeeper '${i.subject_key_id}' verified for ${this.tournamentName} · Mat ${i.assigned_mat_id} (Epoch #${i.authority_generation})`;return _?p?m||(F=`Stale authority epoch #${i.authority_generation} (Mat ${i.assigned_mat_id} is currently on epoch #${h?.authority_epoch??"?"})`):F=`Scorekeeper is assigned to Mat ${i.assigned_mat_id}, not Mat ${t}`:F="Unauthorized role or missing ScoreMat / ConfirmLocalResult scope bits",{valid:E,reason:F,tournamentIdMatch:l,signatureValid:x,notExpired:d,notRevoked:c,matAuthorized:p,epochCurrent:m,scopesAllowed:_,certificate:i}}simActive=!1;simPhase="Idle (Manual Officials Mode)";simStepCursor=0;simTotalSteps=0;simSignedEventsProcessed=0;simSpectatorNodes=40;simBleacherDeliveries=0;simLatestEventSummary="Ready to load C++ OpenMat-Sim campaign trace.";simLatestEventIdHex="";simCppSnapshotReady=!1;simCppPublisherKeyHex="";simTelemetryLog=[];simActionQueue=[];generateCppCompatibleBracketForClass(e,t="varsity"){this.assertDrawNotStarted();for(const[E,F]of this.bouts.entries())F.weight_class_id===e&&F.division_id?.toLowerCase()===t.toLowerCase()&&this.bouts.delete(E);const s=Array.from(this.athletes.values()).filter(E=>E.weight_class_id===e&&E.division_id.toLowerCase()===t.toLowerCase()&&E.check_in_stage===Q.Eligible&&E.weigh_in_eligible&&E.medically_cleared).sort((E,F)=>E.seed_rank-F.seed_rank||E.athlete_id.localeCompare(F.athlete_id)),n=s.reduce((E,F)=>Math.max(E,F.seed_rank),s.length),i=n<=8?8:n<=16?16:n<=32?32:64,o=Math.log2(i);s.forEach((E,F)=>{E.seed_rank=F+1});const a=t.toLowerCase()==="varsity"?`bracket-${e}`:`bracket-${t.toLowerCase()}-${e}`,l=J.TrueSecondChallenge,c=[],x=E=>{const F=`${a}-${E.suffix}`,g=!!(E.redId&&E.greenId),b={match_id:F,bracket_id:a,weight_class_id:e,division_id:t,format:l,bout_number:this.nextBoutNumber++,round_index:E.roundIndex,round_label:E.roundLabel,is_consolation:E.isConsolation,is_placement_bout:!!E.isPlacement,is_true_second_challenge:!!E.isTrueSecond,placement_rank:E.placementRank??0,red_athlete_id:E.redId??"",green_athlete_id:E.greenId??"",is_bye:!1,winner_next_match_id:E.winnerNext?`${a}-${E.winnerNext}`:"",loser_next_match_id:E.loserNext?`${a}-${E.loserNext}`:"",lifecycle:g?$.Assigned:$.PendingUpstream,assigned_mat_id:E.matId,mat_queue_order:E.queueOrder,assignment_revision:1,authority_epoch:1,delegated_android_device_id:`mat-${E.matId}-scorekeeper`,red_score:0,green_score:0,period_number:1,clock_remaining_ms:this.rulesBundle.period_1_duration_ms,clock_running:!1,winner_athlete_id:"",loser_athlete_id:"",win_type:"",completed_at_ms:0};return this.bouts.set(F,b),c.push(b),b};let d=1;const u=Array.from({length:o+1},()=>[]);for(let E=1;E<=o;E++){const F=i>>E,g=E===o?"1st Place Championship Final":F===2?"Championship Semifinal":F===4?"Championship Quarterfinal":`Championship Round of ${F*2}`;for(let b=0;b<F;b++){const C=`C${E}-${b+1}`;u[E].push(C),x({suffix:C,roundIndex:E,roundLabel:g,isConsolation:!1,isPlacement:E===o,placementRank:E===o?1:0,winnerNext:E<o?`C${E+1}-${Math.floor(b/2)+1}`:void 0,loserNext:E===o?"TRUE-2ND":void 0,matId:(d-1)%this.matCount+1,queueOrder:d++})}}let _=1,p=[];for(let E=0;E<i/4;E++){const F=`L${_}-${E+1}`;p.push(F),x({suffix:F,roundIndex:_+1,roundLabel:`Consolation Round ${_}`,isConsolation:!0,loserNext:i===8?"P7":void 0,matId:(d-1)%this.matCount+1,queueOrder:d++});const g=this.bouts.get(`${a}-${u[1][2*E]}`),b=this.bouts.get(`${a}-${u[1][2*E+1]}`);g.loser_next_match_id=`${a}-${F}`,b.loser_next_match_id=`${a}-${F}`}for(let E=2;E<o;E++){const F=u[E].length;_+=1;const g=[];for(let b=0;b<F;b++){const C=`L${_}-${b+1}`;g.push(C);const B=E===o-1?"Consolation Semifinal (Crossover)":`Consolation Round ${_} (Crossover)`;x({suffix:C,roundIndex:E+_,roundLabel:B,isConsolation:!0,matId:(d-1)%this.matCount+1,queueOrder:d++});const w=this.bouts.get(`${a}-${p[b]}`);w.winner_next_match_id=`${a}-${C}`;const D=E%2===0?F-1-b:b^Math.floor(F/2),f=this.bouts.get(`${a}-${u[E][D]}`);f.loser_next_match_id=`${a}-${C}`}if(E<o-1){_+=1;const b=F/2,C=[];for(let B=0;B<b;B++){const w=`L${_}-${B+1}`;C.push(w),x({suffix:w,roundIndex:E+_,roundLabel:b===2?"Consolation Quarterfinal":`Consolation Round ${_}`,isConsolation:!0,loserNext:b===2?"P7":void 0,matId:(d-1)%this.matCount+1,queueOrder:d++});const D=this.bouts.get(`${a}-${g[2*B]}`),f=this.bouts.get(`${a}-${g[2*B+1]}`);D.winner_next_match_id=`${a}-${w}`,f.winner_next_match_id=`${a}-${w}`}p=C}else{for(let b=0;b<2;b++){const C=this.bouts.get(`${a}-${g[b]}`);C.winner_next_match_id=`${a}-P3`,C.loser_next_match_id=`${a}-P5`}p=g}}const h=o+_+1;x({suffix:"P7",roundIndex:h,roundLabel:"7th Place Match",isConsolation:!0,isPlacement:!0,placementRank:7,matId:(d-1)%this.matCount+1,queueOrder:d++}),x({suffix:"P5",roundIndex:h,roundLabel:"5th Place Match",isConsolation:!0,isPlacement:!0,placementRank:5,matId:(d-1)%this.matCount+1,queueOrder:d++}),x({suffix:"P3",roundIndex:h,roundLabel:"3rd Place Match",isConsolation:!0,isPlacement:!0,placementRank:3,winnerNext:"TRUE-2ND",matId:(d-1)%this.matCount+1,queueOrder:d++}),x({suffix:"TRUE-2ND",roundIndex:h+1,roundLabel:"True Second Challenge Match",isConsolation:!0,isPlacement:!0,isTrueSecond:!0,placementRank:2,matId:1,queueOrder:d++});const m=oe.buildStandardTopSeeds(i);for(let E=0;E<i/2;E++){const F=m[E],g=i+1-F,b=this.bouts.get(`${a}-${u[1][E]}`);b.red_athlete_id=F>=1&&F<=s.length?s[F-1].athlete_id:"",b.green_athlete_id=g>=1&&g<=s.length?s[g-1].athlete_id:"",b.red_athlete_id&&b.green_athlete_id&&(b.lifecycle=$.Assigned)}return this.numberBoutsInRunningOrder(),this.bracketFrozenByClass.set(`${t.toUpperCase()}:${e}`,!0),c}loadCppSimulationTrace(e,t="",s=""){const n=Dl(e,t,s);this.resetTournamentState(),this.athletes.clear(),this.bouts.clear(),this.simActionQueue=[],this.simTelemetryLog=[],this.simStepCursor=0,this.simSignedEventsProcessed=0,this.simBleacherDeliveries=0,this.simSpectatorNodes=0,this.simCppPublisherKeyHex=s,this.simCppSnapshotReady=!1;for(const o of n){const a=/^bracket-(?:([a-z0-9_]+)-)?(\d+)-/i.exec(o.event.match_id);if(!a)throw new Error("Native trace has an unknown division or weight class");const l=a[1]??"varsity",c=a[2];for(const x of[o.projection.red_athlete_id,o.projection.green_athlete_id])typeof x!="string"||!x||this.athletes.has(x)||this.athletes.set(x,{athlete_id:x,opaque_pass_token:`NATIVE-${x}`,public_display_name:x,team_id:`team-${Number(x.split("-")[2])%8}`,team_name:`Native campaign team ${Number(x.split("-")[2])%8}`,division_id:l,weight_class_id:c,seed_rank:Number(x.split("-")[2])+1,check_in_stage:Q.Eligible,weigh_in_eligible:!0,medically_cleared:!0,matches_wrestled_today:0,prior_day_matches:0,last_bout_ended_ms:0,updated_at_ms:this.now()})}for(const o of new Set([...this.athletes.values()].map(a=>`${a.division_id}:${a.weight_class_id}`))){const[a,l]=o.split(":");this.generateCppCompatibleBracketForClass(l,a)}let i=0;for(const o of n)this.simActionQueue.push(()=>{const{event:a,state:l,timer:c,projection:x,matId:d}=o,u=Math.floor(o.line.at_ms/864e5);for(;i<u;)this.advanceCompetitionDay(a.audit_time_ms),i+=1;const _=this.bouts.get(a.match_id);if(!_)throw new Error(`Native bracket is missing ${a.match_id}`);if(_.red_athlete_id=String(x.red_athlete_id),_.green_athlete_id=String(x.green_athlete_id),_.assigned_mat_id=d,_.authority_epoch=a.authority_epoch,_.assignment_revision=a.assignment_revision,_.delegated_android_device_id=a.signer_key_id,_.period_number=Number(l.period),_.clock_remaining_ms=Number(c.remaining_ms),_.clock_running=c.running===!0,_.red_score=Number(l.red_score),_.green_score=Number(l.green_score),x.confirmed===!0){const h=["","DEC","MD","TF","FALL","DQ","INJURY_DEFAULT","FORFEIT","MEDICAL_FORFEIT"][Number(l.win_type)];if(!h||l.bout_ended!==!0||![0,1].includes(Number(l.winner)))throw new Error("Invalid native confirmed result");this.recordMatsideConfirmedResult(_.match_id,Number(l.winner)===0?_.red_athlete_id:_.green_athlete_id,h,_.red_score,_.green_score,a.authority_epoch,a.audit_time_ms)}else _.lifecycle=l.bout_ended===!0?$.EndedLocal:$.InProgress;return this.simSignedEventsProcessed++,this.simPhase="Verified Native Campaign Replay",{stepIndex:this.simStepCursor,phase:this.simPhase,actorRole:"SCOREKEEPER",matId:d,matchId:a.match_id,sequence:a.sequence,signerKeyId:a.signer_key_id,eventIdHex:_e(a.event_id),summary:`Verified ${a.event_type}: ${a.match_id} (${_.red_score}–${_.green_score})`,atSimulatedMs:o.line.at_ms}});return this.simActionQueue.push(()=>{for(const o of this.bouts.values())o.is_true_second_challenge&&o.lifecycle!==$.ResultAccepted&&o.red_athlete_id&&o.green_athlete_id&&(o.is_bye=!0,o.lifecycle=$.ResultAccepted,o.winner_athlete_id=o.red_athlete_id,o.loser_athlete_id=o.green_athlete_id,o.win_type="DEC",o.completed_at_ms=n.at(-1).line.at_ms);return this.simPhase="Phase 4: Verified Native Campaign Replay Complete",{stepIndex:this.simStepCursor,phase:this.simPhase,actorRole:"OFFICIAL",summary:`Verified ${n.length} native packets. Snapshot files require separate manifest verification.`,atSimulatedMs:n.at(-1).line.at_ms}}),this.simTotalSteps=this.simActionQueue.length,this.simPhase="Verified Native Campaign Ready",this.publishAndSave(),{totalSteps:this.simTotalSteps,traceCount:n.length}}stepSimulationTick(e=1){const t=[],s=Math.max(1,Math.floor(e)),n=this.isSeeding;this.isSeeding=!0;try{for(let o=0;o<s;o++){if(this.simStepCursor>=this.simActionQueue.length){this.simActive=!1;break}const a=this.simActionQueue[this.simStepCursor];this.simStepCursor+=1;const l=a();this.simLatestEventSummary=l.summary,l.eventIdHex&&(this.simLatestEventIdHex=l.eventIdHex),this.simTelemetryLog=[l,...this.simTelemetryLog].slice(0,40),t.push(l)}}finally{this.isSeeding=n}const i=this.simStepCursor>=this.simActionQueue.length;return i&&(this.simActive=!1),this.publishAndSave(),{done:i,entries:t}}getSimPublicStatus(){let e=0;for(const t of this.bouts.values())t.lifecycle===$.ResultAccepted&&!t.is_bye&&e++;return{active:this.simActive,phase:this.simPhase,stepCursor:this.simStepCursor,totalSteps:this.simTotalSteps,acceptedBouts:e,signedEventsProcessed:this.simSignedEventsProcessed,spectatorNodes:this.simSpectatorNodes,bleacherDeliveries:this.simBleacherDeliveries,latestEventSummary:this.simLatestEventSummary,latestEventIdHex:this.simLatestEventIdHex,cppSnapshotReady:this.simCppSnapshotReady,cppPublisherKeyHex:this.simCppPublisherKeyHex}}computeBracketStandings(e,t){const s=(t??"").trim().toUpperCase(),n=Array.from(this.athletes.values()).filter(d=>d.weight_class_id===e&&(!s||s==="ALL"||(d.division_id||"VARSITY").toUpperCase()===s)&&d.check_in_stage===Q.Eligible&&d.weigh_in_eligible&&d.medically_cleared),i=Array.from(this.bouts.values()).filter(d=>d.weight_class_id===e&&(!s||s==="ALL"||(d.division_id||"VARSITY").toUpperCase()===s)),o=i.length>0&&i.every(le),a=new Map;for(const d of n)a.set(d.athlete_id,{place:0,athlete_id:d.athlete_id,public_display_name:d.public_display_name,team_id:d.team_id,team_name:d.team_name,seed_rank:d.seed_rank,wins:0,losses:0,matches_played:0,falls_forfeits_dq:0,tech_falls:0,major_decisions:0,decisions:0,bonus_points:0,points_scored:0,points_allowed:0,bracket_complete:o});const l=new Map;for(const d of i){if(d.is_bye||!le(d))continue;const u=a.get(d.winner_athlete_id),_=a.get(d.loser_athlete_id),p=d.winner_athlete_id===d.red_athlete_id,h=p?d.red_score:d.green_score,m=p?d.green_score:d.red_score;if(u&&(u.wins+=1,u.matches_played+=1,u.points_scored+=h,u.points_allowed+=m,d.win_type==="FALL"||d.win_type==="FORFEIT"||d.win_type==="INJURY_DEFAULT"||d.win_type==="DQ"?(u.falls_forfeits_dq+=1,u.bonus_points+=2):d.win_type==="TF"?(u.tech_falls+=1,u.bonus_points+=1.5):d.win_type==="MD"?(u.major_decisions+=1,u.bonus_points+=1):u.decisions+=1),_&&(_.losses+=1,_.matches_played+=1,_.points_scored+=m,_.points_allowed+=h),d.winner_athlete_id&&d.loser_athlete_id){const E=`${d.winner_athlete_id}:${d.loser_athlete_id}`;l.set(E,(l.get(E)??0)+1)}}const c=new Map;for(const d of a.values()){const u=`${d.wins}:${d.losses}`;c.set(u,(c.get(u)??0)+1)}const x=Array.from(a.values()).sort((d,u)=>{if(u.wins!==d.wins)return u.wins-d.wins;if(d.losses!==u.losses)return d.losses-u.losses;if((c.get(`${d.wins}:${d.losses}`)??0)===2){const h=l.get(`${d.athlete_id}:${u.athlete_id}`)??0,m=l.get(`${u.athlete_id}:${d.athlete_id}`)??0;if(h!==m)return m-h}if(u.bonus_points!==d.bonus_points)return u.bonus_points-d.bonus_points;if(u.falls_forfeits_dq!==d.falls_forfeits_dq)return u.falls_forfeits_dq-d.falls_forfeits_dq;if(u.tech_falls!==d.tech_falls)return u.tech_falls-d.tech_falls;if(u.major_decisions!==d.major_decisions)return u.major_decisions-d.major_decisions;const _=d.points_scored-d.points_allowed,p=u.points_scored-u.points_allowed;return p!==_?p-_:u.points_scored!==d.points_scored?u.points_scored-d.points_scored:d.seed_rank-u.seed_rank||d.athlete_id.localeCompare(u.athlete_id)});return x.forEach((d,u)=>{d.place=u+1}),x}static PLACEMENT_POINTS_BY_RANK={1:16,2:12,3:9,4:7,5:5,6:3,7:2,8:1};computePlacementByAthleteForGroup(e,t,s){const n=new Map;if(s.length===0)return n;if(s.some(l=>l.format===J.RoundRobinPool)){if(s.length===1&&s[0].is_bye&&le(s[0])){const c=s[0].winner_athlete_id;return c&&!this.isWithdrawn(c)&&n.set(c,1),n}const l=s.filter(c=>!c.is_bye);return l.length>0&&l.every(le)&&this.computeBracketStandings(t,e).slice(0,8).forEach((x,d)=>{(d>0||x.wins>0)&&!this.isWithdrawn(x.athlete_id)&&n.set(x.athlete_id,d+1)}),n}if(s.some(l=>l.format===J.BestOfThree)){const l=s.filter(c=>!c.is_bye);if(s.every(le)&&l.length>0){const c=new Map,x=new Set;for(const u of l)u.red_athlete_id&&x.add(u.red_athlete_id),u.green_athlete_id&&x.add(u.green_athlete_id),u.winner_athlete_id&&c.set(u.winner_athlete_id,(c.get(u.winner_athlete_id)??0)+1);const d=[...x].sort((u,_)=>(c.get(_)??0)-(c.get(u)??0)||u.localeCompare(_));d[0]&&(c.get(d[0])??0)>=2&&!this.isWithdrawn(d[0])&&(n.set(d[0],1),d[1]&&!this.isWithdrawn(d[1])&&(l.some(_=>_.loser_athlete_id===d[1]&&_.win_type==="DQ")||n.set(d[1],2)))}return n}const i=s.find(l=>l.is_true_second_challenge&&l.placement_rank===2),o=s.find(l=>l.is_placement_bout&&l.placement_rank===1&&!l.is_true_second_challenge&&le(l));o&&(o.is_bye&&o.winner_athlete_id&&!o.green_athlete_id?this.isWithdrawn(o.winner_athlete_id)||n.set(o.winner_athlete_id,1):!o.is_bye&&o.winner_athlete_id&&(this.isWithdrawn(o.winner_athlete_id)||n.set(o.winner_athlete_id,1),o.loser_athlete_id&&!i&&!this.isWithdrawn(o.loser_athlete_id)&&o.win_type!=="DQ"&&n.set(o.loser_athlete_id,2)));const a=s.find(l=>l.is_placement_bout&&l.placement_rank===3&&le(l));a&&(!a.is_bye&&a.winner_athlete_id?(!i&&!this.isWithdrawn(a.winner_athlete_id)&&n.set(a.winner_athlete_id,3),a.loser_athlete_id&&!this.isWithdrawn(a.loser_athlete_id)&&a.win_type!=="DQ"&&n.set(a.loser_athlete_id,4)):a.is_bye&&a.winner_athlete_id&&!a.green_athlete_id&&!i&&!this.isWithdrawn(a.winner_athlete_id)&&n.set(a.winner_athlete_id,3)),i&&le(i)&&(i.winner_athlete_id&&!this.isWithdrawn(i.winner_athlete_id)&&n.set(i.winner_athlete_id,2),i.loser_athlete_id&&!this.isWithdrawn(i.loser_athlete_id)&&i.win_type!=="DQ"?n.set(i.loser_athlete_id,3):i.is_bye&&!i.winner_athlete_id&&o&&!o.is_bye&&o.loser_athlete_id&&!this.isWithdrawn(o.loser_athlete_id)&&o.win_type!=="DQ"&&n.set(o.loser_athlete_id,2));for(const l of[5,7]){const c=s.find(x=>x.is_placement_bout&&x.placement_rank===l&&le(x));c&&(!c.is_bye&&c.winner_athlete_id?(this.isWithdrawn(c.winner_athlete_id)||n.set(c.winner_athlete_id,l),c.loser_athlete_id&&!this.isWithdrawn(c.loser_athlete_id)&&c.win_type!=="DQ"&&n.set(c.loser_athlete_id,l+1)):c.is_bye&&c.winner_athlete_id&&!c.green_athlete_id&&(this.isWithdrawn(c.winner_athlete_id)||n.set(c.winner_athlete_id,l)))}return n}computeTeamStandings(){const e=$s(this.bouts.values(),Fn),t=new Map;for(const i of this.athletes.values())t.has(i.team_id)||t.set(i.team_id,{rank:0,team_id:i.team_id,team_name:i.team_name,total_points:0,advancement_points:0,placement_points:0,bonus_points:0,falls_forfeits_dq:0,tech_falls:0,major_decisions:0,first_place_winners:0});const s=new Map;for(const i of this.bouts.values()){const o=(i.division_id||"VARSITY").trim().toUpperCase()||"VARSITY",a=`${o}:${i.weight_class_id}`,l=s.get(a)??{divisionId:o,weightClassId:i.weight_class_id,bouts:[]};if(l.bouts.push(i),s.set(a,l),!le(i)||!i.winner_athlete_id||i.is_bye)continue;const c=this.athletes.get(i.winner_athlete_id);if(!c)continue;const x=t.get(c.team_id);if(!x)continue;const d=i.is_consolation?1:2;x.advancement_points+=d+(e.get(i.match_id)?.earnedPoints??0);let u=0;i.win_type==="FALL"||i.win_type==="FORFEIT"||i.win_type==="MEDICAL_FORFEIT"||i.win_type==="INJURY_DEFAULT"||i.win_type==="DQ"?(u=2,x.falls_forfeits_dq+=1):i.win_type==="TF"?(u=1.5,x.tech_falls+=1):i.win_type==="MD"&&(u=1,x.major_decisions+=1),x.bonus_points+=u,x.total_points=x.advancement_points+x.placement_points+x.bonus_points}for(const i of s.values()){const o=this.computePlacementByAthleteForGroup(i.divisionId,i.weightClassId,i.bouts);for(const[a,l]of o){const c=oe.PLACEMENT_POINTS_BY_RANK[l]??0;if(c<=0)continue;const x=this.athletes.get(a),d=x&&t.get(x.team_id);d&&(d.placement_points+=c,l===1&&(d.first_place_winners+=1),d.total_points=d.advancement_points+d.placement_points+d.bonus_points)}}const n=Array.from(t.values()).sort((i,o)=>o.total_points-i.total_points||o.falls_forfeits_dq-i.falls_forfeits_dq||o.tech_falls-i.tech_falls||o.major_decisions-i.major_decisions||o.first_place_winners-i.first_place_winners||i.team_name.localeCompare(o.team_name));return n.forEach((i,o)=>{i.rank=o+1}),n}computeElapsedBoutTimeMs(e,t,s){if(typeof e!="number"||!Number.isInteger(e)||e<1||e>9||typeof t!="number"||!Number.isInteger(t)||t<0)return null;const n=this.rulesBundle,i=c=>c===1?n.period_1_duration_ms:c===2?n.period_2_duration_ms:c===3?n.period_3_duration_ms:c===4?n.sv_duration_ms:c<=8?n.tb_period_duration_ms:n.utb_duration_ms,o=i(e),a=s==="event"&&e===1&&t>o?12e4:o;if(t>a||s==="bout"&&(t===0||t===a))return null;let l=a-t;for(let c=1;c<e;c++)l+=i(c);return l>0?l:null}computeWrestlerStats(){const e=$s(this.bouts.values(),Fn),t=this.getOwVoteTallies(),s=new Map;for(const l of this.athletes.values()){const c=(l.division_id||"VARSITY").trim().toUpperCase()||"VARSITY";s.set(l.athlete_id,{tournament_id:this.tournamentId,tournament_name:this.tournamentName,event_date:this.eventDate,venue:this.venue,athlete_id:l.athlete_id,wrestler_name:l.public_display_name,team_id:l.team_id,team_name:l.team_name,division_id:c,weight_class_lbs:l.weight_class_id,seed_rank:l.seed_rank,flowrestling_id:l.flowrestling_id??"",check_in_status:Te[l.check_in_stage]??String(l.check_in_stage),weigh_in_eligible:l.weigh_in_eligible,medically_cleared:l.medically_cleared,bracket_format:"UNSCHEDULED",bracket_complete:!1,placement:null,standing_rank:null,matches_played:0,wins:0,losses:0,win_pct:0,byes_received:0,championship_wins:0,championship_losses:0,consolation_wins:0,consolation_losses:0,matches_wrestled_today:l.matches_wrestled_today,prior_day_matches:l.prior_day_matches,wins_by_fall:0,wins_by_tech_fall:0,wins_by_major_decision:0,wins_by_decision:0,wins_by_forfeit:0,wins_by_injury_default:0,wins_by_dq:0,bonus_wins:0,bonus_win_pct:0,losses_by_fall:0,losses_by_tech_fall:0,losses_by_major_decision:0,losses_by_decision:0,losses_by_forfeit_default_dq:0,match_points_scored:0,match_points_allowed:0,match_point_differential:0,avg_match_points_scored:0,avg_match_points_allowed:0,event_logged_bouts:0,takedowns_scored:0,takedowns_allowed:0,escapes_scored:0,escapes_allowed:0,reversals_scored:0,reversals_allowed:0,near_falls_2_scored:0,near_falls_3_scored:0,near_falls_4_scored:0,near_falls_total_scored:0,near_falls_allowed:0,cautions_committed:0,stalling_calls_committed:0,penalties_committed:0,fastest_fall_ms:null,team_advancement_points:0,team_bonus_points:0,team_placement_points:0,team_points_total:0,ow_votes:t[l.athlete_id]??0})}const n=new Map;for(const l of this.bouts.values()){const c=(l.division_id||"VARSITY").trim().toUpperCase()||"VARSITY",x=`${c}:${l.weight_class_id}`,d=n.get(x)??{divisionId:c,weightClassId:l.weight_class_id,bouts:[]};if(d.bouts.push(l),n.set(x,d),!le(l))continue;if(l.is_bye){if(l.winner_athlete_id&&!l.green_athlete_id&&!l.loser_athlete_id&&!l.is_true_second_challenge){const F=s.get(l.winner_athlete_id);F&&(F.byes_received+=1)}continue}const u=s.get(l.winner_athlete_id),_=l.loser_athlete_id?s.get(l.loser_athlete_id):void 0,p=l.winner_athlete_id===l.red_athlete_id,h=p?l.red_score:l.green_score,m=p?l.green_score:l.red_score,E=l.win_type.toUpperCase();if(u){u.matches_played+=1,u.wins+=1,l.is_consolation?u.consolation_wins+=1:u.championship_wins+=1,u.match_points_scored+=h,u.match_points_allowed+=m;const F=l.is_consolation?1:2;u.team_advancement_points+=F+(e.get(l.match_id)?.earnedPoints??0);let g=0;E==="FALL"?(u.wins_by_fall+=1,u.bonus_wins+=1,g=2):E==="FORFEIT"||E==="MEDICAL_FORFEIT"?(u.wins_by_forfeit+=1,u.bonus_wins+=1,g=2):E==="INJURY_DEFAULT"?(u.wins_by_injury_default+=1,u.bonus_wins+=1,g=2):E==="DQ"?(u.wins_by_dq+=1,u.bonus_wins+=1,g=2):E==="TF"?(u.wins_by_tech_fall+=1,u.bonus_wins+=1,g=1.5):E==="MD"?(u.wins_by_major_decision+=1,u.bonus_wins+=1,g=1):u.wins_by_decision+=1,u.team_bonus_points+=g}_&&(_.matches_played+=1,_.losses+=1,l.is_consolation?_.consolation_losses+=1:_.championship_losses+=1,_.match_points_scored+=m,_.match_points_allowed+=h,E==="FALL"?_.losses_by_fall+=1:E==="TF"?_.losses_by_tech_fall+=1:E==="MD"?_.losses_by_major_decision+=1:E==="FORFEIT"||E==="MEDICAL_FORFEIT"||E==="INJURY_DEFAULT"||E==="DQ"?_.losses_by_forfeit_default_dq+=1:_.losses_by_decision+=1)}for(const l of n.values()){const{divisionId:c,weightClassId:x,bouts:d}=l,u=d[0]?.format??"UNSCHEDULED",_=d.length>0&&d.every(le),p=this.computeBracketStandings(x,c);for(const E of this.athletes.values())if(((E.division_id||"VARSITY").trim().toUpperCase()||"VARSITY")===c&&E.weight_class_id===x){const g=s.get(E.athlete_id);g&&(g.bracket_format=u,g.bracket_complete=_)}const h=this.computePlacementByAthleteForGroup(c,x,d);for(const[E,F]of h.entries()){const g=s.get(E);g&&(g.placement=F,g.team_placement_points+=oe.PLACEMENT_POINTS_BY_RANK[F]??0)}if(d.some(E=>E.format===J.RoundRobinPool))for(const E of p){const F=s.get(E.athlete_id);F&&(F.standing_rank=E.place)}else{const E=new Map;p.forEach((g,b)=>E.set(g.athlete_id,b+1)),p.map(g=>g.athlete_id).sort((g,b)=>{const C=h.get(g)??Number.MAX_SAFE_INTEGER,B=h.get(b)??Number.MAX_SAFE_INTEGER;return C!==B?C-B:(E.get(g)??0)-(E.get(b)??0)}).forEach((g,b)=>{const C=s.get(g);C&&(C.standing_rank=b+1)})}}const i=new Map,o=new Set;for(const l of this.protocolJournal)if(l.wireHex)try{const c=je(ce(l.wireHex)),x=`${c.stream_id}:${c.authority_epoch}:${c.sequence}`;if(o.has(x))continue;o.add(x);const d=this.bouts.get(c.match_id);if(!d||d.is_bye||!le(d)||c.assignment_revision!==d.assignment_revision)continue;const u=c.payload instanceof Uint8Array?Re(c.payload):c.payload;if(!u||typeof u!="object"||Array.isArray(u)||u instanceof Uint8Array||u instanceof Map)continue;const _=u,p=_.public_state,h=p&&typeof p=="object"&&!Array.isArray(p)&&!(p instanceof Uint8Array)&&!(p instanceof Map)?p:null,m=i.get(d.match_id)??[];c.event_type==="MATCH_UNDO_LAST_ACTION"?m.pop():m.push({eventType:c.event_type,payload:_,publicState:h}),i.set(d.match_id,m)}catch{}for(const l of this.bouts.values()){if(l.is_bye||!le(l))continue;const c=i.get(l.match_id)??[],x=s.get(l.red_athlete_id),d=s.get(l.green_athlete_id);c.length>0&&(x&&(x.event_logged_bouts+=1),d&&(d.event_logged_bouts+=1));const u=l.winner_athlete_id===l.red_athlete_id?"RED":l.winner_athlete_id===l.green_athlete_id?"GREEN":"",_=u&&l.win_type.toUpperCase()==="FALL"?s.get(l.winner_athlete_id):void 0;let p=null;for(const m of c){const{eventType:E,payload:F,publicState:g}=m,b=String(F.actor??F.corner??"").toUpperCase(),C=b==="RED"?x:b==="GREEN"?d:void 0,B=b==="RED"?d:b==="GREEN"?x:void 0,w=E==="MATCH_SCORING_ACTION"?String(F.action??"").toUpperCase():String(F.command_type??F.action??E).toUpperCase();if(C)switch(w){case"TAKEDOWN_3":C.takedowns_scored+=1,B&&(B.takedowns_allowed+=1);break;case"ESCAPE_1":C.escapes_scored+=1,B&&(B.escapes_allowed+=1);break;case"REVERSAL_2":C.reversals_scored+=1,B&&(B.reversals_allowed+=1);break;case"NEAR_FALL_2":case"NEARFALL_2":C.near_falls_2_scored+=1,C.near_falls_total_scored+=1,B&&(B.near_falls_allowed+=1);break;case"NEAR_FALL_3":case"NEARFALL_3":C.near_falls_3_scored+=1,C.near_falls_total_scored+=1,B&&(B.near_falls_allowed+=1);break;case"NEAR_FALL_4":case"NEARFALL_4":case"NEAR_FALL_INJURY_OR_SCREAMING_4":C.near_falls_4_scored+=1,C.near_falls_total_scored+=1,B&&(B.near_falls_allowed+=1);break;case"CAUTION":C.cautions_committed+=1;break;case"STALLING":case"STALL_WARN":C.stalling_calls_committed+=1;break;case"TECHNICAL_VIOLATION":case"ILLEGAL_HOLD":case"UNNECESSARY_ROUGHNESS":case"UNSPORTSMANLIKE_WRESTLER":case"UNSPORTSMANLIKE_COACH":case"FLAGRANT_MISCONDUCT":C.penalties_committed+=1;break}if(_&&b===u&&(E==="MATCH_ENDING_ACTION"&&String(F.ending_type??"").toUpperCase()==="FALL"||w==="PIN_FALL")){const f=this.computeElapsedBoutTimeMs(g?.period??F.period,g?.clock_remaining_ms??F.clock_remaining_ms,"event");f!==null&&(p=Math.min(p??f,f))}}if(!_)continue;const h=p??(l.clock_running?null:this.computeElapsedBoutTimeMs(l.period_number,l.clock_remaining_ms,"bout"));h!==null&&(_.fastest_fall_ms=Math.min(_.fastest_fall_ms??h,h))}const a=Array.from(s.values());for(const l of a)l.win_pct=l.matches_played>0?l.wins/l.matches_played:0,l.bonus_win_pct=l.wins>0?l.bonus_wins/l.wins:0,l.match_point_differential=l.match_points_scored-l.match_points_allowed,l.avg_match_points_scored=l.matches_played>0?l.match_points_scored/l.matches_played:0,l.avg_match_points_allowed=l.matches_played>0?l.match_points_allowed/l.matches_played:0,l.team_points_total=l.team_advancement_points+l.team_bonus_points+l.team_placement_points;return a.sort((l,c)=>{if(l.division_id!==c.division_id)return l.division_id.localeCompare(c.division_id);const x=Number(l.weight_class_lbs)-Number(c.weight_class_lbs);if(Number.isFinite(x)&&x!==0)return x;if(l.weight_class_lbs!==c.weight_class_lbs)return l.weight_class_lbs.localeCompare(c.weight_class_lbs);const d=l.placement??Number.MAX_SAFE_INTEGER,u=c.placement??Number.MAX_SAFE_INTEGER;if(d!==u)return d-u;const _=l.standing_rank??Number.MAX_SAFE_INTEGER,p=c.standing_rank??Number.MAX_SAFE_INTEGER;return _!==p?_-p:l.seed_rank!==c.seed_rank?l.seed_rank-c.seed_rank:l.wrestler_name!==c.wrestler_name?l.wrestler_name.localeCompare(c.wrestler_name):l.athlete_id.localeCompare(c.athlete_id)}),a}exportWrestlerStatsCsv(){const e=this.computeWrestlerStats(),t=[ac.join(",")];for(const s of e){const n=[s.tournament_id,s.tournament_name,s.event_date,s.venue,s.athlete_id,s.wrestler_name,s.team_id,s.team_name,s.division_id,s.weight_class_lbs,s.seed_rank,s.flowrestling_id,s.check_in_status,s.weigh_in_eligible,s.medically_cleared,s.bracket_format,s.bracket_complete,s.placement??"",s.standing_rank??"",s.matches_played,s.wins,s.losses,s.win_pct.toFixed(3),s.byes_received,s.championship_wins,s.championship_losses,s.consolation_wins,s.consolation_losses,s.matches_wrestled_today,s.prior_day_matches,s.wins_by_fall,s.wins_by_tech_fall,s.wins_by_major_decision,s.wins_by_decision,s.wins_by_forfeit,s.wins_by_injury_default,s.wins_by_dq,s.bonus_wins,s.bonus_win_pct.toFixed(3),s.losses_by_fall,s.losses_by_tech_fall,s.losses_by_major_decision,s.losses_by_decision,s.losses_by_forfeit_default_dq,s.match_points_scored,s.match_points_allowed,s.match_point_differential,s.avg_match_points_scored.toFixed(2),s.avg_match_points_allowed.toFixed(2),s.event_logged_bouts,s.takedowns_scored,s.takedowns_allowed,s.escapes_scored,s.escapes_allowed,s.reversals_scored,s.reversals_allowed,s.near_falls_2_scored,s.near_falls_3_scored,s.near_falls_4_scored,s.near_falls_total_scored,s.near_falls_allowed,s.cautions_committed,s.stalling_calls_committed,s.penalties_committed,s.fastest_fall_ms!==null?(s.fastest_fall_ms/1e3).toFixed(1):"",s.team_advancement_points.toFixed(1),s.team_bonus_points.toFixed(1),s.team_placement_points.toFixed(1),s.team_points_total.toFixed(1),s.ow_votes].map(i=>oe.escapeCsvCell(i));t.push(n.join(","))}return t.join(`
`)+`
`}buildSignedPublicProjection(e=!1){const t=Array.from(this.athletes.values()).sort((d,u)=>d.weight_class_id.localeCompare(u.weight_class_id)||d.seed_rank-u.seed_rank),s=new Map;for(const d of this.mats.keys()){const u=this.matQueue(d);u[0]&&u[0].lifecycle>=$.Ready&&u.forEach((_,p)=>s.set(_.match_id,p+1))}const n=[...this.bouts.values()].sort((d,u)=>d.bout_number-u.bout_number).map(d=>s.has(d.match_id)?{...d,mat_queue_order:s.get(d.match_id)}:d),i=Array.from(this.mats.values()).sort((d,u)=>d.mat_id-u.mat_id),o=this.computeTeamStandings(),a={};for(const[d,u]of this.bracketFrozenByClass.entries())a[d]=u;const l=this.now(),c={...e?{allow_reset:!0}:{},tournament_id:this.tournamentId,tournament_name:this.tournamentName,rules_version:this.rulesVersion,growth_allowance_tenths:this.growthAllowanceTenths,consecutive_day_allowance_tenths:this.consecutiveDayAllowanceTenths,mat_count:this.matCount,snapshot_epoch:this.snapshotEpoch,control_sequence_head:this.controlSequenceHead,published_at_ms:l,publisher_pubkey_hex:_e(this.keyPair.publicKey),payload_sha256_hex:"",signature_hex:"",athletes:t,bouts:n,mats:i,standings:o,bracket_frozen_by_class:a,...this.simActive||this.simTotalSteps>0||this.simStepCursor>0?{sim_status:this.getSimPublicStatus()}:{},p2p_topology:this.getVenueRoomTopologySummary(),revoked_certificate_ids:[...this.revokedCertificateIds],ow_vote_tallies:this.getOwVoteTallies()},x=oe.projectionBytes(c);return c.payload_sha256_hex=_e(Oe(x)),c.signature_hex=_e(qe(Fe,x,this.keyPair.privateKey)),structuredClone(c)}static projectionBytes(e){const{signature_hex:t,payload_sha256_hex:s,...n}=e;return ve({state_digest_hex:_e(Oe(new TextEncoder().encode(JSON.stringify(n))))})}static verifySignedPublicProjection(e){try{if(!al(e))return!1;const t=this.projectionBytes(e);return _e(Oe(t))===e.payload_sha256_hex&&Pe(Fe,t,ce(e.publisher_pubkey_hex),ce(e.signature_hex))}catch{return!1}}publishAndSave(e=!1,t=!1){if(this.controlSequenceHead+=1,this.snapshotEpoch+=1,this.isSeeding)return null;const s=this.buildSignedPublicProjection(t);return this.broadcastEnabled?(this.saveToStorage(),this.broadcastEnvelope(s,e),this.onStateChanged?.(),s):(this.broadcastLiveRooms(JSON.stringify(s)),this.onStateChanged?.(),s)}currentBracketPackets(){const e=Math.max(this.snapshotEpoch,this.controlSequenceHead);if(this.publicationTournamentId===this.tournamentId&&this.publicationRevision===e)return this.publicationPackets;const t=new Map;for(const s of this.protocolJournal){if(!s.wireHex)continue;const n=je(ce(s.wireHex));if(n.tournament_id!==this.tournamentId||!this.bouts.has(n.match_id))continue;const i=t.get(n.match_id)??[];i.push(n),t.set(n.match_id,i)}return this.publicationPackets=K0(this.buildSignedPublicProjection(),this.keyPair.publicKey,this.keyPair.privateKey,this.rulesHash,t),this.publicationTournamentId=this.tournamentId,this.publicationRevision=e,this.publicationPackets}bracketSync(e,t){const s=new TextDecoder("utf-8",{fatal:!0}).decode(e);if(s&&!/^[A-Za-z0-9_-]{1,100}$/.test(s))throw new Error("Invalid bracket ID");if(s&&t.startsWith("subtree:b:")&&t!==`subtree:b:${s}`)throw new Error("Wrong bracket room");const n=this.currentBracketPackets(),i=n.get("tournament-summary::0"),o=n.get("mat-board::0"),a=n.get(`bracket-full:${s}:0`);return ve([i,...a?[a]:[],o].map(({topic:l,bytes:c})=>({topic:l,bytes:c})),{maxBytes:4194304})}pendingBroadcastJson=null;broadcastMicrotaskScheduled=!1;broadcastLiveRooms(e){this.liveConsoleRole!=="primary"||this.overlayMesh.liveRooms.size===0||(this.pendingBroadcastJson=e,!this.broadcastMicrotaskScheduled&&(this.broadcastMicrotaskScheduled=!0,queueMicrotask(()=>{this.broadcastMicrotaskScheduled=!1;const t=this.pendingBroadcastJson;if(this.pendingBroadcastJson=null,!t||this.liveConsoleRole!=="primary")return;const s=new TextEncoder().encode(t);for(const[n,i]of this.overlayMesh.liveRooms)try{if(n===at)i.send("control-state",this.signedControlSnapshot(),ut.CurrentStateUnorderedNewest);else if(n.startsWith("subtree:")&&[...i.members.keys()].some(o=>o!==this.livePeerId)){i.send("public-projection",s,ut.CurrentStateUnorderedNewest);const o=this.livePacketHeads.get(n),a=new Map,l=n.startsWith("subtree:b:")?n.slice(10):"",c=this.currentBracketPackets(),x=["tournament-summary::0","mat-board::0"],d=`bracket-state:${l}:0`;for(const u of new Set([...x,d,...c.keys()])){const _=c.get(u);if(!_||_.topic==="bracket-full"||_.bracketId&&_.bracketId!==l&&(l||_.topic!=="mat-update"))continue;const p=o?.get(u);(!p||!we(p.content,_.content))&&(o||_.topic!=="bout-update")&&i.send(_.topic,_.bytes,ut.CurrentStateUnorderedNewest),a.set(u,_)}this.livePacketHeads.set(n,a)}}catch(o){this.liveTransportError=String(o)}})))}broadcastEnvelope(e,t=!1){if(this.liveConsoleRole!=="primary"||!this.broadcastEnabled||this.isSeeding)return;const s=JSON.stringify(e);this.broadcastLiveRooms(s);try{this.broadcastChannel?.postMessage(e)}catch{}if(this.publicNostrRelayPublishingEnabled&&e.athletes.length>0&&this.publishProjectionToPublicNostrRelays(e),!(typeof window>"u")){for(const n of new Set([window.location.origin,this.activeVenueOrigin])){const i=new URL(n);if(/github\.io$/i.test(i.hostname))continue;const o=t||this.pendingProjections.get(i.origin)?.override===!0;this.pendingProjections.set(i.origin,{json:s,override:o})}this.flushPendingProjections()}}async flushPendingProjections(e,t=!1){if(!(typeof window>"u"||!this.broadcastEnabled||this.liveConsoleRole!=="primary")){if(e){const s=new URL(e).origin;t&&(this.athletes.size||this.bouts.size)&&!this.linkedVenuePubkeyHex&&!/github\.io$/i.test(new URL(s).hostname)&&!this.pendingProjections.has(s)&&this.pendingProjections.set(s,{json:JSON.stringify(this.buildSignedPublicProjection()),override:!1})}await Promise.all([...this.pendingProjections.keys()].map(s=>{const n=this.projectionFlushes.get(s);if(n)return n;const i=(async()=>{for(;this.liveConsoleRole==="primary";){const o=this.pendingProjections.get(s);if(!o)return;const a={"Content-Type":"application/json"};this.officialsPassword&&(a["x-openmat-officials-password"]=this.officialsPassword),o.override&&(a["x-openmat-authority-override"]="1");try{const l=await fetch(new URL("/api/openmat-live-projection",s),{method:"POST",headers:a,body:o.json,signal:AbortSignal.timeout(4e3)});if(!l.ok)throw new Error(`Projection upload failed with HTTP ${l.status}`);this.pendingProjections.get(s)===o&&this.pendingProjections.delete(s);try{const c=await l.json();c?.envelope&&this.pendingProjectionPostCount===0&&this.syncLiveProjectionFromVenue(c.envelope)}catch{}}catch(l){this.liveTransportError=String(l);return}}})().finally(()=>this.projectionFlushes.delete(s));return this.projectionFlushes.set(s,i),i}))}}saveToStorage(){if(!(!this.broadcastEnabled||typeof localStorage>"u"))try{const e=this.storageState();localStorage.setItem(dn,JSON.stringify(e))}catch(e){throw new Error(`Authority state could not be persisted: ${String(e)}`)}}storageState(){return{tournamentId:this.tournamentId,tournamentName:this.tournamentName,eventDate:this.eventDate,venue:this.venue,rulesVersion:this.rulesVersion,growthAllowanceTenths:this.growthAllowanceTenths,consecutiveDayAllowanceTenths:this.consecutiveDayAllowanceTenths,matCount:this.matCount,snapshotEpoch:this.snapshotEpoch,controlSequenceHead:this.controlSequenceHead,nextBoutNumber:this.nextBoutNumber,linkedVenuePubkeyHex:this.linkedVenuePubkeyHex,linkedVenueJoinQrUri:this.linkedVenueJoinQrUri,hasExternalVenueServer:this.hasExternalVenueServer,lastSyncedVenueEpochByPublisher:[...this.lastSyncedVenueEpochByPublisher],protocolJournal:this.protocolJournal,resultCorrections:this.resultCorrections,scratches:[...this.scratches],revokedCertificateIds:[...this.revokedCertificateIds],owVotes:[...this.owVotes],athletes:Array.from(this.athletes.entries()),pendingSelfRegistrations:Array.from(this.pendingSelfRegistrations.entries()),selfRegistrationDispositions:Array.from(this.selfRegistrationDispositions.entries()),privateWeighIns:Array.from(this.privateWeighIns.entries()),privateMedicals:Array.from(this.privateMedicals.entries()),bouts:Array.from(this.bouts.entries()),mats:Array.from(this.mats.entries()),bracketFrozenByClass:Array.from(this.bracketFrozenByClass.entries())}}loadFromStorage(e=!1){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem(dn);if(!t)return!1;const s=JSON.parse(t);if(!s||!Array.isArray(s.athletes))throw new Error("Invalid stored roster");if(!Array.isArray(s.mats)||s.mats.length===0)throw new Error("Invalid stored mats");const n=s.tournamentName==="New tournament"&&s.athletes.length===0&&(!Array.isArray(s.bouts)||s.bouts.length===0)&&(!Array.isArray(s.protocolJournal)||s.protocolJournal.length===0);if(n){this.tournamentId=ie.tournamentId,this.tournamentName=ie.tournamentName,this.eventDate=ie.eventDate,this.venue=ie.venue,this.rulesVersion=ie.rulesVersion,this.growthAllowanceTenths=ie.growthAllowanceTenths,this.consecutiveDayAllowanceTenths=0,this.matCount=ie.matCount,this.mats=new Map;for(let l=1;l<=this.matCount;l++)this.mats.set(l,this.unprovisionedMat(l))}else this.tournamentId=s.tournamentId??this.tournamentId,this.tournamentName=s.tournamentName??this.tournamentName,this.eventDate=s.eventDate??this.eventDate,this.venue=s.venue??this.venue,this.rulesVersion=s.rulesVersion??this.rulesVersion,this.growthAllowanceTenths=s.growthAllowanceTenths??0,this.consecutiveDayAllowanceTenths=s.consecutiveDayAllowanceTenths??0,this.matCount=s.matCount??ie.matCount,this.mats=new Map(s.mats);this.snapshotEpoch=s.snapshotEpoch??1,this.controlSequenceHead=s.controlSequenceHead??1,this.nextBoutNumber=s.nextBoutNumber??101,n||(this.linkedVenuePubkeyHex=typeof s.linkedVenuePubkeyHex=="string"?s.linkedVenuePubkeyHex:this.linkedVenuePubkeyHex,this.linkedVenueJoinQrUri=typeof s.linkedVenueJoinQrUri=="string"?s.linkedVenueJoinQrUri:this.linkedVenueJoinQrUri),this.hasExternalVenueServer=s.hasExternalVenueServer??!!(this.linkedVenueJoinQrUri&&this.linkedVenuePubkeyHex&&this.linkedVenuePubkeyHex!==this.publisherPublicKeyHex),this.lastSyncedVenueEpochByPublisher=new Map(s.lastSyncedVenueEpochByPublisher??[]),this.athletes=new Map(s.athletes),this.pendingSelfRegistrations=new Map(s.pendingSelfRegistrations??[]),this.selfRegistrationDispositions=new Map(s.selfRegistrationDispositions??[]),this.privateWeighIns=new Map(s.privateWeighIns),this.privateMedicals=new Map(s.privateMedicals),this.bouts=new Map(s.bouts),this.bracketFrozenByClass=new Map(s.bracketFrozenByClass),this.resultCorrections=s.resultCorrections??[],this.scratches=new Map(s.scratches??[]),this.owVotes=new Map(s.owVotes??[]),this.revokedCertificateIds=new Set(s.revokedCertificateIds??[]);const i=s.protocolJournal??[],o=e&&i.length>=this.protocolJournal.length&&this.protocolJournal.every((l,c)=>{const x=i[c];return x&&x.wireHex===l.wireHex&&x.controlHeadHex===l.controlHeadHex&&x.mat?.certificate_id===l.mat?.certificate_id}),a=o?this.protocolJournal.length:0;o||(this.verifiers.clear(),this.knownProvisionHeads.clear());for(let l=a;l<i.length;l++){const c=i[l];if(c.mat&&this.registerMatDelegation(c.mat,!1),c.controlHeadHex){const x=this.verifiers.get(c.matId);if(!x)throw new Error("Provision head precedes mat delegation");x.markControlHeadKnown(ce(c.controlHeadHex)),this.knownProvisionHeads.add(`${c.matId}:${c.controlHeadHex}`)}if(c.wireHex){const x=je(ce(c.wireHex)),d=Number(x.stream_id.split(":")[1]),u=this.verifiers.get(d);if(!u||u.verifyAndAccept(x,Pt,Ne.ScoreMat,c.atMs,!0)!==Se.Applied)throw new Error("Invalid persisted stream journal")}}return this.protocolJournal=i,!0}catch(t){throw new Error(`Stored authority state requires recovery: ${String(t)}`)}}}function yt(r){return r!==null&&r.readyState===EventSource.OPEN}class lc{constructor(e,t){this.authority=e,this.onUpdate=t,this.authority.onStateChanged=()=>{this.venuePollTimer&&this.venueOrigin!==this.authority.activeVenueOrigin&&this.recover(),this.onUpdate()}}authority;onUpdate;source=null;liveEventsSource=null;venuePollTimer=null;session=new AbortController;venueOrigin="";pollHealthy=!1;transportTask=null;polls=new Map;get connectionState(){if(globalThis.navigator?.onLine===!1)return"offline";if(this.venueOrigin!==this.authority.activeVenueOrigin)return"reconnecting";const e=URL.parse(this.venueOrigin)?.origin===globalThis.location?.origin&&(yt(this.source)||yt(this.liveEventsSource));return this.pollHealthy||e?"connected":"reconnecting"}onNetworkChange=()=>{this.resetConnection(),navigator.onLine?this.resume():this.onUpdate()};resume=()=>{navigator.onLine!==!1&&(yt(this.source)||(this.source?.close(),this.source=null),yt(this.liveEventsSource)||(this.liveEventsSource?.close(),this.liveEventsSource=null),this.recover(),this.onUpdate(),this.authority.consoleRole==="primary"&&this.authority.publicNostrRelayPublishingEnabled&&this.authority.athletes.size&&this.authority.publishProjectionToPublicNostrRelays())};onVisibility=()=>{document.visibilityState==="visible"&&this.resume()};openVenueLiveEventsStream(){if(typeof EventSource>"u"||this.liveEventsSource&&this.liveEventsSource.readyState!==EventSource.CLOSED)return;const e=new EventSource("/api/openmat-live-events");this.liveEventsSource=e,e.onopen=()=>{this.liveEventsSource===e&&(this.onUpdate(),this.recover())},e.onerror=()=>{this.liveEventsSource===e&&this.onUpdate()},e.onmessage=({data:t})=>{if(this.liveEventsSource===e)try{this.authority.syncLiveProjectionFromVenue(JSON.parse(t))}catch{}}}isExternalVenueAuthority(){return!!(this.authority.hasExternalVenueServer&&this.authority.linkedVenuePubkeyHex&&this.authority.linkedVenuePubkeyHex.toLowerCase()!==this.authority.publisherPublicKeyHex.toLowerCase())}openRequestRelay(){if(typeof EventSource>"u"||this.isExternalVenueAuthority()||this.source&&this.source.readyState!==EventSource.CLOSED)return;const e=new EventSource("/api/openmat-authority-requests");this.source=e,e.onopen=()=>{this.source===e&&(this.liveEventsSource?.close(),this.liveEventsSource=null,this.onUpdate(),this.authority.flushPendingProjections(location.origin,!0),this.recover())},e.onerror=()=>{this.source===e&&(this.onUpdate(),this.recover(!1))},e.onmessage=({data:t})=>{this.source===e&&this.acceptRequest(t).catch(console.error)}}recover(e=!0){if(typeof location>"u")return;const t=this.authority.consoleRole,s=this.authority.activeVenueOrigin;if(s!==this.venueOrigin&&this.resetConnection(),navigator.onLine===!1)return;const n=/github\.io$/i.test(location.hostname);n||(!yt(this.source)||t!=="primary")&&this.openVenueLiveEventsStream(),this.authority.flushPendingProjections(),this.authority.flushPublicNostrProjections();const{signal:i}=this.session,o=new Set([s,location.origin].filter(l=>{const c=URL.parse(l);return c&&!/github\.io$/i.test(c.hostname)}));for(const l of o){if(this.polls.has(l))continue;const c=(async()=>{let x=!1;try{if(t!=="primary"||!yt(this.source)||l!==location.origin){const d=await fetch(new URL("/api/openmat-live-projection",l),{cache:"no-store",signal:AbortSignal.any([i,AbortSignal.timeout(3500)])});if(d.ok){const u=await d.json();if(i.aborted)return;x=u?.empty===!0,this.authority.syncLiveProjectionFromVenue(u,()=>{x=!0})}}}catch{}i.aborted||(l===s&&this.pollHealthy!==x&&(this.pollHealthy=x,this.onUpdate()),await this.authority.refreshVenueBootstrap(l,i))})().finally(()=>{this.polls.get(l)===c&&this.polls.delete(l)});this.polls.set(l,c)}const a=this.polls.get(location.origin)??Promise.resolve();if(!n&&t==="primary"&&e&&a.then(()=>{i.aborted||(this.isExternalVenueAuthority()?this.source&&(this.source.close(),this.source=null,this.onUpdate()):this.openRequestRelay())}),o.has(s)&&!this.transportTask){const l=this.polls.get(s)??Promise.resolve();this.transportTask=l.then(async()=>{i.aborted||t==="standby"&&!this.authority.linkedVenuePubkeyHex&&!this.authority.athletes.size||await this.authority.startLiveTransport(s,t,i)}).catch(c=>{i.aborted||(this.authority.liveTransportError=String(c))}).finally(()=>{i.aborted||(this.transportTask=null,this.onUpdate())})}}start(){this.stopRequestRelay(),!(typeof location>"u")&&(this.authority.bootstrapFromLocationQuery(location.search),/^(127\.0\.0\.1|localhost)$/i.test(location.hostname)||(this.authority.publicNostrRelayPublishingEnabled=!0),window.addEventListener("online",this.onNetworkChange),window.addEventListener("offline",this.onNetworkChange),window.addEventListener("pageshow",this.resume),window.addEventListener("focus",this.resume),document.addEventListener("visibilitychange",this.onVisibility),this.resume(),this.venuePollTimer=setInterval(()=>this.recover(),3e3),this.onUpdate())}async promoteToPrimary(e=location.origin){this.authority.stopLiveTransport(),this.authority.setConsoleRole("primary"),this.authority.publishAndSave(!0),this.start(),await this.authority.startLiveTransport(e,"primary")}resetConnection(){this.session.abort(),this.session=new AbortController,this.venueOrigin=this.authority.activeVenueOrigin,this.pollHealthy=!1,this.polls.clear(),this.transportTask=null,this.source?.close(),this.source=null,this.liveEventsSource?.close(),this.liveEventsSource=null}stopRequestRelay(){this.resetConnection(),this.venuePollTimer&&clearInterval(this.venuePollTimer),this.venuePollTimer=null,globalThis.window?.removeEventListener("online",this.onNetworkChange),globalThis.window?.removeEventListener("offline",this.onNetworkChange),globalThis.window?.removeEventListener("pageshow",this.resume),globalThis.window?.removeEventListener("focus",this.resume),globalThis.document?.removeEventListener("visibilitychange",this.onVisibility)}stop(){this.stopRequestRelay(),this.authority.stopLiveTransport()}async acceptRequest(e){const t=JSON.parse(e);if(t.type==="SELF_REGISTER"){try{this.authority.stageSelfRegistration(t.payload,"NETWORK_FORM")}catch{}return}let s,n=!1;try{if(t.type==="MATSIDE_REQUEST"&&typeof t.payload=="string")s=_e(this.authority.handleMatsideRequest(ce(t.payload)));else if(t.type==="OW_VOTE")s=this.authority.submitOwVote(t.payload);else if(t.type==="SCOREKEEPER_EVENT"&&typeof t.payload=="string")s=this.authority.acceptMatsideSignedEvent(ce(t.payload));else throw new Error("Unknown authority request");n=!0,this.onUpdate()}catch(i){s=i instanceof Error?i.message:String(i)}await fetch("/api/openmat-authority-receipt",{method:"POST",headers:{"Content-Type":"application/json"},signal:AbortSignal.timeout(4e3),body:JSON.stringify({...this.authority.signRelayReceipt(t.id,n,s),envelope:n?this.authority.buildSignedPublicProjection():void 0})})}}const nr={1:"Pending",2:"Assigned",3:"Up Next (Ready)",4:"Live on Mat",5:"Ended on Mat",6:"Mat Confirmed",7:"Final",8:"Protest Hold",9:"Correction"};function xn(r){const e=mt(r.division_id);return e.includes(r.weight_class_id)?e:[r.weight_class_id,...e]}function ir(r){const e=Number(r);if(!r.trim()||!Number.isInteger(e)||e<0||e>999)throw new Error("Enter a whole number from 0 to 999 in each score field.");return e}class cc extends Kt{static properties={activeTab:{state:!0},colorScheme:{state:!0},selectedDivision:{state:!0},selectedWeightClass:{state:!0},selectedBracketFormat:{state:!0},toastMessage:{state:!0},toastType:{state:!0},setupEdits:{state:!0},qrInputToken:{state:!0},qrLookupSummary:{state:!0},qrCameraScanning:{state:!0},qrCameraError:{state:!0},showSelfRegisterPosterQr:{state:!0},selfRegWeightInputs:{state:!0},selfRegClassInputs:{state:!0},selfRegSkinInputs:{state:!0},rosterSearchQuery:{state:!0},rosterStageFilter:{state:!0},newAthleteName:{state:!0},newAthleteTeamId:{state:!0},newAthleteTeamName:{state:!0},newAthleteDivision:{state:!0},newAthleteWeightClass:{state:!0},newAthleteScaleWeightLbs:{state:!0},newAthleteSeed:{state:!0},newAthleteFloId:{state:!0},newAthleteAutoClear:{state:!0},weighInAthleteId:{state:!0},weighInStationId:{state:!0},weighInScaleId:{state:!0},weighInMeasuredLbs:{state:!0},weighInReassignClass:{state:!0},medicalReviewerId:{state:!0},medicalReviewerRole:{state:!0},medicalDecision:{state:!0},medicalPrivateNotes:{state:!0},rowWeightInputs:{state:!0},rowSkinInputs:{state:!0},rowClassInputs:{state:!0},pasteRosterText:{state:!0},pasteRosterSchool:{state:!0},pasteRosterDivision:{state:!0},pasteRosterAutoClear:{state:!0},matWinnerInputs:{state:!0},matWinTypeInputs:{state:!0},matRedScoreInputs:{state:!0},matGreenScoreInputs:{state:!0},correctionPreview:{state:!0},correctionWinnerId:{state:!0},correctionWinType:{state:!0},correctionRedScore:{state:!0},correctionGreenScore:{state:!0},correctionReason:{state:!0},transferMatId:{state:!0},transferNewDeviceId:{state:!0},transferNewOperator:{state:!0},transferSubjectPubkeyHex:{state:!0},transferReason:{state:!0},transferOldStopped:{state:!0},transferTimersStopped:{state:!0},connectionJoinInput:{state:!0},connectionVenueUrlInput:{state:!0},selectedQrMatId:{state:!0},issueDeviceId:{state:!0},issueOperatorName:{state:!0},issueSubjectPubkeyHex:{state:!0},verifyInputQrOrHex:{state:!0},verifyExpectedMatId:{state:!0},verifyResult:{state:!0}};createRenderRoot(){return this}authority=new oe;sync;cameraStream=null;cameraScanTimer=null;cameraCanvas=null;cameraScanBusy=!1;lastScannedQrRaw="";lastScannedAtMs=0;lastScannedSelectionId="";clearedScannedAtMs=0;recentlyClearedQrRaw=new Map;searchScanTimer=null;wedgeBuffer="";wedgeTimer=null;liveClockTimer=null;selfRegistrationTimer=null;boutClockAnchors=new Map;constructor(){super();const e=typeof window>"u"?null:new URLSearchParams(window.location.search).get("tab");this.activeTab=e==="brackets"||e==="dispatch"||e==="standings"?e:"checkin",this.colorScheme=typeof document<"u"&&document.querySelector('meta[name="color-scheme"]')?.getAttribute("content")==="dark"?"dark":"light",this.selectedDivision="ALL",this.selectedWeightClass="132",this.selectedBracketFormat=J.AutoByCount,this.toastMessage="",this.toastType="ok",this.setupEdits={},this.qrInputToken="",this.qrLookupSummary="",this.qrCameraScanning=!1,this.qrCameraError="",this.showSelfRegisterPosterQr=!1,this.selfRegWeightInputs={},this.selfRegClassInputs={},this.selfRegSkinInputs={},this.rosterSearchQuery="",this.rosterStageFilter="ALL",this.newAthleteName="",this.newAthleteTeamId=Ft[0].teamId,this.newAthleteTeamName=Ft[0].teamName,this.newAthleteDivision=ie.defaultDivision,this.newAthleteWeightClass="132",this.newAthleteScaleWeightLbs="",this.newAthleteSeed=1,this.newAthleteFloId="",this.newAthleteAutoClear=!0,this.weighInAthleteId="",this.weighInStationId="STATION-1",this.weighInScaleId="SCALE-1",this.weighInMeasuredLbs="",this.weighInReassignClass="",this.medicalReviewerId="Head Official",this.medicalReviewerRole="Physician",this.medicalDecision="CLEARED",this.medicalPrivateNotes="",this.rowWeightInputs={},this.rowSkinInputs={},this.rowClassInputs={},this.pasteRosterText="",this.pasteRosterSchool="",this.pasteRosterDivision=ie.defaultDivision,this.pasteRosterAutoClear=!1,this.matWinnerInputs={},this.matWinTypeInputs={},this.matRedScoreInputs={},this.matGreenScoreInputs={},this.correctionPreview=null,this.correctionWinnerId="",this.correctionWinType="DEC",this.correctionRedScore="0",this.correctionGreenScore="0",this.correctionReason="",this.transferMatId=0,this.transferNewDeviceId="mat-backup-scorekeeper",this.transferNewOperator="Relief Scorer",this.transferSubjectPubkeyHex="",this.transferReason="PLANNED_HANDOFF",this.transferOldStopped=!0,this.transferTimersStopped=!0,this.connectionJoinInput="",this.connectionVenueUrlInput="",this.selectedQrMatId=1,this.issueDeviceId="mat-1-scorekeeper",this.issueOperatorName="Table 1 Scorer",this.issueSubjectPubkeyHex="",this.verifyInputQrOrHex="",this.verifyExpectedMatId=1,this.verifyResult=null}onStorage=e=>{e.key==="color-scheme"&&(e.newValue==="light"||e.newValue==="dark")&&this.applyColorScheme(e.newValue,!1)};connectedCallback(){super.connectedCallback(),window.addEventListener("storage",this.onStorage),window.addEventListener("keydown",this.onCheckInWedgeKey,!0),this.sync=new lc(this.authority,()=>{const e=document.activeElement,t=e instanceof HTMLInputElement&&this.contains(e)&&e.dataset.rowWeightInput;this.syncBoutClockAnchors(),this.syncDefaultSelections(),this.requestUpdate(),t&&this.updateComplete.then(()=>{e.isConnected&&document.activeElement===document.body&&e.focus()})}),this.sync.start(),this.pollSelfRegistrations(),this.selfRegistrationTimer=window.setInterval(this.pollSelfRegistrations,5e3),this.liveClockTimer!==null&&clearInterval(this.liveClockTimer),this.liveClockTimer=window.setInterval(()=>{if(this.canonicalTab==="dispatch"){for(const e of this.authority.bouts.values())if(e.clock_running&&(e.lifecycle===$.InProgress||e.lifecycle===$.Ready)){this.requestUpdate();break}}},250),this.syncBoutClockAnchors(),this.syncDefaultSelections()}disconnectedCallback(){window.removeEventListener("storage",this.onStorage),window.removeEventListener("keydown",this.onCheckInWedgeKey,!0),this.searchScanTimer!==null&&clearTimeout(this.searchScanTimer),this.wedgeTimer!==null&&clearTimeout(this.wedgeTimer),this.selfRegistrationTimer!==null&&(clearInterval(this.selfRegistrationTimer),this.selfRegistrationTimer=null),this.liveClockTimer!==null&&(clearInterval(this.liveClockTimer),this.liveClockTimer=null),this.stopQrCameraScanner(),this.sync?.stop(),super.disconnectedCallback()}syncBoutClockAnchors(e=Date.now()){const t=new Set;for(const s of this.authority.bouts.values()){t.add(s.match_id);const n=!!s.clock_running&&(s.lifecycle===$.InProgress||s.lifecycle===$.Ready),i=Math.max(0,Math.trunc(s.clock_remaining_ms)),o=`${s.lifecycle}|${s.period_number}|${i}|${n?1:0}|${s.red_score}|${s.green_score}`,a=this.boutClockAnchors.get(s.match_id);(!a||a.sig!==o)&&this.boutClockAnchors.set(s.match_id,{sig:o,remainingMs:i,syncedAtMs:e,running:n})}for(const s of this.boutClockAnchors.keys())t.has(s)||this.boutClockAnchors.delete(s)}interpolatedBoutRemainingMs(e,t=Date.now()){const s=!!e.clock_running&&(e.lifecycle===$.InProgress||e.lifecycle===$.Ready),n=Math.max(0,Math.trunc(e.clock_remaining_ms)),i=`${e.lifecycle}|${e.period_number}|${n}|${s?1:0}|${e.red_score}|${e.green_score}`;let o=this.boutClockAnchors.get(e.match_id);return(!o||o.sig!==i)&&(o={sig:i,remainingMs:n,syncedAtMs:t,running:s},this.boutClockAnchors.set(e.match_id,o)),o.running?Math.max(0,o.remainingMs-Math.max(0,t-o.syncedAtMs)):o.remainingMs}updated(){const e=this.querySelector("#select-station-wrestler");e&&e.value!==this.weighInAthleteId&&(e.value=this.weighInAthleteId);const t=this.querySelector("#select-station-weight-class"),s=t?.querySelector("option[selected]");t&&s&&t.value!==s.value&&(t.value=s.value)}applyColorScheme(e,t=!0){if(this.colorScheme=e,document.querySelector('meta[name="color-scheme"]')?.setAttribute("content",e),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",e==="dark"?"#0b0f17":"#f8fafc"),t)try{localStorage.setItem("color-scheme",e)}catch{}}toggleColorScheme(){this.applyColorScheme(this.colorScheme==="dark"?"light":"dark")}openConnectionPanel(){const e=this.querySelector("#connection-panel");e&&!e.open&&e.showModal()}closeConnectionPanel(){this.querySelector("#connection-panel")?.close()}syncDefaultSelections(){if(this.weighInAthleteId.startsWith("SELFREG:")&&this.authority.listUncheckedSelfRegistrations().some(t=>`SELFREG:${t.registration_id}`===this.weighInAthleteId))return;const e=Array.from(this.authority.athletes.values());if(!this.weighInAthleteId||!this.authority.athletes.has(this.weighInAthleteId)){const t=e.find(s=>!s.weigh_in_eligible||!s.medically_cleared)??e[0];if(this.weighInAthleteId=t?.athlete_id??"",this.weighInReassignClass="",t){const s=this.authority.privateWeighIns.get(t.athlete_id);this.weighInMeasuredLbs=s?(s.measured_weight_tenths/10).toFixed(1):""}}}advanceToNextPendingAthlete(e){const t=this.authority.listUncheckedSelfRegistrations()[0];if(t){this.selectSelfRegistrationForStation(t,!1);return}const s=Array.from(this.authority.athletes.values()),n=s.find(i=>i.athlete_id!==e&&i.check_in_stage!==Q.Withdrawn&&i.check_in_stage!==Q.Scratched&&(!i.weigh_in_eligible||!i.medically_cleared))??s.find(i=>i.athlete_id!==e)??s[0];if(this.weighInAthleteId=n?.athlete_id??"",this.weighInReassignClass="",n){const i=this.authority.privateWeighIns.get(n.athlete_id);this.weighInMeasuredLbs=i?(i.measured_weight_tenths/10).toFixed(1):""}}selectAthleteForStation(e){this.weighInAthleteId=e.athlete_id,this.authority.selectedPendingSelfRegId="";const t=this.authority.privateWeighIns.get(e.athlete_id);this.weighInMeasuredLbs=t?(t.measured_weight_tenths/10).toFixed(1):"",this.weighInReassignClass="";const s=this.authority.privateMedicals.get(e.athlete_id);this.medicalDecision=s?.decision??"CLEARED"}selectSelfRegistrationForStation(e,t=!0){this.weighInAthleteId=`SELFREG:${e.registration_id}`,this.authority.selectedPendingSelfRegId=e.registration_id,this.weighInMeasuredLbs=this.selfRegWeightInputs[e.registration_id]??"",this.weighInReassignClass=this.selfRegClassInputs[e.registration_id]??"",this.medicalDecision=this.selfRegSkinInputs[e.registration_id]??"CLEARED",this.requestUpdate(),t&&this.updateComplete.then(()=>{const s=this.querySelector("#input-station-scale-weight");s?.focus(),s?.select()})}clearScannedSelection(e){e===this.lastScannedSelectionId&&(this.clearedScannedAtMs=Date.now(),this.lastScannedQrRaw&&this.recentlyClearedQrRaw.set(this.lastScannedQrRaw,this.clearedScannedAtMs))}targetSelfRegClass(e,t,s=""){return s||this.authority.selfRegistrationWeightClass(e,t)}showToast(e,t="ok"){this.toastMessage=e,this.toastType=t}async copyText(e,t){try{await navigator.clipboard.writeText(e),this.showToast(`Copied ${t} to clipboard.`,"ok")}catch{this.showToast(`Could not copy ${t}. Select and copy it manually.`,"error")}}get canonicalTab(){return this.activeTab==="checkin"||this.activeTab==="weighin"||this.activeTab==="medical"?"checkin":this.activeTab==="brackets"?"brackets":this.activeTab==="dispatch"?"dispatch":"standings"}getFeedbackPageUrl(){const e=this.canonicalTab,t="nexus-development-brood-02.mahi-bass.ts.net",{hostname:s,origin:n}=window.location;return`${[t,"localhost","127.0.0.1"].includes(s)?n:`https://${t}`}/feedback/?from=officials&tab=${encodeURIComponent(e)}`}openTab(e){e!=="checkin"&&(this.stopQrCameraScanner(),this.searchScanTimer!==null&&clearTimeout(this.searchScanTimer),this.wedgeTimer!==null&&clearTimeout(this.wedgeTimer),this.wedgeBuffer=""),this.activeTab=e;const t=new URL(window.location.href);t.searchParams.set("tab",this.canonicalTab),t.href!==window.location.href&&window.history.replaceState(window.history.state,"",t)}async startQrCameraScanner(){if(this.qrCameraError="",typeof navigator>"u"||!navigator.mediaDevices?.getUserMedia){this.qrCameraError="Camera access is unavailable in this browser. Type or paste the pass code.";return}try{this.stopQrCameraScanner();const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640},height:{ideal:480}},audio:!1});this.cameraStream=e,this.qrCameraScanning=!0,await this.updateComplete;const t=this.querySelector("#qr-camera-video");t&&(t.srcObject=e,await t.play().catch(()=>{}));const s=window.BarcodeDetector,n=s?new s({formats:["qr_code","code_128","code_39"]}):null;this.cameraScanTimer=window.setInterval(async()=>{if(!this.cameraScanBusy){this.cameraScanBusy=!0;try{const i=this.querySelector("#qr-camera-video");if(!i)return;let o="";if(n)try{const l=(await n.detect(i)).find(c=>c.rawValue&&c.rawValue.trim().length>0);l?.rawValue&&(o=l.rawValue.trim())}catch{}if(!o&&i.readyState>=2&&i.videoWidth>0&&i.videoHeight>0)try{this.cameraCanvas||(this.cameraCanvas=document.createElement("canvas"));const a=i.videoWidth,l=i.videoHeight;this.cameraCanvas.width=a,this.cameraCanvas.height=l;const c=this.cameraCanvas.getContext("2d",{willReadFrequently:!0});if(c){c.drawImage(i,0,0,a,l);const x=c.getImageData(0,0,a,l),d=la(x.data,a,l,{inversionAttempts:"attemptBoth"});d?.data?.trim()&&(o=d.data.trim())}}catch{}if(o){const a=Date.now();if(a-(this.recentlyClearedQrRaw.get(o)??0)<4e3)return;(o!==this.lastScannedQrRaw||this.clearedScannedAtMs>this.lastScannedAtMs&&a-this.clearedScannedAtMs>4e3)&&(this.qrInputToken=o,this.handleQrLookup()!=="NOT_FOUND"&&(this.lastScannedQrRaw=o,this.lastScannedAtMs=a,this.lastScannedSelectionId=this.weighInAthleteId,this.clearedScannedAtMs=0))}}finally{this.cameraScanBusy=!1}}},250)}catch(e){this.qrCameraScanning=!1,this.qrCameraError=`Could not start camera: ${e instanceof Error?e.message:String(e)}`}}stopQrCameraScanner(){if(this.cameraScanTimer!==null&&(clearInterval(this.cameraScanTimer),this.cameraScanTimer=null),this.cameraStream){for(const t of this.cameraStream.getTracks())t.stop();this.cameraStream=null}const e=this.querySelector("#qr-camera-video");e&&(e.srcObject=null),this.qrCameraScanning=!1,this.lastScannedQrRaw="",this.lastScannedSelectionId=""}handleQrLookup(){const e=this.authority.scanOrLookupWrestlerQrOrToken(this.qrInputToken);if(e.kind==="ATHLETE"&&e.athlete){const t=e.athlete;return this.selectAthleteForStation(t),this.qrLookupSummary=`Found: ${t.public_display_name} (${t.team_name}, ${t.weight_class_id} lbs) — Status: ${Te[t.check_in_stage]}`,this.showToast(`Selected ${t.public_display_name} (${t.weight_class_id} lbs) for Check-In & Weigh-In.`,"ok"),e.kind}if(e.kind==="PENDING_SELF_REG"&&e.pendingEntry){const t=e.pendingEntry;return this.selectSelfRegistrationForStation(t),this.qrLookupSummary=`Scanned ${t.public_display_name}. Enter the scale weight and press Enter.`,this.showToast(`Scanned ${t.public_display_name}. Enter the scale weight to check in.`,"ok"),e.kind}return this.qrLookupSummary=e.reason,this.showToast(this.qrLookupSummary,"error"),e.kind}looksLikePass(e){const t=e.trim();return/^openmat:\/\//i.test(t)||/^https?:\/\//i.test(t)&&/[?&](sr|selfreg)=/i.test(t)||/^SR-[0-9A-F]{16}$/i.test(t)||/^PASS-/i.test(t)||/^[A-Za-z0-9_-]{24,}$/.test(t)}looksLikeCompletePassUrl(e){return/^openmat:\/\/self-register/i.test(e)||/^https?:\/\//i.test(e)&&/[?&](sr|selfreg)=/i.test(e)}lookupSearchPass(e){this.looksLikePass(e)&&(this.qrInputToken=e.trim(),this.handleQrLookup()!=="NOT_FOUND"&&(this.rosterSearchQuery=""))}scheduleSearchPassLookup(e){this.searchScanTimer!==null&&clearTimeout(this.searchScanTimer),this.searchScanTimer=null,this.looksLikeCompletePassUrl(e)&&(this.searchScanTimer=window.setTimeout(()=>{this.searchScanTimer=null,this.rosterSearchQuery===e&&this.lookupSearchPass(e)},200))}onCheckInWedgeKey=e=>{if(this.canonicalTab!=="checkin"||e.ctrlKey||e.altKey||e.metaKey)return;const t=e.target;if(!(!t||!this.contains(t)||t.id==="input-roster-search"||!(t.id==="input-station-scale-weight"||t.id.startsWith("self-reg-weight-")||t.tagName==="SELECT")&&!this.wedgeBuffer)&&!(!this.wedgeBuffer&&!/^[hHoOsS]$/.test(e.key))){if(e.key==="Enter"&&this.wedgeBuffer){e.preventDefault(),e.stopPropagation();const n=this.wedgeBuffer;this.wedgeBuffer="",this.wedgeTimer!==null&&clearTimeout(this.wedgeTimer),this.lookupSearchPass(n);return}e.key.length===1&&(e.preventDefault(),e.stopPropagation(),this.wedgeBuffer+=e.key,this.wedgeTimer!==null&&clearTimeout(this.wedgeTimer),this.wedgeTimer=window.setTimeout(()=>{const n=this.wedgeBuffer;this.wedgeBuffer="",this.looksLikeCompletePassUrl(n)&&this.lookupSearchPass(n)},200))}};pollSelfRegistrations=()=>{this.canonicalTab==="checkin"&&navigator.onLine&&this.authority.activeVenueOrigin&&this.authority.syncPendingSelfRegistrationsFromVenue()};focusRowWeight(e){e?.focus(),e?.select()}async handleRowWeightKey(e,t){if(e.isComposing||!["Enter","ArrowDown","ArrowUp"].includes(e.key))return;e.preventDefault();const s=e.currentTarget,n=[...this.querySelectorAll("input[data-row-weight-input]")],i=n.indexOf(s);if(e.key!=="Enter"){this.focusRowWeight(n[i+(e.key==="ArrowDown"?1:-1)]);return}const o=n.slice(i+1),l=o.find(x=>x.dataset.rowWeightInput==="selfreg"||x.hasAttribute("data-pending-weight"))??(s.dataset.rowWeightInput==="roster"?o[0]:void 0);if(!t())return;await this.updateComplete;const c=l&&this.querySelector(`#${CSS.escape(l.id)}`);c?this.focusRowWeight(c):s.isConnected||this.querySelector("#input-roster-search")?.focus()}async handleRefreshSelfRegistrations(){const e=await this.authority.syncPendingSelfRegistrationsFromVenue(),t=this.authority.listUncheckedSelfRegistrations().length;this.showToast(e>0?`Synced ${e} new or updated self-registration(s) (${t} awaiting check-in).`:`Self-registration queue is current (${t} awaiting check-in).`,"ok"),this.requestUpdate()}handleApproveSelfRegistration(e,t){try{const s=this.selfRegWeightInputs[e.registration_id]??"",n=Math.round(Number(s)*10),i=this.authority.findSelfRegistrationAthlete(e)??e,o=this.targetSelfRegClass(i,n,this.selfRegClassInputs[e.registration_id]),a=this.selfRegSkinInputs[e.registration_id]??"CLEARED",l=this.authority.approveSelfRegistration({registrationId:e.registration_id,checkInAndClear:t,measuredWeightTenths:t?n:void 0,reassignWeightClassId:t?o:this.selfRegClassInputs[e.registration_id]||void 0,skinDecision:a,stationId:this.weighInStationId||"STATION-1",scaleId:this.weighInScaleId||"SCALE-1",reviewerId:this.medicalReviewerId||"Head Official"});return this.clearScannedSelection(`SELFREG:${e.registration_id}`),this.advanceToNextPendingAthlete(l.athlete_id),this.showToast(t?l.check_in_stage===Q.Eligible?`✓ Checked in ${l.public_display_name} (${l.weight_class_id} lbs) — Weigh-In & Skin Passed!`:`Checked in ${l.public_display_name} — Status: ${Te[l.check_in_stage]}.`:`Checked in ${l.public_display_name} (${l.team_name}) to tournament roster.`,!t||l.check_in_stage===Q.Eligible?"ok":"error"),!0}catch(s){return this.showToast(s instanceof Error?s.message:String(s),"error"),!1}}async handleBatchApproveSelfRegistrations(e,t){try{const s=this.authority.batchApproveSelfRegistrations({registrationIds:e.map(i=>i.registration_id),checkInAndClear:t,weightInputsByRegId:this.selfRegWeightInputs,classInputsByRegId:this.selfRegClassInputs,skinInputsByRegId:this.selfRegSkinInputs,stationId:this.weighInStationId,scaleId:this.weighInScaleId,reviewerId:this.medicalReviewerId});s.approvedCount&&this.advanceToNextPendingAthlete();const n=s.failures.length?` ${s.failures.length} still pending. ${s.failures[0].message}`:"";this.showToast(`Moved ${s.approvedCount} to the roster. Cleared ${s.clearedCount}.${n}`,n?"error":"ok"),await this.updateComplete,this.querySelector("#pending-self-registrations-panel")||this.querySelector("#input-roster-search")?.focus()}catch(s){this.showToast(s instanceof Error?s.message:String(s),"error")}}handleDismissSelfRegistration(e){this.authority.dismissSelfRegistration(e.registration_id),this.clearScannedSelection(`SELFREG:${e.registration_id}`),this.weighInAthleteId===`SELFREG:${e.registration_id}`&&this.advanceToNextPendingAthlete(),this.showToast(`Dismissed unverified self-registration for ${e.public_display_name}.`,"ok")}get tournamentSetup(){const{tournamentName:e,eventDate:t,venue:s,matCount:n,growthAllowanceTenths:i,rulesVersion:o}=this.authority;return{tournamentName:e,eventDate:t,venue:s,matCount:n,growthAllowanceTenths:i,rulesVersion:o,...this.setupEdits}}editSetup(e){this.setupEdits={...this.setupEdits,...e}}handleSaveTournamentSetup(){try{const{tournamentName:e,eventDate:t,venue:s,matCount:n,growthAllowanceTenths:i,rulesVersion:o}=this.tournamentSetup;this.authority.configureTournament({name:e,eventDate:t,venue:s}),o!==this.authority.rulesVersion&&this.authority.configureRulesVersion(o);const a=i!==this.authority.growthAllowanceTenths;this.authority.growthAllowanceTenths=i,n!==this.authority.matCount?this.authority.configureMatCount(n):a&&this.authority.publishAndSave(),this.setupEdits={};const l=this.authority.rulesBundle.period_1_duration_ms===6e4?"1-2-2 min":"2-2-2 min";this.showToast(`Saved setup: ${this.authority.tournamentName} (${this.authority.matCount} mats, ${l}, +${(i/10).toFixed(1)} lb allowance).`,"ok")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}handleDownloadRosterTemplateCsv(){const e=this.authority.exportRosterTemplateCsv(),t=new Blob([e],{type:"text/csv;charset=utf-8"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`${this.authority.tournamentId||"openmat"}-roster-template.csv`,n.click(),URL.revokeObjectURL(s),this.showToast("Downloaded full tournament roster & backup CSV template.","ok")}handleDownloadCoachSampleCsv(){const e=this.authority.exportCoachRosterTemplateCsv(!1),t=new Blob([e],{type:"text/csv;charset=utf-8"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`${this.authority.tournamentId||"openmat"}-coach-roster-template.csv`,n.click(),URL.revokeObjectURL(s),this.showToast("Downloaded blank coach roster CSV template.","ok")}handleDownloadDemoTemplateCsv(){const e=this.authority.exportDemoTemplateCsv(),t=new Blob([e],{type:"text/csv;charset=utf-8"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download="DemoTemplate.csv",n.click(),URL.revokeObjectURL(s),this.showToast("Downloaded DemoTemplate.csv (224 wrestlers across 14 weight classes).","ok")}handleExportTournamentBackupCsv(){const e=this.authority.exportTournamentBackupCsv(),t=new Blob([e],{type:"text/csv;charset=utf-8"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s;const i=this.authority.eventDate||new Date().toISOString().slice(0,10);n.download=`${this.authority.tournamentId||"openmat"}-full-backup-${i}.csv`,n.click(),URL.revokeObjectURL(s),this.showToast(`Exported full tournament backup CSV (${this.authority.athletes.size} wrestlers, ${this.authority.bouts.size} bouts).`,"ok")}handleDownloadWrestlerStatsCsv(){const e=this.authority.exportWrestlerStatsCsv(),t=new Blob([e],{type:"text/csv;charset=utf-8"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s;const i=this.authority.eventDate||new Date().toISOString().slice(0,10);n.download=`${this.authority.tournamentId||"openmat"}-wrestler-stats-${i}.csv`,n.click(),URL.revokeObjectURL(s);const o=Array.from(this.authority.bouts.values()).filter(a=>!a.is_bye&&le(a)).length;this.showToast(`Downloaded wrestler stats CSV (${this.authority.athletes.size} wrestlers, ${o} completed bouts).`,"ok")}handleExportEmergencyFallbackHtml(){const e=this.authority.exportEmergencyFallbackHtml(),t=new Blob([e],{type:"text/html;charset=utf-8"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s;const i=this.authority.eventDate||new Date().toISOString().slice(0,10);n.download=`${this.authority.tournamentId||"openmat"}-emergency-fallback-${i}.html`,n.click(),URL.revokeObjectURL(s);const o=Array.from(this.authority.bouts.values()).filter(a=>!a.is_bye).length;this.showToast(`Downloaded standalone offline fallback HTML (${this.authority.athletes.size} wrestlers, ${o} bouts).`,"ok")}handleExportEmergencyFallbackXlsx(){const e=this.authority.exportEmergencyFallbackXlsx(),t=new Blob([new Uint8Array(e)],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s;const i=this.authority.eventDate||new Date().toISOString().slice(0,10);n.download=`${this.authority.tournamentId||"openmat"}-emergency-spreadsheet-${i}.xlsx`,n.click(),URL.revokeObjectURL(s);const o=Array.from(this.authority.bouts.values()).filter(a=>!a.is_bye).length;this.showToast(`Downloaded offline Excel tournament workbook (${this.authority.athletes.size} wrestlers, ${o} bouts).`,"ok")}async handleImportRosterCsv(e){const t=e.currentTarget,s=t.files?.[0];if(s)try{const n=await s.text(),i=this.authority.importRosterCsv(n);this.setupEdits={},this.syncDefaultSelections();const o=i.athletes[0];o&&(this.selectedWeightClass=o.weight_class_id);const a=i.rebuiltBracketClasses?` and restored ${i.rebuiltBracketClasses} bracket(s)`:"";this.showToast(`Imported ${i.importedCount} wrestler(s) from ${s.name}${a}.`,"ok")}catch(n){this.showToast(n instanceof Error?n.message:String(n),"error")}finally{t.value=""}}get pastedRosterInput(){return{text:this.pasteRosterText,defaultTeamName:this.pasteRosterSchool,defaultDivisionId:this.pasteRosterDivision,autoClearEligibility:this.pasteRosterAutoClear,stationId:this.weighInStationId,reviewerId:this.medicalReviewerId}}handleImportPastedRoster(e){e.preventDefault();try{const{importedCount:t,skippedDuplicates:s}=this.authority.importPastedRosterText(this.pastedRosterInput);this.pasteRosterText="",this.showToast(`Imported ${t} wrestlers. Skipped ${s} duplicates.`),this.querySelector("#textarea-paste-roster")?.focus()}catch(t){this.showToast(t instanceof Error?t.message:String(t),"error")}}handleBatchClearEligibility(e){try{const t=this.authority.batchClearRosterEligibility({divisionId:this.selectedDivision,athleteIds:e?.map(n=>n.athlete_id),reviewerId:this.medicalReviewerId||"Head Official",stationId:this.weighInStationId||"STATION-1"});this.advanceToNextPendingAthlete();const s=t.skippedHoldOrFailedCount?` Kept ${t.skippedHoldOrFailedCount} holds or failed weigh-ins.`:"";this.showToast(`Cleared ${t.clearedCount} wrestlers.${s}`)}catch(t){this.showToast(t instanceof Error?t.message:String(t),"error")}}handleRegisterAthlete(){try{const e=this.authority.registerAthlete({name:this.newAthleteName,teamId:this.newAthleteTeamId,teamName:this.newAthleteTeamName,divisionId:this.newAthleteDivision,weightClassId:this.newAthleteWeightClass,seedRank:this.newAthleteSeed,flowrestlingId:this.newAthleteFloId});if(this.newAthleteAutoClear){const t=Number(this.newAthleteScaleWeightLbs),s=Number.isFinite(t)&&t>50?Math.round(t*10):Number(e.weight_class_id)*10;this.authority.completeUnifiedCheckIn({athleteId:e.athlete_id,measuredWeightTenths:s,skinDecision:"CLEARED",stationId:this.weighInStationId||"STATION-1",scaleId:this.weighInScaleId||"SCALE-1",reviewerId:this.medicalReviewerId||"Head Official"})}this.newAthleteName="",this.newAthleteScaleWeightLbs="",this.newAthleteFloId="",this.syncDefaultSelections(),this.showToast(`Added ${e.public_display_name} (${e.team_name}, ${e.weight_class_id} lbs)${this.newAthleteAutoClear?" — Checked In & Eligible":""}.`,"ok")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}handleRecordUnifiedStationCheckIn(){try{const e=this.weighInAthleteId;if(!e){this.showToast("Select a wrestler first.","error");return}const t=Math.round(Number(this.weighInMeasuredLbs)*10);if(e.startsWith("SELFREG:")){const o=this.authority.listUncheckedSelfRegistrations().find(x=>x.registration_id===e.slice(8));if(!o)return;const a=this.authority.findSelfRegistrationAthlete(o)??o,l=this.targetSelfRegClass(a,t,this.weighInReassignClass),c=this.authority.approveSelfRegistration({registrationId:o.registration_id,checkInAndClear:!0,measuredWeightTenths:t,reassignWeightClassId:l,skinDecision:this.medicalDecision,stationId:this.weighInStationId||"STATION-1",scaleId:this.weighInScaleId||"SCALE-1",reviewerId:this.medicalReviewerId||"Head Official",reviewerRole:this.medicalReviewerRole,privateClinicalNotes:this.medicalPrivateNotes});this.clearScannedSelection(e),c.check_in_stage===Q.Eligible?this.advanceToNextPendingAthlete(c.athlete_id):this.selectAthleteForStation(c),this.showToast(`✓ Checked in ${c.public_display_name} (${c.weight_class_id} lbs) — ${Te[c.check_in_stage]}.`,c.check_in_stage===Q.Eligible?"ok":"error");return}const s=this.authority.completeUnifiedCheckIn({athleteId:e,measuredWeightTenths:t,reassignWeightClassId:this.weighInReassignClass||void 0,skinDecision:this.medicalDecision,stationId:this.weighInStationId||"STATION-1",scaleId:this.weighInScaleId||"SCALE-1",reviewerId:this.medicalReviewerId||"Head Official",reviewerRole:this.medicalReviewerRole,privateClinicalNotes:this.medicalPrivateNotes}),n=this.authority.privateWeighIns.get(e);this.clearScannedSelection(e),s.check_in_stage===Q.Eligible&&this.advanceToNextPendingAthlete(e);const i=n?`${(n.measured_weight_tenths/10).toFixed(1)} / ${(n.max_allowed_tenths/10).toFixed(1)} lbs`:`${this.weighInMeasuredLbs} lbs`;this.showToast(s.check_in_stage===Q.Eligible?`✓ ${s.public_display_name} passed Weigh-In (${i}) & Skin Check — ELIGIBLE!`:`Recorded ${s.public_display_name} (${i}) — Status: ${Te[s.check_in_stage]}.`,s.check_in_stage===Q.Eligible?"ok":"error")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}handleQuickRowCheckIn(e){try{const t=this.authority.privateWeighIns.get(e.athlete_id),s=this.rowClassInputs[e.athlete_id]||e.weight_class_id,n=t?(t.measured_weight_tenths/10).toFixed(1):"",i=this.rowWeightInputs[e.athlete_id]??n;if(!i.trim())throw new Error("Enter the measured scale weight before check-in.");const o=Math.round(Number(i)*10),a=this.rowSkinInputs[e.athlete_id],l=this.authority.completeUnifiedCheckIn({athleteId:e.athlete_id,measuredWeightTenths:o,reassignWeightClassId:s!==e.weight_class_id?s:void 0,skinDecision:a,stationId:this.weighInStationId||"STATION-1",scaleId:this.weighInScaleId||"SCALE-1",reviewerId:this.medicalReviewerId||"Head Official"});if(a!==void 0){const c={...this.rowSkinInputs};delete c[e.athlete_id],this.rowSkinInputs=c}return this.clearScannedSelection(e.athlete_id),this.weighInAthleteId===e.athlete_id&&this.advanceToNextPendingAthlete(e.athlete_id),this.showToast(l.check_in_stage===Q.Eligible?`✓ ${l.public_display_name} (${l.weight_class_id} lbs) passed Weigh-In & Skin Check!`:`Updated ${l.public_display_name}: ${Te[l.check_in_stage]}`,l.check_in_stage===Q.Eligible?"ok":"error"),!0}catch(t){return this.showToast(t instanceof Error?t.message:String(t),"error"),!1}}handleSetStage(e,t){try{if(t===Q.Scratched){const n=this.authority.athletes.get(e)?.public_display_name??e,i=this.authority.scheduledBoutsForAthlete(e),o=new Set,a=i.map(l=>{for(const u of this.authority.previewCorrectionImpact(l.match_id).affected_downstream_matches)o.add(this.authority.bouts.get(u).bout_number);const c=l.red_athlete_id===e?l.green_athlete_id:l.red_athlete_id,x=this.authority.athletes.get(c),d=`Bout ${l.bout_number}`;return l.lifecycle>$.Ready?`${d} requires director review.`:x?[Q.Withdrawn,Q.Scratched].some(u=>u===x.check_in_stage)?`${d} has no eligible opponent to advance.`:l.format===J.BestOfThree&&l.round_index===3?`${d} goes to ${x.public_display_name} if the series needs a deciding bout.`:`${d} advances ${x.public_display_name} by forfeit.`:`${d} awaits an opponent. The opponent advances by forfeit once assigned.`});for(const l of i)o.delete(l.bout_number);if(o.size&&a.push(`Later bouts may change (${[...o].sort((l,c)=>l-c).join(", ")}).`),a.length&&this.authority.hasExternalVenueServer&&a.push("The venue server keeps these forfeits final."),!window.confirm([`Scratch ${n}?`,...a].join(`
`)))return}const s=this.authority.setCheckInStage(e,t);if(t===Q.Arrived){const n=this.authority.privateWeighIns.get(e);this.rowWeightInputs={...this.rowWeightInputs,[e]:n?(n.measured_weight_tenths/10).toFixed(1):""};const i={...this.rowSkinInputs};delete i[e],this.rowSkinInputs=i,this.weighInAthleteId===e&&this.selectAthleteForStation(s),this.showToast(n?"Verify the scale weight and skin check. Then pass check-in.":"Enter the measured scale weight before check-in.","ok");return}this.showToast(`${s.public_display_name} marked ${Te[s.check_in_stage]}.`,"ok")}catch(s){this.showToast(s instanceof Error?s.message:String(s),"error")}}handleUnfreezeSeeds(){try{this.authority.unfreezeSeeds(this.selectedWeightClass,this.selectedDivision)&&this.showToast(`Unfroze ${this.selectedWeightClass} lbs seeds for editing.`,"ok")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}handleClearBracket(){const e=this.selectedDivision,t=this.selectedWeightClass;if(e==="ALL"){this.showToast("Select the wrestler’s division before you clear a bracket.","error");return}if(window.confirm(`Clear the ${e} ${t} lb bracket?`))try{this.authority.unfreezeBracket(t,e),this.showToast(`Cleared the ${e} ${t} lb bracket.`,"ok")}catch(s){this.showToast(s instanceof Error?s.message:String(s),"error")}}handleMoveSeed(e,t){try{this.authority.moveSeed(e,t)}catch(s){this.showToast(s instanceof Error?s.message:String(s),"error")}}handleGenerateBracket(){try{const e=this.authority.generateBracketForClass(this.selectedWeightClass,this.selectedBracketFormat,this.selectedDivision!=="ALL"?this.selectedDivision:void 0);this.showToast(`Generated ${e.length} bouts for ${this.selectedWeightClass} lbs (${this.selectedBracketFormat}).`,"ok")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}handleGenerateAllBrackets(){try{const e=this.authority.generateAllBrackets(this.selectedBracketFormat,this.selectedDivision);if(e.generatedClasses.length===0){this.showToast("No weight classes have Eligible wrestlers yet. Clear Weigh-In & Skin Check on the Check-In tab first.","error");return}this.showToast(`Generated ${e.totalBouts} bouts across ${e.generatedClasses.length} weight class(es): ${e.generatedClasses.join(", ")}.`,"ok")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}handleResetAllMatches(){if(window.confirm("Are you sure? Reset all matches and brackets. Wrestlers and weigh-ins stay. Reconnect mat devices."))try{this.authority.resetAllMatches(),this.matWinnerInputs={},this.matWinTypeInputs={},this.matRedScoreInputs={},this.matGreenScoreInputs={},this.boutClockAnchors.clear(),this.showToast("Reset all matches. Wrestlers and weigh-ins remain. Generate new brackets.","ok")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}handleClearAll(){if(window.confirm("Are you sure? Clear all wrestlers, weigh-ins, matches, results, and setup? This cannot be undone."))try{this.authority.resetTournamentState(!0),this.setupEdits={},this.selectedDivision="ALL",this.selectedWeightClass="132",this.selectedBracketFormat=J.AutoByCount,this.rosterSearchQuery="",this.rosterStageFilter="ALL",this.weighInAthleteId="",this.weighInMeasuredLbs="",this.weighInReassignClass="",this.selfRegWeightInputs={},this.selfRegClassInputs={},this.selfRegSkinInputs={},this.rowWeightInputs={},this.rowSkinInputs={},this.rowClassInputs={},this.matWinnerInputs={},this.matWinTypeInputs={},this.matRedScoreInputs={},this.matGreenScoreInputs={},this.boutClockAnchors.clear(),this.openTab("checkin"),this.closeConnectionPanel(),this.showToast("Cleared all tournament data. Start a new dry run.","ok")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}handleAutoSeparateSeeds(){try{this.authority.autoSeparateSameTeamSeeds(this.selectedWeightClass,this.selectedDivision!=="ALL"?this.selectedDivision:void 0),this.showToast(`Separated same-school seeds into opposite half-brackets for ${this.selectedWeightClass} lbs.`,"ok")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}handleAssignBout(e,t,s){try{const n=this.authority.assignBoutToMat(e,t,s);let i=`Queue position ${n.mat_queue_order}`;n.lifecycle===$.Ready?i="Ready":n.lifecycle===$.Assigned&&n.mat_queue_order===2&&[...this.authority.bouts.values()].some(o=>o.assigned_mat_id===t&&o.lifecycle===$.InProgress)&&(i="On Deck"),this.showToast(`Bout #${n.bout_number} on Mat ${t}. ${i}.`)}catch(n){this.showToast(n instanceof Error?n.message:String(n),"error")}}handleAutoDispatchRestedBouts(){try{const e=this.authority.dispatchNextAvailableBoutsToMats();if(e.stagedBouts.length>0){const t=e.stagedBouts.map(s=>`Bout #${s.bout_number} → Mat ${s.assigned_mat_id}`).join(", ");this.showToast(`Called ${e.stagedBouts.length} rested bout(s) to mats: ${t}${e.restingBouts.length>0?` (${e.restingBouts.length} bout(s) held for 30-min NFHS rest)`:""}.`,"ok")}else if(e.restingBouts.length>0){const t=e.restingBouts.map(s=>`Bout #${s.bout.bout_number} (${s.restingNames.join(", ")}: ${s.remainingMinutes}m left)`).join("; ");this.showToast(`All remaining current-round bouts are in mandatory 30-min NFHS rest: ${t}.`,"error")}else this.showToast("No additional unstarted bouts are waiting to be called right now.","ok")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}handleClearBoutRestLock(e){try{const t=this.authority.bouts.get(e);if(!t)return;this.authority.clearBoutRestLock(e),this.showToast(`Marked 30-minute NFHS recovery complete for Bout #${t.bout_number}. Ready to call to mat.`,"ok")}catch(t){this.showToast(t instanceof Error?t.message:String(t),"error")}}resolveBracketSlotAthlete(e,t){const s=t==="red"?e.red_athlete_id:e.green_athlete_id;if(s)return this.authority.athletes.get(s);if(e.is_bye)return;const i=Array.from(this.authority.bouts.values()).filter(a=>a.bracket_id===e.bracket_id&&!a.is_bye&&(a.winner_next_match_id===e.match_id||a.loser_next_match_id===e.match_id)).sort((a,l)=>a.bout_number-l.bout_number||a.match_id.localeCompare(l.match_id))[t==="red"?0:1];if(!i||!le(i))return;const o=i.winner_next_match_id===e.match_id?i.winner_athlete_id:i.loser_athlete_id;return o?this.authority.athletes.get(o):void 0}paperResultInputs(e){const t=this.matWinnerInputs[e.match_id]||e.winner_athlete_id||(e.green_score>e.red_score?e.green_athlete_id:e.red_athlete_id),s=new Set(["FALL","TF","MD","DEC","FORFEIT","INJURY_DEFAULT","DQ"]),n=e.win_type?.trim().toUpperCase()??"",i=Math.abs(e.red_score-e.green_score),o=s.has(n)?n:e.red_score!==e.green_score?i>=15?"TF":i>=8?"MD":"DEC":"FALL",a=this.matWinTypeInputs[e.match_id]||o;return{winnerId:t,winType:a,redScore:this.matRedScoreInputs[e.match_id]??String(e.red_score),greenScore:this.matGreenScoreInputs[e.match_id]??String(e.green_score)}}handleRecordCoachBoutResult(e){try{const{winnerId:t,winType:s,redScore:n,greenScore:i}=this.paperResultInputs(e),o=ir(n),a=ir(i);vo(s,t===e.red_athlete_id?o-a:a-o);const l=this.authority.recordMatsideConfirmedResult(e.match_id,t,s,o,a,e.authority_epoch),c=this.authority.athletes.get(l.winner_athlete_id)?.public_display_name??l.winner_athlete_id;this.showToast(`Confirmed Bout #${l.bout_number}: ${c} won by ${l.win_type} (${l.red_score}–${l.green_score}).`,"ok")}catch(t){this.showToast(t instanceof Error?t.message:String(t),"error")}}openCorrectionPreviewModal(e){try{const t=this.authority.bouts.get(e);this.correctionPreview=this.authority.previewCorrectionImpact(e),this.correctionWinnerId=t?.loser_athlete_id||t?.red_athlete_id||"";const s=t?.win_type??"";this.correctionWinType=s&&s!=="BYE"?s:"DEC",this.correctionRedScore=String(t?.green_score??0),this.correctionGreenScore=String(t?.red_score??0),this.correctionReason="",this.querySelector("#correction-impact-dialog")?.showModal()}catch(t){this.showToast(t instanceof Error?t.message:String(t),"error")}}closeCorrectionPreviewModal(){this.querySelector("#correction-impact-dialog")?.close(),this.correctionPreview=null}handleApplySafeCorrection(){if(this.correctionPreview)try{const e=this.correctionPreview.target_match_id,t=this.authority.correctAcceptedResult({matchId:e,winnerAthleteId:this.correctionWinnerId,winType:this.correctionWinType,redScore:Number(this.correctionRedScore),greenScore:Number(this.correctionGreenScore),reason:this.correctionReason});this.closeCorrectionPreviewModal(),this.showToast(`Applied correction for Bout #${t.bout_number} (${t.win_type} ${t.red_score}-${t.green_score}).`,"ok")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}openAuthorityTransferModal(e){this.transferMatId=e,this.transferNewDeviceId=`mat-${e}-relief`,this.transferNewOperator=`Table ${e} Relief Scorer`,this.transferSubjectPubkeyHex="",this.transferReason="PLANNED_HANDOFF",this.transferOldStopped=!0,this.transferTimersStopped=!0,this.querySelector("#authority-transfer-dialog")?.showModal()}closeAuthorityTransferModal(){this.querySelector("#authority-transfer-dialog")?.close(),this.transferMatId=0}handleExecuteAuthorityTransfer(){try{const e=this.authority.transferMatAuthority({matId:this.transferMatId,newAndroidDeviceId:this.transferNewDeviceId,newOperatorName:this.transferNewOperator,subjectPubkeyHex:this.transferSubjectPubkeyHex||void 0,reason:this.transferReason,oldDevicePhysicallyStopped:this.transferOldStopped,timersInitializedStopped:this.transferTimersStopped});this.closeAuthorityTransferModal(),this.showToast(`Transferred Mat ${e.mat_id} to ${e.operator_name||e.android_device_id}.`,"ok")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}handleIssueScorekeeperCert(){try{const e=this.authority.issueMatScorekeeperCertificate({matId:this.selectedQrMatId,androidDeviceId:this.issueDeviceId,operatorName:this.issueOperatorName,subjectPubkeyHex:this.issueSubjectPubkeyHex||void 0});this.verifyInputQrOrHex=e.scorekeeper_qr_uri,this.verifyExpectedMatId=e.mat_id,this.verifyResult=this.authority.validateScorekeeperQrOrCert(e.scorekeeper_qr_uri,e.mat_id),this.showToast(`Authorized ${e.operator_name||e.android_device_id} for Mat ${e.mat_id}.`,"ok")}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}handleVerifyScorekeeperInput(){this.verifyResult=this.authority.validateScorekeeperQrOrCert(this.verifyInputQrOrHex,this.verifyExpectedMatId),this.showToast(this.verifyResult.reason,this.verifyResult.valid?"ok":"error")}handleApplyConnectionJoin(){try{if(this.connectionVenueUrlInput.trim()){const e=this.connectionVenueUrlInput.trim().replace(/\/+$/,"");this.authority.startLiveTransport(e,this.authority.consoleRole)}if(this.connectionJoinInput.trim()){const e=this.authority.bootstrapFromLocationQuery(`?join=${encodeURIComponent(this.connectionJoinInput.trim())}`);if(e.joined)this.showToast(`Linked tournament key ${e.linkedPubkeyHex.slice(0,12)}…`,"ok");else{this.showToast("Could not parse Tournament Join QR or 64-character public key.","error");return}}else this.authority.publishProjectionToPublicNostrRelays(),this.showToast("Published live tournament updates.","ok");this.closeConnectionPanel()}catch(e){this.showToast(e instanceof Error?e.message:String(e),"error")}}render(){const e=Array.from(this.authority.athletes.values()),t=e.filter(_=>_.check_in_stage===Q.Eligible&&_.weigh_in_eligible&&_.medically_cleared).length,s=e.filter(_=>_.check_in_stage!==Q.Withdrawn&&_.check_in_stage!==Q.Scratched&&(!_.weigh_in_eligible||!_.medically_cleared)).length,n=Array.from(this.authority.bouts.values()).filter(_=>!_.is_bye),i=n.filter(_=>_.lifecycle===$.InProgress||!!_.clock_running).length,o=n.filter(le).length,a=typeof window<"u"&&/github\.io$/i.test(window.location.hostname),l=a?this.authority.getPublicPlayerWebUrl():this.authority.getLocalWifiPlayerWebUrl(),c=this.getFeedbackPageUrl(),x=this.sync?.connectionState??"reconnecting",d=this.authority.linkedVenuePubkeyHex?"LINKED VENUE":a?"CLOUD SYNC":"VENUE HOST",u=this.canonicalTab;return G`
      <div class="players-shell">
        <header class="topbar">
          <div class="topbar-left">
            <div class="topbar-status-row">
              <button
                type="button"
                class="status-badge ${x==="connected"?"live":"warn"}"
                id="btn-open-connection-panel"
                aria-live="polite"
                @click=${()=>this.openConnectionPanel()}
                title="View tournament network and venue server status"
              >
                ${x==="connected"?G`<span class="live-pulse"></span>${d}`:x.toUpperCase()}
              </button>
              <span>OFFICIALS &amp; COACH CONSOLE</span>
              <span class="desktop-only-inline">
                · ${t}/${e.length} Eligible · ${o}/${n.length} Bouts · ${this.authority.matCount} Mats
              </span>
            </div>
            <h1 class="topbar-title">
              ${this.authority.tournamentName||"OpenMat Wrestling Tournament"}
            </h1>
          </div>

          <div class="topbar-actions">
            <a
              id="btn-open-player-scoreboard"
              class="btn-icon-pill"
              href=${l}
              target="_blank"
              rel="noopener"
              title="Open Public Player &amp; Spectator Scoreboard"
            >
              <span>Scoreboard ↗</span>
            </a>
            <a
              id="btn-open-feedback"
              class="btn-icon-pill"
              href=${c}
              target="_blank"
              rel="noopener"
              referrerpolicy="origin"
              title="Report a bug or request a feature"
            >
              <span>Feedback &amp; Bugs ↗</span>
            </a>
            <button
              id="btn-toggle-theme"
              class="btn-icon-pill"
              @click=${()=>this.toggleColorScheme()}
              title="Switch between Daylight-Readable Light mode and Dark mode"
            >
              <span>${this.colorScheme==="dark"?"☀":"☾"}</span>
              <span class="desktop-only-inline">
                ${this.colorScheme==="dark"?"Theme: Dark":"Theme: Daylight"}
              </span>
            </button>
            <button
              type="button"
              class="btn-icon-pill"
              @click=${()=>this.openConnectionPanel()}
            >
              <span>Connection</span>
            </button>
          </div>
        </header>

        <nav class="bottom-nav" role="tablist" aria-label="Tournament Official Workflow">
          <button
            role="tab"
            aria-selected=${u==="checkin"}
            class="nav-item ${u==="checkin"?"active":""}"
            @click=${()=>this.openTab("checkin")}
          >
            <span>1. Check-In &amp; Weigh-In</span>
            <span class="badge-weight">${t}/${e.length}</span>
          </button>
          <button
            role="tab"
            aria-selected=${u==="brackets"}
            class="nav-item ${u==="brackets"?"active":""}"
            @click=${()=>this.openTab("brackets")}
          >
            <span>2. Brackets &amp; Seeds</span>
            <span class="badge-weight">${n.length}</span>
          </button>
          <button
            role="tab"
            aria-selected=${u==="dispatch"}
            class="nav-item ${u==="dispatch"?"active":""}"
            @click=${()=>this.openTab("dispatch")}
          >
            <span>3. Mats &amp; Results</span>
            <span class="badge-weight">${i>0?`${i} Live`:`${this.authority.matCount} Mats`}</span>
          </button>
          <button
            role="tab"
            aria-selected=${u==="standings"}
            class="nav-item ${u==="standings"?"active":""}"
            @click=${()=>this.openTab("standings")}
          >
            <span>4. Standings &amp; Share</span>
          </button>
        </nav>

        ${this.toastMessage?G`
              <div class="toast-banner ${this.toastType}" role="status" aria-live="polite">
                <span>${this.toastMessage}</span>
                <button
                  type="button"
                  style="min-height: 26px; padding: 2px 8px; font-size: 11px;"
                  @click=${()=>this.toastMessage=""}
                >
                  Dismiss
                </button>
              </div>
            `:Z}

        <main>
          ${u==="checkin"?this.renderUnifiedCheckInTab(e,t,s):Z}
          ${u==="brackets"?this.renderBracketsTab():Z}
          ${u==="dispatch"?this.renderDispatchTab():Z}
          ${u==="standings"?this.renderStandingsAndShareTab():Z}
        </main>

        ${this.renderConnectionDialog(c,x)}
        ${this.renderCorrectionModal()}
        ${this.renderAuthorityTransferModal()}
      </div>
    `}renderUnifiedCheckInTab(e,t,s){const n=this.tournamentSetup,i=(n.growthAllowanceTenths/10).toFixed(1),o=this.rosterSearchQuery.trim().toLowerCase(),a=this.authority.listUncheckedSelfRegistrations(),l=this.authority.athletes.get(this.weighInAthleteId),c=a.find(f=>this.weighInAthleteId===`SELFREG:${f.registration_id}`),x=c&&(this.authority.findSelfRegistrationAthlete(c)??c),d=(x??l)?.weight_class_id??"132",u=Math.round((Number(this.weighInMeasuredLbs)||0)*10),_=x?this.targetSelfRegClass(x,u,this.weighInReassignClass):this.weighInReassignClass||d,p=this.weighInReassignClass||(x&&_!==d?_:""),h=x?xn(x):l?mt(l.division_id):[],m=this.authority.maxAllowedTenthsForClass(_),E=u>=500&&u<=m,F=this.authority.listUncheckedSelfRegistrations({search:o,divisionId:this.selectedDivision}),g=this.authority.getSelfRegisterPosterUrl(),b=this.authority.getSelfRegisterPosterQrSvg(g),C=e.filter(f=>{if(this.selectedDivision!=="ALL"&&(f.division_id||"VARSITY").toUpperCase()!==this.selectedDivision)return!1;if(this.rosterStageFilter==="PENDING"){if(f.check_in_stage===Q.Withdrawn||f.check_in_stage===Q.Scratched||f.weigh_in_eligible&&f.medically_cleared)return!1}else if(this.rosterStageFilter==="ELIGIBLE"){if(!(f.check_in_stage===Q.Eligible&&f.weigh_in_eligible&&f.medically_cleared))return!1}else if(this.rosterStageFilter==="SCRATCHED"&&f.check_in_stage!==Q.Scratched&&f.check_in_stage!==Q.Withdrawn)return!1;return o?f.public_display_name.toLowerCase().includes(o)||f.team_name.toLowerCase().includes(o)||f.team_id.toLowerCase().includes(o)||f.weight_class_id.toLowerCase().includes(o)||f.opaque_pass_token.toLowerCase().includes(o)||f.athlete_id.toLowerCase().includes(o):!0}),B=C.filter(f=>this.authority.canBatchClearRosterEligibility(f));let w=0,D="";if(this.pasteRosterText.trim())try{w=this.authority.previewPastedRosterText(this.pastedRosterInput).importedCount}catch(f){D=f instanceof Error?f.message:String(f)}return G`
      <!-- 1. Compact Tournament Setup & Coach Spreadsheet Bar -->
      <section class="finder-card" aria-label="Tournament Setup and Roster Import">
        <div class="section-header">
          <div>
            <h2 class="section-title">Tournament Setup &amp; Coach Roster Import</h2>
            <p class="section-sub">
              Import a school CSV or add wrestlers below. Complete check-in, weigh-in, and skin check on this page.
            </p>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            <label
              for="input-import-roster-csv"
              style="cursor: pointer; border-radius: 6px; border: 1px solid var(--accent-primary-hover); background: var(--accent-primary); color: #ffffff; padding: 6px 12px; min-height: 36px; font-weight: 700; font-size: 13px; display: inline-flex; align-items: center; gap: 6px;"
            >
              📂 Import Roster / Backup CSV
            </label>
            <input
              id="input-import-roster-csv"
              type="file"
              accept=".csv,text/csv"
              style="display: none;"
              @change=${f=>this.handleImportRosterCsv(f)}
            />
            <button
              id="btn-download-demo-template-csv"
              type="button"
              @click=${()=>this.handleDownloadDemoTemplateCsv()}
              title="Download DemoTemplate.csv with 224 wrestlers across 14 weight classes"
            >
              ⬇ DemoTemplate.csv
            </button>
            <button
              id="btn-download-coach-sample-csv"
              type="button"
              @click=${()=>this.handleDownloadCoachSampleCsv()}
              title="Download a blank Excel or Google Sheets coach roster template"
            >
              ⬇ Coach Spreadsheet (.csv)
            </button>
            <button
              id="btn-download-roster-template-csv"
              type="button"
              @click=${()=>this.handleDownloadRosterTemplateCsv()}
              title="Download full OpenMat roster and backup CSV template"
            >
              ⬇ Blank Template (.csv)
            </button>
            <button
              id="btn-export-tournament-backup-csv"
              type="button"
              @click=${()=>this.handleExportTournamentBackupCsv()}
              title="Save a complete CSV backup of all wrestlers, weigh-ins, seeds, and brackets"
            >
              💾 Save Backup (.csv)
            </button>
            <button
              id="btn-export-wrestler-stats-csv"
              type="button"
              @click=${()=>this.handleDownloadWrestlerStatsCsv()}
              title="Download all tournament stats per wrestler in one CSV file"
            >
              📊 Wrestler Stats (.csv)
            </button>
            <button
              id="btn-export-emergency-fallback-html"
              type="button"
              class="btn-warn"
              @click=${()=>this.handleExportEmergencyFallbackHtml()}
              title="Download a standalone offline HTML tournament console for single-laptop paper-runner operations"
            >
              🚨 Emergency Fallback (.html)
            </button>
            <button
              id="btn-export-emergency-fallback-xlsx"
              type="button"
              @click=${()=>this.handleExportEmergencyFallbackXlsx()}
              title="Download an offline Excel workbook with live bracket advancement and team point formulas"
            >
              📊 Emergency Workbook (.xlsx)
            </button>
          </div>
        </div>

        <details id="paste-roster-panel" class="paste-roster-panel">
          <summary id="paste-roster-heading">📋 Paste Spreadsheet / Team List</summary>
          <form method="post" aria-labelledby="paste-roster-heading" @submit=${this.handleImportPastedRoster}>
            <div class="form-row">
              <label class="field" for="input-paste-default-school">
                <span>Default School Name</span>
                <input id="input-paste-default-school" name="school" type="text" .value=${this.pasteRosterSchool}
                  @input=${f=>this.pasteRosterSchool=f.target.value}>
              </label>
              <label class="field" for="select-paste-default-division">
                <span>Default Division</span>
                <select id="select-paste-default-division" name="division" .value=${this.pasteRosterDivision}
                  @change=${f=>this.pasteRosterDivision=f.target.value}>
                  ${Yt.map(f=>G`<option value=${f}>${f}</option>`)}
                </select>
              </label>
            </div>
            <div class="paste-roster-actions">
              <input id="check-paste-auto-clear" name="clear-eligibility" type="checkbox" .checked=${this.pasteRosterAutoClear}
                @change=${f=>this.pasteRosterAutoClear=f.target.checked}>
              <label for="check-paste-auto-clear">Mark Weigh-In &amp; Skin Passed</label>
            </div>
            <label class="field" for="textarea-paste-roster">
              <span>Roster Text</span>
              <textarea id="textarea-paste-roster" name="roster" rows="5" required
                aria-describedby="paste-roster-help"
                placeholder="Marcus Rivera    Dos Pueblos    132"
                .value=${this.pasteRosterText}
                @input=${f=>this.pasteRosterText=f.target.value}></textarea>
            </label>
            <p id="paste-roster-help" class="section-sub">Paste one wrestler per row. Include each name and weight.</p>
            <div class="paste-roster-actions">
              <button id="btn-import-pasted-roster" type="submit" class="btn-primary" ?disabled=${!w}>
                Import ${w} Wrestlers
              </button>
              <span class="status-badge" role="status">Ready to import ${w} wrestlers</span>
              ${D?G`<span class="section-sub">${D}</span>`:Z}
            </div>
          </form>
        </details>

        <div class="form-row" style="margin-top: 10px;">
          <label class="field">
            <span>Tournament Name</span>
            <input
              type="text"
              placeholder="e.g. Channel League Invitational"
              .value=${n.tournamentName}
              @input=${f=>this.editSetup({tournamentName:f.target.value})}
            />
          </label>
          <label class="field">
            <span>Event Date</span>
            <input
              type="date"
              .value=${n.eventDate}
              @input=${f=>this.editSetup({eventDate:f.target.value})}
            />
          </label>
          <label class="field">
            <span>Venue / Gym</span>
            <input
              type="text"
              placeholder="e.g. Santa Barbara High School Gym"
              .value=${n.venue}
              @input=${f=>this.editSetup({venue:f.target.value})}
            />
          </label>
          <label class="field">
            <span>Mats</span>
            <select
              @change=${f=>this.editSetup({matCount:Number(f.target.value)})}
            >
              ${Array.from({length:Ye},(f,P)=>P+1).map(f=>G`<option value=${f} .selected=${f===n.matCount}>${f} ${f===1?"Mat":"Mats"}</option>`)}
            </select>
          </label>
          <label class="field">
            <span>Match Periods</span>
            <select
              @change=${f=>this.editSetup({rulesVersion:f.target.value})}
            >
              <option value=${Rt} .selected=${n.rulesVersion===Rt}>Novice / JV (1-2-2 min)</option>
              <option value=${As} .selected=${n.rulesVersion===As}>Varsity (2-2-2 min)</option>
              ${n.rulesVersion!==Rt&&n.rulesVersion!==As?G`<option value=${n.rulesVersion} selected>${n.rulesVersion}</option>`:Z}
            </select>
          </label>
          <label class="field">
            <span>Weight Allowance</span>
            <select
              @change=${f=>this.editSetup({growthAllowanceTenths:Math.round(Number(f.target.value)*10)})}
            >
              <option value="0.0" .selected=${n.growthAllowanceTenths===0}>+0.0 lbs (Scratch Weight)</option>
              <option value="1.0" .selected=${n.growthAllowanceTenths===10}>+1.0 lb (Consecutive Day)</option>
              <option value="2.0" .selected=${n.growthAllowanceTenths===20}>+2.0 lbs (Growth Allowance)</option>
              <option value="3.0" .selected=${n.growthAllowanceTenths===30}>+3.0 lbs (Growth + Day 2)</option>
              ${[0,10,20,30].includes(n.growthAllowanceTenths)?Z:G`<option value=${i} selected>+${i} lbs</option>`}
            </select>
          </label>
          <button type="button" class="btn-primary" @click=${()=>this.handleSaveTournamentSetup()}>
            Save Event Setup
          </button>
        </div>
      </section>

      <!-- 2. Unified Scale Weigh-In & Skin Check Station -->
      <section class="finder-card" aria-label="Scale Weigh-In Entry Form">
        <div class="section-header">
          <div>
            <h2 class="section-title">Unified Weigh-In &amp; Skin Check Station</h2>
            <p class="section-sub">
              Select a wrestler or scan a QR pass. Enter scale weight and record skin clearance.
            </p>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center;">
            <span class="status-badge ${s===0&&e.length>0?"live":"warn"}">
              ${t} Eligible · ${s} Pending
            </span>
            <button
              id="btn-batch-clear-eligibility"
              type="button"
              class="btn-success"
              ?disabled=${s===0}
              @click=${()=>this.handleBatchClearEligibility()}
              title="Mark all checked-in wrestlers as Weighed-In at scratch weight and Skin Cleared"
            >
              ✓ Clear All Pending Wrestlers (${s})
            </button>
          </div>
        </div>

        <div class="form-row">
          <label class="field" style="grid-column: span 2;">
            <span>Wrestler at Scale / Skin Check Table</span>
            <select
              id="select-station-wrestler"
              .value=${this.weighInAthleteId}
              @change=${f=>{const P=f.target.value,N=this.authority.athletes.get(P),y=a.find(A=>`SELFREG:${A.registration_id}`===P);N?this.selectAthleteForStation(N):y&&this.selectSelfRegistrationForStation(y)}}
            >
              ${e.length===0&&a.length===0?G`<option value="">— Scan or add a wrestler —</option>`:Z}
              <optgroup label="Tournament Roster">
                ${e.map(f=>{const P=f.weigh_in_eligible&&f.medically_cleared;return G`
                      <option
                        value=${f.athlete_id}
                        ?selected=${this.weighInAthleteId===f.athlete_id}
                      >
                        ${P?"✓ ":"• "}${f.public_display_name} (${f.team_name} · ${f.division_id} ${f.weight_class_id} lbs)
                      </option>
                    `})}
              </optgroup>
              <optgroup label="Pending Self-Registrations (Quarantined)">
                ${a.map(f=>G`
                  <option value=${`SELFREG:${f.registration_id}`} ?selected=${this.weighInAthleteId===`SELFREG:${f.registration_id}`}>
                    • ${f.public_display_name} (${f.team_name} · ${f.division_id} ${f.weight_class_id} lbs)
                  </option>
                `)}
              </optgroup>
            </select>
          </label>

          <label class="field">
            <span>Scale Weight (lbs) — Max ${(m/10).toFixed(1)}</span>
            <input
              id="input-station-scale-weight"
              type="number"
              step="0.1"
              min="50"
              max="350"
              .value=${this.weighInMeasuredLbs}
              @input=${f=>this.weighInMeasuredLbs=f.target.value}
              @keydown=${f=>{f.key==="Enter"&&(f.preventDefault(),this.handleRecordUnifiedStationCheckIn())}}
            />
          </label>

          <label class="field">
            <span>Skin &amp; Grooming Check</span>
            <select
              .value=${this.medicalDecision}
              @change=${f=>this.medicalDecision=f.target.value}
            >
              <option value="CLEARED">✓ Pass (Skin &amp; Nails OK)</option>
              <option value="CLEARED_PHYSICIAN_FORM">✓ Pass (Physician Release Form)</option>
              <option value="GROOMING_HOLD">⚠ Grooming / Nails Hold</option>
              <option value="MEDICAL_HOLD_DISQUALIFIED">✕ Skin / Medical Disqualification</option>
            </select>
          </label>

          <label class="field">
            <span>Bump Weight Class (Optional)</span>
            <select
              id="select-station-weight-class"
              @change=${f=>this.weighInReassignClass=f.target.value}
            >
              <option value="" ?selected=${!p}>${c?`Auto: ${_} lbs`:`Keep Registered (${d} lbs)`}</option>
              ${h.map(f=>G`<option value=${f} ?selected=${f===p}>Move to ${f} lbs</option>`)}
            </select>
          </label>

          <button
            type="button"
            class="${E&&(this.medicalDecision==="CLEARED"||this.medicalDecision==="CLEARED_PHYSICIAN_FORM")?"btn-success":"btn-primary"}"
            ?disabled=${!l&&!c}
            @click=${()=>this.handleRecordUnifiedStationCheckIn()}
          >
            ✓ Pass Weigh-In &amp; Skin (Record Scale Reading)
          </button>
        </div>

        <details style="margin-top: 10px; font-size: 12px; color: var(--text-muted);">
          <summary style="cursor: pointer; font-weight: 600;">
            Optional Station &amp; Medical Reviewer Details (${this.weighInStationId} · ${this.medicalReviewerId})
          </summary>
          <div class="form-row" style="margin-top: 8px;">
            <label class="field">
              <span>Scale Station ID</span>
              <input
                type="text"
                .value=${this.weighInStationId}
                @input=${f=>this.weighInStationId=f.target.value}
              />
            </label>
            <label class="field">
              <span>Scale Serial / ID</span>
              <input
                type="text"
                .value=${this.weighInScaleId}
                @input=${f=>this.weighInScaleId=f.target.value}
              />
            </label>
            <label class="field">
              <span>Authorized Reviewer / Official</span>
              <input
                type="text"
                .value=${this.medicalReviewerId}
                @input=${f=>this.medicalReviewerId=f.target.value}
              />
            </label>
            <label class="field">
              <span>Private Medical Note (Local Only)</span>
              <input
                type="text"
                placeholder="Never published to public scoreboard"
                .value=${this.medicalPrivateNotes}
                @input=${f=>this.medicalPrivateNotes=f.target.value}
              />
            </label>
          </div>
        </details>
      </section>

      <!-- 3. Registered Roster Directory, Pass Scanner & Inline 1-Click Check-In -->
      <section class="finder-card">
        <div class="section-header">
          <div>
            <h2 class="section-title">Registered Roster Pass Directory &amp; Barcode/QR Scanner</h2>
            <p class="section-sub">
              Search by wrestler, school, or weight class. Press Enter to go to the scale weight.
            </p>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            <button
              id="btn-toggle-self-reg-qr"
              type="button"
              @click=${()=>this.showSelfRegisterPosterQr=!this.showSelfRegisterPosterQr}
            >
              ${this.showSelfRegisterPosterQr?"Hide Self-Registration QR":"📱 Wrestler Self-Registration QR"}
            </button>
            <button
              id="btn-sync-self-registrations"
              type="button"
              @click=${()=>{this.handleRefreshSelfRegistrations()}}
              title="Pull latest wrestler self-registrations from the server staging queue"
            >
              ↻ Sync Self-Reg (${a.length})
            </button>
            <button
              id="btn-camera-qr-scanner"
              type="button"
              class=${this.qrCameraScanning?"btn-danger":"btn-primary"}
              @click=${()=>this.qrCameraScanning?this.stopQrCameraScanner():this.startQrCameraScanner()}
            >
              ${this.qrCameraScanning?"Stop Camera Scanner":"📷 Scan Wrestler QR"}
            </button>
          </div>
        </div>

        ${this.showSelfRegisterPosterQr?G`
              <div
                id="self-reg-poster-panel"
                style="margin-bottom: 12px; padding: 12px; border-radius: 8px; background: var(--bg-inset); border: 1px solid var(--border-strong); display: flex; gap: 14px; align-items: center; flex-wrap: wrap;"
              >
                <div class="qr-box">
                  <img
                    src=${b}
                    alt="Wrestler Self-Registration QR Code"
                    width="140"
                    height="140"
                    style="display: block;"
                  />
                </div>
                <div style="flex: 1; min-width: 220px; display: grid; gap: 6px;">
                  <strong style="font-size: 14px;">Wrestler Self-Registration QR (Pre-Weigh-In Intake)</strong>
                  <span style="font-size: 12px; color: var(--text-muted);">
                    Wrestlers scan this code to enter name, school, division, and weight class on their phone. Entries stay out of the tournament until an official checks them in below.
                  </span>
                  <code class="code-box">${g}</code>
                  <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                    <a
                      href=${g}
                      target="_blank"
                      rel="noopener"
                      style="display: inline-flex; align-items: center; min-height: 28px; padding: 2px 10px; font-size: 12px; font-weight: 700; border-radius: 6px; background: var(--accent-primary, #2563eb); color: #ffffff; text-decoration: none;"
                    >
                      Open Self-Registration Page
                    </a>
                    <button
                      type="button"
                      style="min-height: 28px; padding: 2px 8px; font-size: 12px;"
                      @click=${()=>this.copyText(g,"Wrestler Self-Registration Link")}
                    >
                      Copy Registration Link
                    </button>
                  </div>
                </div>
              </div>
            `:Z}

        ${this.qrCameraScanning?G`
              <div style="margin-bottom: 12px; padding: 10px; border-radius: 8px; background: var(--bg-inset); border: 1px solid var(--border-strong); display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                <video
                  id="qr-camera-video"
                  autoplay
                  playsinline
                  muted
                  style="width: 220px; height: 150px; border-radius: 6px; background: #000; object-fit: cover;"
                ></video>
                <div style="flex: 1; min-width: 200px; display: grid; gap: 6px;">
                  <strong style="display: block; font-size: 13px;">Point camera at Wrestler Phone QR Pass</strong>
                  <span id="qr-camera-status" style="font-size: 12px; color: var(--text-muted);">
                    ${this.qrLookupSummary||"Camera ready. Scan a wrestler pass."}
                  </span>
                </div>
              </div>
            `:Z}
        ${this.qrCameraError?G`<p role="alert">${this.qrCameraError}</p>`:Z}
        ${this.qrLookupSummary?G`<div id="qr-lookup-summary" class="toast-banner ok" style="margin-bottom: 10px;"><span>${this.qrLookupSummary}</span></div>`:Z}

        <search class="form-row" style="margin-bottom: 12px;">
          <label class="field" style="grid-column: span 2;">
            <span>Search School, Wrestler, Weight, or Pass Code</span>
            <input
              id="input-roster-search"
              type="search"
              name="search"
              aria-label="Search registered roster"
              placeholder="Search school, wrestler name, weight class, or scan/paste QR pass…"
              .value=${this.rosterSearchQuery}
              @input=${f=>{const P=f.target.value;this.rosterSearchQuery=P,this.scheduleSearchPassLookup(P)}}
              @keydown=${async f=>{if(f.key!=="Enter"||f.isComposing)return;f.preventDefault();const P=f.target.value;if(this.looksLikePass(P)){this.searchScanTimer!==null&&clearTimeout(this.searchScanTimer),this.lookupSearchPass(P);return}await this.updateComplete,this.focusRowWeight(this.querySelector("input[data-row-weight-input]")??void 0)}}
            />
          </label>
          <label class="field">
            <span>Division</span>
            <select
              .value=${this.selectedDivision}
              @change=${f=>this.selectedDivision=f.target.value}
            >
              <option value="ALL">All Divisions</option>
              ${Yt.map(f=>G`<option value=${f}>${f}</option>`)}
            </select>
          </label>
          <label class="field">
            <span>Check-In Filter</span>
            <select
              .value=${this.rosterStageFilter}
              @change=${f=>this.rosterStageFilter=f.target.value}
            >
              <option value="ALL">All Wrestlers (${e.length})</option>
              <option value="PENDING">Needs Check-In / Weigh-In (${s})</option>
              <option value="ELIGIBLE">Eligible for Brackets (${t})</option>
              <option value="SCRATCHED">Scratched / Withdrawn</option>
            </select>
          </label>
          ${(o||this.selectedDivision!=="ALL")&&B.length?G`
                <button id="btn-batch-clear-filtered" type="button" class="btn-success"
                  @click=${()=>{this.handleBatchClearEligibility(C),this.querySelector("#input-roster-search")?.focus()}}>
                  ✓ Clear Matching Pending (${B.length})
                </button>
              `:Z}
        </search>

        ${F.length>0?G`
              <div
                id="pending-self-registrations-panel"
                style="margin-bottom: 16px; padding: 12px; border-radius: 8px; border: 1px solid var(--status-warn, #d97706); background: var(--bg-inset);"
              >
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
                  <div>
                    <strong style="font-size: 13px;">
                      Pending Wrestler Self-Registrations (${F.length})
                    </strong>
                    <span style="display: block; font-size: 12px; color: var(--text-muted);">
                      Verify identity and enter measured weight at the scale. Use scratch weight for coach-verified wrestlers.
                    </span>
                  </div>
                  <span class="status-badge warn">QUARANTINED STAGING</span>
                  <button id="btn-approve-all-self-registrations" type="button"
                    @click=${()=>this.handleBatchApproveSelfRegistrations(F,!1)}>
                    ✓ Move All to Roster (${F.length})
                  </button>
                  <button id="btn-clear-all-self-registrations" type="button" class="btn-success"
                    @click=${()=>this.handleBatchApproveSelfRegistrations(F,!0)}>
                    ✓ Check In &amp; Scratch-Clear All (${F.length})
                  </button>
                </div>
                <div class="checkin-table" role="region" aria-label="Pending self-registrations" tabindex="0">
                  <table class="data-table">
                    <thead>
                      <tr>
                        <th>Self-Registered Wrestler</th>
                        <th>Div / Weight</th>
                        <th>Scale Weight (lbs)</th>
                        <th>Skin &amp; Nails</th>
                        <th class="num">Official Check-In Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${_i(F,f=>f.registration_id,f=>{const P=this.selfRegWeightInputs[f.registration_id]??"",N=this.authority.findSelfRegistrationAthlete(f)??f,y=this.targetSelfRegClass(N,Math.round(Number(P)*10),this.selfRegClassInputs[f.registration_id]),A=this.selfRegSkinInputs[f.registration_id]??"CLEARED",k=this.authority.selectedPendingSelfRegId===f.registration_id;return G`
                          <tr
                            data-self-reg-id=${f.registration_id}
                            style=${k?"outline: 2px solid var(--accent-primary, #2563eb);":""}
                          >
                            <th scope="row">
                              <button type="button" style="border: 0; background: transparent; padding: 0; min-height: 0; text-align: left;"
                                @click=${()=>this.selectSelfRegistrationForStation(f)}>
                                <strong style="font-size: 14px; text-decoration: underline;">${f.public_display_name}</strong>
                              </button>
                              <span style="display: block; font-size: 12px; color: var(--text-muted);">
                                ${f.team_name} (${f.team_id}) · <code>${f.registration_id}</code>
                              </span>
                            </th>
                            <td>
                              <div style="display: flex; align-items: center; gap: 6px;">
                                <span class="badge-weight">${f.division_id}</span>
                                <select
                                  aria-label="Weight class for ${f.public_display_name}"
                                  style="min-height: 32px; padding: 4px 8px; font-size: 12px; font-weight: 700;"
                                  .value=${y}
                                  @change=${v=>{const M=v.target.value;this.selfRegClassInputs={...this.selfRegClassInputs,[f.registration_id]:M}}}
                                >
                                  ${xn(N).map(v=>G`<option value=${v} ?selected=${v===y}>${v} lbs</option>`)}
                                </select>
                              </div>
                            </td>
                            <td>
                              <input
                                id="self-reg-weight-${f.registration_id}"
                                data-row-weight-input="selfreg"
                                type="number"
                                inputmode="decimal"
                                enterkeyhint="next"
                                step="0.1"
                                min="50"
                                max="350"
                                aria-label="Scale weight for ${f.public_display_name}"
                                style="width: 92px; min-height: 32px; padding: 4px 8px; font-size: 13px;"
                                .value=${P}
                                @input=${v=>{const M=v.target.value;this.selfRegWeightInputs={...this.selfRegWeightInputs,[f.registration_id]:M},this.weighInAthleteId===`SELFREG:${f.registration_id}`&&(this.weighInMeasuredLbs=M)}}
                                @keydown=${v=>this.handleRowWeightKey(v,()=>this.handleApproveSelfRegistration(f,!0))}
                              />
                            </td>
                            <td>
                              <select
                                aria-label="Skin check for ${f.public_display_name}"
                                style="min-height: 32px; padding: 4px 8px; font-size: 12px;"
                                .value=${A}
                                @change=${v=>{this.selfRegSkinInputs={...this.selfRegSkinInputs,[f.registration_id]:v.target.value}}}
                              >
                                <option value="CLEARED">✓ Skin &amp; Nails OK</option>
                                <option value="CLEARED_PHYSICIAN_FORM">✓ MD Form</option>
                                <option value="GROOMING_HOLD">⚠ Grooming Hold</option>
                                <option value="MEDICAL_HOLD_DISQUALIFIED">✕ Skin DQ</option>
                              </select>
                            </td>
                            <td class="num">
                              <div style="display: inline-flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end;">
                                <button
                                  type="button"
                                  class="btn-success"
                                  style="min-height: 32px; padding: 4px 10px; font-size: 12px;"
                                  @click=${()=>this.handleApproveSelfRegistration(f,!0)}
                                >
                                  ✓ Check In &amp; Weigh In
                                </button>
                                <button
                                  type="button"
                                  style="min-height: 32px; padding: 4px 8px; font-size: 12px;"
                                  @click=${()=>this.handleApproveSelfRegistration(f,!1)}
                                >
                                  Check In Only
                                </button>
                                <button
                                  type="button"
                                  class="btn-danger"
                                  style="min-height: 32px; padding: 4px 8px; font-size: 12px;"
                                  @click=${()=>this.handleDismissSelfRegistration(f)}
                                >
                                  Dismiss
                                </button>
                              </div>
                            </td>
                          </tr>
                        `})}
                    </tbody>
                  </table>
                </div>
              </div>
            `:Z}

        ${C.length===0?G`
              <div style="padding: 24px; text-align: center; color: var(--text-muted); background: var(--bg-inset); border-radius: 8px;">
                ${e.length===0?"No wrestlers on the roster. Import a roster CSV or add a wrestler below.":"No wrestlers match the current search filter."}
              </div>
            `:G`
              <div class="checkin-table" role="region" aria-label="Roster directory" tabindex="0">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Wrestler &amp; School</th>
                      <th>Div / Weight</th>
                      <th>Seed</th>
                      <th>Scale Weight (lbs)</th>
                      <th>Skin &amp; Nails</th>
                      <th>Status</th>
                      <th class="num">One-Step Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${_i(C,f=>f.athlete_id,f=>{const P=this.authority.privateWeighIns.get(f.athlete_id),N=this.authority.privateMedicals.get(f.athlete_id),y=f.check_in_stage===Q.Eligible&&f.weigh_in_eligible&&f.medically_cleared,A=f.check_in_stage===Q.Scratched||f.check_in_stage===Q.Withdrawn,k=P?(P.measured_weight_tenths/10).toFixed(1):"",v=this.rowWeightInputs[f.athlete_id]??k,M=this.rowSkinInputs[f.athlete_id]??N?.decision??"CLEARED",S=this.rowClassInputs[f.athlete_id]??f.weight_class_id;return G`
                        <tr>
                          <th scope="row">
                            <button
                              type="button"
                              style="border: 0; background: transparent; padding: 0; min-height: 0; text-align: left; display: block;"
                              @click=${()=>this.selectAthleteForStation(f)}
                            >
                              <strong style="font-size: 14px; text-decoration: underline;">
                                ${f.public_display_name}
                              </strong>
                              <span style="display: block; font-size: 12px; color: var(--text-muted); font-weight: 500;">
                                ${f.team_name} (${f.team_id})
                              </span>
                            </button>
                          </th>
                          <td>
                            <div style="display: flex; align-items: center; gap: 6px;">
                              <span class="badge-weight">${f.division_id}</span>
                              <select
                                aria-label="Weight class for ${f.public_display_name}"
                                style="min-height: 32px; padding: 4px 8px; font-size: 12px; font-weight: 700;"
                                .value=${S}
                                @change=${T=>{this.rowClassInputs={...this.rowClassInputs,[f.athlete_id]:T.target.value}}}
                              >
                                ${xn(f).map(T=>G`<option value=${T} ?selected=${T===S}>${T} lbs</option>`)}
                              </select>
                            </div>
                          </td>
                          <td>
                            <span class="badge-weight">#${f.seed_rank}</span>
                          </td>
                          <td>
                            <input
                              id="row-weight-${f.athlete_id}"
                              data-row-weight-input="roster"
                              ?data-pending-weight=${!y&&!A}
                              type="number"
                              inputmode="decimal"
                              enterkeyhint="next"
                              step="0.1"
                              min="50"
                              max="350"
                              aria-label="Scale weight for ${f.public_display_name}"
                              style="width: 92px; min-height: 32px; padding: 4px 8px; font-size: 13px;"
                              .value=${v}
                              @input=${T=>{this.rowWeightInputs={...this.rowWeightInputs,[f.athlete_id]:T.target.value}}}
                              @keydown=${T=>this.handleRowWeightKey(T,()=>this.handleQuickRowCheckIn(f))}
                            />
                          </td>
                          <td>
                            <select
                              aria-label="Skin check for ${f.public_display_name}"
                              style="min-height: 32px; padding: 4px 8px; font-size: 12px;"
                              .value=${M}
                              @change=${T=>{this.rowSkinInputs={...this.rowSkinInputs,[f.athlete_id]:T.target.value}}}
                            >
                              <option value="CLEARED">✓ Skin &amp; Nails OK</option>
                              <option value="CLEARED_PHYSICIAN_FORM">✓ MD Form</option>
                              <option value="GROOMING_HOLD">⚠ Grooming Hold</option>
                              <option value="MEDICAL_HOLD_DISQUALIFIED">✕ Skin DQ</option>
                            </select>
                          </td>
                          <td>
                            <span
                              class="status-badge ${y?"live":A?"alert":"warn"}"
                            >
                              ${y?"✓ ELIGIBLE":A?Te[f.check_in_stage]:"NEEDS CHECK-IN"}
                            </span>
                          </td>
                          <td class="num">
                            <div style="display: inline-flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end;">
                              <button
                                type="button"
                                class=${y?"":"btn-success"}
                                style="min-height: 32px; padding: 4px 10px; font-size: 12px;"
                                ?disabled=${A}
                                @click=${()=>this.handleQuickRowCheckIn(f)}
                              >
                                ${y?"Update Weight":"✓ Pass Check-In"}
                              </button>
                              ${A?G`
                                    <button
                                      type="button"
                                      style="min-height: 32px; padding: 4px 8px; font-size: 12px;"
                                      @click=${()=>this.handleSetStage(f.athlete_id,Q.Arrived)}
                                    >
                                      Reinstate
                                    </button>
                                  `:G`
                                    <button
                                      type="button"
                                      class="btn-danger"
                                      style="min-height: 32px; padding: 4px 8px; font-size: 12px;"
                                      @click=${()=>this.handleSetStage(f.athlete_id,Q.Scratched)}
                                    >
                                      Scratch
                                    </button>
                                  `}
                            </div>
                          </td>
                        </tr>
                      `})}
                  </tbody>
                </table>
              </div>
            `}
      </section>

      <!-- 4. Add Single Wrestler Card -->
      <section class="finder-card" aria-label="Add Single Wrestler">
        <div class="section-header">
          <div>
            <h2 class="section-title">Add Walk-Up Wrestler</h2>
            <p class="section-sub">
              Add a wrestler to the roster and optionally clear weigh-in and skin check.
            </p>
          </div>
          <label style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; cursor: pointer;">
            <input
              type="checkbox"
              style="min-height: 16px; width: 16px;"
              .checked=${this.newAthleteAutoClear}
              @change=${f=>this.newAthleteAutoClear=f.target.checked}
            />
            Pass Weigh-In &amp; Skin Check immediately
          </label>
        </div>

        <div class="form-row">
          <label class="field">
            <span>Wrestler Full Name</span>
            <input
              type="text"
              placeholder="e.g. Jordan Rivera"
              .value=${this.newAthleteName}
              @input=${f=>this.newAthleteName=f.target.value}
            />
          </label>
          <label class="field">
            <span>Channel League School</span>
            <select
              .value=${Ft.some(f=>f.teamId===this.newAthleteTeamId)?this.newAthleteTeamId:"CUSTOM"}
              @change=${f=>{const P=f.target.value,N=Ft.find(y=>y.teamId===P);N&&(this.newAthleteTeamId=N.teamId,this.newAthleteTeamName=N.teamName)}}
            >
              ${Ft.map(f=>G`<option value=${f.teamId}>${f.teamName} (${f.teamId})</option>`)}
              <option value="CUSTOM">Custom / Visiting School</option>
            </select>
          </label>
          <label class="field">
            <span>School / Club Name</span>
            <input
              type="text"
              placeholder="e.g. Santa Barbara High School"
              .value=${this.newAthleteTeamName}
              @input=${f=>this.newAthleteTeamName=f.target.value}
            />
          </label>
          <label class="field">
            <span>Team Code (2–6 chars)</span>
            <input
              type="text"
              placeholder="e.g. SBHS"
              .value=${this.newAthleteTeamId}
              @input=${f=>this.newAthleteTeamId=f.target.value}
            />
          </label>
          <label class="field">
            <span>Division</span>
            <select
              .value=${this.newAthleteDivision}
              @change=${f=>this.newAthleteDivision=f.target.value}
            >
              ${Yt.map(f=>G`<option value=${f}>${f}</option>`)}
            </select>
          </label>
          <label class="field">
            <span>Weight Class</span>
            <select
              .value=${this.newAthleteWeightClass}
              @change=${f=>this.newAthleteWeightClass=f.target.value}
            >
              ${kn.map(f=>G`<option value=${f}>${f} lbs</option>`)}
            </select>
          </label>
          <label class="field">
            <span>Scale Weight lbs (Optional)</span>
            <input
              type="number"
              step="0.1"
              placeholder="${this.newAthleteWeightClass}.0"
              .value=${this.newAthleteScaleWeightLbs}
              @input=${f=>this.newAthleteScaleWeightLbs=f.target.value}
            />
          </label>
          <label class="field">
            <span>Seed #</span>
            <input
              type="number"
              min="1"
              max="64"
              .value=${String(this.newAthleteSeed)}
              @input=${f=>this.newAthleteSeed=Number(f.target.value)}
            />
          </label>
          <button type="button" class="btn-primary" @click=${()=>this.handleRegisterAthlete()}>
            + Add Wrestler
          </button>
        </div>
      </section>
    `}renderBracketsTab(){const e=Array.from(this.authority.athletes.values()),t=[...e,...this.authority.bouts.values()],s=new Set([...Yt,...t.map(h=>(h.division_id||"VARSITY").toUpperCase())]),n=Array.from(new Set(t.map(h=>h.weight_class_id))).sort((h,m)=>Number(h)-Number(m)),i=n.length>0?n:[...kn],o=e.filter(h=>this.selectedDivision==="ALL"||(h.division_id||"VARSITY").toUpperCase()===this.selectedDivision),a=o.filter(h=>h.weight_class_id===this.selectedWeightClass).sort((h,m)=>h.seed_rank-m.seed_rank),l=o.filter(h=>h.check_in_stage===Q.Eligible&&h.weigh_in_eligible&&h.medically_cleared),c=l.filter(h=>h.weight_class_id===this.selectedWeightClass),x=Array.from(this.authority.bouts.values()).filter(h=>h.weight_class_id===this.selectedWeightClass&&(this.selectedDivision==="ALL"||(h.division_id||"VARSITY").toUpperCase()===this.selectedDivision)).sort((h,m)=>h.round_index-m.round_index||h.bout_number-m.bout_number),d=this.authority.frozenSeedDivisions(this.selectedWeightClass),u=this.selectedDivision==="ALL"?d.size>0:d.has(this.selectedDivision),_=new Map,p=new Map;for(const h of x){const m=h.is_consolation?p:_,E=m.get(h.round_label)??[];E.push(h),m.set(h.round_label,E)}return G`
      <div class="bracket-browser">
        <h2 class="bracket-print-only">${this.selectedDivision==="ALL"?"All divisions":this.selectedDivision} · ${this.selectedWeightClass} lbs</h2>
        <div class="bracket-selection-bar">
          <select
            aria-label="Select Division"
            .value=${this.selectedDivision}
            @change=${h=>this.selectedDivision=h.target.value}
          >
            <option value="ALL">All Divisions</option>
            ${Array.from(s,h=>G`<option value=${h}>${h}</option>`)}
          </select>

          <div class="bracket-weight-tabs" role="tablist" aria-label="Weight Classes">
            ${i.map(h=>{const m=l.filter(E=>E.weight_class_id===h).length;return G`
                <button
                  type="button"
                  class="bracket-weight-tab ${this.selectedWeightClass===h?"active":""}"
                  @click=${()=>this.selectedWeightClass=h}
                >
                  ${h} lbs (${m})
                </button>
              `})}
          </div>
        </div>

        <div class="bracket-toolbar">
          <div>
            <span class="status-badge ${u?"live":"warn"}">
              ${u?"🔒 BRACKET GENERATED":"SEEDING OPEN"}
            </span>
            <span style="font-size: 12px; color: var(--text-muted);">
              ${c.length} Eligible Wrestlers in ${this.selectedWeightClass} lbs · ${x.filter(h=>!h.is_bye).length} Bouts
            </span>
            ${c.length>0?G`
                  <span class="badge-weight" style="font-size: 11px;">
                    ${c.length===1?"1 Wrestler → Uncontested Walkover":c.length===2?"2 Wrestlers → Best of 3 Series (30m Rest)":c.length<=5?`${c.length} Wrestlers → Round Robin Pool (${c.length*(c.length-1)/2} Bouts, 30m Rest)`:`${c.length} Wrestlers → ${this.selectedBracketFormat===J.RoundRobinPool?"Round Robin Pool":"Double-Elimination Bracket"}`}
                  </span>
                `:Z}
          </div>

          <div>
            <select
              aria-label="Bracket Format"
              .value=${this.selectedBracketFormat}
              @change=${h=>this.selectedBracketFormat=h.target.value}
            >
              <option value=${J.AutoByCount}>
                Auto by Count (2=Best of 3, 3–5=Round Robin, 6+=Double Elim)
              </option>
              <option value=${J.BestOfThree}>
                Best of 3 Series (2 Wrestlers)
              </option>
              <option value=${J.RoundRobinPool}>
                Round-Robin Pool (3–6+ Wrestlers)
              </option>
              <option value=${J.DoubleElimCrossover}>
                NFHS Double-Elimination (Crossover)
              </option>
              <option value=${J.TrueSecondChallenge}>
                Double-Elimination + True Second
              </option>
            </select>
            <button
              type="button"
              @click=${()=>this.handleAutoSeparateSeeds()}
              ?disabled=${u||c.length<2}
            >
              ⇄ Separate Same-School Seeds
            </button>
            <button
              id="btn-generate-bracket"
              type="button"
              class="btn-primary"
              @click=${()=>this.handleGenerateBracket()}
              ?disabled=${c.length===0}
            >
              ⚡ Generate ${this.selectedWeightClass} lbs Bracket
            </button>
            ${x.length?G`
              <button type="button" class="btn-warn" @click=${()=>this.handleClearBracket()}>
                Clear Bracket
              </button>
            `:Z}
            <button
              id="btn-generate-all-brackets"
              type="button"
              class="btn-success"
              @click=${()=>this.handleGenerateAllBrackets()}
            >
              ⚡ Generate All Weight Classes
            </button>
            <button
              id="btn-brackets-emergency-fallback-html"
              type="button"
              class="btn-warn"
              @click=${()=>this.handleExportEmergencyFallbackHtml()}
              title="Download a standalone offline HTML tournament file for single-laptop paper-runner emergency use"
            >
              🚨 Download Fallback (.html)
            </button>
            <button
              id="btn-brackets-emergency-fallback-xlsx"
              type="button"
              @click=${()=>this.handleExportEmergencyFallbackXlsx()}
              title="Download an offline Excel workbook with live bracket and standings formulas"
            >
              📊 Spreadsheet (.xlsx)
            </button>
            <button id="btn-reset-all-matches" type="button" class="btn-warn" @click=${()=>this.handleResetAllMatches()}>
              Reset All Matches
            </button>
            <button id="btn-clear-all" type="button" class="btn-danger" @click=${()=>this.handleClearAll()}>
              Clear All
            </button>
          </div>
        </div>

        ${this.authority.bouts.size>0?G`
              <div
                id="emergency-fallback-ready-banner"
                style="padding: 10px 14px; background: var(--bg-inset); border-bottom: 1px solid var(--border-subtle); display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px; font-size: 12px;"
              >
                <div>
                  <strong>Emergency Single-Laptop Fallback Ready:</strong>
                  Download the standalone HTML or Excel file now. Run mat devices in Practice Mode and enter paper runner slips offline if networks fail.
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                  <button
                    type="button"
                    class="btn-primary"
                    style="min-height: 30px; padding: 3px 10px; font-size: 12px;"
                    @click=${()=>this.handleExportEmergencyFallbackHtml()}
                  >
                    ⬇ Standalone Tournament (.html)
                  </button>
                  <button
                    type="button"
                    style="min-height: 30px; padding: 3px 10px; font-size: 12px;"
                    @click=${()=>this.handleExportEmergencyFallbackXlsx()}
                  >
                    ⬇ Excel Workbook (.xlsx)
                  </button>
                </div>
              </div>
            `:Z}

        <!-- Visual Bracket Columns -->
        ${x.length===0?G`
              <div style="padding: 32px; text-align: center; color: var(--text-muted); background: var(--bracket-canvas);">
                <p style="margin: 0 0 10px; font-size: 14px; font-weight: 600;">
                  No bracket generated yet for ${this.selectedWeightClass} lbs.
                </p>
                <p class="bracket-screen-only" style="margin: 0; font-size: 12px;">
                  ${c.length>0?`Review seed order below and click "Generate ${this.selectedWeightClass} lbs Bracket".`:"Clear wrestlers on Tab 1 (Check-In & Weigh-In) to make them eligible for brackets."}
                </p>
              </div>
            `:G`
              <div class="bracket-scroll">
                ${_.size>0?G`
                      <h3 style="margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">
                        ${x[0]?.format===J.BestOfThree?`Best of 3 Series (30-Min Mandatory Rest Between Matches) — ${this.selectedWeightClass} lbs`:x[0]?.format===J.RoundRobinPool?`Round-Robin Pool (${c.length} Wrestlers · 30-Min Rest Between Rounds) — ${this.selectedWeightClass} lbs`:`Championship Bracket — ${this.selectedWeightClass} lbs`}
                      </h3>
                      ${this.renderBracketRounds(_)}
                    `:Z}

                ${p.size>0?G`
                      <h3 style="margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">
                        Consolation &amp; Placement Rounds — ${this.selectedWeightClass} lbs
                      </h3>
                      ${this.renderBracketRounds(p)}
                    `:Z}

                ${x[0]?.format===J.BestOfThree||x[0]?.format===J.RoundRobinPool?this.renderBracketPoolStandingsTable(this.selectedWeightClass,this.selectedDivision!=="ALL"?this.selectedDivision:void 0):Z}
              </div>
            `}
      </div>

      <!-- Seed Order & Entrant Table for Selected Weight Class -->
      <section class="finder-card bracket-seeds">
        <div class="section-header">
          <div>
            <h2 class="section-title">
              Seed Order — ${this.selectedWeightClass} lbs (${c.length} Eligible / ${a.length} Registered)
            </h2>
            <p class="section-sub bracket-screen-only">
              Use ↑ or ↓ to adjust seeds before bracket generation, or click Unfreeze Seeds.
            </p>
          </div>
          ${u?G`
                <button
                  type="button"
                  class="btn-warn"
                  @click=${()=>this.handleUnfreezeSeeds()}
                >
                  🔓 Unfreeze Seeds
                </button>
              `:Z}
        </div>

        ${a.length===0?G`<p style="color: var(--text-muted); margin: 0;">No wrestlers registered in ${this.selectedWeightClass} lbs.</p>`:G`
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Seed</th>
                    <th>Wrestler</th>
                    <th>School / Team</th>
                    <th>Eligibility</th>
                    <th class="num bracket-screen-only">Adjust Seed</th>
                  </tr>
                </thead>
                <tbody>
                  ${a.map(h=>{const m=d.has((h.division_id||"VARSITY").toUpperCase()),E=h.check_in_stage===Q.Eligible&&h.weigh_in_eligible&&h.medically_cleared;return G`
                      <tr>
                        <td><span class="badge-weight">#${h.seed_rank}</span></td>
                        <td><strong>${h.public_display_name}</strong></td>
                        <td>${h.team_name} (${h.team_id})</td>
                        <td>
                          <span class="status-badge ${E?"live":"warn"}">
                            ${E?"✓ ELIGIBLE":Te[h.check_in_stage]}
                          </span>
                        </td>
                        <td class="num bracket-screen-only">
                          <div style="display: inline-flex; gap: 4px;">
                            <button
                              type="button"
                              style="min-height: 28px; padding: 2px 8px;"
                              ?disabled=${m}
                              @click=${()=>this.handleMoveSeed(h.athlete_id,-1)}
                              title="Move Seed Up"
                            >
                              ↑
                            </button>
                            <button
                              type="button"
                              style="min-height: 28px; padding: 2px 8px;"
                              ?disabled=${m}
                              @click=${()=>this.handleMoveSeed(h.athlete_id,1)}
                              title="Move Seed Down"
                            >
                              ↓
                            </button>
                          </div>
                        </td>
                      </tr>
                    `})}
                </tbody>
              </table>
            `}
      </section>
    `}renderBracketRounds(e){return G`
      <div class="bracket-rounds">
        ${Array.from(e,([t,s])=>G`
          <section class="bracket-round">
            <h4 class="bracket-round-title">${t}</h4>
            <div class="bracket-round-bouts">
              ${s.map(n=>this.renderBracketBoutNode(n))}
            </div>
          </section>`)}
      </div>`}renderBracketPoolStandingsTable(e,t){const s=this.authority.computeBracketStandings(e,t);return s.length===0?Z:G`
      <div style="margin-top: 8px; padding-top: 12px; border-top: 1px solid var(--border-subtle);">
        <h3 style="margin: 0 0 8px; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">
          Pool / Series Standings &amp; 30-Min Rest Status (${e} lbs)
        </h3>
        <div style="overflow-x: auto;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Place</th>
                <th>Wrestler</th>
                <th>School</th>
                <th class="num">W–L</th>
                <th class="num">Falls</th>
                <th class="num">Bonus Pts</th>
                <th class="num">Pt Diff</th>
                <th>30-Min Rest Status</th>
              </tr>
            </thead>
            <tbody>
              ${s.map(n=>{const i=this.authority.getAthleteRestStatus(n.athlete_id);return G`
                  <tr>
                    <td>
                      <span class="badge-weight">
                        ${n.place===1?"🥇 1st":n.place===2?"🥈 2nd":n.place===3?"🥉 3rd":`#${n.place}`}
                      </span>
                    </td>
                    <td><strong>${n.public_display_name}</strong></td>
                    <td>${n.team_name} (${n.team_id})</td>
                    <td class="num"><strong>${n.wins}–${n.losses}</strong></td>
                    <td class="num">${n.falls_forfeits_dq}</td>
                    <td class="num">+${n.bonus_points.toFixed(1)}</td>
                    <td class="num">${n.points_scored-n.points_allowed>=0?`+${n.points_scored-n.points_allowed}`:n.points_scored-n.points_allowed}</td>
                    <td>
                      ${i.restLocked?G`
                            <span class="status-badge warn">
                              ⏱ Rest: ${i.remainingMinutes}m left
                            </span>
                          `:G`
                            <span class="status-badge live">
                              ✓ Rested &amp; Ready
                            </span>
                          `}
                    </td>
                  </tr>
                `})}
            </tbody>
          </table>
        </div>
      </div>
    `}renderBracketBoutNode(e){const t=this.resolveBracketSlotAthlete(e,"red"),s=this.resolveBracketSlotAthlete(e,"green"),n=le(e),i=!n&&(e.lifecycle===$.InProgress||e.lifecycle===$.Ready),o=!n&&!e.is_bye?this.authority.getBoutRestStatus(e.match_id):null;return G`
      <div
        class="bracket-bout"
        style="background: var(--bg-surface); border: 1px solid ${i?"var(--status-live)":o?.restLocked?"var(--status-warn)":n?"var(--border-strong)":"var(--border-subtle)"}; border-radius: 8px; padding: 8px 10px; box-shadow: var(--shadow-card); display: grid; gap: 6px;"
      >
        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 11px; color: var(--text-muted); font-weight: 700;">
          <span>Bout #${e.bout_number} · Mat ${e.assigned_mat_id}${this.selectedDivision==="ALL"?G`<span class="bracket-print-only"> · ${e.division_id||"VARSITY"}</span>`:Z}</span>
          <span>
            ${e.is_bye?"BYE":n?`FINAL (${e.win_type||"DEC"})`:o?.restLocked?`⏱ REST (${o.remainingMinutes}m)`:nr[e.lifecycle]}
          </span>
        </div>

        <div
          style="display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 4px 6px; border-radius: 4px; background: ${e.winner_athlete_id&&e.winner_athlete_id===t?.athlete_id?"var(--status-live-bg)":"var(--bg-inset)"};"
        >
          <span style="font-size: 12px; font-weight: ${e.winner_athlete_id&&e.winner_athlete_id===t?.athlete_id?"800":"600"}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            <span class="corner-pill corner-red-pill">R</span>
            ${t?`#${t.seed_rank} ${t.public_display_name} (${t.team_id})`:e.is_bye?"BYE":"TBD"}
          </span>
          <strong style="font-size: 13px;">${e.is_bye?"":e.red_score}</strong>
        </div>

        <div
          style="display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 4px 6px; border-radius: 4px; background: ${e.winner_athlete_id&&e.winner_athlete_id===s?.athlete_id?"var(--status-live-bg)":"var(--bg-inset)"};"
        >
          <span style="font-size: 12px; font-weight: ${e.winner_athlete_id&&e.winner_athlete_id===s?.athlete_id?"800":"600"}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            <span class="corner-pill corner-green-pill">G</span>
            ${s?`#${s.seed_rank} ${s.public_display_name} (${s.team_id})`:e.is_bye?"BYE":"TBD"}
          </span>
          <strong style="font-size: 13px;">${e.is_bye?"":e.green_score}</strong>
        </div>

        ${o?.restLocked?G`
              <div
                style="display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 4px 6px; border-radius: 4px; background: var(--status-warn-bg); color: var(--status-warn); font-size: 11px; font-weight: 700;"
              >
                <span>⏱ 30m Rest: ${o.restingAthleteNames.join(", ")} (${o.remainingMinutes}m)</span>
                <button
                  type="button"
                  style="min-height: 22px; padding: 1px 6px; font-size: 10px;"
                  @click=${()=>this.handleClearBoutRestLock(e.match_id)}
                  title="Mark 30-minute rest complete so this bout can be called to a mat immediately"
                >
                  ✓ Rest Done
                </button>
              </div>
            `:Z}

        ${!e.is_bye&&t&&s?G`
              <div class="bracket-screen-only" style="display: flex; justify-content: space-between; align-items: center; gap: 6px; padding-top: 4px; border-top: 1px solid var(--border-subtle);">
                ${n?G`
                      <button
                        type="button"
                        style="min-height: 26px; padding: 2px 8px; font-size: 11px;"
                        @click=${()=>this.openCorrectionPreviewModal(e.match_id)}
                      >
                        Correct Result
                      </button>
                    `:G`
                      <button
                        type="button"
                        style="min-height: 26px; padding: 2px 8px; font-size: 11px;"
                        @click=${()=>this.openTab("dispatch")}
                      >
                        Go to Mat ${e.assigned_mat_id} →
                      </button>
                    `}
              </div>
            `:Z}
      </div>
    `}renderDispatchTab(){const e=this.authority.detectCoachConflicts(),t=Array.from(this.authority.bouts.values()).filter(a=>!a.is_bye).sort((a,l)=>a.bout_number-l.bout_number),s=Array.from(this.authority.mats.values()).sort((a,l)=>a.mat_id-l.mat_id),n=t.filter(le),i=t.filter(a=>!le(a)&&a.red_athlete_id&&a.green_athlete_id),o=i.length>0?Math.min(...i.map(a=>a.round_index)):1;return G`
      ${e.length>0?G`
            <div class="urgent-strip" role="alert">
              <div>
                <strong>⚠ Coach Same-School Conflict Alert:</strong>
                ${e.map(a=>G`<span style="margin-left: 6px;">
                      ${a.team_name}: Bout #${a.first_bout_number} (Mat ${a.first_mat_id}) &amp; Bout #${a.second_bout_number} (Mat ${a.second_mat_id})
                    </span>`)}
              </div>
              <div style="display: flex; gap: 6px;">
                ${[...new Set(e.map(a=>{const l=this.authority.bouts.get(a.second_match_id);return l?.lifecycle===$.Ready?l:this.authority.bouts.get(a.first_match_id)}))].filter(a=>a?.lifecycle===$.Ready).map(a=>G`
                    <button
                      type="button"
                      class="btn-warn"
                      style="min-height: 30px; padding: 4px 10px; font-size: 12px;"
                      @click=${()=>this.handleAssignBout(a.match_id,a.assigned_mat_id,"ON_DECK")}
                    >
                      Hold Bout #${a.bout_number} On Deck
                    </button>
                  `)}
              </div>
            </div>
          `:Z}

      <!-- Live Mats Grid (1..N) -->
      <div class="section-header">
        <div>
          <h2 class="section-title">Live Mats &amp; Queue Dispatch (${s.length} Mats)</h2>
          <p class="section-sub">
            Matside scorekeepers update scores and advance brackets automatically. OpenMat enforces <strong>30-minute NFHS recovery rest</strong>.
          </p>
        </div>
        <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
          <button
            type="button"
            class="btn-primary"
            @click=${()=>this.handleAutoDispatchRestedBouts()}
            title="Assign next available rested bouts in the active round to open mats"
          >
            ⚡ Auto-Call Rested Bouts to Open Mats
          </button>
          <button
            type="button"
            @click=${()=>{this.selectedQrMatId=1,this.openTab("standings")}}
          >
            📱 Pair Mat Scorekeeper Phones (QR)
          </button>
          <button
            id="btn-dispatch-emergency-fallback-html"
            type="button"
            class="btn-warn"
            @click=${()=>this.handleExportEmergencyFallbackHtml()}
            title="Download standalone offline HTML tournament console for paper-runner operations"
          >
            🚨 Emergency Fallback (.html)
          </button>
        </div>
      </div>

      ${t.length===0?G`
            <div class="finder-card" style="text-align: center; padding: 28px; color: var(--text-muted);">
              <p style="margin: 0 0 10px; font-size: 14px; font-weight: 700;">
                No bouts generated yet.
              </p>
              <button
                type="button"
                class="btn-primary"
                @click=${()=>this.openTab("brackets")}
              >
                Go to Tab 2 (Brackets &amp; Seeds) to Generate Brackets →
              </button>
            </div>
          `:G`
            <div class="mats-grid">
              ${s.map(a=>{const l=p=>p===$.InProgress?0:p===$.EndedLocal||p===$.LocallyConfirmed?1:p===$.Ready?2:3,c=i.filter(p=>p.assigned_mat_id===a.mat_id).sort((p,h)=>{const m=l(p.lifecycle),E=l(h.lifecycle);if(m!==E)return m-E;if(m===0){if(p.clock_running!==h.clock_running)return p.clock_running?-1:1;const B=h.red_score+h.green_score-(p.red_score+p.green_score);if(B!==0)return B}const F=p.round_index===o?0:1,g=h.round_index===o?0:1;if(F!==g)return F-g;const b=this.authority.getBoutRestStatus(p.match_id).restLocked?1:0,C=this.authority.getBoutRestStatus(h.match_id).restLocked?1:0;return b!==C?b-C:p.mat_queue_order-h.mat_queue_order||p.bout_number-h.bout_number}),x=c[0],d=c.slice(1,5),u=x?.lifecycle===$.InProgress,_=!!(a.certificate_id&&a.status==="ONLINE_SYNCED");return G`
                  <article class="mat-card" aria-label="Mat ${a.mat_id}">
                    <div class="mat-header">
                      <div>
                        <h3>MAT ${a.mat_id}</h3>
                        <span style="font-size: 11px; color: var(--text-muted);">
                          ${_?`📱 ${a.operator_name||a.android_device_id}`:"Table / Coach Console Ready"}
                        </span>
                      </div>
                      <div style="display: flex; gap: 4px; align-items: center;">
                        <span
                          class="status-badge ${u?"live":x?"warn":"idle"}"
                        >
                          ${x?nr[x.lifecycle]:"OPEN"}
                        </span>
                        <button
                          type="button"
                          style="min-height: 28px; padding: 2px 8px; font-size: 11px;"
                          @click=${()=>this.openAuthorityTransferModal(a.mat_id)}
                          title="Transfer or pair Android Scorekeeper phone for Mat ${a.mat_id}"
                        >
                          Handoff
                        </button>
                      </div>
                    </div>

                    ${x?this.renderActiveMatBoutCard(x):G`
                          <div style="padding: 18px; text-align: center; color: var(--text-muted); background: var(--bg-inset); border-radius: 6px; font-size: 12px;">
                            No active bout on Mat ${a.mat_id}.
                          </div>
                        `}

                    ${d.length>0?G`
                          <div style="display: grid; gap: 6px;">
                            <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-muted);">
                              On Deck &amp; In the Hole (${d.length})
                            </div>
                            ${d.map((p,h)=>{const m=this.authority.athletes.get(p.red_athlete_id),E=this.authority.athletes.get(p.green_athlete_id),F=this.authority.getBoutRestStatus(p.match_id);return G`
                                <div class="queue-item">
                                  <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <strong>
                                      ${h===0?"ON DECK":"IN HOLE"} · Bout #${p.bout_number} (${p.weight_class_id} lbs · ${p.round_label})
                                    </strong>
                                    <div style="display: flex; gap: 4px;">
                                      ${F.restLocked?G`
                                            <span class="status-badge warn" style="font-size: 10px;">
                                              ⏱ ${F.remainingMinutes}m Rest
                                            </span>
                                            <button
                                              type="button"
                                              style="min-height: 24px; padding: 1px 6px; font-size: 11px;"
                                              @click=${()=>this.handleClearBoutRestLock(p.match_id)}
                                              title="Mark 30-minute rest complete"
                                            >
                                              ✓ Rest Done
                                            </button>
                                          `:G`
                                            <button
                                              type="button"
                                              style="min-height: 24px; padding: 1px 6px; font-size: 11px;"
                                              @click=${()=>this.handleAssignBout(p.match_id,a.mat_id,"READY")}
                                            >
                                              ${u?"Move to On Deck":"Call to Mat"}
                                            </button>
                                          `}
                                      <select
                                        aria-label="Move Bout #${p.bout_number} to another mat"
                                        style="min-height: 24px; padding: 1px 4px; font-size: 11px;"
                                        .value=${String(p.assigned_mat_id)}
                                        @change=${g=>this.handleAssignBout(p.match_id,Number(g.target.value),"ON_DECK")}
                                      >
                                        ${s.map(g=>G`<option value=${g.mat_id}>Mat ${g.mat_id}</option>`)}
                                      </select>
                                    </div>
                                  </div>
                                  <div>
                                    <span class="corner-red">${m?.public_display_name??"TBD"}</span>
                                    vs
                                    <span class="corner-green">${E?.public_display_name??"TBD"}</span>
                                  </div>
                                </div>
                              `})}
                          </div>
                        `:Z}
                  </article>
                `})}
            </div>
          `}

      <!-- Completed Bouts & Result Corrections -->
      <section class="finder-card">
        <div class="section-header">
          <div>
            <h2 class="section-title">Completed Bouts &amp; Safe Bracket Corrections (${n.length})</h2>
            <p class="section-sub">
              Click <strong>Correct Result</strong> to preview downstream impact and update the bracket.
            </p>
          </div>
          <button
            id="btn-dispatch-wrestler-stats-csv"
            type="button"
            @click=${()=>this.handleDownloadWrestlerStatsCsv()}
            title="Download all tournament stats per wrestler in one CSV file"
          >
            ⬇ Wrestler Stats (.csv)
          </button>
        </div>

        ${n.length===0?G`<p style="color: var(--text-muted); margin: 0;">No completed bouts yet.</p>`:G`
              <div style="overflow-x: auto;">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Bout</th>
                      <th>Weight &amp; Round</th>
                      <th>Red Corner</th>
                      <th>Green Corner</th>
                      <th>Result</th>
                      <th class="num">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${n.map(a=>{const l=this.authority.athletes.get(a.red_athlete_id),c=this.authority.athletes.get(a.green_athlete_id),x=this.authority.athletes.get(a.winner_athlete_id);return G`
                        <tr>
                          <td><strong>#${a.bout_number}</strong> (Mat ${a.assigned_mat_id})</td>
                          <td>${a.weight_class_id} lbs · ${a.round_label}</td>
                          <td class="corner-red">${l?.public_display_name??a.red_athlete_id} (${a.red_score})</td>
                          <td class="corner-green">${c?.public_display_name??a.green_athlete_id} (${a.green_score})</td>
                          <td>
                            <span class="status-badge live">
                              Winner: ${x?.public_display_name??a.winner_athlete_id} (${a.win_type})
                            </span>
                          </td>
                          <td class="num">
                            <button
                              type="button"
                              style="min-height: 30px; padding: 3px 10px; font-size: 12px;"
                              @click=${()=>this.openCorrectionPreviewModal(a.match_id)}
                            >
                              Correct Result
                            </button>
                          </td>
                        </tr>
                      `})}
                  </tbody>
                </table>
              </div>
            `}
      </section>
    `}renderActiveMatBoutCard(e){const t=this.authority.athletes.get(e.red_athlete_id),s=this.authority.athletes.get(e.green_athlete_id),{winnerId:n,winType:i,redScore:o,greenScore:a}=this.paperResultInputs(e),l=this.interpolatedBoutRemainingMs(e),c=Math.max(0,Math.ceil(l/1e3)),x=`${Math.floor(c/60)}:${String(c%60).padStart(2,"0")}`,d=this.authority.getBoutRestStatus(e.match_id);return G`
      <div class="live-scoreboard ${e.clock_running?"is-running":""}">
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; font-weight: 700; color: var(--text-muted);">
          <span>BOUT #${e.bout_number} · ${e.weight_class_id} LBS · ${e.round_label}</span>
          <span>P${e.period_number} · ${x}</span>
        </div>

        ${d.restLocked?G`
              <div
                style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 6px 8px; border-radius: 6px; background: var(--status-warn-bg); color: var(--status-warn); font-size: 11px; font-weight: 700;"
              >
                <span>
                  ⏱ 30-Min NFHS Recovery Rest: ${d.restingAthleteNames.join(", ")} (${d.remainingMinutes} min remaining)
                </span>
                <button
                  type="button"
                  style="min-height: 24px; padding: 2px 8px; font-size: 11px;"
                  @click=${()=>this.handleClearBoutRestLock(e.match_id)}
                >
                  ✓ Mark 30m Rest Complete
                </button>
              </div>
            `:Z}

        <div class="score-row">
          <div>
            <span class="corner-pill corner-red-pill">R</span>
            <strong>${t?.public_display_name??e.red_athlete_id}</strong>
            <span style="font-size: 11px; color: var(--text-muted); margin-left: 4px;">
              ${t?.team_name??""}
            </span>
          </div>
          <span class="score-digits corner-red">${e.red_score}</span>
        </div>

        <div class="score-row">
          <div>
            <span class="corner-pill corner-green-pill">G</span>
            <strong>${s?.public_display_name??e.green_athlete_id}</strong>
            <span style="font-size: 11px; color: var(--text-muted); margin-left: 4px;">
              ${s?.team_name??""}
            </span>
          </div>
          <span class="score-digits corner-green">${e.green_score}</span>
        </div>

        <details style="margin-top: 4px; padding-top: 6px; border-top: 1px solid var(--border-subtle);">
          <summary style="cursor: pointer; font-size: 11px; font-weight: 700; color: var(--text-muted); user-select: none;">
            Enter paper result without a scorekeeper
          </summary>
          <div style="margin-top: 6px; display: grid; gap: 6px;">
            <div style="display: grid; grid-template-columns: 1.4fr 1fr; gap: 6px;">
              <select
                aria-label="Winner for Bout #${e.bout_number}"
                style="min-height: 32px; padding: 4px 8px; font-size: 12px;"
                .value=${n}
                @change=${u=>{this.matWinnerInputs={...this.matWinnerInputs,[e.match_id]:u.target.value}}}
              >
                <option value=${e.red_athlete_id}>Red: ${t?.public_display_name??e.red_athlete_id}</option>
                <option value=${e.green_athlete_id}>Green: ${s?.public_display_name??e.green_athlete_id}</option>
              </select>

              <select
                aria-label="Win Type for Bout #${e.bout_number}"
                style="min-height: 32px; padding: 4px 8px; font-size: 12px;"
                .value=${i}
                @change=${u=>{this.matWinTypeInputs={...this.matWinTypeInputs,[e.match_id]:u.target.value}}}
              >
                <option value="FALL">FALL (Pin)</option>
                <option value="TF">TF (Tech Fall)</option>
                <option value="MD">MD (Major Dec)</option>
                <option value="DEC">DEC (Decision)</option>
                <option value="FORFEIT">FORFEIT</option>
                <option value="INJURY_DEFAULT">INJURY DEFAULT</option>
                <option value="DQ">DQ</option>
              </select>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr auto; gap: 6px; align-items: center;">
              <input
                type="number"
                min="0"
                max="999"
                aria-label="Red score for Bout #${e.bout_number}"
                placeholder="Red Pts"
                style="min-height: 32px; padding: 4px 8px; font-size: 12px;"
                .value=${o}
                @input=${u=>{this.matRedScoreInputs={...this.matRedScoreInputs,[e.match_id]:u.target.value}}}
              />
              <input
                type="number"
                min="0"
                max="999"
                aria-label="Green score for Bout #${e.bout_number}"
                placeholder="Green Pts"
                style="min-height: 32px; padding: 4px 8px; font-size: 12px;"
                .value=${a}
                @input=${u=>{this.matGreenScoreInputs={...this.matGreenScoreInputs,[e.match_id]:u.target.value}}}
              />
              <button
                type="button"
                class="btn-success"
                style="min-height: 32px; padding: 4px 12px; font-size: 12px;"
                @click=${()=>this.handleRecordCoachBoutResult(e)}
              >
                Save Paper Result
              </button>
            </div>
          </div>
        </details>
      </div>
    `}renderStandingsAndShareTab(){const e=this.authority.computeTeamStandings(),t=this.authority.computeWrestlerStats(),s=this.authority.getPublicPlayerWebUrl(),n=this.authority.getPublicOfficialsWebUrl(),i=this.authority.getLocalWifiPlayerWebUrl(),o=this.authority.getLocalWifiOfficialsWebUrl(),a=this.authority.getTournamentJoinQrUri(),l=this.authority.getTournamentJoinQrSvg(),c=this.authority.getPublicPlayerWebQrSvg(),x=this.authority.getSelfRegisterPosterUrl(),d=this.authority.getSelfRegisterPosterQrSvg(x),_=`${typeof window<"u"?new URL("../scorekeeper/",window.location.href).toString():"/scorekeeper/"}?join=${encodeURIComponent(a)}`,p=this.authority.mats.get(this.selectedQrMatId)??this.authority.mats.get(1);return G`
      <div class="standings-qr-split">
        <!-- Left Column: NFHS Team Standings & Wrestler Statistics -->
        <div>
          <section class="finder-card">
            <div class="section-header">
              <div>
                <h2 class="section-title">NFHS Team Standings</h2>
                <p class="section-sub">
                  Updated automatically from completed championship and consolation bouts.
                </p>
              </div>
              <button
                id="btn-download-wrestler-stats-csv"
                type="button"
                class="btn-primary"
                @click=${()=>this.handleDownloadWrestlerStatsCsv()}
                title="Download all tournament stats per wrestler in one CSV file"
              >
                ⬇ Download Wrestler Stats (.csv)
              </button>
            </div>

            ${e.length===0?G`<p style="color: var(--text-muted); margin: 0;">No schools/teams registered yet.</p>`:G`
                  <div style="overflow-x: auto;">
                    <table class="data-table">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>School / Team</th>
                          <th class="num">Total Pts</th>
                          <th class="num">Adv</th>
                          <th class="num">Place</th>
                          <th class="num">Bonus</th>
                          <th class="num">Pins/FF</th>
                          <th class="num">TF</th>
                          <th class="num">MD</th>
                          <th class="num">Champs</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${e.map(h=>G`
                            <tr>
                              <td><span class="badge-weight">#${h.rank}</span></td>
                              <td>
                                <strong>${h.team_name}</strong>
                                <span style="color: var(--text-muted); font-size: 11px;">(${h.team_id})</span>
                              </td>
                              <td class="num"><span class="pts-badge">${h.total_points.toFixed(1)}</span></td>
                              <td class="num">${h.advancement_points.toFixed(1)}</td>
                              <td class="num">${h.placement_points.toFixed(1)}</td>
                              <td class="num">${h.bonus_points.toFixed(1)}</td>
                              <td class="num">${h.falls_forfeits_dq}</td>
                              <td class="num">${h.tech_falls}</td>
                              <td class="num">${h.major_decisions}</td>
                              <td class="num">${h.first_place_winners}</td>
                            </tr>
                          `)}
                      </tbody>
                    </table>
                  </div>
                `}
          </section>

          <section class="finder-card" aria-label="Wrestler Statistics">
            <div class="section-header">
              <div>
                <h2 class="section-title">Wrestler Statistics (${t.length})</h2>
                <p class="section-sub">
                  View tournament stats for each wrestler or download one full CSV.
                </p>
              </div>
              <button
                id="btn-table-wrestler-stats-csv"
                type="button"
                @click=${()=>this.handleDownloadWrestlerStatsCsv()}
                title="Download all tournament stats per wrestler in one CSV file"
              >
                ⬇ Export Full Wrestler Stats (.csv)
              </button>
            </div>

            ${t.length===0?G`<p style="color: var(--text-muted); margin: 0;">No wrestlers registered yet.</p>`:G`
                  <div style="overflow-x: auto; max-height: 460px; overflow-y: auto;">
                    <table class="data-table">
                      <thead>
                        <tr>
                          <th>Wrestler &amp; School</th>
                          <th>Div / Wt</th>
                          <th>Place</th>
                          <th class="num">W–L</th>
                          <th class="num">F / TF / MD</th>
                          <th class="num">Match Pts</th>
                          <th class="num">TD / E / R / NF</th>
                          <th class="num">Team Pts</th>
                          <th class="num">OW</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${t.map(h=>G`
                            <tr>
                              <td>
                                <strong>${h.wrestler_name}</strong>
                                <span style="display: block; color: var(--text-muted); font-size: 11px;">
                                  ${h.team_name} (${h.team_id})
                                </span>
                              </td>
                              <td>
                                <span class="badge-weight">${h.division_id} ${h.weight_class_lbs}</span>
                              </td>
                              <td>
                                ${h.placement!==null?G`<span class="badge-weight">#${h.placement}</span>`:h.standing_rank!==null?G`<span style="color: var(--text-muted); font-size: 12px;">R${h.standing_rank}</span>`:G`<span style="color: var(--text-muted); font-size: 12px;">—</span>`}
                              </td>
                              <td class="num"><strong>${h.wins}–${h.losses}</strong></td>
                              <td class="num">
                                ${h.wins_by_fall+h.wins_by_forfeit+h.wins_by_injury_default+h.wins_by_dq} / ${h.wins_by_tech_fall} / ${h.wins_by_major_decision}
                              </td>
                              <td class="num">${h.match_points_scored}–${h.match_points_allowed}</td>
                              <td class="num">
                                ${h.takedowns_scored} / ${h.escapes_scored} / ${h.reversals_scored} / ${h.near_falls_total_scored}
                              </td>
                              <td class="num"><span class="pts-badge">${h.team_points_total.toFixed(1)}</span></td>
                              <td class="num">${h.ow_votes}</td>
                            </tr>
                          `)}
                      </tbody>
                    </table>
                  </div>
                `}
          </section>
        </div>

        <!-- Right Column: Share Scoreboard & Pair Mat Scorekeeper Phones -->
        <div>
          <section class="finder-card">
            <div class="section-header">
              <div>
                <h2 class="section-title">Wrestler Self-Registration QR (Pre-Weigh-In)</h2>
                <p class="section-sub">
                  Post at the gym entrance. Wrestlers enter name, school, and weight class, then show their pass QR or give their name at weigh-ins.
                </p>
              </div>
            </div>
            <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
              <div class="qr-box">
                <img
                  src=${d}
                  alt="Wrestler Self-Registration QR"
                  width="136"
                  height="136"
                  style="display: block;"
                />
              </div>
              <div style="flex: 1; min-width: 200px; display: grid; gap: 8px;">
                <code class="code-box">${x}</code>
                <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                  <a
                    href=${x}
                    target="_blank"
                    rel="noopener"
                    style="display: inline-flex; align-items: center; min-height: 28px; padding: 2px 10px; font-size: 11px; font-weight: 700; border-radius: 6px; background: var(--accent-primary, #2563eb); color: #ffffff; text-decoration: none;"
                  >
                    Open Self-Registration Page
                  </a>
                  <button
                    type="button"
                    style="min-height: 28px; padding: 2px 8px; font-size: 11px;"
                    @click=${()=>this.copyText(x,"Wrestler Self-Registration Link")}
                  >
                    Copy Self-Registration Link
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section class="finder-card">
            <div class="section-header">
              <div>
                <h2 class="section-title">Share Live Scoreboard with Wrestlers &amp; Parents</h2>
                <p class="section-sub">
                  Each viewer needs one link. Use the venue link on venue Wi-Fi.
                  Use the public link on cellular data or away from the venue.
                  Scan the QR code to open the public scoreboard.
                </p>
              </div>
            </div>

            <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
              <div class="qr-box">
                <img
                  src=${c}
                  alt="Public Scoreboard Link QR Code"
                  width="136"
                  height="136"
                  style="display: block;"
                />
              </div>
              <div style="flex: 1; min-width: 200px; display: grid; gap: 8px;">
                <div>
                  <strong style="font-size: 12px; display: block;">Public Scoreboard Link</strong>
                  <code class="code-box">${s}</code>
                  <button
                    type="button"
                    style="margin-top: 4px; min-height: 28px; padding: 2px 8px; font-size: 11px;"
                    @click=${()=>this.copyText(s,"Public Scoreboard Link")}
                  >
                    Copy Public Scoreboard Link
                  </button>
                </div>
                <div>
                  <strong style="font-size: 12px; display: block;">Venue Wi-Fi Scoreboard Link</strong>
                  <code class="code-box">${i}</code>
                  <button
                    type="button"
                    style="margin-top: 4px; min-height: 28px; padding: 2px 8px; font-size: 11px;"
                    @click=${()=>this.copyText(i,"Venue Wi-Fi Scoreboard Link")}
                  >
                    Copy Venue Wi-Fi Scoreboard Link
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section class="finder-card">
            <div class="section-header">
              <div>
                <h2 class="section-title">Pair Matside Scorekeeper Devices &amp; Co-Officials</h2>
                <p class="section-sub">
                  Scan with the OpenMat Scorekeeper app, or share the console link with co-officials.
                </p>
              </div>
            </div>

            <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap; margin-bottom: 12px;">
              <div class="qr-box">
                <img
                  src=${l}
                  alt="OpenMat Tournament Join QR"
                  width="136"
                  height="136"
                  style="display: block;"
                />
              </div>
              <div style="flex: 1; min-width: 200px; display: grid; gap: 8px;">
                <div>
                  <strong style="font-size: 12px; display: block;">Co-Official / Coach Web Console Link:</strong>
                  <code class="code-box">${n}</code>
                  <div style="display: flex; gap: 6px; margin-top: 4px; flex-wrap: wrap;">
                    <button
                      type="button"
                      style="min-height: 28px; padding: 2px 8px; font-size: 11px;"
                      @click=${()=>this.copyText(n,"Public Officials Link")}
                    >
                      Copy Cloud Officials Link
                    </button>
                    <button
                      type="button"
                      style="min-height: 28px; padding: 2px 8px; font-size: 11px;"
                      @click=${()=>this.copyText(o,"Wi-Fi Officials Link")}
                    >
                      Copy Wi-Fi Officials Link
                    </button>
                  </div>
                </div>
                <div>
                  <strong style="font-size: 12px; display: block;">Scorekeeper Pairing Link:</strong>
                  <code class="code-box">${a}</code>
                  <div style="display: flex; gap: 6px; margin-top: 4px; flex-wrap: wrap;">
                    <a
                      href=${_}
                      target="_blank"
                      rel="noopener"
                      style="display: inline-flex; align-items: center; min-height: 28px; padding: 2px 10px; font-size: 11px; font-weight: 700; border-radius: 6px; background: var(--accent-primary, #2563eb); color: #ffffff; text-decoration: none;"
                    >
                      Open Web Scorekeeper (iPhone / iPad / Laptop)
                    </a>
                    <button
                      type="button"
                      style="min-height: 28px; padding: 2px 8px; font-size: 11px;"
                      @click=${()=>this.copyText(_,"Web Scorekeeper Link")}
                    >
                      Copy Web Scorekeeper Link
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <details style="font-size: 12px; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 10px;">
              <summary style="cursor: pointer; font-weight: 700; color: var(--text-secondary);">
                Manual Scorekeeper Device Authorization (Mat ${this.selectedQrMatId})
              </summary>
              <div style="margin-top: 10px; display: grid; gap: 10px;">
                <div class="pill-strip">
                  ${Array.from(this.authority.mats.values()).map(h=>G`
                      <button
                        type="button"
                        class="pill-btn ${this.selectedQrMatId===h.mat_id?"active":""}"
                        @click=${()=>{this.selectedQrMatId=h.mat_id,this.issueDeviceId=h.android_device_id||`mat-${h.mat_id}-scorekeeper`,this.issueOperatorName=h.operator_name||`Table ${h.mat_id} Scorer`}}
                      >
                        Mat ${h.mat_id}
                      </button>
                    `)}
                </div>

                ${p?.scorekeeper_qr_uri?G`
                      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                        <div class="qr-box">
                          <img
                            src=${kt(p.scorekeeper_qr_uri)}
                            alt="Mat ${p.mat_id} Scorekeeper Authorization QR"
                            width="120"
                            height="120"
                          />
                        </div>
                        <div style="flex: 1; min-width: 180px;">
                          <strong>Mat ${p.mat_id} Scorekeeper QR</strong>
                          <code class="code-box" style="margin-top: 4px;">${p.scorekeeper_qr_uri}</code>
                        </div>
                      </div>
                    `:Z}

                <div class="form-row">
                  <label class="field">
                    <span>Device ID</span>
                    <input
                      type="text"
                      .value=${this.issueDeviceId}
                      @input=${h=>this.issueDeviceId=h.target.value}
                    />
                  </label>
                  <label class="field">
                    <span>Table Scorer Name</span>
                    <input
                      type="text"
                      .value=${this.issueOperatorName}
                      @input=${h=>this.issueOperatorName=h.target.value}
                    />
                  </label>
                  <label class="field">
                    <span>Device Public Key</span>
                    <input
                      type="text"
                      placeholder="64-character device public key"
                      .value=${this.issueSubjectPubkeyHex}
                      @input=${h=>this.issueSubjectPubkeyHex=h.target.value}
                    />
                  </label>
                  <button type="button" @click=${()=>this.handleIssueScorekeeperCert()}>
                    Authorize Mat ${this.selectedQrMatId}
                  </button>
                </div>
              </div>
            </details>
          </section>

          <section class="finder-card" aria-label="Emergency Offline Fallback">
            <div class="section-header">
              <div>
                <h2 class="section-title">Emergency Offline Fallback (Single Laptop &amp; Paper Runners)</h2>
                <p class="section-sub">
                  Download a self-contained tournament file after building brackets. Run mat devices in Practice Mode and enter paper slips on one offline laptop.
                </p>
              </div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <button
                id="btn-share-emergency-fallback-html"
                type="button"
                class="btn-primary"
                @click=${()=>this.handleExportEmergencyFallbackHtml()}
              >
                🚨 Download Standalone Tournament (.html)
              </button>
              <button
                id="btn-share-emergency-fallback-xlsx"
                type="button"
                @click=${()=>this.handleExportEmergencyFallbackXlsx()}
              >
                📊 Download Excel Workbook (.xlsx)
              </button>
              <a
                href="./emergency-fallback.html"
                download="openmat-emergency-fallback-blank.html"
                style="display: inline-flex; align-items: center; min-height: 36px; padding: 6px 12px; font-size: 13px; font-weight: 700; border-radius: 6px; border: 1px solid var(--border-strong); background: var(--bg-surface); color: var(--text-primary); text-decoration: none;"
              >
                ⬇ Blank Offline Fallback (.html)
              </a>
            </div>
          </section>
        </div>
      </div>
    `}renderConnectionDialog(e,t){const s=this.authority.getActiveSharePubkeyHex(),n=Array.from(this.authority.nostrRelayStatuses.values()).filter(i=>i==="CONNECTED").length;return G`
      <dialog
        id="connection-panel"
        class="connection-panel"
        aria-label="OpenMat Network Connection"
        @click=${i=>{i.target===i.currentTarget&&this.closeConnectionPanel()}}
      >
        <div class="connection-heading">
          <div>
            <div class="connection-eyebrow">OPENMAT NETWORK</div>
            <h2>Connection</h2>
          </div>
          <button
            type="button"
            class="connection-close"
            aria-label="Close Connection Panel"
            @click=${()=>this.closeConnectionPanel()}
          >
            ✕
          </button>
        </div>

        <div class="connection-route ${t}">
          <div class="connection-orbit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M5 12a7 7 0 0 1 14 0"></path>
              <path d="M2 12a10 10 0 0 1 20 0"></path>
            </svg>
          </div>
          <div>
            <strong>${this.authority.tournamentName||"OpenMat Tournament"}</strong>
            <span>
              ${this.authority.linkedVenuePubkeyHex?`Venue server (${this.authority.linkedVenuePubkeyHex.slice(0,12)}…)`:`Primary Tournament Host (${this.authority.activeVenueOrigin})`}
            </span>
          </div>
          <span class="connection-state" aria-live="polite">${t==="connected"?"ACTIVE":t.toUpperCase()}</span>
        </div>

        <dl class="connection-metrics">
          <div>
            <dt>Wrestlers</dt>
            <dd>${this.authority.athletes.size}</dd>
          </div>
          <div>
            <dt>Bouts</dt>
            <dd>${this.authority.bouts.size}</dd>
          </div>
          <div>
            <dt>Public Relays</dt>
            <dd>${n} <small>/ ${this.authority.publicNostrRelays.length}</small></dd>
          </div>
        </dl>

        <div style="display: grid; gap: 10px; margin-bottom: 14px;">
          <label class="field">
            <span>Link to Venue Server Join QR or Tournament Key</span>
            <input
              type="text"
              placeholder="Paste pairing link or 64-character tournament key"
              .value=${this.connectionJoinInput}
              @input=${i=>this.connectionJoinInput=i.target.value}
            />
          </label>
          <label class="field">
            <span>Venue Server URL (Optional)</span>
            <input
              type="text"
              placeholder="e.g. http://192.168.1.50:8480"
              .value=${this.connectionVenueUrlInput}
              @input=${i=>this.connectionVenueUrlInput=i.target.value}
            />
          </label>
          <button type="button" class="btn-primary" @click=${()=>this.handleApplyConnectionJoin()}>
            Sync &amp; Publish Tournament State
          </button>
          <a class="btn-icon-pill" href=${e} target="_blank" rel="noopener" referrerpolicy="origin">
            Report a Bug or Request a Feature ↗
          </a>
        </div>

        <details class="connection-details">
          <summary>
            Tournament Identity
            <span>VERIFIED</span>
          </summary>
          <dl class="connection-facts">
            <dt>Tournament ID</dt>
            <dd>${this.authority.tournamentId}</dd>
            <dt>Tournament Key</dt>
            <dd><code>${s}</code></dd>
            <dt>Local Console Role</dt>
            <dd>${this.authority.consoleRole.toUpperCase()}</dd>
          </dl>
        </details>

        <div class="connection-footer">
          <span>${t==="offline"?"This device is offline.":t==="reconnecting"?"Trying to reach the venue server.":"Signed tournament sync active"}</span>
          <button
            type="button"
            class="btn-danger"
            @click=${()=>this.handleClearAll()}
          >
            Clear All
          </button>
        </div>
      </dialog>
    `}renderCorrectionModal(){const e=this.correctionPreview,t=e?this.authority.bouts.get(e.target_match_id):void 0,s=t?this.authority.athletes.get(t.red_athlete_id):void 0,n=t?this.authority.athletes.get(t.green_athlete_id):void 0;return G`
      <dialog id="correction-impact-dialog" class="modal" aria-label="Result Correction Impact Preview">
        ${e&&t?G`
              <h3 style="margin: 0 0 8px;">
                Result Correction Preview — Bout #${e.bout_number}
              </h3>
              <p style="font-size: 13px; color: var(--text-secondary); margin: 0 0 12px;">
                Downstream matches affected:
                <strong>
                  ${e.affected_downstream_matches.length>0?e.affected_downstream_matches.join(", "):"None"}
                </strong>
              </p>

              <div class="form-row" style="margin-bottom: 12px;">
                <label class="field">
                  <span>Corrected Winner</span>
                  <select
                    name="winner"
                    .value=${this.correctionWinnerId}
                    @change=${i=>this.correctionWinnerId=i.target.value}
                  >
                    <option value=${t.red_athlete_id}>
                      Red: ${s?.public_display_name??t.red_athlete_id}
                    </option>
                    <option value=${t.green_athlete_id}>
                      Green: ${n?.public_display_name??t.green_athlete_id}
                    </option>
                  </select>
                </label>

                <label class="field">
                  <span>Win Type</span>
                  <select
                    name="win-type"
                    .value=${this.correctionWinType}
                    @change=${i=>this.correctionWinType=i.target.value}
                  >
                    <option value="DEC">DEC</option>
                    <option value="MD">MD</option>
                    <option value="TF">TF</option>
                    <option value="FALL">FALL</option>
                    <option value="FORFEIT">FORFEIT</option>
                    <option value="INJURY_DEFAULT">INJURY_DEFAULT</option>
                    <option value="DQ">DQ</option>
                  </select>
                </label>

                <label class="field">
                  <span>Red Score</span>
                  <input
                    name="red-score"
                    type="number"
                    min="0"
                    max="1000"
                    .value=${this.correctionRedScore}
                    @input=${i=>this.correctionRedScore=i.target.value}
                  />
                </label>

                <label class="field">
                  <span>Green Score</span>
                  <input
                    name="green-score"
                    type="number"
                    min="0"
                    max="1000"
                    .value=${this.correctionGreenScore}
                    @input=${i=>this.correctionGreenScore=i.target.value}
                  />
                </label>

                <label class="field" style="grid-column: 1 / -1;">
                  <span>Reason for Official Correction</span>
                  <input
                    name="reason"
                    type="text"
                    placeholder="e.g. Scorer reported opposite corner"
                    .value=${this.correctionReason}
                    @input=${i=>this.correctionReason=i.target.value}
                  />
                </label>
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 8px;">
                <button type="button" @click=${()=>this.closeCorrectionPreviewModal()}>
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn-primary"
                  ?disabled=${!e.safe_to_auto_apply}
                  @click=${()=>this.handleApplySafeCorrection()}
                >
                  Apply safe correction
                </button>
              </div>
            `:Z}
      </dialog>
    `}renderAuthorityTransferModal(){return G`
      <dialog id="authority-transfer-dialog" class="modal" aria-label="Mat Authority Handoff">
        <h3 style="margin: 0 0 8px;">Mat ${this.transferMatId} Scorekeeper Device Handoff</h3>
        <p style="font-size: 12px; color: var(--text-muted); margin: 0 0 12px;">
          Assigns a replacement scorekeeper device to Mat ${this.transferMatId}.
        </p>
        <div class="form-row" style="margin-bottom: 12px;">
          <label class="field">
            <span>Replacement Device ID</span>
            <input
              type="text"
              .value=${this.transferNewDeviceId}
              @input=${e=>this.transferNewDeviceId=e.target.value}
            />
          </label>
          <label class="field">
            <span>New Operator Name</span>
            <input
              type="text"
              .value=${this.transferNewOperator}
              @input=${e=>this.transferNewOperator=e.target.value}
            />
          </label>
          <label class="field" style="grid-column: 1 / -1;">
            <span>Replacement Device Public Key</span>
            <input
              type="text"
              placeholder="64-character public key from replacement device"
              .value=${this.transferSubjectPubkeyHex}
              @input=${e=>this.transferSubjectPubkeyHex=e.target.value}
            />
          </label>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 8px;">
          <button type="button" @click=${()=>this.closeAuthorityTransferModal()}>Cancel</button>
          <button type="button" class="btn-primary" @click=${()=>this.handleExecuteAuthorityTransfer()}>
            Issue Replacement Certificate
          </button>
        </div>
      </dialog>
    `}}typeof customElements<"u"&&!customElements.get("openmat-officials-app")&&customElements.define("openmat-officials-app",cc);try{typeof sessionStorage<"u"&&sessionStorage.removeItem("openmat_sw_recovered")}catch{}if("serviceWorker"in navigator){const r=!!navigator.serviceWorker.controller;let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{!r||e||(e=!0,window.location.reload())}),navigator.serviceWorker.register("./offline.js",{updateViaCache:"none"}).then(t=>t.update().catch(()=>{})).catch(()=>{})}export{ut as C,fc as M,wl as T,pl as _,Ec as a,_c as b,pc as c,mc as d,lt as e,ce as f,gc as g,zt as p,kl as r,_e as t,xl as v};
