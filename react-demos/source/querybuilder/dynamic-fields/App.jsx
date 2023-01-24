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

	fields = [{
		label: 'Id',
		dataField: 'id',
		dataType: 'number',
		filterOperations: ['=', '<', '>']
	},
	{
		label: 'Product',
		dataField: 'productName',
		dataType: 'string',
		filterOperations: ['=']
	},
	{
		label: 'Product code',
		dataField: 'productCode',
		dataType: 'string'
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
		dataType: 'dateTime'
	},
	{
		label: 'Available',
		dataField: 'available',
		dataType: 'boolean'
	}
	];

	value = [
		[
			['customField', '<', 3],
			'or',
			['id', '=', 3000]
		],
		'and',
		[
			['price', '<', 1300],
		],
		'or',
		[
			['produced', '>', new Date(2015, 3, 4)],
			'and',
			['purchased', '>=', new Date(2019, 4, 23, 15, 33)]
		]
	];

	getDynamicField(field) {
		if (field === 'customField') {
			return {
				label: 'Custom Field',
				dataField: field,
				dataType: 'number',
				filterOperations: ['<', '>']
			};
		}
		return {
			label: field,
			dataField: field.toLowerCase(),
			dataType: 'string',
			filterOperations: ['=', 'startswith', 'endswith']
		};
	}

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
					fields={this.fields}
					fieldsMode="dynamic"
					showIcons
					value={this.value}
					getDynamicField={this.getDynamicField}
					onChange={this.handleQueryBuilderChange.bind(this)}
				></QueryBuilder>
				<div ref={this.filterQueryValue} id="filterQueryValue"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
