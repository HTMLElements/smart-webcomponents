import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { LayoutComponent } from 'smart-webcomponents-angular/layout';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CalendarComponent } from 'smart-webcomponents-angular/calendar';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { DateTimePickerComponent, DateTimePicker } from 'smart-webcomponents-angular/datetimepicker';
import { GridComponent, Smart, DataAdapter } from 'smart-webcomponents-angular/grid';
import { ListBoxComponent, ListItem } from 'smart-webcomponents-angular/listbox';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('datetimepicker', { read: DateTimePickerComponent, static: false }) datetimepicker!: DateTimePickerComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
    @ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;
    @ViewChild('textbox2', { read: TextBoxComponent, static: false }) textbox2: TextBoxComponent;

    sampleData: Array<Object> = [
        { type: 'Circulatory', inpatients: 55, outpatients: 80 },
        { type: 'Digestive', inpatients: 35, outpatients: 55 },
        { type: 'Endocrine', inpatients: 85, outpatients: 50 },
        { type: 'Nervous', inpatients: 62, outpatients: 58 },
        { type: 'Renal', inpatients: 45, outpatients: 65 },
        { type: 'Respiratory', inpatients: 75, outpatients: 55 }
    ];

    data: Array<{ id: number, name: string, image: string, date: Date, email: string, inpatient: Boolean, diagnosis: string, symptoms: string }> = [
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

    caption: String = 'Total visits';

    description: String = '';

    showLegend: Boolean = true;

    showBorderLine: Boolean = false;

    padding: Object = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: Object = { left: 90, top: 0, right: 0, bottom: 10 };

    dataSource: Array<Object> = this.sampleData;

    xAxis: Object =
        {
            dataField: 'type',
            visible: false
        };

    colorScheme: String = 'scheme05';

    seriesGroups: Array<Object> = [
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
    ];

    gridAppearance: Object = {
        showRowHeaderNumber: true
    };

    gridSelection: Object = {
        enabled: true,
        mode: 'one'
    };

    gridDataSource: DataAdapter = new Smart.DataAdapter(
        {
            dataSource: this.data,
            dataFields:
                [
                    'date: date',
                    'name: string',
                    'email: string',
                    'diagnosis: string',
                    'symptoms: string',
                    'inpatient: bool'
                ]
        });

    gridColumns: Array<Object> = [
        { label: '', dataField: 'inpatient', template: 'checkBox', width: 30 },
        { label: 'Date', dataField: 'date', cellsFormat: 'dd MMMM' },
        { label: 'Name', dataField: 'name' },
        { label: 'Email', dataField: 'email' },
        { label: 'Diagnosis', dataField: 'diagnosis' },
        { label: 'Symptoms', dataField: 'symptoms' }
    ];

    selectedPersonId: number = 0;

    initCalendar() {
        const calendar = this.calendar;

        calendar.min = new Date(new Date().setDate(new Date().getDate() - 1));
        calendar.max = new Date();
        calendar.clearSelection();
    }

    initGrid() {
        const that = this;

        that.grid.select(0);
    }

    initListBox() {
        const listbox = this.listbox;

        listbox.dataSource = this.data.map((x: any) => {
            return { id: x.id, name: x.name, image: x.image }
        });

        const items = listbox.items as Array<ListItem>;

        for (let i = 0; i < listbox.dataSource.length; i++) {
            items[i].querySelector('img').src = `../../images/people/${listbox.dataSource[i].image}.jpg`
        }
    }

    attachEvents() {
        const that = this;

        that.listbox.addEventListener('change', (e: CustomEvent) => {
            that.changeSelectedPerson(e.detail.value, true);
        });

        that.grid.addEventListener('change', e => {
            if (!e.target || (e.target && !(e.target as any).getSelection)) {
                return;
            }

            const selection = (e.target as any).getSelection();

            if (selection && selection.rows && selection.rows.length > 0) {
                const id = selection.rows[0].id;

                that.changeSelectedPerson(id);
            }
        });

        that.button2.addEventListener('click', () => {
            that.updatePersonData();
        });

        that.button3.addEventListener('click', () => {
            that.resetForm();
        });

        that.calendar.addEventListener('change', (e: CustomEvent) => {
            if (e.detail.value.length) {
                that.grid.addFilter('date', '= ' + e.detail.value[0].toLocaleDateString());
            }
            else {
                that.grid.clearFilter();
            }
        });
    }

    onCalendarReady(e: CustomEvent) {
        const that = this;

        document.querySelector('.smart-calendar-footer smart-button').addEventListener('click', () => {
            that.calendar.clearSelection();
        });
    }

    changeSelectedPerson(id: number, updateGrid!: boolean) {
        const that = this;

        if (that.selectedPersonId === id) return;

        that.selectedPersonId = id;

        const personData = that.data[id] as { id: number, name: string, image: string, date: Date, email: string, inpatient: Boolean };

        document.querySelector('.dashboard-header .header-name').innerHTML = personData.name;

        const imgSrc = `../../images/people/${personData.image}.jpg`;

        (document.querySelector('.icon-holder .header-logo') as HTMLImageElement).src = imgSrc;

        const personInfo = document.getElementById('personInfo');

        that.textbox.value = personData.name;
        that.datetimepicker.value = personData.date;
        that.textbox2.value = personData.email;

        personInfo.querySelector('img').src = imgSrc;

        if (personData.inpatient) {
            that.radiobutton.checked = true;
        } else {
            that.radiobutton2.checked = true;
        }

        if (updateGrid) {
            that.grid.select(personData.id);
        }
        else {
            that.listbox.selectedIndexes = [personData.id];
        }
    }

    updatePersonData() {
        const that = this;
        const selectedPerson = that.data[that.selectedPersonId] as { id: number, name: string, image: string, date: Date, email: string, inpatient: Boolean };

        selectedPerson.name = that.textbox.value;
        selectedPerson.date = that.datetimepicker.value;
        selectedPerson.email = that.textbox2.value;
        selectedPerson.inpatient = that.radiobutton.checked;

        // update grid data
        const grid = that.grid;
        const gridData = grid.rows[that.selectedPersonId].data;

        gridData.name = selectedPerson.name;
        gridData.date = selectedPerson.date;
        gridData.email = selectedPerson.email;
        gridData.inpatient = selectedPerson.inpatient;

        grid.refreshView();

        // update listbox data
        const listbox = that.listbox;

        listbox.update(that.selectedPersonId, selectedPerson.name);

        const items = listbox.items;

        (items[that.selectedPersonId] as ListItem).querySelector('img').src = `../../images/people/${that.data[that.selectedPersonId].image}.jpg`;
    }

    resetForm() {
        const that = this;
        const selectedPerson = that.data[that.selectedPersonId];

        that.textbox.value = selectedPerson.name;
        that.datetimepicker.value = selectedPerson.date;
        that.textbox.value = selectedPerson.email;
        (document.querySelector('#personInfo img') as HTMLImageElement).src = `../../images/people/${selectedPerson.image}.jpg`;

        if (selectedPerson.inpatient) {
            that.radiobutton.checked = true;
        } else {
            that.radiobutton2.checked = true;
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

        that.initCalendar();
        that.initGrid();
        that.initListBox();
        that.resetForm();
        that.attachEvents();
    }
}