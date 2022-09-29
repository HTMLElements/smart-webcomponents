window.initDashboard2 = function () {
    const
        weeklyData = [
            {market: 'Direct', revenue: 2873, value: 11},
            {market: 'Partner', revenue: 7201, value: -9},
            {market: 'Online', revenue: 1254, value: 27},
            {market: 'Other', revenue: 901, value: 0.2}
        ],
        projectsData = [
            {name: 'Ruby', startDate: new Date(2019, 3, 4), endDate: new Date(2019, 4, 7), status: 'Done', asignee: 'Ethan Holland'},
            {name: 'Diamond', startDate: new Date(2018, 0, 14), endDate: new Date(2019, 1, 7), status: 'Done', asignee: 'Jessie Price'},
            {name: 'Alexandrite', startDate: new Date(2021, 8, 1), endDate: new Date(2021, 8, 11), status: 'Done', asignee: 'Miriam Watts'},
            {name: 'Blue Sapphire', startDate: new Date(2019, 3, 19), endDate: new Date(2019, 10, 30), status: 'Cancelled', asignee: 'Duane Williamson'},
            {name: 'Tanzanite', startDate: new Date(2009, 11, 11), endDate: new Date(2010, 11, 25), status: 'Done', asignee: 'Claude Garcia'},
            {name: 'Pink sapphire', startDate: new Date(2021, 8, 24), endDate: new Date(2021, 11, 31), status: 'Unassigned', asignee: ''},
            {name: 'Aquamarine', startDate: new Date(2021, 2, 30), endDate: new Date(2021, 4, 17), status: 'Done', asignee: 'Virgil Curtis'},
            {name: 'Violet Sapphire', startDate: new Date(2017, 5, 23), endDate: new Date(2019, 8, 9), status: 'Done', asignee: 'Steven Gray'},
            {name: 'Tourmaline', startDate: new Date(2021, 1, 1), endDate: new Date(2021, 5, 1), status: 'In progress', asignee: 'Beatrice Kim'},
            {name: 'Heliodor', startDate: new Date(2019, 3, 4), endDate: new Date(2019, 4, 7), status: 'Done', asignee: 'Enrique White'},
            {name: 'Red beryl', startDate: new Date(2021, 5, 1), endDate: new Date(2021, 9, 1), status: 'In progress', asignee: 'Jenny Rodriguez'}
        ];

    new window.Smart.Table('#weeklySalesTable', {
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
    });
    new window.Smart.Table('#projectsTable', {
        dataSource: projectsData,
        freezeHeader: true,
        paging: true,
        pageSize: 10,
        sortMode: 'many',
        tooltip: true,
        onCompleted() {
            this.sortBy('startDate', 'asc');
        },
        columns: [
            {label: 'Name', dataField: 'name', dataType: 'string'},
            {label: 'Start date', dataField: 'startDate', dataType: 'date'},
            {label: 'End date', dataField: 'endDate', dataType: 'date'},
            {
                label: 'Status', dataField: 'status', dataType: 'string', formatFunction(settings) {
                    const value = settings.value;

                    settings.template = `<span class="pill ${value.replace(' ', '-').toLowerCase()}"">${value}</span>`;
                }
            },
            {label: 'Asignee', dataField: 'asignee', dataType: 'string'}
        ]
    });

    window.initDashboard2ChartComponents();

    addTodayMenuOpenHandlers();
}


window.initDashboard2ChartComponents = function () {
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
        weeklyData = [
            {market: 'Direct', revenue: 2873, value: 11},
            {market: 'Partner', revenue: 7201, value: -9},
            {market: 'Online', revenue: 1254, value: 27},
            {market: 'Other', revenue: 901, value: 0.2}
        ],
        projectsData = [
            {name: 'Ruby', startDate: new Date(2019, 3, 4), endDate: new Date(2019, 4, 7), status: 'Done', asignee: 'Ethan Holland'},
            {name: 'Diamond', startDate: new Date(2018, 0, 14), endDate: new Date(2019, 1, 7), status: 'Done', asignee: 'Jessie Price'},
            {name: 'Alexandrite', startDate: new Date(2021, 8, 1), endDate: new Date(2021, 8, 11), status: 'Done', asignee: 'Miriam Watts'},
            {name: 'Blue Sapphire', startDate: new Date(2019, 3, 19), endDate: new Date(2019, 10, 30), status: 'Cancelled', asignee: 'Duane Williamson'},
            {name: 'Tanzanite', startDate: new Date(2009, 11, 11), endDate: new Date(2010, 11, 25), status: 'Done', asignee: 'Claude Garcia'},
            {name: 'Pink sapphire', startDate: new Date(2021, 8, 24), endDate: new Date(2021, 11, 31), status: 'Unassigned', asignee: ''},
            {name: 'Aquamarine', startDate: new Date(2021, 2, 30), endDate: new Date(2021, 4, 17), status: 'Done', asignee: 'Virgil Curtis'},
            {name: 'Violet Sapphire', startDate: new Date(2017, 5, 23), endDate: new Date(2019, 8, 9), status: 'Done', asignee: 'Steven Gray'},
            {name: 'Tourmaline', startDate: new Date(2021, 1, 1), endDate: new Date(2021, 5, 1), status: 'In progress', asignee: 'Beatrice Kim'},
            {name: 'Heliodor', startDate: new Date(2019, 3, 4), endDate: new Date(2019, 4, 7), status: 'Done', asignee: 'Enrique White'},
            {name: 'Red beryl', startDate: new Date(2021, 5, 1), endDate: new Date(2021, 9, 1), status: 'In progress', asignee: 'Jenny Rodriguez'}
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
        enableCrosshairs: false,
        padding: {left: 5, top: 0, right: 0, bottom: 40},
        dataSource: salesData,
        xAxis: {
            dataField: 'month',
            displayText: 'Month',
            visible: false,
            gridLines: {
                visible: false
            }
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
                    visible: false,
                    gridLines: {
                        visible: false
                    }
                },
                series: [
                    {dataField: 'sales', displayText: 'Sales ($)', symbolSize: 8, lineColor: 'white', lineColorSymbol: 'white'}
                ]
            }
        ]
    });
    chart1.addColorScheme('custom', customColors);
    chart1.refresh();

    const chart2 = new window.Smart.Chart('#weeklySalesChart', {
        animation: 'none',
        theme: getTheme(),
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
        padding: {left: 0, top: 0, right: 0, bottom: 0},
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
    });
    chart2.addColorScheme('custom', customColors);
    chart2.refresh();

    const chart3 = new window.Smart.Chart('#salesComparisonChart', {
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
    chart3.addColorScheme('custom', customColors);
    chart3.refresh();
}