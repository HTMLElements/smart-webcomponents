<template>
  <div class="vue-root">
    <h1>Display Mode "materialGrid"</h1>
    <smart-color-panel id="colorPanel" display-mode="materialGrid"></smart-color-panel>
    <div class="options">
      <div class="option">
        Selected color:
        <input type="text" class="smart-input" placeholder="#RRGGBB" id="rgbValue" />
      </div>
      <div class="option">
        <h3>Toggle Grid Color Size</h3>
        <br />
        <smart-radio-button group-name="columnSize" checked>20</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnSize">40</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnSize">60</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <h3>Toggle Grid Column Gap</h3>
        <br />
        <smart-radio-button group-name="columnGap" checked>1</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnGap">5</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnGap">10</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <h3>Apply Value Mode</h3>
        <smart-radio-button group-name="applyValueMode" checked>instantly</smart-radio-button>
        <br />
        <smart-radio-button group-name="applyValueMode">useButtons</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
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
        const input = event.target;
        //Set new Grid Item size
        if (radioButton) {
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
            const classes = colorPanel.classList;
            for (let i = 0; i < classes.length; i++) {
              if (classes[i].indexOf(className) > -1) {
                colorPanel.classList.remove(colorPanel.classList.item(i));
              }
            }
            colorPanel.classList.add(className + "-" + size);
            return;
          }
        }
        //Set ApplyValueMode and Palette
        if (radioButton.groupName === "applyValueMode") {
          colorPanel.applyValueMode = radioButton.innerHTML;
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
/* Color Column Size */

smart-color-panel.item-size-small {
  --smart-color-panel-grid-mode-item-size: 20px;
}

smart-color-panel.item-size-medium {
  --smart-color-panel-grid-mode-item-size: 40px;
}

smart-color-panel.item-size-large {
  --smart-color-panel-grid-mode-item-size: 60px;
}

/* Column Gap */

smart-color-panel.column-gap-small {
  --smart-color-panel-grid-mode-columns-gap: 1px;
}

smart-color-panel.column-gap-medium {
  --smart-color-panel-grid-mode-columns-gap: 5px;
}

smart-color-panel.column-gap-large {
  --smart-color-panel-grid-mode-columns-gap: 10px;
}

#rgbValue {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgray;
}
</style>
