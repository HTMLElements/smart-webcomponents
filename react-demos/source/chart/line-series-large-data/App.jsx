import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	timestamp = new Date(new Date().getFullYear(), 0, 1).getTime();
	sampleData = [{
		date: new Date(this.timestamp),
		dataPoint: 20
	}];

	animation = 'none';
	caption = 'Large set of hourly data points';
	description;
	showLegend = true;
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
	xAxis = {
		dataField: 'date',
		type: 'date',
		baseUnit: 'month',
		valuesOnTicks: true,
		unitInterval: 4,
		gridLines: {
			visible: true,
			unitInterval: 3,
			color: '#BCBCBC'
		},
		labels: {
			formatFunction(value) {
				return value.getMonth() + 1 + '/' + value.getFullYear();
			}
		}
	};
	valueAxis = {
		visible: true,
		tickMarks: {
			color: '#BCBCBC'
		},
		unitInterval: 100
	};
	colorScheme = 'scheme28';
	seriesGroups = [{
		type: 'line',
		series: [{
			dataField: 'dataPoint',
			displayText: 'hourly data points'
		}]
	}];

	init() {
		const that = this;

		for (let i = 0; i < 50000; i++) {
			let min, max, dataPoint;
			if (i % 14) {
				min = 5;
				max = 40;
			} else if (i % 7) {
				min = 100;
				max = 300;
			} else if (i % 3) {
				min = 100;
				max = 200;
			} else {
				min = 350;
				max = 500;
			}
			dataPoint = Math.round(Math.random() * (max - min) + min);
			if (i > 3500 && i < 5000) {
				dataPoint -= Math.round(Math.random() * 35 + 5);
			} else if (i > 11200 && i < 11700 && i % 3 === 0) {
				dataPoint += Math.round(Math.random() * 155 + 125);
			} else if (i > 16000 && i < 18000 || i > 22000 && i < 23000) {
				dataPoint += Math.round(Math.random() * 75 + 5);
			} else if (i >= 18000 && i <= 22000) {
				dataPoint += Math.round(Math.random() * 155 + 25);
			}
			this.timestamp += 3600000;
			this.sampleData.push({
				date: new Date(this.timestamp),
				dataPoint: dataPoint * Math.sin(i / 15)
			});

			this.description = `(${this.sampleData[0].date.getFullYear()}-${this.sampleData[this.sampleData.length - 1].date.getFullYear()})`;
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
