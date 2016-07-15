'use strict';

class APIRequestService {
    public pageMgr : PageMgr;

    constructor() {
        this.pageMgr = new PageMgr();
        this.request('GET', '/');
    }

    /**
     * @param {string}   requestMethod
     * @param {string}   requestURL
     * @param {Object}   [requestData]
     * @param {function} [onSuccess]
     * @param {function} [onError]
     */
    request(requestMethod : string, requestURL : string, requestData? : Object, onSuccess? : Function, onError? : Function) {
        let self    = this;
        requestData = JSON.stringify(requestData);
        requestURL  = `${APIRequestService.resources.host}${requestURL}?XDEBUG_START_SESSION`;

        $.ajax(<any>{
            // contentType : 'application/json; charset=utf-8',
            accepts : 'application/json',
            dataType : 'json',
            crossDomain : true,
            method : requestMethod,
            url : requestURL,
            data : requestData,
            timeout : APIRequestService.resources.timeout,
            beforeSend : function () {
                self.pageMgr.loadingMode(true);
                console.log(` >>> ${requestMethod} :: ${requestURL}`, requestData || '');
            },
            complete : function (jqXHR) {
                self.pageMgr.loadingMode(false);
                console.log(` >>> ${requestMethod} :: ${requestURL}`, jqXHR);
            },
            success : onSuccess,
            error : onError
        });
    }

    public static resources = {
        /** @type {number} */
        timeout : 5000 /** in milliseconds */,
        host : 'http://api.game.local/app_dev.php'
    }
}

