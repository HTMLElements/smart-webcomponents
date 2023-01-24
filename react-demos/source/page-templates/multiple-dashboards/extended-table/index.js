(function () {
    loadExtendedTableJs();
    applyThemeExtendedTable();
})();

// Calendar dark theme
function applyThemeExtendedTable() {
    'use strict'
    const currentTheme = document.getElementById('header-change-theme-btn').theme,
        contentContainer = document.getElementById('include-html-page'),
        customElements = contentContainer.querySelectorAll('smart-grid');

    if (contentContainer.firstElementChild.classList.contains('smart-visibility-hidden')) {
        contentContainer.firstElementChild.classList.remove('smart-visibility-hidden')
    }

    for (let i = 0; i < customElements.length; i++) {
        if (customElements[i]) {
            customElements[i].theme = currentTheme;
        }
    }
}


function loadExtendedTableJs() {
    // Page visits - Grid
    const pageVisitsData = [
        {
            project: 'Design System',
            budget: '$2500 USD',
            status: 'pending',
            users: '',
            completion: '60',
            action: '',
        },
        {
            project: 'Angular Now UI Kit PRO',
            budget: '$1800 USD',
            status: 'completed',
            users: '',
            completion: '100',
            action: '',
        },
        {
            project: 'Black Dashboard',
            budget: '$3150 USD',
            status: 'delayed',
            users: '',
            completion: '72',
            action: '',
        },
        {
            project: 'React Material Dashboard',
            budget: '$4400 USD',
            status: 'on schedule',
            users: '',
            completion: '90',
            action: '',
        },
        {
            project: 'Vue Paper UI Kit PRO',
            budget: '$2200 USD',
            status: 'completed',
            users: '',
            completion: '100',
            action: '',
        },
        {
            project: 'Design System',
            budget: '$2500 USD',
            status: 'pending',
            users: '',
            completion: '60',
            action: '',
        }
    ]
    const projectIcons = [
        './../../../src/images/bootstrap.svg',
        './../../../src/images/angular.svg',
        './../../../src/images/sketch.svg',
        './../../../src/images/react.svg',
        './../../../src/images/vuejs.svg',
        './../../../src/images/bootstrap.svg'
    ];
    const usersImages = [
        './../../../src/images/girl-2771001_960_720.jpg',
        './../../../src/images/man-4252192_960_720.jpg',
        './../../../src/images/girl-2366438_960_720.jpg',
        './../../../src/images/entrepreneur-593358_960_720.jpg',
        './../../../src/images/woman-3096664_960_720.jpg'
    ];


    new smartGrid('#gridPageVisits', {
        layout: {
            rowHeight: 75
        },
        dataSource: new smartDataAdapter(
            {
                dataSource: pageVisitsData,
                dataFields:
                    [
                        'project: string',
                        'budget: string',
                        'status: string',
                        'users: string',
                        'completion: string',
                    ]
            }),
        columns: [
            {
                label: 'Project', dataField: 'project', width: '25%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = '<div className="icon"><img src="' + projectIcons[formatObject.row.index] + '" style="width: 40px;float: left;margin-top:15px;" />' + formatObject.value + '</div>';
                    }
                }
            },
            { label: 'Budget', dataField: 'budget', cellsAlign: 'center', align: 'center', width: '10%', },
            {
                label: 'Status', dataField: 'status', width: '10%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        let statusColor = '#fb6340';
                        if (formatObject.value === 'completed') {
                            statusColor = '#2dce89';
                        }
                        else if (formatObject.value === 'on schedule') {
                            statusColor = '#11cdef';
                        }
                        formatObject.template = '<div className="icon"><div className="status" style="background:' + statusColor + '"></div>' + formatObject.value + '</div>';
                    }
                }
            },
            {
                label: 'Users', dataField: 'users', cellsAlign: 'center', align: 'center', width: '25%',
                template: function (formatObject) {
                    if (!formatObject.template) {

                        let imgContent = '';
                        for (let i = 0; i < usersImages.length; i++) {
                            imgContent += '<!--<smart-tooltip id="tooltipQuickAdd" selector="' + usersImages[i] + '" position="bottom" offset="[0,20]" className="animation material">Quick add</smart-tooltip>--><img id="' + usersImages[i] + '" src = "' + usersImages[i] + '" style = "width: 40px;float: left;" />';
                        }
                        formatObject.template = '<div className="images">' + imgContent + '</div>';
                    }
                }
            },
            {
                label: 'Completion', dataField: 'completion', cellsAlign: 'center', align: 'center', width: '20%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        let setClass = 'bootstrap';
                        if (formatObject.row.index === 1) {
                            setClass = 'angular';
                        }
                        else if (formatObject.row.index === 2) {
                            setClass = 'sketch';
                        }
                        else if (formatObject.row.index === 3) {
                            setClass = 'react';
                        }
                        else if (formatObject.row.index === 4) {
                            setClass = 'vuejs';
                        }
                        formatObject.template = '<div className="completion-progress-bar"><smart-progress-bar className="' + setClass + '" value="' + formatObject.value + '"></smart-progress-bar></div>';
                    }
                }
            },
            {
                label: '', dataField: 'action', cellsAlign: 'center', align: 'center', width: '10%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = `<smart-drop-down-button drop-down-width="auto" placeholder="" className="visits" drop-down-append-to="body">
                                                <smart-button className="flat" style="display: block;width:100%">Action</smart-button>
                                                <smart-button className="flat" style="display: block;width:100%">Another action</smart-button>
                                                <smart-button className="flat" style="display: block;width:100%">Something else here</smart-button>
                                            </smart-drop-down-button>
                                            `;
                    }
                }
            },
        ]
    });

    new smartGrid('#todoListGrid', {
        layout: {
            rowHeight: 82
        },
        dataSource: new smartDataAdapter(
            {
                dataSource: [
                    {
                        color: '#2dce89',
                        title: 'Call with Dave',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        time: 'Today, 10:30 AM',
                        done: true,
                    },
                    {
                        color: '#fb6340',
                        title: 'Lunch meeting',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        time: 'Mon 28 Oct, 12:30 AM',
                        done: false,
                    },
                    {
                        color: '#11cdef',
                        title: 'Marketing Lunch meeting',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        time: 'Mon 28 Oct, 13:30 AM',
                        done: false,
                    },
                    {
                        color: '#f5365c',
                        title: 'Winter Hackaton',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        time: '20 Dec, 09:00 AM',
                        done: false,
                    },
                ],
                dataFields:
                    [
                        'color: string',
                        'title: string',
                        'description: string',
                        'time: string',
                        'done: string',
                    ]
            }
        ),
        columns: [
            {
                label: '', dataField: 'color', width: '5%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = '<div style="background-color:' + formatObject.value + '; width: 5px; height:82px"></div>';
                    }
                    else {
                        formatObject.template.innerHTML = '';
                    }
                }
            },
            {
                label: 'Task', dataField: 'title', width: '15%',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        let style;
                        if (formatObject.row.index === 0) {
                            style = 'style="text-decoration: line-through;"';
                        }
                        formatObject.template = '<div ' + style + ' >' + formatObject.value + '</div>';
                    }
                    else {
                        formatObject.template.innerHTML = formatObject.value;
                    }
                }
            },
            {
                label: 'Description', dataField: 'description', width: '40%',

                template: function (formatObject) {
                    if (!formatObject.template) {
                        let style;
                        if (formatObject.row.index === 0) {
                            style = 'style="text-decoration: line-through;"';
                        }

                        formatObject.template = '<div ' + style + ' >' + formatObject.value + '</div>';
                    }
                    else {
                        formatObject.template.innerHTML = formatObject.value;
                    }
                }
            },
            {
                label: 'Time', dataField: 'time', width: '30%',

                template: function (formatObject) {
                    if (!formatObject.template) {
                        let style;
                        if (formatObject.row.index === 0) {
                            style = 'style="text-decoration: line-through;"';
                        }
                        formatObject.template = '<div ' + style + ' >' + formatObject.value + '</div>';
                    }
                    else {
                        formatObject.template.innerHTML = formatObject.value;
                    }
                }
            },
            {
                label: 'Done', dataField: 'done', width: '10%',

                template: function (formatObject) {
                    let checkboxChecked = formatObject.value === 'true' ? 'checked' : '';

                    if (!formatObject.template) {
                        formatObject.template = '<smart-check-box ' + checkboxChecked + ' ></smart-check-box>';
                    }
                    else {
                        formatObject.template.innerHTML = formatObject.value;
                    }
                }
            },
        ]
    });
}