<template>
  <div class="vue-root">
    <smart-slider
      show-tooltip
      id="horizontalSlider"
      min="0"
      max="100"
      value="77"
      scale-position="both"
      coerce
      interval="5"
    ></smart-slider>
    <br />
    <div class="options">
      <div class="caption">Set coercion interval</div>
      <div class="option">
        <smart-numeric-text-box id="interval" spin-buttons input-format="integer" value="5"></smart-numeric-text-box>
      </div>
      <div class="option">
        <smart-toggle-button id="toggleCoercion" checked>Toggle coercion</smart-toggle-button>
      </div>
      <div class="option">
        <smart-button id="setValue">Set value to 99</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.numerictextbox.js";
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const horizontalSlider = document.getElementById("horizontalSlider");
      document
        .getElementById("interval")
        .addEventListener("change", function(event) {
          const numeric = event.target;
          horizontalSlider.interval = numeric.value;
        });
      document
        .getElementById("toggleCoercion")
        .addEventListener("change", function(event) {
          horizontalSlider.coerce = event.detail.value;
        });
      document.getElementById("setValue").addEventListener("click", function() {
        horizontalSlider.val(99);
      });
    });
  }
};
</script>

<style>
smart-numeric-text-box {
  width: 90%;
}
</style>
