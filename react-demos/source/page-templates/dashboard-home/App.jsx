import React from "react";
import ReactDOM from "react-dom";
import { Grid, Smart, DataAdapter } from "smart-webcomponents-react/grid";
import { Chart } from "smart-webcomponents-react/chart";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';
import { Card } from 'smart-webcomponents-react/card';
import { Button } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.expandbtn = React.createRef();
		this.collapsebtn = React.createRef();
		this.splitter = React.createRef();
		this.logo = React.createRef();
	}

	customerLifeTimeData = [{
		company: "Amazon",
		value: 40000
	},
	{
		company: "Apple",
		value: 120000
	},
	{
		company: "Google",
		value: 220000
	},
	{
		company: "Microsoft",
		value: 400000
	},
	{
		company: "Oracle",
		value: 180000
	},
	{
		company: "Tesla",
		value: 400000
	},
	{
		company: "Twitter",
		value: 200000
	},
	{
		company: "Yahoo",
		value: 180000
	}
	];

	chartProps = {
		caption: 'Customer life time value',
		description: '',
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
		backgroundColor: '#5D727B',
		showBorderLine: false,
		showLegend: false,
		dataSource: this.customerLifeTimeData,
		xAxis: {
			dataField: 'company',
			gridLines: {
				visible: false
			}
		},
		seriesGroups: [{
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
			series: [{
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
			},]
		}]
	};

	revenueData = [{
		month: "September",
		value: 200000
	},
	{
		month: "October",
		value: 220000
	},
	{
		month: "November",
		value: 50000
	},
	{
		month: "December",
		value: 50000
	},
	{
		month: "2019",
		value: 200000
	}
	];

	chartProps2 = {
		caption: 'Revenue',
		description: '',
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
		backgroundColor: '#5D727B',
		showBorderLine: false,
		showLegend: false,
		dataSource: this.revenueData,
		xAxis: {
			dataField: 'month'
		},
		seriesGroups: [{
			type: 'splinearea',
			valueAxis: {
				minValue: 0,
				maxValue: 210000,
				unitInterval: 100000,
				displayValueAxis: true,
				axisSize: 'auto',
				tickMarksColor: '#888888'
			},
			series: [{
				dataField: 'value'
			}]
		}]
	};

	revenueByEmployeeData = [{
		name: "John Doe",
		value: 1100000
	},
	{
		name: "Jane Smith",
		value: 600000
	}
	];

	chartProps3 = {
		caption: 'Revenue by employee',
		description: '',
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
		backgroundColor: '#5D727B',
		showBorderLine: false,
		showLegend: false,
		dataSource: this.revenueByEmployeeData,
		xAxis: {
			dataField: 'name'
		},
		seriesGroups: [{
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
			series: [{
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
			},]
		}]
	};

	opportunitiesData = [{
		contact: 'Shelley Burke',
		amount: 150000,
		status: 'Inactive',
		closeDate: new Date(2020, 1, 20)
	},
	{
		contact: 'Guylene Nodier',
		amount: 55000,
		status: 'Won',
		closeDate: new Date(2020, 0, 29)
	},
	{
		contact: 'Yoshi Winkler',
		amount: 200000,
		status: 'Active',
		closeDate: new Date(2020, 0, 18)
	},
	{
		contact: 'Peter Murphy',
		amount: 400000,
		status: 'Active',
		closeDate: new Date(2020, 0, 16)
	},
	{
		contact: 'Martin Vileid',
		amount: 150000,
		status: 'Won',
		closeDate: new Date(2020, 0, 16)
	},
	{
		contact: 'Nancy Peterson',
		amount: 200000,
		status: 'Lost',
		closeDate: new Date(2020, 0, 3)
	},
	{
		contact: 'Yoshi Nagase',
		amount: 60000,
		status: 'Won',
		closeDate: new Date(2019, 11, 19)
	},
	{
		contact: 'Andrew Winkler',
		amount: 56000,
		status: 'Won',
		closeDate: new Date(2019, 10, 14)
	},
	{
		contact: 'Nancy Bjorn',
		amount: 190000,
		status: 'Won',
		closeDate: new Date(2019, 9, 30)
	},
	{
		contact: 'Elio Saylor',
		amount: 32000,
		status: 'Won',
		closeDate: new Date(2019, 9, 16)
	}
	];

	gridProps = {
		selection: {
			enabled: true,
			allowRowSelection: true,
			mode: 'one'
		},
		appearance: {
			alternationCount: 2
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.opportunitiesData,
			dataFields: [
				'contact: string',
				'amount: number',
				'status: string',
				'closeDate: date'
			]
		}),
		columns: [{
			label: 'Contact',
			dataField: 'contact'
		},
		{
			label: 'Amount',
			dataField: 'amount',
			cellsFormat: 'c2',
			formatFunction(settings) {
				settings.value = '$' + new Number(settings.value).toFixed(2);
			}
		},
		{
			label: 'Status',
			dataField: 'status'
		},
		{
			label: 'Close Date',
			dataField: 'closeDate',
			cellsFormat: 'MMM d, yyyy'
		}
		]
	};

	activeTasksData = [{
		employee: 'Jane Smith',
		title: 'Introduction and product description',
		opportunity: 'Tesla Partnership',
		dueDate: new Date(2020, 0, 31)
	},
	{
		employee: 'John Doe',
		title: 'Discuss product advantages',
		opportunity: 'Oracle New Deal',
		dueDate: new Date(2020, 9, 30)
	},
	{
		employee: 'John Doe',
		title: 'Reminder call',
		opportunity: 'Microsoft Renewal Offer',
		dueDate: new Date(2020, 0, 25)
	},
	{
		employee: 'John Doe',
		title: 'Introduction call',
		opportunity: 'Oracle New Deal',
		dueDate: new Date(2020, 0, 23)
	},
	{
		employee: 'John Doe',
		title: 'Happy New Year Mail',
		opportunity: 'Microsoft Renewal Offer',
		dueDate: new Date(2020, 0, 7)
	}
	];

	gridProps2 = {
		selection: {
			enabled: true,
			allowRowSelection: true,
			mode: 'one'
		},
		appearance: {
			alternationCount: 2
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.activeTasksData,
			dataFields: [
				'employee: string',
				'title: string',
				'opportunity: string',
				'dueDate: date'
			]
		}),
		columns: [{
			label: 'Employee',
			dataField: 'employee'
		},
		{
			label: 'Title',
			dataField: 'title'
		},
		{
			label: 'Opportunity',
			dataField: 'opportunity'
		},
		{
			label: 'Due Date',
			dataField: 'dueDate',
			cellsFormat: 'MMM d, yyyy'
		}
		]
	};

	handleExpand() {
		this.expandLeftMenu();
	}

	handleCollapse() {
		this.collapseLeftMenu();
	}

	collapseLeftMenu() {
		const dashboard = this.splitter.current;
		const logo = this.logo.current;

		dashboard.update(0, {
			size: 50
		});
		dashboard.nativeElement.removeAttribute('expanded');
		logo.style.display = 'none';
	}

	expandLeftMenu() {
		const dashboard = this.splitter.current;
		const logo = this.logo.current;

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

	init() {
		window.onresize = () => this.collapseMenuInSmallScreens();
		this.collapseMenuInSmallScreens();
	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (<div>
			<Splitter ref={this.splitter} id="dashboard" expanded>
				<SplitterItem id="leftPanel">
					<div className="dashboard-header">
						<img ref={this.logo} src="https://www.htmlelements.com/wp-content/design/assets/images/logo-htmlelements.svg" className="smart-logo" />
						<Button onClick={this.handleCollapse.bind(this)} ref={this.collapseBtn} id="collapseBtn" className="floating">
							<i className="material-icons">chevron_left</i>
						</Button>
						<Button onClick={this.handleExpand.bind(this)} ref={this.expandbtn} id="expandBtn" className="floating">
							<i className="material-icons">menu</i>
						</Button>
					</div>

					<div className="dashboard-menu-container">
						<Button className="flat menu-btn">
							<i className="material-icons">view_quilt</i>Contacts</Button>
						<Button className="flat menu-btn">
							<i className="material-icons">person</i>Opportunities</Button>
						<Button className="flat menu-btn">
							<i className="material-icons">list_alt</i>Opportunity Statuses</Button>
						<Button className="flat menu-btn">
							<i className="material-icons">view_list</i>Tasks</Button>
						<Button className="flat menu-btn">
							<i className="material-icons">hdr_strong</i>Task Statuses</Button>
						<Button className="flat menu-btn">
							<i className="material-icons">map</i>Task Types</Button>
						<Button className="flat menu-btn">
							<i className="material-icons">notifications</i>Home</Button>
						<Button className="flat menu-btn">
							<i className="material-icons">language</i>RTL Support</Button>
					</div>
				</SplitterItem>
				<SplitterBar className="smart-hidden"></SplitterBar>
				<SplitterItem id="rightPanel">
					<div className="dashboard-header"></div>
					<div id="cards-container">
						<div>
							<Card className="basic-card storage">
								<div className="card-content revenue">
									<div>
										<span className="icon-holder">
											<i className="material-icons">attach_money</i>
										</span>
										<div className="titles">
											<span className="card-title">Revenue</span>
											<span className="card-subtitle">Last month</span>
										</div>
									</div>
									<div className="value">$205,000.00</div>
								</div>
							</Card>
						</div>
						<div>
							<Card className="basic-card storage">
								<div className="card-content opportunities">
									<div>
										<span className="icon-holder">
											<i className="material-icons">shopping_cart</i>
										</span>
										<div className="titles">
											<span className="card-title">Opportunities</span>
											<span className="card-subtitle">Last month</span>
										</div>
									</div>
									<div className="value">2</div>
								</div>
							</Card>
						</div>
						<div>
							<Card className="basic-card storage">
								<div className="card-content balance">
									<div>
										<span className="icon-holder">
											<i className="material-icons">account_balance_wallet</i>
										</span>
										<div className="titles">
											<span className="card-title">Average Deal Size</span>
											<span className="card-subtitle">Last month</span>
										</div>
									</div>
									<div className="value">102500</div>
								</div>
							</Card>
						</div>
						<div>
							<Card className="basic-card storage">
								<div className="card-content win-rate">
									<div>
										<span className="icon-holder">
											<i className="material-icons">thumb_up</i>
										</span>
										<div className="titles">
											<span className="card-title">Win Rate</span>
											<span className="card-subtitle">Last month</span>
										</div>
									</div>
									<div className="value">64%</div>
								</div>
							</Card>
						</div>
					</div>
					<div id="charts-container">
						<Chart {...this.chartProps} id="customerLifeTime"></Chart>
						<Chart {...this.chartProps2} id="revenue"></Chart>
						<Chart {...this.chartProps3} id="revenueByEmployee"></Chart>
					</div>
					<div id="grids-container">
						<div>
							<h3>Opportunities</h3>
							<Grid {...this.gridProps} id="opportunities"></Grid>
						</div>
						<div>
							<h3>Active Tasks</h3>
							<Grid {...this.gridProps2} id="activeTasks"></Grid>
						</div>
					</div>
				</SplitterItem>
			</Splitter>
		</div>);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
