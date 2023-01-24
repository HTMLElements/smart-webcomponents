<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Color Panel</h1>In this example is demonstrated the smartColorPanel Web Component.
    </div>
    <smart-color-panel></smart-color-panel>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.colorpanel.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
