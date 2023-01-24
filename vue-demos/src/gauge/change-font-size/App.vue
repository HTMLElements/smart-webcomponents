<template>
  <div class="vue-root">
    <smart-gauge
      id="gauge"
      analog-display-type="fill"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      value="0"
    ></smart-gauge>
    <div class="options">
      <div class="caption">Appearance</div>
      <div class="option">
        <smart-button id="fontSizeButton">Set font-size to 20px</smart-button>
      </div>
      <div class="option">
        <smart-button id="colorButton">Set label fill and stroke to red</smart-button>
      </div>
      <div class="option">
        <smart-button id="resizeButton">Resize Gauge</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.gauge.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const gauge = document.getElementById("gauge");
      document
        .getElementById("fontSizeButton")
        .addEventListener("click", function() {
          gauge.style.fontSize = "20px";
        });
      document
        .getElementById("colorButton")
        .addEventListener("click", function() {
          const svg = gauge.getElementsByTagName("svg")[0];
          if (svg) {
            svg.style.stroke = "red";
            svg.style.fill = "red";
          }
        });
      document
        .getElementById("resizeButton")
        .addEventListener("click", function() {
          gauge.style.width = "500px";
        });
    });
  }
};
</script>

<style>
smart-gauge {
  width: 250px;
}
</style>
