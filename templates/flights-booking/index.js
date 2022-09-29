window.onload = () => {
    let tripTypeRadios = document.querySelectorAll('smart-radio-button.trip-type');

    for (let i = 0; i < tripTypeRadios.length; i++) {
        tripTypeRadios[i].addEventListener('change', flightTripType);
    }

    document.getElementById('tabs3').addEventListener('change', loadGrid);
    document.querySelector('smart-accordion').addEventListener('expand', loadAccordion)

    loadGrid(0); //Load first grid
};

const returnCalendarContainer = document.querySelector('.row-separator.return');

const flightTripType = (e) => {
    if ((e.target.classList.contains('return')) && (returnCalendarContainer.classList.contains('smart-hidden'))) {
        returnCalendarContainer.classList.remove('smart-hidden');
    }
    else {
        returnCalendarContainer.classList.add('smart-hidden');
    }
}

const loadAccordion = (e) => {
    if (e.detail.content) {
        return;
    }

    const item = e.target.getElementsByTagName('smart-accordion-item')[e.detail.index];

    requestAnimationFrame(() => {
        item.content.appendChild(document.getElementById(item.id.replace('Item', '')).content);
    });
}

const loadGrid = (e) => {
    const gridTabId = (typeof e === 'number') ? e : e.detail.index;

    if (gridTabId === 0) {
        loadGridOffers();
    }
    else if (gridTabId === 1) {
        loadGridRegular();
    }
    else if (gridTabId === 2) {
        loadGridInfo();
    }
}

const loadGridOffers = () => {
    if (document.getElementById('offersGrid') instanceof Smart.Grid) {
        return;
    }

    new Smart.Grid('#offersGrid', {
        sorting: {
            enabled: true
        },
        layout: {
            rowHeight: 50
        },
        dataSource: new Smart.DataAdapter(
            {
                dataSource: [
                    {
                        direction: 'Warsaw PL - Minsk International 2 BY',
                        date: '20 January 2021',
                        time: '19:22 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 22:36',
                        price: '$311.00',
                        save: '$30.00',
                        tickets: '21',
                        status: 'Open',
                    },
                    {
                        direction: 'Vilnius LT - Kiev Zhulhany UA',
                        date: '25 January 2021',
                        time: '00:47 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 03:02',
                        price: '$220.00',
                        save: '$86.00',
                        tickets: '61',
                        status: 'Open',
                    },
                    {
                        direction: 'Tallin EE - Berlin Tegel DE',
                        date: '29 January 2021',
                        time: '19:47 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 22:02',
                        price: '$90.00',
                        save: '$12.00',
                        tickets: '34',
                        status: 'Open',
                    },
                    {
                        direction: 'St. Petersburg Pulkovo - Tallin Estonia',
                        date: '30 January 2021',
                        time: '09:12 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 12:26',
                        price: '$450.00',
                        save: '$214.00',
                        tickets: '74',
                        status: 'Last deals',
                    },
                    {
                        direction: 'St. Petersburg Pulkovo - Tallin Estonia',
                        date: '19 January 2021',
                        time: '07:15 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 10:29',
                        price: '$450.00',
                        save: '$132.00',
                        tickets: '94',
                        status: 'Available soon',
                    },
                    {
                        direction: 'Prague CZ - St. Petersburg Pulkovo',
                        date: '13 January 2021',
                        time: '00:55 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 03:10',
                        price: '$140.00',
                        save: '$89.00',
                        tickets: '67',
                        status: 'Last deals',
                    },
                    {
                        direction: 'Prague CZ - St. Petersburg Pulkovo',
                        date: '17 January 2021',
                        time: '01:14 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 15:42',
                        price: '$256.00',
                        save: '$87.00',
                        tickets: '59',
                        status: 'Last deals',
                    },
                    {
                        direction: 'Moscow Sheremetyevo RU - Vilnius LT',
                        date: '11 January 2021',
                        time: '01:14 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 04:28',
                        price: '$225.00',
                        save: '$102.00',
                        tickets: '6',
                        status: 'Open',
                    },
                    {
                        direction: 'Minsk International 2 BY - Berlin Schoenefeld DE',
                        date: '12 January 2021',
                        time: '11:22 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 14:36',
                        price: '$113.00',
                        save: '$32.00',
                        tickets: '47',
                        status: 'Open',
                    },
                    {
                        direction: 'Kiev Zhulhany UA - Moscow Vnukovo RU',
                        date: '05 January 2021',
                        time: '17:11 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 20:21',
                        price: '$46.00',
                        save: '$11.00',
                        tickets: '66',
                        status: 'Open',
                    },
                    {
                        direction: 'Tallin EE - Berlin Tegel DE',
                        date: '10 January 2021',
                        time: '4:35 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 17:49',
                        price: '$378.00',
                        save: '$35.00',
                        tickets: '25',
                        status: 'Open',
                    },
                    {
                        direction: 'Moscow Vnukovo RU - Kiev Borispol UA',
                        date: '11 January 2021',
                        time: '07:15 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 10:29',
                        price: '$90.00',
                        save: '$82.00',
                        tickets: '11',
                        status: 'Open',
                    },
                    {
                        direction: 'Riga International LV - Warsaw Modlin',
                        date: '12 January 2021',
                        time: '17:49 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 20:04',
                        price: '$220.00',
                        save: '$30.00',
                        tickets: '41',
                        status: 'Open',
                    },
                    {
                        direction: 'Vilnius LT - Kiev Zhulhany UA',
                        date: '13 January 2021',
                        time: '10:23 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 13:37',
                        price: '$321.00',
                        save: '$44.00',
                        tickets: '32',
                        status: 'Open',
                    },
                    {
                        direction: 'Minsk International 2 BY - Berlin Schoenefeld DE',
                        date: '13 January 2021',
                        time: '20:10 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 23:24',
                        price: '$256.00',
                        save: '$32.00',
                        tickets: '55',
                        status: 'Available soon',
                    },
                    {
                        direction: 'St. Petersburg Pulkovo - Tallin Estonia',
                        date: '14 January 2021',
                        time: '01:14 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 04:28',
                        price: '$311.00',
                        save: '$63.00',
                        tickets: '15',
                        status: 'Available soon',
                    },
                    {
                        direction: 'Kiev Zhulhany UA - Moscow Vnukovo RU',
                        date: '19 January 2021',
                        time: '09:12 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 12:26',
                        price: '$450.00',
                        save: '$45.00',
                        tickets: '21',
                        status: 'Open',
                    },
                    {
                        direction: 'Moscow Sheremetyevo RU - Vilnius LT',
                        date: '18 January 2021',
                        time: '06:08 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 09:22',
                        price: '$160.00',
                        save: '$65.00',
                        tickets: '5',
                        status: 'Open',
                    },
                    {
                        direction: 'Warsaw PL - Minsk International 2 BY',
                        date: '17 January 2021',
                        time: '03:15 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 06:29',
                        price: '$220.00',
                        save: '$110.00',
                        tickets: '2',
                        status: 'Last deals',
                    },
                    {
                        direction: 'Prague CZ - St. Petersburg Pulkovo',
                        date: '16 January 2021',
                        time: '19:47 <i class="material-icons right-time-arrow">keyboard_arrow_right</i> 22:02',
                        price: '$140.00',
                        save: '$40.00',
                        tickets: '35',
                        status: 'Last deals',
                    },

                ],
                dataFields:
                [
                    'direction: string',
                    'date: string',
                    'time: string',
                    'price: string',
                    'save: string',
                    'tickets: string',
                    'status: string',
                ]
            }),
        columns: [
            { label: 'Direction', dataField: 'direction', width: '40%' },
            { label: 'Date', dataField: 'date', width: '10%' },
            {
                label: 'Time', dataField: 'time', width: '10%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = formatObject.value;
                    }
                }
            },
            { label: 'Price', dataField: 'price', width: '10%' },
            { label: 'You save', dataField: 'save', width: '10%' },
            { label: 'Tickets', dataField: 'tickets', width: '10%' },
            {
                label: 'Status', dataField: 'status', width: '10%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        let statusClass = '';
                        if (formatObject.value === 'Last deals') {
                            statusClass = 'last-details-status';
                        }
                        else if (formatObject.value === 'Open') {
                            statusClass = 'open-status';
                        }
                        else if (formatObject.value === 'Available soon') {
                            statusClass = 'available-soon-status';
                        }

                        formatObject.template = '<span class="' + statusClass + '">' + formatObject.value + '</span>';
                    }
                }
            },
        ]
    });
}

const loadGridRegular = () => {
    if (document.getElementById('regularGrid') instanceof Smart.Grid) {
        return;
    }

    new Smart.Grid('#regularGrid', {
        sorting: {
            enabled: true
        },
        layout: {
            rowHeight: 50
        },
        dataSource: new Smart.DataAdapter(
            {
                dataSource: [
                    {
                        number: 'LET598',
                        direction: 'Warsaw PL - Minsk International 2 BY',
                        date: '20 January 2021',
                        departs: '19:22',
                        arrives: '22:36',
                        status: 'Landed',
                    },
                    {
                        number: 'ESP738',
                        direction: 'Vilnius LT - Kiev Zhulhany UA',
                        date: '25 January 2021',
                        departs: '00:47',
                        arrives: '03:02',
                        status: 'On Time',
                    },
                    {
                        number: 'LET598',
                        direction: 'Tallin EE - Berlin Tegel DE',
                        date: '29 January 2021',
                        departs: '19:47',
                        arrives: '22:02',
                        status: 'Landed',
                    },
                    {
                        number: 'DEU870',
                        direction: 'St. Petersburg Pulkovo - Tallin Estonia',
                        date: '30 January 2021',
                        departs: '09:12',
                        arrives: '12:26',
                        status: 'Landed',
                    },
                    {
                        number: 'DEU545',
                        direction: 'St. Petersburg Pulkovo - Tallin Estonia',
                        date: '19 January 2021',
                        departs: '07:15',
                        arrives: '10:29',
                        status: 'On Time',
                    },
                    {
                        number: 'EST679',
                        direction: 'Prague CZ - St. Petersburg Pulkovo',
                        date: '13 January 2021',
                        departs: '00:55',
                        arrives: '03:10',
                        status: 'On Time',
                    },
                    {
                        number: 'CZR219',
                        direction: 'Prague CZ - St. Petersburg Pulkovo',
                        date: '17 January 2021',
                        departs: '01:14',
                        arrives: '15:42',
                        status: 'On Time',
                    },
                    {
                        number: 'EST679',
                        direction: 'Moscow Sheremetyevo RU - Vilnius LT',
                        date: '11 January 2021',
                        departs: '01:14',
                        arrives: '04:28',
                        status: 'On Time',
                    },
                    {
                        number: 'ITA200',
                        direction: 'Minsk International 2 BY - Berlin Schoenefeld DE',
                        date: '12 January 2021',
                        departs: '11:22',
                        arrives: '14:36',
                        status: 'On Time',
                    },
                    {
                        number: 'RUS677',
                        direction: 'Kiev Zhulhany UA - Moscow Vnukovo RU',
                        date: '05 January 2021',
                        departs: '17:11',
                        arrives: '20:21',
                        status: 'Landed',
                    },
                    {
                        number: 'EST679',
                        direction: 'Tallin EE - Berlin Tegel DE',
                        date: '01 January 2021',
                        departs: '09:12',
                        arrives: '12:26',
                        status: 'On Time',
                    },
                    {
                        number: 'RUS677',
                        direction: 'Moscow Vnukovo RU - Kiev Borispol UA',
                        date: '07 January 2021',
                        departs: '06:08',
                        arrives: '09:22',
                        status: 'Landed',
                    },
                    {
                        number: 'LTV133',
                        direction: 'Riga International LV - Warsaw Modlin',
                        date: '03 January 2021',
                        departs: '03:15',
                        arrives: '06:29',
                        status: 'Landed',
                    },
                    {
                        number: 'LET598',
                        direction: 'Vilnius LT - Kiev Zhulhany UA',
                        date: '24 January 2021',
                        departs: '19:47',
                        arrives: '22:02',
                        status: 'On Time',
                    },
                    {
                        number: 'CZR219',
                        direction: 'Minsk International 2 BY - Berlin Schoenefeld DE',
                        date: '25 January 2021',
                        departs: '14:35',
                        arrives: '17:49',
                        status: 'On Time',
                    },
                    {
                        number: 'RUS184',
                        direction: 'St. Petersburg Pulkovo - Tallin Estonia',
                        date: '24 January 2021',
                        departs: '07:15',
                        arrives: '10:29',
                        status: 'On Time',
                    },
                    {
                        number: 'DEU545',
                        direction: 'Kiev Zhulhany UA - Moscow Vnukovo RU',
                        date: '14 January 2021',
                        departs: '17:49',
                        arrives: '20:04',
                        status: 'Landed',
                    },
                    {
                        number: 'ITA200',
                        direction: 'Moscow Sheremetyevo RU - Vilnius LT',
                        date: '16 January 2021',
                        departs: '10:23',
                        arrives: '13:37',
                        status: 'On Time',
                    },
                    {
                        number: 'ESP738',
                        direction: 'Warsaw PL - Minsk International 2 BY',
                        date: '18 January 2021',
                        departs: '20:10',
                        arrives: '23:24',
                        status: 'Landed',
                    },
                    {
                        number: 'ITA164',
                        direction: 'Prague CZ - St. Petersburg Pulkovo',
                        date: '31 January 2021',
                        departs: '01:14',
                        arrives: '04:28',
                        status: 'Landed',
                    },
                ],
                dataFields:
                [
                    'number: string',
                    'direction: string',
                    'date: string',
                    'departs: string',
                    'arrives: string',
                    'status: string',
                ]
            }),
        columns: [
            { label: 'Number', dataField: 'number', width: '10%' },
            { label: 'Direction', dataField: 'direction', width: '40%' },
            { label: 'Date', dataField: 'date', width: '15%' },
            {
                label: 'Departs', dataField: 'departs', width: '10%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = formatObject.value;
                    }
                }
            },
            {
                label: 'Arrives', dataField: 'arrives', width: '10%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = formatObject.value;
                    }
                }
            },
            {
                label: 'Comments', dataField: 'status', width: '15%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        let statusClass = '';
                        if (formatObject.value === 'Landed') {
                            statusClass = 'landed-status';
                        } else if (formatObject.value === 'On Time') {
                            statusClass = 'on-time-status';
                        }

                        formatObject.template = '<span class="' + statusClass + '">' + formatObject.value + '</span>';
                    }
                }
            },
        ]
    });
}

const loadGridInfo = () => {
    if (document.getElementById('infoGrid') instanceof Smart.Grid) {
        return;
    }

    new Smart.Grid('#infoGrid', {
        sorting: {
            enabled: true
        },
        layout: {
            rowHeight: 50
        },
        dataSource: new Smart.DataAdapter(
            {
                dataSource: [
                    {
                        number: 'LET598',
                        from: 'Warsaw',
                        to: 'Minsk',
                        departs: '19:22',
                        arrives: '22:36',
                        status: 'Landed',
                    },
                    {
                        number: 'ESP738',
                        from: 'Vilnius',
                        to: 'Kiev',
                        departs: '00:47',
                        arrives: '03:02',
                        status: 'On Time',
                    },
                    {
                        number: 'LET598',
                        from: 'Tallin',
                        to: 'Berlin',
                        departs: '19:47',
                        arrives: '22:02',
                        status: 'Landed',
                    },
                    {
                        number: 'DEU870',
                        from: 'St. Petersburg',
                        to: 'Tallin',
                        departs: '09:12',
                        arrives: '12:26',
                        status: 'Landed',
                    },
                    {
                        number: 'DEU545',
                        from: 'St. Petersburg',
                        to: 'Tallin',
                        departs: '07:15',
                        arrives: '10:29',
                        status: 'On Time',
                    },
                    {
                        number: 'EST679',
                        from: 'Prague',
                        to: 'St. Petersburg',
                        departs: '00:55',
                        arrives: '03:10',
                        status: 'On Time',
                    },
                    {
                        number: 'CZR219',
                        from: 'Prague',
                        to: 'St. Petersburg',
                        departs: '01:14',
                        arrives: '15:42',
                        status: 'On Time',
                    },
                    {
                        number: 'EST679',
                        from: 'Moscow',
                        to: 'Vilnius',
                        departs: '01:14',
                        arrives: '04:28',
                        status: 'On Time',
                    },
                    {
                        number: 'ITA200',
                        from: 'Minsk',
                        to: 'Berlin',
                        departs: '11:22',
                        arrives: '14:36',
                        status: 'On Time',
                    },
                    {
                        number: 'RUS677',
                        from: 'Kiev',
                        to: 'Moscow',
                        departs: '17:11',
                        arrives: '20:21',
                        status: 'Landed',
                    },
                    {
                        number: 'EST679',
                        from: 'Tallin',
                        to: 'Berlin',
                        departs: '19:27',
                        arrives: '22:36',
                        status: 'Landed',
                    },
                    {
                        number: 'RUS677',
                        from: 'Moscow',
                        to: 'Vilnius',
                        departs: '10:44',
                        arrives: '23:01',
                        status: 'On Time',
                    },
                    {
                        number: 'LTV133',
                        from: 'Riga',
                        to: 'Warsaw',
                        departs: '19:40',
                        arrives: '22:01',
                        status: 'Landed',
                    },
                    {
                        number: 'LET598',
                        from: 'Vilnius',
                        to: 'Kiev',
                        departs: '19:15',
                        arrives: '22:22',
                        status: 'Landed',
                    },
                    {
                        number: 'CZR219',
                        from: 'Prague',
                        to: 'St. Petersburg',
                        departs: '17:12',
                        arrives: '20:28',
                        status: 'On Time',
                    },
                    {
                        number: 'RUS184',
                        from: 'Moscow',
                        to: 'Vilnius',
                        departs: '20:23',
                        arrives: '23:63',
                        status: 'On Time',
                    },
                    {
                        number: 'DEU545',
                        from: 'Minsk',
                        to: 'Berlin',
                        departs: '22:12',
                        arrives: '23:42',
                        status: 'On Time',
                    },
                    {
                        number: 'ITA200',
                        from: 'Warsaw',
                        to: 'Minsk',
                        departs: '11:10',
                        arrives: '20:28',
                        status: 'On Time',
                    },
                    {
                        number: 'ESP738',
                        from: 'Vilnius',
                        to: 'Kiev',
                        departs: '11:25',
                        arrives: '23:36',
                        status: 'On Time',
                    },
                    {
                        number: 'ITA164',
                        from: 'Milan',
                        to: 'Frankfurt',
                        departs: '17:17',
                        arrives: '20:21',
                        status: 'Landed',
                    },
                ],
                dataFields:
                [
                    'number: string',
                    'from: string',
                    'to: string',
                    'departs: string',
                    'arrives: string',
                    'price: string',
                    'save: string',
                    'tickets: string',
                    'status: string',
                ]
            }),
        columns: [
            { label: 'Flight No.', dataField: 'number', width: '15%' },
            { label: 'From', dataField: 'from', width: '20%' },
            { label: 'To', dataField: 'to', width: '20%' },
            {
                label: 'Departs', dataField: 'departs', width: '15%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = formatObject.value;
                    }
                }
            },
            {
                label: 'Arrives', dataField: 'arrives', width: '15%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = formatObject.value;
                    }
                }
            },
            {
                label: 'Status', dataField: 'status', width: '15%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        let statusClass = '';
                        if (formatObject.value === 'Landed') {
                            statusClass = 'landed-status';
                        } else if (formatObject.value === 'On Time') {
                            statusClass = 'on-time-status';
                        }

                        formatObject.template = '<span class="' + statusClass + '">' + formatObject.value + '</span>';
                    }
                }
            },
        ]
    });
}