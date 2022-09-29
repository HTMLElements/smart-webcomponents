window.initDefault = function () {
    const chemicalElementsData = [
        {number: 1, channel: 'Direct', sessions: 93.397, goalConvRate: 4.2, goals: 9854, percentTraffic: 23.21, val: 23.21},
        {number: 2, channel: 'Email', sessions: 25.954, goalConvRate: 3.5, goals: 12025, percentTraffic: 54.7, val: 54.7},
        {number: 3, channel: 'Organic Search', sessions: 112.578, goalConvRate: 4.3, goals: 9025, percentTraffic: 71.3, val: 71.3},
        {number: 4, channel: 'Referral', sessions: 52.845, goalConvRate: 5, goals: 2.7, percentTraffic: 25.1, val: 25.1},
        {number: 5, channel: 'Social Media', sessions: 4552, goalConvRate: 3.3, goals: 2025, percentTraffic: 12.7, val: 12.7},
        {number: 6, channel: 'Other', sessions: 5.214, goalConvRate: 2.7, goals: 225, percentTraffic: 32.6, val: 32.6}
    ];

    /* Traffic Channels */
    const customColorsNames = ['primary', 'info', 'warning', 'success', 'error', 'secondary'];

    const trafficChannels = new window.Smart.Table('#traffic-channels', {
        dataSource: new window.Smart.DataAdapter({
            dataSource: chemicalElementsData,
            dataFields: [
                'number: number',
                'channel: string',
                'sessions: number',
                'goalConvRate: number',
                'goals: number',
                'percentTraffic: number',
                'val: number'
            ]
        }),
        columns: [
            {label: 'Channel', dataField: 'channel', dataType: 'string', width: 150},
            {label: 'Sessions', dataField: 'sessions', dataType: 'number', width: 100},
            {
                label: 'Goal Conv. Rate', dataField: 'goalConvRate', dataType: 'number', width: 140, formatFunction(settings) {
                    settings.template = `${settings.value}%`;
                }
            },
            {label: 'Goals Completions', dataField: 'goals', dataType: 'number', width: 150},
            {
                label: 'Percentage of Traffic (%)', dataField: 'percentTraffic', dataType: 'number', width: 200, formatFunction(settings) {
                    let colorName = customColorsNames[0];
                    if (settings.row === 0 || settings.row === 6) {
                        colorName = customColorsNames[0];
                    } else if (settings.row === 1 || settings.row === 7) {
                        colorName = customColorsNames[1];
                    } else if (settings.row === 2 || settings.row === 8) {
                        colorName = customColorsNames[2];
                    } else if (settings.row === 3 || settings.row === 9) {
                        colorName = customColorsNames[3];
                    } else if (settings.row === 4 || settings.row === 10) {
                        colorName = customColorsNames[4];
                    }

                    settings.template = `<smart-progress-bar class="${colorName}" value="${settings.value}"></smart-progress-bar>`;
                }
            },
            {
                label: 'Value', dataField: 'val', dataType: 'number', width: 80, formatFunction(settings) {
                    settings.template = `${settings.value}%`;
                }
            }
        ]
    });

    $('#salesMap').vectorMap({
        map: 'world_mill',
        scaleColors: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        regionStyle: {
            initial: {
                fill: getComputedStyleVars('secondary')
            },
            hover: {
                fill: getComputedStyleVars('primary')
            },
            selected: {
                fill: getComputedStyleVars('primary')
            }
        },
        markerStyle: {
            initial: {
                fill: getComputedStyleVars('danger'),
                stroke: getComputedStyleVars('secondary')
            }
        },
        backgroundColor: getComputedStyleVars('white'),
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

    window.initChartComponents();

    addTodayMenuOpenHandlers();
}

window.initChartComponents = function () {
    const sourceData = [
            {device: 'Desktop', visits: 483, value: 45},
            {device: 'Mobile', visits: 870, value: 30},
            {device: 'Tablets', visits: 655, value: 25}
        ],
        sourceData2 = [
            {device: 'Desktop', visits: 1483, value: 60},
            {device: 'Mobile', visits: 1870, value: 30},
            {device: 'Tablets', visits: 1655, value: 15}
        ],
        users = [
            {month: 'Jan', current: 60, previous: 50},
            {month: 'Feb', current: 40, previous: 30},
            {month: 'Mar', current: 45, previous: 35},
            {month: 'Apr', current: 40, previous: 30},
            {month: 'May', current: 70, previous: 60},
            {month: 'Jun', current: 65, previous: 55},
            {month: 'Jul', current: 50, previous: 40},
            {month: 'Aug', current: 40, previous: 30},
            {month: 'Sep', current: 45, previous: 35},
            {month: 'Nov', current: 55, previous: 40},
            {month: 'Oct', current: 40, previous: 30},
            {month: 'Dec', current: 75, previous: 65}
        ],
        sessions = [
            {month: 'Jan', current: 65, previous: 50},
            {month: 'Feb', current: 55, previous: 40},
            {month: 'Mar', current: 60, previous: 45},
            {month: 'Apr', current: 55, previous: 40},
            {month: 'May', current: 65, previous: 70},
            {month: 'Jun', current: 80, previous: 65},
            {month: 'Jul', current: 65, previous: 50},
            {month: 'Aug', current: 55, previous: 40},
            {month: 'Sep', current: 59, previous: 45},
            {month: 'Nov', current: 69, previous: 50},
            {month: 'Oct', current: 53, previous: 40},
            {month: 'Dec', current: 82, previous: 75}
        ];

    const customColors = [getComputedStyleVars('primary'), getComputedStyleVars('info'), getComputedStyleVars('warning'), getComputedStyleVars('success'), getComputedStyleVars('danger'), getComputedStyleVars('secondary')];
    const customColors2 = [getComputedStyleVars('primary'), getComputedStyleVars('white')];

    /* Source Chart 1 */
    const sourceChart1 = new window.Smart.Chart('#sourceChart1', {
        animation: 'none',
        theme: getTheme(),
        caption: '',
        description: '',
        showLegend: true,
        showBorderLine: false,
        padding: {left: 0, top: 0, right: 0, bottom: 0},
        dataSource: sourceData,
        colorScheme: 'custom',
        seriesGroups: [
            {
                type: 'donut',
                series: [
                    {
                        dataField: 'visits',
                        displayText: 'device',
                        radius: 140,
                        innerRadius: 100,
                        selectedRadiusChange: 2

                    }
                ]
            }
        ]
    });
    sourceChart1.addColorScheme('custom', customColors);
    sourceChart1.refresh();

    /* Source Chart 2 */
    const sourceChart2 = new window.Smart.Chart('#sourceChart2', {
        animation: 'none',
        theme: getTheme(),
        caption: '',
        description: '',
        showLegend: true,
        showBorderLine: false,
        padding: {left: 0, top: 0, right: 0, bottom: 0},
        dataSource: sourceData2,
        colorScheme: 'custom',
        seriesGroups: [
            {
                type: 'donut',
                series: [
                    {
                        dataField: 'visits',
                        displayText: 'device',
                        radius: 140,
                        innerRadius: 100,
                        selectedRadiusChange: 2

                    }
                ]
            }
        ]
    });
    sourceChart2.addColorScheme('custom', customColors);
    sourceChart2.refresh();

    /* Performance Chart 1 */
    const performanceChart1 = new window.Smart.Chart('#performanceChart-1', {
        animation: 'none',
        clip: false,
        caption: '',
        description: '',
        showLegend: true,
        padding: {left: 0, top: 5, right: 0, bottom: 0},
        titlePadding: {left: 50, top: 0, right: 0, bottom: 10},
        dataSource: users,
        colorScheme: 'custom',
        showBorderLine: false,
        xAxis: {
            dataField: 'month',
            valuesOnTicks: true,
            gridLines: {
                visible: false
            }
        },
        yAxis: {
            gridLines: {
                opacity: 0.2
            }
        },
        valueAxis: {
            minValue: 0,
            maxValue: 85,
            visible: true,
            labels: {
                formatSettings: {sufix: 'k'}
            }
        },
        seriesGroups:
            [
                {
                    type: 'splinearea',
                    series: [
                        {dataField: 'current', opacity: 0.8},
                        {dataField: 'previous', opacity: 0.8}
                    ]
                }
            ]
    });
    performanceChart1.addColorScheme('custom', customColors2);
    performanceChart1.refresh();

    /* Performance Chart 1 */
    const performanceChart2 = new window.Smart.Chart('#performanceChart-2', {
        animation: 'none',
        clip: false,
        caption: '',
        description: '',
        showLegend: true,
        padding: {left: 0, top: 5, right: 0, bottom: 0},
        titlePadding: {left: 50, top: 0, right: 0, bottom: 10},
        dataSource: sessions,
        colorScheme: 'custom',
        showBorderLine: false,
        xAxis:
            {
                dataField: 'month',
                valuesOnTicks: true,
                gridLines: {
                    visible: false
                }
            },
        valueAxis:
            {
                minValue: 0,
                maxValue: 85,
                visible: true,
                labels: {
                    formatSettings: {sufix: 'k'}
                }
            },
        seriesGroups:
            [
                {
                    type: 'splinearea',
                    series: [
                        {dataField: 'current', opacity: 0.8},
                        {dataField: 'previous', opacity: 0.8}
                    ]
                }
            ]
    });
    performanceChart2.addColorScheme('custom', customColors2);
    performanceChart2.refresh();
}