import React from "react";
import ReactDOM from "react-dom";
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.validationStatus = React.createRef();
	}

	validation = function (value) {
		if (value.length === 5) {
			return true;
		}

		return false;
	};

	handleValidation(event) {
		const details = event.detail;

		console.log('Validation success : ' + details.success);

		if (details.success) {
			this.validationStatus.current.innerHTML = 'Validation successful!';
		}
		else {
			this.validationStatus.current.innerHTML = 'Please, fill the mask...';
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<MaskedTextBox validation={this.validation} onValidation={this.handleValidation.bind(this)} id="maskedTextBox"></MaskedTextBox>
				<div ref={this.validationStatus}id="validationStatus"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
