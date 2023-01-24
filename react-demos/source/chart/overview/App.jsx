import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	caption = "Fitness & exercise weekly scorecard";
	description = "Time spent in vigorous exercise by activity";
	showLegend = true;

	padding = {
		left: 10,
		top: 10,
		right: 15,
		bottom: 10
	};

	titlePadding = {
		left: 90,
		top: 0,
		right: 0,
		bottom: 10
	};

	dataSource = [{
		Day: 'Monday',
		Running: 30,
		Swimming: 10,
		Cycling: 25,
		Goal: 40
	},
	{
		Day: 'Tuesday',
		Running: 25,
		Swimming: 15,
		Cycling: 10,
		Goal: 50
	},
	{
		Day: 'Wednesday',
		Running: 30,
		Swimming: 10,
		Cycling: 25,
		Goal: 60
	},
	{
		Day: 'Thursday',
		Running: 40,
		Swimming: 20,
		Cycling: 25,
		Goal: 40
	},
	{
		Day: 'Friday',
		Running: 45,
		Swimming: 20,
		Cycling: 25,
		Goal: 50
	},
	{
		Day: 'Saturday',
		Running: 30,
		Swimming: 20,
		Cycling: 30,
		Goal: 60
	},
	{
		Day: 'Sunday',
		Running: 20,
		Swimming: 30,
		Cycling: 10,
		Goal: 90
	}
	];
	colorScheme = 'scheme13';
	xAxis = {
		dataField: 'Day',
		unitInterval: 2,
		tickMarks: {
			visible: true,
			unitInterval: 1
		},
		gridLines: {
			visible: true,
			unitInterval: 1
		},
		valuesOnTicks: false,
		padding: {
			bottom: 10
		}
	};
	valueAxis = {
		unitInterval: 10,
		minValue: 0,
		maxValue: 50,
		title: {
			text: 'Time in minutes<br><br>'
		},
		labels: {
			horizontalAlignment: 'right'
		}
	};

	seriesGroups = [{
		type: 'spline',
		series: [{
			dataField: 'Swimming',
			symbolType: 'square',
			labels: {
				visible: true,
				backgroundColor: '#FEFEFE',
				backgroundOpacity: 0.2,
				borderColor: '#7FC4EF',
				borderOpacity: 0.7,
				padding: {
					left: 5,
					right: 5,
					top: 0,
					bottom: 0
				}
			}
		},
		{
			dataField: 'Running',
			symbolType: 'square',
			labels: {
				visible: true,
				backgroundColor: '#FEFEFE',
				backgroundOpacity: 0.2,
				borderColor: '#7FC4EF',
				borderOpacity: 0.7,
				padding: {
					left: 5,
					right: 5,
					top: 0,
					bottom: 0
				}
			}
		}
		]
	}];

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Chart
					caption={this.caption}
					description={this.description}
					showLegend={this.showLegend}
					padding={this.padding}
					titlePadding={this.titlePadding}
					dataSource={this.dataSource}
					colorScheme={this.colorScheme}
					xAxis={this.xAxis}
					valueAxis={this.valueAxis}
					seriesGroups={this.seriesGroups}
					id="chart">
				</Chart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
