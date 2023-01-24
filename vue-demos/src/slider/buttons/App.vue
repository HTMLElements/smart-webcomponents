<template>
  <div class="vue-root">
    <smart-slider
      show-tooltip
      id="horizontalSlider"
      min="0"
      max="100"
      value="50"
      scale-position="both"
      show-buttons
    ></smart-slider>
    <br />
    <smart-slider
      show-tooltip
      id="verticalSlider"
      orientation="vertical"
      tooltip-position="far"
      min="0"
      max="100"
      coerce
      interval="0.5"
      scale-position="both"
      range-slider
      show-buttons
    ></smart-slider>
    <br />
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-toggle-button id="toggleButtons" checked>Toggle slider buttons</smart-toggle-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const horizontalSlider = document.getElementById("horizontalSlider"),
        verticalSlider = document.getElementById("verticalSlider");
      verticalSlider.values = [10, 30];

      document
        .getElementById("toggleButtons")
        .addEventListener("change", function(event) {
          horizontalSlider.showButtons = event.detail.value;
          verticalSlider.showButtons = event.detail.value;
        });
    });
  }
};
</script>

<style>
smart-toggle-button .smart-button {
  padding: 3px;
}

#horizontalSlider {
  width: 570px;
  height: 100px;
  margin-left: 100px;
}

#verticalSlider {
  width: 120px;
  height: 500px;
}

.smart-slider[orientation="vertical"] .smart-track {
  height: 100%;
}
</style>
