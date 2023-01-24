<template>
  <div class="vue-root">
    <smart-path
      label="Path Control"
      value="C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi"
    ></smart-path>
    <smart-path
      label="Path Wrap"
      wrap
      value="C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi"
    ></smart-path>
    <div class="options">
      <div class="option">
        <h2>
          Slider to change Path's
          <b>Width</b>
        </h2>
        <smart-slider id="hSlider" min="100" value="250" max="600"></smart-slider>
      </div>
      <div class="option">
        <h2>
          Slider to change Path's
          <b>Height</b>
        </h2>
        <smart-slider
          id="vSlider"
          orientation="vertical"
          min="30"
          value="30"
          max="100"
          scale-position="far"
        ></smart-slider>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.path.js";
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      function updatePathControls(event, dimension) {
        const pathControls = document.querySelectorAll("smart-path");
        for (let p = 0; p < pathControls.length; p++) {
          pathControls[p].style[dimension] = event.detail.value + "px";
        }
      }
      document
        .getElementById("hSlider")
        .addEventListener("change", function(event) {
          updatePathControls(event, "width");
        });
      document
        .getElementById("vSlider")
        .addEventListener("change", function(event) {
          updatePathControls(event, "height");
        });
    });
  }
};
</script>

<style>
smart-path {
  margin: 2.5%;
}

.smart-slider[orientation="vertical"] .smart-track {
  height: 100%;
}
</style>
