<template>
  <div class="vue-root">
    <h1>Dispaly Mode "hexagonal"</h1>
    <smart-color-panel id="colorPanel" display-mode="hexagonal"></smart-color-panel>
    <div class="options">
      <div class="option">
        Selected color:
        <input placeholder="#RRGGBB" class="smart-input" id="rgbValue" />
      </div>
      <div class="option">
        <smart-check-box id="inverted">Inverted</smart-check-box>
      </div>
      <div class="option">
        <h3>Palette</h3>
        <smart-radio-button group-name="palette" checked>default</smart-radio-button>
        <br />
        <smart-radio-button group-name="palette">gray</smart-radio-button>
        <br />
        <smart-radio-button group-name="palette">red</smart-radio-button>
        <br />
        <smart-radio-button group-name="palette">green</smart-radio-button>
        <br />
        <smart-radio-button group-name="palette">blue</smart-radio-button>
        <br />
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
        if (input) {
          colorPanel.value = input.value;
          return;
        }
        if (checkBox && checkBox.id === "inverted") {
          colorPanel.inverted = checkBox.checked;
          return;
        }
        if (checkBox && checkBox.id === "enableCustomColors") {
          colorPanel.enableCustomColors = checkBox.checked;
          return;
        }
        //Set ApplyValueMode and Palette
        if (radioButton && radioButton.groupName === "palette") {
          colorPanel.palette = radioButton.innerHTML;
          return;
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
