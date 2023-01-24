<template>
  <div class="vue-root">
    <smart-led></smart-led>
    <div id="eventLogContainer">
      Checked:
      <span id="log"></span>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.led.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const LED = document.querySelector("smart-led"),
        log = document.querySelector("#log");
      log.textContent = false;
      LED.addEventListener("change", function(event) {
        const checkStatus = event.detail.value;
        log.textContent = checkStatus;
      });
    });
  }
};
</script>

<style>
#eventLogContainer {
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: gray;
}

#log {
  font-weight: bold;
}
</style>
