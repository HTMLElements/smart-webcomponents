/// <reference path="../../source/typescript/smart.elements.d.ts" />

import { Calendar, ListBox, ListItem, Splitter, Orientation, TextBox, CheckBox, DateTimePicker, Grid } from "../../source/typescript/smart.elements";


const data: any = [
    { id: 0, date: new Date(new Date().setDate(new Date().getDate() - 1)), name: 'Nancy Davolio', image: 'nancy', email: 'ndavolio@msn.com', diagnosis: 'Aerophobia', symptoms: 'Fear of flying', inpatient: false },
    { id: 1, date: new Date(new Date().setDate(new Date().getDate() - 1)), name: 'Andrew Fuller', image: 'andrew', email: 'afuller@msn.com', diagnosis: 'Pyrophobia', symptoms: 'Fear of fire', inpatient: true },
    { id: 2, date: new Date(new Date().setDate(new Date().getDate() - 1)), name: 'John Levering', image: 'john', email: 'jlevering@msn.com', diagnosis: 'Scolionophobia', symptoms: 'Fear of school', inpatient: true },
    { id: 3, date: new Date(new Date().setDate(new Date().getDate() - 1)), name: 'Maria Peacock', image: 'maria', email: 'mpeacock@msn.com', diagnosis: 'Necrophobia', symptoms: 'Fear of death or dead things', inpatient: false },
    { id: 4, date: new Date(new Date().setDate(new Date().getDate() - 1)), name: 'Steven Buchanan', image: 'steven', email: 'sbuchanan@msn.com', diagnosis: 'Megalophobia', symptoms: 'Fear of large things', inpatient: false },
    { id: 5, date: new Date(), name: 'Mark Suyama', image: 'mark', email: 'msuyama@msn.com', diagnosis: 'Microphobia', symptoms: 'Fear of small things', inpatient: true },
    { id: 6, date: new Date(), name: 'Laura Callahan', image: 'laura', email: 'lcallahan@msn.com', diagnosis: 'Obesophobia', symptoms: 'Fear of gaining weight', inpatient: false },
    { id: 7, date: new Date(), name: 'Robert King', image: 'robert', email: 'rking@msn.com', diagnosis: 'Pathophobia', symptoms: 'Fear of disease', inpatient: false },
    { id: 8, date: new Date(), name: 'Anne Barone', image: 'anne', email: 'abarone@msn.com', diagnosis: 'Tachophobia', symptoms: 'Fear of speed', inpatient: true },
    { id: 9, date: new Date(), name: 'Janet Peterson', image: 'janet', email: 'jpeterson@msn.com', diagnosis: 'Zoophobia', symptoms: 'Fear of animals', inpatient: false }
];

let selectedPersonId: number = 0;

window.onload = function () {
    initCalendar();
    initChart();
    initGrid();
    initListBox();
    resetForm();
    attachEvents();
}

function initCalendar() {
    const calendar = <Calendar>document.getElementById('calendar');

    calendar.min = new Date(new Date().setDate(new Date().getDate() - 1));
    calendar.max = new Date();
    calendar.clearSelection();
}

function initChart() {
    const sampleData = [
        { type: 'Circulatory', inpatients: 55, outpatients: 80 },
        { type: 'Digestive', inpatients: 35, outpatients: 55 },
        { type: 'Endocrine', inpatients: 85, outpatients: 50 },
        { type: 'Nervous', inpatients: 62, outpatients: 58 },
        { type: 'Renal', inpatients: 45, outpatients: 65 },
        { type: 'Respiratory', inpatients: 75, outpatients: 55 }
    ];

    window.Smart('#chart', class {
        get properties() {
            return {
                caption: 'Total visits',
                description: '',
                showLegend: true,
                showBorderLine: false,
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                dataSource: sampleData,
                xAxis:
                    {
                        dataField: 'type',
                        visible: false
                    },
                colorScheme: 'scheme29',
                seriesGroups:
                    [
                        {
                            type: 'column',
                            columnsGapPercent: 50,
                            seriesGapPercent: 0,
                            valueAxis:
                                {
                                    unitInterval: 15,
                                    minValue: 0,
                                    maxValue: 90,
                                    displayValueAxis: true,
                                    axisSize: 'auto',
                                    tickMarksColor: '#888888'
                                },
                            series: [
                                { dataField: 'inpatients', displayText: 'Inpatients' },
                                { dataField: 'outpatients', displayText: 'Outpatients' }
                            ]
                        }
                    ]
            }
        }
    });
}

function initGrid() {
    window.Smart('#grid', class {
        get properties() {
            return {
                appearance: {
                    showRowHeaderNumber: true
                },
                selection: {
                    enabled: true,
                    mode: 'one'
                },
                dataSource: new window.Smart.DataAdapter(
                    {
                        dataSource: data,
                        dataFields:
                            [
                                'date: date',
                                'name: string',
                                'email: string',
                                'diagnosis: string',
                                'symptoms: string',
                                'inpatient: bool'
                            ]
                    }),
                columns: [
                    { label: '', dataField: 'inpatient', template: 'checkBox', width: '3%' },
                    { label: 'Date', dataField: 'date', cellsFormat: 'dd MMMM' },
                    { label: 'Name', dataField: 'name' },
                    { label: 'Email', dataField: 'email' },
                    { label: 'Diagnosis', dataField: 'diagnosis' },
                    { label: 'Symptoms', dataField: 'symptoms' }
                ]
            }
        }
    });

    (document.getElementById('grid') as Grid).select(0);
}

function initListBox() {
    const listbox = <ListBox>document.getElementById('listbox');
    listbox.dataSource = data.map((x: any) => {
        return { id: x.id, name: x.name, image: x.image }
    });

    const items: ListItem[] = listbox.items as ListItem[];
    for (let i = 0; i < listbox.dataSource.length; i++) {
        (items[i].querySelector('img') as HTMLImageElement).src = `../../images/people/${listbox.dataSource[i].image}.png`
    }
}

function attachEvents() {
    document.getElementById('listbox')!.addEventListener('change', (e: any) => {
        changeSelectedPerson(e.detail.value, true);
    });

    document.getElementById('grid')!.addEventListener('change', (e: any) => {
        const id = e.target.getSelection().rows[0].id;
        changeSelectedPerson(id);
    });

    document.getElementById('save')!.addEventListener('click', () => {
        updatePersonData();
    });

    document.getElementById('reset')!.addEventListener('click', () => {
        resetForm();
    });

    document.getElementById('calendar')!.addEventListener('change', (e: any) => {
        if (e.detail.value.length) {
            (document.getElementById('grid') as Grid)!.addFilter('date', '= ' + e.detail.value[0].toLocaleDateString());
        } else {
            (document.getElementById('grid') as Grid)!.clearFilter();
        }
    });

    document.querySelector('.smart-calendar-footer smart-button')!.addEventListener('click', () => {
        (document.getElementById('calendar') as Calendar).clearSelection();
    });

    window.addEventListener('resize', e => {
        const splitter = <Splitter>document.getElementById('dashboard');
        if (window.innerWidth <= 500) {
            if (splitter.orientation !== 'horizontal') {
                splitter.orientation = 'horizontal';
            }
        } else {
            if (splitter.orientation !== 'vertical') {
                splitter.orientation = 'vertical';
            }
        }
    });
}

function changeSelectedPerson(id: number, updateGrid?: boolean | undefined) {
    if (selectedPersonId === id) return;

    selectedPersonId = id;
    const personData = data[id];

    document.querySelector('.dashboard-header .header-name')!.innerHTML = personData.name;
    const imgSrc = `../../images/people/${personData.image}.png`;
    (<HTMLImageElement>document.querySelector('.icon-holder .header-logo')).src = imgSrc;

    const personInfo = document.getElementById('personInfo') as HTMLElement;
    (personInfo.querySelector('#name') as TextBox).value = personData.name;
    (personInfo.querySelector('smart-date-time-picker') as DateTimePicker).value = personData.date;
    (personInfo.querySelector('#email') as TextBox).value = personData.email;
    (personInfo.querySelector('img') as HTMLImageElement).src = imgSrc;

    if (personData.inpatient) {
        (personInfo.querySelector('#inpatient') as CheckBox).checked = true;
    } else {
        (personInfo.querySelector('#outpatient') as CheckBox).checked = true;
    }

    if (updateGrid) {
        (document.getElementById('grid') as Grid).select(personData.id);
    } else {
        (document.getElementById('listbox') as ListBox).selectedIndexes = [personData.id];
    }
}

function updatePersonData() {
    const selectedPerson: any = data[selectedPersonId];
    selectedPerson.name = (document.getElementById('name') as TextBox).value;
    selectedPerson.date = (document.querySelector('smart-date-time-picker') as DateTimePicker).value;
    selectedPerson.email = (document.getElementById('email') as TextBox).value;
    selectedPerson.inpatient = (document.getElementById('inpatient') as CheckBox).checked ? true : false;

    // update grid data
    const grid = document.getElementById('grid') as Grid;
    const gridData = grid.rows![selectedPersonId]!.data;
    gridData.name = selectedPerson.name;
    gridData.date = selectedPerson.date;
    gridData.email = selectedPerson.email;
    gridData.inpatient = selectedPerson.inpatient;
    grid.refreshView();

    // update listbox data
    const listbox = <ListBox>document.getElementById('listbox');
   
    listbox.update(selectedPersonId, selectedPerson.name);
   
    const items = listbox.items as ListItem[];
    (items[selectedPersonId].querySelector('img') as HTMLImageElement).src = `../../images/people/${data[selectedPersonId].image}.png`;
}

function resetForm() {
    const selectedPerson = data[selectedPersonId];

    (document.getElementById('name')! as TextBox).value = selectedPerson.name;
    (document.querySelector('smart-date-time-picker') as DateTimePicker).value = selectedPerson.date;
    (document.getElementById('email') as TextBox).value = selectedPerson.email;
    (document.querySelector('#personInfo img') as HTMLImageElement).src = `../../images/people/${selectedPerson.image}.png`;

    if (selectedPerson.inpatient) {
        (document.getElementById('inpatient') as CheckBox).checked = true;
    } else {
        (document.getElementById('outpatient') as CheckBox).checked = true;
    }
}