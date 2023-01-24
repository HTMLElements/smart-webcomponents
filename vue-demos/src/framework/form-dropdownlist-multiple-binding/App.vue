<template>
	<div class="vue-root">
		<div class="demo-description">DropDownList (bound to Array)</div>
		<br/>
		<smart-drop-down-list selection-mode="checkBox" v-model="selected" v-on:change="selected = $event.target.selectedValues" smart-model="selected">
			<smart-list-item value="A">A</smart-list-item>
			<smart-list-item value="B">B</smart-list-item>
			<smart-list-item value="C">C</smart-list-item>
		</smart-drop-down-list>
		<br/>
		<br/>Selected: <span>{{ selected }}</span>
	</div>
</template>

<script>
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/smart.core.js";


export default {
	name: "app",
	data: function () {
	return {
selected: ["A"]
	}
	}
};
</script>

<style>

</style>
