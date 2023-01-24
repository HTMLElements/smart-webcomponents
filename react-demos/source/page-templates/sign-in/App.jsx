import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Card } from 'smart-webcomponents-react/card';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.textbox = React.createRef();
	}

	handleTooltipClose() {
		this.tooltip.current.disabled = true;
		this.tooltip.current.selector = null;
	}

	handleSubmit(event) {
		const email = this.textbox.current,
			password = this.textbox2.current,
			tooltip = this.tooltip.current;
		const hasEmail = !!email.value.length,
			hasPassword = !!password.value.length;

		if (hasEmail && hasPassword) {
			tooltip.selector = null;
			tooltip.disabled = true;
			tooltip.close();
			return;
		}

		event.preventDefault();
		tooltip.disabled = false;

		if (!hasPassword) {
			tooltip.selector = password;
		}

		if (!hasEmail) {
			tooltip.selector = email;
		}
		
		tooltip.open();
	};

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Card> <i className="material-icons">lock</i>
					<h1>Sign in</h1>
					<form onSubmit={this.handleSubmit.bind(this)} id="submitForm" method="get">
						<TextBox ref={this.textbox} id="email" label="Email Address*" name="email"></TextBox>
						<TextBox ref={this.textbox2} id="password" label="Password*" name="password"></TextBox>
						<CheckBox>Remember me</CheckBox>
						<Button ref={this.button} id="signIn" className="primary"
							type="submit">Sign In</Button>
					</form>
				</Card>
				<Tooltip ref={this.tooltip} onClose={this.handleTooltipClose.bind(this)} id="tooltip" position="bottom" arrow disabled><span className="note"> ! </span>Please fill out this field.</Tooltip>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
