import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
		this.checkbox = React.createRef();
	}

	source = JSON.parse('[{"Country":"Luxembourg","GDP":"81278.63","DebtPercent":"16.2","Debt":"13167.13806","uid":0},{"Country":"Singapore","GDP":"57596.47","DebtPercent":"102.4","Debt":"58978.78528","uid":1},{"Country":"Norway","GDP":"53285.21","DebtPercent":"47.7","Debt":"25417.04517","uid":2},{"Country":"USA","GDP":"45759.46","DebtPercent":"58.9","Debt":"26952.32194","uid":3},{"Country":"Austria","GDP":"39269.33","DebtPercent":"70.4","Debt":"27645.60832","uid":4},{"Country":"Germany","GDP":"34065.12","DebtPercent":"78.8","Debt":"26843.31456","uid":5},{"Country":"Canada","GDP":"38065.13","DebtPercent":"34","Debt":"12942.1442","uid":6}]');

	caption = 'Economic comparison';
	description = 'GDP and Debt in 2010';
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
	dataSource = this.source;
	xAxis = {
		dataField: 'Country'
	};
	colorScheme = 'scheme32';
	seriesGroups = [{
		colorScheme: 'scheme03',
		type: 'column',
		columnsGapPercent: 50,
		valueAxis: {
			unitInterval: 5000,
			title: {
				text: 'GDP & Debt per Capita($)<br>'
			}
		},
		series: [{
			dataField: 'GDP',
			displayText: 'GDP per Capita'
		},
		{
			dataField: 'Debt',
			displayText: 'Debt per Capita'
		}
		]
	},
	{
		type: 'line',
		valueAxis: {
			unitInterval: 10,
			title: {
				text: 'Debt (% of GDP)<br>'
			},
			position: 'right',
			gridLines: {
				visible: false
			}
		},
		series: [{
			dataField: 'DebtPercent',
			displayText: 'Debt (% of GDP)'
		}]
	}
	];

	handleSaveAsJPEG() {
		this.chart.current.saveAsJPEG('myChart.jpeg');
	}

	handleSaveAsPNG() {
		this.chart.current.saveAsPNG('myChart.png');
	}

	handleSaveAsPDF() {
		this.chart.current.saveAsPDF('myChart.pdf', this.checkbox.current.checked ? 'landscape' : 'portrait');
	}

	handlePrint() {
		this.chart.current.print();
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
					showLegend={this.showLegend}
					padding={this.padding}
					titlePadding={this.titlePadding}
					dataSource={this.dataSource}
					xAxis={this.xAxis}
					colorScheme={this.colorScheme}
					seriesGroups={this.seriesGroups}></Chart>
				<br />
				<Button id="saveAsJPEG" onClick={this.handleSaveAsJPEG.bind(this)}>Save As JPEG</Button>
				<Button id="saveAsPNG" onClick={this.handleSaveAsPNG.bind(this)}>Save As PNG</Button>
				<Button id="saveAsPDF" onClick={this.handleSaveAsPDF.bind(this)}>Save As PDF</Button>
				<CheckBox ref={this.checkbox} id="landscape">(landscape)</CheckBox>
				<br />
				<br />
				<Button id="print" className="success outlined" onClick={this.handlePrint.bind(this)}>Print</Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
