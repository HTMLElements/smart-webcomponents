<template>
	<div class="vue-root">
		<smart-greeting></smart-greeting>
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/smart.element.js";


export default {
	name: "app",
	setup() {
		onMounted(() => {
			window.Smart('smart-greeting', class SmartGreeting extends window.Smart.BaseElement {
				// Declare properties
				static get properties() {
					return {
						'name': {
							value: 'World!',
							type: 'string'
						}
					};
				}
				// Define a template
				template() {
					return '<p>Hello, <span>{{name}}</span></p>';
				}
			});

		})
	}
};
</script>

<style>

</style>
