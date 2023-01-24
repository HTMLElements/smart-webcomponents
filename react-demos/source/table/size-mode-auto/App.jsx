import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {
	columnMinWidth = '50px';
	columnSizeMode = 'auto';
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});
	selection = true;
	tooltip = true;
	columns = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string'
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
		label: 'Total',
		dataField: 'total',
		dataType: 'number'
	}
	];

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases the "auto" column size mode of jqx-table. In this mode, columns are sized based on their
        content and the value of the <strong>columnMinWidth</strong> property, unless there is not enough space in the
        Table, in which case ellipses are shown. User-set static column width is still respected.</div>
				<Table id="table"
					columnMinWidth={this.columnMinWidth}
					columnSizeMode={this.columnSizeMode}
					dataSource={this.dataSource}
					selection={this.selection}
					tooltip={this.tooltip}
					columns={this.columns}></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
