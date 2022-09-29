window.initChannels = function () {
    initCharts();
    initDaySwitchers();
};


function initCharts() {
    const dailySales = [
        {
            "SaleDate": "08:00",
            "Consultants": 34810.0,
            "VARs": 22970.0,
            "Direct": 7210.0,
            "Resellers": 13320.0
        },
        {
            "SaleDate": "09:00",
            "Consultants": 13870.0,
            "Retail": 9960.0,
            "VARs": 36450.0,
            "Direct": 34370.0
        },
        {
            "SaleDate": "10:00",
            "Retail": 24170.0,
            "VARs": 19030.0,
            "Direct": 52450.0,
            "Consultants": 18020.0,
            "Resellers": 7870.0
        },
        {
            "SaleDate": "11:00",
            "VARs": 60700.0,
            "Direct": 38100.0,
            "Consultants": 28320.0,
            "Resellers": 6060.0,
            "Retail": 3320.0
        },
        {
            "SaleDate": "12:00",
            "VARs": 37160.0,
            "Consultants": 38060.0,
            "Resellers": 25940.0,
            "Direct": 47320.0,
            "Retail": 15360.0
        },
        {
            "SaleDate": "13:00",
            "Consultants": 34790.0,
            "Resellers": 29230.0,
            "Direct": 26070.0,
            "VARs": 24620.0,
            "Retail": 6750.0
        },
        {
            "SaleDate": "14:00",
            "Direct": 34260.0,
            "VARs": 45350.0,
            "Resellers": 32870.0,
            "Retail": 12550.0,
            "Consultants": 33030.0
        },
        {
            "SaleDate": "15:00",
            "Direct": 61540.0,
            "VARs": 45330.0,
            "Resellers": 30840.0,
            "Consultants": 36060.0,
            "Retail": 13190.0
        },
        {
            "SaleDate": "16:00",
            "Consultants": 24800.0,
            "Resellers": 25070.0,
            "VARs": 27980.0,
            "Direct": 26810.0,
            "Retail": 17790.0
        },
        {
            "SaleDate": "17:00",
            "Consultants": 12580.0,
            "Retail": 6920.0,
            "VARs": 10820.0
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

    new window.Smart.Chart('#channels-chart', {
        caption: '',
        description: '',
        padding: { left: 15, top: 15, right: 15, bottom: 15 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 0 },
        dataSource: dailySales,
        showLegend: true,
        showBorderLine: false,
        animationDuration: 1000,
        xAxis:
        {
            dataField: 'SaleDate',
            gridLines: {
                visible: false
            }
        },
        seriesGroups:
            [
                {
                    type: 'line',
                    valueAxis:
                    {
                        axisSize: 'auto',
                        line: {
                            visible: false
                        }
                    },
                    series: [
                        {
                            dataField: 'Consultants',
                            emptyPointsDisplay: 'zero',
                            lineColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-color'),
                            fillColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-color')
                        },
                        {
                            dataField: 'Direct',
                            emptyPointsDisplay: 'zero',
                            lineColor: getComputedStyle(document.documentElement).getPropertyValue('--second-color'),
                            fillColor: getComputedStyle(document.documentElement).getPropertyValue('--second-color')
                        },
                        {
                            dataField: 'Resellers',
                            emptyPointsDisplay: 'zero',
                            lineColor: getComputedStyle(document.documentElement).getPropertyValue('--third-color'),
                            fillColor: getComputedStyle(document.documentElement).getPropertyValue('--third-color')
                        },
                        {
                            dataField: 'Retail',
                            emptyPointsDisplay: 'zero',
                            lineColor: getComputedStyle(document.documentElement).getPropertyValue('--forth-color'),
                            fillColor: getComputedStyle(document.documentElement).getPropertyValue('--forth-color')
                        },
                        {
                            dataField: 'VARs',
                            emptyPointsDisplay: 'zero',
                            lineColor: getComputedStyle(document.documentElement).getPropertyValue('--fifth-color'),
                            fillColor: getComputedStyle(document.documentElement).getPropertyValue('--fifth-color')
                        }
                    ]
                }
            ]
    });

    new window.Smart.Chart('#donut-chart', {
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
        backgroundColor: '#f5f5f5',
        animationDuration: 1000,
        padding: { left: 15, top: 15, right: 15, bottom: 15 },
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
		colorScheme: 'scheme29',
        backgroundColor: '#f5f5f5',
        showBorderLine: false,
        showLegend: false,
        animationDuration: 1000,
        padding: { left: 15, top: 15, right: 20, bottom: 10 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 0 },
        dataSource: productSalesByRange,
        xAxis: { visible: false },
        seriesGroups:
            [
                {
                    type: 'area',
                    columnsGapPercent: 50,
                    seriesGapPercent: 20,
                    useGradientColors: true,
                    valueAxis:
                    {
                        unitInterval: 20000000,
                        minValue: 0,
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
    const today = new Date().getDate();
    let day = today;
    const dayEl = document.getElementById('day');
    dayEl.innerHTML = day;

    document.querySelector('#daily-sales-performance .day-switcher span.left').addEventListener('click', () => {
        if (day > 1) {
            dayEl.innerHTML = --day;
            document.getElementById('channels-chart').refresh();

            document.querySelector('#daily-sales-performance .day-switcher .material-icons.right').style.opacity = 1;
            if (day == 1) {
                document.querySelector('#daily-sales-performance .day-switcher .material-icons.left').style.opacity = 0.4;
            }
        }
    });

    document.querySelector('#daily-sales-performance .day-switcher span.right').addEventListener('click', () => {
        if (day < today) {
            dayEl.innerHTML = ++day;
            document.getElementById('channels-chart').refresh();

            document.querySelector('#daily-sales-performance .day-switcher .material-icons.left').style.opacity = 1;
            if (day == today) {
                document.querySelector('#daily-sales-performance .day-switcher .material-icons.right').style.opacity = 0.4;
            }
        }
    });
}