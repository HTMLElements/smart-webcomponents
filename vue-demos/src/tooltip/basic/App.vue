<template>
  <div class="vue-root">
    <smart-button id="button">Button</smart-button>
    <smart-tooltip id="tooltip" selector="button" arrow>This is a tooltip for smartButton</smart-tooltip>
    <div class="options">
      <h3>Tooltip Position:</h3>
      <smart-radio-button enable-container-click checked>Top</smart-radio-button>
      <br />
      <smart-radio-button enable-container-click>Bottom</smart-radio-button>
      <br />
      <smart-radio-button enable-container-click>Left</smart-radio-button>
      <br />
      <smart-radio-button enable-container-click>Right</smart-radio-button>
      <br />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.tooltip.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tooltip = document.querySelector("smart-tooltip");
      document
        .getElementsByTagName("smart-radio-button")[0]
        .addEventListener("change", function() {
          tooltip.position = "top";
        });
      document
        .getElementsByTagName("smart-radio-button")[1]
        .addEventListener("change", function() {
          tooltip.position = "bottom";
        });
      document
        .getElementsByTagName("smart-radio-button")[2]
        .addEventListener("change", function() {
          tooltip.position = "left";
        });
      document
        .getElementsByTagName("smart-radio-button")[3]
        .addEventListener("change", function() {
          tooltip.position = "right";
        });
    });
  }
};
</script>

<style>
smart-button {
  position: absolute;
  top: 25%;
  left: 25%;
}
</style>
