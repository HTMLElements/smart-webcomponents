import React from "react";
import ReactDOM from "react-dom";
import 'smart-webcomponents-react/source/modules/smart.form';
import 'smart-webcomponents-react/source/modules/smart.datetimepicker';
import 'smart-webcomponents-react/source/modules/smart.dropdownlist';
import 'smart-webcomponents-react/source/modules/smart.input';
import 'smart-webcomponents-react/source/modules/smart.maskedtextbox';
import 'smart-webcomponents-react/source/modules/smart.numerictextbox';

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			log: '',
			statusLog: ''
		};
	}
	
	componentDidMount() {
		const form = new window.Smart.Form('#profileForm', {
			controls: [{
					dataField: 'textBoxValue',
					controlType: 'text',
					label: 'Text input',
					required: true
				},
				{
					dataField: 'passwordBoxValue',
					controlType: 'password',
					label: 'Password input',
					required: true
				},
				{
					dataField: 'nubmberBoxValue',
					controlType: 'number',
					label: 'Number input',
					required: true
				},
				{
					dataField: 'dropdownValue',
					label: 'Drop down list',
					required: true,
					controlType: 'dropdownlist',
					controlOptions: {
						dataSource: [{
								label: 'Option 1',
								value: 'value1'
							},
							{
								label: 'Option 2',
								value: 'value2'
							},
							{
								label: 'Option 3',
								value: 'value3'
							}
						]
					}
				},
				{
					controlType: 'label',
					label: 'Radio buttons:',
					rowHeight: '40px',
				},
				{
					dataField: 'radiobuttonValue',
					controlType: 'option',
					optionsLayout: 'horizontal',
					options: [{
							label: 'Option 1',
							value: 'value1'
						},
						{
							label: 'Option 2',
							value: 'value2'
						},
						{
							label: 'Option 3',
							value: 'value3'
						}
					]
				},
				{
					controlType: 'label',
					label: 'Boolean options / checkboxes:'
				},
				{
					dataField: 'checkboxValue1',
					controlType: 'boolean',
					label: 'Checkbox 1'
				},
				{
					dataField: 'checkboxValue2',
					controlType: 'boolean',
					label: 'Checkbox 2'
				},
				{
					dataField: 'checkboxValue3',
					controlType: 'boolean',
					label: 'Checkbox 3'
				}
			]
		});

		const sampleValue = {
			'textBoxValue': 'text box value',
			'passwordBoxValue': 'password box',
			'nubmberBoxValue': '67.44',
			'dropdownValue': 'value3',
			'radiobuttonValue': 'value2',
			'checkboxValue1': false,
			'checkboxValue2': false,
			'checkboxValue3': true,
		};


		form.value = sampleValue;

		form.onValueChanges = (value) => {
			this.setState({log: JSON.stringify(value)});
		}

		form.onStatusChanges = (value) => {
			this.setState({statusLog: JSON.stringify(value)});
		}
	}

	render() {
		return (
			<div>
			    <div className="demo-description">This example shows how to handle onValueChanges and onStatusChanges events
			        of the Reactive Form component.</div>
			    <form id="profileForm"></form>
			    <br/>
				<h3>Value</h3>
				<div id="log">{this.state.log}</div>
				<br/>
				<h3>Status</h3>
			    <div id="statusLog">{this.state.statusLog}</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
