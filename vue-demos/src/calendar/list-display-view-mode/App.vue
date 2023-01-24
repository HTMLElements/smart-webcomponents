<template>
  <div class="vue-root">
    <smart-calendar display-mode-view="list"></smart-calendar>
    <br />
    <div class="options">
      <div class="caption">Choose Mode</div>
      <div class="option">
        <smart-radio-button enable-container-click checked>Month</smart-radio-button>
        <smart-radio-button enable-container-click>Year</smart-radio-button>
        <smart-radio-button enable-container-click>Decade</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.calendar.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const calendar = document.querySelector("smart-calendar");
      document
        .getElementsByTagName("smart-radio-button")[0]
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            calendar.displayMode = "month";
          }
        });
      document
        .getElementsByTagName("smart-radio-button")[1]
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            calendar.displayMode = "year";
          }
        });
      document
        .getElementsByTagName("smart-radio-button")[2]
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            calendar.displayMode = "decade";
          }
        });
      calendar.addEventListener("displayModeChange", function() {
        if (calendar.displayMode === "month") {
          document.getElementsByTagName("smart-radio-button")[0].checked = true;
        } else if (calendar.displayMode === "year") {
          document.getElementsByTagName("smart-radio-button")[1].checked = true;
        } else {
          document.getElementsByTagName("smart-radio-button")[2].checked = true;
        }
      });
    });
  }
};
</script>

<style>
</style>
