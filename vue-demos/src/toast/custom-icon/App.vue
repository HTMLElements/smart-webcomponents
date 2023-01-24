<template>
  <div class="vue-root">
    <smart-toast position="top-left" auto-open auto-close show-close-button>Toast with custom icon</smart-toast>
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
      const toast = document.querySelector("smart-toast");
      toast.type = null;

      document
        .getElementById("openButton")
        .addEventListener("click", function() {
          toast.open();
        });
    });
  }
};
</script>

<style>
.smart-toast-item .smart-toast-item-icon {
  background-image: url("https://www.jqwidgets.com/jquery-widgets-demo/images/smiley.png");
}
</style>
