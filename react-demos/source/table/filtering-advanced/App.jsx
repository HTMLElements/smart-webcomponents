import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';
import { Table } from 'smart-webcomponents-react/table';
import { Input } from 'smart-webcomponents-react/input';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
		this.menu = React.createRef();
		this.menu2 = React.createRef();
		this.menuitem = React.createRef();
		this.button = React.createRef();
		this.numberofappliedfilters = React.createRef();
		this.filterrowscontainer = React.createRef();

		this.rowToRemove = null;
		this.filterRows = {};
		this.appliedFilters = {};
	}

	emails = [{
		name: 'Walter Stewart',
		email: 'walter.stewart@example.com',
		permission: 'Owner'
	},
	{
		name: 'Manuel Smith',
		email: 'manuel.smith@example.com',
		permission: 'Owner'
	},
	{
		name: 'Annette Gray',
		email: 'annette.gray@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Candice Murphy',
		email: 'candice.murphy@example.com',
		permission: 'Owner'
	},
	{
		name: 'Theresa Reynolds',
		email: 'theresa.reynolds@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Wyatt Silva',
		email: 'wyatt.silva@example.com',
		permission: 'Restricted'
	},
	{
		name: 'April Hayes',
		email: 'april.hayes@example.com',
		permission: 'Owner'
	},
	{
		name: 'Brayden Henry',
		email: 'brayden.henry@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Clayton Rice',
		email: 'clayton.rice@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Alberto Day',
		email: 'alberto.day@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Jeremy Marshall',
		email: 'jeremy.marshall@example.com',
		permission: 'Owner'
	},
	{
		name: 'Ivan Kennedy',
		email: 'ivan.kennedy@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Sofia Grant',
		email: 'sofia.grant@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Felicia Moore',
		email: 'felicia.moore@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Carolyn White',
		email: 'carolyn.white@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Leo Austin',
		email: 'leo.austin@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Derrick Larson',
		email: 'derrick.larson@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Carla James',
		email: 'carla.james@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Vickie Cruz',
		email: 'vickie.cruz@example.com',
		permission: 'Owner'
	},
	{
		name: 'Brianna Torres',
		email: 'brianna.torres@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Kristen Cruz',
		email: 'kristen.cruz@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Terrance Holt',
		email: 'terrance.holt@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Marlene Reed',
		email: 'marlene.reed@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Beatrice Nichols',
		email: 'beatrice.nichols@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Scarlett Walker',
		email: 'scarlett.walker@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Scott Oliver',
		email: 'scott.oliver@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Joe Castillo',
		email: 'joe.castillo@example.com',
		permission: 'Restricted'
	},
	{
		name: 'Florence Sanders',
		email: 'florence.sanders@example.com',
		permission: 'Owner'
	},
	];

	dataSource = new window.Smart.DataAdapter({
		dataSource: this.emails,
		dataFields: [
			'name: string',
			'email: string',
			'permission: string'
		]
	});

	paging = true;

	sortMode = 'one';

	columns = [{
		label: 'Name',
		dataField: 'name',
		dataType: 'string',
		width: 275,
		formatFunction(settings) {
			if (settings.value === 'Candice Murphy') {
				settings.template = `<strong>${settings.value} (you)</strong>`;
			}
		}
	},
	{
		label: 'Email',
		dataField: 'email',
		dataType: 'string',
		width: 275
	},
	{
		label: 'Permission',
		dataField: 'permission',
		dataType: 'string',
		width: 200
	},
	{
		label: '',
		dataField: 'action',
		dataType: 'string',
		allowSort: false,
		formatFunction(settings) {
			settings.template = `<smart-button row-id="${settings.row}" className="remove-button"><span className="material-icons">more_vert</span></smart-button>`;
		}
	}];

	conditions = [{
		value: 'CONTAINS',
		label: 'Contains'
	},
	{
		value: 'DOES_NOT_CONTAIN',
		label: 'Does not contain'
	},
	{
		value: 'STARTS_WITH',
		label: 'Starts with'
	},
	{
		value: 'ENDS_WITH',
		label: 'Ends with'
	},
	{
		value: 'EQUAL',
		label: 'Equals'
	}
	];

	createCustomFilterRow(columnLabel) {
		const row = document.createElement('div');

		ReactDOM.render(<div className={'filter-row filter-row-' + columnLabel}>
			<Input dataSource={this.conditions} dropDownButtonPosition='right'
				placeholder='Condition' className="underlined"></Input>
			<Input dataSource={this.conditions} dropDownButtonPosition='right'
				placeholder={'Filter by ' + columnLabel} className="underlined"></Input>
			<Button dataField={columnLabel} className="primary confirm">Done</Button>
		</div>, document.getElementById('filterRowsContainer'));

		this.filterRows[columnLabel] = row;
	}

	handleTableClick(event) {
		const table = this.table.current,
			removeMenu = this.menu2.current,
			removeButton = event.target.closest('.remove-button');

		if (removeButton) {
			const rect = removeButton.getBoundingClientRect();

			this.rowToRemove = table.nativeElement.rowById[removeButton.getAttribute('row-id')];

			if (this.rowToRemove.data.permission === 'Restricted') {
				removeMenu.items[0].label = 'Allow access';
				removeMenu.items[0].value = 'Owner';
			}
			else {
				removeMenu.items[0].label = 'Remove access';
				removeMenu.items[0].value = 'Restricted';
			}
			removeMenu.open(rect.right - removeMenu.nativeElement.offsetWidth, rect.bottom);
		}
	}

	handleRemoveMenuItemClick(event) {
		this.rowToRemove.data.permission = event.detail.value;
	}

	handlePointerUp(event) {
		event.stopPropagation();
	}

	handleClick() {
		const rect = this.button.current.nativeElement.getBoundingClientRect(),
			filterMenu = this.menu.current,
			removeMenu = this.menu2.current;

		if (filterMenu.opened) {
			filterMenu.close();
		}
		else {
			filterMenu.open(rect.right - filterMenu.nativeElement.offsetWidth, rect.bottom);
		}

		removeMenu.close();
	}

	clearFiltersOnClick(event) {
		const table = this.table.current,
			numberOfAppliedFilters = this.numberofappliedfilters.current,
			filterMenu = this.menu.current;

		if (event.target.closest('smart-button')) {
			table.clearFilters();

			for (let index in filterMenu.items) {
				const menuItem = filterMenu.items[index];
				menuItem.checked = false;
				menuItem.classList.remove('filtered');
			}

			Array.from(document.querySelectorAll('.filter-row')).forEach(row => row.remove());
			numberOfAppliedFilters.classList.add('smart-visibility-hidden');
			numberOfAppliedFilters.innerHTML = '0';
			this.appliedFilters = {};
			filterMenu.close();
		}
	}

	handleItemCheckChange(event) {
		const filterRow = this.filterRows[event.detail.value],
			filterRowsContainer = this.filterrowscontainer.current;

		if (event.detail.checked) {
			if (filterRow) {
				filterRowsContainer.appendChild(filterRow);
			}
			else {
				this.createCustomFilterRow(event.detail.value);
			}
		}
		else {
			filterRow.remove();
		}
	}

	handleFilterRowsClick(event) {
		const table = this.table.current,
			numberOfAppliedFilters = this.numberofappliedfilters.current,
			filterMenu = this.menu.current,
			confirmButton = (event.target.closest('.confirm'));

		if (confirmButton) {
			const filterRow = confirmButton.parentElement,
				conditionInput = filterRow.firstElementChild,
				valueInput = filterRow.children[1],
				dataField = confirmButton.dataField,
				condition = conditionInput.$.input.dataValue,
				value = valueInput.value,
				menuItem = filterMenu.querySelector(`smart-menu-item[value="${dataField}"]`);

			if (!condition || !value) {
				delete this.appliedFilters[dataField];
				table.removeFilter(dataField);
				menuItem.classList.remove('filtered');
			}
			else {
				const filterGroup = new window.Smart.Utilities.FilterGroup(),
					filterObject = filterGroup.createFilter('string', value, condition);

				filterGroup.addFilter('or', filterObject);
				table.addFilter(dataField, filterGroup);
				this.appliedFilters[dataField] = filterGroup;
				menuItem.classList.add('filtered');
			}

			const numberOfFilters = Object.keys(this.appliedFilters).length;

			numberOfAppliedFilters.classList.toggle('smart-visibility-hidden', numberOfFilters === 0);
			numberOfAppliedFilters.innerHTML = numberOfFilters.toString();
			menuItem.checked = false;
			filterRow.remove();
		}
	}

	componentDidMount() {
		const template = document.createElement('template');

		template.id = 'clearFiltersTemplate';
		template.innerHTML = '<smart-button className="primary">Clear filters</smart-button>';

		document.body.appendChild(template);

		this.menuitem.current.label = 'clearFiltersTemplate';
	}

	render() {
		return (
			<div>
				<div id="mainContainer">
					<div id="filterContainer">
						<div>
							<div id="label">Users</div>
							<div id="numberOfAppliedFiltersContainer">
								<div ref={this.numberofappliedfilters} id="numberOfAppliedFilters" className="smart-visibility-hidden"></div>
							</div>
							<div>
								<Button ref={this.button} id="filterIcon" onPointerUp={this.handlePointerUp.bind(this)} onClick={this.handleClick.bind(this)}><span className="material-icons">filter_list</span>
								</Button>
							</div>
						</div>
						<div ref={this.filterrowscontainer} id="filterRowsContainer" onClick={this.handleFilterRowsClick.bind(this)}></div>
					</div>
					<Table ref={this.table} id="table" onClick={this.handleTableClick.bind(this)} dataSource={this.dataSource} paging={this.paging} sortMode={this.sortMode} columns={this.columns} ></Table>
				</div>
				<Menu ref={this.menu} id="filterMenu" checkboxes checkable checkMode="checkbox, none" mode="dropDown" onItemCheckChange={this.handleItemCheckChange.bind(this)}>
					<MenuItem value="name"><span className="material-icons">filter_alt</span>Name</MenuItem>
					<MenuItem
						value="email"><span className="material-icons">filter_alt</span>Email</MenuItem>
					<MenuItem
						separator value="permission"><span className="material-icons">filter_alt</span>Permission</MenuItem>
					<MenuItem ref={this.menuitem} onClick={this.clearFiltersOnClick.bind(this)}
						id="clearFilters" value="clearFilters"></MenuItem>
				</Menu>
				<Menu ref={this.menu2} id="removeMenu" mode="dropDown" onItemClick={this.handleRemoveMenuItemClick.bind(this)}>
					<MenuItem>Remove access</MenuItem>
				</Menu>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
