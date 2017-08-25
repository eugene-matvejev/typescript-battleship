interface DataProviderInterface {
    request(method: string, url: string, data?: object|string, onSuccess?: Function, onFail?: Function);
}
