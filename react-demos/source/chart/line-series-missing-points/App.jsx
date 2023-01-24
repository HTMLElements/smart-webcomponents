import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	sampleData = [29, undefined, 10, 15, 10, undefined, NaN, 30, 25, undefined, 33, 19, 11];

	animation = 'none';
	caption = 'Line serie with missing points';
	description = 'Sample line serie with missing and invalid values';
	showLegend = true;
	padding = {
		left: 5,
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
	xAxis = {
		text: 'x',
		valuesOnTicks: false
	};
	colorScheme = 'scheme31';
	seriesGroups = [{
		type: 'line',
		toolTipFormatFunction: function (value, itemIndex) {
			return '<div style="text-align:left"><b>Index:</b> ' +
				itemIndex + '<br /><b>Value:</b> ' +
				value + '<br /></div>';
		},
		valueAxis: {
			title: {
				text: 'Value<br>'
			}
		},
		series: [{
			emptyPointsDisplay: 'skip',
			displayText: 'Value',
			lineWidth: 2,
			symbolSize: 8,
			symbolType: 'circle'
		}]
	}];

	handleChange(event) {
		const chart = this.chart.current;

		if (chart.seriesGroups && chart.seriesGroups[0] && chart.seriesGroups[0].series && chart.seriesGroups[0].series[0]) {
			chart.seriesGroups[0].series[0].emptyPointsDisplay = event.detail.value;
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
					animation={this.animation}
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
				<div className="options">
					<p>Select missing points display mode:</p>
					<DropDownList ref="dropdownlist"
						id="dropDownMissingPointsMode" dataSource={["skip", "zero", "connect"]}
						selectionMode="one" selectedIndexes={[0]}
						onChange={this.handleChange.bind(this)}></DropDownList>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
