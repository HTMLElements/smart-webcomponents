<template>
  <div class="vue-root">
    <smart-gantt-chart id="ganttChart"></smart-gantt-chart>
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
      const gantt = document.querySelector("smart-gantt-chart");
      window.Smart(
        "#ganttChart",
        class {
          get properties() {
            return {
              view: "week",
              treeSize: "25%",
              durationUnit: "hour",
              hideTimelineHeaderDetails: true,
              timelineHeaderFormatFunction: (
                date,
                type,
                isHeaderDetailsContainer,
                dateValue
              ) => {
                if (!isHeaderDetailsContainer && type === "day") {
                  return date.toLocaleDateString(this.locale, {
                    day: "numeric",
                    month: "short",
                  });
                }
                return dateValue;
              },
              taskColumns: [
                {
                  label: "",
                  value: "overdue",
                },
                {
                  label: "Employee",
                  value: "label",
                },
                {
                  label: "From",
                  value: "dateStart",
                  formatFunction: (value, item) => {
                    return item.dateStart.toLocaleDateString("en", {
                      hour: "2-digit",
                      minute: "2-digit",
                    });
                  },
                },
                {
                  label: "Deadline",
                  value: "deadline",
                  formatFunction: (value, item) => {
                    if (!item.deadline) {
                      return "";
                    }
                    return new Date(value).toLocaleDateString("en", {
                      hour: "2-digit",
                      minute: "2-digit",
                    });
                  },
                },
              ],
              dataSource: [
                {
                  label: "Stage 1",
                  synchronized: true,
                  deadline: "2021-11-03",
                  expanded: true,
                  tasks: [
                    {
                      label: "Repairs",
                      dateStart: "2021-11-1T02:30:00",
                      duration: 9.5,
                      progress: 45,
                      deadline: "2021-11-1T11:00:00",
                    },
                    {
                      label: "Rally",
                      dateStart: "2021-11-1T13:30:00",
                      duration: 12,
                      deadline: "2021-11-02T03:00:00",
                    },
                    {
                      label: "Rankings Update",
                      dateStart: "2021-11-02T07:30:00",
                      duration: 8,
                      deadline: "2021-11-2T17:30:00",
                    },
                  ],
                },
                {
                  label: "Stage 2",
                  synchronized: true,
                  deadline: "2021-11-04:23:30:00",
                  expanded: true,
                  tasks: [
                    {
                      label: "Repairs & Optimizations",
                      dateStart: "2021-11-03T07:30:00",
                      duration: 6,
                      deadline: "2021-11-03T14:00:00",
                    },
                    {
                      label: "Stastics",
                      dateStart: "2021-11-04T07:30:00",
                      duration: 8,
                    },
                  ],
                },
                {
                  label: "Stage 3",
                  synchronized: true,
                  expanded: true,
                  tasks: [
                    {
                      label: "Preparation",
                      dateStart: "2021-11-05T06:30:00",
                      duration: 6,
                      deadline: "2021-11-05T12:00:00",
                    },
                    {
                      label: "Rally",
                      dateStart: "2021-11-05T013:00:00",
                      duration: 13,
                    },
                    {
                      label: "Final Rankings",
                      dateStart: "2021-11-06T7:30:00",
                      duration: 12,
                      deadline: "2021-11-06T23:30:00",
                    },
                    {
                      label: "Awards",
                      dateStart: "2021-11-07T06:00:00",
                      duration: 12,
                      deadline: "2021-11-08",
                    }
                  ]
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
.smart-gantt-chart {
  height: auto;
  --smart-gantt-chart-project-color: linear-gradient(
    to right,
    rgb(0, 0, 70),
    rgb(28, 181, 224)
  );
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    rgb(30, 19, 12),
    rgb(154, 132, 120)
  );
  --smart-gantt-chart-task-label-color: white;
  --smart-gantt-chart-project-label-color: white;
  --smart-gantt-chart-task-label-color-selected: rgb(192, 248, 87);
  --smart-gantt-chart-project-label-color-selected: rgb(192, 248, 87);
}
</style>
