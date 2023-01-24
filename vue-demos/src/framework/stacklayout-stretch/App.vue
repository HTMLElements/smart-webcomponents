<template>
	<div class="vue-root">
		<div class="demo-description"></div>
		<div class="smart-stack-layout stretch">
			<smart-button class="primary item">OK</smart-button>
			<smart-button class="secondary item raised">Cancel</smart-button>
		</div>
		<div class="options">
			<div class="caption">Stretch</div>
			<div class="option">
				<smart-check-box smart-model="stretch" checked>Horizontal</smart-check-box>
				<br/>
				<smart-check-box smart-model="verticalStretch">Vertical</smart-check-box>
			</div>
			<div class="caption">Orientation</div>
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
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/smart.core.js";


export default {
	name: "app",
	setup() {
		onMounted(() => {
			const stackPanel = document.querySelector('.smart-stack-layout');
			const app = new window.App({
				data: {
					stretch: true,
					verticalStretch: false,
					orientation: 'horizontal'
				}
			});
			app.notify(function(changes) {
				if (changes.propertyName === 'stretch') {
					if (changes.newValue) {
						stackPanel.classList.add('stretch');
					} else {
						stackPanel.classList.remove('stretch');
					}
				}
				if (changes.propertyName === 'verticalStretch') {
					if (changes.newValue) {
						stackPanel.classList.add('vertical-stretch');
					} else {
						stackPanel.classList.remove('vertical-stretch');
					}
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
	height: 500px;
	width: 60%;
}
</style>
