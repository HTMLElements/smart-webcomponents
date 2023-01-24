import React from "react";
import ReactDOM from "react-dom";
import { Grid, Smart, DataAdapter } from "smart-webcomponents-react/grid";
import { Chart } from "smart-webcomponents-react/chart";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';
import { Menu, MenuItem } from 'smart-webcomponents-react/menu';
import { Button } from 'smart-webcomponents-react/button';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { Window } from 'smart-webcomponents-react/window';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.splitter = React.createRef();
		this.expandbtn = React.createRef();
		this.collapsebtn = React.createRef();
		this.menutitle = React.createRef();
		this.menutitle2 = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.chartcontainer = React.createRef();
		this.gridcontainer = React.createRef();
		this.grid = React.createRef();
		this.grid2 = React.createRef();
		this.window = React.createRef();
		this.window2 = React.createRef();
		this.window3 = React.createRef();
		this.window4 = React.createRef();
		this.window5 = React.createRef();
		this.newWindow = React.createRef();
		this.supplies = React.createRef();
		this.current = React.createRef();
		this.menu = React.createRef();
		this.logo = React.createRef();

		this.contextMenuOpenedOn = {
			grid: null,
			rowId: null
		};


	}

	date = new Date();

	localData = [{
		'title': 'Fix mdm encryption cert (1)',
		'author': 'Nancy',
		'buildNum': 10314,
		'status': 'in-progress',
		'branch': 'master',
		'date': this.date
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
		'date': new Date(this.date - 2 * 86400000 + 3600000 + 600000 + 10000)
	},
	{
		'title': 'Make kusto and admin app optional (1)',
		'author': 'Anne',
		'buildNum': 10409,
		'status': 'warning',
		'branch': 'feature/2-factor-auth',
		'date': new Date(this.date - 4 * 86400000 + 3600000 + 700000 + 20000)
	},
	{
		'title': '[Streaming][Bug] Closing stream before injecting (1)',
		'author': 'Nancy',
		'buildNum': 10408,
		'status': 'done',
		'branch': 'master',
		'date': new Date(this.date - 5 * 86400000 + 3600000 + 900000 + 40000)
	},
	{
		'title': 'Fix deployment arm param (1)',
		'author': 'Andrew',
		'buildNum': 10407,
		'status': 'done',
		'branch': 'master',
		'date': new Date(this.date - 6 * 86400000 + 3600000 + 200000 + 20000)
	},
	{
		'title': '[Streaming] Handling oversized payload by finder (1)',
		'author': 'Andrew',
		'buildNum': 10406,
		'status': 'done',
		'branch': 'feature/some-feature',
		'date': new Date(this.date - 7 * 86400000 + 3600000 + 300000 + 40000)
	},
	{
		'title': 'Fixing RDP bug (1)',
		'author': 'Andrew',
		'buildNum': 10405,
		'status': 'error',
		'branch': 'master',
		'date': new Date(this.date - 9 * 86400000 + 3600000 + 100000 + 10000)
	},
	{
		'title': 'Fix KV URL resolution (1)',
		'author': 'Laura',
		'buildNum': 10404,
		'status': 'done',
		'branch': 'hotfix/view-perf',
		'date': new Date(this.date - 10 * 86400000 + 3600000 + 200000 + 20000)
	},
	{
		'title': 'Fix debug console output when running unit tests (1)',
		'author': 'Anne',
		'buildNum': 10403,
		'status': 'done',
		'branch': 'master',
		'date': new Date(this.date - 19 * 86400000)
	},
	{
		'title': 'Fix mdn encryption cert (1)',
		'author': 'Nancy',
		'buildNum': 10402,
		'status': 'in-progress',
		'branch': 'master',
		'date': new Date(this.date - 25 * 86400000)
	},
	{
		'title': 'KV URL resolution implementation (1)',
		'author': 'Andrew',
		'buildNum': 10401,
		'status': 'error',
		'branch': 'master',
		'date': new Date(this.date - 30 * 86400000)
	},
	{
		'title': 'RDP implementation (1)',
		'author': 'Laura',
		'buildNum': 10400,
		'status': 'warning',
		'branch': 'master',
		'date': new Date(this.date - 37 * 86400000)
	},
	{
		'title': 'RDP implementation (1)',
		'author': 'Laura',
		'buildNum': 10399,
		'status': 'testing',
		'branch': 'master',
		'date': new Date(this.date - 40 * 86400000)
	},
	{
		'title': '[Streaming][Bug] Stream bugfixes (1)',
		'author': 'Nancy',
		'buildNum': 10398,
		'status': 'done',
		'branch': 'master',
		'date': new Date(this.date - 50 * 86400000)
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
		'date': new Date(this.date - 2 * 86400000 + 3600000 + 600000 + 10000)
	},
	{
		'title': 'Make kusto and admin app optional',
		'author': 'Anne',
		'buildNum': 10394,
		'status': 'warning',
		'branch': 'feature/2-factor-auth',
		'date': new Date(this.date - 4 * 86400000 + 3600000 + 700000 + 20000)
	},
	{
		'title': '[Streaming][Bug] Closing stream before injecting',
		'author': 'Nancy',
		'buildNum': 10392,
		'status': 'done',
		'branch': 'master',
		'date': new Date(this.date - 5 * 86400000 + 3600000 + 900000 + 40000)
	},
	{
		'title': 'Fix deployment arm param',
		'author': 'Andrew',
		'buildNum': 10391,
		'status': 'done',
		'branch': 'master',
		'date': new Date(this.date - 6 * 86400000 + 3600000 + 200000 + 20000)
	},
	{
		'title': '[Streaming] Handling oversized payload by finder',
		'author': 'Andrew',
		'buildNum': 10390,
		'status': 'done',
		'branch': 'feature/some-feature',
		'date': new Date(this.date - 7 * 86400000 + 3600000 + 300000 + 40000)
	},
	{
		'title': 'Fixing RDP bug',
		'author': 'Andrew',
		'buildNum': 10389,
		'status': 'error',
		'branch': 'master',
		'date': new Date(this.date - 9 * 86400000 + 3600000 + 100000 + 10000)
	},
	{
		'title': 'Fix KV URL resolution',
		'author': 'Laura',
		'buildNum': 10388,
		'status': 'done',
		'branch': 'hotfix/view-perf',
		'date': new Date(this.date - 10 * 86400000 + 3600000 + 200000 + 20000)
	},
	{
		'title': 'Fix debug console output when running unit tests',
		'author': 'Anne',
		'buildNum': 10387,
		'status': 'done',
		'branch': 'master',
		'date': new Date(this.date - 19 * 86400000)
	},
	{
		'title': 'Fix mdn encryption cert',
		'author': 'Nancy',
		'buildNum': 10386,
		'status': 'in-progress',
		'branch': 'master',
		'date': new Date(this.date - 25 * 86400000)
	},
	{
		'title': 'KV URL resolution implementation',
		'author': 'Andrew',
		'buildNum': 10385,
		'status': 'error',
		'branch': 'master',
		'date': new Date(this.date - 30 * 86400000)
	},
	{
		'title': 'RDP implementation',
		'author': 'Laura',
		'buildNum': 10384,
		'status': 'warning',
		'branch': 'master',
		'date': new Date(this.date - 37 * 86400000)
	},
	{
		'title': 'RDP implementation',
		'author': 'Laura',
		'buildNum': 10383,
		'status': 'testing',
		'branch': 'master',
		'date': new Date(this.date - 40 * 86400000)
	},
	{
		'title': '[Streaming][Bug] Stream bugfixes',
		'author': 'Nancy',
		'buildNum': 10382,
		'status': 'done',
		'branch': 'master',
		'date': new Date(this.date - 50 * 86400000)
	}
	];

	dataSource = this.localData.map((item) => item.author);

	handleExpand() {
		const dashboard = this.splitter.current;

		dashboard.update(0, {
			size: 240
		});
		dashboard.nativeElement.setAttribute('expanded', '');

		this.logo.current.style.display = 'block';

		let menuTitles = [this.menutitle.current, this.menutitle2.current];

		for (let i = 0; i < menuTitles.length; i++) {
			menuTitles[i].style.display = 'block';
		}
	}

	handleCollapse() {
		const dashboard = this.splitter.current;

		dashboard.update(0, {
			size: 70
		});
		dashboard.nativeElement.removeAttribute('expanded');

		this.logo.current.style.display = 'none';

		let menuTitles = [this.menutitle.current, this.menutitle2.current];

		for (let i = 0; i < menuTitles.length; i++) {
			menuTitles[i].style.display = 'none';
		}
	}

	handleChartButton() {
		const chartButton = this.button.current.nativeElement;
		const gridButton = this.button2.current.nativeElement;

		gridButton.classList.remove('bold');
		chartButton.classList.add('bold');
		chartButton.removeAttribute('focus');
		this.chartcontainer.current.style.display = 'block';
		this.gridcontainer.current.style.display = 'none';
	}

	handleGridButton() {
		const chartButton = this.button.current.nativeElement;
		const gridButton = this.button2.current.nativeElement;
		const gridContainer = this.gridcontainer.current;

		chartButton.classList.remove('bold');
		gridButton.classList.add('bold');
		gridButton.removeAttribute('focus');

		if (gridContainer.style.display === 'none') {
			this.chartcontainer.current.style.display = 'none';
			gridContainer.style.display = 'block';
			this.grid.current.nativeElement.style.display = 'none';
			this.grid2.current.nativeElement.style.display = 'none';
			this.openFilterWindow();
		}
	}

	handleClose(event) {
		if (event.target instanceof Smart.DropDownList) {
			return;
		}

		this.grid.current.nativeElement.style.display = 'block';
	}

	handleClose2() {
		this.grid2.current.nativeElement.style.display = 'block';
	}

	handleConfirm() {
		this.grid.current.nativeElement.style.display = 'block';
		this.filterGrid(this.grid.current, this.window.current.nativeElement);
	}

	handleReadyWindow() {
		const suppliesPurchasesFilterWindow = this.window.current.nativeElement;

		suppliesPurchasesFilterWindow.querySelector('.smart-footer .smart-confirm-button')
			.addEventListener('click', this.handleConfirm.bind(this));

		suppliesPurchasesFilterWindow.querySelector('.smart-footer .smart-cancel-button')
			.addEventListener('click', () => suppliesPurchasesFilterWindow.close());
	}

	handleReadyWindow2() {
		const currentOrdersFilterWindow = this.window2.current.nativeElement;

		currentOrdersFilterWindow.querySelector('.smart-footer .smart-confirm-button')
			.addEventListener('click', () => this.filterGrid(this.grid2.current, currentOrdersFilterWindow));
		currentOrdersFilterWindow.querySelector('.smart-footer .smart-cancel-button')
			.addEventListener('click', () => currentOrdersFilterWindow.close());
	}

	handleReadyWindow3() {
		const addNewRowWindow = this.window3.current.nativeElement;

		addNewRowWindow.querySelector('.smart-footer .smart-confirm-button')
			.addEventListener('click', () => this.addNewRowToGrid(addNewRowWindow));
		addNewRowWindow.querySelector('.smart-footer .smart-cancel-button')
			.addEventListener('click', () => addNewRowWindow.close());
	}

	handleReadyWindow4() {
		const editRowWindow = this.window4.current.nativeElement;

		editRowWindow.querySelector('.smart-footer .smart-confirm-button')
			.addEventListener('click', () => {
				this.editGridRow(editRowWindow);
				editRowWindow.close();
			});

		editRowWindow.querySelector('.smart-footer .smart-cancel-button')
			.addEventListener('click', () => {
				this.clearContextMenuInfo();
				editRowWindow.close();
			});
	}

	handleReadyWindow5() {
		const confirmDeleteWindow = this.window5.current.nativeElement;

		confirmDeleteWindow.querySelector('.smart-footer .smart-confirm-button')
			.addEventListener('click', () => {
				this.deleteGridRow();
				this.clearContextMenuInfo();
				confirmDeleteWindow.close();
			});
		confirmDeleteWindow.querySelector('.smart-footer .smart-cancel-button')
			.addEventListener('click', () => {
				this.clearContextMenuInfo();
				confirmDeleteWindow.close();
			});
	}

	handleReadyWindowNew() {
		const confirmDeleteWindow = this.newWindow.current.nativeElement;

		confirmDeleteWindow.querySelector('.smart-footer .smart-confirm-button')
			.addEventListener('click', () => confirmDeleteWindow.opened = false);
		confirmDeleteWindow.querySelector('.smart-footer .smart-cancel-button')
			.addEventListener('click', () => confirmDeleteWindow.opened = false);
	}

	handleClick() {
		this.window3.current.open();
	}

	handleSupplies() {
		this.current.current.classList.remove('active');
		this.supplies.current.classList.add('active');
		this.grid.current.nativeElement.style.display = 'block';
		this.grid2.current.nativeElement.style.display = 'none';
	}

	handleCurrent() {
		this.supplies.current.classList.remove('active');
		this.current.current.classList.add('active');
		this.grid2.current.nativeElement.style.display = 'block';
		this.grid.current.nativeElement.style.display = 'none';
	}

	clearContextMenuInfo() {
		this.contextMenuOpenedOn.grid = null;
		this.contextMenuOpenedOn.rowId = null;
	}

	openFilterWindow() {
		const activeButton = document.querySelector('.subtitles-holder .active');

		if (activeButton.id === 'supplies') {
			this.window.current.open();
		}
		else if (activeButton.id === 'current') {
			this.window2.current.open();
		}
	}

	getActiveGrid() {
		const activeButton = document.querySelector('.subtitles-holder .active');

		let activeGrid;

		if (activeButton.id === 'supplies') {
			activeGrid = this.gird.current;
		}
		else if (activeButton.id === 'current') {
			activeGrid = this.grid2.current;
		}

		return activeGrid;
	}

	filterGrid(grid, window) {
		const from = window.querySelector('#fromDate').value;
		const to = window.querySelector('#toDate').value;
		const supplier = window.querySelector('#supplier').selectedValues[0];

		window.close();

		setTimeout(function () {
			grid.addFilter('date', '>= ' + from.toString('d') + ' and <= ' + to.toString('d'));

			if (supplier) {
				grid.addFilter('author', 'contains ' + supplier);
			}
		}, 100);
	}

	addNewRowToGrid(window) {
		const addNewRowWindow = this.window3.current
		const supplier = addNewRowWindow.querySelector('#supplier').selectedValues[0];
		const date = addNewRowWindow.querySelector('#date').value;
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

		const activeGrid = this.getActiveGrid();

		activeGrid.rows.push(newRow);
		addNewRowWindow.close();
	}

	editGridRow(window) {
		const that = this;
		const date = window.querySelector('#date').value;
		const editedRow = that.contextMenuOpenedOn.grid.rows.find((row) => row.id === that.contextMenuOpenedOn.rowId);

		editedRow.data.date = date;
	}

	deleteGridRow() {
		this.contextMenuOpenedOn.grid.deleteRow(this.contextMenuOpenedOn.rowId);
	}

	handleCellClick(e) {
		if (e.detail.cell.column.label === 'Edit') {
			const supplier = e.detail.cell.row.data.author;
			const iframe = document.createElement('iframe');

			iframe.style.border = 'none';
			iframe.src = './edit-row.html?supplier="' + supplier + '"';

			if (this.newWindow.current) {
				return;
			}

			ReactDOM.render(<Window ref={this.newWindow} onReady={this.handleReadyWindowNew.bind(this)} style={{ width: '520px', height: '600px' }} opened></Window>, new DocumentFragment(), function () {
				this.label = "Edit " + supplier;
				this.nativeElement.appendChild(iframe);
				this.footerTemplate = 'footerTemplate';

				document.body.appendChild(this.nativeElement);
			})
		}
		else if (e.detail.cell.column.label === 'Menu') {
			this.openContextMenu(e.detail);
		}
	}

	openContextMenu(event) {
		const that = this;

		setTimeout(() => {
			that.contextMenuOpenedOn.grid = event.cell.grid;
			that.contextMenuOpenedOn.rowId = event.cell.row.id;
			this.menu.current.open(event.originalEvent.clientX, event.originalEvent.clientY);
		}, 300);
	}

	handleMenuItemClick(e) {
		const that = this;
		const supplier = that.contextMenuOpenedOn.grid.rows.find((row) => row.id === that.contextMenuOpenedOn.rowId).data['author'];
		const date = that.contextMenuOpenedOn.grid.rows.find((row) => row.id === that.contextMenuOpenedOn.rowId).data['date'];

		if (e.detail.value === 'edit') {
			const editRowWindow = this.window4.current.nativeElement;

			editRowWindow.querySelector('#supplier').innerHTML = supplier;
			editRowWindow.querySelector('#date').value = date;
			editRowWindow.open();
		}
		else {
			const confirmDeleteWindow = this.window5.current.nativeElement;

			confirmDeleteWindow.querySelector('#supplier').innerHTML = supplier;
			confirmDeleteWindow.querySelector('#date').value = date;
			confirmDeleteWindow.open();
		}
	}

	gridProps = {
		appearance: {
			showRowHeaderNumber: true
		},
		filtering: {
			enabled: true
		},
		paging: {
			enabled: true,
			pageSize: 15,
			pageIndex: 0
		},
		pager: {
			visible: true
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.localData,
			dataFields: [
				'author: string',
				'title: string',
				'buildNum: string',
				'status: string',
				'branch: string',
				'date: date'
			]
		}),
		columns: [{
			label: 'Edit',
			dataField: 'edit',
			width: '3%',
			formatFunction(settings) {
				settings.template = '<span className="material-icons">edit</span>';
			}
		},
		{
			label: 'Menu',
			dataField: 'menu',
			width: '3%',
			formatFunction(settings) {
				settings.template = '<i className="material-icons">more_horiz</i>';
			}
		},
		{
			label: 'Author',
			dataField: 'author',
			width: '10%'
		},
		{
			label: 'Title',
			dataField: 'title',
			width: '25%'
		},
		{
			label: 'Status',
			dataField: 'status',
			width: '10%'
		},
		{
			label: 'Build',
			dataField: 'buildNum',
			width: '10%'
		},
		{
			label: 'Branch',
			dataField: 'branch',
			width: '15%'
		},
		{
			label: 'Date',
			dataField: 'date',
			cellsFormat: 'dd/MM/yyyy'
		}
		]
	};

	gridProps2 = {
		appearance: {
			showRowHeaderNumber: true
		},
		filtering: {
			enabled: true
		},
		paging: {
			enabled: true,
			pageSize: 15,
			pageIndex: 0
		},
		pager: {
			visible: true
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.localData,
			dataFields: [
				'author: string',
				'title: string',
				'buildNum: string',
				'status: string',
				'branch: string',
				'date: date'
			]
		}),
		columns: [{
			label: 'Edit',
			dataField: 'edit',
			width: '3%',
			formatFunction(settings) {
				settings.template = '<span className="material-icons">edit</span>';
			}
		},
		{
			label: 'Menu',
			dataField: 'menu',
			width: '3%',
			formatFunction(settings) {
				settings.template = '<i className="material-icons">more_horiz</i>';
			}
		},
		{
			label: 'Author',
			dataField: 'author',
			width: '10%'
		},
		{
			label: 'Title',
			dataField: 'title',
			width: '25%'
		},
		{
			label: 'Status',
			dataField: 'status',
			width: '10%'
		},
		{
			label: 'Build',
			dataField: 'buildNum',
			width: '10%'
		},
		{
			label: 'Branch',
			dataField: 'branch',
			width: '15%'
		},
		{
			label: 'Date',
			dataField: 'date',
			cellsFormat: 'dd/MM/yyyy'
		}
		]
	};

	sampleChartData = [{
		month: 'Jan',
		supplies: 30,
		current: 0
	},
	{
		month: 'Feb',
		supplies: 25,
		current: 25
	},
	{
		month: 'Mar',
		supplies: 30,
		current: 0
	},
	{
		month: 'Apr',
		supplies: 50,
		current: 45
	},
	{
		month: 'May',
		supplies: 0,
		current: 20
	},
	{
		month: 'Jun',
		supplies: 30,
		current: 0
	},
	{
		month: 'July',
		supplies: 60,
		current: 45
	}
	];

	chartProps = {
		caption: 'Supplies',
		description: '',
		showLegend: true,
		padding: {
			left: 5,
			top: 30,
			right: 5,
			bottom: 5
		},
		titlePadding: {
			left: 90,
			top: 0,
			right: 0,
			bottom: 30
		},
		borderLineWidth: 0,
		dataSource: this.sampleChartData,
		xAxis: {
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
		},
		valueAxis: {
			unitInterval: 10,
			minValue: 0,
			maxValue: 120,
			tickMarks: {
				color: '#BCBCBC'
			}
		},
		colorScheme: 'scheme29',
		seriesGroups: [{
			type: 'stackedcolumn',
			columnsGapPercent: 50,
			seriesGapPercent: 0,
			series: [{
				dataField: 'supplies',
				displayText: 'Supplies purchases'
			},
			{
				dataField: 'current',
				displayText: 'Current orders'
			}
			]
		}]
	};

	init() {
		const template = document.createElement('template');

		template.id = 'footerTemplate';
		template.innerHTML = `
			<button className="smart-button smart-element smart-confirm-button">Confirm</button>
			<button className="smart-button smart-element smart-cancel-button">Cancel</button>`;

		document.body.appendChild(template);

		this.window.current.footerTemplate = template.id;
		this.window2.current.footerTemplate = template.id;
		this.window3.current.footerTemplate = template.id;
		this.window4.current.footerTemplate = template.id;
		this.window5.current.footerTemplate = template.id;

		document.body.classList.add('app');
		document.body.style.visibility = '';

		this.splitter.current.nativeElement.setAttribute('expanded', '');
	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (<div>
			<Splitter theme="green" ref={this.splitter} id="dashboard">
				<SplitterItem collapsible id="leftPanel" size="240">
					<div className="dashboard-header">
						<div className="company-logo-holder">
							<img ref={this.logo} style={{ height: '34px' }} src="https://www.htmlelements.com/wp-content/design/assets/images/logo-htmlelements.svg" />
						</div>
						<Button ref={this.collapsebtn} onClick={this.handleCollapse.bind(this)} id="collapseBtn" className="floating">
							<i className="material-icons">chevron_left</i>
						</Button>
						<Button ref={this.expandbtn} onClick={this.handleExpand.bind(this)} id="expandBtn" className="floating">
							<i className="material-icons">menu</i>
						</Button>
					</div>

					<div className="dashboard-menu-container">
						<Button ref={this.button} onClick={this.handleChartButton.bind(this)} id="chartButton" className="flat menu-btn bold">
							<i className="material-icons">dashboard</i>
							<span ref={this.menutitle} className="menu-title">Chart</span>
						</Button>
						<Button ref={this.button2} onClick={this.handleGridButton.bind(this)} id="gridButton" className="flat menu-btn">
							<i className="material-icons">apps</i>
							<span ref={this.menutitle2} className="menu-title">Grid</span>
						</Button>
					</div>
				</SplitterItem>

				<SplitterItem id="rightPanel">
					<div className="dashboard-header">
						<span className="breadcrumb-header">
							Project / Software Company / Pipelines / Builds
                </span>
						<span className="icon-holder">
							<Button id="notifficationSearchBtn">
								<i className="material-icons">search</i>
							</Button>
							<Button id="notifficationSearchBtn">
								<i className="material-icons">menu</i>
							</Button>
							<Button id="notifficationBtn">
								<i className="material-icons">shopping_basket</i>
							</Button>
							<img style={{ width: '32px', height: '32px' }} className="header-logo" src="./../../../src/images/phonebook/nancy.png" />
						</span>
					</div>
					<h1 className="main-company-name">Supplies</h1>

					<div ref={this.chartcontainer} id="chartContainer">
						<Chart {...this.chartProps} id="chart"></Chart>
					</div>

					<div ref={this.gridcontainer} id="gridContainer" style={{ display: 'none' }}>
						<div className="header-right-buttons">
							<Button className="floating primary" onClick={this.handleClick.bind(this)} id="newRowButton">
								<i className="material-icons">add</i>
							</Button>
						</div>

						<div className="subtitles-holder">
							<h4 ref={this.supplies} onClick={this.handleSupplies.bind(this)} id="supplies" className="subtitles active">
								<Button>Supplies purchases</Button>
							</h4>
							<h4 ref={this.current} onClick={this.handleCurrent.bind(this)} id="current" className="subtitles">
								<Button>Current orders</Button>
							</h4>

							<div className="filter-right-button">
								<Button id="filterButton" onClick={this.openFilterWindow.bind(this)} className="transparent-bck">
									<i className="material-icons vertical-align-middle filter">filter_list</i>
								</Button>
							</div>
						</div>

						<Grid ref={this.grid} {...this.gridProps} onCellClick={this.handleCellClick.bind(this)} id="suppliesPurchasesGrid"></Grid>
						<Grid ref={this.grid2} {...this.gridProps2} onCellClick={this.handleCellClick.bind(this)} id="currentOrdersGrid"></Grid>
					</div>
				</SplitterItem>
			</Splitter>

			<Window ref={this.window} onClose={this.handleClose.bind(this)} onReady={this.handleReadyWindow.bind(this)} id="suppliesPurchasesFilterWindow" label="Filter supplies purchases" className="material">
				<div className="label label-from">From</div>
				<DateTimePicker id="fromDate" calendarButton spinButtons autoClose spinButtonsPosition="left" formatString="d" dropDownAppendTo="body"></DateTimePicker>
				<div className="label label-to">To</div>
				<DateTimePicker id="toDate" calendarButton spinButtons autoClose spinButtonsPosition="left" formatString="d" dropDownAppendTo="body"></DateTimePicker>
				<div className="label label-supplier">Supplier</div>
				<DropDownList dataSource={this.dataSource} id="supplier" dropDownAppendTo="body" dataSource={["Nancy", "Andrew", "Laura", "Anne"]}></DropDownList>
			</Window>

			<Window ref={this.window2} id="currentOrdersFilterWindow" onClose={this.handleClose2.bind(this)} onReady={this.handleReadyWindow2.bind(this)} label="Filter current orders" className="material">
				<div className="label label-from">From</div>
				<DateTimePicker id="fromDate" calendarButton spinButtons autoClose spinButtonsPosition="left" formatString="d" dropDownAppendTo="body"></DateTimePicker>
				<div className="label label-to">To</div>
				<DateTimePicker id="toDate" calendarButton spinButtons autoClose spinButtonsPosition="left" formatString="d" dropDownAppendTo="body"></DateTimePicker>
				<div className="label label-supplier">Supplier</div>
				<DropDownList dataSource={this.dataSource} id="supplier" selectedIndexes={[0]} dropDownAppendTo="body" dataSource={["Nancy", "Andrew", "Laura", "Anne"]}></DropDownList>
			</Window>

			<Window ref={this.window3} id="addNewRowWindow" onReady={this.handleReadyWindow3.bind(this)} label="New" className="material">
				<div className="label label-supplier">Supplier</div>
				<DropDownList dataSource={this.dataSource} id="supplier" selectedIndexes={[0]} dropDownAppendTo="body" dataSource={["Nancy", "Andrew", "Laura", "Anne"]} selectedIndexes={[0]}></DropDownList>
				<div className="label label-to">Date</div>
				<DateTimePicker id="date" calendarButton spinButtons autoClose spinButtonsPosition="left" formatString="d" dropDownAppendTo="body"></DateTimePicker>
			</Window>

			<Window ref={this.window4} id="editRowWindow" onReady={this.handleReadyWindow4.bind(this)} label="Edit" className="material">
				<div className="label label-supplier">Supplier</div>
				<div id="supplier"></div>
				<div className="label label-to">Date</div>
				<DateTimePicker id="date" calendarButton spinButtons autoClose spinButtonsPosition="left" formatString="d" dropDownAppendTo="body"></DateTimePicker>
			</Window>

			<Window ref={this.window5} id="confirmDeleteWindow" onReady={this.handleReadyWindow5.bind(this)} label="Confirm delete" className="material">
				<div className="label label-supplier">Supplier</div>
				<div id="supplier"></div>
				<div className="label label-to">Date</div>
				<DateTimePicker id="date" calendarButton spinButtons autoClose spinButtonsPosition="left" formatString="d" dropDownAppendTo="body"></DateTimePicker>
			</Window>

			<Menu ref={this.menu} onItemClick={this.handleMenuItemClick.bind(this)} id="gridContextMenu" mode="dropDown">
				<MenuItem data-id="Edit" label="<i className='material-icons'>edit</i>Edit" value="edit"></MenuItem>
				<MenuItem data-id="Remove" label="<i className='material-icons'>delete</i> Remove" value="remove"></MenuItem>
			</Menu>
		</div >);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
