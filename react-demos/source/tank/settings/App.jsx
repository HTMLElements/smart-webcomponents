import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tank = React.createRef();
		this.tank2 = React.createRef();
		this.tank3 = React.createRef();
		this.tank4 = React.createRef();
	}

	handleNumerictextboxChange(event) {
		const value = event.detail.value;

		this.tank.current.value = value;
		this.tank2.current.value = value;
		this.tank3.current.value = value;
		this.tank4.current.value = value;
	}

	handleCheckboxChange(event) {
		const value = event.detail.value;

		this.tank.current.showUnit = value;
		this.tank2.current.showUnit = value;
		this.tank3.current.showUnit = value;
		this.tank4.current.showUnit = value;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div>Horizontal tank</div>Value: <span id="horizontalTankValue">50000</span>
				<Tank
					ref={this.tank} id="horizontalTank" orientation="horizontal" min="0" max="100000"
					value="50000" scalePosition="both"></Tank>
				<br />
				<br />
				<br />
				<div>Inverted horizontal tank</div>Value: <span id="invertedHorizontalTankValue">50000</span>
				<Tank
					ref={this.tank2} id="invertedHorizontalTank" orientation="horizontal" inverted
					min="0" max="100000" value="50000" scalePosition="both"></Tank>
				<br />
				<br />
				<br />
				<div>Vertical Tank</div>Value: <span id="verticalTankValue">50000</span>
				<Tank
					ref={this.tank3} id="verticalTank" orientation="vertical" min="0" max="100000"
					value="50000" scalePosition="both"></Tank>
				<br />
				<br />
				<br />
				<div>Inverted vertical Tank</div>Value: <span id="invertedVerticalTankValue">50000</span>
				<Tank
					ref={this.tank4} id="invertedVerticalTank" orientation="vertical" min="0" max="100000"
					inverted value="50000" scalePosition="both"></Tank>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<h3>Set Tanks value:</h3>
						<NumericTextBox id="numericTextBox1" spinButtons
							spinButtonsStep="10000" value="50000" inputFormat="floatingPoint" onChange={this.handleNumerictextboxChange.bind(this)}></NumericTextBox>
						<br />
						<br />
						<CheckBox id="checkboxShowUnit" onChange={this.handleCheckboxChange.bind(this)}>Show unit</CheckBox>
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
