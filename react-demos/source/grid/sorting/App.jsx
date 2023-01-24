import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetCountriesData } from './common/data';

class App extends React.Component {
	sorting = {
		enabled: true
	};
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
	columns = [{
		label: 'Country',
		dataField: 'Country',
		sortOrder: 'desc'
	},
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
	];

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Click on a column header to Sort by it.</div>
				<Grid id="grid"
					sorting={this.sorting}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
