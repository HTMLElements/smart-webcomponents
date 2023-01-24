<template>
  <div class="vue-root">
    <smart-slider
      id="slider1"
      orientation="horizontal"
      min="100"
      max="10000"
      value="1000"
      coerce
      custom-interval
      custom-ticks="[200, 1000, 8000]"
    ></smart-slider>
    <p>Slider with floating point scale:</p>
    <br />
    <smart-slider
      id="slider2"
      orientation="horizontal"
      scale-type="integer"
      word-length="int64"
      min="-9223372036854775808"
      max="9223372036854775807"
      value="1000"
      coerce
      custom-interval
      custom-ticks="[-9e18, 0, 1e18, 5e18]"
    ></smart-slider>
    <p>Slider with integer scale:</p>
    <br />
    <smart-slider
      id="slider3"
      orientation="horizontal"
      min="100"
      max="10000"
      logarithmic-scale
      value="1000"
      coerce
      custom-interval
      custom-ticks="[100, 200, 1000, 8000, 10000]"
    ></smart-slider>
    <p>Slider with logarithmic scale:</p>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-check-box id="toggleCustomInterval" enable-container-click checked>Custom interval</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="toggleCoerce" enable-container-click checked>Coerce</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const slider1 = document.getElementById("slider1"),
        slider2 = document.getElementById("slider2"),
        slider3 = document.getElementById("slider3");
      document
        .getElementById("toggleCustomInterval")
        .addEventListener("change", function(event) {
          const checked = event.detail.value;
          slider1.customInterval = checked;
          slider2.customInterval = checked;
          slider3.customInterval = checked;
        });
      document
        .getElementById("toggleCoerce")
        .addEventListener("change", function(event) {
          const checked = event.detail.value;
          slider1.coerce = checked;
          slider2.coerce = checked;
          slider3.coerce = checked;
        });
    });
  }
};
</script>

<style>
smart-slider {
  margin-top: 50px;
  width: 300px;
}
</style>
