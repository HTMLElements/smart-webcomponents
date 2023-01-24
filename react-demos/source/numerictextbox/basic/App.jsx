import React from "react";
import ReactDOM from "react-dom";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<NumericTextBox id="myCustomElement" inputFormat="floatingPoint"
					value="100" spinButtons spinButtonsPosition="right" spinButtonsStep="1"
					enableMouseWheelAction></NumericTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
