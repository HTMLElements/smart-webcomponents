import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';
import { Validator, Smart } from 'smart-webcomponents-react/validator';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.radiobutton = React.createRef();
		this.radiobutton2 = React.createRef();
		this.radiobutton3 = React.createRef();
		this.passwordtextbox = React.createRef();
		this.datetimepicker = React.createRef();
	}

	init() {
		const that = this;

		// initialize validator.
		const rules = [{
			input: '#userInput',
			message: 'Username is required!',
			action: 'keyup, blur',
			type: 'required'
		},
		{
			input: '#userInput',
			message: 'Your username must be between 3 and 12 characters!',
			action: 'keyup, blur',
			type: 'stringLength',
			min: 3,
			max: 12
		},
		{
			input: '#passwordInput',
			message: 'Password is required!',
			action: 'keyup, blur',
			type: 'required'
		},
		{
			input: '#passwordInput',
			message: 'Your password must be between 4 and 12 characters!',
			action: 'keyup, blur',
			type: 'stringLength',
			min: 4,
			max: 12
		},
		{
			input: '#passwordConfirmInput',
			message: 'Confirm Password is required!',
			action: 'keyup, blur',
			type: 'required'
		},
		{
			input: '#passwordConfirmInput',
			message: 'Passwords doesn\'t match!',
			action: 'keyup, focus',
			type: 'custom',
			validationCallback: function (input) {
				if (input.value === that.passwordtextbox.current.value) {
					return true;
				}
				return false;
			}
		},
		{
			input: '#realNameInput',
			message: 'Real Name is required!',
			action: 'keyup, blur',
			type: 'required'
		},
		{
			input: '#realNameInput',
			message: 'Your real name must contain only letters!',
			action: 'keyup',
			type: 'pattern',
			pattern: /^[^0-9]+$/
		},
		{
			input: '#realNameInput',
			message: 'Your real name must be between 3 and 12 characters!',
			action: 'keyup',
			type: 'stringLength',
			min: 3,
			max: 12
		},
		{
			input: '#birthInput',
			message: 'Your birth date must be between 1/1/1900 and 1/1/2025.',
			action: 'change',
			type: 'custom',
			validationCallback: function () {
				const date = that.datetimepicker.current.value;

				return date.year() >= 1900 && date.year() <= 2025
			}
		},
		{
			input: '#emailInput',
			message: 'E-mail is required!',
			action: 'keyup, blur',
			type: 'required'
		},
		{
			input: '#emailInput',
			message: 'Invalid e-mail!',
			action: 'keyup',
			type: 'email'
		},
		{
			input: '#ssnInput',
			message: 'Invalid SSN!',
			action: 'valuechanged, blur',
			type: 'pattern',
			pattern: /\d{3}-\d{2}-\d{4}/
		},
		{
			input: '#phoneInput',
			message: 'Invalid phone number!',
			action: 'valuechanged, blur',
			type: 'phone'
		},
		{
			input: '#zipInput',
			message: 'Invalid zip code!',
			action: 'valuechanged, blur',
			type: 'zipCode'
		},
		{
			input: '.genderRadio',
			message: 'You must select your gender',
			action: 'change',
			type: 'required'
		},
		{
			input: '.genderRadio',
			message: 'Please choose Male or Female',
			action: 'change',
			type: 'custom',
			validationCallback: function (event) {
				const target = event.target || event;
				
				//change event
				if (target.value) {
					return target.value !== 'alien';
				}

				//form submit
				let checkboxes = [that.radiobutton.current, that.radiobutton2.current, that.radiobutton3.current];
				let result = true;
				if ((checkboxes) && (checkboxes.length > 1)) {
					for (let i = 0; i < checkboxes.length; i++) {
						let checkbox = checkboxes[i];
						if (checkbox.checked && (checkbox.value === 'alien')) {
							result = false;
						}
					}
				}
				return result;
			}
		},
		{
			input: '#terms',
			message: 'You must agree to the Terms and Conditions',
			action: 'change',
			type: 'required'
		},
		];

		//SmartValidator
		this.validator = new Smart.Utilities.Validator(rules, '#validationsummary');
	}

	handleClick() {
		this.validator.validate();
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-container">
					<form id="testForm" action="./">
						<div className="fieldset">
							<div className="fieldset-header">Register</div>
							<div className="field">
								<div className="field-label">User name</div>
								<div className="field-value">
									<TextBox selectAllOnFocus placeholder="User name" id="userInput"></TextBox>
								</div>
							</div>
							<div className="field">
								<div className="field-label">Your password</div>
								<div className="field-value">
									<PasswordTextBox ref={this.passwordtextbox} selectAllOnFocus placeholder="Your password"
										id="passwordInput"></PasswordTextBox>
								</div>
							</div>
							<div className="field">
								<div className="field-label">Confirm password</div>
								<div className="field-value">
									<PasswordTextBox selectAllOnFocus placeholder="Confirm password"
										id="passwordConfirmInput"></PasswordTextBox>
								</div>
							</div>
							<div className="field">
								<div className="field-label">Real name</div>
								<div className="field-value">
									<TextBox selectAllOnFocus placeholder="Real name" id="realNameInput"></TextBox>
								</div>
							</div>
							<div className="field">
								<div className="field-label">Date of birth</div>
								<div className="field-value">
									<DateTimePicker ref={this.datetimepicker} formatString="dddd, MMM dd, yyyy"
										calendarButton enableMouseWheelAction dropDownPosition="bottom" id="birthInput"
										spinButtons spinButtonsPosition="left"></DateTimePicker>
								</div>
							</div>
							<div className="field">
								<div className="field-label">Email</div>
								<div className="field-value">
									<TextBox selectAllOnFocus placeholder="Email" id="emailInput"></TextBox>
								</div>
							</div>
							<div className="field">
								<div className="field-label">SSN</div>
								<div className="field-value">
									<MaskedTextBox className="material" hint="" mask="###-##-####"
										id="ssnInput"></MaskedTextBox>
								</div>
							</div>
							<div className="field">
								<div className="field-label">Phone number</div>
								<div className="field-value">
									<MaskedTextBox className="material" hint="" mask="(###)###-####"
										id="phoneInput"></MaskedTextBox>
								</div>
							</div>
							<div className="field">
								<div className="field-label">Zip code</div>
								<div className="field-value">
									<MaskedTextBox  className="material" hint="" mask="#####-####"
										id="zipInput"></MaskedTextBox>
								</div>
							</div>
						</div>
						<div className="fieldset">
							<div className="field-label">Choose gender</div>
							<div className="field-value genderRadioHolder">
								<RadioButton ref={this.radiobutton} id="maleRadioButton" name="genderRadioGroup"
									value="male" className="genderRadio">Male</RadioButton>
								<RadioButton ref={this.radiobutton2} id="femaleRadioButton"
									name="genderRadioGroup" value="female" className="genderRadio">Female</RadioButton>
								<RadioButton ref={this.radiobutton3} id="otherRadioButton"
									name="genderRadioGroup" value="alien" className="genderRadio">Alien</RadioButton>
							</div>
						</div>
						<div id="check" className="checkbox-validator">
							<CheckBox clickMode="press" id="terms">Accept terms</CheckBox>
							<br />
						</div>
						<div className="fieldset">
							<div id="registerButton" className="submit-button">
								<Button onClick={this.handleClick.bind(this)} id="submitFormButton" type="button" className="success">Send</Button>
							</div>
						</div>
					</form>
					<div id="validationsummary"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
