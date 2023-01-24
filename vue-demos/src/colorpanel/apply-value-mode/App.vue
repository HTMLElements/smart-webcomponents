<template>
  <div class="vue-root">
    <smart-color-panel id="colorPanel" display-mode="default" enable-custom-colors></smart-color-panel>
    <div class="options">
      <h1>Apply Value Mode</h1>
      <div class="option">
        Selected color:
        <br />
        <input type="text" class="smart-input" placeholder="#RRGGBB" id="rgbValue" />
      </div>
      <div class="option">
        <smart-radio-button
          id="applyValueModeInstantly"
          group-name="applyValueMode"
          checked
        >instantly</smart-radio-button>
        <smart-radio-button id="applyValueModeUseButtons" group-name="applyValueMode">useButtons</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.colorpanel.js";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const colorPanel = document.getElementById("colorPanel");
      document.addEventListener("change", function(event) {
        const radioButton = event.target;
        //const checkBox = event.target;
        const input = event.target;
        if (radioButton && radioButton.groupName === "applyValueMode") {
          colorPanel.applyValueMode = radioButton.innerHTML;
        }
        //Set a new value
        if (input && input.id === "rgbValue") {
          colorPanel.value = input.value;
        }
      });
      colorPanel.addEventListener("change", function(event) {
        document.getElementById("rgbValue").value = event.detail.value;
      });
      document.getElementById("rgbValue").value = colorPanel.value;
    });
  }
};
</script>

<style>
</style>
