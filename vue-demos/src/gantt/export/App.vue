<template>
  <div class="vue-root">
    <div class="demo-description">
      GanttChart's can be exported to a PDF or XLSX file via the
      <b>exportData</b> method
      by clicking on the corresponding button.
    </div>
    <smart-gantt-chart id="gantt"></smart-gantt-chart>
    <div class="options">
      <div class="option">
        <smart-button id="exportToXLSX">Export to XLSX</smart-button>
      </div>
      <div class="option">
        <smart-button id="exportToPDF">Export to PDF</smart-button>
      </div>
      <div class="option">
        <smart-button id="exportToHTML">Export to HTML</smart-button>
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
              treeSize: "30%",
              durationUnit: "hour",
              nonworkingHours: [0, 1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23],
              nonworkingDays: [0, 6],
              taskColumns: [
                {
                  label: "Tasks",
                  value: "label",
                  size: "50%"
                },
                {
                  label: "Date Start",
                  value: "dateStart",
                  size: "25%"
                },
                {
                  label: "Date End",
                  value: "dateEnd"
                }
              ],
              dataSource: [
                {
                  label: "Market Research",
                  dateStart: "2021-01-10",
                  dateEnd: "2021-03-10",
                  class: "product-team",
                  type: "project",
                  expanded: true,
                  tasks: [
                    {
                      label: "Questions and Answers",
                      dateStart: "2021-01-10",
                      dateEnd: "2021-02-10",
                      type: "task"
                    },
                    {
                      label: "Data Analysis",
                      dateStart: "2021-02-11",
                      dateEnd: "2021-03-09",
                      type: "task"
                    }
                  ]
                },
                {
                  label: "Architecture & Planning",
                  dateStart: "2021-03-10",
                  dateEnd: "2021-03-31",
                  class: "marketing-team",
                  type: "task"
                },
                {
                  label: "Developing",
                  dateStart: "2021-04-01",
                  dateEnd: "2021-10-31",
                  class: "product-team",
                  type: "project",
                  expanded: true,
                  tasks: [
                    {
                      label: "UI Designing",
                      dateStart: "2021-04-01",
                      dateEnd: "2021-08-31",
                      type: "task"
                    },
                    {
                      label: "Business Logic Coding",
                      dateStart: "2021-04-01",
                      dateEnd: "2021-10-01",
                      type: "project",
                      tasks: [
                        {
                          label: "Data Transfer and Security",
                          duration: 200,
                          type: "task"
                        },
                        {
                          label: "Data Manipulation",
                          duration: 400,
                          type: "task"
                        }
                      ]
                    },
                    {
                      label: "Database Connectivity",
                      dateStart: "2021-04-01",
                      dateEnd: "2021-05-30",
                      type: "task"
                    }
                  ]
                },
                {
                  label: "Quality Assurance",
                  dateStart: "2021-11-01",
                  dateEnd: "2021-12-31",
                  class: "dev-team",
                  type: "task"
                },
                {
                  label: "Release v1",
                  dateStart: "2022-01-01",
                  dateEnd: "2022-01-31",
                  class: "design-team",
                  type: "task"
                }
              ]
            };
          }
        }
      );

      const ganttChart = document.querySelector("smart-gantt-chart");
      document
        .getElementById("exportToXLSX")
        .addEventListener("click", function() {
          ganttChart.exportData("xlsx");
        });
      document
        .getElementById("exportToPDF")
        .addEventListener("click", function() {
          ganttChart.exportData("pdf");
        });
      document
        .getElementById("exportToHTML")
        .addEventListener("click", function() {
          ganttChart.exportData("html");
        });
    });
  }
};
</script>

<style>
smart-gantt-chart {
  width: calc(100% - 300px);
  height: auto;
}
@media only screen and (max-width: 600px) {
  .smart-gantt-chart {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 700px) {
  smart-gantt-chart {
    width: 95%;
    margin-left: 2%;
  }
}

smart-gantt-chart .product-team {
  --smart-gantt-chart-task-color: rgb(94, 99, 181);
  --smart-gantt-chart-task-label-color: white;
  --smart-gantt-chart-task-label-color-selected: white;
}

smart-gantt-chart .marketing-team {
  --smart-gantt-chart-task-color: rgb(43, 195, 190);
}

smart-gantt-chart .dev-team {
  --smart-gantt-chart-task-color: rgb(242, 115, 112);
  --smart-gantt-chart-task-label-color: white;
  --smart-gantt-chart-task-label-color-selected: white;
}

smart-gantt-chart .design-team {
  --smart-gantt-chart-task-color: rgb(255, 197, 53);
}

smart-gantt-chart .qa-team {
  --smart-gantt-chart-task-color: rgb(99, 181, 144);
}

smart-gantt-chart .release-team {
  --smart-gantt-chart-task-color: rgb(188, 150, 223);
  --smart-gantt-chart-task-label-color: white;
}

smart-button {
  width: 100%;
}
</style>
