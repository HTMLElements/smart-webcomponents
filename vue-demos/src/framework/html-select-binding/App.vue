<template>
	<div class="vue-root">
		<div class="demo-description">DropDownList (bound to Array)</div>
		<br/>
		<select selection-mode="checkBox" v-model="selected">
			<option value="A">A</option>
			<option value="B">B</option>
			<option value="C">C</option>
		</select>
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
			selected: ['A']
		}
	}
};
</script>

<style>

</style>
