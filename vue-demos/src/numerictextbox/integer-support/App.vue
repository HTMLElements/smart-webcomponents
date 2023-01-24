<template>
  <div class="vue-root">
    <smart-numeric-text-box
      id="myCustomElement"
      value="0"
      input-format="integer"
      word-length="uint64"
      radix-display
      drop-down-enabled
      spin-buttons
      spin-buttons-position="right"
      spin-buttons-step="1"
      placeholder="Please type..."
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
    <div id="log"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.numerictextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const myCustomElement = document.querySelector("smart-numeric-text-box");
      myCustomElement.addEventListener("change", function(event) {
        const newValue = event.detail.value,
          oldValue = event.detail.oldValue;
        document.getElementById("log").innerHTML =
          "New: " + newValue + "; old: " + oldValue;
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
