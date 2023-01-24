<template>
	<div class="vue-root">
		<div class="demo-description">Radio buttons binding.</div>
		<smart-radio-button type="radio" id="one" value="One" smart-model="picked">
			<label for="one">One</label>
		</smart-radio-button>
		<smart-radio-button type="radio" id="two" value="Two" smart-model="picked">
			<label for="two">Two</label>
		</smart-radio-button>
		<smart-radio-button type="radio" id="three" value="Three" smart-model="picked">
			<label for="three">Three</label>
		</smart-radio-button>
		<br>Picked: <span>[[picked]]</span>
		
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/smart.core.js";


export default {
	name: "app",
	setup() {
		onMounted(() => {
			new window.App({
				data: {
					picked: 'One'
				}
			});

		})
	}
};
</script>

<style>

</style>
