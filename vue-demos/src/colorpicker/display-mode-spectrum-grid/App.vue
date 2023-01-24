<template>
  <div class="vue-root">
    <div class="demo-description">The Color Picker's display-mode is set to "spectrumGrid"</div>
    <smart-color-picker display-mode="spectrumGrid" placeholder="Select a Color"></smart-color-picker>
    <div class="options">
      <div class="option">
        <h3>Toggle Grid Column Size</h3>
        <smart-radio-button group-name="columnCount">5</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnCount" checked>10</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnCount">15</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <h3>Toggle Grid Color Size</h3>
        <smart-radio-button group-name="columnSize" checked>20</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnSize">40</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnSize">60</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <h3>Toggle Grid Column Gap</h3>
        <smart-radio-button group-name="columnGap" checked>3</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnGap">6</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnGap">9</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <h3>Apply Value Mode</h3>
        <smart-radio-button group-name="applyValueMode" checked>instantly</smart-radio-button>
        <br />
        <smart-radio-button group-name="applyValueMode">useButtons</smart-radio-button>
        <br />
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
      <div class="option">
        <h3>Inverted</h3>
        <smart-check-box id="inverted">inverted</smart-check-box>
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
        //const target = event.target;
        const radioButton = event.target;
        const checkBox = event.target;
        const input = event.target;
        //Set new Grid Item size
        if (radioButton) {
          if (
            radioButton.groupName === "columnCount" ||
            radioButton.groupName === "columnSize" ||
            radioButton.groupName === "columnGap"
          ) {
            let size,
              className =
                radioButton.groupName === "columnCount"
                  ? "column-count"
                  : radioButton.groupName === "columnSize"
                  ? "item-size"
                  : "column-gap";
            switch (radioButton.innerHTML) {
              case "3":
              case "5":
              case "20":
                size = "small";
                break;
              case "6":
              case "10":
              case "40":
                size = "medium";
                break;
              case "15":
              case "9":
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
          //Set ApplyValueMode and Palette
          if (radioButton.groupName === "applyValueMode") {
            colorPanel.applyValueMode = radioButton.innerHTML;
            return;
          }
          if (radioButton.groupName === "palette") {
            colorPanel.palette = radioButton.innerHTML;
            return;
          }
        }
        //Set inverted mode
        if (checkBox && checkBox.id === "inverted") {
          colorPanel.inverted = event.detail.value;
          return;
        }
        //Set a new value
        if (input) {
          colorPanel.value = input.value;
        }
      });
    });
  }
};
</script>

<style>
/* Color Column Count */

smart-color-picker.column-count-small {
  --smart-color-panel-grid-mode-column-count: 5;
}

smart-color-picker.column-count-medium {
  --smart-color-panel-grid-mode-column-count: 10;
}

smart-color-picker.column-count-large {
  --smart-color-panel-grid-mode-column-count: 15;
}

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
  --smart-color-panel-grid-mode-columns-gap: 3px;
}

smart-color-picker.column-gap-medium {
  --smart-color-panel-grid-mode-columns-gap: 6px;
}

smart-color-picker.column-gap-large {
  --smart-color-panel-grid-mode-columns-gap: 9px;
}

smart-color-picker {
  --smart-color-panel-grid-mode-columns-gap: 3px;
}
</style>
