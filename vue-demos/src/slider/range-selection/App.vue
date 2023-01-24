<template>
  <div class="vue-root">
    <smart-slider
      id="horizontalSlider"
      show-tooltip
      min="0"
      max="100"
      coerce
      interval="10"
      scale-position="both"
      range-slider
    ></smart-slider>
    <br />
    <br />
    <br />
    <smart-slider
      id="verticalSlider"
      show-tooltip
      tooltip-position="far"
      orientation="vertical"
      inverted
      min="0"
      max="100"
      coerce
      interval="0.5"
      scale-position="both"
      range-slider
    ></smart-slider>
    <br />
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="setValues">
          Set
          <strong>values</strong> to [55, 100]
        </smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const horizontalSlider = document.getElementById("horizontalSlider"),
        verticalSlider = document.getElementById("verticalSlider");

      horizontalSlider.values = [10, 30];
      verticalSlider.values = [10, 30];

      document
        .getElementById("setValues")
        .addEventListener("click", function() {
          horizontalSlider.val([55, 100]);
          verticalSlider.val([55, 100]);
        });
    });
  }
};
</script>

<style>
.smart-slider[orientation="vertical"] .smart-track {
  height: 100%;
}
</style>
