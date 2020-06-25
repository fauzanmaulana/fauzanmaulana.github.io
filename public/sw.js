var serviceWorkerOption = {
  "assets": [
    "/assets/icon-192.png",
    "/assets/icon-384.png",
    "/assets/icon-512.png",
    "/assets/landing.png",
    "/assets/like.png",
    "/assets/trash.png",
    "/bundle.js",
    "/index.html",
    "/home.html",
    "/matches.html",
    "/standings.html",
    "/liked.html",
    "/likedDetail.html"
  ]
};
        
        !function(e){var o={};function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,o,t){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)r.d(t,n,function(o){return e[o]}.bind(null,n));return t},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="",r(r.s=0)}([function(e,o,r){(function(e){importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");var o=e.serviceWorkerOption.assets;workbox?(console.log(o),workbox.precaching.precacheAndRoute([{url:"./",revison:"1"},{url:o[0],revison:"1"},{url:o[1],revison:"1"},{url:o[2],revison:"1"},{url:o[3],revison:"1"},{url:o[4],revison:"1"},{url:o[5],revison:"1"},{url:o[6],revison:"1"},{url:o[7],revison:"1"},{url:o[8],revison:"1"},{url:o[9],revison:"1"},{url:o[10],revison:"1"},{url:o[11],revison:"1"},{url:o[12],revison:"1"},{url:"/public/manifest.0b4067a2a715bde8ffd26e69d7820e1d.json",revison:"1"}]),workbox.routing.registerRoute(new RegExp("https://api.football-data.org/v2"),workbox.strategies.staleWhileRevalidate({cacheName:"EndpointCache"})),workbox.routing.registerRoute(/.*(?:png|gif|jpg|jpeg|svg)$/,workbox.strategies.cacheFirst({cacheName:"imageCache",plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]}),new workbox.expiration.Plugin({maxEntries:100,maxAgeSeconds:2592e3})]}))):console.log("workbox gagal"),self.addEventListener("push",(function(e){var o={body:e.data?e.data.text():"push message no payload",icon:"public/assets/icon-512.png",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}};e.waitUntil(self.registration.showNotification("Push notification",o))}))}).call(this,r(1))},function(e,o){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(t=window)}e.exports=t}]);