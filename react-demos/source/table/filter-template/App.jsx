import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Table } from 'smart-webcomponents-react/table';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
	}

	data = [{
		firstName: 'Jorge',
		lastName: 'Payne',
		age: 18,
		gender: 'male'
	},
	{
		firstName: 'Amanda',
		lastName: 'Burton',
		age: 23,
		gender: 'female'
	},
	{
		firstName: 'Dolores',
		lastName: 'Moore',
		age: 45,
		gender: 'female'
	},
	{
		firstName: 'Tanya',
		lastName: 'Stone',
		age: 76,
		gender: 'female'
	},
	{
		firstName: 'Byron',
		lastName: 'Ramirez',
		age: 32,
		gender: 'male'
	},
	{
		firstName: 'Felix',
		lastName: 'Romero',
		age: 12,
		gender: 'male'
	},
	{
		firstName: 'Brianna',
		lastName: 'Ford',
		age: 50,
		gender: 'female'
	},
	{
		firstName: 'Priscilla',
		lastName: 'Williams',
		age: 18,
		gender: 'female'
	},
	{
		firstName: 'Elaine',
		lastName: 'Medina',
		age: 33,
		gender: 'female'
	},
	{
		firstName: 'Addison',
		lastName: 'Armstrong',
		age: 33,
		gender: 'nonbinary'
	},
	{
		firstName: 'Pedro',
		lastName: 'Curtis',
		age: 23,
		gender: 'male'
	},
	];

	dataSource = new window.Smart.DataAdapter({
		dataSource: this.data,
		dataFields: [
			'firstName: string',
			'lastName: string',
			'age: number',
			'gender: string'
		]
	});

	filtering = true;

	columns = [{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string'
	},
	{
		label: 'Age',
		dataField: 'age',
		dataType: 'number'
	},
	{
		label: 'Gender',
		dataField: 'gender',
		dataType: 'string'
	}
	];

	handleReady() {
		const table = this.table.current;

		ReactDOM.render(<div>
			<CheckBox id="male" checked>Male</CheckBox>
			<CheckBox id="female" checked>Female</CheckBox>
		</div>, document.getElementById('filterCheckboxesContainer'), function () {
			this.addEventListener('change', function () {
				const maleChecked = this.querySelector('#male').checked,
					femaleChecked = this.querySelector('#female').checked;

				if (maleChecked && femaleChecked) {
					table.clearFilters();
					return;
				}

				const filterGroup = new window.Smart.Utilities.FilterGroup();

				if (!maleChecked) {
					const filterObject1 = filterGroup.createFilter('string', 'male', 'NOT_EQUAL');
					filterGroup.addFilter('and', filterObject1);
				}

				if (!femaleChecked) {
					const filterObject2 = filterGroup.createFilter('string', 'female', 'NOT_EQUAL');
					filterGroup.addFilter('and', filterObject2);
				}

				table.addFilter('gender', filterGroup);
			});
		})
	}

	init() {
		const template = document.createElement('template');

		template.id = 'customFilterTemplate';
		template.innerHTML = '<div id="filterCheckboxesContainer">Show users:</div>';

		document.body.appendChild(template);

		this.table.current.filterTemplate = template.id;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo shows how to apply a filter template to Table.</div>
				<Table ref={this.table} id="table" dataSource={this.dataSource} filtering={this.filtering}
					columns={this.columns} onReady={this.handleReady.bind(this)}></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
