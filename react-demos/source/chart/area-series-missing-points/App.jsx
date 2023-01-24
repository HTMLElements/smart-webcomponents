import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	sampleData = [{
		a: 25,
		b: 21
	},
	{
		a: 28,
		b: 19
	},
	{
		a: 35,
		b: undefined
	},
	{
		a: 29,
		b: NaN
	},
	{
		a: 38,
		b: 18
	},
	{
		a: 36,
		b: 17
	},
	{
		a: 31,
		b: 21
	}
	];

	animation = 'none';
	caption = 'Area series with missing points';
	description = 'Sample area series with missing and invalid values';
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
		valuesOnTicks: true
	};
	colorScheme = 'scheme30';
	seriesGroups = [{
		type: 'area',
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
			dataField: 'a',
			lineWidth: 2,
			symbolSize: 8,
			symbolType: 'circle',
			opacity: 0.8
		},
		{
			dataField: 'b',
			emptyPointsDisplay: 'skip',
			lineWidth: 2,
			symbolSize: 8,
			symbolType: 'diamond',
			opacity: 0.9
		}
		]
	}];

	handleChange(event) {
		const chart = this.chart.current;

		if (chart.seriesGroups && chart.seriesGroups[0] && chart.seriesGroups[0].series) {
			chart.seriesGroups[0].series[1].emptyPointsDisplay = event.detail.value;
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
					<DropDownList id="dropDownMissingPointsMode" dataSource={["skip", "zero", "connect"]}
						selectionMode="one" selectedIndexes={[0]} onChange={this.handleChange.bind(this)}></DropDownList>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
