<template>
	<div class="vue-root">
		<div class="demo-description">No gaps. The gaps between columns and rows in our predefined grid classes can be removed by using .no-gaps. Otherwise, you can use --smart-grid-layout-col-gap and --smart-grid-layout-row-gap CSS3 variables</div>
		<div class="smart-grid-layout no-gaps">
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
	border-right: 1px solid #777;
}

.smart-grid-layout {
	height: 300px;
}
</style>
