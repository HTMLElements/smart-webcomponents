import './Plugins.scss'

import withAnimation from '../../../hoc/withAnimation';

import { useEffect } from 'react';

import { Table } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function Plugins() {

    const pluginsData = [
        { name: 'pdfmake', website: 'http://pdfmake.org/#/' },
        { name: 'JSZip', website: 'https://stuk.github.io/jszip/' },
        { name: 'html2canvas', website: 'https://html2canvas.hertzen.com/' },
        { name: 'Material icons', website: 'https://material.io/resources/icons/' },
        { name: 'Fontello', website: 'http://fontello.com/' },
        { name: 'Icons8', website: 'https://icons8.com/' }
    ];

    useEffect(() => { document.title = `Plugins - ${defaultTitle}` }, []);

    const pluginTableData = {
        dataSource: pluginsData,
        columns: [
            { label: 'Name', dataField: 'name', dataType: 'string' },
            {
                label: 'Website', dataField: 'website', dataType: 'string', formatFunction(settings) {
                    settings.template = `<a class="styled" href="${settings.value}" rel="nofollow" target="_blank">${settings.value}</a>`;
                }
            }
        ]
    }

    return (
        <div className="container plugin-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Plugins</h4></div>
            </div>

            <div className="card">
                <div className="card-body">
                    <p>The following free plugins are sometimes used in Smart HTML Elements demos:</p>
                    <Table
                        id="pluginTable"
                        className="no-border"
                        {...pluginTableData}
                    ></Table>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Plugins)