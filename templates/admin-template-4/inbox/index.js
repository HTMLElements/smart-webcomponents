window.initInbox = function () {
    const toast = document.querySelector('.mark-as-readed'),
        openButton = document.querySelectorAll('.list .custom-control-input');

    openButton.forEach(function (item) {
        item.addEventListener('click', function () {
            if (item.checked) {
                toast.open();
            }
        });
    });

};