import React from "react";
import ReactDOM from "react-dom";
import { Gauge } from 'smart-webcomponents-react/gauge';

class App extends React.Component {
	computeArrowHeadPoints(radius, distance, angle, base, height) {
		const sin = Math.sin(angle),
			cos = Math.cos(angle),
			hPointX = radius + (distance - height) * sin,
			hPointY = radius + (distance - height) * cos,
			startPointX1 = hPointX + base * cos,
			startPointY1 = hPointY - base * sin,
			startPointX2 = hPointX - base * cos,
			startPointY2 = hPointY + base * sin,
			endPointX = radius + distance * sin,
			endPointY = radius + distance * cos,
			points = 'M ' + startPointX1 + ',' + startPointY1 + ' L ' + startPointX2 + ',' + startPointY2 + ' L ' + endPointX + ',' + endPointY + ' Z';
		return points;
	}

	computeArrowBodyPoints(radius, angle, width, length) {
		const sin = Math.sin(angle),
			cos = Math.cos(angle),
			endX1 = radius - width * cos + length * sin,
			endY1 = radius + width * sin + length * cos,
			endX2 = radius + width * cos + length * sin,
			endY2 = radius - width * sin + length * cos,
			startX1 = radius + width * cos,
			startY1 = radius - width * sin,
			startX2 = radius - width * cos,
			startY2 = radius + width * sin,
			points = 'M ' + startX1 + ',' + startY1 + ' L ' + startX2 + ',' + startY2 + ' L ' + endX1 + ',' + endY1 + ' ' + endX2 + ',' + endY2;
		return points;
	}

	customDrawNeedleFunction(element, renderer, radius, angle, distance) {
		const arrowHeadPoints = this.computeArrowHeadPoints(radius, radius - distance, angle, 10, 20),
			arrowBodyPoints = this.computeArrowBodyPoints(radius, angle, 5, radius - distance - 19),
			arrowHead = renderer.path(arrowHeadPoints, {
				'class': 'arrow-head'
			}),
			arrowBody = renderer.path(arrowBodyPoints, {
				'class': 'arrow-body'
			});
		// return an array of all custom SVG elements
		return [arrowHead, arrowBody];
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Gauge id="gauge" analogDisplayType="needle" digitalDisplay
					startAngle={-30} endAngle={210} min="0" max="20" value="10" drawNeedle={this.customDrawNeedleFunction.bind(this)}></Gauge>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
