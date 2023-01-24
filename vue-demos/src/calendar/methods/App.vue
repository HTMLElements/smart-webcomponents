<template>
  <div class="vue-root">
    <smart-calendar></smart-calendar>
    <div class="options">
      <div class="caption">
        <smart-button id="clearSelection">Clear Selection</smart-button>
      </div>
      <div class="option">
        <smart-button id="today">Today</smart-button>
      </div>
      <div class="option">
        <smart-button id="navBackward">Navigate Backward</smart-button>
      </div>
      <div class="option">
        <smart-button id="navForward">Navigate Forward</smart-button>
      </div>
      <div class="option">
        <input class="text-input" id="dateInput" placeholder="e.g. 2019-1-1" />
      </div>
      <div class="option">
        <smart-button id="selectDate">Select Date</smart-button>
      </div>
      <div class="option">
        <smart-button style="width:auto;" id="disabled">Enable/Disable</smart-button>
      </div>
      <div class="option"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.calendar.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const calendar = document.querySelector("smart-calendar");
      document.getElementById("clearSelection").onclick = function() {
        calendar.clearSelection();
      };
      document.getElementById("today").onclick = function() {
        calendar.today();
      };
      document.getElementById("navForward").onclick = function() {
        calendar.navigate(1);
      };
      document.getElementById("navBackward").onclick = function() {
        calendar.navigate(-1);
      };
      document.getElementById("selectDate").onclick = function() {
        calendar.select(document.getElementById("dateInput").value);
      };
      document.getElementById("disabled").onclick = function() {
        calendar.disabled = !calendar.disabled;
      };
    });
  }
};
</script>

<style>
</style>
