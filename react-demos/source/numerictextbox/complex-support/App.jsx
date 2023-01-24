import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.numerictextbox = React.createRef();
	}

	handleSetSignificantDigitsClick() {
		this.numerictextbox.current.significantDigits = 5;
	}

	handleSetPrecisionDigitsClick() {
		this.numerictextbox.current.precisionDigits = 5;
	}

	handleSetValueClick() {
		this.numerictextbox.current.value = '5e12 + 1.6e3i';
	}

	handleSetScientificNotationValueClick() {
		this.numerictextbox.current.value = '34E - 12i';
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<NumericTextBox ref={this.numerictextbox} id="myCustomElement" inputFormat="complex"
					value="3.14159265359+0.3i" spinButtons spinButtonsPosition="left" spinButtonsStep="1 + 1i"
					enableMouseWheelAction></NumericTextBox>
				<br />
				<Button id="setSignificantDigits" onClick={this.handleSetSignificantDigitsClick.bind(this)}>significantDigits = 5</Button>
				<Button id="setPrecisionDigits" onClick={this.handleSetPrecisionDigitsClick.bind(this)}>precisionDigits = 5</Button>
				<br />
				<br />
				<Button id="setValue" onClick={this.handleSetValueClick.bind(this)}>set value to "5e12 + 1.6e3i"</Button>
				<Button id="setScientificNotationValue" onClick={this.handleSetScientificNotationValueClick.bind(this)}>set value to "34E - 12i"</Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
