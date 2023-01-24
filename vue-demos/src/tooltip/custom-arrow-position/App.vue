<template>
  <div class="vue-root">
    <smart-button id="button">Button</smart-button>
    <smart-tooltip id="tooltip" selector="button" arrow>This is a tooltip for smartButton</smart-tooltip>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.tooltip.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-button {
  position: absolute;
  top: 100px;
  left: 100px;
  width: 100px;
  height: 50px;
}

smart-tooltip .smart-tooltip-content::after {
  margin-left: 30px;
}
</style>
