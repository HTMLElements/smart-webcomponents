<template>
  <div class="vue-root">
    <smart-password-text-box placeholder="Your password"></smart-password-text-box>
    <div class="options">
      <div class="caption">Events Log</div>
      <div class="option">
        <div id="eventLog"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.passwordtextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const passwordTextBox = document.querySelector("smart-password-text-box");
      passwordTextBox.addEventListener("change", function() {
        const log = document.getElementById("eventLog");
        log.innerHTML = passwordTextBox.value;
      });
    });
  }
};
</script>

<style>
</style>
