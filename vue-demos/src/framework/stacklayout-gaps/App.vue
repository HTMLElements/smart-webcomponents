<template>
	<div class="vue-root">
		<div class="demo-description"></div>
		<div class="smart-stack-layout space-between">
			<smart-button class="primary item">A</smart-button>
			<smart-button class="secondary item">B</smart-button>
			<smart-button class="primary item">C</smart-button>
			<smart-button class="secondary item">D</smart-button>
		</div>
		<div class="options">
			<div class="caption">Settings</div>
			<div class="option">
				<smart-radio-button value="space-between" smart-model="spacing" checked>Space Between</smart-radio-button>
				<br/>
				<smart-radio-button value="space-evenly" smart-model="spacing">Space Evenly</smart-radio-button>
				<br/>
				<smart-radio-button value="space-around" smart-model="spacing">Space Around</smart-radio-button>
			</div>
			<div class="option">
				<smart-radio-button value="horizontal" smart-model="orientation" checked>Horizontal</smart-radio-button>
				<br/>
				<smart-radio-button value="vertical" smart-model="orientation">Vertical</smart-radio-button>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/smart.core.js";


export default {
	name: "app",
	setup() {
		onMounted(() => {
			const stackPanel = document.querySelector('.smart-stack-layout');
			const app = new window.App({
				data: {
					spacing: 'space-between',
					orientation: 'horizontal'
				}
			});
			app.notify(function(changes) {
				if (changes.propertyName === 'spacing') {
					stackPanel.classList.remove('space-between', 'space-around', 'space-evenly');
				}
				if (changes.propertyName === 'orientation') {
					stackPanel.classList.remove('vertical');
				}
				stackPanel.classList.add(changes.newValue);
			});

		})
	}
};
</script>

<style>
.smart-stack-layout {
	height: 300px;
	width: 60%;
}

.smart-stack-layout .item {
	min-width: initial;
}
</style>
