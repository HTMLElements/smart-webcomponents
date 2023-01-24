<template>
  <div class="vue-root">
    <smart-gantt-chart id="gantt"></smart-gantt-chart>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
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
              taskColumns: [
                {
                  label: "Tasks",
                  value: "label",
                  size: "60%"
                },
                {
                  label: "Duration (hours)",
                  value: "duration",
                  formatFunction: date => parseInt(date)
                }
              ],
              dataSource: [
                {
                  label: "PRD & User-Stories",
                  dateStart: "2021-01-10",
                  dateEnd: "2021-03-10",
                  class: "product-team",
                  type: "task"
                },
                {
                  label: "Persona & Journey",
                  dateStart: "2021-03-01",
                  dateEnd: "2021-04-30",
                  class: "marketing-team",
                  type: "task"
                },
                {
                  label: "Architecture",
                  dateStart: "2021-04-11",
                  dateEnd: "2021-05-16",
                  class: "product-team",
                  type: "task"
                },
                {
                  label: "Prototyping",
                  dateStart: "2021-05-17",
                  dateEnd: "2021-07-01",
                  class: "dev-team",
                  type: "task"
                },
                {
                  label: "Design",
                  dateStart: "2021-07-02",
                  dateEnd: "2021-08-01",
                  class: "design-team",
                  type: "task"
                },
                {
                  label: "Development",
                  dateStart: "2021-08-01",
                  dateEnd: "2021-09-10",
                  class: "dev-team",
                  type: "task"
                },
                {
                  label: "Testing & QA",
                  dateStart: "2021-09-11",
                  dateEnd: "2021-10-10",
                  class: "qa-team",
                  type: "task"
                },
                {
                  label: "UAT Test",
                  dateStart: "2021-10-12",
                  dateEnd: "2021-11-11",
                  class: "product-team",
                  type: "task"
                },
                {
                  label: "Handover & Documentation",
                  dateStart: "2021-10-17",
                  dateEnd: "2021-11-31",
                  class: "marketing-team",
                  type: "task"
                },
                {
                  label: "Release",
                  dateStart: "2021-11-01",
                  dateEnd: "2021-12-31",
                  class: "release-team",
                  type: "task"
                }
              ]
            };
          }
        }
      );
    });
  }
};
</script>

<style>
smart-gantt-chart {
  height: auto;
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
</style>
