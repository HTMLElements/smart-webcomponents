<template>
  <div class="vue-root">
    <p>
      <b>Description:</b> Click on the Drop Down List to select a different Timeline
      View.
    </p>
    <smart-gantt-chart></smart-gantt-chart>
    <div class="options">
      <div class="option">
        <h3>Select view:</h3>
        <smart-drop-down-list>
          <smart-list-item selected>year</smart-list-item>
          <smart-list-item>month</smart-list-item>
          <smart-list-item>week</smart-list-item>
          <smart-list-item>day</smart-list-item>
          <smart-list-item>resource</smart-list-item>
        </smart-drop-down-list>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.ganttchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const gantt = document.querySelector("smart-gantt-chart"),
        dropDown = document.querySelector("smart-drop-down-list");
      gantt.dataSource = [
        {
          //Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
          label: "Project 1",
          dateStart: "2020-05-10",
          dateEnd: "2021-06-10",
          type: "project",
          expanded: true,
          tasks: [
            {
              label: "Task 1.1",
              dateStart: "2020-02-10",
              dateEnd: "2020-04-10",
              type: "task"
            },
            {
              label: "Task 1.2",
              dateStart: "2020-03-27",
              dateEnd: "2020-06-10",
              type: "task"
            },
            {
              label: "Milestone 1",
              dateStart: "2020-04-21",
              type: "milestone"
            },
            {
              label: "Project 2",
              dateStart: "2020-06-11",
              dateEnd: "2024-12-31T23:59:59",
              type: "project",
              expanded: true,
              tasks: [
                {
                  label: "Task 2.1",
                  dateStart: "2020-06-12",
                  dateEnd: "2021-01-1",
                  type: "task"
                },
                {
                  label: "Task 2.2",
                  dateStart: "2020-01-02",
                  dateEnd: "2021-06-01",
                  type: "task"
                },
                {
                  label: "Milestone 2.1",
                  dateStart: "2020-06-30",
                  type: "milestone"
                },
                {
                  label: "Task 2.3",
                  dateStart: "2020-09-01",
                  dateEnd: "2024-12-31T23:59:59",
                  type: "task"
                }
              ]
            }
          ]
        }
      ];
      dropDown.addEventListener("change", function(event) {
        gantt.view = event.detail.label;
      });
    });
  }
};
</script>

<style>
smart-drop-down-list {
  width: 100%;
}

.smart-gantt-chart {
  width: calc(100% - 300px);
  height: 450px;
}
@media only screen and (max-width: 600px) {
  .smart-gantt-chart {
    width: 100%;
    height: auto;
  }
}
</style>
