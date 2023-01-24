<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >This example demonstrates the "grid" display mode of the Color Picker.</div>
    <smart-color-picker display-mode="grid"></smart-color-picker>
    <div class="options">
      <div class="option">
        <h3>ApplyValueMode</h3>
        <smart-radio-button group-name="applyValueMode" checked>instantly</smart-radio-button>
        <smart-radio-button group-name="applyValueMode">useButtons</smart-radio-button>
      </div>
      <div class="option">
        <h3>Select Grid Column Count</h3>
        <smart-radio-button group-name="columnSettings">4</smart-radio-button>
        <smart-radio-button group-name="columnSettings">8</smart-radio-button>
        <smart-radio-button group-name="columnSettings" checked>14</smart-radio-button>
      </div>
      <div class="option">
        <h3>Palette</h3>
        <smart-radio-button group-name="palette" checked>default</smart-radio-button>
        <smart-radio-button group-name="palette">gray</smart-radio-button>
        <smart-radio-button group-name="palette">red</smart-radio-button>
        <smart-radio-button group-name="palette">green</smart-radio-button>
        <smart-radio-button group-name="palette">blue</smart-radio-button>
        <smart-radio-button group-name="palette">custom</smart-radio-button>
      </div>
      <div class="option">
        <h3>Enable/Disable Custom Colors</h3>
        <smart-check-box id="enableCustomColors">Enable Custom Colors</smart-check-box>
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
      //Palette Colors for pallette = 'custom'
      colorPicker.paletteColors = [
        "#e6194b",
        "#3cb44b",
        "#ffe119",
        "#4363d8",
        "#f58231",
        "#911eb4",
        "#46f0f0",
        "#f032e6",
        "#bcf60c",
        "#fabebe",
        "#008080",
        "#e6beff",
        "#9a6324",
        "#fffac8",
        "#800000",
        "#aaffc3",
        "#808000",
        "#ffd8b1",
        "#000075",
        "#808080",
        "#ffffff",
        "#000000"
      ];
      //Pre-set Palette Custom Colors ( User selected colors )
      colorPicker.paletteCustomColors = ["#808080", "#ffd8b1", "#aaffc3"];
      document.addEventListener("change", function(event) {
        //const target = event.target;
        const radioButton = event.target;
        const checkBox = event.target;
        //Set new Grid Item size
        if (radioButton.groupName === "columnSettings") {
          let size,
            className = "column-count";
          switch (radioButton.innerHTML) {
            case "4":
              size = "small";
              break;
            case "8":
              size = "medium";
              break;
            case "14":
              size = "large";
              break;
          }
          //Remove the oldClass
          const classes = colorPicker.classList;
          for (let i = 0; i < classes.length; i++) {
            if (classes[i].indexOf(className) > -1) {
              colorPicker.classList.remove(colorPicker.classList.item(i));
            }
          }
          colorPicker.classList.add(className + "-" + size);
          return;
        }
        if (radioButton && radioButton.groupName === "palette") {
          colorPicker.palette = radioButton.innerHTML;
          return;
        }
        //Set new Grid Item size
        if (radioButton && radioButton.groupName === "applyValueMode") {
          colorPicker.applyValueMode = radioButton.innerHTML;
          return;
        }
        if (checkBox && checkBox.id === "enableCustomColors") {
          colorPicker.enableCustomColors = checkBox.checked;
          return;
        }
      });
    });
  }
};
</script>

<style>
/* Colun Count */

smart-color-picker.column-count-small {
  --smart-color-panel-grid-mode-column-count: 4;
}

smart-color-picker.column-count-medium {
  --smart-color-panel-grid-mode-column-count: 8;
}

smart-color-picker.column-count-large {
  --smart-color-panel-grid-mode-column-count: 14;
}

/*smart-color-picker {
    display: inline-block;
    
}*/
</style>
