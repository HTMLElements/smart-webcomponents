<template>
	<div class="vue-root">
		<div class="demo-description">Our grid system uses a series of containers, rows, and columns to layout content. It is built with Grid Layout and is fully responsive. The columns are defined with "col-sm-4" class for small devices and when the size reaches the breakpoint, the columns
			are stacked.</div>
		<div class="smart-grid-layout">
			<div class="row">
				<div class="col-sm-4">One of three columns</div>
				<div class="col-sm-4">One of three columns</div>
				<div class="col-sm-4">One of three columns</div>
			</div>
		</div>
	</div>
</template>

<script>
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/smart.core.js";


export default {
	name: "app"
};
</script>

<style>
.smart-grid-layout .row div {
	background-color: #444;
	color: #fff;
}

.smart-grid-layout {
	height: 500px;
}
</style>
