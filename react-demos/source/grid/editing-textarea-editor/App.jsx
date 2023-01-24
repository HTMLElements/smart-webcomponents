import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(1000),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'available: bool',
			'quantity: number',
			'date: date',
			'price: number',
			'total: number'
		]
	});
	editing = {
		enabled: true,
		mode: 'cell'
	};
	columns = [{
		label: 'First Name',
		dataField: 'firstName',
		editor: 'textArea'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		editor: 'textArea'
	},
	{
		label: 'Product',
		dataField: 'productName',
		width: 150,
		editor: 'textArea'
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

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>TextArea Editor within smartGrid</h1>
					<p>The first three columns in this demo are with 'textArea' editor. With
					this editor, text is edited within 'textarea' HTML Element. By clicking
					the expand button, users will view more space for editing within a small
			            popup window.</p>
				</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					editing={this.editing}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
