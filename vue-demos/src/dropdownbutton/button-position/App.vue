<template>
  <div class="vue-root">
    <div id="container">
      <smart-drop-down-button drop-down-width="auto">
        <smart-tank
          id="tank"
          class="animation"
          max="100"
          scale-type="integer"
          value="75"
          interval="10"
        ></smart-tank>
      </smart-drop-down-button>
      <div class="options">
        <div class="option">
          <div>Button Position:</div>
          <smart-radio-button>Left</smart-radio-button>
          <br />
          <smart-radio-button checked>Right</smart-radio-button>
          <br />
          <smart-radio-button>Top</smart-radio-button>
          <br />
          <smart-radio-button>Bottom</smart-radio-button>
          <br />
        </div>
        <div class="option">
          <div>Open Mode:</div>
          <smart-radio-button checked>Default</smart-radio-button>
          <br />
          <smart-radio-button>DropDownButton</smart-radio-button>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownbutton.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      //const doc = document;
      const options = document.querySelector(".options");
      const radioButtons = options?.querySelectorAll("smart-radio-button"),
        dropDownButton = document.querySelector("smart-drop-down-button");
      radioButtons[0].addEventListener("change", function() {
        dropDownButton.dropDownButtonPosition = "left";
      });
      radioButtons[1].addEventListener("change", function() {
        dropDownButton.dropDownButtonPosition = "right";
      });
      radioButtons[2].addEventListener("change", function() {
        dropDownButton.dropDownButtonPosition = "top";
      });
      radioButtons[3].addEventListener("change", function() {
        dropDownButton.dropDownButtonPosition = "bottom";
      });
      radioButtons[4].addEventListener("change", function() {
        dropDownButton.dropDownOpenMode = "default";
      });
      radioButtons[5].addEventListener("change", function() {
        dropDownButton.dropDownOpenMode = "dropDownButton";
      });
      dropDownButton.addEventListener("change", function(event) {
        dropDownButton.placeholder = event.detail.value;
      });
      dropDownButton.placeholder = dropDownButton.querySelector(
        "smart-tank"
      ).value;
    });
  }
};
</script>

<style>
smart-drop-down-button {
  --smart-drop-down-element-max-height: 500px;
  width: 75px;
  height: auto;
}
smart-drop-down-button .smart-action-button {
  padding: 5px;
}
</style>
