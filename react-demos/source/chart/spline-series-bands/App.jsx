import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	sampleData = [{
		Hour: '9 PM',
		Bangkok: 13,
		Sofia: 5,
		Honolulu: 24,
		'Rio Gallegos': 14
	},
	{
		Hour: '12 AM',
		Bangkok: 19,
		Sofia: 8,
		Honolulu: 26,
		'Rio Gallegos': 18
	},
	{
		Hour: '3 AM',
		Bangkok: 16,
		Sofia: 13,
		Honolulu: 24,
		'Rio Gallegos': 27
	},
	{
		Hour: '6 AM',
		Bangkok: 16,
		Sofia: 11,
		Honolulu: 24,
		'Rio Gallegos': 31
	},
	{
		Hour: '9 AM',
		Bangkok: 13,
		Sofia: 10,
		Honolulu: 26,
		'Rio Gallegos': 34
	},
	{
		Hour: '12 PM',
		Bangkok: 11,
		Sofia: 10,
		Honolulu: 34,
		'Rio Gallegos': 34
	},
	{
		Hour: '3 PM',
		Bangkok: 13,
		Sofia: 8,
		Honolulu: 35,
		'Rio Gallegos': 31
	},
	{
		Hour: '6 PM',
		Bangkok: 23,
		Sofia: 8,
		Honolulu: 32,
		'Rio Gallegos': 26
	}
	];

	caption = 'Wind speed';
	description = 'on March 8, 2019';
	showLegend = true;
	padding = {
		left: 50,
		top: 5,
		right: 50,
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
		dataField: 'Hour',
		type: 'basic',
		tickMarks: {
			visible: true,
			unitInterval: 1,
			color: '#BCBCBC'
		},
		unitInterval: 1
	};
	valueAxis = {
		minValue: 0,
		maxValue: 50,
		visible: true,
		gridLines: {
			visible: false
		},
		title: {
			text: 'Wind speed (km/h)'
		},
		tickMarks: {
			color: '#BCBCBC'
		}
	};
	seriesGroups = [{
		type: 'spline',
		series: [{
			dataField: 'Bangkok',
			displayText: 'Bangkok'
		},
		{
			dataField: 'Sofia',
			displayText: 'Sofia'
		},
		{
			dataField: 'Honolulu',
			displayText: 'Honolulu'
		},
		{
			dataField: 'Rio Gallegos',
			displayText: 'Rio Gallegos'
		}
		],
		bands: [{
			minValue: 2,
			maxValue: 6,
			color: 'rgba(124, 181, 236, 0.3)'
		},
		{
			minValue: 13,
			maxValue: 19,
			color: 'rgba(124, 181, 236, 0.3)'
		},
		{
			minValue: 31,
			maxValue: 39,
			color: 'rgba(124, 181, 236, 0.3)'
		}
		],
		annotations: [{
			type: 'text',
			yValue: 5,
			xValue: 0,
			offset: {
				x: 10
			},
			fillColor: '#EFEFEF',
			text: {
				value: 'Light Air'
			}
		},
		{
			type: 'text',
			yValue: 10.5,
			xValue: 0,
			offset: {
				x: 10
			},
			fillColor: '#EFEFEF',
			text: {
				value: 'Light Breeze'
			}
		},
		{
			type: 'text',
			yValue: 19,
			xValue: 0,
			offset: {
				x: 10
			},
			fillColor: '#EFEFEF',
			text: {
				value: 'Gentle Breeze'
			}
		},
		{
			type: 'text',
			yValue: 28,
			xValue: 0,
			offset: {
				x: 10
			},
			fillColor: '#EFEFEF',
			text: {
				value: 'Moderate Breeze'
			}
		},
		{
			type: 'text',
			yValue: 36,
			xValue: 0,
			offset: {
				x: 10
			},
			fillColor: '#EFEFEF',
			text: {
				value: 'Fresh Breeze'
			}
		},
		{
			type: 'text',
			yValue: 46,
			xValue: 0,
			offset: {
				x: 10
			},
			fillColor: '#EFEFEF',
			text: {
				value: 'Strong Breeze'
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
