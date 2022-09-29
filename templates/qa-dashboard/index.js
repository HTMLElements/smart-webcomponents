window.onload = function () {
    document.querySelector('.recent-tickets-card').addEventListener('click', function (e) {
        let qaCards = document.querySelectorAll('.top-qa-card');

        for (let i = 0; i < qaCards.length; i++) {
            if (qaCards[i].classList.contains('active')) {
                qaCards[i].classList.remove('active');
            }
        }

        e.target.closest('smart-card').classList.add('active');
    });
};

function loadMaps() {
    const locations = [
        { lat: -31.563910, lng: 147.154312 },
        { lat: -33.718234, lng: 150.363181 },
        { lat: -33.727111, lng: 150.371124 },
        { lat: -33.848588, lng: 151.209834 },
        { lat: -33.851702, lng: 151.216968 },
        { lat: -34.671264, lng: 150.863657 },
        { lat: -35.304724, lng: 148.662905 },
        { lat: -36.817685, lng: 175.699196 },
        { lat: -36.828611, lng: 175.790222 },
        { lat: -37.750000, lng: 145.116667 },
        { lat: -37.759859, lng: 145.128708 },
        { lat: -37.765015, lng: 145.133858 },
        { lat: -37.770104, lng: 145.143299 },
        { lat: -37.773700, lng: 145.145187 },
        { lat: -37.774785, lng: 145.137978 },
        { lat: -37.819616, lng: 144.968119 },
        { lat: -38.330766, lng: 144.695692 },
        { lat: -39.927193, lng: 175.053218 },
        { lat: -41.330162, lng: 174.865694 },
        { lat: -42.734358, lng: 147.439506 },
        { lat: -42.734358, lng: 147.501315 },
        { lat: -42.735258, lng: 147.438000 },
        { lat: -43.999792, lng: 170.463352 }
    ];

    // The location of Uluru
    const styles = [
        {
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#f5f5f5'
                }
            ]
        },
        {
            'elementType': 'labels.icon',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#616161'
                }
            ]
        },
        {
            'elementType': 'labels.text.stroke',
            'stylers': [
                {
                    'color': '#f5f5f5'
                }
            ]
        },
        {
            'featureType': 'administrative.land_parcel',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#bdbdbd'
                }
            ]
        },
        {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#eeeeee'
                }
            ]
        },
        {
            'featureType': 'poi',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#757575'
                }
            ]
        },
        {
            'featureType': 'poi.park',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#e5e5e5'
                }
            ]
        },
        {
            'featureType': 'poi.park',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#9e9e9e'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#ffffff'
                }
            ]
        },
        {
            'featureType': 'road.arterial',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#757575'
                }
            ]
        },
        {
            'featureType': 'road.highway',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#dadada'
                }
            ]
        },
        {
            'featureType': 'road.highway',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#616161'
                }
            ]
        },
        {
            'featureType': 'road.local',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#9e9e9e'
                }
            ]
        },
        {
            'featureType': 'transit.line',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#e5e5e5'
                }
            ]
        },
        {
            'featureType': 'transit.station',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#eeeeee'
                }
            ]
        },
        {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#c9c9c9'
                }
            ]
        },
        {
            'featureType': 'water',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#9e9e9e'
                }
            ]
        }
    ],
        uluru = { lat: 42.695537, lng: 23.2539071 },
        myLatLng = { lat: -25.363, lng: 131.044 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: { lat: -31.024, lng: 145.887 },
        styles: styles
    });

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
loadMaps();


new Smart.Grid('#recentTickets', {
    sorting: {
        enabled: true
    },
    layout: {
        rowHeight: 95
    },
    dataSource: new Smart.DataAdapter(
        {
            dataSource: [
                {
                    date: '9:44 AM',
                    bug: 'Can each series in a line chart have its own dataCollection?',
                    status: 'Complete',
                },
                {
                    date: '11:52 AM',
                    bug: 'Datatable editing within multiview',
                    status: 'Pending',
                },
                {
                    date: '12:37 AM',
                    bug: 'Error: [DOM] Found 7 elements with non-unique id',
                    status: 'Open',
                },
                {
                    date: '1:18 PM',
                    bug: 'Prevent clearing CSS added to node after filterByAll() in datatable filter',
                    status: 'Open',
                },
                {
                    date: '3:44 PM',
                    bug: 'How to apply fewer options of drop down menu for specific rows of datatable?',
                    status: 'Open',
                },
                {
                    date: '8:20 PM',
                    bug: 'Links in the upper right menu',
                    status: 'Pending',
                },
                {
                    date: '11:49 PM',
                    bug: 'Document export is empty',
                    status: 'Open',
                },

            ],
            dataFields:
            [
                'date: string',
                'bug: string',
                'status: string',
            ]
        }),
    columns: [
        { label: 'Date', dataField: 'date', cellsAlign: 'center', align: 'center', width: '20%' },
        { label: 'Bug', dataField: 'bug', width: '60%' },
        { label: 'Status', dataField: 'status', width: '20%', formatFunction(settings) {
                settings.template = '<span class="status-' + settings.row.data.status.toLowerCase() + '">' + settings.row.data.status + '</span>';
            }
        },
    ]
});
