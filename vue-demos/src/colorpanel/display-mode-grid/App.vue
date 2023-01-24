<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Color Panel Display Mode</h1>In this example, the display-mode is set to "grid"
    </div>
    <smart-color-panel id="colorPanel" display-mode="grid"></smart-color-panel>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <div>Select Grid Column Count</div>
        <smart-radio-button group-name="columnSettings">4</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnSettings" checked>8</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnSettings">14</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <div>Palette</div>
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
        <smart-radio-button group-name="palette">custom</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <div>Enable/Disable Custom Colors</div>
        <smart-check-box id="enableCustomColors">Enable Custom Colors</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.colorpanel.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const colorPanel = document.getElementById("colorPanel");
      //Palette Colors for pallette = 'custom'
      colorPanel.paletteColors = [
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
      colorPanel.paletteCustomColors = ["#808080", "#ffd8b1", "#aaffc3"];
      document.addEventListener("change", function(event) {
        const radioButton = event.target;
        const checkBox = event.target;
        //const input = event.target;
        //Set new Grid Item size
        if (radioButton && radioButton.groupName === "columnSettings") {
          colorPanel.columnCount = parseInt(radioButton.innerHTML);
          return;
        }
        if (radioButton && radioButton.groupName === "palette") {
          colorPanel.palette = radioButton.innerHTML;
          return;
        }
        if (checkBox && checkBox.id === "enableCustomColors") {
          colorPanel.enableCustomColors = checkBox.checked;
          return;
        }
      });
    });
  }
};
</script>

<style>
body,
html {
  height: 800px;
}

smart-color-panel.column-count-small {
  --smart-color-panel-grid-mode-column-count: 4;
}

smart-color-panel.column-count-medium {
  --smart-color-panel-grid-mode-column-count: 8;
}

smart-color-panel.column-count-large {
  --smart-color-panel-grid-mode-column-count: 14;
}
</style>
