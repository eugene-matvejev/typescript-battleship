class PopupMgr {
    private $html: any;
    private $content: any;

    constructor() {
        this.$html = $('#notification-area');
        this.$content = this.$html.find('.notification-content');
    }

    show(text: string, type: string): PopupMgr {
        this.$content.html(text);
        this.$html.removeClass().addClass(`alert alert-${type}`);

        return this;
    }

    hide(): PopupMgr {
        this.$html.addClass('hidden');

        return this;
    }
}
