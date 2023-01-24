<template>
  <div class="vue-root">
    <smart-path label="Path"></smart-path>
    <div class="options">
      <div>Event Log:</div>
      <div class="option">
        <div id="log"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.path.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const pathControl = document.querySelector("smart-path");
      const log = document.getElementById("log");
      pathControl.addEventListener("browseButtonClick", function(event) {
        log.innerHTML += event.type + "</br>";
      });
      pathControl.addEventListener("dropDownButtonClick", function(event) {
        log.innerHTML += event.type + "</br>";
      });
      pathControl.addEventListener("open", function(event) {
        log.innerHTML += event.type + "</br>";
      });
      pathControl.addEventListener("opening", function(event) {
        log.innerHTML += event.type + "</br>";
      });
      pathControl.addEventListener("close", function(event) {
        log.innerHTML += event.type + "</br>";
      });
      pathControl.addEventListener("closing", function(event) {
        log.innerHTML += event.type + "</br>";
      });
      pathControl.addEventListener("change", function(event) {
        log.innerHTML += event.type + "</br>";
      });
      pathControl.addEventListener("itemClick", function(event) {
        log.innerHTML += event.type + "</br>";
      });
    });
  }
};
</script>

<style>
smart-path {
  float: left;
  margin: 5%;
}
</style>
