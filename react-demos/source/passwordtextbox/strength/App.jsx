import React from "react";
import ReactDOM from "react-dom";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Start typing to see the strength popup feedback positioned differently.</div>
			    <PasswordTextBox showPasswordStrength showPasswordIcon selectAllOnFocus
			    tooltipArrow placeholder="Popup on top" tooltipPosition="top"></PasswordTextBox>
			        <br/>
			        <br/>
			        <PasswordTextBox showPasswordStrength showPasswordIcon
			        selectAllOnFocus tooltipArrow placeholder="Popup on right" tooltipPosition="right"></PasswordTextBox>
			        <br/>
			        <br/>
			        <PasswordTextBox showPasswordStrength showPasswordIcon
			        selectAllOnFocus tooltipArrow placeholder="Popup on bottom + icon"
			        tooltipPosition="bottom"></PasswordTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
