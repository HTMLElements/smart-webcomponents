<template>
  <div class="vue-root">
    <div class="options">
      <div class="captions" id="checked">
        Checked:
        <span id="log"></span>
      </div>
    </div>
    <smart-switch-button></smart-switch-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.switchbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const smartSwitchButton = document.querySelector("smart-switch-button"),
        log = document.querySelector("#log");
      log.textContent = "false";
      smartSwitchButton.addEventListener("change", function(event) {
        const checkStatus = event.detail.value;
        log.textContent = checkStatus;
      });
    });
  }
};
</script>

<style>
#checked {
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: gray;
}

#log {
  font-weight: bold;
}
</style>
