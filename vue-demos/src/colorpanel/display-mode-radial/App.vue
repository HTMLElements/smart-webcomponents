<template>
  <div class="vue-root">
    <h1>Display Mode "palette"</h1>
    <smart-color-panel id="colorPanel" edit-alpha-channel display-mode="radial"></smart-color-panel>
    <div class="options">
      <div class="option">
        Selected color:
        <input type="text" class="smart-input" placeholder="#RRGGBB" id="rgbValue" />
      </div>
      <div class="option">
        <h3>ApplyValueMode</h3>
        <smart-radio-button group-name="applyValueMode" checked>instantly</smart-radio-button>
        <br />
        <smart-radio-button group-name="applyValueMode">useButtons</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <h3>Color Editors</h3>
        <smart-check-box id="hidePreviewContainer">Hide Preview Container</smart-check-box>
        <br />
        <smart-check-box id="hideRGBEditor">Hide RGB Editor</smart-check-box>
        <br />
        <smart-check-box id="hideHEXEditor">Hide HEX Editor</smart-check-box>
        <br />
        <smart-check-box id="hideAlphaEditor">Hide Alpha Editor</smart-check-box>
        <br />
      </div>
      <div class="option">
        <smart-check-box id="inverted">inverted</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
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
        const checkBox = event.target;
        const input = event.target;
        //Set new Grid Item size
        if (radioButton) {
          colorPanel.applyValueMode = radioButton.innerHTML;
          return;
        }
        if (checkBox && checkBox.id !== "inverted") {
          colorPanel.inverted = event.detail.value;
          return;
        }
        if (checkBox && checkBox.id === "inverted") {
          colorPanel.inverted = event.detail.value;
          return;
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
