(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ "../../../../work/hello-uniapp/components/echarts/echarts.min.js":
/*!**************************************************************!*\
  !*** D:/work/hello-uniapp/components/echarts/echarts.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


!function(t,e){ true?e(exports):undefined;}(void 0,function(t){"use strict";function e(t,e){"createCanvas"===t&&(nw=null),ew[t]=e;}function i(t){if(null==t||"object"!=typeof t)return t;var e=t,n=Y_.call(t);if("[object Array]"===n){if(!O(t)){e=[];for(var o=0,a=t.length;o<a;o++){e[o]=i(t[o]);}}}else if(j_[n]){if(!O(t)){var r=t.constructor;if(t.constructor.from)e=r.from(t);else{e=new r(t.length);for(var o=0,a=t.length;o<a;o++){e[o]=i(t[o]);}}}}else if(!X_[n]&&!O(t)&&!M(t)){e={};for(var s in t){t.hasOwnProperty(s)&&(e[s]=i(t[s]));}}return e;}function n(t,e,o){if(!w(e)||!w(t))return o?i(e):t;for(var a in e){if(e.hasOwnProperty(a)){var r=t[a],s=e[a];!w(s)||!w(r)||y(s)||y(r)||M(s)||M(r)||b(s)||b(r)||O(s)||O(r)?!o&&a in t||(t[a]=i(e[a],!0)):n(r,s,o);}}return t;}function o(t,e){for(var i=t[0],o=1,a=t.length;o<a;o++){i=n(i,t[o],e);}return i;}function a(t,e){for(var i in e){e.hasOwnProperty(i)&&(t[i]=e[i]);}return t;}function r(t,e,i){for(var n in e){e.hasOwnProperty(n)&&(i?null!=e[n]:null==t[n])&&(t[n]=e[n]);}return t;}function s(){return nw||(nw=iw().getContext("2d")),nw;}function l(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var i=0,n=t.length;i<n;i++){if(t[i]===e)return i;}}return-1;}function u(t,e){function i(){}var n=t.prototype;i.prototype=e.prototype,t.prototype=new i();for(var o in n){t.prototype[o]=n[o];}t.prototype.constructor=t,t.superClass=e;}function h(t,e,i){r(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,i);}function c(t){if(t)return"string"!=typeof t&&"number"==typeof t.length;}function d(t,e,i){if(t&&e)if(t.forEach&&t.forEach===K_)t.forEach(e,i);else if(t.length===+t.length)for(var n=0,o=t.length;n<o;n++){e.call(i,t[n],n,t);}else for(var a in t){t.hasOwnProperty(a)&&e.call(i,t[a],a,t);}}function f(t,e,i){if(t&&e){if(t.map&&t.map===Q_)return t.map(e,i);for(var n=[],o=0,a=t.length;o<a;o++){n.push(e.call(i,t[o],o,t));}return n;}}function p(t,e,i,n){if(t&&e){if(t.reduce&&t.reduce===tw)return t.reduce(e,i,n);for(var o=0,a=t.length;o<a;o++){i=e.call(n,i,t[o],o,t);}return i;}}function g(t,e,i){if(t&&e){if(t.filter&&t.filter===$_)return t.filter(e,i);for(var n=[],o=0,a=t.length;o<a;o++){e.call(i,t[o],o,t)&&n.push(t[o]);}return n;}}function m(t,e){var i=J_.call(arguments,2);return function(){return t.apply(e,i.concat(J_.call(arguments)));};}function v(t){var e=J_.call(arguments,1);return function(){return t.apply(this,e.concat(J_.call(arguments)));};}function y(t){return"[object Array]"===Y_.call(t);}function x(t){return"function"==typeof t;}function _(t){return"[object String]"===Y_.call(t);}function w(t){var e=typeof t;return"function"===e||!!t&&"object"===e;}function b(t){return!!X_[Y_.call(t)];}function S(t){return!!j_[Y_.call(t)];}function M(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument;}function I(t){return t!==t;}function T(t){for(var e=0,i=arguments.length;e<i;e++){if(null!=arguments[e])return arguments[e];}}function A(t,e){return null!=t?t:e;}function D(t,e,i){return null!=t?t:null!=e?e:i;}function C(){return Function.call.apply(J_,arguments);}function L(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t;}function k(t,e){if(!t)throw new Error(e);}function P(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");}function N(t){t[ow]=!0;}function O(t){return t[ow];}function E(t){function e(t,e){i?n.set(t,e):n.set(e,t);}var i=y(t);this.data={};var n=this;t instanceof E?t.each(e):t&&d(t,e);}function R(t){return new E(t);}function z(t,e){for(var i=new t.constructor(t.length+e.length),n=0;n<t.length;n++){i[n]=t[n];}var o=t.length;for(n=0;n<e.length;n++){i[n+o]=e[n];}return i;}function B(){}function V(t,e){var i=new rw(2);return null==t&&(t=0),null==e&&(e=0),i[0]=t,i[1]=e,i;}function G(t,e){return t[0]=e[0],t[1]=e[1],t;}function F(t){var e=new rw(2);return e[0]=t[0],e[1]=t[1],e;}function W(t,e,i){return t[0]=e,t[1]=i,t;}function H(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t;}function Z(t,e,i,n){return t[0]=e[0]+i[0]*n,t[1]=e[1]+i[1]*n,t;}function U(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t;}function X(t){return Math.sqrt(j(t));}function j(t){return t[0]*t[0]+t[1]*t[1];}function Y(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t;}function q(t,e){var i=X(e);return 0===i?(t[0]=0,t[1]=0):(t[0]=e[0]/i,t[1]=e[1]/i),t;}function K(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]));}function $(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]);}function J(t,e,i,n){return t[0]=e[0]+n*(i[0]-e[0]),t[1]=e[1]+n*(i[1]-e[1]),t;}function Q(t,e,i){var n=e[0],o=e[1];return t[0]=i[0]*n+i[2]*o+i[4],t[1]=i[1]*n+i[3]*o+i[5],t;}function tt(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t;}function et(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t;}function it(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this);}function nt(t,e){return{target:t,topTarget:e&&e.topTarget};}function ot(t,e){var i=t._$eventProcessor;return null!=e&&i&&i.normalizeQuery&&(e=i.normalizeQuery(e)),e;}function at(t,e,i,n,o,a){var r=t._$handlers;if("function"==typeof i&&(o=n,n=i,i=null),!n||!e)return t;i=ot(t,i),r[e]||(r[e]=[]);for(var s=0;s<r[e].length;s++){if(r[e][s].h===n)return t;}var l={h:n,one:a,query:i,ctx:o||t,callAtLast:n.zrEventfulCallAtLast},u=r[e].length-1,h=r[e][u];return h&&h.callAtLast?r[e].splice(u,0,l):r[e].push(l),t;}function rt(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0};}function st(t,e,i,n){return i=i||{},n||!U_.canvasSupported?lt(t,e,i):U_.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(i.zrX=e.layerX,i.zrY=e.layerY):null!=e.offsetX?(i.zrX=e.offsetX,i.zrY=e.offsetY):lt(t,e,i),i;}function lt(t,e,i){var n=rt(t);i.zrX=e.clientX-n.left,i.zrY=e.clientY-n.top;}function ut(t,e,i){if(null!=(e=e||window.event).zrX)return e;var n=e.type;if(n&&n.indexOf("touch")>=0){var o="touchend"!==n?e.targetTouches[0]:e.changedTouches[0];o&&st(t,o,e,i);}else st(t,e,e,i),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3;var a=e.button;return null==e.which&&void 0!==a&&gw.test(e.type)&&(e.which=1&a?1:2&a?3:4&a?2:0),e;}function ht(t,e,i){pw?t.addEventListener(e,i):t.attachEvent("on"+e,i);}function ct(t,e,i){pw?t.removeEventListener(e,i):t.detachEvent("on"+e,i);}function dt(t){return 2===t.which||3===t.which;}function ft(t){var e=t[1][0]-t[0][0],i=t[1][1]-t[0][1];return Math.sqrt(e*e+i*i);}function pt(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2];}function gt(t,e,i){return{type:t,event:i,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:i.zrX,offsetY:i.zrY,gestureEvent:i.gestureEvent,pinchX:i.pinchX,pinchY:i.pinchY,pinchScale:i.pinchScale,wheelDelta:i.zrDelta,zrByTouch:i.zrByTouch,which:i.which,stop:mt};}function mt(t){mw(this.event);}function vt(){}function yt(t,e,i){if(t[t.rectHover?"rectContain":"contain"](e,i)){for(var n,o=t;o;){if(o.clipPath&&!o.clipPath.contain(e,i))return!1;o.silent&&(n=!0),o=o.parent;}return!n||xw;}return!1;}function xt(){var t=new bw(6);return _t(t),t;}function _t(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t;}function wt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t;}function bt(t,e,i){var n=e[0]*i[0]+e[2]*i[1],o=e[1]*i[0]+e[3]*i[1],a=e[0]*i[2]+e[2]*i[3],r=e[1]*i[2]+e[3]*i[3],s=e[0]*i[4]+e[2]*i[5]+e[4],l=e[1]*i[4]+e[3]*i[5]+e[5];return t[0]=n,t[1]=o,t[2]=a,t[3]=r,t[4]=s,t[5]=l,t;}function St(t,e,i){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+i[0],t[5]=e[5]+i[1],t;}function Mt(t,e,i){var n=e[0],o=e[2],a=e[4],r=e[1],s=e[3],l=e[5],u=Math.sin(i),h=Math.cos(i);return t[0]=n*h+r*u,t[1]=-n*u+r*h,t[2]=o*h+s*u,t[3]=-o*u+h*s,t[4]=h*a+u*l,t[5]=h*l-u*a,t;}function It(t,e,i){var n=i[0],o=i[1];return t[0]=e[0]*n,t[1]=e[1]*o,t[2]=e[2]*n,t[3]=e[3]*o,t[4]=e[4]*n,t[5]=e[5]*o,t;}function Tt(t,e){var i=e[0],n=e[2],o=e[4],a=e[1],r=e[3],s=e[5],l=i*r-a*n;return l?(l=1/l,t[0]=r*l,t[1]=-a*l,t[2]=-n*l,t[3]=i*l,t[4]=(n*s-r*o)*l,t[5]=(a*o-i*s)*l,t):null;}function At(t){var e=xt();return wt(e,t),e;}function Dt(t){return t>Iw||t<-Iw;}function Ct(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1;}function Lt(t){return(t=Math.round(t))<0?0:t>255?255:t;}function kt(t){return(t=Math.round(t))<0?0:t>360?360:t;}function Pt(t){return t<0?0:t>1?1:t;}function Nt(t){return Lt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10));}function Ot(t){return Pt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t));}function Et(t,e,i){return i<0?i+=1:i>1&&(i-=1),6*i<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t;}function Rt(t,e,i){return t+(e-t)*i;}function zt(t,e,i,n,o){return t[0]=e,t[1]=i,t[2]=n,t[3]=o,t;}function Bt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t;}function Vt(t,e){Vw&&Bt(Vw,e),Vw=Bw.put(t,Vw||e.slice());}function Gt(t,e){if(t){e=e||[];var i=Bw.get(t);if(i)return Bt(e,i);var n=(t+="").replace(/ /g,"").toLowerCase();if(n in zw)return Bt(e,zw[n]),Vt(t,e),e;if("#"!==n.charAt(0)){var o=n.indexOf("("),a=n.indexOf(")");if(-1!==o&&a+1===n.length){var r=n.substr(0,o),s=n.substr(o+1,a-(o+1)).split(","),l=1;switch(r){case"rgba":if(4!==s.length)return void zt(e,0,0,0,1);l=Ot(s.pop());case"rgb":return 3!==s.length?void zt(e,0,0,0,1):(zt(e,Nt(s[0]),Nt(s[1]),Nt(s[2]),l),Vt(t,e),e);case"hsla":return 4!==s.length?void zt(e,0,0,0,1):(s[3]=Ot(s[3]),Ft(s,e),Vt(t,e),e);case"hsl":return 3!==s.length?void zt(e,0,0,0,1):(Ft(s,e),Vt(t,e),e);default:return;}}zt(e,0,0,0,1);}else{if(4===n.length)return(u=parseInt(n.substr(1),16))>=0&&u<=4095?(zt(e,(3840&u)>>4|(3840&u)>>8,240&u|(240&u)>>4,15&u|(15&u)<<4,1),Vt(t,e),e):void zt(e,0,0,0,1);if(7===n.length){var u=parseInt(n.substr(1),16);return u>=0&&u<=16777215?(zt(e,(16711680&u)>>16,(65280&u)>>8,255&u,1),Vt(t,e),e):void zt(e,0,0,0,1);}}}}function Ft(t,e){var i=(parseFloat(t[0])%360+360)%360/360,n=Ot(t[1]),o=Ot(t[2]),a=o<=.5?o*(n+1):o+n-o*n,r=2*o-a;return e=e||[],zt(e,Lt(255*Et(r,a,i+1/3)),Lt(255*Et(r,a,i)),Lt(255*Et(r,a,i-1/3)),1),4===t.length&&(e[3]=t[3]),e;}function Wt(t){if(t){var e,i,n=t[0]/255,o=t[1]/255,a=t[2]/255,r=Math.min(n,o,a),s=Math.max(n,o,a),l=s-r,u=(s+r)/2;if(0===l)e=0,i=0;else{i=u<.5?l/(s+r):l/(2-s-r);var h=((s-n)/6+l/2)/l,c=((s-o)/6+l/2)/l,d=((s-a)/6+l/2)/l;n===s?e=d-c:o===s?e=1/3+h-d:a===s&&(e=2/3+c-h),e<0&&(e+=1),e>1&&(e-=1);}var f=[360*e,i,u];return null!=t[3]&&f.push(t[3]),f;}}function Ht(t,e){var i=Gt(t);if(i){for(var n=0;n<3;n++){i[n]=e<0?i[n]*(1-e)|0:(255-i[n])*e+i[n]|0,i[n]>255?i[n]=255:t[n]<0&&(i[n]=0);}return qt(i,4===i.length?"rgba":"rgb");}}function Zt(t){var e=Gt(t);if(e)return((1<<24)+(e[0]<<16)+(e[1]<<8)+ +e[2]).toString(16).slice(1);}function Ut(t,e,i){if(e&&e.length&&t>=0&&t<=1){i=i||[];var n=t*(e.length-1),o=Math.floor(n),a=Math.ceil(n),r=e[o],s=e[a],l=n-o;return i[0]=Lt(Rt(r[0],s[0],l)),i[1]=Lt(Rt(r[1],s[1],l)),i[2]=Lt(Rt(r[2],s[2],l)),i[3]=Pt(Rt(r[3],s[3],l)),i;}}function Xt(t,e,i){if(e&&e.length&&t>=0&&t<=1){var n=t*(e.length-1),o=Math.floor(n),a=Math.ceil(n),r=Gt(e[o]),s=Gt(e[a]),l=n-o,u=qt([Lt(Rt(r[0],s[0],l)),Lt(Rt(r[1],s[1],l)),Lt(Rt(r[2],s[2],l)),Pt(Rt(r[3],s[3],l))],"rgba");return i?{color:u,leftIndex:o,rightIndex:a,value:n}:u;}}function jt(t,e,i,n){if(t=Gt(t))return t=Wt(t),null!=e&&(t[0]=kt(e)),null!=i&&(t[1]=Ot(i)),null!=n&&(t[2]=Ot(n)),qt(Ft(t),"rgba");}function Yt(t,e){if((t=Gt(t))&&null!=e)return t[3]=Pt(e),qt(t,"rgba");}function qt(t,e){if(t&&t.length){var i=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(i+=","+t[3]),e+"("+i+")";}}function Kt(t,e){return t[e];}function $t(t,e,i){t[e]=i;}function Jt(t,e,i){return(e-t)*i+t;}function Qt(t,e,i){return i>.5?e:t;}function te(t,e,i,n,o){var a=t.length;if(1===o)for(s=0;s<a;s++){n[s]=Jt(t[s],e[s],i);}else for(var r=a&&t[0].length,s=0;s<a;s++){for(var l=0;l<r;l++){n[s][l]=Jt(t[s][l],e[s][l],i);}}}function ee(t,e,i){var n=t.length,o=e.length;if(n!==o)if(n>o)t.length=o;else for(r=n;r<o;r++){t.push(1===i?e[r]:Hw.call(e[r]));}for(var a=t[0]&&t[0].length,r=0;r<t.length;r++){if(1===i)isNaN(t[r])&&(t[r]=e[r]);else for(var s=0;s<a;s++){isNaN(t[r][s])&&(t[r][s]=e[r][s]);}}}function ie(t,e,i){if(t===e)return!0;var n=t.length;if(n!==e.length)return!1;if(1===i){for(a=0;a<n;a++){if(t[a]!==e[a])return!1;}}else for(var o=t[0].length,a=0;a<n;a++){for(var r=0;r<o;r++){if(t[a][r]!==e[a][r])return!1;}}return!0;}function ne(t,e,i,n,o,a,r,s,l){var u=t.length;if(1===l)for(c=0;c<u;c++){s[c]=oe(t[c],e[c],i[c],n[c],o,a,r);}else for(var h=t[0].length,c=0;c<u;c++){for(var d=0;d<h;d++){s[c][d]=oe(t[c][d],e[c][d],i[c][d],n[c][d],o,a,r);}}}function oe(t,e,i,n,o,a,r){var s=.5*(i-t),l=.5*(n-e);return(2*(e-i)+s+l)*r+(-3*(e-i)-2*s-l)*a+s*o+e;}function ae(t){if(c(t)){var e=t.length;if(c(t[0])){for(var i=[],n=0;n<e;n++){i.push(Hw.call(t[n]));}return i;}return Hw.call(t);}return t;}function re(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")";}function se(t){var e=t[t.length-1].value;return c(e&&e[0])?2:1;}function le(t,e,i,n,o,a){var r=t._getter,s=t._setter,l="spline"===e,u=n.length;if(u){var h,d=c(n[0].value),f=!1,p=!1,g=d?se(n):0;n.sort(function(t,e){return t.time-e.time;}),h=n[u-1].time;for(var m=[],v=[],y=n[0].value,x=!0,_=0;_<u;_++){m.push(n[_].time/h);var w=n[_].value;if(d&&ie(w,y,g)||!d&&w===y||(x=!1),y=w,"string"==typeof w){var b=Gt(w);b?(w=b,f=!0):p=!0;}v.push(w);}if(a||!x){for(var S=v[u-1],_=0;_<u-1;_++){d?ee(v[_],S,g):!isNaN(v[_])||isNaN(S)||p||f||(v[_]=S);}d&&ee(r(t._target,o),S,g);var M,I,T,A,D,C,L=0,k=0;if(f)var P=[0,0,0,0];var N=new Ct({target:t._target,life:h,loop:t._loop,delay:t._delay,onframe:function onframe(t,e){var i;if(e<0)i=0;else if(e<k){for(i=M=Math.min(L+1,u-1);i>=0&&!(m[i]<=e);i--){;}i=Math.min(i,u-2);}else{for(i=L;i<u&&!(m[i]>e);i++){;}i=Math.min(i-1,u-2);}L=i,k=e;var n=m[i+1]-m[i];if(0!==n)if(I=(e-m[i])/n,l){if(A=v[i],T=v[0===i?i:i-1],D=v[i>u-2?u-1:i+1],C=v[i>u-3?u-1:i+2],d)ne(T,A,D,C,I,I*I,I*I*I,r(t,o),g);else{if(f)a=ne(T,A,D,C,I,I*I,I*I*I,P,1),a=re(P);else{if(p)return Qt(A,D,I);a=oe(T,A,D,C,I,I*I,I*I*I);}s(t,o,a);}}else if(d)te(v[i],v[i+1],I,r(t,o),g);else{var a;if(f)te(v[i],v[i+1],I,P,1),a=re(P);else{if(p)return Qt(v[i],v[i+1],I);a=Jt(v[i],v[i+1],I);}s(t,o,a);}},ondestroy:i});return e&&"spline"!==e&&(N.easing=e),N;}}}function ue(t,e,i,n,o,a,r,s){_(n)?(a=o,o=n,n=0):x(o)?(a=o,o="linear",n=0):x(n)?(a=n,n=0):x(i)?(a=i,i=500):i||(i=500),t.stopAnimation(),he(t,"",t,e,i,n,s);var l=t.animators.slice(),u=l.length;u||a&&a();for(var h=0;h<l.length;h++){l[h].done(function(){--u||a&&a();}).start(o,r);}}function he(t,e,i,n,o,a,r){var s={},l=0;for(var u in n){n.hasOwnProperty(u)&&(null!=i[u]?w(n[u])&&!c(n[u])?he(t,e?e+"."+u:u,i[u],n[u],o,a,r):(r?(s[u]=i[u],ce(t,e,u,n[u])):s[u]=n[u],l++):null==n[u]||r||ce(t,e,u,n[u]));}l>0&&t.animate(e,!1).when(null==o?500:o,s).delay(a||0);}function ce(t,e,i,n){if(e){var o={};o[e]={},o[e][i]=n,t.attr(o);}else t.attr(i,n);}function de(t,e,i,n){i<0&&(t+=i,i=-i),n<0&&(e+=n,n=-n),this.x=t,this.y=e,this.width=i,this.height=n;}function fe(t){for(var e=0;t>=eb;){e|=1&t,t>>=1;}return t+e;}function pe(t,e,i,n){var o=e+1;if(o===i)return 1;if(n(t[o++],t[e])<0){for(;o<i&&n(t[o],t[o-1])<0;){o++;}ge(t,e,o);}else for(;o<i&&n(t[o],t[o-1])>=0;){o++;}return o-e;}function ge(t,e,i){for(i--;e<i;){var n=t[e];t[e++]=t[i],t[i--]=n;}}function me(t,e,i,n,o){for(n===e&&n++;n<i;n++){for(var a,r=t[n],s=e,l=n;s<l;){o(r,t[a=s+l>>>1])<0?l=a:s=a+1;}var u=n-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;){t[s+u]=t[s+u-1],u--;}}t[s]=r;}}function ve(t,e,i,n,o,a){var r=0,s=0,l=1;if(a(t,e[i+o])>0){for(s=n-o;l<s&&a(t,e[i+o+l])>0;){r=l,(l=1+(l<<1))<=0&&(l=s);}l>s&&(l=s),r+=o,l+=o;}else{for(s=o+1;l<s&&a(t,e[i+o-l])<=0;){r=l,(l=1+(l<<1))<=0&&(l=s);}l>s&&(l=s);var u=r;r=o-l,l=o-u;}for(r++;r<l;){var h=r+(l-r>>>1);a(t,e[i+h])>0?r=h+1:l=h;}return l;}function ye(t,e,i,n,o,a){var r=0,s=0,l=1;if(a(t,e[i+o])<0){for(s=o+1;l<s&&a(t,e[i+o-l])<0;){r=l,(l=1+(l<<1))<=0&&(l=s);}l>s&&(l=s);var u=r;r=o-l,l=o-u;}else{for(s=n-o;l<s&&a(t,e[i+o+l])>=0;){r=l,(l=1+(l<<1))<=0&&(l=s);}l>s&&(l=s),r+=o,l+=o;}for(r++;r<l;){var h=r+(l-r>>>1);a(t,e[i+h])<0?l=h:r=h+1;}return l;}function xe(t,e){function i(i){var s=a[i],u=r[i],h=a[i+1],c=r[i+1];r[i]=u+c,i===l-3&&(a[i+1]=a[i+2],r[i+1]=r[i+2]),l--;var d=ye(t[h],t,s,u,0,e);s+=d,0!==(u-=d)&&0!==(c=ve(t[s+u-1],t,h,c,c-1,e))&&(u<=c?n(s,u,h,c):o(s,u,h,c));}function n(i,n,o,a){var r=0;for(r=0;r<n;r++){u[r]=t[i+r];}var l=0,h=o,c=i;if(t[c++]=t[h++],0!=--a){if(1!==n){for(var d,f,p,g=s;;){d=0,f=0,p=!1;do{if(e(t[h],u[l])<0){if(t[c++]=t[h++],f++,d=0,0==--a){p=!0;break;}}else if(t[c++]=u[l++],d++,f=0,1==--n){p=!0;break;}}while((d|f)<g);if(p)break;do{if(0!==(d=ye(t[h],u,l,n,0,e))){for(r=0;r<d;r++){t[c+r]=u[l+r];}if(c+=d,l+=d,(n-=d)<=1){p=!0;break;}}if(t[c++]=t[h++],0==--a){p=!0;break;}if(0!==(f=ve(u[l],t,h,a,0,e))){for(r=0;r<f;r++){t[c+r]=t[h+r];}if(c+=f,h+=f,0===(a-=f)){p=!0;break;}}if(t[c++]=u[l++],1==--n){p=!0;break;}g--;}while(d>=ib||f>=ib);if(p)break;g<0&&(g=0),g+=2;}if((s=g)<1&&(s=1),1===n){for(r=0;r<a;r++){t[c+r]=t[h+r];}t[c+a]=u[l];}else{if(0===n)throw new Error();for(r=0;r<n;r++){t[c+r]=u[l+r];}}}else{for(r=0;r<a;r++){t[c+r]=t[h+r];}t[c+a]=u[l];}}else for(r=0;r<n;r++){t[c+r]=u[l+r];}}function o(i,n,o,a){var r=0;for(r=0;r<a;r++){u[r]=t[o+r];}var l=i+n-1,h=a-1,c=o+a-1,d=0,f=0;if(t[c--]=t[l--],0!=--n){if(1!==a){for(var p=s;;){var g=0,m=0,v=!1;do{if(e(u[h],t[l])<0){if(t[c--]=t[l--],g++,m=0,0==--n){v=!0;break;}}else if(t[c--]=u[h--],m++,g=0,1==--a){v=!0;break;}}while((g|m)<p);if(v)break;do{if(0!=(g=n-ye(u[h],t,i,n,n-1,e))){for(n-=g,f=(c-=g)+1,d=(l-=g)+1,r=g-1;r>=0;r--){t[f+r]=t[d+r];}if(0===n){v=!0;break;}}if(t[c--]=u[h--],1==--a){v=!0;break;}if(0!=(m=a-ve(t[l],u,0,a,a-1,e))){for(a-=m,f=(c-=m)+1,d=(h-=m)+1,r=0;r<m;r++){t[f+r]=u[d+r];}if(a<=1){v=!0;break;}}if(t[c--]=t[l--],0==--n){v=!0;break;}p--;}while(g>=ib||m>=ib);if(v)break;p<0&&(p=0),p+=2;}if((s=p)<1&&(s=1),1===a){for(f=(c-=n)+1,d=(l-=n)+1,r=n-1;r>=0;r--){t[f+r]=t[d+r];}t[c]=u[h];}else{if(0===a)throw new Error();for(d=c-(a-1),r=0;r<a;r++){t[d+r]=u[r];}}}else{for(f=(c-=n)+1,d=(l-=n)+1,r=n-1;r>=0;r--){t[f+r]=t[d+r];}t[c]=u[h];}}else for(d=c-(a-1),r=0;r<a;r++){t[d+r]=u[r];}}var a,r,s=ib,l=0,u=[];a=[],r=[],this.mergeRuns=function(){for(;l>1;){var t=l-2;if(t>=1&&r[t-1]<=r[t]+r[t+1]||t>=2&&r[t-2]<=r[t]+r[t-1])r[t-1]<r[t+1]&&t--;else if(r[t]>r[t+1])break;i(t);}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2;t>0&&r[t-1]<r[t+1]&&t--,i(t);}},this.pushRun=function(t,e){a[l]=t,r[l]=e,l+=1;};}function _e(t,e,i,n){i||(i=0),n||(n=t.length);var o=n-i;if(!(o<2)){var a=0;if(o<eb)return a=pe(t,i,n,e),void me(t,i,n,i+a,e);var r=new xe(t,e),s=fe(o);do{if((a=pe(t,i,n,e))<s){var l=o;l>s&&(l=s),me(t,i,i+l,i+a,e),a=l;}r.pushRun(i,a),r.mergeRuns(),o-=a,i+=a;}while(0!==o);r.forceMergeRuns();}}function we(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel;}function be(t,e,i){var n=null==e.x?0:e.x,o=null==e.x2?1:e.x2,a=null==e.y?0:e.y,r=null==e.y2?0:e.y2;return e.global||(n=n*i.width+i.x,o=o*i.width+i.x,a=a*i.height+i.y,r=r*i.height+i.y),n=isNaN(n)?0:n,o=isNaN(o)?1:o,a=isNaN(a)?0:a,r=isNaN(r)?0:r,t.createLinearGradient(n,a,o,r);}function Se(t,e,i){var n=i.width,o=i.height,a=Math.min(n,o),r=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(r=r*n+i.x,s=s*o+i.y,l*=a),t.createRadialGradient(r,s,0,r,s,l);}function Me(){return!1;}function Ie(t,e,i){var n=iw(),o=e.getWidth(),a=e.getHeight(),r=n.style;return r&&(r.position="absolute",r.left=0,r.top=0,r.width=o+"px",r.height=a+"px",n.setAttribute("data-zr-dom-id",t)),n.width=o*i,n.height=a*i,n;}function Te(t){if("string"==typeof t){var e=mb.get(t);return e&&e.image;}return t;}function Ae(t,e,i,n,o){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!i)return e;var a=mb.get(t),r={hostEl:i,cb:n,cbPayload:o};return a?!Ce(e=a.image)&&a.pending.push(r):((e=new Image()).onload=e.onerror=De,mb.put(t,e.__cachedImgObj={image:e,pending:[r]}),e.src=e.__zrImageSrc=t),e;}return t;}return e;}function De(){var t=this.__cachedImgObj;this.onload=this.onerror=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var i=t.pending[e],n=i.cb;n&&n(this,i.cbPayload),i.hostEl.dirty();}t.pending.length=0;}function Ce(t){return t&&t.width&&t.height;}function Le(t,e){var i=t+":"+(e=e||wb);if(vb[i])return vb[i];for(var n=(t+"").split("\n"),o=0,a=0,r=n.length;a<r;a++){o=Math.max(We(n[a],e).width,o);}return yb>xb&&(yb=0,vb={}),yb++,vb[i]=o,o;}function ke(t,e,i,n,o,a,r,s){return r?Ne(t,e,i,n,o,a,r,s):Pe(t,e,i,n,o,a,s);}function Pe(t,e,i,n,o,a,r){var s=He(t,e,o,a,r),l=Le(t,e);o&&(l+=o[1]+o[3]);var u=s.outerHeight,h=new de(Oe(0,l,i),Ee(0,u,n),l,u);return h.lineHeight=s.lineHeight,h;}function Ne(t,e,i,n,o,a,r,s){var l=Ze(t,{rich:r,truncate:s,font:e,textAlign:i,textPadding:o,textLineHeight:a}),u=l.outerWidth,h=l.outerHeight;return new de(Oe(0,u,i),Ee(0,h,n),u,h);}function Oe(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t;}function Ee(t,e,i){return"middle"===i?t-=e/2:"bottom"===i&&(t-=e),t;}function Re(t,e,i){var n=e.x,o=e.y,a=e.height,r=e.width,s=a/2,l="left",u="top";switch(t){case"left":n-=i,o+=s,l="right",u="middle";break;case"right":n+=i+r,o+=s,u="middle";break;case"top":n+=r/2,o-=i,l="center",u="bottom";break;case"bottom":n+=r/2,o+=a+i,l="center";break;case"inside":n+=r/2,o+=s,l="center",u="middle";break;case"insideLeft":n+=i,o+=s,u="middle";break;case"insideRight":n+=r-i,o+=s,l="right",u="middle";break;case"insideTop":n+=r/2,o+=i,l="center";break;case"insideBottom":n+=r/2,o+=a-i,l="center",u="bottom";break;case"insideTopLeft":n+=i,o+=i;break;case"insideTopRight":n+=r-i,o+=i,l="right";break;case"insideBottomLeft":n+=i,o+=a-i,u="bottom";break;case"insideBottomRight":n+=r-i,o+=a-i,l="right",u="bottom";}return{x:n,y:o,textAlign:l,textVerticalAlign:u};}function ze(t,e,i,n,o){if(!e)return"";var a=(t+"").split("\n");o=Be(e,i,n,o);for(var r=0,s=a.length;r<s;r++){a[r]=Ve(a[r],o);}return a.join("\n");}function Be(t,e,i,n){(n=a({},n)).font=e;var i=A(i,"...");n.maxIterations=A(n.maxIterations,2);var o=n.minChar=A(n.minChar,0);n.cnCharWidth=Le("国",e);var r=n.ascCharWidth=Le("a",e);n.placeholder=A(n.placeholder,"");for(var s=t=Math.max(0,t-1),l=0;l<o&&s>=r;l++){s-=r;}var u=Le(i,e);return u>s&&(i="",u=0),s=t-u,n.ellipsis=i,n.ellipsisWidth=u,n.contentWidth=s,n.containerWidth=t,n;}function Ve(t,e){var i=e.containerWidth,n=e.font,o=e.contentWidth;if(!i)return"";var a=Le(t,n);if(a<=i)return t;for(var r=0;;r++){if(a<=o||r>=e.maxIterations){t+=e.ellipsis;break;}var s=0===r?Ge(t,o,e.ascCharWidth,e.cnCharWidth):a>0?Math.floor(t.length*o/a):0;a=Le(t=t.substr(0,s),n);}return""===t&&(t=e.placeholder),t;}function Ge(t,e,i,n){for(var o=0,a=0,r=t.length;a<r&&o<e;a++){var s=t.charCodeAt(a);o+=0<=s&&s<=127?i:n;}return a;}function Fe(t){return Le("国",t);}function We(t,e){return bb.measureText(t,e);}function He(t,e,i,n,o){null!=t&&(t+="");var a=A(n,Fe(e)),r=t?t.split("\n"):[],s=r.length*a,l=s;if(i&&(l+=i[0]+i[2]),t&&o){var u=o.outerHeight,h=o.outerWidth;if(null!=u&&l>u)t="",r=[];else if(null!=h)for(var c=Be(h-(i?i[1]+i[3]:0),e,o.ellipsis,{minChar:o.minChar,placeholder:o.placeholder}),d=0,f=r.length;d<f;d++){r[d]=Ve(r[d],c);}}return{lines:r,height:s,outerHeight:l,lineHeight:a};}function Ze(t,e){var i={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return i;for(var n,o=_b.lastIndex=0;null!=(n=_b.exec(t));){var a=n.index;a>o&&Ue(i,t.substring(o,a)),Ue(i,n[2],n[1]),o=_b.lastIndex;}o<t.length&&Ue(i,t.substring(o,t.length));var r=i.lines,s=0,l=0,u=[],h=e.textPadding,c=e.truncate,d=c&&c.outerWidth,f=c&&c.outerHeight;h&&(null!=d&&(d-=h[1]+h[3]),null!=f&&(f-=h[0]+h[2]));for(L=0;L<r.length;L++){for(var p=r[L],g=0,m=0,v=0;v<p.tokens.length;v++){var y=(k=p.tokens[v]).styleName&&e.rich[k.styleName]||{},x=k.textPadding=y.textPadding,_=k.font=y.font||e.font,w=k.textHeight=A(y.textHeight,Fe(_));if(x&&(w+=x[0]+x[2]),k.height=w,k.lineHeight=D(y.textLineHeight,e.textLineHeight,w),k.textAlign=y&&y.textAlign||e.textAlign,k.textVerticalAlign=y&&y.textVerticalAlign||"middle",null!=f&&s+k.lineHeight>f)return{lines:[],width:0,height:0};k.textWidth=Le(k.text,_);var b=y.textWidth,S=null==b||"auto"===b;if("string"==typeof b&&"%"===b.charAt(b.length-1))k.percentWidth=b,u.push(k),b=0;else{if(S){b=k.textWidth;var M=y.textBackgroundColor,I=M&&M.image;I&&Ce(I=Te(I))&&(b=Math.max(b,I.width*w/I.height));}var T=x?x[1]+x[3]:0;b+=T;var C=null!=d?d-m:null;null!=C&&C<b&&(!S||C<T?(k.text="",k.textWidth=b=0):(k.text=ze(k.text,C-T,_,c.ellipsis,{minChar:c.minChar}),k.textWidth=Le(k.text,_),b=k.textWidth+T));}m+=k.width=b,y&&(g=Math.max(g,k.lineHeight));}p.width=m,p.lineHeight=g,s+=g,l=Math.max(l,m);}i.outerWidth=i.width=A(e.textWidth,l),i.outerHeight=i.height=A(e.textHeight,s),h&&(i.outerWidth+=h[1]+h[3],i.outerHeight+=h[0]+h[2]);for(var L=0;L<u.length;L++){var k=u[L],P=k.percentWidth;k.width=parseInt(P,10)/100*l;}return i;}function Ue(t,e,i){for(var n=""===e,o=e.split("\n"),a=t.lines,r=0;r<o.length;r++){var s=o[r],l={styleName:i,text:s,isLineHolder:!s&&!n};if(r)a.push({tokens:[l]});else{var u=(a[a.length-1]||(a[0]={tokens:[]})).tokens,h=u.length;1===h&&u[0].isLineHolder?u[0]=l:(s||!h||n)&&u.push(l);}}}function Xe(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&P(e)||t.textFont||t.font;}function je(t,e){var i,n,o,a,r=e.x,s=e.y,l=e.width,u=e.height,h=e.r;l<0&&(r+=l,l=-l),u<0&&(s+=u,u=-u),"number"==typeof h?i=n=o=a=h:h instanceof Array?1===h.length?i=n=o=a=h[0]:2===h.length?(i=o=h[0],n=a=h[1]):3===h.length?(i=h[0],n=a=h[1],o=h[2]):(i=h[0],n=h[1],o=h[2],a=h[3]):i=n=o=a=0;var c;i+n>l&&(i*=l/(c=i+n),n*=l/c),o+a>l&&(o*=l/(c=o+a),a*=l/c),n+o>u&&(n*=u/(c=n+o),o*=u/c),i+a>u&&(i*=u/(c=i+a),a*=u/c),t.moveTo(r+i,s),t.lineTo(r+l-n,s),0!==n&&t.arc(r+l-n,s+n,n,-Math.PI/2,0),t.lineTo(r+l,s+u-o),0!==o&&t.arc(r+l-o,s+u-o,o,0,Math.PI/2),t.lineTo(r+a,s+u),0!==a&&t.arc(r+a,s+u-a,a,Math.PI/2,Math.PI),t.lineTo(r,s+i),0!==i&&t.arc(r+i,s+i,i,Math.PI,1.5*Math.PI);}function Ye(t){return qe(t),d(t.rich,qe),t;}function qe(t){if(t){t.font=Xe(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||Mb[e]?e:"left";var i=t.textVerticalAlign||t.textBaseline;"center"===i&&(i="middle"),t.textVerticalAlign=null==i||Ib[i]?i:"top",t.textPadding&&(t.textPadding=L(t.textPadding));}}function Ke(t,e,i,n,o,a){n.rich?Je(t,e,i,n,o,a):$e(t,e,i,n,o,a);}function $e(t,e,i,n,o,a){var r,s=ii(n),l=!1,u=e.__attrCachedBy===rb.PLAIN_TEXT;a!==sb?(a&&(r=a.style,l=!s&&u&&r),e.__attrCachedBy=s?rb.NONE:rb.PLAIN_TEXT):u&&(e.__attrCachedBy=rb.NONE);var h=n.font||Sb;l&&h===(r.font||Sb)||(e.font=h);var c=t.__computedFont;t.__styleFont!==h&&(t.__styleFont=h,c=t.__computedFont=e.font);var d=n.textPadding,f=n.textLineHeight,p=t.__textCotentBlock;p&&!t.__dirtyText||(p=t.__textCotentBlock=He(i,c,d,f,n.truncate));var g=p.outerHeight,m=p.lines,v=p.lineHeight,y=ai(g,n,o),x=y.baseX,_=y.baseY,w=y.textAlign||"left",b=y.textVerticalAlign;ti(e,n,o,x,_);var S=Ee(_,g,b),M=x,I=S;if(s||d){var T=Le(i,c);d&&(T+=d[1]+d[3]);var A=Oe(x,T,w);s&&ni(t,e,n,A,S,T,g),d&&(M=hi(x,w,d),I+=d[0]);}e.textAlign=w,e.textBaseline="middle",e.globalAlpha=n.opacity||1;for(B=0;B<Tb.length;B++){var D=Tb[B],C=D[0],L=D[1],k=n[C];l&&k===r[C]||(e[L]=ab(e,L,k||D[2]));}I+=v/2;var P=n.textStrokeWidth,N=l?r.textStrokeWidth:null,O=!l||P!==N,E=!l||O||n.textStroke!==r.textStroke,R=si(n.textStroke,P),z=li(n.textFill);if(R&&(O&&(e.lineWidth=P),E&&(e.strokeStyle=R)),z&&(l&&n.textFill===r.textFill||(e.fillStyle=z)),1===m.length)R&&e.strokeText(m[0],M,I),z&&e.fillText(m[0],M,I);else for(var B=0;B<m.length;B++){R&&e.strokeText(m[B],M,I),z&&e.fillText(m[B],M,I),I+=v;}}function Je(t,e,i,n,o,a){a!==sb&&(e.__attrCachedBy=rb.NONE);var r=t.__textCotentBlock;r&&!t.__dirtyText||(r=t.__textCotentBlock=Ze(i,n)),Qe(t,e,r,n,o);}function Qe(t,e,i,n,o){var a=i.width,r=i.outerWidth,s=i.outerHeight,l=n.textPadding,u=ai(s,n,o),h=u.baseX,c=u.baseY,d=u.textAlign,f=u.textVerticalAlign;ti(e,n,o,h,c);var p=Oe(h,r,d),g=Ee(c,s,f),m=p,v=g;l&&(m+=l[3],v+=l[0]);var y=m+a;ii(n)&&ni(t,e,n,p,g,r,s);for(var x=0;x<i.lines.length;x++){for(var _,w=i.lines[x],b=w.tokens,S=b.length,M=w.lineHeight,I=w.width,T=0,A=m,D=y,C=S-1;T<S&&(!(_=b[T]).textAlign||"left"===_.textAlign);){ei(t,e,_,n,M,v,A,"left"),I-=_.width,A+=_.width,T++;}for(;C>=0&&"right"===(_=b[C]).textAlign;){ei(t,e,_,n,M,v,D,"right"),I-=_.width,D-=_.width,C--;}for(A+=(a-(A-m)-(y-D)-I)/2;T<=C;){ei(t,e,_=b[T],n,M,v,A+_.width/2,"center"),A+=_.width,T++;}v+=M;}}function ti(t,e,i,n,o){if(i&&e.textRotation){var a=e.textOrigin;"center"===a?(n=i.width/2+i.x,o=i.height/2+i.y):a&&(n=a[0]+i.x,o=a[1]+i.y),t.translate(n,o),t.rotate(-e.textRotation),t.translate(-n,-o);}}function ei(t,e,i,n,o,a,r,s){var l=n.rich[i.styleName]||{};l.text=i.text;var u=i.textVerticalAlign,h=a+o/2;"top"===u?h=a+i.height/2:"bottom"===u&&(h=a+o-i.height/2),!i.isLineHolder&&ii(l)&&ni(t,e,l,"right"===s?r-i.width:"center"===s?r-i.width/2:r,h-i.height/2,i.width,i.height);var c=i.textPadding;c&&(r=hi(r,s,c),h-=i.height/2-c[2]-i.textHeight/2),ri(e,"shadowBlur",D(l.textShadowBlur,n.textShadowBlur,0)),ri(e,"shadowColor",l.textShadowColor||n.textShadowColor||"transparent"),ri(e,"shadowOffsetX",D(l.textShadowOffsetX,n.textShadowOffsetX,0)),ri(e,"shadowOffsetY",D(l.textShadowOffsetY,n.textShadowOffsetY,0)),ri(e,"textAlign",s),ri(e,"textBaseline","middle"),ri(e,"font",i.font||Sb);var d=si(l.textStroke||n.textStroke,p),f=li(l.textFill||n.textFill),p=A(l.textStrokeWidth,n.textStrokeWidth);d&&(ri(e,"lineWidth",p),ri(e,"strokeStyle",d),e.strokeText(i.text,r,h)),f&&(ri(e,"fillStyle",f),e.fillText(i.text,r,h));}function ii(t){return!!(t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor);}function ni(t,e,i,n,o,a,r){var s=i.textBackgroundColor,l=i.textBorderWidth,u=i.textBorderColor,h=_(s);if(ri(e,"shadowBlur",i.textBoxShadowBlur||0),ri(e,"shadowColor",i.textBoxShadowColor||"transparent"),ri(e,"shadowOffsetX",i.textBoxShadowOffsetX||0),ri(e,"shadowOffsetY",i.textBoxShadowOffsetY||0),h||l&&u){e.beginPath();var c=i.textBorderRadius;c?je(e,{x:n,y:o,width:a,height:r,r:c}):e.rect(n,o,a,r),e.closePath();}if(h){if(ri(e,"fillStyle",s),null!=i.fillOpacity){f=e.globalAlpha;e.globalAlpha=i.fillOpacity*i.opacity,e.fill(),e.globalAlpha=f;}else e.fill();}else if(w(s)){var d=s.image;(d=Ae(d,null,t,oi,s))&&Ce(d)&&e.drawImage(d,n,o,a,r);}if(l&&u)if(ri(e,"lineWidth",l),ri(e,"strokeStyle",u),null!=i.strokeOpacity){var f=e.globalAlpha;e.globalAlpha=i.strokeOpacity*i.opacity,e.stroke(),e.globalAlpha=f;}else e.stroke();}function oi(t,e){e.image=t;}function ai(t,e,i){var n=e.x||0,o=e.y||0,a=e.textAlign,r=e.textVerticalAlign;if(i){var s=e.textPosition;if(s instanceof Array)n=i.x+ui(s[0],i.width),o=i.y+ui(s[1],i.height);else{var l=Re(s,i,e.textDistance);n=l.x,o=l.y,a=a||l.textAlign,r=r||l.textVerticalAlign;}var u=e.textOffset;u&&(n+=u[0],o+=u[1]);}return{baseX:n,baseY:o,textAlign:a,textVerticalAlign:r};}function ri(t,e,i){return t[e]=ab(t,e,i),t[e];}function si(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t;}function li(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t;}function ui(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t;}function hi(t,e,i){return"right"===e?t-i[1]:"center"===e?t+i[3]/2-i[1]/2:t+i[3];}function ci(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding);}function di(t){t=t||{},Kw.call(this,t);for(var e in t){t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);}this.style=new ub(t.style,this),this._rect=null,this.__clipPaths=[];}function fi(t){di.call(this,t);}function pi(t){return parseInt(t,10);}function gi(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh);}function mi(t,e,i){return Cb.copy(t.getBoundingRect()),t.transform&&Cb.applyTransform(t.transform),Lb.width=e,Lb.height=i,!Cb.intersect(Lb);}function vi(t,e){if(t===e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var i=0;i<t.length;i++){if(t[i]!==e[i])return!0;}}function yi(t,e){for(var i=0;i<t.length;i++){var n=t[i];n.setTransform(e),e.beginPath(),n.buildPath(e,n.shape),e.clip(),n.restoreTransform(e);}}function xi(t,e){var i=document.createElement("div");return i.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",i;}function _i(t){return"mousewheel"===t&&U_.browser.firefox?"DOMMouseScroll":t;}function wi(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1;},700);}function bi(t){var e=t.pointerType;return"pen"===e||"touch"===e;}function Si(t){function e(t,e){return function(){if(!e._touching)return t.apply(e,arguments);};}d(Ob,function(e){t._handlers[e]=m(zb[e],t);}),d(Rb,function(e){t._handlers[e]=m(zb[e],t);}),d(Nb,function(i){t._handlers[i]=e(zb[i],t);});}function Mi(t){function e(e,i){d(e,function(e){ht(t,_i(e),i._handlers[e]);},i);}fw.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._handlers={},Si(this),U_.pointerEventsSupported?e(Rb,this):(U_.touchEventsSupported&&e(Ob,this),e(Nb,this));}function Ii(t,e){var i=new Wb(H_(),t,e);return Fb[i.id]=i,i;}function Ti(t,e){Gb[t]=e;}function Ai(t){delete Fb[t];}function Di(t){return t instanceof Array?t:null==t?[]:[t];}function Ci(t,e,i){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var n=0,o=i.length;n<o;n++){var a=i[n];!t.emphasis[e].hasOwnProperty(a)&&t[e].hasOwnProperty(a)&&(t.emphasis[e][a]=t[e][a]);}}}function Li(t){return!Ub(t)||Xb(t)||t instanceof Date?t:t.value;}function ki(t){return Ub(t)&&!(t instanceof Array);}function Pi(t,e){e=(e||[]).slice();var i=f(t||[],function(t,e){return{exist:t};});return Zb(e,function(t,n){if(Ub(t)){for(o=0;o<i.length;o++){if(!i[o].option&&null!=t.id&&i[o].exist.id===t.id+"")return i[o].option=t,void(e[n]=null);}for(var o=0;o<i.length;o++){var a=i[o].exist;if(!(i[o].option||null!=a.id&&null!=t.id||null==t.name||Ei(t)||Ei(a)||a.name!==t.name+""))return i[o].option=t,void(e[n]=null);}}}),Zb(e,function(t,e){if(Ub(t)){for(var n=0;n<i.length;n++){var o=i[n].exist;if(!i[n].option&&!Ei(o)&&null==t.id){i[n].option=t;break;}}n>=i.length&&i.push({option:t});}}),i;}function Ni(t){var e=R();Zb(t,function(t,i){var n=t.exist;n&&e.set(n.id,t);}),Zb(t,function(t,i){var n=t.option;k(!n||null==n.id||!e.get(n.id)||e.get(n.id)===t,"id duplicates: "+(n&&n.id)),n&&null!=n.id&&e.set(n.id,t),!t.keyInfo&&(t.keyInfo={});}),Zb(t,function(t,i){var n=t.exist,o=t.option,a=t.keyInfo;if(Ub(o)){if(a.name=null!=o.name?o.name+"":n?n.name:jb+i,n)a.id=n.id;else if(null!=o.id)a.id=o.id+"";else{var r=0;do{a.id="\0"+a.name+"\0"+r++;}while(e.get(a.id));}e.set(a.id,t);}});}function Oi(t){var e=t.name;return!(!e||!e.indexOf(jb));}function Ei(t){return Ub(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0");}function Ri(t,e){function i(t,e,i){for(var n=0,o=t.length;n<o;n++){for(var a=t[n].seriesId,r=Di(t[n].dataIndex),s=i&&i[a],l=0,u=r.length;l<u;l++){var h=r[l];s&&s[h]?s[h]=null:(e[a]||(e[a]={}))[h]=1;}}}function n(t,e){var i=[];for(var o in t){if(t.hasOwnProperty(o)&&null!=t[o])if(e)i.push(+o);else{var a=n(t[o],!0);a.length&&i.push({seriesId:o,dataIndex:a});}}return i;}var o={},a={};return i(t||[],o),i(e||[],a,o),[n(o),n(a)];}function zi(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?y(e.dataIndex)?f(e.dataIndex,function(e){return t.indexOfRawIndex(e);}):t.indexOfRawIndex(e.dataIndex):null!=e.name?y(e.name)?f(e.name,function(e){return t.indexOfName(e);}):t.indexOfName(e.name):void 0;}function Bi(){var t="__\0ec_inner_"+qb++ +"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={});};}function Vi(t,e,i){if(_(e)){var n={};n[e+"Index"]=0,e=n;}var o=i&&i.defaultMainType;!o||Gi(e,o+"Index")||Gi(e,o+"Id")||Gi(e,o+"Name")||(e[o+"Index"]=0);var a={};return Zb(e,function(n,o){var n=e[o];if("dataIndex"!==o&&"dataIndexInside"!==o){var r=o.match(/^(\w+)(Index|Id|Name)$/)||[],s=r[1],u=(r[2]||"").toLowerCase();if(!(!s||!u||null==n||"index"===u&&"none"===n||i&&i.includeMainTypes&&l(i.includeMainTypes,s)<0)){var h={mainType:s};"index"===u&&"all"===n||(h[u]=n);var c=t.queryComponents(h);a[s+"Models"]=c,a[s+"Model"]=c[0];}}else a[o]=n;}),a;}function Gi(t,e){return t&&t.hasOwnProperty(e);}function Fi(t,e,i){t.setAttribute?t.setAttribute(e,i):t[e]=i;}function Wi(t,e){return t.getAttribute?t.getAttribute(e):t[e];}function Hi(t){return"auto"===t?U_.domSupported?"html":"richText":t||"html";}function Zi(t,e){var i=R(),n=[];return d(t,function(t){var o=e(t);(i.get(o)||(n.push(o),i.set(o,[]))).push(t);}),{keys:n,buckets:i};}function Ui(t){var e={main:"",sub:""};return t&&(t=t.split(Kb),e.main=t[0]||"",e.sub=t[1]||""),e;}function Xi(t){k(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal');}function ji(t,e){t.$constructor=t,t.extend=function(t){var e=this,i=function i(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments);};return a(i.prototype,t),i.extend=this.extend,i.superCall=qi,i.superApply=Ki,u(i,this),i.superClass=e,i;};}function Yi(t){var e=["__\0is_clz",Jb++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e]);};}function qi(t,e){var i=C(arguments,2);return this.superClass.prototype[e].apply(t,i);}function Ki(t,e,i){return this.superClass.prototype[e].apply(t,i);}function $i(t,e){function i(t){var e=n[t.main];return e&&e[$b]||((e=n[t.main]={})[$b]=!0),e;}e=e||{};var n={};if(t.registerClass=function(t,e){return e&&(Xi(e),(e=Ui(e)).sub?e.sub!==$b&&(i(e)[e.sub]=t):n[e.main]=t),t;},t.getClass=function(t,e,i){var o=n[t];if(o&&o[$b]&&(o=e?o[e]:null),i&&!o)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return o;},t.getClassesByMainType=function(t){t=Ui(t);var e=[],i=n[t.main];return i&&i[$b]?d(i,function(t,i){i!==$b&&e.push(t);}):e.push(i),e;},t.hasClass=function(t){return t=Ui(t),!!n[t.main];},t.getAllClassMainTypes=function(){var t=[];return d(n,function(e,i){t.push(i);}),t;},t.hasSubTypes=function(t){t=Ui(t);var e=n[t.main];return e&&e[$b];},t.parseClassType=Ui,e.registerWhenExtend){var o=t.extend;o&&(t.extend=function(e){var i=o.call(this,e);return t.registerClass(i,e.type);});}return t;}function Ji(t){return t>-rS&&t<rS;}function Qi(t){return t>rS||t<-rS;}function tn(t,e,i,n,o){var a=1-o;return a*a*(a*t+3*o*e)+o*o*(o*n+3*a*i);}function en(t,e,i,n,o){var a=1-o;return 3*(((e-t)*a+2*(i-e)*o)*a+(n-i)*o*o);}function nn(t,e,i,n,o,a){var r=n+3*(e-i)-t,s=3*(i-2*e+t),l=3*(e-t),u=t-o,h=s*s-3*r*l,c=s*l-9*r*u,d=l*l-3*s*u,f=0;if(Ji(h)&&Ji(c))Ji(s)?a[0]=0:(M=-l/s)>=0&&M<=1&&(a[f++]=M);else{var p=c*c-4*h*d;if(Ji(p)){var g=c/h,m=-g/2;(M=-s/r+g)>=0&&M<=1&&(a[f++]=M),m>=0&&m<=1&&(a[f++]=m);}else if(p>0){var v=aS(p),y=h*s+1.5*r*(-c+v),x=h*s+1.5*r*(-c-v);(M=(-s-((y=y<0?-oS(-y,uS):oS(y,uS))+(x=x<0?-oS(-x,uS):oS(x,uS))))/(3*r))>=0&&M<=1&&(a[f++]=M);}else{var _=(2*h*s-3*r*c)/(2*aS(h*h*h)),w=Math.acos(_)/3,b=aS(h),S=Math.cos(w),M=(-s-2*b*S)/(3*r),m=(-s+b*(S+lS*Math.sin(w)))/(3*r),I=(-s+b*(S-lS*Math.sin(w)))/(3*r);M>=0&&M<=1&&(a[f++]=M),m>=0&&m<=1&&(a[f++]=m),I>=0&&I<=1&&(a[f++]=I);}}return f;}function on(t,e,i,n,o){var a=6*i-12*e+6*t,r=9*e+3*n-3*t-9*i,s=3*e-3*t,l=0;if(Ji(r))Qi(a)&&(c=-s/a)>=0&&c<=1&&(o[l++]=c);else{var u=a*a-4*r*s;if(Ji(u))o[0]=-a/(2*r);else if(u>0){var h=aS(u),c=(-a+h)/(2*r),d=(-a-h)/(2*r);c>=0&&c<=1&&(o[l++]=c),d>=0&&d<=1&&(o[l++]=d);}}return l;}function an(t,e,i,n,o,a){var r=(e-t)*o+t,s=(i-e)*o+e,l=(n-i)*o+i,u=(s-r)*o+r,h=(l-s)*o+s,c=(h-u)*o+u;a[0]=t,a[1]=r,a[2]=u,a[3]=c,a[4]=c,a[5]=h,a[6]=l,a[7]=n;}function rn(t,e,i,n,o,a,r,s,l,u,h){var c,d,f,p,g,m=.005,v=1/0;hS[0]=l,hS[1]=u;for(var y=0;y<1;y+=.05){cS[0]=tn(t,i,o,r,y),cS[1]=tn(e,n,a,s,y),(p=hw(hS,cS))<v&&(c=y,v=p);}v=1/0;for(var x=0;x<32&&!(m<sS);x++){d=c-m,f=c+m,cS[0]=tn(t,i,o,r,d),cS[1]=tn(e,n,a,s,d),p=hw(cS,hS),d>=0&&p<v?(c=d,v=p):(dS[0]=tn(t,i,o,r,f),dS[1]=tn(e,n,a,s,f),g=hw(dS,hS),f<=1&&g<v?(c=f,v=g):m*=.5);}return h&&(h[0]=tn(t,i,o,r,c),h[1]=tn(e,n,a,s,c)),aS(v);}function sn(t,e,i,n){var o=1-n;return o*(o*t+2*n*e)+n*n*i;}function ln(t,e,i,n){return 2*((1-n)*(e-t)+n*(i-e));}function un(t,e,i,n,o){var a=t-2*e+i,r=2*(e-t),s=t-n,l=0;if(Ji(a))Qi(r)&&(c=-s/r)>=0&&c<=1&&(o[l++]=c);else{var u=r*r-4*a*s;if(Ji(u))(c=-r/(2*a))>=0&&c<=1&&(o[l++]=c);else if(u>0){var h=aS(u),c=(-r+h)/(2*a),d=(-r-h)/(2*a);c>=0&&c<=1&&(o[l++]=c),d>=0&&d<=1&&(o[l++]=d);}}return l;}function hn(t,e,i){var n=t+i-2*e;return 0===n?.5:(t-e)/n;}function cn(t,e,i,n,o){var a=(e-t)*n+t,r=(i-e)*n+e,s=(r-a)*n+a;o[0]=t,o[1]=a,o[2]=s,o[3]=s,o[4]=r,o[5]=i;}function dn(t,e,i,n,o,a,r,s,l){var u,h=.005,c=1/0;hS[0]=r,hS[1]=s;for(var d=0;d<1;d+=.05){cS[0]=sn(t,i,o,d),cS[1]=sn(e,n,a,d),(m=hw(hS,cS))<c&&(u=d,c=m);}c=1/0;for(var f=0;f<32&&!(h<sS);f++){var p=u-h,g=u+h;cS[0]=sn(t,i,o,p),cS[1]=sn(e,n,a,p);var m=hw(cS,hS);if(p>=0&&m<c)u=p,c=m;else{dS[0]=sn(t,i,o,g),dS[1]=sn(e,n,a,g);var v=hw(dS,hS);g<=1&&v<c?(u=g,c=v):h*=.5;}}return l&&(l[0]=sn(t,i,o,u),l[1]=sn(e,n,a,u)),aS(c);}function fn(t,e,i){if(0!==t.length){var n,o=t[0],a=o[0],r=o[0],s=o[1],l=o[1];for(n=1;n<t.length;n++){o=t[n],a=fS(a,o[0]),r=pS(r,o[0]),s=fS(s,o[1]),l=pS(l,o[1]);}e[0]=a,e[1]=s,i[0]=r,i[1]=l;}}function pn(t,e,i,n,o,a){o[0]=fS(t,i),o[1]=fS(e,n),a[0]=pS(t,i),a[1]=pS(e,n);}function gn(t,e,i,n,o,a,r,s,l,u){var h,c=on,d=tn,f=c(t,i,o,r,wS);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,h=0;h<f;h++){var p=d(t,i,o,r,wS[h]);l[0]=fS(p,l[0]),u[0]=pS(p,u[0]);}for(f=c(e,n,a,s,bS),h=0;h<f;h++){var g=d(e,n,a,s,bS[h]);l[1]=fS(g,l[1]),u[1]=pS(g,u[1]);}l[0]=fS(t,l[0]),u[0]=pS(t,u[0]),l[0]=fS(r,l[0]),u[0]=pS(r,u[0]),l[1]=fS(e,l[1]),u[1]=pS(e,u[1]),l[1]=fS(s,l[1]),u[1]=pS(s,u[1]);}function mn(t,e,i,n,o,a,r,s){var l=hn,u=sn,h=pS(fS(l(t,i,o),1),0),c=pS(fS(l(e,n,a),1),0),d=u(t,i,o,h),f=u(e,n,a,c);r[0]=fS(t,o,d),r[1]=fS(e,a,f),s[0]=pS(t,o,d),s[1]=pS(e,a,f);}function vn(t,e,i,n,o,a,r,s,l){var u=tt,h=et,c=Math.abs(o-a);if(c%vS<1e-4&&c>1e-4)return s[0]=t-i,s[1]=e-n,l[0]=t+i,void(l[1]=e+n);if(yS[0]=mS(o)*i+t,yS[1]=gS(o)*n+e,xS[0]=mS(a)*i+t,xS[1]=gS(a)*n+e,u(s,yS,xS),h(l,yS,xS),(o%=vS)<0&&(o+=vS),(a%=vS)<0&&(a+=vS),o>a&&!r?a+=vS:o<a&&r&&(o+=vS),r){var d=a;a=o,o=d;}for(var f=0;f<a;f+=Math.PI/2){f>o&&(_S[0]=mS(f)*i+t,_S[1]=gS(f)*n+e,u(s,_S,s),h(l,_S,l));}}function yn(t,e,i,n,o,a,r){if(0===o)return!1;var s=o,l=0,u=t;if(r>e+s&&r>n+s||r<e-s&&r<n-s||a>t+s&&a>i+s||a<t-s&&a<i-s)return!1;if(t===i)return Math.abs(a-t)<=s/2;var h=(l=(e-n)/(t-i))*a-r+(u=(t*n-i*e)/(t-i));return h*h/(l*l+1)<=s/2*s/2;}function xn(t,e,i,n,o,a,r,s,l,u,h){if(0===l)return!1;var c=l;return!(h>e+c&&h>n+c&&h>a+c&&h>s+c||h<e-c&&h<n-c&&h<a-c&&h<s-c||u>t+c&&u>i+c&&u>o+c&&u>r+c||u<t-c&&u<i-c&&u<o-c&&u<r-c)&&rn(t,e,i,n,o,a,r,s,u,h,null)<=c/2;}function _n(t,e,i,n,o,a,r,s,l){if(0===r)return!1;var u=r;return!(l>e+u&&l>n+u&&l>a+u||l<e-u&&l<n-u&&l<a-u||s>t+u&&s>i+u&&s>o+u||s<t-u&&s<i-u&&s<o-u)&&dn(t,e,i,n,o,a,s,l,null)<=u/2;}function wn(t){return(t%=RS)<0&&(t+=RS),t;}function bn(t,e,i,n,o,a,r,s,l){if(0===r)return!1;var u=r;s-=t,l-=e;var h=Math.sqrt(s*s+l*l);if(h-u>i||h+u<i)return!1;if(Math.abs(n-o)%zS<1e-4)return!0;if(a){var c=n;n=wn(o),o=wn(c);}else n=wn(n),o=wn(o);n>o&&(o+=zS);var d=Math.atan2(l,s);return d<0&&(d+=zS),d>=n&&d<=o||d+zS>=n&&d+zS<=o;}function Sn(t,e,i,n,o,a){if(a>e&&a>n||a<e&&a<n)return 0;if(n===e)return 0;var r=n<e?1:-1,s=(a-e)/(n-e);1!==s&&0!==s||(r=n<e?.5:-.5);var l=s*(i-t)+t;return l===o?1/0:l>o?r:0;}function Mn(t,e){return Math.abs(t-e)<GS;}function In(){var t=WS[0];WS[0]=WS[1],WS[1]=t;}function Tn(t,e,i,n,o,a,r,s,l,u){if(u>e&&u>n&&u>a&&u>s||u<e&&u<n&&u<a&&u<s)return 0;var h=nn(e,n,a,s,u,FS);if(0===h)return 0;for(var c,d,f=0,p=-1,g=0;g<h;g++){var m=FS[g],v=0===m||1===m?.5:1;tn(t,i,o,r,m)<l||(p<0&&(p=on(e,n,a,s,WS),WS[1]<WS[0]&&p>1&&In(),c=tn(e,n,a,s,WS[0]),p>1&&(d=tn(e,n,a,s,WS[1]))),2===p?m<WS[0]?f+=c<e?v:-v:m<WS[1]?f+=d<c?v:-v:f+=s<d?v:-v:m<WS[0]?f+=c<e?v:-v:f+=s<c?v:-v);}return f;}function An(t,e,i,n,o,a,r,s){if(s>e&&s>n&&s>a||s<e&&s<n&&s<a)return 0;var l=un(e,n,a,s,FS);if(0===l)return 0;var u=hn(e,n,a);if(u>=0&&u<=1){for(var h=0,c=sn(e,n,a,u),d=0;d<l;d++){f=0===FS[d]||1===FS[d]?.5:1;(p=sn(t,i,o,FS[d]))<r||(FS[d]<u?h+=c<e?f:-f:h+=a<c?f:-f);}return h;}var f=0===FS[0]||1===FS[0]?.5:1,p=sn(t,i,o,FS[0]);return p<r?0:a<e?f:-f;}function Dn(t,e,i,n,o,a,r,s){if((s-=e)>i||s<-i)return 0;u=Math.sqrt(i*i-s*s);FS[0]=-u,FS[1]=u;var l=Math.abs(n-o);if(l<1e-4)return 0;if(l%VS<1e-4){n=0,o=VS;p=a?1:-1;return r>=FS[0]+t&&r<=FS[1]+t?p:0;}if(a){var u=n;n=wn(o),o=wn(u);}else n=wn(n),o=wn(o);n>o&&(o+=VS);for(var h=0,c=0;c<2;c++){var d=FS[c];if(d+t>r){var f=Math.atan2(s,d),p=a?1:-1;f<0&&(f=VS+f),(f>=n&&f<=o||f+VS>=n&&f+VS<=o)&&(f>Math.PI/2&&f<1.5*Math.PI&&(p=-p),h+=p);}}return h;}function Cn(t,e,i,n,o){for(var a=0,r=0,s=0,l=0,u=0,h=0;h<t.length;){var c=t[h++];switch(c===BS.M&&h>1&&(i||(a+=Sn(r,s,l,u,n,o))),1===h&&(l=r=t[h],u=s=t[h+1]),c){case BS.M:r=l=t[h++],s=u=t[h++];break;case BS.L:if(i){if(yn(r,s,t[h],t[h+1],e,n,o))return!0;}else a+=Sn(r,s,t[h],t[h+1],n,o)||0;r=t[h++],s=t[h++];break;case BS.C:if(i){if(xn(r,s,t[h++],t[h++],t[h++],t[h++],t[h],t[h+1],e,n,o))return!0;}else a+=Tn(r,s,t[h++],t[h++],t[h++],t[h++],t[h],t[h+1],n,o)||0;r=t[h++],s=t[h++];break;case BS.Q:if(i){if(_n(r,s,t[h++],t[h++],t[h],t[h+1],e,n,o))return!0;}else a+=An(r,s,t[h++],t[h++],t[h],t[h+1],n,o)||0;r=t[h++],s=t[h++];break;case BS.A:var d=t[h++],f=t[h++],p=t[h++],g=t[h++],m=t[h++],v=t[h++];h+=1;var y=1-t[h++],x=Math.cos(m)*p+d,_=Math.sin(m)*g+f;h>1?a+=Sn(r,s,x,_,n,o):(l=x,u=_);var w=(n-d)*g/p+d;if(i){if(bn(d,f,g,m,m+v,y,e,w,o))return!0;}else a+=Dn(d,f,g,m,m+v,y,w,o);r=Math.cos(m+v)*p+d,s=Math.sin(m+v)*g+f;break;case BS.R:l=r=t[h++],u=s=t[h++];var x=l+t[h++],_=u+t[h++];if(i){if(yn(l,u,x,u,e,n,o)||yn(x,u,x,_,e,n,o)||yn(x,_,l,_,e,n,o)||yn(l,_,l,u,e,n,o))return!0;}else a+=Sn(x,u,x,_,n,o),a+=Sn(l,_,l,u,n,o);break;case BS.Z:if(i){if(yn(r,s,l,u,e,n,o))return!0;}else a+=Sn(r,s,l,u,n,o);r=l,s=u;}}return i||Mn(s,u)||(a+=Sn(r,s,l,u,n,o)||0),0!==a;}function Ln(t,e,i){return Cn(t,0,!1,e,i);}function kn(t,e,i,n){return Cn(t,e,!0,i,n);}function Pn(t){di.call(this,t),this.path=null;}function Nn(t,e,i,n,o,a,r,s,l,u,h){var c=l*(tM/180),d=QS(c)*(t-i)/2+JS(c)*(e-n)/2,f=-1*JS(c)*(t-i)/2+QS(c)*(e-n)/2,p=d*d/(r*r)+f*f/(s*s);p>1&&(r*=$S(p),s*=$S(p));var g=(o===a?-1:1)*$S((r*r*(s*s)-r*r*(f*f)-s*s*(d*d))/(r*r*(f*f)+s*s*(d*d)))||0,m=g*r*f/s,v=g*-s*d/r,y=(t+i)/2+QS(c)*m-JS(c)*v,x=(e+n)/2+JS(c)*m+QS(c)*v,_=nM([1,0],[(d-m)/r,(f-v)/s]),w=[(d-m)/r,(f-v)/s],b=[(-1*d-m)/r,(-1*f-v)/s],S=nM(w,b);iM(w,b)<=-1&&(S=tM),iM(w,b)>=1&&(S=0),0===a&&S>0&&(S-=2*tM),1===a&&S<0&&(S+=2*tM),h.addData(u,y,x,r,s,_,S,c,a);}function On(t){if(!t)return new ES();for(var e,i=0,n=0,o=i,a=n,r=new ES(),s=ES.CMD,l=t.match(oM),u=0;u<l.length;u++){for(var h,c=l[u],d=c.charAt(0),f=c.match(aM)||[],p=f.length,g=0;g<p;g++){f[g]=parseFloat(f[g]);}for(var m=0;m<p;){var v,y,x,_,w,b,S,M=i,I=n;switch(d){case"l":i+=f[m++],n+=f[m++],h=s.L,r.addData(h,i,n);break;case"L":i=f[m++],n=f[m++],h=s.L,r.addData(h,i,n);break;case"m":i+=f[m++],n+=f[m++],h=s.M,r.addData(h,i,n),o=i,a=n,d="l";break;case"M":i=f[m++],n=f[m++],h=s.M,r.addData(h,i,n),o=i,a=n,d="L";break;case"h":i+=f[m++],h=s.L,r.addData(h,i,n);break;case"H":i=f[m++],h=s.L,r.addData(h,i,n);break;case"v":n+=f[m++],h=s.L,r.addData(h,i,n);break;case"V":n=f[m++],h=s.L,r.addData(h,i,n);break;case"C":h=s.C,r.addData(h,f[m++],f[m++],f[m++],f[m++],f[m++],f[m++]),i=f[m-2],n=f[m-1];break;case"c":h=s.C,r.addData(h,f[m++]+i,f[m++]+n,f[m++]+i,f[m++]+n,f[m++]+i,f[m++]+n),i+=f[m-2],n+=f[m-1];break;case"S":v=i,y=n;var T=r.len(),A=r.data;e===s.C&&(v+=i-A[T-4],y+=n-A[T-3]),h=s.C,M=f[m++],I=f[m++],i=f[m++],n=f[m++],r.addData(h,v,y,M,I,i,n);break;case"s":v=i,y=n;var T=r.len(),A=r.data;e===s.C&&(v+=i-A[T-4],y+=n-A[T-3]),h=s.C,M=i+f[m++],I=n+f[m++],i+=f[m++],n+=f[m++],r.addData(h,v,y,M,I,i,n);break;case"Q":M=f[m++],I=f[m++],i=f[m++],n=f[m++],h=s.Q,r.addData(h,M,I,i,n);break;case"q":M=f[m++]+i,I=f[m++]+n,i+=f[m++],n+=f[m++],h=s.Q,r.addData(h,M,I,i,n);break;case"T":v=i,y=n;var T=r.len(),A=r.data;e===s.Q&&(v+=i-A[T-4],y+=n-A[T-3]),i=f[m++],n=f[m++],h=s.Q,r.addData(h,v,y,i,n);break;case"t":v=i,y=n;var T=r.len(),A=r.data;e===s.Q&&(v+=i-A[T-4],y+=n-A[T-3]),i+=f[m++],n+=f[m++],h=s.Q,r.addData(h,v,y,i,n);break;case"A":x=f[m++],_=f[m++],w=f[m++],b=f[m++],S=f[m++],Nn(M=i,I=n,i=f[m++],n=f[m++],b,S,x,_,w,h=s.A,r);break;case"a":x=f[m++],_=f[m++],w=f[m++],b=f[m++],S=f[m++],Nn(M=i,I=n,i+=f[m++],n+=f[m++],b,S,x,_,w,h=s.A,r);}}"z"!==d&&"Z"!==d||(h=s.Z,r.addData(h),i=o,n=a),e=h;}return r.toStatic(),r;}function En(t,e){var i=On(t);return e=e||{},e.buildPath=function(t){if(t.setData)t.setData(i.data),(e=t.getContext())&&t.rebuildPath(e);else{var e=t;i.rebuildPath(e);}},e.applyTransform=function(t){KS(i,t),this.dirty(!0);},e;}function Rn(t,e){return new Pn(En(t,e));}function zn(t,e){return Pn.extend(En(t,e));}function Bn(t,e,i,n,o,a,r){var s=.5*(i-t),l=.5*(n-e);return(2*(e-i)+s+l)*r+(-3*(e-i)-2*s-l)*a+s*o+e;}function Vn(t,e,i){var n=e.points,o=e.smooth;if(n&&n.length>=2){if(o&&"spline"!==o){var a=fM(n,o,i,e.smoothConstraint);t.moveTo(n[0][0],n[0][1]);for(var r=n.length,s=0;s<(i?r:r-1);s++){var l=a[2*s],u=a[2*s+1],h=n[(s+1)%r];t.bezierCurveTo(l[0],l[1],u[0],u[1],h[0],h[1]);}}else{"spline"===o&&(n=dM(n,i)),t.moveTo(n[0][0],n[0][1]);for(var s=1,c=n.length;s<c;s++){t.lineTo(n[s][0],n[s][1]);}}i&&t.closePath();}}function Gn(t,e,i){var n=i&&i.lineWidth;if(e&&n){var o=e.x1,a=e.x2,r=e.y1,s=e.y2;mM(2*o)===mM(2*a)?t.x1=t.x2=Wn(o,n,!0):(t.x1=o,t.x2=a),mM(2*r)===mM(2*s)?t.y1=t.y2=Wn(r,n,!0):(t.y1=r,t.y2=s);}}function Fn(t,e,i){var n=i&&i.lineWidth;if(e&&n){var o=e.x,a=e.y,r=e.width,s=e.height;t.x=Wn(o,n,!0),t.y=Wn(a,n,!0),t.width=Math.max(Wn(o+r,n,!1)-t.x,0===r?0:1),t.height=Math.max(Wn(a+s,n,!1)-t.y,0===s?0:1);}}function Wn(t,e,i){var n=mM(2*t);return(n+mM(e))%2==0?n/2:(n+(i?1:-1))/2;}function Hn(t,e,i){var n=t.cpx2,o=t.cpy2;return null===n||null===o?[(i?en:tn)(t.x1,t.cpx1,t.cpx2,t.x2,e),(i?en:tn)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(i?ln:sn)(t.x1,t.cpx1,t.x2,e),(i?ln:sn)(t.y1,t.cpy1,t.y2,e)];}function Zn(t){di.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0;}function Un(t){return Pn.extend(t);}function Xn(t,e,i,n){var o=Rn(t,e);return i&&("center"===n&&(i=Yn(i,o.getBoundingRect())),qn(o,i)),o;}function jn(t,e,i){var n=new fi({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function onload(t){if("center"===i){var o={width:t.width,height:t.height};n.setStyle(Yn(e,o));}}});return n;}function Yn(t,e){var i,n=e.width/e.height,o=t.height*n;return i=o<=t.width?t.height:(o=t.width)/n,{x:t.x+t.width/2-o/2,y:t.y+t.height/2-i/2,width:o,height:i};}function qn(t,e){if(t.applyTransform){var i=t.getBoundingRect().calculateTransform(e);t.applyTransform(i);}}function Kn(t){var e=t.shape,i=t.style.lineWidth;return CM(2*e.x1)===CM(2*e.x2)&&(e.x1=e.x2=Jn(e.x1,i,!0)),CM(2*e.y1)===CM(2*e.y2)&&(e.y1=e.y2=Jn(e.y1,i,!0)),t;}function $n(t){var e=t.shape,i=t.style.lineWidth,n=e.x,o=e.y,a=e.width,r=e.height;return e.x=Jn(e.x,i,!0),e.y=Jn(e.y,i,!0),e.width=Math.max(Jn(n+a,i,!1)-e.x,0===a?0:1),e.height=Math.max(Jn(o+r,i,!1)-e.y,0===r?0:1),t;}function Jn(t,e,i){var n=CM(2*t);return(n+CM(e))%2==0?n/2:(n+(i?1:-1))/2;}function Qn(t){return null!=t&&"none"!==t;}function to(t){if("string"!=typeof t)return t;var e=EM.get(t);return e||(e=Ht(t,-.1),RM<1e4&&(EM.set(t,e),RM++)),e;}function eo(t){if(t.__hoverStlDirty){t.__hoverStlDirty=!1;var e=t.__hoverStl;if(e){var i=t.__cachedNormalStl={};t.__cachedNormalZ2=t.z2;var n=t.style;for(var o in e){null!=e[o]&&(i[o]=n[o]);}i.fill=n.fill,i.stroke=n.stroke;}else t.__cachedNormalStl=t.__cachedNormalZ2=null;}}function io(t){var e=t.__hoverStl;if(e&&!t.__highlighted){var i=t.useHoverLayer;t.__highlighted=i?"layer":"plain";var n=t.__zr;if(n||!i){var o=t,a=t.style;i&&(a=(o=n.addHover(t)).style),bo(a),i||eo(o),a.extendFrom(e),no(a,e,"fill"),no(a,e,"stroke"),wo(a),i||(t.dirty(!1),t.z2+=NM);}}}function no(t,e,i){!Qn(e[i])&&Qn(t[i])&&(t[i]=to(t[i]));}function oo(t){var e=t.__highlighted;if(e)if(t.__highlighted=!1,"layer"===e)t.__zr&&t.__zr.removeHover(t);else if(e){var i=t.style,n=t.__cachedNormalStl;n&&(bo(i),t.setStyle(n),wo(i));var o=t.__cachedNormalZ2;null!=o&&t.z2-o===NM&&(t.z2=o);}}function ao(t,e){t.isGroup?t.traverse(function(t){!t.isGroup&&e(t);}):e(t);}function ro(t,e){e=t.__hoverStl=!1!==e&&(e||{}),t.__hoverStlDirty=!0,t.__highlighted&&(t.__cachedNormalStl=null,oo(t),io(t));}function so(t){return t&&t.__isEmphasisEntered;}function lo(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasisEntered&&ao(this,io);}function uo(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasisEntered&&ao(this,oo);}function ho(){this.__isEmphasisEntered=!0,ao(this,io);}function co(){this.__isEmphasisEntered=!1,ao(this,oo);}function fo(t,e,i){t.isGroup?t.traverse(function(t){!t.isGroup&&ro(t,t.hoverStyle||e);}):ro(t,t.hoverStyle||e),po(t,i);}function po(t,e){var i=!1===e;if(t.__hoverSilentOnTouch=null!=e&&e.hoverSilentOnTouch,!i||t.__hoverStyleTrigger){var n=i?"off":"on";t[n]("mouseover",lo)[n]("mouseout",uo),t[n]("emphasis",ho)[n]("normal",co),t.__hoverStyleTrigger=!i;}}function go(t,e,i,n,o,a,r){var s,l=(o=o||PM).labelFetcher,u=o.labelDataIndex,h=o.labelDimIndex,c=i.getShallow("show"),d=n.getShallow("show");(c||d)&&(l&&(s=l.getFormattedLabel(u,"normal",null,h)),null==s&&(s=x(o.defaultText)?o.defaultText(u,o):o.defaultText));var f=c?s:null,p=d?A(l?l.getFormattedLabel(u,"emphasis",null,h):null,s):null;null==f&&null==p||(mo(t,i,a,o),mo(e,n,r,o,!0)),t.text=f,e.text=p;}function mo(t,e,i,n,o){return vo(t,e,n,o),i&&a(t,i),t;}function vo(t,e,i,n){if((i=i||PM).isRectText){var o=e.getShallow("position")||(n?null:"inside");"outside"===o&&(o="top"),t.textPosition=o,t.textOffset=e.getShallow("offset");var a=e.getShallow("rotate");null!=a&&(a*=Math.PI/180),t.textRotation=a,t.textDistance=A(e.getShallow("distance"),n?null:5);}var r,s=e.ecModel,l=s&&s.option.textStyle,u=yo(e);if(u){r={};for(var h in u){if(u.hasOwnProperty(h)){var c=e.getModel(["rich",h]);xo(r[h]={},c,l,i,n);}}}return t.rich=r,xo(t,e,l,i,n,!0),i.forceRich&&!i.textStyle&&(i.textStyle={}),t;}function yo(t){for(var e;t&&t!==t.ecModel;){var i=(t.option||PM).rich;if(i){e=e||{};for(var n in i){i.hasOwnProperty(n)&&(e[n]=1);}}t=t.parentModel;}return e;}function xo(t,e,i,n,o,a){i=!o&&i||PM,t.textFill=_o(e.getShallow("color"),n)||i.color,t.textStroke=_o(e.getShallow("textBorderColor"),n)||i.textBorderColor,t.textStrokeWidth=A(e.getShallow("textBorderWidth"),i.textBorderWidth),t.insideRawTextPosition=t.textPosition,o||(a&&(t.insideRollbackOpt=n,wo(t)),null==t.textFill&&(t.textFill=n.autoColor)),t.fontStyle=e.getShallow("fontStyle")||i.fontStyle,t.fontWeight=e.getShallow("fontWeight")||i.fontWeight,t.fontSize=e.getShallow("fontSize")||i.fontSize,t.fontFamily=e.getShallow("fontFamily")||i.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),a&&n.disableBox||(t.textBackgroundColor=_o(e.getShallow("backgroundColor"),n),t.textPadding=e.getShallow("padding"),t.textBorderColor=_o(e.getShallow("borderColor"),n),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||i.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||i.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||i.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||i.textShadowOffsetY;}function _o(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null;}function wo(t){var e=t.insideRollbackOpt;if(e&&null==t.textFill){var i,n=e.useInsideStyle,o=t.insideRawTextPosition,a=e.autoColor;!1!==n&&(!0===n||e.isRectText&&o&&"string"==typeof o&&o.indexOf("inside")>=0)?(i={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=a,null==t.textStrokeWidth&&(t.textStrokeWidth=2))):null!=a&&(i={textFill:null},t.textFill=a),i&&(t.insideRollback=i);}}function bo(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth,t.insideRollback=null);}function So(t,e){var i=e||e.getModel("textStyle");return P([t.fontStyle||i&&i.getShallow("fontStyle")||"",t.fontWeight||i&&i.getShallow("fontWeight")||"",(t.fontSize||i&&i.getShallow("fontSize")||12)+"px",t.fontFamily||i&&i.getShallow("fontFamily")||"sans-serif"].join(" "));}function Mo(t,e,i,n,o,a){if("function"==typeof o&&(a=o,o=null),n&&n.isAnimationEnabled()){var r=t?"Update":"",s=n.getShallow("animationDuration"+r),l=n.getShallow("animationEasing"+r),u=n.getShallow("animationDelay"+r);"function"==typeof u&&(u=u(o,n.getAnimationDelayParams?n.getAnimationDelayParams(e,o):null)),"function"==typeof s&&(s=s(o)),s>0?e.animateTo(i,s,u||0,l,a,!!a):(e.stopAnimation(),e.attr(i),a&&a());}else e.stopAnimation(),e.attr(i),a&&a();}function Io(t,e,i,n,o){Mo(!0,t,e,i,n,o);}function To(t,e,i,n,o){Mo(!1,t,e,i,n,o);}function Ao(t,e){for(var i=_t([]);t&&t!==e;){bt(i,t.getLocalTransform(),i),t=t.parent;}return i;}function Do(t,e,i){return e&&!c(e)&&(e=Tw.getLocalTransform(e)),i&&(e=Tt([],e)),Q([],t,e);}function Co(t,e,i){var n=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),o=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),a=["left"===t?-n:"right"===t?n:0,"top"===t?-o:"bottom"===t?o:0];return a=Do(a,e,i),Math.abs(a[0])>Math.abs(a[1])?a[0]>0?"right":"left":a[1]>0?"bottom":"top";}function Lo(t,e,i,n){function o(t){var e={position:F(t.position),rotation:t.rotation};return t.shape&&(e.shape=a({},t.shape)),e;}if(t&&e){var r=function(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t);}),e;}(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=r[t.anid];if(e){var n=o(t);t.attr(o(e)),Io(t,n,i,t.dataIndex);}}});}}function ko(t,e){return f(t,function(t){var i=t[0];i=LM(i,e.x),i=kM(i,e.x+e.width);var n=t[1];return n=LM(n,e.y),n=kM(n,e.y+e.height),[i,n];});}function Po(t,e,i){var n=(e=a({rectHover:!0},e)).style={strokeNoScale:!0};if(i=i||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(n.image=t.slice(8),r(n,i),new fi(e)):Xn(t.replace("path://",""),e,i,"center");}function No(t,e,i){this.parentModel=e,this.ecModel=i,this.option=t;}function Oo(t,e,i){for(var n=0;n<e.length&&(!e[n]||null!=(t=t&&"object"==typeof t?t[e[n]]:null));n++){;}return null==t&&i&&(t=i.get(e)),t;}function Eo(t,e){var i=HM(t).getParent;return i?i.call(t,e):t.parentModel;}function Ro(t){return[t||"",ZM++,Math.random().toFixed(5)].join("_");}function zo(t){return t.replace(/^\s+/,"").replace(/\s+$/,"");}function Bo(t,e,i,n){var o=e[1]-e[0],a=i[1]-i[0];if(0===o)return 0===a?i[0]:(i[0]+i[1])/2;if(n){if(o>0){if(t<=e[0])return i[0];if(t>=e[1])return i[1];}else{if(t>=e[0])return i[0];if(t<=e[1])return i[1];}}else{if(t===e[0])return i[0];if(t===e[1])return i[1];}return(t-e[0])/o*a+i[0];}function Vo(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%";}return"string"==typeof t?zo(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t;}function Go(t,e,i){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),i?t:+t;}function Fo(t){return t.sort(function(t,e){return t-e;}),t;}function Wo(t){if(t=+t,isNaN(t))return 0;for(var e=1,i=0;Math.round(t*e)/e!==t;){e*=10,i++;}return i;}function Ho(t){var e=t.toString(),i=e.indexOf("e");if(i>0){var n=+e.slice(i+1);return n<0?-n:0;}var o=e.indexOf(".");return o<0?0:e.length-1-o;}function Zo(t,e){var i=Math.log,n=Math.LN10,o=Math.floor(i(t[1]-t[0])/n),a=Math.round(i(Math.abs(e[1]-e[0]))/n),r=Math.min(Math.max(-o+a,0),20);return isFinite(r)?r:20;}function Uo(t,e,i){if(!t[e])return 0;var n=p(t,function(t,e){return t+(isNaN(e)?0:e);},0);if(0===n)return 0;for(var o=Math.pow(10,i),a=f(t,function(t){return(isNaN(t)?0:t)/n*o*100;}),r=100*o,s=f(a,function(t){return Math.floor(t);}),l=p(s,function(t,e){return t+e;},0),u=f(a,function(t,e){return t-s[e];});l<r;){for(var h=Number.NEGATIVE_INFINITY,c=null,d=0,g=u.length;d<g;++d){u[d]>h&&(h=u[d],c=d);}++s[c],u[c]=0,++l;}return s[e]/o;}function Xo(t){var e=2*Math.PI;return(t%e+e)%e;}function jo(t){return t>-UM&&t<UM;}function Yo(t){if(t instanceof Date)return t;if("string"==typeof t){var e=jM.exec(t);if(!e)return new Date(NaN);if(e[8]){var i=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(i-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,i,+(e[5]||0),+e[6]||0,+e[7]||0));}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0);}return null==t?new Date(NaN):new Date(Math.round(t));}function qo(t){return Math.pow(10,Ko(t));}function Ko(t){return Math.floor(Math.log(t)/Math.LN10);}function $o(t,e){var i,n=Ko(t),o=Math.pow(10,n),a=t/o;return i=e?a<1.5?1:a<2.5?2:a<4?3:a<7?5:10:a<1?1:a<2?2:a<3?3:a<5?5:10,t=i*o,n>=-20?+t.toFixed(n<0?-n:0):t;}function Jo(t){function e(t,i,n){return t.interval[n]<i.interval[n]||t.interval[n]===i.interval[n]&&(t.close[n]-i.close[n]==(n?-1:1)||!n&&e(t,i,1));}t.sort(function(t,i){return e(t,i,0)?-1:1;});for(var i=-1/0,n=1,o=0;o<t.length;){for(var a=t[o].interval,r=t[o].close,s=0;s<2;s++){a[s]<=i&&(a[s]=i,r[s]=s?1:1-n),i=a[s],n=r[s];}a[0]===a[1]&&r[0]*r[1]!=1?t.splice(o,1):o++;}return t;}function Qo(t){return t-parseFloat(t)>=0;}function ta(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"");}function ea(t,e){return t=(t||"").toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase();}),e&&t&&(t=t.charAt(0).toUpperCase()+t.slice(1)),t;}function ia(t){return null==t?"":(t+"").replace(KM,function(t,e){return $M[e];});}function na(t,e,i){y(e)||(e=[e]);var n=e.length;if(!n)return"";for(var o=e[0].$vars||[],a=0;a<o.length;a++){var r=JM[a];t=t.replace(QM(r),QM(r,0));}for(var s=0;s<n;s++){for(var l=0;l<o.length;l++){var u=e[s][o[l]];t=t.replace(QM(JM[l],s),i?ia(u):u);}}return t;}function oa(t,e,i){return d(e,function(e,n){t=t.replace("{"+n+"}",i?ia(e):e);}),t;}function aa(t,e){var i=(t=_(t)?{color:t,extraCssText:e}:t||{}).color,n=t.type,e=t.extraCssText,o=t.renderMode||"html",a=t.markerId||"X";return i?"html"===o?"subItem"===n?'<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:'+ia(i)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+ia(i)+";"+(e||"")+'"></span>':{renderMode:o,content:"{marker"+a+"|}  ",style:{color:i}}:"";}function ra(t,e){return t+="","0000".substr(0,e-t.length)+t;}function sa(t,e,i){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var n=Yo(e),o=i?"UTC":"",a=n["get"+o+"FullYear"](),r=n["get"+o+"Month"]()+1,s=n["get"+o+"Date"](),l=n["get"+o+"Hours"](),u=n["get"+o+"Minutes"](),h=n["get"+o+"Seconds"](),c=n["get"+o+"Milliseconds"]();return t=t.replace("MM",ra(r,2)).replace("M",r).replace("yyyy",a).replace("yy",a%100).replace("dd",ra(s,2)).replace("d",s).replace("hh",ra(l,2)).replace("h",l).replace("mm",ra(u,2)).replace("m",u).replace("ss",ra(h,2)).replace("s",h).replace("SSS",ra(c,3));}function la(t){return t?t.charAt(0).toUpperCase()+t.substr(1):t;}function ua(t,e,i,n,o){var a=0,r=0;null==n&&(n=1/0),null==o&&(o=1/0);var s=0;e.eachChild(function(l,u){var h,c,d=l.position,f=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var m=f.width+(g?-g.x+f.x:0);(h=a+m)>n||l.newline?(a=0,h=m,r+=s+i,s=f.height):s=Math.max(s,f.height);}else{var v=f.height+(g?-g.y+f.y:0);(c=r+v)>o||l.newline?(a+=s+i,r=0,c=v,s=f.width):s=Math.max(s,f.width);}l.newline||(d[0]=a,d[1]=r,"horizontal"===t?a=h+i:r=c+i);});}function ha(t,e,i){var n=e.width,o=e.height,a=Vo(t.x,n),r=Vo(t.y,o),s=Vo(t.x2,n),l=Vo(t.y2,o);return(isNaN(a)||isNaN(parseFloat(t.x)))&&(a=0),(isNaN(s)||isNaN(parseFloat(t.x2)))&&(s=n),(isNaN(r)||isNaN(parseFloat(t.y)))&&(r=0),(isNaN(l)||isNaN(parseFloat(t.y2)))&&(l=o),i=qM(i||0),{width:Math.max(s-a-i[1]-i[3],0),height:Math.max(l-r-i[0]-i[2],0)};}function ca(t,e,i){i=qM(i||0);var n=e.width,o=e.height,a=Vo(t.left,n),r=Vo(t.top,o),s=Vo(t.right,n),l=Vo(t.bottom,o),u=Vo(t.width,n),h=Vo(t.height,o),c=i[2]+i[0],d=i[1]+i[3],f=t.aspect;switch(isNaN(u)&&(u=n-s-d-a),isNaN(h)&&(h=o-l-c-r),null!=f&&(isNaN(u)&&isNaN(h)&&(f>n/o?u=.8*n:h=.8*o),isNaN(u)&&(u=f*h),isNaN(h)&&(h=u/f)),isNaN(a)&&(a=n-s-u-d),isNaN(r)&&(r=o-l-h-c),t.left||t.right){case"center":a=n/2-u/2-i[3];break;case"right":a=n-u-d;}switch(t.top||t.bottom){case"middle":case"center":r=o/2-h/2-i[0];break;case"bottom":r=o-h-c;}a=a||0,r=r||0,isNaN(u)&&(u=n-d-a-(s||0)),isNaN(h)&&(h=o-c-r-(l||0));var p=new de(a+i[3],r+i[0],u,h);return p.margin=i,p;}function da(t,e,i,n,o){var a=!o||!o.hv||o.hv[0],s=!o||!o.hv||o.hv[1],l=o&&o.boundingMode||"all";if(a||s){var u;if("raw"===l)u="group"===t.type?new de(0,0,+e.width||0,+e.height||0):t.getBoundingRect();else if(u=t.getBoundingRect(),t.needLocalTransform()){var h=t.getLocalTransform();(u=u.clone()).applyTransform(h);}e=ca(r({width:u.width,height:u.height},e),i,n);var c=t.position,d=a?e.x-u.x:0,f=s?e.y-u.y:0;t.attr("position","raw"===l?[d,f]:[c[0]+d,c[1]+f]);}}function fa(t,e){return null!=t[oI[e][0]]||null!=t[oI[e][1]]&&null!=t[oI[e][2]];}function pa(t,e,i){function n(i,n){var r={},l=0,u={},h=0;if(iI(i,function(e){u[e]=t[e];}),iI(i,function(t){o(e,t)&&(r[t]=u[t]=e[t]),a(r,t)&&l++,a(u,t)&&h++;}),s[n])return a(e,i[1])?u[i[2]]=null:a(e,i[2])&&(u[i[1]]=null),u;if(2!==h&&l){if(l>=2)return r;for(var c=0;c<i.length;c++){var d=i[c];if(!o(r,d)&&o(t,d)){r[d]=t[d];break;}}return r;}return u;}function o(t,e){return t.hasOwnProperty(e);}function a(t,e){return null!=t[e]&&"auto"!==t[e];}function r(t,e,i){iI(t,function(t){e[t]=i[t];});}!w(i)&&(i={});var s=i.ignoreSize;!y(s)&&(s=[s,s]);var l=n(oI[0],0),u=n(oI[1],1);r(oI[0],t,l),r(oI[1],t,u);}function ga(t){return ma({},t);}function ma(t,e){return e&&t&&iI(nI,function(i){e.hasOwnProperty(i)&&(t[i]=e[i]);}),t;}function va(t,e){for(var i=t.length,n=0;n<i;n++){if(t[n].length>e)return t[n];}return t[i-1];}function ya(t){var e=t.get("coordinateSystem"),i={coordSysName:e,coordSysDims:[],axisMap:R(),categoryAxisMap:R()},n=fI[e];if(n)return n(t,i,i.axisMap,i.categoryAxisMap),i;}function xa(t){return"category"===t.get("type");}function _a(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===vI?{}:[]),this.sourceFormat=t.sourceFormat||yI,this.seriesLayoutBy=t.seriesLayoutBy||_I,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&R(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount;}function wa(t){var e=t.option.source,i=yI;if(S(e))i=xI;else if(y(e)){0===e.length&&(i=gI);for(var n=0,o=e.length;n<o;n++){var a=e[n];if(null!=a){if(y(a)){i=gI;break;}if(w(a)){i=mI;break;}}}}else if(w(e)){for(var r in e){if(e.hasOwnProperty(r)&&c(e[r])){i=vI;break;}}}else if(null!=e)throw new Error("Invalid data");bI(t).sourceFormat=i;}function ba(t){return bI(t).source;}function Sa(t){bI(t).datasetMap=R();}function Ma(t){var e=t.option,i=e.data,n=S(i)?xI:pI,o=!1,a=e.seriesLayoutBy,r=e.sourceHeader,s=e.dimensions,l=La(t);if(l){var u=l.option;i=u.source,n=bI(l).sourceFormat,o=!0,a=a||u.seriesLayoutBy,null==r&&(r=u.sourceHeader),s=s||u.dimensions;}var h=Ia(i,n,a,r,s),c=e.encode;!c&&l&&(c=Ca(t,l,i,n,a,h)),bI(t).source=new _a({data:i,fromDataset:o,seriesLayoutBy:a,sourceFormat:n,dimensionsDefine:h.dimensionsDefine,startIndex:h.startIndex,dimensionsDetectCount:h.dimensionsDetectCount,encodeDefine:c});}function Ia(t,e,i,n,o){if(!t)return{dimensionsDefine:Ta(o)};var a,r,s;if(e===gI)"auto"===n||null==n?Aa(function(t){null!=t&&"-"!==t&&(_(t)?null==r&&(r=1):r=0);},i,t,10):r=n?1:0,o||1!==r||(o=[],Aa(function(t,e){o[e]=null!=t?t:"";},i,t)),a=o?o.length:i===wI?t.length:t[0]?t[0].length:null;else if(e===mI)o||(o=Da(t),s=!0);else if(e===vI)o||(o=[],s=!0,d(t,function(t,e){o.push(e);}));else if(e===pI){var l=Li(t[0]);a=y(l)&&l.length||1;}var u;return s&&d(o,function(t,e){"name"===(w(t)?t.name:t)&&(u=e);}),{startIndex:r,dimensionsDefine:Ta(o),dimensionsDetectCount:a,potentialNameDimIndex:u};}function Ta(t){if(t){var e=R();return f(t,function(t,i){if(null==(t=a({},w(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var n=e.get(t.name);return n?t.name+="-"+n.count++:e.set(t.name,{count:1}),t;});}}function Aa(t,e,i,n){if(null==n&&(n=1/0),e===wI)for(a=0;a<i.length&&a<n;a++){t(i[a]?i[a][0]:null,a);}else for(var o=i[0]||[],a=0;a<o.length&&a<n;a++){t(o[a],a);}}function Da(t){for(var e,i=0;i<t.length&&!(e=t[i++]);){;}if(e){var n=[];return d(e,function(t,e){n.push(e);}),n;}}function Ca(t,e,i,n,o,a){var r=ya(t),s={},l=[],u=[],h=t.subType,c=R(["pie","map","funnel"]),f=R(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(r&&null!=f.get(h)){var p=t.ecModel,g=bI(p).datasetMap,m=e.uid+"_"+o,v=g.get(m)||g.set(m,{categoryWayDim:1,valueWayDim:0});d(r.coordSysDims,function(t){if(null==r.firstCategoryDimIndex){e=v.valueWayDim++;s[t]=e,u.push(e);}else if(r.categoryAxisMap.get(t))s[t]=0,l.push(0);else{var e=v.categoryWayDim++;s[t]=e,u.push(e);}});}else if(null!=c.get(h)){for(var y,x=0;x<5&&null==y;x++){Pa(i,n,o,a.dimensionsDefine,a.startIndex,x)||(y=x);}if(null!=y){s.value=y;var _=a.potentialNameDimIndex||Math.max(y-1,0);u.push(_),l.push(_);}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s;}function La(t){var e=t.option;if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0);}function ka(t,e){return Pa(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e);}function Pa(t,e,i,n,o,a){function r(t){return(null==t||!isFinite(t)||""===t)&&(!(!_(t)||"-"===t)||void 0);}var s;if(S(t))return!1;var l;if(n&&(l=w(l=n[a])?l.name:l),e===gI){if(i===wI){for(var u=t[a],h=0;h<(u||[]).length&&h<5;h++){if(null!=(s=r(u[o+h])))return s;}}else for(h=0;h<t.length&&h<5;h++){var c=t[o+h];if(c&&null!=(s=r(c[a])))return s;}}else if(e===mI){if(!l)return;for(h=0;h<t.length&&h<5;h++){if((d=t[h])&&null!=(s=r(d[l])))return s;}}else if(e===vI){if(!l)return;if(!(u=t[l])||S(u))return!1;for(h=0;h<u.length&&h<5;h++){if(null!=(s=r(u[h])))return s;}}else if(e===pI)for(h=0;h<t.length&&h<5;h++){var d=t[h],f=Li(d);if(!y(f))return!1;if(null!=(s=r(f[a])))return s;}return!1;}function Na(t,e){if(e){var i=e.seiresIndex,n=e.seriesId,o=e.seriesName;return null!=i&&t.componentIndex!==i||null!=n&&t.id!==n||null!=o&&t.name!==o;}}function Oa(t,e){var o=t.color&&!t.colorLayer;d(e,function(e,a){"colorLayer"===a&&o||lI.hasClass(a)||("object"==typeof e?t[a]=t[a]?n(t[a],e,!1):i(e):null==t[a]&&(t[a]=e));});}function Ea(t){t=t,this.option={},this.option[SI]=1,this._componentsMap=R({series:[]}),this._seriesIndices,this._seriesIndicesMap,Oa(t,this._theme.option),n(t,hI,!1),this.mergeOption(t);}function Ra(t,e){y(e)||(e=e?[e]:[]);var i={};return d(e,function(e){i[e]=(t.get(e)||[]).slice();}),i;}function za(t,e,i){return e.type?e.type:i?i.subType:lI.determineSubType(t,e);}function Ba(t,e){t._seriesIndicesMap=R(t._seriesIndices=f(e,function(t){return t.componentIndex;})||[]);}function Va(t,e){return e.hasOwnProperty("subType")?g(t,function(t){return t.subType===e.subType;}):t;}function Ga(t){d(II,function(e){this[e]=m(t[e],t);},this);}function Fa(){this._coordinateSystems=[];}function Wa(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption;}function Ha(t,e,i){var n,o,a=[],r=[],s=t.timeline;if(t.baseOption&&(o=t.baseOption),(s||t.options)&&(o=o||{},a=(t.options||[]).slice()),t.media){o=o||{};var l=t.media;AI(l,function(t){t&&t.option&&(t.query?r.push(t):n||(n=t));});}return o||(o=t),o.timeline||(o.timeline=s),AI([o].concat(a).concat(f(r,function(t){return t.option;})),function(t){AI(e,function(e){e(t,i);});}),{baseOption:o,timelineOptions:a,mediaDefault:n,mediaList:r};}function Za(t,e,i){var n={width:e,height:i,aspectratio:e/i},o=!0;return d(t,function(t,e){var i=e.match(kI);if(i&&i[1]&&i[2]){var a=i[1],r=i[2].toLowerCase();Ua(n[r],t,a)||(o=!1);}}),o;}function Ua(t,e,i){return"min"===i?t>=e:"max"===i?t<=e:t===e;}function Xa(t,e){return t.join(",")===e.join(",");}function ja(t,e){AI(e=e||{},function(e,i){if(null!=e){var n=t[i];if(lI.hasClass(i)){e=Di(e);var o=Pi(n=Di(n),e);t[i]=CI(o,function(t){return t.option&&t.exist?LI(t.exist,t.option,!0):t.exist||t.option;});}else t[i]=LI(n,e,!0);}});}function Ya(t){var e=t&&t.itemStyle;if(e)for(var i=0,o=OI.length;i<o;i++){var a=OI[i],r=e.normal,s=e.emphasis;r&&r[a]&&(t[a]=t[a]||{},t[a].normal?n(t[a].normal,r[a]):t[a].normal=r[a],r[a]=null),s&&s[a]&&(t[a]=t[a]||{},t[a].emphasis?n(t[a].emphasis,s[a]):t[a].emphasis=s[a],s[a]=null);}}function qa(t,e,i){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var n=t[e].normal,o=t[e].emphasis;n&&(i?(t[e].normal=t[e].emphasis=null,r(t[e],n)):t[e]=n),o&&(t.emphasis=t.emphasis||{},t.emphasis[e]=o);}}function Ka(t){qa(t,"itemStyle"),qa(t,"lineStyle"),qa(t,"areaStyle"),qa(t,"label"),qa(t,"labelLine"),qa(t,"upperLabel"),qa(t,"edgeLabel");}function $a(t,e){var i=NI(t)&&t[e],n=NI(i)&&i.textStyle;if(n)for(var o=0,a=Yb.length;o<a;o++){var e=Yb[o];n.hasOwnProperty(e)&&(i[e]=n[e]);}}function Ja(t){t&&(Ka(t),$a(t,"label"),t.emphasis&&$a(t.emphasis,"label"));}function Qa(t){if(NI(t)){Ya(t),Ka(t),$a(t,"label"),$a(t,"upperLabel"),$a(t,"edgeLabel"),t.emphasis&&($a(t.emphasis,"label"),$a(t.emphasis,"upperLabel"),$a(t.emphasis,"edgeLabel"));var e=t.markPoint;e&&(Ya(e),Ja(e));var i=t.markLine;i&&(Ya(i),Ja(i));var n=t.markArea;n&&Ja(n);var o=t.data;if("graph"===t.type){o=o||t.nodes;var a=t.links||t.edges;if(a&&!S(a))for(s=0;s<a.length;s++){Ja(a[s]);}d(t.categories,function(t){Ka(t);});}if(o&&!S(o))for(s=0;s<o.length;s++){Ja(o[s]);}if((e=t.markPoint)&&e.data)for(var r=e.data,s=0;s<r.length;s++){Ja(r[s]);}if((i=t.markLine)&&i.data)for(var l=i.data,s=0;s<l.length;s++){y(l[s])?(Ja(l[s][0]),Ja(l[s][1])):Ja(l[s]);}"gauge"===t.type?($a(t,"axisLabel"),$a(t,"title"),$a(t,"detail")):"treemap"===t.type?(qa(t.breadcrumb,"itemStyle"),d(t.levels,function(t){Ka(t);})):"tree"===t.type&&Ka(t.leaves);}}function tr(t){return y(t)?t:t?[t]:[];}function er(t){return(y(t)?t[0]:t)||{};}function ir(t,e){e=e.split(",");for(var i=t,n=0;n<e.length&&null!=(i=i&&i[e[n]]);n++){;}return i;}function nr(t,e,i,n){e=e.split(",");for(var o,a=t,r=0;r<e.length-1;r++){null==a[o=e[r]]&&(a[o]={}),a=a[o];}(n||null==a[e[r]])&&(a[e[r]]=i);}function or(t){d(RI,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]]);});}function ar(t){d(t,function(e,i){var n=[],o=[NaN,NaN],a=[e.stackResultDimension,e.stackedOverDimension],r=e.data,s=e.isStackedByIndex,l=r.map(a,function(a,l,u){var h=r.get(e.stackedDimension,u);if(isNaN(h))return o;var c,d;s?d=r.getRawIndex(u):c=r.get(e.stackedByDimension,u);for(var f=NaN,p=i-1;p>=0;p--){var g=t[p];if(s||(d=g.data.rawIndexOf(g.stackedByDimension,c)),d>=0){var m=g.data.getByRawIndex(g.stackResultDimension,d);if(h>=0&&m>0||h<=0&&m<0){h+=m,f=m;break;}}}return n[0]=h,n[1]=f,n;});r.hostModel.setData(l),e.data=l;});}function rr(t,e){_a.isInstance(t)||(t=_a.seriesDataToSource(t)),this._source=t;var i=this._data=t.data,n=t.sourceFormat;n===xI&&(this._offset=0,this._dimSize=e,this._data=i),a(this,GI[n===gI?n+"_"+t.seriesLayoutBy:n]);}function sr(){return this._data.length;}function lr(t){return this._data[t];}function ur(t){for(var e=0;e<t.length;e++){this._data.push(t[e]);}}function hr(t,e,i,n){return null!=i?t[i]:t;}function cr(t,e,i,n){return dr(t[n],this._dimensionInfos[e]);}function dr(t,e){var i=e&&e.type;if("ordinal"===i){var n=e&&e.ordinalMeta;return n?n.parseAndCollect(t):t;}return"time"===i&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+Yo(t)),null==t||""===t?NaN:+t;}function fr(t,e,i){if(t){var n=t.getRawDataItem(e);if(null!=n){var o,a,r=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(i);return s&&(o=s.name,a=s.index),FI[r](n,e,a,o);}}}function pr(t,e,i){if(t){var n=t.getProvider().getSource().sourceFormat;if(n===pI||n===mI){var o=t.getRawDataItem(e);return n!==pI||w(o)||(o=null),o?o[i]:void 0;}}}function gr(t){return new mr(t);}function mr(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context;}function vr(t,e,i,n,o,a){XI.reset(i,n,o,a),t._callingProgress=e,t._callingProgress({start:i,end:n,count:n-i,next:XI.next},t.context);}function yr(t,e){t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null;var i,n;!e&&t._reset&&((i=t._reset(t.context))&&i.progress&&(n=i.forceFirstProgress,i=i.progress),y(i)&&!i.length&&(i=null)),t._progress=i,t._modBy=t._modDataCount=null;var o=t._downstream;return o&&o.dirty(),n;}function xr(t){var e=t.name;Oi(t)||(t.name=_r(t)||e);}function _r(t){var e=t.getRawData(),i=[];return d(e.mapDimension("seriesName",!0),function(t){var n=e.getDimensionInfo(t);n.displayName&&i.push(n.displayName);}),i.join(" ");}function wr(t){return t.model.getRawData().count();}function br(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),Sr;}function Sr(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData);}function Mr(t,e){d(t.CHANGABLE_METHODS,function(i){t.wrapMethod(i,v(Ir,e));});}function Ir(t){var e=Tr(t);e&&e.setOutputEnd(this.count());}function Tr(t){var e=(t.ecModel||{}).scheduler,i=e&&e.getPipeline(t.uid);if(i){var n=i.currentTask;if(n){var o=n.agentStubMap;o&&(n=o.get(t.uid));}return n;}}function Ar(){this.group=new tb(),this.uid=Ro("viewChart"),this.renderTask=gr({plan:Lr,reset:kr}),this.renderTask.context={view:this};}function Dr(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var i=0;i<t.childCount();i++){Dr(t.childAt(i),e);}}function Cr(t,e,i){var n=zi(t,e);null!=n?d(Di(n),function(e){Dr(t.getItemGraphicEl(e),i);}):t.eachItemGraphicEl(function(t){Dr(t,i);});}function Lr(t){return QI(t.model);}function kr(t){var e=t.model,i=t.ecModel,n=t.api,o=t.payload,a=e.pipelineContext.progressiveRender,r=t.view,s=o&&JI(o).updateMethod,l=a?"incrementalPrepareRender":s&&r[s]?s:"render";return"render"!==l&&r[l](e,i,n,o),eT[l];}function Pr(t,e,i){function n(){h=new Date().getTime(),c=null,t.apply(r,s||[]);}var o,a,r,s,l,u=0,h=0,c=null;e=e||0;var d=function d(){o=new Date().getTime(),r=this,s=arguments;var t=l||e,d=l||i;l=null,a=o-(d?u:h)-t,clearTimeout(c),d?c=setTimeout(n,t):a>=0?n():c=setTimeout(n,-a),u=o;};return d.clear=function(){c&&(clearTimeout(c),c=null);},d.debounceNextCall=function(t){l=t;},d;}function Nr(t,e,i,n){var o=t[e];if(o){var a=o[iT]||o,r=o[oT];if(o[nT]!==i||r!==n){if(null==i||!n)return t[e]=a;(o=t[e]=Pr(a,i,"debounce"===n))[iT]=a,o[oT]=n,o[nT]=i;}return o;}}function Or(t,e){var i=t[e];i&&i[iT]&&(t[e]=i[iT]);}function Er(t,e,i,n){this.ecInstance=t,this.api=e,this.unfinished;var i=this._dataProcessorHandlers=i.slice(),n=this._visualHandlers=n.slice();this._allHandlers=i.concat(n),this._stageTaskMap=R();}function Rr(t,e,i,n,o){function a(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id));}o=o||{};var r;d(e,function(e,s){if(!o.visualType||o.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,h=l.overallTask;if(h){var c,d=h.agentStubMap;d.each(function(t){a(o,t)&&(t.dirty(),c=!0);}),c&&h.dirty(),hT(h,n);var f=t.getPerformArgs(h,o.block);d.each(function(t){t.perform(f);}),r|=h.perform(f);}else u&&u.each(function(s,l){a(o,s)&&s.dirty();var u=t.getPerformArgs(s,o.block);u.skip=!e.performRawSeries&&i.isSeriesFiltered(s.context.model),hT(s,n),r|=s.perform(u);});}}),t.unfinished|=r;}function zr(t,e,i,n,o){function a(i){var a=i.uid,s=r.get(a)||r.set(a,gr({plan:Hr,reset:Zr,count:Xr}));s.context={model:i,ecModel:n,api:o,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},jr(t,i,s);}var r=i.seriesTaskMap||(i.seriesTaskMap=R()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?n.eachRawSeries(a):s?n.eachRawSeriesByType(s,a):l&&l(n,o).each(a);var u=t._pipelineMap;r.each(function(t,e){u.get(e)||(t.dispose(),r.removeKey(e));});}function Br(t,e,i,n,o){function a(e){var i=e.uid,n=s.get(i);n||(n=s.set(i,gr({reset:Gr,onDirty:Wr})),r.dirty()),n.context={model:e,overallProgress:h,modifyOutputEnd:c},n.agent=r,n.__block=h,jr(t,e,n);}var r=i.overallTask=i.overallTask||gr({reset:Vr});r.context={ecModel:n,api:o,overallReset:e.overallReset,scheduler:t};var s=r.agentStubMap=r.agentStubMap||R(),l=e.seriesType,u=e.getTargetSeries,h=!0,c=e.modifyOutputEnd;l?n.eachRawSeriesByType(l,a):u?u(n,o).each(a):(h=!1,d(n.getSeries(),a));var f=t._pipelineMap;s.each(function(t,e){f.get(e)||(t.dispose(),r.dirty(),s.removeKey(e));});}function Vr(t){t.overallReset(t.ecModel,t.api,t.payload);}function Gr(t,e){return t.overallProgress&&Fr;}function Fr(){this.agent.dirty(),this.getDownstream().dirty();}function Wr(){this.agent&&this.agent.dirty();}function Hr(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload);}function Zr(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=Di(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?f(e,function(t,e){return Ur(e);}):cT;}function Ur(t){return function(e,i){var n=i.data,o=i.resetDefines[t];if(o&&o.dataEach)for(var a=e.start;a<e.end;a++){o.dataEach(n,a);}else o&&o.progress&&o.progress(e,n);};}function Xr(t){return t.data.count();}function jr(t,e,i){var n=e.uid,o=t._pipelineMap.get(n);!o.head&&(o.head=i),o.tail&&o.tail.pipe(i),o.tail=i,i.__idxInPipeline=o.count++,i.__pipeline=o;}function Yr(t){dT=null;try{t(fT,pT);}catch(t){}return dT;}function qr(t,e){for(var i in e.prototype){t[i]=B;}}function Kr(t){for(_(t)&&(t=new DOMParser().parseFromString(t,"text/xml")),9===t.nodeType&&(t=t.firstChild);"svg"!==t.nodeName.toLowerCase()||1!==t.nodeType;){t=t.nextSibling;}return t;}function $r(){this._defs={},this._root=null,this._isDefine=!1,this._isText=!1;}function Jr(t,e){for(var i=t.firstChild;i;){if(1===i.nodeType){var n=i.getAttribute("offset");n=n.indexOf("%")>0?parseInt(n,10)/100:n?parseFloat(n):0;var o=i.getAttribute("stop-color")||"#000000";e.addColorStop(n,o);}i=i.nextSibling;}}function Qr(t,e){t&&t.__inheritedStyle&&(e.__inheritedStyle||(e.__inheritedStyle={}),r(e.__inheritedStyle,t.__inheritedStyle));}function ts(t){for(var e=P(t).split(_T),i=[],n=0;n<e.length;n+=2){var o=parseFloat(e[n]),a=parseFloat(e[n+1]);i.push([o,a]);}return i;}function es(t,e,i,n){var o=e.__inheritedStyle||{},r="text"===e.type;if(1===t.nodeType&&(ns(t,e),a(o,os(t)),!n))for(var s in ST){if(ST.hasOwnProperty(s)){var l=t.getAttribute(s);null!=l&&(o[ST[s]]=l);}}var u=r?"textFill":"fill",h=r?"textStroke":"stroke";e.style=e.style||new ub();var c=e.style;null!=o.fill&&c.set(u,is(o.fill,i)),null!=o.stroke&&c.set(h,is(o.stroke,i)),d(["lineWidth","opacity","fillOpacity","strokeOpacity","miterLimit","fontSize"],function(t){var e="lineWidth"===t&&r?"textStrokeWidth":t;null!=o[t]&&c.set(e,parseFloat(o[t]));}),o.textBaseline&&"auto"!==o.textBaseline||(o.textBaseline="alphabetic"),"alphabetic"===o.textBaseline&&(o.textBaseline="bottom"),"start"===o.textAlign&&(o.textAlign="left"),"end"===o.textAlign&&(o.textAlign="right"),d(["lineDashOffset","lineCap","lineJoin","fontWeight","fontFamily","fontStyle","textAlign","textBaseline"],function(t){null!=o[t]&&c.set(t,o[t]);}),o.lineDash&&(e.style.lineDash=P(o.lineDash).split(_T)),c[h]&&"none"!==c[h]&&(e[h]=!0),e.__inheritedStyle=o;}function is(t,e){var i=e&&t&&t.match(MT);return i?e[P(i[1])]:t;}function ns(t,e){var i=t.getAttribute("transform");if(i){var n=null,o=[];(i=i.replace(/,/g," ")).replace(IT,function(t,e,i){o.push(e,i);});for(var a=o.length-1;a>0;a-=2){var r=o[a],s=o[a-1];switch(n=n||xt(),s){case"translate":r=P(r).split(_T),St(n,n,[parseFloat(r[0]),parseFloat(r[1]||0)]);break;case"scale":r=P(r).split(_T),It(n,n,[parseFloat(r[0]),parseFloat(r[1]||r[0])]);break;case"rotate":r=P(r).split(_T),Mt(n,n,parseFloat(r[0]));break;case"skew":r=P(r).split(_T),console.warn("Skew transform is not supported yet");break;case"matrix":r=P(r).split(_T);n[0]=parseFloat(r[0]),n[1]=parseFloat(r[1]),n[2]=parseFloat(r[2]),n[3]=parseFloat(r[3]),n[4]=parseFloat(r[4]),n[5]=parseFloat(r[5]);}}e.setLocalTransform(n);}}function os(t){var e=t.getAttribute("style"),i={};if(!e)return i;var n={};TT.lastIndex=0;for(var o;null!=(o=TT.exec(e));){n[o[1]]=o[2];}for(var a in ST){ST.hasOwnProperty(a)&&null!=n[a]&&(i[ST[a]]=n[a]);}return i;}function as(t,e,i){var n=e/t.width,o=i/t.height,a=Math.min(n,o);return{scale:[a,a],position:[-(t.x+t.width/2)*a+e/2,-(t.y+t.height/2)*a+i/2]};}function rs(t,e){return new $r().parse(t,e);}function ss(t){return function(e,i,n){e=e&&e.toLowerCase(),fw.prototype[t].call(this,e,i,n);};}function ls(){fw.call(this);}function us(t,e,n){function o(t,e){return t.__prio-e.__prio;}n=n||{},"string"==typeof e&&(e=JT[e]),this.id,this.group,this._dom=t;var a=this._zr=Ii(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=Pr(m(a.flush,a),17),(e=i(e))&&BI(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new Fa();var r=this._api=As(this);_e($T,o),_e(YT,o),this._scheduler=new Er(this,r,YT,$T),fw.call(this,this._ecEventProcessor=new Ds()),this._messageCenter=new ls(),this._initEvents(),this.resize=m(this.resize,this),this._pendingActions=[],a.animation.on("frame",this._onframe,this),vs(a,this),N(this);}function hs(t,e,i){var n,o=this._model,a=this._coordSysMgr.getCoordinateSystems();e=Vi(o,e);for(var r=0;r<a.length;r++){var s=a[r];if(s[t]&&null!=(n=s[t](o,e,i)))return n;}}function cs(t){var e=t._model,i=t._scheduler;i.restorePipelines(e),i.prepareStageTasks(),ys(t,"component",e,i),ys(t,"chart",e,i),i.plan();}function ds(t,e,i,n,o){function a(n){n&&n.__alive&&n[e]&&n[e](n.__model,r,t._api,i);}var r=t._model;if(n){var s={};s[n+"Id"]=i[n+"Id"],s[n+"Index"]=i[n+"Index"],s[n+"Name"]=i[n+"Name"];var l={mainType:n,query:s};o&&(l.subType=o);var u=i.excludeSeriesId;null!=u&&(u=R(Di(u))),r&&r.eachComponent(l,function(e){u&&null!=u.get(e.id)||a(t["series"===n?"_chartsMap":"_componentsMap"][e.__viewId]);},t);}else kT(t._componentsViews.concat(t._chartsViews),a);}function fs(t,e){var i=t._chartsMap,n=t._scheduler;e.eachSeries(function(t){n.updateStreamModes(t,i[t.__viewId]);});}function ps(t,e){var i=t.type,n=t.escapeConnect,o=XT[i],s=o.actionInfo,l=(s.update||"update").split(":"),u=l.pop();l=null!=l[0]&&OT(l[0]),this[GT]=!0;var h=[t],c=!1;t.batch&&(c=!0,h=f(t.batch,function(e){return e=r(a({},e),t),e.batch=null,e;}));var d,p=[],g="highlight"===i||"downplay"===i;kT(h,function(t){d=o.action(t,this._model,this._api),(d=d||a({},t)).type=s.event||d.type,p.push(d),g?ds(this,u,t,"series"):l&&ds(this,u,t,l.main,l.sub);},this),"none"===u||g||l||(this[FT]?(cs(this),ZT.update.call(this,t),this[FT]=!1):ZT[u].call(this,t)),d=c?{type:s.event||i,escapeConnect:n,batch:p}:p[0],this[GT]=!1,!e&&this._messageCenter.trigger(d.type,d);}function gs(t){for(var e=this._pendingActions;e.length;){var i=e.shift();ps.call(this,i,t);}}function ms(t){!t&&this.trigger("updated");}function vs(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[FT]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished");});}function ys(t,e,i,n){function o(t){var e="_ec_"+t.id+"_"+t.type,o=s[e];if(!o){var h=OT(t.type);(o=new(a?qI.getClass(h.main,h.sub):Ar.getClass(h.sub))()).init(i,u),s[e]=o,r.push(o),l.add(o.group);}t.__viewId=o.__id=e,o.__alive=!0,o.__model=t,o.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!a&&n.prepareView(o,t,i,u);}for(var a="component"===e,r=a?t._componentsViews:t._chartsViews,s=a?t._componentsMap:t._chartsMap,l=t._zr,u=t._api,h=0;h<r.length;h++){r[h].__alive=!1;}a?i.eachComponent(function(t,e){"series"!==t&&o(e);}):i.eachSeries(o);for(h=0;h<r.length;){var c=r[h];c.__alive?h++:(!a&&c.renderTask.dispose(),l.remove(c.group),c.dispose(i,u),r.splice(h,1),delete s[c.__id],c.__id=c.group.__ecComponentInfo=null);}}function xs(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette();});}function _s(t,e,i,n){ws(t,e,i,n),kT(t._chartsViews,function(t){t.__alive=!1;}),bs(t,e,i,n),kT(t._chartsViews,function(t){t.__alive||t.remove(e,i);});}function ws(t,e,i,n,o){kT(o||t._componentsViews,function(t){var o=t.__model;t.render(o,e,i,n),Ts(o,t);});}function bs(t,e,i,n,o){var a,r=t._scheduler;e.eachSeries(function(e){var i=t._chartsMap[e.__viewId];i.__alive=!0;var s=i.renderTask;r.updatePayload(s,n),o&&o.get(e.uid)&&s.dirty(),a|=s.perform(r.getPerformArgs(s)),i.group.silent=!!e.get("silent"),Ts(e,i),Is(e,i);}),r.unfinished|=a,Ms(t._zr,e),sT(t._zr.dom,e);}function Ss(t,e){kT(KT,function(i){i(t,e);});}function Ms(t,e){var i=t.storage,n=0;i.traverse(function(t){t.isGroup||n++;}),n>e.get("hoverLayerThreshold")&&!U_.node&&i.traverse(function(t){t.isGroup||(t.useHoverLayer=!0);});}function Is(t,e){var i=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==i&&t.setStyle("blend",i),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",i);});});}function Ts(t,e){var i=t.get("z"),n=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=i&&(t.z=i),null!=n&&(t.zlevel=n));});}function As(t){var e=t._coordSysMgr;return a(new Ga(t),{getCoordinateSystems:m(e.getCoordinateSystems,e),getComponentByElement:function getComponentByElement(e){for(;e;){var i=e.__ecComponentInfo;if(null!=i)return t._model.getComponent(i.mainType,i.index);e=e.parent;}}});}function Ds(){this.eventInfo;}function Cs(t){function e(t,e){for(var n=0;n<t.length;n++){t[n][i]=e;}}var i="__connectUpdateStatus";kT(jT,function(n,o){t._messageCenter.on(o,function(n){if(eA[t.group]&&0!==t[i]){if(n&&n.escapeConnect)return;var o=t.makeActionFromEvent(n),a=[];kT(tA,function(e){e!==t&&e.group===t.group&&a.push(e);}),e(a,0),kT(a,function(t){1!==t[i]&&t.dispatchAction(o);}),e(a,2);}});});}function Ls(t){eA[t]=!1;}function ks(t){return tA[Wi(t,oA)];}function Ps(t,e){JT[t]=e;}function Ns(t){qT.push(t);}function Os(t,e){Vs(YT,t,e,RT);}function Es(t,e,i){"function"==typeof e&&(i=e,e="");var n=NT(t)?t.type:[t,t={event:e}][0];t.event=(t.event||n).toLowerCase(),e=t.event,LT(WT.test(n)&&WT.test(e)),XT[n]||(XT[n]={action:i,actionInfo:t}),jT[e]=n;}function Rs(t,e){Fa.register(t,e);}function zs(t,e){Vs($T,t,e,zT,"layout");}function Bs(t,e){Vs($T,t,e,BT,"visual");}function Vs(t,e,i,n,o){(PT(e)||NT(e))&&(i=e,e=n);var a=Er.wrapStageHandler(i,o);return a.__prio=e,a.__raw=i,t.push(a),a;}function Gs(t,e){QT[t]=e;}function Fs(t){return lI.extend(t);}function Ws(t){return qI.extend(t);}function Hs(t){return YI.extend(t);}function Zs(t){return Ar.extend(t);}function Us(t){return t;}function Xs(t,e,i,n,o){this._old=t,this._new=e,this._oldKeyGetter=i||Us,this._newKeyGetter=n||Us,this.context=o;}function js(t,e,i,n,o){for(var a=0;a<t.length;a++){var r="_ec_"+o[n](t[a],a),s=e[r];null==s?(i.push(r),e[r]=a):(s.length||(e[r]=s=[s]),s.push(a));}}function Ys(t){var e={},i=e.encode={},n=R(),o=[],a=[];d(t.dimensions,function(e){var r=t.getDimensionInfo(e),s=r.coordDim;if(s){var l=i[s];i.hasOwnProperty(s)||(l=i[s]=[]),l[r.coordDimIndex]=e,r.isExtraCoord||(n.set(s,1),Ks(r.type)&&(o[0]=e)),r.defaultTooltip&&a.push(e);}sA.each(function(t,e){var n=i[e];i.hasOwnProperty(e)||(n=i[e]=[]);var o=r.otherDims[e];null!=o&&!1!==o&&(n[o]=r.name);});});var r=[],s={};n.each(function(t,e){var n=i[e];s[e]=n[0],r=r.concat(n);}),e.dataDimsOnCoord=r,e.encodeFirstDimNotExtra=s;var l=i.label;l&&l.length&&(o=l.slice());var u=i.tooltip;return u&&u.length?a=u.slice():a.length||(a=o.slice()),i.defaultedLabel=o,i.defaultedTooltip=a,e;}function qs(t){return"category"===t?"ordinal":"time"===t?"time":"float";}function Ks(t){return!("ordinal"===t||"time"===t);}function $s(t){return t._rawCount>65535?dA:pA;}function Js(t){var e=t.constructor;return e===Array?t.slice():new e(t);}function Qs(t,e){d(gA.concat(e.__wrappedMethods||[]),function(i){e.hasOwnProperty(i)&&(t[i]=e[i]);}),t.__wrappedMethods=e.__wrappedMethods,d(mA,function(n){t[n]=i(e[n]);}),t._calculationInfo=a(e._calculationInfo);}function tl(t,e,i,n,o){var a=cA[e.type],r=n-1,s=e.name,l=t[s][r];if(l&&l.length<i){for(var u=new a(Math.min(o-r*i,i)),h=0;h<l.length;h++){u[h]=l[h];}t[s][r]=u;}for(var c=n*i;c<o;c+=i){t[s].push(new a(Math.min(o-c,i)));}}function el(t){var e=t._invertedIndicesMap;d(e,function(i,n){var o=t._dimensionInfos[n].ordinalMeta;if(o){i=e[n]=new fA(o.categories.length);for(a=0;a<i.length;a++){i[a]=uA;}for(var a=0;a<t._count;a++){i[t.get(n,a)]=a;}}});}function il(t,e,i){var n;if(null!=e){var o=t._chunkSize,a=Math.floor(i/o),r=i%o,s=t.dimensions[e],l=t._storage[s][a];if(l){n=l[r];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(n=u.categories[n]);}}return n;}function nl(t){return t;}function ol(t){return t<this._count&&t>=0?this._indices[t]:-1;}function al(t,e){var i=t._idList[e];return null==i&&(i=il(t,t._idDimIdx,e)),null==i&&(i=hA+e),i;}function rl(t){return y(t)||(t=[t]),t;}function sl(t,e){var i=t.dimensions,n=new vA(f(i,t.getDimensionInfo,t),t.hostModel);Qs(n,t);for(var o=n._storage={},a=t._storage,r=0;r<i.length;r++){var s=i[r];a[s]&&(l(e,s)>=0?(o[s]=ll(a[s]),n._rawExtent[s]=ul(),n._extent[s]=null):o[s]=a[s]);}return n;}function ll(t){for(var e=new Array(t.length),i=0;i<t.length;i++){e[i]=Js(t[i]);}return e;}function ul(){return[1/0,-1/0];}function hl(t,e,n){function o(t,e,i){null!=sA.get(e)?t.otherDims[e]=i:(t.coordDim=e,t.coordDimIndex=i,h.set(e,!0));}_a.isInstance(e)||(e=_a.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var s=(n.dimsDef||[]).slice(),l=R(n.encodeDef),u=R(),h=R(),c=[],f=cl(e,t,s,n.dimCount),p=0;p<f;p++){var g=s[p]=a({},w(s[p])?s[p]:{name:s[p]}),m=g.name,v=c[p]={otherDims:{}};null!=m&&null==u.get(m)&&(v.name=v.displayName=m,u.set(m,p)),null!=g.type&&(v.type=g.type),null!=g.displayName&&(v.displayName=g.displayName);}l.each(function(t,e){if(1===(t=Di(t).slice()).length&&t[0]<0)l.set(e,!1);else{var i=l.set(e,[]);d(t,function(t,n){_(t)&&(t=u.get(t)),null!=t&&t<f&&(i[n]=t,o(c[t],e,n));});}});var y=0;d(t,function(t,e){var n,t,a,s;if(_(t))n=t,t={};else{n=t.name;var u=t.ordinalMeta;t.ordinalMeta=null,(t=i(t)).ordinalMeta=u,a=t.dimsDef,s=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null;}var h=l.get(n);if(!1!==h){if(!(h=Di(h)).length)for(var f=0;f<(a&&a.length||1);f++){for(;y<c.length&&null!=c[y].coordDim;){y++;}y<c.length&&h.push(y++);}d(h,function(e,i){var l=c[e];if(o(r(l,t),n,i),null==l.name&&a){var u=a[i];!w(u)&&(u={name:u}),l.name=l.displayName=u.name,l.defaultTooltip=u.defaultTooltip;}s&&r(l.otherDims,s);});}});var x=n.generateCoord,b=n.generateCoordCount,S=null!=b;b=x?b||1:0;for(var M=x||"value",I=0;I<f;I++){null==(v=c[I]=c[I]||{}).coordDim&&(v.coordDim=dl(M,h,S),v.coordDimIndex=0,(!x||b<=0)&&(v.isExtraCoord=!0),b--),null==v.name&&(v.name=dl(v.coordDim,u)),null==v.type&&ka(e,I,v.name)&&(v.type="ordinal");}return c;}function cl(t,e,i,n){var o=Math.max(t.dimensionsDetectCount||1,e.length,i.length,n||0);return d(e,function(t){var e=t.dimsDef;e&&(o=Math.max(o,e.length));}),o;}function dl(t,e,i){if(i||null!=e.get(t)){for(var n=0;null!=e.get(t+n);){n++;}t+=n;}return e.set(t,!0),t;}function fl(t,e,i){var n,o,a,r,s=(i=i||{}).byIndex,l=i.stackedCoordDimension,u=!(!t||!t.get("stack"));if(d(e,function(t,i){_(t)&&(e[i]=t={name:t}),u&&!t.isExtraCoord&&(s||n||!t.ordinalMeta||(n=t),o||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(o=t));}),!o||s||n||(s=!0),o){a="__\0ecstackresult",r="__\0ecstackedover",n&&(n.createInvertedIndices=!0);var h=o.coordDim,c=o.type,f=0;d(e,function(t){t.coordDim===h&&f++;}),e.push({name:a,coordDim:h,coordDimIndex:f,type:c,isExtraCoord:!0,isCalculationCoord:!0}),f++,e.push({name:r,coordDim:r,coordDimIndex:f,type:c,isExtraCoord:!0,isCalculationCoord:!0});}return{stackedDimension:o&&o.name,stackedByDimension:n&&n.name,isStackedByIndex:s,stackedOverDimension:r,stackResultDimension:a};}function pl(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension");}function gl(t,e){return pl(t,e)?t.getCalculationInfo("stackResultDimension"):e;}function ml(t,e,i){i=i||{},_a.isInstance(t)||(t=_a.seriesDataToSource(t));var n,o=e.get("coordinateSystem"),a=Fa.get(o),r=ya(e);r&&(n=f(r.coordSysDims,function(t){var e={name:t},i=r.axisMap.get(t);if(i){var n=i.get("type");e.type=qs(n);}return e;})),n||(n=a&&(a.getDimensionsInfo?a.getDimensionsInfo():a.dimensions.slice())||["x","y"]);var s,l,u=_A(t,{coordDimensions:n,generateCoord:i.generateCoord});r&&d(u,function(t,e){var i=t.coordDim,n=r.categoryAxisMap.get(i);n&&(null==s&&(s=e),t.ordinalMeta=n.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0);}),l||null==s||(u[s].otherDims.itemName=0);var h=fl(e,u),c=new vA(u,e);c.setCalculationInfo(h);var p=null!=s&&vl(t)?function(t,e,i,n){return n===s?i:this.defaultDimValueGetter(t,e,i,n);}:null;return c.hasItemOption=!1,c.initData(t,null,p),c;}function vl(t){if(t.sourceFormat===pI){var e=yl(t.data||[]);return null!=e&&!y(Li(e));}}function yl(t){for(var e=0;e<t.length&&null==t[e];){e++;}return t[e];}function xl(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments);}function _l(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map;}function wl(t){return t._map||(t._map=R(t.categories));}function bl(t){return w(t)&&null!=t.value?t.value:t+"";}function Sl(t,e,i,n){var o={},a=t[1]-t[0],r=o.interval=$o(a/e,!0);null!=i&&r<i&&(r=o.interval=i),null!=n&&r>n&&(r=o.interval=n);var s=o.intervalPrecision=Ml(r);return Tl(o.niceTickExtent=[MA(Math.ceil(t[0]/r)*r,s),MA(Math.floor(t[1]/r)*r,s)],t),o;}function Ml(t){return Ho(t)+2;}function Il(t,e,i){t[e]=Math.max(Math.min(t[e],i[1]),i[0]);}function Tl(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),Il(t,0,e),Il(t,1,e),t[0]>t[1]&&(t[0]=t[1]);}function Al(t,e,i,n){var o=[];if(!t)return o;e[0]<i[0]&&o.push(e[0]);for(var a=i[0];a<=i[1]&&(o.push(a),(a=MA(a+t,n))!==o[o.length-1]);){if(o.length>1e4)return[];}return e[1]>(o.length?o[o.length-1]:i[1])&&o.push(e[1]),o;}function Dl(t){return t.get("stack")||AA+t.seriesIndex;}function Cl(t){return t.dim+t.index;}function Ll(t){var e=[],i=t.axis;if("category"===i.type){for(var n=i.getBandWidth(),o=0;o<t.count;o++){e.push(r({bandWidth:n,axisKey:"axis0",stackId:AA+o},t));}for(var a=Nl(e),s=[],o=0;o<t.count;o++){var l=a.axis0[AA+o];l.offsetCenter=l.offset+l.width/2,s.push(l);}return s;}}function kl(t,e){var i=[];return e.eachSeriesByType(t,function(t){Rl(t)&&!zl(t)&&i.push(t);}),i;}function Pl(t){var e=[];return d(t,function(t){var i=t.getData(),n=t.coordinateSystem.getBaseAxis(),o=n.getExtent(),a="category"===n.type?n.getBandWidth():Math.abs(o[1]-o[0])/i.count(),r=Vo(t.get("barWidth"),a),s=Vo(t.get("barMaxWidth"),a),l=t.get("barGap"),u=t.get("barCategoryGap");e.push({bandWidth:a,barWidth:r,barMaxWidth:s,barGap:l,barCategoryGap:u,axisKey:Cl(n),stackId:Dl(t)});}),Nl(e);}function Nl(t){var e={};d(t,function(t,i){var n=t.axisKey,o=t.bandWidth,a=e[n]||{bandWidth:o,remainedWidth:o,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},r=a.stacks;e[n]=a;var s=t.stackId;r[s]||a.autoWidthCount++,r[s]=r[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!r[s].width&&(r[s].width=l,l=Math.min(a.remainedWidth,l),a.remainedWidth-=l);var u=t.barMaxWidth;u&&(r[s].maxWidth=u);var h=t.barGap;null!=h&&(a.gap=h);var c=t.barCategoryGap;null!=c&&(a.categoryGap=c);});var i={};return d(e,function(t,e){i[e]={};var n=t.stacks,o=t.bandWidth,a=Vo(t.categoryGap,o),r=Vo(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-a)/(l+(l-1)*r);u=Math.max(u,0),d(n,function(t,e){var i=t.maxWidth;i&&i<u&&(i=Math.min(i,s),t.width&&(i=Math.min(i,t.width)),s-=i,t.width=i,l--);}),u=(s-a)/(l+(l-1)*r),u=Math.max(u,0);var h,c=0;d(n,function(t,e){t.width||(t.width=u),h=t,c+=t.width*(1+r);}),h&&(c-=h.width*r);var f=-c/2;d(n,function(t,n){i[e][n]=i[e][n]||{offset:f,width:t.width},f+=t.width*(1+r);});}),i;}function Ol(t,e,i){if(t&&e){var n=t[Cl(e)];return null!=n&&null!=i&&(n=n[Dl(i)]),n;}}function El(t,e){var i=kl(t,e),n=Pl(i),o={};d(i,function(t){var e=t.getData(),i=t.coordinateSystem,a=i.getBaseAxis(),r=Dl(t),s=n[Cl(a)][r],l=s.offset,u=s.width,h=i.getOtherAxis(a),c=t.get("barMinHeight")||0;o[r]=o[r]||[],e.setLayout({offset:l,size:u});for(var d=e.mapDimension(h.dim),f=e.mapDimension(a.dim),p=pl(e,d),g=h.isHorizontal(),m=Bl(a,h,p),v=0,y=e.count();v<y;v++){var x=e.get(d,v),_=e.get(f,v);if(!isNaN(x)){var w=x>=0?"p":"n",b=m;p&&(o[r][_]||(o[r][_]={p:m,n:m}),b=o[r][_][w]);var S,M,I,T;if(g)S=b,M=(A=i.dataToPoint([x,_]))[1]+l,I=A[0]-m,T=u,Math.abs(I)<c&&(I=(I<0?-1:1)*c),p&&(o[r][_][w]+=I);else{var A=i.dataToPoint([_,x]);S=A[0]+l,M=b,I=u,T=A[1]-m,Math.abs(T)<c&&(T=(T<=0?-1:1)*c),p&&(o[r][_][w]+=T);}e.setItemLayout(v,{x:S,y:M,width:I,height:T});}}},this);}function Rl(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type;}function zl(t){return t.pipelineContext&&t.pipelineContext.large;}function Bl(t,e,i){var n,o,a=e.getGlobalExtent();a[0]>a[1]?(n=a[1],o=a[0]):(n=a[0],o=a[1]);var r=e.toGlobalCoord(e.dataToCoord(0));return r<n&&(r=n),r>o&&(r=o),r;}function Vl(t,e){return VA(t,BA(e));}function Gl(t,e){var i,n,o,a=t.type,r=e.getMin(),s=e.getMax(),l=null!=r,u=null!=s,h=t.getExtent();"ordinal"===a?i=e.getCategories().length:(y(n=e.get("boundaryGap"))||(n=[n||0,n||0]),"boolean"==typeof n[0]&&(n=[0,0]),n[0]=Vo(n[0],1),n[1]=Vo(n[1],1),o=h[1]-h[0]||Math.abs(h[0])),null==r&&(r="ordinal"===a?i?0:NaN:h[0]-n[0]*o),null==s&&(s="ordinal"===a?i?i-1:NaN:h[1]+n[1]*o),"dataMin"===r?r=h[0]:"function"==typeof r&&(r=r({min:h[0],max:h[1]})),"dataMax"===s?s=h[1]:"function"==typeof s&&(s=s({min:h[0],max:h[1]})),(null==r||!isFinite(r))&&(r=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(I(r)||I(s)||"ordinal"===a&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(r>0&&s>0&&!l&&(r=0),r<0&&s<0&&!u&&(s=0));var c=e.ecModel;if(c&&"time"===a){var f,p=kl("bar",c);if(d(p,function(t){f|=t.getBaseAxis()===e.axis;}),f){var g=Pl(p),m=Fl(r,s,e,g);r=m.min,s=m.max;}}return[r,s];}function Fl(t,e,i,n){var o=i.axis.getExtent(),a=o[1]-o[0],r=Ol(n,i.axis);if(void 0===r)return{min:t,max:e};var s=1/0;d(r,function(t){s=Math.min(t.offset,s);});var l=-1/0;d(r,function(t){l=Math.max(t.offset+t.width,l);}),s=Math.abs(s),l=Math.abs(l);var u=s+l,h=e-t,c=h/(1-(s+l)/a)-h;return e+=c*(l/u),t-=c*(s/u),{min:t,max:e};}function Wl(t,e){var i=Gl(t,e),n=null!=e.getMin(),o=null!=e.getMax(),a=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var r=t.type;t.setExtent(i[0],i[1]),t.niceExtent({splitNumber:a,fixMin:n,fixMax:o,minInterval:"interval"===r||"time"===r?e.get("minInterval"):null,maxInterval:"interval"===r||"time"===r?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s);}function Hl(t,e){if(e=e||t.get("type"))switch(e){case"category":return new SA(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new TA();default:return(xl.getClass(e)||TA).create(t);}}function Zl(t){var e=t.scale.getExtent(),i=e[0],n=e[1];return!(i>0&&n>0||i<0&&n<0);}function Ul(t){var e=t.getLabelModel().get("formatter"),i="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(e){return function(i){return i=t.scale.getLabel(i),e.replace("{value}",null!=i?i:"");};}(e):"function"==typeof e?function(n,o){return null!=i&&(o=n-i),e(Xl(t,n),o);}:function(e){return t.scale.getLabel(e);};}function Xl(t,e){return"category"===t.type?t.scale.getLabel(e):e;}function jl(t){var e=t.model,i=t.scale;if(e.get("axisLabel.show")&&!i.isBlank()){var n,o,a="category"===t.type,r=i.getExtent();o=a?i.count():(n=i.getTicks()).length;var s,l=t.getLabelModel(),u=Ul(t),h=1;o>40&&(h=Math.ceil(o/40));for(var c=0;c<o;c+=h){var d=u(n?n[c]:r[0]+c),f=Yl(l.getTextRect(d),l.get("rotate")||0);s?s.union(f):s=f;}return s;}}function Yl(t,e){var i=e*Math.PI/180,n=t.plain(),o=n.width,a=n.height,r=o*Math.cos(i)+a*Math.sin(i),s=o*Math.sin(i)+a*Math.cos(i);return new de(n.x,n.y,r,s);}function ql(t){var e=t.get("interval");return null==e?"auto":e;}function Kl(t){return"category"===t.type&&0===ql(t.getLabelModel());}function $l(t,e){if("image"!==this.type){var i=this.style,n=this.shape;n&&"line"===n.symbolType?i.stroke=t:this.__isEmptyBrush?(i.stroke=t,i.fill=e||"#fff"):(i.fill&&(i.fill=t),i.stroke&&(i.stroke=t)),this.dirty(!1);}}function Jl(t,e,i,n,o,a,r){var s=0===t.indexOf("empty");s&&(t=t.substr(5,1).toLowerCase()+t.substr(6));var l;return l=0===t.indexOf("image://")?jn(t.slice(8),new de(e,i,n,o),r?"center":"cover"):0===t.indexOf("path://")?Xn(t.slice(7),{},new de(e,i,n,o),r?"center":"cover"):new JA({shape:{symbolType:t,x:e,y:i,width:n,height:o}}),l.__isEmptyBrush=s,l.setColor=$l,l.setColor(a),l;}function Ql(t,e){return Math.abs(t-e)<eD;}function tu(t,e,i){var n=0,o=t[0];if(!o)return!1;for(var a=1;a<t.length;a++){var r=t[a];n+=Sn(o[0],o[1],r[0],r[1],e,i),o=r;}var s=t[0];return Ql(o[0],s[0])&&Ql(o[1],s[1])||(n+=Sn(o[0],o[1],s[0],s[1],e,i)),0!==n;}function eu(t,e,i){if(this.name=t,this.geometries=e,i)i=[i[0],i[1]];else{var n=this.getBoundingRect();i=[n.x+n.width/2,n.y+n.height/2];}this.center=i;}function iu(t){if(!t.UTF8Encoding)return t;var e=t.UTF8Scale;null==e&&(e=1024);for(var i=t.features,n=0;n<i.length;n++){for(var o=i[n].geometry,a=o.coordinates,r=o.encodeOffsets,s=0;s<a.length;s++){var l=a[s];if("Polygon"===o.type)a[s]=nu(l,r[s],e);else if("MultiPolygon"===o.type)for(var u=0;u<l.length;u++){var h=l[u];l[u]=nu(h,r[s][u],e);}}}return t.UTF8Encoding=!1,t;}function nu(t,e,i){for(var n=[],o=e[0],a=e[1],r=0;r<t.length;r+=2){var s=t.charCodeAt(r)-64,l=t.charCodeAt(r+1)-64;s=s>>1^-(1&s),l=l>>1^-(1&l),o=s+=o,a=l+=a,n.push([s/i,l/i]);}return n;}function ou(t){return"category"===t.type?ru(t):uu(t);}function au(t,e){return"category"===t.type?lu(t,e):{ticks:t.scale.getTicks()};}function ru(t){var e=t.getLabelModel(),i=su(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:i.labelCategoryInterval}:i;}function su(t,e){var i=hu(t,"labels"),n=ql(e),o=cu(i,n);if(o)return o;var a,r;return a=x(n)?vu(t,n):mu(t,r="auto"===n?fu(t):n),du(i,n,{labels:a,labelCategoryInterval:r});}function lu(t,e){var i=hu(t,"ticks"),n=ql(e),o=cu(i,n);if(o)return o;var a,r;if(e.get("show")&&!t.scale.isBlank()||(a=[]),x(n))a=vu(t,n,!0);else if("auto"===n){var s=su(t,t.getLabelModel());r=s.labelCategoryInterval,a=f(s.labels,function(t){return t.tickValue;});}else a=mu(t,r=n,!0);return du(i,n,{ticks:a,tickCategoryInterval:r});}function uu(t){var e=t.scale.getTicks(),i=Ul(t);return{labels:f(e,function(e,n){return{formattedLabel:i(e,n),rawLabel:t.scale.getLabel(e),tickValue:e};})};}function hu(t,e){return nD(t)[e]||(nD(t)[e]=[]);}function cu(t,e){for(var i=0;i<t.length;i++){if(t[i].key===e)return t[i].value;}}function du(t,e,i){return t.push({key:e,value:i}),i;}function fu(t){var e=nD(t).autoInterval;return null!=e?e:nD(t).autoInterval=t.calculateCategoryInterval();}function pu(t){var e=gu(t),i=Ul(t),n=(e.axisRotate-e.labelRotate)/180*Math.PI,o=t.scale,a=o.getExtent(),r=o.count();if(a[1]-a[0]<1)return 0;var s=1;r>40&&(s=Math.max(1,Math.floor(r/40)));for(var l=a[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),h=Math.abs(u*Math.cos(n)),c=Math.abs(u*Math.sin(n)),d=0,f=0;l<=a[1];l+=s){var p=0,g=0,m=ke(i(l),e.font,"center","top");p=1.3*m.width,g=1.3*m.height,d=Math.max(d,p,7),f=Math.max(f,g,7);}var v=d/h,y=f/c;isNaN(v)&&(v=1/0),isNaN(y)&&(y=1/0);var x=Math.max(0,Math.floor(Math.min(v,y))),_=nD(t.model),w=_.lastAutoInterval,b=_.lastTickCount;return null!=w&&null!=b&&Math.abs(w-x)<=1&&Math.abs(b-r)<=1&&w>x?x=w:(_.lastTickCount=r,_.lastAutoInterval=x),x;}function gu(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()};}function mu(t,e,i){function n(t){l.push(i?t:{formattedLabel:o(t),rawLabel:a.getLabel(t),tickValue:t});}var o=Ul(t),a=t.scale,r=a.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),h=r[0],c=a.count();0!==h&&u>1&&c/u>2&&(h=Math.round(Math.ceil(h/u)*u));var d=Kl(t),f=s.get("showMinLabel")||d,p=s.get("showMaxLabel")||d;f&&h!==r[0]&&n(r[0]);for(var g=h;g<=r[1];g+=u){n(g);}return p&&g!==r[1]&&n(r[1]),l;}function vu(t,e,i){var n=t.scale,o=Ul(t),a=[];return d(n.getTicks(),function(t){var r=n.getLabel(t);e(t,r)&&a.push(i?t:{formattedLabel:o(t),rawLabel:r,tickValue:t});}),a;}function yu(t,e){var i=(t[1]-t[0])/e/2;t[0]+=i,t[1]-=i;}function xu(t,e,i,n,o){function a(t,e){return h?t>e:t<e;}var r=e.length;if(t.onBand&&!n&&r){var s,l=t.getExtent();if(1===r)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var u=e[1].coord-e[0].coord;d(e,function(t){t.coord-=u/2;var e=e||0;e%2>0&&(t.coord-=u/(2*(e+1)));}),s={coord:e[r-1].coord+u},e.push(s);}var h=l[0]>l[1];a(e[0].coord,l[0])&&(o?e[0].coord=l[0]:e.shift()),o&&a(l[0],e[0].coord)&&e.unshift({coord:l[0]}),a(l[1],s.coord)&&(o?s.coord=l[1]:e.pop()),o&&a(s.coord,l[1])&&e.push({coord:l[1]});}}function _u(t,e){var i=t.mapDimension("defaultedLabel",!0),n=i.length;if(1===n)return fr(t,e,i[0]);if(n){for(var o=[],a=0;a<i.length;a++){var r=fr(t,e,i[a]);o.push(r);}return o.join(" ");}}function wu(t,e,i){tb.call(this),this.updateData(t,e,i);}function bu(t){return[t[0]/2,t[1]/2];}function Su(t,e){this.parent.drift(t,e);}function Mu(){!so(this)&&Tu.call(this);}function Iu(){!so(this)&&Au.call(this);}function Tu(){if(!this.incremental&&!this.useHoverLayer){var t=this.__symbolOriginalScale,e=t[1]/t[0];this.animateTo({scale:[Math.max(1.1*t[0],t[0]+3),Math.max(1.1*t[1],t[1]+3*e)]},400,"elasticOut");}}function Au(){this.incremental||this.useHoverLayer||this.animateTo({scale:this.__symbolOriginalScale},400,"elasticOut");}function Du(t){this.group=new tb(),this._symbolCtor=t||wu;}function Cu(t,e,i,n){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(n.isIgnore&&n.isIgnore(i))&&!(n.clipShape&&!n.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(i,"symbol");}function Lu(t){return null==t||w(t)||(t={isIgnore:t}),t||{};}function ku(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")};}function Pu(t,e,i){var n,o=t.getBaseAxis(),a=t.getOtherAxis(o),r=Nu(a,i),s=o.dim,l=a.dim,u=e.mapDimension(l),h=e.mapDimension(s),c="x"===l||"radius"===l?1:0,d=f(t.dimensions,function(t){return e.mapDimension(t);}),p=e.getCalculationInfo("stackResultDimension");return(n|=pl(e,d[0]))&&(d[0]=p),(n|=pl(e,d[1]))&&(d[1]=p),{dataDimsForPoint:d,valueStart:r,valueAxisDim:l,baseAxisDim:s,stacked:!!n,valueDim:u,baseDim:h,baseDataOffset:c,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")};}function Nu(t,e){var i=0,n=t.scale.getExtent();return"start"===e?i=n[0]:"end"===e?i=n[1]:n[0]>0?i=n[0]:n[1]<0&&(i=n[1]),i;}function Ou(t,e,i,n){var o=NaN;t.stacked&&(o=i.get(i.getCalculationInfo("stackedOverDimension"),n)),isNaN(o)&&(o=t.valueStart);var a=t.baseDataOffset,r=[];return r[a]=i.get(t.baseDim,n),r[1-a]=o,e.dataToPoint(r);}function Eu(t,e){var i=[];return e.diff(t).add(function(t){i.push({cmd:"+",idx:t});}).update(function(t,e){i.push({cmd:"=",idx:e,idx1:t});}).remove(function(t){i.push({cmd:"-",idx:t});}).execute(),i;}function Ru(t){return isNaN(t[0])||isNaN(t[1]);}function zu(t,e,i,n,o,a,r,s,l,u,h){return"none"!==u&&u?Bu.apply(this,arguments):Vu.apply(this,arguments);}function Bu(t,e,i,n,o,a,r,s,l,u,h){for(var c=0,d=i,f=0;f<n;f++){var p=e[d];if(d>=o||d<0)break;if(Ru(p)){if(h){d+=a;continue;}break;}if(d===i)t[a>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[c],m="y"===u?1:0,v=(p[m]-g[m])*l;_D(bD,g),bD[m]=g[m]+v,_D(SD,p),SD[m]=p[m]-v,t.bezierCurveTo(bD[0],bD[1],SD[0],SD[1],p[0],p[1]);}else t.lineTo(p[0],p[1]);c=d,d+=a;}return f;}function Vu(t,e,i,n,o,a,r,s,l,u,h){for(var c=0,d=i,f=0;f<n;f++){var p=e[d];if(d>=o||d<0)break;if(Ru(p)){if(h){d+=a;continue;}break;}if(d===i)t[a>0?"moveTo":"lineTo"](p[0],p[1]),_D(bD,p);else if(l>0){var g=d+a,m=e[g];if(h)for(;m&&Ru(e[g]);){m=e[g+=a];}var v=.5,y=e[c];if(!(m=e[g])||Ru(m))_D(SD,p);else{Ru(m)&&!h&&(m=p),U(wD,m,y);var x,_;if("x"===u||"y"===u){var w="x"===u?0:1;x=Math.abs(p[w]-y[w]),_=Math.abs(p[w]-m[w]);}else x=uw(p,y),_=uw(p,m);xD(SD,p,wD,-l*(1-(v=_/(_+x))));}vD(bD,bD,s),yD(bD,bD,r),vD(SD,SD,s),yD(SD,SD,r),t.bezierCurveTo(bD[0],bD[1],SD[0],SD[1],p[0],p[1]),xD(bD,p,wD,l*v);}else t.lineTo(p[0],p[1]);c=d,d+=a;}return f;}function Gu(t,e){var i=[1/0,1/0],n=[-1/0,-1/0];if(e)for(var o=0;o<t.length;o++){var a=t[o];a[0]<i[0]&&(i[0]=a[0]),a[1]<i[1]&&(i[1]=a[1]),a[0]>n[0]&&(n[0]=a[0]),a[1]>n[1]&&(n[1]=a[1]);}return{min:e?i:n,max:e?n:i};}function Fu(t,e){if(t.length===e.length){for(var i=0;i<t.length;i++){var n=t[i],o=e[i];if(n[0]!==o[0]||n[1]!==o[1])return;}return!0;}}function Wu(t){return"number"==typeof t?t:t?.5:0;}function Hu(t){var e=t.getGlobalExtent();if(t.onBand){var i=t.getBandWidth()/2-1,n=e[1]>e[0]?1:-1;e[0]+=n*i,e[1]-=n*i;}return e;}function Zu(t,e,i){if(!i.valueDim)return[];for(var n=[],o=0,a=e.count();o<a;o++){n.push(Ou(i,t,e,o));}return n;}function Uu(t,e,i,n){var o=Hu(t.getAxis("x")),a=Hu(t.getAxis("y")),r=t.getBaseAxis().isHorizontal(),s=Math.min(o[0],o[1]),l=Math.min(a[0],a[1]),u=Math.max(o[0],o[1])-s,h=Math.max(a[0],a[1])-l;if(i)s-=.5,u+=.5,l-=.5,h+=.5;else{var c=n.get("lineStyle.width")||2,d=n.get("clipOverflow")?c/2:Math.max(u,h);r?(l-=d,h+=2*d):(s-=d,u+=2*d);}var f=new yM({shape:{x:s,y:l,width:u,height:h}});return e&&(f.shape[r?"width":"height"]=0,To(f,{shape:{width:u,height:h}},n)),f;}function Xu(t,e,i,n){var o=t.getAngleAxis(),a=t.getRadiusAxis().getExtent().slice();a[0]>a[1]&&a.reverse();var r=o.getExtent(),s=Math.PI/180;i&&(a[0]-=.5,a[1]+=.5);var l=new hM({shape:{cx:Go(t.cx,1),cy:Go(t.cy,1),r0:Go(a[0],1),r:Go(a[1],1),startAngle:-r[0]*s,endAngle:-r[1]*s,clockwise:o.inverse}});return e&&(l.shape.endAngle=-r[0]*s,To(l,{shape:{endAngle:-r[1]*s}},n)),l;}function ju(t,e,i,n){return"polar"===t.type?Xu(t,e,i,n):Uu(t,e,i,n);}function Yu(t,e,i){for(var n=e.getBaseAxis(),o="x"===n.dim||"radius"===n.dim?0:1,a=[],r=0;r<t.length-1;r++){var s=t[r+1],l=t[r];a.push(l);var u=[];switch(i){case"end":u[o]=s[o],u[1-o]=l[1-o],a.push(u);break;case"middle":var h=(l[o]+s[o])/2,c=[];u[o]=c[o]=h,u[1-o]=l[1-o],c[1-o]=s[1-o],a.push(u),a.push(c);break;default:u[o]=l[o],u[1-o]=s[1-o],a.push(u);}}return t[r]&&a.push(t[r]),a;}function qu(t,e){var i=t.getVisual("visualMeta");if(i&&i.length&&t.count()&&"cartesian2d"===e.type){for(var n,o,a=i.length-1;a>=0;a--){var r=i[a].dimension,s=t.dimensions[r],l=t.getDimensionInfo(s);if("x"===(n=l&&l.coordDim)||"y"===n){o=i[a];break;}}if(o){var u=e.getAxis(n),h=f(o.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color};}),c=h.length,p=o.outerColors.slice();c&&h[0].coord>h[c-1].coord&&(h.reverse(),p.reverse());var g=h[0].coord-10,m=h[c-1].coord+10,v=m-g;if(v<.001)return"transparent";d(h,function(t){t.offset=(t.coord-g)/v;}),h.push({offset:c?h[c-1].offset:.5,color:p[1]||"transparent"}),h.unshift({offset:c?h[0].offset:.5,color:p[0]||"transparent"});var y=new TM(0,0,0,0,h,!0);return y[n]=g,y[n+"2"]=m,y;}}}function Ku(t,e,i){var n=t.get("showAllSymbol"),o="auto"===n;if(!n||o){var a=i.getAxesByScale("ordinal")[0];if(a&&(!o||!$u(a,e))){var r=e.mapDimension(a.dim),s={};return d(a.getViewLabels(),function(t){s[t.tickValue]=1;}),function(t){return!s.hasOwnProperty(e.get(r,t));};}}}function $u(t,e){var i=t.getExtent(),n=Math.abs(i[1]-i[0])/t.scale.count();isNaN(n)&&(n=0);for(var o=e.count(),a=Math.max(1,Math.round(o/5)),r=0;r<o;r+=a){if(1.5*wu.getSymbolSize(e,r)[t.isHorizontal()?1:0]>n)return!1;}return!0;}function Ju(t){return this._axes[t];}function Qu(t){LD.call(this,t);}function th(t,e){return e.type||(e.data?"category":"value");}function eh(t,e,i){return t.getCoordSysModel()===e;}function ih(t,e,i){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,i),this.model=t;}function nh(t,e,i,n){function o(t){return t.dim+"_"+t.index;}i.getAxesOnZeroOf=function(){return a?[a]:[];};var a,r=t[e],s=i.model,l=s.get("axisLine.onZero"),u=s.get("axisLine.onZeroAxisIndex");if(l){if(null!=u)oh(r[u])&&(a=r[u]);else for(var h in r){if(r.hasOwnProperty(h)&&oh(r[h])&&!n[o(r[h])]){a=r[h];break;}}a&&(n[o(a)]=!0);}}function oh(t){return t&&"category"!==t.type&&"time"!==t.type&&Zl(t);}function ah(t,e){var i=t.getExtent(),n=i[0]+i[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e;}:function(t){return n-t+e;},t.toLocalCoord="x"===t.dim?function(t){return t-e;}:function(t){return n-t+e;};}function rh(t,e){return f(VD,function(e){return t.getReferringComponents(e)[0];});}function sh(t){return"cartesian2d"===t.get("coordinateSystem");}function lh(t){var e={componentType:t.mainType,componentIndex:t.componentIndex};return e[t.mainType+"Index"]=t.componentIndex,e;}function uh(t,e,i,n){var o,a,r=Xo(i-t.rotation),s=n[0]>n[1],l="start"===e&&!s||"start"!==e&&s;return jo(r-GD/2)?(a=l?"bottom":"top",o="center"):jo(r-1.5*GD)?(a=l?"top":"bottom",o="center"):(a="middle",o=r<1.5*GD&&r>GD/2?l?"left":"right":l?"right":"left"),{rotation:r,textAlign:o,textVerticalAlign:a};}function hh(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show);}function ch(t,e,i){if(!Kl(t.axis)){var n=t.get("axisLabel.showMinLabel"),o=t.get("axisLabel.showMaxLabel");e=e||[],i=i||[];var a=e[0],r=e[1],s=e[e.length-1],l=e[e.length-2],u=i[0],h=i[1],c=i[i.length-1],d=i[i.length-2];!1===n?(dh(a),dh(u)):fh(a,r)&&(n?(dh(r),dh(h)):(dh(a),dh(u))),!1===o?(dh(s),dh(c)):fh(l,s)&&(o?(dh(l),dh(d)):(dh(s),dh(c)));}}function dh(t){t&&(t.ignore=!0);}function fh(t,e,i){var n=t&&t.getBoundingRect().clone(),o=e&&e.getBoundingRect().clone();if(n&&o){var a=_t([]);return Mt(a,a,-t.rotation),n.applyTransform(bt([],a,t.getLocalTransform())),o.applyTransform(bt([],a,e.getLocalTransform())),n.intersect(o);}}function ph(t){return"middle"===t||"center"===t;}function gh(t,e,i){var n=e.axis;if(e.get("axisTick.show")&&!n.scale.isBlank()){for(var o=e.getModel("axisTick"),a=o.getModel("lineStyle"),s=o.get("length"),l=n.getTicksCoords(),u=[],h=[],c=t._transform,d=[],f=0;f<l.length;f++){var p=l[f].coord;u[0]=p,u[1]=0,h[0]=p,h[1]=i.tickDirection*s,c&&(Q(u,u,c),Q(h,h,c));var g=new _M(Kn({anid:"tick_"+l[f].tickValue,shape:{x1:u[0],y1:u[1],x2:h[0],y2:h[1]},style:r(a.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(g),d.push(g);}return d;}}function mh(t,e,i){var n=e.axis;if(T(i.axisLabelShow,e.get("axisLabel.show"))&&!n.scale.isBlank()){var o=e.getModel("axisLabel"),a=o.get("margin"),r=n.getViewLabels(),s=(T(i.labelRotate,o.get("rotate"))||0)*GD/180,l=HD(i.rotation,s,i.labelDirection),u=e.getCategories(!0),h=[],c=hh(e),f=e.get("triggerEvent");return d(r,function(r,s){var d=r.tickValue,p=r.formattedLabel,g=r.rawLabel,m=o;u&&u[d]&&u[d].textStyle&&(m=new No(u[d].textStyle,o,e.ecModel));var v=m.getTextColor()||e.get("axisLine.lineStyle.color"),y=[n.dataToCoord(d),i.labelOffset+i.labelDirection*a],x=new rM({anid:"label_"+d,position:y,rotation:l.rotation,silent:c,z2:10});mo(x.style,m,{text:p,textAlign:m.getShallow("align",!0)||l.textAlign,textVerticalAlign:m.getShallow("verticalAlign",!0)||m.getShallow("baseline",!0)||l.textVerticalAlign,textFill:"function"==typeof v?v("category"===n.type?g:"value"===n.type?d+"":d,s):v}),f&&(x.eventData=lh(e),x.eventData.targetType="axisLabel",x.eventData.value=g),t._dumbGroup.add(x),x.updateTransform(),h.push(x),t.group.add(x),x.decomposeTransform();}),h;}}function vh(t,e){var i={axesInfo:{},seriesInvolved:!1,coordSysAxesInfo:{},coordSysMap:{}};return yh(i,t,e),i.seriesInvolved&&_h(i,t),i;}function yh(t,e,i){var n=e.getComponent("tooltip"),o=e.getComponent("axisPointer"),a=o.get("link",!0)||[],r=[];ZD(i.getCoordinateSystems(),function(i){function s(n,s,l){var c=l.model.getModel("axisPointer",o),d=c.get("show");if(d&&("auto"!==d||n||Th(c))){null==s&&(s=c.get("triggerTooltip"));var f=(c=n?xh(l,h,o,e,n,s):c).get("snap"),p=Ah(l.model),g=s||f||"category"===l.type,m=t.axesInfo[p]={key:p,axis:l,coordSys:i,axisPointerModel:c,triggerTooltip:s,involveSeries:g,snap:f,useHandle:Th(c),seriesModels:[]};u[p]=m,t.seriesInvolved|=g;var v=wh(a,l);if(null!=v){var y=r[v]||(r[v]={axesInfo:{}});y.axesInfo[p]=m,y.mapper=a[v].mapper,m.linkGroup=y;}}}if(i.axisPointerEnabled){var l=Ah(i.model),u=t.coordSysAxesInfo[l]={};t.coordSysMap[l]=i;var h=i.model.getModel("tooltip",n);if(ZD(i.getAxes(),UD(s,!1,null)),i.getTooltipAxes&&n&&h.get("show")){var c="axis"===h.get("trigger"),d="cross"===h.get("axisPointer.type"),f=i.getTooltipAxes(h.get("axisPointer.axis"));(c||d)&&ZD(f.baseAxes,UD(s,!d||"cross",c)),d&&ZD(f.otherAxes,UD(s,"cross",!1));}}});}function xh(t,e,n,o,a,s){var l=e.getModel("axisPointer"),u={};ZD(["type","snap","lineStyle","shadowStyle","label","animation","animationDurationUpdate","animationEasingUpdate","z"],function(t){u[t]=i(l.get(t));}),u.snap="category"!==t.type&&!!s,"cross"===l.get("type")&&(u.type="line");var h=u.label||(u.label={});if(null==h.show&&(h.show=!1),"cross"===a){var c=l.get("label.show");if(h.show=null==c||c,!s){var d=u.lineStyle=l.get("crossStyle");d&&r(h,d.textStyle);}}return t.model.getModel("axisPointer",new No(u,n,o));}function _h(t,e){e.eachSeries(function(e){var i=e.coordinateSystem,n=e.get("tooltip.trigger",!0),o=e.get("tooltip.show",!0);i&&"none"!==n&&!1!==n&&"item"!==n&&!1!==o&&!1!==e.get("axisPointer.show",!0)&&ZD(t.coordSysAxesInfo[Ah(i.model)],function(t){var n=t.axis;i.getAxis(n.dim)===n&&(t.seriesModels.push(e),null==t.seriesDataCount&&(t.seriesDataCount=0),t.seriesDataCount+=e.getData().count());});},this);}function wh(t,e){for(var i=e.model,n=e.dim,o=0;o<t.length;o++){var a=t[o]||{};if(bh(a[n+"AxisId"],i.id)||bh(a[n+"AxisIndex"],i.componentIndex)||bh(a[n+"AxisName"],i.name))return o;}}function bh(t,e){return"all"===t||y(t)&&l(t,e)>=0||t===e;}function Sh(t){var e=Mh(t);if(e){var i=e.axisPointerModel,n=e.axis.scale,o=i.option,a=i.get("status"),r=i.get("value");null!=r&&(r=n.parse(r));var s=Th(i);null==a&&(o.status=s?"show":"hide");var l=n.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==r||r>l[1])&&(r=l[1]),r<l[0]&&(r=l[0]),o.value=r,s&&(o.status=e.axis.scale.isBlank()?"hide":"show");}}function Mh(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[Ah(t)];}function Ih(t){var e=Mh(t);return e&&e.axisPointerModel;}function Th(t){return!!t.get("handle.show");}function Ah(t){return t.type+"||"+t.id;}function Dh(t,e,i,n,o,a){var r=XD.getAxisPointerClass(t.axisPointerClass);if(r){var s=Ih(e);s?(t._axisPointer||(t._axisPointer=new r())).render(e,s,n,a):Ch(t,n);}}function Ch(t,e,i){var n=t._axisPointer;n&&n.dispose(e,i),t._axisPointer=null;}function Lh(t,e,i){i=i||{};var n=t.coordinateSystem,o=e.axis,a={},r=o.getAxesOnZeroOf()[0],s=o.position,l=r?"onZero":s,u=o.dim,h=n.getRect(),c=[h.x,h.x+h.width,h.y,h.y+h.height],d={left:0,right:1,top:0,bottom:1,onZero:2},f=e.get("offset")||0,p="x"===u?[c[2]-f,c[3]+f]:[c[0]-f,c[1]+f];if(r){var g=r.toGlobalCoord(r.dataToCoord(0));p[d.onZero]=Math.max(Math.min(g,p[1]),p[0]);}a.position=["y"===u?p[d[l]]:c[0],"x"===u?p[d[l]]:c[3]],a.rotation=Math.PI/2*("x"===u?0:1);var m={top:-1,bottom:1,left:-1,right:1};a.labelDirection=a.tickDirection=a.nameDirection=m[s],a.labelOffset=r?p[d[s]]-p[d.onZero]:0,e.get("axisTick.inside")&&(a.tickDirection=-a.tickDirection),T(i.labelInside,e.get("axisLabel.inside"))&&(a.labelDirection=-a.labelDirection);var v=e.get("axisLabel.rotate");return a.labelRotate="top"===l?-v:v,a.z2=1,a;}function kh(t,e,i,n,o,a,r){go(t,e,i.getModel("label"),i.getModel("emphasis.label"),{labelFetcher:o,labelDataIndex:a,defaultText:_u(o.getData(),a),isRectText:!0,autoColor:n}),Ph(t),Ph(e);}function Ph(t,e){"outside"===t.textPosition&&(t.textPosition=e);}function Nh(t,e,i){i.style.text=null,Io(i,{shape:{width:0}},e,t,function(){i.parent&&i.parent.remove(i);});}function Oh(t,e,i){i.style.text=null,Io(i,{shape:{r:i.shape.r0}},e,t,function(){i.parent&&i.parent.remove(i);});}function Eh(t,e,i,n,o,a,s,l){var u=e.getItemVisual(i,"color"),h=e.getItemVisual(i,"opacity"),c=n.getModel("itemStyle"),d=n.getModel("emphasis.itemStyle").getBarItemStyle();l||t.setShape("r",c.get("barBorderRadius")||0),t.useStyle(r({fill:u,opacity:h},c.getBarItemStyle()));var f=n.getShallow("cursor");f&&t.attr("cursor",f);var p=s?o.height>0?"bottom":"top":o.width>0?"left":"right";l||kh(t.style,d,n,u,a,i,p),fo(t,d);}function Rh(t,e){var i=t.get(tC)||0;return Math.min(i,Math.abs(e.width),Math.abs(e.height));}function zh(t,e,i){var n=t.getData(),o=[],a=n.getLayout("valueAxisHorizontal")?1:0;o[1-a]=n.getLayout("valueAxisStart");var r=new nC({shape:{points:n.getLayout("largePoints")},incremental:!!i,__startPoint:o,__valueIdx:a});e.add(r),Bh(r,t,n);}function Bh(t,e,i){var n=i.getVisual("borderColor")||i.getVisual("color"),o=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(o),t.style.fill=null,t.style.stroke=n,t.style.lineWidth=i.getLayout("barWidth");}function Vh(t,e,i,n){var o=e.getData(),a=this.dataIndex,r=o.getName(a),s=e.get("selectedOffset");n.dispatchAction({type:"pieToggleSelect",from:t,name:r,seriesId:e.id}),o.each(function(t){Gh(o.getItemGraphicEl(t),o.getItemLayout(t),e.isSelected(o.getName(t)),s,i);});}function Gh(t,e,i,n,o){var a=(e.startAngle+e.endAngle)/2,r=Math.cos(a),s=Math.sin(a),l=i?n:0,u=[r*l,s*l];o?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u);}function Fh(t,e){function i(){a.ignore=a.hoverIgnore,r.ignore=r.hoverIgnore;}function n(){a.ignore=a.normalIgnore,r.ignore=r.normalIgnore;}tb.call(this);var o=new hM({z2:2}),a=new gM(),r=new rM();this.add(o),this.add(a),this.add(r),this.updateData(t,e,!0),this.on("emphasis",i).on("normal",n).on("mouseover",i).on("mouseout",n);}function Wh(t,e,i,n,o,a,r){function s(e,i){for(var n=e;n>=0&&(t[n].y-=i,!(n>0&&t[n].y>t[n-1].y+t[n-1].height));n--){;}}function l(t,e,i,n,o,a){for(var r=e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++){var u=Math.abs(t[s].y-n),h=t[s].len,c=t[s].len2,d=u<o+h?Math.sqrt((o+h+c)*(o+h+c)-u*u):Math.abs(t[s].x-i);e&&d>=r&&(d=r-10),!e&&d<=r&&(d=r+10),t[s].x=i+d*a,r=d;}}t.sort(function(t,e){return t.y-e.y;});for(var u,h=0,c=t.length,d=[],f=[],p=0;p<c;p++){(u=t[p].y-h)<0&&function(e,i,n,o){for(var a=e;a<i;a++){if(t[a].y+=n,a>e&&a+1<i&&t[a+1].y>t[a].y+t[a].height)return void s(a,n/2);}s(i-1,n/2);}(p,c,-u),h=t[p].y+t[p].height;}r-h<0&&s(c-1,h-r);for(p=0;p<c;p++){t[p].y>=i?f.push(t[p]):d.push(t[p]);}l(d,!1,e,i,n,o),l(f,!0,e,i,n,o);}function Hh(t,e,i,n,o,a){for(var r=[],s=[],l=0;l<t.length;l++){Zh(t[l])||(t[l].x<e?r.push(t[l]):s.push(t[l]));}Wh(s,e,i,n,1,o,a),Wh(r,e,i,n,-1,o,a);for(l=0;l<t.length;l++){if(!Zh(t[l])){var u=t[l].linePoints;if(u){var h=u[1][0]-u[2][0];t[l].x<e?u[2][0]=t[l].x+3:u[2][0]=t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+h;}}}}function Zh(t){return"center"===t.position;}function Uh(){this.group=new tb();}function Xh(t,e,i){aD.call(this,t,e,i),this.type="value",this.angle=0,this.name="",this.model;}function jh(t,e,i){this._model=t,this.dimensions=[],this._indicatorAxes=f(t.getIndicatorModels(),function(t,e){var i="indicator_"+e,n=new Xh(i,new TA());return n.name=t.get("name"),n.model=t,t.axis=n,this.dimensions.push(i),n;},this),this.resize(t,i),this.cx,this.cy,this.r,this.r0,this.startAngle;}function Yh(t,e){return r({show:e},t);}function qh(t){return y(t)||(t=[+t,+t]),t;}function Kh(t){for(var e,i=0;i<t.length;i++){var n=t[i].getBoundingRect();(e=e||n.clone()).union(n);}return e;}function $h(t,e){var i,n,o=t.svgXML;try{k(null!=(n=(i=o&&rs(o,{ignoreViewBox:!0,ignoreRootClip:!0})||{}).root));}catch(t){throw new Error("Invalid svg format\n"+t.message);}var a=i.width,r=i.height,s=i.viewBoxRect;if(e||(e=null==a||null==r?n.getBoundingRect():new de(0,0,0,0),null!=a&&(e.width=a),null!=r&&(e.height=r)),s){var l=as(s,e.width,e.height),u=n;(n=new tb()).add(u),u.scale=l.scale,u.position=l.position;}return n.setClipPath(new yM({shape:e.plain()})),{root:n,boundingRect:e};}function Jh(t){return function(e,i){var n=[];return d(Qh(e),function(o){var a=NC[o.type][t];a&&n.push(a(e,o,i));}),n;};}function Qh(t){return DT.retrieveMap(t)||[];}function tc(t,e,i){nc(t)[e]=i;}function ec(t,e,i){var n=nc(t);n[e]===i&&(n[e]=null);}function ic(t,e){return!!nc(t)[e];}function nc(t){return t[EC]||(t[EC]={});}function oc(t){this.pointerChecker,this._zr=t,this._opt={};var e=m,n=e(ac,this),o=e(rc,this),a=e(sc,this),s=e(lc,this),l=e(uc,this);fw.call(this),this.setPointerChecker=function(t){this.pointerChecker=t;},this.enable=function(e,u){this.disable(),this._opt=r(i(u)||{},{zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!1,preventDefaultMouseMove:!0}),null==e&&(e=!0),!0!==e&&"move"!==e&&"pan"!==e||(t.on("mousedown",n),t.on("mousemove",o),t.on("mouseup",a)),!0!==e&&"scale"!==e&&"zoom"!==e||(t.on("mousewheel",s),t.on("pinch",l));},this.disable=function(){t.off("mousedown",n),t.off("mousemove",o),t.off("mouseup",a),t.off("mousewheel",s),t.off("pinch",l);},this.dispose=this.disable,this.isDragging=function(){return this._dragging;},this.isPinching=function(){return this._pinching;};}function ac(t){if(!(dt(t)||t.target&&t.target.draggable)){var e=t.offsetX,i=t.offsetY;this.pointerChecker&&this.pointerChecker(t,e,i)&&(this._x=e,this._y=i,this._dragging=!0);}}function rc(t){if(this._dragging&&dc("moveOnMouseMove",t,this._opt)&&"pinch"!==t.gestureEvent&&!ic(this._zr,"globalPan")){var e=t.offsetX,i=t.offsetY,n=this._x,o=this._y,a=e-n,r=i-o;this._x=e,this._y=i,this._opt.preventDefaultMouseMove&&mw(t.event),cc(this,"pan","moveOnMouseMove",t,{dx:a,dy:r,oldX:n,oldY:o,newX:e,newY:i});}}function sc(t){dt(t)||(this._dragging=!1);}function lc(t){var e=dc("zoomOnMouseWheel",t,this._opt),i=dc("moveOnMouseWheel",t,this._opt),n=t.wheelDelta,o=Math.abs(n),a=t.offsetX,r=t.offsetY;if(0!==n&&(e||i)){if(e){var s=o>3?1.4:o>1?1.2:1.1;hc(this,"zoom","zoomOnMouseWheel",t,{scale:n>0?s:1/s,originX:a,originY:r});}if(i){var l=Math.abs(n);hc(this,"scrollMove","moveOnMouseWheel",t,{scrollDelta:(n>0?1:-1)*(l>3?.4:l>1?.15:.05),originX:a,originY:r});}}}function uc(t){ic(this._zr,"globalPan")||hc(this,"zoom",null,t,{scale:t.pinchScale>1?1.1:1/1.1,originX:t.pinchX,originY:t.pinchY});}function hc(t,e,i,n,o){t.pointerChecker&&t.pointerChecker(n,o.originX,o.originY)&&(mw(n.event),cc(t,e,i,n,o));}function cc(t,e,i,n,o){o.isAvailableBehavior=m(dc,null,i,n),t.trigger(e,o);}function dc(t,e,i){var n=i[t];return!t||n&&(!_(n)||e.event[n+"Key"]);}function fc(t,e,i){var n=t.target,o=n.position;o[0]+=e,o[1]+=i,n.dirty();}function pc(t,e,i,n){var o=t.target,a=t.zoomLimit,r=o.position,s=o.scale,l=t.zoom=t.zoom||1;if(l*=e,a){var u=a.min||0,h=a.max||1/0;l=Math.max(Math.min(h,l),u);}var c=l/t.zoom;t.zoom=l,r[0]-=(i-r[0])*(c-1),r[1]-=(n-r[1])*(c-1),s[0]*=c,s[1]*=c,o.dirty();}function gc(t,e,i){var n=e.getComponentByElement(t.topTarget),o=n&&n.coordinateSystem;return n&&n!==i&&!RC[n.mainType]&&o&&o.model!==i;}function mc(t,e){var i=t.getItemStyle(),n=t.get("areaColor");return null!=n&&(i.fill=n),i;}function vc(t,e,i,n,o){i.off("click"),i.off("mousedown"),e.get("selectedMode")&&(i.on("mousedown",function(){t._mouseDownFlag=!0;}),i.on("click",function(a){if(t._mouseDownFlag){t._mouseDownFlag=!1;for(var r=a.target;!r.__regions;){r=r.parent;}if(r){var s={type:("geo"===e.mainType?"geo":"map")+"ToggleSelect",batch:f(r.__regions,function(t){return{name:t.name,from:o.uid};})};s[e.mainType+"Id"]=e.id,n.dispatchAction(s),yc(e,i);}}}));}function yc(t,e){e.eachChild(function(e){d(e.__regions,function(i){e.trigger(t.isSelected(i.name)?"emphasis":"normal");});});}function xc(t,e){var i=new tb();this.uid=Ro("ec_map_draw"),this._controller=new oc(t.getZr()),this._controllerHost={target:e?i:null},this.group=i,this._updateGroup=e,this._mouseDownFlag,this._mapName,this._initialized,i.add(this._regionsGroup=new tb()),i.add(this._backgroundGroup=new tb());}function _c(t){var e=this[zC];e&&e.recordVersion===this[BC]&&wc(e,t);}function wc(t,e){var i=t.circle,n=t.labelModel,o=t.hoverLabelModel,a=t.emphasisText,r=t.normalText;e?(i.style.extendFrom(mo({},o,{text:o.get("show")?a:null},{isRectText:!0,useInsideStyle:!1},!0)),i.__mapOriginalZ2=i.z2,i.z2+=NM):(mo(i.style,n,{text:n.get("show")?r:null,textPosition:n.getShallow("position")||"bottom"},{isRectText:!0,useInsideStyle:!1}),i.dirty(!1),null!=i.__mapOriginalZ2&&(i.z2=i.__mapOriginalZ2,i.__mapOriginalZ2=null));}function bc(t,e,i){var n=t.getZoom(),o=t.getCenter(),a=e.zoom,r=t.dataToPoint(o);if(null!=e.dx&&null!=e.dy){r[0]-=e.dx,r[1]-=e.dy;o=t.pointToData(r);t.setCenter(o);}if(null!=a){if(i){var s=i.min||0,l=i.max||1/0;a=Math.max(Math.min(n*a,l),s)/n;}t.scale[0]*=a,t.scale[1]*=a;var u=t.position,h=(e.originX-u[0])*(a-1),c=(e.originY-u[1])*(a-1);u[0]-=h,u[1]-=c,t.updateTransform();o=t.pointToData(r);t.setCenter(o),t.setZoom(a*n);}return{center:t.getCenter(),zoom:t.getZoom()};}function Sc(){Tw.call(this);}function Mc(t){this.name=t,this.zoomLimit,Tw.call(this),this._roamTransformable=new Sc(),this._rawTransformable=new Sc(),this._center,this._zoom;}function Ic(t,e,i,n){var o=i.seriesModel,a=o?o.coordinateSystem:null;return a===this?a[t](n):null;}function Tc(t,e,i,n){Mc.call(this,t),this.map=e;var o=OC.load(e,i);this._nameCoordMap=o.nameCoordMap,this._regionsMap=o.regionsMap,this._invertLongitute=null==n||n,this.regions=o.regions,this._rect=o.boundingRect;}function Ac(t,e,i,n){var o=i.geoModel,a=i.seriesModel,r=o?o.coordinateSystem:a?a.coordinateSystem||(a.getReferringComponents("geo")[0]||{}).coordinateSystem:null;return r===this?r[t](n):null;}function Dc(t,e){var i=t.get("boundingCoords");if(null!=i){var n=i[0],o=i[1];isNaN(n[0])||isNaN(n[1])||isNaN(o[0])||isNaN(o[1])||this.setBoundingRect(n[0],n[1],o[0]-n[0],o[1]-n[1]);}var a,r=this.getBoundingRect(),s=t.get("layoutCenter"),l=t.get("layoutSize"),u=e.getWidth(),h=e.getHeight(),c=r.width/r.height*this.aspectScale,d=!1;s&&l&&(s=[Vo(s[0],u),Vo(s[1],h)],l=Vo(l,Math.min(u,h)),isNaN(s[0])||isNaN(s[1])||isNaN(l)||(d=!0));if(d){var f={};c>1?(f.width=l,f.height=l/c):(f.height=l,f.width=l*c),f.y=s[1]-f.height/2,f.x=s[0]-f.width/2;}else(a=t.getBoxLayoutParams()).aspect=c,f=ca(a,{width:u,height:h});this.setViewRect(f.x,f.y,f.width,f.height),this.setCenter(t.get("center")),this.setZoom(t.get("zoom"));}function Cc(t,e){d(e.get("geoCoord"),function(e,i){t.addGeoCoord(i,e);});}function Lc(t,e){var i={};return d(t,function(t){t.each(t.mapDimension("value"),function(e,n){var o="ec-"+t.getName(n);i[o]=i[o]||[],isNaN(e)||i[o].push(e);});}),t[0].map(t[0].mapDimension("value"),function(n,o){for(var a="ec-"+t[0].getName(o),r=0,s=1/0,l=-1/0,u=i[a].length,h=0;h<u;h++){s=Math.min(s,i[a][h]),l=Math.max(l,i[a][h]),r+=i[a][h];}var c;return c="min"===e?s:"max"===e?l:"average"===e?r/u:r,0===u?NaN:c;});}function kc(t){var e=t.mainData,i=t.datas;i||(i={main:e},t.datasAttr={main:"data"}),t.datas=t.mainData=null,zc(e,i,t),FC(i,function(i){FC(e.TRANSFERABLE_METHODS,function(e){i.wrapMethod(e,v(Pc,t));});}),e.wrapMethod("cloneShallow",v(Oc,t)),FC(e.CHANGABLE_METHODS,function(i){e.wrapMethod(i,v(Nc,t));}),k(i[e.dataType]===e);}function Pc(t,e){if(Rc(this)){var i=a({},this[WC]);i[this.dataType]=e,zc(e,i,t);}else Bc(e,this.dataType,this[HC],t);return e;}function Nc(t,e){return t.struct&&t.struct.update(this),e;}function Oc(t,e){return FC(e[WC],function(i,n){i!==e&&Bc(i.cloneShallow(),n,e,t);}),e;}function Ec(t){var e=this[HC];return null==t||null==e?e:e[WC][t];}function Rc(t){return t[HC]===t;}function zc(t,e,i){t[WC]={},FC(e,function(e,n){Bc(e,n,t,i);});}function Bc(t,e,i,n){i[WC][e]=t,t[HC]=i,t.dataType=e,n.struct&&(t[n.structAttr]=n.struct,n.struct[n.datasAttr[e]]=t),t.getLinkedData=Ec;}function Vc(t,e,i){this.root,this.data,this._nodes=[],this.hostModel=t,this.levelModels=f(e||[],function(e){return new No(e,t,t.ecModel);}),this.leavesModel=new No(i||{},t,t.ecModel);}function Gc(t,e){var i=e.children;t.parentNode!==e&&(i.push(t),t.parentNode=e);}function Fc(t){t.hierNode={defaultAncestor:null,ancestor:t,prelim:0,modifier:0,change:0,shift:0,i:0,thread:null};for(var e,i,n=[t];e=n.pop();){if(i=e.children,e.isExpand&&i.length)for(var o=i.length-1;o>=0;o--){var a=i[o];a.hierNode={defaultAncestor:null,ancestor:a,prelim:0,modifier:0,change:0,shift:0,i:o,thread:null},n.push(a);}}}function Wc(t,e){var i=t.isExpand?t.children:[],n=t.parentNode.children,o=t.hierNode.i?n[t.hierNode.i-1]:null;if(i.length){jc(t);var a=(i[0].hierNode.prelim+i[i.length-1].hierNode.prelim)/2;o?(t.hierNode.prelim=o.hierNode.prelim+e(t,o),t.hierNode.modifier=t.hierNode.prelim-a):t.hierNode.prelim=a;}else o&&(t.hierNode.prelim=o.hierNode.prelim+e(t,o));t.parentNode.hierNode.defaultAncestor=Yc(t,o,t.parentNode.hierNode.defaultAncestor||n[0],e);}function Hc(t){var e=t.hierNode.prelim+t.parentNode.hierNode.modifier;t.setLayout({x:e},!0),t.hierNode.modifier+=t.parentNode.hierNode.modifier;}function Zc(t){return arguments.length?t:Qc;}function Uc(t,e){var i={};return t-=Math.PI/2,i.x=e*Math.cos(t),i.y=e*Math.sin(t),i;}function Xc(t,e){return ca(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});}function jc(t){for(var e=t.children,i=e.length,n=0,o=0;--i>=0;){var a=e[i];a.hierNode.prelim+=n,a.hierNode.modifier+=n,o+=a.hierNode.change,n+=a.hierNode.shift+o;}}function Yc(t,e,i,n){if(e){for(var o=t,a=t,r=a.parentNode.children[0],s=e,l=o.hierNode.modifier,u=a.hierNode.modifier,h=r.hierNode.modifier,c=s.hierNode.modifier;s=qc(s),a=Kc(a),s&&a;){o=qc(o),r=Kc(r),o.hierNode.ancestor=t;var d=s.hierNode.prelim+c-a.hierNode.prelim-u+n(s,a);d>0&&(Jc($c(s,t,i),t,d),u+=d,l+=d),c+=s.hierNode.modifier,u+=a.hierNode.modifier,l+=o.hierNode.modifier,h+=r.hierNode.modifier;}s&&!qc(o)&&(o.hierNode.thread=s,o.hierNode.modifier+=c-l),a&&!Kc(r)&&(r.hierNode.thread=a,r.hierNode.modifier+=u-h,i=t);}return i;}function qc(t){var e=t.children;return e.length&&t.isExpand?e[e.length-1]:t.hierNode.thread;}function Kc(t){var e=t.children;return e.length&&t.isExpand?e[0]:t.hierNode.thread;}function $c(t,e,i){return t.hierNode.ancestor.parentNode===e.parentNode?t.hierNode.ancestor:i;}function Jc(t,e,i){var n=i/(e.hierNode.i-t.hierNode.i);e.hierNode.change-=n,e.hierNode.shift+=i,e.hierNode.modifier+=i,e.hierNode.prelim+=i,t.hierNode.change+=n;}function Qc(t,e){return t.parentNode===e.parentNode?1:2;}function td(t,e){var i=t.getItemLayout(e);return i&&!isNaN(i.x)&&!isNaN(i.y)&&"none"!==t.getItemVisual(e,"symbol");}function ed(t,e,i){return i.itemModel=e,i.itemStyle=e.getModel("itemStyle").getItemStyle(),i.hoverItemStyle=e.getModel("emphasis.itemStyle").getItemStyle(),i.lineStyle=e.getModel("lineStyle").getLineStyle(),i.labelModel=e.getModel("label"),i.hoverLabelModel=e.getModel("emphasis.label"),!1===t.isExpand&&0!==t.children.length?i.symbolInnerColor=i.itemStyle.fill:i.symbolInnerColor="#fff",i;}function id(t,e,i,n,o,a){var s=!i,l=t.tree.getNodeByDataIndex(e),a=ed(l,l.getModel(),a),u=t.tree.root,h=l.parentNode===u?l:l.parentNode||l,c=t.getItemGraphicEl(h.dataIndex),d=h.getLayout(),f=c?{x:c.position[0],y:c.position[1],rawX:c.__radialOldRawX,rawY:c.__radialOldRawY}:d,p=l.getLayout();s?(i=new wu(t,e,a)).attr("position",[f.x,f.y]):i.updateData(t,e,a),i.__radialOldRawX=i.__radialRawX,i.__radialOldRawY=i.__radialRawY,i.__radialRawX=p.rawX,i.__radialRawY=p.rawY,n.add(i),t.setItemGraphicEl(e,i),Io(i,{position:[p.x,p.y]},o);var g=i.getSymbolPath();if("radial"===a.layout){var m,v,y=u.children[0],x=y.getLayout(),_=y.children.length;if(p.x===x.x&&!0===l.isExpand){var w={};w.x=(y.children[0].getLayout().x+y.children[_-1].getLayout().x)/2,w.y=(y.children[0].getLayout().y+y.children[_-1].getLayout().y)/2,(m=Math.atan2(w.y-x.y,w.x-x.x))<0&&(m=2*Math.PI+m),(v=w.x<x.x)&&(m-=Math.PI);}else(m=Math.atan2(p.y-x.y,p.x-x.x))<0&&(m=2*Math.PI+m),0===l.children.length||0!==l.children.length&&!1===l.isExpand?(v=p.x<x.x)&&(m-=Math.PI):(v=p.x>x.x)||(m-=Math.PI);var b=v?"left":"right";g.setStyle({textPosition:b,textRotation:-m,textOrigin:"center",verticalAlign:"middle"});}if(l.parentNode&&l.parentNode!==u){var S=i.__edge;S||(S=i.__edge=new bM({shape:od(a,f,f),style:r({opacity:0,strokeNoScale:!0},a.lineStyle)})),Io(S,{shape:od(a,d,p),style:{opacity:1}},o),n.add(S);}}function nd(t,e,i,n,o,a){for(var r,s=t.tree.getNodeByDataIndex(e),l=t.tree.root,a=ed(s,s.getModel(),a),u=s.parentNode===l?s:s.parentNode||s;null==(r=u.getLayout());){u=u.parentNode===l?u:u.parentNode||u;}Io(i,{position:[r.x+1,r.y+1]},o,function(){n.remove(i),t.setItemGraphicEl(e,null);}),i.fadeOut(null,{keepLabel:!0});var h=i.__edge;h&&Io(h,{shape:od(a,r,r),style:{opacity:0}},o,function(){n.remove(h);});}function od(t,e,i){var n,o,a,r,s,l,u,h,c=t.orient;if("radial"===t.layout){s=e.rawX,u=e.rawY,l=i.rawX,h=i.rawY;var d=Uc(s,u),f=Uc(s,u+(h-u)*t.curvature),p=Uc(l,h+(u-h)*t.curvature),g=Uc(l,h);return{x1:d.x,y1:d.y,x2:g.x,y2:g.y,cpx1:f.x,cpy1:f.y,cpx2:p.x,cpy2:p.y};}return s=e.x,u=e.y,l=i.x,h=i.y,"LR"!==c&&"RL"!==c||(n=s+(l-s)*t.curvature,o=u,a=l+(s-l)*t.curvature,r=h),"TB"!==c&&"BT"!==c||(n=s,o=u+(h-u)*t.curvature,a=l,r=h+(u-h)*t.curvature),{x1:s,y1:u,x2:l,y2:h,cpx1:n,cpy1:o,cpx2:a,cpy2:r};}function ad(t,e,i){for(var n,o=[t],a=[];n=o.pop();){if(a.push(n),n.isExpand){var r=n.children;if(r.length)for(var s=0;s<r.length;s++){o.push(r[s]);}}}for(;n=a.pop();){e(n,i);}}function rd(t,e){for(var i,n=[t];i=n.pop();){if(e(i),i.isExpand){var o=i.children;if(o.length)for(var a=o.length-1;a>=0;a--){n.push(o[a]);}}}}function sd(t,e){var i=Xc(t,e);t.layoutInfo=i;var n=t.get("layout"),o=0,a=0,r=null;"radial"===n?(o=2*Math.PI,a=Math.min(i.height,i.width)/2,r=Zc(function(t,e){return(t.parentNode===e.parentNode?1:2)/t.depth;})):(o=i.width,a=i.height,r=Zc());var s=t.getData().tree.root,l=s.children[0];if(l){Fc(s),ad(l,Wc,r),s.hierNode.modifier=-l.hierNode.prelim,rd(l,Hc);var u=l,h=l,c=l;rd(l,function(t){var e=t.getLayout().x;e<u.getLayout().x&&(u=t),e>h.getLayout().x&&(h=t),t.depth>c.depth&&(c=t);});var d=u===h?1:r(u,h)/2,f=d-u.getLayout().x,p=0,g=0,m=0,v=0;if("radial"===n)p=o/(h.getLayout().x+d+f),g=a/(c.depth-1||1),rd(l,function(t){m=(t.getLayout().x+f)*p,v=(t.depth-1)*g;var e=Uc(m,v);t.setLayout({x:e.x,y:e.y,rawX:m,rawY:v},!0);});else{var y=t.getOrient();"RL"===y||"LR"===y?(g=a/(h.getLayout().x+d+f),p=o/(c.depth-1||1),rd(l,function(t){v=(t.getLayout().x+f)*g,m="LR"===y?(t.depth-1)*p:o-(t.depth-1)*p,t.setLayout({x:m,y:v},!0);})):"TB"!==y&&"BT"!==y||(p=o/(h.getLayout().x+d+f),g=a/(c.depth-1||1),rd(l,function(t){m=(t.getLayout().x+f)*p,v="TB"===y?(t.depth-1)*g:a-(t.depth-1)*g,t.setLayout({x:m,y:v},!0);}));}}}function ld(t,e,i){if(t&&l(e,t.type)>=0){var n=i.getData().tree.root,o=t.targetNode;if("string"==typeof o&&(o=n.getNodeById(o)),o&&n.contains(o))return{node:o};var a=t.targetNodeId;if(null!=a&&(o=n.getNodeById(a)))return{node:o};}}function ud(t){for(var e=[];t;){(t=t.parentNode)&&e.push(t);}return e.reverse();}function hd(t,e){return l(ud(t),e)>=0;}function cd(t,e){for(var i=[];t;){var n=t.dataIndex;i.push({name:t.name,dataIndex:n,value:e.getRawValue(n)}),t=t.parentNode;}return i.reverse(),i;}function dd(t){var e=0;d(t.children,function(t){dd(t);var i=t.value;y(i)&&(i=i[0]),e+=i;});var i=t.value;y(i)&&(i=i[0]),(null==i||isNaN(i))&&(i=e),i<0&&(i=0),y(t.value)?t.value[0]=i:t.value=i;}function fd(t,e){var i=e.get("color");if(i){var n;return d(t=t||[],function(t){var e=new No(t),i=e.get("color");(e.get("itemStyle.color")||i&&"none"!==i)&&(n=!0);}),n||((t[0]||(t[0]={})).color=i.slice()),t;}}function pd(t){this.group=new tb(),t.add(this.group);}function gd(t,e,i,n,o,a){var r=[[o?t:t-UC,e],[t+i,e],[t+i,e+n],[o?t:t-UC,e+n]];return!a&&r.splice(2,0,[t+i+UC,e+n/2]),!o&&r.push([t,e+n/2]),r;}function md(t,e,i){t.eventData={componentType:"series",componentSubType:"treemap",componentIndex:e.componentIndex,seriesIndex:e.componentIndex,seriesName:e.name,seriesType:"treemap",selfType:"breadcrumb",nodeData:{dataIndex:i&&i.dataIndex,name:i&&i.name},treePathInfo:i&&cd(i,e)};}function vd(){var t,e=[],i={};return{add:function add(t,n,o,a,r){return _(a)&&(r=a,a=0),!i[t.id]&&(i[t.id]=1,e.push({el:t,target:n,time:o,delay:a,easing:r}),!0);},done:function done(e){return t=e,this;},start:function start(){for(var n=e.length,o=0,a=e.length;o<a;o++){var r=e[o];r.el.animateTo(r.target,r.time,r.delay,r.easing,function(){--n||(e.length=0,i={},t&&t());});}return this;}};}function yd(t,e,n,o,r,s,l,u,h,c){function d(t,e){w?!t.invisible&&s.push(t):(e(),t.__tmWillVisible||(t.invisible=!1));}function f(e,n,o,a,r,s){var u=l.getModel(),h=T(t.getFormattedLabel(l.dataIndex,"normal",null,null,s?"upperLabel":"label"),u.get("name"));if(!s&&v.isLeafRoot){var c=t.get("drillDownIcon",!0);h=c?c+" "+h:h;}var d=u.getModel(s?JC:KC),f=u.getModel(s?QC:$C),p=d.getShallow("show");go(e,n,d,f,{defaultText:p?h:null,autoColor:o,isRectText:!0}),s&&(e.textRect=i(s)),e.truncate=p&&d.get("ellipsis")?{outerWidth:a,outerHeight:r,minChar:2}:null;}function p(t,i,o,a){var s=null!=S&&n[t][S],l=r[t];return s?(n[t][S]=null,g(l,s,t)):w||((s=new i({z:xd(o,a)})).__tmDepth=o,s.__tmStorageName=t,m(l,s,t)),e[t][b]=s;}function g(t,e,i){(t[b]={}).old="nodeGroup"===i?e.position.slice():a({},e.shape);}function m(t,e,i){var n=t[b]={},a=l.parentNode;if(a&&(!o||"drillDown"===o.direction)){var s=0,u=0,h=r.background[a.getRawIndex()];!o&&h&&h.old&&(s=h.old.width,u=h.old.height),n.old="nodeGroup"===i?[0,u]:{x:s,y:u,width:0,height:0};}n.fadein="nodeGroup"!==i;}if(l){var v=l.getLayout();if(v&&v.isInView){var y=v.width,x=v.height,_=v.borderWidth,w=v.invisible,b=l.getRawIndex(),S=u&&u.getRawIndex(),M=l.viewChildren,I=v.upperHeight,A=M&&M.length,D=l.getModel("itemStyle"),C=l.getModel("emphasis.itemStyle"),L=p("nodeGroup",jC);if(L){if(h.add(L),L.attr("position",[v.x||0,v.y||0]),L.__tmNodeWidth=y,L.__tmNodeHeight=x,v.isAboveViewRoot)return L;var k=p("background",YC,c,eL);if(k&&function(e,i,n){i.dataIndex=l.dataIndex,i.seriesIndex=t.seriesIndex,i.setShape({x:0,y:0,width:y,height:x});var o=l.getVisual("borderColor",!0),a=C.get("borderColor");d(i,function(){var t=oL(D);t.fill=o;var e=nL(C);if(e.fill=a,n){var r=y-2*_;f(t,e,o,r,I,{x:_,y:0,width:r,height:I});}else t.text=e.text=null;i.setStyle(t),fo(i,e);}),e.add(i);}(L,k,A&&v.upperHeight),!A){var P=p("content",YC,c,iL);P&&function(e,i){i.dataIndex=l.dataIndex,i.seriesIndex=t.seriesIndex;var n=Math.max(y-2*_,0),o=Math.max(x-2*_,0);i.culling=!0,i.setShape({x:_,y:_,width:n,height:o});var a=l.getVisual("color",!0);d(i,function(){var t=oL(D);t.fill=a;var e=nL(C);f(t,e,a,n,o),i.setStyle(t),fo(i,e);}),e.add(i);}(L,P);}return L;}}}}function xd(t,e){var i=t*tL+e;return(i-1)/i;}function _d(t){var e=t.pieceList;t.hasSpecialVisual=!1,d(e,function(e,i){e.originIndex=i,null!=e.visual&&(t.hasSpecialVisual=!0);});}function wd(t){var e=t.categories,i=t.visual,n=t.categoryMap={};if(sL(e,function(t,e){n[t]=e;}),!y(i)){var o=[];w(i)?sL(i,function(t,e){var i=n[e];o[null!=i?i:uL]=t;}):o[uL]=i,i=Ld(t,o);}for(var a=e.length-1;a>=0;a--){null==i[a]&&(delete n[e[a]],e.pop());}}function bd(t,e){var i=t.visual,n=[];w(i)?sL(i,function(t){n.push(t);}):null!=i&&n.push(i);var o={color:1,symbol:1};e||1!==n.length||o.hasOwnProperty(t.type)||(n[1]=n[0]),Ld(t,n);}function Sd(t){return{applyVisual:function applyVisual(e,i,n){e=this.mapValueToVisual(e),n("color",t(i("color"),e));},_doMap:Dd([0,1])};}function Md(t){var e=this.option.visual;return e[Math.round(Bo(t,[0,1],[0,e.length-1],!0))]||{};}function Id(t){return function(e,i,n){n(t,this.mapValueToVisual(e));};}function Td(t){var e=this.option.visual;return e[this.option.loop&&t!==uL?t%e.length:t];}function Ad(){return this.option.visual[0];}function Dd(t){return{linear:function linear(e){return Bo(e,t,this.option.visual,!0);},category:Td,piecewise:function piecewise(e,i){var n=Cd.call(this,i);return null==n&&(n=Bo(e,t,this.option.visual,!0)),n;},fixed:Ad};}function Cd(t){var e=this.option,i=e.pieceList;if(e.hasSpecialVisual){var n=i[hL.findPieceIndex(t,i)];if(n&&n.visual)return n.visual[this.type];}}function Ld(t,e){return t.visual=e,"color"===t.type&&(t.parsedVisual=f(e,function(t){return Gt(t);})),e;}function kd(t,e,i){return t?e<=i:e<i;}function Pd(t,e,i,n,o,a){var r=t.getModel(),s=t.getLayout();if(s&&!s.invisible&&s.isInView){var l,u=t.getModel(pL),h=Nd(u,e,i[t.depth],n),c=u.get("borderColor"),f=u.get("borderColorSaturation");null!=f&&(c=Ed(f,l=Od(h))),t.setVisual("borderColor",c);var p=t.viewChildren;if(p&&p.length){var g=zd(t,r,s,u,h,p);d(p,function(t,e){(t.depth>=o.length||t===o[t.depth])&&Pd(t,Vd(r,h,t,e,g,a),i,n,o,a);});}else l=Od(h),t.setVisual("color",l);}}function Nd(t,e,i,n){var o=a({},e);return d(["color","colorAlpha","colorSaturation"],function(a){var r=t.get(a,!0);null==r&&i&&(r=i[a]),null==r&&(r=e[a]),null==r&&(r=n.get(a)),null!=r&&(o[a]=r);}),o;}function Od(t){var e=Rd(t,"color");if(e){var i=Rd(t,"colorAlpha"),n=Rd(t,"colorSaturation");return n&&(e=jt(e,null,null,n)),i&&(e=Yt(e,i)),e;}}function Ed(t,e){return null!=e?jt(e,null,null,t):null;}function Rd(t,e){var i=t[e];if(null!=i&&"none"!==i)return i;}function zd(t,e,i,n,o,a){if(a&&a.length){var r=Bd(e,"color")||null!=o.color&&"none"!==o.color&&(Bd(e,"colorAlpha")||Bd(e,"colorSaturation"));if(r){var s=e.get("visualMin"),l=e.get("visualMax"),u=i.dataExtent.slice();null!=s&&s<u[0]&&(u[0]=s),null!=l&&l>u[1]&&(u[1]=l);var h=e.get("colorMappingBy"),c={type:r.name,dataExtent:u,visual:r.range};"color"!==c.type||"index"!==h&&"id"!==h?c.mappingMethod="linear":(c.mappingMethod="category",c.loop=!0);var d=new hL(c);return d.__drColorMappingBy=h,d;}}}function Bd(t,e){var i=t.get(e);return fL(i)&&i.length?{name:e,range:i}:null;}function Vd(t,e,i,n,o,r){var s=a({},e);if(o){var l=o.type,u="color"===l&&o.__drColorMappingBy,h="index"===u?n:"id"===u?r.mapIdToIndex(i.getId()):i.getValue(t.get("visualDimension"));s[l]=o.mapValueToVisual(h);}return s;}function Gd(t,e,i,n){var o,a;if(!t.isRemoved()){var r=t.getLayout();o=r.width,a=r.height;var s=(f=t.getModel()).get(_L),l=f.get(wL)/2,u=Kd(f),h=Math.max(s,u),c=s-l,d=h-l,f=t.getModel();t.setLayout({borderWidth:s,upperHeight:h,upperLabelHeight:u},!0);var p=(o=mL(o-2*c,0))*(a=mL(a-c-d,0)),g=Fd(t,f,p,e,i,n);if(g.length){var m={x:c,y:d,width:o,height:a},v=vL(o,a),y=1/0,x=[];x.area=0;for(var _=0,w=g.length;_<w;){var b=g[_];x.push(b),x.area+=b.getLayout().area;var S=Ud(x,v,e.squareRatio);S<=y?(_++,y=S):(x.area-=x.pop().getLayout().area,Xd(x,v,m,l,!1),v=vL(m.width,m.height),x.length=x.area=0,y=1/0);}if(x.length&&Xd(x,v,m,l,!0),!i){var M=f.get("childrenVisibleMin");null!=M&&p<M&&(i=!0);}for(var _=0,w=g.length;_<w;_++){Gd(g[_],e,i,n+1);}}}}function Fd(t,e,i,n,o,a){var r=t.children||[],s=n.sort;"asc"!==s&&"desc"!==s&&(s=null);var l=null!=n.leafDepth&&n.leafDepth<=a;if(o&&!l)return t.viewChildren=[];Hd(r=g(r,function(t){return!t.isRemoved();}),s);var u=Zd(e,r,s);if(0===u.sum)return t.viewChildren=[];if(u.sum=Wd(e,i,u.sum,s,r),0===u.sum)return t.viewChildren=[];for(var h=0,c=r.length;h<c;h++){var d=r[h].getValue()/u.sum*i;r[h].setLayout({area:d});}return l&&(r.length&&t.setLayout({isLeafRoot:!0},!0),r.length=0),t.viewChildren=r,t.setLayout({dataExtent:u.dataExtent},!0),r;}function Wd(t,e,i,n,o){if(!n)return i;for(var a=t.get("visibleMin"),r=o.length,s=r,l=r-1;l>=0;l--){var u=o["asc"===n?r-l-1:l].getValue();u/i*e<a&&(s=l,i-=u);}return"asc"===n?o.splice(0,r-s):o.splice(s,r-s),i;}function Hd(t,e){return e&&t.sort(function(t,i){var n="asc"===e?t.getValue()-i.getValue():i.getValue()-t.getValue();return 0===n?"asc"===e?t.dataIndex-i.dataIndex:i.dataIndex-t.dataIndex:n;}),t;}function Zd(t,e,i){for(var n=0,o=0,a=e.length;o<a;o++){n+=e[o].getValue();}var r=t.get("visualDimension");if(e&&e.length){if("value"===r&&i)s=[e[e.length-1].getValue(),e[0].getValue()],"asc"===i&&s.reverse();else{var s=[1/0,-1/0];xL(e,function(t){var e=t.getValue(r);e<s[0]&&(s[0]=e),e>s[1]&&(s[1]=e);});}}else s=[NaN,NaN];return{sum:n,dataExtent:s};}function Ud(t,e,i){for(var n,o=0,a=1/0,r=0,s=t.length;r<s;r++){(n=t[r].getLayout().area)&&(n<a&&(a=n),n>o&&(o=n));}var l=t.area*t.area,u=e*e*i;return l?mL(u*o/l,l/(u*a)):1/0;}function Xd(t,e,i,n,o){var a=e===i.width?0:1,r=1-a,s=["x","y"],l=["width","height"],u=i[s[a]],h=e?t.area/e:0;(o||h>i[l[r]])&&(h=i[l[r]]);for(var c=0,d=t.length;c<d;c++){var f=t[c],p={},g=h?f.getLayout().area/h:0,m=p[l[r]]=mL(h-2*n,0),v=i[s[a]]+i[l[a]]-u,y=c===d-1||v<g?v:g,x=p[l[a]]=mL(y-2*n,0);p[s[r]]=i[s[r]]+vL(n,m/2),p[s[a]]=u+vL(n,x/2),u+=y,f.setLayout(p,!0);}i[s[r]]+=h,i[l[r]]-=h;}function jd(t,e,i,n,o){var a=(e||{}).node,r=[n,o];if(!a||a===i)return r;for(var s,l=n*o,u=l*t.option.zoomToNodeRatio;s=a.parentNode;){for(var h=0,c=s.children,d=0,f=c.length;d<f;d++){h+=c[d].getValue();}var p=a.getValue();if(0===p)return r;u*=h/p;var g=s.getModel(),m=g.get(_L);(u+=4*m*m+(3*m+Math.max(m,Kd(g)))*Math.pow(u,.5))>XM&&(u=XM),a=s;}u<l&&(u=l);var v=Math.pow(u/l,.5);return[n*v,o*v];}function Yd(t,e,i){if(e)return{x:e.x,y:e.y};var n={x:0,y:0};if(!i)return n;var o=i.node,a=o.getLayout();if(!a)return n;for(var r=[a.width/2,a.height/2],s=o;s;){var l=s.getLayout();r[0]+=l.x,r[1]+=l.y,s=s.parentNode;}return{x:t.width/2-r[0],y:t.height/2-r[1]};}function qd(t,e,i,n,o){var a=t.getLayout(),r=i[o],s=r&&r===t;if(!(r&&!s||o===i.length&&t!==n)){t.setLayout({isInView:!0,invisible:!s&&!e.intersect(a),isAboveViewRoot:s},!0);var l=new de(e.x-a.x,e.y-a.y,e.width,e.height);xL(t.viewChildren||[],function(t){qd(t,l,i,n,o+1);});}}function Kd(t){return t.get(bL)?t.get(SL):0;}function $d(t){return"_EC_"+t;}function Jd(t,e){this.id=null==t?"":t,this.inEdges=[],this.outEdges=[],this.edges=[],this.hostGraph,this.dataIndex=null==e?-1:e;}function Qd(t,e,i){this.node1=t,this.node2=e,this.dataIndex=null==i?-1:i;}function tf(t){return isNaN(+t.cpx1)||isNaN(+t.cpy1);}function ef(t){return"_"+t+"Type";}function nf(t,e,i){var n=e.getItemVisual(i,"color"),o=e.getItemVisual(i,t),a=e.getItemVisual(i,t+"Size");if(o&&"none"!==o){y(a)||(a=[a,a]);var r=Jl(o,-a[0]/2,-a[1]/2,a[0],a[1],n);return r.name=t,r;}}function of(t){var e=new PL({name:"line"});return af(e.shape,t),e;}function af(t,e){var i=e[0],n=e[1],o=e[2];t.x1=i[0],t.y1=i[1],t.x2=n[0],t.y2=n[1],t.percent=1,o?(t.cpx1=o[0],t.cpy1=o[1]):(t.cpx1=NaN,t.cpy1=NaN);}function rf(t,e,i){tb.call(this),this._createLine(t,e,i);}function sf(t){this._ctor=t||rf,this.group=new tb();}function lf(t,e,i,n){if(df(e.getItemLayout(i))){var o=new t._ctor(e,i,n);e.setItemGraphicEl(i,o),t.group.add(o);}}function uf(t,e,i,n,o,a){var r=e.getItemGraphicEl(n);df(i.getItemLayout(o))?(r?r.updateData(i,o,a):r=new t._ctor(i,o,a),i.setItemGraphicEl(o,r),t.group.add(r)):t.group.remove(r);}function hf(t){var e=t.hostModel;return{lineStyle:e.getModel("lineStyle").getLineStyle(),hoverLineStyle:e.getModel("emphasis.lineStyle").getLineStyle(),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label")};}function cf(t){return isNaN(t[0])||isNaN(t[1]);}function df(t){return!cf(t[0])&&!cf(t[1]);}function ff(t,e,i){for(var n,o=t[0],a=t[1],r=t[2],s=1/0,l=i*i,u=.1,h=.1;h<=.9;h+=.1){RL[0]=VL(o[0],a[0],r[0],h),RL[1]=VL(o[1],a[1],r[1],h),(f=FL(GL(RL,e)-l))<s&&(s=f,n=h);}for(var c=0;c<32;c++){var d=n+u;zL[0]=VL(o[0],a[0],r[0],n),zL[1]=VL(o[1],a[1],r[1],n),BL[0]=VL(o[0],a[0],r[0],d),BL[1]=VL(o[1],a[1],r[1],d);var f=GL(zL,e)-l;if(FL(f)<.01)break;var p=GL(BL,e)-l;u/=2,f<0?p>=0?n+=u:n-=u:p>=0?n-=u:n+=u;}return n;}function pf(t,e){return t.getVisual("opacity")||t.getModel().get(e);}function gf(t,e,i){var n=t.getGraphicEl(),o=pf(t,e);null!=i&&(null==o&&(o=1),o*=i),n.downplay&&n.downplay(),n.traverse(function(t){if("group"!==t.type){var e=t.lineLabelOriginalOpacity;null!=e&&null==i||(e=o),t.setStyle("opacity",e);}});}function mf(t,e){var i=pf(t,e),n=t.getGraphicEl();n.highlight&&n.highlight(),n.traverse(function(t){"group"!==t.type&&t.setStyle("opacity",i);});}function vf(t){return t instanceof Array||(t=[t,t]),t;}function yf(t){var e=t.coordinateSystem;if(!e||"view"===e.type){var i=t.getGraph();i.eachNode(function(t){var e=t.getModel();t.setLayout([+e.get("x"),+e.get("y")]);}),xf(i);}}function xf(t){t.eachEdge(function(t){var e=t.getModel().get("lineStyle.curveness")||0,i=F(t.node1.getLayout()),n=F(t.node2.getLayout()),o=[i,n];+e&&o.push([(i[0]+n[0])/2-(i[1]-n[1])*e,(i[1]+n[1])/2-(n[0]-i[0])*e]),t.setLayout(o);});}function _f(t){var e=t.coordinateSystem;if(!e||"view"===e.type){var i=e.getBoundingRect(),n=t.getData(),o=n.graph,a=0,r=n.getSum("value"),s=2*Math.PI/(r||n.count()),l=i.width/2+i.x,u=i.height/2+i.y,h=Math.min(i.width,i.height)/2;o.eachNode(function(t){var e=t.getValue("value");a+=s*(r?e:1)/2,t.setLayout([h*Math.cos(a)+l,h*Math.sin(a)+u]),a+=s*(r?e:1)/2;}),n.setLayout({cx:l,cy:u}),o.eachEdge(function(t){var e,i=t.getModel().get("lineStyle.curveness")||0,n=F(t.node1.getLayout()),o=F(t.node2.getLayout()),a=(n[0]+o[0])/2,r=(n[1]+o[1])/2;+i&&(e=[l*(i*=3)+a*(1-i),u*i+r*(1-i)]),t.setLayout([n,o,e]);});}}function wf(t,e,i){for(var n=i.rect,o=n.width,a=n.height,r=[n.x+o/2,n.y+a/2],s=null==i.gravity?.1:i.gravity,l=0;l<t.length;l++){var u=t[l];u.p||(u.p=V(o*(Math.random()-.5)+r[0],a*(Math.random()-.5)+r[1])),u.pp=F(u.p),u.edges=null;}var h=.6;return{warmUp:function warmUp(){h=.5;},setFixed:function setFixed(e){t[e].fixed=!0;},setUnfixed:function setUnfixed(e){t[e].fixed=!1;},step:function step(i){for(var n=[],o=t.length,a=0;a<e.length;a++){var l=e[a],u=l.n1;U(n,(p=l.n2).p,u.p);var c=X(n)-l.d,d=p.w/(u.w+p.w);isNaN(d)&&(d=0),q(n,n),!u.fixed&&XL(u.p,u.p,n,d*c*h),!p.fixed&&XL(p.p,p.p,n,-(1-d)*c*h);}for(a=0;a<o;a++){(v=t[a]).fixed||(U(n,r,v.p),XL(v.p,v.p,n,s*h));}for(a=0;a<o;a++){for(var u=t[a],f=a+1;f<o;f++){var p=t[f];U(n,p.p,u.p),0===(c=X(n))&&(W(n,Math.random()-.5,Math.random()-.5),c=1);var g=(u.rep+p.rep)/c/c;!u.fixed&&XL(u.pp,u.pp,n,g),!p.fixed&&XL(p.pp,p.pp,n,-g);}}for(var m=[],a=0;a<o;a++){var v=t[a];v.fixed||(U(m,v.p,v.pp),XL(v.p,v.p,m,h),G(v.pp,v.p));}h*=.992,i&&i(t,e,h<.01);}};}function bf(t,e,i){var n=t.getBoxLayoutParams();return n.aspect=i,ca(n,{width:e.getWidth(),height:e.getHeight()});}function Sf(t,e){var i=t.get("center"),n=e.getWidth(),o=e.getHeight(),a=Math.min(n,o);return{cx:Vo(i[0],e.getWidth()),cy:Vo(i[1],e.getHeight()),r:Vo(t.get("radius"),a/2)};}function Mf(t,e){return e&&("string"==typeof e?t=e.replace("{value}",null!=t?t:""):"function"==typeof e&&(t=e(t))),t;}function If(t,e){function i(){a.ignore=a.hoverIgnore,r.ignore=r.hoverIgnore;}function n(){a.ignore=a.normalIgnore,r.ignore=r.normalIgnore;}tb.call(this);var o=new pM(),a=new gM(),r=new rM();this.add(o),this.add(a),this.add(r),this.updateData(t,e,!0),this.on("emphasis",i).on("normal",n).on("mouseover",i).on("mouseout",n);}function Tf(t,e){return ca(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});}function Af(t,e){for(var i=t.mapDimension("value"),n=t.mapArray(i,function(t){return t;}),o=[],a="ascending"===e,r=0,s=t.count();r<s;r++){o[r]=r;}return"function"==typeof e?o.sort(e):"none"!==e&&o.sort(function(t,e){return a?n[t]-n[e]:n[e]-n[t];}),o;}function Df(t){t.each(function(e){var i,n,o,a,r=t.getItemModel(e),s=r.getModel("label").get("position"),l=r.getModel("labelLine"),u=t.getItemLayout(e),h=u.points,c="inner"===s||"inside"===s||"center"===s;if(c)i="center",a=[[n=(h[0][0]+h[1][0]+h[2][0]+h[3][0])/4,o=(h[0][1]+h[1][1]+h[2][1]+h[3][1])/4],[n,o]];else{var d,f,p,g=l.get("length");"left"===s?(d=(h[3][0]+h[0][0])/2,f=(h[3][1]+h[0][1])/2,n=(p=d-g)-5,i="right"):(d=(h[1][0]+h[2][0])/2,f=(h[1][1]+h[2][1])/2,n=(p=d+g)+5,i="left");var m=f;a=[[d,f],[p,m]],o=m;}u.label={linePoints:a,x:n,y:o,verticalAlign:"middle",textAlign:i,inside:c};});}function Cf(t){if(!t.parallel){var e=!1;d(t.series,function(t){t&&"parallel"===t.type&&(e=!0);}),e&&(t.parallel=[{}]);}}function Lf(t){d(Di(t.parallelAxis),function(e){if(w(e)){var i=e.parallelIndex||0,o=Di(t.parallel)[i];o&&o.parallelAxisDefault&&n(e,o.parallelAxisDefault,!1);}});}function kf(t,e){var i=t[e]-t[1-e];return{span:Math.abs(i),sign:i>0?-1:i<0?1:e?-1:1};}function Pf(t,e){return Math.min(e[1],Math.max(e[0],t));}function Nf(t,e,i){this._axesMap=R(),this._axesLayout={},this.dimensions=t.dimensions,this._rect,this._model=t,this._init(t,e,i);}function Of(t,e){return ek(ik(t,e[0]),e[1]);}function Ef(t,e){var i=e.layoutLength/(e.axisCount-1);return{position:i*t,axisNameAvailableWidth:i,axisLabelShow:!0};}function Rf(t,e){var i,n,o=e.layoutLength,a=e.axisExpandWidth,r=e.axisCount,s=e.axisCollapseWidth,l=e.winInnerIndices,u=s,h=!1;return t<l[0]?(i=t*s,n=s):t<=l[1]?(i=e.axisExpandWindow0Pos+t*a-e.axisExpandWindow[0],u=a,h=!0):(i=o-(r-1-t)*s,n=s),{position:i,axisNameAvailableWidth:u,axisLabelShow:h,nameTruncateMaxWidth:n};}function zf(t){fw.call(this),this._zr=t,this.group=new tb(),this._brushType,this._brushOption,this._panels,this._track=[],this._dragging,this._covers=[],this._creatingCover,this._creatingPanel,this._enableGlobalPan,this._uid="brushController_"+bk++,this._handlers={},hk(Sk,function(t,e){this._handlers[e]=m(t,this);},this);}function Bf(t,e){var o=t._zr;t._enableGlobalPan||tc(o,yk,t._uid),hk(t._handlers,function(t,e){o.on(e,t);}),t._brushType=e.brushType,t._brushOption=n(i(wk),e,!0);}function Vf(t){var e=t._zr;ec(e,yk,t._uid),hk(t._handlers,function(t,i){e.off(i,t);}),t._brushType=t._brushOption=null;}function Gf(t,e){var i=Mk[e.brushType].createCover(t,e);return i.__brushOption=e,Hf(i,e),t.group.add(i),i;}function Ff(t,e){var i=Uf(e);return i.endCreating&&(i.endCreating(t,e),Hf(e,e.__brushOption)),e;}function Wf(t,e){var i=e.__brushOption;Uf(e).updateCoverShape(t,e,i.range,i);}function Hf(t,e){var i=e.z;null==i&&(i=gk),t.traverse(function(t){t.z=i,t.z2=i;});}function Zf(t,e){Uf(e).updateCommon(t,e),Wf(t,e);}function Uf(t){return Mk[t.__brushOption.brushType];}function Xf(t,e,i){var n=t._panels;if(!n)return!0;var o,a=t._transform;return hk(n,function(t){t.isTargetByCursor(e,i,a)&&(o=t);}),o;}function jf(t,e){var i=t._panels;if(!i)return!0;var n=e.__brushOption.panelId;return null==n||i[n];}function Yf(t){var e=t._covers,i=e.length;return hk(e,function(e){t.group.remove(e);},t),e.length=0,!!i;}function qf(t,e){var n=ck(t._covers,function(t){var e=t.__brushOption,n=i(e.range);return{brushType:e.brushType,panelId:e.panelId,range:n};});t.trigger("brush",n,{isEnd:!!e.isEnd,removeOnClick:!!e.removeOnClick});}function Kf(t){var e=t._track;if(!e.length)return!1;var i=e[e.length-1],n=e[0],o=i[0]-n[0],a=i[1]-n[1];return pk(o*o+a*a,.5)>mk;}function $f(t){var e=t.length-1;return e<0&&(e=0),[t[0],t[e]];}function Jf(t,e,i,n){var o=new tb();return o.add(new yM({name:"main",style:ip(i),silent:!0,draggable:!0,cursor:"move",drift:uk(t,e,o,"nswe"),ondragend:uk(qf,e,{isEnd:!0})})),hk(n,function(i){o.add(new yM({name:i,style:{opacity:0},draggable:!0,silent:!0,invisible:!0,drift:uk(t,e,o,i),ondragend:uk(qf,e,{isEnd:!0})}));}),o;}function Qf(t,e,i,n){var o=n.brushStyle.lineWidth||0,a=fk(o,vk),r=i[0][0],s=i[1][0],l=r-o/2,u=s-o/2,h=i[0][1],c=i[1][1],d=h-a+o/2,f=c-a+o/2,p=h-r,g=c-s,m=p+o,v=g+o;ep(t,e,"main",r,s,p,g),n.transformable&&(ep(t,e,"w",l,u,a,v),ep(t,e,"e",d,u,a,v),ep(t,e,"n",l,u,m,a),ep(t,e,"s",l,f,m,a),ep(t,e,"nw",l,u,a,a),ep(t,e,"ne",d,u,a,a),ep(t,e,"sw",l,f,a,a),ep(t,e,"se",d,f,a,a));}function tp(t,e){var i=e.__brushOption,n=i.transformable,o=e.childAt(0);o.useStyle(ip(i)),o.attr({silent:!n,cursor:n?"move":"default"}),hk(["w","e","n","s","se","sw","ne","nw"],function(i){var o=e.childOfName(i),a=ap(t,i);o&&o.attr({silent:!n,invisible:!n,cursor:n?_k[a]+"-resize":null});});}function ep(t,e,i,n,o,a,r){var s=e.childOfName(i);s&&s.setShape(hp(up(t,e,[[n,o],[n+a,o+r]])));}function ip(t){return r({strokeNoScale:!0},t.brushStyle);}function np(t,e,i,n){var o=[dk(t,i),dk(e,n)],a=[fk(t,i),fk(e,n)];return[[o[0],a[0]],[o[1],a[1]]];}function op(t){return Ao(t.group);}function ap(t,e){if(e.length>1)return("e"===(n=[ap(t,(e=e.split(""))[0]),ap(t,e[1])])[0]||"w"===n[0])&&n.reverse(),n.join("");var i={left:"w",right:"e",top:"n",bottom:"s"},n=Co({w:"left",e:"right",n:"top",s:"bottom"}[e],op(t));return i[n];}function rp(t,e,i,n,o,a,r,s){var l=n.__brushOption,u=t(l.range),h=lp(i,a,r);hk(o.split(""),function(t){var e=xk[t];u[e[0]][e[1]]+=h[e[0]];}),l.range=e(np(u[0][0],u[1][0],u[0][1],u[1][1])),Zf(i,n),qf(i,{isEnd:!1});}function sp(t,e,i,n,o){var a=e.__brushOption.range,r=lp(t,i,n);hk(a,function(t){t[0]+=r[0],t[1]+=r[1];}),Zf(t,e),qf(t,{isEnd:!1});}function lp(t,e,i){var n=t.group,o=n.transformCoordToLocal(e,i),a=n.transformCoordToLocal(0,0);return[o[0]-a[0],o[1]-a[1]];}function up(t,e,n){var o=jf(t,e);return o&&!0!==o?o.clipPath(n,t._transform):i(n);}function hp(t){var e=dk(t[0][0],t[1][0]),i=dk(t[0][1],t[1][1]);return{x:e,y:i,width:fk(t[0][0],t[1][0])-e,height:fk(t[0][1],t[1][1])-i};}function cp(t,e,i){if(t._brushType){var n=t._zr,o=t._covers,a=Xf(t,e,i);if(!t._dragging)for(var r=0;r<o.length;r++){var s=o[r].__brushOption;if(a&&(!0===a||s.panelId===a.panelId)&&Mk[s.brushType].contain(o[r],i[0],i[1]))return;}a&&n.setCursorStyle("crosshair");}}function dp(t){var e=t.event;e.preventDefault&&e.preventDefault();}function fp(t,e,i){return t.childOfName("main").contain(e,i);}function pp(t,e,n,o){var a,r=t._creatingCover,s=t._creatingPanel,l=t._brushOption;if(t._track.push(n.slice()),Kf(t)||r){if(s&&!r){"single"===l.brushMode&&Yf(t);var u=i(l);u.brushType=gp(u.brushType,s),u.panelId=!0===s?null:s.panelId,r=t._creatingCover=Gf(t,u),t._covers.push(r);}if(r){var h=Mk[gp(t._brushType,s)];r.__brushOption.range=h.getCreatingRange(up(t,r,t._track)),o&&(Ff(t,r),h.updateCommon(t,r)),Wf(t,r),a={isEnd:o};}}else o&&"single"===l.brushMode&&l.removeOnClick&&Xf(t,e,n)&&Yf(t)&&(a={isEnd:o,removeOnClick:!0});return a;}function gp(t,e){return"auto"===t?e.defaultBrushType:t;}function mp(t){if(this._dragging){dp(t);var e=pp(this,t,this.group.transformCoordToLocal(t.offsetX,t.offsetY),!0);this._dragging=!1,this._track=[],this._creatingCover=null,e&&qf(this,e);}}function vp(t){return{createCover:function createCover(e,i){return Jf(uk(rp,function(e){var i=[e,[0,100]];return t&&i.reverse(),i;},function(e){return e[t];}),e,i,[["w","e"],["n","s"]][t]);},getCreatingRange:function getCreatingRange(e){var i=$f(e);return[dk(i[0][t],i[1][t]),fk(i[0][t],i[1][t])];},updateCoverShape:function updateCoverShape(e,i,n,o){var a,r=jf(e,i);if(!0!==r&&r.getLinearBrushOtherExtent)a=r.getLinearBrushOtherExtent(t,e._transform);else{var s=e._zr;a=[0,[s.getWidth(),s.getHeight()][1-t]];}var l=[n,a];t&&l.reverse(),Qf(e,i,l,o);},updateCommon:tp,contain:fp};}function yp(t){return t=wp(t),function(e,i){return ko(e,t);};}function xp(t,e){return t=wp(t),function(i){var n=null!=e?e:i,o=n?t.width:t.height,a=n?t.x:t.y;return[a,a+(o||0)];};}function _p(t,e,i){return t=wp(t),function(n,o,a){return t.contain(o[0],o[1])&&!gc(n,e,i);};}function wp(t){return de.create(t);}function bp(t,e,i){return i&&"axisAreaSelect"===i.type&&e.findComponents({mainType:"parallelAxis",query:i})[0]===t;}function Sp(t){var e=t.axis;return f(t.activeIntervals,function(t){return{brushType:"lineX",panelId:"pl",range:[e.dataToCoord(t[0],!0),e.dataToCoord(t[1],!0)]};});}function Mp(t,e){return e.getComponent("parallel",t.get("parallelIndex"));}function Ip(t,e){var i=t._model;return i.get("axisExpandable")&&i.get("axisExpandTriggerOn")===e;}function Tp(t,e){if(!t.encodeDefine){var i=e.ecModel.getComponent("parallel",e.get("parallelIndex"));if(i){var n=t.encodeDefine=R();d(i.dimensions,function(t){var e=Ap(t);n.set(t,e);});}}}function Ap(t){return+t.replace("dim","");}function Dp(t,e,i){var n=t.model,o=t.getRect(),a=new yM({shape:{x:o.x,y:o.y,width:o.width,height:o.height}}),r="horizontal"===n.get("layout")?"width":"height";return a.setShape(r,0),To(a,{shape:{width:o.width,height:o.height}},e,i),a;}function Cp(t,e,i,n){for(var o=[],a=0;a<i.length;a++){var r=i[a],s=t.get(t.mapDimension(r),e);Np(s,n.getAxis(r).type)||o.push(n.dataToPoint(s,r));}return o;}function Lp(t,e,i,n,o){var a=Cp(t,i,n,o),r=new gM({shape:{points:a},silent:!0,z2:10});return e.add(r),t.setItemGraphicEl(i,r),r;}function kp(t){var e=t.get("smooth",!0);return!0===e&&(e=Dk),{lineStyle:t.getModel("lineStyle").getLineStyle(),smooth:null!=e?e:Dk};}function Pp(t,e,i,n){var o=n.lineStyle;e.hasItemOption&&(o=e.getItemModel(i).getModel("lineStyle").getLineStyle()),t.useStyle(o);var a=t.style;a.fill=null,a.stroke=e.getItemVisual(i,"color"),a.opacity=e.getItemVisual(i,"opacity"),n.smooth&&(t.shape.smooth=n.smooth);}function Np(t,e){return"category"===e?null==t:null==t||isNaN(t);}function Op(t,e){return t.getVisual("opacity")||t.getModel().get(e);}function Ep(t,e,i){var n=t.getGraphicEl(),o=Op(t,e);null!=i&&(null==o&&(o=1),o*=i),n.downplay&&n.downplay(),n.traverse(function(t){"group"!==t.type&&t.setStyle("opacity",o);});}function Rp(t,e){var i=Op(t,e),n=t.getGraphicEl();n.highlight&&n.highlight(),n.traverse(function(t){"group"!==t.type&&t.setStyle("opacity",i);});}function zp(t,e,i){var n=new yM({shape:{x:t.x-10,y:t.y-10,width:0,height:t.height+20}});return To(n,{shape:{width:t.width+20,height:t.height+20}},e,i),n;}function Bp(t,e){return ca(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});}function Vp(t,e,i,n,o,a,r,s){Fp(t,e,i,o,a,s),Zp(t,e,a,o,n,r,s),eg(t,s);}function Gp(t){d(t,function(t){var e=Qp(t.outEdges,Jp),i=Qp(t.inEdges,Jp),n=Math.max(e,i);t.setLayout({value:n},!0);});}function Fp(t,e,i,n,o,a){for(var r=[],s=[],l=[],u=[],h=0,c=0;c<e.length;c++){r[c]=1;}for(c=0;c<t.length;c++){s[c]=t[c].inEdges.length,0===s[c]&&l.push(t[c]);}for(;l.length;){for(var d=0;d<l.length;d++){var f=l[d];"vertical"===a?(f.setLayout({y:h},!0),f.setLayout({dy:i},!0)):(f.setLayout({x:h},!0),f.setLayout({dx:i},!0));for(var p=0;p<f.outEdges.length;p++){var g=f.outEdges[p];r[e.indexOf(g)]=0;var m=g.node2;0==--s[t.indexOf(m)]&&u.push(m);}}++h,l=u,u=[];}for(c=0;c<r.length;c++){;}Wp(t,h,a),Hp(t,"vertical"===a?(o-i)/(h-1):(n-i)/(h-1),a);}function Wp(t,e,i){d(t,function(t){t.outEdges.length||("vertical"===i?t.setLayout({y:e-1},!0):t.setLayout({x:e-1},!0));});}function Hp(t,e,i){d(t,function(t){if("vertical"===i){var n=t.getLayout().y*e;t.setLayout({y:n},!0);}else{var o=t.getLayout().x*e;t.setLayout({x:o},!0);}});}function Zp(t,e,i,n,o,a,r){var s=Up(t,r);Xp(t,s,e,i,n,o,r),jp(s,o,i,n,r);for(var l=1;a>0;a--){Yp(s,l*=.99,r),jp(s,o,i,n,r),tg(s,l,r),jp(s,o,i,n,r);}}function Up(t,e){var i=[],n="vertical"===e?"y":"x",o=Zi(t,function(t){return t.getLayout()[n];});return o.keys.sort(function(t,e){return t-e;}),d(o.keys,function(t){i.push(o.buckets.get(t));}),i;}function Xp(t,e,i,n,o,a,r){var s=[];d(e,function(t){var e=t.length,i=0,l=0;d(t,function(t){i+=t.getLayout().value;}),l="vertical"===r?(o-(e-1)*a)/i:(n-(e-1)*a)/i,s.push(l);}),s.sort(function(t,e){return t-e;});var l=s[0];d(e,function(t){d(t,function(t,e){var i=t.getLayout().value*l;"vertical"===r?(t.setLayout({x:e},!0),t.setLayout({dx:i},!0)):(t.setLayout({y:e},!0),t.setLayout({dy:i},!0));});}),d(i,function(t){var e=+t.getValue()*l;t.setLayout({dy:e},!0);});}function jp(t,e,i,n,o){d(t,function(t){var a,r,s,l=0,u=t.length;if("vertical"===o){var h;for(t.sort(function(t,e){return t.getLayout().x-e.getLayout().x;}),s=0;s<u;s++){(r=l-(a=t[s]).getLayout().x)>0&&(h=a.getLayout().x+r,a.setLayout({x:h},!0)),l=a.getLayout().x+a.getLayout().dx+e;}if((r=l-e-n)>0)for(h=a.getLayout().x-r,a.setLayout({x:h},!0),l=h,s=u-2;s>=0;--s){(r=(a=t[s]).getLayout().x+a.getLayout().dx+e-l)>0&&(h=a.getLayout().x-r,a.setLayout({x:h},!0)),l=a.getLayout().x;}}else{var c;for(t.sort(function(t,e){return t.getLayout().y-e.getLayout().y;}),s=0;s<u;s++){(r=l-(a=t[s]).getLayout().y)>0&&(c=a.getLayout().y+r,a.setLayout({y:c},!0)),l=a.getLayout().y+a.getLayout().dy+e;}if((r=l-e-i)>0)for(c=a.getLayout().y-r,a.setLayout({y:c},!0),l=c,s=u-2;s>=0;--s){(r=(a=t[s]).getLayout().y+a.getLayout().dy+e-l)>0&&(c=a.getLayout().y-r,a.setLayout({y:c},!0)),l=a.getLayout().y;}}});}function Yp(t,e,i){d(t.slice().reverse(),function(t){d(t,function(t){if(t.outEdges.length){var n=Qp(t.outEdges,qp,i)/Qp(t.outEdges,Jp,i);if("vertical"===i){var o=t.getLayout().x+(n-$p(t,i))*e;t.setLayout({x:o},!0);}else{var a=t.getLayout().y+(n-$p(t,i))*e;t.setLayout({y:a},!0);}}});});}function qp(t,e){return $p(t.node2,e)*t.getValue();}function Kp(t,e){return $p(t.node1,e)*t.getValue();}function $p(t,e){return"vertical"===e?t.getLayout().x+t.getLayout().dx/2:t.getLayout().y+t.getLayout().dy/2;}function Jp(t){return t.getValue();}function Qp(t,e,i){for(var n=0,o=t.length,a=-1;++a<o;){var r=+e.call(t,t[a],i);isNaN(r)||(n+=r);}return n;}function tg(t,e,i){d(t,function(t){d(t,function(t){if(t.inEdges.length){var n=Qp(t.inEdges,Kp,i)/Qp(t.inEdges,Jp,i);if("vertical"===i){var o=t.getLayout().x+(n-$p(t,i))*e;t.setLayout({x:o},!0);}else{var a=t.getLayout().y+(n-$p(t,i))*e;t.setLayout({y:a},!0);}}});});}function eg(t,e){d(t,function(t){"vertical"===e?(t.outEdges.sort(function(t,e){return t.node2.getLayout().x-e.node2.getLayout().x;}),t.inEdges.sort(function(t,e){return t.node1.getLayout().x-e.node1.getLayout().x;})):(t.outEdges.sort(function(t,e){return t.node2.getLayout().y-e.node2.getLayout().y;}),t.inEdges.sort(function(t,e){return t.node1.getLayout().y-e.node1.getLayout().y;}));}),d(t,function(t){var e=0,i=0;d(t.outEdges,function(t){t.setLayout({sy:e},!0),e+=t.getLayout().dy;}),d(t.inEdges,function(t){t.setLayout({ty:i},!0),i+=t.getLayout().dy;});});}function ig(t,e,i,n,o){var a=t.ends,r=new zk({shape:{points:o?og(a,n,t):a}});return ng(t,r,e,i,o),r;}function ng(t,e,i,n,o){var a=i.hostModel;(0,zM[o?"initProps":"updateProps"])(e,{shape:{points:t.ends}},a,n);var r=i.getItemModel(n),s=r.getModel(Ek),l=i.getItemVisual(n,"color"),u=s.getItemStyle(["borderColor"]);u.stroke=l,u.strokeNoScale=!0,e.useStyle(u),e.z2=100,fo(e,r.getModel(Rk).getItemStyle());}function og(t,e,i){return f(t,function(t){return t=t.slice(),t[e]=i.initBaseline,t;});}function ag(t){var e=[],i=[];return t.eachSeriesByType("boxplot",function(t){var n=t.getBaseAxis(),o=l(i,n);o<0&&(o=i.length,i[o]=n,e[o]={axis:n,seriesModels:[]}),e[o].seriesModels.push(t);}),e;}function rg(t){var e,i,n=t.axis,o=t.seriesModels,a=o.length,r=t.boxWidthList=[],s=t.boxOffsetList=[],l=[];if("category"===n.type)i=n.getBandWidth();else{var u=0;Vk(o,function(t){u=Math.max(u,t.getData().count());}),e=n.getExtent(),Math.abs(e[1]-e[0]);}Vk(o,function(t){var e=t.get("boxWidth");y(e)||(e=[e,e]),l.push([Vo(e[0],i)||0,Vo(e[1],i)||0]);});var h=.8*i-2,c=h/a*.3,d=(h-c*(a-1))/a,f=d/2-h/2;Vk(o,function(t,e){s.push(f),f+=c+d,r.push(Math.min(Math.max(d,l[e][0]),l[e][1]));});}function sg(t,e,i){function n(t,i,n){var o=s.get(i,n),a=[];a[u]=t,a[h]=o;var l;return isNaN(t)||isNaN(o)?l=[NaN,NaN]:(l=r.dataToPoint(a))[u]+=e,l;}function o(t,e,i){var n=e.slice(),o=e.slice();n[u]+=l,o[u]-=l,i?t.push(n,o):t.push(o,n);}function a(t,e){var i=e.slice(),n=e.slice();i[u]-=l,n[u]+=l,t.push(i,n);}var r=t.coordinateSystem,s=t.getData(),l=i/2,u="horizontal"===t.get("layout")?0:1,h=1-u,c=["x","y"],d=s.mapDimension(c[u]),f=s.mapDimension(c[h],!0);if(!(null==d||f.length<5))for(var p=0;p<s.count();p++){var g=s.get(d,p),m=n(g,f[2],p),v=n(g,f[0],p),y=n(g,f[1],p),x=n(g,f[3],p),_=n(g,f[4],p),w=[];o(w,y,0),o(w,x,1),w.push(v,y,_,x),a(w,v),a(w,_),a(w,m),s.setItemLayout(p,{initBaseline:m[h],ends:w});}}function lg(t,e,i){var n=t.ends;return new Hk({shape:{points:i?hg(n,t):n},z2:100});}function ug(t,e,i,n){var o=e.getItemModel(i),a=o.getModel(Gk),r=e.getItemVisual(i,"color"),s=e.getItemVisual(i,"borderColor")||r,l=a.getItemStyle(Wk);t.useStyle(l),t.style.strokeNoScale=!0,t.style.fill=r,t.style.stroke=s,t.__simpleBox=n,fo(t,o.getModel(Fk).getItemStyle());}function hg(t,e){return f(t,function(t){return t=t.slice(),t[1]=e.initBaseline,t;});}function cg(t,e,i){var n=t.getData(),o=n.getLayout("largePoints"),a=new Zk({shape:{points:o},__sign:1});e.add(a);var r=new Zk({shape:{points:o},__sign:-1});e.add(r),dg(1,a,t,n),dg(-1,r,t,n),i&&(a.incremental=!0,r.incremental=!0);}function dg(t,e,i,n){var o=t>0?"P":"N",a=n.getVisual("borderColor"+o)||n.getVisual("color"+o),r=i.getModel(Gk).getItemStyle(Wk);e.useStyle(r),e.style.fill=null,e.style.stroke=a;}function fg(t,e,i,n,o){return i>n?-1:i<n?1:e>0?t.get(o,e-1)<=n?1:-1:1;}function pg(t,e){var i,n=t.getBaseAxis(),o="category"===n.type?n.getBandWidth():(i=n.getExtent(),Math.abs(i[1]-i[0])/e.count()),a=Vo(A(t.get("barMaxWidth"),o),o),r=Vo(A(t.get("barMinWidth"),1),o),s=t.get("barWidth");return null!=s?Vo(s,o):Math.max(Math.min(o/2,a),r);}function gg(t){return y(t)||(t=[+t,+t]),t;}function mg(t,e){t.eachChild(function(t){t.attr({z:e.z,zlevel:e.zlevel,style:{stroke:"stroke"===e.brushType?e.color:null,fill:"fill"===e.brushType?e.color:null}});});}function vg(t,e){tb.call(this);var i=new wu(t,e),n=new tb();this.add(i),this.add(n),n.beforeUpdate=function(){this.attr(i.getScale());},this.updateData(t,e);}function yg(t){var e=t.data;e&&e[0]&&e[0][0]&&e[0][0].coord&&(t.data=f(e,function(t){var e={coords:[t[0].coord,t[1].coord]};return t[0].name&&(e.fromName=t[0].name),t[1].name&&(e.toName=t[1].name),o([e,t[0],t[1]]);}));}function xg(t,e,i){tb.call(this),this.add(this.createLine(t,e,i)),this._updateEffectSymbol(t,e);}function _g(t,e,i){tb.call(this),this._createPolyline(t,e,i);}function wg(t,e,i){xg.call(this,t,e,i),this._lastFrame=0,this._lastFramePercent=0;}function bg(){this.group=new tb();}function Sg(t){return t instanceof Array||(t=[t,t]),t;}function Mg(){var t=iw();this.canvas=t,this.blurSize=30,this.pointSize=20,this.maxOpacity=1,this.minOpacity=0,this._gradientPixels={};}function Ig(t,e,i){var n=t[1]-t[0],o=(e=f(e,function(e){return{interval:[(e.interval[0]-t[0])/n,(e.interval[1]-t[0])/n]};})).length,a=0;return function(t){for(n=a;n<o;n++){if((r=e[n].interval)[0]<=t&&t<=r[1]){a=n;break;}}if(n===o)for(var n=a-1;n>=0;n--){var r=e[n].interval;if(r[0]<=t&&t<=r[1]){a=n;break;}}return n>=0&&n<o&&i[n];};}function Tg(t,e){var i=t[1]-t[0];return e=[(e[0]-t[0])/i,(e[1]-t[0])/i],function(t){return t>=e[0]&&t<=e[1];};}function Ag(t){var e=t.dimensions;return"lng"===e[0]&&"lat"===e[1];}function Dg(t,e,i,n){var o=t.getItemLayout(e),a=i.get("symbolRepeat"),r=i.get("symbolClip"),s=i.get("symbolPosition")||"start",l=(i.get("symbolRotate")||0)*Math.PI/180||0,u=i.get("symbolPatternSize")||2,h=i.isAnimationEnabled(),c={dataIndex:e,layout:o,itemModel:i,symbolType:t.getItemVisual(e,"symbol")||"circle",color:t.getItemVisual(e,"color"),symbolClip:r,symbolRepeat:a,symbolRepeatDirection:i.get("symbolRepeatDirection"),symbolPatternSize:u,rotation:l,animationModel:h?i:null,hoverAnimation:h&&i.get("hoverAnimation"),z2:i.getShallow("z",!0)||0};Cg(i,a,o,n,c),kg(t,e,o,a,r,c.boundingLength,c.pxSign,u,n,c),Pg(i,c.symbolScale,l,n,c);var d=c.symbolSize,f=i.get("symbolOffset");return y(f)&&(f=[Vo(f[0],d[0]),Vo(f[1],d[1])]),Ng(i,d,o,a,r,f,s,c.valueLineWidth,c.boundingLength,c.repeatCutLength,n,c),c;}function Cg(t,e,i,n,o){var a,r=n.valueDim,s=t.get("symbolBoundingData"),l=n.coordSys.getOtherAxis(n.coordSys.getBaseAxis()),u=l.toGlobalCoord(l.dataToCoord(0)),h=1-+(i[r.wh]<=0);if(y(s)){var c=[Lg(l,s[0])-u,Lg(l,s[1])-u];c[1]<c[0]&&c.reverse(),a=c[h];}else a=null!=s?Lg(l,s)-u:e?n.coordSysExtent[r.index][h]-u:i[r.wh];o.boundingLength=a,e&&(o.repeatCutLength=i[r.wh]),o.pxSign=a>0?1:a<0?-1:0;}function Lg(t,e){return t.toGlobalCoord(t.dataToCoord(t.scale.parse(e)));}function kg(t,e,i,n,o,a,r,s,l,u){var h=l.valueDim,c=l.categoryDim,d=Math.abs(i[c.wh]),f=t.getItemVisual(e,"symbolSize");y(f)?f=f.slice():(null==f&&(f="100%"),f=[f,f]),f[c.index]=Vo(f[c.index],d),f[h.index]=Vo(f[h.index],n?d:Math.abs(a)),u.symbolSize=f,(u.symbolScale=[f[0]/s,f[1]/s])[h.index]*=(l.isHorizontal?-1:1)*r;}function Pg(t,e,i,n,o){var a=t.get(cP)||0;a&&(fP.attr({scale:e.slice(),rotation:i}),fP.updateTransform(),a/=fP.getLineScale(),a*=e[n.valueDim.index]),o.valueLineWidth=a;}function Ng(t,e,i,n,o,r,s,l,u,h,c,d){var f=c.categoryDim,p=c.valueDim,g=d.pxSign,m=Math.max(e[p.index]+l,0),v=m;if(n){var y=Math.abs(u),x=T(t.get("symbolMargin"),"15%")+"",_=!1;x.lastIndexOf("!")===x.length-1&&(_=!0,x=x.slice(0,x.length-1)),x=Vo(x,e[p.index]);var w=Math.max(m+2*x,0),b=_?0:2*x,S=Qo(n),M=S?n:Kg((y+b)/w);w=m+2*(x=(y-M*m)/2/(_?M:M-1)),b=_?0:2*x,S||"fixed"===n||(M=h?Kg((Math.abs(h)+b)/w):0),v=M*w-b,d.repeatTimes=M,d.symbolMargin=x;}var I=g*(v/2),A=d.pathPosition=[];A[f.index]=i[f.wh]/2,A[p.index]="start"===s?I:"end"===s?u-I:u/2,r&&(A[0]+=r[0],A[1]+=r[1]);var D=d.bundlePosition=[];D[f.index]=i[f.xy],D[p.index]=i[p.xy];var C=d.barRectShape=a({},i);C[p.wh]=g*Math.max(Math.abs(i[p.wh]),Math.abs(A[p.index]+I)),C[f.wh]=i[f.wh];var L=d.clipShape={};L[f.xy]=-i[f.xy],L[f.wh]=c.ecSize[f.wh],L[p.xy]=0,L[p.wh]=i[p.wh];}function Og(t){var e=t.symbolPatternSize,i=Jl(t.symbolType,-e/2,-e/2,e,e,t.color);return i.attr({culling:!0}),"image"!==i.type&&i.setStyle({strokeNoScale:!0}),i;}function Eg(t,e,i,n){function o(t){var e=l.slice(),n=i.pxSign,o=t;return("start"===i.symbolRepeatDirection?n>0:n<0)&&(o=h-1-t),e[u.index]=d*(o-h/2+.5)+l[u.index],{position:e,scale:i.symbolScale.slice(),rotation:i.rotation};}var a=t.__pictorialBundle,r=i.symbolSize,s=i.valueLineWidth,l=i.pathPosition,u=e.valueDim,h=i.repeatTimes||0,c=0,d=r[e.valueDim.index]+s+2*i.symbolMargin;for(jg(t,function(t){t.__pictorialAnimationIndex=c,t.__pictorialRepeatTimes=h,c<h?Yg(t,null,o(c),i,n):Yg(t,null,{scale:[0,0]},i,n,function(){a.remove(t);}),Wg(t,i),c++;});c<h;c++){var f=Og(i);f.__pictorialAnimationIndex=c,f.__pictorialRepeatTimes=h,a.add(f);var p=o(c);Yg(f,{position:p.position,scale:[0,0]},{scale:p.scale,rotation:p.rotation},i,n),f.on("mouseover",function(){jg(t,function(t){t.trigger("emphasis");});}).on("mouseout",function(){jg(t,function(t){t.trigger("normal");});}),Wg(f,i);}}function Rg(t,e,i,n){var o=t.__pictorialBundle,a=t.__pictorialMainPath;a?Yg(a,null,{position:i.pathPosition.slice(),scale:i.symbolScale.slice(),rotation:i.rotation},i,n):(a=t.__pictorialMainPath=Og(i),o.add(a),Yg(a,{position:i.pathPosition.slice(),scale:[0,0],rotation:i.rotation},{scale:i.symbolScale.slice()},i,n),a.on("mouseover",function(){this.trigger("emphasis");}).on("mouseout",function(){this.trigger("normal");})),Wg(a,i);}function zg(t,e,i){var n=a({},e.barRectShape),o=t.__pictorialBarRect;o?Yg(o,null,{shape:n},e,i):(o=t.__pictorialBarRect=new yM({z2:2,shape:n,silent:!0,style:{stroke:"transparent",fill:"transparent",lineWidth:0}}),t.add(o));}function Bg(t,e,i,n){if(i.symbolClip){var o=t.__pictorialClipPath,r=a({},i.clipShape),s=e.valueDim,l=i.animationModel,u=i.dataIndex;if(o)Io(o,{shape:r},l,u);else{r[s.wh]=0,o=new yM({shape:r}),t.__pictorialBundle.setClipPath(o),t.__pictorialClipPath=o;var h={};h[s.wh]=i.clipShape[s.wh],zM[n?"updateProps":"initProps"](o,{shape:h},l,u);}}}function Vg(t,e){var i=t.getItemModel(e);return i.getAnimationDelayParams=Gg,i.isAnimationEnabled=Fg,i;}function Gg(t){return{index:t.__pictorialAnimationIndex,count:t.__pictorialRepeatTimes};}function Fg(){return this.parentModel.isAnimationEnabled()&&!!this.getShallow("animation");}function Wg(t,e){t.off("emphasis").off("normal");var i=e.symbolScale.slice();e.hoverAnimation&&t.on("emphasis",function(){this.animateTo({scale:[1.1*i[0],1.1*i[1]]},400,"elasticOut");}).on("normal",function(){this.animateTo({scale:i.slice()},400,"elasticOut");});}function Hg(t,e,i,n){var o=new tb(),a=new tb();return o.add(a),o.__pictorialBundle=a,a.attr("position",i.bundlePosition.slice()),i.symbolRepeat?Eg(o,e,i):Rg(o,e,i),zg(o,i,n),Bg(o,e,i,n),o.__pictorialShapeStr=Xg(t,i),o.__pictorialSymbolMeta=i,o;}function Zg(t,e,i){var n=i.animationModel,o=i.dataIndex;Io(t.__pictorialBundle,{position:i.bundlePosition.slice()},n,o),i.symbolRepeat?Eg(t,e,i,!0):Rg(t,e,i,!0),zg(t,i,!0),Bg(t,e,i,!0);}function Ug(t,e,i,n){var o=n.__pictorialBarRect;o&&(o.style.text=null);var a=[];jg(n,function(t){a.push(t);}),n.__pictorialMainPath&&a.push(n.__pictorialMainPath),n.__pictorialClipPath&&(i=null),d(a,function(t){Io(t,{scale:[0,0]},i,e,function(){n.parent&&n.parent.remove(n);});}),t.setItemGraphicEl(e,null);}function Xg(t,e){return[t.getItemVisual(e.dataIndex,"symbol")||"none",!!e.symbolRepeat,!!e.symbolClip].join(":");}function jg(t,e,i){d(t.__pictorialBundle.children(),function(n){n!==t.__pictorialBarRect&&e.call(i,n);});}function Yg(t,e,i,n,o,a){e&&t.attr(e),n.symbolClip&&!o?i&&t.attr(i):i&&zM[o?"updateProps":"initProps"](t,i,n.animationModel,n.dataIndex,a);}function qg(t,e,i){var n=i.color,o=i.dataIndex,a=i.itemModel,s=a.getModel("itemStyle").getItemStyle(["color"]),l=a.getModel("emphasis.itemStyle").getItemStyle(),u=a.getShallow("cursor");jg(t,function(t){t.setColor(n),t.setStyle(r({fill:n,opacity:i.opacity},s)),fo(t,l),u&&(t.cursor=u),t.z2=i.z2;});var h={},c=e.valueDim.posDesc[+(i.boundingLength>0)],d=t.__pictorialBarRect;kh(d.style,h,a,n,e.seriesModel,o,c),fo(d,h);}function Kg(t){var e=Math.round(t);return Math.abs(t-e)<1e-4?e:Math.ceil(t);}function $g(t,e,i){this.dimension="single",this.dimensions=["single"],this._axis=null,this._rect,this._init(t,e,i),this.model=t;}function Jg(t,e){e=e||{};var i=t.coordinateSystem,n=t.axis,o={},a=n.position,r=n.orient,s=i.getRect(),l=[s.x,s.x+s.width,s.y,s.y+s.height],u={horizontal:{top:l[2],bottom:l[3]},vertical:{left:l[0],right:l[1]}};o.position=["vertical"===r?u.vertical[a]:l[0],"horizontal"===r?u.horizontal[a]:l[3]];var h={horizontal:0,vertical:1};o.rotation=Math.PI/2*h[r];var c={top:-1,bottom:1,right:1,left:-1};o.labelDirection=o.tickDirection=o.nameDirection=c[a],t.get("axisTick.inside")&&(o.tickDirection=-o.tickDirection),T(e.labelInside,t.get("axisLabel.inside"))&&(o.labelDirection=-o.labelDirection);var d=e.rotate;return null==d&&(d=t.get("axisLabel.rotate")),o.labelRotation="top"===a?-d:d,o.z2=1,o;}function Qg(t,e,i,n,o){var r=t.axis;if(!r.scale.isBlank()&&r.containData(e))if(t.involveSeries){var s=tm(e,t),l=s.payloadBatch,u=s.snapToValue;l[0]&&null==o.seriesIndex&&a(o,l[0]),!n&&t.snap&&r.containData(u)&&null!=u&&(e=u),i.showPointer(t,e,l,o),i.showTooltip(t,s,u);}else i.showPointer(t,e);}function tm(t,e){var i=e.axis,n=i.dim,o=t,a=[],r=Number.MAX_VALUE,s=-1;return _P(e.seriesModels,function(e,l){var u,h,c=e.getData().mapDimension(n,!0);if(e.getAxisTooltipData){var d=e.getAxisTooltipData(c,t,i);h=d.dataIndices,u=d.nestestValue;}else{if(!(h=e.getData().indicesOfNearest(c[0],t,"category"===i.type?.5:null)).length)return;u=e.getData().get(c[0],h[0]);}if(null!=u&&isFinite(u)){var f=t-u,p=Math.abs(f);p<=r&&((p<r||f>=0&&s<0)&&(r=p,s=f,o=u,a.length=0),_P(h,function(t){a.push({seriesIndex:e.seriesIndex,dataIndexInside:t,dataIndex:e.getData().getRawIndex(t)});}));}}),{payloadBatch:a,snapToValue:o};}function em(t,e,i,n){t[e.key]={value:i,payloadBatch:n};}function im(t,e,i,n){var o=i.payloadBatch,a=e.axis,r=a.model,s=e.axisPointerModel;if(e.triggerTooltip&&o.length){var l=e.coordSys.model,u=Ah(l),h=t.map[u];h||(h=t.map[u]={coordSysId:l.id,coordSysIndex:l.componentIndex,coordSysType:l.type,coordSysMainType:l.mainType,dataByAxis:[]},t.list.push(h)),h.dataByAxis.push({axisDim:a.dim,axisIndex:r.componentIndex,axisType:r.type,axisId:r.id,value:n,valueLabelOpt:{precision:s.get("label.precision"),formatter:s.get("label.formatter")},seriesDataIndices:o.slice()});}}function nm(t,e,i){var n=i.axesInfo=[];_P(e,function(e,i){var o=e.axisPointerModel.option,a=t[i];a?(!e.useHandle&&(o.status="show"),o.value=a.value,o.seriesDataIndices=(a.payloadBatch||[]).slice()):!e.useHandle&&(o.status="hide"),"show"===o.status&&n.push({axisDim:e.axis.dim,axisIndex:e.axis.model.componentIndex,value:o.value});});}function om(t,e,i,n){if(!lm(e)&&t.list.length){var o=((t.list[0].dataByAxis[0]||{}).seriesDataIndices||[])[0]||{};n({type:"showTip",escapeConnect:!0,x:e[0],y:e[1],tooltipOption:i.tooltipOption,position:i.position,dataIndexInside:o.dataIndexInside,dataIndex:o.dataIndex,seriesIndex:o.seriesIndex,dataByCoordSys:t.list});}else n({type:"hideTip"});}function am(t,e,i){var n=i.getZr(),o=bP(n).axisPointerLastHighlights||{},a=bP(n).axisPointerLastHighlights={};_P(t,function(t,e){var i=t.axisPointerModel.option;"show"===i.status&&_P(i.seriesDataIndices,function(t){var e=t.seriesIndex+" | "+t.dataIndex;a[e]=t;});});var r=[],s=[];d(o,function(t,e){!a[e]&&s.push(t);}),d(a,function(t,e){!o[e]&&r.push(t);}),s.length&&i.dispatchAction({type:"downplay",escapeConnect:!0,batch:s}),r.length&&i.dispatchAction({type:"highlight",escapeConnect:!0,batch:r});}function rm(t,e){for(var i=0;i<(t||[]).length;i++){var n=t[i];if(e.axis.dim===n.axisDim&&e.axis.model.componentIndex===n.axisIndex)return n;}}function sm(t){var e=t.axis.model,i={},n=i.axisDim=t.axis.dim;return i.axisIndex=i[n+"AxisIndex"]=e.componentIndex,i.axisName=i[n+"AxisName"]=e.name,i.axisId=i[n+"AxisId"]=e.id,i;}function lm(t){return!t||null==t[0]||isNaN(t[0])||null==t[1]||isNaN(t[1]);}function um(t,e,i){if(!U_.node){var n=e.getZr();SP(n).records||(SP(n).records={}),hm(n,e),(SP(n).records[t]||(SP(n).records[t]={})).handler=i;}}function hm(t,e){function i(i,n){t.on(i,function(i){var o=pm(e);MP(SP(t).records,function(t){t&&n(t,i,o.dispatchAction);}),cm(o.pendings,e);});}SP(t).initialized||(SP(t).initialized=!0,i("click",v(fm,"click")),i("mousemove",v(fm,"mousemove")),i("globalout",dm));}function cm(t,e){var i,n=t.showTip.length,o=t.hideTip.length;n?i=t.showTip[n-1]:o&&(i=t.hideTip[o-1]),i&&(i.dispatchAction=null,e.dispatchAction(i));}function dm(t,e,i){t.handler("leave",null,i);}function fm(t,e,i,n){e.handler(t,i,n);}function pm(t){var e={showTip:[],hideTip:[]},i=function i(n){var o=e[n.type];o?o.push(n):(n.dispatchAction=i,t.dispatchAction(n));};return{dispatchAction:i,pendings:e};}function gm(t,e){if(!U_.node){var i=e.getZr();(SP(i).records||{})[t]&&(SP(i).records[t]=null);}}function mm(){}function vm(t,e,i,n){ym(TP(i).lastProp,n)||(TP(i).lastProp=n,e?Io(i,n,t):(i.stopAnimation(),i.attr(n)));}function ym(t,e){if(w(t)&&w(e)){var i=!0;return d(e,function(e,n){i=i&&ym(t[n],e);}),!!i;}return t===e;}function xm(t,e){t[e.get("label.show")?"show":"hide"]();}function _m(t){return{position:t.position.slice(),rotation:t.rotation||0};}function wm(t,e,i){var n=e.get("z"),o=e.get("zlevel");t&&t.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=o&&(t.zlevel=o),t.silent=i);});}function bm(t){var e,i=t.get("type"),n=t.getModel(i+"Style");return"line"===i?(e=n.getLineStyle()).fill=null:"shadow"===i&&((e=n.getAreaStyle()).stroke=null),e;}function Sm(t,e,i,n,o){var a=Im(i.get("value"),e.axis,e.ecModel,i.get("seriesDataIndices"),{precision:i.get("label.precision"),formatter:i.get("label.formatter")}),r=i.getModel("label"),s=qM(r.get("padding")||0),l=r.getFont(),u=ke(a,l),h=o.position,c=u.width+s[1]+s[3],d=u.height+s[0]+s[2],f=o.align;"right"===f&&(h[0]-=c),"center"===f&&(h[0]-=c/2);var p=o.verticalAlign;"bottom"===p&&(h[1]-=d),"middle"===p&&(h[1]-=d/2),Mm(h,c,d,n);var g=r.get("backgroundColor");g&&"auto"!==g||(g=e.get("axisLine.lineStyle.color")),t.label={shape:{x:0,y:0,width:c,height:d,r:r.get("borderRadius")},position:h.slice(),style:{text:a,textFont:l,textFill:r.getTextColor(),textPosition:"inside",fill:g,stroke:r.get("borderColor")||"transparent",lineWidth:r.get("borderWidth")||0,shadowBlur:r.get("shadowBlur"),shadowColor:r.get("shadowColor"),shadowOffsetX:r.get("shadowOffsetX"),shadowOffsetY:r.get("shadowOffsetY")},z2:10};}function Mm(t,e,i,n){var o=n.getWidth(),a=n.getHeight();t[0]=Math.min(t[0]+e,o)-e,t[1]=Math.min(t[1]+i,a)-i,t[0]=Math.max(t[0],0),t[1]=Math.max(t[1],0);}function Im(t,e,i,n,o){t=e.scale.parse(t);var a=e.scale.getLabel(t,{precision:o.precision}),r=o.formatter;if(r){var s={value:Xl(e,t),seriesData:[]};d(n,function(t){var e=i.getSeriesByIndex(t.seriesIndex),n=t.dataIndexInside,o=e&&e.getDataParams(n);o&&s.seriesData.push(o);}),_(r)?a=r.replace("{value}",a):x(r)&&(a=r(s));}return a;}function Tm(t,e,i){var n=xt();return Mt(n,n,i.rotation),St(n,n,i.position),Do([t.dataToCoord(e),(i.labelOffset||0)+(i.labelDirection||1)*(i.labelMargin||0)],n);}function Am(t,e,i,n,o,a){var r=FD.innerTextLayout(i.rotation,0,i.labelDirection);i.labelMargin=o.get("label.margin"),Sm(e,n,o,a,{position:Tm(n.axis,t,i),align:r.textAlign,verticalAlign:r.textVerticalAlign});}function Dm(t,e,i){return i=i||0,{x1:t[i],y1:t[1-i],x2:e[i],y2:e[1-i]};}function Cm(t,e,i){return i=i||0,{x:t[i],y:t[1-i],width:e[i],height:e[1-i]};}function Lm(t,e,i,n,o,a){return{cx:t,cy:e,r0:i,r:n,startAngle:o,endAngle:a,clockwise:!0};}function km(t,e){var i={};return i[e.dim+"AxisIndex"]=e.index,t.getCartesian(i);}function Pm(t){return"x"===t.dim?0:1;}function Nm(t){return t.isHorizontal()?0:1;}function Om(t,e){var i=t.getRect();return[i[kP[e]],i[kP[e]]+i[PP[e]]];}function Em(t,e,i){var n=new yM({shape:{x:t.x-10,y:t.y-10,width:0,height:t.height+20}});return To(n,{shape:{width:t.width+20,height:t.height+20}},e,i),n;}function Rm(t,e,i){if(t.count())for(var n,o=e.coordinateSystem,a=e.getLayerSeries(),r=t.mapDimension("single"),s=t.mapDimension("value"),l=f(a,function(e){return f(e.indices,function(e){var i=o.dataToPoint(t.get(r,e));return i[1]=t.get(s,e),i;});}),u=zm(l),h=u.y0,c=i/u.max,d=a.length,p=a[0].indices.length,g=0;g<p;++g){n=h[g]*c,t.setItemLayout(a[0].indices[g],{layerIndex:0,x:l[0][g][0],y0:n,y:l[0][g][1]*c});for(var m=1;m<d;++m){n+=l[m-1][g][1]*c,t.setItemLayout(a[m].indices[g],{layerIndex:m,x:l[m][g][0],y0:n,y:l[m][g][1]*c});}}}function zm(t){for(var e=t.length,i=t[0].length,n=[],o=[],a=0,r={},s=0;s<i;++s){for(var l=0,u=0;l<e;++l){u+=t[l][s][1];}u>a&&(a=u),n.push(u);}for(var h=0;h<i;++h){o[h]=(a-n[h])/2;}a=0;for(var c=0;c<i;++c){var d=n[c]+o[c];d>a&&(a=d);}return r.y0=o,r.max=a,r;}function Bm(t){var e=0;d(t.children,function(t){Bm(t);var i=t.value;y(i)&&(i=i[0]),e+=i;});var i=t.value;y(i)&&(i=i[0]),(null==i||isNaN(i))&&(i=e),i<0&&(i=0),y(t.value)?t.value[0]=i:t.value=i;}function Vm(t,e,i){function n(){r.ignore=r.hoverIgnore;}function o(){r.ignore=r.normalIgnore;}tb.call(this);var a=new hM({z2:zP});a.seriesIndex=e.seriesIndex;var r=new rM({z2:BP,silent:t.getModel("label").get("silent")});this.add(a),this.add(r),this.updateData(!0,t,"normal",e,i),this.on("emphasis",n).on("normal",o).on("mouseover",n).on("mouseout",o);}function Gm(t,e,i){var n=t.getVisual("color"),o=t.getVisual("visualMeta");o&&0!==o.length||(n=null);var a=t.getModel("itemStyle").get("color");if(a)return a;if(n)return n;if(0===t.depth)return i.option.color[0];var r=i.option.color.length;return a=i.option.color[Fm(t)%r];}function Fm(t){for(var e=t;e.depth>1;){e=e.parentNode;}return l(t.getAncestors()[0].children,e);}function Wm(t,e,i){return i!==RP.NONE&&(i===RP.SELF?t===e:i===RP.ANCESTOR?t===e||t.isAncestorOf(e):t===e||t.isDescendantOf(e));}function Hm(t,e,i){e.getData().setItemVisual(t.dataIndex,"color",i);}function Zm(t,e){var i=t.children||[];t.children=Um(i,e),i.length&&d(t.children,function(t){Zm(t,e);});}function Um(t,e){if("function"==typeof e)return t.sort(e);var i="asc"===e;return t.sort(function(t,e){var n=(t.getValue()-e.getValue())*(i?1:-1);return 0===n?(t.dataIndex-e.dataIndex)*(i?-1:1):n;});}function Xm(t,e){return e=e||[0,0],f(["x","y"],function(i,n){var o=this.getAxis(i),a=e[n],r=t[n]/2;return"category"===o.type?o.getBandWidth():Math.abs(o.dataToCoord(a-r)-o.dataToCoord(a+r));},this);}function jm(t,e){return e=e||[0,0],f([0,1],function(i){var n=e[i],o=t[i]/2,a=[],r=[];return a[i]=n-o,r[i]=n+o,a[1-i]=r[1-i]=e[1-i],Math.abs(this.dataToPoint(a)[i]-this.dataToPoint(r)[i]);},this);}function Ym(t,e){var i=this.getAxis(),n=e instanceof Array?e[0]:e,o=(t instanceof Array?t[0]:t)/2;return"category"===i.type?i.getBandWidth():Math.abs(i.dataToCoord(n-o)-i.dataToCoord(n+o));}function qm(t,e){return f(["Radius","Angle"],function(i,n){var o=this["get"+i+"Axis"](),a=e[n],r=t[n]/2,s="dataTo"+i,l="category"===o.type?o.getBandWidth():Math.abs(o[s](a-r)-o[s](a+r));return"Angle"===i&&(l=l*Math.PI/180),l;},this);}function Km(t){var e,i=t.type;if("path"===i){var n=t.shape,o=null!=n.width&&null!=n.height?{x:n.x||0,y:n.y||0,width:n.width,height:n.height}:null,a=lv(n);(e=Xn(a,null,o,n.layout||"center")).__customPathData=a;}else"image"===i?(e=new fi({})).__customImagePath=t.style.image:"text"===i?(e=new rM({})).__customText=t.style.text:e=new(0,zM[i.charAt(0).toUpperCase()+i.slice(1)])();return e.__customGraphicType=i,e.name=t.name,e;}function $m(t,e,n,o,a,r,s){var l={},u=n.style||{};if(n.shape&&(l.shape=i(n.shape)),n.position&&(l.position=n.position.slice()),n.scale&&(l.scale=n.scale.slice()),n.origin&&(l.origin=n.origin.slice()),n.rotation&&(l.rotation=n.rotation),"image"===t.type&&n.style){h=l.style={};d(["x","y","width","height"],function(e){Jm(e,h,u,t.style,r);});}if("text"===t.type&&n.style){var h=l.style={};d(["x","y"],function(e){Jm(e,h,u,t.style,r);}),!u.hasOwnProperty("textFill")&&u.fill&&(u.textFill=u.fill),!u.hasOwnProperty("textStroke")&&u.stroke&&(u.textStroke=u.stroke);}if("group"!==t.type&&(t.useStyle(u),r)){t.style.opacity=0;var c=u.opacity;null==c&&(c=1),To(t,{style:{opacity:c}},o,e);}r?t.attr(l):Io(t,l,o,e),n.hasOwnProperty("z2")&&t.attr("z2",n.z2||0),n.hasOwnProperty("silent")&&t.attr("silent",n.silent),n.hasOwnProperty("invisible")&&t.attr("invisible",n.invisible),n.hasOwnProperty("ignore")&&t.attr("ignore",n.ignore),n.hasOwnProperty("info")&&t.attr("info",n.info);var f=n.styleEmphasis,p=!1===f;t.__cusHasEmphStl&&null==f||!t.__cusHasEmphStl&&p||(ro(t,f),t.__cusHasEmphStl=!p),s&&po(t,!p);}function Jm(t,e,i,n,o){null==i[t]||o||(e[t]=i[t],i[t]=n[t]);}function Qm(t,e,i,n){function o(t){null==t&&(t=h),v&&(c=e.getItemModel(t),d=c.getModel(UP),f=c.getModel(XP),p=e.getItemVisual(t,"color"),v=!1);}var s=t.get("renderItem"),l=t.coordinateSystem,u={};l&&(u=l.prepareCustoms?l.prepareCustoms():YP[l.type](l));var h,c,d,f,p,g=r({getWidth:n.getWidth,getHeight:n.getHeight,getZr:n.getZr,getDevicePixelRatio:n.getDevicePixelRatio,value:function value(t,i){return null==i&&(i=h),e.get(e.getDimension(t||0),i);},style:function style(i,n){null==n&&(n=h),o(n);var r=c.getModel(HP).getItemStyle();null!=p&&(r.fill=p);var s=e.getItemVisual(n,"opacity");return null!=s&&(r.opacity=s),mo(r,d,null,{autoColor:p,isRectText:!0}),r.text=d.getShallow("show")?A(t.getFormattedLabel(n,"normal"),_u(e,n)):null,i&&a(r,i),r;},styleEmphasis:function styleEmphasis(i,n){null==n&&(n=h),o(n);var r=c.getModel(ZP).getItemStyle();return mo(r,f,null,{isRectText:!0},!0),r.text=f.getShallow("show")?D(t.getFormattedLabel(n,"emphasis"),t.getFormattedLabel(n,"normal"),_u(e,n)):null,i&&a(r,i),r;},visual:function visual(t,i){return null==i&&(i=h),e.getItemVisual(i,t);},barLayout:function barLayout(t){if(l.getBaseAxis)return Ll(r({axis:l.getBaseAxis()},t),n);},currentSeriesIndices:function currentSeriesIndices(){return i.getCurrentSeriesIndices();},font:function font(t){return So(t,i);}},u.api||{}),m={context:{},seriesId:t.id,seriesName:t.name,seriesIndex:t.seriesIndex,coordSys:u.coordSys,dataInsideLength:e.count(),encode:tv(t.getData())},v=!0;return function(t,i){return h=t,v=!0,s&&s(r({dataIndexInside:t,dataIndex:e.getRawIndex(t),actionType:i?i.type:null},m),g);};}function tv(t){var e={};return d(t.dimensions,function(i,n){var o=t.getDimensionInfo(i);if(!o.isExtraCoord){var a=o.coordDim;(e[a]=e[a]||[])[o.coordDimIndex]=n;}}),e;}function ev(t,e,i,n,o,a){return(t=iv(t,e,i,n,o,a,!0))&&a.setItemGraphicEl(e,t),t;}function iv(t,e,i,n,o,a,r){var s=!i,l=(i=i||{}).type,u=i.shape,h=i.style;if(t&&(s||null!=l&&l!==t.__customGraphicType||"path"===l&&uv(u)&&lv(u)!==t.__customPathData||"image"===l&&hv(h,"image")&&h.image!==t.__customImagePath||"text"===l&&hv(u,"text")&&h.text!==t.__customText)&&(o.remove(t),t=null),!s){var c=!t;return!t&&(t=Km(i)),$m(t,e,i,n,a,c,r),"group"===l&&nv(t,e,i,n,a),o.add(t),t;}}function nv(t,e,i,n,o){var a=i.children,r=a?a.length:0,s=i.$mergeChildren,l="byName"===s||i.diffChildrenByName,u=!1===s;if(r||l||u)if(l)ov({oldChildren:t.children()||[],newChildren:a||[],dataIndex:e,animatableModel:n,group:t,data:o});else{u&&t.removeAll();for(var h=0;h<r;h++){a[h]&&iv(t.childAt(h),e,a[h],n,t,o);}}}function ov(t){new Xs(t.oldChildren,t.newChildren,av,av,t).add(rv).update(rv).remove(sv).execute();}function av(t,e){var i=t&&t.name;return null!=i?i:jP+e;}function rv(t,e){var i=this.context,n=null!=t?i.newChildren[t]:null;iv(null!=e?i.oldChildren[e]:null,i.dataIndex,n,i.animatableModel,i.group,i.data);}function sv(t){var e=this.context,i=e.oldChildren[t];i&&e.group.remove(i);}function lv(t){return t&&(t.pathData||t.d);}function uv(t){return t&&(t.hasOwnProperty("pathData")||t.hasOwnProperty("d"));}function hv(t,e){return t&&t.hasOwnProperty(e);}function cv(t,e,i,n){var o=i.type,a=new(0,zM[o.charAt(0).toUpperCase()+o.slice(1)])(i);e.add(a),n.set(t,a),a.__ecGraphicId=t;}function dv(t,e){var i=t&&t.parent;i&&("group"===t.type&&t.traverse(function(t){dv(t,e);}),e.removeKey(t.__ecGraphicId),i.remove(t));}function fv(t){return t=a({},t),d(["id","parentId","$action","hv","bounding"].concat(nI),function(e){delete t[e];}),t;}function pv(t,e){var i;return d(e,function(e){null!=t[e]&&"auto"!==t[e]&&(i=!0);}),i;}function gv(t,e){var i=t.exist;if(e.id=t.keyInfo.id,!e.type&&i&&(e.type=i.type),null==e.parentId){var n=e.parentOption;n?e.parentId=n.id:i&&(e.parentId=i.parentId);}e.parentOption=null;}function mv(t,e,i){var o=a({},i),r=t[e],s=i.$action||"merge";"merge"===s?r?(n(r,o,!0),pa(r,o,{ignoreSize:!0}),ma(i,r)):t[e]=o:"replace"===s?t[e]=o:"remove"===s&&r&&(t[e]=null);}function vv(t,e){t&&(t.hv=e.hv=[pv(e,["left","right"]),pv(e,["top","bottom"])],"group"===t.type&&(null==t.width&&(t.width=e.width=0),null==t.height&&(t.height=e.height=0)));}function yv(t,e,i){var n=t.eventData;t.silent||t.ignore||n||(n=t.eventData={componentType:"graphic",componentIndex:e.componentIndex,name:t.name}),n&&(n.info=t.info);}function xv(t,e,i){var n,o={},a="toggleSelected"===t;return i.eachComponent("legend",function(i){a&&null!=n?i[n?"select":"unSelect"](e.name):(i[t](e.name),n=i.isSelected(e.name)),d(i.getData(),function(t){var e=t.get("name");if("\n"!==e&&""!==e){var n=i.isSelected(e);o.hasOwnProperty(e)?o[e]=o[e]&&n:o[e]=n;}});}),{name:e.name,selected:o};}function _v(t,e,i){var n=e.getBoxLayoutParams(),o=e.get("padding"),a={width:i.getWidth(),height:i.getHeight()},r=ca(n,a,o);aI(e.get("orient"),t,e.get("itemGap"),r.width,r.height),da(t,n,a,o);}function wv(t,e){var i=qM(e.get("padding")),n=e.getItemStyle(["color","opacity"]);return n.fill=e.get("backgroundColor"),t=new yM({shape:{x:t.x-i[3],y:t.y-i[0],width:t.width+i[1]+i[3],height:t.height+i[0]+i[2],r:e.get("borderRadius")},style:n,silent:!0,z2:-1});}function bv(t,e){e.dispatchAction({type:"legendToggleSelect",name:t});}function Sv(t,e,i,n){var o=i.getZr().storage.getDisplayList()[0];o&&o.useHoverLayer||i.dispatchAction({type:"highlight",seriesName:t,name:e,excludeSeriesId:n});}function Mv(t,e,i,n){var o=i.getZr().storage.getDisplayList()[0];o&&o.useHoverLayer||i.dispatchAction({type:"downplay",seriesName:t,name:e,excludeSeriesId:n});}function Iv(t,e,i){var n=[1,1];n[t.getOrient().index]=0,pa(e,i,{type:"box",ignoreSize:n});}function Tv(t){var e="left "+t+"s cubic-bezier(0.23, 1, 0.32, 1),top "+t+"s cubic-bezier(0.23, 1, 0.32, 1)";return f(lN,function(t){return t+"transition:"+e;}).join(";");}function Av(t){var e=[],i=t.get("fontSize"),n=t.getTextColor();return n&&e.push("color:"+n),e.push("font:"+t.getFont()),i&&e.push("line-height:"+Math.round(3*i/2)+"px"),rN(["decoration","align"],function(i){var n=t.get(i);n&&e.push("text-"+i+":"+n);}),e.join(";");}function Dv(t){var e=[],i=t.get("transitionDuration"),n=t.get("backgroundColor"),o=t.getModel("textStyle"),a=t.get("padding");return i&&e.push(Tv(i)),n&&(U_.canvasSupported?e.push("background-Color:"+n):(e.push("background-Color:#"+Zt(n)),e.push("filter:alpha(opacity=70)"))),rN(["width","color","radius"],function(i){var n="border-"+i,o=sN(n),a=t.get(o);null!=a&&e.push(n+":"+a+("color"===i?"":"px"));}),e.push(Av(o)),null!=a&&e.push("padding:"+qM(a).join("px ")+"px"),e.join(";")+";";}function Cv(t,e){if(U_.wxa)return null;var i=document.createElement("div"),n=this._zr=e.getZr();this.el=i,this._x=e.getWidth()/2,this._y=e.getHeight()/2,t.appendChild(i),this._container=t,this._show=!1,this._hideTimeout;var o=this;i.onmouseenter=function(){o._enterable&&(clearTimeout(o._hideTimeout),o._show=!0),o._inContent=!0;},i.onmousemove=function(e){if(e=e||window.event,!o._enterable){var i=n.handler;ut(t,e,!0),i.dispatch("mousemove",e);}},i.onmouseleave=function(){o._enterable&&o._show&&o.hideLater(o._hideDelay),o._inContent=!1;};}function Lv(t){this._zr=t.getZr(),this._show=!1,this._hideTimeout;}function kv(t){for(var e=t.pop();t.length;){var i=t.pop();i&&(No.isInstance(i)&&(i=i.get("tooltip",!0)),"string"==typeof i&&(i={formatter:i}),e=new No(i,e,e.ecModel));}return e;}function Pv(t,e){return t.dispatchAction||m(e.dispatchAction,e);}function Nv(t,e,i,n,o,a,r){var s=i.getOuterSize(),l=s.width,u=s.height;return null!=a&&(t+l+a>n?t-=l+a:t+=a),null!=r&&(e+u+r>o?e-=u+r:e+=r),[t,e];}function Ov(t,e,i,n,o){var a=i.getOuterSize(),r=a.width,s=a.height;return t=Math.min(t+r,n)-r,e=Math.min(e+s,o)-s,t=Math.max(t,0),e=Math.max(e,0),[t,e];}function Ev(t,e,i){var n=i[0],o=i[1],a=0,r=0,s=e.width,l=e.height;switch(t){case"inside":a=e.x+s/2-n/2,r=e.y+l/2-o/2;break;case"top":a=e.x+s/2-n/2,r=e.y-o-5;break;case"bottom":a=e.x+s/2-n/2,r=e.y+l+5;break;case"left":a=e.x-n-5,r=e.y+l/2-o/2;break;case"right":a=e.x+s+5,r=e.y+l/2-o/2;}return[a,r];}function Rv(t){return"center"===t||"middle"===t;}function zv(t){return t.get("stack")||"__ec_stack_"+t.seriesIndex;}function Bv(t){return t.dim;}function Vv(t,e){var i={};d(t,function(t,e){var n=t.getData(),o=t.coordinateSystem.getBaseAxis(),a=o.getExtent(),r="category"===o.type?o.getBandWidth():Math.abs(a[1]-a[0])/n.count(),s=i[Bv(o)]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},l=s.stacks;i[Bv(o)]=s;var u=zv(t);l[u]||s.autoWidthCount++,l[u]=l[u]||{width:0,maxWidth:0};var h=Vo(t.get("barWidth"),r),c=Vo(t.get("barMaxWidth"),r),d=t.get("barGap"),f=t.get("barCategoryGap");h&&!l[u].width&&(h=Math.min(s.remainedWidth,h),l[u].width=h,s.remainedWidth-=h),c&&(l[u].maxWidth=c),null!=d&&(s.gap=d),null!=f&&(s.categoryGap=f);});var n={};return d(i,function(t,e){n[e]={};var i=t.stacks,o=t.bandWidth,a=Vo(t.categoryGap,o),r=Vo(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-a)/(l+(l-1)*r);u=Math.max(u,0),d(i,function(t,e){var i=t.maxWidth;i&&i<u&&(i=Math.min(i,s),t.width&&(i=Math.min(i,t.width)),s-=i,t.width=i,l--);}),u=(s-a)/(l+(l-1)*r),u=Math.max(u,0);var h,c=0;d(i,function(t,e){t.width||(t.width=u),h=t,c+=t.width*(1+r);}),h&&(c-=h.width*r);var f=-c/2;d(i,function(t,i){n[e][i]=n[e][i]||{offset:f,width:t.width},f+=t.width*(1+r);});}),n;}function Gv(t,e){aD.call(this,"radius",t,e),this.type="category";}function Fv(t,e){e=e||[0,360],aD.call(this,"angle",t,e),this.type="category";}function Wv(t,e){return e.type||(e.data?"category":"value");}function Hv(t,e,i){var n=e.get("center"),o=i.getWidth(),a=i.getHeight();t.cx=Vo(n[0],o),t.cy=Vo(n[1],a);var r=t.getRadiusAxis(),s=Math.min(o,a)/2,l=Vo(e.get("radius"),s);r.inverse?r.setExtent(l,0):r.setExtent(0,l);}function Zv(t,e){var i=this,n=i.getAngleAxis(),o=i.getRadiusAxis();if(n.scale.setExtent(1/0,-1/0),o.scale.setExtent(1/0,-1/0),t.eachSeries(function(t){if(t.coordinateSystem===i){var e=t.getData();d(e.mapDimension("radius",!0),function(t){o.scale.unionExtentFromData(e,gl(e,t));}),d(e.mapDimension("angle",!0),function(t){n.scale.unionExtentFromData(e,gl(e,t));});}}),Wl(n.scale,n.model),Wl(o.scale,o.model),"category"===n.type&&!n.onBand){var a=n.getExtent(),r=360/n.scale.count();n.inverse?a[1]+=r:a[1]-=r,n.setExtent(a[0],a[1]);}}function Uv(t,e){if(t.type=e.get("type"),t.scale=Hl(e),t.onBand=e.get("boundaryGap")&&"category"===t.type,t.inverse=e.get("inverse"),"angleAxis"===e.mainType){t.inverse^=e.get("clockwise");var i=e.get("startAngle");t.setExtent(i,i+(t.inverse?-360:360));}e.axis=t,t.model=e;}function Xv(t,e,i){e[1]>e[0]&&(e=e.slice().reverse());var n=t.coordToPoint([e[0],i]),o=t.coordToPoint([e[1],i]);return{x1:n[0],y1:n[1],x2:o[0],y2:o[1]};}function jv(t){return t.getRadiusAxis().inverse?0:1;}function Yv(t){var e=t[0],i=t[t.length-1];e&&i&&Math.abs(Math.abs(e.coord-i.coord)-360)<1e-4&&t.pop();}function qv(t,e,i){return{position:[t.cx,t.cy],rotation:i/180*Math.PI,labelDirection:-1,tickDirection:-1,nameDirection:1,labelRotate:e.getModel("axisLabel").get("rotate"),z2:1};}function Kv(t,e,i,n,o){var a=e.axis,r=a.dataToCoord(t),s=n.getAngleAxis().getExtent()[0];s=s/180*Math.PI;var l,u,h,c=n.getRadiusAxis().getExtent();if("radius"===a.dim){var d=xt();Mt(d,d,s),St(d,d,[n.cx,n.cy]),l=Do([r,-o],d);var f=e.getModel("axisLabel").get("rotate")||0,p=FD.innerTextLayout(s,f*Math.PI/180,-1);u=p.textAlign,h=p.textVerticalAlign;}else{var g=c[1];l=n.coordToPoint([g+o,r]);var m=n.cx,v=n.cy;u=Math.abs(l[0]-m)/g<.3?"center":l[0]>m?"left":"right",h=Math.abs(l[1]-v)/g<.3?"middle":l[1]>v?"top":"bottom";}return{position:l,align:u,verticalAlign:h};}function $v(t,e){e.update="updateView",Es(e,function(e,i){var n={};return i.eachComponent({mainType:"geo",query:e},function(i){i[t](e.name),d(i.coordinateSystem.regions,function(t){n[t.name]=i.isSelected(t.name)||!1;});}),{selected:n,name:e.name};});}function Jv(t){var e={};d(t,function(t){e[t]=1;}),t.length=0,d(e,function(e,i){t.push(i);});}function Qv(t){if(t)for(var e in t){if(t.hasOwnProperty(e))return!0;}}function ty(t,e,n){function o(){var t=function t(){};return t.prototype.__hidden=t.prototype,new t();}var a={};return MN(e,function(e){var r=a[e]=o();MN(t[e],function(t,o){if(hL.isValidType(o)){var a={type:o,visual:t};n&&n(a,e),r[o]=new hL(a),"opacity"===o&&((a=i(a)).type="colorAlpha",r.__hidden.__alphaForOpacity=new hL(a));}});}),a;}function ey(t,e,n){var o;d(n,function(t){e.hasOwnProperty(t)&&Qv(e[t])&&(o=!0);}),o&&d(n,function(n){e.hasOwnProperty(n)&&Qv(e[n])?t[n]=i(e[n]):delete t[n];});}function iy(t,e,i,n,o,a){function r(t){return i.getItemVisual(h,t);}function s(t,e){i.setItemVisual(h,t,e);}function l(t,l){h=null==a?t:l;var c=i.getRawDataItem(h);if(!c||!1!==c.visualMap)for(var d=n.call(o,t),f=e[d],p=u[d],g=0,m=p.length;g<m;g++){var v=p[g];f[v]&&f[v].applyVisual(t,r,s);}}var u={};d(t,function(t){var i=hL.prepareVisualTypes(e[t]);u[t]=i;});var h;null==a?i.each(l):i.each([a],l);}function ny(t,e,i,n){var o={};return d(t,function(t){var i=hL.prepareVisualTypes(e[t]);o[t]=i;}),{progress:function progress(t,a){null!=n&&(n=a.getDimension(n));for(var r;null!=(r=t.next());){var s=a.getRawDataItem(r);if(!s||!1!==s.visualMap)for(var l=null!=n?a.get(n,r,!0):r,u=i(l),h=e[u],c=o[u],d=0,f=c.length;d<f;d++){var p=c[d];h[p]&&h[p].applyVisual(l,function(t){return a.getItemVisual(r,t);},function(t,e){a.setItemVisual(r,t,e);});}}}};}function oy(t){var e=["x","y"],i=["width","height"];return{point:function point(e,i,n){if(e){var o=n.range;return ay(e[t],o);}},rect:function rect(n,o,a){if(n){var r=a.range,s=[n[e[t]],n[e[t]]+n[i[t]]];return s[1]<s[0]&&s.reverse(),ay(s[0],r)||ay(s[1],r)||ay(r[0],s)||ay(r[1],s);}}};}function ay(t,e){return e[0]<=t&&t<=e[1];}function ry(t,e,i,n,o){for(var a=0,r=o[o.length-1];a<o.length;a++){var s=o[a];if(sy(t,e,i,n,s[0],s[1],r[0],r[1]))return!0;r=s;}}function sy(t,e,i,n,o,a,r,s){var l=uy(i-t,o-r,n-e,a-s);if(ly(l))return!1;var u=uy(o-t,o-r,a-e,a-s)/l;if(u<0||u>1)return!1;var h=uy(i-t,o-t,n-e,a-e)/l;return!(h<0||h>1);}function ly(t){return t<=1e-6&&t>=-1e-6;}function uy(t,e,i,n){return t*n-e*i;}function hy(t,e,i){var n=this._targetInfoList=[],o={},a=dy(e,t);TN(PN,function(t,e){(!i||!i.include||AN(i.include,e)>=0)&&t(a,n,o);});}function cy(t){return t[0]>t[1]&&t.reverse(),t;}function dy(t,e){return Vi(t,e,{includeMainTypes:LN});}function fy(t,e,i,n){var o=i.getAxis(["x","y"][t]),a=cy(f([0,1],function(t){return e?o.coordToData(o.toLocalCoord(n[t])):o.toGlobalCoord(o.dataToCoord(n[t]));})),r=[];return r[t]=a,r[1-t]=[NaN,NaN],{values:a,xyMinMax:r};}function py(t,e,i,n){return[e[0]-n[t]*i[0],e[1]-n[t]*i[1]];}function gy(t,e){var i=my(t),n=my(e),o=[i[0]/n[0],i[1]/n[1]];return isNaN(o[0])&&(o[0]=1),isNaN(o[1])&&(o[1]=1),o;}function my(t){return t?[t[0][1]-t[0][0],t[1][1]-t[1][0]]:[NaN,NaN];}function vy(t,e,i,n,o){if(o){var a=t.getZr();a[VN]||(a[BN]||(a[BN]=yy),Nr(a,BN,i,e)(t,n));}}function yy(t,e){if(!t.isDisposed()){var i=t.getZr();i[VN]=!0,t.dispatchAction({type:"brushSelect",batch:e}),i[VN]=!1;}}function xy(t,e,i,n){for(var o=0,a=e.length;o<a;o++){var r=e[o];if(t[r.brushType](n,i,r.selectors,r))return!0;}}function _y(t){var e=t.brushSelector;if(_(e)){var i=[];return d(IN,function(t,n){i[n]=function(i,n,o,a){var r=n.getItemLayout(i);return t[e](r,o,a);};}),i;}if(x(e)){var n={};return d(IN,function(t,i){n[i]=e;}),n;}return e;}function wy(t,e){var i=t.option.seriesIndex;return null!=i&&"all"!==i&&(y(i)?l(i,e)<0:e!==i);}function by(t){var e=t.selectors={};return d(IN[t.brushType],function(i,n){e[n]=function(n){return i(n,e,t);};}),t;}function Sy(t){return new de(t[0][0],t[1][0],t[0][1]-t[0][0],t[1][1]-t[1][0]);}function My(t,e){return n({brushType:t.brushType,brushMode:t.brushMode,transformable:t.transformable,brushStyle:new No(t.brushStyle).getItemStyle(),removeOnClick:t.removeOnClick,z:t.z},e,!0);}function Iy(t,e,i,n){(!n||n.$from!==t.id)&&this._brushController.setPanels(t.brushTargetManager.makePanelOpts(i)).enableBrush(t.brushOption).updateCovers(t.areas.slice());}function Ty(t,e){HN[t]=e;}function Ay(t){return HN[t];}function Dy(t,e,i){this.model=t,this.ecModel=e,this.api=i,this._brushType,this._brushMode;}function Cy(t,e,i){this._model=t;}function Ly(t,e,i,n){var o=i.calendarModel,a=i.seriesModel,r=o?o.coordinateSystem:a?a.coordinateSystem:null;return r===this?r[t](n):null;}function ky(t,e){var i=t.cellSize;y(i)?1===i.length&&(i[1]=i[0]):i=t.cellSize=[i,i];var n=f([0,1],function(t){return fa(e,t)&&(i[t]="auto"),null!=i[t]&&"auto"!==i[t];});pa(t,e,{type:"box",ignoreSize:n});}function Py(t){return l(qN,t)>=0;}function Ny(t,e,i){function n(t,e){return l(e.nodes,t)>=0;}function o(t,n){var o=!1;return e(function(e){d(i(t,e)||[],function(t){n.records[e.name][t]&&(o=!0);});}),o;}function a(t,n){n.nodes.push(t),e(function(e){d(i(t,e)||[],function(t){n.records[e.name][t]=!0;});});}return function(i){var r={nodes:[],records:{}};if(e(function(t){r.records[t.name]={};}),!i)return r;a(i,r);var s;do{s=!1,t(function(t){!n(t,r)&&o(t,r)&&(a(t,r),s=!0);});}while(s);return r;};}function Oy(t,e,i){var n=[1/0,-1/0];return $N(i,function(t){var i=t.getData();i&&$N(i.mapDimension(e,!0),function(t){var e=i.getApproximateExtent(t);e[0]<n[0]&&(n[0]=e[0]),e[1]>n[1]&&(n[1]=e[1]);});}),n[1]<n[0]&&(n=[NaN,NaN]),Ey(t,n),n;}function Ey(t,e){var i=t.getAxisModel(),n=i.getMin(!0),o="category"===i.get("type"),a=o&&i.getCategories().length;null!=n&&"dataMin"!==n&&"function"!=typeof n?e[0]=n:o&&(e[0]=a>0?0:NaN);var r=i.getMax(!0);return null!=r&&"dataMax"!==r&&"function"!=typeof r?e[1]=r:o&&(e[1]=a>0?a-1:NaN),i.get("scale",!0)||(e[0]>0&&(e[0]=0),e[1]<0&&(e[1]=0)),e;}function Ry(t,e){var i=t.getAxisModel(),n=t._percentWindow,o=t._valueWindow;if(n){var a=Zo(o,[0,500]);a=Math.min(a,20);var r=e||0===n[0]&&100===n[1];i.setRange(r?null:+o[0].toFixed(a),r?null:+o[1].toFixed(a));}}function zy(t){var e=t._minMaxSpan={},i=t._dataZoomModel;$N(["min","max"],function(n){e[n+"Span"]=i.get(n+"Span");var o=i.get(n+"ValueSpan");if(null!=o&&(e[n+"ValueSpan"]=o,null!=(o=t.getAxisModel().axis.scale.parse(o)))){var a=t._dataExtent;e[n+"Span"]=Bo(a[0]+o,a,[0,100],!0);}});}function By(t){var e={};return tO(["start","end","startValue","endValue","throttle"],function(i){t.hasOwnProperty(i)&&(e[i]=t[i]);}),e;}function Vy(t,e){var i=t._rangePropMode,n=t.get("rangeMode");tO([["start","startValue"],["end","endValue"]],function(t,o){var a=null!=e[t[0]],r=null!=e[t[1]];a&&!r?i[o]="percent":!a&&r?i[o]="value":n?i[o]=n[o]:a&&(i[o]="percent");});}function Gy(t){return{x:"y",y:"x",radius:"angle",angle:"radius"}[t];}function Fy(t){return"vertical"===t?"ns-resize":"ew-resize";}function Wy(t,e){var i=Uy(t),n=e.dataZoomId,o=e.coordId;d(i,function(t,i){var a=t.dataZoomInfos;a[n]&&l(e.allCoordIds,o)<0&&(delete a[n],t.count--);}),jy(i);var a=i[o];a||((a=i[o]={coordId:o,dataZoomInfos:{},count:0}).controller=Xy(t,a),a.dispatchAction=v(Yy,t)),!a.dataZoomInfos[n]&&a.count++,a.dataZoomInfos[n]=e;var r=qy(a.dataZoomInfos);a.controller.enable(r.controlType,r.opt),a.controller.setPointerChecker(e.containsPoint),Nr(a,"dispatchAction",e.dataZoomModel.get("throttle",!0),"fixRate");}function Hy(t,e){var i=Uy(t);d(i,function(t){t.controller.dispose();var i=t.dataZoomInfos;i[e]&&(delete i[e],t.count--);}),jy(i);}function Zy(t){return t.type+"\0_"+t.id;}function Uy(t){var e=t.getZr();return e[fO]||(e[fO]={});}function Xy(t,e){var i=new oc(t.getZr());return d(["pan","zoom","scrollMove"],function(t){i.on(t,function(i){var n=[];d(e.dataZoomInfos,function(o){if(i.isAvailableBehavior(o.dataZoomModel.option)){var a=(o.getRange||{})[t],r=a&&a(e.controller,i);!o.dataZoomModel.get("disabled",!0)&&r&&n.push({dataZoomId:o.dataZoomId,start:r[0],end:r[1]});}}),n.length&&e.dispatchAction(n);});}),i;}function jy(t){d(t,function(e,i){e.count||(e.controller.dispose(),delete t[i]);});}function Yy(t,e){t.dispatchAction({type:"dataZoom",batch:e});}function qy(t){var e,i={type_true:2,type_move:1,type_false:0,type_undefined:-1},n=!0;return d(t,function(t){var o=t.dataZoomModel,a=!o.get("disabled",!0)&&(!o.get("zoomLock",!0)||"move");i["type_"+a]>i["type_"+e]&&(e=a),n&=o.get("preventDefaultMouseMove",!0);}),{controlType:e,opt:{zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!0,preventDefaultMouseMove:!!n}};}function Ky(t){return function(e,i,n,o){var a=this._range,r=a.slice(),s=e.axisModels[0];if(s){var l=t(r,s,e,i,n,o);return QL(l,r,[0,100],"all"),this._range=r,a[0]!==r[0]||a[1]!==r[1]?r:void 0;}};}function $y(t,e){return t&&t.hasOwnProperty&&t.hasOwnProperty(e);}function Jy(t,e,i,n){for(var o=e.targetVisuals[n],a=hL.prepareVisualTypes(o),r={color:t.getData().getVisual("color")},s=0,l=a.length;s<l;s++){var u=a[s],h=o["opacity"===u?"__alphaForOpacity":u];h&&h.applyVisual(i,function(t){return r[t];},function(t,e){r[t]=e;});}return r.color;}function Qy(t,e,i){if(i[0]===i[1])return i.slice();for(var n=(i[1]-i[0])/200,o=i[0],a=[],r=0;r<=200&&o<i[1];r++){a.push(o),o+=n;}return a.push(i[1]),a;}function tx(t,e,i){var n=t.option,o=n.align;if(null!=o&&"auto"!==o)return o;for(var a={width:e.getWidth(),height:e.getHeight()},r="horizontal"===n.orient?1:0,s=[["left","right","width"],["top","bottom","height"]],l=s[r],u=[0,null,10],h={},c=0;c<3;c++){h[s[1-r][c]]=u[c],h[l[c]]=2===c?i[0]:n[l[c]];}var d=[["x","width",3],["y","height",0]][r],f=ca(h,a,n.padding);return l[(f.margin[d[2]]||0)+f[d[0]]+.5*f[d[1]]<.5*a[d[1]]?0:1];}function ex(t){return d(t||[],function(e){null!=t.dataIndex&&(t.dataIndexInside=t.dataIndex,t.dataIndex=null);}),t;}function ix(t,e,i,n){return new pM({shape:{points:t},draggable:!!i,cursor:e,drift:i,onmousemove:function onmousemove(t){mw(t.event);},ondragend:n});}function nx(t,e){return 0===t?[[0,0],[e,0],[e,-e]]:[[0,0],[e,0],[e,e]];}function ox(t,e,i,n){return t?[[0,-RO(e,zO(i,0))],[VO,0],[0,RO(e,zO(n-i,0))]]:[[0,0],[5,-5],[5,5]];}function ax(t,e,i){var n=BO/2,o=t.get("hoverLinkDataSize");return o&&(n=OO(o,e,i,!0)/2),n;}function rx(t){var e=t.get("hoverLinkOnHandle");return!!(null==e?t.get("realtime"):e);}function sx(t){return"vertical"===t?"ns-resize":"ew-resize";}function lx(t,e){var i=t.inverse;("vertical"===t.orient?!i:i)&&e.reverse();}function ux(t){Ci(t,"label",["show"]);}function hx(t){return!(isNaN(parseFloat(t.x))&&isNaN(parseFloat(t.y)));}function cx(t){return!isNaN(parseFloat(t.x))&&!isNaN(parseFloat(t.y));}function dx(t,e,i,n,o,a){var r=[],s=pl(e,n)?e.getCalculationInfo("stackResultDimension"):n,l=yx(e,s,t),u=e.indicesOfNearest(s,l)[0];r[o]=e.get(i,u),r[a]=e.get(n,u);var h=Wo(e.get(n,u));return(h=Math.min(h,20))>=0&&(r[a]=+r[a].toFixed(h)),r;}function fx(t,e){var n=t.getData(),o=t.coordinateSystem;if(e&&!cx(e)&&!y(e.coord)&&o){var a=o.dimensions,r=px(e,n,o,t);if((e=i(e)).type&&YO[e.type]&&r.baseAxis&&r.valueAxis){var s=XO(a,r.baseAxis.dim),l=XO(a,r.valueAxis.dim);e.coord=YO[e.type](n,r.baseDataDim,r.valueDataDim,s,l),e.value=e.coord[l];}else{for(var u=[null!=e.xAxis?e.xAxis:e.radiusAxis,null!=e.yAxis?e.yAxis:e.angleAxis],h=0;h<2;h++){YO[u[h]]&&(u[h]=yx(n,n.mapDimension(a[h]),u[h]));}e.coord=u;}}return e;}function px(t,e,i,n){var o={};return null!=t.valueIndex||null!=t.valueDim?(o.valueDataDim=null!=t.valueIndex?e.getDimension(t.valueIndex):t.valueDim,o.valueAxis=i.getAxis(gx(n,o.valueDataDim)),o.baseAxis=i.getOtherAxis(o.valueAxis),o.baseDataDim=e.mapDimension(o.baseAxis.dim)):(o.baseAxis=n.getBaseAxis(),o.valueAxis=i.getOtherAxis(o.baseAxis),o.baseDataDim=e.mapDimension(o.baseAxis.dim),o.valueDataDim=e.mapDimension(o.valueAxis.dim)),o;}function gx(t,e){var i=t.getData(),n=i.dimensions;e=i.getDimension(e);for(var o=0;o<n.length;o++){var a=i.getDimensionInfo(n[o]);if(a.name===e)return a.coordDim;}}function mx(t,e){return!(t&&t.containData&&e.coord&&!hx(e))||t.containData(e.coord);}function vx(t,e,i,n){return n<2?t.coord&&t.coord[n]:t.value;}function yx(t,e,i){if("average"===i){var n=0,o=0;return t.each(e,function(t,e){isNaN(t)||(n+=t,o++);}),n/o;}return"median"===i?t.getMedian(e):t.getDataExtent(e,!0)["max"===i?1:0];}function xx(t,e,i){var n=e.coordinateSystem;t.each(function(o){var a,r=t.getItemModel(o),s=Vo(r.get("x"),i.getWidth()),l=Vo(r.get("y"),i.getHeight());if(isNaN(s)||isNaN(l)){if(e.getMarkerPosition)a=e.getMarkerPosition(t.getValues(t.dimensions,o));else if(n){var u=t.get(n.dimensions[0],o),h=t.get(n.dimensions[1],o);a=n.dataToPoint([u,h]);}}else a=[s,l];isNaN(s)||(a[0]=s),isNaN(l)||(a[1]=l),t.setItemLayout(o,a);});}function _x(t,e,i){var n;n=t?f(t&&t.dimensions,function(t){return r({name:t},e.getData().getDimensionInfo(e.getData().mapDimension(t))||{});}):[{name:"value",type:"float"}];var o=new vA(n,i),a=f(i.get("data"),v(fx,e));return t&&(a=g(a,v(mx,t))),o.initData(a,null,t?vx:function(t){return t.value;}),o;}function bx(t){return!isNaN(t)&&!isFinite(t);}function Sx(t,e,i,n){var o=1-t,a=n.dimensions[t];return bx(e[o])&&bx(i[o])&&e[t]===i[t]&&n.getAxis(a).containData(e[t]);}function Mx(t,e){if("cartesian2d"===t.type){var i=e[0].coord,n=e[1].coord;if(i&&n&&(Sx(1,i,n,t)||Sx(0,i,n,t)))return!0;}return mx(t,e[0])&&mx(t,e[1]);}function Ix(t,e,i,n,o){var a,r=n.coordinateSystem,s=t.getItemModel(e),l=Vo(s.get("x"),o.getWidth()),u=Vo(s.get("y"),o.getHeight());if(isNaN(l)||isNaN(u)){if(n.getMarkerPosition)a=n.getMarkerPosition(t.getValues(t.dimensions,e));else{var h=r.dimensions,c=t.get(h[0],e),d=t.get(h[1],e);a=r.dataToPoint([c,d]);}if("cartesian2d"===r.type){var f=r.getAxis("x"),p=r.getAxis("y"),h=r.dimensions;bx(t.get(h[0],e))?a[0]=f.toGlobalCoord(f.getExtent()[i?0:1]):bx(t.get(h[1],e))&&(a[1]=p.toGlobalCoord(p.getExtent()[i?0:1]));}isNaN(l)||(a[0]=l),isNaN(u)||(a[1]=u);}else a=[l,u];t.setItemLayout(e,a);}function Tx(t,e,i){var n;n=t?f(t&&t.dimensions,function(t){return r({name:t},e.getData().getDimensionInfo(e.getData().mapDimension(t))||{});}):[{name:"value",type:"float"}];var o=new vA(n,i),a=new vA(n,i),s=new vA([],i),l=f(i.get("data"),v(KO,e,t,i));t&&(l=g(l,v(Mx,t)));var u=t?vx:function(t){return t.value;};return o.initData(f(l,function(t){return t[0];}),null,u),a.initData(f(l,function(t){return t[1];}),null,u),s.initData(f(l,function(t){return t[2];})),s.hasItemOption=!0,{from:o,to:a,line:s};}function Ax(t){return!isNaN(t)&&!isFinite(t);}function Dx(t,e,i,n){var o=1-t;return Ax(e[o])&&Ax(i[o]);}function Cx(t,e){var i=e.coord[0],n=e.coord[1];return!("cartesian2d"!==t.type||!i||!n||!Dx(1,i,n,t)&&!Dx(0,i,n,t))||mx(t,{coord:i,x:e.x0,y:e.y0})||mx(t,{coord:n,x:e.x1,y:e.y1});}function Lx(t,e,i,n,o){var a,r=n.coordinateSystem,s=t.getItemModel(e),l=Vo(s.get(i[0]),o.getWidth()),u=Vo(s.get(i[1]),o.getHeight());if(isNaN(l)||isNaN(u)){if(n.getMarkerPosition)a=n.getMarkerPosition(t.getValues(i,e));else{var h=[f=t.get(i[0],e),p=t.get(i[1],e)];r.clampData&&r.clampData(h,h),a=r.dataToPoint(h,!0);}if("cartesian2d"===r.type){var c=r.getAxis("x"),d=r.getAxis("y"),f=t.get(i[0],e),p=t.get(i[1],e);Ax(f)?a[0]=c.toGlobalCoord(c.getExtent()["x0"===i[0]?0:1]):Ax(p)&&(a[1]=d.toGlobalCoord(d.getExtent()["y0"===i[1]?0:1]));}isNaN(l)||(a[0]=l),isNaN(u)||(a[1]=u);}else a=[l,u];return a;}function kx(t,e,i){var n,o,a=["x0","y0","x1","y1"];t?(n=f(t&&t.dimensions,function(t){var i=e.getData();return r({name:t},i.getDimensionInfo(i.mapDimension(t))||{});}),o=new vA(f(a,function(t,e){return{name:t,type:n[e%2].type};}),i)):o=new vA(n=[{name:"value",type:"float"}],i);var s=f(i.get("data"),v($O,e,t,i));t&&(s=g(s,v(Cx,t)));var l=t?function(t,e,i,n){return t.coord[Math.floor(n/2)][n%2];}:function(t){return t.value;};return o.initData(s,null,l),o.hasItemOption=!0,o;}function Px(t){var e=t.type,i={number:"value",time:"time"};if(i[e]&&(t.axisType=i[e],delete t.type),Nx(t),Ox(t,"controlPosition")){var n=t.controlStyle||(t.controlStyle={});Ox(n,"position")||(n.position=t.controlPosition),"none"!==n.position||Ox(n,"show")||(n.show=!1,delete n.position),delete t.controlPosition;}d(t.data||[],function(t){w(t)&&!y(t)&&(!Ox(t,"value")&&Ox(t,"name")&&(t.value=t.name),Nx(t));});}function Nx(t){var e=t.itemStyle||(t.itemStyle={}),i=e.emphasis||(e.emphasis={}),n=t.label||t.label||{},o=n.normal||(n.normal={}),a={normal:1,emphasis:1};d(n,function(t,e){a[e]||Ox(o,e)||(o[e]=t);}),i.label&&!Ox(n,"emphasis")&&(n.emphasis=i.label,delete i.label);}function Ox(t,e){return t.hasOwnProperty(e);}function Ex(t,e){return ca(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()},t.get("padding"));}function Rx(t,e,n,o){return Xn(t.get(e).replace(/^path:\/\//,""),i(o||{}),new de(n[0],n[1],n[2],n[3]),"center");}function zx(t,e,i,o,a,r){var s=e.get("color");a?(a.setColor(s),i.add(a),r&&r.onUpdate(a)):((a=Jl(t.get("symbol"),-1,-1,2,2,s)).setStyle("strokeNoScale",!0),i.add(a),r&&r.onCreate(a));var l=e.getItemStyle(["color","symbol","symbolSize"]);a.setStyle(l),o=n({rectHover:!0,z2:100},o,!0);var u=t.get("symbolSize");(u=u instanceof Array?u.slice():[+u,+u])[0]/=2,u[1]/=2,o.scale=u;var h=t.get("symbolOffset");if(h){var c=o.position=o.position||[0,0];c[0]+=Vo(h[0],u[0]),c[1]+=Vo(h[1],u[1]);}var d=t.get("symbolRotate");return o.rotation=(d||0)*Math.PI/180||0,a.attr(o),a.updateTransform(),a;}function Bx(t,e,i,n,o){if(!t.dragging){var a=n.getModel("checkpointStyle"),r=i.dataToCoord(n.getData().get(["value"],e));o||!a.get("animation",!0)?t.attr({position:[r,0]}):(t.stopAnimation(!0),t.animateTo({position:[r,0]},a.get("animationDuration",!0),a.get("animationEasing",!0)));}}function Vx(t){return 0===t.indexOf("my");}function Gx(t){this.model=t;}function Fx(t){this.model=t;}function Wx(t){var e={},i=[],n=[];return t.eachRawSeries(function(t){var o=t.coordinateSystem;if(!o||"cartesian2d"!==o.type&&"polar"!==o.type)i.push(t);else{var a=o.getBaseAxis();if("category"===a.type){var r=a.dim+"_"+a.index;e[r]||(e[r]={categoryAxis:a,valueAxis:o.getOtherAxis(a),series:[]},n.push({axisDim:a.dim,axisIndex:a.index})),e[r].series.push(t);}else i.push(t);}}),{seriesGroupByCategoryAxis:e,other:i,meta:n};}function Hx(t){var e=[];return d(t,function(t,i){var n=t.categoryAxis,o=t.valueAxis.dim,a=[" "].concat(f(t.series,function(t){return t.name;})),r=[n.model.getCategories()];d(t.series,function(t){r.push(t.getRawData().mapArray(o,function(t){return t;}));});for(var s=[a.join(fE)],l=0;l<r[0].length;l++){for(var u=[],h=0;h<r.length;h++){u.push(r[h][l]);}s.push(u.join(fE));}e.push(s.join("\n"));}),e.join("\n\n"+dE+"\n\n");}function Zx(t){return f(t,function(t){var e=t.getRawData(),i=[t.name],n=[];return e.each(e.dimensions,function(){for(var t=arguments.length,o=arguments[t-1],a=e.getName(o),r=0;r<t-1;r++){n[r]=arguments[r];}i.push((a?a+fE:"")+n.join(fE));}),i.join("\n");}).join("\n\n"+dE+"\n\n");}function Ux(t){var e=Wx(t);return{value:g([Hx(e.seriesGroupByCategoryAxis),Zx(e.other)],function(t){return t.replace(/[\n\t\s]/g,"");}).join("\n\n"+dE+"\n\n"),meta:e.meta};}function Xx(t){return t.replace(/^\s\s*/,"").replace(/\s\s*$/,"");}function jx(t){if(t.slice(0,t.indexOf("\n")).indexOf(fE)>=0)return!0;}function Yx(t){for(var e=t.split(/\n+/g),i=[],n=f(Xx(e.shift()).split(pE),function(t){return{name:t,data:[]};}),o=0;o<e.length;o++){var a=Xx(e[o]).split(pE);i.push(a.shift());for(var r=0;r<a.length;r++){n[r]&&(n[r].data[o]=a[r]);}}return{series:n,categories:i};}function qx(t){for(var e=t.split(/\n+/g),i=Xx(e.shift()),n=[],o=0;o<e.length;o++){var a,r=Xx(e[o]).split(pE),s="",l=!1;isNaN(r[0])?(l=!0,s=r[0],r=r.slice(1),n[o]={name:s,value:[]},a=n[o].value):a=n[o]=[];for(var u=0;u<r.length;u++){a.push(+r[u]);}1===a.length&&(l?n[o].value=a[0]:n[o]=a[0]);}return{name:i,data:n};}function Kx(t,e){var i={series:[]};return d(t.split(new RegExp("\n*"+dE+"\n*","g")),function(t,n){if(jx(t)){var o=Yx(t),a=e[n],r=a.axisDim+"Axis";a&&(i[r]=i[r]||[],i[r][a.axisIndex]={data:o.categories},i.series=i.series.concat(o.series));}else{o=qx(t);i.series.push(o);}}),i;}function $x(t){this._dom=null,this.model=t;}function Jx(t,e){return f(t,function(t,i){var n=e&&e[i];return w(n)&&!y(n)?(w(t)&&!y(t)&&(t=t.value),r({value:t},n)):t;});}function Qx(t,e){var i=n_(t);gE(e,function(e,n){for(var o=i.length-1;o>=0&&!i[o][n];o--){;}if(o<0){var a=t.queryComponents({mainType:"dataZoom",subType:"select",id:n})[0];if(a){var r=a.getPercentRange();i[0][n]={dataZoomId:n,start:r[0],end:r[1]};}}}),i.push(e);}function t_(t){var e=n_(t),i=e[e.length-1];e.length>1&&e.pop();var n={};return gE(i,function(t,i){for(var o=e.length-1;o>=0;o--){if(t=e[o][i]){n[i]=t;break;}}}),n;}function e_(t){t[mE]=null;}function i_(t){return n_(t).length;}function n_(t){var e=t[mE];return e||(e=t[mE]=[{}]),e;}function o_(t,e,i){(this._brushController=new zf(i.getZr())).on("brush",m(this._onBrush,this)).mount(),this._isZoomActive;}function a_(t){var e={};return d(["xAxisIndex","yAxisIndex"],function(i){e[i]=t[i],null==e[i]&&(e[i]="all"),(!1===e[i]||"none"===e[i])&&(e[i]=[]);}),e;}function r_(t,e){t.setIconStatus("back",i_(e)>1?"emphasis":"normal");}function s_(t,e,i,n,o){var a=i._isZoomActive;n&&"takeGlobalCursor"===n.type&&(a="dataZoomSelect"===n.key&&n.dataZoomSelectActive),i._isZoomActive=a,t.setIconStatus("zoom",a?"emphasis":"normal");var r=new hy(a_(t.option),e,{include:["grid"]});i._brushController.setPanels(r.makePanelOpts(o,function(t){return t.xAxisDeclared&&!t.yAxisDeclared?"lineX":!t.xAxisDeclared&&t.yAxisDeclared?"lineY":"rect";})).enableBrush(!!a&&{brushType:"auto",brushStyle:{lineWidth:0,fill:"rgba(0,0,0,0.2)"}});}function l_(t){this.model=t;}function u_(t){return SE(t);}function h_(){if(!TE&&AE){TE=!0;var t=AE.styleSheets;t.length<31?AE.createStyleSheet().addRule(".zrvml","behavior:url(#default#VML)"):t[0].addRule(".zrvml","behavior:url(#default#VML)");}}function c_(t){return parseInt(t,10);}function d_(t,e){h_(),this.root=t,this.storage=e;var i=document.createElement("div"),n=document.createElement("div");i.style.cssText="display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;",n.style.cssText="position:absolute;left:0;top:0;",t.appendChild(i),this._vmlRoot=n,this._vmlViewport=i,this.resize();var o=e.delFromStorage,a=e.addToStorage;e.delFromStorage=function(t){o.call(e,t),t&&t.onRemove&&t.onRemove(n);},e.addToStorage=function(t){t.onAdd&&t.onAdd(n),a.call(e,t);},this._firstPaint=!0;}function f_(t){return function(){Yw('In IE8.0 VML mode painter not support method "'+t+'"');};}function p_(t){return document.createElementNS(sR,t);}function g_(t){return cR(1e4*t)/1e4;}function m_(t){return t<vR&&t>-vR;}function v_(t,e){var i=e?t.textFill:t.fill;return null!=i&&i!==hR;}function y_(t,e){var i=e?t.textStroke:t.stroke;return null!=i&&i!==hR;}function x_(t,e){e&&__(t,"transform","matrix("+uR.call(e,",")+")");}function __(t,e,i){(!i||"linear"!==i.type&&"radial"!==i.type)&&t.setAttribute(e,i);}function w_(t,e,i){t.setAttributeNS("http://www.w3.org/1999/xlink",e,i);}function b_(t,e,i,n){if(v_(e,i)){var o=i?e.textFill:e.fill;o="transparent"===o?hR:o,"none"!==t.getAttribute("clip-path")&&o===hR&&(o="rgba(0, 0, 0, 0.002)"),__(t,"fill",o),__(t,"fill-opacity",null!=e.fillOpacity?e.fillOpacity*e.opacity:e.opacity);}else __(t,"fill",hR);if(y_(e,i)){var a=i?e.textStroke:e.stroke;__(t,"stroke",a="transparent"===a?hR:a),__(t,"stroke-width",(i?e.textStrokeWidth:e.lineWidth)/(!i&&e.strokeNoScale?n.getLineScale():1)),__(t,"paint-order",i?"stroke":"fill"),__(t,"stroke-opacity",null!=e.strokeOpacity?e.strokeOpacity:e.opacity),e.lineDash?(__(t,"stroke-dasharray",e.lineDash.join(",")),__(t,"stroke-dashoffset",cR(e.lineDashOffset||0))):__(t,"stroke-dasharray",""),e.lineCap&&__(t,"stroke-linecap",e.lineCap),e.lineJoin&&__(t,"stroke-linejoin",e.lineJoin),e.miterLimit&&__(t,"stroke-miterlimit",e.miterLimit);}else __(t,"stroke",hR);}function S_(t){for(var e=[],i=t.data,n=t.len(),o=0;o<n;){var a="",r=0;switch(i[o++]){case lR.M:a="M",r=2;break;case lR.L:a="L",r=2;break;case lR.Q:a="Q",r=4;break;case lR.C:a="C",r=6;break;case lR.A:var s=i[o++],l=i[o++],u=i[o++],h=i[o++],c=i[o++],d=i[o++],f=i[o++],p=i[o++],g=Math.abs(d),m=m_(g-gR)&&!m_(g),v=!1;v=g>=gR||!m_(g)&&(d>-pR&&d<0||d>pR)==!!p;var y=g_(s+u*fR(c)),x=g_(l+h*dR(c));m&&(d=p?gR-1e-4:1e-4-gR,v=!0,9===o&&e.push("M",y,x));var _=g_(s+u*fR(c+d)),w=g_(l+h*dR(c+d));e.push("A",g_(u),g_(h),cR(f*mR),+v,+p,_,w);break;case lR.Z:a="Z";break;case lR.R:var _=g_(i[o++]),w=g_(i[o++]),b=g_(i[o++]),S=g_(i[o++]);e.push("M",_,w,"L",_+b,w,"L",_+b,w+S,"L",_,w+S,"L",_,w);}a&&e.push(a);for(var M=0;M<r;M++){e.push(g_(i[o++]));}}return e.join(" ");}function M_(t){return"middle"===t?"middle":"bottom"===t?"after-edge":"hanging";}function I_(){}function T_(t,e,i,n){for(var o=0,a=e.length,r=0,s=0;o<a;o++){var l=e[o];if(l.removed){for(var u=[],h=s;h<s+l.count;h++){u.push(h);}l.indices=u,s+=l.count;}else{for(var u=[],h=r;h<r+l.count;h++){u.push(h);}l.indices=u,r+=l.count,l.added||(s+=l.count);}}return e;}function A_(t){return{newPos:t.newPos,components:t.components.slice(0)};}function D_(t,e,i,n,o){this._zrId=t,this._svgRoot=e,this._tagNames="string"==typeof i?[i]:i,this._markLabel=n,this._domName=o||"_dom",this.nextId=0;}function C_(t,e){D_.call(this,t,e,["linearGradient","radialGradient"],"__gradient_in_use__");}function L_(t,e){D_.call(this,t,e,"clipPath","__clippath_in_use__");}function k_(t,e){D_.call(this,t,e,["filter"],"__filter_in_use__","_shadowDom");}function P_(t){return t&&(t.shadowBlur||t.shadowOffsetX||t.shadowOffsetY||t.textShadowBlur||t.textShadowOffsetX||t.textShadowOffsetY);}function N_(t){return parseInt(t,10);}function O_(t){return t instanceof Pn?yR:t instanceof fi?xR:t instanceof rM?_R:yR;}function E_(t,e){return e&&t&&e.parentNode!==t;}function R_(t,e,i){if(E_(t,e)&&i){var n=i.nextSibling;n?t.insertBefore(e,n):t.appendChild(e);}}function z_(t,e){if(E_(t,e)){var i=t.firstChild;i?t.insertBefore(e,i):t.appendChild(e);}}function B_(t,e){e&&t&&e.parentNode===t&&t.removeChild(e);}function V_(t){return t.__textSvgEl;}function G_(t){return t.__svgEl;}function F_(t){return function(){Yw('In SVG mode painter not support method "'+t+'"');};}var W_=2311,H_=function H_(){return W_++;},Z_={},U_=Z_="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0,domSupported:!1}:"undefined"==typeof document&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0,domSupported:!1}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0,domSupported:!1}:function(t){var e={},i={},n=t.match(/Firefox\/([\d.]+)/),o=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),a=t.match(/Edge\/([\d.]+)/),r=/micromessenger/i.test(t);return n&&(i.firefox=!0,i.version=n[1]),o&&(i.ie=!0,i.version=o[1]),a&&(i.edge=!0,i.version=a[1]),r&&(i.weChat=!0),{browser:i,os:e,node:!1,canvasSupported:!!document.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in window&&!i.ie&&!i.edge,pointerEventsSupported:"onpointerdown"in window&&(i.edge||i.ie&&i.version>=11),domSupported:"undefined"!=typeof document};}(navigator.userAgent),X_={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},j_={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},Y_=Object.prototype.toString,q_=Array.prototype,K_=q_.forEach,$_=q_.filter,J_=q_.slice,Q_=q_.map,tw=q_.reduce,ew={},iw=function iw(){return ew.createCanvas();};ew.createCanvas=function(){return document.createElement("canvas");};var nw,ow="__ec_primitive__";E.prototype={constructor:E,get:function get(t){return this.data.hasOwnProperty(t)?this.data[t]:null;},set:function set(t,e){return this.data[t]=e;},each:function each(t,e){void 0!==e&&(t=m(t,e));for(var i in this.data){this.data.hasOwnProperty(i)&&t(this.data[i],i);}},removeKey:function removeKey(t){delete this.data[t];}};var aw=(Object.freeze||Object)({$override:e,clone:i,merge:n,mergeAll:o,extend:a,defaults:r,createCanvas:iw,getContext:s,indexOf:l,inherits:u,mixin:h,isArrayLike:c,each:d,map:f,reduce:p,filter:g,find:function find(t,e,i){if(t&&e)for(var n=0,o=t.length;n<o;n++){if(e.call(i,t[n],n,t))return t[n];}},bind:m,curry:v,isArray:y,isFunction:x,isString:_,isObject:w,isBuiltInObject:b,isTypedArray:S,isDom:M,eqNaN:I,retrieve:T,retrieve2:A,retrieve3:D,slice:C,normalizeCssArray:L,assert:k,trim:P,setAsPrimitive:N,isPrimitive:O,createHashMap:R,concatArray:z,noop:B}),rw="undefined"==typeof Float32Array?Array:Float32Array,sw=X,lw=j,uw=K,hw=$,cw=(Object.freeze||Object)({create:V,copy:G,clone:F,set:W,add:H,scaleAndAdd:Z,sub:U,len:X,length:sw,lenSquare:j,lengthSquare:lw,mul:function mul(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t;},div:function div(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t;},dot:function dot(t,e){return t[0]*e[0]+t[1]*e[1];},scale:Y,normalize:q,distance:K,dist:uw,distanceSquare:$,distSquare:hw,negate:function negate(t,e){return t[0]=-e[0],t[1]=-e[1],t;},lerp:J,applyTransform:Q,min:tt,max:et});it.prototype={constructor:it,_dragStart:function _dragStart(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(nt(e,t),"dragstart",t.event));},_drag:function _drag(t){var e=this._draggingTarget;if(e){var i=t.offsetX,n=t.offsetY,o=i-this._x,a=n-this._y;this._x=i,this._y=n,e.drift(o,a,t),this.dispatchToElement(nt(e,t),"drag",t.event);var r=this.findHover(i,n,e).target,s=this._dropTarget;this._dropTarget=r,e!==r&&(s&&r!==s&&this.dispatchToElement(nt(s,t),"dragleave",t.event),r&&r!==s&&this.dispatchToElement(nt(r,t),"dragenter",t.event));}},_dragEnd:function _dragEnd(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(nt(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(nt(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null;}};var dw=Array.prototype.slice,fw=function fw(t){this._$handlers={},this._$eventProcessor=t;};fw.prototype={constructor:fw,one:function one(t,e,i,n){return at(this,t,e,i,n,!0);},on:function on(t,e,i,n){return at(this,t,e,i,n,!1);},isSilent:function isSilent(t){var e=this._$handlers;return!e[t]||!e[t].length;},off:function off(t,e){var i=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(i[t]){for(var n=[],o=0,a=i[t].length;o<a;o++){i[t][o].h!==e&&n.push(i[t][o]);}i[t]=n;}i[t]&&0===i[t].length&&delete i[t];}else delete i[t];return this;},trigger:function trigger(t){var e=this._$handlers[t],i=this._$eventProcessor;if(e){var n=arguments,o=n.length;o>3&&(n=dw.call(n,1));for(var a=e.length,r=0;r<a;){var s=e[r];if(i&&i.filter&&null!=s.query&&!i.filter(t,s.query))r++;else{switch(o){case 1:s.h.call(s.ctx);break;case 2:s.h.call(s.ctx,n[1]);break;case 3:s.h.call(s.ctx,n[1],n[2]);break;default:s.h.apply(s.ctx,n);}s.one?(e.splice(r,1),a--):r++;}}}return i&&i.afterTrigger&&i.afterTrigger(t),this;},triggerWithContext:function triggerWithContext(t){var e=this._$handlers[t],i=this._$eventProcessor;if(e){var n=arguments,o=n.length;o>4&&(n=dw.call(n,1,n.length-1));for(var a=n[n.length-1],r=e.length,s=0;s<r;){var l=e[s];if(i&&i.filter&&null!=l.query&&!i.filter(t,l.query))s++;else{switch(o){case 1:l.h.call(a);break;case 2:l.h.call(a,n[1]);break;case 3:l.h.call(a,n[1],n[2]);break;default:l.h.apply(a,n);}l.one?(e.splice(s,1),r--):s++;}}}return i&&i.afterTrigger&&i.afterTrigger(t),this;}};var pw="undefined"!=typeof window&&!!window.addEventListener,gw=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,mw=pw?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0;}:function(t){t.returnValue=!1,t.cancelBubble=!0;},vw=function vw(){this._track=[];};vw.prototype={constructor:vw,recognize:function recognize(t,e,i){return this._doTrack(t,e,i),this._recognize(t);},clear:function clear(){return this._track.length=0,this;},_doTrack:function _doTrack(t,e,i){var n=t.touches;if(n){for(var o={points:[],touches:[],target:e,event:t},a=0,r=n.length;a<r;a++){var s=n[a],l=st(i,s,{});o.points.push([l.zrX,l.zrY]),o.touches.push(s);}this._track.push(o);}},_recognize:function _recognize(t){for(var e in yw){if(yw.hasOwnProperty(e)){var i=yw[e](this._track,t);if(i)return i;}}}};var yw={pinch:function pinch(t,e){var i=t.length;if(i){var n=(t[i-1]||{}).points,o=(t[i-2]||{}).points||n;if(o&&o.length>1&&n&&n.length>1){var a=ft(n)/ft(o);!isFinite(a)&&(a=1),e.pinchScale=a;var r=pt(n);return e.pinchX=r[0],e.pinchY=r[1],{type:"pinch",target:t[0].target,event:e};}}}},xw="silent";vt.prototype.dispose=function(){};var _w=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],ww=function ww(t,e,i,n){fw.call(this),this.storage=t,this.painter=e,this.painterRoot=n,i=i||new vt(),this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,this._gestureMgr,it.call(this),this.setHandlerProxy(i);};ww.prototype={constructor:ww,setHandlerProxy:function setHandlerProxy(t){this.proxy&&this.proxy.dispose(),t&&(d(_w,function(e){t.on&&t.on(e,this[e],this);},this),t.handler=this),this.proxy=t;},mousemove:function mousemove(t){var e=t.zrX,i=t.zrY,n=this._hovered,o=n.target;o&&!o.__zr&&(o=(n=this.findHover(n.x,n.y)).target);var a=this._hovered=this.findHover(e,i),r=a.target,s=this.proxy;s.setCursor&&s.setCursor(r?r.cursor:"default"),o&&r!==o&&this.dispatchToElement(n,"mouseout",t),this.dispatchToElement(a,"mousemove",t),r&&r!==o&&this.dispatchToElement(a,"mouseover",t);},mouseout:function mouseout(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,i=t.toElement||t.relatedTarget;do{i=i&&i.parentNode;}while(i&&9!==i.nodeType&&!(e=i===this.painterRoot));!e&&this.trigger("globalout",{event:t});},resize:function resize(t){this._hovered={};},dispatch:function dispatch(t,e){var i=this[t];i&&i.call(this,e);},dispose:function dispose(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null;},setCursorStyle:function setCursorStyle(t){var e=this.proxy;e.setCursor&&e.setCursor(t);},dispatchToElement:function dispatchToElement(t,e,i){var n=(t=t||{}).target;if(!n||!n.silent){for(var o="on"+e,a=gt(e,t,i);n&&(n[o]&&(a.cancelBubble=n[o].call(n,a)),n.trigger(e,a),n=n.parent,!a.cancelBubble);){;}a.cancelBubble||(this.trigger(e,a),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[o]&&t[o].call(t,a),t.trigger&&t.trigger(e,a);}));}},findHover:function findHover(t,e,i){for(var n=this.storage.getDisplayList(),o={x:t,y:e},a=n.length-1;a>=0;a--){var r;if(n[a]!==i&&!n[a].ignore&&(r=yt(n[a],t,e))&&(!o.topTarget&&(o.topTarget=n[a]),r!==xw)){o.target=n[a];break;}}return o;},processGesture:function processGesture(t,e){this._gestureMgr||(this._gestureMgr=new vw());var i=this._gestureMgr;"start"===e&&i.clear();var n=i.recognize(t,this.findHover(t.zrX,t.zrY,null).target,this.proxy.dom);if("end"===e&&i.clear(),n){var o=n.type;t.gestureEvent=o,this.dispatchToElement({target:n.target},o,n.event);}}},d(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){ww.prototype[t]=function(e){var i=this.findHover(e.zrX,e.zrY),n=i.target;if("mousedown"===t)this._downEl=n,this._downPoint=[e.zrX,e.zrY],this._upEl=n;else if("mouseup"===t)this._upEl=n;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||uw(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null;}this.dispatchToElement(i,t,e);};}),h(ww,fw),h(ww,it);var bw="undefined"==typeof Float32Array?Array:Float32Array,Sw=(Object.freeze||Object)({create:xt,identity:_t,copy:wt,mul:bt,translate:St,rotate:Mt,scale:It,invert:Tt,clone:At}),Mw=_t,Iw=5e-5,Tw=function Tw(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null;},Aw=Tw.prototype;Aw.transform=null,Aw.needLocalTransform=function(){return Dt(this.rotation)||Dt(this.position[0])||Dt(this.position[1])||Dt(this.scale[0]-1)||Dt(this.scale[1]-1);};var Dw=[];Aw.updateTransform=function(){var t=this.parent,e=t&&t.transform,i=this.needLocalTransform(),n=this.transform;if(i||e){n=n||xt(),i?this.getLocalTransform(n):Mw(n),e&&(i?bt(n,t.transform,n):wt(n,t.transform)),this.transform=n;var o=this.globalScaleRatio;if(null!=o&&1!==o){this.getGlobalScale(Dw);var a=Dw[0]<0?-1:1,r=Dw[1]<0?-1:1,s=((Dw[0]-a)*o+a)/Dw[0]||0,l=((Dw[1]-r)*o+r)/Dw[1]||0;n[0]*=s,n[1]*=s,n[2]*=l,n[3]*=l;}this.invTransform=this.invTransform||xt(),Tt(this.invTransform,n);}else n&&Mw(n);},Aw.getLocalTransform=function(t){return Tw.getLocalTransform(this,t);},Aw.setTransform=function(t){var e=this.transform,i=t.dpr||1;e?t.setTransform(i*e[0],i*e[1],i*e[2],i*e[3],i*e[4],i*e[5]):t.setTransform(i,0,0,i,0,0);},Aw.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0);};var Cw=[],Lw=xt();Aw.setLocalTransform=function(t){if(t){var e=t[0]*t[0]+t[1]*t[1],i=t[2]*t[2]+t[3]*t[3],n=this.position,o=this.scale;Dt(e-1)&&(e=Math.sqrt(e)),Dt(i-1)&&(i=Math.sqrt(i)),t[0]<0&&(e=-e),t[3]<0&&(i=-i),n[0]=t[4],n[1]=t[5],o[0]=e,o[1]=i,this.rotation=Math.atan2(-t[1]/i,t[0]/e);}},Aw.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(bt(Cw,t.invTransform,e),e=Cw);var i=this.origin;i&&(i[0]||i[1])&&(Lw[4]=i[0],Lw[5]=i[1],bt(Cw,e,Lw),Cw[4]-=i[0],Cw[5]-=i[1],e=Cw),this.setLocalTransform(e);}},Aw.getGlobalScale=function(t){var e=this.transform;return t=t||[],e?(t[0]=Math.sqrt(e[0]*e[0]+e[1]*e[1]),t[1]=Math.sqrt(e[2]*e[2]+e[3]*e[3]),e[0]<0&&(t[0]=-t[0]),e[3]<0&&(t[1]=-t[1]),t):(t[0]=1,t[1]=1,t);},Aw.transformCoordToLocal=function(t,e){var i=[t,e],n=this.invTransform;return n&&Q(i,i,n),i;},Aw.transformCoordToGlobal=function(t,e){var i=[t,e],n=this.transform;return n&&Q(i,i,n),i;},Tw.getLocalTransform=function(t,e){Mw(e=e||[]);var i=t.origin,n=t.scale||[1,1],o=t.rotation||0,a=t.position||[0,0];return i&&(e[4]-=i[0],e[5]-=i[1]),It(e,e,n),o&&Mt(e,e,o),i&&(e[4]+=i[0],e[5]+=i[1]),e[4]+=a[0],e[5]+=a[1],e;};var kw={linear:function linear(t){return t;},quadraticIn:function quadraticIn(t){return t*t;},quadraticOut:function quadraticOut(t){return t*(2-t);},quadraticInOut:function quadraticInOut(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1);},cubicIn:function cubicIn(t){return t*t*t;},cubicOut:function cubicOut(t){return--t*t*t+1;},cubicInOut:function cubicInOut(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2);},quarticIn:function quarticIn(t){return t*t*t*t;},quarticOut:function quarticOut(t){return 1- --t*t*t*t;},quarticInOut:function quarticInOut(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2);},quinticIn:function quinticIn(t){return t*t*t*t*t;},quinticOut:function quinticOut(t){return--t*t*t*t*t+1;},quinticInOut:function quinticInOut(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2);},sinusoidalIn:function sinusoidalIn(t){return 1-Math.cos(t*Math.PI/2);},sinusoidalOut:function sinusoidalOut(t){return Math.sin(t*Math.PI/2);},sinusoidalInOut:function sinusoidalInOut(t){return .5*(1-Math.cos(Math.PI*t));},exponentialIn:function exponentialIn(t){return 0===t?0:Math.pow(1024,t-1);},exponentialOut:function exponentialOut(t){return 1===t?1:1-Math.pow(2,-10*t);},exponentialInOut:function exponentialInOut(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)));},circularIn:function circularIn(t){return 1-Math.sqrt(1-t*t);},circularOut:function circularOut(t){return Math.sqrt(1- --t*t);},circularInOut:function circularInOut(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1);},elasticIn:function elasticIn(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),-i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4));},elasticOut:function elasticOut(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1);},elasticInOut:function elasticInOut(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1);},backIn:function backIn(t){var e=1.70158;return t*t*((e+1)*t-e);},backOut:function backOut(t){var e=1.70158;return--t*t*((e+1)*t+e)+1;},backInOut:function backInOut(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2);},bounceIn:function bounceIn(t){return 1-kw.bounceOut(1-t);},bounceOut:function bounceOut(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375;},bounceInOut:function bounceInOut(t){return t<.5?.5*kw.bounceIn(2*t):.5*kw.bounceOut(2*t-1)+.5;}};Ct.prototype={constructor:Ct,step:function step(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var i=(t-this._startTime-this._pausedTime)/this._life;if(!(i<0)){i=Math.min(i,1);var n=this.easing,o="string"==typeof n?kw[n]:n,a="function"==typeof o?o(i):i;return this.fire("frame",a),1===i?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null;}}},restart:function restart(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1;},fire:function fire(t,e){this[t="on"+t]&&this[t](this._target,e);},pause:function pause(){this._paused=!0;},resume:function resume(){this._paused=!1;}};var Pw=function Pw(){this.head=null,this.tail=null,this._len=0;},Nw=Pw.prototype;Nw.insert=function(t){var e=new Ow(t);return this.insertEntry(e),e;},Nw.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++;},Nw.remove=function(t){var e=t.prev,i=t.next;e?e.next=i:this.head=i,i?i.prev=e:this.tail=e,t.next=t.prev=null,this._len--;},Nw.len=function(){return this._len;},Nw.clear=function(){this.head=this.tail=null,this._len=0;};var Ow=function Ow(t){this.value=t,this.next,this.prev;},Ew=function Ew(t){this._list=new Pw(),this._map={},this._maxSize=t||10,this._lastRemovedEntry=null;},Rw=Ew.prototype;Rw.put=function(t,e){var i=this._list,n=this._map,o=null;if(null==n[t]){var a=i.len(),r=this._lastRemovedEntry;if(a>=this._maxSize&&a>0){var s=i.head;i.remove(s),delete n[s.key],o=s.value,this._lastRemovedEntry=s;}r?r.value=e:r=new Ow(e),r.key=t,i.insertEntry(r),n[t]=r;}return o;},Rw.get=function(t){var e=this._map[t],i=this._list;if(null!=e)return e!==i.tail&&(i.remove(e),i.insertEntry(e)),e.value;},Rw.clear=function(){this._list.clear(),this._map={};};var zw={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},Bw=new Ew(20),Vw=null,Gw=Ut,Fw=Xt,Ww=(Object.freeze||Object)({parse:Gt,lift:Ht,toHex:Zt,fastLerp:Ut,fastMapToColor:Gw,lerp:Xt,mapToColor:Fw,modifyHSL:jt,modifyAlpha:Yt,stringify:qt}),Hw=Array.prototype.slice,Zw=function Zw(t,e,i,n){this._tracks={},this._target=t,this._loop=e||!1,this._getter=i||Kt,this._setter=n||$t,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[];};Zw.prototype={when:function when(t,e){var i=this._tracks;for(var n in e){if(e.hasOwnProperty(n)){if(!i[n]){i[n]=[];var o=this._getter(this._target,n);if(null==o)continue;0!==t&&i[n].push({time:0,value:ae(o)});}i[n].push({time:t,value:e[n]});}}return this;},during:function during(t){return this._onframeList.push(t),this;},pause:function pause(){for(var t=0;t<this._clipList.length;t++){this._clipList[t].pause();}this._paused=!0;},resume:function resume(){for(var t=0;t<this._clipList.length;t++){this._clipList[t].resume();}this._paused=!1;},isPaused:function isPaused(){return!!this._paused;},_doneCallback:function _doneCallback(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,i=0;i<e;i++){t[i].call(this);}},start:function start(t,e){var i,n=this,o=0;for(var a in this._tracks){if(this._tracks.hasOwnProperty(a)){var r=le(this,t,function(){--o||n._doneCallback();},this._tracks[a],a,e);r&&(this._clipList.push(r),o++,this.animation&&this.animation.addClip(r),i=r);}}if(i){var s=i.onframe;i.onframe=function(t,e){s(t,e);for(var i=0;i<n._onframeList.length;i++){n._onframeList[i](t,e);}};}return o||this._doneCallback(),this;},stop:function stop(t){for(var e=this._clipList,i=this.animation,n=0;n<e.length;n++){var o=e[n];t&&o.onframe(this._target,1),i&&i.removeClip(o);}e.length=0;},delay:function delay(t){return this._delay=t,this;},done:function done(t){return t&&this._doneList.push(t),this;},getClips:function getClips(){return this._clipList;}};var Uw=1;"undefined"!=typeof window&&(Uw=Math.max(window.devicePixelRatio||1,1));var Xw=Uw,jw=function jw(){},Yw=jw,qw=function qw(){this.animators=[];};qw.prototype={constructor:qw,animate:function animate(t,e){var i,n=!1,o=this,a=this.__zr;if(t){var r=t.split("."),s=o;n="shape"===r[0];for(var u=0,h=r.length;u<h;u++){s&&(s=s[r[u]]);}s&&(i=s);}else i=o;if(i){var c=o.animators,d=new Zw(i,e);return d.during(function(t){o.dirty(n);}).done(function(){c.splice(l(c,d),1);}),c.push(d),a&&a.animation.addAnimator(d),d;}Yw('Property "'+t+'" is not existed in element '+o.id);},stopAnimation:function stopAnimation(t){for(var e=this.animators,i=e.length,n=0;n<i;n++){e[n].stop(t);}return e.length=0,this;},animateTo:function animateTo(t,e,i,n,o,a){ue(this,t,e,i,n,o,a);},animateFrom:function animateFrom(t,e,i,n,o,a){ue(this,t,e,i,n,o,a,!0);}};var Kw=function Kw(t){Tw.call(this,t),fw.call(this,t),qw.call(this,t),this.id=t.id||H_();};Kw.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function drift(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0;}var i=this.transform;i||(i=this.transform=[1,0,0,1,0,0]),i[4]+=t,i[5]+=e,this.decomposeTransform(),this.dirty(!1);},beforeUpdate:function beforeUpdate(){},afterUpdate:function afterUpdate(){},update:function update(){this.updateTransform();},traverse:function traverse(t,e){},attrKV:function attrKV(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var i=this[t];i||(i=this[t]=[]),i[0]=e[0],i[1]=e[1];}}else this[t]=e;},hide:function hide(){this.ignore=!0,this.__zr&&this.__zr.refresh();},show:function show(){this.ignore=!1,this.__zr&&this.__zr.refresh();},attr:function attr(t,e){if("string"==typeof t)this.attrKV(t,e);else if(w(t))for(var i in t){t.hasOwnProperty(i)&&this.attrKV(i,t[i]);}return this.dirty(!1),this;},setClipPath:function setClipPath(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1);},removeClipPath:function removeClipPath(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1));},addSelfToZr:function addSelfToZr(t){this.__zr=t;var e=this.animators;if(e)for(var i=0;i<e.length;i++){t.animation.addAnimator(e[i]);}this.clipPath&&this.clipPath.addSelfToZr(t);},removeSelfFromZr:function removeSelfFromZr(t){this.__zr=null;var e=this.animators;if(e)for(var i=0;i<e.length;i++){t.animation.removeAnimator(e[i]);}this.clipPath&&this.clipPath.removeSelfFromZr(t);}},h(Kw,qw),h(Kw,Tw),h(Kw,fw);var $w=Q,Jw=Math.min,Qw=Math.max;de.prototype={constructor:de,union:function union(t){var e=Jw(t.x,this.x),i=Jw(t.y,this.y);this.width=Qw(t.x+t.width,this.x+this.width)-e,this.height=Qw(t.y+t.height,this.y+this.height)-i,this.x=e,this.y=i;},applyTransform:function(){var t=[],e=[],i=[],n=[];return function(o){if(o){t[0]=i[0]=this.x,t[1]=n[1]=this.y,e[0]=n[0]=this.x+this.width,e[1]=i[1]=this.y+this.height,$w(t,t,o),$w(e,e,o),$w(i,i,o),$w(n,n,o),this.x=Jw(t[0],e[0],i[0],n[0]),this.y=Jw(t[1],e[1],i[1],n[1]);var a=Qw(t[0],e[0],i[0],n[0]),r=Qw(t[1],e[1],i[1],n[1]);this.width=a-this.x,this.height=r-this.y;}};}(),calculateTransform:function calculateTransform(t){var e=this,i=t.width/e.width,n=t.height/e.height,o=xt();return St(o,o,[-e.x,-e.y]),It(o,o,[i,n]),St(o,o,[t.x,t.y]),o;},intersect:function intersect(t){if(!t)return!1;t instanceof de||(t=de.create(t));var e=this,i=e.x,n=e.x+e.width,o=e.y,a=e.y+e.height,r=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(n<r||s<i||a<l||u<o);},contain:function contain(t,e){var i=this;return t>=i.x&&t<=i.x+i.width&&e>=i.y&&e<=i.y+i.height;},clone:function clone(){return new de(this.x,this.y,this.width,this.height);},copy:function copy(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height;},plain:function plain(){return{x:this.x,y:this.y,width:this.width,height:this.height};}},de.create=function(t){return new de(t.x,t.y,t.width,t.height);};var tb=function tb(t){t=t||{},Kw.call(this,t);for(var e in t){t.hasOwnProperty(e)&&(this[e]=t[e]);}this._children=[],this.__storage=null,this.__dirty=!0;};tb.prototype={constructor:tb,isGroup:!0,type:"group",silent:!1,children:function children(){return this._children.slice();},childAt:function childAt(t){return this._children[t];},childOfName:function childOfName(t){for(var e=this._children,i=0;i<e.length;i++){if(e[i].name===t)return e[i];}},childCount:function childCount(){return this._children.length;},add:function add(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this;},addBefore:function addBefore(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var i=this._children,n=i.indexOf(e);n>=0&&(i.splice(n,0,t),this._doAdd(t));}return this;},_doAdd:function _doAdd(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,i=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof tb&&t.addChildrenToStorage(e)),i&&i.refresh();},remove:function remove(t){var e=this.__zr,i=this.__storage,n=this._children,o=l(n,t);return o<0?this:(n.splice(o,1),t.parent=null,i&&(i.delFromStorage(t),t instanceof tb&&t.delChildrenFromStorage(i)),e&&e.refresh(),this);},removeAll:function removeAll(){var t,e,i=this._children,n=this.__storage;for(e=0;e<i.length;e++){t=i[e],n&&(n.delFromStorage(t),t instanceof tb&&t.delChildrenFromStorage(n)),t.parent=null;}return i.length=0,this;},eachChild:function eachChild(t,e){for(var i=this._children,n=0;n<i.length;n++){var o=i[n];t.call(e,o,n);}return this;},traverse:function traverse(t,e){for(var i=0;i<this._children.length;i++){var n=this._children[i];t.call(e,n),"group"===n.type&&n.traverse(t,e);}return this;},addChildrenToStorage:function addChildrenToStorage(t){for(var e=0;e<this._children.length;e++){var i=this._children[e];t.addToStorage(i),i instanceof tb&&i.addChildrenToStorage(t);}},delChildrenFromStorage:function delChildrenFromStorage(t){for(var e=0;e<this._children.length;e++){var i=this._children[e];t.delFromStorage(i),i instanceof tb&&i.delChildrenFromStorage(t);}},dirty:function dirty(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this;},getBoundingRect:function getBoundingRect(t){for(var e=null,i=new de(0,0,0,0),n=t||this._children,o=[],a=0;a<n.length;a++){var r=n[a];if(!r.ignore&&!r.invisible){var s=r.getBoundingRect(),l=r.getLocalTransform(o);l?(i.copy(s),i.applyTransform(l),(e=e||i.clone()).union(i)):(e=e||s.clone()).union(s);}}return e||i;}},u(tb,Kw);var eb=32,ib=7,nb=function nb(){this._roots=[],this._displayList=[],this._displayListLen=0;};nb.prototype={constructor:nb,traverse:function traverse(t,e){for(var i=0;i<this._roots.length;i++){this._roots[i].traverse(t,e);}},getDisplayList:function getDisplayList(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList;},updateDisplayList:function updateDisplayList(t){this._displayListLen=0;for(var e=this._roots,i=this._displayList,n=0,o=e.length;n<o;n++){this._updateAndAddDisplayable(e[n],null,t);}i.length=this._displayListLen,U_.canvasSupported&&_e(i,we);},_updateAndAddDisplayable:function _updateAndAddDisplayable(t,e,i){if(!t.ignore||i){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var n=t.clipPath;if(n){e=e?e.slice():[];for(var o=n,a=t;o;){o.parent=a,o.updateTransform(),e.push(o),a=o,o=o.clipPath;}}if(t.isGroup){for(var r=t._children,s=0;s<r.length;s++){var l=r[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,i);}t.__dirty=!1;}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t;}},addRoot:function addRoot(t){t.__storage!==this&&(t instanceof tb&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t));},delRoot:function delRoot(t){if(null==t){for(i=0;i<this._roots.length;i++){var e=this._roots[i];e instanceof tb&&e.delChildrenFromStorage(this);}return this._roots=[],this._displayList=[],void(this._displayListLen=0);}if(t instanceof Array)for(var i=0,n=t.length;i<n;i++){this.delRoot(t[i]);}else{var o=l(this._roots,t);o>=0&&(this.delFromStorage(t),this._roots.splice(o,1),t instanceof tb&&t.delChildrenFromStorage(this));}},addToStorage:function addToStorage(t){return t&&(t.__storage=this,t.dirty(!1)),this;},delFromStorage:function delFromStorage(t){return t&&(t.__storage=null),this;},dispose:function dispose(){this._renderList=this._roots=null;},displayableSortFunc:we};var ob={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},ab=function ab(t,e,i){return ob.hasOwnProperty(e)?i*=t.dpr:i;},rb={NONE:0,STYLE_BIND:1,PLAIN_TEXT:2},sb=9,lb=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],ub=function ub(t){this.extendFrom(t,!1);};ub.prototype={constructor:ub,fill:"#000",stroke:null,opacity:1,fillOpacity:null,strokeOpacity:null,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function bind(t,e,i){var n=this,o=i&&i.style,a=!o||t.__attrCachedBy!==rb.STYLE_BIND;t.__attrCachedBy=rb.STYLE_BIND;for(var r=0;r<lb.length;r++){var s=lb[r],l=s[0];(a||n[l]!==o[l])&&(t[l]=ab(t,l,n[l]||s[1]));}if((a||n.fill!==o.fill)&&(t.fillStyle=n.fill),(a||n.stroke!==o.stroke)&&(t.strokeStyle=n.stroke),(a||n.opacity!==o.opacity)&&(t.globalAlpha=null==n.opacity?1:n.opacity),(a||n.blend!==o.blend)&&(t.globalCompositeOperation=n.blend||"source-over"),this.hasStroke()){var u=n.lineWidth;t.lineWidth=u/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1);}},hasFill:function hasFill(){var t=this.fill;return null!=t&&"none"!==t;},hasStroke:function hasStroke(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0;},extendFrom:function extendFrom(t,e){if(t)for(var i in t){!t.hasOwnProperty(i)||!0!==e&&(!1===e?this.hasOwnProperty(i):null==t[i])||(this[i]=t[i]);}},set:function set(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0);},clone:function clone(){var t=new this.constructor();return t.extendFrom(this,!0),t;},getGradient:function getGradient(t,e,i){for(var n=("radial"===e.type?Se:be)(t,e,i),o=e.colorStops,a=0;a<o.length;a++){n.addColorStop(o[a].offset,o[a].color);}return n;}};for(var hb=ub.prototype,cb=0;cb<lb.length;cb++){var db=lb[cb];db[0]in hb||(hb[db[0]]=db[1]);}ub.getGradient=hb.getGradient;var fb=function fb(t,e){this.image=t,this.repeat=e,this.type="pattern";};fb.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat");};var pb=function pb(t,e,i){var n;i=i||Xw,"string"==typeof t?n=Ie(t,e,i):w(t)&&(t=(n=t).id),this.id=t,this.dom=n;var o=n.style;o&&(n.onselectstart=Me,o["-webkit-user-select"]="none",o["user-select"]="none",o["-webkit-touch-callout"]="none",o["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",o.padding=0,o.margin=0,o["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=i;};pb.prototype={constructor:pb,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function getElementCount(){return this.__endIndex-this.__startIndex;},initContext:function initContext(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr;},createBackBuffer:function createBackBuffer(){var t=this.dpr;this.domBack=Ie("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!==t&&this.ctxBack.scale(t,t);},resize:function resize(t,e){var i=this.dpr,n=this.dom,o=n.style,a=this.domBack;o&&(o.width=t+"px",o.height=e+"px"),n.width=t*i,n.height=e*i,a&&(a.width=t*i,a.height=e*i,1!==i&&this.ctxBack.scale(i,i));},clear:function clear(t,e){var i=this.dom,n=this.ctx,o=i.width,a=i.height,e=e||this.clearColor,r=this.motionBlur&&!t,s=this.lastFrameAlpha,l=this.dpr;if(r&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,o/l,a/l)),n.clearRect(0,0,o,a),e&&"transparent"!==e){var u;e.colorStops?(u=e.__canvasGradient||ub.getGradient(n,e,{x:0,y:0,width:o,height:a}),e.__canvasGradient=u):e.image&&(u=fb.prototype.getCanvasPattern.call(e,n)),n.save(),n.fillStyle=u||e,n.fillRect(0,0,o,a),n.restore();}if(r){var h=this.domBack;n.save(),n.globalAlpha=s,n.drawImage(h,0,0,o,a),n.restore();}}};var gb="undefined"!=typeof window&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16);},mb=new Ew(50),vb={},yb=0,xb=5e3,_b=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,wb="12px sans-serif",bb={};bb.measureText=function(t,e){var i=s();return i.font=e||wb,i.measureText(t);};var Sb=wb,Mb={left:1,right:1,center:1},Ib={top:1,bottom:1,middle:1},Tb=[["textShadowBlur","shadowBlur",0],["textShadowOffsetX","shadowOffsetX",0],["textShadowOffsetY","shadowOffsetY",0],["textShadowColor","shadowColor","transparent"]],Ab=new de(),Db=function Db(){};Db.prototype={constructor:Db,drawRectText:function drawRectText(t,e){var i=this.style;e=i.textRect||e,this.__dirty&&Ye(i);var n=i.text;if(null!=n&&(n+=""),ci(n,i)){t.save();var o=this.transform;i.transformText?this.setTransform(t):o&&(Ab.copy(e),Ab.applyTransform(o),e=Ab),Ke(this,t,n,i,e,sb),t.restore();}}},di.prototype={constructor:di,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,globalScaleRatio:1,beforeBrush:function beforeBrush(t){},afterBrush:function afterBrush(t){},brush:function brush(t,e){},getBoundingRect:function getBoundingRect(){},contain:function contain(t,e){return this.rectContain(t,e);},traverse:function traverse(t,e){t.call(e,this);},rectContain:function rectContain(t,e){var i=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(i[0],i[1]);},dirty:function dirty(){this.__dirty=this.__dirtyText=!0,this._rect=null,this.__zr&&this.__zr.refresh();},animateStyle:function animateStyle(t){return this.animate("style",t);},attrKV:function attrKV(t,e){"style"!==t?Kw.prototype.attrKV.call(this,t,e):this.style.set(e);},setStyle:function setStyle(t,e){return this.style.set(t,e),this.dirty(!1),this;},useStyle:function useStyle(t){return this.style=new ub(t,this),this.dirty(!1),this;}},u(di,Kw),h(di,Db),fi.prototype={constructor:fi,type:"image",brush:function brush(t,e){var i=this.style,n=i.image;i.bind(t,this,e);var o=this._image=Ae(n,this._image,this,this.onload);if(o&&Ce(o)){var a=i.x||0,r=i.y||0,s=i.width,l=i.height,u=o.width/o.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=o.width,l=o.height),this.setTransform(t),i.sWidth&&i.sHeight){var h=i.sx||0,c=i.sy||0;t.drawImage(o,h,c,i.sWidth,i.sHeight,a,r,s,l);}else if(i.sx&&i.sy){var d=s-(h=i.sx),f=l-(c=i.sy);t.drawImage(o,h,c,d,f,a,r,s,l);}else t.drawImage(o,a,r,s,l);null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()));}},getBoundingRect:function getBoundingRect(){var t=this.style;return this._rect||(this._rect=new de(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect;}},u(fi,di);var Cb=new de(0,0,0,0),Lb=new de(0,0,0,0),kb=function kb(t,e,i){this.type="canvas";var n=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=i=a({},i||{}),this.dpr=i.devicePixelRatio||Xw,this._singleCanvas=n,this.root=t;var o=t.style;o&&(o["-webkit-tap-highlight-color"]="transparent",o["-webkit-user-select"]=o["user-select"]=o["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var r=this._zlevelList=[],s=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,n){var l=t.width,u=t.height;null!=i.width&&(l=i.width),null!=i.height&&(u=i.height),this.dpr=i.devicePixelRatio||1,t.width=l*this.dpr,t.height=u*this.dpr,this._width=l,this._height=u;var h=new pb(t,this,this.dpr);h.__builtin__=!0,h.initContext(),s[314159]=h,h.zlevel=314159,r.push(314159),this._domRoot=t;}else{this._width=this._getSize(0),this._height=this._getSize(1);var c=this._domRoot=xi(this._width,this._height);t.appendChild(c);}this._hoverlayer=null,this._hoverElements=[];};kb.prototype={constructor:kb,getType:function getType(){return"canvas";},isSingleCanvas:function isSingleCanvas(){return this._singleCanvas;},getViewportRoot:function getViewportRoot(){return this._domRoot;},getViewportRootOffset:function getViewportRootOffset(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0};},refresh:function refresh(t){var e=this.storage.getDisplayList(!0),i=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var n=0;n<i.length;n++){var o=i[n],a=this._layers[o];if(!a.__builtin__&&a.refresh){var r=0===n?this._backgroundColor:null;a.refresh(r);}}return this.refreshHover(),this;},addHover:function addHover(t,e){if(!t.__hoverMir){var i=new t.constructor({style:t.style,shape:t.shape,z:t.z,z2:t.z2,silent:t.silent});return i.__from=t,t.__hoverMir=i,e&&i.setStyle(e),this._hoverElements.push(i),i;}},removeHover:function removeHover(t){var e=t.__hoverMir,i=this._hoverElements,n=l(i,e);n>=0&&i.splice(n,1),t.__hoverMir=null;},clearHover:function clearHover(t){for(var e=this._hoverElements,i=0;i<e.length;i++){var n=e[i].__from;n&&(n.__hoverMir=null);}e.length=0;},refreshHover:function refreshHover(){var t=this._hoverElements,e=t.length,i=this._hoverlayer;if(i&&i.clear(),e){_e(t,this.storage.displayableSortFunc),i||(i=this._hoverlayer=this.getLayer(1e5));var n={};i.ctx.save();for(var o=0;o<e;){var a=t[o],r=a.__from;r&&r.__zr?(o++,r.invisible||(a.transform=r.transform,a.invTransform=r.invTransform,a.__clipPaths=r.__clipPaths,this._doPaintEl(a,i,!0,n))):(t.splice(o,1),r.__hoverMir=null,e--);}i.ctx.restore();}},getHoverLayer:function getHoverLayer(){return this.getLayer(1e5);},_paintList:function _paintList(t,e,i){if(this._redrawId===i){e=e||!1,this._updateLayerStatus(t);var n=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!n){var o=this;gb(function(){o._paintList(t,e,i);});}}},_compositeManually:function _compositeManually(){var t=this.getLayer(314159).ctx,e=this._domRoot.width,i=this._domRoot.height;t.clearRect(0,0,e,i),this.eachBuiltinLayer(function(n){n.virtual&&t.drawImage(n.dom,0,0,e,i);});},_doPaintList:function _doPaintList(t,e){for(var i=[],n=0;n<this._zlevelList.length;n++){var o=this._zlevelList[n];(s=this._layers[o]).__builtin__&&s!==this._hoverlayer&&(s.__dirty||e)&&i.push(s);}for(var a=!0,r=0;r<i.length;r++){var s=i[r],l=s.ctx,u={};l.save();var h=e?s.__startIndex:s.__drawIndex,c=!e&&s.incremental&&Date.now,f=c&&Date.now(),p=s.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(s.__startIndex===s.__endIndex)s.clear(!1,p);else if(h===s.__startIndex){var g=t[h];g.incremental&&g.notClear&&!e||s.clear(!1,p);}-1===h&&(console.error("For some unknown reason. drawIndex is -1"),h=s.__startIndex);for(var m=h;m<s.__endIndex;m++){var v=t[m];if(this._doPaintEl(v,s,e,u),v.__dirty=v.__dirtyText=!1,c&&Date.now()-f>15)break;}s.__drawIndex=m,s.__drawIndex<s.__endIndex&&(a=!1),u.prevElClipPaths&&l.restore(),l.restore();}return U_.wxa&&d(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw();}),a;},_doPaintEl:function _doPaintEl(t,e,i,n){var o=e.ctx,a=t.transform;if((e.__dirty||i)&&!t.invisible&&0!==t.style.opacity&&(!a||a[0]||a[3])&&(!t.culling||!mi(t,this._width,this._height))){var r=t.__clipPaths;n.prevElClipPaths&&!vi(r,n.prevElClipPaths)||(n.prevElClipPaths&&(e.ctx.restore(),n.prevElClipPaths=null,n.prevEl=null),r&&(o.save(),yi(r,o),n.prevElClipPaths=r)),t.beforeBrush&&t.beforeBrush(o),t.brush(o,n.prevEl||null),n.prevEl=t,t.afterBrush&&t.afterBrush(o);}},getLayer:function getLayer(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=314159);var i=this._layers[t];return i||((i=new pb("zr_"+t,this,this.dpr)).zlevel=t,i.__builtin__=!0,this._layerConfig[t]&&n(i,this._layerConfig[t],!0),e&&(i.virtual=e),this.insertLayer(t,i),i.initContext()),i;},insertLayer:function insertLayer(t,e){var i=this._layers,n=this._zlevelList,o=n.length,a=null,r=-1,s=this._domRoot;if(i[t])Yw("ZLevel "+t+" has been used already");else if(gi(e)){if(o>0&&t>n[0]){for(r=0;r<o-1&&!(n[r]<t&&n[r+1]>t);r++){;}a=i[n[r]];}if(n.splice(r+1,0,t),i[t]=e,!e.virtual)if(a){var l=a.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom);}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom);}else Yw("Layer of zlevel "+t+" is not valid");},eachLayer:function eachLayer(t,e){var i,n,o=this._zlevelList;for(n=0;n<o.length;n++){i=o[n],t.call(e,this._layers[i],i);}},eachBuiltinLayer:function eachBuiltinLayer(t,e){var i,n,o,a=this._zlevelList;for(o=0;o<a.length;o++){n=a[o],(i=this._layers[n]).__builtin__&&t.call(e,i,n);}},eachOtherLayer:function eachOtherLayer(t,e){var i,n,o,a=this._zlevelList;for(o=0;o<a.length;o++){n=a[o],(i=this._layers[n]).__builtin__||t.call(e,i,n);}},getLayers:function getLayers(){return this._layers;},_updateLayerStatus:function _updateLayerStatus(t){function e(t){i&&(i.__endIndex!==t&&(i.__dirty=!0),i.__endIndex=t);}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1;}),this._singleCanvas)for(o=1;o<t.length;o++){if((r=t[o]).zlevel!==t[o-1].zlevel||r.incremental){this._needsManuallyCompositing=!0;break;}}for(var i=null,n=0,o=0;o<t.length;o++){var a,r=t[o],s=r.zlevel;r.incremental?((a=this.getLayer(s+.001,this._needsManuallyCompositing)).incremental=!0,n=1):a=this.getLayer(s+(n>0?.01:0),this._needsManuallyCompositing),a.__builtin__||Yw("ZLevel "+s+" has been used by unkown layer "+a.id),a!==i&&(a.__used=!0,a.__startIndex!==o&&(a.__dirty=!0),a.__startIndex=o,a.incremental?a.__drawIndex=-1:a.__drawIndex=o,e(o),i=a),r.__dirty&&(a.__dirty=!0,a.incremental&&a.__drawIndex<0&&(a.__drawIndex=o));}e(o),this.eachBuiltinLayer(function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex);});},clear:function clear(){return this.eachBuiltinLayer(this._clearLayer),this;},_clearLayer:function _clearLayer(t){t.clear();},setBackgroundColor:function setBackgroundColor(t){this._backgroundColor=t;},configLayer:function configLayer(t,e){if(e){var i=this._layerConfig;i[t]?n(i[t],e,!0):i[t]=e;for(var o=0;o<this._zlevelList.length;o++){var a=this._zlevelList[o];a!==t&&a!==t+.01||n(this._layers[a],i[t],!0);}}},delLayer:function delLayer(t){var e=this._layers,i=this._zlevelList,n=e[t];n&&(n.dom.parentNode.removeChild(n.dom),delete e[t],i.splice(l(i,t),1));},resize:function resize(t,e){if(this._domRoot.style){var i=this._domRoot;i.style.display="none";var n=this._opts;if(null!=t&&(n.width=t),null!=e&&(n.height=e),t=this._getSize(0),e=this._getSize(1),i.style.display="",this._width!==t||e!==this._height){i.style.width=t+"px",i.style.height=e+"px";for(var o in this._layers){this._layers.hasOwnProperty(o)&&this._layers[o].resize(t,e);}d(this._progressiveLayers,function(i){i.resize(t,e);}),this.refresh(!0);}this._width=t,this._height=e;}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(314159).resize(t,e);}return this;},clearLayer:function clearLayer(t){var e=this._layers[t];e&&e.clear();},dispose:function dispose(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null;},getRenderedCanvas:function getRenderedCanvas(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom;var e=new pb("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var i=e.dom.width,n=e.dom.height,o=e.ctx;this.eachLayer(function(t){t.__builtin__?o.drawImage(t.dom,0,0,i,n):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore());});}else for(var a={},r=this.storage.getDisplayList(!0),s=0;s<r.length;s++){var l=r[s];this._doPaintEl(l,e,!0,a);}return e.dom;},getWidth:function getWidth(){return this._width;},getHeight:function getHeight(){return this._height;},_getSize:function _getSize(t){var e=this._opts,i=["width","height"][t],n=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var r=this.root,s=document.defaultView.getComputedStyle(r);return(r[n]||pi(s[i])||pi(r.style[i]))-(pi(s[o])||0)-(pi(s[a])||0)|0;},pathToImage:function pathToImage(t,e){e=e||this.dpr;var i=document.createElement("canvas"),n=i.getContext("2d"),o=t.getBoundingRect(),a=t.style,r=a.shadowBlur*e,s=a.shadowOffsetX*e,l=a.shadowOffsetY*e,u=a.hasStroke()?a.lineWidth:0,h=Math.max(u/2,-s+r),c=Math.max(u/2,s+r),d=Math.max(u/2,-l+r),f=Math.max(u/2,l+r),p=o.width+h+c,g=o.height+d+f;i.width=p*e,i.height=g*e,n.scale(e,e),n.clearRect(0,0,p,g),n.dpr=e;var m={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[h-o.x,d-o.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(n);var v=new fi({style:{x:0,y:0,image:i}});return null!=m.position&&(v.position=t.position=m.position),null!=m.rotation&&(v.rotation=t.rotation=m.rotation),null!=m.scale&&(v.scale=t.scale=m.scale),v;}};var Pb=function Pb(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,fw.call(this);};Pb.prototype={constructor:Pb,addClip:function addClip(t){this._clips.push(t);},addAnimator:function addAnimator(t){t.animation=this;for(var e=t.getClips(),i=0;i<e.length;i++){this.addClip(e[i]);}},removeClip:function removeClip(t){var e=l(this._clips,t);e>=0&&this._clips.splice(e,1);},removeAnimator:function removeAnimator(t){for(var e=t.getClips(),i=0;i<e.length;i++){this.removeClip(e[i]);}t.animation=null;},_update:function _update(){for(var t=new Date().getTime()-this._pausedTime,e=t-this._time,i=this._clips,n=i.length,o=[],a=[],r=0;r<n;r++){var s=i[r],l=s.step(t,e);l&&(o.push(l),a.push(s));}for(r=0;r<n;){i[r]._needsRemove?(i[r]=i[n-1],i.pop(),n--):r++;}n=o.length;for(r=0;r<n;r++){a[r].fire(o[r]);}this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update();},_startLoop:function _startLoop(){function t(){e._running&&(gb(t),!e._paused&&e._update());}var e=this;this._running=!0,gb(t);},start:function start(){this._time=new Date().getTime(),this._pausedTime=0,this._startLoop();},stop:function stop(){this._running=!1;},pause:function pause(){this._paused||(this._pauseStart=new Date().getTime(),this._paused=!0);},resume:function resume(){this._paused&&(this._pausedTime+=new Date().getTime()-this._pauseStart,this._paused=!1);},clear:function clear(){this._clips=[];},isFinished:function isFinished(){return!this._clips.length;},animate:function animate(t,e){var i=new Zw(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(i),i;}},h(Pb,fw);var Nb=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Ob=["touchstart","touchend","touchmove"],Eb={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},Rb=f(Nb,function(t){var e=t.replace("mouse","pointer");return Eb[e]?e:t;}),zb={mousemove:function mousemove(t){t=ut(this.dom,t),this.trigger("mousemove",t);},mouseout:function mouseout(t){var e=(t=ut(this.dom,t)).toElement||t.relatedTarget;if(e!==this.dom)for(;e&&9!==e.nodeType;){if(e===this.dom)return;e=e.parentNode;}this.trigger("mouseout",t);},touchstart:function touchstart(t){(t=ut(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date(),this.handler.processGesture(this,t,"start"),zb.mousemove.call(this,t),zb.mousedown.call(this,t),wi(this);},touchmove:function touchmove(t){(t=ut(this.dom,t)).zrByTouch=!0,this.handler.processGesture(this,t,"change"),zb.mousemove.call(this,t),wi(this);},touchend:function touchend(t){(t=ut(this.dom,t)).zrByTouch=!0,this.handler.processGesture(this,t,"end"),zb.mouseup.call(this,t),+new Date()-this._lastTouchMoment<300&&zb.click.call(this,t),wi(this);},pointerdown:function pointerdown(t){zb.mousedown.call(this,t);},pointermove:function pointermove(t){bi(t)||zb.mousemove.call(this,t);},pointerup:function pointerup(t){zb.mouseup.call(this,t);},pointerout:function pointerout(t){bi(t)||zb.mouseout.call(this,t);}};d(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){zb[t]=function(e){e=ut(this.dom,e),this.trigger(t,e);};});var Bb=Mi.prototype;Bb.dispose=function(){for(var t=Nb.concat(Ob),e=0;e<t.length;e++){var i=t[e];ct(this.dom,_i(i),this._handlers[i]);}},Bb.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default");},h(Mi,fw);var Vb=!U_.canvasSupported,Gb={canvas:kb},Fb={},Wb=function Wb(t,e,i){i=i||{},this.dom=e,this.id=t;var n=this,o=new nb(),a=i.renderer;if(Vb){if(!Gb.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");a="vml";}else a&&Gb[a]||(a="canvas");var r=new Gb[a](e,o,i,t);this.storage=o,this.painter=r;var s=U_.node||U_.worker?null:new Mi(r.getViewportRoot());this.handler=new ww(o,r,s,r.root),this.animation=new Pb({stage:{update:m(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=o.delFromStorage,u=o.addToStorage;o.delFromStorage=function(t){l.call(o,t),t&&t.removeSelfFromZr(n);},o.addToStorage=function(t){u.call(o,t),t.addSelfToZr(n);};};Wb.prototype={constructor:Wb,getId:function getId(){return this.id;},add:function add(t){this.storage.addRoot(t),this._needsRefresh=!0;},remove:function remove(t){this.storage.delRoot(t),this._needsRefresh=!0;},configLayer:function configLayer(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0;},setBackgroundColor:function setBackgroundColor(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0;},refreshImmediately:function refreshImmediately(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1;},refresh:function refresh(){this._needsRefresh=!0;},flush:function flush(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered");},addHover:function addHover(t,e){if(this.painter.addHover){var i=this.painter.addHover(t,e);return this.refreshHover(),i;}},removeHover:function removeHover(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover());},clearHover:function clearHover(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover());},refreshHover:function refreshHover(){this._needsRefreshHover=!0;},refreshHoverImmediately:function refreshHoverImmediately(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover();},resize:function resize(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize();},clearAnimation:function clearAnimation(){this.animation.clear();},getWidth:function getWidth(){return this.painter.getWidth();},getHeight:function getHeight(){return this.painter.getHeight();},pathToImage:function pathToImage(t,e){return this.painter.pathToImage(t,e);},setCursorStyle:function setCursorStyle(t){this.handler.setCursorStyle(t);},findHover:function findHover(t,e){return this.handler.findHover(t,e);},on:function on(t,e,i){this.handler.on(t,e,i);},off:function off(t,e){this.handler.off(t,e);},trigger:function trigger(t,e){this.handler.trigger(t,e);},clear:function clear(){this.storage.delRoot(),this.painter.clear();},dispose:function dispose(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null,Ai(this.id);}};var Hb=(Object.freeze||Object)({version:"4.0.7",init:Ii,dispose:function dispose(t){if(t)t.dispose();else{for(var e in Fb){Fb.hasOwnProperty(e)&&Fb[e].dispose();}Fb={};}return this;},getInstance:function getInstance(t){return Fb[t];},registerPainter:Ti}),Zb=d,Ub=w,Xb=y,jb="series\0",Yb=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],qb=0,Kb=".",$b="___EC__COMPONENT__CONTAINER___",Jb=0,Qb=function Qb(t){for(var e=0;e<t.length;e++){t[e][1]||(t[e][1]=t[e][0]);}return function(e,i,n){for(var o={},a=0;a<t.length;a++){var r=t[a][1];if(!(i&&l(i,r)>=0||n&&l(n,r)<0)){var s=e.getShallow(r);null!=s&&(o[t[a][0]]=s);}}return o;};},tS=Qb([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),eS={getLineStyle:function getLineStyle(t){var e=tS(this,t),i=this.getLineDash(e.lineWidth);return i&&(e.lineDash=i),e;},getLineDash:function getLineDash(t){null==t&&(t=1);var e=this.get("type"),i=Math.max(t,2),n=4*t;return"solid"===e||null==e?null:"dashed"===e?[n,n]:[i,i];}},iS=Qb([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),nS={getAreaStyle:function getAreaStyle(t,e){return iS(this,t,e);}},oS=Math.pow,aS=Math.sqrt,rS=1e-8,sS=1e-4,lS=aS(3),uS=1/3,hS=V(),cS=V(),dS=V(),fS=Math.min,pS=Math.max,gS=Math.sin,mS=Math.cos,vS=2*Math.PI,yS=V(),xS=V(),_S=V(),wS=[],bS=[],SS={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},MS=[],IS=[],TS=[],AS=[],DS=Math.min,CS=Math.max,LS=Math.cos,kS=Math.sin,PS=Math.sqrt,NS=Math.abs,OS="undefined"!=typeof Float32Array,ES=function ES(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null;};ES.prototype={constructor:ES,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function setScale(t,e){this._ux=NS(1/Xw/t)||0,this._uy=NS(1/Xw/e)||0;},getContext:function getContext(){return this._ctx;},beginPath:function beginPath(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this;},moveTo:function moveTo(t,e){return this.addData(SS.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this;},lineTo:function lineTo(t,e){var i=NS(t-this._xi)>this._ux||NS(e-this._yi)>this._uy||this._len<5;return this.addData(SS.L,t,e),this._ctx&&i&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),i&&(this._xi=t,this._yi=e),this;},bezierCurveTo:function bezierCurveTo(t,e,i,n,o,a){return this.addData(SS.C,t,e,i,n,o,a),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,i,n,o,a):this._ctx.bezierCurveTo(t,e,i,n,o,a)),this._xi=o,this._yi=a,this;},quadraticCurveTo:function quadraticCurveTo(t,e,i,n){return this.addData(SS.Q,t,e,i,n),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,i,n):this._ctx.quadraticCurveTo(t,e,i,n)),this._xi=i,this._yi=n,this;},arc:function arc(t,e,i,n,o,a){return this.addData(SS.A,t,e,i,i,n,o-n,0,a?0:1),this._ctx&&this._ctx.arc(t,e,i,n,o,a),this._xi=LS(o)*i+t,this._yi=kS(o)*i+e,this;},arcTo:function arcTo(t,e,i,n,o){return this._ctx&&this._ctx.arcTo(t,e,i,n,o),this;},rect:function rect(t,e,i,n){return this._ctx&&this._ctx.rect(t,e,i,n),this.addData(SS.R,t,e,i,n),this;},closePath:function closePath(){this.addData(SS.Z);var t=this._ctx,e=this._x0,i=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,i),t.closePath()),this._xi=e,this._yi=i,this;},fill:function fill(t){t&&t.fill(),this.toStatic();},stroke:function stroke(t){t&&t.stroke(),this.toStatic();},setLineDash:function setLineDash(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,i=0;i<t.length;i++){e+=t[i];}this._dashSum=e;}return this;},setLineDashOffset:function setLineDashOffset(t){return this._dashOffset=t,this;},len:function len(){return this._len;},setData:function setData(t){var e=t.length;this.data&&this.data.length===e||!OS||(this.data=new Float32Array(e));for(var i=0;i<e;i++){this.data[i]=t[i];}this._len=e;},appendPath:function appendPath(t){t instanceof Array||(t=[t]);for(var e=t.length,i=0,n=this._len,o=0;o<e;o++){i+=t[o].len();}OS&&this.data instanceof Float32Array&&(this.data=new Float32Array(n+i));for(o=0;o<e;o++){for(var a=t[o].data,r=0;r<a.length;r++){this.data[n++]=a[r];}}this._len=n;},addData:function addData(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var i=0;i<arguments.length;i++){e[this._len++]=arguments[i];}this._prevCmd=t;}},_expandData:function _expandData(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++){t[e]=this.data[e];}this.data=t;}},_needsDash:function _needsDash(){return this._lineDash;},_dashedLineTo:function _dashedLineTo(t,e){var i,n,o=this._dashSum,a=this._dashOffset,r=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,h=t-l,c=e-u,d=PS(h*h+c*c),f=l,p=u,g=r.length;for(h/=d,c/=d,a<0&&(a=o+a),f-=(a%=o)*h,p-=a*c;h>0&&f<=t||h<0&&f>=t||0===h&&(c>0&&p<=e||c<0&&p>=e);){f+=h*(i=r[n=this._dashIdx]),p+=c*i,this._dashIdx=(n+1)%g,h>0&&f<l||h<0&&f>l||c>0&&p<u||c<0&&p>u||s[n%2?"moveTo":"lineTo"](h>=0?DS(f,t):CS(f,t),c>=0?DS(p,e):CS(p,e));}h=f-t,c=p-e,this._dashOffset=-PS(h*h+c*c);},_dashedBezierTo:function _dashedBezierTo(t,e,i,n,o,a){var r,s,l,u,h,c=this._dashSum,d=this._dashOffset,f=this._lineDash,p=this._ctx,g=this._xi,m=this._yi,v=tn,y=0,x=this._dashIdx,_=f.length,w=0;for(d<0&&(d=c+d),d%=c,r=0;r<1;r+=.1){s=v(g,t,i,o,r+.1)-v(g,t,i,o,r),l=v(m,e,n,a,r+.1)-v(m,e,n,a,r),y+=PS(s*s+l*l);}for(;x<_&&!((w+=f[x])>d);x++){;}for(r=(w-d)/y;r<=1;){u=v(g,t,i,o,r),h=v(m,e,n,a,r),x%2?p.moveTo(u,h):p.lineTo(u,h),r+=f[x]/y,x=(x+1)%_;}x%2!=0&&p.lineTo(o,a),s=o-u,l=a-h,this._dashOffset=-PS(s*s+l*l);},_dashedQuadraticTo:function _dashedQuadraticTo(t,e,i,n){var o=i,a=n;i=(i+2*t)/3,n=(n+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,i,n,o,a);},toStatic:function toStatic(){var t=this.data;t instanceof Array&&(t.length=this._len,OS&&(this.data=new Float32Array(t)));},getBoundingRect:function getBoundingRect(){MS[0]=MS[1]=TS[0]=TS[1]=Number.MAX_VALUE,IS[0]=IS[1]=AS[0]=AS[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,i=0,n=0,o=0,a=0;a<t.length;){var r=t[a++];switch(1===a&&(n=e=t[a],o=i=t[a+1]),r){case SS.M:e=n=t[a++],i=o=t[a++],TS[0]=n,TS[1]=o,AS[0]=n,AS[1]=o;break;case SS.L:pn(e,i,t[a],t[a+1],TS,AS),e=t[a++],i=t[a++];break;case SS.C:gn(e,i,t[a++],t[a++],t[a++],t[a++],t[a],t[a+1],TS,AS),e=t[a++],i=t[a++];break;case SS.Q:mn(e,i,t[a++],t[a++],t[a],t[a+1],TS,AS),e=t[a++],i=t[a++];break;case SS.A:var s=t[a++],l=t[a++],u=t[a++],h=t[a++],c=t[a++],d=t[a++]+c;a+=1;var f=1-t[a++];1===a&&(n=LS(c)*u+s,o=kS(c)*h+l),vn(s,l,u,h,c,d,f,TS,AS),e=LS(d)*u+s,i=kS(d)*h+l;break;case SS.R:pn(n=e=t[a++],o=i=t[a++],n+t[a++],o+t[a++],TS,AS);break;case SS.Z:e=n,i=o;}tt(MS,MS,TS),et(IS,IS,AS);}return 0===a&&(MS[0]=MS[1]=IS[0]=IS[1]=0),new de(MS[0],MS[1],IS[0]-MS[0],IS[1]-MS[1]);},rebuildPath:function rebuildPath(t){for(var e,i,n,o,a,r,s=this.data,l=this._ux,u=this._uy,h=this._len,c=0;c<h;){var d=s[c++];switch(1===c&&(e=n=s[c],i=o=s[c+1]),d){case SS.M:e=n=s[c++],i=o=s[c++],t.moveTo(n,o);break;case SS.L:a=s[c++],r=s[c++],(NS(a-n)>l||NS(r-o)>u||c===h-1)&&(t.lineTo(a,r),n=a,o=r);break;case SS.C:t.bezierCurveTo(s[c++],s[c++],s[c++],s[c++],s[c++],s[c++]),n=s[c-2],o=s[c-1];break;case SS.Q:t.quadraticCurveTo(s[c++],s[c++],s[c++],s[c++]),n=s[c-2],o=s[c-1];break;case SS.A:var f=s[c++],p=s[c++],g=s[c++],m=s[c++],v=s[c++],y=s[c++],x=s[c++],_=s[c++],w=g>m?g:m,b=g>m?1:g/m,S=g>m?m/g:1,M=v+y;Math.abs(g-m)>.001?(t.translate(f,p),t.rotate(x),t.scale(b,S),t.arc(0,0,w,v,M,1-_),t.scale(1/b,1/S),t.rotate(-x),t.translate(-f,-p)):t.arc(f,p,w,v,M,1-_),1===c&&(e=LS(v)*g+f,i=kS(v)*m+p),n=LS(M)*g+f,o=kS(M)*m+p;break;case SS.R:e=n=s[c],i=o=s[c+1],t.rect(s[c++],s[c++],s[c++],s[c++]);break;case SS.Z:t.closePath(),n=e,o=i;}}}},ES.CMD=SS;var RS=2*Math.PI,zS=2*Math.PI,BS=ES.CMD,VS=2*Math.PI,GS=1e-4,FS=[-1,-1,-1],WS=[-1,-1],HS=fb.prototype.getCanvasPattern,ZS=Math.abs,US=new ES(!0);Pn.prototype={constructor:Pn,type:"path",__dirtyPath:!0,strokeContainThreshold:5,subPixelOptimize:!1,brush:function brush(t,e){var i=this.style,n=this.path||US,o=i.hasStroke(),a=i.hasFill(),r=i.fill,s=i.stroke,l=a&&!!r.colorStops,u=o&&!!s.colorStops,h=a&&!!r.image,c=o&&!!s.image;if(i.bind(t,this,e),this.setTransform(t),this.__dirty){var d;l&&(d=d||this.getBoundingRect(),this._fillGradient=i.getGradient(t,r,d)),u&&(d=d||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,s,d));}l?t.fillStyle=this._fillGradient:h&&(t.fillStyle=HS.call(r,t)),u?t.strokeStyle=this._strokeGradient:c&&(t.strokeStyle=HS.call(s,t));var f=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,m=this.getGlobalScale();if(n.setScale(m[0],m[1]),this.__dirtyPath||f&&!g&&o?(n.beginPath(t),f&&!g&&(n.setLineDash(f),n.setLineDashOffset(p)),this.buildPath(n,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),a)if(null!=i.fillOpacity){v=t.globalAlpha;t.globalAlpha=i.fillOpacity*i.opacity,n.fill(t),t.globalAlpha=v;}else n.fill(t);if(f&&g&&(t.setLineDash(f),t.lineDashOffset=p),o)if(null!=i.strokeOpacity){var v=t.globalAlpha;t.globalAlpha=i.strokeOpacity*i.opacity,n.stroke(t),t.globalAlpha=v;}else n.stroke(t);f&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()));},buildPath:function buildPath(t,e,i){},createPathProxy:function createPathProxy(){this.path=new ES();},getBoundingRect:function getBoundingRect(){var t=this._rect,e=this.style,i=!t;if(i){var n=this.path;n||(n=this.path=new ES()),this.__dirtyPath&&(n.beginPath(),this.buildPath(n,this.shape,!1)),t=n.getBoundingRect();}if(this._rect=t,e.hasStroke()){var o=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||i){o.copy(t);var a=e.lineWidth,r=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(a=Math.max(a,this.strokeContainThreshold||4)),r>1e-10&&(o.width+=a/r,o.height+=a/r,o.x-=a/r/2,o.y-=a/r/2);}return o;}return t;},contain:function contain(t,e){var i=this.transformCoordToLocal(t,e),n=this.getBoundingRect(),o=this.style;if(t=i[0],e=i[1],n.contain(t,e)){var a=this.path.data;if(o.hasStroke()){var r=o.lineWidth,s=o.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(o.hasFill()||(r=Math.max(r,this.strokeContainThreshold)),kn(a,r/s,t,e)))return!0;}if(o.hasFill())return Ln(a,t,e);}return!1;},dirty:function dirty(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=this.__dirtyText=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty();},animateShape:function animateShape(t){return this.animate("shape",t);},attrKV:function attrKV(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):di.prototype.attrKV.call(this,t,e);},setShape:function setShape(t,e){var i=this.shape;if(i){if(w(t))for(var n in t){t.hasOwnProperty(n)&&(i[n]=t[n]);}else i[t]=e;this.dirty(!0);}return this;},getLineScale:function getLineScale(){var t=this.transform;return t&&ZS(t[0]-1)>1e-10&&ZS(t[3]-1)>1e-10?Math.sqrt(ZS(t[0]*t[3]-t[2]*t[1])):1;}},Pn.extend=function(t){var e=function e(_e2){Pn.call(this,_e2),t.style&&this.style.extendFrom(t.style,!1);var i=t.shape;if(i){this.shape=this.shape||{};var n=this.shape;for(var o in i){!n.hasOwnProperty(o)&&i.hasOwnProperty(o)&&(n[o]=i[o]);}}t.init&&t.init.call(this,_e2);};u(e,Pn);for(var i in t){"style"!==i&&"shape"!==i&&(e.prototype[i]=t[i]);}return e;},u(Pn,di);var XS=ES.CMD,jS=[[],[],[]],YS=Math.sqrt,qS=Math.atan2,KS=function KS(t,e){var i,n,o,a,r,s,l=t.data,u=XS.M,h=XS.C,c=XS.L,d=XS.R,f=XS.A,p=XS.Q;for(o=0,a=0;o<l.length;){switch(i=l[o++],a=o,n=0,i){case u:case c:n=1;break;case h:n=3;break;case p:n=2;break;case f:var g=e[4],m=e[5],v=YS(e[0]*e[0]+e[1]*e[1]),y=YS(e[2]*e[2]+e[3]*e[3]),x=qS(-e[1]/y,e[0]/v);l[o]*=v,l[o++]+=g,l[o]*=y,l[o++]+=m,l[o++]*=v,l[o++]*=y,l[o++]+=x,l[o++]+=x,a=o+=2;break;case d:s[0]=l[o++],s[1]=l[o++],Q(s,s,e),l[a++]=s[0],l[a++]=s[1],s[0]+=l[o++],s[1]+=l[o++],Q(s,s,e),l[a++]=s[0],l[a++]=s[1];}for(r=0;r<n;r++){(s=jS[r])[0]=l[o++],s[1]=l[o++],Q(s,s,e),l[a++]=s[0],l[a++]=s[1];}}},$S=Math.sqrt,JS=Math.sin,QS=Math.cos,tM=Math.PI,eM=function eM(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]);},iM=function iM(t,e){return(t[0]*e[0]+t[1]*e[1])/(eM(t)*eM(e));},nM=function nM(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(iM(t,e));},oM=/([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,aM=/-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,rM=function rM(t){di.call(this,t);};rM.prototype={constructor:rM,type:"text",brush:function brush(t,e){var i=this.style;this.__dirty&&Ye(i),i.fill=i.stroke=i.shadowBlur=i.shadowColor=i.shadowOffsetX=i.shadowOffsetY=null;var n=i.text;null!=n&&(n+=""),ci(n,i)?(this.setTransform(t),Ke(this,t,n,i,null,e),this.restoreTransform(t)):t.__attrCachedBy=rb.NONE;},getBoundingRect:function getBoundingRect(){var t=this.style;if(this.__dirty&&Ye(t),!this._rect){var e=t.text;null!=e?e+="":e="";var i=ke(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.textLineHeight,t.rich);if(i.x+=t.x||0,i.y+=t.y||0,si(t.textStroke,t.textStrokeWidth)){var n=t.textStrokeWidth;i.x-=n/2,i.y-=n/2,i.width+=n,i.height+=n;}this._rect=i;}return this._rect;}},u(rM,di);var sM=Pn.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function buildPath(t,e,i){i&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0);}}),lM=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],uM=function uM(t){return U_.browser.ie&&U_.browser.version>=11?function(){var e,i=this.__clipPaths,n=this.style;if(i)for(var o=0;o<i.length;o++){var a=i[o],r=a&&a.shape,s=a&&a.type;if(r&&("sector"===s&&r.startAngle===r.endAngle||"rect"===s&&(!r.width||!r.height))){for(l=0;l<lM.length;l++){lM[l][2]=n[lM[l][0]],n[lM[l][0]]=lM[l][1];}e=!0;break;}}if(t.apply(this,arguments),e)for(var l=0;l<lM.length;l++){n[lM[l][0]]=lM[l][2];}}:t;},hM=Pn.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:uM(Pn.prototype.brush),buildPath:function buildPath(t,e){var i=e.cx,n=e.cy,o=Math.max(e.r0||0,0),a=Math.max(e.r,0),r=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(r),h=Math.sin(r);t.moveTo(u*o+i,h*o+n),t.lineTo(u*a+i,h*a+n),t.arc(i,n,a,r,s,!l),t.lineTo(Math.cos(s)*o+i,Math.sin(s)*o+n),0!==o&&t.arc(i,n,o,s,r,l),t.closePath();}}),cM=Pn.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function buildPath(t,e){var i=e.cx,n=e.cy,o=2*Math.PI;t.moveTo(i+e.r,n),t.arc(i,n,e.r,0,o,!1),t.moveTo(i+e.r0,n),t.arc(i,n,e.r0,0,o,!0);}}),dM=function dM(t,e){for(var i=t.length,n=[],o=0,a=1;a<i;a++){o+=K(t[a-1],t[a]);}var r=o/2;r=r<i?i:r;for(a=0;a<r;a++){var s,l,u,h=a/(r-1)*(e?i:i-1),c=Math.floor(h),d=h-c,f=t[c%i];e?(s=t[(c-1+i)%i],l=t[(c+1)%i],u=t[(c+2)%i]):(s=t[0===c?c:c-1],l=t[c>i-2?i-1:c+1],u=t[c>i-3?i-1:c+2]);var p=d*d,g=d*p;n.push([Bn(s[0],f[0],l[0],u[0],d,p,g),Bn(s[1],f[1],l[1],u[1],d,p,g)]);}return n;},fM=function fM(t,e,i,n){var o,a,r,s,l=[],u=[],h=[],c=[];if(n){r=[1/0,1/0],s=[-1/0,-1/0];for(var d=0,f=t.length;d<f;d++){tt(r,r,t[d]),et(s,s,t[d]);}tt(r,r,n[0]),et(s,s,n[1]);}for(var d=0,f=t.length;d<f;d++){var p=t[d];if(i)o=t[d?d-1:f-1],a=t[(d+1)%f];else{if(0===d||d===f-1){l.push(F(t[d]));continue;}o=t[d-1],a=t[d+1];}U(u,a,o),Y(u,u,e);var g=K(p,o),m=K(p,a),v=g+m;0!==v&&(g/=v,m/=v),Y(h,u,-g),Y(c,u,m);var y=H([],p,h),x=H([],p,c);n&&(et(y,y,r),tt(y,y,s),et(x,x,r),tt(x,x,s)),l.push(y),l.push(x);}return i&&l.push(l.shift()),l;},pM=Pn.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function buildPath(t,e){Vn(t,e,!0);}}),gM=Pn.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function buildPath(t,e){Vn(t,e,!1);}}),mM=Math.round,vM={},yM=Pn.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function buildPath(t,e){var i,n,o,a;this.subPixelOptimize?(Fn(vM,e,this.style),i=vM.x,n=vM.y,o=vM.width,a=vM.height,vM.r=e.r,e=vM):(i=e.x,n=e.y,o=e.width,a=e.height),e.r?je(t,e):t.rect(i,n,o,a),t.closePath();}}),xM={},_M=Pn.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function buildPath(t,e){var i,n,o,a;this.subPixelOptimize?(Gn(xM,e,this.style),i=xM.x1,n=xM.y1,o=xM.x2,a=xM.y2):(i=e.x1,n=e.y1,o=e.x2,a=e.y2);var r=e.percent;0!==r&&(t.moveTo(i,n),r<1&&(o=i*(1-r)+o*r,a=n*(1-r)+a*r),t.lineTo(o,a));},pointAt:function pointAt(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t];}}),wM=[],bM=Pn.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function buildPath(t,e){var i=e.x1,n=e.y1,o=e.x2,a=e.y2,r=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,h=e.percent;0!==h&&(t.moveTo(i,n),null==l||null==u?(h<1&&(cn(i,r,o,h,wM),r=wM[1],o=wM[2],cn(n,s,a,h,wM),s=wM[1],a=wM[2]),t.quadraticCurveTo(r,s,o,a)):(h<1&&(an(i,r,l,o,h,wM),r=wM[1],l=wM[2],o=wM[3],an(n,s,u,a,h,wM),s=wM[1],u=wM[2],a=wM[3]),t.bezierCurveTo(r,s,l,u,o,a)));},pointAt:function pointAt(t){return Hn(this.shape,t,!1);},tangentAt:function tangentAt(t){var e=Hn(this.shape,t,!0);return q(e,e);}}),SM=Pn.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function buildPath(t,e){var i=e.cx,n=e.cy,o=Math.max(e.r,0),a=e.startAngle,r=e.endAngle,s=e.clockwise,l=Math.cos(a),u=Math.sin(a);t.moveTo(l*o+i,u*o+n),t.arc(i,n,o,a,r,!s);}}),MM=Pn.extend({type:"compound",shape:{paths:null},_updatePathDirty:function _updatePathDirty(){for(var t=this.__dirtyPath,e=this.shape.paths,i=0;i<e.length;i++){t=t||e[i].__dirtyPath;}this.__dirtyPath=t,this.__dirty=this.__dirty||t;},beforeBrush:function beforeBrush(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),i=0;i<t.length;i++){t[i].path||t[i].createPathProxy(),t[i].path.setScale(e[0],e[1]);}},buildPath:function buildPath(t,e){for(var i=e.paths||[],n=0;n<i.length;n++){i[n].buildPath(t,i[n].shape,!0);}},afterBrush:function afterBrush(){for(var t=this.shape.paths||[],e=0;e<t.length;e++){t[e].__dirtyPath=!1;}},getBoundingRect:function getBoundingRect(){return this._updatePathDirty(),Pn.prototype.getBoundingRect.call(this);}}),IM=function IM(t){this.colorStops=t||[];};IM.prototype={constructor:IM,addColorStop:function addColorStop(t,e){this.colorStops.push({offset:t,color:e});}};var TM=function TM(t,e,i,n,o,a){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==i?1:i,this.y2=null==n?0:n,this.type="linear",this.global=a||!1,IM.call(this,o);};TM.prototype={constructor:TM},u(TM,IM);var AM=function AM(t,e,i,n,o){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==i?.5:i,this.type="radial",this.global=o||!1,IM.call(this,n);};AM.prototype={constructor:AM},u(AM,IM),Zn.prototype.incremental=!0,Zn.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1;},Zn.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty();},Zn.prototype.addDisplayables=function(t,e){e=e||!1;for(var i=0;i<t.length;i++){this.addDisplayable(t[i],e);}},Zn.prototype.eachPendingDisplayable=function(t){for(e=this._cursor;e<this._displayables.length;e++){t&&t(this._displayables[e]);}for(var e=0;e<this._temporaryDisplayables.length;e++){t&&t(this._temporaryDisplayables[e]);}},Zn.prototype.update=function(){this.updateTransform();for(t=this._cursor;t<this._displayables.length;t++){(e=this._displayables[t]).parent=this,e.update(),e.parent=null;}for(var t=0;t<this._temporaryDisplayables.length;t++){var e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null;}},Zn.prototype.brush=function(t,e){for(i=this._cursor;i<this._displayables.length;i++){(n=this._displayables[i]).beforeBrush&&n.beforeBrush(t),n.brush(t,i===this._cursor?null:this._displayables[i-1]),n.afterBrush&&n.afterBrush(t);}this._cursor=i;for(var i=0;i<this._temporaryDisplayables.length;i++){var n=this._temporaryDisplayables[i];n.beforeBrush&&n.beforeBrush(t),n.brush(t,0===i?null:this._temporaryDisplayables[i-1]),n.afterBrush&&n.afterBrush(t);}this._temporaryDisplayables=[],this.notClear=!0;};var DM=[];Zn.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new de(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var i=this._displayables[e],n=i.getBoundingRect().clone();i.needLocalTransform()&&n.applyTransform(i.getLocalTransform(DM)),t.union(n);}this._rect=t;}return this._rect;},Zn.prototype.contain=function(t,e){var i=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(i[0],i[1]))for(var n=0;n<this._displayables.length;n++){if(this._displayables[n].contain(t,e))return!0;}return!1;},u(Zn,di);var CM=Math.round,LM=Math.max,kM=Math.min,PM={},NM=1,OM=function OM(t,e){for(var i=[],n=t.length,o=0;o<n;o++){var a=t[o];a.path||a.createPathProxy(),a.__dirtyPath&&a.buildPath(a.path,a.shape,!0),i.push(a.path);}var r=new Pn(e);return r.createPathProxy(),r.buildPath=function(t){t.appendPath(i);var e=t.getContext();e&&t.rebuildPath(e);},r;},EM=R(),RM=0,zM=(Object.freeze||Object)({Z2_EMPHASIS_LIFT:NM,extendShape:Un,extendPath:function extendPath(t,e){return zn(t,e);},makePath:Xn,makeImage:jn,mergePath:OM,resizePath:qn,subPixelOptimizeLine:Kn,subPixelOptimizeRect:$n,subPixelOptimize:Jn,setElementHoverStyle:ro,isInEmphasis:so,setHoverStyle:fo,setAsHoverStyleTrigger:po,setLabelStyle:go,setTextStyle:mo,setText:function setText(t,e,i){var n,o={isRectText:!0};!1===i?n=!0:o.autoColor=i,vo(t,e,o,n);},getFont:So,updateProps:Io,initProps:To,getTransform:Ao,applyTransform:Do,transformDirection:Co,groupTransition:Lo,clipPointsByRect:ko,clipRectByRect:function clipRectByRect(t,e){var i=LM(t.x,e.x),n=kM(t.x+t.width,e.x+e.width),o=LM(t.y,e.y),a=kM(t.y+t.height,e.y+e.height);if(n>=i&&a>=o)return{x:i,y:o,width:n-i,height:a-o};},createIcon:Po,Group:tb,Image:fi,Text:rM,Circle:sM,Sector:hM,Ring:cM,Polygon:pM,Polyline:gM,Rect:yM,Line:_M,BezierCurve:bM,Arc:SM,IncrementalDisplayable:Zn,CompoundPath:MM,LinearGradient:TM,RadialGradient:AM,BoundingRect:de}),BM=["textStyle","color"],VM={getTextColor:function getTextColor(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(BM):null);},getFont:function getFont(){return So({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel);},getTextRect:function getTextRect(t){return ke(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("lineHeight"),this.getShallow("rich"),this.getShallow("truncateText"));}},GM=Qb([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),FM={getItemStyle:function getItemStyle(t,e){var i=GM(this,t,e),n=this.getBorderLineDash();return n&&(i.lineDash=n),i;},getBorderLineDash:function getBorderLineDash(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1];}},WM=h,HM=Bi();No.prototype={constructor:No,init:null,mergeOption:function mergeOption(t){n(this.option,t,!0);},get:function get(t,e){return null==t?this.option:Oo(this.option,this.parsePath(t),!e&&Eo(this,t));},getShallow:function getShallow(t,e){var i=this.option,n=null==i?i:i[t],o=!e&&Eo(this,t);return null==n&&o&&(n=o.getShallow(t)),n;},getModel:function getModel(t,e){var i,n=null==t?this.option:Oo(this.option,t=this.parsePath(t));return e=e||(i=Eo(this,t))&&i.getModel(t),new No(n,e,this.ecModel);},isEmpty:function isEmpty(){return null==this.option;},restoreData:function restoreData(){},clone:function clone(){return new(0,this.constructor)(i(this.option));},setReadOnly:function setReadOnly(t){},parsePath:function parsePath(t){return"string"==typeof t&&(t=t.split(".")),t;},customizeGetParent:function customizeGetParent(t){HM(this).getParent=t;},isAnimationEnabled:function isAnimationEnabled(){if(!U_.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled();}}},ji(No),Yi(No),WM(No,eS),WM(No,nS),WM(No,VM),WM(No,FM);var ZM=0,UM=1e-4,XM=9007199254740991,jM=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,YM=(Object.freeze||Object)({linearMap:Bo,parsePercent:Vo,round:Go,asc:Fo,getPrecision:Wo,getPrecisionSafe:Ho,getPixelPrecision:Zo,getPercentWithPrecision:Uo,MAX_SAFE_INTEGER:XM,remRadian:Xo,isRadianAroundZero:jo,parseDate:Yo,quantity:qo,nice:$o,quantile:function quantile(t,e){var i=(t.length-1)*e+1,n=Math.floor(i),o=+t[n-1],a=i-n;return a?o+a*(t[n]-o):o;},reformIntervals:Jo,isNumeric:Qo}),qM=L,KM=/([&<>"'])/g,$M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},JM=["a","b","c","d","e","f","g"],QM=function QM(t,e){return"{"+t+(null==e?"":e)+"}";},tI=ze,eI=(Object.freeze||Object)({addCommas:ta,toCamelCase:ea,normalizeCssArray:qM,encodeHTML:ia,formatTpl:na,formatTplSimple:oa,getTooltipMarker:aa,formatTime:sa,capitalFirst:la,truncateText:tI,getTextBoundingRect:function getTextBoundingRect(t){return ke(t.text,t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.textLineHeight,t.rich,t.truncate);},getTextRect:function getTextRect(t,e,i,n,o,a,r,s){return ke(t,e,i,n,o,s,a,r);}}),iI=d,nI=["left","right","top","bottom","width","height"],oI=[["width","left","right"],["height","top","bottom"]],aI=ua,rI=(v(ua,"vertical"),v(ua,"horizontal"),{getBoxLayoutParams:function getBoxLayoutParams(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")};}}),sI=Bi(),lI=No.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function $constructor(t,e,i,n){No.call(this,t,e,i,n),this.uid=Ro("ec_cpt_model");},init:function init(t,e,i,n){this.mergeDefaultAndTheme(t,i);},mergeDefaultAndTheme:function mergeDefaultAndTheme(t,e){var i=this.layoutMode,o=i?ga(t):{};n(t,e.getTheme().get(this.mainType)),n(t,this.getDefaultOption()),i&&pa(t,o,i);},mergeOption:function mergeOption(t,e){n(this.option,t,!0);var i=this.layoutMode;i&&pa(this.option,t,i);},optionUpdated:function optionUpdated(t,e){},getDefaultOption:function getDefaultOption(){var t=sI(this);if(!t.defaultOption){for(var e=[],i=this.constructor;i;){var o=i.prototype.defaultOption;o&&e.push(o),i=i.superClass;}for(var a={},r=e.length-1;r>=0;r--){a=n(a,e[r],!0);}t.defaultOption=a;}return t.defaultOption;},getReferringComponents:function getReferringComponents(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)});}});$i(lI,{registerWhenExtend:!0}),function(t){var e={};t.registerSubTypeDefaulter=function(t,i){t=Ui(t),e[t.main]=i;},t.determineSubType=function(i,n){var o=n.type;if(!o){var a=Ui(i).main;t.hasSubTypes(i)&&e[a]&&(o=e[a](n));}return o;};}(lI),function(t,e){function i(t){var i={},a=[];return d(t,function(r){var s=n(i,r),u=o(s.originalDeps=e(r),t);s.entryCount=u.length,0===s.entryCount&&a.push(r),d(u,function(t){l(s.predecessor,t)<0&&s.predecessor.push(t);var e=n(i,t);l(e.successor,t)<0&&e.successor.push(r);});}),{graph:i,noEntryList:a};}function n(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e];}function o(t,e){var i=[];return d(t,function(t){l(e,t)>=0&&i.push(t);}),i;}t.topologicalTravel=function(t,e,n,o){function a(t){s[t].entryCount--,0===s[t].entryCount&&l.push(t);}if(t.length){var r=i(e),s=r.graph,l=r.noEntryList,u={};for(d(t,function(t){u[t]=!0;});l.length;){var h=l.pop(),c=s[h],f=!!u[h];f&&(n.call(o,h,c.originalDeps.slice()),delete u[h]),d(c.successor,f?function(t){u[t]=!0,a(t);}:a);}d(u,function(){throw new Error("Circle dependency may exists");});}};}(lI,function(t){var e=[];return d(lI.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[]);}),e=f(e,function(t){return Ui(t).main;}),"dataset"!==t&&l(e,"dataset")<=0&&e.unshift("dataset"),e;}),h(lI,rI);var uI="";"undefined"!=typeof navigator&&(uI=navigator.platform||"");var hI={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:uI.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},cI=Bi(),dI={clearColorPalette:function clearColorPalette(){cI(this).colorIdx=0,cI(this).colorNameMap={};},getColorFromPalette:function getColorFromPalette(t,e,i){var n=cI(e=e||this),o=n.colorIdx||0,a=n.colorNameMap=n.colorNameMap||{};if(a.hasOwnProperty(t))return a[t];var r=Di(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=i&&s?va(s,i):r;if((l=l||r)&&l.length){var u=l[o];return t&&(a[t]=u),n.colorIdx=(o+1)%l.length,u;}}},fI={cartesian2d:function cartesian2d(t,e,i,n){var o=t.getReferringComponents("xAxis")[0],a=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],i.set("x",o),i.set("y",a),xa(o)&&(n.set("x",o),e.firstCategoryDimIndex=0),xa(a)&&(n.set("y",a),e.firstCategoryDimIndex=1);},singleAxis:function singleAxis(t,e,i,n){var o=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],i.set("single",o),xa(o)&&(n.set("single",o),e.firstCategoryDimIndex=0);},polar:function polar(t,e,i,n){var o=t.getReferringComponents("polar")[0],a=o.findAxisModel("radiusAxis"),r=o.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],i.set("radius",a),i.set("angle",r),xa(a)&&(n.set("radius",a),e.firstCategoryDimIndex=0),xa(r)&&(n.set("angle",r),e.firstCategoryDimIndex=1);},geo:function geo(t,e,i,n){e.coordSysDims=["lng","lat"];},parallel:function parallel(t,e,i,n){var o=t.ecModel,a=o.getComponent("parallel",t.get("parallelIndex")),r=e.coordSysDims=a.dimensions.slice();d(a.parallelAxisIndex,function(t,a){var s=o.getComponent("parallelAxis",t),l=r[a];i.set(l,s),xa(s)&&null==e.firstCategoryDimIndex&&(n.set(l,s),e.firstCategoryDimIndex=a);});}},pI="original",gI="arrayRows",mI="objectRows",vI="keyedColumns",yI="unknown",xI="typedArray",_I="column",wI="row";_a.seriesDataToSource=function(t){return new _a({data:t,sourceFormat:S(t)?xI:pI,fromDataset:!1});},Yi(_a);var bI=Bi(),SI="\0_ec_inner",MI=No.extend({init:function init(t,e,i,n){i=i||{},this.option=null,this._theme=new No(i),this._optionManager=n;},setOption:function setOption(t,e){k(!(SI in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null);},resetOption:function resetOption(t){var e=!1,i=this._optionManager;if(!t||"recreate"===t){var n=i.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(n)):Ea.call(this,n),e=!0;}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var o=i.getTimelineOption(this);o&&(this.mergeOption(o),e=!0);}if(!t||"recreate"===t||"media"===t){var a=i.getMediaOption(this,this._api);a.length&&d(a,function(t){this.mergeOption(t,e=!0);},this);}return e;},mergeOption:function mergeOption(t){var e=this.option,o=this._componentsMap,r=[];Sa(this),d(t,function(t,o){null!=t&&(lI.hasClass(o)?o&&r.push(o):e[o]=null==e[o]?i(t):n(e[o],t,!0));}),lI.topologicalTravel(r,lI.getAllClassMainTypes(),function(i,n){var r=Di(t[i]),s=Pi(o.get(i),r);Ni(s),d(s,function(t,e){var n=t.option;w(n)&&(t.keyInfo.mainType=i,t.keyInfo.subType=za(i,n,t.exist));});var l=Ra(o,n);e[i]=[],o.set(i,[]),d(s,function(t,n){var r=t.exist,s=t.option;if(k(w(s)||r,"Empty component definition"),s){var u=lI.getClass(i,t.keyInfo.subType,!0);if(r&&r instanceof u)r.name=t.keyInfo.name,r.mergeOption(s,this),r.optionUpdated(s,!1);else{var h=a({dependentModels:l,componentIndex:n},t.keyInfo);a(r=new u(s,this,this,h),h),r.init(s,this,this,h),r.optionUpdated(null,!0);}}else r.mergeOption({},this),r.optionUpdated({},!1);o.get(i)[n]=r,e[i][n]=r.option;},this),"series"===i&&Ba(this,o.get("series"));},this),this._seriesIndicesMap=R(this._seriesIndices=this._seriesIndices||[]);},getOption:function getOption(){var t=i(this.option);return d(t,function(e,i){if(lI.hasClass(i)){for(var n=(e=Di(e)).length-1;n>=0;n--){Ei(e[n])&&e.splice(n,1);}t[i]=e;}}),delete t[SI],t;},getTheme:function getTheme(){return this._theme;},getComponent:function getComponent(t,e){var i=this._componentsMap.get(t);if(i)return i[e||0];},queryComponents:function queryComponents(t){var e=t.mainType;if(!e)return[];var i=t.index,n=t.id,o=t.name,a=this._componentsMap.get(e);if(!a||!a.length)return[];var r;if(null!=i)y(i)||(i=[i]),r=g(f(i,function(t){return a[t];}),function(t){return!!t;});else if(null!=n){var s=y(n);r=g(a,function(t){return s&&l(n,t.id)>=0||!s&&t.id===n;});}else if(null!=o){var u=y(o);r=g(a,function(t){return u&&l(o,t.name)>=0||!u&&t.name===o;});}else r=a.slice();return Va(r,t);},findComponents:function findComponents(t){var e=t.query,i=t.mainType,n=function(t){var e=i+"Index",n=i+"Id",o=i+"Name";return!t||null==t[e]&&null==t[n]&&null==t[o]?null:{mainType:i,index:t[e],id:t[n],name:t[o]};}(e);return function(e){return t.filter?g(e,t.filter):e;}(Va(n?this.queryComponents(n):this._componentsMap.get(i),t));},eachComponent:function eachComponent(t,e,i){var n=this._componentsMap;"function"==typeof t?(i=e,e=t,n.each(function(t,n){d(t,function(t,o){e.call(i,n,t,o);});})):_(t)?d(n.get(t),e,i):w(t)&&d(this.findComponents(t),e,i);},getSeriesByName:function getSeriesByName(t){return g(this._componentsMap.get("series"),function(e){return e.name===t;});},getSeriesByIndex:function getSeriesByIndex(t){return this._componentsMap.get("series")[t];},getSeriesByType:function getSeriesByType(t){return g(this._componentsMap.get("series"),function(e){return e.subType===t;});},getSeries:function getSeries(){return this._componentsMap.get("series").slice();},getSeriesCount:function getSeriesCount(){return this._componentsMap.get("series").length;},eachSeries:function eachSeries(t,e){d(this._seriesIndices,function(i){var n=this._componentsMap.get("series")[i];t.call(e,n,i);},this);},eachRawSeries:function eachRawSeries(t,e){d(this._componentsMap.get("series"),t,e);},eachSeriesByType:function eachSeriesByType(t,e,i){d(this._seriesIndices,function(n){var o=this._componentsMap.get("series")[n];o.subType===t&&e.call(i,o,n);},this);},eachRawSeriesByType:function eachRawSeriesByType(t,e,i){return d(this.getSeriesByType(t),e,i);},isSeriesFiltered:function isSeriesFiltered(t){return null==this._seriesIndicesMap.get(t.componentIndex);},getCurrentSeriesIndices:function getCurrentSeriesIndices(){return(this._seriesIndices||[]).slice();},filterSeries:function filterSeries(t,e){Ba(this,g(this._componentsMap.get("series"),t,e));},restoreData:function restoreData(t){var e=this._componentsMap;Ba(this,e.get("series"));var i=[];e.each(function(t,e){i.push(e);}),lI.topologicalTravel(i,lI.getAllClassMainTypes(),function(i,n){d(e.get(i),function(e){("series"!==i||!Na(e,t))&&e.restoreData();});});}});h(MI,dI);var II=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],TI={};Fa.prototype={constructor:Fa,create:function create(t,e){var i=[];d(TI,function(n,o){var a=n.create(t,e);i=i.concat(a||[]);}),this._coordinateSystems=i;},update:function update(t,e){d(this._coordinateSystems,function(i){i.update&&i.update(t,e);});},getCoordinateSystems:function getCoordinateSystems(){return this._coordinateSystems.slice();}},Fa.register=function(t,e){TI[t]=e;},Fa.get=function(t){return TI[t];};var AI=d,DI=i,CI=f,LI=n,kI=/^(min|max)?(.+)$/;Wa.prototype={constructor:Wa,setOption:function setOption(t,e){t&&d(Di(t.series),function(t){t&&t.data&&S(t.data)&&N(t.data);}),t=DI(t,!0);var i=this._optionBackup,n=Ha.call(this,t,e,!i);this._newBaseOption=n.baseOption,i?(ja(i.baseOption,n.baseOption),n.timelineOptions.length&&(i.timelineOptions=n.timelineOptions),n.mediaList.length&&(i.mediaList=n.mediaList),n.mediaDefault&&(i.mediaDefault=n.mediaDefault)):this._optionBackup=n;},mountOption:function mountOption(t){var e=this._optionBackup;return this._timelineOptions=CI(e.timelineOptions,DI),this._mediaList=CI(e.mediaList,DI),this._mediaDefault=DI(e.mediaDefault),this._currentMediaIndices=[],DI(t?e.baseOption:this._newBaseOption);},getTimelineOption:function getTimelineOption(t){var e,i=this._timelineOptions;if(i.length){var n=t.getComponent("timeline");n&&(e=DI(i[n.getCurrentIndex()],!0));}return e;},getMediaOption:function getMediaOption(t){var e=this._api.getWidth(),i=this._api.getHeight(),n=this._mediaList,o=this._mediaDefault,a=[],r=[];if(!n.length&&!o)return r;for(var s=0,l=n.length;s<l;s++){Za(n[s].query,e,i)&&a.push(s);}return!a.length&&o&&(a=[-1]),a.length&&!Xa(a,this._currentMediaIndices)&&(r=CI(a,function(t){return DI(-1===t?o.option:n[t].option);})),this._currentMediaIndices=a,r;}};var PI=d,NI=w,OI=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],EI=function EI(t,e){PI(tr(t.series),function(t){NI(t)&&Qa(t);});var i=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&i.push("valueAxis","categoryAxis","logAxis","timeAxis"),PI(i,function(e){PI(tr(t[e]),function(t){t&&($a(t,"axisLabel"),$a(t.axisPointer,"label"));});}),PI(tr(t.parallel),function(t){var e=t&&t.parallelAxisDefault;$a(e,"axisLabel"),$a(e&&e.axisPointer,"label");}),PI(tr(t.calendar),function(t){qa(t,"itemStyle"),$a(t,"dayLabel"),$a(t,"monthLabel"),$a(t,"yearLabel");}),PI(tr(t.radar),function(t){$a(t,"name");}),PI(tr(t.geo),function(t){NI(t)&&(Ja(t),PI(tr(t.regions),function(t){Ja(t);}));}),PI(tr(t.timeline),function(t){Ja(t),qa(t,"label"),qa(t,"itemStyle"),qa(t,"controlStyle",!0);var e=t.data;y(e)&&d(e,function(t){w(t)&&(qa(t,"label"),qa(t,"itemStyle"));});}),PI(tr(t.toolbox),function(t){qa(t,"iconStyle"),PI(t.feature,function(t){qa(t,"iconStyle");});}),$a(er(t.axisPointer),"label"),$a(er(t.tooltip).axisPointer,"label");},RI=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],zI=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],BI=function BI(t,e){EI(t,e),t.series=Di(t.series),d(t.series,function(t){if(w(t)){var e=t.type;if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var i=ir(t,"pointer.color");null!=i&&nr(t,"itemStyle.normal.color",i);}or(t);}}),t.dataRange&&(t.visualMap=t.dataRange),d(zI,function(e){var i=t[e];i&&(y(i)||(i=[i]),d(i,function(t){or(t);}));});},VI=rr.prototype;VI.pure=!1,VI.persistent=!0,VI.getSource=function(){return this._source;};var GI={arrayRows_column:{pure:!0,count:function count(){return Math.max(0,this._data.length-this._source.startIndex);},getItem:function getItem(t){return this._data[t+this._source.startIndex];},appendData:ur},arrayRows_row:{pure:!0,count:function count(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0;},getItem:function getItem(t){t+=this._source.startIndex;for(var e=[],i=this._data,n=0;n<i.length;n++){var o=i[n];e.push(o?o[t]:null);}return e;},appendData:function appendData(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".');}},objectRows:{pure:!0,count:sr,getItem:lr,appendData:ur},keyedColumns:{pure:!0,count:function count(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0;},getItem:function getItem(t){for(var e=[],i=this._source.dimensionsDefine,n=0;n<i.length;n++){var o=this._data[i[n].name];e.push(o?o[t]:null);}return e;},appendData:function appendData(t){var e=this._data;d(t,function(t,i){for(var n=e[i]||(e[i]=[]),o=0;o<(t||[]).length;o++){n.push(t[o]);}});}},original:{count:sr,getItem:lr,appendData:ur},typedArray:{persistent:!1,pure:!0,count:function count(){return this._data?this._data.length/this._dimSize:0;},getItem:function getItem(t,e){t-=this._offset,e=e||[];for(var i=this._dimSize*t,n=0;n<this._dimSize;n++){e[n]=this._data[i+n];}return e;},appendData:function appendData(t){this._data=t;},clean:function clean(){this._offset+=this.count(),this._data=null;}}},FI={arrayRows:hr,objectRows:function objectRows(t,e,i,n){return null!=i?t[n]:t;},keyedColumns:hr,original:function original(t,e,i,n){var o=Li(t);return null!=i&&o instanceof Array?o[i]:o;},typedArray:hr},WI={arrayRows:cr,objectRows:function objectRows(t,e,i,n){return dr(t[e],this._dimensionInfos[e]);},keyedColumns:cr,original:function original(t,e,i,n){var o=t&&(null==t.value?t:t.value);return!this._rawData.pure&&ki(t)&&(this.hasItemOption=!0),dr(o instanceof Array?o[n]:o,this._dimensionInfos[e]);},typedArray:function typedArray(t,e,i,n){return t[n];}},HI=/\{@(.+?)\}/g,ZI={getDataParams:function getDataParams(t,e){var i=this.getData(e),n=this.getRawValue(t,e),o=i.getRawIndex(t),a=i.getName(t),r=i.getRawDataItem(t),s=i.getItemVisual(t,"color"),l=this.ecModel.getComponent("tooltip"),u=Hi(l&&l.get("renderMode")),h=this.mainType,c="series"===h;return{componentType:h,componentSubType:this.subType,componentIndex:this.componentIndex,seriesType:c?this.subType:null,seriesIndex:this.seriesIndex,seriesId:c?this.id:null,seriesName:c?this.name:null,name:a,dataIndex:o,data:r,dataType:e,value:n,color:s,marker:aa({color:s,renderMode:u}),$vars:["seriesName","name","value"]};},getFormattedLabel:function getFormattedLabel(t,e,i,n,o){e=e||"normal";var a=this.getData(i),r=a.getItemModel(t),s=this.getDataParams(t,i);null!=n&&s.value instanceof Array&&(s.value=s.value[n]);var l=r.get("normal"===e?[o||"label","formatter"]:[e,o||"label","formatter"]);return"function"==typeof l?(s.status=e,l(s)):"string"==typeof l?na(l,s).replace(HI,function(e,i){var n=i.length;return"["===i.charAt(0)&&"]"===i.charAt(n-1)&&(i=+i.slice(1,n-1)),fr(a,t,i);}):void 0;},getRawValue:function getRawValue(t,e){return fr(this.getData(e),t);},formatTooltip:function formatTooltip(){}},UI=mr.prototype;UI.perform=function(t){function e(t){return!(t>=1)&&(t=1),t;}var i=this._upstream,n=t&&t.skip;if(this._dirty&&i){var o=this.context;o.data=o.outputData=i.context.outputData;}this.__pipeline&&(this.__pipeline.currentTask=this);var a;this._plan&&!n&&(a=this._plan(this.context));var r=e(this._modBy),s=this._modDataCount||0,l=e(t&&t.modBy),u=t&&t.modDataCount||0;r===l&&s===u||(a="reset");var h;(this._dirty||"reset"===a)&&(this._dirty=!1,h=yr(this,n)),this._modBy=l,this._modDataCount=u;var c=t&&t.step;if(this._dueEnd=i?i._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var d=this._dueIndex,f=Math.min(null!=c?this._dueIndex+c:1/0,this._dueEnd);if(!n&&(h||d<f)){var p=this._progress;if(y(p))for(var g=0;g<p.length;g++){vr(this,p[g],d,f,l,u);}else vr(this,p,d,f,l,u);}this._dueIndex=f;var m=null!=this._settedOutputEnd?this._settedOutputEnd:f;this._outputDueEnd=m;}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished();};var XI=function(){function t(){return n<i?n++:null;}function e(){var t=n%r*o+Math.ceil(n/r),e=n>=i?null:t<a?t:n;return n++,e;}var i,n,o,a,r,s={reset:function reset(l,u,h,c){n=l,i=u,o=h,a=c,r=Math.ceil(a/o),s.next=o>1&&a>0?e:t;}};return s;}();UI.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context);},UI.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd;},UI.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty());},UI.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0);},UI.getUpstream=function(){return this._upstream;},UI.getDownstream=function(){return this._downstream;},UI.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t;};var jI=Bi(),YI=lI.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function init(t,e,i,n){this.seriesIndex=this.componentIndex,this.dataTask=gr({count:wr,reset:br}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,i),Ma(this);var o=this.getInitialData(t,i);Mr(o,this),this.dataTask.context.data=o,jI(this).dataBeforeProcessed=o,xr(this);},mergeDefaultAndTheme:function mergeDefaultAndTheme(t,e){var i=this.layoutMode,o=i?ga(t):{},a=this.subType;lI.hasClass(a)&&(a+="Series"),n(t,e.getTheme().get(this.subType)),n(t,this.getDefaultOption()),Ci(t,"label",["show"]),this.fillDataTextStyle(t.data),i&&pa(t,o,i);},mergeOption:function mergeOption(t,e){t=n(this.option,t,!0),this.fillDataTextStyle(t.data);var i=this.layoutMode;i&&pa(this.option,t,i),Ma(this);var o=this.getInitialData(t,e);Mr(o,this),this.dataTask.dirty(),this.dataTask.context.data=o,jI(this).dataBeforeProcessed=o,xr(this);},fillDataTextStyle:function fillDataTextStyle(t){if(t&&!S(t))for(var e=["show"],i=0;i<t.length;i++){t[i]&&t[i].label&&Ci(t[i],"label",e);}},getInitialData:function getInitialData(){},appendData:function appendData(t){this.getRawData().appendData(t.data);},getData:function getData(t){var e=Tr(this);if(e){var i=e.context.data;return null==t?i:i.getLinkedData(t);}return jI(this).data;},setData:function setData(t){var e=Tr(this);if(e){var i=e.context;i.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),i.outputData=t,e!==this.dataTask&&(i.data=t);}jI(this).data=t;},getSource:function getSource(){return ba(this);},getRawData:function getRawData(){return jI(this).dataBeforeProcessed;},getBaseAxis:function getBaseAxis(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis();},formatTooltip:function formatTooltip(t,e,i,n){function o(t){return{renderMode:n,content:ia(ta(t)),style:l};}var a=this,r="html"===(n=n||"html")?"<br/>":"\n",s="richText"===n,l={},u=0,h=this.getData(),c=h.mapDimension("defaultedTooltip",!0),f=c.length,g=this.getRawValue(t),m=y(g),v=h.getItemVisual(t,"color");w(v)&&v.colorStops&&(v=(v.colorStops[0]||{}).color),v=v||"transparent";var x=(f>1||m&&!f?function(i){function o(t,i){var o=h.getDimensionInfo(i);if(o&&!1!==o.otherDims.tooltip){var c=o.type,d="sub"+a.seriesIndex+"at"+u,p=aa({color:v,type:"subItem",renderMode:n,markerId:d}),g="string"==typeof p?p:p.content,m=(r?g+ia(o.displayName||"-")+": ":"")+ia("ordinal"===c?t+"":"time"===c?e?"":sa("yyyy/MM/dd hh:mm:ss",t):ta(t));m&&f.push(m),s&&(l[d]=v,++u);}}var r=p(i,function(t,e,i){var n=h.getDimensionInfo(i);return t|=n&&!1!==n.tooltip&&null!=n.displayName;},0),f=[];c.length?d(c,function(e){o(fr(h,t,e),e);}):d(i,o);var g=r?s?"\n":"<br/>":"",m=g+f.join(g||", ");return{renderMode:n,content:m,style:l};}(g):o(f?fr(h,t,c[0]):m?g[0]:g)).content,_=a.seriesIndex+"at"+u,b=aa({color:v,type:"item",renderMode:n,markerId:_});l[_]=v,++u;var S=h.getName(t),M=this.name;Oi(this)||(M=""),M=M?ia(M)+(e?": ":r):"";var I="string"==typeof b?b:b.content;return{html:e?I+M+x:M+I+(S?ia(S)+": "+x:x),markers:l};},isAnimationEnabled:function isAnimationEnabled(){if(U_.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t;},restoreData:function restoreData(){this.dataTask.dirty();},getColorFromPalette:function getColorFromPalette(t,e,i){var n=this.ecModel,o=dI.getColorFromPalette.call(this,t,e,i);return o||(o=n.getColorFromPalette(t,e,i)),o;},coordDimToDataDim:function coordDimToDataDim(t){return this.getRawData().mapDimension(t,!0);},getProgressive:function getProgressive(){return this.get("progressive");},getProgressiveThreshold:function getProgressiveThreshold(){return this.get("progressiveThreshold");},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});h(YI,ZI),h(YI,dI);var qI=function qI(){this.group=new tb(),this.uid=Ro("viewComponent");};qI.prototype={constructor:qI,init:function init(t,e){},render:function render(t,e,i,n){},dispose:function dispose(){},filterForExposedEvent:null};var KI=qI.prototype;KI.updateView=KI.updateLayout=KI.updateVisual=function(t,e,i,n){},ji(qI),$i(qI,{registerWhenExtend:!0});var $I=function $I(){var t=Bi();return function(e){var i=t(e),n=e.pipelineContext,o=i.large,a=i.progressiveRender,r=i.large=n.large,s=i.progressiveRender=n.progressiveRender;return!!(o^r||a^s)&&"reset";};},JI=Bi(),QI=$I();Ar.prototype={type:"chart",init:function init(t,e){},render:function render(t,e,i,n){},highlight:function highlight(t,e,i,n){Cr(t.getData(),n,"emphasis");},downplay:function downplay(t,e,i,n){Cr(t.getData(),n,"normal");},remove:function remove(t,e){this.group.removeAll();},dispose:function dispose(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null,filterForExposedEvent:null};var tT=Ar.prototype;tT.updateView=tT.updateLayout=tT.updateVisual=function(t,e,i,n){this.render(t,e,i,n);},ji(Ar),$i(Ar,{registerWhenExtend:!0}),Ar.markUpdateMethod=function(t,e){JI(t).updateMethod=e;};var eT={incrementalPrepareRender:{progress:function progress(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload);}},render:{forceFirstProgress:!0,progress:function progress(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload);}}},iT="\0__throttleOriginMethod",nT="\0__throttleRate",oT="\0__throttleType",aT={createOnAllSeries:!0,performRawSeries:!0,reset:function reset(t,e){var i=t.getData(),n=(t.visualColorAccessPath||"itemStyle.color").split("."),o=t.get(n)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(i.setVisual("color",o),!e.isSeriesFiltered(t)){"function"!=typeof o||o instanceof IM||i.each(function(e){i.setItemVisual(e,"color",o(t.getDataParams(e)));});return{dataEach:i.hasItemOption?function(t,e){var i=t.getItemModel(e).get(n,!0);null!=i&&t.setItemVisual(e,"color",i);}:null};}}},rT={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},sT=function sT(t,e){function i(t,e){if("string"!=typeof t)return t;var i=t;return d(e,function(t,e){i=i.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t);}),i;}function n(t){var e=a.get(t);if(null==e){for(var i=t.split("."),n=rT.aria,o=0;o<i.length;++o){n=n[i[o]];}return n;}return e;}function o(t){return rT.series.typeNames[t]||"自定义图";}var a=e.getModel("aria");if(a.get("show"))if(a.get("description"))t.setAttribute("aria-label",a.get("description"));else{var r=0;e.eachSeries(function(t,e){++r;},this);var s,l=a.get("data.maxCount")||10,u=a.get("series.maxCount")||10,h=Math.min(r,u);if(!(r<1)){var c=function(){var t=e.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text;}();s=c?i(n("general.withTitle"),{title:c}):n("general.withoutTitle");var f=[];s+=i(n(r>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:r}),e.eachSeries(function(t,e){if(e<h){var a,s=t.get("name"),u="series."+(r>1?"multiple":"single")+".";a=i(a=n(s?u+"withName":u+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:o(t.subType)});var c=t.getData();window.data=c,c.count()>l?a+=i(n("data.partialData"),{displayCnt:l}):a+=n("data.allData");for(var d=[],p=0;p<c.count();p++){if(p<l){var g=c.getName(p),m=fr(c,p);d.push(i(n(g?"data.withName":"data.withoutName"),{name:g,value:m}));}}a+=d.join(n("data.separator.middle"))+n("data.separator.end"),f.push(a);}}),s+=f.join(n("series.multiple.separator.middle"))+n("series.multiple.separator.end"),t.setAttribute("aria-label",s);}}},lT=Math.PI,uT=Er.prototype;uT.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty();});},uT.getPerformArgs=function(t,e){if(t.__pipeline){var i=this._pipelineMap.get(t.__pipeline.id),n=i.context,o=!e&&i.progressiveEnabled&&(!n||n.progressiveRender)&&t.__idxInPipeline>i.blockIndex?i.step:null,a=n&&n.modDataCount;return{step:o,modBy:null!=a?Math.ceil(a/o):null,modDataCount:a};}},uT.getPipeline=function(t){return this._pipelineMap.get(t);},uT.updateStreamModes=function(t,e){var i=this._pipelineMap.get(t.uid),n=t.getData().count(),o=i.progressiveEnabled&&e.incrementalPrepareRender&&n>=i.threshold,a=t.get("large")&&n>=t.get("largeThreshold"),r="mod"===t.get("progressiveChunkMode")?n:null;t.pipelineContext=i.context={progressiveRender:o,modDataCount:r,large:a};},uT.restorePipelines=function(t){var e=this,i=e._pipelineMap=R();t.eachSeries(function(t){var n=t.getProgressive(),o=t.uid;i.set(o,{id:o,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:n&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(n||700),count:0}),jr(e,t,t.dataTask);});},uT.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),i=this.api;d(this._allHandlers,function(n){var o=t.get(n.uid)||t.set(n.uid,[]);n.reset&&zr(this,n,o,e,i),n.overallReset&&Br(this,n,o,e,i);},this);},uT.prepareView=function(t,e,i,n){var o=t.renderTask,a=o.context;a.model=e,a.ecModel=i,a.api=n,o.__block=!t.incrementalPrepareRender,jr(this,e,o);},uT.performDataProcessorTasks=function(t,e){Rr(this,this._dataProcessorHandlers,t,e,{block:!0});},uT.performVisualTasks=function(t,e,i){Rr(this,this._visualHandlers,t,e,i);},uT.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform();}),this.unfinished|=e;},uT.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break;}e=e.getUpstream();}while(e);});};var hT=uT.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e);},cT=Ur(0);Er.wrapStageHandler=function(t,e){return x(t)&&(t={overallReset:t,seriesType:Yr(t)}),t.uid=Ro("stageHandler"),e&&(t.visualType=e),t;};var dT,fT={},pT={};qr(fT,MI),qr(pT,Ga),fT.eachSeriesByType=fT.eachRawSeriesByType=function(t){dT=t;},fT.eachComponent=function(t){"series"===t.mainType&&t.subType&&(dT=t.subType);};var gT=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],mT={color:gT,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],gT]},vT=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],yT={color:vT,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:"#eee"},crossStyle:{color:"#eee"}}},legend:{textStyle:{color:"#eee"}},textStyle:{color:"#eee"},title:{textStyle:{color:"#eee"}},toolbox:{iconStyle:{normal:{borderColor:"#eee"}}},dataZoom:{textStyle:{color:"#eee"}},visualMap:{textStyle:{color:"#eee"}},timeline:{lineStyle:{color:"#eee"},itemStyle:{normal:{color:vT[1]}},label:{normal:{textStyle:{color:"#eee"}}},controlStyle:{normal:{color:"#eee",borderColor:"#eee"}}},timeAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},logAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},valueAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},categoryAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},line:{symbol:"circle"},graph:{color:vT},gauge:{title:{textStyle:{color:"#eee"}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};yT.categoryAxis.splitLine.show=!1,lI.extend({type:"dataset",defaultOption:{seriesLayoutBy:_I,sourceHeader:null,dimensions:null,source:null},optionUpdated:function optionUpdated(){wa(this);}}),qI.extend({type:"dataset"});var xT=Pn.extend({type:"ellipse",shape:{cx:0,cy:0,rx:0,ry:0},buildPath:function buildPath(t,e){var i=.5522848,n=e.cx,o=e.cy,a=e.rx,r=e.ry,s=a*i,l=r*i;t.moveTo(n-a,o),t.bezierCurveTo(n-a,o-l,n-s,o-r,n,o-r),t.bezierCurveTo(n+s,o-r,n+a,o-l,n+a,o),t.bezierCurveTo(n+a,o+l,n+s,o+r,n,o+r),t.bezierCurveTo(n-s,o+r,n-a,o+l,n-a,o),t.closePath();}}),_T=/[\s,]+/;$r.prototype.parse=function(t,e){e=e||{};var i=Kr(t);if(!i)throw new Error("Illegal svg");var n=new tb();this._root=n;var o=i.getAttribute("viewBox")||"",a=parseFloat(i.getAttribute("width")||e.width),r=parseFloat(i.getAttribute("height")||e.height);isNaN(a)&&(a=null),isNaN(r)&&(r=null),es(i,n,null,!0);for(var s=i.firstChild;s;){this._parseNode(s,n),s=s.nextSibling;}var l,u;if(o){var h=P(o).split(_T);h.length>=4&&(l={x:parseFloat(h[0]||0),y:parseFloat(h[1]||0),width:parseFloat(h[2]),height:parseFloat(h[3])});}if(l&&null!=a&&null!=r&&(u=as(l,a,r),!e.ignoreViewBox)){var c=n;(n=new tb()).add(c),c.scale=u.scale.slice(),c.position=u.position.slice();}return e.ignoreRootClip||null==a||null==r||n.setClipPath(new yM({shape:{x:0,y:0,width:a,height:r}})),{root:n,width:a,height:r,viewBoxRect:l,viewBoxTransform:u};},$r.prototype._parseNode=function(t,e){var i=t.nodeName.toLowerCase();"defs"===i?this._isDefine=!0:"text"===i&&(this._isText=!0);var n;if(this._isDefine){if(r=bT[i]){var o=r.call(this,t),a=t.getAttribute("id");a&&(this._defs[a]=o);}}else{var r=wT[i];r&&(n=r.call(this,t,e),e.add(n));}for(var s=t.firstChild;s;){1===s.nodeType&&this._parseNode(s,n),3===s.nodeType&&this._isText&&this._parseText(s,n),s=s.nextSibling;}"defs"===i?this._isDefine=!1:"text"===i&&(this._isText=!1);},$r.prototype._parseText=function(t,e){if(1===t.nodeType){var i=t.getAttribute("dx")||0,n=t.getAttribute("dy")||0;this._textX+=parseFloat(i),this._textY+=parseFloat(n);}var o=new rM({style:{text:t.textContent,transformText:!0},position:[this._textX||0,this._textY||0]});Qr(e,o),es(t,o,this._defs);var a=o.style.fontSize;a&&a<9&&(o.style.fontSize=9,o.scale=o.scale||[1,1],o.scale[0]*=a/9,o.scale[1]*=a/9);var r=o.getBoundingRect();return this._textX+=r.width,e.add(o),o;};var wT={g:function g(t,e){var i=new tb();return Qr(e,i),es(t,i,this._defs),i;},rect:function rect(t,e){var i=new yM();return Qr(e,i),es(t,i,this._defs),i.setShape({x:parseFloat(t.getAttribute("x")||0),y:parseFloat(t.getAttribute("y")||0),width:parseFloat(t.getAttribute("width")||0),height:parseFloat(t.getAttribute("height")||0)}),i;},circle:function circle(t,e){var i=new sM();return Qr(e,i),es(t,i,this._defs),i.setShape({cx:parseFloat(t.getAttribute("cx")||0),cy:parseFloat(t.getAttribute("cy")||0),r:parseFloat(t.getAttribute("r")||0)}),i;},line:function line(t,e){var i=new _M();return Qr(e,i),es(t,i,this._defs),i.setShape({x1:parseFloat(t.getAttribute("x1")||0),y1:parseFloat(t.getAttribute("y1")||0),x2:parseFloat(t.getAttribute("x2")||0),y2:parseFloat(t.getAttribute("y2")||0)}),i;},ellipse:function ellipse(t,e){var i=new xT();return Qr(e,i),es(t,i,this._defs),i.setShape({cx:parseFloat(t.getAttribute("cx")||0),cy:parseFloat(t.getAttribute("cy")||0),rx:parseFloat(t.getAttribute("rx")||0),ry:parseFloat(t.getAttribute("ry")||0)}),i;},polygon:function polygon(t,e){var i=t.getAttribute("points");i&&(i=ts(i));var n=new pM({shape:{points:i||[]}});return Qr(e,n),es(t,n,this._defs),n;},polyline:function polyline(t,e){var i=new Pn();Qr(e,i),es(t,i,this._defs);var n=t.getAttribute("points");return n&&(n=ts(n)),new gM({shape:{points:n||[]}});},image:function image(t,e){var i=new fi();return Qr(e,i),es(t,i,this._defs),i.setStyle({image:t.getAttribute("xlink:href"),x:t.getAttribute("x"),y:t.getAttribute("y"),width:t.getAttribute("width"),height:t.getAttribute("height")}),i;},text:function text(t,e){var i=t.getAttribute("x")||0,n=t.getAttribute("y")||0,o=t.getAttribute("dx")||0,a=t.getAttribute("dy")||0;this._textX=parseFloat(i)+parseFloat(o),this._textY=parseFloat(n)+parseFloat(a);var r=new tb();return Qr(e,r),es(t,r,this._defs),r;},tspan:function tspan(t,e){var i=t.getAttribute("x"),n=t.getAttribute("y");null!=i&&(this._textX=parseFloat(i)),null!=n&&(this._textY=parseFloat(n));var o=t.getAttribute("dx")||0,a=t.getAttribute("dy")||0,r=new tb();return Qr(e,r),es(t,r,this._defs),this._textX+=o,this._textY+=a,r;},path:function path(t,e){var i=Rn(t.getAttribute("d")||"");return Qr(e,i),es(t,i,this._defs),i;}},bT={lineargradient:function lineargradient(t){var e=parseInt(t.getAttribute("x1")||0,10),i=parseInt(t.getAttribute("y1")||0,10),n=parseInt(t.getAttribute("x2")||10,10),o=parseInt(t.getAttribute("y2")||0,10),a=new TM(e,i,n,o);return Jr(t,a),a;},radialgradient:function radialgradient(t){}},ST={fill:"fill",stroke:"stroke","stroke-width":"lineWidth",opacity:"opacity","fill-opacity":"fillOpacity","stroke-opacity":"strokeOpacity","stroke-dasharray":"lineDash","stroke-dashoffset":"lineDashOffset","stroke-linecap":"lineCap","stroke-linejoin":"lineJoin","stroke-miterlimit":"miterLimit","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","text-align":"textAlign","alignment-baseline":"textBaseline"},MT=/url\(\s*#(.*?)\)/,IT=/(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,TT=/([^\s:;]+)\s*:\s*([^:;]+)/g,AT=R(),DT={registerMap:function registerMap(t,e,i){var n;return y(e)?n=e:e.svg?n=[{type:"svg",source:e.svg,specialAreas:e.specialAreas}]:(e.geoJson&&!e.features&&(i=e.specialAreas,e=e.geoJson),n=[{type:"geoJSON",source:e,specialAreas:i}]),d(n,function(t){var e=t.type;"geoJson"===e&&(e=t.type="geoJSON"),(0,CT[e])(t);}),AT.set(t,n);},retrieveMap:function retrieveMap(t){return AT.get(t);}},CT={geoJSON:function geoJSON(t){var e=t.source;t.geoJSON=_(e)?"undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")():e;},svg:function svg(t){t.svgXML=Kr(t.source);}},LT=k,kT=d,PT=x,NT=w,OT=lI.parseClassType,ET={zrender:"4.0.6"},RT=1e3,zT=1e3,BT=3e3,VT={PROCESSOR:{FILTER:RT,STATISTIC:5e3},VISUAL:{LAYOUT:zT,GLOBAL:2e3,CHART:BT,COMPONENT:4e3,BRUSH:5e3}},GT="__flagInMainProcess",FT="__optionUpdated",WT=/^[a-zA-Z0-9_]+$/;ls.prototype.on=ss("on"),ls.prototype.off=ss("off"),ls.prototype.one=ss("one"),h(ls,fw);var HT=us.prototype;HT._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[FT]){var e=this[FT].silent;this[GT]=!0,cs(this),ZT.update.call(this),this[GT]=!1,this[FT]=!1,gs.call(this,e),ms.call(this,e);}else if(t.unfinished){var i=1,n=this._model;this._api;t.unfinished=!1;do{var o=+new Date();t.performSeriesTasks(n),t.performDataProcessorTasks(n),fs(this,n),t.performVisualTasks(n),bs(this,this._model,0,"remain"),i-=+new Date()-o;}while(i>0&&t.unfinished);t.unfinished||this._zr.flush();}}},HT.getDom=function(){return this._dom;},HT.getZr=function(){return this._zr;},HT.setOption=function(t,e,i){var n;if(NT(e)&&(i=e.lazyUpdate,n=e.silent,e=e.notMerge),this[GT]=!0,!this._model||e){var o=new Wa(this._api),a=this._theme,r=this._model=new MI(null,null,a,o);r.scheduler=this._scheduler,r.init(null,null,a,o);}this._model.setOption(t,qT),i?(this[FT]={silent:n},this[GT]=!1):(cs(this),ZT.update.call(this),this._zr.flush(),this[FT]=!1,this[GT]=!1,gs.call(this,n),ms.call(this,n));},HT.setTheme=function(){console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0");},HT.getModel=function(){return this._model;},HT.getOption=function(){return this._model&&this._model.getOption();},HT.getWidth=function(){return this._zr.getWidth();},HT.getHeight=function(){return this._zr.getHeight();},HT.getDevicePixelRatio=function(){return this._zr.painter.dpr||window.devicePixelRatio||1;},HT.getRenderedCanvas=function(t){if(U_.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t);},HT.getSvgDataUrl=function(){if(U_.svgSupported){var t=this._zr;return d(t.storage.getDisplayList(),function(t){t.stopAnimation(!0);}),t.painter.pathToDataUrl();}},HT.getDataURL=function(t){var e=(t=t||{}).excludeComponents,i=this._model,n=[],o=this;kT(e,function(t){i.eachComponent({mainType:t},function(t){var e=o._componentsMap[t.__viewId];e.group.ignore||(n.push(e),e.group.ignore=!0);});});var a="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return kT(n,function(t){t.group.ignore=!1;}),a;},HT.getConnectedDataURL=function(t){if(U_.canvasSupported){var e=this.group,n=Math.min,o=Math.max;if(eA[e]){var a=1/0,r=1/0,s=-1/0,l=-1/0,u=[],h=t&&t.pixelRatio||1;d(tA,function(h,c){if(h.group===e){var d=h.getRenderedCanvas(i(t)),f=h.getDom().getBoundingClientRect();a=n(f.left,a),r=n(f.top,r),s=o(f.right,s),l=o(f.bottom,l),u.push({dom:d,left:f.left,top:f.top});}});var c=(s*=h)-(a*=h),f=(l*=h)-(r*=h),p=iw();p.width=c,p.height=f;var g=Ii(p);return kT(u,function(t){var e=new fi({style:{x:t.left*h-a,y:t.top*h-r,image:t.dom}});g.add(e);}),g.refreshImmediately(),p.toDataURL("image/"+(t&&t.type||"png"));}return this.getDataURL(t);}},HT.convertToPixel=v(hs,"convertToPixel"),HT.convertFromPixel=v(hs,"convertFromPixel"),HT.containPixel=function(t,e){var i;return t=Vi(this._model,t),d(t,function(t,n){n.indexOf("Models")>=0&&d(t,function(t){var o=t.coordinateSystem;if(o&&o.containPoint)i|=!!o.containPoint(e);else if("seriesModels"===n){var a=this._chartsMap[t.__viewId];a&&a.containPoint&&(i|=a.containPoint(e,t));}},this);},this),!!i;},HT.getVisual=function(t,e){var i=(t=Vi(this._model,t,{defaultMainType:"series"})).seriesModel.getData(),n=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?i.indexOfRawIndex(t.dataIndex):null;return null!=n?i.getItemVisual(n,e):i.getVisual(e);},HT.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId];},HT.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId];};var ZT={prepareAndUpdate:function prepareAndUpdate(t){cs(this),ZT.update.call(this,t);},update:function update(t){var e=this._model,i=this._api,n=this._zr,o=this._coordSysMgr,a=this._scheduler;if(e){a.restoreData(e,t),a.performSeriesTasks(e),o.create(e,i),a.performDataProcessorTasks(e,t),fs(this,e),o.update(e,i),xs(e),a.performVisualTasks(e,t),_s(this,e,i,t);var r=e.get("backgroundColor")||"transparent";if(U_.canvasSupported)n.setBackgroundColor(r);else{var s=Gt(r);r=qt(s,"rgb"),0===s[3]&&(r="transparent");}Ss(e,i);}},updateTransform:function updateTransform(t){var e=this._model,i=this,n=this._api;if(e){var o=[];e.eachComponent(function(a,r){var s=i.getViewOfComponentModel(r);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(r,e,n,t);l&&l.update&&o.push(s);}else o.push(s);});var a=R();e.eachSeries(function(o){var r=i._chartsMap[o.__viewId];if(r.updateTransform){var s=r.updateTransform(o,e,n,t);s&&s.update&&a.set(o.uid,1);}else a.set(o.uid,1);}),xs(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:a}),bs(i,e,0,t,a),Ss(e,this._api);}},updateView:function updateView(t){var e=this._model;e&&(Ar.markUpdateMethod(t,"updateView"),xs(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),_s(this,this._model,this._api,t),Ss(e,this._api));},updateVisual:function updateVisual(t){ZT.update.call(this,t);},updateLayout:function updateLayout(t){ZT.update.call(this,t);}};HT.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var i=e.resetOption("media"),n=t&&t.silent;this[GT]=!0,i&&cs(this),ZT.update.call(this),this[GT]=!1,gs.call(this,n),ms.call(this,n);}},HT.showLoading=function(t,e){if(NT(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),QT[t]){var i=QT[t](this._api,e),n=this._zr;this._loadingFX=i,n.add(i);}},HT.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null;},HT.makeActionFromEvent=function(t){var e=a({},t);return e.type=jT[t.type],e;},HT.dispatchAction=function(t,e){NT(e)||(e={silent:!!e}),XT[t.type]&&this._model&&(this[GT]?this._pendingActions.push(t):(ps.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&U_.browser.weChat&&this._throttledZrFlush(),gs.call(this,e.silent),ms.call(this,e.silent)));},HT.appendData=function(t){var e=t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0;},HT.on=ss("on"),HT.off=ss("off"),HT.one=ss("one");var UT=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];HT._initEvents=function(){kT(UT,function(t){var e=function e(_e3){var i,n=this.getModel(),o=_e3.target;if("globalout"===t)i={};else if(o&&null!=o.dataIndex){var r=o.dataModel||n.getSeriesByIndex(o.seriesIndex);i=r&&r.getDataParams(o.dataIndex,o.dataType,o)||{};}else o&&o.eventData&&(i=a({},o.eventData));if(i){var s=i.componentType,l=i.componentIndex;"markLine"!==s&&"markPoint"!==s&&"markArea"!==s||(s="series",l=i.seriesIndex);var u=s&&null!=l&&n.getComponent(s,l),h=u&&this["series"===u.mainType?"_chartsMap":"_componentsMap"][u.__viewId];i.event=_e3,i.type=t,this._ecEventProcessor.eventInfo={targetEl:o,packedEvent:i,model:u,view:h},this.trigger(t,i);}};e.zrEventfulCallAtLast=!0,this._zr.on(t,e,this);},this),kT(jT,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t);},this);},this);},HT.isDisposed=function(){return this._disposed;},HT.clear=function(){this.setOption({series:[]},!0);},HT.dispose=function(){if(!this._disposed){this._disposed=!0,Fi(this.getDom(),oA,"");var t=this._api,e=this._model;kT(this._componentsViews,function(i){i.dispose(e,t);}),kT(this._chartsViews,function(i){i.dispose(e,t);}),this._zr.dispose(),delete tA[this.id];}},h(us,fw),Ds.prototype={constructor:Ds,normalizeQuery:function normalizeQuery(t){var e={},i={},n={};if(_(t)){var o=OT(t);e.mainType=o.main||null,e.subType=o.sub||null;}else{var a=["Index","Name","Id"],r={name:1,dataIndex:1,dataType:1};d(t,function(t,o){for(var s=!1,l=0;l<a.length;l++){var u=a[l],h=o.lastIndexOf(u);if(h>0&&h===o.length-u.length){var c=o.slice(0,h);"data"!==c&&(e.mainType=c,e[u.toLowerCase()]=t,s=!0);}}r.hasOwnProperty(o)&&(i[o]=t,s=!0),s||(n[o]=t);});}return{cptQuery:e,dataQuery:i,otherQuery:n};},filter:function filter(t,e,i){function n(t,e,i,n){return null==t[i]||e[n||i]===t[i];}var o=this.eventInfo;if(!o)return!0;var a=o.targetEl,r=o.packedEvent,s=o.model,l=o.view;if(!s||!l)return!0;var u=e.cptQuery,h=e.dataQuery;return n(u,s,"mainType")&&n(u,s,"subType")&&n(u,s,"index","componentIndex")&&n(u,s,"name")&&n(u,s,"id")&&n(h,r,"name")&&n(h,r,"dataIndex")&&n(h,r,"dataType")&&(!l.filterForExposedEvent||l.filterForExposedEvent(t,e.otherQuery,a,r));},afterTrigger:function afterTrigger(){this.eventInfo=null;}};var XT={},jT={},YT=[],qT=[],KT=[],$T=[],JT={},QT={},tA={},eA={},iA=new Date()-0,nA=new Date()-0,oA="_echarts_instance_",aA=Ls;Bs(2e3,aT),Ns(BI),Os(5e3,function(t){var e=R();t.eachSeries(function(t){var i=t.get("stack");if(i){var n=e.get(i)||e.set(i,[]),o=t.getData(),a={stackResultDimension:o.getCalculationInfo("stackResultDimension"),stackedOverDimension:o.getCalculationInfo("stackedOverDimension"),stackedDimension:o.getCalculationInfo("stackedDimension"),stackedByDimension:o.getCalculationInfo("stackedByDimension"),isStackedByIndex:o.getCalculationInfo("isStackedByIndex"),data:o,seriesModel:t};if(!a.stackedDimension||!a.isStackedByIndex&&!a.stackedByDimension)return;n.length&&o.setCalculationInfo("stackedOnSeries",n[n.length-1].seriesModel),n.push(a);}}),e.each(ar);}),Gs("default",function(t,e){r(e=e||{},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var i=new yM({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),n=new SM({shape:{startAngle:-lT/2,endAngle:-lT/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),o=new yM({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});n.animateShape(!0).when(1e3,{endAngle:3*lT/2}).start("circularInOut"),n.animateShape(!0).when(1e3,{startAngle:3*lT/2}).delay(300).start("circularInOut");var a=new tb();return a.add(n),a.add(o),a.add(i),a.resize=function(){var e=t.getWidth()/2,a=t.getHeight()/2;n.setShape({cx:e,cy:a});var r=n.shape.r;o.setShape({x:e-r,y:a-r,width:2*r,height:2*r}),i.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()});},a.resize(),a;}),Es({type:"highlight",event:"highlight",update:"highlight"},B),Es({type:"downplay",event:"downplay",update:"downplay"},B),Ps("light",mT),Ps("dark",yT);var rA={};Xs.prototype={constructor:Xs,add:function add(t){return this._add=t,this;},update:function update(t){return this._update=t,this;},remove:function remove(t){return this._remove=t,this;},execute:function execute(){var t=this._old,e=this._new,i={},n=[],o=[];for(js(t,{},n,"_oldKeyGetter",this),js(e,i,o,"_newKeyGetter",this),a=0;a<t.length;a++){null!=(s=i[r=n[a]])?((u=s.length)?(1===u&&(i[r]=null),s=s.unshift()):i[r]=null,this._update&&this._update(s,a)):this._remove&&this._remove(a);}for(var a=0;a<o.length;a++){var r=o[a];if(i.hasOwnProperty(r)){var s=i[r];if(null==s)continue;if(s.length)for(var l=0,u=s.length;l<u;l++){this._add&&this._add(s[l]);}else this._add&&this._add(s);}}}};var sA=R(["tooltip","label","itemName","itemId","seriesName"]),lA=w,uA=-1,hA="e\0\0",cA={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},dA="undefined"==typeof Uint32Array?Array:Uint32Array,fA="undefined"==typeof Int32Array?Array:Int32Array,pA="undefined"==typeof Uint16Array?Array:Uint16Array,gA=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],mA=["_extent","_approximateExtent","_rawExtent"],vA=function vA(t,e){t=t||["x","y"];for(var i={},n=[],o={},a=0;a<t.length;a++){var r=t[a];_(r)&&(r={name:r});var s=r.name;r.type=r.type||"float",r.coordDim||(r.coordDim=s,r.coordDimIndex=0),r.otherDims=r.otherDims||{},n.push(s),i[s]=r,r.index=a,r.createInvertedIndices&&(o[s]=[]);}this.dimensions=n,this._dimensionInfos=i,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=Ys(this),this._invertedIndicesMap=o,this._calculationInfo={};},yA=vA.prototype;yA.type="list",yA.hasItemOption=!0,yA.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t;},yA.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)];},yA.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice();},yA.mapDimension=function(t,e){var i=this._dimensionsSummary;if(null==e)return i.encodeFirstDimNotExtra[t];var n=i.encode[t];return!0===e?(n||[]).slice():n&&n[e];},yA.initData=function(t,e,i){(_a.isInstance(t)||c(t))&&(t=new rr(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},i||(this.hasItemOption=!1),this.defaultDimValueGetter=WI[this._rawData.getSource().sourceFormat],this._dimValueGetter=i=i||this.defaultDimValueGetter,this._dimValueGetterArrayRows=WI.arrayRows,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1);},yA.getProvider=function(){return this._rawData;},yA.appendData=function(t){var e=this._rawData,i=this.count();e.appendData(t);var n=e.count();e.persistent||(n+=i),this._initDataFromProvider(i,n);},yA.appendValues=function(t,e){for(var i=this._chunkSize,n=this._storage,o=this.dimensions,a=o.length,r=this._rawExtent,s=this.count(),l=s+Math.max(t.length,e?e.length:0),u=this._chunkCount,h=0;h<a;h++){r[v=o[h]]||(r[v]=[1/0,-1/0]),n[v]||(n[v]=[]),tl(n,this._dimensionInfos[v],i,u,l),this._chunkCount=n[v].length;}for(var c=new Array(a),d=s;d<l;d++){for(var f=d-s,p=Math.floor(d/i),g=d%i,m=0;m<a;m++){var v=o[m],y=this._dimValueGetterArrayRows(t[f]||c,v,f,m);n[v][p][g]=y;var x=r[v];y<x[0]&&(x[0]=y),y>x[1]&&(x[1]=y);}e&&(this._nameList[d]=e[f]);}this._rawCount=this._count=l,this._extent={},el(this);},yA._initDataFromProvider=function(t,e){if(!(t>=e)){for(var i,n=this._chunkSize,o=this._rawData,a=this._storage,r=this.dimensions,s=r.length,l=this._dimensionInfos,u=this._nameList,h=this._idList,c=this._rawExtent,d=this._nameRepeatCount={},f=this._chunkCount,p=0;p<s;p++){c[w=r[p]]||(c[w]=[1/0,-1/0]);var g=l[w];0===g.otherDims.itemName&&(i=this._nameDimIdx=p),0===g.otherDims.itemId&&(this._idDimIdx=p),a[w]||(a[w]=[]),tl(a,g,n,f,e),this._chunkCount=a[w].length;}for(var m=new Array(s),v=t;v<e;v++){m=o.getItem(v,m);for(var y=Math.floor(v/n),x=v%n,_=0;_<s;_++){var w=r[_],b=a[w][y],S=this._dimValueGetter(m,w,v,_);b[x]=S;var M=c[w];S<M[0]&&(M[0]=S),S>M[1]&&(M[1]=S);}if(!o.pure){var I=u[v];if(m&&null==I)if(null!=m.name)u[v]=I=m.name;else if(null!=i){var T=r[i],A=a[T][y];if(A){I=A[x];var D=l[T].ordinalMeta;D&&D.categories.length&&(I=D.categories[I]);}}var C=null==m?null:m.id;null==C&&null!=I&&(d[I]=d[I]||0,C=I,d[I]>0&&(C+="__ec__"+d[I]),d[I]++),null!=C&&(h[v]=C);}}!o.persistent&&o.clean&&o.clean(),this._rawCount=this._count=e,this._extent={},el(this);}},yA.count=function(){return this._count;},yA.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,i=this._count;if(e===Array){n=new e(i);for(o=0;o<i;o++){n[o]=t[o];}}else n=new e(t.buffer,0,i);}else for(var n=new(e=$s(this))(this.count()),o=0;o<n.length;o++){n[o]=o;}return n;},yA.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var i=this._storage;if(!i[t])return NaN;e=this.getRawIndex(e);var n=Math.floor(e/this._chunkSize),o=e%this._chunkSize;return i[t][n][o];},yA.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var i=this._storage[t];if(!i)return NaN;var n=Math.floor(e/this._chunkSize),o=e%this._chunkSize;return i[n][o];},yA._getFast=function(t,e){var i=Math.floor(e/this._chunkSize),n=e%this._chunkSize;return this._storage[t][i][n];},yA.getValues=function(t,e){var i=[];y(t)||(e=t,t=this.dimensions);for(var n=0,o=t.length;n<o;n++){i.push(this.get(t[n],e));}return i;},yA.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,i=this._dimensionInfos,n=0,o=e.length;n<o;n++){if("ordinal"!==i[e[n]].type&&isNaN(this.get(e[n],t)))return!1;}return!0;},yA.getDataExtent=function(t){t=this.getDimension(t);var e=[1/0,-1/0];if(!this._storage[t])return e;var i,n=this.count();if(!this._indices)return this._rawExtent[t].slice();if(i=this._extent[t])return i.slice();for(var o=(i=e)[0],a=i[1],r=0;r<n;r++){var s=this._getFast(t,this.getRawIndex(r));s<o&&(o=s),s>a&&(a=s);}return i=[o,a],this._extent[t]=i,i;},yA.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t);},yA.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice();},yA.getCalculationInfo=function(t){return this._calculationInfo[t];},yA.setCalculationInfo=function(t,e){lA(t)?a(this._calculationInfo,t):this._calculationInfo[t]=e;},yA.getSum=function(t){var e=0;if(this._storage[t])for(var i=0,n=this.count();i<n;i++){var o=this.get(t,i);isNaN(o)||(e+=o);}return e;},yA.getMedian=function(t){var e=[];this.each(t,function(t,i){isNaN(t)||e.push(t);});var i=[].concat(e).sort(function(t,e){return t-e;}),n=this.count();return 0===n?0:n%2==1?i[(n-1)/2]:(i[n/2]+i[n/2-1])/2;},yA.rawIndexOf=function(t,e){var i=(t&&this._invertedIndicesMap[t])[e];return null==i||isNaN(i)?uA:i;},yA.indexOfName=function(t){for(var e=0,i=this.count();e<i;e++){if(this.getName(e)===t)return e;}return-1;},yA.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||t<0)return-1;var e=this._indices,i=e[t];if(null!=i&&i<this._count&&i===t)return t;for(var n=0,o=this._count-1;n<=o;){var a=(n+o)/2|0;if(e[a]<t)n=a+1;else{if(!(e[a]>t))return a;o=a-1;}}return-1;},yA.indicesOfNearest=function(t,e,i){var n=[];if(!this._storage[t])return n;null==i&&(i=1/0);for(var o=Number.MAX_VALUE,a=-1,r=0,s=this.count();r<s;r++){var l=e-this.get(t,r),u=Math.abs(l);l<=i&&u<=o&&((u<o||l>=0&&a<0)&&(o=u,a=l,n.length=0),n.push(r));}return n;},yA.getRawIndex=nl,yA.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],i=0;i<this.dimensions.length;i++){var n=this.dimensions[i];e.push(this.get(n,t));}return e;},yA.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||il(this,this._nameDimIdx,e)||"";},yA.getId=function(t){return al(this,this.getRawIndex(t));},yA.each=function(t,e,i,n){if(this._count){"function"==typeof t&&(n=i,i=e,e=t,t=[]),i=i||n||this;for(var o=(t=f(rl(t),this.getDimension,this)).length,a=0;a<this.count();a++){switch(o){case 0:e.call(i,a);break;case 1:e.call(i,this.get(t[0],a),a);break;case 2:e.call(i,this.get(t[0],a),this.get(t[1],a),a);break;default:for(var r=0,s=[];r<o;r++){s[r]=this.get(t[r],a);}s[r]=a,e.apply(i,s);}}}},yA.filterSelf=function(t,e,i,n){if(this._count){"function"==typeof t&&(n=i,i=e,e=t,t=[]),i=i||n||this,t=f(rl(t),this.getDimension,this);for(var o=this.count(),a=new($s(this))(o),r=[],s=t.length,l=0,u=t[0],h=0;h<o;h++){var c,d=this.getRawIndex(h);if(0===s)c=e.call(i,h);else if(1===s){var p=this._getFast(u,d);c=e.call(i,p,h);}else{for(var g=0;g<s;g++){r[g]=this._getFast(u,d);}r[g]=h,c=e.apply(i,r);}c&&(a[l++]=d);}return l<o&&(this._indices=a),this._count=l,this._extent={},this.getRawIndex=this._indices?ol:nl,this;}},yA.selectRange=function(t){if(this._count){var e=[];for(var i in t){t.hasOwnProperty(i)&&e.push(i);}var n=e.length;if(n){var o=this.count(),a=new($s(this))(o),r=0,s=e[0],l=t[s][0],u=t[s][1],h=!1;if(!this._indices){var c=0;if(1===n){for(var d=this._storage[e[0]],f=0;f<this._chunkCount;f++){for(var p=d[f],g=Math.min(this._count-f*this._chunkSize,this._chunkSize),m=0;m<g;m++){((w=p[m])>=l&&w<=u||isNaN(w))&&(a[r++]=c),c++;}}h=!0;}else if(2===n){for(var d=this._storage[s],v=this._storage[e[1]],y=t[e[1]][0],x=t[e[1]][1],f=0;f<this._chunkCount;f++){for(var p=d[f],_=v[f],g=Math.min(this._count-f*this._chunkSize,this._chunkSize),m=0;m<g;m++){var w=p[m],b=_[m];(w>=l&&w<=u||isNaN(w))&&(b>=y&&b<=x||isNaN(b))&&(a[r++]=c),c++;}}h=!0;}}if(!h)if(1===n)for(m=0;m<o;m++){M=this.getRawIndex(m);((w=this._getFast(s,M))>=l&&w<=u||isNaN(w))&&(a[r++]=M);}else for(m=0;m<o;m++){for(var S=!0,M=this.getRawIndex(m),f=0;f<n;f++){var I=e[f];((w=this._getFast(i,M))<t[I][0]||w>t[I][1])&&(S=!1);}S&&(a[r++]=this.getRawIndex(m));}return r<o&&(this._indices=a),this._count=r,this._extent={},this.getRawIndex=this._indices?ol:nl,this;}}},yA.mapArray=function(t,e,i,n){"function"==typeof t&&(n=i,i=e,e=t,t=[]),i=i||n||this;var o=[];return this.each(t,function(){o.push(e&&e.apply(this,arguments));},i),o;},yA.map=function(t,e,i,n){i=i||n||this;var o=sl(this,t=f(rl(t),this.getDimension,this));o._indices=this._indices,o.getRawIndex=o._indices?ol:nl;for(var a=o._storage,r=[],s=this._chunkSize,l=t.length,u=this.count(),h=[],c=o._rawExtent,d=0;d<u;d++){for(var p=0;p<l;p++){h[p]=this.get(t[p],d);}h[l]=d;var g=e&&e.apply(i,h);if(null!=g){"object"!=typeof g&&(r[0]=g,g=r);for(var m=this.getRawIndex(d),v=Math.floor(m/s),y=m%s,x=0;x<g.length;x++){var _=t[x],w=g[x],b=c[_],S=a[_];S&&(S[v][y]=w),w<b[0]&&(b[0]=w),w>b[1]&&(b[1]=w);}}}return o;},yA.downSample=function(t,e,i,n){for(var o=sl(this,[t]),a=o._storage,r=[],s=Math.floor(1/e),l=a[t],u=this.count(),h=this._chunkSize,c=o._rawExtent[t],d=new($s(this))(u),f=0,p=0;p<u;p+=s){s>u-p&&(s=u-p,r.length=s);for(var g=0;g<s;g++){var m=this.getRawIndex(p+g),v=Math.floor(m/h),y=m%h;r[g]=l[v][y];}var x=i(r),_=this.getRawIndex(Math.min(p+n(r,x)||0,u-1)),w=_%h;l[Math.floor(_/h)][w]=x,x<c[0]&&(c[0]=x),x>c[1]&&(c[1]=x),d[f++]=_;}return o._count=f,o._indices=d,o.getRawIndex=ol,o;},yA.getItemModel=function(t){var e=this.hostModel;return new No(this.getRawDataItem(t),e,e&&e.ecModel);},yA.diff=function(t){var e=this;return new Xs(t?t.getIndices():[],this.getIndices(),function(e){return al(t,e);},function(t){return al(e,t);});},yA.getVisual=function(t){var e=this._visual;return e&&e[t];},yA.setVisual=function(t,e){if(lA(t))for(var i in t){t.hasOwnProperty(i)&&this.setVisual(i,t[i]);}else this._visual=this._visual||{},this._visual[t]=e;},yA.setLayout=function(t,e){if(lA(t))for(var i in t){t.hasOwnProperty(i)&&this.setLayout(i,t[i]);}else this._layout[t]=e;},yA.getLayout=function(t){return this._layout[t];},yA.getItemLayout=function(t){return this._itemLayouts[t];},yA.setItemLayout=function(t,e,i){this._itemLayouts[t]=i?a(this._itemLayouts[t]||{},e):e;},yA.clearItemLayouts=function(){this._itemLayouts.length=0;},yA.getItemVisual=function(t,e,i){var n=this._itemVisuals[t],o=n&&n[e];return null!=o||i?o:this.getVisual(e);},yA.setItemVisual=function(t,e,i){var n=this._itemVisuals[t]||{},o=this.hasItemVisual;if(this._itemVisuals[t]=n,lA(e))for(var a in e){e.hasOwnProperty(a)&&(n[a]=e[a],o[a]=!0);}else n[e]=i,o[e]=!0;},yA.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={};};var xA=function xA(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType;};yA.setItemGraphicEl=function(t,e){var i=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=i&&i.seriesIndex,"group"===e.type&&e.traverse(xA,e)),this._graphicEls[t]=e;},yA.getItemGraphicEl=function(t){return this._graphicEls[t];},yA.eachItemGraphicEl=function(t,e){d(this._graphicEls,function(i,n){i&&t&&t.call(e,i,n);});},yA.cloneShallow=function(t){if(!t){var e=f(this.dimensions,this.getDimensionInfo,this);t=new vA(e,this.hostModel);}if(t._storage=this._storage,Qs(t,this),this._indices){var i=this._indices.constructor;t._indices=new i(this._indices);}else t._indices=null;return t.getRawIndex=t._indices?ol:nl,t;},yA.wrapMethod=function(t,e){var i=this[t];"function"==typeof i&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=i.apply(this,arguments);return e.apply(this,[t].concat(C(arguments)));});},yA.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],yA.CHANGABLE_METHODS=["filterSelf","selectRange"];var _A=function _A(t,e){return e=e||{},hl(e.coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount});};xl.prototype.parse=function(t){return t;},xl.prototype.getSetting=function(t){return this._setting[t];},xl.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1];},xl.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0]);},xl.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0];},xl.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]);},xl.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e));},xl.prototype.getExtent=function(){return this._extent.slice();},xl.prototype.setExtent=function(t,e){var i=this._extent;isNaN(t)||(i[0]=t),isNaN(e)||(i[1]=e);},xl.prototype.isBlank=function(){return this._isBlank;},xl.prototype.setBlank=function(t){this._isBlank=t;},xl.prototype.getLabel=null,ji(xl),$i(xl,{registerWhenExtend:!0}),_l.createByAxisModel=function(t){var e=t.option,i=e.data,n=i&&f(i,bl);return new _l({categories:n,needCollect:!n,deduplication:!1!==e.dedplication});};var wA=_l.prototype;wA.getOrdinal=function(t){return wl(this).get(t);},wA.parseAndCollect=function(t){var e,i=this._needCollect;if("string"!=typeof t&&!i)return t;if(i&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var n=wl(this);return null==(e=n.get(t))&&(i?(e=this.categories.length,this.categories[e]=t,n.set(t,e)):e=NaN),e;};var bA=xl.prototype,SA=xl.extend({type:"ordinal",init:function init(t,e){t&&!y(t)||(t=new _l({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1];},parse:function parse(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t);},contain:function contain(t){return t=this.parse(t),bA.contain.call(this,t)&&null!=this._ordinalMeta.categories[t];},normalize:function normalize(t){return bA.normalize.call(this,this.parse(t));},scale:function scale(t){return Math.round(bA.scale.call(this,t));},getTicks:function getTicks(){for(var t=[],e=this._extent,i=e[0];i<=e[1];){t.push(i),i++;}return t;},getLabel:function getLabel(t){if(!this.isBlank())return this._ordinalMeta.categories[t];},count:function count(){return this._extent[1]-this._extent[0]+1;},unionExtentFromData:function unionExtentFromData(t,e){this.unionExtent(t.getApproximateExtent(e));},getOrdinalMeta:function getOrdinalMeta(){return this._ordinalMeta;},niceTicks:B,niceExtent:B});SA.create=function(){return new SA();};var MA=Go,IA=Go,TA=xl.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function setExtent(t,e){var i=this._extent;isNaN(t)||(i[0]=parseFloat(t)),isNaN(e)||(i[1]=parseFloat(e));},unionExtent:function unionExtent(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),TA.prototype.setExtent.call(this,e[0],e[1]);},getInterval:function getInterval(){return this._interval;},setInterval:function setInterval(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=Ml(t);},getTicks:function getTicks(){return Al(this._interval,this._extent,this._niceExtent,this._intervalPrecision);},getLabel:function getLabel(t,e){if(null==t)return"";var i=e&&e.precision;return null==i?i=Ho(t)||0:"auto"===i&&(i=this._intervalPrecision),t=IA(t,i,!0),ta(t);},niceTicks:function niceTicks(t,e,i){t=t||5;var n=this._extent,o=n[1]-n[0];if(isFinite(o)){o<0&&(o=-o,n.reverse());var a=Sl(n,t,e,i);this._intervalPrecision=a.intervalPrecision,this._interval=a.interval,this._niceExtent=a.niceTickExtent;}},niceExtent:function niceExtent(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var i=e[0];t.fixMax?e[0]-=i/2:(e[1]+=i/2,e[0]-=i/2);}else e[1]=1;var n=e[1]-e[0];isFinite(n)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var o=this._interval;t.fixMin||(e[0]=IA(Math.floor(e[0]/o)*o)),t.fixMax||(e[1]=IA(Math.ceil(e[1]/o)*o));}});TA.create=function(){return new TA();};var AA="__ec_stack_",DA="undefined"!=typeof Float32Array?Float32Array:Array,CA={seriesType:"bar",plan:$I(),reset:function reset(t){if(Rl(t)&&zl(t)){var e=t.getData(),i=t.coordinateSystem,n=i.getBaseAxis(),o=i.getOtherAxis(n),a=e.mapDimension(o.dim),r=e.mapDimension(n.dim),s=o.isHorizontal(),l=s?0:1,u=Ol(Pl([t]),n,t).width;return u>.5||(u=.5),{progress:function progress(t,e){for(var n,h=new DA(2*t.count),c=[],d=[],f=0;null!=(n=t.next());){d[l]=e.get(a,n),d[1-l]=e.get(r,n),c=i.dataToPoint(d,null,c),h[f++]=c[0],h[f++]=c[1];}e.setLayout({largePoints:h,barWidth:u,valueAxisStart:Bl(0,o),valueAxisHorizontal:s});}};}}},LA=TA.prototype,kA=Math.ceil,PA=Math.floor,NA=function NA(t,e,i,n){for(;i<n;){var o=i+n>>>1;t[o][1]<e?i=o+1:n=o;}return i;},OA=TA.extend({type:"time",getLabel:function getLabel(t){var e=this._stepLvl,i=new Date(t);return sa(e[0],i,this.getSetting("useUTC"));},niceExtent:function niceExtent(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var i=new Date();e[1]=+new Date(i.getFullYear(),i.getMonth(),i.getDate()),e[0]=e[1]-864e5;}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var n=this._interval;t.fixMin||(e[0]=Go(PA(e[0]/n)*n)),t.fixMax||(e[1]=Go(kA(e[1]/n)*n));},niceTicks:function niceTicks(t,e,i){t=t||10;var n=this._extent,o=n[1]-n[0],a=o/t;null!=e&&a<e&&(a=e),null!=i&&a>i&&(a=i);var r=EA.length,s=NA(EA,a,0,r),l=EA[Math.min(s,r-1)],u=l[1];"year"===l[0]&&(u*=$o(o/u/t,!0));var h=this.getSetting("useUTC")?0:60*new Date(+n[0]||+n[1]).getTimezoneOffset()*1e3,c=[Math.round(kA((n[0]-h)/u)*u+h),Math.round(PA((n[1]-h)/u)*u+h)];Tl(c,n),this._stepLvl=l,this._interval=u,this._niceExtent=c;},parse:function parse(t){return+Yo(t);}});d(["contain","normalize"],function(t){OA.prototype[t]=function(e){return LA[t].call(this,this.parse(e));};});var EA=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",6048e6],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]];OA.create=function(t){return new OA({useUTC:t.ecModel.get("useUTC")});};var RA=xl.prototype,zA=TA.prototype,BA=Ho,VA=Go,GA=Math.floor,FA=Math.ceil,WA=Math.pow,HA=Math.log,ZA=xl.extend({type:"log",base:10,$constructor:function $constructor(){xl.apply(this,arguments),this._originalScale=new TA();},getTicks:function getTicks(){var t=this._originalScale,e=this._extent,i=t.getExtent();return f(zA.getTicks.call(this),function(n){var o=Go(WA(this.base,n));return o=n===e[0]&&t.__fixMin?Vl(o,i[0]):o,o=n===e[1]&&t.__fixMax?Vl(o,i[1]):o;},this);},getLabel:zA.getLabel,scale:function scale(t){return t=RA.scale.call(this,t),WA(this.base,t);},setExtent:function setExtent(t,e){var i=this.base;t=HA(t)/HA(i),e=HA(e)/HA(i),zA.setExtent.call(this,t,e);},getExtent:function getExtent(){var t=this.base,e=RA.getExtent.call(this);e[0]=WA(t,e[0]),e[1]=WA(t,e[1]);var i=this._originalScale,n=i.getExtent();return i.__fixMin&&(e[0]=Vl(e[0],n[0])),i.__fixMax&&(e[1]=Vl(e[1],n[1])),e;},unionExtent:function unionExtent(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=HA(t[0])/HA(e),t[1]=HA(t[1])/HA(e),RA.unionExtent.call(this,t);},unionExtentFromData:function unionExtentFromData(t,e){this.unionExtent(t.getApproximateExtent(e));},niceTicks:function niceTicks(t){t=t||10;var e=this._extent,i=e[1]-e[0];if(!(i===1/0||i<=0)){var n=qo(i);for(t/i*n<=.5&&(n*=10);!isNaN(n)&&Math.abs(n)<1&&Math.abs(n)>0;){n*=10;}var o=[Go(FA(e[0]/n)*n),Go(GA(e[1]/n)*n)];this._interval=n,this._niceExtent=o;}},niceExtent:function niceExtent(t){zA.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax;}});d(["contain","normalize"],function(t){ZA.prototype[t]=function(e){return e=HA(e)/HA(this.base),RA[t].call(this,e);};}),ZA.create=function(){return new ZA();};var UA={getMin:function getMin(t){var e=this.option,i=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=i&&"dataMin"!==i&&"function"!=typeof i&&!I(i)&&(i=this.axis.scale.parse(i)),i;},getMax:function getMax(t){var e=this.option,i=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=i&&"dataMax"!==i&&"function"!=typeof i&&!I(i)&&(i=this.axis.scale.parse(i)),i;},getNeedCrossZero:function getNeedCrossZero(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale;},getCoordSysModel:B,setRange:function setRange(t,e){this.option.rangeStart=t,this.option.rangeEnd=e;},resetRange:function resetRange(){this.option.rangeStart=this.option.rangeEnd=null;}},XA=Un({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function buildPath(t,e){var i=e.cx,n=e.cy,o=e.width/2,a=e.height/2;t.moveTo(i,n-a),t.lineTo(i+o,n+a),t.lineTo(i-o,n+a),t.closePath();}}),jA=Un({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function buildPath(t,e){var i=e.cx,n=e.cy,o=e.width/2,a=e.height/2;t.moveTo(i,n-a),t.lineTo(i+o,n),t.lineTo(i,n+a),t.lineTo(i-o,n),t.closePath();}}),YA=Un({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function buildPath(t,e){var i=e.x,n=e.y,o=e.width/5*3,a=Math.max(o,e.height),r=o/2,s=r*r/(a-r),l=n-a+r+s,u=Math.asin(s/r),h=Math.cos(u)*r,c=Math.sin(u),d=Math.cos(u),f=.6*r,p=.7*r;t.moveTo(i-h,l+s),t.arc(i,l,r,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(i+h-c*f,l+s+d*f,i,n-p,i,n),t.bezierCurveTo(i,n-p,i-h+c*f,l+s+d*f,i-h,l+s),t.closePath();}}),qA=Un({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function buildPath(t,e){var i=e.height,n=e.width,o=e.x,a=e.y,r=n/3*2;t.moveTo(o,a),t.lineTo(o+r,a+i),t.lineTo(o,a+i/4*3),t.lineTo(o-r,a+i),t.lineTo(o,a),t.closePath();}}),KA={line:function line(t,e,i,n,o){o.x1=t,o.y1=e+n/2,o.x2=t+i,o.y2=e+n/2;},rect:function rect(t,e,i,n,o){o.x=t,o.y=e,o.width=i,o.height=n;},roundRect:function roundRect(t,e,i,n,o){o.x=t,o.y=e,o.width=i,o.height=n,o.r=Math.min(i,n)/4;},square:function square(t,e,i,n,o){var a=Math.min(i,n);o.x=t,o.y=e,o.width=a,o.height=a;},circle:function circle(t,e,i,n,o){o.cx=t+i/2,o.cy=e+n/2,o.r=Math.min(i,n)/2;},diamond:function diamond(t,e,i,n,o){o.cx=t+i/2,o.cy=e+n/2,o.width=i,o.height=n;},pin:function pin(t,e,i,n,o){o.x=t+i/2,o.y=e+n/2,o.width=i,o.height=n;},arrow:function arrow(t,e,i,n,o){o.x=t+i/2,o.y=e+n/2,o.width=i,o.height=n;},triangle:function triangle(t,e,i,n,o){o.cx=t+i/2,o.cy=e+n/2,o.width=i,o.height=n;}},$A={};d({line:_M,rect:yM,roundRect:yM,square:yM,circle:sM,diamond:jA,pin:YA,arrow:qA,triangle:XA},function(t,e){$A[e]=new t();});var JA=Un({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function beforeBrush(){var t=this.style;"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle");},buildPath:function buildPath(t,e,i){var n=e.symbolType,o=$A[n];"none"!==e.symbolType&&(o||(o=$A[n="rect"]),KA[n](e.x,e.y,e.width,e.height,o.shape),o.buildPath(t,o.shape,i));}}),QA={isDimensionStacked:pl,enableDataStack:fl,getStackedDimension:gl},tD=(Object.freeze||Object)({createList:function createList(t){return ml(t.getSource(),t);},getLayoutRect:ca,dataStack:QA,createScale:function createScale(t,e){var i=e;No.isInstance(e)||h(i=new No(e),UA);var n=Hl(i);return n.setExtent(t[0],t[1]),Wl(n,i),n;},mixinAxisModelCommonMethods:function mixinAxisModelCommonMethods(t){h(t,UA);},completeDimensions:hl,createDimensions:_A,createSymbol:Jl}),eD=1e-8;eu.prototype={constructor:eu,properties:null,getBoundingRect:function getBoundingRect(){var t=this._rect;if(t)return t;for(var e=Number.MAX_VALUE,i=[e,e],n=[-e,-e],o=[],a=[],r=this.geometries,s=0;s<r.length;s++){"polygon"===r[s].type&&(fn(r[s].exterior,o,a),tt(i,i,o),et(n,n,a));}return 0===s&&(i[0]=i[1]=n[0]=n[1]=0),this._rect=new de(i[0],i[1],n[0]-i[0],n[1]-i[1]);},contain:function contain(t){var e=this.getBoundingRect(),i=this.geometries;if(!e.contain(t[0],t[1]))return!1;t:for(var n=0,o=i.length;n<o;n++){if("polygon"===i[n].type){var a=i[n].exterior,r=i[n].interiors;if(tu(a,t[0],t[1])){for(var s=0;s<(r?r.length:0);s++){if(tu(r[s]))continue t;}return!0;}}}return!1;},transformTo:function transformTo(t,e,i,n){var o=this.getBoundingRect(),a=o.width/o.height;i?n||(n=i/a):i=a*n;for(var r=new de(t,e,i,n),s=o.calculateTransform(r),l=this.geometries,u=0;u<l.length;u++){if("polygon"===l[u].type){for(var h=l[u].exterior,c=l[u].interiors,d=0;d<h.length;d++){Q(h[d],h[d],s);}for(var f=0;f<(c?c.length:0);f++){for(d=0;d<c[f].length;d++){Q(c[f][d],c[f][d],s);}}}}(o=this._rect).copy(r),this.center=[o.x+o.width/2,o.y+o.height/2];},cloneShallow:function cloneShallow(t){null==t&&(t=this.name);var e=new eu(t,this.geometries,this.center);return e._rect=this._rect,e.transformTo=null,e;}};var iD=function iD(t){return iu(t),f(g(t.features,function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0;}),function(t){var e=t.properties,i=t.geometry,n=i.coordinates,o=[];"Polygon"===i.type&&o.push({type:"polygon",exterior:n[0],interiors:n.slice(1)}),"MultiPolygon"===i.type&&d(n,function(t){t[0]&&o.push({type:"polygon",exterior:t[0],interiors:t.slice(1)});});var a=new eu(e.name,o,e.cp);return a.properties=e,a;});},nD=Bi(),oD=[0,1],aD=function aD(t,e,i){this.dim=t,this.scale=e,this._extent=i||[0,0],this.inverse=!1,this.onBand=!1;};aD.prototype={constructor:aD,contain:function contain(t){var e=this._extent,i=Math.min(e[0],e[1]),n=Math.max(e[0],e[1]);return t>=i&&t<=n;},containData:function containData(t){return this.contain(this.dataToCoord(t));},getExtent:function getExtent(){return this._extent.slice();},getPixelPrecision:function getPixelPrecision(t){return Zo(t||this.scale.getExtent(),this._extent);},setExtent:function setExtent(t,e){var i=this._extent;i[0]=t,i[1]=e;},dataToCoord:function dataToCoord(t,e){var i=this._extent,n=this.scale;return t=n.normalize(t),this.onBand&&"ordinal"===n.type&&yu(i=i.slice(),n.count()),Bo(t,oD,i,e);},coordToData:function coordToData(t,e){var i=this._extent,n=this.scale;this.onBand&&"ordinal"===n.type&&yu(i=i.slice(),n.count());var o=Bo(t,i,oD,e);return this.scale.scale(o);},pointToData:function pointToData(t,e){},getTicksCoords:function getTicksCoords(t){var e=(t=t||{}).tickModel||this.getTickModel(),i=au(this,e),n=f(i.ticks,function(t){return{coord:this.dataToCoord(t),tickValue:t};},this),o=e.get("alignWithLabel");return xu(this,n,i.tickCategoryInterval,o,t.clamp),n;},getViewLabels:function getViewLabels(){return ou(this).labels;},getLabelModel:function getLabelModel(){return this.model.getModel("axisLabel");},getTickModel:function getTickModel(){return this.model.getModel("axisTick");},getBandWidth:function getBandWidth(){var t=this._extent,e=this.scale.getExtent(),i=e[1]-e[0]+(this.onBand?1:0);0===i&&(i=1);var n=Math.abs(t[1]-t[0]);return Math.abs(n)/i;},isHorizontal:null,getRotate:null,calculateCategoryInterval:function calculateCategoryInterval(){return pu(this);}};var rD=iD,sD={};d(["map","each","filter","indexOf","inherits","reduce","filter","bind","curry","isArray","isString","isObject","isFunction","extend","defaults","clone","merge"],function(t){sD[t]=aw[t];});var lD={};d(["extendShape","extendPath","makePath","makeImage","mergePath","resizePath","createIcon","setHoverStyle","setLabelStyle","setTextStyle","setText","getFont","updateProps","initProps","getTransform","clipPointsByRect","clipRectByRect","Group","Image","Text","Circle","Sector","Ring","Polygon","Polyline","Rect","Line","BezierCurve","Arc","IncrementalDisplayable","CompoundPath","LinearGradient","RadialGradient","BoundingRect"],function(t){lD[t]=zM[t];}),YI.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function getInitialData(t,e){return ml(this.getSource(),this);},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var uD=wu.prototype,hD=wu.getSymbolSize=function(t,e){var i=t.getItemVisual(e,"symbolSize");return i instanceof Array?i.slice():[+i,+i];};uD._createSymbol=function(t,e,i,n,o){this.removeAll();var a=Jl(t,-1,-1,2,2,e.getItemVisual(i,"color"),o);a.attr({z2:100,culling:!0,scale:bu(n)}),a.drift=Su,this._symbolType=t,this.add(a);},uD.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t);},uD.getSymbolPath=function(){return this.childAt(0);},uD.getScale=function(){return this.childAt(0).scale;},uD.highlight=function(){this.childAt(0).trigger("emphasis");},uD.downplay=function(){this.childAt(0).trigger("normal");},uD.setZ=function(t,e){var i=this.childAt(0);i.zlevel=t,i.z=e;},uD.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer";},uD.updateData=function(t,e,i){this.silent=!1;var n=t.getItemVisual(e,"symbol")||"circle",o=t.hostModel,a=hD(t,e),r=n!==this._symbolType;if(r){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(n,t,e,a,s);}else(l=this.childAt(0)).silent=!1,Io(l,{scale:bu(a)},o,e);if(this._updateCommon(t,e,a,i),r){var l=this.childAt(0),u=i&&i.fadeIn,h={scale:l.scale.slice()};u&&(h.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),To(l,h,o,e);}this._seriesModel=o;};var cD=["itemStyle"],dD=["emphasis","itemStyle"],fD=["label"],pD=["emphasis","label"];uD._updateCommon=function(t,e,i,n){var o=this.childAt(0),r=t.hostModel,s=t.getItemVisual(e,"color");"image"!==o.type&&o.useStyle({strokeNoScale:!0});var l=n&&n.itemStyle,u=n&&n.hoverItemStyle,h=n&&n.symbolRotate,c=n&&n.symbolOffset,d=n&&n.labelModel,f=n&&n.hoverLabelModel,p=n&&n.hoverAnimation,g=n&&n.cursorStyle;if(!n||t.hasItemOption){var m=n&&n.itemModel?n.itemModel:t.getItemModel(e);l=m.getModel(cD).getItemStyle(["color"]),u=m.getModel(dD).getItemStyle(),h=m.getShallow("symbolRotate"),c=m.getShallow("symbolOffset"),d=m.getModel(fD),f=m.getModel(pD),p=m.getShallow("hoverAnimation"),g=m.getShallow("cursor");}else u=a({},u);var v=o.style;o.attr("rotation",(h||0)*Math.PI/180||0),c&&o.attr("position",[Vo(c[0],i[0]),Vo(c[1],i[1])]),g&&o.attr("cursor",g),o.setColor(s,n&&n.symbolInnerColor),o.setStyle(l);var y=t.getItemVisual(e,"opacity");null!=y&&(v.opacity=y);var x=t.getItemVisual(e,"liftZ"),_=o.__z2Origin;null!=x?null==_&&(o.__z2Origin=o.z2,o.z2+=x):null!=_&&(o.z2=_,o.__z2Origin=null);var w=n&&n.useNameLabel;go(v,u,d,f,{labelFetcher:r,labelDataIndex:e,defaultText:function defaultText(e,i){return w?t.getName(e):_u(t,e);},isRectText:!0,autoColor:s}),o.off("mouseover").off("mouseout").off("emphasis").off("normal"),o.hoverStyle=u,fo(o),o.__symbolOriginalScale=bu(i),p&&r.isAnimationEnabled()&&o.on("mouseover",Mu).on("mouseout",Iu).on("emphasis",Tu).on("normal",Au);},uD.fadeOut=function(t,e){var i=this.childAt(0);this.silent=i.silent=!0,!(e&&e.keepLabel)&&(i.style.text=null),Io(i,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t);},u(wu,tb);var gD=Du.prototype;gD.updateData=function(t,e){e=Lu(e);var i=this.group,n=t.hostModel,o=this._data,a=this._symbolCtor,r=ku(t);o||i.removeAll(),t.diff(o).add(function(n){var o=t.getItemLayout(n);if(Cu(t,o,n,e)){var s=new a(t,n,r);s.attr("position",o),t.setItemGraphicEl(n,s),i.add(s);}}).update(function(s,l){var u=o.getItemGraphicEl(l),h=t.getItemLayout(s);Cu(t,h,s,e)?(u?(u.updateData(t,s,r),Io(u,{position:h},n)):(u=new a(t,s)).attr("position",h),i.add(u),t.setItemGraphicEl(s,u)):i.remove(u);}).remove(function(t){var e=o.getItemGraphicEl(t);e&&e.fadeOut(function(){i.remove(e);});}).execute(),this._data=t;},gD.isPersistent=function(){return!0;},gD.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,i){var n=t.getItemLayout(i);e.attr("position",n);});},gD.incrementalPrepareUpdate=function(t){this._seriesScope=ku(t),this._data=null,this.group.removeAll();},gD.incrementalUpdate=function(t,e,i){i=Lu(i);for(var n=t.start;n<t.end;n++){var o=e.getItemLayout(n);if(Cu(e,o,n,i)){var a=new this._symbolCtor(e,n,this._seriesScope);a.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0);}),a.attr("position",o),this.group.add(a),e.setItemGraphicEl(n,a);}}},gD.remove=function(t){var e=this.group,i=this._data;i&&t?i.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t);});}):e.removeAll();};var mD=function mD(t,e,i,n,o,a,r,s){for(var l=Eu(t,e),u=[],h=[],c=[],d=[],f=[],p=[],g=[],m=Pu(o,e,r),v=Pu(a,t,s),y=0;y<l.length;y++){var x=l[y],_=!0;switch(x.cmd){case"=":var w=t.getItemLayout(x.idx),b=e.getItemLayout(x.idx1);(isNaN(w[0])||isNaN(w[1]))&&(w=b.slice()),u.push(w),h.push(b),c.push(i[x.idx]),d.push(n[x.idx1]),g.push(e.getRawIndex(x.idx1));break;case"+":S=x.idx;u.push(o.dataToPoint([e.get(m.dataDimsForPoint[0],S),e.get(m.dataDimsForPoint[1],S)])),h.push(e.getItemLayout(S).slice()),c.push(Ou(m,o,e,S)),d.push(n[S]),g.push(e.getRawIndex(S));break;case"-":var S=x.idx,M=t.getRawIndex(S);M!==S?(u.push(t.getItemLayout(S)),h.push(a.dataToPoint([t.get(v.dataDimsForPoint[0],S),t.get(v.dataDimsForPoint[1],S)])),c.push(i[S]),d.push(Ou(v,a,t,S)),g.push(M)):_=!1;}_&&(f.push(x),p.push(p.length));}p.sort(function(t,e){return g[t]-g[e];});for(var I=[],T=[],A=[],D=[],C=[],y=0;y<p.length;y++){S=p[y];I[y]=u[S],T[y]=h[S],A[y]=c[S],D[y]=d[S],C[y]=f[S];}return{current:I,next:T,stackedOnCurrent:A,stackedOnNext:D,status:C};},vD=tt,yD=et,xD=Z,_D=G,wD=[],bD=[],SD=[],MD=Pn.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:uM(Pn.prototype.brush),buildPath:function buildPath(t,e){var i=e.points,n=0,o=i.length,a=Gu(i,e.smoothConstraint);if(e.connectNulls){for(;o>0&&Ru(i[o-1]);o--){;}for(;n<o&&Ru(i[n]);n++){;}}for(;n<o;){n+=zu(t,i,n,o,o,1,a.min,a.max,e.smooth,e.smoothMonotone,e.connectNulls)+1;}}}),ID=Pn.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:uM(Pn.prototype.brush),buildPath:function buildPath(t,e){var i=e.points,n=e.stackedOnPoints,o=0,a=i.length,r=e.smoothMonotone,s=Gu(i,e.smoothConstraint),l=Gu(n,e.smoothConstraint);if(e.connectNulls){for(;a>0&&Ru(i[a-1]);a--){;}for(;o<a&&Ru(i[o]);o++){;}}for(;o<a;){var u=zu(t,i,o,a,a,1,s.min,s.max,e.smooth,r,e.connectNulls);zu(t,n,o+u-1,u,a,-1,l.min,l.max,e.stackedOnSmooth,r,e.connectNulls),o+=u+1,t.closePath();}}});Ar.extend({type:"line",init:function init(){var t=new tb(),e=new Du();this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t;},render:function render(t,e,i){var n=t.coordinateSystem,o=this.group,a=t.getData(),s=t.getModel("lineStyle"),l=t.getModel("areaStyle"),u=a.mapArray(a.getItemLayout),h="polar"===n.type,c=this._coordSys,d=this._symbolDraw,f=this._polyline,p=this._polygon,g=this._lineGroup,m=t.get("animation"),v=!l.isEmpty(),y=l.get("origin"),x=Zu(n,a,Pu(n,a,y)),_=t.get("showSymbol"),w=_&&!h&&Ku(t,a,n),b=this._data;b&&b.eachItemGraphicEl(function(t,e){t.__temp&&(o.remove(t),b.setItemGraphicEl(e,null));}),_||d.remove(),o.add(g);var S=!h&&t.get("step");f&&c.type===n.type&&S===this._step?(v&&!p?p=this._newPolygon(u,x,n,m):p&&!v&&(g.remove(p),p=this._polygon=null),g.setClipPath(ju(n,!1,!1,t)),_&&d.updateData(a,{isIgnore:w,clipShape:ju(n,!1,!0,t)}),a.eachItemGraphicEl(function(t){t.stopAnimation(!0);}),Fu(this._stackedOnPoints,x)&&Fu(this._points,u)||(m?this._updateAnimation(a,x,n,i,S,y):(S&&(u=Yu(u,n,S),x=Yu(x,n,S)),f.setShape({points:u}),p&&p.setShape({points:u,stackedOnPoints:x})))):(_&&d.updateData(a,{isIgnore:w,clipShape:ju(n,!1,!0,t)}),S&&(u=Yu(u,n,S),x=Yu(x,n,S)),f=this._newPolyline(u,n,m),v&&(p=this._newPolygon(u,x,n,m)),g.setClipPath(ju(n,!0,!1,t)));var M=qu(a,n)||a.getVisual("color");f.useStyle(r(s.getLineStyle(),{fill:"none",stroke:M,lineJoin:"bevel"}));var I=t.get("smooth");if(I=Wu(t.get("smooth")),f.setShape({smooth:I,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var T=a.getCalculationInfo("stackedOnSeries"),A=0;p.useStyle(r(l.getAreaStyle(),{fill:M,opacity:.7,lineJoin:"bevel"})),T&&(A=Wu(T.get("smooth"))),p.setShape({smooth:I,stackedOnSmooth:A,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")});}this._data=a,this._coordSys=n,this._stackedOnPoints=x,this._points=u,this._step=S,this._valueOrigin=y;},dispose:function dispose(){},highlight:function highlight(t,e,i,n){var o=t.getData(),a=zi(o,n);if(!(a instanceof Array)&&null!=a&&a>=0){var r=o.getItemGraphicEl(a);if(!r){var s=o.getItemLayout(a);if(!s)return;(r=new wu(o,a)).position=s,r.setZ(t.get("zlevel"),t.get("z")),r.ignore=isNaN(s[0])||isNaN(s[1]),r.__temp=!0,o.setItemGraphicEl(a,r),r.stopSymbolAnimation(!0),this.group.add(r);}r.highlight();}else Ar.prototype.highlight.call(this,t,e,i,n);},downplay:function downplay(t,e,i,n){var o=t.getData(),a=zi(o,n);if(null!=a&&a>=0){var r=o.getItemGraphicEl(a);r&&(r.__temp?(o.setItemGraphicEl(a,null),this.group.remove(r)):r.downplay());}else Ar.prototype.downplay.call(this,t,e,i,n);},_newPolyline:function _newPolyline(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new MD({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e;},_newPolygon:function _newPolygon(t,e){var i=this._polygon;return i&&this._lineGroup.remove(i),i=new ID({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(i),this._polygon=i,i;},_updateAnimation:function _updateAnimation(t,e,i,n,o,a){var r=this._polyline,s=this._polygon,l=t.hostModel,u=mD(this._data,t,this._stackedOnPoints,e,this._coordSys,i,this._valueOrigin,a),h=u.current,c=u.stackedOnCurrent,d=u.next,f=u.stackedOnNext;o&&(h=Yu(u.current,i,o),c=Yu(u.stackedOnCurrent,i,o),d=Yu(u.next,i,o),f=Yu(u.stackedOnNext,i,o)),r.shape.__points=u.current,r.shape.points=h,Io(r,{shape:{points:d}},l),s&&(s.setShape({points:h,stackedOnPoints:c}),Io(s,{shape:{points:d,stackedOnPoints:f}},l));for(var p=[],g=u.status,m=0;m<g.length;m++){if("="===g[m].cmd){var v=t.getItemGraphicEl(g[m].idx1);v&&p.push({el:v,ptIdx:m});}}r.animators&&r.animators.length&&r.animators[0].during(function(){for(var t=0;t<p.length;t++){p[t].el.attr("position",r.shape.__points[p[t].ptIdx]);}});},remove:function remove(t){var e=this.group,i=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),i&&i.eachItemGraphicEl(function(t,n){t.__temp&&(e.remove(t),i.setItemGraphicEl(n,null));}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null;}});var TD=function TD(t,e,i){return{seriesType:t,performRawSeries:!0,reset:function reset(t,n,o){var a=t.getData(),r=t.get("symbol")||e,s=t.get("symbolSize"),l=t.get("symbolKeepAspect");if(a.setVisual({legendSymbol:i||r,symbol:r,symbolSize:s,symbolKeepAspect:l}),!n.isSeriesFiltered(t)){var u="function"==typeof s;return{dataEach:a.hasItemOption||u?function(e,i){if("function"==typeof s){var n=t.getRawValue(i),o=t.getDataParams(i);e.setItemVisual(i,"symbolSize",s(n,o));}if(e.hasItemOption){var a=e.getItemModel(i),r=a.getShallow("symbol",!0),l=a.getShallow("symbolSize",!0),u=a.getShallow("symbolKeepAspect",!0);null!=r&&e.setItemVisual(i,"symbol",r),null!=l&&e.setItemVisual(i,"symbolSize",l),null!=u&&e.setItemVisual(i,"symbolKeepAspect",u);}}:null};}}};},AD=function AD(t){return{seriesType:t,plan:$I(),reset:function reset(t){var e=t.getData(),i=t.coordinateSystem,n=t.pipelineContext.large;if(i){var o=f(i.dimensions,function(t){return e.mapDimension(t);}).slice(0,2),a=o.length,r=e.getCalculationInfo("stackResultDimension");return pl(e,o[0])&&(o[0]=r),pl(e,o[1])&&(o[1]=r),a&&{progress:function progress(t,e){for(var r=t.end-t.start,s=n&&new Float32Array(r*a),l=t.start,u=0,h=[],c=[];l<t.end;l++){var d;if(1===a)f=e.get(o[0],l),d=!isNaN(f)&&i.dataToPoint(f,null,c);else{var f=h[0]=e.get(o[0],l),p=h[1]=e.get(o[1],l);d=!isNaN(f)&&!isNaN(p)&&i.dataToPoint(h,null,c);}n?(s[u++]=d?d[0]:NaN,s[u++]=d?d[1]:NaN):e.setItemLayout(l,d&&d.slice()||[NaN,NaN]);}n&&e.setLayout("symbolPoints",s);}};}}};},DD={average:function average(t){for(var e=0,i=0,n=0;n<t.length;n++){isNaN(t[n])||(e+=t[n],i++);}return 0===i?NaN:e/i;},sum:function sum(t){for(var e=0,i=0;i<t.length;i++){e+=t[i]||0;}return e;},max:function max(t){for(var e=-1/0,i=0;i<t.length;i++){t[i]>e&&(e=t[i]);}return isFinite(e)?e:NaN;},min:function min(t){for(var e=1/0,i=0;i<t.length;i++){t[i]<e&&(e=t[i]);}return isFinite(e)?e:NaN;},nearest:function nearest(t){return t[0];}},CD=function CD(t,e){return Math.round(t.length/2);},LD=function LD(t){this._axes={},this._dimList=[],this.name=t||"";};LD.prototype={constructor:LD,type:"cartesian",getAxis:function getAxis(t){return this._axes[t];},getAxes:function getAxes(){return f(this._dimList,Ju,this);},getAxesByScale:function getAxesByScale(t){return t=t.toLowerCase(),g(this.getAxes(),function(e){return e.scale.type===t;});},addAxis:function addAxis(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e);},dataToCoord:function dataToCoord(t){return this._dataCoordConvert(t,"dataToCoord");},coordToData:function coordToData(t){return this._dataCoordConvert(t,"coordToData");},_dataCoordConvert:function _dataCoordConvert(t,e){for(var i=this._dimList,n=t instanceof Array?[]:{},o=0;o<i.length;o++){var a=i[o],r=this._axes[a];n[a]=r[e](t[a]);}return n;}},Qu.prototype={constructor:Qu,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function getBaseAxis(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x");},containPoint:function containPoint(t){var e=this.getAxis("x"),i=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&i.contain(i.toLocalCoord(t[1]));},containData:function containData(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1]);},dataToPoint:function dataToPoint(t,e,i){var n=this.getAxis("x"),o=this.getAxis("y");return i=i||[],i[0]=n.toGlobalCoord(n.dataToCoord(t[0])),i[1]=o.toGlobalCoord(o.dataToCoord(t[1])),i;},clampData:function clampData(t,e){var i=this.getAxis("x").scale,n=this.getAxis("y").scale,o=i.getExtent(),a=n.getExtent(),r=i.parse(t[0]),s=n.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(o[0],o[1]),r),Math.max(o[0],o[1])),e[1]=Math.min(Math.max(Math.min(a[0],a[1]),s),Math.max(a[0],a[1])),e;},pointToData:function pointToData(t,e){var i=this.getAxis("x"),n=this.getAxis("y");return e=e||[],e[0]=i.coordToData(i.toLocalCoord(t[0])),e[1]=n.coordToData(n.toLocalCoord(t[1])),e;},getOtherAxis:function getOtherAxis(t){return this.getAxis("x"===t.dim?"y":"x");}},u(Qu,LD);var kD=function kD(t,e,i,n,o){aD.call(this,t,e,i),this.type=n||"value",this.position=o||"bottom";};kD.prototype={constructor:kD,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function isHorizontal(){var t=this.position;return"top"===t||"bottom"===t;},getGlobalExtent:function getGlobalExtent(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e;},getOtherAxis:function getOtherAxis(){this.grid.getOtherAxis();},pointToData:function pointToData(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e);},toLocalCoord:null,toGlobalCoord:null},u(kD,aD);var PD={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},ND={};ND.categoryAxis=n({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},PD),ND.valueAxis=n({boundaryGap:[0,0],splitNumber:5},PD),ND.timeAxis=r({scale:!0,min:"dataMin",max:"dataMax"},ND.valueAxis),ND.logAxis=r({scale:!0,logBase:10},ND.valueAxis);var OD=["value","category","time","log"],ED=function ED(t,e,i,a){d(OD,function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function mergeDefaultAndTheme(e,o){var a=this.layoutMode,s=a?ga(e):{};n(e,o.getTheme().get(r+"Axis")),n(e,this.getDefaultOption()),e.type=i(t,e),a&&pa(e,s,a);},optionUpdated:function optionUpdated(){"category"===this.option.type&&(this.__ordinalMeta=_l.createByAxisModel(this));},getCategories:function getCategories(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories;},getOrdinalMeta:function getOrdinalMeta(){return this.__ordinalMeta;},defaultOption:o([{},ND[r+"Axis"],a],!0)});}),lI.registerSubTypeDefaulter(t+"Axis",v(i,t));},RD=lI.extend({type:"cartesian2dAxis",axis:null,init:function init(){RD.superApply(this,"init",arguments),this.resetRange();},mergeOption:function mergeOption(){RD.superApply(this,"mergeOption",arguments),this.resetRange();},restoreData:function restoreData(){RD.superApply(this,"restoreData",arguments),this.resetRange();},getCoordSysModel:function getCoordSysModel(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0];}});n(RD.prototype,UA);var zD={offset:0};ED("x",RD,th,zD),ED("y",RD,th,zD),lI.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var BD=ih.prototype;BD.type="grid",BD.axisPointerEnabled=!0,BD.getRect=function(){return this._rect;},BD.update=function(t,e){var i=this._axesMap;this._updateScale(t,this.model),d(i.x,function(t){Wl(t.scale,t.model);}),d(i.y,function(t){Wl(t.scale,t.model);});var n={};d(i.x,function(t){nh(i,"y",t,n);}),d(i.y,function(t){nh(i,"x",t,n);}),this.resize(this.model,e);},BD.resize=function(t,e,i){function n(){d(a,function(t){var e=t.isHorizontal(),i=e?[0,o.width]:[0,o.height],n=t.inverse?1:0;t.setExtent(i[n],i[1-n]),ah(t,e?o.x:o.y);});}var o=ca(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=o;var a=this._axesList;n(),!i&&t.get("containLabel")&&(d(a,function(t){if(!t.model.get("axisLabel.inside")){var e=jl(t);if(e){var i=t.isHorizontal()?"height":"width",n=t.model.get("axisLabel.margin");o[i]-=e[i]+n,"top"===t.position?o.y+=e.height+n:"left"===t.position&&(o.x+=e.width+n);}}}),n());},BD.getAxis=function(t,e){var i=this._axesMap[t];if(null!=i){if(null==e)for(var n in i){if(i.hasOwnProperty(n))return i[n];}return i[e];}},BD.getAxes=function(){return this._axesList.slice();},BD.getCartesian=function(t,e){if(null!=t&&null!=e){var i="x"+t+"y"+e;return this._coordsMap[i];}w(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var n=0,o=this._coordsList;n<o.length;n++){if(o[n].getAxis("x").index===t||o[n].getAxis("y").index===e)return o[n];}},BD.getCartesians=function(){return this._coordsList.slice();},BD.convertToPixel=function(t,e,i){var n=this._findConvertTarget(t,e);return n.cartesian?n.cartesian.dataToPoint(i):n.axis?n.axis.toGlobalCoord(n.axis.dataToCoord(i)):null;},BD.convertFromPixel=function(t,e,i){var n=this._findConvertTarget(t,e);return n.cartesian?n.cartesian.pointToData(i):n.axis?n.axis.coordToData(n.axis.toLocalCoord(i)):null;},BD._findConvertTarget=function(t,e){var i,n,o=e.seriesModel,a=e.xAxisModel||o&&o.getReferringComponents("xAxis")[0],r=e.yAxisModel||o&&o.getReferringComponents("yAxis")[0],s=e.gridModel,u=this._coordsList;return o?l(u,i=o.coordinateSystem)<0&&(i=null):a&&r?i=this.getCartesian(a.componentIndex,r.componentIndex):a?n=this.getAxis("x",a.componentIndex):r?n=this.getAxis("y",r.componentIndex):s&&s.coordinateSystem===this&&(i=this._coordsList[0]),{cartesian:i,axis:n};},BD.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t);},BD._initCartesian=function(t,e,i){function n(i){return function(n,s){if(eh(n,t,e)){var l=n.get("position");"x"===i?"top"!==l&&"bottom"!==l&&o[l="bottom"]&&(l="top"===l?"bottom":"top"):"left"!==l&&"right"!==l&&o[l="left"]&&(l="left"===l?"right":"left"),o[l]=!0;var u=new kD(i,Hl(n),[0,0],n.get("type"),l),h="category"===u.type;u.onBand=h&&n.get("boundaryGap"),u.inverse=n.get("inverse"),n.axis=u,u.model=n,u.grid=this,u.index=s,this._axesList.push(u),a[i][s]=u,r[i]++;}};}var o={left:!1,right:!1,top:!1,bottom:!1},a={x:{},y:{}},r={x:0,y:0};if(e.eachComponent("xAxis",n("x"),this),e.eachComponent("yAxis",n("y"),this),!r.x||!r.y)return this._axesMap={},void(this._axesList=[]);this._axesMap=a,d(a.x,function(e,i){d(a.y,function(n,o){var a="x"+i+"y"+o,r=new Qu(a);r.grid=this,r.model=t,this._coordsMap[a]=r,this._coordsList.push(r),r.addAxis(e),r.addAxis(n);},this);},this);},BD._updateScale=function(t,e){function i(t,e,i){d(t.mapDimension(e.dim,!0),function(i){e.scale.unionExtentFromData(t,gl(t,i));});}d(this._axesList,function(t){t.scale.setExtent(1/0,-1/0);}),t.eachSeries(function(n){if(sh(n)){var o=rh(n),a=o[0],r=o[1];if(!eh(a,e,t)||!eh(r,e,t))return;var s=this.getCartesian(a.componentIndex,r.componentIndex),l=n.getData(),u=s.getAxis("x"),h=s.getAxis("y");"list"===l.type&&(i(l,u),i(l,h));}},this);},BD.getTooltipAxes=function(t){var e=[],i=[];return d(this.getCartesians(),function(n){var o=null!=t&&"auto"!==t?n.getAxis(t):n.getBaseAxis(),a=n.getOtherAxis(o);l(e,o)<0&&e.push(o),l(i,a)<0&&i.push(a);}),{baseAxes:e,otherAxes:i};};var VD=["xAxis","yAxis"];ih.create=function(t,e){var i=[];return t.eachComponent("grid",function(n,o){var a=new ih(n,t,e);a.name="grid_"+o,a.resize(n,e,!0),n.coordinateSystem=a,i.push(a);}),t.eachSeries(function(t){if(sh(t)){var e=rh(t),i=e[0],n=e[1],o=i.getCoordSysModel().coordinateSystem;t.coordinateSystem=o.getCartesian(i.componentIndex,n.componentIndex);}}),i;},ih.dimensions=ih.prototype.dimensions=Qu.prototype.dimensions,Fa.register("cartesian2d",ih);var GD=Math.PI,FD=function FD(t,e){this.opt=e,this.axisModel=t,r(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new tb();var i=new tb({position:e.position.slice(),rotation:e.rotation});i.updateTransform(),this._transform=i.transform,this._dumbGroup=i;};FD.prototype={constructor:FD,hasBuilder:function hasBuilder(t){return!!WD[t];},add:function add(t){WD[t].call(this);},getGroup:function getGroup(){return this.group;}};var WD={axisLine:function axisLine(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var i=this.axisModel.axis.getExtent(),n=this._transform,o=[i[0],0],r=[i[1],0];n&&(Q(o,o,n),Q(r,r,n));var s=a({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new _M(Kn({anid:"line",shape:{x1:o[0],y1:o[1],x2:r[0],y2:r[1]},style:s,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var l=e.get("axisLine.symbol"),u=e.get("axisLine.symbolSize"),h=e.get("axisLine.symbolOffset")||0;if("number"==typeof h&&(h=[h,h]),null!=l){"string"==typeof l&&(l=[l,l]),"string"!=typeof u&&"number"!=typeof u||(u=[u,u]);var c=u[0],f=u[1];d([{rotate:t.rotation+Math.PI/2,offset:h[0],r:0},{rotate:t.rotation-Math.PI/2,offset:h[1],r:Math.sqrt((o[0]-r[0])*(o[0]-r[0])+(o[1]-r[1])*(o[1]-r[1]))}],function(e,i){if("none"!==l[i]&&null!=l[i]){var n=Jl(l[i],-c/2,-f/2,c,f,s.stroke,!0),a=e.r+e.offset,r=[o[0]+a*Math.cos(t.rotation),o[1]-a*Math.sin(t.rotation)];n.attr({rotation:e.rotate,position:r,silent:!0,z2:11}),this.group.add(n);}},this);}}},axisTickLabel:function axisTickLabel(){var t=this.axisModel,e=this.opt,i=gh(this,t,e);ch(t,mh(this,t,e),i);},axisName:function axisName(){var t=this.opt,e=this.axisModel,i=T(t.axisName,e.get("name"));if(i){var n,o=e.get("nameLocation"),r=t.nameDirection,s=e.getModel("nameTextStyle"),l=e.get("nameGap")||0,u=this.axisModel.axis.getExtent(),h=u[0]>u[1]?-1:1,c=["start"===o?u[0]-h*l:"end"===o?u[1]+h*l:(u[0]+u[1])/2,ph(o)?t.labelOffset+r*l:0],d=e.get("nameRotate");null!=d&&(d=d*GD/180);var f;ph(o)?n=HD(t.rotation,null!=d?d:t.rotation,r):(n=uh(t,o,d||0,u),null!=(f=t.axisNameAvailableWidth)&&(f=Math.abs(f/Math.sin(n.rotation)),!isFinite(f)&&(f=null)));var p=s.getFont(),g=e.get("nameTruncate",!0)||{},m=g.ellipsis,v=T(t.nameTruncateMaxWidth,g.maxWidth,f),y=null!=m&&null!=v?tI(i,v,p,m,{minChar:2,placeholder:g.placeholder}):i,x=e.get("tooltip",!0),_=e.mainType,w={componentType:_,name:i,$vars:["name"]};w[_+"Index"]=e.componentIndex;var b=new rM({anid:"name",__fullText:i,__truncatedText:y,position:c,rotation:n.rotation,silent:hh(e),z2:1,tooltip:x&&x.show?a({content:i,formatter:function formatter(){return i;},formatterParams:w},x):null});mo(b.style,s,{text:y,textFont:p,textFill:s.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:n.textAlign,textVerticalAlign:n.textVerticalAlign}),e.get("triggerEvent")&&(b.eventData=lh(e),b.eventData.targetType="axisName",b.eventData.name=i),this._dumbGroup.add(b),b.updateTransform(),this.group.add(b),b.decomposeTransform();}}},HD=FD.innerTextLayout=function(t,e,i){var n,o,a=Xo(e-t);return jo(a)?(o=i>0?"top":"bottom",n="center"):jo(a-GD)?(o=i>0?"bottom":"top",n="center"):(o="middle",n=a>0&&a<GD?i>0?"right":"left":i>0?"left":"right"),{rotation:a,textAlign:n,textVerticalAlign:o};},ZD=d,UD=v,XD=Ws({type:"axis",_axisPointer:null,axisPointerClass:null,render:function render(t,e,i,n){this.axisPointerClass&&Sh(t),XD.superApply(this,"render",arguments),Dh(this,t,0,i,0,!0);},updateAxisPointer:function updateAxisPointer(t,e,i,n,o){Dh(this,t,0,i,0,!1);},remove:function remove(t,e){var i=this._axisPointer;i&&i.remove(e),XD.superApply(this,"remove",arguments);},dispose:function dispose(t,e){Ch(this,e),XD.superApply(this,"dispose",arguments);}}),jD=[];XD.registerAxisPointerClass=function(t,e){jD[t]=e;},XD.getAxisPointerClass=function(t){return t&&jD[t];};var YD=["axisLine","axisTickLabel","axisName"],qD=["splitArea","splitLine"],KD=XD.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function render(t,e,i,n){this.group.removeAll();var o=this._axisGroup;if(this._axisGroup=new tb(),this.group.add(this._axisGroup),t.get("show")){var a=t.getCoordSysModel(),r=Lh(a,t),s=new FD(t,r);d(YD,s.add,s),this._axisGroup.add(s.getGroup()),d(qD,function(e){t.get(e+".show")&&this["_"+e](t,a);},this),Lo(o,this._axisGroup,t),KD.superCall(this,"render",t,e,i,n);}},remove:function remove(){this._splitAreaColors=null;},_splitLine:function _splitLine(t,e){var i=t.axis;if(!i.scale.isBlank()){var n=t.getModel("splitLine"),o=n.getModel("lineStyle"),a=o.get("color");a=y(a)?a:[a];for(var s=e.coordinateSystem.getRect(),l=i.isHorizontal(),u=0,h=i.getTicksCoords({tickModel:n}),c=[],d=[],f=o.getLineStyle(),p=0;p<h.length;p++){var g=i.toGlobalCoord(h[p].coord);l?(c[0]=g,c[1]=s.y,d[0]=g,d[1]=s.y+s.height):(c[0]=s.x,c[1]=g,d[0]=s.x+s.width,d[1]=g);var m=u++%a.length,v=h[p].tickValue;this._axisGroup.add(new _M(Kn({anid:null!=v?"line_"+h[p].tickValue:null,shape:{x1:c[0],y1:c[1],x2:d[0],y2:d[1]},style:r({stroke:a[m]},f),silent:!0})));}}},_splitArea:function _splitArea(t,e){var i=t.axis;if(!i.scale.isBlank()){var n=t.getModel("splitArea"),o=n.getModel("areaStyle"),a=o.get("color"),s=e.coordinateSystem.getRect(),l=i.getTicksCoords({tickModel:n,clamp:!0});if(l.length){var u=a.length,h=this._splitAreaColors,c=R(),d=0;if(h)for(m=0;m<l.length;m++){var f=h.get(l[m].tickValue);if(null!=f){d=(f+(u-1)*m)%u;break;}}var p=i.toGlobalCoord(l[0].coord),g=o.getAreaStyle();a=y(a)?a:[a];for(var m=1;m<l.length;m++){var v,x,_,w,b=i.toGlobalCoord(l[m].coord);i.isHorizontal()?(v=p,x=s.y,_=b-v,w=s.height,p=v+_):(v=s.x,x=p,_=s.width,p=x+(w=b-x));var S=l[m-1].tickValue;null!=S&&c.set(S,d),this._axisGroup.add(new yM({anid:null!=S?"area_"+S:null,shape:{x:v,y:x,width:_,height:w},style:r({fill:a[d]},g),silent:!0})),d=(d+1)%u;}this._splitAreaColors=c;}}}});KD.extend({type:"xAxis"}),KD.extend({type:"yAxis"}),Ws({type:"grid",render:function render(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new yM({shape:t.coordinateSystem.getRect(),style:r({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}));}}),Ns(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={});}),Bs(TD("line","circle","line")),zs(AD("line")),Os(VT.PROCESSOR.STATISTIC,function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function reset(t,e,i){var n=t.getData(),o=t.get("sampling"),a=t.coordinateSystem;if("cartesian2d"===a.type&&o){var r=a.getBaseAxis(),s=a.getOtherAxis(r),l=r.getExtent(),u=l[1]-l[0],h=Math.round(n.count()/u);if(h>1){var c;"string"==typeof o?c=DD[o]:"function"==typeof o&&(c=o),c&&t.setData(n.downSample(n.mapDimension(s.dim),1/h,c,CD));}}}};}("line"));var $D=YI.extend({type:"series.__base_bar__",getInitialData:function getInitialData(t,e){return ml(this.getSource(),this);},getMarkerPosition:function getMarkerPosition(t){var e=this.coordinateSystem;if(e){var i=e.dataToPoint(e.clampData(t)),n=this.getData(),o=n.getLayout("offset"),a=n.getLayout("size");return i[e.getBaseAxis().isHorizontal()?0:1]+=o+a/2,i;}return[NaN,NaN];},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}});$D.extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function getProgressive(){return!!this.get("large")&&this.get("progressive");},getProgressiveThreshold:function getProgressiveThreshold(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t;}});var JD=Qb([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),QD={getBarItemStyle:function getBarItemStyle(t){var e=JD(this,t);if(this.getBorderLineDash){var i=this.getBorderLineDash();i&&(e.lineDash=i);}return e;}},tC=["itemStyle","barBorderWidth"];a(No.prototype,QD),Zs({type:"bar",render:function render(t,e,i){this._updateDrawMode(t);var n=t.get("coordinateSystem");return"cartesian2d"!==n&&"polar"!==n||(this._isLargeDraw?this._renderLarge(t,e,i):this._renderNormal(t,e,i)),this.group;},incrementalPrepareRender:function incrementalPrepareRender(t,e,i){this._clear(),this._updateDrawMode(t);},incrementalRender:function incrementalRender(t,e,i,n){this._incrementalRenderLarge(t,e);},_updateDrawMode:function _updateDrawMode(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear());},_renderNormal:function _renderNormal(t,e,i){var n,o=this.group,a=t.getData(),r=this._data,s=t.coordinateSystem,l=s.getBaseAxis();"cartesian2d"===s.type?n=l.isHorizontal():"polar"===s.type&&(n="angle"===l.dim);var u=t.isAnimationEnabled()?t:null;a.diff(r).add(function(e){if(a.hasValue(e)){var i=a.getItemModel(e),r=iC[s.type](a,e,i),l=eC[s.type](a,e,i,r,n,u);a.setItemGraphicEl(e,l),o.add(l),Eh(l,a,e,i,r,t,n,"polar"===s.type);}}).update(function(e,i){var l=r.getItemGraphicEl(i);if(a.hasValue(e)){var h=a.getItemModel(e),c=iC[s.type](a,e,h);l?Io(l,{shape:c},u,e):l=eC[s.type](a,e,h,c,n,u,!0),a.setItemGraphicEl(e,l),o.add(l),Eh(l,a,e,h,c,t,n,"polar"===s.type);}else o.remove(l);}).remove(function(t){var e=r.getItemGraphicEl(t);"cartesian2d"===s.type?e&&Nh(t,u,e):e&&Oh(t,u,e);}).execute(),this._data=a;},_renderLarge:function _renderLarge(t,e,i){this._clear(),zh(t,this.group);},_incrementalRenderLarge:function _incrementalRenderLarge(t,e){zh(e,this.group,!0);},dispose:B,remove:function remove(t){this._clear(t);},_clear:function _clear(t){var e=this.group,i=this._data;t&&t.get("animation")&&i&&!this._isLargeDraw?i.eachItemGraphicEl(function(e){"sector"===e.type?Oh(e.dataIndex,t,e):Nh(e.dataIndex,t,e);}):e.removeAll(),this._data=null;}});var eC={cartesian2d:function cartesian2d(t,e,i,n,o,r,s){var l=new yM({shape:a({},n)});if(r){var u=l.shape,h=o?"height":"width",c={};u[h]=0,c[h]=n[h],zM[s?"updateProps":"initProps"](l,{shape:c},r,e);}return l;},polar:function polar(t,e,i,n,o,a,s){var l=n.startAngle<n.endAngle,u=new hM({shape:r({clockwise:l},n)});if(a){var h=u.shape,c=o?"r":"endAngle",d={};h[c]=o?0:n.startAngle,d[c]=n[c],zM[s?"updateProps":"initProps"](u,{shape:d},a,e);}return u;}},iC={cartesian2d:function cartesian2d(t,e,i){var n=t.getItemLayout(e),o=Rh(i,n),a=n.width>0?1:-1,r=n.height>0?1:-1;return{x:n.x+a*o/2,y:n.y+r*o/2,width:n.width-a*o,height:n.height-r*o};},polar:function polar(t,e,i){var n=t.getItemLayout(e);return{cx:n.cx,cy:n.cy,r0:n.r0,r:n.r,startAngle:n.startAngle,endAngle:n.endAngle};}},nC=Pn.extend({type:"largeBar",shape:{points:[]},buildPath:function buildPath(t,e){for(var i=e.points,n=this.__startPoint,o=this.__valueIdx,a=0;a<i.length;a+=2){n[this.__valueIdx]=i[a+o],t.moveTo(n[0],n[1]),t.lineTo(i[a],i[a+1]);}}});zs(v(El,"bar")),zs(CA),Bs({seriesType:"bar",reset:function reset(t){t.getData().setVisual("legendSymbol","roundRect");}});var oC=function oC(t,e,i){e=y(e)&&{coordDimensions:e}||a({},e);var n=t.getSource(),o=_A(n,e),r=new vA(o,t);return r.initData(n,i),r;},aC={updateSelectedMap:function updateSelectedMap(t){this._targetList=y(t)?t.slice():[],this._selectTargetMap=p(t||[],function(t,e){return t.set(e.name,e),t;},R());},select:function select(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1;}),i&&(i.selected=!0);},unSelect:function unSelect(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);i&&(i.selected=!1);},toggleSelected:function toggleSelected(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);if(null!=i)return this[i.selected?"unSelect":"select"](t,e),i.selected;},isSelected:function isSelected(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return i&&i.selected;}},rC=Hs({type:"series.pie",init:function init(t){rC.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData();},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t);},mergeOption:function mergeOption(t){rC.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList());},getInitialData:function getInitialData(t,e){return oC(this,["value"]);},_createSelectableList:function _createSelectableList(){for(var t=this.getRawData(),e=t.mapDimension("value"),i=[],n=0,o=t.count();n<o;n++){i.push({name:t.getName(n),value:t.get(e,n),selected:pr(t,n,"selected")});}return i;},getDataParams:function getDataParams(t){var e=this.getData(),i=rC.superCall(this,"getDataParams",t),n=[];return e.each(e.mapDimension("value"),function(t){n.push(t);}),i.percent=Uo(n,t,e.hostModel.get("percentPrecision")),i.$vars.push("percent"),i;},_defaultLabelLine:function _defaultLabelLine(t){Ci(t,"labelLine",["show"]);var e=t.labelLine,i=t.emphasis.labelLine;e.show=e.show&&t.label.show,i.show=i.show&&t.emphasis.label.show;},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});h(rC,aC);var sC=Fh.prototype;sC.updateData=function(t,e,i){function n(){s.stopAnimation(!0),s.animateTo({shape:{r:h.r+l.get("hoverOffset")}},300,"elasticOut");}function o(){s.stopAnimation(!0),s.animateTo({shape:{r:h.r}},300,"elasticOut");}var s=this.childAt(0),l=t.hostModel,u=t.getItemModel(e),h=t.getItemLayout(e),c=a({},h);c.label=null,i?(s.setShape(c),"scale"===l.getShallow("animationType")?(s.shape.r=h.r0,To(s,{shape:{r:h.r}},l,e)):(s.shape.endAngle=h.startAngle,Io(s,{shape:{endAngle:h.endAngle}},l,e))):Io(s,{shape:c},l,e);var d=t.getItemVisual(e,"color");s.useStyle(r({lineJoin:"bevel",fill:d},u.getModel("itemStyle").getItemStyle())),s.hoverStyle=u.getModel("emphasis.itemStyle").getItemStyle();var f=u.getShallow("cursor");f&&s.attr("cursor",f),Gh(this,t.getItemLayout(e),l.isSelected(null,e),l.get("selectedOffset"),l.get("animation")),s.off("mouseover").off("mouseout").off("emphasis").off("normal"),u.get("hoverAnimation")&&l.isAnimationEnabled()&&s.on("mouseover",n).on("mouseout",o).on("emphasis",n).on("normal",o),this._updateLabel(t,e),fo(this);},sC._updateLabel=function(t,e){var i=this.childAt(1),n=this.childAt(2),o=t.hostModel,a=t.getItemModel(e),r=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");Io(i,{shape:{points:r.linePoints||[[r.x,r.y],[r.x,r.y],[r.x,r.y]]}},o,e),Io(n,{style:{x:r.x,y:r.y}},o,e),n.attr({rotation:r.rotation,origin:[r.x,r.y],z2:10});var l=a.getModel("label"),u=a.getModel("emphasis.label"),h=a.getModel("labelLine"),c=a.getModel("emphasis.labelLine"),s=t.getItemVisual(e,"color");go(n.style,n.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!r.inside},{textAlign:r.textAlign,textVerticalAlign:r.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),n.ignore=n.normalIgnore=!l.get("show"),n.hoverIgnore=!u.get("show"),i.ignore=i.normalIgnore=!h.get("show"),i.hoverIgnore=!c.get("show"),i.setStyle({stroke:s,opacity:t.getItemVisual(e,"opacity")}),i.setStyle(h.getModel("lineStyle").getLineStyle()),i.hoverStyle=c.getModel("lineStyle").getLineStyle();var d=h.get("smooth");d&&!0===d&&(d=.4),i.setShape({smooth:d});},u(Fh,tb);Ar.extend({type:"pie",init:function init(){var t=new tb();this._sectorGroup=t;},render:function render(t,e,i,n){if(!n||n.from!==this.uid){var o=t.getData(),a=this._data,r=this.group,s=e.get("animation"),l=!a,u=t.get("animationType"),h=v(Vh,this.uid,t,s,i),c=t.get("selectedMode");if(o.diff(a).add(function(t){var e=new Fh(o,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0);}),c&&e.on("click",h),o.setItemGraphicEl(t,e),r.add(e);}).update(function(t,e){var i=a.getItemGraphicEl(e);i.updateData(o,t),i.off("click"),c&&i.on("click",h),r.add(i),o.setItemGraphicEl(t,i);}).remove(function(t){var e=a.getItemGraphicEl(t);r.remove(e);}).execute(),s&&l&&o.count()>0&&"scale"!==u){var d=o.getItemLayout(0),f=Math.max(i.getWidth(),i.getHeight())/2,p=m(r.removeClipPath,r);r.setClipPath(this._createClipPath(d.cx,d.cy,f,d.startAngle,d.clockwise,p,t));}else r.removeClipPath();this._data=o;}},dispose:function dispose(){},_createClipPath:function _createClipPath(t,e,i,n,o,a,r){var s=new hM({shape:{cx:t,cy:e,r0:0,r:i,startAngle:n,endAngle:n,clockwise:o}});return To(s,{shape:{endAngle:n+(o?1:-1)*Math.PI*2}},r,a),s;},containPoint:function containPoint(t,e){var i=e.getData().getItemLayout(0);if(i){var n=t[0]-i.cx,o=t[1]-i.cy,a=Math.sqrt(n*n+o*o);return a<=i.r&&a>=i.r0;}}});var lC=function lC(t,e){d(e,function(e){e.update="updateView",Es(e,function(i,n){var o={};return n.eachComponent({mainType:"series",subType:t,query:i},function(t){t[e.method]&&t[e.method](i.name,i.dataIndex);var n=t.getData();n.each(function(e){var i=n.getName(e);o[i]=t.isSelected(i)||!1;});}),{name:i.name,selected:o};});});},uC=function uC(t){return{getTargetSeries:function getTargetSeries(e){var i={},n=R();return e.eachSeriesByType(t,function(t){t.__paletteScope=i,n.set(t.uid,t);}),n;},reset:function reset(t,e){var i=t.getRawData(),n={},o=t.getData();o.each(function(t){var e=o.getRawIndex(t);n[e]=t;}),i.each(function(e){var a=n[e],r=null!=a&&o.getItemVisual(a,"color",!0);if(r)i.setItemVisual(e,"color",r);else{var s=i.getItemModel(e).get("itemStyle.color")||t.getColorFromPalette(i.getName(e)||e+"",t.__paletteScope,i.count());i.setItemVisual(e,"color",s),null!=a&&o.setItemVisual(a,"color",s);}});}};},hC=function hC(t,e,i,n){var o,a,r=t.getData(),s=[],l=!1;r.each(function(i){var n,u,h,c,d=r.getItemLayout(i),f=r.getItemModel(i),p=f.getModel("label"),g=p.get("position")||f.get("emphasis.label.position"),m=f.getModel("labelLine"),v=m.get("length"),y=m.get("length2"),x=(d.startAngle+d.endAngle)/2,_=Math.cos(x),w=Math.sin(x);o=d.cx,a=d.cy;var b="inside"===g||"inner"===g;if("center"===g)n=d.cx,u=d.cy,c="center";else{var S=(b?(d.r+d.r0)/2*_:d.r*_)+o,M=(b?(d.r+d.r0)/2*w:d.r*w)+a;if(n=S+3*_,u=M+3*w,!b){var I=S+_*(v+e-d.r),T=M+w*(v+e-d.r),A=I+(_<0?-1:1)*y,D=T;n=A+(_<0?-5:5),u=D,h=[[S,M],[I,T],[A,D]];}c=b?"center":_>0?"left":"right";}var C=p.getFont(),L=p.get("rotate")?_<0?-x+Math.PI:-x:0,k=ke(t.getFormattedLabel(i,"normal")||r.getName(i),C,c,"top");l=!!L,d.label={x:n,y:u,position:g,height:k.height,len:v,len2:y,linePoints:h,textAlign:c,verticalAlign:"middle",rotation:L,inside:b},b||s.push(d.label);}),!l&&t.get("avoidLabelOverlap")&&Hh(s,o,a,e,i,n);},cC=2*Math.PI,dC=Math.PI/180,fC=function fC(t){return{seriesType:t,reset:function reset(t,e){var i=e.findComponents({mainType:"legend"});if(i&&i.length){var n=t.getData();n.filterSelf(function(t){for(var e=n.getName(t),o=0;o<i.length;o++){if(!i[o].isSelected(e))return!1;}return!0;});}}};};lC("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),Bs(uC("pie")),zs(v(function(t,e,i,n){e.eachSeriesByType(t,function(t){var e=t.getData(),n=e.mapDimension("value"),o=t.get("center"),a=t.get("radius");y(a)||(a=[0,a]),y(o)||(o=[o,o]);var r=i.getWidth(),s=i.getHeight(),l=Math.min(r,s),u=Vo(o[0],r),h=Vo(o[1],s),c=Vo(a[0],l/2),d=Vo(a[1],l/2),f=-t.get("startAngle")*dC,p=t.get("minAngle")*dC,g=0;e.each(n,function(t){!isNaN(t)&&g++;});var m=e.getSum(n),v=Math.PI/(m||g)*2,x=t.get("clockwise"),_=t.get("roseType"),w=t.get("stillShowZeroSum"),b=e.getDataExtent(n);b[0]=0;var S=cC,M=0,I=f,T=x?1:-1;if(e.each(n,function(t,i){var n;if(isNaN(t))e.setItemLayout(i,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:x,cx:u,cy:h,r0:c,r:_?NaN:d});else{(n="area"!==_?0===m&&w?v:t*v:cC/g)<p?(n=p,S-=p):M+=t;var o=I+T*n;e.setItemLayout(i,{angle:n,startAngle:I,endAngle:o,clockwise:x,cx:u,cy:h,r0:c,r:_?Bo(t,b,[c,d]):d}),I=o;}}),S<cC&&g)if(S<=.001){var A=cC/g;e.each(n,function(t,i){if(!isNaN(t)){var n=e.getItemLayout(i);n.angle=A,n.startAngle=f+T*i*A,n.endAngle=f+T*(i+1)*A;}});}else v=S/M,I=f,e.each(n,function(t,i){if(!isNaN(t)){var n=e.getItemLayout(i),o=n.angle===p?p:t*v;n.startAngle=I,n.endAngle=I+T*o,I+=T*o;}});hC(t,d,r,s);});},"pie")),Os(fC("pie")),YI.extend({type:"series.scatter",dependencies:["grid","polar","geo","singleAxis","calendar"],getInitialData:function getInitialData(t,e){return ml(this.getSource(),this);},brushSelector:"point",getProgressive:function getProgressive(){var t=this.option.progressive;return null==t?this.option.large?5e3:this.get("progressive"):t;},getProgressiveThreshold:function getProgressiveThreshold(){var t=this.option.progressiveThreshold;return null==t?this.option.large?1e4:this.get("progressiveThreshold"):t;},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,symbolSize:10,large:!1,largeThreshold:2e3,itemStyle:{opacity:.8}}});var pC=Un({shape:{points:null},symbolProxy:null,buildPath:function buildPath(t,e){var i=e.points,n=e.size,o=this.symbolProxy,a=o.shape;if(!((t.getContext?t.getContext():t)&&n[0]<4))for(var r=0;r<i.length;){var s=i[r++],l=i[r++];isNaN(s)||isNaN(l)||(a.x=s-n[0]/2,a.y=l-n[1]/2,a.width=n[0],a.height=n[1],o.buildPath(t,a,!0));}},afterBrush:function afterBrush(t){var e=this.shape,i=e.points,n=e.size;if(n[0]<4){this.setTransform(t);for(var o=0;o<i.length;){var a=i[o++],r=i[o++];isNaN(a)||isNaN(r)||t.fillRect(a-n[0]/2,r-n[1]/2,n[0],n[1]);}this.restoreTransform(t);}},findDataIndex:function findDataIndex(t,e){for(var i=this.shape,n=i.points,o=i.size,a=Math.max(o[0],4),r=Math.max(o[1],4),s=n.length/2-1;s>=0;s--){var l=2*s,u=n[l]-a/2,h=n[l+1]-r/2;if(t>=u&&e>=h&&t<=u+a&&e<=h+r)return s;}return-1;}}),gC=Uh.prototype;gC.isPersistent=function(){return!this._incremental;},gC.updateData=function(t){this.group.removeAll();var e=new pC({rectHover:!0,cursor:"default"});e.setShape({points:t.getLayout("symbolPoints")}),this._setCommon(e,t),this.group.add(e),this._incremental=null;},gC.updateLayout=function(t){if(!this._incremental){var e=t.getLayout("symbolPoints");this.group.eachChild(function(t){if(null!=t.startIndex){var i=2*(t.endIndex-t.startIndex),n=4*t.startIndex*2;e=new Float32Array(e.buffer,n,i);}t.setShape("points",e);});}},gC.incrementalPrepareUpdate=function(t){this.group.removeAll(),this._clearIncremental(),t.count()>2e6?(this._incremental||(this._incremental=new Zn({silent:!0})),this.group.add(this._incremental)):this._incremental=null;},gC.incrementalUpdate=function(t,e){var i;this._incremental?(i=new pC(),this._incremental.addDisplayable(i,!0)):((i=new pC({rectHover:!0,cursor:"default",startIndex:t.start,endIndex:t.end})).incremental=!0,this.group.add(i)),i.setShape({points:e.getLayout("symbolPoints")}),this._setCommon(i,e,!!this._incremental);},gC._setCommon=function(t,e,i){var n=e.hostModel,o=e.getVisual("symbolSize");t.setShape("size",o instanceof Array?o:[o,o]),t.symbolProxy=Jl(e.getVisual("symbol"),0,0,0,0),t.setColor=t.symbolProxy.setColor;var a=t.shape.size[0]<4;t.useStyle(n.getModel("itemStyle").getItemStyle(a?["color","shadowBlur","shadowColor"]:["color"]));var r=e.getVisual("color");r&&t.setColor(r),i||(t.seriesIndex=n.seriesIndex,t.on("mousemove",function(e){t.dataIndex=null;var i=t.findDataIndex(e.offsetX,e.offsetY);i>=0&&(t.dataIndex=i+(t.startIndex||0));}));},gC.remove=function(){this._clearIncremental(),this._incremental=null,this.group.removeAll();},gC._clearIncremental=function(){var t=this._incremental;t&&t.clearDisplaybles();},Zs({type:"scatter",render:function render(t,e,i){var n=t.getData();this._updateSymbolDraw(n,t).updateData(n),this._finished=!0;},incrementalPrepareRender:function incrementalPrepareRender(t,e,i){var n=t.getData();this._updateSymbolDraw(n,t).incrementalPrepareUpdate(n),this._finished=!1;},incrementalRender:function incrementalRender(t,e,i){this._symbolDraw.incrementalUpdate(t,e.getData()),this._finished=t.end===e.getData().count();},updateTransform:function updateTransform(t,e,i){var n=t.getData();if(this.group.dirty(),!this._finished||n.count()>1e4||!this._symbolDraw.isPersistent())return{update:!0};var o=AD().reset(t);o.progress&&o.progress({start:0,end:n.count()},n),this._symbolDraw.updateLayout(n);},_updateSymbolDraw:function _updateSymbolDraw(t,e){var i=this._symbolDraw,n=e.pipelineContext.large;return i&&n===this._isLargeDraw||(i&&i.remove(),i=this._symbolDraw=n?new Uh():new Du(),this._isLargeDraw=n,this.group.removeAll()),this.group.add(i.group),i;},remove:function remove(t,e){this._symbolDraw&&this._symbolDraw.remove(!0),this._symbolDraw=null;},dispose:function dispose(){}}),Bs(TD("scatter","circle")),zs(AD("scatter")),u(Xh,aD),jh.prototype.getIndicatorAxes=function(){return this._indicatorAxes;},jh.prototype.dataToPoint=function(t,e){var i=this._indicatorAxes[e];return this.coordToPoint(i.dataToCoord(t),e);},jh.prototype.coordToPoint=function(t,e){var i=this._indicatorAxes[e].angle;return[this.cx+t*Math.cos(i),this.cy-t*Math.sin(i)];},jh.prototype.pointToData=function(t){var e=t[0]-this.cx,i=t[1]-this.cy,n=Math.sqrt(e*e+i*i);e/=n,i/=n;for(var o,a=Math.atan2(-i,e),r=1/0,s=-1,l=0;l<this._indicatorAxes.length;l++){var u=this._indicatorAxes[l],h=Math.abs(a-u.angle);h<r&&(o=u,s=l,r=h);}return[s,+(o&&o.coodToData(n))];},jh.prototype.resize=function(t,e){var i=t.get("center"),n=e.getWidth(),o=e.getHeight(),a=Math.min(n,o)/2;this.cx=Vo(i[0],n),this.cy=Vo(i[1],o),this.startAngle=t.get("startAngle")*Math.PI/180;var r=t.get("radius");"string"!=typeof r&&"number"!=typeof r||(r=[0,r]),this.r0=Vo(r[0],a),this.r=Vo(r[1],a),d(this._indicatorAxes,function(t,e){t.setExtent(this.r0,this.r);var i=this.startAngle+e*Math.PI*2/this._indicatorAxes.length;i=Math.atan2(Math.sin(i),Math.cos(i)),t.angle=i;},this);},jh.prototype.update=function(t,e){function i(t){var e=Math.pow(10,Math.floor(Math.log(t)/Math.LN10)),i=t/e;return 2===i?i=5:i*=2,i*e;}var n=this._indicatorAxes,o=this._model;d(n,function(t){t.scale.setExtent(1/0,-1/0);}),t.eachSeriesByType("radar",function(e,i){if("radar"===e.get("coordinateSystem")&&t.getComponent("radar",e.get("radarIndex"))===o){var a=e.getData();d(n,function(t){t.scale.unionExtentFromData(a,a.mapDimension(t.dim));});}},this);var a=o.get("splitNumber");d(n,function(t,e){var n=Gl(t.scale,t.model);Wl(t.scale,t.model);var o=t.model,r=t.scale,s=o.getMin(),l=o.getMax(),u=r.getInterval();if(null!=s&&null!=l)r.setExtent(+s,+l),r.setInterval((l-s)/a);else if(null!=s){var h;do{h=s+u*a,r.setExtent(+s,h),r.setInterval(u),u=i(u);}while(h<n[1]&&isFinite(h)&&isFinite(n[1]));}else if(null!=l){var c;do{c=l-u*a,r.setExtent(c,+l),r.setInterval(u),u=i(u);}while(c>n[0]&&isFinite(c)&&isFinite(n[0]));}else{r.getTicks().length-1>a&&(u=i(u));var d=Math.round((n[0]+n[1])/2/u)*u,f=Math.round(a/2);r.setExtent(Go(d-f*u),Go(d+(a-f)*u)),r.setInterval(u);}});},jh.dimensions=[],jh.create=function(t,e){var i=[];return t.eachComponent("radar",function(n){var o=new jh(n,t,e);i.push(o),n.coordinateSystem=o;}),t.eachSeriesByType("radar",function(t){"radar"===t.get("coordinateSystem")&&(t.coordinateSystem=i[t.get("radarIndex")||0]);}),i;},Fa.register("radar",jh);var mC=ND.valueAxis,vC=(Fs({type:"radar",optionUpdated:function optionUpdated(){var t=this.get("boundaryGap"),e=this.get("splitNumber"),o=this.get("scale"),s=this.get("axisLine"),l=this.get("axisTick"),u=this.get("axisLabel"),h=this.get("name"),c=this.get("name.show"),d=this.get("name.formatter"),p=this.get("nameGap"),g=this.get("triggerEvent"),m=f(this.get("indicator")||[],function(f){null!=f.max&&f.max>0&&!f.min?f.min=0:null!=f.min&&f.min<0&&!f.max&&(f.max=0);var m=h;if(null!=f.color&&(m=r({color:f.color},h)),f=n(i(f),{boundaryGap:t,splitNumber:e,scale:o,axisLine:s,axisTick:l,axisLabel:u,name:f.text,nameLocation:"end",nameGap:p,nameTextStyle:m,triggerEvent:g},!1),c||(f.name=""),"string"==typeof d){var v=f.name;f.name=d.replace("{value}",null!=v?v:"");}else"function"==typeof d&&(f.name=d(f.name,f));var y=a(new No(f,null,this.ecModel),UA);return y.mainType="radar",y.componentIndex=this.componentIndex,y;},this);this.getIndicatorModels=function(){return m;};},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"75%",startAngle:90,name:{show:!0},boundaryGap:[0,0],splitNumber:5,nameGap:15,scale:!1,shape:"polygon",axisLine:n({lineStyle:{color:"#bbb"}},mC.axisLine),axisLabel:Yh(mC.axisLabel,!1),axisTick:Yh(mC.axisTick,!1),splitLine:Yh(mC.splitLine,!0),splitArea:Yh(mC.splitArea,!0),indicator:[]}}),["axisLine","axisTickLabel","axisName"]);Ws({type:"radar",render:function render(t,e,i){this.group.removeAll(),this._buildAxes(t),this._buildSplitLineAndArea(t);},_buildAxes:function _buildAxes(t){var e=t.coordinateSystem;d(f(e.getIndicatorAxes(),function(t){return new FD(t.model,{position:[e.cx,e.cy],rotation:t.angle,labelDirection:-1,tickDirection:-1,nameDirection:1});}),function(t){d(vC,t.add,t),this.group.add(t.getGroup());},this);},_buildSplitLineAndArea:function _buildSplitLineAndArea(t){function e(t,e,i){var n=i%e.length;return t[n]=t[n]||[],n;}var i=t.coordinateSystem,n=i.getIndicatorAxes();if(n.length){var o=t.get("shape"),a=t.getModel("splitLine"),s=t.getModel("splitArea"),l=a.getModel("lineStyle"),u=s.getModel("areaStyle"),h=a.get("show"),c=s.get("show"),p=l.get("color"),g=u.get("color");p=y(p)?p:[p],g=y(g)?g:[g];var m=[],v=[];if("circle"===o)for(var x=n[0].getTicksCoords(),_=i.cx,w=i.cy,b=0;b<x.length;b++){h&&m[D=e(m,p,b)].push(new sM({shape:{cx:_,cy:w,r:x[b].coord}})),c&&b<x.length-1&&v[D=e(v,g,b)].push(new cM({shape:{cx:_,cy:w,r0:x[b].coord,r:x[b+1].coord}}));}else for(var S,M=f(n,function(t,e){var n=t.getTicksCoords();return S=null==S?n.length-1:Math.min(n.length-1,S),f(n,function(t){return i.coordToPoint(t.coord,e);});}),I=[],b=0;b<=S;b++){for(var T=[],A=0;A<n.length;A++){T.push(M[A][b]);}if(T[0]&&T.push(T[0].slice()),h&&m[D=e(m,p,b)].push(new gM({shape:{points:T}})),c&&I){var D=e(v,g,b-1);v[D].push(new pM({shape:{points:T.concat(I)}}));}I=T.slice().reverse();}var C=l.getLineStyle(),L=u.getAreaStyle();d(v,function(t,e){this.group.add(OM(t,{style:r({stroke:"none",fill:g[e%g.length]},L),silent:!0}));},this),d(m,function(t,e){this.group.add(OM(t,{style:r({fill:"none",stroke:p[e%p.length]},C),silent:!0}));},this);}}});var yC=YI.extend({type:"series.radar",dependencies:["radar"],init:function init(t){yC.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData();};},getInitialData:function getInitialData(t,e){return oC(this,{generateCoord:"indicator_",generateCoordCount:1/0});},formatTooltip:function formatTooltip(t){var e=this.getData(),i=this.coordinateSystem.getIndicatorAxes(),n=this.getData().getName(t);return ia(""===n?this.name:n)+"<br/>"+f(i,function(i,n){var o=e.get(e.mapDimension(i.dim),t);return ia(i.name+" : "+o);}).join("<br />");},defaultOption:{zlevel:0,z:2,coordinateSystem:"radar",legendHoverLink:!0,radarIndex:0,lineStyle:{width:2,type:"solid"},label:{position:"top"},symbol:"emptyCircle",symbolSize:4}});Zs({type:"radar",render:function render(t,e,n){function o(t,e){var i=t.getItemVisual(e,"symbol")||"circle",n=t.getItemVisual(e,"color");if("none"!==i){var o=qh(t.getItemVisual(e,"symbolSize")),a=Jl(i,-1,-1,2,2,n);return a.attr({style:{strokeNoScale:!0},z2:100,scale:[o[0]/2,o[1]/2]}),a;}}function a(e,i,n,a,r,s){n.removeAll();for(var l=0;l<i.length-1;l++){var u=o(a,r);u&&(u.__dimIdx=l,e[l]?(u.attr("position",e[l]),zM[s?"initProps":"updateProps"](u,{position:i[l]},t,r)):u.attr("position",i[l]),n.add(u));}}function s(t){return f(t,function(t){return[l.cx,l.cy];});}var l=t.coordinateSystem,u=this.group,h=t.getData(),c=this._data;h.diff(c).add(function(e){var i=h.getItemLayout(e);if(i){var n=new pM(),o=new gM(),r={shape:{points:i}};n.shape.points=s(i),o.shape.points=s(i),To(n,r,t,e),To(o,r,t,e);var l=new tb(),u=new tb();l.add(o),l.add(n),l.add(u),a(o.shape.points,i,u,h,e,!0),h.setItemGraphicEl(e,l);}}).update(function(e,i){var n=c.getItemGraphicEl(i),o=n.childAt(0),r=n.childAt(1),s=n.childAt(2),l={shape:{points:h.getItemLayout(e)}};l.shape.points&&(a(o.shape.points,l.shape.points,s,h,e,!1),Io(o,l,t),Io(r,l,t),h.setItemGraphicEl(e,n));}).remove(function(t){u.remove(c.getItemGraphicEl(t));}).execute(),h.eachItemGraphicEl(function(t,e){function n(){l.attr("ignore",m);}function o(){l.attr("ignore",g);}var a=h.getItemModel(e),s=t.childAt(0),l=t.childAt(1),c=t.childAt(2),d=h.getItemVisual(e,"color");u.add(t),s.useStyle(r(a.getModel("lineStyle").getLineStyle(),{fill:"none",stroke:d})),s.hoverStyle=a.getModel("emphasis.lineStyle").getLineStyle();var f=a.getModel("areaStyle"),p=a.getModel("emphasis.areaStyle"),g=f.isEmpty()&&f.parentModel.isEmpty(),m=p.isEmpty()&&p.parentModel.isEmpty();m=m&&g,l.ignore=g,l.useStyle(r(f.getAreaStyle(),{fill:d,opacity:.7})),l.hoverStyle=p.getAreaStyle();var v=a.getModel("itemStyle").getItemStyle(["color"]),y=a.getModel("emphasis.itemStyle").getItemStyle(),x=a.getModel("label"),_=a.getModel("emphasis.label");c.eachChild(function(t){t.setStyle(v),t.hoverStyle=i(y),go(t.style,t.hoverStyle,x,_,{labelFetcher:h.hostModel,labelDataIndex:e,labelDimIndex:t.__dimIdx,defaultText:h.get(h.dimensions[t.__dimIdx],e),autoColor:d,isRectText:!0});}),t.off("mouseover").off("mouseout").off("normal").off("emphasis"),t.on("emphasis",n).on("mouseover",n).on("normal",o).on("mouseout",o),fo(t);}),this._data=h;},remove:function remove(){this.group.removeAll(),this._data=null;},dispose:function dispose(){}});Bs(uC("radar")),Bs(TD("radar","circle")),zs(function(t){t.eachSeriesByType("radar",function(t){var e=t.getData(),i=[],n=t.coordinateSystem;if(n){for(var o=n.getIndicatorAxes(),a=0;a<o.length;a++){e.each(e.mapDimension(o[a].dim),function(t,e){i[e]=i[e]||[],i[e][a]=n.dataToPoint(t,a);});}e.each(function(t){i[t][0]&&i[t].push(i[t][0].slice()),e.setItemLayout(t,i[t]);});}});}),Os(fC("radar")),Ns(function(t){var e=t.polar;if(e){y(e)||(e=[e]);var i=[];d(e,function(e,n){e.indicator?(e.type&&!e.shape&&(e.shape=e.type),t.radar=t.radar||[],y(t.radar)||(t.radar=[t.radar]),t.radar.push(e)):i.push(e);}),t.polar=i;}d(t.series,function(t){t&&"radar"===t.type&&t.polarIndex&&(t.radarIndex=t.polarIndex);});});for(var xC=[126,25],_C=[[[0,3.5],[7,11.2],[15,11.9],[30,7],[42,.7],[52,.7],[56,7.7],[59,.7],[64,.7],[64,0],[5,0],[0,3.5]],[[13,16.1],[19,14.7],[16,21.7],[11,23.1],[13,16.1]],[[12,32.2],[14,38.5],[15,38.5],[13,32.2],[12,32.2]],[[16,47.6],[12,53.2],[13,53.2],[18,47.6],[16,47.6]],[[6,64.4],[8,70],[9,70],[8,64.4],[6,64.4]],[[23,82.6],[29,79.8],[30,79.8],[25,82.6],[23,82.6]],[[37,70.7],[43,62.3],[44,62.3],[39,70.7],[37,70.7]],[[48,51.1],[51,45.5],[53,45.5],[50,51.1],[48,51.1]],[[51,35],[51,28.7],[53,28.7],[53,35],[51,35]],[[52,22.4],[55,17.5],[56,17.5],[53,22.4],[52,22.4]],[[58,12.6],[62,7],[63,7],[60,12.6],[58,12.6]],[[0,3.5],[0,93.1],[64,93.1],[64,0],[63,0],[63,92.4],[1,92.4],[1,3.5],[0,3.5]]],wC=0;wC<_C.length;wC++){for(var bC=0;bC<_C[wC].length;bC++){_C[wC][bC][0]/=10.5,_C[wC][bC][1]/=-14,_C[wC][bC][0]+=xC[0],_C[wC][bC][1]+=xC[1];}}var SC=function SC(t,e){"china"===t&&e.push(new eu("南海诸岛",f(_C,function(t){return{type:"polygon",exterior:t};}),xC));},MC={"南海诸岛":[32,80],"广东":[0,-10],"香港":[10,5],"澳门":[-10,10],"天津":[5,5]},IC=function IC(t,e){if("china"===t){var i=MC[e.name];if(i){var n=e.center;n[0]+=i[0]/10.5,n[1]+=-i[1]/14;}}},TC={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]},AC=function AC(t,e){if("world"===t){var i=TC[e.name];if(i){var n=e.center;n[0]=i[0],n[1]=i[1];}}},DC=[[[123.45165252685547,25.73527164402261],[123.49731445312499,25.73527164402261],[123.49731445312499,25.750734064600884],[123.45165252685547,25.750734064600884],[123.45165252685547,25.73527164402261]]],CC=function CC(t,e){"china"===t&&"台湾"===e.name&&e.geometries.push({type:"polygon",exterior:DC[0]});},LC=Bi(),kC={load:function load(t,e){var i=LC(e).parsed;if(i)return i;var n,o=e.specialAreas||{},a=e.geoJSON;try{n=a?iD(a):[];}catch(t){throw new Error("Invalid geoJson format\n"+t.message);}return d(n,function(e){var i=e.name;IC(t,e),AC(t,e),CC(t,e);var n=o[i];n&&e.transformTo(n.left,n.top,n.width,n.height);}),SC(t,n),LC(e).parsed={regions:n,boundingRect:Kh(n)};}},PC=Bi(),NC={geoJSON:kC,svg:{load:function load(t,e){var i=PC(e).originRoot;if(i)return{root:i,boundingRect:PC(e).boundingRect};var n=$h(e);return PC(e).originRoot=n.root,PC(e).boundingRect=n.boundingRect,n;},makeGraphic:function makeGraphic(t,e,i){var n=PC(e),o=n.rootMap||(n.rootMap=R()),a=o.get(i);if(a)return a;var r=n.originRoot,s=n.boundingRect;return n.originRootHostKey?a=$h(e,s).root:(n.originRootHostKey=i,a=r),o.set(i,a);},removeGraphic:function removeGraphic(t,e,i){var n=PC(e),o=n.rootMap;o&&o.removeKey(i),i===n.originRootHostKey&&(n.originRootHostKey=null);}}},OC={load:function load(t,e){var i,n=[],o=R(),a=R();return d(Qh(t),function(r){var s=NC[r.type].load(t,r);d(s.regions,function(t){var i=t.name;e&&e.hasOwnProperty(i)&&(t=t.cloneShallow(i=e[i])),n.push(t),o.set(i,t),a.set(i,t.center);});var l=s.boundingRect;l&&(i?i.union(l):i=l.clone());}),{regions:n,regionsMap:o,nameCoordMap:a,boundingRect:i||new de(0,0,0,0)};},makeGraphic:Jh("makeGraphic"),removeGraphic:Jh("removeGraphic")};h(YI.extend({type:"series.map",dependencies:["geo"],layoutMode:"box",needsDrawMap:!1,seriesGroup:[],getInitialData:function getInitialData(t){for(var e=oC(this,["value"]),i=e.mapDimension("value"),n=R(),o=[],a=[],r=0,s=e.count();r<s;r++){var l=e.getName(r);n.set(l,!0),o.push({name:l,value:e.get(i,r),selected:pr(e,r,"selected")});}return d(OC.load(this.getMapType(),this.option.nameMap).regions,function(t){var e=t.name;n.get(e)||(o.push({name:e}),a.push(e));}),this.updateSelectedMap(o),e.appendValues([],a),e;},getHostGeoModel:function getHostGeoModel(){var t=this.option.geoIndex;return null!=t?this.dependentModels.geo[t]:null;},getMapType:function getMapType(){return(this.getHostGeoModel()||this).option.map;},getRawValue:function getRawValue(t){var e=this.getData();return e.get(e.mapDimension("value"),t);},getRegionModel:function getRegionModel(t){var e=this.getData();return e.getItemModel(e.indexOfName(t));},formatTooltip:function formatTooltip(t){for(var e=this.getData(),i=ta(this.getRawValue(t)),n=e.getName(t),o=this.seriesGroup,a=[],r=0;r<o.length;r++){var s=o[r].originalData.indexOfName(n),l=e.mapDimension("value");isNaN(o[r].originalData.get(l,s))||a.push(ia(o[r].name));}return a.join(", ")+"<br />"+ia(n+" : "+i);},getTooltipPosition:function getTooltipPosition(t){if(null!=t){var e=this.getData().getName(t),i=this.coordinateSystem,n=i.getRegion(e);return n&&i.dataToPoint(n.center);}},setZoom:function setZoom(t){this.option.zoom=t;},setCenter:function setCenter(t){this.option.center=t;},defaultOption:{zlevel:0,z:2,coordinateSystem:"geo",map:"",left:"center",top:"center",aspectScale:.75,showLegendSymbol:!0,dataRangeHoverLink:!0,boundingCoords:null,center:null,zoom:1,scaleLimit:null,label:{show:!1,color:"#000"},itemStyle:{borderWidth:.5,borderColor:"#444",areaColor:"#eee"},emphasis:{label:{show:!0,color:"rgb(100,0,0)"},itemStyle:{areaColor:"rgba(255,215,0,0.8)"}}}}),aC);var EC="\0_ec_interaction_mutex";Es({type:"takeGlobalCursor",event:"globalCursorTaken",update:"update"},function(){}),h(oc,fw);var RC={axisPointer:1,tooltip:1,brush:1};xc.prototype={constructor:xc,draw:function draw(t,e,i,n,o){var a="geo"===t.mainType,r=t.getData&&t.getData();a&&e.eachComponent({mainType:"series",subType:"map"},function(e){r||e.getHostGeoModel()!==t||(r=e.getData());});var s=t.coordinateSystem;this._updateBackground(s);var l=this._regionsGroup,u=this.group,h=s.scale,c={position:s.position,scale:h};!l.childAt(0)||o?u.attr(c):Io(u,c,t),l.removeAll();var f=["itemStyle"],p=["emphasis","itemStyle"],g=["label"],m=["emphasis","label"],v=R();d(s.regions,function(e){var i=v.get(e.name)||v.set(e.name,new tb()),n=new MM({shape:{paths:[]}});i.add(n);var o,s=(C=t.getRegionModel(e.name)||t).getModel(f),u=C.getModel(p),c=mc(s),y=mc(u),x=C.getModel(g),_=C.getModel(m);if(r){o=r.indexOfName(e.name);var w=r.getItemVisual(o,"color",!0);w&&(c.fill=w);}d(e.geometries,function(t){if("polygon"===t.type){n.shape.paths.push(new pM({shape:{points:t.exterior}}));for(var e=0;e<(t.interiors?t.interiors.length:0);e++){n.shape.paths.push(new pM({shape:{points:t.interiors[e]}}));}}}),n.setStyle(c),n.style.strokeNoScale=!0,n.culling=!0;var b=x.get("show"),S=_.get("show"),M=r&&isNaN(r.get(r.mapDimension("value"),o)),I=r&&r.getItemLayout(o);if(a||M&&(b||S)||I&&I.showLabel){var T,A=a?e.name:o;(!r||o>=0)&&(T=t);var D=new rM({position:e.center.slice(),scale:[1/h[0],1/h[1]],z2:10,silent:!0});go(D.style,D.hoverStyle={},x,_,{labelFetcher:T,labelDataIndex:A,defaultText:e.name,useInsideStyle:!1},{textAlign:"center",textVerticalAlign:"middle"}),i.add(D);}if(r)r.setItemGraphicEl(o,i);else{var C=t.getRegionModel(e.name);n.eventData={componentType:"geo",componentIndex:t.componentIndex,geoIndex:t.componentIndex,name:e.name,region:C&&C.option||{}};}(i.__regions||(i.__regions=[])).push(e),fo(i,y,{hoverSilentOnTouch:!!t.get("selectedMode")}),l.add(i);}),this._updateController(t,e,i),vc(this,t,l,i,n),yc(t,l);},remove:function remove(){this._regionsGroup.removeAll(),this._backgroundGroup.removeAll(),this._controller.dispose(),this._mapName&&OC.removeGraphic(this._mapName,this.uid),this._mapName=null,this._controllerHost={};},_updateBackground:function _updateBackground(t){var e=t.map;this._mapName!==e&&d(OC.makeGraphic(e,this.uid),function(t){this._backgroundGroup.add(t);},this),this._mapName=e;},_updateController:function _updateController(t,e,i){function n(){var e={type:"geoRoam",componentType:l};return e[l+"Id"]=t.id,e;}var o=t.coordinateSystem,r=this._controller,s=this._controllerHost;s.zoomLimit=t.get("scaleLimit"),s.zoom=o.getZoom(),r.enable(t.get("roam")||!1);var l=t.mainType;r.off("pan").on("pan",function(t){this._mouseDownFlag=!1,fc(s,t.dx,t.dy),i.dispatchAction(a(n(),{dx:t.dx,dy:t.dy}));},this),r.off("zoom").on("zoom",function(t){if(this._mouseDownFlag=!1,pc(s,t.scale,t.originX,t.originY),i.dispatchAction(a(n(),{zoom:t.scale,originX:t.originX,originY:t.originY})),this._updateGroup){var e=this.group.scale;this._regionsGroup.traverse(function(t){"text"===t.type&&t.attr("scale",[1/e[0],1/e[1]]);});}},this),r.setPointerChecker(function(e,n,a){return o.getViewRectAfterRoam().contain(n,a)&&!gc(e,i,t);});}};var zC="__seriesMapHighDown",BC="__seriesMapCallKey";Zs({type:"map",render:function render(t,e,i,n){if(!n||"mapToggleSelect"!==n.type||n.from!==this.uid){var o=this.group;if(o.removeAll(),!t.getHostGeoModel()){if(n&&"geoRoam"===n.type&&"series"===n.componentType&&n.seriesId===t.id)(a=this._mapDraw)&&o.add(a.group);else if(t.needsDrawMap){var a=this._mapDraw||new xc(i,!0);o.add(a.group),a.draw(t,e,i,this,n),this._mapDraw=a;}else this._mapDraw&&this._mapDraw.remove(),this._mapDraw=null;t.get("showLegendSymbol")&&e.getComponent("legend")&&this._renderSymbols(t,e,i);}}},remove:function remove(){this._mapDraw&&this._mapDraw.remove(),this._mapDraw=null,this.group.removeAll();},dispose:function dispose(){this._mapDraw&&this._mapDraw.remove(),this._mapDraw=null;},_renderSymbols:function _renderSymbols(t,e,i){var n=t.originalData,o=this.group;n.each(n.mapDimension("value"),function(e,i){if(!isNaN(e)){var r=n.getItemLayout(i);if(r&&r.point){var s=r.point,l=r.offset,u=new sM({style:{fill:t.getData().getVisual("color")},shape:{cx:s[0]+9*l,cy:s[1],r:3},silent:!0,z2:8+(l?0:NM+1)});if(!l){var h=t.mainSeries.getData(),c=n.getName(i),d=h.indexOfName(c),f=n.getItemModel(i),p=f.getModel("label"),g=f.getModel("emphasis.label"),m=h.getItemGraphicEl(d),y=A(t.getFormattedLabel(d,"normal"),c),x=A(t.getFormattedLabel(d,"emphasis"),y),_=m[zC],w=Math.random();if(!_){_=m[zC]={};var b=v(_c,!0),S=v(_c,!1);m.on("mouseover",b).on("mouseout",S).on("emphasis",b).on("normal",S);}m[BC]=w,a(_,{recordVersion:w,circle:u,labelModel:p,hoverLabelModel:g,emphasisText:x,normalText:y}),wc(_,!1);}o.add(u);}}});}}),Es({type:"geoRoam",event:"geoRoam",update:"updateTransform"},function(t,e){var i=t.componentType||"series";e.eachComponent({mainType:i,query:t},function(e){var n=e.coordinateSystem;if("geo"===n.type){var o=bc(n,t,e.get("scaleLimit"));e.setCenter&&e.setCenter(o.center),e.setZoom&&e.setZoom(o.zoom),"series"===i&&d(e.seriesGroup,function(t){t.setCenter(o.center),t.setZoom(o.zoom);});}});});var VC=Q;h(Sc,Tw),Mc.prototype={constructor:Mc,type:"view",dimensions:["x","y"],setBoundingRect:function setBoundingRect(t,e,i,n){return this._rect=new de(t,e,i,n),this._rect;},getBoundingRect:function getBoundingRect(){return this._rect;},setViewRect:function setViewRect(t,e,i,n){this.transformTo(t,e,i,n),this._viewRect=new de(t,e,i,n);},transformTo:function transformTo(t,e,i,n){var o=this.getBoundingRect(),a=this._rawTransformable;a.transform=o.calculateTransform(new de(t,e,i,n)),a.decomposeTransform(),this._updateTransform();},setCenter:function setCenter(t){t&&(this._center=t,this._updateCenterAndZoom());},setZoom:function setZoom(t){t=t||1;var e=this.zoomLimit;e&&(null!=e.max&&(t=Math.min(e.max,t)),null!=e.min&&(t=Math.max(e.min,t))),this._zoom=t,this._updateCenterAndZoom();},getDefaultCenter:function getDefaultCenter(){var t=this.getBoundingRect();return[t.x+t.width/2,t.y+t.height/2];},getCenter:function getCenter(){return this._center||this.getDefaultCenter();},getZoom:function getZoom(){return this._zoom||1;},getRoamTransform:function getRoamTransform(){return this._roamTransformable.getLocalTransform();},_updateCenterAndZoom:function _updateCenterAndZoom(){var t=this._rawTransformable.getLocalTransform(),e=this._roamTransformable,i=this.getDefaultCenter(),n=this.getCenter(),o=this.getZoom();n=Q([],n,t),i=Q([],i,t),e.origin=n,e.position=[i[0]-n[0],i[1]-n[1]],e.scale=[o,o],this._updateTransform();},_updateTransform:function _updateTransform(){var t=this._roamTransformable,e=this._rawTransformable;e.parent=t,t.updateTransform(),e.updateTransform(),wt(this.transform||(this.transform=[]),e.transform||xt()),this._rawTransform=e.getLocalTransform(),this.invTransform=this.invTransform||[],Tt(this.invTransform,this.transform),this.decomposeTransform();},getViewRect:function getViewRect(){return this._viewRect;},getViewRectAfterRoam:function getViewRectAfterRoam(){var t=this.getBoundingRect().clone();return t.applyTransform(this.transform),t;},dataToPoint:function dataToPoint(t,e,i){var n=e?this._rawTransform:this.transform;return i=i||[],n?VC(i,t,n):G(i,t);},pointToData:function pointToData(t){var e=this.invTransform;return e?VC([],t,e):[t[0],t[1]];},convertToPixel:v(Ic,"dataToPoint"),convertFromPixel:v(Ic,"pointToData"),containPoint:function containPoint(t){return this.getViewRectAfterRoam().contain(t[0],t[1]);}},h(Mc,Tw),Tc.prototype={constructor:Tc,type:"geo",dimensions:["lng","lat"],containCoord:function containCoord(t){for(var e=this.regions,i=0;i<e.length;i++){if(e[i].contain(t))return!0;}return!1;},transformTo:function transformTo(t,e,i,n){var o=this.getBoundingRect(),a=this._invertLongitute;o=o.clone(),a&&(o.y=-o.y-o.height);var r=this._rawTransformable;if(r.transform=o.calculateTransform(new de(t,e,i,n)),r.decomposeTransform(),a){var s=r.scale;s[1]=-s[1];}r.updateTransform(),this._updateTransform();},getRegion:function getRegion(t){return this._regionsMap.get(t);},getRegionByCoord:function getRegionByCoord(t){for(var e=this.regions,i=0;i<e.length;i++){if(e[i].contain(t))return e[i];}},addGeoCoord:function addGeoCoord(t,e){this._nameCoordMap.set(t,e);},getGeoCoord:function getGeoCoord(t){return this._nameCoordMap.get(t);},getBoundingRect:function getBoundingRect(){return this._rect;},dataToPoint:function dataToPoint(t,e,i){if("string"==typeof t&&(t=this.getGeoCoord(t)),t)return Mc.prototype.dataToPoint.call(this,t,e,i);},convertToPixel:v(Ac,"dataToPoint"),convertFromPixel:v(Ac,"pointToData")},h(Tc,Mc);var GC={dimensions:Tc.prototype.dimensions,create:function create(t,e){var i=[];t.eachComponent("geo",function(t,n){var o=t.get("map"),a=t.get("aspectScale"),r=!0,s=DT.retrieveMap(o);s&&s[0]&&"svg"===s[0].type?(null==a&&(a=1),r=!1):null==a&&(a=.75);var l=new Tc(o+n,o,t.get("nameMap"),r);l.aspectScale=a,l.zoomLimit=t.get("scaleLimit"),i.push(l),Cc(l,t),t.coordinateSystem=l,l.model=t,l.resize=Dc,l.resize(t,e);}),t.eachSeries(function(t){if("geo"===t.get("coordinateSystem")){var e=t.get("geoIndex")||0;t.coordinateSystem=i[e];}});var n={};return t.eachSeriesByType("map",function(t){if(!t.getHostGeoModel()){var e=t.getMapType();n[e]=n[e]||[],n[e].push(t);}}),d(n,function(t,n){var a=new Tc(n,n,o(f(t,function(t){return t.get("nameMap");})));a.zoomLimit=T.apply(null,f(t,function(t){return t.get("scaleLimit");})),i.push(a),a.resize=Dc,a.aspectScale=t[0].get("aspectScale"),a.resize(t[0],e),d(t,function(t){t.coordinateSystem=a,Cc(a,t);});}),i;},getFilledRegions:function getFilledRegions(t,e,i){for(var n=(t||[]).slice(),o=R(),a=0;a<n.length;a++){o.set(n[a].name,n[a]);}return d(OC.load(e,i).regions,function(t){var e=t.name;!o.get(e)&&n.push({name:e});}),n;}};Rs("geo",GC);zs(function(t){var e={};t.eachSeriesByType("map",function(i){var n=i.getMapType();if(!i.getHostGeoModel()&&!e[n]){var o={};d(i.seriesGroup,function(e){var i=e.coordinateSystem,n=e.originalData;e.get("showLegendSymbol")&&t.getComponent("legend")&&n.each(n.mapDimension("value"),function(t,e){var a=n.getName(e),r=i.getRegion(a);if(r&&!isNaN(t)){var s=o[a]||0,l=i.dataToPoint(r.center);o[a]=s+1,n.setItemLayout(e,{point:l,offset:s});}});});var a=i.getData();a.each(function(t){var e=a.getName(t),i=a.getItemLayout(t)||{};i.showLabel=!o[e],a.setItemLayout(t,i);}),e[n]=!0;}});}),Bs(function(t){t.eachSeriesByType("map",function(t){var e=t.get("color"),i=t.getModel("itemStyle"),n=i.get("areaColor"),o=i.get("color")||e[t.seriesIndex%e.length];t.getData().setVisual({areaColor:n,color:o});});}),Os(VT.PROCESSOR.STATISTIC,function(t){var e={};t.eachSeriesByType("map",function(t){var i=t.getHostGeoModel(),n=i?"o"+i.id:"i"+t.getMapType();(e[n]=e[n]||[]).push(t);}),d(e,function(t,e){for(var i=Lc(f(t,function(t){return t.getData();}),t[0].get("mapValueCalculation")),n=0;n<t.length;n++){t[n].originalData=t[n].getData();}for(n=0;n<t.length;n++){t[n].seriesGroup=t,t[n].needsDrawMap=0===n&&!t[n].getHostGeoModel(),t[n].setData(i.cloneShallow()),t[n].mainSeries=t[0];}});}),Ns(function(t){var e=[];d(t.series,function(t){t&&"map"===t.type&&(e.push(t),t.map=t.map||t.mapType,r(t,t.mapLocation));});}),lC("map",[{type:"mapToggleSelect",event:"mapselectchanged",method:"toggleSelected"},{type:"mapSelect",event:"mapselected",method:"select"},{type:"mapUnSelect",event:"mapunselected",method:"unSelect"}]);var FC=d,WC="\0__link_datas",HC="\0__link_mainData",ZC=function ZC(t,e){this.name=t||"",this.depth=0,this.height=0,this.parentNode=null,this.dataIndex=-1,this.children=[],this.viewChildren=[],this.hostTree=e;};ZC.prototype={constructor:ZC,isRemoved:function isRemoved(){return this.dataIndex<0;},eachNode:function eachNode(t,e,i){"function"==typeof t&&(i=e,e=t,t=null),_(t=t||{})&&(t={order:t});var n,o=t.order||"preorder",a=this[t.attr||"children"];"preorder"===o&&(n=e.call(i,this));for(var r=0;!n&&r<a.length;r++){a[r].eachNode(t,e,i);}"postorder"===o&&e.call(i,this);},updateDepthAndHeight:function updateDepthAndHeight(t){var e=0;this.depth=t;for(var i=0;i<this.children.length;i++){var n=this.children[i];n.updateDepthAndHeight(t+1),n.height>e&&(e=n.height);}this.height=e+1;},getNodeById:function getNodeById(t){if(this.getId()===t)return this;for(var e=0,i=this.children,n=i.length;e<n;e++){var o=i[e].getNodeById(t);if(o)return o;}},contains:function contains(t){if(t===this)return!0;for(var e=0,i=this.children,n=i.length;e<n;e++){var o=i[e].contains(t);if(o)return o;}},getAncestors:function getAncestors(t){for(var e=[],i=t?this:this.parentNode;i;){e.push(i),i=i.parentNode;}return e.reverse(),e;},getValue:function getValue(t){var e=this.hostTree.data;return e.get(e.getDimension(t||"value"),this.dataIndex);},setLayout:function setLayout(t,e){this.dataIndex>=0&&this.hostTree.data.setItemLayout(this.dataIndex,t,e);},getLayout:function getLayout(){return this.hostTree.data.getItemLayout(this.dataIndex);},getModel:function getModel(t){if(!(this.dataIndex<0)){var e,i=this.hostTree,n=i.data.getItemModel(this.dataIndex),o=this.getLevelModel();return o||0!==this.children.length&&(0===this.children.length||!1!==this.isExpand)||(e=this.getLeavesModel()),n.getModel(t,(o||e||i.hostModel).getModel(t));}},getLevelModel:function getLevelModel(){return(this.hostTree.levelModels||[])[this.depth];},getLeavesModel:function getLeavesModel(){return this.hostTree.leavesModel;},setVisual:function setVisual(t,e){this.dataIndex>=0&&this.hostTree.data.setItemVisual(this.dataIndex,t,e);},getVisual:function getVisual(t,e){return this.hostTree.data.getItemVisual(this.dataIndex,t,e);},getRawIndex:function getRawIndex(){return this.hostTree.data.getRawIndex(this.dataIndex);},getId:function getId(){return this.hostTree.data.getId(this.dataIndex);},isAncestorOf:function isAncestorOf(t){for(var e=t.parentNode;e;){if(e===this)return!0;e=e.parentNode;}return!1;},isDescendantOf:function isDescendantOf(t){return t!==this&&t.isAncestorOf(this);}},Vc.prototype={constructor:Vc,type:"tree",eachNode:function eachNode(t,e,i){this.root.eachNode(t,e,i);},getNodeByDataIndex:function getNodeByDataIndex(t){var e=this.data.getRawIndex(t);return this._nodes[e];},getNodeByName:function getNodeByName(t){return this.root.getNodeByName(t);},update:function update(){for(var t=this.data,e=this._nodes,i=0,n=e.length;i<n;i++){e[i].dataIndex=-1;}for(var i=0,n=t.count();i<n;i++){e[t.getRawIndex(i)].dataIndex=i;}},clearLayouts:function clearLayouts(){this.data.clearItemLayouts();}},Vc.createTree=function(t,e,i){function n(t,e){var i=t.value;r=Math.max(r,y(i)?i.length:1),a.push(t);var s=new ZC(t.name,o);e?Gc(s,e):o.root=s,o._nodes.push(s);var l=t.children;if(l)for(var u=0;u<l.length;u++){n(l[u],s);}}var o=new Vc(e,i.levels,i.leaves),a=[],r=1;n(t),o.root.updateDepthAndHeight(0);var s=_A(a,{coordDimensions:["value"],dimensionsCount:r}),l=new vA(s,e);return l.initData(a),kc({mainData:l,struct:o,structAttr:"tree"}),o.update(),o;},YI.extend({type:"series.tree",layoutInfo:null,layoutMode:"box",getInitialData:function getInitialData(t){var e={name:t.name,children:t.data},i=t.leaves||{},n={};n.leaves=i;var o=Vc.createTree(e,this,n),a=0;o.eachNode("preorder",function(t){t.depth>a&&(a=t.depth);});var r=t.expandAndCollapse&&t.initialTreeDepth>=0?t.initialTreeDepth:a;return o.root.eachNode("preorder",function(t){var e=t.hostTree.data.getRawDataItem(t.dataIndex);t.isExpand=e&&null!=e.collapsed?!e.collapsed:t.depth<=r;}),o.data;},getOrient:function getOrient(){var t=this.get("orient");return"horizontal"===t?t="LR":"vertical"===t&&(t="TB"),t;},setZoom:function setZoom(t){this.option.zoom=t;},setCenter:function setCenter(t){this.option.center=t;},formatTooltip:function formatTooltip(t){for(var e=this.getData().tree,i=e.root.children[0],n=e.getNodeByDataIndex(t),o=n.getValue(),a=n.name;n&&n!==i;){a=n.parentNode.name+"."+a,n=n.parentNode;}return ia(a+(isNaN(o)||null==o?"":" : "+o));},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",left:"12%",top:"12%",right:"12%",bottom:"12%",layout:"orthogonal",roam:!1,nodeScaleRatio:.4,center:null,zoom:1,orient:"LR",symbol:"emptyCircle",symbolSize:7,expandAndCollapse:!0,initialTreeDepth:2,lineStyle:{color:"#ccc",width:1.5,curveness:.5},itemStyle:{color:"lightsteelblue",borderColor:"#c23531",borderWidth:1.5},label:{show:!0,color:"#555"},leaves:{label:{show:!0}},animationEasing:"linear",animationDuration:700,animationDurationUpdate:1e3}}),Zs({type:"tree",init:function init(t,e){this._oldTree,this._mainGroup=new tb(),this._controller=new oc(e.getZr()),this._controllerHost={target:this.group},this.group.add(this._mainGroup);},render:function render(t,e,i,n){var o=t.getData(),a=t.layoutInfo,r=this._mainGroup,s=t.get("layout");"radial"===s?r.attr("position",[a.x+a.width/2,a.y+a.height/2]):r.attr("position",[a.x,a.y]),this._updateViewCoordSys(t),this._updateController(t,e,i);var l=this._data,u={expandAndCollapse:t.get("expandAndCollapse"),layout:s,orient:t.getOrient(),curvature:t.get("lineStyle.curveness"),symbolRotate:t.get("symbolRotate"),symbolOffset:t.get("symbolOffset"),hoverAnimation:t.get("hoverAnimation"),useNameLabel:!0,fadeIn:!0};o.diff(l).add(function(e){td(o,e)&&id(o,e,null,r,t,u);}).update(function(e,i){var n=l.getItemGraphicEl(i);td(o,e)?id(o,e,n,r,t,u):n&&nd(l,i,n,r,t,u);}).remove(function(e){var i=l.getItemGraphicEl(e);i&&nd(l,e,i,r,t,u);}).execute(),this._nodeScaleRatio=t.get("nodeScaleRatio"),this._updateNodeAndLinkScale(t),!0===u.expandAndCollapse&&o.eachItemGraphicEl(function(e,n){e.off("click").on("click",function(){i.dispatchAction({type:"treeExpandAndCollapse",seriesId:t.id,dataIndex:n});});}),this._data=o;},_updateViewCoordSys:function _updateViewCoordSys(t){var e=t.getData(),i=[];e.each(function(t){var n=e.getItemLayout(t);!n||isNaN(n.x)||isNaN(n.y)||i.push([+n.x,+n.y]);});var n=[],o=[];fn(i,n,o),o[0]-n[0]==0&&(o[0]+=1,n[0]-=1),o[1]-n[1]==0&&(o[1]+=1,n[1]-=1);var a=t.coordinateSystem=new Mc();a.zoomLimit=t.get("scaleLimit"),a.setBoundingRect(n[0],n[1],o[0]-n[0],o[1]-n[1]),a.setCenter(t.get("center")),a.setZoom(t.get("zoom")),this.group.attr({position:a.position,scale:a.scale}),this._viewCoordSys=a;},_updateController:function _updateController(t,e,i){var n=this._controller,o=this._controllerHost,a=this.group;n.setPointerChecker(function(e,n,o){var r=a.getBoundingRect();return r.applyTransform(a.transform),r.contain(n,o)&&!gc(e,i,t);}),n.enable(t.get("roam")),o.zoomLimit=t.get("scaleLimit"),o.zoom=t.coordinateSystem.getZoom(),n.off("pan").off("zoom").on("pan",function(e){fc(o,e.dx,e.dy),i.dispatchAction({seriesId:t.id,type:"treeRoam",dx:e.dx,dy:e.dy});},this).on("zoom",function(e){pc(o,e.scale,e.originX,e.originY),i.dispatchAction({seriesId:t.id,type:"treeRoam",zoom:e.scale,originX:e.originX,originY:e.originY}),this._updateNodeAndLinkScale(t);},this);},_updateNodeAndLinkScale:function _updateNodeAndLinkScale(t){var e=t.getData(),i=this._getNodeGlobalScale(t),n=[i,i];e.eachItemGraphicEl(function(t,e){t.attr("scale",n);});},_getNodeGlobalScale:function _getNodeGlobalScale(t){var e=t.coordinateSystem;if("view"!==e.type)return 1;var i=this._nodeScaleRatio,n=e.scale,o=n&&n[0]||1;return((e.getZoom()-1)*i+1)/o;},dispose:function dispose(){this._controller&&this._controller.dispose(),this._controllerHost={};},remove:function remove(){this._mainGroup.removeAll(),this._data=null;}}),Es({type:"treeExpandAndCollapse",event:"treeExpandAndCollapse",update:"update"},function(t,e){e.eachComponent({mainType:"series",subType:"tree",query:t},function(e){var i=t.dataIndex,n=e.getData().tree.getNodeByDataIndex(i);n.isExpand=!n.isExpand;});}),Es({type:"treeRoam",event:"treeRoam",update:"none"},function(t,e){e.eachComponent({mainType:"series",subType:"tree",query:t},function(e){var i=bc(e.coordinateSystem,t);e.setCenter&&e.setCenter(i.center),e.setZoom&&e.setZoom(i.zoom);});});Bs(TD("tree","circle")),zs(function(t,e){t.eachSeriesByType("tree",function(t){sd(t,e);});}),YI.extend({type:"series.treemap",layoutMode:"box",dependencies:["grid","polar"],_viewRoot:null,defaultOption:{progressive:0,hoverLayerThreshold:1/0,left:"center",top:"middle",right:null,bottom:null,width:"80%",height:"80%",sort:!0,clipWindow:"origin",squareRatio:.5*(1+Math.sqrt(5)),leafDepth:null,drillDownIcon:"▶",zoomToNodeRatio:.1024,roam:!0,nodeClick:"zoomToNode",animation:!0,animationDurationUpdate:900,animationEasing:"quinticInOut",breadcrumb:{show:!0,height:22,left:"center",top:"bottom",emptyItemWidth:25,itemStyle:{color:"rgba(0,0,0,0.7)",borderColor:"rgba(255,255,255,0.7)",borderWidth:1,shadowColor:"rgba(150,150,150,1)",shadowBlur:3,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#fff"}},emphasis:{textStyle:{}}},label:{show:!0,distance:0,padding:5,position:"inside",color:"#fff",ellipsis:!0},upperLabel:{show:!1,position:[0,"50%"],height:20,color:"#fff",ellipsis:!0,verticalAlign:"middle"},itemStyle:{color:null,colorAlpha:null,colorSaturation:null,borderWidth:0,gapWidth:0,borderColor:"#fff",borderColorSaturation:null},emphasis:{upperLabel:{show:!0,position:[0,"50%"],color:"#fff",ellipsis:!0,verticalAlign:"middle"}},visualDimension:0,visualMin:null,visualMax:null,color:[],colorAlpha:null,colorSaturation:null,colorMappingBy:"index",visibleMin:10,childrenVisibleMin:null,levels:[]},getInitialData:function getInitialData(t,e){var i={name:t.name,children:t.data};dd(i);var n=t.levels||[];n=t.levels=fd(n,e);var o={};return o.levels=n,Vc.createTree(i,this,o).data;},optionUpdated:function optionUpdated(){this.resetViewRoot();},formatTooltip:function formatTooltip(t){var e=this.getData(),i=this.getRawValue(t),n=ta(y(i)?i[0]:i);return ia(e.getName(t)+": "+n);},getDataParams:function getDataParams(t){var e=YI.prototype.getDataParams.apply(this,arguments),i=this.getData().tree.getNodeByDataIndex(t);return e.treePathInfo=cd(i,this),e;},setLayoutInfo:function setLayoutInfo(t){this.layoutInfo=this.layoutInfo||{},a(this.layoutInfo,t);},mapIdToIndex:function mapIdToIndex(t){var e=this._idIndexMap;e||(e=this._idIndexMap=R(),this._idIndexMapCount=0);var i=e.get(t);return null==i&&e.set(t,i=this._idIndexMapCount++),i;},getViewRoot:function getViewRoot(){return this._viewRoot;},resetViewRoot:function resetViewRoot(t){t?this._viewRoot=t:t=this._viewRoot;var e=this.getRawData().tree.root;t&&(t===e||e.contains(t))||(this._viewRoot=e);}});var UC=5;pd.prototype={constructor:pd,render:function render(t,e,i,n){var o=t.getModel("breadcrumb"),a=this.group;if(a.removeAll(),o.get("show")&&i){var r=o.getModel("itemStyle"),s=r.getModel("textStyle"),l={pos:{left:o.get("left"),right:o.get("right"),top:o.get("top"),bottom:o.get("bottom")},box:{width:e.getWidth(),height:e.getHeight()},emptyItemWidth:o.get("emptyItemWidth"),totalWidth:0,renderList:[]};this._prepare(i,l,s),this._renderContent(t,l,r,s,n),da(a,l.pos,l.box);}},_prepare:function _prepare(t,e,i){for(var n=t;n;n=n.parentNode){var o=n.getModel().get("name"),a=i.getTextRect(o),r=Math.max(a.width+16,e.emptyItemWidth);e.totalWidth+=r+8,e.renderList.push({node:n,text:o,width:r});}},_renderContent:function _renderContent(t,e,i,n,o){for(var a=0,s=e.emptyItemWidth,l=t.get("breadcrumb.height"),u=ha(e.pos,e.box),h=e.totalWidth,c=e.renderList,d=c.length-1;d>=0;d--){var f=c[d],p=f.node,g=f.width,m=f.text;h>u.width&&(h-=g-s,g=s,m=null);var y=new pM({shape:{points:gd(a,0,g,l,d===c.length-1,0===d)},style:r(i.getItemStyle(),{lineJoin:"bevel",text:m,textFill:n.getTextColor(),textFont:n.getFont()}),z:10,onclick:v(o,p)});this.group.add(y),md(y,t,p),a+=g+8;}},remove:function remove(){this.group.removeAll();}};var XC=m,jC=tb,YC=yM,qC=d,KC=["label"],$C=["emphasis","label"],JC=["upperLabel"],QC=["emphasis","upperLabel"],tL=10,eL=1,iL=2,nL=Qb([["fill","color"],["stroke","strokeColor"],["lineWidth","strokeWidth"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),oL=function oL(t){var e=nL(t);return e.stroke=e.fill=e.lineWidth=null,e;};Zs({type:"treemap",init:function init(t,e){this._containerGroup,this._storage={nodeGroup:[],background:[],content:[]},this._oldTree,this._breadcrumb,this._controller,this._state="ready";},render:function render(t,e,i,n){if(!(l(e.findComponents({mainType:"series",subType:"treemap",query:n}),t)<0)){this.seriesModel=t,this.api=i,this.ecModel=e;var o=ld(n,["treemapZoomToNode","treemapRootToNode"],t),a=n&&n.type,r=t.layoutInfo,s=!this._oldTree,u=this._storage,h="treemapRootToNode"===a&&o&&u?{rootNodeGroup:u.nodeGroup[o.node.getRawIndex()],direction:n.direction}:null,c=this._giveContainerGroup(r),d=this._doRender(c,t,h);s||a&&"treemapZoomToNode"!==a&&"treemapRootToNode"!==a?d.renderFinally():this._doAnimation(c,d,t,h),this._resetController(i),this._renderBreadcrumb(t,i,o);}},_giveContainerGroup:function _giveContainerGroup(t){var e=this._containerGroup;return e||(e=this._containerGroup=new jC(),this._initEvents(e),this.group.add(e)),e.attr("position",[t.x,t.y]),e;},_doRender:function _doRender(t,e,i){function n(t,e,i,o,a){function r(t){return t.getId();}function s(r,s){var l=null!=r?t[r]:null,u=null!=s?e[s]:null,c=h(l,u,i,a);c&&n(l&&l.viewChildren||[],u&&u.viewChildren||[],c,o,a+1);}o?(e=t,qC(t,function(t,e){!t.isRemoved()&&s(e,e);})):new Xs(e,t,r,r).add(s).update(s).remove(v(s,null)).execute();}var o=e.getData().tree,a=this._oldTree,r={nodeGroup:[],background:[],content:[]},s={nodeGroup:[],background:[],content:[]},l=this._storage,u=[],h=v(yd,e,s,l,i,r,u);n(o.root?[o.root]:[],a&&a.root?[a.root]:[],t,o===a||!a,0);var c=function(t){var e={nodeGroup:[],background:[],content:[]};return t&&qC(t,function(t,i){var n=e[i];qC(t,function(t){t&&(n.push(t),t.__tmWillDelete=1);});}),e;}(l);return this._oldTree=o,this._storage=s,{lastsForAnimation:r,willDeleteEls:c,renderFinally:function renderFinally(){qC(c,function(t){qC(t,function(t){t.parent&&t.parent.remove(t);});}),qC(u,function(t){t.invisible=!0,t.dirty();});}};},_doAnimation:function _doAnimation(t,e,i,n){if(i.get("animation")){var o=i.get("animationDurationUpdate"),r=i.get("animationEasing"),s=vd();qC(e.willDeleteEls,function(t,e){qC(t,function(t,i){if(!t.invisible){var a,l=t.parent;if(n&&"drillDown"===n.direction)a=l===n.rootNodeGroup?{shape:{x:0,y:0,width:l.__tmNodeWidth,height:l.__tmNodeHeight},style:{opacity:0}}:{style:{opacity:0}};else{var u=0,h=0;l.__tmWillDelete||(u=l.__tmNodeWidth/2,h=l.__tmNodeHeight/2),a="nodeGroup"===e?{position:[u,h],style:{opacity:0}}:{shape:{x:u,y:h,width:0,height:0},style:{opacity:0}};}a&&s.add(t,a,o,r);}});}),qC(this._storage,function(t,i){qC(t,function(t,n){var l=e.lastsForAnimation[i][n],u={};l&&("nodeGroup"===i?l.old&&(u.position=t.position.slice(),t.attr("position",l.old)):(l.old&&(u.shape=a({},t.shape),t.setShape(l.old)),l.fadein?(t.setStyle("opacity",0),u.style={opacity:1}):1!==t.style.opacity&&(u.style={opacity:1})),s.add(t,u,o,r));});},this),this._state="animating",s.done(XC(function(){this._state="ready",e.renderFinally();},this)).start();}},_resetController:function _resetController(t){var e=this._controller;e||((e=this._controller=new oc(t.getZr())).enable(this.seriesModel.get("roam")),e.on("pan",XC(this._onPan,this)),e.on("zoom",XC(this._onZoom,this)));var i=new de(0,0,t.getWidth(),t.getHeight());e.setPointerChecker(function(t,e,n){return i.contain(e,n);});},_clearController:function _clearController(){var t=this._controller;t&&(t.dispose(),t=null);},_onPan:function _onPan(t){if("animating"!==this._state&&(Math.abs(t.dx)>3||Math.abs(t.dy)>3)){var e=this.seriesModel.getData().tree.root;if(!e)return;var i=e.getLayout();if(!i)return;this.api.dispatchAction({type:"treemapMove",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:i.x+t.dx,y:i.y+t.dy,width:i.width,height:i.height}});}},_onZoom:function _onZoom(t){var e=t.originX,i=t.originY;if("animating"!==this._state){var n=this.seriesModel.getData().tree.root;if(!n)return;var o=n.getLayout();if(!o)return;var a=new de(o.x,o.y,o.width,o.height),r=this.seriesModel.layoutInfo;e-=r.x,i-=r.y;var s=xt();St(s,s,[-e,-i]),It(s,s,[t.scale,t.scale]),St(s,s,[e,i]),a.applyTransform(s),this.api.dispatchAction({type:"treemapRender",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:a.x,y:a.y,width:a.width,height:a.height}});}},_initEvents:function _initEvents(t){t.on("click",function(t){if("ready"===this._state){var e=this.seriesModel.get("nodeClick",!0);if(e){var i=this.findTarget(t.offsetX,t.offsetY);if(i){var n=i.node;if(n.getLayout().isLeafRoot)this._rootToNode(i);else if("zoomToNode"===e)this._zoomToNode(i);else if("link"===e){var o=n.hostTree.data.getItemModel(n.dataIndex),a=o.get("link",!0),r=o.get("target",!0)||"blank";a&&window.open(a,r);}}}}},this);},_renderBreadcrumb:function _renderBreadcrumb(t,e,i){i||(i=null!=t.get("leafDepth",!0)?{node:t.getViewRoot()}:this.findTarget(e.getWidth()/2,e.getHeight()/2))||(i={node:t.getData().tree.root}),(this._breadcrumb||(this._breadcrumb=new pd(this.group))).render(t,e,i.node,XC(function(e){"animating"!==this._state&&(hd(t.getViewRoot(),e)?this._rootToNode({node:e}):this._zoomToNode({node:e}));},this));},remove:function remove(){this._clearController(),this._containerGroup&&this._containerGroup.removeAll(),this._storage={nodeGroup:[],background:[],content:[]},this._state="ready",this._breadcrumb&&this._breadcrumb.remove();},dispose:function dispose(){this._clearController();},_zoomToNode:function _zoomToNode(t){this.api.dispatchAction({type:"treemapZoomToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:t.node});},_rootToNode:function _rootToNode(t){this.api.dispatchAction({type:"treemapRootToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:t.node});},findTarget:function findTarget(t,e){var i;return this.seriesModel.getViewRoot().eachNode({attr:"viewChildren",order:"preorder"},function(n){var o=this._storage.background[n.getRawIndex()];if(o){var a=o.transformCoordToLocal(t,e),r=o.shape;if(!(r.x<=a[0]&&a[0]<=r.x+r.width&&r.y<=a[1]&&a[1]<=r.y+r.height))return!1;i={node:n,offsetX:a[0],offsetY:a[1]};}},this),i;}});for(var aL=["treemapZoomToNode","treemapRender","treemapMove"],rL=0;rL<aL.length;rL++){Es({type:aL[rL],update:"updateView"},function(){});}Es({type:"treemapRootToNode",update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"treemap",query:t},function(e,i){var n=ld(t,["treemapZoomToNode","treemapRootToNode"],e);if(n){var o=e.getViewRoot();o&&(t.direction=hd(o,n.node)?"rollUp":"drillDown"),e.resetViewRoot(n.node);}});});var sL=d,lL=w,uL=-1,hL=function hL(t){var e=t.mappingMethod,n=t.type,o=this.option=i(t);this.type=n,this.mappingMethod=e,this._normalizeData=dL[e];var a=cL[n];this.applyVisual=a.applyVisual,this.getColorMapper=a.getColorMapper,this._doMap=a._doMap[e],"piecewise"===e?(bd(o),_d(o)):"category"===e?o.categories?wd(o):bd(o,!0):(k("linear"!==e||o.dataExtent),bd(o));};hL.prototype={constructor:hL,mapValueToVisual:function mapValueToVisual(t){var e=this._normalizeData(t);return this._doMap(e,t);},getNormalizer:function getNormalizer(){return m(this._normalizeData,this);}};var cL=hL.visualHandlers={color:{applyVisual:Id("color"),getColorMapper:function getColorMapper(){var t=this.option;return m("category"===t.mappingMethod?function(t,e){return!e&&(t=this._normalizeData(t)),Td.call(this,t);}:function(e,i,n){var o=!!n;return!i&&(e=this._normalizeData(e)),n=Ut(e,t.parsedVisual,n),o?n:qt(n,"rgba");},this);},_doMap:{linear:function linear(t){return qt(Ut(t,this.option.parsedVisual),"rgba");},category:Td,piecewise:function piecewise(t,e){var i=Cd.call(this,e);return null==i&&(i=qt(Ut(t,this.option.parsedVisual),"rgba")),i;},fixed:Ad}},colorHue:Sd(function(t,e){return jt(t,e);}),colorSaturation:Sd(function(t,e){return jt(t,null,e);}),colorLightness:Sd(function(t,e){return jt(t,null,null,e);}),colorAlpha:Sd(function(t,e){return Yt(t,e);}),opacity:{applyVisual:Id("opacity"),_doMap:Dd([0,1])},liftZ:{applyVisual:Id("liftZ"),_doMap:{linear:Ad,category:Ad,piecewise:Ad,fixed:Ad}},symbol:{applyVisual:function applyVisual(t,e,i){var n=this.mapValueToVisual(t);if(_(n))i("symbol",n);else if(lL(n))for(var o in n){n.hasOwnProperty(o)&&i(o,n[o]);}},_doMap:{linear:Md,category:Td,piecewise:function piecewise(t,e){var i=Cd.call(this,e);return null==i&&(i=Md.call(this,t)),i;},fixed:Ad}},symbolSize:{applyVisual:Id("symbolSize"),_doMap:Dd([0,1])}},dL={linear:function linear(t){return Bo(t,this.option.dataExtent,[0,1],!0);},piecewise:function piecewise(t){var e=this.option.pieceList,i=hL.findPieceIndex(t,e,!0);if(null!=i)return Bo(i,[0,e.length-1],[0,1],!0);},category:function category(t){var e=this.option.categories?this.option.categoryMap[t]:t;return null==e?uL:e;},fixed:B};hL.listVisualTypes=function(){var t=[];return d(cL,function(e,i){t.push(i);}),t;},hL.addVisualHandler=function(t,e){cL[t]=e;},hL.isValidType=function(t){return cL.hasOwnProperty(t);},hL.eachVisual=function(t,e,i){w(t)?d(t,e,i):e.call(i,t);},hL.mapVisual=function(t,e,i){var n,o=y(t)?[]:w(t)?{}:(n=!0,null);return hL.eachVisual(t,function(t,a){var r=e.call(i,t,a);n?o=r:o[a]=r;}),o;},hL.retrieveVisuals=function(t){var e,i={};return t&&sL(cL,function(n,o){t.hasOwnProperty(o)&&(i[o]=t[o],e=!0);}),e?i:null;},hL.prepareVisualTypes=function(t){if(lL(t)){var e=[];sL(t,function(t,i){e.push(i);}),t=e;}else{if(!y(t))return[];t=t.slice();}return t.sort(function(t,e){return"color"===e&&"color"!==t&&0===t.indexOf("color")?1:-1;}),t;},hL.dependsOn=function(t,e){return"color"===e?!(!t||0!==t.indexOf(e)):t===e;},hL.findPieceIndex=function(t,e,i){function n(e,i){var n=Math.abs(e-t);n<a&&(a=n,o=i);}for(var o,a=1/0,r=0,s=e.length;r<s;r++){var l=e[r].value;if(null!=l){if(l===t||"string"==typeof l&&l===t+"")return r;i&&n(l,r);}}for(var r=0,s=e.length;r<s;r++){var u=e[r],h=u.interval,c=u.close;if(h){if(h[0]===-1/0){if(kd(c[1],t,h[1]))return r;}else if(h[1]===1/0){if(kd(c[0],h[0],t))return r;}else if(kd(c[0],h[0],t)&&kd(c[1],t,h[1]))return r;i&&n(h[0],r),i&&n(h[1],r);}}if(i)return t===1/0?e.length-1:t===-1/0?0:o;};var fL=y,pL="itemStyle",gL={seriesType:"treemap",reset:function reset(t,e,i,n){var o=t.getData().tree,a=o.root,r=t.getModel(pL);a.isRemoved()||Pd(a,{},f(o.levelModels,function(t){return t?t.get(pL):null;}),r,t.getViewRoot().getAncestors(),t);}},mL=Math.max,vL=Math.min,yL=T,xL=d,_L=["itemStyle","borderWidth"],wL=["itemStyle","gapWidth"],bL=["upperLabel","show"],SL=["upperLabel","height"],ML={seriesType:"treemap",reset:function reset(t,e,i,n){var o=i.getWidth(),r=i.getHeight(),s=t.option,l=ca(t.getBoxLayoutParams(),{width:i.getWidth(),height:i.getHeight()}),u=s.size||[],h=Vo(yL(l.width,u[0]),o),c=Vo(yL(l.height,u[1]),r),d=n&&n.type,f=ld(n,["treemapZoomToNode","treemapRootToNode"],t),p="treemapRender"===d||"treemapMove"===d?n.rootRect:null,g=t.getViewRoot(),m=ud(g);if("treemapMove"!==d){var v="treemapZoomToNode"===d?jd(t,f,g,h,c):p?[p.width,p.height]:[h,c],y=s.sort;y&&"asc"!==y&&"desc"!==y&&(y="desc");var x={squareRatio:s.squareRatio,sort:y,leafDepth:s.leafDepth};g.hostTree.clearLayouts();_={x:0,y:0,width:v[0],height:v[1],area:v[0]*v[1]};g.setLayout(_),Gd(g,x,!1,0);var _=g.getLayout();xL(m,function(t,e){var i=(m[e+1]||g).getValue();t.setLayout(a({dataExtent:[i,i],borderWidth:0,upperHeight:0},_));});}var w=t.getData().tree.root;w.setLayout(Yd(l,p,f),!0),t.setLayoutInfo(l),qd(w,new de(-l.x,-l.y,o,r),m,g,0);}};Bs(gL),zs(ML);var IL=function IL(t){this._directed=t||!1,this.nodes=[],this.edges=[],this._nodesMap={},this._edgesMap={},this.data,this.edgeData;},TL=IL.prototype;TL.type="graph",TL.isDirected=function(){return this._directed;},TL.addNode=function(t,e){t=t||""+e;var i=this._nodesMap;if(!i[$d(t)]){var n=new Jd(t,e);return n.hostGraph=this,this.nodes.push(n),i[$d(t)]=n,n;}},TL.getNodeByIndex=function(t){var e=this.data.getRawIndex(t);return this.nodes[e];},TL.getNodeById=function(t){return this._nodesMap[$d(t)];},TL.addEdge=function(t,e,i){var n=this._nodesMap,o=this._edgesMap;if("number"==typeof t&&(t=this.nodes[t]),"number"==typeof e&&(e=this.nodes[e]),Jd.isInstance(t)||(t=n[$d(t)]),Jd.isInstance(e)||(e=n[$d(e)]),t&&e){var a=t.id+"-"+e.id;if(!o[a]){var r=new Qd(t,e,i);return r.hostGraph=this,this._directed&&(t.outEdges.push(r),e.inEdges.push(r)),t.edges.push(r),t!==e&&e.edges.push(r),this.edges.push(r),o[a]=r,r;}}},TL.getEdgeByIndex=function(t){var e=this.edgeData.getRawIndex(t);return this.edges[e];},TL.getEdge=function(t,e){Jd.isInstance(t)&&(t=t.id),Jd.isInstance(e)&&(e=e.id);var i=this._edgesMap;return this._directed?i[t+"-"+e]:i[t+"-"+e]||i[e+"-"+t];},TL.eachNode=function(t,e){for(var i=this.nodes,n=i.length,o=0;o<n;o++){i[o].dataIndex>=0&&t.call(e,i[o],o);}},TL.eachEdge=function(t,e){for(var i=this.edges,n=i.length,o=0;o<n;o++){i[o].dataIndex>=0&&i[o].node1.dataIndex>=0&&i[o].node2.dataIndex>=0&&t.call(e,i[o],o);}},TL.breadthFirstTraverse=function(t,e,i,n){if(Jd.isInstance(e)||(e=this._nodesMap[$d(e)]),e){for(var o="out"===i?"outEdges":"in"===i?"inEdges":"edges",a=0;a<this.nodes.length;a++){this.nodes[a].__visited=!1;}if(!t.call(n,e,null))for(var r=[e];r.length;){for(var s=r.shift(),l=s[o],a=0;a<l.length;a++){var u=l[a],h=u.node1===s?u.node2:u.node1;if(!h.__visited){if(t.call(n,h,s))return;r.push(h),h.__visited=!0;}}}}},TL.update=function(){for(var t=this.data,e=this.edgeData,i=this.nodes,n=this.edges,o=0,a=i.length;o<a;o++){i[o].dataIndex=-1;}for(var o=0,a=t.count();o<a;o++){i[t.getRawIndex(o)].dataIndex=o;}e.filterSelf(function(t){var i=n[e.getRawIndex(t)];return i.node1.dataIndex>=0&&i.node2.dataIndex>=0;});for(var o=0,a=n.length;o<a;o++){n[o].dataIndex=-1;}for(var o=0,a=e.count();o<a;o++){n[e.getRawIndex(o)].dataIndex=o;}},TL.clone=function(){for(var t=new IL(this._directed),e=this.nodes,i=this.edges,n=0;n<e.length;n++){t.addNode(e[n].id,e[n].dataIndex);}for(n=0;n<i.length;n++){var o=i[n];t.addEdge(o.node1.id,o.node2.id,o.dataIndex);}return t;},Jd.prototype={constructor:Jd,degree:function degree(){return this.edges.length;},inDegree:function inDegree(){return this.inEdges.length;},outDegree:function outDegree(){return this.outEdges.length;},getModel:function getModel(t){if(!(this.dataIndex<0))return this.hostGraph.data.getItemModel(this.dataIndex).getModel(t);}},Qd.prototype.getModel=function(t){if(!(this.dataIndex<0))return this.hostGraph.edgeData.getItemModel(this.dataIndex).getModel(t);};var AL=function AL(t,e){return{getValue:function getValue(i){var n=this[t][e];return n.get(n.getDimension(i||"value"),this.dataIndex);},setVisual:function setVisual(i,n){this.dataIndex>=0&&this[t][e].setItemVisual(this.dataIndex,i,n);},getVisual:function getVisual(i,n){return this[t][e].getItemVisual(this.dataIndex,i,n);},setLayout:function setLayout(i,n){this.dataIndex>=0&&this[t][e].setItemLayout(this.dataIndex,i,n);},getLayout:function getLayout(){return this[t][e].getItemLayout(this.dataIndex);},getGraphicEl:function getGraphicEl(){return this[t][e].getItemGraphicEl(this.dataIndex);},getRawIndex:function getRawIndex(){return this[t][e].getRawIndex(this.dataIndex);}};};h(Jd,AL("hostGraph","data")),h(Qd,AL("hostGraph","edgeData")),IL.Node=Jd,IL.Edge=Qd,Yi(Jd),Yi(Qd);var DL=function DL(t,e,i,n,o){for(var a=new IL(n),r=0;r<t.length;r++){a.addNode(T(t[r].id,t[r].name,r),r);}for(var s=[],u=[],h=0,r=0;r<e.length;r++){var c=e[r],d=c.source,f=c.target;a.addEdge(d,f,h)&&(u.push(c),s.push(T(c.id,d+" > "+f)),h++);}var p,g=i.get("coordinateSystem");if("cartesian2d"===g||"polar"===g)p=ml(t,i);else{var m=Fa.get(g),v=m&&"view"!==m.type?m.dimensions||[]:[];l(v,"value")<0&&v.concat(["value"]);var y=_A(t,{coordDimensions:v});(p=new vA(y,i)).initData(t);}var x=new vA(["value"],i);return x.initData(u,s),o&&o(p,x),kc({mainData:p,struct:a,structAttr:"graph",datas:{node:p,edge:x},datasAttr:{node:"data",edge:"edgeData"}}),a.update(),a;},CL=Hs({type:"series.graph",init:function init(t){CL.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData;},this.fillDataTextStyle(t.edges||t.links),this._updateCategoriesData();},mergeOption:function mergeOption(t){CL.superApply(this,"mergeOption",arguments),this.fillDataTextStyle(t.edges||t.links),this._updateCategoriesData();},mergeDefaultAndTheme:function mergeDefaultAndTheme(t){CL.superApply(this,"mergeDefaultAndTheme",arguments),Ci(t,["edgeLabel"],["show"]);},getInitialData:function getInitialData(t,e){var i=t.edges||t.links||[],n=t.data||t.nodes||[],o=this;if(n&&i)return DL(n,i,this,!0,function(t,i){function n(t){return(t=this.parsePath(t))&&"label"===t[0]?r:t&&"emphasis"===t[0]&&"label"===t[1]?l:this.parentModel;}t.wrapMethod("getItemModel",function(t){var e=o._categoriesModels[t.getShallow("category")];return e&&(e.parentModel=t.parentModel,t.parentModel=e),t;});var a=o.getModel("edgeLabel"),r=new No({label:a.option},a.parentModel,e),s=o.getModel("emphasis.edgeLabel"),l=new No({emphasis:{label:s.option}},s.parentModel,e);i.wrapMethod("getItemModel",function(t){return t.customizeGetParent(n),t;});}).data;},getGraph:function getGraph(){return this.getData().graph;},getEdgeData:function getEdgeData(){return this.getGraph().edgeData;},getCategoriesData:function getCategoriesData(){return this._categoriesData;},formatTooltip:function formatTooltip(t,e,i){if("edge"===i){var n=this.getData(),o=this.getDataParams(t,i),a=n.graph.getEdgeByIndex(t),r=n.getName(a.node1.dataIndex),s=n.getName(a.node2.dataIndex),l=[];return null!=r&&l.push(r),null!=s&&l.push(s),l=ia(l.join(" > ")),o.value&&(l+=" : "+ia(o.value)),l;}return CL.superApply(this,"formatTooltip",arguments);},_updateCategoriesData:function _updateCategoriesData(){var t=f(this.option.categories||[],function(t){return null!=t.value?t:a({value:0},t);}),e=new vA(["value"],this);e.initData(t),this._categoriesData=e,this._categoriesModels=e.mapArray(function(t){return e.getItemModel(t,!0);});},setZoom:function setZoom(t){this.option.zoom=t;},setCenter:function setCenter(t){this.option.center=t;},isAnimationEnabled:function isAnimationEnabled(){return CL.superCall(this,"isAnimationEnabled")&&!("force"===this.get("layout")&&this.get("force.layoutAnimation"));},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",legendHoverLink:!0,hoverAnimation:!0,layout:null,focusNodeAdjacency:!1,circular:{rotateLabel:!1},force:{initLayout:null,repulsion:[0,50],gravity:.1,edgeLength:30,layoutAnimation:!0},left:"center",top:"center",symbol:"circle",symbolSize:10,edgeSymbol:["none","none"],edgeSymbolSize:10,edgeLabel:{position:"middle"},draggable:!1,roam:!1,center:null,zoom:1,nodeScaleRatio:.6,label:{show:!1,formatter:"{b}"},itemStyle:{},lineStyle:{color:"#aaa",width:1,curveness:0,opacity:.5},emphasis:{label:{show:!0}}}}),LL=_M.prototype,kL=bM.prototype,PL=Un({type:"ec-line",style:{stroke:"#000",fill:null},shape:{x1:0,y1:0,x2:0,y2:0,percent:1,cpx1:null,cpy1:null},buildPath:function buildPath(t,e){(tf(e)?LL:kL).buildPath(t,e);},pointAt:function pointAt(t){return tf(this.shape)?LL.pointAt.call(this,t):kL.pointAt.call(this,t);},tangentAt:function tangentAt(t){var e=this.shape,i=tf(e)?[e.x2-e.x1,e.y2-e.y1]:kL.tangentAt.call(this,t);return q(i,i);}}),NL=["fromSymbol","toSymbol"],OL=rf.prototype;OL.beforeUpdate=function(){var t=this,e=t.childOfName("fromSymbol"),i=t.childOfName("toSymbol"),n=t.childOfName("label");if(e||i||!n.ignore){for(var o=1,a=this.parent;a;){a.scale&&(o/=a.scale[0]),a=a.parent;}var r=t.childOfName("line");if(this.__dirty||r.__dirty){var s=r.shape.percent,l=r.pointAt(0),u=r.pointAt(s),h=U([],u,l);if(q(h,h),e&&(e.attr("position",l),c=r.tangentAt(0),e.attr("rotation",Math.PI/2-Math.atan2(c[1],c[0])),e.attr("scale",[o*s,o*s])),i){i.attr("position",u);var c=r.tangentAt(1);i.attr("rotation",-Math.PI/2-Math.atan2(c[1],c[0])),i.attr("scale",[o*s,o*s]);}if(!n.ignore){n.attr("position",u);var d,f,p,g=5*o;if("end"===n.__position)d=[h[0]*g+u[0],h[1]*g+u[1]],f=h[0]>.8?"left":h[0]<-.8?"right":"center",p=h[1]>.8?"top":h[1]<-.8?"bottom":"middle";else if("middle"===n.__position){var m=s/2,v=[(c=r.tangentAt(m))[1],-c[0]],y=r.pointAt(m);v[1]>0&&(v[0]=-v[0],v[1]=-v[1]),d=[y[0]+v[0]*g,y[1]+v[1]*g],f="center",p="bottom";var x=-Math.atan2(c[1],c[0]);u[0]<l[0]&&(x=Math.PI+x),n.attr("rotation",x);}else d=[-h[0]*g+l[0],-h[1]*g+l[1]],f=h[0]>.8?"right":h[0]<-.8?"left":"center",p=h[1]>.8?"bottom":h[1]<-.8?"top":"middle";n.attr({style:{textVerticalAlign:n.__verticalAlign||p,textAlign:n.__textAlign||f},position:d,scale:[o,o]});}}}},OL._createLine=function(t,e,i){var n=t.hostModel,o=of(t.getItemLayout(e));o.shape.percent=0,To(o,{shape:{percent:1}},n,e),this.add(o);var a=new rM({name:"label",lineLabelOriginalOpacity:1});this.add(a),d(NL,function(i){var n=nf(i,t,e);this.add(n),this[ef(i)]=t.getItemVisual(e,i);},this),this._updateCommonStl(t,e,i);},OL.updateData=function(t,e,i){var n=t.hostModel,o=this.childOfName("line"),a=t.getItemLayout(e),r={shape:{}};af(r.shape,a),Io(o,r,n,e),d(NL,function(i){var n=t.getItemVisual(e,i),o=ef(i);if(this[o]!==n){this.remove(this.childOfName(i));var a=nf(i,t,e);this.add(a);}this[o]=n;},this),this._updateCommonStl(t,e,i);},OL._updateCommonStl=function(t,e,i){var n=t.hostModel,o=this.childOfName("line"),a=i&&i.lineStyle,s=i&&i.hoverLineStyle,l=i&&i.labelModel,u=i&&i.hoverLabelModel;if(!i||t.hasItemOption){var h=t.getItemModel(e);a=h.getModel("lineStyle").getLineStyle(),s=h.getModel("emphasis.lineStyle").getLineStyle(),l=h.getModel("label"),u=h.getModel("emphasis.label");}var c=t.getItemVisual(e,"color"),f=D(t.getItemVisual(e,"opacity"),a.opacity,1);o.useStyle(r({strokeNoScale:!0,fill:"none",stroke:c,opacity:f},a)),o.hoverStyle=s,d(NL,function(t){var e=this.childOfName(t);e&&(e.setColor(c),e.setStyle({opacity:f}));},this);var p,g,m=l.getShallow("show"),v=u.getShallow("show"),y=this.childOfName("label");if((m||v)&&(p=c||"#000",null==(g=n.getFormattedLabel(e,"normal",t.dataType)))){var x=n.getRawValue(e);g=null==x?t.getName(e):isFinite(x)?Go(x):x;}var _=m?g:null,w=v?A(n.getFormattedLabel(e,"emphasis",t.dataType),g):null,b=y.style;null==_&&null==w||(mo(y.style,l,{text:_},{autoColor:p}),y.__textAlign=b.textAlign,y.__verticalAlign=b.textVerticalAlign,y.__position=l.get("position")||"middle"),y.hoverStyle=null!=w?{text:w,textFill:u.getTextColor(!0),fontStyle:u.getShallow("fontStyle"),fontWeight:u.getShallow("fontWeight"),fontSize:u.getShallow("fontSize"),fontFamily:u.getShallow("fontFamily")}:{text:null},y.ignore=!m&&!v,fo(this);},OL.highlight=function(){this.trigger("emphasis");},OL.downplay=function(){this.trigger("normal");},OL.updateLayout=function(t,e){this.setLinePoints(t.getItemLayout(e));},OL.setLinePoints=function(t){var e=this.childOfName("line");af(e.shape,t),e.dirty();},u(rf,tb);var EL=sf.prototype;EL.isPersistent=function(){return!0;},EL.updateData=function(t){var e=this,i=e.group,n=e._lineData;e._lineData=t,n||i.removeAll();var o=hf(t);t.diff(n).add(function(i){lf(e,t,i,o);}).update(function(i,a){uf(e,n,t,a,i,o);}).remove(function(t){i.remove(n.getItemGraphicEl(t));}).execute();},EL.updateLayout=function(){var t=this._lineData;t&&t.eachItemGraphicEl(function(e,i){e.updateLayout(t,i);},this);},EL.incrementalPrepareUpdate=function(t){this._seriesScope=hf(t),this._lineData=null,this.group.removeAll();},EL.incrementalUpdate=function(t,e){for(var i=t.start;i<t.end;i++){if(df(e.getItemLayout(i))){var n=new this._ctor(e,i,this._seriesScope);n.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0);}),this.group.add(n),e.setItemGraphicEl(i,n);}}},EL.remove=function(){this._clearIncremental(),this._incremental=null,this.group.removeAll();},EL._clearIncremental=function(){var t=this._incremental;t&&t.clearDisplaybles();};var RL=[],zL=[],BL=[],VL=sn,GL=hw,FL=Math.abs,WL=function WL(t,e){function i(t){var e=t.getVisual("symbolSize");return e instanceof Array&&(e=(e[0]+e[1])/2),e;}var n=[],o=cn,a=[[],[],[]],r=[[],[]],s=[];e/=2,t.eachEdge(function(t,l){var u=t.getLayout(),h=t.getVisual("fromSymbol"),c=t.getVisual("toSymbol");u.__original||(u.__original=[F(u[0]),F(u[1])],u[2]&&u.__original.push(F(u[2])));var d=u.__original;if(null!=u[2]){if(G(a[0],d[0]),G(a[1],d[2]),G(a[2],d[1]),h&&"none"!==h){var f=i(t.node1),p=ff(a,d[0],f*e);o(a[0][0],a[1][0],a[2][0],p,n),a[0][0]=n[3],a[1][0]=n[4],o(a[0][1],a[1][1],a[2][1],p,n),a[0][1]=n[3],a[1][1]=n[4];}if(c&&"none"!==c){var f=i(t.node2),p=ff(a,d[1],f*e);o(a[0][0],a[1][0],a[2][0],p,n),a[1][0]=n[1],a[2][0]=n[2],o(a[0][1],a[1][1],a[2][1],p,n),a[1][1]=n[1],a[2][1]=n[2];}G(u[0],a[0]),G(u[1],a[2]),G(u[2],a[1]);}else{if(G(r[0],d[0]),G(r[1],d[1]),U(s,r[1],r[0]),q(s,s),h&&"none"!==h){f=i(t.node1);Z(r[0],r[0],s,f*e);}if(c&&"none"!==c){f=i(t.node2);Z(r[1],r[1],s,-f*e);}G(u[0],r[0]),G(u[1],r[1]);}});},HL="__focusNodeAdjacency",ZL=["itemStyle","opacity"],UL=["lineStyle","opacity"];Zs({type:"graph",init:function init(t,e){var i=new Du(),n=new sf(),o=this.group;this._controller=new oc(e.getZr()),this._controllerHost={target:o},o.add(i.group),o.add(n.group),this._symbolDraw=i,this._lineDraw=n,this._firstRender=!0;},render:function render(t,e,i){var n=t.coordinateSystem;this._model=t,this._nodeScaleRatio=t.get("nodeScaleRatio");var o=this._symbolDraw,a=this._lineDraw,r=this.group;if("view"===n.type){var s={position:n.position,scale:n.scale};this._firstRender?r.attr(s):Io(r,s,t);}WL(t.getGraph(),this._getNodeGlobalScale(t));var l=t.getData();o.updateData(l);var u=t.getEdgeData();a.updateData(u),this._updateNodeAndLinkScale(),this._updateController(t,e,i),clearTimeout(this._layoutTimeout);var h=t.forceLayout,c=t.get("force.layoutAnimation");h&&this._startForceLayoutIteration(h,c),l.eachItemGraphicEl(function(e,n){var o=l.getItemModel(n);e.off("drag").off("dragend");var a=o.get("draggable");a&&e.on("drag",function(){h&&(h.warmUp(),!this._layouting&&this._startForceLayoutIteration(h,c),h.setFixed(n),l.setItemLayout(n,e.position));},this).on("dragend",function(){h&&h.setUnfixed(n);},this),e.setDraggable(a&&h),e[HL]&&e.off("mouseover",e[HL]),e.__unfocusNodeAdjacency&&e.off("mouseout",e.__unfocusNodeAdjacency),o.get("focusNodeAdjacency")&&(e.on("mouseover",e[HL]=function(){i.dispatchAction({type:"focusNodeAdjacency",seriesId:t.id,dataIndex:e.dataIndex});}),e.on("mouseout",e.__unfocusNodeAdjacency=function(){i.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t.id});}));},this),l.graph.eachEdge(function(e){var n=e.getGraphicEl();n[HL]&&n.off("mouseover",n[HL]),n.__unfocusNodeAdjacency&&n.off("mouseout",n.__unfocusNodeAdjacency),e.getModel().get("focusNodeAdjacency")&&(n.on("mouseover",n[HL]=function(){i.dispatchAction({type:"focusNodeAdjacency",seriesId:t.id,edgeDataIndex:e.dataIndex});}),n.on("mouseout",n.__unfocusNodeAdjacency=function(){i.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t.id});}));});var d="circular"===t.get("layout")&&t.get("circular.rotateLabel"),f=l.getLayout("cx"),p=l.getLayout("cy");l.eachItemGraphicEl(function(t,e){var i=t.getSymbolPath();if(d){var n=l.getItemLayout(e),o=Math.atan2(n[1]-p,n[0]-f);o<0&&(o=2*Math.PI+o);var a=n[0]<f;a&&(o-=Math.PI);var r=a?"left":"right";i.setStyle({textRotation:-o,textPosition:r,textOrigin:"center"}),i.hoverStyle&&(i.hoverStyle.textPosition=r);}else i.setStyle({textRotation:0});}),this._firstRender=!1;},dispose:function dispose(){this._controller&&this._controller.dispose(),this._controllerHost={};},focusNodeAdjacency:function focusNodeAdjacency(t,e,i,n){var o=this._model.getData().graph,a=n.dataIndex,r=n.edgeDataIndex,s=o.getNodeByIndex(a),l=o.getEdgeByIndex(r);(s||l)&&(o.eachNode(function(t){gf(t,ZL,.1);}),o.eachEdge(function(t){gf(t,UL,.1);}),s&&(mf(s,ZL),d(s.edges,function(t){t.dataIndex<0||(mf(t,UL),mf(t.node1,ZL),mf(t.node2,ZL));})),l&&(mf(l,UL),mf(l.node1,ZL),mf(l.node2,ZL)));},unfocusNodeAdjacency:function unfocusNodeAdjacency(t,e,i,n){var o=this._model.getData().graph;o.eachNode(function(t){gf(t,ZL);}),o.eachEdge(function(t){gf(t,UL);});},_startForceLayoutIteration:function _startForceLayoutIteration(t,e){var i=this;!function n(){t.step(function(t){i.updateLayout(i._model),(i._layouting=!t)&&(e?i._layoutTimeout=setTimeout(n,16):n());});}();},_updateController:function _updateController(t,e,i){var n=this._controller,o=this._controllerHost,a=this.group;n.setPointerChecker(function(e,n,o){var r=a.getBoundingRect();return r.applyTransform(a.transform),r.contain(n,o)&&!gc(e,i,t);}),"view"===t.coordinateSystem.type?(n.enable(t.get("roam")),o.zoomLimit=t.get("scaleLimit"),o.zoom=t.coordinateSystem.getZoom(),n.off("pan").off("zoom").on("pan",function(e){fc(o,e.dx,e.dy),i.dispatchAction({seriesId:t.id,type:"graphRoam",dx:e.dx,dy:e.dy});}).on("zoom",function(e){pc(o,e.scale,e.originX,e.originY),i.dispatchAction({seriesId:t.id,type:"graphRoam",zoom:e.scale,originX:e.originX,originY:e.originY}),this._updateNodeAndLinkScale(),WL(t.getGraph(),this._getNodeGlobalScale(t)),this._lineDraw.updateLayout();},this)):n.disable();},_updateNodeAndLinkScale:function _updateNodeAndLinkScale(){var t=this._model,e=t.getData(),i=this._getNodeGlobalScale(t),n=[i,i];e.eachItemGraphicEl(function(t,e){t.attr("scale",n);});},_getNodeGlobalScale:function _getNodeGlobalScale(t){var e=t.coordinateSystem;if("view"!==e.type)return 1;var i=this._nodeScaleRatio,n=e.scale,o=n&&n[0]||1;return((e.getZoom()-1)*i+1)/o;},updateLayout:function updateLayout(t){WL(t.getGraph(),this._getNodeGlobalScale(t)),this._symbolDraw.updateLayout(),this._lineDraw.updateLayout();},remove:function remove(t,e){this._symbolDraw&&this._symbolDraw.remove(),this._lineDraw&&this._lineDraw.remove();}}),Es({type:"focusNodeAdjacency",event:"focusNodeAdjacency",update:"series:focusNodeAdjacency"},function(){}),Es({type:"unfocusNodeAdjacency",event:"unfocusNodeAdjacency",update:"series:unfocusNodeAdjacency"},function(){}),Es({type:"graphRoam",event:"graphRoam",update:"none"},function(t,e){e.eachComponent({mainType:"series",query:t},function(e){var i=bc(e.coordinateSystem,t);e.setCenter&&e.setCenter(i.center),e.setZoom&&e.setZoom(i.zoom);});});var XL=Z;Os(function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.eachSeriesByType("graph",function(t){var i=t.getCategoriesData(),n=t.getGraph().data,o=i.mapArray(i.getName);n.filterSelf(function(t){var i=n.getItemModel(t).getShallow("category");if(null!=i){"number"==typeof i&&(i=o[i]);for(var a=0;a<e.length;a++){if(!e[a].isSelected(i))return!1;}}return!0;});},this);}),Bs(TD("graph","circle",null)),Bs(function(t){var e={};t.eachSeriesByType("graph",function(t){var i=t.getCategoriesData(),n=t.getData(),o={};i.each(function(n){var a=i.getName(n);o["ec-"+a]=n;var r=i.getItemModel(n).get("itemStyle.color")||t.getColorFromPalette(a,e);i.setItemVisual(n,"color",r);}),i.count()&&n.each(function(t){var e=n.getItemModel(t).getShallow("category");null!=e&&("string"==typeof e&&(e=o["ec-"+e]),n.getItemVisual(t,"color",!0)||n.setItemVisual(t,"color",i.getItemVisual(e,"color")));});});}),Bs(function(t){t.eachSeriesByType("graph",function(t){var e=t.getGraph(),i=t.getEdgeData(),n=vf(t.get("edgeSymbol")),o=vf(t.get("edgeSymbolSize")),a="lineStyle.color".split("."),r="lineStyle.opacity".split(".");i.setVisual("fromSymbol",n&&n[0]),i.setVisual("toSymbol",n&&n[1]),i.setVisual("fromSymbolSize",o&&o[0]),i.setVisual("toSymbolSize",o&&o[1]),i.setVisual("color",t.get(a)),i.setVisual("opacity",t.get(r)),i.each(function(t){var n=i.getItemModel(t),o=e.getEdgeByIndex(t),s=vf(n.getShallow("symbol",!0)),l=vf(n.getShallow("symbolSize",!0)),u=n.get(a),h=n.get(r);switch(u){case"source":u=o.node1.getVisual("color");break;case"target":u=o.node2.getVisual("color");}s[0]&&o.setVisual("fromSymbol",s[0]),s[1]&&o.setVisual("toSymbol",s[1]),l[0]&&o.setVisual("fromSymbolSize",l[0]),l[1]&&o.setVisual("toSymbolSize",l[1]),o.setVisual("color",u),o.setVisual("opacity",h);});});}),zs(function(t,e){t.eachSeriesByType("graph",function(t){var e=t.get("layout"),i=t.coordinateSystem;if(i&&"view"!==i.type){var n=t.getData(),o=[];d(i.dimensions,function(t){o=o.concat(n.mapDimension(t,!0));});for(var a=0;a<n.count();a++){for(var r=[],s=!1,l=0;l<o.length;l++){var u=n.get(o[l],a);isNaN(u)||(s=!0),r.push(u);}s?n.setItemLayout(a,i.dataToPoint(r)):n.setItemLayout(a,[NaN,NaN]);}xf(n.graph);}else e&&"none"!==e||yf(t);});}),zs(function(t){t.eachSeriesByType("graph",function(t){"circular"===t.get("layout")&&_f(t);});}),zs(function(t){t.eachSeriesByType("graph",function(t){var e=t.coordinateSystem;if(!e||"view"===e.type)if("force"===t.get("layout")){var i=t.preservedPoints||{},n=t.getGraph(),o=n.data,a=n.edgeData,r=t.getModel("force"),s=r.get("initLayout");t.preservedPoints?o.each(function(t){var e=o.getId(t);o.setItemLayout(t,i[e]||[NaN,NaN]);}):s&&"none"!==s?"circular"===s&&_f(t):yf(t);var l=o.getDataExtent("value"),u=a.getDataExtent("value"),h=r.get("repulsion"),c=r.get("edgeLength");y(h)||(h=[h,h]),y(c)||(c=[c,c]),c=[c[1],c[0]];var d=o.mapArray("value",function(t,e){var i=o.getItemLayout(e),n=Bo(t,l,h);return isNaN(n)&&(n=(h[0]+h[1])/2),{w:n,rep:n,fixed:o.getItemModel(e).get("fixed"),p:!i||isNaN(i[0])||isNaN(i[1])?null:i};}),f=a.mapArray("value",function(t,e){var i=n.getEdgeByIndex(e),o=Bo(t,u,c);return isNaN(o)&&(o=(c[0]+c[1])/2),{n1:d[i.node1.dataIndex],n2:d[i.node2.dataIndex],d:o,curveness:i.getModel().get("lineStyle.curveness")||0};}),p=(e=t.coordinateSystem).getBoundingRect(),g=wf(d,f,{rect:p,gravity:r.get("gravity")}),m=g.step;g.step=function(t){for(var e=0,a=d.length;e<a;e++){d[e].fixed&&G(d[e].p,n.getNodeByIndex(e).getLayout());}m(function(e,a,r){for(var s=0,l=e.length;s<l;s++){e[s].fixed||n.getNodeByIndex(s).setLayout(e[s].p),i[o.getId(s)]=e[s].p;}for(var s=0,l=a.length;s<l;s++){var u=a[s],h=n.getEdgeByIndex(s),c=u.n1.p,d=u.n2.p,f=h.getLayout();(f=f?f.slice():[])[0]=f[0]||[],f[1]=f[1]||[],G(f[0],c),G(f[1],d),+u.curveness&&(f[2]=[(c[0]+d[0])/2-(c[1]-d[1])*u.curveness,(c[1]+d[1])/2-(d[0]-c[0])*u.curveness]),h.setLayout(f);}t&&t(r);});},t.forceLayout=g,t.preservedPoints=i,g.step();}else t.forceLayout=null;});}),Rs("graphView",{create:function create(t,e){var i=[];return t.eachSeriesByType("graph",function(t){var n=t.get("coordinateSystem");if(!n||"view"===n){var o=t.getData(),a=[],r=[];fn(o.mapArray(function(t){var e=o.getItemModel(t);return[+e.get("x"),+e.get("y")];}),a,r),r[0]-a[0]==0&&(r[0]+=1,a[0]-=1),r[1]-a[1]==0&&(r[1]+=1,a[1]-=1);var s=(r[0]-a[0])/(r[1]-a[1]),l=bf(t,e,s);isNaN(s)&&(a=[l.x,l.y],r=[l.x+l.width,l.y+l.height]);var u=r[0]-a[0],h=r[1]-a[1],c=l.width,d=l.height,f=t.coordinateSystem=new Mc();f.zoomLimit=t.get("scaleLimit"),f.setBoundingRect(a[0],a[1],u,h),f.setViewRect(l.x,l.y,c,d),f.setCenter(t.get("center")),f.setZoom(t.get("zoom")),i.push(f);}}),i;}});YI.extend({type:"series.gauge",getInitialData:function getInitialData(t,e){var i=t.data||[];return y(i)||(i=[i]),t.data=i,oC(this,["value"]);},defaultOption:{zlevel:0,z:2,center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,lineStyle:{color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]],width:30}},splitLine:{show:!0,length:30,lineStyle:{color:"#eee",width:2,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{color:"#eee",width:1,type:"solid"}},axisLabel:{show:!0,distance:5,color:"auto"},pointer:{show:!0,length:"80%",width:8},itemStyle:{color:"auto"},title:{show:!0,offsetCenter:[0,"-40%"],color:"#333",fontSize:15},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:"auto",fontSize:30}}});var jL=Pn.extend({type:"echartsGaugePointer",shape:{angle:0,width:10,r:10,x:0,y:0},buildPath:function buildPath(t,e){var i=Math.cos,n=Math.sin,o=e.r,a=e.width,r=e.angle,s=e.x-i(r)*a*(a>=o/3?1:2),l=e.y-n(r)*a*(a>=o/3?1:2);r=e.angle-Math.PI/2,t.moveTo(s,l),t.lineTo(e.x+i(r)*a,e.y+n(r)*a),t.lineTo(e.x+i(e.angle)*o,e.y+n(e.angle)*o),t.lineTo(e.x-i(r)*a,e.y-n(r)*a),t.lineTo(s,l);}}),YL=2*Math.PI,qL=(Ar.extend({type:"gauge",render:function render(t,e,i){this.group.removeAll();var n=t.get("axisLine.lineStyle.color"),o=Sf(t,i);this._renderMain(t,e,i,n,o);},dispose:function dispose(){},_renderMain:function _renderMain(t,e,i,n,o){for(var a=this.group,r=t.getModel("axisLine").getModel("lineStyle"),s=t.get("clockwise"),l=-t.get("startAngle")/180*Math.PI,u=-t.get("endAngle")/180*Math.PI,h=(u-l)%YL,c=l,d=r.get("width"),f=0;f<n.length;f++){var p=Math.min(Math.max(n[f][0],0),1),g=new hM({shape:{startAngle:c,endAngle:u=l+h*p,cx:o.cx,cy:o.cy,clockwise:s,r0:o.r-d,r:o.r},silent:!0});g.setStyle({fill:n[f][1]}),g.setStyle(r.getLineStyle(["color","borderWidth","borderColor"])),a.add(g),c=u;}var m=function m(t){if(t<=0)return n[0][1];for(var e=0;e<n.length;e++){if(n[e][0]>=t&&(0===e?0:n[e-1][0])<t)return n[e][1];}return n[e-1][1];};if(!s){var v=l;l=u,u=v;}this._renderTicks(t,e,i,m,o,l,u,s),this._renderPointer(t,e,i,m,o,l,u,s),this._renderTitle(t,e,i,m,o),this._renderDetail(t,e,i,m,o);},_renderTicks:function _renderTicks(t,e,i,n,o,a,r,s){for(var l=this.group,u=o.cx,h=o.cy,c=o.r,d=+t.get("min"),f=+t.get("max"),p=t.getModel("splitLine"),g=t.getModel("axisTick"),m=t.getModel("axisLabel"),v=t.get("splitNumber"),y=g.get("splitNumber"),x=Vo(p.get("length"),c),_=Vo(g.get("length"),c),w=a,b=(r-a)/v,S=b/y,M=p.getModel("lineStyle").getLineStyle(),I=g.getModel("lineStyle").getLineStyle(),T=0;T<=v;T++){var A=Math.cos(w),D=Math.sin(w);if(p.get("show")){var C=new _M({shape:{x1:A*c+u,y1:D*c+h,x2:A*(c-x)+u,y2:D*(c-x)+h},style:M,silent:!0});"auto"===M.stroke&&C.setStyle({stroke:n(T/v)}),l.add(C);}if(m.get("show")){var L=Mf(Go(T/v*(f-d)+d),m.get("formatter")),k=m.get("distance"),P=n(T/v);l.add(new rM({style:mo({},m,{text:L,x:A*(c-x-k)+u,y:D*(c-x-k)+h,textVerticalAlign:D<-.4?"top":D>.4?"bottom":"middle",textAlign:A<-.4?"left":A>.4?"right":"center"},{autoColor:P}),silent:!0}));}if(g.get("show")&&T!==v){for(var N=0;N<=y;N++){var A=Math.cos(w),D=Math.sin(w),O=new _M({shape:{x1:A*c+u,y1:D*c+h,x2:A*(c-_)+u,y2:D*(c-_)+h},silent:!0,style:I});"auto"===I.stroke&&O.setStyle({stroke:n((T+N/y)/v)}),l.add(O),w+=S;}w-=S;}else w+=b;}},_renderPointer:function _renderPointer(t,e,i,n,o,a,r,s){var l=this.group,u=this._data;if(t.get("pointer.show")){var h=[+t.get("min"),+t.get("max")],c=[a,r],d=t.getData(),f=d.mapDimension("value");d.diff(u).add(function(e){var i=new jL({shape:{angle:a}});To(i,{shape:{angle:Bo(d.get(f,e),h,c,!0)}},t),l.add(i),d.setItemGraphicEl(e,i);}).update(function(e,i){var n=u.getItemGraphicEl(i);Io(n,{shape:{angle:Bo(d.get(f,e),h,c,!0)}},t),l.add(n),d.setItemGraphicEl(e,n);}).remove(function(t){var e=u.getItemGraphicEl(t);l.remove(e);}).execute(),d.eachItemGraphicEl(function(t,e){var i=d.getItemModel(e),a=i.getModel("pointer");t.setShape({x:o.cx,y:o.cy,width:Vo(a.get("width"),o.r),r:Vo(a.get("length"),o.r)}),t.useStyle(i.getModel("itemStyle").getItemStyle()),"auto"===t.style.fill&&t.setStyle("fill",n(Bo(d.get(f,e),h,[0,1],!0))),fo(t,i.getModel("emphasis.itemStyle").getItemStyle());}),this._data=d;}else u&&u.eachItemGraphicEl(function(t){l.remove(t);});},_renderTitle:function _renderTitle(t,e,i,n,o){var a=t.getData(),r=a.mapDimension("value"),s=t.getModel("title");if(s.get("show")){var l=s.get("offsetCenter"),u=o.cx+Vo(l[0],o.r),h=o.cy+Vo(l[1],o.r),c=+t.get("min"),d=+t.get("max"),f=n(Bo(t.getData().get(r,0),[c,d],[0,1],!0));this.group.add(new rM({silent:!0,style:mo({},s,{x:u,y:h,text:a.getName(0),textAlign:"center",textVerticalAlign:"middle"},{autoColor:f,forceRich:!0})}));}},_renderDetail:function _renderDetail(t,e,i,n,o){var a=t.getModel("detail"),r=+t.get("min"),s=+t.get("max");if(a.get("show")){var l=a.get("offsetCenter"),u=o.cx+Vo(l[0],o.r),h=o.cy+Vo(l[1],o.r),c=Vo(a.get("width"),o.r),d=Vo(a.get("height"),o.r),f=t.getData(),p=f.get(f.mapDimension("value"),0),g=n(Bo(p,[r,s],[0,1],!0));this.group.add(new rM({silent:!0,style:mo({},a,{x:u,y:h,text:Mf(p,a.get("formatter")),textWidth:isNaN(c)?null:c,textHeight:isNaN(d)?null:d,textAlign:"center",textVerticalAlign:"middle"},{autoColor:g,forceRich:!0})}));}}}),Hs({type:"series.funnel",init:function init(t){qL.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData();},this._defaultLabelLine(t);},getInitialData:function getInitialData(t,e){return oC(this,["value"]);},_defaultLabelLine:function _defaultLabelLine(t){Ci(t,"labelLine",["show"]);var e=t.labelLine,i=t.emphasis.labelLine;e.show=e.show&&t.label.show,i.show=i.show&&t.emphasis.label.show;},getDataParams:function getDataParams(t){var e=this.getData(),i=qL.superCall(this,"getDataParams",t),n=e.mapDimension("value"),o=e.getSum(n);return i.percent=o?+(e.get(n,t)/o*100).toFixed(2):0,i.$vars.push("percent"),i;},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,left:80,top:60,right:80,bottom:60,minSize:"0%",maxSize:"100%",sort:"descending",gap:0,funnelAlign:"center",label:{show:!0,position:"outer"},labelLine:{show:!0,length:20,lineStyle:{width:1,type:"solid"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{show:!0}}}})),KL=If.prototype,$L=["itemStyle","opacity"];KL.updateData=function(t,e,i){var n=this.childAt(0),o=t.hostModel,a=t.getItemModel(e),s=t.getItemLayout(e),l=t.getItemModel(e).get($L);l=null==l?1:l,n.useStyle({}),i?(n.setShape({points:s.points}),n.setStyle({opacity:0}),To(n,{style:{opacity:l}},o,e)):Io(n,{style:{opacity:l},shape:{points:s.points}},o,e);var u=a.getModel("itemStyle"),h=t.getItemVisual(e,"color");n.setStyle(r({lineJoin:"round",fill:h},u.getItemStyle(["opacity"]))),n.hoverStyle=u.getModel("emphasis").getItemStyle(),this._updateLabel(t,e),fo(this);},KL._updateLabel=function(t,e){var i=this.childAt(1),n=this.childAt(2),o=t.hostModel,a=t.getItemModel(e),r=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");Io(i,{shape:{points:r.linePoints||r.linePoints}},o,e),Io(n,{style:{x:r.x,y:r.y}},o,e),n.attr({rotation:r.rotation,origin:[r.x,r.y],z2:10});var l=a.getModel("label"),u=a.getModel("emphasis.label"),h=a.getModel("labelLine"),c=a.getModel("emphasis.labelLine"),s=t.getItemVisual(e,"color");go(n.style,n.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!r.inside},{textAlign:r.textAlign,textVerticalAlign:r.verticalAlign}),n.ignore=n.normalIgnore=!l.get("show"),n.hoverIgnore=!u.get("show"),i.ignore=i.normalIgnore=!h.get("show"),i.hoverIgnore=!c.get("show"),i.setStyle({stroke:s}),i.setStyle(h.getModel("lineStyle").getLineStyle()),i.hoverStyle=c.getModel("lineStyle").getLineStyle();},u(If,tb);Ar.extend({type:"funnel",render:function render(t,e,i){var n=t.getData(),o=this._data,a=this.group;n.diff(o).add(function(t){var e=new If(n,t);n.setItemGraphicEl(t,e),a.add(e);}).update(function(t,e){var i=o.getItemGraphicEl(e);i.updateData(n,t),a.add(i),n.setItemGraphicEl(t,i);}).remove(function(t){var e=o.getItemGraphicEl(t);a.remove(e);}).execute(),this._data=n;},remove:function remove(){this.group.removeAll(),this._data=null;},dispose:function dispose(){}});Bs(uC("funnel")),zs(function(t,e,i){t.eachSeriesByType("funnel",function(t){var i=t.getData(),n=i.mapDimension("value"),o=t.get("sort"),a=Tf(t,e),r=Af(i,o),s=[Vo(t.get("minSize"),a.width),Vo(t.get("maxSize"),a.width)],l=i.getDataExtent(n),u=t.get("min"),h=t.get("max");null==u&&(u=Math.min(l[0],0)),null==h&&(h=l[1]);var c=t.get("funnelAlign"),d=t.get("gap"),f=(a.height-d*(i.count()-1))/i.count(),p=a.y,g=function g(t,e){var o,r=Bo(i.get(n,t)||0,[u,h],s,!0);switch(c){case"left":o=a.x;break;case"center":o=a.x+(a.width-r)/2;break;case"right":o=a.x+a.width-r;}return[[o,e],[o+r,e]];};"ascending"===o&&(f=-f,d=-d,p+=a.height,r=r.reverse());for(var m=0;m<r.length;m++){var v=r[m],y=r[m+1],x=i.getItemModel(v).get("itemStyle.height");null==x?x=f:(x=Vo(x,a.height),"ascending"===o&&(x=-x));var _=g(v,p),w=g(y,p+x);p+=x+d,i.setItemLayout(v,{points:_.concat(w.slice().reverse())});}Df(i);});}),Os(fC("funnel"));var JL=function JL(t,e,i,n,o){aD.call(this,t,e,i),this.type=n||"value",this.axisIndex=o;};JL.prototype={constructor:JL,model:null,isHorizontal:function isHorizontal(){return"horizontal"!==this.coordinateSystem.getModel().get("layout");}},u(JL,aD);var QL=function QL(t,e,i,n,o,a){e[0]=Pf(e[0],i),e[1]=Pf(e[1],i),t=t||0;var r=i[1]-i[0];null!=o&&(o=Pf(o,[0,r])),null!=a&&(a=Math.max(a,null!=o?o:0)),"all"===n&&(o=a=Math.abs(e[1]-e[0]),n=0);var s=kf(e,n);e[n]+=t;var l=o||0,u=i.slice();s.sign<0?u[0]+=l:u[1]-=l,e[n]=Pf(e[n],u);h=kf(e,n);null!=o&&(h.sign!==s.sign||h.span<o)&&(e[1-n]=e[n]+s.sign*o);var h=kf(e,n);return null!=a&&h.span>a&&(e[1-n]=e[n]+h.sign*a),e;},tk=d,ek=Math.min,ik=Math.max,nk=Math.floor,ok=Math.ceil,ak=Go,rk=Math.PI;Nf.prototype={type:"parallel",constructor:Nf,_init:function _init(t,e,i){var n=t.dimensions,o=t.parallelAxisIndex;tk(n,function(t,i){var n=o[i],a=e.getComponent("parallelAxis",n),r=this._axesMap.set(t,new JL(t,Hl(a),[0,0],a.get("type"),n)),s="category"===r.type;r.onBand=s&&a.get("boundaryGap"),r.inverse=a.get("inverse"),a.axis=r,r.model=a,r.coordinateSystem=a.coordinateSystem=this;},this);},update:function update(t,e){this._updateAxesFromSeries(this._model,t);},containPoint:function containPoint(t){var e=this._makeLayoutInfo(),i=e.axisBase,n=e.layoutBase,o=e.pixelDimIndex,a=t[1-o],r=t[o];return a>=i&&a<=i+e.axisLength&&r>=n&&r<=n+e.layoutLength;},getModel:function getModel(){return this._model;},_updateAxesFromSeries:function _updateAxesFromSeries(t,e){e.eachSeries(function(i){if(t.contains(i,e)){var n=i.getData();tk(this.dimensions,function(t){var e=this._axesMap.get(t);e.scale.unionExtentFromData(n,n.mapDimension(t)),Wl(e.scale,e.model);},this);}},this);},resize:function resize(t,e){this._rect=ca(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),this._layoutAxes();},getRect:function getRect(){return this._rect;},_makeLayoutInfo:function _makeLayoutInfo(){var t,e=this._model,i=this._rect,n=["x","y"],o=["width","height"],a=e.get("layout"),r="horizontal"===a?0:1,s=i[o[r]],l=[0,s],u=this.dimensions.length,h=Of(e.get("axisExpandWidth"),l),c=Of(e.get("axisExpandCount")||0,[0,u]),d=e.get("axisExpandable")&&u>3&&u>c&&c>1&&h>0&&s>0,f=e.get("axisExpandWindow");f?(t=Of(f[1]-f[0],l),f[1]=f[0]+t):(t=Of(h*(c-1),l),(f=[h*(e.get("axisExpandCenter")||nk(u/2))-t/2])[1]=f[0]+t);var p=(s-t)/(u-c);p<3&&(p=0);var g=[nk(ak(f[0]/h,1))+1,ok(ak(f[1]/h,1))-1],m=p/h*f[0];return{layout:a,pixelDimIndex:r,layoutBase:i[n[r]],layoutLength:s,axisBase:i[n[1-r]],axisLength:i[o[1-r]],axisExpandable:d,axisExpandWidth:h,axisCollapseWidth:p,axisExpandWindow:f,axisCount:u,winInnerIndices:g,axisExpandWindow0Pos:m};},_layoutAxes:function _layoutAxes(){var t=this._rect,e=this._axesMap,i=this.dimensions,n=this._makeLayoutInfo(),o=n.layout;e.each(function(t){var e=[0,n.axisLength],i=t.inverse?1:0;t.setExtent(e[i],e[1-i]);}),tk(i,function(e,i){var a=(n.axisExpandable?Rf:Ef)(i,n),r={horizontal:{x:a.position,y:n.axisLength},vertical:{x:0,y:a.position}},s={horizontal:rk/2,vertical:0},l=[r[o].x+t.x,r[o].y+t.y],u=s[o],h=xt();Mt(h,h,u),St(h,h,l),this._axesLayout[e]={position:l,rotation:u,transform:h,axisNameAvailableWidth:a.axisNameAvailableWidth,axisLabelShow:a.axisLabelShow,nameTruncateMaxWidth:a.nameTruncateMaxWidth,tickDirection:1,labelDirection:1};},this);},getAxis:function getAxis(t){return this._axesMap.get(t);},dataToPoint:function dataToPoint(t,e){return this.axisCoordToPoint(this._axesMap.get(e).dataToCoord(t),e);},eachActiveState:function eachActiveState(t,e,i,n){null==i&&(i=0),null==n&&(n=t.count());var o=this._axesMap,a=this.dimensions,r=[],s=[];d(a,function(e){r.push(t.mapDimension(e)),s.push(o.get(e).model);});for(var l=this.hasAxisBrushed(),u=i;u<n;u++){var h;if(l){h="active";for(var c=t.getValues(r,u),f=0,p=a.length;f<p;f++){if("inactive"===s[f].getActiveState(c[f])){h="inactive";break;}}}else h="normal";e(h,u);}},hasAxisBrushed:function hasAxisBrushed(){for(var t=this.dimensions,e=this._axesMap,i=!1,n=0,o=t.length;n<o;n++){"normal"!==e.get(t[n]).model.getActiveState()&&(i=!0);}return i;},axisCoordToPoint:function axisCoordToPoint(t,e){return Do([t,0],this._axesLayout[e].transform);},getAxisLayout:function getAxisLayout(t){return i(this._axesLayout[t]);},getSlidedAxisExpandWindow:function getSlidedAxisExpandWindow(t){var e=this._makeLayoutInfo(),i=e.pixelDimIndex,n=e.axisExpandWindow.slice(),o=n[1]-n[0],a=[0,e.axisExpandWidth*(e.axisCount-1)];if(!this.containPoint(t))return{behavior:"none",axisExpandWindow:n};var r,s=t[i]-e.layoutBase-e.axisExpandWindow0Pos,l="slide",u=e.axisCollapseWidth,h=this._model.get("axisExpandSlideTriggerArea"),c=null!=h[0];if(u)c&&u&&s<o*h[0]?(l="jump",r=s-o*h[2]):c&&u&&s>o*(1-h[0])?(l="jump",r=s-o*(1-h[2])):(r=s-o*h[1])>=0&&(r=s-o*(1-h[1]))<=0&&(r=0),(r*=e.axisExpandWidth/u)?QL(r,n,a,"all"):l="none";else{o=n[1]-n[0];(n=[ik(0,a[1]*s/o-o/2)])[1]=ek(a[1],n[0]+o),n[0]=n[1]-o;}return{axisExpandWindow:n,behavior:l};}},Fa.register("parallel",{create:function create(t,e){var i=[];return t.eachComponent("parallel",function(n,o){var a=new Nf(n,t,e);a.name="parallel_"+o,a.resize(n,e),n.coordinateSystem=a,a.model=n,i.push(a);}),t.eachSeries(function(e){if("parallel"===e.get("coordinateSystem")){var i=t.queryComponents({mainType:"parallel",index:e.get("parallelIndex"),id:e.get("parallelId")})[0];e.coordinateSystem=i.coordinateSystem;}}),i;}});var sk=lI.extend({type:"baseParallelAxis",axis:null,activeIntervals:[],getAreaSelectStyle:function getAreaSelectStyle(){return Qb([["fill","color"],["lineWidth","borderWidth"],["stroke","borderColor"],["width","width"],["opacity","opacity"]])(this.getModel("areaSelectStyle"));},setActiveIntervals:function setActiveIntervals(t){var e=this.activeIntervals=i(t);if(e)for(var n=e.length-1;n>=0;n--){Fo(e[n]);}},getActiveState:function getActiveState(t){var e=this.activeIntervals;if(!e.length)return"normal";if(null==t||isNaN(t))return"inactive";if(1===e.length){var i=e[0];if(i[0]<=t&&t<=i[1])return"active";}else for(var n=0,o=e.length;n<o;n++){if(e[n][0]<=t&&t<=e[n][1])return"active";}return"inactive";}}),lk={type:"value",dim:null,areaSelectStyle:{width:20,borderWidth:1,borderColor:"rgba(160,197,232)",color:"rgba(160,197,232)",opacity:.3},realtime:!0,z:10};n(sk.prototype,UA),ED("parallel",sk,function(t,e){return e.type||(e.data?"category":"value");},lk),lI.extend({type:"parallel",dependencies:["parallelAxis"],coordinateSystem:null,dimensions:null,parallelAxisIndex:null,layoutMode:"box",defaultOption:{zlevel:0,z:0,left:80,top:60,right:80,bottom:60,layout:"horizontal",axisExpandable:!1,axisExpandCenter:null,axisExpandCount:0,axisExpandWidth:50,axisExpandRate:17,axisExpandDebounce:50,axisExpandSlideTriggerArea:[-.15,.05,.4],axisExpandTriggerOn:"click",parallelAxisDefault:null},init:function init(){lI.prototype.init.apply(this,arguments),this.mergeOption({});},mergeOption:function mergeOption(t){var e=this.option;t&&n(e,t,!0),this._initDimensions();},contains:function contains(t,e){var i=t.get("parallelIndex");return null!=i&&e.getComponent("parallel",i)===this;},setAxisExpand:function setAxisExpand(t){d(["axisExpandable","axisExpandCenter","axisExpandCount","axisExpandWidth","axisExpandWindow"],function(e){t.hasOwnProperty(e)&&(this.option[e]=t[e]);},this);},_initDimensions:function _initDimensions(){var t=this.dimensions=[],e=this.parallelAxisIndex=[];d(g(this.dependentModels.parallelAxis,function(t){return(t.get("parallelIndex")||0)===this.componentIndex;},this),function(i){t.push("dim"+i.get("dim")),e.push(i.componentIndex);});}}),Es({type:"axisAreaSelect",event:"axisAreaSelected"},function(t,e){e.eachComponent({mainType:"parallelAxis",query:t},function(e){e.axis.model.setActiveIntervals(t.intervals);});}),Es("parallelAxisExpand",function(t,e){e.eachComponent({mainType:"parallel",query:t},function(e){e.setAxisExpand(t);});});var uk=v,hk=d,ck=f,dk=Math.min,fk=Math.max,pk=Math.pow,gk=1e4,mk=6,vk=6,yk="globalPan",xk={w:[0,0],e:[0,1],n:[1,0],s:[1,1]},_k={w:"ew",e:"ew",n:"ns",s:"ns",ne:"nesw",sw:"nesw",nw:"nwse",se:"nwse"},wk={brushStyle:{lineWidth:2,stroke:"rgba(0,0,0,0.3)",fill:"rgba(0,0,0,0.1)"},transformable:!0,brushMode:"single",removeOnClick:!1},bk=0;zf.prototype={constructor:zf,enableBrush:function enableBrush(t){return this._brushType&&Vf(this),t.brushType&&Bf(this,t),this;},setPanels:function setPanels(t){if(t&&t.length){var e=this._panels={};d(t,function(t){e[t.panelId]=i(t);});}else this._panels=null;return this;},mount:function mount(t){t=t||{},this._enableGlobalPan=t.enableGlobalPan;var e=this.group;return this._zr.add(e),e.attr({position:t.position||[0,0],rotation:t.rotation||0,scale:t.scale||[1,1]}),this._transform=e.getLocalTransform(),this;},eachCover:function eachCover(t,e){hk(this._covers,t,e);},updateCovers:function updateCovers(t){function e(t,e){return(null!=t.id?t.id:a+e)+"-"+t.brushType;}function o(e,i){var n=t[e];if(null!=i&&r[i]===u)s[e]=r[i];else{var o=s[e]=null!=i?(r[i].__brushOption=n,r[i]):Ff(l,Gf(l,n));Zf(l,o);}}t=f(t,function(t){return n(i(wk),t,!0);});var a="\0-brush-index-",r=this._covers,s=this._covers=[],l=this,u=this._creatingCover;return new Xs(r,t,function(t,i){return e(t.__brushOption,i);},e).add(o).update(o).remove(function(t){r[t]!==u&&l.group.remove(r[t]);}).execute(),this;},unmount:function unmount(){return this.enableBrush(!1),Yf(this),this._zr.remove(this.group),this;},dispose:function dispose(){this.unmount(),this.off();}},h(zf,fw);var Sk={mousedown:function mousedown(t){if(this._dragging)mp.call(this,t);else if(!t.target||!t.target.draggable){dp(t);var e=this.group.transformCoordToLocal(t.offsetX,t.offsetY);this._creatingCover=null,(this._creatingPanel=Xf(this,t,e))&&(this._dragging=!0,this._track=[e.slice()]);}},mousemove:function mousemove(t){var e=this.group.transformCoordToLocal(t.offsetX,t.offsetY);if(cp(this,t,e),this._dragging){dp(t);var i=pp(this,t,e,!1);i&&qf(this,i);}},mouseup:mp},Mk={lineX:vp(0),lineY:vp(1),rect:{createCover:function createCover(t,e){return Jf(uk(rp,function(t){return t;},function(t){return t;}),t,e,["w","e","n","s","se","sw","ne","nw"]);},getCreatingRange:function getCreatingRange(t){var e=$f(t);return np(e[1][0],e[1][1],e[0][0],e[0][1]);},updateCoverShape:function updateCoverShape(t,e,i,n){Qf(t,e,i,n);},updateCommon:tp,contain:fp},polygon:{createCover:function createCover(t,e){var i=new tb();return i.add(new gM({name:"main",style:ip(e),silent:!0})),i;},getCreatingRange:function getCreatingRange(t){return t;},endCreating:function endCreating(t,e){e.remove(e.childAt(0)),e.add(new pM({name:"main",draggable:!0,drift:uk(sp,t,e),ondragend:uk(qf,t,{isEnd:!0})}));},updateCoverShape:function updateCoverShape(t,e,i,n){e.childAt(0).setShape({points:up(t,e,i)});},updateCommon:tp,contain:fp}},Ik=["axisLine","axisTickLabel","axisName"],Tk=Ws({type:"parallelAxis",init:function init(t,e){Tk.superApply(this,"init",arguments),(this._brushController=new zf(e.getZr())).on("brush",m(this._onBrush,this));},render:function render(t,e,i,n){if(!bp(t,e,n)){this.axisModel=t,this.api=i,this.group.removeAll();var o=this._axisGroup;if(this._axisGroup=new tb(),this.group.add(this._axisGroup),t.get("show")){var r=Mp(t,e),s=r.coordinateSystem,l=t.getAreaSelectStyle(),u=l.width,h=t.axis.dim,c=a({strokeContainThreshold:u},s.getAxisLayout(h)),f=new FD(t,c);d(Ik,f.add,f),this._axisGroup.add(f.getGroup()),this._refreshBrushController(c,l,t,r,u,i);var p=n&&!1===n.animation?null:t;Lo(o,this._axisGroup,p);}}},_refreshBrushController:function _refreshBrushController(t,e,i,n,o,a){var r=i.axis.getExtent(),s=r[1]-r[0],l=Math.min(30,.1*Math.abs(s)),u=de.create({x:r[0],y:-o/2,width:s,height:o});u.x-=l,u.width+=2*l,this._brushController.mount({enableGlobalPan:!0,rotation:t.rotation,position:t.position}).setPanels([{panelId:"pl",clipPath:yp(u),isTargetByCursor:_p(u,a,n),getLinearBrushOtherExtent:xp(u,0)}]).enableBrush({brushType:"lineX",brushStyle:e,removeOnClick:!0}).updateCovers(Sp(i));},_onBrush:function _onBrush(t,e){var i=this.axisModel,n=i.axis,o=f(t,function(t){return[n.coordToData(t.range[0],!0),n.coordToData(t.range[1],!0)];});(!i.option.realtime===e.isEnd||e.removeOnClick)&&this.api.dispatchAction({type:"axisAreaSelect",parallelAxisId:i.id,intervals:o});},dispose:function dispose(){this._brushController.dispose();}});Ws({type:"parallel",render:function render(t,e,i){this._model=t,this._api=i,this._handlers||(this._handlers={},d(Ak,function(t,e){i.getZr().on(e,this._handlers[e]=m(t,this));},this)),Nr(this,"_throttledDispatchExpand",t.get("axisExpandRate"),"fixRate");},dispose:function dispose(t,e){d(this._handlers,function(t,i){e.getZr().off(i,t);}),this._handlers=null;},_throttledDispatchExpand:function _throttledDispatchExpand(t){this._dispatchExpand(t);},_dispatchExpand:function _dispatchExpand(t){t&&this._api.dispatchAction(a({type:"parallelAxisExpand"},t));}});var Ak={mousedown:function mousedown(t){Ip(this,"click")&&(this._mouseDownPoint=[t.offsetX,t.offsetY]);},mouseup:function mouseup(t){var e=this._mouseDownPoint;if(Ip(this,"click")&&e){var i=[t.offsetX,t.offsetY];if(Math.pow(e[0]-i[0],2)+Math.pow(e[1]-i[1],2)>5)return;var n=this._model.coordinateSystem.getSlidedAxisExpandWindow([t.offsetX,t.offsetY]);"none"!==n.behavior&&this._dispatchExpand({axisExpandWindow:n.axisExpandWindow});}this._mouseDownPoint=null;},mousemove:function mousemove(t){if(!this._mouseDownPoint&&Ip(this,"mousemove")){var e=this._model,i=e.coordinateSystem.getSlidedAxisExpandWindow([t.offsetX,t.offsetY]),n=i.behavior;"jump"===n&&this._throttledDispatchExpand.debounceNextCall(e.get("axisExpandDebounce")),this._throttledDispatchExpand("none"===n?null:{axisExpandWindow:i.axisExpandWindow,animation:"jump"===n&&null});}}};Ns(function(t){Cf(t),Lf(t);}),YI.extend({type:"series.parallel",dependencies:["parallel"],visualColorAccessPath:"lineStyle.color",getInitialData:function getInitialData(t,e){var i=this.getSource();return Tp(i,this),ml(i,this);},getRawIndicesByActiveState:function getRawIndicesByActiveState(t){var e=this.coordinateSystem,i=this.getData(),n=[];return e.eachActiveState(i,function(e,o){t===e&&n.push(i.getRawIndex(o));}),n;},defaultOption:{zlevel:0,z:2,coordinateSystem:"parallel",parallelIndex:0,label:{show:!1},inactiveOpacity:.05,activeOpacity:1,lineStyle:{width:1,opacity:.45,type:"solid"},emphasis:{label:{show:!1}},progressive:500,smooth:!1,animationEasing:"linear"}});var Dk=.3,Ck=(Ar.extend({type:"parallel",init:function init(){this._dataGroup=new tb(),this.group.add(this._dataGroup),this._data,this._initialized;},render:function render(t,e,i,n){var o=this._dataGroup,a=t.getData(),r=this._data,s=t.coordinateSystem,l=s.dimensions,u=kp(t);if(a.diff(r).add(function(t){Pp(Lp(a,o,t,l,s),a,t,u);}).update(function(e,i){var o=r.getItemGraphicEl(i),h=Cp(a,e,l,s);a.setItemGraphicEl(e,o),Io(o,{shape:{points:h}},n&&!1===n.animation?null:t,e),Pp(o,a,e,u);}).remove(function(t){var e=r.getItemGraphicEl(t);o.remove(e);}).execute(),!this._initialized){this._initialized=!0;var h=Dp(s,t,function(){setTimeout(function(){o.removeClipPath();});});o.setClipPath(h);}this._data=a;},incrementalPrepareRender:function incrementalPrepareRender(t,e,i){this._initialized=!0,this._data=null,this._dataGroup.removeAll();},incrementalRender:function incrementalRender(t,e,i){for(var n=e.getData(),o=e.coordinateSystem,a=o.dimensions,r=kp(e),s=t.start;s<t.end;s++){var l=Lp(n,this._dataGroup,s,a,o);l.incremental=!0,Pp(l,n,s,r);}},dispose:function dispose(){},remove:function remove(){this._dataGroup&&this._dataGroup.removeAll(),this._data=null;}}),["lineStyle","normal","opacity"]);Bs({seriesType:"parallel",reset:function reset(t,e,i){var n=t.getModel("itemStyle"),o=t.getModel("lineStyle"),a=e.get("color"),r=o.get("color")||n.get("color")||a[t.seriesIndex%a.length],s=t.get("inactiveOpacity"),l=t.get("activeOpacity"),u=t.getModel("lineStyle").getLineStyle(),h=t.coordinateSystem,c=t.getData(),d={normal:u.opacity,active:l,inactive:s};return c.setVisual("color",r),{progress:function progress(t,e){h.eachActiveState(e,function(t,i){var n=d[t];if("normal"===t&&e.hasItemOption){var o=e.getItemModel(i).get(Ck,!0);null!=o&&(n=o);}e.setItemVisual(i,"opacity",n);},t.start,t.end);}};}});var Lk=YI.extend({type:"series.sankey",layoutInfo:null,getInitialData:function getInitialData(t){var e=t.edges||t.links,i=t.data||t.nodes;if(i&&e)return DL(i,e,this,!0).data;},setNodePosition:function setNodePosition(t,e){var i=this.option.data[t];i.localX=e[0],i.localY=e[1];},getGraph:function getGraph(){return this.getData().graph;},getEdgeData:function getEdgeData(){return this.getGraph().edgeData;},formatTooltip:function formatTooltip(t,e,i){if("edge"===i){var n=this.getDataParams(t,i),o=n.data,a=o.source+" -- "+o.target;return n.value&&(a+=" : "+n.value),ia(a);}return Lk.superCall(this,"formatTooltip",t,e);},optionUpdated:function optionUpdated(){var t=this.option;!0===t.focusNodeAdjacency&&(t.focusNodeAdjacency="allEdges");},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",layout:null,left:"5%",top:"5%",right:"20%",bottom:"5%",orient:"horizontal",nodeWidth:20,nodeGap:8,draggable:!0,focusNodeAdjacency:!1,layoutIterations:32,label:{show:!0,position:"right",color:"#000",fontSize:12},itemStyle:{borderWidth:1,borderColor:"#333"},lineStyle:{color:"#314656",opacity:.2,curveness:.5},emphasis:{label:{show:!0},lineStyle:{opacity:.6}},animationEasing:"linear",animationDuration:1e3}}),kk=["itemStyle","opacity"],Pk=["lineStyle","opacity"],Nk=Un({shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,cpx2:0,cpy2:0,extent:0,orient:""},buildPath:function buildPath(t,e){var i=e.extent;"vertical"===e.orient?(t.moveTo(e.x1,e.y1),t.bezierCurveTo(e.cpx1,e.cpy1,e.cpx2,e.cpy2,e.x2,e.y2),t.lineTo(e.x2+i,e.y2),t.bezierCurveTo(e.cpx2+i,e.cpy2,e.cpx1+i,e.cpy1,e.x1+i,e.y1)):(t.moveTo(e.x1,e.y1),t.bezierCurveTo(e.cpx1,e.cpy1,e.cpx2,e.cpy2,e.x2,e.y2),t.lineTo(e.x2,e.y2+i),t.bezierCurveTo(e.cpx2,e.cpy2+i,e.cpx1,e.cpy1+i,e.x1,e.y1+i)),t.closePath();}});Zs({type:"sankey",_model:null,_focusAdjacencyDisabled:!1,render:function render(t,e,i){var n=this,o=t.getGraph(),a=this.group,r=t.layoutInfo,s=r.width,l=r.height,u=t.getData(),h=t.getData("edge"),c=t.get("orient");this._model=t,a.removeAll(),a.attr("position",[r.x,r.y]),o.eachEdge(function(e){var i=new Nk();i.dataIndex=e.dataIndex,i.seriesIndex=t.seriesIndex,i.dataType="edge";var n,o,r,u,d,f,p,g,m=e.getModel("lineStyle"),v=m.get("curveness"),y=e.node1.getLayout(),x=e.node1.getModel(),_=x.get("localX"),w=x.get("localY"),b=e.node2.getLayout(),S=e.node2.getModel(),M=S.get("localX"),I=S.get("localY"),T=e.getLayout();switch(i.shape.extent=Math.max(1,T.dy),i.shape.orient=c,"vertical"===c?(n=(null!=_?_*s:y.x)+T.sy,o=(null!=w?w*l:y.y)+y.dy,r=(null!=M?M*s:b.x)+T.ty,d=n,f=o*(1-v)+(u=null!=I?I*l:b.y)*v,p=r,g=o*v+u*(1-v)):(n=(null!=_?_*s:y.x)+y.dx,o=(null!=w?w*l:y.y)+T.sy,d=n*(1-v)+(r=null!=M?M*s:b.x)*v,f=o,p=n*v+r*(1-v),g=u=(null!=I?I*l:b.y)+T.ty),i.setShape({x1:n,y1:o,x2:r,y2:u,cpx1:d,cpy1:f,cpx2:p,cpy2:g}),i.setStyle(m.getItemStyle()),i.style.fill){case"source":i.style.fill=e.node1.getVisual("color");break;case"target":i.style.fill=e.node2.getVisual("color");}fo(i,e.getModel("emphasis.lineStyle").getItemStyle()),a.add(i),h.setItemGraphicEl(e.dataIndex,i);}),o.eachNode(function(e){var i=e.getLayout(),n=e.getModel(),o=n.get("localX"),r=n.get("localY"),h=n.getModel("label"),c=n.getModel("emphasis.label"),d=new yM({shape:{x:null!=o?o*s:i.x,y:null!=r?r*l:i.y,width:i.dx,height:i.dy},style:n.getModel("itemStyle").getItemStyle()}),f=e.getModel("emphasis.itemStyle").getItemStyle();go(d.style,f,h,c,{labelFetcher:t,labelDataIndex:e.dataIndex,defaultText:e.id,isRectText:!0}),d.setStyle("fill",e.getVisual("color")),fo(d,f),a.add(d),u.setItemGraphicEl(e.dataIndex,d),d.dataType="node";}),u.eachItemGraphicEl(function(e,o){var a=u.getItemModel(o);a.get("draggable")&&(e.drift=function(e,a){n._focusAdjacencyDisabled=!0,this.shape.x+=e,this.shape.y+=a,this.dirty(),i.dispatchAction({type:"dragNode",seriesId:t.id,dataIndex:u.getRawIndex(o),localX:this.shape.x/s,localY:this.shape.y/l});},e.ondragend=function(){n._focusAdjacencyDisabled=!1;},e.draggable=!0,e.cursor="move"),a.get("focusNodeAdjacency")&&(e.off("mouseover").on("mouseover",function(){n._focusAdjacencyDisabled||i.dispatchAction({type:"focusNodeAdjacency",seriesId:t.id,dataIndex:e.dataIndex});}),e.off("mouseout").on("mouseout",function(){n._focusAdjacencyDisabled||i.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t.id});}));}),h.eachItemGraphicEl(function(e,o){h.getItemModel(o).get("focusNodeAdjacency")&&(e.off("mouseover").on("mouseover",function(){n._focusAdjacencyDisabled||i.dispatchAction({type:"focusNodeAdjacency",seriesId:t.id,edgeDataIndex:e.dataIndex});}),e.off("mouseout").on("mouseout",function(){n._focusAdjacencyDisabled||i.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t.id});}));}),!this._data&&t.get("animation")&&a.setClipPath(zp(a.getBoundingRect(),t,function(){a.removeClipPath();})),this._data=t.getData();},dispose:function dispose(){},focusNodeAdjacency:function focusNodeAdjacency(t,e,i,n){var o=this._model.getData(),a=o.graph,r=n.dataIndex,s=o.getItemModel(r),l=n.edgeDataIndex;if(null!=r||null!=l){var u=a.getNodeByIndex(r),h=a.getEdgeByIndex(l);if(a.eachNode(function(t){Ep(t,kk,.1);}),a.eachEdge(function(t){Ep(t,Pk,.1);}),u){Rp(u,kk);var c=s.get("focusNodeAdjacency");"outEdges"===c?d(u.outEdges,function(t){t.dataIndex<0||(Rp(t,Pk),Rp(t.node2,kk));}):"inEdges"===c?d(u.inEdges,function(t){t.dataIndex<0||(Rp(t,Pk),Rp(t.node1,kk));}):"allEdges"===c&&d(u.edges,function(t){t.dataIndex<0||(Rp(t,Pk),Rp(t.node1,kk),Rp(t.node2,kk));});}h&&(Rp(h,Pk),Rp(h.node1,kk),Rp(h.node2,kk));}},unfocusNodeAdjacency:function unfocusNodeAdjacency(t,e,i,n){var o=this._model.getGraph();o.eachNode(function(t){Ep(t,kk);}),o.eachEdge(function(t){Ep(t,Pk);});}}),Es({type:"dragNode",event:"dragNode",update:"update"},function(t,e){e.eachComponent({mainType:"series",subType:"sankey",query:t},function(e){e.setNodePosition(t.dataIndex,[t.localX,t.localY]);});});zs(function(t,e,i){t.eachSeriesByType("sankey",function(t){var i=t.get("nodeWidth"),n=t.get("nodeGap"),o=Bp(t,e);t.layoutInfo=o;var a=o.width,r=o.height,s=t.getGraph(),l=s.nodes,u=s.edges;Gp(l),Vp(l,u,i,n,a,r,0!==g(l,function(t){return 0===t.getLayout().value;}).length?0:t.get("layoutIterations"),t.get("orient"));});}),Bs(function(t,e){t.eachSeriesByType("sankey",function(t){var e=t.getGraph().nodes;if(e.length){var i=1/0,n=-1/0;d(e,function(t){var e=t.getLayout().value;e<i&&(i=e),e>n&&(n=e);}),d(e,function(e){var o=new hL({type:"color",mappingMethod:"linear",dataExtent:[i,n],visual:t.get("color")}).mapValueToVisual(e.getLayout().value);e.setVisual("color",o);var a=e.getModel().get("itemStyle.color");null!=a&&e.setVisual("color",a);});}});});var Ok={_baseAxisDim:null,getInitialData:function getInitialData(t,e){var i,n,o=e.getComponent("xAxis",this.get("xAxisIndex")),a=e.getComponent("yAxis",this.get("yAxisIndex")),r=o.get("type"),s=a.get("type");"category"===r?(t.layout="horizontal",i=o.getOrdinalMeta(),n=!0):"category"===s?(t.layout="vertical",i=a.getOrdinalMeta(),n=!0):t.layout=t.layout||"horizontal";var l=["x","y"],u="horizontal"===t.layout?0:1,h=this._baseAxisDim=l[u],c=l[1-u],f=[o,a],p=f[u].get("type"),g=f[1-u].get("type"),m=t.data;if(m&&n){var v=[];d(m,function(t,e){var i;t.value&&y(t.value)?(i=t.value.slice(),t.value.unshift(e)):y(t)?(i=t.slice(),t.unshift(e)):i=t,v.push(i);}),t.data=v;}var x=this.defaultValueDimensions;return oC(this,{coordDimensions:[{name:h,type:qs(p),ordinalMeta:i,otherDims:{tooltip:!1,itemName:0},dimsDef:["base"]},{name:c,type:qs(g),dimsDef:x.slice()}],dimensionsCount:x.length+1});},getBaseAxis:function getBaseAxis(){var t=this._baseAxisDim;return this.ecModel.getComponent(t+"Axis",this.get(t+"AxisIndex")).axis;}};h(YI.extend({type:"series.boxplot",dependencies:["xAxis","yAxis","grid"],defaultValueDimensions:[{name:"min",defaultTooltip:!0},{name:"Q1",defaultTooltip:!0},{name:"median",defaultTooltip:!0},{name:"Q3",defaultTooltip:!0},{name:"max",defaultTooltip:!0}],dimensions:null,defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,layout:null,boxWidth:[7,50],itemStyle:{color:"#fff",borderWidth:1},emphasis:{itemStyle:{borderWidth:2,shadowBlur:5,shadowOffsetX:2,shadowOffsetY:2,shadowColor:"rgba(0,0,0,0.4)"}},animationEasing:"elasticOut",animationDuration:800}}),Ok,!0);var Ek=["itemStyle"],Rk=["emphasis","itemStyle"],zk=(Ar.extend({type:"boxplot",render:function render(t,e,i){var n=t.getData(),o=this.group,a=this._data;this._data||o.removeAll();var r="horizontal"===t.get("layout")?1:0;n.diff(a).add(function(t){if(n.hasValue(t)){var e=ig(n.getItemLayout(t),n,t,r,!0);n.setItemGraphicEl(t,e),o.add(e);}}).update(function(t,e){var i=a.getItemGraphicEl(e);if(n.hasValue(t)){var s=n.getItemLayout(t);i?ng(s,i,n,t):i=ig(s,n,t,r),o.add(i),n.setItemGraphicEl(t,i);}else o.remove(i);}).remove(function(t){var e=a.getItemGraphicEl(t);e&&o.remove(e);}).execute(),this._data=n;},remove:function remove(t){var e=this.group,i=this._data;this._data=null,i&&i.eachItemGraphicEl(function(t){t&&e.remove(t);});},dispose:B}),Pn.extend({type:"boxplotBoxPath",shape:{},buildPath:function buildPath(t,e){var i=e.points,n=0;for(t.moveTo(i[n][0],i[n][1]),n++;n<4;n++){t.lineTo(i[n][0],i[n][1]);}for(t.closePath();n<i.length;n++){t.moveTo(i[n][0],i[n][1]),n++,t.lineTo(i[n][0],i[n][1]);}}})),Bk=["itemStyle","borderColor"],Vk=d;Bs(function(t,e){var i=t.get("color");t.eachRawSeriesByType("boxplot",function(e){var n=i[e.seriesIndex%i.length],o=e.getData();o.setVisual({legendSymbol:"roundRect",color:e.get(Bk)||n}),t.isSeriesFiltered(e)||o.each(function(t){var e=o.getItemModel(t);o.setItemVisual(t,{color:e.get(Bk,!0)});});});}),zs(function(t){var e=ag(t);Vk(e,function(t){var e=t.seriesModels;e.length&&(rg(t),Vk(e,function(e,i){sg(e,t.boxOffsetList[i],t.boxWidthList[i]);}));});}),h(YI.extend({type:"series.candlestick",dependencies:["xAxis","yAxis","grid"],defaultValueDimensions:[{name:"open",defaultTooltip:!0},{name:"close",defaultTooltip:!0},{name:"lowest",defaultTooltip:!0},{name:"highest",defaultTooltip:!0}],dimensions:null,defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,layout:null,itemStyle:{color:"#c23531",color0:"#314656",borderWidth:1,borderColor:"#c23531",borderColor0:"#314656"},emphasis:{itemStyle:{borderWidth:2}},barMaxWidth:null,barMinWidth:null,barWidth:null,large:!0,largeThreshold:600,progressive:3e3,progressiveThreshold:1e4,progressiveChunkMode:"mod",animationUpdate:!1,animationEasing:"linear",animationDuration:300},getShadowDim:function getShadowDim(){return"open";},brushSelector:function brushSelector(t,e,i){var n=e.getItemLayout(t);return n&&i.rect(n.brushRect);}}),Ok,!0);var Gk=["itemStyle"],Fk=["emphasis","itemStyle"],Wk=["color","color0","borderColor","borderColor0"],Hk=(Ar.extend({type:"candlestick",render:function render(t,e,i){this._updateDrawMode(t),this._isLargeDraw?this._renderLarge(t):this._renderNormal(t);},incrementalPrepareRender:function incrementalPrepareRender(t,e,i){this._clear(),this._updateDrawMode(t);},incrementalRender:function incrementalRender(t,e,i,n){this._isLargeDraw?this._incrementalRenderLarge(t,e):this._incrementalRenderNormal(t,e);},_updateDrawMode:function _updateDrawMode(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear());},_renderNormal:function _renderNormal(t){var e=t.getData(),i=this._data,n=this.group,o=e.getLayout("isSimpleBox");this._data||n.removeAll(),e.diff(i).add(function(i){if(e.hasValue(i)){var a,r=e.getItemLayout(i);To(a=lg(r,0,!0),{shape:{points:r.ends}},t,i),ug(a,e,i,o),n.add(a),e.setItemGraphicEl(i,a);}}).update(function(a,r){var s=i.getItemGraphicEl(r);if(e.hasValue(a)){var l=e.getItemLayout(a);s?Io(s,{shape:{points:l.ends}},t,a):s=lg(l),ug(s,e,a,o),n.add(s),e.setItemGraphicEl(a,s);}else n.remove(s);}).remove(function(t){var e=i.getItemGraphicEl(t);e&&n.remove(e);}).execute(),this._data=e;},_renderLarge:function _renderLarge(t){this._clear(),cg(t,this.group);},_incrementalRenderNormal:function _incrementalRenderNormal(t,e){for(var i,n=e.getData(),o=n.getLayout("isSimpleBox");null!=(i=t.next());){var a;ug(a=lg(n.getItemLayout(i)),n,i,o),a.incremental=!0,this.group.add(a);}},_incrementalRenderLarge:function _incrementalRenderLarge(t,e){cg(e,this.group,!0);},remove:function remove(t){this._clear();},_clear:function _clear(){this.group.removeAll(),this._data=null;},dispose:B}),Pn.extend({type:"normalCandlestickBox",shape:{},buildPath:function buildPath(t,e){var i=e.points;this.__simpleBox?(t.moveTo(i[4][0],i[4][1]),t.lineTo(i[6][0],i[6][1])):(t.moveTo(i[0][0],i[0][1]),t.lineTo(i[1][0],i[1][1]),t.lineTo(i[2][0],i[2][1]),t.lineTo(i[3][0],i[3][1]),t.closePath(),t.moveTo(i[4][0],i[4][1]),t.lineTo(i[5][0],i[5][1]),t.moveTo(i[6][0],i[6][1]),t.lineTo(i[7][0],i[7][1]));}})),Zk=Pn.extend({type:"largeCandlestickBox",shape:{},buildPath:function buildPath(t,e){for(var i=e.points,n=0;n<i.length;){if(this.__sign===i[n++]){var o=i[n++];t.moveTo(o,i[n++]),t.lineTo(o,i[n++]);}else n+=3;}}}),Uk=["itemStyle","borderColor"],Xk=["itemStyle","borderColor0"],jk=["itemStyle","color"],Yk=["itemStyle","color0"],qk={seriesType:"candlestick",plan:$I(),performRawSeries:!0,reset:function reset(t,e){function i(t,e){return e.get(t>0?jk:Yk);}function n(t,e){return e.get(t>0?Uk:Xk);}var o=t.getData(),a=t.pipelineContext.large;if(o.setVisual({legendSymbol:"roundRect",colorP:i(1,t),colorN:i(-1,t),borderColorP:n(1,t),borderColorN:n(-1,t)}),!e.isSeriesFiltered(t))return!a&&{progress:function progress(t,e){for(var o;null!=(o=t.next());){var a=e.getItemModel(o),r=e.getItemLayout(o).sign;e.setItemVisual(o,{color:i(r,a),borderColor:n(r,a)});}}};}},Kk="undefined"!=typeof Float32Array?Float32Array:Array,$k={seriesType:"candlestick",plan:$I(),reset:function reset(t){var e=t.coordinateSystem,i=t.getData(),n=pg(t,i),o=0,a=1,r=["x","y"],s=i.mapDimension(r[o]),l=i.mapDimension(r[a],!0),u=l[0],h=l[1],c=l[2],d=l[3];if(i.setLayout({candleWidth:n,isSimpleBox:n<=1.3}),!(null==s||l.length<4))return{progress:t.pipelineContext.large?function(t,i){for(var n,r,l=new Kk(5*t.count),f=0,p=[],g=[];null!=(r=t.next());){var m=i.get(s,r),v=i.get(u,r),y=i.get(h,r),x=i.get(c,r),_=i.get(d,r);isNaN(m)||isNaN(x)||isNaN(_)?(l[f++]=NaN,f+=4):(l[f++]=fg(i,r,v,y,h),p[o]=m,p[a]=x,n=e.dataToPoint(p,null,g),l[f++]=n?n[0]:NaN,l[f++]=n?n[1]:NaN,p[a]=_,n=e.dataToPoint(p,null,g),l[f++]=n?n[1]:NaN);}i.setLayout("largePoints",l);}:function(t,i){function r(t,i){var n=[];return n[o]=i,n[a]=t,isNaN(i)||isNaN(t)?[NaN,NaN]:e.dataToPoint(n);}function l(t,e,i){var a=e.slice(),r=e.slice();a[o]=Jn(a[o]+n/2,1,!1),r[o]=Jn(r[o]-n/2,1,!0),i?t.push(a,r):t.push(r,a);}function f(t){return t[o]=Jn(t[o],1),t;}for(var p;null!=(p=t.next());){var g=i.get(s,p),m=i.get(u,p),v=i.get(h,p),y=i.get(c,p),x=i.get(d,p),_=Math.min(m,v),w=Math.max(m,v),b=r(_,g),S=r(w,g),M=r(y,g),I=r(x,g),T=[];l(T,S,0),l(T,b,1),T.push(f(I),f(S),f(M),f(b)),i.setItemLayout(p,{sign:fg(i,p,m,v,h),initBaseline:m>v?S[a]:b[a],ends:T,brushRect:function(t,e,i){var s=r(t,i),l=r(e,i);return s[o]-=n/2,l[o]-=n/2,{x:s[0],y:s[1],width:a?n:l[0]-s[0],height:a?l[1]-s[1]:n};}(y,x,g)});}}};}};Ns(function(t){t&&y(t.series)&&d(t.series,function(t){w(t)&&"k"===t.type&&(t.type="candlestick");});}),Bs(qk),zs($k),YI.extend({type:"series.effectScatter",dependencies:["grid","polar"],getInitialData:function getInitialData(t,e){return ml(this.getSource(),this);},brushSelector:"point",defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,effectType:"ripple",progressive:0,showEffectOn:"render",rippleEffect:{period:4,scale:2.5,brushType:"fill"},symbolSize:10}});var Jk=vg.prototype;Jk.stopEffectAnimation=function(){this.childAt(1).removeAll();},Jk.startEffectAnimation=function(t){for(var e=t.symbolType,i=t.color,n=this.childAt(1),o=0;o<3;o++){var a=Jl(e,-1,-1,2,2,i);a.attr({style:{strokeNoScale:!0},z2:99,silent:!0,scale:[.5,.5]});var r=-o/3*t.period+t.effectOffset;a.animate("",!0).when(t.period,{scale:[t.rippleScale/2,t.rippleScale/2]}).delay(r).start(),a.animateStyle(!0).when(t.period,{opacity:0}).delay(r).start(),n.add(a);}mg(n,t);},Jk.updateEffectAnimation=function(t){for(var e=this._effectCfg,i=this.childAt(1),n=["symbolType","period","rippleScale"],o=0;o<n.length;o++){var a=n[o];if(e[a]!==t[a])return this.stopEffectAnimation(),void this.startEffectAnimation(t);}mg(i,t);},Jk.highlight=function(){this.trigger("emphasis");},Jk.downplay=function(){this.trigger("normal");},Jk.updateData=function(t,e){var i=t.hostModel;this.childAt(0).updateData(t,e);var n=this.childAt(1),o=t.getItemModel(e),a=t.getItemVisual(e,"symbol"),r=gg(t.getItemVisual(e,"symbolSize")),s=t.getItemVisual(e,"color");n.attr("scale",r),n.traverse(function(t){t.attr({fill:s});});var l=o.getShallow("symbolOffset");if(l){var u=n.position;u[0]=Vo(l[0],r[0]),u[1]=Vo(l[1],r[1]);}n.rotation=(o.getShallow("symbolRotate")||0)*Math.PI/180||0;var h={};if(h.showEffectOn=i.get("showEffectOn"),h.rippleScale=o.get("rippleEffect.scale"),h.brushType=o.get("rippleEffect.brushType"),h.period=1e3*o.get("rippleEffect.period"),h.effectOffset=e/t.count(),h.z=o.getShallow("z")||0,h.zlevel=o.getShallow("zlevel")||0,h.symbolType=a,h.color=s,this.off("mouseover").off("mouseout").off("emphasis").off("normal"),"render"===h.showEffectOn)this._effectCfg?this.updateEffectAnimation(h):this.startEffectAnimation(h),this._effectCfg=h;else{this._effectCfg=null,this.stopEffectAnimation();var c=this.childAt(0),d=function d(){c.highlight(),"render"!==h.showEffectOn&&this.startEffectAnimation(h);},f=function f(){c.downplay(),"render"!==h.showEffectOn&&this.stopEffectAnimation();};this.on("mouseover",d,this).on("mouseout",f,this).on("emphasis",d,this).on("normal",f,this);}this._effectCfg=h;},Jk.fadeOut=function(t){this.off("mouseover").off("mouseout").off("emphasis").off("normal"),t&&t();},u(vg,tb),Zs({type:"effectScatter",init:function init(){this._symbolDraw=new Du(vg);},render:function render(t,e,i){var n=t.getData(),o=this._symbolDraw;o.updateData(n),this.group.add(o.group);},updateTransform:function updateTransform(t,e,i){var n=t.getData();this.group.dirty();var o=AD().reset(t);o.progress&&o.progress({start:0,end:n.count()},n),this._symbolDraw.updateLayout(n);},_updateGroupTransform:function _updateGroupTransform(t){var e=t.coordinateSystem;e&&e.getRoamTransform&&(this.group.transform=At(e.getRoamTransform()),this.group.decomposeTransform());},remove:function remove(t,e){this._symbolDraw&&this._symbolDraw.remove(e);},dispose:function dispose(){}}),Bs(TD("effectScatter","circle")),zs(AD("effectScatter"));var Qk="undefined"==typeof Uint32Array?Array:Uint32Array,tP="undefined"==typeof Float64Array?Array:Float64Array,eP=YI.extend({type:"series.lines",dependencies:["grid","polar"],visualColorAccessPath:"lineStyle.color",init:function init(t){t.data=t.data||[],yg(t);var e=this._processFlatCoordsArray(t.data);this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset,e.flatCoords&&(t.data=new Float32Array(e.count)),eP.superApply(this,"init",arguments);},mergeOption:function mergeOption(t){if(t.data=t.data||[],yg(t),t.data){var e=this._processFlatCoordsArray(t.data);this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset,e.flatCoords&&(t.data=new Float32Array(e.count));}eP.superApply(this,"mergeOption",arguments);},appendData:function appendData(t){var e=this._processFlatCoordsArray(t.data);e.flatCoords&&(this._flatCoords?(this._flatCoords=z(this._flatCoords,e.flatCoords),this._flatCoordsOffset=z(this._flatCoordsOffset,e.flatCoordsOffset)):(this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset),t.data=new Float32Array(e.count)),this.getRawData().appendData(t.data);},_getCoordsFromItemModel:function _getCoordsFromItemModel(t){var e=this.getData().getItemModel(t);return e.option instanceof Array?e.option:e.getShallow("coords");},getLineCoordsCount:function getLineCoordsCount(t){return this._flatCoordsOffset?this._flatCoordsOffset[2*t+1]:this._getCoordsFromItemModel(t).length;},getLineCoords:function getLineCoords(t,e){if(this._flatCoordsOffset){for(var i=this._flatCoordsOffset[2*t],n=this._flatCoordsOffset[2*t+1],o=0;o<n;o++){e[o]=e[o]||[],e[o][0]=this._flatCoords[i+2*o],e[o][1]=this._flatCoords[i+2*o+1];}return n;}for(var a=this._getCoordsFromItemModel(t),o=0;o<a.length;o++){e[o]=e[o]||[],e[o][0]=a[o][0],e[o][1]=a[o][1];}return a.length;},_processFlatCoordsArray:function _processFlatCoordsArray(t){var e=0;if(this._flatCoords&&(e=this._flatCoords.length),"number"==typeof t[0]){for(var i=t.length,n=new Qk(i),o=new tP(i),a=0,r=0,s=0,l=0;l<i;){s++;var u=t[l++];n[r++]=a+e,n[r++]=u;for(var h=0;h<u;h++){var c=t[l++],d=t[l++];o[a++]=c,o[a++]=d;}}return{flatCoordsOffset:new Uint32Array(n.buffer,0,r),flatCoords:o,count:s};}return{flatCoordsOffset:null,flatCoords:null,count:t.length};},getInitialData:function getInitialData(t,e){var i=new vA(["value"],this);return i.hasItemOption=!1,i.initData(t.data,[],function(t,e,n,o){if(t instanceof Array)return NaN;i.hasItemOption=!0;var a=t.value;return null!=a?a instanceof Array?a[o]:a:void 0;}),i;},formatTooltip:function formatTooltip(t){var e=this.getData().getItemModel(t),i=e.get("name");if(i)return i;var n=e.get("fromName"),o=e.get("toName"),a=[];return null!=n&&a.push(n),null!=o&&a.push(o),ia(a.join(" > "));},preventIncremental:function preventIncremental(){return!!this.get("effect.show");},getProgressive:function getProgressive(){var t=this.option.progressive;return null==t?this.option.large?1e4:this.get("progressive"):t;},getProgressiveThreshold:function getProgressiveThreshold(){var t=this.option.progressiveThreshold;return null==t?this.option.large?2e4:this.get("progressiveThreshold"):t;},defaultOption:{coordinateSystem:"geo",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,xAxisIndex:0,yAxisIndex:0,symbol:["none","none"],symbolSize:[10,10],geoIndex:0,effect:{show:!1,period:4,constantSpeed:0,symbol:"circle",symbolSize:3,loop:!0,trailLength:.2},large:!1,largeThreshold:2e3,polyline:!1,label:{show:!1,position:"end"},lineStyle:{opacity:.5}}}),iP=xg.prototype;iP.createLine=function(t,e,i){return new rf(t,e,i);},iP._updateEffectSymbol=function(t,e){var i=t.getItemModel(e).getModel("effect"),n=i.get("symbolSize"),o=i.get("symbol");y(n)||(n=[n,n]);var a=i.get("color")||t.getItemVisual(e,"color"),r=this.childAt(1);this._symbolType!==o&&(this.remove(r),(r=Jl(o,-.5,-.5,1,1,a)).z2=100,r.culling=!0,this.add(r)),r&&(r.setStyle("shadowColor",a),r.setStyle(i.getItemStyle(["color"])),r.attr("scale",n),r.setColor(a),r.attr("scale",n),this._symbolType=o,this._updateEffectAnimation(t,i,e));},iP._updateEffectAnimation=function(t,e,i){var n=this.childAt(1);if(n){var o=this,a=t.getItemLayout(i),r=1e3*e.get("period"),s=e.get("loop"),l=e.get("constantSpeed"),u=T(e.get("delay"),function(e){return e/t.count()*r/3;}),h="function"==typeof u;if(n.ignore=!0,this.updateAnimationPoints(n,a),l>0&&(r=this.getLineLength(n)/l*1e3),r!==this._period||s!==this._loop){n.stopAnimation();var c=u;h&&(c=u(i)),n.__t>0&&(c=-r*n.__t),n.__t=0;var d=n.animate("",s).when(r,{__t:1}).delay(c).during(function(){o.updateSymbolPosition(n);});s||d.done(function(){o.remove(n);}),d.start();}this._period=r,this._loop=s;}},iP.getLineLength=function(t){return uw(t.__p1,t.__cp1)+uw(t.__cp1,t.__p2);},iP.updateAnimationPoints=function(t,e){t.__p1=e[0],t.__p2=e[1],t.__cp1=e[2]||[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2];},iP.updateData=function(t,e,i){this.childAt(0).updateData(t,e,i),this._updateEffectSymbol(t,e);},iP.updateSymbolPosition=function(t){var e=t.__p1,i=t.__p2,n=t.__cp1,o=t.__t,a=t.position,r=sn,s=ln;a[0]=r(e[0],n[0],i[0],o),a[1]=r(e[1],n[1],i[1],o);var l=s(e[0],n[0],i[0],o),u=s(e[1],n[1],i[1],o);t.rotation=-Math.atan2(u,l)-Math.PI/2,t.ignore=!1;},iP.updateLayout=function(t,e){this.childAt(0).updateLayout(t,e);var i=t.getItemModel(e).getModel("effect");this._updateEffectAnimation(t,i,e);},u(xg,tb);var nP=_g.prototype;nP._createPolyline=function(t,e,i){var n=t.getItemLayout(e),o=new gM({shape:{points:n}});this.add(o),this._updateCommonStl(t,e,i);},nP.updateData=function(t,e,i){var n=t.hostModel;Io(this.childAt(0),{shape:{points:t.getItemLayout(e)}},n,e),this._updateCommonStl(t,e,i);},nP._updateCommonStl=function(t,e,i){var n=this.childAt(0),o=t.getItemModel(e),a=t.getItemVisual(e,"color"),s=i&&i.lineStyle,l=i&&i.hoverLineStyle;i&&!t.hasItemOption||(s=o.getModel("lineStyle").getLineStyle(),l=o.getModel("emphasis.lineStyle").getLineStyle()),n.useStyle(r({strokeNoScale:!0,fill:"none",stroke:a},s)),n.hoverStyle=l,fo(this);},nP.updateLayout=function(t,e){this.childAt(0).setShape("points",t.getItemLayout(e));},u(_g,tb);var oP=wg.prototype;oP.createLine=function(t,e,i){return new _g(t,e,i);},oP.updateAnimationPoints=function(t,e){this._points=e;for(var i=[0],n=0,o=1;o<e.length;o++){var a=e[o-1],r=e[o];n+=uw(a,r),i.push(n);}if(0!==n){for(o=0;o<i.length;o++){i[o]/=n;}this._offsets=i,this._length=n;}},oP.getLineLength=function(t){return this._length;},oP.updateSymbolPosition=function(t){var e=t.__t,i=this._points,n=this._offsets,o=i.length;if(n){var a=this._lastFrame;if(e<this._lastFramePercent){for(r=Math.min(a+1,o-1);r>=0&&!(n[r]<=e);r--){;}r=Math.min(r,o-2);}else{for(var r=a;r<o&&!(n[r]>e);r++){;}r=Math.min(r-1,o-2);}J(t.position,i[r],i[r+1],(e-n[r])/(n[r+1]-n[r]));var s=i[r+1][0]-i[r][0],l=i[r+1][1]-i[r][1];t.rotation=-Math.atan2(l,s)-Math.PI/2,this._lastFrame=r,this._lastFramePercent=e,t.ignore=!1;}},u(wg,xg);var aP=Un({shape:{polyline:!1,curveness:0,segs:[]},buildPath:function buildPath(t,e){var i=e.segs,n=e.curveness;if(e.polyline)for(r=0;r<i.length;){var o=i[r++];if(o>0){t.moveTo(i[r++],i[r++]);for(var a=1;a<o;a++){t.lineTo(i[r++],i[r++]);}}}else for(var r=0;r<i.length;){var s=i[r++],l=i[r++],u=i[r++],h=i[r++];if(t.moveTo(s,l),n>0){var c=(s+u)/2-(l-h)*n,d=(l+h)/2-(u-s)*n;t.quadraticCurveTo(c,d,u,h);}else t.lineTo(u,h);}},findDataIndex:function findDataIndex(t,e){var i=this.shape,n=i.segs,o=i.curveness;if(i.polyline)for(var a=0,r=0;r<n.length;){var s=n[r++];if(s>0)for(var l=n[r++],u=n[r++],h=1;h<s;h++){if(yn(l,u,c=n[r++],d=n[r++]))return a;}a++;}else for(var a=0,r=0;r<n.length;){var l=n[r++],u=n[r++],c=n[r++],d=n[r++];if(o>0){if(_n(l,u,(l+c)/2-(u-d)*o,(u+d)/2-(c-l)*o,c,d))return a;}else if(yn(l,u,c,d))return a;a++;}return-1;}}),rP=bg.prototype;rP.isPersistent=function(){return!this._incremental;},rP.updateData=function(t){this.group.removeAll();var e=new aP({rectHover:!0,cursor:"default"});e.setShape({segs:t.getLayout("linesPoints")}),this._setCommon(e,t),this.group.add(e),this._incremental=null;},rP.incrementalPrepareUpdate=function(t){this.group.removeAll(),this._clearIncremental(),t.count()>5e5?(this._incremental||(this._incremental=new Zn({silent:!0})),this.group.add(this._incremental)):this._incremental=null;},rP.incrementalUpdate=function(t,e){var i=new aP();i.setShape({segs:e.getLayout("linesPoints")}),this._setCommon(i,e,!!this._incremental),this._incremental?this._incremental.addDisplayable(i,!0):(i.rectHover=!0,i.cursor="default",i.__startIndex=t.start,this.group.add(i));},rP.remove=function(){this._clearIncremental(),this._incremental=null,this.group.removeAll();},rP._setCommon=function(t,e,i){var n=e.hostModel;t.setShape({polyline:n.get("polyline"),curveness:n.get("lineStyle.curveness")}),t.useStyle(n.getModel("lineStyle").getLineStyle()),t.style.strokeNoScale=!0;var o=e.getVisual("color");o&&t.setStyle("stroke",o),t.setStyle("fill"),i||(t.seriesIndex=n.seriesIndex,t.on("mousemove",function(e){t.dataIndex=null;var i=t.findDataIndex(e.offsetX,e.offsetY);i>0&&(t.dataIndex=i+t.__startIndex);}));},rP._clearIncremental=function(){var t=this._incremental;t&&t.clearDisplaybles();};var sP={seriesType:"lines",plan:$I(),reset:function reset(t){var e=t.coordinateSystem,i=t.get("polyline"),n=t.pipelineContext.large;return{progress:function progress(o,a){var r=[];if(n){var s,l=o.end-o.start;if(i){for(var u=0,h=o.start;h<o.end;h++){u+=t.getLineCoordsCount(h);}s=new Float32Array(l+2*u);}else s=new Float32Array(4*l);for(var c=0,d=[],h=o.start;h<o.end;h++){g=t.getLineCoords(h,r),i&&(s[c++]=g);for(var f=0;f<g;f++){d=e.dataToPoint(r[f],!1,d),s[c++]=d[0],s[c++]=d[1];}}a.setLayout("linesPoints",s);}else for(h=o.start;h<o.end;h++){var p=a.getItemModel(h),g=t.getLineCoords(h,r),m=[];if(i)for(var v=0;v<g;v++){m.push(e.dataToPoint(r[v]));}else{m[0]=e.dataToPoint(r[0]),m[1]=e.dataToPoint(r[1]);var y=p.get("lineStyle.curveness");+y&&(m[2]=[(m[0][0]+m[1][0])/2-(m[0][1]-m[1][1])*y,(m[0][1]+m[1][1])/2-(m[1][0]-m[0][0])*y]);}a.setItemLayout(h,m);}}};}};Zs({type:"lines",init:function init(){},render:function render(t,e,i){var n=t.getData(),o=this._updateLineDraw(n,t),a=t.get("zlevel"),r=t.get("effect.trailLength"),s=i.getZr(),l="svg"===s.painter.getType();l||s.painter.getLayer(a).clear(!0),null==this._lastZlevel||l||s.configLayer(this._lastZlevel,{motionBlur:!1}),this._showEffect(t)&&r&&(l||s.configLayer(a,{motionBlur:!0,lastFrameAlpha:Math.max(Math.min(r/10+.9,1),0)})),o.updateData(n),this._lastZlevel=a,this._finished=!0;},incrementalPrepareRender:function incrementalPrepareRender(t,e,i){var n=t.getData();this._updateLineDraw(n,t).incrementalPrepareUpdate(n),this._clearLayer(i),this._finished=!1;},incrementalRender:function incrementalRender(t,e,i){this._lineDraw.incrementalUpdate(t,e.getData()),this._finished=t.end===e.getData().count();},updateTransform:function updateTransform(t,e,i){var n=t.getData(),o=t.pipelineContext;if(!this._finished||o.large||o.progressiveRender)return{update:!0};var a=sP.reset(t);a.progress&&a.progress({start:0,end:n.count()},n),this._lineDraw.updateLayout(),this._clearLayer(i);},_updateLineDraw:function _updateLineDraw(t,e){var i=this._lineDraw,n=this._showEffect(e),o=!!e.get("polyline"),a=e.pipelineContext.large;return i&&n===this._hasEffet&&o===this._isPolyline&&a===this._isLargeDraw||(i&&i.remove(),i=this._lineDraw=a?new bg():new sf(o?n?wg:_g:n?xg:rf),this._hasEffet=n,this._isPolyline=o,this._isLargeDraw=a,this.group.removeAll()),this.group.add(i.group),i;},_showEffect:function _showEffect(t){return!!t.get("effect.show");},_clearLayer:function _clearLayer(t){var e=t.getZr();"svg"===e.painter.getType()||null==this._lastZlevel||e.painter.getLayer(this._lastZlevel).clear(!0);},remove:function remove(t,e){this._lineDraw&&this._lineDraw.remove(),this._lineDraw=null,this._clearLayer(e);},dispose:function dispose(){}});var lP="lineStyle.opacity".split("."),uP={seriesType:"lines",reset:function reset(t,e,i){var n=Sg(t.get("symbol")),o=Sg(t.get("symbolSize")),a=t.getData();return a.setVisual("fromSymbol",n&&n[0]),a.setVisual("toSymbol",n&&n[1]),a.setVisual("fromSymbolSize",o&&o[0]),a.setVisual("toSymbolSize",o&&o[1]),a.setVisual("opacity",t.get(lP)),{dataEach:a.hasItemOption?function(t,e){var i=t.getItemModel(e),n=Sg(i.getShallow("symbol",!0)),o=Sg(i.getShallow("symbolSize",!0)),a=i.get(lP);n[0]&&t.setItemVisual(e,"fromSymbol",n[0]),n[1]&&t.setItemVisual(e,"toSymbol",n[1]),o[0]&&t.setItemVisual(e,"fromSymbolSize",o[0]),o[1]&&t.setItemVisual(e,"toSymbolSize",o[1]),t.setItemVisual(e,"opacity",a);}:null};}};zs(sP),Bs(uP),YI.extend({type:"series.heatmap",getInitialData:function getInitialData(t,e){return ml(this.getSource(),this,{generateCoord:"value"});},preventIncremental:function preventIncremental(){var t=Fa.get(this.get("coordinateSystem"));if(t&&t.dimensions)return"lng"===t.dimensions[0]&&"lat"===t.dimensions[1];},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,geoIndex:0,blurSize:30,pointSize:20,maxOpacity:1,minOpacity:0}});Mg.prototype={update:function update(t,e,i,n,o,a){var r=this._getBrush(),s=this._getGradient(t,o,"inRange"),l=this._getGradient(t,o,"outOfRange"),u=this.pointSize+this.blurSize,h=this.canvas,c=h.getContext("2d"),d=t.length;h.width=e,h.height=i;for(var f=0;f<d;++f){var p=t[f],g=p[0],m=p[1],v=n(p[2]);c.globalAlpha=v,c.drawImage(r,g-u,m-u);}if(!h.width||!h.height)return h;for(var y=c.getImageData(0,0,h.width,h.height),x=y.data,_=0,w=x.length,b=this.minOpacity,S=this.maxOpacity-b;_<w;){var v=x[_+3]/256,M=4*Math.floor(255*v);if(v>0){var I=a(v)?s:l;v>0&&(v=v*S+b),x[_++]=I[M],x[_++]=I[M+1],x[_++]=I[M+2],x[_++]=I[M+3]*v*256;}else _+=4;}return c.putImageData(y,0,0),h;},_getBrush:function _getBrush(){var t=this._brushCanvas||(this._brushCanvas=iw()),e=this.pointSize+this.blurSize,i=2*e;t.width=i,t.height=i;var n=t.getContext("2d");return n.clearRect(0,0,i,i),n.shadowOffsetX=i,n.shadowBlur=this.blurSize,n.shadowColor="#000",n.beginPath(),n.arc(-e,e,this.pointSize,0,2*Math.PI,!0),n.closePath(),n.fill(),t;},_getGradient:function _getGradient(t,e,i){for(var n=this._gradientPixels,o=n[i]||(n[i]=new Uint8ClampedArray(1024)),a=[0,0,0,0],r=0,s=0;s<256;s++){e[i](s/255,!0,a),o[r++]=a[0],o[r++]=a[1],o[r++]=a[2],o[r++]=a[3];}return o;}},Zs({type:"heatmap",render:function render(t,e,i){var n;e.eachComponent("visualMap",function(e){e.eachTargetSeries(function(i){i===t&&(n=e);});}),this.group.removeAll(),this._incrementalDisplayable=null;var o=t.coordinateSystem;"cartesian2d"===o.type||"calendar"===o.type?this._renderOnCartesianAndCalendar(t,i,0,t.getData().count()):Ag(o)&&this._renderOnGeo(o,t,n,i);},incrementalPrepareRender:function incrementalPrepareRender(t,e,i){this.group.removeAll();},incrementalRender:function incrementalRender(t,e,i,n){e.coordinateSystem&&this._renderOnCartesianAndCalendar(e,n,t.start,t.end,!0);},_renderOnCartesianAndCalendar:function _renderOnCartesianAndCalendar(t,e,i,n,o){var r,s,l=t.coordinateSystem;if("cartesian2d"===l.type){var u=l.getAxis("x"),h=l.getAxis("y");r=u.getBandWidth(),s=h.getBandWidth();}for(var c=this.group,d=t.getData(),f=t.getModel("itemStyle").getItemStyle(["color"]),p=t.getModel("emphasis.itemStyle").getItemStyle(),g=t.getModel("label"),m=t.getModel("emphasis.label"),v=l.type,y="cartesian2d"===v?[d.mapDimension("x"),d.mapDimension("y"),d.mapDimension("value")]:[d.mapDimension("time"),d.mapDimension("value")],x=i;x<n;x++){var _;if("cartesian2d"===v){if(isNaN(d.get(y[2],x)))continue;var w=l.dataToPoint([d.get(y[0],x),d.get(y[1],x)]);_=new yM({shape:{x:w[0]-r/2,y:w[1]-s/2,width:r,height:s},style:{fill:d.getItemVisual(x,"color"),opacity:d.getItemVisual(x,"opacity")}});}else{if(isNaN(d.get(y[1],x)))continue;_=new yM({z2:1,shape:l.dataToRect([d.get(y[0],x)]).contentShape,style:{fill:d.getItemVisual(x,"color"),opacity:d.getItemVisual(x,"opacity")}});}var b=d.getItemModel(x);d.hasItemOption&&(f=b.getModel("itemStyle").getItemStyle(["color"]),p=b.getModel("emphasis.itemStyle").getItemStyle(),g=b.getModel("label"),m=b.getModel("emphasis.label"));var S=t.getRawValue(x),M="-";S&&null!=S[2]&&(M=S[2]),go(f,p,g,m,{labelFetcher:t,labelDataIndex:x,defaultText:M,isRectText:!0}),_.setStyle(f),fo(_,d.hasItemOption?p:a({},p)),_.incremental=o,o&&(_.useHoverLayer=!0),c.add(_),d.setItemGraphicEl(x,_);}},_renderOnGeo:function _renderOnGeo(t,e,i,n){var o=i.targetVisuals.inRange,a=i.targetVisuals.outOfRange,r=e.getData(),s=this._hmLayer||this._hmLayer||new Mg();s.blurSize=e.get("blurSize"),s.pointSize=e.get("pointSize"),s.minOpacity=e.get("minOpacity"),s.maxOpacity=e.get("maxOpacity");var l=t.getViewRect().clone(),u=t.getRoamTransform();l.applyTransform(u);var h=Math.max(l.x,0),c=Math.max(l.y,0),d=Math.min(l.width+l.x,n.getWidth()),f=Math.min(l.height+l.y,n.getHeight()),p=d-h,g=f-c,m=[r.mapDimension("lng"),r.mapDimension("lat"),r.mapDimension("value")],v=r.mapArray(m,function(e,i,n){var o=t.dataToPoint([e,i]);return o[0]-=h,o[1]-=c,o.push(n),o;}),y=i.getExtent(),x="visualMap.continuous"===i.type?Tg(y,i.option.range):Ig(y,i.getPieceList(),i.option.selected);s.update(v,p,g,o.color.getNormalizer(),{inRange:o.color.getColorMapper(),outOfRange:a.color.getColorMapper()},x);var _=new fi({style:{width:p,height:g,x:h,y:c,image:s.canvas},silent:!0});this.group.add(_);},dispose:function dispose(){}});var hP=$D.extend({type:"series.pictorialBar",dependencies:["grid"],defaultOption:{symbol:"circle",symbolSize:null,symbolRotate:null,symbolPosition:null,symbolOffset:null,symbolMargin:null,symbolRepeat:!1,symbolRepeatDirection:"end",symbolClip:!1,symbolBoundingData:null,symbolPatternSize:400,barGap:"-100%",progressive:0,hoverAnimation:!1},getInitialData:function getInitialData(t){return t.stack=null,hP.superApply(this,"getInitialData",arguments);}}),cP=["itemStyle","borderWidth"],dP=[{xy:"x",wh:"width",index:0,posDesc:["left","right"]},{xy:"y",wh:"height",index:1,posDesc:["top","bottom"]}],fP=new sM();Zs({type:"pictorialBar",render:function render(t,e,i){var n=this.group,o=t.getData(),a=this._data,r=t.coordinateSystem,s=!!r.getBaseAxis().isHorizontal(),l=r.grid.getRect(),u={ecSize:{width:i.getWidth(),height:i.getHeight()},seriesModel:t,coordSys:r,coordSysExtent:[[l.x,l.x+l.width],[l.y,l.y+l.height]],isHorizontal:s,valueDim:dP[+s],categoryDim:dP[1-s]};return o.diff(a).add(function(t){if(o.hasValue(t)){var e=Vg(o,t),i=Dg(o,t,e,u),a=Hg(o,u,i);o.setItemGraphicEl(t,a),n.add(a),qg(a,u,i);}}).update(function(t,e){var i=a.getItemGraphicEl(e);if(o.hasValue(t)){var r=Vg(o,t),s=Dg(o,t,r,u),l=Xg(o,s);i&&l!==i.__pictorialShapeStr&&(n.remove(i),o.setItemGraphicEl(t,null),i=null),i?Zg(i,u,s):i=Hg(o,u,s,!0),o.setItemGraphicEl(t,i),i.__pictorialSymbolMeta=s,n.add(i),qg(i,u,s);}else n.remove(i);}).remove(function(t){var e=a.getItemGraphicEl(t);e&&Ug(a,t,e.__pictorialSymbolMeta.animationModel,e);}).execute(),this._data=o,this.group;},dispose:B,remove:function remove(t,e){var i=this.group,n=this._data;t.get("animation")?n&&n.eachItemGraphicEl(function(e){Ug(n,e.dataIndex,t,e);}):i.removeAll();}});zs(v(El,"pictorialBar")),Bs(TD("pictorialBar","roundRect"));var pP=function pP(t,e,i,n,o){aD.call(this,t,e,i),this.type=n||"value",this.position=o||"bottom",this.orient=null;};pP.prototype={constructor:pP,model:null,isHorizontal:function isHorizontal(){var t=this.position;return"top"===t||"bottom"===t;},pointToData:function pointToData(t,e){return this.coordinateSystem.pointToData(t,e)[0];},toGlobalCoord:null,toLocalCoord:null},u(pP,aD),$g.prototype={type:"singleAxis",axisPointerEnabled:!0,constructor:$g,_init:function _init(t,e,i){var n=this.dimension,o=new pP(n,Hl(t),[0,0],t.get("type"),t.get("position")),a="category"===o.type;o.onBand=a&&t.get("boundaryGap"),o.inverse=t.get("inverse"),o.orient=t.get("orient"),t.axis=o,o.model=t,o.coordinateSystem=this,this._axis=o;},update:function update(t,e){t.eachSeries(function(t){if(t.coordinateSystem===this){var e=t.getData();d(e.mapDimension(this.dimension,!0),function(t){this._axis.scale.unionExtentFromData(e,t);},this),Wl(this._axis.scale,this._axis.model);}},this);},resize:function resize(t,e){this._rect=ca({left:t.get("left"),top:t.get("top"),right:t.get("right"),bottom:t.get("bottom"),width:t.get("width"),height:t.get("height")},{width:e.getWidth(),height:e.getHeight()}),this._adjustAxis();},getRect:function getRect(){return this._rect;},_adjustAxis:function _adjustAxis(){var t=this._rect,e=this._axis,i=e.isHorizontal(),n=i?[0,t.width]:[0,t.height],o=e.reverse?1:0;e.setExtent(n[o],n[1-o]),this._updateAxisTransform(e,i?t.x:t.y);},_updateAxisTransform:function _updateAxisTransform(t,e){var i=t.getExtent(),n=i[0]+i[1],o=t.isHorizontal();t.toGlobalCoord=o?function(t){return t+e;}:function(t){return n-t+e;},t.toLocalCoord=o?function(t){return t-e;}:function(t){return n-t+e;};},getAxis:function getAxis(){return this._axis;},getBaseAxis:function getBaseAxis(){return this._axis;},getAxes:function getAxes(){return[this._axis];},getTooltipAxes:function getTooltipAxes(){return{baseAxes:[this.getAxis()]};},containPoint:function containPoint(t){var e=this.getRect(),i=this.getAxis();return"horizontal"===i.orient?i.contain(i.toLocalCoord(t[0]))&&t[1]>=e.y&&t[1]<=e.y+e.height:i.contain(i.toLocalCoord(t[1]))&&t[0]>=e.y&&t[0]<=e.y+e.height;},pointToData:function pointToData(t){var e=this.getAxis();return[e.coordToData(e.toLocalCoord(t["horizontal"===e.orient?0:1]))];},dataToPoint:function dataToPoint(t){var e=this.getAxis(),i=this.getRect(),n=[],o="horizontal"===e.orient?0:1;return t instanceof Array&&(t=t[0]),n[o]=e.toGlobalCoord(e.dataToCoord(+t)),n[1-o]=0===o?i.y+i.height/2:i.x+i.width/2,n;}},Fa.register("single",{create:function create(t,e){var i=[];return t.eachComponent("singleAxis",function(n,o){var a=new $g(n,t,e);a.name="single_"+o,a.resize(n,e),n.coordinateSystem=a,i.push(a);}),t.eachSeries(function(e){if("singleAxis"===e.get("coordinateSystem")){var i=t.queryComponents({mainType:"singleAxis",index:e.get("singleAxisIndex"),id:e.get("singleAxisId")})[0];e.coordinateSystem=i&&i.coordinateSystem;}}),i;},dimensions:$g.prototype.dimensions});var gP=["axisLine","axisTickLabel","axisName"],mP=XD.extend({type:"singleAxis",axisPointerClass:"SingleAxisPointer",render:function render(t,e,i,n){var o=this.group;o.removeAll();var a=Jg(t),r=new FD(t,a);d(gP,r.add,r),o.add(r.getGroup()),t.get("splitLine.show")&&this._splitLine(t),mP.superCall(this,"render",t,e,i,n);},_splitLine:function _splitLine(t){var e=t.axis;if(!e.scale.isBlank()){var i=t.getModel("splitLine"),n=i.getModel("lineStyle"),o=n.get("width"),a=n.get("color");a=a instanceof Array?a:[a];for(var r=t.coordinateSystem.getRect(),s=e.isHorizontal(),l=[],u=0,h=e.getTicksCoords({tickModel:i}),c=[],d=[],f=0;f<h.length;++f){var p=e.toGlobalCoord(h[f].coord);s?(c[0]=p,c[1]=r.y,d[0]=p,d[1]=r.y+r.height):(c[0]=r.x,c[1]=p,d[0]=r.x+r.width,d[1]=p);var g=u++%a.length;l[g]=l[g]||[],l[g].push(new _M(Kn({shape:{x1:c[0],y1:c[1],x2:d[0],y2:d[1]},style:{lineWidth:o},silent:!0})));}for(f=0;f<l.length;++f){this.group.add(OM(l[f],{style:{stroke:a[f%a.length],lineDash:n.getLineDash(o),lineWidth:o},silent:!0}));}}}}),vP=lI.extend({type:"singleAxis",layoutMode:"box",axis:null,coordinateSystem:null,getCoordSysModel:function getCoordSysModel(){return this;}}),yP={left:"5%",top:"5%",right:"5%",bottom:"5%",type:"value",position:"bottom",orient:"horizontal",axisLine:{show:!0,lineStyle:{width:2,type:"solid"}},tooltip:{show:!0},axisTick:{show:!0,length:6,lineStyle:{width:2}},axisLabel:{show:!0,interval:"auto"},splitLine:{show:!0,lineStyle:{type:"dashed",opacity:.2}}};n(vP.prototype,UA),ED("single",vP,function(t,e){return e.type||(e.data?"category":"value");},yP);var xP=function xP(t,e){var i,n=[],o=t.seriesIndex;if(null==o||!(i=e.getSeriesByIndex(o)))return{point:[]};var a=i.getData(),r=zi(a,t);if(null==r||r<0||y(r))return{point:[]};var s=a.getItemGraphicEl(r),l=i.coordinateSystem;if(i.getTooltipPosition)n=i.getTooltipPosition(r)||[];else if(l&&l.dataToPoint)n=l.dataToPoint(a.getValues(f(l.dimensions,function(t){return a.mapDimension(t);}),r,!0))||[];else if(s){var u=s.getBoundingRect().clone();u.applyTransform(s.transform),n=[u.x+u.width/2,u.y+u.height/2];}return{point:n,el:s};},_P=d,wP=v,bP=Bi(),SP=(Fs({type:"axisPointer",coordSysAxesInfo:null,defaultOption:{show:"auto",triggerOn:null,zlevel:0,z:50,type:"line",snap:!1,triggerTooltip:!0,value:null,status:null,link:[],animation:null,animationDurationUpdate:200,lineStyle:{color:"#aaa",width:1,type:"solid"},shadowStyle:{color:"rgba(150,150,150,0.3)"},label:{show:!0,formatter:null,precision:"auto",margin:3,color:"#fff",padding:[5,7,5,7],backgroundColor:"auto",borderColor:null,borderWidth:0,shadowBlur:3,shadowColor:"#aaa"},handle:{show:!1,icon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",size:45,margin:50,color:"#333",shadowBlur:3,shadowColor:"#aaa",shadowOffsetX:0,shadowOffsetY:2,throttle:40}}}),Bi()),MP=d,IP=Ws({type:"axisPointer",render:function render(t,e,i){var n=e.getComponent("tooltip"),o=t.get("triggerOn")||n&&n.get("triggerOn")||"mousemove|click";um("axisPointer",i,function(t,e,i){"none"!==o&&("leave"===t||o.indexOf(t)>=0)&&i({type:"updateAxisPointer",currTrigger:t,x:e&&e.offsetX,y:e&&e.offsetY});});},remove:function remove(t,e){gm(e.getZr(),"axisPointer"),IP.superApply(this._model,"remove",arguments);},dispose:function dispose(t,e){gm("axisPointer",e),IP.superApply(this._model,"dispose",arguments);}}),TP=Bi(),AP=i,DP=m;(mm.prototype={_group:null,_lastGraphicKey:null,_handle:null,_dragging:!1,_lastValue:null,_lastStatus:null,_payloadInfo:null,animationThreshold:15,render:function render(t,e,i,n){var o=e.get("value"),a=e.get("status");if(this._axisModel=t,this._axisPointerModel=e,this._api=i,n||this._lastValue!==o||this._lastStatus!==a){this._lastValue=o,this._lastStatus=a;var r=this._group,s=this._handle;if(!a||"hide"===a)return r&&r.hide(),void(s&&s.hide());r&&r.show(),s&&s.show();var l={};this.makeElOption(l,o,t,e,i);var u=l.graphicKey;u!==this._lastGraphicKey&&this.clear(i),this._lastGraphicKey=u;var h=this._moveAnimation=this.determineAnimation(t,e);if(r){var c=v(vm,e,h);this.updatePointerEl(r,l,c,e),this.updateLabelEl(r,l,c,e);}else r=this._group=new tb(),this.createPointerEl(r,l,t,e),this.createLabelEl(r,l,t,e),i.getZr().add(r);wm(r,e,!0),this._renderHandle(o);}},remove:function remove(t){this.clear(t);},dispose:function dispose(t){this.clear(t);},determineAnimation:function determineAnimation(t,e){var i=e.get("animation"),n=t.axis,o="category"===n.type,a=e.get("snap");if(!a&&!o)return!1;if("auto"===i||null==i){var r=this.animationThreshold;if(o&&n.getBandWidth()>r)return!0;if(a){var s=Mh(t).seriesDataCount,l=n.getExtent();return Math.abs(l[0]-l[1])/s>r;}return!1;}return!0===i;},makeElOption:function makeElOption(t,e,i,n,o){},createPointerEl:function createPointerEl(t,e,i,n){var o=e.pointer;if(o){var a=TP(t).pointerEl=new zM[o.type](AP(e.pointer));t.add(a);}},createLabelEl:function createLabelEl(t,e,i,n){if(e.label){var o=TP(t).labelEl=new yM(AP(e.label));t.add(o),xm(o,n);}},updatePointerEl:function updatePointerEl(t,e,i){var n=TP(t).pointerEl;n&&(n.setStyle(e.pointer.style),i(n,{shape:e.pointer.shape}));},updateLabelEl:function updateLabelEl(t,e,i,n){var o=TP(t).labelEl;o&&(o.setStyle(e.label.style),i(o,{shape:e.label.shape,position:e.label.position}),xm(o,n));},_renderHandle:function _renderHandle(t){if(!this._dragging&&this.updateHandleTransform){var e=this._axisPointerModel,i=this._api.getZr(),n=this._handle,o=e.getModel("handle"),a=e.get("status");if(!o.get("show")||!a||"hide"===a)return n&&i.remove(n),void(this._handle=null);var r;this._handle||(r=!0,n=this._handle=Po(o.get("icon"),{cursor:"move",draggable:!0,onmousemove:function onmousemove(t){mw(t.event);},onmousedown:DP(this._onHandleDragMove,this,0,0),drift:DP(this._onHandleDragMove,this),ondragend:DP(this._onHandleDragEnd,this)}),i.add(n)),wm(n,e,!1);var s=["color","borderColor","borderWidth","opacity","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];n.setStyle(o.getItemStyle(null,s));var l=o.get("size");y(l)||(l=[l,l]),n.attr("scale",[l[0]/2,l[1]/2]),Nr(this,"_doDispatchAxisPointer",o.get("throttle")||0,"fixRate"),this._moveHandleToValue(t,r);}},_moveHandleToValue:function _moveHandleToValue(t,e){vm(this._axisPointerModel,!e&&this._moveAnimation,this._handle,_m(this.getHandleTransform(t,this._axisModel,this._axisPointerModel)));},_onHandleDragMove:function _onHandleDragMove(t,e){var i=this._handle;if(i){this._dragging=!0;var n=this.updateHandleTransform(_m(i),[t,e],this._axisModel,this._axisPointerModel);this._payloadInfo=n,i.stopAnimation(),i.attr(_m(n)),TP(i).lastProp=null,this._doDispatchAxisPointer();}},_doDispatchAxisPointer:function _doDispatchAxisPointer(){if(this._handle){var t=this._payloadInfo,e=this._axisModel;this._api.dispatchAction({type:"updateAxisPointer",x:t.cursorPoint[0],y:t.cursorPoint[1],tooltipOption:t.tooltipOption,axesInfo:[{axisDim:e.axis.dim,axisIndex:e.componentIndex}]});}},_onHandleDragEnd:function _onHandleDragEnd(t){if(this._dragging=!1,this._handle){var e=this._axisPointerModel.get("value");this._moveHandleToValue(e),this._api.dispatchAction({type:"hideTip"});}},getHandleTransform:null,updateHandleTransform:null,clear:function clear(t){this._lastValue=null,this._lastStatus=null;var e=t.getZr(),i=this._group,n=this._handle;e&&i&&(this._lastGraphicKey=null,i&&e.remove(i),n&&e.remove(n),this._group=null,this._handle=null,this._payloadInfo=null);},doClear:function doClear(){},buildLabel:function buildLabel(t,e,i){return i=i||0,{x:t[i],y:t[1-i],width:e[i],height:e[1-i]};}}).constructor=mm,ji(mm);var CP=mm.extend({makeElOption:function makeElOption(t,e,i,n,o){var a=i.axis,r=a.grid,s=n.get("type"),l=km(r,a).getOtherAxis(a).getGlobalExtent(),u=a.toGlobalCoord(a.dataToCoord(e,!0));if(s&&"none"!==s){var h=bm(n),c=LP[s](a,u,l,h);c.style=h,t.graphicKey=c.type,t.pointer=c;}Am(e,t,Lh(r.model,i),i,n,o);},getHandleTransform:function getHandleTransform(t,e,i){var n=Lh(e.axis.grid.model,e,{labelInside:!1});return n.labelMargin=i.get("handle.margin"),{position:Tm(e.axis,t,n),rotation:n.rotation+(n.labelDirection<0?Math.PI:0)};},updateHandleTransform:function updateHandleTransform(t,e,i,n){var o=i.axis,a=o.grid,r=o.getGlobalExtent(!0),s=km(a,o).getOtherAxis(o).getGlobalExtent(),l="x"===o.dim?0:1,u=t.position;u[l]+=e[l],u[l]=Math.min(r[1],u[l]),u[l]=Math.max(r[0],u[l]);var h=(s[1]+s[0])/2,c=[h,h];c[l]=u[l];var d=[{verticalAlign:"middle"},{align:"center"}];return{position:u,rotation:t.rotation,cursorPoint:c,tooltipOption:d[l]};}}),LP={line:function line(t,e,i,n){var o=Dm([e,i[0]],[e,i[1]],Pm(t));return Kn({shape:o,style:n}),{type:"Line",shape:o};},shadow:function shadow(t,e,i,n){var o=Math.max(1,t.getBandWidth()),a=i[1]-i[0];return{type:"Rect",shape:Cm([e-o/2,i[0]],[o,a],Pm(t))};}};XD.registerAxisPointerClass("CartesianAxisPointer",CP),Ns(function(t){if(t){(!t.axisPointer||0===t.axisPointer.length)&&(t.axisPointer={});var e=t.axisPointer.link;e&&!y(e)&&(t.axisPointer.link=[e]);}}),Os(VT.PROCESSOR.STATISTIC,function(t,e){t.getComponent("axisPointer").coordSysAxesInfo=vh(t,e);}),Es({type:"updateAxisPointer",event:"updateAxisPointer",update:":updateAxisPointer"},function(t,e,i){var n=t.currTrigger,o=[t.x,t.y],a=t,r=t.dispatchAction||m(i.dispatchAction,i),s=e.getComponent("axisPointer").coordSysAxesInfo;if(s){lm(o)&&(o=xP({seriesIndex:a.seriesIndex,dataIndex:a.dataIndex},e).point);var l=lm(o),u=a.axesInfo,h=s.axesInfo,c="leave"===n||lm(o),d={},f={},p={list:[],map:{}},g={showPointer:wP(em,f),showTooltip:wP(im,p)};_P(s.coordSysMap,function(t,e){var i=l||t.containPoint(o);_P(s.coordSysAxesInfo[e],function(t,e){var n=t.axis,a=rm(u,t);if(!c&&i&&(!u||a)){var r=a&&a.value;null!=r||l||(r=n.pointToData(o)),null!=r&&Qg(t,r,g,!1,d);}});});var v={};return _P(h,function(t,e){var i=t.linkGroup;i&&!f[e]&&_P(i.axesInfo,function(e,n){var o=f[n];if(e!==t&&o){var a=o.value;i.mapper&&(a=t.axis.scale.parse(i.mapper(a,sm(e),sm(t)))),v[t.key]=a;}});}),_P(v,function(t,e){Qg(h[e],t,g,!0,d);}),nm(f,h,d),om(p,o,t,r),am(h,0,i),d;}});var kP=["x","y"],PP=["width","height"],NP=mm.extend({makeElOption:function makeElOption(t,e,i,n,o){var a=i.axis,r=a.coordinateSystem,s=Om(r,1-Nm(a)),l=r.dataToPoint(e)[0],u=n.get("type");if(u&&"none"!==u){var h=bm(n),c=OP[u](a,l,s,h);c.style=h,t.graphicKey=c.type,t.pointer=c;}Am(e,t,Jg(i),i,n,o);},getHandleTransform:function getHandleTransform(t,e,i){var n=Jg(e,{labelInside:!1});return n.labelMargin=i.get("handle.margin"),{position:Tm(e.axis,t,n),rotation:n.rotation+(n.labelDirection<0?Math.PI:0)};},updateHandleTransform:function updateHandleTransform(t,e,i,n){var o=i.axis,a=o.coordinateSystem,r=Nm(o),s=Om(a,r),l=t.position;l[r]+=e[r],l[r]=Math.min(s[1],l[r]),l[r]=Math.max(s[0],l[r]);var u=Om(a,1-r),h=(u[1]+u[0])/2,c=[h,h];return c[r]=l[r],{position:l,rotation:t.rotation,cursorPoint:c,tooltipOption:{verticalAlign:"middle"}};}}),OP={line:function line(t,e,i,n){var o=Dm([e,i[0]],[e,i[1]],Nm(t));return Kn({shape:o,style:n}),{type:"Line",shape:o};},shadow:function shadow(t,e,i,n){var o=t.getBandWidth(),a=i[1]-i[0];return{type:"Rect",shape:Cm([e-o/2,i[0]],[o,a],Nm(t))};}};XD.registerAxisPointerClass("SingleAxisPointer",NP),Ws({type:"single"});var EP=YI.extend({type:"series.themeRiver",dependencies:["singleAxis"],nameMap:null,init:function init(t){EP.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData();};},fixData:function fixData(t){var e=t.length,i=[];Zi(t,function(t){return t[2];}).buckets.each(function(t,e){i.push({name:e,dataList:t});});for(var n=i.length,o=-1,a=-1,r=0;r<n;++r){var s=i[r].dataList.length;s>o&&(o=s,a=r);}for(var l=0;l<n;++l){if(l!==a)for(var u=i[l].name,h=0;h<o;++h){for(var c=i[a].dataList[h][0],d=i[l].dataList.length,f=-1,p=0;p<d;++p){if(i[l].dataList[p][0]===c){f=p;break;}}-1===f&&(t[e]=[],t[e][0]=c,t[e][1]=0,t[e][2]=u,e++);}}return t;},getInitialData:function getInitialData(t,e){for(var i=e.queryComponents({mainType:"singleAxis",index:this.get("singleAxisIndex"),id:this.get("singleAxisId")})[0].get("type"),n=g(t.data,function(t){return void 0!==t[2];}),o=this.fixData(n||[]),a=[],r=this.nameMap=R(),s=0,l=0;l<o.length;++l){a.push(o[l][2]),r.get(o[l][2])||(r.set(o[l][2],s),s++);}var u=_A(o,{coordDimensions:["single"],dimensionsDefine:[{name:"time",type:qs(i)},{name:"value",type:"float"},{name:"name",type:"ordinal"}],encodeDefine:{single:0,value:1,itemName:2}}),h=new vA(u,this);return h.initData(o),h;},getLayerSeries:function getLayerSeries(){for(var t=this.getData(),e=t.count(),i=[],n=0;n<e;++n){i[n]=n;}var o=t.mapDimension("single"),a=[];return Zi(i,function(e){return t.get("name",e);}).buckets.each(function(e,i){e.sort(function(e,i){return t.get(o,e)-t.get(o,i);}),a.push({name:i,indices:e});}),a;},getAxisTooltipData:function getAxisTooltipData(t,e,i){y(t)||(t=t?[t]:[]);for(var n,o=this.getData(),a=this.getLayerSeries(),r=[],s=a.length,l=0;l<s;++l){for(var u=Number.MAX_VALUE,h=-1,c=a[l].indices.length,d=0;d<c;++d){var f=o.get(t[0],a[l].indices[d]),p=Math.abs(f-e);p<=u&&(n=f,u=p,h=a[l].indices[d]);}r.push(h);}return{dataIndices:r,nestestValue:n};},formatTooltip:function formatTooltip(t){var e=this.getData(),i=e.getName(t),n=e.get(e.mapDimension("value"),t);return(isNaN(n)||null==n)&&(n="-"),ia(i+" : "+n);},defaultOption:{zlevel:0,z:2,coordinateSystem:"singleAxis",boundaryGap:["10%","10%"],singleAxisIndex:0,animationEasing:"linear",label:{margin:4,show:!0,position:"left",color:"#000",fontSize:11},emphasis:{label:{show:!0}}}});Zs({type:"themeRiver",init:function init(){this._layers=[];},render:function render(t,e,i){function n(t){return t.name;}function o(e,i,n){var o=this._layers;if("remove"!==e){for(var u,h=[],c=[],f=l[i].indices,p=0;p<f.length;p++){var g=r.getItemLayout(f[p]),m=g.x,v=g.y0,y=g.y;h.push([m,v]),c.push([m,v+y]),u=r.getItemVisual(f[p],"color");}var x,_,w=r.getItemLayout(f[0]),b=r.getItemModel(f[p-1]),S=b.getModel("label"),M=S.get("margin");if("add"===e){I=d[i]=new tb();x=new ID({shape:{points:h,stackedOnPoints:c,smooth:.4,stackedOnSmooth:.4,smoothConstraint:!1},z2:0}),_=new rM({style:{x:w.x-M,y:w.y0+w.y/2}}),I.add(x),I.add(_),s.add(I),x.setClipPath(Em(x.getBoundingRect(),t,function(){x.removeClipPath();}));}else{var I=o[n];x=I.childAt(0),_=I.childAt(1),s.add(I),d[i]=I,Io(x,{shape:{points:h,stackedOnPoints:c}},t),Io(_,{style:{x:w.x-M,y:w.y0+w.y/2}},t);}var T=b.getModel("emphasis.itemStyle"),A=b.getModel("itemStyle");mo(_.style,S,{text:S.get("show")?t.getFormattedLabel(f[p-1],"normal")||r.getName(f[p-1]):null,textVerticalAlign:"middle"}),x.setStyle(a({fill:u},A.getItemStyle(["color"]))),fo(x,T.getItemStyle());}else s.remove(o[i]);}var r=t.getData(),s=this.group,l=t.getLayerSeries(),u=r.getLayout("layoutInfo"),h=u.rect,c=u.boundaryGap;s.attr("position",[0,h.y+c[0]]);var d={};new Xs(this._layersSeries||[],l,n,n).add(m(o,this,"add")).update(m(o,this,"update")).remove(m(o,this,"remove")).execute(),this._layersSeries=l,this._layers=d;},dispose:function dispose(){}});zs(function(t,e){t.eachSeriesByType("themeRiver",function(t){var e=t.getData(),i=t.coordinateSystem,n={},o=i.getRect();n.rect=o;var a=t.get("boundaryGap"),r=i.getAxis();n.boundaryGap=a,"horizontal"===r.orient?(a[0]=Vo(a[0],o.height),a[1]=Vo(a[1],o.height),Rm(e,t,o.height-a[0]-a[1])):(a[0]=Vo(a[0],o.width),a[1]=Vo(a[1],o.width),Rm(e,t,o.width-a[0]-a[1])),e.setLayout("layoutInfo",n);});}),Bs(function(t){t.eachSeriesByType("themeRiver",function(t){var e=t.getData(),i=t.getRawData(),n=t.get("color"),o=R();e.each(function(t){o.set(e.getRawIndex(t),t);}),i.each(function(a){var r=i.getName(a),s=n[(t.nameMap.get(r)-1)%n.length];i.setItemVisual(a,"color",s);var l=o.get(a);null!=l&&e.setItemVisual(l,"color",s);});});}),Os(fC("themeRiver")),YI.extend({type:"series.sunburst",_viewRoot:null,getInitialData:function getInitialData(t,e){var i={name:t.name,children:t.data};Bm(i);var n=t.levels||[],o={};return o.levels=n,Vc.createTree(i,this,o).data;},optionUpdated:function optionUpdated(){this.resetViewRoot();},getDataParams:function getDataParams(t){var e=YI.prototype.getDataParams.apply(this,arguments),i=this.getData().tree.getNodeByDataIndex(t);return e.treePathInfo=cd(i,this),e;},defaultOption:{zlevel:0,z:2,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,percentPrecision:2,stillShowZeroSum:!0,highlightPolicy:"descendant",nodeClick:"rootToNode",renderLabelForZeroData:!1,label:{rotate:"radial",show:!0,opacity:1,align:"center",position:"inside",distance:5,silent:!0,emphasis:{}},itemStyle:{borderWidth:1,borderColor:"white",borderType:"solid",shadowBlur:0,shadowColor:"rgba(0, 0, 0, 0.2)",shadowOffsetX:0,shadowOffsetY:0,opacity:1,emphasis:{},highlight:{opacity:1},downplay:{opacity:.9}},animationType:"expansion",animationDuration:1e3,animationDurationUpdate:500,animationEasing:"cubicOut",data:[],levels:[],sort:"desc"},getViewRoot:function getViewRoot(){return this._viewRoot;},resetViewRoot:function resetViewRoot(t){t?this._viewRoot=t:t=this._viewRoot;var e=this.getRawData().tree.root;t&&(t===e||e.contains(t))||(this._viewRoot=e);}});var RP={NONE:"none",DESCENDANT:"descendant",ANCESTOR:"ancestor",SELF:"self"},zP=2,BP=4,VP=Vm.prototype;VP.updateData=function(t,e,i,o,s){this.node=e,e.piece=this,o=o||this._seriesModel,s=s||this._ecModel;var l=this.childAt(0);l.dataIndex=e.dataIndex;var u=e.getModel(),h=e.getLayout(),c=a({},h);c.label=null;var d=Gm(e,0,s);Hm(e,o,d);var f,p=u.getModel("itemStyle").getItemStyle();f=r({lineJoin:"bevel",fill:(f="normal"===i?p:n(u.getModel(i+".itemStyle").getItemStyle(),p)).fill||d},f),t?(l.setShape(c),l.shape.r=h.r0,Io(l,{shape:{r:h.r}},o,e.dataIndex),l.useStyle(f)):"object"==typeof f.fill&&f.fill.type||"object"==typeof l.style.fill&&l.style.fill.type?(Io(l,{shape:c},o),l.useStyle(f)):Io(l,{shape:c,style:f},o),this._updateLabel(o,d,i);var g=u.getShallow("cursor");if(g&&l.attr("cursor",g),t){var m=o.getShallow("highlightPolicy");this._initEvents(l,e,o,m);}this._seriesModel=o||this._seriesModel,this._ecModel=s||this._ecModel;},VP.onEmphasis=function(t){var e=this;this.node.hostTree.root.eachNode(function(i){i.piece&&(e.node===i?i.piece.updateData(!1,i,"emphasis"):Wm(i,e.node,t)?i.piece.childAt(0).trigger("highlight"):t!==RP.NONE&&i.piece.childAt(0).trigger("downplay"));});},VP.onNormal=function(){this.node.hostTree.root.eachNode(function(t){t.piece&&t.piece.updateData(!1,t,"normal");});},VP.onHighlight=function(){this.updateData(!1,this.node,"highlight");},VP.onDownplay=function(){this.updateData(!1,this.node,"downplay");},VP._updateLabel=function(t,e,i){function n(t){var e=r.get(t);return null==e?a.get(t):e;}var o=this.node.getModel(),a=o.getModel("label"),r="normal"===i||"emphasis"===i?a:o.getModel(i+".label"),s=o.getModel("emphasis.label"),l=T(t.getFormattedLabel(this.node.dataIndex,"normal",null,null,"label"),this.node.name);!1===n("show")&&(l="");var u=this.node.getLayout(),h=r.get("minAngle");null==h&&(h=a.get("minAngle")),h=h/180*Math.PI;var c=u.endAngle-u.startAngle;null!=h&&Math.abs(c)<h&&(l="");var d=this.childAt(1);go(d.style,d.hoverStyle||{},a,s,{defaultText:r.getShallow("show")?l:null,autoColor:e,useInsideStyle:!0});var f,p=(u.startAngle+u.endAngle)/2,g=Math.cos(p),m=Math.sin(p),v=n("position"),y=n("distance")||0,x=n("align");"outside"===v?(f=u.r+y,x=p>Math.PI/2?"right":"left"):x&&"center"!==x?"left"===x?(f=u.r0+y,p>Math.PI/2&&(x="right")):"right"===x&&(f=u.r-y,p>Math.PI/2&&(x="left")):(f=(u.r+u.r0)/2,x="center"),d.attr("style",{text:l,textAlign:x,textVerticalAlign:n("verticalAlign")||"middle",opacity:n("opacity")});var _=f*g+u.cx,w=f*m+u.cy;d.attr("position",[_,w]);var b=n("rotate"),S=0;"radial"===b?(S=-p)<-Math.PI/2&&(S+=Math.PI):"tangential"===b?(S=Math.PI/2-p)>Math.PI/2?S-=Math.PI:S<-Math.PI/2&&(S+=Math.PI):"number"==typeof b&&(S=b*Math.PI/180),d.attr("rotation",S);},VP._initEvents=function(t,e,i,n){t.off("mouseover").off("mouseout").off("emphasis").off("normal");var o=this,a=function a(){o.onEmphasis(n);},r=function r(){o.onNormal();};i.isAnimationEnabled()&&t.on("mouseover",a).on("mouseout",r).on("emphasis",a).on("normal",r).on("downplay",function(){o.onDownplay();}).on("highlight",function(){o.onHighlight();});},u(Vm,tb);Ar.extend({type:"sunburst",init:function init(){},render:function render(t,e,i,n){function o(i,n){if(c||!i||i.getValue()||(i=null),i!==l&&n!==l)if(n&&n.piece)i?(n.piece.updateData(!1,i,"normal",t,e),s.setItemGraphicEl(i.dataIndex,n.piece)):a(n);else if(i){var o=new Vm(i,t,e);h.add(o),s.setItemGraphicEl(i.dataIndex,o);}}function a(t){t&&t.piece&&(h.remove(t.piece),t.piece=null);}var r=this;this.seriesModel=t,this.api=i,this.ecModel=e;var s=t.getData(),l=s.tree.root,u=t.getViewRoot(),h=this.group,c=t.get("renderLabelForZeroData"),d=[];u.eachNode(function(t){d.push(t);});var f=this._oldChildren||[];if(function(t,e){function i(t){return t.getId();}function n(i,n){o(null==i?null:t[i],null==n?null:e[n]);}0===t.length&&0===e.length||new Xs(e,t,i,i).add(n).update(n).remove(v(n,null)).execute();}(d,f),function(i,n){if(n.depth>0){r.virtualPiece?r.virtualPiece.updateData(!1,i,"normal",t,e):(r.virtualPiece=new Vm(i,t,e),h.add(r.virtualPiece)),n.piece._onclickEvent&&n.piece.off("click",n.piece._onclickEvent);var o=function o(t){r._rootToNode(n.parentNode);};n.piece._onclickEvent=o,r.virtualPiece.on("click",o);}else r.virtualPiece&&(h.remove(r.virtualPiece),r.virtualPiece=null);}(l,u),n&&n.highlight&&n.highlight.piece){var p=t.getShallow("highlightPolicy");n.highlight.piece.onEmphasis(p);}else if(n&&n.unhighlight){var g=this.virtualPiece;!g&&l.children.length&&(g=l.children[0].piece),g&&g.onNormal();}this._initEvents(),this._oldChildren=d;},dispose:function dispose(){},_initEvents:function _initEvents(){var t=this,e=function e(_e4){var i=!1;t.seriesModel.getViewRoot().eachNode(function(n){if(!i&&n.piece&&n.piece.childAt(0)===_e4.target){var o=n.getModel().get("nodeClick");if("rootToNode"===o)t._rootToNode(n);else if("link"===o){var a=n.getModel(),r=a.get("link");if(r){var s=a.get("target",!0)||"_blank";window.open(r,s);}}i=!0;}});};this.group._onclickEvent&&this.group.off("click",this.group._onclickEvent),this.group.on("click",e),this.group._onclickEvent=e;},_rootToNode:function _rootToNode(t){t!==this.seriesModel.getViewRoot()&&this.api.dispatchAction({type:"sunburstRootToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:t});},containPoint:function containPoint(t,e){var i=e.getData().getItemLayout(0);if(i){var n=t[0]-i.cx,o=t[1]-i.cy,a=Math.sqrt(n*n+o*o);return a<=i.r&&a>=i.r0;}}});var GP="sunburstRootToNode";Es({type:GP,update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"sunburst",query:t},function(e,i){var n=ld(t,[GP],e);if(n){var o=e.getViewRoot();o&&(t.direction=hd(o,n.node)?"rollUp":"drillDown"),e.resetViewRoot(n.node);}});});var FP="sunburstHighlight";Es({type:FP,update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"sunburst",query:t},function(e,i){var n=ld(t,[FP],e);n&&(t.highlight=n.node);});});Es({type:"sunburstUnhighlight",update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"sunburst",query:t},function(e,i){t.unhighlight=!0;});});var WP=Math.PI/180;Bs(v(uC,"sunburst")),zs(v(function(t,e,i,n){e.eachSeriesByType(t,function(t){var e=t.get("center"),n=t.get("radius");y(n)||(n=[0,n]),y(e)||(e=[e,e]);var o=i.getWidth(),a=i.getHeight(),r=Math.min(o,a),s=Vo(e[0],o),l=Vo(e[1],a),u=Vo(n[0],r/2),h=Vo(n[1],r/2),c=-t.get("startAngle")*WP,f=t.get("minAngle")*WP,p=t.getData().tree.root,g=t.getViewRoot(),m=g.depth,v=t.get("sort");null!=v&&Zm(g,v);var x=0;d(g.children,function(t){!isNaN(t.getValue())&&x++;});var _=g.getValue(),w=Math.PI/(_||x)*2,b=g.depth>0,S=g.height-(b?-1:1),M=(h-u)/(S||1),I=t.get("clockwise"),T=t.get("stillShowZeroSum"),A=I?1:-1,D=function D(t,e){if(t){var i=e;if(t!==p){var n=t.getValue(),o=0===_&&T?w:n*w;o<f&&(o=f),i=e+A*o;var a=t.depth-m-(b?-1:1),h=u+M*a,c=u+M*(a+1),g=t.getModel();null!=g.get("r0")&&(h=Vo(g.get("r0"),r/2)),null!=g.get("r")&&(c=Vo(g.get("r"),r/2)),t.setLayout({angle:o,startAngle:e,endAngle:i,clockwise:I,cx:s,cy:l,r0:h,r:c});}if(t.children&&t.children.length){var v=0;d(t.children,function(t){v+=D(t,e+v);});}return i-e;}};if(b){var C=u,L=u+M,k=2*Math.PI;p.setLayout({angle:k,startAngle:c,endAngle:c+k,clockwise:I,cx:s,cy:l,r0:C,r:L});}D(g,c);});},"sunburst")),Os(v(fC,"sunburst"));var HP=["itemStyle"],ZP=["emphasis","itemStyle"],UP=["label"],XP=["emphasis","label"],jP="e\0\0",YP={cartesian2d:function cartesian2d(t){var e=t.grid.getRect();return{coordSys:{type:"cartesian2d",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:function coord(e){return t.dataToPoint(e);},size:m(Xm,t)}};},geo:function geo(t){var e=t.getBoundingRect();return{coordSys:{type:"geo",x:e.x,y:e.y,width:e.width,height:e.height,zoom:t.getZoom()},api:{coord:function coord(e){return t.dataToPoint(e);},size:m(jm,t)}};},singleAxis:function singleAxis(t){var e=t.getRect();return{coordSys:{type:"singleAxis",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:function coord(e){return t.dataToPoint(e);},size:m(Ym,t)}};},polar:function polar(t){var e=t.getRadiusAxis(),i=t.getAngleAxis(),n=e.getExtent();return n[0]>n[1]&&n.reverse(),{coordSys:{type:"polar",cx:t.cx,cy:t.cy,r:n[1],r0:n[0]},api:{coord:m(function(n){var o=e.dataToRadius(n[0]),a=i.dataToAngle(n[1]),r=t.coordToPoint([o,a]);return r.push(o,a*Math.PI/180),r;}),size:m(qm,t)}};},calendar:function calendar(t){var e=t.getRect(),i=t.getRangeInfo();return{coordSys:{type:"calendar",x:e.x,y:e.y,width:e.width,height:e.height,cellWidth:t.getCellWidth(),cellHeight:t.getCellHeight(),rangeInfo:{start:i.start,end:i.end,weeks:i.weeks,dayCount:i.allDay}},api:{coord:function coord(e,i){return t.dataToPoint(e,i);}}};}};YI.extend({type:"series.custom",dependencies:["grid","polar","geo","singleAxis","calendar"],defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,useTransform:!0},getInitialData:function getInitialData(t,e){return ml(this.getSource(),this);},getDataParams:function getDataParams(t,e,i){var n=YI.prototype.getDataParams.apply(this,arguments);return i&&(n.info=i.info),n;}}),Ar.extend({type:"custom",_data:null,render:function render(t,e,i,n){var o=this._data,a=t.getData(),r=this.group,s=Qm(t,a,e,i);a.diff(o).add(function(e){ev(null,e,s(e,n),t,r,a);}).update(function(e,i){ev(o.getItemGraphicEl(i),e,s(e,n),t,r,a);}).remove(function(t){var e=o.getItemGraphicEl(t);e&&r.remove(e);}).execute(),this._data=a;},incrementalPrepareRender:function incrementalPrepareRender(t,e,i){this.group.removeAll(),this._data=null;},incrementalRender:function incrementalRender(t,e,i,n,o){for(var a=e.getData(),r=Qm(e,a,i,n),s=t.start;s<t.end;s++){ev(null,s,r(s,o),e,this.group,a).traverse(function(t){t.isGroup||(t.incremental=!0,t.useHoverLayer=!0);});}},dispose:B,filterForExposedEvent:function filterForExposedEvent(t,e,i,n){var o=e.element;if(null==o||i.name===o)return!0;for(;(i=i.parent)&&i!==this.group;){if(i.name===o)return!0;}return!1;}}),Ns(function(t){var e=t.graphic;y(e)?e[0]&&e[0].elements?t.graphic=[t.graphic[0]]:t.graphic=[{elements:e}]:e&&!e.elements&&(t.graphic=[{elements:[e]}]);});var qP=Fs({type:"graphic",defaultOption:{elements:[],parentId:null},_elOptionsToUpdate:null,mergeOption:function mergeOption(t){var e=this.option.elements;this.option.elements=null,qP.superApply(this,"mergeOption",arguments),this.option.elements=e;},optionUpdated:function optionUpdated(t,e){var i=this.option,n=(e?i:t).elements,o=i.elements=e?[]:i.elements,a=[];this._flatten(n,a);var r=Pi(o,a);Ni(r);var s=this._elOptionsToUpdate=[];d(r,function(t,e){var i=t.option;i&&(s.push(i),gv(t,i),mv(o,e,i),vv(o[e],i));},this);for(var l=o.length-1;l>=0;l--){null==o[l]?o.splice(l,1):delete o[l].$action;}},_flatten:function _flatten(t,e,i){d(t,function(t){if(t){i&&(t.parentOption=i),e.push(t);var n=t.children;"group"===t.type&&n&&this._flatten(n,e,t),delete t.children;}},this);},useElOptionsToUpdate:function useElOptionsToUpdate(){var t=this._elOptionsToUpdate;return this._elOptionsToUpdate=null,t;}});Ws({type:"graphic",init:function init(t,e){this._elMap=R(),this._lastGraphicModel;},render:function render(t,e,i){t!==this._lastGraphicModel&&this._clear(),this._lastGraphicModel=t,this._updateElements(t),this._relocate(t,i);},_updateElements:function _updateElements(t){var e=t.useElOptionsToUpdate();if(e){var i=this._elMap,n=this.group;d(e,function(e){var o=e.$action,a=e.id,r=i.get(a),s=e.parentId,l=null!=s?i.get(s):n,u=e.style;"text"===e.type&&u&&(e.hv&&e.hv[1]&&(u.textVerticalAlign=u.textBaseline=null),!u.hasOwnProperty("textFill")&&u.fill&&(u.textFill=u.fill),!u.hasOwnProperty("textStroke")&&u.stroke&&(u.textStroke=u.stroke));var h=fv(e);o&&"merge"!==o?"replace"===o?(dv(r,i),cv(a,l,h,i)):"remove"===o&&dv(r,i):r?r.attr(h):cv(a,l,h,i);var c=i.get(a);c&&(c.__ecGraphicWidth=e.width,c.__ecGraphicHeight=e.height,yv(c,t));});}},_relocate:function _relocate(t,e){for(var i=t.option.elements,n=this.group,o=this._elMap,a=i.length-1;a>=0;a--){var r=i[a],s=o.get(r.id);if(s){var l=s.parent;da(s,r,l===n?{width:e.getWidth(),height:e.getHeight()}:{width:l.__ecGraphicWidth||0,height:l.__ecGraphicHeight||0},null,{hv:r.hv,boundingMode:r.bounding});}}},_clear:function _clear(){var t=this._elMap;t.each(function(e){dv(e,t);}),this._elMap=R();},dispose:function dispose(){this._clear();}});var KP=Fs({type:"legend.plain",dependencies:["series"],layoutMode:{type:"box",ignoreSize:!0},init:function init(t,e,i){this.mergeDefaultAndTheme(t,i),t.selected=t.selected||{};},mergeOption:function mergeOption(t){KP.superCall(this,"mergeOption",t);},optionUpdated:function optionUpdated(){this._updateData(this.ecModel);var t=this._data;if(t[0]&&"single"===this.get("selectedMode")){for(var e=!1,i=0;i<t.length;i++){var n=t[i].get("name");if(this.isSelected(n)){this.select(n),e=!0;break;}}!e&&this.select(t[0].get("name"));}},_updateData:function _updateData(t){var e=[],i=[];t.eachRawSeries(function(n){var o=n.name;i.push(o);var a;if(n.legendDataProvider){var r=n.legendDataProvider(),s=r.mapArray(r.getName);t.isSeriesFiltered(n)||(i=i.concat(s)),s.length?e=e.concat(s):a=!0;}else a=!0;a&&Oi(n)&&e.push(n.name);}),this._availableNames=i;var n=f(this.get("data")||e,function(t){return"string"!=typeof t&&"number"!=typeof t||(t={name:t}),new No(t,this,this.ecModel);},this);this._data=n;},getData:function getData(){return this._data;},select:function select(t){var e=this.option.selected;"single"===this.get("selectedMode")&&d(this._data,function(t){e[t.get("name")]=!1;}),e[t]=!0;},unSelect:function unSelect(t){"single"!==this.get("selectedMode")&&(this.option.selected[t]=!1);},toggleSelected:function toggleSelected(t){var e=this.option.selected;e.hasOwnProperty(t)||(e[t]=!0),this[e[t]?"unSelect":"select"](t);},isSelected:function isSelected(t){var e=this.option.selected;return!(e.hasOwnProperty(t)&&!e[t])&&l(this._availableNames,t)>=0;},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,inactiveColor:"#ccc",textStyle:{color:"#333"},selectedMode:!0,tooltip:{show:!1}}});Es("legendToggleSelect","legendselectchanged",v(xv,"toggleSelected")),Es("legendSelect","legendselected",v(xv,"select")),Es("legendUnSelect","legendunselected",v(xv,"unSelect"));var $P=v,JP=d,QP=tb,tN=Ws({type:"legend.plain",newlineDisabled:!1,init:function init(){this.group.add(this._contentGroup=new QP()),this._backgroundEl,this._isFirstRender=!0;},getContentGroup:function getContentGroup(){return this._contentGroup;},render:function render(t,e,i){var n=this._isFirstRender;if(this._isFirstRender=!1,this.resetInner(),t.get("show",!0)){var o=t.get("align");o&&"auto"!==o||(o="right"===t.get("left")&&"vertical"===t.get("orient")?"right":"left"),this.renderInner(o,t,e,i);var a=t.getBoxLayoutParams(),s={width:i.getWidth(),height:i.getHeight()},l=t.get("padding"),u=ca(a,s,l),h=this.layoutInner(t,o,u,n),c=ca(r({width:h.width,height:h.height},a),s,l);this.group.attr("position",[c.x-h.x,c.y-h.y]),this.group.add(this._backgroundEl=wv(h,t));}},resetInner:function resetInner(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl);},renderInner:function renderInner(t,e,i,n){var o=this.getContentGroup(),a=R(),r=e.get("selectedMode"),s=[];i.eachRawSeries(function(t){!t.get("legendHoverLink")&&s.push(t.id);}),JP(e.getData(),function(l,u){var h=l.get("name");if(this.newlineDisabled||""!==h&&"\n"!==h){var c=i.getSeriesByName(h)[0];if(!a.get(h))if(c){var d=c.getData(),f=d.getVisual("color");"function"==typeof f&&(f=f(c.getDataParams(0)));var p=d.getVisual("legendSymbol")||"roundRect",g=d.getVisual("symbol");this._createItem(h,u,l,e,p,g,t,f,r).on("click",$P(bv,h,n)).on("mouseover",$P(Sv,c.name,null,n,s)).on("mouseout",$P(Mv,c.name,null,n,s)),a.set(h,!0);}else i.eachRawSeries(function(i){if(!a.get(h)&&i.legendDataProvider){var o=i.legendDataProvider(),c=o.indexOfName(h);if(c<0)return;var d=o.getItemVisual(c,"color");this._createItem(h,u,l,e,"roundRect",null,t,d,r).on("click",$P(bv,h,n)).on("mouseover",$P(Sv,null,h,n,s)).on("mouseout",$P(Mv,null,h,n,s)),a.set(h,!0);}},this);}else o.add(new QP({newline:!0}));},this);},_createItem:function _createItem(t,e,i,n,o,r,s,l,u){var h=n.get("itemWidth"),c=n.get("itemHeight"),d=n.get("inactiveColor"),f=n.get("symbolKeepAspect"),p=n.isSelected(t),g=new QP(),m=i.getModel("textStyle"),v=i.get("icon"),y=i.getModel("tooltip"),x=y.parentModel;if(o=v||o,g.add(Jl(o,0,0,h,c,p?l:d,null==f||f)),!v&&r&&(r!==o||"none"===r)){var _=.8*c;"none"===r&&(r="circle"),g.add(Jl(r,(h-_)/2,(c-_)/2,_,_,p?l:d,null==f||f));}var w="left"===s?h+5:-5,b=s,S=n.get("formatter"),M=t;"string"==typeof S&&S?M=S.replace("{name}",null!=t?t:""):"function"==typeof S&&(M=S(t)),g.add(new rM({style:mo({},m,{text:M,x:w,y:c/2,textFill:p?m.getTextColor():d,textAlign:b,textVerticalAlign:"middle"})}));var I=new yM({shape:g.getBoundingRect(),invisible:!0,tooltip:y.get("show")?a({content:t,formatter:x.get("formatter",!0)||function(){return t;},formatterParams:{componentType:"legend",legendIndex:n.componentIndex,name:t,$vars:["name"]}},y.option):null});return g.add(I),g.eachChild(function(t){t.silent=!0;}),I.silent=!u,this.getContentGroup().add(g),fo(g),g.__legendDataIndex=e,g;},layoutInner:function layoutInner(t,e,i){var n=this.getContentGroup();aI(t.get("orient"),n,t.get("itemGap"),i.width,i.height);var o=n.getBoundingRect();return n.attr("position",[-o.x,-o.y]),this.group.getBoundingRect();},remove:function remove(){this.getContentGroup().removeAll(),this._isFirstRender=!0;}});Os(function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.filterSeries(function(t){for(var i=0;i<e.length;i++){if(!e[i].isSelected(t.name))return!1;}return!0;});}),lI.registerSubTypeDefaulter("legend",function(){return"plain";});var eN=KP.extend({type:"legend.scroll",setScrollDataIndex:function setScrollDataIndex(t){this.option.scrollDataIndex=t;},defaultOption:{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800},init:function init(t,e,i,n){var o=ga(t);eN.superCall(this,"init",t,e,i,n),Iv(this,t,o);},mergeOption:function mergeOption(t,e){eN.superCall(this,"mergeOption",t,e),Iv(this,this.option,t);},getOrient:function getOrient(){return"vertical"===this.get("orient")?{index:1,name:"vertical"}:{index:0,name:"horizontal"};}}),iN=tb,nN=["width","height"],oN=["x","y"],aN=tN.extend({type:"legend.scroll",newlineDisabled:!0,init:function init(){aN.superCall(this,"init"),this._currentIndex=0,this.group.add(this._containerGroup=new iN()),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new iN()),this._showController;},resetInner:function resetInner(){aN.superCall(this,"resetInner"),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null;},renderInner:function renderInner(t,e,i,n){function o(t,i){var o=t+"DataIndex",l=Po(e.get("pageIcons",!0)[e.getOrient().name][i],{onclick:m(a._pageGo,a,o,e,n)},{x:-s[0]/2,y:-s[1]/2,width:s[0],height:s[1]});l.name=t,r.add(l);}var a=this;aN.superCall(this,"renderInner",t,e,i,n);var r=this._controllerGroup,s=e.get("pageIconSize",!0);y(s)||(s=[s,s]),o("pagePrev",0);var l=e.getModel("pageTextStyle");r.add(new rM({name:"pageText",style:{textFill:l.getTextColor(),font:l.getFont(),textVerticalAlign:"middle",textAlign:"center"},silent:!0})),o("pageNext",1);},layoutInner:function layoutInner(t,e,i,n){var o=this.getContentGroup(),a=this._containerGroup,r=this._controllerGroup,s=t.getOrient().index,l=nN[s],u=nN[1-s],h=oN[1-s];aI(t.get("orient"),o,t.get("itemGap"),s?i.width:null,s?null:i.height),aI("horizontal",r,t.get("pageButtonItemGap",!0));var c=o.getBoundingRect(),d=r.getBoundingRect(),f=this._showController=c[l]>i[l],p=[-c.x,-c.y];n||(p[s]=o.position[s]);var g=[0,0],m=[-d.x,-d.y],v=A(t.get("pageButtonGap",!0),t.get("itemGap",!0));f&&("end"===t.get("pageButtonPosition",!0)?m[s]+=i[l]-d[l]:g[s]+=d[l]+v),m[1-s]+=c[u]/2-d[u]/2,o.attr("position",p),a.attr("position",g),r.attr("position",m);var y=this.group.getBoundingRect();if((y={x:0,y:0})[l]=f?i[l]:c[l],y[u]=Math.max(c[u],d[u]),y[h]=Math.min(0,d[h]+m[1-s]),a.__rectSize=i[l],f){var x={x:0,y:0};x[l]=Math.max(i[l]-d[l]-v,0),x[u]=y[u],a.setClipPath(new yM({shape:x})),a.__rectSize=x[l];}else r.eachChild(function(t){t.attr({invisible:!0,silent:!0});});var _=this._getPageInfo(t);return null!=_.pageIndex&&Io(o,{position:_.contentPosition},!!f&&t),this._updatePageInfoView(t,_),y;},_pageGo:function _pageGo(t,e,i){var n=this._getPageInfo(e)[t];null!=n&&i.dispatchAction({type:"legendScroll",scrollDataIndex:n,legendId:e.id});},_updatePageInfoView:function _updatePageInfoView(t,e){var i=this._controllerGroup;d(["pagePrev","pageNext"],function(n){var o=null!=e[n+"DataIndex"],a=i.childOfName(n);a&&(a.setStyle("fill",o?t.get("pageIconColor",!0):t.get("pageIconInactiveColor",!0)),a.cursor=o?"pointer":"default");});var n=i.childOfName("pageText"),o=t.get("pageFormatter"),a=e.pageIndex,r=null!=a?a+1:0,s=e.pageCount;n&&o&&n.setStyle("text",_(o)?o.replace("{current}",r).replace("{total}",s):o({current:r,total:s}));},_getPageInfo:function _getPageInfo(t){function e(t){if(t){var e=t.getBoundingRect(),i=e[l]+t.position[r];return{s:i,e:i+e[s],i:t.__legendDataIndex};}}function i(t,e){return t.e>=e&&t.s<=e+a;}var n=t.get("scrollDataIndex",!0),o=this.getContentGroup(),a=this._containerGroup.__rectSize,r=t.getOrient().index,s=nN[r],l=oN[r],u=this._findTargetItemIndex(n),h=o.children(),c=h[u],d=h.length,f=d?1:0,p={contentPosition:o.position.slice(),pageCount:f,pageIndex:f-1,pagePrevDataIndex:null,pageNextDataIndex:null};if(!c)return p;var g=e(c);p.contentPosition[r]=-g.s;for(var m=u+1,v=g,y=g,x=null;m<=d;++m){(!(x=e(h[m]))&&y.e>v.s+a||x&&!i(x,v.s))&&(v=y.i>v.i?y:x)&&(null==p.pageNextDataIndex&&(p.pageNextDataIndex=v.i),++p.pageCount),y=x;}for(var m=u-1,v=g,y=g,x=null;m>=-1;--m){(x=e(h[m]))&&i(y,x.s)||!(v.i<y.i)||(y=v,null==p.pagePrevDataIndex&&(p.pagePrevDataIndex=v.i),++p.pageCount,++p.pageIndex),v=x;}return p;},_findTargetItemIndex:function _findTargetItemIndex(t){var e,i=this.getContentGroup();return this._showController?i.eachChild(function(i,n){i.__legendDataIndex===t&&(e=n);}):e=0,e;}});Es("legendScroll","legendscroll",function(t,e){var i=t.scrollDataIndex;null!=i&&e.eachComponent({mainType:"legend",subType:"scroll",query:t},function(t){t.setScrollDataIndex(i);});}),Fs({type:"tooltip",dependencies:["axisPointer"],defaultOption:{zlevel:0,z:60,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",renderMode:"auto",confine:!1,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#fff",fontSize:14}}});var rN=d,sN=ea,lN=["","-webkit-","-moz-","-o-"];Cv.prototype={constructor:Cv,_enterable:!0,update:function update(){var t=this._container,e=t.currentStyle||document.defaultView.getComputedStyle(t),i=t.style;"absolute"!==i.position&&"absolute"!==e.position&&(i.position="relative");},show:function show(t){clearTimeout(this._hideTimeout);var e=this.el;e.style.cssText="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;"+Dv(t)+";left:"+this._x+"px;top:"+this._y+"px;"+(t.get("extraCssText")||""),e.style.display=e.innerHTML?"block":"none",e.style.pointerEvents=this._enterable?"auto":"none",this._show=!0;},setContent:function setContent(t){this.el.innerHTML=null==t?"":t;},setEnterable:function setEnterable(t){this._enterable=t;},getSize:function getSize(){var t=this.el;return[t.clientWidth,t.clientHeight];},moveTo:function moveTo(t,e){var i,n=this._zr;n&&n.painter&&(i=n.painter.getViewportRootOffset())&&(t+=i.offsetLeft,e+=i.offsetTop);var o=this.el.style;o.left=t+"px",o.top=e+"px",this._x=t,this._y=e;},hide:function hide(){this.el.style.display="none",this._show=!1;},hideLater:function hideLater(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(m(this.hide,this),t)):this.hide());},isShow:function isShow(){return this._show;},getOuterSize:function getOuterSize(){var t=this.el.clientWidth,e=this.el.clientHeight;if(document.defaultView&&document.defaultView.getComputedStyle){var i=document.defaultView.getComputedStyle(this.el);i&&(t+=parseInt(i.paddingLeft,10)+parseInt(i.paddingRight,10)+parseInt(i.borderLeftWidth,10)+parseInt(i.borderRightWidth,10),e+=parseInt(i.paddingTop,10)+parseInt(i.paddingBottom,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10));}return{width:t,height:e};}},Lv.prototype={constructor:Lv,_enterable:!0,update:function update(){},show:function show(t){this._hideTimeout&&clearTimeout(this._hideTimeout),this.el.attr("show",!0),this._show=!0;},setContent:function setContent(t,e,i){this.el&&this._zr.remove(this.el);for(var n={},o=t,a=o.indexOf("{marker");a>=0;){var r=o.indexOf("|}"),s=o.substr(a+"{marker".length,r-a-"{marker".length);s.indexOf("sub")>-1?n["marker"+s]={textWidth:4,textHeight:4,textBorderRadius:2,textBackgroundColor:e[s],textOffset:[3,0]}:n["marker"+s]={textWidth:10,textHeight:10,textBorderRadius:5,textBackgroundColor:e[s]},a=(o=o.substr(r+1)).indexOf("{marker");}this.el=new rM({style:{rich:n,text:t,textLineHeight:20,textBackgroundColor:i.get("backgroundColor"),textBorderRadius:i.get("borderRadius"),textFill:i.get("textStyle.color"),textPadding:i.get("padding")},z:i.get("z")}),this._zr.add(this.el);var l=this;this.el.on("mouseover",function(){l._enterable&&(clearTimeout(l._hideTimeout),l._show=!0),l._inContent=!0;}),this.el.on("mouseout",function(){l._enterable&&l._show&&l.hideLater(l._hideDelay),l._inContent=!1;});},setEnterable:function setEnterable(t){this._enterable=t;},getSize:function getSize(){var t=this.el.getBoundingRect();return[t.width,t.height];},moveTo:function moveTo(t,e){this.el&&this.el.attr("position",[t,e]);},hide:function hide(){this.el.hide(),this._show=!1;},hideLater:function hideLater(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(m(this.hide,this),t)):this.hide());},isShow:function isShow(){return this._show;},getOuterSize:function getOuterSize(){return this.getSize();}};var uN=m,hN=d,cN=Vo,dN=new yM({shape:{x:-1,y:-1,width:2,height:2}});Ws({type:"tooltip",init:function init(t,e){if(!U_.node){var i=t.getComponent("tooltip").get("renderMode");this._renderMode=Hi(i);var n;"html"===this._renderMode?(n=new Cv(e.getDom(),e),this._newLine="<br/>"):(n=new Lv(e),this._newLine="\n"),this._tooltipContent=n;}},render:function render(t,e,i){if(!U_.node){this.group.removeAll(),this._tooltipModel=t,this._ecModel=e,this._api=i,this._lastDataByCoordSys=null,this._alwaysShowContent=t.get("alwaysShowContent");var n=this._tooltipContent;n.update(),n.setEnterable(t.get("enterable")),this._initGlobalListener(),this._keepShow();}},_initGlobalListener:function _initGlobalListener(){var t=this._tooltipModel.get("triggerOn");um("itemTooltip",this._api,uN(function(e,i,n){"none"!==t&&(t.indexOf(e)>=0?this._tryShow(i,n):"leave"===e&&this._hide(n));},this));},_keepShow:function _keepShow(){var t=this._tooltipModel,e=this._ecModel,i=this._api;if(null!=this._lastX&&null!=this._lastY&&"none"!==t.get("triggerOn")){var n=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout(function(){n.manuallyShowTip(t,e,i,{x:n._lastX,y:n._lastY});});}},manuallyShowTip:function manuallyShowTip(t,e,i,n){if(n.from!==this.uid&&!U_.node){var o=Pv(n,i);this._ticket="";var a=n.dataByCoordSys;if(n.tooltip&&null!=n.x&&null!=n.y){var r=dN;r.position=[n.x,n.y],r.update(),r.tooltip=n.tooltip,this._tryShow({offsetX:n.x,offsetY:n.y,target:r},o);}else if(a)this._tryShow({offsetX:n.x,offsetY:n.y,position:n.position,event:{},dataByCoordSys:n.dataByCoordSys,tooltipOption:n.tooltipOption},o);else if(null!=n.seriesIndex){if(this._manuallyAxisShowTip(t,e,i,n))return;var s=xP(n,e),l=s.point[0],u=s.point[1];null!=l&&null!=u&&this._tryShow({offsetX:l,offsetY:u,position:n.position,target:s.el,event:{}},o);}else null!=n.x&&null!=n.y&&(i.dispatchAction({type:"updateAxisPointer",x:n.x,y:n.y}),this._tryShow({offsetX:n.x,offsetY:n.y,position:n.position,target:i.getZr().findHover(n.x,n.y).target,event:{}},o));}},manuallyHideTip:function manuallyHideTip(t,e,i,n){var o=this._tooltipContent;!this._alwaysShowContent&&this._tooltipModel&&o.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=null,n.from!==this.uid&&this._hide(Pv(n,i));},_manuallyAxisShowTip:function _manuallyAxisShowTip(t,e,i,n){var o=n.seriesIndex,a=n.dataIndex,r=e.getComponent("axisPointer").coordSysAxesInfo;if(null!=o&&null!=a&&null!=r){var s=e.getSeriesByIndex(o);if(s&&"axis"===(t=kv([s.getData().getItemModel(a),s,(s.coordinateSystem||{}).model,t])).get("trigger"))return i.dispatchAction({type:"updateAxisPointer",seriesIndex:o,dataIndex:a,position:n.position}),!0;}},_tryShow:function _tryShow(t,e){var i=t.target;if(this._tooltipModel){this._lastX=t.offsetX,this._lastY=t.offsetY;var n=t.dataByCoordSys;n&&n.length?this._showAxisTooltip(n,t):i&&null!=i.dataIndex?(this._lastDataByCoordSys=null,this._showSeriesItemTooltip(t,i,e)):i&&i.tooltip?(this._lastDataByCoordSys=null,this._showComponentItemTooltip(t,i,e)):(this._lastDataByCoordSys=null,this._hide(e));}},_showOrMove:function _showOrMove(t,e){var i=t.get("showDelay");e=m(e,this),clearTimeout(this._showTimout),i>0?this._showTimout=setTimeout(e,i):e();},_showAxisTooltip:function _showAxisTooltip(t,e){var i=this._ecModel,o=this._tooltipModel,a=[e.offsetX,e.offsetY],r=[],s=[],l=kv([e.tooltipOption,o]),u=this._renderMode,h=this._newLine,c={};hN(t,function(t){hN(t.dataByAxis,function(t){var e=i.getComponent(t.axisDim+"Axis",t.axisIndex),o=t.value,a=[];if(e&&null!=o){var l=Im(o,e.axis,i,t.seriesDataIndices,t.valueLabelOpt);d(t.seriesDataIndices,function(r){var h=i.getSeriesByIndex(r.seriesIndex),d=r.dataIndexInside,f=h&&h.getDataParams(d);if(f.axisDim=t.axisDim,f.axisIndex=t.axisIndex,f.axisType=t.axisType,f.axisId=t.axisId,f.axisValue=Xl(e.axis,o),f.axisValueLabel=l,f){s.push(f);var p,g=h.formatTooltip(d,!0,null,u);if(w(g)){p=g.html;var m=g.markers;n(c,m);}else p=g;a.push(p);}});var f=l;"html"!==u?r.push(a.join(h)):r.push((f?ia(f)+h:"")+a.join(h));}});},this),r.reverse(),r=r.join(this._newLine+this._newLine);var f=e.position;this._showOrMove(l,function(){this._updateContentNotChangedOnAxis(t)?this._updatePosition(l,f,a[0],a[1],this._tooltipContent,s):this._showTooltipContent(l,r,s,Math.random(),a[0],a[1],f,void 0,c);});},_showSeriesItemTooltip:function _showSeriesItemTooltip(t,e,i){var n=this._ecModel,o=e.seriesIndex,a=n.getSeriesByIndex(o),r=e.dataModel||a,s=e.dataIndex,l=e.dataType,u=r.getData(),h=kv([u.getItemModel(s),r,a&&(a.coordinateSystem||{}).model,this._tooltipModel]),c=h.get("trigger");if(null==c||"item"===c){var d,f,p=r.getDataParams(s,l),g=r.formatTooltip(s,!1,l,this._renderMode);w(g)?(d=g.html,f=g.markers):(d=g,f=null);var m="item_"+r.name+"_"+s;this._showOrMove(h,function(){this._showTooltipContent(h,d,p,m,t.offsetX,t.offsetY,t.position,t.target,f);}),i({type:"showTip",dataIndexInside:s,dataIndex:u.getRawIndex(s),seriesIndex:o,from:this.uid});}},_showComponentItemTooltip:function _showComponentItemTooltip(t,e,i){var n=e.tooltip;if("string"==typeof n){var o=n;n={content:o,formatter:o};}var a=new No(n,this._tooltipModel,this._ecModel),r=a.get("content"),s=Math.random();this._showOrMove(a,function(){this._showTooltipContent(a,r,a.get("formatterParams")||{},s,t.offsetX,t.offsetY,t.position,e);}),i({type:"showTip",from:this.uid});},_showTooltipContent:function _showTooltipContent(t,e,i,n,o,a,r,s,l){if(this._ticket="",t.get("showContent")&&t.get("show")){var u=this._tooltipContent,h=t.get("formatter");r=r||t.get("position");var c=e;if(h&&"string"==typeof h)c=na(h,i,!0);else if("function"==typeof h){var d=uN(function(e,n){e===this._ticket&&(u.setContent(n,l,t),this._updatePosition(t,r,o,a,u,i,s));},this);this._ticket=n,c=h(i,n,d);}u.setContent(c,l,t),u.show(t),this._updatePosition(t,r,o,a,u,i,s);}},_updatePosition:function _updatePosition(t,e,i,n,o,a,r){var s=this._api.getWidth(),l=this._api.getHeight();e=e||t.get("position");var u=o.getSize(),h=t.get("align"),c=t.get("verticalAlign"),d=r&&r.getBoundingRect().clone();if(r&&d.applyTransform(r.transform),"function"==typeof e&&(e=e([i,n],a,o.el,d,{viewSize:[s,l],contentSize:u.slice()})),y(e))i=cN(e[0],s),n=cN(e[1],l);else if(w(e)){e.width=u[0],e.height=u[1];var f=ca(e,{width:s,height:l});i=f.x,n=f.y,h=null,c=null;}else"string"==typeof e&&r?(i=(p=Ev(e,d,u))[0],n=p[1]):(i=(p=Nv(i,n,o,s,l,h?null:20,c?null:20))[0],n=p[1]);if(h&&(i-=Rv(h)?u[0]/2:"right"===h?u[0]:0),c&&(n-=Rv(c)?u[1]/2:"bottom"===c?u[1]:0),t.get("confine")){var p=Ov(i,n,o,s,l);i=p[0],n=p[1];}o.moveTo(i,n);},_updateContentNotChangedOnAxis:function _updateContentNotChangedOnAxis(t){var e=this._lastDataByCoordSys,i=!!e&&e.length===t.length;return i&&hN(e,function(e,n){var o=e.dataByAxis||{},a=(t[n]||{}).dataByAxis||[];(i&=o.length===a.length)&&hN(o,function(t,e){var n=a[e]||{},o=t.seriesDataIndices||[],r=n.seriesDataIndices||[];(i&=t.value===n.value&&t.axisType===n.axisType&&t.axisId===n.axisId&&o.length===r.length)&&hN(o,function(t,e){var n=r[e];i&=t.seriesIndex===n.seriesIndex&&t.dataIndex===n.dataIndex;});});}),this._lastDataByCoordSys=t,!!i;},_hide:function _hide(t){this._lastDataByCoordSys=null,t({type:"hideTip",from:this.uid});},dispose:function dispose(t,e){U_.node||(this._tooltipContent.hide(),gm("itemTooltip",e));}}),Es({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},function(){}),Es({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},function(){}),Gv.prototype={constructor:Gv,pointToData:function pointToData(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1];},dataToRadius:aD.prototype.dataToCoord,radiusToData:aD.prototype.coordToData},u(Gv,aD);var fN=Bi();Fv.prototype={constructor:Fv,pointToData:function pointToData(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1];},dataToAngle:aD.prototype.dataToCoord,angleToData:aD.prototype.coordToData,calculateCategoryInterval:function calculateCategoryInterval(){var t=this,e=t.getLabelModel(),i=t.scale,n=i.getExtent(),o=i.count();if(n[1]-n[0]<1)return 0;var a=n[0],r=t.dataToCoord(a+1)-t.dataToCoord(a),s=Math.abs(r),l=ke(a,e.getFont(),"center","top"),u=Math.max(l.height,7)/s;isNaN(u)&&(u=1/0);var h=Math.max(0,Math.floor(u)),c=fN(t.model),d=c.lastAutoInterval,f=c.lastTickCount;return null!=d&&null!=f&&Math.abs(d-h)<=1&&Math.abs(f-o)<=1&&d>h?h=d:(c.lastTickCount=o,c.lastAutoInterval=h),h;}},u(Fv,aD);var pN=function pN(t){this.name=t||"",this.cx=0,this.cy=0,this._radiusAxis=new Gv(),this._angleAxis=new Fv(),this._radiusAxis.polar=this._angleAxis.polar=this;};pN.prototype={type:"polar",axisPointerEnabled:!0,constructor:pN,dimensions:["radius","angle"],model:null,containPoint:function containPoint(t){var e=this.pointToCoord(t);return this._radiusAxis.contain(e[0])&&this._angleAxis.contain(e[1]);},containData:function containData(t){return this._radiusAxis.containData(t[0])&&this._angleAxis.containData(t[1]);},getAxis:function getAxis(t){return this["_"+t+"Axis"];},getAxes:function getAxes(){return[this._radiusAxis,this._angleAxis];},getAxesByScale:function getAxesByScale(t){var e=[],i=this._angleAxis,n=this._radiusAxis;return i.scale.type===t&&e.push(i),n.scale.type===t&&e.push(n),e;},getAngleAxis:function getAngleAxis(){return this._angleAxis;},getRadiusAxis:function getRadiusAxis(){return this._radiusAxis;},getOtherAxis:function getOtherAxis(t){var e=this._angleAxis;return t===e?this._radiusAxis:e;},getBaseAxis:function getBaseAxis(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAngleAxis();},getTooltipAxes:function getTooltipAxes(t){var e=null!=t&&"auto"!==t?this.getAxis(t):this.getBaseAxis();return{baseAxes:[e],otherAxes:[this.getOtherAxis(e)]};},dataToPoint:function dataToPoint(t,e){return this.coordToPoint([this._radiusAxis.dataToRadius(t[0],e),this._angleAxis.dataToAngle(t[1],e)]);},pointToData:function pointToData(t,e){var i=this.pointToCoord(t);return[this._radiusAxis.radiusToData(i[0],e),this._angleAxis.angleToData(i[1],e)];},pointToCoord:function pointToCoord(t){var e=t[0]-this.cx,i=t[1]-this.cy,n=this.getAngleAxis(),o=n.getExtent(),a=Math.min(o[0],o[1]),r=Math.max(o[0],o[1]);n.inverse?a=r-360:r=a+360;var s=Math.sqrt(e*e+i*i);e/=s,i/=s;for(var l=Math.atan2(-i,e)/Math.PI*180,u=l<a?1:-1;l<a||l>r;){l+=360*u;}return[s,l];},coordToPoint:function coordToPoint(t){var e=t[0],i=t[1]/180*Math.PI;return[Math.cos(i)*e+this.cx,-Math.sin(i)*e+this.cy];}};var gN=lI.extend({type:"polarAxis",axis:null,getCoordSysModel:function getCoordSysModel(){return this.ecModel.queryComponents({mainType:"polar",index:this.option.polarIndex,id:this.option.polarId})[0];}});n(gN.prototype,UA);var mN={angle:{startAngle:90,clockwise:!0,splitNumber:12,axisLabel:{rotate:!1}},radius:{splitNumber:5}};ED("angle",gN,Wv,mN.angle),ED("radius",gN,Wv,mN.radius),Fs({type:"polar",dependencies:["polarAxis","angleAxis"],coordinateSystem:null,findAxisModel:function findAxisModel(t){var e;return this.ecModel.eachComponent(t,function(t){t.getCoordSysModel()===this&&(e=t);},this),e;},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"80%"}});var vN={dimensions:pN.prototype.dimensions,create:function create(t,e){var i=[];return t.eachComponent("polar",function(t,n){var o=new pN(n);o.update=Zv;var a=o.getRadiusAxis(),r=o.getAngleAxis(),s=t.findAxisModel("radiusAxis"),l=t.findAxisModel("angleAxis");Uv(a,s),Uv(r,l),Hv(o,t,e),i.push(o),t.coordinateSystem=o,o.model=t;}),t.eachSeries(function(e){if("polar"===e.get("coordinateSystem")){var i=t.queryComponents({mainType:"polar",index:e.get("polarIndex"),id:e.get("polarId")})[0];e.coordinateSystem=i.coordinateSystem;}}),i;}};Fa.register("polar",vN);var yN=["axisLine","axisLabel","axisTick","splitLine","splitArea"];XD.extend({type:"angleAxis",axisPointerClass:"PolarAxisPointer",render:function render(t,e){if(this.group.removeAll(),t.get("show")){var n=t.axis,o=n.polar,a=o.getRadiusAxis().getExtent(),r=n.getTicksCoords(),s=f(n.getViewLabels(),function(t){return(t=i(t)).coord=n.dataToCoord(t.tickValue),t;});Yv(s),Yv(r),d(yN,function(e){!t.get(e+".show")||n.scale.isBlank()&&"axisLine"!==e||this["_"+e](t,o,r,a,s);},this);}},_axisLine:function _axisLine(t,e,i,n){var o=t.getModel("axisLine.lineStyle"),a=new sM({shape:{cx:e.cx,cy:e.cy,r:n[jv(e)]},style:o.getLineStyle(),z2:1,silent:!0});a.style.fill=null,this.group.add(a);},_axisTick:function _axisTick(t,e,i,n){var o=t.getModel("axisTick"),a=(o.get("inside")?-1:1)*o.get("length"),s=n[jv(e)],l=f(i,function(t){return new _M({shape:Xv(e,[s,s+a],t.coord)});});this.group.add(OM(l,{style:r(o.getModel("lineStyle").getLineStyle(),{stroke:t.get("axisLine.lineStyle.color")})}));},_axisLabel:function _axisLabel(t,e,i,n,o){var a=t.getCategories(!0),r=t.getModel("axisLabel"),s=r.get("margin");d(o,function(i,o){var l=r,u=i.tickValue,h=n[jv(e)],c=e.coordToPoint([h+s,i.coord]),d=e.cx,f=e.cy,p=Math.abs(c[0]-d)/h<.3?"center":c[0]>d?"left":"right",g=Math.abs(c[1]-f)/h<.3?"middle":c[1]>f?"top":"bottom";a&&a[u]&&a[u].textStyle&&(l=new No(a[u].textStyle,r,r.ecModel));var m=new rM({silent:!0});this.group.add(m),mo(m.style,l,{x:c[0],y:c[1],textFill:l.getTextColor()||t.get("axisLine.lineStyle.color"),text:i.formattedLabel,textAlign:p,textVerticalAlign:g});},this);},_splitLine:function _splitLine(t,e,i,n){var o=t.getModel("splitLine").getModel("lineStyle"),a=o.get("color"),s=0;a=a instanceof Array?a:[a];for(var l=[],u=0;u<i.length;u++){var h=s++%a.length;l[h]=l[h]||[],l[h].push(new _M({shape:Xv(e,n,i[u].coord)}));}for(u=0;u<l.length;u++){this.group.add(OM(l[u],{style:r({stroke:a[u%a.length]},o.getLineStyle()),silent:!0,z:t.get("z")}));}},_splitArea:function _splitArea(t,e,i,n){if(i.length){var o=t.getModel("splitArea").getModel("areaStyle"),a=o.get("color"),s=0;a=a instanceof Array?a:[a];for(var l=[],u=Math.PI/180,h=-i[0].coord*u,c=Math.min(n[0],n[1]),d=Math.max(n[0],n[1]),f=t.get("clockwise"),p=1;p<i.length;p++){var g=s++%a.length;l[g]=l[g]||[],l[g].push(new hM({shape:{cx:e.cx,cy:e.cy,r0:c,r:d,startAngle:h,endAngle:-i[p].coord*u,clockwise:f},silent:!0})),h=-i[p].coord*u;}for(p=0;p<l.length;p++){this.group.add(OM(l[p],{style:r({fill:a[p%a.length]},o.getAreaStyle()),silent:!0}));}}}});var xN=["axisLine","axisTickLabel","axisName"],_N=["splitLine","splitArea"];XD.extend({type:"radiusAxis",axisPointerClass:"PolarAxisPointer",render:function render(t,e){if(this.group.removeAll(),t.get("show")){var i=t.axis,n=i.polar,o=n.getAngleAxis(),a=i.getTicksCoords(),r=o.getExtent()[0],s=i.getExtent(),l=qv(n,t,r),u=new FD(t,l);d(xN,u.add,u),this.group.add(u.getGroup()),d(_N,function(e){t.get(e+".show")&&!i.scale.isBlank()&&this["_"+e](t,n,r,s,a);},this);}},_splitLine:function _splitLine(t,e,i,n,o){var a=t.getModel("splitLine").getModel("lineStyle"),s=a.get("color"),l=0;s=s instanceof Array?s:[s];for(var u=[],h=0;h<o.length;h++){var c=l++%s.length;u[c]=u[c]||[],u[c].push(new sM({shape:{cx:e.cx,cy:e.cy,r:o[h].coord},silent:!0}));}for(h=0;h<u.length;h++){this.group.add(OM(u[h],{style:r({stroke:s[h%s.length],fill:null},a.getLineStyle()),silent:!0}));}},_splitArea:function _splitArea(t,e,i,n,o){if(o.length){var a=t.getModel("splitArea").getModel("areaStyle"),s=a.get("color"),l=0;s=s instanceof Array?s:[s];for(var u=[],h=o[0].coord,c=1;c<o.length;c++){var d=l++%s.length;u[d]=u[d]||[],u[d].push(new hM({shape:{cx:e.cx,cy:e.cy,r0:h,r:o[c].coord,startAngle:0,endAngle:2*Math.PI},silent:!0})),h=o[c].coord;}for(c=0;c<u.length;c++){this.group.add(OM(u[c],{style:r({fill:s[c%s.length]},a.getAreaStyle()),silent:!0}));}}}});var wN=mm.extend({makeElOption:function makeElOption(t,e,i,n,o){var a=i.axis;"angle"===a.dim&&(this.animationThreshold=Math.PI/18);var r,s=a.polar,l=s.getOtherAxis(a).getExtent();r=a["dataTo"+la(a.dim)](e);var u=n.get("type");if(u&&"none"!==u){var h=bm(n),c=bN[u](a,s,r,l,h);c.style=h,t.graphicKey=c.type,t.pointer=c;}Sm(t,i,n,o,Kv(e,i,0,s,n.get("label.margin")));}}),bN={line:function line(t,e,i,n,o){return"angle"===t.dim?{type:"Line",shape:Dm(e.coordToPoint([n[0],i]),e.coordToPoint([n[1],i]))}:{type:"Circle",shape:{cx:e.cx,cy:e.cy,r:i}};},shadow:function shadow(t,e,i,n,o){var a=Math.max(1,t.getBandWidth()),r=Math.PI/180;return"angle"===t.dim?{type:"Sector",shape:Lm(e.cx,e.cy,n[0],n[1],(-i-a/2)*r,(a/2-i)*r)}:{type:"Sector",shape:Lm(e.cx,e.cy,i-a/2,i+a/2,0,2*Math.PI)};}};XD.registerAxisPointerClass("PolarAxisPointer",wN),zs(v(function(t,e,i){i.getWidth(),i.getHeight();var n={},o=Vv(g(e.getSeriesByType(t),function(t){return!e.isSeriesFiltered(t)&&t.coordinateSystem&&"polar"===t.coordinateSystem.type;}));e.eachSeriesByType(t,function(t){if("polar"===t.coordinateSystem.type){var e=t.getData(),i=t.coordinateSystem,a=i.getBaseAxis(),r=zv(t),s=o[Bv(a)][r],l=s.offset,u=s.width,h=i.getOtherAxis(a),c=t.coordinateSystem.cx,d=t.coordinateSystem.cy,f=t.get("barMinHeight")||0,p=t.get("barMinAngle")||0;n[r]=n[r]||[];for(var g=e.mapDimension(h.dim),m=e.mapDimension(a.dim),v=pl(e,g),y=h.getExtent()[0],x=0,_=e.count();x<_;x++){var w=e.get(g,x),b=e.get(m,x);if(!isNaN(w)){var S=w>=0?"p":"n",M=y;v&&(n[r][b]||(n[r][b]={p:y,n:y}),M=n[r][b][S]);var I,T,A,D;if("radius"===h.dim){var C=h.dataToRadius(w)-y,L=a.dataToAngle(b);Math.abs(C)<f&&(C=(C<0?-1:1)*f),I=M,T=M+C,D=(A=L-l)-u,v&&(n[r][b][S]=T);}else{var k=h.dataToAngle(w,!0)-y,P=a.dataToRadius(b);Math.abs(k)<p&&(k=(k<0?-1:1)*p),T=(I=P+l)+u,A=M,D=M+k,v&&(n[r][b][S]=D);}e.setItemLayout(x,{cx:c,cy:d,r0:I,r:T,startAngle:-A*Math.PI/180,endAngle:-D*Math.PI/180});}}}},this);},"bar")),Ws({type:"polar"}),h(lI.extend({type:"geo",coordinateSystem:null,layoutMode:"box",init:function init(t){lI.prototype.init.apply(this,arguments),Ci(t,"label",["show"]);},optionUpdated:function optionUpdated(){var t=this.option,e=this;t.regions=GC.getFilledRegions(t.regions,t.map,t.nameMap),this._optionModelMap=p(t.regions||[],function(t,i){return i.name&&t.set(i.name,new No(i,e)),t;},R()),this.updateSelectedMap(t.regions);},defaultOption:{zlevel:0,z:0,show:!0,left:"center",top:"center",aspectScale:null,silent:!1,map:"",boundingCoords:null,center:null,zoom:1,scaleLimit:null,label:{show:!1,color:"#000"},itemStyle:{borderWidth:.5,borderColor:"#444",color:"#eee"},emphasis:{label:{show:!0,color:"rgb(100,0,0)"},itemStyle:{color:"rgba(255,215,0,0.8)"}},regions:[]},getRegionModel:function getRegionModel(t){return this._optionModelMap.get(t)||new No(null,this,this.ecModel);},getFormattedLabel:function getFormattedLabel(t,e){var i=this.getRegionModel(t).get("label."+e+".formatter"),n={name:t};return"function"==typeof i?(n.status=e,i(n)):"string"==typeof i?i.replace("{a}",null!=t?t:""):void 0;},setZoom:function setZoom(t){this.option.zoom=t;},setCenter:function setCenter(t){this.option.center=t;}}),aC),Ws({type:"geo",init:function init(t,e){var i=new xc(e,!0);this._mapDraw=i,this.group.add(i.group);},render:function render(t,e,i,n){if(!n||"geoToggleSelect"!==n.type||n.from!==this.uid){var o=this._mapDraw;t.get("show")?o.draw(t,e,i,this,n):this._mapDraw.group.removeAll(),this.group.silent=t.get("silent");}},dispose:function dispose(){this._mapDraw&&this._mapDraw.remove();}}),$v("toggleSelected",{type:"geoToggleSelect",event:"geoselectchanged"}),$v("select",{type:"geoSelect",event:"geoselected"}),$v("unSelect",{type:"geoUnSelect",event:"geounselected"});var SN=["rect","polygon","keep","clear"],MN=d,IN={lineX:oy(0),lineY:oy(1),rect:{point:function point(t,e,i){return t&&i.boundingRect.contain(t[0],t[1]);},rect:function rect(t,e,i){return t&&i.boundingRect.intersect(t);}},polygon:{point:function point(t,e,i){return t&&i.boundingRect.contain(t[0],t[1])&&tu(i.range,t[0],t[1]);},rect:function rect(t,e,i){var n=i.range;if(!t||n.length<=1)return!1;var o=t.x,a=t.y,r=t.width,s=t.height,l=n[0];return!!(tu(n,o,a)||tu(n,o+r,a)||tu(n,o,a+s)||tu(n,o+r,a+s)||de.create(t).contain(l[0],l[1])||ry(o,a,o+r,a,n)||ry(o,a,o,a+s,n)||ry(o+r,a,o+r,a+s,n)||ry(o,a+s,o+r,a+s,n))||void 0;}}},TN=d,AN=l,DN=v,CN=["dataToPoint","pointToData"],LN=["grid","xAxis","yAxis","geo","graph","polar","radiusAxis","angleAxis","bmap"],kN=hy.prototype;kN.setOutputRanges=function(t,e){this.matchOutputRanges(t,e,function(t,e,i){if((t.coordRanges||(t.coordRanges=[])).push(e),!t.coordRange){t.coordRange=e;var n=EN[t.brushType](0,i,e);t.__rangeOffset={offset:RN[t.brushType](n.values,t.range,[1,1]),xyMinMax:n.xyMinMax};}});},kN.matchOutputRanges=function(t,e,i){TN(t,function(t){var n=this.findTargetInfo(t,e);n&&!0!==n&&d(n.coordSyses,function(n){var o=EN[t.brushType](1,n,t.range);i(t,o.values,n,e);});},this);},kN.setInputRanges=function(t,e){TN(t,function(t){var i=this.findTargetInfo(t,e);if(t.range=t.range||[],i&&!0!==i){t.panelId=i.panelId;var n=EN[t.brushType](0,i.coordSys,t.coordRange),o=t.__rangeOffset;t.range=o?RN[t.brushType](n.values,o.offset,gy(n.xyMinMax,o.xyMinMax)):n.values;}},this);},kN.makePanelOpts=function(t,e){return f(this._targetInfoList,function(i){var n=i.getPanelRect();return{panelId:i.panelId,defaultBrushType:e&&e(i),clipPath:yp(n),isTargetByCursor:_p(n,t,i.coordSysModel),getLinearBrushOtherExtent:xp(n)};});},kN.controlSeries=function(t,e,i){var n=this.findTargetInfo(t,i);return!0===n||n&&AN(n.coordSyses,e.coordinateSystem)>=0;},kN.findTargetInfo=function(t,e){for(var i=this._targetInfoList,n=dy(e,t),o=0;o<i.length;o++){var a=i[o],r=t.panelId;if(r){if(a.panelId===r)return a;}else for(o=0;o<NN.length;o++){if(NN[o](n,a))return a;}}return!0;};var PN={grid:function grid(t,e){var i=t.xAxisModels,n=t.yAxisModels,o=t.gridModels,a=R(),r={},s={};(i||n||o)&&(TN(i,function(t){var e=t.axis.grid.model;a.set(e.id,e),r[e.id]=!0;}),TN(n,function(t){var e=t.axis.grid.model;a.set(e.id,e),s[e.id]=!0;}),TN(o,function(t){a.set(t.id,t),r[t.id]=!0,s[t.id]=!0;}),a.each(function(t){var o=t.coordinateSystem,a=[];TN(o.getCartesians(),function(t,e){(AN(i,t.getAxis("x").model)>=0||AN(n,t.getAxis("y").model)>=0)&&a.push(t);}),e.push({panelId:"grid--"+t.id,gridModel:t,coordSysModel:t,coordSys:a[0],coordSyses:a,getPanelRect:ON.grid,xAxisDeclared:r[t.id],yAxisDeclared:s[t.id]});}));},geo:function geo(t,e){TN(t.geoModels,function(t){var i=t.coordinateSystem;e.push({panelId:"geo--"+t.id,geoModel:t,coordSysModel:t,coordSys:i,coordSyses:[i],getPanelRect:ON.geo});});}},NN=[function(t,e){var i=t.xAxisModel,n=t.yAxisModel,o=t.gridModel;return!o&&i&&(o=i.axis.grid.model),!o&&n&&(o=n.axis.grid.model),o&&o===e.gridModel;},function(t,e){var i=t.geoModel;return i&&i===e.geoModel;}],ON={grid:function grid(){return this.coordSys.grid.getRect().clone();},geo:function geo(){var t=this.coordSys,e=t.getBoundingRect().clone();return e.applyTransform(Ao(t)),e;}},EN={lineX:DN(fy,0),lineY:DN(fy,1),rect:function rect(t,e,i){var n=e[CN[t]]([i[0][0],i[1][0]]),o=e[CN[t]]([i[0][1],i[1][1]]),a=[cy([n[0],o[0]]),cy([n[1],o[1]])];return{values:a,xyMinMax:a};},polygon:function polygon(t,e,i){var n=[[1/0,-1/0],[1/0,-1/0]];return{values:f(i,function(i){var o=e[CN[t]](i);return n[0][0]=Math.min(n[0][0],o[0]),n[1][0]=Math.min(n[1][0],o[1]),n[0][1]=Math.max(n[0][1],o[0]),n[1][1]=Math.max(n[1][1],o[1]),o;}),xyMinMax:n};}},RN={lineX:DN(py,0),lineY:DN(py,1),rect:function rect(t,e,i){return[[t[0][0]-i[0]*e[0][0],t[0][1]-i[0]*e[0][1]],[t[1][0]-i[1]*e[1][0],t[1][1]-i[1]*e[1][1]]];},polygon:function polygon(t,e,i){return f(t,function(t,n){return[t[0]-i[0]*e[n][0],t[1]-i[1]*e[n][1]];});}},zN=["inBrush","outOfBrush"],BN="__ecBrushSelect",VN="__ecInBrushSelectEvent",GN=VT.VISUAL.BRUSH;zs(GN,function(t,e,i){t.eachComponent({mainType:"brush"},function(e){i&&"takeGlobalCursor"===i.type&&e.setBrushOption("brush"===i.key?i.brushOption:{brushType:!1}),(e.brushTargetManager=new hy(e.option,t)).setInputRanges(e.areas,t);});}),Bs(GN,function(t,e,n){var o,a,s=[];t.eachComponent({mainType:"brush"},function(e,n){function l(t){return"all"===m||v[t];}function u(t){return!!t.length;}function h(t,e){var i=t.coordinateSystem;w|=i.hasAxisBrushed(),l(e)&&i.eachActiveState(t.getData(),function(t,e){"active"===t&&(x[e]=1);});}function c(i,n,o){var a=_y(i);if(a&&!wy(e,n)&&(d(b,function(n){a[n.brushType]&&e.brushTargetManager.controlSeries(n,i,t)&&o.push(n),w|=u(o);}),l(n)&&u(o))){var r=i.getData();r.each(function(t){xy(a,o,r,t)&&(x[t]=1);});}}var p={brushId:e.id,brushIndex:n,brushName:e.name,areas:i(e.areas),selected:[]};s.push(p);var g=e.option,m=g.brushLink,v=[],x=[],_=[],w=0;n||(o=g.throttleType,a=g.throttleDelay);var b=f(e.areas,function(t){return by(r({boundingRect:FN[t.brushType](t)},t));}),S=ty(e.option,zN,function(t){t.mappingMethod="fixed";});y(m)&&d(m,function(t){v[t]=1;}),t.eachSeries(function(t,e){var i=_[e]=[];"parallel"===t.subType?h(t,e):c(t,e,i);}),t.eachSeries(function(t,e){var i={seriesId:t.id,seriesIndex:e,seriesName:t.name,dataIndex:[]};p.selected.push(i);var n=_y(t),o=_[e],a=t.getData(),r=l(e)?function(t){return x[t]?(i.dataIndex.push(a.getRawIndex(t)),"inBrush"):"outOfBrush";}:function(t){return xy(n,o,a,t)?(i.dataIndex.push(a.getRawIndex(t)),"inBrush"):"outOfBrush";};(l(e)?w:u(o))&&iy(zN,S,a,r);});}),vy(e,o,a,s,n);});var FN={lineX:B,lineY:B,rect:function rect(t){return Sy(t.range);},polygon:function polygon(t){for(var e,i=t.range,n=0,o=i.length;n<o;n++){e=e||[[1/0,-1/0],[1/0,-1/0]];var a=i[n];a[0]<e[0][0]&&(e[0][0]=a[0]),a[0]>e[0][1]&&(e[0][1]=a[0]),a[1]<e[1][0]&&(e[1][0]=a[1]),a[1]>e[1][1]&&(e[1][1]=a[1]);}return e&&Sy(e);}},WN=["#ddd"];Fs({type:"brush",dependencies:["geo","grid","xAxis","yAxis","parallel","series"],defaultOption:{toolbox:null,brushLink:null,seriesIndex:"all",geoIndex:null,xAxisIndex:null,yAxisIndex:null,brushType:"rect",brushMode:"single",transformable:!0,brushStyle:{borderWidth:1,color:"rgba(120,140,180,0.3)",borderColor:"rgba(120,140,180,0.8)"},throttleType:"fixRate",throttleDelay:0,removeOnClick:!0,z:1e4},areas:[],brushType:null,brushOption:{},coordInfoList:[],optionUpdated:function optionUpdated(t,e){var i=this.option;!e&&ey(i,t,["inBrush","outOfBrush"]);var n=i.inBrush=i.inBrush||{};i.outOfBrush=i.outOfBrush||{color:WN},n.hasOwnProperty("liftZ")||(n.liftZ=5);},setAreas:function setAreas(t){t&&(this.areas=f(t,function(t){return My(this.option,t);},this));},setBrushOption:function setBrushOption(t){this.brushOption=My(this.option,t),this.brushType=this.brushOption.brushType;}});Ws({type:"brush",init:function init(t,e){this.ecModel=t,this.api=e,this.model,(this._brushController=new zf(e.getZr())).on("brush",m(this._onBrush,this)).mount();},render:function render(t){return this.model=t,Iy.apply(this,arguments);},updateTransform:Iy,updateView:Iy,dispose:function dispose(){this._brushController.dispose();},_onBrush:function _onBrush(t,e){var n=this.model.id;this.model.brushTargetManager.setOutputRanges(t,this.ecModel),(!e.isEnd||e.removeOnClick)&&this.api.dispatchAction({type:"brush",brushId:n,areas:i(t),$from:n});}}),Es({type:"brush",event:"brush"},function(t,e){e.eachComponent({mainType:"brush",query:t},function(e){e.setAreas(t.areas);});}),Es({type:"brushSelect",event:"brushSelected",update:"none"},function(){});var HN={},ZN=rT.toolbox.brush;Dy.defaultOption={show:!0,type:["rect","polygon","lineX","lineY","keep","clear"],icon:{rect:"M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13",polygon:"M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2",lineX:"M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4",lineY:"M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4",keep:"M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z",clear:"M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2"},title:i(ZN.title)};var UN=Dy.prototype;UN.render=UN.updateView=function(t,e,i){var n,o,a;e.eachComponent({mainType:"brush"},function(t){n=t.brushType,o=t.brushOption.brushMode||"single",a|=t.areas.length;}),this._brushType=n,this._brushMode=o,d(t.get("type",!0),function(e){t.setIconStatus(e,("keep"===e?"multiple"===o:"clear"===e?a:e===n)?"emphasis":"normal");});},UN.getIcons=function(){var t=this.model,e=t.get("icon",!0),i={};return d(t.get("type",!0),function(t){e[t]&&(i[t]=e[t]);}),i;},UN.onclick=function(t,e,i){var n=this._brushType,o=this._brushMode;"clear"===i?(e.dispatchAction({type:"axisAreaSelect",intervals:[]}),e.dispatchAction({type:"brush",command:"clear",areas:[]})):e.dispatchAction({type:"takeGlobalCursor",key:"brush",brushOption:{brushType:"keep"===i?n:n!==i&&i,brushMode:"keep"===i?"multiple"===o?"single":"multiple":o}});},Ty("brush",Dy),Ns(function(t,e){var i=t&&t.brush;if(y(i)||(i=i?[i]:[]),i.length){var n=[];d(i,function(t){var e=t.hasOwnProperty("toolbox")?t.toolbox:[];e instanceof Array&&(n=n.concat(e));});var o=t&&t.toolbox;y(o)&&(o=o[0]),o||(o={feature:{}},t.toolbox=[o]);var a=o.feature||(o.feature={}),r=a.brush||(a.brush={}),s=r.type||(r.type=[]);s.push.apply(s,n),Jv(s),e&&!s.length&&s.push.apply(s,SN);}});Cy.prototype={constructor:Cy,type:"calendar",dimensions:["time","value"],getDimensionsInfo:function getDimensionsInfo(){return[{name:"time",type:"time"},"value"];},getRangeInfo:function getRangeInfo(){return this._rangeInfo;},getModel:function getModel(){return this._model;},getRect:function getRect(){return this._rect;},getCellWidth:function getCellWidth(){return this._sw;},getCellHeight:function getCellHeight(){return this._sh;},getOrient:function getOrient(){return this._orient;},getFirstDayOfWeek:function getFirstDayOfWeek(){return this._firstDayOfWeek;},getDateInfo:function getDateInfo(t){var e=(t=Yo(t)).getFullYear(),i=t.getMonth()+1;i=i<10?"0"+i:i;var n=t.getDate();n=n<10?"0"+n:n;var o=t.getDay();return o=Math.abs((o+7-this.getFirstDayOfWeek())%7),{y:e,m:i,d:n,day:o,time:t.getTime(),formatedDate:e+"-"+i+"-"+n,date:t};},getNextNDay:function getNextNDay(t,e){return 0===(e=e||0)?this.getDateInfo(t):((t=new Date(this.getDateInfo(t).time)).setDate(t.getDate()+e),this.getDateInfo(t));},update:function update(t,e){function i(t,e){return null!=t[e]&&"auto"!==t[e];}this._firstDayOfWeek=+this._model.getModel("dayLabel").get("firstDay"),this._orient=this._model.get("orient"),this._lineWidth=this._model.getModel("itemStyle").getItemStyle().lineWidth||0,this._rangeInfo=this._getRangeInfo(this._initRangeOption());var n=this._rangeInfo.weeks||1,o=["width","height"],a=this._model.get("cellSize").slice(),r=this._model.getBoxLayoutParams(),s="horizontal"===this._orient?[n,7]:[7,n];d([0,1],function(t){i(a,t)&&(r[o[t]]=a[t]*s[t]);});var l={width:e.getWidth(),height:e.getHeight()},u=this._rect=ca(r,l);d([0,1],function(t){i(a,t)||(a[t]=u[o[t]]/s[t]);}),this._sw=a[0],this._sh=a[1];},dataToPoint:function dataToPoint(t,e){y(t)&&(t=t[0]),null==e&&(e=!0);var i=this.getDateInfo(t),n=this._rangeInfo,o=i.formatedDate;if(e&&!(i.time>=n.start.time&&i.time<n.end.time+864e5))return[NaN,NaN];var a=i.day,r=this._getRangeInfo([n.start.time,o]).nthWeek;return"vertical"===this._orient?[this._rect.x+a*this._sw+this._sw/2,this._rect.y+r*this._sh+this._sh/2]:[this._rect.x+r*this._sw+this._sw/2,this._rect.y+a*this._sh+this._sh/2];},pointToData:function pointToData(t){var e=this.pointToDate(t);return e&&e.time;},dataToRect:function dataToRect(t,e){var i=this.dataToPoint(t,e);return{contentShape:{x:i[0]-(this._sw-this._lineWidth)/2,y:i[1]-(this._sh-this._lineWidth)/2,width:this._sw-this._lineWidth,height:this._sh-this._lineWidth},center:i,tl:[i[0]-this._sw/2,i[1]-this._sh/2],tr:[i[0]+this._sw/2,i[1]-this._sh/2],br:[i[0]+this._sw/2,i[1]+this._sh/2],bl:[i[0]-this._sw/2,i[1]+this._sh/2]};},pointToDate:function pointToDate(t){var e=Math.floor((t[0]-this._rect.x)/this._sw)+1,i=Math.floor((t[1]-this._rect.y)/this._sh)+1,n=this._rangeInfo.range;return"vertical"===this._orient?this._getDateByWeeksAndDay(i,e-1,n):this._getDateByWeeksAndDay(e,i-1,n);},convertToPixel:v(Ly,"dataToPoint"),convertFromPixel:v(Ly,"pointToData"),_initRangeOption:function _initRangeOption(){var t=this._model.get("range"),e=t;if(y(e)&&1===e.length&&(e=e[0]),/^\d{4}$/.test(e)&&(t=[e+"-01-01",e+"-12-31"]),/^\d{4}[\/|-]\d{1,2}$/.test(e)){var i=this.getDateInfo(e),n=i.date;n.setMonth(n.getMonth()+1);var o=this.getNextNDay(n,-1);t=[i.formatedDate,o.formatedDate];}/^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(e)&&(t=[e,e]);var a=this._getRangeInfo(t);return a.start.time>a.end.time&&t.reverse(),t;},_getRangeInfo:function _getRangeInfo(t){var e;(t=[this.getDateInfo(t[0]),this.getDateInfo(t[1])])[0].time>t[1].time&&(e=!0,t.reverse());var i=Math.floor(t[1].time/864e5)-Math.floor(t[0].time/864e5)+1,n=new Date(t[0].time),o=n.getDate(),a=t[1].date.getDate();if(n.setDate(o+i-1),n.getDate()!==a)for(var r=n.getTime()-t[1].time>0?1:-1;n.getDate()!==a&&(n.getTime()-t[1].time)*r>0;){i-=r,n.setDate(o+i-1);}var s=Math.floor((i+t[0].day+6)/7),l=e?1-s:s-1;return e&&t.reverse(),{range:[t[0].formatedDate,t[1].formatedDate],start:t[0],end:t[1],allDay:i,weeks:s,nthWeek:l,fweek:t[0].day,lweek:t[1].day};},_getDateByWeeksAndDay:function _getDateByWeeksAndDay(t,e,i){var n=this._getRangeInfo(i);if(t>n.weeks||0===t&&e<n.fweek||t===n.weeks&&e>n.lweek)return!1;var o=7*(t-1)-n.fweek+e,a=new Date(n.start.time);return a.setDate(n.start.d+o),this.getDateInfo(a);}},Cy.dimensions=Cy.prototype.dimensions,Cy.getDimensionsInfo=Cy.prototype.getDimensionsInfo,Cy.create=function(t,e){var i=[];return t.eachComponent("calendar",function(n){var o=new Cy(n,t,e);i.push(o),n.coordinateSystem=o;}),t.eachSeries(function(t){"calendar"===t.get("coordinateSystem")&&(t.coordinateSystem=i[t.get("calendarIndex")||0]);}),i;},Fa.register("calendar",Cy);var XN=lI.extend({type:"calendar",coordinateSystem:null,defaultOption:{zlevel:0,z:2,left:80,top:60,cellSize:20,orient:"horizontal",splitLine:{show:!0,lineStyle:{color:"#000",width:1,type:"solid"}},itemStyle:{color:"#fff",borderWidth:1,borderColor:"#ccc"},dayLabel:{show:!0,firstDay:0,position:"start",margin:"50%",nameMap:"en",color:"#000"},monthLabel:{show:!0,position:"start",margin:5,align:"center",nameMap:"en",formatter:null,color:"#000"},yearLabel:{show:!0,position:null,margin:30,formatter:null,color:"#ccc",fontFamily:"sans-serif",fontWeight:"bolder",fontSize:20}},init:function init(t,e,i,n){var o=ga(t);XN.superApply(this,"init",arguments),ky(t,o);},mergeOption:function mergeOption(t,e){XN.superApply(this,"mergeOption",arguments),ky(this.option,t);}}),jN={EN:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],CN:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},YN={EN:["S","M","T","W","T","F","S"],CN:["日","一","二","三","四","五","六"]};Ws({type:"calendar",_tlpoints:null,_blpoints:null,_firstDayOfMonth:null,_firstDayPoints:null,render:function render(t,e,i){var n=this.group;n.removeAll();var o=t.coordinateSystem,a=o.getRangeInfo(),r=o.getOrient();this._renderDayRect(t,a,n),this._renderLines(t,a,r,n),this._renderYearText(t,a,r,n),this._renderMonthText(t,r,n),this._renderWeekText(t,a,r,n);},_renderDayRect:function _renderDayRect(t,e,i){for(var n=t.coordinateSystem,o=t.getModel("itemStyle").getItemStyle(),a=n.getCellWidth(),r=n.getCellHeight(),s=e.start.time;s<=e.end.time;s=n.getNextNDay(s,1).time){var l=n.dataToRect([s],!1).tl,u=new yM({shape:{x:l[0],y:l[1],width:a,height:r},cursor:"default",style:o});i.add(u);}},_renderLines:function _renderLines(t,e,i,n){function o(e){a._firstDayOfMonth.push(r.getDateInfo(e)),a._firstDayPoints.push(r.dataToRect([e],!1).tl);var o=a._getLinePointsOfOneWeek(t,e,i);a._tlpoints.push(o[0]),a._blpoints.push(o[o.length-1]),l&&a._drawSplitline(o,s,n);}var a=this,r=t.coordinateSystem,s=t.getModel("splitLine.lineStyle").getLineStyle(),l=t.get("splitLine.show"),u=s.lineWidth;this._tlpoints=[],this._blpoints=[],this._firstDayOfMonth=[],this._firstDayPoints=[];for(var h=e.start,c=0;h.time<=e.end.time;c++){o(h.formatedDate),0===c&&(h=r.getDateInfo(e.start.y+"-"+e.start.m));var d=h.date;d.setMonth(d.getMonth()+1),h=r.getDateInfo(d);}o(r.getNextNDay(e.end.time,1).formatedDate),l&&this._drawSplitline(a._getEdgesPoints(a._tlpoints,u,i),s,n),l&&this._drawSplitline(a._getEdgesPoints(a._blpoints,u,i),s,n);},_getEdgesPoints:function _getEdgesPoints(t,e,i){var n=[t[0].slice(),t[t.length-1].slice()],o="horizontal"===i?0:1;return n[0][o]=n[0][o]-e/2,n[1][o]=n[1][o]+e/2,n;},_drawSplitline:function _drawSplitline(t,e,i){var n=new gM({z2:20,shape:{points:t},style:e});i.add(n);},_getLinePointsOfOneWeek:function _getLinePointsOfOneWeek(t,e,i){var n=t.coordinateSystem;e=n.getDateInfo(e);for(var o=[],a=0;a<7;a++){var r=n.getNextNDay(e.time,a),s=n.dataToRect([r.time],!1);o[2*r.day]=s.tl,o[2*r.day+1]=s["horizontal"===i?"bl":"tr"];}return o;},_formatterLabel:function _formatterLabel(t,e){return"string"==typeof t&&t?oa(t,e):"function"==typeof t?t(e):e.nameMap;},_yearTextPositionControl:function _yearTextPositionControl(t,e,i,n,o){e=e.slice();var a=["center","bottom"];"bottom"===n?(e[1]+=o,a=["center","top"]):"left"===n?e[0]-=o:"right"===n?(e[0]+=o,a=["center","top"]):e[1]-=o;var r=0;return"left"!==n&&"right"!==n||(r=Math.PI/2),{rotation:r,position:e,style:{textAlign:a[0],textVerticalAlign:a[1]}};},_renderYearText:function _renderYearText(t,e,i,n){var o=t.getModel("yearLabel");if(o.get("show")){var a=o.get("margin"),r=o.get("position");r||(r="horizontal"!==i?"top":"left");var s=[this._tlpoints[this._tlpoints.length-1],this._blpoints[0]],l=(s[0][0]+s[1][0])/2,u=(s[0][1]+s[1][1])/2,h="horizontal"===i?0:1,c={top:[l,s[h][1]],bottom:[l,s[1-h][1]],left:[s[1-h][0],u],right:[s[h][0],u]},d=e.start.y;+e.end.y>+e.start.y&&(d=d+"-"+e.end.y);var f=o.get("formatter"),p={start:e.start.y,end:e.end.y,nameMap:d},g=this._formatterLabel(f,p),m=new rM({z2:30});mo(m.style,o,{text:g}),m.attr(this._yearTextPositionControl(m,c[r],i,r,a)),n.add(m);}},_monthTextPositionControl:function _monthTextPositionControl(t,e,i,n,o){var a="left",r="top",s=t[0],l=t[1];return"horizontal"===i?(l+=o,e&&(a="center"),"start"===n&&(r="bottom")):(s+=o,e&&(r="middle"),"start"===n&&(a="right")),{x:s,y:l,textAlign:a,textVerticalAlign:r};},_renderMonthText:function _renderMonthText(t,e,i){var n=t.getModel("monthLabel");if(n.get("show")){var o=n.get("nameMap"),r=n.get("margin"),s=n.get("position"),l=n.get("align"),u=[this._tlpoints,this._blpoints];_(o)&&(o=jN[o.toUpperCase()]||[]);var h="start"===s?0:1,c="horizontal"===e?0:1;r="start"===s?-r:r;for(var d="center"===l,f=0;f<u[h].length-1;f++){var p=u[h][f].slice(),g=this._firstDayOfMonth[f];if(d){var m=this._firstDayPoints[f];p[c]=(m[c]+u[0][f+1][c])/2;}var v=n.get("formatter"),y=o[+g.m-1],x={yyyy:g.y,yy:(g.y+"").slice(2),MM:g.m,M:+g.m,nameMap:y},w=this._formatterLabel(v,x),b=new rM({z2:30});a(mo(b.style,n,{text:w}),this._monthTextPositionControl(p,d,e,s,r)),i.add(b);}}},_weekTextPositionControl:function _weekTextPositionControl(t,e,i,n,o){var a="center",r="middle",s=t[0],l=t[1],u="start"===i;return"horizontal"===e?(s=s+n+(u?1:-1)*o[0]/2,a=u?"right":"left"):(l=l+n+(u?1:-1)*o[1]/2,r=u?"bottom":"top"),{x:s,y:l,textAlign:a,textVerticalAlign:r};},_renderWeekText:function _renderWeekText(t,e,i,n){var o=t.getModel("dayLabel");if(o.get("show")){var r=t.coordinateSystem,s=o.get("position"),l=o.get("nameMap"),u=o.get("margin"),h=r.getFirstDayOfWeek();_(l)&&(l=YN[l.toUpperCase()]||[]);var c=r.getNextNDay(e.end.time,7-e.lweek).time,d=[r.getCellWidth(),r.getCellHeight()];u=Vo(u,d["horizontal"===i?0:1]),"start"===s&&(c=r.getNextNDay(e.start.time,-(7+e.fweek)).time,u=-u);for(var f=0;f<7;f++){var p=r.getNextNDay(c,f),g=r.dataToRect([p.time],!1).center,m=f;m=Math.abs((f+h)%7);var v=new rM({z2:30});a(mo(v.style,o,{text:l[m]}),this._weekTextPositionControl(g,i,s,u,d)),n.add(v);}}}}),Fs({type:"title",layoutMode:{type:"box",ignoreSize:!0},defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),Ws({type:"title",render:function render(t,e,i){if(this.group.removeAll(),t.get("show")){var n=this.group,o=t.getModel("textStyle"),a=t.getModel("subtextStyle"),r=t.get("textAlign"),s=t.get("textBaseline"),l=new rM({style:mo({},o,{text:t.get("text"),textFill:o.getTextColor()},{disableBox:!0}),z2:10}),u=l.getBoundingRect(),h=t.get("subtext"),c=new rM({style:mo({},a,{text:h,textFill:a.getTextColor(),y:u.height+t.get("itemGap"),textVerticalAlign:"top"},{disableBox:!0}),z2:10}),d=t.get("link"),f=t.get("sublink"),p=t.get("triggerEvent",!0);l.silent=!d&&!p,c.silent=!f&&!p,d&&l.on("click",function(){window.open(d,"_"+t.get("target"));}),f&&c.on("click",function(){window.open(f,"_"+t.get("subtarget"));}),l.eventData=c.eventData=p?{componentType:"title",componentIndex:t.componentIndex}:null,n.add(l),h&&n.add(c);var g=n.getBoundingRect(),m=t.getBoxLayoutParams();m.width=g.width,m.height=g.height;var v=ca(m,{width:i.getWidth(),height:i.getHeight()},t.get("padding"));r||("middle"===(r=t.get("left")||t.get("right"))&&(r="center"),"right"===r?v.x+=v.width:"center"===r&&(v.x+=v.width/2)),s||("center"===(s=t.get("top")||t.get("bottom"))&&(s="middle"),"bottom"===s?v.y+=v.height:"middle"===s&&(v.y+=v.height/2),s=s||"top"),n.attr("position",[v.x,v.y]);var y={textAlign:r,textVerticalAlign:s};l.setStyle(y),c.setStyle(y),g=n.getBoundingRect();var x=v.margin,_=t.getItemStyle(["color","opacity"]);_.fill=t.get("backgroundColor");var w=new yM({shape:{x:g.x-x[3],y:g.y-x[0],width:g.width+x[1]+x[3],height:g.height+x[0]+x[2],r:t.get("borderRadius")},style:_,silent:!0});$n(w),n.add(w);}}}),lI.registerSubTypeDefaulter("dataZoom",function(){return"slider";});var qN=["cartesian2d","polar","singleAxis"],KN=function(t,e){var i=f(t=t.slice(),la),n=f(e=(e||[]).slice(),la);return function(o,a){d(t,function(t,r){for(var s={name:t,capital:i[r]},l=0;l<e.length;l++){s[e[l]]=t+n[l];}o.call(a,s);});};}(["x","y","z","radius","angle","single"],["axisIndex","axis","index","id"]),$N=d,JN=Fo,QN=function QN(t,e,i,n){this._dimName=t,this._axisIndex=e,this._valueWindow,this._percentWindow,this._dataExtent,this._minMaxSpan,this.ecModel=n,this._dataZoomModel=i;};QN.prototype={constructor:QN,hostedBy:function hostedBy(t){return this._dataZoomModel===t;},getDataValueWindow:function getDataValueWindow(){return this._valueWindow.slice();},getDataPercentWindow:function getDataPercentWindow(){return this._percentWindow.slice();},getTargetSeriesModels:function getTargetSeriesModels(){var t=[],e=this.ecModel;return e.eachSeries(function(i){if(Py(i.get("coordinateSystem"))){var n=this._dimName,o=e.queryComponents({mainType:n+"Axis",index:i.get(n+"AxisIndex"),id:i.get(n+"AxisId")})[0];this._axisIndex===(o&&o.componentIndex)&&t.push(i);}},this),t;},getAxisModel:function getAxisModel(){return this.ecModel.getComponent(this._dimName+"Axis",this._axisIndex);},getOtherAxisModel:function getOtherAxisModel(){var t,e,i=this._dimName,n=this.ecModel,o=this.getAxisModel();"x"===i||"y"===i?(e="gridIndex",t="x"===i?"y":"x"):(e="polarIndex",t="angle"===i?"radius":"angle");var a;return n.eachComponent(t+"Axis",function(t){(t.get(e)||0)===(o.get(e)||0)&&(a=t);}),a;},getMinMaxSpan:function getMinMaxSpan(){return i(this._minMaxSpan);},calculateDataWindow:function calculateDataWindow(t){var e=this._dataExtent,i=this.getAxisModel().axis.scale,n=this._dataZoomModel.getRangePropMode(),o=[0,100],a=[t.start,t.end],r=[];return $N(["startValue","endValue"],function(e){r.push(null!=t[e]?i.parse(t[e]):null);}),$N([0,1],function(t){var s=r[t],l=a[t];"percent"===n[t]?(null==l&&(l=o[t]),s=i.parse(Bo(l,o,e,!0))):l=Bo(s,e,o,!0),r[t]=s,a[t]=l;}),{valueWindow:JN(r),percentWindow:JN(a)};},reset:function reset(t){if(t===this._dataZoomModel){var e=this.getTargetSeriesModels();this._dataExtent=Oy(this,this._dimName,e);var i=this.calculateDataWindow(t.option);this._valueWindow=i.valueWindow,this._percentWindow=i.percentWindow,zy(this),Ry(this);}},restore:function restore(t){t===this._dataZoomModel&&(this._valueWindow=this._percentWindow=null,Ry(this,!0));},filterData:function filterData(t,e){function i(t){return t>=r[0]&&t<=r[1];}if(t===this._dataZoomModel){var n=this._dimName,o=this.getTargetSeriesModels(),a=t.get("filterMode"),r=this._valueWindow;"none"!==a&&$N(o,function(t){var e=t.getData(),o=e.mapDimension(n,!0);o.length&&("weakFilter"===a?e.filterSelf(function(t){for(var i,n,a,s=0;s<o.length;s++){var l=e.get(o[s],t),u=!isNaN(l),h=l<r[0],c=l>r[1];if(u&&!h&&!c)return!0;u&&(a=!0),h&&(i=!0),c&&(n=!0);}return a&&i&&n;}):$N(o,function(n){if("empty"===a)t.setData(e.map(n,function(t){return i(t)?t:NaN;}));else{var o={};o[n]=r,e.selectRange(o);}}),$N(o,function(t){e.setApproximateExtent(r,t);}));});}}};var tO=d,eO=KN,iO=Fs({type:"dataZoom",dependencies:["xAxis","yAxis","zAxis","radiusAxis","angleAxis","singleAxis","series"],defaultOption:{zlevel:0,z:4,orient:null,xAxisIndex:null,yAxisIndex:null,filterMode:"filter",throttle:null,start:0,end:100,startValue:null,endValue:null,minSpan:null,maxSpan:null,minValueSpan:null,maxValueSpan:null,rangeMode:null},init:function init(t,e,i){this._dataIntervalByAxis={},this._dataInfo={},this._axisProxies={},this.textStyleModel,this._autoThrottle=!0,this._rangePropMode=["percent","percent"];var n=By(t);this.mergeDefaultAndTheme(t,i),this.doInit(n);},mergeOption:function mergeOption(t){var e=By(t);n(this.option,t,!0),this.doInit(e);},doInit:function doInit(t){var e=this.option;U_.canvasSupported||(e.realtime=!1),this._setDefaultThrottle(t),Vy(this,t),tO([["start","startValue"],["end","endValue"]],function(t,i){"value"===this._rangePropMode[i]&&(e[t[0]]=null);},this),this.textStyleModel=this.getModel("textStyle"),this._resetTarget(),this._giveAxisProxies();},_giveAxisProxies:function _giveAxisProxies(){var t=this._axisProxies;this.eachTargetAxis(function(e,i,n,o){var a=this.dependentModels[e.axis][i],r=a.__dzAxisProxy||(a.__dzAxisProxy=new QN(e.name,i,this,o));t[e.name+"_"+i]=r;},this);},_resetTarget:function _resetTarget(){var t=this.option,e=this._judgeAutoMode();eO(function(e){var i=e.axisIndex;t[i]=Di(t[i]);},this),"axisIndex"===e?this._autoSetAxisIndex():"orient"===e&&this._autoSetOrient();},_judgeAutoMode:function _judgeAutoMode(){var t=this.option,e=!1;eO(function(i){null!=t[i.axisIndex]&&(e=!0);},this);var i=t.orient;return null==i&&e?"orient":e?void 0:(null==i&&(t.orient="horizontal"),"axisIndex");},_autoSetAxisIndex:function _autoSetAxisIndex(){var t=!0,e=this.get("orient",!0),i=this.option,n=this.dependentModels;if(t){var o="vertical"===e?"y":"x";n[o+"Axis"].length?(i[o+"AxisIndex"]=[0],t=!1):tO(n.singleAxis,function(n){t&&n.get("orient",!0)===e&&(i.singleAxisIndex=[n.componentIndex],t=!1);});}t&&eO(function(e){if(t){var n=[],o=this.dependentModels[e.axis];if(o.length&&!n.length)for(var a=0,r=o.length;a<r;a++){"category"===o[a].get("type")&&n.push(a);}i[e.axisIndex]=n,n.length&&(t=!1);}},this),t&&this.ecModel.eachSeries(function(t){this._isSeriesHasAllAxesTypeOf(t,"value")&&eO(function(e){var n=i[e.axisIndex],o=t.get(e.axisIndex),a=t.get(e.axisId);l(n,o=t.ecModel.queryComponents({mainType:e.axis,index:o,id:a})[0].componentIndex)<0&&n.push(o);});},this);},_autoSetOrient:function _autoSetOrient(){var t;this.eachTargetAxis(function(e){!t&&(t=e.name);},this),this.option.orient="y"===t?"vertical":"horizontal";},_isSeriesHasAllAxesTypeOf:function _isSeriesHasAllAxesTypeOf(t,e){var i=!0;return eO(function(n){var o=t.get(n.axisIndex),a=this.dependentModels[n.axis][o];a&&a.get("type")===e||(i=!1);},this),i;},_setDefaultThrottle:function _setDefaultThrottle(t){if(t.hasOwnProperty("throttle")&&(this._autoThrottle=!1),this._autoThrottle){var e=this.ecModel.option;this.option.throttle=e.animation&&e.animationDurationUpdate>0?100:20;}},getFirstTargetAxisModel:function getFirstTargetAxisModel(){var t;return eO(function(e){if(null==t){var i=this.get(e.axisIndex);i.length&&(t=this.dependentModels[e.axis][i[0]]);}},this),t;},eachTargetAxis:function eachTargetAxis(t,e){var i=this.ecModel;eO(function(n){tO(this.get(n.axisIndex),function(o){t.call(e,n,o,this,i);},this);},this);},getAxisProxy:function getAxisProxy(t,e){return this._axisProxies[t+"_"+e];},getAxisModel:function getAxisModel(t,e){var i=this.getAxisProxy(t,e);return i&&i.getAxisModel();},setRawRange:function setRawRange(t,e){var i=this.option;tO([["start","startValue"],["end","endValue"]],function(e){null==t[e[0]]&&null==t[e[1]]||(i[e[0]]=t[e[0]],i[e[1]]=t[e[1]]);},this),!e&&Vy(this,t);},getPercentRange:function getPercentRange(){var t=this.findRepresentativeAxisProxy();if(t)return t.getDataPercentWindow();},getValueRange:function getValueRange(t,e){if(null!=t||null!=e)return this.getAxisProxy(t,e).getDataValueWindow();var i=this.findRepresentativeAxisProxy();return i?i.getDataValueWindow():void 0;},findRepresentativeAxisProxy:function findRepresentativeAxisProxy(t){if(t)return t.__dzAxisProxy;var e=this._axisProxies;for(var i in e){if(e.hasOwnProperty(i)&&e[i].hostedBy(this))return e[i];}for(var i in e){if(e.hasOwnProperty(i)&&!e[i].hostedBy(this))return e[i];}},getRangePropMode:function getRangePropMode(){return this._rangePropMode.slice();}}),nO=qI.extend({type:"dataZoom",render:function render(t,e,i,n){this.dataZoomModel=t,this.ecModel=e,this.api=i;},getTargetCoordInfo:function getTargetCoordInfo(){function t(t,e,i,n){for(var o,a=0;a<i.length;a++){if(i[a].model===t){o=i[a];break;}}o||i.push(o={model:t,axisModels:[],coordIndex:n}),o.axisModels.push(e);}var e=this.dataZoomModel,i=this.ecModel,n={};return e.eachTargetAxis(function(e,o){var a=i.getComponent(e.axis,o);if(a){var r=a.getCoordSysModel();r&&t(r,a,n[r.mainType]||(n[r.mainType]=[]),r.componentIndex);}},this),n;}}),oO=(iO.extend({type:"dataZoom.slider",layoutMode:"box",defaultOption:{show:!0,right:"ph",top:"ph",width:"ph",height:"ph",left:null,bottom:null,backgroundColor:"rgba(47,69,84,0)",dataBackground:{lineStyle:{color:"#2f4554",width:.5,opacity:.3},areaStyle:{color:"rgba(47,69,84,0.3)",opacity:.3}},borderColor:"#ddd",fillerColor:"rgba(167,183,204,0.4)",handleIcon:"M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",handleSize:"100%",handleStyle:{color:"#a7b7cc"},labelPrecision:null,labelFormatter:null,showDetail:!0,showDataShadow:"auto",realtime:!0,zoomLock:!1,textStyle:{color:"#333"}}}),yM),aO=Bo,rO=Fo,sO=m,lO=d,uO="horizontal",hO=5,cO=["line","bar","candlestick","scatter"],dO=nO.extend({type:"dataZoom.slider",init:function init(t,e){this._displayables={},this._orient,this._range,this._handleEnds,this._size,this._handleWidth,this._handleHeight,this._location,this._dragging,this._dataShadowInfo,this.api=e;},render:function render(t,e,i,n){dO.superApply(this,"render",arguments),Nr(this,"_dispatchZoomAction",this.dataZoomModel.get("throttle"),"fixRate"),this._orient=t.get("orient"),!1!==this.dataZoomModel.get("show")?(n&&"dataZoom"===n.type&&n.from===this.uid||this._buildView(),this._updateView()):this.group.removeAll();},remove:function remove(){dO.superApply(this,"remove",arguments),Or(this,"_dispatchZoomAction");},dispose:function dispose(){dO.superApply(this,"dispose",arguments),Or(this,"_dispatchZoomAction");},_buildView:function _buildView(){var t=this.group;t.removeAll(),this._resetLocation(),this._resetInterval();var e=this._displayables.barGroup=new tb();this._renderBackground(),this._renderHandle(),this._renderDataShadow(),t.add(e),this._positionGroup();},_resetLocation:function _resetLocation(){var t=this.dataZoomModel,e=this.api,i=this._findCoordRect(),n={width:e.getWidth(),height:e.getHeight()},o=this._orient===uO?{right:n.width-i.x-i.width,top:n.height-30-7,width:i.width,height:30}:{right:7,top:i.y,width:30,height:i.height},a=ga(t.option);d(["right","top","width","height"],function(t){"ph"===a[t]&&(a[t]=o[t]);});var r=ca(a,n,t.padding);this._location={x:r.x,y:r.y},this._size=[r.width,r.height],"vertical"===this._orient&&this._size.reverse();},_positionGroup:function _positionGroup(){var t=this.group,e=this._location,i=this._orient,n=this.dataZoomModel.getFirstTargetAxisModel(),o=n&&n.get("inverse"),a=this._displayables.barGroup,r=(this._dataShadowInfo||{}).otherAxisInverse;a.attr(i!==uO||o?i===uO&&o?{scale:r?[-1,1]:[-1,-1]}:"vertical"!==i||o?{scale:r?[-1,-1]:[-1,1],rotation:Math.PI/2}:{scale:r?[1,-1]:[1,1],rotation:Math.PI/2}:{scale:r?[1,1]:[1,-1]});var s=t.getBoundingRect([a]);t.attr("position",[e.x-s.x,e.y-s.y]);},_getViewExtent:function _getViewExtent(){return[0,this._size[0]];},_renderBackground:function _renderBackground(){var t=this.dataZoomModel,e=this._size,i=this._displayables.barGroup;i.add(new oO({silent:!0,shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:t.get("backgroundColor")},z2:-40})),i.add(new oO({shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:"transparent"},z2:0,onclick:m(this._onClickPanelClick,this)}));},_renderDataShadow:function _renderDataShadow(){var t=this._dataShadowInfo=this._prepareDataShadowInfo();if(t){var e=this._size,i=t.series,n=i.getRawData(),o=i.getShadowDim?i.getShadowDim():t.otherDim;if(null!=o){var a=n.getDataExtent(o),s=.3*(a[1]-a[0]);a=[a[0]-s,a[1]+s];var l,u=[0,e[1]],h=[0,e[0]],c=[[e[0],0],[0,0]],d=[],f=h[1]/(n.count()-1),p=0,g=Math.round(n.count()/e[0]);n.each([o],function(t,e){if(g>0&&e%g)p+=f;else{var i=null==t||isNaN(t)||""===t,n=i?0:aO(t,a,u,!0);i&&!l&&e?(c.push([c[c.length-1][0],0]),d.push([d[d.length-1][0],0])):!i&&l&&(c.push([p,0]),d.push([p,0])),c.push([p,n]),d.push([p,n]),p+=f,l=i;}});var m=this.dataZoomModel;this._displayables.barGroup.add(new pM({shape:{points:c},style:r({fill:m.get("dataBackgroundColor")},m.getModel("dataBackground.areaStyle").getAreaStyle()),silent:!0,z2:-20})),this._displayables.barGroup.add(new gM({shape:{points:d},style:m.getModel("dataBackground.lineStyle").getLineStyle(),silent:!0,z2:-19}));}}},_prepareDataShadowInfo:function _prepareDataShadowInfo(){var t=this.dataZoomModel,e=t.get("showDataShadow");if(!1!==e){var i,n=this.ecModel;return t.eachTargetAxis(function(o,a){d(t.getAxisProxy(o.name,a).getTargetSeriesModels(),function(t){if(!(i||!0!==e&&l(cO,t.get("type"))<0)){var r,s=n.getComponent(o.axis,a).axis,u=Gy(o.name),h=t.coordinateSystem;null!=u&&h.getOtherAxis&&(r=h.getOtherAxis(s).inverse),u=t.getData().mapDimension(u),i={thisAxis:s,series:t,thisDim:o.name,otherDim:u,otherAxisInverse:r};}},this);},this),i;}},_renderHandle:function _renderHandle(){var t=this._displayables,e=t.handles=[],i=t.handleLabels=[],n=this._displayables.barGroup,o=this._size,a=this.dataZoomModel;n.add(t.filler=new oO({draggable:!0,cursor:Fy(this._orient),drift:sO(this._onDragMove,this,"all"),onmousemove:function onmousemove(t){mw(t.event);},ondragstart:sO(this._showDataInfo,this,!0),ondragend:sO(this._onDragEnd,this),onmouseover:sO(this._showDataInfo,this,!0),onmouseout:sO(this._showDataInfo,this,!1),style:{fill:a.get("fillerColor"),textPosition:"inside"}})),n.add(new oO($n({silent:!0,shape:{x:0,y:0,width:o[0],height:o[1]},style:{stroke:a.get("dataBackgroundColor")||a.get("borderColor"),lineWidth:1,fill:"rgba(0,0,0,0)"}}))),lO([0,1],function(t){var o=Po(a.get("handleIcon"),{cursor:Fy(this._orient),draggable:!0,drift:sO(this._onDragMove,this,t),onmousemove:function onmousemove(t){mw(t.event);},ondragend:sO(this._onDragEnd,this),onmouseover:sO(this._showDataInfo,this,!0),onmouseout:sO(this._showDataInfo,this,!1)},{x:-1,y:0,width:2,height:2}),r=o.getBoundingRect();this._handleHeight=Vo(a.get("handleSize"),this._size[1]),this._handleWidth=r.width/r.height*this._handleHeight,o.setStyle(a.getModel("handleStyle").getItemStyle());var s=a.get("handleColor");null!=s&&(o.style.fill=s),n.add(e[t]=o);var l=a.textStyleModel;this.group.add(i[t]=new rM({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textVerticalAlign:"middle",textAlign:"center",textFill:l.getTextColor(),textFont:l.getFont()},z2:10}));},this);},_resetInterval:function _resetInterval(){var t=this._range=this.dataZoomModel.getPercentRange(),e=this._getViewExtent();this._handleEnds=[aO(t[0],[0,100],e,!0),aO(t[1],[0,100],e,!0)];},_updateInterval:function _updateInterval(t,e){var i=this.dataZoomModel,n=this._handleEnds,o=this._getViewExtent(),a=i.findRepresentativeAxisProxy().getMinMaxSpan(),r=[0,100];QL(e,n,o,i.get("zoomLock")?"all":t,null!=a.minSpan?aO(a.minSpan,r,o,!0):null,null!=a.maxSpan?aO(a.maxSpan,r,o,!0):null);var s=this._range,l=this._range=rO([aO(n[0],o,r,!0),aO(n[1],o,r,!0)]);return!s||s[0]!==l[0]||s[1]!==l[1];},_updateView:function _updateView(t){var e=this._displayables,i=this._handleEnds,n=rO(i.slice()),o=this._size;lO([0,1],function(t){var n=e.handles[t],a=this._handleHeight;n.attr({scale:[a/2,a/2],position:[i[t],o[1]/2-a/2]});},this),e.filler.setShape({x:n[0],y:0,width:n[1]-n[0],height:o[1]}),this._updateDataInfo(t);},_updateDataInfo:function _updateDataInfo(t){function e(t){var e=Ao(n.handles[t].parent,this.group),i=Co(0===t?"right":"left",e),s=this._handleWidth/2+hO,l=Do([c[t]+(0===t?-s:s),this._size[1]/2],e);o[t].setStyle({x:l[0],y:l[1],textVerticalAlign:a===uO?"middle":i,textAlign:a===uO?i:"center",text:r[t]});}var i=this.dataZoomModel,n=this._displayables,o=n.handleLabels,a=this._orient,r=["",""];if(i.get("showDetail")){var s=i.findRepresentativeAxisProxy();if(s){var l=s.getAxisModel().axis,u=this._range,h=t?s.calculateDataWindow({start:u[0],end:u[1]}).valueWindow:s.getDataValueWindow();r=[this._formatLabel(h[0],l),this._formatLabel(h[1],l)];}}var c=rO(this._handleEnds.slice());e.call(this,0),e.call(this,1);},_formatLabel:function _formatLabel(t,e){var i=this.dataZoomModel,n=i.get("labelFormatter"),o=i.get("labelPrecision");null!=o&&"auto"!==o||(o=e.getPixelPrecision());var a=null==t||isNaN(t)?"":"category"===e.type||"time"===e.type?e.scale.getLabel(Math.round(t)):t.toFixed(Math.min(o,20));return x(n)?n(t,a):_(n)?n.replace("{value}",a):a;},_showDataInfo:function _showDataInfo(t){t=this._dragging||t;var e=this._displayables.handleLabels;e[0].attr("invisible",!t),e[1].attr("invisible",!t);},_onDragMove:function _onDragMove(t,e,i){this._dragging=!0;var n=Do([e,i],this._displayables.barGroup.getLocalTransform(),!0),o=this._updateInterval(t,n[0]),a=this.dataZoomModel.get("realtime");this._updateView(!a),o&&a&&this._dispatchZoomAction();},_onDragEnd:function _onDragEnd(){this._dragging=!1,this._showDataInfo(!1),!this.dataZoomModel.get("realtime")&&this._dispatchZoomAction();},_onClickPanelClick:function _onClickPanelClick(t){var e=this._size,i=this._displayables.barGroup.transformCoordToLocal(t.offsetX,t.offsetY);if(!(i[0]<0||i[0]>e[0]||i[1]<0||i[1]>e[1])){var n=this._handleEnds,o=(n[0]+n[1])/2,a=this._updateInterval("all",i[0]-o);this._updateView(),a&&this._dispatchZoomAction();}},_dispatchZoomAction:function _dispatchZoomAction(){var t=this._range;this.api.dispatchAction({type:"dataZoom",from:this.uid,dataZoomId:this.dataZoomModel.id,start:t[0],end:t[1]});},_findCoordRect:function _findCoordRect(){var t;if(lO(this.getTargetCoordInfo(),function(e){if(!t&&e.length){var i=e[0].model.coordinateSystem;t=i.getRect&&i.getRect();}}),!t){var e=this.api.getWidth(),i=this.api.getHeight();t={x:.2*e,y:.2*i,width:.6*e,height:.6*i};}return t;}});iO.extend({type:"dataZoom.inside",defaultOption:{disabled:!1,zoomLock:!1,zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!1,preventDefaultMouseMove:!0}});var fO="\0_ec_dataZoom_roams",pO=m,gO=nO.extend({type:"dataZoom.inside",init:function init(t,e){this._range;},render:function render(t,e,i,n){gO.superApply(this,"render",arguments),this._range=t.getPercentRange(),d(this.getTargetCoordInfo(),function(e,n){var o=f(e,function(t){return Zy(t.model);});d(e,function(e){var a=e.model,r={};d(["pan","zoom","scrollMove"],function(t){r[t]=pO(mO[t],this,e,n);},this),Wy(i,{coordId:Zy(a),allCoordIds:o,containsPoint:function containsPoint(t,e,i){return a.coordinateSystem.containPoint([e,i]);},dataZoomId:t.id,dataZoomModel:t,getRange:r});},this);},this);},dispose:function dispose(){Hy(this.api,this.dataZoomModel.id),gO.superApply(this,"dispose",arguments),this._range=null;}}),mO={zoom:function zoom(t,e,i,n){var o=this._range,a=o.slice(),r=t.axisModels[0];if(r){var s=vO[e](null,[n.originX,n.originY],r,i,t),l=(s.signal>0?s.pixelStart+s.pixelLength-s.pixel:s.pixel-s.pixelStart)/s.pixelLength*(a[1]-a[0])+a[0],u=Math.max(1/n.scale,0);a[0]=(a[0]-l)*u+l,a[1]=(a[1]-l)*u+l;var h=this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();return QL(0,a,[0,100],0,h.minSpan,h.maxSpan),this._range=a,o[0]!==a[0]||o[1]!==a[1]?a:void 0;}},pan:Ky(function(t,e,i,n,o,a){var r=vO[n]([a.oldX,a.oldY],[a.newX,a.newY],e,o,i);return r.signal*(t[1]-t[0])*r.pixel/r.pixelLength;}),scrollMove:Ky(function(t,e,i,n,o,a){return vO[n]([0,0],[a.scrollDelta,a.scrollDelta],e,o,i).signal*(t[1]-t[0])*a.scrollDelta;})},vO={grid:function grid(t,e,i,n,o){var a=i.axis,r={},s=o.model.coordinateSystem.getRect();return t=t||[0,0],"x"===a.dim?(r.pixel=e[0]-t[0],r.pixelLength=s.width,r.pixelStart=s.x,r.signal=a.inverse?1:-1):(r.pixel=e[1]-t[1],r.pixelLength=s.height,r.pixelStart=s.y,r.signal=a.inverse?-1:1),r;},polar:function polar(t,e,i,n,o){var a=i.axis,r={},s=o.model.coordinateSystem,l=s.getRadiusAxis().getExtent(),u=s.getAngleAxis().getExtent();return t=t?s.pointToCoord(t):[0,0],e=s.pointToCoord(e),"radiusAxis"===i.mainType?(r.pixel=e[0]-t[0],r.pixelLength=l[1]-l[0],r.pixelStart=l[0],r.signal=a.inverse?1:-1):(r.pixel=e[1]-t[1],r.pixelLength=u[1]-u[0],r.pixelStart=u[0],r.signal=a.inverse?-1:1),r;},singleAxis:function singleAxis(t,e,i,n,o){var a=i.axis,r=o.model.coordinateSystem.getRect(),s={};return t=t||[0,0],"horizontal"===a.orient?(s.pixel=e[0]-t[0],s.pixelLength=r.width,s.pixelStart=r.x,s.signal=a.inverse?1:-1):(s.pixel=e[1]-t[1],s.pixelLength=r.height,s.pixelStart=r.y,s.signal=a.inverse?-1:1),s;}};Os({getTargetSeries:function getTargetSeries(t){var e=R();return t.eachComponent("dataZoom",function(t){t.eachTargetAxis(function(t,i,n){d(n.getAxisProxy(t.name,i).getTargetSeriesModels(),function(t){e.set(t.uid,t);});});}),e;},modifyOutputEnd:!0,overallReset:function overallReset(t,e){t.eachComponent("dataZoom",function(t){t.eachTargetAxis(function(t,i,n){n.getAxisProxy(t.name,i).reset(n,e);}),t.eachTargetAxis(function(t,i,n){n.getAxisProxy(t.name,i).filterData(n,e);});}),t.eachComponent("dataZoom",function(t){var e=t.findRepresentativeAxisProxy(),i=e.getDataPercentWindow(),n=e.getDataValueWindow();t.setRawRange({start:i[0],end:i[1],startValue:n[0],endValue:n[1]},!0);});}}),Es("dataZoom",function(t,e){var i=Ny(m(e.eachComponent,e,"dataZoom"),KN,function(t,e){return t.get(e.axisIndex);}),n=[];e.eachComponent({mainType:"dataZoom",query:t},function(t,e){n.push.apply(n,i(t).nodes);}),d(n,function(e,i){e.setRawRange({start:t.start,end:t.end,startValue:t.startValue,endValue:t.endValue});});});var yO=d,xO=function xO(t){var e=t&&t.visualMap;y(e)||(e=e?[e]:[]),yO(e,function(t){if(t){$y(t,"splitList")&&!$y(t,"pieces")&&(t.pieces=t.splitList,delete t.splitList);var e=t.pieces;e&&y(e)&&yO(e,function(t){w(t)&&($y(t,"start")&&!$y(t,"min")&&(t.min=t.start),$y(t,"end")&&!$y(t,"max")&&(t.max=t.end));});}});};lI.registerSubTypeDefaulter("visualMap",function(t){return t.categories||(t.pieces?t.pieces.length>0:t.splitNumber>0)&&!t.calculable?"piecewise":"continuous";});var _O=VT.VISUAL.COMPONENT;Bs(_O,{createOnAllSeries:!0,reset:function reset(t,e){var i=[];return e.eachComponent("visualMap",function(e){var n=t.pipelineContext;!e.isTargetSeries(t)||n&&n.large||i.push(ny(e.stateList,e.targetVisuals,m(e.getValueState,e),e.getDataDimension(t.getData())));}),i;}}),Bs(_O,{createOnAllSeries:!0,reset:function reset(t,e){var i=t.getData(),n=[];e.eachComponent("visualMap",function(e){if(e.isTargetSeries(t)){var o=e.getVisualMeta(m(Jy,null,t,e))||{stops:[],outerColors:[]},a=e.getDataDimension(i),r=i.getDimensionInfo(a);null!=r&&(o.dimension=r.index,n.push(o));}}),t.getData().setVisual("visualMeta",n);}});var wO={get:function get(t,e,n){var o=i((bO[t]||{})[e]);return n&&y(o)?o[o.length-1]:o;}},bO={color:{active:["#006edd","#e0ffff"],inactive:["rgba(0,0,0,0)"]},colorHue:{active:[0,360],inactive:[0,0]},colorSaturation:{active:[.3,1],inactive:[0,0]},colorLightness:{active:[.9,.5],inactive:[0,0]},colorAlpha:{active:[.3,1],inactive:[0,0]},opacity:{active:[.3,1],inactive:[0,0]},symbol:{active:["circle","roundRect","diamond"],inactive:["none"]},symbolSize:{active:[10,50],inactive:[0,0]}},SO=hL.mapVisual,MO=hL.eachVisual,IO=y,TO=d,AO=Fo,DO=Bo,CO=B,LO=Fs({type:"visualMap",dependencies:["series"],stateList:["inRange","outOfRange"],replacableOptionKeys:["inRange","outOfRange","target","controller","color"],dataBound:[-1/0,1/0],layoutMode:{type:"box",ignoreSize:!0},defaultOption:{show:!0,zlevel:0,z:4,seriesIndex:"all",min:0,max:200,dimension:null,inRange:null,outOfRange:null,left:0,right:null,top:null,bottom:0,itemWidth:null,itemHeight:null,inverse:!1,orient:"vertical",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",contentColor:"#5793f3",inactiveColor:"#aaa",borderWidth:0,padding:5,textGap:10,precision:0,color:null,formatter:null,text:null,textStyle:{color:"#333"}},init:function init(t,e,i){this._dataExtent,this.targetVisuals={},this.controllerVisuals={},this.textStyleModel,this.itemSize,this.mergeDefaultAndTheme(t,i);},optionUpdated:function optionUpdated(t,e){var i=this.option;U_.canvasSupported||(i.realtime=!1),!e&&ey(i,t,this.replacableOptionKeys),this.textStyleModel=this.getModel("textStyle"),this.resetItemSize(),this.completeVisualOption();},resetVisual:function resetVisual(t){var e=this.stateList;t=m(t,this),this.controllerVisuals=ty(this.option.controller,e,t),this.targetVisuals=ty(this.option.target,e,t);},getTargetSeriesIndices:function getTargetSeriesIndices(){var t=this.option.seriesIndex,e=[];return null==t||"all"===t?this.ecModel.eachSeries(function(t,i){e.push(i);}):e=Di(t),e;},eachTargetSeries:function eachTargetSeries(t,e){d(this.getTargetSeriesIndices(),function(i){t.call(e,this.ecModel.getSeriesByIndex(i));},this);},isTargetSeries:function isTargetSeries(t){var e=!1;return this.eachTargetSeries(function(i){i===t&&(e=!0);}),e;},formatValueText:function formatValueText(t,e,i){function n(t){return t===l[0]?"min":t===l[1]?"max":(+t).toFixed(Math.min(s,20));}var o,a,r=this.option,s=r.precision,l=this.dataBound,u=r.formatter;return i=i||["<",">"],y(t)&&(t=t.slice(),o=!0),a=e?t:o?[n(t[0]),n(t[1])]:n(t),_(u)?u.replace("{value}",o?a[0]:a).replace("{value2}",o?a[1]:a):x(u)?o?u(t[0],t[1]):u(t):o?t[0]===l[0]?i[0]+" "+a[1]:t[1]===l[1]?i[1]+" "+a[0]:a[0]+" - "+a[1]:a;},resetExtent:function resetExtent(){var t=this.option,e=AO([t.min,t.max]);this._dataExtent=e;},getDataDimension:function getDataDimension(t){var e=this.option.dimension,i=t.dimensions;if(null!=e||i.length){if(null!=e)return t.getDimension(e);for(var n=t.dimensions,o=n.length-1;o>=0;o--){var a=n[o];if(!t.getDimensionInfo(a).isCalculationCoord)return a;}}},getExtent:function getExtent(){return this._dataExtent.slice();},completeVisualOption:function completeVisualOption(){function t(t){IO(o.color)&&!t.inRange&&(t.inRange={color:o.color.slice().reverse()}),t.inRange=t.inRange||{color:e.get("gradientColor")},TO(this.stateList,function(e){var i=t[e];if(_(i)){var n=wO.get(i,"active",l);n?(t[e]={},t[e][i]=n):delete t[e];}},this);}var e=this.ecModel,o=this.option,a={inRange:o.inRange,outOfRange:o.outOfRange},r=o.target||(o.target={}),s=o.controller||(o.controller={});n(r,a),n(s,a);var l=this.isCategory();t.call(this,r),t.call(this,s),function(t,e,i){var n=t[e],o=t[i];n&&!o&&(o=t[i]={},TO(n,function(t,e){if(hL.isValidType(e)){var i=wO.get(e,"inactive",l);null!=i&&(o[e]=i,"color"!==e||o.hasOwnProperty("opacity")||o.hasOwnProperty("colorAlpha")||(o.opacity=[0,0]));}}));}.call(this,r,"inRange","outOfRange"),function(t){var e=(t.inRange||{}).symbol||(t.outOfRange||{}).symbol,n=(t.inRange||{}).symbolSize||(t.outOfRange||{}).symbolSize,o=this.get("inactiveColor");TO(this.stateList,function(a){var r=this.itemSize,s=t[a];s||(s=t[a]={color:l?o:[o]}),null==s.symbol&&(s.symbol=e&&i(e)||(l?"roundRect":["roundRect"])),null==s.symbolSize&&(s.symbolSize=n&&i(n)||(l?r[0]:[r[0],r[0]])),s.symbol=SO(s.symbol,function(t){return"none"===t||"square"===t?"roundRect":t;});var u=s.symbolSize;if(null!=u){var h=-1/0;MO(u,function(t){t>h&&(h=t);}),s.symbolSize=SO(u,function(t){return DO(t,[0,h],[0,r[0]],!0);});}},this);}.call(this,s);},resetItemSize:function resetItemSize(){this.itemSize=[parseFloat(this.get("itemWidth")),parseFloat(this.get("itemHeight"))];},isCategory:function isCategory(){return!!this.option.categories;},setSelected:CO,getValueState:CO,getVisualMeta:CO}),kO=[20,140],PO=LO.extend({type:"visualMap.continuous",defaultOption:{align:"auto",calculable:!1,range:null,realtime:!0,itemHeight:null,itemWidth:null,hoverLink:!0,hoverLinkDataSize:null,hoverLinkOnHandle:null},optionUpdated:function optionUpdated(t,e){PO.superApply(this,"optionUpdated",arguments),this.resetExtent(),this.resetVisual(function(t){t.mappingMethod="linear",t.dataExtent=this.getExtent();}),this._resetRange();},resetItemSize:function resetItemSize(){PO.superApply(this,"resetItemSize",arguments);var t=this.itemSize;"horizontal"===this._orient&&t.reverse(),(null==t[0]||isNaN(t[0]))&&(t[0]=kO[0]),(null==t[1]||isNaN(t[1]))&&(t[1]=kO[1]);},_resetRange:function _resetRange(){var t=this.getExtent(),e=this.option.range;!e||e.auto?(t.auto=1,this.option.range=t):y(e)&&(e[0]>e[1]&&e.reverse(),e[0]=Math.max(e[0],t[0]),e[1]=Math.min(e[1],t[1]));},completeVisualOption:function completeVisualOption(){LO.prototype.completeVisualOption.apply(this,arguments),d(this.stateList,function(t){var e=this.option.controller[t].symbolSize;e&&e[0]!==e[1]&&(e[0]=0);},this);},setSelected:function setSelected(t){this.option.range=t.slice(),this._resetRange();},getSelected:function getSelected(){var t=this.getExtent(),e=Fo((this.get("range")||[]).slice());return e[0]>t[1]&&(e[0]=t[1]),e[1]>t[1]&&(e[1]=t[1]),e[0]<t[0]&&(e[0]=t[0]),e[1]<t[0]&&(e[1]=t[0]),e;},getValueState:function getValueState(t){var e=this.option.range,i=this.getExtent();return(e[0]<=i[0]||e[0]<=t)&&(e[1]>=i[1]||t<=e[1])?"inRange":"outOfRange";},findTargetDataIndices:function findTargetDataIndices(t){var e=[];return this.eachTargetSeries(function(i){var n=[],o=i.getData();o.each(this.getDataDimension(o),function(e,i){t[0]<=e&&e<=t[1]&&n.push(i);},this),e.push({seriesId:i.id,dataIndex:n});},this),e;},getVisualMeta:function getVisualMeta(t){function e(e,i){o.push({value:e,color:t(e,i)});}for(var i=Qy(0,0,this.getExtent()),n=Qy(0,0,this.option.range.slice()),o=[],a=0,r=0,s=n.length,l=i.length;r<l&&(!n.length||i[r]<=n[0]);r++){i[r]<n[a]&&e(i[r],"outOfRange");}for(u=1;a<s;a++,u=0){u&&o.length&&e(n[a],"outOfRange"),e(n[a],"inRange");}for(var u=1;r<l;r++){(!n.length||n[n.length-1]<i[r])&&(u&&(o.length&&e(o[o.length-1].value,"outOfRange"),u=0),e(i[r],"outOfRange"));}var h=o.length;return{stops:o,outerColors:[h?o[0].color:"transparent",h?o[h-1].color:"transparent"]};}}),NO=Ws({type:"visualMap",autoPositionValues:{left:1,right:1,top:1,bottom:1},init:function init(t,e){this.ecModel=t,this.api=e,this.visualMapModel;},render:function render(t,e,i,n){this.visualMapModel=t,!1!==t.get("show")?this.doRender.apply(this,arguments):this.group.removeAll();},renderBackground:function renderBackground(t){var e=this.visualMapModel,i=qM(e.get("padding")||0),n=t.getBoundingRect();t.add(new yM({z2:-1,silent:!0,shape:{x:n.x-i[3],y:n.y-i[0],width:n.width+i[3]+i[1],height:n.height+i[0]+i[2]},style:{fill:e.get("backgroundColor"),stroke:e.get("borderColor"),lineWidth:e.get("borderWidth")}}));},getControllerVisual:function getControllerVisual(t,e,i){function n(t){return s[t];}function o(t,e){s[t]=e;}var a=(i=i||{}).forceState,r=this.visualMapModel,s={};if("symbol"===e&&(s.symbol=r.get("itemSymbol")),"color"===e){var l=r.get("contentColor");s.color=l;}var u=r.controllerVisuals[a||r.getValueState(t)];return d(hL.prepareVisualTypes(u),function(a){var r=u[a];i.convertOpacityToAlpha&&"opacity"===a&&(a="colorAlpha",r=u.__alphaForOpacity),hL.dependsOn(a,e)&&r&&r.applyVisual(t,n,o);}),s[e];},positionGroup:function positionGroup(t){var e=this.visualMapModel,i=this.api;da(t,e.getBoxLayoutParams(),{width:i.getWidth(),height:i.getHeight()});},doRender:B}),OO=Bo,EO=d,RO=Math.min,zO=Math.max,BO=12,VO=6,GO=NO.extend({type:"visualMap.continuous",init:function init(){GO.superApply(this,"init",arguments),this._shapes={},this._dataInterval=[],this._handleEnds=[],this._orient,this._useHandle,this._hoverLinkDataIndices=[],this._dragging,this._hovering;},doRender:function doRender(t,e,i,n){n&&"selectDataRange"===n.type&&n.from===this.uid||this._buildView();},_buildView:function _buildView(){this.group.removeAll();var t=this.visualMapModel,e=this.group;this._orient=t.get("orient"),this._useHandle=t.get("calculable"),this._resetInterval(),this._renderBar(e);var i=t.get("text");this._renderEndsText(e,i,0),this._renderEndsText(e,i,1),this._updateView(!0),this.renderBackground(e),this._updateView(),this._enableHoverLinkToSeries(),this._enableHoverLinkFromSeries(),this.positionGroup(e);},_renderEndsText:function _renderEndsText(t,e,i){if(e){var n=e[1-i];n=null!=n?n+"":"";var o=this.visualMapModel,a=o.get("textGap"),r=o.itemSize,s=this._shapes.barGroup,l=this._applyTransform([r[0]/2,0===i?-a:r[1]+a],s),u=this._applyTransform(0===i?"bottom":"top",s),h=this._orient,c=this.visualMapModel.textStyleModel;this.group.add(new rM({style:{x:l[0],y:l[1],textVerticalAlign:"horizontal"===h?"middle":u,textAlign:"horizontal"===h?u:"center",text:n,textFont:c.getFont(),textFill:c.getTextColor()}}));}},_renderBar:function _renderBar(t){var e=this.visualMapModel,i=this._shapes,n=e.itemSize,o=this._orient,a=this._useHandle,r=tx(e,this.api,n),s=i.barGroup=this._createBarGroup(r);s.add(i.outOfRange=ix()),s.add(i.inRange=ix(null,a?sx(this._orient):null,m(this._dragHandle,this,"all",!1),m(this._dragHandle,this,"all",!0)));var l=e.textStyleModel.getTextRect("国"),u=zO(l.width,l.height);a&&(i.handleThumbs=[],i.handleLabels=[],i.handleLabelPoints=[],this._createHandle(s,0,n,u,o,r),this._createHandle(s,1,n,u,o,r)),this._createIndicator(s,n,u,o),t.add(s);},_createHandle:function _createHandle(t,e,i,n,o){var a=m(this._dragHandle,this,e,!1),r=m(this._dragHandle,this,e,!0),s=ix(nx(e,n),sx(this._orient),a,r);s.position[0]=i[0],t.add(s);var l=this.visualMapModel.textStyleModel,u=new rM({draggable:!0,drift:a,onmousemove:function onmousemove(t){mw(t.event);},ondragend:r,style:{x:0,y:0,text:"",textFont:l.getFont(),textFill:l.getTextColor()}});this.group.add(u);var h=["horizontal"===o?n/2:1.5*n,"horizontal"===o?0===e?-1.5*n:1.5*n:0===e?-n/2:n/2],c=this._shapes;c.handleThumbs[e]=s,c.handleLabelPoints[e]=h,c.handleLabels[e]=u;},_createIndicator:function _createIndicator(t,e,i,n){var o=ix([[0,0]],"move");o.position[0]=e[0],o.attr({invisible:!0,silent:!0}),t.add(o);var a=this.visualMapModel.textStyleModel,r=new rM({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textFont:a.getFont(),textFill:a.getTextColor()}});this.group.add(r);var s=["horizontal"===n?i/2:VO+3,0],l=this._shapes;l.indicator=o,l.indicatorLabel=r,l.indicatorLabelPoint=s;},_dragHandle:function _dragHandle(t,e,i,n){if(this._useHandle){if(this._dragging=!e,!e){var o=this._applyTransform([i,n],this._shapes.barGroup,!0);this._updateInterval(t,o[1]),this._updateView();}e===!this.visualMapModel.get("realtime")&&this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:this._dataInterval.slice()}),e?!this._hovering&&this._clearHoverLinkToSeries():rx(this.visualMapModel)&&this._doHoverLinkToSeries(this._handleEnds[t],!1);}},_resetInterval:function _resetInterval(){var t=this.visualMapModel,e=this._dataInterval=t.getSelected(),i=t.getExtent(),n=[0,t.itemSize[1]];this._handleEnds=[OO(e[0],i,n,!0),OO(e[1],i,n,!0)];},_updateInterval:function _updateInterval(t,e){e=e||0;var i=this.visualMapModel,n=this._handleEnds,o=[0,i.itemSize[1]];QL(e,n,o,t,0);var a=i.getExtent();this._dataInterval=[OO(n[0],o,a,!0),OO(n[1],o,a,!0)];},_updateView:function _updateView(t){var e=this.visualMapModel,i=e.getExtent(),n=this._shapes,o=[0,e.itemSize[1]],a=t?o:this._handleEnds,r=this._createBarVisual(this._dataInterval,i,a,"inRange"),s=this._createBarVisual(i,i,o,"outOfRange");n.inRange.setStyle({fill:r.barColor,opacity:r.opacity}).setShape("points",r.barPoints),n.outOfRange.setStyle({fill:s.barColor,opacity:s.opacity}).setShape("points",s.barPoints),this._updateHandle(a,r);},_createBarVisual:function _createBarVisual(t,e,i,n){var o={forceState:n,convertOpacityToAlpha:!0},a=this._makeColorGradient(t,o),r=[this.getControllerVisual(t[0],"symbolSize",o),this.getControllerVisual(t[1],"symbolSize",o)],s=this._createBarPoints(i,r);return{barColor:new TM(0,0,0,1,a),barPoints:s,handlesColor:[a[0].color,a[a.length-1].color]};},_makeColorGradient:function _makeColorGradient(t,e){var i=[],n=(t[1]-t[0])/100;i.push({color:this.getControllerVisual(t[0],"color",e),offset:0});for(var o=1;o<100;o++){var a=t[0]+n*o;if(a>t[1])break;i.push({color:this.getControllerVisual(a,"color",e),offset:o/100});}return i.push({color:this.getControllerVisual(t[1],"color",e),offset:1}),i;},_createBarPoints:function _createBarPoints(t,e){var i=this.visualMapModel.itemSize;return[[i[0]-e[0],t[0]],[i[0],t[0]],[i[0],t[1]],[i[0]-e[1],t[1]]];},_createBarGroup:function _createBarGroup(t){var e=this._orient,i=this.visualMapModel.get("inverse");return new tb("horizontal"!==e||i?"horizontal"===e&&i?{scale:"bottom"===t?[-1,1]:[1,1],rotation:-Math.PI/2}:"vertical"!==e||i?{scale:"left"===t?[1,1]:[-1,1]}:{scale:"left"===t?[1,-1]:[-1,-1]}:{scale:"bottom"===t?[1,1]:[-1,1],rotation:Math.PI/2});},_updateHandle:function _updateHandle(t,e){if(this._useHandle){var i=this._shapes,n=this.visualMapModel,o=i.handleThumbs,a=i.handleLabels;EO([0,1],function(r){var s=o[r];s.setStyle("fill",e.handlesColor[r]),s.position[1]=t[r];var l=Do(i.handleLabelPoints[r],Ao(s,this.group));a[r].setStyle({x:l[0],y:l[1],text:n.formatValueText(this._dataInterval[r]),textVerticalAlign:"middle",textAlign:this._applyTransform("horizontal"===this._orient?0===r?"bottom":"top":"left",i.barGroup)});},this);}},_showIndicator:function _showIndicator(t,e,i,n){var o=this.visualMapModel,a=o.getExtent(),r=o.itemSize,s=[0,r[1]],l=OO(t,a,s,!0),u=this._shapes,h=u.indicator;if(h){h.position[1]=l,h.attr("invisible",!1),h.setShape("points",ox(!!i,n,l,r[1]));var c={convertOpacityToAlpha:!0},d=this.getControllerVisual(t,"color",c);h.setStyle("fill",d);var f=Do(u.indicatorLabelPoint,Ao(h,this.group)),p=u.indicatorLabel;p.attr("invisible",!1);var g=this._applyTransform("left",u.barGroup),m=this._orient;p.setStyle({text:(i||"")+o.formatValueText(e),textVerticalAlign:"horizontal"===m?g:"middle",textAlign:"horizontal"===m?"center":g,x:f[0],y:f[1]});}},_enableHoverLinkToSeries:function _enableHoverLinkToSeries(){var t=this;this._shapes.barGroup.on("mousemove",function(e){if(t._hovering=!0,!t._dragging){var i=t.visualMapModel.itemSize,n=t._applyTransform([e.offsetX,e.offsetY],t._shapes.barGroup,!0,!0);n[1]=RO(zO(0,n[1]),i[1]),t._doHoverLinkToSeries(n[1],0<=n[0]&&n[0]<=i[0]);}}).on("mouseout",function(){t._hovering=!1,!t._dragging&&t._clearHoverLinkToSeries();});},_enableHoverLinkFromSeries:function _enableHoverLinkFromSeries(){var t=this.api.getZr();this.visualMapModel.option.hoverLink?(t.on("mouseover",this._hoverLinkFromSeriesMouseOver,this),t.on("mouseout",this._hideIndicator,this)):this._clearHoverLinkFromSeries();},_doHoverLinkToSeries:function _doHoverLinkToSeries(t,e){var i=this.visualMapModel,n=i.itemSize;if(i.option.hoverLink){var o=[0,n[1]],a=i.getExtent();t=RO(zO(o[0],t),o[1]);var r=ax(i,a,o),s=[t-r,t+r],l=OO(t,o,a,!0),u=[OO(s[0],o,a,!0),OO(s[1],o,a,!0)];s[0]<o[0]&&(u[0]=-1/0),s[1]>o[1]&&(u[1]=1/0),e&&(u[0]===-1/0?this._showIndicator(l,u[1],"< ",r):u[1]===1/0?this._showIndicator(l,u[0],"> ",r):this._showIndicator(l,l,"≈ ",r));var h=this._hoverLinkDataIndices,c=[];(e||rx(i))&&(c=this._hoverLinkDataIndices=i.findTargetDataIndices(u));var d=Ri(h,c);this._dispatchHighDown("downplay",ex(d[0])),this._dispatchHighDown("highlight",ex(d[1]));}},_hoverLinkFromSeriesMouseOver:function _hoverLinkFromSeriesMouseOver(t){var e=t.target,i=this.visualMapModel;if(e&&null!=e.dataIndex){var n=this.ecModel.getSeriesByIndex(e.seriesIndex);if(i.isTargetSeries(n)){var o=n.getData(e.dataType),a=o.get(i.getDataDimension(o),e.dataIndex,!0);isNaN(a)||this._showIndicator(a,a);}}},_hideIndicator:function _hideIndicator(){var t=this._shapes;t.indicator&&t.indicator.attr("invisible",!0),t.indicatorLabel&&t.indicatorLabel.attr("invisible",!0);},_clearHoverLinkToSeries:function _clearHoverLinkToSeries(){this._hideIndicator();var t=this._hoverLinkDataIndices;this._dispatchHighDown("downplay",ex(t)),t.length=0;},_clearHoverLinkFromSeries:function _clearHoverLinkFromSeries(){this._hideIndicator();var t=this.api.getZr();t.off("mouseover",this._hoverLinkFromSeriesMouseOver),t.off("mouseout",this._hideIndicator);},_applyTransform:function _applyTransform(t,e,i,n){var o=Ao(e,n?null:this.group);return zM[y(t)?"applyTransform":"transformDirection"](t,o,i);},_dispatchHighDown:function _dispatchHighDown(t,e){e&&e.length&&this.api.dispatchAction({type:t,batch:e});},dispose:function dispose(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries();},remove:function remove(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries();}});Es({type:"selectDataRange",event:"dataRangeSelected",update:"update"},function(t,e){e.eachComponent({mainType:"visualMap",query:t},function(e){e.setSelected(t.selected);});}),Ns(xO);var FO=LO.extend({type:"visualMap.piecewise",defaultOption:{selected:null,minOpen:!1,maxOpen:!1,align:"auto",itemWidth:20,itemHeight:14,itemSymbol:"roundRect",pieceList:null,categories:null,splitNumber:5,selectedMode:"multiple",itemGap:10,hoverLink:!0,showLabel:null},optionUpdated:function optionUpdated(t,e){FO.superApply(this,"optionUpdated",arguments),this._pieceList=[],this.resetExtent();var n=this._mode=this._determineMode();WO[this._mode].call(this),this._resetSelected(t,e);var o=this.option.categories;this.resetVisual(function(t,e){"categories"===n?(t.mappingMethod="category",t.categories=i(o)):(t.dataExtent=this.getExtent(),t.mappingMethod="piecewise",t.pieceList=f(this._pieceList,function(t){var t=i(t);return"inRange"!==e&&(t.visual=null),t;}));});},completeVisualOption:function completeVisualOption(){function t(t,e,i){return t&&t[e]&&(w(t[e])?t[e].hasOwnProperty(i):t[e]===i);}var e=this.option,i={},n=hL.listVisualTypes(),o=this.isCategory();d(e.pieces,function(t){d(n,function(e){t.hasOwnProperty(e)&&(i[e]=1);});}),d(i,function(i,n){var a=0;d(this.stateList,function(i){a|=t(e,i,n)||t(e.target,i,n);},this),!a&&d(this.stateList,function(t){(e[t]||(e[t]={}))[n]=wO.get(n,"inRange"===t?"active":"inactive",o);});},this),LO.prototype.completeVisualOption.apply(this,arguments);},_resetSelected:function _resetSelected(t,e){var i=this.option,n=this._pieceList,o=(e?i:t).selected||{};if(i.selected=o,d(n,function(t,e){var i=this.getSelectedMapKey(t);o.hasOwnProperty(i)||(o[i]=!0);},this),"single"===i.selectedMode){var a=!1;d(n,function(t,e){var i=this.getSelectedMapKey(t);o[i]&&(a?o[i]=!1:a=!0);},this);}},getSelectedMapKey:function getSelectedMapKey(t){return"categories"===this._mode?t.value+"":t.index+"";},getPieceList:function getPieceList(){return this._pieceList;},_determineMode:function _determineMode(){var t=this.option;return t.pieces&&t.pieces.length>0?"pieces":this.option.categories?"categories":"splitNumber";},setSelected:function setSelected(t){this.option.selected=i(t);},getValueState:function getValueState(t){var e=hL.findPieceIndex(t,this._pieceList);return null!=e&&this.option.selected[this.getSelectedMapKey(this._pieceList[e])]?"inRange":"outOfRange";},findTargetDataIndices:function findTargetDataIndices(t){var e=[];return this.eachTargetSeries(function(i){var n=[],o=i.getData();o.each(this.getDataDimension(o),function(e,i){hL.findPieceIndex(e,this._pieceList)===t&&n.push(i);},this),e.push({seriesId:i.id,dataIndex:n});},this),e;},getRepresentValue:function getRepresentValue(t){var e;if(this.isCategory())e=t.value;else if(null!=t.value)e=t.value;else{var i=t.interval||[];e=i[0]===-1/0&&i[1]===1/0?0:(i[0]+i[1])/2;}return e;},getVisualMeta:function getVisualMeta(t){function e(e,a){var r=o.getRepresentValue({interval:e});a||(a=o.getValueState(r));var s=t(r,a);e[0]===-1/0?n[0]=s:e[1]===1/0?n[1]=s:i.push({value:e[0],color:s},{value:e[1],color:s});}if(!this.isCategory()){var i=[],n=[],o=this,a=this._pieceList.slice();if(a.length){var r=a[0].interval[0];r!==-1/0&&a.unshift({interval:[-1/0,r]}),(r=a[a.length-1].interval[1])!==1/0&&a.push({interval:[r,1/0]});}else a.push({interval:[-1/0,1/0]});var s=-1/0;return d(a,function(t){var i=t.interval;i&&(i[0]>s&&e([s,i[0]],"outOfRange"),e(i.slice()),s=i[1]);},this),{stops:i,outerColors:n};}}}),WO={splitNumber:function splitNumber(){var t=this.option,e=this._pieceList,i=Math.min(t.precision,20),n=this.getExtent(),o=t.splitNumber;o=Math.max(parseInt(o,10),1),t.splitNumber=o;for(var a=(n[1]-n[0])/o;+a.toFixed(i)!==a&&i<5;){i++;}t.precision=i,a=+a.toFixed(i);var r=0;t.minOpen&&e.push({index:r++,interval:[-1/0,n[0]],close:[0,0]});for(var s=n[0],l=r+o;r<l;s+=a){var u=r===o-1?n[1]:s+a;e.push({index:r++,interval:[s,u],close:[1,1]});}t.maxOpen&&e.push({index:r++,interval:[n[1],1/0],close:[0,0]}),Jo(e),d(e,function(t){t.text=this.formatValueText(t.interval);},this);},categories:function categories(){var t=this.option;d(t.categories,function(t){this._pieceList.push({text:this.formatValueText(t,!0),value:t});},this),lx(t,this._pieceList);},pieces:function pieces(){var t=this.option,e=this._pieceList;d(t.pieces,function(t,i){w(t)||(t={value:t});var n={text:"",index:i};if(null!=t.label&&(n.text=t.label),t.hasOwnProperty("value")){var o=n.value=t.value;n.interval=[o,o],n.close=[1,1];}else{for(var a=n.interval=[],r=n.close=[0,0],s=[1,0,1],l=[-1/0,1/0],u=[],h=0;h<2;h++){for(var c=[["gte","gt","min"],["lte","lt","max"]][h],d=0;d<3&&null==a[h];d++){a[h]=t[c[d]],r[h]=s[d],u[h]=2===d;}null==a[h]&&(a[h]=l[h]);}u[0]&&a[1]===1/0&&(r[0]=0),u[1]&&a[0]===-1/0&&(r[1]=0),a[0]===a[1]&&r[0]&&r[1]&&(n.value=a[0]);}n.visual=hL.retrieveVisuals(t),e.push(n);},this),lx(t,e),Jo(e),d(e,function(t){var e=t.close,i=[["<","≤"][e[1]],[">","≥"][e[0]]];t.text=t.text||this.formatValueText(null!=t.value?t.value:t.interval,!1,i);},this);}};NO.extend({type:"visualMap.piecewise",doRender:function doRender(){var t=this.group;t.removeAll();var e=this.visualMapModel,i=e.get("textGap"),n=e.textStyleModel,o=n.getFont(),a=n.getTextColor(),r=this._getItemAlign(),s=e.itemSize,l=this._getViewData(),u=l.endsText,h=T(e.get("showLabel",!0),!u);u&&this._renderEndsText(t,u[0],s,h,r),d(l.viewPieceList,function(n){var l=n.piece,u=new tb();u.onclick=m(this._onItemClick,this,l),this._enableHoverLink(u,n.indexInModelPieceList);var c=e.getRepresentValue(l);if(this._createItemSymbol(u,c,[0,0,s[0],s[1]]),h){var d=this.visualMapModel.getValueState(c);u.add(new rM({style:{x:"right"===r?-i:s[0]+i,y:s[1]/2,text:l.text,textVerticalAlign:"middle",textAlign:r,textFont:o,textFill:a,opacity:"outOfRange"===d?.5:1}}));}t.add(u);},this),u&&this._renderEndsText(t,u[1],s,h,r),aI(e.get("orient"),t,e.get("itemGap")),this.renderBackground(t),this.positionGroup(t);},_enableHoverLink:function _enableHoverLink(t,e){function i(t){var i=this.visualMapModel;i.option.hoverLink&&this.api.dispatchAction({type:t,batch:ex(i.findTargetDataIndices(e))});}t.on("mouseover",m(i,this,"highlight")).on("mouseout",m(i,this,"downplay"));},_getItemAlign:function _getItemAlign(){var t=this.visualMapModel,e=t.option;if("vertical"===e.orient)return tx(t,this.api,t.itemSize);var i=e.align;return i&&"auto"!==i||(i="left"),i;},_renderEndsText:function _renderEndsText(t,e,i,n,o){if(e){var a=new tb(),r=this.visualMapModel.textStyleModel;a.add(new rM({style:{x:n?"right"===o?i[0]:0:i[0]/2,y:i[1]/2,textVerticalAlign:"middle",textAlign:n?o:"center",text:e,textFont:r.getFont(),textFill:r.getTextColor()}})),t.add(a);}},_getViewData:function _getViewData(){var t=this.visualMapModel,e=f(t.getPieceList(),function(t,e){return{piece:t,indexInModelPieceList:e};}),i=t.get("text"),n=t.get("orient"),o=t.get("inverse");return("horizontal"===n?o:!o)?e.reverse():i&&(i=i.slice().reverse()),{viewPieceList:e,endsText:i};},_createItemSymbol:function _createItemSymbol(t,e,i){t.add(Jl(this.getControllerVisual(e,"symbol"),i[0],i[1],i[2],i[3],this.getControllerVisual(e,"color")));},_onItemClick:function _onItemClick(t){var e=this.visualMapModel,n=e.option,o=i(n.selected),a=e.getSelectedMapKey(t);"single"===n.selectedMode?(o[a]=!0,d(o,function(t,e){o[e]=e===a;})):o[a]=!o[a],this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:o});}});Ns(xO);var HO=ta,ZO=ia,UO=Fs({type:"marker",dependencies:["series","grid","polar","geo"],init:function init(t,e,i,n){this.mergeDefaultAndTheme(t,i),this.mergeOption(t,i,n.createdBySelf,!0);},isAnimationEnabled:function isAnimationEnabled(){if(U_.node)return!1;var t=this.__hostSeries;return this.getShallow("animation")&&t&&t.isAnimationEnabled();},mergeOption:function mergeOption(t,e,i,n){var o=this.constructor,r=this.mainType+"Model";i||e.eachSeries(function(t){var i=t.get(this.mainType,!0),s=t[r];i&&i.data?(s?s.mergeOption(i,e,!0):(n&&ux(i),d(i.data,function(t){t instanceof Array?(ux(t[0]),ux(t[1])):ux(t);}),a(s=new o(i,this,e),{mainType:this.mainType,seriesIndex:t.seriesIndex,name:t.name,createdBySelf:!0}),s.__hostSeries=t),t[r]=s):t[r]=null;},this);},formatTooltip:function formatTooltip(t){var e=this.getData(),i=this.getRawValue(t),n=y(i)?f(i,HO).join(", "):HO(i),o=e.getName(t),a=ZO(this.name);return(null!=i||o)&&(a+="<br />"),o&&(a+=ZO(o),null!=i&&(a+=" : ")),null!=i&&(a+=ZO(n)),a;},getData:function getData(){return this._data;},setData:function setData(t){this._data=t;}});h(UO,ZI),UO.extend({type:"markPoint",defaultOption:{zlevel:0,z:5,symbol:"pin",symbolSize:50,tooltip:{trigger:"item"},label:{show:!0,position:"inside"},itemStyle:{borderWidth:2},emphasis:{label:{show:!0}}}});var XO=l,jO=v,YO={min:jO(dx,"min"),max:jO(dx,"max"),average:jO(dx,"average")},qO=Ws({type:"marker",init:function init(){this.markerGroupMap=R();},render:function render(t,e,i){var n=this.markerGroupMap;n.each(function(t){t.__keep=!1;});var o=this.type+"Model";e.eachSeries(function(t){var n=t[o];n&&this.renderSeries(t,n,e,i);},this),n.each(function(t){!t.__keep&&this.group.remove(t.group);},this);},renderSeries:function renderSeries(){}});qO.extend({type:"markPoint",updateTransform:function updateTransform(t,e,i){e.eachSeries(function(t){var e=t.markPointModel;e&&(xx(e.getData(),t,i),this.markerGroupMap.get(t.id).updateLayout(e));},this);},renderSeries:function renderSeries(t,e,i,n){var o=t.coordinateSystem,a=t.id,r=t.getData(),s=this.markerGroupMap,l=s.get(a)||s.set(a,new Du()),u=_x(o,t,e);e.setData(u),xx(e.getData(),t,n),u.each(function(t){var i=u.getItemModel(t),n=i.getShallow("symbolSize");"function"==typeof n&&(n=n(e.getRawValue(t),e.getDataParams(t))),u.setItemVisual(t,{symbolSize:n,color:i.get("itemStyle.color")||r.getVisual("color"),symbol:i.getShallow("symbol")});}),l.updateData(u),this.group.add(l.group),u.eachItemGraphicEl(function(t){t.traverse(function(t){t.dataModel=e;});}),l.__keep=!0,l.group.silent=e.get("silent")||t.get("silent");}}),Ns(function(t){t.markPoint=t.markPoint||{};}),UO.extend({type:"markLine",defaultOption:{zlevel:0,z:5,symbol:["circle","arrow"],symbolSize:[8,16],precision:2,tooltip:{trigger:"item"},label:{show:!0,position:"end"},lineStyle:{type:"dashed"},emphasis:{label:{show:!0},lineStyle:{width:3}},animationEasing:"linear"}});var KO=function KO(t,e,o,r){var s=t.getData(),l=r.type;if(!y(r)&&("min"===l||"max"===l||"average"===l||"median"===l||null!=r.xAxis||null!=r.yAxis)){var u,h;if(null!=r.yAxis||null!=r.xAxis)u=null!=r.yAxis?"y":"x",e.getAxis(u),h=T(r.yAxis,r.xAxis);else{var c=px(r,s,e,t);u=c.valueDataDim,c.valueAxis,h=yx(s,u,l);}var d="x"===u?0:1,f=1-d,p=i(r),g={};p.type=null,p.coord=[],g.coord=[],p.coord[f]=-1/0,g.coord[f]=1/0;var m=o.get("precision");m>=0&&"number"==typeof h&&(h=+h.toFixed(Math.min(m,20))),p.coord[d]=g.coord[d]=h,r=[p,g,{type:l,valueIndex:r.valueIndex,value:h}];}return r=[fx(t,r[0]),fx(t,r[1]),a({},r[2])],r[2].type=r[2].type||"",n(r[2],r[0]),n(r[2],r[1]),r;};qO.extend({type:"markLine",updateTransform:function updateTransform(t,e,i){e.eachSeries(function(t){var e=t.markLineModel;if(e){var n=e.getData(),o=e.__from,a=e.__to;o.each(function(e){Ix(o,e,!0,t,i),Ix(a,e,!1,t,i);}),n.each(function(t){n.setItemLayout(t,[o.getItemLayout(t),a.getItemLayout(t)]);}),this.markerGroupMap.get(t.id).updateLayout();}},this);},renderSeries:function renderSeries(t,e,i,n){function o(e,i,o){var a=e.getItemModel(i);Ix(e,i,o,t,n),e.setItemVisual(i,{symbolSize:a.get("symbolSize")||g[o?0:1],symbol:a.get("symbol",!0)||p[o?0:1],color:a.get("itemStyle.color")||s.getVisual("color")});}var a=t.coordinateSystem,r=t.id,s=t.getData(),l=this.markerGroupMap,u=l.get(r)||l.set(r,new sf());this.group.add(u.group);var h=Tx(a,t,e),c=h.from,d=h.to,f=h.line;e.__from=c,e.__to=d,e.setData(f);var p=e.get("symbol"),g=e.get("symbolSize");y(p)||(p=[p,p]),"number"==typeof g&&(g=[g,g]),h.from.each(function(t){o(c,t,!0),o(d,t,!1);}),f.each(function(t){var e=f.getItemModel(t).get("lineStyle.color");f.setItemVisual(t,{color:e||c.getItemVisual(t,"color")}),f.setItemLayout(t,[c.getItemLayout(t),d.getItemLayout(t)]),f.setItemVisual(t,{fromSymbolSize:c.getItemVisual(t,"symbolSize"),fromSymbol:c.getItemVisual(t,"symbol"),toSymbolSize:d.getItemVisual(t,"symbolSize"),toSymbol:d.getItemVisual(t,"symbol")});}),u.updateData(f),h.line.eachItemGraphicEl(function(t,i){t.traverse(function(t){t.dataModel=e;});}),u.__keep=!0,u.group.silent=e.get("silent")||t.get("silent");}}),Ns(function(t){t.markLine=t.markLine||{};}),UO.extend({type:"markArea",defaultOption:{zlevel:0,z:1,tooltip:{trigger:"item"},animation:!1,label:{show:!0,position:"top"},itemStyle:{borderWidth:0},emphasis:{label:{show:!0,position:"top"}}}});var $O=function $O(t,e,i,n){var a=fx(t,n[0]),r=fx(t,n[1]),s=T,l=a.coord,u=r.coord;l[0]=s(l[0],-1/0),l[1]=s(l[1],-1/0),u[0]=s(u[0],1/0),u[1]=s(u[1],1/0);var h=o([{},a,r]);return h.coord=[a.coord,r.coord],h.x0=a.x,h.y0=a.y,h.x1=r.x,h.y1=r.y,h;},JO=[["x0","y0"],["x1","y0"],["x1","y1"],["x0","y1"]];qO.extend({type:"markArea",updateTransform:function updateTransform(t,e,i){e.eachSeries(function(t){var e=t.markAreaModel;if(e){var n=e.getData();n.each(function(e){var o=f(JO,function(o){return Lx(n,e,o,t,i);});n.setItemLayout(e,o),n.getItemGraphicEl(e).setShape("points",o);});}},this);},renderSeries:function renderSeries(t,e,i,n){var o=t.coordinateSystem,a=t.id,s=t.getData(),l=this.markerGroupMap,u=l.get(a)||l.set(a,{group:new tb()});this.group.add(u.group),u.__keep=!0;var h=kx(o,t,e);e.setData(h),h.each(function(e){h.setItemLayout(e,f(JO,function(i){return Lx(h,e,i,t,n);})),h.setItemVisual(e,{color:s.getVisual("color")});}),h.diff(u.__data).add(function(t){var e=new pM({shape:{points:h.getItemLayout(t)}});h.setItemGraphicEl(t,e),u.group.add(e);}).update(function(t,i){var n=u.__data.getItemGraphicEl(i);Io(n,{shape:{points:h.getItemLayout(t)}},e,t),u.group.add(n),h.setItemGraphicEl(t,n);}).remove(function(t){var e=u.__data.getItemGraphicEl(t);u.group.remove(e);}).execute(),h.eachItemGraphicEl(function(t,i){var n=h.getItemModel(i),o=n.getModel("label"),a=n.getModel("emphasis.label"),s=h.getItemVisual(i,"color");t.useStyle(r(n.getModel("itemStyle").getItemStyle(),{fill:Yt(s,.4),stroke:s})),t.hoverStyle=n.getModel("emphasis.itemStyle").getItemStyle(),go(t.style,t.hoverStyle,o,a,{labelFetcher:e,labelDataIndex:i,defaultText:h.getName(i)||"",isRectText:!0,autoColor:s}),fo(t,{}),t.dataModel=e;}),u.__data=h,u.group.silent=e.get("silent")||t.get("silent");}}),Ns(function(t){t.markArea=t.markArea||{};});lI.registerSubTypeDefaulter("timeline",function(){return"slider";}),Es({type:"timelineChange",event:"timelineChanged",update:"prepareAndUpdate"},function(t,e){var i=e.getComponent("timeline");return i&&null!=t.currentIndex&&(i.setCurrentIndex(t.currentIndex),!i.get("loop",!0)&&i.isIndexMax()&&i.setPlayState(!1)),e.resetOption("timeline"),r({currentIndex:i.option.currentIndex},t);}),Es({type:"timelinePlayChange",event:"timelinePlayChanged",update:"update"},function(t,e){var i=e.getComponent("timeline");i&&null!=t.playState&&i.setPlayState(t.playState);});var QO=lI.extend({type:"timeline",layoutMode:"box",defaultOption:{zlevel:0,z:4,show:!0,axisType:"time",realtime:!0,left:"20%",top:null,right:"20%",bottom:0,width:null,height:40,padding:5,controlPosition:"left",autoPlay:!1,rewind:!1,loop:!0,playInterval:2e3,currentIndex:0,itemStyle:{},label:{color:"#000"},data:[]},init:function init(t,e,i){this._data,this._names,this.mergeDefaultAndTheme(t,i),this._initData();},mergeOption:function mergeOption(t){QO.superApply(this,"mergeOption",arguments),this._initData();},setCurrentIndex:function setCurrentIndex(t){null==t&&(t=this.option.currentIndex);var e=this._data.count();this.option.loop?t=(t%e+e)%e:(t>=e&&(t=e-1),t<0&&(t=0)),this.option.currentIndex=t;},getCurrentIndex:function getCurrentIndex(){return this.option.currentIndex;},isIndexMax:function isIndexMax(){return this.getCurrentIndex()>=this._data.count()-1;},setPlayState:function setPlayState(t){this.option.autoPlay=!!t;},getPlayState:function getPlayState(){return!!this.option.autoPlay;},_initData:function _initData(){var t=this.option,e=t.data||[],n=t.axisType,o=this._names=[];if("category"===n){var a=[];d(e,function(t,e){var n,r=Li(t);w(t)?(n=i(t)).value=e:n=e,a.push(n),_(r)||null!=r&&!isNaN(r)||(r=""),o.push(r+"");}),e=a;}var r={category:"ordinal",time:"time"}[n]||"number";(this._data=new vA([{name:"value",type:r}],this)).initData(e,o);},getData:function getData(){return this._data;},getCategories:function getCategories(){if("category"===this.get("axisType"))return this._names.slice();}});h(QO.extend({type:"timeline.slider",defaultOption:{backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,orient:"horizontal",inverse:!1,tooltip:{trigger:"item"},symbol:"emptyCircle",symbolSize:10,lineStyle:{show:!0,width:2,color:"#304654"},label:{position:"auto",show:!0,interval:"auto",rotate:0,color:"#304654"},itemStyle:{color:"#304654",borderWidth:1},checkpointStyle:{symbol:"circle",symbolSize:13,color:"#c23531",borderWidth:5,borderColor:"rgba(194,53,49, 0.5)",animation:!0,animationDuration:300,animationEasing:"quinticInOut"},controlStyle:{show:!0,showPlayBtn:!0,showPrevBtn:!0,showNextBtn:!0,itemSize:22,itemGap:12,position:"left",playIcon:"path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",stopIcon:"path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",nextIcon:"path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",prevIcon:"path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",color:"#304654",borderColor:"#304654",borderWidth:1},emphasis:{label:{show:!0,color:"#c23531"},itemStyle:{color:"#c23531"},controlStyle:{color:"#c23531",borderColor:"#c23531",borderWidth:2}},data:[]}}),ZI);var tE=qI.extend({type:"timeline"}),eE=function eE(t,e,i,n){aD.call(this,t,e,i),this.type=n||"value",this.model=null;};eE.prototype={constructor:eE,getLabelModel:function getLabelModel(){return this.model.getModel("label");},isHorizontal:function isHorizontal(){return"horizontal"===this.model.get("orient");}},u(eE,aD);var iE=m,nE=d,oE=Math.PI;tE.extend({type:"timeline.slider",init:function init(t,e){this.api=e,this._axis,this._viewRect,this._timer,this._currentPointer,this._mainGroup,this._labelGroup;},render:function render(t,e,i,n){if(this.model=t,this.api=i,this.ecModel=e,this.group.removeAll(),t.get("show",!0)){var o=this._layout(t,i),a=this._createGroup("mainGroup"),r=this._createGroup("labelGroup"),s=this._axis=this._createAxis(o,t);t.formatTooltip=function(t){return ia(s.scale.getLabel(t));},nE(["AxisLine","AxisTick","Control","CurrentPointer"],function(e){this["_render"+e](o,a,s,t);},this),this._renderAxisLabel(o,r,s,t),this._position(o,t);}this._doPlayStop();},remove:function remove(){this._clearTimer(),this.group.removeAll();},dispose:function dispose(){this._clearTimer();},_layout:function _layout(t,e){var i=t.get("label.position"),n=t.get("orient"),o=Ex(t,e);null==i||"auto"===i?i="horizontal"===n?o.y+o.height/2<e.getHeight()/2?"-":"+":o.x+o.width/2<e.getWidth()/2?"+":"-":isNaN(i)&&(i={horizontal:{top:"-",bottom:"+"},vertical:{left:"-",right:"+"}}[n][i]);var a={horizontal:"center",vertical:i>=0||"+"===i?"left":"right"},r={horizontal:i>=0||"+"===i?"top":"bottom",vertical:"middle"},s={horizontal:0,vertical:oE/2},l="vertical"===n?o.height:o.width,u=t.getModel("controlStyle"),h=u.get("show",!0),c=h?u.get("itemSize"):0,d=h?u.get("itemGap"):0,f=c+d,p=t.get("label.rotate")||0;p=p*oE/180;var g,m,v,y,x=u.get("position",!0),_=h&&u.get("showPlayBtn",!0),w=h&&u.get("showPrevBtn",!0),b=h&&u.get("showNextBtn",!0),S=0,M=l;return"left"===x||"bottom"===x?(_&&(g=[0,0],S+=f),w&&(m=[S,0],S+=f),b&&(v=[M-c,0],M-=f)):(_&&(g=[M-c,0],M-=f),w&&(m=[0,0],S+=f),b&&(v=[M-c,0],M-=f)),y=[S,M],t.get("inverse")&&y.reverse(),{viewRect:o,mainLength:l,orient:n,rotation:s[n],labelRotation:p,labelPosOpt:i,labelAlign:t.get("label.align")||a[n],labelBaseline:t.get("label.verticalAlign")||t.get("label.baseline")||r[n],playPosition:g,prevBtnPosition:m,nextBtnPosition:v,axisExtent:y,controlSize:c,controlGap:d};},_position:function _position(t,e){function i(t){var e=t.position;t.origin=[c[0][0]-e[0],c[1][0]-e[1]];}function n(t){return[[t.x,t.x+t.width],[t.y,t.y+t.height]];}function o(t,e,i,n,o){t[n]+=i[n][o]-e[n][o];}var a=this._mainGroup,r=this._labelGroup,s=t.viewRect;if("vertical"===t.orient){var l=xt(),u=s.x,h=s.y+s.height;St(l,l,[-u,-h]),Mt(l,l,-oE/2),St(l,l,[u,h]),(s=s.clone()).applyTransform(l);}var c=n(s),d=n(a.getBoundingRect()),f=n(r.getBoundingRect()),p=a.position,g=r.position;g[0]=p[0]=c[0][0];var m=t.labelPosOpt;if(isNaN(m))o(p,d,c,1,v="+"===m?0:1),o(g,f,c,1,1-v);else{var v=m>=0?0:1;o(p,d,c,1,v),g[1]=p[1]+m;}a.attr("position",p),r.attr("position",g),a.rotation=r.rotation=t.rotation,i(a),i(r);},_createAxis:function _createAxis(t,e){var i=e.getData(),n=e.get("axisType"),o=Hl(e,n);o.getTicks=function(){return i.mapArray(["value"],function(t){return t;});};var a=i.getDataExtent("value");o.setExtent(a[0],a[1]),o.niceTicks();var r=new eE("value",o,t.axisExtent,n);return r.model=e,r;},_createGroup:function _createGroup(t){var e=this["_"+t]=new tb();return this.group.add(e),e;},_renderAxisLine:function _renderAxisLine(t,e,i,n){var o=i.getExtent();n.get("lineStyle.show")&&e.add(new _M({shape:{x1:o[0],y1:0,x2:o[1],y2:0},style:a({lineCap:"round"},n.getModel("lineStyle").getLineStyle()),silent:!0,z2:1}));},_renderAxisTick:function _renderAxisTick(t,e,i,n){var o=n.getData(),a=i.scale.getTicks();nE(a,function(t){var a=i.dataToCoord(t),r=o.getItemModel(t),s=r.getModel("itemStyle"),l=r.getModel("emphasis.itemStyle"),u={position:[a,0],onclick:iE(this._changeTimeline,this,t)},h=zx(r,s,e,u);fo(h,l.getItemStyle()),r.get("tooltip")?(h.dataIndex=t,h.dataModel=n):h.dataIndex=h.dataModel=null;},this);},_renderAxisLabel:function _renderAxisLabel(t,e,i,n){if(i.getLabelModel().get("show")){var o=n.getData(),a=i.getViewLabels();nE(a,function(n){var a=n.tickValue,r=o.getItemModel(a),s=r.getModel("label"),l=r.getModel("emphasis.label"),u=i.dataToCoord(n.tickValue),h=new rM({position:[u,0],rotation:t.labelRotation-t.rotation,onclick:iE(this._changeTimeline,this,a),silent:!1});mo(h.style,s,{text:n.formattedLabel,textAlign:t.labelAlign,textVerticalAlign:t.labelBaseline}),e.add(h),fo(h,mo({},l));},this);}},_renderControl:function _renderControl(t,e,i,n){function o(t,i,o,h){if(t){var c=Rx(n,i,u,{position:t,origin:[a/2,0],rotation:h?-r:0,rectHover:!0,style:s,onclick:o});e.add(c),fo(c,l);}}var a=t.controlSize,r=t.rotation,s=n.getModel("controlStyle").getItemStyle(),l=n.getModel("emphasis.controlStyle").getItemStyle(),u=[0,-a/2,a,a],h=n.getPlayState(),c=n.get("inverse",!0);o(t.nextBtnPosition,"controlStyle.nextIcon",iE(this._changeTimeline,this,c?"-":"+")),o(t.prevBtnPosition,"controlStyle.prevIcon",iE(this._changeTimeline,this,c?"+":"-")),o(t.playPosition,"controlStyle."+(h?"stopIcon":"playIcon"),iE(this._handlePlayClick,this,!h),!0);},_renderCurrentPointer:function _renderCurrentPointer(t,e,i,n){var o=n.getData(),a=n.getCurrentIndex(),r=o.getItemModel(a).getModel("checkpointStyle"),s=this,l={onCreate:function onCreate(t){t.draggable=!0,t.drift=iE(s._handlePointerDrag,s),t.ondragend=iE(s._handlePointerDragend,s),Bx(t,a,i,n,!0);},onUpdate:function onUpdate(t){Bx(t,a,i,n);}};this._currentPointer=zx(r,r,this._mainGroup,{},this._currentPointer,l);},_handlePlayClick:function _handlePlayClick(t){this._clearTimer(),this.api.dispatchAction({type:"timelinePlayChange",playState:t,from:this.uid});},_handlePointerDrag:function _handlePointerDrag(t,e,i){this._clearTimer(),this._pointerChangeTimeline([i.offsetX,i.offsetY]);},_handlePointerDragend:function _handlePointerDragend(t){this._pointerChangeTimeline([t.offsetX,t.offsetY],!0);},_pointerChangeTimeline:function _pointerChangeTimeline(t,e){var i=this._toAxisCoord(t)[0],n=Fo(this._axis.getExtent().slice());i>n[1]&&(i=n[1]),i<n[0]&&(i=n[0]),this._currentPointer.position[0]=i,this._currentPointer.dirty();var o=this._findNearestTick(i),a=this.model;(e||o!==a.getCurrentIndex()&&a.get("realtime"))&&this._changeTimeline(o);},_doPlayStop:function _doPlayStop(){this._clearTimer(),this.model.getPlayState()&&(this._timer=setTimeout(iE(function(){var t=this.model;this._changeTimeline(t.getCurrentIndex()+(t.get("rewind",!0)?-1:1));},this),this.model.get("playInterval")));},_toAxisCoord:function _toAxisCoord(t){return Do(t,this._mainGroup.getLocalTransform(),!0);},_findNearestTick:function _findNearestTick(t){var e,i=this.model.getData(),n=1/0,o=this._axis;return i.each(["value"],function(i,a){var r=o.dataToCoord(i),s=Math.abs(r-t);s<n&&(n=s,e=a);}),e;},_clearTimer:function _clearTimer(){this._timer&&(clearTimeout(this._timer),this._timer=null);},_changeTimeline:function _changeTimeline(t){var e=this.model.getCurrentIndex();"+"===t?t=e+1:"-"===t&&(t=e-1),this.api.dispatchAction({type:"timelineChange",currentIndex:t,from:this.uid});}}),Ns(function(t){var e=t&&t.timeline;y(e)||(e=e?[e]:[]),d(e,function(t){t&&Px(t);});});var aE=Fs({type:"toolbox",layoutMode:{type:"box",ignoreSize:!0},optionUpdated:function optionUpdated(){aE.superApply(this,"optionUpdated",arguments),d(this.option.feature,function(t,e){var i=Ay(e);i&&n(t,i.defaultOption);});},defaultOption:{show:!0,z:6,zlevel:0,orient:"horizontal",left:"right",top:"top",backgroundColor:"transparent",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemSize:15,itemGap:8,showTitle:!0,iconStyle:{borderColor:"#666",color:"none"},emphasis:{iconStyle:{borderColor:"#3E98C5"}}}});Ws({type:"toolbox",render:function render(t,e,i,n){function o(o,r){var s,c=h[o],d=h[r],f=new No(l[c],t,t.ecModel);if(c&&!d){if(Vx(c))s={model:f,onclick:f.option.onclick,featureName:c};else{var p=Ay(c);if(!p)return;s=new p(f,e,i);}u[c]=s;}else{if(!(s=u[d]))return;s.model=f,s.ecModel=e,s.api=i;}c||!d?f.get("show")&&!s.unusable?(a(f,s,c),f.setIconStatus=function(t,e){var i=this.option,n=this.iconPaths;i.iconStatus=i.iconStatus||{},i.iconStatus[t]=e,n[t]&&n[t].trigger(e);},s.render&&s.render(f,e,i,n)):s.remove&&s.remove(e,i):s.dispose&&s.dispose(e,i);}function a(n,o,a){var l=n.getModel("iconStyle"),u=n.getModel("emphasis.iconStyle"),h=o.getIcons?o.getIcons():n.get("icon"),c=n.get("title")||{};if("string"==typeof h){var f=h,p=c;c={},(h={})[a]=f,c[a]=p;}var g=n.iconPaths={};d(h,function(a,h){var d=Po(a,{},{x:-s/2,y:-s/2,width:s,height:s});d.setStyle(l.getItemStyle()),d.hoverStyle=u.getItemStyle(),fo(d),t.get("showTitle")&&(d.__title=c[h],d.on("mouseover",function(){var t=u.getItemStyle();d.setStyle({text:c[h],textPosition:t.textPosition||"bottom",textFill:t.fill||t.stroke||"#000",textAlign:t.textAlign||"center"});}).on("mouseout",function(){d.setStyle({textFill:null});})),d.trigger(n.get("iconStatus."+h)||"normal"),r.add(d),d.on("click",m(o.onclick,o,e,i,h)),g[h]=d;});}var r=this.group;if(r.removeAll(),t.get("show")){var s=+t.get("itemSize"),l=t.get("feature")||{},u=this._features||(this._features={}),h=[];d(l,function(t,e){h.push(e);}),new Xs(this._featureNames||[],h).add(o).update(o).remove(v(o,null)).execute(),this._featureNames=h,_v(r,t,i),r.add(wv(r.getBoundingRect(),t)),r.eachChild(function(t){var e=t.__title,n=t.hoverStyle;if(n&&e){var o=ke(e,Xe(n)),a=t.position[0]+r.position[0],l=!1;t.position[1]+r.position[1]+s+o.height>i.getHeight()&&(n.textPosition="top",l=!0);var u=l?-5-o.height:s+8;a+o.width/2>i.getWidth()?(n.textPosition=["100%",u],n.textAlign="right"):a-o.width/2<0&&(n.textPosition=[0,u],n.textAlign="left");}});}},updateView:function updateView(t,e,i,n){d(this._features,function(t){t.updateView&&t.updateView(t.model,e,i,n);});},remove:function remove(t,e){d(this._features,function(i){i.remove&&i.remove(t,e);}),this.group.removeAll();},dispose:function dispose(t,e){d(this._features,function(i){i.dispose&&i.dispose(t,e);});}});var rE=rT.toolbox.saveAsImage;Gx.defaultOption={show:!0,icon:"M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",title:rE.title,type:"png",name:"",excludeComponents:["toolbox"],pixelRatio:1,lang:rE.lang.slice()},Gx.prototype.unusable=!U_.canvasSupported,Gx.prototype.onclick=function(t,e){var i=this.model,n=i.get("name")||t.get("title.0.text")||"echarts",o=document.createElement("a"),a=i.get("type",!0)||"png";o.download=n+"."+a,o.target="_blank";var r=e.getConnectedDataURL({type:a,backgroundColor:i.get("backgroundColor",!0)||t.get("backgroundColor")||"#fff",excludeComponents:i.get("excludeComponents"),pixelRatio:i.get("pixelRatio")});if(o.href=r,"function"!=typeof MouseEvent||U_.browser.ie||U_.browser.edge){if(window.navigator.msSaveOrOpenBlob){for(var s=atob(r.split(",")[1]),l=s.length,u=new Uint8Array(l);l--;){u[l]=s.charCodeAt(l);}var h=new Blob([u]);window.navigator.msSaveOrOpenBlob(h,n+"."+a);}else{var c=i.get("lang"),d='<body style="margin:0;"><img src="'+r+'" style="max-width:100%;" title="'+(c&&c[0]||"")+'" /></body>';window.open().document.write(d);}}else{var f=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});o.dispatchEvent(f);}},Ty("saveAsImage",Gx);var sE=rT.toolbox.magicType;Fx.defaultOption={show:!0,type:[],icon:{line:"M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",bar:"M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",stack:"M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",tiled:"M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"},title:i(sE.title),option:{},seriesIndex:{}};var lE=Fx.prototype;lE.getIcons=function(){var t=this.model,e=t.get("icon"),i={};return d(t.get("type"),function(t){e[t]&&(i[t]=e[t]);}),i;};var uE={line:function line(t,e,i,o){if("bar"===t)return n({id:e,type:"line",data:i.get("data"),stack:i.get("stack"),markPoint:i.get("markPoint"),markLine:i.get("markLine")},o.get("option.line")||{},!0);},bar:function bar(t,e,i,o){if("line"===t)return n({id:e,type:"bar",data:i.get("data"),stack:i.get("stack"),markPoint:i.get("markPoint"),markLine:i.get("markLine")},o.get("option.bar")||{},!0);},stack:function stack(t,e,i,o){if("line"===t||"bar"===t)return n({id:e,stack:"__ec_magicType_stack__"},o.get("option.stack")||{},!0);},tiled:function tiled(t,e,i,o){if("line"===t||"bar"===t)return n({id:e,stack:""},o.get("option.tiled")||{},!0);}},hE=[["line","bar"],["stack","tiled"]];lE.onclick=function(t,e,i){var n=this.model,o=n.get("seriesIndex."+i);if(uE[i]){var a={series:[]};d(hE,function(t){l(t,i)>=0&&d(t,function(t){n.setIconStatus(t,"normal");});}),n.setIconStatus(i,"emphasis"),t.eachComponent({mainType:"series",query:null==o?null:{seriesIndex:o}},function(e){var o=e.subType,s=e.id,l=uE[i](o,s,e,n);l&&(r(l,e.option),a.series.push(l));var u=e.coordinateSystem;if(u&&"cartesian2d"===u.type&&("line"===i||"bar"===i)){var h=u.getAxesByScale("ordinal")[0];if(h){var c=h.dim+"Axis",d=t.queryComponents({mainType:c,index:e.get(name+"Index"),id:e.get(name+"Id")})[0].componentIndex;a[c]=a[c]||[];for(var f=0;f<=d;f++){a[c][d]=a[c][d]||{};}a[c][d].boundaryGap="bar"===i;}}}),e.dispatchAction({type:"changeMagicType",currentType:i,newOption:a});}},Es({type:"changeMagicType",event:"magicTypeChanged",update:"prepareAndUpdate"},function(t,e){e.mergeOption(t.newOption);}),Ty("magicType",Fx);var cE=rT.toolbox.dataView,dE=new Array(60).join("-"),fE="\t",pE=new RegExp("["+fE+"]+","g");$x.defaultOption={show:!0,readOnly:!1,optionToContent:null,contentToOption:null,icon:"M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",title:i(cE.title),lang:i(cE.lang),backgroundColor:"#fff",textColor:"#000",textareaColor:"#fff",textareaBorderColor:"#333",buttonColor:"#c23531",buttonTextColor:"#fff"},$x.prototype.onclick=function(t,e){function i(){n.removeChild(a),x._dom=null;}var n=e.getDom(),o=this.model;this._dom&&n.removeChild(this._dom);var a=document.createElement("div");a.style.cssText="position:absolute;left:5px;top:5px;bottom:5px;right:5px;",a.style.backgroundColor=o.get("backgroundColor")||"#fff";var r=document.createElement("h4"),s=o.get("lang")||[];r.innerHTML=s[0]||o.get("title"),r.style.cssText="margin: 10px 20px;",r.style.color=o.get("textColor");var l=document.createElement("div"),u=document.createElement("textarea");l.style.cssText="display:block;width:100%;overflow:auto;";var h=o.get("optionToContent"),c=o.get("contentToOption"),d=Ux(t);if("function"==typeof h){var f=h(e.getOption());"string"==typeof f?l.innerHTML=f:M(f)&&l.appendChild(f);}else l.appendChild(u),u.readOnly=o.get("readOnly"),u.style.cssText="width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;",u.style.color=o.get("textColor"),u.style.borderColor=o.get("textareaBorderColor"),u.style.backgroundColor=o.get("textareaColor"),u.value=d.value;var p=d.meta,g=document.createElement("div");g.style.cssText="position:absolute;bottom:0;left:0;right:0;";var m="float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",v=document.createElement("div"),y=document.createElement("div");m+=";background-color:"+o.get("buttonColor"),m+=";color:"+o.get("buttonTextColor");var x=this;ht(v,"click",i),ht(y,"click",function(){var t;try{t="function"==typeof c?c(l,e.getOption()):Kx(u.value,p);}catch(t){throw i(),new Error("Data view format error "+t);}t&&e.dispatchAction({type:"changeDataView",newOption:t}),i();}),v.innerHTML=s[1],y.innerHTML=s[2],y.style.cssText=m,v.style.cssText=m,!o.get("readOnly")&&g.appendChild(y),g.appendChild(v),ht(u,"keydown",function(t){if(9===(t.keyCode||t.which)){var e=this.value,i=this.selectionStart,n=this.selectionEnd;this.value=e.substring(0,i)+fE+e.substring(n),this.selectionStart=this.selectionEnd=i+1,mw(t);}}),a.appendChild(r),a.appendChild(l),a.appendChild(g),l.style.height=n.clientHeight-80+"px",n.appendChild(a),this._dom=a;},$x.prototype.remove=function(t,e){this._dom&&e.getDom().removeChild(this._dom);},$x.prototype.dispose=function(t,e){this.remove(t,e);},Ty("dataView",$x),Es({type:"changeDataView",event:"dataViewChanged",update:"prepareAndUpdate"},function(t,e){var i=[];d(t.newOption.series,function(t){var n=e.getSeriesByName(t.name)[0];if(n){var o=n.get("data");i.push({name:t.name,data:Jx(t.data,o)});}else i.push(a({type:"scatter"},t));}),e.mergeOption(r({series:i},t.newOption));});var gE=d,mE="\0_ec_hist_store";iO.extend({type:"dataZoom.select"}),nO.extend({type:"dataZoom.select"});var vE=rT.toolbox.dataZoom,yE=d,xE="\0_ec_\0toolbox-dataZoom_";o_.defaultOption={show:!0,icon:{zoom:"M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",back:"M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"},title:i(vE.title)};var _E=o_.prototype;_E.render=function(t,e,i,n){this.model=t,this.ecModel=e,this.api=i,s_(t,e,this,n,i),r_(t,e);},_E.onclick=function(t,e,i){wE[i].call(this);},_E.remove=function(t,e){this._brushController.unmount();},_E.dispose=function(t,e){this._brushController.dispose();};var wE={zoom:function zoom(){var t=!this._isZoomActive;this.api.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:t});},back:function back(){this._dispatchZoomAction(t_(this.ecModel));}};_E._onBrush=function(t,e){function i(t,e,i){var r=e.getAxis(t),s=r.model,l=n(t,s,a),u=l.findRepresentativeAxisProxy(s).getMinMaxSpan();null==u.minValueSpan&&null==u.maxValueSpan||(i=QL(0,i.slice(),r.scale.getExtent(),0,u.minValueSpan,u.maxValueSpan)),l&&(o[l.id]={dataZoomId:l.id,startValue:i[0],endValue:i[1]});}function n(t,e,i){var n;return i.eachComponent({mainType:"dataZoom",subType:"select"},function(i){i.getAxisModel(t,e.componentIndex)&&(n=i);}),n;}if(e.isEnd&&t.length){var o={},a=this.ecModel;this._brushController.updateCovers([]),new hy(a_(this.model.option),a,{include:["grid"]}).matchOutputRanges(t,a,function(t,e,n){if("cartesian2d"===n.type){var o=t.brushType;"rect"===o?(i("x",n,e[0]),i("y",n,e[1])):i({lineX:"x",lineY:"y"}[o],n,e);}}),Qx(a,o),this._dispatchZoomAction(o);}},_E._dispatchZoomAction=function(t){var e=[];yE(t,function(t,n){e.push(i(t));}),e.length&&this.api.dispatchAction({type:"dataZoom",from:this.uid,batch:e});},Ty("dataZoom",o_),Ns(function(t){function e(t,e){if(e){var o=t+"Index",a=e[o];null==a||"all"===a||y(a)||(a=!1===a||"none"===a?[]:[a]),i(t,function(e,i){if(null==a||"all"===a||-1!==l(a,i)){var r={type:"select",$fromToolbox:!0,id:xE+t+i};r[o]=i,n.push(r);}});}}function i(e,i){var n=t[e];y(n)||(n=n?[n]:[]),yE(n,i);}if(t){var n=t.dataZoom||(t.dataZoom=[]);y(n)||(t.dataZoom=n=[n]);var o=t.toolbox;if(o&&(y(o)&&(o=o[0]),o&&o.feature)){var a=o.feature.dataZoom;e("xAxis",a),e("yAxis",a);}}});var bE=rT.toolbox.restore;l_.defaultOption={show:!0,icon:"M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",title:bE.title},l_.prototype.onclick=function(t,e,i){e_(t),e.dispatchAction({type:"restore",from:this.uid});},Ty("restore",l_),Es({type:"restore",event:"restore",update:"prepareAndUpdate"},function(t,e){e.resetOption("recreate");});var SE,ME="urn:schemas-microsoft-com:vml",IE="undefined"==typeof window?null:window,TE=!1,AE=IE&&IE.document;if(AE&&!U_.canvasSupported)try{!AE.namespaces.zrvml&&AE.namespaces.add("zrvml",ME),SE=function SE(t){return AE.createElement("<zrvml:"+t+' class="zrvml">');};}catch(t){SE=function SE(t){return AE.createElement("<"+t+' xmlns="'+ME+'" class="zrvml">');};}var DE=ES.CMD,CE=Math.round,LE=Math.sqrt,kE=Math.abs,PE=Math.cos,NE=Math.sin,OE=Math.max;if(!U_.canvasSupported){var EE=21600,RE=EE/2,zE=function zE(t){t.style.cssText="position:absolute;left:0;top:0;width:1px;height:1px;",t.coordsize=EE+","+EE,t.coordorigin="0,0";},BE=function BE(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;");},VE=function VE(t,e,i){return"rgb("+[t,e,i].join(",")+")";},GE=function GE(t,e){e&&t&&e.parentNode!==t&&t.appendChild(e);},FE=function FE(t,e){e&&t&&e.parentNode===t&&t.removeChild(e);},WE=function WE(t,e,i){return 1e5*(parseFloat(t)||0)+1e3*(parseFloat(e)||0)+i;},HE=function HE(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t;},ZE=function ZE(t,e,i){var n=Gt(e);i=+i,isNaN(i)&&(i=1),n&&(t.color=VE(n[0],n[1],n[2]),t.opacity=i*n[3]);},UE=function UE(t){var e=Gt(t);return[VE(e[0],e[1],e[2]),e[3]];},XE=function XE(t,e,i){var n=e.fill;if(null!=n)if(n instanceof IM){var o,a=0,r=[0,0],s=0,l=1,u=i.getBoundingRect(),h=u.width,c=u.height;if("linear"===n.type){o="gradient";var d=i.transform,f=[n.x*h,n.y*c],p=[n.x2*h,n.y2*c];d&&(Q(f,f,d),Q(p,p,d));var g=p[0]-f[0],m=p[1]-f[1];(a=180*Math.atan2(g,m)/Math.PI)<0&&(a+=360),a<1e-6&&(a=0);}else{o="gradientradial";var f=[n.x*h,n.y*c],d=i.transform,v=i.scale,y=h,x=c;r=[(f[0]-u.x)/y,(f[1]-u.y)/x],d&&Q(f,f,d),y/=v[0]*EE,x/=v[1]*EE;var _=OE(y,x);s=0/_,l=2*n.r/_-s;}var w=n.colorStops.slice();w.sort(function(t,e){return t.offset-e.offset;});for(var b=w.length,S=[],M=[],I=0;I<b;I++){var T=w[I],A=UE(T.color);M.push(T.offset*l+s+" "+A[0]),0!==I&&I!==b-1||S.push(A);}if(b>=2){var D=S[0][0],C=S[1][0],L=S[0][1]*e.opacity,k=S[1][1]*e.opacity;t.type=o,t.method="none",t.focus="100%",t.angle=a,t.color=D,t.color2=C,t.colors=M.join(","),t.opacity=k,t.opacity2=L;}"radial"===o&&(t.focusposition=r.join(","));}else ZE(t,n,e.opacity);},jE=function jE(t,e){null!=e.lineDash&&(t.dashstyle=e.lineDash.join(" ")),null==e.stroke||e.stroke instanceof IM||ZE(t,e.stroke,e.opacity);},YE=function YE(t,e,i,n){var o="fill"===e,a=t.getElementsByTagName(e)[0];null!=i[e]&&"none"!==i[e]&&(o||!o&&i.lineWidth)?(t[o?"filled":"stroked"]="true",i[e]instanceof IM&&FE(t,a),a||(a=u_(e)),o?XE(a,i,n):jE(a,i),GE(t,a)):(t[o?"filled":"stroked"]="false",FE(t,a));},qE=[[],[],[]],KE=function KE(t,e){var i,n,o,a,r,s,l=DE.M,u=DE.C,h=DE.L,c=DE.A,d=DE.Q,f=[],p=t.data,g=t.len();for(a=0;a<g;){switch(o=p[a++],n="",i=0,o){case l:n=" m ",i=1,r=p[a++],s=p[a++],qE[0][0]=r,qE[0][1]=s;break;case h:n=" l ",i=1,r=p[a++],s=p[a++],qE[0][0]=r,qE[0][1]=s;break;case d:case u:n=" c ",i=3;var m,v,y=p[a++],x=p[a++],_=p[a++],w=p[a++];o===d?(m=_,v=w,_=(_+2*y)/3,w=(w+2*x)/3,y=(r+2*y)/3,x=(s+2*x)/3):(m=p[a++],v=p[a++]),qE[0][0]=y,qE[0][1]=x,qE[1][0]=_,qE[1][1]=w,qE[2][0]=m,qE[2][1]=v,r=m,s=v;break;case c:var b=0,S=0,M=1,I=1,T=0;e&&(b=e[4],S=e[5],M=LE(e[0]*e[0]+e[1]*e[1]),I=LE(e[2]*e[2]+e[3]*e[3]),T=Math.atan2(-e[1]/I,e[0]/M));var A=p[a++],D=p[a++],C=p[a++],L=p[a++],k=p[a++]+T,P=p[a++]+k+T;a++;var N=p[a++],O=A+PE(k)*C,E=D+NE(k)*L,y=A+PE(P)*C,x=D+NE(P)*L,R=N?" wa ":" at ";Math.abs(O-y)<1e-4&&(Math.abs(P-k)>.01?N&&(O+=.0125):Math.abs(E-D)<1e-4?N&&O<A||!N&&O>A?x-=.0125:x+=.0125:N&&E<D||!N&&E>D?y+=.0125:y-=.0125),f.push(R,CE(((A-C)*M+b)*EE-RE),",",CE(((D-L)*I+S)*EE-RE),",",CE(((A+C)*M+b)*EE-RE),",",CE(((D+L)*I+S)*EE-RE),",",CE((O*M+b)*EE-RE),",",CE((E*I+S)*EE-RE),",",CE((y*M+b)*EE-RE),",",CE((x*I+S)*EE-RE)),r=y,s=x;break;case DE.R:var z=qE[0],B=qE[1];z[0]=p[a++],z[1]=p[a++],B[0]=z[0]+p[a++],B[1]=z[1]+p[a++],e&&(Q(z,z,e),Q(B,B,e)),z[0]=CE(z[0]*EE-RE),B[0]=CE(B[0]*EE-RE),z[1]=CE(z[1]*EE-RE),B[1]=CE(B[1]*EE-RE),f.push(" m ",z[0],",",z[1]," l ",B[0],",",z[1]," l ",B[0],",",B[1]," l ",z[0],",",B[1]);break;case DE.Z:f.push(" x ");}if(i>0){f.push(n);for(var V=0;V<i;V++){var G=qE[V];e&&Q(G,G,e),f.push(CE(G[0]*EE-RE),",",CE(G[1]*EE-RE),V<i-1?",":"");}}}return f.join("");};Pn.prototype.brushVML=function(t){var e=this.style,i=this._vmlEl;i||(i=u_("shape"),zE(i),this._vmlEl=i),YE(i,"fill",e,this),YE(i,"stroke",e,this);var n=this.transform,o=null!=n,a=i.getElementsByTagName("stroke")[0];if(a){var r=e.lineWidth;if(o&&!e.strokeNoScale){var s=n[0]*n[3]-n[1]*n[2];r*=LE(kE(s));}a.weight=r+"px";}var l=this.path||(this.path=new ES());this.__dirtyPath&&(l.beginPath(),l.subPixelOptimize=!1,this.buildPath(l,this.shape),l.toStatic(),this.__dirtyPath=!1),i.path=KE(l,this.transform),i.style.zIndex=WE(this.zlevel,this.z,this.z2),GE(t,i),null!=e.text?this.drawRectText(t,this.getBoundingRect()):this.removeRectText(t);},Pn.prototype.onRemove=function(t){FE(t,this._vmlEl),this.removeRectText(t);},Pn.prototype.onAdd=function(t){GE(t,this._vmlEl),this.appendRectText(t);};var $E=function $E(t){return"object"==typeof t&&t.tagName&&"IMG"===t.tagName.toUpperCase();};fi.prototype.brushVML=function(t){var e,i,n=this.style,o=n.image;if($E(o)){var a=o.src;if(a===this._imageSrc)e=this._imageWidth,i=this._imageHeight;else{var r=o.runtimeStyle,s=r.width,l=r.height;r.width="auto",r.height="auto",e=o.width,i=o.height,r.width=s,r.height=l,this._imageSrc=a,this._imageWidth=e,this._imageHeight=i;}o=a;}else o===this._imageSrc&&(e=this._imageWidth,i=this._imageHeight);if(o){var u=n.x||0,h=n.y||0,c=n.width,d=n.height,f=n.sWidth,p=n.sHeight,g=n.sx||0,m=n.sy||0,v=f&&p,y=this._vmlEl;y||(y=AE.createElement("div"),zE(y),this._vmlEl=y);var x,_=y.style,w=!1,b=1,S=1;if(this.transform&&(x=this.transform,b=LE(x[0]*x[0]+x[1]*x[1]),S=LE(x[2]*x[2]+x[3]*x[3]),w=x[1]||x[2]),w){var M=[u,h],I=[u+c,h],T=[u,h+d],A=[u+c,h+d];Q(M,M,x),Q(I,I,x),Q(T,T,x),Q(A,A,x);var D=OE(M[0],I[0],T[0],A[0]),C=OE(M[1],I[1],T[1],A[1]),L=[];L.push("M11=",x[0]/b,",","M12=",x[2]/S,",","M21=",x[1]/b,",","M22=",x[3]/S,",","Dx=",CE(u*b+x[4]),",","Dy=",CE(h*S+x[5])),_.padding="0 "+CE(D)+"px "+CE(C)+"px 0",_.filter="progid:DXImageTransform.Microsoft.Matrix("+L.join("")+", SizingMethod=clip)";}else x&&(u=u*b+x[4],h=h*S+x[5]),_.filter="",_.left=CE(u)+"px",_.top=CE(h)+"px";var k=this._imageEl,P=this._cropEl;k||(k=AE.createElement("div"),this._imageEl=k);var N=k.style;if(v){if(e&&i)N.width=CE(b*e*c/f)+"px",N.height=CE(S*i*d/p)+"px";else{var O=new Image(),E=this;O.onload=function(){O.onload=null,e=O.width,i=O.height,N.width=CE(b*e*c/f)+"px",N.height=CE(S*i*d/p)+"px",E._imageWidth=e,E._imageHeight=i,E._imageSrc=o;},O.src=o;}P||((P=AE.createElement("div")).style.overflow="hidden",this._cropEl=P);var R=P.style;R.width=CE((c+g*c/f)*b),R.height=CE((d+m*d/p)*S),R.filter="progid:DXImageTransform.Microsoft.Matrix(Dx="+-g*c/f*b+",Dy="+-m*d/p*S+")",P.parentNode||y.appendChild(P),k.parentNode!==P&&P.appendChild(k);}else N.width=CE(b*c)+"px",N.height=CE(S*d)+"px",y.appendChild(k),P&&P.parentNode&&(y.removeChild(P),this._cropEl=null);var z="",B=n.opacity;B<1&&(z+=".Alpha(opacity="+CE(100*B)+") "),z+="progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+o+", SizingMethod=scale)",N.filter=z,y.style.zIndex=WE(this.zlevel,this.z,this.z2),GE(t,y),null!=n.text&&this.drawRectText(t,this.getBoundingRect());}},fi.prototype.onRemove=function(t){FE(t,this._vmlEl),this._vmlEl=null,this._cropEl=null,this._imageEl=null,this.removeRectText(t);},fi.prototype.onAdd=function(t){GE(t,this._vmlEl),this.appendRectText(t);};var JE,QE={},tR=0,eR=document.createElement("div"),iR=function iR(t){var e=QE[t];if(!e){tR>100&&(tR=0,QE={});var i,n=eR.style;try{n.font=t,i=n.fontFamily.split(",")[0];}catch(t){}e={style:n.fontStyle||"normal",variant:n.fontVariant||"normal",weight:n.fontWeight||"normal",size:0|parseFloat(n.fontSize||12),family:i||"Microsoft YaHei"},QE[t]=e,tR++;}return e;};!function(t,e){bb[t]=e;}("measureText",function(t,e){var i=AE;JE||((JE=i.createElement("div")).style.cssText="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;",AE.body.appendChild(JE));try{JE.style.font=e;}catch(t){}return JE.innerHTML="",JE.appendChild(i.createTextNode(t)),{width:JE.offsetWidth};});for(var nR=new de(),oR=[Db,di,fi,Pn,rM],aR=0;aR<oR.length;aR++){var rR=oR[aR].prototype;rR.drawRectText=function(t,e,i,n){var o=this.style;this.__dirty&&Ye(o);var a=o.text;if(null!=a&&(a+=""),a){if(o.rich){var r=Ze(a,o);a=[];for(var s=0;s<r.lines.length;s++){for(var l=r.lines[s].tokens,u=[],h=0;h<l.length;h++){u.push(l[h].text);}a.push(u.join(""));}a=a.join("\n");}var c,d,f=o.textAlign,p=o.textVerticalAlign,g=iR(o.font),m=g.style+" "+g.variant+" "+g.weight+" "+g.size+'px "'+g.family+'"';i=i||ke(a,m,f,p,o.textPadding,o.textLineHeight);var v=this.transform;if(v&&!n&&(nR.copy(e),nR.applyTransform(v),e=nR),n)c=e.x,d=e.y;else{var y=o.textPosition,x=o.textDistance;if(y instanceof Array)c=e.x+HE(y[0],e.width),d=e.y+HE(y[1],e.height),f=f||"left";else{var _=Re(y,e,x);c=_.x,d=_.y,f=f||_.textAlign,p=p||_.textVerticalAlign;}}c=Oe(c,i.width,f),d=Ee(d,i.height,p),d+=i.height/2;var w,b,S,M=u_,I=this._textVmlEl;I?b=(w=(S=I.firstChild).nextSibling).nextSibling:(I=M("line"),w=M("path"),b=M("textpath"),S=M("skew"),b.style["v-text-align"]="left",zE(I),w.textpathok=!0,b.on=!0,I.from="0 0",I.to="1000 0.05",GE(I,S),GE(I,w),GE(I,b),this._textVmlEl=I);var T=[c,d],A=I.style;v&&n?(Q(T,T,v),S.on=!0,S.matrix=v[0].toFixed(3)+","+v[2].toFixed(3)+","+v[1].toFixed(3)+","+v[3].toFixed(3)+",0,0",S.offset=(CE(T[0])||0)+","+(CE(T[1])||0),S.origin="0 0",A.left="0px",A.top="0px"):(S.on=!1,A.left=CE(c)+"px",A.top=CE(d)+"px"),b.string=BE(a);try{b.style.font=m;}catch(t){}YE(I,"fill",{fill:o.textFill,opacity:o.opacity},this),YE(I,"stroke",{stroke:o.textStroke,opacity:o.opacity,lineDash:o.lineDash},this),I.style.zIndex=WE(this.zlevel,this.z,this.z2),GE(t,I);}},rR.removeRectText=function(t){FE(t,this._textVmlEl),this._textVmlEl=null;},rR.appendRectText=function(t){GE(t,this._textVmlEl);};}rM.prototype.brushVML=function(t){var e=this.style;null!=e.text?this.drawRectText(t,{x:e.x||0,y:e.y||0,width:0,height:0},this.getBoundingRect(),!0):this.removeRectText(t);},rM.prototype.onRemove=function(t){this.removeRectText(t);},rM.prototype.onAdd=function(t){this.appendRectText(t);};}d_.prototype={constructor:d_,getType:function getType(){return"vml";},getViewportRoot:function getViewportRoot(){return this._vmlViewport;},getViewportRootOffset:function getViewportRootOffset(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0};},refresh:function refresh(){var t=this.storage.getDisplayList(!0,!0);this._paintList(t);},_paintList:function _paintList(t){for(var e=this._vmlRoot,i=0;i<t.length;i++){var n=t[i];n.invisible||n.ignore?(n.__alreadyNotVisible||n.onRemove(e),n.__alreadyNotVisible=!0):(n.__alreadyNotVisible&&n.onAdd(e),n.__alreadyNotVisible=!1,n.__dirty&&(n.beforeBrush&&n.beforeBrush(),(n.brushVML||n.brush).call(n,e),n.afterBrush&&n.afterBrush())),n.__dirty=!1;}this._firstPaint&&(this._vmlViewport.appendChild(e),this._firstPaint=!1);},resize:function resize(t,e){var t=null==t?this._getWidth():t,e=null==e?this._getHeight():e;if(this._width!==t||this._height!==e){this._width=t,this._height=e;var i=this._vmlViewport.style;i.width=t+"px",i.height=e+"px";}},dispose:function dispose(){this.root.innerHTML="",this._vmlRoot=this._vmlViewport=this.storage=null;},getWidth:function getWidth(){return this._width;},getHeight:function getHeight(){return this._height;},clear:function clear(){this._vmlViewport&&this.root.removeChild(this._vmlViewport);},_getWidth:function _getWidth(){var t=this.root,e=t.currentStyle;return(t.clientWidth||c_(e.width))-c_(e.paddingLeft)-c_(e.paddingRight)|0;},_getHeight:function _getHeight(){var t=this.root,e=t.currentStyle;return(t.clientHeight||c_(e.height))-c_(e.paddingTop)-c_(e.paddingBottom)|0;}},d(["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],function(t){d_.prototype[t]=f_(t);}),Ti("vml",d_);var sR="http://www.w3.org/2000/svg",lR=ES.CMD,uR=Array.prototype.join,hR="none",cR=Math.round,dR=Math.sin,fR=Math.cos,pR=Math.PI,gR=2*Math.PI,mR=180/pR,vR=1e-4,yR={};yR.brush=function(t){var e=t.style,i=t.__svgEl;i||(i=p_("path"),t.__svgEl=i),t.path||t.createPathProxy();var n=t.path;if(t.__dirtyPath){n.beginPath(),n.subPixelOptimize=!1,t.buildPath(n,t.shape),t.__dirtyPath=!1;var o=S_(n);o.indexOf("NaN")<0&&__(i,"d",o);}b_(i,e,!1,t),x_(i,t.transform),null!=e.text&&bR(t,t.getBoundingRect());};var xR={};xR.brush=function(t){var e=t.style,i=e.image;if(i instanceof HTMLImageElement&&(i=i.src),i){var n=e.x||0,o=e.y||0,a=e.width,r=e.height,s=t.__svgEl;s||(s=p_("image"),t.__svgEl=s),i!==t.__imageSrc&&(w_(s,"href",i),t.__imageSrc=i),__(s,"width",a),__(s,"height",r),__(s,"x",n),__(s,"y",o),x_(s,t.transform),null!=e.text&&bR(t,t.getBoundingRect());}};var _R={},wR=new de(),bR=function bR(t,e,i){var n=t.style;t.__dirty&&Ye(n);var o=n.text;if(null!=o){o+="";var a=t.__textSvgEl;a||(a=p_("text"),t.__textSvgEl=a);var r,s,l=n.textPosition,u=n.textDistance,h=n.textAlign||"left";"number"==typeof n.fontSize&&(n.fontSize+="px");var c=n.font||[n.fontStyle||"",n.fontWeight||"",n.fontSize||"",n.fontFamily||""].join(" ")||wb,d=M_(n.textVerticalAlign),f=(i=ke(o,c,h,d,n.textPadding,n.textLineHeight)).lineHeight;if(l instanceof Array)r=e.x+l[0],s=e.y+l[1];else{var p=Re(l,e,u);r=p.x,s=p.y,d=M_(p.textVerticalAlign),h=p.textAlign;}__(a,"alignment-baseline",d),c&&(a.style.font=c);var g=n.textPadding;if(__(a,"x",r),__(a,"y",s),b_(a,n,!0,t),t instanceof rM||t.style.transformText)x_(a,t.transform);else{if(t.transform)wR.copy(e),wR.applyTransform(t.transform),e=wR;else{var m=t.transformCoordToGlobal(e.x,e.y);e.x=m[0],e.y=m[1],t.transform=_t(xt());}var v=n.textOrigin;"center"===v?(r=i.width/2+r,s=i.height/2+s):v&&(r=v[0]+r,s=v[1]+s);var y=-n.textRotation||0,x=xt();Mt(x,x,y),St(x,x,m=[t.transform[4],t.transform[5]]),x_(a,x);}var _=o.split("\n"),w=_.length,b=h;"left"===b?(b="start",g&&(r+=g[3])):"right"===b?(b="end",g&&(r-=g[1])):"center"===b&&(b="middle",g&&(r+=(g[3]-g[1])/2));var S=0;if("after-edge"===d?(S=-i.height+f,g&&(S-=g[2])):"middle"===d?(S=(-i.height+f)/2,g&&(s+=(g[0]-g[2])/2)):g&&(S+=g[0]),t.__text!==o||t.__textFont!==c){var M=t.__tspanList||[];t.__tspanList=M;for(T=0;T<w;T++){(A=M[T])?A.innerHTML="":(A=M[T]=p_("tspan"),a.appendChild(A),__(A,"alignment-baseline",d),__(A,"text-anchor",b)),__(A,"x",r),__(A,"y",s+T*f+S),A.appendChild(document.createTextNode(_[T]));}for(;T<M.length;T++){a.removeChild(M[T]);}M.length=w,t.__text=o,t.__textFont=c;}else if(t.__tspanList.length)for(var I=t.__tspanList.length,T=0;T<I;++T){var A=t.__tspanList[T];A&&(__(A,"x",r),__(A,"y",s+T*f+S));}}};_R.drawRectText=bR,_R.brush=function(t){var e=t.style;null!=e.text&&(e.textPosition=[0,0],bR(t,{x:e.x||0,y:e.y||0,width:0,height:0},t.getBoundingRect()));},I_.prototype={diff:function diff(t,e,i){i||(i=function i(t,e){return t===e;}),this.equals=i;var n=this;t=t.slice();var o=(e=e.slice()).length,a=t.length,r=1,s=o+a,l=[{newPos:-1,components:[]}],u=this.extractCommon(l[0],e,t,0);if(l[0].newPos+1>=o&&u+1>=a){for(var h=[],c=0;c<e.length;c++){h.push(c);}return[{indices:h,count:e.length}];}for(;r<=s;){var d=function(){for(var i=-1*r;i<=r;i+=2){var s,u=l[i-1],h=l[i+1],c=(h?h.newPos:0)-i;u&&(l[i-1]=void 0);var d=u&&u.newPos+1<o,f=h&&0<=c&&c<a;if(d||f){if(!d||f&&u.newPos<h.newPos?(s=A_(h),n.pushComponent(s.components,void 0,!0)):((s=u).newPos++,n.pushComponent(s.components,!0,void 0)),c=n.extractCommon(s,e,t,i),s.newPos+1>=o&&c+1>=a)return T_(0,s.components);l[i]=s;}else l[i]=void 0;}r++;}();if(d)return d;}},pushComponent:function pushComponent(t,e,i){var n=t[t.length-1];n&&n.added===e&&n.removed===i?t[t.length-1]={count:n.count+1,added:e,removed:i}:t.push({count:1,added:e,removed:i});},extractCommon:function extractCommon(t,e,i,n){for(var o=e.length,a=i.length,r=t.newPos,s=r-n,l=0;r+1<o&&s+1<a&&this.equals(e[r+1],i[s+1]);){r++,s++,l++;}return l&&t.components.push({count:l}),t.newPos=r,s;},tokenize:function tokenize(t){return t.slice();},join:function join(t){return t.slice();}};var SR=new I_(),MR=function MR(t,e,i){return SR.diff(t,e,i);};D_.prototype.createElement=p_,D_.prototype.getDefs=function(t){var e=this._svgRoot,i=this._svgRoot.getElementsByTagName("defs");return 0===i.length?t?((i=e.insertBefore(this.createElement("defs"),e.firstChild)).contains||(i.contains=function(t){var e=i.children;if(!e)return!1;for(var n=e.length-1;n>=0;--n){if(e[n]===t)return!0;}return!1;}),i):null:i[0];},D_.prototype.update=function(t,e){if(t){var i=this.getDefs(!1);if(t[this._domName]&&i.contains(t[this._domName]))"function"==typeof e&&e(t);else{var n=this.add(t);n&&(t[this._domName]=n);}}},D_.prototype.addDom=function(t){this.getDefs(!0).appendChild(t);},D_.prototype.removeDom=function(t){var e=this.getDefs(!1);e&&t[this._domName]&&(e.removeChild(t[this._domName]),t[this._domName]=null);},D_.prototype.getDoms=function(){var t=this.getDefs(!1);if(!t)return[];var e=[];return d(this._tagNames,function(i){var n=t.getElementsByTagName(i);e=e.concat([].slice.call(n));}),e;},D_.prototype.markAllUnused=function(){var t=this;d(this.getDoms(),function(e){e[t._markLabel]="0";});},D_.prototype.markUsed=function(t){t&&(t[this._markLabel]="1");},D_.prototype.removeUnused=function(){var t=this.getDefs(!1);if(t){var e=this;d(this.getDoms(),function(i){"1"!==i[e._markLabel]&&t.removeChild(i);});}},D_.prototype.getSvgProxy=function(t){return t instanceof Pn?yR:t instanceof fi?xR:t instanceof rM?_R:yR;},D_.prototype.getTextSvgElement=function(t){return t.__textSvgEl;},D_.prototype.getSvgElement=function(t){return t.__svgEl;},u(C_,D_),C_.prototype.addWithoutUpdate=function(t,e){if(e&&e.style){var i=this;d(["fill","stroke"],function(n){if(e.style[n]&&("linear"===e.style[n].type||"radial"===e.style[n].type)){var o,a=e.style[n],r=i.getDefs(!0);a._dom?(o=a._dom,r.contains(a._dom)||i.addDom(o)):o=i.add(a),i.markUsed(e);var s=o.getAttribute("id");t.setAttribute(n,"url(#"+s+")");}});}},C_.prototype.add=function(t){var e;if("linear"===t.type)e=this.createElement("linearGradient");else{if("radial"!==t.type)return Yw("Illegal gradient type."),null;e=this.createElement("radialGradient");}return t.id=t.id||this.nextId++,e.setAttribute("id","zr"+this._zrId+"-gradient-"+t.id),this.updateDom(t,e),this.addDom(e),e;},C_.prototype.update=function(t){var e=this;D_.prototype.update.call(this,t,function(){var i=t.type,n=t._dom.tagName;"linear"===i&&"linearGradient"===n||"radial"===i&&"radialGradient"===n?e.updateDom(t,t._dom):(e.removeDom(t),e.add(t));});},C_.prototype.updateDom=function(t,e){if("linear"===t.type)e.setAttribute("x1",t.x),e.setAttribute("y1",t.y),e.setAttribute("x2",t.x2),e.setAttribute("y2",t.y2);else{if("radial"!==t.type)return void Yw("Illegal gradient type.");e.setAttribute("cx",t.x),e.setAttribute("cy",t.y),e.setAttribute("r",t.r);}t.global?e.setAttribute("gradientUnits","userSpaceOnUse"):e.setAttribute("gradientUnits","objectBoundingBox"),e.innerHTML="";for(var i=t.colorStops,n=0,o=i.length;n<o;++n){var a=this.createElement("stop");a.setAttribute("offset",100*i[n].offset+"%");var r=i[n].color;if(r.indexOf(!1)){var s=Gt(r)[3],l=Zt(r);a.setAttribute("stop-color","#"+l),a.setAttribute("stop-opacity",s);}else a.setAttribute("stop-color",i[n].color);e.appendChild(a);}t._dom=e;},C_.prototype.markUsed=function(t){if(t.style){var e=t.style.fill;e&&e._dom&&D_.prototype.markUsed.call(this,e._dom),(e=t.style.stroke)&&e._dom&&D_.prototype.markUsed.call(this,e._dom);}},u(L_,D_),L_.prototype.update=function(t){var e=this.getSvgElement(t);e&&this.updateDom(e,t.__clipPaths,!1);var i=this.getTextSvgElement(t);i&&this.updateDom(i,t.__clipPaths,!0),this.markUsed(t);},L_.prototype.updateDom=function(t,e,i){if(e&&e.length>0){var n,o,a=this.getDefs(!0),r=e[0],s=i?"_textDom":"_dom";r[s]?(o=r[s].getAttribute("id"),n=r[s],a.contains(n)||a.appendChild(n)):(o="zr"+this._zrId+"-clip-"+this.nextId,++this.nextId,(n=this.createElement("clipPath")).setAttribute("id",o),a.appendChild(n),r[s]=n);var l=this.getSvgProxy(r);if(r.transform&&r.parent.invTransform&&!i){var u=Array.prototype.slice.call(r.transform);bt(r.transform,r.parent.invTransform,r.transform),l.brush(r),r.transform=u;}else l.brush(r);var h=this.getSvgElement(r);n.innerHTML="",n.appendChild(h.cloneNode()),t.setAttribute("clip-path","url(#"+o+")"),e.length>1&&this.updateDom(n,e.slice(1),i);}else t&&t.setAttribute("clip-path","none");},L_.prototype.markUsed=function(t){var e=this;t.__clipPaths&&t.__clipPaths.length>0&&d(t.__clipPaths,function(t){t._dom&&D_.prototype.markUsed.call(e,t._dom),t._textDom&&D_.prototype.markUsed.call(e,t._textDom);});},u(k_,D_),k_.prototype.addWithoutUpdate=function(t,e){if(e&&P_(e.style)){var i,n=e.style;n._shadowDom?(i=n._shadowDom,this.getDefs(!0).contains(n._shadowDom)||this.addDom(i)):i=this.add(e),this.markUsed(e);var o=i.getAttribute("id");t.style.filter="url(#"+o+")";}},k_.prototype.add=function(t){var e=this.createElement("filter"),i=t.style;return i._shadowDomId=i._shadowDomId||this.nextId++,e.setAttribute("id","zr"+this._zrId+"-shadow-"+i._shadowDomId),this.updateDom(t,e),this.addDom(e),e;},k_.prototype.update=function(t,e){var i=e.style;if(P_(i)){var n=this;D_.prototype.update.call(this,e,function(t){n.updateDom(e,t._shadowDom);});}else this.remove(t,i);},k_.prototype.remove=function(t,e){null!=e._shadowDomId&&(this.removeDom(e),t.style.filter="");},k_.prototype.updateDom=function(t,e){var i=e.getElementsByTagName("feDropShadow");i=0===i.length?this.createElement("feDropShadow"):i[0];var n,o,a,r,s=t.style,l=t.scale?t.scale[0]||1:1,u=t.scale?t.scale[1]||1:1;if(s.shadowBlur||s.shadowOffsetX||s.shadowOffsetY)n=s.shadowOffsetX||0,o=s.shadowOffsetY||0,a=s.shadowBlur,r=s.shadowColor;else{if(!s.textShadowBlur)return void this.removeDom(e,s);n=s.textShadowOffsetX||0,o=s.textShadowOffsetY||0,a=s.textShadowBlur,r=s.textShadowColor;}i.setAttribute("dx",n/l),i.setAttribute("dy",o/u),i.setAttribute("flood-color",r);var h=a/2/l+" "+a/2/u;i.setAttribute("stdDeviation",h),e.setAttribute("x","-100%"),e.setAttribute("y","-100%"),e.setAttribute("width",Math.ceil(a/2*200)+"%"),e.setAttribute("height",Math.ceil(a/2*200)+"%"),e.appendChild(i),s._shadowDom=e;},k_.prototype.markUsed=function(t){var e=t.style;e&&e._shadowDom&&D_.prototype.markUsed.call(this,e._shadowDom);};var IR=function IR(t,e,i,n){this.root=t,this.storage=e,this._opts=i=a({},i||{});var o=p_("svg");o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("version","1.1"),o.setAttribute("baseProfile","full"),o.style.cssText="user-select:none;position:absolute;left:0;top:0;",this.gradientManager=new C_(n,o),this.clipPathManager=new L_(n,o),this.shadowManager=new k_(n,o);var r=document.createElement("div");r.style.cssText="overflow:hidden;position:relative",this._svgRoot=o,this._viewport=r,t.appendChild(r),r.appendChild(o),this.resize(i.width,i.height),this._visibleList=[];};IR.prototype={constructor:IR,getType:function getType(){return"svg";},getViewportRoot:function getViewportRoot(){return this._viewport;},getViewportRootOffset:function getViewportRootOffset(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0};},refresh:function refresh(){var t=this.storage.getDisplayList(!0);this._paintList(t);},setBackgroundColor:function setBackgroundColor(t){this._viewport.style.background=t;},_paintList:function _paintList(t){this.gradientManager.markAllUnused(),this.clipPathManager.markAllUnused(),this.shadowManager.markAllUnused();var e,i=this._svgRoot,n=this._visibleList,o=t.length,a=[];for(e=0;e<o;e++){var r=O_(f=t[e]),s=G_(f)||V_(f);f.invisible||(f.__dirty&&(r&&r.brush(f),this.clipPathManager.update(f),f.style&&(this.gradientManager.update(f.style.fill),this.gradientManager.update(f.style.stroke),this.shadowManager.update(s,f)),f.__dirty=!1),a.push(f));}var l,u=MR(n,a);for(e=0;e<u.length;e++){if((c=u[e]).removed)for(d=0;d<c.count;d++){var s=G_(f=n[c.indices[d]]),h=V_(f);B_(i,s),B_(i,h);}}for(e=0;e<u.length;e++){var c=u[e];if(c.added)for(d=0;d<c.count;d++){var s=G_(f=a[c.indices[d]]),h=V_(f);l?R_(i,s,l):z_(i,s),s?R_(i,h,s):l?R_(i,h,l):z_(i,h),R_(i,h,s),l=h||s||l,this.gradientManager.addWithoutUpdate(s,f),this.shadowManager.addWithoutUpdate(l,f),this.clipPathManager.markUsed(f);}else if(!c.removed)for(var d=0;d<c.count;d++){var f=a[c.indices[d]];l=s=V_(f)||G_(f)||l,this.gradientManager.markUsed(f),this.gradientManager.addWithoutUpdate(s,f),this.shadowManager.markUsed(f),this.shadowManager.addWithoutUpdate(s,f),this.clipPathManager.markUsed(f);}}this.gradientManager.removeUnused(),this.clipPathManager.removeUnused(),this.shadowManager.removeUnused(),this._visibleList=a;},_getDefs:function _getDefs(t){var e=this._svgRoot,i=this._svgRoot.getElementsByTagName("defs");return 0===i.length?t?((i=e.insertBefore(p_("defs"),e.firstChild)).contains||(i.contains=function(t){var e=i.children;if(!e)return!1;for(var n=e.length-1;n>=0;--n){if(e[n]===t)return!0;}return!1;}),i):null:i[0];},resize:function resize(t,e){var i=this._viewport;i.style.display="none";var n=this._opts;if(null!=t&&(n.width=t),null!=e&&(n.height=e),t=this._getSize(0),e=this._getSize(1),i.style.display="",this._width!==t||this._height!==e){this._width=t,this._height=e;var o=i.style;o.width=t+"px",o.height=e+"px";var a=this._svgRoot;a.setAttribute("width",t),a.setAttribute("height",e);}},getWidth:function getWidth(){return this._width;},getHeight:function getHeight(){return this._height;},_getSize:function _getSize(t){var e=this._opts,i=["width","height"][t],n=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var r=this.root,s=document.defaultView.getComputedStyle(r);return(r[n]||N_(s[i])||N_(r.style[i]))-(N_(s[o])||0)-(N_(s[a])||0)|0;},dispose:function dispose(){this.root.innerHTML="",this._svgRoot=this._viewport=this.storage=null;},clear:function clear(){this._viewport&&this.root.removeChild(this._viewport);},pathToDataUrl:function pathToDataUrl(){return this.refresh(),"data:image/svg+xml;charset=UTF-8,"+this._svgRoot.outerHTML;}},d(["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],function(t){IR.prototype[t]=F_(t);}),Ti("svg",IR),t.version="4.2.1",t.dependencies=ET,t.PRIORITY=VT,t.init=function(t,e,i){var n=ks(t);if(n)return n;var o=new us(t,e,i);return o.id="ec_"+iA++,tA[o.id]=o,Fi(t,oA,o.id),Cs(o),o;},t.connect=function(t){if(y(t)){var e=t;t=null,kT(e,function(e){null!=e.group&&(t=e.group);}),t=t||"g_"+nA++,kT(e,function(e){e.group=t;});}return eA[t]=!0,t;},t.disConnect=Ls,t.disconnect=aA,t.dispose=function(t){"string"==typeof t?t=tA[t]:t instanceof us||(t=ks(t)),t instanceof us&&!t.isDisposed()&&t.dispose();},t.getInstanceByDom=ks,t.getInstanceById=function(t){return tA[t];},t.registerTheme=Ps,t.registerPreprocessor=Ns,t.registerProcessor=Os,t.registerPostUpdate=function(t){KT.push(t);},t.registerAction=Es,t.registerCoordinateSystem=Rs,t.getCoordinateSystemDimensions=function(t){var e=Fa.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice();},t.registerLayout=zs,t.registerVisual=Bs,t.registerLoading=Gs,t.extendComponentModel=Fs,t.extendComponentView=Ws,t.extendSeriesModel=Hs,t.extendChartView=Zs,t.setCanvasCreator=function(t){e("createCanvas",t);},t.registerMap=function(t,e,i){DT.registerMap(t,e,i);},t.getMap=function(t){var e=DT.retrieveMap(t);return e&&e[0]&&{geoJson:e[0].geoJSON,specialAreas:e[0].specialAreas};},t.dataTool=rA,t.zrender=Hb,t.number=YM,t.format=eI,t.throttle=Pr,t.helper=tD,t.matrix=Sw,t.vector=cw,t.color=Ww,t.parseGeoJSON=iD,t.parseGeoJson=rD,t.util=sD,t.graphic=lD,t.List=vA,t.Model=No,t.Axis=aD,t.env=U_;});

/***/ }),

/***/ "../../../../work/hello-uniapp/components/mpvue-echarts/src/wx-canvas.js":
/*!**********************************************************************!*\
  !*** D:/work/hello-uniapp/components/mpvue-echarts/src/wx-canvas.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var WxCanvas = /*#__PURE__*/function () {
  function WxCanvas(ctx, canvasId) {_classCallCheck(this, WxCanvas);
    this.ctx = ctx;
    this.canvasId = canvasId;
    this.chart = null;

    WxCanvas.initStyle(ctx);
    this.initEvent();
  }_createClass(WxCanvas, [{ key: "getContext", value: function getContext(

    contextType) {
      return contextType === '2d' ? this.ctx : null;
    } }, { key: "setChart", value: function setChart(

    chart) {
      this.chart = chart;
    } }, { key: "attachEvent", value: function attachEvent()

    {
      // noop
    } }, { key: "detachEvent", value: function detachEvent()

    {
      // noop
    } }, { key: "initEvent", value: function initEvent()





















    {var _this = this;
      this.event = {};
      var eventNames = [{
        wxName: 'touchStart',
        ecName: 'mousedown' },
      {
        wxName: 'touchMove',
        ecName: 'mousemove' },
      {
        wxName: 'touchEnd',
        ecName: 'mouseup' },
      {
        wxName: 'touchEnd',
        ecName: 'click' }];


      eventNames.forEach(function (name) {
        _this.event[name.wxName] = function (e) {
          var touch = e.mp.touches[0];
          _this.chart._zr.handler.dispatch(name.ecName, {
            zrX: name.wxName === 'tap' ? touch.clientX : touch.x,
            zrY: name.wxName === 'tap' ? touch.clientY : touch.y });

        };
      });
    } }], [{ key: "initStyle", value: function initStyle(ctx) {var _arguments = arguments;var styles = ['fillStyle', 'strokeStyle', 'globalAlpha', 'textAlign', 'textBaseAlign', 'shadow', 'lineWidth', 'lineCap', 'lineJoin', 'lineDash', 'miterLimit', 'fontSize'];styles.forEach(function (style) {Object.defineProperty(ctx, style, { set: function set(value) {if (style !== 'fillStyle' && style !== 'strokeStyle' || value !== 'none' && value !== null) {ctx["set".concat(style.charAt(0).toUpperCase()).concat(style.slice(1))](value);}} });});ctx.createRadialGradient = function () {return ctx.createCircularGradient(_arguments);};} }]);return WxCanvas;}();exports.default = WxCanvas;

/***/ }),

/***/ "../../../../work/hello-uniapp/main.js":
/*!************************************!*\
  !*** D:/work/hello-uniapp/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ "../../../../work/hello-uniapp/pages.json");
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ "../../../../work/hello-uniapp/App.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createApp"]))

/***/ }),

/***/ "../../../../work/hello-uniapp/main.js?{\"page\":\"pages%2Findex%2Findex\"}":
/*!*********************************************************************!*\
  !*** D:/work/hello-uniapp/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../work/hello-uniapp/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index/index.vue */ "../../../../work/hello-uniapp/pages/index/index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../work/hello-uniapp/main.js?{\"page\":\"pages%2Freport%2Fdemo\"}":
/*!*********************************************************************!*\
  !*** D:/work/hello-uniapp/main.js?{"page":"pages%2Freport%2Fdemo"} ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../work/hello-uniapp/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _demo = _interopRequireDefault(__webpack_require__(/*! ./pages/report/demo.vue */ "../../../../work/hello-uniapp/pages/report/demo.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_demo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../work/hello-uniapp/pages.json":
/*!***************************************!*\
  !*** D:/work/hello-uniapp/pages.json ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createPage = createPage;exports.createComponent = createComponent;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SYNC_API_RE = /requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {params[_key - 1] = arguments[_key];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return api.apply(void 0, [options].concat(params));
    }
    return handlePromise(new Promise(function (resolve, reject) {
      api.apply(void 0, [Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      Promise.prototype.finally = function (callback) {
        var promise = this.constructor;
        return this.then(
        function (value) {return promise.resolve(callback()).then(function () {return value;});},
        function (reason) {return promise.resolve(callback()).then(function () {
            throw reason;
          });});

      };
    }));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var protocols = {};

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.includes(key)) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var returnValue = wx[options.name || methodName](arg1, arg2);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {args[_key2 - 1] = arguments[_key2];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = 'onLoad';
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
      return oldHook.apply(this, args);
    };
  }
  return MPPage(options);
};

var behavior = Behavior({
  created: function created() {
    initTriggerEvent(this);
  } });


Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (options.behaviors || (options.behaviors = [])).unshift(behavior);
  return MPComponent(options);
};

var MOCKS = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__', '__webviewId__'];

function initMocks(vm) {
  var mpInstance = vm.$mp[vm.mpType];
  MOCKS.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function initHooks(mpOptions, hooks) {
  hooks.forEach(function (hook) {
    mpOptions[hook] = function (args) {
      return this.$vm.__call_hook(hook, args);
    };
  });
}

function getData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function getProperties(props) {
  var properties = {
    vueSlots: { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } } };


  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }
        properties[key] = {
          type: PROP_TYPES.includes(opts.type) ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        properties[key] = {
          type: PROP_TYPES.includes(opts) ? opts : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  // TODO 又得兼容 mpvue 的 mp 对象
  event.mp = event;

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *'test'
                                                  */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          extraObj['$' + index] = vm.__get_value(dataPath);
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var eventOpts = (event.currentTarget || event.target).dataset.eventOpts;
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && eventType === type) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handler = _this.$vm[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          handler.apply(_this.$vm, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName));

        }
      });
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$mp[vm.mpType];
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

var hooks = [
'onHide',
'onError',
'onPageNotFound',
'onUniNViewMessage'];


function initVm(vm) {
  if (this.$vm) {// 百度竟然 onShow 在 onLaunch 之前？
    return;
  }
  {
    if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
      console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
    }
  }

  this.$vm = vm;

  this.$vm.$mp = {
    app: this };

}

function createApp(vm) {
  // 外部初始化时 Vue 还未初始化，放到 createApp 内部初始化 mixin
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        {// 头条的 selectComponent 竟然是异步的
          initRefs(this);
        }
        initMocks(this);
      }
    },
    created: function created() {// 处理 injections
      this.__init_injections(this);
      this.__init_provide(this);
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      initVm.call(this, vm);

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted');

      this.$vm.__call_hook('onLaunch', args);
    },
    onShow: function onShow(args) {
      initVm.call(this, vm);

      this.$vm.__call_hook('onShow', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks); // 延迟执行，因为 App 的注册在 main.js 之前，可能导致生命周期内 Vue 原型上开发者注册的属性无法访问

  App(appOptions);

  return vm;
}

function triggerLink(mpInstance, vueOptions) {
  mpInstance.triggerEvent('__l', mpInstance.$vm || vueOptions, {
    bubbles: true,
    composed: true });

}

function handleLink(event) {
  if (event.detail.$mp) {// vm
    if (!event.detail.$parent) {
      event.detail.$parent = this.$vm;
      event.detail.$parent.$children.push(event.detail);

      event.detail.$root = this.$vm.$root;
    }
  } else {// vueOptions
    if (!event.detail.parent) {
      event.detail.parent = this.$vm;
    }
  }
}

var hooks$1 = [
'onShow',
'onHide',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap',
'onBackPress',
'onNavigationBarButtonTap',
'onNavigationBarSearchInputChanged',
'onNavigationBarSearchInputConfirmed',
'onNavigationBarSearchInputClicked'];


function initVm$1(VueComponent) {// 百度的 onLoad 触发在 attached 之前
  if (this.$vm) {
    return;
  }

  this.$vm = new VueComponent({
    mpType: 'page',
    mpInstance: this });


  this.$vm.__call_hook('created');
  this.$vm.$mount();
}

function createPage(vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = _vue.default.extend(vueOptions);
  }
  var pageOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: getData(vueOptions, _vue.default.prototype),
    lifetimes: { // 当页面作为组件时
      attached: function attached() {
        initVm$1.call(this, VueComponent);
      },
      ready: function ready() {
        this.$vm.__call_hook('beforeMount');
        this.$vm._isMounted = true;
        this.$vm.__call_hook('mounted');
        this.$vm.__call_hook('onReady');
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    methods: { // 作为页面时
      onLoad: function onLoad(args) {
        initVm$1.call(this, VueComponent);
        this.$vm.$mp.query = args; // 又要兼容 mpvue
        this.$vm.__call_hook('onLoad', args); // 开发者可能会在 onLoad 时赋值，提前到 mount 之前
      },
      onUnload: function onUnload() {
        this.$vm.__call_hook('onUnload');
      },
      __e: handleEvent,
      __l: handleLink } };



  initHooks(pageOptions.methods, hooks$1);

  return Component(pageOptions);
}

function initVm$2(VueComponent) {
  if (this.$vm) {
    return;
  }

  var options = {
    mpType: 'component',
    mpInstance: this,
    propsData: this.properties };

  // 初始化 vue 实例
  this.$vm = new VueComponent(options);

  // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
  var vueSlots = this.properties.vueSlots;
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    this.$vm.$scopedSlots = this.$vm.$slots = $slots;
  }
  // 性能优先，mount 提前到 attached 中，保证组件首次渲染数据被合并
  // 导致与标准 Vue 的差异，data 和 computed 中不能使用$parent，provide等组件属性
  this.$vm.$mount();
}

function createComponent(vueOptions) {
  vueOptions = vueOptions.default || vueOptions;

  var properties = getProperties(vueOptions.props);

  var VueComponent = _vue.default.extend(vueOptions);

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: getData(vueOptions, _vue.default.prototype),
    properties: properties,
    lifetimes: {
      attached: function attached() {
        initVm$2.call(this, VueComponent);
      },
      ready: function ready() {
        initVm$2.call(this, VueComponent); // 目前发现部分情况小程序 attached 不触发
        triggerLink(this); // 处理 parent,children

        // 补充生命周期
        this.$vm.__call_hook('created');
        this.$vm.__call_hook('beforeMount');
        this.$vm._isMounted = true;
        this.$vm.__call_hook('mounted');
        this.$vm.__call_hook('onReady');
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __e: handleEvent,
      __l: handleLink } };



  return Component(componentOptions);
}

var uni = {};

if (typeof Proxy !== 'undefined') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (name === 'upx2px') {
        return upx2px;
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  uni.upx2px = upx2px;

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$mp && vm.$mp[vm.mpType]){
        return vm.$mp[vm.mpType].is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    // initInjections(vm) // resolve injections before data/props
    initState(vm);
    // initProvide(vm) // resolve provide after data/props
    // callHook(vm, 'created')

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function cloneWithData(vm) {
    // 确保当前 vm 所有数据被同步
    var dataKeys = [].concat(
        Object.keys(vm._data || {}),
        Object.keys(vm._computedWatchers || {}));

    var ret = dataKeys.reduce(function(ret, key) {
        ret[key] = vm[key];
        return ret
    }, Object.create(null));
    //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
    Object.assign(ret, vm.$mp.data || {});
    //remove observer
    return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
    if (vnode === null) { //destroy
        return
    }
    if (this.mpType === 'page' || this.mpType === 'component') {
        var mpInstance = this.$mp[this.mpType];
        var data = cloneWithData(this);
        data.__webviewId__ = mpInstance.data.__webviewId__;
        var mpData = Object.create(null);
        Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
            mpData[key] = mpInstance.data[key];
        });
        var diffData = diff(data, mpData);
        if (Object.keys(diffData).length) {
            if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
                console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
                    ']差量更新',
                    JSON.stringify(diffData));
            }
            mpInstance.setData(diffData,function(){
                //TODO
            });
        }
    }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
    var parts = path.split('.');
    var key = parts[0];
    if (key.indexOf('__$n') === 0) { //number index
        key = parseInt(key.replace('__$n', ''));
    }
    if (parts.length === 1) {
        return obj[key]
    }
    return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

    var oldEmit = Vue.prototype.$emit;

    Vue.prototype.$emit = function(event) {
        if (this.$mp && event) {
            this.$mp[this.mpType]['triggerEvent'](event, {
                __args__: toArray(arguments, 1)
            });
        }
        return oldEmit.apply(this, arguments)
    };

    MP_METHODS.forEach(function (method) {
        Vue.prototype[method] = function(args) {
            if (this.$mp) {
                return this.$mp[this.mpType][method](args)
            }
        };
    });

    Vue.prototype.__init_provide = initProvide;

    Vue.prototype.__init_injections = initInjections;

    Vue.prototype.__call_hook = function(hook, args) {
        var vm = this;
        // #7573 disable dep collection when invoking lifecycle hooks
        pushTarget();
        var handlers = vm.$options[hook];
        var info = hook + " hook";
        var ret;
        if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
                ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
            }
        }
        if (vm._hasHookEvent) {
            vm.$emit('hook:' + hook);
        }
        popTarget();
        return ret
    };

    Vue.prototype.__set_model = function(target, key, value, modifiers) {
        if (Array.isArray(modifiers)) {
            if (modifiers.includes('trim')) {
                value = value.trim();
            }
            if (modifiers.includes('number')) {
                value = this._n(value);
            }
        }
        target[key] = value;
    };

    Vue.prototype.__set_sync = function(target, key, value) {
        target[key] = value;
    };

    Vue.prototype.__get_orig = function(item) {
        if (isPlainObject(item)) {
            return item['$orig'] || item
        }
        return item
    };

    Vue.prototype.__get_value = function(dataPath, target) {
        return getTarget(target || this, dataPath)
    };


    Vue.prototype.__get_class = function(dynamicClass, staticClass) {
        return renderClass(staticClass, dynamicClass)
    };

    Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
        if (!dynamicStyle && !staticStyle) {
            return ''
        }
        var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
        var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
        return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
    };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.includes(methodName)) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map