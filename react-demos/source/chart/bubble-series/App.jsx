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
		City: 'New York',
		SalesQ1: 310500,
		SalesQ2: 210500,
		YoYGrowthQ1: 1.05,
		YoYGrowthQ2: 1.25
	},
	{
		City: 'London',
		SalesQ1: 120000,
		SalesQ2: 169000,
		YoYGrowthQ1: 1.15,
		YoYGrowthQ2: 0.95
	},
	{
		City: 'Paris',
		SalesQ1: 205000,
		SalesQ2: 275500,
		YoYGrowthQ1: 1.45,
		YoYGrowthQ2: 1.15
	},
	{
		City: 'Tokyo',
		SalesQ1: 187000,
		SalesQ2: 130100,
		YoYGrowthQ1: 0.45,
		YoYGrowthQ2: 0.55
	},
	{
		City: 'Berlin',
		SalesQ1: 187000,
		SalesQ2: 113000,
		YoYGrowthQ1: 1.65,
		YoYGrowthQ2: 1.05
	},
	{
		City: 'San Francisco',
		SalesQ1: 142000,
		SalesQ2: 102000,
		YoYGrowthQ1: 0.75,
		YoYGrowthQ2: 0.15
	},
	{
		City: 'Chicago',
		SalesQ1: 171000,
		SalesQ2: 124000,
		YoYGrowthQ1: 0.75,
		YoYGrowthQ2: 0.65
	}
	];

	animation = 'none';
	caption = 'Sales by City in Q1 and Q2, and YoY sales growth';
	description = '(the size of the circles represents relative YoY growth)';
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
	colorScheme = 'scheme32';
	xAxis = {
		dataField: 'City',
		valuesOnTicks: false
	};
	valueAxis = {
		unitInterval: 50000,
		minValue: 50000,
		maxValue: 350000,
		title: {
			text: 'Sales ($)<br>'
		},
		labels: {
			formatSettings: {
				prefix: '$',
				thousandsSeparator: ','
			},
			horizontalAlignment: 'right'
		}
	};
	seriesGroups = [{
		type: 'bubble',
		useGradientColors: true,
		series: [{
			dataField: 'SalesQ1',
			radiusDataField: 'YoYGrowthQ1',
			minRadius: 10,
			maxRadius: 30,
			displayText: 'Sales in Q1'
		},
		{
			dataField: 'SalesQ2',
			radiusDataField: 'YoYGrowthQ2',
			minRadius: 10,
			maxRadius: 30,
			displayText: 'Sales in Q2'
		}
		]
	}];

	handleDropDownSerie1SymbolChange(event) {
		const chart = this.chart.current;

		if (chart.seriesGroups && chart.seriesGroups[0] && chart.seriesGroups[0].series) {
			chart.seriesGroups[0].series[0].symbolType = event.detail.value;
			chart.refresh();
		}
	}

	handleDropDownSerie2SymbolChange(event) {
		const chart = this.chart.current;

		if (chart.seriesGroups && chart.seriesGroups[0] && chart.seriesGroups[0].series) {
			chart.seriesGroups[0].series[1].symbolType = event.detail.value;
			chart.refresh();
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
					colorScheme={this.colorScheme}
					xAxis={this.xAxis}
					valueAxis={this.valueAxis}
					seriesGroups={this.seriesGroups}></Chart>
				<div className="options">
					<table>
						<tr>
							<td>
								<p>Select Serie 1 Symbol:</p>
								<DropDownList id='dropDownSerie1Symbol'
									dataSource={["circle", "diamond", "square", "triangle_up", "triangle_down", "triangle_left", "triangle_right"]}
									selectionMode="one" selected-indexes={[0]}
									onChange={this.handleDropDownSerie1SymbolChange.bind(this)}></DropDownList>
							</td>
						</tr>
						<tr>
							<td>
								<p>Select Serie 2 Symbol:</p>
								<DropDownList id='dropDownSerie2Symbol'
									dataSource={["circle", "diamond", "square", "triangle_up", "triangle_down", "triangle_left", "triangle_right"]}
									selectionMode="one" selectedIndexes={[0]}
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
