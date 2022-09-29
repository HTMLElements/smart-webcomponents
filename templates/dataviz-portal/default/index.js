window.initDefault = function () {
    initCharts();
    initDaySwitchers();
};

function initCharts() {

    const dailySalesData = [
        {
            "Product": "High Sharing",
            "TodaySales": 17580.0,
            "YesterdaySales": 9850.0
        },
        {
            "Product": "Mk Movement",
            "TodaySales": 27321.0,
            "YesterdaySales": 24265.0
        },
        {
            "Product": "Pan Bridge",
            "TodaySales": 65930.0,
            "YesterdaySales": 90430.0
        },
        {
            "Product": "Flip Disc",
            "TodaySales": 27410.0,
            "YesterdaySales": 315100.0
        },
        {
            "Product": "Top Cruise",
            "TodaySales": 316654.0,
            "YesterdaySales": 222495.0
        },
        {
            "Product": "One Scale",
            "TodaySales": 190240.0,
            "YesterdaySales": 243960.0
        }
    ];

    const unitSalesData = [
        {
            "Product": "High Sharing",
            "ThisMonthUnits": 165,
            "LastMonthUnits": 121
        },
        {
            "Product": "Mk Movement",
            "ThisMonthUnits": 415,
            "LastMonthUnits": 499
        },
        {
            "Product": "Pan Bridge",
            "ThisMonthUnits": 678,
            "LastMonthUnits": 1000
        },
        {
            "Product": "Flip Disc",
            "ThisMonthUnits": 4621,
            "LastMonthUnits": 3822
        },
        {
            "Product": "Top Cruise",
            "ThisMonthUnits": 2579,
            "LastMonthUnits": 3217
        },
        {
            "Product": "One Scale",
            "ThisMonthUnits": 4612,
            "LastMonthUnits": 5199
        }
    ];

    const productSalesByRange = [
        {
            "Product": "High Sharing",
            "Sales": 34321654,
            "Units": 16421
        },
        {
            "Product": "Mk Movement",
            "Sales": 53547924,
            "Units": 26457
        },
        {
            "Product": "Pan Bridge",
            "Sales": 28547961,
            "Units": 16895
        },
        {
            "Product": "Flip Disc",
            "Sales": 99745812,
            "Units": 36425
        },
        {
            "Product": "Top Cruise",
            "Sales": 67965428,
            "Units": 51369
        },
        {
            "Product": "One Scale",
            "Sales": 52159400,
            "Units": 41829
        }
    ];

    new window.Smart.Chart('#daily-sales-chart', {
        caption: '',
        description: '',
      	colorScheme: 'scheme29',
        padding: { left: 5, top: 15, right: 5, bottom: 5 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        dataSource: dailySalesData,
        showLegend: false,
        showBorderLine: false,
        xAxis:
        {
            dataField: 'Product',
            gridLines: {
                visible: false
            }
        },
        seriesGroups:
            [
                {
                    type: 'column',
                    columnsGapPercent: 40,
                    seriesGapPercent: 5,
                    valueAxis:
                    {
                        unitInterval: 200000,
                        minValue: 0,
                        maxValue: 600000,
                        axisSize: 'auto',
                        line: {
                            visible: false
                        },
                        formatFunction: (value) => { return '$' + value / 1000 + 'K' }
                    },
                    series: [
                        { dataField: 'YesterdaySales' },
                        { dataField: 'TodaySales' }
                    ]
                }
            ]
    });

    new window.Smart.Chart('#unit-sales-chart', {
        caption: '',
        description: '',
      	colorScheme: 'scheme29',
        padding: { left: 5, top: 15, right: 5, bottom: 5 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        dataSource: unitSalesData,
        showLegend: false,
        showBorderLine: false,
        xAxis:
        {
            dataField: 'Product',
            gridLines: {
                visible: false
            }
        },
        seriesGroups:
            [
                {
                    type: 'column',
                    columnsGapPercent: 40,
                    seriesGapPercent: 5,
                    valueAxis:
                    {
                        unitInterval: 2000,
                        minValue: 0,
                        maxValue: 6000,
                        axisSize: 'auto',
                        line: {
                            visible: false
                        },
                        formatFunction: (value) => { return '$' + value / 1000 + 'K' }
                    },
                    series: [
                        { dataField: 'LastMonthUnits' },
                        { dataField: 'ThisMonthUnits' }
                    ]
                }
            ]
    });

    new window.Smart.Chart('#donut-chart', {
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
		colorScheme: 'scheme29',
        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-background'),
        animationDuration: 1000,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        seriesGroups:
            [
                {
                    type: 'donut',
                    showLabels: true,
                    dataSource: productSalesByRange,
                    series:
                        [
                            {
                                dataField: 'Sales',
                                displayText: 'Product',
                                initialAngle: 0,
                                innerRadius: 60,
                                radius: 80,
                                labelRadius: 180,
                                labels: {
                                    linesEnabled: false,
                                    formatFunction: (value, index, series, chart) => {
                                        const totalSales = chart.dataSource.reduce((a, b) => {
                                            return a + b['Sales'];
                                        }, 0);

                                        return Math.round((value / totalSales * 100)) + '%';
                                    }
                                }
                            }
                        ]
                }
            ]
    });

    new window.Smart.Chart('#bars-chart', {
        caption: '',
        description: '',
        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-background'),
        showBorderLine: false,
        showLegend: true,
		colorScheme: 'scheme29',     
        animationDuration: 1000,
        padding: { left: 15, top: 15, right: 20, bottom: 0 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 0 },
        dataSource: productSalesByRange,
        xAxis: { visible: false },
        seriesGroups:
            [
                {
                    type: 'column',
                    orientation: 'vertical',
                    columnsGapPercent: 50,
                    seriesGapPercent: 20,
                    useGradientColors: false,
                    valueAxis:
                    {
                        unitInterval: 20000000,
                        minValue: 0,
                        flip: false,
                        axisSize: 'auto',
                        line: {
                            visible: false
                        },
                        formatFunction: (value) => { return '$' + value / 1000000 + 'M' }
                    },
                    series: [
                        { dataField: 'Sales', displayText: 'Product' }
                    ]
                }
            ]
    });

    initRangeSelectorChart(onRangeSelectorChange);
}

function onRangeSelectorChange() {
    document.getElementById('donut-chart').refresh();
    document.getElementById('bars-chart').refresh();
}

function initDaySwitchers() {
    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October"
    ];
    let currentMonth = months.length - 1;

    const today = new Date().getDate();
    let day = today;
    const dayEl = document.getElementById('day');
    dayEl.innerHTML = day;

    document.querySelector('#daily-sales .day-switcher span.left').addEventListener('click', () => {
        if (day > 1) {
            dayEl.innerHTML = --day;
            document.getElementById('daily-sales-chart').refresh();

            document.querySelector('#daily-sales .day-switcher .material-icons.right').style.opacity = 1;
            if (day == 1) {
                document.querySelector('#daily-sales .day-switcher .material-icons.left').style.opacity = 0.4;
            }
        }
    });

    document.querySelector('#daily-sales .day-switcher span.right').addEventListener('click', () => {
        if (day < today) {
            dayEl.innerHTML = ++day;
            document.getElementById('daily-sales-chart').refresh();

            document.querySelector('#daily-sales .day-switcher .material-icons.left').style.opacity = 1;
            if (day == today) {
                document.querySelector('#daily-sales .day-switcher .material-icons.right').style.opacity = 0.4;
            }
        }
    });

    document.querySelector('#unit-sales .day-switcher span.left').addEventListener('click', () => {
        if (currentMonth > 0) {
            document.getElementById('month').innerHTML = months[--currentMonth];
            document.getElementById('unit-sales-chart').refresh();

            document.querySelector('#unit-sales .day-switcher .material-icons.right').style.opacity = 1;
            if (currentMonth == 0) {
                document.querySelector('#unit-sales .day-switcher .material-icons.left').style.opacity = 0.4;
            }
        }
    });

    document.querySelector('#unit-sales .day-switcher span.right').addEventListener('click', () => {
        if (currentMonth < months.length - 1) {
            document.getElementById('month').innerHTML = months[++currentMonth];
            document.getElementById('unit-sales-chart').refresh();

            document.querySelector('#unit-sales .day-switcher .material-icons.left').style.opacity = 1;
            if (currentMonth == months.length - 1) {
                document.querySelector('#unit-sales .day-switcher .material-icons.right').style.opacity = 0.4;
            }
        }
    });
}