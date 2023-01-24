import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	animation = 'none';
	caption = 'Large set of data points';
	description = '';
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
	dataSource = [];
	colorScheme = 'scheme32';
	xAxis = {
		dataField: 'x',
		valuesOnTicks: false
	};
	valueAxis = {
		unitInterval: 10,
		title: {
			text: 'Sales ($)<br>'
		},
		labels: {
			formatSettings: {
				prefix: '$',
				thousandsSeparator: ','
			},
			horizontalAlignment: 'right'
		}
	};
	seriesGroups = [{
		type: 'scatter',
		series: [{
			dataField: 'y',
			symbolSize: 0.1,
			symbolType: 'circle',
			displayText: 'Sales in Q1'
		}]
	}];

	init() {
		for (let i = 0; i < 25000; i++) {
			this.dataSource.push({
				x: Math.pow(Math.random(), 3) * 50,
				y: Math.pow(Math.random(), 3) * 70
			});
		}
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Chart id="chart"
					animation={this.animation}
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
