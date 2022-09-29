window.initDetail = function () {
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

    new window.Smart.Chart('#earningsChart', {
        animation: 'none',
        theme: getTheme(),
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
        padding: { left: 5, top: 15, right: 25, bottom: 5 },
        dataSource: salesComparisonData,
        xAxis: {
            dataField: 'month',
            displayText: 'Month',
            gridLines: {
                visible: false
            }
        },
        colorScheme: 'scheme32',
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
    });

    addTodayMenuOpenHandlers();
}