<template>
  <div class="vue-root">
    <h2>Logarithmic Scale</h2>
    <br />
    <h3>Horizontal</h3>
    <smart-slider
      id="horizontalSlider"
      show-tooltip
      logarithmic-scale
      coerce
      interval="1"
      min="0"
      max="10000000"
      value="1000"
      scale-position="both"
    ></smart-slider>
    <br />
    <h3>Vertical</h3>
    <smart-slider
      id="verticalSlider"
      show-tooltip
      tooltip-position="far"
      orientation="vertical"
      logarithmic-scale
      coerce
      interval="1"
      min="0"
      max="10000000"
      value="1000"
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
  width: 130px;
  height: 570px;
}
</style>
