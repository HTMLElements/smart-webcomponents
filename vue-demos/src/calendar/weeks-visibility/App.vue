<template>
  <div class="vue-root">
    <smart-calendar weeks="2"></smart-calendar>
    <div class="options">
      <div class="caption">Number of weeks(1-6)</div>
      <div class="option">
        <input class="text-input" id="weeksCountSelector" value="2" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.calendar.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const calendar = document.querySelector("smart-calendar"),
        weeksSelector = document.getElementById("weeksCountSelector");
      weeksSelector.addEventListener("change", function(event) {
        if (calendar.weeks) {
          calendar.weeks = parseInt(event.target.value);
          calendar.style.height = 120 + 32 * (calendar.weeks - 1) + "px";
        }
      });
      if (calendar.weeks) {
        calendar.style.height = 120 + 32 * (calendar.weeks - 1) + "px";
      }
    });
  }
};
</script>

<style>
smart-calendar {
  height: auto;
  min-height: initial;
}
</style>
