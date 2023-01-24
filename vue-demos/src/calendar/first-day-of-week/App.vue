<template>
  <div class="vue-root">
    <smart-calendar></smart-calendar>
    <div class="options">
      <div class="option">Select first day of week</div>
      <div class="option">
        <smart-drop-down-list selected-indexes="[0]" id="dayOfWeekSelector"></smart-drop-down-list>
      </div>
      <div class="option">
        <div id="log"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.calendar.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const dropDownList = document.getElementById("dayOfWeekSelector"),
        calendar = document.querySelector("smart-calendar");
      dropDownList.dataSource = [
        {
          value: 0,
          label: "Sunday"
        },
        {
          value: 1,
          label: "Monday"
        },
        {
          value: 2,
          label: "Tuesday"
        },
        {
          value: 3,
          label: "Wednesday"
        },
        {
          value: 4,
          label: "Thursday"
        },
        {
          value: 5,
          label: "Friday"
        },
        {
          value: 6,
          label: "Saturday"
        }
      ];
      dropDownList.addEventListener("change", function(event) {
        calendar.firstDayOfWeek = event.detail.index;
        document.getElementById("log").innerHTML =
          "First day of week is " + event.detail.label;
      });
    });
  }
};
</script>

<style>
</style>
