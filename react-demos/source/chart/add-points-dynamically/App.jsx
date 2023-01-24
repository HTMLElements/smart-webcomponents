import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	sampleData = [{
		x: 15,
		y: 30
	},
	{
		x: 55,
		y: 90
	}];
	maxX = 200;
	maxY = 200;
	box = {
		x: 40,
		y: 471,
		width: 798,
		height: 420
	};
	xRatio = this.box.width / this.maxX;
	yRatio = this.box.height / this.maxY;

	animation = 'none';
	caption = 'Adding Data Points Dynamically';
	description = 'Click the plot area to add a point';
	showLegend = false;
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
	colorScheme = 'scheme28';
	xAxis = {
		dataField: 'x',
		minValue: 0,
		maxValue: this.maxX
	};
	valueAxis = {
		visible: true,
		title: {
			text: ''
		},
		minValue: 0,
		maxValue: this.maxY,
		unitInterval: 50
	};
	seriesGroups = [{
		type: 'line',
		series: [{
			dataField: 'y',
			symbolType: 'circle',
			symbolSize: 10
		}]
	}];

	handleClick(event) {
		const that = this;

		if (event.pageX < that.box.x || event.pageX > that.box.x + that.box.width ||
			event.pageY < that.box.y - that.box.height || event.pageY > that.box.y) {
			return;
		}
		const x = (event.pageX - that.box.x) / that.xRatio,
			y = (that.box.y - event.pageY) / that.yRatio;
		that.sampleData.push({
			x: x,
			y: y
		});
		that.chart.current.update();
		if (x >= that.maxX * 0.9) {
			that.maxX += 50;
			that.xRatio = that.box.width / that.maxX;
			if (that.chart.current.xAxis) {
				that.chart.current.xAxis.maxValue = that.maxX;
			}
		}
		if (y >= that.maxY * 0.9) {
			that.maxY += 50;
			that.yRatio = that.box.height / that.maxY;
			if (that.chart.current.valueAxis) {
				that.chart.current.valueAxis.maxValue = that.maxY;
			}
		}
		that.chart.current.update();
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Chart ref={this.chart} id="chart" onClick={this.handleClick.bind(this)}
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
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
