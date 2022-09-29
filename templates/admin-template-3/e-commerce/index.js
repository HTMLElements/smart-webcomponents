window.initECommerce = function () {
    $('#salesMap').vectorMap({
        map: 'world_mill',
        scaleColors: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        markerStyle: {
            initial: {
                fill: '#A2D56A',
                stroke: '#383f47'
            }
        },
        focusOn: {
            x: 0.5,
            y: 0.35,
            scale: 5
        },
        backgroundColor: '#383f47',
        markers: [
            {latLng: [34.3, -118.15], name: 'Los Angeles'},
            {latLng: [37.47, -122.26], name: 'San Francisco'},
            {latLng: [38.35, -121.3], name: 'Sacramento'},
            {latLng: [19, 72.48], name: 'Mumbai'},
            {latLng: [22.34, 88.24], name: 'Calcutta'},
            {latLng: [-33.55, 18.22], name: 'Cape Town'},
            {latLng: [50.7, 8.41], name: 'Frankfurt'},
            {latLng: [52.3, 13.25], name: 'Berlin'},
            {latLng: [44.5, -0.31], name: 'Bordeaux'},
            {latLng: [30.2, 31.21], name: 'Cairo'},
            {latLng: [44.25, 26.7], name: 'Bucharest'}
        ]
    });

    const bestSellingData = [
        {name: 'UX-Generator', language: 'JavaScript', sales: 54000},
        {name: 'Smart HTML Elements', language: 'JavaScript', sales: 163030},
        {name: 'Hawk UI', language: 'C#', sales: 13000},
        {name: 'Styler-CSS', language: 'CSS', sales: 3400},
        {name: 'TypeWriterJS', language: 'TypeScript', sales: 18900},
        {name: 'UX-Paradigm', language: 'JavaScript', sales: 920},
        {name: 'Mobile-enhancer', language: 'CSS', sales: 7570},
        {name: 'Async-script', language: 'Java', sales: 15030}
    ];
    new window.Smart.Table('#bestSellingTable', {
        dataSource: bestSellingData,
        sortMode: 'one',
        columns: [
            {label: 'Product Name', dataField: 'name', dataType: 'string'},
            {
                label: 'Language', dataField: 'language', dataType: 'string', formatFunction(settings) {
                    const value = settings.value;

                    settings.template = `<span class="pill ${value.replace('#', '-sharp').toLowerCase()}"">${value}</span>`;
                }
            },
            {label: 'Sales', dataField: 'sales', dataType: 'number'}
        ]
    });

    window.initECommerceChartComponents();

    addTodayMenuOpenHandlers();
}

window.initECommerceChartComponents = function () {
    const salesData = [
            {month: 'Jan', sales: 22330, orders: 9302},
            {month: 'Feb', sales: 21323, orders: 8902},
            {month: 'Mar', sales: 28200, orders: 10043},
            {month: 'Apr', sales: 31889, orders: 10992},
            {month: 'May', sales: 30056, orders: 9980},
            {month: 'Jun', sales: 42024, orders: 13489},
            {month: 'Jul', sales: 44995, orders: 19048},
            {month: 'Aug', sales: 41045, orders: 12334},
            {month: 'Sep', sales: 38012, orders: 11102},
            {month: 'Oct', sales: 40045, orders: 11894},
            {month: 'Nov', sales: 27542, orders: 8301},
            {month: 'Dec', sales: 29012, orders: 10632}
        ],
        salesComparisonData = [
            {month: 'Jan', current: 77, last: 98},
            {month: 'Feb', current: 70, last: 89},
            {month: 'Mar', current: 67, last: 79},
            {month: 'Apr', current: 82, last: 81},
            {month: 'May', current: 93, last: 99},
            {month: 'Jun', current: 112, last: 122},
            {month: 'Jul', current: 130, last: 129},
            {month: 'Aug', current: 118, last: 125},
            {month: 'Sep', current: 92, last: 99},
            {month: 'Oct', current: 75, last: 83},
            {month: 'Nov', current: 78, last: 90},
            {month: 'Dec', current: 90, last: 112}
        ];

    const customColors = [getComputedStyleVars('primary'), getComputedStyleVars('info'), getComputedStyleVars('warning'), getComputedStyleVars('success'), getComputedStyleVars('danger'), getComputedStyleVars('secondary')];

    const chart1 = new window.Smart.Chart('#revenueChart', {
        animation: 'none',
        theme: getTheme(),
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
        padding: {left: 5, top: 15, right: 25, bottom: 5},
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
                        formatSettings: {decimalPlaces: 0}
                    },
                    gridLines: {
                        visible: false
                    }
                },
                series: [
                    {dataField: 'sales', displayText: 'Sales ($)', symbolSize: 8, symbolType: 'circle'},
                    {dataField: 'orders', displayText: 'Orders', symbolSize: 8, symbolType: 'circle', dashStyle: '5,4'}
                ]
            }
        ]
    });
    chart1.addColorScheme('custom', customColors);
    chart1.refresh();

    const chart2 = new window.Smart.Chart('#salesComparisonChart', {
        animation: 'none',
        theme: getTheme(),
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
        padding: {left: 5, top: 15, right: 25, bottom: 5},
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
                        formatSettings: {decimalPlaces: 0}
                    },
                    gridLines: {
                        visible: false
                    }
                },
                series: [
                    {dataField: 'last', displayText: 'Last year'},
                    {dataField: 'current', displayText: 'This year'}
                ]
            }
        ]
    });
    chart2.addColorScheme('custom', customColors);
    chart2.refresh();
}