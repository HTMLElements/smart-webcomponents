<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>smartColorPicker allows picking a color from a drop-down</h1>
    </div>
    <smart-color-picker enable-custom-colors></smart-color-picker>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.colorpicker.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
