(function () {
    'use strict'
    initializeChart();
    applyThemeChart();
})();

// Calendar dark theme
function applyThemeChart() {
    'use strict'
    const currentTheme = document.getElementById('header-change-theme-btn').theme,
        contentContainer = document.getElementById('include-html-page'),
        customElements = contentContainer.querySelectorAll('smart-card, smart-chart');

    if (contentContainer.firstElementChild.classList.contains('smart-visibility-hidden')) {
        contentContainer.firstElementChild.classList.remove('smart-visibility-hidden')
    }

    for (let i = 0; i < customElements.length; i++) {
        if (customElements[i]) {
            customElements[i].theme = currentTheme;
        }
    }
}

function initializeChart() {
    'use strict'
    //First Chart
    new smartChart('#simple-with-gradient', {
        animationDuration: 1200,
        borderLineWidth: 0,
        toolTipLineColor: '#ccc',
        toolTipBackground: '#ebebeb',
        caption: ' ',
        description: ' ',
        showLegend: false,
        padding: { left: 10, top: 5, right: 10, bottom: 5 },
        titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
        dataSource: [
            { Month: 'Jul', value: 15 },
            { Month: 'Aug', value: 25 },
            { Month: 'Sep', value: 20 },
            { Month: 'Oct', value: 30 },
            { Month: 'Nov', value: 25 },
            { Month: 'Dec', value: 30 },
        ],
        colorScheme: 'scheme32',
        xAxis:
        {
            line: {
                color: 'white'
            },
            dataField: 'Month',
            tickMarks: {
                visible: false,
            },
            gridLines: {
                visible: false,
                unitInterval: 3,
                color: '#BCBCBC'
            }
        },
        clip: false,
        valueAxis:
        {
            visible: true,
            title: { text: ' ' },
            unitInterval: 10,
            maxValue: 40,
        },
        seriesGroups:
        [
            {
                type: 'spline',
                valueAxis:
                {
                    displayValueAxis: false,
                    tickMarksColor: 'white',
                    line: {
                        color: 'white'
                    },
                },
                series: [
                    {
                        dataField: 'value',
                        displayText: 'Sales',
                        fillColor: '#f5365c',
                    },
                ]
            }
        ]
    });

    //Second Chart
    new smartChart('#with-numbers-and-grid', {
        animationDuration: 1000,
        colorScheme: 'scheme01',
        borderLineWidth: 0,
        toolTipLineColor: '#ccc',
        toolTipBackground: '#ebebeb',
        caption: ' ',
        description: ' ',
        showLegend: false,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        dataSource: [
            { Day: 'Jul', value: 90 },
            { Day: 'Aug', value: 35 },
            { Day: 'Sep', value: 64 },
            { Day: 'Oct', value: 15 },
            { Day: 'Nov', value: 70 },
        ],
        xAxis:
        {
            dataField: 'Day',
            gridLines: {
                visible: false
            },
            tickMarks: {
                visible: false,
            },
        },
        seriesGroups:
        [
            {
                type: 'spline',
                columnsGapPercent: 50,
                seriesGapPercent: 0,
                valueAxis:
                {
                    line: {
                        color: 'white'
                    },
                    unitInterval: 40,
                    minValue: 0,
                    maxValue: 100,
                    displayValueAxis: false,
                    axisSize: 'auto',
                    tickMarksColor: 'white',
                },
                series: [
                    {
                        dataField: 'value',
                        displayText: 'Orders',
                        fillColor: '#00f2c3'
                    },
                ]
            }
        ]
    })

    //Third Chart
    new smartChart('#gradient-bar-chart', {
        animationDuration: 1000,
        colorScheme: 'scheme01',
        borderLineWidth: 0,
        toolTipLineColor: '#ccc',
        toolTipBackground: '#ebebeb',
        caption: ' ',
        description: ' ',
        showLegend: false,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        dataSource: [
            { Day: 'USA', value: 30 },
            { Day: 'GER', value: 27 },
            { Day: 'AUS', value: 64 },
            { Day: 'UK', value: 68 },
            { Day: 'RO', value: 30 },
            { Day: 'BR', value: 55 },
        ],
        xAxis:
        {
            dataField: 'Day',
            gridLines: {
                visible: false
            },
            tickMarks: {
                visible: false,
            },
        },
        seriesGroups:
        [
            {
                type: 'column',
                columnsGapPercent: 50,
                seriesGapPercent: 0,
                valueAxis:
                {
                    line: {
                        color: 'white'
                    },
                    unitInterval: 20,
                    minValue: 20,
                    maxValue: 80,
                    displayValueAxis: false,
                    axisSize: 'auto',
                    tickMarksColor: 'white',
                },
                series: [
                    {
                        dataField: 'value',
                        displayText: 'Orders'
                    },
                ]


            }
        ]
    });

    //Fourth Chart 
    new smartChart('#multiple-bars-chart-with-grid', {
        animationDuration: 1000,
        colorScheme: 'scheme01',
        borderLineWidth: 0,
        toolTipLineColor: '#ccc',
        toolTipBackground: '#ebebeb',
        caption: ' ',
        description: ' ',
        showLegend: false,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        dataSource: [
            { Day: 'USA', value: 30, a: 50 },
            { Day: 'GER', value: 27, a: 60 },
            { Day: 'AUS', value: 64, a: 35 },
            { Day: 'UK', value: 68, a: 40 },
            { Day: 'RO', value: 30, a: 75 },
            { Day: 'BR', value: 55, a: 123 },
        ],
        xAxis:
        {
            dataField: 'Day',
            gridLines: {
                visible: false
            },
            tickMarks: {
                visible: false,
            },
        },
        seriesGroups:
        [
            {
                type: 'column',
                columnsGapPercent: 50,
                seriesGapPercent: 0,
                valueAxis:
                {
                    line: {
                        color: 'white'
                    },
                    unitInterval: 20,
                    minValue: 20,
                    maxValue: 80,
                    displayValueAxis: false,
                    axisSize: 'auto',
                    tickMarksColor: 'white',
                },
                series: [
                    {
                        dataField: 'value',
                        displayText: 'Orders'
                    },
                    {
                        dataField: 'a',
                        displayText: 'Orders2'
                    },

                ]


            }
        ]
    });

    //Fifth CHart
    new smartChart('#pie-chart', {
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
        dataSource: [
            {
                Browser: '1',
                Share: 60
            },
            {
                Browser: '2',
                Share: 40
            }
        ],
        colorScheme: 'scheme32',
        seriesGroups:
        [
            {
                type: 'pie',
                showLabels: true,
                series:
                [
                    {
                        dataField: 'Share',
                        displayText: 'Browser',
                        labelRadius: 90,
                        initialAngle: 15,
                        radius: 70,
                        centerOffset: 0,
                        formatFunction: function (value) {
                            if (isNaN(value)) {
                                // Legend labels formatting
                                return value;
                            }

                            return parseFloat(value) + '%';
                        },
                        useGradientColors: false
                    }
                ]
            }
        ]
    });

    //Sixth Chart
    new smartChart('#pie-chart2', {
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
        dataSource: [
            {
                Browser: '1',
                Share: 50
            },
            {
                Browser: '2',
                Share: 30
            },
            {
                Browser: '3',
                Share: 20
            }
        ],
        colorScheme: 'scheme32',
        seriesGroups:
        [
            {
                type: 'pie',
                showLabels: true,
                series:
                [
                    {
                        dataField: 'Share',
                        displayText: 'Browser',
                        labelRadius: 90,
                        initialAngle: 15,
                        radius: 70,
                        centerOffset: 0,
                        formatFunction: function (value) {
                            if (isNaN(value)) {
                                // Legend labels formatting
                                return value;
                            }

                            return parseFloat(value) + '%';
                        },
                        useGradientColors: false
                    }
                ]
            }
        ]
    });
}