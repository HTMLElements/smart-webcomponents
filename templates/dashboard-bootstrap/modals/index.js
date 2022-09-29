window.initModals = function () {
    Array.from(document.getElementsByClassName('smart-window')).forEach(window => {
        window.addEventListener('click', function (event) {
            if (event.target.closest('.close') ||
                event.target.closest('.smart-confirm-button') ||
                event.target.closest('.smart-cancel-button')) {
                window.close();
            }
        });
    });

    Array.from(document.querySelectorAll('.button-container smart-button')).forEach(button => {
        button.addEventListener('click', function () {
            document.getElementById(button.id.replace(/open(\w+)Modal/, '$1').toLowerCase()).open();
        });
    });
}