<template>
	<div class="vue-root">
		<div class="demo-description">List Rendering with Data Binding</div>
		<ul smart-for="items">
			<li>[[item]]</li>
		</ul>
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
					items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
				}
			});

		})
	}
};
</script>

<style>

</style>
