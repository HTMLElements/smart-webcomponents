import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Card } from 'smart-webcomponents-react/card';
import { Chart } from 'smart-webcomponents-react/chart';
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { Grid, Smart } from 'smart-webcomponents-react/grid';
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.splitter = React.createRef();
		this.expandbtn = React.createRef();
		this.collapsebtn = React.createRef();
		this.logo = React.createRef();
	}

	handleExpand() {
		this.expandLeftMenu();
	}

	handleCollapse() {
		this.collapseLeftMenu();
	}

	collapseLeftMenu() {
		const dashboard = this.splitter.current,
		 logo = this.logo.current;

		dashboard.update(0, {
			size: 70
		});
		dashboard.nativeElement.removeAttribute('expanded');
		logo.style.display = 'none';
	}

	expandLeftMenu() {
		const dashboard = this.splitter.current,
		 logo = this.logo.current;
		
		dashboard.update(0, {
			size: 240
		});
		dashboard.nativeElement.setAttribute('expanded', '');
		logo.style.display = 'inline';
	}

	collapseMenuInSmallScreens() {
		if (document.documentElement.offsetWidth && document.documentElement.offsetWidth <= 860) {
			this.collapseLeftMenu();
		} 
		else {
			this.expandLeftMenu();
		}
	}

	/* Sales value, Total orders, /Progress track/ */
// Sales value - Chart
salesData = [{
	Month: 'Jan',
	value: 0
},
{
	Month: 'Feb',
	value: 10
},
{
	Month: 'Mar',
	value: 5
},
{
	Month: 'Apr',
	value: 25
},
{
	Month: 'May',
	value: 20
},
{
	Month: 'Jun',
	value: 20
},
{
	Month: 'Jul',
	value: 15
},
{
	Month: 'Aug',
	value: 25
},
{
	Month: 'Sep',
	value: 20
},
{
	Month: 'Oct',
	value: 30
},
{
	Month: 'Nov',
	value: 25
},
{
	Month: 'Dec',
	value: 30
},
];
chartProps = {
		animationDuration: 1200,
		backgroundColor: 'white',
		borderLineWidth: 0,
		toolTipLineColor: '#ccc',
		caption: ' ',
		description: ' ',
		showLegend: false,
		padding: {
			left: 10,
			top: 5,
			right: 10,
			bottom: 5
		},
		titlePadding: {
			left: 50,
			top: 0,
			right: 0,
			bottom: 10
		},
		dataSource: this.salesData,
		colorScheme: 'scheme32',
		xAxis: {
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
		},
		clip: false,
		valueAxis: {
			visible: true,
			title: {
				text: ' '
			},
			unitInterval: 10,
			maxValue: 40,
		},
		seriesGroups: [{
			type: 'spline',
			valueAxis: {
				displayValueAxis: false,
				tickMarksColor: 'white',
				line: {
					color: 'white'
				},
			},
			series: [{
				dataField: 'value',
				displayText: 'Sales',
				fillColor: '#5e72e4',
			}, ]
		}]
	};

// Total orders - Chart
 ordersData = [{
	Day: 'Mon',
	value: 30
},
{
	Day: 'Tue',
	value: 17
},
{
	Day: 'Wed',
	value: 64
},
{
	Day: 'Thu',
	value: 88
},
{
	Day: 'Fri',
	value: 20
},
{
	Day: 'Sat',
	value: 15
},
{
	Day: 'Sun',
	value: 36
},
];

chartProps2 = {
		animationDuration: 1000,
		backgroundColor: 'white',
		colorScheme: 'scheme01',
		borderLineWidth: 0,
		toolTipLineColor: '#ccc',
		caption: ' ',
		description: ' ',
		showLegend: false,
		padding: {
			left: 5,
			top: 5,
			right: 5,
			bottom: 5
		},
		titlePadding: {
			left: 90,
			top: 0,
			right: 0,
			bottom: 10
		},
		dataSource: this.ordersData,
		xAxis: {
			dataField: 'Day',
			gridLines: {
				visible: false
			},
			tickMarks: {
				visible: false,
			},
		},
		seriesGroups: [{
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
			series: [{
				dataField: 'value',
				displayText: 'Orders',
				fillColor: '#fb6340'
			}, ]
		}]
	};

/* Page visits, Real Time */
// Page visits - Grid
 pageVisitsData = [{
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
projectIcons = [
'./../../../src/images/bootstrap.svg',
'./../../../src/images/angular.svg',
'./../../../src/images/sketch.svg',
'./../../../src/images/react.svg',
'./../../../src/images/vuejs.svg',
'./../../../src/images/bootstrap.svg'
];
usersImages = [
'https://cdn.pixabay.com/photo/2017/09/21/07/47/girl-2771001_960_720.jpg',
'https://cdn.pixabay.com/photo/2019/06/04/20/00/man-4252192_960_720.jpg',
'https://cdn.pixabay.com/photo/2017/06/02/14/11/girl-2366438_960_720.jpg',
'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg',
'https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg'
];

gridProps = {
		layout: {
			rowHeight: 75
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.pageVisitsData,
			dataFields: [
				'project: string',
				'budget: string',
				'status: string',
				'users: string',
				'completion: string',
			]
		}),
		columns: [{
				label: 'Project',
				dataField: 'project',
				width: '25%',
				template: (formatObject) => {
					if (!formatObject.template) {
						formatObject.template = '<div className="icon"><img src="' + this.projectIcons[formatObject.row.index] + '" style="width: 40px;float: left;margin-top:15px;" />' + formatObject.value + '</div>';
					}
				}
			},
			{
				label: 'Budget',
				dataField: 'budget',
				cellsAlign: 'center',
				align: 'center',
				width: '10%',
			},
			{
				label: 'Status',
				dataField: 'status',
				width: '10%',
				template: (formatObject) => {
					if (!formatObject.template) {
						let statusColor = '#fb6340';
						if (formatObject.value === 'completed') {
							statusColor = '#2dce89';
						} else if (formatObject.value === 'on schedule') {
							statusColor = '#11cdef';
						}
						formatObject.template = '<div className="icon"><div className="status" style="background:' + statusColor + '"></div>' + formatObject.value + '</div>';
					}
				}
			},
			{
				label: 'Users',
				dataField: 'users',
				cellsAlign: 'center',
				align: 'center',
				width: '25%',
				template: (formatObject) => {
					if (!formatObject.template) {
						let imgContent = '';
						for (let i = 0; i < this.usersImages.length; i++) {
							imgContent += '<img id="' + this.usersImages[i] + '" src = "' + this.usersImages[i] + '" style = "width: 40px;float: left;" />';
						}
						formatObject.template = '<div className="images">' + imgContent + '</div>';
					}
				}
			},
			{
				label: 'Completion',
				dataField: 'completion',
				cellsAlign: 'center',
				align: 'center',
				width: '20%',
				template: (formatObject) => {
					if (!formatObject.template) {
						let setClass = 'bootstrap';
						if (formatObject.row.index === 1) {
							setClass = 'angular';
						} else if (formatObject.row.index === 2) {
							setClass = 'sketch';
						} else if (formatObject.row.index === 3) {
							setClass = 'react';
						} else if (formatObject.row.index === 4) {
							setClass = 'vuejs';
						}
						formatObject.template = '<div className="completion-progress-bar"><smart-progress-bar className="' + setClass + '" value="' + formatObject.value + '"></smart-progress-bar></div>';
					}
				}
			},
			{
				label: '',
				dataField: 'action',
				cellsAlign: 'center',
				align: 'center',
				width: '10%',
				template: (formatObject) => {
					if (!formatObject.template) {
						formatObject.template = `<smart-drop-down-button drop-down-width="auto" placeholder="" className="visits" drop-down-append-to="body">
													<smart-button className="flat" style="display: block;width:100%">Action</smart-button>
													<smart-button className="flat" style="display: block;width:100%">Another action</smart-button>
													<smart-button className="flat" style="display: block;width:100%">Something else here</smart-button>
												</smart-drop-down-button>
												`;
					}
				}
			},
		]
	};
// Real time - Grid
realTimeData = [{
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

gridProps2 = {
		layout: {
			rowHeight: 55
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.realTimeData,
			dataFields: [
				'flag: string',
				'country: string',
				'visits: string',
				'bounce: string',
			]
		}),
		columns: [{
				label: '',
				dataField: 'flag',
				cellsAlign: 'center',
				align: 'center',
				template: (formatObject) => {
					if (!formatObject.template) {
						formatObject.template = '<img style="width: 30px; height: 30px; vertical-align: middle; border-radius: 15px;" src="' + formatObject.value + '"/>';
					} else {
						formatObject.template.innerHTML = formatObject.value;
					}
				}
			},
			{
				label: 'Country',
				dataField: 'country',
				template: (formatObject) => {
					if (!formatObject.template) {
						formatObject.template = '<div className="flag">' + formatObject.value + '</div>';
					} else {
						formatObject.template.innerHTML = formatObject.value;
					}
				}
			},
			{
				label: 'Visits',
				dataField: 'visits',
				cellsAlign: 'center',
				align: 'center'
			},
			{
				label: 'Bounce',
				dataField: 'bounce',
				cellsAlign: 'center',
				align: 'center'
			},
		]
	};
	
/* Team members, To do list, /Progress track/ */
// Team members - Grid
teamMembersData = [{
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

gridProps3 = {
		columnHeader: {
			visible: false,
		},
		layout: {
			rowHeight: 82
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.teamMembersData,
			dataFields: [
				'name: string',
				'status: string',
				'image: string',
				'action: string'
			]
		}),
		columns: [{
				label: '',
				dataField: 'image',
				cellsAlign: 'center',
				align: 'center',
				template: (formatObject) => {
					if (!formatObject.template) {
						formatObject.template = '<img style="width: 45px; height: 45px; vertical-align: middle; border-radius: 30px;" src="' + formatObject.value + '"/>';
					} 
					else {
						formatObject.template.innerHTML = formatObject.value;
					}
				}
			},
			{
				label: '',
				dataField: 'name',
				template: (formatObject) => {
					if (!formatObject.template) {
						formatObject.template = '<div className="flag">' + formatObject.value + '</div>';
					} 
					else {
						formatObject.template.innerHTML = formatObject.value;
					}
				}
			},
			{
				label: '',
				dataField: 'status',
				template: (formatObject) => {
					let statusColor;
					if (formatObject.value === 'Online') {
						statusColor = '#2dce89';
					} else {
						statusColor = '#f5365c';
					}
					if (!formatObject.template) {
						formatObject.template = '<div><div className="status" style="background: ' + statusColor + '"></div>' + formatObject.value + '</div>';
					} else {
						formatObject.template.innerHTML = formatObject.value;
					}
				}
			},
			{
				label: '',
				dataField: 'action',
				cellsAlign: 'center',
				align: 'center',
				template: (formatObject) => {
					if (!formatObject.template) {
						formatObject.template = '<smart-button className="add">' + formatObject.value + '</div>';
					} else {
						formatObject.template.innerHTML = formatObject.value;
					}
				}
			},
		]
	};

	// Тodo-list-grid
todoListData = [{
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

gridProps4 = {
				columnHeader: {
					visible: false,
				},
				layout: {
					rowHeight: 82
				},
				dataSource: new Smart.DataAdapter({
					dataSource: this.todoListData,
					dataFields: [
						'color: string',
						'title: string',
						'time: string',
						'done: string',
					]
				}),
				columns: [{
						label: '',
						dataField: 'color',
						width: '10%',
						template: (formatObject) => {
							if (!formatObject.template) {
								formatObject.template = '<div style="background-color:' + formatObject.value + '; width: 5px; height:' + 82 + 'px"></div>';
							} 
							else {
								formatObject.template.innerHTML = '';
							}
						}
					},
					{
						label: '',
						dataField: 'title',
						width: '40%',
						template: (formatObject) => {
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
						label: '',
						dataField: 'time',
						width: '40%',
						template: (formatObject) => {
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
						label: '',
						dataField: 'done',
						width: '10%',
						template: (formatObject) => {
							let checkboxChecked = formatObject.value === 'true' ? 'checked' : '';

							if (!formatObject.template) {
								formatObject.template = '<smart-check-box ' + checkboxChecked + ' ></smart-check-box>';
							} 
							else {
								formatObject.template.innerHTML = formatObject.value;
							}
						}
					},
				]
			};

	init() {
	    window.onresize = () => this.collapseMenuInSmallScreens();
		this.collapseMenuInSmallScreens();
	}
	
	componentDidMount() {
this.init();
	}

	render() {
		return (
			<div>
			    <Splitter ref={this.splitter} id="dashboard" expanded>
			        <SplitterItem collapsible id="leftPanel" size="240">
			            <div className="dashboard-header">
			                <img ref={this.logo} src="https://www.htmlelements.com/wp-content/design/assets/images/logo-htmlelements.svg"
			                className="smart-logo" />
			                <Button ref={this.collapsebtn} onClick={this.handleCollapse.bind(this)} id="collapseBtn" className="floating"> <i className="material-icons">chevron_left</i>
			                </Button>
			                <Button ref={this.expandbtn} onClick={this.handleExpand.bind(this)} id="expandBtn" className="floating"> <i className="material-icons">menu</i>
			                </Button>
			            </div>
			            <div className="dashboard-menu-container">
			                <Button  className="flat menu-btn"><i className="material-icons">view_quilt</i>Dashboard</Button>
			                <Button 
			                className="flat menu-btn"><i className="material-icons">person</i>User Profile</Button>
			                <Button 
			                className="flat menu-btn"><i className="material-icons">list_alt</i>Table List</Button>
			                <Button 
			                className="flat menu-btn"><i className="material-icons">view_list</i>Typography</Button>
			                <Button 
			                className="flat menu-btn"><i className="material-icons">hdr_strong</i>Icons</Button>
			                <Button  className="flat menu-btn"><i className="material-icons">map</i>Maps</Button>
			                <Button  className="flat menu-btn"><i className="material-icons">notifications</i>Notifications</Button>
			                <Button
			                 className="flat menu-btn"><i className="material-icons">language</i>RTL Support</Button>
			            </div>
			        </SplitterItem>
			        <SplitterBar className="smart-hidden"></SplitterBar>
			        <SplitterItem id="rightPanel">
			            <div className="dashboard-header">
			                <div className="search-holder"> <i className="material-icons search-icon" style={{color:'white'}}>
			
			                        search
			
			                    </i>
			                    <TextBox  id="search-input" placeholder="Search"></TextBox>
			                </div>
			                <div className="floating">
			                    <Button  id="header-person-btn"> <i className="material-icons">person</i>
			                    </Button>
			                    <Button  id="notifficationBtn"> <i className="material-icons">notifications</i>
			                    </Button>
			                    <Button  id="header-dashboard-btn"> <i className="material-icons">view_quilt</i>
			                    </Button>
			                </div>
			            </div>
			            <br />
			            <br />
			             <h1 className="main-title">Alternative</h1>
			            <div className="breadcrumb"> <span className="icon link">
			                    <i className="material-icons">
			                        home
			                    </i>
			                </span>/<span className="active link">Dashboards</span>/<span>
			                    Alternative
			                </span>
			            </div>
			            <div className="right-filters">
			                <Button >New</Button>
			                <Button >Filter</Button>
			            </div>
			            <br />
			            <br />
			            <div className="smart-grid-layout cards-with-progressbar">
			                <div className="row">
			                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
			                        <Card  className="basic-card tasks-completed">
			                            <div className="card-content"> <span className="card-title">TASKS COMPLETED</span>
			                                <p>8/24
			                                    <ProgressBar  value={33}></ProgressBar>
			                                    <DropDownButton  className="first-card-item"
			                                    dropDownWidth="auto" placeholder="">
			                                        <Button  className="flat">Action</Button>
			                                        <Button  className="flat">Another action</Button>
			                                        <Button  className="flat">Something else here</Button>
			                                    </DropDownButton>
			                                </p>
			                            </div>
			                            <div className="card-action"> <a href="javascript:void(0)">See details</a>
			                            </div>
			                        </Card>
			                    </div>
			                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
			                        <Card  className="basic-card contacts">
			                            <div className="card-content"> <span className="card-title">ITEMS SOLD</span>
			                                <p>123/267
			                                    <ProgressBar  value={46}></ProgressBar>
			                                    <DropDownButton  className="first-card-item"
			                                    dropDownWidth="auto" placeholder="">
			                                        <Button  className="flat">Action</Button>
			                                        <Button  className="flat">Another action</Button>
			                                        <Button  className="flat">Something else here</Button>
			                                    </DropDownButton>
			                                </p>
			                            </div>
			                            <div className="card-action"> <a href="javascript:void(0)">See details</a>
			                            </div>
			                        </Card>
			                    </div>
			                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
			                        <Card  className="basic-card items-sold">
			                            <div className="card-content"> <span className="card-title">ITEMS SOLD</span>
			                                <p>200/300
			                                    <ProgressBar  value={66}></ProgressBar>
			                                    <DropDownButton  className="first-card-item"
			                                    dropDownWidth="auto" placeholder="">
			                                        <Button  className="flat">Action</Button>
			                                        <Button  className="flat">Another action</Button>
			                                        <Button  className="flat">Something else here</Button>
			                                    </DropDownButton>
			                                </p>
			                            </div>
			                            <div className="card-action"> <a href="javascript:void(0)">See details</a>
			                            </div>
			                        </Card>
			                    </div>
			                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
			                        <Card  className="basic-card notifications">
			                            <div className="card-content"> <span className="card-title">NOTIFICATIONS</span>
			                                <p>50/62
			                                    <ProgressBar  value={80}></ProgressBar>
			                                    <DropDownButton  className="first-card-item"
			                                    dropDownWidth="auto" placeholder="">
			                                        <Button  className="flat">Action</Button>
			                                        <Button  className="flat">Another action</Button>
			                                        <Button  className="flat">Something else here</Button>
			                                    </DropDownButton>
			                                </p>
			                            </div>
			                            <div className="card-action"> <a href="javascript:void(0)">See details</a>
			                            </div>
			                        </Card>
			                    </div>
			                </div>
			            </div>
			            <div className="smart-grid-layout cards-with-chart">
			                <div className="row">
			                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
			                        <Card  className="basic-card sales">
			                            <div className="card-content"> <span className="card-title">OVERVIEW</span>
			                                <p>Sales value</p>
			                                <Chart {...this.chartProps} id="chart-sales"></Chart>
			                            </div>
			                            <div className="card-action"></div>
			                        </Card>
			                    </div>
			                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
			                        <Card  className="basic-card performance">
			                            <div className="card-content"> <span className="card-title">PERFORMANCE</span>
			                                <p>Total orders</p>
			                                <Chart {...this.chartProps2} id="performance"></Chart>
			                            </div>
			                            <div className="card-action"></div>
			                        </Card>
			                    </div>
			                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
			                        <Card  className="basic-card tasks">
			                            <div className="card-content" style={{paddingBottom: 0}}> <span className="card-title">5/23 PROJECTS</span>
			                                <p>Progress track
			                                    <Button >Action</Button>
			                                </p>
			                            </div>
			                            <div className="card-action">
			                                <div className="progressbar-holder">
			                                    <div className="progress-item bootstrap-design-system">
			                                        <div className="icon">
			                                            <img src="./images/bootstrap.svg" style={{width: '50px'}} />
			                                        </div>
			                                        <div className="progressbar-right-side"> <span className="title">Design System</span>
			                                            <ProgressBar 
			                                            value={80}></ProgressBar>
			                                        </div>
			                                    </div>
			                                    <div className="progress-item angular">
			                                        <div className="icon">
			                                            <img src="./images/angular.svg" style={{width: '40px'}} />
			                                        </div>
			                                        <div className="progressbar-right-side"> <span className="title">Angular Now UI Kit PRO</span>
			                                            <ProgressBar 
			                                            value={80}></ProgressBar>
			                                        </div>
			                                    </div>
			                                    <div className="progress-item black-dshb">
			                                        <div className="icon">
			                                            <img src="./images/sketch.svg" style={{width: '40px'}} />
			                                        </div>
			                                        <div className="progressbar-right-side"> <span className="title">Black Dashboard</span>
			                                            <ProgressBar 
			                                            value={80}></ProgressBar>
			                                        </div>
			                                    </div>
			                                    <div className="progress-item react">
			                                        <div className="icon">
			                                            <img src="./images/react.svg" style={{width: '40px'}} />
			                                        </div>
			                                        <div className="progressbar-right-side"> <span className="title">React Material Dashboard</span>
			                                            <ProgressBar 
			                                            value={80}></ProgressBar>
			                                        </div>
			                                    </div>
			                                    <div className="progress-item vuejs">
			                                        <div className="icon">
			                                            <img src="./images/vuejs.svg" style={{width: '40px'}} />
			                                        </div>
			                                        <div className="progressbar-right-side"> <span className="title">Vue Paper UI Kit PRO</span>
			                                            <ProgressBar 
			                                            value={80}></ProgressBar>
			                                        </div>
			                                    </div>
			                                </div>
			                            </div>
			                        </Card>
			                    </div>
			                </div>
			            </div>
			            <div className="smart-grid-layout grid-sitemap-holder">
			                <div className="row">
			                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
			                        <Card  className="basic-card page-visits">
			                            <div className="card-content"> <span className="card-title">Page visits</span>
			                                <p>
			                                    <Button className="see-all">See all</Button>
			                                    <Grid {...this.gridProps} id="grid-page-visits"></Grid>
			                                </p>
			                            </div>
			                            <div className="card-action"></div>
			                        </Card>
			                    </div>
			                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
			                        <Card  className="basic-card real-time">
			                            <div className="card-content"> <span className="card-title">Real time</span>
			                                <p>
			                                    <Button className="action">Action</Button>
			                                    <div id="map"></div>
			                                    <Grid {...this.gridProps2} id="real-time-grid"></Grid>
			                                </p>
			                            </div>
			                            <div className="card-action"></div>
			                        </Card>
			                    </div>
			                </div>
			            </div>
			            <div className="smart-grid-layout grid-members-holder">
			                <div className="row">
			                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
			                        <Card  className="basic-card team-members">
			                            <div className="card-content"> <span className="card-title">Team members</span>
			                                <p>
			                                    <Grid  {...this.gridProps3} id="team-members-grid"></Grid>
			                                </p>
			                            </div>
			                            <div className="card-action"></div>
			                        </Card>
			                    </div>
			                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
			                        <Card  className="basic-card todo-list">
			                            <div className="card-content"> <span className="card-title">To do list</span>
			                                <p>
			                                    <Grid  {...this.gridProps4} id="todo-list-grid"></Grid>
			                                </p>
			                            </div>
			                            <div className="card-action"></div>
			                        </Card>
			                    </div>
			                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
			                        <Card  className="basic-card tasks">
			                            <div className="card-content">
			                                <p>Progress track</p>
			                            </div>
			                            <div className="card-action">
			                                <div className="progressbar-holder">
			                                    <div className="progress-item bootstrap-design-system">
			                                        <div className="icon">
			                                            <img src="./images/bootstrap.svg" style={{width: '50px'}} />
			                                        </div>
			                                        <div className="progressbar-right-side"> <span className="title">Design System</span>
			                                            <ProgressBar 
			                                            value={80}></ProgressBar>
			                                        </div>
			                                    </div>
			                                    <div className="progress-item angular">
			                                        <div className="icon">
			                                            <img src="./images/angular.svg" style={{width: '40px'}} />
			                                        </div>
			                                        <div className="progressbar-right-side"> <span className="title">Angular Now UI Kit PRO</span>
			                                            <ProgressBar 
			                                            value={80}></ProgressBar>
			                                        </div>
			                                    </div>
			                                    <div className="progress-item black-dshb">
			                                        <div className="icon">
			                                            <img src="./images/sketch.svg" style={{width: '40px'}} />
			                                        </div>
			                                        <div className="progressbar-right-side"> <span className="title">Black Dashboard</span>
			                                            <ProgressBar 
			                                            value={80}></ProgressBar>
			                                        </div>
			                                    </div>
			                                    <div className="progress-item react">
			                                        <div className="icon">
			                                            <img src="./images/react.svg" style={{width: '40px'}} />
			                                        </div>
			                                        <div className="progressbar-right-side"> <span className="title">React Material Dashboard</span>
			                                            <ProgressBar value={80}></ProgressBar>
			                                        </div>
			                                    </div>
			                                </div>
			                            </div>
			                        </Card>
			                    </div>
			                </div>
			            </div>
			        </SplitterItem>
			    </Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
