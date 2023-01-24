import React from "react";
import ReactDOM from "react-dom";
import { SortPanel } from 'smart-webcomponents-react/sortpanel';
import { Table, Smart } from 'smart-webcomponents-react/table';
import { GetCountriesData } from './common/data.js';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
	}

	dataSourceTable = new Smart.DataAdapter({
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
	]

	dataSourceSortPanel = [{
		label: 'Country',
		dataField: 'Country',
		dataType: 'string',
		sortDirection: 'ascending',
		sortIndex: 1,
		icon: 'country'
	},
	{
		label: 'Area',
		dataField: 'Area',
		dataType: 'number',
		sortDirection: 'ascending',
		sortIndex: -1,
		icon: 'area'
	},
	{
		label: 'Population Rural',
		dataField: 'Population_Rural',
		dataType: 'number',
		sortDirection: 'ascending',
		sortIndex: -1,
		icon: 'rural'
	},
	{
		label: 'Population Total',
		dataField: 'Population_Total',
		dataType: 'number',
		sortDirection: 'ascending',
		sortIndex: -1,
		icon: 'total'
	},
	{
		label: 'GDP Total',
		dataField: 'GDP_Total',
		dataType: 'number',
		sortDirection: 'ascending',
		sortIndex: -1,
		icon: 'gdp'
	}];

	handleApply(event) {
		const value = event.detail.value;

		this.table.current.clearSort();

		value.forEach(column => {
			this.table.current.sortBy(column.dataField, column.sortDirection === 'ascending' ? 'asc' : 'desc');
		});
	}

	init() {
		this.table.current.sortBy('Country', 'asc');
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Table ref={this.table} sortMode="many" dataSource={this.dataSourceTable} columns={this.columns} className="thead-light table-striped"
					id="table"></Table>
				<br />
				<br />
				<SortPanel  id="sortPanel" onApply={this.handleApply.bind(this)} dataSource={this.dataSourceSortPanel}></SortPanel>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
