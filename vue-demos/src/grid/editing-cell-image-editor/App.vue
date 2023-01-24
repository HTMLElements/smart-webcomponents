<template>
	<div class="vue-root">
		<div class="demo-description">Image grid editor allows you to add images to your Grid cells. It uses a special Image Dialog where you can upload your images.</div>
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
										label: 'Image',
										allowEdit: true,
										dataField: 'image',
										template: 'image',
										editor: {
											template: 'image'
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
										editor: 'numberInput'
									},
									{
										label: 'Unit Price',
										dataField: 'price',
										editor: 'numberInput',
										cellsFormat: 'c2'
									}
								]
							};
						}
					});
		})
	}
}
</script>
<style>
@media only screen and (max-width: 700px) {
	smart-grid {
		width: 100%;
	}
}
</style>
