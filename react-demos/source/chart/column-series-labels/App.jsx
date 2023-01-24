import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	sampleData = [{
		Country: 'Luxembourg',
		GDP: 104103,
		Debt: 23827
	},
	{
		Country: 'Singapore',
		GDP: 57714,
		Debt: 59808
	},
	{
		Country: 'Bulgaria',
		GDP: 8031,
		Debt: 2123
	},
	{
		Country: 'Norway',
		GDP: 75504,
		Debt: 34910
	},
	{
		Country: 'USA',
		GDP: 59531,
		Debt: 62034
	},
	{
		Country: 'Maldives',
		GDP: 10535,
		Debt: 6489
	},
	{
		Country: 'Mali',
		GDP: 824,
		Debt: 280
	},
	{
		Country: 'Japan',
		GDP: 38428,
		Debt: 90345
	}
	];

	caption = 'Economic comparison';
	description = 'GDP and Debt in 2017';
	showLegend = true;
	padding = {
		left: 5,
		top: 5,
		right: 5,
		bottom: 5
	};
	titlePadding = {
		left: 0,
		top: 0,
		right: 0,
		bottom: 10
	};
	dataSource = this.sampleData;
	xAxis = {
		position: 'top',
		dataField: 'Country',
		gridLines: {
			visible: true
		}
	};
	colorScheme = 'scheme32';
	seriesGroups = [{
		type: 'column',
		columnsGapPercent: 50,
		valueAxis: {
			title: {
				text: 'GDP & Debt per Capita($)'
			}
		},
		series: [{
			dataField: 'GDP',
			displayText: 'GDP per Capita',
			labels: {
				visible: true,
				verticalAlignment: 'top',
				offset: {
					x: 0,
					y: -20
				}
			},
			formatFunction: function (value) {
				if (value < 2000) {
					return value;
				}
				return Math.round(value / 1000) + 'K';
			}
		},
		{
			dataField: 'Debt',
			displayText: 'Debt per Capita',
			labels: {
				visible: true,
				verticalAlignment: 'top',
				offset: {
					x: 0,
					y: -20
				}
			},
			formatFunction: function (value) {
				if (value < 2000) {
					return value;
				}
				return Math.round(value / 1000) + 'K';
			}
		}
		]
	}];

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Chart id="chart"
					caption={this.caption}
					description={this.description}
					showLegend={this.showLegend}
					padding={this.padding}
					titlePadding={this.titlePadding}
					dataSource={this.dataSource}
					xAxis={this.xAxis}
					colorScheme={this.colorScheme}
					seriesGroups={this.seriesGroups}></Chart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
