<template>
  <div class="vue-root">
    <p>
      <b>Description:</b> Custom Task Columns with custom content.
    </p>
    <smart-gantt-chart view="day"></smart-gantt-chart>
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
      const ganttChart = document.querySelector("smart-gantt-chart");
      ganttChart.treeSize = "25%";
      ganttChart.dataSource = [
        {
          label: "Learn",
          dateStart: "2021-02-11T7:00:00",
          dateEnd: "2021-02-11T12:00:00",
          type: "task",
          connections: [
            {
              target: 1,
              type: 1
            }
          ]
        },
        {
          label: "Work",
          dateStart: "2021-02-11T7:00:00",
          dateEnd: "2021-02-11T17:30:00",
          type: "task",
          connections: [
            {
              target: 3,
              type: 1
            }
          ]
        },
        {
          label: "Eat",
          dateStart: "2021-02-11T12:00:00",
          dateEnd: "2021-02-11T13:00:00",
          type: "task"
        },
        {
          label: "Shop",
          dateStart: "2021-02-11T18:45:00",
          dateEnd: "2021-02-11T19:30:00",
          type: "task",
          connections: [
            {
              target: 5,
              type: 1
            }
          ]
        },
        {
          label: "Train",
          dateStart: "2021-02-11T20:00:00",
          dateEnd: "2021-02-11T21:45:00",
          progress: 50,
          type: "task"
        },
        {
          label: "Travel",
          dateStart: "2021-02-11T23:00:00",
          dateEnd: "2021-02-12T06:00:00"
        }
      ];
      ganttChart.taskColumns = [
        {
          label: "Labels",
          value: "label",
          //Column min size
          size: "25%",
          //Column size
          min: "30%",
          //Custom format function
          formatFunction: function(label) {
            if (label === "Learn") {
              return ' <i class="material-icons">&#xE80C;</i>' + label;
            } else if (label === "Work") {
              return ' <i class="material-icons">&#xE30A;</i>' + label;
            } else if (label === "Travel") {
              return ' <i class="material-icons">&#xE53D;</i>' + label;
            } else if (label === "Eat") {
              return ' <i class="material-icons">&#xE56C;</i>' + label;
            } else if (label === "Shop") {
              return ' <i class="material-icons">&#xE25C;</i>' + label;
            } else if (label === "Train") {
              return ' <i class="material-icons">&#xE52F;</i>' + label;
            } else {
              return label;
            }
          }
        },
        {
          label: "Date Start",
          value: "dateStart",
          //Custom format function
          formatFunction: date =>
            new Date(date).toLocaleDateString(ganttChart.locale, {
              hour: "2-digit",
              minute: "2-digit"
            }),
          min: 100
        },
        {
          label: "Date End",
          value: "dateEnd",
          size: "25%",
          min: "30%"
        }
      ];
    });
  }
};
</script>

<style>
/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: inherit;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

.material-icons {
  margin-right: 10px;
}

smart-gantt-chart {
  height: auto;
}
</style>
