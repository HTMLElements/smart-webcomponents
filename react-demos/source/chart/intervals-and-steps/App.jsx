import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	sampleData = [12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 5, 12, 11];

	animation = 'none';
	caption = 'Chart unitInterval and steps example';
	description = '';
	showLegend = true;
	enableCrosshairs = false;
	padding = {
		left: 10,
		top: 5,
		right: 10,
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
		unitInterval: 1,
		gridLines: {
			step: 1
		},
		tickMarks: {
			step: 1
		},
		labels: {
			step: 2
		}
	};
	valueAxis = {
		title: {
			text: 'Value<br>'
		},
		unitInterval: 5,
		gridLines: {
			step: 1
		},
		tickMarks: {
			step: 1
		},
		labels: {
			step: 1
		},
		minValue: 0
	};
	colorScheme = 'scheme05';
	seriesGroups = [{
		type: 'line',
		series: [{
			displayText: 'value',
			opacity: 0.7
		}]
	}];

	handleInputXAxisLabelsStepChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		if (chart.xAxis && chart.xAxis.labels) {
			chart.xAxis.labels.step = value;
		}
	}

	handleInputXAxisGridLinesStepChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		if (chart.xAxis && chart.xAxis.gridLines) {
			chart.xAxis.gridLines.step = value;
		}
	}

	handleInputXAxisTickMarksStepChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		if (chart.xAxis && chart.xAxis.tickMarks) {
			chart.xAxis.tickMarks.step = value;
		}
	}

	handleInputXAxisUnitIntervalChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		if (chart.xAxis) {
			chart.xAxis.unitInterval = value;
		}
	}

	handleBtnValuesBetweenTicksChange(event) {
		const chart = this.chart.current;
		if (chart.xAxis) {
			chart.xAxis.valuesOnTicks = !event.detail.value;
		}
	}

	handleInputValueAxisLabelsStepChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		if (chart.valueAxis && chart.valueAxis.labels) {
			chart.valueAxis.labels.step = value;
		}
	}

	handleInputValueAxisGridLinesStepChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		if (chart.valueAxis && chart.valueAxis.gridLines) {
			chart.valueAxis.gridLines.step = value;
		}
	}

	handleInputValueAxisGridLinesStepChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		if (chart.valueAxis && chart.valueAxis.gridLines) {
			chart.valueAxis.gridLines.step = value;
		}
	}

	handleInputValueAxisTickMarksStepChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		if (chart.valueAxis && chart.valueAxis.tickMarks) {
			chart.valueAxis.tickMarks.step = value;
		}
	}

	handleInputValueAxisUnitIntervalChange(event) {
		const chart = this.chart.current,
			value = parseFloat(event.detail.value);
		if (chart.valueAxis) {
			chart.valueAxis.unitInterval = value;
		}
	}

	handleBtnValueAxisValuesBetweenTicksChange(event) {
		const chart = this.chart.current;
		if (chart.valueAxis) {
			chart.valueAxis.valuesOnTicks = !event.detail.value;
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
					enableCrosshairs={this.enableCrosshairs}
					padding={this.padding}
					titlePadding={this.titlePadding}
					dataSource={this.dataSource}
					xAxis={this.xAxis}
					valueAxis={this.valueAxis}
					colorScheme={this.colorScheme}
					seriesGroups={this.seriesGroups}></Chart>
				<div className="options">
					<table>
						<tr>
							<td>
								<table>
									<tr>
										<td colspan="2"><b>xAxis settings:</b>
										</td>
									</tr>
									<tr>
										<td>Labels step</td>
										<td>
											<NumericTextBox id="inputXAxisLabelsStep" min="1"
												max="10" value="2" spinButtons
												onChange={this.handleInputXAxisLabelsStepChange.bind(this)}></NumericTextBox>
										</td>
									</tr>
									<tr>
										<td>Grid lines step</td>
										<td>
											<NumericTextBox id="inputXAxisGridLinesStep" min="1"
												max="10" value="1" spinButtons
												onChange={this.handleInputXAxisGridLinesStepChange.bind(this)}></NumericTextBox>
										</td>
									</tr>
									<tr>
										<td>Tick marks step</td>
										<td>
											<NumericTextBox id="inputXAxisTickMarksStep" min="1"
												max="10" value="1" spinButtons
												onChange={this.handleInputXAxisTickMarksStepChange.bind(this)}></NumericTextBox>
										</td>
									</tr>
									<tr>
										<td>Unit unitInterval</td>
										<td>
											<NumericTextBox id="inputXAxisUnitInterval" min="1"
												max="10" value="1" spinButtons
												onChange={this.handleInputXAxisUnitIntervalChange.bind(this)}></NumericTextBox>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											<CheckBox id="btnValuesBetweenTicks"
												onChange={this.handleBtnValuesBetweenTicksChange.bind(this)}>Values between ticks</CheckBox>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<table>
									<tr>
										<td colspan="2"><b>valueAxis settings:</b>
										</td>
									</tr>
									<tr>
										<td>Labels step</td>
										<td>
											<NumericTextBox id="inputValueAxisLabelsStep" min="1"
												max="10" value="1" spinButtons
												onChange={this.handleInputValueAxisLabelsStepChange.bind(this)}></NumericTextBox>
										</td>
									</tr>
									<tr>
										<td>Grid lines step</td>
										<td>
											<NumericTextBox id="inputValueAxisGridLinesStep"
												min="1" max="10" value="1" spinButtons
												onChange={this.handleInputValueAxisGridLinesStepChange.bind(this)}></NumericTextBox>
										</td>
									</tr>
									<tr>
										<td>Tick marks step</td>
										<td>
											<NumericTextBox id="inputValueAxisTickMarksStep"
												min="1" max="10" value="1" spinButtons
												onChange={this.handleInputValueAxisTickMarksStepChange.bind(this)}></NumericTextBox>
										</td>
									</tr>
									<tr>
										<td>Unit unitInterval</td>
										<td>
											<NumericTextBox id="inputValueAxisUnitInterval"
												min="1" max="10" value="5" spinButtons
												onChange={this.handleInputValueAxisUnitIntervalChange.bind(this)}></NumericTextBox>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											<CheckBox id="btnValueAxisValuesBetweenTicks"
												onChange={this.handleBtnValueAxisValuesBetweenTicksChange.bind(this)}>Values between ticks</CheckBox>
										</td>
									</tr>
								</table>
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
