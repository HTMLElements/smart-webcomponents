import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	sampleData = [{
		Index: '1',
		SerieA: -30,
		SerieB: -10,
		SerieC: -25
	},
	{
		Index: '2',
		SerieA: -25,
		SerieB: -25,
		SerieC: 10
	},
	{
		Index: '3',
		SerieA: 30,
		SerieB: 10,
		SerieC: 25
	},
	{
		Index: '4',
		SerieA: 35,
		SerieB: 25,
		SerieC: 45
	},
	{
		Index: '5',
		SerieA: 10,
		SerieB: 20,
		SerieC: 25
	},
	{
		Index: '6',
		SerieA: 30,
		SerieB: 10,
		SerieC: 30
	},
	{
		Index: '7',
		SerieA: 60,
		SerieB: 45,
		SerieC: 10
	}
	];

	caption = 'Stacked Funnel chart';
	description = 'This example demonstrates stacked funnel chart with positive and negative values';
	showLegend = true;
	padding = {
		left: 15,
		top: 15,
		right: 15,
		bottom: 15
	};
	titlePadding = {
		left: 90,
		top: 0,
		right: 0,
		bottom: 10
	};
	dataSource = this.sampleData;
	xAxis = {
		dataField: 'Index',
		tickMarks: {
			visible: true,
			unitInterval: 1
		},
		gridLines: {
			visible: true,
			unitInterval: 1
		}
	};
	valueAxis = {
		labels: {
			horizontalAlignment: 'right'
		}
	};
	colorScheme = 'scheme32';
	seriesGroups = [{
		type: 'stackedcolumn',
		columnsGapPercent: 50,
		seriesGapPercent: 0,
		columnsTopWidthPercent: 100,
		columnsBottomWidthPercent: 30,
		series: [{
			dataField: 'SerieA',
			displayText: 'Serie A',
			labels: {
				visible: true
			}
		},
		{
			dataField: 'SerieB',
			displayText: 'Serie B',
			labels: {
				visible: true
			}
		},
		{
			dataField: 'SerieC',
			displayText: 'Serie C',
			labels: {
				visible: true
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
					valueAxis={this.valueAxis}
					colorScheme={this.colorScheme}
					seriesGroups={this.seriesGroups}></Chart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
