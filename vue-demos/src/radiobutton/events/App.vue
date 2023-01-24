<template>
  <div class="vue-root">
    <smart-radio-button enable-container-click checked>Radio Button 1</smart-radio-button>
    <smart-radio-button enable-container-click>Radio Button 2</smart-radio-button>
    <div class="options">
      <div class="Events"></div>
      <div class="option">
        <span id="log"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const buttons = document.querySelectorAll("smart-radio-button"),
        log = document.querySelector("#log");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("change", function(event) {
          log.textContent = event.target.innerHTML + " is checked";
        });
      }
    });
  }
};
</script>

<style>
</style>
