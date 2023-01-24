<template>
  <div class="vue-root">
    <smart-calendar
      id="calendar"
      selected-dates="['2019-7-4']"
      restricted-dates="['2019-7-25', '2019-7-15', '2019-1-1']"
    ></smart-calendar>
    <div class="options">
      <div class="caption">Restricted Dates</div>
      <div class="option" id="restrictedDates"></div>
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
      const restrictedDates = document.querySelector("smart-calendar")
        .restrictedDates;
      // const calendar = document.querySelector("smart-calendar");

      function formatDate(date) {
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        return day + " " + monthNames[monthIndex] + " " + year;
      }
      const restrictedDatesElement = document.getElementById("restrictedDates");
      if (restrictedDates) {
        for (let d = 0; d < restrictedDates.length; d++) {
          restrictedDatesElement.innerHTML +=
            formatDate(restrictedDates[d]) + "</br>";
        }
      }
    });
  }
};
</script>

<style>
</style>
