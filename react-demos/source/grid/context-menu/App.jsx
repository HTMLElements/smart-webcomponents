import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
		this.menu = React.createRef();
	}

	appearance = {
		showRowHeaderNumber: true
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(1000),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'available: bool',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});
	editing = {
		enabled: true,
		action: 'none',
		mode: 'row'
	};
	columns = [{
		label: 'First Name',
		dataField: 'firstName'
	},
	{
		label: 'Last Name',
		dataField: 'lastName'
	},
	{
		label: 'Product',
		dataField: 'productName',
		editor: 'autoComplete'
	},
	{
		label: 'Available',
		dataField: 'available',
		template: 'checkBox',
		editor: 'checkBox'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		editor: 'numberInput'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		editor: 'numberInput',
		cellsFormat: 'c2'
	}
	];

	rowId = null;

	onContextMenu(event) {
		event.stopPropagation();
		event.preventDefault();
		this.menu.current.open(event.pageX, event.pageY);
		return false;
	}

	onItemClick(event) {
		const rowId = this.rowId,
			grid = this.grid.current;

		if (rowId === undefined) {
			return;
		}
		if (event.detail.item.id === 'edit') {
			grid.beginEdit(rowId);
		} else {
			grid.deleteRow(rowId);
		}
	}

	onRowClick(event) {
		if (event.detail.originalEvent.which === 3) {
			const row = event.detail.row;
			this.rowId = row.id;
			event.detail.originalEvent.stopPropagation();
		}
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Context Menu in Grid Web Component</h1>
					<p>Right Click on a Grid row to show a Context Menu. The Context menu is
					smartMenu component with two items - 'Edit' and 'Remove'. The 'Edit' item
					puts the clicked Grid row in edit mode. The 'Remove' item removes the clicked
			            grid row.</p>
					<br />
					<br />
				</div>
				<Grid ref={this.grid} id="grid"
					appearance={this.appearance}
					dataSource={this.dataSource}
					editing={this.editing}
					columns={this.columns}
					onContextMenu={this.onContextMenu.bind(this)}
					onRowClick={this.onRowClick.bind(this)}></Grid>
				<Menu ref={this.menu} id="menu" mode="dropDown" onItemClick={this.onItemClick.bind(this)}>
					<MenuItem id="edit" label="<i className='material-icons'>edit</i>Edit"></MenuItem>
					<MenuItem id="remove" label="<i className='material-icons'>delete</i> Remove"></MenuItem>
				</Menu>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
