(()=>{"use strict";var n={904:(n,e,t)=>{t.d(e,{c:()=>d});var r=t(500),o=t.n(r),c=t(312),i=t.n(c),a=t(536),s=t.n(a),l=new URL(t(32),t.b),u=i()(o()),p=s()(l);u.push([n.id,`@font-face {\n    font-family: unique;\n    src: url(${p});\n}\n\n* {\n    margin: 0;\n    padding: 0;\n};\n\nhtml {\n    height: 100vh;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2em;\n    align-content: center;\n    height: 100vh;\n}\n\n.info {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 25em;\n    height: 15em;\n    border: solid 3px rgba(0, 0, 255, 0.5);\n    align-self: center;\n}\n\n.location {\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: end;\n    align-self: center;\n}\n\n.name, .country {\n    font-size: 2em;\n    font-weight: bolder;\n    font-family: unique;\n    color: blue;\n    margin-bottom: 0;\n}\n\n.time {\n    font-size: 1em;\n    align-self: baseline;\n    color: blue;\n}\n\n.tempIcon {\n    display: flex;\n    height: 100%;\n    justify-content:space-around;\n    align-items: center;\n}\n\n.temp, .condition {\n    flex: 0 1 auto;\n    align-self: center;\n}\n\n.condition {\n    width: 10em;\n    text-align: center;\n    border-left: inset 2px rgb(0, 0, 0, 0.25);\n    margin-left: 10px;\n    padding-left: 10px;\n}\n\n.icon img{\n    height: 10em;\n}\n\n.submit {\n    width: 25em;\n    height: 7em;\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\n.search {\n    display: block;\n    align-self: center;\n}\n\n.searchButton {\n    width: fit-content;\n    align-self: center;\n    border: none;\n    font-size: 1em;\n    background-color: white;\n    cursor: pointer;\n    margin-top: 10px;\n}\n\n.text {\n    font-weight: bold;\n    color: blue;\n}\n\n.tempC, .tempF {\n    width: 3em;\n    text-align: center;\n    font-size: 3em;\n}\n\n.tempC {\n    border-bottom: inset 2px rgb(0, 0, 0, 0.25);\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n}`,""]);const d=u},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,c){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},536:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var c={},i=[],a=0;a<n.length;a++){var s=n[a],l=r.base?s[0]+r.base:s[0],u=c[l]||0,p="".concat(l," ").concat(u);c[l]=u+1;var d=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var m=o(f,r);r.byIndex=a,e.splice(a,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var c=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<c.length;i++){var a=t(c[i]);e[a].references--}for(var s=r(n,o),l=0;l<c.length;l++){var u=t(c[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}c=s}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},32:(n,e,t)=>{n.exports=t.p+"cf56c1b149d0a5e8d7c6.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var c=e[r]={id:r,exports:{}};return n[r](c,c.exports,t),c.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(596),e=t.n(n),r=t(520),o=t.n(r),c=t(176),i=t.n(c),a=t(120),s=t.n(a),l=t(808),u=t.n(l),p=t(936),d=t.n(p),f=t(904),m={};m.styleTagTransform=d(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(f.c,m),f.c&&f.c.locals&&f.c.locals;const h=document.querySelector(".name"),g=document.querySelector(".time"),y=document.createElement("img"),v=document.querySelector(".icon"),b=document.querySelector(".text"),x=document.querySelector(".tempC"),w=document.querySelector(".tempF"),S=document.querySelector("#searchLocation"),C=document.querySelector("#location"),j=async n=>{const e=await async function(n="tampere"){try{const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=71166ee9ea884589b83200410240202&q=${n}`,{mode:"cors"}),t=fetch(`https://api.weatherapi.com/v1/forecast.json?key=71166ee9ea884589b83200410240202&q=${n}`,{mode:"cors"}),r=await e.json(),o=(await t).json();return console.log(o),function(n){const e={};return e.name=n.location.name,e.country=n.location.country,e.temp_c=n.current.temp_c,e.temp_f=n.current.temp_f,e.icon=n.current.condition.icon,e.condition=n.current.condition.text,e.time=n.current.last_updated,e}(r)}catch(n){return console.log(n),null}}(n);y.src=e.icon,h.textContent=`${e.name}, ${e.country}`,g.innerHTML=e.time,y.src=e.icon,x.textContent=`${e.temp_c} C`,w.textContent=`${e.temp_f} F`,b.textContent=e.condition,v.append(y)};S.addEventListener("submit",(n=>{n.preventDefault();const e=C.value;S.reset(),j(e)})),j()})()})();