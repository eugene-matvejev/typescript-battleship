class PHPDataProvider extends Configuration implements DataProviderInterface {
    request(method: string, url: string, data?: object | string, onSuccess?: Function, onFail?: Function) {
        data = JSON.stringify(data);

        const xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.timeout = Configuration.requestTimeout;
        xhr.onload = <any>onSuccess;
        xhr.onerror = <any>onFail;

        xhr.send(data);
    }
}
