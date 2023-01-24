<template>
  <div class="vue-root">
    <smart-multi-split-button id="multiSplitButton"></smart-multi-split-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.multisplitbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const multiSplitButton = document.getElementById("multiSplitButton");
      multiSplitButton.buttonsDataSource = ["Button 1", "Button 2", "Button 3"];
    });
  }
};
</script>

<style>
smart-multi-split-button {
  min-height: 35px;
  height: auto;
  width: 300px;
}
</style>
