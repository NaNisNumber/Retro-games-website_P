function By(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bp={exports:{}},Rl={},Wp={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=Symbol.for("react.element"),Wy=Symbol.for("react.portal"),$y=Symbol.for("react.fragment"),jy=Symbol.for("react.strict_mode"),Vy=Symbol.for("react.profiler"),Hy=Symbol.for("react.provider"),Gy=Symbol.for("react.context"),Ky=Symbol.for("react.forward_ref"),qy=Symbol.for("react.suspense"),Qy=Symbol.for("react.memo"),Yy=Symbol.for("react.lazy"),fh=Symbol.iterator;function Jy(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var $p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jp=Object.assign,Vp={};function li(t,e,n){this.props=t,this.context=e,this.refs=Vp,this.updater=n||$p}li.prototype.isReactComponent={};li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hp(){}Hp.prototype=li.prototype;function gc(t,e,n){this.props=t,this.context=e,this.refs=Vp,this.updater=n||$p}var _c=gc.prototype=new Hp;_c.constructor=gc;jp(_c,li.prototype);_c.isPureReactComponent=!0;var ph=Array.isArray,Gp=Object.prototype.hasOwnProperty,vc={current:null},Kp={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gp.call(e,r)&&!Kp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ns,type:t,key:s,ref:o,props:i,_owner:vc.current}}function Xy(t,e){return{$$typeof:Ns,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ns}function Zy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mh=/\/+/g;function aa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zy(""+t.key):e.toString(36)}function vo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ns:case Wy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+aa(o,0):r,ph(i)?(n="",t!=null&&(n=t.replace(mh,"$&/")+"/"),vo(i,e,n,"",function(u){return u})):i!=null&&(yc(i)&&(i=Xy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ph(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+aa(s,l);o+=vo(s,e,n,a,i)}else if(a=Jy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+aa(s,l++),o+=vo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ys(t,e,n){if(t==null)return t;var r=[],i=0;return vo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function e0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},yo={transition:null},t0={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:yo,ReactCurrentOwner:vc};B.Children={map:Ys,forEach:function(t,e,n){Ys(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ys(t,function(){e++}),e},toArray:function(t){return Ys(t,function(e){return e})||[]},only:function(t){if(!yc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=li;B.Fragment=$y;B.Profiler=Vy;B.PureComponent=gc;B.StrictMode=jy;B.Suspense=qy;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Gp.call(e,a)&&!Kp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ns,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:Gy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Hy,_context:t},t.Consumer=t};B.createElement=qp;B.createFactory=function(t){var e=qp.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:Ky,render:t}};B.isValidElement=yc;B.lazy=function(t){return{$$typeof:Yy,_payload:{_status:-1,_result:t},_init:e0}};B.memo=function(t,e){return{$$typeof:Qy,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=yo.transition;yo.transition={};try{t()}finally{yo.transition=e}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(t,e){return ze.current.useCallback(t,e)};B.useContext=function(t){return ze.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};B.useEffect=function(t,e){return ze.current.useEffect(t,e)};B.useId=function(){return ze.current.useId()};B.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return ze.current.useMemo(t,e)};B.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};B.useRef=function(t){return ze.current.useRef(t)};B.useState=function(t){return ze.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return ze.current.useTransition()};B.version="18.2.0";Wp.exports=B;var w=Wp.exports;const n0=zp(w),Ja=By({__proto__:null,default:n0},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=w,i0=Symbol.for("react.element"),s0=Symbol.for("react.fragment"),o0=Object.prototype.hasOwnProperty,l0=r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a0={key:!0,ref:!0,__self:!0,__source:!0};function Qp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)o0.call(e,r)&&!a0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:i0,type:t,key:s,ref:o,props:i,_owner:l0.current}}Rl.Fragment=s0;Rl.jsx=Qp;Rl.jsxs=Qp;Bp.exports=Rl;var Yp=Bp.exports;const m=Yp.jsx,N=Yp.jsxs;var Xa={},Jp={exports:{}},rt={},Xp={exports:{}},Zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,b){var M=P.length;P.push(b);e:for(;0<M;){var X=M-1>>>1,ae=P[X];if(0<i(ae,b))P[X]=b,P[M]=ae,M=X;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var b=P[0],M=P.pop();if(M!==b){P[0]=M;e:for(var X=0,ae=P.length,bt=ae>>>1;X<bt;){var ht=2*(X+1)-1,on=P[ht],Tt=ht+1,wr=P[Tt];if(0>i(on,M))Tt<ae&&0>i(wr,on)?(P[X]=wr,P[Tt]=M,X=Tt):(P[X]=on,P[ht]=M,X=ht);else if(Tt<ae&&0>i(wr,M))P[X]=wr,P[Tt]=M,X=Tt;else break e}}return b}function i(P,b){var M=P.sortIndex-b.sortIndex;return M!==0?M:P.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,_=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=P)r(u),b.sortIndex=b.expirationTime,e(a,b);else break;b=n(u)}}function E(P){if(v=!1,g(P),!y)if(n(a)!==null)y=!0,sn(C);else{var b=n(u);b!==null&&$n(E,b.startTime-P)}}function C(P,b){y=!1,v&&(v=!1,p(x),x=-1),_=!0;var M=h;try{for(g(b),d=n(a);d!==null&&(!(d.expirationTime>b)||P&&!ve());){var X=d.callback;if(typeof X=="function"){d.callback=null,h=d.priorityLevel;var ae=X(d.expirationTime<=b);b=t.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(a)&&r(a),g(b)}else r(a);d=n(a)}if(d!==null)var bt=!0;else{var ht=n(u);ht!==null&&$n(E,ht.startTime-b),bt=!1}return bt}finally{d=null,h=M,_=!1}}var T=!1,R=null,x=-1,j=5,O=-1;function ve(){return!(t.unstable_now()-O<j)}function W(){if(R!==null){var P=t.unstable_now();O=P;var b=!0;try{b=R(!0,P)}finally{b?Q():(T=!1,R=null)}}else T=!1}var Q;if(typeof f=="function")Q=function(){f(W)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,_i=dt.port2;dt.port1.onmessage=W,Q=function(){_i.postMessage(null)}}else Q=function(){S(W,0)};function sn(P){R=P,T||(T=!0,Q())}function $n(P,b){x=S(function(){P(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||_||(y=!0,sn(C))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var M=h;h=b;try{return P()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,b){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=h;h=P;try{return b()}finally{h=M}},t.unstable_scheduleCallback=function(P,b,M){var X=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?X+M:X):M=X,P){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=M+ae,P={id:c++,callback:b,priorityLevel:P,startTime:M,expirationTime:ae,sortIndex:-1},M>X?(P.sortIndex=M,e(u,P),n(a)===null&&P===n(u)&&(v?(p(x),x=-1):v=!0,$n(E,M-X))):(P.sortIndex=ae,e(a,P),y||_||(y=!0,sn(C))),P},t.unstable_shouldYield=ve,t.unstable_wrapCallback=function(P){var b=h;return function(){var M=h;h=b;try{return P.apply(this,arguments)}finally{h=M}}}})(Zp);Xp.exports=Zp;var u0=Xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em=w,nt=u0;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tm=new Set,Yi={};function mr(t,e){Qr(t,e),Qr(t+"Capture",e)}function Qr(t,e){for(Yi[t]=e,t=0;t<e.length;t++)tm.add(e[t])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Za=Object.prototype.hasOwnProperty,c0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gh={},_h={};function d0(t){return Za.call(_h,t)?!0:Za.call(gh,t)?!1:c0.test(t)?_h[t]=!0:(gh[t]=!0,!1)}function h0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function f0(t,e,n,r){if(e===null||typeof e>"u"||h0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Re[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Re[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Re[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Re[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Re[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Re[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Re[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Re[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Re[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var wc=/[\-:]([a-z])/g;function Ec(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wc,Ec);Re[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wc,Ec);Re[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wc,Ec);Re[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Re[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Re[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sc(t,e,n,r){var i=Re.hasOwnProperty(e)?Re[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(f0(e,n,i,r)&&(n=null),r||i===null?d0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tn=em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),eu=Symbol.for("react.profiler"),nm=Symbol.for("react.provider"),rm=Symbol.for("react.context"),Ic=Symbol.for("react.forward_ref"),tu=Symbol.for("react.suspense"),nu=Symbol.for("react.suspense_list"),kc=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),im=Symbol.for("react.offscreen"),vh=Symbol.iterator;function vi(t){return t===null||typeof t!="object"?null:(t=vh&&t[vh]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,ua;function xi(t){if(ua===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ua=e&&e[1]||""}return`
`+ua+t}var ca=!1;function da(t,e){if(!t||ca)return"";ca=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ca=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xi(t):""}function p0(t){switch(t.tag){case 5:return xi(t.type);case 16:return xi("Lazy");case 13:return xi("Suspense");case 19:return xi("SuspenseList");case 0:case 2:case 15:return t=da(t.type,!1),t;case 11:return t=da(t.type.render,!1),t;case 1:return t=da(t.type,!0),t;default:return""}}function ru(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ir:return"Fragment";case Cr:return"Portal";case eu:return"Profiler";case Cc:return"StrictMode";case tu:return"Suspense";case nu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rm:return(t.displayName||"Context")+".Consumer";case nm:return(t._context.displayName||"Context")+".Provider";case Ic:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kc:return e=t.displayName||null,e!==null?e:ru(t.type)||"Memo";case un:e=t._payload,t=t._init;try{return ru(t(e))}catch{}}return null}function m0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ru(e);case 8:return e===Cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function g0(t){var e=sm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xs(t){t._valueTracker||(t._valueTracker=g0(t))}function om(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=sm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Do(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function iu(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lm(t,e){e=e.checked,e!=null&&Sc(t,"checked",e,!1)}function su(t,e){lm(t,e);var n=Dn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ou(t,e.type,n):e.hasOwnProperty("defaultValue")&&ou(t,e.type,Dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ou(t,e,n){(e!=="number"||Do(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ai=Array.isArray;function Fr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Ai(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dn(n)}}function am(t,e){var n=Dn(e.value),r=Dn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function um(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?um(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zs,cm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zs=Zs||document.createElement("div"),Zs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ji(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_0=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(t){_0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mi[e]=Mi[t]})});function dm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mi.hasOwnProperty(t)&&Mi[t]?(""+e).trim():e+"px"}function hm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var v0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uu(t,e){if(e){if(v0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function cu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var du=null;function Tc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hu=null,Ur=null,zr=null;function Ch(t){if(t=xs(t)){if(typeof hu!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Ll(e),hu(t.stateNode,t.type,e))}}function fm(t){Ur?zr?zr.push(t):zr=[t]:Ur=t}function pm(){if(Ur){var t=Ur,e=zr;if(zr=Ur=null,Ch(t),e)for(t=0;t<e.length;t++)Ch(e[t])}}function mm(t,e){return t(e)}function gm(){}var ha=!1;function _m(t,e,n){if(ha)return t(e,n);ha=!0;try{return mm(t,e,n)}finally{ha=!1,(Ur!==null||zr!==null)&&(gm(),pm())}}function Xi(t,e){var n=t.stateNode;if(n===null)return null;var r=Ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var fu=!1;if(qt)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){fu=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{fu=!1}function y0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Fi=!1,bo=null,Mo=!1,pu=null,w0={onError:function(t){Fi=!0,bo=t}};function E0(t,e,n,r,i,s,o,l,a){Fi=!1,bo=null,y0.apply(w0,arguments)}function S0(t,e,n,r,i,s,o,l,a){if(E0.apply(this,arguments),Fi){if(Fi){var u=bo;Fi=!1,bo=null}else throw Error(I(198));Mo||(Mo=!0,pu=u)}}function gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ih(t){if(gr(t)!==t)throw Error(I(188))}function C0(t){var e=t.alternate;if(!e){if(e=gr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ih(i),t;if(s===r)return Ih(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function ym(t){return t=C0(t),t!==null?wm(t):null}function wm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wm(t);if(e!==null)return e;t=t.sibling}return null}var Em=nt.unstable_scheduleCallback,kh=nt.unstable_cancelCallback,I0=nt.unstable_shouldYield,k0=nt.unstable_requestPaint,he=nt.unstable_now,T0=nt.unstable_getCurrentPriorityLevel,Nc=nt.unstable_ImmediatePriority,Sm=nt.unstable_UserBlockingPriority,Fo=nt.unstable_NormalPriority,N0=nt.unstable_LowPriority,Cm=nt.unstable_IdlePriority,Pl=null,At=null;function R0(t){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:A0,P0=Math.log,x0=Math.LN2;function A0(t){return t>>>=0,t===0?32:31-(P0(t)/x0|0)|0}var eo=64,to=4194304;function Oi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Oi(l):(s&=o,s!==0&&(r=Oi(s)))}else o=n&~i,o!==0?r=Oi(o):s!==0&&(r=Oi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wt(e),i=1<<n,r|=t[n],e&=~i;return r}function O0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=O0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function mu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Im(){var t=eo;return eo<<=1,!(eo&4194240)&&(eo=64),t}function fa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=n}function D0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Rc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function km(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tm,Pc,Nm,Rm,Pm,gu=!1,no=[],En=null,Sn=null,Cn=null,Zi=new Map,es=new Map,dn=[],b0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(t,e){switch(t){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Zi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":es.delete(e.pointerId)}}function wi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xs(e),e!==null&&Pc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function M0(t,e,n,r,i){switch(e){case"focusin":return En=wi(En,t,e,n,r,i),!0;case"dragenter":return Sn=wi(Sn,t,e,n,r,i),!0;case"mouseover":return Cn=wi(Cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zi.set(s,wi(Zi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,es.set(s,wi(es.get(s)||null,t,e,n,r,i)),!0}return!1}function xm(t){var e=Kn(t.target);if(e!==null){var n=gr(e);if(n!==null){if(e=n.tag,e===13){if(e=vm(n),e!==null){t.blockedOn=e,Pm(t.priority,function(){Nm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_u(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);du=r,n.target.dispatchEvent(r),du=null}else return e=xs(n),e!==null&&Pc(e),t.blockedOn=n,!1;e.shift()}return!0}function Nh(t,e,n){wo(t)&&n.delete(e)}function F0(){gu=!1,En!==null&&wo(En)&&(En=null),Sn!==null&&wo(Sn)&&(Sn=null),Cn!==null&&wo(Cn)&&(Cn=null),Zi.forEach(Nh),es.forEach(Nh)}function Ei(t,e){t.blockedOn===e&&(t.blockedOn=null,gu||(gu=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,F0)))}function ts(t){function e(i){return Ei(i,t)}if(0<no.length){Ei(no[0],t);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===t&&(r.blockedOn=null)}}for(En!==null&&Ei(En,t),Sn!==null&&Ei(Sn,t),Cn!==null&&Ei(Cn,t),Zi.forEach(e),es.forEach(e),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)xm(n),n.blockedOn===null&&dn.shift()}var Br=tn.ReactCurrentBatchConfig,zo=!0;function U0(t,e,n,r){var i=q,s=Br.transition;Br.transition=null;try{q=1,xc(t,e,n,r)}finally{q=i,Br.transition=s}}function z0(t,e,n,r){var i=q,s=Br.transition;Br.transition=null;try{q=4,xc(t,e,n,r)}finally{q=i,Br.transition=s}}function xc(t,e,n,r){if(zo){var i=_u(t,e,n,r);if(i===null)Ca(t,e,r,Bo,n),Th(t,r);else if(M0(i,t,e,n,r))r.stopPropagation();else if(Th(t,r),e&4&&-1<b0.indexOf(t)){for(;i!==null;){var s=xs(i);if(s!==null&&Tm(s),s=_u(t,e,n,r),s===null&&Ca(t,e,r,Bo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ca(t,e,r,null,n)}}var Bo=null;function _u(t,e,n,r){if(Bo=null,t=Tc(r),t=Kn(t),t!==null)if(e=gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bo=t,null}function Am(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(T0()){case Nc:return 1;case Sm:return 4;case Fo:case N0:return 16;case Cm:return 536870912;default:return 16}default:return 16}}var _n=null,Ac=null,Eo=null;function Om(){if(Eo)return Eo;var t,e=Ac,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Eo=i.slice(t,1<r?1-r:void 0)}function So(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Rh(){return!1}function it(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ro:Rh,this.isPropagationStopped=Rh,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),e}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oc=it(ai),Ps=le({},ai,{view:0,detail:0}),B0=it(Ps),pa,ma,Si,xl=le({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Si&&(Si&&t.type==="mousemove"?(pa=t.screenX-Si.screenX,ma=t.screenY-Si.screenY):ma=pa=0,Si=t),pa)},movementY:function(t){return"movementY"in t?t.movementY:ma}}),Ph=it(xl),W0=le({},xl,{dataTransfer:0}),$0=it(W0),j0=le({},Ps,{relatedTarget:0}),ga=it(j0),V0=le({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=it(V0),G0=le({},ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K0=it(G0),q0=le({},ai,{data:0}),xh=it(q0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=J0[t])?!!e[t]:!1}function Lc(){return X0}var Z0=le({},Ps,{key:function(t){if(t.key){var e=Q0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=So(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(t){return t.type==="keypress"?So(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?So(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ew=it(Z0),tw=le({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=it(tw),nw=le({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),rw=it(nw),iw=le({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),sw=it(iw),ow=le({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lw=it(ow),aw=[9,13,27,32],Dc=qt&&"CompositionEvent"in window,Ui=null;qt&&"documentMode"in document&&(Ui=document.documentMode);var uw=qt&&"TextEvent"in window&&!Ui,Lm=qt&&(!Dc||Ui&&8<Ui&&11>=Ui),Oh=String.fromCharCode(32),Lh=!1;function Dm(t,e){switch(t){case"keyup":return aw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kr=!1;function cw(t,e){switch(t){case"compositionend":return bm(e);case"keypress":return e.which!==32?null:(Lh=!0,Oh);case"textInput":return t=e.data,t===Oh&&Lh?null:t;default:return null}}function dw(t,e){if(kr)return t==="compositionend"||!Dc&&Dm(t,e)?(t=Om(),Eo=Ac=_n=null,kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lm&&e.locale!=="ko"?null:e.data;default:return null}}var hw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hw[t.type]:e==="textarea"}function Mm(t,e,n,r){fm(r),e=Wo(e,"onChange"),0<e.length&&(n=new Oc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zi=null,ns=null;function fw(t){Km(t,0)}function Al(t){var e=Rr(t);if(om(e))return t}function pw(t,e){if(t==="change")return e}var Fm=!1;if(qt){var _a;if(qt){var va="oninput"in document;if(!va){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),va=typeof bh.oninput=="function"}_a=va}else _a=!1;Fm=_a&&(!document.documentMode||9<document.documentMode)}function Mh(){zi&&(zi.detachEvent("onpropertychange",Um),ns=zi=null)}function Um(t){if(t.propertyName==="value"&&Al(ns)){var e=[];Mm(e,ns,t,Tc(t)),_m(fw,e)}}function mw(t,e,n){t==="focusin"?(Mh(),zi=e,ns=n,zi.attachEvent("onpropertychange",Um)):t==="focusout"&&Mh()}function gw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(ns)}function _w(t,e){if(t==="click")return Al(e)}function vw(t,e){if(t==="input"||t==="change")return Al(e)}function yw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var It=typeof Object.is=="function"?Object.is:yw;function rs(t,e){if(It(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Za.call(e,i)||!It(t[i],e[i]))return!1}return!0}function Fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uh(t,e){var n=Fh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fh(n)}}function zm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bm(){for(var t=window,e=Do();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Do(t.document)}return e}function bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ww(t){var e=Bm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zm(n.ownerDocument.documentElement,n)){if(r!==null&&bc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Uh(n,s);var o=Uh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ew=qt&&"documentMode"in document&&11>=document.documentMode,Tr=null,vu=null,Bi=null,yu=!1;function zh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yu||Tr==null||Tr!==Do(r)||(r=Tr,"selectionStart"in r&&bc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bi&&rs(Bi,r)||(Bi=r,r=Wo(vu,"onSelect"),0<r.length&&(e=new Oc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Tr)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Nr={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},ya={},Wm={};qt&&(Wm=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Ol(t){if(ya[t])return ya[t];if(!Nr[t])return t;var e=Nr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wm)return ya[t]=e[n];return t}var $m=Ol("animationend"),jm=Ol("animationiteration"),Vm=Ol("animationstart"),Hm=Ol("transitionend"),Gm=new Map,Bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(t,e){Gm.set(t,e),mr(e,[t])}for(var wa=0;wa<Bh.length;wa++){var Ea=Bh[wa],Sw=Ea.toLowerCase(),Cw=Ea[0].toUpperCase()+Ea.slice(1);Un(Sw,"on"+Cw)}Un($m,"onAnimationEnd");Un(jm,"onAnimationIteration");Un(Vm,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(Hm,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function Wh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,S0(r,e,void 0,t),t.currentTarget=null}function Km(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Wh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Wh(i,l,u),s=a}}}if(Mo)throw t=pu,Mo=!1,pu=null,t}function te(t,e){var n=e[Iu];n===void 0&&(n=e[Iu]=new Set);var r=t+"__bubble";n.has(r)||(qm(e,t,2,!1),n.add(r))}function Sa(t,e,n){var r=0;e&&(r|=4),qm(n,t,r,e)}var so="_reactListening"+Math.random().toString(36).slice(2);function is(t){if(!t[so]){t[so]=!0,tm.forEach(function(n){n!=="selectionchange"&&(Iw.has(n)||Sa(n,!1,t),Sa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[so]||(e[so]=!0,Sa("selectionchange",!1,e))}}function qm(t,e,n,r){switch(Am(e)){case 1:var i=U0;break;case 4:i=z0;break;default:i=xc}n=i.bind(null,e,n,t),i=void 0,!fu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ca(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}_m(function(){var u=s,c=Tc(n),d=[];e:{var h=Gm.get(t);if(h!==void 0){var _=Oc,y=t;switch(t){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":_=ew;break;case"focusin":y="focus",_=ga;break;case"focusout":y="blur",_=ga;break;case"beforeblur":case"afterblur":_=ga;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=rw;break;case $m:case jm:case Vm:_=H0;break;case Hm:_=sw;break;case"scroll":_=B0;break;case"wheel":_=lw;break;case"copy":case"cut":case"paste":_=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ah}var v=(e&4)!==0,S=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=Xi(f,p),E!=null&&v.push(ss(f,E,g)))),S)break;f=f.return}0<v.length&&(h=new _(h,y,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==du&&(y=n.relatedTarget||n.fromElement)&&(Kn(y)||y[Qt]))break e;if((_||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,_?(y=n.relatedTarget||n.toElement,_=u,y=y?Kn(y):null,y!==null&&(S=gr(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=u),_!==y)){if(v=Ph,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ah,E="onPointerLeave",p="onPointerEnter",f="pointer"),S=_==null?h:Rr(_),g=y==null?h:Rr(y),h=new v(E,f+"leave",_,n,c),h.target=S,h.relatedTarget=g,E=null,Kn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=g,v.relatedTarget=S,E=v),S=E,_&&y)t:{for(v=_,p=y,f=0,g=v;g;g=Er(g))f++;for(g=0,E=p;E;E=Er(E))g++;for(;0<f-g;)v=Er(v),f--;for(;0<g-f;)p=Er(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Er(v),p=Er(p)}v=null}else v=null;_!==null&&$h(d,h,_,v,!1),y!==null&&S!==null&&$h(d,S,y,v,!0)}}e:{if(h=u?Rr(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var C=pw;else if(Dh(h))if(Fm)C=vw;else{C=gw;var T=mw}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=_w);if(C&&(C=C(t,u))){Mm(d,C,n,c);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ou(h,"number",h.value)}switch(T=u?Rr(u):window,t){case"focusin":(Dh(T)||T.contentEditable==="true")&&(Tr=T,vu=u,Bi=null);break;case"focusout":Bi=vu=Tr=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,zh(d,n,c);break;case"selectionchange":if(Ew)break;case"keydown":case"keyup":zh(d,n,c)}var R;if(Dc)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else kr?Dm(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Lm&&n.locale!=="ko"&&(kr||x!=="onCompositionStart"?x==="onCompositionEnd"&&kr&&(R=Om()):(_n=c,Ac="value"in _n?_n.value:_n.textContent,kr=!0)),T=Wo(u,x),0<T.length&&(x=new xh(x,t,null,n,c),d.push({event:x,listeners:T}),R?x.data=R:(R=bm(n),R!==null&&(x.data=R)))),(R=uw?cw(t,n):dw(t,n))&&(u=Wo(u,"onBeforeInput"),0<u.length&&(c=new xh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}Km(d,e)})}function ss(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xi(t,n),s!=null&&r.unshift(ss(t,s,i)),s=Xi(t,e),s!=null&&r.push(ss(t,s,i))),t=t.return}return r}function Er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $h(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Xi(n,s),a!=null&&o.unshift(ss(n,a,l))):i||(a=Xi(n,s),a!=null&&o.push(ss(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kw=/\r\n?/g,Tw=/\u0000|\uFFFD/g;function jh(t){return(typeof t=="string"?t:""+t).replace(kw,`
`).replace(Tw,"")}function oo(t,e,n){if(e=jh(e),jh(t)!==e&&n)throw Error(I(425))}function $o(){}var wu=null,Eu=null;function Su(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,Nw=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,Rw=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(t){return Vh.resolve(null).then(t).catch(Pw)}:Cu;function Pw(t){setTimeout(function(){throw t})}function Ia(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ts(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ts(e)}function In(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ui=Math.random().toString(36).slice(2),xt="__reactFiber$"+ui,os="__reactProps$"+ui,Qt="__reactContainer$"+ui,Iu="__reactEvents$"+ui,xw="__reactListeners$"+ui,Aw="__reactHandles$"+ui;function Kn(t){var e=t[xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qt]||n[xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hh(t);t!==null;){if(n=t[xt])return n;t=Hh(t)}return e}t=n,n=t.parentNode}return null}function xs(t){return t=t[xt]||t[Qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Ll(t){return t[os]||null}var ku=[],Pr=-1;function zn(t){return{current:t}}function re(t){0>Pr||(t.current=ku[Pr],ku[Pr]=null,Pr--)}function ee(t,e){Pr++,ku[Pr]=t.current,t.current=e}var bn={},De=zn(bn),Ke=zn(!1),nr=bn;function Yr(t,e){var n=t.type.contextTypes;if(!n)return bn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qe(t){return t=t.childContextTypes,t!=null}function jo(){re(Ke),re(De)}function Gh(t,e,n){if(De.current!==bn)throw Error(I(168));ee(De,e),ee(Ke,n)}function Qm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,m0(t)||"Unknown",i));return le({},n,r)}function Vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||bn,nr=De.current,ee(De,t),ee(Ke,Ke.current),!0}function Kh(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Qm(t,e,nr),r.__reactInternalMemoizedMergedChildContext=t,re(Ke),re(De),ee(De,t)):re(Ke),ee(Ke,n)}var Bt=null,Dl=!1,ka=!1;function Ym(t){Bt===null?Bt=[t]:Bt.push(t)}function Ow(t){Dl=!0,Ym(t)}function Bn(){if(!ka&&Bt!==null){ka=!0;var t=0,e=q;try{var n=Bt;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bt=null,Dl=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(t+1)),Em(Nc,Bn),i}finally{q=e,ka=!1}}return null}var xr=[],Ar=0,Ho=null,Go=0,st=[],ot=0,rr=null,Wt=1,$t="";function jn(t,e){xr[Ar++]=Go,xr[Ar++]=Ho,Ho=t,Go=e}function Jm(t,e,n){st[ot++]=Wt,st[ot++]=$t,st[ot++]=rr,rr=t;var r=Wt;t=$t;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var s=32-wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wt=1<<32-wt(e)+i|n<<i|r,$t=s+t}else Wt=1<<s|n<<i|r,$t=t}function Mc(t){t.return!==null&&(jn(t,1),Jm(t,1,0))}function Fc(t){for(;t===Ho;)Ho=xr[--Ar],xr[Ar]=null,Go=xr[--Ar],xr[Ar]=null;for(;t===rr;)rr=st[--ot],st[ot]=null,$t=st[--ot],st[ot]=null,Wt=st[--ot],st[ot]=null}var tt=null,et=null,ie=!1,gt=null;function Xm(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tt=t,et=In(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rr!==null?{id:Wt,overflow:$t}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tt=t,et=null,!0):!1;default:return!1}}function Tu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nu(t){if(ie){var e=et;if(e){var n=e;if(!qh(t,e)){if(Tu(t))throw Error(I(418));e=In(n.nextSibling);var r=tt;e&&qh(t,e)?Xm(r,n):(t.flags=t.flags&-4097|2,ie=!1,tt=t)}}else{if(Tu(t))throw Error(I(418));t.flags=t.flags&-4097|2,ie=!1,tt=t}}}function Qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tt=t}function lo(t){if(t!==tt)return!1;if(!ie)return Qh(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Su(t.type,t.memoizedProps)),e&&(e=et)){if(Tu(t))throw Zm(),Error(I(418));for(;e;)Xm(t,e),e=In(e.nextSibling)}if(Qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){et=In(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}et=null}}else et=tt?In(t.stateNode.nextSibling):null;return!0}function Zm(){for(var t=et;t;)t=In(t.nextSibling)}function Jr(){et=tt=null,ie=!1}function Uc(t){gt===null?gt=[t]:gt.push(t)}var Lw=tn.ReactCurrentBatchConfig;function pt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ko=zn(null),qo=null,Or=null,zc=null;function Bc(){zc=Or=qo=null}function Wc(t){var e=Ko.current;re(Ko),t._currentValue=e}function Ru(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wr(t,e){qo=t,zc=Or=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ve=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if(zc!==t)if(t={context:t,memoizedValue:e,next:null},Or===null){if(qo===null)throw Error(I(308));Or=t,qo.dependencies={lanes:0,firstContext:t}}else Or=Or.next=t;return e}var qn=null;function $c(t){qn===null?qn=[t]:qn.push(t)}function eg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$c(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yt(t,r)}function Yt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cn=!1;function jc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yt(t,n)}return i=r.interleaved,i===null?(e.next=e,$c(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yt(t,n)}function Co(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rc(t,n)}}function Yh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qo(t,e,n,r){var i=t.updateQueue;cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,v=l;switch(h=e,_=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(_,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(_,d,h):y,h==null)break e;d=le({},d,h);break e;case 2:cn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=_,a=d):c=c.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);sr|=o,t.lanes=o,t.memoizedState=d}}function Jh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var ng=new em.Component().refs;function Pu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bl={isMounted:function(t){return(t=t._reactInternals)?gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=Nn(t),s=Gt(r,i);s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(Et(e,t,i,r),Co(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=Nn(t),s=Gt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(Et(e,t,i,r),Co(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ue(),r=Nn(t),i=Gt(n,r);i.tag=2,e!=null&&(i.callback=e),e=kn(t,i,r),e!==null&&(Et(e,t,r,n),Co(e,t,r))}};function Xh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!rs(n,r)||!rs(i,s):!0}function rg(t,e,n){var r=!1,i=bn,s=e.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=qe(e)?nr:De.current,r=e.contextTypes,s=(r=r!=null)?Yr(t,i):bn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bl.enqueueReplaceState(e,e.state,null)}function xu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ng,jc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=qe(e)?nr:De.current,i.context=Yr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bl.enqueueReplaceState(i,i.state,null),Qo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ci(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===ng&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function ao(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ef(t){var e=t._init;return e(t._payload)}function ig(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Rn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,E){return f===null||f.tag!==6?(f=Oa(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,E){var C=g.type;return C===Ir?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===un&&ef(C)===f.type)?(E=i(f,g.props),E.ref=Ci(p,f,g),E.return=p,E):(E=Po(g.type,g.key,g.props,null,p.mode,E),E.ref=Ci(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=La(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,C){return f===null||f.tag!==7?(f=Zn(g,p.mode,E,C),f.return=p,f):(f=i(f,g),f.return=p,f)}function d(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Oa(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Js:return g=Po(f.type,f.key,f.props,null,p.mode,g),g.ref=Ci(p,null,f),g.return=p,g;case Cr:return f=La(f,p.mode,g),f.return=p,f;case un:var E=f._init;return d(p,E(f._payload),g)}if(Ai(f)||vi(f))return f=Zn(f,p.mode,g,null),f.return=p,f;ao(p,f)}return null}function h(p,f,g,E){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Js:return g.key===C?a(p,f,g,E):null;case Cr:return g.key===C?u(p,f,g,E):null;case un:return C=g._init,h(p,f,C(g._payload),E)}if(Ai(g)||vi(g))return C!==null?null:c(p,f,g,E,null);ao(p,g)}return null}function _(p,f,g,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,l(f,p,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Js:return p=p.get(E.key===null?g:E.key)||null,a(f,p,E,C);case Cr:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,C);case un:var T=E._init;return _(p,f,g,T(E._payload),C)}if(Ai(E)||vi(E))return p=p.get(g)||null,c(f,p,E,C,null);ao(f,E)}return null}function y(p,f,g,E){for(var C=null,T=null,R=f,x=f=0,j=null;R!==null&&x<g.length;x++){R.index>x?(j=R,R=null):j=R.sibling;var O=h(p,R,g[x],E);if(O===null){R===null&&(R=j);break}t&&R&&O.alternate===null&&e(p,R),f=s(O,f,x),T===null?C=O:T.sibling=O,T=O,R=j}if(x===g.length)return n(p,R),ie&&jn(p,x),C;if(R===null){for(;x<g.length;x++)R=d(p,g[x],E),R!==null&&(f=s(R,f,x),T===null?C=R:T.sibling=R,T=R);return ie&&jn(p,x),C}for(R=r(p,R);x<g.length;x++)j=_(R,p,x,g[x],E),j!==null&&(t&&j.alternate!==null&&R.delete(j.key===null?x:j.key),f=s(j,f,x),T===null?C=j:T.sibling=j,T=j);return t&&R.forEach(function(ve){return e(p,ve)}),ie&&jn(p,x),C}function v(p,f,g,E){var C=vi(g);if(typeof C!="function")throw Error(I(150));if(g=C.call(g),g==null)throw Error(I(151));for(var T=C=null,R=f,x=f=0,j=null,O=g.next();R!==null&&!O.done;x++,O=g.next()){R.index>x?(j=R,R=null):j=R.sibling;var ve=h(p,R,O.value,E);if(ve===null){R===null&&(R=j);break}t&&R&&ve.alternate===null&&e(p,R),f=s(ve,f,x),T===null?C=ve:T.sibling=ve,T=ve,R=j}if(O.done)return n(p,R),ie&&jn(p,x),C;if(R===null){for(;!O.done;x++,O=g.next())O=d(p,O.value,E),O!==null&&(f=s(O,f,x),T===null?C=O:T.sibling=O,T=O);return ie&&jn(p,x),C}for(R=r(p,R);!O.done;x++,O=g.next())O=_(R,p,x,O.value,E),O!==null&&(t&&O.alternate!==null&&R.delete(O.key===null?x:O.key),f=s(O,f,x),T===null?C=O:T.sibling=O,T=O);return t&&R.forEach(function(W){return e(p,W)}),ie&&jn(p,x),C}function S(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===Ir&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Js:e:{for(var C=g.key,T=f;T!==null;){if(T.key===C){if(C=g.type,C===Ir){if(T.tag===7){n(p,T.sibling),f=i(T,g.props.children),f.return=p,p=f;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===un&&ef(C)===T.type){n(p,T.sibling),f=i(T,g.props),f.ref=Ci(p,T,g),f.return=p,p=f;break e}n(p,T);break}else e(p,T);T=T.sibling}g.type===Ir?(f=Zn(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=Po(g.type,g.key,g.props,null,p.mode,E),E.ref=Ci(p,f,g),E.return=p,p=E)}return o(p);case Cr:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=La(g,p.mode,E),f.return=p,p=f}return o(p);case un:return T=g._init,S(p,f,T(g._payload),E)}if(Ai(g))return y(p,f,g,E);if(vi(g))return v(p,f,g,E);ao(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Oa(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return S}var Xr=ig(!0),sg=ig(!1),As={},Ot=zn(As),ls=zn(As),as=zn(As);function Qn(t){if(t===As)throw Error(I(174));return t}function Vc(t,e){switch(ee(as,e),ee(ls,t),ee(Ot,As),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=au(e,t)}re(Ot),ee(Ot,e)}function Zr(){re(Ot),re(ls),re(as)}function og(t){Qn(as.current);var e=Qn(Ot.current),n=au(e,t.type);e!==n&&(ee(ls,t),ee(Ot,n))}function Hc(t){ls.current===t&&(re(Ot),re(ls))}var se=zn(0);function Yo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ta=[];function Gc(){for(var t=0;t<Ta.length;t++)Ta[t]._workInProgressVersionPrimary=null;Ta.length=0}var Io=tn.ReactCurrentDispatcher,Na=tn.ReactCurrentBatchConfig,ir=0,oe=null,pe=null,Ee=null,Jo=!1,Wi=!1,us=0,Dw=0;function Pe(){throw Error(I(321))}function Kc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!It(t[n],e[n]))return!1;return!0}function qc(t,e,n,r,i,s){if(ir=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Io.current=t===null||t.memoizedState===null?Uw:zw,t=n(r,i),Wi){s=0;do{if(Wi=!1,us=0,25<=s)throw Error(I(301));s+=1,Ee=pe=null,e.updateQueue=null,Io.current=Bw,t=n(r,i)}while(Wi)}if(Io.current=Xo,e=pe!==null&&pe.next!==null,ir=0,Ee=pe=oe=null,Jo=!1,e)throw Error(I(300));return t}function Qc(){var t=us!==0;return us=0,t}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?oe.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function ct(){if(pe===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=pe.next;var e=Ee===null?oe.memoizedState:Ee.next;if(e!==null)Ee=e,pe=t;else{if(t===null)throw Error(I(310));pe=t,t={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ee===null?oe.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function cs(t,e){return typeof e=="function"?e(t):e}function Ra(t){var e=ct(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((ir&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,oe.lanes|=c,sr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,It(r,e.memoizedState)||(Ve=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,sr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pa(t){var e=ct(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);It(s,e.memoizedState)||(Ve=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function lg(){}function ag(t,e){var n=oe,r=ct(),i=e(),s=!It(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,Yc(dg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,ds(9,cg.bind(null,n,r,i,e),void 0,null),Ie===null)throw Error(I(349));ir&30||ug(n,e,i)}return i}function ug(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cg(t,e,n,r){e.value=n,e.getSnapshot=r,hg(e)&&fg(t)}function dg(t,e,n){return n(function(){hg(e)&&fg(t)})}function hg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!It(t,n)}catch{return!0}}function fg(t){var e=Yt(t,1);e!==null&&Et(e,t,1,-1)}function tf(t){var e=Pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:t},e.queue=t,t=t.dispatch=Fw.bind(null,oe,t),[e.memoizedState,t]}function ds(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pg(){return ct().memoizedState}function ko(t,e,n,r){var i=Pt();oe.flags|=t,i.memoizedState=ds(1|e,n,void 0,r===void 0?null:r)}function Ml(t,e,n,r){var i=ct();r=r===void 0?null:r;var s=void 0;if(pe!==null){var o=pe.memoizedState;if(s=o.destroy,r!==null&&Kc(r,o.deps)){i.memoizedState=ds(e,n,s,r);return}}oe.flags|=t,i.memoizedState=ds(1|e,n,s,r)}function nf(t,e){return ko(8390656,8,t,e)}function Yc(t,e){return Ml(2048,8,t,e)}function mg(t,e){return Ml(4,2,t,e)}function gg(t,e){return Ml(4,4,t,e)}function _g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vg(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4,4,_g.bind(null,e,t),n)}function Jc(){}function yg(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wg(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Eg(t,e,n){return ir&21?(It(n,e)||(n=Im(),oe.lanes|=n,sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=n)}function bw(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=Na.transition;Na.transition={};try{t(!1),e()}finally{q=n,Na.transition=r}}function Sg(){return ct().memoizedState}function Mw(t,e,n){var r=Nn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cg(t))Ig(e,n);else if(n=eg(t,e,n,r),n!==null){var i=Ue();Et(n,t,r,i),kg(n,e,r)}}function Fw(t,e,n){var r=Nn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cg(t))Ig(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,It(l,o)){var a=e.interleaved;a===null?(i.next=i,$c(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=eg(t,e,i,r),n!==null&&(i=Ue(),Et(n,t,r,i),kg(n,e,r))}}function Cg(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function Ig(t,e){Wi=Jo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rc(t,n)}}var Xo={readContext:ut,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Uw={readContext:ut,useCallback:function(t,e){return Pt().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:nf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ko(4194308,4,_g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return ko(4,2,t,e)},useMemo:function(t,e){var n=Pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Mw.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Pt();return t={current:t},e.memoizedState=t},useState:tf,useDebugValue:Jc,useDeferredValue:function(t){return Pt().memoizedState=t},useTransition:function(){var t=tf(!1),e=t[0];return t=bw.bind(null,t[1]),Pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Pt();if(ie){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Ie===null)throw Error(I(349));ir&30||ug(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,nf(dg.bind(null,r,s,t),[t]),r.flags|=2048,ds(9,cg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pt(),e=Ie.identifierPrefix;if(ie){var n=$t,r=Wt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=us++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zw={readContext:ut,useCallback:yg,useContext:ut,useEffect:Yc,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:wg,useReducer:Ra,useRef:pg,useState:function(){return Ra(cs)},useDebugValue:Jc,useDeferredValue:function(t){var e=ct();return Eg(e,pe.memoizedState,t)},useTransition:function(){var t=Ra(cs)[0],e=ct().memoizedState;return[t,e]},useMutableSource:lg,useSyncExternalStore:ag,useId:Sg,unstable_isNewReconciler:!1},Bw={readContext:ut,useCallback:yg,useContext:ut,useEffect:Yc,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:wg,useReducer:Pa,useRef:pg,useState:function(){return Pa(cs)},useDebugValue:Jc,useDeferredValue:function(t){var e=ct();return pe===null?e.memoizedState=t:Eg(e,pe.memoizedState,t)},useTransition:function(){var t=Pa(cs)[0],e=ct().memoizedState;return[t,e]},useMutableSource:lg,useSyncExternalStore:ag,useId:Sg,unstable_isNewReconciler:!1};function ei(t,e){try{var n="",r=e;do n+=p0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Au(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ww=typeof WeakMap=="function"?WeakMap:Map;function Tg(t,e,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){el||(el=!0,Wu=r),Au(t,e)},n}function Ng(t,e,n){n=Gt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Au(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Au(t,e),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ww;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tE.bind(null,t,e,n),e.then(t,t))}function sf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function of(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gt(-1,1),e.tag=2,kn(n,e,1))),n.lanes|=1),t)}var $w=tn.ReactCurrentOwner,Ve=!1;function Fe(t,e,n,r){e.child=t===null?sg(e,null,n,r):Xr(e,t.child,n,r)}function lf(t,e,n,r,i){n=n.render;var s=e.ref;return Wr(e,i),r=qc(t,e,n,r,s,i),n=Qc(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(ie&&n&&Mc(e),e.flags|=1,Fe(t,e,r,i),e.child)}function af(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Rg(t,e,s,r,i)):(t=Po(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:rs,n(o,r)&&t.ref===e.ref)return Jt(t,e,i)}return e.flags|=1,t=Rn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Rg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(rs(s,r)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,Jt(t,e,i)}return Ou(t,e,n,r,i)}function Pg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Dr,Ze),Ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Dr,Ze),Ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Dr,Ze),Ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(Dr,Ze),Ze|=r;return Fe(t,e,i,n),e.child}function xg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ou(t,e,n,r,i){var s=qe(n)?nr:De.current;return s=Yr(e,s),Wr(e,i),n=qc(t,e,n,r,s,i),r=Qc(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(ie&&r&&Mc(e),e.flags|=1,Fe(t,e,n,i),e.child)}function uf(t,e,n,r,i){if(qe(n)){var s=!0;Vo(e)}else s=!1;if(Wr(e,i),e.stateNode===null)To(t,e),rg(e,n,r),xu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=qe(n)?nr:De.current,u=Yr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Zh(e,o,r,u),cn=!1;var h=e.memoizedState;o.state=h,Qo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Ke.current||cn?(typeof c=="function"&&(Pu(e,n,c,r),a=e.memoizedState),(l=cn||Xh(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:pt(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=qe(n)?nr:De.current,a=Yr(e,a));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Zh(e,o,r,a),cn=!1,h=e.memoizedState,o.state=h,Qo(e,r,o,i);var y=e.memoizedState;l!==d||h!==y||Ke.current||cn?(typeof _=="function"&&(Pu(e,n,_,r),y=e.memoizedState),(u=cn||Xh(e,n,u,r,h,y,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Lu(t,e,n,r,s,i)}function Lu(t,e,n,r,i,s){xg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Kh(e,n,!1),Jt(t,e,s);r=e.stateNode,$w.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xr(e,t.child,null,s),e.child=Xr(e,null,l,s)):Fe(t,e,l,s),e.memoizedState=r.state,i&&Kh(e,n,!0),e.child}function Ag(t){var e=t.stateNode;e.pendingContext?Gh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gh(t,e.context,!1),Vc(t,e.containerInfo)}function cf(t,e,n,r,i){return Jr(),Uc(i),e.flags|=256,Fe(t,e,n,r),e.child}var Du={dehydrated:null,treeContext:null,retryLane:0};function bu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Og(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(se,i&1),t===null)return Nu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zl(o,r,0,null),t=Zn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bu(n),e.memoizedState=Du,t):Xc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Rn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Rn(l,s):(s=Zn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?bu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Du,r}return s=t.child,t=s.sibling,r=Rn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xc(t,e){return e=zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uo(t,e,n,r){return r!==null&&Uc(r),Xr(e,t.child,null,n),t=Xc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xa(Error(I(422))),uo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=zl({mode:"visible",children:r.children},i,0,null),s=Zn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xr(e,t.child,null,o),e.child.memoizedState=bu(o),e.memoizedState=Du,s);if(!(e.mode&1))return uo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(I(419)),r=xa(s,r,void 0),uo(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ve||l){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yt(t,i),Et(r,t,i,-1))}return id(),r=xa(Error(I(421))),uo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,et=In(i.nextSibling),tt=e,ie=!0,gt=null,t!==null&&(st[ot++]=Wt,st[ot++]=$t,st[ot++]=rr,Wt=t.id,$t=t.overflow,rr=e),e=Xc(e,r.children),e.flags|=4096,e)}function df(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ru(t.return,e,n)}function Aa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Lg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Fe(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&df(t,n,e);else if(t.tag===19)df(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Aa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Aa(e,!0,n,null,s);break;case"together":Aa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function To(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Vw(t,e,n){switch(e.tag){case 3:Ag(e),Jr();break;case 5:og(e);break;case 1:qe(e.type)&&Vo(e);break;case 4:Vc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Ko,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?Og(t,e,n):(ee(se,se.current&1),t=Jt(t,e,n),t!==null?t.sibling:null);ee(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Lg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,Pg(t,e,n)}return Jt(t,e,n)}var Dg,Mu,bg,Mg;Dg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mu=function(){};bg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qn(Ot.current);var s=null;switch(n){case"input":i=iu(t,i),r=iu(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=lu(t,i),r=lu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$o)}uu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&te("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Mg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ii(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Hw(t,e,n){var r=e.pendingProps;switch(Fc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return qe(e.type)&&jo(),xe(e),null;case 3:return r=e.stateNode,Zr(),re(Ke),re(De),Gc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(Vu(gt),gt=null))),Mu(t,e),xe(e),null;case 5:Hc(e);var i=Qn(as.current);if(n=e.type,t!==null&&e.stateNode!=null)bg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return xe(e),null}if(t=Qn(Ot.current),lo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xt]=e,r[os]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Li.length;i++)te(Li[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":yh(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":Eh(r,s),te("invalid",r)}uu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&oo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&oo(r.textContent,l,t),i=["children",""+l]):Yi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Xs(r),wh(r,s,!0);break;case"textarea":Xs(r),Sh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$o)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=um(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xt]=e,t[os]=r,Dg(t,e,!1,!1),e.stateNode=t;e:{switch(o=cu(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Li.length;i++)te(Li[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":yh(t,r),i=iu(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",t);break;case"textarea":Eh(t,r),i=lu(t,r),te("invalid",t);break;default:i=r}uu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?hm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&cm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ji(t,a):typeof a=="number"&&Ji(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&te("scroll",t):a!=null&&Sc(t,s,a,o))}switch(n){case"input":Xs(t),wh(t,r,!1);break;case"textarea":Xs(t),Sh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xe(e),null;case 6:if(t&&e.stateNode!=null)Mg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Qn(as.current),Qn(Ot.current),lo(e)){if(r=e.stateNode,n=e.memoizedProps,r[xt]=e,(s=r.nodeValue!==n)&&(t=tt,t!==null))switch(t.tag){case 3:oo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=e,e.stateNode=r}return xe(e),null;case 13:if(re(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&et!==null&&e.mode&1&&!(e.flags&128))Zm(),Jr(),e.flags|=98560,s=!1;else if(s=lo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[xt]=e}else Jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xe(e),s=!1}else gt!==null&&(Vu(gt),gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?ge===0&&(ge=3):id())),e.updateQueue!==null&&(e.flags|=4),xe(e),null);case 4:return Zr(),Mu(t,e),t===null&&is(e.stateNode.containerInfo),xe(e),null;case 10:return Wc(e.type._context),xe(e),null;case 17:return qe(e.type)&&jo(),xe(e),null;case 19:if(re(se),s=e.memoizedState,s===null)return xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ii(s,!1);else{if(ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yo(t),o!==null){for(e.flags|=128,Ii(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>ti&&(e.flags|=128,r=!0,Ii(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ii(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return xe(e),null}else 2*he()-s.renderingStartTime>ti&&n!==1073741824&&(e.flags|=128,r=!0,Ii(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=se.current,ee(se,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return rd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ze&1073741824&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function Gw(t,e){switch(Fc(e),e.tag){case 1:return qe(e.type)&&jo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zr(),re(Ke),re(De),Gc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hc(e),null;case 13:if(re(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(se),null;case 4:return Zr(),null;case 10:return Wc(e.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var co=!1,Oe=!1,Kw=typeof WeakSet=="function"?WeakSet:Set,A=null;function Lr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function Fu(t,e,n){try{n()}catch(r){ce(t,e,r)}}var hf=!1;function qw(t,e){if(wu=zo,t=Bm(),bc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eu={focusedElem:t,selectionRange:n},zo=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:pt(e.type,v),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(E){ce(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return y=hf,hf=!1,y}function $i(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fu(e,n,s)}i=i.next}while(i!==r)}}function Fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Uu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fg(t){var e=t.alternate;e!==null&&(t.alternate=null,Fg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xt],delete e[os],delete e[Iu],delete e[xw],delete e[Aw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ug(t){return t.tag===5||t.tag===3||t.tag===4}function ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$o));else if(r!==4&&(t=t.child,t!==null))for(zu(t,e,n),t=t.sibling;t!==null;)zu(t,e,n),t=t.sibling}function Bu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bu(t,e,n),t=t.sibling;t!==null;)Bu(t,e,n),t=t.sibling}var ke=null,mt=!1;function ln(t,e,n){for(n=n.child;n!==null;)zg(t,e,n),n=n.sibling}function zg(t,e,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:Oe||Lr(n,e);case 6:var r=ke,i=mt;ke=null,ln(t,e,n),ke=r,mt=i,ke!==null&&(mt?(t=ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(mt?(t=ke,n=n.stateNode,t.nodeType===8?Ia(t.parentNode,n):t.nodeType===1&&Ia(t,n),ts(t)):Ia(ke,n.stateNode));break;case 4:r=ke,i=mt,ke=n.stateNode.containerInfo,mt=!0,ln(t,e,n),ke=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fu(n,e,o),i=i.next}while(i!==r)}ln(t,e,n);break;case 1:if(!Oe&&(Lr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ce(n,e,l)}ln(t,e,n);break;case 21:ln(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,ln(t,e,n),Oe=r):ln(t,e,n);break;default:ln(t,e,n)}}function pf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Kw),e.forEach(function(r){var i=rE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,mt=!1;break e;case 3:ke=l.stateNode.containerInfo,mt=!0;break e;case 4:ke=l.stateNode.containerInfo,mt=!0;break e}l=l.return}if(ke===null)throw Error(I(160));zg(s,o,i),ke=null,mt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Bg(e,t),e=e.sibling}function Bg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),Rt(t),r&4){try{$i(3,t,t.return),Fl(3,t)}catch(v){ce(t,t.return,v)}try{$i(5,t,t.return)}catch(v){ce(t,t.return,v)}}break;case 1:ft(e,t),Rt(t),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(ft(e,t),Rt(t),r&512&&n!==null&&Lr(n,n.return),t.flags&32){var i=t.stateNode;try{Ji(i,"")}catch(v){ce(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&lm(i,s),cu(l,o);var u=cu(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?hm(i,d):c==="dangerouslySetInnerHTML"?cm(i,d):c==="children"?Ji(i,d):Sc(i,c,d,u)}switch(l){case"input":su(i,s);break;case"textarea":am(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Fr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fr(i,!!s.multiple,s.defaultValue,!0):Fr(i,!!s.multiple,s.multiple?[]:"",!1))}i[os]=s}catch(v){ce(t,t.return,v)}}break;case 6:if(ft(e,t),Rt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ce(t,t.return,v)}}break;case 3:if(ft(e,t),Rt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ts(e.containerInfo)}catch(v){ce(t,t.return,v)}break;case 4:ft(e,t),Rt(t);break;case 13:ft(e,t),Rt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(td=he())),r&4&&pf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(u=Oe)||c,ft(e,t),Oe=u):ft(e,t),Rt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(A=t,c=t.child;c!==null;){for(d=A=c;A!==null;){switch(h=A,_=h.child,h.tag){case 0:case 11:case 14:case 15:$i(4,h,h.return);break;case 1:Lr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ce(r,n,v)}}break;case 5:Lr(h,h.return);break;case 22:if(h.memoizedState!==null){gf(d);continue}}_!==null?(_.return=h,A=_):gf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=dm("display",o))}catch(v){ce(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ce(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ft(e,t),Rt(t),r&4&&pf(t);break;case 21:break;default:ft(e,t),Rt(t)}}function Rt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ug(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ji(i,""),r.flags&=-33);var s=ff(t);Bu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ff(t);zu(t,l,o);break;default:throw Error(I(161))}}catch(a){ce(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qw(t,e,n){A=t,Wg(t)}function Wg(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||co;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=co;var u=Oe;if(co=o,(Oe=a)&&!u)for(A=i;A!==null;)o=A,a=o.child,o.tag===22&&o.memoizedState!==null?_f(i):a!==null?(a.return=o,A=a):_f(i);for(;s!==null;)A=s,Wg(s),s=s.sibling;A=i,co=l,Oe=u}mf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):mf(t)}}function mf(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||Fl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ts(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Oe||e.flags&512&&Uu(e)}catch(h){ce(e,e.return,h)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function gf(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function _f(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fl(4,e)}catch(a){ce(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ce(e,i,a)}}var s=e.return;try{Uu(e)}catch(a){ce(e,s,a)}break;case 5:var o=e.return;try{Uu(e)}catch(a){ce(e,o,a)}}}catch(a){ce(e,e.return,a)}if(e===t){A=null;break}var l=e.sibling;if(l!==null){l.return=e.return,A=l;break}A=e.return}}var Yw=Math.ceil,Zo=tn.ReactCurrentDispatcher,Zc=tn.ReactCurrentOwner,at=tn.ReactCurrentBatchConfig,$=0,Ie=null,fe=null,Ne=0,Ze=0,Dr=zn(0),ge=0,hs=null,sr=0,Ul=0,ed=0,ji=null,je=null,td=0,ti=1/0,zt=null,el=!1,Wu=null,Tn=null,ho=!1,vn=null,tl=0,Vi=0,$u=null,No=-1,Ro=0;function Ue(){return $&6?he():No!==-1?No:No=he()}function Nn(t){return t.mode&1?$&2&&Ne!==0?Ne&-Ne:Lw.transition!==null?(Ro===0&&(Ro=Im()),Ro):(t=q,t!==0||(t=window.event,t=t===void 0?16:Am(t.type)),t):1}function Et(t,e,n,r){if(50<Vi)throw Vi=0,$u=null,Error(I(185));Rs(t,n,r),(!($&2)||t!==Ie)&&(t===Ie&&(!($&2)&&(Ul|=n),ge===4&&hn(t,Ne)),Qe(t,r),n===1&&$===0&&!(e.mode&1)&&(ti=he()+500,Dl&&Bn()))}function Qe(t,e){var n=t.callbackNode;L0(t,e);var r=Uo(t,t===Ie?Ne:0);if(r===0)n!==null&&kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&kh(n),e===1)t.tag===0?Ow(vf.bind(null,t)):Ym(vf.bind(null,t)),Rw(function(){!($&6)&&Bn()}),n=null;else{switch(km(r)){case 1:n=Nc;break;case 4:n=Sm;break;case 16:n=Fo;break;case 536870912:n=Cm;break;default:n=Fo}n=Qg(n,$g.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $g(t,e){if(No=-1,Ro=0,$&6)throw Error(I(327));var n=t.callbackNode;if($r()&&t.callbackNode!==n)return null;var r=Uo(t,t===Ie?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nl(t,r);else{e=r;var i=$;$|=2;var s=Vg();(Ie!==t||Ne!==e)&&(zt=null,ti=he()+500,Xn(t,e));do try{Zw();break}catch(l){jg(t,l)}while(1);Bc(),Zo.current=s,$=i,fe!==null?e=0:(Ie=null,Ne=0,e=ge)}if(e!==0){if(e===2&&(i=mu(t),i!==0&&(r=i,e=ju(t,i))),e===1)throw n=hs,Xn(t,0),hn(t,r),Qe(t,he()),n;if(e===6)hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Jw(i)&&(e=nl(t,r),e===2&&(s=mu(t),s!==0&&(r=s,e=ju(t,s))),e===1))throw n=hs,Xn(t,0),hn(t,r),Qe(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Vn(t,je,zt);break;case 3:if(hn(t,r),(r&130023424)===r&&(e=td+500-he(),10<e)){if(Uo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ue(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Cu(Vn.bind(null,t,je,zt),e);break}Vn(t,je,zt);break;case 4:if(hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yw(r/1960))-r,10<r){t.timeoutHandle=Cu(Vn.bind(null,t,je,zt),r);break}Vn(t,je,zt);break;case 5:Vn(t,je,zt);break;default:throw Error(I(329))}}}return Qe(t,he()),t.callbackNode===n?$g.bind(null,t):null}function ju(t,e){var n=ji;return t.current.memoizedState.isDehydrated&&(Xn(t,e).flags|=256),t=nl(t,e),t!==2&&(e=je,je=n,e!==null&&Vu(e)),t}function Vu(t){je===null?je=t:je.push.apply(je,t)}function Jw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!It(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hn(t,e){for(e&=~ed,e&=~Ul,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wt(e),r=1<<n;t[n]=-1,e&=~r}}function vf(t){if($&6)throw Error(I(327));$r();var e=Uo(t,0);if(!(e&1))return Qe(t,he()),null;var n=nl(t,e);if(t.tag!==0&&n===2){var r=mu(t);r!==0&&(e=r,n=ju(t,r))}if(n===1)throw n=hs,Xn(t,0),hn(t,e),Qe(t,he()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vn(t,je,zt),Qe(t,he()),null}function nd(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(ti=he()+500,Dl&&Bn())}}function or(t){vn!==null&&vn.tag===0&&!($&6)&&$r();var e=$;$|=1;var n=at.transition,r=q;try{if(at.transition=null,q=1,t)return t()}finally{q=r,at.transition=n,$=e,!($&6)&&Bn()}}function rd(){Ze=Dr.current,re(Dr)}function Xn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Nw(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Fc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:Zr(),re(Ke),re(De),Gc();break;case 5:Hc(r);break;case 4:Zr();break;case 13:re(se);break;case 19:re(se);break;case 10:Wc(r.type._context);break;case 22:case 23:rd()}n=n.return}if(Ie=t,fe=t=Rn(t.current,null),Ne=Ze=e,ge=0,hs=null,ed=Ul=sr=0,je=ji=null,qn!==null){for(e=0;e<qn.length;e++)if(n=qn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qn=null}return t}function jg(t,e){do{var n=fe;try{if(Bc(),Io.current=Xo,Jo){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jo=!1}if(ir=0,Ee=pe=oe=null,Wi=!1,us=0,Zc.current=null,n===null||n.return===null){ge=1,hs=e,fe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=sf(o);if(_!==null){_.flags&=-257,of(_,o,l,s,e),_.mode&1&&rf(s,u,e),e=_,a=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(a),e.updateQueue=v}else y.add(a);break e}else{if(!(e&1)){rf(s,u,e),id();break e}a=Error(I(426))}}else if(ie&&l.mode&1){var S=sf(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),of(S,o,l,s,e),Uc(ei(a,l));break e}}s=a=ei(a,l),ge!==4&&(ge=2),ji===null?ji=[s]:ji.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Tg(s,a,e);Yh(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Tn===null||!Tn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Ng(s,l,e);Yh(s,E);break e}}s=s.return}while(s!==null)}Gg(n)}catch(C){e=C,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function Vg(){var t=Zo.current;return Zo.current=Xo,t===null?Xo:t}function id(){(ge===0||ge===3||ge===2)&&(ge=4),Ie===null||!(sr&268435455)&&!(Ul&268435455)||hn(Ie,Ne)}function nl(t,e){var n=$;$|=2;var r=Vg();(Ie!==t||Ne!==e)&&(zt=null,Xn(t,e));do try{Xw();break}catch(i){jg(t,i)}while(1);if(Bc(),$=n,Zo.current=r,fe!==null)throw Error(I(261));return Ie=null,Ne=0,ge}function Xw(){for(;fe!==null;)Hg(fe)}function Zw(){for(;fe!==null&&!I0();)Hg(fe)}function Hg(t){var e=qg(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?Gg(t):fe=e,Zc.current=null}function Gg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gw(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,fe=null;return}}else if(n=Hw(n,e,Ze),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ge===0&&(ge=5)}function Vn(t,e,n){var r=q,i=at.transition;try{at.transition=null,q=1,eE(t,e,n,r)}finally{at.transition=i,q=r}return null}function eE(t,e,n,r){do $r();while(vn!==null);if($&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(D0(t,s),t===Ie&&(fe=Ie=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,Qg(Fo,function(){return $r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=at.transition,at.transition=null;var o=q;q=1;var l=$;$|=4,Zc.current=null,qw(t,n),Bg(n,t),ww(Eu),zo=!!wu,Eu=wu=null,t.current=n,Qw(n),k0(),$=l,q=o,at.transition=s}else t.current=n;if(ho&&(ho=!1,vn=t,tl=i),s=t.pendingLanes,s===0&&(Tn=null),R0(n.stateNode),Qe(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(el)throw el=!1,t=Wu,Wu=null,t;return tl&1&&t.tag!==0&&$r(),s=t.pendingLanes,s&1?t===$u?Vi++:(Vi=0,$u=t):Vi=0,Bn(),null}function $r(){if(vn!==null){var t=km(tl),e=at.transition,n=q;try{if(at.transition=null,q=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,tl=0,$&6)throw Error(I(331));var i=$;for($|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:$i(8,c,s)}var d=c.child;if(d!==null)d.return=c,A=d;else for(;A!==null;){c=A;var h=c.sibling,_=c.return;if(Fg(c),c===u){A=null;break}if(h!==null){h.return=_,A=h;break}A=_}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$i(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=f;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Fl(9,l)}}catch(C){ce(l,l.return,C)}if(l===o){A=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,A=E;break e}A=l.return}}if($=i,Bn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Pl,t)}catch{}r=!0}return r}finally{q=n,at.transition=e}}return!1}function yf(t,e,n){e=ei(n,e),e=Tg(t,e,1),t=kn(t,e,1),e=Ue(),t!==null&&(Rs(t,1,e),Qe(t,e))}function ce(t,e,n){if(t.tag===3)yf(t,t,n);else for(;e!==null;){if(e.tag===3){yf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){t=ei(n,t),t=Ng(e,t,1),e=kn(e,t,1),t=Ue(),e!==null&&(Rs(e,1,t),Qe(e,t));break}}e=e.return}}function tE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ue(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Ne&n)===n&&(ge===4||ge===3&&(Ne&130023424)===Ne&&500>he()-td?Xn(t,0):ed|=n),Qe(t,e)}function Kg(t,e){e===0&&(t.mode&1?(e=to,to<<=1,!(to&130023424)&&(to=4194304)):e=1);var n=Ue();t=Yt(t,e),t!==null&&(Rs(t,e,n),Qe(t,n))}function nE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kg(t,n)}function rE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Kg(t,n)}var qg;qg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)Ve=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ve=!1,Vw(t,e,n);Ve=!!(t.flags&131072)}else Ve=!1,ie&&e.flags&1048576&&Jm(e,Go,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;To(t,e),t=e.pendingProps;var i=Yr(e,De.current);Wr(e,n),i=qc(null,e,r,t,i,n);var s=Qc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qe(r)?(s=!0,Vo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jc(e),i.updater=bl,e.stateNode=i,i._reactInternals=e,xu(e,r,t,n),e=Lu(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Mc(e),Fe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(To(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sE(r),t=pt(r,t),i){case 0:e=Ou(null,e,r,t,n);break e;case 1:e=uf(null,e,r,t,n);break e;case 11:e=lf(null,e,r,t,n);break e;case 14:e=af(null,e,r,pt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Ou(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),uf(t,e,r,i,n);case 3:e:{if(Ag(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tg(t,e),Qo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ei(Error(I(423)),e),e=cf(t,e,r,n,i);break e}else if(r!==i){i=ei(Error(I(424)),e),e=cf(t,e,r,n,i);break e}else for(et=In(e.stateNode.containerInfo.firstChild),tt=e,ie=!0,gt=null,n=sg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===i){e=Jt(t,e,n);break e}Fe(t,e,r,n)}e=e.child}return e;case 5:return og(e),t===null&&Nu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Su(r,i)?o=null:s!==null&&Su(r,s)&&(e.flags|=32),xg(t,e),Fe(t,e,o,n),e.child;case 6:return t===null&&Nu(e),null;case 13:return Og(t,e,n);case 4:return Vc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xr(e,null,r,n):Fe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),lf(t,e,r,i,n);case 7:return Fe(t,e,e.pendingProps,n),e.child;case 8:return Fe(t,e,e.pendingProps.children,n),e.child;case 12:return Fe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Ko,r._currentValue),r._currentValue=o,s!==null)if(It(s.value,o)){if(s.children===i.children&&!Ke.current){e=Jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Gt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ru(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ru(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wr(e,n),i=ut(i),r=r(i),e.flags|=1,Fe(t,e,r,n),e.child;case 14:return r=e.type,i=pt(r,e.pendingProps),i=pt(r.type,i),af(t,e,r,i,n);case 15:return Rg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),To(t,e),e.tag=1,qe(r)?(t=!0,Vo(e)):t=!1,Wr(e,n),rg(e,r,i),xu(e,r,i,n),Lu(null,e,r,!0,t,n);case 19:return Lg(t,e,n);case 22:return Pg(t,e,n)}throw Error(I(156,e.tag))};function Qg(t,e){return Em(t,e)}function iE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new iE(t,e,n,r)}function sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sE(t){if(typeof t=="function")return sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ic)return 11;if(t===kc)return 14}return 2}function Rn(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Po(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ir:return Zn(n.children,i,s,e);case Cc:o=8,i|=8;break;case eu:return t=lt(12,n,e,i|2),t.elementType=eu,t.lanes=s,t;case tu:return t=lt(13,n,e,i),t.elementType=tu,t.lanes=s,t;case nu:return t=lt(19,n,e,i),t.elementType=nu,t.lanes=s,t;case im:return zl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nm:o=10;break e;case rm:o=9;break e;case Ic:o=11;break e;case kc:o=14;break e;case un:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zn(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function zl(t,e,n,r){return t=lt(22,t,r,e),t.elementType=im,t.lanes=n,t.stateNode={isHidden:!1},t}function Oa(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function La(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fa(0),this.expirationTimes=fa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function od(t,e,n,r,i,s,o,l,a){return t=new oE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(s),t}function lE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Yg(t){if(!t)return bn;t=t._reactInternals;e:{if(gr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(qe(n))return Qm(t,n,e)}return e}function Jg(t,e,n,r,i,s,o,l,a){return t=od(n,r,!0,t,i,s,o,l,a),t.context=Yg(null),n=t.current,r=Ue(),i=Nn(n),s=Gt(r,i),s.callback=e??null,kn(n,s,i),t.current.lanes=i,Rs(t,i,r),Qe(t,r),t}function Bl(t,e,n,r){var i=e.current,s=Ue(),o=Nn(i);return n=Yg(n),e.context===null?e.context=n:e.pendingContext=n,e=Gt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kn(i,e,o),t!==null&&(Et(t,i,o,s),Co(t,i,o)),o}function rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ld(t,e){wf(t,e),(t=t.alternate)&&wf(t,e)}function aE(){return null}var Xg=typeof reportError=="function"?reportError:function(t){console.error(t)};function ad(t){this._internalRoot=t}Wl.prototype.render=ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Bl(t,e,null,null)};Wl.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;or(function(){Bl(null,t,null,null)}),e[Qt]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dn.length&&e!==0&&e<dn[n].priority;n++);dn.splice(n,0,t),n===0&&xm(t)}};function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ef(){}function uE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=rl(o);s.call(u)}}var o=Jg(e,r,t,0,null,!1,!1,"",Ef);return t._reactRootContainer=o,t[Qt]=o.current,is(t.nodeType===8?t.parentNode:t),or(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=rl(a);l.call(u)}}var a=od(t,0,!1,null,null,!1,!1,"",Ef);return t._reactRootContainer=a,t[Qt]=a.current,is(t.nodeType===8?t.parentNode:t),or(function(){Bl(e,a,n,r)}),a}function jl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=rl(o);l.call(a)}}Bl(e,o,t,i)}else o=uE(n,e,t,i,r);return rl(o)}Tm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oi(e.pendingLanes);n!==0&&(Rc(e,n|1),Qe(e,he()),!($&6)&&(ti=he()+500,Bn()))}break;case 13:or(function(){var r=Yt(t,1);if(r!==null){var i=Ue();Et(r,t,1,i)}}),ld(t,1)}};Pc=function(t){if(t.tag===13){var e=Yt(t,134217728);if(e!==null){var n=Ue();Et(e,t,134217728,n)}ld(t,134217728)}};Nm=function(t){if(t.tag===13){var e=Nn(t),n=Yt(t,e);if(n!==null){var r=Ue();Et(n,t,e,r)}ld(t,e)}};Rm=function(){return q};Pm=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};hu=function(t,e,n){switch(e){case"input":if(su(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ll(r);if(!i)throw Error(I(90));om(r),su(r,i)}}}break;case"textarea":am(t,n);break;case"select":e=n.value,e!=null&&Fr(t,!!n.multiple,e,!1)}};mm=nd;gm=or;var cE={usingClientEntryPoint:!1,Events:[xs,Rr,Ll,fm,pm,nd]},ki={findFiberByHostInstance:Kn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dE={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ym(t),t===null?null:t.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||aE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Pl=fo.inject(dE),At=fo}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cE;rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(e))throw Error(I(200));return lE(t,e,null,n)};rt.createRoot=function(t,e){if(!ud(t))throw Error(I(299));var n=!1,r="",i=Xg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=od(t,1,!1,null,null,n,!1,r,i),t[Qt]=e.current,is(t.nodeType===8?t.parentNode:t),new ad(e)};rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=ym(e),t=t===null?null:t.stateNode,t};rt.flushSync=function(t){return or(t)};rt.hydrate=function(t,e,n){if(!$l(e))throw Error(I(200));return jl(null,t,e,!0,n)};rt.hydrateRoot=function(t,e,n){if(!ud(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Xg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Jg(e,null,t,1,n??null,i,!1,s,o),t[Qt]=e.current,is(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wl(e)};rt.render=function(t,e,n){if(!$l(e))throw Error(I(200));return jl(null,t,e,!1,n)};rt.unmountComponentAtNode=function(t){if(!$l(t))throw Error(I(40));return t._reactRootContainer?(or(function(){jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Qt]=null})}),!0):!1};rt.unstable_batchedUpdates=nd;rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$l(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return jl(t,e,n,!1,r)};rt.version="18.2.0-next-9e3b772b8-20220608";function Zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zg)}catch(t){console.error(t)}}Zg(),Jp.exports=rt;var e_=Jp.exports;const hE=zp(e_);var Sf=e_;Xa.createRoot=Sf.createRoot,Xa.hydrateRoot=Sf.hydrateRoot;let St=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fs.apply(this,arguments)}var yn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yn||(yn={}));const Cf="popstate";function fE(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:a=""}=_r(i.location.hash.substr(1));return Hu("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,u=a.indexOf("#");l=u===-1?a:a.slice(0,u)}return l+"#"+(typeof s=="string"?s:ps(s))}function r(i,s){pE(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return gE(e,n,r,t)}function _e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mE(){return Math.random().toString(36).substr(2,8)}function If(t,e){return{usr:t.state,key:t.key,idx:e}}function Hu(t,e,n,r){return n===void 0&&(n=null),fs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_r(e):e,{state:n,key:e&&e.key||r||mE()})}function ps(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _r(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function gE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=yn.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(fs({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=yn.Pop;let S=c(),p=S==null?null:S-u;u=S,a&&a({action:l,location:v.location,delta:p})}function h(S,p){l=yn.Push;let f=Hu(v.location,S,p);n&&n(f,S),u=c()+1;let g=If(f,u),E=v.createHref(f);try{o.pushState(g,"",E)}catch{i.location.assign(E)}s&&a&&a({action:l,location:v.location,delta:1})}function _(S,p){l=yn.Replace;let f=Hu(v.location,S,p);n&&n(f,S),u=c();let g=If(f,u),E=v.createHref(f);o.replaceState(g,"",E),s&&a&&a({action:l,location:v.location,delta:0})}function y(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:ps(S);return _e(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return t(i,o)},listen(S){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Cf,d),a=S,()=>{i.removeEventListener(Cf,d),a=null}},createHref(S){return e(i,S)},createURL:y,encodeLocation(S){let p=y(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:_,go(S){return o.go(S)}};return v}var kf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(kf||(kf={}));function _E(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?_r(e):e,i=r_(r.pathname||"/",n);if(i==null)return null;let s=t_(t);vE(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=NE(s[l],xE(i));return o}function t_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(_e(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Pn([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),t_(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:kE(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of n_(s.path))i(s,o,a)}),e}function n_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=n_(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function vE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:TE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yE=/^:\w+$/,wE=3,EE=2,SE=1,CE=10,IE=-2,Tf=t=>t==="*";function kE(t,e){let n=t.split("/"),r=n.length;return n.some(Tf)&&(r+=IE),e&&(r+=EE),n.filter(i=>!Tf(i)).reduce((i,s)=>i+(yE.test(s)?wE:s===""?SE:CE),r)}function TE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function NE(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=RE({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:Pn([i,c.pathname]),pathnameBase:DE(Pn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Pn([i,c.pathnameBase]))}return s}function RE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=PE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=AE(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function PE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function xE(t){try{return decodeURI(t)}catch(e){return cd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function AE(t,e){try{return decodeURIComponent(t)}catch(n){return cd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function r_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function cd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_r(t):t;return{pathname:n?n.startsWith("/")?n:LE(n,e):e,search:bE(r),hash:ME(i)}}function LE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Da(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function i_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function s_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_r(t):(i=fs({},t),_e(!i.pathname||!i.pathname.includes("?"),Da("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),Da("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),Da("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=OE(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const Pn=t=>t.join("/").replace(/\/\/+/g,"/"),DE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),bE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ME=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function FE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const o_=["post","put","patch","delete"];new Set(o_);const UE=["get",...o_];new Set(UE);/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gu(){return Gu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gu.apply(this,arguments)}function zE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const BE=typeof Object.is=="function"?Object.is:zE,{useState:WE,useEffect:$E,useLayoutEffect:jE,useDebugValue:VE}=Ja;function HE(t,e,n){const r=e(),[{inst:i},s]=WE({inst:{value:r,getSnapshot:e}});return jE(()=>{i.value=r,i.getSnapshot=e,ba(i)&&s({inst:i})},[t,r,e]),$E(()=>(ba(i)&&s({inst:i}),t(()=>{ba(i)&&s({inst:i})})),[t]),VE(r),r}function ba(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!BE(n,r)}catch{return!0}}function GE(t,e,n){return e()}const KE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qE=!KE,QE=qE?GE:HE;"useSyncExternalStore"in Ja&&(t=>t.useSyncExternalStore)(Ja);const l_=w.createContext(null),dd=w.createContext(null),Os=w.createContext(null),Vl=w.createContext(null),vr=w.createContext({outlet:null,matches:[]}),a_=w.createContext(null);function YE(t,e){let{relative:n}=e===void 0?{}:e;Ls()||_e(!1);let{basename:r,navigator:i}=w.useContext(Os),{hash:s,pathname:o,search:l}=fd(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:Pn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Ls(){return w.useContext(Vl)!=null}function ci(){return Ls()||_e(!1),w.useContext(Vl).location}function hd(){Ls()||_e(!1);let{basename:t,navigator:e}=w.useContext(Os),{matches:n}=w.useContext(vr),{pathname:r}=ci(),i=JSON.stringify(i_(n).map(l=>l.pathnameBase)),s=w.useRef(!1);return w.useEffect(()=>{s.current=!0}),w.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=s_(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Pn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}const JE=w.createContext(null);function XE(t){let e=w.useContext(vr).outlet;return e&&w.createElement(JE.Provider,{value:t},e)}function fd(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=w.useContext(vr),{pathname:i}=ci(),s=JSON.stringify(i_(r).map(o=>o.pathnameBase));return w.useMemo(()=>s_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function ZE(t,e){Ls()||_e(!1);let{navigator:n}=w.useContext(Os),r=w.useContext(dd),{matches:i}=w.useContext(vr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=ci(),u;if(e){var c;let v=typeof e=="string"?_r(e):e;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||_e(!1),u=v}else u=a;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",_=_E(t,{pathname:h}),y=rS(_&&_.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Pn([l,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Pn([l,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&y?w.createElement(Vl.Provider,{value:{location:Gu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:yn.Pop}},y):y}function eS(){let t=lS(),e=FE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,s)}class tS extends w.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w.createElement(vr.Provider,{value:this.props.routeContext},w.createElement(a_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nS(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(l_);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(vr.Provider,{value:e},r)}function rS(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||_e(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||w.createElement(eS,null):null,c=e.concat(r.slice(0,l+1)),d=()=>w.createElement(nS,{match:o,routeContext:{outlet:s,matches:c}},a?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||l===0)?w.createElement(tS,{location:n.location,component:u,error:a,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Nf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Nf||(Nf={}));var il;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(il||(il={}));function iS(t){let e=w.useContext(dd);return e||_e(!1),e}function sS(t){let e=w.useContext(vr);return e||_e(!1),e}function oS(t){let e=sS(),n=e.matches[e.matches.length-1];return n.route.id||_e(!1),n.route.id}function lS(){var t;let e=w.useContext(a_),n=iS(il.UseRouteError),r=oS(il.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function aS(t){return XE(t.context)}function Ut(t){_e(!1)}function uS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yn.Pop,navigator:s,static:o=!1}=t;Ls()&&_e(!1);let l=e.replace(/^\/*/,"/"),a=w.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=_r(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:_="default"}=r,y=w.useMemo(()=>{let v=r_(u,l);return v==null?null:{pathname:v,search:c,hash:d,state:h,key:_}},[l,u,c,d,h,_]);return y==null?null:w.createElement(Os.Provider,{value:a},w.createElement(Vl.Provider,{children:n,value:{location:y,navigationType:i}}))}function cS(t){let{children:e,location:n}=t,r=w.useContext(l_),i=r&&!e?r.router.routes:Ku(e);return ZE(i,n)}var Rf;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Rf||(Rf={}));new Promise(()=>{});function Ku(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;if(r.type===w.Fragment){n.push.apply(n,Ku(r.props.children,e));return}r.type!==Ut&&_e(!1),!r.props.index||!r.props.children||_e(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Ku(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sl.apply(this,arguments)}function u_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function dS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hS(t,e){return t.button===0&&(!e||e==="_self")&&!dS(t)}const fS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],pS=["aria-current","caseSensitive","className","end","style","to","children"];function mS(t){let{basename:e,children:n,window:r}=t,i=w.useRef();i.current==null&&(i.current=fE({window:r,v5Compat:!0}));let s=i.current,[o,l]=w.useState({action:s.action,location:s.location});return w.useLayoutEffect(()=>s.listen(l),[s]),w.createElement(uS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const gS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ae=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,d=u_(e,fS),h=typeof u=="string"?u:ps(u),_=/^[a-z+]+:\/\//i.test(h)||h.startsWith("//"),y=h,v=!1;if(gS&&_){let g=new URL(window.location.href),E=h.startsWith("//")?new URL(g.protocol+h):new URL(h);E.origin===g.origin?y=E.pathname+E.search+E.hash:v=!0}let S=YE(y,{relative:i}),p=vS(y,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function f(g){r&&r(g),g.defaultPrevented||p(g)}return w.createElement("a",sl({},d,{href:_?h:S,onClick:v||s?r:f,ref:n,target:a}))}),_S=w.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:a,children:u}=e,c=u_(e,pS),d=fd(a,{relative:c.relative}),h=ci(),_=w.useContext(dd),{navigator:y}=w.useContext(Os),v=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,S=h.pathname,p=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;i||(S=S.toLowerCase(),p=p?p.toLowerCase():null,v=v.toLowerCase());let f=S===v||!o&&S.startsWith(v)&&S.charAt(v.length)==="/",g=p!=null&&(p===v||!o&&p.startsWith(v)&&p.charAt(v.length)==="/"),E=f?r:void 0,C;typeof s=="function"?C=s({isActive:f,isPending:g}):C=[s,f?"active":null,g?"pending":null].filter(Boolean).join(" ");let T=typeof l=="function"?l({isActive:f,isPending:g}):l;return w.createElement(Ae,sl({},c,{"aria-current":E,className:C,ref:n,style:T,to:a}),typeof u=="function"?u({isActive:f,isPending:g}):u)});var Pf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Pf||(Pf={}));var xf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(xf||(xf={}));function vS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=hd(),a=ci(),u=fd(t,{relative:o});return w.useCallback(c=>{if(hS(c,n)){c.preventDefault();let d=r!==void 0?r:ps(a)===ps(u);l(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}const yS=()=>m(Ae,{className:"gaming__navbar-login-btn",to:"/login",children:"Log In"});const wS=()=>m(Ae,{className:"gaming__navbar-register-btn",to:"/register",children:"Create account"}),ES=()=>[{destination:"/",iconName:"home",active:"gaming__navbar-link-active",text:"Home"},{destination:"/shop",iconName:"game-controller",active:"gaming__navbar-link-active",text:"Games"},{destination:"/wishlist",iconName:"heart",active:"gaming__navbar-link-active",text:"Wish List"},{destination:"/contact",iconName:"call",active:"gaming__navbar-link-active",text:"Contact"}];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw di(e)},di=function(t){return new Error("Firebase Database ("+c_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},SS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[c],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw Error();const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},h_=function(t){const e=d_(t);return pd.encodeByteArray(e,!0)},ol=function(t){return h_(t).replace(/\./g,"")},ll=function(t){try{return pd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(t){return f_(void 0,t)}function f_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!IS(n)||(t[n]=f_(t[n],e[n]));return t}function IS(t){return t!=="__proto__"}/**
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
 */function kS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TS=()=>kS().__FIREBASE_DEFAULTS__,NS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ll(t[1]);return e&&JSON.parse(e)},md=()=>{try{return TS()||NS()||RS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},p_=t=>{var e,n;return(n=(e=md())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PS=t=>{const e=p_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xS=()=>{var t;return(t=md())===null||t===void 0?void 0:t.config},m_=t=>{var e;return(e=md())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function AS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ol(JSON.stringify(n)),ol(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function OS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function g_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LS(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function __(){return c_.NODE_ADMIN===!0}function DS(){try{return typeof indexedDB=="object"}catch{return!1}}function bS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MS,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?FS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Wn(i,l,r)}}function FS(t,e){return t.replace(US,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const US=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const v_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ms(ll(s[0])||""),n=ms(ll(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},zS=function(t){const e=v_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},BS=function(t){const e=v_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ni(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function al(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ul(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Af(s)&&Af(o)){if(!ul(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class WS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function $S(t,e){const n=new jS(t,e);return n.subscribe.bind(n)}class jS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ma),i.error===void 0&&(i.error=Ma),i.complete===void 0&&(i.complete=Ma);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ma(){}function _d(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class GS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Hl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qS(e))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hn){return this.instances.has(e)}getOptions(e=Hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hn){return this.component?this.component.multipleInstances?e:Hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KS(t){return t===Hn?void 0:t}function qS(t){return t.instantiationMode==="EAGER"}/**
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
 */class QS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const YS={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},JS=Y.INFO,XS={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},ZS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=XS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vd{constructor(e){this.name=e,this._logLevel=JS,this._logHandler=ZS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const eC=(t,e)=>e.some(n=>t instanceof n);let Of,Lf;function tC(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nC(){return Lf||(Lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const y_=new WeakMap,Qu=new WeakMap,w_=new WeakMap,Fa=new WeakMap,yd=new WeakMap;function rC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&y_.set(n,t)}).catch(()=>{}),yd.set(e,t),e}function iC(t){if(Qu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qu.set(t,e)}let Yu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||w_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sC(t){Yu=t(Yu)}function oC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ua(this),e,...n);return w_.set(r,e.sort?e.sort():[e]),xn(r)}:nC().includes(t)?function(...e){return t.apply(Ua(this),e),xn(y_.get(this))}:function(...e){return xn(t.apply(Ua(this),e))}}function lC(t){return typeof t=="function"?oC(t):(t instanceof IDBTransaction&&iC(t),eC(t,tC())?new Proxy(t,Yu):t)}function xn(t){if(t instanceof IDBRequest)return rC(t);if(Fa.has(t))return Fa.get(t);const e=lC(t);return e!==t&&(Fa.set(t,e),yd.set(e,t)),e}const Ua=t=>yd.get(t);function aC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=xn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(xn(o.result),a.oldVersion,a.newVersion,xn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const uC=["get","getKey","getAll","getAllKeys","count"],cC=["put","add","delete","clear"],za=new Map;function Df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(za.get(e))return za.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return za.set(e,s),s}sC(t=>({...t,get:(e,n,r)=>Df(e,n)||t.get(e,n,r),has:(e,n)=>!!Df(e,n)||t.has(e,n)}));/**
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
 */class dC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ju="@firebase/app",bf="0.9.1";/**
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
 */const ar=new vd("@firebase/app"),fC="@firebase/app-compat",pC="@firebase/analytics-compat",mC="@firebase/analytics",gC="@firebase/app-check-compat",_C="@firebase/app-check",vC="@firebase/auth",yC="@firebase/auth-compat",wC="@firebase/database",EC="@firebase/database-compat",SC="@firebase/functions",CC="@firebase/functions-compat",IC="@firebase/installations",kC="@firebase/installations-compat",TC="@firebase/messaging",NC="@firebase/messaging-compat",RC="@firebase/performance",PC="@firebase/performance-compat",xC="@firebase/remote-config",AC="@firebase/remote-config-compat",OC="@firebase/storage",LC="@firebase/storage-compat",DC="@firebase/firestore",bC="@firebase/firestore-compat",MC="firebase",FC="9.16.0";/**
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
 */const Xu="[DEFAULT]",UC={[Ju]:"fire-core",[fC]:"fire-core-compat",[mC]:"fire-analytics",[pC]:"fire-analytics-compat",[_C]:"fire-app-check",[gC]:"fire-app-check-compat",[vC]:"fire-auth",[yC]:"fire-auth-compat",[wC]:"fire-rtdb",[EC]:"fire-rtdb-compat",[SC]:"fire-fn",[CC]:"fire-fn-compat",[IC]:"fire-iid",[kC]:"fire-iid-compat",[TC]:"fire-fcm",[NC]:"fire-fcm-compat",[RC]:"fire-perf",[PC]:"fire-perf-compat",[xC]:"fire-rc",[AC]:"fire-rc-compat",[OC]:"fire-gcs",[LC]:"fire-gcs-compat",[DC]:"fire-fst",[bC]:"fire-fst-compat","fire-js":"fire-js",[MC]:"fire-js-all"};/**
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
 */const cl=new Map,Zu=new Map;function zC(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ri(t){const e=t.name;if(Zu.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;Zu.set(e,t);for(const n of cl.values())zC(n,t);return!0}function wd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const BC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},An=new Ds("app","Firebase",BC);/**
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
 */class WC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=FC;function E_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=xS()),!n)throw An.create("no-options");const s=cl.get(i);if(s){if(ul(n,s.options)&&ul(r,s.config))return s;throw An.create("duplicate-app",{appName:i})}const o=new QS(i);for(const a of Zu.values())o.addComponent(a);const l=new WC(n,r,o);return cl.set(i,l),l}function S_(t=Xu){const e=cl.get(t);if(!e&&t===Xu)return E_();if(!e)throw An.create("no-app",{appName:t});return e}function On(t,e,n){var r;let i=(r=UC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(l.join(" "));return}ri(new lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $C="firebase-heartbeat-database",jC=1,gs="firebase-heartbeat-store";let Ba=null;function C_(){return Ba||(Ba=aC($C,jC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gs)}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),Ba}async function VC(t){try{return(await C_()).transaction(gs).objectStore(gs).get(I_(t))}catch(e){if(e instanceof Wn)ar.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function Mf(t,e){try{const r=(await C_()).transaction(gs,"readwrite");return await r.objectStore(gs).put(e,I_(t)),r.done}catch(n){if(n instanceof Wn)ar.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function I_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HC=1024,GC=30*24*60*60*1e3;class KC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ff();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=GC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ff(),{heartbeatsToSend:n,unsentEntries:r}=qC(this._heartbeatsCache.heartbeats),i=ol(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ff(){return new Date().toISOString().substring(0,10)}function qC(t,e=HC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class QC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DS()?bS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await VC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uf(t){return ol(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function YC(t){ri(new lr("platform-logger",e=>new dC(e),"PRIVATE")),ri(new lr("heartbeat",e=>new KC(e),"PRIVATE")),On(Ju,bf,t),On(Ju,bf,"esm2017"),On("fire-js","")}YC("");function Ed(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function k_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JC=k_,T_=new Ds("auth","Firebase",k_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=new vd("@firebase/auth");function xo(t,...e){zf.logLevel<=Y.ERROR&&zf.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,...e){throw Sd(t,...e)}function Lt(t,...e){return Sd(t,...e)}function XC(t,e,n){const r=Object.assign(Object.assign({},JC()),{[e]:n});return new Ds("auth","Firebase",r).create(e,{appName:t.name})}function Sd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return T_.create(t,...e)}function D(t,e,...n){if(!t)throw Sd(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xo(e),new Error(e)}function Xt(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=new Map;function Vt(t){Xt(t instanceof Function,"Expected a class definition");let e=Bf.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t,e){const n=wd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ul(s,e??{}))return i;kt(i,"already-initialized")}return n.initialize({options:e})}function eI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tI(){return Wf()==="http:"||Wf()==="https:"}function Wf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tI()||OS()||"connection"in navigator)?navigator.onLine:!0}function rI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=gd()||g_()}get(){return nI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=new Ms(3e4,6e4);function Fs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Us(t,e,n,r,i={}){return R_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=hi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),N_.fetch()(P_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function R_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iI),e);try{const i=new oI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw po(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw po(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw po(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw po(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw XC(t,c,u);kt(t,c)}}catch(i){if(i instanceof Wn)throw i;kt(t,"network-request-failed")}}async function zs(t,e,n,r,i={}){const s=await Us(t,e,n,r,i);return"mfaPendingCredential"in s&&kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function P_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cd(t.config,i):`${t.config.apiScheme}://${i}`}class oI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),sI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function po(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Lt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e){return Us(t,"POST","/v1/accounts:delete",e)}async function aI(t,e){return Us(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uI(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),i=Id(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hi(Wa(i.auth_time)),issuedAtTime:Hi(Wa(i.iat)),expirationTime:Hi(Wa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wa(t){return Number(t)*1e3}function Id(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ll(n);return i?JSON.parse(i):(xo("Failed to decode base64 JWT payload"),null)}catch(i){return xo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cI(t){const e=Id(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&dI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hi(this.lastLoginAt),this.creationTime=Hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _s(t,aI(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mI(s.providerUserInfo):[],l=pI(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new x_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function fI(t){const e=Xe(t);await dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mI(t){return t.map(e=>{var{providerId:n}=e,r=Ed(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(t,e){const n=await R_(t,{},async()=>{const r=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=P_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",N_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vs;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ed(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new x_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _s(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uI(this,e)}reload(){return fI(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _s(this,lI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:C,providerData:T,stsTokenManager:R}=n;D(g&&R,e,"internal-error");const x=vs.fromJSON(this.name,R);D(typeof g=="string",e,"internal-error"),an(d,e.name),an(h,e.name),D(typeof E=="boolean",e,"internal-error"),D(typeof C=="boolean",e,"internal-error"),an(_,e.name),an(y,e.name),an(v,e.name),an(S,e.name),an(p,e.name),an(f,e.name);const j=new er({uid:g,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:C,photoURL:y,phoneNumber:_,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return T&&Array.isArray(T)&&(j.providerData=T.map(O=>Object.assign({},O))),S&&(j._redirectEventId=S),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new vs;i.updateFromServerResponse(n);const s=new er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await dl(s),s}}/**
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
 */class A_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}A_.type="NONE";const $f=A_;/**
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
 */function Ao(t,e,n){return`firebase:${t}:${e}:${n}`}class jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ao(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ao("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jr(Vt($f),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Vt($f);const o=Ao(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=er._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new jr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(D_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(O_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(M_(e))return"Blackberry";if(F_(e))return"Webos";if(kd(e))return"Safari";if((e.includes("chrome/")||L_(e))&&!e.includes("edge/"))return"Chrome";if(b_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function O_(t=be()){return/firefox\//i.test(t)}function kd(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function L_(t=be()){return/crios\//i.test(t)}function D_(t=be()){return/iemobile/i.test(t)}function b_(t=be()){return/android/i.test(t)}function M_(t=be()){return/blackberry/i.test(t)}function F_(t=be()){return/webos/i.test(t)}function Kl(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _I(t=be()){var e;return Kl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vI(){return LS()&&document.documentMode===10}function U_(t=be()){return Kl(t)||b_(t)||F_(t)||M_(t)||/windows phone/i.test(t)||D_(t)}function yI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t,e=[]){let n;switch(t){case"Browser":n=jf(be());break;case"Worker":n=`${jf(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
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
 */class wI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vf(this),this.idTokenSubscription=new Vf(this),this.beforeStateQueue=new wI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=z_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Bs(t){return Xe(t)}class Vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=$S(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function SI(t,e,n){const r=Bs(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=B_(e),{host:o,port:l}=CI(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||II()}function B_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CI(t){const e=B_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hf(o)}}}function Hf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function II(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function kI(t,e){return Us(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e){return zs(t,"POST","/v1/accounts:signInWithPassword",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(t,e){return zs(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}async function RI(t,e){return zs(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Td{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ys(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ys(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return TI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return NI(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return kI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return RI(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const PI="http://localhost";class ur extends Td{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ed(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ur(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vr(e,n)}buildRequest(){const e={requestUri:PI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AI(t){const e=Di(bi(t)).link,n=e?Di(bi(e)).deep_link_id:null,r=Di(bi(t)).deep_link_id;return(r?Di(bi(r)).link:null)||r||n||e||t}class Nd{constructor(e){var n,r,i,s,o,l;const a=Di(bi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=xI((i=a.mode)!==null&&i!==void 0?i:null);D(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=AI(e);try{return new Nd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.providerId=fi.PROVIDER_ID}static credential(e,n){return ys._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nd.parseLink(n);return D(r,"argument-error"),ys._fromEmailAndCode(e,r.code,r.tenantId)}}fi.PROVIDER_ID="password";fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ws extends W_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function OI(t,e){return zs(t,"POST","/v1/accounts:signUp",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await er._fromIdTokenResponse(e,r,i),o=Gf(r);return new cr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gf(r);return new cr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hl(e,n,r,i)}}function $_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hl._fromErrorAndOperation(t,s,e,r):s})}async function LI(t,e,n=!1){const r=await _s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cr._forOperation(t,"link",r)}/**
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
 */async function DI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await _s(t,$_(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Id(s.idToken);D(o,r,"internal-error");const{sub:l}=o;return D(t.uid===l,r,"user-mismatch"),cr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(t,e,n=!1){const r="signIn",i=await $_(t,r,e),s=await cr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function bI(t,e){return j_(Bs(t),e)}async function MI(t,e,n){const r=Bs(t),i=await OI(r,{returnSecureToken:!0,email:e,password:n}),s=await cr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function FI(t,e,n){return bI(Xe(t),fi.credential(e,n))}function UI(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function zI(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function V_(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function BI(t){return Xe(t).signOut()}const fl="__sak";/**
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
 */class H_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fl,"1"),this.storage.removeItem(fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(){const t=be();return kd(t)||Kl(t)}const $I=1e3,jI=10;class G_ extends H_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=WI()&&yI(),this.fallbackToPolling=U_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}G_.type="LOCAL";const VI=G_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_ extends H_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}K_.type="SESSION";const q_=K_;/**
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
 */function HI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await HI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ql.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class GI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Rd("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function KI(t){Dt().location.href=t}/**
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
 */function Q_(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function qI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YI(){return Q_()?self:null}/**
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
 */const Y_="firebaseLocalStorageDb",JI=1,pl="firebaseLocalStorage",J_="fbase_key";class $s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ql(t,e){return t.transaction([pl],e?"readwrite":"readonly").objectStore(pl)}function XI(){const t=indexedDB.deleteDatabase(Y_);return new $s(t).toPromise()}function tc(){const t=indexedDB.open(Y_,JI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pl,{keyPath:J_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pl)?e(r):(r.close(),await XI(),e(await tc()))})})}async function Kf(t,e,n){const r=Ql(t,!0).put({[J_]:e,value:n});return new $s(r).toPromise()}async function ZI(t,e){const n=Ql(t,!1).get(e),r=await new $s(n).toPromise();return r===void 0?null:r.value}function qf(t,e){const n=Ql(t,!0).delete(e);return new $s(n).toPromise()}const ek=800,tk=3;class X_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Q_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ql._getInstance(YI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qI(),!this.activeServiceWorker)return;this.sender=new GI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tc();return await Kf(e,fl,"1"),await qf(e,fl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ql(i,!1).getAll();return new $s(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}X_.type="LOCAL";const nk=X_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ik(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Lt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rk().appendChild(r)})}function sk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ms(3e4,6e4);/**
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
 */function ok(t,e){return e?Vt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pd extends Td{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lk(t){return j_(t.auth,new Pd(t),t.bypassAuthState)}function ak(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),DI(n,new Pd(t),t.bypassAuthState)}async function uk(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),LI(n,new Pd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lk;case"linkViaPopup":case"linkViaRedirect":return uk;case"reauthViaPopup":case"reauthViaRedirect":return ak;default:kt(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=new Ms(2e3,1e4);class br extends Z_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=Rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ck.get())};e()}}br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk="pendingRedirect",Oo=new Map;class hk extends Z_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await fk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fk(t,e){const n=gk(e),r=mk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pk(t,e){Oo.set(t._key(),e)}function mk(t){return Vt(t._redirectPersistence)}function gk(t){return Ao(dk,t.config.apiKey,t.name)}async function _k(t,e,n=!1){const r=Bs(t),i=ok(r,e),o=await new hk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=10*60*1e3;class yk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ev(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qf(e))}saveEventToCache(e){this.cachedEventUids.add(Qf(e)),this.lastProcessedEventTime=Date.now()}}function Qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ev({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ev(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek(t,e={}){return Us(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ck=/^https?/;async function Ik(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ek(t);for(const n of e)try{if(kk(n))return}catch{}kt(t,"unauthorized-domain")}function kk(t){const e=ec(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ck.test(n))return!1;if(Sk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Tk=new Ms(3e4,6e4);function Yf(){const t=Dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Nk(t){return new Promise((e,n)=>{var r,i,s;function o(){Yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yf(),n(Lt(t,"network-request-failed"))},timeout:Tk.get()})}if(!((i=(r=Dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Dt().gapi)===null||s===void 0)&&s.load)o();else{const l=sk("iframefcb");return Dt()[l]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},ik(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function Rk(t){return Lo=Lo||Nk(t),Lo}/**
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
 */const Pk=new Ms(5e3,15e3),xk="__/auth/iframe",Ak="emulator/auth/iframe",Ok={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dk(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cd(e,Ak):`https://${t.config.authDomain}/${xk}`,r={apiKey:e.apiKey,appName:t.name,v:bs},i=Lk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${hi(r).slice(1)}`}async function bk(t){const e=await Rk(t),n=Dt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Dk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ok,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),l=Dt().setTimeout(()=>{s(o)},Pk.get());function a(){Dt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fk=500,Uk=600,zk="_blank",Bk="http://localhost";class Jf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wk(t,e,n,r=Fk,i=Uk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Mk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=be().toLowerCase();n&&(l=L_(u)?zk:n),O_(u)&&(e=e||Bk,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[_,y])=>`${h}${_}=${y},`,"");if(_I(u)&&l!=="_self")return $k(e||"",l),new Jf(null);const d=window.open(e||"",l,c);D(d,t,"popup-blocked");try{d.focus()}catch{}return new Jf(d)}function $k(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jk="__/auth/handler",Vk="emulator/auth/handler";function Xf(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:i};if(e instanceof W_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof Ws){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${Hk(t)}?${hi(l).slice(1)}`}function Hk({config:t}){return t.emulator?Cd(t,Vk):`https://${t.authDomain}/${jk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="webStorageSupport";class Gk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=q_,this._completeRedirectFn=_k,this._overrideRedirectResult=pk}async _openPopup(e,n,r,i){var s;Xt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Xf(e,n,r,ec(),i);return Wk(e,o,Rd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),KI(Xf(e,n,r,ec(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bk(e),r=new yk(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($a,{type:$a},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$a];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ik(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return U_()||kd()||Kl()}}const Kk=Gk;var Zf="@firebase/auth",ep="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yk(t){ri(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{D(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:z_(t)},c=new EI(l,a,u);return eI(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ri(new lr("auth-internal",e=>{const n=Bs(e.getProvider("auth").getImmediate());return(r=>new qk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(Zf,ep,Qk(t)),On(Zf,ep,"esm2017")}/**
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
 */const Jk=5*60,Xk=m_("authIdTokenMaxAge")||Jk;let tp=null;const Zk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Xk)return;const i=n==null?void 0:n.token;tp!==i&&(tp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function e1(t=S_()){const e=wd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZC(t,{popupRedirectResolver:Kk,persistence:[nk,VI,q_]}),r=m_("authTokenSyncURL");if(r){const s=Zk(r);zI(n,s,()=>s(n.currentUser)),UI(n,o=>s(o))}const i=p_("auth");return i&&SI(n,`http://${i}`),n}Yk("Browser");var t1="firebase",n1="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On(t1,n1,"app");const np="@firebase/database",rp="0.14.1";/**
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
 */let tv="";function r1(t){tv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ms(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return nn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new i1(e)}}catch{}return new s1},Yn=nv("localStorage"),nc=nv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new vd("@firebase/database"),o1=function(){let t=1;return function(){return t++}}(),rv=function(t){const e=HS(t),n=new WS;n.update(e);const r=n.digest();return pd.encodeByteArray(r)},js=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=js.apply(null,r):typeof r=="object"?e+=Ce(r):e+=r,e+=" "}return e};let tr=null,ip=!0;const l1=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Hr.logLevel=Y.VERBOSE,tr=Hr.log.bind(Hr),e&&nc.set("logging_enabled",!0)):typeof t=="function"?tr=t:(tr=null,nc.remove("logging_enabled"))},Le=function(...t){if(ip===!0&&(ip=!1,tr===null&&nc.get("logging_enabled")===!0&&l1(!0)),tr){const e=js.apply(null,t);tr(e)}},Vs=function(t){return function(...e){Le(t,...e)}},rc=function(...t){const e="FIREBASE INTERNAL ERROR: "+js(...t);Hr.error(e)},Zt=function(...t){const e=`FIREBASE FATAL ERROR: ${js(...t)}`;throw Hr.error(e),new Error(e)},Ye=function(...t){const e="FIREBASE WARNING: "+js(...t);Hr.warn(e)},a1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},iv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},u1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ii="[MIN_NAME]",dr="[MAX_NAME]",pi=function(t,e){if(t===e)return 0;if(t===ii||e===dr)return-1;if(e===ii||t===dr)return 1;{const n=sp(t),r=sp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},c1=function(t,e){return t===e?0:t<e?-1:1},Ti=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},xd=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ce(e[r]),n+=":",n+=xd(t[e[r]]);return n+="}",n},sv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ov=function(t){k(!iv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},d1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},h1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function f1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const p1=new RegExp("^-?(0*)\\d{1,10}$"),m1=-2147483648,g1=2147483647,sp=function(t){if(p1.test(t)){const e=Number(t);if(e>=m1&&e<=g1)return e}return null},mi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ye("Exception was thrown by user callback.",n),e},Math.floor(0))}},_1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class v1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ye(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ye(e)}}class Gr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="5",lv="v",av="s",uv="r",cv="f",dv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hv="ls",fv="p",ic="ac",pv="websocket",mv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function w1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _v(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===pv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);w1(t)&&(n.ns=t.namespace);const i=[];return Je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(){this.counters_={}}incrementCounter(e,n=1){nn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return CS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja={},Va={};function Od(t){const e=t.toString();return ja[e]||(ja[e]=new E1),ja[e]}function S1(t,e){const n=t.toString();return Va[n]||(Va[n]=e()),Va[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&mi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="start",I1="close",k1="pLPCommand",T1="pRTLPCB",vv="id",yv="pw",wv="ser",N1="cb",R1="seg",P1="ts",x1="d",A1="dframe",Ev=1870,Sv=30,O1=Ev-Sv,L1=25e3,D1=3e4;class Mr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vs(e),this.stats_=Od(n),this.urlFn=a=>(this.appCheckToken&&(a[ic]=this.appCheckToken),_v(n,mv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new C1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(D1)),u1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ld((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===op)this.id=l,this.password=a;else if(o===I1)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[op]="t",r[wv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[N1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[lv]=Ad,this.transportSessionId&&(r[av]=this.transportSessionId),this.lastSessionId&&(r[hv]=this.lastSessionId),this.applicationId&&(r[fv]=this.applicationId),this.appCheckToken&&(r[ic]=this.appCheckToken),typeof location<"u"&&location.hostname&&dv.test(location.hostname)&&(r[uv]=cv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mr.forceAllow_=!0}static forceDisallow(){Mr.forceDisallow_=!0}static isAvailable(){return Mr.forceAllow_?!0:!Mr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!d1()&&!h1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=h_(n),i=sv(r,O1);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[A1]="t",r[vv]=e,r[yv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ld{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=o1(),window[k1+this.uniqueCallbackIdentifier]=e,window[T1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ld.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Le("frame writing exception"),l.stack&&Le(l.stack),Le(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vv]=this.myID,e[yv]=this.myPW,e[wv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sv+r.length<=Ev;){const o=this.pendingSegs.shift();r=r+"&"+R1+i+"="+o.seg+"&"+P1+i+"="+o.ts+"&"+x1+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(L1)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=16384,M1=45e3;let ml=null;typeof MozWebSocket<"u"?ml=MozWebSocket:typeof WebSocket<"u"&&(ml=WebSocket);class _t{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vs(this.connId),this.stats_=Od(n),this.connURL=_t.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[lv]=Ad,typeof location<"u"&&location.hostname&&dv.test(location.hostname)&&(o[uv]=cv),n&&(o[av]=n),r&&(o[hv]=r),i&&(o[ic]=i),s&&(o[fv]=s),_v(e,pv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yn.set("previous_websocket_failure",!0);try{let r;__(),this.mySock=new ml(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ml!==null&&!_t.forceDisallow_}static previouslyFailed(){return Yn.isInMemoryStorage||Yn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ms(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sv(n,b1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(M1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const F1=6e4,U1=5e3,z1=10*1024,B1=100*1024,Ha="t",lp="d",W1="s",ap="r",$1="e",up="o",cp="a",dp="n",hp="p",j1="h";class V1{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vs("c:"+this.id+":"),this.transportManager_=new ws(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Gi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>B1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>z1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ha in e){const n=e[Ha];n===cp?this.upgradeIfSecondaryHealthy_():n===ap?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===up&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ti("t",e),r=Ti("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:cp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ti("t",e),r=Ti("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ti(Ha,e);if(lp in e){const r=e[lp];if(n===j1)this.onHandshake_(r);else if(n===dp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===W1?this.onConnectionShutdown_(r):n===ap?this.onReset_(r):n===$1?rc("Server Error: "+r):n===up?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ad!==r&&Ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Gi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(F1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(U1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Iv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gl}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=32,pp=768;class J{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new J("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mn(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new J(t.pieces_,e)}function kv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function H1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Tv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Nv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new J(e,0)}function me(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof J)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new J(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return He(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Dd(t,e){if(Mn(t)!==Mn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function vt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mn(t)>Mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class G1{constructor(e,n){this.errorPrefix_=n,this.parts_=Tv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Gl(this.parts_[r]);Rv(this)}}function K1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Gl(e),Rv(t)}function q1(t){const e=t.parts_.pop();t.byteLength_-=Gl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Rv(t){if(t.byteLength_>pp)throw new Error(t.errorPrefix_+"has a key path longer than "+pp+" bytes ("+t.byteLength_+").");if(t.parts_.length>fp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fp+") or object contains a cycle "+Gn(t))}function Gn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd extends Iv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new bd}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=1e3,Q1=60*5*1e3,mp=30*1e3,Y1=1.3,J1=3e4,X1="server_kill",gp=3;class Kt extends Cv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Kt.nextPersistentConnectionId_++,this.log_=Vs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ni,this.maxReconnectDelay_=Q1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!__())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ce(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Hl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Kt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&nn(e,"w")){const r=ni(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||BS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):rc("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>J1&&(this.reconnectDelay_=Ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Y1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Kt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new V1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ye(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(X1)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ye(d),a())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qu(this.interruptReasons_)&&(this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>xd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new J(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gp&&(this.reconnectDelay_=mp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tv.replace(/\./g,"-")]=1,gd()?e["framework.cordova"]=1:g_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gl.getInstance().currentlyOnline();return qu(this.interruptReasons_)&&e}}Kt.nextPersistentConnectionId_=0;Kt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(ii,e),i=new U(ii,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo;class Pv extends Yl{static get __EMPTY_NODE(){return mo}static set __EMPTY_NODE(e){mo=e}compare(e,n){return pi(e.name,n.name)}isDefinedOn(e){throw di("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(dr,mo)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,mo)}toString(){return".key"}}const Kr=new Pv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??Ge.EMPTY_NODE,this.right=s??Ge.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class Z1{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new go(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new go(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new go(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new go(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new Z1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t,e){return pi(t.name,e.name)}function Md(t,e){return pi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;function tT(t){sc=t}const xv=function(t){return typeof t=="number"?"number:"+ov(t):"string:"+t},Av=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&nn(e,".sv"),"Priority must be a string or number.")}else k(t===sc||t.isEmpty(),"priority of unexpected type.");k(t===sc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _p;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Av(this.priorityNode_)}static set __childrenNodeConstructor(e){_p=e}static get __childrenNodeConstructor(){return _p}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:F(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ov(this.value_):e+=this.value_,this.lazyHash_=rv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),s=we.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ov,Lv;function nT(t){Ov=t}function rT(t){Lv=t}class iT extends Yl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?pi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(dr,new we("[PRIORITY-POST]",Lv))}makePost(e,n){const r=Ov(e);return new U(n,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const de=new iT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=Math.log(2);class oT{constructor(e){const n=s=>parseInt(Math.log(s)/sT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _l=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new Se(h,d.node,Se.BLACK,null,null);{const _=parseInt(c/2,10)+a,y=i(a,_),v=i(_+1,u);return d=t[_],h=n?n(d):d,new Se(h,d.node,Se.BLACK,y,v)}},s=function(a){let u=null,c=null,d=t.length;const h=function(y,v){const S=d-y,p=d;d-=y;const f=i(S+1,p),g=t[S],E=n?n(g):g;_(new Se(E,g.node,v,null,f))},_=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<a.count;++y){const v=a.nextBitIsOne(),S=Math.pow(2,a.count-(y+1));v?h(S,Se.BLACK):(h(S,Se.BLACK),h(S,Se.RED))}return c},o=new oT(t.length),l=s(o);return new Ge(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga;const Sr={};class Ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(Sr&&de,"ChildrenNode.ts has not been loaded"),Ga=Ga||new Ht({".priority":Sr},{".priority":de}),Ga}get(e){const n=ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return nn(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Kr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=_l(r,e.getCompare()):l=Sr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Ht(c,u)}addToIndexes(e,n){const r=al(this.indexes_,(i,s)=>{const o=ni(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===Sr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(U.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),_l(l,o.getCompare())}else return Sr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new U(e.name,l))),a.insert(e,e.node)}});return new Ht(r,this.indexSet_)}removeFromIndexes(e,n){const r=al(this.indexes_,i=>{if(i===Sr)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new Ht(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Av(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ri||(Ri=new L(new Ge(Md),null,Ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ri}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ri:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ri:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{k(F(e)!==".priority"||Mn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(de,(o,l)=>{n[o]=l.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xv(this.getPriority().val())+":"),this.forEachChild(de,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hs?-1:0}withIndex(e){if(e===Kr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Kr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(de),i=n.getIterator(de);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kr?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lT extends L{constructor(){super(new Ge(Md),L.EMPTY_NODE,Ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Hs=new lT;Object.defineProperties(U,{MIN:{value:new U(ii,L.EMPTY_NODE)},MAX:{value:new U(dr,Hs)}});Pv.__EMPTY_NODE=L.EMPTY_NODE;we.__childrenNodeConstructor=L;tT(Hs);rT(Hs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=!0;function Te(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,Te(e))}if(!(t instanceof Array)&&aT){const n=[];let r=!1;if(Je(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Te(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new U(o,a)))}}),n.length===0)return L.EMPTY_NODE;const s=_l(n,eT,o=>o.name,Md);if(r){const o=_l(n,de.getCompare());return new L(s,Te(e),new Ht({".priority":o},{".priority":de}))}else return new L(s,Te(e),Ht.Default)}else{let n=L.EMPTY_NODE;return Je(t,(r,i)=>{if(nn(t,r)&&r.substring(0,1)!=="."){const s=Te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Te(e))}}nT(Te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT extends Yl{constructor(e){super(),this.indexPath_=e,k(!z(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?pi(e.name,n.name):s}makePost(e,n){const r=Te(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Hs);return new U(dr,e)}toString(){return Tv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT extends Yl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?pi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=Te(e);return new U(n,r)}toString(){return".value"}}const dT=new cT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t){return{type:"value",snapshotNode:t}}function si(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Es(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ss(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Es(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(si(n,r)):o.trackChildChange(Ss(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(de,(i,s)=>{n.hasChild(i)||r.trackChildChange(Es(i,s))}),n.isLeafNode()||n.forEachChild(de,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ss(i,s,o))}else r.trackChildChange(si(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.indexedFilter_=new Fd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Cs.getStartPost_(e),this.endPost_=Cs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(de,(o,l)=>{s.matches(new U(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Cs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new U(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(c&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Ss(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Es(n,d));const v=l.updateImmediateChild(n,L.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(si(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Es(u.name,u.node)),s.trackChildChange(si(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ii}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new Ud;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pT(t){return t.loadsAllData()?new Fd(t.getIndex()):t.hasLimit()?new fT(t):new Cs(t)}function vp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===dT?n="$value":t.index_===Kr?n="$key":(k(t.index_ instanceof uT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ce(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ce(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ce(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function yp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends Cv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Vs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=vl.getListenId_(e,r),l={};this.listens_[o]=l;const a=vp(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ni(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=vl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=vp(e._queryParams),r=e._path.toString(),i=new Hl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ms(l.responseText)}catch{Ye("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ye("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){return{value:null,children:new Map}}function bv(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,yl());const i=t.children.get(r);e=Z(e),bv(i,e,n)}}function oc(t,e,n){t.value!==null?n(e,t.value):gT(t,(r,i)=>{const s=new J(e.toString()+"/"+r);oc(i,s,n)})}function gT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=10*1e3,vT=30*1e3,yT=5*60*1e3;class wT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new _T(e);const r=wp+(vT-wp)*Math.random();Gi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Je(e,(i,s)=>{s>0&&nn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Gi(this.reportStats_.bind(this),Math.floor(Math.random()*2*yT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yt||(yt={}));function Mv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=yt.ACK_USER_WRITE,this.source=Mv()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new J(e));return new wl(H(),n,this.revert)}}else return k(F(this.path)===e,"operationForChild called for unrelated child."),new wl(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.source=e,this.path=n,this.type=yt.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Is(this.source,H()):new Is(this.source,Z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=yt.OVERWRITE}operationForChild(e){return z(this.path)?new hr(this.source,H(),this.snap.getImmediateChild(e)):new hr(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=yt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new J(e));return n.isEmpty()?null:n.value?new hr(this.source,H(),n.value):new ks(this.source,H(),n)}else return k(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ks(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ST(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(hT(o.childName,o.snapshotNode))}),Pi(t,i,"child_removed",e,r,n),Pi(t,i,"child_added",e,r,n),Pi(t,i,"child_moved",s,r,n),Pi(t,i,"child_changed",e,r,n),Pi(t,i,"value",e,r,n),i}function Pi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>IT(t,l,a)),o.forEach(l=>{const a=CT(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function CT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function IT(t,e,n){if(e.childName==null||n.childName==null)throw di("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e){return{eventCache:t,serverCache:e}}function Ki(t,e,n,r){return Jl(new fr(e,n,r),t.serverCache)}function Fv(t,e,n,r){return Jl(t.eventCache,new fr(e,n,r))}function lc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka;const kT=()=>(Ka||(Ka=new Ge(c1)),Ka);class ne{constructor(e,n=kT()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return Je(e,(r,i)=>{n=n.set(new J(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(z(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Z(e),n);return s!=null?{path:me(new J(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new ne(null)}}set(e,n){if(z(e))return new ne(n,this.children);{const r=F(e),s=(this.children.get(r)||new ne(null)).set(Z(e),n),o=this.children.insert(r,s);return new ne(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(Z(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ne(null):new ne(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if(z(e))return n;{const r=F(e),s=(this.children.get(r)||new ne(null)).setTree(Z(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ne(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(me(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(Z(e),me(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(Z(e),me(n,i),r):new ne(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(me(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new ne(null))}}function qi(t,e,n){if(z(e))return new Ct(new ne(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=He(i,e);return s=s.updateChild(o,n),new Ct(t.writeTree_.set(i,s))}else{const i=new ne(n),s=t.writeTree_.setTree(e,i);return new Ct(s)}}}function Ep(t,e,n){let r=t;return Je(n,(i,s)=>{r=qi(r,me(e,i),s)}),r}function Sp(t,e){if(z(e))return Ct.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new Ct(n)}}function ac(t,e){return yr(t,e)!=null}function yr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function Cp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function Ln(t,e){if(z(e))return t;{const n=yr(t,e);return n!=null?new Ct(new ne(n)):new Ct(t.writeTree_.subtree(e))}}function uc(t){return t.writeTree_.isEmpty()}function oi(t,e){return Uv(H(),t.writeTree_,e)}function Uv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Uv(me(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(me(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t,e){return $v(e,t)}function TT(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=qi(t.visibleWrites,e,n)),t.lastWriteId=r}function NT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function RT(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&PT(l,r.path)?i=!1:vt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return xT(t),!0;if(r.snap)t.visibleWrites=Sp(t.visibleWrites,r.path);else{const l=r.children;Je(l,a=>{t.visibleWrites=Sp(t.visibleWrites,me(r.path,a))})}return!0}else return!1}function PT(t,e){if(t.snap)return vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vt(me(t.path,n),e))return!0;return!1}function xT(t){t.visibleWrites=zv(t.allWrites,AT,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function AT(t){return t.visible}function zv(t,e,n){let r=Ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)vt(n,o)?(l=He(n,o),r=qi(r,l,s.snap)):vt(o,n)&&(l=He(o,n),r=qi(r,H(),s.snap.getChild(l)));else if(s.children){if(vt(n,o))l=He(n,o),r=Ep(r,l,s.children);else if(vt(o,n))if(l=He(o,n),z(l))r=Ep(r,H(),s.children);else{const a=ni(s.children,F(l));if(a){const u=a.getChild(Z(l));r=qi(r,H(),u)}}}else throw di("WriteRecord should have .snap or .children")}}return r}function Bv(t,e,n,r,i){if(!r&&!i){const s=yr(t.visibleWrites,e);if(s!=null)return s;{const o=Ln(t.visibleWrites,e);if(uc(o))return n;if(n==null&&!ac(o,H()))return null;{const l=n||L.EMPTY_NODE;return oi(o,l)}}}else{const s=Ln(t.visibleWrites,e);if(!i&&uc(s))return n;if(!i&&n==null&&!ac(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(vt(u.path,e)||vt(e,u.path))},l=zv(t.allWrites,o,e),a=n||L.EMPTY_NODE;return oi(l,a)}}}function OT(t,e,n){let r=L.EMPTY_NODE;const i=yr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ln(t.visibleWrites,e);return n.forEachChild(de,(o,l)=>{const a=oi(Ln(s,new J(o)),l);r=r.updateImmediateChild(o,a)}),Cp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ln(t.visibleWrites,e);return Cp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function LT(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=me(e,n);if(ac(t.visibleWrites,s))return null;{const o=Ln(t.visibleWrites,s);return uc(o)?i.getChild(n):oi(o,i.getChild(n))}}function DT(t,e,n,r){const i=me(e,n),s=yr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ln(t.visibleWrites,i);return oi(o,r.getNode().getImmediateChild(n))}else return null}function bT(t,e){return yr(t.visibleWrites,e)}function MT(t,e,n,r,i,s,o){let l;const a=Ln(t.visibleWrites,e),u=yr(a,H());if(u!=null)l=u;else if(n!=null)l=oi(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&c.length<i;)d(_,r)!==0&&c.push(_),_=h.getNext();return c}else return[]}function FT(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function El(t,e,n,r){return Bv(t.writeTree,t.treePath,e,n,r)}function $d(t,e){return OT(t.writeTree,t.treePath,e)}function Ip(t,e,n,r){return LT(t.writeTree,t.treePath,e,n,r)}function Sl(t,e){return bT(t.writeTree,me(t.treePath,e))}function UT(t,e,n,r,i,s){return MT(t.writeTree,t.treePath,e,n,r,i,s)}function jd(t,e,n){return DT(t.writeTree,t.treePath,e,n)}function Wv(t,e){return $v(me(t.treePath,e),t.writeTree)}function $v(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ss(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Es(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,si(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ss(r,e.snapshotNode,i.oldSnap));else throw di("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const jv=new BT;class Vd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new fr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pr(this.viewCache_),s=UT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(t){return{filter:t}}function $T(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jT(t,e,n,r,i){const s=new zT;let o,l;if(n.type===yt.OVERWRITE){const u=n;u.source.fromUser?o=cc(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=Cl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===yt.MERGE){const u=n;u.source.fromUser?o=HT(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=dc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===yt.ACK_USER_WRITE){const u=n;u.revert?o=qT(t,e,u.path,r,i,s):o=GT(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===yt.LISTEN_COMPLETE)o=KT(t,e,n.path,r,s);else throw di("Unknown operation type: "+n.type);const a=s.getChanges();return VT(e,o,a),{viewCache:o,changes:a}}function VT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=lc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Dv(lc(e)))}}function Vv(t,e,n,r,i,s){const o=e.eventCache;if(Sl(r,n)!=null)return e;{let l,a;if(z(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=pr(e),c=u instanceof L?u:L.EMPTY_NODE,d=$d(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=El(r,pr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=F(n);if(u===".priority"){k(Mn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=Ip(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=Z(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Ip(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=jd(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Ki(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Cl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),_,null)}else{const _=F(n);if(!a.isCompleteForPath(n)&&Mn(n)>1)return e;const y=Z(n),S=a.getNode().getImmediateChild(_).updateChild(y,r);_===".priority"?u=c.updatePriority(a.getNode(),S):u=c.updateChild(a.getNode(),_,S,y,jv,null)}const d=Fv(e,u,a.isFullyInitialized()||z(n),c.filtersNodes()),h=new Vd(i,d,s);return Vv(t,d,n,i,h,l)}function cc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Vd(i,e,s);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ki(e,u,!0,t.filter.filtersNodes());else{const d=F(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ki(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=Z(n),_=l.getNode().getImmediateChild(d);let y;if(z(h))y=r;else{const v=c.getCompleteChild(d);v!=null?kv(h)===".priority"&&v.getChild(Nv(h)).isEmpty()?y=v:y=v.updateChild(h,r):y=L.EMPTY_NODE}if(_.equals(y))a=e;else{const v=t.filter.updateChild(l.getNode(),d,y,h,c,o);a=Ki(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function kp(t,e){return t.eventCache.isCompleteForChild(e)}function HT(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=me(n,a);kp(e,F(c))&&(l=cc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=me(n,a);kp(e,F(c))||(l=cc(t,l,c,u,i,s,o))}),l}function Tp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function dc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;z(n)?u=r:u=new ne(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),y=Tp(t,_,h);a=Cl(t,a,new J(d),y,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!_){const y=e.serverCache.getNode().getImmediateChild(d),v=Tp(t,y,h);a=Cl(t,a,new J(d),v,i,s,o,l)}}),a}function GT(t,e,n,r,i,s,o){if(Sl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Cl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(z(n)){let u=new ne(null);return a.getNode().forEachChild(Kr,(c,d)=>{u=u.set(new J(c),d)}),dc(t,e,n,u,i,s,l,o)}else return e}else{let u=new ne(null);return r.foreach((c,d)=>{const h=me(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),dc(t,e,n,u,i,s,l,o)}}function KT(t,e,n,r,i){const s=e.serverCache,o=Fv(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return Vv(t,o,n,r,jv,i)}function qT(t,e,n,r,i,s){let o;if(Sl(r,n)!=null)return e;{const l=new Vd(r,e,i),a=e.eventCache.getNode();let u;if(z(n)||F(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=El(r,pr(e));else{const d=e.serverCache.getNode();k(d instanceof L,"serverChildren would be complete if leaf node"),c=$d(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=F(n);let d=jd(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,Z(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,L.EMPTY_NODE,Z(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=El(r,pr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Sl(r,H())!=null,Ki(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Fd(r.getIndex()),s=pT(r);this.processor_=WT(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,l.getNode(),null),c=new fr(a,o.isFullyInitialized(),i.filtersNodes()),d=new fr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Jl(d,c),this.eventGenerator_=new ET(this.query_)}get query(){return this.query_}}function YT(t){return t.viewCache_.serverCache.getNode()}function JT(t,e){const n=pr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Np(t){return t.eventRegistrations_.length===0}function XT(t,e){t.eventRegistrations_.push(e)}function Rp(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Pp(t,e,n,r){e.type===yt.MERGE&&e.source.queryId!==null&&(k(pr(t.viewCache_),"We should always have a full cache before handling merges"),k(lc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=jT(t.processor_,i,e,n,r);return $T(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Hv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ZT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(s,o)=>{r.push(si(s,o))}),n.isFullyInitialized()&&r.push(Dv(n.getNode())),Hv(t,r,n.getNode(),e)}function Hv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ST(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il;class eN{constructor(){this.views=new Map}}function tN(t){k(!Il,"__referenceConstructor has already been defined"),Il=t}function nN(){return k(Il,"Reference.ts has not been loaded"),Il}function rN(t){return t.views.size===0}function Hd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),Pp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Pp(o,e,n,r));return s}}function iN(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=El(n,i?r:null),a=!1;l?a=!0:r instanceof L?(l=$d(n,r),a=!1):(l=L.EMPTY_NODE,a=!1);const u=Jl(new fr(l,a,!1),new fr(r,i,!1));return new QT(e,u)}return o}function sN(t,e,n,r,i,s){const o=iN(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),XT(o,n),ZT(o,n)}function oN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Fn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Rp(u,n,r)),Np(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Rp(a,n,r)),Np(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Fn(t)&&s.push(new(nN())(e._repo,e._path)),{removed:s,events:o}}function Gv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qr(t,e){let n=null;for(const r of t.views.values())n=n||JT(r,e);return n}function Kv(t,e){if(e._queryParams.loadsAllData())return Xl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function qv(t,e){return Kv(t,e)!=null}function Fn(t){return Xl(t)!=null}function Xl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;function lN(t){k(!kl,"__referenceConstructor has already been defined"),kl=t}function aN(){return k(kl,"Reference.ts has not been loaded"),kl}let uN=1;class xp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=FT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Qv(t,e,n,r,i){return TT(t.pendingWriteTree_,e,n,r,i),i?Gs(t,new hr(Mv(),e,n)):[]}function Jn(t,e,n=!1){const r=NT(t.pendingWriteTree_,e);if(RT(t.pendingWriteTree_,e)){let s=new ne(null);return r.snap!=null?s=s.set(H(),!0):Je(r.children,o=>{s=s.set(new J(o),!0)}),Gs(t,new wl(r.path,s,n))}else return[]}function Zl(t,e,n){return Gs(t,new hr(zd(),e,n))}function cN(t,e,n){const r=ne.fromObject(n);return Gs(t,new ks(zd(),e,r))}function dN(t,e){return Gs(t,new Is(zd(),e))}function hN(t,e,n){const r=Kd(t,n);if(r){const i=qd(r),s=i.path,o=i.queryId,l=He(s,e),a=new Is(Bd(o),l);return Qd(t,s,a)}else return[]}function hc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||qv(o,e))){const a=oN(o,e,n,r);rN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,_)=>Fn(_));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=mN(h);for(let y=0;y<_.length;++y){const v=_[y],S=v.query,p=Xv(t,v);t.listenProvider_.startListening(Qi(S),Tl(t,S),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Qi(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(ea(h));t.listenProvider_.stopListening(Qi(h),_)}))}gN(t,u)}return l}function fN(t,e,n,r){const i=Kd(t,r);if(i!=null){const s=qd(i),o=s.path,l=s.queryId,a=He(o,e),u=new hr(Bd(l),a,n);return Qd(t,o,u)}else return[]}function pN(t,e,n,r){const i=Kd(t,r);if(i){const s=qd(i),o=s.path,l=s.queryId,a=He(o,e),u=ne.fromObject(n),c=new ks(Bd(l),a,u);return Qd(t,o,c)}else return[]}function Ap(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const y=He(h,i);s=s||qr(_,y),o=o||Fn(_)});let l=t.syncPointTree_.get(i);l?(o=o||Fn(l),s=s||qr(l,H())):(l=new eN,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const v=qr(y,H());v&&(s=s.updateImmediateChild(_,v))}));const u=qv(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=ea(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=_N();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const c=Wd(t.pendingWriteTree_,i);let d=sN(l,e,n,c,s,a);if(!u&&!o&&!r){const h=Kv(l,e);d=d.concat(vN(t,e,h))}return d}function Gd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=He(o,e),u=qr(l,a);if(u)return u});return Bv(i,e,s,n,!0)}function Gs(t,e){return Yv(e,t.syncPointTree_,null,Wd(t.pendingWriteTree_,H()))}function Yv(t,e,n,r){if(z(t.path))return Jv(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=qr(i,H()));let s=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Wv(r,o);s=s.concat(Yv(l,a,u,c))}return i&&(s=s.concat(Hd(i,t,r,n))),s}}function Jv(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=qr(i,H()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Wv(r,o),c=t.operationForChild(o);c&&(s=s.concat(Jv(c,l,a,u)))}),i&&(s=s.concat(Hd(i,t,r,n))),s}function Xv(t,e){const n=e.query,r=Tl(t,n);return{hashFn:()=>(YT(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?hN(t,n._path,r):dN(t,n._path);{const s=f1(i,n);return hc(t,n,null,s)}}}}function Tl(t,e){const n=ea(e);return t.queryToTagMap.get(n)}function ea(t){return t._path.toString()+"$"+t._queryIdentifier}function Kd(t,e){return t.tagToQueryMap.get(e)}function qd(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new J(t.substr(0,e))}}function Qd(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=Wd(t.pendingWriteTree_,e);return Hd(r,n,i,null)}function mN(t){return t.fold((e,n,r)=>{if(n&&Fn(n))return[Xl(n)];{let i=[];return n&&(i=Gv(n)),Je(r,(s,o)=>{i=i.concat(o)}),i}})}function Qi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(aN())(t._repo,t._path):t}function gN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ea(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function _N(){return uN++}function vN(t,e,n){const r=e._path,i=Tl(t,e),s=Xv(t,n),o=t.listenProvider_.startListening(Qi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!Fn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!z(u)&&c&&Fn(c))return[Xl(c).query];{let h=[];return c&&(h=h.concat(Gv(c).map(_=>_.query))),Je(d,(_,y)=>{h=h.concat(y)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Qi(c),Tl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yd(n)}node(){return this.node_}}class Jd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=me(this.path_,e);return new Jd(this.syncTree_,n)}node(){return Gd(this.syncTree_,this.path_)}}const yN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Op=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return wN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return EN(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},wN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},EN=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},SN=function(t,e,n,r){return Xd(e,new Jd(n,t),r)},Zv=function(t,e,n){return Xd(t,new Yd(e),n)};function Xd(t,e,n){const r=t.getPriority().val(),i=Op(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Op(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new we(l,Te(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(de,(l,a)=>{const u=Xd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function eh(t,e){let n=e instanceof J?e:new J(e),r=t,i=F(n);for(;i!==null;){const s=ni(r.node.children,i)||{children:{},childCount:0};r=new Zd(i,r,s),n=Z(n),i=F(n)}return r}function gi(t){return t.node.value}function ey(t,e){t.node.value=e,fc(t)}function ty(t){return t.node.childCount>0}function CN(t){return gi(t)===void 0&&!ty(t)}function ta(t,e){Je(t.node.children,(n,r)=>{e(new Zd(n,t,r))})}function ny(t,e,n,r){n&&!r&&e(t),ta(t,i=>{ny(i,e,!0,r)}),n&&r&&e(t)}function IN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ks(t){return new J(t.parent===null?t.name:Ks(t.parent)+"/"+t.name)}function fc(t){t.parent!==null&&kN(t.parent,t.name,t)}function kN(t,e,n){const r=CN(n),i=nn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,fc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,fc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=/[\[\].#$\/\u0000-\u001F\u007F]/,NN=/[\[\].#$\u0000-\u001F\u007F]/,qa=10*1024*1024,ry=function(t){return typeof t=="string"&&t.length!==0&&!TN.test(t)},iy=function(t){return typeof t=="string"&&t.length!==0&&!NN.test(t)},RN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),iy(t)},PN=function(t,e,n,r){r&&e===void 0||th(_d(t,"value"),e,n)},th=function(t,e,n){const r=n instanceof J?new G1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Gn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Gn(r)+" with contents = "+e.toString());if(iv(e))throw new Error(t+"contains "+e.toString()+" "+Gn(r));if(typeof e=="string"&&e.length>qa/3&&Gl(e)>qa)throw new Error(t+"contains a string greater than "+qa+" utf8 bytes "+Gn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ry(o)))throw new Error(t+" contains an invalid key ("+o+") "+Gn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);K1(r,o),th(t,l,r),q1(r)}),i&&s)throw new Error(t+' contains ".value" child '+Gn(r)+" in addition to actual children.")}},sy=function(t,e,n,r){if(!(r&&n===void 0)&&!iy(n))throw new Error(_d(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sy(t,e,n,r)},AN=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ON=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ry(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!RN(n))throw new Error(_d(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Dd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function oy(t,e,n){nh(t,n),ly(t,r=>Dd(r,e))}function en(t,e,n){nh(t,n),ly(t,r=>vt(r,e)||vt(e,r))}function ly(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(DN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function DN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();tr&&Le("event: "+n.toString()),mi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="repo_interrupt",MN=25;class FN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yl(),this.transactionQueueTree_=new Zd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function UN(t,e,n){if(t.stats_=Od(t.repoInfo_),t.forceRestClient_||_1())t.server_=new vl(t.repoInfo_,(r,i,s,o)=>{Lp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Dp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Kt(t.repoInfo_,e,(r,i,s,o)=>{Lp(t,r,i,s,o)},r=>{Dp(t,r)},r=>{BN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=S1(t.repoInfo_,()=>new wT(t.stats_,t.server_)),t.infoData_=new mT,t.infoSyncTree_=new xp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Zl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ih(t,"connected",!1),t.serverSyncTree_=new xp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);en(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function zN(t){const n=t.infoData_.getNode(new J(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rh(t){return yN({timestamp:zN(t)})}function Lp(t,e,n,r,i){t.dataUpdateCount++;const s=new J(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=al(n,u=>Te(u));o=pN(t.serverSyncTree_,s,a,i)}else{const a=Te(n);o=fN(t.serverSyncTree_,s,a,i)}else if(r){const a=al(n,u=>Te(u));o=cN(t.serverSyncTree_,s,a)}else{const a=Te(n);o=Zl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=na(t,s)),en(t.eventQueue_,l,o)}function Dp(t,e){ih(t,"connected",e),e===!1&&$N(t)}function BN(t,e){Je(e,(n,r)=>{ih(t,n,r)})}function ih(t,e,n){const r=new J("/.info/"+e),i=Te(n);t.infoData_.updateSnapshot(r,i);const s=Zl(t.infoSyncTree_,r,i);en(t.eventQueue_,r,s)}function ay(t){return t.nextWriteId_++}function WN(t,e,n,r,i){sh(t,"set",{path:e.toString(),value:n,priority:r});const s=rh(t),o=Te(n,r),l=Gd(t.serverSyncTree_,e),a=Zv(o,l,s),u=ay(t),c=Qv(t.serverSyncTree_,e,a,u,!0);nh(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const y=h==="ok";y||Ye("set at "+e+" failed: "+h);const v=Jn(t.serverSyncTree_,u,!y);en(t.eventQueue_,e,v),HN(t,i,h,_)});const d=fy(t,e);na(t,d),en(t.eventQueue_,d,[])}function $N(t){sh(t,"onDisconnectEvents");const e=rh(t),n=yl();oc(t.onDisconnect_,H(),(i,s)=>{const o=SN(i,s,t.serverSyncTree_,e);bv(n,i,o)});let r=[];oc(n,H(),(i,s)=>{r=r.concat(Zl(t.serverSyncTree_,i,s));const o=fy(t,i);na(t,o)}),t.onDisconnect_=yl(),en(t.eventQueue_,H(),r)}function jN(t,e,n){let r;F(e._path)===".info"?r=Ap(t.infoSyncTree_,e,n):r=Ap(t.serverSyncTree_,e,n),oy(t.eventQueue_,e._path,r)}function bp(t,e,n){let r;F(e._path)===".info"?r=hc(t.infoSyncTree_,e,n):r=hc(t.serverSyncTree_,e,n),oy(t.eventQueue_,e._path,r)}function VN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(bN)}function sh(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function HN(t,e,n,r){e&&mi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function uy(t,e,n){return Gd(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function oh(t,e=t.transactionQueueTree_){if(e||ra(t,e),gi(e)){const n=dy(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&GN(t,Ks(e),n)}else ty(e)&&ta(e,n=>{oh(t,n)})}function GN(t,e,n){const r=n.map(u=>u.currentWriteId),i=uy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];k(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=He(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{sh(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Jn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ra(t,eh(t.transactionQueueTree_,e)),oh(t,t.transactionQueueTree_),en(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)mi(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ye("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}na(t,e)}},o)}function na(t,e){const n=cy(t,e),r=Ks(n),i=dy(t,n);return KN(t,i,r),r}function KN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=He(n,a.path);let c=!1,d;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Jn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=MN)c=!0,d="maxretry",i=i.concat(Jn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=uy(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){th("transaction failed: Data returned ",_,a.path);let y=Te(_);typeof _=="object"&&_!=null&&nn(_,".priority")||(y=y.updatePriority(h.getPriority()));const S=a.currentWriteId,p=rh(t),f=Zv(y,h,p);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=f,a.currentWriteId=ay(t),o.splice(o.indexOf(S),1),i=i.concat(Qv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Jn(t.serverSyncTree_,S,!0))}else c=!0,d="nodata",i=i.concat(Jn(t.serverSyncTree_,a.currentWriteId,!0))}en(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}ra(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)mi(r[l]);oh(t,t.transactionQueueTree_)}function cy(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&gi(r)===void 0;)r=eh(r,n),e=Z(e),n=F(e);return r}function dy(t,e){const n=[];return hy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function hy(t,e,n){const r=gi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ta(e,i=>{hy(t,i,n)})}function ra(t,e){const n=gi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ey(e,n.length>0?n:void 0)}ta(e,r=>{ra(t,r)})}function fy(t,e){const n=Ks(cy(t,e)),r=eh(t.transactionQueueTree_,e);return IN(r,i=>{Qa(t,i)}),Qa(t,r),ny(r,i=>{Qa(t,i)}),n}function Qa(t,e){const n=gi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ey(e,void 0):n.length=s+1,en(t.eventQueue_,Ks(e),i);for(let o=0;o<r.length;o++)mi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function QN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ye(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mp=function(t,e){const n=YN(t),r=n.namespace;n.domain==="firebase.com"&&Zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||a1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new J(n.pathString)}},YN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=qN(t.substring(c,d)));const h=QN(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class my{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:kv(this._path)}get ref(){return new rn(this._repo,this._path)}get _queryIdentifier(){const e=yp(this._queryParams),n=xd(e);return n==="{}"?"default":n}get _queryObject(){return yp(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof lh))return!1;const n=this._repo===e._repo,r=Dd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+H1(this._path)}}class rn extends lh{constructor(e,n){super(e,n,new Ud,!1)}get parent(){const e=Nv(this._path);return e===null?null:new rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ts{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new J(e),r=Nl(this.ref,e);return new Ts(this._node.getChild(n),r,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ts(i,Nl(this.ref,r),de)))}hasChild(e){const n=new J(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gy(t,e){return t=Xe(t),t._checkNotDeleted("ref"),e!==void 0?Nl(t._root,e):t._root}function Nl(t,e){return t=Xe(t),F(t._path)===null?xN("child","path",e,!1):sy("child","path",e,!1),new rn(t._repo,me(t._path,e))}function XN(t,e){t=Xe(t),AN("set",t._path),PN("set",e,t._path,!1);const n=new Hl;return WN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class ah{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new py("value",this,new Ts(e.snapshotNode,new rn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new my(this,e,n):null}matches(e){return e instanceof ah?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class uh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new my(this,e,n):null}createEvent(e,n){k(e.childName!=null,"Child events should have a childName.");const r=Nl(new rn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new py(e.type,this,new Ts(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof uh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ZN(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{bp(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new JN(n,s||void 0),l=e==="value"?new ah(o):new uh(e,o);return jN(t._repo,t,l),()=>bp(t._repo,t,l)}function eR(t,e,n,r){return ZN(t,"value",e,n,r)}tN(rn);lN(rn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="FIREBASE_DATABASE_EMULATOR_HOST",pc={};let nR=!1;function rR(t,e,n,r){t.repoInfo_=new gv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function iR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mp(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[tR]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Mp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Gr(Gr.OWNER):new y1(t.name,t.options,e);ON("Invalid Firebase Database URL",o),z(o.path)||Zt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=oR(l,t,c,new v1(t.name,n));return new lR(d,t)}function sR(t,e){const n=pc[e];(!n||n[t.key]!==t)&&Zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),VN(t),delete n[t.key]}function oR(t,e,n,r){let i=pc[e.name];i||(i={},pc[e.name]=i);let s=i[t.toURLString()];return s&&Zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new FN(t,nR,n,r),i[t.toURLString()]=s,s}class lR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(UN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rn(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zt("Cannot call "+e+" on a deleted database.")}}function aR(t=S_(),e){const n=wd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=PS("database");r&&uR(n,...r)}return n}function uR(t,e,n,r={}){t=Xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Gr(Gr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:AS(r.mockUserToken,t.app.options.projectId);s=new Gr(o)}rR(i,e,n,s)}/**
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
 */function cR(t){r1(bs),ri(new lr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return iR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),On(np,rp,t),On(np,rp,"esm2017")}Kt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};cR();const dR={apiKey:"AIzaSyB4xd0DDFMNya4WYjEhjsKUUNmC8xuzpSI",authDomain:"fir-frontend-33ada.firebaseapp.com",projectId:"fir-frontend-33ada",storageBucket:"fir-frontend-33ada.appspot.com",messagingSenderId:"42334799513",appId:"1:42334799513:web:a9201fecda715da1a51a08",databaseURL:"https://fir-frontend-33ada-default-rtdb.europe-west1.firebasedatabase.app/"},_y=E_(dR),wn=e1(_y),vy=aR(_y);function hR(t,e){XN(gy(vy,"users/"+t),e)}const fR=({setBuyBtnActive:t,setGamesForCart:e,setWishlistBtnActive:n,setWishList:r})=>m("button",{onClick:()=>{t(!1),n(!1),BI(wn).then(()=>{e([])}).then(()=>{r([])}).catch(s=>{})},className:"gaming__log-out-btn",children:"Log Out"}),pR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYklEQVR4nO3cUUoDMRSF4buJXHT/OzF0A+2Dy1ECI0jpJJPc0yn0/h8URJ0+HPqD2jFmAAAAEb49sKCY2dXMvs3sc+UJMivbeD/bgxEntGRv23C3u4/JeeKV1151Hw8+R84T4+19jREH2f6lejGzOvie9LwzTBvv68DQaZVOtkevSZuzH8h25rpUfCLbo9elURayjVz3Vpxs15FtANkGkG0A2QaQbQDZBpBtANkGOD8k68dr+N12gGwDnGz14zVkO0C2AU62+vEash0o/CV5nZOtfryGbAcK2a5zsn3OgLXzvm3vupTK4m0U3H7xDyMK+ESW3JIWHJFb0jrIWcDJ+bwRK3eY7iNnASfn80as5LyPnAWcnM8bsZLzPnIWIGcBchYgZwFyFiBnAXIWIGcBchYgZwFyflHOvHEfyJl/ug6MyHiBERkvMCLjTeLwsScdf5fylA7VAYyMt4gjQAEAsGx+AZaLoGVM1F0LAAAAAElFTkSuQmCC";function mR({mainMenuIsClosed:t,setMainMenuIsClosed:e,userIsLogedIn:n,setBuyBtnActive:r,setGamesForCart:i,setWishlistBtnActive:s,wishList:o,setWishList:l}){const a=w.useRef(null),u=a.current,d=ci().pathname,h=(p,f=u)=>{p==="||"&&(d==="/register"||d==="/login")&&(f.classList.remove("gaming__navbar--big-position-static"),f.classList.add("gaming__navbar--sm-position-fixed"),f.classList.add("gaming__navbar--big-position-fixed")),p==="&&"&&d!=="/register"&&d!=="/login"&&(f.classList.add("gaming__navbar--big-position-static"),f.classList.add("gaming__navbar--sm-position-fixed"),f.classList.remove("gaming__navbar--big-position-fixed"))};window.onload=()=>{const p=document.querySelector("nav");h("||",p),h("&&",p)},u!==null&&h("||"),u!==null&&h("&&");function _(){u.classList.remove("gaming__navbar-opened"),e(!0)}const v=ES().map(p=>N(_S,{className:({isActive:f})=>f?"gaming__navbar-link-active":null,to:`${p.destination}`,children:[m("ion-icon",{name:`${p.iconName}`}),N("li",{children:[p.text," ",p.text==="Wish List"?`(${o.length})`:null]})]},St()));return N("nav",{ref:a,className:"gaming__navbar ",children:[!n&&N("div",{className:"gaming__navbar-account",children:[m(yS,{}),m(wS,{})]}),n&&m("div",{className:"gaming__navbar-account",children:m(fR,{setGamesForCart:i,setBuyBtnActive:r,setWishlistBtnActive:s,setWishList:l})}),t?null:m("button",{onClick:_,className:"gaming__navbar-close-btn btn",children:m("img",{className:"gaming__navbar-close-icon",src:pR})}),m("ul",{children:v}),m("hr",{})]})}const mc=new Map,_o=new WeakMap;let Fp=0,gR;function _R(t){return t?(_o.has(t)||(Fp+=1,_o.set(t,Fp.toString())),_o.get(t)):"0"}function vR(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?_R(t.root):t[e]}`).toString()}function yR(t){let e=vR(t),n=mc.get(e);if(!n){const r=new Map;let i;const s=new IntersectionObserver(o=>{o.forEach(l=>{var a;const u=l.isIntersecting&&i.some(c=>l.intersectionRatio>=c);t.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(a=r.get(l.target))==null||a.forEach(c=>{c(u,l)})})},t);i=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:r},mc.set(e,n)}return n}function wR(t,e,n={},r=gR){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:i,observer:s,elements:o}=yR(n);let l=o.get(t)||[];return o.has(t)||o.set(t,l),l.push(e),s.observe(t),function(){l.splice(l.indexOf(e),1),l.length===0&&(o.delete(t),s.unobserve(t)),o.size===0&&(s.disconnect(),mc.delete(i))}}function ER({threshold:t,delay:e,trackVisibility:n,rootMargin:r,root:i,triggerOnce:s,skip:o,initialInView:l,fallbackInView:a,onChange:u}={}){var c;const[d,h]=w.useState(null),_=w.useRef(),[y,v]=w.useState({inView:!!l,entry:void 0});_.current=u,w.useEffect(()=>{if(o||!d)return;let g;return g=wR(d,(E,C)=>{v({inView:E,entry:C}),_.current&&_.current(E,C),C.isIntersecting&&s&&g&&(g(),g=void 0)},{root:i,rootMargin:r,threshold:t,trackVisibility:n,delay:e},a),()=>{g&&g()}},[Array.isArray(t)?t.toString():t,d,i,r,s,o,n,a,e]);const S=(c=y.entry)==null?void 0:c.target,p=w.useRef();!d&&S&&!s&&!o&&p.current!==S&&(p.current=S,v({inView:!!l,entry:void 0}));const f=[h,y.inView,y.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}const SR=()=>{const{ref:t,inView:e}=ER();return(()=>{const r=document.querySelector(".gaming__scroll-up-arrow");r&&(e?r.classList.remove("gaming__scroll-up-arrow-hidden"):r.classList.add("gaming__scroll-up-arrow-hidden"))})(),m("footer",{ref:t,children:N("main",{className:"gaming__footer-main-container",children:[N("ul",{className:"gaming__footer-container",children:[m("li",{children:m(Ae,{to:"/",children:"Home"})}),m("li",{children:m(Ae,{to:"/login",children:"Go to login"})}),m("li",{children:m(Ae,{to:"/register",children:"Go to register"})})]}),N("ul",{className:"gaming__footer-container",children:[m("li",{children:m(Ae,{to:"/contact",children:"Contact"})}),m("li",{children:m(Ae,{to:"/shop",children:"Games"})})]}),N("ul",{className:"gaming__footer-container-social",children:[m("li",{children:m(Ae,{to:"https://ro-ro.facebook.com/",children:m("ion-icon",{class:"gaming__footer-social-icon",name:"logo-facebook"})})}),m("li",{children:m(Ae,{to:"https://www.instagram.com/",children:m("ion-icon",{class:"gaming__footer-social-icon",name:"logo-instagram"})})}),m("li",{children:m(Ae,{to:"https://twitter.com/?lang=ro",children:m("ion-icon",{class:"gaming__footer-social-icon",name:"logo-twitter"})})})]})]})})};function CR(){return N("svg",{className:"gaming__open-nav-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[m("title",{children:"Grid"}),m("rect",{x:"48",y:"48",width:"176",height:"176",rx:"20",ry:"20",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}),m("rect",{x:"288",y:"48",width:"176",height:"176",rx:"20",ry:"20",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}),m("rect",{x:"48",y:"288",width:"176",height:"176",rx:"20",ry:"20",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}),m("rect",{x:"288",y:"288",width:"176",height:"176",rx:"20",ry:"20",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"})]})}function IR({mainMenuIsClosed:t,setMainMenuIsClosed:e,filterPanelIsOpened:n}){const r=w.useRef(null);function i(){if(!r.current)return;const l=document.querySelectorAll("rect"),a=document.querySelector(".gaming__navbar");r.current.classList.add("menu-shrink");let u=[0,.2,.3,.4];l.forEach((c,d)=>{n?c.style.animation=`shrink-rect-left 0.25s ${u[d]}s ease-in-out forwards`:c.style.animation=`shrink-rect-left 0.25s ${u[d]}s ease-in-out forwards`}),r.current.addEventListener("animationend",function(c){c.target===this&&(e(!1),a.classList.add("gaming__navbar-opened"))})}function s(){i()}return(()=>{r.current&&(n?(r.current.classList.remove("gaming__display-menu-btn"),r.current.classList.add("gaming__hide-menu-btn")):(r.current.classList.remove("gaming__hide-menu-btn"),r.current.classList.add("gaming__display-menu-btn")))})(),t?m("button",{ref:r,onClick:s,className:"gaming__open-nav-btn btn",children:m(CR,{})}):null}const kR=({mainMenuIsClosed:t,setMainMenuIsClosed:e,filterPanelIsOpened:n,userIsLogedIn:r,setBuyBtnActive:i,setGamesForCart:s,setWishlistBtnActive:o,wishList:l,setWishList:a})=>N(w.Fragment,{children:[m("div",{className:"gaming__menus-container",children:m(IR,{filterPanelIsOpened:n,mainMenuIsClosed:t,setMainMenuIsClosed:e})}),m(mR,{setBuyBtnActive:i,setWishlistBtnActive:o,userIsLogedIn:r,mainMenuIsClosed:t,setMainMenuIsClosed:e,setGamesForCart:s,wishList:l,setWishList:a}),m(aS,{}),m(SR,{})]});const Up=""+new URL("heroImg-edc45b67.webp",import.meta.url).href,TR=""+new URL("logo-eb8fcd62.svg",import.meta.url).href;function NR(){return m("section",{className:"gaming__hero-section",children:N("div",{className:"gaming__hero-container",children:[m("img",{className:"gaming__hero-img-big",src:Up}),N("header",{children:[N("div",{className:"gaming__hero-heading-container",children:[m("img",{className:"gaming__logo",src:TR}),m("h1",{className:"gaming__hero-heading",children:"Retro Gaming"})]}),m("p",{className:"gaming__hero-text",children:"Welcome to Retro Gaming World, we specialize in selling classic and retro games for a variety of platforms, including the Nintendo Entertainment System, Super Nintendo Entertainment System, Sega Genesis, and more."}),m("p",{className:"gaming__hero-text",children:"At Retro Gaming World, we believe that every gamer should have the opportunity to experience the nostalgia and excitement of retro gaming. That's why we offer a wide selection of games at affordable prices, so you can relive your childhood memories or discover new favorites without breaking the bank. Our inventory is constantly updating, so be sure to check back often for new arrivals."}),m(Ae,{className:"gaming__hero-link",to:"/shop",children:m("button",{className:"gaming__hero-btn",children:"See Our Games"})})]}),m("img",{className:"gaming__hero-img-sm",src:Up})]})})}const RR=({mainMenuIsClosed:t,games:e,setSliderGames:n})=>{const r=w.useRef(null),i=w.useRef(null),[s,o]=w.useState(null),[l,a]=w.useState(0),[u,c]=w.useState(0),d=w.useRef(null),h=()=>(d.current||(d.current=new Map),d.current);w.useEffect(()=>{(async()=>{const E=await(await fetch("https://retro-gaming-slider-games-server-production.up.railway.app/")).json();n(E)})()},[]);function _(){return e.length===0?void 0:e.map((g,E)=>{const C=g.imgUrl,T=g.id;return m("figure",{ref:R=>{const x=h();R&&x.set(E,R)},"data-gameid":T,className:"gaming__feature-img-container",children:m("img",{alt:"game",src:C,className:"gaming__feature-slider-img"})},T)})}const y=_();w.useEffect(()=>{if(!d.current)return;const f=d.current.get(u);if(f){const g=f.dataset.gameid;o(g)}},[d.current,e,u]),w.useEffect(()=>{if(!d.current||!d.current.size)return;(()=>{const g=d.current.get(0).getBoundingClientRect().width;for(let E=0;E<d.current.size;E++)d.current.get(E).style.left=`${g*E}px`})()},[d.current,e]),w.useEffect(()=>{if(!d.current||!r||d.current.size-1<0||u>d.current.size-1)return;let f=setInterval(()=>v(),2500);r.current.addEventListener("mouseenter",()=>{clearInterval(f)}),r.current.addEventListener("mouseleave",()=>{f=setInterval(()=>v(),2500)})},[d.current,t]);function v(){a(f=>f-100),c(f=>f+1)}function S(f){u===0?(c(f),a(-`${f*100}`)):u>0&&(c(g=>g-1),a(g=>g+100))}w.useEffect(()=>{if(!d.current)return;const f=d.current.size-1;u>f&&(a(0),c(0)),d.current.forEach(g=>{g.style.transform=`translateX(${l}%)`})},[d.current,u]);const p=f=>{const g=d.current.size-1;f.target.parentElement.id==="gaming__feature-move-slider-prev"?S(g):v()};return m(w.Fragment,{children:N("section",{className:"gaming__feature-section",children:[m("header",{className:"gaming__feature-header",children:m("h1",{className:"gaming__feature-heading",children:"The games that make you feel nostalgic"})}),N("div",{className:"gaming__feature-details-container",children:[N("div",{className:"gaming__feature-details",children:[N("div",{className:"gaming__feature-detail-container gaming__feature-variety-details",children:[m("ion-icon",{className:"gaming__feature-detail-icon",name:"infinite"}),m("p",{className:"gaming__feature-detail",children:"Large variety"}),m("p",{className:"gaming__feature-text",children:"We have 50+ games in our list from which you can choose"})]}),N("div",{className:"gaming__feature-detail-container gaming__feature-genres-details",children:[m("ion-icon",{name:"layers"}),m("p",{className:"gaming__feature-detail",children:"Different genres"}),m("p",{className:"gaming__feature-text",children:"Classic arcade games, platformers, RPGs, and more."})]}),N("div",{className:"gaming__feature-detail-container gaming__feature-about-details",children:[m("ion-icon",{name:"checkbox"}),m("p",{className:"gaming__feature-detail",children:"Carefully selected"}),m("p",{className:"gaming__feature-text",children:"Each game is carefully selected and curated to provide an authentic and nostalgic gaming experience for our users."})]})]}),N("div",{ref:r,className:"gaming__feature-slider",children:[m("button",{onClick:f=>{p(f)},id:"gaming__feature-move-slider-prev",className:"gaming__feature-move-slider-left-btn gaming__move-btn",children:m("ion-icon",{name:"arrow-back"})}),m("button",{onClick:f=>{p(f)},className:"gaming__feature-move-slider-right-btn gaming__move-btn",children:m("ion-icon",{name:"arrow-forward"})}),m("div",{className:"gaming__feature-game-cta-container",children:m(Ae,{to:`/shop/${s}`,children:m("button",{className:"gaming__feature-game-page-btn",children:"See Game"})})}),m("div",{ref:i,className:"gaming__feature-slides-container",children:y})]})]})]})})};const PR=({item:t})=>{const e=n=>{let r=n.target;r.nodeName!="BUTTON"&&(r=r.parentElement);const i=document.querySelectorAll(".gaming__faq-answer"),s=r.firstChild,o=document.querySelectorAll(".gaming__faq-down-arrow-icon"),l=r.parentElement.nextElementSibling;i.forEach((u,c)=>{if(u!=l){const d=o[c];u.classList.add("gaming__faq-answer-hidden"),d.style.transform="rotate(0deg)"}}),l.classList.toggle("gaming__faq-answer-hidden"),l.classList.contains("gaming__faq-answer-hidden")?s.style.transform="rotate(0deg)":s.style.transform="rotate(180deg)"};return N("div",{className:"gaming__faq-container",children:[N("div",{className:"gaming__question-container",children:[m("p",{className:"gaming__faq-question",children:t.q}),m("button",{className:"gaming__faq-btn",onClick:n=>e(n),children:m("ion-icon",{class:"gaming__faq-down-arrow-icon",name:"chevron-down-outline"})})]}),m("p",{className:"gaming__faq-answer gaming__faq-answer-hidden",children:t.a})]})},xR=()=>m("section",{className:"gaming__faq-section",children:N("main",{className:"gaming__faq-main-container",children:[m("p",{className:"gaming__faq-text",children:"FAQ"}),[{q:"Q: When do I receive my product?",a:"A: It will take between 2-3 working days"},{q:"Q: Can the product be returned?",a:"A: Yes, you can return it in the first 48 hours after we get notified about the receiving of the product"},{q:"Q: You only sell products through online store or is there a physycal one?",a:"A: At the moment orders can only be placed online"}].map(e=>m(PR,{item:e},St()))]})}),AR=({mainMenuIsClosed:t,setMainMenuIsClosed:e,games:n,setSliderGames:r})=>N(w.Fragment,{children:[m(NR,{mainMenuIsClosed:t,setMainMenuIsClosed:e}),m(RR,{mainMenuIsClosed:t,games:n,setSliderGames:r}),m(xR,{})]}),yy=t=>{const e=[];for(let n=0;n<t.length;n++){const r={...t[n]},i=r.rating;r.isCopy=!0,i<=20?(r.starRating="1 star",r.price="10$"):i>20&&i<=40?(r.starRating="2 stars",r.price="10$"):i>40&&i<=60?(r.starRating="3 stars",r.price="15$"):i>60&&i<=80?(r.starRating="4 stars",r.price="20$"):(r.starRating="5 stars",r.price="22$"),e.push(r)}return e};const OR=({setFilteredGamesBySearchBar:t,gamesData:e})=>{const n=w.useRef(null),r=i=>{let s=[];const o=i.target.value.toLowerCase(),l=o.length;if(o===""&&(s=[],t(s)),!(e.length===0||!o)){for(let a=0;a<e.length;a++){const u=e[a],c=u.name.toLowerCase();o===c.slice(0,l)&&s.push(u)}t(s)}};return N("div",{ref:n,className:"gaming__searchbar",children:[m("input",{onChange:i=>{r(i)},placeholder:"Search Game",onFocus:()=>{n.current.classList.add("add-shadow")},onBlur:()=>{n.current.classList.remove("add-shadow")},className:"gaming__searchbar-input",type:"text"}),m("ion-icon",{name:"search"})]})};const LR=({setFilterPanelIsOpened:t,setOpenFilterBtnRef:e})=>{const n=w.useRef(null);return m("button",{ref:n,onClick:()=>{n.current.classList.remove("gaming__display-open-btn"),n.current.classList.add("gaming__hide-open-btn"),t(!0),n.current&&e(n)},className:"gaming__open-filter",children:m("ion-icon",{name:"search"})})};const Ya=({updateFilter:t,genresLists:e,ratingLists:n,priceLists:r,getRefForFilters:i,criterion:s,filtersToBeDisplayedRefs:o,ulListsAreOpened:l,setUlListsAreOpened:a,tabWasClickedTwice:u,setTabWasClickedTwice:c,numOfOpenLists:d,setNumOfOpenLists:h,currentTab:_,setCurrentTab:y})=>{const v=w.useRef(null);i(v);const S=f=>{f.stopPropagation();const g=f.target.nextElementSibling===null?f.target.parentElement.nextElementSibling:f.target.nextElementSibling;let E=g.dataset.ulType;y(E),a(C=>({...C,[E]:!C[E]}));for(let C=0;C<o.length;C++)if(o.length>0){if(g===o[C].current)continue;o[C].current.classList.remove("gaming__filter-ul-visible-delayed"),o[C].current.classList.add("gaming__filter-ul-hidden")}d===2?v.current&&(v.current.classList.toggle("gaming__filter-ul-hidden"),v.current.classList.add("gaming__filter-ul-visible-delayed")):v.current&&v.current.classList.toggle("gaming__filter-ul-hidden"),u[E]&&v.current.classList.remove("gaming__filter-ul-visible-delayed");for(const C in l)C!==E&&a(T=>({...T,[C]:!1}))};w.useEffect(()=>{h(1);for(const f in l)l[f]&&h(g=>g+1)},[l]),w.useEffect(()=>{if(_){for(const f in u)_!==f&&c(g=>({...g,[f]:!1}));c(f=>({...f,[_]:!0}))}},[_]);let p;switch(s){case"Genres":p=e;break;case"Rating":p=n;break;case"Price":p=r}return N("div",{className:"gaming__filter-inner-container",children:[m("div",{onClick:S,className:"gaming__filter-name",children:N("p",{children:[" ",s]})}),m("ul",{"data-ul-type":s,onClick:f=>{t(f)},ref:v,className:"gaming__filter-ul-visible gaming__filter-ul-hidden",children:p})]})};const ch=({cartPanelIsOpened:t,setCartPanelIsOpened:e,gamesForCart:n})=>{const r=w.useRef(null);return(()=>{r.current&&(t||n.length===0?(r.current.classList.add("hide-cart-btn"),r.current.classList.remove("display-cart-btn")):(r.current.classList.remove("hide-cart-btn"),r.current.classList.add("display-cart-btn")))})(),m("button",{ref:r,onClick:()=>{e(!0)},className:"gaming__cart-btn",children:m("ion-icon",{name:"cart"})})};const dh=({setCartPanelIsOpened:t,cartPanelIsOpened:e,gamesForCart:n,setGamesForCart:r})=>{const i=w.useRef(null);let s=0;const o=n.map(a=>{const u=a.name,c=a.price,d=parseInt(c),h=a.cover.url;s=s+d;const _=y=>{const v=y.target.dataset.gameid;let S=[];n.find(p=>{p.id!=v&&S.push(p)}),r(S)};return N("article",{className:"gaming__cart-panel-item-container",children:[m("p",{className:"gaming__cart-panel-item-text gaming__cart-panel-item-name",children:u}),N("div",{className:"gaming__cart-panel-item",children:[m("img",{src:h}),N("div",{className:"gaming__cart-panel-pqr",children:[N("p",{className:"gaming__cart-panel-item-text",children:["quantity:",m("span",{className:"gaming__cart-panel-span",children:"1"})]}),N("p",{className:"gaming__cart-panel-item-text",children:["price:",m("span",{className:"gaming__cart-panel-span",children:c})]}),m("button",{onClick:y=>{_(y)},"data-gameid":a.id,className:"gaming__cart-panel-item-remove-btn",children:"Remove"})]})]})]},St())});return(()=>{i.current&&(e?i.current.classList.add("opened-cart-panel"):i.current.classList.remove("opened-cart-panel"))})(),N("div",{ref:i,className:"gaming__cart-panel",children:[m("button",{onClick:()=>{t(!1)},className:"gaming__cart-panel-close-btn",children:m("ion-icon",{name:"close"})}),m("div",{className:"gaming__cart-panel-items",children:o}),N("p",{className:"gaming__cart-panel-total-price",children:["Total: ",s,"$"]})]})};const DR=({setFilterPanelIsOpened:t,openFilterBtnRef:e})=>m("button",{onClick:()=>{e.current.classList.remove("gaming__hide-open-btn"),e.current.classList.add("gaming__display-open-btn"),t(!1)},className:"gaming__close-filter",children:m("ion-icon",{name:"close"})});const wy=({setBuyBtnActive:t,gamesForCart:e,setGamesForCart:n,game:r,userIsLogedIn:i})=>m("button",{onClick:()=>{let o=!1;const l=r.id;for(let a=0;a<e.length;a++){const c=e[a].id;l===c&&(o=!0)}i&&!o&&n(a=>[...a,r]),t(!0)},className:"gaming__buy-game-btn",children:"Buy"}),Ey=t=>{const[e,n]=w.useState();w.useEffect(()=>{V_(wn,i=>{n(!!i)})},[]);const r=i=>{i.stopPropagation();const s=i.target.parentElement,o=+s.dataset.gameid,l=t.gamesData.find(u=>u.id===o);if(!l)return;s.classList.add("gaming__heart-active"),t.setWishList(u=>[...u,l]);let a=!1;for(let u=0;u<t.wishList.length;u++)t.wishList[u].id==o&&(a=!0);if(a){const u=t.wishList.filter(c=>c.id!=o);t.setWishList(u)}};return N("div",{className:"gaming__game-container",children:[N("div",{className:"gaming__game-fav-container",children:[m("div",{className:"gaming__stars-container",children:t.starIcons}),m("button",{"data-gameid":t.game.id,onClick:i=>{if(!e){t.setWishlistBtnActive(!0);return}r(i)},className:"gaming__heart-btn",children:m("ion-icon",{name:"heart"})})]}),m("img",{className:"gaming__game-img",src:t.gameCover}),m("p",{className:"gaming__game-name",children:t.gameName}),N("div",{className:"gaming__game-actions-container",children:[m(Ae,{to:`/shop/${t.game.id}`,children:m("button",{className:"gaming__about-game-btn",children:"About Game"})}),m(wy,{userIsLogedIn:t.userIsLogedIn,game:t.game,gamesForCart:t.gamesForCart,setGamesForCart:t.setGamesForCart,setBuyBtnActive:t.setBuyBtnActive}),m("span",{className:"gaming__game-price",children:t.gamePrice})]})]})},bR=({gamesData:t,setGamesData:e,lastPage:n,filterPanelIsOpened:r,setFilterPanelIsOpened:i,openFilterBtnRef:s,setOpenFilterBtnRef:o,displayOverlayGamesNotFound:l,setDisplayOverlayGamesNotFound:a,setCartPanelIsOpened:u,cartPanelIsOpened:c,setBuyBtnActive:d,gamesForCart:h,setGamesForCart:_,userIsLogedIn:y,wishList:v,setWishList:S,setWishlistBtnActive:p})=>{const[f,g]=w.useState([]),[E,C]=w.useState({}),[T,R]=w.useState(0),[x,j]=w.useState([]),[O,ve]=w.useState([]),[W,Q]=w.useState([]),[dt,_i]=w.useState([]),[sn,$n]=w.useState(null),[P,b]=w.useState(null),[M,X]=w.useState({Genres:!1,Rating:!1,Price:!1}),[ae,bt]=w.useState({Genres:!1,Rating:!1,Price:!1}),[ht,on]=w.useState(1),[Tt,wr]=w.useState([]),[Ty,hh]=w.useState({}),qs=w.useRef(null),Ny=["1 star","2 stars","3 stars","4 stars","5 stars"],Ry=["10$","15$","20$","22$"],ia=x.length>0,Py=O.length>0;w.useEffect(()=>{if(t.length===0||t.length>0&&t[0].isCopy)return;const V=yy(t);e(V)},[t]),w.useEffect(()=>{(async()=>{const K=await(await fetch("https://retro-gaming-genres-games-server-production.up.railway.app/")).json();g(K)})()},[]),w.useEffect(()=>{(async()=>{const K=await(await fetch(`https://retro-gaming-games-server-production.up.railway.app/gamesData?game=${T}`)).json();e(K)})()},[T]);const xy=V=>{if(!V.target.closest(".gaming__filter-ul-visible")){on(1),b(null),X({Genres:!1,Rating:!1,Price:!1}),bt({Genres:!1,Rating:!1,Price:!1});for(let G=0;G<dt.length;G++)dt[G].current.classList.add("gaming__filter-ul-hidden"),dt[G].current.classList.remove("gaming__filter-ul-visible-delayed")}},sa=(V,G)=>{const K={};return{lists:V.map((ue,Me)=>(K[`${G}-${Me}`]=!1,N("li",{children:[ue,m("input",{checked:Ty[`${G}-${Me}`],onChange:Nt=>{const $e=Nt.target.dataset.inputTypeId;hh(ye=>({...ye,[$e]:!ye[$e]}))},"data-input-type-id":`${G}-${Me}`,"data-i":Me,"data-filter-item":ue,"data-filter-type":G,type:"checkbox"})]},St()))),templates:K}},{lists:Ay,templates:Oy}=sa(f,"genre"),{lists:Ly,templates:Dy}=sa(Ny,"rating"),{lists:by,templates:My}=sa(Ry,"price");w.useEffect(()=>{hh({...Oy,...Dy,...My})},[]);const oa=V=>{const G=V.target,K=G.checked;if(G.nodeName!="INPUT")return;const We=[G.dataset.filterItem],ue=G.dataset.filterType,Me=[+G.dataset.i],Nt=(Mt,$e)=>{Mt(ye=>{let Ft;return K?Ft=Array.isArray(ye[ue])?ye[ue]:[]:Ft=[],{...ye,[ue]:[...Ft,...$e]}})};if(!K){const Mt=W[ue].filter(ye=>ye!==Me[0]),$e=E[ue].filter(ye=>ye!==We[0]);Nt(C,$e),Nt(Q,Mt)}E[ue]&&E[ue].includes(We[0])||(Nt(C,We),Nt(Q,Me))};w.useEffect(()=>{(()=>{if(t.length===0)return;let G=[],K;for(let We=0;We<t.length;We++){K=null;const ue=t[We],Me=ue.genres,Nt=ue.starRating,Mt=ue.price,$e={genre:[],rating:[],price:[]};if(Me){if(E.hasOwnProperty("genre"))for(let ye=0;ye<Me.length;ye++){const Ft=Me[ye].name;$e.genre.push(Ft)}E.hasOwnProperty("rating")&&$e.rating.push(Nt),E.hasOwnProperty("price")&&$e.price.push(Mt);for(const ye in E){if(K===!1)break;for(let Ft=0;Ft<E[ye].length;Ft++)if($e[ye].includes(E[ye][Ft]))K=!0;else{K=!1;break}}K&&G.push(ue)}}j(G)})()},[t,W]),(()=>{qs.current&&(r?qs.current.classList.add("gaming__filter-opened"):qs.current.classList.remove("gaming__filter-opened"))})(),w.useEffect(()=>()=>{i(!1)},[]);const Fy=()=>{T!==0&&R(V=>V-1)},Uy=()=>{T!==n&&R(V=>V+1)},Qs=V=>V.length>0&&T>=0&&V.map(K=>{if(!K.starRating)return;const We=+K.starRating.slice(0,1),ue=K.cover.url.replace("t_thumb","t_cover_big"),Me=K.name.toUpperCase(),Nt=K.price,Mt=[];for(let $e=0;$e<We;$e++)Mt.push(m("ion-icon",{name:"star"},St()));return m(Ey,{gameCover:ue,gameName:Me,gamePrice:Nt,starIcons:Mt,game:K,gamesData:t,userIsLogedIn:y,gamesForCart:h,setGamesForCart:_,setBuyBtnActive:d,wishList:v,setWishList:S,setWishlistBtnActive:p},St())});w.useEffect(()=>{let V;function G(){let K=!1;for(let We in E)if(K=E[We].length>0,K)break;Py?V=Qs(O):ia?(a(!1),V=Qs(x)):K&&!ia?(a(!0),V=Qs([])):V=Qs(t)}G(),wr(V)},[ia,O,t,x,v]),w.useEffect(()=>{const V=document.querySelectorAll(".gaming__heart-btn");for(let G=0;G<V.length;G++){const K=V[G],We=K.dataset.gameid;for(let ue=0;ue<v.length;ue++){if(!v[ue])continue;const Me=v[ue].id;We==Me&&K.classList.add("gaming__heart-active")}}},[v,Tt]),w.useEffect(()=>{$n(document.querySelector(".gaming__menus-container"))},[]);const zy=sn&&hE.createPortal(m(LR,{setFilterPanelIsOpened:i,setOpenFilterBtnRef:o}),sn),la=V=>{w.useEffect(()=>{_i(G=>[...G,V])},[])};return N("section",{onClick:V=>{xy(V)},className:"gaming__shop-section",children:[N("div",{ref:qs,className:"gaming__filter-container",children:[N("div",{className:"gaming__searchbar-container",children:[m(OR,{gamesData:t,setFilteredGamesBySearchBar:ve}),m(DR,{openFilterBtnRef:s,setFilterPanelIsOpened:i})]}),m("p",{children:"Filter By:"}),N("div",{className:"gaming__filters",children:[m(Ya,{criterion:"Genres",updateFilter:oa,genresLists:Ay,getRefForFilters:la,filtersToBeDisplayedRefs:dt,ulListsAreOpened:M,setUlListsAreOpened:X,tabWasClickedTwice:ae,setTabWasClickedTwice:bt,numOfOpenLists:ht,setNumOfOpenLists:on,currentTab:P,setCurrentTab:b}),m(Ya,{criterion:"Rating",updateFilter:oa,ratingLists:Ly,getRefForFilters:la,filtersToBeDisplayedRefs:dt,ulListsAreOpened:M,setUlListsAreOpened:X,tabWasClickedTwice:ae,setTabWasClickedTwice:bt,numOfOpenLists:ht,setNumOfOpenLists:on,currentTab:P,setCurrentTab:b}),m(Ya,{criterion:"Price",updateFilter:oa,priceLists:by,getRefForFilters:la,filtersToBeDisplayedRefs:dt,ulListsAreOpened:M,setUlListsAreOpened:X,tabWasClickedTwice:ae,setTabWasClickedTwice:bt,numOfOpenLists:ht,setNumOfOpenLists:on,currentTab:P,setCurrentTab:b})]}),N("div",{className:"gaming__mobile-pages",children:[m("p",{className:"gaming__mobile-pages-text",children:"Go to page:"}),m("button",{onClick:Fy,className:"gaming__mobile-pages-prev",children:m("ion-icon",{name:"remove"})}),m("input",{value:T.toString(),onChange:V=>{updateCurrentPage(V)},className:"gaming__mobile-pages-input",type:"number"}),m("button",{onClick:Uy,className:"gaming__mobile-pages-next",children:m("ion-icon",{name:"add"})}),m("span",{className:"gaming__mobile-pages-span",children:"/"}),m("span",{className:"gaming__mobile-pages-span",children:n})]})]}),y&&m(dh,{gamesForCart:h,setGamesForCart:_,setCartPanelIsOpened:u,cartPanelIsOpened:c}),y&&m(ch,{gamesForCart:h,cartPanelIsOpened:c,setCartPanelIsOpened:u}),m("main",{className:"gaming__main-container",children:m("div",{className:"gaming__main-content",children:Tt})}),m("button",{onClick:()=>{scroll({top:0,behavior:"smooth"})},className:"gaming__scroll-up-arrow gaming__scroll-up-arrow-hidden",children:m("ion-icon",{name:"arrow-up-outline"})}),zy]})},MR=({gamesData:t,setGamesData:e,lastPage:n,filterPanelIsOpened:r,setFilterPanelIsOpened:i,openFilterBtnRef:s,setOpenFilterBtnRef:o,displayOverlayGamesNotFound:l,setDisplayOverlayGamesNotFound:a,areInitialNumberOfPages:u,setAreInitialNumberOfPages:c,setGameId:d,setCartPanelIsOpened:h,cartPanelIsOpened:_,setBuyBtnActive:y,gamesForCart:v,setGamesForCart:S,userIsLogedIn:p,wishList:f,setWishList:g,setWishlistBtnActive:E})=>m(bR,{gamesData:t,setGamesData:e,lastPage:n,openFilterBtnRef:s,setOpenFilterBtnRef:o,filterPanelIsOpened:r,setFilterPanelIsOpened:i,displayOverlayGamesNotFound:l,setDisplayOverlayGamesNotFound:a,areInitialNumberOfPages:u,setAreInitialNumberOfPages:c,setGameId:d,setCartPanelIsOpened:h,cartPanelIsOpened:_,setBuyBtnActive:y,gamesForCart:v,setGamesForCart:S,userIsLogedIn:p,wishList:f,setWishList:g,setWishlistBtnActive:E});const FR=({gamesData:t,wishList:e,setWishList:n,gamesForCart:r,setGamesForCart:i,setBuyBtnActive:s,userIsLogedIn:o,setWishlistBtnActive:l,cartPanelIsOpened:a,setCartPanelIsOpened:u})=>{const c=()=>e.map(_=>{const y=_.cover.url.replace("t_thumb","t_cover_big"),v=_.name.toUpperCase(),S=_.price,p=+_.starRating.slice(0,1),f=[];for(let g=0;g<p;g++)f.push(m("ion-icon",{name:"star"},St()));return m(Ey,{game:_,gamesData:t,wishList:e,setWishList:n,setWishlistBtnActive:l,starIcons:f,gameCover:y,gameName:v,gamePrice:S,gamesForCart:r,setGamesForCart:i,setBuyBtnActive:s,userIsLogedIn:o},St())});w.useEffect(()=>{const h=document.querySelectorAll(".gaming__heart-btn");for(let _=0;_<h.length;_++){const y=h[_],v=y.dataset.gameid;for(let S=0;S<e.length;S++){const p=e[S].id;v==p&&y.classList.add("gaming__heart-active")}}});const d=c();return m("section",{className:"gaming__wishlist-section",children:N("main",{className:"gaming__main-container",children:[m("div",{className:"gaming__main-content",children:d}),o&&m(dh,{gamesForCart:r,setGamesForCart:i,setCartPanelIsOpened:u,cartPanelIsOpened:a}),o&&m(ch,{gamesForCart:r,cartPanelIsOpened:a,setCartPanelIsOpened:u})]})})},UR=({gamesData:t,wishList:e,setWishList:n,gamesForCart:r,setGamesForCart:i,setBuyBtnActive:s,userIsLogedIn:o,setWishlistBtnActive:l,games:a,cartPanelIsOpened:u,setCartPanelIsOpened:c})=>m(FR,{gamesData:t,wishList:e,setWishList:n,gamesForCart:r,setGamesForCart:i,setBuyBtnActive:s,userIsLogedIn:o,setWishlistBtnActive:l,games:a,cartPanelIsOpened:u,setCartPanelIsOpened:c});const zR=()=>(w.useEffect(()=>{let t;async function e(){const n={lat:45.7589515,lng:21.2194093},{Map:r}=await google.maps.importLibrary("maps"),{AdvancedMarkerView:i}=await google.maps.importLibrary("marker");t=new r(document.getElementById("map"),{zoom:13,center:n,mapId:"contact_map"}),new i({map:t,position:n,title:"Timisoara"})}e()},[]),m("div",{className:"test",id:"map"}));const BR=()=>m("section",{className:"gaming__contact-section",children:N("main",{className:"gaming__contact-main-content",children:[m("div",{className:"gaming__contact-details-container",children:N("ul",{className:"gaming__contact-details-ul",children:[N("li",{children:[m("span",{children:"Phone Number:"})," 07xx-xxx-xxx"]}),N("li",{children:[m("span",{children:"Email:"})," someRandomMail@gmail.com"]}),N("li",{children:[m("span",{children:"Location:"})," Some location"]})]})}),m(zR,{})]})}),WR=()=>m(w.Fragment,{children:m(BR,{})}),Sy=(t,e=300)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{t.apply(globalThis,r)},e)}},Cy=({setUserEmail:t})=>{const e=Sy(n=>{t(n.target.value)});return m("input",{onChange:e,placeholder:"email",className:"gaming__account-form-input",type:"email"})},Iy=({validatePassword:t,userPassword:e,setUserPassword:n})=>{const r=Sy(i=>{n(i.target.value)});return w.useEffect(()=>{t&&t(e)},[e]),m("input",{onChange:i=>{r(i)},placeholder:"pass",className:"gaming__account-form-input",type:"password"})};const $R=()=>{const[t,e]=w.useState(""),[n,r]=w.useState("");return m("div",{className:"gaming__account-container",children:N("form",{onSubmit:async s=>{s.preventDefault();try{const l=(await FI(wn,t,n)).user}catch(o){console.log(o)}},className:"gaming__account-form",children:[m(Cy,{setUserEmail:e}),m(Iy,{setUserPassword:r}),m("button",{type:"submit",className:"gaming__account-login-btn",children:"Log In"})]})})};const ky=({redirectSecondsFromLogin:t,redirectSecondsFromRegister:e})=>N("div",{className:"gaming__redirect-to-shop-overlay",children:[t&&N("p",{className:"gaming__redirect-to-shop-overlay-text",children:["You will be redirected to the shoping page in"," ",t," ",t===1?"second":"seconds"]}),e&&N("p",{className:"gaming__redirect-to-shop-overlay-text",children:["You will be redirected to the shoping page in"," ",e," ",e===1?"second":"seconds"]})]}),jR=({userIsLogedIn:t})=>{const[e,n]=w.useState(3),r=hd();return w.useEffect(()=>{e===0&&r("/shop"),!(!t||e===0)&&setTimeout(()=>{n(i=>i-1)},1e3)},[t,e]),N(w.Fragment,{children:[!t&&m("section",{className:"gaming__login-section",children:m($R,{})}),t&&e&&m(ky,{redirectSecondsFromLogin:e})]})},VR=()=>{const t={hasNumber:!1,hasUpperCase:!1,hasSpecialChar:!1,minPassLength:7},[e,n]=w.useState(""),[r,i]=w.useState(""),[s,o]=w.useState(t),l=(c,d)=>{o(h=>({...h,[c]:d}))},a=c=>{const d=["!","@","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];for(let y=0;y<c.length;y++){const v=c[y],S=Number(v),p=d.some(function(f){return v===f});S&&l("hasNumber",!0),v===v.toUpperCase()&&!S&&!p&&l("hasUpperCase",!0),p&&l("hasSpecialChar",!0)}const h=()=>{d.some(function(v){return c.includes(v)})||l("hasSpecialChar",!1)},_=(y,v,S)=>{y.test(c)||l(v,S)};return _(/\d/,"hasNumber",!1),_(/[A-Z]/,"hasUpperCase",!1),h(),!!(s.hasNumber&&s.hasUpperCase&&s.hasSpecialChar)};return m("div",{className:"gaming__account-container",children:N("form",{onSubmit:async c=>{if(!(r.length<t.minPassLength)&&a(r)){c.preventDefault();try{const d=await MI(wn,e,r)}catch(d){console.log(d.message)}}},className:"gaming__account-form",children:[m(Cy,{setUserEmail:n}),m(Iy,{validatePassword:a,userPassword:r,setUserPassword:i}),m("button",{className:"gaming__account-register-btn",children:"Create Account"}),m("div",{className:"gaming__account-validation",children:N("ul",{children:[N("li",{className:`gaming__account-validation-li-${s.hasUpperCase?"correct":"wrong"}`,children:[m("span",{children:"→"}),"atleast one upper case character;"]}),N("li",{className:`gaming__account-validation-li-${s.hasNumber?"correct":"wrong"}`,children:[m("span",{children:"→"})," atleast one number character;"]}),N("li",{className:`gaming__account-validation-li-${s.hasSpecialChar?"correct":"wrong"}`,children:[m("span",{children:"→"})," atleast one special character;"]}),N("li",{className:`gaming__account-validation-li-${r.length>=s.minPassLength?"correct":"wrong"}`,children:[m("span",{children:"→"}),"password length must be atleast 7;"]})]})})]})})};const HR=({userIsLogedIn:t})=>{const e=hd(),[n,r]=w.useState(3);return w.useEffect(()=>{n===0&&e("/shop"),!(!t||n===0)&&setTimeout(()=>{r(i=>i-1)},1e3)},[t,n]),N(w.Fragment,{children:[!t&&m("section",{className:"gaming__register-section",children:m(VR,{})}),t&&n&&m(ky,{redirectSecondsFromRegister:n})]})};const GR=({setDisplayOverlayGamesNotFound:t})=>{const e=w.useRef(null),n=window.location.hash;return m(w.Fragment,{children:n==="#/shop"&&m("div",{ref:e,className:"gaming__games-not-found-overlay",children:N("div",{className:"gaming__games-not-found-overlay-container",children:[m("p",{className:"gaming__games-not-found-message",children:"We didn't find any games to match your query"}),m("button",{className:"gaming__games-not-found-close-overlay-btn",onClick:()=>t(!1),children:"OK"})]})})})};const KR=()=>m(Ae,{to:"/login",className:"gaming__redirect-to-login-btn",children:"Log In"});const qR=()=>m(Ae,{to:"/register",className:"gaming__redirect-to-register-btn",children:"Create account"});const QR=({setBuyBtnActive:t,setWishlistBtnActive:e})=>m("button",{onClick:()=>{e(!1),t(!1)},className:"gaming__close-redirect-overlay-btn",children:m("ion-icon",{name:"close"})});const YR=({buyBtnActive:t,setBuyBtnActive:e,wishlistBtnActive:n,setWishlistBtnActive:r})=>m("div",{onClick:()=>{r(!1),e(!1)},className:"gaming__redirect-to-account-backdrop-shadow",children:N("div",{className:"gaming__redirect-to-account-overlay-container",children:[m(QR,{setWishlistBtnActive:r,setBuyBtnActive:e}),N("p",{className:"gaming__redirect-to-account-text",children:["To ",t&&"purchase",n&&"list that game"," please log in or create an account."]}),N("div",{className:"gaming__redirect-to-account-overlay-btns-container",children:[m(KR,{}),m(qR,{})]})]})}),JR=({displayOverlayGamesNotFound:t,setDisplayOverlayGamesNotFound:e,userIsLogedIn:n,buyBtnActive:r,setBuyBtnActive:i,wishlistBtnActive:s,setWishlistBtnActive:o})=>N(w.Fragment,{children:[t&&m(GR,{displayOverlayGamesNotFound:t,setDisplayOverlayGamesNotFound:e}),!n&&(r||s)&&m(YR,{wishlistBtnActive:s,setWishlistBtnActive:o,buyBtnActive:r,setBuyBtnActive:i})]});const XR=({userIsLogedIn:t,setSelectedTab:e,gamesForCart:n,setGamesForCart:r,game:i,setBuyBtnActive:s})=>{const o=w.useRef(null),l=w.useRef(null);return m(w.Fragment,{children:N("div",{className:"gaming__current-game-selections-container",children:[m("button",{ref:o,onClick:a=>{a.target.classList.add("selected-btn"),l.current.classList.remove("selected-btn"),e("about")},className:"gaming__current-game-selection-btn selected-btn",children:"About game"}),m("button",{ref:l,onClick:a=>{a.target.classList.add("selected-btn"),o.current.classList.remove("selected-btn"),e("screenshots")},className:"gaming__current-game-selection-btn",children:"Screenshots"}),m(wy,{userIsLogedIn:t,setBuyBtnActive:s,game:i,gamesForCart:n,setGamesForCart:r})]})})},ZR=({games:t,userIsLogedIn:e,gamesData:n,cartPanelIsOpened:r,setCartPanelIsOpened:i,gamesForCart:s,setGamesForCart:o,setBuyBtnActive:l})=>{const a=()=>{const u=yy(t),[c,d]=w.useState("about");let h;const y=window.location.hash.split("/"),v=+y[y.length-1];for(let W=0;W<u.length;W++){const Q=u[W];if(Q.id===v){h=Q;break}}if(!h)return;const S=h.cover.url.replace("t_thumb","t_720p"),p=+h.starRating.slice(0,1),f=new Date(h.first_release_date*1e3),g=f.toLocaleString("default",{month:"short"}),E=f.getFullYear(),C=f.getDate();let T=[];if(h.screenshots)for(let W=0;W<h.screenshots.length;W++){const Q=h.screenshots[W].url;T.push(Q)}const R=T.map(W=>m("li",{children:m("img",{src:W})},St()));let x=[];for(let W=0;W<p;W++)x.push(m("ion-icon",{name:"star"},St()));let j=[];for(let W=0;W<h.genres.length;W++){const Q=" "+h.genres[W].name;j.push(Q)}let O=[];for(let W=0;W<h.platforms.length;W++){const Q=h.platforms[W].abbreviation;Q&&O.push(Q)}const ve=O.map(W=>m("li",{children:W},St()));return N(w.Fragment,{children:[N("div",{className:"gaming__current-game-details-container",children:[m("img",{className:"gaming__current-game-img",src:S}),m("div",{className:"gaming__current-game-overlay"}),m(XR,{userIsLogedIn:e,game:h,setBuyBtnActive:l,gamesForCart:s,setGamesForCart:o,setSelectedTab:d})]}),c==="about"&&m("div",{className:"gaming__current-game-about-container",children:N("ul",{className:"gaming__current-game-selection-details-ul",children:[N("li",{className:"gaming__current-game-detail",children:[m("span",{children:"Game name:"})," "+h.name]}),N("li",{className:"gaming__current-game-detail",children:[m("span",{children:"Genres:"})," "+j.join(",")]}),N("li",{className:"gaming__current-game-detail",children:[m("span",{children:"Rating:"})," ",x]}),N("li",{className:"gaming__current-game-detail",children:[m("span",{children:"Release date:"})," "+g,"/",C,"/",E]}),N("li",{className:"gaming__current-game-detail-platforms",children:[m("p",{children:"Supported platforms:"}),m("ul",{className:"gaming__current-game-platforms",children:ve})]})]})}),c==="about"&&N("p",{className:"gaming__current-game-detail-summary",children:[m("span",{children:"Game description :"})," ",h.summary]}),c==="screenshots"&&m("div",{className:"gaming__current-game-screenshots-container",children:R})]})};return w.useEffect(()=>{i(!1)},[]),N("section",{className:"gaming__current-game-details-section",children:[m("main",{children:a()}),m(dh,{setGamesForCart:o,gamesForCart:s,cartPanelIsOpened:r,setCartPanelIsOpened:i}),m(ch,{gamesForCart:s,cartPanelIsOpened:r,setCartPanelIsOpened:i})]})};function eP(){const[t,e]=w.useState(!0),[n,r]=w.useState(!1),[i,s]=w.useState(!1),[o,l]=w.useState(null),[a,u]=w.useState(!1),[c,d]=w.useState(!1),[h,_]=w.useState(!1),[y,v]=w.useState(!1),[S,p]=w.useState([]),[f,g]=w.useState([]),[E,C]=w.useState(0),[T,R]=w.useState([]),[x,j]=w.useState([]);return w.useEffect(()=>{(async()=>{const W=await(await fetch("https://retro-gaming-games-server-production.up.railway.app/id-for-last-page")).json();C(W)})()},[]),w.useEffect(()=>{V_(wn,O=>{d(!!O)})},[]),w.useEffect(()=>{if(!c)return;const O=wn.currentUser&&wn.currentUser.uid,ve=gy(vy,"users/"+O);eR(ve,W=>{const Q=W.val(),dt=Q&&Q.gamesForWishList,_i=JSON.parse(dt);Q&&Q.gamesForWishList&&g(_i);const sn=Q&&Q.gamesForCart,$n=JSON.parse(sn);Q&&Q.gamesForCart&&p($n)})},[c]),w.useEffect(()=>{if(!c)return;const O=wn.currentUser.uid;hR(O,{gamesForCart:JSON.stringify(S),gamesForWishList:JSON.stringify(f)})},[S,f]),m(w.Fragment,{children:N(mS,{children:[m(JR,{buyBtnActive:h,setBuyBtnActive:_,userIsLogedIn:c,displayOverlayGamesNotFound:a,setDisplayOverlayGamesNotFound:u,wishlistBtnActive:y,setWishlistBtnActive:v}),m(cS,{children:N(Ut,{path:"",element:m(kR,{setBuyBtnActive:_,setWishlistBtnActive:v,userIsLogedIn:c,setOpenFilterBtnRef:l,setFilterPanelIsOpened:r,filterPanelIsOpened:n,mainMenuIsClosed:t,setMainMenuIsClosed:e,setGamesForCart:p,wishList:f,setWishList:g}),children:[m(Ut,{index:!0,element:m(AR,{games:x,setSliderGames:j,mainMenuIsClosed:t,setMainMenuIsClosed:e})}),m(Ut,{path:"/shop",element:m(MR,{gamesData:T,setGamesData:R,lastPage:E,openFilterBtnRef:o,setOpenFilterBtnRef:l,filterPanelIsOpened:n,setFilterPanelIsOpened:r,displayOverlayGamesNotFound:a,setDisplayOverlayGamesNotFound:u,setCartPanelIsOpened:s,cartPanelIsOpened:i,setBuyBtnActive:_,gamesForCart:S,setGamesForCart:p,userIsLogedIn:c,wishList:f,setWishList:g,setWishlistBtnActive:v})}),m(Ut,{path:"/shop/:gameId",element:m(ZR,{games:x,userIsLogedIn:c,cartPanelIsOpened:i,setCartPanelIsOpened:s,gamesData:T,gamesForCart:S,setGamesForCart:p,setBuyBtnActive:_})}),m(Ut,{path:"/wishlist",element:m(UR,{gamesData:T,gamesForCart:S,setGamesForCart:p,wishList:f,setWishList:g,setBuyBtnActive:_,userIsLogedIn:c,setWishlistBtnActive:v,cartPanelIsOpened:i,setCartPanelIsOpened:s})}),m(Ut,{path:"/contact",element:m(WR,{})}),m(Ut,{path:"/login",element:m(jR,{userIsLogedIn:c})}),m(Ut,{path:"/register",element:m(HR,{userIsLogedIn:c})})]})})]})})}Xa.createRoot(document.getElementById("root")).render(m(eP,{}));