(function () {
    loadDashboardJs();
    applyThemeDashboard();
})();

// Calendar dark theme
function applyThemeDashboard() {
    'use strict'
    const currentTheme = document.getElementById('header-change-theme-btn').theme,
        contentContainer = document.getElementById('include-html-page'),
        customElements = contentContainer.querySelectorAll('smart-card, smart-chart, smart-grid, smart-drop-down-button, smart-tabs');

    if (contentContainer.firstElementChild.classList.contains('smart-visibility-hidden')) {
        contentContainer.firstElementChild.classList.remove('smart-visibility-hidden')
    }

    for (let i = 0; i < customElements.length; i++) {
        if (customElements[i]) {
            customElements[i].theme = currentTheme;
        }
    }
}


function loadDashboardJs() {
    'use strict'
    /* accountsShipments, purchasesShipments, sessionsShipments */
    //accountsShipments chart
    new smartChart('#accountsShipments', {
        borderLineWidth: 0,
        caption: ' ',
        description: ' ',
        showLegend: false,
        dataSource: [
            { Month: 'Jan', value: 0 },
            { Month: 'Feb', value: 10 },
            { Month: 'Mar', value: 5 },
            { Month: 'Apr', value: 25 },
            { Month: 'May', value: 20 },
            { Month: 'Jun', value: 20 },
            { Month: 'Jul', value: 15 },
            { Month: 'Aug', value: 25 },
            { Month: 'Sep', value: 20 },
            { Month: 'Oct', value: 30 },
            { Month: 'Nov', value: 25 },
            { Month: 'Dec', value: 30 },
        ],
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
                    tickMarksColor: 'transparent',
                    line: {
                        visible: false,
                    },
                },
                series: [
                    {
                        dataField: 'value',
                        displayText: 'Value',
                        fillColor: '#f5365c',
                    },
                ]
            }
        ]
    });

    //purchasesShipments chart
    new smartChart('#purchasesShipments', {
        borderLineWidth: 0,
        caption: ' ',
        description: ' ',
        showLegend: false,
        dataSource: [
            { Month: 'Jan', value: 10 },
            { Month: 'Feb', value: 15 },
            { Month: 'Mar', value: 5 },
            { Month: 'Apr', value: 0 },
            { Month: 'May', value: 5 },
            { Month: 'Jun', value: 20 },
            { Month: 'Jul', value: 25 },
            { Month: 'Aug', value: 20 },
            { Month: 'Sep', value: 15 },
            { Month: 'Oct', value: 20 },
            { Month: 'Nov', value: 15 },
            { Month: 'Dec', value: 20 },
        ],
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
                    tickMarksColor: 'transparent',
                    line: {
                        visible: false,
                    },
                },
                series: [
                    {
                        dataField: 'value',
                        displayText: 'Value',
                        fillColor: '#f5365c',
                    },
                ]
            }
        ]
    });

    //sessionsShipments chart
    new smartChart('#sessionsShipments', {
        borderLineWidth: 0,
        caption: ' ',
        description: ' ',
        showLegend: false,
        dataSource: [
            { Month: 'Jan', value: 5 },
            { Month: 'Feb', value: 15 },
            { Month: 'Mar', value: 20 },
            { Month: 'Apr', value: 10 },
            { Month: 'May', value: 15 },
            { Month: 'Jun', value: 20 },
            { Month: 'Jul', value: 15 },
            { Month: 'Aug', value: 20 },
            { Month: 'Sep', value: 10 },
            { Month: 'Oct', value: 15 },
            { Month: 'Nov', value: 10 },
            { Month: 'Dec', value: 20 },
        ],
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
                    tickMarksColor: 'transparent',
                    line: {
                        visible: false,
                    },
                },
                series: [
                    {
                        dataField: 'value',
                        displayText: 'Value',
                        fillColor: '#f5365c',
                    },
                ]
            }
        ]
    });

    /* Total shipments, Daily sales, Completed tasks */
    //Total shipments - Chart
    new smartChart('#totalShipments', {
        borderLineWidth: 0,
        caption: ' ',
        description: ' ',
        showLegend: false,
        dataSource: [
            { Month: 'Jul', value: 15 },
            { Month: 'Aug', value: 25 },
            { Month: 'Sep', value: 20 },
            { Month: 'Oct', value: 30 },
            { Month: 'Nov', value: 25 },
            { Month: 'Dec', value: 30 },
        ],
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

    //Daily sales - Chart
    new smartChart('#dailySales', {
        borderLineWidth: 0,
        caption: ' ',
        description: ' ',
        showLegend: false,
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
                        displayText: 'Orders',
                        fillColor: '#1d8cf8'
                    },
                ]
            }
        ]
    });

    //Completed tasks - Chart
    new smartChart('#completedTasks', {
        borderLineWidth: 0,
        caption: ' ',
        description: ' ',
        showLegend: false,
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
                valueAxis:
                {
                    line: {
                        color: 'white'
                    },
                    unitInterval: 40,
                    minValue: 0,
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
    });

    /* Tasks, Management Table */
    // Тasks
    new smartGrid('#tasksTodayGrid', {
        columnHeader: {
            visible: false,
        },
        layout: {
            rowHeight: 50
        },
        dataSource: new smartDataAdapter(
            {
                dataSource: [
                    {
                        done: true,
                        title: 'Update the Documentation',
                        action_icon: 'edit',
                    },
                    {
                        done: false,
                        title: 'GDPR Compliance',
                        action_icon: 'edit',
                    },
                    {
                        done: false,
                        title: 'Solve the issues',
                        action_icon: 'edit',
                    },
                    {
                        done: false,
                        title: 'Release v2.0.0',
                        action_icon: 'edit',
                    },
                    {
                        done: false,
                        title: 'Export the processed files',
                        action_icon: 'edit',
                    },
                ],
                dataFields:
                [
                    'done: string',
                    'title: string',
                    'action_icon: string',
                ]
            }
        ),
        columns: [
            {
                label: '', dataField: 'done', width: '10%', cellsAlign: 'center', align: 'center',
                template: function (formatObject) {
                    let checkboxChecked = formatObject.value === 'true' ? 'checked' : '';

                    if (!formatObject.template) {
                        formatObject.template = '<smart-check-box className="tasks-today" ' + checkboxChecked + ' ></smart-check-box>';
                    }
                    else {
                        formatObject.template.innerHTML = formatObject.value;
                    }
                }
            },
            {
                label: '', dataField: 'title', width: '80%', cellsAlign: 'center', align: 'center',
            },
            {
                label: '', dataField: 'action_icon', width: '10%', cellsAlign: 'center', align: 'center',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = '<div><i className="material-icons">' + formatObject.value + '</i></div>';
                    }
                }
            },
        ]
    });

    // Management Table
    const usersImages = [
        './../../../src/images/girl-2771001_960_720.jpg',
        './../../../src/images/man-4252192_960_720.jpg',
        './../../../src/images/girl-2366438_960_720.jpg',
        './../../../src/images/entrepreneur-593358_960_720.jpg',
        './../../../src/images/woman-3096664_960_720.jpg'
    ];
    new smartGrid('#gridManagementTable', {
        layout: {
            rowHeight: 50
        },
        dataSource: new smartDataAdapter(
            {
                dataSource: [
                    {
                        image: usersImages[0],
                        name: 'Tania Mike',
                        position: 'Develop',
                        milestoone: '25',
                        salary: '€ 99,225',
                        actions: '',
                    },
                    {
                        image: usersImages[1],
                        name: 'John Doe',
                        position: 'CEO',
                        milestoone: '77',
                        salary: '€ 89,241',
                        actions: '',
                    },
                    {
                        image: usersImages[2],
                        name: 'Alexa Mike',
                        position: 'Design',
                        milestoone: '41',
                        salary: '€ 92,144',
                        actions: '',
                    },
                    {
                        image: usersImages[3],
                        name: 'Jana Monday',
                        position: 'Marketing',
                        milestoone: '50',
                        salary: '€ 49,990',
                        actions: '',
                    },
                    {
                        image: usersImages[4],
                        name: 'Paul Dickens',
                        position: 'Develop',
                        milestoone: '100',
                        salary: '€ 69,201',
                        actions: '',
                    },
                    {
                        image: usersImages[0],
                        name: 'Manuela Rico',
                        position: 'Manager',
                        milestoone: '15',
                        salary: '€ 99,201',
                        actions: '',
                    },

                ],
                dataFields:
                [
                    'image: string',
                    'name: string',
                    'position: string',
                    'milestoone: string',
                    'salary: string',
                    'actions: string',
                ]
            }),
        columns: [
            {
                label: '#', dataField: 'image', cellsAlign: 'center', align: 'center', width: '10%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = '<img className="user-image" src = "' + formatObject.value + '" />';
                    }
                }
            },
            { label: 'Name', dataField: 'name', width: '15%', cellsAlign: 'center', align: 'center' },
            { label: 'Job position', dataField: 'position', cellsAlign: 'center', align: 'center', width: '15%' },
            {
                label: 'Milestone', dataField: 'milestoone', cellsAlign: 'center', align: 'center', width: '30%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = '<div className="progress-bar-holder"><smart-progress-bar value="' + formatObject.value + '"></smart-progress-bar></div>';
                    }
                }
            },
            { label: 'Salary', dataField: 'salary', width: '20%', cellsAlign: 'center', align: 'center' },
            {
                label: 'Actions', dataField: 'actions', cellsAlign: 'center', align: 'center', width: '10%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = '<i className="material-icons refresh-icon">refresh</i>&nbsp;<i className="material-icons close-icon">close</i>';
                    }
                }
            }
        ]
    });

    /* Global sales */
    new smartGrid('#shippedProds', {
        columnHeader: {
            visible: false,
        },
        layout: {
            rowHeight: 50
        },
        dataSource: new smartDataAdapter(
            {
                dataSource: [
                    {
                        flag: 'https://www.htmlelements.com/demos/grid/live-update-countries/flags/us.svg',
                        country: 'USA',
                        prodCount: '2.920',
                        prodCountPercentage: '53.23%'
                    },
                    {
                        flag: 'https://www.htmlelements.com/demos/grid/live-update-countries/flags/de.svg',
                        country: 'Germany',
                        prodCount: '1.300',
                        prodCountPercentage: '20.43%'
                    },
                    {
                        flag: 'https://www.htmlelements.com/demos/grid/live-update-countries/flags/au.svg',
                        country: 'Australia',
                        prodCount: '760',
                        prodCountPercentage: '10.35%'
                    },
                    {
                        flag: 'https://www.htmlelements.com/demos/grid/live-update-countries/flags/gb.svg',
                        country: 'United Kingdom',
                        prodCount: '690',
                        prodCountPercentage: '7.87%'
                    },
                    {
                        flag: 'https://www.htmlelements.com/demos/grid/live-update-countries/flags/ro.svg',
                        country: 'Romania',
                        prodCount: '600',
                        prodCountPercentage: '5.94%'
                    },
                    {
                        flag: 'https://www.htmlelements.com/demos/grid/live-update-countries/flags/br.svg',
                        country: 'Brasil',
                        prodCount: '550',
                        prodCountPercentage: '4.34%'
                    },
                ],
                dataFields:
                [
                    'flag: string',
                    'country: string',
                    'prodCount: string',
                    'prodCountPercentage: string'
                ]
            }
        ),
        columns: [
            {
                label: '', dataField: 'flag', cellsAlign: 'center', align: 'center',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = '<img style="width: 30px; height: 30px; vertical-align: middle; border-radius: 30px;" src="' + formatObject.value + '"/>';
                    }
                    else {
                        formatObject.template.innerHTML = formatObject.value;
                    }
                }
            },
            { label: '', dataField: 'country', cellsAlign: 'center', align: 'center' },
            { label: '', dataField: 'prodCount', cellsAlign: 'center', align: 'center' },
            { label: '', dataField: 'prodCountPercentage', cellsAlign: 'center', align: 'center' },
        ]
    });
}

function initDashboardMaps() {
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
        uluru = { lat: 42.695537, lng: 23.2539071 };

    // The marker, positioned at Uluru
    new google.maps.Marker({ position: uluru, map: new google.maps.Map(document.getElementById('map'), { zoom: 6, center: uluru, styles: styles }) });
}