import React from "react";
import ReactDOM from "react-dom";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { Table } from 'smart-webcomponents-react/table';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.pivottable = React.createRef();
		this.table = React.createRef();
		this.mainContainer = React.createRef();
	}

	data = GetData(25);

	tableDataSource = new window.Smart.DataAdapter({
		dataSource: this.data,
		dataFields: [
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number'
		]
	});

	tableColumns = [{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string',
		allowRowGroup: true
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string',
		allowPivot: true,
		pivot: true
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number'
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number',
		summary: 'sum',
		summarySettings: {
			prefix: '$',
			decimalPlaces: 2
		}
	},
	];

	pivotTableDataSource = new window.Smart.DataAdapter({
		dataSource: this.data,
		dataFields: [
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number'
		]
	});

	pivotTableColumns = [{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string',
		allowRowGroup: true
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string',
		allowPivot: true,
		pivot: true
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number'
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number',
		summary: 'sum',
		summarySettings: {
			prefix: '$',
			decimalPlaces: 2
		}
	},
	];

	handleChange(event) {
		const mainContainer = this.mainContainer.current,
			pivotTable = this.pivottable.current,
			table = this.table.current;

		if (event.detail.value) {
			mainContainer.classList.remove('table-mode');
			mainContainer.classList.add('pivot-mode');
		} else {
			mainContainer.classList.remove('pivot-mode');
			mainContainer.classList.add('table-mode');
			if (JSON.stringify(pivotTable.columns.toArray(), ['dataField']) !==
				JSON.stringify(table.columns.toArray(), ['dataField'])) {
				table.columns = pivotTable.columns.toArray();
			}
		}
	}

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases how to integrate PivotTable with Table.</div>
				<div ref={this.mainContainer} id="mainContainer" className="table-mode">
					<div id="tableContainer">
						<Table ref={this.table} id="table" dataSource={this.tableDataSource} freezeHeader keyboardNavigation columns={this.tableColumns}></Table>
						<div id="panel">When Pivot Mode is enabled, the Pivot Table designer will appear here.</div>
					</div>
					<PivotTable ref={this.pivottable} id="pivotTable" className="hidden" dataSource={this.pivotTableDataSource} designer freezeHeader keyboardNavigation columns={this.pivotTableColumns}></PivotTable>
					<div id="switchContainer">
						<SwitchButton onChange={this.handleChange.bind(this)}></SwitchButton>
						<div>Pivot Mode</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
