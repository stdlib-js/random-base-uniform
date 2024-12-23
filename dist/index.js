"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=o(function(_,h){
var c=require('@stdlib/assert-is-number/dist').isPrimitive,p=require('@stdlib/error-tools-fmtprodmsg/dist'),d=require('@stdlib/assert-is-nan/dist');function B(r,e){return !c(r)||d(r)?new TypeError(p('0pB6v',r)):!c(e)||d(e)?new TypeError(p('0pB6w',e)):r>=e?new RangeError(p('0pBEJ',r,e)):null;}h.exports=B
});var N=o(function($,y){
function C(r,e,t){var u=r();return t*u+(1-u)*e}y.exports=C
});var v=o(function(ee,x){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),b=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),w=require('@stdlib/assert-is-plain-object/dist'),O=require('@stdlib/assert-is-function/dist'),L=require('@stdlib/assert-has-own-property/dist'),S=require('@stdlib/utils-constant-function/dist'),D=require('@stdlib/utils-noop/dist'),m=require('@stdlib/random-base-mt19937/dist').factory,E=require('@stdlib/math-base-assert-is-nan/dist'),H=require('@stdlib/array-to-json/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),I=q(),R=N();function K(){var r,e,t,u,i,s;if(arguments.length===0)e=m();else if(arguments.length===1){if(r=arguments[0],!w(r))throw new TypeError(f('0pB2V',r));if(L(r,"prng")){if(!O(r.prng))throw new TypeError(f('0pB6u',"prng",r.prng));e=r.prng}else e=m(r)}else{if(i=arguments[0],s=arguments[1],u=I(i,s),u)throw u;if(arguments.length>2){if(r=arguments[2],!w(r))throw new TypeError(f('0pB2V',r));if(L(r,"prng")){if(!O(r.prng))throw new TypeError(f('0pB6u',"prng",r.prng));e=r.prng}else e=m(r)}else e=m()}return i===void 0?t=k:t=W,a(t,"NAME","uniform"),r&&r.prng?(a(t,"seed",null),a(t,"seedLength",null),b(t,"state",S(null),D),a(t,"stateLength",null),a(t,"byteLength",null),a(t,"toJSON",S(null)),a(t,"PRNG",e)):(g(t,"seed",j),g(t,"seedLength",A),b(t,"state",J,M),g(t,"stateLength",F),g(t,"byteLength",G),a(t,"toJSON",z),a(t,"PRNG",e),e=e.normalized),t;function j(){return e.seed}function A(){return e.seedLength}function F(){return e.stateLength}function G(){return e.byteLength}function J(){return e.state}function M(n){e.state=n}function z(){var n={};return n.type="PRNG",n.name=t.NAME,n.state=H(e.state),i===void 0?n.params=[]:n.params=[i,s],n}function W(){return R(e,i,s)}function k(n,l){return E(n)||E(l)||n>=l?NaN:R(e,n,l)}}x.exports=K
});var P=o(function(re,T){
var Q=v(),U=Q();T.exports=U
});var X=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=P(),Y=v();X(V,"factory",Y);module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
