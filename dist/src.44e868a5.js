parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SRhW":[function(require,module,exports) {
var e=document.querySelector(".slider"),t=document.querySelectorAll(".slider img"),s=document.querySelector(".right"),n=document.querySelector(".ex1"),r=document.querySelector(".ex2"),a=document.querySelector(".ex3"),i=document.querySelector(".activeX"),o=document.querySelector(".arrowOne"),c=document.querySelector(".arrowTwo"),l=1,d=s.clientWidth,m=window.matchMedia("(max-width: 900px)");function u(e){2===l?(r.classList.add("activeX"),n.classList.remove("activeX"),a.classList.remove("activeX")):3===l||0===l?(n.classList.remove("activeX"),a.classList.add("activeX"),r.classList.remove("activeX")):4!==l&&1!==l||(a.classList.remove("activeX"),r.classList.remove("activeX"),n.classList.add("activeX"))}m.matches,e.style.transform="translateX("+-d*l+"px)",c.addEventListener("click",function(){l>=t.length-1||(e.style.transition="transform 0.4s ease-in-out",l++,e.style.transform="translateX("+-d*l+"px)",u(l))}),o.addEventListener("click",function(){l<=0||(e.style.transition="transform 0.4s ease-in-out",l--,e.style.transform="translateX("+-d*l+"px)",u(l))}),e.addEventListener("transitionend",function(){"lastClone"===t[l].id&&(e.style.transition="none",l=t.length-2,e.style.transform="translateX("+-d*l+"px)"),"firstClone"===t[l].id&&(e.style.transition="none",l=t.length-l,e.style.transform="translateX("+-d*l+"px)")});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./js/homePage");
},{"./js/homePage":"SRhW"}]},{},["Focm"], null)
//# sourceMappingURL=/src.44e868a5.js.map