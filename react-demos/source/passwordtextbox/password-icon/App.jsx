import React from "react";
import ReactDOM from "react-dom";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

class App extends React.Component {
	
	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Start typing to see the show password icon</div>
			    <PasswordTextBox showPasswordIcon placeholder="Your password"></PasswordTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
