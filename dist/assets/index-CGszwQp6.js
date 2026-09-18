(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function mv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var hd={exports:{}},Da={},dd={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function N0(){if(Eg)return De;Eg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.iterator;function k(w){return w===null||typeof w!="object"?null:(w=I&&w[I]||w["@@iterator"],typeof w=="function"?w:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,X={};function $(w,D,H){this.props=w,this.context=D,this.refs=X,this.updater=H||j}$.prototype.isReactComponent={},$.prototype.setState=function(w,D){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,D,"setState")},$.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function me(){}me.prototype=$.prototype;function fe(w,D,H){this.props=w,this.context=D,this.refs=X,this.updater=H||j}var ce=fe.prototype=new me;ce.constructor=fe,W(ce,$.prototype),ce.isPureReactComponent=!0;var Se=Array.isArray,Me=Object.prototype.hasOwnProperty,ke={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function S(w,D,H){var ee,te={},se=null,ie=null;if(D!=null)for(ee in D.ref!==void 0&&(ie=D.ref),D.key!==void 0&&(se=""+D.key),D)Me.call(D,ee)&&!O.hasOwnProperty(ee)&&(te[ee]=D[ee]);var oe=arguments.length-2;if(oe===1)te.children=H;else if(1<oe){for(var ve=Array(oe),Pe=0;Pe<oe;Pe++)ve[Pe]=arguments[Pe+2];te.children=ve}if(w&&w.defaultProps)for(ee in oe=w.defaultProps,oe)te[ee]===void 0&&(te[ee]=oe[ee]);return{$$typeof:r,type:w,key:se,ref:ie,props:te,_owner:ke.current}}function R(w,D){return{$$typeof:r,type:w.type,key:D,ref:w.ref,props:w.props,_owner:w._owner}}function x(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function M(w){var D={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(H){return D[H]})}var b=/\/+/g;function C(w,D){return typeof w=="object"&&w!==null&&w.key!=null?M(""+w.key):D.toString(36)}function Ke(w,D,H,ee,te){var se=typeof w;(se==="undefined"||se==="boolean")&&(w=null);var ie=!1;if(w===null)ie=!0;else switch(se){case"string":case"number":ie=!0;break;case"object":switch(w.$$typeof){case r:case e:ie=!0}}if(ie)return ie=w,te=te(ie),w=ee===""?"."+C(ie,0):ee,Se(te)?(H="",w!=null&&(H=w.replace(b,"$&/")+"/"),Ke(te,D,H,"",function(Pe){return Pe})):te!=null&&(x(te)&&(te=R(te,H+(!te.key||ie&&ie.key===te.key?"":(""+te.key).replace(b,"$&/")+"/")+w)),D.push(te)),1;if(ie=0,ee=ee===""?".":ee+":",Se(w))for(var oe=0;oe<w.length;oe++){se=w[oe];var ve=ee+C(se,oe);ie+=Ke(se,D,H,ve,te)}else if(ve=k(w),typeof ve=="function")for(w=ve.call(w),oe=0;!(se=w.next()).done;)se=se.value,ve=ee+C(se,oe++),ie+=Ke(se,D,H,ve,te);else if(se==="object")throw D=String(w),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return ie}function tt(w,D,H){if(w==null)return w;var ee=[],te=0;return Ke(w,ee,"","",function(se){return D.call(H,se,te++)}),ee}function ct(w){if(w._status===-1){var D=w._result;D=D(),D.then(function(H){(w._status===0||w._status===-1)&&(w._status=1,w._result=H)},function(H){(w._status===0||w._status===-1)&&(w._status=2,w._result=H)}),w._status===-1&&(w._status=0,w._result=D)}if(w._status===1)return w._result.default;throw w._result}var ze={current:null},re={transition:null},ge={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:re,ReactCurrentOwner:ke};function N(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:tt,forEach:function(w,D,H){tt(w,function(){D.apply(this,arguments)},H)},count:function(w){var D=0;return tt(w,function(){D++}),D},toArray:function(w){return tt(w,function(D){return D})||[]},only:function(w){if(!x(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},De.Component=$,De.Fragment=t,De.Profiler=o,De.PureComponent=fe,De.StrictMode=s,De.Suspense=g,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,De.act=N,De.cloneElement=function(w,D,H){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var ee=W({},w.props),te=w.key,se=w.ref,ie=w._owner;if(D!=null){if(D.ref!==void 0&&(se=D.ref,ie=ke.current),D.key!==void 0&&(te=""+D.key),w.type&&w.type.defaultProps)var oe=w.type.defaultProps;for(ve in D)Me.call(D,ve)&&!O.hasOwnProperty(ve)&&(ee[ve]=D[ve]===void 0&&oe!==void 0?oe[ve]:D[ve])}var ve=arguments.length-2;if(ve===1)ee.children=H;else if(1<ve){oe=Array(ve);for(var Pe=0;Pe<ve;Pe++)oe[Pe]=arguments[Pe+2];ee.children=oe}return{$$typeof:r,type:w.type,key:te,ref:se,props:ee,_owner:ie}},De.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},De.createElement=S,De.createFactory=function(w){var D=S.bind(null,w);return D.type=w,D},De.createRef=function(){return{current:null}},De.forwardRef=function(w){return{$$typeof:f,render:w}},De.isValidElement=x,De.lazy=function(w){return{$$typeof:T,_payload:{_status:-1,_result:w},_init:ct}},De.memo=function(w,D){return{$$typeof:v,type:w,compare:D===void 0?null:D}},De.startTransition=function(w){var D=re.transition;re.transition={};try{w()}finally{re.transition=D}},De.unstable_act=N,De.useCallback=function(w,D){return ze.current.useCallback(w,D)},De.useContext=function(w){return ze.current.useContext(w)},De.useDebugValue=function(){},De.useDeferredValue=function(w){return ze.current.useDeferredValue(w)},De.useEffect=function(w,D){return ze.current.useEffect(w,D)},De.useId=function(){return ze.current.useId()},De.useImperativeHandle=function(w,D,H){return ze.current.useImperativeHandle(w,D,H)},De.useInsertionEffect=function(w,D){return ze.current.useInsertionEffect(w,D)},De.useLayoutEffect=function(w,D){return ze.current.useLayoutEffect(w,D)},De.useMemo=function(w,D){return ze.current.useMemo(w,D)},De.useReducer=function(w,D,H){return ze.current.useReducer(w,D,H)},De.useRef=function(w){return ze.current.useRef(w)},De.useState=function(w){return ze.current.useState(w)},De.useSyncExternalStore=function(w,D,H){return ze.current.useSyncExternalStore(w,D,H)},De.useTransition=function(){return ze.current.useTransition()},De.version="18.3.1",De}var Tg;function df(){return Tg||(Tg=1,dd.exports=N0()),dd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function x0(){if(Ig)return Da;Ig=1;var r=df(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,v){var T,I={},k=null,j=null;v!==void 0&&(k=""+v),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(j=g.ref);for(T in g)s.call(g,T)&&!l.hasOwnProperty(T)&&(I[T]=g[T]);if(f&&f.defaultProps)for(T in g=f.defaultProps,g)I[T]===void 0&&(I[T]=g[T]);return{$$typeof:e,type:f,key:k,ref:j,props:I,_owner:o.current}}return Da.Fragment=t,Da.jsx=h,Da.jsxs=h,Da}var Sg;function D0(){return Sg||(Sg=1,hd.exports=x0()),hd.exports}var q=D0(),qe=df();const O0=mv(qe);var xu={},fd={exports:{}},cn={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function V0(){return Ag||(Ag=1,(function(r){function e(re,ge){var N=re.length;re.push(ge);e:for(;0<N;){var w=N-1>>>1,D=re[w];if(0<o(D,ge))re[w]=ge,re[N]=D,N=w;else break e}}function t(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var ge=re[0],N=re.pop();if(N!==ge){re[0]=N;e:for(var w=0,D=re.length,H=D>>>1;w<H;){var ee=2*(w+1)-1,te=re[ee],se=ee+1,ie=re[se];if(0>o(te,N))se<D&&0>o(ie,te)?(re[w]=ie,re[se]=N,w=se):(re[w]=te,re[ee]=N,w=ee);else if(se<D&&0>o(ie,N))re[w]=ie,re[se]=N,w=se;else break e}}return ge}function o(re,ge){var N=re.sortIndex-ge.sortIndex;return N!==0?N:re.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],v=[],T=1,I=null,k=3,j=!1,W=!1,X=!1,$=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ce(re){for(var ge=t(v);ge!==null;){if(ge.callback===null)s(v);else if(ge.startTime<=re)s(v),ge.sortIndex=ge.expirationTime,e(g,ge);else break;ge=t(v)}}function Se(re){if(X=!1,ce(re),!W)if(t(g)!==null)W=!0,ct(Me);else{var ge=t(v);ge!==null&&ze(Se,ge.startTime-re)}}function Me(re,ge){W=!1,X&&(X=!1,me(S),S=-1),j=!0;var N=k;try{for(ce(ge),I=t(g);I!==null&&(!(I.expirationTime>ge)||re&&!M());){var w=I.callback;if(typeof w=="function"){I.callback=null,k=I.priorityLevel;var D=w(I.expirationTime<=ge);ge=r.unstable_now(),typeof D=="function"?I.callback=D:I===t(g)&&s(g),ce(ge)}else s(g);I=t(g)}if(I!==null)var H=!0;else{var ee=t(v);ee!==null&&ze(Se,ee.startTime-ge),H=!1}return H}finally{I=null,k=N,j=!1}}var ke=!1,O=null,S=-1,R=5,x=-1;function M(){return!(r.unstable_now()-x<R)}function b(){if(O!==null){var re=r.unstable_now();x=re;var ge=!0;try{ge=O(!0,re)}finally{ge?C():(ke=!1,O=null)}}else ke=!1}var C;if(typeof fe=="function")C=function(){fe(b)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,tt=Ke.port2;Ke.port1.onmessage=b,C=function(){tt.postMessage(null)}}else C=function(){$(b,0)};function ct(re){O=re,ke||(ke=!0,C())}function ze(re,ge){S=$(function(){re(r.unstable_now())},ge)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(re){re.callback=null},r.unstable_continueExecution=function(){W||j||(W=!0,ct(Me))},r.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<re?Math.floor(1e3/re):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(re){switch(k){case 1:case 2:case 3:var ge=3;break;default:ge=k}var N=k;k=ge;try{return re()}finally{k=N}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(re,ge){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var N=k;k=re;try{return ge()}finally{k=N}},r.unstable_scheduleCallback=function(re,ge,N){var w=r.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?w+N:w):N=w,re){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=N+D,re={id:T++,callback:ge,priorityLevel:re,startTime:N,expirationTime:D,sortIndex:-1},N>w?(re.sortIndex=N,e(v,re),t(g)===null&&re===t(v)&&(X?(me(S),S=-1):X=!0,ze(Se,N-w))):(re.sortIndex=D,e(g,re),W||j||(W=!0,ct(Me))),re},r.unstable_shouldYield=M,r.unstable_wrapCallback=function(re){var ge=k;return function(){var N=k;k=ge;try{return re.apply(this,arguments)}finally{k=N}}}})(md)),md}var Cg;function M0(){return Cg||(Cg=1,pd.exports=V0()),pd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function b0(){if(kg)return cn;kg=1;var r=df(),e=M0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},I={};function k(n){return g.call(I,n)?!0:g.call(T,n)?!1:v.test(n)?I[n]=!0:(T[n]=!0,!1)}function j(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W(n,i,a,c){if(i===null||typeof i>"u"||j(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function X(n,i,a,c,d,m,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=_}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];$[i]=new X(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function fe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(me,fe);$[i]=new X(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(me,fe);$[i]=new X(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(me,fe);$[i]=new X(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ce(n,i,a,c){var d=$.hasOwnProperty(i)?$[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(W(i,a,d,c)&&(a=null),c||d===null?k(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Se=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Me=Symbol.for("react.element"),ke=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),M=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),tt=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),re=Symbol.iterator;function ge(n){return n===null||typeof n!="object"?null:(n=re&&n[re]||n["@@iterator"],typeof n=="function"?n:null)}var N=Object.assign,w;function D(n){if(w===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+n}var H=!1;function ee(n,i){if(!n||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var c=z}Reflect.construct(n,[],i)}else{try{i.call()}catch(z){c=z}n.call(i.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),m=c.stack.split(`
`),_=d.length-1,A=m.length-1;1<=_&&0<=A&&d[_]!==m[A];)A--;for(;1<=_&&0<=A;_--,A--)if(d[_]!==m[A]){if(_!==1||A!==1)do if(_--,A--,0>A||d[_]!==m[A]){var P=`
`+d[_].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=_&&0<=A);break}}}finally{H=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?D(n):""}function te(n){switch(n.tag){case 5:return D(n.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case ke:return"Portal";case R:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case Ke:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case M:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case b:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case tt:return i=n.displayName||null,i!==null?i:se(n.type)||"Memo";case ct:i=n._payload,n=n._init;try{return se(n(i))}catch{}}return null}function ie(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ve(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Pe(n){var i=ve(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,m.call(this,_)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function be(n){n._valueTracker||(n._valueTracker=Pe(n))}function He(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ve(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Qe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ne(n,i){var a=i.checked;return N({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ht(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=oe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ot(n,i){i=i.checked,i!=null&&ce(n,"checked",i,!1)}function Vt(n,i){Ot(n,i);var a=oe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?tn(n,i.type,a):i.hasOwnProperty("defaultValue")&&tn(n,i.type,oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function en(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function tn(n,i,a){(i!=="number"||Qe(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var gt=Array.isArray;function Fn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+oe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function qi(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return N({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Xr(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(gt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:oe(a)}}function Rr(n,i){var a=oe(i.value),c=oe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ki(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Un,Jr=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Un=Un||document.createElement("div"),Un.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Un.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function jn(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pr=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(n){Pr.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),zn[i]=zn[n]})});function Gi(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||zn.hasOwnProperty(n)&&zn[n]?(""+i).trim():i+"px"}function Ho(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Gi(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Wo=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qo(n,i){if(i){if(Wo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ko(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=null;function bs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ls=null,Cn=null,lr=null;function Fs(n){if(n=ya(n)){if(typeof Ls!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ql(i),Ls(n.stateNode,n.type,i))}}function ur(n){Cn?lr?lr.push(n):lr=[n]:Cn=n}function Go(){if(Cn){var n=Cn,i=lr;if(lr=Cn=null,Fs(n),i)for(n=0;n<i.length;n++)Fs(i[n])}}function Yi(n,i){return n(i)}function Qo(){}var Nr=!1;function Yo(n,i,a){if(Nr)return n(i,a);Nr=!0;try{return Yi(n,i,a)}finally{Nr=!1,(Cn!==null||lr!==null)&&(Qo(),Go())}}function ft(n,i){var a=n.stateNode;if(a===null)return null;var c=ql(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Us=!1;if(f)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Us=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Us=!1}function Xi(n,i,a,c,d,m,_,A,P){var z=Array.prototype.slice.call(arguments,3);try{i.apply(a,z)}catch(Y){this.onError(Y)}}var Ji=!1,js=null,$n=!1,Xo=null,Uc={onError:function(n){Ji=!0,js=n}};function zs(n,i,a,c,d,m,_,A,P){Ji=!1,js=null,Xi.apply(Uc,arguments)}function yl(n,i,a,c,d,m,_,A,P){if(zs.apply(this,arguments),Ji){if(Ji){var z=js;Ji=!1,js=null}else throw Error(t(198));$n||($n=!0,Xo=z)}}function Hn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Zi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Wn(n){if(Hn(n)!==n)throw Error(t(188))}function vl(n){var i=n.alternate;if(!i){if(i=Hn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Wn(d),n;if(m===c)return Wn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var _=!1,A=d.child;A;){if(A===a){_=!0,a=d,c=m;break}if(A===c){_=!0,c=d,a=m;break}A=A.sibling}if(!_){for(A=m.child;A;){if(A===a){_=!0,a=m,c=d;break}if(A===c){_=!0,c=m,a=d;break}A=A.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Jo(n){return n=vl(n),n!==null?Bs(n):null}function Bs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Bs(n);if(i!==null)return i;n=n.sibling}return null}var $s=e.unstable_scheduleCallback,Zo=e.unstable_cancelCallback,_l=e.unstable_shouldYield,jc=e.unstable_requestPaint,Ye=e.unstable_now,wl=e.unstable_getCurrentPriorityLevel,es=e.unstable_ImmediatePriority,Zr=e.unstable_UserBlockingPriority,kn=e.unstable_NormalPriority,ea=e.unstable_LowPriority,El=e.unstable_IdlePriority,ts=null,gn=null;function Tl(n){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(ts,n,void 0,(n.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:Sl,ta=Math.log,Il=Math.LN2;function Sl(n){return n>>>=0,n===0?32:31-(ta(n)/Il|0)|0}var Hs=64,Ws=4194304;function ei(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ns(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,_=a&268435455;if(_!==0){var A=_&~d;A!==0?c=ei(A):(m&=_,m!==0&&(c=ei(m)))}else _=a&~d,_!==0?c=ei(_):m!==0&&(c=ei(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Yt(i),d=1<<a,c|=n[a],i&=~d;return c}function zc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var _=31-Yt(m),A=1<<_,P=d[_];P===-1?((A&a)===0||(A&c)!==0)&&(d[_]=zc(A,i)):P<=i&&(n.expiredLanes|=A),m&=~A}}function yn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function rs(){var n=Hs;return Hs<<=1,(Hs&4194240)===0&&(Hs=64),n}function ti(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ni(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Yt(i),n[i]=a}function Ge(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Yt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function ri(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Yt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Le=0;function ii(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Al,qs,Cl,kl,Rl,na=!1,cr=[],Mt=null,qn=null,Kn=null,si=new Map,Rn=new Map,hr=[],Bc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pl(n,i){switch(n){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":si.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(i.pointerId)}}function nn(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ya(i),i!==null&&qs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function $c(n,i,a,c,d){switch(i){case"focusin":return Mt=nn(Mt,n,i,a,c,d),!0;case"dragenter":return qn=nn(qn,n,i,a,c,d),!0;case"mouseover":return Kn=nn(Kn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return si.set(m,nn(si.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Rn.set(m,nn(Rn.get(m)||null,n,i,a,c,d)),!0}return!1}function Nl(n){var i=ls(n.target);if(i!==null){var a=Hn(i);if(a!==null){if(i=a.tag,i===13){if(i=Zi(a),i!==null){n.blockedOn=i,Rl(n.priority,function(){Cl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Dr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ks(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Qi=c,a.target.dispatchEvent(c),Qi=null}else return i=ya(a),i!==null&&qs(i),n.blockedOn=a,!1;i.shift()}return!0}function is(n,i,a){Dr(n)&&a.delete(i)}function xl(){na=!1,Mt!==null&&Dr(Mt)&&(Mt=null),qn!==null&&Dr(qn)&&(qn=null),Kn!==null&&Dr(Kn)&&(Kn=null),si.forEach(is),Rn.forEach(is)}function Gn(n,i){n.blockedOn===i&&(n.blockedOn=null,na||(na=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,xl)))}function Qn(n){function i(d){return Gn(d,n)}if(0<cr.length){Gn(cr[0],n);for(var a=1;a<cr.length;a++){var c=cr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Mt!==null&&Gn(Mt,n),qn!==null&&Gn(qn,n),Kn!==null&&Gn(Kn,n),si.forEach(i),Rn.forEach(i),a=0;a<hr.length;a++)c=hr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)Nl(a),a.blockedOn===null&&hr.shift()}var Or=Se.ReactCurrentBatchConfig,oi=!0;function nt(n,i,a,c){var d=Le,m=Or.transition;Or.transition=null;try{Le=1,ra(n,i,a,c)}finally{Le=d,Or.transition=m}}function Hc(n,i,a,c){var d=Le,m=Or.transition;Or.transition=null;try{Le=4,ra(n,i,a,c)}finally{Le=d,Or.transition=m}}function ra(n,i,a,c){if(oi){var d=Ks(n,i,a,c);if(d===null)th(n,i,c,ss,a),Pl(n,c);else if($c(d,n,i,a,c))c.stopPropagation();else if(Pl(n,c),i&4&&-1<Bc.indexOf(n)){for(;d!==null;){var m=ya(d);if(m!==null&&Al(m),m=Ks(n,i,a,c),m===null&&th(n,i,c,ss,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else th(n,i,c,null,a)}}var ss=null;function Ks(n,i,a,c){if(ss=null,n=bs(c),n=ls(n),n!==null)if(i=Hn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Zi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ss=n,null}function ia(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wl()){case es:return 1;case Zr:return 4;case kn:case ea:return 16;case El:return 536870912;default:return 16}default:return 16}}var vn=null,Gs=null,rn=null;function sa(){if(rn)return rn;var n,i=Gs,a=i.length,c,d="value"in vn?vn.value:vn.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&i[a-c]===d[m-c];c++);return rn=d.slice(n,1<c?1-c:void 0)}function Qs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function dr(){return!0}function oa(){return!1}function bt(n){function i(a,c,d,m,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?dr:oa,this.isPropagationStopped=oa,this}return N(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),i}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ys=bt(Yn),fr=N({},Yn,{view:0,detail:0}),Wc=bt(fr),Xs,Vr,ai,os=N({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ai&&(ai&&n.type==="mousemove"?(Xs=n.screenX-ai.screenX,Vr=n.screenY-ai.screenY):Vr=Xs=0,ai=n),Xs)},movementY:function(n){return"movementY"in n?n.movementY:Vr}}),Js=bt(os),aa=N({},os,{dataTransfer:0}),Dl=bt(aa),Zs=N({},fr,{relatedTarget:0}),eo=bt(Zs),Ol=N({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Mr=bt(Ol),Vl=N({},Yn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ml=bt(Vl),bl=N({},Yn,{data:0}),la=bt(bl),to={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ll={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ll[n])?!!i[n]:!1}function pr(){return Fl}var u=N({},fr,{key:function(n){if(n.key){var i=to[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Qs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Xt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pr,charCode:function(n){return n.type==="keypress"?Qs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=bt(u),y=N({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=bt(y),L=N({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pr}),B=bt(L),ne=N({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),We=bt(ne),Tt=N({},os,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Fe=bt(Tt),Rt=[9,13,27,32],yt=f&&"CompositionEvent"in window,Pn=null;f&&"documentMode"in document&&(Pn=document.documentMode);var _n=f&&"TextEvent"in window&&!Pn,as=f&&(!yt||Pn&&8<Pn&&11>=Pn),no=" ",mp=!1;function gp(n,i){switch(n){case"keyup":return Rt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ro=!1;function kE(n,i){switch(n){case"compositionend":return yp(i);case"keypress":return i.which!==32?null:(mp=!0,no);case"textInput":return n=i.data,n===no&&mp?null:n;default:return null}}function RE(n,i){if(ro)return n==="compositionend"||!yt&&gp(n,i)?(n=sa(),rn=Gs=vn=null,ro=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return as&&i.locale!=="ko"?null:i.data;default:return null}}var PE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!PE[n.type]:i==="textarea"}function _p(n,i,a,c){ur(c),i=$l(i,"onChange"),0<i.length&&(a=new Ys("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ua=null,ca=null;function NE(n){Lp(n,0)}function Ul(n){var i=lo(n);if(He(i))return n}function xE(n,i){if(n==="change")return i}var wp=!1;if(f){var qc;if(f){var Kc="oninput"in document;if(!Kc){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),Kc=typeof Ep.oninput=="function"}qc=Kc}else qc=!1;wp=qc&&(!document.documentMode||9<document.documentMode)}function Tp(){ua&&(ua.detachEvent("onpropertychange",Ip),ca=ua=null)}function Ip(n){if(n.propertyName==="value"&&Ul(ca)){var i=[];_p(i,ca,n,bs(n)),Yo(NE,i)}}function DE(n,i,a){n==="focusin"?(Tp(),ua=i,ca=a,ua.attachEvent("onpropertychange",Ip)):n==="focusout"&&Tp()}function OE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ul(ca)}function VE(n,i){if(n==="click")return Ul(i)}function ME(n,i){if(n==="input"||n==="change")return Ul(i)}function bE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Xn=typeof Object.is=="function"?Object.is:bE;function ha(n,i){if(Xn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Xn(n[d],i[d]))return!1}return!0}function Sp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ap(n,i){var a=Sp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sp(a)}}function Cp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Cp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function kp(){for(var n=window,i=Qe();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Qe(n.document)}return i}function Gc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function LE(n){var i=kp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Cp(a.ownerDocument.documentElement,a)){if(c!==null&&Gc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Ap(a,m);var _=Ap(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var FE=f&&"documentMode"in document&&11>=document.documentMode,io=null,Qc=null,da=null,Yc=!1;function Rp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yc||io==null||io!==Qe(c)||(c=io,"selectionStart"in c&&Gc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),da&&ha(da,c)||(da=c,c=$l(Qc,"onSelect"),0<c.length&&(i=new Ys("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=io)))}function jl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var so={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},Xc={},Pp={};f&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function zl(n){if(Xc[n])return Xc[n];if(!so[n])return n;var i=so[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Pp)return Xc[n]=i[a];return n}var Np=zl("animationend"),xp=zl("animationiteration"),Dp=zl("animationstart"),Op=zl("transitionend"),Vp=new Map,Mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(n,i){Vp.set(n,i),l(i,[n])}for(var Jc=0;Jc<Mp.length;Jc++){var Zc=Mp[Jc],UE=Zc.toLowerCase(),jE=Zc[0].toUpperCase()+Zc.slice(1);li(UE,"on"+jE)}li(Np,"onAnimationEnd"),li(xp,"onAnimationIteration"),li(Dp,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(Op,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zE=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function bp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,yl(c,i,void 0,n),n.currentTarget=null}function Lp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var _=c.length-1;0<=_;_--){var A=c[_],P=A.instance,z=A.currentTarget;if(A=A.listener,P!==m&&d.isPropagationStopped())break e;bp(d,A,z),m=P}else for(_=0;_<c.length;_++){if(A=c[_],P=A.instance,z=A.currentTarget,A=A.listener,P!==m&&d.isPropagationStopped())break e;bp(d,A,z),m=P}}}if($n)throw n=Xo,$n=!1,Xo=null,n}function Ze(n,i){var a=i[ah];a===void 0&&(a=i[ah]=new Set);var c=n+"__bubble";a.has(c)||(Fp(i,n,2,!1),a.add(c))}function eh(n,i,a){var c=0;i&&(c|=4),Fp(a,n,c,i)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function pa(n){if(!n[Bl]){n[Bl]=!0,s.forEach(function(a){a!=="selectionchange"&&(zE.has(a)||eh(a,!1,n),eh(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Bl]||(i[Bl]=!0,eh("selectionchange",!1,i))}}function Fp(n,i,a,c){switch(ia(i)){case 1:var d=nt;break;case 4:d=Hc;break;default:d=ra}a=d.bind(null,i,a,n),d=void 0,!Us||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function th(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;_=_.return}for(;A!==null;){if(_=ls(A),_===null)return;if(P=_.tag,P===5||P===6){c=m=_;continue e}A=A.parentNode}}c=c.return}Yo(function(){var z=m,Y=bs(a),J=[];e:{var G=Vp.get(n);if(G!==void 0){var ae=Ys,he=n;switch(n){case"keypress":if(Qs(a)===0)break e;case"keydown":case"keyup":ae=p;break;case"focusin":he="focus",ae=eo;break;case"focusout":he="blur",ae=eo;break;case"beforeblur":case"afterblur":ae=eo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=Dl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=B;break;case Np:case xp:case Dp:ae=Mr;break;case Op:ae=We;break;case"scroll":ae=Wc;break;case"wheel":ae=Fe;break;case"copy":case"cut":case"paste":ae=Ml;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=E}var de=(i&4)!==0,pt=!de&&n==="scroll",F=de?G!==null?G+"Capture":null:G;de=[];for(var V=z,U;V!==null;){U=V;var Z=U.stateNode;if(U.tag===5&&Z!==null&&(U=Z,F!==null&&(Z=ft(V,F),Z!=null&&de.push(ma(V,Z,U)))),pt)break;V=V.return}0<de.length&&(G=new ae(G,he,null,a,Y),J.push({event:G,listeners:de}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ae=n==="mouseout"||n==="pointerout",G&&a!==Qi&&(he=a.relatedTarget||a.fromElement)&&(ls(he)||he[br]))break e;if((ae||G)&&(G=Y.window===Y?Y:(G=Y.ownerDocument)?G.defaultView||G.parentWindow:window,ae?(he=a.relatedTarget||a.toElement,ae=z,he=he?ls(he):null,he!==null&&(pt=Hn(he),he!==pt||he.tag!==5&&he.tag!==6)&&(he=null)):(ae=null,he=z),ae!==he)){if(de=Js,Z="onMouseLeave",F="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(de=E,Z="onPointerLeave",F="onPointerEnter",V="pointer"),pt=ae==null?G:lo(ae),U=he==null?G:lo(he),G=new de(Z,V+"leave",ae,a,Y),G.target=pt,G.relatedTarget=U,Z=null,ls(Y)===z&&(de=new de(F,V+"enter",he,a,Y),de.target=U,de.relatedTarget=pt,Z=de),pt=Z,ae&&he)t:{for(de=ae,F=he,V=0,U=de;U;U=oo(U))V++;for(U=0,Z=F;Z;Z=oo(Z))U++;for(;0<V-U;)de=oo(de),V--;for(;0<U-V;)F=oo(F),U--;for(;V--;){if(de===F||F!==null&&de===F.alternate)break t;de=oo(de),F=oo(F)}de=null}else de=null;ae!==null&&Up(J,G,ae,de,!1),he!==null&&pt!==null&&Up(J,pt,he,de,!0)}}e:{if(G=z?lo(z):window,ae=G.nodeName&&G.nodeName.toLowerCase(),ae==="select"||ae==="input"&&G.type==="file")var pe=xE;else if(vp(G))if(wp)pe=ME;else{pe=OE;var _e=DE}else(ae=G.nodeName)&&ae.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(pe=VE);if(pe&&(pe=pe(n,z))){_p(J,pe,a,Y);break e}_e&&_e(n,G,z),n==="focusout"&&(_e=G._wrapperState)&&_e.controlled&&G.type==="number"&&tn(G,"number",G.value)}switch(_e=z?lo(z):window,n){case"focusin":(vp(_e)||_e.contentEditable==="true")&&(io=_e,Qc=z,da=null);break;case"focusout":da=Qc=io=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,Rp(J,a,Y);break;case"selectionchange":if(FE)break;case"keydown":case"keyup":Rp(J,a,Y)}var we;if(yt)e:{switch(n){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else ro?gp(n,a)&&(Ae="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(as&&a.locale!=="ko"&&(ro||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&ro&&(we=sa()):(vn=Y,Gs="value"in vn?vn.value:vn.textContent,ro=!0)),_e=$l(z,Ae),0<_e.length&&(Ae=new la(Ae,n,null,a,Y),J.push({event:Ae,listeners:_e}),we?Ae.data=we:(we=yp(a),we!==null&&(Ae.data=we)))),(we=_n?kE(n,a):RE(n,a))&&(z=$l(z,"onBeforeInput"),0<z.length&&(Y=new la("onBeforeInput","beforeinput",null,a,Y),J.push({event:Y,listeners:z}),Y.data=we))}Lp(J,i)})}function ma(n,i,a){return{instance:n,listener:i,currentTarget:a}}function $l(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=ft(n,a),m!=null&&c.unshift(ma(n,m,d)),m=ft(n,i),m!=null&&c.push(ma(n,m,d))),n=n.return}return c}function oo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Up(n,i,a,c,d){for(var m=i._reactName,_=[];a!==null&&a!==c;){var A=a,P=A.alternate,z=A.stateNode;if(P!==null&&P===c)break;A.tag===5&&z!==null&&(A=z,d?(P=ft(a,m),P!=null&&_.unshift(ma(a,P,A))):d||(P=ft(a,m),P!=null&&_.push(ma(a,P,A)))),a=a.return}_.length!==0&&n.push({event:i,listeners:_})}var BE=/\r\n?/g,$E=/\u0000|\uFFFD/g;function jp(n){return(typeof n=="string"?n:""+n).replace(BE,`
`).replace($E,"")}function Hl(n,i,a){if(i=jp(i),jp(n)!==i&&a)throw Error(t(425))}function Wl(){}var nh=null,rh=null;function ih(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sh=typeof setTimeout=="function"?setTimeout:void 0,HE=typeof clearTimeout=="function"?clearTimeout:void 0,zp=typeof Promise=="function"?Promise:void 0,WE=typeof queueMicrotask=="function"?queueMicrotask:typeof zp<"u"?function(n){return zp.resolve(null).then(n).catch(qE)}:sh;function qE(n){setTimeout(function(){throw n})}function oh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Qn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Qn(i)}function ui(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Bp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ao=Math.random().toString(36).slice(2),mr="__reactFiber$"+ao,ga="__reactProps$"+ao,br="__reactContainer$"+ao,ah="__reactEvents$"+ao,KE="__reactListeners$"+ao,GE="__reactHandles$"+ao;function ls(n){var i=n[mr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[br]||a[mr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Bp(n);n!==null;){if(a=n[mr])return a;n=Bp(n)}return i}n=a,a=n.parentNode}return null}function ya(n){return n=n[mr]||n[br],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function lo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ql(n){return n[ga]||null}var lh=[],uo=-1;function ci(n){return{current:n}}function et(n){0>uo||(n.current=lh[uo],lh[uo]=null,uo--)}function Xe(n,i){uo++,lh[uo]=n.current,n.current=i}var hi={},Bt=ci(hi),sn=ci(!1),us=hi;function co(n,i){var a=n.type.contextTypes;if(!a)return hi;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function on(n){return n=n.childContextTypes,n!=null}function Kl(){et(sn),et(Bt)}function $p(n,i,a){if(Bt.current!==hi)throw Error(t(168));Xe(Bt,i),Xe(sn,a)}function Hp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ie(n)||"Unknown",d));return N({},a,c)}function Gl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hi,us=Bt.current,Xe(Bt,n),Xe(sn,sn.current),!0}function Wp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Hp(n,i,us),c.__reactInternalMemoizedMergedChildContext=n,et(sn),et(Bt),Xe(Bt,n)):et(sn),Xe(sn,a)}var Lr=null,Ql=!1,uh=!1;function qp(n){Lr===null?Lr=[n]:Lr.push(n)}function QE(n){Ql=!0,qp(n)}function di(){if(!uh&&Lr!==null){uh=!0;var n=0,i=Le;try{var a=Lr;for(Le=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Lr=null,Ql=!1}catch(d){throw Lr!==null&&(Lr=Lr.slice(n+1)),$s(es,di),d}finally{Le=i,uh=!1}}return null}var ho=[],fo=0,Yl=null,Xl=0,Nn=[],xn=0,cs=null,Fr=1,Ur="";function hs(n,i){ho[fo++]=Xl,ho[fo++]=Yl,Yl=n,Xl=i}function Kp(n,i,a){Nn[xn++]=Fr,Nn[xn++]=Ur,Nn[xn++]=cs,cs=n;var c=Fr;n=Ur;var d=32-Yt(c)-1;c&=~(1<<d),a+=1;var m=32-Yt(i)+d;if(30<m){var _=d-d%5;m=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Fr=1<<32-Yt(i)+d|a<<d|c,Ur=m+n}else Fr=1<<m|a<<d|c,Ur=n}function ch(n){n.return!==null&&(hs(n,1),Kp(n,1,0))}function hh(n){for(;n===Yl;)Yl=ho[--fo],ho[fo]=null,Xl=ho[--fo],ho[fo]=null;for(;n===cs;)cs=Nn[--xn],Nn[xn]=null,Ur=Nn[--xn],Nn[xn]=null,Fr=Nn[--xn],Nn[xn]=null}var wn=null,En=null,rt=!1,Jn=null;function Gp(n,i){var a=Mn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Qp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,wn=n,En=ui(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,wn=n,En=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=cs!==null?{id:Fr,overflow:Ur}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Mn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,wn=n,En=null,!0):!1;default:return!1}}function dh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function fh(n){if(rt){var i=En;if(i){var a=i;if(!Qp(n,i)){if(dh(n))throw Error(t(418));i=ui(a.nextSibling);var c=wn;i&&Qp(n,i)?Gp(c,a):(n.flags=n.flags&-4097|2,rt=!1,wn=n)}}else{if(dh(n))throw Error(t(418));n.flags=n.flags&-4097|2,rt=!1,wn=n}}}function Yp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;wn=n}function Jl(n){if(n!==wn)return!1;if(!rt)return Yp(n),rt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!ih(n.type,n.memoizedProps)),i&&(i=En)){if(dh(n))throw Xp(),Error(t(418));for(;i;)Gp(n,i),i=ui(i.nextSibling)}if(Yp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){En=ui(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}En=null}}else En=wn?ui(n.stateNode.nextSibling):null;return!0}function Xp(){for(var n=En;n;)n=ui(n.nextSibling)}function po(){En=wn=null,rt=!1}function ph(n){Jn===null?Jn=[n]:Jn.push(n)}var YE=Se.ReactCurrentBatchConfig;function va(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(_){var A=d.refs;_===null?delete A[m]:A[m]=_},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Zl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Jp(n){var i=n._init;return i(n._payload)}function Zp(n){function i(F,V){if(n){var U=F.deletions;U===null?(F.deletions=[V],F.flags|=16):U.push(V)}}function a(F,V){if(!n)return null;for(;V!==null;)i(F,V),V=V.sibling;return null}function c(F,V){for(F=new Map;V!==null;)V.key!==null?F.set(V.key,V):F.set(V.index,V),V=V.sibling;return F}function d(F,V){return F=wi(F,V),F.index=0,F.sibling=null,F}function m(F,V,U){return F.index=U,n?(U=F.alternate,U!==null?(U=U.index,U<V?(F.flags|=2,V):U):(F.flags|=2,V)):(F.flags|=1048576,V)}function _(F){return n&&F.alternate===null&&(F.flags|=2),F}function A(F,V,U,Z){return V===null||V.tag!==6?(V=sd(U,F.mode,Z),V.return=F,V):(V=d(V,U),V.return=F,V)}function P(F,V,U,Z){var pe=U.type;return pe===O?Y(F,V,U.props.children,Z,U.key):V!==null&&(V.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ct&&Jp(pe)===V.type)?(Z=d(V,U.props),Z.ref=va(F,V,U),Z.return=F,Z):(Z=Iu(U.type,U.key,U.props,null,F.mode,Z),Z.ref=va(F,V,U),Z.return=F,Z)}function z(F,V,U,Z){return V===null||V.tag!==4||V.stateNode.containerInfo!==U.containerInfo||V.stateNode.implementation!==U.implementation?(V=od(U,F.mode,Z),V.return=F,V):(V=d(V,U.children||[]),V.return=F,V)}function Y(F,V,U,Z,pe){return V===null||V.tag!==7?(V=_s(U,F.mode,Z,pe),V.return=F,V):(V=d(V,U),V.return=F,V)}function J(F,V,U){if(typeof V=="string"&&V!==""||typeof V=="number")return V=sd(""+V,F.mode,U),V.return=F,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Me:return U=Iu(V.type,V.key,V.props,null,F.mode,U),U.ref=va(F,null,V),U.return=F,U;case ke:return V=od(V,F.mode,U),V.return=F,V;case ct:var Z=V._init;return J(F,Z(V._payload),U)}if(gt(V)||ge(V))return V=_s(V,F.mode,U,null),V.return=F,V;Zl(F,V)}return null}function G(F,V,U,Z){var pe=V!==null?V.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return pe!==null?null:A(F,V,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Me:return U.key===pe?P(F,V,U,Z):null;case ke:return U.key===pe?z(F,V,U,Z):null;case ct:return pe=U._init,G(F,V,pe(U._payload),Z)}if(gt(U)||ge(U))return pe!==null?null:Y(F,V,U,Z,null);Zl(F,U)}return null}function ae(F,V,U,Z,pe){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return F=F.get(U)||null,A(V,F,""+Z,pe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Me:return F=F.get(Z.key===null?U:Z.key)||null,P(V,F,Z,pe);case ke:return F=F.get(Z.key===null?U:Z.key)||null,z(V,F,Z,pe);case ct:var _e=Z._init;return ae(F,V,U,_e(Z._payload),pe)}if(gt(Z)||ge(Z))return F=F.get(U)||null,Y(V,F,Z,pe,null);Zl(V,Z)}return null}function he(F,V,U,Z){for(var pe=null,_e=null,we=V,Ae=V=0,xt=null;we!==null&&Ae<U.length;Ae++){we.index>Ae?(xt=we,we=null):xt=we.sibling;var Be=G(F,we,U[Ae],Z);if(Be===null){we===null&&(we=xt);break}n&&we&&Be.alternate===null&&i(F,we),V=m(Be,V,Ae),_e===null?pe=Be:_e.sibling=Be,_e=Be,we=xt}if(Ae===U.length)return a(F,we),rt&&hs(F,Ae),pe;if(we===null){for(;Ae<U.length;Ae++)we=J(F,U[Ae],Z),we!==null&&(V=m(we,V,Ae),_e===null?pe=we:_e.sibling=we,_e=we);return rt&&hs(F,Ae),pe}for(we=c(F,we);Ae<U.length;Ae++)xt=ae(we,F,Ae,U[Ae],Z),xt!==null&&(n&&xt.alternate!==null&&we.delete(xt.key===null?Ae:xt.key),V=m(xt,V,Ae),_e===null?pe=xt:_e.sibling=xt,_e=xt);return n&&we.forEach(function(Ei){return i(F,Ei)}),rt&&hs(F,Ae),pe}function de(F,V,U,Z){var pe=ge(U);if(typeof pe!="function")throw Error(t(150));if(U=pe.call(U),U==null)throw Error(t(151));for(var _e=pe=null,we=V,Ae=V=0,xt=null,Be=U.next();we!==null&&!Be.done;Ae++,Be=U.next()){we.index>Ae?(xt=we,we=null):xt=we.sibling;var Ei=G(F,we,Be.value,Z);if(Ei===null){we===null&&(we=xt);break}n&&we&&Ei.alternate===null&&i(F,we),V=m(Ei,V,Ae),_e===null?pe=Ei:_e.sibling=Ei,_e=Ei,we=xt}if(Be.done)return a(F,we),rt&&hs(F,Ae),pe;if(we===null){for(;!Be.done;Ae++,Be=U.next())Be=J(F,Be.value,Z),Be!==null&&(V=m(Be,V,Ae),_e===null?pe=Be:_e.sibling=Be,_e=Be);return rt&&hs(F,Ae),pe}for(we=c(F,we);!Be.done;Ae++,Be=U.next())Be=ae(we,F,Ae,Be.value,Z),Be!==null&&(n&&Be.alternate!==null&&we.delete(Be.key===null?Ae:Be.key),V=m(Be,V,Ae),_e===null?pe=Be:_e.sibling=Be,_e=Be);return n&&we.forEach(function(P0){return i(F,P0)}),rt&&hs(F,Ae),pe}function pt(F,V,U,Z){if(typeof U=="object"&&U!==null&&U.type===O&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Me:e:{for(var pe=U.key,_e=V;_e!==null;){if(_e.key===pe){if(pe=U.type,pe===O){if(_e.tag===7){a(F,_e.sibling),V=d(_e,U.props.children),V.return=F,F=V;break e}}else if(_e.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ct&&Jp(pe)===_e.type){a(F,_e.sibling),V=d(_e,U.props),V.ref=va(F,_e,U),V.return=F,F=V;break e}a(F,_e);break}else i(F,_e);_e=_e.sibling}U.type===O?(V=_s(U.props.children,F.mode,Z,U.key),V.return=F,F=V):(Z=Iu(U.type,U.key,U.props,null,F.mode,Z),Z.ref=va(F,V,U),Z.return=F,F=Z)}return _(F);case ke:e:{for(_e=U.key;V!==null;){if(V.key===_e)if(V.tag===4&&V.stateNode.containerInfo===U.containerInfo&&V.stateNode.implementation===U.implementation){a(F,V.sibling),V=d(V,U.children||[]),V.return=F,F=V;break e}else{a(F,V);break}else i(F,V);V=V.sibling}V=od(U,F.mode,Z),V.return=F,F=V}return _(F);case ct:return _e=U._init,pt(F,V,_e(U._payload),Z)}if(gt(U))return he(F,V,U,Z);if(ge(U))return de(F,V,U,Z);Zl(F,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,V!==null&&V.tag===6?(a(F,V.sibling),V=d(V,U),V.return=F,F=V):(a(F,V),V=sd(U,F.mode,Z),V.return=F,F=V),_(F)):a(F,V)}return pt}var mo=Zp(!0),em=Zp(!1),eu=ci(null),tu=null,go=null,mh=null;function gh(){mh=go=tu=null}function yh(n){var i=eu.current;et(eu),n._currentValue=i}function vh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function yo(n,i){tu=n,mh=go=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(an=!0),n.firstContext=null)}function Dn(n){var i=n._currentValue;if(mh!==n)if(n={context:n,memoizedValue:i,next:null},go===null){if(tu===null)throw Error(t(308));go=n,tu.dependencies={lanes:0,firstContext:n}}else go=go.next=n;return i}var ds=null;function _h(n){ds===null?ds=[n]:ds.push(n)}function tm(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,_h(i)):(a.next=d.next,d.next=a),i.interleaved=a,jr(n,c)}function jr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var fi=!1;function wh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nm(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function pi(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(je&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,jr(n,a)}return d=c.interleaved,d===null?(i.next=i,_h(c)):(i.next=d.next,d.next=i),c.interleaved=i,jr(n,a)}function nu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ri(n,a)}}function rm(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=_:m=m.next=_,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ru(n,i,a,c){var d=n.updateQueue;fi=!1;var m=d.firstBaseUpdate,_=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var P=A,z=P.next;P.next=null,_===null?m=z:_.next=z,_=P;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,A=Y.lastBaseUpdate,A!==_&&(A===null?Y.firstBaseUpdate=z:A.next=z,Y.lastBaseUpdate=P))}if(m!==null){var J=d.baseState;_=0,Y=z=P=null,A=m;do{var G=A.lane,ae=A.eventTime;if((c&G)===G){Y!==null&&(Y=Y.next={eventTime:ae,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var he=n,de=A;switch(G=i,ae=a,de.tag){case 1:if(he=de.payload,typeof he=="function"){J=he.call(ae,J,G);break e}J=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=de.payload,G=typeof he=="function"?he.call(ae,J,G):he,G==null)break e;J=N({},J,G);break e;case 2:fi=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[A]:G.push(A))}else ae={eventTime:ae,lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Y===null?(z=Y=ae,P=J):Y=Y.next=ae,_|=G;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;G=A,A=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Y===null&&(P=J),d.baseState=P,d.firstBaseUpdate=z,d.lastBaseUpdate=Y,i=d.shared.interleaved,i!==null){d=i;do _|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ms|=_,n.lanes=_,n.memoizedState=J}}function im(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var _a={},gr=ci(_a),wa=ci(_a),Ea=ci(_a);function fs(n){if(n===_a)throw Error(t(174));return n}function Eh(n,i){switch(Xe(Ea,i),Xe(wa,n),Xe(gr,_a),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:dt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=dt(i,n)}et(gr),Xe(gr,i)}function vo(){et(gr),et(wa),et(Ea)}function sm(n){fs(Ea.current);var i=fs(gr.current),a=dt(i,n.type);i!==a&&(Xe(wa,n),Xe(gr,a))}function Th(n){wa.current===n&&(et(gr),et(wa))}var it=ci(0);function iu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ih=[];function Sh(){for(var n=0;n<Ih.length;n++)Ih[n]._workInProgressVersionPrimary=null;Ih.length=0}var su=Se.ReactCurrentDispatcher,Ah=Se.ReactCurrentBatchConfig,ps=0,st=null,It=null,Pt=null,ou=!1,Ta=!1,Ia=0,XE=0;function $t(){throw Error(t(321))}function Ch(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Xn(n[a],i[a]))return!1;return!0}function kh(n,i,a,c,d,m){if(ps=m,st=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,su.current=n===null||n.memoizedState===null?t0:n0,n=a(c,d),Ta){m=0;do{if(Ta=!1,Ia=0,25<=m)throw Error(t(301));m+=1,Pt=It=null,i.updateQueue=null,su.current=r0,n=a(c,d)}while(Ta)}if(su.current=uu,i=It!==null&&It.next!==null,ps=0,Pt=It=st=null,ou=!1,i)throw Error(t(300));return n}function Rh(){var n=Ia!==0;return Ia=0,n}function yr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?st.memoizedState=Pt=n:Pt=Pt.next=n,Pt}function On(){if(It===null){var n=st.alternate;n=n!==null?n.memoizedState:null}else n=It.next;var i=Pt===null?st.memoizedState:Pt.next;if(i!==null)Pt=i,It=n;else{if(n===null)throw Error(t(310));It=n,n={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Pt===null?st.memoizedState=Pt=n:Pt=Pt.next=n}return Pt}function Sa(n,i){return typeof i=="function"?i(n):i}function Ph(n){var i=On(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=It,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var _=d.next;d.next=m.next,m.next=_}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var A=_=null,P=null,z=m;do{var Y=z.lane;if((ps&Y)===Y)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var J={lane:Y,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(A=P=J,_=c):P=P.next=J,st.lanes|=Y,ms|=Y}z=z.next}while(z!==null&&z!==m);P===null?_=c:P.next=A,Xn(c,i.memoizedState)||(an=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,st.lanes|=m,ms|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Nh(n){var i=On(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do m=n(m,_.action),_=_.next;while(_!==d);Xn(m,i.memoizedState)||(an=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function om(){}function am(n,i){var a=st,c=On(),d=i(),m=!Xn(c.memoizedState,d);if(m&&(c.memoizedState=d,an=!0),c=c.queue,xh(cm.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Pt!==null&&Pt.memoizedState.tag&1){if(a.flags|=2048,Aa(9,um.bind(null,a,c,d,i),void 0,null),Nt===null)throw Error(t(349));(ps&30)!==0||lm(a,i,d)}return d}function lm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=st.updateQueue,i===null?(i={lastEffect:null,stores:null},st.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function um(n,i,a,c){i.value=a,i.getSnapshot=c,hm(i)&&dm(n)}function cm(n,i,a){return a(function(){hm(i)&&dm(n)})}function hm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Xn(n,a)}catch{return!0}}function dm(n){var i=jr(n,1);i!==null&&nr(i,n,1,-1)}function fm(n){var i=yr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:n},i.queue=n,n=n.dispatch=e0.bind(null,st,n),[i.memoizedState,n]}function Aa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=st.updateQueue,i===null?(i={lastEffect:null,stores:null},st.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function pm(){return On().memoizedState}function au(n,i,a,c){var d=yr();st.flags|=n,d.memoizedState=Aa(1|i,a,void 0,c===void 0?null:c)}function lu(n,i,a,c){var d=On();c=c===void 0?null:c;var m=void 0;if(It!==null){var _=It.memoizedState;if(m=_.destroy,c!==null&&Ch(c,_.deps)){d.memoizedState=Aa(i,a,m,c);return}}st.flags|=n,d.memoizedState=Aa(1|i,a,m,c)}function mm(n,i){return au(8390656,8,n,i)}function xh(n,i){return lu(2048,8,n,i)}function gm(n,i){return lu(4,2,n,i)}function ym(n,i){return lu(4,4,n,i)}function vm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function _m(n,i,a){return a=a!=null?a.concat([n]):null,lu(4,4,vm.bind(null,i,n),a)}function Dh(){}function wm(n,i){var a=On();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ch(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Em(n,i){var a=On();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ch(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Tm(n,i,a){return(ps&21)===0?(n.baseState&&(n.baseState=!1,an=!0),n.memoizedState=a):(Xn(a,i)||(a=rs(),st.lanes|=a,ms|=a,n.baseState=!0),i)}function JE(n,i){var a=Le;Le=a!==0&&4>a?a:4,n(!0);var c=Ah.transition;Ah.transition={};try{n(!1),i()}finally{Le=a,Ah.transition=c}}function Im(){return On().memoizedState}function ZE(n,i,a){var c=vi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Sm(n))Am(i,a);else if(a=tm(n,i,a,c),a!==null){var d=Zt();nr(a,n,c,d),Cm(a,i,c)}}function e0(n,i,a){var c=vi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sm(n))Am(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var _=i.lastRenderedState,A=m(_,a);if(d.hasEagerState=!0,d.eagerState=A,Xn(A,_)){var P=i.interleaved;P===null?(d.next=d,_h(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=tm(n,i,d,c),a!==null&&(d=Zt(),nr(a,n,c,d),Cm(a,i,c))}}function Sm(n){var i=n.alternate;return n===st||i!==null&&i===st}function Am(n,i){Ta=ou=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Cm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ri(n,a)}}var uu={readContext:Dn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},t0={readContext:Dn,useCallback:function(n,i){return yr().memoizedState=[n,i===void 0?null:i],n},useContext:Dn,useEffect:mm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,au(4194308,4,vm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return au(4194308,4,n,i)},useInsertionEffect:function(n,i){return au(4,2,n,i)},useMemo:function(n,i){var a=yr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=yr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=ZE.bind(null,st,n),[c.memoizedState,n]},useRef:function(n){var i=yr();return n={current:n},i.memoizedState=n},useState:fm,useDebugValue:Dh,useDeferredValue:function(n){return yr().memoizedState=n},useTransition:function(){var n=fm(!1),i=n[0];return n=JE.bind(null,n[1]),yr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=st,d=yr();if(rt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Nt===null)throw Error(t(349));(ps&30)!==0||lm(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,mm(cm.bind(null,c,m,n),[n]),c.flags|=2048,Aa(9,um.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=yr(),i=Nt.identifierPrefix;if(rt){var a=Ur,c=Fr;a=(c&~(1<<32-Yt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ia++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=XE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},n0={readContext:Dn,useCallback:wm,useContext:Dn,useEffect:xh,useImperativeHandle:_m,useInsertionEffect:gm,useLayoutEffect:ym,useMemo:Em,useReducer:Ph,useRef:pm,useState:function(){return Ph(Sa)},useDebugValue:Dh,useDeferredValue:function(n){var i=On();return Tm(i,It.memoizedState,n)},useTransition:function(){var n=Ph(Sa)[0],i=On().memoizedState;return[n,i]},useMutableSource:om,useSyncExternalStore:am,useId:Im,unstable_isNewReconciler:!1},r0={readContext:Dn,useCallback:wm,useContext:Dn,useEffect:xh,useImperativeHandle:_m,useInsertionEffect:gm,useLayoutEffect:ym,useMemo:Em,useReducer:Nh,useRef:pm,useState:function(){return Nh(Sa)},useDebugValue:Dh,useDeferredValue:function(n){var i=On();return It===null?i.memoizedState=n:Tm(i,It.memoizedState,n)},useTransition:function(){var n=Nh(Sa)[0],i=On().memoizedState;return[n,i]},useMutableSource:om,useSyncExternalStore:am,useId:Im,unstable_isNewReconciler:!1};function Zn(n,i){if(n&&n.defaultProps){i=N({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Oh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:N({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var cu={isMounted:function(n){return(n=n._reactInternals)?Hn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Zt(),d=vi(n),m=zr(c,d);m.payload=i,a!=null&&(m.callback=a),i=pi(n,m,d),i!==null&&(nr(i,n,d,c),nu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Zt(),d=vi(n),m=zr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=pi(n,m,d),i!==null&&(nr(i,n,d,c),nu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Zt(),c=vi(n),d=zr(a,c);d.tag=2,i!=null&&(d.callback=i),i=pi(n,d,c),i!==null&&(nr(i,n,c,a),nu(i,n,c))}};function km(n,i,a,c,d,m,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,_):i.prototype&&i.prototype.isPureReactComponent?!ha(a,c)||!ha(d,m):!0}function Rm(n,i,a){var c=!1,d=hi,m=i.contextType;return typeof m=="object"&&m!==null?m=Dn(m):(d=on(i)?us:Bt.current,c=i.contextTypes,m=(c=c!=null)?co(n,d):hi),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Pm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&cu.enqueueReplaceState(i,i.state,null)}function Vh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},wh(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Dn(m):(m=on(i)?us:Bt.current,d.context=co(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Oh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&cu.enqueueReplaceState(d,d.state,null),ru(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function _o(n,i){try{var a="",c=i;do a+=te(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Mh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function bh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var i0=typeof WeakMap=="function"?WeakMap:Map;function Nm(n,i,a){a=zr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){yu||(yu=!0,Xh=c),bh(n,i)},a}function xm(n,i,a){a=zr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){bh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){bh(n,i),typeof c!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function Dm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new i0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=v0.bind(null,n,i,a),i.then(n,n))}function Om(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Vm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=zr(-1,1),i.tag=2,pi(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var s0=Se.ReactCurrentOwner,an=!1;function Jt(n,i,a,c){i.child=n===null?em(i,null,a,c):mo(i,n.child,a,c)}function Mm(n,i,a,c,d){a=a.render;var m=i.ref;return yo(i,d),c=kh(n,i,a,c,m,d),a=Rh(),n!==null&&!an?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Br(n,i,d)):(rt&&a&&ch(i),i.flags|=1,Jt(n,i,c,d),i.child)}function bm(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!id(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Lm(n,i,m,c,d)):(n=Iu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var _=m.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(_,c)&&n.ref===i.ref)return Br(n,i,d)}return i.flags|=1,n=wi(m,c),n.ref=i.ref,n.return=i,i.child=n}function Lm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(ha(m,c)&&n.ref===i.ref)if(an=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(an=!0);else return i.lanes=n.lanes,Br(n,i,d)}return Lh(n,i,a,c,d)}function Fm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(Eo,Tn),Tn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xe(Eo,Tn),Tn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Xe(Eo,Tn),Tn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Xe(Eo,Tn),Tn|=c;return Jt(n,i,d,a),i.child}function Um(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Lh(n,i,a,c,d){var m=on(a)?us:Bt.current;return m=co(i,m),yo(i,d),a=kh(n,i,a,c,m,d),c=Rh(),n!==null&&!an?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Br(n,i,d)):(rt&&c&&ch(i),i.flags|=1,Jt(n,i,a,d),i.child)}function jm(n,i,a,c,d){if(on(a)){var m=!0;Gl(i)}else m=!1;if(yo(i,d),i.stateNode===null)du(n,i),Rm(i,a,c),Vh(i,a,c,d),c=!0;else if(n===null){var _=i.stateNode,A=i.memoizedProps;_.props=A;var P=_.context,z=a.contextType;typeof z=="object"&&z!==null?z=Dn(z):(z=on(a)?us:Bt.current,z=co(i,z));var Y=a.getDerivedStateFromProps,J=typeof Y=="function"||typeof _.getSnapshotBeforeUpdate=="function";J||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A!==c||P!==z)&&Pm(i,_,c,z),fi=!1;var G=i.memoizedState;_.state=G,ru(i,c,_,d),P=i.memoizedState,A!==c||G!==P||sn.current||fi?(typeof Y=="function"&&(Oh(i,a,Y,c),P=i.memoizedState),(A=fi||km(i,a,A,c,G,P,z))?(J||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),_.props=c,_.state=P,_.context=z,c=A):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,nm(n,i),A=i.memoizedProps,z=i.type===i.elementType?A:Zn(i.type,A),_.props=z,J=i.pendingProps,G=_.context,P=a.contextType,typeof P=="object"&&P!==null?P=Dn(P):(P=on(a)?us:Bt.current,P=co(i,P));var ae=a.getDerivedStateFromProps;(Y=typeof ae=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A!==J||G!==P)&&Pm(i,_,c,P),fi=!1,G=i.memoizedState,_.state=G,ru(i,c,_,d);var he=i.memoizedState;A!==J||G!==he||sn.current||fi?(typeof ae=="function"&&(Oh(i,a,ae,c),he=i.memoizedState),(z=fi||km(i,a,z,c,G,he,P)||!1)?(Y||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,he,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,he,P)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=he),_.props=c,_.state=he,_.context=P,c=z):(typeof _.componentDidUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Fh(n,i,a,c,m,d)}function Fh(n,i,a,c,d,m){Um(n,i);var _=(i.flags&128)!==0;if(!c&&!_)return d&&Wp(i,a,!1),Br(n,i,m);c=i.stateNode,s0.current=i;var A=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&_?(i.child=mo(i,n.child,null,m),i.child=mo(i,null,A,m)):Jt(n,i,A,m),i.memoizedState=c.state,d&&Wp(i,a,!0),i.child}function zm(n){var i=n.stateNode;i.pendingContext?$p(n,i.pendingContext,i.pendingContext!==i.context):i.context&&$p(n,i.context,!1),Eh(n,i.containerInfo)}function Bm(n,i,a,c,d){return po(),ph(d),i.flags|=256,Jt(n,i,a,c),i.child}var Uh={dehydrated:null,treeContext:null,retryLane:0};function jh(n){return{baseLanes:n,cachePool:null,transitions:null}}function $m(n,i,a){var c=i.pendingProps,d=it.current,m=!1,_=(i.flags&128)!==0,A;if((A=_)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Xe(it,d&1),n===null)return fh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=c.children,n=c.fallback,m?(c=i.mode,m=i.child,_={mode:"hidden",children:_},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=_):m=Su(_,c,0,null),n=_s(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=jh(a),i.memoizedState=Uh,n):zh(i,_));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return o0(n,i,_,c,A,d,a);if(m){m=c.fallback,_=i.mode,d=n.child,A=d.sibling;var P={mode:"hidden",children:c.children};return(_&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=wi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?m=wi(A,m):(m=_s(m,_,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,_=n.child.memoizedState,_=_===null?jh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},m.memoizedState=_,m.childLanes=n.childLanes&~a,i.memoizedState=Uh,c}return m=n.child,n=m.sibling,c=wi(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function zh(n,i){return i=Su({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function hu(n,i,a,c){return c!==null&&ph(c),mo(i,n.child,null,a),n=zh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function o0(n,i,a,c,d,m,_){if(a)return i.flags&256?(i.flags&=-257,c=Mh(Error(t(422))),hu(n,i,_,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=Su({mode:"visible",children:c.children},d,0,null),m=_s(m,d,_,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&mo(i,n.child,null,_),i.child.memoizedState=jh(_),i.memoizedState=Uh,m);if((i.mode&1)===0)return hu(n,i,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,m=Error(t(419)),c=Mh(m,c,void 0),hu(n,i,_,c)}if(A=(_&n.childLanes)!==0,an||A){if(c=Nt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,jr(n,d),nr(c,n,d,-1))}return rd(),c=Mh(Error(t(421))),hu(n,i,_,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=_0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,En=ui(d.nextSibling),wn=i,rt=!0,Jn=null,n!==null&&(Nn[xn++]=Fr,Nn[xn++]=Ur,Nn[xn++]=cs,Fr=n.id,Ur=n.overflow,cs=i),i=zh(i,c.children),i.flags|=4096,i)}function Hm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),vh(n.return,i,a)}function Bh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Wm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Jt(n,i,c.children,a),c=it.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hm(n,a,i);else if(n.tag===19)Hm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Xe(it,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&iu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Bh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&iu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Bh(i,!0,a,null,m);break;case"together":Bh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function du(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Br(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ms|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=wi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=wi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function a0(n,i,a){switch(i.tag){case 3:zm(i),po();break;case 5:sm(i);break;case 1:on(i.type)&&Gl(i);break;case 4:Eh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Xe(eu,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Xe(it,it.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?$m(n,i,a):(Xe(it,it.current&1),n=Br(n,i,a),n!==null?n.sibling:null);Xe(it,it.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Wm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Xe(it,it.current),c)break;return null;case 22:case 23:return i.lanes=0,Fm(n,i,a)}return Br(n,i,a)}var qm,$h,Km,Gm;qm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},$h=function(){},Km=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,fs(gr.current);var m=null;switch(a){case"input":d=Ne(n,d),c=Ne(n,c),m=[];break;case"select":d=N({},d,{value:void 0}),c=N({},c,{value:void 0}),m=[];break;case"textarea":d=qi(n,d),c=qi(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Wl)}qo(a,c);var _;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var A=d[z];for(_ in A)A.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?m||(m=[]):(m=m||[]).push(z,null));for(z in c){var P=c[z];if(A=d!=null?d[z]:void 0,c.hasOwnProperty(z)&&P!==A&&(P!=null||A!=null))if(z==="style")if(A){for(_ in A)!A.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in P)P.hasOwnProperty(_)&&A[_]!==P[_]&&(a||(a={}),a[_]=P[_])}else a||(m||(m=[]),m.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(m=m||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&Ze("scroll",n),m||A===P||(m=[])):(m=m||[]).push(z,P))}a&&(m=m||[]).push("style",a);var z=m;(i.updateQueue=z)&&(i.flags|=4)}},Gm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ca(n,i){if(!rt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ht(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function l0(n,i,a){var c=i.pendingProps;switch(hh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(i),null;case 1:return on(i.type)&&Kl(),Ht(i),null;case 3:return c=i.stateNode,vo(),et(sn),et(Bt),Sh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Jl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(ed(Jn),Jn=null))),$h(n,i),Ht(i),null;case 5:Th(i);var d=fs(Ea.current);if(a=i.type,n!==null&&i.stateNode!=null)Km(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ht(i),null}if(n=fs(gr.current),Jl(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[mr]=i,c[ga]=m,n=(i.mode&1)!==0,a){case"dialog":Ze("cancel",c),Ze("close",c);break;case"iframe":case"object":case"embed":Ze("load",c);break;case"video":case"audio":for(d=0;d<fa.length;d++)Ze(fa[d],c);break;case"source":Ze("error",c);break;case"img":case"image":case"link":Ze("error",c),Ze("load",c);break;case"details":Ze("toggle",c);break;case"input":ht(c,m),Ze("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ze("invalid",c);break;case"textarea":Xr(c,m),Ze("invalid",c)}qo(a,m),d=null;for(var _ in m)if(m.hasOwnProperty(_)){var A=m[_];_==="children"?typeof A=="string"?c.textContent!==A&&(m.suppressHydrationWarning!==!0&&Hl(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(m.suppressHydrationWarning!==!0&&Hl(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(_)&&A!=null&&_==="onScroll"&&Ze("scroll",c)}switch(a){case"input":be(c),en(c,m,!0);break;case"textarea":be(c),Ki(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Wl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[mr]=i,n[ga]=c,qm(n,i,!1,!1),i.stateNode=n;e:{switch(_=Ko(a,c),a){case"dialog":Ze("cancel",n),Ze("close",n),d=c;break;case"iframe":case"object":case"embed":Ze("load",n),d=c;break;case"video":case"audio":for(d=0;d<fa.length;d++)Ze(fa[d],n);d=c;break;case"source":Ze("error",n),d=c;break;case"img":case"image":case"link":Ze("error",n),Ze("load",n),d=c;break;case"details":Ze("toggle",n),d=c;break;case"input":ht(n,c),d=Ne(n,c),Ze("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=N({},c,{value:void 0}),Ze("invalid",n);break;case"textarea":Xr(n,c),d=qi(n,c),Ze("invalid",n);break;default:d=c}qo(a,d),A=d;for(m in A)if(A.hasOwnProperty(m)){var P=A[m];m==="style"?Ho(n,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Jr(n,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&jn(n,P):typeof P=="number"&&jn(n,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&Ze("scroll",n):P!=null&&ce(n,m,P,_))}switch(a){case"input":be(n),en(n,c,!1);break;case"textarea":be(n),Ki(n);break;case"option":c.value!=null&&n.setAttribute("value",""+oe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Fn(n,!!c.multiple,m,!1):c.defaultValue!=null&&Fn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Wl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ht(i),null;case 6:if(n&&i.stateNode!=null)Gm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=fs(Ea.current),fs(gr.current),Jl(i)){if(c=i.stateNode,a=i.memoizedProps,c[mr]=i,(m=c.nodeValue!==a)&&(n=wn,n!==null))switch(n.tag){case 3:Hl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Hl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[mr]=i,i.stateNode=c}return Ht(i),null;case 13:if(et(it),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rt&&En!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xp(),po(),i.flags|=98560,m=!1;else if(m=Jl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[mr]=i}else po(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ht(i),m=!1}else Jn!==null&&(ed(Jn),Jn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(it.current&1)!==0?St===0&&(St=3):rd())),i.updateQueue!==null&&(i.flags|=4),Ht(i),null);case 4:return vo(),$h(n,i),n===null&&pa(i.stateNode.containerInfo),Ht(i),null;case 10:return yh(i.type._context),Ht(i),null;case 17:return on(i.type)&&Kl(),Ht(i),null;case 19:if(et(it),m=i.memoizedState,m===null)return Ht(i),null;if(c=(i.flags&128)!==0,_=m.rendering,_===null)if(c)Ca(m,!1);else{if(St!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=iu(n),_!==null){for(i.flags|=128,Ca(m,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,_=m.alternate,_===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=_.childLanes,m.lanes=_.lanes,m.child=_.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=_.memoizedProps,m.memoizedState=_.memoizedState,m.updateQueue=_.updateQueue,m.type=_.type,n=_.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xe(it,it.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ye()>To&&(i.flags|=128,c=!0,Ca(m,!1),i.lanes=4194304)}else{if(!c)if(n=iu(_),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(m,!0),m.tail===null&&m.tailMode==="hidden"&&!_.alternate&&!rt)return Ht(i),null}else 2*Ye()-m.renderingStartTime>To&&a!==1073741824&&(i.flags|=128,c=!0,Ca(m,!1),i.lanes=4194304);m.isBackwards?(_.sibling=i.child,i.child=_):(a=m.last,a!==null?a.sibling=_:i.child=_,m.last=_)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ye(),i.sibling=null,a=it.current,Xe(it,c?a&1|2:a&1),i):(Ht(i),null);case 22:case 23:return nd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Tn&1073741824)!==0&&(Ht(i),i.subtreeFlags&6&&(i.flags|=8192)):Ht(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function u0(n,i){switch(hh(i),i.tag){case 1:return on(i.type)&&Kl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return vo(),et(sn),et(Bt),Sh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Th(i),null;case 13:if(et(it),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));po()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return et(it),null;case 4:return vo(),null;case 10:return yh(i.type._context),null;case 22:case 23:return nd(),null;case 24:return null;default:return null}}var fu=!1,Wt=!1,c0=typeof WeakSet=="function"?WeakSet:Set,ue=null;function wo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ut(n,i,c)}else a.current=null}function Hh(n,i,a){try{a()}catch(c){ut(n,i,c)}}var Qm=!1;function h0(n,i){if(nh=oi,n=kp(),Gc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var _=0,A=-1,P=-1,z=0,Y=0,J=n,G=null;t:for(;;){for(var ae;J!==a||d!==0&&J.nodeType!==3||(A=_+d),J!==m||c!==0&&J.nodeType!==3||(P=_+c),J.nodeType===3&&(_+=J.nodeValue.length),(ae=J.firstChild)!==null;)G=J,J=ae;for(;;){if(J===n)break t;if(G===a&&++z===d&&(A=_),G===m&&++Y===c&&(P=_),(ae=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=ae}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(rh={focusedElem:n,selectionRange:a},oi=!1,ue=i;ue!==null;)if(i=ue,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ue=n;else for(;ue!==null;){i=ue;try{var he=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var de=he.memoizedProps,pt=he.memoizedState,F=i.stateNode,V=F.getSnapshotBeforeUpdate(i.elementType===i.type?de:Zn(i.type,de),pt);F.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){ut(i,i.return,Z)}if(n=i.sibling,n!==null){n.return=i.return,ue=n;break}ue=i.return}return he=Qm,Qm=!1,he}function ka(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Hh(i,a,m)}d=d.next}while(d!==c)}}function pu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Wh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Ym(n){var i=n.alternate;i!==null&&(n.alternate=null,Ym(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[mr],delete i[ga],delete i[ah],delete i[KE],delete i[GE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xm(n){return n.tag===5||n.tag===3||n.tag===4}function Jm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Wl));else if(c!==4&&(n=n.child,n!==null))for(qh(n,i,a),n=n.sibling;n!==null;)qh(n,i,a),n=n.sibling}function Kh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Kh(n,i,a),n=n.sibling;n!==null;)Kh(n,i,a),n=n.sibling}var Lt=null,er=!1;function mi(n,i,a){for(a=a.child;a!==null;)Zm(n,i,a),a=a.sibling}function Zm(n,i,a){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(ts,a)}catch{}switch(a.tag){case 5:Wt||wo(a,i);case 6:var c=Lt,d=er;Lt=null,mi(n,i,a),Lt=c,er=d,Lt!==null&&(er?(n=Lt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Lt.removeChild(a.stateNode));break;case 18:Lt!==null&&(er?(n=Lt,a=a.stateNode,n.nodeType===8?oh(n.parentNode,a):n.nodeType===1&&oh(n,a),Qn(n)):oh(Lt,a.stateNode));break;case 4:c=Lt,d=er,Lt=a.stateNode.containerInfo,er=!0,mi(n,i,a),Lt=c,er=d;break;case 0:case 11:case 14:case 15:if(!Wt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,_=m.destroy;m=m.tag,_!==void 0&&((m&2)!==0||(m&4)!==0)&&Hh(a,i,_),d=d.next}while(d!==c)}mi(n,i,a);break;case 1:if(!Wt&&(wo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){ut(a,i,A)}mi(n,i,a);break;case 21:mi(n,i,a);break;case 22:a.mode&1?(Wt=(c=Wt)||a.memoizedState!==null,mi(n,i,a),Wt=c):mi(n,i,a);break;default:mi(n,i,a)}}function eg(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new c0),i.forEach(function(c){var d=w0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function tr(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,_=i,A=_;e:for(;A!==null;){switch(A.tag){case 5:Lt=A.stateNode,er=!1;break e;case 3:Lt=A.stateNode.containerInfo,er=!0;break e;case 4:Lt=A.stateNode.containerInfo,er=!0;break e}A=A.return}if(Lt===null)throw Error(t(160));Zm(m,_,d),Lt=null,er=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(z){ut(d,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)tg(i,n),i=i.sibling}function tg(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(tr(i,n),vr(n),c&4){try{ka(3,n,n.return),pu(3,n)}catch(de){ut(n,n.return,de)}try{ka(5,n,n.return)}catch(de){ut(n,n.return,de)}}break;case 1:tr(i,n),vr(n),c&512&&a!==null&&wo(a,a.return);break;case 5:if(tr(i,n),vr(n),c&512&&a!==null&&wo(a,a.return),n.flags&32){var d=n.stateNode;try{jn(d,"")}catch(de){ut(n,n.return,de)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,_=a!==null?a.memoizedProps:m,A=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{A==="input"&&m.type==="radio"&&m.name!=null&&Ot(d,m),Ko(A,_);var z=Ko(A,m);for(_=0;_<P.length;_+=2){var Y=P[_],J=P[_+1];Y==="style"?Ho(d,J):Y==="dangerouslySetInnerHTML"?Jr(d,J):Y==="children"?jn(d,J):ce(d,Y,J,z)}switch(A){case"input":Vt(d,m);break;case"textarea":Rr(d,m);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ae=m.value;ae!=null?Fn(d,!!m.multiple,ae,!1):G!==!!m.multiple&&(m.defaultValue!=null?Fn(d,!!m.multiple,m.defaultValue,!0):Fn(d,!!m.multiple,m.multiple?[]:"",!1))}d[ga]=m}catch(de){ut(n,n.return,de)}}break;case 6:if(tr(i,n),vr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(de){ut(n,n.return,de)}}break;case 3:if(tr(i,n),vr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Qn(i.containerInfo)}catch(de){ut(n,n.return,de)}break;case 4:tr(i,n),vr(n);break;case 13:tr(i,n),vr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Yh=Ye())),c&4&&eg(n);break;case 22:if(Y=a!==null&&a.memoizedState!==null,n.mode&1?(Wt=(z=Wt)||Y,tr(i,n),Wt=z):tr(i,n),vr(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!Y&&(n.mode&1)!==0)for(ue=n,Y=n.child;Y!==null;){for(J=ue=Y;ue!==null;){switch(G=ue,ae=G.child,G.tag){case 0:case 11:case 14:case 15:ka(4,G,G.return);break;case 1:wo(G,G.return);var he=G.stateNode;if(typeof he.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,he.props=i.memoizedProps,he.state=i.memoizedState,he.componentWillUnmount()}catch(de){ut(c,a,de)}}break;case 5:wo(G,G.return);break;case 22:if(G.memoizedState!==null){ig(J);continue}}ae!==null?(ae.return=G,ue=ae):ig(J)}Y=Y.sibling}e:for(Y=null,J=n;;){if(J.tag===5){if(Y===null){Y=J;try{d=J.stateNode,z?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(A=J.stateNode,P=J.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=Gi("display",_))}catch(de){ut(n,n.return,de)}}}else if(J.tag===6){if(Y===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(de){ut(n,n.return,de)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;Y===J&&(Y=null),J=J.return}Y===J&&(Y=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:tr(i,n),vr(n),c&4&&eg(n);break;case 21:break;default:tr(i,n),vr(n)}}function vr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Xm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(jn(d,""),c.flags&=-33);var m=Jm(n);Kh(n,m,d);break;case 3:case 4:var _=c.stateNode.containerInfo,A=Jm(n);qh(n,A,_);break;default:throw Error(t(161))}}catch(P){ut(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function d0(n,i,a){ue=n,ng(n)}function ng(n,i,a){for(var c=(n.mode&1)!==0;ue!==null;){var d=ue,m=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||fu;if(!_){var A=d.alternate,P=A!==null&&A.memoizedState!==null||Wt;A=fu;var z=Wt;if(fu=_,(Wt=P)&&!z)for(ue=d;ue!==null;)_=ue,P=_.child,_.tag===22&&_.memoizedState!==null?sg(d):P!==null?(P.return=_,ue=P):sg(d);for(;m!==null;)ue=m,ng(m),m=m.sibling;ue=d,fu=A,Wt=z}rg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ue=m):rg(n)}}function rg(n){for(;ue!==null;){var i=ue;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Wt||pu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Wt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Zn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&im(i,m,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}im(i,_,a)}break;case 5:var A=i.stateNode;if(a===null&&i.flags&4){a=A;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var Y=z.memoizedState;if(Y!==null){var J=Y.dehydrated;J!==null&&Qn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Wt||i.flags&512&&Wh(i)}catch(G){ut(i,i.return,G)}}if(i===n){ue=null;break}if(a=i.sibling,a!==null){a.return=i.return,ue=a;break}ue=i.return}}function ig(n){for(;ue!==null;){var i=ue;if(i===n){ue=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ue=a;break}ue=i.return}}function sg(n){for(;ue!==null;){var i=ue;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{pu(4,i)}catch(P){ut(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){ut(i,d,P)}}var m=i.return;try{Wh(i)}catch(P){ut(i,m,P)}break;case 5:var _=i.return;try{Wh(i)}catch(P){ut(i,_,P)}}}catch(P){ut(i,i.return,P)}if(i===n){ue=null;break}var A=i.sibling;if(A!==null){A.return=i.return,ue=A;break}ue=i.return}}var f0=Math.ceil,mu=Se.ReactCurrentDispatcher,Gh=Se.ReactCurrentOwner,Vn=Se.ReactCurrentBatchConfig,je=0,Nt=null,vt=null,Ft=0,Tn=0,Eo=ci(0),St=0,Ra=null,ms=0,gu=0,Qh=0,Pa=null,ln=null,Yh=0,To=1/0,$r=null,yu=!1,Xh=null,gi=null,vu=!1,yi=null,_u=0,Na=0,Jh=null,wu=-1,Eu=0;function Zt(){return(je&6)!==0?Ye():wu!==-1?wu:wu=Ye()}function vi(n){return(n.mode&1)===0?1:(je&2)!==0&&Ft!==0?Ft&-Ft:YE.transition!==null?(Eu===0&&(Eu=rs()),Eu):(n=Le,n!==0||(n=window.event,n=n===void 0?16:ia(n.type)),n)}function nr(n,i,a,c){if(50<Na)throw Na=0,Jh=null,Error(t(185));ni(n,a,c),((je&2)===0||n!==Nt)&&(n===Nt&&((je&2)===0&&(gu|=a),St===4&&_i(n,Ft)),un(n,c),a===1&&je===0&&(i.mode&1)===0&&(To=Ye()+500,Ql&&di()))}function un(n,i){var a=n.callbackNode;xr(n,i);var c=ns(n,n===Nt?Ft:0);if(c===0)a!==null&&Zo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Zo(a),i===1)n.tag===0?QE(ag.bind(null,n)):qp(ag.bind(null,n)),WE(function(){(je&6)===0&&di()}),a=null;else{switch(ii(c)){case 1:a=es;break;case 4:a=Zr;break;case 16:a=kn;break;case 536870912:a=El;break;default:a=kn}a=mg(a,og.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function og(n,i){if(wu=-1,Eu=0,(je&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Io()&&n.callbackNode!==a)return null;var c=ns(n,n===Nt?Ft:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Tu(n,c);else{i=c;var d=je;je|=2;var m=ug();(Nt!==n||Ft!==i)&&($r=null,To=Ye()+500,ys(n,i));do try{g0();break}catch(A){lg(n,A)}while(!0);gh(),mu.current=m,je=d,vt!==null?i=0:(Nt=null,Ft=0,i=St)}if(i!==0){if(i===2&&(d=yn(n),d!==0&&(c=d,i=Zh(n,d))),i===1)throw a=Ra,ys(n,0),_i(n,c),un(n,Ye()),a;if(i===6)_i(n,c);else{if(d=n.current.alternate,(c&30)===0&&!p0(d)&&(i=Tu(n,c),i===2&&(m=yn(n),m!==0&&(c=m,i=Zh(n,m))),i===1))throw a=Ra,ys(n,0),_i(n,c),un(n,Ye()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:vs(n,ln,$r);break;case 3:if(_i(n,c),(c&130023424)===c&&(i=Yh+500-Ye(),10<i)){if(ns(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Zt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=sh(vs.bind(null,n,ln,$r),i);break}vs(n,ln,$r);break;case 4:if(_i(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var _=31-Yt(c);m=1<<_,_=i[_],_>d&&(d=_),c&=~m}if(c=d,c=Ye()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*f0(c/1960))-c,10<c){n.timeoutHandle=sh(vs.bind(null,n,ln,$r),c);break}vs(n,ln,$r);break;case 5:vs(n,ln,$r);break;default:throw Error(t(329))}}}return un(n,Ye()),n.callbackNode===a?og.bind(null,n):null}function Zh(n,i){var a=Pa;return n.current.memoizedState.isDehydrated&&(ys(n,i).flags|=256),n=Tu(n,i),n!==2&&(i=ln,ln=a,i!==null&&ed(i)),n}function ed(n){ln===null?ln=n:ln.push.apply(ln,n)}function p0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Xn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _i(n,i){for(i&=~Qh,i&=~gu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Yt(i),c=1<<a;n[a]=-1,i&=~c}}function ag(n){if((je&6)!==0)throw Error(t(327));Io();var i=ns(n,0);if((i&1)===0)return un(n,Ye()),null;var a=Tu(n,i);if(n.tag!==0&&a===2){var c=yn(n);c!==0&&(i=c,a=Zh(n,c))}if(a===1)throw a=Ra,ys(n,0),_i(n,i),un(n,Ye()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,vs(n,ln,$r),un(n,Ye()),null}function td(n,i){var a=je;je|=1;try{return n(i)}finally{je=a,je===0&&(To=Ye()+500,Ql&&di())}}function gs(n){yi!==null&&yi.tag===0&&(je&6)===0&&Io();var i=je;je|=1;var a=Vn.transition,c=Le;try{if(Vn.transition=null,Le=1,n)return n()}finally{Le=c,Vn.transition=a,je=i,(je&6)===0&&di()}}function nd(){Tn=Eo.current,et(Eo)}function ys(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,HE(a)),vt!==null)for(a=vt.return;a!==null;){var c=a;switch(hh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Kl();break;case 3:vo(),et(sn),et(Bt),Sh();break;case 5:Th(c);break;case 4:vo();break;case 13:et(it);break;case 19:et(it);break;case 10:yh(c.type._context);break;case 22:case 23:nd()}a=a.return}if(Nt=n,vt=n=wi(n.current,null),Ft=Tn=i,St=0,Ra=null,Qh=gu=ms=0,ln=Pa=null,ds!==null){for(i=0;i<ds.length;i++)if(a=ds[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var _=m.next;m.next=d,c.next=_}a.pending=c}ds=null}return n}function lg(n,i){do{var a=vt;try{if(gh(),su.current=uu,ou){for(var c=st.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ou=!1}if(ps=0,Pt=It=st=null,Ta=!1,Ia=0,Gh.current=null,a===null||a.return===null){St=1,Ra=i,vt=null;break}e:{var m=n,_=a.return,A=a,P=i;if(i=Ft,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,Y=A,J=Y.tag;if((Y.mode&1)===0&&(J===0||J===11||J===15)){var G=Y.alternate;G?(Y.updateQueue=G.updateQueue,Y.memoizedState=G.memoizedState,Y.lanes=G.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var ae=Om(_);if(ae!==null){ae.flags&=-257,Vm(ae,_,A,m,i),ae.mode&1&&Dm(m,z,i),i=ae,P=z;var he=i.updateQueue;if(he===null){var de=new Set;de.add(P),i.updateQueue=de}else he.add(P);break e}else{if((i&1)===0){Dm(m,z,i),rd();break e}P=Error(t(426))}}else if(rt&&A.mode&1){var pt=Om(_);if(pt!==null){(pt.flags&65536)===0&&(pt.flags|=256),Vm(pt,_,A,m,i),ph(_o(P,A));break e}}m=P=_o(P,A),St!==4&&(St=2),Pa===null?Pa=[m]:Pa.push(m),m=_;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var F=Nm(m,P,i);rm(m,F);break e;case 1:A=P;var V=m.type,U=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(gi===null||!gi.has(U)))){m.flags|=65536,i&=-i,m.lanes|=i;var Z=xm(m,A,i);rm(m,Z);break e}}m=m.return}while(m!==null)}hg(a)}catch(pe){i=pe,vt===a&&a!==null&&(vt=a=a.return);continue}break}while(!0)}function ug(){var n=mu.current;return mu.current=uu,n===null?uu:n}function rd(){(St===0||St===3||St===2)&&(St=4),Nt===null||(ms&268435455)===0&&(gu&268435455)===0||_i(Nt,Ft)}function Tu(n,i){var a=je;je|=2;var c=ug();(Nt!==n||Ft!==i)&&($r=null,ys(n,i));do try{m0();break}catch(d){lg(n,d)}while(!0);if(gh(),je=a,mu.current=c,vt!==null)throw Error(t(261));return Nt=null,Ft=0,St}function m0(){for(;vt!==null;)cg(vt)}function g0(){for(;vt!==null&&!_l();)cg(vt)}function cg(n){var i=pg(n.alternate,n,Tn);n.memoizedProps=n.pendingProps,i===null?hg(n):vt=i,Gh.current=null}function hg(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=l0(a,i,Tn),a!==null){vt=a;return}}else{if(a=u0(a,i),a!==null){a.flags&=32767,vt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{St=6,vt=null;return}}if(i=i.sibling,i!==null){vt=i;return}vt=i=n}while(i!==null);St===0&&(St=5)}function vs(n,i,a){var c=Le,d=Vn.transition;try{Vn.transition=null,Le=1,y0(n,i,a,c)}finally{Vn.transition=d,Le=c}return null}function y0(n,i,a,c){do Io();while(yi!==null);if((je&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ge(n,m),n===Nt&&(vt=Nt=null,Ft=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||vu||(vu=!0,mg(kn,function(){return Io(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Vn.transition,Vn.transition=null;var _=Le;Le=1;var A=je;je|=4,Gh.current=null,h0(n,a),tg(a,n),LE(rh),oi=!!nh,rh=nh=null,n.current=a,d0(a),jc(),je=A,Le=_,Vn.transition=m}else n.current=a;if(vu&&(vu=!1,yi=n,_u=d),m=n.pendingLanes,m===0&&(gi=null),Tl(a.stateNode),un(n,Ye()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(yu)throw yu=!1,n=Xh,Xh=null,n;return(_u&1)!==0&&n.tag!==0&&Io(),m=n.pendingLanes,(m&1)!==0?n===Jh?Na++:(Na=0,Jh=n):Na=0,di(),null}function Io(){if(yi!==null){var n=ii(_u),i=Vn.transition,a=Le;try{if(Vn.transition=null,Le=16>n?16:n,yi===null)var c=!1;else{if(n=yi,yi=null,_u=0,(je&6)!==0)throw Error(t(331));var d=je;for(je|=4,ue=n.current;ue!==null;){var m=ue,_=m.child;if((ue.flags&16)!==0){var A=m.deletions;if(A!==null){for(var P=0;P<A.length;P++){var z=A[P];for(ue=z;ue!==null;){var Y=ue;switch(Y.tag){case 0:case 11:case 15:ka(8,Y,m)}var J=Y.child;if(J!==null)J.return=Y,ue=J;else for(;ue!==null;){Y=ue;var G=Y.sibling,ae=Y.return;if(Ym(Y),Y===z){ue=null;break}if(G!==null){G.return=ae,ue=G;break}ue=ae}}}var he=m.alternate;if(he!==null){var de=he.child;if(de!==null){he.child=null;do{var pt=de.sibling;de.sibling=null,de=pt}while(de!==null)}}ue=m}}if((m.subtreeFlags&2064)!==0&&_!==null)_.return=m,ue=_;else e:for(;ue!==null;){if(m=ue,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ka(9,m,m.return)}var F=m.sibling;if(F!==null){F.return=m.return,ue=F;break e}ue=m.return}}var V=n.current;for(ue=V;ue!==null;){_=ue;var U=_.child;if((_.subtreeFlags&2064)!==0&&U!==null)U.return=_,ue=U;else e:for(_=V;ue!==null;){if(A=ue,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:pu(9,A)}}catch(pe){ut(A,A.return,pe)}if(A===_){ue=null;break e}var Z=A.sibling;if(Z!==null){Z.return=A.return,ue=Z;break e}ue=A.return}}if(je=d,di(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(ts,n)}catch{}c=!0}return c}finally{Le=a,Vn.transition=i}}return!1}function dg(n,i,a){i=_o(a,i),i=Nm(n,i,1),n=pi(n,i,1),i=Zt(),n!==null&&(ni(n,1,i),un(n,i))}function ut(n,i,a){if(n.tag===3)dg(n,n,a);else for(;i!==null;){if(i.tag===3){dg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gi===null||!gi.has(c))){n=_o(a,n),n=xm(i,n,1),i=pi(i,n,1),n=Zt(),i!==null&&(ni(i,1,n),un(i,n));break}}i=i.return}}function v0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Zt(),n.pingedLanes|=n.suspendedLanes&a,Nt===n&&(Ft&a)===a&&(St===4||St===3&&(Ft&130023424)===Ft&&500>Ye()-Yh?ys(n,0):Qh|=a),un(n,i)}function fg(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ws,Ws<<=1,(Ws&130023424)===0&&(Ws=4194304)));var a=Zt();n=jr(n,i),n!==null&&(ni(n,i,a),un(n,a))}function _0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),fg(n,a)}function w0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),fg(n,a)}var pg;pg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||sn.current)an=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return an=!1,a0(n,i,a);an=(n.flags&131072)!==0}else an=!1,rt&&(i.flags&1048576)!==0&&Kp(i,Xl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;du(n,i),n=i.pendingProps;var d=co(i,Bt.current);yo(i,a),d=kh(null,i,c,n,d,a);var m=Rh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,on(c)?(m=!0,Gl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,wh(i),d.updater=cu,i.stateNode=d,d._reactInternals=i,Vh(i,c,n,a),i=Fh(null,i,c,!0,m,a)):(i.tag=0,rt&&m&&ch(i),Jt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(du(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=T0(c),n=Zn(c,n),d){case 0:i=Lh(null,i,c,n,a);break e;case 1:i=jm(null,i,c,n,a);break e;case 11:i=Mm(null,i,c,n,a);break e;case 14:i=bm(null,i,c,Zn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Zn(c,d),Lh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Zn(c,d),jm(n,i,c,d,a);case 3:e:{if(zm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,nm(n,i),ru(i,c,null,a);var _=i.memoizedState;if(c=_.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=_o(Error(t(423)),i),i=Bm(n,i,c,a,d);break e}else if(c!==d){d=_o(Error(t(424)),i),i=Bm(n,i,c,a,d);break e}else for(En=ui(i.stateNode.containerInfo.firstChild),wn=i,rt=!0,Jn=null,a=em(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(po(),c===d){i=Br(n,i,a);break e}Jt(n,i,c,a)}i=i.child}return i;case 5:return sm(i),n===null&&fh(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,_=d.children,ih(c,d)?_=null:m!==null&&ih(c,m)&&(i.flags|=32),Um(n,i),Jt(n,i,_,a),i.child;case 6:return n===null&&fh(i),null;case 13:return $m(n,i,a);case 4:return Eh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=mo(i,null,c,a):Jt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Zn(c,d),Mm(n,i,c,d,a);case 7:return Jt(n,i,i.pendingProps,a),i.child;case 8:return Jt(n,i,i.pendingProps.children,a),i.child;case 12:return Jt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,_=d.value,Xe(eu,c._currentValue),c._currentValue=_,m!==null)if(Xn(m.value,_)){if(m.children===d.children&&!sn.current){i=Br(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var A=m.dependencies;if(A!==null){_=m.child;for(var P=A.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=zr(-1,a&-a),P.tag=2;var z=m.updateQueue;if(z!==null){z=z.shared;var Y=z.pending;Y===null?P.next=P:(P.next=Y.next,Y.next=P),z.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),vh(m.return,a,i),A.lanes|=a;break}P=P.next}}else if(m.tag===10)_=m.type===i.type?null:m.child;else if(m.tag===18){if(_=m.return,_===null)throw Error(t(341));_.lanes|=a,A=_.alternate,A!==null&&(A.lanes|=a),vh(_,a,i),_=m.sibling}else _=m.child;if(_!==null)_.return=m;else for(_=m;_!==null;){if(_===i){_=null;break}if(m=_.sibling,m!==null){m.return=_.return,_=m;break}_=_.return}m=_}Jt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,yo(i,a),d=Dn(d),c=c(d),i.flags|=1,Jt(n,i,c,a),i.child;case 14:return c=i.type,d=Zn(c,i.pendingProps),d=Zn(c.type,d),bm(n,i,c,d,a);case 15:return Lm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Zn(c,d),du(n,i),i.tag=1,on(c)?(n=!0,Gl(i)):n=!1,yo(i,a),Rm(i,c,d),Vh(i,c,d,a),Fh(null,i,c,!0,n,a);case 19:return Wm(n,i,a);case 22:return Fm(n,i,a)}throw Error(t(156,i.tag))};function mg(n,i){return $s(n,i)}function E0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(n,i,a,c){return new E0(n,i,a,c)}function id(n){return n=n.prototype,!(!n||!n.isReactComponent)}function T0(n){if(typeof n=="function")return id(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===tt)return 14}return 2}function wi(n,i){var a=n.alternate;return a===null?(a=Mn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Iu(n,i,a,c,d,m){var _=2;if(c=n,typeof n=="function")id(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case O:return _s(a.children,d,m,i);case S:_=8,d|=8;break;case R:return n=Mn(12,a,i,d|2),n.elementType=R,n.lanes=m,n;case C:return n=Mn(13,a,i,d),n.elementType=C,n.lanes=m,n;case Ke:return n=Mn(19,a,i,d),n.elementType=Ke,n.lanes=m,n;case ze:return Su(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:_=10;break e;case M:_=9;break e;case b:_=11;break e;case tt:_=14;break e;case ct:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Mn(_,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function _s(n,i,a,c){return n=Mn(7,n,c,i),n.lanes=a,n}function Su(n,i,a,c){return n=Mn(22,n,c,i),n.elementType=ze,n.lanes=a,n.stateNode={isHidden:!1},n}function sd(n,i,a){return n=Mn(6,n,null,i),n.lanes=a,n}function od(n,i,a){return i=Mn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function I0(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ad(n,i,a,c,d,m,_,A,P){return n=new I0(n,i,a,A,P),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Mn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(m),n}function S0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function gg(n){if(!n)return hi;n=n._reactInternals;e:{if(Hn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(on(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(on(a))return Hp(n,a,i)}return i}function yg(n,i,a,c,d,m,_,A,P){return n=ad(a,c,!0,n,d,m,_,A,P),n.context=gg(null),a=n.current,c=Zt(),d=vi(a),m=zr(c,d),m.callback=i??null,pi(a,m,d),n.current.lanes=d,ni(n,d,c),un(n,c),n}function Au(n,i,a,c){var d=i.current,m=Zt(),_=vi(d);return a=gg(a),i.context===null?i.context=a:i.pendingContext=a,i=zr(m,_),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=pi(d,i,_),n!==null&&(nr(n,d,_,m),nu(n,d,_)),_}function Cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function vg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ld(n,i){vg(n,i),(n=n.alternate)&&vg(n,i)}function A0(){return null}var _g=typeof reportError=="function"?reportError:function(n){console.error(n)};function ud(n){this._internalRoot=n}ku.prototype.render=ud.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Au(n,i,null,null)},ku.prototype.unmount=ud.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;gs(function(){Au(null,n,null,null)}),i[br]=null}};function ku(n){this._internalRoot=n}ku.prototype.unstable_scheduleHydration=function(n){if(n){var i=kl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<hr.length&&i!==0&&i<hr[a].priority;a++);hr.splice(a,0,n),a===0&&Nl(n)}};function cd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function wg(){}function C0(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var z=Cu(_);m.call(z)}}var _=yg(i,c,n,0,null,!1,!1,"",wg);return n._reactRootContainer=_,n[br]=_.current,pa(n.nodeType===8?n.parentNode:n),gs(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var z=Cu(P);A.call(z)}}var P=ad(n,0,!1,null,null,!1,!1,"",wg);return n._reactRootContainer=P,n[br]=P.current,pa(n.nodeType===8?n.parentNode:n),gs(function(){Au(i,P,a,c)}),P}function Pu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var _=m;if(typeof d=="function"){var A=d;d=function(){var P=Cu(_);A.call(P)}}Au(i,_,n,d)}else _=C0(a,i,n,d,c);return Cu(_)}Al=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=ei(i.pendingLanes);a!==0&&(ri(i,a|1),un(i,Ye()),(je&6)===0&&(To=Ye()+500,di()))}break;case 13:gs(function(){var c=jr(n,1);if(c!==null){var d=Zt();nr(c,n,1,d)}}),ld(n,1)}},qs=function(n){if(n.tag===13){var i=jr(n,134217728);if(i!==null){var a=Zt();nr(i,n,134217728,a)}ld(n,134217728)}},Cl=function(n){if(n.tag===13){var i=vi(n),a=jr(n,i);if(a!==null){var c=Zt();nr(a,n,i,c)}ld(n,i)}},kl=function(){return Le},Rl=function(n,i){var a=Le;try{return Le=n,i()}finally{Le=a}},Ls=function(n,i,a){switch(i){case"input":if(Vt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=ql(c);if(!d)throw Error(t(90));He(c),Vt(c,d)}}}break;case"textarea":Rr(n,a);break;case"select":i=a.value,i!=null&&Fn(n,!!a.multiple,i,!1)}},Yi=td,Qo=gs;var k0={usingClientEntryPoint:!1,Events:[ya,lo,ql,ur,Go,td]},xa={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R0={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Jo(n),n===null?null:n.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||A0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{ts=Nu.inject(R0),gn=Nu}catch{}}return cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k0,cn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(i))throw Error(t(200));return S0(n,i,null,a)},cn.createRoot=function(n,i){if(!cd(n))throw Error(t(299));var a=!1,c="",d=_g;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ad(n,1,!1,null,null,a,!1,c,d),n[br]=i.current,pa(n.nodeType===8?n.parentNode:n),new ud(i)},cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Jo(i),n=n===null?null:n.stateNode,n},cn.flushSync=function(n){return gs(n)},cn.hydrate=function(n,i,a){if(!Ru(i))throw Error(t(200));return Pu(null,n,i,!0,a)},cn.hydrateRoot=function(n,i,a){if(!cd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",_=_g;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=yg(i,null,n,1,a??null,d,!1,m,_),n[br]=i.current,pa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ku(i)},cn.render=function(n,i,a){if(!Ru(i))throw Error(t(200));return Pu(null,n,i,!1,a)},cn.unmountComponentAtNode=function(n){if(!Ru(n))throw Error(t(40));return n._reactRootContainer?(gs(function(){Pu(null,null,n,!1,function(){n._reactRootContainer=null,n[br]=null})}),!0):!1},cn.unstable_batchedUpdates=td,cn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ru(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Pu(n,i,a,!1,c)},cn.version="18.3.1-next-f1338f8080-20240426",cn}var Rg;function L0(){if(Rg)return fd.exports;Rg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),fd.exports=b0(),fd.exports}var Pg;function F0(){if(Pg)return xu;Pg=1;var r=L0();return xu.createRoot=r.createRoot,xu.hydrateRoot=r.hydrateRoot,xu}var U0=F0();const j0=mv(U0),z0=()=>{};var Ng={};/**
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
 */const gv=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},B0=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},yv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,T=l>>2,I=(l&3)<<4|f>>4;let k=(f&15)<<2|v>>6,j=v&63;g||(j=64,h||(k=64)),s.push(t[T],t[I],t[k],t[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(gv(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):B0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const I=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||v==null||I==null)throw new $0;const k=l<<2|f>>4;if(s.push(k),v!==64){const j=f<<4&240|v>>2;if(s.push(j),I!==64){const W=v<<6&192|I;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class $0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const H0=function(r){const e=gv(r);return yv.encodeByteArray(e,!0)},Gu=function(r){return H0(r).replace(/\./g,"")},vv=function(r){try{return yv.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function W0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const q0=()=>W0().__FIREBASE_DEFAULTS__,K0=()=>{if(typeof process>"u"||typeof Ng>"u")return;const r=Ng.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},G0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&vv(r[1]);return e&&JSON.parse(e)},mc=()=>{try{return z0()||q0()||K0()||G0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},_v=r=>{var e,t;return(t=(e=mc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},wv=r=>{const e=_v(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ev=()=>{var r;return(r=mc())===null||r===void 0?void 0:r.config},Tv=r=>{var e;return(e=mc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class Q0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function xs(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ff(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Y0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Gu(JSON.stringify(t)),Gu(JSON.stringify(h)),""].join(".")}const Ua={};function X0(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ua))Ua[e]?r.emulator.push(e):r.prod.push(e);return r}function J0(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let xg=!1;function pf(r,e){if(typeof window>"u"||typeof document>"u"||!xs(window.location.host)||Ua[r]===e||Ua[r]||xg)return;Ua[r]=e;function t(k){return`__firebase__banner__${k}`}const s="__firebase__banner",l=X0().prod.length>0;function h(){const k=document.getElementById(s);k&&k.remove()}function f(k){k.style.display="flex",k.style.background="#7faaf0",k.style.position="fixed",k.style.bottom="5px",k.style.left="5px",k.style.padding=".5em",k.style.borderRadius="5px",k.style.alignItems="center"}function g(k,j){k.setAttribute("width","24"),k.setAttribute("id",j),k.setAttribute("height","24"),k.setAttribute("viewBox","0 0 24 24"),k.setAttribute("fill","none"),k.style.marginLeft="-6px"}function v(){const k=document.createElement("span");return k.style.cursor="pointer",k.style.marginLeft="16px",k.style.fontSize="24px",k.innerHTML=" &times;",k.onclick=()=>{xg=!0,h()},k}function T(k,j){k.setAttribute("id",j),k.innerText="Learn more",k.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",k.setAttribute("target","__blank"),k.style.paddingLeft="5px",k.style.textDecoration="underline"}function I(){const k=J0(s),j=t("text"),W=document.getElementById(j)||document.createElement("span"),X=t("learnmore"),$=document.getElementById(X)||document.createElement("a"),me=t("preprendIcon"),fe=document.getElementById(me)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(k.created){const ce=k.element;f(ce),T($,X);const Se=v();g(fe,me),ce.append(fe,W,$,Se),document.body.appendChild(ce)}l?(W.innerText="Preview backend disconnected.",fe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(fe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function Qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Z0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qt())}function eT(){var r;const e=(r=mc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mf(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function nT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rT(){const r=Qt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function iT(){return!eT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gf(){try{return typeof indexedDB=="object"}catch{return!1}}function yf(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function Iv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const sT="FirebaseError";class ar extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=sT,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?oT(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new ar(o,f,s)}}function oT(r,e){return r.replace(aT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const aT=/\{\$([^}]+)}/g;function lT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Di(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Dg(l)&&Dg(h)){if(!Di(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Dg(r){return r!==null&&typeof r=="object"}/**
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
 */function sl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Oa(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Va(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function uT(r,e){const t=new cT(r,e);return t.subscribe.bind(t)}class cT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");hT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=gd),o.error===void 0&&(o.error=gd),o.complete===void 0&&(o.complete=gd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function gd(){}/**
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
 */const dT=1e3,fT=2,pT=14400*1e3,mT=.5;function Og(r,e=dT,t=fT){const s=e*Math.pow(t,r),o=Math.round(mT*s*(Math.random()-.5)*2);return Math.min(pT,s+o)}/**
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
 */function Et(r){return r&&r._delegate?r._delegate:r}class Ln{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class gT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Q0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vT(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yT(r){return r===Es?void 0:r}function vT(r){return r.instantiationMode==="EAGER"}/**
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
 */class _T{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const wT={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},ET=Oe.INFO,TT={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},IT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=TT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=ET,this._logHandler=IT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const ST=(r,e)=>e.some(t=>r instanceof t);let Vg,Mg;function AT(){return Vg||(Vg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CT(){return Mg||(Mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sv=new WeakMap,Dd=new WeakMap,Av=new WeakMap,yd=new WeakMap,vf=new WeakMap;function kT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Ri(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Sv.set(t,r)}).catch(()=>{}),vf.set(e,r),e}function RT(r){if(Dd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Dd.set(r,e)}let Od={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Dd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Av.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ri(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function PT(r){Od=r(Od)}function NT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(vd(this),e,...t);return Av.set(s,e.sort?e.sort():[e]),Ri(s)}:CT().includes(r)?function(...e){return r.apply(vd(this),e),Ri(Sv.get(this))}:function(...e){return Ri(r.apply(vd(this),e))}}function xT(r){return typeof r=="function"?NT(r):(r instanceof IDBTransaction&&RT(r),ST(r,AT())?new Proxy(r,Od):r)}function Ri(r){if(r instanceof IDBRequest)return kT(r);if(yd.has(r))return yd.get(r);const e=xT(r);return e!==r&&(yd.set(r,e),vf.set(e,r)),e}const vd=r=>vf.get(r);function Cv(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=Ri(h);return s&&h.addEventListener("upgradeneeded",g=>{s(Ri(h.result),g.oldVersion,g.newVersion,Ri(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}const DT=["get","getKey","getAll","getAllKeys","count"],OT=["put","add","delete","clear"],_d=new Map;function bg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(_d.get(e))return _d.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=OT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||DT.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&g.done]))[0]};return _d.set(e,l),l}PT(r=>({...r,get:(e,t,s)=>bg(e,t)||r.get(e,t,s),has:(e,t)=>!!bg(e,t)||r.has(e,t)}));/**
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
 */class VT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(MT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function MT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vd="@firebase/app",Lg="0.13.2";/**
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
 */const Kr=new gc("@firebase/app"),bT="@firebase/app-compat",LT="@firebase/analytics-compat",FT="@firebase/analytics",UT="@firebase/app-check-compat",jT="@firebase/app-check",zT="@firebase/auth",BT="@firebase/auth-compat",$T="@firebase/database",HT="@firebase/data-connect",WT="@firebase/database-compat",qT="@firebase/functions",KT="@firebase/functions-compat",GT="@firebase/installations",QT="@firebase/installations-compat",YT="@firebase/messaging",XT="@firebase/messaging-compat",JT="@firebase/performance",ZT="@firebase/performance-compat",eI="@firebase/remote-config",tI="@firebase/remote-config-compat",nI="@firebase/storage",rI="@firebase/storage-compat",iI="@firebase/firestore",sI="@firebase/ai",oI="@firebase/firestore-compat",aI="firebase",lI="11.10.0";/**
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
 */const Md="[DEFAULT]",uI={[Vd]:"fire-core",[bT]:"fire-core-compat",[FT]:"fire-analytics",[LT]:"fire-analytics-compat",[jT]:"fire-app-check",[UT]:"fire-app-check-compat",[zT]:"fire-auth",[BT]:"fire-auth-compat",[$T]:"fire-rtdb",[HT]:"fire-data-connect",[WT]:"fire-rtdb-compat",[qT]:"fire-fn",[KT]:"fire-fn-compat",[GT]:"fire-iid",[QT]:"fire-iid-compat",[YT]:"fire-fcm",[XT]:"fire-fcm-compat",[JT]:"fire-perf",[ZT]:"fire-perf-compat",[eI]:"fire-rc",[tI]:"fire-rc-compat",[nI]:"fire-gcs",[rI]:"fire-gcs-compat",[iI]:"fire-fst",[oI]:"fire-fst-compat",[sI]:"fire-vertex","fire-js":"fire-js",[aI]:"fire-js-all"};/**
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
 */const Qu=new Map,cI=new Map,bd=new Map;function Fg(r,e){try{r.container.addComponent(e)}catch(t){Kr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function sr(r){const e=r.name;if(bd.has(e))return Kr.debug(`There were multiple attempts to register component ${e}.`),!1;bd.set(e,r);for(const t of Qu.values())Fg(t,r);for(const t of cI.values())Fg(t,r);return!0}function zi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function In(r){return r==null?!1:r.settings!==void 0}/**
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
 */const hI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pi=new Ds("app","Firebase",hI);/**
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
 */class dI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pi.create("app-deleted",{appName:this._name})}}/**
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
 */const Fo=lI;function kv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Md,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw Pi.create("bad-app-name",{appName:String(o)});if(t||(t=Ev()),!t)throw Pi.create("no-options");const l=Qu.get(o);if(l){if(Di(t,l.options)&&Di(s,l.config))return l;throw Pi.create("duplicate-app",{appName:o})}const h=new _T(o);for(const g of bd.values())h.addComponent(g);const f=new dI(t,s,h);return Qu.set(o,f),f}function yc(r=Md){const e=Qu.get(r);if(!e&&r===Md&&Ev())return kv();if(!e)throw Pi.create("no-app",{appName:r});return e}function fn(r,e,t){var s;let o=(s=uI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kr.warn(f.join(" "));return}sr(new Ln(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const fI="firebase-heartbeat-database",pI=1,Ka="firebase-heartbeat-store";let wd=null;function Rv(){return wd||(wd=Cv(fI,pI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ka)}catch(t){console.warn(t)}}}}).catch(r=>{throw Pi.create("idb-open",{originalErrorMessage:r.message})})),wd}async function mI(r){try{const t=(await Rv()).transaction(Ka),s=await t.objectStore(Ka).get(Pv(r));return await t.done,s}catch(e){if(e instanceof ar)Kr.warn(e.message);else{const t=Pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kr.warn(t.message)}}}async function Ug(r,e){try{const s=(await Rv()).transaction(Ka,"readwrite");await s.objectStore(Ka).put(e,Pv(r)),await s.done}catch(t){if(t instanceof ar)Kr.warn(t.message);else{const s=Pi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Kr.warn(s.message)}}}function Pv(r){return`${r.name}!${r.options.appId}`}/**
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
 */const gI=1024,yI=30;class vI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=jg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>yI){const h=EI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Kr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jg(),{heartbeatsToSend:s,unsentEntries:o}=_I(this._heartbeatsCache.heartbeats),l=Gu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Kr.warn(t),""}}}function jg(){return new Date().toISOString().substring(0,10)}function _I(r,e=gI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),zg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),zg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class wI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gf()?yf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ug(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ug(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function zg(r){return Gu(JSON.stringify({version:2,heartbeats:r})).length}function EI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function TI(r){sr(new Ln("platform-logger",e=>new VT(e),"PRIVATE")),sr(new Ln("heartbeat",e=>new vI(e),"PRIVATE")),fn(Vd,Lg,r),fn(Vd,Lg,"esm2017"),fn("fire-js","")}TI("");function _f(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function Nv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const II=Nv,xv=new Ds("auth","Firebase",Nv());/**
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
 */const Yu=new gc("@firebase/auth");function SI(r,...e){Yu.logLevel<=Oe.WARN&&Yu.warn(`Auth (${Fo}): ${r}`,...e)}function Fu(r,...e){Yu.logLevel<=Oe.ERROR&&Yu.error(`Auth (${Fo}): ${r}`,...e)}/**
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
 */function or(r,...e){throw wf(r,...e)}function wr(r,...e){return wf(r,...e)}function Dv(r,e,t){const s=Object.assign(Object.assign({},II()),{[e]:t});return new Ds("auth","Firebase",s).create(e,{appName:r.name})}function qr(r){return Dv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return xv.create(r,...e)}function Te(r,e,...t){if(!r)throw wf(e,...t)}function Hr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Fu(e),new Error(e)}function Gr(r,e){r||Hr(e)}/**
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
 */function Ld(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function AI(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function CI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AI()||mf()||"connection"in navigator)?navigator.onLine:!0}function kI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ol{constructor(e,t){this.shortDelay=e,this.longDelay=t,Gr(t>e,"Short delay should be less than long delay!"),this.isMobile=Z0()||nT()}get(){return CI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ef(r,e){Gr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ov{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const RI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],NI=new ol(3e4,6e4);function Bi(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function $i(r,e,t,s,o={}){return Vv(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=sl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:g},l);return tT()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&xs(r.emulatorConfig.host)&&(v.credentials="include"),Ov.fetch()(await Mv(r,r.config.apiHost,t,f),v)})}async function Vv(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},RI),e);try{const o=new DI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Du(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,v]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Du(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Du(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Du(r,"user-disabled",h);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Dv(r,T,v);or(r,T)}}catch(o){if(o instanceof ar)throw o;or(r,"network-request-failed",{message:String(o)})}}async function al(r,e,t,s,o={}){const l=await $i(r,e,t,s,o);return"mfaPendingCredential"in l&&or(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function Mv(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?Ef(r.config,o):`${r.config.apiScheme}://${o}`;return PI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function xI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(wr(this.auth,"network-request-failed")),NI.get())})}}function Du(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=wr(r,e,s);return o.customData._tokenResponse=t,o}function $g(r){return r!==void 0&&r.enterprise!==void 0}class OI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function VI(r,e){return $i(r,"GET","/v2/recaptchaConfig",Bi(r,e))}/**
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
 */async function MI(r,e){return $i(r,"POST","/v1/accounts:delete",e)}async function Xu(r,e){return $i(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ja(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bI(r,e=!1){const t=Et(r),s=await t.getIdToken(e),o=Tf(s);Te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:ja(Ed(o.auth_time)),issuedAtTime:ja(Ed(o.iat)),expirationTime:ja(Ed(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Ed(r){return Number(r)*1e3}function Tf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Fu("JWT malformed, contained fewer than 3 sections"),null;try{const o=vv(t);return o?JSON.parse(o):(Fu("Failed to decode base64 JWT payload"),null)}catch(o){return Fu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Hg(r){const e=Tf(r);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ga(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ar&&LI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function LI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class FI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ja(this.lastLoginAt),this.creationTime=ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ju(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Ga(r,Xu(t,{idToken:s}));Te(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?bv(l.providerUserInfo):[],f=jI(r.providerData,h),g=r.isAnonymous,v=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),T=g?v:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Fd(l.createdAt,l.lastLoginAt),isAnonymous:T};Object.assign(r,I)}async function UI(r){const e=Et(r);await Ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function bv(r){return r.map(e=>{var{providerId:t}=e,s=_f(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function zI(r,e){const t=await Vv(r,{},async()=>{const s=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await Mv(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:s};return r.emulatorConfig&&xs(r.emulatorConfig.host)&&(g.credentials="include"),Ov.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function BI(r,e){return $i(r,"POST","/v2/accounts:revokeToken",Bi(r,e))}/**
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
 */class Po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=Hg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await zI(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Po;return s&&(Te(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Te(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Te(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Po,this.toJSON())}_performRefresh(){return Hr("not implemented")}}/**
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
 */function Ti(r,e){Te(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=_f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Fd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ga(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bI(this,e)}reload(){return UI(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ju(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(qr(this.auth));const e=await this.getIdToken();return await Ga(this,MI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,g,v,T;const I=(s=t.displayName)!==null&&s!==void 0?s:void 0,k=(o=t.email)!==null&&o!==void 0?o:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,W=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(f=t.tenantId)!==null&&f!==void 0?f:void 0,$=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,me=(v=t.createdAt)!==null&&v!==void 0?v:void 0,fe=(T=t.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:ce,emailVerified:Se,isAnonymous:Me,providerData:ke,stsTokenManager:O}=t;Te(ce&&O,e,"internal-error");const S=Po.fromJSON(this.name,O);Te(typeof ce=="string",e,"internal-error"),Ti(I,e.name),Ti(k,e.name),Te(typeof Se=="boolean",e,"internal-error"),Te(typeof Me=="boolean",e,"internal-error"),Ti(j,e.name),Ti(W,e.name),Ti(X,e.name),Ti($,e.name),Ti(me,e.name),Ti(fe,e.name);const R=new rr({uid:ce,auth:e,email:k,emailVerified:Se,displayName:I,isAnonymous:Me,photoURL:W,phoneNumber:j,tenantId:X,stsTokenManager:S,createdAt:me,lastLoginAt:fe});return ke&&Array.isArray(ke)&&(R.providerData=ke.map(x=>Object.assign({},x))),$&&(R._redirectEventId=$),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new Po;o.updateFromServerResponse(t);const l=new rr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ju(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Te(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?bv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Po;f.updateFromIdToken(s);const g=new rr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Fd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,v),g}}/**
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
 */const Wg=new Map;function Wr(r){Gr(r instanceof Function,"Expected a class definition");let e=Wg.get(r);return e?(Gr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Wg.set(r,e),e)}/**
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
 */class Lv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lv.type="NONE";const qg=Lv;/**
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
 */function Uu(r,e,t){return`firebase:${r}:${e}:${t}`}class No{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Uu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Uu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xu(this.auth,{idToken:e}).catch(()=>{});return t?rr._fromGetAccountInfoResponse(this.auth,t,e):null}return rr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new No(Wr(qg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Wr(qg);const h=Uu(s,e.config.apiKey,e.name);let f=null;for(const v of t)try{const T=await v._get(h);if(T){let I;if(typeof T=="string"){const k=await Xu(e,{idToken:T}).catch(()=>{});if(!k)break;I=await rr._fromGetAccountInfoResponse(e,k,T)}else I=rr._fromJSON(e,T);v!==l&&(f=I),l=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new No(l,e,s):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new No(l,e,s))}}/**
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
 */function Kg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($v(e))return"Blackberry";if(Hv(e))return"Webos";if(Uv(e))return"Safari";if((e.includes("chrome/")||jv(e))&&!e.includes("edge/"))return"Chrome";if(Bv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fv(r=Qt()){return/firefox\//i.test(r)}function Uv(r=Qt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jv(r=Qt()){return/crios\//i.test(r)}function zv(r=Qt()){return/iemobile/i.test(r)}function Bv(r=Qt()){return/android/i.test(r)}function $v(r=Qt()){return/blackberry/i.test(r)}function Hv(r=Qt()){return/webos/i.test(r)}function If(r=Qt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function $I(r=Qt()){var e;return If(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HI(){return rT()&&document.documentMode===10}function Wv(r=Qt()){return If(r)||Bv(r)||Hv(r)||$v(r)||/windows phone/i.test(r)||zv(r)}/**
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
 */function qv(r,e=[]){let t;switch(r){case"Browser":t=Kg(Qt());break;case"Worker":t=`${Kg(Qt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fo}/${s}`}/**
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
 */class WI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function qI(r,e={}){return $i(r,"GET","/v2/passwordPolicy",Bi(r,e))}/**
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
 */const KI=6;class GI{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:KI,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class QI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gg(this),this.idTokenSubscription=new Gg(this),this.beforeStateQueue=new WI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xu(this,{idToken:e}),s=await rr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(In(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ju(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(qr(this));const t=e?Et(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qI(this),t=new GI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ds("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await BI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wr(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[Wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(In(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&SI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Os(r){return Et(r)}class Gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=uT(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YI(r){vc=r}function Kv(r){return vc.loadJS(r)}function XI(){return vc.recaptchaEnterpriseScript}function JI(){return vc.gapiScript}function ZI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class e1{constructor(){this.enterprise=new t1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class t1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const n1="recaptcha-enterprise",Gv="NO_RECAPTCHA";class r1{constructor(e){this.type=n1,this.auth=Os(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{VI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new OI(g);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,h(v.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;$g(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(v=>{h(v)}).catch(()=>{h(Gv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new e1().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&$g(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=XI();g.length!==0&&(g+=f),Kv(g).then(()=>{o(f,l,h)}).catch(v=>{h(v)})}}).catch(f=>{h(f)})})}}async function Qg(r,e,t,s=!1,o=!1){const l=new r1(r);let h;if(o)h=Gv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,v=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Ud(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Qg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Qg(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
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
 */function i1(r,e){const t=zi(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Di(l,e??{}))return o;or(o,"already-initialized")}return t.initialize({options:e})}function s1(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Wr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function o1(r,e,t){const s=Os(r);Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Qv(e),{host:h,port:f}=a1(e),g=f===null?"":`:${f}`,v={url:`${l}//${h}${g}/`},T=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Te(Di(v,s.config.emulator)&&Di(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,xs(h)?(ff(`${l}//${h}${g}`),pf("Auth",!0)):l1()}function Qv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function a1(r){const e=Qv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Yg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Yg(h)}}}function Yg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function l1(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Sf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Hr("not implemented")}_getIdTokenResponse(e){return Hr("not implemented")}_linkToIdToken(e,t){return Hr("not implemented")}_getReauthenticationResolver(e){return Hr("not implemented")}}async function u1(r,e){return $i(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function c1(r,e){return al(r,"POST","/v1/accounts:signInWithPassword",Bi(r,e))}/**
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
 */async function h1(r,e){return al(r,"POST","/v1/accounts:signInWithEmailLink",Bi(r,e))}async function d1(r,e){return al(r,"POST","/v1/accounts:signInWithEmailLink",Bi(r,e))}/**
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
 */class Qa extends Sf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Qa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Qa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ud(e,t,"signInWithPassword",c1);case"emailLink":return h1(e,{email:this._email,oobCode:this._password});default:or(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ud(e,s,"signUpPassword",u1);case"emailLink":return d1(e,{idToken:t,email:this._email,oobCode:this._password});default:or(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xo(r,e){return al(r,"POST","/v1/accounts:signInWithIdp",Bi(r,e))}/**
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
 */const f1="http://localhost";class As extends Sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):or("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=_f(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new As(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return xo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,xo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xo(e,t)}buildRequest(){const e={requestUri:f1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sl(t)}return e}}/**
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
 */function p1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function m1(r){const e=Oa(Va(r)).link,t=e?Oa(Va(e)).deep_link_id:null,s=Oa(Va(r)).deep_link_id;return(s?Oa(Va(s)).link:null)||s||t||e||r}class Af{constructor(e){var t,s,o,l,h,f;const g=Oa(Va(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,T=(s=g.oobCode)!==null&&s!==void 0?s:null,I=p1((o=g.mode)!==null&&o!==void 0?o:null);Te(v&&T&&I,"argument-error"),this.apiKey=v,this.operation=I,this.code=T,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=m1(e);try{return new Af(t)}catch{return null}}}/**
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
 */class Uo{constructor(){this.providerId=Uo.PROVIDER_ID}static credential(e,t){return Qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Af.parseLink(t);return Te(s,"argument-error"),Qa._fromEmailAndCode(e,s.code,s.tenantId)}}Uo.PROVIDER_ID="password";Uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Yv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ll extends Yv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ii extends ll{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
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
 */class Si extends ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return As._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Si.credential(t,s)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
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
 */class Ai extends ll{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ai.credential(e.oauthAccessToken)}catch{return null}}}Ai.GITHUB_SIGN_IN_METHOD="github.com";Ai.PROVIDER_ID="github.com";/**
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
 */class Ci extends ll{constructor(){super("twitter.com")}static credential(e,t){return As._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ci.credential(t,s)}catch{return null}}}Ci.TWITTER_SIGN_IN_METHOD="twitter.com";Ci.PROVIDER_ID="twitter.com";/**
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
 */async function g1(r,e){return al(r,"POST","/v1/accounts:signUp",Bi(r,e))}/**
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
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await rr._fromIdTokenResponse(e,s,o),h=Xg(s);return new Cs({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Xg(s);return new Cs({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Xg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Zu extends ar{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Zu.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Zu(e,t,s,o)}}function Xv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Zu._fromErrorAndOperation(r,l,e,s):l})}async function y1(r,e,t=!1){const s=await Ga(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Cs._forOperation(r,"link",s)}/**
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
 */async function v1(r,e,t=!1){const{auth:s}=r;if(In(s.app))return Promise.reject(qr(s));const o="reauthenticate";try{const l=await Ga(r,Xv(s,o,e,r),t);Te(l.idToken,s,"internal-error");const h=Tf(l.idToken);Te(h,s,"internal-error");const{sub:f}=h;return Te(r.uid===f,s,"user-mismatch"),Cs._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&or(s,"user-mismatch"),l}}/**
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
 */async function Jv(r,e,t=!1){if(In(r.app))return Promise.reject(qr(r));const s="signIn",o=await Xv(r,s,e),l=await Cs._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function _1(r,e){return Jv(Os(r),e)}/**
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
 */async function Zv(r){const e=Os(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function w1(r,e,t){if(In(r.app))return Promise.reject(qr(r));const s=Os(r),h=await Ud(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",g1).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Zv(r),g}),f=await Cs._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function E1(r,e,t){return In(r.app)?Promise.reject(qr(r)):_1(Et(r),Uo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Zv(r),s})}function T1(r,e,t,s){return Et(r).onIdTokenChanged(e,t,s)}function I1(r,e,t){return Et(r).beforeAuthStateChanged(e,t)}function S1(r,e,t,s){return Et(r).onAuthStateChanged(e,t,s)}function A1(r){return Et(r).signOut()}const ec="__sak";/**
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
 */class e_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const C1=1e3,k1=10;class t_ extends e_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);HI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,k1):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},C1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}t_.type="LOCAL";const R1=t_;/**
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
 */class n_ extends e_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}n_.type="SESSION";const r_=n_;/**
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
 */function P1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new _c(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async v=>v(t.origin,l)),g=await P1(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
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
 */function Cf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class N1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const v=Cf("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(I){const k=I;if(k.data.eventId===v)switch(k.data.status){case"ack":clearTimeout(T),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(k.data.response);break;default:clearTimeout(T),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Er(){return window}function x1(r){Er().location.href=r}/**
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
 */function i_(){return typeof Er().WorkerGlobalScope<"u"&&typeof Er().importScripts=="function"}async function D1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function V1(){return i_()?self:null}/**
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
 */const s_="firebaseLocalStorageDb",M1=1,tc="firebaseLocalStorage",o_="fbase_key";class ul{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wc(r,e){return r.transaction([tc],e?"readwrite":"readonly").objectStore(tc)}function b1(){const r=indexedDB.deleteDatabase(s_);return new ul(r).toPromise()}function jd(){const r=indexedDB.open(s_,M1);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(tc,{keyPath:o_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(tc)?e(s):(s.close(),await b1(),e(await jd()))})})}async function Jg(r,e,t){const s=wc(r,!0).put({[o_]:e,value:t});return new ul(s).toPromise()}async function L1(r,e){const t=wc(r,!1).get(e),s=await new ul(t).toPromise();return s===void 0?null:s.value}function Zg(r,e){const t=wc(r,!0).delete(e);return new ul(t).toPromise()}const F1=800,U1=3;class a_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>U1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return i_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(V1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await D1(),!this.activeServiceWorker)return;this.sender=new N1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||O1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jd();return await Jg(e,ec,"1"),await Zg(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Jg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>L1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=wc(o,!1).getAll();return new ul(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a_.type="LOCAL";const j1=a_;new ol(3e4,6e4);/**
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
 */function z1(r,e){return e?Wr(e):(Te(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class kf extends Sf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function B1(r){return Jv(r.auth,new kf(r),r.bypassAuthState)}function $1(r){const{auth:e,user:t}=r;return Te(t,e,"internal-error"),v1(t,new kf(r),r.bypassAuthState)}async function H1(r){const{auth:e,user:t}=r;return Te(t,e,"internal-error"),y1(t,new kf(r),r.bypassAuthState)}/**
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
 */class l_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return B1;case"linkViaPopup":case"linkViaRedirect":return H1;case"reauthViaPopup":case"reauthViaRedirect":return $1;default:or(this.auth,"internal-error")}}resolve(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const W1=new ol(2e3,1e4);class Ro extends l_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Ro.currentPopupAction&&Ro.currentPopupAction.cancel(),Ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Gr(this.filter.length===1,"Popup operations only handle one event");const e=Cf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,W1.get())};e()}}Ro.currentPopupAction=null;/**
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
 */const q1="pendingRedirect",ju=new Map;class K1 extends l_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ju.get(this.auth._key());if(!e){try{const s=await G1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ju.set(this.auth._key(),e)}return this.bypassAuthState||ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function G1(r,e){const t=X1(e),s=Y1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function Q1(r,e){ju.set(r._key(),e)}function Y1(r){return Wr(r._redirectPersistence)}function X1(r){return Uu(q1,r.config.apiKey,r.name)}async function J1(r,e,t=!1){if(In(r.app))return Promise.reject(qr(r));const s=Os(r),o=z1(s,e),h=await new K1(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const Z1=600*1e3;class eS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!u_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(wr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ey(e))}saveEventToCache(e){this.cachedEventUids.add(ey(e)),this.lastProcessedEventTime=Date.now()}}function ey(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function u_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u_(r);default:return!1}}/**
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
 */async function nS(r,e={}){return $i(r,"GET","/v1/projects",e)}/**
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
 */const rS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iS=/^https?/;async function sS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await nS(r);for(const t of e)try{if(oS(t))return}catch{}or(r,"unauthorized-domain")}function oS(r){const e=Ld(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!iS.test(t))return!1;if(rS.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const aS=new ol(3e4,6e4);function ty(){const r=Er().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function lS(r){return new Promise((e,t)=>{var s,o,l;function h(){ty(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ty(),t(wr(r,"network-request-failed"))},timeout:aS.get()})}if(!((o=(s=Er().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=Er().gapi)===null||l===void 0)&&l.load)h();else{const f=ZI("iframefcb");return Er()[f]=()=>{gapi.load?h():t(wr(r,"network-request-failed"))},Kv(`${JI()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw zu=null,e})}let zu=null;function uS(r){return zu=zu||lS(r),zu}/**
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
 */const cS=new ol(5e3,15e3),hS="__/auth/iframe",dS="emulator/auth/iframe",fS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mS(r){const e=r.config;Te(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ef(e,dS):`https://${r.config.authDomain}/${hS}`,s={apiKey:e.apiKey,appName:r.name,v:Fo},o=pS.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${sl(s).slice(1)}`}async function gS(r){const e=await uS(r),t=Er().gapi;return Te(t,r,"internal-error"),e.open({where:document.body,url:mS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fS,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=wr(r,"network-request-failed"),f=Er().setTimeout(()=>{l(h)},cS.get());function g(){Er().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const yS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vS=500,_S=600,wS="_blank",ES="http://localhost";class ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TS(r,e,t,s=vS,o=_S){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},yS),{width:s.toString(),height:o.toString(),top:l,left:h}),v=Qt().toLowerCase();t&&(f=jv(v)?wS:t),Fv(v)&&(e=e||ES,g.scrollbars="yes");const T=Object.entries(g).reduce((k,[j,W])=>`${k}${j}=${W},`,"");if($I(v)&&f!=="_self")return IS(e||"",f),new ny(null);const I=window.open(e||"",f,T);Te(I,r,"popup-blocked");try{I.focus()}catch{}return new ny(I)}function IS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const SS="__/auth/handler",AS="emulator/auth/handler",CS=encodeURIComponent("fac");async function ry(r,e,t,s,o,l){Te(r.config.authDomain,r,"auth-domain-config-required"),Te(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Fo,eventId:o};if(e instanceof Yv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",lT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,I]of Object.entries({}))h[T]=I}if(e instanceof ll){const T=e.getScopes().filter(I=>I!=="");T.length>0&&(h.scopes=T.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const T of Object.keys(f))f[T]===void 0&&delete f[T];const g=await r._getAppCheckToken(),v=g?`#${CS}=${encodeURIComponent(g)}`:"";return`${kS(r)}?${sl(f).slice(1)}${v}`}function kS({config:r}){return r.emulator?Ef(r,AS):`https://${r.authDomain}/${SS}`}/**
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
 */const Td="webStorageSupport";class RS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=r_,this._completeRedirectFn=J1,this._overrideRedirectResult=Q1}async _openPopup(e,t,s,o){var l;Gr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await ry(e,t,s,Ld(),o);return TS(e,h,Cf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await ry(e,t,s,Ld(),o);return x1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Gr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await gS(e),s=new eS(e);return t.register("authEvent",o=>(Te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Td,{type:Td},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Td];h!==void 0&&t(!!h),or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wv()||Uv()||If()}}const PS=RS;var iy="@firebase/auth",sy="1.10.8";/**
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
 */class NS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DS(r){sr(new Ln("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;Te(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qv(r)},v=new QI(s,o,l,g);return s1(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),sr(new Ln("auth-internal",e=>{const t=Os(e.getProvider("auth").getImmediate());return(s=>new NS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(iy,sy,xS(r)),fn(iy,sy,"esm2017")}/**
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
 */const OS=300,VS=Tv("authIdTokenMaxAge")||OS;let oy=null;const MS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>VS)return;const o=t==null?void 0:t.token;oy!==o&&(oy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function bS(r=yc()){const e=zi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=i1(r,{popupRedirectResolver:PS,persistence:[j1,R1,r_]}),s=Tv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=MS(l.toString());I1(t,h,()=>h(t.currentUser)),T1(t,f=>h(f))}}const o=_v("auth");return o&&o1(t,`http://${o}`),t}function LS(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}YI({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=wr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",LS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DS("Browser");var FS="firebase",US="11.10.0";/**
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
 */fn(FS,US,"app");var ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ni,c_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,S){function R(){}R.prototype=S.prototype,O.D=S.prototype,O.prototype=new R,O.prototype.constructor=O,O.C=function(x,M,b){for(var C=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)C[Ke-2]=arguments[Ke];return S.prototype[M].apply(x,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(O,S,R){R||(R=0);var x=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)x[M]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(M=0;16>M;++M)x[M]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=O.g[0],R=O.g[1],M=O.g[2];var b=O.g[3],C=S+(b^R&(M^b))+x[0]+3614090360&4294967295;S=R+(C<<7&4294967295|C>>>25),C=b+(M^S&(R^M))+x[1]+3905402710&4294967295,b=S+(C<<12&4294967295|C>>>20),C=M+(R^b&(S^R))+x[2]+606105819&4294967295,M=b+(C<<17&4294967295|C>>>15),C=R+(S^M&(b^S))+x[3]+3250441966&4294967295,R=M+(C<<22&4294967295|C>>>10),C=S+(b^R&(M^b))+x[4]+4118548399&4294967295,S=R+(C<<7&4294967295|C>>>25),C=b+(M^S&(R^M))+x[5]+1200080426&4294967295,b=S+(C<<12&4294967295|C>>>20),C=M+(R^b&(S^R))+x[6]+2821735955&4294967295,M=b+(C<<17&4294967295|C>>>15),C=R+(S^M&(b^S))+x[7]+4249261313&4294967295,R=M+(C<<22&4294967295|C>>>10),C=S+(b^R&(M^b))+x[8]+1770035416&4294967295,S=R+(C<<7&4294967295|C>>>25),C=b+(M^S&(R^M))+x[9]+2336552879&4294967295,b=S+(C<<12&4294967295|C>>>20),C=M+(R^b&(S^R))+x[10]+4294925233&4294967295,M=b+(C<<17&4294967295|C>>>15),C=R+(S^M&(b^S))+x[11]+2304563134&4294967295,R=M+(C<<22&4294967295|C>>>10),C=S+(b^R&(M^b))+x[12]+1804603682&4294967295,S=R+(C<<7&4294967295|C>>>25),C=b+(M^S&(R^M))+x[13]+4254626195&4294967295,b=S+(C<<12&4294967295|C>>>20),C=M+(R^b&(S^R))+x[14]+2792965006&4294967295,M=b+(C<<17&4294967295|C>>>15),C=R+(S^M&(b^S))+x[15]+1236535329&4294967295,R=M+(C<<22&4294967295|C>>>10),C=S+(M^b&(R^M))+x[1]+4129170786&4294967295,S=R+(C<<5&4294967295|C>>>27),C=b+(R^M&(S^R))+x[6]+3225465664&4294967295,b=S+(C<<9&4294967295|C>>>23),C=M+(S^R&(b^S))+x[11]+643717713&4294967295,M=b+(C<<14&4294967295|C>>>18),C=R+(b^S&(M^b))+x[0]+3921069994&4294967295,R=M+(C<<20&4294967295|C>>>12),C=S+(M^b&(R^M))+x[5]+3593408605&4294967295,S=R+(C<<5&4294967295|C>>>27),C=b+(R^M&(S^R))+x[10]+38016083&4294967295,b=S+(C<<9&4294967295|C>>>23),C=M+(S^R&(b^S))+x[15]+3634488961&4294967295,M=b+(C<<14&4294967295|C>>>18),C=R+(b^S&(M^b))+x[4]+3889429448&4294967295,R=M+(C<<20&4294967295|C>>>12),C=S+(M^b&(R^M))+x[9]+568446438&4294967295,S=R+(C<<5&4294967295|C>>>27),C=b+(R^M&(S^R))+x[14]+3275163606&4294967295,b=S+(C<<9&4294967295|C>>>23),C=M+(S^R&(b^S))+x[3]+4107603335&4294967295,M=b+(C<<14&4294967295|C>>>18),C=R+(b^S&(M^b))+x[8]+1163531501&4294967295,R=M+(C<<20&4294967295|C>>>12),C=S+(M^b&(R^M))+x[13]+2850285829&4294967295,S=R+(C<<5&4294967295|C>>>27),C=b+(R^M&(S^R))+x[2]+4243563512&4294967295,b=S+(C<<9&4294967295|C>>>23),C=M+(S^R&(b^S))+x[7]+1735328473&4294967295,M=b+(C<<14&4294967295|C>>>18),C=R+(b^S&(M^b))+x[12]+2368359562&4294967295,R=M+(C<<20&4294967295|C>>>12),C=S+(R^M^b)+x[5]+4294588738&4294967295,S=R+(C<<4&4294967295|C>>>28),C=b+(S^R^M)+x[8]+2272392833&4294967295,b=S+(C<<11&4294967295|C>>>21),C=M+(b^S^R)+x[11]+1839030562&4294967295,M=b+(C<<16&4294967295|C>>>16),C=R+(M^b^S)+x[14]+4259657740&4294967295,R=M+(C<<23&4294967295|C>>>9),C=S+(R^M^b)+x[1]+2763975236&4294967295,S=R+(C<<4&4294967295|C>>>28),C=b+(S^R^M)+x[4]+1272893353&4294967295,b=S+(C<<11&4294967295|C>>>21),C=M+(b^S^R)+x[7]+4139469664&4294967295,M=b+(C<<16&4294967295|C>>>16),C=R+(M^b^S)+x[10]+3200236656&4294967295,R=M+(C<<23&4294967295|C>>>9),C=S+(R^M^b)+x[13]+681279174&4294967295,S=R+(C<<4&4294967295|C>>>28),C=b+(S^R^M)+x[0]+3936430074&4294967295,b=S+(C<<11&4294967295|C>>>21),C=M+(b^S^R)+x[3]+3572445317&4294967295,M=b+(C<<16&4294967295|C>>>16),C=R+(M^b^S)+x[6]+76029189&4294967295,R=M+(C<<23&4294967295|C>>>9),C=S+(R^M^b)+x[9]+3654602809&4294967295,S=R+(C<<4&4294967295|C>>>28),C=b+(S^R^M)+x[12]+3873151461&4294967295,b=S+(C<<11&4294967295|C>>>21),C=M+(b^S^R)+x[15]+530742520&4294967295,M=b+(C<<16&4294967295|C>>>16),C=R+(M^b^S)+x[2]+3299628645&4294967295,R=M+(C<<23&4294967295|C>>>9),C=S+(M^(R|~b))+x[0]+4096336452&4294967295,S=R+(C<<6&4294967295|C>>>26),C=b+(R^(S|~M))+x[7]+1126891415&4294967295,b=S+(C<<10&4294967295|C>>>22),C=M+(S^(b|~R))+x[14]+2878612391&4294967295,M=b+(C<<15&4294967295|C>>>17),C=R+(b^(M|~S))+x[5]+4237533241&4294967295,R=M+(C<<21&4294967295|C>>>11),C=S+(M^(R|~b))+x[12]+1700485571&4294967295,S=R+(C<<6&4294967295|C>>>26),C=b+(R^(S|~M))+x[3]+2399980690&4294967295,b=S+(C<<10&4294967295|C>>>22),C=M+(S^(b|~R))+x[10]+4293915773&4294967295,M=b+(C<<15&4294967295|C>>>17),C=R+(b^(M|~S))+x[1]+2240044497&4294967295,R=M+(C<<21&4294967295|C>>>11),C=S+(M^(R|~b))+x[8]+1873313359&4294967295,S=R+(C<<6&4294967295|C>>>26),C=b+(R^(S|~M))+x[15]+4264355552&4294967295,b=S+(C<<10&4294967295|C>>>22),C=M+(S^(b|~R))+x[6]+2734768916&4294967295,M=b+(C<<15&4294967295|C>>>17),C=R+(b^(M|~S))+x[13]+1309151649&4294967295,R=M+(C<<21&4294967295|C>>>11),C=S+(M^(R|~b))+x[4]+4149444226&4294967295,S=R+(C<<6&4294967295|C>>>26),C=b+(R^(S|~M))+x[11]+3174756917&4294967295,b=S+(C<<10&4294967295|C>>>22),C=M+(S^(b|~R))+x[2]+718787259&4294967295,M=b+(C<<15&4294967295|C>>>17),C=R+(b^(M|~S))+x[9]+3951481745&4294967295,O.g[0]=O.g[0]+S&4294967295,O.g[1]=O.g[1]+(M+(C<<21&4294967295|C>>>11))&4294967295,O.g[2]=O.g[2]+M&4294967295,O.g[3]=O.g[3]+b&4294967295}s.prototype.u=function(O,S){S===void 0&&(S=O.length);for(var R=S-this.blockSize,x=this.B,M=this.h,b=0;b<S;){if(M==0)for(;b<=R;)o(this,O,b),b+=this.blockSize;if(typeof O=="string"){for(;b<S;)if(x[M++]=O.charCodeAt(b++),M==this.blockSize){o(this,x),M=0;break}}else for(;b<S;)if(x[M++]=O[b++],M==this.blockSize){o(this,x),M=0;break}}this.h=M,this.o+=S},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var S=1;S<O.length-8;++S)O[S]=0;var R=8*this.o;for(S=O.length-8;S<O.length;++S)O[S]=R&255,R/=256;for(this.u(O),O=Array(16),S=R=0;4>S;++S)for(var x=0;32>x;x+=8)O[R++]=this.g[S]>>>x&255;return O};function l(O,S){var R=f;return Object.prototype.hasOwnProperty.call(R,O)?R[O]:R[O]=S(O)}function h(O,S){this.h=S;for(var R=[],x=!0,M=O.length-1;0<=M;M--){var b=O[M]|0;x&&b==S||(R[M]=b,x=!1)}this.g=R}var f={};function g(O){return-128<=O&&128>O?l(O,function(S){return new h([S|0],0>S?-1:0)}):new h([O|0],0>O?-1:0)}function v(O){if(isNaN(O)||!isFinite(O))return I;if(0>O)return $(v(-O));for(var S=[],R=1,x=0;O>=R;x++)S[x]=O/R|0,R*=4294967296;return new h(S,0)}function T(O,S){if(O.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(O.charAt(0)=="-")return $(T(O.substring(1),S));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(S,8)),x=I,M=0;M<O.length;M+=8){var b=Math.min(8,O.length-M),C=parseInt(O.substring(M,M+b),S);8>b?(b=v(Math.pow(S,b)),x=x.j(b).add(v(C))):(x=x.j(R),x=x.add(v(C)))}return x}var I=g(0),k=g(1),j=g(16777216);r=h.prototype,r.m=function(){if(X(this))return-$(this).m();for(var O=0,S=1,R=0;R<this.g.length;R++){var x=this.i(R);O+=(0<=x?x:4294967296+x)*S,S*=4294967296}return O},r.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(W(this))return"0";if(X(this))return"-"+$(this).toString(O);for(var S=v(Math.pow(O,6)),R=this,x="";;){var M=Se(R,S).g;R=me(R,M.j(S));var b=((0<R.g.length?R.g[0]:R.h)>>>0).toString(O);if(R=M,W(R))return b+x;for(;6>b.length;)b="0"+b;x=b+x}},r.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function W(O){if(O.h!=0)return!1;for(var S=0;S<O.g.length;S++)if(O.g[S]!=0)return!1;return!0}function X(O){return O.h==-1}r.l=function(O){return O=me(this,O),X(O)?-1:W(O)?0:1};function $(O){for(var S=O.g.length,R=[],x=0;x<S;x++)R[x]=~O.g[x];return new h(R,~O.h).add(k)}r.abs=function(){return X(this)?$(this):this},r.add=function(O){for(var S=Math.max(this.g.length,O.g.length),R=[],x=0,M=0;M<=S;M++){var b=x+(this.i(M)&65535)+(O.i(M)&65535),C=(b>>>16)+(this.i(M)>>>16)+(O.i(M)>>>16);x=C>>>16,b&=65535,C&=65535,R[M]=C<<16|b}return new h(R,R[R.length-1]&-2147483648?-1:0)};function me(O,S){return O.add($(S))}r.j=function(O){if(W(this)||W(O))return I;if(X(this))return X(O)?$(this).j($(O)):$($(this).j(O));if(X(O))return $(this.j($(O)));if(0>this.l(j)&&0>O.l(j))return v(this.m()*O.m());for(var S=this.g.length+O.g.length,R=[],x=0;x<2*S;x++)R[x]=0;for(x=0;x<this.g.length;x++)for(var M=0;M<O.g.length;M++){var b=this.i(x)>>>16,C=this.i(x)&65535,Ke=O.i(M)>>>16,tt=O.i(M)&65535;R[2*x+2*M]+=C*tt,fe(R,2*x+2*M),R[2*x+2*M+1]+=b*tt,fe(R,2*x+2*M+1),R[2*x+2*M+1]+=C*Ke,fe(R,2*x+2*M+1),R[2*x+2*M+2]+=b*Ke,fe(R,2*x+2*M+2)}for(x=0;x<S;x++)R[x]=R[2*x+1]<<16|R[2*x];for(x=S;x<2*S;x++)R[x]=0;return new h(R,0)};function fe(O,S){for(;(O[S]&65535)!=O[S];)O[S+1]+=O[S]>>>16,O[S]&=65535,S++}function ce(O,S){this.g=O,this.h=S}function Se(O,S){if(W(S))throw Error("division by zero");if(W(O))return new ce(I,I);if(X(O))return S=Se($(O),S),new ce($(S.g),$(S.h));if(X(S))return S=Se(O,$(S)),new ce($(S.g),S.h);if(30<O.g.length){if(X(O)||X(S))throw Error("slowDivide_ only works with positive integers.");for(var R=k,x=S;0>=x.l(O);)R=Me(R),x=Me(x);var M=ke(R,1),b=ke(x,1);for(x=ke(x,2),R=ke(R,2);!W(x);){var C=b.add(x);0>=C.l(O)&&(M=M.add(R),b=C),x=ke(x,1),R=ke(R,1)}return S=me(O,M.j(S)),new ce(M,S)}for(M=I;0<=O.l(S);){for(R=Math.max(1,Math.floor(O.m()/S.m())),x=Math.ceil(Math.log(R)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),b=v(R),C=b.j(S);X(C)||0<C.l(O);)R-=x,b=v(R),C=b.j(S);W(b)&&(b=k),M=M.add(b),O=me(O,C)}return new ce(M,O)}r.A=function(O){return Se(this,O).h},r.and=function(O){for(var S=Math.max(this.g.length,O.g.length),R=[],x=0;x<S;x++)R[x]=this.i(x)&O.i(x);return new h(R,this.h&O.h)},r.or=function(O){for(var S=Math.max(this.g.length,O.g.length),R=[],x=0;x<S;x++)R[x]=this.i(x)|O.i(x);return new h(R,this.h|O.h)},r.xor=function(O){for(var S=Math.max(this.g.length,O.g.length),R=[],x=0;x<S;x++)R[x]=this.i(x)^O.i(x);return new h(R,this.h^O.h)};function Me(O){for(var S=O.g.length+1,R=[],x=0;x<S;x++)R[x]=O.i(x)<<1|O.i(x-1)>>>31;return new h(R,O.h)}function ke(O,S){var R=S>>5;S%=32;for(var x=O.g.length-R,M=[],b=0;b<x;b++)M[b]=0<S?O.i(b+R)>>>S|O.i(b+R+1)<<32-S:O.i(b+R);return new h(M,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,c_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=T,Ni=h}).apply(typeof ay<"u"?ay:typeof self<"u"?self:typeof window<"u"?window:{});var Ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h_,Ma,d_,Bu,zd,f_,p_,m_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ou=="object"&&Ou];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in y))break e;y=y[L]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,E=!1,L={next:function(){if(!E&&y<u.length){var B=y++;return{value:p(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function v(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function T(u,p,y){return u.call.apply(u.bind,arguments)}function I(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function k(u,p,y){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:I,k.apply(null,arguments)}function j(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function W(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,L,B){for(var ne=Array(arguments.length-2),We=2;We<arguments.length;We++)ne[We-2]=arguments[We];return p.prototype[L].apply(E,ne)}}function X(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function $(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=u.length||0,B=E.length||0;u.length=L+B;for(let ne=0;ne<B;ne++)u[L+ne]=E[ne]}else u.push(E)}}class me{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function fe(u){return/^[\s\xa0]*$/.test(u)}function ce(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function Se(u){return Se[" "](u),u}Se[" "]=function(){};var Me=ce().indexOf("Gecko")!=-1&&!(ce().toLowerCase().indexOf("webkit")!=-1&&ce().indexOf("Edge")==-1)&&!(ce().indexOf("Trident")!=-1||ce().indexOf("MSIE")!=-1)&&ce().indexOf("Edge")==-1;function ke(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function O(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function S(u){const p={};for(const y in u)p[y]=u[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,p){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)u[y]=E[y];for(let B=0;B<R.length;B++)y=R[B],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function M(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function b(u){f.setTimeout(()=>{throw u},0)}function C(){var u=ge;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class Ke{constructor(){this.h=this.g=null}add(p,y){const E=tt.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var tt=new me(()=>new ct,u=>u.reset());class ct{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,re=!1,ge=new Ke,N=()=>{const u=f.Promise.resolve(void 0);ze=()=>{u.then(w)}};var w=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(y){b(y)}var p=tt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}re=!1};function D(){this.s=this.s,this.C=this.C}D.prototype.s=!1,D.prototype.ma=function(){this.s||(this.s=!0,this.N())},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var ee=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function te(u,p){if(H.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Me){e:{try{Se(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:se[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&te.aa.h.call(this)}}W(te,H);var se={2:"touch",3:"pen",4:"mouse"};te.prototype.h=function(){te.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ie="closure_listenable_"+(1e6*Math.random()|0),oe=0;function ve(u,p,y,E,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=L,this.key=++oe,this.da=this.fa=!1}function Pe(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function be(u){this.src=u,this.g={},this.h=0}be.prototype.add=function(u,p,y,E,L){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var ne=Qe(u,p,E,L);return-1<ne?(p=u[ne],y||(p.fa=!1)):(p=new ve(p,this.src,B,!!E,L),p.fa=y,u.push(p)),p};function He(u,p){var y=p.type;if(y in u.g){var E=u.g[y],L=Array.prototype.indexOf.call(E,p,void 0),B;(B=0<=L)&&Array.prototype.splice.call(E,L,1),B&&(Pe(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Qe(u,p,y,E){for(var L=0;L<u.length;++L){var B=u[L];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==E)return L}return-1}var Ne="closure_lm_"+(1e6*Math.random()|0),ht={};function Ot(u,p,y,E,L){if(Array.isArray(p)){for(var B=0;B<p.length;B++)Ot(u,p[B],y,E,L);return null}return y=Ki(y),u&&u[ie]?u.K(p,y,v(E)?!!E.capture:!1,L):Vt(u,p,y,!1,E,L)}function Vt(u,p,y,E,L,B){if(!p)throw Error("Invalid event type");var ne=v(L)?!!L.capture:!!L,We=Xr(u);if(We||(u[Ne]=We=new be(u)),y=We.add(p,y,E,ne,B),y.proxy)return y;if(E=en(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)ee||(L=ne),L===void 0&&(L=!1),u.addEventListener(p.toString(),E,L);else if(u.attachEvent)u.attachEvent(Fn(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function en(){function u(y){return p.call(u.src,u.listener,y)}const p=qi;return u}function tn(u,p,y,E,L){if(Array.isArray(p))for(var B=0;B<p.length;B++)tn(u,p[B],y,E,L);else E=v(E)?!!E.capture:!!E,y=Ki(y),u&&u[ie]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],y=Qe(B,y,E,L),-1<y&&(Pe(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=Xr(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Qe(p,y,E,L)),(y=-1<u?p[u]:null)&&gt(y))}function gt(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[ie])He(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(Fn(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Xr(p))?(He(y,u),y.h==0&&(y.src=null,p[Ne]=null)):Pe(u)}}}function Fn(u){return u in ht?ht[u]:ht[u]="on"+u}function qi(u,p){if(u.da)u=!0;else{p=new te(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&gt(u),u=y.call(E,p)}return u}function Xr(u){return u=u[Ne],u instanceof be?u:null}var Rr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ki(u){return typeof u=="function"?u:(u[Rr]||(u[Rr]=function(p){return u.handleEvent(p)}),u[Rr])}function lt(){D.call(this),this.i=new be(this),this.M=this,this.F=null}W(lt,D),lt.prototype[ie]=!0,lt.prototype.removeEventListener=function(u,p,y,E){tn(this,u,p,y,E)};function dt(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new H(p,u);else if(p instanceof H)p.target=p.target||u;else{var L=p;p=new H(E,u),x(p,L)}if(L=!0,y)for(var B=y.length-1;0<=B;B--){var ne=p.g=y[B];L=Un(ne,E,!0,p)&&L}if(ne=p.g=u,L=Un(ne,E,!0,p)&&L,L=Un(ne,E,!1,p)&&L,y)for(B=0;B<y.length;B++)ne=p.g=y[B],L=Un(ne,E,!1,p)&&L}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)Pe(y[E]);delete u.g[p],u.h--}}this.F=null},lt.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},lt.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function Un(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,B=0;B<p.length;++B){var ne=p[B];if(ne&&!ne.da&&ne.capture==y){var We=ne.listener,Tt=ne.ha||ne.src;ne.fa&&He(u.i,ne),L=We.call(Tt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Jr(u,p,y){if(typeof u=="function")y&&(u=k(u,y));else if(u&&typeof u.handleEvent=="function")u=k(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function jn(u){u.g=Jr(()=>{u.g=null,u.i&&(u.i=!1,jn(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class zn extends D{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:jn(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pr(u){D.call(this),this.h=u,this.g={}}W(Pr,D);var Gi=[];function Ho(u){ke(u.g,function(p,y){this.g.hasOwnProperty(y)&&gt(p)},u),u.g={}}Pr.prototype.N=function(){Pr.aa.N.call(this),Ho(this)},Pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wo=f.JSON.stringify,qo=f.JSON.parse,Ko=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Qi(){}Qi.prototype.h=null;function bs(u){return u.h||(u.h=u.i())}function Ls(){}var Cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lr(){H.call(this,"d")}W(lr,H);function Fs(){H.call(this,"c")}W(Fs,H);var ur={},Go=null;function Yi(){return Go=Go||new lt}ur.La="serverreachability";function Qo(u){H.call(this,ur.La,u)}W(Qo,H);function Nr(u){const p=Yi();dt(p,new Qo(p))}ur.STAT_EVENT="statevent";function Yo(u,p){H.call(this,ur.STAT_EVENT,u),this.stat=p}W(Yo,H);function ft(u){const p=Yi();dt(p,new Yo(p,u))}ur.Ma="timingevent";function Us(u,p){H.call(this,ur.Ma,u),this.size=p}W(Us,H);function Bn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Xi(){this.g=!0}Xi.prototype.xa=function(){this.g=!1};function Ji(u,p,y,E,L,B){u.info(function(){if(u.g)if(B)for(var ne="",We=B.split("&"),Tt=0;Tt<We.length;Tt++){var Fe=We[Tt].split("=");if(1<Fe.length){var Rt=Fe[0];Fe=Fe[1];var yt=Rt.split("_");ne=2<=yt.length&&yt[1]=="type"?ne+(Rt+"="+Fe+"&"):ne+(Rt+"=redacted&")}}else ne=null;else ne=B;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+p+`
`+y+`
`+ne})}function js(u,p,y,E,L,B,ne){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+p+`
`+y+`
`+B+" "+ne})}function $n(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Uc(u,y)+(E?" "+E:"")})}function Xo(u,p){u.info(function(){return"TIMEOUT: "+p})}Xi.prototype.info=function(){};function Uc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var ne=1;ne<L.length;ne++)L[ne]=""}}}}return Wo(y)}catch{return p}}var zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hn;function Zi(){}W(Zi,Qi),Zi.prototype.g=function(){return new XMLHttpRequest},Zi.prototype.i=function(){return{}},Hn=new Zi;function Wn(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new Pr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vl}function vl(){this.i=null,this.g="",this.h=!1}var Jo={},Bs={};function $s(u,p,y){u.L=1,u.v=ri(yn(p)),u.m=y,u.P=!0,Zo(u,null)}function Zo(u,p){u.F=Date.now(),Ye(u),u.A=yn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),si(y.i,"t",E),u.C=0,y=u.j.J,u.h=new vl,u.g=bl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new zn(k(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(Gi[0]=L.toString()),L=Gi);for(var B=0;B<L.length;B++){var ne=Ot(y,L[B],E||p.handleEvent,!1,p.h||p);if(!ne)break;p.g[ne.key]=ne}p=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Nr(),Ji(u.i,u.u,u.A,u.l,u.R,u.m)}Wn.prototype.ca=function(u){u=u.target;const p=this.M;p&&rn(u)==3?p.j():this.Y(u)},Wn.prototype.Y=function(u){try{if(u==this.g)e:{const yt=rn(this.g);var p=this.g.Ba();const Pn=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||sa(this.g)))){this.J||yt!=4||p==7||(p==8||0>=Pn?Nr(3):Nr(2)),es(this);var y=this.g.Z();this.X=y;t:if(_l(this)){var E=sa(this.g);u="";var L=E.length,B=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kn(this),Zr(this);var ne="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(B&&p==L-1)});E.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=y==200,js(this.i,this.u,this.A,this.l,this.R,yt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var We,Tt=this.g;if((We=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fe(We)){var Fe=We;break t}}Fe=null}if(y=Fe)$n(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ea(this,y);else{this.o=!1,this.s=3,ft(12),kn(this),Zr(this);break e}}if(this.P){y=!0;let _n;for(;!this.J&&this.C<ne.length;)if(_n=jc(this,ne),_n==Bs){yt==4&&(this.s=4,ft(14),y=!1),$n(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==Jo){this.s=4,ft(15),$n(this.i,this.l,ne,"[Invalid Chunk]"),y=!1;break}else $n(this.i,this.l,_n,null),ea(this,_n);if(_l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||ne.length!=0||this.h.h||(this.s=1,ft(16),y=!1),this.o=this.o&&y,!y)$n(this.i,this.l,ne,"[Invalid Chunked Response]"),kn(this),Zr(this);else if(0<ne.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),aa(Rt),Rt.M=!0,ft(11))}}else $n(this.i,this.l,ne,null),ea(this,ne);yt==4&&kn(this),this.o&&!this.J&&(yt==4?eo(this.j,this):(this.o=!1,Ye(this)))}else Qs(this.g),y==400&&0<ne.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),kn(this),Zr(this)}}}catch{}finally{}};function _l(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function jc(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?Bs:(y=Number(p.substring(y,E)),isNaN(y)?Jo:(E+=1,E+y>p.length?Bs:(p=p.slice(E,E+y),u.C=E+y,p)))}Wn.prototype.cancel=function(){this.J=!0,kn(this)};function Ye(u){u.S=Date.now()+u.I,wl(u,u.I)}function wl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Bn(k(u.ba,u),p)}function es(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Wn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Xo(this.i,this.A),this.L!=2&&(Nr(),ft(17)),kn(this),this.s=2,Zr(this)):wl(this,this.S-u)};function Zr(u){u.j.G==0||u.J||eo(u.j,u)}function kn(u){es(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Ho(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ea(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Yt(y.h,u))){if(!u.K&&Yt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Zs(y),Yn(y);else break e;Js(y),ft(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Bn(k(y.Za,y),6e3));if(1>=Tl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Mr(y,11)}else if((u.K||y.g==u)&&Zs(y),!fe(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let Fe=L[p];if(y.T=Fe[0],Fe=Fe[1],y.G==2)if(Fe[0]=="c"){y.K=Fe[1],y.ia=Fe[2];const Rt=Fe[3];Rt!=null&&(y.la=Rt,y.j.info("VER="+y.la));const yt=Fe[4];yt!=null&&(y.Aa=yt,y.j.info("SVER="+y.Aa));const Pn=Fe[5];Pn!=null&&typeof Pn=="number"&&0<Pn&&(E=1.5*Pn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const _n=u.g;if(_n){const as=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(as){var B=E.h;B.g||as.indexOf("spdy")==-1&&as.indexOf("quic")==-1&&as.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(ta(B,B.h),B.h=null))}if(E.D){const no=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;no&&(E.ya=no,Ge(E.I,E.D,no))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var ne=u;if(E.qa=Ml(E,E.J?E.ia:null,E.W),ne.K){Il(E.h,ne);var We=ne,Tt=E.L;Tt&&(We.I=Tt),We.B&&(es(We),Ye(We)),E.g=ne}else os(E);0<y.i.length&&fr(y)}else Fe[0]!="stop"&&Fe[0]!="close"||Mr(y,7);else y.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Mr(y,7):bt(y):Fe[0]!="noop"&&y.l&&y.l.ta(Fe),y.v=0)}}Nr(4)}catch{}}var El=class{constructor(u,p){this.g=u,this.map=p}};function ts(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Tl(u){return u.h?1:u.g?u.g.size:0}function Yt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function ta(u,p){u.g?u.g.add(p):u.h=p}function Il(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}ts.prototype.cancel=function(){if(this.i=Sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Sl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return X(u.i)}function Hs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function Ws(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function ei(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Ws(u),E=Hs(u),L=E.length,B=0;B<L;B++)p.call(void 0,E[B],y&&y[B],u)}var ns=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),L=null;if(0<=E){var B=u[y].substring(0,E);L=u[y].substring(E+1)}else B=u[y];p(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function xr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof xr){this.h=u.h,rs(this,u.j),this.o=u.o,this.g=u.g,ti(this,u.s),this.l=u.l;var p=u.i,y=new cr;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),ni(this,y),this.m=u.m}else u&&(p=String(u).match(ns))?(this.h=!1,rs(this,p[1]||"",!0),this.o=Le(p[2]||""),this.g=Le(p[3]||"",!0),ti(this,p[4]),this.l=Le(p[5]||"",!0),ni(this,p[6]||"",!0),this.m=Le(p[7]||"")):(this.h=!1,this.i=new cr(null,this.h))}xr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(ii(p,qs,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ii(p,qs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(ii(y,y.charAt(0)=="/"?kl:Cl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",ii(y,na)),u.join("")};function yn(u){return new xr(u)}function rs(u,p,y){u.j=y?Le(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function ti(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function ni(u,p,y){p instanceof cr?(u.i=p,hr(u.i,u.h)):(y||(p=ii(p,Rl)),u.i=new cr(p,u.h))}function Ge(u,p,y){u.i.set(p,y)}function ri(u){return Ge(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Le(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ii(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Al),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Al(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var qs=/[#\/\?@]/g,Cl=/[#\?:]/g,kl=/[#\?]/g,Rl=/[#\?@]/g,na=/#/g;function cr(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Mt(u){u.g||(u.g=new Map,u.h=0,u.i&&zc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=cr.prototype,r.add=function(u,p){Mt(this),this.i=null,u=Rn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function qn(u,p){Mt(u),p=Rn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Kn(u,p){return Mt(u),p=Rn(u,p),u.g.has(p)}r.forEach=function(u,p){Mt(this),this.g.forEach(function(y,E){y.forEach(function(L){u.call(p,L,E,this)},this)},this)},r.na=function(){Mt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const L=u[E];for(let B=0;B<L.length;B++)y.push(p[E])}return y},r.V=function(u){Mt(this);let p=[];if(typeof u=="string")Kn(this,u)&&(p=p.concat(this.g.get(Rn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return Mt(this),this.i=null,u=Rn(this,u),Kn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function si(u,p,y){qn(u,p),0<y.length&&(u.i=null,u.g.set(Rn(u,p),X(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const B=encodeURIComponent(String(E)),ne=this.V(E);for(E=0;E<ne.length;E++){var L=B;ne[E]!==""&&(L+="="+encodeURIComponent(String(ne[E]))),u.push(L)}}return this.i=u.join("&")};function Rn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function hr(u,p){p&&!u.j&&(Mt(u),u.i=null,u.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(qn(this,E),si(this,L,y))},u)),u.j=p}function Bc(u,p){const y=new Xi;if(f.Image){const E=new Image;E.onload=j(nn,y,"TestLoadImage: loaded",!0,p,E),E.onerror=j(nn,y,"TestLoadImage: error",!1,p,E),E.onabort=j(nn,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=j(nn,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Pl(u,p){const y=new Xi,E=new AbortController,L=setTimeout(()=>{E.abort(),nn(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(L),B.ok?nn(y,"TestPingServer: ok",!0,p):nn(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),nn(y,"TestPingServer: error",!1,p)})}function nn(u,p,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function $c(){this.g=new Ko}function Nl(u,p,y){const E=y||"";try{ei(u,function(L,B){let ne=L;v(L)&&(ne=Wo(L)),p.push(E+B+"="+encodeURIComponent(ne))})}catch(L){throw p.push(E+"type="+encodeURIComponent("_badmap")),L}}function Dr(u){this.l=u.Ub||null,this.j=u.eb||!1}W(Dr,Qi),Dr.prototype.g=function(){return new is(this.l,this.j)},Dr.prototype.i=(function(u){return function(){return u}})({});function is(u,p){lt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(is,lt),r=is.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Qn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function xl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Gn(this):Qn(this),this.readyState==3&&xl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Gn(this))},r.Qa=function(u){this.g&&(this.response=u,Gn(this))},r.ga=function(){this.g&&Gn(this)};function Gn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Qn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Qn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Or(u){let p="";return ke(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function oi(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Or(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Ge(u,p,y))}function nt(u){lt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(nt,lt);var Hc=/^https?$/i,ra=["POST","PUT"];r=nt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hn.g(),this.v=this.o?bs(this.o):bs(Hn),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){ss(this,B);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())y.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),L=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ra,p,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,ne]of y)this.g.setRequestHeader(B,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){ss(this,B)}};function ss(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ks(u),vn(u)}function Ks(u){u.A||(u.A=!0,dt(u,"complete"),dt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,dt(this,"complete"),dt(this,"abort"),vn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vn(this,!0)),nt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ia(this):this.bb())},r.bb=function(){ia(this)};function ia(u){if(u.h&&typeof h<"u"&&(!u.v[1]||rn(u)!=4||u.Z()!=2)){if(u.u&&rn(u)==4)Jr(u.Ea,0,u);else if(dt(u,"readystatechange"),rn(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=ne===0){var L=String(u.D).match(ns)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),E=!Hc.test(L?L.toLowerCase():"")}y=E}if(y)dt(u,"complete"),dt(u,"success");else{u.m=6;try{var B=2<rn(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Ks(u)}}finally{vn(u)}}}}function vn(u,p){if(u.g){Gs(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||dt(u,"ready");try{y.onreadystatechange=E}catch{}}}function Gs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function rn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),qo(p)}};function sa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Qs(u){const p={};u=(u.g&&2<=rn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(fe(u[E]))continue;var y=M(u[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[L]||[];p[L]=B,B.push(y)}O(p,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function dr(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function oa(u){this.Aa=0,this.i=[],this.j=new Xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=dr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=dr("baseRetryDelayMs",5e3,u),this.cb=dr("retryDelaySeedMs",1e4,u),this.Wa=dr("forwardChannelMaxRetries",2,u),this.wa=dr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ts(u&&u.concurrentRequestLimit),this.Da=new $c,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=oa.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,E){ft(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Ml(this,null,this.W),fr(this)};function bt(u){if(Ys(u),u.G==3){var p=u.U++,y=yn(u.I);if(Ge(y,"SID",u.K),Ge(y,"RID",p),Ge(y,"TYPE","terminate"),Vr(u,y),p=new Wn(u,u.j,p),p.L=2,p.v=ri(yn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=bl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Ye(p)}Vl(u)}function Yn(u){u.g&&(aa(u),u.g.cancel(),u.g=null)}function Ys(u){Yn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Zs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function fr(u){if(!gn(u.h)&&!u.s){u.s=!0;var p=u.Ga;ze||N(),re||(ze(),re=!0),ge.add(p,u),u.B=0}}function Wc(u,p){return Tl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Bn(k(u.Ga,u,p),Ol(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Wn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=S(B),x(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ai(this,L,p),y=yn(this.I),Ge(y,"RID",u),Ge(y,"CVER",22),this.D&&Ge(y,"X-HTTP-Session-Id",this.D),Vr(this,y),B&&(this.O?p="headers="+encodeURIComponent(String(Or(B)))+"&"+p:this.m&&oi(y,this.m,B)),ta(this.h,L),this.Ua&&Ge(y,"TYPE","init"),this.P?(Ge(y,"$req",p),Ge(y,"SID","null"),L.T=!0,$s(L,y,null)):$s(L,y,p),this.G=2}}else this.G==3&&(u?Xs(this,u):this.i.length==0||gn(this.h)||Xs(this))};function Xs(u,p){var y;p?y=p.l:y=u.U++;const E=yn(u.I);Ge(E,"SID",u.K),Ge(E,"RID",y),Ge(E,"AID",u.T),Vr(u,E),u.m&&u.o&&oi(E,u.m,u.o),y=new Wn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ai(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ta(u.h,y),$s(y,E,p)}function Vr(u,p){u.H&&ke(u.H,function(y,E){Ge(p,E,y)}),u.l&&ei({},function(y,E){Ge(p,E,y)})}function ai(u,p,y){y=Math.min(u.i.length,y);var E=u.l?k(u.l.Na,u.l,u):null;e:{var L=u.i;let B=-1;for(;;){const ne=["count="+y];B==-1?0<y?(B=L[0].g,ne.push("ofs="+B)):B=0:ne.push("ofs="+B);let We=!0;for(let Tt=0;Tt<y;Tt++){let Fe=L[Tt].g;const Rt=L[Tt].map;if(Fe-=B,0>Fe)B=Math.max(0,L[Tt].g-100),We=!1;else try{Nl(Rt,ne,"req"+Fe+"_")}catch{E&&E(Rt)}}if(We){E=ne.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function os(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ze||N(),re||(ze(),re=!0),ge.add(p,u),u.v=0}}function Js(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Bn(k(u.Fa,u),Ol(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Dl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Bn(k(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Yn(this),Dl(this))};function aa(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Dl(u){u.g=new Wn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=yn(u.qa);Ge(p,"RID","rpc"),Ge(p,"SID",u.K),Ge(p,"AID",u.T),Ge(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ge(p,"TO",u.ja),Ge(p,"TYPE","xmlhttp"),Vr(u,p),u.m&&u.o&&oi(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=ri(yn(p)),y.m=null,y.P=!0,Zo(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Yn(this),Js(this),ft(19))};function Zs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function eo(u,p){var y=null;if(u.g==p){Zs(u),aa(u),u.g=null;var E=2}else if(Yt(u.h,p))y=p.D,Il(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;E=Yi(),dt(E,new Us(E,y)),fr(u)}else os(u);else if(L=p.s,L==3||L==0&&0<p.X||!(E==1&&Wc(u,p)||E==2&&Js(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:Mr(u,5);break;case 4:Mr(u,10);break;case 3:Mr(u,6);break;default:Mr(u,2)}}}function Ol(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Mr(u,p){if(u.j.info("Error code "+p),p==2){var y=k(u.fb,u),E=u.Xa;const L=!E;E=new xr(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||rs(E,"https"),ri(E),L?Bc(E.toString(),y):Pl(E.toString(),y)}else ft(2);u.G=0,u.l&&u.l.sa(p),Vl(u),Ys(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Vl(u){if(u.G=0,u.ka=[],u.l){const p=Sl(u.h);(p.length!=0||u.i.length!=0)&&($(u.ka,p),$(u.ka,u.i),u.h.i.length=0,X(u.i),u.i.length=0),u.l.ra()}}function Ml(u,p,y){var E=y instanceof xr?yn(y):new xr(y);if(E.g!="")p&&(E.g=p+"."+E.g),ti(E,E.s);else{var L=f.location;E=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var B=new xr(null);E&&rs(B,E),p&&(B.g=p),L&&ti(B,L),y&&(B.l=y),E=B}return y=u.D,p=u.ya,y&&p&&Ge(E,y,p),Ge(E,"VER",u.la),Vr(u,E),E}function bl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new nt(new Dr({eb:y})):new nt(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function la(){}r=la.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function to(){}to.prototype.g=function(u,p){return new Xt(u,p)};function Xt(u,p){lt.call(this),this.g=new oa(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!fe(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!fe(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new pr(this)}W(Xt,lt),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){bt(this.g)},Xt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Wo(u),u=y);p.i.push(new El(p.Ya++,u)),p.G==3&&fr(p)},Xt.prototype.N=function(){this.g.l=null,delete this.j,bt(this.g),delete this.g,Xt.aa.N.call(this)};function Ll(u){lr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}W(Ll,lr);function Fl(){Fs.call(this),this.status=1}W(Fl,Fs);function pr(u){this.g=u}W(pr,la),pr.prototype.ua=function(){dt(this.g,"a")},pr.prototype.ta=function(u){dt(this.g,new Ll(u))},pr.prototype.sa=function(u){dt(this.g,new Fl)},pr.prototype.ra=function(){dt(this.g,"b")},to.prototype.createWebChannel=to.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,m_=function(){return new to},p_=function(){return Yi()},f_=ur,zd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zs.NO_ERROR=0,zs.TIMEOUT=8,zs.HTTP_ERROR=6,Bu=zs,yl.COMPLETE="complete",d_=yl,Ls.EventType=Cn,Cn.OPEN="a",Cn.CLOSE="b",Cn.ERROR="c",Cn.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Ma=Ls,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,h_=nt}).apply(typeof Ou<"u"?Ou:typeof self<"u"?self:typeof window<"u"?window:{});const ly="@firebase/firestore",uy="4.8.0";/**
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
 */class Kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");/**
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
 */let jo="11.10.0";/**
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
 */const ks=new gc("@firebase/firestore");function So(){return ks.logLevel}function le(r,...e){if(ks.logLevel<=Oe.DEBUG){const t=e.map(Rf);ks.debug(`Firestore (${jo}): ${r}`,...t)}}function Qr(r,...e){if(ks.logLevel<=Oe.ERROR){const t=e.map(Rf);ks.error(`Firestore (${jo}): ${r}`,...t)}}function Oi(r,...e){if(ks.logLevel<=Oe.WARN){const t=e.map(Rf);ks.warn(`Firestore (${jo}): ${r}`,...t)}}function Rf(r){if(typeof r=="string")return r;try{/**
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
 */function Ie(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,g_(r,s,t)}function g_(r,e,t){let s=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Qr(s),new Error(s)}function $e(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||g_(e,o,s)}function Re(r,e){return r}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends ar{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class y_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Kt.UNAUTHENTICATED)))}shutdown(){}}class zS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class BS{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new xi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new xi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new xi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($e(typeof s.accessToken=="string",31837,{l:s}),new y_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new Kt(e)}}class $S{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class HS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new $S(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Kt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,In(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0,3512);const s=l=>{l.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,le("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new cy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new cy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function v_(){return new TextEncoder}/**
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
 */class Pf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=qS(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function xe(r,e){return r<e?-1:r>e?1:0}function Bd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return xe(s,o);{const l=v_(),h=KS(l.encode(hy(r,t)),l.encode(hy(e,t)));return h!==0?h:xe(s,o)}}t+=s>65535?2:1}return xe(r.length,e.length)}function hy(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function KS(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return xe(r[t],e[t]);return xe(r.length,e.length)}function Oo(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const dy="__name__";class _r{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ie(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ie(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return _r.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _r?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=_r.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return xe(e.length,t.length)}static compareSegments(e,t){const s=_r.isNumericId(e),o=_r.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?_r.extractNumericId(e).compare(_r.extractNumericId(t)):Bd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ni.fromString(e.substring(4,e.length-2))}}class ot extends _r{construct(e,t,s){return new ot(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ye(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new ot(t)}static emptyPath(){return new ot([])}}const GS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends _r{construct(e,t,s){return new jt(e,t,s)}static isValidIdentifier(e){return GS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dy}static keyField(){return new jt([dy])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ye(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ye(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ye(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new ye(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(t)}static emptyPath(){return new jt([])}}/**
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
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(ot.fromString(e))}static fromName(e){return new Ee(ot.fromString(e).popFirst(5))}static empty(){return new Ee(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ot.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new ot(e.slice()))}}/**
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
 */function QS(r,e,t){if(!t)throw new ye(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function YS(r,e,t,s){if(e===!0&&s===!0)throw new ye(Q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function fy(r){if(!Ee.isDocumentKey(r))throw new ye(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function __(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Nf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ie(12329,{type:typeof r})}function Vi(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ye(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Nf(r);throw new ye(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function wt(r,e){const t={typeString:r};return e&&(t.value=e),t}function cl(r,e){if(!__(r))throw new ye(Q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ye(Q.INVALID_ARGUMENT,t);return!0}/**
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
 */const py=-62135596800,my=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*my);return new Je(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ye(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ye(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<py)throw new ye(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/my}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cl(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-py;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:wt("string",Je._jsonSchemaVersion),seconds:wt("number"),nanoseconds:wt("number")};/**
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
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new Je(0,0))}static max(){return new Ce(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ya=-1;function XS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ce.fromTimestamp(s===1e9?new Je(t+1,0):new Je(t,s));return new Mi(o,Ee.empty(),e)}function JS(r){return new Mi(r.readTime,r.key,Ya)}class Mi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Mi(Ce.min(),Ee.empty(),Ya)}static max(){return new Mi(Ce.max(),Ee.empty(),Ya)}}function ZS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(r.documentKey,e.documentKey),t!==0?t:xe(r.largestBatchId,e.largestBatchId))}/**
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
 */const eA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function zo(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==eA)throw r;le("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,s)=>{t(e)}))}static reject(e){return new K(((t,s)=>{s(e)}))}static waitFor(e){return new K(((t,s)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=K.resolve(!1);for(const s of e)t=t.next((o=>o?K.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new K(((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const v=g;t(e[v]).next((T=>{h[v]=T,++f,f===l&&s(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new K(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function nA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Bo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Ec{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ec.ue=-1;/**
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
 */const xf=-1;function Tc(r){return r==null}function nc(r){return r===0&&1/r==-1/0}function rA(r){return typeof r=="number"&&Number.isInteger(r)&&!nc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const w_="";function iA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=gy(e)),e=sA(r.get(t),e);return gy(e)}function sA(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case w_:t+="";break;default:t+=l}}return t}function gy(r){return r+w_+""}/**
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
 */function yy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Hi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function E_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class at{constructor(e,t){this.comparator=e,this.root=t||Ut.EMPTY}insert(e,t){return new at(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ut.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ut.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vu(this.root,e,this.comparator,!0)}}class Vu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ut{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Ut.RED,this.left=o??Ut.EMPTY,this.right=l??Ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Ut(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ut.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}}Ut.EMPTY=null,Ut.RED=!0,Ut.BLACK=!1;Ut.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Ut(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vy(this.data.getIterator())}getIteratorFrom(e){return new vy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new kt(this.comparator);return t.data=e,t}}class vy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Sn{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new Sn([])}unionWith(e){let t=new kt(jt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Sn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Oo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class T_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class zt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new T_("Invalid base64 string: "+l):l}})(e);return new zt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new zt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zt.EMPTY_BYTE_STRING=new zt("");const oA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(r){if($e(!!r,39018),typeof r=="string"){let e=0;const t=oA.exec(r);if($e(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:mt(r.seconds),nanos:mt(r.nanos)}}function mt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Li(r){return typeof r=="string"?zt.fromBase64String(r):zt.fromUint8Array(r)}/**
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
 */const I_="server_timestamp",S_="__type__",A_="__previous_value__",C_="__local_write_time__";function Df(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[S_])===null||t===void 0?void 0:t.stringValue)===I_}function Ic(r){const e=r.mapValue.fields[A_];return Df(e)?Ic(e):e}function Xa(r){const e=bi(r.mapValue.fields[C_].timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class aA{constructor(e,t,s,o,l,h,f,g,v,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=T}}const rc="(default)";class Ja{constructor(e,t){this.projectId=e,this.database=t||rc}static empty(){return new Ja("","")}get isDefaultDatabase(){return this.database===rc}isEqual(e){return e instanceof Ja&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const k_="__type__",lA="__max__",Mu={mapValue:{}},R_="__vector__",ic="value";function Fi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Df(r)?4:cA(r)?9007199254740991:uA(r)?10:11:Ie(28295,{value:r})}function Cr(r,e){if(r===e)return!0;const t=Fi(r);if(t!==Fi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Xa(r).isEqual(Xa(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=bi(o.timestampValue),f=bi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Li(o.bytesValue).isEqual(Li(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return mt(o.geoPointValue.latitude)===mt(l.geoPointValue.latitude)&&mt(o.geoPointValue.longitude)===mt(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return mt(o.integerValue)===mt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=mt(o.doubleValue),f=mt(l.doubleValue);return h===f?nc(h)===nc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Oo(r.arrayValue.values||[],e.arrayValue.values||[],Cr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(yy(h)!==yy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!Cr(h[g],f[g])))return!1;return!0})(r,e);default:return Ie(52216,{left:r})}}function Za(r,e){return(r.values||[]).find((t=>Cr(t,e)))!==void 0}function Vo(r,e){if(r===e)return 0;const t=Fi(r),s=Fi(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=mt(l.integerValue||l.doubleValue),g=mt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return _y(r.timestampValue,e.timestampValue);case 4:return _y(Xa(r),Xa(e));case 5:return Bd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=Li(l),g=Li(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let v=0;v<f.length&&v<g.length;v++){const T=xe(f[v],g[v]);if(T!==0)return T}return xe(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=xe(mt(l.latitude),mt(h.latitude));return f!==0?f:xe(mt(l.longitude),mt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return wy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,v,T;const I=l.fields||{},k=h.fields||{},j=(f=I[ic])===null||f===void 0?void 0:f.arrayValue,W=(g=k[ic])===null||g===void 0?void 0:g.arrayValue,X=xe(((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0,((T=W==null?void 0:W.values)===null||T===void 0?void 0:T.length)||0);return X!==0?X:wy(j,W)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Mu.mapValue&&h===Mu.mapValue)return 0;if(l===Mu.mapValue)return 1;if(h===Mu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),v=h.fields||{},T=Object.keys(v);g.sort(),T.sort();for(let I=0;I<g.length&&I<T.length;++I){const k=Bd(g[I],T[I]);if(k!==0)return k;const j=Vo(f[g[I]],v[T[I]]);if(j!==0)return j}return xe(g.length,T.length)})(r.mapValue,e.mapValue);default:throw Ie(23264,{le:t})}}function _y(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return xe(r,e);const t=bi(r),s=bi(e),o=xe(t.seconds,s.seconds);return o!==0?o:xe(t.nanos,s.nanos)}function wy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Vo(t[o],s[o]);if(l)return l}return xe(t.length,s.length)}function Mo(r){return $d(r)}function $d(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=bi(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Li(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return Ee.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=$d(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${$d(t.fields[h])}`;return o+"}"})(r.mapValue):Ie(61005,{value:r})}function $u(r){switch(Fi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ic(r);return e?16+$u(e):16;case 5:return 2*r.stringValue.length;case 6:return Li(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+$u(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Hi(s.fields,((l,h)=>{o+=l.length+$u(h)})),o})(r.mapValue);default:throw Ie(13486,{value:r})}}function Hd(r){return!!r&&"integerValue"in r}function Of(r){return!!r&&"arrayValue"in r}function Ey(r){return!!r&&"nullValue"in r}function Ty(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Hu(r){return!!r&&"mapValue"in r}function uA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[k_])===null||t===void 0?void 0:t.stringValue)===R_}function za(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Hi(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=za(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=za(r.arrayValue.values[t]);return e}return Object.assign({},r)}function cA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===lA}/**
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
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Hu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=za(t)}setAll(e){let t=jt.emptyPath(),s={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=za(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Hu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Hu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Hi(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new dn(za(this.value))}}function P_(r){const e=[];return Hi(r.fields,((t,s)=>{const o=new jt([t]);if(Hu(s)){const l=P_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new Sn(e)}/**
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
 */class Gt{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Gt(e,0,Ce.min(),Ce.min(),Ce.min(),dn.empty(),0)}static newFoundDocument(e,t,s,o){return new Gt(e,1,t,Ce.min(),s,o,0)}static newNoDocument(e,t){return new Gt(e,2,t,Ce.min(),Ce.min(),dn.empty(),0)}static newUnknownDocument(e,t){return new Gt(e,3,t,Ce.min(),Ce.min(),dn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sc{constructor(e,t){this.position=e,this.inclusive=t}}function Iy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=Ee.comparator(Ee.fromName(h.referenceValue),t.key):s=Vo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Sy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Cr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class oc{constructor(e,t="asc"){this.field=e,this.dir=t}}function hA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class N_{}class At extends N_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new fA(e,t,s):t==="array-contains"?new gA(e,s):t==="in"?new yA(e,s):t==="not-in"?new vA(e,s):t==="array-contains-any"?new _A(e,s):new At(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new pA(e,s):new mA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vo(t,this.value)):t!==null&&Fi(this.value)===Fi(t)&&this.matchesComparison(Vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kr extends N_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new kr(e,t)}matches(e){return x_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function x_(r){return r.op==="and"}function D_(r){return dA(r)&&x_(r)}function dA(r){for(const e of r.filters)if(e instanceof kr)return!1;return!0}function Wd(r){if(r instanceof At)return r.field.canonicalString()+r.op.toString()+Mo(r.value);if(D_(r))return r.filters.map((e=>Wd(e))).join(",");{const e=r.filters.map((t=>Wd(t))).join(",");return`${r.op}(${e})`}}function O_(r,e){return r instanceof At?(function(s,o){return o instanceof At&&s.op===o.op&&s.field.isEqual(o.field)&&Cr(s.value,o.value)})(r,e):r instanceof kr?(function(s,o){return o instanceof kr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,f)=>l&&O_(h,o.filters[f])),!0):!1})(r,e):void Ie(19439)}function V_(r){return r instanceof At?(function(t){return`${t.field.canonicalString()} ${t.op} ${Mo(t.value)}`})(r):r instanceof kr?(function(t){return t.op.toString()+" {"+t.getFilters().map(V_).join(" ,")+"}"})(r):"Filter"}class fA extends At{constructor(e,t,s){super(e,t,s),this.key=Ee.fromName(s.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class pA extends At{constructor(e,t){super(e,"in",t),this.keys=M_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class mA extends At{constructor(e,t){super(e,"not-in",t),this.keys=M_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function M_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>Ee.fromName(s.referenceValue)))}class gA extends At{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Of(t)&&Za(t.arrayValue,this.value)}}class yA extends At{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Za(this.value.arrayValue,t)}}class vA extends At{constructor(e,t){super(e,"not-in",t)}matches(e){if(Za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Za(this.value.arrayValue,t)}}class _A extends At{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Of(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Za(this.value.arrayValue,s)))}}/**
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
 */class wA{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function Ay(r,e=null,t=[],s=[],o=null,l=null,h=null){return new wA(r,e,t,s,o,l,h)}function Vf(r){const e=Re(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Wd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Tc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Mo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Mo(s))).join(",")),e.Pe=t}return e.Pe}function Mf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!hA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!O_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Sy(r.startAt,e.startAt)&&Sy(r.endAt,e.endAt)}function qd(r){return Ee.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Sc{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function EA(r,e,t,s,o,l,h,f){return new Sc(r,e,t,s,o,l,h,f)}function bf(r){return new Sc(r)}function Cy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function TA(r){return r.collectionGroup!==null}function Ba(r){const e=Re(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new kt(jt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(f=f.add(v.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new oc(l,s))})),t.has(jt.keyField().canonicalString())||e.Te.push(new oc(jt.keyField(),s))}return e.Te}function Tr(r){const e=Re(r);return e.Ie||(e.Ie=IA(e,Ba(r))),e.Ie}function IA(r,e){if(r.limitType==="F")return Ay(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new oc(o.field,l)}));const t=r.endAt?new sc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new sc(r.startAt.position,r.startAt.inclusive):null;return Ay(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Kd(r,e,t){return new Sc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ac(r,e){return Mf(Tr(r),Tr(e))&&r.limitType===e.limitType}function b_(r){return`${Vf(Tr(r))}|lt:${r.limitType}`}function Ao(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>V_(o))).join(", ")}]`),Tc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Mo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Mo(o))).join(",")),`Target(${s})`})(Tr(r))}; limitType=${r.limitType})`}function Cc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):Ee.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of Ba(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,f,g){const v=Iy(h,f,g);return h.inclusive?v<=0:v<0})(s.startAt,Ba(s),o)||s.endAt&&!(function(h,f,g){const v=Iy(h,f,g);return h.inclusive?v>=0:v>0})(s.endAt,Ba(s),o))})(r,e)}function SA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function L_(r){return(e,t)=>{let s=!1;for(const o of Ba(r)){const l=AA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function AA(r,e,t){const s=r.field.isKeyField()?Ee.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),v=f.data.field(l);return g!==null&&v!==null?Vo(g,v):Ie(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ie(19790,{direction:r.dir})}}/**
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
 */class Vs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Hi(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return E_(this.inner)}size(){return this.innerSize}}/**
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
 */const CA=new at(Ee.comparator);function Yr(){return CA}const F_=new at(Ee.comparator);function ba(...r){let e=F_;for(const t of r)e=e.insert(t.key,t);return e}function U_(r){let e=F_;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ts(){return $a()}function j_(){return $a()}function $a(){return new Vs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const kA=new at(Ee.comparator),RA=new kt(Ee.comparator);function Ve(...r){let e=RA;for(const t of r)e=e.add(t);return e}const PA=new kt(xe);function NA(){return PA}/**
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
 */function Lf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nc(e)?"-0":e}}function z_(r){return{integerValue:""+r}}function B_(r,e){return rA(e)?z_(e):Lf(r,e)}/**
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
 */class kc{constructor(){this._=void 0}}function xA(r,e,t){return r instanceof el?(function(o,l){const h={fields:{[S_]:{stringValue:I_},[C_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Df(l)&&(l=Ic(l)),l&&(h.fields[A_]=l),{mapValue:h}})(t,e):r instanceof tl?H_(r,e):r instanceof nl?W_(r,e):(function(o,l){const h=$_(o,l),f=ky(h)+ky(o.Ee);return Hd(h)&&Hd(o.Ee)?z_(f):Lf(o.serializer,f)})(r,e)}function DA(r,e,t){return r instanceof tl?H_(r,e):r instanceof nl?W_(r,e):t}function $_(r,e){return r instanceof rl?(function(s){return Hd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class el extends kc{}class tl extends kc{constructor(e){super(),this.elements=e}}function H_(r,e){const t=q_(e);for(const s of r.elements)t.some((o=>Cr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class nl extends kc{constructor(e){super(),this.elements=e}}function W_(r,e){let t=q_(e);for(const s of r.elements)t=t.filter((o=>!Cr(o,s)));return{arrayValue:{values:t}}}class rl extends kc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function ky(r){return mt(r.integerValue||r.doubleValue)}function q_(r){return Of(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class K_{constructor(e,t){this.field=e,this.transform=t}}function OA(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof tl&&o instanceof tl||s instanceof nl&&o instanceof nl?Oo(s.elements,o.elements,Cr):s instanceof rl&&o instanceof rl?Cr(s.Ee,o.Ee):s instanceof el&&o instanceof el})(r.transform,e.transform)}class VA{constructor(e,t){this.version=e,this.transformResults=t}}class ir{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ir}static exists(e){return new ir(void 0,e)}static updateTime(e){return new ir(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Rc{}function G_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ff(r.key,ir.none()):new hl(r.key,r.data,ir.none());{const t=r.data,s=dn.empty();let o=new kt(jt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Wi(r.key,s,new Sn(o.toArray()),ir.none())}}function MA(r,e,t){r instanceof hl?(function(o,l,h){const f=o.value.clone(),g=Py(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Wi?(function(o,l,h){if(!Wu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Py(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Q_(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ha(r,e,t,s){return r instanceof hl?(function(l,h,f,g){if(!Wu(l.precondition,h))return f;const v=l.value.clone(),T=Ny(l.fieldTransforms,g,h);return v.setAll(T),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(r,e,t,s):r instanceof Wi?(function(l,h,f,g){if(!Wu(l.precondition,h))return f;const v=Ny(l.fieldTransforms,g,h),T=h.data;return T.setAll(Q_(l)),T.setAll(v),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((I=>I.field)))})(r,e,t,s):(function(l,h,f){return Wu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function bA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=$_(s.transform,o||null);l!=null&&(t===null&&(t=dn.empty()),t.set(s.field,l))}return t||null}function Ry(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Oo(s,o,((l,h)=>OA(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class hl extends Rc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Wi extends Rc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Q_(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Py(r,e,t){const s=new Map;$e(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,DA(h,f,t[o]))}return s}function Ny(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,xA(l,h,e))}return s}class Ff extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LA extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class FA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&MA(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ha(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ha(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=j_();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=G_(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ce.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&Oo(this.mutations,e.mutations,((t,s)=>Ry(t,s)))&&Oo(this.baseMutations,e.baseMutations,((t,s)=>Ry(t,s)))}}class Uf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){$e(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return kA})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Uf(e,t,s,o)}}/**
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
 */class UA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var _t,Ue;function zA(r){switch(r){case Q.OK:return Ie(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return Ie(15467,{code:r})}}function Y_(r){if(r===void 0)return Qr("GRPC error has no .code"),Q.UNKNOWN;switch(r){case _t.OK:return Q.OK;case _t.CANCELLED:return Q.CANCELLED;case _t.UNKNOWN:return Q.UNKNOWN;case _t.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case _t.INTERNAL:return Q.INTERNAL;case _t.UNAVAILABLE:return Q.UNAVAILABLE;case _t.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case _t.NOT_FOUND:return Q.NOT_FOUND;case _t.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case _t.ABORTED:return Q.ABORTED;case _t.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case _t.DATA_LOSS:return Q.DATA_LOSS;default:return Ie(39323,{code:r})}}(Ue=_t||(_t={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const BA=new Ni([4294967295,4294967295],0);function xy(r){const e=v_().encode(r),t=new c_;return t.update(e),new Uint8Array(t.digest())}function Dy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ni([t,s],0),new Ni([o,l],0)]}class jf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new La(`Invalid padding: ${t}`);if(s<0)throw new La(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new La(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new La(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ni.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(Ni.fromNumber(s)));return o.compare(BA)===1&&(o=new Ni([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=xy(e),[s,o]=Dy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new jf(l,o,t);return s.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=xy(e),[s,o]=Dy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class La extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,dl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Pc(Ce.min(),o,new at(xe),Yr(),Ve())}}class dl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new dl(s,t,Ve(),Ve(),Ve())}}/**
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
 */class qu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class X_{constructor(e,t){this.targetId=e,this.De=t}}class J_{constructor(e,t,s=zt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Oy{constructor(){this.ve=0,this.Ce=Vy(),this.Fe=zt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ve(),t=Ve(),s=Ve();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ie(38017,{changeType:l})}})),new dl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Vy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,$e(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class $A{constructor(e){this.We=e,this.Ge=new Map,this.ze=Yr(),this.je=bu(),this.Je=bu(),this.He=new at(xe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Ie(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(qd(l))if(s===0){const h=new Ee(l.path);this.Xe(t,h,Gt.newNoDocument(h,Ce.min()))}else $e(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Li(s).toUint8Array()}catch(g){if(g instanceof T_)return Oi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new jf(h,o,l)}catch(g){return Oi(g instanceof La?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&qd(f.target)){const g=new Ee(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Gt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=Ve();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const v=this.st(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Pc(e,t,this.He,this.ze,s);return this.ze=Yr(),this.je=bu(),this.Je=bu(),this.He=new at(xe),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Oy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new kt(xe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new kt(xe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Oy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function bu(){return new at(Ee.comparator)}function Vy(){return new at(Ee.comparator)}const HA={asc:"ASCENDING",desc:"DESCENDING"},WA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qA={and:"AND",or:"OR"};class KA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gd(r,e){return r.useProto3Json||Tc(e)?e:{value:e}}function ac(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Z_(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function GA(r,e){return ac(r,e.toTimestamp())}function Ir(r){return $e(!!r,49232),Ce.fromTimestamp((function(t){const s=bi(t);return new Je(s.seconds,s.nanos)})(r))}function zf(r,e){return Qd(r,e).canonicalString()}function Qd(r,e){const t=(function(o){return new ot(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function ew(r){const e=ot.fromString(r);return $e(sw(e),10190,{key:e.toString()}),e}function Yd(r,e){return zf(r.databaseId,e.path)}function Id(r,e){const t=ew(e);if(t.get(1)!==r.databaseId.projectId)throw new ye(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ye(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new Ee(nw(t))}function tw(r,e){return zf(r.databaseId,e)}function QA(r){const e=ew(r);return e.length===4?ot.emptyPath():nw(e)}function Xd(r){return new ot(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function nw(r){return $e(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function My(r,e,t){return{name:Yd(r,e),fields:t.value.mapValue.fields}}function YA(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:Ie(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,T){return v.useProto3Json?($e(T===void 0||typeof T=="string",58123),zt.fromBase64String(T||"")):($e(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),zt.fromUint8Array(T||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(v){const T=v.code===void 0?Q.UNKNOWN:Y_(v.code);return new ye(T,v.message||"")})(h);t=new J_(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Id(r,s.document.name),l=Ir(s.document.updateTime),h=s.document.createTime?Ir(s.document.createTime):Ce.min(),f=new dn({mapValue:{fields:s.document.fields}}),g=Gt.newFoundDocument(o,l,h,f),v=s.targetIds||[],T=s.removedTargetIds||[];t=new qu(v,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Id(r,s.document),l=s.readTime?Ir(s.readTime):Ce.min(),h=Gt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new qu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Id(r,s.document),l=s.removedTargetIds||[];t=new qu([],l,o,null)}else{if(!("filter"in e))return Ie(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new jA(o,l),f=s.targetId;t=new X_(f,h)}}return t}function XA(r,e){let t;if(e instanceof hl)t={update:My(r,e.key,e.value)};else if(e instanceof Ff)t={delete:Yd(r,e.key)};else if(e instanceof Wi)t={update:My(r,e.key,e.data),updateMask:oC(e.fieldMask)};else{if(!(e instanceof LA))return Ie(16599,{Rt:e.type});t={verify:Yd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const f=h.transform;if(f instanceof el)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof tl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof nl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof rl)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw Ie(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:GA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ie(27497)})(r,e.precondition)),t}function JA(r,e){return r&&r.length>0?($e(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?Ir(o.updateTime):Ir(l);return h.isEqual(Ce.min())&&(h=Ir(l)),new VA(h,o.transformResults||[])})(t,e)))):[]}function ZA(r,e){return{documents:[tw(r,e.path)]}}function eC(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=tw(r,o);const l=(function(v){if(v.length!==0)return iw(kr.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(v){if(v.length!==0)return v.map((T=>(function(k){return{field:Co(k.field),direction:rC(k.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Gd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function tC(r){let e=QA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){$e(s===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let l=[];t.where&&(l=(function(I){const k=rw(I);return k instanceof kr&&D_(k)?k.getFilters():[k]})(t.where));let h=[];t.orderBy&&(h=(function(I){return I.map((k=>(function(W){return new oc(ko(W.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(k)))})(t.orderBy));let f=null;t.limit&&(f=(function(I){let k;return k=typeof I=="object"?I.value:I,Tc(k)?null:k})(t.limit));let g=null;t.startAt&&(g=(function(I){const k=!!I.before,j=I.values||[];return new sc(j,k)})(t.startAt));let v=null;return t.endAt&&(v=(function(I){const k=!I.before,j=I.values||[];return new sc(j,k)})(t.endAt)),EA(e,o,h,l,f,"F",g,v)}function nC(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rw(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ko(t.unaryFilter.field);return At.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ko(t.unaryFilter.field);return At.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ko(t.unaryFilter.field);return At.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ko(t.unaryFilter.field);return At.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}})(r):r.fieldFilter!==void 0?(function(t){return At.create(ko(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return kr.create(t.compositeFilter.filters.map((s=>rw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}})(t.compositeFilter.op))})(r):Ie(30097,{filter:r})}function rC(r){return HA[r]}function iC(r){return WA[r]}function sC(r){return qA[r]}function Co(r){return{fieldPath:r.canonicalString()}}function ko(r){return jt.fromServerFormat(r.fieldPath)}function iw(r){return r instanceof At?(function(t){if(t.op==="=="){if(Ty(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NAN"}};if(Ey(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ty(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NOT_NAN"}};if(Ey(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Co(t.field),op:iC(t.op),value:t.value}}})(r):r instanceof kr?(function(t){const s=t.getFilters().map((o=>iw(o)));return s.length===1?s[0]:{compositeFilter:{op:sC(t.op),filters:s}}})(r):Ie(54877,{filter:r})}function oC(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function sw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ki{constructor(e,t,s,o,l=Ce.min(),h=Ce.min(),f=zt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new ki(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class aC{constructor(e){this.gt=e}}function lC(r){const e=tC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Kd(e,e.limit,"L"):e}/**
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
 */class uC{constructor(){this.Dn=new cC}addToCollectionParentIndex(e,t){return this.Dn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Mi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Mi.min())}updateCollectionGroup(e,t,s){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class cC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new kt(ot.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new kt(ot.comparator)).toArray()}}/**
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
 */const by={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ow=41943040;class hn{static withCacheSize(e){return new hn(e,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */hn.DEFAULT_COLLECTION_PERCENTILE=10,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hn.DEFAULT=new hn(ow,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hn.DISABLED=new hn(-1,0,0);/**
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
 */class bo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new bo(0)}static ur(){return new bo(-1)}}/**
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
 */const Ly="LruGarbageCollector",hC=1048576;function Fy([r,e],[t,s]){const o=xe(r,t);return o===0?xe(e,s):o}class dC{constructor(e){this.Tr=e,this.buffer=new kt(Fy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Fy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fC{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){le(Ly,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Bo(t)?le(Ly,"Ignoring IndexedDB error during garbage collection: ",t):await zo(t)}await this.Rr(3e5)}))}}class pC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Ec.ue);const s=new dC(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(by)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),by):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,f,g,v;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(s=I,f=Date.now(),this.removeTargets(e,s,t)))).next((I=>(l=I,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((I=>(v=Date.now(),So()<=Oe.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${I} documents in `+(v-g)+`ms
Total Duration: ${v-T}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I}))))}}function mC(r,e){return new pC(r,e)}/**
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
 */class gC{constructor(){this.changes=new Vs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Gt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?K.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class vC{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ha(s.mutation,o,Sn.empty(),Je.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ve()){const o=Ts();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=ba();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Ts();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ve())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,s,o){let l=Yr();const h=$a(),f=(function(){return $a()})();return t.forEach(((g,v)=>{const T=s.get(v.key);o.has(v.key)&&(T===void 0||T.mutation instanceof Wi)?l=l.insert(v.key,v):T!==void 0?(h.set(v.key,T.mutation.getFieldMask()),Ha(T.mutation,v,T.mutation.getFieldMask(),Je.now())):h.set(v.key,Sn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((v,T)=>h.set(v,T))),t.forEach(((v,T)=>{var I;return f.set(v,new yC(T,(I=h.get(v))!==null&&I!==void 0?I:null))})),f)))}recalculateAndSaveOverlays(e,t){const s=$a();let o=new at(((h,f)=>h-f)),l=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let T=s.get(g)||Sn.empty();T=f.applyToLocalView(v,T),s.set(g,T);const I=(o.get(f.batchId)||Ve()).add(g);o=o.insert(f.batchId,I)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),v=g.key,T=g.value,I=j_();T.forEach((k=>{if(!l.has(k)){const j=G_(t.get(k),s.get(k));j!==null&&I.set(k,j),l=l.add(k)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,I))}return K.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return Ee.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):TA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):K.resolve(Ts());let f=Ya,g=l;return h.next((v=>K.forEach(v,((T,I)=>(f<I.largestBatchId&&(f=I.largestBatchId),l.get(T)?K.resolve():this.remoteDocumentCache.getEntry(e,T).next((k=>{g=g.insert(T,k)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,g,v,Ve()))).next((T=>({batchId:f,changes:U_(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next((s=>{let o=ba();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=ba();return this.indexManager.getCollectionParents(e,l).next((f=>K.forEach(f,(g=>{const v=(function(I,k){return new Sc(k,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((T=>{T.forEach(((I,k)=>{h=h.insert(I,k)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,v)=>{const T=v.getKey();h.get(T)===null&&(h=h.insert(T,Gt.newInvalidDocument(T)))}));let f=ba();return h.forEach(((g,v)=>{const T=l.get(g);T!==void 0&&Ha(T.mutation,v,Sn.empty(),Je.now()),Cc(t,v)&&(f=f.insert(g,v))})),f}))}}/**
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
 */class _C{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return K.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Ir(o.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:lC(o.bundledQuery),readTime:Ir(o.readTime)}})(t)),K.resolve()}}/**
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
 */class wC{constructor(){this.overlays=new at(Ee.comparator),this.kr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ts();return K.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),K.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),K.resolve()}getOverlaysForCollection(e,t,s){const o=Ts(),l=t.length+1,h=new Ee(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new at(((v,T)=>v-T));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let T=l.get(v.largestBatchId);T===null&&(T=Ts(),l=l.insert(v.largestBatchId,T)),T.set(v.getKey(),v)}}const f=Ts(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,T)=>f.set(v,T))),!(f.size()>=o)););return K.resolve(f)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new UA(t,s));let l=this.kr.get(t);l===void 0&&(l=Ve(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class EC{constructor(){this.sessionToken=zt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class Bf{constructor(){this.qr=new kt(Dt.Qr),this.$r=new kt(Dt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Dt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Dt(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new Ee(new ot([])),s=new Dt(t,e),o=new Dt(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Ee(new ot([])),s=new Dt(t,e),o=new Dt(t,e+1);let l=Ve();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Dt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Dt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Ee.comparator(e.key,t.key)||xe(e.Hr,t.Hr)}static Ur(e,t){return xe(e.Hr,t.Hr)||Ee.comparator(e.key,t.key)}}/**
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
 */class TC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new kt(Dt.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new FA(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new Dt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?xf:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Dt(t,0),o=new Dt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new kt(xe);return t.forEach((o=>{const l=new Dt(o,0),h=new Dt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{s=s.add(f.Hr)}))})),K.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;Ee.isDocumentKey(l)||(l=l.child(""));const h=new Dt(new Ee(l),0);let f=new kt(xe);return this.Yr.forEachWhile((g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(f=f.add(g.Hr)),!0)}),h),K.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){$e(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return K.forEach(t.mutations,(o=>{const l=new Dt(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new Dt(t,0),o=this.Yr.firstAfterOrEqual(s);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class IC{constructor(e){this.ni=e,this.docs=(function(){return new at(Ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return K.resolve(s?s.document.mutableCopy():Gt.newInvalidDocument(t))}getEntries(e,t){let s=Yr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Gt.newInvalidDocument(o))})),K.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Yr();const h=t.path,f=new Ee(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:v,value:{document:T}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||ZS(JS(T),s)<=0||(o.has(T.key)||Cc(t,T))&&(l=l.insert(T.key,T.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,s,o){Ie(9500)}ri(e,t){return K.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new SC(this)}getSize(e){return K.resolve(this.size)}}class SC extends gC{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),K.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class AC{constructor(e){this.persistence=e,this.ii=new Vs((t=>Vf(t)),Mf),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.si=0,this.oi=new Bf,this.targetCount=0,this._i=bo.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),K.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new bo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.hr(t),K.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),K.waitFor(l).next((()=>o))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return K.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),K.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return K.resolve(s)}containsKey(e,t){return K.resolve(this.oi.containsKey(t))}}/**
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
 */class aw{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ec(0),this.ci=!1,this.ci=!0,this.li=new EC,this.referenceDelegate=e(this),this.hi=new AC(this),this.indexManager=new uC,this.remoteDocumentCache=(function(o){return new IC(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new aC(t),this.Ti=new _C(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new TC(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){le("MemoryPersistence","Starting transaction:",e);const o=new CC(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return K.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class CC extends tA{constructor(e){super(),this.currentSequenceNumber=e}}class $f{constructor(e){this.persistence=e,this.Ai=new Bf,this.Ri=null}static Vi(e){return new $f(e)}get mi(){if(this.Ri)return this.Ri;throw Ie(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),K.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,(s=>{const o=Ee.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ce.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return K.or([()=>K.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class lc{constructor(e,t){this.persistence=e,this.gi=new Vs((s=>iA(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=mC(this,t)}static Vi(e,t){return new lc(e,t)}Ii(){}di(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return K.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?K.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(s++,l.removeEntry(h,Ce.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),K.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=$u(e.data.value)),t}Sr(e,t,s){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return K.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Hf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Ve(),o=Ve();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Hf(e,t.fromCache,s,o)}}/**
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
 */class kC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class RC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return iT()?8:nA(Qt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new kC;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(So()<=Oe.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(So()<=Oe.DEBUG&&le("QueryEngine","Query:",Ao(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(So()<=Oe.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tr(t))):K.resolve())}ps(e,t){if(Cy(t))return K.resolve(null);let s=Tr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Kd(t,null,"F"),s=Tr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=Ve(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,s).next((g=>{const v=this.bs(t,f);return this.Ds(t,v,h,g.readTime)?this.ps(e,Kd(t,null,"F")):this.vs(e,v,t,g)}))))})))))}ys(e,t,s,o){return Cy(t)||o.isEqual(Ce.min())?K.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?K.resolve(null):(So()<=Oe.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ao(t)),this.vs(e,h,t,XS(o,Ya)).next((f=>f)))}))}bs(e,t){let s=new kt(L_(e));return t.forEach(((o,l)=>{Cc(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return So()<=Oe.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Ao(t)),this.gs.getDocumentsMatchingQuery(e,t,Mi.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const Wf="LocalStore",PC=3e8;class NC{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new at(xe),this.Ms=new Vs((l=>Vf(l)),Mf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function xC(r,e,t,s){return new NC(r,e,t,s)}async function lw(r,e){const t=Re(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],f=[];let g=Ve();for(const v of o){h.push(v.batchId);for(const T of v.mutations)g=g.add(T.key)}for(const v of l){f.push(v.batchId);for(const T of v.mutations)g=g.add(T.key)}return t.localDocuments.getDocuments(s,g).next((v=>({Bs:v,removedBatchIds:h,addedBatchIds:f})))}))}))}function DC(r,e){const t=Re(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,v,T){const I=v.batch,k=I.keys();let j=K.resolve();return k.forEach((W=>{j=j.next((()=>T.getEntry(g,W))).next((X=>{const $=v.docVersions.get(W);$e($!==null,48541),X.version.compareTo($)<0&&(I.applyToRemoteDocument(X,v),X.isValidDocument()&&(X.setReadTime(v.commitVersion),T.addEntry(X)))}))})),j.next((()=>f.mutationQueue.removeMutationBatch(g,I)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let g=Ve();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(g=g.add(f.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function uw(r){const e=Re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function OC(r,e){const t=Re(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((T,I)=>{const k=o.get(I);if(!k)return;f.push(t.hi.removeMatchingKeys(l,T.removedDocuments,I).next((()=>t.hi.addMatchingKeys(l,T.addedDocuments,I))));let j=k.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?j=j.withResumeToken(zt.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):T.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(T.resumeToken,s)),o=o.insert(I,j),(function(X,$,me){return X.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=PC?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(k,j,T)&&f.push(t.hi.updateTargetData(l,j))}));let g=Yr(),v=Ve();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,T))})),f.push(VC(l,h,e.documentUpdates).next((T=>{g=T.Ls,v=T.ks}))),!s.isEqual(Ce.min())){const T=t.hi.getLastRemoteSnapshotVersion(l).next((I=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(T)}return K.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,v))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function VC(r,e,t){let s=Ve(),o=Ve();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=Yr();return t.forEach(((f,g)=>{const v=l.get(f);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ce.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):le(Wf,"Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function MC(r,e){const t=Re(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=xf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function bC(r,e){const t=Re(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,K.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new ki(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Jd(r,e,t){const s=Re(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Bo(h))throw h;le(Wf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Uy(r,e,t){const s=Re(r);let o=Ce.min(),l=Ve();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,v,T){const I=Re(g),k=I.Ms.get(T);return k!==void 0?K.resolve(I.Fs.get(k)):I.hi.getTargetData(v,T)})(s,h,Tr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Ce.min(),t?l:Ve()))).next((f=>(LC(s,SA(e),f),{documents:f,qs:l})))))}function LC(r,e,t){let s=r.xs.get(e)||Ce.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class jy{constructor(){this.activeTargetIds=NA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FC{constructor(){this.Fo=new jy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new jy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UC{xo(e){}shutdown(){}}/**
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
 */const zy="ConnectivityMonitor";class By{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){le(zy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){le(zy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lu=null;function Zd(){return Lu===null?Lu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Lu++,"0x"+Lu.toString(16)}/**
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
 */const Sd="RestConnection",jC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===rc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=Zd(),f=this.Go(e,t.toUriEncodedString());le(Sd,`Sending RPC '${e}' ${h}:`,f,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:v}=new URL(f),T=xs(v);return this.jo(e,f,g,s,T).then((I=>(le(Sd,`Received RPC '${e}' ${h}: `,I),I)),(I=>{throw Oi(Sd,`RPC '${e}' ${h} failed with error: `,I,"url: ",f,"request:",s),I}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+jo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=jC[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class BC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const qt="WebChannelConnection";class $C extends zC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=Zd();return new Promise(((f,g)=>{const v=new h_;v.setWithCredentials(!0),v.listenOnce(d_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Bu.NO_ERROR:const I=v.getResponseJson();le(qt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),f(I);break;case Bu.TIMEOUT:le(qt,`RPC '${e}' ${h} timed out`),g(new ye(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Bu.HTTP_ERROR:const k=v.getStatus();if(le(qt,`RPC '${e}' ${h} failed with status:`,k,"response text:",v.getResponseText()),k>0){let j=v.getResponseJson();Array.isArray(j)&&(j=j[0]);const W=j==null?void 0:j.error;if(W&&W.status&&W.message){const X=(function(me){const fe=me.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(fe)>=0?fe:Q.UNKNOWN})(W.status);g(new ye(X,W.message))}else g(new ye(Q.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new ye(Q.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{c_:e,streamId:h,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{le(qt,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);le(qt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",T,s,15)}))}P_(e,t,s){const o=Zd(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=m_(),f=p_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const T=l.join("");le(qt,`Creating RPC '${e}' stream ${o}: ${T}`,g);const I=h.createWebChannel(T,g);this.T_(I);let k=!1,j=!1;const W=new BC({Ho:$=>{j?le(qt,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(k||(le(qt,`Opening RPC '${e}' stream ${o} transport.`),I.open(),k=!0),le(qt,`RPC '${e}' stream ${o} sending:`,$),I.send($))},Yo:()=>I.close()}),X=($,me,fe)=>{$.listen(me,(ce=>{try{fe(ce)}catch(Se){setTimeout((()=>{throw Se}),0)}}))};return X(I,Ma.EventType.OPEN,(()=>{j||(le(qt,`RPC '${e}' stream ${o} transport opened.`),W.s_())})),X(I,Ma.EventType.CLOSE,(()=>{j||(j=!0,le(qt,`RPC '${e}' stream ${o} transport closed`),W.__(),this.I_(I))})),X(I,Ma.EventType.ERROR,($=>{j||(j=!0,Oi(qt,`RPC '${e}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),W.__(new ye(Q.UNAVAILABLE,"The operation could not be completed")))})),X(I,Ma.EventType.MESSAGE,($=>{var me;if(!j){const fe=$.data[0];$e(!!fe,16349);const ce=fe,Se=(ce==null?void 0:ce.error)||((me=ce[0])===null||me===void 0?void 0:me.error);if(Se){le(qt,`RPC '${e}' stream ${o} received error:`,Se);const Me=Se.status;let ke=(function(R){const x=_t[R];if(x!==void 0)return Y_(x)})(Me),O=Se.message;ke===void 0&&(ke=Q.INTERNAL,O="Unknown error status: "+Me+" with message "+Se.message),j=!0,W.__(new ye(ke,O)),I.close()}else le(qt,`RPC '${e}' stream ${o} received:`,fe),W.a_(fe)}})),X(f,f_.STAT_EVENT,($=>{$.stat===zd.PROXY?le(qt,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===zd.NOPROXY&&le(qt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{W.o_()}),0),W}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Ad(){return typeof document<"u"?document:null}/**
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
 */function Nc(r){return new KA(r,!0)}/**
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
 */class cw{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const $y="PersistentStream";class hw{constructor(e,t,s,o,l,h,f,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new cw(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Qr(t.toString()),Qr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ye(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return le($y,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(le($y,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class HC extends hw{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=YA(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ce.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ce.min():h.readTime?Ir(h.readTime):Ce.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Xd(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=qd(g)?{documents:ZA(l,g)}:{query:eC(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Z_(l,h.resumeToken);const v=Gd(l,h.expectedCount);v!==null&&(f.expectedCount=v)}else if(h.snapshotVersion.compareTo(Ce.min())>0){f.readTime=ac(l,h.snapshotVersion.toTimestamp());const v=Gd(l,h.expectedCount);v!==null&&(f.expectedCount=v)}return f})(this.serializer,e);const s=nC(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Xd(this.serializer),t.removeTarget=e,this.k_(t)}}class WC extends hw{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=JA(e.writeResults,e.commitTime),s=Ir(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Xd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>XA(this.serializer,s)))};this.k_(t)}}/**
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
 */class qC{}class KC extends qC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ye(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,Qd(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ye(Q.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,Qd(t,s),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ye(Q.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class GC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Qr(t),this._a=!1):le("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Rs="RemoteStore";class QC{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{Ms(this)&&(le(Rs,"Restarting streams for network reachability change."),await(async function(g){const v=Re(g);v.Ia.add(4),await fl(v),v.Aa.set("Unknown"),v.Ia.delete(4),await xc(v)})(this))}))})),this.Aa=new GC(s,o)}}async function xc(r){if(Ms(r))for(const e of r.da)await e(!0)}async function fl(r){for(const e of r.da)await e(!1)}function dw(r,e){const t=Re(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Qf(t)?Gf(t):$o(t).x_()&&Kf(t,e))}function qf(r,e){const t=Re(r),s=$o(t);t.Ta.delete(e),s.x_()&&fw(t,e),t.Ta.size===0&&(s.x_()?s.B_():Ms(t)&&t.Aa.set("Unknown"))}function Kf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$o(r).H_(e)}function fw(r,e){r.Ra.$e(e),$o(r).Y_(e)}function Gf(r){r.Ra=new $A({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),$o(r).start(),r.Aa.aa()}function Qf(r){return Ms(r)&&!$o(r).M_()&&r.Ta.size>0}function Ms(r){return Re(r).Ia.size===0}function pw(r){r.Ra=void 0}async function YC(r){r.Aa.set("Online")}async function XC(r){r.Ta.forEach(((e,t)=>{Kf(r,e)}))}async function JC(r,e){pw(r),Qf(r)?(r.Aa.la(e),Gf(r)):r.Aa.set("Unknown")}async function ZC(r,e,t){if(r.Aa.set("Online"),e instanceof J_&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(r,e)}catch(s){le(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await uc(r,s)}else if(e instanceof qu?r.Ra.Ye(e):e instanceof X_?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Ce.min()))try{const s=await uw(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const T=l.Ta.get(v);T&&l.Ta.set(v,T.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,v)=>{const T=l.Ta.get(g);if(!T)return;l.Ta.set(g,T.withResumeToken(zt.EMPTY_BYTE_STRING,T.snapshotVersion)),fw(l,g);const I=new ki(T.target,g,v,T.sequenceNumber);Kf(l,I)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(s){le(Rs,"Failed to raise snapshot:",s),await uc(r,s)}}async function uc(r,e,t){if(!Bo(e))throw e;r.Ia.add(1),await fl(r),r.Aa.set("Offline"),t||(t=()=>uw(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{le(Rs,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await xc(r)}))}function mw(r,e){return e().catch((t=>uc(r,t,e)))}async function Dc(r){const e=Re(r),t=Ui(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:xf;for(;ek(e);)try{const o=await MC(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,tk(e,o)}catch(o){await uc(e,o)}gw(e)&&yw(e)}function ek(r){return Ms(r)&&r.Pa.length<10}function tk(r,e){r.Pa.push(e);const t=Ui(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function gw(r){return Ms(r)&&!Ui(r).M_()&&r.Pa.length>0}function yw(r){Ui(r).start()}async function nk(r){Ui(r).na()}async function rk(r){const e=Ui(r);for(const t of r.Pa)e.X_(t.mutations)}async function ik(r,e,t){const s=r.Pa.shift(),o=Uf.from(s,e,t);await mw(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Dc(r)}async function sk(r,e){e&&Ui(r).Z_&&await(async function(s,o){if((function(h){return zA(h)&&h!==Q.ABORTED})(o.code)){const l=s.Pa.shift();Ui(s).N_(),await mw(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Dc(s)}})(r,e),gw(r)&&yw(r)}async function Hy(r,e){const t=Re(r);t.asyncQueue.verifyOperationInProgress(),le(Rs,"RemoteStore received new credentials");const s=Ms(t);t.Ia.add(3),await fl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await xc(t)}async function ok(r,e){const t=Re(r);e?(t.Ia.delete(2),await xc(t)):e||(t.Ia.add(2),await fl(t),t.Aa.set("Unknown"))}function $o(r){return r.Va||(r.Va=(function(t,s,o){const l=Re(t);return l.ia(),new HC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:YC.bind(null,r),e_:XC.bind(null,r),n_:JC.bind(null,r),J_:ZC.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Qf(r)?Gf(r):r.Aa.set("Unknown")):(await r.Va.stop(),pw(r))}))),r.Va}function Ui(r){return r.ma||(r.ma=(function(t,s,o){const l=Re(t);return l.ia(),new WC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:nk.bind(null,r),n_:sk.bind(null,r),ea:rk.bind(null,r),ta:ik.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Dc(r)):(await r.ma.stop(),r.Pa.length>0&&(le(Rs,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class Yf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Yf(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xf(r,e){if(Qr("AsyncQueue",`${e}: ${r}`),Bo(r))return new ye(Q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Do{static emptySet(e){return new Do(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Ee.comparator(t.key,s.key):(t,s)=>Ee.comparator(t.key,s.key),this.keyedMap=ba(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Do)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Do;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Wy{constructor(){this.fa=new at(Ee.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ie(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Lo{constructor(e,t,s,o,l,h,f,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Lo(e,t,Do.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class ak{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class lk{constructor(){this.queries=qy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Re(t),l=o.queries;o.queries=qy(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(s)}))})(this,new ye(Q.ABORTED,"Firestore shutting down"))}}function qy(){return new Vs((r=>b_(r)),Ac)}async function uk(r,e){const t=Re(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new ak,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Xf(h,`Initialization of query '${Ao(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Jf(t)}async function ck(r,e){const t=Re(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function hk(r,e){const t=Re(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(s=!0);h.ya=o}}s&&Jf(t)}function dk(r,e,t){const s=Re(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function Jf(r){r.Da.forEach((e=>{e.next()}))}var ef,Ky;(Ky=ef||(ef={})).Fa="default",Ky.Cache="cache";class fk{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Lo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ef.Cache}}/**
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
 */class vw{constructor(e){this.key=e}}class _w{constructor(e){this.key=e}}class pk{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ve(),this.mutatedKeys=Ve(),this.Xa=L_(e),this.eu=new Do(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Wy,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,I)=>{const k=o.get(T),j=Cc(this.query,I)?I:null,W=!!k&&this.mutatedKeys.has(k.key),X=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let $=!1;k&&j?k.data.isEqual(j.data)?W!==X&&(s.track({type:3,doc:j}),$=!0):this.iu(k,j)||(s.track({type:2,doc:j}),$=!0,(g&&this.Xa(j,g)>0||v&&this.Xa(j,v)<0)&&(f=!0)):!k&&j?(s.track({type:0,doc:j}),$=!0):k&&!j&&(s.track({type:1,doc:k}),$=!0,(g||v)&&(f=!0)),$&&(j?(h=h.add(j),l=X?l.add(T):l.delete(T)):(h=h.delete(T),l=l.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),l=l.delete(T.key),s.track({type:1,doc:T})}return{eu:h,ru:s,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((T,I)=>(function(j,W){const X=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie(20277,{At:$})}};return X(j)-X(W)})(T.type,I.type)||this.Xa(T.doc,I.doc))),this.su(s),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,v=g!==this.Ya;return this.Ya=g,h.length!==0||v?{snapshot:new Lo(this.query,e.eu,l,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Wy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ve(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new _w(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new vw(s))})),t}uu(e){this.Ha=e.qs,this.Za=Ve();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Lo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Zf="SyncEngine";class mk{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class gk{constructor(e){this.key=e,this.lu=!1}}class yk{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Vs((f=>b_(f)),Ac),this.Tu=new Map,this.Iu=new Set,this.du=new at(Ee.comparator),this.Eu=new Map,this.Au=new Bf,this.Ru={},this.Vu=new Map,this.mu=bo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function vk(r,e,t=!0){const s=Aw(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await ww(s,e,t,!0),o}async function _k(r,e){const t=Aw(r);await ww(t,e,!0,!1)}async function ww(r,e,t,s){const o=await bC(r.localStore,Tr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await wk(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&dw(r.remoteStore,o),f}async function wk(r,e,t,s,o){r.gu=(I,k,j)=>(async function(X,$,me,fe){let ce=$.view.nu(me);ce.Ds&&(ce=await Uy(X.localStore,$.query,!1).then((({documents:O})=>$.view.nu(O,ce))));const Se=fe&&fe.targetChanges.get($.targetId),Me=fe&&fe.targetMismatches.get($.targetId)!=null,ke=$.view.applyChanges(ce,X.isPrimaryClient,Se,Me);return Qy(X,$.targetId,ke._u),ke.snapshot})(r,I,k,j);const l=await Uy(r.localStore,e,!0),h=new pk(e,l.qs),f=h.nu(l.documents),g=dl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(f,r.isPrimaryClient,g);Qy(r,t,v._u);const T=new mk(e,t,h);return r.Pu.set(e,T),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),v.snapshot}async function Ek(r,e,t){const s=Re(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!Ac(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Jd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&qf(s.remoteStore,o.targetId),tf(s,o.targetId)})).catch(zo)):(tf(s,o.targetId),await Jd(s.localStore,o.targetId,!0))}async function Tk(r,e){const t=Re(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),qf(t.remoteStore,s.targetId))}async function Ik(r,e,t){const s=Nk(r);try{const o=await(function(h,f){const g=Re(h),v=Je.now(),T=f.reduce(((j,W)=>j.add(W.key)),Ve());let I,k;return g.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let W=Yr(),X=Ve();return g.Os.getEntries(j,T).next(($=>{W=$,W.forEach(((me,fe)=>{fe.isValidDocument()||(X=X.add(me))}))})).next((()=>g.localDocuments.getOverlayedDocuments(j,W))).next(($=>{I=$;const me=[];for(const fe of f){const ce=bA(fe,I.get(fe.key).overlayedDocument);ce!=null&&me.push(new Wi(fe.key,ce,P_(ce.value.mapValue),ir.exists(!0)))}return g.mutationQueue.addMutationBatch(j,v,me,f)})).next(($=>{k=$;const me=$.applyToLocalDocumentSet(I,X);return g.documentOverlayCache.saveOverlays(j,$.batchId,me)}))})).then((()=>({batchId:k.batchId,changes:U_(I)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let v=h.Ru[h.currentUser.toKey()];v||(v=new at(xe)),v=v.insert(f,g),h.Ru[h.currentUser.toKey()]=v})(s,o.batchId,t),await pl(s,o.changes),await Dc(s.remoteStore)}catch(o){const l=Xf(o,"Failed to persist write");t.reject(l)}}async function Ew(r,e){const t=Re(r);try{const s=await OC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&($e(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?$e(h.lu,14607):o.removedDocuments.size>0&&($e(h.lu,42227),h.lu=!1))})),await pl(t,s,e)}catch(s){await zo(s)}}function Gy(r,e,t){const s=Re(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Re(h);g.onlineState=f;let v=!1;g.queries.forEach(((T,I)=>{for(const k of I.wa)k.va(f)&&(v=!0)})),v&&Jf(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Sk(r,e,t){const s=Re(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new at(Ee.comparator);h=h.insert(l,Gt.newNoDocument(l,Ce.min()));const f=Ve().add(l),g=new Pc(Ce.min(),new Map,new at(xe),h,f);await Ew(s,g),s.du=s.du.remove(l),s.Eu.delete(e),ep(s)}else await Jd(s.localStore,e,!1).then((()=>tf(s,e,t))).catch(zo)}async function Ak(r,e){const t=Re(r),s=e.batch.batchId;try{const o=await DC(t.localStore,e);Iw(t,s,null),Tw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await pl(t,o)}catch(o){await zo(o)}}async function Ck(r,e,t){const s=Re(r);try{const o=await(function(h,f){const g=Re(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let T;return g.mutationQueue.lookupMutationBatch(v,f).next((I=>($e(I!==null,37113),T=I.keys(),g.mutationQueue.removeMutationBatch(v,I)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,T,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,T))).next((()=>g.localDocuments.getDocuments(v,T)))}))})(s.localStore,e);Iw(s,e,t),Tw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await pl(s,o)}catch(o){await zo(o)}}function Tw(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function Iw(r,e,t){const s=Re(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function tf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||Sw(r,s)}))}function Sw(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(qf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),ep(r))}function Qy(r,e,t){for(const s of t)s instanceof vw?(r.Au.addReference(s.key,e),kk(r,s)):s instanceof _w?(le(Zf,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||Sw(r,s.key)):Ie(19791,{yu:s})}function kk(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(le(Zf,"New document in limbo: "+t),r.Iu.add(s),ep(r))}function ep(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new Ee(ot.fromString(e)),s=r.mu.next();r.Eu.set(s,new gk(t)),r.du=r.du.insert(t,s),dw(r.remoteStore,new ki(Tr(bf(t.path)),s,"TargetPurposeLimboResolution",Ec.ue))}}async function pl(r,e,t){const s=Re(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((f,g)=>{h.push(s.gu(g,e,t).then((v=>{var T;if((v||t)&&s.isPrimaryClient){const I=v?!v.fromCache:(T=t==null?void 0:t.targetChanges.get(g.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(v){o.push(v);const I=Hf.Es(g.targetId,v);l.push(I)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,v){const T=Re(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>K.forEach(v,(k=>K.forEach(k.Is,(j=>T.persistence.referenceDelegate.addReference(I,k.targetId,j))).next((()=>K.forEach(k.ds,(j=>T.persistence.referenceDelegate.removeReference(I,k.targetId,j)))))))))}catch(I){if(!Bo(I))throw I;le(Wf,"Failed to update sequence numbers: "+I)}for(const I of v){const k=I.targetId;if(!I.fromCache){const j=T.Fs.get(k),W=j.snapshotVersion,X=j.withLastLimboFreeSnapshotVersion(W);T.Fs=T.Fs.insert(k,X)}}})(s.localStore,l))}async function Rk(r,e){const t=Re(r);if(!t.currentUser.isEqual(e)){le(Zf,"User change. New user:",e.toKey());const s=await lw(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new ye(Q.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await pl(t,s.Bs)}}function Pk(r,e){const t=Re(r),s=t.Eu.get(e);if(s&&s.lu)return Ve().add(s.key);{let o=Ve();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function Aw(r){const e=Re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ew.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sk.bind(null,e),e.hu.J_=hk.bind(null,e.eventManager),e.hu.pu=dk.bind(null,e.eventManager),e}function Nk(r){const e=Re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ak.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ck.bind(null,e),e}class cc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return xC(this.persistence,new RC,e.initialUser,this.serializer)}Du(e){return new aw($f.Vi,this.serializer)}bu(e){return new FC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cc.provider={build:()=>new cc};class xk extends cc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){$e(this.persistence.referenceDelegate instanceof lc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new fC(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?hn.withCacheSize(this.cacheSizeBytes):hn.DEFAULT;return new aw((s=>lc.Vi(s,t)),this.serializer)}}class nf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Gy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rk.bind(null,this.syncEngine),await ok(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new lk})()}createDatastore(e){const t=Nc(e.databaseInfo.databaseId),s=(function(l){return new $C(l)})(e.databaseInfo);return(function(l,h,f,g){return new KC(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,f){return new QC(s,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Gy(this.syncEngine,t,0)),(function(){return By.C()?new By:new UC})())}createSyncEngine(e,t){return(function(o,l,h,f,g,v,T){const I=new yk(o,l,h,f,g,v);return T&&(I.fu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Re(o);le(Rs,"RemoteStore shutting down."),l.Ia.add(5),await fl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}nf.provider={build:()=>new nf};/**
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
 */class Dk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Qr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const ji="FirestoreClient";class Ok{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Kt.UNAUTHENTICATED,this.clientId=Pf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{le(ji,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(le(ji,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Xf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Cd(r,e){r.asyncQueue.verifyOperationInProgress(),le(ji,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await lw(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Oi("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{le("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Oi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function Yy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Vk(r);le(ji,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>Hy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Hy(e.remoteStore,o))),r._onlineComponents=e}async function Vk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){le(ji,"Using user provided OfflineComponentProvider");try{await Cd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Oi("Error using user provided cache. Falling back to memory cache: "+t),await Cd(r,new cc)}}else le(ji,"Using default OfflineComponentProvider"),await Cd(r,new xk(void 0));return r._offlineComponents}async function Cw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(le(ji,"Using user provided OnlineComponentProvider"),await Yy(r,r._uninitializedComponentsProvider._online)):(le(ji,"Using default OnlineComponentProvider"),await Yy(r,new nf))),r._onlineComponents}function Mk(r){return Cw(r).then((e=>e.syncEngine))}async function bk(r){const e=await Cw(r),t=e.eventManager;return t.onListen=vk.bind(null,e.syncEngine),t.onUnlisten=Ek.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_k.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Tk.bind(null,e.syncEngine),t}function Lk(r,e,t={}){const s=new xi;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,v){const T=new Dk({next:k=>{T.Ou(),h.enqueueAndForget((()=>ck(l,I)));const j=k.docs.has(f);!j&&k.fromCache?v.reject(new ye(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&k.fromCache&&g&&g.source==="server"?v.reject(new ye(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(k)},error:k=>v.reject(k)}),I=new fk(bf(f.path),T,{includeMetadataChanges:!0,ka:!0});return uk(l,I)})(await bk(r),r.asyncQueue,e,t,s))),s.promise}/**
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
 */function kw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Xy=new Map;/**
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
 */const Rw="firestore.googleapis.com",Jy=!0;class Zy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rw,this.ssl=Jy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Jy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ow;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hC)throw new ye(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ye(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ye(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ye(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tp{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new jS;switch(s.type){case"firstParty":return new HS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ye(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Xy.get(t);s&&(le("ComponentProvider","Removing Datastore"),Xy.delete(t),s.terminate())})(this),Promise.resolve()}}function Fk(r,e,t,s={}){var o;r=Vi(r,tp);const l=xs(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(ff(`https://${g}`),pf("Firestore",!0)),h.host!==Rw&&h.host!==g&&Oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!Di(v,f)&&(r._setSettings(v),s.mockUserToken)){let T,I;if(typeof s.mockUserToken=="string")T=s.mockUserToken,I=Kt.MOCK_USER;else{T=Y0(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const k=s.mockUserToken.sub||s.mockUserToken.user_id;if(!k)throw new ye(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Kt(k)}r._authCredentials=new zS(new y_(T,I))}}/**
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
 */class np{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new np(this.firestore,e,this._query)}}class Ct{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new il(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}toJSON(){return{type:Ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(cl(t,Ct._jsonSchema))return new Ct(e,s||null,new Ee(ot.fromString(t.referencePath)))}}Ct._jsonSchemaVersion="firestore/documentReference/1.0",Ct._jsonSchema={type:wt("string",Ct._jsonSchemaVersion),referencePath:wt("string")};class il extends np{constructor(e,t,s){super(e,t,bf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new Ee(e))}withConverter(e){return new il(this.firestore,e,this._path)}}function rf(r,e,...t){if(r=Et(r),arguments.length===1&&(e=Pf.newId()),QS("doc","path",e),r instanceof tp){const s=ot.fromString(e,...t);return fy(s),new Ct(r,null,new Ee(s))}{if(!(r instanceof Ct||r instanceof il))throw new ye(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ot.fromString(e,...t));return fy(s),new Ct(r.firestore,r instanceof il?r.converter:null,new Ee(s))}}/**
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
 */const ev="AsyncQueue";class tv{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new cw(this,"async_queue_retry"),this.oc=()=>{const s=Ad();s&&le(ev,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Ad();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ad();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new xi;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Bo(e))throw e;le(ev,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Qr("INTERNAL UNHANDLED ERROR: ",nv(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Yf.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&Ie(47125,{hc:nv(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function nv(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class ml extends tp{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new tv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tv(e),this._firestoreClient=void 0,await e}}}function Uk(r,e){const t=typeof r=="object"?r:yc(),s=typeof r=="string"?r:rc,o=zi(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=wv("firestore");l&&Fk(o,...l)}return o}function Pw(r){if(r._terminated)throw new ye(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||jk(r),r._firestoreClient}function jk(r){var e,t,s;const o=r._freezeSettings(),l=(function(f,g,v,T){return new aA(f,g,v,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,kw(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new Ok(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(zt.fromBase64String(e))}catch(t){throw new ye(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bn(zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:bn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cl(e,bn._jsonSchema))return bn.fromBase64String(e.bytes)}}bn._jsonSchemaVersion="firestore/bytes/1.0",bn._jsonSchema={type:wt("string",bn._jsonSchemaVersion),bytes:wt("string")};/**
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
 */class Oc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ye(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gl{constructor(e){this._methodName=e}}/**
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
 */class Sr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ye(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ye(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Sr._jsonSchemaVersion}}static fromJSON(e){if(cl(e,Sr._jsonSchema))return new Sr(e.latitude,e.longitude)}}Sr._jsonSchemaVersion="firestore/geoPoint/1.0",Sr._jsonSchema={type:wt("string",Sr._jsonSchemaVersion),latitude:wt("number"),longitude:wt("number")};/**
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
 */class Ar{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ar._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cl(e,Ar._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ar(e.vectorValues);throw new ye(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ar._jsonSchemaVersion="firestore/vectorValue/1.0",Ar._jsonSchema={type:wt("string",Ar._jsonSchemaVersion),vectorValues:wt("object")};/**
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
 */const zk=/^__.*__$/;class Bk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Wi(e,this.data,this.fieldMask,t,this.fieldTransforms):new hl(e,this.data,t,this.fieldTransforms)}}class Nw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Wi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{Ec:r})}}class rp{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return hc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(xw(this.Ec)&&zk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class $k{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Nc(e)}Dc(e,t,s,o=!1){return new rp({Ec:e,methodName:t,bc:s,path:jt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dw(r){const e=r._freezeSettings(),t=Nc(r._databaseId);return new $k(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Hk(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);op("Data must be an object, but it was:",h,s);const f=Ow(s,h);let g,v;if(l.merge)g=new Sn(h.fieldMask),v=h.fieldTransforms;else if(l.mergeFields){const T=[];for(const I of l.mergeFields){const k=sf(e,I,t);if(!h.contains(k))throw new ye(Q.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);Mw(T,k)||T.push(k)}g=new Sn(T),v=h.fieldTransforms.filter((I=>g.covers(I.field)))}else g=null,v=h.fieldTransforms;return new Bk(new dn(f),g,v)}class Vc extends gl{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vc}}class ip extends gl{_toFieldTransform(e){return new K_(e.path,new el)}isEqual(e){return e instanceof ip}}class sp extends gl{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new rl(e.serializer,B_(e.serializer,this.Cc));return new K_(e.path,t)}isEqual(e){return e instanceof sp&&this.Cc===e.Cc}}function Wk(r,e,t,s){const o=r.Dc(1,e,t);op("Data must be an object, but it was:",o,s);const l=[],h=dn.empty();Hi(s,((g,v)=>{const T=ap(e,g,t);v=Et(v);const I=o.gc(T);if(v instanceof Vc)l.push(T);else{const k=Mc(v,I);k!=null&&(l.push(T),h.set(T,k))}}));const f=new Sn(l);return new Nw(h,f,o.fieldTransforms)}function qk(r,e,t,s,o,l){const h=r.Dc(1,e,t),f=[sf(e,s,t)],g=[o];if(l.length%2!=0)throw new ye(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<l.length;k+=2)f.push(sf(e,l[k])),g.push(l[k+1]);const v=[],T=dn.empty();for(let k=f.length-1;k>=0;--k)if(!Mw(v,f[k])){const j=f[k];let W=g[k];W=Et(W);const X=h.gc(j);if(W instanceof Vc)v.push(j);else{const $=Mc(W,X);$!=null&&(v.push(j),T.set(j,$))}}const I=new Sn(v);return new Nw(T,I,h.fieldTransforms)}function Mc(r,e){if(Vw(r=Et(r)))return op("Unsupported field value:",e,r),Ow(r,e);if(r instanceof gl)return(function(s,o){if(!xw(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const f of s){let g=Mc(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=Et(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return B_(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Je.fromDate(s);return{timestampValue:ac(o.serializer,l)}}if(s instanceof Je){const l=new Je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ac(o.serializer,l)}}if(s instanceof Sr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof bn)return{bytesValue:Z_(o.serializer,s._byteString)};if(s instanceof Ct){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:zf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ar)return(function(h,f){return{mapValue:{fields:{[k_]:{stringValue:R_},[ic]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw f.wc("VectorValues must only contain numeric values.");return Lf(f.serializer,v)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Nf(s)}`)})(r,e)}function Ow(r,e){const t={};return E_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hi(r,((s,o)=>{const l=Mc(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Vw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Je||r instanceof Sr||r instanceof bn||r instanceof Ct||r instanceof gl||r instanceof Ar)}function op(r,e,t){if(!Vw(t)||!__(t)){const s=Nf(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function sf(r,e,t){if((e=Et(e))instanceof Oc)return e._internalPath;if(typeof e=="string")return ap(r,e);throw hc("Field path arguments must be of type string or ",r,!1,void 0,t)}const Kk=new RegExp("[~\\*/\\[\\]]");function ap(r,e,t){if(e.search(Kk)>=0)throw hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Oc(...e.split("."))._internalPath}catch{throw hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function hc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ye(Q.INVALID_ARGUMENT,f+r+g)}function Mw(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class bw{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Lw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Gk extends bw{data(){return super.data()}}function Lw(r,e){return typeof e=="string"?ap(r,e):e instanceof Oc?e._internalPath:e._delegate._internalPath}class Qk{convertValue(e,t="none"){switch(Fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Hi(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[ic].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>mt(h.doubleValue)));return new Ar(l)}convertGeoPoint(e){return new Sr(mt(e.latitude),mt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ic(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Xa(e));default:return null}}convertTimestamp(e){const t=bi(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ot.fromString(e);$e(sw(s),9688,{name:e});const o=new Ja(s.get(1),s.get(3)),l=new Ee(s.popFirst(5));return o.isEqual(t)||Qr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function Yk(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class Fa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ss extends bw{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Lw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ss._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ss._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ss._jsonSchema={type:wt("string",Ss._jsonSchemaVersion),bundleSource:wt("string","DocumentSnapshot"),bundleName:wt("string"),bundle:wt("string")};class Ku extends Ss{data(e={}){return super.data(e)}}class Wa{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Fa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ku(this._firestore,this._userDataWriter,s.key,s,new Fa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ye(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new Ku(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Fa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new Ku(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Fa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,T=-1;return f.type!==0&&(v=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),T=h.indexOf(f.doc.key)),{type:Xk(f.type),doc:g,oldIndex:v,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Xk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:r})}}/**
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
 */function Fw(r){r=Vi(r,Ct);const e=Vi(r.firestore,ml);return Lk(Pw(e),r._key).then((t=>eR(e,r,t)))}Wa._jsonSchemaVersion="firestore/querySnapshot/1.0",Wa._jsonSchema={type:wt("string",Wa._jsonSchemaVersion),bundleSource:wt("string","QuerySnapshot"),bundleName:wt("string"),bundle:wt("string")};class Jk extends Qk{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,t)}}function Uw(r,e,t){r=Vi(r,Ct);const s=Vi(r.firestore,ml),o=Yk(r.converter,e,t);return lp(s,[Hk(Dw(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,ir.none())])}function Zk(r,e,t,...s){r=Vi(r,Ct);const o=Vi(r.firestore,ml),l=Dw(o);let h;return h=typeof(e=Et(e))=="string"||e instanceof Oc?qk(l,"updateDoc",r._key,e,t,s):Wk(l,"updateDoc",r._key,e),lp(o,[h.toMutation(r._key,ir.exists(!0))])}function kd(r){return lp(Vi(r.firestore,ml),[new Ff(r._key,ir.none())])}function lp(r,e){return(function(s,o){const l=new xi;return s.asyncQueue.enqueueAndForget((async()=>Ik(await Mk(s),o,l))),l.promise})(Pw(r),e)}function eR(r,e,t){const s=t.docs.get(e._key),o=new Jk(r);return new Ss(r,o,e._key,s,new Fa(t.hasPendingWrites,t.fromCache),e.converter)}function of(){return new ip("serverTimestamp")}function tR(r){return new sp("increment",r)}(function(e,t=!0){(function(o){jo=o})(Fo),sr(new Ln("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new ml(new BS(s.getProvider("auth-internal")),new WS(h,s.getProvider("app-check-internal")),(function(v,T){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ye(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ja(v.options.projectId,T)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),fn(ly,uy,e),fn(ly,uy,"esm2017")})();/**
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
 */const jw="functions";/**
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
 */class nR{constructor(e,t,s,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,In(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||s.get().then(l=>this.messaging=l,()=>{}),this.appCheck||o==null||o.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),s=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:s,appCheckToken:o}}}/**
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
 */const af="us-central1";class rR{constructor(e,t,s,o,l=af,h=(...f)=>fetch(...f)){this.app=e,this.fetchImpl=h,this.emulatorOrigin=null,this.contextProvider=new nR(e,t,s,o),this.cancelAllRequests=new Promise(f=>{this.deleteService=()=>Promise.resolve(f())});try{const f=new URL(l);this.customDomain=f.origin+(f.pathname==="/"?"":f.pathname),this.region=af}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function iR(r,e,t){const s=xs(e);r.emulatorOrigin=`http${s?"s":""}://${e}:${t}`,s&&(ff(r.emulatorOrigin),pf("Functions",!0))}const rv="@firebase/functions",iv="0.12.9";/**
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
 */const sR="auth-internal",oR="app-check-internal",aR="messaging-internal";function lR(r){const e=(t,{instanceIdentifier:s})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider(sR),h=t.getProvider(aR),f=t.getProvider(oR);return new rR(o,l,h,f,s)};sr(new Ln(jw,e,"PUBLIC").setMultipleInstances(!0)),fn(rv,iv,r),fn(rv,iv,"esm2017")}/**
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
 */function uR(r=yc(),e=af){const s=zi(Et(r),jw).getImmediate({identifier:e}),o=wv("functions");return o&&cR(s,...o),s}function cR(r,e,t){iR(Et(r),e,t)}lR();const zw="@firebase/installations",up="0.6.18";/**
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
 */const Bw=1e4,$w=`w:${up}`,Hw="FIS_v2",hR="https://firebaseinstallations.googleapis.com/v1",dR=3600*1e3,fR="installations",pR="Installations";/**
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
 */const mR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ps=new Ds(fR,pR,mR);function Ww(r){return r instanceof ar&&r.code.includes("request-failed")}/**
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
 */function qw({projectId:r}){return`${hR}/projects/${r}/installations`}function Kw(r){return{token:r.token,requestStatus:2,expiresIn:yR(r.expiresIn),creationTime:Date.now()}}async function Gw(r,e){const s=(await e.json()).error;return Ps.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Qw({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function gR(r,{refreshToken:e}){const t=Qw(r);return t.append("Authorization",vR(e)),t}async function Yw(r){const e=await r();return e.status>=500&&e.status<600?r():e}function yR(r){return Number(r.replace("s","000"))}function vR(r){return`${Hw} ${r}`}/**
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
 */async function _R({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=qw(r),o=Qw(r),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const h={fid:t,authVersion:Hw,appId:r.appId,sdkVersion:$w},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await Yw(()=>fetch(s,f));if(g.ok){const v=await g.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:Kw(v.authToken)}}else throw await Gw("Create Installation",g)}/**
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
 */function Xw(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function wR(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ER=/^[cdef][\w-]{21}$/,lf="";function TR(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=IR(r);return ER.test(t)?t:lf}catch{return lf}}function IR(r){return wR(r).substr(0,22)}/**
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
 */function bc(r){return`${r.appName}!${r.appId}`}/**
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
 */const Jw=new Map;function Zw(r,e){const t=bc(r);eE(t,e),SR(t,e)}function eE(r,e){const t=Jw.get(r);if(t)for(const s of t)s(e)}function SR(r,e){const t=AR();t&&t.postMessage({key:r,fid:e}),CR()}let Is=null;function AR(){return!Is&&"BroadcastChannel"in self&&(Is=new BroadcastChannel("[Firebase] FID Change"),Is.onmessage=r=>{eE(r.data.key,r.data.fid)}),Is}function CR(){Jw.size===0&&Is&&(Is.close(),Is=null)}/**
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
 */const kR="firebase-installations-database",RR=1,Ns="firebase-installations-store";let Rd=null;function cp(){return Rd||(Rd=Cv(kR,RR,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Ns)}}})),Rd}async function dc(r,e){const t=bc(r),o=(await cp()).transaction(Ns,"readwrite"),l=o.objectStore(Ns),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&Zw(r,e.fid),e}async function tE(r){const e=bc(r),s=(await cp()).transaction(Ns,"readwrite");await s.objectStore(Ns).delete(e),await s.done}async function Lc(r,e){const t=bc(r),o=(await cp()).transaction(Ns,"readwrite"),l=o.objectStore(Ns),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&Zw(r,f.fid),f}/**
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
 */async function hp(r){let e;const t=await Lc(r.appConfig,s=>{const o=PR(s),l=NR(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===lf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function PR(r){const e=r||{fid:TR(),registrationStatus:0};return nE(e)}function NR(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ps.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=xR(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:DR(r)}:{installationEntry:e}}async function xR(r,e){try{const t=await _R(r,e);return dc(r.appConfig,t)}catch(t){throw Ww(t)&&t.customData.serverCode===409?await tE(r.appConfig):await dc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function DR(r){let e=await sv(r.appConfig);for(;e.registrationStatus===1;)await Xw(100),e=await sv(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await hp(r);return s||t}return e}function sv(r){return Lc(r,e=>{if(!e)throw Ps.create("installation-not-found");return nE(e)})}function nE(r){return OR(r)?{fid:r.fid,registrationStatus:0}:r}function OR(r){return r.registrationStatus===1&&r.registrationTime+Bw<Date.now()}/**
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
 */async function VR({appConfig:r,heartbeatServiceProvider:e},t){const s=MR(r,t),o=gR(r,t),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const h={installation:{sdkVersion:$w,appId:r.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await Yw(()=>fetch(s,f));if(g.ok){const v=await g.json();return Kw(v)}else throw await Gw("Generate Auth Token",g)}function MR(r,{fid:e}){return`${qw(r)}/${e}/authTokens:generate`}/**
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
 */async function dp(r,e=!1){let t;const s=await Lc(r.appConfig,l=>{if(!rE(l))throw Ps.create("not-registered");const h=l.authToken;if(!e&&FR(h))return l;if(h.requestStatus===1)return t=bR(r,e),l;{if(!navigator.onLine)throw Ps.create("app-offline");const f=jR(l);return t=LR(r,f),f}});return t?await t:s.authToken}async function bR(r,e){let t=await ov(r.appConfig);for(;t.authToken.requestStatus===1;)await Xw(100),t=await ov(r.appConfig);const s=t.authToken;return s.requestStatus===0?dp(r,e):s}function ov(r){return Lc(r,e=>{if(!rE(e))throw Ps.create("not-registered");const t=e.authToken;return zR(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function LR(r,e){try{const t=await VR(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await dc(r.appConfig,s),t}catch(t){if(Ww(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await tE(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await dc(r.appConfig,s)}throw t}}function rE(r){return r!==void 0&&r.registrationStatus===2}function FR(r){return r.requestStatus===2&&!UR(r)}function UR(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+dR}function jR(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function zR(r){return r.requestStatus===1&&r.requestTime+Bw<Date.now()}/**
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
 */async function BR(r){const e=r,{installationEntry:t,registrationPromise:s}=await hp(e);return s?s.catch(console.error):dp(e).catch(console.error),t.fid}/**
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
 */async function $R(r,e=!1){const t=r;return await HR(t),(await dp(t,e)).token}async function HR(r){const{registrationPromise:e}=await hp(r);e&&await e}/**
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
 */function WR(r){if(!r||!r.options)throw Pd("App Configuration");if(!r.name)throw Pd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Pd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Pd(r){return Ps.create("missing-app-config-values",{valueName:r})}/**
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
 */const iE="installations",qR="installations-internal",KR=r=>{const e=r.getProvider("app").getImmediate(),t=WR(e),s=zi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},GR=r=>{const e=r.getProvider("app").getImmediate(),t=zi(e,iE).getImmediate();return{getId:()=>BR(t),getToken:o=>$R(t,o)}};function QR(){sr(new Ln(iE,KR,"PUBLIC")),sr(new Ln(qR,GR,"PRIVATE"))}QR();fn(zw,up);fn(zw,up,"esm2017");/**
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
 */const fc="analytics",YR="firebase_id",XR="origin",JR=60*1e3,ZR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fp="https://www.googletagmanager.com/gtag/js";/**
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
 */const pn=new gc("@firebase/analytics");/**
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
 */const eP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},An=new Ds("analytics","Analytics",eP);/**
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
 */function tP(r){if(!r.startsWith(fp)){const e=An.create("invalid-gtag-resource",{gtagURL:r});return pn.warn(e.message),""}return r}function sE(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function nP(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function rP(r,e){const t=nP("firebase-js-sdk-policy",{createScriptURL:tP}),s=document.createElement("script"),o=`${fp}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function iP(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function sP(r,e,t,s,o,l){const h=s[o];try{if(h)await e[h];else{const g=(await sE(t)).find(v=>v.measurementId===o);g&&await e[g.appId]}}catch(f){pn.error(f)}r("config",o,l)}async function oP(r,e,t,s,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await sE(t);for(const g of h){const v=f.find(I=>I.measurementId===g),T=v&&e[v.appId];if(T)l.push(T);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",s,o||{})}catch(l){pn.error(l)}}function aP(r,e,t,s){async function o(l,...h){try{if(l==="event"){const[f,g]=h;await oP(r,e,t,f,g)}else if(l==="config"){const[f,g]=h;await sP(r,e,t,s,f,g)}else if(l==="consent"){const[f,g]=h;r("consent",f,g)}else if(l==="get"){const[f,g,v]=h;r("get",f,g,v)}else if(l==="set"){const[f]=h;r("set",f)}else r(l,...h)}catch(f){pn.error(f)}}return o}function lP(r,e,t,s,o){let l=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=aP(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function uP(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(fp)&&t.src.includes(r))return t;return null}/**
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
 */const cP=30,hP=1e3;class dP{constructor(e={},t=hP){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const oE=new dP;function fP(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function pP(r){var e;const{appId:t,apiKey:s}=r,o={method:"GET",headers:fP(s)},l=ZR.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let f="";try{const g=await h.json();!((e=g.error)===null||e===void 0)&&e.message&&(f=g.error.message)}catch{}throw An.create("config-fetch-failed",{httpStatus:h.status,responseMessage:f})}return h.json()}async function mP(r,e=oE,t){const{appId:s,apiKey:o,measurementId:l}=r.options;if(!s)throw An.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw An.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new vP;return setTimeout(async()=>{f.abort()},JR),aE({appId:s,apiKey:o,measurementId:l},h,f,e)}async function aE(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=oE){var l;const{appId:h,measurementId:f}=r;try{await gP(s,e)}catch(g){if(f)return pn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:f};throw g}try{const g=await pP(r);return o.deleteThrottleMetadata(h),g}catch(g){const v=g;if(!yP(v)){if(o.deleteThrottleMetadata(h),f)return pn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${v==null?void 0:v.message}]`),{appId:h,measurementId:f};throw g}const T=Number((l=v==null?void 0:v.customData)===null||l===void 0?void 0:l.httpStatus)===503?Og(t,o.intervalMillis,cP):Og(t,o.intervalMillis),I={throttleEndTimeMillis:Date.now()+T,backoffCount:t+1};return o.setThrottleMetadata(h,I),pn.debug(`Calling attemptFetch again in ${T} millis`),aE(r,I,s,o)}}function gP(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),s(An.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function yP(r){if(!(r instanceof ar)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class vP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function _P(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const l=await e,h=Object.assign(Object.assign({},s),{send_to:l});r("event",t,h)}}/**
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
 */async function wP(){if(gf())try{await yf()}catch(r){return pn.warn(An.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return pn.warn(An.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function EP(r,e,t,s,o,l,h){var f;const g=mP(r);g.then(j=>{t[j.measurementId]=j.appId,r.options.measurementId&&j.measurementId!==r.options.measurementId&&pn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${j.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(j=>pn.error(j)),e.push(g);const v=wP().then(j=>{if(j)return s.getId()}),[T,I]=await Promise.all([g,v]);uP(l)||rP(l,T.measurementId),o("js",new Date);const k=(f=h==null?void 0:h.config)!==null&&f!==void 0?f:{};return k[XR]="firebase",k.update=!0,I!=null&&(k[YR]=I),o("config",T.measurementId,k),T.measurementId}/**
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
 */class TP{constructor(e){this.app=e}_delete(){return delete qa[this.app.options.appId],Promise.resolve()}}let qa={},av=[];const lv={};let Nd="dataLayer",IP="gtag",uv,lE,cv=!1;function SP(){const r=[];if(mf()&&r.push("This is a browser extension environment."),Iv()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=An.create("invalid-analytics-context",{errorInfo:e});pn.warn(t.message)}}function AP(r,e,t){SP();const s=r.options.appId;if(!s)throw An.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)pn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw An.create("no-api-key");if(qa[s]!=null)throw An.create("already-exists",{id:s});if(!cv){iP(Nd);const{wrappedGtag:l,gtagCore:h}=lP(qa,av,lv,Nd,IP);lE=l,uv=h,cv=!0}return qa[s]=EP(r,av,lv,e,uv,Nd,t),new TP(r)}function CP(r=yc()){r=Et(r);const e=zi(r,fc);return e.isInitialized()?e.getImmediate():kP(r)}function kP(r,e={}){const t=zi(r,fc);if(t.isInitialized()){const o=t.getImmediate();if(Di(e,t.getOptions()))return o;throw An.create("already-initialized")}return t.initialize({options:e})}async function RP(){if(mf()||!Iv()||!gf())return!1;try{return await yf()}catch{return!1}}function PP(r,e,t,s){r=Et(r),_P(lE,qa[r.app.options.appId],e,t,s).catch(o=>pn.error(o))}const hv="@firebase/analytics",dv="0.10.17";function NP(){sr(new Ln(fc,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return AP(s,o,t)},"PUBLIC")),sr(new Ln("analytics-internal",r,"PRIVATE")),fn(hv,dv),fn(hv,dv,"esm2017");function r(e){try{const t=e.getProvider(fc).getImmediate();return{logEvent:(s,o,l)=>PP(t,s,o,l)}}catch(t){throw An.create("interop-component-reg-failed",{reason:t})}}}NP();const xP={apiKey:"AIzaSyCq6qS6nyYuWH-yLoFOjnrdiSZAyH3ei0U",authDomain:"time-based---otp-authenticator.firebaseapp.com",projectId:"time-based---otp-authenticator",storageBucket:"time-based---otp-authenticator.firebasestorage.app",messagingSenderId:"177998085204",appId:"1:177998085204:web:a112e912c3b3ca018581c1",measurementId:"G-2K9VC5SCXR"},Fc=kv(xP),pc=bS(Fc),uf=Uk(Fc);uR(Fc);typeof window<"u"&&RP().then(r=>{r&&CP(Fc)}).catch(r=>{console.debug("Analytics not supported in this environment:",r)});const fv=120*1e3,pv=30*1e3;async function DP(r,e){try{const s=await(await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:`Your Verification Code: ${e}`,_template:"box",_captcha:"false",Verification_Code:e,Expires_In:"2 Minutes",Instructions:"Use this 6-digit code to complete your login. It will expire in exactly 2 minutes. If you did not request this, you can ignore this email."})})).json();return console.log("[Email Dispatch Status]:",s),s}catch(t){return console.error("[Email Dispatch Network Error]:",t),{success:"false",message:t.message}}}async function uE(r){const e=r.trim().toLowerCase(),t=rf(uf,"otps",e),s=await Fw(t);if(s.exists()){const g=s.data();if(g.createdAt&&g.createdAt.toMillis){const v=Date.now()-g.createdAt.toMillis();if(v<pv){const T=Math.ceil((pv-v)/1e3);throw new Error(`Please wait ${T} seconds before requesting a new code.`)}}}const l=Math.floor(1e5+Math.random()*9e5).toString(),h=Date.now(),f=Je.fromMillis(h+fv);return await Uw(t,{email:e,otp:l,createdAt:of(),expiresAt:f,attempts:0,maxAttempts:5}),DP(e,l).catch(g=>console.warn("[Background Email Dispatch Notice]:",g)),{success:!0,expiresInMs:fv,message:"Verification code sent to your email inbox."}}async function OP(r,e){var k;const t=r.trim().toLowerCase(),s=e.trim(),o=rf(uf,"otps",t),l=await Fw(o);if(!l.exists())throw new Error("No active verification code found for this email. Please request a new code.");const h=l.data(),f=Date.now(),g=(k=h.expiresAt)!=null&&k.toMillis?h.expiresAt.toMillis():0;if(f>g)throw await kd(o),new Error("This verification code has expired (2 minutes limit). Please request a new code.");if(h.attempts>=(h.maxAttempts||5))throw await kd(o),new Error("Too many incorrect attempts. This OTP has been invalidated for security. Please request a new code.");if(h.otp!==s){await Zk(o,{attempts:tR(1)});const j=(h.maxAttempts||5)-(h.attempts+1);throw new Error(`Incorrect verification code. ${j>0?j+" attempt(s) remaining.":"Code invalidated."}`)}await kd(o);const v=`OTP_${btoa(t).replace(/[^a-zA-Z0-9]/g,"").slice(0,10)}#Auth2026!`;let T;try{T=await E1(pc,t,v)}catch(j){if(j.code==="auth/user-not-found"||j.code==="auth/invalid-credential"||j.code==="auth/wrong-password")try{T=await w1(pc,t,v)}catch(W){throw W.code==="auth/email-already-in-use"?new Error("Account exists with a different password. Please reset or contact admin."):W}else throw j}const I=T.user;try{const j=rf(uf,"users",I.uid);await Uw(j,{email:t,lastLoginAt:of(),createdAt:of()},{merge:!0})}catch(j){console.warn("Firestore user profile sync notice:",j.message)}return{success:!0,user:I}}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=r=>r==null?void 0:r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function MP(r,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:VP(r),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=r=>{let e="",t=!1;for(const s of r){if(s==="-"||s==="_"||s<=" "){t=e.length>0;continue}e.length===0?e+=s.toLowerCase():e+=t?s.toUpperCase():s,t=!1}return e};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=r=>{const e=bP(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function xd(r){return r!=null}function FP(r,e={}){var k,j;const t=e.attributeNames??{},s=W=>t[W]??W,o=r.size??r.width??ws.width,l=r.size??r.height??ws.height,h=((k=r.aliases)==null?void 0:k.filter(W=>typeof W=="string"&&W.trim()!=="").map(W=>`lucide-${W}`))??[],f=[...r.name?[`lucide-${r.name}`]:[],...h],g=((j=e.className)==null?void 0:j.split(" ").filter(Boolean))??[],v=e.includeDefaultClasses===!1?cf(...g):cf("lucide",...f,...g),T=e.absoluteStrokeWidth?Number(e.strokeWidth??ws["stroke-width"])*Number(r.size??r.width??ws.width)/Number(e.size??e.width??ws.width):e.strokeWidth??ws["stroke-width"];return["svg",{...Object.entries(ws).reduce((W,[X,$])=>(W[s(X)]=$,W),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&xd(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&xd(e.width)&&{[s("width")]:e.width},..."height"in e&&xd(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:T,...v&&{[s("class")]:v},[s("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},r.node.map(W=>{const[X,$,me]=W,fe=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...$}:$;return me?[X,fe,me]:[X,fe]})]}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function UP(r,e={}){return FP(r,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},zP=qe.createContext({}),BP=()=>qe.useContext(zP),$P=qe.forwardRef(({color:r,size:e,width:t,height:s,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:h,className:f="",children:g,iconNode:v=[],icon:T={node:v,aliases:[],size:24},...I},k)=>{const{size:j=24,strokeWidth:W=2,absoluteStrokeWidth:X=!1,nonScalingStroke:$=!1,color:me="currentColor",className:fe=""}=BP()??{},ce=!!g||jP(I),[Se,Me,ke=[]]=UP(T,{color:r??me,width:t??e??j,height:s??e??j,strokeWidth:o??W,absoluteStrokeWidth:l??X,nonScalingStroke:h??$,className:cf(fe,f),hasA11yProp:ce,attributes:I});return qe.createElement(Se,{ref:k,...Me},[...ke.map(([O,S])=>qe.createElement(O,S)),...Array.isArray(g)?g:[g]])});/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function mn(r,e=[],t=[]){const s=typeof r=="string"?MP(r,e,t):r,o=qe.forwardRef(({className:l,...h},f)=>qe.createElement($P,{ref:f,icon:s,className:l,...h}));return s.name&&(o.displayName=LP(s.name)),o}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};cE.node;const HP=mn(cE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};hE.node;const WP=mn(hE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};dE.node;const qP=mn(dE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};fE.node;const hf=mn(fE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};pE.node;const mE=mn(pE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};gE.node;const KP=mn(gE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE={name:"fingerprint-pattern",size:24,node:[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],aliases:["fingerprint"]};yE.node;const GP=mn(yE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE={name:"inbox",size:24,node:[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]};vE.node;const QP=mn(vE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E={name:"key-round",size:24,node:[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]};_E.node;const YP=mn(_E);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};wE.node;const XP=mn(wE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE={name:"mail-check",size:24,node:[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]};EE.node;const JP=mn(EE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};TE.node;const IE=mn(TE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE={name:"rotate-cw",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]};SE.node;const ZP=mn(SE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};AE.node;const CE=mn(AE);function e2({onOtpSent:r,initialEmail:e=""}){const[t,s]=qe.useState(e),[o,l]=qe.useState(!1),[h,f]=qe.useState(""),g=T=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(T.trim()),v=async T=>{T.preventDefault(),f("");const I=t.trim().toLowerCase();if(!I){f("Please enter your email address.");return}if(!g(I)){f("Please enter a valid email address format.");return}l(!0);try{const k=await uE(I);k&&k.success?r({email:I,expiresInMs:k.expiresInMs||12e4}):f("Unable to send verification code. Please try again.")}catch(k){console.error("Error sending OTP:",k),f(k.message||"Failed to send OTP. Please try again.")}finally{l(!1)}};return q.jsxs("div",{className:"auth-card",id:"email-step-card",children:[q.jsxs("div",{className:"card-header",children:[q.jsx("div",{className:"brand-icon-wrapper","aria-hidden":"true",children:q.jsx(CE,{size:32})}),q.jsx("h1",{className:"card-title",children:"Sign In with OTP"}),q.jsx("p",{className:"card-subtitle",children:"Enter your email to receive a secure, time-based 6-digit verification code."})]}),h&&q.jsxs("div",{className:"alert-box alert-error",id:"email-error-alert",role:"alert",children:[q.jsx(hf,{size:18,style:{flexShrink:0,marginTop:"2px"}}),q.jsx("span",{children:h})]}),q.jsxs("form",{onSubmit:v,noValidate:!0,children:[q.jsxs("div",{className:"form-group",children:[q.jsx("label",{htmlFor:"email-input",className:"form-label",children:"Email Address"}),q.jsxs("div",{className:"input-wrapper",children:[q.jsx("span",{className:"input-icon",children:q.jsx(IE,{size:18})}),q.jsx("input",{id:"email-input",type:"email",className:"form-input",placeholder:"name@company.com",value:t,onChange:T=>{s(T.target.value),h&&f("")},disabled:o,autoFocus:!0,autoComplete:"email",required:!0})]})]}),q.jsx("button",{id:"send-otp-btn",type:"submit",className:"btn-primary",disabled:o||!t.trim(),children:o?q.jsxs(q.Fragment,{children:[q.jsx("span",{className:"spinner","aria-hidden":"true"}),q.jsx("span",{children:"Generating & Sending Code..."})]}):q.jsxs(q.Fragment,{children:[q.jsx("span",{children:"Send Verification Code"}),q.jsx(WP,{size:18})]})})]})]})}var pp={};(function r(e,t,s,o){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),h=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),w=N.getContext("2d");w.fillRect(0,0,1,1);var D=N.transferToImageBitmap();w.createPattern(D,"no-repeat")}catch{return!1}return!0})();function g(){}function v(N){var w=t.exports.Promise,D=w!==void 0?w:e.Promise;return typeof D=="function"?new D(N):(N(g,g),null)}var T=(function(N,w){return{transform:function(D){if(N)return D;if(w.has(D))return w.get(D);var H=new OffscreenCanvas(D.width,D.height),ee=H.getContext("2d");return ee.drawImage(D,0,0),w.set(D,H),H},clear:function(){w.clear()}}})(f,new Map),I=(function(){var N=Math.floor(16.666666666666668),w,D,H={},ee=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(te){var se=Math.random();return H[se]=requestAnimationFrame(function ie(oe){ee===oe||ee+N-1<oe?(ee=oe,delete H[se],te()):H[se]=requestAnimationFrame(ie)}),se},D=function(te){H[te]&&cancelAnimationFrame(H[te])}):(w=function(te){return setTimeout(te,N)},D=function(te){return clearTimeout(te)}),{frame:w,cancel:D}})(),k=(function(){var N,w,D={};function H(ee){function te(se,ie){ee.postMessage({options:se||{},callback:ie})}ee.init=function(ie){var oe=ie.transferControlToOffscreen();ee.postMessage({canvas:oe},[oe])},ee.fire=function(ie,oe,ve){if(w)return te(ie,null),w;var Pe=Math.random().toString(36).slice(2);return w=v(function(be){function He(Qe){Qe.data.callback===Pe&&(delete D[Pe],ee.removeEventListener("message",He),w=null,T.clear(),ve(),be())}ee.addEventListener("message",He),te(ie,Pe),D[Pe]=He.bind(null,{data:{callback:Pe}})}),w},ee.reset=function(){ee.postMessage({reset:!0});for(var ie in D)D[ie](),delete D[ie]}}return function(){if(N)return N;if(!s&&l){var ee=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([ee])))}catch(te){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",te),null}H(N)}return N}})(),j={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function W(N,w){return w?w(N):N}function X(N){return N!=null}function $(N,w,D){return W(N&&X(N[w])?N[w]:j[w],D)}function me(N){return N<0?0:Math.floor(N)}function fe(N,w){return Math.floor(Math.random()*(w-N))+N}function ce(N){return parseInt(N,16)}function Se(N){return N.map(Me)}function Me(N){var w=String(N).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:ce(w.substring(0,2)),g:ce(w.substring(2,4)),b:ce(w.substring(4,6))}}function ke(N){var w=$(N,"origin",Object);return w.x=$(w,"x",Number),w.y=$(w,"y",Number),w}function O(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function S(N){var w=N.getBoundingClientRect();N.width=w.width,N.height=w.height}function R(N){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=N,w}function x(N,w,D,H,ee,te,se,ie,oe){N.save(),N.translate(w,D),N.rotate(te),N.scale(H,ee),N.arc(0,0,1,se,ie,oe),N.restore()}function M(N){var w=N.angle*(Math.PI/180),D=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-w+(.5*D-Math.random()*D),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function b(N,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var D=w.tick++/w.totalTicks,H=w.x+w.random*w.tiltCos,ee=w.y+w.random*w.tiltSin,te=w.wobbleX+w.random*w.tiltCos,se=w.wobbleY+w.random*w.tiltSin;if(N.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-D)+")",N.beginPath(),h&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))N.fill(ze(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(te-H)*.1,Math.abs(se-ee)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var ie=Math.PI/10*w.wobble,oe=Math.abs(te-H)*.1,ve=Math.abs(se-ee)*.1,Pe=w.shape.bitmap.width*w.scalar,be=w.shape.bitmap.height*w.scalar,He=new DOMMatrix([Math.cos(ie)*oe,Math.sin(ie)*oe,-Math.sin(ie)*ve,Math.cos(ie)*ve,w.x,w.y]);He.multiplySelf(new DOMMatrix(w.shape.matrix));var Qe=N.createPattern(T.transform(w.shape.bitmap),"no-repeat");Qe.setTransform(He),N.globalAlpha=1-D,N.fillStyle=Qe,N.fillRect(w.x-Pe/2,w.y-be/2,Pe,be),N.globalAlpha=1}else if(w.shape==="circle")N.ellipse?N.ellipse(w.x,w.y,Math.abs(te-H)*w.ovalScalar,Math.abs(se-ee)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):x(N,w.x,w.y,Math.abs(te-H)*w.ovalScalar,Math.abs(se-ee)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var Ne=Math.PI/2*3,ht=4*w.scalar,Ot=8*w.scalar,Vt=w.x,en=w.y,tn=5,gt=Math.PI/tn;tn--;)Vt=w.x+Math.cos(Ne)*Ot,en=w.y+Math.sin(Ne)*Ot,N.lineTo(Vt,en),Ne+=gt,Vt=w.x+Math.cos(Ne)*ht,en=w.y+Math.sin(Ne)*ht,N.lineTo(Vt,en),Ne+=gt;else N.moveTo(Math.floor(w.x),Math.floor(w.y)),N.lineTo(Math.floor(w.wobbleX),Math.floor(ee)),N.lineTo(Math.floor(te),Math.floor(se)),N.lineTo(Math.floor(H),Math.floor(w.wobbleY));return N.closePath(),N.fill(),w.tick<w.totalTicks}function C(N,w,D,H,ee){var te=w.slice(),se=N.getContext("2d"),ie,oe,ve=v(function(Pe){function be(){ie=oe=null,se.clearRect(0,0,H.width,H.height),T.clear(),ee(),Pe()}function He(){s&&!(H.width===o.width&&H.height===o.height)&&(H.width=N.width=o.width,H.height=N.height=o.height),!H.width&&!H.height&&(D(N),H.width=N.width,H.height=N.height),se.clearRect(0,0,H.width,H.height),te=te.filter(function(Qe){return b(se,Qe)}),te.length?ie=I.frame(He):be()}ie=I.frame(He),oe=be});return{addFettis:function(Pe){return te=te.concat(Pe),ve},canvas:N,promise:ve,reset:function(){ie&&I.cancel(ie),oe&&oe()}}}function Ke(N,w){var D=!N,H=!!$(w||{},"resize"),ee=!1,te=$(w,"disableForReducedMotion",Boolean),se=l&&!!$(w||{},"useWorker"),ie=se?k():null,oe=D?O:S,ve=N&&ie?!!N.__confetti_initialized:!1,Pe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,be;function He(Ne,ht,Ot){for(var Vt=$(Ne,"particleCount",me),en=$(Ne,"angle",Number),tn=$(Ne,"spread",Number),gt=$(Ne,"startVelocity",Number),Fn=$(Ne,"decay",Number),qi=$(Ne,"gravity",Number),Xr=$(Ne,"drift",Number),Rr=$(Ne,"colors",Se),Ki=$(Ne,"ticks",Number),lt=$(Ne,"shapes"),dt=$(Ne,"scalar"),Un=!!$(Ne,"flat"),Jr=ke(Ne),jn=Vt,zn=[],Pr=N.width*Jr.x,Gi=N.height*Jr.y;jn--;)zn.push(M({x:Pr,y:Gi,angle:en,spread:tn,startVelocity:gt,color:Rr[jn%Rr.length],shape:lt[fe(0,lt.length)],ticks:Ki,decay:Fn,gravity:qi,drift:Xr,scalar:dt,flat:Un}));return be?be.addFettis(zn):(be=C(N,zn,oe,ht,Ot),be.promise)}function Qe(Ne){var ht=te||$(Ne,"disableForReducedMotion",Boolean),Ot=$(Ne,"zIndex",Number);if(ht&&Pe)return v(function(gt){gt()});D&&be?N=be.canvas:D&&!N&&(N=R(Ot),document.body.appendChild(N)),H&&!ve&&oe(N);var Vt={width:N.width,height:N.height};ie&&!ve&&ie.init(N),ve=!0,ie&&(N.__confetti_initialized=!0);function en(){if(ie){var gt={getBoundingClientRect:function(){if(!D)return N.getBoundingClientRect()}};oe(gt),ie.postMessage({resize:{width:gt.width,height:gt.height}});return}Vt.width=Vt.height=null}function tn(){be=null,H&&(ee=!1,e.removeEventListener("resize",en)),D&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,ve=!1)}return H&&!ee&&(ee=!0,e.addEventListener("resize",en,!1)),ie?ie.fire(Ne,Vt,tn):He(Ne,Vt,tn)}return Qe.reset=function(){ie&&ie.reset(),be&&be.reset()},Qe}var tt;function ct(){return tt||(tt=Ke(null,{useWorker:!0,resize:!0})),tt}function ze(N,w,D,H,ee,te,se){var ie=new Path2D(N),oe=new Path2D;oe.addPath(ie,new DOMMatrix(w));var ve=new Path2D;return ve.addPath(oe,new DOMMatrix([Math.cos(se)*ee,Math.sin(se)*ee,-Math.sin(se)*te,Math.cos(se)*te,D,H])),ve}function re(N){if(!h)throw new Error("path confetti are not supported in this browser");var w,D;typeof N=="string"?w=N:(w=N.path,D=N.matrix);var H=new Path2D(w),ee=document.createElement("canvas"),te=ee.getContext("2d");if(!D){for(var se=1e3,ie=se,oe=se,ve=0,Pe=0,be,He,Qe=0;Qe<se;Qe+=2)for(var Ne=0;Ne<se;Ne+=2)te.isPointInPath(H,Qe,Ne,"nonzero")&&(ie=Math.min(ie,Qe),oe=Math.min(oe,Ne),ve=Math.max(ve,Qe),Pe=Math.max(Pe,Ne));be=ve-ie,He=Pe-oe;var ht=10,Ot=Math.min(ht/be,ht/He);D=[Ot,0,0,Ot,-Math.round(be/2+ie)*Ot,-Math.round(He/2+oe)*Ot]}return{type:"path",path:w,matrix:D}}function ge(N){var w,D=1,H="#000000",ee='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?w=N:(w=N.text,D="scalar"in N?N.scalar:D,ee="fontFamily"in N?N.fontFamily:ee,H="color"in N?N.color:H);var te=10*D,se=""+te+"px "+ee,ie=new OffscreenCanvas(te,te),oe=ie.getContext("2d");oe.font=se;var ve=oe.measureText(w),Pe=Math.ceil(ve.actualBoundingBoxRight+ve.actualBoundingBoxLeft),be=Math.ceil(ve.actualBoundingBoxAscent+ve.actualBoundingBoxDescent),He=2,Qe=ve.actualBoundingBoxLeft+He,Ne=ve.actualBoundingBoxAscent+He;Pe+=He+He,be+=He+He,ie=new OffscreenCanvas(Pe,be),oe=ie.getContext("2d"),oe.font=se,oe.fillStyle=H,oe.fillText(w,Qe,Ne);var ht=1/D;return{type:"bitmap",bitmap:ie.transferToImageBitmap(),matrix:[ht,0,0,ht,-Pe*ht/2,-be*ht/2]}}t.exports=function(){return ct().apply(this,arguments)},t.exports.reset=function(){ct().reset()},t.exports.create=Ke,t.exports.shapeFromPath=re,t.exports.shapeFromText=ge})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),pp,!1);const t2=pp.exports;pp.exports.create;function n2({email:r,expiresInMs:e=12e4,onBack:t,onVerified:s}){const[o,l]=qe.useState(["","","","","",""]),[h,f]=qe.useState(!1),[g,v]=qe.useState(!1),[T,I]=qe.useState(""),[k,j]=qe.useState(""),[W,X]=qe.useState(!1),$=Math.floor(e/1e3),[me,fe]=qe.useState($),[ce,Se]=qe.useState(!1),[Me,ke]=qe.useState(30),O=qe.useRef([]);qe.useEffect(()=>{if(me<=0){Se(!0);return}const w=setInterval(()=>{fe(D=>D<=1?(Se(!0),0):D-1)},1e3);return()=>clearInterval(w)},[me]),qe.useEffect(()=>{if(Me<=0)return;const w=setInterval(()=>{ke(D=>D>0?D-1:0)},1e3);return()=>clearInterval(w)},[Me]);const S=w=>{const D=Math.floor(w/60),H=w%60;return`${String(D).padStart(2,"0")}:${String(H).padStart(2,"0")}`},R=16,x=2*Math.PI*R,M=me/$,b=x-M*x,C=()=>ce||me<=20?"danger":me<=45?"warning":"normal",Ke=()=>ce||me<=20?"#ef4444":me<=45?"#f59e0b":"#6366f1",tt=()=>{X(!0),setTimeout(()=>X(!1),500)},ct=(w,D)=>{var se;if(ce)return;const H=D.replace(/\D/g,"");if(!H&&D!=="")return;const ee=[...o];ee[w]=H?H.slice(-1):"",l(ee),I(""),H&&w<5&&((se=O.current[w+1])==null||se.focus());const te=ee.join("");te.length===6&&ge(te)},ze=(w,D)=>{var H;D.key==="Backspace"&&!o[w]&&w>0&&((H=O.current[w-1])==null||H.focus())},re=w=>{var H,ee;if(ce)return;w.preventDefault();const D=w.clipboardData.getData("text").trim().replace(/\D/g,"");if(D.length>=6){const te=D.slice(0,6).split("");l(te),(H=O.current[5])==null||H.focus(),ge(te.join(""))}else if(D.length>0){const te=[...o];D.split("").forEach((ie,oe)=>{oe<6&&(te[oe]=ie)}),l(te);const se=Math.min(D.length,5);(ee=O.current[se])==null||ee.focus()}},ge=async w=>{const D=w||o.join("");if(D.length!==6){I("Please enter all 6 digits."),tt();return}if(ce){I('This OTP has expired (2 minutes limit). Please click "Resend Code" to get a fresh one.'),tt();return}f(!0),I("");try{const H=await OP(r,D);if(H&&H.success){try{t2({particleCount:85,spread:75,origin:{y:.6},colors:["#6366f1","#10b981","#f59e0b","#ec4899"]})}catch{}s(H.user)}}catch(H){console.error("Error verifying OTP:",H),I(H.message||"Invalid verification code. Please check your email and try again."),tt()}finally{f(!1)}},N=async()=>{var w;if(!(g||Me>0)){v(!0),I("");try{const D=await uE(r);D&&D.success&&(l(["","","","","",""]),fe(Math.floor((D.expiresInMs||12e4)/1e3)),Se(!1),ke(30),(w=O.current[0])==null||w.focus(),j("A fresh verification code has been dispatched to your email."))}catch(D){console.error("Resend error:",D),I(D.message||"Failed to resend code.")}finally{v(!1)}}};return q.jsxs("div",{className:"auth-card",id:"otp-step-card",children:[q.jsxs("div",{className:"card-header",children:[q.jsx("div",{className:"brand-icon-wrapper","aria-hidden":"true",children:q.jsx(YP,{size:32})}),q.jsx("h1",{className:"card-title",children:"Check Your Email"}),q.jsxs("p",{className:"card-subtitle",children:["We sent a 6-digit verification code to ",q.jsx("span",{className:"highlight-email",children:r})]})]}),q.jsxs("div",{className:"alert-box alert-info",id:"inbox-notice-banner",style:{background:"rgba(99, 102, 241, 0.1)",borderColor:"rgba(99, 102, 241, 0.25)",color:"#c7d2fe",alignItems:"center",gap:"10px"},children:[q.jsx(QP,{size:18,style:{color:"#818cf8",flexShrink:0}}),q.jsxs("span",{style:{fontSize:"13px"},children:["Verification code dispatched to ",q.jsx("strong",{children:r})," (check your inbox or spam folder)."]})]}),k&&q.jsxs("div",{className:"alert-box alert-success",id:"info-message-alert",style:{background:"rgba(16, 185, 129, 0.12)",borderColor:"rgba(16, 185, 129, 0.3)",color:"#6ee7b7",fontSize:"13px"},children:[q.jsx(JP,{size:16,style:{flexShrink:0}}),q.jsx("span",{children:k})]}),q.jsxs("div",{className:`timer-banner ${C()}`,id:"timer-banner",children:[q.jsxs("div",{className:"timer-left",children:[q.jsxs("div",{className:"timer-gauge-wrapper",children:[q.jsxs("svg",{width:"40",height:"40",className:"timer-gauge-svg",children:[q.jsx("circle",{cx:"20",cy:"20",r:R,fill:"none",strokeWidth:"3.5",className:"gauge-bg"}),q.jsx("circle",{cx:"20",cy:"20",r:R,fill:"none",strokeWidth:"3.5",stroke:Ke(),strokeDasharray:x,strokeDashoffset:b,strokeLinecap:"round",className:"gauge-progress"})]}),q.jsx(KP,{size:16,style:{position:"absolute",color:Ke()}})]}),q.jsxs("div",{className:"timer-info",children:[q.jsx("span",{className:"timer-title",children:"Time Remaining"}),q.jsx("span",{className:"timer-countdown",id:"countdown-display",children:S(me)})]})]}),q.jsx("div",{children:ce?q.jsxs("span",{className:"timer-status-badge badge-expired",id:"badge-expired",children:[q.jsx(hf,{size:13}),"Expired"]}):q.jsxs("span",{className:"timer-status-badge badge-active",id:"badge-active",children:[q.jsx("span",{className:"status-dot"}),"Valid (2 min)"]})})]}),T&&q.jsxs("div",{className:"alert-box alert-error",id:"otp-error-alert",role:"alert",children:[q.jsx(hf,{size:18,style:{flexShrink:0}}),q.jsx("span",{children:T})]}),q.jsx("div",{className:`otp-container ${W?"shake":""}`,onPaste:re,children:o.map((w,D)=>q.jsx("input",{ref:H=>O.current[D]=H,id:`otp-digit-${D}`,type:"text",inputMode:"numeric",maxLength:1,className:`otp-box ${w?"filled":""} ${T?"error":""}`,value:w,onChange:H=>ct(D,H.target.value),onKeyDown:H=>ze(D,H),disabled:h||ce,autoFocus:D===0,"aria-label":`Digit ${D+1}`},D))}),q.jsx("button",{id:"verify-otp-btn",type:"button",className:"btn-primary",onClick:()=>ge(),disabled:h||ce||o.join("").length!==6,children:h?q.jsxs(q.Fragment,{children:[q.jsx("span",{className:"spinner","aria-hidden":"true"}),q.jsx("span",{children:"Verifying with Firestore & Auth..."})]}):q.jsxs(q.Fragment,{children:[q.jsx(mE,{size:18}),q.jsx("span",{children:"Verify & Sign In"})]})}),q.jsxs("div",{className:"resend-row",children:[q.jsxs("button",{id:"back-to-email-btn",type:"button",className:"btn-back",onClick:t,disabled:h,children:[q.jsx(HP,{size:16}),q.jsx("span",{children:"Change Email"})]}),q.jsxs("button",{id:"resend-otp-btn",type:"button",className:"btn-text",onClick:N,disabled:g||!ce&&Me>0,children:[q.jsx(ZP,{size:15,className:g?"spinner":""}),q.jsx("span",{children:g?"Sending...":Me>0&&!ce?`Resend in ${Me}s`:"Resend OTP"})]})]})]})}function r2({user:r}){var s;const e=async()=>{try{await A1(pc)}catch(o){console.error("Error signing out:",o)}},t=(s=r==null?void 0:r.metadata)!=null&&s.creationTime?new Date(r.metadata.creationTime).toLocaleString():new Date().toLocaleTimeString();return q.jsxs("div",{className:"auth-card dashboard-card",id:"success-dashboard-card",children:[q.jsx("div",{className:"success-badge-icon","aria-hidden":"true",children:q.jsx(mE,{size:40})}),q.jsx("h1",{className:"card-title",children:"Successfully Authenticated!"}),q.jsx("p",{className:"card-subtitle",children:"Your email has been verified and you are now signed in with Firebase Authentication."}),q.jsxs("div",{className:"user-profile-box",id:"user-profile-box",children:[q.jsxs("div",{className:"profile-row",children:[q.jsxs("span",{className:"profile-label",children:[q.jsx(IE,{size:16}),"Email Address"]}),q.jsx("span",{className:"profile-value",id:"profile-email",children:(r==null?void 0:r.email)||"Authenticated User"})]}),q.jsxs("div",{className:"profile-row",children:[q.jsxs("span",{className:"profile-label",children:[q.jsx(GP,{size:16}),"User UID"]}),q.jsx("span",{className:"profile-value",id:"profile-uid",style:{fontSize:"12px",maxWidth:"180px",overflow:"hidden",textOverflow:"ellipsis"},title:r==null?void 0:r.uid,children:r==null?void 0:r.uid})]}),q.jsxs("div",{className:"profile-row",children:[q.jsxs("span",{className:"profile-label",children:[q.jsx(CE,{size:16}),"Auth Method"]}),q.jsxs("span",{className:"status-pill",id:"profile-auth-method",children:[q.jsx("span",{className:"status-dot"}),"Time-Based OTP (Verified)"]})]}),q.jsxs("div",{className:"profile-row",children:[q.jsxs("span",{className:"profile-label",children:[q.jsx(qP,{size:16}),"Signed In At"]}),q.jsx("span",{className:"profile-value",style:{fontSize:"12.5px"},children:t})]})]}),q.jsxs("button",{id:"logout-btn",type:"button",className:"btn-secondary",onClick:e,children:[q.jsx(XP,{size:16}),q.jsx("span",{children:"Log Out"})]})]})}function i2(){const[r,e]=qe.useState(null),[t,s]=qe.useState(!0),[o,l]=qe.useState("email"),[h,f]=qe.useState({email:"",expiresInMs:12e4});qe.useEffect(()=>{const I=S1(pc,k=>{e(k),s(!1)});return()=>I()},[]);const g=I=>{f(I),l("otp")},v=()=>{l("email")},T=I=>{I&&e(I)};return q.jsxs("main",{className:"app-container",children:[q.jsx("div",{className:"ambient-glow glow-1","aria-hidden":"true"}),q.jsx("div",{className:"ambient-glow glow-2","aria-hidden":"true"}),q.jsx("div",{className:"ambient-glow glow-3","aria-hidden":"true"}),q.jsx("div",{className:"grid-overlay","aria-hidden":"true"}),q.jsx("div",{className:"auth-wrapper",children:t?q.jsxs("div",{className:"auth-card",style:{textAlign:"center",padding:"60px 20px"},children:[q.jsx("div",{className:"spinner",style:{width:"32px",height:"32px",margin:"0 auto 16px"}}),q.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px"},children:"Loading session..."})]}):r?q.jsx(r2,{user:r}):o==="email"?q.jsx(e2,{onOtpSent:g,initialEmail:h.email}):q.jsx(n2,{email:h.email,expiresInMs:h.expiresInMs,onBack:v,onVerified:T})})]})}j0.createRoot(document.getElementById("root")).render(q.jsx(O0.StrictMode,{children:q.jsx(i2,{})}));
