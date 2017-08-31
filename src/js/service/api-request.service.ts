class APIRequestService extends Configuration {
    public pageMgr: PageMgr;

    constructor() {
        super();
        this.pageMgr = new PageMgr();
    }

    request(requestMethod: string, requestURL: string, requestData?: object|string, onSuccess?: Function, onError?: Function) {
        const self = this;
        requestData = JSON.stringify(requestData);
        requestURL = APIRequestService.buildRequestURL(requestURL);


        this.pageMgr.loadingMode(true);
        console.log(` >>> ${requestMethod} :: ${requestURL}`, requestData || '');

        const xhr = new XMLHttpRequest();
        xhr.open(requestMethod, requestURL, true);
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

        xhr.send(requestData);
    }

    protected static buildRequestURL(requestPath: string): string {
        requestPath = requestPath.replace(/^\/|\/$/g, '');

        return `${APIRequestService.requestProtocol}://${APIRequestService.requestHost}/${requestPath}`
    }
}
