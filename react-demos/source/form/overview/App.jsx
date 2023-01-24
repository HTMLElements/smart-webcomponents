import React from "react";
import ReactDOM from "react-dom";
import { Form, FormGroup, FormControl } from 'smart-webcomponents-react/form';
import { Input } from 'smart-webcomponents-react/input';
import { NumericTextBox } from  'smart-webcomponents-react/numerictextbox';
import { MaskedTextBox } from  'smart-webcomponents-react/maskedtextbox';
import { Button } from  'smart-webcomponents-react/button';
import 'smart-webcomponents-react/source/modules/smart.form';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {log: ""};
	}

	onValueChanges(value) {
		this.setState({ log: JSON.stringify(value) });
	}
	
	componentDidMount() {
	   // Create a Reactive Form.
		const form = new window.Smart.Form('#profileForm', {
			firstName: ['', {
				validationRules: [{
						type: 'required',
						message: 'First Name is required'
					},
					{
						type: 'stringLength',
						min: 2,
						message: 'First Name requires minimum 2 characters'
					}
				]
			}],
			lastName: ['', {
				validationRules: [{
					type: 'required',
					message: 'Last Name is required'
				}]
			}],
			address: new window.Smart.FormGroup({
				street: ['', {
					validationRules: [{
						type: 'required',
						message: 'Street is required'
					}]
				}],
				city: [''],
				state: [''],
				zip: ['']
			})
		});

		// set form's value.
		form.value = {
			firstName: 'Peter',
			lastName: 'Smith',
			address: {
				street: '507 - 20th Ave. E. Apt. 2A',
				city: 'Seattle',
				state: 'WA',
				zip: '98122'
			}
		}
		
		form.onValueChanges = this.onValueChanges.bind(this);
	}

	render() {
		return (
			<div>
				<div className="demo-description">This example shows how to create a Reactive Form with Validation.</div>
				<form id="profileForm">
					<div className="smart-form-row">
						<label>First Name:</label>
						<input className="smart-input underlined" form-control-name="firstName"></input>
					</div>
					<div className="smart-form-row">
						<label>Last Name:</label>
						<input className="smart-input underlined" form-control-name="lastName"></input>
					</div>
					<div className="smart-form-row" form-group-name="address">
						 <h3>Address</h3>
						<div className="smart-form-row">
							<label>Street:</label>
							<input className="smart-input underlined" form-control-name="street"></input>
						</div>
						<div className="smart-form-row">
							<label>City:</label>
							<input className="smart-input underlined" form-control-name="city"></input>
						</div>
						<div className="smart-form-row">
							<label>State:</label>
							<input className="smart-input underlined" form-control-name="state"></input>
						</div>
						<div className="smart-form-row">
							<label>Zip Code:</label>
							<input className="smart-input underlined" form-control-name="zip"></input>
						</div>
					</div>
					<div className="smart-form-row submit">
						<Button className="success" form-control-name="submit" type="submit">Submit</Button>
					</div>
				</form>
				<h3>Form Value:</h3>
				<div>{this.state.log}</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
