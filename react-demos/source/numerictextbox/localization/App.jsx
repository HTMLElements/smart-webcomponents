import React from "react";
import ReactDOM from "react-dom";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.numerictextbox = React.createRef();
	}

	init() {
		const messagesEnglish = this.numerictextbox.current.messages.en;

		messagesEnglish.binary = 'binary';
		messagesEnglish.octal = 'octal';
		messagesEnglish.decimal = 'decimal';
		messagesEnglish.hexadecimal = 'hexadecimal';
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<NumericTextBox ref={this.numerictextbox} id="myCustomElement" value="0" inputFormat="integer"
					wordLength="uint64" radixDisplay dropDownEnabled spinButtons spinButtonsPosition="right"
					spinButtonsStep="1" placeholder="Please type..." enableMouseWheelAction></NumericTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
