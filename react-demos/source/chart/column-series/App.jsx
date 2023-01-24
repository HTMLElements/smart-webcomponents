import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	sampleData = [{
		Day: 'Monday',
		Keith: 30,
		Erica: 15,
		George: 25
	},
	{
		Day: 'Tuesday',
		Keith: 25,
		Erica: 25,
		George: 30
	},
	{
		Day: 'Wednesday',
		Keith: 30,
		Erica: 20,
		George: 25
	},
	{
		Day: 'Thursday',
		Keith: 35,
		Erica: 25,
		George: 45
	},
	{
		Day: 'Friday',
		Keith: 20,
		Erica: 20,
		George: 25
	},
	{
		Day: 'Saturday',
		Keith: 30,
		Erica: 20,
		George: 30
	},
	{
		Day: 'Sunday',
		Keith: 60,
		Erica: 45,
		George: 90
	}
	];

	caption = 'Fitness & exercise weekly scorecard';
	description = 'Time spent in vigorous exercise';
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
		gridLines: {
			visible: true
		}
	};
	colorScheme = 'scheme29';
	seriesGroups = [{
		type: 'column',
		columnsGapPercent: 50,
		seriesGapPercent: 0,
		valueAxis: {
			unitInterval: 10,
			minValue: 0,
			maxValue: 100,
			description: 'Time in minutes',
			axisSize: 'auto'
		},
		series: [{
			dataField: 'Keith',
			displayText: 'Keith'
		},
		{
			dataField: 'Erica',
			displayText: 'Erica'
		},
		{
			dataField: 'George',
			displayText: 'George'
		}
		]
	}];

	handleChange(event) {
		const chart = this.chart.current;

		if (chart.seriesGroups && chart.seriesGroups[0]) {
			chart.seriesGroups[0].useGradientColors = event.detail.value;
			chart.update();
		}
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Chart ref={this.chart} id="chart"
					caption={this.caption}
					description={this.description}
					showLegend={this.showLegend}
					padding={this.padding}
					titlePadding={this.titlePadding}
					dataSource={this.dataSource}
					xAxis={this.xAxis}
					colorScheme={this.colorScheme}
					seriesGroups={this.seriesGroups}></Chart>
				<br />
				<div id="options">
					<CheckBox id="gradients" onChange={this.handleChange.bind(this)}>Use gradients</CheckBox>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
