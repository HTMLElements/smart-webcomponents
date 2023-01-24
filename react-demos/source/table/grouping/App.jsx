import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
		dataFields: [
			'id: number',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	});

	grouping = true;
	keyboardNavigation = true;
	columns = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number'
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number'
	},
	{
		label: 'Date Purchased',
		dataField: 'date',
		dataType: 'date'
	}
	];

	handleHideGroupNameChange(event) {
		const table = this.table.current.nativeElement;

		if (event.detail.value) {
			table.style.setProperty('--smart-table-group-name-display', 'none');
		}
		else {
			table.style.setProperty('--smart-table-group-name-display', null);
		}
	}

	handleHideGroupCountChange(event) {
		const table = this.table.current.nativeElement;

		if (event.detail.value) {
			table.style.setProperty('--smart-table-group-count-display', 'none');
		}
		else {
			table.style.setProperty('--smart-table-group-count-display', null);
		}
	}

	init() {
		const table = this.table.current;

		table.addGroup('productName');
		table.addGroup('quantity');
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases the grouping functionality of Table.</div>
				<Table ref={this.table} id="table" dataSource={this.dataSource} grouping={this.grouping}
					keyboardNavigation={this.keyboardNavigation} columns={this.columns} ></Table>
				<div className="options">
					<div className="option">
						<CheckBox id="hideGroupName" onChange={this.handleHideGroupNameChange.bind(this)}>Hide group name</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="hideGroupCount" onChange={this.handleHideGroupCountChange.bind(this)}>Hide group leaf count</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
