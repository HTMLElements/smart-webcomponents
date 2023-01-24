import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.splitter = React.createRef();
		this.historyButton = React.createRef();
		this.analyticsButton = React.createRef();
	}

	currentDate = new Date();

	layout = {
		rowHeight: 60
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: [{
			'title': 'Fix mdm encryption cert',
			'author': 'Nancy',
			'buildNum': 10397,
			'status': 'in-progress',
			'branch': 'master',
			'date': this.currentDate
		},
		{
			'title': 'Add mc cert - use rotatable secret for every iteration',
			'author': 'Andrew',
			'buildNum': 10396,
			'status': 'testing',
			'branch': 'develop',
			'date': new Date(this.currentDate - 86400000)
		},
		{
			'title': 'Cleanup auth handlers. Use handlers from the service',
			'author': 'Laura',
			'buildNum': 10395,
			'status': 'done',
			'branch': 'master',
			'date': new Date(this.currentDate - 2 * 86400000 + 3600000 + 600000 + 10000)
		},
		{
			'title': 'Make kusto and admin app optional',
			'author': 'Anne',
			'buildNum': 10394,
			'status': 'warning',
			'branch': 'feature/2-factor-auth',
			'date': new Date(this.currentDate - 4 * 86400000 + 3600000 + 700000 + 20000)
		},
		{
			'title': '[Streaming][Bug] Closing stream before injecting',
			'author': 'Nancy',
			'buildNum': 10392,
			'status': 'done',
			'branch': 'master',
			'date': new Date(this.currentDate - 5 * 86400000 + 3600000 + 900000 + 40000)
		},
		{
			'title': 'Fix deployment arm param',
			'author': 'Andrew',
			'buildNum': 10391,
			'status': 'done',
			'branch': 'master',
			'date': new Date(this.currentDate - 6 * 86400000 + 3600000 + 200000 + 20000)
		},
		{
			'title': '[Streaming] Handling oversized payload by finder',
			'author': 'Andrew',
			'buildNum': 10390,
			'status': 'done',
			'branch': 'feature/some-feature',
			'date': new Date(this.currentDate - 7 * 86400000 + 3600000 + 300000 + 40000)
		},
		{
			'title': 'Fixing RDP bug',
			'author': 'Andrew',
			'buildNum': 10389,
			'status': 'error',
			'branch': 'master',
			'date': new Date(this.currentDate - 9 * 86400000 + 3600000 + 100000 + 10000)
		},
		{
			'title': 'Fix KV URL resolution',
			'author': 'Laura',
			'buildNum': 10388,
			'status': 'done',
			'branch': 'hotfix/view-perf',
			'date': new Date(this.currentDate - 10 * 86400000 + 3600000 + 200000 + 20000)
		},
		{
			'title': 'Fix debug console output when running unit tests',
			'author': 'Anne',
			'buildNum': 10387,
			'status': 'done',
			'branch': 'master',
			'date': new Date(this.currentDate - 19 * 86400000)
		},
		{
			'title': 'Fix mdn encryption cert',
			'author': 'Nancy',
			'buildNum': 10386,
			'status': 'in-progress',
			'branch': 'master',
			'date': new Date(this.currentDate - 25 * 86400000)
		},
		{
			'title': 'KV URL resolution implementation',
			'author': 'Andrew',
			'buildNum': 10385,
			'status': 'error',
			'branch': 'master',
			'date': new Date(this.currentDate - 30 * 86400000)
		},
		{
			'title': 'RDP implementation',
			'author': 'Laura',
			'buildNum': 10384,
			'status': 'warning',
			'branch': 'master',
			'date': new Date(this.currentDate - 37 * 86400000)
		},
		{
			'title': 'RDP implementation',
			'author': 'Laura',
			'buildNum': 10383,
			'status': 'testing',
			'branch': 'master',
			'date': new Date(this.currentDate - 40 * 86400000)
		},
		{
			'title': '[Streaming][Bug] Stream bugfixes',
			'author': 'Nancy',
			'buildNum': 10382,
			'status': 'done',
			'branch': 'master',
			'date': new Date(this.currentDate - 50 * 86400000)
		}
		],
		dataFields: [
			'author: string',
			'title: string',
			'buildNum: string',
			'status: string',
			'branch: string',
			'date: string'
		]
	});
	columns = [{
		label: 'Commit',
		dataField: 'Photo',
		width: '5%',
		cellsVerticalAlign: 'middle',
		verticalAlign: 'middle',
		align: 'center',
		cellsAlign: 'center',
		allowHide: false,
		formatFunction(settings) {
			if (settings.row.grid.isInitialized && settings.row.data && settings.row.data.author) {
				settings.template = '<img style="width: 32px" className="logo" src="https://www.htmlelements.com/demos/images/phonebook/' + settings.row.data.author + '.png"/>';
			}
		}
	},
	{
		label: '',
		dataField: 'author',
		width: '45%',
		formatFunction(settings) {
			settings.template = '<span className="commit-title">' + settings.row.data.title + '</span><span className="author-name">' + settings.row.data.author + '</span>';
		}
	},
	{
		label: '',
		icon: 'fa-thumb-tack',
		width: '5%',
		showIcon: true,
		cellsAlign: 'right',
		align: 'right',
		formatFunction(settings) {
			settings.template = '<span className="custom-icon fa-thumb-tack rotate45deg"></span>';
		}
	},
	{
		label: 'Build #',
		dataField: 'buildNum',
		width: '10%',
		formatFunction(settings) {
			if (settings.row.data.status === 'in-progress') {
				settings.template = '<div className="normal-circle"></div>' + settings.row.data.buildNum;
			} else if (settings.row.data.status === 'done') {
				settings.template = '<div className="custom-icon fa-check-circle"></div>' + settings.row.data.buildNum;
			} else if (settings.row.data.status === 'warning') {
				settings.template = '<div className="custom-icon fa-exclamation-circle"></div>' + settings.row.data.buildNum;
			} else if (settings.row.data.status === 'error') {
				settings.template = '<div className="custom-icon fa-times-circle"></div>' + settings.row.data.buildNum;
			} else if (settings.row.data.status === 'testing') {
				settings.template = '<div className="dashed-circle"></div>' + settings.row.data.buildNum;
			} else {
				settings.template = settings.row.data.buildNum;
			}
		}
	},
	{
		label: 'Branch',
		width: '20%',
		cellsAlign: 'center',
		align: 'center',
		dataField: 'branch'
	},
	{
		label: 'Date/Time',
		dataField: 'date',
		width: '15%',
		align: 'right',
		cellsAlign: 'right',
		formatFunction(settings) {
			const isToday = (someDate) => {
				const today = new Date();
				return someDate.getDate() === today.getDate() &&
					someDate.getMonth() === today.getMonth() &&
					someDate.getFullYear() === today.getFullYear();
			};
			const calculateDaysDifference = (someDate) => {
				const date = new Date();
				return (date - someDate) / (1000 * 60 * 60 * 24);
			};
			let commitDate = new Date(settings.row.data.date);
			if (isToday(commitDate)) {
				settings.template = commitDate.getHours() + ':' + commitDate.getMinutes();
			} else if (calculateDaysDifference(commitDate) <= 6) {
				var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				settings.template = days[commitDate.getDay()] + ', ' + commitDate.getHours() + ':' + commitDate.getMinutes();
			} else {
				let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				settings.template = commitDate.getDate() + ' ' + months[commitDate.getMonth()] + ', ' + commitDate.getHours() + ':' + commitDate.getMinutes();
			}
		}
	}
	];

	handleCollapseBtnClick() {
		const dashboard = this.splitter.current;

		dashboard.update(0, {
			size: 70
		});
		dashboard.nativeElement.removeAttribute('expanded');
		document.querySelector('.company-logo-holder img').style.display = 'none';
		let menuTitles = document.querySelectorAll('.menu-title');
		for (let i = 0; i < menuTitles.length; i++) {
			menuTitles[i].style.display = 'none';
		}
	}

	handleExpandBtnClick() {
		const dashboard = this.splitter.current;

		dashboard.update(0, {
			size: 240
		});
		dashboard.nativeElement.setAttribute('expanded', '');
		document.querySelector('.company-logo-holder img').style.display = 'block';
		let menuTitles = document.querySelectorAll('.menu-title');
		for (let i = 0; i < menuTitles.length; i++) {
			menuTitles[i].style.display = 'block';
		}
	}

	handleHistoryButtonClick() {
		this.historyButton.current.nativeElement.parentNode.classList.add('active');
		this.analyticsButton.current.nativeElement.parentNode.classList.remove('active');
	}

	handleAnalyticsButtonClick() {
		this.analyticsButton.current.nativeElement.parentNode.classList.add('active');
		this.historyButton.current.nativeElement.parentNode.classList.remove('active');
	}

	init() {
		this.splitter.current.hideBar(0);
		this.splitter.current.nativeElement.setAttribute('expanded', '');
	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Splitter ref={this.splitter} id="dashboard" expanded>
					<SplitterItem collapsible id="leftPanel" size="240">
						<div className="dashboard-header">
							<div className="company-logo-holder">
								<img style={{ height: '34px' }} src="https://www.htmlelements.com/wp-content/design/assets/images/logo-htmlelements.svg" />
							</div>
							<Button id="collapseBtn" className="floating"
								onClick={this.handleCollapseBtnClick.bind(this)}> <i className="material-icons">chevron_left</i>
							</Button>
							<Button id="expandBtn" className="floating"
								onClick={this.handleExpandBtnClick.bind(this)}> <i className="material-icons">menu</i>
							</Button>
						</div>
						<div className="dashboard-menu-container">
							<Button className="flat menu-btn bold"><i className="material-icons">dashboard</i><span className="menu-title">Software Company</span>
							</Button>
							<Button className="flat menu-btn"><i className="material-icons">apps</i><span className="menu-title">Overview</span>
							</Button>
							<Button className="flat menu-btn"><i className="material-icons">apps</i><span className="menu-title">Boards</span>
							</Button>
							<Button className="flat menu-btn"><i className="material-icons">merge_type</i><span className="menu-title">Repos</span>
							</Button>
							<Button className="flat menu-btn"><i className="material-icons">timeline</i><span className="menu-title">Pipelines</span>
							</Button>
							<Button className="flat menu-btn"><i className="material-icons rotate90deg">input</i><span className="menu-title">Builds</span>
							</Button>
							<Button className="flat menu-btn"><i className="material-icons">publish</i><span className="menu-title">Releases</span>
							</Button>
							<Button className="flat menu-btn"><i className="material-icons">library_books</i><span className="menu-title">Library</span>
							</Button>
							<Button className="flat menu-btn"><i className="material-icons">group_work</i><span className="menu-title">Deployment groups</span>
							</Button>
							<Button className="flat menu-btn"><i className="material-icons">developer_mode</i><span className="menu-title">Test Plans</span>
							</Button>
							<Button className="flat menu-btn"><i className="material-icons">filter_none</i><span className="menu-title">Artifacts</span>
							</Button>
						</div>
					</SplitterItem>
					<SplitterItem id="rightPanel">
						<div className="dashboard-header">
							<span className="breadcrumb-header">Project / Software Company / Pipelines / Builds</span>
							<span className="icon-holder">
								<Button id="notifficationSearchBtn"><i className="material-icons">search</i></Button>
								<Button id="notifficationSearchBtn">
									<i className="material-icons">menu</i>
								</Button>

								<Button id="notifficationBtn">

									<i className="material-icons">shopping_basket</i>

								</Button>

								<img style={{ width: '32px', height: '32px' }} className="header-logo" src="https://www.htmlelements.com/demos/images/phonebook/nancy.png" />

							</span>
						</div>
						<h1 className="main-company-name">Software Company</h1>
						<div className="header-right-buttons">
							<Button > <i className="material-icons">edit</i>  <span className="button-text">Edit</span>
							</Button>
							<Button className="run"> <i className="material-icons">play_arrow</i>  <span className="button-text">Run</span>
							</Button>
							<Button className="transparent-bck"> <i className="material-icons vertical-align-middle more-horiz">more_horiz</i>
							</Button>
						</div>
						<div className="history-holder">
							<h4 className="subtitles active">
								<Button ref={this.historyButton} onClick={this.handleHistoryButtonClick.bind(this)}>History</Button>
							</h4>
							<h4 className="subtitles">
								<Button ref={this.analyticsButton} onClick={this.handleAnalyticsButtonClick.bind(this)}>Analytics</Button>
							</h4>
							<div className="filter-right-button">
								<Button className="transparent-bck"><i className="material-icons vertical-align-middle filter">filter_list</i></Button>
							</div>
						</div>
						<Grid id="grid"
							layout={this.layout}
							dataSource={this.dataSource}
							columns={this.columns}></Grid>
					</SplitterItem>
				</Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
