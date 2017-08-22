class ModalMgr {
    public $html: any;

    constructor() {
        this.$html = $('#modal-area');
    }

    show(): ModalMgr {
        this.$html.removeClass('hidden').find('.modal').modal({keyboard: false});

        return this;
    }

    hide(): ModalMgr {
        this.$html.find('.modal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();

        return this;
    }

    updateHTML(html: string): ModalMgr {
        this.$html.html(html);

        return this;
    }

    unlockSubmission(enable?: boolean): ModalMgr {
        const $button = this.$html.find('button.btn[type="button"]');

        $button[0].disabled = !(undefined === enable || enable);

        return this;
    }
}
