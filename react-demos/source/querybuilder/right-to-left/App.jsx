import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { QueryBuilder } from 'smart-webcomponents-react/querybuilder';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.querybuilder = React.createRef();
	}

	handleAllowDragChange(event) {
		this.querybuilder.current.allowDrag = event.detail.value;
	}

	handleShowIconsChange(event) {
		this.querybuilder.current.showIcons = event.detail.value;
	}

	fields = [{
		label: 'מזהה',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'מוצר',
		dataField: 'productName',
		dataType: 'string'
	},
	{
		label: 'מחיר ליחידה',
		dataField: 'price',
		dataType: 'number'
	},
	{
		label: 'נקנה',
		dataField: 'purchased',
		dataType: 'datetime'
	},
	{
		label: 'זמין',
		dataField: 'available',
		dataType: 'boolean'
	}
	];

	value = [
		[
			['purchased', '=', new Date(2019, 0, 4)],
			'and',
			['productName', '<>', 'צגים'],
			'or',
			['productName', 'isblank']
		],
		'and',
		[
			['available', '=', true],
			'and',
			['price', '<', 1300],
		],
		'or',
		[
			['productName', '=', 'טלוויזיות'],
			'and',
			['price', '<', 4000]
		]
	];

	messages = {
		'he': {
			'add': 'הוסף',
			'addCondition': 'הוסף תנאי',
			'addGroup': 'הוסף קבוצה',
			'and': 'ו',
			'notand': 'לא וגם',
			'or': 'או',
			'notor': 'לא אור',
			'=': 'שווים',
			'<>': 'לא שווה',
			'>': 'גדול מ',
			'>=': 'גדול מ או שווה ל',
			'<': 'פחות מ',
			'<=': 'פחות מ או שווה ל',
			'startswith': 'מתחיל עם',
			'endswith': 'נגמר עם',
			'contains': 'מכיל',
			'notcontains': 'לא מכיל',
			'isblank': 'ריק',
			'isnotblank': 'אינו ריק',
			'dateTabLabel': 'תאריך',
			'timeTabLabel': 'זמן',
			'queryLabel': 'שאילתא'
		}
	};

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<QueryBuilder ref={this.querybuilder} id="queryBuilder"
					allowDrag
					fields={this.fields}
					showIcons
					value={this.value}
					messages={this.messages}
					rightToLeft
					locale="he"></QueryBuilder>
				<div className="options">
					<div className="option">
						<CheckBox id="allowDrag" checked onChange={this.handleAllowDragChange.bind(this)}>Allow drag</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="showIcons" checked onChange={this.handleShowIconsChange.bind(this)}>Show icons in "Equals"</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
