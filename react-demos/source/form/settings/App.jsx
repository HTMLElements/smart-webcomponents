import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

import 'smart-webcomponents-react/source/modules/smart.form';
import 'smart-webcomponents-react/source/modules/smart.datetimepicker';
import 'smart-webcomponents-react/source/modules/smart.dropdownlist';
import 'smart-webcomponents-react/source/modules/smart.input';
import 'smart-webcomponents-react/source/modules/smart.maskedtextbox';
import 'smart-webcomponents-react/source/modules/smart.numerictextbox';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.readonly = React.createRef();
		this.showColonAfterLabel = React.createRef();
		this.columns = React.createRef();
		this.topLabelLocation = React.createRef();
		this.leftLabelLocation = React.createRef();
	}
	
	componentDidMount() {
	    this.form = new window.Smart.Form('#profileForm', {
			controls: [{
					controlType: 'group',
					label: 'Photo',
					controls: [{
						template: '<div style=" overflow: hidden;"><img width="90" src="../../images/people/john.png"/></div>',
						controlType: 'template'
					}]
				},
				{
					controlType: 'group',
					label: 'Profile',
					dataField: 'profile',
					labelPosition: 'top',
					controls: [{
							dataField: 'firstName',
							controlType: 'input',
							label: 'First name',
							required: true,
							info: 'Enter first name',
							placeholder: 'First name',
							cssClass: 'outlined',
							infoPosition: 'right'
						},
						{
							dataField: 'lastName',
							controlType: 'input',
							label: 'Last name',
							placeholder: 'Last name',
							required: true,
							cssClass: 'outlined',
							info: 'Enter last name'
						},
						{
							dataField: 'birthDate',
							controlType: 'date',
							label: 'Birth Date',
							placeholder: 'Birth date',
							cssClass: 'outlined'
						},
						{
							dataField: 'company',
							controlType: 'input',
							label: 'Company',
							placeholder: 'Company name',
							cssClass: 'outlined',
							required: false
						},
						{
							label: 'Address',
							dataField: 'address',
							controlType: 'group',
							controls: [{
									dataField: 'street',
									controlType: 'input',
									label: 'Street',
									placeholder: 'Address',
									required: true,
									cssClass: 'outlined'
								},
								{
									dataField: 'city',
									controlType: 'input',
									label: 'City',
									placeholder: 'City',
									cssClass: 'outlined',
									required: true
								},
								{
									dataField: 'state',
									controlType: 'dropdownlist',
									label: 'State',
									required: true,
									cssClass: 'outlined',
									controlOptions: {
										placeholder: 'State',
										dataSource: ['California', 'New York', 'Oregon', 'Illinois', 'Texas']
									}
								},
								{
									dataField: 'zip',
									controlType: 'input',
									placeholder: 'Zip',
									cssClass: 'outlined',
									label: 'Zip code',
									required: true
								}
							]
						}
					]
				},
				{
					controlType: 'group',
					columns: 2,
					controls: [{
							controlType: 'button',
							action: 'submit',
							label: 'Sign up',
							cssClass: 'success',
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

		this.form.value = {
			profile: {
				firstName: 'John',
				lastName: 'Scott',
				birthDate: '1985-05-15',
				company: 'N/A',
				address: {
					street: '1st Ave SW',
					city: 'San Antonio',
					state: 'Texas',
					zip: '78209'
				}
			}
		}

	}

	handleReadonlyChange() {
		this.form.readonly = this.readonly.current.checked;
	}
	
	handleShowColonChange() {
		this.form.showColonAfterLabel = this.showColonAfterLabel.current.checked;
	}

	handleColumnsChange() {
		const columns = parseInt(this.columns.current.selectedIndexes[0]) + 1;

		this.form.profile.columns = columns;
		this.form.profile.address.columns = columns;
		this.form.profile.address.columnSpan = columns;
	}
	
	handleRadioChange() {
		setTimeout(() => {
			if (this.leftLabelLocation.current.checked) {
				this.form.labelPosition = 'left';
			} else {
				this.form.labelPosition = 'top';
			}
		});
	}
	
	render() {
		return (
			<div>
			    <div className="demo-description">In this example is demonstrated how to dynamically change Form options
			        like changing the FormGroup columns count, making the Form readonly, changing
			        the labels location, displaying a ':' after the form labels.</div>
			    <br/>
			    <form id="profileForm"></form>
			    <div className="options">
			        <div className="option">
			            <label>Labels Location:</label>
			            <br />
			            <RadioButton onChange={this.handleRadioChange.bind(this)} ref={this.topLabelLocation} checked id="topLabelLocation">Top</RadioButton>
			            <br />
			            <RadioButton onChange={this.handleRadioChange.bind(this)} ref={this.leftLabelLocation} id="leftLabelLocation">Left</RadioButton>
			        </div>
			        <div className="option">
			            <br />
			            <label>Columns Count:</label>
			            <br />
			            <DropDownList onChange={this.handleColumnsChange.bind(this)} ref={this.columns} id="columns" selectedIndexes={[0]} dataSource="[1, 2]"></DropDownList>
			        </div>
			        <div className="option">
			            <br />
			            <CheckBox onChange={this.handleReadonlyChange.bind(this)} ref={this.readonly} id="readonly">Readonly</CheckBox>
			            <br />
			            <CheckBox onChange={this.handleShowColonChange.bind(this)} ref={this.showColonAfterLabel} id="showColonAfterLabel">Show ':' after label</CheckBox>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
