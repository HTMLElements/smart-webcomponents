import './AnalyticsDashboard.scss';
import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, ProgressBar, Chart, Table } from '../../../smartImports';

import { useThemeContext, defaultTitle } from '../../../contexts/themeContext';

function AnalyticsDashboard({ openTodayMenu }) {

    const languagesData = [
        { language: 'English', users: 890 },
        { language: 'Chinese', users: 328 },
        { language: 'Spanish', users: 13 },
        { language: 'Hindi', users: 716 },
        { language: 'Russian', users: 96 },
    ];

    const totalUsers = languagesData.map(dataPoint => dataPoint.users)
        .reduce((accumulator, currentValue) => accumulator + currentValue);

    const sourceData = [
        { market: 'Direct', revenue: 2873, value: 11 },
        { market: 'Partner', revenue: 7201, value: -9 },
        { market: 'Online', revenue: 1254, value: 27 },
        { market: 'Other', revenue: 901, value: 0.2 }
    ];

    const trafficData = [
        { source: 'Google', users: 3026, sessions: 18721, bounceRate: 11.3, avgSessionDuration: 785 },
        { source: 'Direct', users: 2983, sessions: 36789, bounceRate: 2.9, avgSessionDuration: 1893 },
        { source: 'Bing', users: 803, sessions: 1023, bounceRate: 33.4, avgSessionDuration: 802 },
        { source: 'Baidu', users: 902, sessions: 1203, bounceRate: 27.3, avgSessionDuration: 647 },
        { source: 'Yahoo!', users: 420, sessions: 730, bounceRate: 31, avgSessionDuration: 704 },
        { source: 'Yandex', users: 202, sessions: 594, bounceRate: 45.6, avgSessionDuration: 250 },
        { source: 'Ask.com', users: 123, sessions: 325, bounceRate: 56, avgSessionDuration: 341 },
        { source: 'DuckDuckGo', users: 903, sessions: 1490, bounceRate: 18.4, avgSessionDuration: 1109 }
    ];

    const devicesData = [
        { month: 'Jan', mobile: 22, desktop: 89 },
        { month: 'Feb', mobile: 46, desktop: 92 },
        { month: 'Mar', mobile: 89, desktop: 80 },
        { month: 'Apr', mobile: 120, desktop: 78 },
        { month: 'May', mobile: 112, desktop: 90 },
        { month: 'Jun', mobile: 99, desktop: 101 },
        { month: 'Jul', mobile: 135, desktop: 88 },
        { month: 'Aug', mobile: 128, desktop: 99 },
        { month: 'Sep', mobile: 144, desktop: 76 },
        { month: 'Oct', mobile: 132, desktop: 97 },
        { month: 'Nov', mobile: 127, desktop: 80 },
        { month: 'Dec', mobile: 139, desktop: 85 }
    ];

    const interestsData = [
        { field: 'Entertainment', users: 53 },
        { field: 'Technology', users: 80 },
        { field: 'Politics', users: 13 },
        { field: 'Art', users: 19 },
        { field: 'Sports', users: 49 },
    ];

    const { themeObj, customColors } = useThemeContext();

    const devicesChartRef = useRef(null);
    const interestsChartRef = useRef(null);
    const sourceChartRef = useRef(null);

    useEffect(() => { document.title = `Analytics - ${defaultTitle}` }, []);

    useEffect(() => {

        if (customColors) {

            devicesChartRef?.current?.addColorScheme('custom', customColors);
            devicesChartRef?.current?.refresh();

            interestsChartRef?.current?.addColorScheme('custom', customColors);
            interestsChartRef?.current?.refresh();

            sourceChartRef?.current?.addColorScheme('custom', customColors);
            sourceChartRef?.current?.refresh();
        }

    }, [customColors]);

    const languagesTableData = {
        dataSource: languagesData,
        columns: [
            {
                label: 'Language', dataField: 'language', dataType: 'string', width: 80, formatFunction(settings) {
                    const value = settings.value;
                    let code;

                    switch (value) {
                        case 'English':
                            code = 'usa';
                            break;
                        case 'Chinese':
                            code = 'china';
                            break;
                        case 'Spanish':
                            code = 'spain';
                            break;
                        case 'Hindi':
                            code = 'india';
                            break;
                        case 'Russian':
                            code = 'russian-federation';
                            break;
                        default:
                            break;
                    }

                    settings.template = `<img src="https://img.icons8.com/office/30/000000/${code}.png" alt="${value}" title="${value}">`;
                }
            },
            { label: 'Users', dataField: 'users', dataType: 'number', width: 80 },
            {
                label: '% Users', dataField: '', dataType: 'number', formatFunction(settings) {
                    const percentage = (languagesData[settings.row].users * 100) / totalUsers;

                    settings.template = `<smart-progress-bar show-progress-value value=${percentage}></smart-progress-bar>`;
                }
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

    const trafficTableData = {
        dataSource: trafficData,
        sortMode: 'many',
        onLoad() {
            this.sortBy('sessions', 'desc');
        },
        columns: [
            { label: 'Source', dataField: 'source', dataType: 'string' },
            { label: 'Users', dataField: 'users', dataType: 'number' },
            { label: 'Sessions', dataField: 'sessions', dataType: 'number' },
            {
                label: 'Bounce Rate', dataField: 'bounceRate', dataType: 'number', formatFunction(settings) {
                    settings.cell.classList.add(settings.value < 40 ? 'positive' : 'negative');

                    settings.template = settings.value + '%';
                }
            },
            {
                label: 'Avg. Session Duration', dataField: 'avgSessionDuration', dataType: 'number', formatFunction(settings) {
                    let seconds = settings.value,
                        hoursPart, minutesPart, secondsPart;

                    hoursPart = Math.floor(seconds / 3600);
                    seconds = seconds % 3600;
                    minutesPart = Math.floor(seconds / 60).toString().padStart(2, '0');
                    secondsPart = (seconds % 60).toString().padStart(2, '0');

                    settings.template = hoursPart + ':' + minutesPart + ':' + secondsPart;
                }
            },
        ]
    }

    const devicesChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        padding: { left: 5, top: 15, right: 25, bottom: 5 },
        dataSource: devicesData,
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
                    { dataField: 'mobile', displayText: 'Mobile' },
                    { dataField: 'desktop', displayText: 'Desktop' }
                ]
            }
        ]
    }

    const interestsChartData = {
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
                    radius: 80,
                    type: 'area',
                    series: [
                        { dataField: 'users', displayText: 'Users', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' }
                    ]
                }
            ]
    }

    const sourceChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        padding: { left: 0, top: 0, right: 0, bottom: 0 },
        dataSource: sourceData,
        colorScheme: 'custom',
        seriesGroups: [
            {
                type: 'donut',
                series: [
                    {
                        dataField: 'revenue',
                        displayText: 'market',
                        radius: 70,
                        innerRadius: 50,
                        selectedRadiusChange: 2

                    }
                ]
            }
        ]
    }

    return (
        <div className="container analytics-dashboard">
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

            <div className="row mb-5">
                <div className="col-12">
                    <div className="row row-mx-10 h-100">
                        <div className="col-md-6 col-px-10 mb-5">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="row justify-content-between align-items-center mb-5">
                                        <div className="col">
                                            <h6 className="font-weight-bold mb-0">Visitors</h6>
                                        </div>
                                        <div className="col text-right">
                                            <span className="smart-badge smart-badge-success">Today</span>
                                        </div>
                                    </div>

                                    <div className="row justify-content-between align-items-center mb-5">
                                        <div className="col">
                                            <h5 className="mb-0">5.305</h5>
                                        </div>
                                        <div className="col text-right">
                                            <span className="">91%</span>
                                        </div>
                                    </div>

                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-12">
                                            <ProgressBar value={91} className="success"></ProgressBar>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-px-10 mb-5">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="row justify-content-between align-items-center mb-5">
                                        <div className="col">
                                            <h6 className="font-weight-bold mb-0">Bounce</h6>
                                        </div>
                                        <div className="col text-right">
                                            <span className="smart-badge smart-badge-warning">Annaul</span>
                                        </div>
                                    </div>

                                    <div className="row justify-content-between align-items-center mb-5">
                                        <div className="col">
                                            <h5 className="mb-0">809</h5>
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

                        <div className="col-md-6 col-px-10 mb-5 mb-md-0">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="row justify-content-between align-items-center mb-5">
                                        <div className="col">
                                            <h6 className="font-weight-bold mb-0">Real-Time</h6>
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

                        <div className="col-md-6 col-px-10 mb-5 mb-md-0">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="row justify-content-between align-items-center mb-5">
                                        <div className="col">
                                            <h6 className="font-weight-bold mb-0">Activity</h6>
                                        </div>
                                        <div className="col text-right">
                                            <span className="smart-badge smart-badge-info">Yearly</span>
                                        </div>
                                    </div>

                                    <div className="row justify-content-between align-items-center mb-5">
                                        <div className="col">
                                            <h5 className="mb-0">992</h5>
                                        </div>
                                        <div className="col text-right">
                                            <span className="">41%</span>
                                        </div>
                                    </div>

                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-12">
                                            <ProgressBar value={41} className="info"></ProgressBar>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Languages</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body maxh-300">
                            <Table
                                id="languagesTable"
                                className="no-border"
                                {...languagesTableData}
                            ></Table>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Mobile / Desktop</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={devicesChartRef}
                                {...devicesChartData}
                                id="devicesChart"
                                className='w-100 h-100'
                            >
                            </Chart>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Interests</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={interestsChartRef}
                                {...interestsChartData}
                                id="interestsChart"
                                className='w-100 h-100'
                            >
                            </Chart>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Source</h4>
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
                                className='combo-chart w-100 h-auto p-0 mb-3'
                            >
                            </Chart>
                            <Table
                                id="sourceTable"
                                className="small-table no-border w-100"
                                {...sourceTableData}
                            ></Table>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Traffic</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body maxh-350">
                            <Table
                                id="trafficTable"
                                className="table-striped no-border"
                                {...trafficTableData}
                            ></Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(AnalyticsDashboard)