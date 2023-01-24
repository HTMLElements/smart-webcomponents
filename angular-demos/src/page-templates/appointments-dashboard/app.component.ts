import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { CalendarComponent, Smart } from 'smart-webcomponents-angular/calendar';
import { GridComponent, DataAdapter, Grid } from 'smart-webcomponents-angular/grid';
import { ListBoxComponent, ListItem, ListBox } from 'smart-webcomponents-angular/listbox';
import { ButtonComponent, Button } from 'smart-webcomponents-angular/button';
import { TextBoxComponent, TextBox } from 'smart-webcomponents-angular/textbox';
import { DateTimePickerComponent, DateTimePicker } from 'smart-webcomponents-angular/datetimepicker';
import { SplitterComponent, Splitter } from 'smart-webcomponents-angular/splitter';
import { RadioButtonComponent, RadioButton } from 'smart-webcomponents-angular/radiobutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
    @ViewChild('listBox', { read: ListBoxComponent, static: false }) listBox!: ListBoxComponent;
    @ViewChild('saveButton', { read: ButtonComponent, static: false }) saveButton!: ButtonComponent;
    @ViewChild('resetButton', { read: ButtonComponent, static: false }) resetButton!: ButtonComponent;
    @ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;
    @ViewChild('textBoxEmail', { read: TextBoxComponent, static: false }) textBoxEmail!: TextBoxComponent;
    @ViewChild('dateTimePicker', { read: DateTimePickerComponent, static: false }) dateTimePicker!: DateTimePickerComponent;
    @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;
    @ViewChild('headerName', { read: ElementRef, static: false }) headerName!: ElementRef;
    @ViewChild('headerLogo', { read: ElementRef, static: false }) headerLogo!: ElementRef;
    @ViewChild('personInfo', { read: ElementRef, static: false }) personInfo!: ElementRef;
    @ViewChild('radioButtonInpatient', { read: RadioButtonComponent, static: false }) radioButtonInpatient!: RadioButtonComponent;
    @ViewChild('radioButtonOutPatient', { read: RadioButtonComponent, static: false }) radioButtonOutPatient!: RadioButtonComponent;

    private data = [
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

    caption: string = 'Total visits';

    description: string = '';

    showLegend: boolean = true;

    showBorderLine: boolean = false;

    padding: object = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: object = { left: 90, top: 0, right: 0, bottom: 10 };

    dataSource: Array<object> = [
        { type: 'Circulatory', inpatients: 55, outpatients: 80 },
        { type: 'Digestive', inpatients: 35, outpatients: 55 },
        { type: 'Endocrine', inpatients: 85, outpatients: 50 },
        { type: 'Nervous', inpatients: 62, outpatients: 58 },
        { type: 'Renal', inpatients: 45, outpatients: 65 },
        { type: 'Respiratory', inpatients: 75, outpatients: 55 }
    ];

    xAxis: object = {
        dataField: 'type',
        visible: false
    };

    colorScheme: string = 'scheme29';

    seriesGroups: Array<object> = [
        {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            valueAxis: {
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
    ];

    appearance: object = {
        showRowHeaderNumber: true
    };

    selection: object = {
        enabled: true,
        mode: 'one'
    };

    gridDataSource: DataAdapter = new Smart.DataAdapter({
        dataSource: this.data,
        dataFields: [
            'date: date',
            'name: string',
            'email: string',
            'diagnosis: string',
            'symptoms: string',
            'inpatient: bool'
        ]
    });

    columns: Array<object> = [
        { label: '', dataField: 'inpatient', template: 'checkBox', width: '3%' },
        { label: 'Date', dataField: 'date', cellsFormat: 'dd MMMM' },
        { label: 'Name', dataField: 'name' },
        { label: 'Email', dataField: 'email' },
        { label: 'Diagnosis', dataField: 'diagnosis' },
        { label: 'Symptoms', dataField: 'symptoms' }
    ];

    onCalendarReady(event: any): void {
        this.calendar.nativeElement.querySelector('.smart-calendar-footer smart-button').addEventListener('click', (): void => {
            this.calendar.clearSelection();
        });
    }

    onListBoxReady(event: any): void {
        const listBox = this.listBox;
        const items: Array<ListItem> = listBox.items as Array<ListItem>;

        for (let i = 0; i < listBox.dataSource.length; i++) {
            items[i].querySelector('img').src = `./../../../src/images/people/${listBox.dataSource[i].image}.png`;
        }
    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const that = this;
        let selectedPersonId = 0;

        function initCalendar(): void {
            const calendar: CalendarComponent = that.calendar;

            calendar.min = new Date(new Date().setDate(new Date().getDate() - 1));
            calendar.max = new Date();
            calendar.clearSelection();
        }

        function initGrid(): void {
            that.grid.select(0);
        }

        function initListBox(): void {
            const listbox: ListBoxComponent = that.listBox as ListBoxComponent;

            listbox.dataSource = that.data.map((x: any): object => {
                return { id: x.id, name: x.name, image: x.image };
            });
        }

        function attachEvents() {
            that.listBox.addEventListener('change', (e: CustomEvent): void => {
                changeSelectedPerson(e.detail.value, true);
            });

            that.grid.addEventListener('change', (e: CustomEvent): void => {
                const rows = (<Grid>e.target).getSelection().rows;

                if (!rows || !rows.length) {
                    return;
                }

                const id = rows[0].id;

                changeSelectedPerson(id);
            });

            that.saveButton.addEventListener('click', (): void => {
                updatePersonData();
            });

            that.resetButton.addEventListener('click', (): void => {
                resetForm();
            });

            that.calendar.addEventListener('change', (e: CustomEvent): void => {
                if (e.detail.value.length) {
                    that.grid.addFilter('date', '= ' + e.detail.value[0].toLocaleDateString());
                }
                else {
                    that.grid.clearFilter();
                }
            });

            window.addEventListener('resize', (e): void => {
                const splitter = that.splitter;

                if (window.innerWidth <= 500) {
                    if (splitter.orientation !== 'horizontal') {
                        splitter.orientation = 'horizontal';
                    }
                }
                else {
                    if (splitter.orientation !== 'vertical') {
                        splitter.orientation = 'vertical';
                    }
                }
            });
        }

        function changeSelectedPerson(id: number, updateGrid!: boolean): void {
            if (selectedPersonId === id) {
                return;
            }

            selectedPersonId = id;

            const personData = that.data[id];

            that.headerName.nativeElement.innerHTML = personData.name;

            const imgSrc = `./../../../src/images/people/${personData.image}.png`;

            that.headerLogo.nativeElement.src = imgSrc;

            const personInfo = that.personInfo.nativeElement;

            that.textBox.value = personData.name;
            that.dateTimePicker.value = personData.date;
            that.textBoxEmail.value = personData.email;
            personInfo.querySelector('img').src = imgSrc;

            if (personData.inpatient) {
                that.radioButtonInpatient.checked = true;
            }
            else {
                that.radioButtonOutPatient.checked = true;
            }
            if (updateGrid) {
                that.grid.select(personData.id);
            }
            else {
                that.listBox.selectedIndexes = [personData.id];
            }
        }

        function updatePersonData(): void {
            const selectedPerson = that.data[selectedPersonId];
            selectedPerson.name = that.textBox.value;
            selectedPerson.date = that.dateTimePicker.value;
            selectedPerson.email = that.textBoxEmail.value;
            selectedPerson.inpatient = that.radioButtonInpatient.checked ? true : false;

            // update grid data
            const grid = that.grid;
            const gridData = grid.rows[selectedPersonId].data;

            gridData.name = selectedPerson.name;
            gridData.date = selectedPerson.date;
            gridData.email = selectedPerson.email;
            gridData.inpatient = selectedPerson.inpatient;
            grid.refreshView();

            // update listbox data
            const listbox = that.listBox;

            listbox.update(selectedPersonId, selectedPerson.name);

            const items: Array<ListItem> = listbox.items as Array<ListItem>;

            items[selectedPersonId].querySelector('img').src = `./../../../src/images/people/${that.data[selectedPersonId].image}.png`;
        }

        function resetForm(): void {
            const selectedPerson = that.data[selectedPersonId];

            that.textBox.value = selectedPerson.name;
            that.dateTimePicker.value = selectedPerson.date;
            that.textBoxEmail.value = selectedPerson.email;
            that.personInfo.nativeElement.querySelector('img').src = `./../../../src/images/people/${selectedPerson.image}.png`;

            if (selectedPerson.inpatient) {
                that.radioButtonInpatient.checked = true;
            }
            else {
                that.radioButtonOutPatient.checked = true;
            }
        }

        initCalendar();
        initGrid();
        initListBox();
        resetForm();
        attachEvents();
    };
}