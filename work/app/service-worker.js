importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
if (workbox) {
    console.log('[ PWA Fire Bundle ] Hello from Workbox');

    /* change strategy method to fit your pwa needs,
      update RegExp dir/route and cache name */
    workbox.routing.registerRoute(
        new RegExp('./'),
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'app',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200],
                }),
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 60 * 60 * 24 * 1,
                }),
            ],
        })
    );

    /* cache the primer css for a week */
    workbox.routing.registerRoute(
        'https://unpkg.com/primer/build/build.css',
        new workbox.strategies.CacheFirst({
            cacheName: 'primer',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200],
                }),
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 60 * 60 * 24 * 7,
                }),
            ],
        })
    );

    workbox.core.skipWaiting();
    workbox.core.clientsClaim();
} else {
    console.log('Boo! Workbox failed to load 😬');
}