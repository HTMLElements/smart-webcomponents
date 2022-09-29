import './Chart.scss';
import { useEffect, useRef } from 'react';

import withAnimation from '../../hoc/withAnimation';

import { Chart } from '../../smartImports';

import { useThemeContext, defaultTitle } from '../../contexts/themeContext';

function Charts() {

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

    const interestsData = [
        { field: 'Entertainment', male: 53, female: 48 },
        { field: 'Technology', male: 80, female: 13 },
        { field: 'Politics', male: 13, female: 11 },
        { field: 'Art', male: 19, female: 62 },
        { field: 'Sports', male: 49, female: 7 },
    ]

    const sourceData = [
        { market: 'Direct', revenue: 2873, value: 11 },
        { market: 'Partner', revenue: 7201, value: -9 },
        { market: 'Online', revenue: 1254, value: 27 },
        { market: 'Other', revenue: 901, value: 0.2 }
    ];

    const { themeObj, customColors } = useThemeContext();

    const lineChartRef = useRef(null);
    const columnChartRef = useRef(null);
    const donutChartRef = useRef(null);
    const pieChartRef = useRef(null);
    const spiderChartRef = useRef(null);
    const polarChartRef = useRef(null);

    useEffect(() => { document.title = `Charts - ${defaultTitle}` }, []);

    useEffect(() => {

        if (customColors) {

            lineChartRef?.current?.addColorScheme('custom', customColors);
            lineChartRef?.current?.refresh();

            columnChartRef?.current?.addColorScheme('custom', customColors);
            columnChartRef?.current?.refresh();

            donutChartRef?.current?.addColorScheme('custom', customColors);
            donutChartRef?.current?.refresh();

            pieChartRef?.current?.addColorScheme('custom', customColors);
            pieChartRef?.current?.refresh();

            spiderChartRef?.current?.addColorScheme('custom', customColors);
            spiderChartRef?.current?.refresh();

            polarChartRef?.current?.addColorScheme('custom', customColors);
            polarChartRef?.current?.refresh();
        }

    }, [customColors]);

    const lineChartData = {
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
    };

    const columnChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        padding: { left: 5, top: 15, right: 25, bottom: 5 },
        dataSource: salesComparisonData,
        colorScheme: 'custom',
        xAxis: {
            dataField: 'month',
            displayText: 'Month',
            gridLines: {
                visible: false
            }
        },
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
    };

    const donutChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        dataSource: sourceData,
        colorScheme: 'custom',
        seriesGroups: [
            {
                type: 'donut',
                series: [
                    {
                        dataField: 'revenue',
                        displayText: 'market',
                        radius: 120,
                        innerRadius: 80

                    }
                ]
            }
        ]
    };

    const pieChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        dataSource: sourceData,
        colorScheme: 'custom',
        seriesGroups: [
            {
                type: 'pie',
                series: [
                    {
                        dataField: 'revenue',
                        displayText: 'market',
                        radius: 120
                    }
                ]
            }
        ]
    };

    const spiderChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        dataSource: interestsData,
        colorScheme: 'custom',
        xAxis:
        {
            dataField: 'field',
            displayText: 'Field',
            valuesOnTicks: true,
            labels: { autoRotate: true }
        },
        seriesGroups:
            [
                {
                    spider: true,
                    startAngle: 0,
                    endAngle: 360,
                    radius: 100,
                    type: 'area',
                    series: [
                        { dataField: 'male', displayText: 'Male', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                        { dataField: 'female', displayText: 'Female', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'diamond' }
                    ]
                }
            ]
    };

    const polarChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        dataSource: interestsData,
        colorScheme: 'custom',
        xAxis:
        {
            dataField: 'field',
            displayText: 'Field',
            valuesOnTicks: true,
            labels: { autoRotate: true }
        },
        seriesGroups:
            [
                {
                    polar: true,
                    startAngle: 0,
                    endAngle: 360,
                    radius: 120,
                    type: 'column',
                    series: [
                        { dataField: 'male', displayText: 'Male', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                        { dataField: 'female', displayText: 'Female', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'diamond' }
                    ]
                }
            ]
    };

    return (
        <div className="container charts-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Charts</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Line Chart</h4>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={lineChartRef}
                                {...lineChartData}
                                id="lineChart"
                            >
                            </Chart>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Column Chart</h4>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={columnChartRef}
                                {...columnChartData}
                                id="columnChart"
                            >
                            </Chart>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Donut Chart</h4>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={donutChartRef}
                                {...donutChartData}
                                id="donutChart"
                            >
                            </Chart>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Pie Chart</h4>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={pieChartRef}
                                {...pieChartData}
                                id="pieChart"
                            >
                            </Chart>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Spider Chart</h4>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={spiderChartRef}
                                {...spiderChartData}
                                id="spiderChart"
                            >
                            </Chart>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Polar Chart</h4>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={polarChartRef}
                                {...polarChartData}
                                id="polarChart"
                            >
                            </Chart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Charts)