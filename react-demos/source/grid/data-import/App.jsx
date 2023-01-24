import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	gridProps = {
		dataSource: new window.Smart.DataAdapter({
			dataSource: '../../../src/common/data.xlsx',
			async: false,
			dataFields: [
				'id: number',
				'firstName: string',
				'lastName: string',
				'productName: string',
				'quantity: number',
				'price: number',
				'total: number'
			]
		}),
		columns: [
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
				dataField: 'quantity',
				align: 'right',
				cellsAlign: 'right',
			},
			{
				label: 'Unit Price',
				dataField: 'price',
				align: 'right',
				cellsAlign: 'right',
				cellsFormat: 'c2'
			},
			{
				label: 'Total',
				dataField: 'total',
				align: 'right',
				cellsAlign: 'right',
				cellsFormat: 'c2'
			}
		]
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Excel Import. The Grid is data bound to ".xlsx" file.</div>
				<Grid props={this.gridProps} id="grid"></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
