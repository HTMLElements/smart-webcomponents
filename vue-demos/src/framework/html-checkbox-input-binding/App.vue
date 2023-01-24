<template>
	<div class="vue-root">
		<div class="demo-description">Single checkbox, boolean value:</div>
		<br/>
		<input type="checkbox" v-model="isChecked" />
		<br/>
		<br/>CheckBox's Value is: <span>{{isChecked}}</span>
	</div>
</template>

<script>
import "smart-webcomponents/source/styles/smart.default.css";


export default {
	name: "app",
	data: function () {
		return {
			isChecked: true
		}
	}
};
</script>

<style>

</style>
