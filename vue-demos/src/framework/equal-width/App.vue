<template>
	<div class="vue-root">
		<div class="demo-description">Equal-width columns.</div>
		<div class="smart-grid-layout">
			<div class="row">
				<div class="col-6">1 of 2</div>
				<div class="col-6">2 of 2</div>
			</div>
			<div class="row">
				<div class="col-4">1 of 3</div>
				<div class="col-4">2 of 3</div>
				<div class="col-4">3 of 3</div>
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
	height: 500px;
}
</style>
