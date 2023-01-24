import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Gauge } from 'smart-webcomponents-react/gauge';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.gauge = React.createRef();
		this.gauge2 = React.createRef();
		this.gauge3 = React.createRef();
		this.gauge4 = React.createRef();
	}

	gauge4LabelFormatFunction(value) {
		return String.fromCharCode(64 + parseFloat(value));
	}

	handleToggleCustomIntervalChange(event) {
		const checked = event.detail.value;

		this.gauge.current.customInterval = checked;
		this.gauge2.current.customInterval = checked;
		this.gauge3.current.customInterval = checked;
		this.gauge4.current.customInterval = checked;
	}

	handleToggleCoerceChange(event) {
		const checked = event.detail.value;

		this.gauge.current.coerce = checked;
		this.gauge2.current.coerce = checked;
		this.gauge3.current.coerce = checked;
		this.gauge4.current.coerce = checked;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="container">
					<Gauge ref={this.gauge} id="gauge1" analogDisplayType="fill" coerce scalePosition="outside"
						min="0" max="10000" value="100" customInterval customTicks={[100, 1000, 5000, 10000]}></Gauge>
					<p>Gauge with floating point scale:</p>
				</div>
				<div className="container">
					<Gauge ref={this.gauge2} id="gauge2" analogDisplayType="fill" coerce scalePosition="outside"
						scaleType="integer" significantDigits={3} wordLength="int64" min="-9223372036854775808"
						max="9223372036854775807" value="-3e18" customInterval customTicks={[-9e18, -3e18, 1e18, 9e18]}></Gauge>
					<p>Gauge with 64-bit Integer scale:</p>
				</div>
				<div className="container">
					<Gauge ref={this.gauge3} id="gauge3" analogDisplayType="fill" coerce logarithmicScale
						scalePosition="outside" min="1" max="100" value="55" customInterval customTicks={[1, 2, 3, 5, 8, 13, 21, 34, 55, 89]}></Gauge>
					<p>Gauge with logarithmic scale and Fibonacci numbers as custom ticks:</p>
				</div>
				<div className="container">
					<Gauge ref={this.gauge4} id="gauge4" analogDisplayType="fill" labelFormatFunction={this.gauge4LabelFormatFunction}
						coerce scalePosition="outside" min="1" max="26" value="10" customInterval
						customTicks={[1, 2, 3, 5, 10, 13, 18, 22, 24, 26]}></Gauge>
					<p>Gauge with letters:</p>
				</div>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<CheckBox id="toggleCustomInterval"
							checked onChange={this.handleToggleCustomIntervalChange.bind(this)}>Custom interval</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="toggleCoerce" checked onChange={this.handleToggleCoerceChange.bind(this)}>Coerce</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
