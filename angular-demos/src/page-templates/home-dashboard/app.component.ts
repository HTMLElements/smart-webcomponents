import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        attachEvents();
        collapseMenuInSmallScreens();
        initCharts();
        initGrids();
    };
    function attachEvents() {
        const expandBtn = document.getElementById('expandBtn');
        const collapseBtn = document.getElementById('collapseBtn');
        expandBtn.addEventListener('click', () => {
            expandLeftMenu();
        });
        collapseBtn.addEventListener('click', () => {
            collapseLeftMenu();
        });
        window.onresize = function () {
            collapseMenuInSmallScreens();
        };
    }
    function collapseMenuInSmallScreens() {
        if (document.documentElement.offsetWidth && document.documentElement.offsetWidth <= 860) {
            collapseLeftMenu();
        }
        else {
            expandLeftMenu();
        }
    }
    function collapseLeftMenu() {
        const dashboard = document.getElementById('dashboard');
        const logo = document.querySelector('.smart-logo');
        dashboard.update(0, { size: 50 });
        dashboard.removeAttribute('expanded');
        logo.style.display = 'none';
    }
    function expandLeftMenu() {
        const dashboard = document.getElementById('dashboard');
        const logo = document.querySelector('.smart-logo');
        dashboard.update(0, { size: 240 });
        dashboard.setAttribute('expanded', '');
        logo.style.display = 'inline';
    }
    function initCharts() {
        const customerLifeTimeData = [
            { company: "Amazon", value: 40000 },
            { company: "Apple", value: 120000 },
            { company: "Google", value: 220000 },
            { company: "Microsoft", value: 400000 },
            { company: "Oracle", value: 180000 },
            { company: "Tesla", value: 400000 },
            { company: "Twitter", value: 200000 },
            { company: "Yahoo", value: 180000 }
        ];
        const revenueData = [
            { month: "September", value: 200000 },
            { month: "October", value: 220000 },
            { month: "November", value: 50000 },
            { month: "December", value: 50000 },
            { month: "2019", value: 200000 }
        ];
        const revenueByEmployeeData = [
            { name: "John Doe", value: 1100000 },
            { name: "Jane Smith", value: 600000 }
        ];
        window.Smart('#customerLifeTime', class {
            get properties() {
                return {
                    caption: 'Customer life time value',
                    description: '',
                    padding: { left: 5, top: 5, right: 5, bottom: 5 },
                    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                    backgroundColor: '#5D727B',
                    showBorderLine: false,
                    showLegend: false,
                    dataSource: customerLifeTimeData,
                    xAxis: {
                        dataField: 'company',
                        gridLines: {
                            visible: false
                        }
                    },
                    seriesGroups: [
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
                                    colorFunction: function (value, itemIndex, serie, group) {
                                        switch (itemIndex) {
                                            case 0:
                                                return '#489CC8';
                                                break;
                                            case 1:
                                                return '#69D5C8';
                                                break;
                                            case 2:
                                                return '#FF6D41';
                                                break;
                                            case 3:
                                                return '#CA6992';
                                                break;
                                            case 4:
                                                return '#E6C54F';
                                                break;
                                            case 5:
                                                return '#F9777F';
                                                break;
                                            case 6:
                                                return '#5DBF74';
                                                break;
                                            case 7:
                                                return '#4DB9F2';
                                                break;
                                        }
                                    }
                                },
                            ]
                        }
                    ]
                };
            }
        });
        window.Smart('#revenue', class {
            get properties() {
                return {
                    caption: 'Revenue',
                    description: '',
                    padding: { left: 5, top: 5, right: 5, bottom: 5 },
                    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                    backgroundColor: '#5D727B',
                    showBorderLine: false,
                    showLegend: false,
                    dataSource: revenueData,
                    xAxis: {
                        dataField: 'month'
                    },
                    seriesGroups: [
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
                    ]
                };
            }
        });
        window.Smart('#revenueByEmployee', class {
            get properties() {
                return {
                    caption: 'Revenue by employee',
                    description: '',
                    padding: { left: 5, top: 5, right: 5, bottom: 5 },
                    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                    backgroundColor: '#5D727B',
                    showBorderLine: false,
                    showLegend: false,
                    dataSource: revenueByEmployeeData,
                    xAxis: {
                        dataField: 'name'
                    },
                    seriesGroups: [
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
                                    colorFunction: function (value, itemIndex, serie, group) {
                                        switch (itemIndex) {
                                            case 0:
                                                return '#489CC8';
                                                break;
                                            case 1:
                                                return '#69D5C8';
                                                break;
                                            case 2:
                                                return '#FF6D41';
                                                break;
                                            case 3:
                                                return '#CA6992';
                                                break;
                                            case 4:
                                                return '#E6C54F';
                                                break;
                                            case 5:
                                                return '#F9777F';
                                                break;
                                            case 6:
                                                return '#5DBF74';
                                                break;
                                            case 7:
                                                return '#4DB9F2';
                                                break;
                                        }
                                    }
                                },
                            ]
                        }
                    ]
                };
            }
        });
    }
    function initGrids() {
        const opportunitiesData = [
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
        const activeTasksData = [
            { employee: 'Jane Smith', title: 'Introduction and product description', opportunity: 'Tesla Partnership', dueDate: new Date(2020, 0, 31) },
            { employee: 'John Doe', title: 'Discuss product advantages', opportunity: 'Oracle New Deal', dueDate: new Date(2020, 9, 30) },
            { employee: 'John Doe', title: 'Reminder call', opportunity: 'Microsoft Renewal Offer', dueDate: new Date(2020, 0, 25) },
            { employee: 'John Doe', title: 'Introduction call', opportunity: 'Oracle New Deal', dueDate: new Date(2020, 0, 23) },
            { employee: 'John Doe', title: 'Happy New Year Mail', opportunity: 'Microsoft Renewal Offer', dueDate: new Date(2020, 0, 7) }
        ];
        window.Smart('#opportunities', class {
            get properties() {
                return {
                    selection: {
                        enabled: true,
                        allowRowSelection: true,
                        mode: 'one'
                    },
                    appearance: {
                        alternationCount: 2
                    },
                    dataSource: new window.Smart.DataAdapter({
                        dataSource: opportunitiesData,
                        dataFields: [
                            'contact: string',
                            'amount: number',
                            'status: string',
                            'closeDate: date'
                        ]
                    }),
                    columns: [
                        { label: 'Contact', dataField: 'contact' },
                        {
                            label: 'Amount', dataField: 'amount', cellsFormat: 'c2', formatFunction(settings) {
                                settings.value = '
	}	
} + new Number(settings.value).toFixed(2);
                            }
                        },
                        { label: 'Status', dataField: 'status' },
                        { label: 'Close Date', dataField: 'closeDate', cellsFormat: 'MMM d, yyyy' }
                    ]
                };
            }
        });
        window.Smart('#activeTasks', class {
            get properties() {
                return {
                    selection: {
                        enabled: true,
                        allowRowSelection: true,
                        mode: 'one'
                    },
                    appearance: {
                        alternationCount: 2
                    },
                    dataSource: new window.Smart.DataAdapter({
                        dataSource: activeTasksData,
                        dataFields: [
                            'employee: string',
                            'title: string',
                            'opportunity: string',
                            'dueDate: date'
                        ]
                    }),
                    columns: [
                        { label: 'Employee', dataField: 'employee',
                            formatFunction(settings) {
                                settings.template = '<div style="display: flex"><img height="30px" src="' + '../../images/phonebook/andrew.png" style="margin-right: 10px"/><div>' + settings.value + '</div></div>';
                            } },
                        { label: 'Title', dataField: 'title' },
                        { label: 'Opportunity', dataField: 'opportunity' },
                        { label: 'Due Date', dataField: 'dueDate', cellsFormat: 'MMM d, yyyy' }
                    ]
                };
            }
        });
    

	}	
}