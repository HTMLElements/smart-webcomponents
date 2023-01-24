import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.maskedtextbox = React.createRef();
	}

	handleChange(event) {
		this.maskedtextbox.current.isOverwriteMode = event.detail.value;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <MaskedTextBox ref={this.maskedtextbox} id="maskedTextBox" value="10201" isOverwriteMode
			    resetOnSpace></MaskedTextBox>
			    <br />
			    <CheckBox onChange={this.handleChange.bind(this)} id="checkBox" checked>Is Overwrite Mode</CheckBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
