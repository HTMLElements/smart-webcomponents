<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >This example demonstrates the "radial" display mode of the Color Picker.</div>
    <smart-color-picker edit-alpha-channel display-mode="radial"></smart-color-picker>
    <div class="options">
      <div class="option">
        <div>ApplyValueMode</div>
        <smart-radio-button group-name="applyValueMode" checked>instantly</smart-radio-button>
        <br />
        <smart-radio-button group-name="applyValueMode">useButtons</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <div>Color Editors</div>
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
import "smart-webcomponents/source/modules/smart.colorpicker.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const colorPanel = document.querySelector("smart-color-picker");
      document.addEventListener("change", function(event) {
        const target = event.target;
        const radioButton = event.target;
        const checkBox = event.target;
        //const input = event.target;
        //Set new Grid Item size
        if (radioButton.groupName === "applyValueMode") {
          colorPanel.applyValueMode = radioButton.innerHTML;
          return;
        }
        if (checkBox && checkBox.id.indexOf("hide") === 0) {
          colorPanel[target.id] = checkBox.checked;
          return;
        }
        if (checkBox && checkBox.id === "inverted") {
          colorPanel.inverted = event.detail.value;
          return;
        }
      });
    });
  }
};
</script>

<style>
smart-color-picker {
  --smart-color-picker-palette-size: 200px;
  display: inline-block;
}
</style>
