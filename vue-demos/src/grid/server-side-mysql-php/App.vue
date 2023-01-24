<template>
	<div class="vue-root">
		<div class="demo-description">This demo shows how to load data from MySQL Database and PHP. We will obtain the data from MySql Database and especially the 'Customers' table of the Northwind Database.</div>
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
						appearance: {
							alternationStart: 0,
							alternationCount: 2
						},
						sorting: {
							enabled: true
						},
						selection: {
							enabled: true,
							checkBoxes: {
								enabled: true
							}
						},
						filtering: {
							enabled: true
						},
						grouping: {
							enabled: true,
							renderMode: 'basic'
						},
						dataSource: new window.Smart.DataAdapter({
							dataSource: 'grid_data.php',
							dataSourceType: 'json',
							dataFields: [
								'CompanyName: string',
								'ContactName: string',
								'ContactTitle: string',
								'Address: string',
								'City: string',
								'Country: string'
							]
						}),
						columns: [{
								label: 'Company Name',
								dataField: 'CompanyName'
							},
							{
								label: 'Contact Name',
								dataField: 'ContactName'
							},
							{
								label: 'Contact Title',
								dataField: 'ContactTitle'
							},
							{
								label: 'Address',
								dataField: 'Address'
							},
							{
								label: 'City',
								dataField: 'City'
							},
							{
								label: 'Country',
								dataField: 'Country'
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

</style>
