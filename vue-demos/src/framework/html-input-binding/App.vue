<template>
	<div class="vue-root">
		<div class="demo-description">Input and TextArea 'value' is data-bound through the 'smart-model' attribute.</div>
		<br/>
		<input smart-model="message" />
		<br/>
		<br/>Input Message is: <span>[[message]]</span>
		<br/>
		<br/>
		<textarea smart-model="longMessage"></textarea>
		<br/>
		<br/>Text Area Message is: <span>[[longMessage]]</span>
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
					message: "Hello World",
					longMessage: "This is a long message"
				}
			});

		})
	}
};
</script>

<style>

</style>
