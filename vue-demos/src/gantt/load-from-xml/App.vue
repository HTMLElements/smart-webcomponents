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
      window.Smart(
        "#ganttChart",
        class {
          get properties() {
            return {
              view: "week",
              durationUnit: "day",
              taskColumns: [
                {
                  label: "Employee",
                  value: "label"
                }
              ]
            };
          }
        }
      );

      //const gantt = document.querySelector("smart-gantt-chart");
      // Ajax({
      //     url: '../../../sampledata/gantt/data.xml',
      //     type: 'GET',
      //     dataType: 'xml'
      // }, {
      //     loadComplete: function (data, status) {
      //         console.clear();
      //         console.log(data);
      //         xmlToJson(data);
      //     },
      //     loadError: function (status: number, error: string) {
      //         console.clear();
      //         console.log(error);
      //     }
      // });
      // xmlToJson(xmlText: string) {
      //     const domParser = new DOMParser(),
      //         doc = domParser.parseFromString(xmlText, 'text/xml');
      // }
    });
  }
};
</script>

<style>
smart-gantt-chart {
  height: auto;
}

smart-gantt-chart[theme="dark"] {
  --smart-gantt-chart-task-label-color: black;
  --smart-gantt-chart-task-thumb-color: white;
}

smart-gantt-chart .morning-shift {
  --smart-gantt-chart-task-color: rgb(56, 181, 216);
}

smart-gantt-chart .half-day {
  --smart-gantt-chart-task-color: rgb(245, 174, 0);
}

smart-gantt-chart .early-morning-support {
  --smart-gantt-chart-task-color: rgb(255, 144, 166);
}

smart-gantt-chart .afternoon-shift {
  --smart-gantt-chart-task-color: rgb(34, 177, 141);
}
</style>
