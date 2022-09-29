import './Client.scss';

import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Table } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function Clients({ openTodayMenu }) {

    const clientsData = [
        { image: 'avril', name: 'Marcia Gomez', company: 'Sandy Lake', email: 'marcia.gomez@example.com', status: 'Active' },
        { image: 'andrew', name: 'Marvin George', company: 'Saddle Dr', email: 'marvin.george@example.com', status: 'Finished' },
        { image: 'johanna', name: 'Carole Pearson', company: 'Dane Ent.', email: 'carole.pearson@example.com', status: 'Inactive' },
        { image: 'johnny', name: 'Leroy Shelton', company: 'Lakeview', email: 'leroy.shelton@example.com', status: 'Active' },
        { image: 'maria', name: 'Daisy Murphy', company: 'Saddle Dr', email: 'daisy.murphy@example.com', status: 'Active' },
        { image: 'mark', name: 'Lois Franklin', company: 'Saddle Dr', email: 'lois.franklin@example.com', status: 'Finished' },
        { image: 'michael', name: 'Tom Day', company: 'Homestead', email: 'tom.day@example.com', status: 'Inactive' },
        { image: 'maya', name: 'Pamela Miller', company: 'Railroad', email: 'pamela.miller@example.com', status: 'Active' },
        { image: 'monica', name: 'Sue Nichols', company: 'Lakeview', email: 'sue.nichols@example.com', status: 'Active' },
        { image: 'toni', name: 'Ritthy Green', company: 'Lakeview', email: 'ritthy.green@example.com', status: 'Inactive' },
        { image: 'robert', name: 'Martin Shelton', company: 'Lakeview', email: 'martin.shelton@example.com', status: 'Finished' },
        { image: 'laura', name: 'Katrina Murray', company: 'First Street', email: 'katrina.murray@example.com', status: 'Inactive' },
        { image: 'steven', name: 'Alfred Soto', company: 'Homestead', email: 'alfred.soto@example.com', status: 'Active' },
        { image: 'anne', name: 'Irene Sanders', company: 'Blossom Hill Ent.', email: 'irene.sanders@example.com', status: 'Active' },
        { image: 'johnny', name: 'Randy Newman', company: 'Wycliff Solutions', email: 'randy.newman@example.com', status: 'Finished' },
        { image: 'monica', name: 'Emma Long', company: 'Northraven', email: 'emma.long@example.com', status: 'Active' },
        { image: 'avril', name: 'Irene Sanders', company: 'Wycliff Solutions', email: 'sanders.ene@example.com', status: 'Inactive' },
        { image: 'maria', name: 'Jenny Thompson', company: 'Green Café', email: 'jenny.thompson@example.com', status: 'Finished' },
        { image: 'toni', name: 'Jim Fisher', company: 'First Street', email: 'jim.fisher@example.com', status: 'Finished' }
    ];

    useEffect(() => { document.title = `Clients - ${defaultTitle}` }, []);

    const clientsTableData = {
        dataSource: clientsData,
        filtering: true,
        paging: true,
        sortMode: 'one',
        columns: [
            {
                label: '', dataField: 'image', dataType: 'string', width: 50, formatFunction(settings) {
                    settings.template = `<div class="client-image" style="background-image: url('assets/images/phonebook/${settings.value}.png')"></div>`;
                }
            },
            { label: 'Name', dataField: 'name', dataType: 'string' },
            { label: 'Company', dataField: 'company', dataType: 'string' },
            { label: 'Email', dataField: 'email', dataType: 'string' },
            {
                label: 'Status', dataField: 'status', dataType: 'string', width: 100, formatFunction(settings) {
                    const value = settings.value;

                    settings.template = `<span class="smart-badge smart-badge-pill ${value.replace(' ', '-').toLowerCase()}"">${value}</span>`;
                }
            }
        ]
    }

    return (
        <div className="container e-commerce-clients">
            <div className="row">
                <div className="col-12 mb-3"><h4>Clients</h4></div>
            </div>

            <div className="row d-flex">
                <div className="col-lg-8 mb-5 order-2 order-lg-1">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="label">Clients</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body p-0">
                            <Table
                                id="clientsTable"
                                className="no-border table-striped"
                                {...clientsTableData}
                            ></Table>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-5 order-1 order-lg-2">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="label">Marcia Gomez</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>

                        <div className="card-body">
                            <div className="row d-flex align-items-center">
                                <div className="col-auto">
                                    <div className="img-as-background square rounded-circle w-60px">
                                        <img alt="" src="assets/images/phonebook/avril.png" />
                                    </div>
                                </div>

                                <div className="col">
                                    <h6 className="font-weight-bold">About client</h6>
                                    <p className="">Vestibulum aliquam arcu ut nisl commodo auctor. Pellentesque at bibendum metus, sit amet tempor elit.</p>
                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="table  border-bottom w-100" style={{ tableLayout: 'fixed' }}>
                                    <thead style={{ display: 'none' }}>
                                        <tr>
                                            <td style={{ width: '100px' }}></td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="font-weight-bold">Name</td>
                                            <td className="text-right">Marcia Gomez</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold">Company</td>
                                            <td className="text-right">Sandy Lake</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold">Email</td>
                                            <td className="text-right">marcia.gomez@example.com</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold">Phone</td>
                                            <td className="text-right">+883123123321</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold">Status</td>
                                            <td className="text-right">Active</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6 className="font-weight-bold">Activity</h6>

                            <div id="appointmentContainer" className="h-100">
                                <div className="appointment">
                                    <div className="label"><strong>Contacted manager</strong><span>14:00</span></div>
                                    <p className="">Proin sagittis nisl diam, in pretium velit congue et.</p>
                                </div>
                                <div className="appointment">
                                    <div className="label"><strong>Renewed contract</strong><span>yesterday</span></div>
                                    <p className="">Donec sodales, tellus at facilisis commodo, lectus lectus pharetra neque, at
                                        condimentum augue diam vitae massa.
                                    </p>
                                </div>
                                <div className="appointment">
                                    <div className="label"><strong>Requested invoice</strong><span>2d ago</span></div>
                                    <p className="">Aenean facilisis mi ac vestibulum vestibulum.</p>
                                </div>
                                <div className="appointment">
                                    <div className="label"><strong>Custom support payment</strong><span>1 mo ago</span></div>
                                    <p className="">Praesent molestie convallis consequat.</p>
                                </div>
                                <div className="appointment">
                                    <div className="label"><strong>Bought license</strong><span>3 mo ago</span></div>
                                    <p className="">Aenean facilisis mi ac vestibulum vestibulum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Clients)