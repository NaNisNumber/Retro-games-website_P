function My(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Do={},Fy={get exports(){return Do},set exports(t){Do=t}},xl={},w={},Uy={get exports(){return w},set exports(t){w=t}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=Symbol.for("react.element"),zy=Symbol.for("react.portal"),By=Symbol.for("react.fragment"),Wy=Symbol.for("react.strict_mode"),$y=Symbol.for("react.profiler"),jy=Symbol.for("react.provider"),Vy=Symbol.for("react.context"),Hy=Symbol.for("react.forward_ref"),Gy=Symbol.for("react.suspense"),Ky=Symbol.for("react.memo"),qy=Symbol.for("react.lazy"),_h=Symbol.iterator;function Qy(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var Vp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hp=Object.assign,Gp={};function li(t,e,n){this.props=t,this.context=e,this.refs=Gp,this.updater=n||Vp}li.prototype.isReactComponent={};li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Kp(){}Kp.prototype=li.prototype;function yc(t,e,n){this.props=t,this.context=e,this.refs=Gp,this.updater=n||Vp}var wc=yc.prototype=new Kp;wc.constructor=yc;Hp(wc,li.prototype);wc.isPureReactComponent=!0;var vh=Array.isArray,qp=Object.prototype.hasOwnProperty,Ec={current:null},Qp={key:!0,ref:!0,__self:!0,__source:!0};function Yp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qp.call(e,r)&&!Qp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ns,type:t,key:s,ref:o,props:i,_owner:Ec.current}}function Yy(t,e){return{$$typeof:Ns,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ns}function Jy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yh=/\/+/g;function ca(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jy(""+t.key):e.toString(36)}function vo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ns:case zy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ca(o,0):r,vh(i)?(n="",t!=null&&(n=t.replace(yh,"$&/")+"/"),vo(i,e,n,"",function(u){return u})):i!=null&&(Sc(i)&&(i=Yy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(yh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ca(s,l);o+=vo(s,e,n,a,i)}else if(a=Qy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ca(s,l++),o+=vo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ys(t,e,n){if(t==null)return t;var r=[],i=0;return vo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Xy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},yo={transition:null},Zy={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:yo,ReactCurrentOwner:Ec};$.Children={map:Ys,forEach:function(t,e,n){Ys(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ys(t,function(){e++}),e},toArray:function(t){return Ys(t,function(e){return e})||[]},only:function(t){if(!Sc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$.Component=li;$.Fragment=By;$.Profiler=$y;$.PureComponent=yc;$.StrictMode=Wy;$.Suspense=Gy;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;$.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Hp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ec.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)qp.call(e,a)&&!Qp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ns,type:t.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(t){return t={$$typeof:Vy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jy,_context:t},t.Consumer=t};$.createElement=Yp;$.createFactory=function(t){var e=Yp.bind(null,t);return e.type=t,e};$.createRef=function(){return{current:null}};$.forwardRef=function(t){return{$$typeof:Hy,render:t}};$.isValidElement=Sc;$.lazy=function(t){return{$$typeof:qy,_payload:{_status:-1,_result:t},_init:Xy}};$.memo=function(t,e){return{$$typeof:Ky,type:t,compare:e===void 0?null:e}};$.startTransition=function(t){var e=yo.transition;yo.transition={};try{t()}finally{yo.transition=e}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(t,e){return ze.current.useCallback(t,e)};$.useContext=function(t){return ze.current.useContext(t)};$.useDebugValue=function(){};$.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};$.useEffect=function(t,e){return ze.current.useEffect(t,e)};$.useId=function(){return ze.current.useId()};$.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};$.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};$.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};$.useMemo=function(t,e){return ze.current.useMemo(t,e)};$.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};$.useRef=function(t){return ze.current.useRef(t)};$.useState=function(t){return ze.current.useState(t)};$.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};$.useTransition=function(){return ze.current.useTransition()};$.version="18.2.0";(function(t){t.exports=$})(Uy);const e0=jp(w),Za=My({__proto__:null,default:e0},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=w,n0=Symbol.for("react.element"),r0=Symbol.for("react.fragment"),i0=Object.prototype.hasOwnProperty,s0=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o0={key:!0,ref:!0,__self:!0,__source:!0};function Jp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)i0.call(e,r)&&!o0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:n0,type:t,key:s,ref:o,props:i,_owner:s0.current}}xl.Fragment=r0;xl.jsx=Jp;xl.jsxs=Jp;(function(t){t.exports=xl})(Fy);const m=Do.jsx,N=Do.jsxs;var eu={},bo={},l0={get exports(){return bo},set exports(t){bo=t}},rt={},tu={},a0={get exports(){return tu},set exports(t){tu=t}},Xp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,b){var M=x.length;x.push(b);e:for(;0<M;){var X=M-1>>>1,ae=x[X];if(0<i(ae,b))x[X]=b,x[M]=ae,M=X;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var b=x[0],M=x.pop();if(M!==b){x[0]=M;e:for(var X=0,ae=x.length,bt=ae>>>1;X<bt;){var ht=2*(X+1)-1,on=x[ht],Tt=ht+1,wr=x[Tt];if(0>i(on,M))Tt<ae&&0>i(wr,on)?(x[X]=wr,x[Tt]=M,X=Tt):(x[X]=on,x[ht]=M,X=ht);else if(Tt<ae&&0>i(wr,M))x[X]=wr,x[Tt]=M,X=Tt;else break e}}return b}function i(x,b){var M=x.sortIndex-b.sortIndex;return M!==0?M:x.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,_=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(x){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=x)r(u),b.sortIndex=b.expirationTime,e(a,b);else break;b=n(u)}}function E(x){if(y=!1,g(x),!v)if(n(a)!==null)v=!0,sn(C);else{var b=n(u);b!==null&&$n(E,b.startTime-x)}}function C(x,b){v=!1,y&&(y=!1,p(P),P=-1),_=!0;var M=h;try{for(g(b),d=n(a);d!==null&&(!(d.expirationTime>b)||x&&!ve());){var X=d.callback;if(typeof X=="function"){d.callback=null,h=d.priorityLevel;var ae=X(d.expirationTime<=b);b=t.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(a)&&r(a),g(b)}else r(a);d=n(a)}if(d!==null)var bt=!0;else{var ht=n(u);ht!==null&&$n(E,ht.startTime-b),bt=!1}return bt}finally{d=null,h=M,_=!1}}var k=!1,R=null,P=-1,W=5,O=-1;function ve(){return!(t.unstable_now()-O<W)}function F(){if(R!==null){var x=t.unstable_now();O=x;var b=!0;try{b=R(!0,x)}finally{b?H():(k=!1,R=null)}}else k=!1}var H;if(typeof f=="function")H=function(){f(F)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,_i=dt.port2;dt.port1.onmessage=F,H=function(){_i.postMessage(null)}}else H=function(){S(F,0)};function sn(x){R=x,k||(k=!0,H())}function $n(x,b){P=S(function(){x(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,sn(C))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(x){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var M=h;h=b;try{return x()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,b){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var M=h;h=x;try{return b()}finally{h=M}},t.unstable_scheduleCallback=function(x,b,M){var X=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?X+M:X):M=X,x){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=M+ae,x={id:c++,callback:b,priorityLevel:x,startTime:M,expirationTime:ae,sortIndex:-1},M>X?(x.sortIndex=M,e(u,x),n(a)===null&&x===n(u)&&(y?(p(P),P=-1):y=!0,$n(E,M-X))):(x.sortIndex=ae,e(a,x),v||_||(v=!0,sn(C))),x},t.unstable_shouldYield=ve,t.unstable_wrapCallback=function(x){var b=h;return function(){var M=h;h=b;try{return x.apply(this,arguments)}finally{h=M}}}})(Xp);(function(t){t.exports=Xp})(a0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp=w,nt=tu;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var em=new Set,Yi={};function mr(t,e){Qr(t,e),Qr(t+"Capture",e)}function Qr(t,e){for(Yi[t]=e,t=0;t<e.length;t++)em.add(e[t])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=Object.prototype.hasOwnProperty,u0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wh={},Eh={};function c0(t){return nu.call(Eh,t)?!0:nu.call(wh,t)?!1:u0.test(t)?Eh[t]=!0:(wh[t]=!0,!1)}function d0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function h0(t,e,n,r){if(e===null||typeof e>"u"||d0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Re[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Re[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Re[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Re[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Re[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Re[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Re[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Re[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Re[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cc=/[\-:]([a-z])/g;function Ic(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cc,Ic);Re[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cc,Ic);Re[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cc,Ic);Re[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Re[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Re[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function kc(t,e,n,r){var i=Re.hasOwnProperty(e)?Re[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(h0(e,n,i,r)&&(n=null),r||i===null?c0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tn=Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),Tc=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),nm=Symbol.for("react.context"),Nc=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),su=Symbol.for("react.suspense_list"),Rc=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),rm=Symbol.for("react.offscreen"),Sh=Symbol.iterator;function vi(t){return t===null||typeof t!="object"?null:(t=Sh&&t[Sh]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,da;function xi(t){if(da===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);da=e&&e[1]||""}return`
`+da+t}var ha=!1;function fa(t,e){if(!t||ha)return"";ha=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ha=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xi(t):""}function f0(t){switch(t.tag){case 5:return xi(t.type);case 16:return xi("Lazy");case 13:return xi("Suspense");case 19:return xi("SuspenseList");case 0:case 2:case 15:return t=fa(t.type,!1),t;case 11:return t=fa(t.type.render,!1),t;case 1:return t=fa(t.type,!0),t;default:return""}}function ou(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ir:return"Fragment";case Cr:return"Portal";case ru:return"Profiler";case Tc:return"StrictMode";case iu:return"Suspense";case su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nm:return(t.displayName||"Context")+".Consumer";case tm:return(t._context.displayName||"Context")+".Provider";case Nc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rc:return e=t.displayName||null,e!==null?e:ou(t.type)||"Memo";case un:e=t._payload,t=t._init;try{return ou(t(e))}catch{}}return null}function p0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ou(e);case 8:return e===Tc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function im(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function m0(t){var e=im(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xs(t){t._valueTracker||(t._valueTracker=m0(t))}function sm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=im(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Mo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lu(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ch(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function om(t,e){e=e.checked,e!=null&&kc(t,"checked",e,!1)}function au(t,e){om(t,e);var n=Dn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&uu(t,e.type,Dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uu(t,e,n){(e!=="number"||Mo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ai=Array.isArray;function Fr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Ai(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dn(n)}}function lm(t,e){var n=Dn(e.value),r=Dn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Th(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function du(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zs,um=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zs=Zs||document.createElement("div"),Zs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ji(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g0=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(t){g0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mi[e]=Mi[t]})});function cm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mi.hasOwnProperty(t)&&Mi[t]?(""+e).trim():e+"px"}function dm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(t,e){if(e){if(_0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function fu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pu=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mu=null,Ur=null,zr=null;function Nh(t){if(t=xs(t)){if(typeof mu!="function")throw Error(I(280));var e=t.stateNode;e&&(e=bl(e),mu(t.stateNode,t.type,e))}}function hm(t){Ur?zr?zr.push(t):zr=[t]:Ur=t}function fm(){if(Ur){var t=Ur,e=zr;if(zr=Ur=null,Nh(t),e)for(t=0;t<e.length;t++)Nh(e[t])}}function pm(t,e){return t(e)}function mm(){}var pa=!1;function gm(t,e,n){if(pa)return t(e,n);pa=!0;try{return pm(t,e,n)}finally{pa=!1,(Ur!==null||zr!==null)&&(mm(),fm())}}function Xi(t,e){var n=t.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var gu=!1;if(qt)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){gu=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{gu=!1}function v0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Fi=!1,Fo=null,Uo=!1,_u=null,y0={onError:function(t){Fi=!0,Fo=t}};function w0(t,e,n,r,i,s,o,l,a){Fi=!1,Fo=null,v0.apply(y0,arguments)}function E0(t,e,n,r,i,s,o,l,a){if(w0.apply(this,arguments),Fi){if(Fi){var u=Fo;Fi=!1,Fo=null}else throw Error(I(198));Uo||(Uo=!0,_u=u)}}function gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rh(t){if(gr(t)!==t)throw Error(I(188))}function S0(t){var e=t.alternate;if(!e){if(e=gr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rh(i),t;if(s===r)return Rh(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function vm(t){return t=S0(t),t!==null?ym(t):null}function ym(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ym(t);if(e!==null)return e;t=t.sibling}return null}var wm=nt.unstable_scheduleCallback,Ph=nt.unstable_cancelCallback,C0=nt.unstable_shouldYield,I0=nt.unstable_requestPaint,he=nt.unstable_now,k0=nt.unstable_getCurrentPriorityLevel,xc=nt.unstable_ImmediatePriority,Em=nt.unstable_UserBlockingPriority,zo=nt.unstable_NormalPriority,T0=nt.unstable_LowPriority,Sm=nt.unstable_IdlePriority,Al=null,At=null;function N0(t){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Al,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:x0,R0=Math.log,P0=Math.LN2;function x0(t){return t>>>=0,t===0?32:31-(R0(t)/P0|0)|0}var eo=64,to=4194304;function Oi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Oi(l):(s&=o,s!==0&&(r=Oi(s)))}else o=n&~i,o!==0?r=Oi(o):s!==0&&(r=Oi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wt(e),i=1<<n,r|=t[n],e&=~i;return r}function A0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=A0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function vu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cm(){var t=eo;return eo<<=1,!(eo&4194240)&&(eo=64),t}function ma(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=n}function L0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ac(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function Im(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var km,Oc,Tm,Nm,Rm,yu=!1,no=[],En=null,Sn=null,Cn=null,Zi=new Map,es=new Map,dn=[],D0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xh(t,e){switch(t){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Zi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":es.delete(e.pointerId)}}function wi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xs(e),e!==null&&Oc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function b0(t,e,n,r,i){switch(e){case"focusin":return En=wi(En,t,e,n,r,i),!0;case"dragenter":return Sn=wi(Sn,t,e,n,r,i),!0;case"mouseover":return Cn=wi(Cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zi.set(s,wi(Zi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,es.set(s,wi(es.get(s)||null,t,e,n,r,i)),!0}return!1}function Pm(t){var e=Kn(t.target);if(e!==null){var n=gr(e);if(n!==null){if(e=n.tag,e===13){if(e=_m(n),e!==null){t.blockedOn=e,Rm(t.priority,function(){Tm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pu=r,n.target.dispatchEvent(r),pu=null}else return e=xs(n),e!==null&&Oc(e),t.blockedOn=n,!1;e.shift()}return!0}function Ah(t,e,n){wo(t)&&n.delete(e)}function M0(){yu=!1,En!==null&&wo(En)&&(En=null),Sn!==null&&wo(Sn)&&(Sn=null),Cn!==null&&wo(Cn)&&(Cn=null),Zi.forEach(Ah),es.forEach(Ah)}function Ei(t,e){t.blockedOn===e&&(t.blockedOn=null,yu||(yu=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,M0)))}function ts(t){function e(i){return Ei(i,t)}if(0<no.length){Ei(no[0],t);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===t&&(r.blockedOn=null)}}for(En!==null&&Ei(En,t),Sn!==null&&Ei(Sn,t),Cn!==null&&Ei(Cn,t),Zi.forEach(e),es.forEach(e),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)Pm(n),n.blockedOn===null&&dn.shift()}var Br=tn.ReactCurrentBatchConfig,Wo=!0;function F0(t,e,n,r){var i=q,s=Br.transition;Br.transition=null;try{q=1,Lc(t,e,n,r)}finally{q=i,Br.transition=s}}function U0(t,e,n,r){var i=q,s=Br.transition;Br.transition=null;try{q=4,Lc(t,e,n,r)}finally{q=i,Br.transition=s}}function Lc(t,e,n,r){if(Wo){var i=wu(t,e,n,r);if(i===null)ka(t,e,r,$o,n),xh(t,r);else if(b0(i,t,e,n,r))r.stopPropagation();else if(xh(t,r),e&4&&-1<D0.indexOf(t)){for(;i!==null;){var s=xs(i);if(s!==null&&km(s),s=wu(t,e,n,r),s===null&&ka(t,e,r,$o,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ka(t,e,r,null,n)}}var $o=null;function wu(t,e,n,r){if($o=null,t=Pc(r),t=Kn(t),t!==null)if(e=gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $o=t,null}function xm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k0()){case xc:return 1;case Em:return 4;case zo:case T0:return 16;case Sm:return 536870912;default:return 16}default:return 16}}var _n=null,Dc=null,Eo=null;function Am(){if(Eo)return Eo;var t,e=Dc,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Eo=i.slice(t,1<r?1-r:void 0)}function So(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Oh(){return!1}function it(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ro:Oh,this.isPropagationStopped=Oh,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),e}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bc=it(ai),Ps=le({},ai,{view:0,detail:0}),z0=it(Ps),ga,_a,Si,Ol=le({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Si&&(Si&&t.type==="mousemove"?(ga=t.screenX-Si.screenX,_a=t.screenY-Si.screenY):_a=ga=0,Si=t),ga)},movementY:function(t){return"movementY"in t?t.movementY:_a}}),Lh=it(Ol),B0=le({},Ol,{dataTransfer:0}),W0=it(B0),$0=le({},Ps,{relatedTarget:0}),va=it($0),j0=le({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),V0=it(j0),H0=le({},ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),G0=it(H0),K0=le({},ai,{data:0}),Dh=it(K0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Y0[t])?!!e[t]:!1}function Mc(){return J0}var X0=le({},Ps,{key:function(t){if(t.key){var e=q0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=So(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Q0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(t){return t.type==="keypress"?So(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?So(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Z0=it(X0),ew=le({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=it(ew),tw=le({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),nw=it(tw),rw=le({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),iw=it(rw),sw=le({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ow=it(sw),lw=[9,13,27,32],Fc=qt&&"CompositionEvent"in window,Ui=null;qt&&"documentMode"in document&&(Ui=document.documentMode);var aw=qt&&"TextEvent"in window&&!Ui,Om=qt&&(!Fc||Ui&&8<Ui&&11>=Ui),Mh=String.fromCharCode(32),Fh=!1;function Lm(t,e){switch(t){case"keyup":return lw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kr=!1;function uw(t,e){switch(t){case"compositionend":return Dm(e);case"keypress":return e.which!==32?null:(Fh=!0,Mh);case"textInput":return t=e.data,t===Mh&&Fh?null:t;default:return null}}function cw(t,e){if(kr)return t==="compositionend"||!Fc&&Lm(t,e)?(t=Am(),Eo=Dc=_n=null,kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Om&&e.locale!=="ko"?null:e.data;default:return null}}var dw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dw[t.type]:e==="textarea"}function bm(t,e,n,r){hm(r),e=jo(e,"onChange"),0<e.length&&(n=new bc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zi=null,ns=null;function hw(t){Gm(t,0)}function Ll(t){var e=Rr(t);if(sm(e))return t}function fw(t,e){if(t==="change")return e}var Mm=!1;if(qt){var ya;if(qt){var wa="oninput"in document;if(!wa){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),wa=typeof zh.oninput=="function"}ya=wa}else ya=!1;Mm=ya&&(!document.documentMode||9<document.documentMode)}function Bh(){zi&&(zi.detachEvent("onpropertychange",Fm),ns=zi=null)}function Fm(t){if(t.propertyName==="value"&&Ll(ns)){var e=[];bm(e,ns,t,Pc(t)),gm(hw,e)}}function pw(t,e,n){t==="focusin"?(Bh(),zi=e,ns=n,zi.attachEvent("onpropertychange",Fm)):t==="focusout"&&Bh()}function mw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(ns)}function gw(t,e){if(t==="click")return Ll(e)}function _w(t,e){if(t==="input"||t==="change")return Ll(e)}function vw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var It=typeof Object.is=="function"?Object.is:vw;function rs(t,e){if(It(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nu.call(e,i)||!It(t[i],e[i]))return!1}return!0}function Wh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $h(t,e){var n=Wh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wh(n)}}function Um(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Um(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zm(){for(var t=window,e=Mo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Mo(t.document)}return e}function Uc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yw(t){var e=zm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Um(n.ownerDocument.documentElement,n)){if(r!==null&&Uc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=$h(n,s);var o=$h(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ww=qt&&"documentMode"in document&&11>=document.documentMode,Tr=null,Eu=null,Bi=null,Su=!1;function jh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Su||Tr==null||Tr!==Mo(r)||(r=Tr,"selectionStart"in r&&Uc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bi&&rs(Bi,r)||(Bi=r,r=jo(Eu,"onSelect"),0<r.length&&(e=new bc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Tr)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Nr={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},Ea={},Bm={};qt&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Dl(t){if(Ea[t])return Ea[t];if(!Nr[t])return t;var e=Nr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bm)return Ea[t]=e[n];return t}var Wm=Dl("animationend"),$m=Dl("animationiteration"),jm=Dl("animationstart"),Vm=Dl("transitionend"),Hm=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(t,e){Hm.set(t,e),mr(e,[t])}for(var Sa=0;Sa<Vh.length;Sa++){var Ca=Vh[Sa],Ew=Ca.toLowerCase(),Sw=Ca[0].toUpperCase()+Ca.slice(1);Un(Ew,"on"+Sw)}Un(Wm,"onAnimationEnd");Un($m,"onAnimationIteration");Un(jm,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(Vm,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function Hh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,E0(r,e,void 0,t),t.currentTarget=null}function Gm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Hh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Hh(i,l,u),s=a}}}if(Uo)throw t=_u,Uo=!1,_u=null,t}function te(t,e){var n=e[Nu];n===void 0&&(n=e[Nu]=new Set);var r=t+"__bubble";n.has(r)||(Km(e,t,2,!1),n.add(r))}function Ia(t,e,n){var r=0;e&&(r|=4),Km(n,t,r,e)}var so="_reactListening"+Math.random().toString(36).slice(2);function is(t){if(!t[so]){t[so]=!0,em.forEach(function(n){n!=="selectionchange"&&(Cw.has(n)||Ia(n,!1,t),Ia(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[so]||(e[so]=!0,Ia("selectionchange",!1,e))}}function Km(t,e,n,r){switch(xm(e)){case 1:var i=F0;break;case 4:i=U0;break;default:i=Lc}n=i.bind(null,e,n,t),i=void 0,!gu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ka(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}gm(function(){var u=s,c=Pc(n),d=[];e:{var h=Hm.get(t);if(h!==void 0){var _=bc,v=t;switch(t){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":_=Z0;break;case"focusin":v="focus",_=va;break;case"focusout":v="blur",_=va;break;case"beforeblur":case"afterblur":_=va;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=nw;break;case Wm:case $m:case jm:_=V0;break;case Vm:_=iw;break;case"scroll":_=z0;break;case"wheel":_=ow;break;case"copy":case"cut":case"paste":_=G0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=bh}var y=(e&4)!==0,S=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=Xi(f,p),E!=null&&y.push(ss(f,E,g)))),S)break;f=f.return}0<y.length&&(h=new _(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==pu&&(v=n.relatedTarget||n.fromElement)&&(Kn(v)||v[Qt]))break e;if((_||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?Kn(v):null,v!==null&&(S=gr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=Lh,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=bh,E="onPointerLeave",p="onPointerEnter",f="pointer"),S=_==null?h:Rr(_),g=v==null?h:Rr(v),h=new y(E,f+"leave",_,n,c),h.target=S,h.relatedTarget=g,E=null,Kn(c)===u&&(y=new y(p,f+"enter",v,n,c),y.target=g,y.relatedTarget=S,E=y),S=E,_&&v)t:{for(y=_,p=v,f=0,g=y;g;g=Er(g))f++;for(g=0,E=p;E;E=Er(E))g++;for(;0<f-g;)y=Er(y),f--;for(;0<g-f;)p=Er(p),g--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Er(y),p=Er(p)}y=null}else y=null;_!==null&&Gh(d,h,_,y,!1),v!==null&&S!==null&&Gh(d,S,v,y,!0)}}e:{if(h=u?Rr(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var C=fw;else if(Uh(h))if(Mm)C=_w;else{C=mw;var k=pw}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=gw);if(C&&(C=C(t,u))){bm(d,C,n,c);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&uu(h,"number",h.value)}switch(k=u?Rr(u):window,t){case"focusin":(Uh(k)||k.contentEditable==="true")&&(Tr=k,Eu=u,Bi=null);break;case"focusout":Bi=Eu=Tr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,jh(d,n,c);break;case"selectionchange":if(ww)break;case"keydown":case"keyup":jh(d,n,c)}var R;if(Fc)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else kr?Lm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Om&&n.locale!=="ko"&&(kr||P!=="onCompositionStart"?P==="onCompositionEnd"&&kr&&(R=Am()):(_n=c,Dc="value"in _n?_n.value:_n.textContent,kr=!0)),k=jo(u,P),0<k.length&&(P=new Dh(P,t,null,n,c),d.push({event:P,listeners:k}),R?P.data=R:(R=Dm(n),R!==null&&(P.data=R)))),(R=aw?uw(t,n):cw(t,n))&&(u=jo(u,"onBeforeInput"),0<u.length&&(c=new Dh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}Gm(d,e)})}function ss(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xi(t,n),s!=null&&r.unshift(ss(t,s,i)),s=Xi(t,e),s!=null&&r.push(ss(t,s,i))),t=t.return}return r}function Er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Xi(n,s),a!=null&&o.unshift(ss(n,a,l))):i||(a=Xi(n,s),a!=null&&o.push(ss(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Iw=/\r\n?/g,kw=/\u0000|\uFFFD/g;function Kh(t){return(typeof t=="string"?t:""+t).replace(Iw,`
`).replace(kw,"")}function oo(t,e,n){if(e=Kh(e),Kh(t)!==e&&n)throw Error(I(425))}function Vo(){}var Cu=null,Iu=null;function ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,Tw=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,Nw=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(t){return qh.resolve(null).then(t).catch(Rw)}:Tu;function Rw(t){setTimeout(function(){throw t})}function Ta(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ts(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ts(e)}function In(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ui=Math.random().toString(36).slice(2),xt="__reactFiber$"+ui,os="__reactProps$"+ui,Qt="__reactContainer$"+ui,Nu="__reactEvents$"+ui,Pw="__reactListeners$"+ui,xw="__reactHandles$"+ui;function Kn(t){var e=t[xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qt]||n[xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qh(t);t!==null;){if(n=t[xt])return n;t=Qh(t)}return e}t=n,n=t.parentNode}return null}function xs(t){return t=t[xt]||t[Qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function bl(t){return t[os]||null}var Ru=[],Pr=-1;function zn(t){return{current:t}}function re(t){0>Pr||(t.current=Ru[Pr],Ru[Pr]=null,Pr--)}function ee(t,e){Pr++,Ru[Pr]=t.current,t.current=e}var bn={},De=zn(bn),Ke=zn(!1),nr=bn;function Yr(t,e){var n=t.type.contextTypes;if(!n)return bn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qe(t){return t=t.childContextTypes,t!=null}function Ho(){re(Ke),re(De)}function Yh(t,e,n){if(De.current!==bn)throw Error(I(168));ee(De,e),ee(Ke,n)}function qm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,p0(t)||"Unknown",i));return le({},n,r)}function Go(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||bn,nr=De.current,ee(De,t),ee(Ke,Ke.current),!0}function Jh(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=qm(t,e,nr),r.__reactInternalMemoizedMergedChildContext=t,re(Ke),re(De),ee(De,t)):re(Ke),ee(Ke,n)}var Bt=null,Ml=!1,Na=!1;function Qm(t){Bt===null?Bt=[t]:Bt.push(t)}function Aw(t){Ml=!0,Qm(t)}function Bn(){if(!Na&&Bt!==null){Na=!0;var t=0,e=q;try{var n=Bt;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bt=null,Ml=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(t+1)),wm(xc,Bn),i}finally{q=e,Na=!1}}return null}var xr=[],Ar=0,Ko=null,qo=0,st=[],ot=0,rr=null,Wt=1,$t="";function jn(t,e){xr[Ar++]=qo,xr[Ar++]=Ko,Ko=t,qo=e}function Ym(t,e,n){st[ot++]=Wt,st[ot++]=$t,st[ot++]=rr,rr=t;var r=Wt;t=$t;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var s=32-wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wt=1<<32-wt(e)+i|n<<i|r,$t=s+t}else Wt=1<<s|n<<i|r,$t=t}function zc(t){t.return!==null&&(jn(t,1),Ym(t,1,0))}function Bc(t){for(;t===Ko;)Ko=xr[--Ar],xr[Ar]=null,qo=xr[--Ar],xr[Ar]=null;for(;t===rr;)rr=st[--ot],st[ot]=null,$t=st[--ot],st[ot]=null,Wt=st[--ot],st[ot]=null}var tt=null,et=null,ie=!1,gt=null;function Jm(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tt=t,et=In(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rr!==null?{id:Wt,overflow:$t}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tt=t,et=null,!0):!1;default:return!1}}function Pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xu(t){if(ie){var e=et;if(e){var n=e;if(!Xh(t,e)){if(Pu(t))throw Error(I(418));e=In(n.nextSibling);var r=tt;e&&Xh(t,e)?Jm(r,n):(t.flags=t.flags&-4097|2,ie=!1,tt=t)}}else{if(Pu(t))throw Error(I(418));t.flags=t.flags&-4097|2,ie=!1,tt=t}}}function Zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tt=t}function lo(t){if(t!==tt)return!1;if(!ie)return Zh(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ku(t.type,t.memoizedProps)),e&&(e=et)){if(Pu(t))throw Xm(),Error(I(418));for(;e;)Jm(t,e),e=In(e.nextSibling)}if(Zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){et=In(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}et=null}}else et=tt?In(t.stateNode.nextSibling):null;return!0}function Xm(){for(var t=et;t;)t=In(t.nextSibling)}function Jr(){et=tt=null,ie=!1}function Wc(t){gt===null?gt=[t]:gt.push(t)}var Ow=tn.ReactCurrentBatchConfig;function pt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Qo=zn(null),Yo=null,Or=null,$c=null;function jc(){$c=Or=Yo=null}function Vc(t){var e=Qo.current;re(Qo),t._currentValue=e}function Au(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wr(t,e){Yo=t,$c=Or=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ve=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if($c!==t)if(t={context:t,memoizedValue:e,next:null},Or===null){if(Yo===null)throw Error(I(308));Or=t,Yo.dependencies={lanes:0,firstContext:t}}else Or=Or.next=t;return e}var qn=null;function Hc(t){qn===null?qn=[t]:qn.push(t)}function Zm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Hc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yt(t,r)}function Yt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cn=!1;function Gc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yt(t,n)}return i=r.interleaved,i===null?(e.next=e,Hc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yt(t,n)}function Co(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ac(t,n)}}function ef(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jo(t,e,n,r){var i=t.updateQueue;cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(h=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(_,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(_,d,h):v,h==null)break e;d=le({},d,h);break e;case 2:cn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=_,a=d):c=c.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);sr|=o,t.lanes=o,t.memoizedState=d}}function tf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var tg=new Zp.Component().refs;function Ou(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fl={isMounted:function(t){return(t=t._reactInternals)?gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=Nn(t),s=Gt(r,i);s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(Et(e,t,i,r),Co(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=Nn(t),s=Gt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(Et(e,t,i,r),Co(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ue(),r=Nn(t),i=Gt(n,r);i.tag=2,e!=null&&(i.callback=e),e=kn(t,i,r),e!==null&&(Et(e,t,r,n),Co(e,t,r))}};function nf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!rs(n,r)||!rs(i,s):!0}function ng(t,e,n){var r=!1,i=bn,s=e.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=qe(e)?nr:De.current,r=e.contextTypes,s=(r=r!=null)?Yr(t,i):bn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function rf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fl.enqueueReplaceState(e,e.state,null)}function Lu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=tg,Gc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=qe(e)?nr:De.current,i.context=Yr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ou(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fl.enqueueReplaceState(i,i.state,null),Jo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ci(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===tg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function ao(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sf(t){var e=t._init;return e(t._payload)}function rg(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Rn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,E){return f===null||f.tag!==6?(f=Da(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,E){var C=g.type;return C===Ir?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===un&&sf(C)===f.type)?(E=i(f,g.props),E.ref=Ci(p,f,g),E.return=p,E):(E=Po(g.type,g.key,g.props,null,p.mode,E),E.ref=Ci(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ba(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,C){return f===null||f.tag!==7?(f=Zn(g,p.mode,E,C),f.return=p,f):(f=i(f,g),f.return=p,f)}function d(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Da(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Js:return g=Po(f.type,f.key,f.props,null,p.mode,g),g.ref=Ci(p,null,f),g.return=p,g;case Cr:return f=ba(f,p.mode,g),f.return=p,f;case un:var E=f._init;return d(p,E(f._payload),g)}if(Ai(f)||vi(f))return f=Zn(f,p.mode,g,null),f.return=p,f;ao(p,f)}return null}function h(p,f,g,E){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Js:return g.key===C?a(p,f,g,E):null;case Cr:return g.key===C?u(p,f,g,E):null;case un:return C=g._init,h(p,f,C(g._payload),E)}if(Ai(g)||vi(g))return C!==null?null:c(p,f,g,E,null);ao(p,g)}return null}function _(p,f,g,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,l(f,p,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Js:return p=p.get(E.key===null?g:E.key)||null,a(f,p,E,C);case Cr:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,C);case un:var k=E._init;return _(p,f,g,k(E._payload),C)}if(Ai(E)||vi(E))return p=p.get(g)||null,c(f,p,E,C,null);ao(f,E)}return null}function v(p,f,g,E){for(var C=null,k=null,R=f,P=f=0,W=null;R!==null&&P<g.length;P++){R.index>P?(W=R,R=null):W=R.sibling;var O=h(p,R,g[P],E);if(O===null){R===null&&(R=W);break}t&&R&&O.alternate===null&&e(p,R),f=s(O,f,P),k===null?C=O:k.sibling=O,k=O,R=W}if(P===g.length)return n(p,R),ie&&jn(p,P),C;if(R===null){for(;P<g.length;P++)R=d(p,g[P],E),R!==null&&(f=s(R,f,P),k===null?C=R:k.sibling=R,k=R);return ie&&jn(p,P),C}for(R=r(p,R);P<g.length;P++)W=_(R,p,P,g[P],E),W!==null&&(t&&W.alternate!==null&&R.delete(W.key===null?P:W.key),f=s(W,f,P),k===null?C=W:k.sibling=W,k=W);return t&&R.forEach(function(ve){return e(p,ve)}),ie&&jn(p,P),C}function y(p,f,g,E){var C=vi(g);if(typeof C!="function")throw Error(I(150));if(g=C.call(g),g==null)throw Error(I(151));for(var k=C=null,R=f,P=f=0,W=null,O=g.next();R!==null&&!O.done;P++,O=g.next()){R.index>P?(W=R,R=null):W=R.sibling;var ve=h(p,R,O.value,E);if(ve===null){R===null&&(R=W);break}t&&R&&ve.alternate===null&&e(p,R),f=s(ve,f,P),k===null?C=ve:k.sibling=ve,k=ve,R=W}if(O.done)return n(p,R),ie&&jn(p,P),C;if(R===null){for(;!O.done;P++,O=g.next())O=d(p,O.value,E),O!==null&&(f=s(O,f,P),k===null?C=O:k.sibling=O,k=O);return ie&&jn(p,P),C}for(R=r(p,R);!O.done;P++,O=g.next())O=_(R,p,P,O.value,E),O!==null&&(t&&O.alternate!==null&&R.delete(O.key===null?P:O.key),f=s(O,f,P),k===null?C=O:k.sibling=O,k=O);return t&&R.forEach(function(F){return e(p,F)}),ie&&jn(p,P),C}function S(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===Ir&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Js:e:{for(var C=g.key,k=f;k!==null;){if(k.key===C){if(C=g.type,C===Ir){if(k.tag===7){n(p,k.sibling),f=i(k,g.props.children),f.return=p,p=f;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===un&&sf(C)===k.type){n(p,k.sibling),f=i(k,g.props),f.ref=Ci(p,k,g),f.return=p,p=f;break e}n(p,k);break}else e(p,k);k=k.sibling}g.type===Ir?(f=Zn(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=Po(g.type,g.key,g.props,null,p.mode,E),E.ref=Ci(p,f,g),E.return=p,p=E)}return o(p);case Cr:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ba(g,p.mode,E),f.return=p,p=f}return o(p);case un:return k=g._init,S(p,f,k(g._payload),E)}if(Ai(g))return v(p,f,g,E);if(vi(g))return y(p,f,g,E);ao(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Da(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return S}var Xr=rg(!0),ig=rg(!1),As={},Ot=zn(As),ls=zn(As),as=zn(As);function Qn(t){if(t===As)throw Error(I(174));return t}function Kc(t,e){switch(ee(as,e),ee(ls,t),ee(Ot,As),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:du(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=du(e,t)}re(Ot),ee(Ot,e)}function Zr(){re(Ot),re(ls),re(as)}function sg(t){Qn(as.current);var e=Qn(Ot.current),n=du(e,t.type);e!==n&&(ee(ls,t),ee(Ot,n))}function qc(t){ls.current===t&&(re(Ot),re(ls))}var se=zn(0);function Xo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ra=[];function Qc(){for(var t=0;t<Ra.length;t++)Ra[t]._workInProgressVersionPrimary=null;Ra.length=0}var Io=tn.ReactCurrentDispatcher,Pa=tn.ReactCurrentBatchConfig,ir=0,oe=null,pe=null,Ee=null,Zo=!1,Wi=!1,us=0,Lw=0;function Pe(){throw Error(I(321))}function Yc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!It(t[n],e[n]))return!1;return!0}function Jc(t,e,n,r,i,s){if(ir=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Io.current=t===null||t.memoizedState===null?Fw:Uw,t=n(r,i),Wi){s=0;do{if(Wi=!1,us=0,25<=s)throw Error(I(301));s+=1,Ee=pe=null,e.updateQueue=null,Io.current=zw,t=n(r,i)}while(Wi)}if(Io.current=el,e=pe!==null&&pe.next!==null,ir=0,Ee=pe=oe=null,Zo=!1,e)throw Error(I(300));return t}function Xc(){var t=us!==0;return us=0,t}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?oe.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function ct(){if(pe===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=pe.next;var e=Ee===null?oe.memoizedState:Ee.next;if(e!==null)Ee=e,pe=t;else{if(t===null)throw Error(I(310));pe=t,t={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ee===null?oe.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function cs(t,e){return typeof e=="function"?e(t):e}function xa(t){var e=ct(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((ir&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,oe.lanes|=c,sr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,It(r,e.memoizedState)||(Ve=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,sr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Aa(t){var e=ct(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);It(s,e.memoizedState)||(Ve=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function og(){}function lg(t,e){var n=oe,r=ct(),i=e(),s=!It(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,Zc(cg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,ds(9,ug.bind(null,n,r,i,e),void 0,null),Ie===null)throw Error(I(349));ir&30||ag(n,e,i)}return i}function ag(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ug(t,e,n,r){e.value=n,e.getSnapshot=r,dg(e)&&hg(t)}function cg(t,e,n){return n(function(){dg(e)&&hg(t)})}function dg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!It(t,n)}catch{return!0}}function hg(t){var e=Yt(t,1);e!==null&&Et(e,t,1,-1)}function of(t){var e=Pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:t},e.queue=t,t=t.dispatch=Mw.bind(null,oe,t),[e.memoizedState,t]}function ds(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function fg(){return ct().memoizedState}function ko(t,e,n,r){var i=Pt();oe.flags|=t,i.memoizedState=ds(1|e,n,void 0,r===void 0?null:r)}function Ul(t,e,n,r){var i=ct();r=r===void 0?null:r;var s=void 0;if(pe!==null){var o=pe.memoizedState;if(s=o.destroy,r!==null&&Yc(r,o.deps)){i.memoizedState=ds(e,n,s,r);return}}oe.flags|=t,i.memoizedState=ds(1|e,n,s,r)}function lf(t,e){return ko(8390656,8,t,e)}function Zc(t,e){return Ul(2048,8,t,e)}function pg(t,e){return Ul(4,2,t,e)}function mg(t,e){return Ul(4,4,t,e)}function gg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _g(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4,4,gg.bind(null,e,t),n)}function ed(){}function vg(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yg(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wg(t,e,n){return ir&21?(It(n,e)||(n=Cm(),oe.lanes|=n,sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=n)}function Dw(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=Pa.transition;Pa.transition={};try{t(!1),e()}finally{q=n,Pa.transition=r}}function Eg(){return ct().memoizedState}function bw(t,e,n){var r=Nn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sg(t))Cg(e,n);else if(n=Zm(t,e,n,r),n!==null){var i=Ue();Et(n,t,r,i),Ig(n,e,r)}}function Mw(t,e,n){var r=Nn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sg(t))Cg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,It(l,o)){var a=e.interleaved;a===null?(i.next=i,Hc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Zm(t,e,i,r),n!==null&&(i=Ue(),Et(n,t,r,i),Ig(n,e,r))}}function Sg(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function Cg(t,e){Wi=Zo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ig(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ac(t,n)}}var el={readContext:ut,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Fw={readContext:ut,useCallback:function(t,e){return Pt().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:lf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ko(4194308,4,gg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return ko(4,2,t,e)},useMemo:function(t,e){var n=Pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bw.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Pt();return t={current:t},e.memoizedState=t},useState:of,useDebugValue:ed,useDeferredValue:function(t){return Pt().memoizedState=t},useTransition:function(){var t=of(!1),e=t[0];return t=Dw.bind(null,t[1]),Pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Pt();if(ie){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Ie===null)throw Error(I(349));ir&30||ag(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lf(cg.bind(null,r,s,t),[t]),r.flags|=2048,ds(9,ug.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pt(),e=Ie.identifierPrefix;if(ie){var n=$t,r=Wt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=us++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Lw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Uw={readContext:ut,useCallback:vg,useContext:ut,useEffect:Zc,useImperativeHandle:_g,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:yg,useReducer:xa,useRef:fg,useState:function(){return xa(cs)},useDebugValue:ed,useDeferredValue:function(t){var e=ct();return wg(e,pe.memoizedState,t)},useTransition:function(){var t=xa(cs)[0],e=ct().memoizedState;return[t,e]},useMutableSource:og,useSyncExternalStore:lg,useId:Eg,unstable_isNewReconciler:!1},zw={readContext:ut,useCallback:vg,useContext:ut,useEffect:Zc,useImperativeHandle:_g,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:yg,useReducer:Aa,useRef:fg,useState:function(){return Aa(cs)},useDebugValue:ed,useDeferredValue:function(t){var e=ct();return pe===null?e.memoizedState=t:wg(e,pe.memoizedState,t)},useTransition:function(){var t=Aa(cs)[0],e=ct().memoizedState;return[t,e]},useMutableSource:og,useSyncExternalStore:lg,useId:Eg,unstable_isNewReconciler:!1};function ei(t,e){try{var n="",r=e;do n+=f0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Oa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Du(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Bw=typeof WeakMap=="function"?WeakMap:Map;function kg(t,e,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nl||(nl=!0,Vu=r),Du(t,e)},n}function Tg(t,e,n){n=Gt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Du(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Du(t,e),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function af(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Bw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=eE.bind(null,t,e,n),e.then(t,t))}function uf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gt(-1,1),e.tag=2,kn(n,e,1))),n.lanes|=1),t)}var Ww=tn.ReactCurrentOwner,Ve=!1;function Fe(t,e,n,r){e.child=t===null?ig(e,null,n,r):Xr(e,t.child,n,r)}function df(t,e,n,r,i){n=n.render;var s=e.ref;return Wr(e,i),r=Jc(t,e,n,r,s,i),n=Xc(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(ie&&n&&zc(e),e.flags|=1,Fe(t,e,r,i),e.child)}function hf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ad(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ng(t,e,s,r,i)):(t=Po(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:rs,n(o,r)&&t.ref===e.ref)return Jt(t,e,i)}return e.flags|=1,t=Rn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ng(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(rs(s,r)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,Jt(t,e,i)}return bu(t,e,n,r,i)}function Rg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Dr,Ze),Ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Dr,Ze),Ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Dr,Ze),Ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(Dr,Ze),Ze|=r;return Fe(t,e,i,n),e.child}function Pg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bu(t,e,n,r,i){var s=qe(n)?nr:De.current;return s=Yr(e,s),Wr(e,i),n=Jc(t,e,n,r,s,i),r=Xc(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(ie&&r&&zc(e),e.flags|=1,Fe(t,e,n,i),e.child)}function ff(t,e,n,r,i){if(qe(n)){var s=!0;Go(e)}else s=!1;if(Wr(e,i),e.stateNode===null)To(t,e),ng(e,n,r),Lu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=qe(n)?nr:De.current,u=Yr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&rf(e,o,r,u),cn=!1;var h=e.memoizedState;o.state=h,Jo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Ke.current||cn?(typeof c=="function"&&(Ou(e,n,c,r),a=e.memoizedState),(l=cn||nf(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,eg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:pt(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=qe(n)?nr:De.current,a=Yr(e,a));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&rf(e,o,r,a),cn=!1,h=e.memoizedState,o.state=h,Jo(e,r,o,i);var v=e.memoizedState;l!==d||h!==v||Ke.current||cn?(typeof _=="function"&&(Ou(e,n,_,r),v=e.memoizedState),(u=cn||nf(e,n,u,r,h,v,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Mu(t,e,n,r,s,i)}function Mu(t,e,n,r,i,s){Pg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jh(e,n,!1),Jt(t,e,s);r=e.stateNode,Ww.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xr(e,t.child,null,s),e.child=Xr(e,null,l,s)):Fe(t,e,l,s),e.memoizedState=r.state,i&&Jh(e,n,!0),e.child}function xg(t){var e=t.stateNode;e.pendingContext?Yh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yh(t,e.context,!1),Kc(t,e.containerInfo)}function pf(t,e,n,r,i){return Jr(),Wc(i),e.flags|=256,Fe(t,e,n,r),e.child}var Fu={dehydrated:null,treeContext:null,retryLane:0};function Uu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ag(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(se,i&1),t===null)return xu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wl(o,r,0,null),t=Zn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uu(n),e.memoizedState=Fu,t):td(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $w(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Rn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Rn(l,s):(s=Zn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fu,r}return s=t.child,t=s.sibling,r=Rn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function td(t,e){return e=Wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uo(t,e,n,r){return r!==null&&Wc(r),Xr(e,t.child,null,n),t=td(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $w(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Oa(Error(I(422))),uo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Wl({mode:"visible",children:r.children},i,0,null),s=Zn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xr(e,t.child,null,o),e.child.memoizedState=Uu(o),e.memoizedState=Fu,s);if(!(e.mode&1))return uo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(I(419)),r=Oa(s,r,void 0),uo(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ve||l){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yt(t,i),Et(r,t,i,-1))}return ld(),r=Oa(Error(I(421))),uo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,et=In(i.nextSibling),tt=e,ie=!0,gt=null,t!==null&&(st[ot++]=Wt,st[ot++]=$t,st[ot++]=rr,Wt=t.id,$t=t.overflow,rr=e),e=td(e,r.children),e.flags|=4096,e)}function mf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Au(t.return,e,n)}function La(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Og(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Fe(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mf(t,n,e);else if(t.tag===19)mf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Xo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),La(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}La(e,!0,n,null,s);break;case"together":La(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function To(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jw(t,e,n){switch(e.tag){case 3:xg(e),Jr();break;case 5:sg(e);break;case 1:qe(e.type)&&Go(e);break;case 4:Kc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Qo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?Ag(t,e,n):(ee(se,se.current&1),t=Jt(t,e,n),t!==null?t.sibling:null);ee(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Og(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,Rg(t,e,n)}return Jt(t,e,n)}var Lg,zu,Dg,bg;Lg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zu=function(){};Dg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qn(Ot.current);var s=null;switch(n){case"input":i=lu(t,i),r=lu(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=cu(t,i),r=cu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vo)}hu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&te("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ii(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Vw(t,e,n){var r=e.pendingProps;switch(Bc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return qe(e.type)&&Ho(),xe(e),null;case 3:return r=e.stateNode,Zr(),re(Ke),re(De),Qc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(Ku(gt),gt=null))),zu(t,e),xe(e),null;case 5:qc(e);var i=Qn(as.current);if(n=e.type,t!==null&&e.stateNode!=null)Dg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return xe(e),null}if(t=Qn(Ot.current),lo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xt]=e,r[os]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Li.length;i++)te(Li[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Ch(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":kh(r,s),te("invalid",r)}hu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&oo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&oo(r.textContent,l,t),i=["children",""+l]):Yi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Xs(r),Ih(r,s,!0);break;case"textarea":Xs(r),Th(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xt]=e,t[os]=r,Lg(t,e,!1,!1),e.stateNode=t;e:{switch(o=fu(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Li.length;i++)te(Li[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":Ch(t,r),i=lu(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",t);break;case"textarea":kh(t,r),i=cu(t,r),te("invalid",t);break;default:i=r}hu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?dm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&um(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ji(t,a):typeof a=="number"&&Ji(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&te("scroll",t):a!=null&&kc(t,s,a,o))}switch(n){case"input":Xs(t),Ih(t,r,!1);break;case"textarea":Xs(t),Th(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xe(e),null;case 6:if(t&&e.stateNode!=null)bg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Qn(as.current),Qn(Ot.current),lo(e)){if(r=e.stateNode,n=e.memoizedProps,r[xt]=e,(s=r.nodeValue!==n)&&(t=tt,t!==null))switch(t.tag){case 3:oo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=e,e.stateNode=r}return xe(e),null;case 13:if(re(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&et!==null&&e.mode&1&&!(e.flags&128))Xm(),Jr(),e.flags|=98560,s=!1;else if(s=lo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[xt]=e}else Jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xe(e),s=!1}else gt!==null&&(Ku(gt),gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?ge===0&&(ge=3):ld())),e.updateQueue!==null&&(e.flags|=4),xe(e),null);case 4:return Zr(),zu(t,e),t===null&&is(e.stateNode.containerInfo),xe(e),null;case 10:return Vc(e.type._context),xe(e),null;case 17:return qe(e.type)&&Ho(),xe(e),null;case 19:if(re(se),s=e.memoizedState,s===null)return xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ii(s,!1);else{if(ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xo(t),o!==null){for(e.flags|=128,Ii(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>ti&&(e.flags|=128,r=!0,Ii(s,!1),e.lanes=4194304)}else{if(!r)if(t=Xo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ii(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return xe(e),null}else 2*he()-s.renderingStartTime>ti&&n!==1073741824&&(e.flags|=128,r=!0,Ii(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=se.current,ee(se,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return od(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ze&1073741824&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function Hw(t,e){switch(Bc(e),e.tag){case 1:return qe(e.type)&&Ho(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zr(),re(Ke),re(De),Qc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qc(e),null;case 13:if(re(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(se),null;case 4:return Zr(),null;case 10:return Vc(e.type._context),null;case 22:case 23:return od(),null;case 24:return null;default:return null}}var co=!1,Oe=!1,Gw=typeof WeakSet=="function"?WeakSet:Set,A=null;function Lr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function Bu(t,e,n){try{n()}catch(r){ce(t,e,r)}}var gf=!1;function Kw(t,e){if(Cu=Wo,t=zm(),Uc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Iu={focusedElem:t,selectionRange:n},Wo=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:pt(e.type,y),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(E){ce(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=gf,gf=!1,v}function $i(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bu(e,n,s)}i=i.next}while(i!==r)}}function zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mg(t){var e=t.alternate;e!==null&&(t.alternate=null,Mg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xt],delete e[os],delete e[Nu],delete e[Pw],delete e[xw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fg(t){return t.tag===5||t.tag===3||t.tag===4}function _f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vo));else if(r!==4&&(t=t.child,t!==null))for($u(t,e,n),t=t.sibling;t!==null;)$u(t,e,n),t=t.sibling}function ju(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}var ke=null,mt=!1;function ln(t,e,n){for(n=n.child;n!==null;)Ug(t,e,n),n=n.sibling}function Ug(t,e,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:Oe||Lr(n,e);case 6:var r=ke,i=mt;ke=null,ln(t,e,n),ke=r,mt=i,ke!==null&&(mt?(t=ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(mt?(t=ke,n=n.stateNode,t.nodeType===8?Ta(t.parentNode,n):t.nodeType===1&&Ta(t,n),ts(t)):Ta(ke,n.stateNode));break;case 4:r=ke,i=mt,ke=n.stateNode.containerInfo,mt=!0,ln(t,e,n),ke=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bu(n,e,o),i=i.next}while(i!==r)}ln(t,e,n);break;case 1:if(!Oe&&(Lr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ce(n,e,l)}ln(t,e,n);break;case 21:ln(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,ln(t,e,n),Oe=r):ln(t,e,n);break;default:ln(t,e,n)}}function vf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Gw),e.forEach(function(r){var i=nE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,mt=!1;break e;case 3:ke=l.stateNode.containerInfo,mt=!0;break e;case 4:ke=l.stateNode.containerInfo,mt=!0;break e}l=l.return}if(ke===null)throw Error(I(160));Ug(s,o,i),ke=null,mt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zg(e,t),e=e.sibling}function zg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),Rt(t),r&4){try{$i(3,t,t.return),zl(3,t)}catch(y){ce(t,t.return,y)}try{$i(5,t,t.return)}catch(y){ce(t,t.return,y)}}break;case 1:ft(e,t),Rt(t),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(ft(e,t),Rt(t),r&512&&n!==null&&Lr(n,n.return),t.flags&32){var i=t.stateNode;try{Ji(i,"")}catch(y){ce(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&om(i,s),fu(l,o);var u=fu(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?dm(i,d):c==="dangerouslySetInnerHTML"?um(i,d):c==="children"?Ji(i,d):kc(i,c,d,u)}switch(l){case"input":au(i,s);break;case"textarea":lm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Fr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fr(i,!!s.multiple,s.defaultValue,!0):Fr(i,!!s.multiple,s.multiple?[]:"",!1))}i[os]=s}catch(y){ce(t,t.return,y)}}break;case 6:if(ft(e,t),Rt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ce(t,t.return,y)}}break;case 3:if(ft(e,t),Rt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ts(e.containerInfo)}catch(y){ce(t,t.return,y)}break;case 4:ft(e,t),Rt(t);break;case 13:ft(e,t),Rt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(id=he())),r&4&&vf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(u=Oe)||c,ft(e,t),Oe=u):ft(e,t),Rt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(A=t,c=t.child;c!==null;){for(d=A=c;A!==null;){switch(h=A,_=h.child,h.tag){case 0:case 11:case 14:case 15:$i(4,h,h.return);break;case 1:Lr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ce(r,n,y)}}break;case 5:Lr(h,h.return);break;case 22:if(h.memoizedState!==null){wf(d);continue}}_!==null?(_.return=h,A=_):wf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=cm("display",o))}catch(y){ce(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ce(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ft(e,t),Rt(t),r&4&&vf(t);break;case 21:break;default:ft(e,t),Rt(t)}}function Rt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fg(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ji(i,""),r.flags&=-33);var s=_f(t);ju(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=_f(t);$u(t,l,o);break;default:throw Error(I(161))}}catch(a){ce(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qw(t,e,n){A=t,Bg(t)}function Bg(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||co;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=co;var u=Oe;if(co=o,(Oe=a)&&!u)for(A=i;A!==null;)o=A,a=o.child,o.tag===22&&o.memoizedState!==null?Ef(i):a!==null?(a.return=o,A=a):Ef(i);for(;s!==null;)A=s,Bg(s),s=s.sibling;A=i,co=l,Oe=u}yf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):yf(t)}}function yf(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||zl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ts(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Oe||e.flags&512&&Wu(e)}catch(h){ce(e,e.return,h)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function wf(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Ef(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zl(4,e)}catch(a){ce(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ce(e,i,a)}}var s=e.return;try{Wu(e)}catch(a){ce(e,s,a)}break;case 5:var o=e.return;try{Wu(e)}catch(a){ce(e,o,a)}}}catch(a){ce(e,e.return,a)}if(e===t){A=null;break}var l=e.sibling;if(l!==null){l.return=e.return,A=l;break}A=e.return}}var Qw=Math.ceil,tl=tn.ReactCurrentDispatcher,nd=tn.ReactCurrentOwner,at=tn.ReactCurrentBatchConfig,j=0,Ie=null,fe=null,Ne=0,Ze=0,Dr=zn(0),ge=0,hs=null,sr=0,Bl=0,rd=0,ji=null,je=null,id=0,ti=1/0,zt=null,nl=!1,Vu=null,Tn=null,ho=!1,vn=null,rl=0,Vi=0,Hu=null,No=-1,Ro=0;function Ue(){return j&6?he():No!==-1?No:No=he()}function Nn(t){return t.mode&1?j&2&&Ne!==0?Ne&-Ne:Ow.transition!==null?(Ro===0&&(Ro=Cm()),Ro):(t=q,t!==0||(t=window.event,t=t===void 0?16:xm(t.type)),t):1}function Et(t,e,n,r){if(50<Vi)throw Vi=0,Hu=null,Error(I(185));Rs(t,n,r),(!(j&2)||t!==Ie)&&(t===Ie&&(!(j&2)&&(Bl|=n),ge===4&&hn(t,Ne)),Qe(t,r),n===1&&j===0&&!(e.mode&1)&&(ti=he()+500,Ml&&Bn()))}function Qe(t,e){var n=t.callbackNode;O0(t,e);var r=Bo(t,t===Ie?Ne:0);if(r===0)n!==null&&Ph(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ph(n),e===1)t.tag===0?Aw(Sf.bind(null,t)):Qm(Sf.bind(null,t)),Nw(function(){!(j&6)&&Bn()}),n=null;else{switch(Im(r)){case 1:n=xc;break;case 4:n=Em;break;case 16:n=zo;break;case 536870912:n=Sm;break;default:n=zo}n=qg(n,Wg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wg(t,e){if(No=-1,Ro=0,j&6)throw Error(I(327));var n=t.callbackNode;if($r()&&t.callbackNode!==n)return null;var r=Bo(t,t===Ie?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=il(t,r);else{e=r;var i=j;j|=2;var s=jg();(Ie!==t||Ne!==e)&&(zt=null,ti=he()+500,Xn(t,e));do try{Xw();break}catch(l){$g(t,l)}while(1);jc(),tl.current=s,j=i,fe!==null?e=0:(Ie=null,Ne=0,e=ge)}if(e!==0){if(e===2&&(i=vu(t),i!==0&&(r=i,e=Gu(t,i))),e===1)throw n=hs,Xn(t,0),hn(t,r),Qe(t,he()),n;if(e===6)hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Yw(i)&&(e=il(t,r),e===2&&(s=vu(t),s!==0&&(r=s,e=Gu(t,s))),e===1))throw n=hs,Xn(t,0),hn(t,r),Qe(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Vn(t,je,zt);break;case 3:if(hn(t,r),(r&130023424)===r&&(e=id+500-he(),10<e)){if(Bo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ue(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Tu(Vn.bind(null,t,je,zt),e);break}Vn(t,je,zt);break;case 4:if(hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qw(r/1960))-r,10<r){t.timeoutHandle=Tu(Vn.bind(null,t,je,zt),r);break}Vn(t,je,zt);break;case 5:Vn(t,je,zt);break;default:throw Error(I(329))}}}return Qe(t,he()),t.callbackNode===n?Wg.bind(null,t):null}function Gu(t,e){var n=ji;return t.current.memoizedState.isDehydrated&&(Xn(t,e).flags|=256),t=il(t,e),t!==2&&(e=je,je=n,e!==null&&Ku(e)),t}function Ku(t){je===null?je=t:je.push.apply(je,t)}function Yw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!It(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hn(t,e){for(e&=~rd,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wt(e),r=1<<n;t[n]=-1,e&=~r}}function Sf(t){if(j&6)throw Error(I(327));$r();var e=Bo(t,0);if(!(e&1))return Qe(t,he()),null;var n=il(t,e);if(t.tag!==0&&n===2){var r=vu(t);r!==0&&(e=r,n=Gu(t,r))}if(n===1)throw n=hs,Xn(t,0),hn(t,e),Qe(t,he()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vn(t,je,zt),Qe(t,he()),null}function sd(t,e){var n=j;j|=1;try{return t(e)}finally{j=n,j===0&&(ti=he()+500,Ml&&Bn())}}function or(t){vn!==null&&vn.tag===0&&!(j&6)&&$r();var e=j;j|=1;var n=at.transition,r=q;try{if(at.transition=null,q=1,t)return t()}finally{q=r,at.transition=n,j=e,!(j&6)&&Bn()}}function od(){Ze=Dr.current,re(Dr)}function Xn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Tw(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Bc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:Zr(),re(Ke),re(De),Qc();break;case 5:qc(r);break;case 4:Zr();break;case 13:re(se);break;case 19:re(se);break;case 10:Vc(r.type._context);break;case 22:case 23:od()}n=n.return}if(Ie=t,fe=t=Rn(t.current,null),Ne=Ze=e,ge=0,hs=null,rd=Bl=sr=0,je=ji=null,qn!==null){for(e=0;e<qn.length;e++)if(n=qn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qn=null}return t}function $g(t,e){do{var n=fe;try{if(jc(),Io.current=el,Zo){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zo=!1}if(ir=0,Ee=pe=oe=null,Wi=!1,us=0,nd.current=null,n===null||n.return===null){ge=1,hs=e,fe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=uf(o);if(_!==null){_.flags&=-257,cf(_,o,l,s,e),_.mode&1&&af(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){af(s,u,e),ld();break e}a=Error(I(426))}}else if(ie&&l.mode&1){var S=uf(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),cf(S,o,l,s,e),Wc(ei(a,l));break e}}s=a=ei(a,l),ge!==4&&(ge=2),ji===null?ji=[s]:ji.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=kg(s,a,e);ef(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Tn===null||!Tn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Tg(s,l,e);ef(s,E);break e}}s=s.return}while(s!==null)}Hg(n)}catch(C){e=C,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function jg(){var t=tl.current;return tl.current=el,t===null?el:t}function ld(){(ge===0||ge===3||ge===2)&&(ge=4),Ie===null||!(sr&268435455)&&!(Bl&268435455)||hn(Ie,Ne)}function il(t,e){var n=j;j|=2;var r=jg();(Ie!==t||Ne!==e)&&(zt=null,Xn(t,e));do try{Jw();break}catch(i){$g(t,i)}while(1);if(jc(),j=n,tl.current=r,fe!==null)throw Error(I(261));return Ie=null,Ne=0,ge}function Jw(){for(;fe!==null;)Vg(fe)}function Xw(){for(;fe!==null&&!C0();)Vg(fe)}function Vg(t){var e=Kg(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?Hg(t):fe=e,nd.current=null}function Hg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Hw(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,fe=null;return}}else if(n=Vw(n,e,Ze),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ge===0&&(ge=5)}function Vn(t,e,n){var r=q,i=at.transition;try{at.transition=null,q=1,Zw(t,e,n,r)}finally{at.transition=i,q=r}return null}function Zw(t,e,n,r){do $r();while(vn!==null);if(j&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(L0(t,s),t===Ie&&(fe=Ie=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,qg(zo,function(){return $r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=at.transition,at.transition=null;var o=q;q=1;var l=j;j|=4,nd.current=null,Kw(t,n),zg(n,t),yw(Iu),Wo=!!Cu,Iu=Cu=null,t.current=n,qw(n),I0(),j=l,q=o,at.transition=s}else t.current=n;if(ho&&(ho=!1,vn=t,rl=i),s=t.pendingLanes,s===0&&(Tn=null),N0(n.stateNode),Qe(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,t=Vu,Vu=null,t;return rl&1&&t.tag!==0&&$r(),s=t.pendingLanes,s&1?t===Hu?Vi++:(Vi=0,Hu=t):Vi=0,Bn(),null}function $r(){if(vn!==null){var t=Im(rl),e=at.transition,n=q;try{if(at.transition=null,q=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,rl=0,j&6)throw Error(I(331));var i=j;for(j|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:$i(8,c,s)}var d=c.child;if(d!==null)d.return=c,A=d;else for(;A!==null;){c=A;var h=c.sibling,_=c.return;if(Mg(c),c===u){A=null;break}if(h!==null){h.return=_,A=h;break}A=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$i(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=f;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zl(9,l)}}catch(C){ce(l,l.return,C)}if(l===o){A=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,A=E;break e}A=l.return}}if(j=i,Bn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Al,t)}catch{}r=!0}return r}finally{q=n,at.transition=e}}return!1}function Cf(t,e,n){e=ei(n,e),e=kg(t,e,1),t=kn(t,e,1),e=Ue(),t!==null&&(Rs(t,1,e),Qe(t,e))}function ce(t,e,n){if(t.tag===3)Cf(t,t,n);else for(;e!==null;){if(e.tag===3){Cf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){t=ei(n,t),t=Tg(e,t,1),e=kn(e,t,1),t=Ue(),e!==null&&(Rs(e,1,t),Qe(e,t));break}}e=e.return}}function eE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ue(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Ne&n)===n&&(ge===4||ge===3&&(Ne&130023424)===Ne&&500>he()-id?Xn(t,0):rd|=n),Qe(t,e)}function Gg(t,e){e===0&&(t.mode&1?(e=to,to<<=1,!(to&130023424)&&(to=4194304)):e=1);var n=Ue();t=Yt(t,e),t!==null&&(Rs(t,e,n),Qe(t,n))}function tE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gg(t,n)}function nE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Gg(t,n)}var Kg;Kg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)Ve=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ve=!1,jw(t,e,n);Ve=!!(t.flags&131072)}else Ve=!1,ie&&e.flags&1048576&&Ym(e,qo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;To(t,e),t=e.pendingProps;var i=Yr(e,De.current);Wr(e,n),i=Jc(null,e,r,t,i,n);var s=Xc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qe(r)?(s=!0,Go(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gc(e),i.updater=Fl,e.stateNode=i,i._reactInternals=e,Lu(e,r,t,n),e=Mu(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&zc(e),Fe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(To(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=iE(r),t=pt(r,t),i){case 0:e=bu(null,e,r,t,n);break e;case 1:e=ff(null,e,r,t,n);break e;case 11:e=df(null,e,r,t,n);break e;case 14:e=hf(null,e,r,pt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),bu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),ff(t,e,r,i,n);case 3:e:{if(xg(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,eg(t,e),Jo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ei(Error(I(423)),e),e=pf(t,e,r,n,i);break e}else if(r!==i){i=ei(Error(I(424)),e),e=pf(t,e,r,n,i);break e}else for(et=In(e.stateNode.containerInfo.firstChild),tt=e,ie=!0,gt=null,n=ig(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===i){e=Jt(t,e,n);break e}Fe(t,e,r,n)}e=e.child}return e;case 5:return sg(e),t===null&&xu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ku(r,i)?o=null:s!==null&&ku(r,s)&&(e.flags|=32),Pg(t,e),Fe(t,e,o,n),e.child;case 6:return t===null&&xu(e),null;case 13:return Ag(t,e,n);case 4:return Kc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xr(e,null,r,n):Fe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),df(t,e,r,i,n);case 7:return Fe(t,e,e.pendingProps,n),e.child;case 8:return Fe(t,e,e.pendingProps.children,n),e.child;case 12:return Fe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Qo,r._currentValue),r._currentValue=o,s!==null)if(It(s.value,o)){if(s.children===i.children&&!Ke.current){e=Jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Gt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Au(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Au(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wr(e,n),i=ut(i),r=r(i),e.flags|=1,Fe(t,e,r,n),e.child;case 14:return r=e.type,i=pt(r,e.pendingProps),i=pt(r.type,i),hf(t,e,r,i,n);case 15:return Ng(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),To(t,e),e.tag=1,qe(r)?(t=!0,Go(e)):t=!1,Wr(e,n),ng(e,r,i),Lu(e,r,i,n),Mu(null,e,r,!0,t,n);case 19:return Og(t,e,n);case 22:return Rg(t,e,n)}throw Error(I(156,e.tag))};function qg(t,e){return wm(t,e)}function rE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new rE(t,e,n,r)}function ad(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iE(t){if(typeof t=="function")return ad(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nc)return 11;if(t===Rc)return 14}return 2}function Rn(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Po(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ad(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ir:return Zn(n.children,i,s,e);case Tc:o=8,i|=8;break;case ru:return t=lt(12,n,e,i|2),t.elementType=ru,t.lanes=s,t;case iu:return t=lt(13,n,e,i),t.elementType=iu,t.lanes=s,t;case su:return t=lt(19,n,e,i),t.elementType=su,t.lanes=s,t;case rm:return Wl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tm:o=10;break e;case nm:o=9;break e;case Nc:o=11;break e;case Rc:o=14;break e;case un:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zn(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function Wl(t,e,n,r){return t=lt(22,t,r,e),t.elementType=rm,t.lanes=n,t.stateNode={isHidden:!1},t}function Da(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function ba(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ud(t,e,n,r,i,s,o,l,a){return t=new sE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gc(s),t}function oE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qg(t){if(!t)return bn;t=t._reactInternals;e:{if(gr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(qe(n))return qm(t,n,e)}return e}function Yg(t,e,n,r,i,s,o,l,a){return t=ud(n,r,!0,t,i,s,o,l,a),t.context=Qg(null),n=t.current,r=Ue(),i=Nn(n),s=Gt(r,i),s.callback=e??null,kn(n,s,i),t.current.lanes=i,Rs(t,i,r),Qe(t,r),t}function $l(t,e,n,r){var i=e.current,s=Ue(),o=Nn(i);return n=Qg(n),e.context===null?e.context=n:e.pendingContext=n,e=Gt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kn(i,e,o),t!==null&&(Et(t,i,o,s),Co(t,i,o)),o}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function If(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cd(t,e){If(t,e),(t=t.alternate)&&If(t,e)}function lE(){return null}var Jg=typeof reportError=="function"?reportError:function(t){console.error(t)};function dd(t){this._internalRoot=t}jl.prototype.render=dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));$l(t,e,null,null)};jl.prototype.unmount=dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;or(function(){$l(null,t,null,null)}),e[Qt]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dn.length&&e!==0&&e<dn[n].priority;n++);dn.splice(n,0,t),n===0&&Pm(t)}};function hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kf(){}function aE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=sl(o);s.call(u)}}var o=Yg(e,r,t,0,null,!1,!1,"",kf);return t._reactRootContainer=o,t[Qt]=o.current,is(t.nodeType===8?t.parentNode:t),or(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=sl(a);l.call(u)}}var a=ud(t,0,!1,null,null,!1,!1,"",kf);return t._reactRootContainer=a,t[Qt]=a.current,is(t.nodeType===8?t.parentNode:t),or(function(){$l(e,a,n,r)}),a}function Hl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=sl(o);l.call(a)}}$l(e,o,t,i)}else o=aE(n,e,t,i,r);return sl(o)}km=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oi(e.pendingLanes);n!==0&&(Ac(e,n|1),Qe(e,he()),!(j&6)&&(ti=he()+500,Bn()))}break;case 13:or(function(){var r=Yt(t,1);if(r!==null){var i=Ue();Et(r,t,1,i)}}),cd(t,1)}};Oc=function(t){if(t.tag===13){var e=Yt(t,134217728);if(e!==null){var n=Ue();Et(e,t,134217728,n)}cd(t,134217728)}};Tm=function(t){if(t.tag===13){var e=Nn(t),n=Yt(t,e);if(n!==null){var r=Ue();Et(n,t,e,r)}cd(t,e)}};Nm=function(){return q};Rm=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};mu=function(t,e,n){switch(e){case"input":if(au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bl(r);if(!i)throw Error(I(90));sm(r),au(r,i)}}}break;case"textarea":lm(t,n);break;case"select":e=n.value,e!=null&&Fr(t,!!n.multiple,e,!1)}};pm=sd;mm=or;var uE={usingClientEntryPoint:!1,Events:[xs,Rr,bl,hm,fm,sd]},ki={findFiberByHostInstance:Kn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},cE={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vm(t),t===null?null:t.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||lE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Al=fo.inject(cE),At=fo}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uE;rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(e))throw Error(I(200));return oE(t,e,null,n)};rt.createRoot=function(t,e){if(!hd(t))throw Error(I(299));var n=!1,r="",i=Jg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ud(t,1,!1,null,null,n,!1,r,i),t[Qt]=e.current,is(t.nodeType===8?t.parentNode:t),new dd(e)};rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=vm(e),t=t===null?null:t.stateNode,t};rt.flushSync=function(t){return or(t)};rt.hydrate=function(t,e,n){if(!Vl(e))throw Error(I(200));return Hl(null,t,e,!0,n)};rt.hydrateRoot=function(t,e,n){if(!hd(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Jg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Yg(e,null,t,1,n??null,i,!1,s,o),t[Qt]=e.current,is(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jl(e)};rt.render=function(t,e,n){if(!Vl(e))throw Error(I(200));return Hl(null,t,e,!1,n)};rt.unmountComponentAtNode=function(t){if(!Vl(t))throw Error(I(40));return t._reactRootContainer?(or(function(){Hl(null,null,t,!1,function(){t._reactRootContainer=null,t[Qt]=null})}),!0):!1};rt.unstable_batchedUpdates=sd;rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Vl(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Hl(t,e,n,!1,r)};rt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=rt})(l0);const dE=jp(bo);var Tf=bo;eu.createRoot=Tf.createRoot,eu.hydrateRoot=Tf.hydrateRoot;let St=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fs.apply(this,arguments)}var yn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yn||(yn={}));const Nf="popstate";function hE(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:a=""}=_r(i.location.hash.substr(1));return qu("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,u=a.indexOf("#");l=u===-1?a:a.slice(0,u)}return l+"#"+(typeof s=="string"?s:ps(s))}function r(i,s){fE(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return mE(e,n,r,t)}function _e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pE(){return Math.random().toString(36).substr(2,8)}function Rf(t,e){return{usr:t.state,key:t.key,idx:e}}function qu(t,e,n,r){return n===void 0&&(n=null),fs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_r(e):e,{state:n,key:e&&e.key||r||pE()})}function ps(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _r(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function mE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=yn.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(fs({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=yn.Pop;let S=c(),p=S==null?null:S-u;u=S,a&&a({action:l,location:y.location,delta:p})}function h(S,p){l=yn.Push;let f=qu(y.location,S,p);n&&n(f,S),u=c()+1;let g=Rf(f,u),E=y.createHref(f);try{o.pushState(g,"",E)}catch{i.location.assign(E)}s&&a&&a({action:l,location:y.location,delta:1})}function _(S,p){l=yn.Replace;let f=qu(y.location,S,p);n&&n(f,S),u=c();let g=Rf(f,u),E=y.createHref(f);o.replaceState(g,"",E),s&&a&&a({action:l,location:y.location,delta:0})}function v(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:ps(S);return _e(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return l},get location(){return t(i,o)},listen(S){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Nf,d),a=S,()=>{i.removeEventListener(Nf,d),a=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let p=v(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:_,go(S){return o.go(S)}};return y}var Pf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Pf||(Pf={}));function gE(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?_r(e):e,i=e_(r.pathname||"/",n);if(i==null)return null;let s=Xg(t);_E(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=TE(s[l],PE(i));return o}function Xg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(_e(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Pn([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xg(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:IE(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Zg(s.path))i(s,o,a)}),e}function Zg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Zg(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function _E(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:kE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vE=/^:\w+$/,yE=3,wE=2,EE=1,SE=10,CE=-2,xf=t=>t==="*";function IE(t,e){let n=t.split("/"),r=n.length;return n.some(xf)&&(r+=CE),e&&(r+=wE),n.filter(i=>!xf(i)).reduce((i,s)=>i+(vE.test(s)?yE:s===""?EE:SE),r)}function kE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function TE(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=NE({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:Pn([i,c.pathname]),pathnameBase:LE(Pn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Pn([i,c.pathnameBase]))}return s}function NE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=RE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=xE(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function RE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),fd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function PE(t){try{return decodeURI(t)}catch(e){return fd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xE(t,e){try{return decodeURIComponent(t)}catch(n){return fd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function e_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function fd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_r(t):t;return{pathname:n?n.startsWith("/")?n:OE(n,e):e,search:DE(r),hash:bE(i)}}function OE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ma(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function t_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function n_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_r(t):(i=fs({},t),_e(!i.pathname||!i.pathname.includes("?"),Ma("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),Ma("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),Ma("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=AE(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const Pn=t=>t.join("/").replace(/\/\/+/g,"/"),LE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ME(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const FE=["post","put","patch","delete"];[...FE];/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qu(){return Qu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qu.apply(this,arguments)}function UE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const zE=typeof Object.is=="function"?Object.is:UE,{useState:BE,useEffect:WE,useLayoutEffect:$E,useDebugValue:jE}=Za;function VE(t,e,n){const r=e(),[{inst:i},s]=BE({inst:{value:r,getSnapshot:e}});return $E(()=>{i.value=r,i.getSnapshot=e,Fa(i)&&s({inst:i})},[t,r,e]),WE(()=>(Fa(i)&&s({inst:i}),t(()=>{Fa(i)&&s({inst:i})})),[t]),jE(r),r}function Fa(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!zE(n,r)}catch{return!0}}function HE(t,e,n){return e()}const GE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KE=!GE,qE=KE?HE:VE;"useSyncExternalStore"in Za&&(t=>t.useSyncExternalStore)(Za);const r_=w.createContext(null),pd=w.createContext(null),Os=w.createContext(null),Gl=w.createContext(null),vr=w.createContext({outlet:null,matches:[]}),i_=w.createContext(null);function QE(t,e){let{relative:n}=e===void 0?{}:e;Ls()||_e(!1);let{basename:r,navigator:i}=w.useContext(Os),{hash:s,pathname:o,search:l}=gd(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:Pn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Ls(){return w.useContext(Gl)!=null}function ci(){return Ls()||_e(!1),w.useContext(Gl).location}function md(){Ls()||_e(!1);let{basename:t,navigator:e}=w.useContext(Os),{matches:n}=w.useContext(vr),{pathname:r}=ci(),i=JSON.stringify(t_(n).map(l=>l.pathnameBase)),s=w.useRef(!1);return w.useEffect(()=>{s.current=!0}),w.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=n_(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Pn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}const YE=w.createContext(null);function JE(t){let e=w.useContext(vr).outlet;return e&&w.createElement(YE.Provider,{value:t},e)}function gd(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=w.useContext(vr),{pathname:i}=ci(),s=JSON.stringify(t_(r).map(o=>o.pathnameBase));return w.useMemo(()=>n_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function XE(t,e){Ls()||_e(!1);let{navigator:n}=w.useContext(Os),r=w.useContext(pd),{matches:i}=w.useContext(vr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=ci(),u;if(e){var c;let y=typeof e=="string"?_r(e):e;l==="/"||(c=y.pathname)!=null&&c.startsWith(l)||_e(!1),u=y}else u=a;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",_=gE(t,{pathname:h}),v=nS(_&&_.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Pn([l,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:Pn([l,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return e&&v?w.createElement(Gl.Provider,{value:{location:Qu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:yn.Pop}},v):v}function ZE(){let t=oS(),e=ME(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,s)}class eS extends w.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w.createElement(vr.Provider,{value:this.props.routeContext},w.createElement(i_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tS(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(r_);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(vr.Provider,{value:e},r)}function nS(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||_e(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||w.createElement(ZE,null):null,c=e.concat(r.slice(0,l+1)),d=()=>w.createElement(tS,{match:o,routeContext:{outlet:s,matches:c}},a?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||l===0)?w.createElement(eS,{location:n.location,component:u,error:a,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Af;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Af||(Af={}));var ol;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(ol||(ol={}));function rS(t){let e=w.useContext(pd);return e||_e(!1),e}function iS(t){let e=w.useContext(vr);return e||_e(!1),e}function sS(t){let e=iS(),n=e.matches[e.matches.length-1];return n.route.id||_e(!1),n.route.id}function oS(){var t;let e=w.useContext(i_),n=rS(ol.UseRouteError),r=sS(ol.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function lS(t){return JE(t.context)}function Ut(t){_e(!1)}function aS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yn.Pop,navigator:s,static:o=!1}=t;Ls()&&_e(!1);let l=e.replace(/^\/*/,"/"),a=w.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=_r(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:_="default"}=r,v=w.useMemo(()=>{let y=e_(u,l);return y==null?null:{pathname:y,search:c,hash:d,state:h,key:_}},[l,u,c,d,h,_]);return v==null?null:w.createElement(Os.Provider,{value:a},w.createElement(Gl.Provider,{children:n,value:{location:v,navigationType:i}}))}function uS(t){let{children:e,location:n}=t,r=w.useContext(r_),i=r&&!e?r.router.routes:Yu(e);return XE(i,n)}var Of;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Of||(Of={}));new Promise(()=>{});function Yu(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;if(r.type===w.Fragment){n.push.apply(n,Yu(r.props.children,e));return}r.type!==Ut&&_e(!1),!r.props.index||!r.props.children||_e(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Yu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ll.apply(this,arguments)}function s_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function cS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function dS(t,e){return t.button===0&&(!e||e==="_self")&&!cS(t)}const hS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],fS=["aria-current","caseSensitive","className","end","style","to","children"];function pS(t){let{basename:e,children:n,window:r}=t,i=w.useRef();i.current==null&&(i.current=hE({window:r,v5Compat:!0}));let s=i.current,[o,l]=w.useState({action:s.action,location:s.location});return w.useLayoutEffect(()=>s.listen(l),[s]),w.createElement(aS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const mS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ae=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,d=s_(e,hS),h=typeof u=="string"?u:ps(u),_=/^[a-z+]+:\/\//i.test(h)||h.startsWith("//"),v=h,y=!1;if(mS&&_){let g=new URL(window.location.href),E=h.startsWith("//")?new URL(g.protocol+h):new URL(h);E.origin===g.origin?v=E.pathname+E.search+E.hash:y=!0}let S=QE(v,{relative:i}),p=_S(v,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function f(g){r&&r(g),g.defaultPrevented||p(g)}return w.createElement("a",ll({},d,{href:_?h:S,onClick:y||s?r:f,ref:n,target:a}))}),gS=w.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:a,children:u}=e,c=s_(e,fS),d=gd(a,{relative:c.relative}),h=ci(),_=w.useContext(pd),{navigator:v}=w.useContext(Os),y=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,S=h.pathname,p=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;i||(S=S.toLowerCase(),p=p?p.toLowerCase():null,y=y.toLowerCase());let f=S===y||!o&&S.startsWith(y)&&S.charAt(y.length)==="/",g=p!=null&&(p===y||!o&&p.startsWith(y)&&p.charAt(y.length)==="/"),E=f?r:void 0,C;typeof s=="function"?C=s({isActive:f,isPending:g}):C=[s,f?"active":null,g?"pending":null].filter(Boolean).join(" ");let k=typeof l=="function"?l({isActive:f,isPending:g}):l;return w.createElement(Ae,ll({},c,{"aria-current":E,className:C,ref:n,style:k,to:a}),typeof u=="function"?u({isActive:f,isPending:g}):u)});var Lf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Lf||(Lf={}));var Df;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Df||(Df={}));function _S(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=md(),a=ci(),u=gd(t,{relative:o});return w.useCallback(c=>{if(dS(c,n)){c.preventDefault();let d=r!==void 0?r:ps(a)===ps(u);l(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}const vS=()=>m(Ae,{className:"gaming__navbar-login-btn",to:"/login",children:"Log In"});const yS=()=>m(Ae,{className:"gaming__navbar-register-btn",to:"/register",children:"Create account"}),wS=()=>[{destination:"/",iconName:"home",active:"gaming__navbar-link-active",text:"Home"},{destination:"/shop",iconName:"game-controller",active:"gaming__navbar-link-active",text:"Games"},{destination:"/wishlist",iconName:"heart",active:"gaming__navbar-link-active",text:"Wish List"},{destination:"/contact",iconName:"call",active:"gaming__navbar-link-active",text:"Contact"}];/**
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
 */const o_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw di(e)},di=function(t){return new Error("Firebase Database ("+o_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const l_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ES=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[c],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(l_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ES(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw Error();const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a_=function(t){const e=l_(t);return _d.encodeByteArray(e,!0)},al=function(t){return a_(t).replace(/\./g,"")},ul=function(t){try{return _d.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function SS(t){return u_(void 0,t)}function u_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!CS(n)||(t[n]=u_(t[n],e[n]));return t}function CS(t){return t!=="__proto__"}/**
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
 */function IS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kS=()=>IS().__FIREBASE_DEFAULTS__,TS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},NS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ul(t[1]);return e&&JSON.parse(e)},vd=()=>{try{return kS()||TS()||NS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},c_=t=>{var e,n;return(n=(e=vd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RS=t=>{const e=c_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},PS=()=>{var t;return(t=vd())===null||t===void 0?void 0:t.config},d_=t=>{var e;return(e=vd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Kl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[al(JSON.stringify(n)),al(JSON.stringify(o)),l].join(".")}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function AS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function h_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OS(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function f_(){return o_.NODE_ADMIN===!0}function LS(){try{return typeof indexedDB=="object"}catch{return!1}}function DS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const bS="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bS,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?MS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Wn(i,l,r)}}function MS(t,e){return t.replace(FS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const FS=/\{\$([^}]+)}/g;/**
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
 */function ms(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
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
 */const p_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ms(ul(s[0])||""),n=ms(ul(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},US=function(t){const e=p_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zS=function(t){const e=p_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function nn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ni(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function dl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bf(s)&&bf(o)){if(!dl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bf(t){return t!==null&&typeof t=="object"}/**
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
 */function hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function bi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class BS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function WS(t,e){const n=new $S(t,e);return n.subscribe.bind(n)}class $S{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ua),i.error===void 0&&(i.error=Ua),i.complete===void 0&&(i.complete=Ua);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ua(){}function wd(t,e){return`${t} failed: ${e} argument `}/**
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
 */const VS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ql=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hn="[DEFAULT]";/**
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
 */class HS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Kl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KS(e))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hn){return this.instances.has(e)}getOptions(e=Hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hn){return this.component?this.component.multipleInstances?e:Hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GS(t){return t===Hn?void 0:t}function KS(t){return t.instantiationMode==="EAGER"}/**
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
 */class qS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const QS={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},YS=Y.INFO,JS={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},XS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ed{constructor(e){this.name=e,this._logLevel=YS,this._logHandler=XS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const ZS=(t,e)=>e.some(n=>t instanceof n);let Mf,Ff;function eC(){return Mf||(Mf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tC(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m_=new WeakMap,Xu=new WeakMap,g_=new WeakMap,za=new WeakMap,Sd=new WeakMap;function nC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&m_.set(n,t)}).catch(()=>{}),Sd.set(e,t),e}function rC(t){if(Xu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xu.set(t,e)}let Zu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||g_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iC(t){Zu=t(Zu)}function sC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ba(this),e,...n);return g_.set(r,e.sort?e.sort():[e]),xn(r)}:tC().includes(t)?function(...e){return t.apply(Ba(this),e),xn(m_.get(this))}:function(...e){return xn(t.apply(Ba(this),e))}}function oC(t){return typeof t=="function"?sC(t):(t instanceof IDBTransaction&&rC(t),ZS(t,eC())?new Proxy(t,Zu):t)}function xn(t){if(t instanceof IDBRequest)return nC(t);if(za.has(t))return za.get(t);const e=oC(t);return e!==t&&(za.set(t,e),Sd.set(e,t)),e}const Ba=t=>Sd.get(t);function lC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=xn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(xn(o.result),a.oldVersion,a.newVersion,xn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const aC=["get","getKey","getAll","getAllKeys","count"],uC=["put","add","delete","clear"],Wa=new Map;function Uf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wa.get(e))return Wa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=uC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Wa.set(e,s),s}iC(t=>({...t,get:(e,n,r)=>Uf(e,n)||t.get(e,n,r),has:(e,n)=>!!Uf(e,n)||t.has(e,n)}));/**
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
 */class cC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ec="@firebase/app",zf="0.9.1";/**
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
 */const ar=new Ed("@firebase/app"),hC="@firebase/app-compat",fC="@firebase/analytics-compat",pC="@firebase/analytics",mC="@firebase/app-check-compat",gC="@firebase/app-check",_C="@firebase/auth",vC="@firebase/auth-compat",yC="@firebase/database",wC="@firebase/database-compat",EC="@firebase/functions",SC="@firebase/functions-compat",CC="@firebase/installations",IC="@firebase/installations-compat",kC="@firebase/messaging",TC="@firebase/messaging-compat",NC="@firebase/performance",RC="@firebase/performance-compat",PC="@firebase/remote-config",xC="@firebase/remote-config-compat",AC="@firebase/storage",OC="@firebase/storage-compat",LC="@firebase/firestore",DC="@firebase/firestore-compat",bC="firebase",MC="9.16.0";/**
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
 */const tc="[DEFAULT]",FC={[ec]:"fire-core",[hC]:"fire-core-compat",[pC]:"fire-analytics",[fC]:"fire-analytics-compat",[gC]:"fire-app-check",[mC]:"fire-app-check-compat",[_C]:"fire-auth",[vC]:"fire-auth-compat",[yC]:"fire-rtdb",[wC]:"fire-rtdb-compat",[EC]:"fire-fn",[SC]:"fire-fn-compat",[CC]:"fire-iid",[IC]:"fire-iid-compat",[kC]:"fire-fcm",[TC]:"fire-fcm-compat",[NC]:"fire-perf",[RC]:"fire-perf-compat",[PC]:"fire-rc",[xC]:"fire-rc-compat",[AC]:"fire-gcs",[OC]:"fire-gcs-compat",[LC]:"fire-fst",[DC]:"fire-fst-compat","fire-js":"fire-js",[bC]:"fire-js-all"};/**
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
 */const hl=new Map,nc=new Map;function UC(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ri(t){const e=t.name;if(nc.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;nc.set(e,t);for(const n of hl.values())UC(n,t);return!0}function Cd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},An=new Ds("app","Firebase",zC);/**
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
 */class BC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=MC;function __(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=PS()),!n)throw An.create("no-options");const s=hl.get(i);if(s){if(dl(n,s.options)&&dl(r,s.config))return s;throw An.create("duplicate-app",{appName:i})}const o=new qS(i);for(const a of nc.values())o.addComponent(a);const l=new BC(n,r,o);return hl.set(i,l),l}function v_(t=tc){const e=hl.get(t);if(!e&&t===tc)return __();if(!e)throw An.create("no-app",{appName:t});return e}function On(t,e,n){var r;let i=(r=FC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(l.join(" "));return}ri(new lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const WC="firebase-heartbeat-database",$C=1,gs="firebase-heartbeat-store";let $a=null;function y_(){return $a||($a=lC(WC,$C,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gs)}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),$a}async function jC(t){try{return(await y_()).transaction(gs).objectStore(gs).get(w_(t))}catch(e){if(e instanceof Wn)ar.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function Bf(t,e){try{const r=(await y_()).transaction(gs,"readwrite");return await r.objectStore(gs).put(e,w_(t)),r.done}catch(n){if(n instanceof Wn)ar.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function w_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const VC=1024,HC=30*24*60*60*1e3;class GC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=HC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wf(),{heartbeatsToSend:n,unsentEntries:r}=KC(this._heartbeatsCache.heartbeats),i=al(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wf(){return new Date().toISOString().substring(0,10)}function KC(t,e=VC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$f(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$f(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LS()?DS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $f(t){return al(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function QC(t){ri(new lr("platform-logger",e=>new cC(e),"PRIVATE")),ri(new lr("heartbeat",e=>new GC(e),"PRIVATE")),On(ec,zf,t),On(ec,zf,"esm2017"),On("fire-js","")}QC("");function Id(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function E_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YC=E_,S_=new Ds("auth","Firebase",E_());/**
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
 */const jf=new Ed("@firebase/auth");function xo(t,...e){jf.logLevel<=Y.ERROR&&jf.error(`Auth (${bs}): ${t}`,...e)}/**
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
 */function kt(t,...e){throw kd(t,...e)}function Lt(t,...e){return kd(t,...e)}function JC(t,e,n){const r=Object.assign(Object.assign({},YC()),{[e]:n});return new Ds("auth","Firebase",r).create(e,{appName:t.name})}function kd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return S_.create(t,...e)}function D(t,e,...n){if(!t)throw kd(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xo(e),new Error(e)}function Xt(t,e){t||jt(e)}/**
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
 */const Vf=new Map;function Vt(t){Xt(t instanceof Function,"Expected a class definition");let e=Vf.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vf.set(t,e),e)}/**
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
 */function XC(t,e){const n=Cd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(dl(s,e??{}))return i;kt(i,"already-initialized")}return n.initialize({options:e})}function ZC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eI(){return Hf()==="http:"||Hf()==="https:"}function Hf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function tI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eI()||AS()||"connection"in navigator)?navigator.onLine:!0}function nI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ms{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=yd()||h_()}get(){return tI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Td(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class C_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const iI=new Ms(3e4,6e4);function Fs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Us(t,e,n,r,i={}){return I_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=hi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),C_.fetch()(k_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function I_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rI),e);try{const i=new sI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw po(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw po(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw po(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw po(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw JC(t,c,u);kt(t,c)}}catch(i){if(i instanceof Wn)throw i;kt(t,"network-request-failed")}}async function zs(t,e,n,r,i={}){const s=await Us(t,e,n,r,i);return"mfaPendingCredential"in s&&kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function k_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Td(t.config,i):`${t.config.apiScheme}://${i}`}class sI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),iI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function po(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Lt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function oI(t,e){return Us(t,"POST","/v1/accounts:delete",e)}async function lI(t,e){return Us(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aI(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),i=Nd(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hi(ja(i.auth_time)),issuedAtTime:Hi(ja(i.iat)),expirationTime:Hi(ja(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ja(t){return Number(t)*1e3}function Nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ul(n);return i?JSON.parse(i):(xo("Failed to decode base64 JWT payload"),null)}catch(i){return xo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uI(t){const e=Nd(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&cI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class T_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hi(this.lastLoginAt),this.creationTime=Hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _s(t,lI(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?pI(s.providerUserInfo):[],l=fI(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new T_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function hI(t){const e=Xe(t);await fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pI(t){return t.map(e=>{var{providerId:n}=e,r=Id(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mI(t,e){const n=await I_(t,{},async()=>{const r=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=k_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",C_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vs;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
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
 */function an(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Id(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new T_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _s(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aI(this,e)}reload(){return hI(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _s(this,oI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:C,providerData:k,stsTokenManager:R}=n;D(g&&R,e,"internal-error");const P=vs.fromJSON(this.name,R);D(typeof g=="string",e,"internal-error"),an(d,e.name),an(h,e.name),D(typeof E=="boolean",e,"internal-error"),D(typeof C=="boolean",e,"internal-error"),an(_,e.name),an(v,e.name),an(y,e.name),an(S,e.name),an(p,e.name),an(f,e.name);const W=new er({uid:g,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:C,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:P,createdAt:p,lastLoginAt:f});return k&&Array.isArray(k)&&(W.providerData=k.map(O=>Object.assign({},O))),S&&(W._redirectEventId=S),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new vs;i.updateFromServerResponse(n);const s=new er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fl(s),s}}/**
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
 */class N_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}N_.type="NONE";const Gf=N_;/**
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
 */function Ao(t,e,n){return`firebase:${t}:${e}:${n}`}class jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ao(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ao("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jr(Vt(Gf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Vt(Gf);const o=Ao(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=er._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new jr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jr(s,e,r))}}/**
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
 */function Kf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(x_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O_(e))return"Blackberry";if(L_(e))return"Webos";if(Rd(e))return"Safari";if((e.includes("chrome/")||P_(e))&&!e.includes("edge/"))return"Chrome";if(A_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function R_(t=be()){return/firefox\//i.test(t)}function Rd(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P_(t=be()){return/crios\//i.test(t)}function x_(t=be()){return/iemobile/i.test(t)}function A_(t=be()){return/android/i.test(t)}function O_(t=be()){return/blackberry/i.test(t)}function L_(t=be()){return/webos/i.test(t)}function Ql(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gI(t=be()){var e;return Ql(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _I(){return OS()&&document.documentMode===10}function D_(t=be()){return Ql(t)||A_(t)||L_(t)||O_(t)||/windows phone/i.test(t)||x_(t)}function vI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function b_(t,e=[]){let n;switch(t){case"Browser":n=Kf(be());break;case"Worker":n=`${Kf(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
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
 */class yI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class wI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qf(this),this.idTokenSubscription=new qf(this),this.beforeStateQueue=new yI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=S_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=b_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Bs(t){return Xe(t)}class qf{constructor(e){this.auth=e,this.observer=null,this.addObserver=WS(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function EI(t,e,n){const r=Bs(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=M_(e),{host:o,port:l}=SI(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||CI()}function M_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SI(t){const e=M_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qf(o)}}}function Qf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function CI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Pd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function II(t,e){return Us(t,"POST","/v1/accounts:update",e)}/**
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
 */async function kI(t,e){return zs(t,"POST","/v1/accounts:signInWithPassword",Fs(t,e))}/**
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
 */async function TI(t,e){return zs(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}async function NI(t,e){return zs(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}/**
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
 */class ys extends Pd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ys(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ys(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return kI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TI(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return II(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return NI(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vr(t,e){return zs(t,"POST","/v1/accounts:signInWithIdp",Fs(t,e))}/**
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
 */const RI="http://localhost";class ur extends Pd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Id(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ur(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vr(e,n)}buildRequest(){const e={requestUri:RI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
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
 */function PI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xI(t){const e=Di(bi(t)).link,n=e?Di(bi(e)).deep_link_id:null,r=Di(bi(t)).deep_link_id;return(r?Di(bi(r)).link:null)||r||n||e||t}class xd{constructor(e){var n,r,i,s,o,l;const a=Di(bi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=PI((i=a.mode)!==null&&i!==void 0?i:null);D(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=xI(e);try{return new xd(n)}catch{return null}}}/**
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
 */class fi{constructor(){this.providerId=fi.PROVIDER_ID}static credential(e,n){return ys._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xd.parseLink(n);return D(r,"argument-error"),ys._fromEmailAndCode(e,r.code,r.tenantId)}}fi.PROVIDER_ID="password";fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class F_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ws extends F_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fn extends Ws{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends Ws{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ur._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class mn extends Ws{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class gn extends Ws{constructor(){super("twitter.com")}static credential(e,n){return ur._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */async function AI(t,e){return zs(t,"POST","/v1/accounts:signUp",Fs(t,e))}/**
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
 */class cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await er._fromIdTokenResponse(e,r,i),o=Yf(r);return new cr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yf(r);return new cr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class pl extends Wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pl(e,n,r,i)}}function U_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pl._fromErrorAndOperation(t,s,e,r):s})}async function OI(t,e,n=!1){const r=await _s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cr._forOperation(t,"link",r)}/**
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
 */async function LI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await _s(t,U_(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Nd(s.idToken);D(o,r,"internal-error");const{sub:l}=o;return D(t.uid===l,r,"user-mismatch"),cr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),s}}/**
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
 */async function z_(t,e,n=!1){const r="signIn",i=await U_(t,r,e),s=await cr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function DI(t,e){return z_(Bs(t),e)}async function bI(t,e,n){const r=Bs(t),i=await AI(r,{returnSecureToken:!0,email:e,password:n}),s=await cr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function MI(t,e,n){return DI(Xe(t),fi.credential(e,n))}function FI(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function UI(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function B_(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function zI(t){return Xe(t).signOut()}const ml="__sak";/**
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
 */class W_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ml,"1"),this.storage.removeItem(ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function BI(){const t=be();return Rd(t)||Ql(t)}const WI=1e3,$I=10;class $_ extends W_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=BI()&&vI(),this.fallbackToPolling=D_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_I()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$I):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$_.type="LOCAL";const jI=$_;/**
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
 */class j_ extends W_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}j_.type="SESSION";const V_=j_;/**
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
 */function VI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Yl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await VI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yl.receivers=[];/**
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
 */function Ad(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class HI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Ad("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dt(){return window}function GI(t){Dt().location.href=t}/**
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
 */function H_(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function KI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QI(){return H_()?self:null}/**
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
 */const G_="firebaseLocalStorageDb",YI=1,gl="firebaseLocalStorage",K_="fbase_key";class $s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jl(t,e){return t.transaction([gl],e?"readwrite":"readonly").objectStore(gl)}function JI(){const t=indexedDB.deleteDatabase(G_);return new $s(t).toPromise()}function ic(){const t=indexedDB.open(G_,YI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gl,{keyPath:K_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gl)?e(r):(r.close(),await JI(),e(await ic()))})})}async function Jf(t,e,n){const r=Jl(t,!0).put({[K_]:e,value:n});return new $s(r).toPromise()}async function XI(t,e){const n=Jl(t,!1).get(e),r=await new $s(n).toPromise();return r===void 0?null:r.value}function Xf(t,e){const n=Jl(t,!0).delete(e);return new $s(n).toPromise()}const ZI=800,ek=3;class q_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ek)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return H_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yl._getInstance(QI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KI(),!this.activeServiceWorker)return;this.sender=new HI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ic();return await Jf(e,ml,"1"),await Xf(e,ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jl(i,!1).getAll();return new $s(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q_.type="LOCAL";const tk=q_;/**
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
 */function nk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Lt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nk().appendChild(r)})}function ik(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ms(3e4,6e4);/**
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
 */function sk(t,e){return e?Vt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Od extends Pd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ok(t){return z_(t.auth,new Od(t),t.bypassAuthState)}function lk(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),LI(n,new Od(t),t.bypassAuthState)}async function ak(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),OI(n,new Od(t),t.bypassAuthState)}/**
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
 */class Q_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ok;case"linkViaPopup":case"linkViaRedirect":return ak;case"reauthViaPopup":case"reauthViaRedirect":return lk;default:kt(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uk=new Ms(2e3,1e4);class br extends Q_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=Ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,uk.get())};e()}}br.currentPopupAction=null;/**
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
 */const ck="pendingRedirect",Oo=new Map;class dk extends Q_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await hk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hk(t,e){const n=mk(e),r=pk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fk(t,e){Oo.set(t._key(),e)}function pk(t){return Vt(t._redirectPersistence)}function mk(t){return Ao(ck,t.config.apiKey,t.name)}async function gk(t,e,n=!1){const r=Bs(t),i=sk(r,e),o=await new dk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const _k=10*60*1e3;class vk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Y_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_k&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zf(e))}saveEventToCache(e){this.cachedEventUids.add(Zf(e)),this.lastProcessedEventTime=Date.now()}}function Zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Y_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Y_(t);default:return!1}}/**
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
 */async function wk(t,e={}){return Us(t,"GET","/v1/projects",e)}/**
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
 */const Ek=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sk=/^https?/;async function Ck(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wk(t);for(const n of e)try{if(Ik(n))return}catch{}kt(t,"unauthorized-domain")}function Ik(t){const e=rc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Sk.test(n))return!1;if(Ek.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const kk=new Ms(3e4,6e4);function ep(){const t=Dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Tk(t){return new Promise((e,n)=>{var r,i,s;function o(){ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ep(),n(Lt(t,"network-request-failed"))},timeout:kk.get()})}if(!((i=(r=Dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Dt().gapi)===null||s===void 0)&&s.load)o();else{const l=ik("iframefcb");return Dt()[l]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},rk(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function Nk(t){return Lo=Lo||Tk(t),Lo}/**
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
 */const Rk=new Ms(5e3,15e3),Pk="__/auth/iframe",xk="emulator/auth/iframe",Ak={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ok=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Lk(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Td(e,xk):`https://${t.config.authDomain}/${Pk}`,r={apiKey:e.apiKey,appName:t.name,v:bs},i=Ok.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${hi(r).slice(1)}`}async function Dk(t){const e=await Nk(t),n=Dt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Lk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ak,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),l=Dt().setTimeout(()=>{s(o)},Rk.get());function a(){Dt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const bk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mk=500,Fk=600,Uk="_blank",zk="http://localhost";class tp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bk(t,e,n,r=Mk,i=Fk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},bk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=be().toLowerCase();n&&(l=P_(u)?Uk:n),R_(u)&&(e=e||zk,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(gI(u)&&l!=="_self")return Wk(e||"",l),new tp(null);const d=window.open(e||"",l,c);D(d,t,"popup-blocked");try{d.focus()}catch{}return new tp(d)}function Wk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $k="__/auth/handler",jk="emulator/auth/handler";function np(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:i};if(e instanceof F_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ju(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof Ws){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${Vk(t)}?${hi(l).slice(1)}`}function Vk({config:t}){return t.emulator?Td(t,jk):`https://${t.authDomain}/${$k}`}/**
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
 */const Va="webStorageSupport";class Hk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=V_,this._completeRedirectFn=gk,this._overrideRedirectResult=fk}async _openPopup(e,n,r,i){var s;Xt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=np(e,n,r,rc(),i);return Bk(e,o,Ad())}async _openRedirect(e,n,r,i){return await this._originValidation(e),GI(np(e,n,r,rc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Dk(e),r=new vk(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Va,{type:Va},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Va];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ck(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return D_()||Rd()||Ql()}}const Gk=Hk;var rp="@firebase/auth",ip="0.21.1";/**
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
 */class Kk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qk(t){ri(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{D(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:b_(t)},c=new wI(l,a,u);return ZC(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ri(new lr("auth-internal",e=>{const n=Bs(e.getProvider("auth").getImmediate());return(r=>new Kk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(rp,ip,qk(t)),On(rp,ip,"esm2017")}/**
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
 */const Yk=5*60,Jk=d_("authIdTokenMaxAge")||Yk;let sp=null;const Xk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Jk)return;const i=n==null?void 0:n.token;sp!==i&&(sp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zk(t=v_()){const e=Cd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XC(t,{popupRedirectResolver:Gk,persistence:[tk,jI,V_]}),r=d_("authTokenSyncURL");if(r){const s=Xk(r);UI(n,s,()=>s(n.currentUser)),FI(n,o=>s(o))}const i=c_("auth");return i&&EI(n,`http://${i}`),n}Qk("Browser");var e1="firebase",t1="9.16.0";/**
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
 */On(e1,t1,"app");const op="@firebase/database",lp="0.14.1";/**
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
 */let J_="";function n1(t){J_=t}/**
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
 */class r1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ms(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class i1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return nn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const X_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new r1(e)}}catch{}return new i1},Yn=X_("localStorage"),sc=X_("sessionStorage");/**
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
 */const Hr=new Ed("@firebase/database"),s1=function(){let t=1;return function(){return t++}}(),Z_=function(t){const e=VS(t),n=new BS;n.update(e);const r=n.digest();return _d.encodeByteArray(r)},js=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=js.apply(null,r):typeof r=="object"?e+=Ce(r):e+=r,e+=" "}return e};let tr=null,ap=!0;const o1=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Hr.logLevel=Y.VERBOSE,tr=Hr.log.bind(Hr),e&&sc.set("logging_enabled",!0)):typeof t=="function"?tr=t:(tr=null,sc.remove("logging_enabled"))},Le=function(...t){if(ap===!0&&(ap=!1,tr===null&&sc.get("logging_enabled")===!0&&o1(!0)),tr){const e=js.apply(null,t);tr(e)}},Vs=function(t){return function(...e){Le(t,...e)}},oc=function(...t){const e="FIREBASE INTERNAL ERROR: "+js(...t);Hr.error(e)},Zt=function(...t){const e=`FIREBASE FATAL ERROR: ${js(...t)}`;throw Hr.error(e),new Error(e)},Ye=function(...t){const e="FIREBASE WARNING: "+js(...t);Hr.warn(e)},l1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ev=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},a1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ii="[MIN_NAME]",dr="[MAX_NAME]",pi=function(t,e){if(t===e)return 0;if(t===ii||e===dr)return-1;if(e===ii||t===dr)return 1;{const n=up(t),r=up(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},u1=function(t,e){return t===e?0:t<e?-1:1},Ti=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},Ld=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ce(e[r]),n+=":",n+=Ld(t[e[r]]);return n+="}",n},tv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const nv=function(t){T(!ev(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},c1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},d1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function h1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const f1=new RegExp("^-?(0*)\\d{1,10}$"),p1=-2147483648,m1=2147483647,up=function(t){if(f1.test(t)){const e=Number(t);if(e>=p1&&e<=m1)return e}return null},mi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ye("Exception was thrown by user callback.",n),e},Math.floor(0))}},g1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class _1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ye(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class v1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ye(e)}}class Gr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gr.OWNER="owner";/**
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
 */const Dd="5",rv="v",iv="s",sv="r",ov="f",lv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,av="ls",uv="p",lc="ac",cv="websocket",dv="long_polling";/**
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
 */class hv{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function y1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fv(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===cv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===dv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);y1(t)&&(n.ns=t.namespace);const i=[];return Je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class w1{constructor(){this.counters_={}}incrementCounter(e,n=1){nn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return SS(this.counters_)}}/**
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
 */const Ha={},Ga={};function bd(t){const e=t.toString();return Ha[e]||(Ha[e]=new w1),Ha[e]}function E1(t,e){const n=t.toString();return Ga[n]||(Ga[n]=e()),Ga[n]}/**
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
 */class S1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&mi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const cp="start",C1="close",I1="pLPCommand",k1="pRTLPCB",pv="id",mv="pw",gv="ser",T1="cb",N1="seg",R1="ts",P1="d",x1="dframe",_v=1870,vv=30,A1=_v-vv,O1=25e3,L1=3e4;class Mr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vs(e),this.stats_=bd(n),this.urlFn=a=>(this.appCheckToken&&(a[lc]=this.appCheckToken),fv(n,dv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new S1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(L1)),a1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Md((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cp)this.id=l,this.password=a;else if(o===C1)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[cp]="t",r[gv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[T1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[rv]=Dd,this.transportSessionId&&(r[iv]=this.transportSessionId),this.lastSessionId&&(r[av]=this.lastSessionId),this.applicationId&&(r[uv]=this.applicationId),this.appCheckToken&&(r[lc]=this.appCheckToken),typeof location<"u"&&location.hostname&&lv.test(location.hostname)&&(r[sv]=ov);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mr.forceAllow_=!0}static forceDisallow(){Mr.forceDisallow_=!0}static isAvailable(){return Mr.forceAllow_?!0:!Mr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!c1()&&!d1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=a_(n),i=tv(r,A1);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[x1]="t",r[pv]=e,r[mv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Md{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=s1(),window[I1+this.uniqueCallbackIdentifier]=e,window[k1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Md.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Le("frame writing exception"),l.stack&&Le(l.stack),Le(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pv]=this.myID,e[mv]=this.myPW,e[gv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vv+r.length<=_v;){const o=this.pendingSegs.shift();r=r+"&"+N1+i+"="+o.seg+"&"+R1+i+"="+o.ts+"&"+P1+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(O1)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const D1=16384,b1=45e3;let _l=null;typeof MozWebSocket<"u"?_l=MozWebSocket:typeof WebSocket<"u"&&(_l=WebSocket);class _t{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vs(this.connId),this.stats_=bd(n),this.connURL=_t.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[rv]=Dd,typeof location<"u"&&location.hostname&&lv.test(location.hostname)&&(o[sv]=ov),n&&(o[iv]=n),r&&(o[av]=r),i&&(o[lc]=i),s&&(o[uv]=s),fv(e,cv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yn.set("previous_websocket_failure",!0);try{let r;f_(),this.mySock=new _l(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&_l!==null&&!_t.forceDisallow_}static previouslyFailed(){return Yn.isInMemoryStorage||Yn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ms(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=tv(n,D1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(b1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
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
 */class ws{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Mr,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||Ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const i=this.transports_=[];for(const s of ws.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ws.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ws.globalTransportInitialized_=!1;/**
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
 */const M1=6e4,F1=5e3,U1=10*1024,z1=100*1024,Ka="t",dp="d",B1="s",hp="r",W1="e",fp="o",pp="a",mp="n",gp="p",$1="h";class j1{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vs("c:"+this.id+":"),this.transportManager_=new ws(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Gi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>z1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>U1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ka in e){const n=e[Ka];n===pp?this.upgradeIfSecondaryHealthy_():n===hp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ti("t",e),r=Ti("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ti("t",e),r=Ti("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ti(Ka,e);if(dp in e){const r=e[dp];if(n===$1)this.onHandshake_(r);else if(n===mp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===B1?this.onConnectionShutdown_(r):n===hp?this.onReset_(r):n===W1?oc("Server Error: "+r):n===fp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):oc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dd!==r&&Ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Gi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(M1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(F1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class yv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class wv{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class vl extends wv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vl}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _p=32,vp=768;class J{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new J("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mn(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new J(t.pieces_,e)}function Ev(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function V1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Sv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Cv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new J(e,0)}function me(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof J)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new J(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return He(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fd(t,e){if(Mn(t)!==Mn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function vt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mn(t)>Mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class H1{constructor(e,n){this.errorPrefix_=n,this.parts_=Sv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ql(this.parts_[r]);Iv(this)}}function G1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ql(e),Iv(t)}function K1(t){const e=t.parts_.pop();t.byteLength_-=ql(e),t.parts_.length>0&&(t.byteLength_-=1)}function Iv(t){if(t.byteLength_>vp)throw new Error(t.errorPrefix_+"has a key path longer than "+vp+" bytes ("+t.byteLength_+").");if(t.parts_.length>_p)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_p+") or object contains a cycle "+Gn(t))}function Gn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ud extends wv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Ud}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ni=1e3,q1=60*5*1e3,yp=30*1e3,Q1=1.3,Y1=3e4,J1="server_kill",wp=3;class Kt extends yv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Kt.nextPersistentConnectionId_++,this.log_=Vs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ni,this.maxReconnectDelay_=q1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!f_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ud.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ce(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Kl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Kt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&nn(e,"w")){const r=ni(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=US(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):oc("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Y1&&(this.reconnectDelay_=Ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Q1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Kt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new j1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ye(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(J1)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ye(d),a())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ju(this.interruptReasons_)&&(this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ld(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new J(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wp&&(this.reconnectDelay_=yp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+J_.replace(/\./g,"-")]=1,yd()?e["framework.cordova"]=1:h_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vl.getInstance().currentlyOnline();return Ju(this.interruptReasons_)&&e}}Kt.nextPersistentConnectionId_=0;Kt.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class Xl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(ii,e),i=new z(ii,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
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
 */let mo;class kv extends Xl{static get __EMPTY_NODE(){return mo}static set __EMPTY_NODE(e){mo=e}compare(e,n){return pi(e.name,n.name)}isDefinedOn(e){throw di("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(dr,mo)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,mo)}toString(){return".key"}}const Kr=new kv;/**
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
 */class go{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??Ge.EMPTY_NODE,this.right=s??Ge.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class X1{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new go(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new go(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new go(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new go(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new X1;/**
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
 */function Z1(t,e){return pi(t.name,e.name)}function zd(t,e){return pi(t,e)}/**
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
 */let ac;function eT(t){ac=t}const Tv=function(t){return typeof t=="number"?"number:"+nv(t):"string:"+t},Nv=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&nn(e,".sv"),"Priority must be a string or number.")}else T(t===ac||t.isEmpty(),"priority of unexpected type.");T(t===ac||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ep;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nv(this.priorityNode_)}static set __childrenNodeConstructor(e){Ep=e}static get __childrenNodeConstructor(){return Ep}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:U(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||Mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=nv(this.value_):e+=this.value_,this.lazyHash_=Z_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),s=we.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Rv,Pv;function tT(t){Rv=t}function nT(t){Pv=t}class rT extends Xl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?pi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(dr,new we("[PRIORITY-POST]",Pv))}makePost(e,n){const r=Rv(e);return new z(n,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const de=new rT;/**
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
 */const iT=Math.log(2);class sT{constructor(e){const n=s=>parseInt(Math.log(s)/iT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yl=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new Se(h,d.node,Se.BLACK,null,null);{const _=parseInt(c/2,10)+a,v=i(a,_),y=i(_+1,u);return d=t[_],h=n?n(d):d,new Se(h,d.node,Se.BLACK,v,y)}},s=function(a){let u=null,c=null,d=t.length;const h=function(v,y){const S=d-v,p=d;d-=v;const f=i(S+1,p),g=t[S],E=n?n(g):g;_(new Se(E,g.node,y,null,f))},_=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),S=Math.pow(2,a.count-(v+1));y?h(S,Se.BLACK):(h(S,Se.BLACK),h(S,Se.RED))}return c},o=new sT(t.length),l=s(o);return new Ge(r||e,l)};/**
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
 */let qa;const Sr={};class Ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Sr&&de,"ChildrenNode.ts has not been loaded"),qa=qa||new Ht({".priority":Sr},{".priority":de}),qa}get(e){const n=ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return nn(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Kr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=yl(r,e.getCompare()):l=Sr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Ht(c,u)}addToIndexes(e,n){const r=cl(this.indexes_,(i,s)=>{const o=ni(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===Sr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),yl(l,o.getCompare())}else return Sr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new Ht(r,this.indexSet_)}removeFromIndexes(e,n){const r=cl(this.indexes_,i=>{if(i===Sr)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new Ht(r,this.indexSet_)}}/**
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
 */let Ri;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Nv(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ri||(Ri=new L(new Ge(zd),null,Ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ri}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ri:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ri:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{T(U(e)!==".priority"||Mn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(de,(o,l)=>{n[o]=l.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tv(this.getPriority().val())+":"),this.forEachChild(de,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Z_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hs?-1:0}withIndex(e){if(e===Kr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Kr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(de),i=n.getIterator(de);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kr?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oT extends L{constructor(){super(new Ge(zd),L.EMPTY_NODE,Ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Hs=new oT;Object.defineProperties(z,{MIN:{value:new z(ii,L.EMPTY_NODE)},MAX:{value:new z(dr,Hs)}});kv.__EMPTY_NODE=L.EMPTY_NODE;we.__childrenNodeConstructor=L;eT(Hs);nT(Hs);/**
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
 */const lT=!0;function Te(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,Te(e))}if(!(t instanceof Array)&&lT){const n=[];let r=!1;if(Je(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Te(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return L.EMPTY_NODE;const s=yl(n,Z1,o=>o.name,zd);if(r){const o=yl(n,de.getCompare());return new L(s,Te(e),new Ht({".priority":o},{".priority":de}))}else return new L(s,Te(e),Ht.Default)}else{let n=L.EMPTY_NODE;return Je(t,(r,i)=>{if(nn(t,r)&&r.substring(0,1)!=="."){const s=Te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Te(e))}}tT(Te);/**
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
 */class aT extends Xl{constructor(e){super(),this.indexPath_=e,T(!B(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?pi(e.name,n.name):s}makePost(e,n){const r=Te(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Hs);return new z(dr,e)}toString(){return Sv(this.indexPath_,0).join("/")}}/**
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
 */class uT extends Xl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?pi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=Te(e);return new z(n,r)}toString(){return".value"}}const cT=new uT;/**
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
 */function xv(t){return{type:"value",snapshotNode:t}}function si(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Es(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ss(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function dT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Bd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Es(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(si(n,r)):o.trackChildChange(Ss(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(de,(i,s)=>{n.hasChild(i)||r.trackChildChange(Es(i,s))}),n.isLeafNode()||n.forEachChild(de,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ss(i,s,o))}else r.trackChildChange(si(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Cs{constructor(e){this.indexedFilter_=new Bd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Cs.getStartPost_(e),this.endPost_=Cs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(de,(o,l)=>{s.matches(new z(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class hT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Cs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const a=new z(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(c&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Ss(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Es(n,d));const y=l.updateImmediateChild(n,L.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(si(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Es(u.name,u.node)),s.trackChildChange(si(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
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
 */class Wd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ii}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new Wd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fT(t){return t.loadsAllData()?new Bd(t.getIndex()):t.hasLimit()?new hT(t):new Cs(t)}function Sp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===cT?n="$value":t.index_===Kr?n="$key":(T(t.index_ instanceof aT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ce(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ce(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ce(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
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
 */class wl extends yv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Vs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=wl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Sp(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ni(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=wl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Sp(e._queryParams),r=e._path.toString(),i=new Kl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ms(l.responseText)}catch{Ye("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ye("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class pT{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function El(){return{value:null,children:new Map}}function Av(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,El());const i=t.children.get(r);e=Z(e),Av(i,e,n)}}function uc(t,e,n){t.value!==null?n(e,t.value):mT(t,(r,i)=>{const s=new J(e.toString()+"/"+r);uc(i,s,n)})}function mT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class gT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Ip=10*1e3,_T=30*1e3,vT=5*60*1e3;class yT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gT(e);const r=Ip+(_T-Ip)*Math.random();Gi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Je(e,(i,s)=>{s>0&&nn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Gi(this.reportStats_.bind(this),Math.floor(Math.random()*2*vT))}}/**
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
 */var yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yt||(yt={}));function Ov(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $d(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Sl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=yt.ACK_USER_WRITE,this.source=Ov()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new J(e));return new Sl(V(),n,this.revert)}}else return T(U(this.path)===e,"operationForChild called for unrelated child."),new Sl(Z(this.path),this.affectedTree,this.revert)}}/**
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
 */class Is{constructor(e,n){this.source=e,this.path=n,this.type=yt.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Is(this.source,V()):new Is(this.source,Z(this.path))}}/**
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
 */class hr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=yt.OVERWRITE}operationForChild(e){return B(this.path)?new hr(this.source,V(),this.snap.getImmediateChild(e)):new hr(this.source,Z(this.path),this.snap)}}/**
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
 */class ks{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=yt.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new J(e));return n.isEmpty()?null:n.value?new hr(this.source,V(),n.value):new ks(this.source,V(),n)}else return T(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ks(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class fr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class wT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ET(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(dT(o.childName,o.snapshotNode))}),Pi(t,i,"child_removed",e,r,n),Pi(t,i,"child_added",e,r,n),Pi(t,i,"child_moved",s,r,n),Pi(t,i,"child_changed",e,r,n),Pi(t,i,"value",e,r,n),i}function Pi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>CT(t,l,a)),o.forEach(l=>{const a=ST(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function ST(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function CT(t,e,n){if(e.childName==null||n.childName==null)throw di("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Zl(t,e){return{eventCache:t,serverCache:e}}function Ki(t,e,n,r){return Zl(new fr(e,n,r),t.serverCache)}function Lv(t,e,n,r){return Zl(t.eventCache,new fr(e,n,r))}function cc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Qa;const IT=()=>(Qa||(Qa=new Ge(u1)),Qa);class ne{constructor(e,n=IT()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return Je(e,(r,i)=>{n=n.set(new J(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(B(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Z(e),n);return s!=null?{path:me(new J(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new ne(null)}}set(e,n){if(B(e))return new ne(n,this.children);{const r=U(e),s=(this.children.get(r)||new ne(null)).set(Z(e),n),o=this.children.insert(r,s);return new ne(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(Z(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ne(null):new ne(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if(B(e))return n;{const r=U(e),s=(this.children.get(r)||new ne(null)).setTree(Z(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ne(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(me(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(Z(e),me(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(Z(e),me(n,i),r):new ne(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(me(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new ne(null))}}function qi(t,e,n){if(B(e))return new Ct(new ne(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=He(i,e);return s=s.updateChild(o,n),new Ct(t.writeTree_.set(i,s))}else{const i=new ne(n),s=t.writeTree_.setTree(e,i);return new Ct(s)}}}function kp(t,e,n){let r=t;return Je(n,(i,s)=>{r=qi(r,me(e,i),s)}),r}function Tp(t,e){if(B(e))return Ct.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new Ct(n)}}function dc(t,e){return yr(t,e)!=null}function yr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function Np(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function Ln(t,e){if(B(e))return t;{const n=yr(t,e);return n!=null?new Ct(new ne(n)):new Ct(t.writeTree_.subtree(e))}}function hc(t){return t.writeTree_.isEmpty()}function oi(t,e){return Dv(V(),t.writeTree_,e)}function Dv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Dv(me(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(me(t,".priority"),r)),n}}/**
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
 */function Vd(t,e){return Uv(e,t)}function kT(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=qi(t.visibleWrites,e,n)),t.lastWriteId=r}function TT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function NT(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&RT(l,r.path)?i=!1:vt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return PT(t),!0;if(r.snap)t.visibleWrites=Tp(t.visibleWrites,r.path);else{const l=r.children;Je(l,a=>{t.visibleWrites=Tp(t.visibleWrites,me(r.path,a))})}return!0}else return!1}function RT(t,e){if(t.snap)return vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vt(me(t.path,n),e))return!0;return!1}function PT(t){t.visibleWrites=bv(t.allWrites,xT,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xT(t){return t.visible}function bv(t,e,n){let r=Ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)vt(n,o)?(l=He(n,o),r=qi(r,l,s.snap)):vt(o,n)&&(l=He(o,n),r=qi(r,V(),s.snap.getChild(l)));else if(s.children){if(vt(n,o))l=He(n,o),r=kp(r,l,s.children);else if(vt(o,n))if(l=He(o,n),B(l))r=kp(r,V(),s.children);else{const a=ni(s.children,U(l));if(a){const u=a.getChild(Z(l));r=qi(r,V(),u)}}}else throw di("WriteRecord should have .snap or .children")}}return r}function Mv(t,e,n,r,i){if(!r&&!i){const s=yr(t.visibleWrites,e);if(s!=null)return s;{const o=Ln(t.visibleWrites,e);if(hc(o))return n;if(n==null&&!dc(o,V()))return null;{const l=n||L.EMPTY_NODE;return oi(o,l)}}}else{const s=Ln(t.visibleWrites,e);if(!i&&hc(s))return n;if(!i&&n==null&&!dc(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(vt(u.path,e)||vt(e,u.path))},l=bv(t.allWrites,o,e),a=n||L.EMPTY_NODE;return oi(l,a)}}}function AT(t,e,n){let r=L.EMPTY_NODE;const i=yr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ln(t.visibleWrites,e);return n.forEachChild(de,(o,l)=>{const a=oi(Ln(s,new J(o)),l);r=r.updateImmediateChild(o,a)}),Np(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ln(t.visibleWrites,e);return Np(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function OT(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=me(e,n);if(dc(t.visibleWrites,s))return null;{const o=Ln(t.visibleWrites,s);return hc(o)?i.getChild(n):oi(o,i.getChild(n))}}function LT(t,e,n,r){const i=me(e,n),s=yr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ln(t.visibleWrites,i);return oi(o,r.getNode().getImmediateChild(n))}else return null}function DT(t,e){return yr(t.visibleWrites,e)}function bT(t,e,n,r,i,s,o){let l;const a=Ln(t.visibleWrites,e),u=yr(a,V());if(u!=null)l=u;else if(n!=null)l=oi(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&c.length<i;)d(_,r)!==0&&c.push(_),_=h.getNext();return c}else return[]}function MT(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function Cl(t,e,n,r){return Mv(t.writeTree,t.treePath,e,n,r)}function Hd(t,e){return AT(t.writeTree,t.treePath,e)}function Rp(t,e,n,r){return OT(t.writeTree,t.treePath,e,n,r)}function Il(t,e){return DT(t.writeTree,me(t.treePath,e))}function FT(t,e,n,r,i,s){return bT(t.writeTree,t.treePath,e,n,r,i,s)}function Gd(t,e,n){return LT(t.writeTree,t.treePath,e,n)}function Fv(t,e){return Uv(me(t.treePath,e),t.writeTree)}function Uv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class UT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ss(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Es(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,si(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ss(r,e.snapshotNode,i.oldSnap));else throw di("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class zT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const zv=new zT;class Kd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new fr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pr(this.viewCache_),s=FT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function BT(t){return{filter:t}}function WT(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $T(t,e,n,r,i){const s=new UT;let o,l;if(n.type===yt.OVERWRITE){const u=n;u.source.fromUser?o=fc(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!B(u.path),o=kl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===yt.MERGE){const u=n;u.source.fromUser?o=VT(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=pc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===yt.ACK_USER_WRITE){const u=n;u.revert?o=KT(t,e,u.path,r,i,s):o=HT(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===yt.LISTEN_COMPLETE)o=GT(t,e,n.path,r,s);else throw di("Unknown operation type: "+n.type);const a=s.getChanges();return jT(e,o,a),{viewCache:o,changes:a}}function jT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=cc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(xv(cc(e)))}}function Bv(t,e,n,r,i,s){const o=e.eventCache;if(Il(r,n)!=null)return e;{let l,a;if(B(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=pr(e),c=u instanceof L?u:L.EMPTY_NODE,d=Hd(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Cl(r,pr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){T(Mn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=Rp(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=Z(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Rp(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Gd(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Ki(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function kl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(B(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),_,null)}else{const _=U(n);if(!a.isCompleteForPath(n)&&Mn(n)>1)return e;const v=Z(n),S=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=c.updatePriority(a.getNode(),S):u=c.updateChild(a.getNode(),_,S,v,zv,null)}const d=Lv(e,u,a.isFullyInitialized()||B(n),c.filtersNodes()),h=new Kd(i,d,s);return Bv(t,d,n,i,h,l)}function fc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Kd(i,e,s);if(B(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ki(e,u,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ki(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=Z(n),_=l.getNode().getImmediateChild(d);let v;if(B(h))v=r;else{const y=c.getCompleteChild(d);y!=null?Ev(h)===".priority"&&y.getChild(Cv(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=L.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),d,v,h,c,o);a=Ki(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Pp(t,e){return t.eventCache.isCompleteForChild(e)}function VT(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=me(n,a);Pp(e,U(c))&&(l=fc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=me(n,a);Pp(e,U(c))||(l=fc(t,l,c,u,i,s,o))}),l}function xp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function pc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;B(n)?u=r:u=new ne(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=xp(t,_,h);a=kl(t,a,new J(d),v,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),y=xp(t,v,h);a=kl(t,a,new J(d),y,i,s,o,l)}}),a}function HT(t,e,n,r,i,s,o){if(Il(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return kl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(B(n)){let u=new ne(null);return a.getNode().forEachChild(Kr,(c,d)=>{u=u.set(new J(c),d)}),pc(t,e,n,u,i,s,l,o)}else return e}else{let u=new ne(null);return r.foreach((c,d)=>{const h=me(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),pc(t,e,n,u,i,s,l,o)}}function GT(t,e,n,r,i){const s=e.serverCache,o=Lv(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return Bv(t,o,n,r,zv,i)}function KT(t,e,n,r,i,s){let o;if(Il(r,n)!=null)return e;{const l=new Kd(r,e,i),a=e.eventCache.getNode();let u;if(B(n)||U(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Cl(r,pr(e));else{const d=e.serverCache.getNode();T(d instanceof L,"serverChildren would be complete if leaf node"),c=Hd(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=U(n);let d=Gd(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,Z(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,L.EMPTY_NODE,Z(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cl(r,pr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Il(r,V())!=null,Ki(e,u,o,t.filter.filtersNodes())}}/**
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
 */class qT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Bd(r.getIndex()),s=fT(r);this.processor_=BT(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,l.getNode(),null),c=new fr(a,o.isFullyInitialized(),i.filtersNodes()),d=new fr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Zl(d,c),this.eventGenerator_=new wT(this.query_)}get query(){return this.query_}}function QT(t){return t.viewCache_.serverCache.getNode()}function YT(t,e){const n=pr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function Ap(t){return t.eventRegistrations_.length===0}function JT(t,e){t.eventRegistrations_.push(e)}function Op(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Lp(t,e,n,r){e.type===yt.MERGE&&e.source.queryId!==null&&(T(pr(t.viewCache_),"We should always have a full cache before handling merges"),T(cc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=$T(t.processor_,i,e,n,r);return WT(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Wv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function XT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(s,o)=>{r.push(si(s,o))}),n.isFullyInitialized()&&r.push(xv(n.getNode())),Wv(t,r,n.getNode(),e)}function Wv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ET(t.eventGenerator_,e,n,i)}/**
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
 */let Tl;class ZT{constructor(){this.views=new Map}}function eN(t){T(!Tl,"__referenceConstructor has already been defined"),Tl=t}function tN(){return T(Tl,"Reference.ts has not been loaded"),Tl}function nN(t){return t.views.size===0}function qd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),Lp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Lp(o,e,n,r));return s}}function rN(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Cl(n,i?r:null),a=!1;l?a=!0:r instanceof L?(l=Hd(n,r),a=!1):(l=L.EMPTY_NODE,a=!1);const u=Zl(new fr(l,a,!1),new fr(r,i,!1));return new qT(e,u)}return o}function iN(t,e,n,r,i,s){const o=rN(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),JT(o,n),XT(o,n)}function sN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Fn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Op(u,n,r)),Ap(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Op(a,n,r)),Ap(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Fn(t)&&s.push(new(tN())(e._repo,e._path)),{removed:s,events:o}}function $v(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qr(t,e){let n=null;for(const r of t.views.values())n=n||YT(r,e);return n}function jv(t,e){if(e._queryParams.loadsAllData())return ea(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Vv(t,e){return jv(t,e)!=null}function Fn(t){return ea(t)!=null}function ea(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Nl;function oN(t){T(!Nl,"__referenceConstructor has already been defined"),Nl=t}function lN(){return T(Nl,"Reference.ts has not been loaded"),Nl}let aN=1;class Dp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=MT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hv(t,e,n,r,i){return kT(t.pendingWriteTree_,e,n,r,i),i?Gs(t,new hr(Ov(),e,n)):[]}function Jn(t,e,n=!1){const r=TT(t.pendingWriteTree_,e);if(NT(t.pendingWriteTree_,e)){let s=new ne(null);return r.snap!=null?s=s.set(V(),!0):Je(r.children,o=>{s=s.set(new J(o),!0)}),Gs(t,new Sl(r.path,s,n))}else return[]}function ta(t,e,n){return Gs(t,new hr($d(),e,n))}function uN(t,e,n){const r=ne.fromObject(n);return Gs(t,new ks($d(),e,r))}function cN(t,e){return Gs(t,new Is($d(),e))}function dN(t,e,n){const r=Yd(t,n);if(r){const i=Jd(r),s=i.path,o=i.queryId,l=He(s,e),a=new Is(jd(o),l);return Xd(t,s,a)}else return[]}function mc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Vv(o,e))){const a=sN(o,e,n,r);nN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,_)=>Fn(_));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=pN(h);for(let v=0;v<_.length;++v){const y=_[v],S=y.query,p=qv(t,y);t.listenProvider_.startListening(Qi(S),Rl(t,S),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Qi(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(na(h));t.listenProvider_.stopListening(Qi(h),_)}))}mN(t,u)}return l}function hN(t,e,n,r){const i=Yd(t,r);if(i!=null){const s=Jd(i),o=s.path,l=s.queryId,a=He(o,e),u=new hr(jd(l),a,n);return Xd(t,o,u)}else return[]}function fN(t,e,n,r){const i=Yd(t,r);if(i){const s=Jd(i),o=s.path,l=s.queryId,a=He(o,e),u=ne.fromObject(n),c=new ks(jd(l),a,u);return Xd(t,o,c)}else return[]}function bp(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const v=He(h,i);s=s||qr(_,v),o=o||Fn(_)});let l=t.syncPointTree_.get(i);l?(o=o||Fn(l),s=s||qr(l,V())):(l=new ZT,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const y=qr(v,V());y&&(s=s.updateImmediateChild(_,y))}));const u=Vv(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=na(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=gN();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const c=Vd(t.pendingWriteTree_,i);let d=iN(l,e,n,c,s,a);if(!u&&!o&&!r){const h=jv(l,e);d=d.concat(_N(t,e,h))}return d}function Qd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=He(o,e),u=qr(l,a);if(u)return u});return Mv(i,e,s,n,!0)}function Gs(t,e){return Gv(e,t.syncPointTree_,null,Vd(t.pendingWriteTree_,V()))}function Gv(t,e,n,r){if(B(t.path))return Kv(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=qr(i,V()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Fv(r,o);s=s.concat(Gv(l,a,u,c))}return i&&(s=s.concat(qd(i,t,r,n))),s}}function Kv(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=qr(i,V()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Fv(r,o),c=t.operationForChild(o);c&&(s=s.concat(Kv(c,l,a,u)))}),i&&(s=s.concat(qd(i,t,r,n))),s}function qv(t,e){const n=e.query,r=Rl(t,n);return{hashFn:()=>(QT(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?dN(t,n._path,r):cN(t,n._path);{const s=h1(i,n);return mc(t,n,null,s)}}}}function Rl(t,e){const n=na(e);return t.queryToTagMap.get(n)}function na(t){return t._path.toString()+"$"+t._queryIdentifier}function Yd(t,e){return t.tagToQueryMap.get(e)}function Jd(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new J(t.substr(0,e))}}function Xd(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=Vd(t.pendingWriteTree_,e);return qd(r,n,i,null)}function pN(t){return t.fold((e,n,r)=>{if(n&&Fn(n))return[ea(n)];{let i=[];return n&&(i=$v(n)),Je(r,(s,o)=>{i=i.concat(o)}),i}})}function Qi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(lN())(t._repo,t._path):t}function mN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=na(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function gN(){return aN++}function _N(t,e,n){const r=e._path,i=Rl(t,e),s=qv(t,n),o=t.listenProvider_.startListening(Qi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)T(!Fn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!B(u)&&c&&Fn(c))return[ea(c).query];{let h=[];return c&&(h=h.concat($v(c).map(_=>_.query))),Je(d,(_,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Qi(c),Rl(t,c))}}return o}/**
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
 */class Zd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zd(n)}node(){return this.node_}}class eh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=me(this.path_,e);return new eh(this.syncTree_,n)}node(){return Qd(this.syncTree_,this.path_)}}const vN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Mp=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return wN(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},wN=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},EN=function(t,e,n,r){return th(e,new eh(n,t),r)},Qv=function(t,e,n){return th(t,new Zd(e),n)};function th(t,e,n){const r=t.getPriority().val(),i=Mp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Mp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new we(l,Te(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(de,(l,a)=>{const u=th(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class nh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function rh(t,e){let n=e instanceof J?e:new J(e),r=t,i=U(n);for(;i!==null;){const s=ni(r.node.children,i)||{children:{},childCount:0};r=new nh(i,r,s),n=Z(n),i=U(n)}return r}function gi(t){return t.node.value}function Yv(t,e){t.node.value=e,gc(t)}function Jv(t){return t.node.childCount>0}function SN(t){return gi(t)===void 0&&!Jv(t)}function ra(t,e){Je(t.node.children,(n,r)=>{e(new nh(n,t,r))})}function Xv(t,e,n,r){n&&!r&&e(t),ra(t,i=>{Xv(i,e,!0,r)}),n&&r&&e(t)}function CN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ks(t){return new J(t.parent===null?t.name:Ks(t.parent)+"/"+t.name)}function gc(t){t.parent!==null&&IN(t.parent,t.name,t)}function IN(t,e,n){const r=SN(n),i=nn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,gc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gc(t))}/**
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
 */const kN=/[\[\].#$\/\u0000-\u001F\u007F]/,TN=/[\[\].#$\u0000-\u001F\u007F]/,Ya=10*1024*1024,Zv=function(t){return typeof t=="string"&&t.length!==0&&!kN.test(t)},ey=function(t){return typeof t=="string"&&t.length!==0&&!TN.test(t)},NN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ey(t)},RN=function(t,e,n,r){r&&e===void 0||ih(wd(t,"value"),e,n)},ih=function(t,e,n){const r=n instanceof J?new H1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Gn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Gn(r)+" with contents = "+e.toString());if(ev(e))throw new Error(t+"contains "+e.toString()+" "+Gn(r));if(typeof e=="string"&&e.length>Ya/3&&ql(e)>Ya)throw new Error(t+"contains a string greater than "+Ya+" utf8 bytes "+Gn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Zv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Gn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);G1(r,o),ih(t,l,r),K1(r)}),i&&s)throw new Error(t+' contains ".value" child '+Gn(r)+" in addition to actual children.")}},ty=function(t,e,n,r){if(!(r&&n===void 0)&&!ey(n))throw new Error(wd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},PN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ty(t,e,n,r)},xN=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},AN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!NN(n))throw new Error(wd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ON{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Fd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ny(t,e,n){sh(t,n),ry(t,r=>Fd(r,e))}function en(t,e,n){sh(t,n),ry(t,r=>vt(r,e)||vt(e,r))}function ry(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(LN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function LN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();tr&&Le("event: "+n.toString()),mi(r)}}}/**
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
 */const DN="repo_interrupt",bN=25;class MN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ON,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=El(),this.transactionQueueTree_=new nh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function FN(t,e,n){if(t.stats_=bd(t.repoInfo_),t.forceRestClient_||g1())t.server_=new wl(t.repoInfo_,(r,i,s,o)=>{Fp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Up(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Kt(t.repoInfo_,e,(r,i,s,o)=>{Fp(t,r,i,s,o)},r=>{Up(t,r)},r=>{zN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=E1(t.repoInfo_,()=>new yT(t.stats_,t.server_)),t.infoData_=new pT,t.infoSyncTree_=new Dp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=ta(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),lh(t,"connected",!1),t.serverSyncTree_=new Dp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);en(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function UN(t){const n=t.infoData_.getNode(new J(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function oh(t){return vN({timestamp:UN(t)})}function Fp(t,e,n,r,i){t.dataUpdateCount++;const s=new J(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=cl(n,u=>Te(u));o=fN(t.serverSyncTree_,s,a,i)}else{const a=Te(n);o=hN(t.serverSyncTree_,s,a,i)}else if(r){const a=cl(n,u=>Te(u));o=uN(t.serverSyncTree_,s,a)}else{const a=Te(n);o=ta(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ia(t,s)),en(t.eventQueue_,l,o)}function Up(t,e){lh(t,"connected",e),e===!1&&WN(t)}function zN(t,e){Je(e,(n,r)=>{lh(t,n,r)})}function lh(t,e,n){const r=new J("/.info/"+e),i=Te(n);t.infoData_.updateSnapshot(r,i);const s=ta(t.infoSyncTree_,r,i);en(t.eventQueue_,r,s)}function iy(t){return t.nextWriteId_++}function BN(t,e,n,r,i){ah(t,"set",{path:e.toString(),value:n,priority:r});const s=oh(t),o=Te(n,r),l=Qd(t.serverSyncTree_,e),a=Qv(o,l,s),u=iy(t),c=Hv(t.serverSyncTree_,e,a,u,!0);sh(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||Ye("set at "+e+" failed: "+h);const y=Jn(t.serverSyncTree_,u,!v);en(t.eventQueue_,e,y),VN(t,i,h,_)});const d=uy(t,e);ia(t,d),en(t.eventQueue_,d,[])}function WN(t){ah(t,"onDisconnectEvents");const e=oh(t),n=El();uc(t.onDisconnect_,V(),(i,s)=>{const o=EN(i,s,t.serverSyncTree_,e);Av(n,i,o)});let r=[];uc(n,V(),(i,s)=>{r=r.concat(ta(t.serverSyncTree_,i,s));const o=uy(t,i);ia(t,o)}),t.onDisconnect_=El(),en(t.eventQueue_,V(),r)}function $N(t,e,n){let r;U(e._path)===".info"?r=bp(t.infoSyncTree_,e,n):r=bp(t.serverSyncTree_,e,n),ny(t.eventQueue_,e._path,r)}function zp(t,e,n){let r;U(e._path)===".info"?r=mc(t.infoSyncTree_,e,n):r=mc(t.serverSyncTree_,e,n),ny(t.eventQueue_,e._path,r)}function jN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(DN)}function ah(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function VN(t,e,n,r){e&&mi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function sy(t,e,n){return Qd(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function uh(t,e=t.transactionQueueTree_){if(e||sa(t,e),gi(e)){const n=ly(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&HN(t,Ks(e),n)}else Jv(e)&&ra(e,n=>{uh(t,n)})}function HN(t,e,n){const r=n.map(u=>u.currentWriteId),i=sy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];T(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=He(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{ah(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Jn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();sa(t,rh(t.transactionQueueTree_,e)),uh(t,t.transactionQueueTree_),en(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)mi(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ye("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ia(t,e)}},o)}function ia(t,e){const n=oy(t,e),r=Ks(n),i=ly(t,n);return GN(t,i,r),r}function GN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=He(n,a.path);let c=!1,d;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Jn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=bN)c=!0,d="maxretry",i=i.concat(Jn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=sy(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){ih("transaction failed: Data returned ",_,a.path);let v=Te(_);typeof _=="object"&&_!=null&&nn(_,".priority")||(v=v.updatePriority(h.getPriority()));const S=a.currentWriteId,p=oh(t),f=Qv(v,h,p);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=iy(t),o.splice(o.indexOf(S),1),i=i.concat(Hv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Jn(t.serverSyncTree_,S,!0))}else c=!0,d="nodata",i=i.concat(Jn(t.serverSyncTree_,a.currentWriteId,!0))}en(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}sa(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)mi(r[l]);uh(t,t.transactionQueueTree_)}function oy(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&gi(r)===void 0;)r=rh(r,n),e=Z(e),n=U(e);return r}function ly(t,e){const n=[];return ay(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ay(t,e,n){const r=gi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ra(e,i=>{ay(t,i,n)})}function sa(t,e){const n=gi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Yv(e,n.length>0?n:void 0)}ra(e,r=>{sa(t,r)})}function uy(t,e){const n=Ks(oy(t,e)),r=rh(t.transactionQueueTree_,e);return CN(r,i=>{Ja(t,i)}),Ja(t,r),Xv(r,i=>{Ja(t,i)}),n}function Ja(t,e){const n=gi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Yv(e,void 0):n.length=s+1,en(t.eventQueue_,Ks(e),i);for(let o=0;o<r.length;o++)mi(r[o])}}/**
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
 */function KN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ye(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bp=function(t,e){const n=QN(t),r=n.namespace;n.domain==="firebase.com"&&Zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||l1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new J(n.pathString)}},QN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=KN(t.substring(c,d)));const h=qN(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class cy{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class dy{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class YN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ch{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:Ev(this._path)}get ref(){return new rn(this._repo,this._path)}get _queryIdentifier(){const e=Cp(this._queryParams),n=Ld(e);return n==="{}"?"default":n}get _queryObject(){return Cp(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof ch))return!1;const n=this._repo===e._repo,r=Fd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+V1(this._path)}}class rn extends ch{constructor(e,n){super(e,n,new Wd,!1)}get parent(){const e=Cv(this._path);return e===null?null:new rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ts{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new J(e),r=Pl(this.ref,e);return new Ts(this._node.getChild(n),r,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ts(i,Pl(this.ref,r),de)))}hasChild(e){const n=new J(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function hy(t,e){return t=Xe(t),t._checkNotDeleted("ref"),e!==void 0?Pl(t._root,e):t._root}function Pl(t,e){return t=Xe(t),U(t._path)===null?PN("child","path",e,!1):ty("child","path",e,!1),new rn(t._repo,me(t._path,e))}function JN(t,e){t=Xe(t),xN("set",t._path),RN("set",e,t._path,!1);const n=new Kl;return BN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class dh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new cy("value",this,new Ts(e.snapshotNode,new rn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dy(this,e,n):null}matches(e){return e instanceof dh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class hh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dy(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const r=Pl(new rn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new cy(e.type,this,new Ts(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof hh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function XN(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{zp(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new YN(n,s||void 0),l=e==="value"?new dh(o):new hh(e,o);return $N(t._repo,t,l),()=>zp(t._repo,t,l)}function ZN(t,e,n,r){return XN(t,"value",e,n,r)}eN(rn);oN(rn);/**
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
 */const eR="FIREBASE_DATABASE_EMULATOR_HOST",_c={};let tR=!1;function nR(t,e,n,r){t.repoInfo_=new hv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function rR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bp(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[eR]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Bp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Gr(Gr.OWNER):new v1(t.name,t.options,e);AN("Invalid Firebase Database URL",o),B(o.path)||Zt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=sR(l,t,c,new _1(t.name,n));return new oR(d,t)}function iR(t,e){const n=_c[e];(!n||n[t.key]!==t)&&Zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jN(t),delete n[t.key]}function sR(t,e,n,r){let i=_c[e.name];i||(i={},_c[e.name]=i);let s=i[t.toURLString()];return s&&Zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new MN(t,tR,n,r),i[t.toURLString()]=s,s}class oR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(FN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rn(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(iR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zt("Cannot call "+e+" on a deleted database.")}}function lR(t=v_(),e){const n=Cd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=RS("database");r&&aR(n,...r)}return n}function aR(t,e,n,r={}){t=Xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Gr(Gr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:xS(r.mockUserToken,t.app.options.projectId);s=new Gr(o)}nR(i,e,n,s)}/**
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
 */function uR(t){n1(bs),ri(new lr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return rR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),On(op,lp,t),On(op,lp,"esm2017")}Kt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};uR();const cR={apiKey:"AIzaSyB4xd0DDFMNya4WYjEhjsKUUNmC8xuzpSI",authDomain:"fir-frontend-33ada.firebaseapp.com",projectId:"fir-frontend-33ada",storageBucket:"fir-frontend-33ada.appspot.com",messagingSenderId:"42334799513",appId:"1:42334799513:web:a9201fecda715da1a51a08",databaseURL:"https://fir-frontend-33ada-default-rtdb.europe-west1.firebasedatabase.app"},fy=__(cR),wn=Zk(fy),py=lR(fy);function dR(t,e){JN(hy(py,"users/"+t),e)}const hR=({setBuyBtnActive:t,setGamesForCart:e,setWishlistBtnActive:n,setWishList:r})=>m("button",{onClick:()=>{t(!1),n(!1),zI(wn).then(()=>{e([])}).then(()=>{r([])}).catch(s=>{})},className:"gaming__log-out-btn",children:"Log Out"}),fR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYklEQVR4nO3cUUoDMRSF4buJXHT/OzF0A+2Dy1ECI0jpJJPc0yn0/h8URJ0+HPqD2jFmAAAAEb49sKCY2dXMvs3sc+UJMivbeD/bgxEntGRv23C3u4/JeeKV1151Hw8+R84T4+19jREH2f6lejGzOvie9LwzTBvv68DQaZVOtkevSZuzH8h25rpUfCLbo9elURayjVz3Vpxs15FtANkGkG0A2QaQbQDZBpBtANkGOD8k68dr+N12gGwDnGz14zVkO0C2AU62+vEash0o/CV5nZOtfryGbAcK2a5zsn3OgLXzvm3vupTK4m0U3H7xDyMK+ESW3JIWHJFb0jrIWcDJ+bwRK3eY7iNnASfn80as5LyPnAWcnM8bsZLzPnIWIGcBchYgZwFyFiBnAXIWIGcBchYgZwFyflHOvHEfyJl/ug6MyHiBERkvMCLjTeLwsScdf5fylA7VAYyMt4gjQAEAsGx+AZaLoGVM1F0LAAAAAElFTkSuQmCC";function pR({mainMenuIsClosed:t,setMainMenuIsClosed:e,userIsLogedIn:n,setBuyBtnActive:r,setGamesForCart:i,setWishlistBtnActive:s,wishList:o,setWishList:l}){const a=w.useRef(null),u=a.current,d=ci().pathname,h=(p,f=u)=>{p==="||"&&(d==="/register"||d==="/login")&&(f.classList.remove("gaming__navbar--big-position-static"),f.classList.add("gaming__navbar--sm-position-fixed"),f.classList.add("gaming__navbar--big-position-fixed")),p==="&&"&&d!=="/register"&&d!=="/login"&&(f.classList.add("gaming__navbar--big-position-static"),f.classList.add("gaming__navbar--sm-position-fixed"),f.classList.remove("gaming__navbar--big-position-fixed"))};window.onload=()=>{const p=document.querySelector("nav");h("||",p),h("&&",p)},u!==null&&h("||"),u!==null&&h("&&");function _(){u.classList.remove("gaming__navbar-opened"),e(!0)}const y=wS().map(p=>N(gS,{className:({isActive:f})=>f?"gaming__navbar-link-active":null,to:`${p.destination}`,children:[m("ion-icon",{name:`${p.iconName}`}),N("li",{children:[p.text," ",p.text==="Wish List"?`(${o.length})`:null]})]},St()));return N("nav",{ref:a,className:"gaming__navbar ",children:[!n&&N("div",{className:"gaming__navbar-account",children:[m(vS,{}),m(yS,{})]}),n&&m("div",{className:"gaming__navbar-account",children:m(hR,{setGamesForCart:i,setBuyBtnActive:r,setWishlistBtnActive:s,setWishList:l})}),t?null:m("button",{onClick:_,className:"gaming__navbar-close-btn btn",children:m("img",{className:"gaming__navbar-close-icon",src:fR})}),m("ul",{children:y}),m("hr",{})]})}var vc=new Map,_o=new WeakMap,Wp=0,mR=void 0;function gR(t){return t?(_o.has(t)||(Wp+=1,_o.set(t,Wp.toString())),_o.get(t)):"0"}function _R(t){return Object.keys(t).sort().filter(function(e){return t[e]!==void 0}).map(function(e){return e+"_"+(e==="root"?gR(t.root):t[e])}).toString()}function vR(t){var e=_R(t),n=vc.get(e);if(!n){var r=new Map,i,s=new IntersectionObserver(function(o){o.forEach(function(l){var a,u=l.isIntersecting&&i.some(function(c){return l.intersectionRatio>=c});t.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(a=r.get(l.target))==null||a.forEach(function(c){c(u,l)})})},t);i=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:r},vc.set(e,n)}return n}function yR(t,e,n,r){if(n===void 0&&(n={}),r===void 0&&(r=mR),typeof window.IntersectionObserver>"u"&&r!==void 0){var i=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var s=vR(n),o=s.id,l=s.observer,a=s.elements,u=a.get(t)||[];return a.has(t)||a.set(t,u),u.push(e),l.observe(t),function(){u.splice(u.indexOf(e),1),u.length===0&&(a.delete(t),l.unobserve(t)),a.size===0&&(l.disconnect(),vc.delete(o))}}function wR(t){var e,n=t===void 0?{}:t,r=n.threshold,i=n.delay,s=n.trackVisibility,o=n.rootMargin,l=n.root,a=n.triggerOnce,u=n.skip,c=n.initialInView,d=n.fallbackInView,h=n.onChange,_=w.useState(null),v=_[0],y=_[1],S=w.useRef(),p=w.useState({inView:!!c,entry:void 0}),f=p[0],g=p[1];S.current=h,w.useEffect(function(){if(!(u||!v)){var R;return R=yR(v,function(P,W){g({inView:P,entry:W}),S.current&&S.current(P,W),W.isIntersecting&&a&&R&&(R(),R=void 0)},{root:l,rootMargin:o,threshold:r,trackVisibility:s,delay:i},d),function(){R&&R()}}},[Array.isArray(r)?r.toString():r,v,l,o,a,u,s,d,i]);var E=(e=f.entry)==null?void 0:e.target,C=w.useRef();!v&&E&&!a&&!u&&C.current!==E&&(C.current=E,g({inView:!!c,entry:void 0}));var k=[y,f.inView,f.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}const ER=()=>{const{ref:t,inView:e}=wR();return(()=>{const r=document.querySelector(".gaming__scroll-up-arrow");r&&(e?r.classList.remove("gaming__scroll-up-arrow-hidden"):r.classList.add("gaming__scroll-up-arrow-hidden"))})(),m("footer",{ref:t,children:N("main",{className:"gaming__footer-main-container",children:[N("ul",{className:"gaming__footer-container",children:[m("li",{children:m(Ae,{to:"/",children:"Home"})}),m("li",{children:m(Ae,{to:"/login",children:"Go to login"})}),m("li",{children:m(Ae,{to:"/register",children:"Go to register"})})]}),N("ul",{className:"gaming__footer-container",children:[m("li",{children:m(Ae,{to:"/contact",children:"Contact"})}),m("li",{children:m(Ae,{to:"/shop",children:"Games"})})]}),N("ul",{className:"gaming__footer-container-social",children:[m("li",{children:m(Ae,{to:"https://ro-ro.facebook.com/",children:m("ion-icon",{class:"gaming__footer-social-icon",name:"logo-facebook"})})}),m("li",{children:m(Ae,{to:"https://www.instagram.com/",children:m("ion-icon",{class:"gaming__footer-social-icon",name:"logo-instagram"})})}),m("li",{children:m(Ae,{to:"https://twitter.com/?lang=ro",children:m("ion-icon",{class:"gaming__footer-social-icon",name:"logo-twitter"})})})]})]})})};function SR(){return N("svg",{className:"gaming__open-nav-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[m("title",{children:"Grid"}),m("rect",{x:"48",y:"48",width:"176",height:"176",rx:"20",ry:"20",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}),m("rect",{x:"288",y:"48",width:"176",height:"176",rx:"20",ry:"20",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}),m("rect",{x:"48",y:"288",width:"176",height:"176",rx:"20",ry:"20",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}),m("rect",{x:"288",y:"288",width:"176",height:"176",rx:"20",ry:"20",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"})]})}function CR({mainMenuIsClosed:t,setMainMenuIsClosed:e,filterPanelIsOpened:n}){const r=w.useRef(null);function i(){if(!r.current)return;const l=document.querySelectorAll("rect"),a=document.querySelector(".gaming__navbar");r.current.classList.add("menu-shrink");let u=[0,.2,.3,.4];l.forEach((c,d)=>{n?c.style.animation=`shrink-rect-left 0.25s ${u[d]}s ease-in-out forwards`:c.style.animation=`shrink-rect-left 0.25s ${u[d]}s ease-in-out forwards`}),r.current.addEventListener("animationend",function(c){c.target===this&&(e(!1),a.classList.add("gaming__navbar-opened"))})}function s(){i()}return(()=>{r.current&&(n?(r.current.classList.remove("gaming__display-menu-btn"),r.current.classList.add("gaming__hide-menu-btn")):(r.current.classList.remove("gaming__hide-menu-btn"),r.current.classList.add("gaming__display-menu-btn")))})(),t?m("button",{ref:r,onClick:s,className:"gaming__open-nav-btn btn",children:m(SR,{})}):null}const IR=({mainMenuIsClosed:t,setMainMenuIsClosed:e,filterPanelIsOpened:n,userIsLogedIn:r,setBuyBtnActive:i,setGamesForCart:s,setWishlistBtnActive:o,wishList:l,setWishList:a})=>N(w.Fragment,{children:[m("div",{className:"gaming__menus-container",children:m(CR,{filterPanelIsOpened:n,mainMenuIsClosed:t,setMainMenuIsClosed:e})}),m(pR,{setBuyBtnActive:i,setWishlistBtnActive:o,userIsLogedIn:r,mainMenuIsClosed:t,setMainMenuIsClosed:e,setGamesForCart:s,wishList:l,setWishList:a}),m(lS,{}),m(ER,{})]});const $p=""+new URL("heroImg-edc45b67.webp",import.meta.url).href,kR=""+new URL("logo-eb8fcd62.svg",import.meta.url).href;function TR(){return m("section",{className:"gaming__hero-section",children:N("div",{className:"gaming__hero-container",children:[m("img",{className:"gaming__hero-img-big",src:$p}),N("header",{children:[N("div",{className:"gaming__hero-heading-container",children:[m("img",{className:"gaming__logo",src:kR}),m("h1",{className:"gaming__hero-heading",children:"Retro Gaming"})]}),m("p",{className:"gaming__hero-text",children:"Welcome to Retro Gaming World, we specialize in selling classic and retro games for a variety of platforms, including the Nintendo Entertainment System, Super Nintendo Entertainment System, Sega Genesis, and more."}),m("p",{className:"gaming__hero-text",children:"At Retro Gaming World, we believe that every gamer should have the opportunity to experience the nostalgia and excitement of retro gaming. That's why we offer a wide selection of games at affordable prices, so you can relive your childhood memories or discover new favorites without breaking the bank. Our inventory is constantly updating, so be sure to check back often for new arrivals."}),m(Ae,{className:"gaming__hero-link",to:"/shop",children:m("button",{className:"gaming__hero-btn",children:"See Our Games"})})]}),m("img",{className:"gaming__hero-img-sm",src:$p})]})})}const NR=({mainMenuIsClosed:t,games:e,setSliderGames:n})=>{const r=w.useRef(null),i=w.useRef(null),[s,o]=w.useState(null),[l,a]=w.useState(0),[u,c]=w.useState(0),d=w.useRef(null),h=()=>(d.current||(d.current=new Map),d.current);w.useEffect(()=>{(async()=>{const E=await(await fetch("https://retro-gaming-slides-server.herokuapp.com/")).json();n(E)})()},[]);function _(){return e.length===0?void 0:e.map((g,E)=>{const C=g.imgUrl,k=g.id;return m("figure",{ref:R=>{const P=h();R&&P.set(E,R)},"data-gameid":k,className:"gaming__feature-img-container",children:m("img",{alt:"game",src:C,className:"gaming__feature-slider-img"})},k)})}const v=_();w.useEffect(()=>{if(!d.current)return;const f=d.current.get(u);if(f){const g=f.dataset.gameid;o(g)}},[d.current,e,u]),w.useEffect(()=>{if(!d.current||!d.current.size)return;(()=>{const g=d.current.get(0).getBoundingClientRect().width;for(let E=0;E<d.current.size;E++)d.current.get(E).style.left=`${g*E}px`})()},[d.current,e]),w.useEffect(()=>{if(!d.current||!r||d.current.size-1<0||u>d.current.size-1)return;let f=setInterval(()=>y(),2500);r.current.addEventListener("mouseenter",()=>{clearInterval(f)}),r.current.addEventListener("mouseleave",()=>{f=setInterval(()=>y(),2500)})},[d.current,t]);function y(){a(f=>f-100),c(f=>f+1)}function S(f){u===0?(c(f),a(-`${f*100}`)):u>0&&(c(g=>g-1),a(g=>g+100))}w.useEffect(()=>{if(!d.current)return;const f=d.current.size-1;u>f&&(a(0),c(0)),d.current.forEach(g=>{g.style.transform=`translateX(${l}%)`})},[d.current,u]);const p=f=>{const g=d.current.size-1;f.target.parentElement.id==="gaming__feature-move-slider-prev"?S(g):y()};return m(w.Fragment,{children:N("section",{className:"gaming__feature-section",children:[m("header",{className:"gaming__feature-header",children:m("h1",{className:"gaming__feature-heading",children:"The games that make you feel nostalgic"})}),N("div",{className:"gaming__feature-details-container",children:[N("div",{className:"gaming__feature-details",children:[N("div",{className:"gaming__feature-detail-container gaming__feature-variety-details",children:[m("ion-icon",{className:"gaming__feature-detail-icon",name:"infinite"}),m("p",{className:"gaming__feature-detail",children:"Large variety"}),m("p",{className:"gaming__feature-text",children:"We have 50+ games in our list from which you can choose"})]}),N("div",{className:"gaming__feature-detail-container gaming__feature-genres-details",children:[m("ion-icon",{name:"layers"}),m("p",{className:"gaming__feature-detail",children:"Different genres"}),m("p",{className:"gaming__feature-text",children:"Classic arcade games, platformers, RPGs, and more."})]}),N("div",{className:"gaming__feature-detail-container gaming__feature-about-details",children:[m("ion-icon",{name:"checkbox"}),m("p",{className:"gaming__feature-detail",children:"Carefully selected"}),m("p",{className:"gaming__feature-text",children:"Each game is carefully selected and curated to provide an authentic and nostalgic gaming experience for our users."})]})]}),N("div",{ref:r,className:"gaming__feature-slider",children:[m("button",{onClick:f=>{p(f)},id:"gaming__feature-move-slider-prev",className:"gaming__feature-move-slider-left-btn gaming__move-btn",children:m("ion-icon",{name:"arrow-back"})}),m("button",{onClick:f=>{p(f)},className:"gaming__feature-move-slider-right-btn gaming__move-btn",children:m("ion-icon",{name:"arrow-forward"})}),m("div",{className:"gaming__feature-game-cta-container",children:m(Ae,{to:`/shop/${s}`,children:m("button",{className:"gaming__feature-game-page-btn",children:"See Game"})})}),m("div",{ref:i,className:"gaming__feature-slides-container",children:v})]})]})]})})};const RR=({item:t})=>{const e=n=>{let r=n.target;r.nodeName!="BUTTON"&&(r=r.parentElement);const i=document.querySelectorAll(".gaming__faq-answer"),s=r.firstChild,o=document.querySelectorAll(".gaming__faq-down-arrow-icon"),l=r.parentElement.nextElementSibling;i.forEach((u,c)=>{if(u!=l){const d=o[c];u.classList.add("gaming__faq-answer-hidden"),d.style.transform="rotate(0deg)"}}),l.classList.toggle("gaming__faq-answer-hidden"),l.classList.contains("gaming__faq-answer-hidden")?s.style.transform="rotate(0deg)":s.style.transform="rotate(180deg)"};return N("div",{className:"gaming__faq-container",children:[N("div",{className:"gaming__question-container",children:[m("p",{className:"gaming__faq-question",children:t.q}),m("button",{className:"gaming__faq-btn",onClick:n=>e(n),children:m("ion-icon",{class:"gaming__faq-down-arrow-icon",name:"chevron-down-outline"})})]}),m("p",{className:"gaming__faq-answer gaming__faq-answer-hidden",children:t.a})]})},PR=()=>m("section",{className:"gaming__faq-section",children:N("main",{className:"gaming__faq-main-container",children:[m("p",{className:"gaming__faq-text",children:"FAQ"}),[{q:"Q: When do I receive my product?",a:"A: It will take between 2-3 working days"},{q:"Q: Can the product be returned?",a:"A: Yes, you can return it in the first 48 hours after we get notified about the receiving of the product"},{q:"Q: You only sell products through online store or is there a physycal one?",a:"A: At the moment orders can only be placed online"}].map(e=>m(RR,{item:e},St()))]})}),xR=({mainMenuIsClosed:t,setMainMenuIsClosed:e,games:n,setSliderGames:r})=>N(w.Fragment,{children:[m(TR,{mainMenuIsClosed:t,setMainMenuIsClosed:e}),m(NR,{mainMenuIsClosed:t,games:n,setSliderGames:r}),m(PR,{})]}),my=t=>{for(let e=0;e<t.length;e++){const n=t[e],r=n.rating;r<=20?(n.starRating="1 star",n.price="10$"):r>20&&r<=40?(n.starRating="2 stars",n.price="10$"):r>40&&r<=60?(n.starRating="3 stars",n.price="15$"):r>60&&r<=80?(n.starRating="4 stars",n.price="20$"):(n.starRating="5 stars",n.price="22$")}};const AR=({setFilteredGamesBySearchBar:t,gamesData:e})=>{const n=w.useRef(null),r=i=>{let s=[];const o=i.target.value.toLowerCase(),l=o.length;if(o===""&&(s=[],t(s)),!(e.length===0||!o)){for(let a=0;a<e.length;a++){const u=e[a],c=u.name.toLowerCase();o===c.slice(0,l)&&s.push(u)}t(s)}};return N("div",{ref:n,className:"gaming__searchbar",children:[m("input",{onChange:i=>{r(i)},placeholder:"Search Game",onFocus:()=>{n.current.classList.add("add-shadow")},onBlur:()=>{n.current.classList.remove("add-shadow")},className:"gaming__searchbar-input",type:"text"}),m("ion-icon",{name:"search"})]})};const OR=({setFilterPanelIsOpened:t,setOpenFilterBtnRef:e})=>{const n=w.useRef(null);return m("button",{ref:n,onClick:()=>{n.current.classList.remove("gaming__display-open-btn"),n.current.classList.add("gaming__hide-open-btn"),t(!0),n.current&&e(n)},className:"gaming__open-filter",children:m("ion-icon",{name:"search"})})};const Xa=({updateFilter:t,genresLists:e,ratingLists:n,priceLists:r,getRefForFilters:i,criterion:s,filtersToBeDisplayedRefs:o,ulListsAreOpened:l,setUlListsAreOpened:a,tabWasClickedTwice:u,setTabWasClickedTwice:c,numOfOpenLists:d,setNumOfOpenLists:h,currentTab:_,setCurrentTab:v})=>{const y=w.useRef(null);i(y);const S=f=>{f.stopPropagation();const g=f.target.nextElementSibling===null?f.target.parentElement.nextElementSibling:f.target.nextElementSibling;let E=g.dataset.ulType;v(E),a(C=>({...C,[E]:!C[E]}));for(let C=0;C<o.length;C++)if(o.length>0){if(g===o[C].current)continue;o[C].current.classList.remove("gaming__filter-ul-visible-delayed"),o[C].current.classList.add("gaming__filter-ul-hidden")}d===2?y.current&&(y.current.classList.toggle("gaming__filter-ul-hidden"),y.current.classList.add("gaming__filter-ul-visible-delayed")):y.current&&y.current.classList.toggle("gaming__filter-ul-hidden"),u[E]&&y.current.classList.remove("gaming__filter-ul-visible-delayed");for(const C in l)C!==E&&a(k=>({...k,[C]:!1}))};w.useEffect(()=>{h(1);for(const f in l)l[f]&&h(g=>g+1)},[l]),w.useEffect(()=>{if(_){for(const f in u)_!==f&&c(g=>({...g,[f]:!1}));c(f=>({...f,[_]:!0}))}},[_]);let p;switch(s){case"Genres":p=e;break;case"Rating":p=n;break;case"Price":p=r}return N("div",{className:"gaming__filter-inner-container",children:[m("div",{onClick:S,className:"gaming__filter-name",children:N("p",{children:[" ",s]})}),m("ul",{"data-ul-type":s,onClick:f=>{t(f)},ref:y,className:"gaming__filter-ul-visible gaming__filter-ul-hidden",children:p})]})};const fh=({cartPanelIsOpened:t,setCartPanelIsOpened:e,gamesForCart:n})=>{const r=w.useRef(null);return(()=>{r.current&&(t||n.length===0?(r.current.classList.add("hide-cart-btn"),r.current.classList.remove("display-cart-btn")):(r.current.classList.remove("hide-cart-btn"),r.current.classList.add("display-cart-btn")))})(),m("button",{ref:r,onClick:()=>{e(!0)},className:"gaming__cart-btn",children:m("ion-icon",{name:"cart"})})};const ph=({setCartPanelIsOpened:t,cartPanelIsOpened:e,gamesForCart:n,setGamesForCart:r})=>{const i=w.useRef(null);let s=0;const o=n.map(a=>{const u=a.name,c=a.price,d=parseInt(c),h=a.cover.url;s=s+d;const _=v=>{const y=v.target.dataset.gameid;let S=[];n.find(p=>{p.id!=y&&S.push(p)}),r(S)};return N("article",{className:"gaming__cart-panel-item-container",children:[m("p",{className:"gaming__cart-panel-item-text gaming__cart-panel-item-name",children:u}),N("div",{className:"gaming__cart-panel-item",children:[m("img",{src:h}),N("div",{className:"gaming__cart-panel-pqr",children:[N("p",{className:"gaming__cart-panel-item-text",children:["quantity:",m("span",{className:"gaming__cart-panel-span",children:"1"})]}),N("p",{className:"gaming__cart-panel-item-text",children:["price:",m("span",{className:"gaming__cart-panel-span",children:c})]}),m("button",{onClick:v=>{_(v)},"data-gameid":a.id,className:"gaming__cart-panel-item-remove-btn",children:"Remove"})]})]})]},St())});return(()=>{i.current&&(e?i.current.classList.add("opened-cart-panel"):i.current.classList.remove("opened-cart-panel"))})(),N("div",{ref:i,className:"gaming__cart-panel",children:[m("button",{onClick:()=>{t(!1)},className:"gaming__cart-panel-close-btn",children:m("ion-icon",{name:"close"})}),m("div",{className:"gaming__cart-panel-items",children:o}),N("p",{className:"gaming__cart-panel-total-price",children:["Total: ",s,"$"]})]})};const LR=({setFilterPanelIsOpened:t,openFilterBtnRef:e})=>m("button",{onClick:()=>{e.current.classList.remove("gaming__hide-open-btn"),e.current.classList.add("gaming__display-open-btn"),t(!1)},className:"gaming__close-filter",children:m("ion-icon",{name:"close"})});const gy=({setBuyBtnActive:t,gamesForCart:e,setGamesForCart:n,game:r,userIsLogedIn:i})=>m("button",{onClick:()=>{let o=!1;const l=r.id;for(let a=0;a<e.length;a++){const c=e[a].id;l===c&&(o=!0)}i&&!o&&n(a=>[...a,r]),t(!0)},className:"gaming__buy-game-btn",children:"Buy"}),_y=t=>{const[e,n]=w.useState();w.useEffect(()=>{B_(wn,i=>{n(!!i)})},[]);const r=i=>{i.stopPropagation();const s=i.target.parentElement,o=+s.dataset.gameid,l=t.gamesData.find(u=>u.id===o);if(!l)return;s.classList.add("gaming__heart-active"),t.setWishList(u=>[...u,l]);let a=!1;for(let u=0;u<t.wishList.length;u++)t.wishList[u].id==o&&(a=!0);if(a){const u=t.wishList.filter(c=>c.id!=o);t.setWishList(u)}};return N("div",{className:"gaming__game-container",children:[N("div",{className:"gaming__game-fav-container",children:[m("div",{className:"gaming__stars-container",children:t.starIcons}),m("button",{"data-gameid":t.game.id,onClick:i=>{if(!e){t.setWishlistBtnActive(!0);return}r(i)},className:"gaming__heart-btn",children:m("ion-icon",{name:"heart"})})]}),m("img",{className:"gaming__game-img",src:t.gameCover}),m("p",{className:"gaming__game-name",children:t.gameName}),N("div",{className:"gaming__game-actions-container",children:[m(Ae,{to:`/shop/${t.game.id}`,children:m("button",{className:"gaming__about-game-btn",children:"About Game"})}),m(gy,{userIsLogedIn:t.userIsLogedIn,game:t.game,gamesForCart:t.gamesForCart,setGamesForCart:t.setGamesForCart,setBuyBtnActive:t.setBuyBtnActive}),m("span",{className:"gaming__game-price",children:t.gamePrice})]})]})},DR=({gamesData:t,setGamesData:e,lastPage:n,filterPanelIsOpened:r,setFilterPanelIsOpened:i,openFilterBtnRef:s,setOpenFilterBtnRef:o,displayOverlayGamesNotFound:l,setDisplayOverlayGamesNotFound:a,setCartPanelIsOpened:u,cartPanelIsOpened:c,setBuyBtnActive:d,gamesForCart:h,setGamesForCart:_,userIsLogedIn:v,wishList:y,setWishList:S,setWishlistBtnActive:p})=>{const[f,g]=w.useState([]),[E,C]=w.useState({}),[k,R]=w.useState(0),[P,W]=w.useState([]),[O,ve]=w.useState([]),[F,H]=w.useState([]),[dt,_i]=w.useState([]),[sn,$n]=w.useState(null),[x,b]=w.useState(null),[M,X]=w.useState({Genres:!1,Rating:!1,Price:!1}),[ae,bt]=w.useState({Genres:!1,Rating:!1,Price:!1}),[ht,on]=w.useState(1),[Tt,wr]=w.useState([]),[Sy,mh]=w.useState({}),qs=w.useRef(null),Cy=["1 star","2 stars","3 stars","4 stars","5 stars"],Iy=["10$","15$","20$","22$"],gh=P.length>0,ky=O.length>0,oa=[...t];oa.length>0&&my(oa),w.useEffect(()=>{e(oa)},[]),w.useEffect(()=>{(async()=>{const Q=await(await fetch("https://retro-gaming-genres-server.herokuapp.com/")).json();g(Q)})()},[]),w.useEffect(()=>{(async()=>{const Q=await(await fetch(`https://retro-gaming-games-server.herokuapp.com/gamesData?game=${k}`)).json();e(Q)})()},[k]);const Ty=G=>{if(!G.target.closest(".gaming__filter-ul-visible")){on(1),b(null),X({Genres:!1,Rating:!1,Price:!1}),bt({Genres:!1,Rating:!1,Price:!1});for(let K=0;K<dt.length;K++)dt[K].current.classList.add("gaming__filter-ul-hidden"),dt[K].current.classList.remove("gaming__filter-ul-visible-delayed")}},la=(G,K)=>{const Q={};return{lists:G.map((ue,Me)=>(Q[`${K}-${Me}`]=!1,N("li",{children:[ue,m("input",{checked:Sy[`${K}-${Me}`],onChange:Nt=>{const $e=Nt.target.dataset.inputTypeId;mh(ye=>({...ye,[$e]:!ye[$e]}))},"data-input-type-id":`${K}-${Me}`,"data-i":Me,"data-filter-item":ue,"data-filter-type":K,type:"checkbox"})]},St()))),templates:Q}},{lists:Ny,templates:Ry}=la(f,"genre"),{lists:Py,templates:xy}=la(Cy,"rating"),{lists:Ay,templates:Oy}=la(Iy,"price");w.useEffect(()=>{mh({...Ry,...xy,...Oy})},[]);const aa=G=>{const K=G.target,Q=K.checked;if(K.nodeName!="INPUT")return;const We=[K.dataset.filterItem],ue=K.dataset.filterType,Me=[+K.dataset.i],Nt=(Mt,$e)=>{Mt(ye=>{let Ft;return Q?Ft=Array.isArray(ye[ue])?ye[ue]:[]:Ft=[],{...ye,[ue]:[...Ft,...$e]}})};if(!Q){const Mt=F[ue].filter(ye=>ye!==Me[0]),$e=E[ue].filter(ye=>ye!==We[0]);Nt(C,$e),Nt(H,Mt)}E[ue]&&E[ue].includes(We[0])||(Nt(C,We),Nt(H,Me))};w.useEffect(()=>{(()=>{if(t.length===0)return;let K=[],Q;for(let We=0;We<t.length;We++){Q=null;const ue=t[We],Me=ue.genres,Nt=ue.starRating,Mt=ue.price,$e={genre:[],rating:[],price:[]};if(Me){if(E.hasOwnProperty("genre"))for(let ye=0;ye<Me.length;ye++){const Ft=Me[ye].name;$e.genre.push(Ft)}E.hasOwnProperty("rating")&&$e.rating.push(Nt),E.hasOwnProperty("price")&&$e.price.push(Mt);for(const ye in E){if(Q===!1)break;for(let Ft=0;Ft<E[ye].length;Ft++)if($e[ye].includes(E[ye][Ft]))Q=!0;else{Q=!1;break}}Q&&K.push(ue)}}W(K)})()},[t,F]),(()=>{qs.current&&(r?qs.current.classList.add("gaming__filter-opened"):qs.current.classList.remove("gaming__filter-opened"))})(),w.useEffect(()=>()=>{i(!1)},[]);const Ly=()=>{k!==0&&R(G=>G-1)},Dy=()=>{k!==n&&R(G=>G+1)},Qs=G=>G.length>0&&k>=0&&G.map(Q=>{const We=Q.cover.url.replace("t_thumb","t_cover_big"),ue=Q.name.toUpperCase(),Me=Q.price,Nt=+Q.starRating.slice(0,1),Mt=[];for(let $e=0;$e<Nt;$e++)Mt.push(m("ion-icon",{name:"star"},St()));return m(_y,{gameCover:We,gameName:ue,gamePrice:Me,starIcons:Mt,game:Q,gamesData:t,userIsLogedIn:v,gamesForCart:h,setGamesForCart:_,setBuyBtnActive:d,wishList:y,setWishList:S,setWishlistBtnActive:p},St())});w.useEffect(()=>{let G;function K(){let Q=!1;for(let We in E)if(Q=E[We].length>0,Q)break;ky?G=Qs(O):gh?G=Qs(P):Q&&!gh?(a(!0),G=Qs([])):G=Qs(t)}K(),wr(G)},[O,t,P,y]),w.useEffect(()=>{const G=document.querySelectorAll(".gaming__heart-btn");for(let K=0;K<G.length;K++){const Q=G[K],We=Q.dataset.gameid;for(let ue=0;ue<y.length;ue++){if(!y[ue])continue;const Me=y[ue].id;We==Me&&Q.classList.add("gaming__heart-active")}}},[y,Tt]),w.useEffect(()=>{$n(document.querySelector(".gaming__menus-container"))},[]);const by=sn&&dE.createPortal(m(OR,{setFilterPanelIsOpened:i,setOpenFilterBtnRef:o}),sn),ua=G=>{w.useEffect(()=>{_i(K=>[...K,G])},[])};return N("section",{onClick:G=>{Ty(G)},className:"gaming__shop-section",children:[N("div",{ref:qs,className:"gaming__filter-container",children:[N("div",{className:"gaming__searchbar-container",children:[m(AR,{gamesData:t,setFilteredGamesBySearchBar:ve}),m(LR,{openFilterBtnRef:s,setFilterPanelIsOpened:i})]}),m("p",{children:"Filter By:"}),N("div",{className:"gaming__filters",children:[m(Xa,{criterion:"Genres",updateFilter:aa,genresLists:Ny,getRefForFilters:ua,filtersToBeDisplayedRefs:dt,ulListsAreOpened:M,setUlListsAreOpened:X,tabWasClickedTwice:ae,setTabWasClickedTwice:bt,numOfOpenLists:ht,setNumOfOpenLists:on,currentTab:x,setCurrentTab:b}),m(Xa,{criterion:"Rating",updateFilter:aa,ratingLists:Py,getRefForFilters:ua,filtersToBeDisplayedRefs:dt,ulListsAreOpened:M,setUlListsAreOpened:X,tabWasClickedTwice:ae,setTabWasClickedTwice:bt,numOfOpenLists:ht,setNumOfOpenLists:on,currentTab:x,setCurrentTab:b}),m(Xa,{criterion:"Price",updateFilter:aa,priceLists:Ay,getRefForFilters:ua,filtersToBeDisplayedRefs:dt,ulListsAreOpened:M,setUlListsAreOpened:X,tabWasClickedTwice:ae,setTabWasClickedTwice:bt,numOfOpenLists:ht,setNumOfOpenLists:on,currentTab:x,setCurrentTab:b})]}),N("div",{className:"gaming__mobile-pages",children:[m("p",{className:"gaming__mobile-pages-text",children:"Go to page:"}),m("button",{onClick:Ly,className:"gaming__mobile-pages-prev",children:m("ion-icon",{name:"remove"})}),m("input",{value:k.toString(),onChange:G=>{updateCurrentPage(G)},className:"gaming__mobile-pages-input",type:"number"}),m("button",{onClick:Dy,className:"gaming__mobile-pages-next",children:m("ion-icon",{name:"add"})}),m("span",{className:"gaming__mobile-pages-span",children:"/"}),m("span",{className:"gaming__mobile-pages-span",children:n})]})]}),v&&m(ph,{gamesForCart:h,setGamesForCart:_,setCartPanelIsOpened:u,cartPanelIsOpened:c}),v&&m(fh,{gamesForCart:h,cartPanelIsOpened:c,setCartPanelIsOpened:u}),m("main",{className:"gaming__main-container",children:m("div",{className:"gaming__main-content",children:Tt})}),m("button",{onClick:()=>{scroll({top:0,behavior:"smooth"})},className:"gaming__scroll-up-arrow gaming__scroll-up-arrow-hidden",children:m("ion-icon",{name:"arrow-up-outline"})}),by]})},bR=({gamesData:t,setGamesData:e,lastPage:n,filterPanelIsOpened:r,setFilterPanelIsOpened:i,openFilterBtnRef:s,setOpenFilterBtnRef:o,displayOverlayGamesNotFound:l,setDisplayOverlayGamesNotFound:a,areInitialNumberOfPages:u,setAreInitialNumberOfPages:c,setGameId:d,setCartPanelIsOpened:h,cartPanelIsOpened:_,setBuyBtnActive:v,gamesForCart:y,setGamesForCart:S,userIsLogedIn:p,wishList:f,setWishList:g,setWishlistBtnActive:E})=>m(DR,{gamesData:t,setGamesData:e,lastPage:n,openFilterBtnRef:s,setOpenFilterBtnRef:o,filterPanelIsOpened:r,setFilterPanelIsOpened:i,displayOverlayGamesNotFound:l,setDisplayOverlayGamesNotFound:a,areInitialNumberOfPages:u,setAreInitialNumberOfPages:c,setGameId:d,setCartPanelIsOpened:h,cartPanelIsOpened:_,setBuyBtnActive:v,gamesForCart:y,setGamesForCart:S,userIsLogedIn:p,wishList:f,setWishList:g,setWishlistBtnActive:E});const MR=({gamesData:t,wishList:e,setWishList:n,gamesForCart:r,setGamesForCart:i,setBuyBtnActive:s,userIsLogedIn:o,setWishlistBtnActive:l,cartPanelIsOpened:a,setCartPanelIsOpened:u})=>{const c=()=>e.map(_=>{const v=_.cover.url.replace("t_thumb","t_cover_big"),y=_.name.toUpperCase(),S=_.price,p=+_.starRating.slice(0,1),f=[];for(let g=0;g<p;g++)f.push(m("ion-icon",{name:"star"},St()));return m(_y,{game:_,gamesData:t,wishList:e,setWishList:n,setWishlistBtnActive:l,starIcons:f,gameCover:v,gameName:y,gamePrice:S,gamesForCart:r,setGamesForCart:i,setBuyBtnActive:s,userIsLogedIn:o},St())});w.useEffect(()=>{const h=document.querySelectorAll(".gaming__heart-btn");for(let _=0;_<h.length;_++){const v=h[_],y=v.dataset.gameid;for(let S=0;S<e.length;S++){const p=e[S].id;y==p&&v.classList.add("gaming__heart-active")}}});const d=c();return m("section",{className:"gaming__wishlist-section",children:N("main",{className:"gaming__main-container",children:[m("div",{className:"gaming__main-content",children:d}),o&&m(ph,{gamesForCart:r,setGamesForCart:i,setCartPanelIsOpened:u,cartPanelIsOpened:a}),o&&m(fh,{gamesForCart:r,cartPanelIsOpened:a,setCartPanelIsOpened:u})]})})},FR=({gamesData:t,wishList:e,setWishList:n,gamesForCart:r,setGamesForCart:i,setBuyBtnActive:s,userIsLogedIn:o,setWishlistBtnActive:l,games:a,cartPanelIsOpened:u,setCartPanelIsOpened:c})=>m(MR,{gamesData:t,wishList:e,setWishList:n,gamesForCart:r,setGamesForCart:i,setBuyBtnActive:s,userIsLogedIn:o,setWishlistBtnActive:l,games:a,cartPanelIsOpened:u,setCartPanelIsOpened:c});const UR=()=>(w.useEffect(()=>{let t;async function e(){const n={lat:45.7589515,lng:21.2194093},{Map:r}=await google.maps.importLibrary("maps"),{AdvancedMarkerView:i}=await google.maps.importLibrary("marker");t=new r(document.getElementById("map"),{zoom:13,center:n,mapId:"contact_map"}),new i({map:t,position:n,title:"Timisoara"})}e()},[]),m("div",{className:"test",id:"map"}));const zR=()=>m("section",{className:"gaming__contact-section",children:N("main",{className:"gaming__contact-main-content",children:[m("div",{className:"gaming__contact-details-container",children:N("ul",{className:"gaming__contact-details-ul",children:[N("li",{children:[m("span",{children:"Phone Number:"})," 07xx-xxx-xxx"]}),N("li",{children:[m("span",{children:"Email:"})," someRandomMail@gmail.com"]}),N("li",{children:[m("span",{children:"Location:"})," Some location"]})]})}),m(UR,{})]})}),BR=()=>m(w.Fragment,{children:m(zR,{})}),vy=(t,e=300)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{t.apply(globalThis,r)},e)}},yy=({setUserEmail:t})=>{const e=vy(n=>{t(n.target.value)});return m("input",{onChange:e,placeholder:"email",className:"gaming__account-form-input",type:"email"})},wy=({validatePassword:t,userPassword:e,setUserPassword:n})=>{const r=vy(i=>{n(i.target.value)});return w.useEffect(()=>{t&&t(e)},[e]),m("input",{onChange:i=>{r(i)},placeholder:"pass",className:"gaming__account-form-input",type:"password"})};const WR=()=>{const[t,e]=w.useState(""),[n,r]=w.useState("");return m("div",{className:"gaming__account-container",children:N("form",{onSubmit:async s=>{s.preventDefault();try{const l=(await MI(wn,t,n)).user}catch(o){console.log(o)}},className:"gaming__account-form",children:[m(yy,{setUserEmail:e}),m(wy,{setUserPassword:r}),m("button",{type:"submit",className:"gaming__account-login-btn",children:"Log In"})]})})};const Ey=({redirectSecondsFromLogin:t,redirectSecondsFromRegister:e})=>N("div",{className:"gaming__redirect-to-shop-overlay",children:[t&&N("p",{className:"gaming__redirect-to-shop-overlay-text",children:["You will be redirected to the shoping page in"," ",t," ",t===1?"second":"seconds"]}),e&&N("p",{className:"gaming__redirect-to-shop-overlay-text",children:["You will be redirected to the shoping page in"," ",e," ",e===1?"second":"seconds"]})]}),$R=({userIsLogedIn:t})=>{const[e,n]=w.useState(3),r=md();return w.useEffect(()=>{e===0&&r("/shop"),!(!t||e===0)&&setTimeout(()=>{n(i=>i-1)},1e3)},[t,e]),N(w.Fragment,{children:[!t&&m("section",{className:"gaming__login-section",children:m(WR,{})}),t&&e&&m(Ey,{redirectSecondsFromLogin:e})]})},jR=()=>{const t={hasNumber:!1,hasUpperCase:!1,hasSpecialChar:!1,minPassLength:7},[e,n]=w.useState(""),[r,i]=w.useState(""),[s,o]=w.useState(t),l=(c,d)=>{o(h=>({...h,[c]:d}))},a=c=>{const d=["!","@","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];for(let v=0;v<c.length;v++){const y=c[v],S=Number(y),p=d.some(function(f){return y===f});S&&l("hasNumber",!0),y===y.toUpperCase()&&!S&&!p&&l("hasUpperCase",!0),p&&l("hasSpecialChar",!0)}const h=()=>{d.some(function(y){return c.includes(y)})||l("hasSpecialChar",!1)},_=(v,y,S)=>{v.test(c)||l(y,S)};return _(/\d/,"hasNumber",!1),_(/[A-Z]/,"hasUpperCase",!1),h(),!!(s.hasNumber&&s.hasUpperCase&&s.hasSpecialChar)};return m("div",{className:"gaming__account-container",children:N("form",{onSubmit:async c=>{if(!(r.length<t.minPassLength)&&a(r)){c.preventDefault();try{const d=await bI(wn,e,r)}catch(d){console.log(d.message)}}},className:"gaming__account-form",children:[m(yy,{setUserEmail:n}),m(wy,{validatePassword:a,userPassword:r,setUserPassword:i}),m("button",{className:"gaming__account-register-btn",children:"Create Account"}),m("div",{className:"gaming__account-validation",children:N("ul",{children:[N("li",{className:`gaming__account-validation-li-${s.hasUpperCase?"correct":"wrong"}`,children:[m("span",{children:"→"}),"atleast one upper case character;"]}),N("li",{className:`gaming__account-validation-li-${s.hasNumber?"correct":"wrong"}`,children:[m("span",{children:"→"})," atleast one number character;"]}),N("li",{className:`gaming__account-validation-li-${s.hasSpecialChar?"correct":"wrong"}`,children:[m("span",{children:"→"})," atleast one special character;"]}),N("li",{className:`gaming__account-validation-li-${r.length>=s.minPassLength?"correct":"wrong"}`,children:[m("span",{children:"→"}),"password length must be atleast 7;"]})]})})]})})};const VR=({userIsLogedIn:t})=>{const e=md(),[n,r]=w.useState(3);return w.useEffect(()=>{n===0&&e("/shop"),!(!t||n===0)&&setTimeout(()=>{r(i=>i-1)},1e3)},[t,n]),N(w.Fragment,{children:[!t&&m("section",{className:"gaming__register-section",children:m(jR,{})}),t&&n&&m(Ey,{redirectSecondsFromRegister:n})]})};const HR=({setDisplayOverlayGamesNotFound:t})=>{const e=w.useRef(null),n=window.location.hash;return m(w.Fragment,{children:n==="#/shop"&&m("div",{ref:e,className:"gaming__games-not-found-overlay",children:N("div",{className:"gaming__games-not-found-overlay-container",children:[m("p",{className:"gaming__games-not-found-message",children:"We didn't find any games to match your query"}),m("button",{className:"gaming__games-not-found-close-overlay-btn",onClick:()=>t(!1),children:"OK"})]})})})};const GR=()=>m(Ae,{to:"/login",className:"gaming__redirect-to-login-btn",children:"Log In"});const KR=()=>m(Ae,{to:"/register",className:"gaming__redirect-to-register-btn",children:"Create account"});const qR=({setBuyBtnActive:t,setWishlistBtnActive:e})=>m("button",{onClick:()=>{e(!1),t(!1)},className:"gaming__close-redirect-overlay-btn",children:m("ion-icon",{name:"close"})});const QR=({buyBtnActive:t,setBuyBtnActive:e,wishlistBtnActive:n,setWishlistBtnActive:r})=>m("div",{onClick:()=>{r(!1),e(!1)},className:"gaming__redirect-to-account-backdrop-shadow",children:N("div",{className:"gaming__redirect-to-account-overlay-container",children:[m(qR,{setWishlistBtnActive:r,setBuyBtnActive:e}),N("p",{className:"gaming__redirect-to-account-text",children:["To ",t&&"purchase",n&&"list that game"," please log in or create an account."]}),N("div",{className:"gaming__redirect-to-account-overlay-btns-container",children:[m(GR,{}),m(KR,{})]})]})}),YR=({displayOverlayGamesNotFound:t,setDisplayOverlayGamesNotFound:e,userIsLogedIn:n,buyBtnActive:r,setBuyBtnActive:i,wishlistBtnActive:s,setWishlistBtnActive:o})=>N(w.Fragment,{children:[t&&m(HR,{displayOverlayGamesNotFound:t,setDisplayOverlayGamesNotFound:e}),!n&&(r||s)&&m(QR,{wishlistBtnActive:s,setWishlistBtnActive:o,buyBtnActive:r,setBuyBtnActive:i})]});const JR=({userIsLogedIn:t,setSelectedTab:e,gamesForCart:n,setGamesForCart:r,game:i,setBuyBtnActive:s})=>{const o=w.useRef(null),l=w.useRef(null);return m(w.Fragment,{children:N("div",{className:"gaming__current-game-selections-container",children:[m("button",{ref:o,onClick:a=>{a.target.classList.add("selected-btn"),l.current.classList.remove("selected-btn"),e("about")},className:"gaming__current-game-selection-btn selected-btn",children:"About game"}),m("button",{ref:l,onClick:a=>{a.target.classList.add("selected-btn"),o.current.classList.remove("selected-btn"),e("screenshots")},className:"gaming__current-game-selection-btn",children:"Screenshots"}),m(gy,{userIsLogedIn:t,setBuyBtnActive:s,game:i,gamesForCart:n,setGamesForCart:r})]})})},XR=({games:t,userIsLogedIn:e,gamesData:n,cartPanelIsOpened:r,setCartPanelIsOpened:i,gamesForCart:s,setGamesForCart:o,setBuyBtnActive:l})=>{const a=[...t];my(a);const u=()=>{const[c,d]=w.useState("about");let h;const v=window.location.hash.split("/"),y=+v[v.length-1];for(let F=0;F<t.length;F++){const H=t[F];H.id===y&&(h=H)}for(let F=0;F<n.length&&!h;F++){const H=n[F];H.id===y&&(h=H)}if(!h)return;const S=h.cover.url.replace("t_thumb","t_720p"),p=+h.starRating.slice(0,1),f=new Date(h.first_release_date*1e3),g=f.toLocaleString("default",{month:"short"}),E=f.getFullYear(),C=f.getDate();let k=[];if(h.screenshots)for(let F=0;F<h.screenshots.length;F++){const H=h.screenshots[F].url;k.push(H)}const R=k.map(F=>m("li",{children:m("img",{src:F})},St()));let P=[];for(let F=0;F<p;F++)P.push(m("ion-icon",{name:"star"},St()));let W=[];for(let F=0;F<h.genres.length;F++){const H=" "+h.genres[F].name;W.push(H)}let O=[];for(let F=0;F<h.platforms.length;F++){const H=h.platforms[F].abbreviation;H&&O.push(H)}const ve=O.map(F=>m("li",{children:F},St()));return N(w.Fragment,{children:[N("div",{className:"gaming__current-game-details-container",children:[m("img",{className:"gaming__current-game-img",src:S}),m("div",{className:"gaming__current-game-overlay"}),m(JR,{userIsLogedIn:e,game:h,setBuyBtnActive:l,gamesForCart:s,setGamesForCart:o,setSelectedTab:d})]}),c==="about"&&m("div",{className:"gaming__current-game-about-container",children:N("ul",{className:"gaming__current-game-selection-details-ul",children:[N("li",{className:"gaming__current-game-detail",children:[m("span",{children:"Game name:"})," "+h.name]}),N("li",{className:"gaming__current-game-detail",children:[m("span",{children:"Genres:"})," "+W.join(",")]}),N("li",{className:"gaming__current-game-detail",children:[m("span",{children:"Rating:"})," ",P]}),N("li",{className:"gaming__current-game-detail",children:[m("span",{children:"Release date:"})," "+g,"/",C,"/",E]}),N("li",{className:"gaming__current-game-detail-platforms",children:[m("p",{children:"Supported platforms:"}),m("ul",{className:"gaming__current-game-platforms",children:ve})]})]})}),c==="about"&&N("p",{className:"gaming__current-game-detail-summary",children:[m("span",{children:"Game description :"})," ",h.summary]}),c==="screenshots"&&m("div",{className:"gaming__current-game-screenshots-container",children:R})]})};return w.useEffect(()=>{i(!1)},[]),N("section",{className:"gaming__current-game-details-section",children:[m("main",{children:u()}),m(ph,{setGamesForCart:o,gamesForCart:s,cartPanelIsOpened:r,setCartPanelIsOpened:i}),m(fh,{gamesForCart:s,cartPanelIsOpened:r,setCartPanelIsOpened:i})]})};function ZR(){const[t,e]=w.useState(!0),[n,r]=w.useState(!1),[i,s]=w.useState(!1),[o,l]=w.useState(null),[a,u]=w.useState(!1),[c,d]=w.useState(!1),[h,_]=w.useState(!1),[v,y]=w.useState(!1),[S,p]=w.useState([]),[f,g]=w.useState([]),[E,C]=w.useState(0),[k,R]=w.useState([]),[P,W]=w.useState([]);return w.useEffect(()=>{(async()=>{const F=await(await fetch("https://retro-gaming-games-server.herokuapp.com/id-for-last-page")).json();C(F)})()},[]),w.useEffect(()=>{B_(wn,O=>{d(!!O)})},[]),w.useEffect(()=>{if(!c)return;const O=wn.currentUser&&wn.currentUser.uid,ve=hy(py,"users/"+O);ZN(ve,F=>{const H=F.val(),dt=H&&H.gamesForWishList,_i=JSON.parse(dt);H&&H.gamesForWishList&&g(_i);const sn=H&&H.gamesForCart,$n=JSON.parse(sn);H&&H.gamesForCart&&p($n)})},[c]),w.useEffect(()=>{if(!c)return;const O=wn.currentUser.uid;dR(O,{gamesForCart:JSON.stringify(S),gamesForWishList:JSON.stringify(f)})},[S,f]),m(w.Fragment,{children:N(pS,{children:[m(YR,{buyBtnActive:h,setBuyBtnActive:_,userIsLogedIn:c,displayOverlayGamesNotFound:a,setDisplayOverlayGamesNotFound:u,wishlistBtnActive:v,setWishlistBtnActive:y}),m(uS,{children:N(Ut,{path:"",element:m(IR,{setBuyBtnActive:_,setWishlistBtnActive:y,userIsLogedIn:c,setOpenFilterBtnRef:l,setFilterPanelIsOpened:r,filterPanelIsOpened:n,mainMenuIsClosed:t,setMainMenuIsClosed:e,setGamesForCart:p,wishList:f,setWishList:g}),children:[m(Ut,{index:!0,element:m(xR,{games:P,setSliderGames:W,mainMenuIsClosed:t,setMainMenuIsClosed:e})}),m(Ut,{path:"/shop",element:m(bR,{gamesData:k,setGamesData:R,lastPage:E,openFilterBtnRef:o,setOpenFilterBtnRef:l,filterPanelIsOpened:n,setFilterPanelIsOpened:r,displayOverlayGamesNotFound:a,setDisplayOverlayGamesNotFound:u,setCartPanelIsOpened:s,cartPanelIsOpened:i,setBuyBtnActive:_,gamesForCart:S,setGamesForCart:p,userIsLogedIn:c,wishList:f,setWishList:g,setWishlistBtnActive:y})}),m(Ut,{path:"/shop/:gameId",element:m(XR,{games:P,userIsLogedIn:c,cartPanelIsOpened:i,setCartPanelIsOpened:s,gamesData:k,gamesForCart:S,setGamesForCart:p,setBuyBtnActive:_})}),m(Ut,{path:"/wishlist",element:m(FR,{gamesData:k,gamesForCart:S,setGamesForCart:p,wishList:f,setWishList:g,setBuyBtnActive:_,userIsLogedIn:c,setWishlistBtnActive:y,cartPanelIsOpened:i,setCartPanelIsOpened:s})}),m(Ut,{path:"/contact",element:m(BR,{})}),m(Ut,{path:"/login",element:m($R,{userIsLogedIn:c})}),m(Ut,{path:"/register",element:m(VR,{userIsLogedIn:c})})]})})]})})}eu.createRoot(document.getElementById("root")).render(m(ZR,{}));
