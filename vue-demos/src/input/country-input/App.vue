<template>
	<div class="vue-root">
		<div class="demo-description">
			<p> <b>Smart.CountryInput</b> is an input that displays a list of countries in a drop-down. You can use it for country selection.</p>
		</div>
		<smart-country-input></smart-country-input>
		<br />
		<br />
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.countryinput.js";


export default {
	name: "app",
	setup() {
		onMounted(() => {

		})
	}
};
</script>

<style>

</style>
