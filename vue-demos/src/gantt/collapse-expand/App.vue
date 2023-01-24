<template>
  <div class="vue-root">
    <div class="demo-description">Select a Project task from the drop down list to collapse/expand.</div>
    <smart-gantt-chart id="gant" view="year"></smart-gantt-chart>
    <div class="options">
      <div class="option">
        <smart-drop-down-list id="indexSelector">
          <smart-list-item value="0">Project 1</smart-list-item>
          <smart-list-item value="3">Project 1.1</smart-list-item>
          <smart-list-item value="6">Project 1.1.1</smart-list-item>
        </smart-drop-down-list>
      </div>
      <div class="option">
        <smart-button id="collapseButton">Collapse</smart-button>
      </div>
      <div class="option">
        <smart-button id="expandButton">Expand</smart-button>
      </div>
      <div class="option">
        <div id="logContainer">
          <h4>Event Log:</h4>
          <div id="log"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.ganttchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const ganttChart = document.querySelector("smart-gantt-chart");
      const log = document.getElementById("log");
      const indexSelector = document.getElementById("indexSelector");
      ganttChart.dataSource = [
        {
          label: "Project 1",
          synchronized: true,
          expanded: true,
          type: "project",
          connections: [
            {
              target: 1,
              type: 0
            }
          ],
          tasks: [
            {
              label: "Task 1.1",
              dateStart: "2020-06-10",
              dateEnd: "2021-01-10",
              type: "task",
              connections: [
                {
                  target: 2,
                  type: 1
                },
                {
                  target: 4,
                  type: 1
                }
              ]
            },
            {
              label: "Task 1.2",
              dateStart: "2020-10-10",
              dateEnd: "2021-2-31",
              type: "task",
              connections: [
                {
                  target: 3,
                  type: 1
                }
              ]
            },
            {
              label: "Project 1.1",
              dateStart: "2021-2-31",
              dateEnd: "2021-6-1",
              expanded: true,
              type: "project",
              connections: [
                {
                  target: 4,
                  type: 0
                }
              ],
              tasks: [
                {
                  label: "Task 1.1.1",
                  dateStart: "2021-3-10",
                  dateEnd: "2021-4-1",
                  type: "task",
                  connections: [
                    {
                      target: 6,
                      type: 1
                    }
                  ]
                },
                {
                  label: "Task 1.1.2",
                  dateStart: "2021-4-2",
                  dateEnd: "2021-6-1",
                  type: "task",
                  connections: []
                },
                {
                  label: "Project 1.1.1",
                  dateStart: "2021-06-1T12:30:00",
                  dateEnd: "2021-9-1",
                  expanded: true,
                  type: "project",
                  connections: [],
                  tasks: [
                    {
                      label: "Task 1.1.1.1",
                      dateStart: "2021-07-10",
                      dateEnd: "2021-08-30",
                      type: "task",
                      connections: [
                        {
                          target: 8,
                          type: 1
                        }
                      ]
                    },
                    {
                      label: "Task 1.1.1.2",
                      dateStart: "2021-08-30",
                      dateEnd: "2021-10-1",
                      type: "task"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "Task 2",
          dateStart: "2020-03-10T15:30:00",
          dateEnd: "2021-08-10",
          type: "task",
          connections: [
            {
              target: 10,
              type: 1
            }
          ]
        },
        {
          label: "Milestone 1",
          dateEnd: "2021-05-24",
          type: "milestone",
          connections: [
            {
              target: 11,
              type: 1
            }
          ]
        },
        {
          label: "Task 3",
          dateStart: "2021-02-05",
          dateEnd: "2021-07-08",
          progress: 50
        }
      ];
      document
        .getElementById("collapseButton")
        .addEventListener("click", function() {
          const index = parseInt(indexSelector.selectedValues[0]);
          if (!isNaN(index)) {
            ganttChart.collapse(index);
          }
        });
      document
        .getElementById("expandButton")
        .addEventListener("click", function() {
          const index = parseInt(indexSelector.selectedValues[0]);
          if (!isNaN(index)) {
            ganttChart.expand(index);
          }
        });
      ganttChart.addEventListener("collapse", function(event) {
        log.innerHTML += "<br />" + event.type + "Task # " + event.detail.index;
      });
      ganttChart.addEventListener("expand", function(event) {
        log.innerHTML += "<br />" + event.type + "Task # " + event.detail.index;
      });
    });
  }
};
</script>

<style>
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
