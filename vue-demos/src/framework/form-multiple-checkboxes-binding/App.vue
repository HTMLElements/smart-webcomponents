<template>
	<div class="vue-root">
		<div class="demo-description">Multiple checkboxes, bound to the same Array:</div>
		<br/>
		<div id='app'>
			<smart-check-box type="checkbox" id="peter" value="Peter" v-on:change="$event.detail.value ? checkedNames.push('Peter') : checkedNames.pop('Peter')">
				<label for="jack">Peter</label>
			</smart-check-box>
			<smart-check-box type="checkbox" id="john" v-on:change="$event.detail.value ? checkedNames.push('Nancy') : checkedNames.pop('Nancy')" value="Nancy">
				<label for="nancy">Nancy</label>
			</smart-check-box>
			<smart-check-box type="checkbox" id="anthony" v-on:change="$event.detail.value ? checkedNames.push('Anthony') : checkedNames.pop('Anthony')" value="Anthony">
				<label for="anthony">Anthony</label>
			</smart-check-box>
			<br> <span>Checked names: {{ checkedNames }}</span>
		</div>
	</div>
</template>

<script>
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/smart.core.js";


export default {
	name: "app",
	data() {
		return {
			checkedNames: []
		}
	}
};
</script>

<style>

</style>
