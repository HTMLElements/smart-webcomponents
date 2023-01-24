<template>
  <div class="vue-root">
    <smart-toast
      position="top-left"
      auto-open
      auto-close
      show-close-button
      auto-close-delay="5000"
    >Toast!</smart-toast>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="openButton">Open Toast</smart-button>
        <h2>Events log:</h2>
        <div id="log"></div>
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
        log = document.getElementById("log"),
        openButton = document.getElementById("openButton");
      openButton.addEventListener("click", function() {
        toast.open();
      });
      toast.addEventListener("close", function() {
        log.innerHTML = '"close"<br />' + log.innerHTML;
      });
      toast.addEventListener("click", function() {
        log.innerHTML = '"click"<br />' + log.innerHTML;
      });
      toast.addEventListener("open", function() {
        log.innerHTML = '"open"<br />' + log.innerHTML;
      });
      toast.addEventListener("swipebottom", function() {
        log.innerHTML = '"swipebottom"<br />' + log.innerHTML;
      });
      toast.addEventListener("swipeleft", function() {
        log.innerHTML = '"swipeleft"<br />' + log.innerHTML;
      });
      toast.addEventListener("swiperight", function() {
        log.innerHTML = '"swiperight"<br />' + log.innerHTML;
      });
      toast.addEventListener("swipetop", function() {
        log.innerHTML = '"swipetop"<br />' + log.innerHTML;
      });
    });
  }
};
</script>

<style>
#log {
  width: 200px;
  height: 600px;
}
</style>
