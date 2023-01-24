import React from "react";
import ReactDOM from "react-dom";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

class App extends React.Component {

	messages = {
		'en': {
			'passwordStrength': 'Password strength',
			'short': 'Short',
			'weak': 'Weak',
			'far': 'Far',
			'good': 'Good',
			'strong': 'Strong',
			'showPassword': 'Show password'
		},
		'de': {
			'passwordStrength': 'Passwortstärke',
			'short': 'kurz',
			'weak': 'schwach',
			'far': 'weit',
			'good': 'gut',
			'strong': 'stark',
			'showPassword': 'Passwort anzeigen'
		}
	};

	locale = 'de';

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Start typing to see the localized strength popup feedback</div>
			    <PasswordTextBox showPasswordStrength showPasswordIcon selectAllOnFocus messages={this.messages} locale={this.locale}
			    tooltipArrow placeholder="Your password"></PasswordTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
