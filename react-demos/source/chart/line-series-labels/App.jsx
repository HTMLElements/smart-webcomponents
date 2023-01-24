import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	sampleData = [{
		Month: 'Jan',
		Varna: 6,
		Moscow: -5,
		Cairo: 19
	},
	{
		Month: 'Feb',
		Varna: 8,
		Moscow: -4,
		Cairo: 21
	},
	{
		Month: 'Mar',
		Varna: 11,
		Moscow: 2,
		Cairo: 24
	},
	{
		Month: 'Apr',
		Varna: 16,
		Moscow: 11,
		Cairo: 29
	},
	{
		Month: 'May',
		Varna: 21,
		Moscow: 19,
		Cairo: 33
	},
	{
		Month: 'Jun',
		Varna: 26,
		Moscow: 22,
		Cairo: 35
	},
	{
		Month: 'Jul',
		Varna: 28,
		Moscow: 24,
		Cairo: 35
	},
	{
		Month: 'Aug',
		Varna: 29,
		Moscow: 22,
		Cairo: 35
	},
	{
		Month: 'Sep',
		Varna: 24,
		Moscow: 16,
		Cairo: 34
	},
	{
		Month: 'Oct',
		Varna: 19,
		Moscow: 8,
		Cairo: 30
	},
	{
		Month: 'Nov',
		Varna: 13,
		Moscow: 1,
		Cairo: 25
	},
	{
		Month: 'Dec',
		Varna: 8,
		Moscow: -3,
		Cairo: 21
	},
	];

	caption = 'Monthly Average Temperature';
	description = 'dataSource: google.com';
	showLegend = true;
	padding = {
		left: 30,
		top: 5,
		right: 30,
		bottom: 5
	};
	titlePadding = {
		left: 50,
		top: 0,
		right: 0,
		bottom: 10
	};
	dataSource = this.sampleData;
	colorScheme = 'scheme32';
	xAxis = {
		dataField: 'Month',
		tickMarks: {
			visible: true,
			unitInterval: 1,
			color: '#BCBCBC'
		},
		gridLines: {
			visible: true,
			unitInterval: 3,
			color: '#BCBCBC'
		}
	};
	clip = false;
	valueAxis = {
		visible: true,
		title: {
			text: 'Temperature (°C)'
		},
		tickMarks: {
			color: '#BCBCBC'
		},
		unitInterval: 10,
		minValue: -10,
		maxValue: 40
	};
	seriesGroups = [{
		type: 'line',
		series: [{
			dataField: 'Varna',
			displayText: 'Varna',
			labels: {
				visible: true,
				formatSettings: {
					sufix: '°'
				}
			},
			symbolType: 'circle',
			symbolSize: 8
		},
		{
			dataField: 'Moscow',
			displayText: 'Moscow',
			labels: {
				visible: true,
				formatSettings: {
					sufix: '°'
				}
			},
			symbolType: 'diamond',
			symbolSize: 10
		},
		{
			dataField: 'Cairo',
			displayText: 'Cairo',
			labels: {
				visible: true,
				formatSettings: {
					sufix: '°'
				}
			},
			symbolType: 'square',
			symbolSize: 8
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
					colorScheme={this.colorScheme}
					xAxis={this.xAxis}
					clip={this.clip}
					valueAxis={this.valueAxis}
					seriesGroups={this.seriesGroups}></Chart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
