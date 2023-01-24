<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Tooltip Display Mode</h1>In this example are demonstrated different options for Color Panel tooltips.
    </div>
    <smart-color-panel id="colorPanel"></smart-color-panel>
    <div class="options">
      <div class="caption">Tooltip Display Mode</div>
      <div class="option">
        <smart-radio-button group-name="tooltipDisplayMode">none</smart-radio-button>
        <br />
        <smart-radio-button group-name="tooltipDisplayMode">rgba</smart-radio-button>
        <br />
        <smart-radio-button group-name="tooltipDisplayMode">rgb</smart-radio-button>
        <br />
        <smart-radio-button group-name="tooltipDisplayMode" checked>hex</smart-radio-button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.colorpanel.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const colorPanel = document.getElementById("colorPanel");
      document.addEventListener("change", function(event) {
        if (event.target.groupName === "tooltipDisplayMode") {
          colorPanel.tooltipDisplayMode = event.target.innerHTML;
        }
      });
    });
  }
};
</script>

<style>
</style>
