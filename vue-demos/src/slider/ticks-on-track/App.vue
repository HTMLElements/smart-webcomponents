<template>
  <div class="vue-root">
    <smart-slider
      id="slider"
      show-tooltip
      orientation="horizontal"
      min="0"
      max="100"
      value="71"
      scale-position="both"
      ticks-position="track"
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
:root {
  --smart-slider-track-size: 15px;
  --smart-slider-thumb-width: 10px;
  --smart-slider-thumb-height: 20px;
}
smart-slider {
  height: 100px;
}
</style>
