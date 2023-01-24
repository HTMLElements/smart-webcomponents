<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >This example demonstrates the "palette" display mode of the Color Picker.</div>
    <smart-color-picker edit-alpha-channel display-mode="palette"></smart-color-picker>
    <div class="options">
      <div class="option">
        <div>Apply Value Mode</div>
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
        //Set new Grid Item size
        if (radioButton && radioButton.groupName === "applyValueMode") {
          colorPanel.applyValueMode = target.innerHTML;
          return;
        }
        if (target.id.indexOf("hide") === 0) {
          colorPanel[target.id] = event.detail.value;
          return;
        }
      });
    });
  }
};
</script>

<style>
smart-slider {
  width: 100%;
}

smart-check-box {
  display: block;
}

#controlsBox {
  position: absolute;
  padding: 16px;
  box-sizing: border-box;
  right: 20px;
  top: 2%;
  width: 550px;
  height: 95%;
  border: dashed lightgray 1px;
  color: gray;
  font-size: 20px;
  overflow-y: auto;
}

.smart-drop-down-color-picker {
  --smart-drop-down-element-max-height: initial;
  --smart-drop-down-element-max-width: initial;
}
</style>
