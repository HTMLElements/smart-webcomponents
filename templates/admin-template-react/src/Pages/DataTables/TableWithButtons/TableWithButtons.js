import './TableWithButtons.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Table } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

import { generateData } from '../../../services/dataService';

function TableWithButtons() {

    useEffect(() => { document.title = `Table With Buttons - ${defaultTitle}` }, []);

    const tableData = {
        dataSource: new window.Smart.DataAdapter({
            dataSource: generateData(50),
            dataFields: [
                'id: number',
                'firstName: string',
                'lastName: string',
                'productName: string',
                'quantity: number',
                'price: number'
            ]
        }),
        onLoad() {
            this.sortBy('lastName', 'asc');
        },
        filtering: true,
        paging: true,
        sortMode: 'one',
        tooltip: true,
        columns: [
            { label: 'id', dataField: 'id', dataType: 'number', responsivePriority: 3 },
            { label: 'First Name', dataField: 'firstName', dataType: 'string', responsivePriority: 4 },
            { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
            { label: 'Product Name', dataField: 'productName', dataType: 'string' },
            { label: 'Quantity', dataField: 'quantity', dataType: 'number', responsivePriority: 3 },
            { label: 'Price', dataField: 'price', dataType: 'number', responsivePriority: 3 },
            {
                label: '', dataField: '', width: 155, formatFunction: function (settings) {
                    settings.template = '<div class="actions-container"><smart-button class="small-button outlined primary">Copy</smart-button><smart-button class="small-button outlined error">Remove</smart-button></div>';
                }
            }
        ]
    }

    return (
        <div className="container table-with-buttons-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Table With Buttons</h4></div>
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

export default withAnimation(TableWithButtons)