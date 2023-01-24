import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ButtonComponent, Smart } from 'smart-webcomponents-angular/button';
import { GridComponent, DataAdapter } from 'smart-webcomponents-angular/grid';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';
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
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
    @ViewChild('grid2', { read: GridComponent, static: false }) grid2: GridComponent;
    @ViewChild('grid3', { read: GridComponent, static: false }) grid3: GridComponent;
    @ViewChild('grid4', { read: GridComponent, static: false }) grid4: GridComponent;
    @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;
    @ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;
    @ViewChild('logo', { read: ElementRef, static: false }) logo: ElementRef;


    /* Sales value, Total orders, /Progress track/ */
    // Sales value - Chart
    private salesData: Array<object> = [
        { Month: 'Jan', value: 0 },
        { Month: 'Feb', value: 10 },
        { Month: 'Mar', value: 5 },
        { Month: 'Apr', value: 25 },
        { Month: 'May', value: 20 },
        { Month: 'Jun', value: 20 },
        { Month: 'Jul', value: 15 },
        { Month: 'Aug', value: 25 },
        { Month: 'Sep', value: 20 },
        { Month: 'Oct', value: 30 },
        { Month: 'Nov', value: 25 },
        { Month: 'Dec', value: 30 },
    ];

    // Total orders - Chart
    private ordersData: Array<object> = [
        { Day: 'Mon', value: 30 },
        { Day: 'Tue', value: 17 },
        { Day: 'Wed', value: 64 },
        { Day: 'Thu', value: 88 },
        { Day: 'Fri', value: 20 },
        { Day: 'Sat', value: 15 },
        { Day: 'Sun', value: 36 },
    ];

    /* Page visits, Real Time */
    // Page visits - Grid
    private pageVisitsData: Array<object> = [
        {
            project: 'Design System',
            budget: '$2500 USD',
            status: 'pending',
            users: '',
            completion: '60',
            action: '',
        },
        {
            project: 'Angular Now UI Kit PRO',
            budget: '$1800 USD',
            status: 'completed',
            users: '',
            completion: '100',
            action: '',
        },
        {
            project: 'Black Dashboard',
            budget: '$3150 USD',
            status: 'delayed',
            users: '',
            completion: '72',
            action: '',
        },
        {
            project: 'React Material Dashboard',
            budget: '$4400 USD',
            status: 'on schedule',
            users: '',
            completion: '90',
            action: '',
        },
        {
            project: 'Vue Paper UI Kit PRO',
            budget: '$2200 USD',
            status: 'completed',
            users: '',
            completion: '100',
            action: '',
        },
        {
            project: 'Design System',
            budget: '$2500 USD',
            status: 'pending',
            users: '',
            completion: '60',
            action: '',
        }
    ];

    // Real time - Grid
    private realTimeData: Array<object> = [
        {
            flag: 'https://www.htmlelements.com/demos/grid/live-update-countries/flags/us.svg',
            country: 'United States',
            visits: '4800',
            bounce: '42%',
        },
        {
            flag: 'https://www.htmlelements.com/demos/grid/live-update-countries/flags/de.svg',
            country: 'Germany',
            visits: '3000',
            bounce: '37%',
        },
        {
            flag: 'https://www.htmlelements.com/demos/grid/live-update-countries/flags/ru.svg',
            country: 'Russia',
            visits: '2600',
            bounce: '25%',
        },
    ];

    /* Team members, To do list, /Progress track/ */
    // Team members - Grid
    private teamMembersData: Array<object> = [
        {
            name: 'John Michael',
            status: 'Online',
            image: 'https://cdn.pixabay.com/photo/2017/09/21/07/47/girl-2771001_960_720.jpg',
            action: 'Add',
        },
        {
            name: 'Alex Smith',
            status: 'In a meeting',
            image: 'https://cdn.pixabay.com/photo/2019/06/04/20/00/man-4252192_960_720.jpg',
            action: 'Add',
        },
        {
            name: 'Samantha Ivy',
            status: 'Offline',
            image: 'https://cdn.pixabay.com/photo/2017/06/02/14/11/girl-2366438_960_720.jpg',
            action: 'Add',
        },
        {
            name: 'Jessica Forrester',
            status: 'Online',
            image: 'https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg',
            action: 'Add',
        },
    ];

    // Тodo-list-grid
    private todoListData: Array<object> = [
        {
            color: '#2dce89',
            title: 'Call with Dave',
            time: 'Today, 10:30 AM',
            done: true,
        },
        {
            color: '#fb6340',
            title: 'Lunch meeting',
            time: 'Mon 28 Oct, 12:30 AM',
            done: false,
        },
        {
            color: '#11cdef',
            title: 'Marketing Lunch meeting',
            time: 'Mon 28 Oct, 13:30 AM',
            done: false,
        },
        {
            color: '#f5365c',
            title: 'Winter Hackaton',
            time: '20 Dec, 09:00 AM',
            done: false,
        },
    ];

    animationDuration: number = 1200;

    backgroundColor: string = 'white';

    borderLineWidth: number = 0;

    toolTipLineColor: string = '#ccc';

    caption: string = ' ';

    description: string = ' ';

    showLegend: boolean = false;

    padding: object = { left: 10, top: 5, right: 10, bottom: 5 };

    titlePadding: object = { left: 50, top: 0, right: 0, bottom: 10 };

    dataSource: Array<object> = this.salesData;

    colorScheme: string = 'scheme32';

    xAxis: object = {
        line: {
            color: 'white'
        },
        dataField: 'Month',
        tickMarks: {
            visible: false,
        },
        gridLines: {
            visible: false,
            unitInterval: 3,
            color: '#BCBCBC'
        }
    };

    clip: boolean = false;

    valueAxis: object = {
        visible: true,
        title: { text: ' ' },
        unitInterval: 10,
        maxValue: 40,
    };

    seriesGroups: Array<object> = [
        {
            type: 'spline',
            valueAxis: {
                displayValueAxis: false,
                tickMarksColor: 'white',
                line: {
                    color: 'white'
                },
            },
            series: [
                {
                    dataField: 'value',
                    displayText: 'Sales',
                    fillColor: '#5e72e4',
                },
            ]
        }
    ];

    chart2AnimationDuration: number = 1000;

    chart2ColorScheme: string = 'scheme01';

    chart2Padding: object = { left: 5, top: 5, right: 5, bottom: 5 };

    chart2TitlePadding: object = { left: 90, top: 0, right: 0, bottom: 10 };

    chart2DataSource: Array<object> = this.ordersData;

    chart2XAxis: object = {
        dataField: 'Day',
        gridLines: {
            visible: false
        },
        tickMarks: {
            visible: false,
        },
    };

    chart2SeriesGroups: Array<object> = [
        {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            valueAxis: {
                line: {
                    color: 'white'
                },
                unitInterval: 20,
                minValue: 0,
                maxValue: 100,
                displayValueAxis: false,
                axisSize: 'auto',
                tickMarksColor: 'white',
            },
            series: [
                {
                    dataField: 'value',
                    displayText: 'Orders',
                    fillColor: '#fb6340'
                },
            ]
        }
    ];

    layout: object = {
        rowHeight: 75
    };

    gridDataSource: DataAdapter = new Smart.DataAdapter({
        dataSource: this.pageVisitsData,
        dataFields: [
            'project: string',
            'budget: string',
            'status: string',
            'users: string',
            'completion: string',
        ]
    });

    columns: Array<object> = [
        {
            label: 'Project', dataField: 'project', width: '25%',
            template: function (formatObject: any): void {
                const projectIcons: Array<string> = [
                    './../../../src/images/bootstrap.svg',
                    './../../../src/images/angular.svg',
                    './../../../src/images/sketch.svg',
                    './../../../src/images/react.svg',
                    './../../../src/images/vuejs.svg',
                    './../../../src/images/bootstrap.svg'
                ];

                if (!formatObject.template) {
                    formatObject.template = '<div class="icon"><img src="' + projectIcons[formatObject.row.index] + '" style="width: 40px;float: left;margin-top:15px;" />' + formatObject.value + '</div>';
                }
            }
        },
        { label: 'Budget', dataField: 'budget', cellsAlign: 'center', align: 'center', width: '10%', },
        {
            label: 'Status', dataField: 'status', width: '10%',
            template: function (formatObject: any): void {
                if (!formatObject.template) {
                    let statusColor = '#fb6340';

                    if (formatObject.value === 'completed') {
                        statusColor = '#2dce89';
                    }
                    else if (formatObject.value === 'on schedule') {
                        statusColor = '#11cdef';
                    }
                    formatObject.template = '<div class="icon"><div class="status" style="background:' + statusColor + '"></div>' + formatObject.value + '</div>';
                }
            }
        },
        {
            label: 'Users', dataField: 'users', cellsAlign: 'center', align: 'center', width: '25%',
            template: function (formatObject) {
                if (!formatObject.template) {
                    const usersImages: Array<string> = [
                        'https://cdn.pixabay.com/photo/2017/09/21/07/47/girl-2771001_960_720.jpg',
                        'https://cdn.pixabay.com/photo/2019/06/04/20/00/man-4252192_960_720.jpg',
                        'https://cdn.pixabay.com/photo/2017/06/02/14/11/girl-2366438_960_720.jpg',
                        'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg',
                        'https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg'
                    ];
                    let imgContent = '';

                    for (let i = 0; i < usersImages.length; i++) {
                        imgContent += '<!--<smart-tooltip id="tooltipQuickAdd" selector="' + usersImages[i] + '" position="bottom" offset="[0,20]" class="animation material">Quick add</smart-tooltip>--><img id="' + usersImages[i] + '" src = "' + usersImages[i] + '" style = "width: 40px;float: left;" />';
                    }
                    formatObject.template = '<div class="images">' + imgContent + '</div>';
                }
            }
        },
        {
            label: 'Completion', dataField: 'completion', cellsAlign: 'center', align: 'center', width: '20%',
            template: function (formatObject: any): void {
                if (!formatObject.template) {
                    let setClass = 'bootstrap';

                    if (formatObject.row.index === 1) {
                        setClass = 'angular';
                    }
                    else if (formatObject.row.index === 2) {
                        setClass = 'sketch';
                    }
                    else if (formatObject.row.index === 3) {
                        setClass = 'react';
                    }
                    else if (formatObject.row.index === 4) {
                        setClass = 'vuejs';
                    }
                    formatObject.template = '<div class="completion-progress-bar"><smart-progress-bar class="' + setClass + '" value="' + formatObject.value + '"></smart-progress-bar></div>';
                }
            }
        },
        {
            label: '', dataField: 'action', cellsAlign: 'center', align: 'center', width: '10%',
            template: function (formatObject: any): void {
                if (!formatObject.template) {
                    formatObject.template = `<smart-drop-down-button drop-down-width="auto" placeholder="" class="visits" drop-down-append-to="body">
                                                    <smart-button class="flat" style="display: block;width:100%">Action</smart-button>
                                                    <smart-button class="flat" style="display: block;width:100%">Another action</smart-button>
                                                    <smart-button class="flat" style="display: block;width:100%">Something else here</smart-button>
                                                </smart-drop-down-button>
                                                `;
                }
            }
        }
    ];

    grid2Layout: object = {
        rowHeight: 55
    };

    grid2DataSource: DataAdapter = new Smart.DataAdapter({
        dataSource: this.realTimeData,
        dataFields: [
            'flag: string',
            'country: string',
            'visits: string',
            'bounce: string',
        ]
    });

    grid2Columns: Array<object> = [
        {
            label: '', dataField: 'flag', cellsAlign: 'center', align: 'center',
            template: function (formatObject: any): void {
                if (!formatObject.template) {
                    formatObject.template = '<img style="width: 30px; height: 30px; vertical-align: middle; border-radius: 15px;" src="' + formatObject.value + '"/>';
                }
                else {
                    formatObject.template.innerHTML = formatObject.value;
                }
            }
        },
        {
            label: 'Country', dataField: 'country',
            template: function (formatObject: any): void {
                if (!formatObject.template) {
                    formatObject.template = '<div class="flag">' + formatObject.value + '</div>';
                }
                else {
                    formatObject.template.innerHTML = formatObject.value;
                }
            }
        },
        { label: 'Visits', dataField: 'visits', cellsAlign: 'center', align: 'center' },
        { label: 'Bounce', dataField: 'bounce', cellsAlign: 'center', align: 'center' },
    ];

    columnHeader: object = {
        visible: false,
    };

    grid3Layout: object = {
        rowHeight: 82
    };

    grid3DataSource: DataAdapter = new Smart.DataAdapter({
        dataSource: this.teamMembersData,
        dataFields: [
            'name: string',
            'status: string',
            'image: string',
            'action: string'
        ]
    });

    grid3Columns: Array<object> = [
        {
            label: '', dataField: 'image', cellsAlign: 'center', align: 'center',
            template: function (formatObject: any): void {
                if (!formatObject.template) {
                    formatObject.template = '<img style="width: 45px; height: 45px; vertical-align: middle; border-radius: 30px;" src="' + formatObject.value + '"/>';
                }
                else {
                    formatObject.template.innerHTML = formatObject.value;
                }
            }
        },
        {
            label: '', dataField: 'name',
            template: function (formatObject: any): void {
                if (!formatObject.template) {
                    formatObject.template = '<div class="flag">' + formatObject.value + '</div>';
                }
                else {
                    formatObject.template.innerHTML = formatObject.value;
                }
            }
        },
        {
            label: '', dataField: 'status',
            template: function (formatObject: any): void {
                let statusColor;
                if (formatObject.value === 'Online') {
                    statusColor = '#2dce89';
                }
                else {
                    statusColor = '#f5365c';
                }
                if (!formatObject.template) {
                    formatObject.template = '<div><div class="status" style="background: ' + statusColor + '"></div>' + formatObject.value + '</div>';
                }
                else {
                    formatObject.template.innerHTML = formatObject.value;
                }
            }
        },
        {
            label: '', dataField: 'action', cellsAlign: 'center', align: 'center',
            template: function (formatObject: any): void {
                if (!formatObject.template) {
                    formatObject.template = '<smart-button class="add">' + formatObject.value + '</div>';
                }
                else {
                    formatObject.template.innerHTML = formatObject.value;
                }
            }
        },
    ];

    grid4Layout: object = {
        rowHeight: 82
    };

    grid4DataSource: Array<object> = new Smart.DataAdapter({
        dataSource: this.todoListData,
        dataFields: [
            'color: string',
            'title: string',
            'time: string',
            'done: string',
        ]
    });

    grid4Columns: Array<object> = [
        {
            label: '', dataField: 'color', width: '10%',
            template: function (formatObject: any): void {
                if (!formatObject.template) {
                    formatObject.template = '<div style="background-color:' + formatObject.value + '; width: 5px; height:' + 82 + 'px"></div>';
                }
                else {
                    formatObject.template.innerHTML = '';
                }
            }
        },
        {
            label: '', dataField: 'title', width: '40%',
            template: function (formatObject: any): void {
                if (!formatObject.template) {
                    let style: string;

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
            label: '', dataField: 'time', width: '40%',
            template: function (formatObject: any): void {
                if (!formatObject.template) {
                    let style: string;

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
            label: '', dataField: 'done', width: '10%',
            template: function (formatObject: any): void {
                let checkboxChecked = formatObject.value === 'true' ? 'checked' : '';

                if (!formatObject.template) {
                    formatObject.template = '<smart-check-box ' + checkboxChecked + ' ></smart-check-box>';
                }
                else {
                    formatObject.template.innerHTML = formatObject.value;
                }
            }
        },
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
            collapseBtn: ButtonComponent = that.button;
        const logo: HTMLImageElement = that.logo.nativeElement;

        function collapseMenuInSmallScreens(): void {
            if (document.documentElement.offsetWidth && document.documentElement.offsetWidth <= 860) {
                collapseLeftMenu();
            }
            else {
                expandLeftMenu();
            }
        }

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

        expandBtn.addEventListener('click', (): void => {
            expandLeftMenu();
        });

        collapseBtn.addEventListener('click', (): void => {
            collapseLeftMenu();
        });

        collapseMenuInSmallScreens();

        window.onresize = function () {
            collapseMenuInSmallScreens();
        };
    };
}