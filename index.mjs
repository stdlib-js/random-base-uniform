// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.1.0-esm/index.mjs";function u(e,t){return!h(e)||f(e)?new TypeError(a("0pB6v,NI",e)):!h(t)||f(t)?new TypeError(a("0pB6w,NJ",t)):e>=t?new RangeError(a("0pBNK",e,t)):null}function j(e,t,n){var s=e();return n*s+(1-s)*t}function g(){var h,f,g,c,v,b;if(0===arguments.length)f=m();else if(1===arguments.length){if(!s(h=arguments[0]))throw new TypeError(a("0pB2V,FD",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(a("0pB6u,JI","prng",h.prng));f=h.prng}else f=m(h)}else{if(c=u(v=arguments[0],b=arguments[1]))throw c;if(arguments.length>2){if(!s(h=arguments[2]))throw new TypeError(a("0pB2V,FD",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(a("0pB6u,JI","prng",h.prng));f=h.prng}else f=m(h)}else f=m()}return e(g=void 0===v?J:T,"NAME","uniform"),h&&h.prng?(e(g,"seed",null),e(g,"seedLength",null),n(g,"state",o(null),d),e(g,"stateLength",null),e(g,"byteLength",null),e(g,"toJSON",o(null)),e(g,"PRNG",f)):(t(g,"seed",y),t(g,"seedLength",w),n(g,"state",E,L),t(g,"stateLength",x),t(g,"byteLength",N),e(g,"toJSON",B),e(g,"PRNG",f),f=f.normalized),g;function y(){return f.seed}function w(){return f.seedLength}function x(){return f.stateLength}function N(){return f.byteLength}function E(){return f.state}function L(e){f.state=e}function B(){var e={type:"PRNG"};return e.name=g.NAME,e.state=p(f.state),e.params=void 0===v?[]:[v,b],e}function T(){return j(f,v,b)}function J(e,t){return l(e)||l(t)||e>=t?NaN:j(f,e,t)}}var c=g();e(c,"factory",g);export{c as default,g as factory};
//# sourceMappingURL=index.mjs.map