window.initCustomers = function () {
    initTable();
    initCharts();
};

function initTable() {
    window.Smart('#customers-table', class {
        get properties() {
            return {
                dataSource: new window.Smart.DataAdapter(
                    {
                        dataSource: generateData(100),
                        dataFields:
                            [
                                'firstName: string',
                                'lastName: string',
                                'productName: string',
                                'quantity: number',
                                'price: number',
                                'total: number'
                            ]
                    }),
                keyboardNavigation: true,
                selection: true,
                paging: true,
                pageSize: 10,
                columns: [
                    { label: 'First Name', dataField: 'firstName', dataType: 'string' },
                    { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
                    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                    { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
                    { label: 'Price', dataField: 'price', dataType: 'number', formatFunction: priceFormatFunction },
                    {
                        label: 'Total', dataField: 'total', dataType: 'number',
                        formatFunction: (settings) => {
                            settings.value = Math.round(settings.value * 100) / 100;
                        }
                    }
                ]
            }
        }
    });
}

function initCharts() {

    const productSalesByRange = [
        {
            "Product": "High Sharing",
            "Sales": 34321654
        },
        {
            "Product": "Mk Movement",
            "Sales": 53547924
        },
        {
            "Product": "Pan Bridge",
            "Sales": 28547961
        },
        {
            "Product": "Flip Disc",
            "Sales": 99745812
        },
        {
            "Product": "Top Cruise",
            "Sales": 67965428
        },
        {
            "Product": "One Scale",
            "Sales": 52159400
        }
    ];

    $('#map-chart').vectorMap({
        map: 'world_mill',
        scaleColors: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        markerStyle: {
            initial: {
                fill: getComputedStyle(document.documentElement).getPropertyValue('--primary-color'),
                stroke: getComputedStyle(document.documentElement).getPropertyValue('--second-color')
            }
        },
        regionStyle: {
            initial: {
                fill: '#d6d7da'
            }
        },
        focusOn: {
            x: 0.5,
            y: 0.35,
            scale: 5
        },
        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-background'),
        markers: [
            { latLng: [34.3, -118.15], name: 'Los Angeles' },
            { latLng: [37.47, -122.26], name: 'San Francisco' },
            { latLng: [38.35, -121.3], name: 'Sacramento' },
            { latLng: [19, 72.48], name: 'Mumbai' },
            { latLng: [22.34, 88.24], name: 'Calcutta' },
            { latLng: [-33.55, 18.22], name: 'Cape Town' },
            { latLng: [50.7, 8.41], name: 'Frankfurt' },
            { latLng: [52.3, 13.25], name: 'Berlin' },
            { latLng: [44.5, -0.31], name: 'Bordeaux' },
            { latLng: [30.2, 31.21], name: 'Cairo' },
            { latLng: [44.25, 26.7], name: 'Bucharest' }
        ]
    });

    new window.Smart.Chart('#channels-bars-chart', {
        caption: 'Purchase by product',
        colorScheme: 'scheme29',     
        description: '',
        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-background'),
        showBorderLine: false,
        showLegend: true,
        animationDuration: 1000,
        padding: { left: 15, top: 0, right: 20, bottom: 0 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 0 },
        dataSource: productSalesByRange,
        xAxis: { visible: false },
        seriesGroups:
            [
                {
                    type: 'column',
                    orientation: 'horizontal',
                    columnsGapPercent: 50,
                    seriesGapPercent: 20,
                    useGradientColors: false,
                    valueAxis:
                    {
                        unitInterval: 20000000,
                        minValue: 0,
                        flip: true,
                        axisSize: 'auto',
                        line: {
                            visible: false
                        },
                        formatFunction: (value) => { return '$' + value / 1000000 + 'M' }
                    },
                    series: [
                        { dataField: 'Sales', displayText: 'Sales' }
                    ]
                }
            ]
    });

    initRangeSelectorChart(onRangeSelectorChange);
}

function onRangeSelectorChange() {
    document.getElementById('channels-bars-chart').refresh();
    updateMapCities();
}

function updateMapCities(data) {
    const map = $('#map-chart .jvectormap-container').data('mapObject');
    const markers = data
        ||
        [
            { latLng: [34.3, -118.15], name: 'Los Angeles' },
            { latLng: [37.47, -122.26], name: 'San Francisco' },
            { latLng: [38.35, -121.3], name: 'Sacramento' },
            { latLng: [19, 72.48], name: 'Mumbai' },
            { latLng: [22.34, 88.24], name: 'Calcutta' },
            { latLng: [-33.55, 18.22], name: 'Cape Town' },
            { latLng: [50.7, 8.41], name: 'Frankfurt' },
            { latLng: [52.3, 13.25], name: 'Berlin' },
            { latLng: [44.5, -0.31], name: 'Bordeaux' },
            { latLng: [30.2, 31.21], name: 'Cairo' },
            { latLng: [44.25, 26.7], name: 'Bucharest' }
        ]

    map.removeAllMarkers();
    setTimeout(() => { map.addMarkers(markers) }, 500);
}

function transformPath(path, wScale, hScale, xOffset, yOffset) {
    var output = '';
    for (var i = 0; i < path.length; i++) {
        if (path[i] === 'C' || path[i] === 'M' || path[i] === 'L') {
            output += path[i];
            i++;

            var j = i;
            while (j + 1 < path.length && !(path[j + 1] === 'C' || path[j + 1] === 'M' || path[j + 1] === 'L' || path[j + 1] === 'z'))
                j++;
            var value = path.substring(i, j);
            var pointsString = value.split(' ');
            for (var s = 0; s < pointsString.length; s++) {
                if (pointsString[s].length === 0)
                    continue;
                var pointString = pointsString[s].split(',');
                var point = { x: pointString[0], y: pointString[1] };
                point.x = point.x * wScale + xOffset;
                point.y = point.y * hScale + yOffset;
                output += ' ' + point.x + ',' + point.y + ' ';
            }
            i = j - 1;
        }
        else {
            output += path[i];
        }
    }
    return output;
}

function priceFormatFunction(settings) {
    settings.template = '$' + settings.value;
}