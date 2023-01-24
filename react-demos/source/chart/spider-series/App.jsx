import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	sampleData = [{
		type: 'Organic Search',
		month1: 1725090,
		month2: 3136190
	},
	{
		type: 'Paid Search',
		month1: 925090,
		month2: 2136190
	},
	{
		type: 'Direct',
		month1: 425090,
		month2: 936190
	},
	{
		type: 'Referral',
		month1: 1250900,
		month2: 2536190
	},
	{
		type: 'Twitter',
		month1: 350900,
		month2: 681900
	},
	{
		type: 'Facebook',
		month1: 381900,
		month2: 831500
	}
	];

	caption = 'Website audience acquision by source';
	description = 'Month over month comparison';
	animation = 'none';
	showLegend = true;
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
		bottom: 5
	};
	dataSource = this.sampleData;
	colorScheme = 'scheme05';
	xAxis = {
		dataField: 'type',
		displayText: 'Traffic source',
		valuesOnTicks: true,
		labels: {
			autoRotate: false
		}
	};
	valueAxis = {
		unitInterval: 1000000,
		labels: {
			formatSettings: {
				decimalPlaces: 0
			},
			formatFunction: function (value, itemIndex, series, group) {
				return Math.round(value / 1000) + ' K';
			}
		}
	};
	seriesGroups = [{
		spider: true,
		startAngle: 0,
		endAngle: 360,
		radius: 120,
		type: 'spline',
		series: [{
			dataField: 'month1',
			displayText: 'January 2018',
			opacity: 0.7,
			radius: 2,
			lineWidth: 2,
			symbolType: 'circle'
		},
		{
			dataField: 'month2',
			displayText: 'February 2018',
			opacity: 0.7,
			radius: 2,
			lineWidth: 2,
			symbolType: 'square'
		}
		]
	}];

	handleSliderStartAngleChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		if (chart.seriesGroups && chart.seriesGroups[0]) {
			chart.seriesGroups[0].startAngle = value;
			chart.seriesGroups[0].endAngle = value + 360;
			chart.update();
		}
	}

	handleSliderRadiusChange(event) {
		const chart = this.chart.current;
		if (!chart.seriesGroups) {
			return;
		}
		const value = parseFloat(event.detail.value);
		if (chart.seriesGroups[0]) {
			chart.seriesGroups[0].radius = value;
			chart.update();
		}
	}

	handleCheckBoxAutoRotateLabelsChange(event) {
		const chart = this.chart.current;

		if (!chart) {
			return;
		}
		if (chart.xAxis && chart.xAxis.labels) {
			chart.xAxis.labels.autoRotate = event.detail.value;
		}
		if (chart.valueAxis && chart.valueAxis.labels) {
			chart.valueAxis.labels.autoRotate = event.detail.value;
		}
	}

	handleCheckBoxTicksBetweenChange(event) {
		const chart = this.chart.current;

		if (!chart || !chart.xAxis) {
			return;
		}
		chart.xAxis.valuesOnTicks = !event.detail.value;
	}

	handleDropDownColorsChange(event) {
		this.chart.current.colorScheme = event.target.selectedValues[0];
	}

	handleDropDownSeriesChange(event) {
		const chart = this.chart.current;

		if (!chart.seriesGroups) {
			return;
		}
		if (chart.seriesGroups[0]) {
			const dropDownList = event.target;
			if (!dropDownList.selectedValues) {
				return;
			}
			chart.seriesGroups[0].type = dropDownList.selectedValues[0];
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
					animation={this.animation}
					showLegend={this.showLegend}
					padding={this.padding}
					titlePadding={this.titlePadding}
					dataSource={this.dataSource}
					colorScheme={this.colorScheme}
					xAxis={this.xAxis}
					valueAxis={this.valueAxis}
					seriesGroups={this.seriesGroups}></Chart>
				<div className="options">
					<table>
						<tr>
							<td>
								<p>Move the slider to rotate:</p>
								<Slider ref="slider" id="sliderStartAngle"
									min="0" max="360" value="0" coerce labelsVisibility="endPoints" ticksVisibility="major"
									showUnit unit="°"
									onChange={this.handleSliderStartAngleChange.bind(this)}></Slider>
							</td>
						</tr>
						<tr>
							<td>
								<p>Select the series type:</p>
								<DropDownList id='dropDownSeries'
									dataSource={["splinearea", "spline", "column", "scatter", "stackedcolumn", "stackedsplinearea", "stackedspline"]}
									selectionMode="one" selectedIndexes={[1]}
									onChange={this.handleDropDownSeriesChange.bind(this)}></DropDownList>
							</td>
						</tr>
						<tr>
							<td>
								<p>Move the slider to change the radius:</p>
								<Slider ref="slider4" id="sliderRadius"
									min="80" max="140" value="120" coerce labelsVisibility="endPoints" ticksVisibility="major"
									onChange={this.handleSliderRadiusChange.bind(this)}></Slider>
							</td>
						</tr>
						<tr>
							<td>
								<p>Select color scheme:</p>
								<DropDownList id='dropDownColors'
									dataSource={["scheme01", "scheme02", "scheme03", "scheme04", "scheme05", "scheme06", "scheme07", "scheme08"]}
									selectionMode="one" selectedIndexes={[4]}
									onChange={this.handleDropDownColorsChange.bind(this)}></DropDownList>
							</td>
						</tr>
						<tr>
							<td>
								<CheckBox ref="checkbox" id="checkBoxAutoRotateLabels"
									onChange={this.handleCheckBoxAutoRotateLabelsChange.bind(this)}>Auto-rotate labels</CheckBox>
							</td>
						</tr>
						<tr>
							<td>
								<CheckBox ref="checkbox2" id="checkBoxTicksBetween"
									onChange={this.handleCheckBoxTicksBetweenChange.bind(this)}>Ticks between values</CheckBox>
							</td>
						</tr>
					</table>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
