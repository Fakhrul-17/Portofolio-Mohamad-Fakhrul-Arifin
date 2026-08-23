(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gu={exports:{}},ll={},Zu={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qt=Symbol.for("react.element"),yc=Symbol.for("react.portal"),vc=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),kc=Symbol.for("react.profiler"),wc=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Ec=Symbol.for("react.memo"),Cc=Symbol.for("react.lazy"),Uo=Symbol.iterator;function _c(e){return e===null||typeof e!="object"?null:(e=Uo&&e[Uo]||e["@@iterator"],typeof e=="function"?e:null)}var Ju={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qu=Object.assign,bu={};function st(e,n,t){this.props=e,this.context=n,this.refs=bu,this.updater=t||Ju}st.prototype.isReactComponent={};st.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};st.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ea(){}ea.prototype=st.prototype;function Hi(e,n,t){this.props=e,this.context=n,this.refs=bu,this.updater=t||Ju}var Wi=Hi.prototype=new ea;Wi.constructor=Hi;qu(Wi,st.prototype);Wi.isPureReactComponent=!0;var Bo=Array.isArray,na=Object.prototype.hasOwnProperty,Qi={current:null},ta={key:!0,ref:!0,__self:!0,__source:!0};function ra(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)na.call(n,r)&&!ta.hasOwnProperty(r)&&(l[r]=n[r]);var u=arguments.length-2;if(u===1)l.children=t;else if(1<u){for(var a=Array(u),d=0;d<u;d++)a[d]=arguments[d+2];l.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:qt,type:e,key:i,ref:o,props:l,_owner:Qi.current}}function Pc(e,n){return{$$typeof:qt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ki(e){return typeof e=="object"&&e!==null&&e.$$typeof===qt}function zc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Vo=/\/+/g;function jl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?zc(""+e.key):n.toString(36)}function Sr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qt:case yc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+jl(o,0):r,Bo(l)?(t="",e!=null&&(t=e.replace(Vo,"$&/")+"/"),Sr(l,n,t,"",function(d){return d})):l!=null&&(Ki(l)&&(l=Pc(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Vo,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",Bo(e))for(var u=0;u<e.length;u++){i=e[u];var a=r+jl(i,u);o+=Sr(i,n,t,a,l)}else if(a=_c(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=r+jl(i,u++),o+=Sr(i,n,t,a,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function ir(e,n,t){if(e==null)return e;var r=[],l=0;return Sr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Tc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},jr={transition:null},Lc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:jr,ReactCurrentOwner:Qi};function la(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:ir,forEach:function(e,n,t){ir(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ir(e,function(){n++}),n},toArray:function(e){return ir(e,function(n){return n})||[]},only:function(e){if(!Ki(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=st;T.Fragment=vc;T.Profiler=kc;T.PureComponent=Hi;T.StrictMode=xc;T.Suspense=Nc;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lc;T.act=la;T.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qu({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Qi.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)na.call(n,a)&&!ta.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var d=0;d<a;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:qt,type:e.type,key:l,ref:i,props:r,_owner:o}};T.createContext=function(e){return e={$$typeof:Sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wc,_context:e},e.Consumer=e};T.createElement=ra;T.createFactory=function(e){var n=ra.bind(null,e);return n.type=e,n};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:jc,render:e}};T.isValidElement=Ki;T.lazy=function(e){return{$$typeof:Cc,_payload:{_status:-1,_result:e},_init:Tc}};T.memo=function(e,n){return{$$typeof:Ec,type:e,compare:n===void 0?null:n}};T.startTransition=function(e){var n=jr.transition;jr.transition={};try{e()}finally{jr.transition=n}};T.unstable_act=la;T.useCallback=function(e,n){return ce.current.useCallback(e,n)};T.useContext=function(e){return ce.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};T.useEffect=function(e,n){return ce.current.useEffect(e,n)};T.useId=function(){return ce.current.useId()};T.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};T.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};T.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};T.useMemo=function(e,n){return ce.current.useMemo(e,n)};T.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};T.useRef=function(e){return ce.current.useRef(e)};T.useState=function(e){return ce.current.useState(e)};T.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};T.useTransition=function(){return ce.current.useTransition()};T.version="18.3.1";Zu.exports=T;var O=Zu.exports;const Mc=gc(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=O,Dc=Symbol.for("react.element"),Ic=Symbol.for("react.fragment"),Fc=Object.prototype.hasOwnProperty,Oc=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$c={key:!0,ref:!0,__self:!0,__source:!0};function ia(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Fc.call(n,r)&&!$c.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Dc,type:e,key:i,ref:o,props:l,_owner:Oc.current}}ll.Fragment=Ic;ll.jsx=ia;ll.jsxs=ia;Gu.exports=ll;var s=Gu.exports,Gl={},oa={exports:{}},we={},ua={exports:{}},aa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,P){var z=N.length;N.push(P);e:for(;0<z;){var Y=z-1>>>1,q=N[Y];if(0<l(q,P))N[Y]=P,N[z]=q,z=Y;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var P=N[0],z=N.pop();if(z!==P){N[0]=z;e:for(var Y=0,q=N.length,rr=q>>>1;Y<rr;){var kn=2*(Y+1)-1,Sl=N[kn],wn=kn+1,lr=N[wn];if(0>l(Sl,z))wn<q&&0>l(lr,Sl)?(N[Y]=lr,N[wn]=z,Y=wn):(N[Y]=Sl,N[kn]=z,Y=kn);else if(wn<q&&0>l(lr,z))N[Y]=lr,N[wn]=z,Y=wn;else break e}}return P}function l(N,P){var z=N.sortIndex-P.sortIndex;return z!==0?z:N.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],d=[],h=1,g=null,m=3,x=!1,k=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var P=t(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=N)r(d),P.sortIndex=P.expirationTime,n(a,P);else break;P=t(d)}}function y(N){if(w=!1,p(N),!k)if(t(a)!==null)k=!0,kl(j);else{var P=t(d);P!==null&&wl(y,P.startTime-N)}}function j(N,P){k=!1,w&&(w=!1,f(_),_=-1),x=!0;var z=m;try{for(p(P),g=t(a);g!==null&&(!(g.expirationTime>P)||N&&!ze());){var Y=g.callback;if(typeof Y=="function"){g.callback=null,m=g.priorityLevel;var q=Y(g.expirationTime<=P);P=e.unstable_now(),typeof q=="function"?g.callback=q:g===t(a)&&r(a),p(P)}else r(a);g=t(a)}if(g!==null)var rr=!0;else{var kn=t(d);kn!==null&&wl(y,kn.startTime-P),rr=!1}return rr}finally{g=null,m=z,x=!1}}var E=!1,C=null,_=-1,K=5,L=-1;function ze(){return!(e.unstable_now()-L<K)}function ft(){if(C!==null){var N=e.unstable_now();L=N;var P=!0;try{P=C(!0,N)}finally{P?pt():(E=!1,C=null)}}else E=!1}var pt;if(typeof c=="function")pt=function(){c(ft)};else if(typeof MessageChannel<"u"){var Ao=new MessageChannel,hc=Ao.port2;Ao.port1.onmessage=ft,pt=function(){hc.postMessage(null)}}else pt=function(){A(ft,0)};function kl(N){C=N,E||(E=!0,pt())}function wl(N,P){_=A(function(){N(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,kl(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var z=m;m=P;try{return N()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=m;m=N;try{return P()}finally{m=z}},e.unstable_scheduleCallback=function(N,P,z){var Y=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Y+z:Y):z=Y,N){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=z+q,N={id:h++,callback:P,priorityLevel:N,startTime:z,expirationTime:q,sortIndex:-1},z>Y?(N.sortIndex=z,n(d,N),t(a)===null&&N===t(d)&&(w?(f(_),_=-1):w=!0,wl(y,z-Y))):(N.sortIndex=q,n(a,N),k||x||(k=!0,kl(j))),N},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(N){var P=m;return function(){var z=m;m=P;try{return N.apply(this,arguments)}finally{m=z}}}})(aa);ua.exports=aa;var Ac=ua.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc=O,ke=Ac;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sa=new Set,It={};function Dn(e,n){nt(e,n),nt(e+"Capture",n)}function nt(e,n){for(It[e]=n,e=0;e<n.length;e++)sa.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,Bc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ho={},Wo={};function Vc(e){return Zl.call(Wo,e)?!0:Zl.call(Ho,e)?!1:Bc.test(e)?Wo[e]=!0:(Ho[e]=!0,!1)}function Hc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wc(e,n,t,r){if(n===null||typeof n>"u"||Hc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yi=/[\-:]([a-z])/g;function Xi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Yi,Xi);re[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Yi,Xi);re[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Yi,Xi);re[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gi(e,n,t,r){var l=re.hasOwnProperty(n)?re[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Wc(n,t,l,r)&&(t=null),r||l===null?Vc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var qe=Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=Symbol.for("react.element"),On=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),Zi=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),ca=Symbol.for("react.provider"),da=Symbol.for("react.context"),Ji=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),fa=Symbol.for("react.offscreen"),Qo=Symbol.iterator;function mt(e){return e===null||typeof e!="object"?null:(e=Qo&&e[Qo]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Nl;function St(e){if(Nl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Nl=n&&n[1]||""}return`
`+Nl+e}var El=!1;function Cl(e,n){if(!e||El)return"";El=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{El=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?St(e):""}function Qc(e){switch(e.tag){case 5:return St(e.type);case 16:return St("Lazy");case 13:return St("Suspense");case 19:return St("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function ei(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case On:return"Portal";case Jl:return"Profiler";case Zi:return"StrictMode";case ql:return"Suspense";case bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case da:return(e.displayName||"Context")+".Consumer";case ca:return(e._context.displayName||"Context")+".Provider";case Ji:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return n=e.displayName||null,n!==null?n:ei(e.type)||"Memo";case en:n=e._payload,e=e._init;try{return ei(e(n))}catch{}}return null}function Kc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ei(n);case 8:return n===Zi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yc(e){var n=pa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ur(e){e._valueTracker||(e._valueTracker=Yc(e))}function ma(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=pa(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ni(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ko(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=hn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ha(e,n){n=n.checked,n!=null&&Gi(e,"checked",n,!1)}function ti(e,n){ha(e,n);var t=hn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ri(e,n.type,t):n.hasOwnProperty("defaultValue")&&ri(e,n.type,hn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Yo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ri(e,n,t){(n!=="number"||Dr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var jt=Array.isArray;function Gn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+hn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function li(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(jt(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:hn(t)}}function ga(e,n){var t=hn(n.value),r=hn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Go(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ya(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ii(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ya(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ar,va=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ft(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xc=["Webkit","ms","Moz","O"];Object.keys(Ct).forEach(function(e){Xc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ct[n]=Ct[e]})});function xa(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ct.hasOwnProperty(e)&&Ct[e]?(""+n).trim():n+"px"}function ka(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=xa(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Gc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oi(e,n){if(n){if(Gc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function ui(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var si=null,Zn=null,Jn=null;function Zo(e){if(e=nr(e)){if(typeof si!="function")throw Error(v(280));var n=e.stateNode;n&&(n=sl(n),si(e.stateNode,e.type,n))}}function wa(e){Zn?Jn?Jn.push(e):Jn=[e]:Zn=e}function Sa(){if(Zn){var e=Zn,n=Jn;if(Jn=Zn=null,Zo(e),n)for(e=0;e<n.length;e++)Zo(n[e])}}function ja(e,n){return e(n)}function Na(){}var _l=!1;function Ea(e,n,t){if(_l)return e(n,t);_l=!0;try{return ja(e,n,t)}finally{_l=!1,(Zn!==null||Jn!==null)&&(Na(),Sa())}}function Ot(e,n){var t=e.stateNode;if(t===null)return null;var r=sl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var ci=!1;if(Xe)try{var ht={};Object.defineProperty(ht,"passive",{get:function(){ci=!0}}),window.addEventListener("test",ht,ht),window.removeEventListener("test",ht,ht)}catch{ci=!1}function Zc(e,n,t,r,l,i,o,u,a){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(h){this.onError(h)}}var _t=!1,Ir=null,Fr=!1,di=null,Jc={onError:function(e){_t=!0,Ir=e}};function qc(e,n,t,r,l,i,o,u,a){_t=!1,Ir=null,Zc.apply(Jc,arguments)}function bc(e,n,t,r,l,i,o,u,a){if(qc.apply(this,arguments),_t){if(_t){var d=Ir;_t=!1,Ir=null}else throw Error(v(198));Fr||(Fr=!0,di=d)}}function In(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ca(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Jo(e){if(In(e)!==e)throw Error(v(188))}function ed(e){var n=e.alternate;if(!n){if(n=In(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Jo(l),e;if(i===r)return Jo(l),n;i=i.sibling}throw Error(v(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function _a(e){return e=ed(e),e!==null?Pa(e):null}function Pa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Pa(e);if(n!==null)return n;e=e.sibling}return null}var za=ke.unstable_scheduleCallback,qo=ke.unstable_cancelCallback,nd=ke.unstable_shouldYield,td=ke.unstable_requestPaint,X=ke.unstable_now,rd=ke.unstable_getCurrentPriorityLevel,eo=ke.unstable_ImmediatePriority,Ta=ke.unstable_UserBlockingPriority,Or=ke.unstable_NormalPriority,ld=ke.unstable_LowPriority,La=ke.unstable_IdlePriority,il=null,Ue=null;function id(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:ad,od=Math.log,ud=Math.LN2;function ad(e){return e>>>=0,e===0?32:31-(od(e)/ud|0)|0}var sr=64,cr=4194304;function Nt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $r(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~l;u!==0?r=Nt(u):(i&=o,i!==0&&(r=Nt(i)))}else o=t&~l,o!==0?r=Nt(o):i!==0&&(r=Nt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-De(n),l=1<<t,r|=e[t],n&=~l;return r}function sd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-De(i),u=1<<o,a=l[o];a===-1?(!(u&t)||u&r)&&(l[o]=sd(u,n)):a<=n&&(e.expiredLanes|=u),i&=~u}}function fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ma(){var e=sr;return sr<<=1,!(sr&4194240)&&(sr=64),e}function Pl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function bt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-De(n),e[n]=t}function dd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-De(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function no(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-De(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var R=0;function Ra(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Da,to,Ia,Fa,Oa,pi=!1,dr=[],un=null,an=null,sn=null,$t=new Map,At=new Map,tn=[],fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bo(e,n){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":$t.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(n.pointerId)}}function gt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=nr(n),n!==null&&to(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function pd(e,n,t,r,l){switch(n){case"focusin":return un=gt(un,e,n,t,r,l),!0;case"dragenter":return an=gt(an,e,n,t,r,l),!0;case"mouseover":return sn=gt(sn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return $t.set(i,gt($t.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,At.set(i,gt(At.get(i)||null,e,n,t,r,l)),!0}return!1}function $a(e){var n=Nn(e.target);if(n!==null){var t=In(n);if(t!==null){if(n=t.tag,n===13){if(n=Ca(t),n!==null){e.blockedOn=n,Oa(e.priority,function(){Ia(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=mi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ai=r,t.target.dispatchEvent(r),ai=null}else return n=nr(t),n!==null&&to(n),e.blockedOn=t,!1;n.shift()}return!0}function eu(e,n,t){Nr(e)&&t.delete(n)}function md(){pi=!1,un!==null&&Nr(un)&&(un=null),an!==null&&Nr(an)&&(an=null),sn!==null&&Nr(sn)&&(sn=null),$t.forEach(eu),At.forEach(eu)}function yt(e,n){e.blockedOn===n&&(e.blockedOn=null,pi||(pi=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,md)))}function Ut(e){function n(l){return yt(l,e)}if(0<dr.length){yt(dr[0],e);for(var t=1;t<dr.length;t++){var r=dr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&yt(un,e),an!==null&&yt(an,e),sn!==null&&yt(sn,e),$t.forEach(n),At.forEach(n),t=0;t<tn.length;t++)r=tn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(t=tn[0],t.blockedOn===null);)$a(t),t.blockedOn===null&&tn.shift()}var qn=qe.ReactCurrentBatchConfig,Ar=!0;function hd(e,n,t,r){var l=R,i=qn.transition;qn.transition=null;try{R=1,ro(e,n,t,r)}finally{R=l,qn.transition=i}}function gd(e,n,t,r){var l=R,i=qn.transition;qn.transition=null;try{R=4,ro(e,n,t,r)}finally{R=l,qn.transition=i}}function ro(e,n,t,r){if(Ar){var l=mi(e,n,t,r);if(l===null)$l(e,n,r,Ur,t),bo(e,r);else if(pd(l,e,n,t,r))r.stopPropagation();else if(bo(e,r),n&4&&-1<fd.indexOf(e)){for(;l!==null;){var i=nr(l);if(i!==null&&Da(i),i=mi(e,n,t,r),i===null&&$l(e,n,r,Ur,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else $l(e,n,r,null,t)}}var Ur=null;function mi(e,n,t,r){if(Ur=null,e=bi(r),e=Nn(e),e!==null)if(n=In(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ca(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ur=e,null}function Aa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rd()){case eo:return 1;case Ta:return 4;case Or:case ld:return 16;case La:return 536870912;default:return 16}default:return 16}}var ln=null,lo=null,Er=null;function Ua(){if(Er)return Er;var e,n=lo,t=n.length,r,l="value"in ln?ln.value:ln.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function Cr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function nu(){return!1}function Se(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fr:nu,this.isPropagationStopped=nu,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),n}var ct={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=Se(ct),er=W({},ct,{view:0,detail:0}),yd=Se(er),zl,Tl,vt,ol=W({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vt&&(vt&&e.type==="mousemove"?(zl=e.screenX-vt.screenX,Tl=e.screenY-vt.screenY):Tl=zl=0,vt=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),tu=Se(ol),vd=W({},ol,{dataTransfer:0}),xd=Se(vd),kd=W({},er,{relatedTarget:0}),Ll=Se(kd),wd=W({},ct,{animationName:0,elapsedTime:0,pseudoElement:0}),Sd=Se(wd),jd=W({},ct,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nd=Se(jd),Ed=W({},ct,{data:0}),ru=Se(Ed),Cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_d={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Pd[e])?!!n[e]:!1}function oo(){return zd}var Td=W({},er,{key:function(e){if(e.key){var n=Cd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_d[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oo,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ld=Se(Td),Md=W({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lu=Se(Md),Rd=W({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oo}),Dd=Se(Rd),Id=W({},ct,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fd=Se(Id),Od=W({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$d=Se(Od),Ad=[9,13,27,32],uo=Xe&&"CompositionEvent"in window,Pt=null;Xe&&"documentMode"in document&&(Pt=document.documentMode);var Ud=Xe&&"TextEvent"in window&&!Pt,Ba=Xe&&(!uo||Pt&&8<Pt&&11>=Pt),iu=" ",ou=!1;function Va(e,n){switch(e){case"keyup":return Ad.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ha(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function Bd(e,n){switch(e){case"compositionend":return Ha(n);case"keypress":return n.which!==32?null:(ou=!0,iu);case"textInput":return e=n.data,e===iu&&ou?null:e;default:return null}}function Vd(e,n){if(An)return e==="compositionend"||!uo&&Va(e,n)?(e=Ua(),Er=lo=ln=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ba&&n.locale!=="ko"?null:n.data;default:return null}}var Hd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Hd[e.type]:n==="textarea"}function Wa(e,n,t,r){wa(r),n=Br(n,"onChange"),0<n.length&&(t=new io("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var zt=null,Bt=null;function Wd(e){ns(e,0)}function ul(e){var n=Vn(e);if(ma(n))return e}function Qd(e,n){if(e==="change")return n}var Qa=!1;if(Xe){var Ml;if(Xe){var Rl="oninput"in document;if(!Rl){var au=document.createElement("div");au.setAttribute("oninput","return;"),Rl=typeof au.oninput=="function"}Ml=Rl}else Ml=!1;Qa=Ml&&(!document.documentMode||9<document.documentMode)}function su(){zt&&(zt.detachEvent("onpropertychange",Ka),Bt=zt=null)}function Ka(e){if(e.propertyName==="value"&&ul(Bt)){var n=[];Wa(n,Bt,e,bi(e)),Ea(Wd,n)}}function Kd(e,n,t){e==="focusin"?(su(),zt=n,Bt=t,zt.attachEvent("onpropertychange",Ka)):e==="focusout"&&su()}function Yd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Bt)}function Xd(e,n){if(e==="click")return ul(n)}function Gd(e,n){if(e==="input"||e==="change")return ul(n)}function Zd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:Zd;function Vt(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Zl.call(n,l)||!Fe(e[l],n[l]))return!1}return!0}function cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function du(e,n){var t=cu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=cu(t)}}function Ya(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ya(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xa(){for(var e=window,n=Dr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Dr(e.document)}return n}function ao(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Jd(e){var n=Xa(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ya(t.ownerDocument.documentElement,t)){if(r!==null&&ao(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=du(t,i);var o=du(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qd=Xe&&"documentMode"in document&&11>=document.documentMode,Un=null,hi=null,Tt=null,gi=!1;function fu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;gi||Un==null||Un!==Dr(r)||(r=Un,"selectionStart"in r&&ao(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tt&&Vt(Tt,r)||(Tt=r,r=Br(hi,"onSelect"),0<r.length&&(n=new io("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Un)))}function pr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Bn={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionend:pr("Transition","TransitionEnd")},Dl={},Ga={};Xe&&(Ga=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function al(e){if(Dl[e])return Dl[e];if(!Bn[e])return e;var n=Bn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ga)return Dl[e]=n[t];return e}var Za=al("animationend"),Ja=al("animationiteration"),qa=al("animationstart"),ba=al("transitionend"),es=new Map,pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,n){es.set(e,n),Dn(n,[e])}for(var Il=0;Il<pu.length;Il++){var Fl=pu[Il],bd=Fl.toLowerCase(),ef=Fl[0].toUpperCase()+Fl.slice(1);yn(bd,"on"+ef)}yn(Za,"onAnimationEnd");yn(Ja,"onAnimationIteration");yn(qa,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(ba,"onTransitionEnd");nt("onMouseEnter",["mouseout","mouseover"]);nt("onMouseLeave",["mouseout","mouseover"]);nt("onPointerEnter",["pointerout","pointerover"]);nt("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Et="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Et));function mu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,bc(r,n,void 0,e),e.currentTarget=null}function ns(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,d=u.currentTarget;if(u=u.listener,a!==i&&l.isPropagationStopped())break e;mu(l,u,d),i=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,d=u.currentTarget,u=u.listener,a!==i&&l.isPropagationStopped())break e;mu(l,u,d),i=a}}}if(Fr)throw e=di,Fr=!1,di=null,e}function I(e,n){var t=n[wi];t===void 0&&(t=n[wi]=new Set);var r=e+"__bubble";t.has(r)||(ts(n,e,2,!1),t.add(r))}function Ol(e,n,t){var r=0;n&&(r|=4),ts(t,e,r,n)}var mr="_reactListening"+Math.random().toString(36).slice(2);function Ht(e){if(!e[mr]){e[mr]=!0,sa.forEach(function(t){t!=="selectionchange"&&(nf.has(t)||Ol(t,!1,e),Ol(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mr]||(n[mr]=!0,Ol("selectionchange",!1,n))}}function ts(e,n,t,r){switch(Aa(n)){case 1:var l=hd;break;case 4:l=gd;break;default:l=ro}t=l.bind(null,n,t,e),l=void 0,!ci||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function $l(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;u!==null;){if(o=Nn(u),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}u=u.parentNode}}r=r.return}Ea(function(){var d=i,h=bi(t),g=[];e:{var m=es.get(e);if(m!==void 0){var x=io,k=e;switch(e){case"keypress":if(Cr(t)===0)break e;case"keydown":case"keyup":x=Ld;break;case"focusin":k="focus",x=Ll;break;case"focusout":k="blur",x=Ll;break;case"beforeblur":case"afterblur":x=Ll;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Dd;break;case Za:case Ja:case qa:x=Sd;break;case ba:x=Fd;break;case"scroll":x=yd;break;case"wheel":x=$d;break;case"copy":case"cut":case"paste":x=Nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=lu}var w=(n&4)!==0,A=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var c=d,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Ot(c,f),y!=null&&w.push(Wt(c,y,p)))),A)break;c=c.return}0<w.length&&(m=new x(m,k,null,t,h),g.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&t!==ai&&(k=t.relatedTarget||t.fromElement)&&(Nn(k)||k[Ge]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=t.relatedTarget||t.toElement,x=d,k=k?Nn(k):null,k!==null&&(A=In(k),k!==A||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=d),x!==k)){if(w=tu,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=lu,y="onPointerLeave",f="onPointerEnter",c="pointer"),A=x==null?m:Vn(x),p=k==null?m:Vn(k),m=new w(y,c+"leave",x,t,h),m.target=A,m.relatedTarget=p,y=null,Nn(h)===d&&(w=new w(f,c+"enter",k,t,h),w.target=p,w.relatedTarget=A,y=w),A=y,x&&k)n:{for(w=x,f=k,c=0,p=w;p;p=Fn(p))c++;for(p=0,y=f;y;y=Fn(y))p++;for(;0<c-p;)w=Fn(w),c--;for(;0<p-c;)f=Fn(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break n;w=Fn(w),f=Fn(f)}w=null}else w=null;x!==null&&hu(g,m,x,w,!1),k!==null&&A!==null&&hu(g,A,k,w,!0)}}e:{if(m=d?Vn(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var j=Qd;else if(uu(m))if(Qa)j=Gd;else{j=Yd;var E=Kd}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Xd);if(j&&(j=j(e,d))){Wa(g,j,t,h);break e}E&&E(e,m,d),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&ri(m,"number",m.value)}switch(E=d?Vn(d):window,e){case"focusin":(uu(E)||E.contentEditable==="true")&&(Un=E,hi=d,Tt=null);break;case"focusout":Tt=hi=Un=null;break;case"mousedown":gi=!0;break;case"contextmenu":case"mouseup":case"dragend":gi=!1,fu(g,t,h);break;case"selectionchange":if(qd)break;case"keydown":case"keyup":fu(g,t,h)}var C;if(uo)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else An?Va(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Ba&&t.locale!=="ko"&&(An||_!=="onCompositionStart"?_==="onCompositionEnd"&&An&&(C=Ua()):(ln=h,lo="value"in ln?ln.value:ln.textContent,An=!0)),E=Br(d,_),0<E.length&&(_=new ru(_,e,null,t,h),g.push({event:_,listeners:E}),C?_.data=C:(C=Ha(t),C!==null&&(_.data=C)))),(C=Ud?Bd(e,t):Vd(e,t))&&(d=Br(d,"onBeforeInput"),0<d.length&&(h=new ru("onBeforeInput","beforeinput",null,t,h),g.push({event:h,listeners:d}),h.data=C))}ns(g,n)})}function Wt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Br(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Ot(e,t),i!=null&&r.unshift(Wt(e,i,l)),i=Ot(e,n),i!=null&&r.push(Wt(e,i,l))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hu(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var u=t,a=u.alternate,d=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&d!==null&&(u=d,l?(a=Ot(t,i),a!=null&&o.unshift(Wt(t,a,u))):l||(a=Ot(t,i),a!=null&&o.push(Wt(t,a,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var tf=/\r\n?/g,rf=/\u0000|\uFFFD/g;function gu(e){return(typeof e=="string"?e:""+e).replace(tf,`
`).replace(rf,"")}function hr(e,n,t){if(n=gu(n),gu(e)!==n&&t)throw Error(v(425))}function Vr(){}var yi=null,vi=null;function xi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ki=typeof setTimeout=="function"?setTimeout:void 0,lf=typeof clearTimeout=="function"?clearTimeout:void 0,yu=typeof Promise=="function"?Promise:void 0,of=typeof queueMicrotask=="function"?queueMicrotask:typeof yu<"u"?function(e){return yu.resolve(null).then(e).catch(uf)}:ki;function uf(e){setTimeout(function(){throw e})}function Al(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Ut(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Ut(n)}function cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function vu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var dt=Math.random().toString(36).slice(2),Ae="__reactFiber$"+dt,Qt="__reactProps$"+dt,Ge="__reactContainer$"+dt,wi="__reactEvents$"+dt,af="__reactListeners$"+dt,sf="__reactHandles$"+dt;function Nn(e){var n=e[Ae];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ge]||t[Ae]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=vu(e);e!==null;){if(t=e[Ae])return t;e=vu(e)}return n}e=t,t=e.parentNode}return null}function nr(e){return e=e[Ae]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function sl(e){return e[Qt]||null}var Si=[],Hn=-1;function vn(e){return{current:e}}function F(e){0>Hn||(e.current=Si[Hn],Si[Hn]=null,Hn--)}function D(e,n){Hn++,Si[Hn]=e.current,e.current=n}var gn={},ue=vn(gn),me=vn(!1),zn=gn;function tt(e,n){var t=e.type.contextTypes;if(!t)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Hr(){F(me),F(ue)}function xu(e,n,t){if(ue.current!==gn)throw Error(v(168));D(ue,n),D(me,t)}function rs(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(v(108,Kc(e)||"Unknown",l));return W({},t,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,zn=ue.current,D(ue,e),D(me,me.current),!0}function ku(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=rs(e,n,zn),r.__reactInternalMemoizedMergedChildContext=e,F(me),F(ue),D(ue,e)):F(me),D(me,t)}var He=null,cl=!1,Ul=!1;function ls(e){He===null?He=[e]:He.push(e)}function cf(e){cl=!0,ls(e)}function xn(){if(!Ul&&He!==null){Ul=!0;var e=0,n=R;try{var t=He;for(R=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}He=null,cl=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),za(eo,xn),l}finally{R=n,Ul=!1}}return null}var Wn=[],Qn=0,Qr=null,Kr=0,je=[],Ne=0,Tn=null,We=1,Qe="";function Sn(e,n){Wn[Qn++]=Kr,Wn[Qn++]=Qr,Qr=e,Kr=n}function is(e,n,t){je[Ne++]=We,je[Ne++]=Qe,je[Ne++]=Tn,Tn=e;var r=We;e=Qe;var l=32-De(r)-1;r&=~(1<<l),t+=1;var i=32-De(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,We=1<<32-De(n)+l|t<<l|r,Qe=i+e}else We=1<<i|t<<l|r,Qe=e}function so(e){e.return!==null&&(Sn(e,1),is(e,1,0))}function co(e){for(;e===Qr;)Qr=Wn[--Qn],Wn[Qn]=null,Kr=Wn[--Qn],Wn[Qn]=null;for(;e===Tn;)Tn=je[--Ne],je[Ne]=null,Qe=je[--Ne],je[Ne]=null,We=je[--Ne],je[Ne]=null}var xe=null,ve=null,U=!1,Re=null;function os(e,n){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function wu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,xe=e,ve=cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,xe=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Tn!==null?{id:We,overflow:Qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,xe=e,ve=null,!0):!1;default:return!1}}function ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ni(e){if(U){var n=ve;if(n){var t=n;if(!wu(e,n)){if(ji(e))throw Error(v(418));n=cn(t.nextSibling);var r=xe;n&&wu(e,n)?os(r,t):(e.flags=e.flags&-4097|2,U=!1,xe=e)}}else{if(ji(e))throw Error(v(418));e.flags=e.flags&-4097|2,U=!1,xe=e}}}function Su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function gr(e){if(e!==xe)return!1;if(!U)return Su(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!xi(e.type,e.memoizedProps)),n&&(n=ve)){if(ji(e))throw us(),Error(v(418));for(;n;)os(e,n),n=cn(n.nextSibling)}if(Su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=xe?cn(e.stateNode.nextSibling):null;return!0}function us(){for(var e=ve;e;)e=cn(e.nextSibling)}function rt(){ve=xe=null,U=!1}function fo(e){Re===null?Re=[e]:Re.push(e)}var df=qe.ReactCurrentBatchConfig;function xt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function yr(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ju(e){var n=e._init;return n(e._payload)}function as(e){function n(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=mn(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,p,y){return c===null||c.tag!==6?(c=Yl(p,f.mode,y),c.return=f,c):(c=l(c,p),c.return=f,c)}function a(f,c,p,y){var j=p.type;return j===$n?h(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===en&&ju(j)===c.type)?(y=l(c,p.props),y.ref=xt(f,c,p),y.return=f,y):(y=Rr(p.type,p.key,p.props,null,f.mode,y),y.ref=xt(f,c,p),y.return=f,y)}function d(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Xl(p,f.mode,y),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function h(f,c,p,y,j){return c===null||c.tag!==7?(c=Pn(p,f.mode,y,j),c.return=f,c):(c=l(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Yl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case or:return p=Rr(c.type,c.key,c.props,null,f.mode,p),p.ref=xt(f,null,c),p.return=f,p;case On:return c=Xl(c,f.mode,p),c.return=f,c;case en:var y=c._init;return g(f,y(c._payload),p)}if(jt(c)||mt(c))return c=Pn(c,f.mode,p,null),c.return=f,c;yr(f,c)}return null}function m(f,c,p,y){var j=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:u(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case or:return p.key===j?a(f,c,p,y):null;case On:return p.key===j?d(f,c,p,y):null;case en:return j=p._init,m(f,c,j(p._payload),y)}if(jt(p)||mt(p))return j!==null?null:h(f,c,p,y,null);yr(f,p)}return null}function x(f,c,p,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,u(c,f,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case or:return f=f.get(y.key===null?p:y.key)||null,a(c,f,y,j);case On:return f=f.get(y.key===null?p:y.key)||null,d(c,f,y,j);case en:var E=y._init;return x(f,c,p,E(y._payload),j)}if(jt(y)||mt(y))return f=f.get(p)||null,h(c,f,y,j,null);yr(c,y)}return null}function k(f,c,p,y){for(var j=null,E=null,C=c,_=c=0,K=null;C!==null&&_<p.length;_++){C.index>_?(K=C,C=null):K=C.sibling;var L=m(f,C,p[_],y);if(L===null){C===null&&(C=K);break}e&&C&&L.alternate===null&&n(f,C),c=i(L,c,_),E===null?j=L:E.sibling=L,E=L,C=K}if(_===p.length)return t(f,C),U&&Sn(f,_),j;if(C===null){for(;_<p.length;_++)C=g(f,p[_],y),C!==null&&(c=i(C,c,_),E===null?j=C:E.sibling=C,E=C);return U&&Sn(f,_),j}for(C=r(f,C);_<p.length;_++)K=x(C,f,_,p[_],y),K!==null&&(e&&K.alternate!==null&&C.delete(K.key===null?_:K.key),c=i(K,c,_),E===null?j=K:E.sibling=K,E=K);return e&&C.forEach(function(ze){return n(f,ze)}),U&&Sn(f,_),j}function w(f,c,p,y){var j=mt(p);if(typeof j!="function")throw Error(v(150));if(p=j.call(p),p==null)throw Error(v(151));for(var E=j=null,C=c,_=c=0,K=null,L=p.next();C!==null&&!L.done;_++,L=p.next()){C.index>_?(K=C,C=null):K=C.sibling;var ze=m(f,C,L.value,y);if(ze===null){C===null&&(C=K);break}e&&C&&ze.alternate===null&&n(f,C),c=i(ze,c,_),E===null?j=ze:E.sibling=ze,E=ze,C=K}if(L.done)return t(f,C),U&&Sn(f,_),j;if(C===null){for(;!L.done;_++,L=p.next())L=g(f,L.value,y),L!==null&&(c=i(L,c,_),E===null?j=L:E.sibling=L,E=L);return U&&Sn(f,_),j}for(C=r(f,C);!L.done;_++,L=p.next())L=x(C,f,_,L.value,y),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?_:L.key),c=i(L,c,_),E===null?j=L:E.sibling=L,E=L);return e&&C.forEach(function(ft){return n(f,ft)}),U&&Sn(f,_),j}function A(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===$n&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case or:e:{for(var j=p.key,E=c;E!==null;){if(E.key===j){if(j=p.type,j===$n){if(E.tag===7){t(f,E.sibling),c=l(E,p.props.children),c.return=f,f=c;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===en&&ju(j)===E.type){t(f,E.sibling),c=l(E,p.props),c.ref=xt(f,E,p),c.return=f,f=c;break e}t(f,E);break}else n(f,E);E=E.sibling}p.type===$n?(c=Pn(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=Rr(p.type,p.key,p.props,null,f.mode,y),y.ref=xt(f,c,p),y.return=f,f=y)}return o(f);case On:e:{for(E=p.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=Xl(p,f.mode,y),c.return=f,f=c}return o(f);case en:return E=p._init,A(f,c,E(p._payload),y)}if(jt(p))return k(f,c,p,y);if(mt(p))return w(f,c,p,y);yr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(f,c.sibling),c=l(c,p),c.return=f,f=c):(t(f,c),c=Yl(p,f.mode,y),c.return=f,f=c),o(f)):t(f,c)}return A}var lt=as(!0),ss=as(!1),Yr=vn(null),Xr=null,Kn=null,po=null;function mo(){po=Kn=Xr=null}function ho(e){var n=Yr.current;F(Yr),e._currentValue=n}function Ei(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function bn(e,n){Xr=e,po=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function _e(e){var n=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:n,next:null},Kn===null){if(Xr===null)throw Error(v(308));Kn=e,Xr.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return n}var En=null;function go(e){En===null?En=[e]:En.push(e)}function cs(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,go(n)):(t.next=l.next,l.next=t),n.interleaved=t,Ze(e,r)}function Ze(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nn=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ds(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Ze(e,t)}return l=r.interleaved,l===null?(n.next=n,go(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ze(e,t)}function _r(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,no(e,t)}}function Nu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Gr(e,n,t,r){var l=e.updateQueue;nn=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,d=a.next;a.next=null,o===null?i=d:o.next=d,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=d:u.next=d,h.lastBaseUpdate=a))}if(i!==null){var g=l.baseState;o=0,h=d=a=null,u=i;do{var m=u.lane,x=u.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=e,w=u;switch(m=n,x=t,w.tag){case 1:if(k=w.payload,typeof k=="function"){g=k.call(x,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,m=typeof k=="function"?k.call(x,g,m):k,m==null)break e;g=W({},g,m);break e;case 2:nn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else x={eventTime:x,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(d=h=x,a=g):h=h.next=x,o|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(a=g),l.baseState=a,l.firstBaseUpdate=d,l.lastBaseUpdate=h,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Mn|=o,e.lanes=o,e.memoizedState=g}}function Eu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var tr={},Be=vn(tr),Kt=vn(tr),Yt=vn(tr);function Cn(e){if(e===tr)throw Error(v(174));return e}function vo(e,n){switch(D(Yt,n),D(Kt,e),D(Be,tr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ii(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ii(n,e)}F(Be),D(Be,n)}function it(){F(Be),F(Kt),F(Yt)}function fs(e){Cn(Yt.current);var n=Cn(Be.current),t=ii(n,e.type);n!==t&&(D(Kt,e),D(Be,t))}function xo(e){Kt.current===e&&(F(Be),F(Kt))}var V=vn(0);function Zr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bl=[];function ko(){for(var e=0;e<Bl.length;e++)Bl[e]._workInProgressVersionPrimary=null;Bl.length=0}var Pr=qe.ReactCurrentDispatcher,Vl=qe.ReactCurrentBatchConfig,Ln=0,H=null,Z=null,b=null,Jr=!1,Lt=!1,Xt=0,ff=0;function le(){throw Error(v(321))}function wo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function So(e,n,t,r,l,i){if(Ln=i,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Pr.current=e===null||e.memoizedState===null?gf:yf,e=t(r,l),Lt){i=0;do{if(Lt=!1,Xt=0,25<=i)throw Error(v(301));i+=1,b=Z=null,n.updateQueue=null,Pr.current=vf,e=t(r,l)}while(Lt)}if(Pr.current=qr,n=Z!==null&&Z.next!==null,Ln=0,b=Z=H=null,Jr=!1,n)throw Error(v(300));return e}function jo(){var e=Xt!==0;return Xt=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?H.memoizedState=b=e:b=b.next=e,b}function Pe(){if(Z===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var n=b===null?H.memoizedState:b.next;if(n!==null)b=n,Z=e;else{if(e===null)throw Error(v(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},b===null?H.memoizedState=b=e:b=b.next=e}return b}function Gt(e,n){return typeof n=="function"?n(e):n}function Hl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=Z,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,a=null,d=i;do{var h=d.lane;if((Ln&h)===h)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(u=a=g,o=r):a=a.next=g,H.lanes|=h,Mn|=h}d=d.next}while(d!==null&&d!==i);a===null?o=r:a.next=u,Fe(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,H.lanes|=i,Mn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Wl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Fe(i,n.memoizedState)||(pe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function ps(){}function ms(e,n){var t=H,r=Pe(),l=n(),i=!Fe(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,No(ys.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||b!==null&&b.memoizedState.tag&1){if(t.flags|=2048,Zt(9,gs.bind(null,t,r,l,n),void 0,null),ee===null)throw Error(v(349));Ln&30||hs(t,n,l)}return l}function hs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function gs(e,n,t,r){n.value=t,n.getSnapshot=r,vs(n)&&xs(e)}function ys(e,n,t){return t(function(){vs(n)&&xs(e)})}function vs(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function xs(e){var n=Ze(e,1);n!==null&&Ie(n,e,1,-1)}function Cu(e){var n=$e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},n.queue=e,e=e.dispatch=hf.bind(null,H,e),[n.memoizedState,e]}function Zt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ks(){return Pe().memoizedState}function zr(e,n,t,r){var l=$e();H.flags|=e,l.memoizedState=Zt(1|n,t,void 0,r===void 0?null:r)}function dl(e,n,t,r){var l=Pe();r=r===void 0?null:r;var i=void 0;if(Z!==null){var o=Z.memoizedState;if(i=o.destroy,r!==null&&wo(r,o.deps)){l.memoizedState=Zt(n,t,i,r);return}}H.flags|=e,l.memoizedState=Zt(1|n,t,i,r)}function _u(e,n){return zr(8390656,8,e,n)}function No(e,n){return dl(2048,8,e,n)}function ws(e,n){return dl(4,2,e,n)}function Ss(e,n){return dl(4,4,e,n)}function js(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ns(e,n,t){return t=t!=null?t.concat([e]):null,dl(4,4,js.bind(null,n,e),t)}function Eo(){}function Es(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&wo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Cs(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&wo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function _s(e,n,t){return Ln&21?(Fe(t,n)||(t=Ma(),H.lanes|=t,Mn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function pf(e,n){var t=R;R=t!==0&&4>t?t:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),n()}finally{R=t,Vl.transition=r}}function Ps(){return Pe().memoizedState}function mf(e,n,t){var r=pn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},zs(e))Ts(n,t);else if(t=cs(e,n,t,r),t!==null){var l=se();Ie(t,e,r,l),Ls(t,n,r)}}function hf(e,n,t){var r=pn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Ts(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,u=i(o,t);if(l.hasEagerState=!0,l.eagerState=u,Fe(u,o)){var a=n.interleaved;a===null?(l.next=l,go(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=cs(e,n,l,r),t!==null&&(l=se(),Ie(t,e,r,l),Ls(t,n,r))}}function zs(e){var n=e.alternate;return e===H||n!==null&&n===H}function Ts(e,n){Lt=Jr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ls(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,no(e,t)}}var qr={readContext:_e,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},gf={readContext:_e,useCallback:function(e,n){return $e().memoizedState=[e,n===void 0?null:n],e},useContext:_e,useEffect:_u,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,zr(4194308,4,js.bind(null,n,e),t)},useLayoutEffect:function(e,n){return zr(4194308,4,e,n)},useInsertionEffect:function(e,n){return zr(4,2,e,n)},useMemo:function(e,n){var t=$e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=$e();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=mf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=$e();return e={current:e},n.memoizedState=e},useState:Cu,useDebugValue:Eo,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=Cu(!1),n=e[0];return e=pf.bind(null,e[1]),$e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,l=$e();if(U){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),ee===null)throw Error(v(349));Ln&30||hs(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,_u(ys.bind(null,r,i,e),[e]),r.flags|=2048,Zt(9,gs.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=$e(),n=ee.identifierPrefix;if(U){var t=Qe,r=We;t=(r&~(1<<32-De(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Xt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ff++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},yf={readContext:_e,useCallback:Es,useContext:_e,useEffect:No,useImperativeHandle:Ns,useInsertionEffect:ws,useLayoutEffect:Ss,useMemo:Cs,useReducer:Hl,useRef:ks,useState:function(){return Hl(Gt)},useDebugValue:Eo,useDeferredValue:function(e){var n=Pe();return _s(n,Z.memoizedState,e)},useTransition:function(){var e=Hl(Gt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:ps,useSyncExternalStore:ms,useId:Ps,unstable_isNewReconciler:!1},vf={readContext:_e,useCallback:Es,useContext:_e,useEffect:No,useImperativeHandle:Ns,useInsertionEffect:ws,useLayoutEffect:Ss,useMemo:Cs,useReducer:Wl,useRef:ks,useState:function(){return Wl(Gt)},useDebugValue:Eo,useDeferredValue:function(e){var n=Pe();return Z===null?n.memoizedState=e:_s(n,Z.memoizedState,e)},useTransition:function(){var e=Wl(Gt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:ps,useSyncExternalStore:ms,useId:Ps,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ci(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var fl={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),l=pn(e),i=Ye(r,l);i.payload=n,t!=null&&(i.callback=t),n=dn(e,i,l),n!==null&&(Ie(n,e,l,r),_r(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),l=pn(e),i=Ye(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=dn(e,i,l),n!==null&&(Ie(n,e,l,r),_r(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=pn(e),l=Ye(t,r);l.tag=2,n!=null&&(l.callback=n),n=dn(e,l,r),n!==null&&(Ie(n,e,r,t),_r(n,e,r))}};function Pu(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Vt(t,r)||!Vt(l,i):!0}function Ms(e,n,t){var r=!1,l=gn,i=n.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=he(n)?zn:ue.current,r=n.contextTypes,i=(r=r!=null)?tt(e,l):gn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=fl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function zu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&fl.enqueueReplaceState(n,n.state,null)}function _i(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},yo(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=he(n)?zn:ue.current,l.context=tt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ci(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&fl.enqueueReplaceState(l,l.state,null),Gr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ot(e,n){try{var t="",r=n;do t+=Qc(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Ql(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Pi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var xf=typeof WeakMap=="function"?WeakMap:Map;function Rs(e,n,t){t=Ye(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){el||(el=!0,$i=r),Pi(e,n)},t}function Ds(e,n,t){t=Ye(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Pi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Pi(e,n),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Tu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new xf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Rf.bind(null,e,n,t),n.then(e,e))}function Lu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Mu(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ye(-1,1),n.tag=2,dn(t,n,1))),t.lanes|=1),e)}var kf=qe.ReactCurrentOwner,pe=!1;function ae(e,n,t,r){n.child=e===null?ss(n,null,t,r):lt(n,e.child,t,r)}function Ru(e,n,t,r,l){t=t.render;var i=n.ref;return bn(n,l),r=So(e,n,t,r,i,l),t=jo(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Je(e,n,l)):(U&&t&&so(n),n.flags|=1,ae(e,n,r,l),n.child)}function Du(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!Ro(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Is(e,n,i,r,l)):(e=Rr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Vt,t(o,r)&&e.ref===n.ref)return Je(e,n,l)}return n.flags|=1,e=mn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Is(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Vt(i,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Je(e,n,l)}return zi(e,n,t,r,l)}function Fs(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Xn,ye),ye|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,D(Xn,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,D(Xn,ye),ye|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,D(Xn,ye),ye|=r;return ae(e,n,l,t),n.child}function Os(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function zi(e,n,t,r,l){var i=he(t)?zn:ue.current;return i=tt(n,i),bn(n,l),t=So(e,n,t,r,i,l),r=jo(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Je(e,n,l)):(U&&r&&so(n),n.flags|=1,ae(e,n,t,l),n.child)}function Iu(e,n,t,r,l){if(he(t)){var i=!0;Wr(n)}else i=!1;if(bn(n,l),n.stateNode===null)Tr(e,n),Ms(n,t,r),_i(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var a=o.context,d=t.contextType;typeof d=="object"&&d!==null?d=_e(d):(d=he(t)?zn:ue.current,d=tt(n,d));var h=t.getDerivedStateFromProps,g=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==d)&&zu(n,o,r,d),nn=!1;var m=n.memoizedState;o.state=m,Gr(n,r,o,l),a=n.memoizedState,u!==r||m!==a||me.current||nn?(typeof h=="function"&&(Ci(n,t,h,r),a=n.memoizedState),(u=nn||Pu(n,t,u,r,m,a,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=d,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,ds(e,n),u=n.memoizedProps,d=n.type===n.elementType?u:Le(n.type,u),o.props=d,g=n.pendingProps,m=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=_e(a):(a=he(t)?zn:ue.current,a=tt(n,a));var x=t.getDerivedStateFromProps;(h=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==g||m!==a)&&zu(n,o,r,a),nn=!1,m=n.memoizedState,o.state=m,Gr(n,r,o,l);var k=n.memoizedState;u!==g||m!==k||me.current||nn?(typeof x=="function"&&(Ci(n,t,x,r),k=n.memoizedState),(d=nn||Pu(n,t,d,r,m,k,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),o.props=r,o.state=k,o.context=a,r=d):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Ti(e,n,t,r,i,l)}function Ti(e,n,t,r,l,i){Os(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&ku(n,t,!1),Je(e,n,i);r=n.stateNode,kf.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=lt(n,e.child,null,i),n.child=lt(n,null,u,i)):ae(e,n,u,i),n.memoizedState=r.state,l&&ku(n,t,!0),n.child}function $s(e){var n=e.stateNode;n.pendingContext?xu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&xu(e,n.context,!1),vo(e,n.containerInfo)}function Fu(e,n,t,r,l){return rt(),fo(l),n.flags|=256,ae(e,n,t,r),n.child}var Li={dehydrated:null,treeContext:null,retryLane:0};function Mi(e){return{baseLanes:e,cachePool:null,transitions:null}}function As(e,n,t){var r=n.pendingProps,l=V.current,i=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(V,l&1),e===null)return Ni(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=hl(o,r,0,null),e=Pn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Mi(t),n.memoizedState=Li,e):Co(n,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return wf(e,n,o,r,u,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=mn(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=mn(u,i):(i=Pn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Mi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Li,r}return i=e.child,e=i.sibling,r=mn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Co(e,n){return n=hl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function vr(e,n,t,r){return r!==null&&fo(r),lt(n,e.child,null,t),e=Co(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wf(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Ql(Error(v(422))),vr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=hl({mode:"visible",children:r.children},l,0,null),i=Pn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&lt(n,e.child,null,o),n.child.memoizedState=Mi(o),n.memoizedState=Li,i);if(!(n.mode&1))return vr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(v(419)),r=Ql(i,r,void 0),vr(e,n,o,r)}if(u=(o&e.childLanes)!==0,pe||u){if(r=ee,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ze(e,l),Ie(r,e,l,-1))}return Mo(),r=Ql(Error(v(421))),vr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Df.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,ve=cn(l.nextSibling),xe=n,U=!0,Re=null,e!==null&&(je[Ne++]=We,je[Ne++]=Qe,je[Ne++]=Tn,We=e.id,Qe=e.overflow,Tn=n),n=Co(n,r.children),n.flags|=4096,n)}function Ou(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ei(e.return,n,t)}function Kl(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Us(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(ae(e,n,r.children,t),r=V.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ou(e,t,n);else if(e.tag===19)Ou(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(V,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Zr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Kl(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Zr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Kl(n,!0,t,null,i);break;case"together":Kl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Tr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Je(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Mn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Sf(e,n,t){switch(n.tag){case 3:$s(n),rt();break;case 5:fs(n);break;case 1:he(n.type)&&Wr(n);break;case 4:vo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;D(Yr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(D(V,V.current&1),n.flags|=128,null):t&n.child.childLanes?As(e,n,t):(D(V,V.current&1),e=Je(e,n,t),e!==null?e.sibling:null);D(V,V.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Us(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(V,V.current),r)break;return null;case 22:case 23:return n.lanes=0,Fs(e,n,t)}return Je(e,n,t)}var Bs,Ri,Vs,Hs;Bs=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ri=function(){};Vs=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Cn(Be.current);var i=null;switch(t){case"input":l=ni(e,l),r=ni(e,r),i=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":l=li(e,l),r=li(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}oi(t,r);var o;t=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var u=l[d];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(It.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var a=r[d];if(u=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&a!==u&&(a!=null||u!=null))if(d==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(i||(i=[]),i.push(d,t)),t=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(It.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&I("scroll",e),i||u===a||(i=[])):(i=i||[]).push(d,a))}t&&(i=i||[]).push("style",t);var d=i;(n.updateQueue=d)&&(n.flags|=4)}};Hs=function(e,n,t,r){t!==r&&(n.flags|=4)};function kt(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function jf(e,n,t){var r=n.pendingProps;switch(co(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return he(n.type)&&Hr(),ie(n),null;case 3:return r=n.stateNode,it(),F(me),F(ue),ko(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Re!==null&&(Bi(Re),Re=null))),Ri(e,n),ie(n),null;case 5:xo(n);var l=Cn(Yt.current);if(t=n.type,e!==null&&n.stateNode!=null)Vs(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return ie(n),null}if(e=Cn(Be.current),gr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ae]=n,r[Qt]=i,e=(n.mode&1)!==0,t){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(l=0;l<Et.length;l++)I(Et[l],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Ko(r,i),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},I("invalid",r);break;case"textarea":Xo(r,i),I("invalid",r)}oi(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&hr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&hr(r.textContent,u,e),l=["children",""+u]):It.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&I("scroll",r)}switch(t){case"input":ur(r),Yo(r,i,!0);break;case"textarea":ur(r),Go(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ya(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Ae]=n,e[Qt]=r,Bs(e,n,!1,!1),n.stateNode=e;e:{switch(o=ui(t,r),t){case"dialog":I("cancel",e),I("close",e),l=r;break;case"iframe":case"object":case"embed":I("load",e),l=r;break;case"video":case"audio":for(l=0;l<Et.length;l++)I(Et[l],e);l=r;break;case"source":I("error",e),l=r;break;case"img":case"image":case"link":I("error",e),I("load",e),l=r;break;case"details":I("toggle",e),l=r;break;case"input":Ko(e,r),l=ni(e,r),I("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),I("invalid",e);break;case"textarea":Xo(e,r),l=li(e,r),I("invalid",e);break;default:l=r}oi(t,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?ka(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&va(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Ft(e,a):typeof a=="number"&&Ft(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(It.hasOwnProperty(i)?a!=null&&i==="onScroll"&&I("scroll",e):a!=null&&Gi(e,i,a,o))}switch(t){case"input":ur(e),Yo(e,r,!1);break;case"textarea":ur(e),Go(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Gn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Vr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Hs(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=Cn(Yt.current),Cn(Be.current),gr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ae]=n,(i=r.nodeValue!==t)&&(e=xe,e!==null))switch(e.tag){case 3:hr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ae]=n,n.stateNode=r}return ie(n),null;case 13:if(F(V),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ve!==null&&n.mode&1&&!(n.flags&128))us(),rt(),n.flags|=98560,i=!1;else if(i=gr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[Ae]=n}else rt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),i=!1}else Re!==null&&(Bi(Re),Re=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||V.current&1?J===0&&(J=3):Mo())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return it(),Ri(e,n),e===null&&Ht(n.stateNode.containerInfo),ie(n),null;case 10:return ho(n.type._context),ie(n),null;case 17:return he(n.type)&&Hr(),ie(n),null;case 19:if(F(V),i=n.memoizedState,i===null)return ie(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)kt(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Zr(e),o!==null){for(n.flags|=128,kt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return D(V,V.current&1|2),n.child}e=e.sibling}i.tail!==null&&X()>ut&&(n.flags|=128,r=!0,kt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Zr(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),kt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return ie(n),null}else 2*X()-i.renderingStartTime>ut&&t!==1073741824&&(n.flags|=128,r=!0,kt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=X(),n.sibling=null,t=V.current,D(V,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return Lo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ye&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function Nf(e,n){switch(co(n),n.tag){case 1:return he(n.type)&&Hr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return it(),F(me),F(ue),ko(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return xo(n),null;case 13:if(F(V),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));rt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(V),null;case 4:return it(),null;case 10:return ho(n.type._context),null;case 22:case 23:return Lo(),null;case 24:return null;default:return null}}var xr=!1,oe=!1,Ef=typeof WeakSet=="function"?WeakSet:Set,S=null;function Yn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Q(e,n,r)}else t.current=null}function Di(e,n,t){try{t()}catch(r){Q(e,n,r)}}var $u=!1;function Cf(e,n){if(yi=Ar,e=Xa(),ao(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,u=-1,a=-1,d=0,h=0,g=e,m=null;n:for(;;){for(var x;g!==t||l!==0&&g.nodeType!==3||(u=o+l),g!==i||r!==0&&g.nodeType!==3||(a=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(x=g.firstChild)!==null;)m=g,g=x;for(;;){if(g===e)break n;if(m===t&&++d===l&&(u=o),m===i&&++h===r&&(a=o),(x=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=x}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(vi={focusedElem:e,selectionRange:t},Ar=!1,S=n;S!==null;)if(n=S,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,S=e;else for(;S!==null;){n=S;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,A=k.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?w:Le(n.type,w),A);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(y){Q(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,S=e;break}S=n.return}return k=$u,$u=!1,k}function Mt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Di(n,t,i)}l=l.next}while(l!==r)}}function pl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ii(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ws(e){var n=e.alternate;n!==null&&(e.alternate=null,Ws(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ae],delete n[Qt],delete n[wi],delete n[af],delete n[sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qs(e){return e.tag===5||e.tag===3||e.tag===4}function Au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(Fi(e,n,t),e=e.sibling;e!==null;)Fi(e,n,t),e=e.sibling}function Oi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oi(e,n,t),e=e.sibling;e!==null;)Oi(e,n,t),e=e.sibling}var ne=null,Me=!1;function be(e,n,t){for(t=t.child;t!==null;)Ks(e,n,t),t=t.sibling}function Ks(e,n,t){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(il,t)}catch{}switch(t.tag){case 5:oe||Yn(t,n);case 6:var r=ne,l=Me;ne=null,be(e,n,t),ne=r,Me=l,ne!==null&&(Me?(e=ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ne.removeChild(t.stateNode));break;case 18:ne!==null&&(Me?(e=ne,t=t.stateNode,e.nodeType===8?Al(e.parentNode,t):e.nodeType===1&&Al(e,t),Ut(e)):Al(ne,t.stateNode));break;case 4:r=ne,l=Me,ne=t.stateNode.containerInfo,Me=!0,be(e,n,t),ne=r,Me=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Di(t,n,o),l=l.next}while(l!==r)}be(e,n,t);break;case 1:if(!oe&&(Yn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){Q(t,n,u)}be(e,n,t);break;case 21:be(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,be(e,n,t),oe=r):be(e,n,t);break;default:be(e,n,t)}}function Uu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ef),n.forEach(function(r){var l=If.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Te(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:ne=u.stateNode,Me=!1;break e;case 3:ne=u.stateNode.containerInfo,Me=!0;break e;case 4:ne=u.stateNode.containerInfo,Me=!0;break e}u=u.return}if(ne===null)throw Error(v(160));Ks(i,o,l),ne=null,Me=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(d){Q(l,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ys(n,e),n=n.sibling}function Ys(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(n,e),Oe(e),r&4){try{Mt(3,e,e.return),pl(3,e)}catch(w){Q(e,e.return,w)}try{Mt(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:Te(n,e),Oe(e),r&512&&t!==null&&Yn(t,t.return);break;case 5:if(Te(n,e),Oe(e),r&512&&t!==null&&Yn(t,t.return),e.flags&32){var l=e.stateNode;try{Ft(l,"")}catch(w){Q(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ha(l,i),ui(u,o);var d=ui(u,i);for(o=0;o<a.length;o+=2){var h=a[o],g=a[o+1];h==="style"?ka(l,g):h==="dangerouslySetInnerHTML"?va(l,g):h==="children"?Ft(l,g):Gi(l,h,g,d)}switch(u){case"input":ti(l,i);break;case"textarea":ga(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Gn(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Gn(l,!!i.multiple,i.defaultValue,!0):Gn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Qt]=i}catch(w){Q(e,e.return,w)}}break;case 6:if(Te(n,e),Oe(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){Q(e,e.return,w)}}break;case 3:if(Te(n,e),Oe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ut(n.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:Te(n,e),Oe(e);break;case 13:Te(n,e),Oe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(zo=X())),r&4&&Uu(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(d=oe)||h,Te(n,e),oe=d):Te(n,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(g=S=h;S!==null;){switch(m=S,x=m.child,m.tag){case 0:case 11:case 14:case 15:Mt(4,m,m.return);break;case 1:Yn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(w){Q(r,t,w)}}break;case 5:Yn(m,m.return);break;case 22:if(m.memoizedState!==null){Vu(g);continue}}x!==null?(x.return=m,S=x):Vu(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=g.stateNode,a=g.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=xa("display",o))}catch(w){Q(e,e.return,w)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(w){Q(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Te(n,e),Oe(e),r&4&&Uu(e);break;case 21:break;default:Te(n,e),Oe(e)}}function Oe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Qs(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Ft(l,""),r.flags&=-33);var i=Au(e);Oi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Au(e);Fi(e,u,o);break;default:throw Error(v(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _f(e,n,t){S=e,Xs(e)}function Xs(e,n,t){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||xr;if(!o){var u=l.alternate,a=u!==null&&u.memoizedState!==null||oe;u=xr;var d=oe;if(xr=o,(oe=a)&&!d)for(S=l;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?Hu(l):a!==null?(a.return=o,S=a):Hu(l);for(;i!==null;)S=i,Xs(i),i=i.sibling;S=l,xr=u,oe=d}Bu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Bu(e)}}function Bu(e){for(;S!==null;){var n=S;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||pl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Eu(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Eu(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Ut(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}oe||n.flags&512&&Ii(n)}catch(m){Q(n,n.return,m)}}if(n===e){S=null;break}if(t=n.sibling,t!==null){t.return=n.return,S=t;break}S=n.return}}function Vu(e){for(;S!==null;){var n=S;if(n===e){S=null;break}var t=n.sibling;if(t!==null){t.return=n.return,S=t;break}S=n.return}}function Hu(e){for(;S!==null;){var n=S;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{pl(4,n)}catch(a){Q(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){Q(n,l,a)}}var i=n.return;try{Ii(n)}catch(a){Q(n,i,a)}break;case 5:var o=n.return;try{Ii(n)}catch(a){Q(n,o,a)}}}catch(a){Q(n,n.return,a)}if(n===e){S=null;break}var u=n.sibling;if(u!==null){u.return=n.return,S=u;break}S=n.return}}var Pf=Math.ceil,br=qe.ReactCurrentDispatcher,_o=qe.ReactCurrentOwner,Ce=qe.ReactCurrentBatchConfig,M=0,ee=null,G=null,te=0,ye=0,Xn=vn(0),J=0,Jt=null,Mn=0,ml=0,Po=0,Rt=null,fe=null,zo=0,ut=1/0,Ve=null,el=!1,$i=null,fn=null,kr=!1,on=null,nl=0,Dt=0,Ai=null,Lr=-1,Mr=0;function se(){return M&6?X():Lr!==-1?Lr:Lr=X()}function pn(e){return e.mode&1?M&2&&te!==0?te&-te:df.transition!==null?(Mr===0&&(Mr=Ma()),Mr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Aa(e.type)),e):1}function Ie(e,n,t,r){if(50<Dt)throw Dt=0,Ai=null,Error(v(185));bt(e,t,r),(!(M&2)||e!==ee)&&(e===ee&&(!(M&2)&&(ml|=t),J===4&&rn(e,te)),ge(e,r),t===1&&M===0&&!(n.mode&1)&&(ut=X()+500,cl&&xn()))}function ge(e,n){var t=e.callbackNode;cd(e,n);var r=$r(e,e===ee?te:0);if(r===0)t!==null&&qo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&qo(t),n===1)e.tag===0?cf(Wu.bind(null,e)):ls(Wu.bind(null,e)),of(function(){!(M&6)&&xn()}),t=null;else{switch(Ra(r)){case 1:t=eo;break;case 4:t=Ta;break;case 16:t=Or;break;case 536870912:t=La;break;default:t=Or}t=tc(t,Gs.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Gs(e,n){if(Lr=-1,Mr=0,M&6)throw Error(v(327));var t=e.callbackNode;if(et()&&e.callbackNode!==t)return null;var r=$r(e,e===ee?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=tl(e,r);else{n=r;var l=M;M|=2;var i=Js();(ee!==e||te!==n)&&(Ve=null,ut=X()+500,_n(e,n));do try{Lf();break}catch(u){Zs(e,u)}while(!0);mo(),br.current=i,M=l,G!==null?n=0:(ee=null,te=0,n=J)}if(n!==0){if(n===2&&(l=fi(e),l!==0&&(r=l,n=Ui(e,l))),n===1)throw t=Jt,_n(e,0),rn(e,r),ge(e,X()),t;if(n===6)rn(e,r);else{if(l=e.current.alternate,!(r&30)&&!zf(l)&&(n=tl(e,r),n===2&&(i=fi(e),i!==0&&(r=i,n=Ui(e,i))),n===1))throw t=Jt,_n(e,0),rn(e,r),ge(e,X()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:jn(e,fe,Ve);break;case 3:if(rn(e,r),(r&130023424)===r&&(n=zo+500-X(),10<n)){if($r(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ki(jn.bind(null,e,fe,Ve),n);break}jn(e,fe,Ve);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-De(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pf(r/1960))-r,10<r){e.timeoutHandle=ki(jn.bind(null,e,fe,Ve),r);break}jn(e,fe,Ve);break;case 5:jn(e,fe,Ve);break;default:throw Error(v(329))}}}return ge(e,X()),e.callbackNode===t?Gs.bind(null,e):null}function Ui(e,n){var t=Rt;return e.current.memoizedState.isDehydrated&&(_n(e,n).flags|=256),e=tl(e,n),e!==2&&(n=fe,fe=t,n!==null&&Bi(n)),e}function Bi(e){fe===null?fe=e:fe.push.apply(fe,e)}function zf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Fe(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rn(e,n){for(n&=~Po,n&=~ml,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-De(n),r=1<<t;e[t]=-1,n&=~r}}function Wu(e){if(M&6)throw Error(v(327));et();var n=$r(e,0);if(!(n&1))return ge(e,X()),null;var t=tl(e,n);if(e.tag!==0&&t===2){var r=fi(e);r!==0&&(n=r,t=Ui(e,r))}if(t===1)throw t=Jt,_n(e,0),rn(e,n),ge(e,X()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,jn(e,fe,Ve),ge(e,X()),null}function To(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(ut=X()+500,cl&&xn())}}function Rn(e){on!==null&&on.tag===0&&!(M&6)&&et();var n=M;M|=1;var t=Ce.transition,r=R;try{if(Ce.transition=null,R=1,e)return e()}finally{R=r,Ce.transition=t,M=n,!(M&6)&&xn()}}function Lo(){ye=Xn.current,F(Xn)}function _n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,lf(t)),G!==null)for(t=G.return;t!==null;){var r=t;switch(co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:it(),F(me),F(ue),ko();break;case 5:xo(r);break;case 4:it();break;case 13:F(V);break;case 19:F(V);break;case 10:ho(r.type._context);break;case 22:case 23:Lo()}t=t.return}if(ee=e,G=e=mn(e.current,null),te=ye=n,J=0,Jt=null,Po=ml=Mn=0,fe=Rt=null,En!==null){for(n=0;n<En.length;n++)if(t=En[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}En=null}return e}function Zs(e,n){do{var t=G;try{if(mo(),Pr.current=qr,Jr){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Jr=!1}if(Ln=0,b=Z=H=null,Lt=!1,Xt=0,_o.current=null,t===null||t.return===null){J=1,Jt=n,G=null;break}e:{var i=e,o=t.return,u=t,a=n;if(n=te,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,h=u,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Lu(o);if(x!==null){x.flags&=-257,Mu(x,o,u,i,n),x.mode&1&&Tu(i,d,n),n=x,a=d;var k=n.updateQueue;if(k===null){var w=new Set;w.add(a),n.updateQueue=w}else k.add(a);break e}else{if(!(n&1)){Tu(i,d,n),Mo();break e}a=Error(v(426))}}else if(U&&u.mode&1){var A=Lu(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Mu(A,o,u,i,n),fo(ot(a,u));break e}}i=a=ot(a,u),J!==4&&(J=2),Rt===null?Rt=[i]:Rt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=Rs(i,a,n);Nu(i,f);break e;case 1:u=a;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(fn===null||!fn.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var y=Ds(i,u,n);Nu(i,y);break e}}i=i.return}while(i!==null)}bs(t)}catch(j){n=j,G===t&&t!==null&&(G=t=t.return);continue}break}while(!0)}function Js(){var e=br.current;return br.current=qr,e===null?qr:e}function Mo(){(J===0||J===3||J===2)&&(J=4),ee===null||!(Mn&268435455)&&!(ml&268435455)||rn(ee,te)}function tl(e,n){var t=M;M|=2;var r=Js();(ee!==e||te!==n)&&(Ve=null,_n(e,n));do try{Tf();break}catch(l){Zs(e,l)}while(!0);if(mo(),M=t,br.current=r,G!==null)throw Error(v(261));return ee=null,te=0,J}function Tf(){for(;G!==null;)qs(G)}function Lf(){for(;G!==null&&!nd();)qs(G)}function qs(e){var n=nc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?bs(e):G=n,_o.current=null}function bs(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Nf(t,n),t!==null){t.flags&=32767,G=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,G=null;return}}else if(t=jf(t,n,ye),t!==null){G=t;return}if(n=n.sibling,n!==null){G=n;return}G=n=e}while(n!==null);J===0&&(J=5)}function jn(e,n,t){var r=R,l=Ce.transition;try{Ce.transition=null,R=1,Mf(e,n,t,r)}finally{Ce.transition=l,R=r}return null}function Mf(e,n,t,r){do et();while(on!==null);if(M&6)throw Error(v(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(dd(e,i),e===ee&&(G=ee=null,te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||kr||(kr=!0,tc(Or,function(){return et(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var o=R;R=1;var u=M;M|=4,_o.current=null,Cf(e,t),Ys(t,e),Jd(vi),Ar=!!yi,vi=yi=null,e.current=t,_f(t),td(),M=u,R=o,Ce.transition=i}else e.current=t;if(kr&&(kr=!1,on=e,nl=l),i=e.pendingLanes,i===0&&(fn=null),id(t.stateNode),ge(e,X()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(el)throw el=!1,e=$i,$i=null,e;return nl&1&&e.tag!==0&&et(),i=e.pendingLanes,i&1?e===Ai?Dt++:(Dt=0,Ai=e):Dt=0,xn(),null}function et(){if(on!==null){var e=Ra(nl),n=Ce.transition,t=R;try{if(Ce.transition=null,R=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,nl=0,M&6)throw Error(v(331));var l=M;for(M|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var d=u[a];for(S=d;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:Mt(8,h,i)}var g=h.child;if(g!==null)g.return=h,S=g;else for(;S!==null;){h=S;var m=h.sibling,x=h.return;if(Ws(h),h===d){S=null;break}if(m!==null){m.return=x,S=m;break}S=x}}}var k=i.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Mt(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var c=e.current;for(S=c;S!==null;){o=S;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,S=p;else e:for(o=c;S!==null;){if(u=S,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:pl(9,u)}}catch(j){Q(u,u.return,j)}if(u===o){S=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,S=y;break e}S=u.return}}if(M=l,xn(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(il,e)}catch{}r=!0}return r}finally{R=t,Ce.transition=n}}return!1}function Qu(e,n,t){n=ot(t,n),n=Rs(e,n,1),e=dn(e,n,1),n=se(),e!==null&&(bt(e,1,n),ge(e,n))}function Q(e,n,t){if(e.tag===3)Qu(e,e,t);else for(;n!==null;){if(n.tag===3){Qu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=ot(t,e),e=Ds(n,e,1),n=dn(n,e,1),e=se(),n!==null&&(bt(n,1,e),ge(n,e));break}}n=n.return}}function Rf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,ee===e&&(te&t)===t&&(J===4||J===3&&(te&130023424)===te&&500>X()-zo?_n(e,0):Po|=t),ge(e,n)}function ec(e,n){n===0&&(e.mode&1?(n=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):n=1);var t=se();e=Ze(e,n),e!==null&&(bt(e,n,t),ge(e,t))}function Df(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ec(e,t)}function If(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),ec(e,t)}var nc;nc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,Sf(e,n,t);pe=!!(e.flags&131072)}else pe=!1,U&&n.flags&1048576&&is(n,Kr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Tr(e,n),e=n.pendingProps;var l=tt(n,ue.current);bn(n,t),l=So(null,n,r,e,l,t);var i=jo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(i=!0,Wr(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,yo(n),l.updater=fl,n.stateNode=l,l._reactInternals=n,_i(n,r,e,t),n=Ti(null,n,r,!0,i,t)):(n.tag=0,U&&i&&so(n),ae(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Tr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Of(r),e=Le(r,e),l){case 0:n=zi(null,n,r,e,t);break e;case 1:n=Iu(null,n,r,e,t);break e;case 11:n=Ru(null,n,r,e,t);break e;case 14:n=Du(null,n,r,Le(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),zi(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),Iu(e,n,r,l,t);case 3:e:{if($s(n),e===null)throw Error(v(387));r=n.pendingProps,i=n.memoizedState,l=i.element,ds(e,n),Gr(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=ot(Error(v(423)),n),n=Fu(e,n,r,t,l);break e}else if(r!==l){l=ot(Error(v(424)),n),n=Fu(e,n,r,t,l);break e}else for(ve=cn(n.stateNode.containerInfo.firstChild),xe=n,U=!0,Re=null,t=ss(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(rt(),r===l){n=Je(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return fs(n),e===null&&Ni(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,xi(r,l)?o=null:i!==null&&xi(r,i)&&(n.flags|=32),Os(e,n),ae(e,n,o,t),n.child;case 6:return e===null&&Ni(n),null;case 13:return As(e,n,t);case 4:return vo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=lt(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),Ru(e,n,r,l,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,D(Yr,r._currentValue),r._currentValue=o,i!==null)if(Fe(i.value,o)){if(i.children===l.children&&!me.current){n=Je(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ye(-1,t&-t),a.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?a.next=a:(a.next=h.next,h.next=a),d.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Ei(i.return,t,n),u.lanes|=t;break}a=a.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(v(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Ei(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ae(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,bn(n,t),l=_e(l),r=r(l),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,l=Le(r,n.pendingProps),l=Le(r.type,l),Du(e,n,r,l,t);case 15:return Is(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),Tr(e,n),n.tag=1,he(r)?(e=!0,Wr(n)):e=!1,bn(n,t),Ms(n,r,l),_i(n,r,l,t),Ti(null,n,r,!0,e,t);case 19:return Us(e,n,t);case 22:return Fs(e,n,t)}throw Error(v(156,n.tag))};function tc(e,n){return za(e,n)}function Ff(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,t,r){return new Ff(e,n,t,r)}function Ro(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Of(e){if(typeof e=="function")return Ro(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ji)return 11;if(e===qi)return 14}return 2}function mn(e,n){var t=e.alternate;return t===null?(t=Ee(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Rr(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")Ro(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case $n:return Pn(t.children,l,i,n);case Zi:o=8,l|=8;break;case Jl:return e=Ee(12,t,n,l|2),e.elementType=Jl,e.lanes=i,e;case ql:return e=Ee(13,t,n,l),e.elementType=ql,e.lanes=i,e;case bl:return e=Ee(19,t,n,l),e.elementType=bl,e.lanes=i,e;case fa:return hl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ca:o=10;break e;case da:o=9;break e;case Ji:o=11;break e;case qi:o=14;break e;case en:o=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=Ee(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Pn(e,n,t,r){return e=Ee(7,e,r,n),e.lanes=t,e}function hl(e,n,t,r){return e=Ee(22,e,r,n),e.elementType=fa,e.lanes=t,e.stateNode={isHidden:!1},e}function Yl(e,n,t){return e=Ee(6,e,null,n),e.lanes=t,e}function Xl(e,n,t){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function $f(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Do(e,n,t,r,l,i,o,u,a){return e=new $f(e,n,t,u,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ee(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},yo(i),e}function Af(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function rc(e){if(!e)return gn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(he(t))return rs(e,t,n)}return n}function lc(e,n,t,r,l,i,o,u,a){return e=Do(t,r,!0,e,l,i,o,u,a),e.context=rc(null),t=e.current,r=se(),l=pn(t),i=Ye(r,l),i.callback=n??null,dn(t,i,l),e.current.lanes=l,bt(e,l,r),ge(e,r),e}function gl(e,n,t,r){var l=n.current,i=se(),o=pn(l);return t=rc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ye(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=dn(l,n,o),e!==null&&(Ie(e,l,o,i),_r(e,l,o)),o}function rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ku(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Io(e,n){Ku(e,n),(e=e.alternate)&&Ku(e,n)}function Uf(){return null}var ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fo(e){this._internalRoot=e}yl.prototype.render=Fo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));gl(e,n,null,null)};yl.prototype.unmount=Fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Rn(function(){gl(null,e,null,null)}),n[Ge]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<tn.length&&n!==0&&n<tn[t].priority;t++);tn.splice(t,0,e),t===0&&$a(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yu(){}function Bf(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=rl(o);i.call(d)}}var o=lc(n,r,e,0,null,!1,!1,"",Yu);return e._reactRootContainer=o,e[Ge]=o.current,Ht(e.nodeType===8?e.parentNode:e),Rn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var d=rl(a);u.call(d)}}var a=Do(e,0,!1,null,null,!1,!1,"",Yu);return e._reactRootContainer=a,e[Ge]=a.current,Ht(e.nodeType===8?e.parentNode:e),Rn(function(){gl(n,a,t,r)}),a}function xl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var a=rl(o);u.call(a)}}gl(n,o,e,l)}else o=Bf(t,n,e,l,r);return rl(o)}Da=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Nt(n.pendingLanes);t!==0&&(no(n,t|1),ge(n,X()),!(M&6)&&(ut=X()+500,xn()))}break;case 13:Rn(function(){var r=Ze(e,1);if(r!==null){var l=se();Ie(r,e,1,l)}}),Io(e,1)}};to=function(e){if(e.tag===13){var n=Ze(e,134217728);if(n!==null){var t=se();Ie(n,e,134217728,t)}Io(e,134217728)}};Ia=function(e){if(e.tag===13){var n=pn(e),t=Ze(e,n);if(t!==null){var r=se();Ie(t,e,n,r)}Io(e,n)}};Fa=function(){return R};Oa=function(e,n){var t=R;try{return R=e,n()}finally{R=t}};si=function(e,n,t){switch(n){case"input":if(ti(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=sl(r);if(!l)throw Error(v(90));ma(r),ti(r,l)}}}break;case"textarea":ga(e,t);break;case"select":n=t.value,n!=null&&Gn(e,!!t.multiple,n,!1)}};ja=To;Na=Rn;var Vf={usingClientEntryPoint:!1,Events:[nr,Vn,sl,wa,Sa,To]},wt={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hf={bundleType:wt.bundleType,version:wt.version,rendererPackageName:wt.rendererPackageName,rendererConfig:wt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_a(e),e===null?null:e.stateNode},findFiberByHostInstance:wt.findFiberByHostInstance||Uf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{il=wr.inject(Hf),Ue=wr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vf;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(n))throw Error(v(200));return Af(e,n,null,t)};we.createRoot=function(e,n){if(!Oo(e))throw Error(v(299));var t=!1,r="",l=ic;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Do(e,1,!1,null,null,t,!1,r,l),e[Ge]=n.current,Ht(e.nodeType===8?e.parentNode:e),new Fo(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=_a(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Rn(e)};we.hydrate=function(e,n,t){if(!vl(n))throw Error(v(200));return xl(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!Oo(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=ic;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=lc(n,null,e,1,t??null,l,!1,i,o),e[Ge]=n.current,Ht(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new yl(n)};we.render=function(e,n,t){if(!vl(n))throw Error(v(200));return xl(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!vl(e))throw Error(v(40));return e._reactRootContainer?(Rn(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};we.unstable_batchedUpdates=To;we.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!vl(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return xl(e,n,t,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)}catch(e){console.error(e)}}oc(),oa.exports=we;var Wf=oa.exports,Xu=Wf;Gl.createRoot=Xu.createRoot,Gl.hydrateRoot=Xu.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),uc=(...e)=>e.filter((n,t,r)=>!!n&&r.indexOf(n)===t).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=O.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...u},a)=>O.createElement("svg",{ref:a,...Kf,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:uc("lucide",l),...u},[...o.map(([d,h])=>O.createElement(d,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(e,n)=>{const t=O.forwardRef(({className:r,...l},i)=>O.createElement(Yf,{ref:i,iconNode:n,className:uc(`lucide-${Qf(e)}`,r),...l}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=$("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=$("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=$("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=$("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=$("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=$("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=$("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=$("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=$("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=$("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=$("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=$("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=$("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=$("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=$("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=$("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=$("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=$("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=$("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=$("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=$("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=$("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=$("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=$("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=$("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),pc=({size:e=24,className:n=""})=>s.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",className:n,children:s.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})}),pp=({size:e=24,className:n=""})=>s.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",className:n,children:s.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),B={name:"Muhamad Fakhrul Arifin",initials:"MFA",role:"Fullstack Web Developer",tagline:"Fullstack Web Developer yang mengubah kebutuhan bisnis menjadi aplikasi web nyata — mulai dari analisis kebutuhan, perancangan sistem, pengembangan front-end dan back-end, hingga deployment ke production. Terbiasa membangun sistem end-to-end yang benar-benar siap dipakai, bukan sekadar prototipe.",location:"Tangerang, Indonesia",email:"muhamadfakhlarifin17@gmail.com",github:"https://github.com/Fakhrul-17",linkedin:"https://www.linkedin.com/in/muhamadfakhrul-arifin-25629b3a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",whatsapp:"62895359804169",photo:"/assets/profil.jpeg",cvUrl:"/assets/CV_Mohamad_Fakhrul_Arifin.pdf",aboutMe:`
Saya Muhamad Fakhrul Arifin, Fullstack Web Developer dengan latar belakang mahasiswa Sistem Informasi. Saya membangun aplikasi web secara menyeluruh — merancang basis data, mengembangkan back-end dan REST API, hingga menyusun antarmuka yang siap dipakai pengguna.
Perjalanan saya ke dunia teknologi tidak lurus: saya berlatar belakang pendidikan Teknik Kendaraan Ringan sebelum pindah ke Sistem Informasi. Perpindahan ini mengajarkan saya untuk cepat beradaptasi, belajar secara mandiri, dan berani memulai dari nol — kemampuan yang sekarang menjadi salah satu kekuatan saya sebagai developer.
Saya telah membangun beberapa aplikasi nyata menggunakan React, Node.js, Express, dan MySQL, mulai dari website company profile untuk klien, aplikasi streaming dengan REST API kustom, hingga sistem pendaftaran sekolah berbasis web lengkap dengan autentikasi dan basis data. Bagi saya, setiap error dan kesulitan dalam mengerjakan project bukan hambatan, melainkan bagian dari proses menjadi developer yang lebih baik.
Ke depannya, saya ingin terus berkembang sebagai Web Developer atau Software Developer profesional, membangun produk digital yang benar-benar dipakai dan memberi manfaat bagi penggunanya.
`,funFacts:["Membangun sistem end-to-end: front-end, back-end, REST API, hingga basis data.","Berpengalaman merancang basis data dengan ERD dan memodelkan sistem menggunakan UML.","Pindah dari Teknik Kendaraan Ringan ke Sistem Informasi — terbukti cepat beradaptasi dan belajar hal baru."]},mp=[{icon:"grad",title:"S1 Sistem Informasi",org:"Universitas Pamulang",period:"Sedang Berjalan",note:"Mempelajari pengembangan perangkat lunak, basis data, analisis sistem, pemodelan UML, data mining, dan berbagai bidang teknologi informasi."},{icon:"award",title:"Pelatihan Fullstack Developer",org:"Harisenin.com",period:"Selesai",note:"Mengikuti pelatihan pengembangan aplikasi web fullstack yang mencakup front-end, back-end, database, API, dan deployment."}],hp=["HTML","CSS","JavaScript","React","Tailwind CSS","PHP","Laravel","Node.js","MySQL","PostgreSQL","REST API","Flutter"],gp=[{icon:tp,title:"Web Development",description:"Membangun website yang responsif, modern, dan mudah digunakan sesuai kebutuhan pengguna."},{icon:sc,title:"Frontend Development",description:"Mengembangkan tampilan website menggunakan HTML, CSS, JavaScript, React, dan Tailwind CSS."},{icon:sp,title:"Backend Development",description:"Mengembangkan sistem backend menggunakan Node.js dan Laravel untuk menangani logika bisnis, REST API, autentikasi, CRUD, serta integrasi antara aplikasi dan database."},{icon:ep,title:"Database",description:"Merancang struktur database dan mengelola data menggunakan MySQL maupun PostgreSQL."},{icon:cp,title:"Mobile Development",description:"Mengembangkan aplikasi mobile menggunakan Flutter dengan tampilan yang responsif."}],yp=[{id:"01",title:"Anggrayini Nove Tax & Excise Consultant",category:"Company Profile Website",year:"2026",description:"Membangun website company profile untuk klien konsultan pajak dan cukai secara end-to-end — dari analisis kebutuhan, desain antarmuka, hingga deployment ke domain produksi. Dilengkapi optimasi SEO on-page dan tampilan responsif penuh di seluruh perangkat.",detail:"Website ini dibuat untuk klien konsultan pajak dan cukai, Anggrayini Nove Tax & Excise Consultant, sebagai kanal informasi resmi mengenai layanan yang mereka tawarkan. Saya menangani seluruh prosesnya secara end-to-end: menyusun struktur halaman dan desain antarmuka bertema gradient gelap dengan aksen emas sesuai identitas klien, membangun halaman menggunakan HTML, CSS, dan JavaScript, memastikan tampilan sepenuhnya responsif di desktop maupun mobile, hingga menerapkan optimasi SEO on-page (meta tag, sitemap.xml, dan robots.txt) agar mudah ditemukan di mesin pencari. Setelah pengembangan selesai, saya juga menangani deployment ke domain produksi melalui Hostinger dan memverifikasi properti website di Google Search Console — website ini sudah live dan dipakai klien.",tags:["HTML","CSS","JavaScript","Responsive","SEO"],role:"Web Development, Responsive Design, Deployment, dan Hosting",link:"https://anggrayininovetaxlawconsultant.com",repo:"https://github.com/Fakhrul-17/company-profile.git",images:["/assets/projects/CP1.png","/assets/projects/CP2.png","/assets/projects/CP3.png","/assets/projects/CP4.png"]},{id:"02",title:"Chill",category:"Streaming App",year:"2026",description:"Membangun aplikasi streaming bergaya Netflix secara full-stack — antarmuka React dengan Redux Toolkit di front-end, dan REST API kustom berbasis Node.js di back-end untuk mendukung kebutuhan data aplikasi.",detail:"Chill adalah project aplikasi streaming bergaya Netflix yang saya bangun untuk mendalami pengembangan full-stack modern. Di front-end, saya membangun antarmuka penjelajahan konten menggunakan React, dengan Redux Toolkit sebagai pengelola state dan Axios untuk komunikasi ke REST API. Di back-end, saya membangun REST API kustom menggunakan Node.js dengan service layer yang dipisahkan dari route (menangani operasi ambil semua data, ambil berdasarkan ID, tambah, ubah, dan hapus data film), lalu mengujinya menggunakan Postman sebelum diintegrasikan ke front-end. Fokus utama project ini adalah menghasilkan antarmuka yang responsif dan terstruktur rapi, didukung API yang benar-benar berfungsi, bukan sekadar data statis.",tags:["React","Vite","Redux Toolkit","Axios","Tailwind CSS","Node.js","REST API"],role:"ndividual Project — Merancang & Membangun Front-End (React) dan Back-End REST API (Node.js) Secara Mandiri",link:null,repo:"https://github.com/Fakhrul-17/chill-App.git",images:["/assets/projects/CA1.png","/assets/projects/CA2.png","/assets/projects/CA3.png","/assets/projects/CA4.png","/assets/projects/CA5.png","/assets/projects/CA6.png","/assets/projects/CA7.png","/assets/projects/CA8.png","/assets/projects/CA9.png"]},{id:"03",title:"RA Haniyah — Sistem Pendaftaran Siswa Baru (PPDB)",category:"Full-Stack Web App",year:"2026",description:"Membangun sistem pendaftaran siswa baru (PPDB) online untuk RA Haniyah secara full-stack — dari halaman pendaftaran publik hingga dashboard admin untuk memverifikasi dan mengelola data pendaftar.",detail:"RA Haniyah — Sistem Pendaftaran Siswa Baru adalah project full-stack yang saya bangun untuk mendigitalkan proses PPDB sekolah. Di front-end, saya membangun landing page, formulir pendaftaran multi-langkah dengan validasi, halaman cek status pendaftaran, serta dashboard admin, menggunakan React dan Vite. Di back-end, saya membangun REST API menggunakan Node.js dan Express yang terhubung ke database MySQL, dilengkapi autentikasi admin berbasis JWT dan fitur upload dokumen pendaftaran menggunakan multer. Dashboard admin memungkinkan pihak sekolah memverifikasi pendaftar, mengelola gelombang pendaftaran, serta mengekspor data ke PDF dan Excel. Project ini menjadi bukti nyata kemampuan saya membangun sistem secara menyeluruh — dari analisis kebutuhan hingga aplikasi yang benar-benar berjalan dan bisa dipakai.",tags:["React","Vite","Node.js","Express","MySQL","JWT"],role:"Pengembangan Full-Stack: Frontend, Backend API, dan Basis Data",link:null,repo:"https://github.com/Fakhrul-17/Pendaftaran-Sekolah-RA-Haniyah.git",images:["/assets/projects/RA1.png","/assets/projects/RA2.png","/assets/projects/RA3.png","/assets/projects/RA4.png","/assets/projects/RA5.png","/assets/projects/RA6.png"]}],mc=[{id:"home",label:"Beranda",icon:lp},{id:"about",label:"Tentang",icon:fp},{id:"services",label:"Keahlian",icon:sc},{id:"projects",label:"Proyek",icon:Zf},{id:"contact",label:"Kontak",icon:Vi}],at=e=>{const n=document.getElementById(e);if(!n)return;const l=n.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:l,behavior:"smooth"})};function vp(){const e=O.useRef(null),[n,t]=O.useState(!1);return O.useEffect(()=>{const r=e.current;if(!r)return;const l=new IntersectionObserver(([i])=>{i.isIntersecting&&(t(!0),l.disconnect())},{threshold:.1});return l.observe(r),()=>{l.disconnect()}},[]),[e,n]}const Ke=({children:e,className:n=""})=>{const[t,r]=vp();return s.jsx("div",{ref:t,className:`
        transition-all
        duration-1000
        ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        ${n}
      `,children:e})};function xp(e){const[n,t]=O.useState(e[0]);return O.useEffect(()=>{const r=e.map(i=>document.getElementById(i)).filter(Boolean);if(!r.length)return;const l=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&t(o.target.id)})},{rootMargin:"-40% 0px -50% 0px",threshold:0});return r.forEach(i=>{l.observe(i)}),()=>{l.disconnect()}},[e]),n}const $o=({src:e,alt:n,rounded:t="rounded-2xl",initialsBg:r,dark:l})=>{const[i,o]=O.useState(!e);return i?s.jsx("div",{className:`
          w-full
          h-full
          ${t}
          flex
          items-center
          justify-center
          ${l?"bg-slate-800":"bg-gray-100"}
        `,children:s.jsx("span",{className:`
            text-5xl
            font-bold
            ${l?"text-slate-600":"text-gray-300"}
          `,children:r})}):s.jsx("img",{src:e,alt:n,onError:()=>o(!0),className:`
        w-full
        h-full
        object-cover
        grayscale
        group-hover:grayscale-0
        transition-all
        duration-500
      `})},kp=({dark:e,setDark:n,active:t})=>{const[r,l]=O.useState(!1);return O.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]),s.jsxs(s.Fragment,{children:[s.jsx("nav",{className:`
          fixed
          top-0
          left-0
          right-0
          z-50
          shadow-sm
          backdrop-blur-md
          ${e?"bg-slate-900/95":"bg-white/95"}
        `,children:s.jsxs("div",{className:`
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            h-16
            sm:h-20
            flex
            items-center
            justify-between
          `,children:[s.jsxs("button",{onClick:()=>at("home"),className:`
              text-lg
              sm:text-2xl
              font-bold
              ${e?"text-white hover:text-blue-400":"text-gray-900 hover:text-blue-600"}
            `,children:[B.name,"_"]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:()=>n(i=>!i),"aria-label":"Ganti tema",className:`
                p-2
                rounded-lg
                ${e?"text-white hover:bg-slate-800":"text-gray-900 hover:bg-gray-100"}
              `,children:e?s.jsx(dp,{size:20}):s.jsx(ap,{size:20})}),s.jsx("button",{onClick:()=>l(!0),"aria-label":"Buka menu",className:`
                md:hidden
                p-2
                rounded-lg
                ${e?"text-white hover:bg-slate-800":"text-gray-900 hover:bg-gray-100"}
              `,children:s.jsx(op,{size:21})})]})]})}),r&&s.jsxs("div",{className:`
            fixed
            inset-0
            z-[60]
            bg-slate-950/98
            backdrop-blur-md
            flex
            items-center
            justify-center
          `,children:[s.jsx("button",{onClick:()=>l(!1),"aria-label":"Tutup menu",className:`
              absolute
              top-6
              right-6
              text-white
              hover:text-blue-400
            `,children:s.jsx(fc,{size:32})}),s.jsxs("div",{className:"text-center",children:[s.jsx("h2",{className:`
                text-3xl
                font-bold
                text-white
                mb-8
              `,children:"Menu"}),s.jsx("div",{className:"space-y-5",children:mc.map(i=>s.jsx("button",{onClick:()=>{l(!1),setTimeout(()=>{at(i.id)},150)},className:`
                      block
                      w-full
                      text-2xl
                      font-semibold
                      ${t===i.id?"text-blue-400":"text-white hover:text-blue-400"}
                    `,children:i.label},i.id))})]})]})]})},wp=({active:e})=>s.jsx("aside",{className:`
        fixed
        left-0
        top-1/2
        -translate-y-1/2
        z-40
        hidden
        md:block
      `,children:s.jsx("div",{className:`
          bg-slate-800
          rounded-r-3xl
          py-6
          px-3
          shadow-xl
        `,children:s.jsx("nav",{className:`
            flex
            flex-col
            gap-5
          `,children:mc.map(n=>{const t=n.icon,r=e===n.id;return s.jsxs("button",{onClick:()=>at(n.id),"aria-label":n.label,className:`
                    group
                    relative
                    p-3
                    rounded-xl
                    hover:bg-slate-700
                    transition-all
                  `,children:[s.jsx(t,{size:23,className:r?"text-blue-400":"text-white"}),s.jsx("span",{className:`
                      absolute
                      left-full
                      ml-4
                      top-1/2
                      -translate-y-1/2
                      px-3
                      py-2
                      bg-slate-900
                      text-white
                      text-sm
                      rounded-lg
                      opacity-0
                      invisible
                      group-hover:opacity-100
                      group-hover:visible
                      whitespace-nowrap
                      transition-all
                      shadow-xl
                    `,children:n.label})]},n.id)})})})}),Sp=({dark:e})=>{const[n,t]=O.useState(!1);return O.useEffect(()=>{t(!0)},[]),s.jsxs("section",{id:"home",className:`
        min-h-screen
        pt-24
        pb-16
        md:pt-28
        md:pb-20
        flex
        items-center
        px-4
        sm:px-6
        scroll-mt-20
      `,children:[s.jsx("div",{className:"w-full",children:s.jsxs("div",{className:`
            max-w-7xl
            mx-auto
            md:pl-12
            lg:pl-24
            grid
            grid-cols-1
            md:grid-cols-2
            gap-10
            md:gap-12
            items-center
            transition-all
            duration-1000
            ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
          `,children:[s.jsxs("div",{className:`
              order-last
              md:order-first
            `,children:[s.jsx("p",{className:`
                text-xs
                sm:text-sm
                uppercase
                tracking-widest
                mb-4
                ${e?"text-slate-400":"text-gray-500"}
              `,children:B.name}),s.jsx("h1",{className:`
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-tight
                mb-5
                ${e?"text-white":"text-gray-900"}
              `,children:B.role}),s.jsx("p",{className:`
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-justify
                max-w-xl
                mb-8
                ${e?"text-slate-400":"text-gray-600"}
              `,children:B.tagline}),s.jsxs("div",{className:`
                flex
                flex-col
                sm:flex-row
                gap-3
              `,children:[s.jsxs("a",{href:B.cvUrl,download:!0,className:`
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-3.5
                  font-semibold
                  rounded-lg
                  ${e?"bg-white text-slate-900 hover:bg-gray-100":"bg-slate-800 text-white hover:bg-slate-700"}
                `,children:[s.jsx(cc,{size:18}),"Unduh CV"]}),s.jsx("button",{onClick:()=>at("contact"),className:`
                  px-7
                  py-3.5
                  border-2
                  font-semibold
                  rounded-lg
                  ${e?"border-white text-white hover:bg-white hover:text-slate-900":"border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"}
                `,children:"Hubungi Saya"})]})]}),s.jsx("div",{className:`
              order-first
              md:order-last
              flex
              justify-center
              md:justify-end
            `,children:s.jsx("div",{className:`
                w-56
                h-56
                sm:w-72
                sm:h-72
                md:w-80
                md:h-80
                lg:w-96
                lg:h-96
                rounded-full
                overflow-hidden
                shadow-2xl
                group
                ring-4
                ring-blue-500/20
              `,children:s.jsx($o,{src:B.photo,alt:"Foto profil",rounded:"rounded-full",initialsBg:B.initials,dark:e})})})]})}),s.jsxs("button",{onClick:()=>at("about"),"aria-label":"Scroll ke bagian Tentang",className:`
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          hidden
          sm:flex
          flex-col
          items-center
          gap-2
          text-slate-400
          animate-bounce
        `,children:[s.jsx("span",{className:"text-xs",children:"Scroll"}),s.jsx(Jf,{size:18})]})]})},jp=({dark:e})=>s.jsx("section",{id:"about",className:`
        px-4
        sm:px-6
        py-20
        md:py-24
        scroll-mt-20
        ${e?"bg-slate-800/50":"bg-gray-50"}
      `,children:s.jsx("div",{className:"w-full",children:s.jsxs("div",{className:`
            max-w-7xl
            mx-auto
            md:pl-12
            lg:pl-24
          `,children:[s.jsx(Ke,{children:s.jsxs("div",{className:`
                grid
                grid-cols-1
                md:grid-cols-2
                gap-10
                md:gap-14
                items-center
              `,children:[s.jsx("div",{className:`
                  order-first
                  md:order-last
                  flex
                  justify-center
                  md:justify-end
                `,children:s.jsx("div",{className:`
                    w-64
                    h-80
                    sm:w-72
                    sm:h-96
                    md:w-80
                    md:h-[420px]
                    lg:w-96
                    lg:h-[500px]
                    rounded-2xl
                    overflow-hidden
                    shadow-2xl
                    group
                  `,children:s.jsx($o,{src:B.photo,alt:"Foto profil",rounded:"rounded-2xl",initialsBg:B.initials,dark:e})})}),s.jsxs("div",{className:`
                  order-last
                  md:order-first
                `,children:[s.jsx("h2",{className:`
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-bold
                    mb-4
                    ${e?"text-white":"text-gray-900"}
                  `,children:"Tentang Saya"}),s.jsx("div",{className:"w-20 h-1 bg-blue-500 mb-8"}),s.jsx("div",{className:`
                    text-sm
                    sm:text-base
                    leading-7
                    sm:leading-8
                    whitespace-pre-line
                    text-justify
                    break-words
                    ${e?"text-slate-300":"text-gray-600"}
                  `,children:B.aboutMe})]})]})}),s.jsx(Ke,{className:"mt-14",children:s.jsx("div",{className:`
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-4
              `,children:B.funFacts.map((n,t)=>s.jsx("div",{className:`
                      p-5
                      rounded-xl
                      border
                      ${e?"bg-slate-900/50 border-slate-700 text-slate-300":"bg-white border-gray-200 text-gray-600"}
                    `,children:s.jsx("p",{className:`
                        text-sm
                        leading-7
                        text-justify
                      `,children:n})},t))})}),s.jsxs(Ke,{className:"mt-14",children:[s.jsx("h3",{className:`
                text-2xl
                sm:text-3xl
                font-bold
                mb-6
                ${e?"text-white":"text-gray-900"}
              `,children:"Pendidikan & Sertifikasi"}),s.jsx("div",{className:`
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              `,children:mp.map(n=>s.jsxs("div",{className:`
                      p-6
                      rounded-2xl
                      border-t-4
                      border-blue-500
                      shadow-sm
                      ${e?"bg-slate-900/50":"bg-white"}
                    `,children:[s.jsx("div",{className:`
                        w-12
                        h-12
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        mb-5
                        ${e?"bg-slate-800 text-blue-400":"bg-blue-50 text-blue-600"}
                      `,children:n.icon==="grad"?s.jsx(rp,{size:22}):s.jsx(Gf,{size:22})}),s.jsx("h4",{className:`
                        text-lg
                        font-bold
                        ${e?"text-white":"text-gray-900"}
                      `,children:n.title}),s.jsx("p",{className:`
                        mt-1
                        text-sm
                        ${e?"text-slate-400":"text-gray-500"}
                      `,children:n.org}),s.jsx("span",{className:`
                        inline-block
                        mt-4
                        px-3
                        py-1
                        rounded-full
                        bg-blue-500/10
                        text-blue-500
                        text-xs
                        font-semibold
                      `,children:n.period}),s.jsx("p",{className:`
                        mt-4
                        text-sm
                        leading-7
                        text-justify
                        ${e?"text-slate-400":"text-gray-600"}
                      `,children:n.note})]},n.title))})]}),s.jsxs(Ke,{className:"mt-14",children:[s.jsx("h3",{className:`
                text-2xl
                sm:text-3xl
                font-bold
                mb-6
                ${e?"text-white":"text-gray-900"}
              `,children:"Kompetensi Teknis"}),s.jsx("div",{className:`
                flex
                flex-wrap
                gap-3
              `,children:hp.map(n=>s.jsx("span",{className:`
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      font-semibold
                      border
                      ${e?"bg-blue-900/20 text-blue-300 border-blue-800/50":"bg-blue-50 text-blue-700 border-blue-200"}
                    `,children:n},n))})]})]})})}),Np=({dark:e})=>s.jsx("section",{id:"services",className:`
        px-4
        sm:px-6
        py-20
        md:py-24
        scroll-mt-20
        ${e?"bg-slate-900":"bg-white"}
      `,children:s.jsx("div",{className:"w-full",children:s.jsxs("div",{className:`
            max-w-7xl
            mx-auto
            md:pl-12
            lg:pl-24
          `,children:[s.jsxs(Ke,{children:[s.jsx("h2",{className:`
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                ${e?"text-white":"text-gray-900"}
              `,children:"Keahlian Saya"}),s.jsx("div",{className:`
                w-20
                h-1
                bg-blue-500
                mt-4
                mb-5
              `}),s.jsx("p",{className:`
                max-w-2xl
                text-sm
                sm:text-base
                leading-7
                text-justify
                ${e?"text-slate-400":"text-gray-600"}
              `,children:"Beberapa bidang yang sedang saya kembangkan dan gunakan dalam pengerjaan project akademik maupun project pribadi."})]}),s.jsx("div",{className:`
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
              mt-10
            `,children:gp.map(n=>{const t=n.icon;return s.jsx(Ke,{children:s.jsxs("div",{className:`
                        h-full
                        p-6
                        rounded-2xl
                        border
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-xl
                        ${e?"bg-slate-800 border-slate-700":"bg-gray-50 border-gray-200"}
                      `,children:[s.jsx("div",{className:`
                          w-12
                          h-12
                          rounded-xl
                          bg-blue-500
                          text-white
                          flex
                          items-center
                          justify-center
                          mb-5
                        `,children:s.jsx(t,{size:23})}),s.jsx("h3",{className:`
                          text-lg
                          font-bold
                          mb-3
                          ${e?"text-white":"text-gray-900"}
                        `,children:n.title}),s.jsx("p",{className:`
                          text-sm
                          leading-7
                          text-justify
                          ${e?"text-slate-400":"text-gray-600"}
                        `,children:n.description})]})},n.title)})})]})})}),Ep=({project:e,dark:n,onClick:t})=>{var r;return s.jsx("button",{type:"button",onClick:t,className:`
        group
        w-full
        text-left
        rounded-2xl
        overflow-hidden
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      `,children:s.jsxs("div",{className:`
          ${n?"bg-slate-800":"bg-white"}
        `,children:[s.jsxs("div",{className:`
            aspect-[16/10]
            relative
            overflow-hidden
          `,children:[(r=e.images)!=null&&r[0]?s.jsx("img",{src:e.images[0],alt:e.title,className:`
                w-full
                h-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              `}):s.jsxs("div",{className:`
                w-full
                h-full
                flex
                flex-col
                items-center
                justify-center
                ${n?"bg-slate-700 text-slate-500":"bg-gray-100 text-gray-400"}
              `,children:[s.jsx(dc,{size:30}),s.jsx("span",{className:"text-sm mt-2",children:"Screenshot proyek"})]}),s.jsxs("div",{className:`
              absolute
              top-4
              left-4
              px-3
              py-1.5
              bg-slate-900/90
              text-white
              rounded-lg
              text-xs
              font-bold
              flex
              items-center
              gap-1.5
            `,children:[s.jsx(ac,{size:13}),e.year]}),s.jsx("div",{className:`
              absolute
              inset-0
              bg-slate-950/85
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
              flex
              items-center
              justify-center
            `,children:s.jsx("span",{className:`
                px-5
                py-3
                rounded-lg
                bg-white
                text-slate-900
                font-semibold
                text-sm
              `,children:"Lihat Detail Project"})})]}),s.jsxs("div",{className:"p-5",children:[s.jsx("p",{className:"text-blue-500 text-xs font-bold uppercase tracking-wider mb-2",children:e.category}),s.jsx("h3",{className:`
              font-bold
              text-lg
              ${n?"text-white":"text-gray-900"}
            `,children:e.title}),s.jsxs("p",{className:`
              text-sm
              mt-2
              leading-6
              ${n?"text-slate-400":"text-gray-500"}
            `,children:["Peran:"," ",e.role]})]})]})})},Cp=({project:e,dark:n,onClose:t})=>{var a;const[r,l]=O.useState(0);if(O.useEffect(()=>{l(0)},[e]),O.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!e)return null;const i=((a=e.images)==null?void 0:a.length)>0?e.images:[],o=()=>{i.length!==0&&l(d=>(d+1)%i.length)},u=()=>{i.length!==0&&l(d=>(d-1+i.length)%i.length)};return s.jsx("div",{className:`
        fixed
        inset-0
        z-[100]
        bg-black/80
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-4
        sm:p-6
        overflow-y-auto
      `,onClick:t,children:s.jsxs("div",{className:`
          relative
          w-full
          max-w-5xl
          max-h-[95vh]
          overflow-y-auto
          rounded-2xl
          shadow-2xl
          ${n?"bg-slate-900":"bg-white"}
        `,onClick:d=>d.stopPropagation(),children:[s.jsx("button",{onClick:t,"aria-label":"Tutup detail project",className:`
            absolute
            top-4
            right-4
            z-20
            w-10
            h-10
            rounded-full
            bg-black/60
            text-white
            flex
            items-center
            justify-center
            hover:bg-black/80
            transition-all
          `,children:s.jsx(fc,{size:22})}),s.jsxs("div",{className:`
            relative
            w-full
            aspect-video
            bg-slate-950
            overflow-hidden
          `,children:[i.length>0?s.jsx("img",{src:i[r],alt:`${e.title} - ${r+1}`,className:`
                w-full
                h-full
                object-contain
              `}):s.jsxs("div",{className:`
                w-full
                h-full
                flex
                flex-col
                items-center
                justify-center
                text-slate-500
              `,children:[s.jsx(dc,{size:40}),s.jsx("p",{className:"mt-3 text-sm",children:"Belum ada screenshot"})]}),i.length>1&&s.jsx("button",{onClick:u,"aria-label":"Foto sebelumnya",className:`
                absolute
                left-3
                sm:left-5
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-full
                bg-black/60
                text-white
                flex
                items-center
                justify-center
                hover:bg-black/80
                transition-all
              `,children:s.jsx(qf,{size:24})}),i.length>1&&s.jsx("button",{onClick:o,"aria-label":"Foto berikutnya",className:`
                absolute
                right-3
                sm:right-5
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-full
                bg-black/60
                text-white
                flex
                items-center
                justify-center
                hover:bg-black/80
                transition-all
              `,children:s.jsx(bf,{size:24})}),i.length>1&&s.jsxs("div",{className:`
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                px-3
                py-1.5
                rounded-full
                bg-black/60
                text-white
                text-xs
                font-semibold
              `,children:[r+1," /"," ",i.length]})]}),i.length>1&&s.jsx("div",{className:`
              flex
              justify-center
              items-center
              gap-2
              py-4
            `,children:i.map((d,h)=>s.jsx("button",{onClick:()=>l(h),"aria-label":`Foto ${h+1}`,className:`
                    h-2
                    rounded-full
                    transition-all
                    ${r===h?"w-7 bg-blue-500":"w-2 bg-gray-400"}
                  `},h))}),s.jsxs("div",{className:"p-6 sm:p-8",children:[s.jsx("p",{className:"text-blue-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2",children:e.category}),s.jsx("h2",{className:`
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
              mb-3
              ${n?"text-white":"text-gray-900"}
            `,children:e.title}),s.jsxs("div",{className:`
              flex
              items-center
              gap-2
              text-sm
              mb-6
              ${n?"text-slate-400":"text-gray-500"}
            `,children:[s.jsx(ac,{size:16}),s.jsx("span",{children:e.year})]}),s.jsxs("div",{className:"mb-7",children:[s.jsx("h3",{className:`
                text-lg
                font-bold
                mb-3
                ${n?"text-white":"text-gray-900"}
              `,children:"Tentang Project"}),s.jsx("p",{className:`
                text-sm
                sm:text-base
                leading-7
                text-justify
                ${n?"text-slate-300":"text-gray-600"}
              `,children:e.detail||e.description})]}),s.jsxs("div",{className:"mb-7",children:[s.jsx("h3",{className:`
                text-lg
                font-bold
                mb-3
                ${n?"text-white":"text-gray-900"}
              `,children:"Peran Saya"}),s.jsx("p",{className:`
                text-sm
                sm:text-base
                leading-7
                ${n?"text-slate-300":"text-gray-600"}
              `,children:e.role})]}),s.jsxs("div",{className:"mb-7",children:[s.jsx("h3",{className:`
                text-lg
                font-bold
                mb-3
                ${n?"text-white":"text-gray-900"}
              `,children:"Teknologi"}),s.jsx("div",{className:`
                flex
                flex-wrap
                gap-2
              `,children:e.tags.map(d=>s.jsx("span",{className:`
                      px-3
                      py-1.5
                      rounded-lg
                      text-xs
                      sm:text-sm
                      font-semibold
                      ${n?"bg-blue-900/30 text-blue-300 border border-blue-800/50":"bg-blue-50 text-blue-700 border border-blue-200"}
                    `,children:d},d))})]}),s.jsxs("div",{className:`
              flex
              flex-col
              sm:flex-row
              gap-3
              pt-2
            `,children:[e.link&&s.jsxs("a",{href:e.link,target:"_blank",rel:"noreferrer",className:`
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-lg
                  bg-blue-500
                  text-white
                  font-semibold
                  hover:bg-blue-600
                  transition-all
                `,children:["Lihat Website",s.jsx(np,{size:17})]}),e.repo&&s.jsxs("a",{href:e.repo,target:"_blank",rel:"noreferrer",className:`
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-lg
                  border
                  font-semibold
                  ${n?"border-slate-600 text-white hover:bg-slate-800":"border-gray-300 text-gray-800 hover:bg-gray-100"}
                `,children:[s.jsx(pc,{size:17}),"GitHub"]})]})]})]})})},_p=({dark:e})=>{const[n,t]=O.useState(null);return s.jsxs(s.Fragment,{children:[s.jsx("section",{id:"projects",className:`
          min-h-screen
          flex
          items-center
          px-4
          sm:px-6
          py-20
          scroll-mt-20
        `,children:s.jsx("div",{className:"w-full",children:s.jsxs("div",{className:`
              max-w-7xl
              mx-auto
              md:pl-12
              lg:pl-24
            `,children:[s.jsxs(Ke,{children:[s.jsx("h2",{className:`
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  ${e?"text-white":"text-gray-900"}
                `,children:"Proyek Saya"}),s.jsx("div",{className:"w-20 h-1 bg-blue-500 mt-4 mb-5"}),s.jsx("p",{className:`
                  max-w-2xl
                  text-sm
                  sm:text-base
                  leading-7
                  text-justify
                  ${e?"text-slate-400":"text-gray-600"}
                `,children:"Berikut adalah beberapa project yang pernah saya kerjakan selama proses pembelajaran maupun pengembangan kemampuan di bidang teknologi informasi. Klik salah satu project untuk melihat detail dan screenshot hasil project."})]}),s.jsx("div",{className:`
                grid
                sm:grid-cols-2
                lg:grid-cols-3
                gap-7
                mt-10
              `,children:yp.map(r=>s.jsx(Ke,{children:s.jsx(Ep,{project:r,dark:e,onClick:()=>t(r)})},r.id))})]})})}),n&&s.jsx(Cp,{project:n,dark:e,onClose:()=>t(null)})]})},Pp=({dark:e})=>s.jsx("section",{id:"contact",className:`
        px-4
        sm:px-6
        py-20
        md:py-24
        scroll-mt-20
        ${e?"bg-slate-800/50":"bg-gray-50"}
      `,children:s.jsx("div",{className:"w-full",children:s.jsx(Ke,{children:s.jsxs("div",{className:`
              max-w-7xl
              mx-auto
              md:pl-12
              lg:pl-24
              grid
              grid-cols-1
              md:grid-cols-2
              gap-10
              md:gap-12
              items-center
            `,children:[s.jsxs("div",{className:`
                order-last
                md:order-first
              `,children:[s.jsx("h2",{className:`
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  ${e?"text-white":"text-gray-900"}
                `,children:"Hubungi Saya"}),s.jsx("div",{className:`
                  w-20
                  h-1
                  bg-blue-500
                  mt-4
                  mb-6
                `}),s.jsx("p",{className:`
                  text-sm
                  sm:text-base
                  leading-7
                  text-justify
                  mb-7
                  ${e?"text-slate-400":"text-gray-600"}
                `,children:"Saya terbuka untuk kesempatan bekerja, magang, kolaborasi project, maupun diskusi mengenai pengembangan aplikasi dan teknologi. Jangan ragu untuk menghubungi saya."}),s.jsxs("div",{className:`
                  flex
                  items-center
                  gap-3
                  mb-4
                `,children:[s.jsx(Vi,{size:20,className:"text-blue-500"}),s.jsx("a",{href:`mailto:${B.email}`,className:`
                    font-semibold
                    break-all
                    ${e?"text-white hover:text-blue-400":"text-gray-900 hover:text-blue-600"}
                  `,children:B.email})]}),s.jsxs("div",{className:`
                  flex
                  items-center
                  gap-3
                  mb-7
                `,children:[s.jsx(ip,{size:20,className:"text-blue-500"}),s.jsx("span",{className:e?"text-slate-300":"text-gray-600",children:B.location})]}),s.jsxs("div",{className:`
                  flex
                  flex-wrap
                  gap-3
                `,children:[s.jsx("a",{href:`https://wa.me/${B.whatsapp}`,target:"_blank",rel:"noreferrer","aria-label":"WhatsApp",className:`
                    w-12
                    h-12
                    rounded-full
                    bg-green-500
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                  `,children:s.jsx(up,{size:21})}),s.jsx("a",{href:`mailto:${B.email}`,"aria-label":"Email",className:`
                    w-12
                    h-12
                    rounded-full
                    bg-blue-500
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                  `,children:s.jsx(Vi,{size:21})}),s.jsx("a",{href:B.github,target:"_blank",rel:"noreferrer","aria-label":"GitHub",className:`
                    w-12
                    h-12
                    rounded-full
                    bg-slate-800
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                  `,children:s.jsx(pc,{size:21})}),s.jsx("a",{href:B.linkedin,target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",className:`
                    w-12
                    h-12
                    rounded-full
                    bg-blue-700
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                  `,children:s.jsx(pp,{size:21})}),s.jsx("a",{href:B.cvUrl,download:!0,"aria-label":"Download CV",className:`
                    w-12
                    h-12
                    rounded-full
                    bg-blue-500
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                  `,children:s.jsx(cc,{size:21})})]})]}),s.jsx("div",{className:`
                order-first
                md:order-last
                flex
                justify-center
                md:justify-end
              `,children:s.jsx("div",{className:`
                  w-64
                  h-80
                  sm:w-72
                  sm:h-96
                  md:w-80
                  md:h-[420px]
                  lg:w-96
                  lg:h-[500px]
                  rounded-2xl
                  overflow-hidden
                  shadow-2xl
                  group
                `,children:s.jsx($o,{src:B.photo,alt:"Foto profil",rounded:"rounded-2xl",initialsBg:B.initials,dark:e})})})]})})})}),zp=({dark:e})=>{const[n,t]=O.useState(!1);return O.useEffect(()=>{const r=()=>{t(window.scrollY>500)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),s.jsxs(s.Fragment,{children:[n&&s.jsx("button",{onClick:()=>at("home"),"aria-label":"Kembali ke atas",className:`
            fixed
            bottom-6
            right-6
            z-40
            w-12
            h-12
            rounded-full
            bg-blue-500
            text-white
            shadow-xl
            flex
            items-center
            justify-center
            hover:bg-blue-600
            hover:-translate-y-1
            transition-all
          `,children:s.jsx(Xf,{size:20})}),s.jsx("footer",{className:`
          border-t
          px-4
          sm:px-6
          py-8
          ${e?"bg-slate-900 border-slate-800 text-slate-500":"bg-white border-gray-200 text-gray-500"}
        `,children:s.jsxs("div",{className:`
            max-w-7xl
            mx-auto
            md:pl-12
            lg:pl-24
            flex
            flex-col
            sm:flex-row
            justify-between
            items-center
            gap-3
            text-sm
            text-center
            sm:text-left
          `,children:[s.jsxs("span",{children:["© ",new Date().getFullYear()," ",B.name]}),s.jsx("span",{children:B.location})]})})]})};function Tp(){const[e,n]=O.useState(!0),t=xp(["home","about","services","projects","contact"]);return s.jsxs("div",{className:`
        min-h-screen
        w-full
        overflow-x-hidden
        transition-colors
        duration-300
        ${e?"bg-slate-900":"bg-white"}
      `,children:[s.jsx(kp,{dark:e,setDark:n,active:t}),s.jsx(wp,{active:t}),s.jsxs("main",{children:[s.jsx(Sp,{dark:e}),s.jsx(jp,{dark:e}),s.jsx(Np,{dark:e}),s.jsx(_p,{dark:e}),s.jsx(Pp,{dark:e})]}),s.jsx(zp,{dark:e})]})}Gl.createRoot(document.getElementById("root")).render(s.jsx(Mc.StrictMode,{children:s.jsx(Tp,{})}));
