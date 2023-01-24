<template>
  <div class="vue-root">
    <smart-led id="led"></smart-led>
    <smart-tooltip id="tooltip" selector="led" arrow position="bottom">LED is OFF</smart-tooltip>
    <div class="options">
      <h3>Event log:</h3>
      <div id="log"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.led.js";
import "smart-webcomponents/source/modules/smart.tooltip.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tooltip = document.querySelector("smart-tooltip");
      const log = document.getElementById("log");
      tooltip.addEventListener("open", function() {
        log.innerHTML = "Open event fired";
      });
      tooltip.addEventListener("close", function() {
        log.innerHTML = "Close event fired";
      });
      document
        .getElementById("led")
        .addEventListener("change", function(event) {
          tooltip.innerHTML = "LED is: " + (event.detail.value ? "ON" : "OFF");
        });
    });
  }
};
</script>

<style>
smart-led {
  margin-left: 100px;
  width: 48px;
  height: 48px;
}
</style>
