(function () {
    applyThemeWidgets();
    loadGrid();
})();

// Dark theme
function applyThemeWidgets() {
    'use strict'
    const currentTheme = document.getElementById('header-change-theme-btn').theme,
        contentContainer = document.getElementById('include-html-page'),
        customElements = contentContainer.querySelectorAll('smart-card, smart-grid');

    if (contentContainer.firstElementChild.classList.contains('smart-visibility-hidden')) {
        contentContainer.firstElementChild.classList.remove('smart-visibility-hidden')
    }

    for (let i = 0; i < customElements.length; i++) {
        if (customElements[i]) {
            customElements[i].theme = currentTheme;
        }
    }
}

function loadGrid() {
    'use strict'
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
                        description: 'Lorem Ipsum is simply dummy text ...',
                        time: 'Today, 10:30 AM',
                        done: true,
                    },
                    {
                        color: '#fb6340',
                        title: 'Lunch meeting',
                        description: 'Lorem Ipsum is simply dummy text ...',
                        time: 'Mon 28 Oct, 12:30 AM',
                        done: false,
                    },
                    {
                        color: '#11cdef',
                        title: 'Marketing Lunch meeting',
                        description: 'Lorem Ipsum is simply dummy text ...',
                        time: 'Mon 28 Oct, 13:30 AM',
                        done: false,
                    },
                    {
                        color: '#f5365c',
                        title: 'Winter Hackaton',
                        description: 'Lorem Ipsum is simply dummy text ...',
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
                label: '', dataField: 'color', width: '0', cellsAlign: 'center', align: 'center',
                template: function (formatObject) {
                    if (!formatObject.template) {
                        formatObject.template = '<div style="background-color:' + formatObject.value + '; width: 5px; height:' + 82 + 'px"></div>';
                    }
                    else {
                        formatObject.template.innerHTML = '';
                    }
                }
            },
            {
                label: 'Task', dataField: 'title', width: '15%', cellsAlign: 'center', align: 'center',
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
                label: 'Description', dataField: 'description', width: '40%', cellsAlign: 'center', align: 'center',

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
                label: 'Time', dataField: 'time', width: '30%', cellsAlign: 'center', align: 'center',

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
                label: 'Done', dataField: 'done', width: '10%', cellsAlign: 'center', align: 'center',

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
