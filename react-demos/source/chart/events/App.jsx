import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.eventText = React.createRef();
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
		type: 'basic'
	};
	colorScheme = 'scheme32';
	showToolTips = false;
	seriesGroups = [{
		type: 'column',
		valueAxis: {
			minValue: 0,
			maxValue: 100,
			unitInterval: 10,
			title: {
				text: 'Time in minutes'
			}
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

	myEventHandler(event) {
		const eventDetail = event.detail;
		if (!eventDetail || typeof eventDetail !== 'object') {
			return;
		}
		let eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + eventDetail.serie.dataField + '<b>, Value: </b>' + eventDetail.elementValue + '</div>';
		if (event.type === 'toggle') {
			eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + eventDetail.serie.dataField + '<b>, visible: </b>' + eventDetail.state + '</div>';
		}

		this.eventText.current.innerHTML = eventData;
	}

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
					xAxis={this.xAxis}
					colorScheme={this.colorScheme}
					showToolTips={this.showToolTips}
					seriesGroups={this.seriesGroups}
					onMouseOut={this.myEventHandler.bind(this)}
					onMouseOver={this.myEventHandler.bind(this)}
					onClick={this.myEventHandler.bind(this)}
					onToggle={this.myEventHandler.bind(this)}></Chart>
				<br />
				<div ref={this.eventText} id="eventText"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
