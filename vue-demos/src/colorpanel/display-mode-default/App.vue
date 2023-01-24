<template>
  <div class="vue-root">
    <div class="demo-description">Color Panel with display-mode="default"</div>
    <smart-color-panel id="colorPanel" display-mode="default"></smart-color-panel>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <label>Selected color:</label>
        <br />
        <input class="smart-input" type="text" placeholder="#RRGGBB" id="rgbValue" />
      </div>
      <div class="option">
        <label>Toggle Grid Color Size</label>
        <br />
        <smart-radio-button group-name="gridSettings">10</smart-radio-button>
        <br />
        <smart-radio-button group-name="gridSettings" checked>20</smart-radio-button>
        <br />
        <smart-radio-button group-name="gridSettings">30</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <label>Toggle Grid Column Gap</label>
        <br />
        <smart-radio-button group-name="gapSettings" checked>1</smart-radio-button>
        <br />
        <smart-radio-button group-name="gapSettings">2.5</smart-radio-button>
        <br />
        <smart-radio-button group-name="gapSettings">5</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <label>Enable/Disable Custom Colors</label>
        <br />
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
        if (
          (radioButton && radioButton.groupName === "gridSettings") ||
          (radioButton && radioButton.groupName === "gapSettings")
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
          const classes = colorPanel.classList;
          for (let i = 0; i < classes.length; i++) {
            if (classes[i].indexOf(className) > -1) {
              colorPanel.classList.remove(colorPanel.classList.item(i));
            }
          }
          colorPanel.classList.add(className + "-" + size);
          return;
        }
        if (checkBox && checkBox.id === "enableCustomColors") {
          colorPanel.enableCustomColors = checkBox.checked;
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
/* Color Item Size */

smart-color-panel.item-size-small {
  --smart-color-panel-grid-mode-item-size: 10px;
}

smart-color-panel.item-size-medium {
  --smart-color-panel-grid-mode-item-size: 20px;
}

smart-color-panel.item-size-large {
  --smart-color-panel-grid-mode-item-size: 30px;
}

/* Column Gap */

smart-color-panel.column-gap-small {
  --smart-color-panel-grid-mode-columns-gap: 1px;
}

smart-color-panel.column-gap-medium {
  --smart-color-panel-grid-mode-columns-gap: 2.5px;
}

smart-color-panel.column-gap-large {
  --smart-color-panel-grid-mode-columns-gap: 5px;
}

#rgbValue {
  padding: 5px;
}
</style>
