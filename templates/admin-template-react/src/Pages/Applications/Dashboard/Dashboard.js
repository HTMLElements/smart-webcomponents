import './Dashboard.scss';

import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, ButtonGroup, Chart, ProgressBar, Table } from '../../../smartImports';

import { useThemeContext, defaultTitle } from '../../../contexts/themeContext';

const salesData = [
    { month: 'Jan', sales: 22330, orders: 9302 },
    { month: 'Feb', sales: 21323, orders: 8902 },
    { month: 'Mar', sales: 28200, orders: 10043 },
    { month: 'Apr', sales: 31889, orders: 10992 },
    { month: 'May', sales: 30056, orders: 9980 },
    { month: 'Jun', sales: 42024, orders: 13489 },
    { month: 'Jul', sales: 44995, orders: 19048 },
    { month: 'Aug', sales: 41045, orders: 12334 },
    { month: 'Sep', sales: 38012, orders: 11102 },
    { month: 'Oct', sales: 40045, orders: 11894 },
    { month: 'Nov', sales: 27542, orders: 8301 },
    { month: 'Dec', sales: 29012, orders: 10632 }
];
const reportData = [
    { id: 1, name: 'Ruby', startDate: new Date(2019, 3, 4), status: 'Sale', price: '$24' },
    { id: 2, name: 'Diamond', startDate: new Date(2018, 0, 14), status: 'Extended', price: '$1250' },
    { id: 3, name: 'Alexandrite', startDate: new Date(2020, 8, 1), status: 'Extended', price: '$1250' },
    { id: 4, name: 'Blue Sapphire', startDate: new Date(2019, 3, 19), status: 'Tax', price: '$25' },
    { id: 5, name: 'Tanzanite', startDate: new Date(2009, 11, 11), status: 'Sale', price: '$19' },
    { id: 6, name: 'Pink sapphire', startDate: new Date(2020, 8, 24), status: 'Sale', price: '$200' },
    { id: 7, name: 'Aquamarine', startDate: new Date(2020, 2, 30), status: 'Done', price: '$245' },
    { id: 8, name: 'Violet Sapphire', startDate: new Date(2017, 5, 23), status: 'Done', price: '$199' },
    { id: 9, name: 'Tourmaline', startDate: new Date(2020, 1, 1), status: 'In progress', price: '$1205' },
    { id: 10, name: 'Heliodor', startDate: new Date(2019, 3, 4), status: 'Done', price: '$199' },
    { id: 11, name: 'Red beryl', startDate: new Date(2020, 5, 1), status: 'In progress', price: '$5' }
];

function Dashboard({ openTodayMenu }) {

    const { themeObj, customColors } = useThemeContext();

    const revenueChartRef = useRef(null);

    useEffect(() => { document.title = defaultTitle }, []);

    useEffect(() => {

        if (customColors) {
            revenueChartRef?.current.addColorScheme('custom', customColors);
            revenueChartRef?.current.refresh();
        }

    }, [customColors]);

    const revenueChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        padding: { left: 5, top: 15, right: 25, bottom: 5 },
        dataSource: salesData,
        xAxis: {
            dataField: 'month',
            displayText: 'Month'
        },
        colorScheme: 'custom',
        seriesGroups: [
            {
                type: 'splinearea',
                valueAxis: {
                    labels: {
                        horizontalAlignment: 'right',
                        formatSettings: { decimalPlaces: 0 }
                    },
                    gridLines: {
                        visible: false
                    }
                },
                series: [
                    { dataField: 'sales', displayText: 'Sales ($)', symbolSize: 8, symbolType: 'circle' },
                    { dataField: 'orders', displayText: 'Orders', symbolSize: 8, symbolType: 'circle', dashStyle: '5,4' }
                ]
            }
        ]
    }

    const reportTableData = {
        dataSource: reportData,
        freezeHeader: true,
        paging: false,
        pageSize: 10,
        tooltip: true,
        columns: [
            { label: '#', dataField: 'id', dataType: 'number', width: '50px' },
            { label: 'Name', dataField: 'name', dataType: 'string' },
            {
                label: 'Status', dataField: 'status', dataType: 'string', formatFunction(settings) {
                    const value = settings.value;

                    settings.template = `<span class="smart-badge ${value.replace(' ', '-').toLowerCase()}"">${value}</span>`;
                }
            },
            { label: 'Date', dataField: 'startDate', dataType: 'date' },
            { label: 'Price', dataField: 'price', dataType: 'string' }
        ]
    }

    return (
        <div className="container dashboard">
            <div className="row row-mx-10">
                <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
                    <div className="card h-100 bg-primary text-white text-center">
                        <div className="card-body">
                            <h2>2,064</h2>
                            <h6 className="">Sessions</h6>
                        </div>
                    </div>
                </div>
                <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
                    <div className="card h-100 bg-info text-white text-center">
                        <div className="card-body">
                            <h2>1,738</h2>
                            <h6 className="">Users</h6>
                        </div>
                    </div>
                </div>
                <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
                    <div className="card h-100 bg-success text-white text-center">
                        <div className="card-body">
                            <h2>5963</h2>
                            <h6 className="">Page Views</h6>
                        </div>
                    </div>
                </div>
                <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
                    <div className="card h-100 bg-warning text-white text-center">
                        <div className="card-body">
                            <h2>10%</h2>
                            <h6 className="">Bounce Rate</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card h-100 mb-6">
                <div className="row">
                    <div className="col-lg-5 col-xl-4 mb-5 mb-lg-0 border-right">
                        <div className="card h-100 bg-transparent shadow-0">
                            <div className="card-header">
                                <div>
                                    <h5 className="pt-3">Welcome Steave</h5>
                                    <p className="mb-0">you have 4 new messages</p>
                                </div>
                            </div>

                            <div className="card-body maxh-350 py-2">
                                <div className="feeds">
                                    <div className="row row-mx-5 hover-text-primary border-bottom hover-bg-light py-2">
                                        <div className="col-auto col-px-5">
                                            <div className="img-as-background rounded-circle w-50px square border">
                                                <img alt='' src="assets/images/phonebook/mark.png" />
                                            </div>
                                        </div>

                                        <div className="col col-px-5">
                                            <div className=""><strong>Frederick Murphy</strong></div>
                                            <small className="text-muted mb-0 d-block">Just see the new Admin!</small>
                                            <small className="text-muted">Today 8:19 PM</small>
                                        </div>
                                    </div>

                                    <div className="row row-mx-5 hover-text-primary border-bottom hover-bg-light py-2">
                                        <div className="col-auto col-px-5">
                                            <div className="img-as-background rounded-circle w-50px square border">
                                                <img alt='' src="assets/images/phonebook/maria.png" />
                                            </div>
                                        </div>

                                        <div className="col col-px-5">
                                            <div className=""><strong>Elisha Scott</strong></div>
                                            <small className="text-muted mb-0 d-block">I've sing a song! See you at</small>
                                            <small className="text-muted">Today 10:45 PM</small>
                                        </div>
                                    </div>

                                    <div className="row row-mx-5 hover-text-primary border-bottom hover-bg-light py-2">
                                        <div className="col-auto col-px-5">
                                            <div className="img-as-background rounded-circle w-50px square border">
                                                <img alt='' src="assets/images/phonebook/johnny.png" />
                                            </div>
                                        </div>

                                        <div className="col col-px-5">
                                            <div className=""><strong>John Doe</strong></div>
                                            <small className="text-muted mb-0 d-block">I am a singer!</small>
                                            <small className="text-muted">8 hours ago</small>
                                        </div>
                                    </div>

                                    <div className="row row-mx-5 hover-text-primary border-bottom hover-bg-light py-2">
                                        <div className="col-auto col-px-5">
                                            <div className="img-as-background rounded-circle w-50px square border">
                                                <img alt='' src="assets/images/phonebook/toni.png" />
                                            </div>
                                        </div>

                                        <div className="col col-px-5">
                                            <div className=""><strong>Sonu Nigan</strong></div>
                                            <small className="text-muted mb-0 d-block">Let's go to the coffe!</small>
                                            <small className="text-muted">12 hours ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-xl-8 mb-5 mb-lg-0">
                        <div className="card h-100 bg-transparent shadow-0">
                            <div className="card-header">
                                <h4 className="label pt-3">Product Calculation</h4>
                                <div className="smart-badge smart-badge-primary smart-badge-pill">Monthly</div>
                            </div>
                            <div className="card-body maxh-375">
                                <Chart
                                    {...revenueChartData}
                                    ref={revenueChartRef}
                                    id="revenueChart"
                                    className='h-100 w-100 border-0'
                                >
                                </Chart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-6">
                <div className="col-lg-6 d-flex align-items-stretch">
                    <div className="card w-100" style={{ maxHeight: '620px' }}>
                        <div className="card-header">
                            <div>
                                <h5 className="pt-3">Members Activity</h5>
                                <h6 className="text-muted mt-1">what members preformance status</h6>
                            </div>

                            <ButtonGroup className="small primary" dataSource={["Today", "Week", "Month"]}></ButtonGroup>
                        </div>

                        <div className="card-body py-0">
                            <div className="table-responsive mt-3">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom" style={{ width: '220px' }}> Member</th>
                                            <th className="border-bottom text-center">Earnings</th>
                                            <th className="border-bottom text-center">Posts</th>
                                            <th className="border-bottom text-center">Team</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="img-as-background w-40px h-40px rounded">
                                                        <img src="assets/images/phonebook/maria.png" alt="user" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <a href="#" className="d-block">Kevin Peter</a>
                                                        <span className="smart-badge smart-badge-success">designer</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center"> $325</td>
                                            <td className="text-muted text-center"> 45</td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="#" className="btn btn-info btn-rounded btn-sm text-white px-3 mx-1 font-weight-bolder w-35px h-35px">A</a>
                                                    <a href="#" className="btn btn-danger btn-rounded btn-sm text-white px-3 mx-1 font-weight-bolder w-35px h-35px">T</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="img-as-background w-40px h-40px rounded">
                                                        <img src="assets/images/phonebook/toni.png" alt="user" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <a href="#" className="d-block">John Smith</a>
                                                        <span className="smart-badge smart-badge-danger">developer</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center"> $225</td>
                                            <td className="text-muted text-center"> 35</td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center button-group">
                                                    <a href="#" className="btn btn-warning btn-rounded btn-sm text-white px-3 mx-1 font-weight-bolder w-35px h-35px">S</a>
                                                    <a href="#" className="btn btn-primary btn-rounded btn-sm text-white px-3 mx-1 font-weight-bolder w-35px h-35px">V</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="img-as-background w-40px h-40px rounded">
                                                        <img src="assets/images/phonebook/johnny.png" alt="user" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <a href="#" className="d-block">Harry Peter</a>
                                                        <span className="smart-badge smart-badge-primary">manager</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center"> $185</td>
                                            <td className="text-muted text-center"> 28</td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center button-group">
                                                    <a href="#" className="btn btn-success btn-rounded btn-sm text-white px-3 mx-1 font-weight-bolder w-35px h-35px">B</a>
                                                    <a href="#" className="btn btn-info btn-rounded btn-sm text-white px-3 mx-1 font-weight-bolder w-35px h-35px">M</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="img-as-background w-40px h-40px rounded">
                                                        <img src="assets/images/phonebook/mark.png" alt="user" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <a href="#" className="d-block">James Deo</a>
                                                        <span className="smart-badge smart-badge-success">designer</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center"> $125</td>
                                            <td className="text-muted text-center"> 25</td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center button-group">
                                                    <a href="#" className="btn btn-primary btn-rounded btn-sm text-white px-3 mx-1 font-weight-bolder w-35px h-35px">K</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="img-as-background w-40px h-40px rounded">
                                                        <img src="assets/images/phonebook/monica.png" alt="user" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <a href="#" className="d-block">Willium Deo</a>
                                                        <span className="smart-badge smart-badge-danger">developer</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center"> $225</td>
                                            <td className="text-muted text-center"> 35</td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center button-group">
                                                    <a href="#" className="btn btn-danger btn-rounded btn-sm text-white px-3 mx-1 font-weight-bolder w-35px h-35px">L</a>
                                                    <a href="#" className="btn btn-info btn-rounded btn-sm text-white px-3 mx-1 font-weight-bolder w-35px h-35px">J</a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center mb-3">
                                    <Button className="success small">Load more</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 d-flex align-items-stretch">
                    <div className="card w-100" style={{ maxHeight: "620px" }}>
                        <div className="card-header">
                            <div>
                                <h5 className="pt-3">Customer Support</h5>
                                <h6 className="text-muted mt-1">24 new support ticket request generate</h6>
                            </div>
                        </div>

                        <div className="position-relative overflow-auto mb-2">

                            <div className="d-flex flex-row p-2 p-md-3 hover-bg-light">
                                <div className="p-1 p-md-2"><span className="img-as-background w-50px square rounded-circle d-inline-block text-center"><img alt='' src="assets/images/phonebook/maria.png" /></span></div>
                                <div className="w-100 py-1 py-md-3 pr-md-3 pl-md-4 px-2">
                                    <h6 className="font-weight-medium">James Anderson</h6>
                                    <p className="mb-1 font-size-16px text-muted">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                    <div className="d-md-flex align-items-center justify-content-between mt-3">
                                        <div className="d-flex align-items-center">
                                            <span className="smart-badge smart-badge-info mr-3">Pending</span>
                                            <div>
                                                <a href="#" className="text-secondary" data-bs-toggle="tooltip" title="Edit"><span className="material-icons font-size-16px">edit</span></a>
                                                <a href="#" className="text-secondary" data-bs-toggle="tooltip" title="Remove"><span className="material-icons font-size-16px">highlight_off</span></a>
                                                <a href="#" className="text-danger" data-bs-toggle="tooltip" title="Add to favorites"><span className="material-icons font-size-16px">favorite_border</span></a>
                                            </div>
                                        </div>
                                        <small className="text-muted d-block">April 14, 2016</small>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row p-2 p-md-3 hover-bg-light">
                                <div className="p-1 p-md-2"><span className="img-as-background w-50px square rounded-circle d-inline-block text-center"><img alt='' src="assets/images/phonebook/johnny.png" /></span></div>
                                <div className="w-100 py-1 py-md-3 pr-md-3 pl-md-4 px-2">
                                    <h6 className="font-weight-medium">Michael Jorden</h6>
                                    <p className="mb-1 font-size-16px text-muted">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                    <div className="d-md-flex align-items-center justify-content-between mt-3">
                                        <div className="d-flex align-items-center">
                                            <span className="smart-badge smart-badge-success mr-3">Approved</span>
                                            <div>
                                                <a href="#" className="text-secondary" data-bs-toggle="tooltip" title="Edit"><span className="material-icons font-size-16px">edit</span></a>
                                                <a href="#" className="text-secondary" data-bs-toggle="tooltip" title="Remove"><span className="material-icons font-size-16px">highlight_off</span></a>
                                                <a href="#" className="text-danger" data-bs-toggle="tooltip" title="Add to favorites"><span className="material-icons font-size-16px">favorite_border</span></a>
                                            </div>
                                        </div>
                                        <small className="text-muted d-block">April 14, 2016</small>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row p-2 p-md-3 hover-bg-light">
                                <div className="p-1 p-md-2"><span className="img-as-background w-50px square rounded-circle d-inline-block text-center"><img alt='' src="assets/images/phonebook/mark.png" /></span></div>
                                <div className="w-100 py-1 py-md-3 pr-md-3 pl-md-4 px-2">
                                    <h6 className="font-weight-medium">Johnathan Doeting</h6>
                                    <p className="mb-1 font-size-16px text-muted">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                    <div className="d-md-flex align-items-center justify-content-between mt-3">
                                        <div className="d-flex align-items-center">
                                            <span className="smart-badge smart-badge-error mr-3">Rejected</span>
                                            <div>
                                                <a href="#" className="text-secondary" data-bs-toggle="tooltip" title="Edit"><span className="material-icons font-size-16px">edit</span></a>
                                                <a href="#" className="text-secondary" data-bs-toggle="tooltip" title="Approve"><span className="material-icons font-size-16px">check</span></a>
                                                <a href="#" className="text-danger" data-bs-toggle="tooltip" title="Add to favorites"><span className="material-icons font-size-16px">favorite_border</span></a>
                                            </div>
                                        </div>
                                        <small className="text-muted d-block">April 14, 2016</small>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row p-2 p-md-3 hover-bg-light">
                                <div className="p-1 p-md-2"><span className="img-as-background w-50px square rounded-circle d-inline-block text-center"><img alt='' src="assets/images/phonebook/mark.png" /></span></div>
                                <div className="w-100 py-1 py-md-3 pr-md-3 pl-md-4 px-2">
                                    <h6 className="font-weight-medium">James Anderson</h6>
                                    <p className="mb-1 font-size-16px text-muted">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                    <div className="d-md-flex align-items-center justify-content-between mt-3">
                                        <div className="d-flex align-items-center">
                                            <span className="smart-badge smart-badge-info mr-3">Pending</span>
                                            <div>
                                                <a href="#" className="text-secondary" data-bs-toggle="tooltip" title="Edit"><span className="material-icons font-size-16px">edit</span></a>
                                                <a href="#" className="text-secondary" data-bs-toggle="tooltip" title="Remove"><span className="material-icons font-size-16px">highlight_off</span></a>
                                                <a href="#" className="text-danger" data-bs-toggle="tooltip" title="Add to favorites"><span className="material-icons font-size-16px">favorite_border</span></a>
                                            </div>
                                        </div>
                                        <small className="text-muted d-block">April 14, 2016</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-6">
                <div className="col-lg-4 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <div>
                                <h5 className="pt-3">Today's Schedule</h5>
                                <h6 className="text-muted mt-1">Check out your daily schedule</h6>
                            </div>
                        </div>

                        <div className="card-body maxh-400 py-2">
                            <div className="feeds pt-7">
                                <div className="feed pl-5">
                                    <div className="border-bottom border-left">
                                        <div className="row row-mx-5 pb-3 feed-borders-negative-margin">
                                            <div className="col-auto col-px-5">
                                                <div className="img-as-background rounded-circle w-40px square border">
                                                    <img alt='' src="assets/images/phonebook/michael.png" />
                                                </div>
                                            </div>

                                            <div className="col col-px-5">
                                                <strong>John Doe</strong> <small>5 minutes ago</small>
                                                <p className="text-muted">Call today with John Doe</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="feed pl-5">
                                    <div className="border-bottom border-left">
                                        <div className="row row-mx-5 pb-3 feed-borders-negative-margin">
                                            <div className="col-auto col-px-5">
                                                <div className="bg-danger rounded-circle h-40px w-40px square border d-inline-flex align-items-center justify-content-center">
                                                    <span className="material-icons text-white">shopping_cart</span>
                                                </div>
                                            </div>

                                            <div className="col col-px-5">
                                                <strong>Shopping today</strong> <small>6 pm</small>
                                                <p className="text-muted">Go to buy a office equipment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="feed pl-5">
                                    <div className="border-bottom border-left">
                                        <div className="row row-mx-5 pb-3 feed-borders-negative-margin">
                                            <div className="col-auto col-px-5">
                                                <div className="img-as-background rounded-circle w-40px square border">
                                                    <img alt='' src="assets/images/phonebook/monica.png" />
                                                </div>
                                            </div>

                                            <div className="col col-px-5">
                                                <strong>Monica Belluci</strong> <small>7 pm</small>
                                                <p className="text-muted">Meet Monica to discuss the employment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="feed pl-5">
                                    <div className="border-bottom border-left">
                                        <div className="row row-mx-5 pb-3 feed-borders-negative-margin">
                                            <div className="col-auto col-px-5">
                                                <div className="bg-primary rounded-circle h-40px w-40px square border d-inline-flex align-items-center justify-content-center">
                                                    <span className="material-icons text-white">picture_as_pdf</span>
                                                </div>
                                            </div>

                                            <div className="col col-px-5">
                                                <strong>Send documents to Clark</strong>
                                                <p className="text-muted">Lorem Ipsum is simply</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button id="loadMore" className="primary smart-element smart-button">Load more</Button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <div>
                                <h5 className="pt-3">Sales Overview</h5>
                                <h6 className="text-muted mt-1">Check the monthly sales</h6>
                            </div>

                            <ButtonGroup className="small primary" data-source='["Today","Week","Month"]'></ButtonGroup>
                        </div>

                        <div className="bg-secondary-opacity-1 p-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mb-0">March 2021</h4>
                                    <h6 className="mt-0 text-muted">Report for this month</h6>
                                </div>

                                <div className="col-md-6 d-flex justify-content-start justify-content-md-end align-self-center text-right text-md-right">
                                    <span className="text-primary font-size-26px">$3,690</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <Table
                                id="reportTable"
                                className="no-border table-hover maxh-300"
                                dataSource={reportTableData.dataSource}
                                freezeHeader={reportTableData.freezeHeader}
                                paging={reportTableData.paging}
                                pageSize={reportTableData.pageSize}
                                tooltip={reportTableData.tooltip}
                                columns={reportTableData.columns}
                            ></Table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-6">
                <div className="col-md-6 col-lg-3 mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-start">
                                <div className="bg-warning-opacity-2 text-warning d-inline-block px-4 py-3 rounded">
                                    <i className="fab fa-google-drive font-size-32px"></i>
                                </div>

                                <div className="ml-auto">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openTodayMenu(e);
                                        }}
                                        onPointerUp={(e) => e.stopPropagation()}
                                        className="settings-button"
                                    >
                                        <span className="material-icons">more_horiz</span>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h5>Google Drive</h5>
                                <ProgressBar value={91} className="warning mt-4"></ProgressBar>

                                <div className="d-flex align-items-center mt-2 font-weight-bold justify-content-between">
                                    <span>13.1Gb</span>
                                    <span>15Gb</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-start">
                                <div className="bg-info-opacity-2 text-info d-inline-block px-4 py-3 rounded">
                                    <i className="fab fa-dropbox font-size-32px"></i>
                                </div>

                                <div className="ml-auto">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openTodayMenu(e);
                                        }}
                                        onPointerUp={(e) => e.stopPropagation()}
                                        className="settings-button"
                                    ><span className="material-icons">more_horiz</span>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h5>Dropbox</h5>
                                <ProgressBar value={50} className="info mt-4"></ProgressBar>

                                <div className="d-flex align-items-center mt-2 font-weight-bold justify-content-between">
                                    <span>7.5Gb</span>
                                    <span>15Gb</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-start">
                                <div className="bg-danger-opacity-2 text-danger d-inline-block px-4 py-3 rounded">
                                    <i className="fab fa-soundcloud font-size-32px"></i>
                                </div>

                                <div className="ml-auto">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openTodayMenu(e);
                                        }}
                                        onPointerUp={(e) => e.stopPropagation()}
                                        className="settings-button"
                                    >
                                        <span className="material-icons">more_horiz</span>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h5>One Drive</h5>
                                <ProgressBar value={25} className="error mt-4"></ProgressBar>

                                <div className="d-flex align-items-center mt-2 font-weight-bold justify-content-between">
                                    <span>2Gb</span>
                                    <span>15Gb</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-start">
                                <div className="bg-primary-opacity-2 text-primary d-inline-block px-4 py-3 rounded">
                                    <i className="fab fa-amazon font-size-32px"></i>
                                </div>

                                <div className="ml-auto">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openTodayMenu(e);
                                        }}
                                        onPointerUp={(e) => e.stopPropagation()}
                                        className="settings-button"
                                    >
                                        <span className="material-icons">more_horiz</span>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h5>Amazon</h5>
                                <ProgressBar value={85} className="danger mt-4"></ProgressBar>

                                <div className="d-flex align-items-center mt-2 font-weight-bold justify-content-between">
                                    <span>4Gb</span>
                                    <span>15Gb</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default withAnimation(Dashboard)