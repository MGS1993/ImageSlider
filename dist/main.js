!function(n){var t={};function e(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(i,o,function(t){return n[t]}.bind(null,o));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",i=n[3];if(!i)return e;if(t&&"function"==typeof btoa){var o=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[e].concat(r).concat([o]).join("\n")}var a,s,c;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,i){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);i&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},function(n,t,e){var i=e(2),o=e(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);n.exports=o.locals||{}},function(n,t,e){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function s(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function c(n,t){for(var e={},i=[],o=0;o<n.length;o++){var r=n[o],c=t.base?r[0]+t.base:r[0],l=e[c]||0,u="".concat(c," ").concat(l);e[c]=l+1;var d=s(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:y(f,t),references:1}),i.push(u)}return i}function l(n){var t=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var o=e.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(n){t.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(t);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function f(n,t,e,i){var o=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=d(t,o);else{var r=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(r,a[t]):n.appendChild(r)}}function p(n,t,e){var i=e.css,o=e.media,r=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var v=null,h=0;function y(n,t){var e,i,o;if(t.singleton){var r=h++;e=v||(v=l(t)),i=f.bind(null,e,r,!1),o=f.bind(null,e,r,!0)}else e=l(t),i=p.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=c(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<e.length;i++){var o=s(e[i]);a[o].references--}for(var r=c(n,t),l=0;l<e.length;l++){var u=s(e[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=r}}}},function(n,t,e){"use strict";e.r(t);var i=e(0),o=e.n(i)()(!1);o.push([n.i,"* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgb(48, 47, 47);\n}\n\n#backDrop {\n    position: relative;\n    height: 80vh;\n    width: 80vw;\n    margin: 0 auto;\n    top: 10%;\n}\n\n#frame {\n    position: relative;\n    height: 70%;\n    width: 80%;\n    margin: 0 auto;\n    top: 15%;\n}\n    .slide {\n        position: absolute;\n        top: 5%;\n        height: 90%;\n        width: 80%;\n        left: 10%;\n        transition: none;\n        opacity: 0;\n        \n        \n    }\n    .slideImage {\n        position: relative;\n        max-height: 100%;\n        margin-left: auto;\n        margin-right: auto;\n        display: block;\n    }\n    .outGoingSlide {\n        visibility: hidden;\n        transform:translate(-400px);\n        opacity: 0;\n    }\n    .inComingSlide {\n        visibility: visible;\n        /* transform: translate(); */\n        opacity: 1;\n    }\n    \n#controls {\n    position: relative;\n    height: 19%;\n    width: 100%;\n    bottom: 30%;\n}\n\n#nav {\n    position: relative;\n    width: 70%;\n    height: 15%;\n    top: 100%;\n    margin: 0 auto;\n}\n\n.arrows {\n    opacity: 60%;\n    position: relative;\n    height: 100%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    transition: 0.35s;\n}\n    .arrows:hover {\n        opacity: 100%;\n        \n    }\n\n#leftArrow {\n    position: relative;\n    height: 100%;\n    width: 10%;\n    float: left;\n}\n    \n#rightArrow {\n    position: relative;\n    height: 100%;\n    width: 10%;\n    float: right;\n}\n\n   ",""]),t.default=o},function(n,t,e){"use strict";e.r(t);e(1);let i=0,o=document.getElementById("rightArrow"),r=document.getElementById("leftArrow"),a=document.getElementById("frame").getElementsByTagName("div"),s=a.length-1;function c(){i=0}function l(){i++}a[i].style="visibility: visible; opacity: 1;",o.addEventListener("click",(function(){i>=a.length-1?(a[i].style="visibility: hidden; transition: .5s ease-out; transform:translate(-400px); opacity: 0;",c(),a[i].style="visibility: visible; transition: opacity .5s; opacity: 1;"):0==i?(a[i].style="visibility: hidden; transition: .5s ease-out; transform:translate(-400px); opacity: 0;",l(),a[i].style="visibility: visible; transition: opacity .5s; opacity: 1;",console.log("test")):(a[i].style="visibility: hidden; transition: .5s ease-out; transform:translate(-400px); opacity: 0;",l(),a[i].style="visibility: visible; transition: opacity .5s; opacity: 1;")})),r.addEventListener("click",(function(){i>=a.length?(a[s].style="display: none",c()):0==i?(a[i].style="display: none",i=s,a[i].style="display: block"):(a[i].style="display: none",i--,a[i].style="display: block")}))}]);