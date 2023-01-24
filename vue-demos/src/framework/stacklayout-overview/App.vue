<template>
	<div class="vue-root">
		<div class="demo-description">StackLayout organizes views in a one-dimensional line ("stack"), either horizontally or vertically. Views in a StackLayout can be sized based on the space in the layout using layout options. Positioning is determined by the order views were added to
			the layout and the layout options of the views.
		</div>
		<div class="smart-stack-layout">
			<smart-button class="primary item">OK</smart-button>
			<smart-button class="secondary item">Cancel</smart-button>
		</div>
		<div class="options">
			<div class="caption">Settings</div>
			<div class="option">
				<smart-radio-button value="left" smart-model="horizontalAlignment" checked>Left</smart-radio-button>
				<br/>
				<smart-radio-button value="center" smart-model="horizontalAlignment">Center</smart-radio-button>
				<br/>
				<smart-radio-button value="right" smart-model="horizontalAlignment">Right</smart-radio-button>
			</div>
			<div class="option">
				<smart-radio-button value="top" smart-model="verticalAlignment" checked>Top</smart-radio-button>
				<br/>
				<smart-radio-button value="middle" smart-model="verticalAlignment">Middle</smart-radio-button>
				<br/>
				<smart-radio-button value="bottom" smart-model="verticalAlignment">Bottom</smart-radio-button>
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
					horizontalAlignment: 'left',
					verticalAlignment: 'top',
					orientation: 'horizontal'
				}
			});
			app.notify(function(changes) {
				if (changes.propertyName === 'horizontalAlignment') {
					stackPanel.classList.remove('left', 'right', 'center');
				}
				if (changes.propertyName === 'verticalAlignment') {
					stackPanel.classList.remove('top', 'bottom', 'middle');
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
	width: 60%;
	height: 500px;
}
</style>
