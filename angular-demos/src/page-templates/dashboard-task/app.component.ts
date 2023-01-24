import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';
import { ButtonComponent, Smart, Button } from 'smart-webcomponents-angular/button';
import { GridComponent, DataAdapter, GridRow } from 'smart-webcomponents-angular/grid';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { DropDownListComponent, DropDownList } from 'smart-webcomponents-angular/dropdownlist';
import { WindowComponent, Window } from 'smart-webcomponents-angular/window';
import { MenuComponent } from 'smart-webcomponents-angular/menu';
import { DateTimePickerComponent, DateTimePicker } from 'smart-webcomponents-angular/datetimepicker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
    @ViewChild('dropdownlist2', { read: DropDownListComponent, static: false }) dropdownlist2!: DropDownListComponent;
    @ViewChild('dropDownList3', { read: DropDownListComponent, static: false }) dropDownList3: DropDownListComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
    @ViewChild('grid2', { read: GridComponent, static: false }) grid2: GridComponent;
    @ViewChild('menu', { read: MenuComponent, static: false }) menu2: MenuComponent;
    @ViewChild('dialog', { read: WindowComponent, static: false }) dialog: WindowComponent;
    @ViewChild('dialog2', { read: WindowComponent, static: false }) dialog2: WindowComponent;
    @ViewChild('dialog3', { read: WindowComponent, static: false }) dialog3: WindowComponent;
    @ViewChild('dialog4', { read: WindowComponent, static: false }) dialog4: WindowComponent;
    @ViewChild('dialog5', { read: WindowComponent, static: false }) dialog5: WindowComponent;
    @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;
    @ViewChild('buttonCollapse', { read: ButtonComponent, static: false }) buttonCollapse: ButtonComponent;
    @ViewChild('buttonExpand', { read: ButtonComponent, static: false }) buttonExpand: ButtonComponent;
    @ViewChild('buttonChart', { read: ButtonComponent, static: false }) buttonChart: ButtonComponent;
    @ViewChild('buttonGrid', { read: ButtonComponent, static: false }) buttonGrid: ButtonComponent;
    @ViewChild('gridContainer', { read: ElementRef, static: false }) gridContainer: ElementRef;
    @ViewChild('chartContainer', { read: ElementRef, static: false }) chartContainer: ElementRef;

    private sampleChartData: Array<object> = [
        { month: 'Jan', supplies: 30, current: 0 },
        { month: 'Feb', supplies: 25, current: 25 },
        { month: 'Mar', supplies: 30, current: 0 },
        { month: 'Apr', supplies: 50, current: 45 },
        { month: 'May', supplies: 0, current: 20 },
        { month: 'Jun', supplies: 30, current: 0 },
        { month: 'July', supplies: 60, current: 45 }
    ];

    private contextMenuOpenedOn: {
        grid: any,
        rowId: any

    } = {
            grid: null,
            rowId: null
        };

    private date: Date = new Date();

    private localData: Array<object> = [
        {
            'title': 'Fix mdm encryption cert (1)',
            'author': 'Nancy',
            'buildNum': 10314,
            'status': 'in-progress',
            'branch': 'master',
            'date': new Date()
        },
        {
            'title': 'Add mc cert - use rotatable secret for every iteration (1)',
            'author': 'Andrew',
            'buildNum': 10411,
            'status': 'testing',
            'branch': 'develop',
            'date': this.date
        },
        {
            'title': 'Cleanup auth handlers. Use handlers from the service (1)',
            'author': 'Laura',
            'buildNum': 10410,
            'status': 'done',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 2 * 86400000 + 3600000 + 600000 + 10000)
        },
        {
            'title': 'Make kusto and admin app optional (1)',
            'author': 'Anne',
            'buildNum': 10409,
            'status': 'warning',
            'branch': 'feature/2-factor-auth',
            'date': new Date(this.date.getTime() - 4 * 86400000 + 3600000 + 700000 + 20000)
        },
        {
            'title': '[Streaming][Bug] Closing stream before injecting (1)',
            'author': 'Nancy',
            'buildNum': 10408,
            'status': 'done',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 5 * 86400000 + 3600000 + 900000 + 40000)
        },
        {
            'title': 'Fix deployment arm param (1)',
            'author': 'Andrew',
            'buildNum': 10407,
            'status': 'done',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 6 * 86400000 + 3600000 + 200000 + 20000)
        },
        {
            'title': '[Streaming] Handling oversized payload by finder (1)',
            'author': 'Andrew',
            'buildNum': 10406,
            'status': 'done',
            'branch': 'feature/some-feature',
            'date': new Date(this.date.getTime() - 7 * 86400000 + 3600000 + 300000 + 40000)
        },
        {
            'title': 'Fixing RDP bug (1)',
            'author': 'Andrew',
            'buildNum': 10405,
            'status': 'error',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 9 * 86400000 + 3600000 + 100000 + 10000)
        },
        {
            'title': 'Fix KV URL resolution (1)',
            'author': 'Laura',
            'buildNum': 10404,
            'status': 'done',
            'branch': 'hotfix/view-perf',
            'date': new Date(this.date.getTime() - 10 * 86400000 + 3600000 + 200000 + 20000)
        },
        {
            'title': 'Fix debug console output when running unit tests (1)',
            'author': 'Anne',
            'buildNum': 10403,
            'status': 'done',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 19 * 86400000)
        },
        {
            'title': 'Fix mdn encryption cert (1)',
            'author': 'Nancy',
            'buildNum': 10402,
            'status': 'in-progress',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 25 * 86400000)
        },
        {
            'title': 'KV URL resolution implementation (1)',
            'author': 'Andrew',
            'buildNum': 10401,
            'status': 'error',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 30 * 86400000)
        },
        {
            'title': 'RDP implementation (1)',
            'author': 'Laura',
            'buildNum': 10400,
            'status': 'warning',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 37 * 86400000)
        },
        {
            'title': 'RDP implementation (1)',
            'author': 'Laura',
            'buildNum': 10399,
            'status': 'testing',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 40 * 86400000)
        },
        {
            'title': '[Streaming][Bug] Stream bugfixes (1)',
            'author': 'Nancy',
            'buildNum': 10398,
            'status': 'done',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 50 * 86400000)
        },
        {
            'title': 'Fix mdm encryption cert',
            'author': 'Nancy',
            'buildNum': 10397,
            'status': 'in-progress',
            'branch': 'master',
            'date': this.date
        },
        {
            'title': 'Add mc cert - use rotatable secret for every iteration',
            'author': 'Andrew',
            'buildNum': 10396,
            'status': 'testing',
            'branch': 'develop',
            'date': this.date
        },
        {
            'title': 'Cleanup auth handlers. Use handlers from the service',
            'author': 'Laura',
            'buildNum': 10395,
            'status': 'done',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 2 * 86400000 + 3600000 + 600000 + 10000)
        },
        {
            'title': 'Make kusto and admin app optional',
            'author': 'Anne',
            'buildNum': 10394,
            'status': 'warning',
            'branch': 'feature/2-factor-auth',
            'date': new Date(this.date.getTime() - 4 * 86400000 + 3600000 + 700000 + 20000)
        },
        {
            'title': '[Streaming][Bug] Closing stream before injecting',
            'author': 'Nancy',
            'buildNum': 10392,
            'status': 'done',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 5 * 86400000 + 3600000 + 900000 + 40000)
        },
        {
            'title': 'Fix deployment arm param',
            'author': 'Andrew',
            'buildNum': 10391,
            'status': 'done',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 6 * 86400000 + 3600000 + 200000 + 20000)
        },
        {
            'title': '[Streaming] Handling oversized payload by finder',
            'author': 'Andrew',
            'buildNum': 10390,
            'status': 'done',
            'branch': 'feature/some-feature',
            'date': new Date(this.date.getTime() - 7 * 86400000 + 3600000 + 300000 + 40000)
        },
        {
            'title': 'Fixing RDP bug',
            'author': 'Andrew',
            'buildNum': 10389,
            'status': 'error',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 9 * 86400000 + 3600000 + 100000 + 10000)
        },
        {
            'title': 'Fix KV URL resolution',
            'author': 'Laura',
            'buildNum': 10388,
            'status': 'done',
            'branch': 'hotfix/view-perf',
            'date': new Date(this.date.getTime() - 10 * 86400000 + 3600000 + 200000 + 20000)
        },
        {
            'title': 'Fix debug console output when running unit tests',
            'author': 'Anne',
            'buildNum': 10387,
            'status': 'done',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 19 * 86400000)
        },
        {
            'title': 'Fix mdn encryption cert',
            'author': 'Nancy',
            'buildNum': 10386,
            'status': 'in-progress',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 25 * 86400000)
        },
        {
            'title': 'KV URL resolution implementation',
            'author': 'Andrew',
            'buildNum': 10385,
            'status': 'error',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 30 * 86400000)
        },
        {
            'title': 'RDP implementation',
            'author': 'Laura',
            'buildNum': 10384,
            'status': 'warning',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 37 * 86400000)
        },
        {
            'title': 'RDP implementation',
            'author': 'Laura',
            'buildNum': 10383,
            'status': 'testing',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 40 * 86400000)
        },
        {
            'title': '[Streaming][Bug] Stream bugfixes',
            'author': 'Nancy',
            'buildNum': 10382,
            'status': 'done',
            'branch': 'master',
            'date': new Date(this.date.getTime() - 50 * 86400000)
        }
    ];

    caption: string = 'Supplies';

    description: string = '';

    showLegend: boolean = true;

    padding: object = { left: 5, top: 30, right: 5, bottom: 5 };

    titlePadding: object = { left: 90, top: 0, right: 0, bottom: 30 };

    borderLineWidth: number = 0;

    dataSource: Array<object> = this.sampleChartData;

    xAxis: object = {
        dataField: 'month',
        unitInterval: 1,
        axisSize: 'auto',
        tickMarks: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        },
        gridLines: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        }
    };

    valueAxis: object = {
        unitInterval: 10,
        minValue: 0,
        maxValue: 120,
        tickMarks: { color: '#BCBCBC' }
    };

    colorScheme: string = 'scheme29';

    seriesGroups: Array<object> = [
        {
            type: 'stackedcolumn',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            series: [
                { dataField: 'supplies', displayText: 'Supplies purchases' },
                { dataField: 'current', displayText: 'Current orders' }
            ]
        }
    ];

    appearance: object = {
        showRowHeaderNumber: true
    };

    filtering: object = {
        enabled: true
    };

    paging: object = {
        enabled: true,
        pageSize: 15,
        pageIndex: 0
    };

    pager: object = {
        visible: true
    };

    gridDataSource: DataAdapter = new Smart.DataAdapter({
        dataSource: this.localData,
        dataFields: [
            'author: string',
            'title: string',
            'buildNum: string',
            'status: string',
            'branch: string',
            'date: date'
        ]
    });

    columns: Array<object> = [
        {
            label: 'Edit', dataField: 'edit', width: '3%',
            formatFunction(settings: any): void {
                settings.template = '<span class="material-icons">edit</span>';
            }
        },
        {
            label: 'Menu', dataField: 'menu', width: '3%',
            formatFunction(settings: any): void {
                settings.template = '<i class="material-icons">more_horiz</i>';
            }
        },
        { label: 'Author', dataField: 'author', width: '10%' },
        { label: 'Title', dataField: 'title', width: '25%' },
        { label: 'Status', dataField: 'status', width: '10%' },
        { label: 'Build', dataField: 'buildNum', width: '10%' },
        { label: 'Branch', dataField: 'branch', width: '15%' },
        { label: 'Date', dataField: 'date', cellsFormat: 'dd/MM/yyyy' }
    ];


    grid2DataSource: DataAdapter = new Smart.DataAdapter({
        dataSource: this.localData,
        dataFields: [
            'author: string',
            'title: string',
            'buildNum: string',
            'status: string',
            'branch: string',
            'date: date'
        ]
    });

    grid2Columns: Array<object> = [
        {
            label: 'Edit', dataField: 'edit', width: '3%',
            formatFunction(settings: any): void {
                settings.template = '<span class="material-icons">edit</span>';
            }
        },
        {
            label: 'Menu', dataField: 'menu', width: '3%',
            formatFunction(settings: any): void {
                settings.template = '<i class="material-icons">more_horiz</i>';
            }
        },
        { label: 'Author', dataField: 'author', width: '10%' },
        { label: 'Title', dataField: 'title', width: '25%' },
        { label: 'Status', dataField: 'status', width: '10%' },
        { label: 'Build', dataField: 'buildNum', width: '10%' },
        { label: 'Branch', dataField: 'branch', width: '15%' },
        { label: 'Date', dataField: 'date', cellsFormat: 'dd/MM/yyyy' }
    ]

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    onCellClick(e: CustomEvent): void {
        const that = this;

        if (e.detail.cell.column.label === 'Edit') {
            const supplier = e.detail.cell.row.data.author;
            const iframe = document.createElement('iframe');

            iframe.style.border = 'none';
            iframe.src = "./../../../src/page-templates/dashboard-task/edit-row.html?supplier=' + supplier";

            const window: Window = document.createElement('smart-dialog-window') as Window;

            window.label = "Edit " + supplier;
            window.appendChild(iframe);
            window.style.width = '520px';
            window.style.height = '600px;';

            document.body.appendChild(window);

            window.opened = true;

            window.addEventListener('cancel', function () {
                window.opened = false;
            });

            window.addEventListener('confirm', function () {
                window.opened = false;
            });
        }
        else if (e.detail.cell.column.label === 'Menu') {
            that.openContextMenu(e.detail);
        }
    }

    filterGrid(grid: GridComponent, window: WindowComponent) {
        const from = (<DateTimePicker>window.nativeElement.querySelector('#fromDate')).value;
        const to = (<DateTimePicker>window.nativeElement.querySelector('#toDate')).value;
        const supplier = (<DropDownList>window.nativeElement.querySelector('#supplier')).selectedValues[0];

        window.close();

        setTimeout(function () {
            grid.addFilter('date', '>= ' + from.toString('d') + ' and <= ' + to.toString('d'));
            if (supplier) {
                grid.addFilter('author', 'contains ' + supplier);
            }
        }, 100);
    }

    openFilterWindow(): void {
        const that = this;
        const activeButton = document.querySelector('.subtitles-holder .active');

        if (activeButton.id === 'supplies') {
            that.dialog3.open();
        }
        else if (activeButton.id === 'current') {
            that.dialog4.open();
        }
    }

    clearContextMenuInfo(): void {
        const that = this;

        that.contextMenuOpenedOn.grid = null;
        that.contextMenuOpenedOn.rowId = null;
    }

    getActiveGrid(): GridComponent {
        const that = this;
        const activeButton = document.querySelector('.subtitles-holder .active');

        let activeGrid;
        if (activeButton.id === 'supplies') {
            activeGrid = that.grid;
        }
        else if (activeButton.id === 'current') {
            activeGrid = that.grid2;
        }
        return activeGrid;
    }

    addNewRowToGrid(window: WindowComponent): void {
        const that = this;
        const addNewRowWindow = that.dialog5;
        const supplier = (<DropDownList>addNewRowWindow.nativeElement.querySelector('#supplier')).selectedValues[0];
        const date = (<DateTimePicker>addNewRowWindow.nativeElement.querySelector('#date')).value;
        const newRow = new Smart.Grid.Row({
            data: {
                author: supplier,
                title: 'New record',
                buildNum: 11111,
                status: 'in-progress',
                branch: 'master',
                date: date.toString('d')
            }
        });
        const activeGrid = that.getActiveGrid();

        activeGrid.rows.push(newRow);
        addNewRowWindow.close();
    }

    editGridRow(window: WindowComponent): void {
        const that = this;
        const date = (<DateTimePicker>window.nativeElement.querySelector('#date')).value;
        const editedRow = that.contextMenuOpenedOn.grid.rows.find((row: GridRow) => row.id === that.contextMenuOpenedOn.rowId);
        editedRow.data.date = date;
    }

    deleteGridRow(): void {
        const that = this;
        that.contextMenuOpenedOn.grid.deleteRow(that.contextMenuOpenedOn.rowId);
    }

    openContextMenu(event: any): void {
        const that = this;

        setTimeout(() => {
            that.contextMenuOpenedOn.grid = event.cell.grid;
            that.contextMenuOpenedOn.rowId = event.cell.row.id;
            that.menu.open(event.originalEvent.clientX, event.originalEvent.clientY);
        }, 300);
    }

    attachGridsEvents() {
        const that = this;

        that.grid.addEventListener('cellClick', that.onCellClick);
        that.grid2.addEventListener('cellClick', that.onCellClick);
    }

    attachContextMenuEvents(): void {
        const that = this;

        that.menu.addEventListener('itemClick', (e: CustomEvent): void => {
            const supplier = that.contextMenuOpenedOn.grid.rows.find((row: GridRow) => row.id === that.contextMenuOpenedOn.rowId).data['author'];
            const date = that.contextMenuOpenedOn.grid.rows.find((row: GridRow) => row.id === that.contextMenuOpenedOn.rowId).data['date'];
            if (e.detail.value === 'edit') {
                const editRowWindow = that.dialog;

                editRowWindow.nativeElement.querySelector('#supplier').innerHTML = supplier;
                (<DateTimePicker>editRowWindow.nativeElement.querySelector('#date')).value = date;
                editRowWindow.open();
            }
            else {
                const confirmDeleteWindow: WindowComponent = that.dialog2;

                confirmDeleteWindow.nativeElement.querySelector('#supplier').innerHTML = supplier;
                (<DateTimePicker>confirmDeleteWindow.nativeElement.querySelector('#date')).value = date;
                confirmDeleteWindow.open();
            }
        });
    }

    attachSplitterEvents(): void {
        const that = this;
        const dashboard = that.splitter;

        that.buttonExpand.addEventListener('click', () => {
            dashboard.update(0, { size: 240 });
            dashboard.nativeElement.setAttribute('expanded', '');
            (<HTMLImageElement>document.querySelector('.company-logo-holder img')).style.display = 'block';

            let menuTitles: NodeList = document.querySelectorAll('.menu-title') as NodeList;

            for (let i = 0; i < menuTitles.length; i++) {
                (<HTMLSpanElement>menuTitles[i]).style.display = 'block';
            }
        });

        that.buttonCollapse.addEventListener('click', () => {
            dashboard.update(0, { size: 70 });
            dashboard.nativeElement.removeAttribute('expanded');
            (<HTMLImageElement>document.querySelector('.company-logo-holder img')).style.display = 'none';

            let menuTitles = document.querySelectorAll('.menu-title');

            for (let i = 0; i < menuTitles.length; i++) {
                (<HTMLSpanElement>menuTitles[i]).style.display = 'none';
            }
        });
    }

    attachMenuEvents(): void {
        const that = this;
        const chartButton = that.buttonChart;
        const gridButton = that.buttonGrid;

        chartButton.addEventListener('click', () => {
            gridButton.nativeElement.classList.remove('bold');
            chartButton.nativeElement.classList.add('bold');
            chartButton.nativeElement.removeAttribute('focus');
            that.chartContainer.nativeElement.style.display = 'block';
            that.gridContainer.nativeElement.style.display = 'none';
        });
        gridButton.addEventListener('click', () => {
            chartButton.nativeElement.classList.remove('bold');
            gridButton.nativeElement.classList.add('bold');
            gridButton.nativeElement.removeAttribute('focus');

            const gridContainer: HTMLDivElement = that.gridContainer.nativeElement;

            if (gridContainer.style.display === 'none') {
                that.chartContainer.nativeElement.style.display = 'none';
                gridContainer.style.display = 'block';
                that.grid.nativeElement.style.display = 'none';
                that.grid2.nativeElement.style.display = 'none';
                that.openFilterWindow();
            }
        });
    }

    attachWindowsEvents(): void {
        const that = this;
        const suppliesPurchasesFilterWindow = that.dialog3;
        const suppliesPurchasesGrid = that.grid;

        suppliesPurchasesFilterWindow.addEventListener('confirm', () => {
            suppliesPurchasesGrid.nativeElement.style.display = 'block';
            that.filterGrid(suppliesPurchasesGrid, suppliesPurchasesFilterWindow);
        });
        suppliesPurchasesFilterWindow.addEventListener('cancel', () => {
            suppliesPurchasesGrid.nativeElement.style.display = 'block';
            suppliesPurchasesFilterWindow.close();
        });
        suppliesPurchasesFilterWindow.addEventListener('close', () => {
            suppliesPurchasesGrid.nativeElement.style.display = 'block';
            suppliesPurchasesFilterWindow.close();
        });

        const currentOrdersFilterWindow = that.dialog4;
        const currentOrdersGrid = that.grid2;

        currentOrdersFilterWindow.addEventListener('confirm', () => that.filterGrid(currentOrdersGrid, currentOrdersFilterWindow));
        currentOrdersFilterWindow.addEventListener('cancel', () => currentOrdersFilterWindow.close());

        const addNewRowWindow = that.dialog5;

        addNewRowWindow.addEventListener('confirm', () => that.addNewRowToGrid(addNewRowWindow));
        addNewRowWindow.addEventListener('cancel', () => addNewRowWindow.close());

        const editRowWindow = that.dialog;

        editRowWindow.addEventListener('confirm', () => {
            that.editGridRow(editRowWindow);
            editRowWindow.close();
        });

        editRowWindow.addEventListener('cancel', () => {
            that.clearContextMenuInfo();
            editRowWindow.close();
        });

        const confirmDeleteWindow = that.dialog2;

        confirmDeleteWindow.addEventListener('confirm', () => {
            that.deleteGridRow();
            that.clearContextMenuInfo();
            confirmDeleteWindow.close();
        });

        confirmDeleteWindow.addEventListener('cancel', () => {
            that.clearContextMenuInfo();
            confirmDeleteWindow.close();
        });
    }

    attachGridContainerEvents(): void {
        const that = this;
        const suppliesPurchasesButton = that.gridContainer.nativeElement.querySelector('#supplies') as Button;
        const currentOrdersButton = that.gridContainer.nativeElement.querySelector('#current') as Button;

        suppliesPurchasesButton.addEventListener('click', () => {
            currentOrdersButton.classList.remove('active');
            suppliesPurchasesButton.classList.add('active');
            document.getElementById('suppliesPurchasesGrid').style.display = 'block';
            document.getElementById('currentOrdersGrid').style.display = 'none';
        });

        currentOrdersButton.addEventListener('click', () => {
            suppliesPurchasesButton.classList.remove('active');
            currentOrdersButton.classList.add('active');
            document.getElementById('currentOrdersGrid').style.display = 'block';
            document.getElementById('suppliesPurchasesGrid').style.display = 'none';
        });

        const filterButton: Button = document.querySelector('#gridContainer #filterButton') as Button;

        filterButton.addEventListener('click', that.openFilterWindow.bind(that));

        const newRowButton = document.querySelector('#gridContainer #newRowButton');

        newRowButton.addEventListener('click', () => that.dialog5.open());
    }

    init(): void {
        // init code.
        const that = this;

        const dropDownsSource = that.localData.map((item: any): string => item.author);

        that.dropDownList.dataSource = dropDownsSource;
        that.dropDownList2.dataSource = dropDownsSource;
        that.dropDownList3.dataSource = dropDownsSource;

        that.attachGridsEvents();
        that.attachContextMenuEvents();
        that.attachSplitterEvents();
        that.attachMenuEvents();
        that.attachWindowsEvents();
        that.attachGridContainerEvents();

        document.body.classList.add('app');
        document.body.style.visibility = '';
    };
}