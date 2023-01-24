<template>
  <div class="vue-root">
    <smart-tank
      id="tank"
      tooltip-position="far"
      show-tooltip
      orientation="vertical"
      min="0"
      max="10"
      value="5"
      scale-position="both"
    ></smart-tank>
    <br />
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-check-box checked id="checkboxEnableTooltip">Enable tooltip</smart-check-box>
        <br />
        <smart-check-box checked id="checkboxFarTooltip">Set tooltipPosition 'far'</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tank = document.getElementById("tank"),
        checkboxEnableTooltip = document.getElementById(
          "checkboxEnableTooltip"
        ),
        checkboxFarTooltip = document.getElementById("checkboxFarTooltip");
      checkboxEnableTooltip.addEventListener("change", function() {
        tank.showTooltip = checkboxEnableTooltip.checked;
      });
      checkboxFarTooltip.addEventListener("change", function() {
        if (checkboxFarTooltip.checked) {
          tank.tooltipPosition = "far";
        } else {
          tank.tooltipPosition = "near";
        }
      });
    });
  }
};
</script>

<style>
smart-tank {
  width: 200px;
  height: 350px;
}

@media only screen and (max-width: 700px) {
  smart-tank {
    width: 100%;
  }
}
</style>
