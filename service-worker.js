!function(e){var t={};function c(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=t,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=0)}([function(e,t,c){"use strict";c.r(t);const n=["/client/20905748690b857be424745379654f5f.jpg","/client/267dba08db9eaaef6aea63c27f205100.png","/client/2c17e7f3dbdbc0dc65c2a2958cf47ff1.jpg","/client/302c26c4f883bbc39a5b0c2fd73f026a.jpg","/client/39d0a6e91d32f7007337265e0b0e8d3a.jpg","/client/3da99769177dd0b4628adfb453c51708.jpg","/client/495a176d303ee9c4785e5a5c9313f770.jpg","/client/4e4f7b7bb072022a9b53600f353a74bd.jpg","/client/5088cd0bb296d8544d593615f76b8bb9.jpg","/client/599407859e64819650668e0947a7ded2.svg","/client/6065c95893a75a592245e4311e171542.jpg","/client/a15833c78374821b11c6/about.0.js","/client/a15833c78374821b11c6/blog.1.js","/client/a15833c78374821b11c6/blog_$slug.2.js","/client/a15833c78374821b11c6/index.3.js","/client/a15833c78374821b11c6/main.js","/client/a58d47cd74f0f117c12ad64b40bd7e91.svg","/client/a8b2c94480c9664d6f7d258c95bb2cfd.svg","/client/b20c92141fad61bc8967ba08a39db8c5.jpg","/client/b37a1616e1260cb14ff3b2443071ee50.jpg","/client/c10de42065c6d454038ee2f51d893e6c.jpg","/client/da80a0fb61ded65091c763b974d4bb0d.svg","/client/f2c92d264ffa0472dca250f9b30a8d7b.jpg"].concat(["/service-worker-index.html","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/mstile-150x150.png","/site.webmanifest"]),a=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1610002615717").then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1610002615717"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),c=t.protocol.startsWith("http"),n=t.hostname===self.location.hostname&&t.port!==self.location.port,i=t.host===self.location.host&&a.has(t.pathname),o="only-if-cached"===e.request.cache&&!i;!c||n||o||e.respondWith((async()=>i&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1610002615717");try{const c=await fetch(e);return t.put(e,c.clone()),c}catch(c){const n=await t.match(e);if(n)return n;throw c}}(e.request))())})}]);