<template>
	<div class="vue-root">
		<div class="demo-description">Slider cell editor allows you to easily edit numeric values. Click on a cell to begin edit. Click on 'Quantity' or 'Price' to view the Slider editor.
		</div>
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
						layout: {
							rowHeight: 'auto'
						},
						editing: {
							enabled: true,
							mode: 'cell'
						},
						columns: [{
								label: 'First Name',
								dataField: 'firstName',
								editor: 'autoComplete'
							},
							{
								label: 'Product',
								allowEdit: true,
								dataField: 'productName',
								template: 'dropdownlist',
								editor: {
									template: 'dropDownList'
								}
							},
							{
								label: 'Available',
								dataField: 'available',
								template: 'checkBox',
								editor: 'checkBox'
							},
							{
								label: 'Quantity',
								dataField: 'quantity',
								editor: {
									template: 'slider'
								}
							},
							{
								label: 'Unit Price',
								dataField: 'price',
								editor: {
									template: 'slider'
								},
								cellsFormat: 'c2'
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
