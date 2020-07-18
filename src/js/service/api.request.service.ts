class APIRequestService extends Configuration {
    public pageMgr: PageMgr;
    private dataProviders: object;

    constructor() {
        super();
        this.pageMgr = new PageMgr();
        this.dataProviders = {
            php: new PHPDataProvider(),
            stub: new StubDataProvider()
        };
    }

    getDataProvider(name?: string): DataProviderInterface {
        if (undefined === name) {
            name = document.getElementById('data-provider-switch').getAttribute('data-data-provider-name');
        }

        return this.dataProviders[name];
    }

    request(method: string, url: string, data?: object | string, onSuccess?: Function, onError?: Function) {
        url = APIRequestService.buildRequestURL(url);

        console.log(` >>> ${method} :: ${url}`, data || '');
        this.pageMgr.loadingMode(true);

        const dataProvider = this.getDataProvider();

        const self = this;
        dataProvider.request(
            method,
            url,
            data,
            (xhr): void => {
                if (undefined !== onSuccess) {
                    onSuccess(xhr);
                }

                self.pageMgr.loadingMode(false);
            },
            (xhr): void => {
                if (undefined !== onError) {
                    onError(xhr);
                }

                self.pageMgr.loadingMode(false);
            }
        );
    }

    private static buildRequestURL(path: string): string {
        path = path.replace(/^\/|\/$/g, '');

        return `${APIRequestService.requestProtocol}://${APIRequestService.requestHost}/${path}`;
    }
}
