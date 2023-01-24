<template>
  <div class="vue-root">
    <smart-slider
      show-tooltip
      orientation="horizontal"
      min="0"
      max="100"
      value="30"
      scale-position="near"
      show-unit
      right-to-left
      unit="קג"
    ></smart-slider>
    <smart-slider
      show-tooltip
      orientation="vertical"
      min="0"
      max="100"
      value="30"
      scale-position="far"
      tooltip-position="far"
      show-unit
      right-to-left
      unit="קג"
    ></smart-slider>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-slider {
  margin: 30px;
}
</style>
