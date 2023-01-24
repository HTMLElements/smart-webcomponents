import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	data = [{
		year: 2004,
		price: 0.1437
	},
	{
		year: 2005,
		price: 0.1470
	},
	{
		year: 2006,
		price: 0.1510
	},
	{
		year: 2007,
		price: 0.1605
	},
	{
		year: 2008,
		price: 0.1647
	},
	{
		year: 2009,
		price: 0.1736
	},
	{
		year: 2010,
		price: 0.1766
	},
	{
		year: 2011,
		price: 0.1902
	},
	{
		year: 2012,
		price: 0.1978
	},
	{
		year: 2017,
		price: 0.2113
	},
	{
		year: 2018,
		price: 0.2178
	}
	];

	renderEngine = 'HTML5';
	caption = 'Electricity prices in Europe between 2004 and 2018';
	description = 'dataSource: Eurostat';
	showLegend = true;
	padding = {
		left: 5,
		top: 5,
		right: 15,
		bottom: 5
	};
	titlePadding = {
		left: 90,
		top: 0,
		right: 0,
		bottom: 10
	};
	dataSource = this.data;
	xAxis = {
		padding: {
			top: 0,
			bottom: 0
		},
		labels: {
			angle: 0
		},
		dataField: 'year',
		displayText: 'Year',
		valuesOnTicks: false,
		gridLines: {
			color: '#CDCDCD'
		},
		tickMarks: {
			color: '#CDCDCD'
		}
	};
	colorScheme = 'scheme32';
	valueAxis = {
		position: 'right',
		padding: {
			left: 0,
			right: 0
		},
		title: {
			text: '<br><br>Price EUR / kWh'
		},
		labels: {
			visible: true,
			angle: 0,
			formatSettings: {
				decimalPlaces: 4,
				sufix: ' €'
			}
		},
		tickMarks: {
			visible: true,
			color: '#CDCDCD',
			size: 5
		},
		gridLines: {
			visible: true,
			color: '#CDCDCD'
		},
		alternatingBackgroundColor: '#EFEFEF',
		alternatingBackgroundColor2: '#CECECE',
		alternatingBackgroundOpacity: 0.2
	};
	seriesGroups = [{
		type: 'stepline',
		series: [{
			formatSettings: {
				decimalPlaces: 4
			},
			dataField: 'price',
			displayText: 'Price per kWh',
			labels: {
				visible: true
			},
			symbolType: 'circle'
		}]
	}];

	handleSliderValueAxisLeftPaddingChange(event) {
		const chart = this.chart.current;

		if (chart.valueAxis && chart.valueAxis.padding) {
			chart.valueAxis.padding.left = parseFloat(event.detail.value);
		}
	}

	handleSliderValueAxisRightPaddingChange(event) {
		const chart = this.chart.current;

		if (chart.valueAxis && chart.valueAxis.padding) {
			chart.valueAxis.padding.right = parseFloat(event.detail.value);
		}
	}

	handleSliderValueAxisAngleChange(event) {
		const chart = this.chart.current;

		if (chart.valueAxis && chart.valueAxis.labels) {
			chart.valueAxis.labels.angle = parseFloat(event.detail.value);
		}
	}

	handleSliderXAxisTopPaddingChange(event) {
		const chart = this.chart.current;

		if (chart.xAxis && chart.xAxis.padding) {
			chart.xAxis.padding.top = parseFloat(event.detail.value);
		}
	}

	handleSliderXAxisBottomPaddingChange(event) {
		const chart = this.chart.current;

		if (chart.xAxis && chart.xAxis.padding) {
			chart.xAxis.padding.bottom = parseFloat(event.detail.value);
		}
	}

	handleSliderXAxisAngleChange(event) {
		const chart = this.chart.current;

		if (chart.xAxis && chart.xAxis.labels) {
			chart.xAxis.labels.angle = parseFloat(event.detail.value);
		}
	}

	handleBtnLeftChange(event) {
		const chart = this.chart.current;

		if (event.detail.value && chart.valueAxis) {
			chart.valueAxis.position = 'left';
		}
	}

	handleBtnRightChange(event) {
		const chart = this.chart.current;

		if (event.detail.value && chart.valueAxis) {
			chart.valueAxis.position = 'right';
		}
	}

	handleBtnTopChange(event) {
		const chart = this.chart.current;

		if (event.detail.value && chart.xAxis) {
			chart.xAxis.position = 'top';
		}
	}

	handleBtnBottomChange(event) {
		const chart = this.chart.current;

		if (event.detail.value && chart.xAxis) {
			chart.xAxis.position = 'bottom';
		}
	}

	handleBtnValueAxisFlipChange(event) {
		const chart = this.chart.current;

		if (chart.valueAxis) {
			chart.valueAxis.flip = event.detail.value;
		}
	}

	handleBtnXAxisFlipChange(event) {
		const chart = this.chart.current;

		if (chart.xAxis) {
			chart.xAxis.flip = event.detail.value;
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
					animation="none"
					renderEngine={this.renderEngine}
					caption={this.caption}
					description={this.description}
					showLegend={this.showLegend}
					padding={this.padding}
					titlePadding={this.titlePadding}
					dataSource={this.dataSource}
					xAxis={this.xAxis}
					colorScheme={this.colorScheme}
					valueAxis={this.valueAxis}
					seriesGroups={this.seriesGroups}
				></Chart>
				<div className="options">
					<table>
						<tr>
							<td><b>Value axis properties:</b>
							</td>
						</tr>
						<tr>
							<td>Left padding:
			                    <Slider ref="slider" id="sliderValueAxisLeftPadding" min="0"
									max="50" value="0" coerce labelsVisibility="none" ticksVisibility="major"
									onChange={this.handleSliderValueAxisLeftPaddingChange.bind(this)}></Slider>
							</td>
						</tr>
						<tr>
							<td>Right padding:
			                    <Slider ref="slider2" id="sliderValueAxisRightPadding" min="0"
									max="50" value="0" coerce labelsVisibility="none" ticksVisibility="major"
									onChange={this.handleSliderValueAxisRightPaddingChange.bind(this)}></Slider>
							</td>
						</tr>
						<tr>
							<td>Labels angle:
			                    <Slider ref="slider3" id="sliderValueAxisAngle" min="0" max="360"
									value="0" coerce labelsVisibility="none" ticksVisibility="major"
									onChange={this.handleSliderValueAxisAngleChange.bind(this)}></Slider>
							</td>
						</tr>
						<tr>
							<td><b>xAxis properties:</b>
							</td>
						</tr>
						<tr>
							<td>Top padding:
			                    <Slider ref="slider4" id="sliderXAxisTopPadding" min="0" max="50"
									value="0" coerce labelsVisibility="none" ticksVisibility="major"
									onChange={this.handleSliderXAxisTopPaddingChange.bind(this)}></Slider>
							</td>
						</tr>
						<tr>
							<td>Bottom padding:
			                    <Slider ref="slider5" id="sliderXAxisBottomPadding" min="0"
									max="50" value="0" coerce labelsVisibility="none" ticksVisibility="major"
									onChange={this.handleSliderXAxisBottomPaddingChange.bind(this)}></Slider>
							</td>
						</tr>
						<tr>
							<td>Labels angle:
			                    <Slider ref="slider6" id="sliderXAxisAngle" min="0" max="360"
									value="0" coerce labelsVisibility="none" ticksVisibility="major"
									onChange={this.handleSliderXAxisAngleChange.bind(this)}></Slider>
							</td>
						</tr>
						<tr>
							<td>Position:
			                    <table>
									<tr>
										<td colspan="2">
											<RadioButton ref="radiobutton" id="btnLeft"
												onChange={this.handleBtnLeftChange.bind(this)}>Left</RadioButton>
											<br />
											<RadioButton ref="radiobutton2" id="btnRight" checked
												onChange={this.handleBtnRightChange.bind(this)}>Right</RadioButton>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>Position:
			                    <table>
									<tr>
										<td colspan="2">
											<RadioButton ref="radiobutton3" id="btnTop"
												onChange={this.handleBtnTopChange.bind(this)}>Top</RadioButton>
											<br />
											<RadioButton ref="radiobutton4" id="btnBottom" checked
												onChange={this.handleBtnBottomChange.bind(this)}>Bottom</RadioButton>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<CheckBox ref="checkbox" id="btnValueAxisFlip"
									onChange={this.handleBtnValueAxisFlipChange.bind(this)}>Flip valueAxis positions</CheckBox>
							</td>
						</tr>
						<tr>
							<td>
								<CheckBox ref="checkbox2" id="btnXAxisFlip"
									onChange={this.handleBtnXAxisFlipChange.bind(this)}>Flip xAxis positions</CheckBox>
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
