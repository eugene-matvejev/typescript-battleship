class PageMgr {
    protected modalMgr: ModalMgr;
    protected popupMgr: PopupMgr;
    protected $docTitle: any;
    protected $loading: any;
    protected $sidebar: any;
    protected $content: any;
    protected $pageTitle: any;

    constructor() {
        this.modalMgr = new ModalMgr();
        this.popupMgr = new PopupMgr();
        this.$docTitle = $('head>title');
        this.$loading = $('.page-loading');
        this.$sidebar = $('.page-sidebar');
        this.$content = $('.page-content');
        this.$pageTitle = this.$content.find('.page-section-title');
    }

    toggleSidebar(): PageMgr {
        this.$sidebar.toggleClass('toggled');
        this.$content.toggleClass('toggled');

        return this;
    }

    switchSection(el: HTMLElement): PageMgr {
        let section = el.getAttribute('data-section');
        switch (section) {
            case 'game-current-area':
            case 'game-results-area':
                this.popupMgr.hide();
                this.toggleTitle(el.innerText);
                this.hideAll();

                this.show(section);
        }

        return this;
    }

    hideAll(): PageMgr {
        this.$content.find('.container-fluid > .row > div:not(#notification-area)').addClass('hidden');
        this.$sidebar.find('li:not(.sidebar-brand)').removeClass('selected');

        return this;
    }


    show(id: string): PageMgr {
        this.$content.find(`div#${id}`).removeClass('hidden');
        this.$sidebar.find(`li[data-section="${id}"]`).addClass('selected');

        return this;
    }

    toggleTitle(text: string): PageMgr {
        let prefix = this.$sidebar.find('.page-header').text();

        this.$docTitle.text(`${prefix} :: ${text}`);
        this.$pageTitle.text(text);

        return this;
    }

    loadingMode(enable?: boolean): PageMgr {
        this.modalMgr.updateHTML('').hide();

        this.$loading.addClass('hidden');

        if (undefined === enable || enable) {
            this.$loading.removeClass('hidden');
            this.modalMgr.show();
        }

        return this;
    }
}
