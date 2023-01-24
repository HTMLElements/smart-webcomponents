<template>
	<div class="vue-root">
		<div class="demo-description">Positioning items which span more than one grid track.</div>
		<div class="smart-grid-layout">
			<div class="row">
				<div class="col-sm-8">A</div>
				<div span="2" class="col-sm-4">B</div>
				<div class="col-sm-4">C</div>
				<div class="col-sm-4">C</div>
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
	height: 500px;
}
</style>
