<template>
	<div class="vue-root">
		<div class="demo-description">Multiple select (bound to Array)</div>
		<br/>
		<select smart-model="selected" multiple>
			<option disabled value="">Please select one or multiple</option>
			<option>A</option>
			<option>B</option>
			<option>C</option>
		</select>
		<br/>
		<br/>Selected: <span>[[ selected ]]</span>
	</div>
</template>
<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/smart.element.js";
import "smart-webcomponents/source/smart.core.js";

export default {
	name: "app",
	setup() {
		onMounted(() => {
			new window.App({
				data: {
					selected: ['A']
				}
			})
		})
	}
};
</script>

<style>

</style>
