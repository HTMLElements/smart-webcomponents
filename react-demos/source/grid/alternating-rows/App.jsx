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
		alternationCount: 2
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(15),
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

	handleAlternationStartChange(event) {
		const value = event.detail.value,
			grid = this.grid.current;

		if (value) {
			grid.appearance.alternationStart = 1;
		} else {
			grid.appearance.alternationStart = 0;
		}
	}

	handleAlternationEndChange(event) {
		const value = event.detail.value,
			grid = this.grid.current;

		if (value) {
			grid.appearance.alternationEnd = 10;
		} else {
			grid.appearance.alternationEnd = 0;
		}
	}

	handleAlternationCountChange(event) {
		const value = event.detail.value,
			grid = this.grid.current;

		if (value) {
			grid.appearance.alternationCount = 5;
		} else {
			grid.appearance.alternationCount = 2;
		}
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Data Grid Alternating Rows</h1>
					<p>The Data Grid provides Alternating Rows options. It can render alternation
					by one or multiple rows. It can have custom alternation start and end.
					This is controlled by the 'appearance.alternationStart', 'appearance.alternationEnd',
					'appearance.alternationCount' properties. In this demo, use the checkboxes
			            to change the alternation style.</p>
				</div>
				<Grid ref={this.grid} id="grid"
					behavior={this.behavior}
					appearance={this.appearance}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption">Appearance</div>
					<div className="option">
						<CheckBox id="alternationStart" onChange={this.handleAlternationStartChange.bind(this)}>alternationStart = 1</CheckBox>
						<br />
						<br />
						<CheckBox id="alternationEnd" onChange={this.handleAlternationEndChange.bind(this)}>alternationEnd = 10</CheckBox>
						<br />
						<br />
						<CheckBox id="alternationCount" onChange={this.handleAlternationCountChange.bind(this)}>AlternationCount = 5</CheckBox>
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
