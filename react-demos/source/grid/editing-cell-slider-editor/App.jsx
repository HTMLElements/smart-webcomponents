import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(100),
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
		mode: 'cell'
	};
	selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	};
	columns = [{
		label: 'First Name',
		dataField: 'firstName',
		editor: 'autoComplete'
	},
	{
		label: 'Product',
		allowEdit: true,
		dataField: 'productName',
		template: 'dropdownlist',
		editor: {
			template: 'dropDownList'
		}
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
		editor: {
			template: 'slider'
		}
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		editor: {
			template: 'slider'
		},
		cellsFormat: 'c2'
	}
	];

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Grid id="grid"
					dataSource={this.dataSource}
					editing={this.editing}
					selection={this.selection}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
