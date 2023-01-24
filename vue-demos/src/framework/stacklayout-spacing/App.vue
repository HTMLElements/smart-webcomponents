<template>
	<div class="vue-root">
		<div class="demo-description">To add spacing between stacked items, use 'spacing' or 'spacing-#' where # is from 2 to 6.</div>
		<div class="smart-stack-layout spacing">
			<smart-button class="primary item">OK</smart-button>
			<smart-button class="secondary item">Cancel</smart-button>
		</div>
		<label>Stack Layout Spacing - 1</label>
		<br/>
		<div class="smart-stack-layout spacing-2">
			<smart-button class="primary item">OK</smart-button>
			<smart-button class="secondary item">Cancel</smart-button>
		</div>
		<label>Stack Layout Spacing - 2</label>
		<br/>
		<div class="smart-stack-layout spacing-3">
			<smart-button class="primary item">OK</smart-button>
			<smart-button class="secondary item">Cancel</smart-button>
		</div>
		<label>Stack Layout Spacing - 3</label>
		<br/>
		<div class="smart-stack-layout spacing-4">
			<smart-button class="primary item">OK</smart-button>
			<smart-button class="secondary item">Cancel</smart-button>
		</div>
		<label>Stack Layout Spacing - 4</label>
		<br/>
		<div class="smart-stack-layout spacing-5">
			<smart-button class="primary item">OK</smart-button>
			<smart-button class="secondary item">Cancel</smart-button>
		</div>
		<label>Stack Layout Spacing - 5</label>
		<br/>
		<div class="smart-stack-layout spacing-6">
			<smart-button class="primary item">OK</smart-button>
			<smart-button class="secondary item">Cancel</smart-button>
		</div>
		<label>Stack Layout Spacing - 6</label>
		<br/>
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/smart.core.js";


export default {
	name: "app",
	setup() {
		onMounted(() => {


		})
	}
};
</script>

<style>
.smart-stack-layout {
	width: 60%;
}
</style>
