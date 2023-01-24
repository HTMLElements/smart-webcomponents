<template>
  <div class="vue-root">
    <p>Move the slider thumbs to see the tooltips.</p>
    <smart-slider
      id="horizontalSlider"
      show-tooltip
      tooltip-position="near"
      orientation="horizontal"
      min="0"
      max="100"
      value="95"
      scale-position="none"
    ></smart-slider>
    <br />
    <smart-slider
      id="verticalSlider"
      show-tooltip
      tooltip-position="near"
      orientation="vertical"
      min="0"
      max="100"
      value="33"
      scale-position="none"
    ></smart-slider>
    <br />
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="toggleTooltipPositionButton">Flip Tooltip</smart-button>
        <br />
        <br />
        <smart-button id="disableTooltipsButton">Disable Tooltip</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.slider.js";

let sliders = [];
export default {
  name: "app",
  setup() {
    onMounted(() => {
      sliders.push(document.getElementById("horizontalSlider"));
      sliders.push(document.getElementById("verticalSlider"));

      document
        .getElementById("toggleTooltipPositionButton")
        .addEventListener("click", toggleTooltipPosition);
      document
        .getElementById("disableTooltipsButton")
        .addEventListener("click", disableTooltips);
    });

    // eslint-disable-next-line
    function toggleTooltipPosition() {
      for (let i = 0; i < sliders.length; i++) {
        const slider = sliders[i];
        if (slider.tooltipPosition === "near") {
          slider.tooltipPosition = "far";
        } else {
          slider.tooltipPosition = "near";
        }
      }
    }

    // eslint-disable-next-line
    function disableTooltips() {
      sliders[0].showTooltip = false;
      sliders[1].showTooltip = false;
      document.getElementById("toggleTooltipPositionButton").disabled = true;
      document.getElementById("disableTooltipsButton").disabled = true;
    }
  }
};
</script>

<style>
</style>
