import React from "react";
import ReactDOM from "react-dom";
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { QueryBuilder } from 'smart-webcomponents-react/querybuilder';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.querybuilder = React.createRef();
		this.dropdownlist = React.createRef();
		this.linqValue = React.createRef();
	}

	handleQueryBuilderChange(event) {
		if (event.target === this.querybuilder.current) {
			this.linqValue.current.innerHTML = event.detail.linq;
		}
	}

	handleDropDownListChange(event) {
		this.querybuilder.current.value = event.detail.label.replace(/&amp;/gm, '&').replace(/&lt;/gm, '<').replace(/&rt;/gm, '>');
	}

	customOperations = [{
		label: 'Less than',
		name: '<',
		expressionTemplate: '{0} < {1}',
		//Determines which arguments from an expression are used for the fieldName and value for the QueryBuilder. 
		//Used when converting a Linq expression to QuieryBuilder value.
		expressionReaderCallback: function (expression, bindings) {
			return {
				fieldName: bindings[0],
				value: (bindings[1] === '@minPrice' ? 0 : 100)
			};
		}
	},
	{
		label: 'Status Equals',
		name: 'status_equals',
		expressionTemplate: '{0} = "{1}"'
	},
	{
		label: 'Starts With',
		name: 'startswith',
		expressionTemplate: '{0}.StartsWith("{1}")'
	},
	{
		label: 'List Not Contains',
		name: 'list_not_contains',
		expressionTemplate: '{0}.Any(!it.Contains("{1}"))'
	},
	{
		label: 'Operator Contains',
		name: 'contains',
		expressionTemplate: '{0}.Contains("{1}")'
	},
	{
		label: 'Contains',
		name: 'keyvalue_contains',
		expressionTemplate: '{0}["{1}"].Contains("{2}")',
		//Determines the arguments for the Logical statement. Used when converting value to Linq expression
		expressionBuilderCallback: function (dataField, operation, objValue) {
			return this.expressionTemplate.replace('{0}', dataField).replace('{1}', objValue.name).replace('{2}', objValue.occupation);
		},
		//Determines which arguments from the expression are used for the fieldName and value for the QueryBuilder. 
		//Used when converting a Linq expression to QuieryBuilder value.
		expressionReaderCallback: function (expression, bindings) {
			return {
				fieldName: bindings[0],
				value: {
					name: bindings[1],
					occupation: bindings[2]
				}
			};
		},
		//Determines the a custom editor tempalte
		editorTemplate: function (fieldType, valueObj, fieldData) {
			const editor1 = document.createElement('smart-input'),
				editor2 = document.createElement('smart-input'),
				label = document.createElement('label'),
				container = document.createElement('div');
			container.className = 'container';
			label.classList.add('custom-label');
			label.textContent = 'is';
			if (typeof valueObj !== 'boolean') {
				editor1.value = valueObj.name;
				editor2.value = valueObj.occupation;
			}
			container.appendChild(editor1);
			container.appendChild(label);
			container.appendChild(editor2);
			return container;
		},
		//Determines the HTML representation of the editor's value
		valueTemplate: function (editor, obj) {
			return obj.name + ' is an ' + obj.occupation;
		},
		//Determines how the value of editor is handled by the QueryBuilder
		handleValue: function (editor) {
			const editors = editor.getElementsByTagName('smart-input');
			return {
				name: editors[0].value,
				occupation: editors[1].value
			};
		}
	},
	{
		label: 'Relative Time',
		name: 'relative_time',
		expressionTemplate: '{0} <= "{1}"',
		expressionBuilderCallback: function (dataField, operation, value) {
			let days = Math.abs(new Date().getTime() - value.getTime()) / (1000 * 60 * 60 * 24),
				hours = Math.floor((days % 1) * 60),
				minutes = Math.round((hours % 1) * 60),
				seconds = Math.round((minutes % 1) * 60);
			const format = (amount) => amount.toString().length < 2 ? '0' + amount : amount;
			return this.expressionTemplate.replace('{0}', dataField).replace('{1}', format(Math.round(days)) + '.' + format(hours) + ':' + format(minutes) + '.' + format(seconds));
		},
		expressionReaderCallback: function (expression, bindings) {
			let value = bindings[1],
				targetDate = new Date();
			//Timespan type handling
			if (/([0-9]{2}).([0-9]{2}):([0-9]{2}):([0-9]{2})/gm.test(value)) {
				let timeSpan = /([0-9]{2}).([0-9]{2}):([0-9]{2}):([0-9]{2})/gm.exec(value);
				targetDate.setDate(targetDate.getDate() + parseInt(timeSpan[1]));
				targetDate.setHours(targetDate.getHours(), 0, 0, 0);
				targetDate.setHours(targetDate.getHours() + parseInt(timeSpan[2]));
				targetDate.setMinutes(targetDate.getMinutes() + parseInt(timeSpan[3]));
				targetDate.setSeconds(targetDate.getSeconds() + parseInt(timeSpan[4]));
			}
			return {
				fieldName: bindings[0],
				value: targetDate
			};
		}
	}
	];

	fields = [{
		label: 'Program Name',
		dataField: 'programName',
		dataType: 'string',
		filterOperations: ['status_equals', 'startswith']
	},
	{
		label: 'Started Within',
		dataField: 'startedWithin',
		dataType: 'dateTime',
		filterOperations: ['relative_time']
	},
	{
		label: 'Part Number',
		dataField: 'partNumber',
		dataType: 'string',
		filterOperations: ['status_equals']
	},
	{
		label: 'Operator',
		dataField: 'operatorObject',
		dataType: 'object',
		filterOperations: ['keyvalue_contains']
	},
	{
		label: 'Operator',
		dataField: 'operatorString',
		dataType: 'string',
		filterOperations: ['contains']
	},
	{
		label: 'Id',
		dataField: 'id',
		dataType: 'string',
		filterOperations: ['list_not_contains']
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		dataType: 'number',
		filterOperations: ['<', 'status_equals']
	},
	];

	value = '(partNumber = "PN-5478" && programName = "Voltage Test") && (startedWithin <= "90.00:00:00" || operator.Contains("John"))';

	init() {
		const that = this;

		that.querybuilder.current.getLinq().then(function (result) {
			that.linqValue.current.innerHTML = result;
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<DropDownList ref={this.dropdownlist} id="linqSelector" drop-down-width="auto"
					label="Select a Linq Expression:"
					onChange={this.handleDropDownListChange.bind(this)}>
					<ListItem>operatorObject["Michael"].Contains("employee") && (programName.StartsWith("SpaceX") && price &lt; @minPrice && price &lt; 100)</ListItem>
					<ListItem selected>(partNumber = "PN-5478" && programName = "Voltage Test") && (startedWithin &lt;= "90.00:00:00" || operator.Contains("John"))</ListItem>
					<ListItem>(productName.StartsWith("ABC"))</ListItem>
					<ListItem>(price = "25" || id.Any(!it.Contains("Alpha"))) && productName.StartsWith("ABC") || productName.StartsWith("W")</ListItem>
					<ListItem>(partNumber = "PN-5478") && (programName = "Voltage Test" && startedWithin &lt;= "90.00:00:00") && operator.Contains("John")</ListItem>
					<ListItem>(asdasd) && price = "25" && sadasda</ListItem>
					<ListItem>""</ListItem>
				</DropDownList>
				<QueryBuilder ref={this.querybuilder} id="queryBuilder"
					allowDrag
					customOperations={this.customOperations}
					fields={this.fields}
					showIcons
					value={this.value}
					onChange={this.handleQueryBuilderChange.bind(this)}></QueryBuilder>
				<div id="log">
					<h3>LINQ: </h3>
					<div ref={this.linqValue}></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
