<template>
	<div class="vue-root">
		<div class="smart-grid-layout">
			<div class="row">
				<div class="col">Header</div>
			</div>
			<div class="row">
				<div class="col-sm-4">Side Bar</div>
				<div class="col-sm-8">Content. Grid system with 3 rows. The Header and Footer are with 100px height. The Content and Side Bar fill the rest of the remaining space. The Side Bar and Content sre stacked on small device screen.</div>
			</div>
			<div class="row">
				<div class="col">Footer</div>
			</div>
		</div>
	</div>
</template>


<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";


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
	--smart-grid-layout-rows: 100px 1fr 100px;
	height: 100%;
}

.smart-grid-layout .row {
	padding: 0px;
}

body,
html {
	padding: 0px;
	margin: 0px;
	overflow: hidden;
	height: 100%;
}
</style>
