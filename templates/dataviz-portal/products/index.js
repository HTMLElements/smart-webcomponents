window.initProducts = function () {
    initTable();
    initCharts();
};

function initTable() {
    const products = [
        { country: "Brazil", area: 8515767, populationRural: 0.15, populationTotal: 205809000, gdp: 2353025 },
        { country: "China", area: 9388211, populationRural: 0.46, populationTotal: 1375530000, gdp: 10380380 },
        { country: "France", area: 675417, populationRural: 0.21, populationTotal: 64529000, gdp: 2846889 },
        { country: "Germany", area: 357021, populationRural: 0.25, populationTotal: 81459000, gdp: 3859547 },
        { country: "India", area: 3287590, populationRural: 0.68, populationTotal: 1286260000, gdp: 2047811 }
    ];

    window.Smart('#products-table', class {
        get properties() {
            return {
                dataSource: new window.Smart.DataAdapter(
                    {
                        dataSource: products,
                        dataFields:
                            [
                                'country: string',
                                'area: number',
                                'populationRural: number',
                                'populationTotal: number',
                                'gdp: number'
                            ]
                    }),
                selection: true,
                sortMode: 'one',
                columns: [
                    { label: 'Country', dataField: 'country', dataType: 'string' },
                    { label: 'Area', dataField: 'area', dataType: 'number' },
                    { label: 'Population Rural', dataField: 'populationRural', dataType: 'number' },
                    { label: 'Population Total', dataField: 'populationTotal', dataType: 'number' },
                    { label: 'GDP Total', dataField: 'gdp', dataType: 'number' }
                ]
            }
        }
    });

    document.getElementById('products-table').addEventListener('change', e => {
        console.log(e);
    });
}

function initCharts() {

    const sectors = [
        {
            "Criteria": "Health",
            "Sales": 46151600
        },
        {
            "Criteria": "Insurance",
            "Sales": 74984260
        },
        {
            "Criteria": "Banking",
            "Sales": 55879610
        },
        {
            "Criteria": "Energy",
            "Sales": 45677870
        },
        {
            "Criteria": "Telecom",
            "Sales": 61490800
        },
        {
            "Criteria": "Manufacturing",
            "Sales": 52538300
        }
    ];
    const regions = [
        {
            "Criteria": "Africa",
            "Sales": 11161580.0,
            "Units": 5659
        },
        {
            "Criteria": "Asia",
            "Sales": 43282030.0,
            "Units": 21921
        },
        {
            "Criteria": "Australia",
            "Sales": 55147190.0,
            "Units": 27895
        },
        {
            "Criteria": "Europe",
            "Sales": 74979240.0,
            "Units": 38226
        },
        {
            "Criteria": "North America",
            "Sales": 130808040.0,
            "Units": 66274
        },
        {
            "Criteria": "South America",
            "Sales": 21344360.0,
            "Units": 10868
        }
    ];

    const channels = [
        {
            "Criteria": "Resellers",
            "Sales": 7616120.0,
            "Units": 3257
        },
        {
            "Criteria": "Retail",
            "Sales": 23055730.0,
            "Units": 9853
        },
        {
            "Criteria": "Consultants",
            "Sales": 4716490.0,
            "Units": 2015
        },
        {
            "Criteria": "Direct",
            "Sales": 6131380.0,
            "Units": 2615
        },
        {
            "Criteria": "VARs",
            "Sales": 14327330.0,
            "Units": 6120
        }
    ];

    new window.Smart.Chart('#donut-chart-sector', {
        caption: '',
        description: '',
        showLegend: true,
        showBorderLine: false,
        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-background'),
        animationDuration: 1000,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        seriesGroups:
            [
                {
                    type: 'donut',
                    showLabels: true,
                    dataSource: sectors,
                    series:
                        [
                            {
                                dataField: 'Sales',
                                displayText: 'Criteria',
                                initialAngle: 0,
                                innerRadius: 60,
                                radius: 100,
                                labels: {
                                    visible: false
                                }
                            }
                        ]
                }
            ]
    });

    new window.Smart.Chart('#donut-chart-region', {
        caption: '',
        description: '',
        showLegend: true,
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
                    dataSource: regions,
                    series:
                        [
                            {
                                dataField: 'Sales',
                                displayText: 'Criteria',
                                initialAngle: 0,
                                innerRadius: 60,
                                radius: 100,
                                labels: {
                                    visible: false
                                }
                            }
                        ]
                }
            ]
    });

    new window.Smart.Chart('#donut-chart-channel', {
        caption: '',
        description: '',
        showLegend: true,
        colorScheme: 'scheme28',     
        showBorderLine: false,
        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-background'),
        animationDuration: 1000,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        seriesGroups:
            [
                {
                    type: 'donut',
                    showLabels: true,
                    dataSource: channels,
                    series:
                        [
                            {
                                dataField: 'Sales',
                                displayText: 'Criteria',
                                initialAngle: 0,
                                innerRadius: 60,
                                radius: 100,
                                labels: {
                                    visible: false
                                }
                            }
                        ]
                }
            ]
    });

    initRangeSelectorChart(onRangeSelectorChange);
}

function onRangeSelectorChange() {
    document.getElementById('donut-chart-sector').refresh();
    document.getElementById('donut-chart-region').refresh();
    document.getElementById('donut-chart-channel').refresh();
}