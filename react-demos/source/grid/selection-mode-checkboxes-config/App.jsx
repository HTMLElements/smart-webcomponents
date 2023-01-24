import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}

	selection = {
		enabled: true,
		mode: 'many',
		checkBoxes: {
			selectAllMode: 'page',
			enabled: true,
			position: 'far'
		}
	};
	paging = {
		enabled: true
	};
	pager = {
		visible: true
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

	handleEnableCheckBoxChange(event) {
		this.grid.current.selection.checkBoxes.enabled = event.detail.value;
	}

	handleSelectAllModeCheckBoxChange(event) {
		this.grid.current.selection.checkBoxes.selectAllMode = event.detail.value ? 'page' : 'none';
	}

	handlePositionCheckBoxChange(event) {
		this.grid.current.selection.checkBoxes.position = event.detail.value ? 'far' : 'near';
	}

	handleClickCheckBoxChange(event) {
		this.grid.current.selection.action = event.detail.value ? 'click' : 'none';
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">This Data Grid demo illustrates difference settings of the Checkbox selection
			        column.</div>
				<Grid ref={this.grid} id="grid"
					selection={this.selection}
					paging={this.paging}
					pager={this.pager}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<CheckBox id="enableCheckBox" checked onChange={this.handleEnableCheckBoxChange.bind(this)}>Enabled</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="selectAllModeCheckBox" checked onChange={this.handleSelectAllModeCheckBoxChange.bind(this)}>Select All CheckBox</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="positionCheckBox" checked onChange={this.handlePositionCheckBoxChange.bind(this)}>Position: Right</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="clickCheckBox" checked onChange={this.handleClickCheckBoxChange.bind(this)}>Select on Cell Click</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
