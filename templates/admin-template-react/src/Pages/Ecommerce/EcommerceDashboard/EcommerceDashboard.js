import './EcommerceDashboard.scss';
import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, ProgressBar, Chart, Table } from '../../../smartImports';

import { useThemeContext, defaultTitle } from '../../../contexts/themeContext';

function EcommerceDashboard({ openTodayMenu }) {

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

    const bestSellingData = [
        { name: 'UX-Generator', language: 'JavaScript', sales: 54000 },
        { name: 'Smart HTML Elements', language: 'JavaScript', sales: 163030 },
        { name: 'Hawk UI', language: 'C#', sales: 13000 },
        { name: 'Styler-CSS', language: 'CSS', sales: 3400 },
        { name: 'TypeWriterJS', language: 'TypeScript', sales: 18900 },
        { name: 'UX-Paradigm', language: 'JavaScript', sales: 920 },
        { name: 'Mobile-enhancer', language: 'CSS', sales: 7570 },
        { name: 'Async-script', language: 'Java', sales: 15030 }
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

    const revenueChartRef = useRef(null);
    const salesComparisonChartRef = useRef(null);

    useEffect(() => { document.title = `E-commerce - ${defaultTitle}` }, []);

    useEffect(() => {

        if (customColors) {

            revenueChartRef?.current.addColorScheme('custom', customColors);
            revenueChartRef?.current.refresh();

            salesComparisonChartRef?.current.addColorScheme('custom', customColors);
            salesComparisonChartRef?.current.refresh();

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

    const bestSellingTableData = {
        dataSource: bestSellingData,
        sortMode: 'one',
        columns: [
            { label: 'Product Name', dataField: 'name', dataType: 'string' },
            {
                label: 'Language', dataField: 'language', dataType: 'string', formatFunction(settings) {
                    const value = settings.value;

                    settings.template = `<span class="smart-badge smart-badge-pill ${value.replace('#', '-sharp').toLowerCase()}"">${value}</span>`;
                }
            },
            { label: 'Sales', dataField: 'sales', dataType: 'number' }
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
        <div className="container e-commerce-dashboard">
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

            <div className="row">
                <div className="col-sm-6 col-lg-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row justify-content-between align-items-center mb-5">
                                <div className="col">
                                    <h6 className="font-weight-bold mb-0">Income</h6>
                                </div>
                                <div className="col text-right">
                                    <span className="smart-badge smart-badge-info">Today</span>
                                </div>
                            </div>

                            <div className="row justify-content-between align-items-center mb-5">
                                <div className="col">
                                    <h5 className="mb-0">$53.305</h5>
                                </div>
                                <div className="col text-right">
                                    <span className="">91%</span>
                                </div>
                            </div>

                            <div className="row justify-content-between align-items-center">
                                <div className="col-12">
                                    <ProgressBar value={91} className="info"></ProgressBar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row justify-content-between align-items-center mb-5">
                                <div className="col">
                                    <h6 className="font-weight-bold mb-0">Orders</h6>
                                </div>
                                <div className="col text-right">
                                    <span className="smart-badge smart-badge-warning">Annual</span>
                                </div>
                            </div>

                            <div className="row justify-content-between align-items-center mb-5">
                                <div className="col">
                                    <h5 className="mb-0">9.809</h5>
                                </div>
                                <div className="col text-right">
                                    <span className="">23%</span>
                                </div>
                            </div>

                            <div className="row justify-content-between align-items-center">
                                <div className="col-12">
                                    <ProgressBar value={23} className="warning"></ProgressBar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row justify-content-between align-items-center mb-5">
                                <div className="col">
                                    <h6 className="font-weight-bold mb-0">Activity</h6>
                                </div>
                                <div className="col text-right">
                                    <span className="smart-badge smart-badge-primary">Monthly</span>
                                </div>
                            </div>

                            <div className="row justify-content-between align-items-center mb-5">
                                <div className="col">
                                    <h5 className="mb-0">17.380</h5>
                                </div>
                                <div className="col text-right">
                                    <span className="">50%</span>
                                </div>
                            </div>

                            <div className="row justify-content-between align-items-center">
                                <div className="col-12">
                                    <ProgressBar value={50} className="primary"></ProgressBar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row justify-content-between align-items-center mb-5">
                                <div className="col">
                                    <h6 className="font-weight-bold mb-0">Revenue</h6>
                                </div>
                                <div className="col text-right">
                                    <span className="smart-badge smart-badge-success">Yearly</span>
                                </div>
                            </div>

                            <div className="row justify-content-between align-items-center mb-5">
                                <div className="col">
                                    <h5 className="mb-0">$28.940</h5>
                                </div>
                                <div className="col text-right">
                                    <span className="">41%</span>
                                </div>
                            </div>

                            <div className="row justify-content-between align-items-center">
                                <div className="col-12">
                                    <ProgressBar value={41} className="success"></ProgressBar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Total Revenue</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body maxh-350">
                            <Chart
                                ref={revenueChartRef}
                                {...revenueChartData}
                                id="revenueChart"
                                className='h-100 w-100'
                            >
                            </Chart>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Order Activity</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>

                        <div className="card-body maxh-350 p-0">
                            <div id="appointmentContainer" className="h-100">
                                <div className="appointment">
                                    <div className="label"><strong>Delivered</strong></div>
                                    <p className="">30 minutes ago</p>
                                </div>
                                <div className="appointment">
                                    <div className="label"><strong>In transit</strong></div>
                                    <p className="">3 hours ago</p>
                                </div>
                                <div className="appointment">
                                    <div className="label"><strong>Shipped</strong></div>
                                    <p className="">1 day ago</p>
                                </div>
                                <div className="appointment">
                                    <div className="label"><strong>Received</strong></div>
                                    <p className="">2 days ago</p>
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
                            <h4 className="label">Real-Time</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <Table
                                id="bestSellingTable"
                                className="table-striped no-border maxh-300"
                                {...bestSellingTableData}
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
                                className='h-100 w-100'
                            >
                            </Chart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(EcommerceDashboard)