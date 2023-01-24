<template>
	<div class="vue-root">
		<div class="demo-description">Using a single set of .col-sm-* classes, you can create a basic grid system that starts out stacked before becoming horizontal with at the small breakpoint (sm).
		</div>
		<div class="smart-grid-layout">
			<div class="row">
				<div class="col-sm-4">1 of 3</div>
				<div class="col-sm-4">2 of 3</div>
				<div class="col-sm-4">3 of 3</div>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
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
.smart-grid-layout .row div {
	background-color: #444;
	color: #fff;
}

.smart-grid-layout {
	height: 300px;
}
</style>
