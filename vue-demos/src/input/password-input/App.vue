<template>
	<div class="vue-root">
		<div class="demo-description">
			<p> <b>Smart.PasswordInput</b> is an input that allows you to easily enter a password. It is a lite version of the Smart.PasswordTextBox which has password strength check built-in functionality.</p>
		</div>
		<smart-password-input></smart-password-input>
		<br />
		<br />
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.passwordinput.js";


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
