import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Chart } from 'smart-webcomponents-react/chart';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
		this.numerictextbox = React.createRef();
		this.numerictextbox2 = React.createRef();
	}

	sampleData = [{
		Year: 2001,
		Austria: 120.61,
		Belgium: 116.12,
		Croatia: 45.11
	},
	{
		Year: 2002,
		Austria: 118.96,
		Belgium: 109.37,
		Croatia: 53.19
	},
	{
		Year: 2003,
		Austria: 118.06,
		Belgium: 105.45,
		Croatia: 54.39
	},
	{
		Year: 2004,
		Austria: 118.56,
		Belgium: 99.62,
		Croatia: 56.83
	},
	{
		Year: 2005,
		Austria: 125.98,
		Belgium: 100.75,
		Croatia: 62.85
	},
	{
		Year: 2006,
		Austria: 125.66,
		Belgium: 106,
		Croatia: 68.59
	},
	{
		Year: 2007,
		Austria: 122.7,
		Belgium: 108.79,
		Croatia: 70.76
	},
	{
		Year: 2008,
		Austria: 126.3,
		Belgium: 110.6,
		Croatia: 73.9
	},
	{
		Year: 2009,
		Austria: 135.09,
		Belgium: 116.05,
		Croatia: 77.38
	},
	{
		Year: 2010,
		Austria: 135.06,
		Belgium: 113.68,
		Croatia: 90.49
	},
	{
		Year: 2011,
		Austria: 132.09,
		Belgium: 114,
		Croatia: 88.71
	},
	{
		Year: 2012,
		Austria: 135.25,
		Belgium: 113.23,
		Croatia: 88.53
	},
	{
		Year: 2013,
		Austria: 130.43,
		Belgium: 112.06,
		Croatia: 89.57
	},
	{
		Year: 2014,
		Austria: 125.43,
		Belgium: 154.55,
		Croatia: 89.46
	},
	{
		Year: 2015,
		Austria: 123.44,
		Belgium: 148.03,
		Croatia: 87.48
	},
	{
		Year: 2016,
		Austria: 129.89,
		Belgium: 153.69,
		Croatia: 84.9
	},
	{
		Year: 2017,
		Austria: 126.73,
		Belgium: 135.66,
		Croatia: 77.02
	}
	];

	clip = false;
	caption = 'Domestic credit provided by banking sector';
	description = '(% of GDP)';
	showLegend = true;
	padding = {
		left: 10,
		top: 5,
		right: 10,
		bottom: 5
	};
	titlePadding = {
		left: 50,
		top: 0,
		right: 0,
		bottom: 10
	};
	dataSource = this.sampleData;
	colorScheme = 'scheme29';
	xAxis = {
		dataField: 'Year',
		valuesOnTicks: true
	};
	valueAxis = {
		visible: true,
		title: {
			text: '% of GDP'
		},
		labels: {
			formatSettings: {
				sufix: '%'
			}
		}
	};
	seriesGroups = [{
		type: 'spline',
		series: [{
			dataField: 'Austria',
			opacity: 0.8,
			symbolType: 'circle',
			symbolSize: 10
		},
		{
			dataField: 'Belgium',
			opacity: 0.7,
			symbolType: 'square',
			symbolSize: 10
		},
		{
			dataField: 'Croatia',
			opacity: 0.6,
			symbolType: 'diamond',
			symbolSize: 10
		}
		]
	}];

	handleGetItemsCountClick() {
		const series = parseFloat(this.numerictextbox.current.value);

		this.chart.current.getItemsCount(0, series).then(function (count) {
			alert(`Series ${series} has ${count} items.`);
		});
	}

	handleGetItemCoordClick() {
		const series = parseFloat(this.numerictextbox.current.value),
			item = parseFloat(this.numerictextbox2.current.value);
		this.chart.current.getItemCoord(0, series, item).then(function (coords) {
			alert(`The coordinates of item ${item} from series ${series} are (${coords.x}, ${coords.y}).`);
		});
	}

	handleShowSerieClick() {
		const series = parseFloat(this.numerictextbox.current.value);
		this.chart.current.showSerie(0, series);
	}

	handleHideSerieClick() {
		const series = parseFloat(this.numerictextbox.current.value);
		this.chart.current.hideSerie(0, series);
	}

	handleShowToolTipClick() {
		const series = parseFloat(this.numerictextbox.current.value),
			item = parseFloat(this.numerictextbox2.current.value);
		this.chart.current.showToolTip(0, series, item);
	}

	handleHideToolTipClick() {
		this.chart.current.hideToolTip();
	}

	handleGetXAxisRectClick() {
		this.chart.current.getXAxisRect(0).then(function (rect) {
			alert(`The xAxis rect starts at (${rect.x}, ${rect.y}) and has width ${rect.width}px and height ${rect.height}px.`);
		});
	}

	handleGetXAxisLabelsClick() {
		this.chart.current.getXAxisLabels(0).then(function (labels) {
			alert(`The xAxis labels are ${labels.map((label) => label.value).join(', ')}.`);
		});
	}

	handleGetValueAxisRectClick() {
		this.chart.current.getValueAxisRect(0).then(function (rect) {
			alert(`The valueAxis rect starts at (${rect.x}, ${rect.y}) and has width ${rect.width}px and height ${rect.height}px.`);
		});
	}

	handleGetValueAxisLabelsClick() {
		this.chart.current.getValueAxisLabels(0).then(function (labels) {
			alert(`The valueAxis labels are ${labels.map((label) => label.value).join(', ')}.`);
		});
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Chart ref={this.chart} id="chart"
					clip={this.clip}
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
				<div className="options"> <span>Series: </span>
					<NumericTextBox ref={this.numerictextbox} id="seriesNo"
						min="0" max="2" value="0" spin-buttons></NumericTextBox>
					<br />
					<br /> <span>Item: </span>
					<NumericTextBox ref={this.numerictextbox2} id="itemNo" min="0"
						max="16" value="0" spin-buttons></NumericTextBox>
					<br />
					<br />
					<Button id="getItemsCount" onClick={this.handleGetItemsCountClick.bind(this)}>getItemsCount</Button>
					<Button id="getItemCoord" onClick={this.handleGetItemCoordClick.bind(this)}>getItemCoord</Button>
					<br />
					<br />
					<Button id="showSerie" onClick={this.handleShowSerieClick.bind(this)}>showSerie</Button>
					<Button id="hideSerie" onClick={this.handleHideSerieClick.bind(this)}>hideSerie</Button>
					<br />
					<br />
					<Button id="showToolTip" onClick={this.handleShowToolTipClick.bind(this)}>showToolTip</Button>
					<Button id="hideToolTip" onClick={this.handleHideToolTipClick.bind(this)}>hideToolTip</Button>
					<br />
					<br />
					<Button id="getXAxisRect" onClick={this.handleGetXAxisRectClick.bind(this)}>getXAxisRect</Button>
					<Button id="getXAxisLabels" onClick={this.handleGetXAxisLabelsClick.bind(this)}>getXAxisLabels</Button>
					<br />
					<br />
					<Button id="getValueAxisRect" onClick={this.handleGetValueAxisRectClick.bind(this)}>getValueAxisRect</Button>
					<Button id="getValueAxisLabels" onClick={this.handleGetValueAxisLabelsClick.bind(this)}>getValueAxisLabels</Button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
