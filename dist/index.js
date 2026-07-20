"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=f(function(q,i){
var o=require('@stdlib/assert-is-object/dist'),v=require('@stdlib/assert-is-function/dist'),l=require('@stdlib/assert-has-own-property/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function m(e,r,t){var u,n;if(!o(e))throw new TypeError(a('2aT3L',e));if(!v(r))throw new TypeError(a('2aT2H',r));for(n in e)if(l(e,n)&&(u=r.call(t,e[n],n,e),u))return!0;return!1}i.exports=m
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
