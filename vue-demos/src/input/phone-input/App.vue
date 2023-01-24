<template>
	<div class="vue-root">
		<div class="demo-description">
			<p> <b>Smart.PhoneInput</b> is an input that allows you to easily enter a phone number and validate it.</p>
		</div>
		<smart-phone-input></smart-phone-input>
		<br />
		<br />
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.phoneinput.js";


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
