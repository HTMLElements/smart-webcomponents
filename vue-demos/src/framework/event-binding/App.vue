<!-- eslint-disable -->
<template>
	<div class="vue-root">
		<div class="demo-description">Button's 'click' event is bound to the data object's 'submit' function.</div>
		<br/>
		<smart-text-box title={{message}} v-bind:value="message" v-on:input="message = $event.target.value" id="textBox1"></smart-text-box>
		<br/>
		<smart-button @click="submit()">{{buttonText}}</smart-button>
		<br/>
		<br/> <span>{{message}}</span>
	</div>
</template>

<script>
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.textbox.js";
import "smart-webcomponents/source/smart.core.js";

export default {
name: "app",
   data: function () {
	return {
	message: "Hello World",
	buttonText: "Submit",
	}
  },
  methods: {
	submit: function() {
		alert("Submitting: " + this.message);
	}
  }
};
</script>

<style>

</style>
