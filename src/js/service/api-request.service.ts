class APIRequestService extends Configuration {
    public pageMgr: PageMgr;

    constructor() {
        super();
        this.pageMgr = new PageMgr();
    }

    request(requestMethod: string, requestURL: string, requestData?: Object, onSuccess?: Function, onError?: Function) {
        let self = this;
        requestData = JSON.stringify(requestData);
        requestURL = APIRequestService.buildRequestURL(requestURL);

        var xhr = new XMLHttpRequest();
        xhr.open(requestMethod, requestURL);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = onSuccess;
        xhr.send(requestData);

        // $.ajax(<any>{
        //     accepts: 'application/json',
        //     dataType: 'json',
        //     crossDomain: true,
        //     method: requestMethod,
        //     url: requestURL,
        //     data: requestData,
        //     timeout: APIRequestService.requestTimeout,
        //     beforeSend: function () {
        //         self.pageMgr.loadingMode(true);
        //         console.log(` >>> ${requestMethod} :: ${requestURL}`, requestData || '');
        //     },
        //     complete: function (jqXHR) {
        //         self.pageMgr.loadingMode(false);
        //         console.log(` >>> ${requestMethod} :: ${requestURL}`, jqXHR);
        //     },
        //     success: onSuccess,
        //     error: onError
        // });
    }

    protected static buildRequestURL(requestPath: string) {
        return `${APIRequestService.requestProtocol}://${APIRequestService.requestHost}/${requestPath}`
    }
}

