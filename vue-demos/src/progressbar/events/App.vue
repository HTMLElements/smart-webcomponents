<template>
  <div class="vue-root">
    <smart-progress-bar></smart-progress-bar>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <div>
          <smart-button onclick="setVal(100)">Set Value</smart-button>
        </div>
        <br />
        <div id="log"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.progressbar.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const el = document.querySelector("smart-progress-bar");
      el.value = 50;
      el.addEventListener("change", function(event) {
        const newV = event.detail.value,
          oldV = event.detail.oldValue;
        document.getElementById("log").innerHTML =
          '"change" event has been raised.' +
          "<br/><br/>" +
          "Event Details:" +
          "<br/>" +
          "newValue:" +
          newV +
          "<br/>" +
          "oldValue: " +
          oldV;
      });

      window.setVal = function(number) {
        const customElement = document.querySelector("smart-progress-bar");
        customElement.value = number;
      };
    });
  }
};
</script>

<style>
smart-progress-bar {
  margin-bottom: 20px;
}
</style>
