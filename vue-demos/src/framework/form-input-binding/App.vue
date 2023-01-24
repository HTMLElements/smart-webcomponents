<template>
	<div class="vue-root">
		<div class="demo-description">TextBox's value is data bound to the 'message' property. The SPAN tag's text content is also automatically updated when the 'message' property is changed.</div>
		<br/>
		<smart-text-box title={{message}} v-bind:value="message" v-on:input="message = $event.target.value" id="textBox1"></smart-text-box>
		<br/>Message is: <span>{{message}}</span>
	</div>
</template>

<script>
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.textbox.js";
import "smart-webcomponents/source/smart.core.js";


export default {
	name: "app",
	data: function () {
		return {
			message: "Hello World"
		}
	}
};
</script>

<style>

</style>
