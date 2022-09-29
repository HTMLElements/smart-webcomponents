import './Tables.scss';
import { useEffect } from 'react';

import withAnimation from '../../hoc/withAnimation';

import { Table } from '../../smartImports';

import { defaultTitle } from '../../contexts/themeContext';

import { generateData } from '../../services/dataService';

function Tables() {

    const weeklyData = [
        { market: 'Direct', revenue: 2873, value: 11 },
        { market: 'Partner', revenue: 7201, value: -9 },
        { market: 'Online', revenue: 1254, value: 27 },
        { market: 'Other', revenue: 901, value: 0.2 }
    ];

    const clientsData = [
        { image: 'avril', name: 'Marcia Gomez', company: 'Sandy Lake', email: 'marcia.gomez@example.com', status: 'Active' },
        { image: 'andrew', name: 'Marvin George', company: 'Saddle Dr', email: 'marvin.george@example.com', status: 'Finished' },
        { image: 'johanna', name: 'Carole Pearson', company: 'Dane Ent.', email: 'carole.pearson@example.com', status: 'Inactive' },
        { image: 'johnny', name: 'Leroy Shelton', company: 'Lakeview', email: 'leroy.shelton@example.com', status: 'Active' },
        { image: 'maria', name: 'Daisy Murphy', company: 'Saddle Dr', email: 'daisy.murphy@example.com', status: 'Active' }
    ];

    const spreadsheetData = [];

    useEffect(() => { document.title = `Tables - ${defaultTitle}` }, []);

    const commonSettings = {
        dataSource: new window.Smart.DataAdapter({
            dataSource: generateData(5),
            dataFields: [
                'firstName: string',
                'lastName: string',
                'quantity: number',
                'date: date'
            ]
        }),
        tooltip: true,
        columns: [
            { label: 'First Name', dataField: 'firstName', dataType: 'string' },
            { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
            { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
            { label: 'Date', dataField: 'date', dataType: 'date' },
            {
                label: 'Action', dataField: 'action', formatFunction: function (settings) {
                    settings.template = '<div class="actions-container"><span class="material-icons">edit</span><span class="material-icons">delete_forever</span></div>';
                }
            }
        ]
    };

    const condensedTableData = {
        dataSource: weeklyData,
        columns: [
            {
                label: 'Market', dataField: 'market', dataType: 'string', formatFunction(settings) {
                    settings.template = `<div class="color-box-container"><div class="color-box ${settings.value.toLowerCase()}"></div>${settings.value}</div>`;
                }
            },
            {
                label: 'Revenue', dataField: 'revenue', dataType: 'number', formatFunction(settings) {
                    settings.template = `$ ${settings.value}`;
                }
            },
            {
                label: 'Value', dataField: 'value', dataType: 'number', formatFunction(settings) {
                    settings.cell.classList.add(settings.value > 0 ? 'positive' : 'negative');

                    settings.template = settings.value + '%';
                }
            }
        ]
    };

    const hoverableTableData = {
        dataSource: clientsData,
        tooltip: true,
        columns: [
            {
                label: '', dataField: 'image', dataType: 'string', width: 50, formatFunction(settings) {
                    settings.template = `<div class="img-as-background rounded-circle square border"><img src="assets/images/phonebook/${settings.value}.png" /></div>`;
                }
            },
            { label: 'Name', dataField: 'name', dataType: 'string', width: 120 },
            { label: 'Company', dataField: 'company', dataType: 'string' },
            { label: 'Email', dataField: 'email', dataType: 'string', width: 220 }
        ]
    };

    const spreadsheetColumns = [{
        label: '', dataField: 'rowHeader', width: 50, freeze: 'near', formatFunction(settings) {
            settings.cell.removeAttribute('data-field');
            settings.cell.setAttribute('row-header', '');
        }
    }];

    for (let i = 65; i < 91; i++) {
        const letter = String.fromCharCode(i);
        spreadsheetColumns.push({ label: letter, dataField: letter, width: 100 });
    }

    for (let i = 0; i < 20; i++) {
        const dataPoint = { rowHeader: i + 1 };

        for (let j = 65; j < 91; j++) {
            dataPoint[String.fromCharCode(j)] = String.fromCharCode(j) + (i + 1);
        }

        spreadsheetData.push(dataPoint);
    }

    const spreadsheetTableData = {
        dataSource: spreadsheetData,
        freezeHeader: true,
        keyboardNavigation: true,
        columns: spreadsheetColumns
    }

    return (
        <div className="container tables-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Tables</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Basic Table</h4>
                        </div>
                        <div className="card-body">
                            <Table
                                id="basicTable"
                                {...commonSettings}
                            ></Table>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Striped Rows</h4>
                        </div>
                        <div className="card-body">
                            <Table
                                id="stripedTable"
                                className="table-striped"
                                {...commonSettings}
                            ></Table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Condensed Table</h4>
                        </div>
                        <div className="card-body">
                            <Table
                                id="condensedTable"
                                className="small-table table-striped"
                                {...condensedTableData}
                            ></Table>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Hoverable Rows</h4>
                        </div>
                        <div className="card-body">
                            <Table
                                id="hoverableTable"
                                className="table-hover"
                                {...hoverableTableData}
                            ></Table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Bordered Table</h4>
                        </div>
                        <div className="card-body">
                            <Table
                                id="borderedTable"
                                className="table-bordered"
                                {...commonSettings}
                            ></Table>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Contextual Row Colors</h4>
                        </div>
                        <div className="card-body">
                            <Table
                                id="coloredTable"
                                {...commonSettings}
                            ></Table>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="label">Spreadsheet Table</h4>
                        </div>
                        <div className="card-body">
                            <Table
                                id="spreadsheetTable"
                                {...spreadsheetTableData}
                            ></Table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default withAnimation(Tables)