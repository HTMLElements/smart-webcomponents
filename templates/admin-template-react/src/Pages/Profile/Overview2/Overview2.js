import React from 'react'

import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, ProgressBar, CircularProgressBar, Chart } from '../../../smartImports';

import { useThemeContext, defaultTitle } from '../../../contexts/themeContext';

function Overview2({ openTodayMenu }) {

    const salesData = [
        { month: 'Jan', sales: 22330, orders: 19302 },
        { month: 'Feb', sales: 31323, orders: 18902 },
        { month: 'Mar', sales: 68200, orders: 95043 },
        { month: 'Apr', sales: 31889, orders: 10992 },
        { month: 'May', sales: 30056, orders: 9980 },
        { month: 'Jun', sales: 112024, orders: 13489 },
        { month: 'Jul', sales: 94995, orders: 19048 },
        { month: 'Aug', sales: 71045, orders: 12334 },
        { month: 'Sep', sales: 48012, orders: 11102 },
        { month: 'Oct', sales: 40045, orders: 11894 },
        { month: 'Nov', sales: 47542, orders: 50301 },
        { month: 'Dec', sales: 39012, orders: 70632 }
    ]

    const { themeObj, customColors } = useThemeContext();

    const revenueChartRef = useRef(null);

    useEffect(() => { document.title = `Profile 2 - ${defaultTitle}` }, []);

    useEffect(() => {

        if (customColors) {

            revenueChartRef?.current?.addColorScheme('custom', customColors);
            revenueChartRef?.current?.refresh();

        }

    }, [customColors]);

    const revenueChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        enableCrosshairs: false,
        padding: { left: 5, top: 0, right: 0, bottom: 40 },
        dataSource: salesData,
        xAxis: {
            dataField: 'month',
            displayText: 'Month',
            visible: true,
            gridLines: {
                visible: false
            }
        },
        colorScheme: 'scheme29',
        seriesGroups: [
            {
                type: 'splinearea',
                valueAxis: {
                    labels: {
                        horizontalAlignment: 'right',
                        formatSettings: { decimalPlaces: 0 }
                    },
                    visible: true,
                    gridLines: {
                        visible: true
                    }
                },
                series: [
                    { dataField: 'sales', displayText: 'Sales ($)', symbolSize: 8 },
                    { dataField: 'orders', displayText: 'Orders ($)', symbolSize: 8 }
                ]
            }
        ]
    }

    return (
        <div className="container" >
            <div className="card mb-5">
                <div className="card-body">
                    <div className="row mb-6">
                        <div className="col-md-auto mr-2 mt-lg-0 mt-3">
                            <div className="img-as-background w-125 square rounded mx-auto mx-sm-0">
                                <img src="assets/images/people/mark.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="d-flex justify-content-between flex-wrap mt-1">
                                <div className="d-flex align-items-center mr-3">
                                    <h5 className="mr-2"><a href="#" className="text-black hover-text-primary font-weight-500">John Doe</a></h5>
                                    <a href="#"><i className="material-icons text-success font-size-18px">beenhere</i></a>
                                </div>
                                <div className="my-lg-0 my-3">
                                    <Button className="success very-small">ASK</Button>&nbsp;<Button className="info very-small">HIRE</Button>
                                </div>
                            </div>

                            <div className="row justify-content-between mt-1">
                                <div className="col-lg-6 col-xl-8">
                                    <div className="d-flex flex-wrap mb-4">
                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">email</i> j.doe@mailinator.com
                                        </a>

                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">account_box</i> PR Manager
                                        </a>

                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">place</i> Melbourne
                                        </a>
                                    </div>

                                    <p>I distinguish three main text objectives could be merely to inform people. <br /> A second could be persuade people.You want people to bay objective</p>
                                </div>
                                <div className="col-lg-6 col-xl-4 d-flex align-items-end">
                                    <div className="d-flex align-items-center w-100">
                                        <span className="font-weight-bold">Progress</span>

                                        <div className="mx-3 w-100">
                                            <ProgressBar value={74} className=""></ProgressBar>
                                        </div>
                                        <span className="font-weight-bold text-dark">78%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex align-items-center flex-wrap mt-5">
                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">point_of_sale</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Earnings</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>249,500</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">attach_money</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Expenses</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>164,700</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">insights</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Net</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>782,300</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">sticky_note_2</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">73 Tasks</small>
                                <a href="#" className="text-primary font-weight-500">View</a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">comment</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">648 Comments</small>
                                <a href="#" className="text-primary font-weight-500">View</a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mb-2 float-left">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">group</i>
                            </span>

                            <div className="members d-flex">
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Mark Stone">
                                    <img alt="Pic" src="assets/images/phonebook/andrew.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Charlie Stone" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/johnny.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Luca Doncic" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/mark.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Nick Mana" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/steven.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Teresa Fox" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/janet.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 h-30px rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{ marginLeft: '-10px', zIndex: 9 }}>
                                    <small>9+</small>
                                </div>
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
                                <h4 className="label">New Arrivals</h4>
                                <small className="d-block text-muted">More than 400+ new members</small>
                            </div>
                            <div>
                                <ul className="nav nav-pills mt-3 mt-sm-0">
                                    <li className="nav-item">
                                        <a className="nav-link py-1 px-3 active" data-bs-toggle="tab" href="#">Month</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link py-1 px-3" data-bs-toggle="tab" href="#">Week</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link py-1 px-3" data-bs-toggle="tab" href="#">Day</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="p-0 w-40px"></th>
                                            <th className="p-0 mw-200"></th>
                                            <th className="p-0"></th>
                                            <th className="p-0 mw-125"></th>
                                            <th className="p-0 mw-125"></th>
                                            <th className="p-0 mw-175"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pl-0 align-middle">
                                                <div className="w-50px p-2 square mr-1 bg-light rounded d-flex align-item-center justify-content-center">
                                                    <img src="assets/images/brands/circle-google.png" className="w-100" alt="" />
                                                </div>
                                            </td>
                                            <td className="pl-0 align-middle">
                                                <a href="#" className="font-weight-bold hover-text-primary mb-1">Sant Outstanding</a>
                                                <div>
                                                    <span className="font-weight-bold">Email: </span>
                                                    <a className="text-muted font-weight-bold hover-text-primary" href="#">bprow@bnc.cc</a>
                                                </div>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="font-weight-bold d-block">$2,000,000</span>
                                                <span className="text-muted font-weight-bold">Paid</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="text-muted font-weight-500">ReactJs, HTML</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="smart-badge smart-badge-primary">Approved</span>
                                            </td>
                                            <td className="text-right align-middle pr-0">
                                                <a href="#" className="btn btn-sm btn-outline-primary">
                                                    <i className="material-icons">toggle_on</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary mx-3">
                                                    <i className="material-icons">edit</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary">
                                                    <i className="material-icons">delete</i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0 align-middle">
                                                <div className="w-50px p-2 square mr-1 bg-light rounded d-flex align-item-center justify-content-center">
                                                    <img src="assets/images/brands/circle-jqwidgets.png" className="w-100" alt="" />
                                                </div>
                                            </td>
                                            <td className="pl-0 align-middle">
                                                <a href="#" className="font-weight-bold hover-text-primary mb-1">Application Development</a>
                                                <div>
                                                    <span className="font-weight-bold">Email: </span>
                                                    <a className="text-muted font-weight-bold hover-text-primary" href="#">app@dev.com</a>
                                                </div>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="font-weight-bold d-block">$4,600,000</span>
                                                <span className="text-muted font-weight-bold">Paid</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="text-muted font-weight-500">Python, MySQL</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="smart-badge smart-badge-warning">In Progress</span>
                                            </td>
                                            <td className="text-right align-middle pr-0">
                                                <a href="#" className="btn btn-sm btn-outline-primary">
                                                    <i className="material-icons">toggle_on</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary mx-3">
                                                    <i className="material-icons">edit</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary">
                                                    <i className="material-icons">delete</i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0 align-middle">
                                                <div className="w-50px p-2 square mr-1 bg-light rounded d-flex align-item-center justify-content-center">
                                                    <img src="assets/images/brands/circle-htmlelements.png" className="w-100" alt="" />
                                                </div>
                                            </td>
                                            <td className="pl-0 align-middle">
                                                <a href="#" className="font-weight-bold hover-text-primary mb-1">Payrol Application</a>
                                                <div>
                                                    <span className="font-weight-bold">Email: </span>
                                                    <a className="text-muted font-weight-bold hover-text-primary" href="#">company@dev.com</a>
                                                </div>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="font-weight-bold d-block">$560,000</span>
                                                <span className="text-muted font-weight-bold">Paid</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="text-muted font-weight-500">Laravel, Metronic</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="smart-badge smart-badge-success">Success</span>
                                            </td>
                                            <td className="text-right align-middle pr-0">
                                                <a href="#" className="btn btn-sm btn-outline-primary">
                                                    <i className="material-icons">toggle_on</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary mx-3">
                                                    <i className="material-icons">edit</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary">
                                                    <i className="material-icons">delete</i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0 align-middle">
                                                <div className="w-50px p-2 square mr-1 bg-light rounded d-flex align-item-center justify-content-center">
                                                    <img src="assets/images/brands/circle-google.png" className="w-100" alt="" />
                                                </div>
                                            </td>
                                            <td className="pl-0 align-middle">
                                                <a href="#" className="font-weight-bold hover-text-primary mb-1">HR Management System</a>
                                                <div>
                                                    <span className="font-weight-bold">Email: </span>
                                                    <a className="text-muted font-weight-bold hover-text-primary" href="#">hr@demo.com</a>
                                                </div>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="font-weight-bold d-block">$57,000</span>
                                                <span className="text-muted font-weight-bold">Paid</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="text-muted font-weight-bold">AngularJS, C#</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="smart-badge smart-badge-danger">Rejected</span>
                                            </td>
                                            <td className="text-right align-middle pr-0">
                                                <a href="#" className="btn btn-sm btn-outline-primary">
                                                    <i className="material-icons">toggle_on</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary mx-3">
                                                    <i className="material-icons">edit</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary">
                                                    <i className="material-icons">delete</i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0 align-middle">
                                                <div className="w-50px p-2 square mr-1 bg-light rounded d-flex align-item-center justify-content-center">
                                                    <img src="assets/images/brands/circle-angular.svg" className="w-100" alt="" />
                                                </div>
                                            </td>
                                            <td className="pl-0 align-middle">
                                                <a href="#" className="font-weight-bold hover-text-primary mb-1">KTR Mobile Application</a>
                                                <div>
                                                    <span className="font-weight-bold">Email: </span>
                                                    <a className="text-muted font-weight-bold hover-text-primary" href="#">ktr@demo.com</a>
                                                </div>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="font-weight-bold d-block">$45,200,000</span>
                                                <span className="text-muted font-weight-bold">Paid</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="text-muted font-weight-500">ReactJS, Ruby</span>
                                            </td>
                                            <td className="text-right align-middle">
                                                <span className="smart-badge smart-badge-warning">In Progress</span>
                                            </td>
                                            <td className="text-right align-middle pr-0">
                                                <a href="#" className="btn btn-sm btn-outline-primary">
                                                    <i className="material-icons">toggle_on</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary mx-3">
                                                    <i className="material-icons">edit</i>
                                                </a>&nbsp;<a href="#" className="btn btn-sm btn-outline-primary">
                                                    <i className="material-icons">delete</i>
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
                        <div className="card-header border-0 pt-4">
                            <h4 className="label">Action Needed</h4>

                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body d-flex align-items-center justify-content-between flex-column">
                            <div></div>
                            <CircularProgressBar className="w-125 h-125" value={75} show-progress-value></CircularProgressBar>
                            <div>
                                <p className="text-center mt-5">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print or graphic.</p>
                                <Button className="w-100">Generate Report</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header border-0 pt-4 d-block d-sm-flex">
                            <div>
                                <h4 className="label">Recent Orders</h4>
                                <small className="d-block text-muted">More than 500+ new orders</small>
                            </div>
                            <div>
                                <ul className="nav nav-pills mt-3 mt-sm-0">
                                    <li className="nav-item">
                                        <a className="nav-link py-1 px-3 active" data-bs-toggle="tab" href="#">Month</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link py-1 px-3" data-bs-toggle="tab" href="#">Week</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link py-1 px-3" data-bs-toggle="tab" href="#">Day</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={revenueChartRef}
                                {...revenueChartData}
                                id="revenueChart"
                                className='h-100 w-100 border-0'
                            >
                            </Chart>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header border-0 pt-4">
                            <h4 className="label">Trends</h4>

                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex align-items-center bg-warning-opacity-3 rounded p-4 mb-5">
                                <i className="material-icons mr-4 text-warning">rule</i>

                                <div className="d-flex flex-column flex-grow-1 mr-2">
                                    <a href="#" className="text-black font-weight-bold hover-text-primary mb-1">Group lunch celebration</a>
                                    <span className="text-muted">Due in 2 Days</span>
                                </div>

                                <span className="text-warning py-1 font-weight-bold">+28%</span>
                            </div>

                            <div className="d-flex align-items-center bg-success-opacity-3 rounded p-4 mb-5">
                                <i className="material-icons mr-4 text-success">rule</i>

                                <div className="d-flex flex-column flex-grow-1 mr-2">
                                    <a href="#" className="text-black font-weight-bold hover-text-primary mb-1">Home navigation optimization</a>
                                    <span className="text-muted">Due in 2 Days</span>
                                </div>

                                <span className="text-success py-1 font-weight-bold">+50%</span>
                            </div>

                            <div className="d-flex align-items-center bg-danger-opacity-3 rounded p-4 mb-5">
                                <i className="material-icons mr-4 text-danger">rule</i>

                                <div className="d-flex flex-column flex-grow-1 mr-2">
                                    <a href="#" className="text-black font-weight-bold hover-text-primary mb-1">Rebrand strategy planning</a>
                                    <span className="text-muted">Due in 2 Days</span>
                                </div>

                                <span className="text-danger py-1 font-weight-bold">-27%</span>
                            </div>

                            <div className="d-flex align-items-center bg-info-opacity-3 rounded p-4">
                                <i className="material-icons mr-4 text-info">rule</i>

                                <div className="d-flex flex-column flex-grow-1 mr-2">
                                    <a href="#" className="text-black font-weight-bold hover-text-primary mb-1">Product goals strategy meet-up</a>
                                    <span className="text-muted">Due in 2 Days</span>
                                </div>

                                <span className="text-info py-1 font-weight-bold">+8%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default withAnimation(Overview2)