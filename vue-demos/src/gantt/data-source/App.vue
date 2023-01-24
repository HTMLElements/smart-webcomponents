<template>
  <div class="vue-root">
    <div class="demo-description">
      Click on the Button to show the current
      <b>DataSource</b> in the log section.
    </div>
    <smart-gantt-chart id="gantt"></smart-gantt-chart>
    <div class="options">
      <h3>DataSource</h3>
      <div class="option">
        <smart-button id="showDataSource">Show DataSource</smart-button>
      </div>
      <div class="option">
        <h4>Log:</h4>

        <div class="log">
          <pre id="log"></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.ganttchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#gantt",
        class {
          get properties() {
            return {
              view: "month",
              treeSize: "25%",
              durationUnit: "day",
              taskColumns: [
                {
                  label: "Book Plan",
                  value: "label",
                  size: "60%"
                },
                {
                  label: "Duration (days)",
                  value: "duration",
                  formatFunction: duration => Math.round(duration)
                }
              ],
              timelineHeaderFormatFunction: function(
                date,
                type,
                isHeaderDetails,
                defaultValue
              ) {
                const ganttChart = document.querySelector("smart-gantt-chart");
                if (isHeaderDetails) {
                  return date.toLocaleDateString(ganttChart.locale, {
                    month: "short",
                    year: "numeric"
                  });
                } else {
                  return "#" + defaultValue;
                }
              },
              dataSource: [
                {
                  label: "Chapter 1",
                  synchronized: true,
                  expanded: true,
                  type: "project",
                  tasks: [
                    {
                      label: "Section 1.1",
                      dateStart: "2021-01-01",
                      duration: 30,
                      progress: 35,
                      type: "task"
                    },
                    {
                      label: "Section 1.2",
                      dateStart: "2021-02-01",
                      progress: 25,
                      duration: 30,
                      type: "task"
                    },
                    {
                      label: "Section 1.3",
                      dateStart: "2021-02-01",
                      progress: 10,
                      duration: 30,
                      type: "task"
                    }
                  ]
                },
                {
                  label: "End of Chapter 1",
                  dateStart: "2021-03-01",
                  type: "milestone"
                },
                {
                  label: "Chapter 2",
                  synchronized: true,
                  expanded: true,
                  type: "project",
                  tasks: [
                    {
                      label: "Section 2.1",
                      dateStart: "2021-03-01",
                      duration: 30,
                      progress: 15,
                      type: "task"
                    },
                    {
                      label: "Section 2.2",
                      dateStart: "2021-04-01",
                      progress: 10,
                      duration: 30,
                      type: "task"
                    },
                    {
                      label: "Section 2.3",
                      dateStart: "2021-05-01",
                      progress: 20,
                      duration: 30,
                      type: "task"
                    }
                  ]
                },
                {
                  label: "End of Chapter 2",
                  dateStart: "2021-06-01",
                  type: "milestone"
                }
              ]
            };
          }
        }
      );

      const ganttChart = document.querySelector("smart-gantt-chart"),
        button = document.getElementById("showDataSource"),
        log = document.getElementById("log");
      button.addEventListener("click", function() {
        log.innerHTML = JSON.stringify(ganttChart.dataSource, null, 4);
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

.log {
  overflow: auto;
  height: 70vh;
}
</style>
