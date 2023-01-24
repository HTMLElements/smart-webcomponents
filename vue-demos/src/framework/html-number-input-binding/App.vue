<template>
	<div class="vue-root">
		<div class="demo-description">Number Input 'value' is data-bound through the 'smart-model' attribute.</div>
		<br/>
		<input type="number" smart-model="number" />
		<br/>
		<br/>Input Number is: <span>[[number]]</span>
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
					number: 10
				}
			});

		})
	}
};
</script>

<style>

</style>
