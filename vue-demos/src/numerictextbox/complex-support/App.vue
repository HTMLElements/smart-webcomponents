<template>
  <div class="vue-root">
    <smart-numeric-text-box
      id="myCustomElement"
      input-format="complex"
      value="3.14159265359+0.3i"
      spin-buttons
      spin-buttons-position="left"
      spin-buttons-step="1 + 1i"
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
    <br />
    <smart-button id="setSignificantDigits">significantDigits = 5</smart-button>
    <smart-button id="setPrecisionDigits">precisionDigits = 5</smart-button>
    <br />
    <br />
    <smart-button id="setValue">set value to "5e12 + 1.6e3i"</smart-button>
    <smart-button id="setScientificNotationValue">set value to "34E - 12i"</smart-button>
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
      const myCustomElement = document.querySelector("smart-numeric-text-box");
      myCustomElement.style.fontFamily = "Verdana";
      document
        .querySelector("#setSignificantDigits")
        .addEventListener("click", function() {
          myCustomElement.significantDigits = 5;
        });
      document
        .querySelector("#setPrecisionDigits")
        .addEventListener("click", function() {
          myCustomElement.precisionDigits = 5;
        });
      document.querySelector("#setValue").addEventListener("click", function() {
        myCustomElement.value = "5e12 + 1.6e3i";
      });
      document
        .querySelector("#setScientificNotationValue")
        .addEventListener("click", function() {
          myCustomElement.value = "34E - 12i";
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
