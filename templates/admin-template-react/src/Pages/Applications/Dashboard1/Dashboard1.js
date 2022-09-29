import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, Chart, Table, Calendar } from '../../../smartImports';

import { defaultTitle, useThemeContext } from '../../../contexts/themeContext';

function Dashboard1({ openTodayMenu }) {

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

    const weeklyData = [
        { market: 'Direct', revenue: 2873, value: 11 },
        { market: 'Partner', revenue: 7201, value: -9 },
        { market: 'Online', revenue: 1254, value: 27 },
        { market: 'Other', revenue: 901, value: 0.2 }
    ];

    const projectsData = [
        { name: 'Ruby', startDate: new Date(2019, 3, 4), endDate: new Date(2019, 4, 7), status: 'Done', asignee: 'Ethan Holland' },
        { name: 'Diamond', startDate: new Date(2018, 0, 14), endDate: new Date(2019, 1, 7), status: 'Done', asignee: 'Jessie Price' },
        { name: 'Alexandrite', startDate: new Date(2020, 8, 1), endDate: new Date(2020, 8, 11), status: 'Done', asignee: 'Miriam Watts' },
        { name: 'Blue Sapphire', startDate: new Date(2019, 3, 19), endDate: new Date(2019, 10, 30), status: 'Cancelled', asignee: 'Duane Williamson' },
        { name: 'Tanzanite', startDate: new Date(2009, 11, 11), endDate: new Date(2010, 11, 25), status: 'Done', asignee: 'Claude Garcia' },
        { name: 'Pink sapphire', startDate: new Date(2020, 8, 24), endDate: new Date(2020, 11, 31), status: 'Unassigned', asignee: '' },
        { name: 'Aquamarine', startDate: new Date(2020, 2, 30), endDate: new Date(2020, 4, 17), status: 'Done', asignee: 'Virgil Curtis' },
        { name: 'Violet Sapphire', startDate: new Date(2017, 5, 23), endDate: new Date(2019, 8, 9), status: 'Done', asignee: 'Steven Gray' },
        { name: 'Tourmaline', startDate: new Date(2020, 1, 1), endDate: new Date(2021, 5, 1), status: 'In progress', asignee: 'Beatrice Kim' },
        { name: 'Heliodor', startDate: new Date(2019, 3, 4), endDate: new Date(2019, 4, 7), status: 'Done', asignee: 'Enrique White' },
        { name: 'Red beryl', startDate: new Date(2020, 5, 1), endDate: new Date(2020, 9, 1), status: 'In progress', asignee: 'Jenny Rodriguez' }
    ];

    const salesComparisonData = [
        { month: 'Jan', current: 77, last: 98 },
        { month: 'Feb', current: 70, last: 89 },
        { month: 'Mar', current: 67, last: 79 },
        { month: 'Apr', current: 82, last: 81 },
        { month: 'May', current: 93, last: 99 },
        { month: 'Jun', current: 112, last: 122 },
        { month: 'Jul', current: 130, last: 129 },
        { month: 'Aug', current: 118, last: 125 },
        { month: 'Sep', current: 92, last: 99 },
        { month: 'Oct', current: 75, last: 83 },
        { month: 'Nov', current: 78, last: 90 },
        { month: 'Dec', current: 90, last: 112 }
    ];

    const { themeObj, customColors } = useThemeContext();

    const weeklySalesChartRef = useRef(null);
    const revenueChartRef = useRef(null);
    const salesComparisonChartRef = useRef(null);

    useEffect(() => { document.title = `Dashboard 1 - ${defaultTitle}` }, []);

    useEffect(() => {

        if (customColors) {

            revenueChartRef?.current.addColorScheme('custom', customColors);
            revenueChartRef?.current.refresh();

            weeklySalesChartRef?.current.addColorScheme('custom', customColors);
            weeklySalesChartRef?.current.refresh();

            salesComparisonChartRef?.current.addColorScheme('custom', customColors);
            salesComparisonChartRef?.current.refresh();

        }

    }, [customColors]);

    const weeklySalesChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        padding: { left: 0, top: 0, right: 0, bottom: 0 },
        dataSource: weeklyData,
        colorScheme: 'custom',
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

    const weeklySalesTableData = {
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
    }

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
                type: 'spline',
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

    const projectsTableData = {
        dataSource: projectsData,
        freezeHeader: true,
        paging: true,
        pageSize: 10,
        sortMode: 'many',
        tooltip: true,
        onLoad() {
            this.sortBy('startDate', 'asc');
        },
        columns: [
            { label: 'Name', dataField: 'name', dataType: 'string' },
            { label: 'Start date', dataField: 'startDate', dataType: 'date' },
            { label: 'End date', dataField: 'endDate', dataType: 'date' },
            {
                label: 'Status', dataField: 'status', dataType: 'string', formatFunction(settings) {
                    const value = settings.value;

                    settings.template = `<span class="smart-badge smart-badge-pill ${value.replace(' ', '-').toLowerCase()}"">${value}</span>`;
                }
            },
            { label: 'Asignee', dataField: 'asignee', dataType: 'string' }
        ]
    }

    const salesComparisonChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        padding: { left: 5, top: 15, right: 25, bottom: 5 },
        dataSource: salesComparisonData,
        xAxis: {
            dataField: 'month',
            displayText: 'Month',
            gridLines: {
                visible: false
            }
        },
        colorScheme: 'custom',
        seriesGroups: [
            {
                type: 'column',
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
                    { dataField: 'last', displayText: 'Last year' },
                    { dataField: 'current', displayText: 'This year' }
                ]
            }
        ]
    }

    return (
        <div className="container dashboard1">
            <div className="row">
                <div className="col">
                    <div className="header-menu">
                        <div className="welcome">Welcome back, John!</div>
                        <Button
                            className="today-button settings-button"
                            onClick={(e) => openTodayMenu(e)}
                            onPointerUp={(e) => e.stopPropagation()}
                        >
                            <span className="material-icons">calendar_today</span>
                            Today
                            <span className="material-icons">keyboard_arrow_down</span>
                        </Button>
                        <Button className="primary"><span className="material-icons">filter_alt</span></Button>
                        <Button className="primary"><span className="material-icons">refresh</span></Button>
                    </div>
                </div>
            </div>

            <div className="row row-mx-10">
                <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
                    <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                            <div><span className="material-icons text-primary mr-3 font-size-36px">shopping_cart</span></div>
                            <div>
                                <h5 className="font-weight-bold">218</h5>
                                <h6 className="">Sales Today</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
                    <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                            <div><span className="material-icons text-warning mr-3 font-size-36px">show_chart</span></div>
                            <div>
                                <h5 className="font-weight-bold">4.138</h5>
                                <h6 className="">Visitors Today</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
                    <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                            <div><span className="material-icons text-success mr-3 font-size-36px">attach_money</span></div>
                            <div>
                                <h5 className="font-weight-bold">109.783</h5>
                                <h6 className="">Total Earnings</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-px-10 mb-5 col-sm-6 col-md-6 col-lg">
                    <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                            <div><span className="material-icons text-info mr-3 font-size-36px">add_shopping_cart</span></div>
                            <div>
                                <h5 className="font-weight-bold">7</h5>
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
                                <h5 className="font-weight-bold">86.002</h5>
                                <h6 className="">Total Revenue</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Total Revenue</h4>
                            <div className="smart-badge smart-badge-primary smart-badge-pill">Monthly</div>
                        </div>
                        <div className="card-body maxh-350">
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

                <div className="col-lg-4 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Daily feed</h4>
                            <div className="smart-badge smart-badge-primary smart-badge-pill">Today</div>
                        </div>

                        <div className="card-body maxh-350 py-2">
                            <div className="feeds">
                                <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                                    <div className="col-auto col-px-5">
                                        <div className="img-as-background rounded-circle w-50px square border">
                                            <img alt="" src="assets/images/phonebook/michael.png" />
                                        </div>
                                    </div>

                                    <div className="col col-px-5">
                                        <div className=""><strong>Frederick Murphy</strong> reacted to your post</div>
                                        <small className="text-muted">Today 8:19 PM</small>
                                    </div>

                                    <div className="col-auto col-px-5">
                                        <small className="w-auto text-muted">7 min ago</small>
                                    </div>
                                </div>

                                <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                                    <div className="col-auto col-px-5">
                                        <div className="img-as-background rounded-circle w-50px square border">
                                            <img alt="" src="assets/images/phonebook/maria.png" />
                                        </div>
                                    </div>

                                    <div className="col col-px-5">
                                        <div className=""><strong>Elisha Scott</strong> is now engaged</div>
                                        <small className="text-muted">Today 10:45 PM</small>
                                    </div>

                                    <div className="col-auto col-px-5">
                                        <small className="w-auto text-muted">10 hours ago</small>
                                    </div>
                                </div>

                                <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                                    <div className="col-auto col-px-5">
                                        <div className="img-as-background rounded-circle w-50px square border">
                                            <img alt="" src="assets/images/phonebook/michael.png" />
                                        </div>
                                    </div>

                                    <div className="col col-px-5">
                                        <div className=""><strong>John Doe</strong> is now engaged</div>
                                        <small className="text-muted">Today 12:03 PM</small>
                                    </div>

                                    <div className="col-auto col-px-5">
                                        <small className="w-auto text-muted">8 hours ago</small>
                                    </div>
                                </div>
                            </div>

                            <Button id="loadMore" className="primary">Load more</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Calendar</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body p-0">
                            <Calendar id="calendar" className="w-100 border-0"></Calendar>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Weekly sales</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={weeklySalesChartRef}
                                {...weeklySalesChartData}
                                id="weeklySalesChart"
                                className='combo-chart h-auto w-100'
                            ></Chart>
                            <Table
                                id="weeklySalesTable"
                                className="span-table no-border h-auto"
                                {...weeklySalesTableData}
                            ></Table>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Appointments</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body maxh-350 p-0">
                            <div id="appointmentContainer" className="h-100">
                                <div className="appointment">
                                    <div className="label"><strong>Contact Sales</strong><span>14:00</span></div>
                                    <p className="">Proin sagittis nisl diam, in pretium velit congue et.</p>
                                </div>
                                <div className="appointment">
                                    <div className="label"><strong>Meet with new client</strong><span>15:20</span></div>
                                    <p className="">Donec sodales, tellus at facilisis commodo, lectus lectus pharetra neque, at
                                        condimentum augue diam vitae massa.
                                    </p>
                                </div>
                                <div className="appointment">
                                    <div className="label"><strong>Dinner with manager</strong><span>19:00</span></div>
                                    <p className="">Aenean facilisis mi ac vestibulum vestibulum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Latest Projects</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <Table
                                id="projectsTable"
                                className="no-border maxh-300"
                                {...projectsTableData}
                            ></Table>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Sales Comparison</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={salesComparisonChartRef}
                                {...salesComparisonChartData}
                                id="salesComparisonChart"
                                className='w-100 h-100'
                            ></Chart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Dashboard1)