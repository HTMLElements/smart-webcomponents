const data = [
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

let selectedPersonId = 0;

window.onload = function () {
    initCalendar();
    initChart();
    initGrid();
    initListBox();
    resetForm();
    attachEvents();
}

function initCalendar() {
    document.getElementById('calendar').min = new Date(new Date().setDate(new Date().getDate() - 1));
    document.getElementById('calendar').max = new Date();
    document.getElementById('calendar').clearSelection();
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

    Smart('#chart', class {
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
    Smart('#grid', class {
        get properties() {
            return {
                appearance: {
                    showRowHeaderNumber: true
                },
                selection: {
                    enabled: true,
                    mode: 'one'
                },
                dataSource: new Smart.DataAdapter(
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

    document.getElementById('grid').select(0);
}

function initListBox() {
    const listbox = document.getElementById('listbox');
    listbox.dataSource = data.map(x => {
        return { id: x.id, name: x.name, image: x.image }
    });

    const items = listbox.items;
    for (let i = 0; i < listbox.dataSource.length; i++) {
        items[i].querySelector('img').src = `../../images/people/${listbox.dataSource[i].image}.jpg`
    }
}

function attachEvents() {
    document.getElementById('listbox').addEventListener('change', e => {
        changeSelectedPerson(e.detail.value, true);
    });

    document.getElementById('grid').addEventListener('change', e => {
        const id = e.target.getSelection().rows[0].id;
        changeSelectedPerson(id);
    });

    document.getElementById('save').addEventListener('click', () => {
        updatePersonData();
    });

    document.getElementById('reset').addEventListener('click', () => {
        resetForm();
    });

    document.getElementById('calendar').addEventListener('change', e => {
        if (e.detail.value.length) {
            document.getElementById('grid').addFilter('date', '= ' + e.detail.value[0].toLocaleDateString());
        } else {
            document.getElementById('grid').clearFilter();
        }
    });

    document.querySelector('.smart-calendar-footer smart-button').addEventListener('click', () => {
        document.getElementById('calendar').clearSelection();
    });

    window.addEventListener('resize', e => {
        const splitter = document.getElementById('dashboard');
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

function changeSelectedPerson(id, updateGrid) {
    if (selectedPersonId === id) return;

    selectedPersonId = id;
    const personData = data[id];

    document.querySelector('.dashboard-header .header-name').innerHTML = personData.name;
    const imgSrc = `../../images/people/${personData.image}.jpg`;
    document.querySelector('.icon-holder .header-logo').src = imgSrc;

    const personInfo = document.getElementById('personInfo');
    personInfo.querySelector('#name').value = personData.name;
    personInfo.querySelector('smart-date-time-picker').value = personData.date;
    personInfo.querySelector('#email').value = personData.email;
    personInfo.querySelector('img').src = imgSrc;

    if (personData.inpatient) {
        personInfo.querySelector('#inpatient').checked = true;
    } else {
        personInfo.querySelector('#outpatient').checked = true;
    }

    if (updateGrid) {
        document.getElementById('grid').select(personData.id);
    } else {
        document.getElementById('listbox').selectedIndexes = [personData.id];
    }
}

function updatePersonData() {
    const selectedPerson = data[selectedPersonId];
    selectedPerson.name = document.getElementById('name').value;
    selectedPerson.date = document.querySelector('smart-date-time-picker').value;
    selectedPerson.email = document.getElementById('email').value;
    selectedPerson.inpatient = document.getElementById('inpatient').checked ? true : false;

    // update grid data
    const grid = document.getElementById('grid');
    const gridData = grid.rows[selectedPersonId].data;
    gridData.name = selectedPerson.name;
    gridData.date = selectedPerson.date;
    gridData.email = selectedPerson.email;
    gridData.inpatient = selectedPerson.inpatient;
    grid.refreshView();

    // update listbox data
    const listbox = document.getElementById('listbox');
    listbox.update(selectedPersonId, selectedPerson.name);
    const items = listbox.items;
    items[selectedPersonId].querySelector('img').src = `../../images/people/${data[selectedPersonId].image}.jpg`;
}

function resetForm() {
    const selectedPerson = data[selectedPersonId];

    document.getElementById('name').value = selectedPerson.name;
    document.querySelector('smart-date-time-picker').value = selectedPerson.date;
    document.getElementById('email').value = selectedPerson.email;
    document.querySelector('#personInfo img').src = `../../images/people/${selectedPerson.image}.jpg`;

    if (selectedPerson.inpatient) {
        document.getElementById('inpatient').checked = true;
    } else {
        document.getElementById('outpatient').checked = true;
    }
}