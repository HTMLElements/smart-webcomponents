import React from "react";
import ReactDOM from "react-dom";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';
import { ToggleButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.numerictextbox = React.createRef();
		this.numerictextbox2 = React.createRef();
	}

	handleChange(event) {
		const enabled = event.detail.value;

		this.numerictextbox.current.scientificNotation = enabled;
		this.numerictextbox2.current.scientificNotation = enabled;
	}


	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<NumericTextBox ref={this.numerictextbox} id="floatingPointNumericTextBox"
					inputFormat="floatingPoint" value="300000000" scientificNotation spinButtons
					spinButtonsPosition="right" spinButtonsStep="1" enableMouseWheelAction></NumericTextBox>
				<br />
				<NumericTextBox ref={this.numerictextbox2} id="complexNumericTextBox" inputFormat="complex"
					value="300000000 + 5000i" scientificNotation spinButtons spinButtonsPosition="right"
					spinButtonsStep="1 + 1i" enableMouseWheelAction></NumericTextBox>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<ToggleButton id="toggleScientificNotation" checked onChange={this.handleChange.bind(this)}>Toggle SI notation</ToggleButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
