<template>
  <div class="vue-root">
    <smart-check-box>Check Box</smart-check-box>
    <div class="options">
      <div class="caption">Events</div>
      <div class="option">
        <span id="log"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const checkBox = document.querySelector("smart-check-box"),
        log = document.querySelector("#log");
      log.textContent = "Change event. Status: " + false;
      checkBox.addEventListener("change", function(event) {
        const checkStatus = event.detail.value;
        log.textContent = "Change event. Status: " + checkStatus;
      });
    });
  }
};
</script>

<style>
</style>
