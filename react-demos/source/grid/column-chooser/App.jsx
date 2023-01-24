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
		this.grid = React.createRef();
		this.menu = React.createRef();
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
		showColumnHeaderLines: false
	};
	selection = {
		enabled: true,
	};
	grouping = {
		enabled: true,
		groupIndent: 0,
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
		groupBy: [],
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

	init() {
		const that = this,
			grid = that.grid.current,
			items = document.querySelector('.header .items'),
			itemTemplate = document.createElement('template'),
			filterInput = that.input.current,
			menu = that.menu.current;

		itemTemplate.innerHTML = `<div className="item">
									<div className="count">{{count}}</div>
									<div className="label">{{label}}</div>
								</div>`;
		document.body.appendChild(itemTemplate);

		// renders the header.
		const renderHeader = () => {
			items.innerHTML = '';
			const data = grid.dataSource.toArray();
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
			filterInput.dataSource = ['All tasks'].concat(data.map((item) => {
				return item.Name;
			}));
			for (let i = 0; i < itemsData.length; i++) {
				const item = itemsData[i];
				const element = document.importNode(itemTemplate.content, true);
				const content = element.firstElementChild;
				content.innerHTML = content.innerHTML.replace(/{{count}}/, item.value).replace(/{{label}}/, item.label);
				items.appendChild(element);
			}
		};
		filterInput.nativeElement.addEventListener('change', function (event) {
			const value = filterInput.value;
			if (value === 'All tasks' || value === '') {
				grid.filtering.filter = [];
			} else {
				grid.filtering.filter = [
					['Name', 'contains "' + value + '"']
				];
			}
		});
		renderHeader();
		menu.nativeElement.addEventListener('itemClick', function (event) {
			const rowId = menu.nativeElement.getAttribute('data-row-id');
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
				renderHeader();
			}
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
						id="filterInput"></Input>
					<div id="applyFilter" className="item icon fa-filter"></div>
					<Button ref="button" className="item primary">ADD TASK</Button>
				</div>
				<Grid ref={this.grid} id="grid"
					appearance={this.appearance}
					selection={this.selection}
					grouping={this.grouping}
					onCommand={this.onCommand.bind(this)}
					editing={this.editing}
					dataSource={this.dataSource}
					columns={this.columns}
				></Grid>
				<Menu ref={this.menu} id="menu" mode="dropDown">
					<MenuItem id="Notification" label="<i className='icon fa-bell'></i>Notify me"></MenuItem>
					<MenuItem id="Remove" label="<i className='icon fa-bell-slash'></i>Unsubscribe"></MenuItem>
				</Menu>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<div className="demo-description">Grid example with Grouping, Column Chooser, Custom Cells Rendering and
				Custom Filtering. To filter the Grid, use the filter Input component. Filtering
				is applied when the value is changed. To group by 'Name' or 'Status', move
				the cursor over the column headers and open the column menu. To add notification,
				press the vertical ellipsis button and use the popup menu. Column Chooser
			        is displayed when you click on the last column's header.</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
