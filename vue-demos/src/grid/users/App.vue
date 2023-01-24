<template>
	<div class="vue-root">
		<div class="demo-description">In that example, the DataGrid shows how it can operate in multi-user mode. The "users" array property works together with the "currentUser" index property. When "users" is set, the current user may write row comments and additional columns such as "CreatedBy",
			"ModifiedBy" and "Collaborator" can be used. The 'CreatedBy' column displays the user information for the user who created the row. The 'ModifiedBy' displays the user information for the user who last edited the row. The 'Collaborator' column type can
			be used for setting a user(s) per row. That is useful when you want to assign tasks and the row data is a task. You can switch between different users by setting the "currentUser" property to an index from 0 to the count of users. The DataGrid's sorting,
			filtering, editing, searching, row header and add new row features are enabled.</div>
		<smart-grid ref="grid" id="grid"></smart-grid>
		<div class="options">
			<div class="caption">Users</div>
			<div class="option">
				<smart-multi-combo-input ref="users" single-select pills id="users" readonly drop-down-button-position="right"></smart-multi-combo-input>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted } from 'vue'

import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.multicomboinput.js";


export default {
	name: "app",
	setup() {
		onMounted(() => {
			window.Smart('#grid', class {
				get properties() {
					return {
						appearance: {
							alternationCount: 2,
							showRowHeader: true,
							showRowStatus: true,
							showRowHeaderSelectIcon: true,
							showRowHeaderFocusIcon: true,
							showColumnIcon: true,
							allowHover: true,
							showRowNumber: true
						},
						dataSource: new window.Smart.DataAdapter({
							dataSource: window.generateData(1000),
							dataFields: [
								'id: number',
								'firstName: string',
								'lastName: string',
								'available: boolean',
								'date: date',
								'productName: string',
								'quantity: number',
								'price: number',
								'total: number'
							]
						}),
						sorting: {
							enabled: true,
							mode: 'many'
						},
						filtering: {
							enabled: true
						},
						editing: {
							enabled: true,
							addNewRow: {
								visible: true,
								displayMode: 'button'
							}
						},
						selection: {
							enabled: true,
							allowCellSelection: true,
							allowRowHeaderSelection: true,
							allowColumnHeaderSelection: true,
							mode: 'extended'
						},
						behavior: {
							allowColumnReorder: true,
							rowResizeMode: 'growAndShrink',
							columnResizeMode: 'growAndShrink'
						},
						header: {
							visible: true,
							buttons: ['columns', 'filter', 'sort', 'delete', 'search']
						},
						rowDetail: {
							enabled: true,
							dialog: {
								enabled: true
							}
						},
						columnMenu: {
							dataSource: {
								columnMenuCustomizeType: {
									visible: true
								},
								columnMenuItemDelete: {
									visible: true
								}
							}
						},
						columns: [{
								label: 'First Name',
								allowHide: false,
								showDescriptionButton: true,
								description: "First Name Column",
								validationRules: [{
									type: 'required'
								}, {
									type: 'minLength',
									value: 2
								}, {
									type: 'maxLength',
									value: 10
								}],
								dataField: 'firstName',
								columnGroup: 'name'
							},
							{
								label: 'Last Name',
								description: "Last Name Column",
								dataField: 'lastName',
								showDescriptionButton: true,
								columnGroup: 'name'
							},
							{
								label: 'Product',
								width: 200,
								showDescriptionButton: true,
								dataField: 'productName',
								editor: 'dropDownList',
								template: 'list',
								columnGroup: 'order'
							},
							{
								label: 'Date',
								width: 200,
								showDescriptionButton: true,
								cellsFormat: 'dd-MM-yyyy hh:mm',
								dataField: 'date',
								columnGroup: 'order',
								editor: {
									template: 'dateTimePicker',
									autoOpen: true,
									formatString: 'dd-MM-yyyy hh:mm',
									dropDownDisplayMode: 'auto'
								}
							},
							{
								label: 'Available',
								width: 200,
								template: 'checkBox',
								showDescriptionButton: true,
								dataField: 'available',
								columnGroup: 'order'
							},
							{
								label: 'Quantity',
								showDescriptionButton: true,
								dataField: 'quantity',
								allowNull: false,
								columnGroup: 'order'
							},
							{
								label: 'Unit Price',
								showDescriptionButton: true,
								dataField: 'price',
								cellsFormat: 'c2',
								columnGroup: 'order'
							},
							{
								label: 'Total',
								dataField: 'total',
								cellsFormat: 'c2',
								columnGroup: 'order'
							},
							{
								label: 'Created By',
								template: 'createdBy',
								allowEdit: false,
								dataField: 'createdBy',
								dataType: 'string'
							},
							{
								label: 'Modified By',
								template: 'modifiedBy',
								allowEdit: false,
								dataField: 'modifiedBy',
								dataType: 'string'
							}

						],
						columnGroups: [{
								label: 'Customer Name',
								align: 'center',
								name: 'name'
							},
							{
								label: 'Order Detals',
								align: 'center',
								name: 'order'
							}
						],
						currentUser: 0,
						users: [{
								id: 0,
								color: '#8E24AA',
								name: 'Andrew',
								image: 'https://htmlelements.com/demos/images/people/andrew.png'
							},
							{
								id: 1,
								color: '#41B883',
								name: 'Anne',
								image: 'https://htmlelements.com/demos/images/people/anne.png'
							},
							{
								id: 2,
								color: '#53B9E6',
								name: 'Janet',
								image: 'https://htmlelements.com/demos/images/people/janet.png'
							},
							{
								id: 3,
								color: '#FFCD42',
								name: 'John',
								image: 'https://htmlelements.com/demos/images/people/john.png'
							},
							{
								id: 4,
								color: '#DD5347',
								name: 'Laura',
								image: 'https://htmlelements.com/demos/images/people/laura.png'
							}
						]
					};
				}
			});

			const grid = document.querySelector('smart-grid');
			const users = document.querySelector('#users');
			users.dataSource = [{ value: 0, color: '#8E24AA', label: 'Andrew', image: 'https://htmlelements.com/demos/images/people/andrew.png' },
				{ value: 1, color: '#41B883', label: 'Anne', image: 'https://htmlelements.com/demos/images/people/anne.png' },
				{ value: 2, color: '#53B9E6', label: 'Janet', image: 'https://htmlelements.com/demos/images/people/janet.png' },
				{ value: 3, color: '#FFCD42', label: 'John', image: 'https://htmlelements.com/demos/images/people/john.png' },
				{ value: 4, color: '#DD5347', label: 'Laura', image: 'https://htmlelements.com/demos/images/people/laura.png' }
			];
			users.selectedIndex = 0;
			users.onchange = () => {
				grid.currentUser = users.selectedIndex;
			}
		})
	}
};
</script>

<style>
body {
	min-height: 700px;
}

smart-grid {
	width: calc(100% - 350px);
}
</style>
