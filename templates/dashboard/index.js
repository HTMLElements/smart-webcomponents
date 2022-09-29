window.onload = function () {
    const dashboard = document.getElementById('dashboard'),
        leftPanel = document.getElementById('leftPanel'),
        rightPanel = document.getElementById('rightPanel'),
        expandBtn = document.getElementById('expandBtn'),
        collapseBtn = document.getElementById('collapseBtn'),
        notifficationBtn = document.getElementById('notifficationBtn');

    dashboard.hideBar(0);
    expandBtn.addEventListener('click', () => {
        dashboard.update(0, { size: 240 });
        dashboard.setAttribute('expanded', '');
    });
    collapseBtn.addEventListener('click', () => {
        dashboard.update(0, { size: 70 });
        dashboard.removeAttribute('expanded');
    });
}