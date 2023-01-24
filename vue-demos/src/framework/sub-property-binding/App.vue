<template>
	<div class="vue-root">
		<div class="demo-description">TextBox and MultilineTextBox are bound to sub properties.</div>
		<br/>
		<smart-text-box smart-model="details.subject" id="textBox1"></smart-text-box>
		<br/>
		<br/>
		<smart-multiline-text-box smart-model="details.message" id="textBox2"></smart-multiline-text-box>
		<br/> <span>[[details.subject]]</span>
		<br/> <span>[[details.message]]</span>
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.multilinetextbox.js";
import "smart-webcomponents/source/modules/smart.textbox.js";
import "smart-webcomponents/source/smart.core.js";


export default {
	name: "app",
	setup() {
		onMounted(() => {
			new window.App({
				data: {
					details: {
						subject: "About Transaction",
						message: "Hey, Peter. Take a look at the items, I sent you earlier."
					}
				}
			});

		})
	}
};
</script>

<style>
smart-multiline-text-box {
	display: block;
	height: 150px;
}
</style>
