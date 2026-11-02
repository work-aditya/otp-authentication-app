(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function R_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var _d={exports:{}},Va={},vd={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function z0(){if(Pg)return Ne;Pg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function C(L){return L===null||typeof L!="object"?null:(L=T&&L[T]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,G={};function $(L,H,pe){this.props=L,this.context=H,this.refs=G,this.updater=pe||b}$.prototype.isReactComponent={},$.prototype.setState=function(L,H){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,H,"setState")},$.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function de(){}de.prototype=$.prototype;function le(L,H,pe){this.props=L,this.context=H,this.refs=G,this.updater=pe||b}var ue=le.prototype=new de;ue.constructor=le,B(ue,$.prototype),ue.isPureReactComponent=!0;var _e=Array.isArray,Oe=Object.prototype.hasOwnProperty,Ie={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function I(L,H,pe){var Ce,Pe={},be=null,ze=null;if(H!=null)for(Ce in H.ref!==void 0&&(ze=H.ref),H.key!==void 0&&(be=""+H.key),H)Oe.call(H,Ce)&&!x.hasOwnProperty(Ce)&&(Pe[Ce]=H[Ce]);var Be=arguments.length-2;if(Be===1)Pe.children=pe;else if(1<Be){for(var We=Array(Be),Et=0;Et<Be;Et++)We[Et]=arguments[Et+2];Pe.children=We}if(L&&L.defaultProps)for(Ce in Be=L.defaultProps,Be)Pe[Ce]===void 0&&(Pe[Ce]=Be[Ce]);return{$$typeof:r,type:L,key:be,ref:ze,props:Pe,_owner:Ie.current}}function k(L,H){return{$$typeof:r,type:L.type,key:H,ref:L.ref,props:L.props,_owner:L._owner}}function R(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function N(L){var H={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(pe){return H[pe]})}var V=/\/+/g;function A(L,H){return typeof L=="object"&&L!==null&&L.key!=null?N(""+L.key):H.toString(36)}function Ve(L,H,pe,Ce,Pe){var be=typeof L;(be==="undefined"||be==="boolean")&&(L=null);var ze=!1;if(L===null)ze=!0;else switch(be){case"string":case"number":ze=!0;break;case"object":switch(L.$$typeof){case r:case e:ze=!0}}if(ze)return ze=L,Pe=Pe(ze),L=Ce===""?"."+A(ze,0):Ce,_e(Pe)?(pe="",L!=null&&(pe=L.replace(V,"$&/")+"/"),Ve(Pe,H,pe,"",function(Et){return Et})):Pe!=null&&(R(Pe)&&(Pe=k(Pe,pe+(!Pe.key||ze&&ze.key===Pe.key?"":(""+Pe.key).replace(V,"$&/")+"/")+L)),H.push(Pe)),1;if(ze=0,Ce=Ce===""?".":Ce+":",_e(L))for(var Be=0;Be<L.length;Be++){be=L[Be];var We=Ce+A(be,Be);ze+=Ve(be,H,pe,We,Pe)}else if(We=C(L),typeof We=="function")for(L=We.call(L),Be=0;!(be=L.next()).done;)be=be.value,We=Ce+A(be,Be++),ze+=Ve(be,H,pe,We,Pe);else if(be==="object")throw H=String(L),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return ze}function ve(L,H,pe){if(L==null)return L;var Ce=[],Pe=0;return Ve(L,Ce,"","",function(be){return H.call(pe,be,Pe++)}),Ce}function he(L){if(L._status===-1){var H=L._result;H=H(),H.then(function(pe){(L._status===0||L._status===-1)&&(L._status=1,L._result=pe)},function(pe){(L._status===0||L._status===-1)&&(L._status=2,L._result=pe)}),L._status===-1&&(L._status=0,L._result=H)}if(L._status===1)return L._result.default;throw L._result}var fe={current:null},X={transition:null},ie={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:X,ReactCurrentOwner:Ie};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:ve,forEach:function(L,H,pe){ve(L,function(){H.apply(this,arguments)},pe)},count:function(L){var H=0;return ve(L,function(){H++}),H},toArray:function(L){return ve(L,function(H){return H})||[]},only:function(L){if(!R(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Ne.Component=$,Ne.Fragment=t,Ne.Profiler=o,Ne.PureComponent=le,Ne.StrictMode=s,Ne.Suspense=g,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,Ne.act=ee,Ne.cloneElement=function(L,H,pe){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ce=B({},L.props),Pe=L.key,be=L.ref,ze=L._owner;if(H!=null){if(H.ref!==void 0&&(be=H.ref,ze=Ie.current),H.key!==void 0&&(Pe=""+H.key),L.type&&L.type.defaultProps)var Be=L.type.defaultProps;for(We in H)Oe.call(H,We)&&!x.hasOwnProperty(We)&&(Ce[We]=H[We]===void 0&&Be!==void 0?Be[We]:H[We])}var We=arguments.length-2;if(We===1)Ce.children=pe;else if(1<We){Be=Array(We);for(var Et=0;Et<We;Et++)Be[Et]=arguments[Et+2];Ce.children=Be}return{$$typeof:r,type:L.type,key:Pe,ref:be,props:Ce,_owner:ze}},Ne.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},Ne.createElement=I,Ne.createFactory=function(L){var H=I.bind(null,L);return H.type=L,H},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(L){return{$$typeof:f,render:L}},Ne.isValidElement=R,Ne.lazy=function(L){return{$$typeof:E,_payload:{_status:-1,_result:L},_init:he}},Ne.memo=function(L,H){return{$$typeof:_,type:L,compare:H===void 0?null:H}},Ne.startTransition=function(L){var H=X.transition;X.transition={};try{L()}finally{X.transition=H}},Ne.unstable_act=ee,Ne.useCallback=function(L,H){return fe.current.useCallback(L,H)},Ne.useContext=function(L){return fe.current.useContext(L)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(L){return fe.current.useDeferredValue(L)},Ne.useEffect=function(L,H){return fe.current.useEffect(L,H)},Ne.useId=function(){return fe.current.useId()},Ne.useImperativeHandle=function(L,H,pe){return fe.current.useImperativeHandle(L,H,pe)},Ne.useInsertionEffect=function(L,H){return fe.current.useInsertionEffect(L,H)},Ne.useLayoutEffect=function(L,H){return fe.current.useLayoutEffect(L,H)},Ne.useMemo=function(L,H){return fe.current.useMemo(L,H)},Ne.useReducer=function(L,H,pe){return fe.current.useReducer(L,H,pe)},Ne.useRef=function(L){return fe.current.useRef(L)},Ne.useState=function(L){return fe.current.useState(L)},Ne.useSyncExternalStore=function(L,H,pe){return fe.current.useSyncExternalStore(L,H,pe)},Ne.useTransition=function(){return fe.current.useTransition()},Ne.version="18.3.1",Ne}var Ng;function vf(){return Ng||(Ng=1,vd.exports=z0()),vd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function B0(){if(xg)return Va;xg=1;var r=vf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var E,T={},C=null,b=null;_!==void 0&&(C=""+_),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(b=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(T[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)T[E]===void 0&&(T[E]=g[E]);return{$$typeof:e,type:f,key:C,ref:b,props:T,_owner:o.current}}return Va.Fragment=t,Va.jsx=h,Va.jsxs=h,Va}var Dg;function $0(){return Dg||(Dg=1,_d.exports=B0()),_d.exports}var D=$0(),Re=vf();const H0=R_(Re);var Vu={},wd={exports:{}},Zt={},Ed={exports:{}},Td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function q0(){return Og||(Og=1,(function(r){function e(X,ie){var ee=X.length;X.push(ie);e:for(;0<ee;){var L=ee-1>>>1,H=X[L];if(0<o(H,ie))X[L]=ie,X[ee]=H,ee=L;else break e}}function t(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var ie=X[0],ee=X.pop();if(ee!==ie){X[0]=ee;e:for(var L=0,H=X.length,pe=H>>>1;L<pe;){var Ce=2*(L+1)-1,Pe=X[Ce],be=Ce+1,ze=X[be];if(0>o(Pe,ee))be<H&&0>o(ze,Pe)?(X[L]=ze,X[be]=ee,L=be):(X[L]=Pe,X[Ce]=ee,L=Ce);else if(be<H&&0>o(ze,ee))X[L]=ze,X[be]=ee,L=be;else break e}}return ie}function o(X,ie){var ee=X.sortIndex-ie.sortIndex;return ee!==0?ee:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],E=1,T=null,C=3,b=!1,B=!1,G=!1,$=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ue(X){for(var ie=t(_);ie!==null;){if(ie.callback===null)s(_);else if(ie.startTime<=X)s(_),ie.sortIndex=ie.expirationTime,e(g,ie);else break;ie=t(_)}}function _e(X){if(G=!1,ue(X),!B)if(t(g)!==null)B=!0,he(Oe);else{var ie=t(_);ie!==null&&fe(_e,ie.startTime-X)}}function Oe(X,ie){B=!1,G&&(G=!1,de(I),I=-1),b=!0;var ee=C;try{for(ue(ie),T=t(g);T!==null&&(!(T.expirationTime>ie)||X&&!N());){var L=T.callback;if(typeof L=="function"){T.callback=null,C=T.priorityLevel;var H=L(T.expirationTime<=ie);ie=r.unstable_now(),typeof H=="function"?T.callback=H:T===t(g)&&s(g),ue(ie)}else s(g);T=t(g)}if(T!==null)var pe=!0;else{var Ce=t(_);Ce!==null&&fe(_e,Ce.startTime-ie),pe=!1}return pe}finally{T=null,C=ee,b=!1}}var Ie=!1,x=null,I=-1,k=5,R=-1;function N(){return!(r.unstable_now()-R<k)}function V(){if(x!==null){var X=r.unstable_now();R=X;var ie=!0;try{ie=x(!0,X)}finally{ie?A():(Ie=!1,x=null)}}else Ie=!1}var A;if(typeof le=="function")A=function(){le(V)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,ve=Ve.port2;Ve.port1.onmessage=V,A=function(){ve.postMessage(null)}}else A=function(){$(V,0)};function he(X){x=X,Ie||(Ie=!0,A())}function fe(X,ie){I=$(function(){X(r.unstable_now())},ie)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){B||b||(B=!0,he(Oe))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(X){switch(C){case 1:case 2:case 3:var ie=3;break;default:ie=C}var ee=C;C=ie;try{return X()}finally{C=ee}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ee=C;C=X;try{return ie()}finally{C=ee}},r.unstable_scheduleCallback=function(X,ie,ee){var L=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?L+ee:L):ee=L,X){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ee+H,X={id:E++,callback:ie,priorityLevel:X,startTime:ee,expirationTime:H,sortIndex:-1},ee>L?(X.sortIndex=ee,e(_,X),t(g)===null&&X===t(_)&&(G?(de(I),I=-1):G=!0,fe(_e,ee-L))):(X.sortIndex=H,e(g,X),B||b||(B=!0,he(Oe))),X},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(X){var ie=C;return function(){var ee=C;C=ie;try{return X.apply(this,arguments)}finally{C=ee}}}})(Td)),Td}var Vg;function W0(){return Vg||(Vg=1,Ed.exports=q0()),Ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function K0(){if(Lg)return Zt;Lg=1;var r=vf(),e=W0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function C(n){return g.call(T,n)?!0:g.call(E,n)?!1:_.test(n)?T[n]=!0:(E[n]=!0,!1)}function b(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function B(n,i,a,c){if(i===null||typeof i>"u"||b(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function G(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new G(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];$[i]=new G(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new G(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new G(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new G(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new G(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new G(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new G(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new G(n,5,!1,n.toLowerCase(),null,!1,!1)});var de=/[\-:]([a-z])/g;function le(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(de,le);$[i]=new G(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(de,le);$[i]=new G(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(de,le);$[i]=new G(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new G(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new G(n,1,!1,n.toLowerCase(),null,!0,!0)});function ue(n,i,a,c){var d=$.hasOwnProperty(i)?$[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(B(i,a,d,c)&&(a=null),c||d===null?C(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var _e=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),N=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),X=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,L;function H(n){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var pe=!1;function Ce(n,i){if(!n||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var c=j}Reflect.construct(n,[],i)}else{try{i.call()}catch(j){c=j}n.call(i.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,S=m.length-1;1<=v&&0<=S&&d[v]!==m[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==m[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==m[S]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=S);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Pe(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Ce(n.type,!1),n;case 11:return n=Ce(n.type.render,!1),n;case 1:return n=Ce(n.type,!0),n;default:return""}}function be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case Ie:return"Portal";case k:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case Ve:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ve:return i=n.displayName||null,i!==null?i:be(n.type)||"Memo";case he:i=n._payload,n=n._init;try{return be(n(i))}catch{}}return null}function ze(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function We(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Et(n){var i=We(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function mr(n){n._valueTracker||(n._valueTracker=Et(n))}function Rs(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=We(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function zr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function bi(n,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ks(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Be(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function jo(n,i){i=i.checked,i!=null&&ue(n,"checked",i,!1)}function zo(n,i){jo(n,i);var a=Be(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ps(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ps(n,i.type,Be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function vl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ps(n,i,a){(i!=="number"||zr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var gr=Array.isArray;function yr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Be(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Bo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ns(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(gr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Be(a)}}function xs(n,i){var a=Be(i.value),c=Be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function $o(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var _r,Ho=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=_r.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Br(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fi=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(n){Fi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Mi[i]=Mi[n]})});function qo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Mi.hasOwnProperty(n)&&Mi[n]?(""+i).trim():i+"px"}function Wo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=qo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ko=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Go(n,i){if(i){if(Ko[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Qo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function Ds(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Os=null,gn=null,Qn=null;function Vs(n){if(n=va(n)){if(typeof Os!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ql(i),Os(n.stateNode,n.type,i))}}function Yn(n){gn?Qn?Qn.push(n):Qn=[n]:gn=n}function Yo(){if(gn){var n=gn,i=Qn;if(Qn=gn=null,Vs(n),i)for(n=0;n<i.length;n++)Vs(i[n])}}function ji(n,i){return n(i)}function Xo(){}var vr=!1;function Jo(n,i,a){if(vr)return n(i,a);vr=!0;try{return ji(n,i,a)}finally{vr=!1,(gn!==null||Qn!==null)&&(Xo(),Yo())}}function ot(n,i){var a=n.stateNode;if(a===null)return null;var c=Ql(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ls=!1;if(f)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Ls=!1}function zi(n,i,a,c,d,m,v,S,P){var j=Array.prototype.slice.call(arguments,3);try{i.apply(a,j)}catch(Q){this.onError(Q)}}var Bi=!1,bs=null,Pn=!1,Zo=null,Wc={onError:function(n){Bi=!0,bs=n}};function Ms(n,i,a,c,d,m,v,S,P){Bi=!1,bs=null,zi.apply(Wc,arguments)}function wl(n,i,a,c,d,m,v,S,P){if(Ms.apply(this,arguments),Bi){if(Bi){var j=bs;Bi=!1,bs=null}else throw Error(t(198));Pn||(Pn=!0,Zo=j)}}function Nn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function $i(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function xn(n){if(Nn(n)!==n)throw Error(t(188))}function El(n){var i=n.alternate;if(!i){if(i=Nn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return xn(d),n;if(m===c)return xn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=m;break}if(S===c){v=!0,c=d,a=m;break}S=S.sibling}if(!v){for(S=m.child;S;){if(S===a){v=!0,a=m,c=d;break}if(S===c){v=!0,c=m,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ea(n){return n=El(n),n!==null?Fs(n):null}function Fs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Fs(n);if(i!==null)return i;n=n.sibling}return null}var Us=e.unstable_scheduleCallback,ta=e.unstable_cancelCallback,Tl=e.unstable_shouldYield,Kc=e.unstable_requestPaint,Ke=e.unstable_now,Il=e.unstable_getCurrentPriorityLevel,Hi=e.unstable_ImmediatePriority,$r=e.unstable_UserBlockingPriority,yn=e.unstable_NormalPriority,na=e.unstable_LowPriority,Sl=e.unstable_IdlePriority,qi=null,sn=null;function Al(n){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(qi,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Rl,ra=Math.log,Cl=Math.LN2;function Rl(n){return n>>>=0,n===0?32:31-(ra(n)/Cl|0)|0}var js=64,zs=4194304;function Hr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=Hr(S):(m&=v,m!==0&&(c=Hr(m)))}else v=a&~d,v!==0?c=Hr(v):m!==0&&(c=Hr(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Bt(i),d=1<<a,c|=n[a],i&=~d;return c}function Gc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-Bt(m),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&c)!==0)&&(d[v]=Gc(S,i)):P<=i&&(n.expiredLanes|=S),m&=~S}}function on(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ki(){var n=js;return js<<=1,(js&4194240)===0&&(js=64),n}function qr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Wr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Bt(i),n[i]=a}function qe(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Kr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Le=0;function Gr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kl,Bs,Pl,Nl,xl,ia=!1,Xn=[],Rt=null,Dn=null,On=null,Qr=new Map,_n=new Map,Jn=[],Qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dl(n,i){switch(n){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Qr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(i.pointerId)}}function Wt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=va(i),i!==null&&Bs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Yc(n,i,a,c,d){switch(i){case"focusin":return Rt=Wt(Rt,n,i,a,c,d),!0;case"dragenter":return Dn=Wt(Dn,n,i,a,c,d),!0;case"mouseover":return On=Wt(On,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Qr.set(m,Wt(Qr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,_n.set(m,Wt(_n.get(m)||null,n,i,a,c,d)),!0}return!1}function Ol(n){var i=Ji(n.target);if(i!==null){var a=Nn(i);if(a!==null){if(i=a.tag,i===13){if(i=$i(a),i!==null){n.blockedOn=i,xl(n.priority,function(){Pl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Er(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=$s(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ui=c,a.target.dispatchEvent(c),Ui=null}else return i=va(a),i!==null&&Bs(i),n.blockedOn=a,!1;i.shift()}return!0}function Gi(n,i,a){Er(n)&&a.delete(i)}function Vl(){ia=!1,Rt!==null&&Er(Rt)&&(Rt=null),Dn!==null&&Er(Dn)&&(Dn=null),On!==null&&Er(On)&&(On=null),Qr.forEach(Gi),_n.forEach(Gi)}function Vn(n,i){n.blockedOn===i&&(n.blockedOn=null,ia||(ia=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vl)))}function Ln(n){function i(d){return Vn(d,n)}if(0<Xn.length){Vn(Xn[0],n);for(var a=1;a<Xn.length;a++){var c=Xn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Rt!==null&&Vn(Rt,n),Dn!==null&&Vn(Dn,n),On!==null&&Vn(On,n),Qr.forEach(i),_n.forEach(i),a=0;a<Jn.length;a++)c=Jn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)Ol(a),a.blockedOn===null&&Jn.shift()}var Tr=_e.ReactCurrentBatchConfig,Yr=!0;function Ze(n,i,a,c){var d=Le,m=Tr.transition;Tr.transition=null;try{Le=1,sa(n,i,a,c)}finally{Le=d,Tr.transition=m}}function Xc(n,i,a,c){var d=Le,m=Tr.transition;Tr.transition=null;try{Le=4,sa(n,i,a,c)}finally{Le=d,Tr.transition=m}}function sa(n,i,a,c){if(Yr){var d=$s(n,i,a,c);if(d===null)lh(n,i,c,Qi,a),Dl(n,c);else if(Yc(d,n,i,a,c))c.stopPropagation();else if(Dl(n,c),i&4&&-1<Qc.indexOf(n)){for(;d!==null;){var m=va(d);if(m!==null&&kl(m),m=$s(n,i,a,c),m===null&&lh(n,i,c,Qi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else lh(n,i,c,null,a)}}var Qi=null;function $s(n,i,a,c){if(Qi=null,n=Ds(c),n=Ji(n),n!==null)if(i=Nn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=$i(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Qi=n,null}function oa(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Il()){case Hi:return 1;case $r:return 4;case yn:case na:return 16;case Sl:return 536870912;default:return 16}default:return 16}}var an=null,Hs=null,Kt=null;function aa(){if(Kt)return Kt;var n,i=Hs,a=i.length,c,d="value"in an?an.value:an.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Kt=d.slice(n,1<c?1-c:void 0)}function qs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Zn(){return!0}function la(){return!1}function kt(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zn:la,this.isPropagationStopped=la,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),i}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=kt(bn),er=ee({},bn,{view:0,detail:0}),Jc=kt(er),Ks,Ir,Xr,Yi=ee({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xr&&(Xr&&n.type==="mousemove"?(Ks=n.screenX-Xr.screenX,Ir=n.screenY-Xr.screenY):Ir=Ks=0,Xr=n),Ks)},movementY:function(n){return"movementY"in n?n.movementY:Ir}}),Gs=kt(Yi),ua=ee({},Yi,{dataTransfer:0}),Ll=kt(ua),Qs=ee({},er,{relatedTarget:0}),Ys=kt(Qs),bl=ee({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=kt(bl),Ml=ee({},bn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fl=kt(Ml),Ul=ee({},bn,{data:0}),ca=kt(Ul),Xs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=jl[n])?!!i[n]:!1}function tr(){return zl}var u=ee({},er,{key:function(n){if(n.key){var i=Xs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=qs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(n){return n.type==="keypress"?qs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=kt(u),y=ee({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=kt(y),M=ee({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),z=kt(M),Z=ee({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),He=kt(Z),gt=ee({},Yi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=kt(gt),Tt=[9,13,27,32],ct=f&&"CompositionEvent"in window,vn=null;f&&"documentMode"in document&&(vn=document.documentMode);var ln=f&&"TextEvent"in window&&!vn,Xi=f&&(!ct||vn&&8<vn&&11>=vn),Js=" ",Ip=!1;function Sp(n,i){switch(n){case"keyup":return Tt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Zs=!1;function FE(n,i){switch(n){case"compositionend":return Ap(i);case"keypress":return i.which!==32?null:(Ip=!0,Js);case"textInput":return n=i.data,n===Js&&Ip?null:n;default:return null}}function UE(n,i){if(Zs)return n==="compositionend"||!ct&&Sp(n,i)?(n=aa(),Kt=Hs=an=null,Zs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xi&&i.locale!=="ko"?null:i.data;default:return null}}var jE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!jE[n.type]:i==="textarea"}function Rp(n,i,a,c){Yn(c),i=Wl(i,"onChange"),0<i.length&&(a=new Ws("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ha=null,da=null;function zE(n){qp(n,0)}function Bl(n){var i=io(n);if(Rs(i))return n}function BE(n,i){if(n==="change")return i}var kp=!1;if(f){var Zc;if(f){var eh="oninput"in document;if(!eh){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),eh=typeof Pp.oninput=="function"}Zc=eh}else Zc=!1;kp=Zc&&(!document.documentMode||9<document.documentMode)}function Np(){ha&&(ha.detachEvent("onpropertychange",xp),da=ha=null)}function xp(n){if(n.propertyName==="value"&&Bl(da)){var i=[];Rp(i,da,n,Ds(n)),Jo(zE,i)}}function $E(n,i,a){n==="focusin"?(Np(),ha=i,da=a,ha.attachEvent("onpropertychange",xp)):n==="focusout"&&Np()}function HE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bl(da)}function qE(n,i){if(n==="click")return Bl(i)}function WE(n,i){if(n==="input"||n==="change")return Bl(i)}function KE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Mn=typeof Object.is=="function"?Object.is:KE;function fa(n,i){if(Mn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Mn(n[d],i[d]))return!1}return!0}function Dp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Op(n,i){var a=Dp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dp(a)}}function Vp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Vp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Lp(){for(var n=window,i=zr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=zr(n.document)}return i}function th(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function GE(n){var i=Lp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Vp(a.ownerDocument.documentElement,a)){if(c!==null&&th(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Op(a,m);var v=Op(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var QE=f&&"documentMode"in document&&11>=document.documentMode,eo=null,nh=null,pa=null,rh=!1;function bp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rh||eo==null||eo!==zr(c)||(c=eo,"selectionStart"in c&&th(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),pa&&fa(pa,c)||(pa=c,c=Wl(nh,"onSelect"),0<c.length&&(i=new Ws("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=eo)))}function $l(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var to={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionend:$l("Transition","TransitionEnd")},ih={},Mp={};f&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Hl(n){if(ih[n])return ih[n];if(!to[n])return n;var i=to[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mp)return ih[n]=i[a];return n}var Fp=Hl("animationend"),Up=Hl("animationiteration"),jp=Hl("animationstart"),zp=Hl("transitionend"),Bp=new Map,$p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(n,i){Bp.set(n,i),l(i,[n])}for(var sh=0;sh<$p.length;sh++){var oh=$p[sh],YE=oh.toLowerCase(),XE=oh[0].toUpperCase()+oh.slice(1);Jr(YE,"on"+XE)}Jr(Fp,"onAnimationEnd"),Jr(Up,"onAnimationIteration"),Jr(jp,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(zp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Hp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,wl(c,i,void 0,n),n.currentTarget=null}function qp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,j=S.currentTarget;if(S=S.listener,P!==m&&d.isPropagationStopped())break e;Hp(d,S,j),m=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,j=S.currentTarget,S=S.listener,P!==m&&d.isPropagationStopped())break e;Hp(d,S,j),m=P}}}if(Pn)throw n=Zo,Pn=!1,Zo=null,n}function Ye(n,i){var a=i[ph];a===void 0&&(a=i[ph]=new Set);var c=n+"__bubble";a.has(c)||(Wp(i,n,2,!1),a.add(c))}function ah(n,i,a){var c=0;i&&(c|=4),Wp(a,n,c,i)}var ql="_reactListening"+Math.random().toString(36).slice(2);function ga(n){if(!n[ql]){n[ql]=!0,s.forEach(function(a){a!=="selectionchange"&&(JE.has(a)||ah(a,!1,n),ah(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ql]||(i[ql]=!0,ah("selectionchange",!1,i))}}function Wp(n,i,a,c){switch(oa(i)){case 1:var d=Ze;break;case 4:d=Xc;break;default:d=sa}a=d.bind(null,i,a,n),d=void 0,!Ls||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function lh(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Ji(S),v===null)return;if(P=v.tag,P===5||P===6){c=m=v;continue e}S=S.parentNode}}c=c.return}Jo(function(){var j=m,Q=Ds(a),Y=[];e:{var K=Bp.get(n);if(K!==void 0){var te=Ws,se=n;switch(n){case"keypress":if(qs(a)===0)break e;case"keydown":case"keyup":te=p;break;case"focusin":se="focus",te=Ys;break;case"focusout":se="blur",te=Ys;break;case"beforeblur":case"afterblur":te=Ys;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Ll;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=z;break;case Fp:case Up:case jp:te=Sr;break;case zp:te=He;break;case"scroll":te=Jc;break;case"wheel":te=Me;break;case"copy":case"cut":case"paste":te=Fl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=w}var oe=(i&4)!==0,at=!oe&&n==="scroll",F=oe?K!==null?K+"Capture":null:K;oe=[];for(var O=j,U;O!==null;){U=O;var J=U.stateNode;if(U.tag===5&&J!==null&&(U=J,F!==null&&(J=ot(O,F),J!=null&&oe.push(ya(O,J,U)))),at)break;O=O.return}0<oe.length&&(K=new te(K,se,null,a,Q),Y.push({event:K,listeners:oe}))}}if((i&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",K&&a!==Ui&&(se=a.relatedTarget||a.fromElement)&&(Ji(se)||se[Ar]))break e;if((te||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,te?(se=a.relatedTarget||a.toElement,te=j,se=se?Ji(se):null,se!==null&&(at=Nn(se),se!==at||se.tag!==5&&se.tag!==6)&&(se=null)):(te=null,se=j),te!==se)){if(oe=Gs,J="onMouseLeave",F="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(oe=w,J="onPointerLeave",F="onPointerEnter",O="pointer"),at=te==null?K:io(te),U=se==null?K:io(se),K=new oe(J,O+"leave",te,a,Q),K.target=at,K.relatedTarget=U,J=null,Ji(Q)===j&&(oe=new oe(F,O+"enter",se,a,Q),oe.target=U,oe.relatedTarget=at,J=oe),at=J,te&&se)t:{for(oe=te,F=se,O=0,U=oe;U;U=no(U))O++;for(U=0,J=F;J;J=no(J))U++;for(;0<O-U;)oe=no(oe),O--;for(;0<U-O;)F=no(F),U--;for(;O--;){if(oe===F||F!==null&&oe===F.alternate)break t;oe=no(oe),F=no(F)}oe=null}else oe=null;te!==null&&Kp(Y,K,te,oe,!1),se!==null&&at!==null&&Kp(Y,at,se,oe,!0)}}e:{if(K=j?io(j):window,te=K.nodeName&&K.nodeName.toLowerCase(),te==="select"||te==="input"&&K.type==="file")var ce=BE;else if(Cp(K))if(kp)ce=WE;else{ce=HE;var ge=$E}else(te=K.nodeName)&&te.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ce=qE);if(ce&&(ce=ce(n,j))){Rp(Y,ce,a,Q);break e}ge&&ge(n,K,j),n==="focusout"&&(ge=K._wrapperState)&&ge.controlled&&K.type==="number"&&Ps(K,"number",K.value)}switch(ge=j?io(j):window,n){case"focusin":(Cp(ge)||ge.contentEditable==="true")&&(eo=ge,nh=j,pa=null);break;case"focusout":pa=nh=eo=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,bp(Y,a,Q);break;case"selectionchange":if(QE)break;case"keydown":case"keyup":bp(Y,a,Q)}var ye;if(ct)e:{switch(n){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Zs?Sp(n,a)&&(Te="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(Xi&&a.locale!=="ko"&&(Zs||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Zs&&(ye=aa()):(an=Q,Hs="value"in an?an.value:an.textContent,Zs=!0)),ge=Wl(j,Te),0<ge.length&&(Te=new ca(Te,n,null,a,Q),Y.push({event:Te,listeners:ge}),ye?Te.data=ye:(ye=Ap(a),ye!==null&&(Te.data=ye)))),(ye=ln?FE(n,a):UE(n,a))&&(j=Wl(j,"onBeforeInput"),0<j.length&&(Q=new ca("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:j}),Q.data=ye))}qp(Y,i)})}function ya(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Wl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=ot(n,a),m!=null&&c.unshift(ya(n,m,d)),m=ot(n,i),m!=null&&c.push(ya(n,m,d))),n=n.return}return c}function no(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kp(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,j=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&j!==null&&(S=j,d?(P=ot(a,m),P!=null&&v.unshift(ya(a,P,S))):d||(P=ot(a,m),P!=null&&v.push(ya(a,P,S)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var ZE=/\r\n?/g,e0=/\u0000|\uFFFD/g;function Gp(n){return(typeof n=="string"?n:""+n).replace(ZE,`
`).replace(e0,"")}function Kl(n,i,a){if(i=Gp(i),Gp(n)!==i&&a)throw Error(t(425))}function Gl(){}var uh=null,ch=null;function hh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dh=typeof setTimeout=="function"?setTimeout:void 0,t0=typeof clearTimeout=="function"?clearTimeout:void 0,Qp=typeof Promise=="function"?Promise:void 0,n0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qp<"u"?function(n){return Qp.resolve(null).then(n).catch(r0)}:dh;function r0(n){setTimeout(function(){throw n})}function fh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Ln(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Ln(i)}function Zr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Yp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ro=Math.random().toString(36).slice(2),nr="__reactFiber$"+ro,_a="__reactProps$"+ro,Ar="__reactContainer$"+ro,ph="__reactEvents$"+ro,i0="__reactListeners$"+ro,s0="__reactHandles$"+ro;function Ji(n){var i=n[nr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ar]||a[nr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Yp(n);n!==null;){if(a=n[nr])return a;n=Yp(n)}return i}n=a,a=n.parentNode}return null}function va(n){return n=n[nr]||n[Ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function io(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ql(n){return n[_a]||null}var mh=[],so=-1;function ei(n){return{current:n}}function Xe(n){0>so||(n.current=mh[so],mh[so]=null,so--)}function Ge(n,i){so++,mh[so]=n.current,n.current=i}var ti={},Vt=ei(ti),Gt=ei(!1),Zi=ti;function oo(n,i){var a=n.type.contextTypes;if(!a)return ti;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function Yl(){Xe(Gt),Xe(Vt)}function Xp(n,i,a){if(Vt.current!==ti)throw Error(t(168));Ge(Vt,i),Ge(Gt,a)}function Jp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ze(n)||"Unknown",d));return ee({},a,c)}function Xl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ti,Zi=Vt.current,Ge(Vt,n),Ge(Gt,Gt.current),!0}function Zp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Jp(n,i,Zi),c.__reactInternalMemoizedMergedChildContext=n,Xe(Gt),Xe(Vt),Ge(Vt,n)):Xe(Gt),Ge(Gt,a)}var Cr=null,Jl=!1,gh=!1;function em(n){Cr===null?Cr=[n]:Cr.push(n)}function o0(n){Jl=!0,em(n)}function ni(){if(!gh&&Cr!==null){gh=!0;var n=0,i=Le;try{var a=Cr;for(Le=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Cr=null,Jl=!1}catch(d){throw Cr!==null&&(Cr=Cr.slice(n+1)),Us(Hi,ni),d}finally{Le=i,gh=!1}}return null}var ao=[],lo=0,Zl=null,eu=0,wn=[],En=0,es=null,Rr=1,kr="";function ts(n,i){ao[lo++]=eu,ao[lo++]=Zl,Zl=n,eu=i}function tm(n,i,a){wn[En++]=Rr,wn[En++]=kr,wn[En++]=es,es=n;var c=Rr;n=kr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var m=32-Bt(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Rr=1<<32-Bt(i)+d|a<<d|c,kr=m+n}else Rr=1<<m|a<<d|c,kr=n}function yh(n){n.return!==null&&(ts(n,1),tm(n,1,0))}function _h(n){for(;n===Zl;)Zl=ao[--lo],ao[lo]=null,eu=ao[--lo],ao[lo]=null;for(;n===es;)es=wn[--En],wn[En]=null,kr=wn[--En],wn[En]=null,Rr=wn[--En],wn[En]=null}var un=null,cn=null,et=!1,Fn=null;function nm(n,i){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function rm(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,un=n,cn=Zr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,un=n,cn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=es!==null?{id:Rr,overflow:kr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,un=n,cn=null,!0):!1;default:return!1}}function vh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wh(n){if(et){var i=cn;if(i){var a=i;if(!rm(n,i)){if(vh(n))throw Error(t(418));i=Zr(a.nextSibling);var c=un;i&&rm(n,i)?nm(c,a):(n.flags=n.flags&-4097|2,et=!1,un=n)}}else{if(vh(n))throw Error(t(418));n.flags=n.flags&-4097|2,et=!1,un=n}}}function im(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;un=n}function tu(n){if(n!==un)return!1;if(!et)return im(n),et=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!hh(n.type,n.memoizedProps)),i&&(i=cn)){if(vh(n))throw sm(),Error(t(418));for(;i;)nm(n,i),i=Zr(i.nextSibling)}if(im(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){cn=Zr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}cn=null}}else cn=un?Zr(n.stateNode.nextSibling):null;return!0}function sm(){for(var n=cn;n;)n=Zr(n.nextSibling)}function uo(){cn=un=null,et=!1}function Eh(n){Fn===null?Fn=[n]:Fn.push(n)}var a0=_e.ReactCurrentBatchConfig;function wa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var S=d.refs;v===null?delete S[m]:S[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function nu(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function om(n){var i=n._init;return i(n._payload)}function am(n){function i(F,O){if(n){var U=F.deletions;U===null?(F.deletions=[O],F.flags|=16):U.push(O)}}function a(F,O){if(!n)return null;for(;O!==null;)i(F,O),O=O.sibling;return null}function c(F,O){for(F=new Map;O!==null;)O.key!==null?F.set(O.key,O):F.set(O.index,O),O=O.sibling;return F}function d(F,O){return F=ci(F,O),F.index=0,F.sibling=null,F}function m(F,O,U){return F.index=U,n?(U=F.alternate,U!==null?(U=U.index,U<O?(F.flags|=2,O):U):(F.flags|=2,O)):(F.flags|=1048576,O)}function v(F){return n&&F.alternate===null&&(F.flags|=2),F}function S(F,O,U,J){return O===null||O.tag!==6?(O=dd(U,F.mode,J),O.return=F,O):(O=d(O,U),O.return=F,O)}function P(F,O,U,J){var ce=U.type;return ce===x?Q(F,O,U.props.children,J,U.key):O!==null&&(O.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===he&&om(ce)===O.type)?(J=d(O,U.props),J.ref=wa(F,O,U),J.return=F,J):(J=Cu(U.type,U.key,U.props,null,F.mode,J),J.ref=wa(F,O,U),J.return=F,J)}function j(F,O,U,J){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=fd(U,F.mode,J),O.return=F,O):(O=d(O,U.children||[]),O.return=F,O)}function Q(F,O,U,J,ce){return O===null||O.tag!==7?(O=us(U,F.mode,J,ce),O.return=F,O):(O=d(O,U),O.return=F,O)}function Y(F,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return O=dd(""+O,F.mode,U),O.return=F,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Oe:return U=Cu(O.type,O.key,O.props,null,F.mode,U),U.ref=wa(F,null,O),U.return=F,U;case Ie:return O=fd(O,F.mode,U),O.return=F,O;case he:var J=O._init;return Y(F,J(O._payload),U)}if(gr(O)||ie(O))return O=us(O,F.mode,U,null),O.return=F,O;nu(F,O)}return null}function K(F,O,U,J){var ce=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return ce!==null?null:S(F,O,""+U,J);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Oe:return U.key===ce?P(F,O,U,J):null;case Ie:return U.key===ce?j(F,O,U,J):null;case he:return ce=U._init,K(F,O,ce(U._payload),J)}if(gr(U)||ie(U))return ce!==null?null:Q(F,O,U,J,null);nu(F,U)}return null}function te(F,O,U,J,ce){if(typeof J=="string"&&J!==""||typeof J=="number")return F=F.get(U)||null,S(O,F,""+J,ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Oe:return F=F.get(J.key===null?U:J.key)||null,P(O,F,J,ce);case Ie:return F=F.get(J.key===null?U:J.key)||null,j(O,F,J,ce);case he:var ge=J._init;return te(F,O,U,ge(J._payload),ce)}if(gr(J)||ie(J))return F=F.get(U)||null,Q(O,F,J,ce,null);nu(O,J)}return null}function se(F,O,U,J){for(var ce=null,ge=null,ye=O,Te=O=0,At=null;ye!==null&&Te<U.length;Te++){ye.index>Te?(At=ye,ye=null):At=ye.sibling;var je=K(F,ye,U[Te],J);if(je===null){ye===null&&(ye=At);break}n&&ye&&je.alternate===null&&i(F,ye),O=m(je,O,Te),ge===null?ce=je:ge.sibling=je,ge=je,ye=At}if(Te===U.length)return a(F,ye),et&&ts(F,Te),ce;if(ye===null){for(;Te<U.length;Te++)ye=Y(F,U[Te],J),ye!==null&&(O=m(ye,O,Te),ge===null?ce=ye:ge.sibling=ye,ge=ye);return et&&ts(F,Te),ce}for(ye=c(F,ye);Te<U.length;Te++)At=te(ye,F,Te,U[Te],J),At!==null&&(n&&At.alternate!==null&&ye.delete(At.key===null?Te:At.key),O=m(At,O,Te),ge===null?ce=At:ge.sibling=At,ge=At);return n&&ye.forEach(function(hi){return i(F,hi)}),et&&ts(F,Te),ce}function oe(F,O,U,J){var ce=ie(U);if(typeof ce!="function")throw Error(t(150));if(U=ce.call(U),U==null)throw Error(t(151));for(var ge=ce=null,ye=O,Te=O=0,At=null,je=U.next();ye!==null&&!je.done;Te++,je=U.next()){ye.index>Te?(At=ye,ye=null):At=ye.sibling;var hi=K(F,ye,je.value,J);if(hi===null){ye===null&&(ye=At);break}n&&ye&&hi.alternate===null&&i(F,ye),O=m(hi,O,Te),ge===null?ce=hi:ge.sibling=hi,ge=hi,ye=At}if(je.done)return a(F,ye),et&&ts(F,Te),ce;if(ye===null){for(;!je.done;Te++,je=U.next())je=Y(F,je.value,J),je!==null&&(O=m(je,O,Te),ge===null?ce=je:ge.sibling=je,ge=je);return et&&ts(F,Te),ce}for(ye=c(F,ye);!je.done;Te++,je=U.next())je=te(ye,F,Te,je.value,J),je!==null&&(n&&je.alternate!==null&&ye.delete(je.key===null?Te:je.key),O=m(je,O,Te),ge===null?ce=je:ge.sibling=je,ge=je);return n&&ye.forEach(function(j0){return i(F,j0)}),et&&ts(F,Te),ce}function at(F,O,U,J){if(typeof U=="object"&&U!==null&&U.type===x&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Oe:e:{for(var ce=U.key,ge=O;ge!==null;){if(ge.key===ce){if(ce=U.type,ce===x){if(ge.tag===7){a(F,ge.sibling),O=d(ge,U.props.children),O.return=F,F=O;break e}}else if(ge.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===he&&om(ce)===ge.type){a(F,ge.sibling),O=d(ge,U.props),O.ref=wa(F,ge,U),O.return=F,F=O;break e}a(F,ge);break}else i(F,ge);ge=ge.sibling}U.type===x?(O=us(U.props.children,F.mode,J,U.key),O.return=F,F=O):(J=Cu(U.type,U.key,U.props,null,F.mode,J),J.ref=wa(F,O,U),J.return=F,F=J)}return v(F);case Ie:e:{for(ge=U.key;O!==null;){if(O.key===ge)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(F,O.sibling),O=d(O,U.children||[]),O.return=F,F=O;break e}else{a(F,O);break}else i(F,O);O=O.sibling}O=fd(U,F.mode,J),O.return=F,F=O}return v(F);case he:return ge=U._init,at(F,O,ge(U._payload),J)}if(gr(U))return se(F,O,U,J);if(ie(U))return oe(F,O,U,J);nu(F,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,O!==null&&O.tag===6?(a(F,O.sibling),O=d(O,U),O.return=F,F=O):(a(F,O),O=dd(U,F.mode,J),O.return=F,F=O),v(F)):a(F,O)}return at}var co=am(!0),lm=am(!1),ru=ei(null),iu=null,ho=null,Th=null;function Ih(){Th=ho=iu=null}function Sh(n){var i=ru.current;Xe(ru),n._currentValue=i}function Ah(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function fo(n,i){iu=n,Th=ho=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yt=!0),n.firstContext=null)}function Tn(n){var i=n._currentValue;if(Th!==n)if(n={context:n,memoizedValue:i,next:null},ho===null){if(iu===null)throw Error(t(308));ho=n,iu.dependencies={lanes:0,firstContext:n}}else ho=ho.next=n;return i}var ns=null;function Ch(n){ns===null?ns=[n]:ns.push(n)}function um(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Ch(i)):(a.next=d.next,d.next=a),i.interleaved=a,Pr(n,c)}function Pr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ri=!1;function Rh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cm(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Nr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ii(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ue&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Pr(n,a)}return d=c.interleaved,d===null?(i.next=i,Ch(c)):(i.next=d.next,d.next=i),c.interleaved=i,Pr(n,a)}function su(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Kr(n,a)}}function hm(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ou(n,i,a,c){var d=n.updateQueue;ri=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,j=P.next;P.next=null,v===null?m=j:v.next=j,v=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=j:S.next=j,Q.lastBaseUpdate=P))}if(m!==null){var Y=d.baseState;v=0,Q=j=P=null,S=m;do{var K=S.lane,te=S.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:te,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var se=n,oe=S;switch(K=i,te=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Y=se.call(te,Y,K);break e}Y=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,K=typeof se=="function"?se.call(te,Y,K):se,K==null)break e;Y=ee({},Y,K);break e;case 2:ri=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[S]:K.push(S))}else te={eventTime:te,lane:K,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(j=Q=te,P=Y):Q=Q.next=te,v|=K;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;K=S,S=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ss|=v,n.lanes=v,n.memoizedState=Y}}function dm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ea={},rr=ei(Ea),Ta=ei(Ea),Ia=ei(Ea);function rs(n){if(n===Ea)throw Error(t(174));return n}function kh(n,i){switch(Ge(Ia,i),Ge(Ta,n),Ge(rr,Ea),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:mt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=mt(i,n)}Xe(rr),Ge(rr,i)}function po(){Xe(rr),Xe(Ta),Xe(Ia)}function fm(n){rs(Ia.current);var i=rs(rr.current),a=mt(i,n.type);i!==a&&(Ge(Ta,n),Ge(rr,a))}function Ph(n){Ta.current===n&&(Xe(rr),Xe(Ta))}var tt=ei(0);function au(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nh=[];function xh(){for(var n=0;n<Nh.length;n++)Nh[n]._workInProgressVersionPrimary=null;Nh.length=0}var lu=_e.ReactCurrentDispatcher,Dh=_e.ReactCurrentBatchConfig,is=0,nt=null,yt=null,It=null,uu=!1,Sa=!1,Aa=0,l0=0;function Lt(){throw Error(t(321))}function Oh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Mn(n[a],i[a]))return!1;return!0}function Vh(n,i,a,c,d,m){if(is=m,nt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,lu.current=n===null||n.memoizedState===null?d0:f0,n=a(c,d),Sa){m=0;do{if(Sa=!1,Aa=0,25<=m)throw Error(t(301));m+=1,It=yt=null,i.updateQueue=null,lu.current=p0,n=a(c,d)}while(Sa)}if(lu.current=du,i=yt!==null&&yt.next!==null,is=0,It=yt=nt=null,uu=!1,i)throw Error(t(300));return n}function Lh(){var n=Aa!==0;return Aa=0,n}function ir(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?nt.memoizedState=It=n:It=It.next=n,It}function In(){if(yt===null){var n=nt.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var i=It===null?nt.memoizedState:It.next;if(i!==null)It=i,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},It===null?nt.memoizedState=It=n:It=It.next=n}return It}function Ca(n,i){return typeof i=="function"?i(n):i}function bh(n){var i=In(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var S=v=null,P=null,j=m;do{var Q=j.lane;if((is&Q)===Q)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var Y={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(S=P=Y,v=c):P=P.next=Y,nt.lanes|=Q,ss|=Q}j=j.next}while(j!==null&&j!==m);P===null?v=c:P.next=S,Mn(c,i.memoizedState)||(Yt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,nt.lanes|=m,ss|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Mh(n){var i=In(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Mn(m,i.memoizedState)||(Yt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function pm(){}function mm(n,i){var a=nt,c=In(),d=i(),m=!Mn(c.memoizedState,d);if(m&&(c.memoizedState=d,Yt=!0),c=c.queue,Fh(_m.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,Ra(9,ym.bind(null,a,c,d,i),void 0,null),St===null)throw Error(t(349));(is&30)!==0||gm(a,i,d)}return d}function gm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=nt.updateQueue,i===null?(i={lastEffect:null,stores:null},nt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ym(n,i,a,c){i.value=a,i.getSnapshot=c,vm(i)&&wm(n)}function _m(n,i,a){return a(function(){vm(i)&&wm(n)})}function vm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Mn(n,a)}catch{return!0}}function wm(n){var i=Pr(n,1);i!==null&&Bn(i,n,1,-1)}function Em(n){var i=ir();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:n},i.queue=n,n=n.dispatch=h0.bind(null,nt,n),[i.memoizedState,n]}function Ra(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=nt.updateQueue,i===null?(i={lastEffect:null,stores:null},nt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Tm(){return In().memoizedState}function cu(n,i,a,c){var d=ir();nt.flags|=n,d.memoizedState=Ra(1|i,a,void 0,c===void 0?null:c)}function hu(n,i,a,c){var d=In();c=c===void 0?null:c;var m=void 0;if(yt!==null){var v=yt.memoizedState;if(m=v.destroy,c!==null&&Oh(c,v.deps)){d.memoizedState=Ra(i,a,m,c);return}}nt.flags|=n,d.memoizedState=Ra(1|i,a,m,c)}function Im(n,i){return cu(8390656,8,n,i)}function Fh(n,i){return hu(2048,8,n,i)}function Sm(n,i){return hu(4,2,n,i)}function Am(n,i){return hu(4,4,n,i)}function Cm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Rm(n,i,a){return a=a!=null?a.concat([n]):null,hu(4,4,Cm.bind(null,i,n),a)}function Uh(){}function km(n,i){var a=In();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Oh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Pm(n,i){var a=In();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Oh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Nm(n,i,a){return(is&21)===0?(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=a):(Mn(a,i)||(a=Ki(),nt.lanes|=a,ss|=a,n.baseState=!0),i)}function u0(n,i){var a=Le;Le=a!==0&&4>a?a:4,n(!0);var c=Dh.transition;Dh.transition={};try{n(!1),i()}finally{Le=a,Dh.transition=c}}function xm(){return In().memoizedState}function c0(n,i,a){var c=li(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Dm(n))Om(i,a);else if(a=um(n,i,a,c),a!==null){var d=qt();Bn(a,n,c,d),Vm(a,i,c)}}function h0(n,i,a){var c=li(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dm(n))Om(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,S=m(v,a);if(d.hasEagerState=!0,d.eagerState=S,Mn(S,v)){var P=i.interleaved;P===null?(d.next=d,Ch(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=um(n,i,d,c),a!==null&&(d=qt(),Bn(a,n,c,d),Vm(a,i,c))}}function Dm(n){var i=n.alternate;return n===nt||i!==null&&i===nt}function Om(n,i){Sa=uu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Vm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Kr(n,a)}}var du={readContext:Tn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},d0={readContext:Tn,useCallback:function(n,i){return ir().memoizedState=[n,i===void 0?null:i],n},useContext:Tn,useEffect:Im,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,cu(4194308,4,Cm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return cu(4194308,4,n,i)},useInsertionEffect:function(n,i){return cu(4,2,n,i)},useMemo:function(n,i){var a=ir();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ir();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=c0.bind(null,nt,n),[c.memoizedState,n]},useRef:function(n){var i=ir();return n={current:n},i.memoizedState=n},useState:Em,useDebugValue:Uh,useDeferredValue:function(n){return ir().memoizedState=n},useTransition:function(){var n=Em(!1),i=n[0];return n=u0.bind(null,n[1]),ir().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=nt,d=ir();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),St===null)throw Error(t(349));(is&30)!==0||gm(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Im(_m.bind(null,c,m,n),[n]),c.flags|=2048,Ra(9,ym.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=ir(),i=St.identifierPrefix;if(et){var a=kr,c=Rr;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Aa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=l0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},f0={readContext:Tn,useCallback:km,useContext:Tn,useEffect:Fh,useImperativeHandle:Rm,useInsertionEffect:Sm,useLayoutEffect:Am,useMemo:Pm,useReducer:bh,useRef:Tm,useState:function(){return bh(Ca)},useDebugValue:Uh,useDeferredValue:function(n){var i=In();return Nm(i,yt.memoizedState,n)},useTransition:function(){var n=bh(Ca)[0],i=In().memoizedState;return[n,i]},useMutableSource:pm,useSyncExternalStore:mm,useId:xm,unstable_isNewReconciler:!1},p0={readContext:Tn,useCallback:km,useContext:Tn,useEffect:Fh,useImperativeHandle:Rm,useInsertionEffect:Sm,useLayoutEffect:Am,useMemo:Pm,useReducer:Mh,useRef:Tm,useState:function(){return Mh(Ca)},useDebugValue:Uh,useDeferredValue:function(n){var i=In();return yt===null?i.memoizedState=n:Nm(i,yt.memoizedState,n)},useTransition:function(){var n=Mh(Ca)[0],i=In().memoizedState;return[n,i]},useMutableSource:pm,useSyncExternalStore:mm,useId:xm,unstable_isNewReconciler:!1};function Un(n,i){if(n&&n.defaultProps){i=ee({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function jh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ee({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var fu={isMounted:function(n){return(n=n._reactInternals)?Nn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=qt(),d=li(n),m=Nr(c,d);m.payload=i,a!=null&&(m.callback=a),i=ii(n,m,d),i!==null&&(Bn(i,n,d,c),su(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=qt(),d=li(n),m=Nr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ii(n,m,d),i!==null&&(Bn(i,n,d,c),su(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qt(),c=li(n),d=Nr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ii(n,d,c),i!==null&&(Bn(i,n,c,a),su(i,n,c))}};function Lm(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!fa(a,c)||!fa(d,m):!0}function bm(n,i,a){var c=!1,d=ti,m=i.contextType;return typeof m=="object"&&m!==null?m=Tn(m):(d=Qt(i)?Zi:Vt.current,c=i.contextTypes,m=(c=c!=null)?oo(n,d):ti),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Mm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&fu.enqueueReplaceState(i,i.state,null)}function zh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Rh(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Tn(m):(m=Qt(i)?Zi:Vt.current,d.context=oo(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(jh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&fu.enqueueReplaceState(d,d.state,null),ou(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function mo(n,i){try{var a="",c=i;do a+=Pe(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Bh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function $h(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var m0=typeof WeakMap=="function"?WeakMap:Map;function Fm(n,i,a){a=Nr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){wu||(wu=!0,id=c),$h(n,i)},a}function Um(n,i,a){a=Nr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){$h(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){$h(n,i),typeof c!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function jm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new m0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=P0.bind(null,n,i,a),i.then(n,n))}function zm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Bm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Nr(-1,1),i.tag=2,ii(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var g0=_e.ReactCurrentOwner,Yt=!1;function Ht(n,i,a,c){i.child=n===null?lm(i,null,a,c):co(i,n.child,a,c)}function $m(n,i,a,c,d){a=a.render;var m=i.ref;return fo(i,d),c=Vh(n,i,a,c,m,d),a=Lh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,xr(n,i,d)):(et&&a&&yh(i),i.flags|=1,Ht(n,i,c,d),i.child)}function Hm(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!hd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,qm(n,i,m,c,d)):(n=Cu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:fa,a(v,c)&&n.ref===i.ref)return xr(n,i,d)}return i.flags|=1,n=ci(m,c),n.ref=i.ref,n.return=i,i.child=n}function qm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(fa(m,c)&&n.ref===i.ref)if(Yt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Yt=!0);else return i.lanes=n.lanes,xr(n,i,d)}return Hh(n,i,a,c,d)}function Wm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(yo,hn),hn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ge(yo,hn),hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ge(yo,hn),hn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Ge(yo,hn),hn|=c;return Ht(n,i,d,a),i.child}function Km(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Hh(n,i,a,c,d){var m=Qt(a)?Zi:Vt.current;return m=oo(i,m),fo(i,d),a=Vh(n,i,a,c,m,d),c=Lh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,xr(n,i,d)):(et&&c&&yh(i),i.flags|=1,Ht(n,i,a,d),i.child)}function Gm(n,i,a,c,d){if(Qt(a)){var m=!0;Xl(i)}else m=!1;if(fo(i,d),i.stateNode===null)mu(n,i),bm(i,a,c),zh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=Tn(j):(j=Qt(a)?Zi:Vt.current,j=oo(i,j));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==j)&&Mm(i,v,c,j),ri=!1;var K=i.memoizedState;v.state=K,ou(i,c,v,d),P=i.memoizedState,S!==c||K!==P||Gt.current||ri?(typeof Q=="function"&&(jh(i,a,Q,c),P=i.memoizedState),(S=ri||Lm(i,a,S,c,K,P,j))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=j,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,cm(n,i),S=i.memoizedProps,j=i.type===i.elementType?S:Un(i.type,S),v.props=j,Y=i.pendingProps,K=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=Tn(P):(P=Qt(a)?Zi:Vt.current,P=oo(i,P));var te=a.getDerivedStateFromProps;(Q=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Y||K!==P)&&Mm(i,v,c,P),ri=!1,K=i.memoizedState,v.state=K,ou(i,c,v,d);var se=i.memoizedState;S!==Y||K!==se||Gt.current||ri?(typeof te=="function"&&(jh(i,a,te,c),se=i.memoizedState),(j=ri||Lm(i,a,j,c,K,se,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=se),v.props=c,v.state=se,v.context=P,c=j):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),c=!1)}return qh(n,i,a,c,m,d)}function qh(n,i,a,c,d,m){Km(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Zp(i,a,!1),xr(n,i,m);c=i.stateNode,g0.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=co(i,n.child,null,m),i.child=co(i,null,S,m)):Ht(n,i,S,m),i.memoizedState=c.state,d&&Zp(i,a,!0),i.child}function Qm(n){var i=n.stateNode;i.pendingContext?Xp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Xp(n,i.context,!1),kh(n,i.containerInfo)}function Ym(n,i,a,c,d){return uo(),Eh(d),i.flags|=256,Ht(n,i,a,c),i.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function Kh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xm(n,i,a){var c=i.pendingProps,d=tt.current,m=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(tt,d&1),n===null)return wh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Ru(v,c,0,null),n=us(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Kh(a),i.memoizedState=Wh,n):Gh(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return y0(n,i,v,c,S,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ci(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?m=ci(S,m):(m=us(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?Kh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=Wh,c}return m=n.child,n=m.sibling,c=ci(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Gh(n,i){return i=Ru({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function pu(n,i,a,c){return c!==null&&Eh(c),co(i,n.child,null,a),n=Gh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function y0(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=Bh(Error(t(422))),pu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=Ru({mode:"visible",children:c.children},d,0,null),m=us(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&co(i,n.child,null,v),i.child.memoizedState=Kh(v),i.memoizedState=Wh,m);if((i.mode&1)===0)return pu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,m=Error(t(419)),c=Bh(m,c,void 0),pu(n,i,v,c)}if(S=(v&n.childLanes)!==0,Yt||S){if(c=St,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Pr(n,d),Bn(c,n,d,-1))}return cd(),c=Bh(Error(t(421))),pu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=N0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,cn=Zr(d.nextSibling),un=i,et=!0,Fn=null,n!==null&&(wn[En++]=Rr,wn[En++]=kr,wn[En++]=es,Rr=n.id,kr=n.overflow,es=i),i=Gh(i,c.children),i.flags|=4096,i)}function Jm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Ah(n.return,i,a)}function Qh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Zm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Ht(n,i,c.children,a),c=tt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Jm(n,a,i);else if(n.tag===19)Jm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(tt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&au(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Qh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&au(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Qh(i,!0,a,null,m);break;case"together":Qh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function mu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function xr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ss|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ci(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ci(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function _0(n,i,a){switch(i.tag){case 3:Qm(i),uo();break;case 5:fm(i);break;case 1:Qt(i.type)&&Xl(i);break;case 4:kh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ge(ru,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ge(tt,tt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Xm(n,i,a):(Ge(tt,tt.current&1),n=xr(n,i,a),n!==null?n.sibling:null);Ge(tt,tt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Zm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(tt,tt.current),c)break;return null;case 22:case 23:return i.lanes=0,Wm(n,i,a)}return xr(n,i,a)}var eg,Yh,tg,ng;eg=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Yh=function(){},tg=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,rs(rr.current);var m=null;switch(a){case"input":d=bi(n,d),c=bi(n,c),m=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),m=[];break;case"textarea":d=Bo(n,d),c=Bo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Gl)}Go(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var S=d[j];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in c){var P=c[j];if(S=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&P!==S&&(P!=null||S!=null))if(j==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(m||(m=[]),m.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(m=m||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&Ye("scroll",n),m||S===P||(m=[])):(m=m||[]).push(j,P))}a&&(m=m||[]).push("style",a);var j=m;(i.updateQueue=j)&&(i.flags|=4)}},ng=function(n,i,a,c){a!==c&&(i.flags|=4)};function ka(n,i){if(!et)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function v0(n,i,a){var c=i.pendingProps;switch(_h(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(i),null;case 1:return Qt(i.type)&&Yl(),bt(i),null;case 3:return c=i.stateNode,po(),Xe(Gt),Xe(Vt),xh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(tu(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Fn!==null&&(ad(Fn),Fn=null))),Yh(n,i),bt(i),null;case 5:Ph(i);var d=rs(Ia.current);if(a=i.type,n!==null&&i.stateNode!=null)tg(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return bt(i),null}if(n=rs(rr.current),tu(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[nr]=i,c[_a]=m,n=(i.mode&1)!==0,a){case"dialog":Ye("cancel",c),Ye("close",c);break;case"iframe":case"object":case"embed":Ye("load",c);break;case"video":case"audio":for(d=0;d<ma.length;d++)Ye(ma[d],c);break;case"source":Ye("error",c);break;case"img":case"image":case"link":Ye("error",c),Ye("load",c);break;case"details":Ye("toggle",c);break;case"input":ks(c,m),Ye("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ye("invalid",c);break;case"textarea":Ns(c,m),Ye("invalid",c)}Go(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var S=m[v];v==="children"?typeof S=="string"?c.textContent!==S&&(m.suppressHydrationWarning!==!0&&Kl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&Kl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ye("scroll",c)}switch(a){case"input":mr(c),vl(c,m,!0);break;case"textarea":mr(c),$o(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Gl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[nr]=i,n[_a]=c,eg(n,i,!1,!1),i.stateNode=n;e:{switch(v=Qo(a,c),a){case"dialog":Ye("cancel",n),Ye("close",n),d=c;break;case"iframe":case"object":case"embed":Ye("load",n),d=c;break;case"video":case"audio":for(d=0;d<ma.length;d++)Ye(ma[d],n);d=c;break;case"source":Ye("error",n),d=c;break;case"img":case"image":case"link":Ye("error",n),Ye("load",n),d=c;break;case"details":Ye("toggle",n),d=c;break;case"input":ks(n,c),d=bi(n,c),Ye("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),Ye("invalid",n);break;case"textarea":Ns(n,c),d=Bo(n,c),Ye("invalid",n);break;default:d=c}Go(a,d),S=d;for(m in S)if(S.hasOwnProperty(m)){var P=S[m];m==="style"?Wo(n,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Ho(n,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Br(n,P):typeof P=="number"&&Br(n,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&Ye("scroll",n):P!=null&&ue(n,m,P,v))}switch(a){case"input":mr(n),vl(n,c,!1);break;case"textarea":mr(n),$o(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Be(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?yr(n,!!c.multiple,m,!1):c.defaultValue!=null&&yr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Gl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bt(i),null;case 6:if(n&&i.stateNode!=null)ng(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=rs(Ia.current),rs(rr.current),tu(i)){if(c=i.stateNode,a=i.memoizedProps,c[nr]=i,(m=c.nodeValue!==a)&&(n=un,n!==null))switch(n.tag){case 3:Kl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Kl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[nr]=i,i.stateNode=c}return bt(i),null;case 13:if(Xe(tt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(et&&cn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)sm(),uo(),i.flags|=98560,m=!1;else if(m=tu(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[nr]=i}else uo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bt(i),m=!1}else Fn!==null&&(ad(Fn),Fn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tt.current&1)!==0?_t===0&&(_t=3):cd())),i.updateQueue!==null&&(i.flags|=4),bt(i),null);case 4:return po(),Yh(n,i),n===null&&ga(i.stateNode.containerInfo),bt(i),null;case 10:return Sh(i.type._context),bt(i),null;case 17:return Qt(i.type)&&Yl(),bt(i),null;case 19:if(Xe(tt),m=i.memoizedState,m===null)return bt(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)ka(m,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=au(n),v!==null){for(i.flags|=128,ka(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(tt,tt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ke()>_o&&(i.flags|=128,c=!0,ka(m,!1),i.lanes=4194304)}else{if(!c)if(n=au(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ka(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!et)return bt(i),null}else 2*Ke()-m.renderingStartTime>_o&&a!==1073741824&&(i.flags|=128,c=!0,ka(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ke(),i.sibling=null,a=tt.current,Ge(tt,c?a&1|2:a&1),i):(bt(i),null);case 22:case 23:return ud(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(hn&1073741824)!==0&&(bt(i),i.subtreeFlags&6&&(i.flags|=8192)):bt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function w0(n,i){switch(_h(i),i.tag){case 1:return Qt(i.type)&&Yl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return po(),Xe(Gt),Xe(Vt),xh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Ph(i),null;case 13:if(Xe(tt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));uo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xe(tt),null;case 4:return po(),null;case 10:return Sh(i.type._context),null;case 22:case 23:return ud(),null;case 24:return null;default:return null}}var gu=!1,Mt=!1,E0=typeof WeakSet=="function"?WeakSet:Set,re=null;function go(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,i,c)}else a.current=null}function Xh(n,i,a){try{a()}catch(c){it(n,i,c)}}var rg=!1;function T0(n,i){if(uh=Yr,n=Lp(),th(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,j=0,Q=0,Y=n,K=null;t:for(;;){for(var te;Y!==a||d!==0&&Y.nodeType!==3||(S=v+d),Y!==m||c!==0&&Y.nodeType!==3||(P=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(te=Y.firstChild)!==null;)K=Y,Y=te;for(;;){if(Y===n)break t;if(K===a&&++j===d&&(S=v),K===m&&++Q===c&&(P=v),(te=Y.nextSibling)!==null)break;Y=K,K=Y.parentNode}Y=te}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(ch={focusedElem:n,selectionRange:a},Yr=!1,re=i;re!==null;)if(i=re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,re=n;else for(;re!==null;){i=re;try{var se=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,at=se.memoizedState,F=i.stateNode,O=F.getSnapshotBeforeUpdate(i.elementType===i.type?oe:Un(i.type,oe),at);F.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){it(i,i.return,J)}if(n=i.sibling,n!==null){n.return=i.return,re=n;break}re=i.return}return se=rg,rg=!1,se}function Pa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Xh(i,a,m)}d=d.next}while(d!==c)}}function yu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Jh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function ig(n){var i=n.alternate;i!==null&&(n.alternate=null,ig(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[nr],delete i[_a],delete i[ph],delete i[i0],delete i[s0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sg(n){return n.tag===5||n.tag===3||n.tag===4}function og(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Zh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Gl));else if(c!==4&&(n=n.child,n!==null))for(Zh(n,i,a),n=n.sibling;n!==null;)Zh(n,i,a),n=n.sibling}function ed(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ed(n,i,a),n=n.sibling;n!==null;)ed(n,i,a),n=n.sibling}var Pt=null,jn=!1;function si(n,i,a){for(a=a.child;a!==null;)ag(n,i,a),a=a.sibling}function ag(n,i,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(qi,a)}catch{}switch(a.tag){case 5:Mt||go(a,i);case 6:var c=Pt,d=jn;Pt=null,si(n,i,a),Pt=c,jn=d,Pt!==null&&(jn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(jn?(n=Pt,a=a.stateNode,n.nodeType===8?fh(n.parentNode,a):n.nodeType===1&&fh(n,a),Ln(n)):fh(Pt,a.stateNode));break;case 4:c=Pt,d=jn,Pt=a.stateNode.containerInfo,jn=!0,si(n,i,a),Pt=c,jn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&Xh(a,i,v),d=d.next}while(d!==c)}si(n,i,a);break;case 1:if(!Mt&&(go(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){it(a,i,S)}si(n,i,a);break;case 21:si(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,si(n,i,a),Mt=c):si(n,i,a);break;default:si(n,i,a)}}function lg(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new E0),i.forEach(function(c){var d=x0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function zn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,jn=!1;break e;case 3:Pt=S.stateNode.containerInfo,jn=!0;break e;case 4:Pt=S.stateNode.containerInfo,jn=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));ag(m,v,d),Pt=null,jn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){it(d,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ug(i,n),i=i.sibling}function ug(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(zn(i,n),sr(n),c&4){try{Pa(3,n,n.return),yu(3,n)}catch(oe){it(n,n.return,oe)}try{Pa(5,n,n.return)}catch(oe){it(n,n.return,oe)}}break;case 1:zn(i,n),sr(n),c&512&&a!==null&&go(a,a.return);break;case 5:if(zn(i,n),sr(n),c&512&&a!==null&&go(a,a.return),n.flags&32){var d=n.stateNode;try{Br(d,"")}catch(oe){it(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&jo(d,m),Qo(S,v);var j=Qo(S,m);for(v=0;v<P.length;v+=2){var Q=P[v],Y=P[v+1];Q==="style"?Wo(d,Y):Q==="dangerouslySetInnerHTML"?Ho(d,Y):Q==="children"?Br(d,Y):ue(d,Q,Y,j)}switch(S){case"input":zo(d,m);break;case"textarea":xs(d,m);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var te=m.value;te!=null?yr(d,!!m.multiple,te,!1):K!==!!m.multiple&&(m.defaultValue!=null?yr(d,!!m.multiple,m.defaultValue,!0):yr(d,!!m.multiple,m.multiple?[]:"",!1))}d[_a]=m}catch(oe){it(n,n.return,oe)}}break;case 6:if(zn(i,n),sr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(oe){it(n,n.return,oe)}}break;case 3:if(zn(i,n),sr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(i.containerInfo)}catch(oe){it(n,n.return,oe)}break;case 4:zn(i,n),sr(n);break;case 13:zn(i,n),sr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(rd=Ke())),c&4&&lg(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(j=Mt)||Q,zn(i,n),Mt=j):zn(i,n),sr(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!Q&&(n.mode&1)!==0)for(re=n,Q=n.child;Q!==null;){for(Y=re=Q;re!==null;){switch(K=re,te=K.child,K.tag){case 0:case 11:case 14:case 15:Pa(4,K,K.return);break;case 1:go(K,K.return);var se=K.stateNode;if(typeof se.componentWillUnmount=="function"){c=K,a=K.return;try{i=c,se.props=i.memoizedProps,se.state=i.memoizedState,se.componentWillUnmount()}catch(oe){it(c,a,oe)}}break;case 5:go(K,K.return);break;case 22:if(K.memoizedState!==null){dg(Y);continue}}te!==null?(te.return=K,re=te):dg(Y)}Q=Q.sibling}e:for(Q=null,Y=n;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,j?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=Y.stateNode,P=Y.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=qo("display",v))}catch(oe){it(n,n.return,oe)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=j?"":Y.memoizedProps}catch(oe){it(n,n.return,oe)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:zn(i,n),sr(n),c&4&&lg(n);break;case 21:break;default:zn(i,n),sr(n)}}function sr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(sg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Br(d,""),c.flags&=-33);var m=og(n);ed(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=og(n);Zh(n,S,v);break;default:throw Error(t(161))}}catch(P){it(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function I0(n,i,a){re=n,cg(n)}function cg(n,i,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||gu;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Mt;S=gu;var j=Mt;if(gu=v,(Mt=P)&&!j)for(re=d;re!==null;)v=re,P=v.child,v.tag===22&&v.memoizedState!==null?fg(d):P!==null?(P.return=v,re=P):fg(d);for(;m!==null;)re=m,cg(m),m=m.sibling;re=d,gu=S,Mt=j}hg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,re=m):hg(n)}}function hg(n){for(;re!==null;){var i=re;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||yu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Un(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&dm(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}dm(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&Ln(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&Jh(i)}catch(K){it(i,i.return,K)}}if(i===n){re=null;break}if(a=i.sibling,a!==null){a.return=i.return,re=a;break}re=i.return}}function dg(n){for(;re!==null;){var i=re;if(i===n){re=null;break}var a=i.sibling;if(a!==null){a.return=i.return,re=a;break}re=i.return}}function fg(n){for(;re!==null;){var i=re;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{yu(4,i)}catch(P){it(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){it(i,d,P)}}var m=i.return;try{Jh(i)}catch(P){it(i,m,P)}break;case 5:var v=i.return;try{Jh(i)}catch(P){it(i,v,P)}}}catch(P){it(i,i.return,P)}if(i===n){re=null;break}var S=i.sibling;if(S!==null){S.return=i.return,re=S;break}re=i.return}}var S0=Math.ceil,_u=_e.ReactCurrentDispatcher,td=_e.ReactCurrentOwner,Sn=_e.ReactCurrentBatchConfig,Ue=0,St=null,ht=null,Nt=0,hn=0,yo=ei(0),_t=0,Na=null,ss=0,vu=0,nd=0,xa=null,Xt=null,rd=0,_o=1/0,Dr=null,wu=!1,id=null,oi=null,Eu=!1,ai=null,Tu=0,Da=0,sd=null,Iu=-1,Su=0;function qt(){return(Ue&6)!==0?Ke():Iu!==-1?Iu:Iu=Ke()}function li(n){return(n.mode&1)===0?1:(Ue&2)!==0&&Nt!==0?Nt&-Nt:a0.transition!==null?(Su===0&&(Su=Ki()),Su):(n=Le,n!==0||(n=window.event,n=n===void 0?16:oa(n.type)),n)}function Bn(n,i,a,c){if(50<Da)throw Da=0,sd=null,Error(t(185));Wr(n,a,c),((Ue&2)===0||n!==St)&&(n===St&&((Ue&2)===0&&(vu|=a),_t===4&&ui(n,Nt)),Jt(n,c),a===1&&Ue===0&&(i.mode&1)===0&&(_o=Ke()+500,Jl&&ni()))}function Jt(n,i){var a=n.callbackNode;wr(n,i);var c=Wi(n,n===St?Nt:0);if(c===0)a!==null&&ta(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ta(a),i===1)n.tag===0?o0(mg.bind(null,n)):em(mg.bind(null,n)),n0(function(){(Ue&6)===0&&ni()}),a=null;else{switch(Gr(c)){case 1:a=Hi;break;case 4:a=$r;break;case 16:a=yn;break;case 536870912:a=Sl;break;default:a=yn}a=Ig(a,pg.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function pg(n,i){if(Iu=-1,Su=0,(Ue&6)!==0)throw Error(t(327));var a=n.callbackNode;if(vo()&&n.callbackNode!==a)return null;var c=Wi(n,n===St?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Au(n,c);else{i=c;var d=Ue;Ue|=2;var m=yg();(St!==n||Nt!==i)&&(Dr=null,_o=Ke()+500,as(n,i));do try{R0();break}catch(S){gg(n,S)}while(!0);Ih(),_u.current=m,Ue=d,ht!==null?i=0:(St=null,Nt=0,i=_t)}if(i!==0){if(i===2&&(d=on(n),d!==0&&(c=d,i=od(n,d))),i===1)throw a=Na,as(n,0),ui(n,c),Jt(n,Ke()),a;if(i===6)ui(n,c);else{if(d=n.current.alternate,(c&30)===0&&!A0(d)&&(i=Au(n,c),i===2&&(m=on(n),m!==0&&(c=m,i=od(n,m))),i===1))throw a=Na,as(n,0),ui(n,c),Jt(n,Ke()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ls(n,Xt,Dr);break;case 3:if(ui(n,c),(c&130023424)===c&&(i=rd+500-Ke(),10<i)){if(Wi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=dh(ls.bind(null,n,Xt,Dr),i);break}ls(n,Xt,Dr);break;case 4:if(ui(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Bt(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*S0(c/1960))-c,10<c){n.timeoutHandle=dh(ls.bind(null,n,Xt,Dr),c);break}ls(n,Xt,Dr);break;case 5:ls(n,Xt,Dr);break;default:throw Error(t(329))}}}return Jt(n,Ke()),n.callbackNode===a?pg.bind(null,n):null}function od(n,i){var a=xa;return n.current.memoizedState.isDehydrated&&(as(n,i).flags|=256),n=Au(n,i),n!==2&&(i=Xt,Xt=a,i!==null&&ad(i)),n}function ad(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function A0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Mn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ui(n,i){for(i&=~nd,i&=~vu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Bt(i),c=1<<a;n[a]=-1,i&=~c}}function mg(n){if((Ue&6)!==0)throw Error(t(327));vo();var i=Wi(n,0);if((i&1)===0)return Jt(n,Ke()),null;var a=Au(n,i);if(n.tag!==0&&a===2){var c=on(n);c!==0&&(i=c,a=od(n,c))}if(a===1)throw a=Na,as(n,0),ui(n,i),Jt(n,Ke()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ls(n,Xt,Dr),Jt(n,Ke()),null}function ld(n,i){var a=Ue;Ue|=1;try{return n(i)}finally{Ue=a,Ue===0&&(_o=Ke()+500,Jl&&ni())}}function os(n){ai!==null&&ai.tag===0&&(Ue&6)===0&&vo();var i=Ue;Ue|=1;var a=Sn.transition,c=Le;try{if(Sn.transition=null,Le=1,n)return n()}finally{Le=c,Sn.transition=a,Ue=i,(Ue&6)===0&&ni()}}function ud(){hn=yo.current,Xe(yo)}function as(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,t0(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(_h(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Yl();break;case 3:po(),Xe(Gt),Xe(Vt),xh();break;case 5:Ph(c);break;case 4:po();break;case 13:Xe(tt);break;case 19:Xe(tt);break;case 10:Sh(c.type._context);break;case 22:case 23:ud()}a=a.return}if(St=n,ht=n=ci(n.current,null),Nt=hn=i,_t=0,Na=null,nd=vu=ss=0,Xt=xa=null,ns!==null){for(i=0;i<ns.length;i++)if(a=ns[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}ns=null}return n}function gg(n,i){do{var a=ht;try{if(Ih(),lu.current=du,uu){for(var c=nt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}uu=!1}if(is=0,It=yt=nt=null,Sa=!1,Aa=0,td.current=null,a===null||a.return===null){_t=1,Na=i,ht=null;break}e:{var m=n,v=a.return,S=a,P=i;if(i=Nt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,Q=S,Y=Q.tag;if((Q.mode&1)===0&&(Y===0||Y===11||Y===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var te=zm(v);if(te!==null){te.flags&=-257,Bm(te,v,S,m,i),te.mode&1&&jm(m,j,i),i=te,P=j;var se=i.updateQueue;if(se===null){var oe=new Set;oe.add(P),i.updateQueue=oe}else se.add(P);break e}else{if((i&1)===0){jm(m,j,i),cd();break e}P=Error(t(426))}}else if(et&&S.mode&1){var at=zm(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),Bm(at,v,S,m,i),Eh(mo(P,S));break e}}m=P=mo(P,S),_t!==4&&(_t=2),xa===null?xa=[m]:xa.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var F=Fm(m,P,i);hm(m,F);break e;case 1:S=P;var O=m.type,U=m.stateNode;if((m.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(oi===null||!oi.has(U)))){m.flags|=65536,i&=-i,m.lanes|=i;var J=Um(m,S,i);hm(m,J);break e}}m=m.return}while(m!==null)}vg(a)}catch(ce){i=ce,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function yg(){var n=_u.current;return _u.current=du,n===null?du:n}function cd(){(_t===0||_t===3||_t===2)&&(_t=4),St===null||(ss&268435455)===0&&(vu&268435455)===0||ui(St,Nt)}function Au(n,i){var a=Ue;Ue|=2;var c=yg();(St!==n||Nt!==i)&&(Dr=null,as(n,i));do try{C0();break}catch(d){gg(n,d)}while(!0);if(Ih(),Ue=a,_u.current=c,ht!==null)throw Error(t(261));return St=null,Nt=0,_t}function C0(){for(;ht!==null;)_g(ht)}function R0(){for(;ht!==null&&!Tl();)_g(ht)}function _g(n){var i=Tg(n.alternate,n,hn);n.memoizedProps=n.pendingProps,i===null?vg(n):ht=i,td.current=null}function vg(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=v0(a,i,hn),a!==null){ht=a;return}}else{if(a=w0(a,i),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,ht=null;return}}if(i=i.sibling,i!==null){ht=i;return}ht=i=n}while(i!==null);_t===0&&(_t=5)}function ls(n,i,a){var c=Le,d=Sn.transition;try{Sn.transition=null,Le=1,k0(n,i,a,c)}finally{Sn.transition=d,Le=c}return null}function k0(n,i,a,c){do vo();while(ai!==null);if((Ue&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(qe(n,m),n===St&&(ht=St=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Eu||(Eu=!0,Ig(yn,function(){return vo(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Sn.transition,Sn.transition=null;var v=Le;Le=1;var S=Ue;Ue|=4,td.current=null,T0(n,a),ug(a,n),GE(ch),Yr=!!uh,ch=uh=null,n.current=a,I0(a),Kc(),Ue=S,Le=v,Sn.transition=m}else n.current=a;if(Eu&&(Eu=!1,ai=n,Tu=d),m=n.pendingLanes,m===0&&(oi=null),Al(a.stateNode),Jt(n,Ke()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(wu)throw wu=!1,n=id,id=null,n;return(Tu&1)!==0&&n.tag!==0&&vo(),m=n.pendingLanes,(m&1)!==0?n===sd?Da++:(Da=0,sd=n):Da=0,ni(),null}function vo(){if(ai!==null){var n=Gr(Tu),i=Sn.transition,a=Le;try{if(Sn.transition=null,Le=16>n?16:n,ai===null)var c=!1;else{if(n=ai,ai=null,Tu=0,(Ue&6)!==0)throw Error(t(331));var d=Ue;for(Ue|=4,re=n.current;re!==null;){var m=re,v=m.child;if((re.flags&16)!==0){var S=m.deletions;if(S!==null){for(var P=0;P<S.length;P++){var j=S[P];for(re=j;re!==null;){var Q=re;switch(Q.tag){case 0:case 11:case 15:Pa(8,Q,m)}var Y=Q.child;if(Y!==null)Y.return=Q,re=Y;else for(;re!==null;){Q=re;var K=Q.sibling,te=Q.return;if(ig(Q),Q===j){re=null;break}if(K!==null){K.return=te,re=K;break}re=te}}}var se=m.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var at=oe.sibling;oe.sibling=null,oe=at}while(oe!==null)}}re=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,re=v;else e:for(;re!==null;){if(m=re,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Pa(9,m,m.return)}var F=m.sibling;if(F!==null){F.return=m.return,re=F;break e}re=m.return}}var O=n.current;for(re=O;re!==null;){v=re;var U=v.child;if((v.subtreeFlags&2064)!==0&&U!==null)U.return=v,re=U;else e:for(v=O;re!==null;){if(S=re,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:yu(9,S)}}catch(ce){it(S,S.return,ce)}if(S===v){re=null;break e}var J=S.sibling;if(J!==null){J.return=S.return,re=J;break e}re=S.return}}if(Ue=d,ni(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(qi,n)}catch{}c=!0}return c}finally{Le=a,Sn.transition=i}}return!1}function wg(n,i,a){i=mo(a,i),i=Fm(n,i,1),n=ii(n,i,1),i=qt(),n!==null&&(Wr(n,1,i),Jt(n,i))}function it(n,i,a){if(n.tag===3)wg(n,n,a);else for(;i!==null;){if(i.tag===3){wg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(oi===null||!oi.has(c))){n=mo(a,n),n=Um(i,n,1),i=ii(i,n,1),n=qt(),i!==null&&(Wr(i,1,n),Jt(i,n));break}}i=i.return}}function P0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=qt(),n.pingedLanes|=n.suspendedLanes&a,St===n&&(Nt&a)===a&&(_t===4||_t===3&&(Nt&130023424)===Nt&&500>Ke()-rd?as(n,0):nd|=a),Jt(n,i)}function Eg(n,i){i===0&&((n.mode&1)===0?i=1:(i=zs,zs<<=1,(zs&130023424)===0&&(zs=4194304)));var a=qt();n=Pr(n,i),n!==null&&(Wr(n,i,a),Jt(n,a))}function N0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Eg(n,a)}function x0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Eg(n,a)}var Tg;Tg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gt.current)Yt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yt=!1,_0(n,i,a);Yt=(n.flags&131072)!==0}else Yt=!1,et&&(i.flags&1048576)!==0&&tm(i,eu,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;mu(n,i),n=i.pendingProps;var d=oo(i,Vt.current);fo(i,a),d=Vh(null,i,c,n,d,a);var m=Lh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Qt(c)?(m=!0,Xl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Rh(i),d.updater=fu,i.stateNode=d,d._reactInternals=i,zh(i,c,n,a),i=qh(null,i,c,!0,m,a)):(i.tag=0,et&&m&&yh(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(mu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=O0(c),n=Un(c,n),d){case 0:i=Hh(null,i,c,n,a);break e;case 1:i=Gm(null,i,c,n,a);break e;case 11:i=$m(null,i,c,n,a);break e;case 14:i=Hm(null,i,c,Un(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Un(c,d),Hh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Un(c,d),Gm(n,i,c,d,a);case 3:e:{if(Qm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,cm(n,i),ou(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=mo(Error(t(423)),i),i=Ym(n,i,c,a,d);break e}else if(c!==d){d=mo(Error(t(424)),i),i=Ym(n,i,c,a,d);break e}else for(cn=Zr(i.stateNode.containerInfo.firstChild),un=i,et=!0,Fn=null,a=lm(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(uo(),c===d){i=xr(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return fm(i),n===null&&wh(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,hh(c,d)?v=null:m!==null&&hh(c,m)&&(i.flags|=32),Km(n,i),Ht(n,i,v,a),i.child;case 6:return n===null&&wh(i),null;case 13:return Xm(n,i,a);case 4:return kh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=co(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Un(c,d),$m(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,Ge(ru,c._currentValue),c._currentValue=v,m!==null)if(Mn(m.value,v)){if(m.children===d.children&&!Gt.current){i=xr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var S=m.dependencies;if(S!==null){v=m.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=Nr(-1,a&-a),P.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),j.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),Ah(m.return,a,i),S.lanes|=a;break}P=P.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Ah(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,fo(i,a),d=Tn(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=Un(c,i.pendingProps),d=Un(c.type,d),Hm(n,i,c,d,a);case 15:return qm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Un(c,d),mu(n,i),i.tag=1,Qt(c)?(n=!0,Xl(i)):n=!1,fo(i,a),bm(i,c,d),zh(i,c,d,a),qh(null,i,c,!0,n,a);case 19:return Zm(n,i,a);case 22:return Wm(n,i,a)}throw Error(t(156,i.tag))};function Ig(n,i){return Us(n,i)}function D0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(n,i,a,c){return new D0(n,i,a,c)}function hd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function O0(n){if(typeof n=="function")return hd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===ve)return 14}return 2}function ci(n,i){var a=n.alternate;return a===null?(a=An(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Cu(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")hd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case x:return us(a.children,d,m,i);case I:v=8,d|=8;break;case k:return n=An(12,a,i,d|2),n.elementType=k,n.lanes=m,n;case A:return n=An(13,a,i,d),n.elementType=A,n.lanes=m,n;case Ve:return n=An(19,a,i,d),n.elementType=Ve,n.lanes=m,n;case fe:return Ru(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:v=10;break e;case N:v=9;break e;case V:v=11;break e;case ve:v=14;break e;case he:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=An(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function us(n,i,a,c){return n=An(7,n,c,i),n.lanes=a,n}function Ru(n,i,a,c){return n=An(22,n,c,i),n.elementType=fe,n.lanes=a,n.stateNode={isHidden:!1},n}function dd(n,i,a){return n=An(6,n,null,i),n.lanes=a,n}function fd(n,i,a){return i=An(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function V0(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qr(0),this.expirationTimes=qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function pd(n,i,a,c,d,m,v,S,P){return n=new V0(n,i,a,S,P),i===1?(i=1,m===!0&&(i|=8)):i=0,m=An(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rh(m),n}function L0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Sg(n){if(!n)return ti;n=n._reactInternals;e:{if(Nn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Qt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return Jp(n,a,i)}return i}function Ag(n,i,a,c,d,m,v,S,P){return n=pd(a,c,!0,n,d,m,v,S,P),n.context=Sg(null),a=n.current,c=qt(),d=li(a),m=Nr(c,d),m.callback=i??null,ii(a,m,d),n.current.lanes=d,Wr(n,d,c),Jt(n,c),n}function ku(n,i,a,c){var d=i.current,m=qt(),v=li(d);return a=Sg(a),i.context===null?i.context=a:i.pendingContext=a,i=Nr(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ii(d,i,v),n!==null&&(Bn(n,d,v,m),su(n,d,v)),v}function Pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function md(n,i){Cg(n,i),(n=n.alternate)&&Cg(n,i)}function b0(){return null}var Rg=typeof reportError=="function"?reportError:function(n){console.error(n)};function gd(n){this._internalRoot=n}Nu.prototype.render=gd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ku(n,i,null,null)},Nu.prototype.unmount=gd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;os(function(){ku(null,n,null,null)}),i[Ar]=null}};function Nu(n){this._internalRoot=n}Nu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Nl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Jn.length&&i!==0&&i<Jn[a].priority;a++);Jn.splice(a,0,n),a===0&&Ol(n)}};function yd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function kg(){}function M0(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var j=Pu(v);m.call(j)}}var v=Ag(i,c,n,0,null,!1,!1,"",kg);return n._reactRootContainer=v,n[Ar]=v.current,ga(n.nodeType===8?n.parentNode:n),os(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var j=Pu(P);S.call(j)}}var P=pd(n,0,!1,null,null,!1,!1,"",kg);return n._reactRootContainer=P,n[Ar]=P.current,ga(n.nodeType===8?n.parentNode:n),os(function(){ku(i,P,a,c)}),P}function Du(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var S=d;d=function(){var P=Pu(v);S.call(P)}}ku(i,v,n,d)}else v=M0(a,i,n,d,c);return Pu(v)}kl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Hr(i.pendingLanes);a!==0&&(Kr(i,a|1),Jt(i,Ke()),(Ue&6)===0&&(_o=Ke()+500,ni()))}break;case 13:os(function(){var c=Pr(n,1);if(c!==null){var d=qt();Bn(c,n,1,d)}}),md(n,1)}},Bs=function(n){if(n.tag===13){var i=Pr(n,134217728);if(i!==null){var a=qt();Bn(i,n,134217728,a)}md(n,134217728)}},Pl=function(n){if(n.tag===13){var i=li(n),a=Pr(n,i);if(a!==null){var c=qt();Bn(a,n,i,c)}md(n,i)}},Nl=function(){return Le},xl=function(n,i){var a=Le;try{return Le=n,i()}finally{Le=a}},Os=function(n,i,a){switch(i){case"input":if(zo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ql(c);if(!d)throw Error(t(90));Rs(c),zo(c,d)}}}break;case"textarea":xs(n,a);break;case"select":i=a.value,i!=null&&yr(n,!!a.multiple,i,!1)}},ji=ld,Xo=os;var F0={usingClientEntryPoint:!1,Events:[va,io,Ql,Yn,Yo,ld]},Oa={findFiberByHostInstance:Ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U0={bundleType:Oa.bundleType,version:Oa.version,rendererPackageName:Oa.rendererPackageName,rendererConfig:Oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_e.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ea(n),n===null?null:n.stateNode},findFiberByHostInstance:Oa.findFiberByHostInstance||b0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ou.isDisabled&&Ou.supportsFiber)try{qi=Ou.inject(U0),sn=Ou}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0,Zt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yd(i))throw Error(t(200));return L0(n,i,null,a)},Zt.createRoot=function(n,i){if(!yd(n))throw Error(t(299));var a=!1,c="",d=Rg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=pd(n,1,!1,null,null,a,!1,c,d),n[Ar]=i.current,ga(n.nodeType===8?n.parentNode:n),new gd(i)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ea(i),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return os(n)},Zt.hydrate=function(n,i,a){if(!xu(i))throw Error(t(200));return Du(null,n,i,!0,a)},Zt.hydrateRoot=function(n,i,a){if(!yd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Rg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Ag(i,null,n,1,a??null,d,!1,m,v),n[Ar]=i.current,ga(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Nu(i)},Zt.render=function(n,i,a){if(!xu(i))throw Error(t(200));return Du(null,n,i,!1,a)},Zt.unmountComponentAtNode=function(n){if(!xu(n))throw Error(t(40));return n._reactRootContainer?(os(function(){Du(null,null,n,!1,function(){n._reactRootContainer=null,n[Ar]=null})}),!0):!1},Zt.unstable_batchedUpdates=ld,Zt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!xu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Du(n,i,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var bg;function G0(){if(bg)return wd.exports;bg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),wd.exports=K0(),wd.exports}var Mg;function Q0(){if(Mg)return Vu;Mg=1;var r=G0();return Vu.createRoot=r.createRoot,Vu.hydrateRoot=r.hydrateRoot,Vu}var Y0=Q0();const X0=R_(Y0),J0=()=>{};var Fg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Z0=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},P_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let C=(f&15)<<2|_>>6,b=_&63;g||(b=64,h||(C=64)),s.push(t[E],t[T],t[C],t[b])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(k_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Z0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||T==null)throw new eT;const C=l<<2|f>>4;if(s.push(C),_!==64){const b=f<<4&240|_>>2;if(s.push(b),T!==64){const B=_<<6&192|T;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class eT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tT=function(r){const e=k_(r);return P_.encodeByteArray(e,!0)},Ju=function(r){return tT(r).replace(/\./g,"")},N_=function(r){try{return P_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=()=>nT().__FIREBASE_DEFAULTS__,iT=()=>{if(typeof process>"u"||typeof Fg>"u")return;const r=Fg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},sT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&N_(r[1]);return e&&JSON.parse(e)},vc=()=>{try{return J0()||rT()||iT()||sT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},x_=r=>{var e,t;return(t=(e=vc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},D_=r=>{const e=x_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},O_=()=>{var r;return(r=vc())===null||r===void 0?void 0:r.config},V_=r=>{var e;return(e=vc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wf(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ju(JSON.stringify(t)),Ju(JSON.stringify(h)),""].join(".")}const za={};function lT(){const r={prod:[],emulator:[]};for(const e of Object.keys(za))za[e]?r.emulator.push(e):r.prod.push(e);return r}function uT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Ug=!1;function Ef(r,e){if(typeof window>"u"||typeof document>"u"||!Ts(window.location.host)||za[r]===e||za[r]||Ug)return;za[r]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",l=lT().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function f(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,b){C.setAttribute("width","24"),C.setAttribute("id",b),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Ug=!0,h()},C}function E(C,b){C.setAttribute("id",b),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function T(){const C=uT(s),b=t("text"),B=document.getElementById(b)||document.createElement("span"),G=t("learnmore"),$=document.getElementById(G)||document.createElement("a"),de=t("preprendIcon"),le=document.getElementById(de)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ue=C.element;f(ue),E($,G);const _e=_();g(le,de),ue.append(le,B,$,_e),document.body.appendChild(ue)}l?(B.innerText="Preview backend disconnected.",le.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(le.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function hT(){var r;const e=(r=vc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tf(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function fT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pT(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function mT(){return!hT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function If(){try{return typeof indexedDB=="object"}catch{return!1}}function Sf(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function L_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="FirebaseError";class Kn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=gT,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?yT(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Kn(o,f,s)}}function yT(r,e){return r.replace(_T,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const _T=/\{\$([^}]+)}/g;function vT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ti(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(jg(l)&&jg(h)){if(!Ti(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function jg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function La(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function ba(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function wT(r,e){const t=new ET(r,e);return t.subscribe.bind(t)}class ET{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");TT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Id),o.error===void 0&&(o.error=Id),o.complete===void 0&&(o.complete=Id);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Id(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=1e3,ST=2,AT=14400*1e3,CT=.5;function zg(r,e=IT,t=ST){const s=e*Math.pow(t,r),o=Math.round(CT*s*(Math.random()-.5)*2);return Math.min(AT,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(r){return r&&r._delegate?r._delegate:r}class Rn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new oT;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PT(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:kT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kT(r){return r===hs?void 0:r}function PT(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new RT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(xe||(xe={}));const xT={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},DT=xe.INFO,OT={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},VT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=OT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wc{constructor(e){this.name=e,this._logLevel=DT,this._logHandler=VT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const LT=(r,e)=>e.some(t=>r instanceof t);let Bg,$g;function bT(){return Bg||(Bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MT(){return $g||($g=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b_=new WeakMap,jd=new WeakMap,M_=new WeakMap,Sd=new WeakMap,Af=new WeakMap;function FT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(_i(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&b_.set(t,r)}).catch(()=>{}),Af.set(e,r),e}function UT(r){if(jd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});jd.set(r,e)}let zd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return jd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||M_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _i(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function jT(r){zd=r(zd)}function zT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Ad(this),e,...t);return M_.set(s,e.sort?e.sort():[e]),_i(s)}:MT().includes(r)?function(...e){return r.apply(Ad(this),e),_i(b_.get(this))}:function(...e){return _i(r.apply(Ad(this),e))}}function BT(r){return typeof r=="function"?zT(r):(r instanceof IDBTransaction&&UT(r),LT(r,bT())?new Proxy(r,zd):r)}function _i(r){if(r instanceof IDBRequest)return FT(r);if(Sd.has(r))return Sd.get(r);const e=BT(r);return e!==r&&(Sd.set(r,e),Af.set(e,r)),e}const Ad=r=>Af.get(r);function F_(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=_i(h);return s&&h.addEventListener("upgradeneeded",g=>{s(_i(h.result),g.oldVersion,g.newVersion,_i(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const $T=["get","getKey","getAll","getAllKeys","count"],HT=["put","add","delete","clear"],Cd=new Map;function Hg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Cd.get(e))return Cd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=HT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||$T.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return Cd.set(e,l),l}jT(r=>({...r,get:(e,t,s)=>Hg(e,t)||r.get(e,t,s),has:(e,t)=>!!Hg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(WT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function WT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bd="@firebase/app",qg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new wc("@firebase/app"),KT="@firebase/app-compat",GT="@firebase/analytics-compat",QT="@firebase/analytics",YT="@firebase/app-check-compat",XT="@firebase/app-check",JT="@firebase/auth",ZT="@firebase/auth-compat",eI="@firebase/database",tI="@firebase/data-connect",nI="@firebase/database-compat",rI="@firebase/functions",iI="@firebase/functions-compat",sI="@firebase/installations",oI="@firebase/installations-compat",aI="@firebase/messaging",lI="@firebase/messaging-compat",uI="@firebase/performance",cI="@firebase/performance-compat",hI="@firebase/remote-config",dI="@firebase/remote-config-compat",fI="@firebase/storage",pI="@firebase/storage-compat",mI="@firebase/firestore",gI="@firebase/ai",yI="@firebase/firestore-compat",_I="firebase",vI="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="[DEFAULT]",wI={[Bd]:"fire-core",[KT]:"fire-core-compat",[QT]:"fire-analytics",[GT]:"fire-analytics-compat",[XT]:"fire-app-check",[YT]:"fire-app-check-compat",[JT]:"fire-auth",[ZT]:"fire-auth-compat",[eI]:"fire-rtdb",[tI]:"fire-data-connect",[nI]:"fire-rtdb-compat",[rI]:"fire-fn",[iI]:"fire-fn-compat",[sI]:"fire-iid",[oI]:"fire-iid-compat",[aI]:"fire-fcm",[lI]:"fire-fcm-compat",[uI]:"fire-perf",[cI]:"fire-perf-compat",[hI]:"fire-rc",[dI]:"fire-rc-compat",[fI]:"fire-gcs",[pI]:"fire-gcs-compat",[mI]:"fire-fst",[yI]:"fire-fst-compat",[gI]:"fire-vertex","fire-js":"fire-js",[_I]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Map,EI=new Map,Hd=new Map;function Wg(r,e){try{r.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function qn(r){const e=r.name;if(Hd.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;Hd.set(e,r);for(const t of Zu.values())Wg(t,r);for(const t of EI.values())Wg(t,r);return!0}function xi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function dn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vi=new Is("app","Firebase",TI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=vI;function U_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:$d,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw vi.create("bad-app-name",{appName:String(o)});if(t||(t=O_()),!t)throw vi.create("no-options");const l=Zu.get(o);if(l){if(Ti(t,l.options)&&Ti(s,l.config))return l;throw vi.create("duplicate-app",{appName:o})}const h=new NT(o);for(const g of Hd.values())h.addComponent(g);const f=new II(t,s,h);return Zu.set(o,f),f}function Ec(r=$d){const e=Zu.get(r);if(!e&&r===$d&&O_())return U_();if(!e)throw vi.create("no-app",{appName:r});return e}function nn(r,e,t){var s;let o=(s=wI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(f.join(" "));return}qn(new Rn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="firebase-heartbeat-database",AI=1,Ga="firebase-heartbeat-store";let Rd=null;function j_(){return Rd||(Rd=F_(SI,AI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ga)}catch(t){console.warn(t)}}}}).catch(r=>{throw vi.create("idb-open",{originalErrorMessage:r.message})})),Rd}async function CI(r){try{const t=(await j_()).transaction(Ga),s=await t.objectStore(Ga).get(z_(r));return await t.done,s}catch(e){if(e instanceof Kn)Mr.warn(e.message);else{const t=vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(t.message)}}}async function Kg(r,e){try{const s=(await j_()).transaction(Ga,"readwrite");await s.objectStore(Ga).put(e,z_(r)),await s.done}catch(t){if(t instanceof Kn)Mr.warn(t.message);else{const s=vi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mr.warn(s.message)}}}function z_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=1024,kI=30;class PI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Gg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>kI){const h=DI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Mr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gg(),{heartbeatsToSend:s,unsentEntries:o}=NI(this._heartbeatsCache.heartbeats),l=Ju(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Mr.warn(t),""}}}function Gg(){return new Date().toISOString().substring(0,10)}function NI(r,e=RI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Qg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Qg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class xI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return If()?Sf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await CI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Qg(r){return Ju(JSON.stringify({version:2,heartbeats:r})).length}function DI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(r){qn(new Rn("platform-logger",e=>new qT(e),"PRIVATE")),qn(new Rn("heartbeat",e=>new PI(e),"PRIVATE")),nn(Bd,qg,r),nn(Bd,qg,"esm2017"),nn("fire-js","")}OI("");function Cf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function B_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VI=B_,$_=new Is("auth","Firebase",B_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new wc("@firebase/auth");function LI(r,...e){ec.logLevel<=xe.WARN&&ec.warn(`Auth (${Vo}): ${r}`,...e)}function zu(r,...e){ec.logLevel<=xe.ERROR&&ec.error(`Auth (${Vo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(r,...e){throw Rf(r,...e)}function ar(r,...e){return Rf(r,...e)}function H_(r,e,t){const s=Object.assign(Object.assign({},VI()),{[e]:t});return new Is("auth","Firebase",s).create(e,{appName:r.name})}function Lr(r){return H_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return $_.create(r,...e)}function we(r,e,...t){if(!r)throw Rf(e,...t)}function Or(r){const e="INTERNAL ASSERTION FAILED: "+r;throw zu(e),new Error(e)}function Fr(r,e){r||Or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function bI(){return Yg()==="http:"||Yg()==="https:"}function Yg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bI()||Tf()||"connection"in navigator)?navigator.onLine:!0}function FI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fr(t>e,"Short delay should be less than long delay!"),this.isMobile=cT()||fT()}get(){return MI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(r,e){Fr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zI=new ll(3e4,6e4);function Di(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Oi(r,e,t,s,o={}){return W_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=al(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return dT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Ts(r.emulatorConfig.host)&&(_.credentials="include"),q_.fetch()(await K_(r,r.config.apiHost,t,f),_)})}async function W_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},UI),e);try{const o=new $I(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Lu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Lu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Lu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw H_(r,E,_);Wn(r,E)}}catch(o){if(o instanceof Kn)throw o;Wn(r,"network-request-failed",{message:String(o)})}}async function ul(r,e,t,s,o={}){const l=await Oi(r,e,t,s,o);return"mfaPendingCredential"in l&&Wn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function K_(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?kf(r.config,o):`${r.config.apiScheme}://${o}`;return jI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function BI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $I{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ar(this.auth,"network-request-failed")),zI.get())})}}function Lu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=ar(r,e,s);return o.customData._tokenResponse=t,o}function Xg(r){return r!==void 0&&r.enterprise!==void 0}class HI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return BI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qI(r,e){return Oi(r,"GET","/v2/recaptchaConfig",Di(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(r,e){return Oi(r,"POST","/v1/accounts:delete",e)}async function tc(r,e){return Oi(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KI(r,e=!1){const t=st(r),s=await t.getIdToken(e),o=Pf(s);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Ba(kd(o.auth_time)),issuedAtTime:Ba(kd(o.iat)),expirationTime:Ba(kd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function kd(r){return Number(r)*1e3}function Pf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return zu("JWT malformed, contained fewer than 3 sections"),null;try{const o=N_(t);return o?JSON.parse(o):(zu("Failed to decode base64 JWT payload"),null)}catch(o){return zu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Jg(r){const e=Pf(r);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Kn&&GI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function GI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ba(this.lastLoginAt),this.creationTime=Ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Qa(r,tc(t,{idToken:s}));we(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?G_(l.providerUserInfo):[],f=XI(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),E=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Wd(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(r,T)}async function YI(r){const e=st(r);await nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function G_(r){return r.map(e=>{var{providerId:t}=e,s=Cf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(r,e){const t=await W_(r,{},async()=>{const s=al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await K_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:s};return r.emulatorConfig&&Ts(r.emulatorConfig.host)&&(g.credentials="include"),q_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ZI(r,e){return Oi(r,"POST","/v2/accounts:revokeToken",Di(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=Jg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await JI(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Ao;return s&&(we(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(we(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ao,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(r,e){we(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Cf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Wd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Qa(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return KI(this,e)}reload(){return YI(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await nc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await Qa(this,WI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,g,_,E;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,b=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,B=(h=t.photoURL)!==null&&h!==void 0?h:void 0,G=(f=t.tenantId)!==null&&f!==void 0?f:void 0,$=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,de=(_=t.createdAt)!==null&&_!==void 0?_:void 0,le=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ue,emailVerified:_e,isAnonymous:Oe,providerData:Ie,stsTokenManager:x}=t;we(ue&&x,e,"internal-error");const I=Ao.fromJSON(this.name,x);we(typeof ue=="string",e,"internal-error"),di(T,e.name),di(C,e.name),we(typeof _e=="boolean",e,"internal-error"),we(typeof Oe=="boolean",e,"internal-error"),di(b,e.name),di(B,e.name),di(G,e.name),di($,e.name),di(de,e.name),di(le,e.name);const k=new $n({uid:ue,auth:e,email:C,emailVerified:_e,displayName:T,isAnonymous:Oe,photoURL:B,phoneNumber:b,tenantId:G,stsTokenManager:I,createdAt:de,lastLoginAt:le});return Ie&&Array.isArray(Ie)&&(k.providerData=Ie.map(R=>Object.assign({},R))),$&&(k._redirectEventId=$),k}static async _fromIdTokenResponse(e,t,s=!1){const o=new Ao;o.updateFromServerResponse(t);const l=new $n({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await nc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?G_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Ao;f.updateFromIdToken(s);const g=new $n({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Wd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Map;function Vr(r){Fr(r instanceof Function,"Expected a class definition");let e=Zg.get(r);return e?(Fr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Zg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Q_.type="NONE";const ey=Q_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(r,e,t){return`firebase:${r}:${e}:${t}`}class Co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Bu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Bu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await tc(this.auth,{idToken:e}).catch(()=>{});return t?$n._fromGetAccountInfoResponse(this.auth,t,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Co(Vr(ey),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Vr(ey);const h=Bu(s,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const E=await _._get(h);if(E){let T;if(typeof E=="string"){const C=await tc(e,{idToken:E}).catch(()=>{});if(!C)break;T=await $n._fromGetAccountInfoResponse(e,C,E)}else T=$n._fromJSON(e,E);_!==l&&(f=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Co(l,e,s):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new Co(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Y_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tv(e))return"Blackberry";if(nv(e))return"Webos";if(X_(e))return"Safari";if((e.includes("chrome/")||J_(e))&&!e.includes("edge/"))return"Chrome";if(ev(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Y_(r=zt()){return/firefox\//i.test(r)}function X_(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function J_(r=zt()){return/crios\//i.test(r)}function Z_(r=zt()){return/iemobile/i.test(r)}function ev(r=zt()){return/android/i.test(r)}function tv(r=zt()){return/blackberry/i.test(r)}function nv(r=zt()){return/webos/i.test(r)}function Nf(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function eS(r=zt()){var e;return Nf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tS(){return pT()&&document.documentMode===10}function rv(r=zt()){return Nf(r)||ev(r)||nv(r)||tv(r)||/windows phone/i.test(r)||Z_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(r,e=[]){let t;switch(r){case"Browser":t=ty(zt());break;case"Worker":t=`${ty(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(r,e={}){return Oi(r,"GET","/v2/passwordPolicy",Di(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=6;class sS{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:iS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ny(this),this.idTokenSubscription=new ny(this),this.beforeStateQueue=new nS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await Co.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await tc(this,{idToken:e}),s=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(dn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(Lr(this));const t=e?st(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rS(this),t=new sS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ZI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Co.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&LI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ss(r){return st(r)}class ny{constructor(e){this.auth=e,this.observer=null,this.addObserver=wT(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aS(r){Tc=r}function sv(r){return Tc.loadJS(r)}function lS(){return Tc.recaptchaEnterpriseScript}function uS(){return Tc.gapiScript}function cS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class hS{constructor(){this.enterprise=new dS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class dS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const fS="recaptcha-enterprise",ov="NO_RECAPTCHA";class pS{constructor(e){this.type=fS,this.auth=Ss(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{qI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new HI(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Xg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(ov)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&Xg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=lS();g.length!==0&&(g+=f),sv(g).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function ry(r,e,t,s=!1,o=!1){const l=new pS(r);let h;if(o)h=ov;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Kd(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await ry(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await ry(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(r,e){const t=xi(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ti(l,e??{}))return o;Wn(o,"already-initialized")}return t.initialize({options:e})}function gS(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Vr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function yS(r,e,t){const s=Ss(r);we(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=av(e),{host:h,port:f}=_S(e),g=f===null?"":`:${f}`,_={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){we(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),we(Ti(_,s.config.emulator)&&Ti(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Ts(h)?(wf(`${l}//${h}${g}`),Ef("Auth",!0)):vS()}function av(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function _S(r){const e=av(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:iy(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:iy(h)}}}function iy(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function vS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,t){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function wS(r,e){return Oi(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(r,e){return ul(r,"POST","/v1/accounts:signInWithPassword",Di(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(r,e){return ul(r,"POST","/v1/accounts:signInWithEmailLink",Di(r,e))}async function IS(r,e){return ul(r,"POST","/v1/accounts:signInWithEmailLink",Di(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends xf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ya(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ya(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kd(e,t,"signInWithPassword",ES);case"emailLink":return TS(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kd(e,s,"signUpPassword",wS);case"emailLink":return IS(e,{idToken:t,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(r,e){return ul(r,"POST","/v1/accounts:signInWithIdp",Di(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="http://localhost";class gs extends xf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Cf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new gs(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Ro(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ro(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ro(e,t)}buildRequest(){const e={requestUri:SS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=al(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CS(r){const e=La(ba(r)).link,t=e?La(ba(e)).deep_link_id:null,s=La(ba(r)).deep_link_id;return(s?La(ba(s)).link:null)||s||t||e||r}class Df{constructor(e){var t,s,o,l,h,f;const g=La(ba(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,T=AS((o=g.mode)!==null&&o!==void 0?o:null);we(_&&E&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=E,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=CS(e);try{return new Df(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.providerId=Lo.PROVIDER_ID}static credential(e,t){return Ya._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Df.parseLink(t);return we(s,"argument-error"),Ya._fromEmailAndCode(e,s.code,s.tenantId)}}Lo.PROVIDER_ID="password";Lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends lv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends cl{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.GOOGLE_SIGN_IN_METHOD="google.com";pi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends cl{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.GITHUB_SIGN_IN_METHOD="github.com";mi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends cl{constructor(){super("twitter.com")}static credential(e,t){return gs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return gi.credential(t,s)}catch{return null}}}gi.TWITTER_SIGN_IN_METHOD="twitter.com";gi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(r,e){return ul(r,"POST","/v1/accounts:signUp",Di(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await $n._fromIdTokenResponse(e,s,o),h=sy(s);return new ys({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=sy(s);return new ys({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function sy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends Kn{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,rc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new rc(e,t,s,o)}}function uv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?rc._fromErrorAndOperation(r,l,e,s):l})}async function kS(r,e,t=!1){const s=await Qa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ys._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(r,e,t=!1){const{auth:s}=r;if(dn(s.app))return Promise.reject(Lr(s));const o="reauthenticate";try{const l=await Qa(r,uv(s,o,e,r),t);we(l.idToken,s,"internal-error");const h=Pf(l.idToken);we(h,s,"internal-error");const{sub:f}=h;return we(r.uid===f,s,"user-mismatch"),ys._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Wn(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(r,e,t=!1){if(dn(r.app))return Promise.reject(Lr(r));const s="signIn",o=await uv(r,s,e),l=await ys._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function NS(r,e){return cv(Ss(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(r){const e=Ss(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xS(r,e,t){if(dn(r.app))return Promise.reject(Lr(r));const s=Ss(r),h=await Kd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RS).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&hv(r),g}),f=await ys._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function DS(r,e,t){return dn(r.app)?Promise.reject(Lr(r)):NS(st(r),Lo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&hv(r),s})}function OS(r,e,t,s){return st(r).onIdTokenChanged(e,t,s)}function VS(r,e,t){return st(r).beforeAuthStateChanged(e,t)}function LS(r,e,t,s){return st(r).onAuthStateChanged(e,t,s)}function dv(r){return st(r).signOut()}const ic="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ic,"1"),this.storage.removeItem(ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=1e3,MS=10;class pv extends fv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);tS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,MS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},bS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pv.type="LOCAL";const FS=pv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv extends fv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mv.type="SESSION";const gv=mv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ic(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await US(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=Of("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const C=T;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(C.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(){return window}function zS(r){lr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function BS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $S(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function HS(){return yv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="firebaseLocalStorageDb",qS=1,sc="firebaseLocalStorage",vv="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Sc(r,e){return r.transaction([sc],e?"readwrite":"readonly").objectStore(sc)}function WS(){const r=indexedDB.deleteDatabase(_v);return new hl(r).toPromise()}function Gd(){const r=indexedDB.open(_v,qS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(sc,{keyPath:vv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(sc)?e(s):(s.close(),await WS(),e(await Gd()))})})}async function oy(r,e,t){const s=Sc(r,!0).put({[vv]:e,value:t});return new hl(s).toPromise()}async function KS(r,e){const t=Sc(r,!1).get(e),s=await new hl(t).toPromise();return s===void 0?null:s.value}function ay(r,e){const t=Sc(r,!0).delete(e);return new hl(t).toPromise()}const GS=800,QS=3;class wv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>QS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ic._getInstance(HS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await BS(),!this.activeServiceWorker)return;this.sender=new jS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$S()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gd();return await oy(e,ic,"1"),await ay(e,ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>oy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>KS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ay(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Sc(o,!1).getAll();return new hl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wv.type="LOCAL";const YS=wv;new ll(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(r,e){return e?Vr(e):(we(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends xf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ro(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ro(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function JS(r){return cv(r.auth,new Vf(r),r.bypassAuthState)}function ZS(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),PS(t,new Vf(r),r.bypassAuthState)}async function e1(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),kS(t,new Vf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JS;case"linkViaPopup":case"linkViaRedirect":return e1;case"reauthViaPopup":case"reauthViaRedirect":return ZS;default:Wn(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=new ll(2e3,1e4);class So extends Ev{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,So.currentPopupAction&&So.currentPopupAction.cancel(),So.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=Of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,So.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,t1.get())};e()}}So.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="pendingRedirect",$u=new Map;class r1 extends Ev{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=$u.get(this.auth._key());if(!e){try{const s=await i1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}$u.set(this.auth._key(),e)}return this.bypassAuthState||$u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function i1(r,e){const t=a1(e),s=o1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function s1(r,e){$u.set(r._key(),e)}function o1(r){return Vr(r._redirectPersistence)}function a1(r){return Bu(n1,r.config.apiKey,r.name)}async function l1(r,e,t=!1){if(dn(r.app))return Promise.reject(Lr(r));const s=Ss(r),o=XS(s,e),h=await new r1(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=600*1e3;class c1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!h1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Tv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ar(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=u1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ly(e))}saveEventToCache(e){this.cachedEventUids.add(ly(e)),this.lastProcessedEventTime=Date.now()}}function ly(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Tv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function h1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(r,e={}){return Oi(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,p1=/^https?/;async function m1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await d1(r);for(const t of e)try{if(g1(t))return}catch{}Wn(r,"unauthorized-domain")}function g1(r){const e=qd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!p1.test(t))return!1;if(f1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=new ll(3e4,6e4);function uy(){const r=lr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function _1(r){return new Promise((e,t)=>{var s,o,l;function h(){uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uy(),t(ar(r,"network-request-failed"))},timeout:y1.get()})}if(!((o=(s=lr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=lr().gapi)===null||l===void 0)&&l.load)h();else{const f=cS("iframefcb");return lr()[f]=()=>{gapi.load?h():t(ar(r,"network-request-failed"))},sv(`${uS()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Hu=null,e})}let Hu=null;function v1(r){return Hu=Hu||_1(r),Hu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=new ll(5e3,15e3),E1="__/auth/iframe",T1="emulator/auth/iframe",I1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A1(r){const e=r.config;we(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?kf(e,T1):`https://${r.config.authDomain}/${E1}`,s={apiKey:e.apiKey,appName:r.name,v:Vo},o=S1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${al(s).slice(1)}`}async function C1(r){const e=await v1(r),t=lr().gapi;return we(t,r,"internal-error"),e.open({where:document.body,url:A1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=ar(r,"network-request-failed"),f=lr().setTimeout(()=>{l(h)},w1.get());function g(){lr().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k1=500,P1=600,N1="_blank",x1="http://localhost";class cy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D1(r,e,t,s=k1,o=P1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},R1),{width:s.toString(),height:o.toString(),top:l,left:h}),_=zt().toLowerCase();t&&(f=J_(_)?N1:t),Y_(_)&&(e=e||x1,g.scrollbars="yes");const E=Object.entries(g).reduce((C,[b,B])=>`${C}${b}=${B},`,"");if(eS(_)&&f!=="_self")return O1(e||"",f),new cy(null);const T=window.open(e||"",f,E);we(T,r,"popup-blocked");try{T.focus()}catch{}return new cy(T)}function O1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="__/auth/handler",L1="emulator/auth/handler",b1=encodeURIComponent("fac");async function hy(r,e,t,s,o,l){we(r.config.authDomain,r,"auth-domain-config-required"),we(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Vo,eventId:o};if(e instanceof lv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",vT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof cl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),_=g?`#${b1}=${encodeURIComponent(g)}`:"";return`${M1(r)}?${al(f).slice(1)}${_}`}function M1({config:r}){return r.emulator?kf(r,L1):`https://${r.authDomain}/${V1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="webStorageSupport";class F1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gv,this._completeRedirectFn=l1,this._overrideRedirectResult=s1}async _openPopup(e,t,s,o){var l;Fr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await hy(e,t,s,qd(),o);return D1(e,h,Of())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await hy(e,t,s,qd(),o);return zS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Fr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await C1(e),s=new c1(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pd,{type:Pd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Pd];h!==void 0&&t(!!h),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=m1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rv()||X_()||Nf()}}const U1=F1;var dy="@firebase/auth",fy="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function B1(r){qn(new Rn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iv(r)},_=new oS(s,o,l,g);return gS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),qn(new Rn("auth-internal",e=>{const t=Ss(e.getProvider("auth").getImmediate());return(s=>new j1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(dy,fy,z1(r)),nn(dy,fy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=300,H1=V_("authIdTokenMaxAge")||$1;let py=null;const q1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>H1)return;const o=t==null?void 0:t.token;py!==o&&(py=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function W1(r=Ec()){const e=xi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=mS(r,{popupRedirectResolver:U1,persistence:[YS,FS,gv]}),s=V_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=q1(l.toString());VS(t,h,()=>h(t.currentUser)),OS(t,f=>h(f))}}const o=x_("auth");return o&&yS(t,`http://${o}`),t}function K1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}aS({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=ar("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",K1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});B1("Browser");var G1="firebase",Q1="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(G1,Q1,"app");var my=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wi,Iv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,I){function k(){}k.prototype=I.prototype,x.D=I.prototype,x.prototype=new k,x.prototype.constructor=x,x.C=function(R,N,V){for(var A=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)A[Ve-2]=arguments[Ve];return I.prototype[N].apply(R,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,I,k){k||(k=0);var R=Array(16);if(typeof I=="string")for(var N=0;16>N;++N)R[N]=I.charCodeAt(k++)|I.charCodeAt(k++)<<8|I.charCodeAt(k++)<<16|I.charCodeAt(k++)<<24;else for(N=0;16>N;++N)R[N]=I[k++]|I[k++]<<8|I[k++]<<16|I[k++]<<24;I=x.g[0],k=x.g[1],N=x.g[2];var V=x.g[3],A=I+(V^k&(N^V))+R[0]+3614090360&4294967295;I=k+(A<<7&4294967295|A>>>25),A=V+(N^I&(k^N))+R[1]+3905402710&4294967295,V=I+(A<<12&4294967295|A>>>20),A=N+(k^V&(I^k))+R[2]+606105819&4294967295,N=V+(A<<17&4294967295|A>>>15),A=k+(I^N&(V^I))+R[3]+3250441966&4294967295,k=N+(A<<22&4294967295|A>>>10),A=I+(V^k&(N^V))+R[4]+4118548399&4294967295,I=k+(A<<7&4294967295|A>>>25),A=V+(N^I&(k^N))+R[5]+1200080426&4294967295,V=I+(A<<12&4294967295|A>>>20),A=N+(k^V&(I^k))+R[6]+2821735955&4294967295,N=V+(A<<17&4294967295|A>>>15),A=k+(I^N&(V^I))+R[7]+4249261313&4294967295,k=N+(A<<22&4294967295|A>>>10),A=I+(V^k&(N^V))+R[8]+1770035416&4294967295,I=k+(A<<7&4294967295|A>>>25),A=V+(N^I&(k^N))+R[9]+2336552879&4294967295,V=I+(A<<12&4294967295|A>>>20),A=N+(k^V&(I^k))+R[10]+4294925233&4294967295,N=V+(A<<17&4294967295|A>>>15),A=k+(I^N&(V^I))+R[11]+2304563134&4294967295,k=N+(A<<22&4294967295|A>>>10),A=I+(V^k&(N^V))+R[12]+1804603682&4294967295,I=k+(A<<7&4294967295|A>>>25),A=V+(N^I&(k^N))+R[13]+4254626195&4294967295,V=I+(A<<12&4294967295|A>>>20),A=N+(k^V&(I^k))+R[14]+2792965006&4294967295,N=V+(A<<17&4294967295|A>>>15),A=k+(I^N&(V^I))+R[15]+1236535329&4294967295,k=N+(A<<22&4294967295|A>>>10),A=I+(N^V&(k^N))+R[1]+4129170786&4294967295,I=k+(A<<5&4294967295|A>>>27),A=V+(k^N&(I^k))+R[6]+3225465664&4294967295,V=I+(A<<9&4294967295|A>>>23),A=N+(I^k&(V^I))+R[11]+643717713&4294967295,N=V+(A<<14&4294967295|A>>>18),A=k+(V^I&(N^V))+R[0]+3921069994&4294967295,k=N+(A<<20&4294967295|A>>>12),A=I+(N^V&(k^N))+R[5]+3593408605&4294967295,I=k+(A<<5&4294967295|A>>>27),A=V+(k^N&(I^k))+R[10]+38016083&4294967295,V=I+(A<<9&4294967295|A>>>23),A=N+(I^k&(V^I))+R[15]+3634488961&4294967295,N=V+(A<<14&4294967295|A>>>18),A=k+(V^I&(N^V))+R[4]+3889429448&4294967295,k=N+(A<<20&4294967295|A>>>12),A=I+(N^V&(k^N))+R[9]+568446438&4294967295,I=k+(A<<5&4294967295|A>>>27),A=V+(k^N&(I^k))+R[14]+3275163606&4294967295,V=I+(A<<9&4294967295|A>>>23),A=N+(I^k&(V^I))+R[3]+4107603335&4294967295,N=V+(A<<14&4294967295|A>>>18),A=k+(V^I&(N^V))+R[8]+1163531501&4294967295,k=N+(A<<20&4294967295|A>>>12),A=I+(N^V&(k^N))+R[13]+2850285829&4294967295,I=k+(A<<5&4294967295|A>>>27),A=V+(k^N&(I^k))+R[2]+4243563512&4294967295,V=I+(A<<9&4294967295|A>>>23),A=N+(I^k&(V^I))+R[7]+1735328473&4294967295,N=V+(A<<14&4294967295|A>>>18),A=k+(V^I&(N^V))+R[12]+2368359562&4294967295,k=N+(A<<20&4294967295|A>>>12),A=I+(k^N^V)+R[5]+4294588738&4294967295,I=k+(A<<4&4294967295|A>>>28),A=V+(I^k^N)+R[8]+2272392833&4294967295,V=I+(A<<11&4294967295|A>>>21),A=N+(V^I^k)+R[11]+1839030562&4294967295,N=V+(A<<16&4294967295|A>>>16),A=k+(N^V^I)+R[14]+4259657740&4294967295,k=N+(A<<23&4294967295|A>>>9),A=I+(k^N^V)+R[1]+2763975236&4294967295,I=k+(A<<4&4294967295|A>>>28),A=V+(I^k^N)+R[4]+1272893353&4294967295,V=I+(A<<11&4294967295|A>>>21),A=N+(V^I^k)+R[7]+4139469664&4294967295,N=V+(A<<16&4294967295|A>>>16),A=k+(N^V^I)+R[10]+3200236656&4294967295,k=N+(A<<23&4294967295|A>>>9),A=I+(k^N^V)+R[13]+681279174&4294967295,I=k+(A<<4&4294967295|A>>>28),A=V+(I^k^N)+R[0]+3936430074&4294967295,V=I+(A<<11&4294967295|A>>>21),A=N+(V^I^k)+R[3]+3572445317&4294967295,N=V+(A<<16&4294967295|A>>>16),A=k+(N^V^I)+R[6]+76029189&4294967295,k=N+(A<<23&4294967295|A>>>9),A=I+(k^N^V)+R[9]+3654602809&4294967295,I=k+(A<<4&4294967295|A>>>28),A=V+(I^k^N)+R[12]+3873151461&4294967295,V=I+(A<<11&4294967295|A>>>21),A=N+(V^I^k)+R[15]+530742520&4294967295,N=V+(A<<16&4294967295|A>>>16),A=k+(N^V^I)+R[2]+3299628645&4294967295,k=N+(A<<23&4294967295|A>>>9),A=I+(N^(k|~V))+R[0]+4096336452&4294967295,I=k+(A<<6&4294967295|A>>>26),A=V+(k^(I|~N))+R[7]+1126891415&4294967295,V=I+(A<<10&4294967295|A>>>22),A=N+(I^(V|~k))+R[14]+2878612391&4294967295,N=V+(A<<15&4294967295|A>>>17),A=k+(V^(N|~I))+R[5]+4237533241&4294967295,k=N+(A<<21&4294967295|A>>>11),A=I+(N^(k|~V))+R[12]+1700485571&4294967295,I=k+(A<<6&4294967295|A>>>26),A=V+(k^(I|~N))+R[3]+2399980690&4294967295,V=I+(A<<10&4294967295|A>>>22),A=N+(I^(V|~k))+R[10]+4293915773&4294967295,N=V+(A<<15&4294967295|A>>>17),A=k+(V^(N|~I))+R[1]+2240044497&4294967295,k=N+(A<<21&4294967295|A>>>11),A=I+(N^(k|~V))+R[8]+1873313359&4294967295,I=k+(A<<6&4294967295|A>>>26),A=V+(k^(I|~N))+R[15]+4264355552&4294967295,V=I+(A<<10&4294967295|A>>>22),A=N+(I^(V|~k))+R[6]+2734768916&4294967295,N=V+(A<<15&4294967295|A>>>17),A=k+(V^(N|~I))+R[13]+1309151649&4294967295,k=N+(A<<21&4294967295|A>>>11),A=I+(N^(k|~V))+R[4]+4149444226&4294967295,I=k+(A<<6&4294967295|A>>>26),A=V+(k^(I|~N))+R[11]+3174756917&4294967295,V=I+(A<<10&4294967295|A>>>22),A=N+(I^(V|~k))+R[2]+718787259&4294967295,N=V+(A<<15&4294967295|A>>>17),A=k+(V^(N|~I))+R[9]+3951481745&4294967295,x.g[0]=x.g[0]+I&4294967295,x.g[1]=x.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+N&4294967295,x.g[3]=x.g[3]+V&4294967295}s.prototype.u=function(x,I){I===void 0&&(I=x.length);for(var k=I-this.blockSize,R=this.B,N=this.h,V=0;V<I;){if(N==0)for(;V<=k;)o(this,x,V),V+=this.blockSize;if(typeof x=="string"){for(;V<I;)if(R[N++]=x.charCodeAt(V++),N==this.blockSize){o(this,R),N=0;break}}else for(;V<I;)if(R[N++]=x[V++],N==this.blockSize){o(this,R),N=0;break}}this.h=N,this.o+=I},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var I=1;I<x.length-8;++I)x[I]=0;var k=8*this.o;for(I=x.length-8;I<x.length;++I)x[I]=k&255,k/=256;for(this.u(x),x=Array(16),I=k=0;4>I;++I)for(var R=0;32>R;R+=8)x[k++]=this.g[I]>>>R&255;return x};function l(x,I){var k=f;return Object.prototype.hasOwnProperty.call(k,x)?k[x]:k[x]=I(x)}function h(x,I){this.h=I;for(var k=[],R=!0,N=x.length-1;0<=N;N--){var V=x[N]|0;R&&V==I||(k[N]=V,R=!1)}this.g=k}var f={};function g(x){return-128<=x&&128>x?l(x,function(I){return new h([I|0],0>I?-1:0)}):new h([x|0],0>x?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return $(_(-x));for(var I=[],k=1,R=0;x>=k;R++)I[R]=x/k|0,k*=4294967296;return new h(I,0)}function E(x,I){if(x.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x.charAt(0)=="-")return $(E(x.substring(1),I));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=_(Math.pow(I,8)),R=T,N=0;N<x.length;N+=8){var V=Math.min(8,x.length-N),A=parseInt(x.substring(N,N+V),I);8>V?(V=_(Math.pow(I,V)),R=R.j(V).add(_(A))):(R=R.j(k),R=R.add(_(A)))}return R}var T=g(0),C=g(1),b=g(16777216);r=h.prototype,r.m=function(){if(G(this))return-$(this).m();for(var x=0,I=1,k=0;k<this.g.length;k++){var R=this.i(k);x+=(0<=R?R:4294967296+R)*I,I*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(B(this))return"0";if(G(this))return"-"+$(this).toString(x);for(var I=_(Math.pow(x,6)),k=this,R="";;){var N=_e(k,I).g;k=de(k,N.j(I));var V=((0<k.g.length?k.g[0]:k.h)>>>0).toString(x);if(k=N,B(k))return V+R;for(;6>V.length;)V="0"+V;R=V+R}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function B(x){if(x.h!=0)return!1;for(var I=0;I<x.g.length;I++)if(x.g[I]!=0)return!1;return!0}function G(x){return x.h==-1}r.l=function(x){return x=de(this,x),G(x)?-1:B(x)?0:1};function $(x){for(var I=x.g.length,k=[],R=0;R<I;R++)k[R]=~x.g[R];return new h(k,~x.h).add(C)}r.abs=function(){return G(this)?$(this):this},r.add=function(x){for(var I=Math.max(this.g.length,x.g.length),k=[],R=0,N=0;N<=I;N++){var V=R+(this.i(N)&65535)+(x.i(N)&65535),A=(V>>>16)+(this.i(N)>>>16)+(x.i(N)>>>16);R=A>>>16,V&=65535,A&=65535,k[N]=A<<16|V}return new h(k,k[k.length-1]&-2147483648?-1:0)};function de(x,I){return x.add($(I))}r.j=function(x){if(B(this)||B(x))return T;if(G(this))return G(x)?$(this).j($(x)):$($(this).j(x));if(G(x))return $(this.j($(x)));if(0>this.l(b)&&0>x.l(b))return _(this.m()*x.m());for(var I=this.g.length+x.g.length,k=[],R=0;R<2*I;R++)k[R]=0;for(R=0;R<this.g.length;R++)for(var N=0;N<x.g.length;N++){var V=this.i(R)>>>16,A=this.i(R)&65535,Ve=x.i(N)>>>16,ve=x.i(N)&65535;k[2*R+2*N]+=A*ve,le(k,2*R+2*N),k[2*R+2*N+1]+=V*ve,le(k,2*R+2*N+1),k[2*R+2*N+1]+=A*Ve,le(k,2*R+2*N+1),k[2*R+2*N+2]+=V*Ve,le(k,2*R+2*N+2)}for(R=0;R<I;R++)k[R]=k[2*R+1]<<16|k[2*R];for(R=I;R<2*I;R++)k[R]=0;return new h(k,0)};function le(x,I){for(;(x[I]&65535)!=x[I];)x[I+1]+=x[I]>>>16,x[I]&=65535,I++}function ue(x,I){this.g=x,this.h=I}function _e(x,I){if(B(I))throw Error("division by zero");if(B(x))return new ue(T,T);if(G(x))return I=_e($(x),I),new ue($(I.g),$(I.h));if(G(I))return I=_e(x,$(I)),new ue($(I.g),I.h);if(30<x.g.length){if(G(x)||G(I))throw Error("slowDivide_ only works with positive integers.");for(var k=C,R=I;0>=R.l(x);)k=Oe(k),R=Oe(R);var N=Ie(k,1),V=Ie(R,1);for(R=Ie(R,2),k=Ie(k,2);!B(R);){var A=V.add(R);0>=A.l(x)&&(N=N.add(k),V=A),R=Ie(R,1),k=Ie(k,1)}return I=de(x,N.j(I)),new ue(N,I)}for(N=T;0<=x.l(I);){for(k=Math.max(1,Math.floor(x.m()/I.m())),R=Math.ceil(Math.log(k)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),V=_(k),A=V.j(I);G(A)||0<A.l(x);)k-=R,V=_(k),A=V.j(I);B(V)&&(V=C),N=N.add(V),x=de(x,A)}return new ue(N,x)}r.A=function(x){return _e(this,x).h},r.and=function(x){for(var I=Math.max(this.g.length,x.g.length),k=[],R=0;R<I;R++)k[R]=this.i(R)&x.i(R);return new h(k,this.h&x.h)},r.or=function(x){for(var I=Math.max(this.g.length,x.g.length),k=[],R=0;R<I;R++)k[R]=this.i(R)|x.i(R);return new h(k,this.h|x.h)},r.xor=function(x){for(var I=Math.max(this.g.length,x.g.length),k=[],R=0;R<I;R++)k[R]=this.i(R)^x.i(R);return new h(k,this.h^x.h)};function Oe(x){for(var I=x.g.length+1,k=[],R=0;R<I;R++)k[R]=x.i(R)<<1|x.i(R-1)>>>31;return new h(k,x.h)}function Ie(x,I){var k=I>>5;I%=32;for(var R=x.g.length-k,N=[],V=0;V<R;V++)N[V]=0<I?x.i(V+k)>>>I|x.i(V+k+1)<<32-I:x.i(V+k);return new h(N,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Iv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,wi=h}).apply(typeof my<"u"?my:typeof self<"u"?self:typeof window<"u"?window:{});var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sv,Ma,Av,qu,Qd,Cv,Rv,kv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof bu=="object"&&bu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var M=u[w];if(!(M in y))break e;y=y[M]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,w=!1,M={next:function(){if(!w&&y<u.length){var z=y++;return{value:p(z,u[z]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function E(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function C(u,p,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,C.apply(null,arguments)}function b(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function B(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(w,M,z){for(var Z=Array(arguments.length-2),He=2;He<arguments.length;He++)Z[He-2]=arguments[He];return p.prototype[M].apply(w,Z)}}function G(u){const p=u.length;if(0<p){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function $(u,p){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const M=u.length||0,z=w.length||0;u.length=M+z;for(let Z=0;Z<z;Z++)u[M+Z]=w[Z]}else u.push(w)}}class de{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function le(u){return/^[\s\xa0]*$/.test(u)}function ue(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function _e(u){return _e[" "](u),u}_e[" "]=function(){};var Oe=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function Ie(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function x(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function I(u){const p={};for(const y in u)p[y]=u[y];return p}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,p){let y,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(y in w)u[y]=w[y];for(let z=0;z<k.length;z++)y=k[z],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function N(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function V(u){f.setTimeout(()=>{throw u},0)}function A(){var u=ie;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class Ve{constructor(){this.h=this.g=null}add(p,y){const w=ve.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var ve=new de(()=>new he,u=>u.reset());class he{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,X=!1,ie=new Ve,ee=()=>{const u=f.Promise.resolve(void 0);fe=()=>{u.then(L)}};var L=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(y){V(y)}var p=ve;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}X=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Ce=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function Pe(u,p){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Oe){e:{try{_e(p.nodeName);var M=!0;break e}catch{}M=!1}M||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:be[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Pe.aa.h.call(this)}}B(Pe,pe);var be={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Be=0;function We(u,p,y,w,M){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=M,this.key=++Be,this.da=this.fa=!1}function Et(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function mr(u){this.src=u,this.g={},this.h=0}mr.prototype.add=function(u,p,y,w,M){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var Z=zr(u,p,w,M);return-1<Z?(p=u[Z],y||(p.fa=!1)):(p=new We(p,this.src,z,!!w,M),p.fa=y,u.push(p)),p};function Rs(u,p){var y=p.type;if(y in u.g){var w=u.g[y],M=Array.prototype.indexOf.call(w,p,void 0),z;(z=0<=M)&&Array.prototype.splice.call(w,M,1),z&&(Et(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function zr(u,p,y,w){for(var M=0;M<u.length;++M){var z=u[M];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==w)return M}return-1}var bi="closure_lm_"+(1e6*Math.random()|0),ks={};function jo(u,p,y,w,M){if(Array.isArray(p)){for(var z=0;z<p.length;z++)jo(u,p[z],y,w,M);return null}return y=$o(y),u&&u[ze]?u.K(p,y,_(w)?!!w.capture:!1,M):zo(u,p,y,!1,w,M)}function zo(u,p,y,w,M,z){if(!p)throw Error("Invalid event type");var Z=_(M)?!!M.capture:!!M,He=Ns(u);if(He||(u[bi]=He=new mr(u)),y=He.add(p,y,w,Z,z),y.proxy)return y;if(w=vl(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)Ce||(M=Z),M===void 0&&(M=!1),u.addEventListener(p.toString(),w,M);else if(u.attachEvent)u.attachEvent(yr(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function vl(){function u(y){return p.call(u.src,u.listener,y)}const p=Bo;return u}function Ps(u,p,y,w,M){if(Array.isArray(p))for(var z=0;z<p.length;z++)Ps(u,p[z],y,w,M);else w=_(w)?!!w.capture:!!w,y=$o(y),u&&u[ze]?(u=u.i,p=String(p).toString(),p in u.g&&(z=u.g[p],y=zr(z,y,w,M),-1<y&&(Et(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete u.g[p],u.h--)))):u&&(u=Ns(u))&&(p=u.g[p.toString()],u=-1,p&&(u=zr(p,y,w,M)),(y=-1<u?p[u]:null)&&gr(y))}function gr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[ze])Rs(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(yr(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=Ns(p))?(Rs(y,u),y.h==0&&(y.src=null,p[bi]=null)):Et(u)}}}function yr(u){return u in ks?ks[u]:ks[u]="on"+u}function Bo(u,p){if(u.da)u=!0;else{p=new Pe(p,this);var y=u.listener,w=u.ha||u.src;u.fa&&gr(u),u=y.call(w,p)}return u}function Ns(u){return u=u[bi],u instanceof mr?u:null}var xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function $o(u){return typeof u=="function"?u:(u[xs]||(u[xs]=function(p){return u.handleEvent(p)}),u[xs])}function pt(){H.call(this),this.i=new mr(this),this.M=this,this.F=null}B(pt,H),pt.prototype[ze]=!0,pt.prototype.removeEventListener=function(u,p,y,w){Ps(this,u,p,y,w)};function mt(u,p){var y,w=u.F;if(w)for(y=[];w;w=w.F)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new pe(p,u);else if(p instanceof pe)p.target=p.target||u;else{var M=p;p=new pe(w,u),R(p,M)}if(M=!0,y)for(var z=y.length-1;0<=z;z--){var Z=p.g=y[z];M=_r(Z,w,!0,p)&&M}if(Z=p.g=u,M=_r(Z,w,!0,p)&&M,M=_r(Z,w,!1,p)&&M,y)for(z=0;z<y.length;z++)Z=p.g=y[z],M=_r(Z,w,!1,p)&&M}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],w=0;w<y.length;w++)Et(y[w]);delete u.g[p],u.h--}}this.F=null},pt.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},pt.prototype.L=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function _r(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,z=0;z<p.length;++z){var Z=p[z];if(Z&&!Z.da&&Z.capture==y){var He=Z.listener,gt=Z.ha||Z.src;Z.fa&&Rs(u.i,Z),M=He.call(gt,w)!==!1&&M}}return M&&!w.defaultPrevented}function Ho(u,p,y){if(typeof u=="function")y&&(u=C(u,y));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Br(u){u.g=Ho(()=>{u.g=null,u.i&&(u.i=!1,Br(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Mi extends H{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Br(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(u){H.call(this),this.h=u,this.g={}}B(Fi,H);var qo=[];function Wo(u){Ie(u.g,function(p,y){this.g.hasOwnProperty(y)&&gr(p)},u),u.g={}}Fi.prototype.N=function(){Fi.aa.N.call(this),Wo(this)},Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ko=f.JSON.stringify,Go=f.JSON.parse,Qo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ui(){}Ui.prototype.h=null;function Ds(u){return u.h||(u.h=u.i())}function Os(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qn(){pe.call(this,"d")}B(Qn,pe);function Vs(){pe.call(this,"c")}B(Vs,pe);var Yn={},Yo=null;function ji(){return Yo=Yo||new pt}Yn.La="serverreachability";function Xo(u){pe.call(this,Yn.La,u)}B(Xo,pe);function vr(u){const p=ji();mt(p,new Xo(p))}Yn.STAT_EVENT="statevent";function Jo(u,p){pe.call(this,Yn.STAT_EVENT,u),this.stat=p}B(Jo,pe);function ot(u){const p=ji();mt(p,new Jo(p,u))}Yn.Ma="timingevent";function Ls(u,p){pe.call(this,Yn.Ma,u),this.size=p}B(Ls,pe);function kn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function zi(){this.g=!0}zi.prototype.xa=function(){this.g=!1};function Bi(u,p,y,w,M,z){u.info(function(){if(u.g)if(z)for(var Z="",He=z.split("&"),gt=0;gt<He.length;gt++){var Me=He[gt].split("=");if(1<Me.length){var Tt=Me[0];Me=Me[1];var ct=Tt.split("_");Z=2<=ct.length&&ct[1]=="type"?Z+(Tt+"="+Me+"&"):Z+(Tt+"=redacted&")}}else Z=null;else Z=z;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+p+`
`+y+`
`+Z})}function bs(u,p,y,w,M,z,Z){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+p+`
`+y+`
`+z+" "+Z})}function Pn(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Wc(u,y)+(w?" "+w:"")})}function Zo(u,p){u.info(function(){return"TIMEOUT: "+p})}zi.prototype.info=function(){};function Wc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var w=y[u];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var z=M[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Z=1;Z<M.length;Z++)M[Z]=""}}}}return Ko(y)}catch{return p}}var Ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function $i(){}B($i,Ui),$i.prototype.g=function(){return new XMLHttpRequest},$i.prototype.i=function(){return{}},Nn=new $i;function xn(u,p,y,w){this.j=u,this.i=p,this.l=y,this.R=w||1,this.U=new Fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new El}function El(){this.i=null,this.g="",this.h=!1}var ea={},Fs={};function Us(u,p,y){u.L=1,u.v=Kr(on(p)),u.m=y,u.P=!0,ta(u,null)}function ta(u,p){u.F=Date.now(),Ke(u),u.A=on(u.v);var y=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Qr(y.i,"t",w),u.C=0,y=u.j.J,u.h=new El,u.g=Ul(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Mi(C(u.Y,u,u.g),u.O)),p=u.U,y=u.g,w=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(qo[0]=M.toString()),M=qo);for(var z=0;z<M.length;z++){var Z=jo(y,M[z],w||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),vr(),Bi(u.i,u.u,u.A,u.l,u.R,u.m)}xn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Kt(u)==3?p.j():this.Y(u)},xn.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Kt(this.g);var p=this.g.Ba();const vn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||aa(this.g)))){this.J||ct!=4||p==7||(p==8||0>=vn?vr(3):vr(2)),Hi(this);var y=this.g.Z();this.X=y;t:if(Tl(this)){var w=aa(this.g);u="";var M=w.length,z=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),$r(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(z&&p==M-1)});w.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,bs(this.i,this.u,this.A,this.l,this.R,ct,y),this.o){if(this.T&&!this.K){t:{if(this.g){var He,gt=this.g;if((He=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!le(He)){var Me=He;break t}}Me=null}if(y=Me)Pn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,na(this,y);else{this.o=!1,this.s=3,ot(12),yn(this),$r(this);break e}}if(this.P){y=!0;let ln;for(;!this.J&&this.C<Z.length;)if(ln=Kc(this,Z),ln==Fs){ct==4&&(this.s=4,ot(14),y=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==ea){this.s=4,ot(15),Pn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else Pn(this.i,this.l,ln,null),na(this,ln);if(Tl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||Z.length!=0||this.h.h||(this.s=1,ot(16),y=!1),this.o=this.o&&y,!y)Pn(this.i,this.l,Z,"[Invalid Chunked Response]"),yn(this),$r(this);else if(0<Z.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),ua(Tt),Tt.M=!0,ot(11))}}else Pn(this.i,this.l,Z,null),na(this,Z);ct==4&&yn(this),this.o&&!this.J&&(ct==4?Ys(this.j,this):(this.o=!1,Ke(this)))}else qs(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),yn(this),$r(this)}}}catch{}finally{}};function Tl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Kc(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?Fs:(y=Number(p.substring(y,w)),isNaN(y)?ea:(w+=1,w+y>p.length?Fs:(p=p.slice(w,w+y),u.C=w+y,p)))}xn.prototype.cancel=function(){this.J=!0,yn(this)};function Ke(u){u.S=Date.now()+u.I,Il(u,u.I)}function Il(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=kn(C(u.ba,u),p)}function Hi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Zo(this.i,this.A),this.L!=2&&(vr(),ot(17)),yn(this),this.s=2,$r(this)):Il(this,this.S-u)};function $r(u){u.j.G==0||u.J||Ys(u.j,u)}function yn(u){Hi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Wo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function na(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Bt(y.h,u))){if(!u.K&&Bt(y.h,u)&&y.G==3){try{var w=y.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Qs(y),bn(y);else break e;Gs(y),ot(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=kn(C(y.Za,y),6e3));if(1>=Al(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Sr(y,11)}else if((u.K||y.g==u)&&Qs(y),!le(p))for(M=y.Da.g.parse(p),p=0;p<M.length;p++){let Me=M[p];if(y.T=Me[0],Me=Me[1],y.G==2)if(Me[0]=="c"){y.K=Me[1],y.ia=Me[2];const Tt=Me[3];Tt!=null&&(y.la=Tt,y.j.info("VER="+y.la));const ct=Me[4];ct!=null&&(y.Aa=ct,y.j.info("SVER="+y.Aa));const vn=Me[5];vn!=null&&typeof vn=="number"&&0<vn&&(w=1.5*vn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const ln=u.g;if(ln){const Xi=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xi){var z=w.h;z.g||Xi.indexOf("spdy")==-1&&Xi.indexOf("quic")==-1&&Xi.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(ra(z,z.h),z.h=null))}if(w.D){const Js=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Js&&(w.ya=Js,qe(w.I,w.D,Js))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var Z=u;if(w.qa=Fl(w,w.J?w.ia:null,w.W),Z.K){Cl(w.h,Z);var He=Z,gt=w.L;gt&&(He.I=gt),He.B&&(Hi(He),Ke(He)),w.g=Z}else Yi(w);0<y.i.length&&er(y)}else Me[0]!="stop"&&Me[0]!="close"||Sr(y,7);else y.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Sr(y,7):kt(y):Me[0]!="noop"&&y.l&&y.l.ta(Me),y.v=0)}}vr(4)}catch{}}var Sl=class{constructor(u,p){this.g=u,this.map=p}};function qi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Al(u){return u.h?1:u.g?u.g.size:0}function Bt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function ra(u,p){u.g?u.g.add(p):u.h=p}function Cl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}qi.prototype.cancel=function(){if(this.i=Rl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Rl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return G(u.i)}function js(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,w=0;w<y;w++)p.push(u[w]);return p}p=[],y=0;for(w in u)p[y++]=u[w];return p}function zs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const w in u)p[y++]=w;return p}}}function Hr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=zs(u),w=js(u),M=w.length,z=0;z<M;z++)p.call(void 0,w[z],y&&y[z],u)}var Wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var w=u[y].indexOf("="),M=null;if(0<=w){var z=u[y].substring(0,w);M=u[y].substring(w+1)}else z=u[y];p(z,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function wr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof wr){this.h=u.h,Ki(this,u.j),this.o=u.o,this.g=u.g,qr(this,u.s),this.l=u.l;var p=u.i,y=new Xn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Wr(this,y),this.m=u.m}else u&&(p=String(u).match(Wi))?(this.h=!1,Ki(this,p[1]||"",!0),this.o=Le(p[2]||""),this.g=Le(p[3]||"",!0),qr(this,p[4]),this.l=Le(p[5]||"",!0),Wr(this,p[6]||"",!0),this.m=Le(p[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}wr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Gr(p,Bs,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Gr(p,Bs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Gr(y,y.charAt(0)=="/"?Nl:Pl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Gr(y,ia)),u.join("")};function on(u){return new wr(u)}function Ki(u,p,y){u.j=y?Le(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function qr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Wr(u,p,y){p instanceof Xn?(u.i=p,Jn(u.i,u.h)):(y||(p=Gr(p,xl)),u.i=new Xn(p,u.h))}function qe(u,p,y){u.i.set(p,y)}function Kr(u){return qe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Le(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Gr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,kl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function kl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Bs=/[#\/\?@]/g,Pl=/[#\?:]/g,Nl=/[#\?]/g,xl=/[#\?@]/g,ia=/#/g;function Xn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&Gc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Xn.prototype,r.add=function(u,p){Rt(this),this.i=null,u=_n(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Dn(u,p){Rt(u),p=_n(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function On(u,p){return Rt(u),p=_n(u,p),u.g.has(p)}r.forEach=function(u,p){Rt(this),this.g.forEach(function(y,w){y.forEach(function(M){u.call(p,M,w,this)},this)},this)},r.na=function(){Rt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let w=0;w<p.length;w++){const M=u[w];for(let z=0;z<M.length;z++)y.push(p[w])}return y},r.V=function(u){Rt(this);let p=[];if(typeof u=="string")On(this,u)&&(p=p.concat(this.g.get(_n(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return Rt(this),this.i=null,u=_n(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Qr(u,p,y){Dn(u,p),0<y.length&&(u.i=null,u.g.set(_n(u,p),G(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var w=p[y];const z=encodeURIComponent(String(w)),Z=this.V(w);for(w=0;w<Z.length;w++){var M=z;Z[w]!==""&&(M+="="+encodeURIComponent(String(Z[w]))),u.push(M)}}return this.i=u.join("&")};function _n(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Jn(u,p){p&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(y,w){var M=w.toLowerCase();w!=M&&(Dn(this,w),Qr(this,M,y))},u)),u.j=p}function Qc(u,p){const y=new zi;if(f.Image){const w=new Image;w.onload=b(Wt,y,"TestLoadImage: loaded",!0,p,w),w.onerror=b(Wt,y,"TestLoadImage: error",!1,p,w),w.onabort=b(Wt,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=b(Wt,y,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Dl(u,p){const y=new zi,w=new AbortController,M=setTimeout(()=>{w.abort(),Wt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(z=>{clearTimeout(M),z.ok?Wt(y,"TestPingServer: ok",!0,p):Wt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Wt(y,"TestPingServer: error",!1,p)})}function Wt(u,p,y,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(y)}catch{}}function Yc(){this.g=new Qo}function Ol(u,p,y){const w=y||"";try{Hr(u,function(M,z){let Z=M;_(M)&&(Z=Ko(M)),p.push(w+z+"="+encodeURIComponent(Z))})}catch(M){throw p.push(w+"type="+encodeURIComponent("_badmap")),M}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}B(Er,Ui),Er.prototype.g=function(){return new Gi(this.l,this.j)},Er.prototype.i=(function(u){return function(){return u}})({});function Gi(u,p){pt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(Gi,pt),r=Gi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Ln(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Vn(this):Ln(this),this.readyState==3&&Vl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Vn(this))},r.Qa=function(u){this.g&&(this.response=u,Vn(this))},r.ga=function(){this.g&&Vn(this)};function Vn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ln(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Tr(u){let p="";return Ie(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function Yr(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=Tr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):qe(u,p,y))}function Ze(u){pt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Ze,pt);var Xc=/^https?$/i,sa=["POST","PUT"];r=Ze.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?Ds(this.o):Ds(Nn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(z){Qi(this,z);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)y.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())y.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),M=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(sa,p,void 0))||w||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of y)this.g.setRequestHeader(z,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hs(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){Qi(this,z)}};function Qi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,$s(u),an(u)}function $s(u){u.A||(u.A=!0,mt(u,"complete"),mt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,mt(this,"complete"),mt(this,"abort"),an(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Ze.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?oa(this):this.bb())},r.bb=function(){oa(this)};function oa(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)Ho(u.Ea,0,u);else if(mt(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=Z===0){var M=String(u.D).match(Wi)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),w=!Xc.test(M?M.toLowerCase():"")}y=w}if(y)mt(u,"complete"),mt(u,"success");else{u.m=6;try{var z=2<Kt(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",$s(u)}}finally{an(u)}}}}function an(u,p){if(u.g){Hs(u);const y=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||mt(u,"ready");try{y.onreadystatechange=w}catch{}}}function Hs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Go(p)}};function aa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function qs(u){const p={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(le(u[w]))continue;var y=N(u[w]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[M]||[];p[M]=z,z.push(y)}x(p,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function la(u){this.Aa=0,this.i=[],this.j=new zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,u),this.cb=Zn("retryDelaySeedMs",1e4,u),this.Wa=Zn("forwardChannelMaxRetries",2,u),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new qi(u&&u.concurrentRequestLimit),this.Da=new Yc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=la.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,w){ot(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=Fl(this,null,this.W),er(this)};function kt(u){if(Ws(u),u.G==3){var p=u.U++,y=on(u.I);if(qe(y,"SID",u.K),qe(y,"RID",p),qe(y,"TYPE","terminate"),Ir(u,y),p=new xn(u,u.j,p),p.L=2,p.v=Kr(on(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Ul(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Ke(p)}Ml(u)}function bn(u){u.g&&(ua(u),u.g.cancel(),u.g=null)}function Ws(u){bn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Qs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function er(u){if(!sn(u.h)&&!u.s){u.s=!0;var p=u.Ga;fe||ee(),X||(fe(),X=!0),ie.add(p,u),u.B=0}}function Jc(u,p){return Al(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=kn(C(u.Ga,u,p),bl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new xn(this,this.j,u);let z=this.o;if(this.S&&(z?(z=I(z),R(z,this.S)):z=this.S),this.m!==null||this.O||(M.H=z,z=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Xr(this,M,p),y=on(this.I),qe(y,"RID",u),qe(y,"CVER",22),this.D&&qe(y,"X-HTTP-Session-Id",this.D),Ir(this,y),z&&(this.O?p="headers="+encodeURIComponent(String(Tr(z)))+"&"+p:this.m&&Yr(y,this.m,z)),ra(this.h,M),this.Ua&&qe(y,"TYPE","init"),this.P?(qe(y,"$req",p),qe(y,"SID","null"),M.T=!0,Us(M,y,null)):Us(M,y,p),this.G=2}}else this.G==3&&(u?Ks(this,u):this.i.length==0||sn(this.h)||Ks(this))};function Ks(u,p){var y;p?y=p.l:y=u.U++;const w=on(u.I);qe(w,"SID",u.K),qe(w,"RID",y),qe(w,"AID",u.T),Ir(u,w),u.m&&u.o&&Yr(w,u.m,u.o),y=new xn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Xr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ra(u.h,y),Us(y,w,p)}function Ir(u,p){u.H&&Ie(u.H,function(y,w){qe(p,w,y)}),u.l&&Hr({},function(y,w){qe(p,w,y)})}function Xr(u,p,y){y=Math.min(u.i.length,y);var w=u.l?C(u.l.Na,u.l,u):null;e:{var M=u.i;let z=-1;for(;;){const Z=["count="+y];z==-1?0<y?(z=M[0].g,Z.push("ofs="+z)):z=0:Z.push("ofs="+z);let He=!0;for(let gt=0;gt<y;gt++){let Me=M[gt].g;const Tt=M[gt].map;if(Me-=z,0>Me)z=Math.max(0,M[gt].g-100),He=!1;else try{Ol(Tt,Z,"req"+Me+"_")}catch{w&&w(Tt)}}if(He){w=Z.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,w}function Yi(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;fe||ee(),X||(fe(),X=!0),ie.add(p,u),u.v=0}}function Gs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=kn(C(u.Fa,u),bl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Ll(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=kn(C(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),bn(this),Ll(this))};function ua(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Ll(u){u.g=new xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=on(u.qa);qe(p,"RID","rpc"),qe(p,"SID",u.K),qe(p,"AID",u.T),qe(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&qe(p,"TO",u.ja),qe(p,"TYPE","xmlhttp"),Ir(u,p),u.m&&u.o&&Yr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Kr(on(p)),y.m=null,y.P=!0,ta(y,u)}r.Za=function(){this.C!=null&&(this.C=null,bn(this),Gs(this),ot(19))};function Qs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Ys(u,p){var y=null;if(u.g==p){Qs(u),ua(u),u.g=null;var w=2}else if(Bt(u.h,p))y=p.D,Cl(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;w=ji(),mt(w,new Ls(w,y)),er(u)}else Yi(u);else if(M=p.s,M==3||M==0&&0<p.X||!(w==1&&Jc(u,p)||w==2&&Gs(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),M){case 1:Sr(u,5);break;case 4:Sr(u,10);break;case 3:Sr(u,6);break;default:Sr(u,2)}}}function bl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Sr(u,p){if(u.j.info("Error code "+p),p==2){var y=C(u.fb,u),w=u.Xa;const M=!w;w=new wr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ki(w,"https"),Kr(w),M?Qc(w.toString(),y):Dl(w.toString(),y)}else ot(2);u.G=0,u.l&&u.l.sa(p),Ml(u),Ws(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Ml(u){if(u.G=0,u.ka=[],u.l){const p=Rl(u.h);(p.length!=0||u.i.length!=0)&&($(u.ka,p),$(u.ka,u.i),u.h.i.length=0,G(u.i),u.i.length=0),u.l.ra()}}function Fl(u,p,y){var w=y instanceof wr?on(y):new wr(y);if(w.g!="")p&&(w.g=p+"."+w.g),qr(w,w.s);else{var M=f.location;w=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var z=new wr(null);w&&Ki(z,w),p&&(z.g=p),M&&qr(z,M),y&&(z.l=y),w=z}return y=u.D,p=u.ya,y&&p&&qe(w,y,p),qe(w,"VER",u.la),Ir(u,w),w}function Ul(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ze(new Er({eb:y})):new Ze(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ca(){}r=ca.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Xs(){}Xs.prototype.g=function(u,p){return new $t(u,p)};function $t(u,p){pt.call(this),this.g=new la(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!le(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!le(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new tr(this)}B($t,pt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){kt(this.g)},$t.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Ko(u),u=y);p.i.push(new Sl(p.Ya++,u)),p.G==3&&er(p)},$t.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,$t.aa.N.call(this)};function jl(u){Qn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}B(jl,Qn);function zl(){Vs.call(this),this.status=1}B(zl,Vs);function tr(u){this.g=u}B(tr,ca),tr.prototype.ua=function(){mt(this.g,"a")},tr.prototype.ta=function(u){mt(this.g,new jl(u))},tr.prototype.sa=function(u){mt(this.g,new zl)},tr.prototype.ra=function(){mt(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,kv=function(){return new Xs},Rv=function(){return ji()},Cv=Yn,Qd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,qu=Ms,wl.COMPLETE="complete",Av=wl,Os.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Ma=Os,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,Sv=Ze}).apply(typeof bu<"u"?bu:typeof self<"u"?self:typeof window<"u"?window:{});const gy="@firebase/firestore",yy="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new wc("@firebase/firestore");function wo(){return _s.logLevel}function ne(r,...e){if(_s.logLevel<=xe.DEBUG){const t=e.map(Lf);_s.debug(`Firestore (${bo}): ${r}`,...t)}}function Ur(r,...e){if(_s.logLevel<=xe.ERROR){const t=e.map(Lf);_s.error(`Firestore (${bo}): ${r}`,...t)}}function Ii(r,...e){if(_s.logLevel<=xe.WARN){const t=e.map(Lf);_s.warn(`Firestore (${bo}): ${r}`,...t)}}function Lf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Pv(r,s,t)}function Pv(r,e,t){let s=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ur(s),new Error(s)}function $e(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||Pv(e,o,s)}function Ae(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Y1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class X1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class J1{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new br;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new br,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new br)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($e(typeof s.accessToken=="string",31837,{l:s}),new Nv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class Z1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eA{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Z1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class _y{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0,3512);const s=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new _y(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new _y(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=nA(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function ke(r,e){return r<e?-1:r>e?1:0}function Yd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return ke(s,o);{const l=xv(),h=rA(l.encode(vy(r,t)),l.encode(vy(e,t)));return h!==0?h:ke(s,o)}}t+=s>65535?2:1}return ke(r.length,e.length)}function vy(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function rA(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return ke(r[t],e[t]);return ke(r.length,e.length)}function Po(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="__name__";class or{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ee(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ee(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=or.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return ke(e.length,t.length)}static compareSegments(e,t){const s=or.isNumericId(e),o=or.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):Yd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wi.fromString(e.substring(4,e.length-2))}}class Je extends or{construct(e,t,s){return new Je(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Je(t)}static emptyPath(){return new Je([])}}const iA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends or{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return iA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wy}static keyField(){return new Dt([wy])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ae(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ae(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new ae(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Je.fromString(e))}static fromName(e){return new me(Je.fromString(e).popFirst(5))}static empty(){return new me(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Je(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(r,e,t){if(!t)throw new ae(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function sA(r,e,t,s){if(e===!0&&s===!0)throw new ae(W.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ey(r){if(!me.isDocumentKey(r))throw new ae(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ty(r){if(me.isDocumentKey(r))throw new ae(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ov(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Mf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ee(12329,{type:typeof r})}function pn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ae(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Mf(r);throw new ae(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(r,e){const t={typeString:r};return e&&(t.value=e),t}function dl(r,e){if(!Ov(r))throw new ae(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ae(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=-62135596800,Sy=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Sy);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Iy)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sy}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(dl(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Iy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ft("string",Qe._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new Qe(0,0))}static max(){return new Se(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=-1;function oA(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new Si(o,me.empty(),e)}function aA(r){return new Si(r.readTime,r.key,Xa)}class Si{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Si(Se.min(),me.empty(),Xa)}static max(){return new Si(Se.max(),me.empty(),Xa)}}function lA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(r.documentKey,e.documentKey),t!==0?t:ke(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==uA)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,s)=>{t(e)}))}static reject(e){return new q(((t,s)=>{s(e)}))}static waitFor(e){return new q(((t,s)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next((o=>o?q.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new q(((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++f,f===l&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new q(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function hA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Fo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ac.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=-1;function Cc(r){return r==null}function oc(r){return r===0&&1/r==-1/0}function dA(r){return typeof r=="number"&&Number.isInteger(r)&&!oc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="";function fA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ay(e)),e=pA(r.get(t),e);return Ay(e)}function pA(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Vv:t+="";break;default:t+=l}}return t}function Ay(r){return r+Vv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Vi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Lv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mu(this.root,e,this.comparator,!0)}}class Mu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??xt.RED,this.left=o??xt.EMPTY,this.right=l??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new xt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ry(this.data.getIterator())}getIteratorFrom(e){return new Ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class Ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new fn([])}unionWith(e){let t=new wt(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Po(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new bv("Invalid base64 string: "+l):l}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const mA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(r){if($e(!!r,39018),typeof r=="string"){let e=0;const t=mA.exec(r);if($e(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ci(r){return typeof r=="string"?Ot.fromBase64String(r):Ot.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="server_timestamp",Fv="__type__",Uv="__previous_value__",jv="__local_write_time__";function Uf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fv])===null||t===void 0?void 0:t.stringValue)===Mv}function Rc(r){const e=r.mapValue.fields[Uv];return Uf(e)?Rc(e):e}function Ja(r){const e=Ai(r.mapValue.fields[jv].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,t,s,o,l,h,f,g,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E}}const ac="(default)";class Za{constructor(e,t){this.projectId=e,this.database=t||ac}static empty(){return new Za("","")}get isDefaultDatabase(){return this.database===ac}isEqual(e){return e instanceof Za&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="__type__",yA="__max__",Fu={mapValue:{}},Bv="__vector__",lc="value";function Ri(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Uf(r)?4:vA(r)?9007199254740991:_A(r)?10:11:Ee(28295,{value:r})}function fr(r,e){if(r===e)return!0;const t=Ri(r);if(t!==Ri(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ja(r).isEqual(Ja(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ai(o.timestampValue),f=Ai(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ci(o.bytesValue).isEqual(Ci(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=lt(o.doubleValue),f=lt(l.doubleValue);return h===f?oc(h)===oc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Po(r.arrayValue.values||[],e.arrayValue.values||[],fr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Cy(h)!==Cy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!fr(h[g],f[g])))return!1;return!0})(r,e);default:return Ee(52216,{left:r})}}function el(r,e){return(r.values||[]).find((t=>fr(t,e)))!==void 0}function No(r,e){if(r===e)return 0;const t=Ri(r),s=Ri(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=lt(l.integerValue||l.doubleValue),g=lt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return ky(r.timestampValue,e.timestampValue);case 4:return ky(Ja(r),Ja(e));case 5:return Yd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=Ci(l),g=Ci(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const E=ke(f[_],g[_]);if(E!==0)return E}return ke(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=ke(lt(l.latitude),lt(h.latitude));return f!==0?f:ke(lt(l.longitude),lt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Py(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,_,E;const T=l.fields||{},C=h.fields||{},b=(f=T[lc])===null||f===void 0?void 0:f.arrayValue,B=(g=C[lc])===null||g===void 0?void 0:g.arrayValue,G=ke(((_=b==null?void 0:b.values)===null||_===void 0?void 0:_.length)||0,((E=B==null?void 0:B.values)===null||E===void 0?void 0:E.length)||0);return G!==0?G:Py(b,B)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Fu.mapValue&&h===Fu.mapValue)return 0;if(l===Fu.mapValue)return 1;if(h===Fu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let T=0;T<g.length&&T<E.length;++T){const C=Yd(g[T],E[T]);if(C!==0)return C;const b=No(f[g[T]],_[E[T]]);if(b!==0)return b}return ke(g.length,E.length)})(r.mapValue,e.mapValue);default:throw Ee(23264,{le:t})}}function ky(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ke(r,e);const t=Ai(r),s=Ai(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function Py(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=No(t[o],s[o]);if(l)return l}return ke(t.length,s.length)}function xo(r){return Xd(r)}function Xd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ai(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ci(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return me.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Xd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Xd(t.fields[h])}`;return o+"}"})(r.mapValue):Ee(61005,{value:r})}function Wu(r){switch(Ri(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Rc(r);return e?16+Wu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ci(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Wu(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Vi(s.fields,((l,h)=>{o+=l.length+Wu(h)})),o})(r.mapValue);default:throw Ee(13486,{value:r})}}function Jd(r){return!!r&&"integerValue"in r}function jf(r){return!!r&&"arrayValue"in r}function Ny(r){return!!r&&"nullValue"in r}function xy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ku(r){return!!r&&"mapValue"in r}function _A(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[zv])===null||t===void 0?void 0:t.stringValue)===Bv}function $a(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Vi(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=$a(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$a(r.arrayValue.values[t]);return e}return Object.assign({},r)}function vA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===yA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ku(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$a(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=$a(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Ku(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Ku(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Vi(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new tn($a(this.value))}}function $v(r){const e=[];return Vi(r.fields,((t,s)=>{const o=new Dt([t]);if(Ku(s)){const l=$v(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new jt(e,0,Se.min(),Se.min(),Se.min(),tn.empty(),0)}static newFoundDocument(e,t,s,o){return new jt(e,1,t,Se.min(),s,o,0)}static newNoDocument(e,t){return new jt(e,2,t,Se.min(),Se.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,Se.min(),Se.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t){this.position=e,this.inclusive=t}}function Dy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=me.comparator(me.fromName(h.referenceValue),t.key):s=No(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Oy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!fr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t="asc"){this.field=e,this.dir=t}}function wA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{}class vt extends Hv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new TA(e,t,s):t==="array-contains"?new AA(e,s):t==="in"?new CA(e,s):t==="not-in"?new RA(e,s):t==="array-contains-any"?new kA(e,s):new vt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new IA(e,s):new SA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(No(t,this.value)):t!==null&&Ri(this.value)===Ri(t)&&this.matchesComparison(No(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pr extends Hv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new pr(e,t)}matches(e){return qv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function qv(r){return r.op==="and"}function Wv(r){return EA(r)&&qv(r)}function EA(r){for(const e of r.filters)if(e instanceof pr)return!1;return!0}function Zd(r){if(r instanceof vt)return r.field.canonicalString()+r.op.toString()+xo(r.value);if(Wv(r))return r.filters.map((e=>Zd(e))).join(",");{const e=r.filters.map((t=>Zd(t))).join(",");return`${r.op}(${e})`}}function Kv(r,e){return r instanceof vt?(function(s,o){return o instanceof vt&&s.op===o.op&&s.field.isEqual(o.field)&&fr(s.value,o.value)})(r,e):r instanceof pr?(function(s,o){return o instanceof pr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,f)=>l&&Kv(h,o.filters[f])),!0):!1})(r,e):void Ee(19439)}function Gv(r){return r instanceof vt?(function(t){return`${t.field.canonicalString()} ${t.op} ${xo(t.value)}`})(r):r instanceof pr?(function(t){return t.op.toString()+" {"+t.getFilters().map(Gv).join(" ,")+"}"})(r):"Filter"}class TA extends vt{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class IA extends vt{constructor(e,t){super(e,"in",t),this.keys=Qv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class SA extends vt{constructor(e,t){super(e,"not-in",t),this.keys=Qv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Qv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>me.fromName(s.referenceValue)))}class AA extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jf(t)&&el(t.arrayValue,this.value)}}class CA extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&el(this.value.arrayValue,t)}}class RA extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(el(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!el(this.value.arrayValue,t)}}class kA extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>el(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function Vy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new PA(r,e,t,s,o,l,h)}function zf(r){const e=Ae(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Zd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Cc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>xo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>xo(s))).join(",")),e.Pe=t}return e.Pe}function Bf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!wA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Kv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Oy(r.startAt,e.startAt)&&Oy(r.endAt,e.endAt)}function ef(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function NA(r,e,t,s,o,l,h,f){return new kc(r,e,t,s,o,l,h,f)}function Pc(r){return new kc(r)}function Ly(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function xA(r){return r.collectionGroup!==null}function Ha(r){const e=Ae(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new wt(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new cc(l,s))})),t.has(Dt.keyField().canonicalString())||e.Te.push(new cc(Dt.keyField(),s))}return e.Te}function ur(r){const e=Ae(r);return e.Ie||(e.Ie=DA(e,Ha(r))),e.Ie}function DA(r,e){if(r.limitType==="F")return Vy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new cc(o.field,l)}));const t=r.endAt?new uc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new uc(r.startAt.position,r.startAt.inclusive):null;return Vy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function tf(r,e,t){return new kc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Nc(r,e){return Bf(ur(r),ur(e))&&r.limitType===e.limitType}function Yv(r){return`${zf(ur(r))}|lt:${r.limitType}`}function Eo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Gv(o))).join(", ")}]`),Cc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>xo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>xo(o))).join(",")),`Target(${s})`})(ur(r))}; limitType=${r.limitType})`}function xc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):me.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of Ha(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,f,g){const _=Dy(h,f,g);return h.inclusive?_<=0:_<0})(s.startAt,Ha(s),o)||s.endAt&&!(function(h,f,g){const _=Dy(h,f,g);return h.inclusive?_>=0:_>0})(s.endAt,Ha(s),o))})(r,e)}function OA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Xv(r){return(e,t)=>{let s=!1;for(const o of Ha(r)){const l=VA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function VA(r,e,t){const s=r.field.isKeyField()?me.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?No(g,_):Ee(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ee(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Vi(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return Lv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=new rt(me.comparator);function jr(){return LA}const Jv=new rt(me.comparator);function Fa(...r){let e=Jv;for(const t of r)e=e.insert(t.key,t);return e}function Zv(r){let e=Jv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ds(){return qa()}function ew(){return qa()}function qa(){return new As((r=>r.toString()),((r,e)=>r.isEqual(e)))}const bA=new rt(me.comparator),MA=new wt(me.comparator);function De(...r){let e=MA;for(const t of r)e=e.add(t);return e}const FA=new wt(ke);function UA(){return FA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oc(e)?"-0":e}}function tw(r){return{integerValue:""+r}}function nw(r,e){return dA(e)?tw(e):$f(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this._=void 0}}function jA(r,e,t){return r instanceof tl?(function(o,l){const h={fields:{[Fv]:{stringValue:Mv},[jv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Uf(l)&&(l=Rc(l)),l&&(h.fields[Uv]=l),{mapValue:h}})(t,e):r instanceof nl?iw(r,e):r instanceof rl?sw(r,e):(function(o,l){const h=rw(o,l),f=by(h)+by(o.Ee);return Jd(h)&&Jd(o.Ee)?tw(f):$f(o.serializer,f)})(r,e)}function zA(r,e,t){return r instanceof nl?iw(r,e):r instanceof rl?sw(r,e):t}function rw(r,e){return r instanceof il?(function(s){return Jd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class tl extends Dc{}class nl extends Dc{constructor(e){super(),this.elements=e}}function iw(r,e){const t=ow(e);for(const s of r.elements)t.some((o=>fr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class rl extends Dc{constructor(e){super(),this.elements=e}}function sw(r,e){let t=ow(e);for(const s of r.elements)t=t.filter((o=>!fr(o,s)));return{arrayValue:{values:t}}}class il extends Dc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function by(r){return lt(r.integerValue||r.doubleValue)}function ow(r){return jf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t){this.field=e,this.transform=t}}function BA(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof nl&&o instanceof nl||s instanceof rl&&o instanceof rl?Po(s.elements,o.elements,fr):s instanceof il&&o instanceof il?fr(s.Ee,o.Ee):s instanceof tl&&o instanceof tl})(r.transform,e.transform)}class $A{constructor(e,t){this.version=e,this.transformResults=t}}class Hn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Hn}static exists(e){return new Hn(void 0,e)}static updateTime(e){return new Hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Oc{}function lw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Hf(r.key,Hn.none()):new fl(r.key,r.data,Hn.none());{const t=r.data,s=tn.empty();let o=new wt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Li(r.key,s,new fn(o.toArray()),Hn.none())}}function HA(r,e,t){r instanceof fl?(function(o,l,h){const f=o.value.clone(),g=Fy(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Li?(function(o,l,h){if(!Gu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Fy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(uw(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Wa(r,e,t,s){return r instanceof fl?(function(l,h,f,g){if(!Gu(l.precondition,h))return f;const _=l.value.clone(),E=Uy(l.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Li?(function(l,h,f,g){if(!Gu(l.precondition,h))return f;const _=Uy(l.fieldTransforms,g,h),E=h.data;return E.setAll(uw(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(l,h,f){return Gu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function qA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=rw(s.transform,o||null);l!=null&&(t===null&&(t=tn.empty()),t.set(s.field,l))}return t||null}function My(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Po(s,o,((l,h)=>BA(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class fl extends Oc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Li extends Oc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function uw(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Fy(r,e,t){const s=new Map;$e(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,zA(h,f,t[o]))}return s}function Uy(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,jA(l,h,e))}return s}class Hf extends Oc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WA extends Oc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&HA(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Wa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Wa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ew();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=lw(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Se.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),De())}isEqual(e){return this.batchId===e.batchId&&Po(this.mutations,e.mutations,((t,s)=>My(t,s)))&&Po(this.baseMutations,e.baseMutations,((t,s)=>My(t,s)))}}class qf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){$e(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return bA})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new qf(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,Fe;function YA(r){switch(r){case W.OK:return Ee(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return Ee(15467,{code:r})}}function cw(r){if(r===void 0)return Ur("GRPC error has no .code"),W.UNKNOWN;switch(r){case dt.OK:return W.OK;case dt.CANCELLED:return W.CANCELLED;case dt.UNKNOWN:return W.UNKNOWN;case dt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case dt.INTERNAL:return W.INTERNAL;case dt.UNAVAILABLE:return W.UNAVAILABLE;case dt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case dt.NOT_FOUND:return W.NOT_FOUND;case dt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case dt.ABORTED:return W.ABORTED;case dt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case dt.DATA_LOSS:return W.DATA_LOSS;default:return Ee(39323,{code:r})}}(Fe=dt||(dt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new wi([4294967295,4294967295],0);function jy(r){const e=xv().encode(r),t=new Iv;return t.update(e),new Uint8Array(t.digest())}function zy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new wi([t,s],0),new wi([o,l],0)]}class Wf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ua(`Invalid padding: ${t}`);if(s<0)throw new Ua(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ua(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ua(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=wi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(wi.fromNumber(s)));return o.compare(XA)===1&&(o=new wi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=jy(e),[s,o]=zy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Wf(l,o,t);return s.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=jy(e),[s,o]=zy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,pl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Vc(Se.min(),o,new rt(ke),jr(),De())}}class pl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new pl(s,t,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class hw{constructor(e,t){this.targetId=e,this.De=t}}class dw{constructor(e,t,s=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class By{constructor(){this.ve=0,this.Ce=$y(),this.Fe=Ot.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=De(),t=De(),s=De();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ee(38017,{changeType:l})}})),new pl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=$y()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,$e(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class JA{constructor(e){this.We=e,this.Ge=new Map,this.ze=jr(),this.je=Uu(),this.Je=Uu(),this.He=new rt(ke)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(ef(l))if(s===0){const h=new me(l.path);this.Xe(t,h,jt.newNoDocument(h,Se.min()))}else $e(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ci(s).toUint8Array()}catch(g){if(g instanceof bv)return Ii("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Wf(h,o,l)}catch(g){return Ii(g instanceof Ua?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&ef(f.target)){const g=new me(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,jt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=De();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Vc(e,t,this.He,this.ze,s);return this.ze=jr(),this.je=Uu(),this.Je=Uu(),this.He=new rt(ke),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new By,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new wt(ke),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new wt(ke),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new By),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Uu(){return new rt(me.comparator)}function $y(){return new rt(me.comparator)}const ZA={asc:"ASCENDING",desc:"DESCENDING"},eC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tC={and:"AND",or:"OR"};class nC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nf(r,e){return r.useProto3Json||Cc(e)?e:{value:e}}function hc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function rC(r,e){return hc(r,e.toTimestamp())}function cr(r){return $e(!!r,49232),Se.fromTimestamp((function(t){const s=Ai(t);return new Qe(s.seconds,s.nanos)})(r))}function Kf(r,e){return rf(r,e).canonicalString()}function rf(r,e){const t=(function(o){return new Je(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function pw(r){const e=Je.fromString(r);return $e(vw(e),10190,{key:e.toString()}),e}function sf(r,e){return Kf(r.databaseId,e.path)}function Nd(r,e){const t=pw(e);if(t.get(1)!==r.databaseId.projectId)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new me(gw(t))}function mw(r,e){return Kf(r.databaseId,e)}function iC(r){const e=pw(r);return e.length===4?Je.emptyPath():gw(e)}function of(r){return new Je(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function gw(r){return $e(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Hy(r,e,t){return{name:sf(r,e),fields:t.value.mapValue.fields}}function sC(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Ee(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,E){return _.useProto3Json?($e(E===void 0||typeof E=="string",58123),Ot.fromBase64String(E||"")):($e(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Ot.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const E=_.code===void 0?W.UNKNOWN:cw(_.code);return new ae(E,_.message||"")})(h);t=new dw(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Nd(r,s.document.name),l=cr(s.document.updateTime),h=s.document.createTime?cr(s.document.createTime):Se.min(),f=new tn({mapValue:{fields:s.document.fields}}),g=jt.newFoundDocument(o,l,h,f),_=s.targetIds||[],E=s.removedTargetIds||[];t=new Qu(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Nd(r,s.document),l=s.readTime?cr(s.readTime):Se.min(),h=jt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new Qu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Nd(r,s.document),l=s.removedTargetIds||[];t=new Qu([],l,o,null)}else{if(!("filter"in e))return Ee(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new QA(o,l),f=s.targetId;t=new hw(f,h)}}return t}function oC(r,e){let t;if(e instanceof fl)t={update:Hy(r,e.key,e.value)};else if(e instanceof Hf)t={delete:sf(r,e.key)};else if(e instanceof Li)t={update:Hy(r,e.key,e.data),updateMask:mC(e.fieldMask)};else{if(!(e instanceof WA))return Ee(16599,{Rt:e.type});t={verify:sf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const f=h.transform;if(f instanceof tl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof nl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof rl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof il)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw Ee(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:rC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ee(27497)})(r,e.precondition)),t}function aC(r,e){return r&&r.length>0?($e(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?cr(o.updateTime):cr(l);return h.isEqual(Se.min())&&(h=cr(l)),new $A(h,o.transformResults||[])})(t,e)))):[]}function lC(r,e){return{documents:[mw(r,e.path)]}}function uC(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=mw(r,o);const l=(function(_){if(_.length!==0)return _w(pr.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((E=>(function(C){return{field:To(C.field),direction:dC(C.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=nf(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function cC(r){let e=iC(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){$e(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(T){const C=yw(T);return C instanceof pr&&Wv(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((C=>(function(B){return new cc(Io(B.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(C)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let C;return C=typeof T=="object"?T.value:T,Cc(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(T){const C=!!T.before,b=T.values||[];return new uc(b,C)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const C=!T.before,b=T.values||[];return new uc(b,C)})(t.endAt)),NA(e,o,h,l,f,"F",g,_)}function hC(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yw(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Io(t.unaryFilter.field);return vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Io(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Io(t.unaryFilter.field);return vt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Io(t.unaryFilter.field);return vt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(r):r.fieldFilter!==void 0?(function(t){return vt.create(Io(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return pr.create(t.compositeFilter.filters.map((s=>yw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(t.compositeFilter.op))})(r):Ee(30097,{filter:r})}function dC(r){return ZA[r]}function fC(r){return eC[r]}function pC(r){return tC[r]}function To(r){return{fieldPath:r.canonicalString()}}function Io(r){return Dt.fromServerFormat(r.fieldPath)}function _w(r){return r instanceof vt?(function(t){if(t.op==="=="){if(xy(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NAN"}};if(Ny(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xy(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NAN"}};if(Ny(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:To(t.field),op:fC(t.op),value:t.value}}})(r):r instanceof pr?(function(t){const s=t.getFilters().map((o=>_w(o)));return s.length===1?s[0]:{compositeFilter:{op:pC(t.op),filters:s}}})(r):Ee(54877,{filter:r})}function mC(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function vw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,s,o,l=Se.min(),h=Se.min(),f=Ot.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.gt=e}}function yC(r){const e=cC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?tf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.Dn=new vC}addToCollectionParentIndex(e,t){return this.Dn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Si.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class vC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new wt(Je.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new wt(Je.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ww=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(ww,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Do(0)}static ur(){return new Do(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="LruGarbageCollector",wC=1048576;function Ky([r,e],[t,s]){const o=ke(r,t);return o===0?ke(e,s):o}class EC{constructor(e){this.Tr=e,this.buffer=new wt(Ky),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ky(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class TC{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ne(Wy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Fo(t)?ne(Wy,"Ignoring IndexedDB error during garbage collection: ",t):await Mo(t)}await this.Rr(3e5)}))}}class IC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(Ac.ue);const s=new EC(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(qy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,f,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,f=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(_=Date.now(),wo()<=xe.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function SC(r,e){return new IC(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.changes=new As((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Wa(s.mutation,o,fn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,De()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=De()){const o=ds();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Fa();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ds();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,De())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,s,o){let l=jr();const h=qa(),f=(function(){return qa()})();return t.forEach(((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Li)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Wa(E.mutation,_,E.mutation.getFieldMask(),Qe.now())):h.set(_.key,fn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>{var T;return f.set(_,new CC(E,(T=h.get(_))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const s=qa();let o=new rt(((h,f)=>h-f)),l=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||fn.empty();E=f.applyToLocalView(_,E),s.set(g,E);const T=(o.get(f.batchId)||De()).add(g);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,E=g.value,T=ew();E.forEach((C=>{if(!l.has(C)){const b=lw(t.get(C),s.get(C));b!==null&&T.set(C,b),l=l.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return q.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return me.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):q.resolve(ds());let f=Xa,g=l;return h.next((_=>q.forEach(_,((E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?q.resolve():this.remoteDocumentCache.getEntry(e,E).next((C=>{g=g.insert(E,C)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,De()))).next((E=>({batchId:f,changes:Zv(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next((s=>{let o=Fa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Fa();return this.indexManager.getCollectionParents(e,l).next((f=>q.forEach(f,(g=>{const _=(function(T,C){return new kc(C,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((T,C)=>{h=h.insert(T,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,jt.newInvalidDocument(E)))}));let f=Fa();return h.forEach(((g,_)=>{const E=l.get(g);E!==void 0&&Wa(E.mutation,_,fn.empty(),Qe.now()),xc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:yC(o.bundledQuery),readTime:cr(o.readTime)}})(t)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.overlays=new rt(me.comparator),this.kr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ds();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=ds(),l=t.length+1,h=new me(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new rt(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=l.get(_.largestBatchId);E===null&&(E=ds(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const f=ds(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>f.set(_,E))),!(f.size()>=o)););return q.resolve(f)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new GA(t,s));let l=this.kr.get(t);l===void 0&&(l=De(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.qr=new wt(Ct.Qr),this.$r=new wt(Ct.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Ct(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new me(new Je([])),s=new Ct(t,e),o=new Ct(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new me(new Je([])),s=new Ct(t,e),o=new Ct(t,e+1);let l=De();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Ct(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ct{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return me.comparator(e.key,t.key)||ke(e.Hr,t.Hr)}static Ur(e,t){return ke(e.Hr,t.Hr)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new wt(Ct.Qr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new KA(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new Ct(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Ff:this.er-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new wt(ke);return t.forEach((o=>{const l=new Ct(o,0),h=new Ct(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{s=s.add(f.Hr)}))})),q.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;me.isDocumentKey(l)||(l=l.child(""));const h=new Ct(new me(l),0);let f=new wt(ke);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Hr)),!0)}),h),q.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){$e(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return q.forEach(t.mutations,(o=>{const l=new Ct(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new Ct(t,0),o=this.Yr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.ni=e,this.docs=(function(){return new rt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let s=jr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():jt.newInvalidDocument(o))})),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=jr();const h=t.path,f=new me(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||lA(aA(E),s)<=0||(o.has(E.key)||xc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,s,o){Ee(9500)}ri(e,t){return q.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new OC(this)}getSize(e){return q.resolve(this.size)}}class OC extends AC{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.persistence=e,this.ii=new As((t=>zf(t)),Bf),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.si=0,this.oi=new Gf,this.targetCount=0,this._i=Do.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Do(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.hr(t),q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ac(0),this.ci=!1,this.ci=!0,this.li=new NC,this.referenceDelegate=e(this),this.hi=new VC(this),this.indexManager=new _C,this.remoteDocumentCache=(function(o){return new DC(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new gC(t),this.Ti=new kC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new PC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new xC(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new LC(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return q.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class LC extends cA{constructor(e){super(),this.currentSequenceNumber=e}}class Qf{constructor(e){this.persistence=e,this.Ai=new Gf,this.Ri=null}static Vi(e){return new Qf(e)}get mi(){if(this.Ri)return this.Ri;throw Ee(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.mi,(s=>{const o=me.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return q.or([()=>q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class dc{constructor(e,t){this.persistence=e,this.gi=new As((s=>fA(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=SC(this,t)}static Vi(e,t){return new dc(e,t)}Ii(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return q.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(s++,l.removeEntry(h,Se.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Wu(e.data.value)),t}Sr(e,t,s){return q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=De(),o=De();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Yf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return mT()?8:hA(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new bC;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(wo()<=xe.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),q.resolve()):(wo()<=xe.DEBUG&&ne("QueryEngine","Query:",Eo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(wo()<=xe.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ur(t))):q.resolve())}ps(e,t){if(Ly(t))return q.resolve(null);let s=ur(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=tf(t,null,"F"),s=ur(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=De(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,f);return this.Ds(t,_,h,g.readTime)?this.ps(e,tf(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,o){return Ly(t)||o.isEqual(Se.min())?q.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?q.resolve(null):(wo()<=xe.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Eo(t)),this.vs(e,h,t,oA(o,Xa)).next((f=>f)))}))}bs(e,t){let s=new wt(Xv(e));return t.forEach(((o,l)=>{xc(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return wo()<=xe.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Eo(t)),this.gs.getDocumentsMatchingQuery(e,t,Si.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="LocalStore",FC=3e8;class UC{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new rt(ke),this.Ms=new As((l=>zf(l)),Bf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function jC(r,e,t,s){return new UC(r,e,t,s)}async function Tw(r,e){const t=Ae(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],f=[];let g=De();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of l){f.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function zC(r,e){const t=Ae(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,E){const T=_.batch,C=T.keys();let b=q.resolve();return C.forEach((B=>{b=b.next((()=>E.getEntry(g,B))).next((G=>{const $=_.docVersions.get(B);$e($!==null,48541),G.version.compareTo($)<0&&(T.applyToRemoteDocument(G,_),G.isValidDocument()&&(G.setReadTime(_.commitVersion),E.addEntry(G)))}))})),b.next((()=>f.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let g=De();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Iw(r){const e=Ae(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function BC(r,e){const t=Ae(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((E,T)=>{const C=o.get(T);if(!C)return;f.push(t.hi.removeMatchingKeys(l,E.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,E.addedDocuments,T))));let b=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?b=b.withResumeToken(Ot.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):E.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(E.resumeToken,s)),o=o.insert(T,b),(function(G,$,de){return G.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=FC?!0:de.addedDocuments.size+de.modifiedDocuments.size+de.removedDocuments.size>0})(C,b,E)&&f.push(t.hi.updateTargetData(l,b))}));let g=jr(),_=De();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push($C(l,h,e.documentUpdates).next((E=>{g=E.Ls,_=E.ks}))),!s.isEqual(Se.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(E)}return q.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function $C(r,e,t){let s=De(),o=De();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=jr();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Se.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ne(Xf,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function HC(r,e){const t=Ae(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Ff),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function qC(r,e){const t=Ae(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,q.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new yi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function af(r,e,t){const s=Ae(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Fo(h))throw h;ne(Xf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Gy(r,e,t){const s=Ae(r);let o=Se.min(),l=De();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const T=Ae(g),C=T.Ms.get(E);return C!==void 0?q.resolve(T.Fs.get(C)):T.hi.getTargetData(_,E)})(s,h,ur(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Se.min(),t?l:De()))).next((f=>(WC(s,OA(e),f),{documents:f,qs:l})))))}function WC(r,e,t){let s=r.xs.get(e)||Se.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class Qy{constructor(){this.activeTargetIds=UA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KC{constructor(){this.Fo=new Qy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Qy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="ConnectivityMonitor";class Xy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ne(Yy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ne(Yy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju=null;function lf(){return ju===null?ju=(function(){return 268435456+Math.round(2147483648*Math.random())})():ju++,"0x"+ju.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="RestConnection",QC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===ac?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=lf(),f=this.Go(e,t.toUriEncodedString());ne(xd,`Sending RPC '${e}' ${h}:`,f,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(f),E=Ts(_);return this.jo(e,f,g,s,E).then((T=>(ne(xd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw Ii(xd,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",s),T}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=QC[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class JC extends YC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=lf();return new Promise(((f,g)=>{const _=new Sv;_.setWithCredentials(!0),_.listenOnce(Av.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case qu.NO_ERROR:const T=_.getResponseJson();ne(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case qu.TIMEOUT:ne(Ft,`RPC '${e}' ${h} timed out`),g(new ae(W.DEADLINE_EXCEEDED,"Request time out"));break;case qu.HTTP_ERROR:const C=_.getStatus();if(ne(Ft,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let b=_.getResponseJson();Array.isArray(b)&&(b=b[0]);const B=b==null?void 0:b.error;if(B&&B.status&&B.message){const G=(function(de){const le=de.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(le)>=0?le:W.UNKNOWN})(B.status);g(new ae(G,B.message))}else g(new ae(W.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ae(W.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ne(Ft,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ne(Ft,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}P_(e,t,s){const o=lf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=kv(),f=Rv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=l.join("");ne(Ft,`Creating RPC '${e}' stream ${o}: ${E}`,g);const T=h.createWebChannel(E,g);this.T_(T);let C=!1,b=!1;const B=new XC({Ho:$=>{b?ne(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(C||(ne(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),C=!0),ne(Ft,`RPC '${e}' stream ${o} sending:`,$),T.send($))},Yo:()=>T.close()}),G=($,de,le)=>{$.listen(de,(ue=>{try{le(ue)}catch(_e){setTimeout((()=>{throw _e}),0)}}))};return G(T,Ma.EventType.OPEN,(()=>{b||(ne(Ft,`RPC '${e}' stream ${o} transport opened.`),B.s_())})),G(T,Ma.EventType.CLOSE,(()=>{b||(b=!0,ne(Ft,`RPC '${e}' stream ${o} transport closed`),B.__(),this.I_(T))})),G(T,Ma.EventType.ERROR,($=>{b||(b=!0,Ii(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),B.__(new ae(W.UNAVAILABLE,"The operation could not be completed")))})),G(T,Ma.EventType.MESSAGE,($=>{var de;if(!b){const le=$.data[0];$e(!!le,16349);const ue=le,_e=(ue==null?void 0:ue.error)||((de=ue[0])===null||de===void 0?void 0:de.error);if(_e){ne(Ft,`RPC '${e}' stream ${o} received error:`,_e);const Oe=_e.status;let Ie=(function(k){const R=dt[k];if(R!==void 0)return cw(R)})(Oe),x=_e.message;Ie===void 0&&(Ie=W.INTERNAL,x="Unknown error status: "+Oe+" with message "+_e.message),b=!0,B.__(new ae(Ie,x)),T.close()}else ne(Ft,`RPC '${e}' stream ${o} received:`,le),B.a_(le)}})),G(f,Cv.STAT_EVENT,($=>{$.stat===Qd.PROXY?ne(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===Qd.NOPROXY&&ne(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{B.o_()}),0),B}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Dd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(r){return new nC(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="PersistentStream";class Aw{constructor(e,t,s,o,l,h,f,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Sw(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ae(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ne(Jy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ne(Jy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ZC extends Aw{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=sC(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Se.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Se.min():h.readTime?cr(h.readTime):Se.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=of(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=ef(g)?{documents:lC(l,g)}:{query:uC(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=fw(l,h.resumeToken);const _=nf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Se.min())>0){f.readTime=hc(l,h.snapshotVersion.toTimestamp());const _=nf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const s=hC(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=of(this.serializer),t.removeTarget=e,this.k_(t)}}class eR extends Aw{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=aC(e.writeResults,e.commitTime),s=cr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=of(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>oC(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{}class nR extends tR{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,rf(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ae(W.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,rf(t,s),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(W.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class rR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ur(t),this._a=!1):ne("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="RemoteStore";class iR{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{Cs(this)&&(ne(vs,"Restarting streams for network reachability change."),await(async function(g){const _=Ae(g);_.Ia.add(4),await ml(_),_.Aa.set("Unknown"),_.Ia.delete(4),await bc(_)})(this))}))})),this.Aa=new rR(s,o)}}async function bc(r){if(Cs(r))for(const e of r.da)await e(!0)}async function ml(r){for(const e of r.da)await e(!1)}function Cw(r,e){const t=Ae(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),tp(t)?ep(t):Uo(t).x_()&&Zf(t,e))}function Jf(r,e){const t=Ae(r),s=Uo(t);t.Ta.delete(e),s.x_()&&Rw(t,e),t.Ta.size===0&&(s.x_()?s.B_():Cs(t)&&t.Aa.set("Unknown"))}function Zf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Uo(r).H_(e)}function Rw(r,e){r.Ra.$e(e),Uo(r).Y_(e)}function ep(r){r.Ra=new JA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Uo(r).start(),r.Aa.aa()}function tp(r){return Cs(r)&&!Uo(r).M_()&&r.Ta.size>0}function Cs(r){return Ae(r).Ia.size===0}function kw(r){r.Ra=void 0}async function sR(r){r.Aa.set("Online")}async function oR(r){r.Ta.forEach(((e,t)=>{Zf(r,e)}))}async function aR(r,e){kw(r),tp(r)?(r.Aa.la(e),ep(r)):r.Aa.set("Unknown")}async function lR(r,e,t){if(r.Aa.set("Online"),e instanceof dw&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(r,e)}catch(s){ne(vs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await fc(r,s)}else if(e instanceof Qu?r.Ra.Ye(e):e instanceof hw?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Se.min()))try{const s=await Iw(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ta.get(_);E&&l.Ta.set(_,E.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const E=l.Ta.get(g);if(!E)return;l.Ta.set(g,E.withResumeToken(Ot.EMPTY_BYTE_STRING,E.snapshotVersion)),Rw(l,g);const T=new yi(E.target,g,_,E.sequenceNumber);Zf(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(s){ne(vs,"Failed to raise snapshot:",s),await fc(r,s)}}async function fc(r,e,t){if(!Fo(e))throw e;r.Ia.add(1),await ml(r),r.Aa.set("Offline"),t||(t=()=>Iw(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ne(vs,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await bc(r)}))}function Pw(r,e){return e().catch((t=>fc(r,t,e)))}async function Mc(r){const e=Ae(r),t=ki(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ff;for(;uR(e);)try{const o=await HC(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,cR(e,o)}catch(o){await fc(e,o)}Nw(e)&&xw(e)}function uR(r){return Cs(r)&&r.Pa.length<10}function cR(r,e){r.Pa.push(e);const t=ki(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Nw(r){return Cs(r)&&!ki(r).M_()&&r.Pa.length>0}function xw(r){ki(r).start()}async function hR(r){ki(r).na()}async function dR(r){const e=ki(r);for(const t of r.Pa)e.X_(t.mutations)}async function fR(r,e,t){const s=r.Pa.shift(),o=qf.from(s,e,t);await Pw(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Mc(r)}async function pR(r,e){e&&ki(r).Z_&&await(async function(s,o){if((function(h){return YA(h)&&h!==W.ABORTED})(o.code)){const l=s.Pa.shift();ki(s).N_(),await Pw(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Mc(s)}})(r,e),Nw(r)&&xw(r)}async function Zy(r,e){const t=Ae(r);t.asyncQueue.verifyOperationInProgress(),ne(vs,"RemoteStore received new credentials");const s=Cs(t);t.Ia.add(3),await ml(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await bc(t)}async function mR(r,e){const t=Ae(r);e?(t.Ia.delete(2),await bc(t)):e||(t.Ia.add(2),await ml(t),t.Aa.set("Unknown"))}function Uo(r){return r.Va||(r.Va=(function(t,s,o){const l=Ae(t);return l.ia(),new ZC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:sR.bind(null,r),e_:oR.bind(null,r),n_:aR.bind(null,r),J_:lR.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),tp(r)?ep(r):r.Aa.set("Unknown")):(await r.Va.stop(),kw(r))}))),r.Va}function ki(r){return r.ma||(r.ma=(function(t,s,o){const l=Ae(t);return l.ia(),new eR(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:hR.bind(null,r),n_:pR.bind(null,r),ea:dR.bind(null,r),ta:fR.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Mc(r)):(await r.ma.stop(),r.Pa.length>0&&(ne(vs,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new np(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rp(r,e){if(Ur("AsyncQueue",`${e}: ${r}`),Fo(r))return new ae(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{static emptySet(e){return new ko(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=Fa(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ko;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.fa=new rt(me.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ee(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Oo{constructor(e,t,s,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Oo(e,t,ko.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class yR{constructor(){this.queries=t_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Ae(t),l=o.queries;o.queries=t_(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(s)}))})(this,new ae(W.ABORTED,"Firestore shutting down"))}}function t_(){return new As((r=>Yv(r)),Nc)}async function ip(r,e){const t=Ae(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new gR,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=rp(h,`Initialization of query '${Eo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&op(t)}async function sp(r,e){const t=Ae(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function _R(r,e){const t=Ae(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(s=!0);h.ya=o}}s&&op(t)}function vR(r,e,t){const s=Ae(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function op(r){r.Da.forEach((e=>{e.next()}))}var uf,n_;(n_=uf||(uf={})).Fa="default",n_.Cache="cache";class ap{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Oo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==uf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.key=e}}class Ow{constructor(e){this.key=e}}class wR{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=De(),this.mutatedKeys=De(),this.Xa=Xv(e),this.eu=new ko(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new e_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const C=o.get(E),b=xc(this.query,T)?T:null,B=!!C&&this.mutatedKeys.has(C.key),G=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let $=!1;C&&b?C.data.isEqual(b.data)?B!==G&&(s.track({type:3,doc:b}),$=!0):this.iu(C,b)||(s.track({type:2,doc:b}),$=!0,(g&&this.Xa(b,g)>0||_&&this.Xa(b,_)<0)&&(f=!0)):!C&&b?(s.track({type:0,doc:b}),$=!0):C&&!b&&(s.track({type:1,doc:C}),$=!0,(g||_)&&(f=!0)),$&&(b?(h=h.add(b),l=G?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{eu:h,ru:s,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((E,T)=>(function(b,B){const G=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{At:$})}};return G(b)-G(B)})(E.type,T.type)||this.Xa(E.doc,T.doc))),this.su(s),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new Oo(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new e_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=De(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new Ow(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new Dw(s))})),t}uu(e){this.Ha=e.qs,this.Za=De();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Oo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const lp="SyncEngine";class ER{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class TR{constructor(e){this.key=e,this.lu=!1}}class IR{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new As((f=>Yv(f)),Nc),this.Tu=new Map,this.Iu=new Set,this.du=new rt(me.comparator),this.Eu=new Map,this.Au=new Gf,this.Ru={},this.Vu=new Map,this.mu=Do.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function SR(r,e,t=!0){const s=Uw(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await Vw(s,e,t,!0),o}async function AR(r,e){const t=Uw(r);await Vw(t,e,!0,!1)}async function Vw(r,e,t,s){const o=await qC(r.localStore,ur(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await CR(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Cw(r.remoteStore,o),f}async function CR(r,e,t,s,o){r.gu=(T,C,b)=>(async function(G,$,de,le){let ue=$.view.nu(de);ue.Ds&&(ue=await Gy(G.localStore,$.query,!1).then((({documents:x})=>$.view.nu(x,ue))));const _e=le&&le.targetChanges.get($.targetId),Oe=le&&le.targetMismatches.get($.targetId)!=null,Ie=$.view.applyChanges(ue,G.isPrimaryClient,_e,Oe);return i_(G,$.targetId,Ie._u),Ie.snapshot})(r,T,C,b);const l=await Gy(r.localStore,e,!0),h=new wR(e,l.qs),f=h.nu(l.documents),g=pl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);i_(r,t,_._u);const E=new ER(e,t,h);return r.Pu.set(e,E),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function RR(r,e,t){const s=Ae(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!Nc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await af(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Jf(s.remoteStore,o.targetId),cf(s,o.targetId)})).catch(Mo)):(cf(s,o.targetId),await af(s.localStore,o.targetId,!0))}async function kR(r,e){const t=Ae(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Jf(t.remoteStore,s.targetId))}async function PR(r,e,t){const s=bR(r);try{const o=await(function(h,f){const g=Ae(h),_=Qe.now(),E=f.reduce(((b,B)=>b.add(B.key)),De());let T,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let B=jr(),G=De();return g.Os.getEntries(b,E).next(($=>{B=$,B.forEach(((de,le)=>{le.isValidDocument()||(G=G.add(de))}))})).next((()=>g.localDocuments.getOverlayedDocuments(b,B))).next(($=>{T=$;const de=[];for(const le of f){const ue=qA(le,T.get(le.key).overlayedDocument);ue!=null&&de.push(new Li(le.key,ue,$v(ue.value.mapValue),Hn.exists(!0)))}return g.mutationQueue.addMutationBatch(b,_,de,f)})).next(($=>{C=$;const de=$.applyToLocalDocumentSet(T,G);return g.documentOverlayCache.saveOverlays(b,$.batchId,de)}))})).then((()=>({batchId:C.batchId,changes:Zv(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new rt(ke)),_=_.insert(f,g),h.Ru[h.currentUser.toKey()]=_})(s,o.batchId,t),await gl(s,o.changes),await Mc(s.remoteStore)}catch(o){const l=rp(o,"Failed to persist write");t.reject(l)}}async function Lw(r,e){const t=Ae(r);try{const s=await BC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&($e(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?$e(h.lu,14607):o.removedDocuments.size>0&&($e(h.lu,42227),h.lu=!1))})),await gl(t,s,e)}catch(s){await Mo(s)}}function r_(r,e,t){const s=Ae(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Ae(h);g.onlineState=f;let _=!1;g.queries.forEach(((E,T)=>{for(const C of T.wa)C.va(f)&&(_=!0)})),_&&op(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function NR(r,e,t){const s=Ae(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new rt(me.comparator);h=h.insert(l,jt.newNoDocument(l,Se.min()));const f=De().add(l),g=new Vc(Se.min(),new Map,new rt(ke),h,f);await Lw(s,g),s.du=s.du.remove(l),s.Eu.delete(e),up(s)}else await af(s.localStore,e,!1).then((()=>cf(s,e,t))).catch(Mo)}async function xR(r,e){const t=Ae(r),s=e.batch.batchId;try{const o=await zC(t.localStore,e);Mw(t,s,null),bw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await gl(t,o)}catch(o){await Mo(o)}}async function DR(r,e,t){const s=Ae(r);try{const o=await(function(h,f){const g=Ae(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,f).next((T=>($e(T!==null,37113),E=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);Mw(s,e,t),bw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await gl(s,o)}catch(o){await Mo(o)}}function bw(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function Mw(r,e,t){const s=Ae(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function cf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||Fw(r,s)}))}function Fw(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Jf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),up(r))}function i_(r,e,t){for(const s of t)s instanceof Dw?(r.Au.addReference(s.key,e),OR(r,s)):s instanceof Ow?(ne(lp,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||Fw(r,s.key)):Ee(19791,{yu:s})}function OR(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(ne(lp,"New document in limbo: "+t),r.Iu.add(s),up(r))}function up(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new me(Je.fromString(e)),s=r.mu.next();r.Eu.set(s,new TR(t)),r.du=r.du.insert(t,s),Cw(r.remoteStore,new yi(ur(Pc(t.path)),s,"TargetPurposeLimboResolution",Ac.ue))}}async function gl(r,e,t){const s=Ae(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((f,g)=>{h.push(s.gu(g,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=Yf.Es(g.targetId,_);l.push(T)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,_){const E=Ae(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>q.forEach(_,(C=>q.forEach(C.Is,(b=>E.persistence.referenceDelegate.addReference(T,C.targetId,b))).next((()=>q.forEach(C.ds,(b=>E.persistence.referenceDelegate.removeReference(T,C.targetId,b)))))))))}catch(T){if(!Fo(T))throw T;ne(Xf,"Failed to update sequence numbers: "+T)}for(const T of _){const C=T.targetId;if(!T.fromCache){const b=E.Fs.get(C),B=b.snapshotVersion,G=b.withLastLimboFreeSnapshotVersion(B);E.Fs=E.Fs.insert(C,G)}}})(s.localStore,l))}async function VR(r,e){const t=Ae(r);if(!t.currentUser.isEqual(e)){ne(lp,"User change. New user:",e.toKey());const s=await Tw(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new ae(W.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await gl(t,s.Bs)}}function LR(r,e){const t=Ae(r),s=t.Eu.get(e);if(s&&s.lu)return De().add(s.key);{let o=De();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function Uw(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NR.bind(null,e),e.hu.J_=_R.bind(null,e.eventManager),e.hu.pu=vR.bind(null,e.eventManager),e}function bR(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DR.bind(null,e),e}class pc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return jC(this.persistence,new MC,e.initialUser,this.serializer)}Du(e){return new Ew(Qf.Vi,this.serializer)}bu(e){return new KC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pc.provider={build:()=>new pc};class MR extends pc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){$e(this.persistence.referenceDelegate instanceof dc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new TC(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new Ew((s=>dc.Vi(s,t)),this.serializer)}}class hf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>r_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=VR.bind(null,this.syncEngine),await mR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new yR})()}createDatastore(e){const t=Lc(e.databaseInfo.databaseId),s=(function(l){return new JC(l)})(e.databaseInfo);return(function(l,h,f,g){return new nR(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,f){return new iR(s,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>r_(this.syncEngine,t,0)),(function(){return Xy.C()?new Xy:new GC})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,E){const T=new IR(o,l,h,f,g,_);return E&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ae(o);ne(vs,"RemoteStore shutting down."),l.Ia.add(5),await ml(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hf.provider={build:()=>new hf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="FirestoreClient";class FR{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=bf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ne(Pi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Pi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=rp(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Od(r,e){r.asyncQueue.verifyOperationInProgress(),ne(Pi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Tw(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Ii("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{ne("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Ii("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function s_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await UR(r);ne(Pi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>Zy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Zy(e.remoteStore,o))),r._onlineComponents=e}async function UR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(Pi,"Using user provided OfflineComponentProvider");try{await Od(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ii("Error using user provided cache. Falling back to memory cache: "+t),await Od(r,new pc)}}else ne(Pi,"Using default OfflineComponentProvider"),await Od(r,new MR(void 0));return r._offlineComponents}async function jw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(Pi,"Using user provided OnlineComponentProvider"),await s_(r,r._uninitializedComponentsProvider._online)):(ne(Pi,"Using default OnlineComponentProvider"),await s_(r,new hf))),r._onlineComponents}function jR(r){return jw(r).then((e=>e.syncEngine))}async function mc(r){const e=await jw(r),t=e.eventManager;return t.onListen=SR.bind(null,e.syncEngine),t.onUnlisten=RR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=AR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kR.bind(null,e.syncEngine),t}function zR(r,e,t={}){const s=new br;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const E=new cp({next:C=>{E.Ou(),h.enqueueAndForget((()=>sp(l,T)));const b=C.docs.has(f);!b&&C.fromCache?_.reject(new ae(W.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&C.fromCache&&g&&g.source==="server"?_.reject(new ae(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(C)},error:C=>_.reject(C)}),T=new ap(Pc(f.path),E,{includeMetadataChanges:!0,ka:!0});return ip(l,T)})(await mc(r),r.asyncQueue,e,t,s))),s.promise}function BR(r,e,t={}){const s=new br;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const E=new cp({next:C=>{E.Ou(),h.enqueueAndForget((()=>sp(l,T))),C.fromCache&&g.source==="server"?_.reject(new ae(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(C)},error:C=>_.reject(C)}),T=new ap(f,E,{includeMetadataChanges:!0,ka:!0});return ip(l,T)})(await mc(r),r.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="firestore.googleapis.com",a_=!0;class l_{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bw,this.ssl=a_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:a_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ww;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wC)throw new ae(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new l_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new l_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Y1;switch(s.type){case"firstParty":return new eA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=o_.get(t);s&&(ne("ComponentProvider","Removing Datastore"),o_.delete(t),s.terminate())})(this),Promise.resolve()}}function $R(r,e,t,s={}){var o;r=pn(r,Fc);const l=Ts(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(wf(`https://${g}`),Ef("Firestore",!0)),h.host!==Bw&&h.host!==g&&Ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!Ti(_,f)&&(r._setSettings(_),s.mockUserToken)){let E,T;if(typeof s.mockUserToken=="string")E=s.mockUserToken,T=Ut.MOCK_USER;else{E=aT(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ae(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ut(C)}r._authCredentials=new X1(new Nv(E,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new yl(this.firestore,e,this._query)}}class ut{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(dl(t,ut._jsonSchema))return new ut(e,s||null,new me(Je.fromString(t.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:ft("string",ut._jsonSchemaVersion),referencePath:ft("string")};class Ei extends yl{constructor(e,t,s){super(e,t,Pc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new me(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function $w(r,e,...t){if(r=st(r),Dv("collection","path",e),r instanceof Fc){const s=Je.fromString(e,...t);return Ty(s),new Ei(r,null,s)}{if(!(r instanceof ut||r instanceof Ei))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Je.fromString(e,...t));return Ty(s),new Ei(r.firestore,null,s)}}function df(r,e,...t){if(r=st(r),arguments.length===1&&(e=bf.newId()),Dv("doc","path",e),r instanceof Fc){const s=Je.fromString(e,...t);return Ey(s),new ut(r,null,new me(s))}{if(!(r instanceof ut||r instanceof Ei))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Je.fromString(e,...t));return Ey(s),new ut(r.firestore,r instanceof Ei?r.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="AsyncQueue";class c_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Sw(this,"async_queue_retry"),this.oc=()=>{const s=Dd();s&&ne(u_,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Dd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Dd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new br;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Fo(e))throw e;ne(u_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Ur("INTERNAL UNHANDLED ERROR: ",h_(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=np.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&Ee(47125,{hc:h_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function h_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class Ni extends Fc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new c_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new c_(e),this._firestoreClient=void 0,await e}}}function HR(r,e){const t=typeof r=="object"?r:Ec(),s=typeof r=="string"?r:ac,o=xi(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=D_("firestore");l&&$R(o,...l)}return o}function Uc(r){if(r._terminated)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||qR(r),r._firestoreClient}function qR(r){var e,t,s;const o=r._freezeSettings(),l=(function(f,g,_,E){return new gA(f,g,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,zw(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new FR(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Ot.fromBase64String(e))}catch(t){throw new ae(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Cn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(dl(e,Cn._jsonSchema))return Cn.fromBase64String(e.bytes)}}Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:ft("string",Cn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(dl(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:ft("string",hr._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(dl(e,dr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dr(e.vectorValues);throw new ae(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dr._jsonSchemaVersion="firestore/vectorValue/1.0",dr._jsonSchema={type:ft("string",dr._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=/^__.*__$/;class KR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Li(e,this.data,this.fieldMask,t,this.fieldTransforms):new fl(e,this.data,t,this.fieldTransforms)}}class Hw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Li(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ec:r})}}class hp{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new hp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return gc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(qw(this.Ec)&&WR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class GR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Lc(e)}Dc(e,t,s,o=!1){return new hp({Ec:e,methodName:t,bc:s,path:Dt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ww(r){const e=r._freezeSettings(),t=Lc(r._databaseId);return new GR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function QR(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);pp("Data must be an object, but it was:",h,s);const f=Kw(s,h);let g,_;if(l.merge)g=new fn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const C=ff(e,T,t);if(!h.contains(C))throw new ae(W.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Qw(E,C)||E.push(C)}g=new fn(E),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new KR(new tn(f),g,_)}class zc extends _l{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zc}}class dp extends _l{_toFieldTransform(e){return new aw(e.path,new tl)}isEqual(e){return e instanceof dp}}class fp extends _l{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new il(e.serializer,nw(e.serializer,this.Cc));return new aw(e.path,t)}isEqual(e){return e instanceof fp&&this.Cc===e.Cc}}function YR(r,e,t,s){const o=r.Dc(1,e,t);pp("Data must be an object, but it was:",o,s);const l=[],h=tn.empty();Vi(s,((g,_)=>{const E=mp(e,g,t);_=st(_);const T=o.gc(E);if(_ instanceof zc)l.push(E);else{const C=Bc(_,T);C!=null&&(l.push(E),h.set(E,C))}}));const f=new fn(l);return new Hw(h,f,o.fieldTransforms)}function XR(r,e,t,s,o,l){const h=r.Dc(1,e,t),f=[ff(e,s,t)],g=[o];if(l.length%2!=0)throw new ae(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<l.length;C+=2)f.push(ff(e,l[C])),g.push(l[C+1]);const _=[],E=tn.empty();for(let C=f.length-1;C>=0;--C)if(!Qw(_,f[C])){const b=f[C];let B=g[C];B=st(B);const G=h.gc(b);if(B instanceof zc)_.push(b);else{const $=Bc(B,G);$!=null&&(_.push(b),E.set(b,$))}}const T=new fn(_);return new Hw(E,T,h.fieldTransforms)}function Bc(r,e){if(Gw(r=st(r)))return pp("Unsupported field value:",e,r),Kw(r,e);if(r instanceof _l)return(function(s,o){if(!qw(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const f of s){let g=Bc(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=st(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return nw(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Qe.fromDate(s);return{timestampValue:hc(o.serializer,l)}}if(s instanceof Qe){const l=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:hc(o.serializer,l)}}if(s instanceof hr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Cn)return{bytesValue:fw(o.serializer,s._byteString)};if(s instanceof ut){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Kf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof dr)return(function(h,f){return{mapValue:{fields:{[zv]:{stringValue:Bv},[lc]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw f.wc("VectorValues must only contain numeric values.");return $f(f.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Mf(s)}`)})(r,e)}function Kw(r,e){const t={};return Lv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vi(r,((s,o)=>{const l=Bc(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Gw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Qe||r instanceof hr||r instanceof Cn||r instanceof ut||r instanceof _l||r instanceof dr)}function pp(r,e,t){if(!Gw(t)||!Ov(t)){const s=Mf(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function ff(r,e,t){if((e=st(e))instanceof jc)return e._internalPath;if(typeof e=="string")return mp(r,e);throw gc("Field path arguments must be of type string or ",r,!1,void 0,t)}const JR=new RegExp("[~\\*/\\[\\]]");function mp(r,e,t){if(e.search(JR)>=0)throw gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new jc(...e.split("."))._internalPath}catch{throw gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function gc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ae(W.INVALID_ARGUMENT,f+r+g)}function Qw(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ZR extends Yw{data(){return super.data()}}function Xw(r,e){return typeof e=="string"?mp(r,e):e instanceof jc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ae(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ek{convertValue(e,t="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Vi(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[lc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>lt(h.doubleValue)));return new dr(l)}convertGeoPoint(e){return new hr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Rc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ja(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Je.fromString(e);$e(vw(s),9688,{name:e});const o=new Za(s.get(1),s.get(3)),l=new me(s.popFirst(5));return o.isEqual(t)||Ur(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class ja{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ps extends Yw{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Xw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ps._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",ps._jsonSchema={type:ft("string",ps._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Yu extends ps{data(e={}){return super.data(e)}}class ms{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ja(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Yu(this._firestore,this._userDataWriter,s.key,s,new ja(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new Yu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new ja(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new Yu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new ja(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:nk(f.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ms._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(r){r=pn(r,ut);const e=pn(r.firestore,Ni);return zR(Uc(e),r._key).then((t=>Zw(e,r,t)))}ms._jsonSchemaVersion="firestore/querySnapshot/1.0",ms._jsonSchema={type:ft("string",ms._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class gp extends ek{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,t)}}function rk(r){r=pn(r,yl);const e=pn(r.firestore,Ni),t=Uc(e),s=new gp(e);return Jw(r._query),BR(t,r._query).then((o=>new ms(e,s,r,o)))}function mf(r,e,t){r=pn(r,ut);const s=pn(r.firestore,Ni),o=tk(r.converter,e,t);return yp(s,[QR(Ww(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Hn.none())])}function ik(r,e,t,...s){r=pn(r,ut);const o=pn(r.firestore,Ni),l=Ww(o);let h;return h=typeof(e=st(e))=="string"||e instanceof jc?XR(l,"updateDoc",r._key,e,t,s):YR(l,"updateDoc",r._key,e),yp(o,[h.toMutation(r._key,Hn.exists(!0))])}function Vd(r){return yp(pn(r.firestore,Ni),[new Hf(r._key,Hn.none())])}function sk(r,...e){var t,s,o;r=st(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||d_(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(d_(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let g,_,E;if(r instanceof ut)_=pn(r.firestore,Ni),E=Pc(r._key.path),g={next:T=>{e[h]&&e[h](Zw(_,r,T))},error:e[h+1],complete:e[h+2]};else{const T=pn(r,yl);_=pn(T.firestore,Ni),E=T._query;const C=new gp(_);g={next:b=>{e[h]&&e[h](new ms(_,C,T,b))},error:e[h+1],complete:e[h+2]},Jw(r._query)}return(function(C,b,B,G){const $=new cp(G),de=new ap(b,$,B);return C.asyncQueue.enqueueAndForget((async()=>ip(await mc(C),de))),()=>{$.Ou(),C.asyncQueue.enqueueAndForget((async()=>sp(await mc(C),de)))}})(Uc(_),E,f,g)}function yp(r,e){return(function(s,o){const l=new br;return s.asyncQueue.enqueueAndForget((async()=>PR(await jR(s),o,l))),l.promise})(Uc(r),e)}function Zw(r,e,t){const s=t.docs.get(e._key),o=new gp(r);return new ps(r,o,e._key,s,new ja(t.hasPendingWrites,t.fromCache),e.converter)}function Xu(){return new dp("serverTimestamp")}function f_(r){return new fp("increment",r)}(function(e,t=!0){(function(o){bo=o})(Vo),qn(new Rn("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new Ni(new J1(s.getProvider("auth-internal")),new tA(h,s.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ae(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Za(_.options.projectId,E)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),nn(gy,yy,e),nn(gy,yy,"esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,t,s,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,dn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||s.get().then(l=>this.messaging=l,()=>{}),this.appCheck||o==null||o.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),s=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:s,appCheckToken:o}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="us-central1";class ak{constructor(e,t,s,o,l=gf,h=(...f)=>fetch(...f)){this.app=e,this.fetchImpl=h,this.emulatorOrigin=null,this.contextProvider=new ok(e,t,s,o),this.cancelAllRequests=new Promise(f=>{this.deleteService=()=>Promise.resolve(f())});try{const f=new URL(l);this.customDomain=f.origin+(f.pathname==="/"?"":f.pathname),this.region=gf}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function lk(r,e,t){const s=Ts(e);r.emulatorOrigin=`http${s?"s":""}://${e}:${t}`,s&&(wf(r.emulatorOrigin),Ef("Functions",!0))}const p_="@firebase/functions",m_="0.12.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="auth-internal",ck="app-check-internal",hk="messaging-internal";function dk(r){const e=(t,{instanceIdentifier:s})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider(uk),h=t.getProvider(hk),f=t.getProvider(ck);return new ak(o,l,h,f,s)};qn(new Rn(eE,e,"PUBLIC").setMultipleInstances(!0)),nn(p_,m_,r),nn(p_,m_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(r=Ec(),e=gf){const s=xi(st(r),eE).getImmediate({identifier:e}),o=D_("functions");return o&&pk(s,...o),s}function pk(r,e,t){lk(st(r),e,t)}dk();const tE="@firebase/installations",_p="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=1e4,rE=`w:${_p}`,iE="FIS_v2",mk="https://firebaseinstallations.googleapis.com/v1",gk=3600*1e3,yk="installations",_k="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ws=new Is(yk,_k,vk);function sE(r){return r instanceof Kn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE({projectId:r}){return`${mk}/projects/${r}/installations`}function aE(r){return{token:r.token,requestStatus:2,expiresIn:Ek(r.expiresIn),creationTime:Date.now()}}async function lE(r,e){const s=(await e.json()).error;return ws.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function uE({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function wk(r,{refreshToken:e}){const t=uE(r);return t.append("Authorization",Tk(e)),t}async function cE(r){const e=await r();return e.status>=500&&e.status<600?r():e}function Ek(r){return Number(r.replace("s","000"))}function Tk(r){return`${iE} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ik({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=oE(r),o=uE(r),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:iE,appId:r.appId,sdkVersion:rE},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await cE(()=>fetch(s,f));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:aE(_.authToken)}}else throw await lE("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=/^[cdef][\w-]{21}$/,yf="";function Ck(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=Rk(r);return Ak.test(t)?t:yf}catch{return yf}}function Rk(r){return Sk(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new Map;function fE(r,e){const t=$c(r);pE(t,e),kk(t,e)}function pE(r,e){const t=dE.get(r);if(t)for(const s of t)s(e)}function kk(r,e){const t=Pk();t&&t.postMessage({key:r,fid:e}),Nk()}let fs=null;function Pk(){return!fs&&"BroadcastChannel"in self&&(fs=new BroadcastChannel("[Firebase] FID Change"),fs.onmessage=r=>{pE(r.data.key,r.data.fid)}),fs}function Nk(){dE.size===0&&fs&&(fs.close(),fs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk="firebase-installations-database",Dk=1,Es="firebase-installations-store";let Ld=null;function vp(){return Ld||(Ld=F_(xk,Dk,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Es)}}})),Ld}async function yc(r,e){const t=$c(r),o=(await vp()).transaction(Es,"readwrite"),l=o.objectStore(Es),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&fE(r,e.fid),e}async function mE(r){const e=$c(r),s=(await vp()).transaction(Es,"readwrite");await s.objectStore(Es).delete(e),await s.done}async function Hc(r,e){const t=$c(r),o=(await vp()).transaction(Es,"readwrite"),l=o.objectStore(Es),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&fE(r,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(r){let e;const t=await Hc(r.appConfig,s=>{const o=Ok(s),l=Vk(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===yf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Ok(r){const e=r||{fid:Ck(),registrationStatus:0};return gE(e)}function Vk(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ws.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Lk(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bk(r)}:{installationEntry:e}}async function Lk(r,e){try{const t=await Ik(r,e);return yc(r.appConfig,t)}catch(t){throw sE(t)&&t.customData.serverCode===409?await mE(r.appConfig):await yc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function bk(r){let e=await g_(r.appConfig);for(;e.registrationStatus===1;)await hE(100),e=await g_(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await wp(r);return s||t}return e}function g_(r){return Hc(r,e=>{if(!e)throw ws.create("installation-not-found");return gE(e)})}function gE(r){return Mk(r)?{fid:r.fid,registrationStatus:0}:r}function Mk(r){return r.registrationStatus===1&&r.registrationTime+nE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk({appConfig:r,heartbeatServiceProvider:e},t){const s=Uk(r,t),o=wk(r,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:rE,appId:r.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await cE(()=>fetch(s,f));if(g.ok){const _=await g.json();return aE(_)}else throw await lE("Generate Auth Token",g)}function Uk(r,{fid:e}){return`${oE(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(r,e=!1){let t;const s=await Hc(r.appConfig,l=>{if(!yE(l))throw ws.create("not-registered");const h=l.authToken;if(!e&&Bk(h))return l;if(h.requestStatus===1)return t=jk(r,e),l;{if(!navigator.onLine)throw ws.create("app-offline");const f=Hk(l);return t=zk(r,f),f}});return t?await t:s.authToken}async function jk(r,e){let t=await y_(r.appConfig);for(;t.authToken.requestStatus===1;)await hE(100),t=await y_(r.appConfig);const s=t.authToken;return s.requestStatus===0?Ep(r,e):s}function y_(r){return Hc(r,e=>{if(!yE(e))throw ws.create("not-registered");const t=e.authToken;return qk(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function zk(r,e){try{const t=await Fk(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await yc(r.appConfig,s),t}catch(t){if(sE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await mE(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await yc(r.appConfig,s)}throw t}}function yE(r){return r!==void 0&&r.registrationStatus===2}function Bk(r){return r.requestStatus===2&&!$k(r)}function $k(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+gk}function Hk(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function qk(r){return r.requestStatus===1&&r.requestTime+nE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(r){const e=r,{installationEntry:t,registrationPromise:s}=await wp(e);return s?s.catch(console.error):Ep(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(r,e=!1){const t=r;return await Gk(t),(await Ep(t,e)).token}async function Gk(r){const{registrationPromise:e}=await wp(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(r){if(!r||!r.options)throw bd("App Configuration");if(!r.name)throw bd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw bd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function bd(r){return ws.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="installations",Yk="installations-internal",Xk=r=>{const e=r.getProvider("app").getImmediate(),t=Qk(e),s=xi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Jk=r=>{const e=r.getProvider("app").getImmediate(),t=xi(e,_E).getImmediate();return{getId:()=>Wk(t),getToken:o=>Kk(t,o)}};function Zk(){qn(new Rn(_E,Xk,"PUBLIC")),qn(new Rn(Yk,Jk,"PRIVATE"))}Zk();nn(tE,_p);nn(tE,_p,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="analytics",eP="firebase_id",tP="origin",nP=60*1e3,rP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Tp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new wc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},mn=new Is("analytics","Analytics",iP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(r){if(!r.startsWith(Tp)){const e=mn.create("invalid-gtag-resource",{gtagURL:r});return rn.warn(e.message),""}return r}function vE(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function oP(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function aP(r,e){const t=oP("firebase-js-sdk-policy",{createScriptURL:sP}),s=document.createElement("script"),o=`${Tp}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function lP(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function uP(r,e,t,s,o,l){const h=s[o];try{if(h)await e[h];else{const g=(await vE(t)).find(_=>_.measurementId===o);g&&await e[g.appId]}}catch(f){rn.error(f)}r("config",o,l)}async function cP(r,e,t,s,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await vE(t);for(const g of h){const _=f.find(T=>T.measurementId===g),E=_&&e[_.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",s,o||{})}catch(l){rn.error(l)}}function hP(r,e,t,s){async function o(l,...h){try{if(l==="event"){const[f,g]=h;await cP(r,e,t,f,g)}else if(l==="config"){const[f,g]=h;await uP(r,e,t,s,f,g)}else if(l==="consent"){const[f,g]=h;r("consent",f,g)}else if(l==="get"){const[f,g,_]=h;r("get",f,g,_)}else if(l==="set"){const[f]=h;r("set",f)}else r(l,...h)}catch(f){rn.error(f)}}return o}function dP(r,e,t,s,o){let l=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=hP(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function fP(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Tp)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=30,mP=1e3;class gP{constructor(e={},t=mP){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wE=new gP;function yP(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function _P(r){var e;const{appId:t,apiKey:s}=r,o={method:"GET",headers:yP(s)},l=rP.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let f="";try{const g=await h.json();!((e=g.error)===null||e===void 0)&&e.message&&(f=g.error.message)}catch{}throw mn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:f})}return h.json()}async function vP(r,e=wE,t){const{appId:s,apiKey:o,measurementId:l}=r.options;if(!s)throw mn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw mn.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new TP;return setTimeout(async()=>{f.abort()},nP),EE({appId:s,apiKey:o,measurementId:l},h,f,e)}async function EE(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=wE){var l;const{appId:h,measurementId:f}=r;try{await wP(s,e)}catch(g){if(f)return rn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:f};throw g}try{const g=await _P(r);return o.deleteThrottleMetadata(h),g}catch(g){const _=g;if(!EP(_)){if(o.deleteThrottleMetadata(h),f)return rn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:h,measurementId:f};throw g}const E=Number((l=_==null?void 0:_.customData)===null||l===void 0?void 0:l.httpStatus)===503?zg(t,o.intervalMillis,pP):zg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(h,T),rn.debug(`Calling attemptFetch again in ${E} millis`),EE(r,T,s,o)}}function wP(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),s(mn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function EP(r){if(!(r instanceof Kn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class TP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function IP(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const l=await e,h=Object.assign(Object.assign({},s),{send_to:l});r("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(){if(If())try{await Sf()}catch(r){return rn.warn(mn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return rn.warn(mn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AP(r,e,t,s,o,l,h){var f;const g=vP(r);g.then(b=>{t[b.measurementId]=b.appId,r.options.measurementId&&b.measurementId!==r.options.measurementId&&rn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>rn.error(b)),e.push(g);const _=SP().then(b=>{if(b)return s.getId()}),[E,T]=await Promise.all([g,_]);fP(l)||aP(l,E.measurementId),o("js",new Date);const C=(f=h==null?void 0:h.config)!==null&&f!==void 0?f:{};return C[tP]="firebase",C.update=!0,T!=null&&(C[eP]=T),o("config",E.measurementId,C),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e){this.app=e}_delete(){return delete Ka[this.app.options.appId],Promise.resolve()}}let Ka={},__=[];const v_={};let Md="dataLayer",RP="gtag",w_,TE,E_=!1;function kP(){const r=[];if(Tf()&&r.push("This is a browser extension environment."),L_()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=mn.create("invalid-analytics-context",{errorInfo:e});rn.warn(t.message)}}function PP(r,e,t){kP();const s=r.options.appId;if(!s)throw mn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)rn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mn.create("no-api-key");if(Ka[s]!=null)throw mn.create("already-exists",{id:s});if(!E_){lP(Md);const{wrappedGtag:l,gtagCore:h}=dP(Ka,__,v_,Md,RP);TE=l,w_=h,E_=!0}return Ka[s]=AP(r,__,v_,e,w_,Md,t),new CP(r)}function NP(r=Ec()){r=st(r);const e=xi(r,_c);return e.isInitialized()?e.getImmediate():xP(r)}function xP(r,e={}){const t=xi(r,_c);if(t.isInitialized()){const o=t.getImmediate();if(Ti(e,t.getOptions()))return o;throw mn.create("already-initialized")}return t.initialize({options:e})}async function DP(){if(Tf()||!L_()||!If())return!1;try{return await Sf()}catch{return!1}}function OP(r,e,t,s){r=st(r),IP(TE,Ka[r.app.options.appId],e,t,s).catch(o=>rn.error(o))}const T_="@firebase/analytics",I_="0.10.17";function VP(){qn(new Rn(_c,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return PP(s,o,t)},"PUBLIC")),qn(new Rn("analytics-internal",r,"PRIVATE")),nn(T_,I_),nn(T_,I_,"esm2017");function r(e){try{const t=e.getProvider(_c).getImmediate();return{logEvent:(s,o,l)=>OP(t,s,o,l)}}catch(t){throw mn.create("interop-component-reg-failed",{reason:t})}}}VP();const LP={apiKey:"AIzaSyCq6qS6nyYuWH-yLoFOjnrdiSZAyH3ei0U",authDomain:"time-based---otp-authenticator.firebaseapp.com",projectId:"time-based---otp-authenticator",storageBucket:"time-based---otp-authenticator.firebasestorage.app",messagingSenderId:"177998085204",appId:"1:177998085204:web:a112e912c3b3ca018581c1",measurementId:"G-2K9VC5SCXR"},qc=U_(LP),sl=W1(qc),ol=HR(qc);fk(qc);typeof window<"u"&&DP().then(r=>{r&&NP(qc)}).catch(r=>{console.debug("Analytics not supported in this environment:",r)});const S_=120*1e3,A_=60*1e3;async function bP(r,e){try{const s=await(await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:`Your Verification Code: ${e}`,_template:"box",_captcha:"false",Verification_Code:e,Expires_In:"2 Minutes",Instructions:"Use this 6-digit code to complete your login. It will expire in exactly 2 minutes. If you did not request this, you can ignore this email."})})).json();return console.log("[Email Dispatch Status]:",s),s}catch(t){return console.error("[Email Dispatch Network Error]:",t),{success:"false",message:t.message}}}async function IE(r){const e=r.trim().toLowerCase(),t=df(ol,"otps",e),s=await pf(t);if(s.exists()){const g=s.data();if(g.createdAt&&g.createdAt.toMillis){const _=Date.now()-g.createdAt.toMillis();if(_<A_){const E=Math.ceil((A_-_)/1e3);throw new Error(`Please wait ${E} seconds before requesting a new code.`)}}}const l=Math.floor(1e5+Math.random()*9e5).toString(),h=Date.now(),f=Qe.fromMillis(h+S_);return await mf(t,{email:e,otp:l,createdAt:Xu(),expiresAt:f,attempts:0,maxAttempts:5}),bP(e,l).catch(g=>console.warn("[Background Email Dispatch Notice]:",g)),{success:!0,expiresInMs:S_,message:"Verification code sent to your email inbox."}}async function MP(r,e){var C;const t=r.trim().toLowerCase(),s=e.trim(),o=df(ol,"otps",t),l=await pf(o);if(!l.exists())throw new Error("No active verification code found for this email. Please request a new code.");const h=l.data(),f=Date.now(),g=(C=h.expiresAt)!=null&&C.toMillis?h.expiresAt.toMillis():0;if(f>g)throw await Vd(o),new Error("This verification code has expired (2 minutes limit). Please request a new code.");if(h.attempts>=(h.maxAttempts||5))throw await Vd(o),new Error("Too many incorrect attempts. This OTP has been invalidated for security. Please request a new code.");if(h.otp!==s){await ik(o,{attempts:f_(1)});const b=(h.maxAttempts||5)-(h.attempts+1);throw new Error(`Incorrect verification code. ${b>0?b+" attempt(s) remaining.":"Code invalidated."}`)}await Vd(o);const _=`OTP_${btoa(t).replace(/[^a-zA-Z0-9]/g,"").slice(0,10)}#Auth2026!`;let E;try{E=await DS(sl,t,_)}catch(b){if(b.code==="auth/user-not-found"||b.code==="auth/invalid-credential"||b.code==="auth/wrong-password")try{E=await xS(sl,t,_)}catch(B){throw B.code==="auth/email-already-in-use"?new Error("Account exists with a different password. Please reset or contact admin."):B}else throw b}const T=E.user;try{const b=df(ol,"users",T.uid);(await pf(b)).exists()?await mf(b,{email:t,uid:T.uid,lastLoginAt:Xu(),loginCount:f_(1)},{merge:!0}):await mf(b,{email:t,uid:T.uid,createdAt:Xu(),lastLoginAt:Xu(),loginCount:1})}catch(b){console.warn("Firestore user profile sync notice:",b.message)}return{success:!0,user:T}}function FP(r,e){const t=$w(ol,"users");return sk(t,s=>{const o=[];s.forEach(l=>{o.push({id:l.id,...l.data()})}),o.sort((l,h)=>{var _,E;const f=(_=l.lastLoginAt)!=null&&_.toMillis?l.lastLoginAt.toMillis():0;return((E=h.lastLoginAt)!=null&&E.toMillis?h.lastLoginAt.toMillis():0)-f}),r(o)},s=>{console.error("Error listening to users collection:",s),e&&e(s)})}async function UP(){const r=$w(ol,"users"),e=await rk(r),t=[];return e.forEach(s=>{t.push({id:s.id,...s.data()})}),t.sort((s,o)=>{var f,g;const l=(f=s.lastLoginAt)!=null&&f.toMillis?s.lastLoginAt.toMillis():0;return((g=o.lastLoginAt)!=null&&g.toMillis?o.lastLoginAt.toMillis():0)-l}),t}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=r=>r==null?void 0:r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function zP(r,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:jP(r),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=r=>{let e="",t=!1;for(const s of r){if(s==="-"||s==="_"||s<=" "){t=e.length>0;continue}e.length===0?e+=s.toLowerCase():e+=t?s.toUpperCase():s,t=!1}return e};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=r=>{const e=BP(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Fd(r){return r!=null}function HP(r,e={}){var C,b;const t=e.attributeNames??{},s=B=>t[B]??B,o=r.size??r.width??cs.width,l=r.size??r.height??cs.height,h=((C=r.aliases)==null?void 0:C.filter(B=>typeof B=="string"&&B.trim()!=="").map(B=>`lucide-${B}`))??[],f=[...r.name?[`lucide-${r.name}`]:[],...h],g=((b=e.className)==null?void 0:b.split(" ").filter(Boolean))??[],_=e.includeDefaultClasses===!1?_f(...g):_f("lucide",...f,...g),E=e.absoluteStrokeWidth?Number(e.strokeWidth??cs["stroke-width"])*Number(r.size??r.width??cs.width)/Number(e.size??e.width??cs.width):e.strokeWidth??cs["stroke-width"];return["svg",{...Object.entries(cs).reduce((B,[G,$])=>(B[s(G)]=$,B),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&Fd(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&Fd(e.width)&&{[s("width")]:e.width},..."height"in e&&Fd(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:E,..._&&{[s("class")]:_},[s("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},r.node.map(B=>{const[G,$,de]=B,le=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...$}:$;return de?[G,le,de]:[G,le]})]}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function qP(r,e={}){return HP(r,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},KP=Re.createContext({}),GP=()=>Re.useContext(KP),QP=Re.forwardRef(({color:r,size:e,width:t,height:s,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:h,className:f="",children:g,iconNode:_=[],icon:E={node:_,aliases:[],size:24},...T},C)=>{const{size:b=24,strokeWidth:B=2,absoluteStrokeWidth:G=!1,nonScalingStroke:$=!1,color:de="currentColor",className:le=""}=GP()??{},ue=!!g||WP(T),[_e,Oe,Ie=[]]=qP(E,{color:r??de,width:t??e??b,height:s??e??b,strokeWidth:o??B,absoluteStrokeWidth:l??G,nonScalingStroke:h??$,className:_f(le,f),hasA11yProp:ue,attributes:T});return Re.createElement(_e,{ref:C,...Oe},[...Ie.map(([x,I])=>Re.createElement(x,I)),...Array.isArray(g)?g:[g]])});/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Gn(r,e=[],t=[]){const s=typeof r=="string"?zP(r,e,t):r,o=Re.forwardRef(({className:l,...h},f)=>Re.createElement(QP,{ref:f,icon:s,className:l,...h}));return s.name&&(o.displayName=$P(s.name)),o}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};SE.node;const YP=Gn(SE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};AE.node;const XP=Gn(AE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};CE.node;const RE=Gn(CE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};kE.node;const JP=Gn(kE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};PE.node;const ZP=Gn(PE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};NE.node;const eN=Gn(NE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE={name:"rotate-cw",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]};xE.node;const DE=Gn(xE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};OE.node;const tN=Gn(OE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};VE.node;const C_=Gn(VE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE={name:"user-check",size:24,node:[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};LE.node;const nN=Gn(LE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};bE.node;const Ud=Gn(bE);function rN({onOtpSent:r,initialEmail:e=""}){const[t,s]=Re.useState(e),[o,l]=Re.useState(!1),[h,f]=Re.useState(""),[g,_]=Re.useState(!1),E=C=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(C.trim()),T=async C=>{C.preventDefault(),f("");const b=t.trim().toLowerCase();if(!b){f("Please enter your email address.");return}if(!E(b)){f("Please enter a valid email address.");return}l(!0);try{const B=await IE(b);B&&B.success?r({email:b,expiresInMs:B.expiresInMs||12e4}):f("Unable to send verification code. Please try again.")}catch(B){console.error("Error sending OTP:",B),f(B.message||"Failed to send OTP. Please try again.")}finally{l(!1)}};return D.jsxs("div",{id:"email-step-view",className:"auth-form-container",children:[D.jsxs("div",{className:"brand-header",children:[D.jsx("h1",{className:"brand-title",children:"AuthVault"}),D.jsx("p",{className:"brand-tagline",children:g?"Initialize an encrypted vault with time-based verification.":"Zero-knowledge time-based verification. Direct to inbox."})]}),h&&D.jsxs("div",{className:"alert-box alert-error",id:"email-error-alert",role:"alert",children:[D.jsx(RE,{size:16,style:{flexShrink:0,marginTop:"2px"}}),D.jsx("span",{children:h})]}),D.jsxs("form",{onSubmit:T,noValidate:!0,className:"auth-form",children:[D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"email-input",className:"form-label",children:"Email"}),D.jsx("input",{id:"email-input",type:"email",className:"form-input",placeholder:"email",value:t,onChange:C=>{s(C.target.value),h&&f("")},disabled:o,autoFocus:!0,autoComplete:"email",required:!0})]}),D.jsx("div",{children:D.jsx("button",{id:"send-otp-btn",type:"submit",className:"btn-primary",disabled:o||!t.trim(),children:o?D.jsxs(D.Fragment,{children:[D.jsx("span",{className:"spinner","aria-hidden":"true"}),D.jsx("span",{children:"Sending token..."})]}):D.jsx("span",{children:g?"Create vault":"Sign in"})})}),D.jsx("div",{className:"secondary-action-wrapper",children:D.jsx("button",{id:"toggle-vault-mode-btn",type:"button",className:"btn-link",onClick:()=>{_(!g),f("")},disabled:o,children:g?"Sign in to existing vault":"Create vault"})})]})]})}function iN({email:r,expiresInMs:e=12e4,onBack:t,onVerified:s}){const[o,l]=Re.useState(["","","","","",""]),[h,f]=Re.useState(!1),[g,_]=Re.useState(!1),[E,T]=Re.useState(""),[C,b]=Re.useState(""),[B,G]=Re.useState(!1),$=Math.floor(e/1e3),[de,le]=Re.useState($),[ue,_e]=Re.useState(!1),[Oe,Ie]=Re.useState(60),x=Re.useRef([]);Re.useEffect(()=>{if(de<=0){_e(!0);return}const ve=setInterval(()=>{le(he=>he<=1?(_e(!0),0):he-1)},1e3);return()=>clearInterval(ve)},[de]),Re.useEffect(()=>{if(Oe<=0)return;const ve=setInterval(()=>{Ie(he=>he>0?he-1:0)},1e3);return()=>clearInterval(ve)},[Oe]);const I=ve=>{const he=Math.floor(ve/60),fe=ve%60;return`${String(he).padStart(2,"0")}:${String(fe).padStart(2,"0")}`},k=()=>{G(!0),setTimeout(()=>G(!1),300)},R=(ve,he)=>{var ee;if(ue)return;const fe=he.replace(/\D/g,"");if(!fe&&he!=="")return;const X=[...o];X[ve]=fe?fe.slice(-1):"",l(X),T(""),fe&&ve<5&&((ee=x.current[ve+1])==null||ee.focus());const ie=X.join("");ie.length===6&&A(ie)},N=(ve,he)=>{var fe;he.key==="Backspace"&&!o[ve]&&ve>0&&((fe=x.current[ve-1])==null||fe.focus())},V=ve=>{var fe,X;if(ue)return;ve.preventDefault();const he=ve.clipboardData.getData("text").trim().replace(/\D/g,"");if(he.length>=6){const ie=he.slice(0,6).split("");l(ie),(fe=x.current[5])==null||fe.focus(),A(ie.join(""))}else if(he.length>0){const ie=[...o];he.split("").forEach((L,H)=>{H<6&&(ie[H]=L)}),l(ie);const ee=Math.min(he.length,5);(X=x.current[ee])==null||X.focus()}},A=async ve=>{const he=ve||o.join("");if(he.length!==6){T("Please enter all 6 digits."),k();return}if(ue){T("Security token expired (2 min limit). Please request a fresh token."),k();return}f(!0),T("");try{const fe=await MP(r,he);fe&&fe.success&&s(fe.user)}catch(fe){console.error("Error verifying OTP:",fe),T(fe.message||"Invalid verification token. Please try again."),k()}finally{f(!1)}},Ve=async()=>{var ve;if(!(g||Oe>0)){_(!0),T("");try{const he=await IE(r);he&&he.success&&(l(["","","","","",""]),le(Math.floor((he.expiresInMs||12e4)/1e3)),_e(!1),Ie(60),(ve=x.current[0])==null||ve.focus(),b("New security token dispatched to your email."))}catch(he){console.error("Resend error:",he),T(he.message||"Failed to dispatch new token.")}finally{_(!1)}}};return D.jsxs("div",{id:"otp-step-view",className:"auth-form-container",children:[D.jsxs("div",{className:"brand-header",children:[D.jsx("h1",{className:"brand-title",children:"AuthVault"}),D.jsxs("p",{className:"brand-tagline",children:["Enter the 6-digit security token dispatched to ",D.jsx("span",{className:"highlight-text",children:r})]})]}),C&&D.jsx("div",{className:"alert-box alert-success",id:"info-message-alert",children:D.jsx("span",{children:C})}),E&&D.jsxs("div",{className:"alert-box alert-error",id:"otp-error-alert",role:"alert",children:[D.jsx(RE,{size:16,style:{flexShrink:0,marginTop:"2px"}}),D.jsx("span",{children:E})]}),D.jsxs("div",{className:"timer-bar",id:"timer-banner",children:[D.jsxs("div",{className:"timer-left",children:[D.jsx("span",{children:"Token validity:"}),D.jsx("span",{className:"timer-countdown",id:"countdown-display",children:I(de)})]}),D.jsx("div",{children:ue?D.jsxs("span",{className:"timer-badge expired",id:"badge-expired",children:[D.jsx("span",{className:"status-dot"}),"Expired"]}):D.jsxs("span",{className:"timer-badge active",id:"badge-active",children:[D.jsx("span",{className:"status-dot"}),"Active"]})})]}),D.jsx("div",{className:`otp-container ${B?"shake":""}`,onPaste:V,children:o.map((ve,he)=>D.jsx("input",{ref:fe=>x.current[he]=fe,id:`otp-digit-${he}`,type:"text",inputMode:"numeric",maxLength:1,className:`otp-box ${ve?"filled":""} ${E?"error":""}`,value:ve,onChange:fe=>R(he,fe.target.value),onKeyDown:fe=>N(he,fe),disabled:h||ue,autoFocus:he===0,"aria-label":`Digit ${he+1}`},he))}),D.jsx("div",{children:D.jsx("button",{id:"verify-otp-btn",type:"button",className:"btn-primary",onClick:()=>A(),disabled:h||ue||o.join("").length!==6,children:h?D.jsxs(D.Fragment,{children:[D.jsx("span",{className:"spinner","aria-hidden":"true"}),D.jsx("span",{children:"Verifying token..."})]}):D.jsx("span",{children:"Verify & Enter"})})}),D.jsxs("div",{className:"otp-actions-row",children:[D.jsx("button",{id:"back-to-email-btn",type:"button",className:"btn-link",onClick:t,disabled:h,children:"Change email"}),D.jsxs("button",{id:"resend-otp-btn",type:"button",className:"btn-link",onClick:Ve,disabled:g||!ue&&Oe>0,children:[g&&D.jsx(DE,{size:13,className:"spinner"}),D.jsx("span",{children:g?"Dispatching...":Oe>0&&!ue?`Resend token (${Oe}s)`:"Resend token"})]})]})]})}function ME({user:r}){var s;const e=async()=>{try{await dv(sl)}catch(o){console.error("Error signing out:",o)}},t=(s=r==null?void 0:r.metadata)!=null&&s.creationTime?new Date(r.metadata.creationTime).toLocaleString():new Date().toLocaleTimeString();return D.jsxs("div",{id:"success-dashboard-view",className:"session-container",children:[D.jsxs("div",{className:"brand-header",children:[D.jsx("h1",{className:"brand-title",children:"AuthVault"}),D.jsxs("div",{className:"session-badge",children:[D.jsx("span",{className:"status-dot"}),D.jsx("span",{children:"Session Active"})]}),D.jsx("p",{className:"brand-tagline",children:"Vault clearance granted. Secure session established via time-based token."})]}),D.jsxs("div",{className:"session-props-table",id:"user-profile-box",children:[D.jsxs("div",{className:"session-prop-row",children:[D.jsx("span",{className:"prop-label",children:"Identity"}),D.jsx("span",{className:"prop-value",id:"profile-email",children:(r==null?void 0:r.email)||"Authenticated Operator"})]}),D.jsxs("div",{className:"session-prop-row",children:[D.jsx("span",{className:"prop-label",children:"UID"}),D.jsx("span",{className:"prop-value",id:"profile-uid",style:{maxWidth:"240px",overflow:"hidden",textOverflow:"ellipsis"},title:r==null?void 0:r.uid,children:r==null?void 0:r.uid})]}),D.jsxs("div",{className:"session-prop-row",children:[D.jsx("span",{className:"prop-label",children:"Clearance Type"}),D.jsx("span",{className:"prop-value",id:"profile-auth-method",children:"Time-Based OTP (Verified)"})]}),D.jsxs("div",{className:"session-prop-row",children:[D.jsx("span",{className:"prop-label",children:"Timestamp"}),D.jsx("span",{className:"prop-value",children:t})]})]}),D.jsx("button",{id:"logout-btn",type:"button",className:"btn-secondary",onClick:e,children:D.jsx("span",{children:"Disconnect Session"})})]})}function sN({user:r}){const[e,t]=Re.useState([]),[s,o]=Re.useState(!0),[l,h]=Re.useState(!1),[f,g]=Re.useState(""),[_,E]=Re.useState(""),[T,C]=Re.useState("lastLogin"),[b,B]=Re.useState(null),[G,$]=Re.useState("monitoring");Re.useEffect(()=>{o(!0);const R=FP(N=>{t(N),o(!1),g("")},N=>{console.error("Admin subscription error:",N),g("Failed to load user monitoring data. Check Firestore permissions."),o(!1)});return()=>R()},[]);const de=async()=>{h(!0);try{const R=await UP();t(R),g("")}catch(R){console.error("Refresh error:",R),g("Error refreshing users list.")}finally{h(!1)}},le=R=>{R&&(navigator.clipboard.writeText(R),B(R),setTimeout(()=>B(null),2e3))},ue=async()=>{try{await dv(sl)}catch(R){console.error("Error signing out:",R)}},_e=R=>{if(!R)return"Never / Pending";const N=R.toDate?R.toDate():new Date(R);return isNaN(N.getTime())?"Unknown":N.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},Oe=R=>{if(!R)return"N/A";const N=R.toDate?R.toDate():new Date(R);if(isNaN(N.getTime()))return"N/A";const V=Date.now()-N.getTime(),A=Math.floor(V/1e3);if(A<60)return"Just now";const Ve=Math.floor(A/60);if(Ve<60)return`${Ve}m ago`;const ve=Math.floor(Ve/60);if(ve<24)return`${ve}h ago`;const he=Math.floor(ve/24);return he<7?`${he}d ago`:N.toLocaleDateString()},Ie=Re.useMemo(()=>{const R=_.trim().toLowerCase();let N=e.filter(V=>{const A=(V.email||"").toLowerCase(),Ve=(V.uid||V.id||"").toLowerCase();return A.includes(R)||Ve.includes(R)});return N.sort((V,A)=>{var Ve,ve,he,fe;if(T==="lastLogin"){const X=(Ve=V.lastLoginAt)!=null&&Ve.toMillis?V.lastLoginAt.toMillis():0;return((ve=A.lastLoginAt)!=null&&ve.toMillis?A.lastLoginAt.toMillis():0)-X}if(T==="created"){const X=(he=V.createdAt)!=null&&he.toMillis?V.createdAt.toMillis():0;return((fe=A.createdAt)!=null&&fe.toMillis?A.createdAt.toMillis():0)-X}return T==="logins"?(A.loginCount||1)-(V.loginCount||1):T==="email"?(V.email||"").localeCompare(A.email||""):0}),N},[e,_,T]),x=e.length,I=e.reduce((R,N)=>R+(N.loginCount||1),0),k=e.filter(R=>{if(!R.lastLoginAt)return!1;const N=R.lastLoginAt.toMillis?R.lastLoginAt.toMillis():0;return Date.now()-N<1440*60*1e3}).length;return D.jsxs("div",{className:"admin-container",id:"admin-dashboard-view",children:[D.jsxs("header",{className:"admin-header",children:[D.jsxs("div",{className:"admin-branding",children:[D.jsxs("div",{className:"admin-title-row",children:[D.jsx("h1",{className:"brand-title",children:"AuthVault"}),D.jsx("span",{className:"admin-tag-badge",children:"ADMIN CONSOLE"})]}),D.jsxs("div",{className:"admin-status-row",children:[D.jsx("span",{className:"status-dot pulsing"}),D.jsx("span",{className:"admin-status-text",children:"Live User Monitoring • Realtime Stream Active"})]})]}),D.jsxs("div",{className:"admin-header-actions",children:[D.jsxs("div",{className:"admin-view-toggle",children:[D.jsxs("button",{type:"button",className:`toggle-tab-btn ${G==="monitoring"?"active":""}`,onClick:()=>$("monitoring"),children:[D.jsx(Ud,{size:14}),D.jsxs("span",{children:["User Monitor (",x,")"]})]}),D.jsxs("button",{type:"button",className:`toggle-tab-btn ${G==="my-session"?"active":""}`,onClick:()=>$("my-session"),children:[D.jsx(C_,{size:14}),D.jsx("span",{children:"My Session"})]})]}),D.jsxs("button",{type:"button",className:"btn-secondary btn-compact",onClick:ue,title:"Log out of admin session",children:[D.jsx(eN,{size:13}),D.jsx("span",{children:"Disconnect"})]})]})]}),G==="my-session"?D.jsx("div",{className:"admin-session-wrapper",children:D.jsx(ME,{user:r})}):D.jsxs("div",{className:"admin-content",children:[D.jsxs("div",{className:"admin-metrics-grid",children:[D.jsxs("div",{className:"metric-card",children:[D.jsx("div",{className:"metric-icon-wrap",children:D.jsx(Ud,{size:18})}),D.jsxs("div",{className:"metric-details",children:[D.jsx("span",{className:"metric-label",children:"Registered Users"}),D.jsx("span",{className:"metric-value",children:s?"...":x})]})]}),D.jsxs("div",{className:"metric-card",children:[D.jsx("div",{className:"metric-icon-wrap",children:D.jsx(YP,{size:18})}),D.jsxs("div",{className:"metric-details",children:[D.jsx("span",{className:"metric-label",children:"Total Authentications"}),D.jsx("span",{className:"metric-value",children:s?"...":I})]})]}),D.jsxs("div",{className:"metric-card",children:[D.jsx("div",{className:"metric-icon-wrap",children:D.jsx(JP,{size:18})}),D.jsxs("div",{className:"metric-details",children:[D.jsx("span",{className:"metric-label",children:"Active (Last 24h)"}),D.jsx("span",{className:"metric-value",children:s?"...":k})]})]}),D.jsxs("div",{className:"metric-card",children:[D.jsx("div",{className:"metric-icon-wrap",children:D.jsx(C_,{size:18})}),D.jsxs("div",{className:"metric-details",children:[D.jsx("span",{className:"metric-label",children:"Security Protocol"}),D.jsx("span",{className:"metric-subtext",children:"Time-Based OTP (2m TTL)"})]})]})]}),D.jsxs("div",{className:"admin-toolbar",children:[D.jsxs("div",{className:"search-box-wrapper",children:[D.jsx(tN,{size:14,className:"search-icon"}),D.jsx("input",{type:"text",className:"admin-search-input",placeholder:"Filter by email or UID...",value:_,onChange:R=>E(R.target.value)}),_&&D.jsx("button",{type:"button",className:"clear-search-btn",onClick:()=>E(""),children:"✕"})]}),D.jsxs("div",{className:"toolbar-controls-right",children:[D.jsxs("div",{className:"sort-wrapper",children:[D.jsx("label",{htmlFor:"admin-sort-select",className:"sort-label",children:"Sort:"}),D.jsxs("select",{id:"admin-sort-select",className:"admin-select",value:T,onChange:R=>C(R.target.value),children:[D.jsx("option",{value:"lastLogin",children:"Latest Login"}),D.jsx("option",{value:"created",children:"First Registered"}),D.jsx("option",{value:"logins",children:"Most Active (Logins)"}),D.jsx("option",{value:"email",children:"Email (A-Z)"})]})]}),D.jsxs("button",{type:"button",className:"btn-secondary btn-compact",onClick:de,disabled:l,title:"Force refresh from Cloud Firestore",children:[D.jsx(DE,{size:13,className:l?"spinner":""}),D.jsx("span",{children:l?"Syncing...":"Refresh"})]})]})]}),f&&D.jsx("div",{className:"alert-box alert-error",style:{marginBottom:"20px"},children:D.jsx("span",{children:f})}),D.jsx("div",{className:"admin-table-container",children:s?D.jsxs("div",{className:"admin-loading-state",children:[D.jsx("div",{className:"spinner spinner-light",style:{width:"22px",height:"22px"}}),D.jsx("span",{children:"Loading monitored accounts from Firestore..."})]}):Ie.length===0?D.jsxs("div",{className:"admin-empty-state",children:[D.jsx(Ud,{size:32,style:{opacity:.4,marginBottom:"12px"}}),D.jsx("p",{children:"No user records matched your criteria."}),_&&D.jsx("button",{type:"button",className:"btn-link",style:{marginTop:"8px"},onClick:()=>E(""),children:"Clear search filter"})]}):D.jsx("div",{className:"table-responsive",children:D.jsxs("table",{className:"admin-table",children:[D.jsx("thead",{children:D.jsxs("tr",{children:[D.jsx("th",{children:"User / Identity"}),D.jsx("th",{children:"UID"}),D.jsx("th",{children:"Last Login"}),D.jsx("th",{children:"Created"}),D.jsx("th",{children:"Total Logins"}),D.jsx("th",{children:"Status"})]})}),D.jsx("tbody",{children:Ie.map(R=>{var Ve;const N=((Ve=R.email)==null?void 0:Ve.toLowerCase())==="adityaraaaj431@gmail.com",V=R.uid||R.id,A=b===V;return D.jsxs("tr",{className:N?"admin-row":"",children:[D.jsxs("td",{className:"user-identity-cell",children:[D.jsx("div",{className:"user-avatar-badge",children:D.jsx(nN,{size:14})}),D.jsxs("div",{className:"user-text-info",children:[D.jsx("span",{className:"user-email-text",children:R.email||"Anonymous Operator"}),N&&D.jsx("span",{className:"admin-badge-inline",children:"Primary Admin"})]})]}),D.jsx("td",{className:"uid-cell",children:D.jsxs("button",{type:"button",className:"uid-copy-btn",onClick:()=>le(V),title:"Click to copy UID",children:[D.jsxs("span",{className:"monospace-text",children:[V.slice(0,10),"..."]}),A?D.jsx(XP,{size:12,className:"text-success"}):D.jsx(ZP,{size:12,className:"copy-icon"})]})}),D.jsxs("td",{className:"timestamp-cell",children:[D.jsx("div",{className:"time-primary",children:Oe(R.lastLoginAt)}),D.jsx("div",{className:"time-secondary",children:_e(R.lastLoginAt)})]}),D.jsx("td",{className:"timestamp-cell",children:D.jsx("div",{className:"time-secondary",children:_e(R.createdAt)})}),D.jsx("td",{className:"logins-cell",children:D.jsxs("span",{className:"logins-count-badge",children:[R.loginCount||1," ",R.loginCount===1?"login":"logins"]})}),D.jsx("td",{className:"status-cell",children:D.jsxs("span",{className:"active-status-pill",children:[D.jsx("span",{className:"status-dot"}),"Verified"]})})]},V)})})]})})}),D.jsxs("div",{className:"admin-footer-bar",children:[D.jsxs("span",{children:["Surveillance scope: ",D.jsxs("strong",{style:{color:"var(--accent-gold)"},children:["Cloud Firestore (",x," users)"]})]}),D.jsx("span",{children:"Zero-Knowledge One-Time Password Engine"})]})]})]})}const oN="adityaraaaj431@gmail.com";function aN(){var C;const[r,e]=Re.useState(null),[t,s]=Re.useState(!0),[o,l]=Re.useState("email"),[h,f]=Re.useState({email:"",expiresInMs:12e4});Re.useEffect(()=>{const b=LS(sl,B=>{e(B),s(!1)});return()=>b()},[]);const g=b=>{f(b),l("otp")},_=()=>{l("email")},E=b=>{b&&e(b)},T=((C=r==null?void 0:r.email)==null?void 0:C.toLowerCase())===oN.toLowerCase();return D.jsx("main",{className:`app-container ${T?"admin-layout":""}`,children:D.jsx("div",{className:`auth-wrapper ${T?"auth-wrapper-admin":""}`,children:t?D.jsxs("div",{style:{padding:"40px 0"},children:[D.jsx("div",{className:"spinner spinner-light",style:{width:"20px",height:"20px",marginBottom:"12px"}}),D.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px"},children:"Initializing authentication system..."})]}):r?T?D.jsx(sN,{user:r}):D.jsx(ME,{user:r}):o==="email"?D.jsx(rN,{onOtpSent:g,initialEmail:h.email}):D.jsx(iN,{email:h.email,expiresInMs:h.expiresInMs,onBack:_,onVerified:E})})})}X0.createRoot(document.getElementById("root")).render(D.jsx(H0.StrictMode,{children:D.jsx(aN,{})}));
