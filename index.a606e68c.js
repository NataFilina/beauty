!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o.register("8slrw",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return t}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("ifqQW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return n.default(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(t,e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}}));var i={};function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(t,e){return u.default(t)||s.default(t,e)||d.default(t,e)||l.default()};var u=f(o("8slrw")),s=f(o("7AJDX")),l=f(o("ifqQW")),d=f(o("auk6i"));function f(t){return t&&t.__esModule?t:{default:t}}var h={},p=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=d;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",y={};function v(){}function m(){}function g(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(I([])));_&&_!==r&&n.call(_,i)&&(b=_);var x=g.prototype=v.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(d).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function I(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(h);try{regeneratorRuntime=p}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=p:Function("r","regeneratorRuntime = r")(p)}var y,v="https://673c7b8396b8dcd5f3fa3fd7.mockapi.io/beauty",m=document.querySelector(".booking_calendar_container"),g=document.querySelector(".booking_container_btns"),b=document.getElementById("calendar-table"),w=document.getElementById("modal"),_=document.getElementById("booking-form"),x=document.getElementById("name-input"),E=document.getElementById("phone-input"),L=document.getElementById("prev-week"),k=document.getElementById("next-week"),O=document.getElementById("modal_btn"),S=document.getElementById("modal_masters"),j=document.querySelectorAll(".btn_booking"),I=document.getElementById("booking_btn_masters"),P=document.getElementById("modal_masters_select"),T=document.querySelector(".booking_btn_arr_s"),D=document.querySelector(".booking_btn_arr_m"),C=document.getElementById("booking_btn_services"),A=(document.querySelector(".booking_container_btns_top"),document.getElementById("modal_price")),M=new Date,B=[],N=null,q=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"],G=["Манікюр/педикюр","Макіяж","Брови/Вії"];function F(t){return t.toISOString().split("T")[0]}function R(){return U.apply(this,arguments)}function U(){return(U=t(i)(t(h).mark((function e(){var r;return t(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(v);case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("Помилка завантаження даних по бронювання");case 6:return t.next=8,r.json();case 8:B=t.sent,Q(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error("Помилка:",t.t0);case 15:case"end":return t.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function J(){O.style.display="flex"}function H(){w.classList.remove("active"),S.classList.remove("active"),A.classList.remove("active"),N=null,O.style.display="none",D.classList.remove("booking_btn_arr_down"),T.classList.remove("booking_btn_arr_down")}function Q(){var t=new Date,e=function(t){for(var e=[],r=0;r<7;r++){var n=new Date(t);n.setDate(n.getDate()+r),e.push(n)}return e}(M),r=t.toTimeString().slice(0,5);M<=t?L.classList.add("hidden"):L.classList.remove("hidden"),b.innerHTML="";var n=document.createElement("tr");n.innerHTML="\n    <th></th>\n    ".concat(e.map((function(t){return"<th>".concat(t.toLocaleDateString("uk-UA",{month:"short",day:"2-digit",weekday:"short"}),"</th>")})).join("").toUpperCase(),"\n  "),n.classList.add("headerRowContent"),b.appendChild(n),q.forEach((function(n){var o=document.createElement("tr"),i=document.createElement("td");i.textContent=n,i.classList.add("timeCellTime"),o.appendChild(i),e.forEach((function(e){var i="".concat(F(e)," ").concat(n),a=document.createElement("td"),c=e.toDateString()===t.toDateString();e<t&&c&&n<=r?(a.classList.add("disabled"),a.textContent=""):G.forEach((function(t){var r=function(t,e,r){return B.some((function(n){return n.date===t&&n.time===e&&n.service===r}))}(F(e),n,t),o=document.createElement("button");o.textContent=t,o.disabled=r,o.classList.add("calendarServisesContent"),r&&o.classList.add("disabled"),o.addEventListener("click",(function(){return function(t,e){N={key:t,service:e},w.classList.add("active")}(i,t)})),a.appendChild(o)})),o.appendChild(a)})),b.appendChild(o)}))}function W(){switch(S.classList.add("active"),P.options[P.selectedIndex].text){case"Анна":G=["Манікюр/педикюр"],m.style.height="400px",g.style.height="400px";break;case"Ольга":G=["Брови/Вії"],m.style.height="290px",g.style.height="290px";break;case"Марія":G=["Макіяж"],m.style.height="290px",g.style.height="290px";break;default:G=["Манікюр/педикюр","Макіяж","Брови/Вії"],m.style.height="790px",g.style.height="790px"}Q()}C.addEventListener("click",(function(){A.classList.add("active"),T.classList.add("booking_btn_arr_down")})),I.addEventListener("click",W),j.forEach((function(t){t.addEventListener("click",J)})),document.querySelectorAll(".close-btn").forEach((function(t){t.addEventListener("click",H)})),window.addEventListener("click",(function(t){t.target!==w&&t.target!==O&&t.target!==S&&t.target!==A||H()})),P.addEventListener("change",W),I.addEventListener("click",(function(){D.classList.add("booking_btn_arr_down")})),_.addEventListener("submit",(y=t(i)(t(h).mark((function e(r){var n,o,i,a,u,s,l;return t(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),N){e.next=4;break}return alert("Дані про бронювання відсутні. Спробуйте знову."),e.abrupt("return");case 4:return n=x.value,o=E.value,i=t(c)(N.key.split(" "),2),a=i[0],u=i[1],s={date:a,time:u,service:N.service,name:n,phone:o},e.prev=8,e.next=11,fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 11:if(!(l=e.sent).ok){e.next=25;break}return e.t0=B,e.next=16,l.json();case 16:e.t1=e.sent,e.t0.push.call(e.t0,e.t1),H(),x.value="",E.value="",Q(),alert("Бронювання підтверджено на ".concat(a," ").concat(u," (").concat(N.service,").")),e.next=26;break;case 25:alert("Помилка при бронюванні.");case 26:e.next=31;break;case 28:e.prev=28,e.t2=e.catch(8),console.error("Помилка мережі:",e.t2);case 31:case"end":return e.stop()}}),e,null,[[8,28]])}))),function(t){return y.apply(this,arguments)})),k.addEventListener("click",(function(){M.setDate(M.getDate()+7),R()})),L.addEventListener("click",(function(){M.setDate(M.getDate()-7),R()})),R()}();
//# sourceMappingURL=index.a606e68c.js.map
