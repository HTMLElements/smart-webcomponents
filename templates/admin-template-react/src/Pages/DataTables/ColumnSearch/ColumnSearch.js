import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Table } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

import { generateData } from '../../../services/dataService';

function ColumnSearch() {

    useEffect(() => { document.title = `Column Search - ${defaultTitle}` }, []);

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
            this.filterRow = false;
            this.filterRow = true;
        },
        filtering: true,
        filterRow: true,
        paging: true,
        sortMode: 'one',
        tooltip: true,
        columns: [
            { label: 'id', dataField: 'id', dataType: 'number', responsivePriority: 3 },
            { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
            { label: 'Product Name', dataField: 'productName', dataType: 'string', responsivePriority: 4 },
            { label: 'Quantity', dataField: 'quantity', dataType: 'number', responsivePriority: 5 },
            { label: 'Price', dataField: 'price', dataType: 'number', responsivePriority: 5 },
            { label: 'Total', dataField: 'total', dataType: 'number' }
        ]
    }

    return (
        <div className="container column-search-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Column Search</h4></div>
            </div>

            <div className="card">
                <div className="card-body">
                    <Table
                        id="table"
                        {...tableData}
                    ></Table>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(ColumnSearch)