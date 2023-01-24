import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import 'smart-webcomponents-react/source/modules/smart.form';
import 'smart-webcomponents-react/source/modules/smart.datetimepicker';
import 'smart-webcomponents-react/source/modules/smart.dropdownlist';
import 'smart-webcomponents-react/source/modules/smart.input';
import 'smart-webcomponents-react/source/modules/smart.maskedtextbox';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.addBtn = React.createRef();
		this.insertBtn = React.createRef();
		this.removeBtn = React.createRef();
		this.showBtn = React.createRef();
		this.hideBtn = React.createRef();		
	}
	
	componentDidMount() {
		this.form = new window.Smart.Form('#profileForm', {
			showSummary: false,
			showColonAfterLabel: true,
			controls: [{
					controlType: 'group',
					label: 'Customer Profile',
					dataField: 'profile',
					controls: [{
							dataField: 'firstName',
							controlType: 'input',
							label: 'First name',
							placeholder: 'First name',
							cssClass: 'underlined'
						},
						{
							dataField: 'lastName',
							controlType: 'input',
							label: 'Last name',
							placeholder: 'Last name',
							cssClass: 'underlined'
						},
						{
							dataField: 'address',
							controlType: 'input',
							label: 'Address',
							placeholder: 'Address',
							cssClass: 'underlined'
						},
						{
							dataField: 'city',
							controlType: 'input',
							label: 'City',
							placeholder: 'City',
							cssClass: 'underlined'
						},
						{
							dataField: 'state',
							controlType: 'dropdownlist',
							label: 'State',
							cssClass: 'underlined',
							controlOptions: {
								placeholder: 'State',
								dataSource: ['California', 'New York', 'Oregon', 'Illinois', 'Texas']
							}
						}
					]
				},
				{
					controlType: 'boolean',
					dataField: 'acceptTerms',
					label: 'Agree to terms and conditions'
				},
				{
					controlType: 'group',
					columns: 2,
					controls: [{
							controlType: 'button',
							action: 'submit',
							label: 'Submit',
							cssClass: 'primary',
							align: 'right'
						},
						{
							controlType: 'button',
							action: 'reset',
							label: 'Cancel',
							align: 'left'
						}
					]
				}
			]
		});
	}

	handleAddClick() {
		this.form.profile.addControl({
			dataField: 'zip',
			controlType: 'input',
			placeholder: 'Zip',
			cssClass: 'underlined',
			label: 'Zip code'
		});

		this.addBtn.current.disabled = true;
		this.removeBtn.current.disabled = false;
	}

	handleInsertClick() {
		this.form.profile.insertControl(1, {
			dataField: 'middleName',
			controlType: 'input',
			label: 'Middle name',
			placeholder: 'Middle name',
			cssClass: 'underlined'
		});

		this.insertBtn.current.disabled = true;
	}

	handleRemoveClick() {
		this.form.profile.removeControl('zip');
		this.removeBtn.current.disabled = true;
		this.addBtn.current.disabled = false;
	}

	handleHideClick() {
		this.form.profile.city.hide();
		this.showBtn.current.disabled = false;
		this.hideBtn.current.disabled = true;
	}

	handleShowClick() {
		this.form.profile.city.show();
		this.showBtn.current.disabled = true;
		this.hideBtn.current.disabled = false;
	}

	render() {
		return (
			<div>
			    <form id="profileForm"></form>
			    <div className="options">
			        <div className="option">
			            <Button onClick={this.handleAddClick.bind(this)} ref={this.addBtn} id="addBtn">Add Form Control</Button>
			        </div>
			        <div className="option">
			            <Button onClick={this.handleInsertClick.bind(this)} ref={this.insertBtn} id="insertBtn">Insert After 'First Name'</Button>
			        </div>
			        <div className="option">
			            <Button onClick={this.handleRemoveClick.bind(this)} ref={this.removeBtn} disabled id="removeBtn">Remove Form Control</Button>
			        </div>
			        <div className="option">
			            <Button onClick={this.handleHideClick.bind(this)} ref={this.hideBtn} id="hideBtn">Hide 'City'</Button>
			        </div>
			        <div className="option">
			            <Button onClick={this.handleShowClick.bind(this)} ref={this.showBtn} disabled id="showBtn">Show 'City'</Button>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
