<template>
  <div class="vue-root">
    <smart-numeric-text-box
      id="myCustomElement"
      input-format="floatingPoint"
      value="3.14159265359"
      spin-buttons
      spin-buttons-position="right"
      spin-buttons-step="1"
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
    <br />
    <smart-button id="setSignificantDigits">significantDigits = 5</smart-button>
    <smart-button id="setPrecisionDigits">precisionDigits = 5</smart-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.numerictextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document
        .querySelector("#setSignificantDigits")
        .addEventListener("click", function() {
          const myCustomElement = document.querySelector(
            "smart-numeric-text-box"
          );
          myCustomElement.significantDigits = 5;
        });
      document
        .querySelector("#setPrecisionDigits")
        .addEventListener("click", function() {
          const myCustomElement = document.querySelector(
            "smart-numeric-text-box"
          );
          myCustomElement.precisionDigits = 5;
        });
    });
  }
};
</script>

<style>
#myCustomElement {
  width: 300px;
  height: 40px;
}
</style>
