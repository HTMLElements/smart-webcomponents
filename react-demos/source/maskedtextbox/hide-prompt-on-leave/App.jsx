import React from "react";
import ReactDOM from "react-dom";
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <MaskedTextBox hidePromptOnLeave mask="00.00.0000"></MaskedTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
