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

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<NumericTextBox ref={this.numerictextbox} id="myCustomElement" inputFormat="floatingPoint"
					value="3.14159265359" spinButtons spinButtonsPosition="right" spinButtonsStep="1"
					enableMouseWheelAction></NumericTextBox>
				<br />
				<Button id="setSignificantDigits" onClick={this.handleSetSignificantDigitsClick.bind(this)}>significantDigits = 5</Button>
				<Button id="setPrecisionDigits" onClick={this.handleSetPrecisionDigitsClick.bind(this)}>precisionDigits = 5</Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
