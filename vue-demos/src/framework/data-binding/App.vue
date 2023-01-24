<template>
	<div class="vue-root">
		<div class="demo-description">All Custom Elements are two-way data bound to a common Model. The log, below the custom elements logs the changes with declarative data bindings.</div>
		<div id="form">
			<smart-text-box id="textBox1"></smart-text-box>
			<br/>
			<smart-text-box id="textBox2"></smart-text-box>
			<br/>
			<smart-list-box id="listBox"></smart-list-box>
			<br/>
			<smart-drop-down-list id="dropDownList"></smart-drop-down-list>
			<br/>
			<br/>
			<smart-button id="button"></smart-button>
		</div>
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.listbox.js";
import "smart-webcomponents/source/modules/smart.textbox.js";
import "smart-webcomponents/source/smart.core.js";


export default {
	name: "app",
	setup() {
		onMounted(() => {
			const app = new window.App({
				id: "form",
				template: {
					"#textBox1": {
						properties: {
							value: "",
							placeholder: "First Name"
						},
						bind: {
							value: "firstName"
						}
					},
					"#textBox2": {
						properties: {
							value: "",
							placeholder: "Last Name"
						},
						bind: {
							value: "lastName"
						}
					},
					"#listBox": {
						properties: {
							dataSource: [],
							selectedIndexes: [0]
						},
						listeners: {
							change: "selectItem"
						},
						bind: {
							dataSource: "items",
							selectedIndexes: "selectedIndexes"
						}
					},
					"#dropDownList": {
						properties: {
							dataSource: [],
							selectedIndexes: [0]
						},
						listeners: {
							change: "selectItem"
						},
						bind: {
							dataSource: "items",
							selectedIndexes: "selectedIndexes"
						}
					},
					"#button": {
						properties: {
							value: "submit",
							innerHTML: "Submit"
						},
						listeners: {
							click: "addItem"
						},
						bind: {
							innerHTML: "buttonText"
						}
					}
				},
				data: {
					firstName: "John",
					lastName: "Peterson",
					items: ["George Brown", "Anthony Black", "Mike Jordan"],
					selectedIndexes: [1],
					addItem: function() {
						this.items.push(this.firstName + " " + this.lastName);
						this.firstName = this.lastName = "";
					},
					selectItem: function(event) {
						if (event.detail.selected) {
							const selectedItem = this.items[this.selectedIndexes[0]];
							const names = selectedItem.split(" ");
							this.firstName = names[0];
							this.lastName = names[1];
						}
					},
					buttonText: "Add Item",
				}
			});
			app.notify(function() {
				console.log('data is updated');
			});

		})
	}
};
</script>

<style>

</style>
