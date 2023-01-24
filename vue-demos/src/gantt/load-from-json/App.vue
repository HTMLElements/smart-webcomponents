<template>
  <div class="vue-root">
    <div class="demo-description">
      The
      <b>DataSource</b> for the
      <b>Smart.GanttChart</b> is fetched via Ajax
      and loaded from an external
      <b>data.json</b> file during window.onload.
    </div>
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
              treeSize: 350,
              durationUnit: "day",
              taskColumns: [
                {
                  label: "Employee",
                  value: "label",
                  size: "50%"
                },
                {
                  label: "Start Time",
                  value: "dateStart"
                },
                {
                  label: "Duration",
                  value: "duration",
                  size: 30
                }
              ]
            };
          }
        }
      );

      const gantt = document.querySelector("smart-gantt-chart");
      fetch("../../../sampledata/gantt/data.json", {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(function(response) {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(function(data) {
          //Load the data as new DataSource
          gantt.dataSource = data;
        })
        .catch(function(error) {
          alert(error.message);
        });
    });
  }
};
</script>

<style>
smart-gantt-chart {
  height: auto;
  --smart-gantt-chart-task-default-height: 35px;
  --smart-gantt-chart-task-tree-splitter-bar-fit-size: calc(
    2 * var(--smart-gantt-chart-task-default-height)
  );
}
</style>
