import './ResponsiveTable.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Table } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

import { generateData } from '../../../services/dataService';

function ResponsiveTable() {

    useEffect(() => { document.title = `Responsive Table - ${defaultTitle}` }, []);

    const tableData = {
        dataSource: new window.Smart.DataAdapter({
            dataSource: generateData(50),
            dataFields: [
                'id: number',
                'firstName: string',
                'lastName: string',
                'productName: string',
                'quantity: number',
                'price: number',
                'total: number'
            ]
        }),
        onLoad() {
            this.sortBy('lastName', 'asc');
        },
        paging: true,
        sortMode: 'one',
        tooltip: true,
        columns: [
            { label: 'id', dataField: 'id', dataType: 'number' },
            { label: 'First Name', dataField: 'firstName', dataType: 'string', responsivePriority: 4 },
            { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
            { label: 'Product Name', dataField: 'productName', dataType: 'string' },
            { label: 'Quantity', dataField: 'quantity', dataType: 'number', responsivePriority: 3 },
            { label: 'Price', dataField: 'price', dataType: 'number', responsivePriority: 3 },
            { label: 'Total', dataField: 'total', dataType: 'number' }
        ]
    }

    return (
        <div className="container responsive-table-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Responsive Table</h4></div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <p>Smart.Table web component can be used to wrap or replace standard Tables.</p>
                            <Table
                                id="table"
                                {...tableData}
                            ></Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(ResponsiveTable)