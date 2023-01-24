<template>
  <div class="vue-root">
    <div class="demo-description">
      This example demonstrates the "materialGrid" display mode of the Color
      Picker.
    </div>
    <smart-color-picker display-mode="materialGrid"></smart-color-picker>
    <div class="options">
      <div class="option">
        <div>Toggle Grid Color Size</div>
        <smart-radio-button group-name="columnSize" checked>20</smart-radio-button>
        <smart-radio-button group-name="columnSize">40</smart-radio-button>
        <smart-radio-button group-name="columnSize">60</smart-radio-button>
      </div>
      <div class="option">
        <div>Toggle Grid Column Gap</div>
        <smart-radio-button group-name="columnGap" checked>1</smart-radio-button>
        <smart-radio-button group-name="columnGap">5</smart-radio-button>
        <smart-radio-button group-name="columnGap">10</smart-radio-button>
      </div>
      <div class="option">
        <div>Apply Value Mode</div>
        <smart-radio-button group-name="applyValueMode" checked>instantly</smart-radio-button>
        <smart-radio-button group-name="applyValueMode">useButtons</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
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
        if (!radioButton) {
          return;
        }
        //Set new Grid Item size
        if (
          radioButton.groupName === "columnSize" ||
          radioButton.groupName === "columnGap"
        ) {
          let size,
            className =
              radioButton.groupName === "columnSize"
                ? "item-size"
                : "column-gap";
          switch (radioButton.innerHTML) {
            case "1":
            case "20":
              size = "small";
              break;
            case "5":
            case "40":
              size = "medium";
              break;
            case "10":
            case "60":
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
        //Set ApplyValueMode and Palette
        if (radioButton.groupName === "applyValueMode") {
          colorPicker[radioButton.groupName] = radioButton.innerHTML;
          return;
        }
      });
    });
  }
};
</script>

<style>
/* Color Column Size */

smart-color-picker.item-size-small {
  --smart-color-panel-grid-mode-item-size: 20px;
}

smart-color-picker.item-size-medium {
  --smart-color-panel-grid-mode-item-size: 40px;
}

smart-color-picker.item-size-large {
  --smart-color-panel-grid-mode-item-size: 60px;
}

/* Column Gap */

smart-color-picker.column-gap-small {
  --smart-color-panel-grid-mode-columns-gap: 1px;
}

smart-color-picker.column-gap-medium {
  --smart-color-panel-grid-mode-columns-gap: 5px;
}

smart-color-picker.column-gap-large {
  --smart-color-panel-grid-mode-columns-gap: 10px;
}
</style>
