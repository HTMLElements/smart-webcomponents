<template>
  <div class="vue-root">
    <div class="demo-description">This example allows you to customize the Color Picker with its API</div>
    <smart-color-picker></smart-color-picker>
    <div class="options">
      <div class="option">
        <h3>Toggle Grid Color Size</h3>
        <smart-radio-button group-name="gridSettings">10</smart-radio-button>
        <br />
        <smart-radio-button group-name="gridSettings" checked>20</smart-radio-button>
        <br />
        <smart-radio-button group-name="gridSettings">30</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <h3>Toggle Grid Column Gap</h3>
        <smart-radio-button group-name="gapSettings" checked>1</smart-radio-button>
        <br />
        <smart-radio-button group-name="gapSettings">2.5</smart-radio-button>
        <br />
        <smart-radio-button group-name="gapSettings">5</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <h3>Enable/Disable Custom Colors</h3>
        <smart-check-box id="enableCustomColors">Enable Custom Colors</smart-check-box>
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
      const colorPicker = document.querySelector("smart-color-picker");
      document.addEventListener("change", function(event) {
        //const target = event.target;
        const radioButton = event.target;
        const checkBox = event.target;
        //Set new Grid Item size
        if (
          radioButton.groupName === "gridSettings" ||
          radioButton.groupName === "gapSettings"
        ) {
          let size,
            className =
              radioButton.groupName === "gridSettings"
                ? "item-size"
                : "column-gap";
          switch (radioButton.innerHTML) {
            case "10":
            case "1":
              size = "small";
              break;
            case "20":
            case "2.5":
              size = "medium";
              break;
            case "30":
            case "5":
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
/* Color Item Size */

smart-color-picker.item-size-small {
  --smart-color-panel-grid-mode-item-size: 10px;
}

smart-color-picker.item-size-medium {
  --smart-color-panel-grid-mode-item-size: 20px;
}

smart-color-picker.item-size-large {
  --smart-color-panel-grid-mode-item-size: 30px;
}

/* Column Gap */

smart-color-picker.column-gap-small {
  --smart-color-panel-grid-mode-columns-gap: 1px;
}

smart-color-picker.column-gap-medium {
  --smart-color-panel-grid-mode-columns-gap: 2.5px;
}

smart-color-picker.column-gap-large {
  --smart-color-panel-grid-mode-columns-gap: 5px;
}
</style>
