<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Color Panel Spectrum Grid Display Mode</h1>In this example, the display-mode is set to "spectrumGrid"
    </div>
    <smart-color-panel id="colorPanel" display-mode="spectrumGrid"></smart-color-panel>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        Selected color:
        <input type="text" placeholder="#RRGGBB" id="rgbValue" />
      </div>
      <div class="option">
        <div>Toggle Grid Column Size</div>
        <smart-radio-button group-name="columnCount">5</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnCount" checked>10</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnCount">15</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <div>Toggle Grid Color Size</div>
        <smart-radio-button group-name="columnSize" checked>20</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnSize">40</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnSize">60</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <div>Toggle Grid Column Gap</div>
        <smart-radio-button group-name="columnGap" checked>3</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnGap">6</smart-radio-button>
        <br />
        <smart-radio-button group-name="columnGap">9</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <div>Apply Value Mode</div>
        <smart-radio-button group-name="applyValueMode" checked>instantly</smart-radio-button>
        <br />
        <smart-radio-button group-name="applyValueMode">useButtons</smart-radio-button>
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
      </div>
      <div class="option">
        <div>Inverted</div>
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
import "smart-webcomponents/source/modules/smart.colorpanel.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const colorPanel = document.getElementById("colorPanel");
      document.addEventListener("change", function(event) {
        const target = event.target;
        //Set new Grid Item size
        if (
          target.groupName === "columnCount" ||
          target.groupName === "columnSize" ||
          target.groupName === "columnGap"
        ) {
          let size,
            className =
              target.groupName === "columnCount"
                ? "column-count"
                : target.groupName === "columnSize"
                ? "item-size"
                : "column-gap";
          switch (target.innerHTML) {
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
        if (target.groupName === "applyValueMode") {
          colorPanel.applyValueMode = target.innerHTML;
          return;
        }
        if (target.groupName === "palette") {
          colorPanel.palette = target.innerHTML;
          return;
        }
        //Set inverted mode
        if (event.target.id === "inverted") {
          colorPanel.inverted = event.detail.value;
          return;
        }
        //Set a new value
        if (event.target.id === "rgbValue") {
          colorPanel.value = event.target.value;
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
body,
html {
  height: 800px;
}
/* Color Column Count */

smart-color-panel.column-count-small {
  --smart-color-panel-grid-mode-column-count: 5;
}

smart-color-panel.column-count-medium {
  --smart-color-panel-grid-mode-column-count: 10;
}

smart-color-panel.column-count-large {
  --smart-color-panel-grid-mode-column-count: 15;
}

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
  --smart-color-panel-grid-mode-columns-gap: 3px;
}

smart-color-panel.column-gap-medium {
  --smart-color-panel-grid-mode-columns-gap: 6px;
}

smart-color-panel.column-gap-large {
  --smart-color-panel-grid-mode-columns-gap: 9px;
}

smart-color-panel {
  --smart-color-panel-grid-mode-columns-gap: 3px;
}
</style>
