console.log('service worker');

const CACHE_NAME = '1';
const urlsToCache = [
    '/api/game-init',
    '/api/game-results',
];
// caches.open(CACHE_NAME).

// localStorage
self.addEventListener('install', (event) => {
    const promise = fetch('/json/game.init.request.1.opponent.json');
    promise
        .then(() => {console.log(arguments)})
        .catch(e => {console.log(e)});
    // if (xobj.readyState == 4 && xobj.status == "200") {

    // .open will NOT return a value but simply returns undefined in async mode so use a callback
    // callback(xobj.responseText);
    // const obj = JSON.parse(xobj.responseText);
    console.log(promise);
    // }
    // }
    // xobj.send(null);

    // Perform install steps
    // event.waitUntil(
    //     caches.open(CACHE_NAME)
    //         .then(function (cache) {
    //             console.log('Opened cache');
    //
    //             return cache.addAll(urlsToCache);
    //         })
    // );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                    console.log(response)
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
