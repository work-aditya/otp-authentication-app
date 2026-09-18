(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function d_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var cd={exports:{}},Na={},hd={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function p0(){if(_g)return Pe;_g=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function C(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,G={};function B(x,$,he){this.props=x,this.context=$,this.refs=G,this.updater=he||M}B.prototype.isReactComponent={},B.prototype.setState=function(x,$){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,$,"setState")},B.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function pe(){}pe.prototype=B.prototype;function le(x,$,he){this.props=x,this.context=$,this.refs=G,this.updater=he||M}var ue=le.prototype=new pe;ue.constructor=le,z(ue,B.prototype),ue.isPureReactComponent=!0;var Ee=Array.isArray,be=Object.prototype.hasOwnProperty,Se={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(x,$,he){var Ce,ke={},xe=null,Ue=null;if($!=null)for(Ce in $.ref!==void 0&&(Ue=$.ref),$.key!==void 0&&(xe=""+$.key),$)be.call($,Ce)&&!P.hasOwnProperty(Ce)&&(ke[Ce]=$[Ce]);var je=arguments.length-2;if(je===1)ke.children=he;else if(1<je){for(var We=Array(je),Et=0;Et<je;Et++)We[Et]=arguments[Et+2];ke.children=We}if(x&&x.defaultProps)for(Ce in je=x.defaultProps,je)ke[Ce]===void 0&&(ke[Ce]=je[Ce]);return{$$typeof:r,type:x,key:xe,ref:Ue,props:ke,_owner:Se.current}}function R(x,$){return{$$typeof:r,type:x.type,key:$,ref:x.ref,props:x.props,_owner:x._owner}}function N(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function O(x){var $={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(he){return $[he]})}var V=/\/+/g;function A(x,$){return typeof x=="object"&&x!==null&&x.key!=null?O(""+x.key):$.toString(36)}function Ze(x,$,he,Ce,ke){var xe=typeof x;(xe==="undefined"||xe==="boolean")&&(x=null);var Ue=!1;if(x===null)Ue=!0;else switch(xe){case"string":case"number":Ue=!0;break;case"object":switch(x.$$typeof){case r:case e:Ue=!0}}if(Ue)return Ue=x,ke=ke(Ue),x=Ce===""?"."+A(Ue,0):Ce,Ee(ke)?(he="",x!=null&&(he=x.replace(V,"$&/")+"/"),Ze(ke,$,he,"",function(Et){return Et})):ke!=null&&(N(ke)&&(ke=R(ke,he+(!ke.key||Ue&&Ue.key===ke.key?"":(""+ke.key).replace(V,"$&/")+"/")+x)),$.push(ke)),1;if(Ue=0,Ce=Ce===""?".":Ce+":",Ee(x))for(var je=0;je<x.length;je++){xe=x[je];var We=Ce+A(xe,je);Ue+=Ze(xe,$,he,We,ke)}else if(We=C(x),typeof We=="function")for(x=We.call(x),je=0;!(xe=x.next()).done;)xe=xe.value,We=Ce+A(xe,je++),Ue+=Ze(xe,$,he,We,ke);else if(xe==="object")throw $=String(x),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Ue}function Ae(x,$,he){if(x==null)return x;var Ce=[],ke=0;return Ze(x,Ce,"","",function(xe){return $.call(he,xe,ke++)}),Ce}function fe(x){if(x._status===-1){var $=x._result;$=$(),$.then(function(he){(x._status===0||x._status===-1)&&(x._status=1,x._result=he)},function(he){(x._status===0||x._status===-1)&&(x._status=2,x._result=he)}),x._status===-1&&(x._status=0,x._result=$)}if(x._status===1)return x._result.default;throw x._result}var de={current:null},X={transition:null},se={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:X,ReactCurrentOwner:Se};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Ae,forEach:function(x,$,he){Ae(x,function(){$.apply(this,arguments)},he)},count:function(x){var $=0;return Ae(x,function(){$++}),$},toArray:function(x){return Ae(x,function($){return $})||[]},only:function(x){if(!N(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Pe.Component=B,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=le,Pe.StrictMode=s,Pe.Suspense=g,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,Pe.act=ee,Pe.cloneElement=function(x,$,he){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Ce=z({},x.props),ke=x.key,xe=x.ref,Ue=x._owner;if($!=null){if($.ref!==void 0&&(xe=$.ref,Ue=Se.current),$.key!==void 0&&(ke=""+$.key),x.type&&x.type.defaultProps)var je=x.type.defaultProps;for(We in $)be.call($,We)&&!P.hasOwnProperty(We)&&(Ce[We]=$[We]===void 0&&je!==void 0?je[We]:$[We])}var We=arguments.length-2;if(We===1)Ce.children=he;else if(1<We){je=Array(We);for(var Et=0;Et<We;Et++)je[Et]=arguments[Et+2];Ce.children=je}return{$$typeof:r,type:x.type,key:ke,ref:xe,props:Ce,_owner:Ue}},Pe.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:l,_context:x},x.Consumer=x},Pe.createElement=I,Pe.createFactory=function(x){var $=I.bind(null,x);return $.type=x,$},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(x){return{$$typeof:f,render:x}},Pe.isValidElement=N,Pe.lazy=function(x){return{$$typeof:E,_payload:{_status:-1,_result:x},_init:fe}},Pe.memo=function(x,$){return{$$typeof:_,type:x,compare:$===void 0?null:$}},Pe.startTransition=function(x){var $=X.transition;X.transition={};try{x()}finally{X.transition=$}},Pe.unstable_act=ee,Pe.useCallback=function(x,$){return de.current.useCallback(x,$)},Pe.useContext=function(x){return de.current.useContext(x)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(x){return de.current.useDeferredValue(x)},Pe.useEffect=function(x,$){return de.current.useEffect(x,$)},Pe.useId=function(){return de.current.useId()},Pe.useImperativeHandle=function(x,$,he){return de.current.useImperativeHandle(x,$,he)},Pe.useInsertionEffect=function(x,$){return de.current.useInsertionEffect(x,$)},Pe.useLayoutEffect=function(x,$){return de.current.useLayoutEffect(x,$)},Pe.useMemo=function(x,$){return de.current.useMemo(x,$)},Pe.useReducer=function(x,$,he){return de.current.useReducer(x,$,he)},Pe.useRef=function(x){return de.current.useRef(x)},Pe.useState=function(x){return de.current.useState(x)},Pe.useSyncExternalStore=function(x,$,he){return de.current.useSyncExternalStore(x,$,he)},Pe.useTransition=function(){return de.current.useTransition()},Pe.version="18.3.1",Pe}var vg;function cf(){return vg||(vg=1,hd.exports=p0()),hd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function m0(){if(wg)return Na;wg=1;var r=cf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var E,S={},C=null,M=null;_!==void 0&&(C=""+_),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(M=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(S[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)S[E]===void 0&&(S[E]=g[E]);return{$$typeof:e,type:f,key:C,ref:M,props:S,_owner:o.current}}return Na.Fragment=t,Na.jsx=h,Na.jsxs=h,Na}var Eg;function g0(){return Eg||(Eg=1,cd.exports=m0()),cd.exports}var J=g0(),$e=cf();const y0=d_($e);var Nu={},dd={exports:{}},Zt={},fd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function _0(){return Tg||(Tg=1,(function(r){function e(X,se){var ee=X.length;X.push(se);e:for(;0<ee;){var x=ee-1>>>1,$=X[x];if(0<o($,se))X[x]=se,X[ee]=$,ee=x;else break e}}function t(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var se=X[0],ee=X.pop();if(ee!==se){X[0]=ee;e:for(var x=0,$=X.length,he=$>>>1;x<he;){var Ce=2*(x+1)-1,ke=X[Ce],xe=Ce+1,Ue=X[xe];if(0>o(ke,ee))xe<$&&0>o(Ue,ke)?(X[x]=Ue,X[xe]=ee,x=xe):(X[x]=ke,X[Ce]=ee,x=Ce);else if(xe<$&&0>o(Ue,ee))X[x]=Ue,X[xe]=ee,x=xe;else break e}}return se}function o(X,se){var ee=X.sortIndex-se.sortIndex;return ee!==0?ee:X.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],E=1,S=null,C=3,M=!1,z=!1,G=!1,B=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ue(X){for(var se=t(_);se!==null;){if(se.callback===null)s(_);else if(se.startTime<=X)s(_),se.sortIndex=se.expirationTime,e(g,se);else break;se=t(_)}}function Ee(X){if(G=!1,ue(X),!z)if(t(g)!==null)z=!0,fe(be);else{var se=t(_);se!==null&&de(Ee,se.startTime-X)}}function be(X,se){z=!1,G&&(G=!1,pe(I),I=-1),M=!0;var ee=C;try{for(ue(se),S=t(g);S!==null&&(!(S.expirationTime>se)||X&&!O());){var x=S.callback;if(typeof x=="function"){S.callback=null,C=S.priorityLevel;var $=x(S.expirationTime<=se);se=r.unstable_now(),typeof $=="function"?S.callback=$:S===t(g)&&s(g),ue(se)}else s(g);S=t(g)}if(S!==null)var he=!0;else{var Ce=t(_);Ce!==null&&de(Ee,Ce.startTime-se),he=!1}return he}finally{S=null,C=ee,M=!1}}var Se=!1,P=null,I=-1,R=5,N=-1;function O(){return!(r.unstable_now()-N<R)}function V(){if(P!==null){var X=r.unstable_now();N=X;var se=!0;try{se=P(!0,X)}finally{se?A():(Se=!1,P=null)}}else Se=!1}var A;if(typeof le=="function")A=function(){le(V)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Ae=Ze.port2;Ze.port1.onmessage=V,A=function(){Ae.postMessage(null)}}else A=function(){B(V,0)};function fe(X){P=X,Se||(Se=!0,A())}function de(X,se){I=B(function(){X(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){z||M||(z=!0,fe(be))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(X){switch(C){case 1:case 2:case 3:var se=3;break;default:se=C}var ee=C;C=se;try{return X()}finally{C=ee}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,se){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ee=C;C=X;try{return se()}finally{C=ee}},r.unstable_scheduleCallback=function(X,se,ee){var x=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?x+ee:x):ee=x,X){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ee+$,X={id:E++,callback:se,priorityLevel:X,startTime:ee,expirationTime:$,sortIndex:-1},ee>x?(X.sortIndex=ee,e(_,X),t(g)===null&&X===t(_)&&(G?(pe(I),I=-1):G=!0,de(Ee,ee-x))):(X.sortIndex=$,e(g,X),z||M||(z=!0,fe(be))),X},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(X){var se=C;return function(){var ee=C;C=se;try{return X.apply(this,arguments)}finally{C=ee}}}})(pd)),pd}var Ig;function v0(){return Ig||(Ig=1,fd.exports=_0()),fd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function w0(){if(Sg)return Zt;Sg=1;var r=cf(),e=v0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},S={};function C(n){return g.call(S,n)?!0:g.call(E,n)?!1:_.test(n)?S[n]=!0:(E[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function G(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new G(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];B[i]=new G(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new G(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new G(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new G(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new G(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new G(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new G(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new G(n,5,!1,n.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function le(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(pe,le);B[i]=new G(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(pe,le);B[i]=new G(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(pe,le);B[i]=new G(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new G(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new G(n,1,!1,n.toLowerCase(),null,!0,!0)});function ue(n,i,a,c){var d=B.hasOwnProperty(i)?B[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(z(i,a,d,c)&&(a=null),c||d===null?C(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Ee=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,be=Symbol.for("react.element"),Se=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),O=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),X=Symbol.iterator;function se(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,x;function $(n){if(x===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);x=i&&i[1]||""}return`
`+x+n}var he=!1;function Ce(n,i){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,T=m.length-1;1<=v&&0<=T&&d[v]!==m[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==m[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==m[T]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=T);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function ke(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ce(n.type,!1),n;case 11:return n=Ce(n.type.render,!1),n;case 1:return n=Ce(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case Se:return"Portal";case R:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case Ze:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ae:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case fe:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function Ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function je(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function We(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Et(n){var i=We(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function fr(n){n._valueTracker||(n._valueTracker=Et(n))}function Is(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=We(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Fr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xi(n,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ss(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=je(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bo(n,i){i=i.checked,i!=null&&ue(n,"checked",i,!1)}function Mo(n,i){bo(n,i);var a=je(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?As(n,i.type,a):i.hasOwnProperty("defaultValue")&&As(n,i.type,je(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ml(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function As(n,i,a){(i!=="number"||Fr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var pr=Array.isArray;function mr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+je(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Fo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Cs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(pr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:je(a)}}function Rs(n,i){var a=je(i.value),c=je(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Uo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ft(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ft(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var gr,jo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=gr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ur(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Li=["Webkit","ms","Moz","O"];Object.keys(Vi).forEach(function(n){Li.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Vi[i]=Vi[n]})});function zo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Vi.hasOwnProperty(n)&&Vi[n]?(""+i).trim():i+"px"}function Bo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=zo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var $o=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ho(n,i){if(i){if($o[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Wo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bi=null;function ks(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ps=null,mn=null,Kn=null;function Ns(n){if(n=ma(n)){if(typeof Ps!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Wl(i),Ps(n.stateNode,n.type,i))}}function Gn(n){mn?Kn?Kn.push(n):Kn=[n]:mn=n}function qo(){if(mn){var n=mn,i=Kn;if(Kn=mn=null,Ns(n),i)for(n=0;n<i.length;n++)Ns(i[n])}}function Mi(n,i){return n(i)}function Ko(){}var yr=!1;function Go(n,i,a){if(yr)return n(i,a);yr=!0;try{return Mi(n,i,a)}finally{yr=!1,(mn!==null||Kn!==null)&&(Ko(),qo())}}function st(n,i){var a=n.stateNode;if(a===null)return null;var c=Wl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ds=!1;if(f)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Ds=!1}function Fi(n,i,a,c,d,m,v,T,k){var U=Array.prototype.slice.call(arguments,3);try{i.apply(a,U)}catch(K){this.onError(K)}}var Ui=!1,Os=null,kn=!1,Qo=null,Fc={onError:function(n){Ui=!0,Os=n}};function xs(n,i,a,c,d,m,v,T,k){Ui=!1,Os=null,Fi.apply(Fc,arguments)}function gl(n,i,a,c,d,m,v,T,k){if(xs.apply(this,arguments),Ui){if(Ui){var U=Os;Ui=!1,Os=null}else throw Error(t(198));kn||(kn=!0,Qo=U)}}function Pn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ji(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Nn(n){if(Pn(n)!==n)throw Error(t(188))}function yl(n){var i=n.alternate;if(!i){if(i=Pn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Nn(d),n;if(m===c)return Nn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=m;break}if(T===c){v=!0,c=d,a=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===a){v=!0,a=m,c=d;break}if(T===c){v=!0,c=m,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Yo(n){return n=yl(n),n!==null?Vs(n):null}function Vs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Vs(n);if(i!==null)return i;n=n.sibling}return null}var Ls=e.unstable_scheduleCallback,Xo=e.unstable_cancelCallback,_l=e.unstable_shouldYield,Uc=e.unstable_requestPaint,qe=e.unstable_now,vl=e.unstable_getCurrentPriorityLevel,zi=e.unstable_ImmediatePriority,jr=e.unstable_UserBlockingPriority,gn=e.unstable_NormalPriority,Jo=e.unstable_LowPriority,wl=e.unstable_IdlePriority,Bi=null,sn=null;function El(n){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Bi,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Il,Zo=Math.log,Tl=Math.LN2;function Il(n){return n>>>=0,n===0?32:31-(Zo(n)/Tl|0)|0}var bs=64,Ms=4194304;function zr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $i(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=zr(T):(m&=v,m!==0&&(c=zr(m)))}else v=a&~d,v!==0?c=zr(v):m!==0&&(c=zr(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Bt(i),d=1<<a,c|=n[a],i&=~d;return c}function jc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-Bt(m),T=1<<v,k=d[v];k===-1?((T&a)===0||(T&c)!==0)&&(d[v]=jc(T,i)):k<=i&&(n.expiredLanes|=T),m&=~T}}function on(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Hi(){var n=bs;return bs<<=1,(bs&4194240)===0&&(bs=64),n}function Br(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $r(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Bt(i),n[i]=a}function He(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Hr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Oe=0;function Wr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Sl,Fs,Al,Cl,Rl,ea=!1,Qn=[],Rt=null,Dn=null,On=null,qr=new Map,yn=new Map,Yn=[],zc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kl(n,i){switch(n){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":qr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(i.pointerId)}}function qt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ma(i),i!==null&&Fs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Bc(n,i,a,c,d){switch(i){case"focusin":return Rt=qt(Rt,n,i,a,c,d),!0;case"dragenter":return Dn=qt(Dn,n,i,a,c,d),!0;case"mouseover":return On=qt(On,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return qr.set(m,qt(qr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,yn.set(m,qt(yn.get(m)||null,n,i,a,c,d)),!0}return!1}function Pl(n){var i=Qi(n.target);if(i!==null){var a=Pn(i);if(a!==null){if(i=a.tag,i===13){if(i=ji(a),i!==null){n.blockedOn=i,Rl(n.priority,function(){Al(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Us(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);bi=c,a.target.dispatchEvent(c),bi=null}else return i=ma(a),i!==null&&Fs(i),n.blockedOn=a,!1;i.shift()}return!0}function Wi(n,i,a){vr(n)&&a.delete(i)}function Nl(){ea=!1,Rt!==null&&vr(Rt)&&(Rt=null),Dn!==null&&vr(Dn)&&(Dn=null),On!==null&&vr(On)&&(On=null),qr.forEach(Wi),yn.forEach(Wi)}function xn(n,i){n.blockedOn===i&&(n.blockedOn=null,ea||(ea=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Nl)))}function Vn(n){function i(d){return xn(d,n)}if(0<Qn.length){xn(Qn[0],n);for(var a=1;a<Qn.length;a++){var c=Qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Rt!==null&&xn(Rt,n),Dn!==null&&xn(Dn,n),On!==null&&xn(On,n),qr.forEach(i),yn.forEach(i),a=0;a<Yn.length;a++)c=Yn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)Pl(a),a.blockedOn===null&&Yn.shift()}var wr=Ee.ReactCurrentBatchConfig,Kr=!0;function Xe(n,i,a,c){var d=Oe,m=wr.transition;wr.transition=null;try{Oe=1,ta(n,i,a,c)}finally{Oe=d,wr.transition=m}}function $c(n,i,a,c){var d=Oe,m=wr.transition;wr.transition=null;try{Oe=4,ta(n,i,a,c)}finally{Oe=d,wr.transition=m}}function ta(n,i,a,c){if(Kr){var d=Us(n,i,a,c);if(d===null)eh(n,i,c,qi,a),kl(n,c);else if(Bc(d,n,i,a,c))c.stopPropagation();else if(kl(n,c),i&4&&-1<zc.indexOf(n)){for(;d!==null;){var m=ma(d);if(m!==null&&Sl(m),m=Us(n,i,a,c),m===null&&eh(n,i,c,qi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else eh(n,i,c,null,a)}}var qi=null;function Us(n,i,a,c){if(qi=null,n=ks(c),n=Qi(n),n!==null)if(i=Pn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ji(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return qi=n,null}function na(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vl()){case zi:return 1;case jr:return 4;case gn:case Jo:return 16;case wl:return 536870912;default:return 16}default:return 16}}var an=null,js=null,Kt=null;function ra(){if(Kt)return Kt;var n,i=js,a=i.length,c,d="value"in an?an.value:an.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Kt=d.slice(n,1<c?1-c:void 0)}function zs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Xn(){return!0}function ia(){return!1}function kt(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Xn:ia,this.isPropagationStopped=ia,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),i}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bs=kt(Ln),Jn=ee({},Ln,{view:0,detail:0}),Hc=kt(Jn),$s,Er,Gr,Ki=ee({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Gr&&(Gr&&n.type==="mousemove"?($s=n.screenX-Gr.screenX,Er=n.screenY-Gr.screenY):Er=$s=0,Gr=n),$s)},movementY:function(n){return"movementY"in n?n.movementY:Er}}),Hs=kt(Ki),sa=ee({},Ki,{dataTransfer:0}),Dl=kt(sa),Ws=ee({},Jn,{relatedTarget:0}),qs=kt(Ws),Ol=ee({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Tr=kt(Ol),xl=ee({},Ln,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Vl=kt(xl),Ll=ee({},Ln,{data:0}),oa=kt(Ll),Ks={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ml(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=bl[n])?!!i[n]:!1}function Zn(){return Ml}var u=ee({},Jn,{key:function(n){if(n.key){var i=Ks[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=zs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zn,charCode:function(n){return n.type==="keypress"?zs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=kt(u),y=ee({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=kt(y),L=ee({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zn}),j=kt(L),Z=ee({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=kt(Z),mt=ee({},Ki,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=kt(mt),Tt=[9,13,27,32],lt=f&&"CompositionEvent"in window,_n=null;f&&"documentMode"in document&&(_n=document.documentMode);var ln=f&&"TextEvent"in window&&!_n,Gi=f&&(!lt||_n&&8<_n&&11>=_n),Gs=" ",dp=!1;function fp(n,i){switch(n){case"keyup":return Tt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qs=!1;function hE(n,i){switch(n){case"compositionend":return pp(i);case"keypress":return i.which!==32?null:(dp=!0,Gs);case"textInput":return n=i.data,n===Gs&&dp?null:n;default:return null}}function dE(n,i){if(Qs)return n==="compositionend"||!lt&&fp(n,i)?(n=ra(),Kt=js=an=null,Qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gi&&i.locale!=="ko"?null:i.data;default:return null}}var fE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!fE[n.type]:i==="textarea"}function gp(n,i,a,c){Gn(c),i=Bl(i,"onChange"),0<i.length&&(a=new Bs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var aa=null,la=null;function pE(n){Vp(n,0)}function Fl(n){var i=eo(n);if(Is(i))return n}function mE(n,i){if(n==="change")return i}var yp=!1;if(f){var Wc;if(f){var qc="oninput"in document;if(!qc){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),qc=typeof _p.oninput=="function"}Wc=qc}else Wc=!1;yp=Wc&&(!document.documentMode||9<document.documentMode)}function vp(){aa&&(aa.detachEvent("onpropertychange",wp),la=aa=null)}function wp(n){if(n.propertyName==="value"&&Fl(la)){var i=[];gp(i,la,n,ks(n)),Go(pE,i)}}function gE(n,i,a){n==="focusin"?(vp(),aa=i,la=a,aa.attachEvent("onpropertychange",wp)):n==="focusout"&&vp()}function yE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fl(la)}function _E(n,i){if(n==="click")return Fl(i)}function vE(n,i){if(n==="input"||n==="change")return Fl(i)}function wE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var bn=typeof Object.is=="function"?Object.is:wE;function ua(n,i){if(bn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!bn(n[d],i[d]))return!1}return!0}function Ep(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Tp(n,i){var a=Ep(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ep(a)}}function Ip(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ip(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Sp(){for(var n=window,i=Fr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Fr(n.document)}return i}function Kc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function EE(n){var i=Sp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ip(a.ownerDocument.documentElement,a)){if(c!==null&&Kc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Tp(a,m);var v=Tp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var TE=f&&"documentMode"in document&&11>=document.documentMode,Ys=null,Gc=null,ca=null,Qc=!1;function Ap(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qc||Ys==null||Ys!==Fr(c)||(c=Ys,"selectionStart"in c&&Kc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ca&&ua(ca,c)||(ca=c,c=Bl(Gc,"onSelect"),0<c.length&&(i=new Bs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ys)))}function Ul(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Xs={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionend:Ul("Transition","TransitionEnd")},Yc={},Cp={};f&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function jl(n){if(Yc[n])return Yc[n];if(!Xs[n])return n;var i=Xs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Cp)return Yc[n]=i[a];return n}var Rp=jl("animationend"),kp=jl("animationiteration"),Pp=jl("animationstart"),Np=jl("transitionend"),Dp=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,i){Dp.set(n,i),l(i,[n])}for(var Xc=0;Xc<Op.length;Xc++){var Jc=Op[Xc],IE=Jc.toLowerCase(),SE=Jc[0].toUpperCase()+Jc.slice(1);Qr(IE,"on"+SE)}Qr(Rp,"onAnimationEnd"),Qr(kp,"onAnimationIteration"),Qr(Pp,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(Np,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function xp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,gl(c,i,void 0,n),n.currentTarget=null}function Vp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var T=c[v],k=T.instance,U=T.currentTarget;if(T=T.listener,k!==m&&d.isPropagationStopped())break e;xp(d,T,U),m=k}else for(v=0;v<c.length;v++){if(T=c[v],k=T.instance,U=T.currentTarget,T=T.listener,k!==m&&d.isPropagationStopped())break e;xp(d,T,U),m=k}}}if(kn)throw n=Qo,kn=!1,Qo=null,n}function Qe(n,i){var a=i[oh];a===void 0&&(a=i[oh]=new Set);var c=n+"__bubble";a.has(c)||(Lp(i,n,2,!1),a.add(c))}function Zc(n,i,a){var c=0;i&&(c|=4),Lp(a,n,c,i)}var zl="_reactListening"+Math.random().toString(36).slice(2);function da(n){if(!n[zl]){n[zl]=!0,s.forEach(function(a){a!=="selectionchange"&&(AE.has(a)||Zc(a,!1,n),Zc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[zl]||(i[zl]=!0,Zc("selectionchange",!1,i))}}function Lp(n,i,a,c){switch(na(i)){case 1:var d=Xe;break;case 4:d=$c;break;default:d=ta}a=d.bind(null,i,a,n),d=void 0,!Ds||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function eh(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;T!==null;){if(v=Qi(T),v===null)return;if(k=v.tag,k===5||k===6){c=m=v;continue e}T=T.parentNode}}c=c.return}Go(function(){var U=m,K=ks(a),Q=[];e:{var W=Dp.get(n);if(W!==void 0){var te=Bs,ie=n;switch(n){case"keypress":if(zs(a)===0)break e;case"keydown":case"keyup":te=p;break;case"focusin":ie="focus",te=qs;break;case"focusout":ie="blur",te=qs;break;case"beforeblur":case"afterblur":te=qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Dl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=j;break;case Rp:case kp:case Pp:te=Tr;break;case Np:te=Be;break;case"scroll":te=Hc;break;case"wheel":te=Ve;break;case"copy":case"cut":case"paste":te=Vl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=w}var oe=(i&4)!==0,ot=!oe&&n==="scroll",b=oe?W!==null?W+"Capture":null:W;oe=[];for(var D=U,F;D!==null;){F=D;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,b!==null&&(Y=st(D,b),Y!=null&&oe.push(fa(D,Y,F)))),ot)break;D=D.return}0<oe.length&&(W=new te(W,ie,null,a,K),Q.push({event:W,listeners:oe}))}}if((i&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",W&&a!==bi&&(ie=a.relatedTarget||a.fromElement)&&(Qi(ie)||ie[Ir]))break e;if((te||W)&&(W=K.window===K?K:(W=K.ownerDocument)?W.defaultView||W.parentWindow:window,te?(ie=a.relatedTarget||a.toElement,te=U,ie=ie?Qi(ie):null,ie!==null&&(ot=Pn(ie),ie!==ot||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=U),te!==ie)){if(oe=Hs,Y="onMouseLeave",b="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(oe=w,Y="onPointerLeave",b="onPointerEnter",D="pointer"),ot=te==null?W:eo(te),F=ie==null?W:eo(ie),W=new oe(Y,D+"leave",te,a,K),W.target=ot,W.relatedTarget=F,Y=null,Qi(K)===U&&(oe=new oe(b,D+"enter",ie,a,K),oe.target=F,oe.relatedTarget=ot,Y=oe),ot=Y,te&&ie)t:{for(oe=te,b=ie,D=0,F=oe;F;F=Js(F))D++;for(F=0,Y=b;Y;Y=Js(Y))F++;for(;0<D-F;)oe=Js(oe),D--;for(;0<F-D;)b=Js(b),F--;for(;D--;){if(oe===b||b!==null&&oe===b.alternate)break t;oe=Js(oe),b=Js(b)}oe=null}else oe=null;te!==null&&bp(Q,W,te,oe,!1),ie!==null&&ot!==null&&bp(Q,ot,ie,oe,!0)}}e:{if(W=U?eo(U):window,te=W.nodeName&&W.nodeName.toLowerCase(),te==="select"||te==="input"&&W.type==="file")var ae=mE;else if(mp(W))if(yp)ae=vE;else{ae=yE;var me=gE}else(te=W.nodeName)&&te.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(ae=_E);if(ae&&(ae=ae(n,U))){gp(Q,ae,a,K);break e}me&&me(n,W,U),n==="focusout"&&(me=W._wrapperState)&&me.controlled&&W.type==="number"&&As(W,"number",W.value)}switch(me=U?eo(U):window,n){case"focusin":(mp(me)||me.contentEditable==="true")&&(Ys=me,Gc=U,ca=null);break;case"focusout":ca=Gc=Ys=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Ap(Q,a,K);break;case"selectionchange":if(TE)break;case"keydown":case"keyup":Ap(Q,a,K)}var ge;if(lt)e:{switch(n){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Qs?fp(n,a)&&(we="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Gi&&a.locale!=="ko"&&(Qs||we!=="onCompositionStart"?we==="onCompositionEnd"&&Qs&&(ge=ra()):(an=K,js="value"in an?an.value:an.textContent,Qs=!0)),me=Bl(U,we),0<me.length&&(we=new oa(we,n,null,a,K),Q.push({event:we,listeners:me}),ge?we.data=ge:(ge=pp(a),ge!==null&&(we.data=ge)))),(ge=ln?hE(n,a):dE(n,a))&&(U=Bl(U,"onBeforeInput"),0<U.length&&(K=new oa("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:U}),K.data=ge))}Vp(Q,i)})}function fa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Bl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=st(n,a),m!=null&&c.unshift(fa(n,m,d)),m=st(n,i),m!=null&&c.push(fa(n,m,d))),n=n.return}return c}function Js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bp(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var T=a,k=T.alternate,U=T.stateNode;if(k!==null&&k===c)break;T.tag===5&&U!==null&&(T=U,d?(k=st(a,m),k!=null&&v.unshift(fa(a,k,T))):d||(k=st(a,m),k!=null&&v.push(fa(a,k,T)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var CE=/\r\n?/g,RE=/\u0000|\uFFFD/g;function Mp(n){return(typeof n=="string"?n:""+n).replace(CE,`
`).replace(RE,"")}function $l(n,i,a){if(i=Mp(i),Mp(n)!==i&&a)throw Error(t(425))}function Hl(){}var th=null,nh=null;function rh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ih=typeof setTimeout=="function"?setTimeout:void 0,kE=typeof clearTimeout=="function"?clearTimeout:void 0,Fp=typeof Promise=="function"?Promise:void 0,PE=typeof queueMicrotask=="function"?queueMicrotask:typeof Fp<"u"?function(n){return Fp.resolve(null).then(n).catch(NE)}:ih;function NE(n){setTimeout(function(){throw n})}function sh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Vn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Vn(i)}function Yr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Up(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),er="__reactFiber$"+Zs,pa="__reactProps$"+Zs,Ir="__reactContainer$"+Zs,oh="__reactEvents$"+Zs,DE="__reactListeners$"+Zs,OE="__reactHandles$"+Zs;function Qi(n){var i=n[er];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ir]||a[er]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Up(n);n!==null;){if(a=n[er])return a;n=Up(n)}return i}n=a,a=n.parentNode}return null}function ma(n){return n=n[er]||n[Ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function eo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wl(n){return n[pa]||null}var ah=[],to=-1;function Xr(n){return{current:n}}function Ye(n){0>to||(n.current=ah[to],ah[to]=null,to--)}function Ke(n,i){to++,ah[to]=n.current,n.current=i}var Jr={},Vt=Xr(Jr),Gt=Xr(!1),Yi=Jr;function no(n,i){var a=n.type.contextTypes;if(!a)return Jr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function ql(){Ye(Gt),Ye(Vt)}function jp(n,i,a){if(Vt.current!==Jr)throw Error(t(168));Ke(Vt,i),Ke(Gt,a)}function zp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Ue(n)||"Unknown",d));return ee({},a,c)}function Kl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Jr,Yi=Vt.current,Ke(Vt,n),Ke(Gt,Gt.current),!0}function Bp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=zp(n,i,Yi),c.__reactInternalMemoizedMergedChildContext=n,Ye(Gt),Ye(Vt),Ke(Vt,n)):Ye(Gt),Ke(Gt,a)}var Sr=null,Gl=!1,lh=!1;function $p(n){Sr===null?Sr=[n]:Sr.push(n)}function xE(n){Gl=!0,$p(n)}function Zr(){if(!lh&&Sr!==null){lh=!0;var n=0,i=Oe;try{var a=Sr;for(Oe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Sr=null,Gl=!1}catch(d){throw Sr!==null&&(Sr=Sr.slice(n+1)),Ls(zi,Zr),d}finally{Oe=i,lh=!1}}return null}var ro=[],io=0,Ql=null,Yl=0,vn=[],wn=0,Xi=null,Ar=1,Cr="";function Ji(n,i){ro[io++]=Yl,ro[io++]=Ql,Ql=n,Yl=i}function Hp(n,i,a){vn[wn++]=Ar,vn[wn++]=Cr,vn[wn++]=Xi,Xi=n;var c=Ar;n=Cr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var m=32-Bt(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Ar=1<<32-Bt(i)+d|a<<d|c,Cr=m+n}else Ar=1<<m|a<<d|c,Cr=n}function uh(n){n.return!==null&&(Ji(n,1),Hp(n,1,0))}function ch(n){for(;n===Ql;)Ql=ro[--io],ro[io]=null,Yl=ro[--io],ro[io]=null;for(;n===Xi;)Xi=vn[--wn],vn[wn]=null,Cr=vn[--wn],vn[wn]=null,Ar=vn[--wn],vn[wn]=null}var un=null,cn=null,Je=!1,Mn=null;function Wp(n,i){var a=Sn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function qp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,un=n,cn=Yr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,un=n,cn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Xi!==null?{id:Ar,overflow:Cr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Sn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,un=n,cn=null,!0):!1;default:return!1}}function hh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function dh(n){if(Je){var i=cn;if(i){var a=i;if(!qp(n,i)){if(hh(n))throw Error(t(418));i=Yr(a.nextSibling);var c=un;i&&qp(n,i)?Wp(c,a):(n.flags=n.flags&-4097|2,Je=!1,un=n)}}else{if(hh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,un=n}}}function Kp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;un=n}function Xl(n){if(n!==un)return!1;if(!Je)return Kp(n),Je=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!rh(n.type,n.memoizedProps)),i&&(i=cn)){if(hh(n))throw Gp(),Error(t(418));for(;i;)Wp(n,i),i=Yr(i.nextSibling)}if(Kp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){cn=Yr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}cn=null}}else cn=un?Yr(n.stateNode.nextSibling):null;return!0}function Gp(){for(var n=cn;n;)n=Yr(n.nextSibling)}function so(){cn=un=null,Je=!1}function fh(n){Mn===null?Mn=[n]:Mn.push(n)}var VE=Ee.ReactCurrentBatchConfig;function ga(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var T=d.refs;v===null?delete T[m]:T[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Jl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Qp(n){var i=n._init;return i(n._payload)}function Yp(n){function i(b,D){if(n){var F=b.deletions;F===null?(b.deletions=[D],b.flags|=16):F.push(D)}}function a(b,D){if(!n)return null;for(;D!==null;)i(b,D),D=D.sibling;return null}function c(b,D){for(b=new Map;D!==null;)D.key!==null?b.set(D.key,D):b.set(D.index,D),D=D.sibling;return b}function d(b,D){return b=ai(b,D),b.index=0,b.sibling=null,b}function m(b,D,F){return b.index=F,n?(F=b.alternate,F!==null?(F=F.index,F<D?(b.flags|=2,D):F):(b.flags|=2,D)):(b.flags|=1048576,D)}function v(b){return n&&b.alternate===null&&(b.flags|=2),b}function T(b,D,F,Y){return D===null||D.tag!==6?(D=id(F,b.mode,Y),D.return=b,D):(D=d(D,F),D.return=b,D)}function k(b,D,F,Y){var ae=F.type;return ae===P?K(b,D,F.props.children,Y,F.key):D!==null&&(D.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===fe&&Qp(ae)===D.type)?(Y=d(D,F.props),Y.ref=ga(b,D,F),Y.return=b,Y):(Y=Tu(F.type,F.key,F.props,null,b.mode,Y),Y.ref=ga(b,D,F),Y.return=b,Y)}function U(b,D,F,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=sd(F,b.mode,Y),D.return=b,D):(D=d(D,F.children||[]),D.return=b,D)}function K(b,D,F,Y,ae){return D===null||D.tag!==7?(D=os(F,b.mode,Y,ae),D.return=b,D):(D=d(D,F),D.return=b,D)}function Q(b,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=id(""+D,b.mode,F),D.return=b,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case be:return F=Tu(D.type,D.key,D.props,null,b.mode,F),F.ref=ga(b,null,D),F.return=b,F;case Se:return D=sd(D,b.mode,F),D.return=b,D;case fe:var Y=D._init;return Q(b,Y(D._payload),F)}if(pr(D)||se(D))return D=os(D,b.mode,F,null),D.return=b,D;Jl(b,D)}return null}function W(b,D,F,Y){var ae=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ae!==null?null:T(b,D,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case be:return F.key===ae?k(b,D,F,Y):null;case Se:return F.key===ae?U(b,D,F,Y):null;case fe:return ae=F._init,W(b,D,ae(F._payload),Y)}if(pr(F)||se(F))return ae!==null?null:K(b,D,F,Y,null);Jl(b,F)}return null}function te(b,D,F,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return b=b.get(F)||null,T(D,b,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case be:return b=b.get(Y.key===null?F:Y.key)||null,k(D,b,Y,ae);case Se:return b=b.get(Y.key===null?F:Y.key)||null,U(D,b,Y,ae);case fe:var me=Y._init;return te(b,D,F,me(Y._payload),ae)}if(pr(Y)||se(Y))return b=b.get(F)||null,K(D,b,Y,ae,null);Jl(D,Y)}return null}function ie(b,D,F,Y){for(var ae=null,me=null,ge=D,we=D=0,At=null;ge!==null&&we<F.length;we++){ge.index>we?(At=ge,ge=null):At=ge.sibling;var Fe=W(b,ge,F[we],Y);if(Fe===null){ge===null&&(ge=At);break}n&&ge&&Fe.alternate===null&&i(b,ge),D=m(Fe,D,we),me===null?ae=Fe:me.sibling=Fe,me=Fe,ge=At}if(we===F.length)return a(b,ge),Je&&Ji(b,we),ae;if(ge===null){for(;we<F.length;we++)ge=Q(b,F[we],Y),ge!==null&&(D=m(ge,D,we),me===null?ae=ge:me.sibling=ge,me=ge);return Je&&Ji(b,we),ae}for(ge=c(b,ge);we<F.length;we++)At=te(ge,b,we,F[we],Y),At!==null&&(n&&At.alternate!==null&&ge.delete(At.key===null?we:At.key),D=m(At,D,we),me===null?ae=At:me.sibling=At,me=At);return n&&ge.forEach(function(li){return i(b,li)}),Je&&Ji(b,we),ae}function oe(b,D,F,Y){var ae=se(F);if(typeof ae!="function")throw Error(t(150));if(F=ae.call(F),F==null)throw Error(t(151));for(var me=ae=null,ge=D,we=D=0,At=null,Fe=F.next();ge!==null&&!Fe.done;we++,Fe=F.next()){ge.index>we?(At=ge,ge=null):At=ge.sibling;var li=W(b,ge,Fe.value,Y);if(li===null){ge===null&&(ge=At);break}n&&ge&&li.alternate===null&&i(b,ge),D=m(li,D,we),me===null?ae=li:me.sibling=li,me=li,ge=At}if(Fe.done)return a(b,ge),Je&&Ji(b,we),ae;if(ge===null){for(;!Fe.done;we++,Fe=F.next())Fe=Q(b,Fe.value,Y),Fe!==null&&(D=m(Fe,D,we),me===null?ae=Fe:me.sibling=Fe,me=Fe);return Je&&Ji(b,we),ae}for(ge=c(b,ge);!Fe.done;we++,Fe=F.next())Fe=te(ge,b,we,Fe.value,Y),Fe!==null&&(n&&Fe.alternate!==null&&ge.delete(Fe.key===null?we:Fe.key),D=m(Fe,D,we),me===null?ae=Fe:me.sibling=Fe,me=Fe);return n&&ge.forEach(function(f0){return i(b,f0)}),Je&&Ji(b,we),ae}function ot(b,D,F,Y){if(typeof F=="object"&&F!==null&&F.type===P&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case be:e:{for(var ae=F.key,me=D;me!==null;){if(me.key===ae){if(ae=F.type,ae===P){if(me.tag===7){a(b,me.sibling),D=d(me,F.props.children),D.return=b,b=D;break e}}else if(me.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===fe&&Qp(ae)===me.type){a(b,me.sibling),D=d(me,F.props),D.ref=ga(b,me,F),D.return=b,b=D;break e}a(b,me);break}else i(b,me);me=me.sibling}F.type===P?(D=os(F.props.children,b.mode,Y,F.key),D.return=b,b=D):(Y=Tu(F.type,F.key,F.props,null,b.mode,Y),Y.ref=ga(b,D,F),Y.return=b,b=Y)}return v(b);case Se:e:{for(me=F.key;D!==null;){if(D.key===me)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){a(b,D.sibling),D=d(D,F.children||[]),D.return=b,b=D;break e}else{a(b,D);break}else i(b,D);D=D.sibling}D=sd(F,b.mode,Y),D.return=b,b=D}return v(b);case fe:return me=F._init,ot(b,D,me(F._payload),Y)}if(pr(F))return ie(b,D,F,Y);if(se(F))return oe(b,D,F,Y);Jl(b,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(a(b,D.sibling),D=d(D,F),D.return=b,b=D):(a(b,D),D=id(F,b.mode,Y),D.return=b,b=D),v(b)):a(b,D)}return ot}var oo=Yp(!0),Xp=Yp(!1),Zl=Xr(null),eu=null,ao=null,ph=null;function mh(){ph=ao=eu=null}function gh(n){var i=Zl.current;Ye(Zl),n._currentValue=i}function yh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function lo(n,i){eu=n,ph=ao=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yt=!0),n.firstContext=null)}function En(n){var i=n._currentValue;if(ph!==n)if(n={context:n,memoizedValue:i,next:null},ao===null){if(eu===null)throw Error(t(308));ao=n,eu.dependencies={lanes:0,firstContext:n}}else ao=ao.next=n;return i}var Zi=null;function _h(n){Zi===null?Zi=[n]:Zi.push(n)}function Jp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,_h(i)):(a.next=d.next,d.next=a),i.interleaved=a,Rr(n,c)}function Rr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ei=!1;function vh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function kr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ti(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Me&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Rr(n,a)}return d=c.interleaved,d===null?(i.next=i,_h(c)):(i.next=d.next,d.next=i),c.interleaved=i,Rr(n,a)}function tu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Hr(n,a)}}function em(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function nu(n,i,a,c){var d=n.updateQueue;ei=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var k=T,U=k.next;k.next=null,v===null?m=U:v.next=U,v=k;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==v&&(T===null?K.firstBaseUpdate=U:T.next=U,K.lastBaseUpdate=k))}if(m!==null){var Q=d.baseState;v=0,K=U=k=null,T=m;do{var W=T.lane,te=T.eventTime;if((c&W)===W){K!==null&&(K=K.next={eventTime:te,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ie=n,oe=T;switch(W=i,te=a,oe.tag){case 1:if(ie=oe.payload,typeof ie=="function"){Q=ie.call(te,Q,W);break e}Q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=oe.payload,W=typeof ie=="function"?ie.call(te,Q,W):ie,W==null)break e;Q=ee({},Q,W);break e;case 2:ei=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[T]:W.push(T))}else te={eventTime:te,lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(U=K=te,k=Q):K=K.next=te,v|=W;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;W=T,T=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(K===null&&(k=Q),d.baseState=k,d.firstBaseUpdate=U,d.lastBaseUpdate=K,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ns|=v,n.lanes=v,n.memoizedState=Q}}function tm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ya={},tr=Xr(ya),_a=Xr(ya),va=Xr(ya);function es(n){if(n===ya)throw Error(t(174));return n}function wh(n,i){switch(Ke(va,i),Ke(_a,n),Ke(tr,ya),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=pt(i,n)}Ye(tr),Ke(tr,i)}function uo(){Ye(tr),Ye(_a),Ye(va)}function nm(n){es(va.current);var i=es(tr.current),a=pt(i,n.type);i!==a&&(Ke(_a,n),Ke(tr,a))}function Eh(n){_a.current===n&&(Ye(tr),Ye(_a))}var et=Xr(0);function ru(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Th=[];function Ih(){for(var n=0;n<Th.length;n++)Th[n]._workInProgressVersionPrimary=null;Th.length=0}var iu=Ee.ReactCurrentDispatcher,Sh=Ee.ReactCurrentBatchConfig,ts=0,tt=null,gt=null,It=null,su=!1,wa=!1,Ea=0,LE=0;function Lt(){throw Error(t(321))}function Ah(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!bn(n[a],i[a]))return!1;return!0}function Ch(n,i,a,c,d,m){if(ts=m,tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,iu.current=n===null||n.memoizedState===null?UE:jE,n=a(c,d),wa){m=0;do{if(wa=!1,Ea=0,25<=m)throw Error(t(301));m+=1,It=gt=null,i.updateQueue=null,iu.current=zE,n=a(c,d)}while(wa)}if(iu.current=lu,i=gt!==null&&gt.next!==null,ts=0,It=gt=tt=null,su=!1,i)throw Error(t(300));return n}function Rh(){var n=Ea!==0;return Ea=0,n}function nr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?tt.memoizedState=It=n:It=It.next=n,It}function Tn(){if(gt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=gt.next;var i=It===null?tt.memoizedState:It.next;if(i!==null)It=i,gt=n;else{if(n===null)throw Error(t(310));gt=n,n={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},It===null?tt.memoizedState=It=n:It=It.next=n}return It}function Ta(n,i){return typeof i=="function"?i(n):i}function kh(n){var i=Tn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=gt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var T=v=null,k=null,U=m;do{var K=U.lane;if((ts&K)===K)k!==null&&(k=k.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Q={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};k===null?(T=k=Q,v=c):k=k.next=Q,tt.lanes|=K,ns|=K}U=U.next}while(U!==null&&U!==m);k===null?v=c:k.next=T,bn(c,i.memoizedState)||(Yt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,tt.lanes|=m,ns|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ph(n){var i=Tn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);bn(m,i.memoizedState)||(Yt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function rm(){}function im(n,i){var a=tt,c=Tn(),d=i(),m=!bn(c.memoizedState,d);if(m&&(c.memoizedState=d,Yt=!0),c=c.queue,Nh(am.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,Ia(9,om.bind(null,a,c,d,i),void 0,null),St===null)throw Error(t(349));(ts&30)!==0||sm(a,i,d)}return d}function sm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function om(n,i,a,c){i.value=a,i.getSnapshot=c,lm(i)&&um(n)}function am(n,i,a){return a(function(){lm(i)&&um(n)})}function lm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!bn(n,a)}catch{return!0}}function um(n){var i=Rr(n,1);i!==null&&zn(i,n,1,-1)}function cm(n){var i=nr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:n},i.queue=n,n=n.dispatch=FE.bind(null,tt,n),[i.memoizedState,n]}function Ia(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function hm(){return Tn().memoizedState}function ou(n,i,a,c){var d=nr();tt.flags|=n,d.memoizedState=Ia(1|i,a,void 0,c===void 0?null:c)}function au(n,i,a,c){var d=Tn();c=c===void 0?null:c;var m=void 0;if(gt!==null){var v=gt.memoizedState;if(m=v.destroy,c!==null&&Ah(c,v.deps)){d.memoizedState=Ia(i,a,m,c);return}}tt.flags|=n,d.memoizedState=Ia(1|i,a,m,c)}function dm(n,i){return ou(8390656,8,n,i)}function Nh(n,i){return au(2048,8,n,i)}function fm(n,i){return au(4,2,n,i)}function pm(n,i){return au(4,4,n,i)}function mm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function gm(n,i,a){return a=a!=null?a.concat([n]):null,au(4,4,mm.bind(null,i,n),a)}function Dh(){}function ym(n,i){var a=Tn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ah(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function _m(n,i){var a=Tn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ah(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function vm(n,i,a){return(ts&21)===0?(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=a):(bn(a,i)||(a=Hi(),tt.lanes|=a,ns|=a,n.baseState=!0),i)}function bE(n,i){var a=Oe;Oe=a!==0&&4>a?a:4,n(!0);var c=Sh.transition;Sh.transition={};try{n(!1),i()}finally{Oe=a,Sh.transition=c}}function wm(){return Tn().memoizedState}function ME(n,i,a){var c=si(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Em(n))Tm(i,a);else if(a=Jp(n,i,a,c),a!==null){var d=Wt();zn(a,n,c,d),Im(a,i,c)}}function FE(n,i,a){var c=si(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Em(n))Tm(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,T=m(v,a);if(d.hasEagerState=!0,d.eagerState=T,bn(T,v)){var k=i.interleaved;k===null?(d.next=d,_h(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=Jp(n,i,d,c),a!==null&&(d=Wt(),zn(a,n,c,d),Im(a,i,c))}}function Em(n){var i=n.alternate;return n===tt||i!==null&&i===tt}function Tm(n,i){wa=su=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Im(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Hr(n,a)}}var lu={readContext:En,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},UE={readContext:En,useCallback:function(n,i){return nr().memoizedState=[n,i===void 0?null:i],n},useContext:En,useEffect:dm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ou(4194308,4,mm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ou(4194308,4,n,i)},useInsertionEffect:function(n,i){return ou(4,2,n,i)},useMemo:function(n,i){var a=nr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=nr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=ME.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var i=nr();return n={current:n},i.memoizedState=n},useState:cm,useDebugValue:Dh,useDeferredValue:function(n){return nr().memoizedState=n},useTransition:function(){var n=cm(!1),i=n[0];return n=bE.bind(null,n[1]),nr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tt,d=nr();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),St===null)throw Error(t(349));(ts&30)!==0||sm(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,dm(am.bind(null,c,m,n),[n]),c.flags|=2048,Ia(9,om.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=nr(),i=St.identifierPrefix;if(Je){var a=Cr,c=Ar;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ea++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=LE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},jE={readContext:En,useCallback:ym,useContext:En,useEffect:Nh,useImperativeHandle:gm,useInsertionEffect:fm,useLayoutEffect:pm,useMemo:_m,useReducer:kh,useRef:hm,useState:function(){return kh(Ta)},useDebugValue:Dh,useDeferredValue:function(n){var i=Tn();return vm(i,gt.memoizedState,n)},useTransition:function(){var n=kh(Ta)[0],i=Tn().memoizedState;return[n,i]},useMutableSource:rm,useSyncExternalStore:im,useId:wm,unstable_isNewReconciler:!1},zE={readContext:En,useCallback:ym,useContext:En,useEffect:Nh,useImperativeHandle:gm,useInsertionEffect:fm,useLayoutEffect:pm,useMemo:_m,useReducer:Ph,useRef:hm,useState:function(){return Ph(Ta)},useDebugValue:Dh,useDeferredValue:function(n){var i=Tn();return gt===null?i.memoizedState=n:vm(i,gt.memoizedState,n)},useTransition:function(){var n=Ph(Ta)[0],i=Tn().memoizedState;return[n,i]},useMutableSource:rm,useSyncExternalStore:im,useId:wm,unstable_isNewReconciler:!1};function Fn(n,i){if(n&&n.defaultProps){i=ee({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Oh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ee({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var uu={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=si(n),m=kr(c,d);m.payload=i,a!=null&&(m.callback=a),i=ti(n,m,d),i!==null&&(zn(i,n,d,c),tu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=si(n),m=kr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ti(n,m,d),i!==null&&(zn(i,n,d,c),tu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Wt(),c=si(n),d=kr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ti(n,d,c),i!==null&&(zn(i,n,c,a),tu(i,n,c))}};function Sm(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!ua(a,c)||!ua(d,m):!0}function Am(n,i,a){var c=!1,d=Jr,m=i.contextType;return typeof m=="object"&&m!==null?m=En(m):(d=Qt(i)?Yi:Vt.current,c=i.contextTypes,m=(c=c!=null)?no(n,d):Jr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=uu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Cm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&uu.enqueueReplaceState(i,i.state,null)}function xh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},vh(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=En(m):(m=Qt(i)?Yi:Vt.current,d.context=no(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Oh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&uu.enqueueReplaceState(d,d.state,null),nu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function co(n,i){try{var a="",c=i;do a+=ke(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Vh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Lh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var BE=typeof WeakMap=="function"?WeakMap:Map;function Rm(n,i,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){gu||(gu=!0,Yh=c),Lh(n,i)},a}function km(n,i,a){a=kr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Lh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Lh(n,i),typeof c!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Pm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new BE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=n0.bind(null,n,i,a),i.then(n,n))}function Nm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Dm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=kr(-1,1),i.tag=2,ti(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var $E=Ee.ReactCurrentOwner,Yt=!1;function Ht(n,i,a,c){i.child=n===null?Xp(i,null,a,c):oo(i,n.child,a,c)}function Om(n,i,a,c,d){a=a.render;var m=i.ref;return lo(i,d),c=Ch(n,i,a,c,m,d),a=Rh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(Je&&a&&uh(i),i.flags|=1,Ht(n,i,c,d),i.child)}function xm(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!rd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Vm(n,i,m,c,d)):(n=Tu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:ua,a(v,c)&&n.ref===i.ref)return Pr(n,i,d)}return i.flags|=1,n=ai(m,c),n.ref=i.ref,n.return=i,i.child=n}function Vm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(ua(m,c)&&n.ref===i.ref)if(Yt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Yt=!0);else return i.lanes=n.lanes,Pr(n,i,d)}return bh(n,i,a,c,d)}function Lm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(fo,hn),hn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ke(fo,hn),hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ke(fo,hn),hn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Ke(fo,hn),hn|=c;return Ht(n,i,d,a),i.child}function bm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function bh(n,i,a,c,d){var m=Qt(a)?Yi:Vt.current;return m=no(i,m),lo(i,d),a=Ch(n,i,a,c,m,d),c=Rh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(Je&&c&&uh(i),i.flags|=1,Ht(n,i,a,d),i.child)}function Mm(n,i,a,c,d){if(Qt(a)){var m=!0;Kl(i)}else m=!1;if(lo(i,d),i.stateNode===null)hu(n,i),Am(i,a,c),xh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,T=i.memoizedProps;v.props=T;var k=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=En(U):(U=Qt(a)?Yi:Vt.current,U=no(i,U));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||k!==U)&&Cm(i,v,c,U),ei=!1;var W=i.memoizedState;v.state=W,nu(i,c,v,d),k=i.memoizedState,T!==c||W!==k||Gt.current||ei?(typeof K=="function"&&(Oh(i,a,K,c),k=i.memoizedState),(T=ei||Sm(i,a,T,c,W,k,U))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),v.props=c,v.state=k,v.context=U,c=T):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Zp(n,i),T=i.memoizedProps,U=i.type===i.elementType?T:Fn(i.type,T),v.props=U,Q=i.pendingProps,W=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=En(k):(k=Qt(a)?Yi:Vt.current,k=no(i,k));var te=a.getDerivedStateFromProps;(K=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==Q||W!==k)&&Cm(i,v,c,k),ei=!1,W=i.memoizedState,v.state=W,nu(i,c,v,d);var ie=i.memoizedState;T!==Q||W!==ie||Gt.current||ei?(typeof te=="function"&&(Oh(i,a,te,c),ie=i.memoizedState),(U=ei||Sm(i,a,U,c,W,ie,k)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ie,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ie,k)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ie),v.props=c,v.state=ie,v.context=k,c=U):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),c=!1)}return Mh(n,i,a,c,m,d)}function Mh(n,i,a,c,d,m){bm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Bp(i,a,!1),Pr(n,i,m);c=i.stateNode,$E.current=i;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=oo(i,n.child,null,m),i.child=oo(i,null,T,m)):Ht(n,i,T,m),i.memoizedState=c.state,d&&Bp(i,a,!0),i.child}function Fm(n){var i=n.stateNode;i.pendingContext?jp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&jp(n,i.context,!1),wh(n,i.containerInfo)}function Um(n,i,a,c,d){return so(),fh(d),i.flags|=256,Ht(n,i,a,c),i.child}var Fh={dehydrated:null,treeContext:null,retryLane:0};function Uh(n){return{baseLanes:n,cachePool:null,transitions:null}}function jm(n,i,a){var c=i.pendingProps,d=et.current,m=!1,v=(i.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ke(et,d&1),n===null)return dh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Iu(v,c,0,null),n=os(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Uh(a),i.memoizedState=Fh,n):jh(i,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return HE(n,i,v,c,T,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,T=d.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=ai(d,k),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?m=ai(T,m):(m=os(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?Uh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=Fh,c}return m=n.child,n=m.sibling,c=ai(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function jh(n,i){return i=Iu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function cu(n,i,a,c){return c!==null&&fh(c),oo(i,n.child,null,a),n=jh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function HE(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=Vh(Error(t(422))),cu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=Iu({mode:"visible",children:c.children},d,0,null),m=os(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&oo(i,n.child,null,v),i.child.memoizedState=Uh(v),i.memoizedState=Fh,m);if((i.mode&1)===0)return cu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,m=Error(t(419)),c=Vh(m,c,void 0),cu(n,i,v,c)}if(T=(v&n.childLanes)!==0,Yt||T){if(c=St,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Rr(n,d),zn(c,n,d,-1))}return nd(),c=Vh(Error(t(421))),cu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=r0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,cn=Yr(d.nextSibling),un=i,Je=!0,Mn=null,n!==null&&(vn[wn++]=Ar,vn[wn++]=Cr,vn[wn++]=Xi,Ar=n.id,Cr=n.overflow,Xi=i),i=jh(i,c.children),i.flags|=4096,i)}function zm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),yh(n.return,i,a)}function zh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Bm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Ht(n,i,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zm(n,a,i);else if(n.tag===19)zm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ke(et,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&ru(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),zh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ru(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}zh(i,!0,a,null,m);break;case"together":zh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function hu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ns|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ai(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ai(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function WE(n,i,a){switch(i.tag){case 3:Fm(i),so();break;case 5:nm(i);break;case 1:Qt(i.type)&&Kl(i);break;case 4:wh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ke(Zl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ke(et,et.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?jm(n,i,a):(Ke(et,et.current&1),n=Pr(n,i,a),n!==null?n.sibling:null);Ke(et,et.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Bm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(et,et.current),c)break;return null;case 22:case 23:return i.lanes=0,Lm(n,i,a)}return Pr(n,i,a)}var $m,Bh,Hm,Wm;$m=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Bh=function(){},Hm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,es(tr.current);var m=null;switch(a){case"input":d=xi(n,d),c=xi(n,c),m=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),m=[];break;case"textarea":d=Fo(n,d),c=Fo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Hl)}Ho(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in c){var k=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&k!==T&&(k!=null||T!=null))if(U==="style")if(T){for(v in T)!T.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&T[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(m||(m=[]),m.push(U,a)),a=k;else U==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,T=T?T.__html:void 0,k!=null&&T!==k&&(m=m||[]).push(U,k)):U==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(U,""+k):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(k!=null&&U==="onScroll"&&Qe("scroll",n),m||T===k||(m=[])):(m=m||[]).push(U,k))}a&&(m=m||[]).push("style",a);var U=m;(i.updateQueue=U)&&(i.flags|=4)}},Wm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Sa(n,i){if(!Je)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function qE(n,i,a){var c=i.pendingProps;switch(ch(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(i),null;case 1:return Qt(i.type)&&ql(),bt(i),null;case 3:return c=i.stateNode,uo(),Ye(Gt),Ye(Vt),Ih(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Xl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Mn!==null&&(Zh(Mn),Mn=null))),Bh(n,i),bt(i),null;case 5:Eh(i);var d=es(va.current);if(a=i.type,n!==null&&i.stateNode!=null)Hm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return bt(i),null}if(n=es(tr.current),Xl(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[er]=i,c[pa]=m,n=(i.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<ha.length;d++)Qe(ha[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":Ss(c,m),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Qe("invalid",c);break;case"textarea":Cs(c,m),Qe("invalid",c)}Ho(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var T=m[v];v==="children"?typeof T=="string"?c.textContent!==T&&(m.suppressHydrationWarning!==!0&&$l(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(m.suppressHydrationWarning!==!0&&$l(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":fr(c),ml(c,m,!0);break;case"textarea":fr(c),Uo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Hl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ft(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[er]=i,n[pa]=c,$m(n,i,!1,!1),i.stateNode=n;e:{switch(v=Wo(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<ha.length;d++)Qe(ha[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":Ss(n,c),d=xi(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":Cs(n,c),d=Fo(n,c),Qe("invalid",n);break;default:d=c}Ho(a,d),T=d;for(m in T)if(T.hasOwnProperty(m)){var k=T[m];m==="style"?Bo(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&jo(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Ur(n,k):typeof k=="number"&&Ur(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Qe("scroll",n):k!=null&&ue(n,m,k,v))}switch(a){case"input":fr(n),ml(n,c,!1);break;case"textarea":fr(n),Uo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+je(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?mr(n,!!c.multiple,m,!1):c.defaultValue!=null&&mr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Hl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bt(i),null;case 6:if(n&&i.stateNode!=null)Wm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=es(va.current),es(tr.current),Xl(i)){if(c=i.stateNode,a=i.memoizedProps,c[er]=i,(m=c.nodeValue!==a)&&(n=un,n!==null))switch(n.tag){case 3:$l(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$l(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[er]=i,i.stateNode=c}return bt(i),null;case 13:if(Ye(et),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&cn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Gp(),so(),i.flags|=98560,m=!1;else if(m=Xl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[er]=i}else so(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bt(i),m=!1}else Mn!==null&&(Zh(Mn),Mn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(et.current&1)!==0?yt===0&&(yt=3):nd())),i.updateQueue!==null&&(i.flags|=4),bt(i),null);case 4:return uo(),Bh(n,i),n===null&&da(i.stateNode.containerInfo),bt(i),null;case 10:return gh(i.type._context),bt(i),null;case 17:return Qt(i.type)&&ql(),bt(i),null;case 19:if(Ye(et),m=i.memoizedState,m===null)return bt(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)Sa(m,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=ru(n),v!==null){for(i.flags|=128,Sa(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ke(et,et.current&1|2),i.child}n=n.sibling}m.tail!==null&&qe()>po&&(i.flags|=128,c=!0,Sa(m,!1),i.lanes=4194304)}else{if(!c)if(n=ru(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Sa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Je)return bt(i),null}else 2*qe()-m.renderingStartTime>po&&a!==1073741824&&(i.flags|=128,c=!0,Sa(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=qe(),i.sibling=null,a=et.current,Ke(et,c?a&1|2:a&1),i):(bt(i),null);case 22:case 23:return td(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(hn&1073741824)!==0&&(bt(i),i.subtreeFlags&6&&(i.flags|=8192)):bt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function KE(n,i){switch(ch(i),i.tag){case 1:return Qt(i.type)&&ql(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return uo(),Ye(Gt),Ye(Vt),Ih(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Eh(i),null;case 13:if(Ye(et),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));so()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ye(et),null;case 4:return uo(),null;case 10:return gh(i.type._context),null;case 22:case 23:return td(),null;case 24:return null;default:return null}}var du=!1,Mt=!1,GE=typeof WeakSet=="function"?WeakSet:Set,re=null;function ho(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,i,c)}else a.current=null}function $h(n,i,a){try{a()}catch(c){it(n,i,c)}}var qm=!1;function QE(n,i){if(th=Kr,n=Sp(),Kc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,T=-1,k=-1,U=0,K=0,Q=n,W=null;t:for(;;){for(var te;Q!==a||d!==0&&Q.nodeType!==3||(T=v+d),Q!==m||c!==0&&Q.nodeType!==3||(k=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(te=Q.firstChild)!==null;)W=Q,Q=te;for(;;){if(Q===n)break t;if(W===a&&++U===d&&(T=v),W===m&&++K===c&&(k=v),(te=Q.nextSibling)!==null)break;Q=W,W=Q.parentNode}Q=te}a=T===-1||k===-1?null:{start:T,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(nh={focusedElem:n,selectionRange:a},Kr=!1,re=i;re!==null;)if(i=re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,re=n;else for(;re!==null;){i=re;try{var ie=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var oe=ie.memoizedProps,ot=ie.memoizedState,b=i.stateNode,D=b.getSnapshotBeforeUpdate(i.elementType===i.type?oe:Fn(i.type,oe),ot);b.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){it(i,i.return,Y)}if(n=i.sibling,n!==null){n.return=i.return,re=n;break}re=i.return}return ie=qm,qm=!1,ie}function Aa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&$h(i,a,m)}d=d.next}while(d!==c)}}function fu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Hh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Km(n){var i=n.alternate;i!==null&&(n.alternate=null,Km(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[er],delete i[pa],delete i[oh],delete i[DE],delete i[OE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Gm(n){return n.tag===5||n.tag===3||n.tag===4}function Qm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Gm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Hl));else if(c!==4&&(n=n.child,n!==null))for(Wh(n,i,a),n=n.sibling;n!==null;)Wh(n,i,a),n=n.sibling}function qh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(qh(n,i,a),n=n.sibling;n!==null;)qh(n,i,a),n=n.sibling}var Pt=null,Un=!1;function ni(n,i,a){for(a=a.child;a!==null;)Ym(n,i,a),a=a.sibling}function Ym(n,i,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Bi,a)}catch{}switch(a.tag){case 5:Mt||ho(a,i);case 6:var c=Pt,d=Un;Pt=null,ni(n,i,a),Pt=c,Un=d,Pt!==null&&(Un?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Un?(n=Pt,a=a.stateNode,n.nodeType===8?sh(n.parentNode,a):n.nodeType===1&&sh(n,a),Vn(n)):sh(Pt,a.stateNode));break;case 4:c=Pt,d=Un,Pt=a.stateNode.containerInfo,Un=!0,ni(n,i,a),Pt=c,Un=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&$h(a,i,v),d=d.next}while(d!==c)}ni(n,i,a);break;case 1:if(!Mt&&(ho(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){it(a,i,T)}ni(n,i,a);break;case 21:ni(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ni(n,i,a),Mt=c):ni(n,i,a);break;default:ni(n,i,a)}}function Xm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new GE),i.forEach(function(c){var d=i0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function jn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 5:Pt=T.stateNode,Un=!1;break e;case 3:Pt=T.stateNode.containerInfo,Un=!0;break e;case 4:Pt=T.stateNode.containerInfo,Un=!0;break e}T=T.return}if(Pt===null)throw Error(t(160));Ym(m,v,d),Pt=null,Un=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(U){it(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Jm(i,n),i=i.sibling}function Jm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jn(i,n),rr(n),c&4){try{Aa(3,n,n.return),fu(3,n)}catch(oe){it(n,n.return,oe)}try{Aa(5,n,n.return)}catch(oe){it(n,n.return,oe)}}break;case 1:jn(i,n),rr(n),c&512&&a!==null&&ho(a,a.return);break;case 5:if(jn(i,n),rr(n),c&512&&a!==null&&ho(a,a.return),n.flags&32){var d=n.stateNode;try{Ur(d,"")}catch(oe){it(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,T=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{T==="input"&&m.type==="radio"&&m.name!=null&&bo(d,m),Wo(T,v);var U=Wo(T,m);for(v=0;v<k.length;v+=2){var K=k[v],Q=k[v+1];K==="style"?Bo(d,Q):K==="dangerouslySetInnerHTML"?jo(d,Q):K==="children"?Ur(d,Q):ue(d,K,Q,U)}switch(T){case"input":Mo(d,m);break;case"textarea":Rs(d,m);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var te=m.value;te!=null?mr(d,!!m.multiple,te,!1):W!==!!m.multiple&&(m.defaultValue!=null?mr(d,!!m.multiple,m.defaultValue,!0):mr(d,!!m.multiple,m.multiple?[]:"",!1))}d[pa]=m}catch(oe){it(n,n.return,oe)}}break;case 6:if(jn(i,n),rr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(oe){it(n,n.return,oe)}}break;case 3:if(jn(i,n),rr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Vn(i.containerInfo)}catch(oe){it(n,n.return,oe)}break;case 4:jn(i,n),rr(n);break;case 13:jn(i,n),rr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Qh=qe())),c&4&&Xm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(U=Mt)||K,jn(i,n),Mt=U):jn(i,n),rr(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(re=n,K=n.child;K!==null;){for(Q=re=K;re!==null;){switch(W=re,te=W.child,W.tag){case 0:case 11:case 14:case 15:Aa(4,W,W.return);break;case 1:ho(W,W.return);var ie=W.stateNode;if(typeof ie.componentWillUnmount=="function"){c=W,a=W.return;try{i=c,ie.props=i.memoizedProps,ie.state=i.memoizedState,ie.componentWillUnmount()}catch(oe){it(c,a,oe)}}break;case 5:ho(W,W.return);break;case 22:if(W.memoizedState!==null){tg(Q);continue}}te!==null?(te.return=W,re=te):tg(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,U?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(T=Q.stateNode,k=Q.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,T.style.display=zo("display",v))}catch(oe){it(n,n.return,oe)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=U?"":Q.memoizedProps}catch(oe){it(n,n.return,oe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:jn(i,n),rr(n),c&4&&Xm(n);break;case 21:break;default:jn(i,n),rr(n)}}function rr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Gm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ur(d,""),c.flags&=-33);var m=Qm(n);qh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=Qm(n);Wh(n,T,v);break;default:throw Error(t(161))}}catch(k){it(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function YE(n,i,a){re=n,Zm(n)}function Zm(n,i,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||du;if(!v){var T=d.alternate,k=T!==null&&T.memoizedState!==null||Mt;T=du;var U=Mt;if(du=v,(Mt=k)&&!U)for(re=d;re!==null;)v=re,k=v.child,v.tag===22&&v.memoizedState!==null?ng(d):k!==null?(k.return=v,re=k):ng(d);for(;m!==null;)re=m,Zm(m),m=m.sibling;re=d,du=T,Mt=U}eg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,re=m):eg(n)}}function eg(n){for(;re!==null;){var i=re;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||fu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Fn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&tm(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}tm(i,v,a)}break;case 5:var T=i.stateNode;if(a===null&&i.flags&4){a=T;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Vn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&Hh(i)}catch(W){it(i,i.return,W)}}if(i===n){re=null;break}if(a=i.sibling,a!==null){a.return=i.return,re=a;break}re=i.return}}function tg(n){for(;re!==null;){var i=re;if(i===n){re=null;break}var a=i.sibling;if(a!==null){a.return=i.return,re=a;break}re=i.return}}function ng(n){for(;re!==null;){var i=re;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{fu(4,i)}catch(k){it(i,a,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(k){it(i,d,k)}}var m=i.return;try{Hh(i)}catch(k){it(i,m,k)}break;case 5:var v=i.return;try{Hh(i)}catch(k){it(i,v,k)}}}catch(k){it(i,i.return,k)}if(i===n){re=null;break}var T=i.sibling;if(T!==null){T.return=i.return,re=T;break}re=i.return}}var XE=Math.ceil,pu=Ee.ReactCurrentDispatcher,Kh=Ee.ReactCurrentOwner,In=Ee.ReactCurrentBatchConfig,Me=0,St=null,ut=null,Nt=0,hn=0,fo=Xr(0),yt=0,Ca=null,ns=0,mu=0,Gh=0,Ra=null,Xt=null,Qh=0,po=1/0,Nr=null,gu=!1,Yh=null,ri=null,yu=!1,ii=null,_u=0,ka=0,Xh=null,vu=-1,wu=0;function Wt(){return(Me&6)!==0?qe():vu!==-1?vu:vu=qe()}function si(n){return(n.mode&1)===0?1:(Me&2)!==0&&Nt!==0?Nt&-Nt:VE.transition!==null?(wu===0&&(wu=Hi()),wu):(n=Oe,n!==0||(n=window.event,n=n===void 0?16:na(n.type)),n)}function zn(n,i,a,c){if(50<ka)throw ka=0,Xh=null,Error(t(185));$r(n,a,c),((Me&2)===0||n!==St)&&(n===St&&((Me&2)===0&&(mu|=a),yt===4&&oi(n,Nt)),Jt(n,c),a===1&&Me===0&&(i.mode&1)===0&&(po=qe()+500,Gl&&Zr()))}function Jt(n,i){var a=n.callbackNode;_r(n,i);var c=$i(n,n===St?Nt:0);if(c===0)a!==null&&Xo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Xo(a),i===1)n.tag===0?xE(ig.bind(null,n)):$p(ig.bind(null,n)),PE(function(){(Me&6)===0&&Zr()}),a=null;else{switch(Wr(c)){case 1:a=zi;break;case 4:a=jr;break;case 16:a=gn;break;case 536870912:a=wl;break;default:a=gn}a=dg(a,rg.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function rg(n,i){if(vu=-1,wu=0,(Me&6)!==0)throw Error(t(327));var a=n.callbackNode;if(mo()&&n.callbackNode!==a)return null;var c=$i(n,n===St?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Eu(n,c);else{i=c;var d=Me;Me|=2;var m=og();(St!==n||Nt!==i)&&(Nr=null,po=qe()+500,is(n,i));do try{e0();break}catch(T){sg(n,T)}while(!0);mh(),pu.current=m,Me=d,ut!==null?i=0:(St=null,Nt=0,i=yt)}if(i!==0){if(i===2&&(d=on(n),d!==0&&(c=d,i=Jh(n,d))),i===1)throw a=Ca,is(n,0),oi(n,c),Jt(n,qe()),a;if(i===6)oi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!JE(d)&&(i=Eu(n,c),i===2&&(m=on(n),m!==0&&(c=m,i=Jh(n,m))),i===1))throw a=Ca,is(n,0),oi(n,c),Jt(n,qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ss(n,Xt,Nr);break;case 3:if(oi(n,c),(c&130023424)===c&&(i=Qh+500-qe(),10<i)){if($i(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=ih(ss.bind(null,n,Xt,Nr),i);break}ss(n,Xt,Nr);break;case 4:if(oi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Bt(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*XE(c/1960))-c,10<c){n.timeoutHandle=ih(ss.bind(null,n,Xt,Nr),c);break}ss(n,Xt,Nr);break;case 5:ss(n,Xt,Nr);break;default:throw Error(t(329))}}}return Jt(n,qe()),n.callbackNode===a?rg.bind(null,n):null}function Jh(n,i){var a=Ra;return n.current.memoizedState.isDehydrated&&(is(n,i).flags|=256),n=Eu(n,i),n!==2&&(i=Xt,Xt=a,i!==null&&Zh(i)),n}function Zh(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function JE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!bn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function oi(n,i){for(i&=~Gh,i&=~mu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Bt(i),c=1<<a;n[a]=-1,i&=~c}}function ig(n){if((Me&6)!==0)throw Error(t(327));mo();var i=$i(n,0);if((i&1)===0)return Jt(n,qe()),null;var a=Eu(n,i);if(n.tag!==0&&a===2){var c=on(n);c!==0&&(i=c,a=Jh(n,c))}if(a===1)throw a=Ca,is(n,0),oi(n,i),Jt(n,qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ss(n,Xt,Nr),Jt(n,qe()),null}function ed(n,i){var a=Me;Me|=1;try{return n(i)}finally{Me=a,Me===0&&(po=qe()+500,Gl&&Zr())}}function rs(n){ii!==null&&ii.tag===0&&(Me&6)===0&&mo();var i=Me;Me|=1;var a=In.transition,c=Oe;try{if(In.transition=null,Oe=1,n)return n()}finally{Oe=c,In.transition=a,Me=i,(Me&6)===0&&Zr()}}function td(){hn=fo.current,Ye(fo)}function is(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,kE(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(ch(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ql();break;case 3:uo(),Ye(Gt),Ye(Vt),Ih();break;case 5:Eh(c);break;case 4:uo();break;case 13:Ye(et);break;case 19:Ye(et);break;case 10:gh(c.type._context);break;case 22:case 23:td()}a=a.return}if(St=n,ut=n=ai(n.current,null),Nt=hn=i,yt=0,Ca=null,Gh=mu=ns=0,Xt=Ra=null,Zi!==null){for(i=0;i<Zi.length;i++)if(a=Zi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Zi=null}return n}function sg(n,i){do{var a=ut;try{if(mh(),iu.current=lu,su){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}su=!1}if(ts=0,It=gt=tt=null,wa=!1,Ea=0,Kh.current=null,a===null||a.return===null){yt=1,Ca=i,ut=null;break}e:{var m=n,v=a.return,T=a,k=i;if(i=Nt,T.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var U=k,K=T,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var W=K.alternate;W?(K.updateQueue=W.updateQueue,K.memoizedState=W.memoizedState,K.lanes=W.lanes):(K.updateQueue=null,K.memoizedState=null)}var te=Nm(v);if(te!==null){te.flags&=-257,Dm(te,v,T,m,i),te.mode&1&&Pm(m,U,i),i=te,k=U;var ie=i.updateQueue;if(ie===null){var oe=new Set;oe.add(k),i.updateQueue=oe}else ie.add(k);break e}else{if((i&1)===0){Pm(m,U,i),nd();break e}k=Error(t(426))}}else if(Je&&T.mode&1){var ot=Nm(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),Dm(ot,v,T,m,i),fh(co(k,T));break e}}m=k=co(k,T),yt!==4&&(yt=2),Ra===null?Ra=[m]:Ra.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var b=Rm(m,k,i);em(m,b);break e;case 1:T=k;var D=m.type,F=m.stateNode;if((m.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ri===null||!ri.has(F)))){m.flags|=65536,i&=-i,m.lanes|=i;var Y=km(m,T,i);em(m,Y);break e}}m=m.return}while(m!==null)}lg(a)}catch(ae){i=ae,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function og(){var n=pu.current;return pu.current=lu,n===null?lu:n}function nd(){(yt===0||yt===3||yt===2)&&(yt=4),St===null||(ns&268435455)===0&&(mu&268435455)===0||oi(St,Nt)}function Eu(n,i){var a=Me;Me|=2;var c=og();(St!==n||Nt!==i)&&(Nr=null,is(n,i));do try{ZE();break}catch(d){sg(n,d)}while(!0);if(mh(),Me=a,pu.current=c,ut!==null)throw Error(t(261));return St=null,Nt=0,yt}function ZE(){for(;ut!==null;)ag(ut)}function e0(){for(;ut!==null&&!_l();)ag(ut)}function ag(n){var i=hg(n.alternate,n,hn);n.memoizedProps=n.pendingProps,i===null?lg(n):ut=i,Kh.current=null}function lg(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=qE(a,i,hn),a!==null){ut=a;return}}else{if(a=KE(a,i),a!==null){a.flags&=32767,ut=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yt=6,ut=null;return}}if(i=i.sibling,i!==null){ut=i;return}ut=i=n}while(i!==null);yt===0&&(yt=5)}function ss(n,i,a){var c=Oe,d=In.transition;try{In.transition=null,Oe=1,t0(n,i,a,c)}finally{In.transition=d,Oe=c}return null}function t0(n,i,a,c){do mo();while(ii!==null);if((Me&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(He(n,m),n===St&&(ut=St=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||yu||(yu=!0,dg(gn,function(){return mo(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=In.transition,In.transition=null;var v=Oe;Oe=1;var T=Me;Me|=4,Kh.current=null,QE(n,a),Jm(a,n),EE(nh),Kr=!!th,nh=th=null,n.current=a,YE(a),Uc(),Me=T,Oe=v,In.transition=m}else n.current=a;if(yu&&(yu=!1,ii=n,_u=d),m=n.pendingLanes,m===0&&(ri=null),El(a.stateNode),Jt(n,qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(gu)throw gu=!1,n=Yh,Yh=null,n;return(_u&1)!==0&&n.tag!==0&&mo(),m=n.pendingLanes,(m&1)!==0?n===Xh?ka++:(ka=0,Xh=n):ka=0,Zr(),null}function mo(){if(ii!==null){var n=Wr(_u),i=In.transition,a=Oe;try{if(In.transition=null,Oe=16>n?16:n,ii===null)var c=!1;else{if(n=ii,ii=null,_u=0,(Me&6)!==0)throw Error(t(331));var d=Me;for(Me|=4,re=n.current;re!==null;){var m=re,v=m.child;if((re.flags&16)!==0){var T=m.deletions;if(T!==null){for(var k=0;k<T.length;k++){var U=T[k];for(re=U;re!==null;){var K=re;switch(K.tag){case 0:case 11:case 15:Aa(8,K,m)}var Q=K.child;if(Q!==null)Q.return=K,re=Q;else for(;re!==null;){K=re;var W=K.sibling,te=K.return;if(Km(K),K===U){re=null;break}if(W!==null){W.return=te,re=W;break}re=te}}}var ie=m.alternate;if(ie!==null){var oe=ie.child;if(oe!==null){ie.child=null;do{var ot=oe.sibling;oe.sibling=null,oe=ot}while(oe!==null)}}re=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,re=v;else e:for(;re!==null;){if(m=re,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Aa(9,m,m.return)}var b=m.sibling;if(b!==null){b.return=m.return,re=b;break e}re=m.return}}var D=n.current;for(re=D;re!==null;){v=re;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,re=F;else e:for(v=D;re!==null;){if(T=re,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:fu(9,T)}}catch(ae){it(T,T.return,ae)}if(T===v){re=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,re=Y;break e}re=T.return}}if(Me=d,Zr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Bi,n)}catch{}c=!0}return c}finally{Oe=a,In.transition=i}}return!1}function ug(n,i,a){i=co(a,i),i=Rm(n,i,1),n=ti(n,i,1),i=Wt(),n!==null&&($r(n,1,i),Jt(n,i))}function it(n,i,a){if(n.tag===3)ug(n,n,a);else for(;i!==null;){if(i.tag===3){ug(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ri===null||!ri.has(c))){n=co(a,n),n=km(i,n,1),i=ti(i,n,1),n=Wt(),i!==null&&($r(i,1,n),Jt(i,n));break}}i=i.return}}function n0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Wt(),n.pingedLanes|=n.suspendedLanes&a,St===n&&(Nt&a)===a&&(yt===4||yt===3&&(Nt&130023424)===Nt&&500>qe()-Qh?is(n,0):Gh|=a),Jt(n,i)}function cg(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ms,Ms<<=1,(Ms&130023424)===0&&(Ms=4194304)));var a=Wt();n=Rr(n,i),n!==null&&($r(n,i,a),Jt(n,a))}function r0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),cg(n,a)}function i0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),cg(n,a)}var hg;hg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gt.current)Yt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yt=!1,WE(n,i,a);Yt=(n.flags&131072)!==0}else Yt=!1,Je&&(i.flags&1048576)!==0&&Hp(i,Yl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;hu(n,i),n=i.pendingProps;var d=no(i,Vt.current);lo(i,a),d=Ch(null,i,c,n,d,a);var m=Rh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Qt(c)?(m=!0,Kl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,vh(i),d.updater=uu,i.stateNode=d,d._reactInternals=i,xh(i,c,n,a),i=Mh(null,i,c,!0,m,a)):(i.tag=0,Je&&m&&uh(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(hu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=o0(c),n=Fn(c,n),d){case 0:i=bh(null,i,c,n,a);break e;case 1:i=Mm(null,i,c,n,a);break e;case 11:i=Om(null,i,c,n,a);break e;case 14:i=xm(null,i,c,Fn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Fn(c,d),bh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Fn(c,d),Mm(n,i,c,d,a);case 3:e:{if(Fm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Zp(n,i),nu(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=co(Error(t(423)),i),i=Um(n,i,c,a,d);break e}else if(c!==d){d=co(Error(t(424)),i),i=Um(n,i,c,a,d);break e}else for(cn=Yr(i.stateNode.containerInfo.firstChild),un=i,Je=!0,Mn=null,a=Xp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(so(),c===d){i=Pr(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return nm(i),n===null&&dh(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,rh(c,d)?v=null:m!==null&&rh(c,m)&&(i.flags|=32),bm(n,i),Ht(n,i,v,a),i.child;case 6:return n===null&&dh(i),null;case 13:return jm(n,i,a);case 4:return wh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=oo(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Fn(c,d),Om(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,Ke(Zl,c._currentValue),c._currentValue=v,m!==null)if(bn(m.value,v)){if(m.children===d.children&&!Gt.current){i=Pr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var T=m.dependencies;if(T!==null){v=m.child;for(var k=T.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=kr(-1,a&-a),k.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?k.next=k:(k.next=K.next,K.next=k),U.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),yh(m.return,a,i),T.lanes|=a;break}k=k.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),yh(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,lo(i,a),d=En(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=Fn(c,i.pendingProps),d=Fn(c.type,d),xm(n,i,c,d,a);case 15:return Vm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Fn(c,d),hu(n,i),i.tag=1,Qt(c)?(n=!0,Kl(i)):n=!1,lo(i,a),Am(i,c,d),xh(i,c,d,a),Mh(null,i,c,!0,n,a);case 19:return Bm(n,i,a);case 22:return Lm(n,i,a)}throw Error(t(156,i.tag))};function dg(n,i){return Ls(n,i)}function s0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(n,i,a,c){return new s0(n,i,a,c)}function rd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function o0(n){if(typeof n=="function")return rd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===Ae)return 14}return 2}function ai(n,i){var a=n.alternate;return a===null?(a=Sn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Tu(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")rd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case P:return os(a.children,d,m,i);case I:v=8,d|=8;break;case R:return n=Sn(12,a,i,d|2),n.elementType=R,n.lanes=m,n;case A:return n=Sn(13,a,i,d),n.elementType=A,n.lanes=m,n;case Ze:return n=Sn(19,a,i,d),n.elementType=Ze,n.lanes=m,n;case de:return Iu(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:v=10;break e;case O:v=9;break e;case V:v=11;break e;case Ae:v=14;break e;case fe:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Sn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function os(n,i,a,c){return n=Sn(7,n,c,i),n.lanes=a,n}function Iu(n,i,a,c){return n=Sn(22,n,c,i),n.elementType=de,n.lanes=a,n.stateNode={isHidden:!1},n}function id(n,i,a){return n=Sn(6,n,null,i),n.lanes=a,n}function sd(n,i,a){return i=Sn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function a0(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Br(0),this.expirationTimes=Br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function od(n,i,a,c,d,m,v,T,k){return n=new a0(n,i,a,T,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Sn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},vh(m),n}function l0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function fg(n){if(!n)return Jr;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Qt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return zp(n,a,i)}return i}function pg(n,i,a,c,d,m,v,T,k){return n=od(a,c,!0,n,d,m,v,T,k),n.context=fg(null),a=n.current,c=Wt(),d=si(a),m=kr(c,d),m.callback=i??null,ti(a,m,d),n.current.lanes=d,$r(n,d,c),Jt(n,c),n}function Su(n,i,a,c){var d=i.current,m=Wt(),v=si(d);return a=fg(a),i.context===null?i.context=a:i.pendingContext=a,i=kr(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ti(d,i,v),n!==null&&(zn(n,d,v,m),tu(n,d,v)),v}function Au(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ad(n,i){mg(n,i),(n=n.alternate)&&mg(n,i)}function u0(){return null}var gg=typeof reportError=="function"?reportError:function(n){console.error(n)};function ld(n){this._internalRoot=n}Cu.prototype.render=ld.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Su(n,i,null,null)},Cu.prototype.unmount=ld.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;rs(function(){Su(null,n,null,null)}),i[Ir]=null}};function Cu(n){this._internalRoot=n}Cu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Cl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Yn.length&&i!==0&&i<Yn[a].priority;a++);Yn.splice(a,0,n),a===0&&Pl(n)}};function ud(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function yg(){}function c0(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var U=Au(v);m.call(U)}}var v=pg(i,c,n,0,null,!1,!1,"",yg);return n._reactRootContainer=v,n[Ir]=v.current,da(n.nodeType===8?n.parentNode:n),rs(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=Au(k);T.call(U)}}var k=od(n,0,!1,null,null,!1,!1,"",yg);return n._reactRootContainer=k,n[Ir]=k.current,da(n.nodeType===8?n.parentNode:n),rs(function(){Su(i,k,a,c)}),k}function ku(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var T=d;d=function(){var k=Au(v);T.call(k)}}Su(i,v,n,d)}else v=c0(a,i,n,d,c);return Au(v)}Sl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=zr(i.pendingLanes);a!==0&&(Hr(i,a|1),Jt(i,qe()),(Me&6)===0&&(po=qe()+500,Zr()))}break;case 13:rs(function(){var c=Rr(n,1);if(c!==null){var d=Wt();zn(c,n,1,d)}}),ad(n,1)}},Fs=function(n){if(n.tag===13){var i=Rr(n,134217728);if(i!==null){var a=Wt();zn(i,n,134217728,a)}ad(n,134217728)}},Al=function(n){if(n.tag===13){var i=si(n),a=Rr(n,i);if(a!==null){var c=Wt();zn(a,n,i,c)}ad(n,i)}},Cl=function(){return Oe},Rl=function(n,i){var a=Oe;try{return Oe=n,i()}finally{Oe=a}},Ps=function(n,i,a){switch(i){case"input":if(Mo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Wl(c);if(!d)throw Error(t(90));Is(c),Mo(c,d)}}}break;case"textarea":Rs(n,a);break;case"select":i=a.value,i!=null&&mr(n,!!a.multiple,i,!1)}},Mi=ed,Ko=rs;var h0={usingClientEntryPoint:!1,Events:[ma,eo,Wl,Gn,qo,ed]},Pa={findFiberByHostInstance:Qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d0={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Yo(n),n===null?null:n.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||u0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{Bi=Pu.inject(d0),sn=Pu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h0,Zt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(i))throw Error(t(200));return l0(n,i,null,a)},Zt.createRoot=function(n,i){if(!ud(n))throw Error(t(299));var a=!1,c="",d=gg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=od(n,1,!1,null,null,a,!1,c,d),n[Ir]=i.current,da(n.nodeType===8?n.parentNode:n),new ld(i)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Yo(i),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return rs(n)},Zt.hydrate=function(n,i,a){if(!Ru(i))throw Error(t(200));return ku(null,n,i,!0,a)},Zt.hydrateRoot=function(n,i,a){if(!ud(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=gg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=pg(i,null,n,1,a??null,d,!1,m,v),n[Ir]=i.current,da(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Cu(i)},Zt.render=function(n,i,a){if(!Ru(i))throw Error(t(200));return ku(null,n,i,!1,a)},Zt.unmountComponentAtNode=function(n){if(!Ru(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){ku(null,null,n,!1,function(){n._reactRootContainer=null,n[Ir]=null})}),!0):!1},Zt.unstable_batchedUpdates=ed,Zt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ru(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ku(n,i,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Ag;function E0(){if(Ag)return dd.exports;Ag=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),dd.exports=w0(),dd.exports}var Cg;function T0(){if(Cg)return Nu;Cg=1;var r=E0();return Nu.createRoot=r.createRoot,Nu.hydrateRoot=r.hydrateRoot,Nu}var I0=T0();const S0=d_(I0),A0=()=>{};var Rg={};/**
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
 */const f_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},C0=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},p_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=l>>2,S=(l&3)<<4|f>>4;let C=(f&15)<<2|_>>6,M=_&63;g||(M=64,h||(C=64)),s.push(t[E],t[S],t[C],t[M])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(f_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):C0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const S=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||S==null)throw new R0;const C=l<<2|f>>4;if(s.push(C),_!==64){const M=f<<4&240|_>>2;if(s.push(M),S!==64){const z=_<<6&192|S;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class R0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k0=function(r){const e=f_(r);return p_.encodeByteArray(e,!0)},Ku=function(r){return k0(r).replace(/\./g,"")},m_=function(r){try{return p_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function P0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const N0=()=>P0().__FIREBASE_DEFAULTS__,D0=()=>{if(typeof process>"u"||typeof Rg>"u")return;const r=Rg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},O0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&m_(r[1]);return e&&JSON.parse(e)},pc=()=>{try{return A0()||N0()||D0()||O0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},g_=r=>{var e,t;return(t=(e=pc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},y_=r=>{const e=g_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},__=()=>{var r;return(r=pc())===null||r===void 0?void 0:r.config},v_=r=>{var e;return(e=pc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class x0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function _s(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hf(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function V0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ku(JSON.stringify(t)),Ku(JSON.stringify(h)),""].join(".")}const Ma={};function L0(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ma))Ma[e]?r.emulator.push(e):r.prod.push(e);return r}function b0(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let kg=!1;function df(r,e){if(typeof window>"u"||typeof document>"u"||!_s(window.location.host)||Ma[r]===e||Ma[r]||kg)return;Ma[r]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",l=L0().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function f(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,M){C.setAttribute("width","24"),C.setAttribute("id",M),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{kg=!0,h()},C}function E(C,M){C.setAttribute("id",M),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function S(){const C=b0(s),M=t("text"),z=document.getElementById(M)||document.createElement("span"),G=t("learnmore"),B=document.getElementById(G)||document.createElement("a"),pe=t("preprendIcon"),le=document.getElementById(pe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ue=C.element;f(ue),E(B,G);const Ee=_();g(le,pe),ue.append(le,z,B,Ee),document.body.appendChild(ue)}l?(z.innerText="Preview backend disconnected.",le.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",M)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function M0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function F0(){var r;const e=(r=pc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function U0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ff(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function j0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z0(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function B0(){return!F0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pf(){try{return typeof indexedDB=="object"}catch{return!1}}function mf(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function w_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const $0="FirebaseError";class qn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=$0,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?H0(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new qn(o,f,s)}}function H0(r,e){return r.replace(W0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const W0=/\{\$([^}]+)}/g;function q0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function vi(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Pg(l)&&Pg(h)){if(!vi(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Pg(r){return r!==null&&typeof r=="object"}/**
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
 */function rl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Da(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Oa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function K0(r,e){const t=new G0(r,e);return t.subscribe.bind(t)}class G0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Q0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=md),o.error===void 0&&(o.error=md),o.complete===void 0&&(o.complete=md);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function md(){}/**
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
 */const Y0=1e3,X0=2,J0=14400*1e3,Z0=.5;function Ng(r,e=Y0,t=X0){const s=e*Math.pow(t,r),o=Math.round(Z0*s*(Math.random()-.5)*2);return Math.min(J0,s+o)}/**
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
 */function dt(r){return r&&r._delegate?r._delegate:r}class Cn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ls="[DEFAULT]";/**
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
 */class eT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new x0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nT(e))try{this.getOrInitializeService({instanceIdentifier:ls})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ls){return this.instances.has(e)}getOptions(e=ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ls){return this.component?this.component.multipleInstances?e:ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tT(r){return r===ls?void 0:r}function nT(r){return r.instantiationMode==="EAGER"}/**
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
 */class rT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new eT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ne||(Ne={}));const iT={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},sT=Ne.INFO,oT={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},aT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=oT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mc{constructor(e){this.name=e,this._logLevel=sT,this._logHandler=aT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const lT=(r,e)=>e.some(t=>r instanceof t);let Dg,Og;function uT(){return Dg||(Dg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cT(){return Og||(Og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const E_=new WeakMap,Dd=new WeakMap,T_=new WeakMap,gd=new WeakMap,gf=new WeakMap;function hT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(mi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&E_.set(t,r)}).catch(()=>{}),gf.set(e,r),e}function dT(r){if(Dd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Dd.set(r,e)}let Od={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Dd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||T_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function fT(r){Od=r(Od)}function pT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(yd(this),e,...t);return T_.set(s,e.sort?e.sort():[e]),mi(s)}:cT().includes(r)?function(...e){return r.apply(yd(this),e),mi(E_.get(this))}:function(...e){return mi(r.apply(yd(this),e))}}function mT(r){return typeof r=="function"?pT(r):(r instanceof IDBTransaction&&dT(r),lT(r,uT())?new Proxy(r,Od):r)}function mi(r){if(r instanceof IDBRequest)return hT(r);if(gd.has(r))return gd.get(r);const e=mT(r);return e!==r&&(gd.set(r,e),gf.set(e,r)),e}const yd=r=>gf.get(r);function I_(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=mi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(mi(h.result),g.oldVersion,g.newVersion,mi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const gT=["get","getKey","getAll","getAllKeys","count"],yT=["put","add","delete","clear"],_d=new Map;function xg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(_d.get(e))return _d.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=yT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||gT.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return _d.set(e,l),l}fT(r=>({...r,get:(e,t,s)=>xg(e,t)||r.get(e,t,s),has:(e,t)=>!!xg(e,t)||r.has(e,t)}));/**
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
 */class _T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function vT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xd="@firebase/app",Vg="0.13.2";/**
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
 */const Vr=new mc("@firebase/app"),wT="@firebase/app-compat",ET="@firebase/analytics-compat",TT="@firebase/analytics",IT="@firebase/app-check-compat",ST="@firebase/app-check",AT="@firebase/auth",CT="@firebase/auth-compat",RT="@firebase/database",kT="@firebase/data-connect",PT="@firebase/database-compat",NT="@firebase/functions",DT="@firebase/functions-compat",OT="@firebase/installations",xT="@firebase/installations-compat",VT="@firebase/messaging",LT="@firebase/messaging-compat",bT="@firebase/performance",MT="@firebase/performance-compat",FT="@firebase/remote-config",UT="@firebase/remote-config-compat",jT="@firebase/storage",zT="@firebase/storage-compat",BT="@firebase/firestore",$T="@firebase/ai",HT="@firebase/firestore-compat",WT="firebase",qT="11.10.0";/**
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
 */const Vd="[DEFAULT]",KT={[xd]:"fire-core",[wT]:"fire-core-compat",[TT]:"fire-analytics",[ET]:"fire-analytics-compat",[ST]:"fire-app-check",[IT]:"fire-app-check-compat",[AT]:"fire-auth",[CT]:"fire-auth-compat",[RT]:"fire-rtdb",[kT]:"fire-data-connect",[PT]:"fire-rtdb-compat",[NT]:"fire-fn",[DT]:"fire-fn-compat",[OT]:"fire-iid",[xT]:"fire-iid-compat",[VT]:"fire-fcm",[LT]:"fire-fcm-compat",[bT]:"fire-perf",[MT]:"fire-perf-compat",[FT]:"fire-rc",[UT]:"fire-rc-compat",[jT]:"fire-gcs",[zT]:"fire-gcs-compat",[BT]:"fire-fst",[HT]:"fire-fst-compat",[$T]:"fire-vertex","fire-js":"fire-js",[WT]:"fire-js-all"};/**
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
 */const Gu=new Map,GT=new Map,Ld=new Map;function Lg(r,e){try{r.container.addComponent(e)}catch(t){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Hn(r){const e=r.name;if(Ld.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;Ld.set(e,r);for(const t of Gu.values())Lg(t,r);for(const t of GT.values())Lg(t,r);return!0}function ki(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function dn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const QT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new vs("app","Firebase",QT);/**
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
 */class YT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
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
 */const No=qT;function S_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(t||(t=__()),!t)throw gi.create("no-options");const l=Gu.get(o);if(l){if(vi(t,l.options)&&vi(s,l.config))return l;throw gi.create("duplicate-app",{appName:o})}const h=new rT(o);for(const g of Ld.values())h.addComponent(g);const f=new YT(t,s,h);return Gu.set(o,f),f}function gc(r=Vd){const e=Gu.get(r);if(!e&&r===Vd&&__())return S_();if(!e)throw gi.create("no-app",{appName:r});return e}function nn(r,e,t){var s;let o=(s=KT[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(f.join(" "));return}Hn(new Cn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const XT="firebase-heartbeat-database",JT=1,Wa="firebase-heartbeat-store";let vd=null;function A_(){return vd||(vd=I_(XT,JT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Wa)}catch(t){console.warn(t)}}}}).catch(r=>{throw gi.create("idb-open",{originalErrorMessage:r.message})})),vd}async function ZT(r){try{const t=(await A_()).transaction(Wa),s=await t.objectStore(Wa).get(C_(r));return await t.done,s}catch(e){if(e instanceof qn)Vr.warn(e.message);else{const t=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(t.message)}}}async function bg(r,e){try{const s=(await A_()).transaction(Wa,"readwrite");await s.objectStore(Wa).put(e,C_(r)),await s.done}catch(t){if(t instanceof qn)Vr.warn(t.message);else{const s=gi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(s.message)}}}function C_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const eI=1024,tI=30;class nI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new iI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Mg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>tI){const h=sI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Vr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mg(),{heartbeatsToSend:s,unsentEntries:o}=rI(this._heartbeatsCache.heartbeats),l=Ku(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Vr.warn(t),""}}}function Mg(){return new Date().toISOString().substring(0,10)}function rI(r,e=eI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Fg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Fg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class iI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pf()?mf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ZT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return bg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return bg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Fg(r){return Ku(JSON.stringify({version:2,heartbeats:r})).length}function sI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function oI(r){Hn(new Cn("platform-logger",e=>new _T(e),"PRIVATE")),Hn(new Cn("heartbeat",e=>new nI(e),"PRIVATE")),nn(xd,Vg,r),nn(xd,Vg,"esm2017"),nn("fire-js","")}oI("");function yf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function R_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aI=R_,k_=new vs("auth","Firebase",R_());/**
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
 */const Qu=new mc("@firebase/auth");function lI(r,...e){Qu.logLevel<=Ne.WARN&&Qu.warn(`Auth (${No}): ${r}`,...e)}function Mu(r,...e){Qu.logLevel<=Ne.ERROR&&Qu.error(`Auth (${No}): ${r}`,...e)}/**
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
 */function Wn(r,...e){throw _f(r,...e)}function sr(r,...e){return _f(r,...e)}function P_(r,e,t){const s=Object.assign(Object.assign({},aI()),{[e]:t});return new vs("auth","Firebase",s).create(e,{appName:r.name})}function xr(r){return P_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _f(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return k_.create(r,...e)}function _e(r,e,...t){if(!r)throw _f(e,...t)}function Dr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Mu(e),new Error(e)}function Lr(r,e){r||Dr(e)}/**
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
 */function bd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function uI(){return Ug()==="http:"||Ug()==="https:"}function Ug(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function cI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uI()||ff()||"connection"in navigator)?navigator.onLine:!0}function hI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class il{constructor(e,t){this.shortDelay=e,this.longDelay=t,Lr(t>e,"Short delay should be less than long delay!"),this.isMobile=M0()||j0()}get(){return cI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vf(r,e){Lr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class N_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pI=new il(3e4,6e4);function Pi(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ni(r,e,t,s,o={}){return D_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=rl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return U0()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&_s(r.emulatorConfig.host)&&(_.credentials="include"),N_.fetch()(await O_(r,r.config.apiHost,t,f),_)})}async function D_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},dI),e);try{const o=new gI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Du(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Du(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Du(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Du(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw P_(r,E,_);Wn(r,E)}}catch(o){if(o instanceof qn)throw o;Wn(r,"network-request-failed",{message:String(o)})}}async function sl(r,e,t,s,o={}){const l=await Ni(r,e,t,s,o);return"mfaPendingCredential"in l&&Wn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function O_(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?vf(r.config,o):`${r.config.apiScheme}://${o}`;return fI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function mI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(sr(this.auth,"network-request-failed")),pI.get())})}}function Du(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=sr(r,e,s);return o.customData._tokenResponse=t,o}function jg(r){return r!==void 0&&r.enterprise!==void 0}class yI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _I(r,e){return Ni(r,"GET","/v2/recaptchaConfig",Pi(r,e))}/**
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
 */async function vI(r,e){return Ni(r,"POST","/v1/accounts:delete",e)}async function Yu(r,e){return Ni(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wI(r,e=!1){const t=dt(r),s=await t.getIdToken(e),o=wf(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Fa(wd(o.auth_time)),issuedAtTime:Fa(wd(o.iat)),expirationTime:Fa(wd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function wd(r){return Number(r)*1e3}function wf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Mu("JWT malformed, contained fewer than 3 sections"),null;try{const o=m_(t);return o?JSON.parse(o):(Mu("Failed to decode base64 JWT payload"),null)}catch(o){return Mu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function zg(r){const e=wf(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof qn&&EI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function EI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class TI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Md{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await qa(r,Yu(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?x_(l.providerUserInfo):[],f=SI(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),E=g?_:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Md(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(r,S)}async function II(r){const e=dt(r);await Xu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function x_(r){return r.map(e=>{var{providerId:t}=e,s=yf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function AI(r,e){const t=await D_(r,{},async()=>{const s=rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await O_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:s};return r.emulatorConfig&&_s(r.emulatorConfig.host)&&(g.credentials="include"),N_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function CI(r,e){return Ni(r,"POST","/v2/accounts:revokeToken",Pi(r,e))}/**
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
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=zg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await AI(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Eo;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
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
 */function ui(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=yf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Md(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await qa(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wI(this,e)}reload(){return II(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Xu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await qa(this,vI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,g,_,E;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,M=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,z=(h=t.photoURL)!==null&&h!==void 0?h:void 0,G=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,pe=(_=t.createdAt)!==null&&_!==void 0?_:void 0,le=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ue,emailVerified:Ee,isAnonymous:be,providerData:Se,stsTokenManager:P}=t;_e(ue&&P,e,"internal-error");const I=Eo.fromJSON(this.name,P);_e(typeof ue=="string",e,"internal-error"),ui(S,e.name),ui(C,e.name),_e(typeof Ee=="boolean",e,"internal-error"),_e(typeof be=="boolean",e,"internal-error"),ui(M,e.name),ui(z,e.name),ui(G,e.name),ui(B,e.name),ui(pe,e.name),ui(le,e.name);const R=new Bn({uid:ue,auth:e,email:C,emailVerified:Ee,displayName:S,isAnonymous:be,photoURL:z,phoneNumber:M,tenantId:G,stsTokenManager:I,createdAt:pe,lastLoginAt:le});return Se&&Array.isArray(Se)&&(R.providerData=Se.map(N=>Object.assign({},N))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new Eo;o.updateFromServerResponse(t);const l=new Bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Xu(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?x_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Eo;f.updateFromIdToken(s);const g=new Bn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Md(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
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
 */const Bg=new Map;function Or(r){Lr(r instanceof Function,"Expected a class definition");let e=Bg.get(r);return e?(Lr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Bg.set(r,e),e)}/**
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
 */class V_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}V_.type="NONE";const $g=V_;/**
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
 */function Fu(r,e,t){return`firebase:${r}:${e}:${t}`}class To{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Fu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Fu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Yu(this.auth,{idToken:e}).catch(()=>{});return t?Bn._fromGetAccountInfoResponse(this.auth,t,e):null}return Bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new To(Or($g),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Or($g);const h=Fu(s,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const E=await _._get(h);if(E){let S;if(typeof E=="string"){const C=await Yu(e,{idToken:E}).catch(()=>{});if(!C)break;S=await Bn._fromGetAccountInfoResponse(e,C,E)}else S=Bn._fromJSON(e,E);_!==l&&(f=S),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new To(l,e,s):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new To(l,e,s))}}/**
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
 */function Hg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(F_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(L_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(j_(e))return"Blackberry";if(z_(e))return"Webos";if(b_(e))return"Safari";if((e.includes("chrome/")||M_(e))&&!e.includes("edge/"))return"Chrome";if(U_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function L_(r=zt()){return/firefox\//i.test(r)}function b_(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function M_(r=zt()){return/crios\//i.test(r)}function F_(r=zt()){return/iemobile/i.test(r)}function U_(r=zt()){return/android/i.test(r)}function j_(r=zt()){return/blackberry/i.test(r)}function z_(r=zt()){return/webos/i.test(r)}function Ef(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function RI(r=zt()){var e;return Ef(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kI(){return z0()&&document.documentMode===10}function B_(r=zt()){return Ef(r)||U_(r)||z_(r)||j_(r)||/windows phone/i.test(r)||F_(r)}/**
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
 */function $_(r,e=[]){let t;switch(r){case"Browser":t=Hg(zt());break;case"Worker":t=`${Hg(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${No}/${s}`}/**
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
 */class PI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function NI(r,e={}){return Ni(r,"GET","/v2/passwordPolicy",Pi(r,e))}/**
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
 */const DI=6;class OI{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:DI,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class xI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new PI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=k_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Or(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Yu(this,{idToken:e}),s=await Bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(dn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(xr(this));const t=e?dt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NI(this),t=new OI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await CI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Or(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[Or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&lI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ws(r){return dt(r)}class Wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=K0(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VI(r){yc=r}function H_(r){return yc.loadJS(r)}function LI(){return yc.recaptchaEnterpriseScript}function bI(){return yc.gapiScript}function MI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class FI{constructor(){this.enterprise=new UI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class UI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const jI="recaptcha-enterprise",W_="NO_RECAPTCHA";class zI{constructor(e){this.type=jI,this.auth=ws(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{_I(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new yI(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;jg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(W_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new FI().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&jg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=LI();g.length!==0&&(g+=f),H_(g).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function qg(r,e,t,s=!1,o=!1){const l=new zI(r);let h;if(o)h=W_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Fd(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await qg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await qg(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
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
 */function BI(r,e){const t=ki(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(vi(l,e??{}))return o;Wn(o,"already-initialized")}return t.initialize({options:e})}function $I(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Or);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function HI(r,e,t){const s=ws(r);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=q_(e),{host:h,port:f}=WI(e),g=f===null?"":`:${f}`,_={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(vi(_,s.config.emulator)&&vi(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,_s(h)?(hf(`${l}//${h}${g}`),df("Auth",!0)):qI()}function q_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function WI(r){const e=q_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Kg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Kg(h)}}}function Kg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function qI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Tf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,t){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}async function KI(r,e){return Ni(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function GI(r,e){return sl(r,"POST","/v1/accounts:signInWithPassword",Pi(r,e))}/**
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
 */async function QI(r,e){return sl(r,"POST","/v1/accounts:signInWithEmailLink",Pi(r,e))}async function YI(r,e){return sl(r,"POST","/v1/accounts:signInWithEmailLink",Pi(r,e))}/**
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
 */class Ka extends Tf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ka(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ka(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fd(e,t,"signInWithPassword",GI);case"emailLink":return QI(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fd(e,s,"signUpPassword",KI);case"emailLink":return YI(e,{idToken:t,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Io(r,e){return sl(r,"POST","/v1/accounts:signInWithIdp",Pi(r,e))}/**
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
 */const XI="http://localhost";class ds extends Tf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=yf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ds(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Io(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Io(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Io(e,t)}buildRequest(){const e={requestUri:XI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rl(t)}return e}}/**
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
 */function JI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZI(r){const e=Da(Oa(r)).link,t=e?Da(Oa(e)).deep_link_id:null,s=Da(Oa(r)).deep_link_id;return(s?Da(Oa(s)).link:null)||s||t||e||r}class If{constructor(e){var t,s,o,l,h,f;const g=Da(Oa(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,S=JI((o=g.mode)!==null&&o!==void 0?o:null);_e(_&&E&&S,"argument-error"),this.apiKey=_,this.operation=S,this.code=E,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=ZI(e);try{return new If(t)}catch{return null}}}/**
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
 */class Do{constructor(){this.providerId=Do.PROVIDER_ID}static credential(e,t){return Ka._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=If.parseLink(t);return _e(s,"argument-error"),Ka._fromEmailAndCode(e,s.code,s.tenantId)}}Do.PROVIDER_ID="password";Do.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Do.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class K_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ol extends K_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ci extends ol{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
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
 */class hi extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ds._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
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
 */class di extends ol{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
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
 */class fi extends ol{constructor(){super("twitter.com")}static credential(e,t){return ds._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fi.credential(t,s)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
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
 */async function eS(r,e){return sl(r,"POST","/v1/accounts:signUp",Pi(r,e))}/**
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
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Bn._fromIdTokenResponse(e,s,o),h=Gg(s);return new fs({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Gg(s);return new fs({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Gg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ju extends qn{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ju.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ju(e,t,s,o)}}function G_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ju._fromErrorAndOperation(r,l,e,s):l})}async function tS(r,e,t=!1){const s=await qa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return fs._forOperation(r,"link",s)}/**
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
 */async function nS(r,e,t=!1){const{auth:s}=r;if(dn(s.app))return Promise.reject(xr(s));const o="reauthenticate";try{const l=await qa(r,G_(s,o,e,r),t);_e(l.idToken,s,"internal-error");const h=wf(l.idToken);_e(h,s,"internal-error");const{sub:f}=h;return _e(r.uid===f,s,"user-mismatch"),fs._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Wn(s,"user-mismatch"),l}}/**
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
 */async function Q_(r,e,t=!1){if(dn(r.app))return Promise.reject(xr(r));const s="signIn",o=await G_(r,s,e),l=await fs._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function rS(r,e){return Q_(ws(r),e)}/**
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
 */async function Y_(r){const e=ws(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iS(r,e,t){if(dn(r.app))return Promise.reject(xr(r));const s=ws(r),h=await Fd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eS).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Y_(r),g}),f=await fs._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function sS(r,e,t){return dn(r.app)?Promise.reject(xr(r)):rS(dt(r),Do.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Y_(r),s})}function oS(r,e,t,s){return dt(r).onIdTokenChanged(e,t,s)}function aS(r,e,t){return dt(r).beforeAuthStateChanged(e,t)}function lS(r,e,t,s){return dt(r).onAuthStateChanged(e,t,s)}function uS(r){return dt(r).signOut()}const Zu="__sak";/**
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
 */class X_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zu,"1"),this.storage.removeItem(Zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cS=1e3,hS=10;class J_ extends X_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=B_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);kI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,hS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},cS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}J_.type="LOCAL";const dS=J_;/**
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
 */class Z_ extends X_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Z_.type="SESSION";const ev=Z_;/**
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
 */function fS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new _c(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await fS(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
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
 */function Sf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class pS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=Sf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const C=S;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(C.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function or(){return window}function mS(r){or().location.href=r}/**
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
 */function tv(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function gS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yS(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function _S(){return tv()?self:null}/**
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
 */const nv="firebaseLocalStorageDb",vS=1,ec="firebaseLocalStorage",rv="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vc(r,e){return r.transaction([ec],e?"readwrite":"readonly").objectStore(ec)}function wS(){const r=indexedDB.deleteDatabase(nv);return new al(r).toPromise()}function Ud(){const r=indexedDB.open(nv,vS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(ec,{keyPath:rv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(ec)?e(s):(s.close(),await wS(),e(await Ud()))})})}async function Qg(r,e,t){const s=vc(r,!0).put({[rv]:e,value:t});return new al(s).toPromise()}async function ES(r,e){const t=vc(r,!1).get(e),s=await new al(t).toPromise();return s===void 0?null:s.value}function Yg(r,e){const t=vc(r,!0).delete(e);return new al(t).toPromise()}const TS=800,IS=3;class iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ud(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>IS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(_S()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await gS(),!this.activeServiceWorker)return;this.sender=new pS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ud();return await Qg(e,Zu,"1"),await Yg(e,Zu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Qg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ES(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=vc(o,!1).getAll();return new al(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iv.type="LOCAL";const SS=iv;new il(3e4,6e4);/**
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
 */function AS(r,e){return e?Or(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Af extends Tf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Io(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Io(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Io(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CS(r){return Q_(r.auth,new Af(r),r.bypassAuthState)}function RS(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),nS(t,new Af(r),r.bypassAuthState)}async function kS(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),tS(t,new Af(r),r.bypassAuthState)}/**
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
 */class sv{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CS;case"linkViaPopup":case"linkViaRedirect":return kS;case"reauthViaPopup":case"reauthViaRedirect":return RS;default:Wn(this.auth,"internal-error")}}resolve(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PS=new il(2e3,1e4);class wo extends sv{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,wo.currentPopupAction&&wo.currentPopupAction.cancel(),wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Lr(this.filter.length===1,"Popup operations only handle one event");const e=Sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PS.get())};e()}}wo.currentPopupAction=null;/**
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
 */const NS="pendingRedirect",Uu=new Map;class DS extends sv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Uu.get(this.auth._key());if(!e){try{const s=await OS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Uu.set(this.auth._key(),e)}return this.bypassAuthState||Uu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OS(r,e){const t=LS(e),s=VS(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function xS(r,e){Uu.set(r._key(),e)}function VS(r){return Or(r._redirectPersistence)}function LS(r){return Fu(NS,r.config.apiKey,r.name)}async function bS(r,e,t=!1){if(dn(r.app))return Promise.reject(xr(r));const s=ws(r),o=AS(s,e),h=await new DS(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const MS=600*1e3;class FS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!US(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!ov(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(sr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xg(e))}saveEventToCache(e){this.cachedEventUids.add(Xg(e)),this.lastProcessedEventTime=Date.now()}}function Xg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function ov({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function US(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ov(r);default:return!1}}/**
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
 */async function jS(r,e={}){return Ni(r,"GET","/v1/projects",e)}/**
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
 */const zS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BS=/^https?/;async function $S(r){if(r.config.emulator)return;const{authorizedDomains:e}=await jS(r);for(const t of e)try{if(HS(t))return}catch{}Wn(r,"unauthorized-domain")}function HS(r){const e=bd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!BS.test(t))return!1;if(zS.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const WS=new il(3e4,6e4);function Jg(){const r=or().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function qS(r){return new Promise((e,t)=>{var s,o,l;function h(){Jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jg(),t(sr(r,"network-request-failed"))},timeout:WS.get()})}if(!((o=(s=or().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=or().gapi)===null||l===void 0)&&l.load)h();else{const f=MI("iframefcb");return or()[f]=()=>{gapi.load?h():t(sr(r,"network-request-failed"))},H_(`${bI()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw ju=null,e})}let ju=null;function KS(r){return ju=ju||qS(r),ju}/**
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
 */const GS=new il(5e3,15e3),QS="__/auth/iframe",YS="emulator/auth/iframe",XS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZS(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?vf(e,YS):`https://${r.config.authDomain}/${QS}`,s={apiKey:e.apiKey,appName:r.name,v:No},o=JS.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${rl(s).slice(1)}`}async function eA(r){const e=await KS(r),t=or().gapi;return _e(t,r,"internal-error"),e.open({where:document.body,url:ZS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XS,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=sr(r,"network-request-failed"),f=or().setTimeout(()=>{l(h)},GS.get());function g(){or().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const tA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nA=500,rA=600,iA="_blank",sA="http://localhost";class Zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oA(r,e,t,s=nA,o=rA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},tA),{width:s.toString(),height:o.toString(),top:l,left:h}),_=zt().toLowerCase();t&&(f=M_(_)?iA:t),L_(_)&&(e=e||sA,g.scrollbars="yes");const E=Object.entries(g).reduce((C,[M,z])=>`${C}${M}=${z},`,"");if(RI(_)&&f!=="_self")return aA(e||"",f),new Zg(null);const S=window.open(e||"",f,E);_e(S,r,"popup-blocked");try{S.focus()}catch{}return new Zg(S)}function aA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const lA="__/auth/handler",uA="emulator/auth/handler",cA=encodeURIComponent("fac");async function ey(r,e,t,s,o,l){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:No,eventId:o};if(e instanceof K_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",q0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(e instanceof ol){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),_=g?`#${cA}=${encodeURIComponent(g)}`:"";return`${hA(r)}?${rl(f).slice(1)}${_}`}function hA({config:r}){return r.emulator?vf(r,uA):`https://${r.authDomain}/${lA}`}/**
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
 */const Ed="webStorageSupport";class dA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ev,this._completeRedirectFn=bS,this._overrideRedirectResult=xS}async _openPopup(e,t,s,o){var l;Lr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await ey(e,t,s,bd(),o);return oA(e,h,Sf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await ey(e,t,s,bd(),o);return mS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Lr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await eA(e),s=new FS(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ed,{type:Ed},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Ed];h!==void 0&&t(!!h),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$S(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return B_()||b_()||Ef()}}const fA=dA;var ty="@firebase/auth",ny="1.10.8";/**
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
 */class pA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gA(r){Hn(new Cn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$_(r)},_=new xI(s,o,l,g);return $I(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Hn(new Cn("auth-internal",e=>{const t=ws(e.getProvider("auth").getImmediate());return(s=>new pA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(ty,ny,mA(r)),nn(ty,ny,"esm2017")}/**
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
 */const yA=300,_A=v_("authIdTokenMaxAge")||yA;let ry=null;const vA=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>_A)return;const o=t==null?void 0:t.token;ry!==o&&(ry=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function wA(r=gc()){const e=ki(r,"auth");if(e.isInitialized())return e.getImmediate();const t=BI(r,{popupRedirectResolver:fA,persistence:[SS,dS,ev]}),s=v_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=vA(l.toString());aS(t,h,()=>h(t.currentUser)),oS(t,f=>h(f))}}const o=g_("auth");return o&&HI(t,`http://${o}`),t}function EA(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}VI({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=sr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",EA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gA("Browser");var TA="firebase",IA="11.10.0";/**
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
 */nn(TA,IA,"app");var iy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yi,av;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function R(){}R.prototype=I.prototype,P.D=I.prototype,P.prototype=new R,P.prototype.constructor=P,P.C=function(N,O,V){for(var A=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)A[Ze-2]=arguments[Ze];return I.prototype[O].apply(N,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,I,R){R||(R=0);var N=Array(16);if(typeof I=="string")for(var O=0;16>O;++O)N[O]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(O=0;16>O;++O)N[O]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=P.g[0],R=P.g[1],O=P.g[2];var V=P.g[3],A=I+(V^R&(O^V))+N[0]+3614090360&4294967295;I=R+(A<<7&4294967295|A>>>25),A=V+(O^I&(R^O))+N[1]+3905402710&4294967295,V=I+(A<<12&4294967295|A>>>20),A=O+(R^V&(I^R))+N[2]+606105819&4294967295,O=V+(A<<17&4294967295|A>>>15),A=R+(I^O&(V^I))+N[3]+3250441966&4294967295,R=O+(A<<22&4294967295|A>>>10),A=I+(V^R&(O^V))+N[4]+4118548399&4294967295,I=R+(A<<7&4294967295|A>>>25),A=V+(O^I&(R^O))+N[5]+1200080426&4294967295,V=I+(A<<12&4294967295|A>>>20),A=O+(R^V&(I^R))+N[6]+2821735955&4294967295,O=V+(A<<17&4294967295|A>>>15),A=R+(I^O&(V^I))+N[7]+4249261313&4294967295,R=O+(A<<22&4294967295|A>>>10),A=I+(V^R&(O^V))+N[8]+1770035416&4294967295,I=R+(A<<7&4294967295|A>>>25),A=V+(O^I&(R^O))+N[9]+2336552879&4294967295,V=I+(A<<12&4294967295|A>>>20),A=O+(R^V&(I^R))+N[10]+4294925233&4294967295,O=V+(A<<17&4294967295|A>>>15),A=R+(I^O&(V^I))+N[11]+2304563134&4294967295,R=O+(A<<22&4294967295|A>>>10),A=I+(V^R&(O^V))+N[12]+1804603682&4294967295,I=R+(A<<7&4294967295|A>>>25),A=V+(O^I&(R^O))+N[13]+4254626195&4294967295,V=I+(A<<12&4294967295|A>>>20),A=O+(R^V&(I^R))+N[14]+2792965006&4294967295,O=V+(A<<17&4294967295|A>>>15),A=R+(I^O&(V^I))+N[15]+1236535329&4294967295,R=O+(A<<22&4294967295|A>>>10),A=I+(O^V&(R^O))+N[1]+4129170786&4294967295,I=R+(A<<5&4294967295|A>>>27),A=V+(R^O&(I^R))+N[6]+3225465664&4294967295,V=I+(A<<9&4294967295|A>>>23),A=O+(I^R&(V^I))+N[11]+643717713&4294967295,O=V+(A<<14&4294967295|A>>>18),A=R+(V^I&(O^V))+N[0]+3921069994&4294967295,R=O+(A<<20&4294967295|A>>>12),A=I+(O^V&(R^O))+N[5]+3593408605&4294967295,I=R+(A<<5&4294967295|A>>>27),A=V+(R^O&(I^R))+N[10]+38016083&4294967295,V=I+(A<<9&4294967295|A>>>23),A=O+(I^R&(V^I))+N[15]+3634488961&4294967295,O=V+(A<<14&4294967295|A>>>18),A=R+(V^I&(O^V))+N[4]+3889429448&4294967295,R=O+(A<<20&4294967295|A>>>12),A=I+(O^V&(R^O))+N[9]+568446438&4294967295,I=R+(A<<5&4294967295|A>>>27),A=V+(R^O&(I^R))+N[14]+3275163606&4294967295,V=I+(A<<9&4294967295|A>>>23),A=O+(I^R&(V^I))+N[3]+4107603335&4294967295,O=V+(A<<14&4294967295|A>>>18),A=R+(V^I&(O^V))+N[8]+1163531501&4294967295,R=O+(A<<20&4294967295|A>>>12),A=I+(O^V&(R^O))+N[13]+2850285829&4294967295,I=R+(A<<5&4294967295|A>>>27),A=V+(R^O&(I^R))+N[2]+4243563512&4294967295,V=I+(A<<9&4294967295|A>>>23),A=O+(I^R&(V^I))+N[7]+1735328473&4294967295,O=V+(A<<14&4294967295|A>>>18),A=R+(V^I&(O^V))+N[12]+2368359562&4294967295,R=O+(A<<20&4294967295|A>>>12),A=I+(R^O^V)+N[5]+4294588738&4294967295,I=R+(A<<4&4294967295|A>>>28),A=V+(I^R^O)+N[8]+2272392833&4294967295,V=I+(A<<11&4294967295|A>>>21),A=O+(V^I^R)+N[11]+1839030562&4294967295,O=V+(A<<16&4294967295|A>>>16),A=R+(O^V^I)+N[14]+4259657740&4294967295,R=O+(A<<23&4294967295|A>>>9),A=I+(R^O^V)+N[1]+2763975236&4294967295,I=R+(A<<4&4294967295|A>>>28),A=V+(I^R^O)+N[4]+1272893353&4294967295,V=I+(A<<11&4294967295|A>>>21),A=O+(V^I^R)+N[7]+4139469664&4294967295,O=V+(A<<16&4294967295|A>>>16),A=R+(O^V^I)+N[10]+3200236656&4294967295,R=O+(A<<23&4294967295|A>>>9),A=I+(R^O^V)+N[13]+681279174&4294967295,I=R+(A<<4&4294967295|A>>>28),A=V+(I^R^O)+N[0]+3936430074&4294967295,V=I+(A<<11&4294967295|A>>>21),A=O+(V^I^R)+N[3]+3572445317&4294967295,O=V+(A<<16&4294967295|A>>>16),A=R+(O^V^I)+N[6]+76029189&4294967295,R=O+(A<<23&4294967295|A>>>9),A=I+(R^O^V)+N[9]+3654602809&4294967295,I=R+(A<<4&4294967295|A>>>28),A=V+(I^R^O)+N[12]+3873151461&4294967295,V=I+(A<<11&4294967295|A>>>21),A=O+(V^I^R)+N[15]+530742520&4294967295,O=V+(A<<16&4294967295|A>>>16),A=R+(O^V^I)+N[2]+3299628645&4294967295,R=O+(A<<23&4294967295|A>>>9),A=I+(O^(R|~V))+N[0]+4096336452&4294967295,I=R+(A<<6&4294967295|A>>>26),A=V+(R^(I|~O))+N[7]+1126891415&4294967295,V=I+(A<<10&4294967295|A>>>22),A=O+(I^(V|~R))+N[14]+2878612391&4294967295,O=V+(A<<15&4294967295|A>>>17),A=R+(V^(O|~I))+N[5]+4237533241&4294967295,R=O+(A<<21&4294967295|A>>>11),A=I+(O^(R|~V))+N[12]+1700485571&4294967295,I=R+(A<<6&4294967295|A>>>26),A=V+(R^(I|~O))+N[3]+2399980690&4294967295,V=I+(A<<10&4294967295|A>>>22),A=O+(I^(V|~R))+N[10]+4293915773&4294967295,O=V+(A<<15&4294967295|A>>>17),A=R+(V^(O|~I))+N[1]+2240044497&4294967295,R=O+(A<<21&4294967295|A>>>11),A=I+(O^(R|~V))+N[8]+1873313359&4294967295,I=R+(A<<6&4294967295|A>>>26),A=V+(R^(I|~O))+N[15]+4264355552&4294967295,V=I+(A<<10&4294967295|A>>>22),A=O+(I^(V|~R))+N[6]+2734768916&4294967295,O=V+(A<<15&4294967295|A>>>17),A=R+(V^(O|~I))+N[13]+1309151649&4294967295,R=O+(A<<21&4294967295|A>>>11),A=I+(O^(R|~V))+N[4]+4149444226&4294967295,I=R+(A<<6&4294967295|A>>>26),A=V+(R^(I|~O))+N[11]+3174756917&4294967295,V=I+(A<<10&4294967295|A>>>22),A=O+(I^(V|~R))+N[2]+718787259&4294967295,O=V+(A<<15&4294967295|A>>>17),A=R+(V^(O|~I))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(O+(A<<21&4294967295|A>>>11))&4294967295,P.g[2]=P.g[2]+O&4294967295,P.g[3]=P.g[3]+V&4294967295}s.prototype.u=function(P,I){I===void 0&&(I=P.length);for(var R=I-this.blockSize,N=this.B,O=this.h,V=0;V<I;){if(O==0)for(;V<=R;)o(this,P,V),V+=this.blockSize;if(typeof P=="string"){for(;V<I;)if(N[O++]=P.charCodeAt(V++),O==this.blockSize){o(this,N),O=0;break}}else for(;V<I;)if(N[O++]=P[V++],O==this.blockSize){o(this,N),O=0;break}}this.h=O,this.o+=I},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;var R=8*this.o;for(I=P.length-8;I<P.length;++I)P[I]=R&255,R/=256;for(this.u(P),P=Array(16),I=R=0;4>I;++I)for(var N=0;32>N;N+=8)P[R++]=this.g[I]>>>N&255;return P};function l(P,I){var R=f;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=I(P)}function h(P,I){this.h=I;for(var R=[],N=!0,O=P.length-1;0<=O;O--){var V=P[O]|0;N&&V==I||(R[O]=V,N=!1)}this.g=R}var f={};function g(P){return-128<=P&&128>P?l(P,function(I){return new h([I|0],0>I?-1:0)}):new h([P|0],0>P?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return S;if(0>P)return B(_(-P));for(var I=[],R=1,N=0;P>=R;N++)I[N]=P/R|0,R*=4294967296;return new h(I,0)}function E(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return B(E(P.substring(1),I));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(I,8)),N=S,O=0;O<P.length;O+=8){var V=Math.min(8,P.length-O),A=parseInt(P.substring(O,O+V),I);8>V?(V=_(Math.pow(I,V)),N=N.j(V).add(_(A))):(N=N.j(R),N=N.add(_(A)))}return N}var S=g(0),C=g(1),M=g(16777216);r=h.prototype,r.m=function(){if(G(this))return-B(this).m();for(var P=0,I=1,R=0;R<this.g.length;R++){var N=this.i(R);P+=(0<=N?N:4294967296+N)*I,I*=4294967296}return P},r.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(z(this))return"0";if(G(this))return"-"+B(this).toString(P);for(var I=_(Math.pow(P,6)),R=this,N="";;){var O=Ee(R,I).g;R=pe(R,O.j(I));var V=((0<R.g.length?R.g[0]:R.h)>>>0).toString(P);if(R=O,z(R))return V+N;for(;6>V.length;)V="0"+V;N=V+N}},r.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function z(P){if(P.h!=0)return!1;for(var I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function G(P){return P.h==-1}r.l=function(P){return P=pe(this,P),G(P)?-1:z(P)?0:1};function B(P){for(var I=P.g.length,R=[],N=0;N<I;N++)R[N]=~P.g[N];return new h(R,~P.h).add(C)}r.abs=function(){return G(this)?B(this):this},r.add=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0,O=0;O<=I;O++){var V=N+(this.i(O)&65535)+(P.i(O)&65535),A=(V>>>16)+(this.i(O)>>>16)+(P.i(O)>>>16);N=A>>>16,V&=65535,A&=65535,R[O]=A<<16|V}return new h(R,R[R.length-1]&-2147483648?-1:0)};function pe(P,I){return P.add(B(I))}r.j=function(P){if(z(this)||z(P))return S;if(G(this))return G(P)?B(this).j(B(P)):B(B(this).j(P));if(G(P))return B(this.j(B(P)));if(0>this.l(M)&&0>P.l(M))return _(this.m()*P.m());for(var I=this.g.length+P.g.length,R=[],N=0;N<2*I;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var O=0;O<P.g.length;O++){var V=this.i(N)>>>16,A=this.i(N)&65535,Ze=P.i(O)>>>16,Ae=P.i(O)&65535;R[2*N+2*O]+=A*Ae,le(R,2*N+2*O),R[2*N+2*O+1]+=V*Ae,le(R,2*N+2*O+1),R[2*N+2*O+1]+=A*Ze,le(R,2*N+2*O+1),R[2*N+2*O+2]+=V*Ze,le(R,2*N+2*O+2)}for(N=0;N<I;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=I;N<2*I;N++)R[N]=0;return new h(R,0)};function le(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function ue(P,I){this.g=P,this.h=I}function Ee(P,I){if(z(I))throw Error("division by zero");if(z(P))return new ue(S,S);if(G(P))return I=Ee(B(P),I),new ue(B(I.g),B(I.h));if(G(I))return I=Ee(P,B(I)),new ue(B(I.g),I.h);if(30<P.g.length){if(G(P)||G(I))throw Error("slowDivide_ only works with positive integers.");for(var R=C,N=I;0>=N.l(P);)R=be(R),N=be(N);var O=Se(R,1),V=Se(N,1);for(N=Se(N,2),R=Se(R,2);!z(N);){var A=V.add(N);0>=A.l(P)&&(O=O.add(R),V=A),N=Se(N,1),R=Se(R,1)}return I=pe(P,O.j(I)),new ue(O,I)}for(O=S;0<=P.l(I);){for(R=Math.max(1,Math.floor(P.m()/I.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),V=_(R),A=V.j(I);G(A)||0<A.l(P);)R-=N,V=_(R),A=V.j(I);z(V)&&(V=C),O=O.add(V),P=pe(P,A)}return new ue(O,P)}r.A=function(P){return Ee(this,P).h},r.and=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)&P.i(N);return new h(R,this.h&P.h)},r.or=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)|P.i(N);return new h(R,this.h|P.h)},r.xor=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)^P.i(N);return new h(R,this.h^P.h)};function be(P){for(var I=P.g.length+1,R=[],N=0;N<I;N++)R[N]=P.i(N)<<1|P.i(N-1)>>>31;return new h(R,P.h)}function Se(P,I){var R=I>>5;I%=32;for(var N=P.g.length-R,O=[],V=0;V<N;V++)O[V]=0<I?P.i(V+R)>>>I|P.i(V+R+1)<<32-I:P.i(V+R);return new h(O,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,av=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,yi=h}).apply(typeof iy<"u"?iy:typeof self<"u"?self:typeof window<"u"?window:{});var Ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lv,xa,uv,zu,jd,cv,hv,dv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ou=="object"&&Ou];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var L=u[w];if(!(L in y))break e;y=y[L]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,w=!1,L={next:function(){if(!w&&y<u.length){var j=y++;return{value:p(j,u[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function E(u,p,y){return u.call.apply(u.bind,arguments)}function S(u,p,y){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function C(u,p,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,C.apply(null,arguments)}function M(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function z(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(w,L,j){for(var Z=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)Z[Be-2]=arguments[Be];return p.prototype[L].apply(w,Z)}}function G(u){const p=u.length;if(0<p){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function B(u,p){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const L=u.length||0,j=w.length||0;u.length=L+j;for(let Z=0;Z<j;Z++)u[L+Z]=w[Z]}else u.push(w)}}class pe{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function le(u){return/^[\s\xa0]*$/.test(u)}function ue(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function Ee(u){return Ee[" "](u),u}Ee[" "]=function(){};var be=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function Se(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function P(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function I(u){const p={};for(const y in u)p[y]=u[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,p){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)u[y]=w[y];for(let j=0;j<R.length;j++)y=R[j],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function O(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function V(u){f.setTimeout(()=>{throw u},0)}function A(){var u=se;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class Ze{constructor(){this.h=this.g=null}add(p,y){const w=Ae.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Ae=new pe(()=>new fe,u=>u.reset());class fe{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let de,X=!1,se=new Ze,ee=()=>{const u=f.Promise.resolve(void 0);de=()=>{u.then(x)}};var x=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(y){V(y)}var p=Ae;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}X=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ce=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function ke(u,p){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(be){e:{try{Ee(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ke.aa.h.call(this)}}z(ke,he);var xe={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),je=0;function We(u,p,y,w,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=L,this.key=++je,this.da=this.fa=!1}function Et(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fr(u){this.src=u,this.g={},this.h=0}fr.prototype.add=function(u,p,y,w,L){var j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);var Z=Fr(u,p,w,L);return-1<Z?(p=u[Z],y||(p.fa=!1)):(p=new We(p,this.src,j,!!w,L),p.fa=y,u.push(p)),p};function Is(u,p){var y=p.type;if(y in u.g){var w=u.g[y],L=Array.prototype.indexOf.call(w,p,void 0),j;(j=0<=L)&&Array.prototype.splice.call(w,L,1),j&&(Et(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Fr(u,p,y,w){for(var L=0;L<u.length;++L){var j=u[L];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==w)return L}return-1}var xi="closure_lm_"+(1e6*Math.random()|0),Ss={};function bo(u,p,y,w,L){if(Array.isArray(p)){for(var j=0;j<p.length;j++)bo(u,p[j],y,w,L);return null}return y=Uo(y),u&&u[Ue]?u.K(p,y,_(w)?!!w.capture:!1,L):Mo(u,p,y,!1,w,L)}function Mo(u,p,y,w,L,j){if(!p)throw Error("Invalid event type");var Z=_(L)?!!L.capture:!!L,Be=Cs(u);if(Be||(u[xi]=Be=new fr(u)),y=Be.add(p,y,w,Z,j),y.proxy)return y;if(w=ml(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)Ce||(L=Z),L===void 0&&(L=!1),u.addEventListener(p.toString(),w,L);else if(u.attachEvent)u.attachEvent(mr(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ml(){function u(y){return p.call(u.src,u.listener,y)}const p=Fo;return u}function As(u,p,y,w,L){if(Array.isArray(p))for(var j=0;j<p.length;j++)As(u,p[j],y,w,L);else w=_(w)?!!w.capture:!!w,y=Uo(y),u&&u[Ue]?(u=u.i,p=String(p).toString(),p in u.g&&(j=u.g[p],y=Fr(j,y,w,L),-1<y&&(Et(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete u.g[p],u.h--)))):u&&(u=Cs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Fr(p,y,w,L)),(y=-1<u?p[u]:null)&&pr(y))}function pr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Ue])Is(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(mr(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=Cs(p))?(Is(y,u),y.h==0&&(y.src=null,p[xi]=null)):Et(u)}}}function mr(u){return u in Ss?Ss[u]:Ss[u]="on"+u}function Fo(u,p){if(u.da)u=!0;else{p=new ke(p,this);var y=u.listener,w=u.ha||u.src;u.fa&&pr(u),u=y.call(w,p)}return u}function Cs(u){return u=u[xi],u instanceof fr?u:null}var Rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uo(u){return typeof u=="function"?u:(u[Rs]||(u[Rs]=function(p){return u.handleEvent(p)}),u[Rs])}function ft(){$.call(this),this.i=new fr(this),this.M=this,this.F=null}z(ft,$),ft.prototype[Ue]=!0,ft.prototype.removeEventListener=function(u,p,y,w){As(this,u,p,y,w)};function pt(u,p){var y,w=u.F;if(w)for(y=[];w;w=w.F)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new he(p,u);else if(p instanceof he)p.target=p.target||u;else{var L=p;p=new he(w,u),N(p,L)}if(L=!0,y)for(var j=y.length-1;0<=j;j--){var Z=p.g=y[j];L=gr(Z,w,!0,p)&&L}if(Z=p.g=u,L=gr(Z,w,!0,p)&&L,L=gr(Z,w,!1,p)&&L,y)for(j=0;j<y.length;j++)Z=p.g=y[j],L=gr(Z,w,!1,p)&&L}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],w=0;w<y.length;w++)Et(y[w]);delete u.g[p],u.h--}}this.F=null},ft.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},ft.prototype.L=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function gr(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,j=0;j<p.length;++j){var Z=p[j];if(Z&&!Z.da&&Z.capture==y){var Be=Z.listener,mt=Z.ha||Z.src;Z.fa&&Is(u.i,Z),L=Be.call(mt,w)!==!1&&L}}return L&&!w.defaultPrevented}function jo(u,p,y){if(typeof u=="function")y&&(u=C(u,y));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Ur(u){u.g=jo(()=>{u.g=null,u.i&&(u.i=!1,Ur(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Vi extends ${constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Ur(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(u){$.call(this),this.h=u,this.g={}}z(Li,$);var zo=[];function Bo(u){Se(u.g,function(p,y){this.g.hasOwnProperty(y)&&pr(p)},u),u.g={}}Li.prototype.N=function(){Li.aa.N.call(this),Bo(this)},Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $o=f.JSON.stringify,Ho=f.JSON.parse,Wo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function bi(){}bi.prototype.h=null;function ks(u){return u.h||(u.h=u.i())}function Ps(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){he.call(this,"d")}z(Kn,he);function Ns(){he.call(this,"c")}z(Ns,he);var Gn={},qo=null;function Mi(){return qo=qo||new ft}Gn.La="serverreachability";function Ko(u){he.call(this,Gn.La,u)}z(Ko,he);function yr(u){const p=Mi();pt(p,new Ko(p))}Gn.STAT_EVENT="statevent";function Go(u,p){he.call(this,Gn.STAT_EVENT,u),this.stat=p}z(Go,he);function st(u){const p=Mi();pt(p,new Go(p,u))}Gn.Ma="timingevent";function Ds(u,p){he.call(this,Gn.Ma,u),this.size=p}z(Ds,he);function Rn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Fi(){this.g=!0}Fi.prototype.xa=function(){this.g=!1};function Ui(u,p,y,w,L,j){u.info(function(){if(u.g)if(j)for(var Z="",Be=j.split("&"),mt=0;mt<Be.length;mt++){var Ve=Be[mt].split("=");if(1<Ve.length){var Tt=Ve[0];Ve=Ve[1];var lt=Tt.split("_");Z=2<=lt.length&&lt[1]=="type"?Z+(Tt+"="+Ve+"&"):Z+(Tt+"=redacted&")}}else Z=null;else Z=j;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+y+`
`+Z})}function Os(u,p,y,w,L,j,Z){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+y+`
`+j+" "+Z})}function kn(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Fc(u,y)+(w?" "+w:"")})}function Qo(u,p){u.info(function(){return"TIMEOUT: "+p})}Fi.prototype.info=function(){};function Fc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var w=y[u];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var Z=1;Z<L.length;Z++)L[Z]=""}}}}return $o(y)}catch{return p}}var xs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pn;function ji(){}z(ji,bi),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Pn=new ji;function Nn(u,p,y,w){this.j=u,this.i=p,this.l=y,this.R=w||1,this.U=new Li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yl}function yl(){this.i=null,this.g="",this.h=!1}var Yo={},Vs={};function Ls(u,p,y){u.L=1,u.v=Hr(on(p)),u.m=y,u.P=!0,Xo(u,null)}function Xo(u,p){u.F=Date.now(),qe(u),u.A=on(u.v);var y=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),qr(y.i,"t",w),u.C=0,y=u.j.J,u.h=new yl,u.g=Ll(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Vi(C(u.Y,u,u.g),u.O)),p=u.U,y=u.g,w=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(zo[0]=L.toString()),L=zo);for(var j=0;j<L.length;j++){var Z=bo(y,L[j],w||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),yr(),Ui(u.i,u.u,u.A,u.l,u.R,u.m)}Nn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Kt(u)==3?p.j():this.Y(u)},Nn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Kt(this.g);var p=this.g.Ba();const _n=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ra(this.g)))){this.J||lt!=4||p==7||(p==8||0>=_n?yr(3):yr(2)),zi(this);var y=this.g.Z();this.X=y;t:if(_l(this)){var w=ra(this.g);u="";var L=w.length,j=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),jr(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(j&&p==L-1)});w.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,Os(this.i,this.u,this.A,this.l,this.R,lt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,mt=this.g;if((Be=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!le(Be)){var Ve=Be;break t}}Ve=null}if(y=Ve)kn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jo(this,y);else{this.o=!1,this.s=3,st(12),gn(this),jr(this);break e}}if(this.P){y=!0;let ln;for(;!this.J&&this.C<Z.length;)if(ln=Uc(this,Z),ln==Vs){lt==4&&(this.s=4,st(14),y=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==Yo){this.s=4,st(15),kn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else kn(this.i,this.l,ln,null),Jo(this,ln);if(_l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||Z.length!=0||this.h.h||(this.s=1,st(16),y=!1),this.o=this.o&&y,!y)kn(this.i,this.l,Z,"[Invalid Chunked Response]"),gn(this),jr(this);else if(0<Z.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),sa(Tt),Tt.M=!0,st(11))}}else kn(this.i,this.l,Z,null),Jo(this,Z);lt==4&&gn(this),this.o&&!this.J&&(lt==4?qs(this.j,this):(this.o=!1,qe(this)))}else zs(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),gn(this),jr(this)}}}catch{}finally{}};function _l(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Uc(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?Vs:(y=Number(p.substring(y,w)),isNaN(y)?Yo:(w+=1,w+y>p.length?Vs:(p=p.slice(w,w+y),u.C=w+y,p)))}Nn.prototype.cancel=function(){this.J=!0,gn(this)};function qe(u){u.S=Date.now()+u.I,vl(u,u.I)}function vl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Rn(C(u.ba,u),p)}function zi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Qo(this.i,this.A),this.L!=2&&(yr(),st(17)),gn(this),this.s=2,jr(this)):vl(this,this.S-u)};function jr(u){u.j.G==0||u.J||qs(u.j,u)}function gn(u){zi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Bo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Jo(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Bt(y.h,u))){if(!u.K&&Bt(y.h,u)&&y.G==3){try{var w=y.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Ws(y),Ln(y);else break e;Hs(y),st(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Rn(C(y.Za,y),6e3));if(1>=El(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Tr(y,11)}else if((u.K||y.g==u)&&Ws(y),!le(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let Ve=L[p];if(y.T=Ve[0],Ve=Ve[1],y.G==2)if(Ve[0]=="c"){y.K=Ve[1],y.ia=Ve[2];const Tt=Ve[3];Tt!=null&&(y.la=Tt,y.j.info("VER="+y.la));const lt=Ve[4];lt!=null&&(y.Aa=lt,y.j.info("SVER="+y.Aa));const _n=Ve[5];_n!=null&&typeof _n=="number"&&0<_n&&(w=1.5*_n,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const ln=u.g;if(ln){const Gi=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var j=w.h;j.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Zo(j,j.h),j.h=null))}if(w.D){const Gs=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Gs&&(w.ya=Gs,He(w.I,w.D,Gs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var Z=u;if(w.qa=Vl(w,w.J?w.ia:null,w.W),Z.K){Tl(w.h,Z);var Be=Z,mt=w.L;mt&&(Be.I=mt),Be.B&&(zi(Be),qe(Be)),w.g=Z}else Ki(w);0<y.i.length&&Jn(y)}else Ve[0]!="stop"&&Ve[0]!="close"||Tr(y,7);else y.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Tr(y,7):kt(y):Ve[0]!="noop"&&y.l&&y.l.ta(Ve),y.v=0)}}yr(4)}catch{}}var wl=class{constructor(u,p){this.g=u,this.map=p}};function Bi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function El(u){return u.h?1:u.g?u.g.size:0}function Bt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Zo(u,p){u.g?u.g.add(p):u.h=p}function Tl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Bi.prototype.cancel=function(){if(this.i=Il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Il(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return G(u.i)}function bs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,w=0;w<y;w++)p.push(u[w]);return p}p=[],y=0;for(w in u)p[y++]=u[w];return p}function Ms(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const w in u)p[y++]=w;return p}}}function zr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Ms(u),w=bs(u),L=w.length,j=0;j<L;j++)p.call(void 0,w[j],y&&y[j],u)}var $i=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var w=u[y].indexOf("="),L=null;if(0<=w){var j=u[y].substring(0,w);L=u[y].substring(w+1)}else j=u[y];p(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function _r(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _r){this.h=u.h,Hi(this,u.j),this.o=u.o,this.g=u.g,Br(this,u.s),this.l=u.l;var p=u.i,y=new Qn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),$r(this,y),this.m=u.m}else u&&(p=String(u).match($i))?(this.h=!1,Hi(this,p[1]||"",!0),this.o=Oe(p[2]||""),this.g=Oe(p[3]||"",!0),Br(this,p[4]),this.l=Oe(p[5]||"",!0),$r(this,p[6]||"",!0),this.m=Oe(p[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}_r.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Wr(p,Fs,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Wr(p,Fs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Wr(y,y.charAt(0)=="/"?Cl:Al,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Wr(y,ea)),u.join("")};function on(u){return new _r(u)}function Hi(u,p,y){u.j=y?Oe(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Br(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function $r(u,p,y){p instanceof Qn?(u.i=p,Yn(u.i,u.h)):(y||(p=Wr(p,Rl)),u.i=new Qn(p,u.h))}function He(u,p,y){u.i.set(p,y)}function Hr(u){return He(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Oe(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Wr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Sl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Sl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Fs=/[#\/\?@]/g,Al=/[#\?:]/g,Cl=/[#\?]/g,Rl=/[#\?@]/g,ea=/#/g;function Qn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&jc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Qn.prototype,r.add=function(u,p){Rt(this),this.i=null,u=yn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Dn(u,p){Rt(u),p=yn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function On(u,p){return Rt(u),p=yn(u,p),u.g.has(p)}r.forEach=function(u,p){Rt(this),this.g.forEach(function(y,w){y.forEach(function(L){u.call(p,L,w,this)},this)},this)},r.na=function(){Rt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let w=0;w<p.length;w++){const L=u[w];for(let j=0;j<L.length;j++)y.push(p[w])}return y},r.V=function(u){Rt(this);let p=[];if(typeof u=="string")On(this,u)&&(p=p.concat(this.g.get(yn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return Rt(this),this.i=null,u=yn(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function qr(u,p,y){Dn(u,p),0<y.length&&(u.i=null,u.g.set(yn(u,p),G(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var w=p[y];const j=encodeURIComponent(String(w)),Z=this.V(w);for(w=0;w<Z.length;w++){var L=j;Z[w]!==""&&(L+="="+encodeURIComponent(String(Z[w]))),u.push(L)}}return this.i=u.join("&")};function yn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Yn(u,p){p&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(y,w){var L=w.toLowerCase();w!=L&&(Dn(this,w),qr(this,L,y))},u)),u.j=p}function zc(u,p){const y=new Fi;if(f.Image){const w=new Image;w.onload=M(qt,y,"TestLoadImage: loaded",!0,p,w),w.onerror=M(qt,y,"TestLoadImage: error",!1,p,w),w.onabort=M(qt,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=M(qt,y,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function kl(u,p){const y=new Fi,w=new AbortController,L=setTimeout(()=>{w.abort(),qt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(j=>{clearTimeout(L),j.ok?qt(y,"TestPingServer: ok",!0,p):qt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),qt(y,"TestPingServer: error",!1,p)})}function qt(u,p,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function Bc(){this.g=new Wo}function Pl(u,p,y){const w=y||"";try{zr(u,function(L,j){let Z=L;_(L)&&(Z=$o(L)),p.push(w+j+"="+encodeURIComponent(Z))})}catch(L){throw p.push(w+"type="+encodeURIComponent("_badmap")),L}}function vr(u){this.l=u.Ub||null,this.j=u.eb||!1}z(vr,bi),vr.prototype.g=function(){return new Wi(this.l,this.j)},vr.prototype.i=(function(u){return function(){return u}})({});function Wi(u,p){ft.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Wi,ft),r=Wi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Vn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?xn(this):Vn(this),this.readyState==3&&Nl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,xn(this))},r.Qa=function(u){this.g&&(this.response=u,xn(this))},r.ga=function(){this.g&&xn(this)};function xn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Vn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Vn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wr(u){let p="";return Se(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function Kr(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=wr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):He(u,p,y))}function Xe(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Xe,ft);var $c=/^https?$/i,ta=["POST","PUT"];r=Xe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pn.g(),this.v=this.o?ks(this.o):ks(Pn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(j){qi(this,j);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())y.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),L=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ta,p,void 0))||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of y)this.g.setRequestHeader(j,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{js(this),this.u=!0,this.g.send(u),this.u=!1}catch(j){qi(this,j)}};function qi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Us(u),an(u)}function Us(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),an(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Xe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?na(this):this.bb())},r.bb=function(){na(this)};function na(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)jo(u.Ea,0,u);else if(pt(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=Z===0){var L=String(u.D).match($i)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),w=!$c.test(L?L.toLowerCase():"")}y=w}if(y)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var j=2<Kt(u)?u.g.statusText:""}catch{j=""}u.l=j+" ["+u.Z()+"]",Us(u)}}finally{an(u)}}}}function an(u,p){if(u.g){js(u);const y=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||pt(u,"ready");try{y.onreadystatechange=w}catch{}}}function js(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Ho(p)}};function ra(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function zs(u){const p={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(le(u[w]))continue;var y=O(u[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[L]||[];p[L]=j,j.push(y)}P(p,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function ia(u){this.Aa=0,this.i=[],this.j=new Fi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,u),this.cb=Xn("retryDelaySeedMs",1e4,u),this.Wa=Xn("forwardChannelMaxRetries",2,u),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Bi(u&&u.concurrentRequestLimit),this.Da=new Bc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ia.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,w){st(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=Vl(this,null,this.W),Jn(this)};function kt(u){if(Bs(u),u.G==3){var p=u.U++,y=on(u.I);if(He(y,"SID",u.K),He(y,"RID",p),He(y,"TYPE","terminate"),Er(u,y),p=new Nn(u,u.j,p),p.L=2,p.v=Hr(on(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Ll(p.j,null),p.g.ea(p.v)),p.F=Date.now(),qe(p)}xl(u)}function Ln(u){u.g&&(sa(u),u.g.cancel(),u.g=null)}function Bs(u){Ln(u),u.u&&(f.clearTimeout(u.u),u.u=null),Ws(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Jn(u){if(!sn(u.h)&&!u.s){u.s=!0;var p=u.Ga;de||ee(),X||(de(),X=!0),se.add(p,u),u.B=0}}function Hc(u,p){return El(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Rn(C(u.Ga,u,p),Ol(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Nn(this,this.j,u);let j=this.o;if(this.S&&(j?(j=I(j),N(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Gr(this,L,p),y=on(this.I),He(y,"RID",u),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),Er(this,y),j&&(this.O?p="headers="+encodeURIComponent(String(wr(j)))+"&"+p:this.m&&Kr(y,this.m,j)),Zo(this.h,L),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",p),He(y,"SID","null"),L.T=!0,Ls(L,y,null)):Ls(L,y,p),this.G=2}}else this.G==3&&(u?$s(this,u):this.i.length==0||sn(this.h)||$s(this))};function $s(u,p){var y;p?y=p.l:y=u.U++;const w=on(u.I);He(w,"SID",u.K),He(w,"RID",y),He(w,"AID",u.T),Er(u,w),u.m&&u.o&&Kr(w,u.m,u.o),y=new Nn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Gr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Zo(u.h,y),Ls(y,w,p)}function Er(u,p){u.H&&Se(u.H,function(y,w){He(p,w,y)}),u.l&&zr({},function(y,w){He(p,w,y)})}function Gr(u,p,y){y=Math.min(u.i.length,y);var w=u.l?C(u.l.Na,u.l,u):null;e:{var L=u.i;let j=-1;for(;;){const Z=["count="+y];j==-1?0<y?(j=L[0].g,Z.push("ofs="+j)):j=0:Z.push("ofs="+j);let Be=!0;for(let mt=0;mt<y;mt++){let Ve=L[mt].g;const Tt=L[mt].map;if(Ve-=j,0>Ve)j=Math.max(0,L[mt].g-100),Be=!1;else try{Pl(Tt,Z,"req"+Ve+"_")}catch{w&&w(Tt)}}if(Be){w=Z.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,w}function Ki(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;de||ee(),X||(de(),X=!0),se.add(p,u),u.v=0}}function Hs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Rn(C(u.Fa,u),Ol(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Dl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Rn(C(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Ln(this),Dl(this))};function sa(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Dl(u){u.g=new Nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=on(u.qa);He(p,"RID","rpc"),He(p,"SID",u.K),He(p,"AID",u.T),He(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&He(p,"TO",u.ja),He(p,"TYPE","xmlhttp"),Er(u,p),u.m&&u.o&&Kr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Hr(on(p)),y.m=null,y.P=!0,Xo(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Ln(this),Hs(this),st(19))};function Ws(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function qs(u,p){var y=null;if(u.g==p){Ws(u),sa(u),u.g=null;var w=2}else if(Bt(u.h,p))y=p.D,Tl(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;w=Mi(),pt(w,new Ds(w,y)),Jn(u)}else Ki(u);else if(L=p.s,L==3||L==0&&0<p.X||!(w==1&&Hc(u,p)||w==2&&Hs(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:Tr(u,5);break;case 4:Tr(u,10);break;case 3:Tr(u,6);break;default:Tr(u,2)}}}function Ol(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Tr(u,p){if(u.j.info("Error code "+p),p==2){var y=C(u.fb,u),w=u.Xa;const L=!w;w=new _r(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Hi(w,"https"),Hr(w),L?zc(w.toString(),y):kl(w.toString(),y)}else st(2);u.G=0,u.l&&u.l.sa(p),xl(u),Bs(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function xl(u){if(u.G=0,u.ka=[],u.l){const p=Il(u.h);(p.length!=0||u.i.length!=0)&&(B(u.ka,p),B(u.ka,u.i),u.h.i.length=0,G(u.i),u.i.length=0),u.l.ra()}}function Vl(u,p,y){var w=y instanceof _r?on(y):new _r(y);if(w.g!="")p&&(w.g=p+"."+w.g),Br(w,w.s);else{var L=f.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var j=new _r(null);w&&Hi(j,w),p&&(j.g=p),L&&Br(j,L),y&&(j.l=y),w=j}return y=u.D,p=u.ya,y&&p&&He(w,y,p),He(w,"VER",u.la),Er(u,w),w}function Ll(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Xe(new vr({eb:y})):new Xe(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function oa(){}r=oa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ks(){}Ks.prototype.g=function(u,p){return new $t(u,p)};function $t(u,p){ft.call(this),this.g=new ia(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!le(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!le(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Zn(this)}z($t,ft),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){kt(this.g)},$t.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=$o(u),u=y);p.i.push(new wl(p.Ya++,u)),p.G==3&&Jn(p)},$t.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,$t.aa.N.call(this)};function bl(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}z(bl,Kn);function Ml(){Ns.call(this),this.status=1}z(Ml,Ns);function Zn(u){this.g=u}z(Zn,oa),Zn.prototype.ua=function(){pt(this.g,"a")},Zn.prototype.ta=function(u){pt(this.g,new bl(u))},Zn.prototype.sa=function(u){pt(this.g,new Ml)},Zn.prototype.ra=function(){pt(this.g,"b")},Ks.prototype.createWebChannel=Ks.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,dv=function(){return new Ks},hv=function(){return Mi()},cv=Gn,jd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xs.NO_ERROR=0,xs.TIMEOUT=8,xs.HTTP_ERROR=6,zu=xs,gl.COMPLETE="complete",uv=gl,Ps.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,xa=Ps,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,lv=Xe}).apply(typeof Ou<"u"?Ou:typeof self<"u"?self:typeof window<"u"?window:{});const sy="@firebase/firestore",oy="4.8.0";/**
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
 */let Oo="11.10.0";/**
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
 */const ps=new mc("@firebase/firestore");function go(){return ps.logLevel}function ne(r,...e){if(ps.logLevel<=Ne.DEBUG){const t=e.map(Cf);ps.debug(`Firestore (${Oo}): ${r}`,...t)}}function br(r,...e){if(ps.logLevel<=Ne.ERROR){const t=e.map(Cf);ps.error(`Firestore (${Oo}): ${r}`,...t)}}function wi(r,...e){if(ps.logLevel<=Ne.WARN){const t=e.map(Cf);ps.warn(`Firestore (${Oo}): ${r}`,...t)}}function Cf(r){if(typeof r=="string")return r;try{/**
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
 */function ve(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,fv(r,s,t)}function fv(r,e,t){let s=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw br(s),new Error(s)}function ze(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||fv(e,o,s)}function Ie(r,e){return r}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends qn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _i{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class pv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class AA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class CA{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new _i,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new _i)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new pv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class RA{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class kA{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new RA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ay{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ay(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ay(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function NA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function mv(){return new TextEncoder}/**
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
 */class Rf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=NA(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Re(r,e){return r<e?-1:r>e?1:0}function zd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Re(s,o);{const l=mv(),h=DA(l.encode(ly(r,t)),l.encode(ly(e,t)));return h!==0?h:Re(s,o)}}t+=s>65535?2:1}return Re(r.length,e.length)}function ly(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function DA(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Re(r[t],e[t]);return Re(r.length,e.length)}function Ao(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const uy="__name__";class ir{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=ir.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Re(e.length,t.length)}static compareSegments(e,t){const s=ir.isNumericId(e),o=ir.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):zd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yi.fromString(e.substring(4,e.length-2))}}class nt extends ir{construct(e,t,s){return new nt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new nt(t)}static emptyPath(){return new nt([])}}const OA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends ir{construct(e,t,s){return new Ot(e,t,s)}static isValidIdentifier(e){return OA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===uy}static keyField(){return new Ot([uy])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ce(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ce(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ce(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new ce(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ot(t)}static emptyPath(){return new Ot([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(nt.fromString(e))}static fromName(e){return new ye(nt.fromString(e).popFirst(5))}static empty(){return new ye(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new nt(e.slice()))}}/**
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
 */function xA(r,e,t){if(!t)throw new ce(q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function VA(r,e,t,s){if(e===!0&&s===!0)throw new ce(q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function cy(r){if(!ye.isDocumentKey(r))throw new ce(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function gv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function kf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve(12329,{type:typeof r})}function Ei(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ce(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=kf(r);throw new ce(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function ht(r,e){const t={typeString:r};return e&&(t.value=e),t}function ll(r,e){if(!gv(r))throw new ce(q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ce(q.INVALID_ARGUMENT,t);return!0}/**
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
 */const hy=-62135596800,dy=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*dy);return new Ge(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hy)throw new ce(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dy}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ll(e,Ge._jsonSchema))return new Ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:ht("string",Ge._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Ge(0,0))}static max(){return new Te(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ga=-1;function LA(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new Ge(t+1,0):new Ge(t,s));return new Ti(o,ye.empty(),e)}function bA(r){return new Ti(r.readTime,r.key,Ga)}class Ti{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ti(Te.min(),ye.empty(),Ga)}static max(){return new Ti(Te.max(),ye.empty(),Ga)}}function MA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(r.documentKey,e.documentKey),t!==0?t:Re(r.largestBatchId,e.largestBatchId))}/**
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
 */const FA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function xo(r){if(r.code!==q.FAILED_PRECONDITION||r.message!==FA)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++f,f===l&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new H(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function jA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Vo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}wc.ue=-1;/**
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
 */const Pf=-1;function Ec(r){return r==null}function tc(r){return r===0&&1/r==-1/0}function zA(r){return typeof r=="number"&&Number.isInteger(r)&&!tc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const yv="";function BA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=fy(e)),e=$A(r.get(t),e);return fy(e)}function $A(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case yv:t+="";break;default:t+=l}}return t}function fy(r){return r+yv+""}/**
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
 */function py(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Di(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function _v(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Dt.RED,this.left=o??Dt.EMPTY,this.right=l??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Dt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new my(this.data.getIterator())}getIteratorFrom(e){return new my(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class my{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort(Ot.comparator)}static empty(){return new fn([])}unionWith(e){let t=new wt(Ot.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class vv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new vv("Invalid base64 string: "+l):l}})(e);return new xt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const HA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(r){if(ze(!!r,39018),typeof r=="string"){let e=0;const t=HA.exec(r);if(ze(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Si(r){return typeof r=="string"?xt.fromBase64String(r):xt.fromUint8Array(r)}/**
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
 */const wv="server_timestamp",Ev="__type__",Tv="__previous_value__",Iv="__local_write_time__";function Nf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ev])===null||t===void 0?void 0:t.stringValue)===wv}function Tc(r){const e=r.mapValue.fields[Tv];return Nf(e)?Tc(e):e}function Qa(r){const e=Ii(r.mapValue.fields[Iv].timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class WA{constructor(e,t,s,o,l,h,f,g,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E}}const nc="(default)";class Ya{constructor(e,t){this.projectId=e,this.database=t||nc}static empty(){return new Ya("","")}get isDefaultDatabase(){return this.database===nc}isEqual(e){return e instanceof Ya&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Sv="__type__",qA="__max__",Vu={mapValue:{}},Av="__vector__",rc="value";function Ai(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Nf(r)?4:GA(r)?9007199254740991:KA(r)?10:11:ve(28295,{value:r})}function hr(r,e){if(r===e)return!0;const t=Ai(r);if(t!==Ai(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Qa(r).isEqual(Qa(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ii(o.timestampValue),f=Ii(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Si(o.bytesValue).isEqual(Si(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return at(o.geoPointValue.latitude)===at(l.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return at(o.integerValue)===at(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=at(o.doubleValue),f=at(l.doubleValue);return h===f?tc(h)===tc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Ao(r.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(py(h)!==py(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!hr(h[g],f[g])))return!1;return!0})(r,e);default:return ve(52216,{left:r})}}function Xa(r,e){return(r.values||[]).find((t=>hr(t,e)))!==void 0}function Co(r,e){if(r===e)return 0;const t=Ai(r),s=Ai(e);if(t!==s)return Re(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=at(l.integerValue||l.doubleValue),g=at(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return gy(r.timestampValue,e.timestampValue);case 4:return gy(Qa(r),Qa(e));case 5:return zd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=Si(l),g=Si(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const E=Re(f[_],g[_]);if(E!==0)return E}return Re(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Re(at(l.latitude),at(h.latitude));return f!==0?f:Re(at(l.longitude),at(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return yy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,_,E;const S=l.fields||{},C=h.fields||{},M=(f=S[rc])===null||f===void 0?void 0:f.arrayValue,z=(g=C[rc])===null||g===void 0?void 0:g.arrayValue,G=Re(((_=M==null?void 0:M.values)===null||_===void 0?void 0:_.length)||0,((E=z==null?void 0:z.values)===null||E===void 0?void 0:E.length)||0);return G!==0?G:yy(M,z)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Vu.mapValue&&h===Vu.mapValue)return 0;if(l===Vu.mapValue)return 1;if(h===Vu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let S=0;S<g.length&&S<E.length;++S){const C=zd(g[S],E[S]);if(C!==0)return C;const M=Co(f[g[S]],_[E[S]]);if(M!==0)return M}return Re(g.length,E.length)})(r.mapValue,e.mapValue);default:throw ve(23264,{le:t})}}function gy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Re(r,e);const t=Ii(r),s=Ii(e),o=Re(t.seconds,s.seconds);return o!==0?o:Re(t.nanos,s.nanos)}function yy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Co(t[o],s[o]);if(l)return l}return Re(t.length,s.length)}function Ro(r){return Bd(r)}function Bd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ii(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Si(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ye.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Bd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Bd(t.fields[h])}`;return o+"}"})(r.mapValue):ve(61005,{value:r})}function Bu(r){switch(Ai(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tc(r);return e?16+Bu(e):16;case 5:return 2*r.stringValue.length;case 6:return Si(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Bu(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Di(s.fields,((l,h)=>{o+=l.length+Bu(h)})),o})(r.mapValue);default:throw ve(13486,{value:r})}}function $d(r){return!!r&&"integerValue"in r}function Df(r){return!!r&&"arrayValue"in r}function _y(r){return!!r&&"nullValue"in r}function vy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function $u(r){return!!r&&"mapValue"in r}function KA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Sv])===null||t===void 0?void 0:t.stringValue)===Av}function Ua(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Di(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ua(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ua(r.arrayValue.values[t]);return e}return Object.assign({},r)}function GA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===qA}/**
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
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!$u(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(t)}setAll(e){let t=Ot.emptyPath(),s={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=Ua(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());$u(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];$u(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Di(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new tn(Ua(this.value))}}function Cv(r){const e=[];return Di(r.fields,((t,s)=>{const o=new Ot([t]);if($u(s)){const l=Cv(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new fn(e)}/**
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
 */class jt{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new jt(e,0,Te.min(),Te.min(),Te.min(),tn.empty(),0)}static newFoundDocument(e,t,s,o){return new jt(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new jt(e,2,t,Te.min(),Te.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,Te.min(),Te.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ic{constructor(e,t){this.position=e,this.inclusive=t}}function wy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=ye.comparator(ye.fromName(h.referenceValue),t.key):s=Co(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ey(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!hr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class sc{constructor(e,t="asc"){this.field=e,this.dir=t}}function QA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Rv{}class _t extends Rv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new XA(e,t,s):t==="array-contains"?new e1(e,s):t==="in"?new t1(e,s):t==="not-in"?new n1(e,s):t==="array-contains-any"?new r1(e,s):new _t(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new JA(e,s):new ZA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Co(t,this.value)):t!==null&&Ai(this.value)===Ai(t)&&this.matchesComparison(Co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends Rv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new dr(e,t)}matches(e){return kv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function kv(r){return r.op==="and"}function Pv(r){return YA(r)&&kv(r)}function YA(r){for(const e of r.filters)if(e instanceof dr)return!1;return!0}function Hd(r){if(r instanceof _t)return r.field.canonicalString()+r.op.toString()+Ro(r.value);if(Pv(r))return r.filters.map((e=>Hd(e))).join(",");{const e=r.filters.map((t=>Hd(t))).join(",");return`${r.op}(${e})`}}function Nv(r,e){return r instanceof _t?(function(s,o){return o instanceof _t&&s.op===o.op&&s.field.isEqual(o.field)&&hr(s.value,o.value)})(r,e):r instanceof dr?(function(s,o){return o instanceof dr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,f)=>l&&Nv(h,o.filters[f])),!0):!1})(r,e):void ve(19439)}function Dv(r){return r instanceof _t?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ro(t.value)}`})(r):r instanceof dr?(function(t){return t.op.toString()+" {"+t.getFilters().map(Dv).join(" ,")+"}"})(r):"Filter"}class XA extends _t{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class JA extends _t{constructor(e,t){super(e,"in",t),this.keys=Ov("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ZA extends _t{constructor(e,t){super(e,"not-in",t),this.keys=Ov("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ov(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>ye.fromName(s.referenceValue)))}class e1 extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Df(t)&&Xa(t.arrayValue,this.value)}}class t1 extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xa(this.value.arrayValue,t)}}class n1 extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Xa(this.value.arrayValue,t)}}class r1 extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Df(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Xa(this.value.arrayValue,s)))}}/**
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
 */class i1{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function Ty(r,e=null,t=[],s=[],o=null,l=null,h=null){return new i1(r,e,t,s,o,l,h)}function Of(r){const e=Ie(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Hd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Ec(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Ro(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Ro(s))).join(",")),e.Pe=t}return e.Pe}function xf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!QA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Nv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ey(r.startAt,e.startAt)&&Ey(r.endAt,e.endAt)}function Wd(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Ic{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function s1(r,e,t,s,o,l,h,f){return new Ic(r,e,t,s,o,l,h,f)}function Vf(r){return new Ic(r)}function Iy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function o1(r){return r.collectionGroup!==null}function ja(r){const e=Ie(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new wt(Ot.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new sc(l,s))})),t.has(Ot.keyField().canonicalString())||e.Te.push(new sc(Ot.keyField(),s))}return e.Te}function ar(r){const e=Ie(r);return e.Ie||(e.Ie=a1(e,ja(r))),e.Ie}function a1(r,e){if(r.limitType==="F")return Ty(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new sc(o.field,l)}));const t=r.endAt?new ic(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ic(r.startAt.position,r.startAt.inclusive):null;return Ty(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function qd(r,e,t){return new Ic(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Sc(r,e){return xf(ar(r),ar(e))&&r.limitType===e.limitType}function xv(r){return`${Of(ar(r))}|lt:${r.limitType}`}function yo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Dv(o))).join(", ")}]`),Ec(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Ro(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Ro(o))).join(",")),`Target(${s})`})(ar(r))}; limitType=${r.limitType})`}function Ac(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ye.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of ja(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,f,g){const _=wy(h,f,g);return h.inclusive?_<=0:_<0})(s.startAt,ja(s),o)||s.endAt&&!(function(h,f,g){const _=wy(h,f,g);return h.inclusive?_>=0:_>0})(s.endAt,ja(s),o))})(r,e)}function l1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Vv(r){return(e,t)=>{let s=!1;for(const o of ja(r)){const l=u1(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function u1(r,e,t){const s=r.field.isKeyField()?ye.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?Co(g,_):ve(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:r.dir})}}/**
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
 */class Es{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return _v(this.inner)}size(){return this.innerSize}}/**
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
 */const c1=new rt(ye.comparator);function Mr(){return c1}const Lv=new rt(ye.comparator);function Va(...r){let e=Lv;for(const t of r)e=e.insert(t.key,t);return e}function bv(r){let e=Lv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function us(){return za()}function Mv(){return za()}function za(){return new Es((r=>r.toString()),((r,e)=>r.isEqual(e)))}const h1=new rt(ye.comparator),d1=new wt(ye.comparator);function De(...r){let e=d1;for(const t of r)e=e.add(t);return e}const f1=new wt(Re);function p1(){return f1}/**
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
 */function Lf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tc(e)?"-0":e}}function Fv(r){return{integerValue:""+r}}function Uv(r,e){return zA(e)?Fv(e):Lf(r,e)}/**
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
 */class Cc{constructor(){this._=void 0}}function m1(r,e,t){return r instanceof Ja?(function(o,l){const h={fields:{[Ev]:{stringValue:wv},[Iv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Nf(l)&&(l=Tc(l)),l&&(h.fields[Tv]=l),{mapValue:h}})(t,e):r instanceof Za?zv(r,e):r instanceof el?Bv(r,e):(function(o,l){const h=jv(o,l),f=Sy(h)+Sy(o.Ee);return $d(h)&&$d(o.Ee)?Fv(f):Lf(o.serializer,f)})(r,e)}function g1(r,e,t){return r instanceof Za?zv(r,e):r instanceof el?Bv(r,e):t}function jv(r,e){return r instanceof tl?(function(s){return $d(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Ja extends Cc{}class Za extends Cc{constructor(e){super(),this.elements=e}}function zv(r,e){const t=$v(e);for(const s of r.elements)t.some((o=>hr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class el extends Cc{constructor(e){super(),this.elements=e}}function Bv(r,e){let t=$v(e);for(const s of r.elements)t=t.filter((o=>!hr(o,s)));return{arrayValue:{values:t}}}class tl extends Cc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Sy(r){return at(r.integerValue||r.doubleValue)}function $v(r){return Df(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Hv{constructor(e,t){this.field=e,this.transform=t}}function y1(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Za&&o instanceof Za||s instanceof el&&o instanceof el?Ao(s.elements,o.elements,hr):s instanceof tl&&o instanceof tl?hr(s.Ee,o.Ee):s instanceof Ja&&o instanceof Ja})(r.transform,e.transform)}class _1{constructor(e,t){this.version=e,this.transformResults=t}}class $n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Rc{}function Wv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new bf(r.key,$n.none()):new ul(r.key,r.data,$n.none());{const t=r.data,s=tn.empty();let o=new wt(Ot.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Oi(r.key,s,new fn(o.toArray()),$n.none())}}function v1(r,e,t){r instanceof ul?(function(o,l,h){const f=o.value.clone(),g=Cy(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Oi?(function(o,l,h){if(!Hu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Cy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(qv(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ba(r,e,t,s){return r instanceof ul?(function(l,h,f,g){if(!Hu(l.precondition,h))return f;const _=l.value.clone(),E=Ry(l.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Oi?(function(l,h,f,g){if(!Hu(l.precondition,h))return f;const _=Ry(l.fieldTransforms,g,h),E=h.data;return E.setAll(qv(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((S=>S.field)))})(r,e,t,s):(function(l,h,f){return Hu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function w1(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=jv(s.transform,o||null);l!=null&&(t===null&&(t=tn.empty()),t.set(s.field,l))}return t||null}function Ay(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ao(s,o,((l,h)=>y1(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ul extends Rc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Oi extends Rc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function qv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Cy(r,e,t){const s=new Map;ze(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,g1(h,f,t[o]))}return s}function Ry(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,m1(l,h,e))}return s}class bf extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class E1 extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class T1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&v1(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Mv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=Wv(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),De())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,((t,s)=>Ay(t,s)))&&Ao(this.baseMutations,e.baseMutations,((t,s)=>Ay(t,s)))}}class Mf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return h1})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Mf(e,t,s,o)}}/**
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
 */class I1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class S1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ct,Le;function A1(r){switch(r){case q.OK:return ve(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return ve(15467,{code:r})}}function Kv(r){if(r===void 0)return br("GRPC error has no .code"),q.UNKNOWN;switch(r){case ct.OK:return q.OK;case ct.CANCELLED:return q.CANCELLED;case ct.UNKNOWN:return q.UNKNOWN;case ct.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ct.INTERNAL:return q.INTERNAL;case ct.UNAVAILABLE:return q.UNAVAILABLE;case ct.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ct.NOT_FOUND:return q.NOT_FOUND;case ct.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ct.ABORTED:return q.ABORTED;case ct.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ct.DATA_LOSS:return q.DATA_LOSS;default:return ve(39323,{code:r})}}(Le=ct||(ct={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const C1=new yi([4294967295,4294967295],0);function ky(r){const e=mv().encode(r),t=new av;return t.update(e),new Uint8Array(t.digest())}function Py(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new yi([t,s],0),new yi([o,l],0)]}class Ff{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new La(`Invalid padding: ${t}`);if(s<0)throw new La(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new La(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new La(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=yi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(yi.fromNumber(s)));return o.compare(C1)===1&&(o=new yi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ky(e),[s,o]=Py(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Ff(l,o,t);return s.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=ky(e),[s,o]=Py(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class La extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,cl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new kc(Te.min(),o,new rt(Re),Mr(),De())}}class cl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new cl(s,t,De(),De(),De())}}/**
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
 */class Wu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class Gv{constructor(e,t){this.targetId=e,this.De=t}}class Qv{constructor(e,t,s=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Ny{constructor(){this.ve=0,this.Ce=Dy(),this.Fe=xt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=De(),t=De(),s=De();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ve(38017,{changeType:l})}})),new cl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Dy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class R1{constructor(e){this.We=e,this.Ge=new Map,this.ze=Mr(),this.je=Lu(),this.Je=Lu(),this.He=new rt(Re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(Wd(l))if(s===0){const h=new ye(l.path);this.Xe(t,h,jt.newNoDocument(h,Te.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Si(s).toUint8Array()}catch(g){if(g instanceof vv)return wi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Ff(h,o,l)}catch(g){return wi(g instanceof La?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&Wd(f.target)){const g=new ye(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,jt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=De();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new kc(e,t,this.He,this.ze,s);return this.ze=Mr(),this.je=Lu(),this.Je=Lu(),this.He=new rt(Re),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ny,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new wt(Re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new wt(Re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ny),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Lu(){return new rt(ye.comparator)}function Dy(){return new rt(ye.comparator)}const k1={asc:"ASCENDING",desc:"DESCENDING"},P1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},N1={and:"AND",or:"OR"};class D1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Kd(r,e){return r.useProto3Json||Ec(e)?e:{value:e}}function oc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function O1(r,e){return oc(r,e.toTimestamp())}function lr(r){return ze(!!r,49232),Te.fromTimestamp((function(t){const s=Ii(t);return new Ge(s.seconds,s.nanos)})(r))}function Uf(r,e){return Gd(r,e).canonicalString()}function Gd(r,e){const t=(function(o){return new nt(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Xv(r){const e=nt.fromString(r);return ze(nw(e),10190,{key:e.toString()}),e}function Qd(r,e){return Uf(r.databaseId,e.path)}function Td(r,e){const t=Xv(e);if(t.get(1)!==r.databaseId.projectId)throw new ce(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ce(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ye(Zv(t))}function Jv(r,e){return Uf(r.databaseId,e)}function x1(r){const e=Xv(r);return e.length===4?nt.emptyPath():Zv(e)}function Yd(r){return new nt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Zv(r){return ze(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Oy(r,e,t){return{name:Qd(r,e),fields:t.value.mapValue.fields}}function V1(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ve(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,E){return _.useProto3Json?(ze(E===void 0||typeof E=="string",58123),xt.fromBase64String(E||"")):(ze(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),xt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const E=_.code===void 0?q.UNKNOWN:Kv(_.code);return new ce(E,_.message||"")})(h);t=new Qv(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Td(r,s.document.name),l=lr(s.document.updateTime),h=s.document.createTime?lr(s.document.createTime):Te.min(),f=new tn({mapValue:{fields:s.document.fields}}),g=jt.newFoundDocument(o,l,h,f),_=s.targetIds||[],E=s.removedTargetIds||[];t=new Wu(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Td(r,s.document),l=s.readTime?lr(s.readTime):Te.min(),h=jt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new Wu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Td(r,s.document),l=s.removedTargetIds||[];t=new Wu([],l,o,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new S1(o,l),f=s.targetId;t=new Gv(f,h)}}return t}function L1(r,e){let t;if(e instanceof ul)t={update:Oy(r,e.key,e.value)};else if(e instanceof bf)t={delete:Qd(r,e.key)};else if(e instanceof Oi)t={update:Oy(r,e.key,e.data),updateMask:H1(e.fieldMask)};else{if(!(e instanceof E1))return ve(16599,{Rt:e.type});t={verify:Qd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const f=h.transform;if(f instanceof Ja)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Za)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof el)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof tl)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw ve(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:O1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)})(r,e.precondition)),t}function b1(r,e){return r&&r.length>0?(ze(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?lr(o.updateTime):lr(l);return h.isEqual(Te.min())&&(h=lr(l)),new _1(h,o.transformResults||[])})(t,e)))):[]}function M1(r,e){return{documents:[Jv(r,e.path)]}}function F1(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Jv(r,o);const l=(function(_){if(_.length!==0)return tw(dr.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((E=>(function(C){return{field:_o(C.field),direction:z1(C.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Kd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function U1(r){let e=x1(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(S){const C=ew(S);return C instanceof dr&&Pv(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(S){return S.map((C=>(function(z){return new sc(vo(z.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(C)))})(t.orderBy));let f=null;t.limit&&(f=(function(S){let C;return C=typeof S=="object"?S.value:S,Ec(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(S){const C=!!S.before,M=S.values||[];return new ic(M,C)})(t.startAt));let _=null;return t.endAt&&(_=(function(S){const C=!S.before,M=S.values||[];return new ic(M,C)})(t.endAt)),s1(e,o,h,l,f,"F",g,_)}function j1(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ew(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=vo(t.unaryFilter.field);return _t.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=vo(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=vo(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=vo(t.unaryFilter.field);return _t.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(r):r.fieldFilter!==void 0?(function(t){return _t.create(vo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return dr.create(t.compositeFilter.filters.map((s=>ew(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(r):ve(30097,{filter:r})}function z1(r){return k1[r]}function B1(r){return P1[r]}function $1(r){return N1[r]}function _o(r){return{fieldPath:r.canonicalString()}}function vo(r){return Ot.fromServerFormat(r.fieldPath)}function tw(r){return r instanceof _t?(function(t){if(t.op==="=="){if(vy(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NAN"}};if(_y(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vy(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NOT_NAN"}};if(_y(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_o(t.field),op:B1(t.op),value:t.value}}})(r):r instanceof dr?(function(t){const s=t.getFilters().map((o=>tw(o)));return s.length===1?s[0]:{compositeFilter:{op:$1(t.op),filters:s}}})(r):ve(54877,{filter:r})}function H1(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function nw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class pi{constructor(e,t,s,o,l=Te.min(),h=Te.min(),f=xt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class W1{constructor(e){this.gt=e}}function q1(r){const e=U1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?qd(e,e.limit,"L"):e}/**
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
 */class K1{constructor(){this.Dn=new G1}addToCollectionParentIndex(e,t){return this.Dn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ti.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class G1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new wt(nt.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new wt(nt.comparator)).toArray()}}/**
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
 */const xy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rw=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(rw,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */class ko{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ko(0)}static ur(){return new ko(-1)}}/**
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
 */const Vy="LruGarbageCollector",Q1=1048576;function Ly([r,e],[t,s]){const o=Re(r,t);return o===0?Re(e,s):o}class Y1{constructor(e){this.Tr=e,this.buffer=new wt(Ly),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ly(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class X1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ne(Vy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Vo(t)?ne(Vy,"Ignoring IndexedDB error during garbage collection: ",t):await xo(t)}await this.Rr(3e5)}))}}class J1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(wc.ue);const s=new Y1(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(xy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,f,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o)))).next((S=>(s=S,f=Date.now(),this.removeTargets(e,s,t)))).next((S=>(l=S,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(_=Date.now(),go()<=Ne.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${S} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:S}))))}}function Z1(r,e){return new J1(r,e)}/**
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
 */class eC{constructor(){this.changes=new Es((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class tC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class nC{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ba(s.mutation,o,fn.empty(),Ge.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,De()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=De()){const o=us();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Va();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=us();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,De())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,s,o){let l=Mr();const h=za(),f=(function(){return za()})();return t.forEach(((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Oi)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Ba(E.mutation,_,E.mutation.getFieldMask(),Ge.now())):h.set(_.key,fn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>{var S;return f.set(_,new tC(E,(S=h.get(_))!==null&&S!==void 0?S:null))})),f)))}recalculateAndSaveOverlays(e,t){const s=za();let o=new rt(((h,f)=>h-f)),l=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||fn.empty();E=f.applyToLocalView(_,E),s.set(g,E);const S=(o.get(f.batchId)||De()).add(g);o=o.insert(f.batchId,S)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,E=g.value,S=Mv();E.forEach((C=>{if(!l.has(C)){const M=Wv(t.get(C),s.get(C));M!==null&&S.set(C,M),l=l.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,S))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):o1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):H.resolve(us());let f=Ga,g=l;return h.next((_=>H.forEach(_,((E,S)=>(f<S.largestBatchId&&(f=S.largestBatchId),l.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next((C=>{g=g.insert(E,C)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,De()))).next((E=>({batchId:f,changes:bv(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next((s=>{let o=Va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Va();return this.indexManager.getCollectionParents(e,l).next((f=>H.forEach(f,(g=>{const _=(function(S,C){return new Ic(C,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((S,C)=>{h=h.insert(S,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,jt.newInvalidDocument(E)))}));let f=Va();return h.forEach(((g,_)=>{const E=l.get(g);E!==void 0&&Ba(E.mutation,_,fn.empty(),Ge.now()),Ac(t,_)&&(f=f.insert(g,_))})),f}))}}/**
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
 */class rC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return H.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:q1(o.bundledQuery),readTime:lr(o.readTime)}})(t)),H.resolve()}}/**
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
 */class iC{constructor(){this.overlays=new rt(ye.comparator),this.kr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=us();return H.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=us(),l=t.length+1,h=new ye(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new rt(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=l.get(_.largestBatchId);E===null&&(E=us(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const f=us(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>f.set(_,E))),!(f.size()>=o)););return H.resolve(f)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new I1(t,s));let l=this.kr.get(t);l===void 0&&(l=De(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class sC{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class jf{constructor(){this.qr=new wt(Ct.Qr),this.$r=new wt(Ct.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Ct(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new ye(new nt([])),s=new Ct(t,e),o=new Ct(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ye(new nt([])),s=new Ct(t,e),o=new Ct(t,e+1);let l=De();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Ct(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ct{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ye.comparator(e.key,t.key)||Re(e.Hr,t.Hr)}static Ur(e,t){return Re(e.Hr,t.Hr)||ye.comparator(e.key,t.key)}}/**
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
 */class oC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new wt(Ct.Qr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new T1(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new Ct(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Pf:this.er-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new wt(Re);return t.forEach((o=>{const l=new Ct(o,0),h=new Ct(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{s=s.add(f.Hr)}))})),H.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ye.isDocumentKey(l)||(l=l.child(""));const h=new Ct(new ye(l),0);let f=new wt(Re);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Hr)),!0)}),h),H.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return H.forEach(t.mutations,(o=>{const l=new Ct(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new Ct(t,0),o=this.Yr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class aC{constructor(e){this.ni=e,this.docs=(function(){return new rt(ye.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let s=Mr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():jt.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Mr();const h=t.path,f=new ye(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||MA(bA(E),s)<=0||(o.has(E.key)||Ac(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,s,o){ve(9500)}ri(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new lC(this)}getSize(e){return H.resolve(this.size)}}class lC extends eC{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class uC{constructor(e){this.persistence=e,this.ii=new Es((t=>Of(t)),xf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.si=0,this.oi=new jf,this.targetCount=0,this._i=ko.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),H.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ko(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.hr(t),H.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),H.waitFor(l).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.oi.containsKey(t))}}/**
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
 */class iw{constructor(e,t){this.ai={},this.overlays={},this.ui=new wc(0),this.ci=!1,this.ci=!0,this.li=new sC,this.referenceDelegate=e(this),this.hi=new uC(this),this.indexManager=new K1,this.remoteDocumentCache=(function(o){return new aC(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new W1(t),this.Ti=new rC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new oC(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new cC(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return H.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class cC extends UA{constructor(e){super(),this.currentSequenceNumber=e}}class zf{constructor(e){this.persistence=e,this.Ai=new jf,this.Ri=null}static Vi(e){return new zf(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.mi,(s=>{const o=ye.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return H.or([()=>H.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ac{constructor(e,t){this.persistence=e,this.gi=new Es((s=>BA(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=Z1(this,t)}static Vi(e,t){return new ac(e,t)}Ii(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return H.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(s++,l.removeEntry(h,Te.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Bu(e.data.value)),t}Sr(e,t,s){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=De(),o=De();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Bf(e,t.fromCache,s,o)}}/**
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
 */class hC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return B0()?8:jA(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new hC;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(go()<=Ne.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",yo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(go()<=Ne.DEBUG&&ne("QueryEngine","Query:",yo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(go()<=Ne.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",yo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):H.resolve())}ps(e,t){if(Iy(t))return H.resolve(null);let s=ar(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=qd(t,null,"F"),s=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=De(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,f);return this.Ds(t,_,h,g.readTime)?this.ps(e,qd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,o){return Iy(t)||o.isEqual(Te.min())?H.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?H.resolve(null):(go()<=Ne.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),yo(t)),this.vs(e,h,t,LA(o,Ga)).next((f=>f)))}))}bs(e,t){let s=new wt(Vv(e));return t.forEach(((o,l)=>{Ac(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return go()<=Ne.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",yo(t)),this.gs.getDocumentsMatchingQuery(e,t,Ti.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const $f="LocalStore",fC=3e8;class pC{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new rt(Re),this.Ms=new Es((l=>Of(l)),xf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function mC(r,e,t,s){return new pC(r,e,t,s)}async function sw(r,e){const t=Ie(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],f=[];let g=De();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of l){f.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function gC(r,e){const t=Ie(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,E){const S=_.batch,C=S.keys();let M=H.resolve();return C.forEach((z=>{M=M.next((()=>E.getEntry(g,z))).next((G=>{const B=_.docVersions.get(z);ze(B!==null,48541),G.version.compareTo(B)<0&&(S.applyToRemoteDocument(G,_),G.isValidDocument()&&(G.setReadTime(_.commitVersion),E.addEntry(G)))}))})),M.next((()=>f.mutationQueue.removeMutationBatch(g,S)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let g=De();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function ow(r){const e=Ie(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function yC(r,e){const t=Ie(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((E,S)=>{const C=o.get(S);if(!C)return;f.push(t.hi.removeMatchingKeys(l,E.removedDocuments,S).next((()=>t.hi.addMatchingKeys(l,E.addedDocuments,S))));let M=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?M=M.withResumeToken(xt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):E.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(E.resumeToken,s)),o=o.insert(S,M),(function(G,B,pe){return G.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=fC?!0:pe.addedDocuments.size+pe.modifiedDocuments.size+pe.removedDocuments.size>0})(C,M,E)&&f.push(t.hi.updateTargetData(l,M))}));let g=Mr(),_=De();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(_C(l,h,e.documentUpdates).next((E=>{g=E.Ls,_=E.ks}))),!s.isEqual(Te.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next((S=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(E)}return H.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function _C(r,e,t){let s=De(),o=De();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=Mr();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Te.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ne($f,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function vC(r,e){const t=Ie(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Pf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function wC(r,e){const t=Ie(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,H.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new pi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Xd(r,e,t){const s=Ie(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Vo(h))throw h;ne($f,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function by(r,e,t){const s=Ie(r);let o=Te.min(),l=De();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const S=Ie(g),C=S.Ms.get(E);return C!==void 0?H.resolve(S.Fs.get(C)):S.hi.getTargetData(_,E)})(s,h,ar(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?l:De()))).next((f=>(EC(s,l1(e),f),{documents:f,qs:l})))))}function EC(r,e,t){let s=r.xs.get(e)||Te.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class My{constructor(){this.activeTargetIds=p1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TC{constructor(){this.Fo=new My,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new My,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IC{xo(e){}shutdown(){}}/**
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
 */const Fy="ConnectivityMonitor";class Uy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ne(Fy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ne(Fy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bu=null;function Jd(){return bu===null?bu=(function(){return 268435456+Math.round(2147483648*Math.random())})():bu++,"0x"+bu.toString(16)}/**
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
 */const Id="RestConnection",SC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===nc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=Jd(),f=this.Go(e,t.toUriEncodedString());ne(Id,`Sending RPC '${e}' ${h}:`,f,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(f),E=_s(_);return this.jo(e,f,g,s,E).then((S=>(ne(Id,`Received RPC '${e}' ${h}: `,S),S)),(S=>{throw wi(Id,`RPC '${e}' ${h} failed with error: `,S,"url: ",f,"request:",s),S}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Oo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=SC[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class CC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ft="WebChannelConnection";class RC extends AC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=Jd();return new Promise(((f,g)=>{const _=new lv;_.setWithCredentials(!0),_.listenOnce(uv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case zu.NO_ERROR:const S=_.getResponseJson();ne(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),f(S);break;case zu.TIMEOUT:ne(Ft,`RPC '${e}' ${h} timed out`),g(new ce(q.DEADLINE_EXCEEDED,"Request time out"));break;case zu.HTTP_ERROR:const C=_.getStatus();if(ne(Ft,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let M=_.getResponseJson();Array.isArray(M)&&(M=M[0]);const z=M==null?void 0:M.error;if(z&&z.status&&z.message){const G=(function(pe){const le=pe.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(le)>=0?le:q.UNKNOWN})(z.status);g(new ce(G,z.message))}else g(new ce(q.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ce(q.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ne(Ft,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ne(Ft,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}P_(e,t,s){const o=Jd(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=dv(),f=hv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=l.join("");ne(Ft,`Creating RPC '${e}' stream ${o}: ${E}`,g);const S=h.createWebChannel(E,g);this.T_(S);let C=!1,M=!1;const z=new CC({Ho:B=>{M?ne(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(C||(ne(Ft,`Opening RPC '${e}' stream ${o} transport.`),S.open(),C=!0),ne(Ft,`RPC '${e}' stream ${o} sending:`,B),S.send(B))},Yo:()=>S.close()}),G=(B,pe,le)=>{B.listen(pe,(ue=>{try{le(ue)}catch(Ee){setTimeout((()=>{throw Ee}),0)}}))};return G(S,xa.EventType.OPEN,(()=>{M||(ne(Ft,`RPC '${e}' stream ${o} transport opened.`),z.s_())})),G(S,xa.EventType.CLOSE,(()=>{M||(M=!0,ne(Ft,`RPC '${e}' stream ${o} transport closed`),z.__(),this.I_(S))})),G(S,xa.EventType.ERROR,(B=>{M||(M=!0,wi(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),z.__(new ce(q.UNAVAILABLE,"The operation could not be completed")))})),G(S,xa.EventType.MESSAGE,(B=>{var pe;if(!M){const le=B.data[0];ze(!!le,16349);const ue=le,Ee=(ue==null?void 0:ue.error)||((pe=ue[0])===null||pe===void 0?void 0:pe.error);if(Ee){ne(Ft,`RPC '${e}' stream ${o} received error:`,Ee);const be=Ee.status;let Se=(function(R){const N=ct[R];if(N!==void 0)return Kv(N)})(be),P=Ee.message;Se===void 0&&(Se=q.INTERNAL,P="Unknown error status: "+be+" with message "+Ee.message),M=!0,z.__(new ce(Se,P)),S.close()}else ne(Ft,`RPC '${e}' stream ${o} received:`,le),z.a_(le)}})),G(f,cv.STAT_EVENT,(B=>{B.stat===jd.PROXY?ne(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===jd.NOPROXY&&ne(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{z.o_()}),0),z}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Sd(){return typeof document<"u"?document:null}/**
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
 */function Pc(r){return new D1(r,!0)}/**
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
 */class aw{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const jy="PersistentStream";class lw{constructor(e,t,s,o,l,h,f,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new aw(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(br(t.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ce(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ne(jy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ne(jy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kC extends lw{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=V1(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Te.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?lr(h.readTime):Te.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Yd(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=Wd(g)?{documents:M1(l,g)}:{query:F1(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Yv(l,h.resumeToken);const _=Kd(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Te.min())>0){f.readTime=oc(l,h.snapshotVersion.toTimestamp());const _=Kd(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const s=j1(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Yd(this.serializer),t.removeTarget=e,this.k_(t)}}class PC extends lw{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=b1(e.writeResults,e.commitTime),s=lr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Yd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>L1(this.serializer,s)))};this.k_(t)}}/**
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
 */class NC{}class DC extends NC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ce(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,Gd(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ce(q.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,Gd(t,s),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ce(q.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class OC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(br(t),this._a=!1):ne("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const ms="RemoteStore";class xC{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{Ts(this)&&(ne(ms,"Restarting streams for network reachability change."),await(async function(g){const _=Ie(g);_.Ia.add(4),await hl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Nc(_)})(this))}))})),this.Aa=new OC(s,o)}}async function Nc(r){if(Ts(r))for(const e of r.da)await e(!0)}async function hl(r){for(const e of r.da)await e(!1)}function uw(r,e){const t=Ie(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Kf(t)?qf(t):Lo(t).x_()&&Wf(t,e))}function Hf(r,e){const t=Ie(r),s=Lo(t);t.Ta.delete(e),s.x_()&&cw(t,e),t.Ta.size===0&&(s.x_()?s.B_():Ts(t)&&t.Aa.set("Unknown"))}function Wf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Lo(r).H_(e)}function cw(r,e){r.Ra.$e(e),Lo(r).Y_(e)}function qf(r){r.Ra=new R1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Lo(r).start(),r.Aa.aa()}function Kf(r){return Ts(r)&&!Lo(r).M_()&&r.Ta.size>0}function Ts(r){return Ie(r).Ia.size===0}function hw(r){r.Ra=void 0}async function VC(r){r.Aa.set("Online")}async function LC(r){r.Ta.forEach(((e,t)=>{Wf(r,e)}))}async function bC(r,e){hw(r),Kf(r)?(r.Aa.la(e),qf(r)):r.Aa.set("Unknown")}async function MC(r,e,t){if(r.Aa.set("Online"),e instanceof Qv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(r,e)}catch(s){ne(ms,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await lc(r,s)}else if(e instanceof Wu?r.Ra.Ye(e):e instanceof Gv?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Te.min()))try{const s=await ow(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ta.get(_);E&&l.Ta.set(_,E.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const E=l.Ta.get(g);if(!E)return;l.Ta.set(g,E.withResumeToken(xt.EMPTY_BYTE_STRING,E.snapshotVersion)),cw(l,g);const S=new pi(E.target,g,_,E.sequenceNumber);Wf(l,S)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(s){ne(ms,"Failed to raise snapshot:",s),await lc(r,s)}}async function lc(r,e,t){if(!Vo(e))throw e;r.Ia.add(1),await hl(r),r.Aa.set("Offline"),t||(t=()=>ow(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ne(ms,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Nc(r)}))}function dw(r,e){return e().catch((t=>lc(r,t,e)))}async function Dc(r){const e=Ie(r),t=Ci(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Pf;for(;FC(e);)try{const o=await vC(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,UC(e,o)}catch(o){await lc(e,o)}fw(e)&&pw(e)}function FC(r){return Ts(r)&&r.Pa.length<10}function UC(r,e){r.Pa.push(e);const t=Ci(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function fw(r){return Ts(r)&&!Ci(r).M_()&&r.Pa.length>0}function pw(r){Ci(r).start()}async function jC(r){Ci(r).na()}async function zC(r){const e=Ci(r);for(const t of r.Pa)e.X_(t.mutations)}async function BC(r,e,t){const s=r.Pa.shift(),o=Mf.from(s,e,t);await dw(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Dc(r)}async function $C(r,e){e&&Ci(r).Z_&&await(async function(s,o){if((function(h){return A1(h)&&h!==q.ABORTED})(o.code)){const l=s.Pa.shift();Ci(s).N_(),await dw(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Dc(s)}})(r,e),fw(r)&&pw(r)}async function zy(r,e){const t=Ie(r);t.asyncQueue.verifyOperationInProgress(),ne(ms,"RemoteStore received new credentials");const s=Ts(t);t.Ia.add(3),await hl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Nc(t)}async function HC(r,e){const t=Ie(r);e?(t.Ia.delete(2),await Nc(t)):e||(t.Ia.add(2),await hl(t),t.Aa.set("Unknown"))}function Lo(r){return r.Va||(r.Va=(function(t,s,o){const l=Ie(t);return l.ia(),new kC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:VC.bind(null,r),e_:LC.bind(null,r),n_:bC.bind(null,r),J_:MC.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Kf(r)?qf(r):r.Aa.set("Unknown")):(await r.Va.stop(),hw(r))}))),r.Va}function Ci(r){return r.ma||(r.ma=(function(t,s,o){const l=Ie(t);return l.ia(),new PC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:jC.bind(null,r),n_:$C.bind(null,r),ea:zC.bind(null,r),ta:BC.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Dc(r)):(await r.ma.stop(),r.Pa.length>0&&(ne(ms,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class Gf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Gf(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qf(r,e){if(br("AsyncQueue",`${e}: ${r}`),Vo(r))return new ce(q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class So{static emptySet(e){return new So(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=Va(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof So)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new So;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class By{constructor(){this.fa=new rt(ye.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ve(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Po{constructor(e,t,s,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Po(e,t,So.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class WC{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class qC{constructor(){this.queries=$y(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Ie(t),l=o.queries;o.queries=$y(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(s)}))})(this,new ce(q.ABORTED,"Firestore shutting down"))}}function $y(){return new Es((r=>xv(r)),Sc)}async function KC(r,e){const t=Ie(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new WC,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Qf(h,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Yf(t)}async function GC(r,e){const t=Ie(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function QC(r,e){const t=Ie(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(s=!0);h.ya=o}}s&&Yf(t)}function YC(r,e,t){const s=Ie(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function Yf(r){r.Da.forEach((e=>{e.next()}))}var Zd,Hy;(Hy=Zd||(Zd={})).Fa="default",Hy.Cache="cache";class XC{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Po(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Zd.Cache}}/**
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
 */class mw{constructor(e){this.key=e}}class gw{constructor(e){this.key=e}}class JC{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=De(),this.mutatedKeys=De(),this.Xa=Vv(e),this.eu=new So(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new By,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,S)=>{const C=o.get(E),M=Ac(this.query,S)?S:null,z=!!C&&this.mutatedKeys.has(C.key),G=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations);let B=!1;C&&M?C.data.isEqual(M.data)?z!==G&&(s.track({type:3,doc:M}),B=!0):this.iu(C,M)||(s.track({type:2,doc:M}),B=!0,(g&&this.Xa(M,g)>0||_&&this.Xa(M,_)<0)&&(f=!0)):!C&&M?(s.track({type:0,doc:M}),B=!0):C&&!M&&(s.track({type:1,doc:C}),B=!0,(g||_)&&(f=!0)),B&&(M?(h=h.add(M),l=G?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{eu:h,ru:s,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((E,S)=>(function(M,z){const G=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:B})}};return G(M)-G(z)})(E.type,S.type)||this.Xa(E.doc,S.doc))),this.su(s),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new Po(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new By,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=De(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new gw(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new mw(s))})),t}uu(e){this.Ha=e.qs,this.Za=De();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Po.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Xf="SyncEngine";class ZC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class eR{constructor(e){this.key=e,this.lu=!1}}class tR{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Es((f=>xv(f)),Sc),this.Tu=new Map,this.Iu=new Set,this.du=new rt(ye.comparator),this.Eu=new Map,this.Au=new jf,this.Ru={},this.Vu=new Map,this.mu=ko.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function nR(r,e,t=!0){const s=Tw(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await yw(s,e,t,!0),o}async function rR(r,e){const t=Tw(r);await yw(t,e,!0,!1)}async function yw(r,e,t,s){const o=await wC(r.localStore,ar(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await iR(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&uw(r.remoteStore,o),f}async function iR(r,e,t,s,o){r.gu=(S,C,M)=>(async function(G,B,pe,le){let ue=B.view.nu(pe);ue.Ds&&(ue=await by(G.localStore,B.query,!1).then((({documents:P})=>B.view.nu(P,ue))));const Ee=le&&le.targetChanges.get(B.targetId),be=le&&le.targetMismatches.get(B.targetId)!=null,Se=B.view.applyChanges(ue,G.isPrimaryClient,Ee,be);return qy(G,B.targetId,Se._u),Se.snapshot})(r,S,C,M);const l=await by(r.localStore,e,!0),h=new JC(e,l.qs),f=h.nu(l.documents),g=cl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);qy(r,t,_._u);const E=new ZC(e,t,h);return r.Pu.set(e,E),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function sR(r,e,t){const s=Ie(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!Sc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Xd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Hf(s.remoteStore,o.targetId),ef(s,o.targetId)})).catch(xo)):(ef(s,o.targetId),await Xd(s.localStore,o.targetId,!0))}async function oR(r,e){const t=Ie(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Hf(t.remoteStore,s.targetId))}async function aR(r,e,t){const s=pR(r);try{const o=await(function(h,f){const g=Ie(h),_=Ge.now(),E=f.reduce(((M,z)=>M.add(z.key)),De());let S,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(M=>{let z=Mr(),G=De();return g.Os.getEntries(M,E).next((B=>{z=B,z.forEach(((pe,le)=>{le.isValidDocument()||(G=G.add(pe))}))})).next((()=>g.localDocuments.getOverlayedDocuments(M,z))).next((B=>{S=B;const pe=[];for(const le of f){const ue=w1(le,S.get(le.key).overlayedDocument);ue!=null&&pe.push(new Oi(le.key,ue,Cv(ue.value.mapValue),$n.exists(!0)))}return g.mutationQueue.addMutationBatch(M,_,pe,f)})).next((B=>{C=B;const pe=B.applyToLocalDocumentSet(S,G);return g.documentOverlayCache.saveOverlays(M,B.batchId,pe)}))})).then((()=>({batchId:C.batchId,changes:bv(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new rt(Re)),_=_.insert(f,g),h.Ru[h.currentUser.toKey()]=_})(s,o.batchId,t),await dl(s,o.changes),await Dc(s.remoteStore)}catch(o){const l=Qf(o,"Failed to persist write");t.reject(l)}}async function _w(r,e){const t=Ie(r);try{const s=await yC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?ze(h.lu,14607):o.removedDocuments.size>0&&(ze(h.lu,42227),h.lu=!1))})),await dl(t,s,e)}catch(s){await xo(s)}}function Wy(r,e,t){const s=Ie(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Ie(h);g.onlineState=f;let _=!1;g.queries.forEach(((E,S)=>{for(const C of S.wa)C.va(f)&&(_=!0)})),_&&Yf(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function lR(r,e,t){const s=Ie(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new rt(ye.comparator);h=h.insert(l,jt.newNoDocument(l,Te.min()));const f=De().add(l),g=new kc(Te.min(),new Map,new rt(Re),h,f);await _w(s,g),s.du=s.du.remove(l),s.Eu.delete(e),Jf(s)}else await Xd(s.localStore,e,!1).then((()=>ef(s,e,t))).catch(xo)}async function uR(r,e){const t=Ie(r),s=e.batch.batchId;try{const o=await gC(t.localStore,e);ww(t,s,null),vw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await dl(t,o)}catch(o){await xo(o)}}async function cR(r,e,t){const s=Ie(r);try{const o=await(function(h,f){const g=Ie(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,f).next((S=>(ze(S!==null,37113),E=S.keys(),g.mutationQueue.removeMutationBatch(_,S)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);ww(s,e,t),vw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await dl(s,o)}catch(o){await xo(o)}}function vw(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function ww(r,e,t){const s=Ie(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function ef(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||Ew(r,s)}))}function Ew(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Hf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Jf(r))}function qy(r,e,t){for(const s of t)s instanceof mw?(r.Au.addReference(s.key,e),hR(r,s)):s instanceof gw?(ne(Xf,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||Ew(r,s.key)):ve(19791,{yu:s})}function hR(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(ne(Xf,"New document in limbo: "+t),r.Iu.add(s),Jf(r))}function Jf(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new ye(nt.fromString(e)),s=r.mu.next();r.Eu.set(s,new eR(t)),r.du=r.du.insert(t,s),uw(r.remoteStore,new pi(ar(Vf(t.path)),s,"TargetPurposeLimboResolution",wc.ue))}}async function dl(r,e,t){const s=Ie(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((f,g)=>{h.push(s.gu(g,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const S=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(_){o.push(_);const S=Bf.Es(g.targetId,_);l.push(S)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,_){const E=Ie(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>H.forEach(_,(C=>H.forEach(C.Is,(M=>E.persistence.referenceDelegate.addReference(S,C.targetId,M))).next((()=>H.forEach(C.ds,(M=>E.persistence.referenceDelegate.removeReference(S,C.targetId,M)))))))))}catch(S){if(!Vo(S))throw S;ne($f,"Failed to update sequence numbers: "+S)}for(const S of _){const C=S.targetId;if(!S.fromCache){const M=E.Fs.get(C),z=M.snapshotVersion,G=M.withLastLimboFreeSnapshotVersion(z);E.Fs=E.Fs.insert(C,G)}}})(s.localStore,l))}async function dR(r,e){const t=Ie(r);if(!t.currentUser.isEqual(e)){ne(Xf,"User change. New user:",e.toKey());const s=await sw(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new ce(q.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await dl(t,s.Bs)}}function fR(r,e){const t=Ie(r),s=t.Eu.get(e);if(s&&s.lu)return De().add(s.key);{let o=De();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function Tw(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=_w.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lR.bind(null,e),e.hu.J_=QC.bind(null,e.eventManager),e.hu.pu=YC.bind(null,e.eventManager),e}function pR(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cR.bind(null,e),e}class uc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return mC(this.persistence,new dC,e.initialUser,this.serializer)}Du(e){return new iw(zf.Vi,this.serializer)}bu(e){return new TC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uc.provider={build:()=>new uc};class mR extends uc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ze(this.persistence.referenceDelegate instanceof ac,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new X1(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new iw((s=>ac.Vi(s,t)),this.serializer)}}class tf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Wy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dR.bind(null,this.syncEngine),await HC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new qC})()}createDatastore(e){const t=Pc(e.databaseInfo.databaseId),s=(function(l){return new RC(l)})(e.databaseInfo);return(function(l,h,f,g){return new DC(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,f){return new xC(s,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Wy(this.syncEngine,t,0)),(function(){return Uy.C()?new Uy:new IC})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,E){const S=new tR(o,l,h,f,g,_);return E&&(S.fu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ie(o);ne(ms,"RemoteStore shutting down."),l.Ia.add(5),await hl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}tf.provider={build:()=>new tf};/**
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
 */class gR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ri="FirestoreClient";class yR{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Rf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ne(Ri,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Ri,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Qf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ad(r,e){r.asyncQueue.verifyOperationInProgress(),ne(Ri,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await sw(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{wi("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{ne("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{wi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function Ky(r,e){r.asyncQueue.verifyOperationInProgress();const t=await _R(r);ne(Ri,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>zy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>zy(e.remoteStore,o))),r._onlineComponents=e}async function _R(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(Ri,"Using user provided OfflineComponentProvider");try{await Ad(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;wi("Error using user provided cache. Falling back to memory cache: "+t),await Ad(r,new uc)}}else ne(Ri,"Using default OfflineComponentProvider"),await Ad(r,new mR(void 0));return r._offlineComponents}async function Iw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(Ri,"Using user provided OnlineComponentProvider"),await Ky(r,r._uninitializedComponentsProvider._online)):(ne(Ri,"Using default OnlineComponentProvider"),await Ky(r,new tf))),r._onlineComponents}function vR(r){return Iw(r).then((e=>e.syncEngine))}async function wR(r){const e=await Iw(r),t=e.eventManager;return t.onListen=nR.bind(null,e.syncEngine),t.onUnlisten=sR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oR.bind(null,e.syncEngine),t}function ER(r,e,t={}){const s=new _i;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const E=new gR({next:C=>{E.Ou(),h.enqueueAndForget((()=>GC(l,S)));const M=C.docs.has(f);!M&&C.fromCache?_.reject(new ce(q.UNAVAILABLE,"Failed to get document because the client is offline.")):M&&C.fromCache&&g&&g.source==="server"?_.reject(new ce(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(C)},error:C=>_.reject(C)}),S=new XC(Vf(f.path),E,{includeMetadataChanges:!0,ka:!0});return KC(l,S)})(await wR(r),r.asyncQueue,e,t,s))),s.promise}/**
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
 */function Sw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Gy=new Map;/**
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
 */const Aw="firestore.googleapis.com",Qy=!0;class Yy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Aw,this.ssl=Qy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Qy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Q1)throw new ce(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ce(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ce(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ce(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new SA;switch(s.type){case"firstParty":return new kA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Gy.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Gy.delete(t),s.terminate())})(this),Promise.resolve()}}function TR(r,e,t,s={}){var o;r=Ei(r,Zf);const l=_s(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(hf(`https://${g}`),df("Firestore",!0)),h.host!==Aw&&h.host!==g&&wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!vi(_,f)&&(r._setSettings(_),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=Ut.MOCK_USER;else{E=V0(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ce(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Ut(C)}r._authCredentials=new AA(new pv(E,S))}}/**
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
 */class ep{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ep(this.firestore,e,this._query)}}class vt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}toJSON(){return{type:vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ll(t,vt._jsonSchema))return new vt(e,s||null,new ye(nt.fromString(t.referencePath)))}}vt._jsonSchemaVersion="firestore/documentReference/1.0",vt._jsonSchema={type:ht("string",vt._jsonSchemaVersion),referencePath:ht("string")};class nl extends ep{constructor(e,t,s){super(e,t,Vf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new ye(e))}withConverter(e){return new nl(this.firestore,e,this._path)}}function nf(r,e,...t){if(r=dt(r),arguments.length===1&&(e=Rf.newId()),xA("doc","path",e),r instanceof Zf){const s=nt.fromString(e,...t);return cy(s),new vt(r,null,new ye(s))}{if(!(r instanceof vt||r instanceof nl))throw new ce(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(nt.fromString(e,...t));return cy(s),new vt(r.firestore,r instanceof nl?r.converter:null,new ye(s))}}/**
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
 */const Xy="AsyncQueue";class Jy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new aw(this,"async_queue_retry"),this.oc=()=>{const s=Sd();s&&ne(Xy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Sd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Sd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new _i;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Vo(e))throw e;ne(Xy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,br("INTERNAL UNHANDLED ERROR: ",Zy(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Gf.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ve(47125,{hc:Zy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Zy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class fl extends Zf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Jy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jy(e),this._firestoreClient=void 0,await e}}}function IR(r,e){const t=typeof r=="object"?r:gc(),s=typeof r=="string"?r:nc,o=ki(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=y_("firestore");l&&TR(o,...l)}return o}function Cw(r){if(r._terminated)throw new ce(q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||SR(r),r._firestoreClient}function SR(r){var e,t,s;const o=r._freezeSettings(),l=(function(f,g,_,E){return new WA(f,g,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Sw(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new yR(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(xt.fromBase64String(e))}catch(t){throw new ce(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new An(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:An._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ll(e,An._jsonSchema))return An.fromBase64String(e.bytes)}}An._jsonSchemaVersion="firestore/bytes/1.0",An._jsonSchema={type:ht("string",An._jsonSchemaVersion),bytes:ht("string")};/**
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
 */class Oc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pl{constructor(e){this._methodName=e}}/**
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
 */class ur{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ur._jsonSchemaVersion}}static fromJSON(e){if(ll(e,ur._jsonSchema))return new ur(e.latitude,e.longitude)}}ur._jsonSchemaVersion="firestore/geoPoint/1.0",ur._jsonSchema={type:ht("string",ur._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
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
 */class cr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:cr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ll(e,cr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new cr(e.vectorValues);throw new ce(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cr._jsonSchemaVersion="firestore/vectorValue/1.0",cr._jsonSchema={type:ht("string",cr._jsonSchemaVersion),vectorValues:ht("object")};/**
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
 */const AR=/^__.*__$/;class CR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Oi(e,this.data,this.fieldMask,t,this.fieldTransforms):new ul(e,this.data,t,this.fieldTransforms)}}class Rw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Oi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function kw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:r})}}class tp{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new tp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return cc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(kw(this.Ec)&&AR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class RR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Pc(e)}Dc(e,t,s,o=!1){return new tp({Ec:e,methodName:t,bc:s,path:Ot.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pw(r){const e=r._freezeSettings(),t=Pc(r._databaseId);return new RR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function kR(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);ip("Data must be an object, but it was:",h,s);const f=Nw(s,h);let g,_;if(l.merge)g=new fn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const S of l.mergeFields){const C=rf(e,S,t);if(!h.contains(C))throw new ce(q.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Ow(E,C)||E.push(C)}g=new fn(E),_=h.fieldTransforms.filter((S=>g.covers(S.field)))}else g=null,_=h.fieldTransforms;return new CR(new tn(f),g,_)}class xc extends pl{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xc}}class np extends pl{_toFieldTransform(e){return new Hv(e.path,new Ja)}isEqual(e){return e instanceof np}}class rp extends pl{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new tl(e.serializer,Uv(e.serializer,this.Cc));return new Hv(e.path,t)}isEqual(e){return e instanceof rp&&this.Cc===e.Cc}}function PR(r,e,t,s){const o=r.Dc(1,e,t);ip("Data must be an object, but it was:",o,s);const l=[],h=tn.empty();Di(s,((g,_)=>{const E=sp(e,g,t);_=dt(_);const S=o.gc(E);if(_ instanceof xc)l.push(E);else{const C=Vc(_,S);C!=null&&(l.push(E),h.set(E,C))}}));const f=new fn(l);return new Rw(h,f,o.fieldTransforms)}function NR(r,e,t,s,o,l){const h=r.Dc(1,e,t),f=[rf(e,s,t)],g=[o];if(l.length%2!=0)throw new ce(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<l.length;C+=2)f.push(rf(e,l[C])),g.push(l[C+1]);const _=[],E=tn.empty();for(let C=f.length-1;C>=0;--C)if(!Ow(_,f[C])){const M=f[C];let z=g[C];z=dt(z);const G=h.gc(M);if(z instanceof xc)_.push(M);else{const B=Vc(z,G);B!=null&&(_.push(M),E.set(M,B))}}const S=new fn(_);return new Rw(E,S,h.fieldTransforms)}function Vc(r,e){if(Dw(r=dt(r)))return ip("Unsupported field value:",e,r),Nw(r,e);if(r instanceof pl)return(function(s,o){if(!kw(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const f of s){let g=Vc(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=dt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Uv(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ge.fromDate(s);return{timestampValue:oc(o.serializer,l)}}if(s instanceof Ge){const l=new Ge(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:oc(o.serializer,l)}}if(s instanceof ur)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof An)return{bytesValue:Yv(o.serializer,s._byteString)};if(s instanceof vt){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Uf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof cr)return(function(h,f){return{mapValue:{fields:{[Sv]:{stringValue:Av},[rc]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw f.wc("VectorValues must only contain numeric values.");return Lf(f.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${kf(s)}`)})(r,e)}function Nw(r,e){const t={};return _v(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(r,((s,o)=>{const l=Vc(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Dw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ge||r instanceof ur||r instanceof An||r instanceof vt||r instanceof pl||r instanceof cr)}function ip(r,e,t){if(!Dw(t)||!gv(t)){const s=kf(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function rf(r,e,t){if((e=dt(e))instanceof Oc)return e._internalPath;if(typeof e=="string")return sp(r,e);throw cc("Field path arguments must be of type string or ",r,!1,void 0,t)}const DR=new RegExp("[~\\*/\\[\\]]");function sp(r,e,t){if(e.search(DR)>=0)throw cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Oc(...e.split("."))._internalPath}catch{throw cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function cc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ce(q.INVALID_ARGUMENT,f+r+g)}function Ow(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class xw{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OR extends xw{data(){return super.data()}}function Vw(r,e){return typeof e=="string"?sp(r,e):e instanceof Oc?e._internalPath:e._delegate._internalPath}class xR{convertValue(e,t="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Di(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[rc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>at(h.doubleValue)));return new cr(l)}convertGeoPoint(e){return new ur(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Tc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Qa(e));default:return null}}convertTimestamp(e){const t=Ii(e);return new Ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=nt.fromString(e);ze(nw(s),9688,{name:e});const o=new Ya(s.get(1),s.get(3)),l=new ye(s.popFirst(5));return o.isEqual(t)||br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function VR(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class ba{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hs extends xw{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Vw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hs._jsonSchemaVersion="firestore/documentSnapshot/1.0",hs._jsonSchema={type:ht("string",hs._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class qu extends hs{data(e={}){return super.data(e)}}class $a{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ba(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new qu(this._firestore,this._userDataWriter,s.key,s,new ba(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new qu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new ba(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new qu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new ba(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:LR(f.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$a._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Rf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function LR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:r})}}/**
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
 */function Lw(r){r=Ei(r,vt);const e=Ei(r.firestore,fl);return ER(Cw(e),r._key).then((t=>FR(e,r,t)))}$a._jsonSchemaVersion="firestore/querySnapshot/1.0",$a._jsonSchema={type:ht("string",$a._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class bR extends xR{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}function bw(r,e,t){r=Ei(r,vt);const s=Ei(r.firestore,fl),o=VR(r.converter,e,t);return op(s,[kR(Pw(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,$n.none())])}function MR(r,e,t,...s){r=Ei(r,vt);const o=Ei(r.firestore,fl),l=Pw(o);let h;return h=typeof(e=dt(e))=="string"||e instanceof Oc?NR(l,"updateDoc",r._key,e,t,s):PR(l,"updateDoc",r._key,e),op(o,[h.toMutation(r._key,$n.exists(!0))])}function Cd(r){return op(Ei(r.firestore,fl),[new bf(r._key,$n.none())])}function op(r,e){return(function(s,o){const l=new _i;return s.asyncQueue.enqueueAndForget((async()=>aR(await vR(s),o,l))),l.promise})(Cw(r),e)}function FR(r,e,t){const s=t.docs.get(e._key),o=new bR(r);return new hs(r,o,e._key,s,new ba(t.hasPendingWrites,t.fromCache),e.converter)}function sf(){return new np("serverTimestamp")}function UR(r){return new rp("increment",r)}(function(e,t=!0){(function(o){Oo=o})(No),Hn(new Cn("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new fl(new CA(s.getProvider("auth-internal")),new PA(h,s.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ce(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ya(_.options.projectId,E)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),nn(sy,oy,e),nn(sy,oy,"esm2017")})();/**
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
 */const Mw="functions";/**
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
 */class jR{constructor(e,t,s,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,dn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||s.get().then(l=>this.messaging=l,()=>{}),this.appCheck||o==null||o.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),s=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:s,appCheckToken:o}}}/**
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
 */const of="us-central1";class zR{constructor(e,t,s,o,l=of,h=(...f)=>fetch(...f)){this.app=e,this.fetchImpl=h,this.emulatorOrigin=null,this.contextProvider=new jR(e,t,s,o),this.cancelAllRequests=new Promise(f=>{this.deleteService=()=>Promise.resolve(f())});try{const f=new URL(l);this.customDomain=f.origin+(f.pathname==="/"?"":f.pathname),this.region=of}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function BR(r,e,t){const s=_s(e);r.emulatorOrigin=`http${s?"s":""}://${e}:${t}`,s&&(hf(r.emulatorOrigin),df("Functions",!0))}const e_="@firebase/functions",t_="0.12.9";/**
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
 */const $R="auth-internal",HR="app-check-internal",WR="messaging-internal";function qR(r){const e=(t,{instanceIdentifier:s})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider($R),h=t.getProvider(WR),f=t.getProvider(HR);return new zR(o,l,h,f,s)};Hn(new Cn(Mw,e,"PUBLIC").setMultipleInstances(!0)),nn(e_,t_,r),nn(e_,t_,"esm2017")}/**
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
 */function KR(r=gc(),e=of){const s=ki(dt(r),Mw).getImmediate({identifier:e}),o=y_("functions");return o&&GR(s,...o),s}function GR(r,e,t){BR(dt(r),e,t)}qR();const Fw="@firebase/installations",ap="0.6.18";/**
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
 */const Uw=1e4,jw=`w:${ap}`,zw="FIS_v2",QR="https://firebaseinstallations.googleapis.com/v1",YR=3600*1e3,XR="installations",JR="Installations";/**
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
 */const ZR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gs=new vs(XR,JR,ZR);function Bw(r){return r instanceof qn&&r.code.includes("request-failed")}/**
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
 */function $w({projectId:r}){return`${QR}/projects/${r}/installations`}function Hw(r){return{token:r.token,requestStatus:2,expiresIn:tk(r.expiresIn),creationTime:Date.now()}}async function Ww(r,e){const s=(await e.json()).error;return gs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function qw({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function ek(r,{refreshToken:e}){const t=qw(r);return t.append("Authorization",nk(e)),t}async function Kw(r){const e=await r();return e.status>=500&&e.status<600?r():e}function tk(r){return Number(r.replace("s","000"))}function nk(r){return`${zw} ${r}`}/**
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
 */async function rk({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=$w(r),o=qw(r),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:zw,appId:r.appId,sdkVersion:jw},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await Kw(()=>fetch(s,f));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:Hw(_.authToken)}}else throw await Ww("Create Installation",g)}/**
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
 */function Gw(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function ik(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const sk=/^[cdef][\w-]{21}$/,af="";function ok(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=ak(r);return sk.test(t)?t:af}catch{return af}}function ak(r){return ik(r).substr(0,22)}/**
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
 */function Lc(r){return`${r.appName}!${r.appId}`}/**
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
 */const Qw=new Map;function Yw(r,e){const t=Lc(r);Xw(t,e),lk(t,e)}function Xw(r,e){const t=Qw.get(r);if(t)for(const s of t)s(e)}function lk(r,e){const t=uk();t&&t.postMessage({key:r,fid:e}),ck()}let cs=null;function uk(){return!cs&&"BroadcastChannel"in self&&(cs=new BroadcastChannel("[Firebase] FID Change"),cs.onmessage=r=>{Xw(r.data.key,r.data.fid)}),cs}function ck(){Qw.size===0&&cs&&(cs.close(),cs=null)}/**
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
 */const hk="firebase-installations-database",dk=1,ys="firebase-installations-store";let Rd=null;function lp(){return Rd||(Rd=I_(hk,dk,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ys)}}})),Rd}async function hc(r,e){const t=Lc(r),o=(await lp()).transaction(ys,"readwrite"),l=o.objectStore(ys),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&Yw(r,e.fid),e}async function Jw(r){const e=Lc(r),s=(await lp()).transaction(ys,"readwrite");await s.objectStore(ys).delete(e),await s.done}async function bc(r,e){const t=Lc(r),o=(await lp()).transaction(ys,"readwrite"),l=o.objectStore(ys),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&Yw(r,f.fid),f}/**
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
 */async function up(r){let e;const t=await bc(r.appConfig,s=>{const o=fk(s),l=pk(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===af?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function fk(r){const e=r||{fid:ok(),registrationStatus:0};return Zw(e)}function pk(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(gs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=mk(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gk(r)}:{installationEntry:e}}async function mk(r,e){try{const t=await rk(r,e);return hc(r.appConfig,t)}catch(t){throw Bw(t)&&t.customData.serverCode===409?await Jw(r.appConfig):await hc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function gk(r){let e=await n_(r.appConfig);for(;e.registrationStatus===1;)await Gw(100),e=await n_(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await up(r);return s||t}return e}function n_(r){return bc(r,e=>{if(!e)throw gs.create("installation-not-found");return Zw(e)})}function Zw(r){return yk(r)?{fid:r.fid,registrationStatus:0}:r}function yk(r){return r.registrationStatus===1&&r.registrationTime+Uw<Date.now()}/**
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
 */async function _k({appConfig:r,heartbeatServiceProvider:e},t){const s=vk(r,t),o=ek(r,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:jw,appId:r.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await Kw(()=>fetch(s,f));if(g.ok){const _=await g.json();return Hw(_)}else throw await Ww("Generate Auth Token",g)}function vk(r,{fid:e}){return`${$w(r)}/${e}/authTokens:generate`}/**
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
 */async function cp(r,e=!1){let t;const s=await bc(r.appConfig,l=>{if(!eE(l))throw gs.create("not-registered");const h=l.authToken;if(!e&&Tk(h))return l;if(h.requestStatus===1)return t=wk(r,e),l;{if(!navigator.onLine)throw gs.create("app-offline");const f=Sk(l);return t=Ek(r,f),f}});return t?await t:s.authToken}async function wk(r,e){let t=await r_(r.appConfig);for(;t.authToken.requestStatus===1;)await Gw(100),t=await r_(r.appConfig);const s=t.authToken;return s.requestStatus===0?cp(r,e):s}function r_(r){return bc(r,e=>{if(!eE(e))throw gs.create("not-registered");const t=e.authToken;return Ak(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ek(r,e){try{const t=await _k(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await hc(r.appConfig,s),t}catch(t){if(Bw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Jw(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await hc(r.appConfig,s)}throw t}}function eE(r){return r!==void 0&&r.registrationStatus===2}function Tk(r){return r.requestStatus===2&&!Ik(r)}function Ik(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+YR}function Sk(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function Ak(r){return r.requestStatus===1&&r.requestTime+Uw<Date.now()}/**
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
 */async function Ck(r){const e=r,{installationEntry:t,registrationPromise:s}=await up(e);return s?s.catch(console.error):cp(e).catch(console.error),t.fid}/**
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
 */async function Rk(r,e=!1){const t=r;return await kk(t),(await cp(t,e)).token}async function kk(r){const{registrationPromise:e}=await up(r);e&&await e}/**
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
 */function Pk(r){if(!r||!r.options)throw kd("App Configuration");if(!r.name)throw kd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw kd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function kd(r){return gs.create("missing-app-config-values",{valueName:r})}/**
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
 */const tE="installations",Nk="installations-internal",Dk=r=>{const e=r.getProvider("app").getImmediate(),t=Pk(e),s=ki(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Ok=r=>{const e=r.getProvider("app").getImmediate(),t=ki(e,tE).getImmediate();return{getId:()=>Ck(t),getToken:o=>Rk(t,o)}};function xk(){Hn(new Cn(tE,Dk,"PUBLIC")),Hn(new Cn(Nk,Ok,"PRIVATE"))}xk();nn(Fw,ap);nn(Fw,ap,"esm2017");/**
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
 */const dc="analytics",Vk="firebase_id",Lk="origin",bk=60*1e3,Mk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hp="https://www.googletagmanager.com/gtag/js";/**
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
 */const rn=new mc("@firebase/analytics");/**
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
 */const Fk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pn=new vs("analytics","Analytics",Fk);/**
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
 */function Uk(r){if(!r.startsWith(hp)){const e=pn.create("invalid-gtag-resource",{gtagURL:r});return rn.warn(e.message),""}return r}function nE(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function jk(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function zk(r,e){const t=jk("firebase-js-sdk-policy",{createScriptURL:Uk}),s=document.createElement("script"),o=`${hp}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function Bk(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function $k(r,e,t,s,o,l){const h=s[o];try{if(h)await e[h];else{const g=(await nE(t)).find(_=>_.measurementId===o);g&&await e[g.appId]}}catch(f){rn.error(f)}r("config",o,l)}async function Hk(r,e,t,s,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await nE(t);for(const g of h){const _=f.find(S=>S.measurementId===g),E=_&&e[_.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",s,o||{})}catch(l){rn.error(l)}}function Wk(r,e,t,s){async function o(l,...h){try{if(l==="event"){const[f,g]=h;await Hk(r,e,t,f,g)}else if(l==="config"){const[f,g]=h;await $k(r,e,t,s,f,g)}else if(l==="consent"){const[f,g]=h;r("consent",f,g)}else if(l==="get"){const[f,g,_]=h;r("get",f,g,_)}else if(l==="set"){const[f]=h;r("set",f)}else r(l,...h)}catch(f){rn.error(f)}}return o}function qk(r,e,t,s,o){let l=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=Wk(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function Kk(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(hp)&&t.src.includes(r))return t;return null}/**
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
 */const Gk=30,Qk=1e3;class Yk{constructor(e={},t=Qk){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const rE=new Yk;function Xk(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Jk(r){var e;const{appId:t,apiKey:s}=r,o={method:"GET",headers:Xk(s)},l=Mk.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let f="";try{const g=await h.json();!((e=g.error)===null||e===void 0)&&e.message&&(f=g.error.message)}catch{}throw pn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:f})}return h.json()}async function Zk(r,e=rE,t){const{appId:s,apiKey:o,measurementId:l}=r.options;if(!s)throw pn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw pn.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new nP;return setTimeout(async()=>{f.abort()},bk),iE({appId:s,apiKey:o,measurementId:l},h,f,e)}async function iE(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=rE){var l;const{appId:h,measurementId:f}=r;try{await eP(s,e)}catch(g){if(f)return rn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:f};throw g}try{const g=await Jk(r);return o.deleteThrottleMetadata(h),g}catch(g){const _=g;if(!tP(_)){if(o.deleteThrottleMetadata(h),f)return rn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:h,measurementId:f};throw g}const E=Number((l=_==null?void 0:_.customData)===null||l===void 0?void 0:l.httpStatus)===503?Ng(t,o.intervalMillis,Gk):Ng(t,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(h,S),rn.debug(`Calling attemptFetch again in ${E} millis`),iE(r,S,s,o)}}function eP(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),s(pn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function tP(r){if(!(r instanceof qn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class nP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rP(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const l=await e,h=Object.assign(Object.assign({},s),{send_to:l});r("event",t,h)}}/**
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
 */async function iP(){if(pf())try{await mf()}catch(r){return rn.warn(pn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return rn.warn(pn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sP(r,e,t,s,o,l,h){var f;const g=Zk(r);g.then(M=>{t[M.measurementId]=M.appId,r.options.measurementId&&M.measurementId!==r.options.measurementId&&rn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${M.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(M=>rn.error(M)),e.push(g);const _=iP().then(M=>{if(M)return s.getId()}),[E,S]=await Promise.all([g,_]);Kk(l)||zk(l,E.measurementId),o("js",new Date);const C=(f=h==null?void 0:h.config)!==null&&f!==void 0?f:{};return C[Lk]="firebase",C.update=!0,S!=null&&(C[Vk]=S),o("config",E.measurementId,C),E.measurementId}/**
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
 */class oP{constructor(e){this.app=e}_delete(){return delete Ha[this.app.options.appId],Promise.resolve()}}let Ha={},i_=[];const s_={};let Pd="dataLayer",aP="gtag",o_,sE,a_=!1;function lP(){const r=[];if(ff()&&r.push("This is a browser extension environment."),w_()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=pn.create("invalid-analytics-context",{errorInfo:e});rn.warn(t.message)}}function uP(r,e,t){lP();const s=r.options.appId;if(!s)throw pn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)rn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pn.create("no-api-key");if(Ha[s]!=null)throw pn.create("already-exists",{id:s});if(!a_){Bk(Pd);const{wrappedGtag:l,gtagCore:h}=qk(Ha,i_,s_,Pd,aP);sE=l,o_=h,a_=!0}return Ha[s]=sP(r,i_,s_,e,o_,Pd,t),new oP(r)}function cP(r=gc()){r=dt(r);const e=ki(r,dc);return e.isInitialized()?e.getImmediate():hP(r)}function hP(r,e={}){const t=ki(r,dc);if(t.isInitialized()){const o=t.getImmediate();if(vi(e,t.getOptions()))return o;throw pn.create("already-initialized")}return t.initialize({options:e})}async function dP(){if(ff()||!w_()||!pf())return!1;try{return await mf()}catch{return!1}}function fP(r,e,t,s){r=dt(r),rP(sE,Ha[r.app.options.appId],e,t,s).catch(o=>rn.error(o))}const l_="@firebase/analytics",u_="0.10.17";function pP(){Hn(new Cn(dc,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return uP(s,o,t)},"PUBLIC")),Hn(new Cn("analytics-internal",r,"PRIVATE")),nn(l_,u_),nn(l_,u_,"esm2017");function r(e){try{const t=e.getProvider(dc).getImmediate();return{logEvent:(s,o,l)=>fP(t,s,o,l)}}catch(t){throw pn.create("interop-component-reg-failed",{reason:t})}}}pP();const mP={apiKey:"AIzaSyCq6qS6nyYuWH-yLoFOjnrdiSZAyH3ei0U",authDomain:"time-based---otp-authenticator.firebaseapp.com",projectId:"time-based---otp-authenticator",storageBucket:"time-based---otp-authenticator.firebasestorage.app",messagingSenderId:"177998085204",appId:"1:177998085204:web:a112e912c3b3ca018581c1",measurementId:"G-2K9VC5SCXR"},Mc=S_(mP),fc=wA(Mc),lf=IR(Mc);KR(Mc);typeof window<"u"&&dP().then(r=>{r&&cP(Mc)}).catch(r=>{console.debug("Analytics not supported in this environment:",r)});const c_=120*1e3,h_=30*1e3;async function gP(r,e){try{const s=await(await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:`Your Verification Code: ${e}`,_template:"box",_captcha:"false",Verification_Code:e,Expires_In:"2 Minutes",Instructions:"Use this 6-digit code to complete your login. It will expire in exactly 2 minutes. If you did not request this, you can ignore this email."})})).json();return console.log("[Email Dispatch Status]:",s),s}catch(t){return console.error("[Email Dispatch Network Error]:",t),{success:"false",message:t.message}}}async function oE(r){const e=r.trim().toLowerCase(),t=nf(lf,"otps",e),s=await Lw(t);if(s.exists()){const g=s.data();if(g.createdAt&&g.createdAt.toMillis){const _=Date.now()-g.createdAt.toMillis();if(_<h_){const E=Math.ceil((h_-_)/1e3);throw new Error(`Please wait ${E} seconds before requesting a new code.`)}}}const l=Math.floor(1e5+Math.random()*9e5).toString(),h=Date.now(),f=Ge.fromMillis(h+c_);return await bw(t,{email:e,otp:l,createdAt:sf(),expiresAt:f,attempts:0,maxAttempts:5}),gP(e,l).catch(g=>console.warn("[Background Email Dispatch Notice]:",g)),{success:!0,expiresInMs:c_,message:"Verification code sent to your email inbox."}}async function yP(r,e){var C;const t=r.trim().toLowerCase(),s=e.trim(),o=nf(lf,"otps",t),l=await Lw(o);if(!l.exists())throw new Error("No active verification code found for this email. Please request a new code.");const h=l.data(),f=Date.now(),g=(C=h.expiresAt)!=null&&C.toMillis?h.expiresAt.toMillis():0;if(f>g)throw await Cd(o),new Error("This verification code has expired (2 minutes limit). Please request a new code.");if(h.attempts>=(h.maxAttempts||5))throw await Cd(o),new Error("Too many incorrect attempts. This OTP has been invalidated for security. Please request a new code.");if(h.otp!==s){await MR(o,{attempts:UR(1)});const M=(h.maxAttempts||5)-(h.attempts+1);throw new Error(`Incorrect verification code. ${M>0?M+" attempt(s) remaining.":"Code invalidated."}`)}await Cd(o);const _=`OTP_${btoa(t).replace(/[^a-zA-Z0-9]/g,"").slice(0,10)}#Auth2026!`;let E;try{E=await sS(fc,t,_)}catch(M){if(M.code==="auth/user-not-found"||M.code==="auth/invalid-credential"||M.code==="auth/wrong-password")try{E=await iS(fc,t,_)}catch(z){throw z.code==="auth/email-already-in-use"?new Error("Account exists with a different password. Please reset or contact admin."):z}else throw M}const S=E.user;try{const M=nf(lf,"users",S.uid);await bw(M,{email:t,lastLoginAt:sf(),createdAt:sf()},{merge:!0})}catch(M){console.warn("Firestore user profile sync notice:",M.message)}return{success:!0,user:S}}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=r=>r==null?void 0:r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function vP(r,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:_P(r),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=r=>{let e="",t=!1;for(const s of r){if(s==="-"||s==="_"||s<=" "){t=e.length>0;continue}e.length===0?e+=s.toLowerCase():e+=t?s.toUpperCase():s,t=!1}return e};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=r=>{const e=wP(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Nd(r){return r!=null}function TP(r,e={}){var C,M;const t=e.attributeNames??{},s=z=>t[z]??z,o=r.size??r.width??as.width,l=r.size??r.height??as.height,h=((C=r.aliases)==null?void 0:C.filter(z=>typeof z=="string"&&z.trim()!=="").map(z=>`lucide-${z}`))??[],f=[...r.name?[`lucide-${r.name}`]:[],...h],g=((M=e.className)==null?void 0:M.split(" ").filter(Boolean))??[],_=e.includeDefaultClasses===!1?uf(...g):uf("lucide",...f,...g),E=e.absoluteStrokeWidth?Number(e.strokeWidth??as["stroke-width"])*Number(r.size??r.width??as.width)/Number(e.size??e.width??as.width):e.strokeWidth??as["stroke-width"];return["svg",{...Object.entries(as).reduce((z,[G,B])=>(z[s(G)]=B,z),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&Nd(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&Nd(e.width)&&{[s("width")]:e.width},..."height"in e&&Nd(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:E,..._&&{[s("class")]:_},[s("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},r.node.map(z=>{const[G,B,pe]=z,le=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...B}:B;return pe?[G,le,pe]:[G,le]})]}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function IP(r,e={}){return TP(r,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},AP=$e.createContext({}),CP=()=>$e.useContext(AP),RP=$e.forwardRef(({color:r,size:e,width:t,height:s,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:h,className:f="",children:g,iconNode:_=[],icon:E={node:_,aliases:[],size:24},...S},C)=>{const{size:M=24,strokeWidth:z=2,absoluteStrokeWidth:G=!1,nonScalingStroke:B=!1,color:pe="currentColor",className:le=""}=CP()??{},ue=!!g||SP(S),[Ee,be,Se=[]]=IP(E,{color:r??pe,width:t??e??M,height:s??e??M,strokeWidth:o??z,absoluteStrokeWidth:l??G,nonScalingStroke:h??B,className:uf(le,f),hasA11yProp:ue,attributes:S});return $e.createElement(Ee,{ref:C,...be},[...Se.map(([P,I])=>$e.createElement(P,I)),...Array.isArray(g)?g:[g]])});/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function aE(r,e=[],t=[]){const s=typeof r=="string"?vP(r,e,t):r,o=$e.forwardRef(({className:l,...h},f)=>$e.createElement(RP,{ref:f,icon:s,className:l,...h}));return s.name&&(o.displayName=EP(s.name)),o}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};lE.node;const uE=aE(lE);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE={name:"rotate-cw",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]};cE.node;const kP=aE(cE);function PP({onOtpSent:r,initialEmail:e=""}){const[t,s]=$e.useState(e),[o,l]=$e.useState(!1),[h,f]=$e.useState(""),[g,_]=$e.useState(!1),E=C=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(C.trim()),S=async C=>{C.preventDefault(),f("");const M=t.trim().toLowerCase();if(!M){f("Please enter your email address.");return}if(!E(M)){f("Please enter a valid email address.");return}l(!0);try{const z=await oE(M);z&&z.success?r({email:M,expiresInMs:z.expiresInMs||12e4}):f("Unable to send verification code. Please try again.")}catch(z){console.error("Error sending OTP:",z),f(z.message||"Failed to send OTP. Please try again.")}finally{l(!1)}};return J.jsxs("div",{id:"email-step-view",className:"auth-form-container",children:[J.jsxs("div",{className:"brand-header",children:[J.jsx("h1",{className:"brand-title",children:"AuthVault"}),J.jsx("p",{className:"brand-tagline",children:g?"Initialize an encrypted vault with time-based verification.":"Zero-knowledge time-based verification. Direct to inbox."})]}),h&&J.jsxs("div",{className:"alert-box alert-error",id:"email-error-alert",role:"alert",children:[J.jsx(uE,{size:16,style:{flexShrink:0,marginTop:"2px"}}),J.jsx("span",{children:h})]}),J.jsxs("form",{onSubmit:S,noValidate:!0,className:"auth-form",children:[J.jsxs("div",{className:"form-group",children:[J.jsx("label",{htmlFor:"email-input",className:"form-label",children:"Email"}),J.jsx("input",{id:"email-input",type:"email",className:"form-input",placeholder:"operator@security.internal",value:t,onChange:C=>{s(C.target.value),h&&f("")},disabled:o,autoFocus:!0,autoComplete:"email",required:!0})]}),J.jsx("div",{children:J.jsx("button",{id:"send-otp-btn",type:"submit",className:"btn-primary",disabled:o||!t.trim(),children:o?J.jsxs(J.Fragment,{children:[J.jsx("span",{className:"spinner","aria-hidden":"true"}),J.jsx("span",{children:"Sending token..."})]}):J.jsx("span",{children:g?"Create vault":"Sign in"})})}),J.jsx("div",{className:"secondary-action-wrapper",children:J.jsx("button",{id:"toggle-vault-mode-btn",type:"button",className:"btn-link",onClick:()=>{_(!g),f("")},disabled:o,children:g?"Sign in to existing vault":"Create vault"})})]})]})}function NP({email:r,expiresInMs:e=12e4,onBack:t,onVerified:s}){const[o,l]=$e.useState(["","","","","",""]),[h,f]=$e.useState(!1),[g,_]=$e.useState(!1),[E,S]=$e.useState(""),[C,M]=$e.useState(""),[z,G]=$e.useState(!1),B=Math.floor(e/1e3),[pe,le]=$e.useState(B),[ue,Ee]=$e.useState(!1),[be,Se]=$e.useState(30),P=$e.useRef([]);$e.useEffect(()=>{if(pe<=0){Ee(!0);return}const Ae=setInterval(()=>{le(fe=>fe<=1?(Ee(!0),0):fe-1)},1e3);return()=>clearInterval(Ae)},[pe]),$e.useEffect(()=>{if(be<=0)return;const Ae=setInterval(()=>{Se(fe=>fe>0?fe-1:0)},1e3);return()=>clearInterval(Ae)},[be]);const I=Ae=>{const fe=Math.floor(Ae/60),de=Ae%60;return`${String(fe).padStart(2,"0")}:${String(de).padStart(2,"0")}`},R=()=>{G(!0),setTimeout(()=>G(!1),300)},N=(Ae,fe)=>{var ee;if(ue)return;const de=fe.replace(/\D/g,"");if(!de&&fe!=="")return;const X=[...o];X[Ae]=de?de.slice(-1):"",l(X),S(""),de&&Ae<5&&((ee=P.current[Ae+1])==null||ee.focus());const se=X.join("");se.length===6&&A(se)},O=(Ae,fe)=>{var de;fe.key==="Backspace"&&!o[Ae]&&Ae>0&&((de=P.current[Ae-1])==null||de.focus())},V=Ae=>{var de,X;if(ue)return;Ae.preventDefault();const fe=Ae.clipboardData.getData("text").trim().replace(/\D/g,"");if(fe.length>=6){const se=fe.slice(0,6).split("");l(se),(de=P.current[5])==null||de.focus(),A(se.join(""))}else if(fe.length>0){const se=[...o];fe.split("").forEach((x,$)=>{$<6&&(se[$]=x)}),l(se);const ee=Math.min(fe.length,5);(X=P.current[ee])==null||X.focus()}},A=async Ae=>{const fe=Ae||o.join("");if(fe.length!==6){S("Please enter all 6 digits."),R();return}if(ue){S("Security token expired (2 min limit). Please request a fresh token."),R();return}f(!0),S("");try{const de=await yP(r,fe);de&&de.success&&s(de.user)}catch(de){console.error("Error verifying OTP:",de),S(de.message||"Invalid verification token. Please try again."),R()}finally{f(!1)}},Ze=async()=>{var Ae;if(!(g||be>0)){_(!0),S("");try{const fe=await oE(r);fe&&fe.success&&(l(["","","","","",""]),le(Math.floor((fe.expiresInMs||12e4)/1e3)),Ee(!1),Se(30),(Ae=P.current[0])==null||Ae.focus(),M("New security token dispatched to your email."))}catch(fe){console.error("Resend error:",fe),S(fe.message||"Failed to dispatch new token.")}finally{_(!1)}}};return J.jsxs("div",{id:"otp-step-view",className:"auth-form-container",children:[J.jsxs("div",{className:"brand-header",children:[J.jsx("h1",{className:"brand-title",children:"AuthVault"}),J.jsxs("p",{className:"brand-tagline",children:["Enter the 6-digit security token dispatched to ",J.jsx("span",{className:"highlight-text",children:r})]})]}),C&&J.jsx("div",{className:"alert-box alert-success",id:"info-message-alert",children:J.jsx("span",{children:C})}),E&&J.jsxs("div",{className:"alert-box alert-error",id:"otp-error-alert",role:"alert",children:[J.jsx(uE,{size:16,style:{flexShrink:0,marginTop:"2px"}}),J.jsx("span",{children:E})]}),J.jsxs("div",{className:"timer-bar",id:"timer-banner",children:[J.jsxs("div",{className:"timer-left",children:[J.jsx("span",{children:"Token validity:"}),J.jsx("span",{className:"timer-countdown",id:"countdown-display",children:I(pe)})]}),J.jsx("div",{children:ue?J.jsxs("span",{className:"timer-badge expired",id:"badge-expired",children:[J.jsx("span",{className:"status-dot"}),"Expired"]}):J.jsxs("span",{className:"timer-badge active",id:"badge-active",children:[J.jsx("span",{className:"status-dot"}),"Active"]})})]}),J.jsx("div",{className:`otp-container ${z?"shake":""}`,onPaste:V,children:o.map((Ae,fe)=>J.jsx("input",{ref:de=>P.current[fe]=de,id:`otp-digit-${fe}`,type:"text",inputMode:"numeric",maxLength:1,className:`otp-box ${Ae?"filled":""} ${E?"error":""}`,value:Ae,onChange:de=>N(fe,de.target.value),onKeyDown:de=>O(fe,de),disabled:h||ue,autoFocus:fe===0,"aria-label":`Digit ${fe+1}`},fe))}),J.jsx("div",{children:J.jsx("button",{id:"verify-otp-btn",type:"button",className:"btn-primary",onClick:()=>A(),disabled:h||ue||o.join("").length!==6,children:h?J.jsxs(J.Fragment,{children:[J.jsx("span",{className:"spinner","aria-hidden":"true"}),J.jsx("span",{children:"Verifying token..."})]}):J.jsx("span",{children:"Verify & Enter"})})}),J.jsxs("div",{className:"otp-actions-row",children:[J.jsx("button",{id:"back-to-email-btn",type:"button",className:"btn-link",onClick:t,disabled:h,children:"Change email"}),J.jsxs("button",{id:"resend-otp-btn",type:"button",className:"btn-link",onClick:Ze,disabled:g||!ue&&be>0,children:[g&&J.jsx(kP,{size:13,className:"spinner"}),J.jsx("span",{children:g?"Dispatching...":be>0&&!ue?`Resend token (${be}s)`:"Resend token"})]})]})]})}function DP({user:r}){var s;const e=async()=>{try{await uS(fc)}catch(o){console.error("Error signing out:",o)}},t=(s=r==null?void 0:r.metadata)!=null&&s.creationTime?new Date(r.metadata.creationTime).toLocaleString():new Date().toLocaleTimeString();return J.jsxs("div",{id:"success-dashboard-view",className:"session-container",children:[J.jsxs("div",{className:"brand-header",children:[J.jsx("h1",{className:"brand-title",children:"AuthVault"}),J.jsxs("div",{className:"session-badge",children:[J.jsx("span",{className:"status-dot"}),J.jsx("span",{children:"Session Active"})]}),J.jsx("p",{className:"brand-tagline",children:"Vault clearance granted. Secure session established via time-based token."})]}),J.jsxs("div",{className:"session-props-table",id:"user-profile-box",children:[J.jsxs("div",{className:"session-prop-row",children:[J.jsx("span",{className:"prop-label",children:"Identity"}),J.jsx("span",{className:"prop-value",id:"profile-email",children:(r==null?void 0:r.email)||"Authenticated Operator"})]}),J.jsxs("div",{className:"session-prop-row",children:[J.jsx("span",{className:"prop-label",children:"UID"}),J.jsx("span",{className:"prop-value",id:"profile-uid",style:{maxWidth:"240px",overflow:"hidden",textOverflow:"ellipsis"},title:r==null?void 0:r.uid,children:r==null?void 0:r.uid})]}),J.jsxs("div",{className:"session-prop-row",children:[J.jsx("span",{className:"prop-label",children:"Clearance Type"}),J.jsx("span",{className:"prop-value",id:"profile-auth-method",children:"Time-Based OTP (Verified)"})]}),J.jsxs("div",{className:"session-prop-row",children:[J.jsx("span",{className:"prop-label",children:"Timestamp"}),J.jsx("span",{className:"prop-value",children:t})]})]}),J.jsx("button",{id:"logout-btn",type:"button",className:"btn-secondary",onClick:e,children:J.jsx("span",{children:"Disconnect Session"})})]})}function OP(){const[r,e]=$e.useState(null),[t,s]=$e.useState(!0),[o,l]=$e.useState("email"),[h,f]=$e.useState({email:"",expiresInMs:12e4});$e.useEffect(()=>{const S=lS(fc,C=>{e(C),s(!1)});return()=>S()},[]);const g=S=>{f(S),l("otp")},_=()=>{l("email")},E=S=>{S&&e(S)};return J.jsx("main",{className:"app-container",children:J.jsx("div",{className:"auth-wrapper",children:t?J.jsxs("div",{style:{padding:"40px 0"},children:[J.jsx("div",{className:"spinner spinner-light",style:{width:"20px",height:"20px",marginBottom:"12px"}}),J.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px"},children:"Initializing authentication system..."})]}):r?J.jsx(DP,{user:r}):o==="email"?J.jsx(PP,{onOtpSent:g,initialEmail:h.email}):J.jsx(NP,{email:h.email,expiresInMs:h.expiresInMs,onBack:_,onVerified:E})})})}S0.createRoot(document.getElementById("root")).render(J.jsx(y0.StrictMode,{children:J.jsx(OP,{})}));
