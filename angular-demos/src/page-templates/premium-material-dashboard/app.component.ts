import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CardComponent } from 'smart-webcomponents-angular/card';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { DropDownButtonComponent } from 'smart-webcomponents-angular/dropdownbutton';
import { GridComponent } from 'smart-webcomponents-angular/grid';
import { ProgressBarComponent } from 'smart-webcomponents-angular/progressbar';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
	@ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
	@ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
	@ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
	@ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
	@ViewChild('button8', { read: ButtonComponent, static: false }) button8!: ButtonComponent;
	@ViewChild('button9', { read: ButtonComponent, static: false }) button9!: ButtonComponent;
	@ViewChild('button10', { read: ButtonComponent, static: false }) button10!: ButtonComponent;
	@ViewChild('button11', { read: ButtonComponent, static: false }) button11!: ButtonComponent;
	@ViewChild('button12', { read: ButtonComponent, static: false }) button12!: ButtonComponent;
	@ViewChild('button13', { read: ButtonComponent, static: false }) button13!: ButtonComponent;
	@ViewChild('button14', { read: ButtonComponent, static: false }) button14!: ButtonComponent;
	@ViewChild('button15', { read: ButtonComponent, static: false }) button15!: ButtonComponent;
	@ViewChild('button16', { read: ButtonComponent, static: false }) button16!: ButtonComponent;
	@ViewChild('button17', { read: ButtonComponent, static: false }) button17!: ButtonComponent;
	@ViewChild('button18', { read: ButtonComponent, static: false }) button18!: ButtonComponent;
	@ViewChild('button19', { read: ButtonComponent, static: false }) button19!: ButtonComponent;
	@ViewChild('button20', { read: ButtonComponent, static: false }) button20!: ButtonComponent;
	@ViewChild('button21', { read: ButtonComponent, static: false }) button21!: ButtonComponent;
	@ViewChild('button22', { read: ButtonComponent, static: false }) button22!: ButtonComponent;
	@ViewChild('button23', { read: ButtonComponent, static: false }) button23!: ButtonComponent;
	@ViewChild('button24', { read: ButtonComponent, static: false }) button24!: ButtonComponent;
	@ViewChild('button25', { read: ButtonComponent, static: false }) button25!: ButtonComponent;
	@ViewChild('button26', { read: ButtonComponent, static: false }) button26!: ButtonComponent;
	@ViewChild('button27', { read: ButtonComponent, static: false }) button27!: ButtonComponent;
	@ViewChild('card', { read: CardComponent, static: false }) card!: CardComponent;
	@ViewChild('card2', { read: CardComponent, static: false }) card2!: CardComponent;
	@ViewChild('card3', { read: CardComponent, static: false }) card3!: CardComponent;
	@ViewChild('card4', { read: CardComponent, static: false }) card4!: CardComponent;
	@ViewChild('card5', { read: CardComponent, static: false }) card5!: CardComponent;
	@ViewChild('card6', { read: CardComponent, static: false }) card6!: CardComponent;
	@ViewChild('card7', { read: CardComponent, static: false }) card7!: CardComponent;
	@ViewChild('card8', { read: CardComponent, static: false }) card8!: CardComponent;
	@ViewChild('card9', { read: CardComponent, static: false }) card9!: CardComponent;
	@ViewChild('card10', { read: CardComponent, static: false }) card10!: CardComponent;
	@ViewChild('card11', { read: CardComponent, static: false }) card11!: CardComponent;
	@ViewChild('card12', { read: CardComponent, static: false }) card12!: CardComponent;
	@ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
	@ViewChild('chart2', { read: ChartComponent, static: false }) chart2!: ChartComponent;
	@ViewChild('dropdownbutton', { read: DropDownButtonComponent, static: false }) dropdownbutton!: DropDownButtonComponent;
	@ViewChild('dropdownbutton2', { read: DropDownButtonComponent, static: false }) dropdownbutton2!: DropDownButtonComponent;
	@ViewChild('dropdownbutton3', { read: DropDownButtonComponent, static: false }) dropdownbutton3!: DropDownButtonComponent;
	@ViewChild('dropdownbutton4', { read: DropDownButtonComponent, static: false }) dropdownbutton4!: DropDownButtonComponent;
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
	@ViewChild('grid2', { read: GridComponent, static: false }) grid2!: GridComponent;
	@ViewChild('grid3', { read: GridComponent, static: false }) grid3!: GridComponent;
	@ViewChild('grid4', { read: GridComponent, static: false }) grid4!: GridComponent;
	@ViewChild('progressbar', { read: ProgressBarComponent, static: false }) progressbar!: ProgressBarComponent;
	@ViewChild('progressbar2', { read: ProgressBarComponent, static: false }) progressbar2!: ProgressBarComponent;
	@ViewChild('progressbar3', { read: ProgressBarComponent, static: false }) progressbar3!: ProgressBarComponent;
	@ViewChild('progressbar4', { read: ProgressBarComponent, static: false }) progressbar4!: ProgressBarComponent;
	@ViewChild('progressbar5', { read: ProgressBarComponent, static: false }) progressbar5!: ProgressBarComponent;
	@ViewChild('progressbar6', { read: ProgressBarComponent, static: false }) progressbar6!: ProgressBarComponent;
	@ViewChild('progressbar7', { read: ProgressBarComponent, static: false }) progressbar7!: ProgressBarComponent;
	@ViewChild('progressbar8', { read: ProgressBarComponent, static: false }) progressbar8!: ProgressBarComponent;
	@ViewChild('progressbar9', { read: ProgressBarComponent, static: false }) progressbar9!: ProgressBarComponent;
	@ViewChild('progressbar10', { read: ProgressBarComponent, static: false }) progressbar10!: ProgressBarComponent;
	@ViewChild('progressbar11', { read: ProgressBarComponent, static: false }) progressbar11!: ProgressBarComponent;
	@ViewChild('progressbar12', { read: ProgressBarComponent, static: false }) progressbar12!: ProgressBarComponent;
	@ViewChild('progressbar13', { read: ProgressBarComponent, static: false }) progressbar13!: ProgressBarComponent;
	@ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;
	@ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const dashboard = document.getElementById('dashboard'), expandBtn = document.getElementById('expandBtn'), collapseBtn = document.getElementById('collapseBtn');
        const logo = document.querySelector('.smart-logo');
        expandBtn.addEventListener('click', () => {
            expandLeftMenu();
        });
        collapseBtn.addEventListener('click', () => {
            collapseLeftMenu();
        });
        collapseMenuInSmallScreens();
        window.onresize = function () {
            collapseMenuInSmallScreens();
        };
        function collapseMenuInSmallScreens() {
            if (document.documentElement.offsetWidth && document.documentElement.offsetWidth <= 860) {
                collapseLeftMenu();
            }
            else {
                expandLeftMenu();
            }
        }
        function collapseLeftMenu() {
            dashboard.update(0, { size: 70 });
            dashboard.removeAttribute('expanded');
            logo.style.display = 'none';
        }
        function expandLeftMenu() {
            dashboard.update(0, { size: 240 });
            dashboard.setAttribute('expanded', '');
            logo.style.display = 'inline';
        }
    };
    /* Sales value, Total orders, /Progress track/ */
    // Sales value - Chart
    const salesData = [
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
    window.Smart('#chart-sales', class {
        get properties() {
            return {
                animationDuration: 1200,
                backgroundColor: 'white',
                borderLineWidth: 0,
                toolTipLineColor: '#ccc',
                caption: ' ',
                description: ' ',
                showLegend: false,
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
                dataSource: salesData,
                colorScheme: 'scheme32',
                xAxis: {
                    line: {
                        color: 'white'
                    },
                    dataField: 'Month',
                    tickMarks: {
                        visible: false
                    },
                    gridLines: {
                        visible: false,
                        unitInterval: 3,
                        color: '#BCBCBC'
                    }
                },
                clip: false,
                valueAxis: {
                    visible: true,
                    title: { text: ' ' },
                    unitInterval: 10,
                    maxValue: 40
                },
                seriesGroups: [
                    {
                        type: 'spline',
                        valueAxis: {
                            displayValueAxis: false,
                            line: {
                                color: 'white'
                            }
                        },
                        series: [
                            {
                                dataField: 'value',
                                displayText: 'Sales',
                                fillColor: '#5e72e4',
                            }
                        ]
                    }
                ]
            };
        }
    });
    // Total orders - Chart
    const ordersData = [
        { Day: 'Mon', value: 30 },
        { Day: 'Tue', value: 17 },
        { Day: 'Wed', value: 64 },
        { Day: 'Thu', value: 88 },
        { Day: 'Fri', value: 20 },
        { Day: 'Sat', value: 15 },
        { Day: 'Sun', value: 36 },
    ];
    window.Smart('#performance', class {
        get properties() {
            return {
                animationDuration: 1000,
                backgroundColor: 'white',
                colorScheme: 'scheme01',
                borderLineWidth: 0,
                toolTipLineColor: '#ccc',
                caption: ' ',
                description: ' ',
                showLegend: false,
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                dataSource: ordersData,
                xAxis: {
                    dataField: 'Day',
                    gridLines: {
                        visible: false
                    },
                    tickMarks: {
                        visible: false,
                    },
                },
                seriesGroups: [
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
                            axisSize: 'auto'
                        },
                        series: [
                            {
                                dataField: 'value',
                                displayText: 'Orders',
                                fillColor: '#fb6340'
                            },
                        ]
                    }
                ]
            };
        }
    });
    /* Page visits, Real Time */
    // Page visits - Grid
    const pageVisitsData = [
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
            project: 'Argon Design System',
            budget: '$2500 USD',
            status: 'pending',
            users: '',
            completion: '60',
            action: '',
        }
    ];
    const projectIcons = [
        '../../../images/bootstrap.svg',
        '../../../images/angular.svg',
        '../../../images/sketch.svg',
        '../../../images/react.svg',
        '../../../images/vuejs.svg',
        '../../../images/bootstrap.svg'
    ];
    const usersImages = [
        'https://cdn.pixabay.com/photo/2017/09/21/07/47/girl-2771001_960_720.jpg',
        'https://cdn.pixabay.com/photo/2019/06/04/20/00/man-4252192_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/06/02/14/11/girl-2366438_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg',
        'https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg'
    ];
    window.Smart('#grid-page-visits', class {
        get properties() {
            return {
                layout: {
                    rowHeight: 75
                },
                dataSource: new window.Smart.DataAdapter({
                    dataSource: pageVisitsData,
                    dataFields: [
                        'project: string',
                        'budget: string',
                        'status: string',
                        'users: string',
                        'completion: string',
                    ]
                }),
                columns: [
                    {
                        label: 'Project', dataField: 'project', width: '25%',
                        template: function (formatObject) {
                            if (!formatObject.template) {
                                formatObject.template = '<div class="icon"><img src="' + projectIcons[formatObject.row.index] + '" style="width: 40px;float: left;margin-top:15px;" />' + formatObject.value + '</div>';
                            }
                        }
                    },
                    { label: 'Budget', dataField: 'budget', cellsAlign: 'center', align: 'center', width: '10%', },
                    {
                        label: 'Status', dataField: 'status', width: '10%',
                        template: function (formatObject) {
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
                        template: function (formatObject) {
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
                        template: function (formatObject) {
                            if (!formatObject.template) {
                                formatObject.template = `<smart-drop-down-button drop-down-width="auto" placeholder="" class="visits" drop-down-append-to="body">
                                                            <smart-button class="flat" style="display: block;width:100%">Action</smart-button>
                                                            <smart-button class="flat" style="display: block;width:100%">Another action</smart-button>
                                                            <smart-button class="flat" style="display: block;width:100%">Something else here</smart-button>
                                                        </smart-drop-down-button>
                                                        `;
                            }
                        }
                    },
                ]
            };
        }
    });
    // Real time - Grid
    const realTimeData = [
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
    window.Smart('#real-time-grid', class {
        get properties() {
            return {
                layout: {
                    rowHeight: 55
                },
                dataSource: new window.Smart.DataAdapter({
                    dataSource: realTimeData,
                    dataFields: [
                        'flag: string',
                        'country: string',
                        'visits: string',
                        'bounce: string',
                    ]
                }),
                columns: [
                    {
                        label: '', dataField: 'flag', cellsAlign: 'center', align: 'center',
                        template: function (formatObject) {
                            if (!formatObject.template) {
                                formatObject.template = '<img style="width: 30px; height: 30px; vertical-align: middle; border-radius: 15px;" src="' + formatObject.value + '"/>';
                            }
                            else {
                                formatObject.template.innerHTML = formatObject.value;
                            }
                        }
                    },
                    {
                        label: 'Country', dataField: 'country'
                    },
                    { label: 'Visits', dataField: 'visits', cellsAlign: 'center', align: 'center' },
                    { label: 'Bounce', dataField: 'bounce', cellsAlign: 'center', align: 'center' },
                ]
            };
        }
    });
    /* Team members, To do list, /Progress track/ */
    // Team members - Grid
    const teamMembersData = [
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
    window.Smart('#team-members-grid', class {
        get properties() {
            return {
                columnHeader: {
                    visible: false,
                },
                layout: {
                    rowHeight: 82
                },
                dataSource: new window.Smart.DataAdapter({
                    dataSource: teamMembersData,
                    dataFields: [
                        'name: string',
                        'status: string',
                        'image: string',
                        'action: string'
                    ]
                }),
                columns: [
                    {
                        label: '', dataField: 'image', cellsAlign: 'center', align: 'center',
                        template: function (formatObject) {
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
                        template: function (formatObject) {
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
                        template: function (formatObject) {
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
                        template: function (formatObject) {
                            if (!formatObject.template) {
                                formatObject.template = '<smart-button class="add">' + formatObject.value + '</div>';
                            }
                            else {
                                formatObject.template.innerHTML = formatObject.value;
                            }
                        }
                    },
                ]
            };
        }
    });
    // Тodo-list-grid
    const todoListData = [
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
    window.Smart('#todo-list-grid', class {
        get properties() {
            const rowHeight = 82;
            return {
                columnHeader: {
                    visible: false,
                },
                layout: {
                    rowHeight: rowHeight
                },
                dataSource: new window.Smart.DataAdapter({
                    dataSource: todoListData,
                    dataFields: [
                        'color: string',
                        'title: string',
                        'time: string',
                        'done: string',
                    ]
                }),
                columns: [
                    {
                        label: '', dataField: 'color', width: '10%',
                        template: function (formatObject) {
                            if (!formatObject.template) {
                                formatObject.template = '<div style="background-color:' + formatObject.value + '; width: 5px; height:' + rowHeight + 'px"></div>';
                            }
                            else {
                                formatObject.template.innerHTML = '';
                            }
                        }
                    },
                    {
                        label: '', dataField: 'title', width: '40%',
                        template: function (formatObject) {
                            if (!formatObject.template) {
                                let style;
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
                        template: function (formatObject) {
                            if (!formatObject.template) {
                                let style;
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
                        template: function (formatObject) {
                            let checkboxChecked = formatObject.value === 'true' ? 'checked' : '';
                            if (!formatObject.template) {
                                formatObject.template = '<div style="overflow: hidden; width: 100%; height:100%;"><smart-check-box ' + checkboxChecked + ' ></smart-check-box></div>';
                            }
                            else {
                                formatObject.template.innerHTML = formatObject.value;
                            }
                        }
                    },
                ]
            };
        }
    

	}	
}