import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	sampleData = [{
		a: 0.1535,
		b: 0.5
	},
	{
		a: 0.48,
		b: 20.5
	},
	{
		a: 10,
		b: 60
	},
	{
		a: 100,
		b: 80
	},
	{
		a: 200,
		b: 90
	},
	{
		a: 245.11,
		b: 100.13
	},
	{
		a: 300.13,
		b: 150.13
	},
	{
		a: 340,
		b: 200
	}
	];

	caption = 'Logarithmic Scale x-Axis Example';
	renderEngine = 'HTML5';
	description = 'Horizontal axis with base 2 logarithmic scale';
	padding = {
		left: 15,
		top: 5,
		right: 15,
		bottom: 5
	};
	titlePadding = {
		left: 0,
		top: 0,
		right: 0,
		bottom: 10
	};
	dataSource = this.sampleData;
	colorScheme = 'scheme32';
	xAxis = {
		dataField: 'a',
		logarithmicScale: true,
		logarithmicScaleBase: 2
	};
	valueAxis = {
		logarithmicScale: false,
		logarithmicScaleBase: 2,
		title: {
			text: 'Value'
		},
		labels: {
			horizontalAlignment: 'right'
		}
	};
	seriesGroups = [{
		type: 'line',
		series: [{
			dataField: 'a',
			displayText: 'A',
			symbolType: 'square',
			symbolSize: 6,
			dashStyle: '4,4',
			lineWidth: 1
		},
		{
			dataField: 'b',
			displayText: 'B',
			symbolType: 'circle',
			symbolSize: 6,
			lineWidth: 1
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
					renderEngine={this.renderEngine}
					description={this.description}
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
