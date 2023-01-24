<template>
  <div class="vue-root">
    <div class="demo-description">
      The demo shows switching between different value display modes of the
      Color Picker
    </div>
    <smart-color-picker enable-custom-colors></smart-color-picker>
    <div class="options">
      <div class="option">
        Selected color:
        <input type="text" class="smart-input" placeholder="#RRGGBB" id="rgbValue" />
      </div>
      <div class="option">
        <div>Toggle Value Display Mode</div>
        <smart-radio-button group-name="valueDisplayMode" checked>default</smart-radio-button>
        <br />
        <smart-radio-button group-name="valueDisplayMode">colorBox</smart-radio-button>
        <br />
        <smart-radio-button group-name="valueDisplayMode">colorCode</smart-radio-button>
        <br />
        <smart-radio-button group-name="valueDisplayMode">none</smart-radio-button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.colorpicker.js";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const colorPicker = document.querySelector("smart-color-picker");
      document.addEventListener("change", function(event) {
        const radioButton = event.target;
        //const checkBox = event.target;
        const input = event.target;
        //Set ApplyValueMode and Palette
        if (radioButton && radioButton.groupName === "valueDisplayMode") {
          colorPicker.valueDisplayMode = radioButton.innerHTML;
          return;
        }
        //Set a new value
        if (input && input.id === "rgbValue") {
          colorPicker.value = input.value;
        }
      });
      colorPicker.addEventListener("change", function(event) {
        document.getElementById("rgbValue").value = event.detail.value;
      });
      document.getElementById("rgbValue").value = colorPicker.value;
    });
  }
};
</script>

<style>
smart-color-picker {
  display: inline-block;
}
</style>
