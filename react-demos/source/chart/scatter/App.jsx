import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	averages = [{
		Age: 13,
		Male: 156.2,
		Female: 156.7
	},
	{
		Age: 14,
		Male: 163.8,
		Female: 158.7
	},
	{
		Age: 15,
		Male: 170.1,
		Female: 159.7
	},
	{
		Age: 16,
		Male: 173.4,
		Female: 162.5
	},
	{
		Age: 17,
		Male: 175.2,
		Female: 162.5
	},
	{
		Age: 18,
		Male: 175.7,
		Female: 163
	},
	{
		Age: 19,
		Male: 176.5,
		Female: 163
	},
	{
		Age: 20,
		Male: 177,
		Female: 163.3
	}
	];
	maleData = [];
	femaleData = [];
	toolTipFormatFunction = function (value, iidx, series, group, xAxisValue, xAxis) {
		const months = new Number(xAxisValue % 1 * 12);
		return `<strong>Gender:</strong> ${series.displayText.slice(0, series.displayText.length - 1)}
<br />
<strong>Height:</strong> ${value} cm
<br />
<strong>Age:</strong> ${parseInt(xAxisValue)} years ${months > 0 ? 'and ' + months + ' months' : ''}`;
	};

	animation = "none";
	clip = false;
	caption = 'Height of 100 Random Adolescents';
	description = 'between ages 13 and 20';
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
	colorScheme = 'scheme32';
	xAxis = {
		dataField: 'Age',
		valuesOnTicks: false,
		type: 'linear',
		unitInterval: 1,
		minValue: 13,
		maxValue: 20
	};
	valueAxis = {
		title: {
			text: 'Height (cm)'
		},
		minValue: 140,
		maxValue: 185
	};
	seriesGroups = [{
		type: 'scatter',
		series: [{
			dataField: 'Height',
			symbolSize: 20,
			symbolType: 'circle',
			displayText: 'Boys',
			toolTipFormatFunction: this.toolTipFormatFunction
		}]
	},
	{
		type: 'scatter',
		series: [{
			dataField: 'Height',
			symbolSize: 20,
			symbolType: 'diamond',
			displayText: 'Girls',
			toolTipFormatFunction: this.toolTipFormatFunction
		}]
	}
	];

	handleDropDownSerie1SymbolChange(event) {
		const chart = this.chart.current;

		if (chart.seriesGroups && chart.seriesGroups[0] && chart.seriesGroups[0].series) {
			chart.seriesGroups[0].series[0].symbolType = event.detail.value;
			chart.refresh();
		}
	}

	handleDropDownSerie2SymbolChange(event) {
		const chart = this.chart.current;

		if (chart.seriesGroups && chart.seriesGroups[1] && chart.seriesGroups[1].series) {
			chart.seriesGroups[1].series[0].symbolType = event.detail.value;
			chart.refresh();
		}
	}

	init() {
		const that = this;

		for (let i = 0; i < 200; i++) {
			let gender = i % 2 === 0 ? 'Male' : 'Female',
				age = Math.min(Math.random() * 7 + 13, 20),
				averageHeight = that.averages[Math.round(age) - 13][gender],
				height = Math.random() * 25 + averageHeight - 12.5;
			if (gender === 'Male') {
				that.maleData.push({
					Age: age,
					Height: parseFloat(height.toFixed(1))
				});
			} else {
				that.femaleData.push({
					Age: age,
					Height: parseFloat(height.toFixed(1))
				});
			}
		}

		that.seriesGroups[0].dataSource = that.maleData;
		that.seriesGroups[1].dataSource = that.femaleData;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Chart ref={this.chart} id="chart"
					animation={this.animation}
					clip={this.clip}
					caption={this.caption}
					description={this.description}
					showLegend={this.showLegend}
					padding={this.padding}
					titlePadding={this.titlePadding}
					colorScheme={this.colorScheme}
					xAxis={this.xAxis}
					valueAxis={this.valueAxis}
					seriesGroups={this.seriesGroups}></Chart>
				<div className="options">
					<table>
						<tr>
							<td>
								<p>Select Serie 1 Symbol:</p>
								<DropDownList ref="dropdownlist" id='dropDownSerie1Symbol'
									dataSource={["circle", "diamond", "square", "triangle_up", "triangle_down", "triangle_left", "triangle_right"]}
									selectionMode="one" selectedIndexes={[0]}
									onChange={this.handleDropDownSerie1SymbolChange.bind(this)}></DropDownList>
							</td>
						</tr>
						<tr>
							<td>
								<p>Select Serie 2 Symbol:</p>
								<DropDownList ref="dropdownlist2" id='dropDownSerie2Symbol'
									dataSource={["circle", "diamond", "square", "triangle_up", "triangle_down", "triangle_left", "triangle_right"]}
									selectionMode="one" selectedIndexes={[1]}
									onChange={this.handleDropDownSerie2SymbolChange.bind(this)}></DropDownList>
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
