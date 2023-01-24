<template>
  <div class="vue-root">
    <smart-toast
      position="top-left"
      auto-open
      show-close-button
      type="warning"
      class="blink"
    >Warning!</smart-toast>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="openButton">Open Toast</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.toast.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document
        .getElementById("openButton")
        .addEventListener("click", function() {
          document.querySelectorAll("smart-toast")[0].open();
        });
    });
  }
};
</script>

<style>
</style>
