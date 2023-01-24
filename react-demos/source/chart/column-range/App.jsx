import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	sampleData = [{
		month: 'Jan',
		min: -3,
		max: 3
	},
	{
		month: 'Feb',
		min: -3,
		max: 5
	},
	{
		month: 'Mar',
		min: 1,
		max: 10
	},
	{
		month: 'Apr',
		min: 4,
		max: 15
	},
	{
		month: 'May',
		min: 8,
		max: 18
	},
	{
		month: 'Jun',
		min: 12,
		max: 23
	},
	{
		month: 'Jul',
		min: 13,
		max: 25
	},
	{
		month: 'Aug',
		min: 13,
		max: 24
	},
	{
		month: 'Sep',
		min: 10,
		max: 20
	},
	{
		month: 'Oct',
		min: 6,
		max: 14
	},
	{
		month: 'Nov',
		min: 1,
		max: 8
	},
	{
		month: 'Dec',
		min: -2,
		max: -1
	}
	];

	caption = 'Temperature Averages by Month in Bern, Switzerland';
	description = '(source ncdc.noaa.gov)';
	showLegend = false;
	padding = {
		left: 10,
		top: 5,
		right: 10,
		bottom: 5
	};
	titlePadding = {
		left: 50,
		top: 0,
		right: 0,
		bottom: 10
	};
	dataSource = this.sampleData;
	colorScheme = 'scheme05';
	xAxis = {
		dataField: 'month',
		labels: {
			angle: 90
		},
		gridLines: {
			visible: false
		}
	};
	valueAxis = {
		visible: true,
		title: {
			text: 'Temperature (°C)'
		},
		flip: true,
		minValue: -10,
		maxValue: 30,
		formatSettings: {
			decimalPlaces: 0
		}
	};
	seriesGroups = [{
		type: 'rangecolumn',
		orientation: 'horizontal',
		columnsMaxWidth: 15,
		series: [{
			dataFieldFrom: 'min',
			dataFieldTo: 'max',
			displayText: 'Temperature Range'
		}]
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
					colorScheme={this.colorScheme}
					xAxis={this.xAxis}
					valueAxis={this.valueAxis}
					seriesGroups={this.seriesGroups}></Chart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
