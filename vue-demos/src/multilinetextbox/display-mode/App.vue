<template>
  <div class="vue-root">
    <smart-radio-button id="defaultMode" checked enable-container-click>Default mode</smart-radio-button>
    <smart-radio-button id="escapedMode" enable-container-click>Escaped mode</smart-radio-button>
    <br />
    <smart-multiline-text-box enter-key-behavior="newLine" placeholder="Your text" value></smart-multiline-text-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.multilinetextbox.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const textBox = document.querySelectorAll("smart-multiline-text-box")[0],
        defaultMode = document.getElementById("defaultMode"),
        escapedMode = document.getElementById("escapedMode");
      defaultMode.addEventListener("change", function() {
        textBox.displayMode = "default";
      });
      escapedMode.addEventListener("change", function() {
        textBox.displayMode = "escaped";
      });
    });
  }
};
</script>

<style>
</style>
