window.onload = function () {
    const grid1 = document.getElementById('tab1Grid');
    const grid2 = document.getElementById('tab2Grid');
    const grid3 = document.getElementById('tab3Grid');

    const tabStrip = document.querySelector('.smart-tab-strip');
    const recordsSpan = document.createElement('span');

    recordsSpan.classList.add('records');
    recordsSpan.innerHTML = grid1.dataSource.length + ' Projects';

    tabStrip.appendChild(recordsSpan)
    window.tabs.addEventListener('change', function (event) {
        const index = event.detail.index;

        if (index === 0) {
            recordsSpan.innerHTML = grid1.dataSource.length + ' Projects';
        }
        else if (index === 1) {
            recordsSpan.innerHTML = grid2.dataSource.length + ' Tasks';
        }
        else if (index === 2) {
            recordsSpan.innerHTML = grid3.dataSource.length + ' Clients';
        }
    });
}

const dataSource1 = [
    { name: 'Brand wrapper', category: 'Brand indentity', completed: true, projectImages: 'branding', client: 'Sofia\'s Coffee', projectLead: 'Nancy Winkler', projectTeam: 'Steven Vileid, Robert Ohno, Laura Rossi', kickoffDate: new Date(), dueDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
    { name: 'Brand packer', category: 'Brand indentity', completed: false, projectImages: 'brand', client: 'Center of History', projectLead: 'Anne Devling', projectTeam: 'Andrew Fuller, Steven Vileid', kickoffDate: new Date(), dueDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
    { name: 'Engineer brand indentity', category: 'Brand indentity', completed: true, projectImages: 'museum', client: 'Engineer', projectLead: 'Michael Rossi', projectTeam: 'Michael Rossi, Anne Wilson', kickoffDate: new Date(), dueDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
    { name: 'Content building', category: 'Industrial design', completed: false, projectImages: 'cards', client: 'Tech Park', projectLead: 'Robert Peterson', projectTeam: 'Janet Nagase, Laura Rossi', kickoffDate: new Date(), dueDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
    { name: 'Design peer', category: 'Technology design', completed: true, projectImages: 'business-cards', client: 'System Corporation', projectLead: 'Andrew Vileid', projectTeam: 'Margaret Saylor, Nancy Burke', kickoffDate: new Date(), dueDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
    { name: 'Building block', category: 'Technology design', completed: false, projectImages: 'store', client: 'System Corporation', projectLead: 'Laura Bjorn', projectTeam: 'Laura Bjorn', kickoffDate: new Date(), dueDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
];

const dataSource2 = [
    { name: 'Brand wrapper', completed: true, assignee: 'Steven Vileid', project: 'Brand packer', timeEstimate: 12.5, notes: '' },
    { name: 'Brand packer', completed: true, assignee: 'Michael Rossi', project: 'Brand packer', timeEstimate: 8.0, notes: 'Some notes' },
    { name: 'Engineer brand indentity', completed: false, assignee: 'Laura Bjorn', project: 'Engineer brand indentity', timeEstimate: 5.5, notes: '' }
];

const dataSource3 = [
    { name: 'Brand wrapper', logo: 'branding', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', project: 'Brand wrapper' },
    { name: 'Brand packer', logo: 'brand', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', project: 'Brand packer' },
    { name: 'Engineer brand indentity', logo: 'museum', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', project: 'Engineer brand indentity' },
    { name: 'Content building', logo: 'cards', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', project: 'Content building' },
    { name: 'Design peer', logo: 'business-cards', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', project: 'Design peer' },
    { name: 'Building block', logo: 'store', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', project: 'Building block' }
];

Smart('#tab1Grid', class {
    get properties() {
        return {
            appearance: {
                showRowHeaderNumber: true,
                showRowHeaderSelectIcon: true
            },
            behavior: {
                columnResizeMode: 'split'
            },
            layout: {
                rowHeight: 50
            },
            selection: {
                enabled: true,
                allowRowHeaderSelection: true
            },
            sorting: {
                enabled: true
            },
            onRowDetailInit,
            rowDetail: {
                enabled: true,
                visible: true,
                dialog: {
                    enabled: true,
                    header: '',
                    width: 500
                }
            },
            dataSource: new Smart.DataAdapter(
                {
                    dataSource: dataSource1,
                    dataFields:
                        [
                            'name: string',
                            'category: string',
                            'completed: bool',
                            'projectImages: string',
                            'client: string',
                            'projectLead: string',
                            'projectTeam: string',
                            'kickoffDate: date',
                            'dueDate: date'
                        ]
                }),
            columns: [
                { label: 'Name', width: '25%', dataField: 'name', freeze: true, allowResize: true },
                {
                    label: 'Category', width: '25%', dataField: 'category', allowResize: true,
                    template: function (formatObject) {
                        let color;
                        if (formatObject.value === 'Brand indentity') {
                            color = '#18BFFF';
                        } else {
                            color = '#0BB723';
                        }
                        formatObject.template = `<span style="margin-left: 7px; padding: 4px 18px; border-radius: 10px 5px; color: #fff; background: ${color}";>${formatObject.value}</span>`;
                    }
                },
                { label: 'Completed', width: 150, dataField: 'completed', template: 'checkBox', align: 'center', allowResize: true },
                {
                    label: 'Project images', width: '15%', dataField: 'projectImages', allowResize: true,
                    template: function (formatObject) {
                        formatObject.template = `<img style="width: 75px;" src="./images/${formatObject.value}.jpg">`;
                    }
                },
                {
                    label: 'Client', width: '25%', dataField: 'client', allowResize: true,
                    template: function (formatObject) {
                        formatObject.template = `<span style="margin-right: 7px; margin-left: 10px; padding: 4px 18px; border-radius: 10px 5px; background: #E9EEF9";>${formatObject.value}</span>`;
                    }
                },
                {
                    label: 'Project lead', width: 150, dataField: 'projectLead', allowResize: true
                },
                {
                    label: 'Project team', width: 300, dataField: 'projectTeam', allowResize: true
                },
                { label: 'Kickoff date', width: 200, dataField: 'kickoffDate', cellsFormat: 'd', allowResize: true },
                { label: 'Due date', width: 200, dataField: 'dueDate', cellsFormat: 'd', allowResize: true }
            ]
        }
    }
});
Smart('#tab2Grid', class {
    get properties() {
        return {
            appearance: {
                showRowHeaderNumber: true,
                showRowHeaderSelectIcon: true
            },
            behavior: {
                columnResizeMode: 'split'
            },
            layout: {
                rowHeight: 50
            },
            selection: {
                enabled: true,
                allowRowHeaderSelection: true
            },
            sorting: {
                enabled: true
            },
            onRowDetailInit,
            rowDetail: {
                enabled: true,
                visible: true,
                dialog: {
                    enabled: true,
                    header: ''
                }
            },
            dataSource: new Smart.DataAdapter(
                {
                    dataSource: dataSource2,
                    dataFields:
                        [
                            'name: string',
                            'completed: bool',
                            'assignee: string',
                            'project: string',
                            'timeEstimate: string',
                            'notes: string'
                        ]
                }),
            columns: [
                { label: 'Name', width: '25%', dataField: 'name', freeze: false, allowResize: true },
                { label: 'Completed', width: '25%', dataField: 'completed', template: 'checkBox', allowResize: true },
                {
                    label: 'Assignee', width: '25%', dataField: 'assignee', allowResize: true,
                    template: function (formatObject) {
                        const image = formatObject.value.split(' ')[0].toLowerCase();
                        formatObject.template = '<span class="person-template"><img src="../../images/phonebook/' + image + '.png"><div>' + formatObject.value + '</div></span>';
                    }
                },
                {
                    label: 'Design project', width: '25%', dataField: 'project', allowResize: true,
                    template: function (formatObject) {
                        formatObject.template = '<span style="margin-right: 7px; padding: 4px 18px; border-radius: 10px 5px; background: #E9EEF9";>' + formatObject.value + '</span>'
                    }

                },
                { label: 'Time estimate (days)', width: '25%', dataField: 'timeEstimate', allowResize: true, cellsAlign: 'right' },
                { label: 'Notes', width: '25%', dataField: 'notes', allowResize: true }
            ]
        }
    }
});
Smart('#tab3Grid', class {
    get properties() {
        return {
            appearance: {
                showRowHeaderNumber: true,
                showRowHeaderSelectIcon: true
            },
            behavior: {
                columnResizeMode: 'split'
            },
            layout: {
                rowHeight: 50
            },
            selection: {
                enabled: true,
                allowRowHeaderSelection: true
            },
            sorting: {
                enabled: true
            },
            onRowDetailInit,
            rowDetail: {
                enabled: true,
                visible: true,
                dialog: {
                    enabled: true,
                    header: ''
                }
            },
            dataSource: new Smart.DataAdapter(
                {
                    dataSource: dataSource3,
                    dataFields:
                        [
                            'name: string',
                            'logo: string',
                            'about: bool',
                            'project: string'
                        ]
                }),
            columns: [
                { label: 'Name', width: '45%', dataField: 'name', freeze: false, allowResize: true },
                {
                    label: 'Logo', width: '10%', dataField: 'logo', allowResize: true,
                    template: function (formatObject) {
                        formatObject.template = `<img style="width: 40px;" src="./images/${formatObject.value}.jpg">`;
                    }
                },
                { label: 'About', width: '60%', dataField: 'about', allowResize: true },
                {
                    label: 'Project', width: '25%', dataField: 'project', allowResize: true,
                    template: function (formatObject) {
                        formatObject.template = '<span style="margin-right: 7px; padding: 4px 18px; border-radius: 10px 5px; background: #E9EEF9";>' + formatObject.value + '</span>'
                    }
                }
            ]
        }
    }
});

function onRowDetailInit(index, row, detail) {
    const main = document.createElement('div');
    main.className = 'details-dialog';
    Object.keys(row.data).forEach(key => {
        const element = document.createElement('div');
        element.className = 'column-info';

        switch (key) {
            case 'name': {
                const name = document.createElement('h3');
                name.innerHTML = row.data[key];
                element.appendChild(name);
            } break;
            case 'category': {
                const label = document.createElement('label');
                label.innerHTML = 'Category';

                const value = document.createElement('span');
                let color = row.data[key] === 'Brand indentity' ? '#18BFFF' : '#F82B60';
                value.style.cssText = `margin-left: 7px; padding: 4px 18px; border-radius: 10px 5px; color: #fff; background:${color}`;
                value.innerHTML = row.data[key];

                element.appendChild(label);
                element.appendChild(value);
            } break;
            case 'completed': {
                const label = document.createElement('label');
                label.innerHTML = 'Completed';

                const value = document.createElement('smart-check-box');
                value.readonly = true;
                value.checked = row.data[key];

                element.appendChild(label);
                element.appendChild(value);
            } break;
            case 'projectImages':
            case 'logo': {
                const label = document.createElement('label');
                label.innerHTML = 'Project images';

                const value = document.createElement('img');
                value.style.width = '100px';
                value.src = `./images/${row.data[key]}.jpg`;

                element.appendChild(label);
                element.appendChild(value);
            } break;
            case 'project':
            case 'client': {
                const label = document.createElement('label');
                label.innerHTML = 'Client';

                const value = document.createElement('span');
                value.style.cssText = 'margin-right: 7px; padding: 4px 18px; border-radius: 10px 5px; background: #E9EEF9';
                value.innerHTML = row.data[key];

                element.appendChild(label);
                element.appendChild(value);
            } break;
            case 'projectLead':
            case 'assignee': {
                const label = document.createElement('label');
                label.innerHTML = 'Project lead';

                const span = document.createElement('span');
                span.className = 'person-template';
                const image = document.createElement('img');
                const name = row.data[key].split(' ')[0].toLowerCase();
                image.src = `../../images/phonebook/${name}.png`;
                const value = document.createElement('div');
                value.innerHTML = row.data[key];

                span.appendChild(image);
                span.appendChild(value);

                element.appendChild(label);
                element.appendChild(span);
            } break;
            case 'projectTeam': {
                const label = document.createElement('label');
                label.innerHTML = 'Project Team';

                const people = row.data[key].split(', ');
                const container = document.createElement('div');
                container.style.display = 'flex';

                for (let i = 0; i < people.length; i++) {

                    const span = document.createElement('span');
                    span.className = 'person-template';
                    const image = document.createElement('img');
                    const name = people[i].split(' ')[0].toLowerCase();
                    image.src = `../../images/phonebook/${name}.png`;
                    const value = document.createElement('div');
                    value.innerHTML = people[i];
                    value.style.display = 'contents';

                    span.appendChild(image);
                    span.appendChild(value);

                    container.appendChild(span);
                }

                element.appendChild(label);
                element.appendChild(container);
            } break;
            default: {
                if (key === '$' || key === 'leaf' || key === 'level' || key === 'parent' || !row.data[key]) return;
                const label = document.createElement('label');

                let labelText = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
                labelText = labelText.charAt(0).toUpperCase() + labelText.slice(1);
                label.innerHTML = labelText;

                const value = document.createElement('div');
                if (key.includes('Date')) {
                    value.innerHTML = row.data[key].toLocaleDateString();
                } else {
                    value.innerHTML = row.data[key];
                }

                element.appendChild(label);
                element.appendChild(value);
            }
        }
        main.appendChild(element);
    });

    detail.appendChild(main);

    this.rowDetail.dialog.header = row.data.name;
}