<template>
  <div class="vue-root">
    <div id="toastContainer"></div>
    <smart-toast
      position="top-left"
      auto-open
      auto-close
      show-close-button
      append-to="toastContainer"
      class="blink"
    >
      <b>Toast !</b>
    </smart-toast>
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
      const toast = document.querySelectorAll("smart-toast")[0],
        openButton = document.getElementById("openButton");
      toast.appendContainer = "toastContainer";
      openButton.addEventListener("click", function() {
        toast.open();
      });
    });
  }
};
</script>

<style>
#toastContainer {
  width: 380px;
  height: 380px;
  position: absolute;
  left: calc(50% - 210px);
  top: calc(50% - 210px);
  padding: 20px;
  border: 1px gray dashed;
  overflow-y: auto;
}
</style>
