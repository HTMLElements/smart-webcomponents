import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
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

	handleAllowDragChange(event) {
		this.querybuilder.current.allowDrag = event.detail.value;
	}

	handleShowIconsChange(event) {
		this.querybuilder.current.showIcons = event.detail.value;
	}

	fields = [{
		label: 'Id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'Product',
		dataField: 'productName',
		dataType: 'string'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		dataType: 'number'
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
			['purchased', '=', new Date(2019, 0, 4)],
			'and',
			['productName', '<>', 'Monitors'],
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
			['productName', '=', 'Televisions'],
			'and',
			['price', '<', 4000]
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
					allowDrag fields={this.fields} showIcons value={this.value}
					onChange={this.handleQueryBuilderChange.bind(this)}></QueryBuilder>
				<div className="options">
					<div className="option">
						<CheckBox id="allowDrag" checked onChange={this.handleAllowDragChange.bind(this)}>Allow drag</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="showIcons" checked onChange={this.handleShowIconsChange.bind(this)}>Show icons in "Equals"</CheckBox>
					</div>
					<div className="option"></div>
				</div>
				<div ref={this.filterQueryValue} id="filterQueryValue"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
