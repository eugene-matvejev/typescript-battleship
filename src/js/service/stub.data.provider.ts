class StubDataProvider implements DataProviderInterface {
    static aliasMap = [
        { url: '/json/game.init.response.1.opponent.json', alias: '/api/game-init' },
        { url: '/json/game.results.response.1.result.json', alias: '/api/game-results/page/' }
    ];

    constructor() {
        StubDataProvider.aliasMap.forEach(el => this.fetchJSONMock(el.url, el.alias));
    }

    request(method: string, url: string, data?: object | string, onSuccess?: Function, onFail?: Function) {
        const alias = StubDataProvider.aliasMap.find(el => url.indexOf(el.alias) !== -1);
        if (undefined !== alias) {
            const cached = localStorage[alias.alias];
            const xdr = { response: JSON.parse(cached) };

            onSuccess(xdr);
        }
    }

    fetchJSONMock(url: string, alias: string): void {
        const xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open("GET", url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status == 200) {
                localStorage[alias] = xhr.responseText;
            }
        };
        xhr.send(null);
    }
}