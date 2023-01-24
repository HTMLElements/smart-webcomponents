<template>
  <div class="vue-root">
    <smart-gantt-chart id="gantt"></smart-gantt-chart>
    <div class="options">
      <div class="description">
        <p>
          Gantt Chart can be sorted by columns by clicking on the header of the
          desired column. The first click on the header will sort the Tasks in 'ascending'
          order. Second click will sort them in 'descending' and the third will remove
          the sorting.
        </p>Enable/Disable Multi Column Sorting from the Checkbox:
      </div>
      <div class="option">
        <smart-check-box>Multi Column Sorting</smart-check-box>
      </div>
      <div class="option">
        <smart-button id="sort">Sort</smart-button>
      </div>
      <div class="option">
        <smart-button id="clearSort">Clear Sort</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
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
              sortable: true,
              treeSize: "30%",
              durationUnit: "hour",
              taskColumns: [
                {
                  label: "Tasks",
                  value: "label",
                  sort: "asc",
                  size: "60%"
                },
                {
                  label: "Duration (hours)",
                  value: "duration",
                  formatFunction: date => parseInt(date)
                }
              ],
              resourceColumns: [
                {
                  label: "Tasks",
                  value: "label",
                  sort: "asc",
                  size: "60%"
                },
                {
                  label: "Work Time (hours)",
                  value: "workload",
                  size: "20%"
                },
                {
                  label: "Progress",
                  value: "progress"
                }
              ],
              dataSource: [
                {
                  label: "Project A",
                  dateStart: "2021-01-10",
                  dateEnd: "2021-03-10",
                  type: "project",
                  expanded: true,
                  synchronized: true,
                  tasks: [
                    {
                      label: "Task Z",
                      dateStart: "2021-03-01",
                      duration: 1500,
                      progress: 30,
                      connections: [
                        {
                          target: 2,
                          type: 1
                        }
                      ],
                      resources: [
                        {
                          id: "resource1",
                          label: "Resource 1"
                        },
                        {
                          id: "resource2",
                          label: "Resource 2"
                        }
                      ]
                    },
                    {
                      label: "Task Y",
                      dateStart: "2021-04-11",
                      duration: 1500
                    }
                  ]
                },
                {
                  label: "Task C",
                  dateStart: "2021-05-17",
                  duration: 1000,
                  progress: 45,
                  connections: [
                    {
                      target: 4,
                      type: 1
                    }
                  ],
                  resources: [
                    {
                      id: "resource3",
                      label: "Resource 3"
                    },
                    {
                      id: "resource4",
                      label: "Resource 4"
                    }
                  ]
                },
                {
                  label: "Task D",
                  dateStart: "2021-07-02",
                  duration: 1000,
                  progress: 20,
                  connections: [
                    {
                      target: 5,
                      type: 1
                    }
                  ]
                },
                {
                  label: "Task E",
                  dateStart: "2021-08-01",
                  dateEnd: "2021-09-10",
                  progress: 50,
                  resources: [
                    {
                      id: "resource5",
                      label: "Resource 5"
                    }
                  ]
                },
                {
                  label: "Project B",
                  dateStart: "2021-09-11",
                  dateEnd: "2021-10-10",
                  type: "project",
                  expanded: true,
                  synchronized: true,
                  tasks: [
                    {
                      label: "Task A",
                      dateStart: "2021-10-12",
                      dateEnd: "2021-11-11",
                      connections: [
                        {
                          target: 8,
                          type: 1
                        }
                      ]
                    },
                    {
                      label: "Task C",
                      dateStart: "2021-10-17",
                      dateEnd: "2021-11-31",
                      connections: [
                        {
                          target: 9,
                          type: 1
                        }
                      ]
                    },
                    {
                      label: "Task B",
                      dateStart: "2021-11-01",
                      dateEnd: "2021-12-31",
                      progress: 10,
                      resources: [
                        {
                          id: "resource6",
                          label: "Resource 6"
                        }
                      ]
                    }
                  ]
                }
              ]
            };
          }
        }
      );

      const ganttChart = document.querySelector("smart-gantt-chart");
      document
        .querySelector("smart-check-box")
        .addEventListener("change", function() {
          ganttChart.sortMode = this.checked ? "many" : "one";
        });
      document.querySelector("#sort").addEventListener("click", function() {
        ganttChart.sort([
          {
            value: "duration",
            sortOrder: "asc",
            type: "task"
          },
          {
            value: "progress",
            sortOrder: "asc",
            type: "resource"
          }
        ]);
      });
      document
        .querySelector("#clearSort")
        .addEventListener("click", function() {
          ganttChart.sort();
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
