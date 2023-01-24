import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
		this.button4 = React.createRef();
	}

	appearance = {
		showRowHeaderNumber: true
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(15),
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
		action: 'click',
		addDialog: {
			enabled: true
		},
		addNewRow: {
			visible: true,
			position: 'both'
		}
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

	handleTopChange() {
		this.grid.current.editing.addNewRow.position = 'near';
	}

	handleBothChange() {
		this.grid.current.editing.addNewRow.position = 'both';
	}

	handleBottomChange() {
		this.grid.current.editing.addNewRow.position = 'far';
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Add Row in Data Grid</h1>
					<p>The 'Add New Row' UI element enables users to quickly add rows to the
					Grid with a single click. This example shows how to display and customize
			            the positioning of the 'Add New Row' element.</p>
				</div>
				<Grid ref={this.grid} id="grid"
					appearance={this.appearance}
					dataSource={this.dataSource}
					editing={this.editing}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption">Position</div>
					<div className="option">
						<RadioButton id="top" onChange={this.handleTopChange.bind(this)}>Top</RadioButton>
						<RadioButton checked id="both" onChange={this.handleBothChange.bind(this)}>Both</RadioButton>
						<RadioButton id="bottom" onChange={this.handleBottomChange.bind(this)}>Bottom</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
