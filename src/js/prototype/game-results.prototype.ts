class GameResults {
    public apiMgr : APIRequestService;
    protected route : string;
    protected pagination : PaginationMgr;

    public $tableArea : any;

    /**
     * @param {!jQuery} $el
     */
    constructor($el) {
        this.pagination = new PaginationMgr();
        this.apiMgr     = new APIRequestService();
        this.route      = $el.attr('data-game-results-link');

        this.$tableArea = $(GameResults.resources.layout);
        $el.append(this.$tableArea, this.pagination.$html);
    }

    /**
     * @param {(number|string)} page
     */
    fetch(page) {
        let self      = this,
            onSuccess = function (response) {
                self.update(response);
            };

        this.apiMgr.request('GET', this.route + page, undefined, onSuccess);
    }

    /**
     * @param {{meta: {currentPage: {number}, totalPages: {number}}, results: []}} response
     */
    update(response) {
        let html   = GameResults.resources.html,
            $table = $(html.table()),
            $tBody = $table.find('tbody');

        response.results.forEach(result => $tBody.append(html.row(result)));

        this.$tableArea.html($table);
        this.pagination.update(response.meta.currentPage, response.meta.totalPages);
    }

    public static resources = {
        /** @enum {string} */
        tableHeader : {
            resultId : '#',
            playerName : 'winner',
            finishTime : 'finished at'
        },
        /** @type {string} */
        layout : '<div class="results-area"></div>',
        html : {
            /**
             * @returns {string}
             */
            table : function () {
                let text = GameResults.resources.tableHeader;

                return `<table class="table"> \
                            <tr> \
                                <th>${text.resultId}</th> \
                                <th>${text.playerName}</th> \
                                <th>${text.finishTime}</th> \
                            </tr> \
                        </table>`;
            },
            /**
             * @param {{id: {number}, player: {id: {number}}, timestamp: {string}}} obj
             *
             * @returns {string}
             */
            row : function (obj) {
                return `<tr> \
                            <td>${obj.id}</td> \
                            <td>${(new Date(obj.timestamp)).toLocaleString()}</td> \
                            <td>${obj.player.name}</td> \
                        </tr>`;
            }
        }
    }
}
