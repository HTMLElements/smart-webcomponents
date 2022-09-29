const defaultTitle = 'Smart HTML Elements | Admin & Dashboard Template With Bootstrap';

function viewChanged(route) {
    const path = route.path;

    selectTreeItem('.' + path);

    switch (path) {
        case '/':
            window.initDefault();
            break;
        default: {
            let fnName = Smart.Utilities.Core.toCamelCase('init-' + path.replace('/', ''));
            fnName = fnName.replace(/-/g, '');

            if (window[fnName]) {
                window[fnName]();
            }
        }
    }
}

function setupRouting() {
    // Code for page routing and processing content
    const router = new Smart.Router('content', './');

    router.cache = true;
    router.templateApplied = viewChanged;

    router.setRoutes([
        {
            path: '/',
            template: './default/template.htm',
            styleUrls: ['./default/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.calendar.js',
                './default/index.js'
            ],
            title: defaultTitle
        },
        {
            path: '/dashboard-1',
            template: './dashboard-1/template.htm',
            styleUrls: ['./dashboard-1/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.calendar.js',
                './dashboard-1/index.js'
            ],
            title: defaultTitle
        },
        {
            path: '/analytics',
            template: './analytics/template.htm',
            styleUrls: [
                '../../common/jquery-jvectormap-2.0.5.css',
                './analytics/styles.css'
            ],
            scriptUrls: [
                '../../source/modules/smart.progressbar.js',
                '../../common/jquery-jvectormap-2.0.5.min.js',
                '../../common/jquery-jvectormap-world-mill.js',
                './analytics/index.js'
            ],
            title: 'Analytics - ' + defaultTitle
        },
        {
            path: '/e-commerce',
            template: './e-commerce/template.htm',
            styleUrls: [
                '../../common/jquery-jvectormap-2.0.5.css',
                './e-commerce/styles.css'
            ],
            scriptUrls: [
                '../../source/modules/smart.progressbar.js',
                '../../common/jquery-jvectormap-2.0.5.min.js',
                '../../common/jquery-jvectormap-world-mill.js',
                './e-commerce/index.js'
            ],
            title: 'E-commerce - ' + defaultTitle
        },
        {
            path: '/social',
            template: './social/template.htm',
            styleUrls: ['./social/styles.css'],
            scriptUrls: ['./social/index.js'],
            title: 'Social - ' + defaultTitle
        },
        {
            path: '/components',
            template: './components/template.htm',
            styleUrls: ['./components/styles.css'],
            scriptUrls: [
                './components/index.js',
                'https://buttons.github.io/buttons.js'
            ],
            title: 'Components - ' + defaultTitle
        },
        {
            path: '/crypto',
            template: './crypto/template.htm',
            styleUrls: ['./crypto/styles.css'],
            scriptUrls: [
                '../../source/smart.numeric.js',
                './crypto/index.js'
            ],
            title: 'Crypto - ' + defaultTitle
        },
        {
            path: '/profile-1',
            template: './profile-1/template.htm',
            styleUrls: [
                './profile-1/styles.css'
            ],
            scriptUrls: ['./profile-1/index.js'],
            title: 'Profile 1 - ' + defaultTitle
        },
        {
            path: '/profile-2',
            template: './profile-2/template.htm',
            styleUrls: [
                './profile-2/styles.css'
            ],
            scriptUrls: [
                '../../source/modules/smart.progressbar.js',
                './profile-2/index.js'
            ],
            title: 'Profile 2 - ' + defaultTitle
        },
        {
            path: '/settings',
            template: './settings/template.htm',
            styleUrls: ['./settings/styles.css'],
            scriptUrls: ['./settings/index.js'],
            title: 'Settings - ' + defaultTitle
        },
        {
            path: '/clients',
            template: './clients/template.htm',
            styleUrls: ['./clients/styles.css'],
            scriptUrls: ['./clients/index.js'],
            title: 'Clients - ' + defaultTitle
        },
        {
            path: '/projects-list-1',
            template: './projects-list-1/template.htm',
            styleUrls: ['./projects-list-1/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.cardview.js',
                '../../source/modules/smart.progressbar.js',
                './projects-list-1/index.js'
            ],
            title: 'Projects List 1 - ' + defaultTitle
        },
        {
            path: '/projects-list-2',
            template: './projects-list-2/template.htm',
            styleUrls: ['./projects-list-2/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.progressbar.js'
            ],
            title: 'Projects List 2 - ' + defaultTitle
        },
        {
            path: '/detail',
            template: './detail/template.htm',
            styleUrls: [
                './social/styles.css',
                './detail/styles.css'
            ],
            scriptUrls: [
                '../../source/modules/smart.progressbar.js',
                './detail/index.js'
            ],
            title: 'Project Detail - ' + defaultTitle
        },
        {
            path: '/invoice',
            template: './invoice/template.htm',
            styleUrls: ['./invoice/styles.css'],
            scriptUrls: ['./invoice/index.js'],
            title: 'Invoice - ' + defaultTitle
        },
        {
            path: '/pricing',
            template: './pricing/template.htm',
            styleUrls: ['./pricing/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.buttongroup.js',
                './pricing/index.js'
            ],
            title: 'Pricing - ' + defaultTitle
        },
        {
            path: '/tasks',
            template: './tasks/template.htm',
            styleUrls: ['./tasks/styles.css'],
            scriptUrls: [
                {src: '../../common/data.js', type: 'text/javascript'},
                '../../source/modules/smart.kanban.js',
                './tasks/index.js'
            ],
            title: 'Tasks - ' + defaultTitle
        },
        {
            path: '/chat',
            template: './chat/template.htm',
            styleUrls: ['./chat/styles.css'],
            scriptUrls: ['./chat/index.js'],
            title: 'Chat - ' + defaultTitle
        },
        {
            path: '/blank',
            template: './blank/template.htm',
            title: 'Blank Page - ' + defaultTitle
        },
        {
            path: '/sign-in',
            template: './sign-in/template.htm',
            styleUrls: [
                './settings/styles.css',
                './sign-in/styles.css'
            ],
            scriptUrls: ['../../source/modules/smart.passwordtextbox.js'],
            title: 'Sign In - ' + defaultTitle
        },
        {
            path: '/sign-up',
            template: './sign-up/template.htm',
            styleUrls: [
                './settings/styles.css',
                './sign-in/styles.css'
            ],
            scriptUrls: ['../../source/modules/smart.passwordtextbox.js'],
            title: 'Sign Up - ' + defaultTitle
        },
        {
            path: '/reset-password',
            template: './reset-password/template.htm',
            styleUrls: [
                './settings/styles.css',
                './sign-in/styles.css'
            ],
            title: 'Reset Password - ' + defaultTitle
        },
        {
            path: '/404',
            template: './404/template.htm',
            styleUrls: ['./404/styles.css'],
            title: 'Error 404 - ' + defaultTitle
        },
        {
            path: '/500',
            template: './500/template.htm',
            styleUrls: ['./404/styles.css'],
            title: 'Error 500 - ' + defaultTitle
        },
        {
            path: '/introduction',
            template: './introduction/template.htm',
            styleUrls: ['./introduction/styles.css'],
            scriptUrls: ['./introduction/index.js'],
            title: 'Introduction - ' + defaultTitle
        },
        {
            path: '/getting-started',
            template: './getting-started/template.htm',
            styleUrls: ['./getting-started/styles.css'],
            title: 'Getting Started - ' + defaultTitle
        },
        {
            path: '/plugins',
            template: './plugins/template.htm',
            styleUrls: ['./plugins/styles.css'],
            scriptUrls: ['./plugins/index.js'],
            title: 'Plugins - ' + defaultTitle
        },
        {
            path: '/changelog',
            template: './changelog/template.htm',
            styleUrls: ['./changelog/styles.css'],
            title: 'Changelog - ' + defaultTitle
        },
        {
            path: '/toasts',
            template: './toasts/template.htm',
            styleUrls: ['./toasts/styles.css'],
            scriptUrls: ['../../source/modules/smart.toast.js'],
            title: 'Toasts - ' + defaultTitle
        },
        {
            path: '/buttons',
            template: './buttons/template.htm',
            styleUrls: ['./buttons/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.buttongroup.js',
                '../../source/modules/smart.dropdownbutton.js'
            ],
            title: 'Buttons - ' + defaultTitle
        },
        {
            path: '/cards',
            template: './cards/template.htm',
            styleUrls: ['./cards/styles.css'],
            scriptUrls: ['../../source/modules/smart.tabs.js'],
            title: 'Cards - ' + defaultTitle
        },
        {
            path: '/carousel',
            template: './carousel/template.htm',
            styleUrls: ['./carousel/styles.css'],
            scriptUrls: ['../../source/modules/smart.carousel.js'],
            title: 'Carousel - ' + defaultTitle
        },
        {
            path: '/embed-video',
            template: './embed-video/template.htm',
            styleUrls: ['./embed-video/styles.css'],
            scriptUrls: ['./embed-video/index.js'],
            title: 'Embed Video - ' + defaultTitle
        },
        {
            path: '/general',
            template: './general/template.htm',
            styleUrls: ['./general/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.accordion.js',
                '../../source/modules/smart.breadcrumb.js',
                '../../source/modules/smart.progressbar.js',
                '../../source/modules/smart.tooltip.js'
            ],
            title: 'General-Use Components - ' + defaultTitle
        },
        {
            path: '/grid-layout',
            template: './grid-layout/template.htm',
            styleUrls: ['./grid-layout/styles.css'],
            title: 'Grid Layout - ' + defaultTitle
        },
        {
            path: '/modals',
            template: './modals/template.htm',
            styleUrls: ['./modals/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.window.js',
                './modals/index.js'
            ],
            title: 'Modals - ' + defaultTitle
        },
        {
            path: '/tabs',
            template: './tabs/template.htm',
            styleUrls: ['./tabs/styles.css'],
            scriptUrls: ['../../source/modules/smart.tabs.js'],
            title: 'Tabs - ' + defaultTitle
        },
        {
            path: '/typography',
            template: './typography/template.htm',
            styleUrls: ['./typography/styles.css'],
            title: 'Typography Components - ' + defaultTitle
        },
        {
            path: '/feather',
            template: './feather/template.htm',
            styleUrls: ['./feather/styles.css'],
            scriptUrls: [
                'https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js',
                './feather/index.js'
            ],
            title: 'Feather - ' + defaultTitle
        },
        {
            path: '/font-awesome',
            template: './font-awesome/template.htm',
            styleUrls: [
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css',
                './feather/styles.css'
            ],
            title: 'Font Awesome - ' + defaultTitle
        },
        {
            path: '/layouts',
            template: './layouts/template.htm',
            styleUrls: ['./layouts/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.form.js',
                './layouts/index.js'
            ],
            title: 'Form Layouts - ' + defaultTitle
        },
        {
            path: '/basic-inputs',
            template: './basic-inputs/template.htm',
            styleUrls: ['./basic-inputs/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.colorinput.js',
                '../../source/modules/smart.dateinput.js',
                '../../source/modules/smart.switchbutton.js',
                '../../source/modules/smart.timeinput.js'
            ],
            title: 'Basic Inputs - ' + defaultTitle
        },
        {
            path: '/input-groups',
            template: './input-groups/template.htm',
            styleUrls: ['./input-groups/styles.css'],
            scriptUrls: ['../../source/modules/smart.multisplitbutton.js'],
            title: 'Input Groups - ' + defaultTitle
        },
        {
            path: '/tables',
            template: './tables/template.htm',
            styleUrls: [
                './clients/styles.css',
                './tables/styles.css'
            ],
            scriptUrls: [
                {src: '../../common/data.js', type: 'text/javascript'},
                './tables/index.js'
            ],
            title: 'Tables - ' + defaultTitle
        },
        {
            path: '/advanced-inputs',
            template: './advanced-inputs/template.htm',
            styleUrls: ['./advanced-inputs/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.combobox.js',
                '../../source/modules/smart.daterangeinput.js',
                '../../source/modules/smart.datetimepicker.js',
                '../../source/modules/smart.maskedtextbox.js'
            ],
            title: 'Advanced Inputs - ' + defaultTitle
        },
        {
            path: '/editor',
            template: './editor/template.htm',
            styleUrls: [
                'https://cdnjs.cloudflare.com/ajax/libs/jqwidgets/10.1.5/jqwidgets/styles/jqx.base.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/jqwidgets/10.1.5/jqwidgets/styles/jqx.dark.min.css'
            ],
            scriptUrls: [
                'https://cdnjs.cloudflare.com/ajax/libs/jqwidgets/10.1.5/jqwidgets/jqx-all.min.js',
                './editor/index.js'
            ],
            title: 'Editor - ' + defaultTitle
        },
        {
            path: '/validation',
            template: './validation/template.htm',
            styleUrls: ['./validation/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.form.js',
                './validation/index.js'
            ],
            title: 'Form Validation - ' + defaultTitle
        },
        {
            path: '/wizard',
            template: './wizard/template.htm',
            styleUrls: ['./wizard/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.datetimepicker.js',
                '../../source/modules/smart.form.js',
                '../../source/modules/smart.maskedtextbox.js',
                '../../source/modules/smart.tabs.js',
                './wizard/index.js'
            ],
            title: 'Wizard - ' + defaultTitle
        },
        {
            path: '/responsive-table',
            template: './responsive-table/template.htm',
            styleUrls: ['./responsive-table/styles.css'],
            scriptUrls: [
                {src: '../../common/data.js', type: 'text/javascript'},
                './responsive-table/index.js'
            ],
            title: 'Responsive Table - ' + defaultTitle
        },
        {
            path: '/table-with-buttons',
            template: './table-with-buttons/template.htm',
            styleUrls: [
                './responsive-table/styles.css',
                './table-with-buttons/styles.css'
            ],
            scriptUrls: [
                {src: '../../common/data.js', type: 'text/javascript'},
                './table-with-buttons/index.js'
            ],
            title: 'Table With Buttons - ' + defaultTitle
        },
        {
            path: '/column-search',
            template: './column-search/template.htm',
            styleUrls: ['./responsive-table/styles.css'],
            scriptUrls: [
                {src: '../../common/data.js', type: 'text/javascript'},
                './column-search/index.js'
            ],
            title: 'Column Search in Table - ' + defaultTitle
        },
        {
            path: '/multi-selection',
            template: './multi-selection/template.htm',
            styleUrls: ['./responsive-table/styles.css'],
            scriptUrls: [
                {src: '../../common/data.js', type: 'text/javascript'},
                './multi-selection/index.js'
            ],
            title: 'Table With Multi Selection - ' + defaultTitle
        },
        {
            path: '/ajax-data',
            template: './ajax-data/template.htm',
            styleUrls: [
                './responsive-table/styles.css',
                './ajax-data/styles.css'
            ],
            scriptUrls: [
                '../../source/modules/smart.progressbar.js',
                {src: '../../common/data.js', type: 'text/javascript'},
                './ajax-data/index.js'
            ],
            title: 'Table With Data From Ajax - ' + defaultTitle
        },
        {
            path: '/charts',
            template: './charts/template.htm',
            styleUrls: ['./charts/styles.css'],
            scriptUrls: ['./charts/index.js'],
            title: 'Charts - ' + defaultTitle
        },
        {
            path: '/notifications',
            template: './notifications/template.htm',
            styleUrls: ['./notifications/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.toast.js',
                './notifications/index.js'
            ],
            title: 'Notifications - ' + defaultTitle
        },
        {
            path: '/google-maps',
            template: './google-maps/template.htm',
            styleUrls: ['./google-maps/styles.css'],
            title: 'Google Maps - ' + defaultTitle
        },
        {
            path: '/vector-maps',
            template: './vector-maps/template.htm',
            styleUrls: [
                '../../common/jquery-jvectormap-2.0.5.css',
                './vector-maps/styles.css'
            ],
            scriptUrls: [
                '../../common/jquery-jvectormap-2.0.5.min.js',
                '../../common/jquery-jvectormap-world-mill.js',
                './vector-maps/index.js'
            ],
            title: 'Vector Maps - ' + defaultTitle
        },
        {
            path: '/scheduler',
            template: './scheduler/template.htm',
            styleUrls: ['./scheduler/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.scheduler.js',
                './scheduler/index.js'
            ],
            title: 'Scheduler - ' + defaultTitle
        }
    ]);

    const view = window.location.search.substr(1);

    router.route('/' + view);

    if (view) {
        // view is other than default one
        selectTreeItem('./' + view);
    }
}