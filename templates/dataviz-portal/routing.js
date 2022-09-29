const defaultTitle = 'Smart HTML Elements | Company Sales';

function viewChanged(route) {
    const path = route.path;

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
    const router = new Smart.Router('main', './');

    router.cache = false;
    router.templateApplied = viewChanged;

    router.setRoutes([
        {
            path: '/',
            template: './default/template.htm',
            styleUrls: ['./default/styles.css'],
            scriptUrls: ['./default/index.js'],
            title: defaultTitle
        },
        {
            path: '/products',
            template: './products/template.htm',
            styleUrls: ['./products/styles.css'],
            scriptUrls: ['./products/index.js'],
            title: defaultTitle
        },
        {
            path: '/customers',
            template: './customers/template.htm',
            styleUrls: [
                '../../common/jquery-jvectormap-2.0.5.css',
                './customers/styles.css'
            ],
            scriptUrls: [
                './customers/index.js',
                '../../common/jquery-jvectormap-2.0.5.min.js',
                '../../common/jquery-jvectormap-world-mill.js'
            ],
            title: defaultTitle
        },
        {
            path: '/sales',
            template: './sales/template.htm',
            styleUrls: ['./sales/styles.css'],
            scriptUrls: ['./sales/index.js'],
            title: defaultTitle
        },
        {
            path: '/channels',
            template: './channels/template.htm',
            styleUrls: ['./channels/styles.css'],
            scriptUrls: ['./channels/index.js'],
            title: defaultTitle
        }
    ]);

    const view = window.location.search.substr(1);

    router.route('/' + view);
}