import React from "react";
import ReactDOM from "react-dom";
import { Form, FormGroup, FormControl } from 'smart-webcomponents-react/form';
import 'smart-webcomponents-react/source/modules/smart.form';
import 'smart-webcomponents-react/source/modules/smart.datetimepicker';
import 'smart-webcomponents-react/source/modules/smart.dropdownlist';
import 'smart-webcomponents-react/source/modules/smart.input';
import 'smart-webcomponents-react/source/modules/smart.maskedtextbox';
import 'smart-webcomponents-react/source/modules/smart.numerictextbox';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {log: ""};
		this.form = React.createRef();
	}

	onValueChanges(value) {
		this.setState({ log: JSON.stringify(value) });
	}

	componentDidMount() {
		const form = this.form.current;

		form.value = {
			employee: {
				name: {
					firstName: 'Anne',
					lastName: 'Smith',
				},
				details: {
					address: '1st Ave SW',
					company: 'N/A',
					city: 'Austin',
					state: 'Texas',
					zip: '78209'
				}
			}
		}

		form.onValueChanges = this.onValueChanges.bind(this);
	}

	render() {
		return (
			<div>
			    <div className="demo-description">Reactive Form with Validation created from HTML</div>
			    <Form ref={this.form} id="profileForm">
					<FormGroup id="employee" label="Employee" dataField="employee">
						<FormGroup dataField="name">
							<FormControl label="Photo" controlType="template">
								<div><img width="100" src="../../images/people/anne.png"/></div>
							</FormControl>
							<FormControl info="Enter First Name" required placeholder="First Name" controlType="input" dataField="firstName" label="First Name" className="outlined"></FormControl>
							<FormControl info="Enter Last Name" required placeholder="Last Name" controlType="input" dataField="lastName" label="Last Name" className="outlined"></FormControl>
						</FormGroup>
						<FormGroup label="Details" dataField="details">
							<FormControl placeholder="Company Name" required controlType="input" dataField="company" label="Company" className="outlined"></FormControl>
							<FormControl placeholder="Address" required controlType="input" dataField="address" label="Address" className="outlined"></FormControl>
							<FormControl placeholder="City" required controlType="input" dataField="city" label="City" className="outlined"></FormControl>
							<FormControl placeholder="State" required controlType="input" dataField="state" label="State" className="outlined"></FormControl>
							<FormControl placeholder="Zip / Postal Code" required controlType="input" dataField="zip" label="Zip / Postal Code" className="outlined"></FormControl>
						</FormGroup>
						<FormGroup columns={2}>
							<FormControl align="right" controlType="submit" label="Submit" className="primary"></FormControl>
							<FormControl align="left" action="reset" controlType="button" label="Reset"></FormControl>
						</FormGroup>
					</FormGroup>
			    </Form>
			    	<h3>Form Value:</h3>
					<div>{this.state.log}</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
