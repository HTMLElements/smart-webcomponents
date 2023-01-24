<template>
  <div class="vue-root">
    <smart-calendar
      class="calendar-demo"
      min="2018, 7, 1"
      max="2019-7-31"
      selected-dates="['2019-7-2', '2029-7-17']"
    ></smart-calendar>
    <div class="options" id="controlContainer">
      <div>Min/Max Set</div>
      <div class="option">
        <pre>Min </pre>
        <input class="text-input" value="2018-7-1" placeholder="2019-01-01" id="minInput" />
      </div>
      <div class="option">
        <pre>Max </pre>
        <input class="text-input" value="2019-7-31" placeholder="2019-01-01" id="maxInput" />
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
      const calendar = document.querySelector("smart-calendar");
      document
        .getElementById("minInput")
        .addEventListener("change", function(event) {
          calendar.min = event.target.value;
        });
      document
        .getElementById("maxInput")
        .addEventListener("change", function(event) {
          calendar.max = event.target.value;
        });
    });
  }
};
</script>

<style>
</style>
