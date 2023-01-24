<template>
	<div class="vue-root">
		<div class="demo-description">Use our powerful mobile-first 12-column Grid layout system, five default responsive tiers, row and column gaps, optional ordering.</div>
		<div class="smart-grid-layout">
			<div class="row">
				<div class="col-2">Logo</div>
				<div class="col-10">Header</div>
			</div>
			<div class="row">
				<div span="2" class="col-sm-2">Side</div>
				<div class="col-sm-10">Top Content</div>
				<div class="col-sm-10">Bottom Content</div>
			</div>
			<div class="row">
				<div class="col">Footer</div>
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
	--smart-grid-layout-rows: 100px 1fr 100px;
	height: 500px;
}
</style>
