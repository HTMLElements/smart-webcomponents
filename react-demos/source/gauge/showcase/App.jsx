import React from "react";
import ReactDOM from "react-dom";
import { Gauge } from 'smart-webcomponents-react/gauge';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.gauge3 = React.createRef();
	}

	customDrawNeedleFunction1(element, renderer, radius, angle, distance) {
		const sin = Math.sin(angle),
			cos = Math.cos(angle),
			x = radius + 101 * sin,
			y = radius + 101 * cos,
			circle = renderer.circle(x, y, 8, {
				'class': 'value-circle'
			});
		// return an array of all custom SVG elements
		return [circle];
	}

	customDrawNeedleFunction2(element, renderer, radius, angle, distance) {
		const width = 1,
			length = radius - distance - 19,
			sin = Math.sin(angle),
			cos = Math.cos(angle),
			endX1 = radius - width * cos + length * sin,
			endY1 = radius + width * sin + length * cos,
			endX2 = radius + width * cos + length * sin,
			endY2 = radius - width * sin + length * cos,
			startX1 = radius + width * cos,
			startY1 = radius - width * sin,
			startX2 = radius - width * cos,
			startY2 = radius + width * sin,
			points = 'M ' + startX1 + ',' + startY1 + ' L ' + startX2 + ',' + startY2 + ' L ' + endX1 + ',' + endY1 + ' ' + endX2 + ',' + endY2,
			needle = renderer.path(points, {
				'class': 'value-needle'
			});
		// return an array of all custom SVG elements
		return [needle];
	}

	init() {
		const ranges = [];
		for (let i = 0; i < 20; i++) {
			ranges.push({
				startValue: i,
				endValue: i + 1,
				className: 'range' + (i + 1)
			});
		}

		this.gauge3.current.ranges = ranges;
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="sideGaugeContainer">
					<Gauge className="sideGauge" analogDisplayType="needle" startAngle={60}
						endAngle={180} min="0" max="10" value="9" ticksVisibility="major" customInterval
						customTicks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} labelsVisibility="none"
						showRanges ranges={[{ "startValue": 0, "endValue": 10, "className": "borderRange" }]}
						drawNeedle={this.customDrawNeedleFunction2}></Gauge>
				</div>
				<div className="sideGaugeContainer">
					<Gauge className="sideGauge" analogDisplayType="needle" startAngle={0}
						endAngle={120} min="0" max="10" value="1.5" inverted ticksVisibility="major"
						customInterval customTicks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} labelsVisibility="none"
						showRanges ranges={[{ "startValue": 0, "endValue": 10, "className": "borderRange" }]}
						drawNeedle={this.customDrawNeedleFunction2}></Gauge>
				</div>
				<div id="centralGaugeContainer">
					<div id="firstCircle">
						<div id="secondCircle"></div>
					</div>
					<Gauge ref={this.gauge3} id="centralGauge" analogDisplayType="needle" startAngle={-40}
						endAngle={220} min="0" max="20" value="18.5" ticksVisibility="major"
						labelsVisibility="none" showRanges drawNeedle={this.customDrawNeedleFunction1}></Gauge>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
