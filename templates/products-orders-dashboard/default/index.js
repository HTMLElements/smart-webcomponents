let marketShare;
let selectedMarketShare;
let revenue;
let totalRevenue;
let orders;
let totalOrders;
let customers;
let totalCustomers;

window.initDefault = function () {
    initMap();
    initCharts();

    window.updateData = updateData;
}

function initMap() {
    $('#worldMap').vectorMap({
        map: 'world_mill',
        scaleColors: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        // zoomMin: 2,
        hoverOpacity: 0.7,
        hoverColor: false,
        regionsSelectable: true,
        regionsSelectableOne: true,
        backgroundColor: '#eeeeee',
        regions: [
            { values: getRandomCountryData() }
        ],
        regionStyle: {
            selected: {
                fill: '#0071A4'
            },
            hover: {
                fill: '#0071A4',
                'fill-opacity': 0.5,
                cursor: 'pointer'
            },
        },
        onRegionClick: updateData
    });

    const map = $('#worldMap .jvectormap-container').data('mapObject');
    map.setSelectedRegions(['US']); //'BE', 'BG', 'GB', 'PT', 'IT', 'ES', 'FR', 'DE',
}

function initCharts() {
    new window.Smart.Chart('#marketShare', {
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
        colorScheme: 'scheme30',
        seriesGroups: [
            {
                type: 'donut',
                valueAxis: {
                    visible: false
                },
                series: [
                    {
                        dataField: 'share',
                        displayText: 'country',
                        radius: 40,
                        innerRadius: 20
                    }
                ]
            }
        ]
    });

    new window.Smart.Chart('#revenue', {
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
        colorScheme: 'scheme30',
        seriesGroups: [
            {
                type: 'column',
                valueAxis: {
                    visible: false
                },
                series: [
                    { dataField: 'data', displayText: 'month' }
                ]
            }
        ]
    });

    new window.Smart.Chart('#orders', {
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
        colorScheme: 'scheme30',
        seriesGroups: [
            {
                type: 'column',
                valueAxis: {
                    visible: false
                },
                series: [
                    { dataField: 'data', displayText: 'month' }
                ]
            }
        ]
    });

    new window.Smart.Chart('#customers', {
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
        colorScheme: 'scheme30',
        seriesGroups: [
            {
                type: 'column',
                valueAxis: {
                    visible: false
                },
                series: [
                    { dataField: 'data', displayText: 'month' }
                ]
            }
        ]
    });

    new window.Smart.Chart('#topSellingProducts', {
        theme: getTheme(),
        animationDuration: 600,
        backgroundColor: '#eeeeee',
        caption: '',
        description: '',
        showLegend: true,
        showBorderLine: false,
        padding: { left: 0, top: 0, right: 0, bottom: 0 },
        xAxis: {
            visible: false,
            dataField: 'SaleDate'
        },
        valueAxis: {
            visible: false
        },
        colorScheme: 'scheme30',
        seriesGroups: [
            {
                type: 'spline',
                series: [
                    { dataField: 'High Sharing', displayText: 'High Sharing' },
                    { dataField: 'Mk Movement', displayText: 'Mk Movement' },
                    { dataField: 'Pan Bridge', displayText: 'Pan Bridge' },
                    { dataField: 'Flip Disc', displayText: 'Flip Disc' }
                ]
            }
        ]
    });

    updateData();
}

function updateData() {
    marketShare = generateMarketShare();
    selectedMarketShare = marketShare[0].share;
    document.querySelector('.share.value').innerText = selectedMarketShare + ' %';
    document.getElementById('marketShare').dataSource = marketShare;

    revenue = generateRandomMonthsData(20000);
    totalRevenue = revenue.reduce((a, b) => a + (b['data'] || 0), 0);
    document.querySelector('.revenue.value').innerText = '$ ' + totalRevenue;
    document.getElementById('revenue').dataSource = revenue;

    orders = generateRandomMonthsData(15);
    totalOrders = orders.reduce((a, b) => a + (b['data'] || 0), 0);
    document.querySelector('.orders.value').innerText = totalOrders;
    document.getElementById('orders').dataSource = orders;

    customers = generateRandomMonthsData(10);
    totalCustomers = customers.reduce((a, b) => a + (b['data'] || 0), 0);
    document.querySelector('.customers.value').innerText = totalCustomers;
    document.getElementById('customers').dataSource = customers;

    document.getElementById('topSellingProducts').dataSource = generateTopSellingProducts();
}
