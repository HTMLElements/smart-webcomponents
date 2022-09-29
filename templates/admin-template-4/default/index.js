window.initDefault = function () {
    const weeklyData = [
            {market: 'Direct', revenue: 2873, value: 11},
            {market: 'Partner', revenue: 7201, value: -9},
            {market: 'Online', revenue: 1254, value: 27},
            {market: 'Other', revenue: 901, value: 0.2}
        ],
        reportData = [
            {id: 1, name: 'Ruby', startDate: new Date(2019, 3, 4),  status: 'Sale', price: '$24'},
            {id: 2, name: 'Diamond', startDate: new Date(2018, 0, 14), status: 'Extended', price: '$1250'},
            {id: 3, name: 'Alexandrite', startDate: new Date(2020, 8, 1),  status: 'Extended', price: '$1250'},
            {id: 4, name: 'Blue Sapphire', startDate: new Date(2019, 3, 19),  status: 'Tax', price: '$25'},
            {id: 5, name: 'Tanzanite', startDate: new Date(2009, 11, 11),  status: 'Sale', price: '$19'},
            {id: 6, name: 'Pink sapphire', startDate: new Date(2020, 8, 24),  status: 'Sale', price: '$200'},
            {id: 7, name: 'Aquamarine', startDate: new Date(2020, 2, 30),  status: 'Done', price: '$245'},
            {id: 8, name: 'Violet Sapphire', startDate: new Date(2017, 5, 23), status: 'Done', price: '$199'},
            {id: 9, name: 'Tourmaline', startDate: new Date(2020, 1, 1), status: 'In progress', price: '$1205'},
            {id: 10, name: 'Heliodor', startDate: new Date(2019, 3, 4),  status: 'Done', price: '$199'},
            {id: 11, name: 'Red beryl', startDate: new Date(2020, 5, 1), status: 'In progress', price: '$5'}
        ];


    new window.Smart.Table('#reportTable', {
        dataSource: reportData,
        freezeHeader: true,
        paging: false,
        pageSize: 10,
        // sortMode: 'many',
        tooltip: true,
        onCompleted() {
            // this.sortBy('startDate', 'asc');
        },
        columns: [
            {label: '#', dataField: 'id', dataType: 'number', width: '50px'},
            {label: 'Name', dataField: 'name', dataType: 'string'},
            {
                label: 'Status', dataField: 'status', dataType: 'string', formatFunction(settings) {
                    const value = settings.value;

                    settings.template = `<span class="smart-badge ${value.replace(' ', '-').toLowerCase()}"">${value}</span>`;
                }
            },
            {label: 'Date', dataField: 'startDate', dataType: 'date'},
            {label: 'Price', dataField: 'price', dataType: 'string'}
        ]
    });

    window.initDefaultChartComponents();

    addTodayMenuOpenHandlers();
}

window.initDefaultChartComponents = function () {
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
            {name: 'Alexandrite', startDate: new Date(2020, 8, 1), endDate: new Date(2020, 8, 11), status: 'Done', asignee: 'Miriam Watts'},
            {name: 'Blue Sapphire', startDate: new Date(2019, 3, 19), endDate: new Date(2019, 10, 30), status: 'Cancelled', asignee: 'Duane Williamson'},
            {name: 'Tanzanite', startDate: new Date(2009, 11, 11), endDate: new Date(2010, 11, 25), status: 'Done', asignee: 'Claude Garcia'},
            {name: 'Pink sapphire', startDate: new Date(2020, 8, 24), endDate: new Date(2020, 11, 31), status: 'Unassigned', asignee: ''},
            {name: 'Aquamarine', startDate: new Date(2020, 2, 30), endDate: new Date(2020, 4, 17), status: 'Done', asignee: 'Virgil Curtis'},
            {name: 'Violet Sapphire', startDate: new Date(2017, 5, 23), endDate: new Date(2019, 8, 9), status: 'Done', asignee: 'Steven Gray'},
            {name: 'Tourmaline', startDate: new Date(2020, 1, 1), endDate: new Date(2021, 5, 1), status: 'In progress', asignee: 'Beatrice Kim'},
            {name: 'Heliodor', startDate: new Date(2019, 3, 4), endDate: new Date(2019, 4, 7), status: 'Done', asignee: 'Enrique White'},
            {name: 'Red beryl', startDate: new Date(2020, 5, 1), endDate: new Date(2020, 9, 1), status: 'In progress', asignee: 'Jenny Rodriguez'}
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
                type: 'splinearea',
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

    // const chart2 = new window.Smart.Chart('#weeklySalesChart', {
    //     animation: 'none',
    //     theme: getTheme(),
    //     caption: '',
    //     description: '',
    //     showLegend: false,
    //     showBorderLine: false,
    //     padding: {left: 0, top: 0, right: 0, bottom: 0},
    //     dataSource: weeklyData,
    //     colorScheme: 'custom',
    //     seriesGroups: [
    //         {
    //             type: 'pie',
    //             series: [
    //                 {
    //                     dataField: 'revenue',
    //                     displayText: 'market',
    //                     radius: 70,
    //                     selectedRadiusChange: 2
    //
    //                 }
    //             ]
    //         }
    //     ]
    // });
    // chart2.addColorScheme('custom', customColors);
    // chart2.refresh();
    //
    // const chart3 = new window.Smart.Chart('#salesComparisonChart', {
    //     animation: 'none',
    //     theme: getTheme(),
    //     caption: '',
    //     description: '',
    //     showLegend: false,
    //     showBorderLine: false,
    //     padding: {left: 5, top: 15, right: 25, bottom: 5},
    //     dataSource: salesComparisonData,
    //     xAxis: {
    //         dataField: 'month',
    //         displayText: 'Month',
    //         gridLines: {
    //             visible: false
    //         }
    //     },
    //     colorScheme: 'custom',
    //     seriesGroups: [
    //         {
    //             type: 'column',
    //             valueAxis: {
    //                 labels: {
    //                     horizontalAlignment: 'right',
    //                     formatSettings: {decimalPlaces: 0}
    //                 },
    //                 gridLines: {
    //                     visible: false
    //                 }
    //             },
    //             series: [
    //                 {dataField: 'last', displayText: 'Last year'},
    //                 {dataField: 'current', displayText: 'This year'}
    //             ]
    //         }
    //     ]
    // });
    // chart3.addColorScheme('custom', customColors);
    // chart3.refresh();
}