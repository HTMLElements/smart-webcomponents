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

	behavior = {
		columnResizeMode: 'growAndShrink'
	};
	appearance = {
		alternationCount: 2,
		alternationStart: -1
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(15000),
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
	columns = [
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
			dataField: 'quantity'
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			cellsFormat: 'c2'
		},
		{
			label: 'Total',
			dataField: 'total',
			cellsFormat: 'c2'
		}
	];

	handleHeaderLinesChange(event) {
		this.grid.current.appearance.showColumnHeaderLines = event.detail.value;
	}

	handleColumnLinesChange(event) {
		this.grid.current.appearance.showColumnLines = event.detail.value;
	}

	handleRowLinesChange(event) {
		this.grid.current.appearance.showRowLines = event.detail.value;
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Data Grid Lines Appearance</h1>
					<p>The Data Grid provides multiple line customization options. It can render
					horizontal or vertical lines only, or both horizontal and vertical lines.
					This is controlled by the 'appearance.showRowLines', 'appearance.showColumnLines',
					'appearance.showColumnHeaderLines' properties. In this demo, use the checkboxes
			            to change the gridline style.</p>
				</div>
				<Grid ref={this.grid} id="grid"
					behavior={this.behavior}
					appearance={this.appearance}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption">Appearance</div>
					<div className="option">
						<CheckBox checked id="headerLines" onChange={this.handleHeaderLinesChange.bind(this)}>Column Header Lines</CheckBox>
						<br />
						<br />
						<CheckBox checked id="columnLines" onChange={this.handleColumnLinesChange.bind(this)}>Column Lines</CheckBox>
						<br />
						<br />
						<CheckBox checked id="rowLines" onChange={this.handleRowLinesChange.bind(this)}>Row Lines</CheckBox>
						<br />
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
