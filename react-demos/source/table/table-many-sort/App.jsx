import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';
import { GetCountriesData } from './common/data';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
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
	]

	init() {
		const table = this.table.current;

		table.sortBy('Country', 'asc');
		table.sortBy('Population_Total', 'asc');
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">Add "sort-mode" attribute and set it to "many" to make the Table sortable
				by multiple columns
			        &lt;tbody&gt;.</div>
				<Table ref={this.table} sortMode="many" className="thead-light table-striped"
					id="table" dataSource={this.dataSource} columns={this.columns}></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
