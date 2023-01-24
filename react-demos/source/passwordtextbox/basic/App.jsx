import React from "react";
import ReactDOM from "react-dom";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Simple password field.</div>
			    <PasswordTextBox placeholder="Your password"></PasswordTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
