import React from "react";
import ReactDOM from "react-dom";
import { Validator, Smart } from 'smart-webcomponents-react/validator';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.validator = null;
	}

	rules = [{
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
		input: '#accessPassword',
		message: 'Password field is required',
		action: 'keyup',
		type: 'required'
	},
	{
		input: '#accessPassword',
		message: 'Your password must be between at least 3 characters!',
		action: 'keyup, blur',
		type: 'stringLength',
		min: 3,
	},
	{
		input: '#accessPassword',
		message: 'Your password is too weak',
		action: 'keyup',
		type: 'compare',
		comparisonTarget: function () {
			return '123';
		},
		comparisonType: '!==',
	},
	{
		input: '#ageInput',
		message: 'Age field is required!',
		action: 'keyup, blur',
		type: 'required'
	},
	{
		input: '#ageInput',
		message: 'The age field must contains only digits',
		action: 'keyup, blur',
		type: 'numeric'
	},
	{
		input: '#ageInput',
		message: 'You are not between 10 and 20 years old',
		action: 'keyup, blur',
		type: 'compare',
		comparisonTarget: function () {
			return '10';
		},
		comparisonType: '>=',
	},
	{
		input: '#ageInput',
		message: 'You are not between 10 and 20 years old',
		action: 'keyup, blur',
		type: 'compare',
		comparisonTarget: function () {
			return '20';
		},
		comparisonType: '<=',
	},
	{
		input: '#evenInput',
		message: 'Please enter an even one.',
		action: 'keyup, blur',
		type: 'custom',
		validationCallback: (e) => parseFloat(e.value) % 2 === 0
	},
	{
		input: '#evenInput',
		message: 'The even number must be between 20 and 50',
		action: 'keyup, blur',
		type: 'range',
		min: 20,
		max: 50
	},
	{
		input: '#calcInput',
		action: 'keyup, blur',
		type: 'compare',
		comparisonTarget: function () {
			return '2';
		},
		comparisonType: '===',
		message: 'Try again!'
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
		validationCallback: function () {
			let checkboxes = document.querySelectorAll('.genderRadio');
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
		action: 'change',
		type: 'required',
		message: 'You must agree to the Terms and Conditions'
	}];

	handleValidate() {
		this.validator.validate();
	}

	handleReset() {
		this.validator.reset();
	}

	init() {
		this.validator = new Smart.Utilities.Validator(this.rules, '#validationsummary');
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-container">
					<form action="./">
						<label>Register</label>
						<br />
						<br />
						<div className="input-holder">
							<input placeholder="Username" type="text" id="userInput" className="Input"
							/>
							<br />
							<br />
							<input placeholder="Password, Try: 123" type="password" id="accessPassword"
								className="Input" />
							<br />
							<br />
							<input placeholder="Age" type="text" id="ageInput" className="Input" />
							<br />
							<br />
							<input placeholder="Even number" type="text" id="evenInput" className="Input"
							/>
							<br />
							<br />
							<input placeholder="1 + 1 = ?" type="text" id="calcInput" className="Input"
							/>
							<br />
							<br />
							<input type="checkbox" id="terms" />
							<label for="terms">Terms!</label>
							<br />
							<br />
							<label>Choose gender:</label>
							<br />
							<input type="radio" name="genderRadioGroup" id="maleRadio" value="male"
								className="genderRadio" />
							<label for="maleRadio">Male</label>
							<br />
							<input type="radio" name="genderRadioGroup" id="femaleRadio" value="female"
								className="genderRadio" />
							<label for="femaleRadio">Female</label>
							<br />
							<input type="radio" name="genderRadioGroup" id="alienRadio" value="alien"
								className="genderRadio" />
							<label for="alienRadio">Alien</label>
							<br />
							<br />
							<input onClick={this.handleValidate.bind(this)} type="button" value="Send" id="register" className="button-input Button"
							/>
							<input onClick={this.handleReset.bind(this)} type="button" value="Reset" id="reset" className="button-input Button"
							/>
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
