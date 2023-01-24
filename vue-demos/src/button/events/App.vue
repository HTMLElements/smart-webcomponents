<template>
  <div class="vue-root">
    <smart-button id="myButton">Click</smart-button>
    <div class="options">
      <div class="caption">Events</div>
      <div class="option" id="log"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const button = document.querySelector("smart-button");
      const eventLog = document.querySelector("#log");
      button.addEventListener("click", function() {
        eventLog.innerHTML = "Click";
      });
      button.addEventListener("focus", function() {
        eventLog.innerHTML = "Focus";
      });
      button.addEventListener("blur", function() {
        eventLog.innerHTML = "Blur";
      });
      button.addEventListener("mouseenter", function() {
        eventLog.innerHTML = "Mouse Enter";
      });
      button.addEventListener("mouseleave", function() {
        eventLog.innerHTML = "Mouse Leave";
      });
    });
  }
};
</script>

<style>
</style>
