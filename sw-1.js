/* Asphalte City RP : service worker (alertes + installation) */
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{});
self.addEventListener("push",e=>{let d={};try{d=e.data?e.data.json():{}}catch(_){}
e.waitUntil(self.registration.showNotification(d.title||"Asphalte City RP",{body:d.body||"",icon:"icon-192.png",badge:"icon-192.png",tag:d.tag||"push",vibrate:[120,60,120]}))});
self.addEventListener("notificationclick",e=>{e.notification.close();
e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(l=>{for(const c of l){if("focus" in c)return c.focus()}return self.clients.openWindow("./")}))});
