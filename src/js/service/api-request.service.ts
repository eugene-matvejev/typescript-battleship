class APIRequestService extends Configuration {
    public pageMgr: PageMgr;

    constructor() {
        super();
        this.pageMgr = new PageMgr();
    }

    request(method: string, url: string, data?: object|string, onSuccess?: Function, onError?: Function) {
        const self = this;
        data = JSON.stringify(data);
        url = APIRequestService.buildRequestURL(url);


        this.pageMgr.loadingMode(true);
        console.log(` >>> ${method} :: ${url}`, data || '');

        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.timeout = APIRequestService.requestTimeout;

        xhr.onload = (): void => {
            if (undefined !== onSuccess) {
                onSuccess(xhr);
            }

            self.pageMgr.loadingMode(false);
        };
        xhr.onerror = (): void => {
            if (undefined !== onError) {
                onError(xhr);
            }

            self.pageMgr.loadingMode(false);
        };

        xhr.send(data);
    }

    protected static buildRequestURL(requestPath: string): string {
        requestPath = requestPath.replace(/^\/|\/$/g, '');

        return `${APIRequestService.requestProtocol}://${APIRequestService.requestHost}/${requestPath}`
    }
}
