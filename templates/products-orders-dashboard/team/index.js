let salesVolume;
let monthlyAverageSales;
let totalMonthlyAverageSales;

window.initTeam = function () {
    initScheduler();
    initCharts();
    updateData();
    attachEvents();

    window.updateData = updateData;
}

function initCharts() {
    new window.Smart.Chart('#toDateSalesChart', {
        theme: getTheme(),
        animationDuration: 600,
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
        padding: { left: 0, top: 0, right: 0, bottom: 0 },
        xAxis: {
            visible: false
        },
        valueAxis: {
            visible: true,
            flip: true,
            minValue: 0,
            maxValue: 8000,
            labels: {
                visible: false
            },
            gridLines: {
                visible: false
            }
        },
        colorScheme: 'scheme01',
        seriesGroups: [
            {
                type: 'column',
                orientation: 'horizontal',
                series: [
                    { dataField: 'data', displayText: 'data' }
                ],
                bands: [
                    { minValue: 7500, maxValue: 7500, color: 'red', opacity: 1, lineWidth: 3 }
                ]
            }
        ]
    });

    new window.Smart.Chart('#averageSalesChart', {
        theme: getTheme(),
        animationDuration: 600,
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
        padding: { left: 0, top: 0, right: 0, bottom: 0 },
        xAxis: {
            visible: false
        },
        valueAxis: {
            visible: false
        },
        colorScheme: 'scheme01',
        seriesGroups: [
            {
                type: 'line',
                series: [
                    { dataField: 'data', displayText: 'data' }
                ]
            }
        ]
    });

    new window.Smart.Chart('#salesChart', {
        theme: getTheme(),
        animationDuration: 600,
        caption: '',
        description: '',
        colorScheme: 'scheme01',
        padding: { left: 0, top: 0, right: 0, bottom: 0 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 0 },
        showLegend: true,
        showBorderLine: false,
        xAxis: {
            dataField: 'SaleDate',
            gridLines: {
                visible: false
            }
        },
        seriesGroups: [
            {
                type: 'column',
                columnsGapPercent: 40,
                seriesGapPercent: 5,
                valueAxis: {
                    visible: false,
                    minValue: 0,
                    maxValue: 130000,
                    axisSize: 'auto'
                },
                series: [
                    { dataField: 'Representative' },
                    { dataField: 'Total' }
                ],
                toolTipFormatSettings: {
                    prefix: '$'
                }
            }
        ]
    });
}

function initScheduler() {
    new window.Smart.Scheduler('#scheduler', {
        view: 'month',
        views: ['month'],
        dateCurrent: new Date(),
        firstDayOfWeek: 1,
        disableDateMenu: true,
        disableWindowEditor: true,
        disableDrag: true,
        disableDrop: true,
        disableSelection: true,
        disableContextMenu: true
    });
}

function updateData() {
    salesVolume = generateSalesVolume();
    document.getElementById('salesVolume').innerText = '$ ' + salesVolume[0].data;
    document.getElementById('toDateSalesChart').dataSource = salesVolume;

    monthlyAverageSales = generateRandomMonthsData(1000);
    totalMonthlyAverageSales = monthlyAverageSales.reduce((a, b) => a + (b['data'] || 0), 0);
    document.getElementById('averageSales').innerText = '$ ' + totalMonthlyAverageSales;
    document.getElementById('averageSalesChart').dataSource = monthlyAverageSales;

    document.getElementById('salesChart').dataSource = generateSalesData();

    document.getElementById('scheduler').dataSource = generateSchedulerTasks();
}

function attachEvents() {
    document.getElementById('phoneBook').addEventListener('itemClick', e => {
        const firstName = e.detail.label.split('</i>')[1].split(' ')[0].toLowerCase();
        document.querySelector('#about .icon').style.backgroundImage = 'url(../../images/phonebook/' + firstName + '.png)';

        updateData();
    });
}
