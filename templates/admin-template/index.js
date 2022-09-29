const theme = sessionStorage.getItem('theme') || 'light';
const colorScheme = sessionStorage.getItem('color-scheme') || '';
let boxed = sessionStorage.getItem('boxed'),
    DOMContentLoaded = false,
    collapsed = false,
    autoCollapsed = false,
    programmaticTreeItemSelection = false,
    primaryContainer, sideBar, treeNavigation, secondaryContainer, toggleCollapsedSidebar, toggleBoxedLayout;

boxed = !boxed || boxed === 'false' ? false : true;

function getTheme() {
    return document.body.getAttribute('theme');
}

function updateTheme(theme) {
    const jqxEditor = document.querySelector('.jqx-editor.jqx-widget');

    document.body.setAttribute('theme', theme);
    Array.from(document.querySelectorAll('smart-chart')).forEach(chart => chart.theme = theme);

    if (jqxEditor) {
        $(jqxEditor).jqxEditor('theme', theme);
    }

    sessionStorage.setItem('theme', theme);
}

function getColorScheme() {
    return document.body.getAttribute('color-scheme');
}

function updateColorScheme(colorScheme) {
    document.body.setAttribute('color-scheme', colorScheme);
    sessionStorage.setItem('color-scheme', colorScheme);
}

function listenForColorSchemeChanging() {
    // Change Template Color Scheme
    const elements = document.getElementsByClassName("js-change-color-scheme");

    let getColorScheme = function () {
        let attribute = this.getAttribute("data-scheme");
        updateColorScheme(attribute);
    };

    Array.from(elements).forEach(function (element) {
        element.addEventListener('click', getColorScheme);
    });
}

function addTodayMenuOpenHandlers() {
    const todayMenu = document.getElementById('todayMenu');

    Array.from(document.querySelectorAll('.settings-button')).forEach(button => {
        button.addEventListener('pointerup', function (event) {
            event.stopPropagation();
        });

        button.addEventListener('click', function () {
            const rect = button.getBoundingClientRect();

            Array.from(document.getElementsByTagName('smart-menu')).filter(menu => menu !== todayMenu).forEach(menu => menu.close());

            if (!todayMenu.opened) {
                todayMenu.open(rect.right - todayMenu.offsetWidth, rect.bottom + window.scrollY);
            } else {
                todayMenu.close();
            }
        });
    });
}

function selectTreeItem(path) {
    const respectiveAnchor = treeNavigation.querySelector('a[href="' + path + '"');

    if (respectiveAnchor) {
        let respectiveTreeItem = respectiveAnchor.closest('smart-tree-item');

        programmaticTreeItemSelection = true;
        respectiveTreeItem.selected = true;

        while (respectiveTreeItem) {
            respectiveTreeItem = respectiveTreeItem.parentItem;
            treeNavigation.expandItem(respectiveTreeItem, false);
        }

        programmaticTreeItemSelection = false;
    }

    onPageInit();
}

function collapseOnWindowResize() {
    if (!DOMContentLoaded) {
        return;
    }

    const windowWidth = window.innerWidth;

    sideBar.style.transition = 'none';
    secondaryContainer.style.transition = 'none';

    if (!collapsed && windowWidth < 992) {
        collapsed = true;
        autoCollapsed = true;
    } else if (autoCollapsed && windowWidth >= 992) {
        collapsed = false;
        autoCollapsed = false;
    }

    primaryContainer.classList.toggle('collapsed', collapsed);

    if (collapsed) {
        toggleCollapsedSidebar.setAttribute('checked', '');
    } else {
        toggleCollapsedSidebar.removeAttribute('checked');
    }

    requestAnimationFrame(() => {
        sideBar.style.transition = null;
        secondaryContainer.style.transition = null;
    });
}

function setBoxed() {
    boxed = !boxed;
    document.body.classList.toggle('boxed', boxed);
    sessionStorage.setItem('boxed', boxed);
}

function checkForBody() {
    if (document.body) {
        DOMContentLoaded = true;
        primaryContainer = document.getElementById('primaryContainer');
        sideBar = document.getElementById('sideBar');
        treeNavigation = document.getElementById('tree');
        secondaryContainer = document.getElementById('secondaryContainer');
        toggleCollapsedSidebar = document.getElementById('toggleCollapsedSidebar');
        toggleBoxedLayout = document.getElementById('toggleBoxedLayout');

        document.body.setAttribute('theme', theme);
        document.body.setAttribute('color-scheme', colorScheme);
        document.body.classList.toggle('boxed', boxed);

        if (boxed) {
            toggleBoxedLayout.setAttribute('checked', '')
        }

        collapseOnWindowResize();
    } else {
        requestAnimationFrame(checkForBody);
    }
}

function hoverOnSidebarToggle() {
    document.getElementById('sideBar').addEventListener('mouseenter', function (event) {
        if (document.getElementById('primaryContainer').classList.contains('collapsed')) {
            document.getElementById('sideBar').classList.remove('hover-on-toggle');
        } else {
            document.getElementById('sideBar').classList.add('hover-on-toggle');
        }
    });
}

requestAnimationFrame(checkForBody);

window.onload = function () {
	checkForBody();
    const messagesButton = document.getElementById('messages'),
        notificationsButton = document.getElementById('notifications'),
        languageButton = document.getElementById('language'),
        profileButton = document.getElementById('profile'),
        searchButton = document.getElementById('search'),
        settingsButton = document.getElementById('settingsButton'),
        settingsPanel = document.getElementById('settingsPanel'),
        settingsCloseButton = document.getElementById('settingsCloseButton'),
        lightThemePreview = document.getElementById('lightThemePreview'),
        darkThemePreview = document.getElementById('darkThemePreview'),
        buyButton = document.getElementById('buy');

    document.getElementById('toggleButton').addEventListener('click', function () {
        collapsed = !collapsed;
        autoCollapsed = false;

        if (window.innerWidth >= 992) {
            primaryContainer.classList.toggle('collapsed', collapsed);
            toggleCollapsedSidebar.checked = collapsed;
        }
    });

    [messagesButton, notificationsButton, languageButton, profileButton, searchButton].forEach(button => {
        const respectiveMenu = document.getElementById(button.id + 'Menu');

        button.addEventListener('pointerup', function (event) {
            event.stopPropagation();
        });

        button.addEventListener('click', function () {
            const rect = button.getBoundingClientRect();

            Array.from(document.getElementsByTagName('smart-menu')).filter(menu => menu !== respectiveMenu).forEach(menu => menu.close());

            if (!respectiveMenu.opened) {
                respectiveMenu.open(rect.right - respectiveMenu.offsetWidth, rect.bottom + window.scrollY);
            } else {
                respectiveMenu.close();
            }
        });

        respectiveMenu.addEventListener('pointerup', function (event) {
            if (event.target.closest('[template-applied]')) {
                respectiveMenu.close();
            }
        });
    });

    settingsButton.addEventListener('click', function () {
        document.body.classList.toggle('settings-panel-shown');
    });

    document.body.addEventListener('click', function (event) {
        if (document.body.classList.contains('settings-panel-shown') &&
            !settingsPanel.contains(event.target) &&
            !settingsButton.contains(event.target)) {
            document.body.classList.remove('settings-panel-shown');
        }
    });

    settingsCloseButton.addEventListener('click', function () {
        document.body.classList.remove('settings-panel-shown');
    });


    toggleCollapsedSidebar.addEventListener('change', function (event) {
        if (event.detail.changeType === 'pointer') {
            collapsed = !collapsed;
            autoCollapsed = false;

            primaryContainer.classList.toggle('collapsed', collapsed);
        }
    });

    toggleBoxedLayout.addEventListener('change', function () {
        setBoxed();
    });

    lightThemePreview.addEventListener('click', function () {
        updateTheme('light');
    });

    darkThemePreview.addEventListener('click', function () {
        updateTheme('dark');
    });

    buyButton.addEventListener('click', function () {
        window.open('https://www.htmlelements.com/license/', '_blank');
    });

    treeNavigation.addEventListener('change', function (event) {
        if (programmaticTreeItemSelection) {
            return;
        }

        const anchor = event.detail.item.querySelector('a');

        if (anchor) {
            anchor.click();
        }
    });

    // Prevent closing menu on click
    document.getElementById('searchMenu').addEventListener('closing', function (event) {
        if (event.detail.target.tagName === 'SMART-MENU-ITEM') {
            event.preventDefault();
        }
    });

    listenForColorSchemeChanging();

    hoverOnSidebarToggle();
    setupRouting();
};


window.onresize = collapseOnWindowResize;