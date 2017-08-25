if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker-api-faker.js', {scope: './'}).then(function (registration) {
        console.log('SW successfully installed');
    }).catch(function (error) {
        console.log('SW installation failed', error);
    });
} else {
    console.log('browser do not support SW');
}
