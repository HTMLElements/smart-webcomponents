<template>
  <div class="vue-root">
    <smart-slider
      id="slider"
      show-tooltip
      orientation="horizontal"
      min="0"
      max="100"
      value="30"
      scale-position="near"
    ></smart-slider>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <div>
          <strong>Coorinates:</strong> (
          <span id="x"></span>,
          <span id="y"></span>)
        </div>
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
      const slider = document.getElementById("slider"),
        x = document.getElementById("x"),
        y = document.getElementById("y");
      slider.addEventListener("click", function(event) {
        x.innerHTML = "" + event.pageX;
        y.innerHTML = "" + event.pageY;
      });
    });
  }
};
</script>

<style>
#slider {
  width: 300px;
  height: 80px;
}
</style>
