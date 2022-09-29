const defaultTitle = 'Smart HTML Elements | Dashboard Template';

function viewChanged(route) {
    const path = route.path;

    selectTreeItem('.' + path);

    switch (path) {
        case '/':
            window.initDefault();
            break;
        default: {
            const fnName = Smart.Utilities.Core.toCamelCase('init-' + path.replace('/', ''));

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
            styleUrls: [
                '../../common/jquery-jvectormap-2.0.5.css',
                './default/styles.css'
            ],
            scriptUrls: [
                '../../source/modules/smart.calendar.js',
                '../../common/jquery-jvectormap-2.0.5.min.js',
                '../../common/jquery-jvectormap-world-mill.js',
                './default/index.js'
            ],
            title: defaultTitle
        },
        {
            path: '/countries',
            template: './countries/template.htm',
            styleUrls: ['./countries/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.grid.js',
                './countries/index.js'
            ],
            title: defaultTitle
        },
        {
            path: '/team',
            template: './team/template.htm',
            styleUrls: ['./team/styles.css'],
            scriptUrls: [
                '../../source/modules/smart.listbox.js',
                '../../source/modules/smart.scheduler.js',
                './team/index.js'
            ],
            title: defaultTitle
        },
        {
            path: '/about',
            template: './about/template.htm',
            styleUrls: ['./about/styles.css'],
            scriptUrls: [
                './about/index.js'
            ],
            title: defaultTitle
        }
    ]);

    const view = window.location.search.substr(1);

    router.route('/' + view);

    if (view) {
        // view is other than default one
        selectTreeItem('./' + view);
    }
}