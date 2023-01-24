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
		editor: {
			template: 'autoComplete',
			readonly: true
		}
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		editor: {
			template: 'autoComplete',
			dropDownButtonPosition: 'right'
		}
	},
	{
		label: 'Product',
		dataField: 'productName',
		editor: {
			template: 'autoComplete',
			readonly: true,
			autoOpen: true
		}
	}
	];

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Auto-Complete Readonly editor is used in the 'First Name' column. 'Last
				Name' column is with Auto-Complete Dropdown. The 'Product' Grid column
				is with Auto-Complete which opens automatically. Click on a cell to begin
			        edit. Start typing and auto-complete popup will be displayed.</div>
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
