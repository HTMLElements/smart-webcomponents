import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ButtonComponent, Smart } from 'smart-webcomponents-angular/button';
import { CardComponent } from 'smart-webcomponents-angular/card';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';
import { GridComponent, DataAdapter } from 'smart-webcomponents-angular/grid';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('buttonExpand', { read: ButtonComponent, static: false }) buttonExpand: ButtonComponent;
    @ViewChild('buttonCollapse', { read: ButtonComponent, static: false }) buttonCollapse: ButtonComponent;
    @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;
    @ViewChild('logo', { read: ElementRef, static: false }) logo: ElementRef;

    private opportunitiesData = [
        { contact: 'Shelley Burke', amount: 150000, status: 'Inactive', closeDate: new Date(2020, 1, 20) },
        { contact: 'Guylene Nodier', amount: 55000, status: 'Won', closeDate: new Date(2020, 0, 29) },
        { contact: 'Yoshi Winkler', amount: 200000, status: 'Active', closeDate: new Date(2020, 0, 18) },
        { contact: 'Peter Murphy', amount: 400000, status: 'Active', closeDate: new Date(2020, 0, 16) },
        { contact: 'Martin Vileid', amount: 150000, status: 'Won', closeDate: new Date(2020, 0, 16) },
        { contact: 'Nancy Peterson', amount: 200000, status: 'Lost', closeDate: new Date(2020, 0, 3) },
        { contact: 'Yoshi Nagase', amount: 60000, status: 'Won', closeDate: new Date(2019, 11, 19) },
        { contact: 'Andrew Winkler', amount: 56000, status: 'Won', closeDate: new Date(2019, 10, 14) },
        { contact: 'Nancy Bjorn', amount: 190000, status: 'Won', closeDate: new Date(2019, 9, 30) },
        { contact: 'Elio Saylor', amount: 32000, status: 'Won', closeDate: new Date(2019, 9, 16) }
    ];

    private activeTasksData = [
        { employee: 'Jane Smith', title: 'Introduction and product description', opportunity: 'Tesla Partnership', dueDate: new Date(2020, 0, 31) },
        { employee: 'John Doe', title: 'Discuss product advantages', opportunity: 'Oracle New Deal', dueDate: new Date(2020, 9, 30) },
        { employee: 'John Doe', title: 'Reminder call', opportunity: 'Microsoft Renewal Offer', dueDate: new Date(2020, 0, 25) },
        { employee: 'John Doe', title: 'Introduction call', opportunity: 'Oracle New Deal', dueDate: new Date(2020, 0, 23) },
        { employee: 'John Doe', title: 'Happy New Year Mail', opportunity: 'Microsoft Renewal Offer', dueDate: new Date(2020, 0, 7) }
    ];

    private customerLifeTimeData = [
        { company: "Amazon", value: 40000 },
        { company: "Apple", value: 120000 },
        { company: "Google", value: 220000 },
        { company: "Microsoft", value: 400000 },
        { company: "Oracle", value: 180000 },
        { company: "Tesla", value: 400000 },
        { company: "Twitter", value: 200000 },
        { company: "Yahoo", value: 180000 }
    ];

    private revenueData = [
        { month: "September", value: 200000 },
        { month: "October", value: 220000 },
        { month: "November", value: 50000 },
        { month: "December", value: 50000 },
        { month: "2019", value: 200000 }
    ];

    private revenueByEmployeeData = [
        { name: "John Doe", value: 1100000 },
        { name: "Jane Smith", value: 600000 }
    ];

    description: string = '';

    padding: object = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: object = { left: 90, top: 0, right: 0, bottom: 10 };

    backgroundColor: string = '#5D727B';

    showBorderLine: boolean = false;

    showLegend: boolean = false;

    chart1Caption: string = 'Customer life time value';

    chart1DataSource: Array<object> = this.customerLifeTimeData;

    chart1XAxis: object = {
        dataField: 'company',
        gridLines: {
            visible: false
        }
    };

    chart1SeriesGroups: Array<object> = [
        {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            valueAxis: {
                minValue: 0,
                maxValue: 400000,
                unitInterval: 200000,
                displayValueAxis: true,
                axisSize: 'auto',
                tickMarksColor: '#888888'
            },
            series: [
                {
                    dataField: 'value',
                    colorFunction: function (value: any, itemIndex: number, serie: any, group: any): string {
                        switch (itemIndex) {
                            case 0:
                                return '#489CC8';
                            case 1:
                                return '#69D5C8';
                            case 2:
                                return '#FF6D41';
                            case 3:
                                return '#CA6992';
                            case 4:
                                return '#E6C54F';
                            case 5:
                                return '#F9777F';
                            case 6:
                                return '#5DBF74';
                            case 7:
                                return '#4DB9F2';
                        }
                    }
                }
            ]
        }
    ];

    chart2Caption: string = 'Revenue';

    chart2DataSource: Array<object> = this.revenueData;

    chart2XAxis: object = {
        dataField: 'month'
    };

    chart2SeriesGroups: Array<object> = [
        {
            type: 'splinearea',
            valueAxis: {
                minValue: 0,
                maxValue: 210000,
                unitInterval: 100000,
                displayValueAxis: true,
                axisSize: 'auto',
                tickMarksColor: '#888888'
            },
            series: [
                {
                    dataField: 'value'
                }
            ]
        }
    ];

    chart3Caption: string = 'Revenue by employee';

    chart3DataSource: Array<object> = this.revenueByEmployeeData;

    chart3XAxis: object = {
        dataField: 'name'
    };

    chart3SeriesGroups: Array<object> = [
        {
            type: 'column',
            orientation: 'horizontal',
            columnsGapPercent: 10,
            seriesGapPercent: 0,
            valueAxis: {
                minValue: 0,
                maxValue: 1100000,
                unitInterval: 200000,
                displayValueAxis: true,
                flip: true,
                axisSize: 'auto',
                tickMarksColor: '#888888'
            },
            series: [
                {
                    dataField: 'value',
                    colorFunction: function (value: any, itemIndex: number, serie: any, group: any): string {
                        switch (itemIndex) {
                            case 0:
                                return '#489CC8';
                            case 1:
                                return '#69D5C8';
                            case 2:
                                return '#FF6D41';
                            case 3:
                                return '#CA6992';
                            case 4:
                                return '#E6C54F';
                            case 5:
                                return '#F9777F';
                            case 6:
                                return '#5DBF74';
                            case 7:
                                return '#4DB9F2';
                        }
                    }
                }
            ]
        }
    ];

    selection: object = {
        enabled: true,
        allowRowSelection: true,
        mode: 'one'
    };

    appearance: object = {
        alternationCount: 2
    };

    dataSource: DataAdapter = new Smart.DataAdapter({
        dataSource: this.opportunitiesData,
        dataFields: [
            'contact: string',
            'amount: number',
            'status: string',
            'closeDate: date'
        ]
    });

    columns: Array<object> = [
        { label: 'Contact', dataField: 'contact' },
        {
            label: 'Amount', dataField: 'amount', cellsFormat: 'c2',
            formatFunction(settings: any): void {
                settings.value = '$' + new Number(settings.value).toFixed(2);
            }
        },
        { label: 'Status', dataField: 'status' },
        { label: 'Close Date', dataField: 'closeDate', cellsFormat: 'MMM d, yyyy' }
    ];

    grid2DataSource: DataAdapter = new window.Smart.DataAdapter({
        dataSource: this.activeTasksData,
        dataFields: [
            'employee: string',
            'title: string',
            'opportunity: string',
            'dueDate: date'
        ]
    });

    grid2Columns: Array<object> = [
        { label: 'Employee', dataField: 'employee' },
        { label: 'Title', dataField: 'title' },
        { label: 'Opportunity', dataField: 'opportunity' },
        { label: 'Due Date', dataField: 'dueDate', cellsFormat: 'MMM d, yyyy' }
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
        const dashboard: SplitterComponent = that.splitter;
        const logo: HTMLImageElement = that.logo.nativeElement;

        function collapseLeftMenu(): void {
            dashboard.update(0, { size: 50 });
            dashboard.nativeElement.removeAttribute('expanded');
            logo.style.display = 'none';
        }

        function expandLeftMenu(): void {
            dashboard.update(0, { size: 240 });
            dashboard.nativeElement.setAttribute('expanded', '');
            logo.style.display = 'inline';
        }

        function collapseMenuInSmallScreens() {
            if (document.documentElement.offsetWidth && document.documentElement.offsetWidth <= 860) {
                collapseLeftMenu();
            }
            else {
                expandLeftMenu();
            }
        }

        that.buttonExpand.addEventListener('click', (): void => {
            expandLeftMenu();
        });

        that.buttonCollapse.addEventListener('click', (): void => {
            collapseLeftMenu();
        });

        window.onresize = function (): void {
            collapseMenuInSmallScreens();
        };

        collapseMenuInSmallScreens();
    };
}