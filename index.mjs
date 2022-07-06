// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import{factory as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";function f(e,t){return!p(e)||h(e)?new TypeError(u("invalid argument. First argument must be a number and not NaN. Value: `%s`.",e)):!p(t)||h(t)?new TypeError(u("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",t)):e>=t?new RangeError(u("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",e,t)):null}function g(e,t,n){var s=e();return n*s+(1-s)*t}function j(){var p,h,j,c,b,v;if(0===arguments.length)h=d();else if(1===arguments.length){if(!s(p=arguments[0]))throw new TypeError(u("0PU2h",p));if(i(p,"prng")){if(!r(p.prng))throw new TypeError(u("0PU7M","prng",p.prng));h=p.prng}else h=d(p)}else{if(c=f(b=arguments[0],v=arguments[1]))throw c;if(arguments.length>2){if(!s(p=arguments[2]))throw new TypeError(u("0PU2h",p));if(i(p,"prng")){if(!r(p.prng))throw new TypeError(u("0PU7M","prng",p.prng));h=p.prng}else h=d(p)}else h=d()}return e(j=void 0===b?M:T,"NAME","uniform"),p&&p.prng?(e(j,"seed",null),e(j,"seedLength",null),n(j,"state",o(null),m),e(j,"stateLength",null),e(j,"byteLength",null),e(j,"toJSON",o(null)),e(j,"PRNG",h)):(t(j,"seed",y),t(j,"seedLength",x),n(j,"state",E,L),t(j,"stateLength",w),t(j,"byteLength",N),e(j,"toJSON",P),e(j,"PRNG",h),h=h.normalized),j;function y(){return h.seed}function x(){return h.seedLength}function w(){return h.stateLength}function N(){return h.byteLength}function E(){return h.state}function L(e){h.state=e}function P(){var e={type:"PRNG"};return e.name=j.NAME,e.state=a(h.state),e.params=void 0===b?[]:[b,v],e}function T(){return g(h,b,v)}function M(e,t){return l(e)||l(t)||e>=t?NaN:g(h,e,t)}}var c=j();e(c,"factory",j);export{c as default,j as factory};
//# sourceMappingURL=index.mjs.map
