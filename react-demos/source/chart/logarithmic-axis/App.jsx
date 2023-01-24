import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	sampleData = [{
		a: 0.35,
		b: 14.5
	}, {
		a: 1,
		b: 2.5
	}, {
		a: 10,
		b: 0.2
	}, {
		a: 100,
		b: 205
	}, {
		a: 1,
		b: 100
	}, {
		a: 5.11,
		b: 10.13
	}, {
		a: 20.13,
		b: 10.13
	}, {
		a: 600,
		b: 300
	}];

	caption = 'Logarithmic Scale Axis Example';
	description = 'Sample logarithmic scale axis with base 2';
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
	colorScheme = 'scheme29';
	xAxis = {
		dataField: ''
	};
	valueAxis = {
		logarithmicScale: true,
		logarithmicScaleBase: 2,
		unitInterval: 1,
		title: {
			text: 'Value'
		},
		labels: {
			formatSettings: {
				decimalPlaces: 3
			},
			horizontalAlignment: 'right'
		}
	};
	seriesGroups = [{
		type: 'column',
		series: [{
			dataField: 'a',
			displayText: 'A'
		},
		{
			dataField: 'b',
			displayText: 'B'
		}
		]
	},
	{
		type: 'line',
		series: [{
			dataField: 'a',
			displayText: 'A2'
		},
		{
			dataField: 'b',
			displayText: 'B2'
		}
		]
	}
	];

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
