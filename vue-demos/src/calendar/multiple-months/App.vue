<template>
  <div class="vue-root">
    <smart-calendar class="multiple-months" months="12"></smart-calendar>
    <div class="options">
      <div class="caption">Number of months(1-12)</div>
      <div class="option">
        <input class="text-input" id="monthsCountSelector" value="12" />
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
      const monthSelector = document.getElementById("monthsCountSelector");
      calendar.selectedDates = [
        "2020-08-17",
        "2020-09-6",
        "2020-09-21",
        "2020-10-31",
        "2020-11-25",
        "2020-12-24",
        "2021-1-7"
      ];
      monthSelector.addEventListener("change", function(event) {
        calendar.months = parseInt(event.target.value);
      });
    });
  }
};
</script>

<style>
@media only screen and (max-width: 500px) {
  smart-calendar[months] .smart-calendar-month {
    width: 100%;
  }
  smart-calendar {
    width: 300px !important;
    height: 600px !important;
  }
}
</style>
