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
		action: 'click'
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
		dataField: 'firstName',
		width: 300
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		width: 300
	},
	{
		label: 'Product',
		dataField: 'productName',
		width: 300
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		align: 'right',
		width: 300,
		cellsAlign: 'right',
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		align: 'right',
		width: 300,
		cellsAlign: 'right',
		cellsFormat: 'c2'
	},
	{
		label: 'Total',
		dataField: 'total',
		align: 'right',
		width: 300,
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
		this.grid.current.select(3);
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Grid Row Selection</h1>
					<p>The data grid component supports different configurations for selection.
					You can choose to select/unselect rows with API only or on single or double
					click by setting the 'selection.action' property to 'none', 'click' or
					'dblclick'. Clicking on a Grid Row or Column header can also be used for
					selection just like in Microsoft Excel. The 'selection.mode' property determines
					whether we will have Single or Multi-Row selection. The allowed values
					for that property are 'one', 'many' and 'extended'. 'one' allows only single
					row selection, while 'many' and 'extended' allow multi-row selection. The
					difference between 'many' and 'extended' Grid selection modes is that in
					'extended', users will have to click 'Ctrl' or 'Shift' keyboard keys to
			            perform multiple selection.</p>
				</div>
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
				<br />
				<br />
				<div id="smartgrid"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
