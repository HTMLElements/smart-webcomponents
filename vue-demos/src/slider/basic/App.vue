<template>
  <div class="vue-root">
    <div class="container">
      <div class="underlined">Horizontal slider</div>Value:
      <span id="horizontalSliderValue">30.00</span>
      <smart-slider
        id="horizontalSlider"
        show-tooltip
        orientation="horizontal"
        min="0"
        max="100"
        value="30"
        scale-position="none"
      ></smart-slider>
      <br />
      <div class="underlined">Vertical slider</div>Value:
      <span id="verticalSliderValue">30.00</span>
      <smart-slider
        id="verticalSlider"
        show-tooltip
        tooltip-position="far"
        orientation="vertical"
        min="0"
        max="100"
        value="30"
        scale-position="none"
      ></smart-slider>
    </div>
    <div class="container">
      <div class="underlined">Inverted horizontal slider</div>Value:
      <span id="invertedHorizontalSliderValue">30.00</span>
      <smart-slider
        id="invertedHorizontalSlider"
        show-tooltip
        orientation="horizontal"
        inverted
        min="0"
        max="100"
        value="30"
        scale-position="none"
      ></smart-slider>
      <br />
      <div class="underlined">Inverted vertical slider</div>Value:
      <span id="invertedVerticalSliderValue">30.00</span>
      <smart-slider
        id="invertedVerticalSlider"
        show-tooltip
        tooltip-position="far"
        orientation="vertical"
        inverted
        min="0"
        max="100"
        value="30"
        scale-position="none"
      ></smart-slider>
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
      const sliders = [
        "horizontalSlider",
        "verticalSlider",
        "invertedHorizontalSlider",
        "invertedVerticalSlider"
      ];
      for (let i = 0; i < sliders.length; i++) {
        const slider = document.getElementById(sliders[i]);
        slider.addEventListener("change", function(event) {
          const value = event.detail.value;
          document.getElementById(this.id + "Value").innerHTML = parseFloat(
            "" + value
          ).toFixed(2);
        });
      }
    });
  }
};
</script>

<style>
</style>
