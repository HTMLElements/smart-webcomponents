<template>
  <div class="vue-root">
    <smart-color-panel></smart-color-panel>
    <div class="options">
      <div class="option">
        <div id="eventLog">
          <div id="log"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.colorpanel.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const log = document.getElementById("log");
      const colorPanel = document.querySelector("smart-color-panel");
      if (colorPanel) {
        colorPanel.addEventListener("change", function(event) {
          log.innerHTML +=
            "<b>type:</b> " +
            event.type +
            ", <b>value:</b> " +
            event.detail.value +
            "<br />";
        });
      }
    });
  }
};
</script>

<style>
</style>
