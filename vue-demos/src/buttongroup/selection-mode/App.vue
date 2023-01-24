<template>
  <div class="vue-root">
    <smart-button-group data-source="['a','b','c']"></smart-button-group>
    <div class="options">
      <h4>Select a Selection Mode:</h4>
      <div class="option">
        <smart-input
          readonly
          value="one"
          data-source="['none', 'one', 'zeroOrOne', 'zeroOrMany']"
          drop-down-button-position="right"
        ></smart-input>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.buttongroup.js";
import "smart-webcomponents/source/modules/smart.input.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const buttonGroup = document.querySelector("smart-button-group");
      document
        .querySelector(".options")
        .addEventListener("change", function(event) {
          buttonGroup.selectionMode = event.detail.value;
        });
    });
  }
};
</script>

<style>
</style>
