if ('serviceWorker' in navigator) {
    // Override the default scope of '/' with './', so that the registration applies
    // to the current directory and everything underneath it.
    navigator.serviceWorker.register('/service-worker-api-faker.js', {scope: './'}).then(function (registration) {
        // At this point, registration has taken place.
        // The service worker will not handle requests until this page and any
        // other instances of this page (in other tabs, etc.) have been
        // closed/reloaded.
        // document.querySelector('#status').textContent = 'succeeded';
        console.log('successfull service worked');
    }).catch(function (error) {
        // Something went wrong during registration. The service-worker.js file
        // might be unavailable or contain a syntax error.
        // document.querySelector('#status').textContent = error;
        console.log('errored service worked', error);
    });
} else {
    // The current browser doesn't support service workers.
    var aElement = document.createElement('a');
    aElement.href = 'http://www.chromium.org/blink/serviceworker/service-worker-faq';
    // aElement.textContent = 'unavailable';
    // document.querySelector('#status').appendChild(aElement);
}