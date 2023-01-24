import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}

	behavior = {
		columnResizeMode: 'growAndShrink'
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(5000),
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
		width: 150,
		dataField: 'firstName'
	},
	{
		label: 'Last Name',
		width: 150,
		dataField: 'lastName'
	},
	{
		label: 'Product',
		width: 200,
		dataField: 'productName'
	},
	{
		label: 'Quantity',
		width: 100,
		dataField: 'quantity'
	},
	{
		label: 'Unit Price',
		width: 100,
		dataField: 'price',
		cellsFormat: 'c2'
	},
	{
		label: 'Total',
		dataField: 'total',
		width: 200,
		cellsFormat: 'c2'
	}
	];

	handleNoneChange(event) {
		if (event.detail.value) {
			this.grid.current.behavior.columnResizeMode = 'none';
		}
	}

	handleSplitChange(event) {
		if (event.detail.value) {
			this.grid.current.behavior.columnResizeMode = 'split';
		}
	}

	handleGrowAndShrinkChange(event) {
		if (event.detail.value) {
			this.grid.current.behavior.columnResizeMode = 'growAndShrink';
		}
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Grid Column Headers Resize example. Move the pointer to the right border
				of a column header.
			        <br />When the cursor is changed to a col-resize cursor, press the mouse button
			        or tap to start resize.
			        <br />The column is resized when you release the pressed buttton.</div>
				<Grid ref={this.grid} id="grid"
					behavior={this.behavior}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption">Column Resize Mode</div>
					<div className="option">
						<RadioButton id="none" onChange={this.handleNoneChange.bind(this)}>None</RadioButton>
						<br />
						<RadioButton id="split" onChange={this.handleSplitChange.bind(this)}>Split</RadioButton>
						<br />
						<RadioButton checked id="growAndShrink" onChange={this.handleGrowAndShrinkChange.bind(this)}>Grow and Shrink</RadioButton>
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
