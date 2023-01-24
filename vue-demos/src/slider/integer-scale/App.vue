<template>
  <div class="vue-root">
    <h2>64-bit(Large) Integer Scale</h2>
    <br />
    <h3>Horizontal</h3>
    <smart-slider
      id="horizontalSlider"
      show-tooltip
      scale-type="integer"
      min="-1000000000000000000000"
      max="100000000000000000000"
      value="0"
      scale-position="both"
    ></smart-slider>
    <br />
    <h3>Vertical</h3>
    <smart-slider
      id="verticalSlider"
      show-tooltip
      tooltip-position="far"
      orientation="vertical"
      scale-type="integer"
      min="-1000000000000000000000"
      max="100000000000000000000"
      value="0"
      scale-position="far"
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
#horizontalSlider {
  width: 570px;
  height: 100px;
}

#verticalSlider {
  width: 150px;
  height: 570px;
}
</style>
