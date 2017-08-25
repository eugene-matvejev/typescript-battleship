console.log('service worker');

const CACHE_NAME = '1';
const urlsToCache = [
    '/api/game-init',
    '/api/game-results',
];

self.addEventListener('install', (event) => {
});
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                    console.log(response)

                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
