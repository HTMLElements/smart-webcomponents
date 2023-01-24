<template>
	<div class="vue-root">
		<div class="demo-description"></div>
		<div class="smart-grid-layout">
			<div class="row">
				<div class="col-sm-2">Orientation</div>
				<div class="col-sm-5">Horizontal</div>
				<div class="col-sm-5">Vertical - when "vertical" class name is used.</div>
			</div>
			<div class="row">
				<div class="col-sm-2">Stretch</div>
				<div class="col-sm-5">"stretch" - stretches items horizontally.</div>
				<div class="col-sm-5">"vertical-stretch" - stretches items vertically.</div>
			</div>
			<div class="row">
				<div class="col-sm-2">Class prefixes when Stretched</div>
				<div class="col-sm-5">"item.strech-" - from 1 to 6. Defines the strech size of the item.</div>
				<div class="col-sm-5">"spacing-" - from 1 to 6. Defines the spacing between the items.</div>
			</div>
			<div class="row">
				<div class="col-sm-2">Alignment Class</div>
				<div class="col-sm-1">"left" - aligns items to the left.</div>
				<div class="col-sm-1">"center" - aligns items in the center.</div>
				<div class="col-sm-2">"right" - aligns items to the right.</div>
				<div class="col-sm-2">"top" - aligns items to the top.</div>
				<div class="col-sm-2">"middle" - aligns items in the middle.</div>
				<div class="col-sm-2">"bottom" - aligns items to the bottom.</div>
			</div>
		</div>
		<br/>
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
	border-right: 1px solid #444;
	border-bottom: 1px solid #444;
	display: flex;
	justify-content: center;
	align-items: center;
}

.smart-grid-layout .row div:first-child {
	border-left: 1px solid #444;
	border-bottom: 1px solid #fff;
	background: #444;
	color: #fff;
}

.smart-grid-layout .row:first-child div {
	border-top: 1px solid #444;
}

.smart-grid-layout {
	height: 700px;
	--smart-grid-layout-row-gap: 0px;
}

@media (max-width: 576px) {
	.smart-grid-layout .row {
		border: none;
	}
	.smart-grid-layout .row div {
		border: none !important;
		border-top: 1px solid #444 !important;
	}
}
</style>
