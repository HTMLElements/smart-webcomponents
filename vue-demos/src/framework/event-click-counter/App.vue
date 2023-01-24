<template>
	<div class="vue-root">
		'<smart-button v-on:click="count++">You clicked me {{ count }} times.</smart-button>'
	</div>
</template>

<script>
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.textbox.js";
import "smart-webcomponents/source/smart.core.js";

export default {
name: "app",
   data: function () {
    return {
      count: 0
    }
  },
  methods: {

  }
};
</script>

<style>

</style>
