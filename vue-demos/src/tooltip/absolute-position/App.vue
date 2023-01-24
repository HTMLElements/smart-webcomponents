<template>
  <div class="vue-root">
    <smart-button id="button">Button</smart-button>
    <smart-tooltip
      id="tooltip1"
      selector="button"
      position="absolute"
    >This is a tooltip with absolute position [2,5]</smart-tooltip>
    <smart-tooltip
      id="tooltip2"
      selector="button"
      position="absolute"
    >This is a tooltip with absolute position [2,40]</smart-tooltip>
    <smart-tooltip
      id="tooltip3"
      selector="button"
      position="absolute"
    >This is a tooltip with absolute position [2,75]</smart-tooltip>
    <smart-tooltip
      id="tooltip4"
      selector="button"
      position="absolute"
    >This is a tooltip with absolute position [2,110]</smart-tooltip>
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
    onMounted(() => {
      const tooltips = document.querySelectorAll("smart-tooltip");
      tooltips[0].offset = [2, 5];
      tooltips[1].offset = [2, 40];
      tooltips[2].offset = [2, 75];
      tooltips[3].offset = [2, 110];
    });
  }
};
</script>

<style>
smart-button {
  margin-left: 100px;
  margin-top: 150px;
}

#tooltip1 {
  transition-duration: 0.5s;
  transition-delay: 0.2s;
}

#tooltip2 {
  transition-duration: 0.5s;
  transition-delay: 0.6s;
}

#tooltip3 {
  transition-duration: 0.5s;
  transition-delay: 1s;
}

#tooltip4 {
  transition-duration: 0.5s;
  transition-delay: 1.4s;
}
</style>
