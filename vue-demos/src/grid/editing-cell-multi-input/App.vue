<template>
	<div class="vue-root">
		<div class="demo-description">MultiInput editor allows you to select items, which are displayed as tags in the Grid. Click on a cell to begin edit. Start typing and auto-complete popup will be displayed. In this example is demonstrated how to use various types of MultiInput editors.</div>
		<smart-grid id="grid"></smart-grid>
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";


export default {
	name: "app",
	setup() {
		onMounted(() => {
			window.Smart('#grid', class {
				get properties() {
					return {
						dataSource: new window.Smart.DataAdapter({
							dataSource: window.generateData(1000),
							dataFields: [
								'id: number',
								'firstName: string',
								'lastName: string',
								'productName: string',
								'available: bool',
								'quantity: number',
								'price: number',
								'total: number'
							]
						}),
						behavior: {
							columnResizeMode: 'growAndShrink'
						},
						editing: {
							enabled: true,
							mode: 'cell'
						},
						columns: [{
								label: 'First Name',
								dataField: 'firstName',
								template: 'dropDownList',
								editor: 'dropDownList'
							},
							{
								label: 'Last Name',
								dataField: 'lastName',
								template: 'dropDownList',
								editor: 'dropDownList'
							},
							{
								label: 'Product',
								allowEdit: true,
								width: 150,
								dataField: 'productName',
								template: 'tags',
								editor: {
									template: 'multiComboInput'
								}
							},
							{
								label: 'Quantity',
								dataField: 'quantity',
								editor: 'numberInput'
							},
							{
								label: 'Unit Price',
								dataField: 'price',
								editor: 'numberInput',
								cellsFormat: 'c2'
							},
							{
								label: 'Supplier',
								width: 150,
								dataField: 'custom',
								template: 'tags',
								editor: {
									template: 'multiComboInput',
									readonly: true,
									dropDownButtonPosition: 'right',
									autoOpen: true,
									pills: true,
									singleSelect: true,
									dataSource: [{
											value: 0,
											color: '#8E24AA',
											label: 'Andrew',
											image: '../../images/people/andrew.png'
										},
										{
											value: 1,
											color: '#41B883',
											label: 'Anne',
											image: '../../images/people/anne.png'
										},
										{
											value: 2,
											color: '#53B9E6',
											label: 'Janet',
											image: '../../images/people/janet.png'
										},
										{
											value: 3,
											color: '#FFCD42',
											label: 'John',
											image: '../../images/people/john.png'
										},
										{
											value: 4,
											color: '#DD5347',
											label: 'Laura',
											image: '../../images/people/laura.png'
										}
									]
								}
							}
						]
					};
				}
			});

		})
	}
};
</script>

<style>
@media only screen and (max-width: 700px) {
	smart-grid {
		width: 100%;
	}
}
</style>
