import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}

	appearance = {
		showRowHeader: true
	};
	selection = {
		enabled: true,
		mode: 'extended',
		allowCellSelection: true
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(3000),
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
	];

	handleDblclickCheckBoxChange(event) {
		this.grid.current.selection.action = event.detail.value ? 'doubleClick' : 'click';
	}

	handleHeaderSelectionCheckBoxChange(event) {
		this.grid.current.selection.allowRowHeaderSelection = event.detail.value;
	}

	handleColheaderSelectionCheckBoxChange(event) {
		this.grid.current.selection.allowColumnHeaderSelection = event.detail.value;
	}

	handleSingleRadioButtonChange() {
		this.grid.current.selection.mode = 'one';
	}

	handleMultipleRadioButtonChange() {
		this.grid.current.selection.mode = 'many';
	}

	handleExtendedRadioButtonChange() {
		this.grid.current.selection.mode = 'extended';
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">The Grid component supports difference Cells selection configuration options.
				You can select one or multiple cells or have Excel-like Cells selection.
				It is also possible to select entire row or column or configure the selection
			        on single or double click.</div>
				<Grid ref={this.grid} id="grid"
					appearance={this.appearance}
					selection={this.selection}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<CheckBox id="dblclickCheckBox" onChange={this.handleDblclickCheckBoxChange.bind(this)}>Select on Double Click</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="headerSelectionCheckBox" onChange={this.handleHeaderSelectionCheckBoxChange.bind(this)}>Allow Row Header Selection</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="colheaderSelectionCheckBox" onChange={this.handleColheaderSelectionCheckBoxChange.bind(this)}>Allow Column Header Selection</CheckBox>
					</div>
					<div className="option">
						<RadioButton id="singleRadioButton" onChange={this.handleSingleRadioButtonChange.bind(this)}>Single Selection</RadioButton>
						<br />
						<RadioButton id="multipleRadioButton" onChange={this.handleMultipleRadioButtonChange.bind(this)}>Multiple Selection</RadioButton>
						<br />
						<RadioButton id="extendedRadioButton" checked onChange={this.handleExtendedRadioButtonChange.bind(this)}>Extended Selection</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
