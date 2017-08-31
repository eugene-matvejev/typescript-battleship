/**
 * this controller serve common "Application" actions such as sidebar toggling
 */
$(() => {
    const pageMgr = new PageMgr();
    const popupMgr = new PopupMgr();

    $('.data-provider-switch[data-data-provider-name] > span').text($('.data-provider-switch[data-data-provider-name]').attr('data-data-provider-name'));

    $('.page-sidebar, .page-content')
        .on('click', '.toggle-btn, .switch-btn', function (e) {
            e.stopPropagation();

            pageMgr.toggleSidebar();
        });

    $('.page-sidebar')
        .on('click', 'li[data-section]', function (e) {
            e.stopPropagation();

            pageMgr.switchSection(this);
        })
        .on('click', '.data-provider-switch', function (e) {
            e.stopPropagation();

            let mode = 'stub';
            if (this.getAttribute('data-data-provider-name') === 'stub') {
                mode = 'php';
            }

            document.getElementById('data-provider-name').innerText = mode;
            this.setAttribute('data-data-provider-name', mode);
        });

    $('#notification-area')
        .on('click', '.notification-control', function (e) {
            e.stopPropagation();

            popupMgr.hide();
        });
});
