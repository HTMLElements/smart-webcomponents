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
		SerieB: 0,
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
		SerieA: 0,
		SerieB: 20,
		SerieC: 25
	}
	];

	caption = 'Pyramid series';
	description = 'This example demonstrates pyramid chart series';
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
		type: 'column',
		columnsGapPercent: 20,
		seriesGapPercent: 20,
		columnsTopWidthPercent: 0,
		columnsBottomWidthPercent: 100,
		series: [{
			dataField: 'SerieA',
			displayText: 'Serie A'
		},
		{
			dataField: 'SerieB',
			displayText: 'Serie B'
		},
		{
			dataField: 'SerieC',
			displayText: 'Serie C'
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
					sampleData={this.sampleData}
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
