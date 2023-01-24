import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.pivottable = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
		this.button4 = React.createRef();
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(25),
		dataFields: [
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	});
	freezeHeader = true;
	keyboardNavigation = true;
	columns = [{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string',
		allowPivot: true,
		pivot: true
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number',
		summary: 'sum'
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number',
		summary: 'sum',
		summarySettings: {
			prefix: '$',
			decimalPlaces: 2
		}
	},
	{
		label: 'Date Purchased',
		dataField: 'date',
		dataType: 'date'
	} // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
	];

	enableAll() {
		this.button.current.disabled = false;
		this.button2.current.disabled = false;
		this.button3.current.disabled = false;
		this.button4.current.disabled = false;
	}

	handleFilter1Click() {
		const filterGroup = new window.Smart.Utilities.FilterGroup(),
			filterObject = filterGroup.createFilter('string', 'espresso', 'CONTAINS');
		filterGroup.addFilter('or', filterObject);
		this.pivottable.current.clearFilters();
		this.pivottable.current.addFilter('productName', filterGroup);
		this.enableAll();
		this.button.currentdisabled = true;
	}

	handleFilter2Click() {
		const filterGroup = new window.Smart.Utilities.FilterGroup(),
			filterObject = filterGroup.createFilter('number', 5, 'GREATER_THAN');
		filterGroup.addFilter('or', filterObject);
		this.pivottable.current.clearFilters();
		this.pivottable.current.addFilter('quantity', filterGroup);
		this.enableAll();
		this.button2.current.disabled = true;
	}

	handleFilter3Click() {
		const filterGroup1 = new window.Smart.Utilities.FilterGroup(),
			filterObject1 = filterGroup1.createFilter('string', 'Andrew', 'EQUAL'),
			filterGroup2 = new window.Smart.Utilities.FilterGroup(),
			filterObject2 = filterGroup2.createFilter('string', 'Ohno', 'EQUAL');
		filterGroup1.addFilter('or', filterObject1);
		filterGroup2.addFilter('or', filterObject2);
		this.pivottable.current.clearFilters();
		this.pivottable.current.addFilter('firstName', filterGroup1);
		this.pivottable.current.addFilter('lastName', filterGroup2);
		this.enableAll();
		this.button3.current.disabled = true;
	}

	handleClearFiltersClick() {
		this.pivottable.current.clearFilters();
		this.enableAll();
		this.button4.current.disabled = true;
	}

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo shows how to filter PivotTable programmatically.</div>
				<PivotTable ref={this.pivottable} id="pivotTable"
					dataSource={this.dataSource}
					freezeHeader={this.freezeHeader}
					keyboardNavigation={this.keyboardNavigation}
					columns={this.columns}></PivotTable>
				<div className="options">
					<div className="caption">Filter Pivot Table:</div>
					<div className="option">
						<Button ref={this.button} id="filter1" onClick={this.handleFilter1Click.bind(this)}>"Espresso" only</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} id="filter2" onClick={this.handleFilter2Click.bind(this)}>Quantity greater than 5 only</Button>
					</div>
					<div className="option">
						<Button ref={this.button3} id="filter3" onClick={this.handleFilter3Click.bind(this)}>First name "Andrew" or last name "Ohno"</Button>
					</div>
					<div className="option">
						<Button ref={this.button4} id="clearFilters" disabled onClick={this.handleClearFiltersClick.bind(this)}>Clear filters</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
