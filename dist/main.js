!function(n){var t={};function e(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(i,o,function(t){return n[t]}.bind(null,o));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=5)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",i=n[3];if(!i)return e;if(t&&"function"==typeof btoa){var o=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[e].concat(r).concat([o]).join("\n")}var a,s,l;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,i){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);i&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},function(n,t,e){var i=e(2),o=e(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);n.exports=o.locals||{}},function(n,t,e){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function s(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function l(n,t){for(var e={},i=[],o=0;o<n.length;o++){var r=n[o],l=t.base?r[0]+t.base:r[0],c=e[l]||0,d="".concat(l," ").concat(c);e[l]=c+1;var u=s(d),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:v(p,t),references:1}),i.push(d)}return i}function c(n){var t=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var o=e.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(n){t.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(t);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(n,t){return d[n]=t,d.filter(Boolean).join("\n")});function p(n,t,e,i){var o=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=u(t,o);else{var r=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(r,a[t]):n.appendChild(r)}}function f(n,t,e){var i=e.css,o=e.media,r=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var h=null,y=0;function v(n,t){var e,i,o;if(t.singleton){var r=y++;e=h||(h=c(t)),i=p.bind(null,e,r,!1),o=p.bind(null,e,r,!0)}else e=c(t),i=f.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=l(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<e.length;i++){var o=s(e[i]);a[o].references--}for(var r=l(n,t),c=0;c<e.length;c++){var d=s(e[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}e=r}}}},function(n,t,e){"use strict";e.r(t);var i=e(0),o=e.n(i)()(!1);o.push([n.i,"* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgb(48, 47, 47);\n}\n\n#topNav {\n  position: absolute;\n  height: 10%;\n  width: 100vw;\n}\n#navSystemContainer {\n  position: absolute;\n  display: inline-block;\n  height: 2.2rem;\n  width: 80%;\n  max-width: 450px;\n  min-width: 250px;\n  margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n}\n#dropDown {\n  position: relative;\n  display: block;\n  height: 2rem;\n  width: 2rem;\n  border: 2px solid rgb(72, 70, 70);\n  border-radius: 25px;\n  background: white;\n  opacity: 60%;\n  transition: opacity 100ms linear;\n  transition: all 200ms ease-in-out;\n}\n#dropDown:hover {\n  opacity: 100%;\n  cursor: pointer;\n}\n\n#icon {\n  position: relative;\n  left: 7%;\n  top: 7%;\n}\n\n#extended {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  width: 74%;\n  min-width: 280px;\n  height: 2rem;\n  left: 2.5rem;\n  bottom: 2.1rem;\n  border: 2px solid rgb(72, 70, 70);\n  border-radius: 8px;\n  opacity: 0%;\n  transition: opacity 100ms ease-in;\n  text-align: center;\n}\n#about {\n  border-right-style: none;\n}\n.DDtext {\n    margin-top: 4%;\n    font-family: 'Alata', sans-serif;\n}\n.extendedItems {\n  width: 33.33%;\n  height: 100%;\n  border-right: 2px solid rgb(72, 70, 70);\n  background: #d7dee6;\n  opacity: 60%;\n  transition: opacity 100ms linear;\n}\n.extendedItems:hover {\n    opacity: 95%;\n    cursor: pointer;\n}\n\n#backDrop {\n  position: relative;\n  height: 80vh;\n  width: 80vw;\n  margin: 0 auto;\n  top: 10%;\n  max-width: 1200px;\n  max-height: 800px;\n  min-width: 850px;\n  margin-top: 10vh;\n}\n\n#frame {\n  position: relative;\n  height: 70%;\n  width: 80%;\n  margin: 0 auto;\n  top: 15%;\n}\n.slide {\n  position: absolute;\n  top: 5%;\n  height: 90%;\n  width: 80%;\n  left: 10%;\n  transition: none;\n  opacity: 0;\n}\n.slideImage {\n  position: relative;\n  max-height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n.outGoingSlide {\n  visibility: hidden;\n  transform: translate(-400px);\n  opacity: 0;\n}\n.inComingSlide {\n  visibility: visible;\n  /* transform: translate(); */\n  opacity: 1;\n}\n\n#controls {\n  position: relative;\n  height: 19%;\n  width: 100%;\n  bottom: 30%;\n}\n\n#nav {\n  position: absolute;\n  width: 45%;\n  height: 5%;\n  left: 27.5%;\n  right: 27.5%;\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: center;\n  visibility: hidden;\n}\n.navButtons {\n  height: 16px;\n  width: 16px;\n  border-radius: 35px;\n  border: 1px solid #242424;\n  transition: ease-in 0.2s;\n  margin: 0 0.2vw;\n  cursor: pointer;\n}\n.navButtons:hover {\n  border: 1px solid aqua;\n}\n.navButtons:active {\n  background: aqua;\n}\n\n.arrows {\n  opacity: 60%;\n  position: relative;\n  height: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  transition: 0.35s;\n}\n.arrows:hover {\n  opacity: 100%;\n  cursor: pointer;\n}\n\n#leftArrow {\n  position: relative;\n  height: 100%;\n  width: 10%;\n  float: left;\n}\n\n#rightArrow {\n  position: relative;\n  height: 100%;\n  width: 10%;\n  float: right;\n}\n",""]),t.default=o},function(n,t){let e=document.getElementById("dropDown"),i=document.getElementById("extended");document.getElementById("icon");function o(n,t){n.style=`transform: rotate(${t}deg);`,console.log("test")}e.addEventListener("click",(function(){var n;1==(n=i).style.opacity?(n.style="opacity: 0%;",o(e,90)):(n.style="opacity: 100%;",o(e,45))}))},function(n,t,e){"use strict";e.r(t);e(1),e(4);let i,o,r=0,a=document.getElementById("rightArrow"),s=document.getElementById("leftArrow"),l=document.getElementById("frame").getElementsByTagName("div"),c=l.length-1;function d(){r=0}function u(){r++}function p(n){r=n}function f(n){i=n.id.replace(/-/g,"_"),o=Array.from(v),o.forEach(n=>{i==n.id?n.style="background: aqua":i!=n.id?n.style="background: grey":console.log("failed")})}function h(){nav.style="visibility: visible",r>=l.length-1?(l[r].style="visibility: hidden; transition: .5s ease-out; transform:translate(-400px); opacity: 0;",d(),l[r].style="visibility: visible; transition: opacity .5s; opacity: 1;",f(l[r])):(l[r].style="visibility: hidden; transition: .5s ease-out; transform:translate(-400px); opacity: 0;",u(),l[r].style="visibility: visible; transition: opacity .5s; opacity: 1;",f(l[r])),console.log(r)}let y=Array.from(l).map(n=>n.id),v=document.getElementsByClassName("navButtons"),m=document.getElementById("nav"),g=[];y.forEach((n,t)=>{(n=document.createElement("div")).className="navButtons",n.id=y[t].replace(/-/g,"_"),g.push(n),n.addEventListener("click",()=>{console.log(g.indexOf(n)),l[r].style="visibility: hidden; transition: .5s ease-out; opacity: 0",p(g.indexOf(n)),l[r].style="visibility: visible; transition: opacity .5s; opacity: 1;",f(l[r])}),m.appendChild(n)}),l[r].style="visibility: visible; opacity: 1;",a.addEventListener("click",h),s.addEventListener("click",(function(){nav.style="visibility: visible",r>=l.length?(l[c].style="visibility: hidden; transition: .5s ease-out; transform:translate(400px); opacity: 0;",d()):0==r?(l[r].style="visibility: hidden; transition: .5s ease-out; transform:translate(400px); opacity: 0;",p(c),l[r].style="visibility: visible; transition: opacity .5s; opacity: 1;",f(l[r])):(l[r].style="visibility: hidden; transition: .5s ease-out; transform:translate(400px); opacity: 0;",r--,l[r].style="visibility: visible; transition: opacity .5s; opacity: 1;",f(l[r]))})),function n(){h(),setTimeout(n,5e3)}()}]);