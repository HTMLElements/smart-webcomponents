import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	sampleData = [{
		Day: 'Monday',
		Running: 30,
		Swimming: 0,
		Cycling: 25
	},
	{
		Day: 'Tuesday',
		Running: 25,
		Swimming: 25,
		Cycling: 0
	},
	{
		Day: 'Wednesday',
		Running: 30,
		Swimming: 0,
		Cycling: 25
	},
	{
		Day: 'Thursday',
		Running: 35,
		Swimming: 25,
		Cycling: 45
	},
	{
		Day: 'Friday',
		Running: 0,
		Swimming: 20,
		Cycling: 25
	},
	{
		Day: 'Saturday',
		Running: 30,
		Swimming: 0,
		Cycling: 30
	},
	{
		Day: 'Sunday',
		Running: 60,
		Swimming: 45,
		Cycling: 0
	}
	];

	caption = 'Fitness & exercise weekly scorecard';
	description = 'Time spent in vigorous exercise by activity';
	showLegend = true;
	padding = {
		left: 5,
		top: 5,
		right: 5,
		bottom: 5
	};
	titlePadding = {
		left: 90,
		top: 0,
		right: 0,
		bottom: 10
	};
	dataSource = this.sampleData;
	xAxis = {
		dataField: 'Day',
		tickMarks: {
			visible: true,
			unitInterval: 1,
			color: '#BCBCBC'
		},
		gridLines: {
			visible: true,
			unitInterval: 1,
			color: '#BCBCBC'
		},
		axisSize: 'auto'
	};
	valueAxis = {
		unitInterval: 10,
		title: {
			text: 'Time in minutes'
		},
		tickMarks: {
			color: '#BCBCBC'
		},
		gridLines: {
			color: '#BCBCBC'
		},
		labels: {
			horizontalAlignment: 'right',
			formatSettings: {
				sufix: '%'
			}
		},
	};
	colorScheme = 'scheme05';
	seriesGroups = [{
		type: 'stackedcolumn100',
		columnsGapPercent: 100,
		seriesGapPercent: 5,
		series: [{
			dataField: 'Running',
			displayText: 'Running'
		},
		{
			dataField: 'Swimming',
			displayText: 'Swimming'
		},
		{
			dataField: 'Cycling',
			displayText: 'Cycling'
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
