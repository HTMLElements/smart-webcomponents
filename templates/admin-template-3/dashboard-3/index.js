window.initDashboard3 = function () {
    const
        sourceData = [
            {market: 'Direct', revenue: 2873, value: 11},
            {market: 'Google Ads', revenue: 7201, value: -9},
            {market: 'Facebook', revenue: 1254, value: 27},
            {market: 'Other', revenue: 901, value: 0.2}
        ],
        clientsData = [
            {name: 'Marcia Gomez', subject: 'Problem with delivery', email: 'marcia.gomez@example.com', date: '01.01.2021'},
            {name: 'Marvin George', subject: 'Cancellation of order', email: 'marvin.george@example.com', date: '11.13.2021'},
            {name: 'Carole Pearson', subject: 'Order change.', email: 'carole.pearson@example.com', date: '08.28.2021'},
            {name: 'Leroy Shelton', subject: 'Delivery issue', email: 'leroy.shelton@example.com', date: '06.21.2021'},
            {name: 'Daisy Murphy', subject: 'Order cancel', email: 'daisy.murphy@example.com', date: '05.15.2021'}
        ];

    const chart1 = new window.Smart.Chart('#sourceChart', {
        animation: 'none',
        theme: getTheme(),
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
        padding: {left: 0, top: 0, right: 0, bottom: 0},
        dataSource: sourceData,
        colorScheme: 'custom',
        seriesGroups: [
            {
                type: 'pie',
                series: [
                    {
                        dataField: 'revenue',
                        displayText: 'market',
                        radius: 90,
                        selectedRadiusChange: 2

                    }
                ]
            }
        ]
    });

    const customColors = ['#16736F', '#DB4437', '#1877f2', '#62B773'];
    chart1.addColorScheme('custom', customColors);
    chart1.refresh();

    new window.Smart.Table('#sourceTable', {
        dataSource: sourceData,
        columns: [
            {
                label: 'Source', dataField: 'market', dataType: 'string', formatFunction(settings) {
                    settings.template = `<div class="color-box-container"><div class="color-box ${settings.value.toLowerCase()}"></div>${settings.value}</div>`;
                }
            },
            {
                label: 'Total', dataField: 'revenue', dataType: 'number', formatFunction(settings) {
                    settings.template = `${settings.value} visits`;
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

    new window.Smart.Table('#hoverableTable', {
        dataSource: clientsData,
        tooltip: false,
        columns: [
            {label: 'Name', dataField: 'name', dataType: 'string'},
            {label: 'Subject', dataField: 'subject', dataType: 'string'},
            {label: 'E-mail', dataField: 'email', dataType: 'string'},
            {label: 'Date', dataField: 'date', dataType: 'date'},
            {label: 'Action', dataField: 'action', formatFunction: function (settings) {
                    settings.template = '<div class="text-center"><a href="#" class="btn btn-sm text-danger btn-light hover-bg-primary hover-text-secondary"><i class="material-icons">delete</i></a><a href="#" class="btn btn-sm text-primary btn-light hover-bg-primary hover-text-secondary mx-3"><i class="material-icons">visibility</i></a></div>';
                }
            }
        ]
    });


    addTodayMenuOpenHandlers();
}