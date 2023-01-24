import React from "react";
import ReactDOM from "react-dom";
import { Grid, Smart } from 'smart-webcomponents-react/grid';
import { GetCountriesData } from './common/data';

class App extends React.Component {
	appearance = {
		showRowHeaderNumber: true,
		allowRowDetailToggleAnimation: true
	};
	onRowInit(index, row) {
		if (index === 0) {
			row.showDetail = true;
		}
	};
	onRowDetailInit(index, row, detail) {
		const grid = document.createElement('div');

		detail.appendChild(grid);

		new Smart.Grid(grid, {
			dataSource: new Smart.DataAdapter(
				{
					dataSource: GetCountriesData().filter(data => data.ID === row.data.ID),
					dataFields:
						[
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
				}),
			columns: [
				'Population_Urban',
				'Population_Rural',
				'Population_Total',
				'GDP_Total'
			]
		});
	};
	rowDetail = {
		enabled: true,
		visible: true,
		dialog: {
			enabled: true
		}
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
	columns = [
		'Country',
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
				<div className="demo-description">smartGrid can display nested Grids by using the Row Detail functionality.
				By expanding a Grid row in this demo, a Nested Grid is displayed showing
				additional details about data. That is achieved by enabling row details
			        and implementing the 'onRowDetailInit' callback function.</div>
				<Grid id="grid"
					appearance={this.appearance}
					onRowInit={this.onRowInit}
					onRowDetailInit={this.onRowDetailInit}
					rowDetail={this.rowDetail}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
