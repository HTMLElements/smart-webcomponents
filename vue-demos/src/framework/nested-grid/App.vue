<template>
	<div class="vue-root">
		<div class="smart-grid-layout">
			<div class="row">
				<div class="col">A</div>
			</div>
			<div class="row">
				<div class="col-sm-4">B</div>
				<div class="col-sm-8 clearstyle">
					<div class="smart-grid-layout">
						<div class="row">
							<div class="col-sm-4">D</div>
							<div class="col-sm-4">E</div>
							<div class="col-sm-4">F</div>
						</div>
						<div class="row">
							<div class="col-sm-4">O</div>
							<div class="col-sm-4">P</div>
							<div class="col-sm-4">Q</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">C</div>
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
.smart-grid-layout .row>div {
	background-color: #444;
	color: #fff;
}

.smart-grid-layout {
	height: 100%;
}

.smart-grid-layout .row>.clearstyle {
	background-color: #fff;
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
