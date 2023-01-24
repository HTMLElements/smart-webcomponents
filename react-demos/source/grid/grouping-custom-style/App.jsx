import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Grid } from 'smart-webcomponents-react/grid';
import { Input } from 'smart-webcomponents-react/input';
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.input = React.createRef();
		this.menu = React.createRef();
		this.grid = React.createRef();
	}

	Data = [{
		Name: 'Task 1',
		Status: 'Done',
		Column3: 'Item 1.3',
		Column4: 'Item 1.4',
		Column5: 'Item 1.5',
		Notification: false
	},
	{
		Name: 'Task 2',
		Status: 'In Progress',
		Column3: 'Item 2.3',
		Column4: 'Item 2.4',
		Column5: 'Item 2.5',
		Notification: false
	},
	{
		Name: 'Task 3',
		Status: 'Done',
		Column3: 'Item 3.3',
		Column4: 'Item 3.4',
		Column5: 'Item 3.5',
		Notification: true
	},
	{
		Name: 'Task 4',
		Status: 'Done',
		Column3: 'Item 4.3',
		Column4: 'Item 4.4',
		Column5: 'Item 4.5',
		Notification: false
	},
	{
		Name: 'Task 5',
		Status: 'Done',
		Column3: 'Item 5.3',
		Column4: 'Item 5.4',
		Column5: 'Item 5.5',
		Notification: false
	}
	];

	appearance = {
		showColumnLines: false,
		showColumnHeaderLines: false,
		showRowLines: false
	};
	behavior = {
		allowColumnReorder: true
	};
	grouping = {
		enabled: true,
		renderMode: 'basic',
		groupBar: {
			visible: true
		},
		summaryRow: {
			visible: false
		}
	};
	onCommand(args) {
		if (args.name === 'commandColumnRowMenuCommand') {
			const row = args.details;
			const menu = this.menu.current;
			args.event.preventDefault();
			menu.nativeElement.setAttribute('data-row-id', row.id);
			const cell = row.getCell('Notification');
			if (cell.value) {
				menu.items[0].disabled = true;
				menu.items[1].disabled = false;
			} else {
				menu.items[0].disabled = false;
				menu.items[1].disabled = true;
			}
			menu.open(args.event.pageX - 150, args.event.pageY + 20);
			args.handled = true;
		}
	};
	editing = {
		enabled: true,
		action: 'none',
		commandColumn: {
			visible: true,
			dataSource: {
				commandColumnEdit: {
					visible: false
				},
				commandColumnDelete: {
					visible: false
				},
				commandColumnMenu: {
					visible: true
				},
				commandColumnRowMenu: {
					visible: true
				}
			}
		}
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: this.Data,
		groupBy: ['Name'],
		dataFields: [
			'Name: string',
			'Status: string',
			'Column3: string',
			'Column4: string',
			'Column5: string',
			'Notification: bool'
		]
	});
	columns = [{
		label: 'Name',
		dataField: 'Name',
		allowHide: false
	},
	{
		label: 'Status',
		dataField: 'Status',
		allowHide: false,
		// Custom Cells Value Formatting.
		formatFunction(settings) {
			if (settings.value === 'Done') {
				settings.template = '<div className="status"><span className="icon fa-circle-o far"></span><span>Done</span></div>';
			} else {
				settings.template = '<div className="status"><span className="icon fa-circle-o-notch far"></span><span>In Progress</span></div>';
			}
		}
	},
	{
		label: 'Column 3',
		dataField: 'Column3',
		allowGroup: false
	},
	{
		label: 'Column 4',
		dataField: 'Column4',
		allowGroup: false
	},
	{
		label: 'Column 5',
		dataField: 'Column5',
		allowGroup: false
	},
	{
		label: '',
		dataField: 'Notification',
		allowHide: false,
		allowGroup: false,
		width: 40,
		// Custom Cells Value Formatting.
		formatFunction(settings) {
			if (settings.value) {
				settings.template = '<span className="icon fa-bell"></span>';
			} else {
				settings.template = '';
			}
		}
	}
	];

	renderHeader() {
		const items = document.querySelector('.header .items');
		items.innerHTML = '';
		const data = this.grid.current.dataSource.toArray();
		const itemsData = [{
			label: 'Total',
			value: data.length
		},
		{
			label: 'Done',
			value: data.filter((item) => item.Status === 'Done').length
		},
		{
			label: 'In Progress',
			value: data.filter((item) => item.Status === 'In Progress').length
		},
		{
			label: 'Notifications',
			value: data.filter((item) => item.Notification === true).length
		}
		];
		this.input.dataSource = ['All tasks'].concat(data.map((item) => {
			return item.Name;
		}));
		for (let i = 0; i < itemsData.length; i++) {
			const item = itemsData[i];
			const element = document.importNode(document.getElementById('itemTemplate').content, true);
			const content = element.firstElementChild;
			content.innerHTML = content.innerHTML.replace(/{{count}}/, item.value.toString()).replace(/{{label}}/, item.label);
			items.appendChild(element);
		}
	}

	handleChange(event) {
		const value = this.input.current.value,
			grid = this.grid.current;
		if (value === 'All tasks' || value === '') {
			grid.filtering.filter = [];
		} else {
			grid.filtering.filter = [
				['Name', 'contains "' + value + '"']
			];
		}
	}

	handleItemClick(event) {
		const grid = this.grid.current,
			rowId = this.menu.current.nativeElement.getAttribute('data-row-id');
		let row = null;
		for (let i = 0; i < grid.rows.length; i++) {
			if (grid.rows[i].id == rowId) {
				row = grid.rows[i];
			}
		}
		if (row) {
			const cell = row.getCell('Notification');
			// Sets or unsets the 'Notification'.
			if (event.detail.item.id === 'Notification') {
				cell.value = true;
			} else {
				cell.value = false;
			}
			this.renderHeader();
		}
	}

	init() {
		const that = this,
			itemTemplate = document.createElement('template');

		itemTemplate.id = 'itemTemplate';
		itemTemplate.innerHTML = `<div className="item">
									<div className="count">{{count}}</div>
									<div className="label">{{label}}</div>
								</div>`;

		document.body.appendChild(itemTemplate);

		that.renderHeader();

		that.grid.current.nativeElement.addEventListener('afterInit', function () {
			that.grid.current.getVisibleRows().then(function (rows) {
				rows[0].expand();
			});
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="header">
					<div className="bar">
						<div className="item">
							<div className="icon fa-bars"></div>
							<div className="label">Business Tasks</div>
						</div>
						<div className="item">
							<div className="icon fa-info-circle"></div>
							<div className="icon fa-bell"></div>
							<div className="icon fa-user"></div>
						</div>
					</div>
					<div className="items"></div>
				</div>
				<div className="filter-bar">
					<Input ref={this.input} className="item" dropDownButtonPosition="right" value="All tasks"
						id="filterInput" onChange={this.handleChange.bind(this)}></Input>
					<div id="applyFilter" className="item icon fa-filter"></div>
					<Button ref="button" className="item primary">ADD TASK</Button>
				</div>
				<Menu ref={this.menu} id="menu" mode="dropDown" onItemClick={this.handleItemClick.bind(this)}>
					<MenuItem id="Notification" label="<i className='icon fa-bell'></i>Notify me"></MenuItem>
					<MenuItem id="Remove" label="<i className='icon fa-bell-slash'></i>Unsubscribe"></MenuItem>
				</Menu>
				<Grid ref={this.grid} id="grid"
					appearance={this.appearance}
					behavior={this.behavior}
					grouping={this.grouping}
					onCommand={this.onCommand.bind(this)}
					editing={this.editing}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
