import React from "react";
import ReactDOM from "react-dom";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.numerictextbox = React.createRef();
	}

	init() {
		const messages = Object.assign({}, this.numerictextbox.current.messages);

		messages['he'] = {
			'binary': 'בינארי',
			'octal': 'אוקטלית',
			'decimal': 'עשרוני',
			'hexadecimal': 'הקסדצימלי',
			'integerOnly': 'smartNumericTextBox: The property {{property}} can only be set when inputFormat is integer.',
			'noInteger': 'smartNumericTextBox: the property {{property}} cannot be set when inputFormat is integer.',
			'significantPrecisionDigits': 'smartNumericTextBox: the properties significantDigits and precisionDigits cannot be set at the same time.'
		};

		this.numerictextbox.current.messages = messages;
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<NumericTextBox ref={this.numerictextbox} id="myCustomElement" inputFormat="integer"
					dropDownEnabled value="100" spinButtons radixDisplay spinButtonsStep="1"
					enableMouseWheelAction locale="he" rightToLeft></NumericTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
