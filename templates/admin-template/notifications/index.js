window.initNotifications = function () {
    const toast = document.getElementById('toast');

    document.getElementById('messageInput').addEventListener('change', function () {
        toast.value = this.value;
    });

    document.getElementById('typeInput').addEventListener('change', function (event) {
        toast.type = event.detail.value;
    });

    document.getElementById('enableAutoClose').addEventListener('change', function (event) {
        toast.autoClose = event.detail.value;
    });

    document.getElementById('enableBlink').addEventListener('change', function (event) {
        toast.classList.toggle('blink', event.detail.value);
    });

    document.getElementById('enableCloseButton').addEventListener('change', function (event) {
        toast.showCloseButton = event.detail.value;
    });

    document.getElementById('topLeft').addEventListener('change', function () {
        toast.position = 'top-left';
    });

    document.getElementById('topRight').addEventListener('change', function () {
        toast.position = 'top-right';
    });

    document.getElementById('bottomLeft').addEventListener('change', function () {
        toast.position = 'bottom-left';
    });

    document.getElementById('bottomRight').addEventListener('change', function () {
        toast.position = 'bottom-right';
    });

    document.getElementById('show').addEventListener('click', function () {
        toast.open();
    });

    document.getElementById('clearAll').addEventListener('click', function () {
        toast.closeAll();
    });
}