import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Card } from 'smart-webcomponents-react/card';
import { Chart } from 'smart-webcomponents-react/chart';
import { Grid, Smart } from 'smart-webcomponents-react/grid';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.splitter = React.createRef();
		this.logo = React.createRef();
	}

	collapseMenuInSmallScreens() {
		if (document.documentElement.offsetWidth && document.documentElement.offsetWidth <= 860) {
			this.collapseLeftMenu();
		}
		else {
			this.expandLeftMenu();
		}
	}

	collapseLeftMenu() {
		const dashboard = this.splitter.current
		const logo = this.logo.current;

		dashboard.update(0, {
			size: 70
		});
		dashboard.nativeElement.removeAttribute('expanded');
		logo.style.display = 'none';
	}

	expandLeftMenu() {
		const dashboard = this.splitter.current
		const logo = this.logo.current;

		dashboard.update(0, {
			size: 240
		});
		dashboard.nativeElement.setAttribute('expanded', '');
		logo.style.display = 'inline';
	}

	// Monthly Sales - Chart
	sampleDataSales = [{
		Month: 'Jan',
		value: 10
	},
	{
		Month: 'Feb',
		value: 15
	},
	{
		Month: 'Mar',
		value: 8
	},
	{
		Month: 'Apr',
		value: 12
	},
	{
		Month: 'May',
		value: 16
	},
	{
		Month: 'Jun',
		value: 20
	},
	{
		Month: 'Jul',
		value: 16
	},
	{
		Month: 'Aug',
		value: 22
	},
	{
		Month: 'Sep',
		value: 27
	},
	{
		Month: 'Oct',
		value: 24
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
		backgroundColor: '#55ae59',
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
		dataSource: this.sampleDataSales,
		colorScheme: 'scheme32',
		xAxis: {
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
		},
		clip: false,
		valueAxis: {
			visible: true,
			title: {
				text: ' '
			},
			tickMarks: {
				color: '#BCBCBC'
			},
			unitInterval: 10,
			maxValue: 40
		},
		seriesGroups: [{
			type: 'line',
			valueAxis: {
				displayValueAxis: false,
			},
			series: [{
				dataField: 'value',
				displayText: 'Sales',
				fillColor: 'white'
			},]
		}]
	};

	// Email Subscriptions - Chart
	sampleDataSubscriptions = [{
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
		value: 66
	},
	];

	chartProsp2 = {
		animationDuration: 1000,
		backgroundColor: '#fd9811',
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
		dataSource: this.sampleDataSubscriptions,
		xAxis: {
			dataField: 'Day',
			gridLines: {
				visible: true
			}
		},
		seriesGroups: [{
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
			series: [{
				dataField: 'value',
				displayText: 'Subscriptions',
				fillColor: 'white'
			},]
		}]
	};

	// Completed Tasks - Chart
	sampleDataTasks = [{
		Time: '12am',
		value: 200
	},
	{
		Time: '3pm',
		value: 600
	},
	{
		Time: '6pm',
		value: 720
	},
	{
		Time: '9pm',
		value: 480
	},
	{
		Time: '12pm',
		value: 360
	},
	{
		Time: '3am',
		value: 440
	},
	{
		Time: '6am',
		value: 400
	},
	{
		Time: '9am',
		value: 320
	},
	];

	chartProps3 = {
		animationDuration: 1200,
		backgroundColor: '#e9433f',
		colorScheme: 'scheme01',
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
		dataSource: this.sampleDataTasks,
		xAxis: {
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
		},
		clip: false,
		valueAxis: {
			visible: true,
			title: {
				text: ''
			},
			tickMarks: {
				color: '#BCBCBC'
			},
			unitInterval: 10,
			maxValue: 40
		},
		seriesGroups: [{
			type: 'line',
			valueAxis: {
				displayValueAxis: false,
			},
			series: [{
				dataField: 'value',
				displayText: 'Sales',
				fillColor: 'white'
			},]
		}]
	};

	// Bugs - Tab & Grid
	bugsData = [{
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

	gridProps = {
		layout: {
			rowHeight: 45
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.bugsData,
			dataFields: [
				'id: number',
				'text: string',
			]
		}),
		selection: {
			enabled: true,
			checkBoxes: {
				enabled: true
			}
		},
		columns: [{
			label: 'Pending bugs',
			dataField: 'text'
		},]
	};

	// Website - Tab & Grid
	websiteData = [{
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

	gridProps2 = {
		layout: {
			rowHeight: 45
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.websiteData,
			dataFields: [
				'id: number',
				'text: string',
			]
		}),
		selection: {
			enabled: true,
			checkBoxes: {
				enabled: true
			}
		},
		columns: [{
			label: 'Website tasks',
			dataField: 'text'
		},]
	};

	// Server - Tab & Grid
	serverData = [{
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

	gridProps3 = {
		layout: {
			rowHeight: 45
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.serverData,
			dataFields: [
				'id: number',
				'text: string',
			]
		}),
		selection: {
			enabled: true,
			checkBoxes: {
				enabled: true
			}
		},
		columns: [{
			label: 'Server  tasks',
			dataField: 'text'
		},]
	};

	// Salary - Grid
	salaryData = [{
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

	gridProps4 = {
		layout: {
			rowHeight: 45
		},
		sorting: {
			enabled: true
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.salaryData,
			dataFields: [
				'id: number',
				'name: string',
				'salary: string',
				'country: string'
			]
		}),
		columns: [{
			label: 'ID',
			dataField: 'id',
			cellsAlign: 'center',
			align: 'center'
		},
		{
			label: 'Name',
			dataField: 'name',
			cellsAlign: 'center',
			align: 'center'
		},
		{
			label: 'Salary',
			dataField: 'salary',
			cellsAlign: 'center',
			align: 'center'
		},
		{
			label: 'Country',
			dataField: 'country',
			cellsAlign: 'center',
			align: 'center'
		},
		]
	}

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
							<Button onClick={this.collapseLeftMenu.bind(this)} id="collapseBtn" className="floating"> <i className="material-icons">chevron_left</i>
							</Button>
							<Button onClick={this.expandLeftMenu.bind(this)} id="expandBtn" className="floating"> <i className="material-icons">menu</i>
							</Button>
						</div>
						<div className="dashboard-menu-container">
							<Button className="flat menu-btn"><i className="material-icons">view_quilt</i>Dashboard</Button>
							<Button
								className="flat menu-btn"><i className="material-icons">person</i>User Profile</Button>
							<Button
								className="flat menu-btn"><i className="material-icons">list_alt</i>Table List</Button>
							<Button
								className="flat menu-btn"><i className="material-icons">view_list</i>Typography</Button>
							<Button
								className="flat menu-btn"><i className="material-icons">hdr_strong</i>Icons</Button>
							<Button className="flat menu-btn"><i className="material-icons">map</i>Maps</Button>
							<Button className="flat menu-btn"><i className="material-icons">notifications</i>Notifications</Button>
							<Button
								className="flat menu-btn"><i className="material-icons">language</i>RTL Support</Button>
						</div>
					</SplitterItem>
					<SplitterBar className="smart-hidden"></SplitterBar>
					<SplitterItem id="rightPanel">
						<div className="dashboard-header">Dashboard
			                <div className="floating">
								<Button id="normalBtn"> <i className="material-icons">person</i>
								</Button>
								<Button id="notifficationBtn"> <i className="material-icons">notifications</i>
								</Button>
								<Button id="normalBtn2"> <i className="material-icons">view_quilt</i>
								</Button>
								<Button id="borderedBtn"> <i className="material-icons">search</i>
								</Button>
							</div>
						</div>
						<br />
						<div className="smart-grid-layout">
							<div className="row">
								<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
									<Card className="basic-card storage">
										<div className="card-content"> <span className="icon-holder">

											<i className="material-icons">sd_storage</i>

										</span>
											<span className="card-title">Used Space</span>
											<p>49/50 GB</p>
										</div>
										<div className="card-action"> <a href="javascript:void(0)"><i className="material-icons warning">warning</i>&nbsp;Get more space</a>
										</div>
									</Card>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
									<Card className="basic-card revenue">
										<div className="card-content"> <span className="icon-holder">

											<i className="material-icons">home</i>

										</span>
											<span className="card-title">Revenue</span>
											<p>$34,245</p>
										</div>
										<div className="card-action"> <a href="javascript:void(0)"><i className="material-icons warning">calendar_today</i>&nbsp;Last 24 Hours</a>
										</div>
									</Card>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
									<Card className="basic-card issues">
										<div className="card-content"> <span className="icon-holder">

											<i className="material-icons">info</i>

										</span>
											<span className="card-title">Fixed Issues</span>
											<p>75</p>
										</div>
										<div className="card-action"> <a href="javascript:void(0)"><i className="material-icons warning">label</i>&nbsp;Tracked from Github</a>
										</div>
									</Card>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
									<Card className="basic-card followers">
										<div className="card-content"> <span className="icon-holder">

											<i className="material-icons">people</i>

										</span>
											<span className="card-title">Followers</span>
											<p>+245</p>
										</div>
										<div className="card-action"> <a href="javascript:void(0)"><i className="material-icons warning">loop</i>&nbsp;Just Updated</a>
										</div>
									</Card>
								</div>
							</div>
						</div>
						<br />
						<div className="smart-grid-layout">
							<div className="row">
								<div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
									<Card className="basic-card with-chart subscription">
										<div className="card-content">
											<Chart {...this.chartProps} id="chart-monthly-sales"></Chart> <span className="card-title">Monthly Sales</span>
											<p> <span className="percentage"><i className="material-icons">arrow_upward</i>55%</span> increase
			                                    in today sales.</p>
										</div>
										<div className="card-action"> <a href="javascript:void(0)"><i className="material-icons warning">loop</i>&nbsp;updated 4 days ago</a>
										</div>
									</Card>
								</div>
								<div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
									<Card className="basic-card with-chart subscription">
										<div className="card-content">
											<Chart {...this.chartProsp2} id="chart-email-subscriptions"></Chart> <span className="card-title">Email Subscriptions</span>
											<p>Last Campaign Performance</p>
										</div>
										<div className="card-action"> <a href="javascript:void(0)"><i className="material-icons warning">loop</i>&nbsp;campaign sent 2 minutes ago</a>
										</div>
									</Card>
								</div>
								<div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
									<Card className="basic-card with-chart tasks">
										<div className="card-content">
											<Chart {...this.chartProps3} id="chart-completed-tasks"></Chart> <span className="card-title">Completed Tasks</span>
											<p>Last Campaign Performance</p>
										</div>
										<div className="card-action"> <a href="javascript:void(0)">

											<i className="material-icons warning">loop</i>&nbsp;campaign sent 2 days ago

			                                </a>
										</div>
									</Card>
								</div>
							</div>
						</div>
						<div className="smart-grid-layout">
							<div className="row">
								<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
									<Tabs className="demoTabs" selectedIndex={1} style={{width: '100%', height: '324px'}}>
										<TabItem label="Bugs">
											<Grid {...this.gridProps} id="grid-bugs" style={{width: '100%', height: 'auto'}}></Grid>
										</TabItem>
										<TabItem label="Website">
											<Grid {...this.gridProps2} id="grid-website" style={{width: '100%', height: 'auto'}}></Grid>
										</TabItem>
										<TabItem label="Server">
											<Grid {...this.gridProps3} id="grid-server" style={{width: '100%', height: 'auto'}}></Grid>
										</TabItem>
									</Tabs>
								</div>
								<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
									<div className="grid-holder">
										<p className="header"> <span className="title">Employees Stats</span>
											<span className="description">New employees on 15th September, 2016</span>
										</p>
										<Grid {...this.gridProps4} id="grid-salary"></Grid>
									</div>
								</div>
							</div>
						</div>
					</SplitterItem>
				</Splitter>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
