<template>
  <div class="vue-root">
    <div class="options">
      <div class="caption">smartWindow Resizing Modes:</div>
      <div class="option">
        <smart-radio-button checked>none</smart-radio-button>
        <smart-radio-button>Horizontal</smart-radio-button>
        <smart-radio-button>Vertical</smart-radio-button>
        <smart-radio-button>Both</smart-radio-button>
        <smart-radio-button>Top</smart-radio-button>
        <smart-radio-button>Bottom</smart-radio-button>
        <smart-radio-button>Left</smart-radio-button>
        <smart-radio-button>Right</smart-radio-button>
      </div>
      <div class="caption">Resize indicator:</div>
      <div class="option">
        <smart-radio-button checked>Off</smart-radio-button>
        <smart-radio-button>On</smart-radio-button>
      </div>
      <div class="caption">Live Resize:</div>
      <div class="option">
        <smart-radio-button checked>Off</smart-radio-button>
        <smart-radio-button>On</smart-radio-button>
      </div>
    </div>
    <smart-window opened label="Window 1">
      <section>
        <h3>What is Lorem Ipsum?</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </section>
    </smart-window>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.window.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const radioButtons = document.getElementsByTagName("smart-radio-button");
      const window = document.querySelector("smart-window");
      radioButtons[0].addEventListener("change", function() {
        window.resizeMode = "none";
      });
      radioButtons[1].addEventListener("change", function() {
        window.resizeMode = "horizontal";
      });
      radioButtons[2].addEventListener("change", function() {
        window.resizeMode = "vertical";
      });
      radioButtons[3].addEventListener("change", function() {
        window.resizeMode = "both";
      });
      radioButtons[4].addEventListener("change", function() {
        window.resizeMode = "top";
      });
      radioButtons[5].addEventListener("change", function() {
        window.resizeMode = "bottom";
      });
      radioButtons[6].addEventListener("change", function() {
        window.resizeMode = "left";
      });
      radioButtons[7].addEventListener("change", function() {
        window.resizeMode = "right";
      });
      radioButtons[8].addEventListener("change", function() {
        window.resizeIndicator = false;
      });
      radioButtons[9].addEventListener("change", function() {
        window.resizeIndicator = true;
      });
      radioButtons[10].addEventListener("change", function() {
        window.liveResize = false;
      });
      radioButtons[11].addEventListener("change", function() {
        window.liveResize = true;
      });
    });
  }
};
</script>

<style>
html,
body,
#app,
.vue-root {
  width: 99%;
  height: 99%;
}

.smart-window #article {
  overflow: auto;
}

@media screen and (max-width: 700px) {
  .smart-window {
    width: 90% !important;
    left: 5% !important;
    top: 5px !important;
  }
}
</style>
