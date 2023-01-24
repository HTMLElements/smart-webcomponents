<template>
  <div class="vue-root">
    <div class="demo-description">
      <b>duration</b> of tasks can be calculated in different units: day, hour
      and others. Press on the radio button to change the Duration Unit.
    </div>
    <smart-gantt-chart duration-unit="day"></smart-gantt-chart>
    <div class="options">
      <h3>Duration Unit:</h3>
      <div class="option">
        <smart-radio-button group-name="durationUnit" checked id="dayUnit">day</smart-radio-button>
      </div>
      <div class="option">
        <smart-radio-button group-name="durationUnit" id="hourUnit">hour</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.ganttchart.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const ganttChart = document.querySelector("smart-gantt-chart");
      ganttChart.dataSource = [
        {
          type: "project",
          label: "Project 1",
          dateStart: "2021-5-10",
          dateEnd: "2021-7-10",
          minDuration: 60
        },
        {
          type: "task",
          label: "Task 2",
          dateStart: "2021-6-5",
          dateEnd: "2021-8-10",
          minDuration: 10,
          maxDuration: 60
        }
      ];
      document
        .getElementById("dayUnit")
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            ganttChart.durationUnit = event.target.innerHTML;
          }
        });
      document
        .getElementById("hourUnit")
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            ganttChart.durationUnit = event.target.innerHTML;
          }
        });
    });
  }
};
</script>

<style>
smart-gantt-chart {
  width: 60%;
  height: auto;
}
@media (max-width: 700px) {
  smart-gantt-chart {
    width: 95%;
    margin-left: 2%;
  }
}
</style>
