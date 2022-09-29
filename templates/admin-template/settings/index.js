window.initSettings = function () {
    const settingsListBox = document.getElementById('settingsListBox'),
        mainCol = document.getElementById('mainCol'),
        accountTemplate = document.getElementById('accountTemplate'),
        passwordTemplate = document.getElementById('passwordTemplate');
    let view = accountTemplate;

    function transition() {
        if (mainCol.classList.contains('changing')) {
            mainCol.innerHTML = '';
            mainCol.appendChild(document.importNode(view.content, true));
            mainCol.classList.remove('changing');
        }
    }

    mainCol.addEventListener('transitionend', transition);
    mainCol.appendChild(document.importNode(view.content, true));

    settingsListBox.addEventListener('change', function (event) {
        if (event.detail.selected && event.detail.index < 2) {
            if (event.detail.index === 0) {
                view = accountTemplate;
            }
            else if (event.detail.index === 1) {
                view = passwordTemplate;
            }

            mainCol.classList.add('changing');
        }
    });

    addTodayMenuOpenHandlers();
}