import React from "react";
import ReactDOM from "react-dom";
import { Gauge } from 'smart-webcomponents-react/gauge';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.gauge2 = React.createRef();
		this.gauge3 = React.createRef();
		this.gauge4 = React.createRef();
	}

	fuelGaugeLabelFormatFunction(value) {
		switch (value) {
			case '0':
				return 'E';
			case '20':
				return '½';
			case '40':
				return 'F';
			default:
				return ' ';
		}
	}

	init() {
		this.gauge2.current.ranges = [{
			startValue: 0,
			endValue: 25,
			className: 'range1'
		},
		{
			startValue: 25,
			endValue: 50,
			className: 'range2'
		},
		{
			startValue: 50,
			endValue: 75,
			className: 'range3'
		},
		{
			startValue: 75,
			endValue: 100,
			className: 'range4'
		}
		];

		this.gauge3.current.ranges = [{
			startValue: 0,
			endValue: 19.5,
			className: 'range1'
		},
		{
			startValue: 20.5,
			endValue: 39.5,
			className: 'range2'
		},
		{
			startValue: 40.5,
			endValue: 59.5,
			className: 'range3'
		},
		{
			startValue: 60.5,
			endValue: 79.5,
			className: 'range4'
		},
		{
			startValue: 80.5,
			endValue: 100,
			className: 'range5'
		}
		];

		this.gauge4.current.digitalDisplayPosition = 'bottom';
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Gauge id="needleGauge1" analogDisplayType="needle" digitalDisplay
					startAngle={-30} endAngle={210} min="0" max="100" value="70" scalePosition="outside"
					needlePosition="edge"></Gauge>
				<Gauge ref={this.gauge2} id="needleGauge2" analogDisplayType="needle"
					digitalDisplay startAngle={-50} endAngle={230} min="0" max="100" value="40"
					scalePosition="inside" showRanges></Gauge>
				<Gauge ref={this.gauge3} id="fillGauge1" analogDisplayType="fill"
					digitalDisplay startAngle={-30} endAngle={210} min="0" max="100" value="10"
					scalePosition="inside" ticksPosition="scale" showRanges></Gauge>
				<Gauge ref={this.gauge4} id="fillGauge2" analogDisplayType="fill"
					digitalDisplay startAngle={-30} endAngle={210} min="0" max="100" value="10"
					scalePosition="outside"></Gauge>
				<Gauge id="fillGauge3" analogDisplayType="fill"
					digitalDisplay startAngle={90} endAngle={90} min="0" max="10" value="1.7"
					scalePosition="outside" ticksPosition="track" ticksVisibility="major"></Gauge>
				<Gauge id="lineGauge" analogDisplayType="line"
					digitalDisplay startAngle={-30} endAngle={210} min="0" max="100" value="90"
					scalePosition="inside" ticksPosition="track"></Gauge>
				<div id="fuelGaugeContainer">
					<Gauge id="fuelGauge" analogDisplayType="needle" startAngle={45}
						endAngle={135} min="0" max="40" value="40" scalePosition="inside" showRanges
						ranges={[{ "startValue": 0, "endValue": 2, "className": "range1" }, { "startValue": 19, "endValue": 21, "className": "range2" }, { "startValue": 38, "endValue": 40, "className": "range3" }]}
						labelFormatFunction={this.fuelGaugeLabelFormatFunction}></Gauge>
					<img src="../../../demos/images/fuel.png" />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
