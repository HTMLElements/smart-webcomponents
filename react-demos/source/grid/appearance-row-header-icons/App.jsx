import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	appearance = {
		showRowHeader: true,
		showRowHeaderSelectIcon: true,
		showRowHeaderFocusIcon: true,
		showRowHeaderEditIcon: true
	};
	selection = {
		enabled: true,
		allowRowHeaderSelection: true,
		mode: 'extended'
	};
	editing = {
		enabled: true,
		mode: 'row'
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(1000),
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
		dataField: 'productName'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		align: 'right',
		cellsAlign: 'right'
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
	];

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Grid Row Header Icons</h1>
					<p>The following appearance settings can be applied to rows header:
			            <ul>
							<li>showRowHeader - displays a row header.</li>
							<li>showRowHeaderNumber - displays a row header number.</li>
							<li>showRowHeaderEditIcon - displays an Edit icon, when the row is in <em>edit</em> state.</li>
							<li>showRowHeaderFocusIcon - displays a Focus icon, when the row is in <em>focus</em> state.</li>
							<li>showRowHeaderSelectIcon - displays a Select icon, when the pointer is
			                    over the row header. It indicated that the user can select the row.</li>
						</ul>
					</p>
				</div>
				<Grid id="grid"
					appearance={this.appearance}
					selection={this.selection}
					editing={this.editing}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
