import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	data = GetData(300000);

	dataSource = new window.Smart.DataAdapter({
		dataSource: 300000
	});
	columns = [
		'id',
		{
			label: 'First Name',
			dataField: 'firstName'
		},
		{
			label: 'Last Name',
			dataField: 'lastName'
		},
		{
			label: 'Product',
			dataField: 'productName'
		},
		{
			label: 'Quantity',
			dataField: 'quantity'
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			cellsFormat: 'c2'
		},
		{
			label: 'Total',
			dataField: 'total',
			cellsFormat: 'c2'
		}
	];
	onCellValue = (cell) => {
		const rowIndex = cell.row.index;
		const columnDataField = cell.column.dataField;
		cell.value = this.data[rowIndex][columnDataField];
	};

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">The Grid's 'onCellValue' method allows you to dynamically load data in
				Grid cells by setting the cell's value property. The DataGrid data is 300
			        000 rows.</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					columns={this.columns}
					onCellValue={this.onCellValue}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
