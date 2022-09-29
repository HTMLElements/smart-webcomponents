window.initIntroduction = function () {
    document.getElementById('goToGettingStarted').addEventListener('click', function (event) {
        if (event.target instanceof HTMLAnchorElement === false) {
            this.querySelector('a').click();
        }
    });
}