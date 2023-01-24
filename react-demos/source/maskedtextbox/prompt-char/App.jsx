import React from "react";
import ReactDOM from "react-dom";
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <MaskedTextBox  prompt-char="-"></MaskedTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
