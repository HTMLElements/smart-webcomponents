import React from "react";
import ReactDOM from "react-dom";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.passwordtextbox = React.createRef();
	}

	init() {


		const passwordTextBox = this.passwordtextbox.current,
			messages = Object.assign({}, passwordTextBox.messages);

		messages['he'] = {
			'passwordStrength': 'חוזק סיסמה',
			'short': 'קצר',
			'weak': 'חלש',
			'far': 'הוגן',
			'good': 'טוב',
			'strong': 'חזק',
			'showPassword': 'הראה סיסמה'
		};

		passwordTextBox.messages = messages;
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<PasswordTextBox ref={this.passwordtextbox} placeholder="סיסמה:" locale="he"
					showPasswordStrength tooltipArrow tooltipPosition="bottom" rightToLeft></PasswordTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
