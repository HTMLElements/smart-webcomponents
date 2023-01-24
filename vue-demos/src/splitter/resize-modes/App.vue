<template>
  <div class="vue-root">
    <smart-splitter id="horizontalSplitter" resize-mode="adjacent">
      <smart-splitter-item size="25%">Item 1</smart-splitter-item>
      <smart-splitter-item>Item 2</smart-splitter-item>
      <smart-splitter-item size="25%">Item 3</smart-splitter-item>
    </smart-splitter>
    <div class="options">
      <div class="caption">Resize Mode</div>
      <div class="option">
        <smart-radio-button>none</smart-radio-button>
        <br />
        <smart-radio-button checked>adjacent</smart-radio-button>
        <br />
        <smart-radio-button>end</smart-radio-button>
        <br />
        <smart-radio-button>proportional</smart-radio-button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.splitter.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const radioButtons = document.getElementsByTagName("smart-radio-button");
      for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener("change", function(event) {
          const el = event.target;
          document.querySelector(
            "smart-splitter"
          ).resizeMode = el.textContent.trim();
        });
      }
    });
  }
};
</script>

<style>
smart-splitter {
  width: 60%;
}

@media screen and (max-width: 700px) {
  smart-splitter {
    width: 100%;
  }
}
</style>
