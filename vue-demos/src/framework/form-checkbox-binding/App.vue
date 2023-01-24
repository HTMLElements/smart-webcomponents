<template>
	<div class="vue-root">
		<div class="demo-description">Our CheckBox Custom Element bound through smart-MODEL</div>
		<br/>
		<smart-check-box v-model="isChecked" v-on:change="isChecked = $event.detail.value">CheckBox</smart-check-box>
		<br/>
		<br/>CheckBox's Value is: <span>{{isChecked}}</span>
	</div>
</template>

<script>
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/smart.core.js";


export default {
name: "app",
   data: function () {
    return {
      isChecked: true
    }
  },
  methods: {

  }
};
</script>

<style>

</style>
