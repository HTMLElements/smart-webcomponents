import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';
import { TextBox } from 'smart-webcomponents-react/textbox';
import 'smart-webcomponents-react/source/modules/smart.validator';

class App extends React.Component {

	componentDidMount() {
		let maxDate = new Date();
		maxDate.setFullYear(2025);
		const rules = [
			//Email
			{
				input: '#email-validation',
				message: 'E-mail is required',
				action: 'keyup, blur',
				type: 'required'
			},
			{
				input: '#email-validation',
				message: 'Email is invalid',
				action: 'keyup',
				type: 'email'
			},
			//Password
			{
				input: '#password-validation',
				message: 'Password is required!',
				action: 'keyup, blur',
				type: 'required'
			},
			//Confirm password
			{
				input: '#confirm-password-validation',
				message: 'Confirm Password is required!',
				action: 'keyup, blur',
				type: 'required'
			},
			{
				input: '#confirm-password-validation',
				message: '\'Password\' and \'Confirm Password\' do not match.',
				action: 'keyup, blur',
				type: 'compare',
				comparisonTarget: function () {
					let password = document.querySelector('#password-validation');
					if (password) {
						return password.value;
					}
				},
			},
			//Name
			{
				input: '#name-validation',
				message: 'Name is required!',
				action: 'keyup, blur',
				type: 'required'
			},
			{
				input: '#name-validation',
				message: 'Do not use digits in the Name.',
				action: 'keyup, blur',
				type: 'pattern',
				pattern: /^[^0-9]+$/
			},
			{
				input: '#name-validation',
				message: 'Name must have at least 2 symbols',
				action: 'keyup, blur',
				type: 'stringLength',
				min: 2
			},
			//Date
			//{ input: '#date-validation', message: 'Date of birth is required', action: 'change', type: 'required' },
			{
				input: '#date-validation',
				message: 'You must be at least 21 years old',
				action: 'change',
				type: 'range',
				max: maxDate,
			},
			//Country
			{
				input: '#country-validation',
				message: 'Country is required',
				action: 'change',
				type: 'required'
			},
			//City
			{
				input: '#city-validation',
				message: 'City is required',
				action: 'keyup, blur',
				type: 'required'
			},
			{
				input: '#city-validation',
				message: 'Do not use digits in the City name.',
				action: 'keyup, blur',
				type: 'pattern',
				pattern: /^[^0-9]+$/
			},
			{
				input: '#city-validation',
				message: 'City must have at least 2 symbols',
				action: 'keyup, blur',
				type: 'stringLength',
				min: 2
			},
			//Address
			{
				input: '#address-validation',
				message: 'Address is required',
				action: 'keyup, blur',
				type: 'required'
			},
			//Phone
			{
				input: '#phone-validation',
				message: 'The phone must have a correct USA phone format',
				action: 'valuechanged, blur',
				type: 'required'
			},
			//Post  code
			{
				input: '#post-code-validation',
				message: 'The post code must contains only digits',
				action: 'change',
				type: 'numeric'
			},
			{
				input: '#post-code-validation',
				message: 'The post code must have at least 4 symbols',
				action: 'change',
				type: 'stringLength',
				min: 4
			},
			//Terms
			{
				input: '#termsInput',
				message: 'You must agree to the Terms and Conditions',
				action: 'change',
				type: 'required',
			},
		];

		this.validator = new window.Smart.Utilities.Validator(rules, '#validationsummary');

	}

	handleClick() {
		this.validator.validate();
	}

	render() {
		return (
			<div>
				<div className="demo-container">
					<form id="testForm" action="./">
						<div className="fieldset">
							<div className="fieldset-header">Credentials</div>
							<div className="field">
								<div className="field-label">Email</div>
								<div className="field-value">
									<TextBox  selectAllOnFocus placeholder="Email" id="email-validation"></TextBox>
								</div>
							</div>
							<div className="field">
								<div className="field-label">Password</div>
								<div className="field-value">
									<PasswordTextBox  selectAllOnFocus placeholder="Password"
										id="password-validation"></PasswordTextBox>
								</div>
							</div>
							<div className="field">
								<div className="field-label">Confirm Password</div>
								<div className="field-value">
									<PasswordTextBox  selectAllOnFocus placeholder="Confirm Password"
										id="confirm-password-validation"></PasswordTextBox>
								</div>
							</div>
						</div>
						<div className="fieldset clear">
							<div className="fieldset-header">Personal Data</div>
							<div className="field">
								<div className="field-label">Name</div>
								<div className="field-value">
									<TextBox  selectAllOnFocus placeholder="Name" id="name-validation"></TextBox>
								</div>
							</div>
							<div className="field">
								<div className="field-label">Date of birth</div>
								<div className="field-value">
									<DateTimePicker  format-string="dddd, MMM dd, yyyy"
										calendar-button enable-mouse-wheel-action drop-down-position="bottom" id="date-validation"
										spin-buttons spin-buttons-position="left"></DateTimePicker>
								</div>
							</div>
						</div>
						<div className="fieldset">
							<div className="fieldset-header">Billing address</div>
							<div className="field">
								<div className="field-label">Country</div>
								<div className="field-value">
									<DropDownList  id="country-validation">
										<ListItem value="Australia">Australia</ListItem>
										<ListItem value="Bulgaria">Bulgaria</ListItem>
										<ListItem value="Canada">Canada</ListItem>
									</DropDownList>
								</div>
							</div>
							<div className="field">
								<div className="field-label">City</div>
								<div className="field-value">
									<TextBox  selectAllOnFocus placeholder="City" id="city-validation"></TextBox>
								</div>
							</div>
							<div className="field">
								<div className="field-label">Address</div>
								<div className="field-value">
									<TextBox  selectAllOnFocus placeholder="Address" id="address-validation"></TextBox>
								</div>
							</div>
							<div className="field">
								<div className="field-label">Phone (optional)</div>
								<div className="field-value">
									<MaskedTextBox  className="material" hint="" mask="+1 (###) ###-####"
										id="phone-validation"></MaskedTextBox>
								</div>
							</div>
							<div className="field clear">
								<div className="field-label">Post code (optional)</div>
								<div className="field-value">
									<NumericTextBox  id="post-code-validation" input-format="integer"
										min="0" spin-buttons spin-buttons-position="right" spin-buttons-step="1"
										enable-mouse-wheel-action></NumericTextBox>
								</div>
							</div>
							<div id="check" className="checkbox-validator clear">
								<CheckBox  click-mode="press" id="termsInput">Accept terms</CheckBox>
								<br />
							</div>
						</div>
						<div className="fieldset">
							<div id="registerButton" className="submit-button">
								<Button  onClick={this.handleClick.bind(this)} id="register" type="button" className="success">Register</Button>
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
