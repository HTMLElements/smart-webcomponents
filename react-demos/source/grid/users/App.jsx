import React from "react";
import ReactDOM from "react-dom";
import { Smart, Grid } from 'smart-webcomponents-react/grid';
import { MultiComboInput } from 'smart-webcomponents-react/multicomboinput';
import { GetData } from './common/data'

class App extends React.Component {
	
	constructor(props) {
		super(props);

		this.grid = React.createRef();
	}
	
	behavior = {
		columnResizeMode: 'growAndShrink'
	}

	appearance = {
		alternationCount: 2,
		showRowHeader: true,
		showRowStatus: true,
		showRowHeaderSelectIcon: true,
		showRowHeaderFocusIcon: true,
		showColumnIcon: true,
		allowHover: true,
		showRowNumber: true
	}
	paging = {
		enabled: true
	}

	pager = {
		visible: true
	}

	sorting = {
		enabled: true
	}

	editing = {
		enabled: true,
		addNewRow: {
			visible: true,
			displayMode: 'button'
		}
	}

	selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	}

	dataSource = new Smart.DataAdapter({
		dataSource: GetData(500),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	})

	columns = [{
		label: 'First Name',
		dataField: 'firstName',
		columnGroup: 'name'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		columnGroup: 'name'
	},
	{
		label: 'Product',
		dataField: 'productName',
		columnGroup: 'order'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		columnGroup: 'order'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		cellsFormat: 'c2',
		columnGroup: 'order',
		formatFunction(settings) {
			if (settings.value >= 4) {
				settings.cell.background = '#00A45A';
				settings.cell.color = '#fff';
			} else if (settings.value < 2) {
				settings.cell.background = '#DF3800';
				settings.cell.color = '#fff';
			} else {
				settings.cell.background = '#FFFDE1';
				settings.cell.color = '#333';
			}
			settings.value = '$' + settings.value;
		}
	},
	{
		label: 'Total',
		dataField: 'total',
		cellsFormat: 'c2',
		columnGroup: 'order',
		formatFunction(settings) {
			if (settings.value >= 20) {
				settings.cell.background = '#00A45A';
				settings.cell.color = '#fff';
			}
			if (settings.value <= 5) {
				settings.cell.background = '#DF3800';
				settings.cell.color = '#fff';
			} else {
				settings.cell.background = '#FFFDE1';
				settings.cell.color = '#333';
			}
			settings.value = '$' + settings.value;
		}
	}
	]

	columnGroups = [{
		label: 'Customer Name',
		align: 'center',
		name: 'name'
	},
	{
		label: 'Order Detals',
		align: 'center',
		name: 'order'
	}
	]
	
	
	header = {
		visible: true,
		buttons: ['columns', 'filter', 'sort', 'delete', 'search'],
		onInit(item) {
		}
	}
	
	rowDetail = {
		enabled: true,
		dialog: {
			enabled: true
		}
	}
	
	columnMenu = {
		dataSource: {
			columnMenuCustomizeType: {
				visible: true
			},
			columnMenuItemDelete: {
				visible: true
			}
		}
	} 

	componentDidMount() {

	}
	
	singleSelect = true;
	pills = true;
	readonly = true;
	dropDownButtonPosition = "right";
	comboUsers = [
		{ value: 0, color: '#8E24AA', label: 'Andrew', image: 'https://htmlelements.com/demos/images/people/andrew.png' },
		{ value: 1, color: '#41B883', label: 'Anne', image: 'https://htmlelements.com/demos/images/people/anne.png' },
		{ value: 2, color: '#53B9E6', label: 'Janet', image: 'https://htmlelements.com/demos/images/people/janet.png' },
		{ value: 3, color: '#FFCD42', label: 'John', image: 'https://htmlelements.com/demos/images/people/john.png' },
		{ value: 4, color: '#DD5347', label: 'Laura', image: 'https://htmlelements.com/demos/images/people/laura.png' }
	];
		
	selectedIndex = 0;
	
	handleChange(event) {
		this.grid.currentUser = event.detail.index;
	}
	
	currentUser = 0;
	users = [
		{ id: 0, color: '#8E24AA', name: 'Andrew', image: 'https://htmlelements.com/demos/images/people/andrew.png' },
		{ id: 1, color: '#41B883', name: 'Anne', image: 'https://htmlelements.com/demos/images/people/anne.png' },
		{ id: 2, color: '#53B9E6', name: 'Janet', image: 'https://htmlelements.com/demos/images/people/janet.png' },
		{ id: 3, color: '#FFCD42', name: 'John', image: 'https://htmlelements.com/demos/images/people/john.png' },
		{ id: 4, color: '#DD5347', name: 'Laura', image: 'https://htmlelements.com/demos/images/people/laura.png' }
	];

	
	render() {
		return (
			<div>
				<Grid
					ref={this.grid}
					users={this.users}
					currentUser={this.currentUser}
					dataSource={this.dataSource}
					columns={this.columns}
					columnGroups={this.columnGroups}
					appearance={this.appearance}
					behavior={this.behavior}
					selection={this.selection}
					header={this.header}
					rowDetail={this.rowDetail}
					sorting={this.sorting}
					editing={this.editing}
					>
				</Grid>
				<MultiComboInput
						selectedIndex={this.selectedIndex} 
						singleSelect={this.singleSelect} 
						pills={this.pills} readonly={this.readonly} 
						dropDownButtonPosition={this.dropDownButtonPosition} 
						dataSource={this.comboUsers}
						onChange={this.handleChange.bind(this)}>
				 </MultiComboInput>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
