importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

const { assets } = global.serviceWorkerOption

if(workbox){
    console.log(assets)
    workbox.precaching.precacheAndRoute([
        { url: "./", revison: '1' },
        { url: assets[0], revison: '1' },
        { url: assets[1], revison: '1' },
        { url: assets[2], revison: '1' },
        { url: assets[3], revison: '1' },
        { url: assets[4], revison: '1' },
        { url: assets[5], revison: '1' },
        { url: assets[6], revison: '1' },
        { url: assets[7], revison: '1' },
        { url: assets[8], revison: '1' },
        { url: assets[9], revison: '1' },
        { url: assets[10], revison: '1' },
        { url: assets[11], revison: '1' },
        { url: assets[12], revison: '1' },
        { url: "/public/manifest.0b4067a2a715bde8ffd26e69d7820e1d.json", revison: '1' },
    ])

    workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/v2'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'EndpointCache'
        })
    )

    workbox.routing.registerRoute(
        /.*(?:png|gif|jpg|jpeg|svg)$/,
        workbox.strategies.cacheFirst({
            cacheName: 'imageCache',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200]
                }),
                new workbox.expiration.Plugin({
                    maxEntries: 100,
                    maxAgeSeconds: 30 * 24 * 60 * 60,
                }),
            ]
        })
    )

}else{
    console.log('workbox gagal')
}

self.addEventListener('push', event => {
    let body;
    if (event.data) {
        body = event.data.text()
    }else{
        body = "push message no payload"
    }

    let opt ={
        body,
        icon : 'public/assets/icon-512.png',
        vibrate : [100,50,100],
        data : {
            dateOfArrival : Date.now(),
            primaryKey : 1
        }
    }

    event.waitUntil(
        self.registration.showNotification('Push notification',opt)
    )
})