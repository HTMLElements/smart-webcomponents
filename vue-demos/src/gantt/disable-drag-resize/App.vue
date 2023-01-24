<template>
  <div class="vue-root">
    <b>Description:</b>
    <pre><b>Task 1</b> - drag and resize is disabled.</pre>
    <pre><b>Task 1.1</b> - resize is disabled.</pre>
    <pre><b>Task 1.2</b> - drag is disabled.</pre>
    <pre><b>Task 2</b> - resize is disabled.</pre>
    <smart-gantt-chart></smart-gantt-chart>
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
      document.querySelector("smart-gantt-chart").dataSource = [
        {
          label: "Task 1",
          dateStart: "2020-3-10",
          dateEnd: "2021-6-10",
          disableDrag: true,
          disableResize: true,
          expanded: true,
          type: "project",
          tasks: [
            {
              label: "Task 1.1",
              disableResize: true,
              minDateStart: "2020-2-10",
              maxDateEnd: "2021-8-10",
              dateStart: "2020-2-10",
              dateEnd: "2021-4-10",
              type: "task"
            },
            {
              label: "Task 1.2",
              disableDrag: true,
              minDateStart: "2020-3-10",
              maxDateEnd: "2021-11-10",
              dateStart: "2020-3-10",
              dateEnd: "2021-6-10",
              type: "task"
            }
          ]
        },
        {
          label: "Task 2",
          disableResize: true,
          dateStart: "2021-6-21",
          dateEnd: "2021-12-10",
          type: "task"
        }
      ];
    });
  }
};
</script>

<style>
smart-gantt-chart {
  height: 200px;
}
</style>
