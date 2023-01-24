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

	columnsList = [
		'ID',
		'Country',
		'Area',
		'Population_Urban',
		'Population_Rural',
		'Population_Total',
		'GDP_Agriculture',
		'GDP_Industry',
		'GDP_Services',
		'GDP_Total'
	];

	updateButtonsDisabledState() {
		const that = this,
			columns = that.grid.current.columns;

		that.button.current.disabled = columns.length === that.columnsList.length;
		that.button2.current.disabled = columns.length === 0;
		that.button3.current.disabled = columns.length === 0;
		that.button4.current.disabled = columns.length === 0 || (columns.length > 0 && columns[0].label.indexOf('New') !== -1);
	}

	handleAddColumnClick() {
		const that = this,
			columnsList = that.columnsList,
			columns = that.grid.current.columns;

		for (let i = 0; i < columnsList.length; i++) {
			let alreadyAdded = false;
			for (let j = 0; j < columns.length; j++) {
				const column = columns[j];
				if (column && column.label === columnsList[i]) {
					alreadyAdded = true;
					break;
				};
			}
			if (alreadyAdded) {
				continue;
			}
			const newColumn = new window.Smart.Grid.Column({
				label: columnsList[i],
				dataField: columnsList[i]
			});
			columns.push(newColumn);
			break;
		}
		that.updateButtonsDisabledState();
	}

	handleRemoveLastColumnClick() {
		this.grid.current.columns.pop();
		this.updateButtonsDisabledState();
	}

	handleRemoveFirstColumnClick() {
		this.grid.current.columns.splice(0, 1);
		this.updateButtonsDisabledState();
	}

	handleUpdateFirstColumnClick() {
		const that = this,
			columns = that.grid.current.columns;

		if (columns.length > 0) {
			columns[0].label = "New " + columns[0].label;
		}
		that.button4.current.disabled = true;
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Grid Column CRUD example.Grid Columns can be added, updated or deleted
				the same way you work with basic Javascript Arrays. Here, we demonstrate
				how to use the Smart Grid API to update, remove the first or last column
			        and add a new column,</div>
				<Grid ref={this.grid}
					id="grid"
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button ref={this.button} id="addColumn" onClick={this.handleAddColumnClick.bind(this)}>Add Column</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} id="removeLastColumn" onClick={this.handleRemoveLastColumnClick.bind(this)}>Remove Last Column</Button>
					</div>
					<div className="option">
						<Button ref={this.button3} id="removeFirstColumn" onClick={this.handleRemoveFirstColumnClick.bind(this)}>Remove First Column</Button>
					</div>
					<div className="option">
						<Button ref={this.button4} id="updateFirstColumn" onClick={this.handleUpdateFirstColumnClick.bind(this)}>Update First Column Header</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
