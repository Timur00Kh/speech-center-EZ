!function(e){var t={};function n(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(c,a,function(t){return e[t]}.bind(null,a));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const c=["/client/20905748690b857be424745379654f5f.jpg","/client/267dba08db9eaaef6aea63c27f205100.png","/client/2c17e7f3dbdbc0dc65c2a2958cf47ff1.jpg","/client/302c26c4f883bbc39a5b0c2fd73f026a.jpg","/client/39d0a6e91d32f7007337265e0b0e8d3a.jpg","/client/3da99769177dd0b4628adfb453c51708.jpg","/client/495a176d303ee9c4785e5a5c9313f770.jpg","/client/4e4f7b7bb072022a9b53600f353a74bd.jpg","/client/5088cd0bb296d8544d593615f76b8bb9.jpg","/client/6065c95893a75a592245e4311e171542.jpg","/client/b20c92141fad61bc8967ba08a39db8c5.jpg","/client/b37a1616e1260cb14ff3b2443071ee50.jpg","/client/c10de42065c6d454038ee2f51d893e6c.jpg","/client/c4de7f68b004d450b19f/about.0.js","/client/c4de7f68b004d450b19f/blog.1.js","/client/c4de7f68b004d450b19f/blog_$slug.2.js","/client/c4de7f68b004d450b19f/index.3.js","/client/c4de7f68b004d450b19f/main.js","/client/f2c92d264ffa0472dca250f9b30a8d7b.jpg"].concat(["/service-worker-index.html","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/mstile-150x150.png","/site.webmanifest"]),a=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1609988309594").then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1609988309594"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),n=t.protocol.startsWith("http"),c=t.hostname===self.location.hostname&&t.port!==self.location.port,o=t.host===self.location.host&&a.has(t.pathname),i="only-if-cached"===e.request.cache&&!o;!n||c||i||e.respondWith((async()=>o&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1609988309594");try{const n=await fetch(e);return t.put(e,n.clone()),n}catch(n){const c=await t.match(e);if(c)return c;throw n}}(e.request))())})}]);