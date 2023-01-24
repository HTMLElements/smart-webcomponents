import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonComponent, Smart } from 'smart-webcomponents-angular/button';
import { CardComponent } from 'smart-webcomponents-angular/card';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { GridComponent, DataAdapter } from 'smart-webcomponents-angular/grid';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('chart2', { read: ChartComponent, static: false }) chart2: ChartComponent;
    @ViewChild('chart3', { read: ChartComponent, static: false }) chart3: ChartComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
    @ViewChild('grid2', { read: GridComponent, static: false }) grid2: GridComponent;
    @ViewChild('grid3', { read: GridComponent, static: false }) grid3: GridComponent;
    @ViewChild('grid4', { read: GridComponent, static: false }) grid4: GridComponent;
    @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;
    @ViewChild('logo', { read: ElementRef, static: false }) logo: ElementRef;

    // Monthly Sales - Chart
    private sampleDataSales: Array<object> = [
        { Month: 'Jan', value: 10 },
        { Month: 'Feb', value: 15 },
        { Month: 'Mar', value: 8 },
        { Month: 'Apr', value: 12 },
        { Month: 'May', value: 16 },
        { Month: 'Jun', value: 20 },
        { Month: 'Jul', value: 16 },
        { Month: 'Aug', value: 22 },
        { Month: 'Sep', value: 27 },
        { Month: 'Oct', value: 24 },
        { Month: 'Nov', value: 25 },
        { Month: 'Dec', value: 30 },
    ];

    // Email Subscriptions - Chart
    private sampleDataSubscriptions: Array<object> = [
        { Day: 'Mon', value: 30 },
        { Day: 'Tue', value: 17 },
        { Day: 'Wed', value: 64 },
        { Day: 'Thu', value: 88 },
        { Day: 'Fri', value: 20 },
        { Day: 'Sat', value: 15 },
        { Day: 'Sun', value: 66 },
    ];

    // Completed Tasks - Chart
    private sampleDataTasks: Array<object> = [
        { Time: '12am', value: 200 },
        { Time: '3pm', value: 600 },
        { Time: '6pm', value: 720 },
        { Time: '9pm', value: 480 },
        { Time: '12pm', value: 360 },
        { Time: '3am', value: 440 },
        { Time: '6am', value: 400 },
        { Time: '9am', value: 320 },
    ];

    // Bugs - Tab & Grid
    private bugsData: Array<object> = [
        {
            id: 0,
            text: 'The https:// version of the website is not working'
        },
        {
            id: 1,
            text: 'Page "/contacts" throws 404 error'
        },
        {
            id: 2,
            text: 'The bulgarian version of the website is still not loading'
        },
        {
            id: 3,
            text: '"Find my location" on page "/nearby" is not working'
        },
        {
            id: 4,
            text: 'Scrollbar is not visible'
        }
    ];

    // Website - Tab & Grid
    private websiteData: Array<object> = [
        {
            id: 0,
            text: 'Update the website design'
        },
        {
            id: 1,
            text: 'Buy ".com" domain'
        },
        {
            id: 2,
            text: 'Make a backup copy'
        },
        {
            id: 3,
            text: 'Change the DNS records'
        },
        {
            id: 4,
            text: 'Improve the performance'
        }
    ];

    // Server - Tab & Grid
    private serverData: Array<object> = [
        {
            id: 0,
            text: 'Disable server cache'
        },
        {
            id: 1,
            text: 'Update the php version to 7.4'
        },
        {
            id: 2,
            text: 'Remove all unused images - Docker'
        },
        {
            id: 3,
            text: 'Replace the old paths'
        },
        {
            id: 3,
            text: 'Prevent sql injection'
        },
    ];

    // Salary - Grid
    private salaryData: Array<object> = [
        {
            id: 1,
            name: 'Michael Ohno',
            salary: '$40,142',
            country: 'France'
        },
        {
            id: 2,
            name: 'Wang Li',
            salary: '$39.223',
            country: 'China'
        },
        {
            id: 3,
            name: 'Petra Vileid',
            salary: '$38.637',
            country: 'France'
        },
        {
            id: 4,
            name: 'Andrew Peterson',
            salary: '$44.985',
            country: 'USA'
        },
        {
            id: 5,
            name: 'Martin Kolev',
            salary: '$37.886',
            country: 'Bulgaria'
        }
    ];

    animationDuration: number = 1200;

    backgroundColor: string = '#55ae59';

    borderLineWidth: number = 0;

    toolTipLineColor: string = '#ccc';

    caption: string = ' ';

    description: string = ' ';

    showLegend: boolean = false;

    padding: object = { left: 10, top: 5, right: 10, bottom: 5 };

    titlePadding: object = { left: 50, top: 0, right: 0, bottom: 10 };

    dataSource: Array<object> = this.sampleDataSales;

    colorScheme: string = 'scheme32';

    xAxis: object = {
        dataField: 'Month',
        tickMarks: {
            visible: true,
            unitInterval: 1,
            color: '#BCBCBC'
        },
        gridLines: {
            visible: true,
            unitInterval: 3,
            color: '#BCBCBC'
        }
    };

    clip: boolean = false;

    valueAxis: object = {
        visible: true,
        title: { text: ' ' },
        tickMarks: { color: '#BCBCBC' },
        unitInterval: 10,
        maxValue: 40
    };

    seriesGroups: Array<object> = [
        {
            type: 'line',
            valueAxis: {
                displayValueAxis: false,
            },
            series: [
                {
                    dataField: 'value',
                    displayText: 'Sales',
                    fillColor: 'white'
                },
            ]
        }
    ];

    chart2AnimationDuration: number = 1000;

    chart2BackgroundColor: string = '#fd9811';

    chart2ColorScheme: string = 'scheme01';

    chart2Padding: object = { left: 5, top: 5, right: 5, bottom: 5 };

    chart2TitlePadding: object = { left: 90, top: 0, right: 0, bottom: 10 };

    chart2DataSource: Array<object> = this.sampleDataSubscriptions;

    chart2XAxis: object = {
        dataField: 'Day',
        gridLines: {
            visible: true
        }
    };

    chart2SeriesGroups: Array<object> = [
        {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            valueAxis: {
                unitInterval: 20,
                minValue: 0,
                maxValue: 100,
                displayValueAxis: false,
                axisSize: 'auto'
            },
            series: [
                {
                    dataField: 'value',
                    displayText: 'Subscriptions',
                    fillColor: 'white'
                },
            ]
        }
    ];

    chart3BackgroundColor: string = '#e9433f';

    chart3DataSource: Array<object> = this.sampleDataTasks;

    chart3XAxis: object = {
        dataField: 'Time',
        tickMarks: {
            visible: true,
            unitInterval: 1,
            color: '#BCBCBC'
        },
        gridLines: {
            visible: true,
            unitInterval: 3,
            color: '#BCBCBC'
        }
    };

    chart3ValueAxis: object = {
        visible: true,
        title: { text: '' },
        tickMarks: { color: '#BCBCBC' },
        unitInterval: 10,
        maxValue: 40
    };

    chart3SeriesGroups: Array<object> = [
        {
            type: 'line',
            valueAxis: {
                displayValueAxis: false,
            },
            series: [
                {
                    dataField: 'value',
                    displayText: 'Sales',
                    fillColor: 'white'
                }
            ]
        }
    ];

    layout: object = {
        rowHeight: 45
    };

    gridDataSource: DataAdapter = new Smart.DataAdapter({
        dataSource: this.bugsData,
        dataFields: [
            'id: number',
            'text: string',
        ]
    });

    selection: object = {
        enabled: true,
        checkBoxes: {
            enabled: true
        }
    };

    columns: Array<object> = [
        {
            label: 'Pending bugs', dataField: 'text'
        }
    ];

    grid2DataSource: DataAdapter = new Smart.DataAdapter({
        dataSource: this.websiteData,
        dataFields: [
            'id: number',
            'text: string',
        ]
    });

    grid2Columns: Array<object> = [
        {
            label: 'Website tasks', dataField: 'text'
        }
    ]

    grid3DataSource: DataAdapter = new Smart.DataAdapter({
        dataSource: this.serverData,
        dataFields: [
            'id: number',
            'text: string',
        ]
    });

    grid3Columns: Array<object> = [
        {
            label: 'Server  tasks', dataField: 'text'
        }
    ];

    sorting: object = {
        enabled: true
    }

    grid4DataSource: DataAdapter = new Smart.DataAdapter({
        dataSource: this.salaryData,
        dataFields: [
            'id: number',
            'name: string',
            'salary: string',
            'country: string'
        ]
    });

    grid4Columns: Array<object> = [
        { label: 'ID', dataField: 'id', cellsAlign: 'center', align: 'center' },
        { label: 'Name', dataField: 'name', cellsAlign: 'center', align: 'center' },
        { label: 'Salary', dataField: 'salary', cellsAlign: 'center', align: 'center' },
        { label: 'Country', dataField: 'country', cellsAlign: 'center', align: 'center' },
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

        const that = this;
        const dashboard: SplitterComponent = that.splitter,
            expandBtn: ButtonComponent = that.button2,
            collapseBtn: ButtonComponent = that.button,
            logo: HTMLImageElement = that.logo.nativeElement;

        function collapseLeftMenu(): void {
            dashboard.update(0, { size: 70 });
            dashboard.nativeElement.removeAttribute('expanded');
            logo.style.display = 'none';
        }

        function expandLeftMenu(): void {
            dashboard.update(0, { size: 240 });
            dashboard.nativeElement.setAttribute('expanded', '');
            logo.style.display = 'inline';
        }

        function collapseMenuInSmallScreens(): void {
            if (document.documentElement.offsetWidth && document.documentElement.offsetWidth <= 860) {
                collapseLeftMenu();
            }
            else {
                expandLeftMenu();
            }
        }

        expandBtn.addEventListener('click', (): void => {
            expandLeftMenu();
        });

        collapseBtn.addEventListener('click', (): void => {
            collapseLeftMenu();
        });


        window.onresize = function () {
            collapseMenuInSmallScreens();
        };

        collapseMenuInSmallScreens();
    }
}