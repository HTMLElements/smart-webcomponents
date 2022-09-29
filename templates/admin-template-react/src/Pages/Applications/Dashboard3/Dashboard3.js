import './Dashboard3.scss';
import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';
import { Chart, Table } from '../../../smartImports';

import { useThemeContext, defaultTitle } from '../../../contexts/themeContext';

function Dashboard3({ openTodayMenu }) {

    const sourceData = [
        { market: 'Direct', revenue: 2873, value: 11 },
        { market: 'Google Ads', revenue: 7201, value: -9 },
        { market: 'Facebook', revenue: 1254, value: 27 },
        { market: 'Other', revenue: 901, value: 0.2 }
    ];

    const clientsData = [
        { name: 'Marcia Gomez', subject: 'Problem with delivery', email: 'marcia.gomez@example.com', date: '01.01.2021' },
        { name: 'Marvin George', subject: 'Cancellation of order', email: 'marvin.george@example.com', date: '11.13.2020' },
        { name: 'Carole Pearson', subject: 'Order change.', email: 'carole.pearson@example.com', date: '08.28.2020' },
        { name: 'Leroy Shelton', subject: 'Delivery issue', email: 'leroy.shelton@example.com', date: '06.21.2020' },
        { name: 'Daisy Murphy', subject: 'Order cancel', email: 'daisy.murphy@example.com', date: '05.15.2020' }
    ];

    const { themeObj } = useThemeContext();

    const sourceChartRef = useRef(null);

    useEffect(() => { document.title = `Dashboard 3 - ${defaultTitle}` }, []);

    useEffect(() => {

        sourceChartRef?.current.addColorScheme(
            'custom',
            ['#16736F', '#DB4437', '#1877f2', '#62B773']
        );
        sourceChartRef?.current.refresh();

    }, []);

    const sourceChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        colorScheme: 'custom',
        padding: { left: 0, top: 0, right: 0, bottom: 0 },
        dataSource: sourceData,
        seriesGroups: [
            {
                type: 'pie',
                series: [
                    {
                        dataField: 'revenue',
                        displayText: 'market',
                        radius: 70,
                        selectedRadiusChange: 2

                    }
                ]
            }
        ]
    }

    const sourceTableData = {
        dataSource: sourceData,
        columns: [
            {
                label: 'Source', dataField: 'market', dataType: 'string', formatFunction(settings) {
                    settings.template = `<div class="color-box-container"><div class="color-box ${settings.value.toLowerCase()}"></div>${settings.value}</div>`;
                }
            },
            {
                label: 'Total', dataField: 'revenue', dataType: 'number', formatFunction(settings) {
                    settings.template = `${settings.value} visits`;
                }
            },
            {
                label: 'Value', dataField: 'value', dataType: 'number', formatFunction(settings) {
                    settings.cell.classList.add(settings.value > 0 ? 'positive' : 'negative');

                    settings.template = settings.value + '%';
                }
            }
        ]
    }

    const clientsTableData = {
        dataSource: clientsData,
        tooltip: false,
        columns: [
            { label: 'Name', dataField: 'name', dataType: 'string' },
            { label: 'Subject', dataField: 'subject', dataType: 'string' },
            { label: 'E-mail', dataField: 'email', dataType: 'string' },
            { label: 'Date', dataField: 'date', dataType: 'date' },
            {
                label: 'Action', dataField: 'action', formatFunction: function (settings) {
                    settings.template = '<div class="text-center"><a href="#" class="btn btn-sm btn-outline-danger"><i class="material-icons">delete</i></a><a href="#" class="btn btn-sm btn-outline-primary mx-3"><i class="material-icons">visibility</i></a></div>';
                }
            }
        ]
    }

    return (
        <div className="container dashboard3">
            <div className="row row-mx-10">
                <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
                    <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                            <div><span className="material-icons text-primary mr-3 font-size-36px">shopping_cart</span></div>
                            <div>
                                <h5 className="font-weight-bold">744</h5>
                                <h6 className="">Sales this Week</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
                    <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                            <div><span className="material-icons text-warning mr-3 font-size-36px">show_chart</span></div>
                            <div>
                                <h5 className="font-weight-bold">52.138</h5>
                                <h6 className="">Visitors this Week</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
                    <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                            <div><span className="material-icons text-success mr-3 font-size-36px">attach_money</span></div>
                            <div>
                                <h5 className="font-weight-bold">409.783</h5>
                                <h6 className="">Earnings this Week</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-px-10 mb-5 col-sm-6 col-md-6 col-lg">
                    <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                            <div><span className="material-icons text-info mr-3 font-size-36px">add_shopping_cart</span></div>
                            <div>
                                <h5 className="font-weight-bold">153</h5>
                                <h6 className="">Pending Orders</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-px-10 mb-5 col-sm-6 col-md-6 col-lg">
                    <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                            <div><span className="material-icons text-danger mr-3 font-size-36px">attach_money</span></div>
                            <div>
                                <h5 className="font-weight-bold">8.126.002</h5>
                                <h6 className="">Total Revenue</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-8 mb-5">
                    <div className="card h-100">
                        <div className="card-header border-0 pt-4 d-block d-sm-flex">
                            <div>
                                <h4 className="label">Last Orders</h4>
                                <small className="d-block text-muted">Quick management of the last 10 orders</small>
                            </div>
                            <div>
                                <ul className="nav nav-pills mt-3 mt-sm-0">
                                    <li className="nav-item">
                                        <a className="nav-link py-1 px-3 active" data-bs-toggle="tab" href="#">All</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link py-1 px-3" data-bs-toggle="tab" href="#">Waiting</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link py-1 px-3" data-bs-toggle="tab" href="#">Completed</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive" style={{ height: '375px' }}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="p-0 mw-200"></th>
                                            <th className="p-0"></th>
                                            <th className="p-0 mw-125"></th>
                                            <th className="p-0 mw-125"></th>
                                            <th className="p-0 mw-125"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pl-0 align-middle">
                                                <a href="#" className="font-weight-bold hover-text-primary mb-1">Order #12312</a>
                                                <small className="d-block">
                                                    <span className="font-weight-bold">Receiver: </span>
                                                    <a className="text-muted font-weight-bold hover-text-primary" href="#">John Doe</a>
                                                </small>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="font-weight-bold d-block">$2,320</span>
                                                <span className="text-muted font-weight-bold">Paid</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="text-muted font-weight-500">PayPal</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="smart-badge smart-badge-primary">Approved</span>
                                            </td>
                                            <td className="text-right align-middle pr-0">
                                                <a href="#" className="btn btn-sm btn-outline-danger">
                                                    <i className="material-icons">delete</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary mx-3">
                                                    <i className="material-icons">visibility</i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0 align-middle">
                                                <a href="#" className="font-weight-bold hover-text-primary mb-1">Order #12313</a>
                                                <small className="d-block">
                                                    <span className="font-weight-bold">Receiver: </span>
                                                    <a className="text-muted font-weight-bold hover-text-primary" href="#">Teresa Clark</a>
                                                </small>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="font-weight-bold d-block">$1,500</span>
                                                <span className="text-warning font-weight-bold">Unpaid</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="text-muted font-weight-500">Pay on Delivery</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="smart-badge smart-badge-warning">Waiting</span>
                                            </td>
                                            <td className="text-right align-middle pr-0">
                                                <a href="#" className="btn btn-sm btn-outline-danger">
                                                    <i className="material-icons">delete</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary mx-3">
                                                    <i className="material-icons">visibility</i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0 align-middle">
                                                <a href="#" className="font-weight-bold hover-text-primary mb-1">Order #12314</a>
                                                <small className="d-block">
                                                    <span className="font-weight-bold">Receiver: </span>
                                                    <a className="text-muted font-weight-bold hover-text-primary" href="#">Elijah Smith</a>
                                                </small>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="font-weight-bold d-block">$338</span>
                                                <span className="text-primary font-weight-bold">Refund</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="text-muted font-weight-500">Sofort</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="smart-badge smart-badge-danger">Canceled</span>
                                            </td>
                                            <td className="text-right align-middle pr-0">
                                                <a href="#" className="btn btn-sm btn-outline-danger">
                                                    <i className="material-icons">delete</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary mx-3">
                                                    <i className="material-icons">visibility</i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0 align-middle">
                                                <a href="#" className="font-weight-bold hover-text-primary mb-1">Order #12315</a>
                                                <small className="d-block">
                                                    <span className="font-weight-bold">Receiver: </span>
                                                    <a className="text-muted font-weight-bold hover-text-primary" href="#">Mark Thomas</a>
                                                </small>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="font-weight-bold d-block">$1,125</span>
                                                <span className="text-muted font-weight-bold">Paid</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="text-muted font-weight-500">Pay on Delivery</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="smart-badge smart-badge-secondary">Completed</span>
                                            </td>
                                            <td className="text-right align-middle pr-0">
                                                <a href="#" className="btn btn-sm btn-outline-danger">
                                                    <i className="material-icons">delete</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary mx-3">
                                                    <i className="material-icons">visibility</i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0 align-middle">
                                                <a href="#" className="font-weight-bold hover-text-primary mb-1">Order #12312</a>
                                                <small className="d-block">
                                                    <span className="font-weight-bold">Receiver: </span>
                                                    <a className="text-muted font-weight-bold hover-text-primary" href="#">John Doe</a>
                                                </small>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="font-weight-bold d-block">$2,320</span>
                                                <span className="text-muted font-weight-bold">Paid</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="text-muted font-weight-500">PayPal</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="smart-badge smart-badge-primary">Approved</span>
                                            </td>
                                            <td className="text-right align-middle pr-0">
                                                <a href="#" className="btn btn-sm btn-outline-danger">
                                                    <i className="material-icons">delete</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary mx-3">
                                                    <i className="material-icons">visibility</i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Traffic this month</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={sourceChartRef}
                                {...sourceChartData}
                                id="sourceChart"
                                className='combo-chart h-auto w-100'
                            >
                            </Chart>
                            <Table
                                id="sourceTable"
                                className="span-table no-border h-auto"
                                {...sourceTableData}
                            ></Table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Last messeges</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body p-0">
                            <Table
                                id="hoverableTable"
                                className="table-hover"
                                {...clientsTableData}
                            ></Table>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Popular products</h4>
                            <div className="smart-badge smart-badge-primary smart-badge-pill">Today</div>
                        </div>

                        <div className="card-body py-2">
                            <div className="feeds">
                                <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                                    <div className="col-auto col-px-5">
                                        <div className="img-as-background rounded-circle w-50px square border">
                                            <img alt="" src="assets/images/products/1.jpg" />
                                        </div>
                                    </div>

                                    <div className="col col-px-5">
                                        <div className=""><strong>Black Luxury Lamp</strong></div>
                                        <small className="text-muted">Category: Home accessories</small>
                                    </div>

                                    <div className="col-auto col-px-5">
                                        <small className="w-auto text-muted">1452 visits</small>
                                    </div>
                                </div>

                                <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                                    <div className="col-auto col-px-5">
                                        <div className="img-as-background rounded-circle w-50px square border">
                                            <img alt="" src="assets/images/products/2.jpg" />
                                        </div>
                                    </div>

                                    <div className="col col-px-5">
                                        <div className=""><strong>White chair</strong></div>
                                        <small className="text-muted">Category: Furnitures</small>
                                    </div>

                                    <div className="col-auto col-px-5">
                                        <small className="w-auto text-muted">1322 visits</small>
                                    </div>
                                </div>

                                <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                                    <div className="col-auto col-px-5">
                                        <div className="img-as-background rounded-circle w-50px square border">
                                            <img alt="" src="assets/images/products/3.jpg" />
                                        </div>
                                    </div>

                                    <div className="col col-px-5">
                                        <div className=""><strong>Fresh Flower</strong></div>
                                        <small className="text-muted">Category: Home coziness</small>
                                    </div>

                                    <div className="col-auto col-px-5">
                                        <small className="w-auto text-muted">1113 visits</small>
                                    </div>
                                </div>

                                <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                                    <div className="col-auto col-px-5">
                                        <div className="img-as-background rounded-circle w-50px square border">
                                            <img alt="" src="assets/images/products/1.jpg" />
                                        </div>
                                    </div>

                                    <div className="col col-px-5">
                                        <div className=""><strong>Black Luxury Lamp</strong></div>
                                        <small className="text-muted">Category: Home accessories</small>
                                    </div>

                                    <div className="col-auto col-px-5">
                                        <small className="w-auto text-muted">1452 visits</small>
                                    </div>
                                </div>

                                <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                                    <div className="col-auto col-px-5">
                                        <div className="img-as-background rounded-circle w-50px square border">
                                            <img alt="" src="assets/images/products/2.jpg" />
                                        </div>
                                    </div>

                                    <div className="col col-px-5">
                                        <div className=""><strong>White chair</strong></div>
                                        <small className="text-muted">Category: Furnitures</small>
                                    </div>

                                    <div className="col-auto col-px-5">
                                        <small className="w-auto text-muted">1322 visits</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Dashboard3)