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
              view: "day",
              treeSize: "25%",
              durationUnit: "hour",
              taskColumns: [
                {
                  label: "Employee",
                  value: "label",
                },
                {
                  label: "From",
                  value: "dateStart",
                },
                {
                  label: "Office Time",
                  value: "duration",
                  size: "20%",
                },
              ],
              dataSource: [
                {
                  label: "Beth",
                  dateStart: "2021-11-1T07:30:00",
                  duration: 8,
                  class: "beth",
                  progress: 45,
                  segments: [
                    {
                      label: "Morning",
                      dateStart: "2021-11-1T07:30:00",
                      dateEnd: "2021-11-1T11:30:00",
                    },
                    {
                      label: "Afternoon",
                      dateStart: "2021-11-1T13:00:00",
                      dateEnd: "2021-11-1T17:30:00",
                    },
                  ],
                  indicators: [
                    {
                      label: "Lunch Break",
                      date: "2021-11-1T11:45:00",
                      className: "material-icons",
                      icon: "\\e56c",
                    },
                  ],
                },
                {
                  label: "William",
                  dateStart: "2021-11-1T08:00:00",
                  duration: 8,
                  class: "william",
                  progress: 25,
                  segments: [
                    {
                      label: "Morning",
                      dateStart: "2021-11-1T08:00:00",
                      dateEnd: "2021-11-1T12:00:00",
                    },
                    {
                      label: "Afternoon",
                      dateStart: "2021-11-1T13:15:00",
                      dateEnd: "2021-11-1T17:30:00",
                    },
                  ],
                  indicators: [
                    {
                      label: "Lunch Break",
                      date: "2021-11-1T12:15:00",
                      className: "material-icons",
                      icon: "\\ea64",
                    },
                  ],
                },
                {
                  label: "Emma",
                  dateStart: "2021-11-1T09:30:00",
                  duration: 9,
                  class: "emma",
                  progress: 50,
                  segments: [
                    {
                      dateStart: "2021-11-1T09:30:00",
                      dateEnd: "2021-11-1T12:00:00",
                    },
                    {
                      dateStart: "2021-11-1T13:30:00",
                      dateEnd: "2021-11-1T15:00:00",
                    },
                    {
                      dateStart: "2021-11-1T16:30:00",
                      dateEnd: "2021-11-1T18:00:00",
                    },
                  ],
                  indicators: [
                    {
                      label: "Preview Docs",
                      date: "2021-11-1T08:00:00",
                      className: "material-icons",
                      icon: "\\f040",
                      tooltip: "Preview the documents",
                    },
                    {
                      label: "Lunch Break",
                      date: "2021-11-1T12:15:00",
                      className: "material-icons",
                      icon: "\\f1e9",
                    },
                    {
                      label: "Metting",
                      date: "2021-11-1T15:15:00",
                      className: "material-icons",
                      icon: "\\f233",
                    },
                  ],
                },
                {
                  label: "Team Oliver",
                  synchronized: true,
                  class: "team-oliver",
                  expanded: true,
                  indicators: [
                    {
                      label: "Metting",
                      date: "2021-11-1T08:00:00",
                      className: "material-icons",
                      icon: "\\f233",
                      tooltip: "Lunch Break End",
                    },
                  ],
                  tasks: [
                    {
                      label: "Oliver",
                      dateStart: "2021-11-1T010:30:00",
                      duration: 7.5,
                      class: "oliver",
                      progress: 75,
                    },
                    {
                      label: "Jason",
                      dateStart: "2021-11-1T09:30:00",
                      duration: 9,
                      class: "jason",
                      progress: 15,
                    },
                    {
                      label: "Alex",
                      dateStart: "2021-11-1T09:00:00",
                      duration: 10,
                      class: "alex",
                      progress: 15,
                      indicators: [
                        {
                          label: "Lock",
                          date: "2021-11-1T19:10:00",
                          className: "material-icons",
                          icon: "\\e73c",
                          tooltip: "Remember to lock the office door",
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "Lucas",
                  dateStart: "2021-11-1T13:00:00",
                  duration: 4,
                  class: "lucas",
                  indicators: [
                    {
                      label: "Late",
                      date: "2021-11-1T12:00:00",
                      className: "material-icons",
                      icon: "\\e8b5",
                      tooltip: "Late for work",
                    },
                    {
                      label: "Early",
                      date: "2021-11-1T17:10:00",
                      className: "material-icons",
                      icon: "\\f1bb",
                      tooltip: "Left early today",
                    },
                  ],
                },
                {
                  label: "Michael",
                  dateStart: "2021-11-1T11:00:00",
                  duration: 8,
                  class: "michael",
                  indicators: [
                    {
                      date: "2021-11-1T10:30:00",
                      className: "material-icons",
                      icon: "\\e7fe",
                      tooltip: "The new guy",
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
  --smart-gantt-chart-task-label-color: white;
  --smart-gantt-chart-project-label-color: white;
  --smart-gantt-chart-project-label-color-selected: rgb(192, 248, 87);
  --smart-gantt-chart-task-label-color-selected: rgb(192, 248, 87);
}

.smart-gantt-chart .material-icons {
  --smart-font-family-icon: "Material Icons";
  --smart-font-size: 18px;
  font-feature-settings: "liga";
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

.smart-gantt-chart .beth {
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    rgb(95, 44, 130),
    rgb(73, 160, 157)
  );
}

.smart-gantt-chart .william {
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    rgb(236, 111, 102),
    rgb(243, 161, 131)
  );
}

.smart-gantt-chart .emma {
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    rgb(116, 116, 191),
    rgb(52, 138, 199)
  );
}

.smart-gantt-chart .team-oliver {
  --smart-gantt-chart-project-color: linear-gradient(
    to right,
    rgb(8, 80, 120),
    rgb(133, 216, 206)
  );
}

.smart-gantt-chart .oliver {
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    rgb(218, 226, 248),
    rgb(214, 164, 164)
  );
}

.smart-gantt-chart .jason {
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    rgb(19, 78, 94),
    rgb(113, 178, 128)
  );
}

.smart-gantt-chart .alex {
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    rgb(36, 198, 220),
    rgb(81, 74, 157)
  );
}

.smart-gantt-chart .lucas {
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    rgb(237, 66, 100),
    rgb(255, 237, 188)
  );
}

.smart-gantt-chart .michael {
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    rgb(117, 127, 154),
    rgb(215, 221, 232)
  );
}

/* ------------ Google fonts ------------ */

@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v115/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
    format("woff2");
}
</style>
