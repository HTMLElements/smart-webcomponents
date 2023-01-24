import React from "react";
import ReactDOM from "react-dom";
import { MultiColumnFilterPanel } from 'smart-webcomponents-react/multicolumnfilterpanel';

class App extends React.Component {
	dataSource = [{
		label: 'שם פרטי',
		dataField: 'firstName',
		icon: 'firstName',
		dataType: 'string'
	},
	{
		label: 'שם משפחה',
		dataField: 'lastName',
		icon: 'lastName',
		dataType: 'string'
	},
	{
		label: 'יום הולדת',
		dataField: 'birthday',
		icon: 'birthday',
		dataType: 'date'
	},
	{
		label: 'שם חיית המחמד',
		dataField: 'petName',
		icon: 'petName',
		dataType: 'string'
	},
	{
		label: 'מדינה',
		dataField: 'country',
		icon: 'country',
		dataType: 'string'
	},
	{
		label: 'שם מוצר',
		dataField: 'productName',
		icon: 'productName',
		dataType: 'string'
	},
	{
		label: 'מחיר',
		dataField: 'price',
		icon: 'price',
		dataType: 'number'
	},
	{
		label: 'כמות',
		dataField: 'quantity',
		icon: 'quantity',
		dataType: 'number'
	},
	{
		label: 'זמן הרכישה',
		dataField: 'timeOfPurchase',
		icon: 'timeOfPurchase',
		dataType: 'date'
	},
	{
		label: 'לא בתוקף',
		dataField: 'expired',
		icon: 'expired',
		dataType: 'boolean'
	}
	];

	operator = 'or';

	value = [
		['firstName', 'EQUAL', 'פיטר'],
		['birthday', 'LESS_THAN_OR_EQUAL', new Date(2015, 0, 1)],
		['expired', 'EQUAL', false],
		['expired', 'NULL'],
		['price', 'LESS_THAN', 500],
		['productName', 'DOES_NOT_CONTAIN_CASE_SENSITIVE', 'או']
	];

	messages = {
		'en': {
			'addFilter': '+ Add filter',
			'and': 'And',
			'apply': 'Apply',
			'cancel': 'Cancel',
			'CONTAINS': 'contains',
			'CONTAINS_CASE_SENSITIVE': 'contains (case sensitive)',
			'DOES_NOT_CONTAIN': 'does not contain',
			'DOES_NOT_CONTAIN_CASE_SENSITIVE': 'does not contain (case sensitive)',
			'EMPTY': 'empty',
			'ENDS_WITH': 'ends with',
			'ENDS_WITH_CASE_SENSITIVE': 'ends with (case sensitive)',
			'EQUAL': 'equal',
			'EQUAL_CASE_SENSITIVE': 'equal (case sensitive)',
			'GREATER_THAN': 'greater than',
			'GREATER_THAN_OR_EQUAL': 'greater than or equal',
			'LESS_THAN': 'less than',
			'LESS_THAN_OR_EQUAL': 'less than or equal',
			'noFilters': 'No filters applied',
			'NOT_EMPTY': 'not empty',
			'NOT_EQUAL': 'not equal',
			'NOT_NULL': 'not null',
			'NULL': 'null',
			'or': 'Or',
			'STARTS_WITH': 'starts with',
			'STARTS_WITH_CASE_SENSITIVE': 'starts with (case sensitive)',
			'where': 'Where',
		},
		'he': {
			'addFilter': '+ הוסף פילטר',
			'and': 'ו',
			'apply': 'להגיש מועמדות',
			'cancel': 'בטל',
			'CONTAINS': 'מכיל',
			'CONTAINS_CASE_SENSITIVE': 'מכיל (רגיש רישיות)',
			'DOES_NOT_CONTAIN': 'לא מכיל',
			'DOES_NOT_CONTAIN_CASE_SENSITIVE': 'אינו מכיל (רגיש רישיות)',
			'EMPTY': 'ריק',
			'ENDS_WITH': 'נגמר עם',
			'ENDS_WITH_CASE_SENSITIVE': 'מסתיים ב (רגיש רישיות)',
			'EQUAL': 'שווה',
			'EQUAL_CASE_SENSITIVE': 'שווה (רגיש אותיות רישיות)',
			'GREATER_THAN': 'גדול מ',
			'GREATER_THAN_OR_EQUAL': 'גדול או שווה',
			'LESS_THAN': 'פחות מ',
			'LESS_THAN_OR_EQUAL': 'פחות מ או שווה',
			'noFilters': 'לא הוחל מסננים',
			'NOT_EMPTY': 'לא ריק',
			'NOT_EQUAL': 'לא שווה',
			'NOT_NULL': 'לא ריק',
			'NULL': 'ריק',
			'or': 'או',
			'STARTS_WITH': 'מתחיל עם',
			'STARTS_WITH_CASE_SENSITIVE': 'מתחיל עם (רגיש רישיות)',
			'where': 'איפה',
		}
	}

	componentDidMount() {

	}

	render() {
		return (<MultiColumnFilterPanel dataSource={this.dataSource} operator={this.operator} value={this.value} 
			messages={this.messages} id="multiColumnFilterPanel" rightToLeft locale="he"></MultiColumnFilterPanel>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
