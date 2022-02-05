/// <reference types="./mod.d.ts" />
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l,y=function(t,r,n){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||c.call(t,r)?(e=t.__proto__,t.__proto__=o,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,r,n.get),p&&u&&u.call(t,r,n.set),t},p=e,s=y,v=(l=n()?p:s,l);var m=function(t,r,n){v(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},g=m,b=l;var d=function(t,r,n){b(t,r,{configurable:!1,enumerable:!1,get:n})},h=d,w=l;var A=function(t,r,n,e){w(t,r,{configurable:!1,enumerable:!1,get:n,set:e})},E=A;var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var O=function(){return j&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,T=_;var N=function(t){return T.call(t)},I=Object.prototype.hasOwnProperty;var U=function(t,r){return null!=t&&I.call(t,r)},P="function"==typeof Symbol?Symbol.toStringTag:"",S=U,L=P,M=_;var F=N,R=function(t){var r,n,e;if(null==t)return M.call(t);n=t[L],r=S(t,L);try{t[L]=void 0}catch(r){return M.call(t)}return e=M.call(t),r?t[L]=n:delete t[L],e},x=O()?R:F,V=x;var B=Array.isArray?Array.isArray:function(t){return"[object Array]"===V(t)},C=B;var G=function(t){return"object"==typeof t&&null!==t&&!C(t)},Y=/./;var q=function(t){return"boolean"==typeof t},k=Boolean.prototype.toString;var X=x,J=function(t){try{return k.call(t),!0}catch(t){return!1}},z=O();var D=function(t){return"object"==typeof t&&(t instanceof Boolean||(z?J(t):"[object Boolean]"===X(t)))},H=q,K=D;var Q=g,W=function(t){return H(t)||K(t)},Z=D;Q(W,"isPrimitive",q),Q(W,"isObject",Z);var $=W;var tt="object"==typeof self?self:null,rt="object"==typeof window?window:null,nt=$.isPrimitive,et=function(){return new Function("return this;")()},ot=tt,it=rt,at="object"==typeof t?t:null;var ut=function(t){if(arguments.length){if(!nt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return et()}if(ot)return ot;if(it)return it;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")},ft=ut(),ct=ft.document&&ft.document.childNodes,lt=Int8Array,yt=Y,pt=ct,st=lt;var vt=function(){return"function"==typeof yt||"object"==typeof st||"function"==typeof pt};var mt=function(){return/^\s*function\s*([^(]*)/i},gt=mt;g(gt,"REGEXP",mt());var bt=gt,dt=B;var ht=function(t){return null!==t&&"object"==typeof t};g(ht,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!dt(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(ht));var wt=ht;var At=x,Et=bt.REGEXP,jt=function(t){return wt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var Ot=function(t){var r,n,e;if(("Object"===(n=At(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=Et.exec(e.toString()))return r[1]}return jt(t)?"Buffer":n},_t=Ot,Tt=_t;var Nt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?Tt(t).toLowerCase():r},It=_t;var Ut=Nt,Pt=function(t){return It(t).toLowerCase()},St=vt()?Pt:Ut;var Lt=function(t){return"function"===St(t)},Mt=Object.getPrototypeOf;var Ft=function(t){return t.__proto__},Rt=x,xt=Ft;var Vt=function(t){var r=xt(t);return r||null===r?r:"[object Function]"===Rt(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Bt=Mt,Ct=Vt,Gt=Lt(Object.getPrototypeOf)?Bt:Ct;var Yt=function(t){return null==t?null:(t=Object(t),Gt(t))},qt=G,kt=Lt,Xt=Yt,Jt=U,zt=x,Dt=Object.prototype;var Ht=function(t){var r;return!!qt(t)&&(!(r=Xt(t))||!Jt(t,"constructor")&&Jt(r,"constructor")&&kt(r.constructor)&&"[object Function]"===zt(r.constructor)&&Jt(r,"isPrototypeOf")&&kt(r.isPrototypeOf)&&(r===Dt||function(t){var r;for(r in t)if(!Jt(t,r))return!1;return!0}(t)))},Kt=Ht;var Qt=function(t){return function(){return t}};var Wt=function(){},Zt=Math.floor,$t=Zt;var tr=function(t){return $t(t)===t},rr=tr;var nr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&rr(t.length)&&t.length>=0&&t.length<=9007199254740991},er=x,or="function"==typeof Uint32Array;var ir=function(t){return or&&t instanceof Uint32Array||"[object Uint32Array]"===er(t)};var ar=function(t){return"number"==typeof t},ur=Number,fr=ur.prototype.toString;var cr=x,lr=ur,yr=function(t){try{return fr.call(t),!0}catch(t){return!1}},pr=O();var sr=function(t){return"object"==typeof t&&(t instanceof lr||(pr?yr(t):"[object Number]"===cr(t)))},vr=ar,mr=sr;var gr=g,br=function(t){return vr(t)||mr(t)},dr=sr;gr(br,"isPrimitive",ar),gr(br,"isObject",dr);var hr=br,wr=Number.POSITIVE_INFINITY,Ar=ur.NEGATIVE_INFINITY,Er=wr,jr=Ar,Or=tr;var _r=function(t){return t<Er&&t>jr&&Or(t)},Tr=hr.isPrimitive,Nr=_r;var Ir=function(t){return Tr(t)&&Nr(t)},Ur=hr.isObject,Pr=_r;var Sr=function(t){return Ur(t)&&Pr(t.valueOf())},Lr=Ir,Mr=Sr;var Fr=g,Rr=function(t){return Lr(t)||Mr(t)},xr=Sr;Fr(Rr,"isPrimitive",Ir),Fr(Rr,"isObject",xr);var Vr=Rr.isPrimitive;var Br=function(t){return Vr(t)&&t>0},Cr=Rr.isObject;var Gr=function(t){return Cr(t)&&t.valueOf()>0},Yr=Br,qr=Gr;var kr=g,Xr=function(t){return Yr(t)||qr(t)},Jr=Gr;kr(Xr,"isPrimitive",Br),kr(Xr,"isObject",Jr);var zr=Xr,Dr="function"==typeof Uint32Array?Uint32Array:null,Hr=ir,Kr=Dr;var Qr="function"==typeof Uint32Array?Uint32Array:void 0,Wr=function(){throw new Error("not implemented")},Zr=function(){var t,r;if("function"!=typeof Kr)return!1;try{r=new Kr(r=[1,3.14,-3.14,4294967296,4294967297]),t=Hr(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Qr:Wr,$r=wr;var tn=function(t){return t!=t},rn=function(t){return 0===t&&1/t===$r},nn=tn,en=Ar,on=wr;var an=function(t,r){var n,e,o,i;if(2===(n=arguments.length))return nn(t)||nn(r)?NaN:t===on||r===on?on:t===r&&0===t?rn(t)?t:r:t>r?t:r;for(e=en,i=0;i<n;i++){if(nn(o=arguments[i])||o===on)return o;(o>e||o===e&&0===o&&rn(o))&&(e=o)}return e};var un=function(t,r){var n,e;return((n=(65535&(t>>>=0))>>>0)*(e=(65535&(r>>>=0))>>>0)>>>0)+((t>>>16>>>0)*e+n*(r>>>16>>>0)<<16>>>0)>>>0};var fn=function(t,r,n,e,o){var i,a,u,f;if(t<=0)return e;if(1===n&&1===o){if((u=t%8)>0)for(f=0;f<u;f++)e[f]=r[f];if(t<8)return e;for(f=u;f<t;f+=8)e[f]=r[f],e[f+1]=r[f+1],e[f+2]=r[f+2],e[f+3]=r[f+3],e[f+4]=r[f+4],e[f+5]=r[f+5],e[f+6]=r[f+6],e[f+7]=r[f+7];return e}for(i=n<0?(1-t)*n:0,a=o<0?(1-t)*o:0,f=0;f<t;f++)e[a]=r[i],i+=n,a+=o;return e};var cn=function(t,r,n,e,o,i,a){var u,f,c,l;if(t<=0)return o;if(u=e,f=a,1===n&&1===i){if((c=t%8)>0)for(l=0;l<c;l++)o[f]=r[u],u+=n,f+=i;if(t<8)return o;for(l=c;l<t;l+=8)o[f]=r[u],o[f+1]=r[u+1],o[f+2]=r[u+2],o[f+3]=r[u+3],o[f+4]=r[u+4],o[f+5]=r[u+5],o[f+6]=r[u+6],o[f+7]=r[u+7],u+=8,f+=8;return o}for(l=0;l<t;l++)o[f]=r[u],u+=n,f+=i;return o},ln=fn;g(ln,"ndarray",cn);var yn=ln;var pn=function(){};var sn=Lt,vn=bt.REGEXP,mn=function(){return"foo"===pn.name}();var gn=function(t){if(!1===sn(t))throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return mn?t.name:vn.exec(t.toString())[1]},bn=x,dn="function"==typeof Float64Array;var hn="function"==typeof Float64Array?Float64Array:null,wn=function(t){return dn&&t instanceof Float64Array||"[object Float64Array]"===bn(t)},An=hn;var En=function(){var t,r;if("function"!=typeof An)return!1;try{r=new An([1,3.14,-3.14,NaN]),t=wn(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t};var jn="function"==typeof Float64Array?Float64Array:void 0,On=function(){throw new Error("not implemented")},_n=En()?jn:On,Tn=x,Nn="function"==typeof Int8Array;var In="function"==typeof Int8Array?Int8Array:null,Un=function(t){return Nn&&t instanceof Int8Array||"[object Int8Array]"===Tn(t)},Pn=In;var Sn="function"==typeof Int8Array?Int8Array:void 0,Ln=function(){throw new Error("not implemented")},Mn=function(){var t,r;if("function"!=typeof Pn)return!1;try{r=new Pn([1,3.14,-3.14,128]),t=Un(r)&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){t=!1}return t}()?Sn:Ln,Fn=x,Rn="function"==typeof Uint8Array;var xn="function"==typeof Uint8Array?Uint8Array:null,Vn=function(t){return Rn&&t instanceof Uint8Array||"[object Uint8Array]"===Fn(t)},Bn=xn;var Cn="function"==typeof Uint8Array?Uint8Array:void 0,Gn=function(){throw new Error("not implemented")},Yn=function(){var t,r;if("function"!=typeof Bn)return!1;try{r=new Bn(r=[1,3.14,-3.14,256,257]),t=Vn(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Cn:Gn,qn=x,kn="function"==typeof Uint8ClampedArray;var Xn="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Jn=function(t){return kn&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===qn(t)},zn=Xn;var Dn="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Hn=function(){throw new Error("not implemented")},Kn=function(){var t,r;if("function"!=typeof zn)return!1;try{r=new zn([-1,0,1,3.14,4.99,255,256]),t=Jn(r)&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){t=!1}return t}()?Dn:Hn,Qn=x,Wn="function"==typeof Int16Array;var Zn="function"==typeof Int16Array?Int16Array:null,$n=function(t){return Wn&&t instanceof Int16Array||"[object Int16Array]"===Qn(t)},te=Zn;var re="function"==typeof Int16Array?Int16Array:void 0,ne=function(){throw new Error("not implemented")},ee=function(){var t,r;if("function"!=typeof te)return!1;try{r=new te([1,3.14,-3.14,32768]),t=$n(r)&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){t=!1}return t}()?re:ne,oe=x,ie="function"==typeof Uint16Array;var ae="function"==typeof Uint16Array?Uint16Array:null,ue=function(t){return ie&&t instanceof Uint16Array||"[object Uint16Array]"===oe(t)},fe=ae;var ce="function"==typeof Uint16Array?Uint16Array:void 0,le=function(){throw new Error("not implemented")},ye=function(){var t,r;if("function"!=typeof fe)return!1;try{r=new fe(r=[1,3.14,-3.14,65536,65537]),t=ue(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?ce:le,pe=x,se="function"==typeof Int32Array;var ve="function"==typeof Int32Array?Int32Array:null,me=function(t){return se&&t instanceof Int32Array||"[object Int32Array]"===pe(t)},ge=ve;var be="function"==typeof Int32Array?Int32Array:void 0,de=function(){throw new Error("not implemented")},he=function(){var t,r;if("function"!=typeof ge)return!1;try{r=new ge([1,3.14,-3.14,2147483648]),t=me(r)&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){t=!1}return t}()?be:de,we=x,Ae="function"==typeof Float32Array;var Ee="function"==typeof Float32Array?Float32Array:null,je=function(t){return Ae&&t instanceof Float32Array||"[object Float32Array]"===we(t)},Oe=wr,_e=Ee;var Te="function"==typeof Float32Array?Float32Array:void 0,Ne=function(){throw new Error("not implemented")},Ie=function(){var t,r;if("function"!=typeof _e)return!1;try{r=new _e([1,3.14,-3.14,5e40]),t=je(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Oe}catch(r){t=!1}return t}()?Te:Ne,Ue=_t,Pe=gn,Se=Yt,Le=_n,Me=[_n,Ie,he,Zr,ee,ye,Mn,Yn,Kn],Fe=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],Re=En()?Se(Le):xe;function xe(){}Re="TypedArray"===Pe(Re)?Re:xe;var Ve=function(t,r){if("function"!=typeof r)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+r+"`.");return t instanceof r},Be=_t,Ce=Yt,Ge=[[_n,"Float64Array"],[Ie,"Float32Array"],[he,"Int32Array"],[Zr,"Uint32Array"],[ee,"Int16Array"],[ye,"Uint16Array"],[Mn,"Int8Array"],[Yn,"Uint8Array"],[Kn,"Uint8ClampedArray"]];var Ye=function(t){var r,n;if("object"!=typeof t||null===t)return!1;if(t instanceof Re)return!0;for(n=0;n<Me.length;n++)if(t instanceof Me[n])return!0;for(;t;){for(r=Ue(t),n=0;n<Fe.length;n++)if(Fe[n]===r)return!0;t=Se(t)}return!1},qe=function(t){var r,n;for(n=0;n<Ge.length;n++)if(Ve(t,Ge[n][0]))return Ge[n][1];for(;t;){for(r=Be(t),n=0;n<Ge.length;n++)if(r===Ge[n][1])return Ge[n][1];t=Ce(t)}};var ke=function(t){var r,n;if(!Ye(t))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+t+"`.");for((r={}).type=qe(t),r.data=[],n=0;n<t.length;n++)r.data.push(t[n]);return r},Xe=Zt;var Je=function(){return Xe(1+4294967294*Math.random())>>>0},ze=g,De=h,He=E,Ke=U,Qe=Kt,We=nr,Ze=ir,$e=$.isPrimitive,to=zr.isPrimitive,ro=Zr,no=an,eo=un,oo=yn,io=ke,ao=Je,uo=624,fo=[0,2567483615];function co(t,r){var n;return n=r?"option":"argument",t.length<631?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):t[2]!==uo?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+uo+". Actual: "+t[2]+"."):1!==t[627]?new RangeError("invalid "+n+". `state` array has an incompatible section length. Expected: "+1..toString()+". Actual: "+t[627]+"."):t[629]!==t.length-630?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-630)+". Actual: "+t[629]+"."):null}function lo(t,r,n){var e;for(t[0]=n>>>0,e=1;e<r;e++)n=((n=t[e-1]>>>0)^n>>>30)>>>0,t[e]=eo(n,1812433253)+e>>>0;return t}function yo(t,r,n,e){var o,i,a,u;for(i=1,a=0,u=no(r,e);u>0;u--)o=t[i-1]>>>0,o=eo(o=(o^o>>>30)>>>0,1664525)>>>0,t[i]=(t[i]>>>0^o)+n[a]+a>>>0,a+=1,(i+=1)>=r&&(t[0]=t[r-1],i=1),a>=e&&(a=0);for(u=r-1;u>0;u--)o=t[i-1]>>>0,o=eo(o=(o^o>>>30)>>>0,1566083941)>>>0,t[i]=(t[i]>>>0^o)-i>>>0,(i+=1)>=r&&(t[0]=t[r-1],i=1);return t[0]=2147483648,t}function po(t){var r,n;for(227,n=0;n<227;n++)r=2147483648&t[n]|2147483647&t[n+1],t[n]=t[n+397]^r>>>1^fo[1&r];for(623;n<623;n++)r=2147483648&t[n]|2147483647&t[n+1],t[n]=t[n-227]^r>>>1^fo[1&r];return r=2147483648&t[623]|2147483647&t[0],t[623]=t[396]^r>>>1^fo[1&r],t}var so=function(t){var r,n,e,o,i,a;if(e={},arguments.length){if(!Qe(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Ke(t,"copy")&&(e.copy=t.copy,!$e(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(Ke(t,"state")){if(n=t.state,e.state=!0,!Ze(n))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n+"`.");if(a=co(n,!0))throw a;!1===e.copy?r=n:(r=new ro(n.length),oo(n.length,n,1,r,1)),n=new ro(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,uo),o=new ro(r.buffer,r.byteOffset+630*r.BYTES_PER_ELEMENT,n[629])}if(void 0===o)if(Ke(t,"seed"))if(o=t.seed,e.seed=!0,to(o)){if(o>4294967295)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else{if(!1===We(o)||o.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(1===o.length){if(o=o[0],!to(o))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(o>4294967295)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else i=o.length,(r=new ro(630+i))[0]=1,r[1]=3,r[2]=uo,r[627]=1,r[628]=uo,r[629]=i,oo.ndarray(i,o,1,0,r,1,630),n=new ro(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,uo),o=new ro(r.buffer,r.byteOffset+630*r.BYTES_PER_ELEMENT,i),n=yo(n=lo(n,uo,19650218),uo,o,i)}else o=ao()>>>0}else o=ao()>>>0;return void 0===n&&((r=new ro(631))[0]=1,r[1]=3,r[2]=uo,r[627]=1,r[628]=uo,r[629]=1,r[630]=o,n=new ro(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,uo),o=new ro(r.buffer,r.byteOffset+630*r.BYTES_PER_ELEMENT,1),n=lo(n,uo,o)),ze(v,"NAME","mt19937"),De(v,"seed",u),De(v,"seedLength",f),He(v,"state",y,p),De(v,"stateLength",c),De(v,"byteLength",l),ze(v,"toJSON",s),ze(v,"MIN",1),ze(v,"MAX",4294967295),ze(v,"normalized",m),ze(m,"NAME",v.NAME),De(m,"seed",u),De(m,"seedLength",f),He(m,"state",y,p),De(m,"stateLength",c),De(m,"byteLength",l),ze(m,"toJSON",s),ze(m,"MIN",0),ze(m,"MAX",.9999999999999999),v;function u(){var t=r[629];return oo(t,o,1,new ro(t),1)}function f(){return r[629]}function c(){return r.length}function l(){return r.byteLength}function y(){var t=r.length;return oo(t,r,1,new ro(t),1)}function p(t){var i;if(!Ze(t))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+t+"`.");if(i=co(t,!1))throw i;!1===e.copy?e.state&&t.length===r.length?oo(t.length,t,1,r,1):(r=t,e.state=!0):(t.length!==r.length&&(r=new ro(t.length)),oo(t.length,t,1,r,1)),n=new ro(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,uo),o=new ro(r.buffer,r.byteOffset+630*r.BYTES_PER_ELEMENT,r[629])}function s(){var t={type:"PRNG"};return t.name=v.NAME,t.state=io(r),t.params=[],t}function v(){var t,e;return(e=r[628])>=uo&&(n=po(n),e=0),t=n[e],r[628]=e+1,t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,(t^=t>>>18)>>>0}function m(){return 11102230246251565e-32*(67108864*(v()>>>5)+(v()>>>6))}},vo=so({seed:Je()});g(vo,"factory",so);var mo=vo,go=hr.isPrimitive,bo=tn;var ho=function(t){return go(t)&&bo(t)},wo=hr.isObject,Ao=tn;var Eo=function(t){return wo(t)&&Ao(t.valueOf())},jo=ho,Oo=Eo;var _o=g,To=function(t){return jo(t)||Oo(t)},No=Eo;_o(To,"isPrimitive",ho),_o(To,"isObject",No);var Io=hr.isPrimitive,Uo=To;var Po=function(t,r){return!Io(t)||Uo(t)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+t+"`."):!Io(r)||Uo(r)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+r+"`."):t>=r?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+t+","+r+"]`."):null};var So=function(t,r,n){var e=t();return n*e+(1-e)*r},Lo=g,Mo=h,Fo=E,Ro=Kt,xo=Lt,Vo=U,Bo=Qt,Co=Wt,Go=mo.factory,Yo=tn,qo=ke,ko=Po,Xo=So;var Jo=function(){var t,r,n,e,o,i;if(0===arguments.length)r=Go();else if(1===arguments.length){if(!Ro(t=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Vo(t,"prng")){if(!xo(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=t.prng}else r=Go(t)}else{if(e=ko(o=arguments[0],i=arguments[1]))throw e;if(arguments.length>2){if(!Ro(t=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Vo(t,"prng")){if(!xo(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=t.prng}else r=Go(t)}else r=Go()}return Lo(n=void 0===o?v:s,"NAME","uniform"),t&&t.prng?(Lo(n,"seed",null),Lo(n,"seedLength",null),Fo(n,"state",Bo(null),Co),Lo(n,"stateLength",null),Lo(n,"byteLength",null),Lo(n,"toJSON",Bo(null)),Lo(n,"PRNG",r)):(Mo(n,"seed",a),Mo(n,"seedLength",u),Fo(n,"state",l,y),Mo(n,"stateLength",f),Mo(n,"byteLength",c),Lo(n,"toJSON",p),Lo(n,"PRNG",r),r=r.normalized),n;function a(){return r.seed}function u(){return r.seedLength}function f(){return r.stateLength}function c(){return r.byteLength}function l(){return r.state}function y(t){r.state=t}function p(){var t={type:"PRNG"};return t.name=n.NAME,t.state=qo(r.state),t.params=void 0===o?[]:[o,i],t}function s(){return Xo(r,o,i)}function v(t,n){return Yo(t)||Yo(n)||t>=n?NaN:Xo(r,t,n)}},zo=Jo();g(zo,"factory",Jo);var Do=zo;export{Do as default};
//# sourceMappingURL=mod.js.map