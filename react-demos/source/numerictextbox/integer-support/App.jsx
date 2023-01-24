import React from "react";
import ReactDOM from "react-dom";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.log = React.createRef();
	}

	handleChange(event) {
		const newValue = event.detail.value,
			oldValue = event.detail.oldValue;

		this.log.current.innerHTML = 'New: ' + newValue + '; old: ' + oldValue;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<NumericTextBox id="myCustomElement" value="0" inputFormat="integer"
					wordLength="uint64" radixDisplay dropDownEnabled spinButtons spinButtonsPosition="right"
					spinButtonsStep="1" placeholder="Please type..." enableMouseWheelAction onChange={this.handleChange.bind(this)}></NumericTextBox>
				<div ref={this.log} id="log"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
