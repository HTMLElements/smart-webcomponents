<template>
	<div class="vue-root">
		<div class="demo-description">Multiple checkboxes, bound to the same Array:</div>
		<br/>
		<div id='app'>
			<input type="checkbox" id="peter" value="Peter" smart-model="checkedNames">
			<label for="jack">Peter</label>
			<input type="checkbox" id="john" value="Nancy" smart-model="checkedNames">
			<label for="nancy">Nancy</label>
			<input type="checkbox" id="anthony" value="Anthony" smart-model="checkedNames">
			<label for="anthony">Anthony</label>
			<br> <span>Checked names: [[ checkedNames ]]</span>
		</div>
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
				id: 'app',
				data: {
					checkedNames: ['Peter']
				}
			});

		})
	}
};
</script>

<style>

</style>
