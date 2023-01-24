import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetCountriesData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
		this.button4 = React.createRef();
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetCountriesData(),
		dataFields: [
			'ID: number',
			'Country: string',
			'Area: number',
			'Population_Urban: number',
			'Population_Rural: number',
			'Population_Total: number',
			'GDP_Agriculture: number',
			'GDP_Industry: number',
			'GDP_Services: number',
			'GDP_Total: number'
		]
	});
	columns = [
		'Country',
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
	];

	updateButtonsDisabledState() {
		const that = this,
			rows = that.grid.current.rows;

		that.button2.current.disabled = rows.length === 0;
		that.button3.current.disabled = rows.length === 0;
		that.button4.current.disabled = rows.length === 0;
	}

	createRow() {
		const countries = ['Bulgaria', 'Germany', 'France', 'Japan', 'China', 'Italy', 'Spain', 'Portugal', 'India', 'Romania', 'Russia', 'Serbia', 'Turkey', 'Israel'];
		const newRow = new window.Smart.Grid.Row({
			data: {
				ID: Math.random(),
				Country: countries[parseInt('' + 10 * (Math.random()))],
				Area: parseInt('' + Math.random() * 1000000),
				Population_Rural: new Number('' + Math.random()).toFixed(2),
				Population_Total: parseInt('' + Math.random() * 10000000),
				GDP_Total: parseInt('' + Math.random() * 1000000)
			}
		});
		return newRow;
	}

	handleAddRowClick() {
		const that = this;

		that.grid.current.rows.push(that.createRow());
		that.updateButtonsDisabledState();
	}

	handleRemoveLastRowClick() {
		this.grid.current.rows.pop();
		this.updateButtonsDisabledState();
	}

	handleRemoveFirstRowClick() {
		this.grid.current.rows.splice(0, 1);
		this.updateButtonsDisabledState();
	}

	handleUpdateFirstRowClick() {
		const rows = this.grid.current.rows;

		if (rows.length > 0) {
			rows[0] = this.createRow();
		}
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Grid ref={this.grid} id="grid"
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button ref={this.button} id="addRow" onClick={this.handleAddRowClick.bind(this)}>Add Row</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} id="removeLastRow" onClick={this.handleRemoveLastRowClick.bind(this)}>Remove Last Row</Button>
					</div>
					<div className="option">
						<Button ref={this.button3} id="removeFirstRow" onClick={this.handleRemoveFirstRowClick.bind(this)}>Remove First Row</Button>
					</div>
					<div className="option">
						<Button ref={this.button4} id="updateFirstRow" onClick={this.handleUpdateFirstRowClick.bind(this)}>Update First Row</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
