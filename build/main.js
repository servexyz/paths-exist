#!/usr/bin/env node
!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var u in e)t.d(n,u,function(r){return e[r]}.bind(null,u));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";var n=t(2);Object.defineProperty(r,"__esModule",{value:!0}),r.pathsExist=function(e){return i.apply(this,arguments)},r.W_OK=r.R_OK=r.F_OK=void 0;var u=n(t(3)),a=n(t(4)),o=n(t(5)),c=n(t(6));function i(){return(i=(0,a.default)(u.default.mark(function e(r){var t,n,a,i,s,f,l,p,b=arguments;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=b.length>1&&void 0!==b[1]?b[1]:c.default.F_OK,void 0!==r){e.next=3;break}return e.abrupt("return",null);case 3:if(!Array.isArray(r)){e.next=47;break}e.prev=4,n=!0,a=!1,e.prev=7,s=(0,o.default)(r);case 9:return e.next=11,s.next();case 11:return f=e.sent,n=f.done,e.next=15,f.value;case 15:if(l=e.sent,n){e.next=24;break}return p=l,e.next=20,c.default.access(p,t);case 20:return e.abrupt("return",!0);case 21:n=!0,e.next=9;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(7),a=!0,i=e.t0;case 30:if(e.prev=30,e.prev=31,n||null==s.return){e.next=35;break}return e.next=35,s.return();case 35:if(e.prev=35,!a){e.next=38;break}throw i;case 38:return e.finish(35);case 39:return e.finish(30);case 40:e.next=45;break;case 42:return e.prev=42,e.t1=e.catch(4),e.abrupt("return",!1);case 45:e.next=56;break;case 47:return e.prev=47,e.next=50,c.default.access(r,t);case 50:return e.abrupt("return",!0);case 53:return e.prev=53,e.t2=e.catch(47),e.abrupt("return",!1);case 56:case"end":return e.stop()}},e,null,[[4,42],[7,26,30,40],[31,,35,39],[47,53]])}))).apply(this,arguments)}var s=c.default.F_OK,f=c.default.R_OK,l=c.default.W_OK;r.W_OK=l,r.R_OK=f,r.F_OK=s},function(e,r){e.exports=require("@babel/runtime/helpers/interopRequireDefault")},function(e,r){e.exports=require("@babel/runtime/regenerator")},function(e,r){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,r){e.exports=require("@babel/runtime/helpers/asyncIterator")},function(e,r){e.exports=require("fs-extra")}]));
//# sourceMappingURL=main.js.map