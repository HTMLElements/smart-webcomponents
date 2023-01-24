import React from "react";
import ReactDOM from "react-dom";
import { QueryBuilder } from 'smart-webcomponents-react/querybuilder';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.querybuilder = React.createRef();
		this.filterQueryValue = React.createRef();
	}

	handleQueryBuilderChange() {
		this.filterQueryValue.current.innerHTML = JSON.stringify(this.querybuilder.current.value, null, '\t');
	}

	customOperations = [{
		label: 'Matches /^\d{7}$/g',
		name: '/^\d{7}$/g',
		hideValue: true
	},
	{
		label: 'Is valid',
		name: 'isvalid',
		editorTemplate: function (fieldType, value, fieldData) {
			const editor1 = document.createElement('smart-radio-button'),
				editor2 = document.createElement('smart-radio-button'),
				container = document.createElement('div');
			editor1.innerHTML = 'Yes';
			editor2.innerHTML = 'No';
			container.className = 'container';
			if (typeof value !== 'boolean') {
				value = !!parseFloat(value);
			}
			editor1.checked = value;
			editor2.checked = !value;
			container.appendChild(editor1);
			container.appendChild(editor2);
			return container;
		},
		valueTemplate: function (editor, value) {
			return value ? '<em>yes</em>' : '<em>no</em>';
		},
		handleValue: function (editor) {
			const editors = editor.getElementsByTagName('smart-radio-button');
			return Number(editors[0].checked);
		}
	}
	];

	fields = [{
		label: 'Id',
		dataField: 'id',
		dataType: 'number',
		filterOperations: ['=', '<', '>', 'isvalid']
	},
	{
		label: 'Product',
		dataField: 'productName',
		dataType: 'string'
	},
	{
		label: 'Product code',
		dataField: 'productCode',
		dataType: 'string',
		filterOperations: ['=', '/^\d{7}$/g']
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		dataType: 'number'
	},
	{
		label: 'Produced',
		dataField: 'produced',
		dataType: 'date',
		filterOperations: ['<', '>']
	},
	{
		label: 'Purchased',
		dataField: 'purchased',
		dataType: 'datetime'
	},
	{
		label: 'Available',
		dataField: 'available',
		dataType: 'boolean'
	}
	];

	value = [
		[
			['productCode', '/^\d{7}$/g'],
			'or',
			['id', 'isvalid', 1]
		],
		'and',
		[
			['available', '=', true],
			'and',
			['price', '<', 1300],
		],
		'or',
		[
			['produced', '>', new Date(2015, 3, 4)],
			'and',
			['purchased', '>=', new Date(2019, 4, 23, 15, 33)]
		]
	];

	init() {
		this.filterQueryValue.current.innerHTML = JSON.stringify(this.querybuilder.current.value, null, '\t');
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<QueryBuilder ref={this.querybuilder} id="queryBuilder"
					allowDrag
					customOperations={this.customOperations}
					fields={this.fields}
					showIcons
					value={this.value}
					onChange={this.handleQueryBuilderChange.bind(this)}></QueryBuilder>
				<div className="options">
					<div className="option">
						<div ref={this.filterQueryValue} id="filterQueryValue"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
