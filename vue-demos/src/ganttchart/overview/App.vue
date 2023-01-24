<template>
  <smart-gantt-chart id="ganttchart"></smart-gantt-chart>
</template>

<script>
// import "smart-webcomponents/source/smart.elements.js";
import 'smart-webcomponents/source/modules/smart.ganttchart.js';
import "smart-webcomponents/source/styles/smart.default.css";

export default {
  name: "app",
  mounted: function() {
    Smart(
      "#ganttchart",
      class {
        get properties() {
          return {
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
                dateStart: "2019-01-10",
                dateEnd: "2019-02-10",
                class: "product-team",
                type: "task"
              },
              {
                label: "Persona & Journey",
                dateStart: "2019-02-11",
                dateEnd: "2019-03-10",
                class: "marketing-team",
                type: "task"
              },
              {
                label: "Architecture",
                dateStart: "2019-03-11",
                dateEnd: "2019-04-1",
                class: "product-team",
                type: "task"
              },
              {
                label: "Prototyping",
                dateStart: "2019-04-02",
                dateEnd: "2019-05-01",
                class: "dev-team",
                type: "task"
              },
              {
                label: "Design",
                dateStart: "2019-05-02",
                dateEnd: "2019-06-31",
                class: "design-team",
                type: "task"
              },
              {
                label: "Development",
                dateStart: "2019-07-01",
                dateEnd: "2019-08-10",
                class: "dev-team",
                type: "task"
              },
              {
                label: "Testing & QA",
                dateStart: "2019-08-11",
                dateEnd: "2019-09-10",
                class: "qa-team",
                type: "task"
              },
              {
                label: "UAT Test",
                dateStart: "2019-09-12",
                dateEnd: "2019-10-01",
                class: "product-team",
                type: "task"
              },
              {
                label: "Handover & Documentation",
                dateStart: "2019-10-02",
                dateEnd: "2019-11-01",
                class: "marketing-team",
                type: "task"
              },
              {
                label: "Release",
                dateStart: "2019-11-01",
                dateEnd: "2019-12-31",
                class: "release-team",
                type: "task"
              }
            ]
          };
        }
      }
    );
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
