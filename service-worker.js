!function(e){var c={};function t(n){if(c[n])return c[n].exports;var a=c[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=c,t.d=function(e,c,n){t.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,c){if(1&c&&(e=t(e)),8&c)return e;if(4&c&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var a in e)t.d(n,a,function(c){return e[c]}.bind(null,a));return n},t.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(c,"a",c),c},t.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},t.p="",t(t.s=0)}([function(e,c,t){"use strict";t.r(c);const n=["/client/20905748690b857be424745379654f5f.jpg","/client/267dba08db9eaaef6aea63c27f205100.png","/client/2c17e7f3dbdbc0dc65c2a2958cf47ff1.jpg","/client/302c26c4f883bbc39a5b0c2fd73f026a.jpg","/client/39d0a6e91d32f7007337265e0b0e8d3a.jpg","/client/3da99769177dd0b4628adfb453c51708.jpg","/client/495a176d303ee9c4785e5a5c9313f770.jpg","/client/4e4f7b7bb072022a9b53600f353a74bd.jpg","/client/5088cd0bb296d8544d593615f76b8bb9.jpg","/client/599407859e64819650668e0947a7ded2.svg","/client/6065c95893a75a592245e4311e171542.jpg","/client/a58d47cd74f0f117c12ad64b40bd7e91.svg","/client/a8b2c94480c9664d6f7d258c95bb2cfd.svg","/client/b20c92141fad61bc8967ba08a39db8c5.jpg","/client/b37a1616e1260cb14ff3b2443071ee50.jpg","/client/c10de42065c6d454038ee2f51d893e6c.jpg","/client/c9384ac2c7a72bf316dc/about.0.js","/client/c9384ac2c7a72bf316dc/blog.1.js","/client/c9384ac2c7a72bf316dc/blog_$slug.2.js","/client/c9384ac2c7a72bf316dc/index.3.js","/client/c9384ac2c7a72bf316dc/main.js","/client/da80a0fb61ded65091c763b974d4bb0d.svg","/client/f2c92d264ffa0472dca250f9b30a8d7b.jpg"].concat(["/service-worker-index.html","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/mstile-150x150.png","/site.webmanifest"]),a=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1610011419965").then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const c of e)"cache1610011419965"!==c&&await caches.delete(c);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url),t=c.protocol.startsWith("http"),n=c.hostname===self.location.hostname&&c.port!==self.location.port,i=c.host===self.location.host&&a.has(c.pathname),o="only-if-cached"===e.request.cache&&!i;!t||n||o||e.respondWith((async()=>i&&await caches.match(e.request)||async function(e){const c=await caches.open("offline1610011419965");try{const t=await fetch(e);return c.put(e,t.clone()),t}catch(t){const n=await c.match(e);if(n)return n;throw t}}(e.request))())})}]);