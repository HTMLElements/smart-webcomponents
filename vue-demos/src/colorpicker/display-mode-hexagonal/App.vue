<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >This example demonstrates the "hexagonal" display mode of the Color Picker.</div>
    <smart-color-picker display-mode="hexagonal"></smart-color-picker>
    <div class="options">
      <div class="option">
        <div>Column Count</div>
        <smart-radio-button group-name="columnSettings">4</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnSettings" checked>8</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnSettings">14</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <div>ApplyValueMode</div>
        <smart-radio-button group-name="applyValueMode" checked>instantly</smart-radio-button>
        <br />
        <smart-radio-button group-name="applyValueMode">useButtons</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <div>Palette Color</div>
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
      <div class="option">
        <div>Inverted Colors</div>
        <smart-check-box id="inverted">Inverted</smart-check-box>
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
      const colorPicker = document.querySelector("smart-color-picker");
      document.addEventListener("change", function(event) {
        //const target = event.target;
        const radioButton = event.target;
        const checkBox = event.target;
        //Set new Grid Item size
        if (radioButton.groupName === "columnSettings") {
          colorPicker.columnCount = parseInt(radioButton.innerHTML);
          return;
        }
        if (checkBox && checkBox.id === "inverted") {
          colorPicker.inverted = checkBox.checked;
          return;
        }
        //Set ApplyValueMode and Palette
        if (radioButton.groupName === "applyValueMode") {
          colorPicker.applyValueMode = radioButton.innerHTML;
        }
        if (radioButton.groupName === "palette") {
          colorPicker.palette = radioButton.innerHTML;
          return;
        }
      });
    });
  }
};
</script>

<style>
</style>
