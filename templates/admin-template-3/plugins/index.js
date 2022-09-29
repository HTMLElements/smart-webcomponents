window.initPlugins = function () {
    const pluginsData = [
        { name: 'pdfmake', website: 'http://pdfmake.org/#/' },
        { name: 'JSZip', website: 'https://stuk.github.io/jszip/' },
        { name: 'jVectorMap', website: 'https://jvectormap.com/' },
        { name: 'html2canvas', website: 'https://html2canvas.hertzen.com/' },
        { name: 'Material icons', website: 'https://material.io/resources/icons/' },
        { name: 'Fontello', website: 'http://fontello.com/' },
        { name: 'Icons8', website: 'https://icons8.com/' }
    ];

    new window.Smart.Table('#pluginTable', {
        dataSource: pluginsData,
        columns: [
            { label: 'Name', dataField: 'name', dataType: 'string' },
            {
                label: 'Website', dataField: 'website', dataType: 'string', formatFunction(settings) {
                    settings.template = `<a class="styled" href="${settings.value}" rel="nofollow" target="_blank">${settings.value}</a>`;
                }
            }
        ]
    });
}