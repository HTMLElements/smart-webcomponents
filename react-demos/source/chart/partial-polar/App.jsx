import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	sampleData = [{
		City: 'London',
		SalesCountJan: 210,
		SalesRevenueJan: 123
	},
	{
		City: 'Madrid',
		SalesCountJan: 190,
		SalesRevenueJan: 114
	},
	{
		City: 'Munich',
		SalesCountJan: 201,
		SalesRevenueJan: 112
	},
	{
		City: 'Amsterdam',
		SalesCountJan: 110,
		SalesRevenueJan: 98
	},
	{
		City: 'Paris',
		SalesCountJan: 105,
		SalesRevenueJan: 93
	},
	{
		City: 'Prague',
		SalesCountJan: 54,
		SalesRevenueJan: 100
	}
	];

	caption = "Sales volume and revenue by city";
	description = "(revenue in thousands)";
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
	colorScheme = 'scheme01';
	dataSource = this.sampleData;
	xAxis = {
		dataField: 'City',
		valuesOnTicks: true,
		labels: {
			autoRotate: true
		}
	};
	valueAxis = {
		labels: {
			formatSettings: {
				decimalPlaces: 0
			},
			autoRotate: true
		}
	};
	seriesGroups = [{
		polar: true,
		endAngle: 270,
		radius: 120,
		type: 'line',
		series: [{
			dataField: 'SalesCountJan',
			displayText: 'Sales count',
			opacity: 0.7,
			lineWidth: 1,
			radius: 2,
			symbolType: 'circle'
		},
		{
			dataField: 'SalesRevenueJan',
			displayText: 'Revenue',
			opacity: 0.7,
			lineWidth: 1,
			radius: 2,
			symbolType: 'square'
		}
		]
	}];

	handleSliderStartAngleChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		chart.seriesGroups[0].startAngle = value;
		chart.update();
	}

	handleSliderEndAngleChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		chart.seriesGroups[0].endAngle = value;
		chart.update();
	}

	handleSliderRotateChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		if (!chart.seriesGroups && !chart.seriesGroups[0]) {
			return;
		}
		if (chart.seriesGroups[0]) {
			let startAngle = chart.seriesGroups[0].startAngle || 0,
				endAngle = chart.seriesGroups[0].endAngle || 0;
			if (isNaN(endAngle)) {
				endAngle = 360;
			}
			if (isNaN(startAngle)) {
				startAngle = 0;
			}
			const diff = endAngle - startAngle;
			chart.seriesGroups[0].startAngle = value;
			chart.seriesGroups[0].endAngle = value + diff;
			chart.update();
		}
	}

	handleSliderRadiusChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		chart.seriesGroups[0].radius = value;
		chart.update();
	}

	handleCheckBoxAutoRotateLabelsChange(event) {
		const chart = this.chart.current;

		if (chart.xAxis && chart.xAxis.labels) {
			chart.xAxis.labels.autoRotate = event.detail.value;
		}
		if (chart.valueAxis && chart.valueAxis.labels) {
			chart.valueAxis.labels.autoRotate = event.detail.value;
		}
	}

	handleCheckBoxTicksBetweenChange(event) {
		const chart = this.chart.current;

		if (chart.xAxis) {
			chart.xAxis.valuesOnTicks = !event.detail.value;
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
					colorScheme={this.colorScheme}
					dataSource={this.dataSource}
					xAxis={this.xAxis}
					valueAxis={this.valueAxis}
					seriesGroups={this.seriesGroups}></Chart>
				<div className="options">
					<table>
						<tr>
							<td>
								<p>Move the slider to change start angle:</p>
								<Slider ref="slider" id="sliderStartAngle"
									min="0" max="360" value="0" coerce labelsVisibility="endPoints" ticksVisibility="major"
									showUnit unit="°"
									onChange={this.handleSliderStartAngleChange.bind(this)}></Slider>
							</td>
						</tr>
						<tr>
							<td>
								<p>Move the slider to change end angle:</p>
								<Slider ref="slider2" id="sliderEndAngle"
									min="0" max="360" value="270" coerce labelsVisibility="endPoints" ticksVisibility="major"
									showUnit unit="°"
									onChange={this.handleSliderEndAngleChange.bind(this)}></Slider>
							</td>
						</tr>
						<tr>
							<td>
								<p>Move the slider to rotate:</p>
								<Slider ref="slider3" id="sliderRotate"
									min="0" max="360" value="0" coerce labelsVisibility="endPoints" ticksVisibility="major"
									onChange={this.handleSliderRotateChange.bind(this)}></Slider>
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
								<CheckBox ref="checkbox" id="checkBoxAutoRotateLabels" checked
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
