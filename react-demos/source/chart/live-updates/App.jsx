import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	data = [];

	animation = 'none';
	caption = 'Live updates performance';
	description = 'Data changes every ' + 10 + ' milliseconds';
	showLegend = true;
	padding = {
		left: 10,
		top: 10,
		right: 10,
		bottom: 10
	};
	titlePadding = {
		left: 0,
		top: 0,
		right: 0,
		bottom: 10
	};
	dataSource = this.data;
	xAxis = {
		dataField: 'key',
		unitInterval: 1,
		valuesOnTicks: true,
		gridLines: {
			visible: false
		}
	};
	valueAxis = {
		minValue: 0,
		maxValue: 750,
		title: {
			text: 'Index Value<br>'
		}
	};
	colorScheme = 'scheme32';
	seriesGroups = [{
		type: 'line',
		useGradientColors: false,
		series: [{
			dataField: 'value1',
			displayText: 'value1',
			lineWidth: 2,
			symbolType: 'circle'
		}]
	},
	{
		type: 'spline',
		useGradientColors: false,
		columnsGapPercent: 50,
		alignEndPointsWithIntervals: true,
		series: [{
			dataField: 'value2',
			displayText: 'value2'
		}]
	},
	{
		type: 'column',
		useGradientColors: false,
		columnsGapPercent: 50,
		alignEndPointsWithIntervals: true,
		series: [{
			dataField: 'value3',
			displayText: 'value3'
		}]
	}
	];

	init() {
		const that = this;

		for (let i = 0; i < 20; i++) {
			that.data.push({
				key: i,
				value1: (Math.random() * 200) % 200 + 200,
				value2: (Math.random() * 200) % 200 + 500,
				value3: (Math.random() * 200) % 200
			});
		}

		const timerFunction = function () {
			that.data.splice(0, 1);
			that.data.push({
				key: that.data[that.data.length - 1].key + 1,
				value1: (Math.random() * 200) % 200 + 200,
				value2: (Math.random() * 200) % 200 + 500,
				value3: (Math.random() * 200) % 200
			});
			that.chart.current.update();
		};

		setInterval(timerFunction, 10);
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Chart ref={this.chart} id="chart"
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
