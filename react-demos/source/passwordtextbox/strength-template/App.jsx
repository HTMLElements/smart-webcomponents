import React from "react";
import ReactDOM from "react-dom";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.passwordtextbox = React.createRef();
	}

	init() {
		const template = document.createElement('template');

		template.id = 'passwordStrengthTemplate';
		template.innerHTML = `
						<div className="password-strength">
							<span style="margin-left:5px;">{{strength}}</span>
							<div className="strength-meter"></div>
						</div>`;

		document.body.appendChild(template);

		this.passwordtextbox.current.tooltipTemplate = template.id;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">Start typing to see the strength popup feedback template</div>
				<PasswordTextBox ref={this.passwordtextbox} 
				showPasswordStrength showPasswordIcon tooltipArrow placeholder="Enter your password"></PasswordTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
