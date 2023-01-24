import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent } from 'smart-webcomponents-angular/grid';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    onRowDetailInit = function (index: number, row: any, detail: HTMLElement) {
        const main = document.createElement('div');
        main.className = 'details-dialog';
        Object.keys(row.data).forEach(key => {
            const element = document.createElement('div');
            element.className = 'column-info';
            switch (key) {
                case 'name':
                    {
                        const name = document.createElement('h3');
                        name.innerHTML = row.data[key];
                        element.appendChild(name);
                    }
                    break;
                case 'projectImages':
                case 'logo':
                    {
                        const label = document.createElement('label');
                        label.innerHTML = 'Project images';
                        const value = document.createElement('img');
                        value.style.width = '100px';
                        value.src = `./../../../src/images/${row.data[key]}.jpg`;
                        element.appendChild(label);
                        element.appendChild(value);
                    }
                    break;
                case 'category':
                    {
                        const label = document.createElement('label');
                        label.innerHTML = 'Category';
                        const value = document.createElement('span');
                        let color = row.data[key] === 'Brand indentity' ? '#007ACC' : row.data[key] === 'Industrial design' ? '#CBC43F' : '#9641A4';
                        value.style.cssText = `margin-left: 7px; padding: 4px 18px; border-radius: 10px 5px; color: #fff; background:${color}`;
                        value.innerHTML = row.data[key];
                        element.appendChild(label);
                        element.appendChild(value);
                    }
                    break;
                case 'completed':
                    {
                        const label = document.createElement('label');
                        label.innerHTML = 'Completed';
                        const value = document.createElement('smart-check-box');
                        value.readonly = true;
                        value.checked = row.data[key];
                        element.appendChild(label);
                        element.appendChild(value);
                    }
                    break;
                case 'project':
                case 'client':
                    {
                        const label = document.createElement('label');
                        label.innerHTML = 'Client';
                        const value = document.createElement('span');
                        value.style.cssText = 'margin-right: 7px; padding: 4px 18px; border-radius: 10px 5px; background: #E9EEF9';
                        value.innerHTML = row.data[key];
                        element.appendChild(label);
                        element.appendChild(value);
                    }
                    break;
                case 'projectLead':
                case 'assignee':
                    {
                        const label = document.createElement('label');
                        label.innerHTML = 'Project lead';
                        const span = document.createElement('span');
                        span.className = 'person-template';
                        const image = document.createElement('img');
                        const name = row.data[key].split(' ')[0].toLowerCase();
                        image.src = `./../../../src/images/phonebook/${name}.png`;
                        const value = document.createElement('div');
                        value.innerHTML = row.data[key];
                        span.appendChild(image);
                        span.appendChild(value);
                        element.appendChild(label);
                        element.appendChild(span);
                    }
                    break;
                case 'projectTeam':
                    {
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
                            image.src = `./../../../src/images/phonebook/${name}.png`;
                            const value = document.createElement('div');
                            value.innerHTML = people[i];
                            value.style.display = 'contents';
                            span.appendChild(image);
                            span.appendChild(value);
                            container.appendChild(span);
                        }
                        element.appendChild(label);
                        element.appendChild(container);
                    }
                    break;
                default: {
                    if (key === '$' || key === 'leaf' || key === 'level' || key === 'parent' || !row.data[key]) return;
                    const label = document.createElement('label');
                    let labelText = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
                    labelText = labelText.charAt(0).toUpperCase() + labelText.slice(1);
                    label.innerHTML = labelText;
                    const value = document.createElement('div');
                    if (key.includes('Date')) {
                        value.innerHTML = row.data[key].toLocaleDateString();
                    }
                    else {
                        value.innerHTML = row.data[key];
                    }
                    element.appendChild(label);
                    element.appendChild(value);
                }
            }
            main.appendChild(element);
        });
        detail.appendChild(main);
        row.grid.rowDetail.dialog.header = row.data.name;
    };

    dataSource = new window.Smart.DataAdapter({
        dataSource: [
            { name: 'Brand wrapper', category: 'Brand indentity', completed: true, projectImages: 'branding', client: 'Sofia\'s Coffee', projectLead: 'Nancy Winkler', phone: '5554312567', projectTeam: 'Steven Vileid, Robert Ohno, Laura Rossi', kickoffDate: new Date(), dueDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
            { name: 'Brand packer', category: 'Brand indentity', completed: false, projectImages: 'brand', client: 'Center of History', projectLead: 'Anne Devling', phone: '2244312567', projectTeam: 'Andrew Fuller, Steven Vileid', kickoffDate: new Date(), dueDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
            { name: 'Engineer brand indentity', category: 'Brand indentity', completed: true, projectImages: 'museum', client: 'Engineer', projectLead: 'Michael Rossi', phone: '9254312567', projectTeam: 'Michael Rossi, Anne Wilson', kickoffDate: new Date(), dueDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
            { name: 'Content building', category: 'Industrial design', completed: false, projectImages: 'cards', client: 'Tech Park', projectLead: 'Robert Peterson', phone: '4154312567', projectTeam: 'Janet Nagase, Laura Rossi', kickoffDate: new Date(), dueDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
            { name: 'Design peer', category: 'Technology design', completed: true, projectImages: 'business-cards', client: 'System Corporation', projectLead: 'Andrew Vileid', phone: '7254312567', projectTeam: 'Margaret Saylor, Nancy Burke', kickoffDate: new Date(), dueDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
            { name: 'Building block', category: 'Technology design', completed: false, projectImages: 'store', client: 'System Corporation', projectLead: 'Laura Bjorn', phone: '2454312567', projectTeam: 'Laura Bjorn', kickoffDate: new Date(), dueDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
        ],
        dataFields: [
            'name: string',
            'category: string',
            'completed: bool',
            'projectImages: string',
            'client: string',
            'projectLead: string',
            'phone: string',
            'projectTeam: string',
            'kickoffDate: date',
            'dueDate: date'
        ]
    });
    sorting = {
        enabled: true
    };
    behavior = {
        columnResizeMode: 'split'
    };
    layout = {
        rowHeight: 50
    };
    rowDetail = {
        enabled: true,
        visible: true,
        dialog: {
            enabled: true,
            header: '',
            width: 500,
            height: 'auto',
            top: 100
        }
    };
    selection = {
        enabled: true,
        mode: 'extended',
        allowCellSelection: true
    };
    editing = {
        enabled: true
    };
    columns = [
        { label: 'Name', dataField: 'name', freeze: true, allowResize: true },
        {
            label: 'Project lead', width: 150, dataField: 'projectLead', allowResize: true
        },
        {
            label: 'Phone', width: 200, dataField: 'phone', formatFunction(settings: any) {
                const formatPhoneNumber = (value: any) => {
                    const formattedValue = ('' + value).replace(/\D/g, '');
                    const match = formattedValue.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
                    if (match) {
                        let intlCode = (match[1] ? '+1 ' : '');
                        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
                    }
                    return null;
                };
                settings.value = formatPhoneNumber(settings.value);
            }, editor: {
                template: 'maskedTextBox',
                mask: '(###) ### - ####'
            }, allowResize: true
        },
        {
            label: 'Project images', width: 200, dataField: 'projectImages', allowResize: true,
            template: function (formatObject: any) {
                formatObject.template = `<img style="width: 75px;" src="./../../../src/images/${formatObject.value}.jpg">`;
            }
        },
        {
            label: 'Category', width: 200, dataField: 'category', allowResize: true,
            template: function (formatObject: any) {
                let color;
                if (formatObject.value === 'Brand indentity') {
                    color = '#007ACC';
                }
                else if (formatObject.value === 'Industrial design') {
                    color = '#CBC43F';
                }
                else {
                    color = '#9641A4';
                }
                formatObject.template = `<span style="margin-left: 7px; padding: 4px 18px; border-radius: 10px 5px; color: #fff; background: ${color}";>${formatObject.value}</span>`;
            }
        },
        { label: 'Done', width: 80, dataField: 'completed', template: 'checkBox', align: 'center', allowResize: true },
        {
            label: 'Client', width: 200, dataField: 'client', allowResize: true,
            template: function (formatObject) {
                formatObject.template = `<span style="margin-right: 7px; margin-left: 10px; padding: 4px 18px; border-radius: 10px 5px; background: #E9EEF9";>${formatObject.value}</span>`;
            }
        },
        {
            label: 'Project team', width: 300, dataField: 'projectTeam', allowResize: true
        },
        { label: 'Kickoff date', editor: 'dateInput', width: 200, dataField: 'kickoffDate', cellsFormat: 'd', allowResize: true },
        { label: 'Due date', editor: 'dateInput', width: 200, dataField: 'dueDate', cellsFormat: 'd', allowResize: true }
    ];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
    }
}