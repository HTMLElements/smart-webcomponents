<template>
  <div class="vue-root">
    <div class="demo-description">
      Gantt's "autoScroll" is enabled. When dragging "autoScrollStep" determines
      the speed at which the view will be scrolled. Drag a Task Bar outside of
      view to see the behavior.
    </div>
    <smart-gantt-chart auto-scroll-step="5"></smart-gantt-chart>
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
          label: "Project 1",
          dateStart: "2020-3-10",
          dateEnd: "2021-6-10",
          type: "project",
          expanded: true,
          tasks: [
            {
              label: "Task 1.1",
              dateStart: "2020-5-10",
              dateEnd: "2021-4-10",
              type: "task"
            },
            {
              label: "Task 1.2",
              dateStart: "2020-3-27",
              dateEnd: "2021-6-10",
              type: "task"
            },
            {
              label: "Milestone 1",
              dateEnd: "2021-3-15",
              type: "milestone"
            }
          ]
        },
        {
          label: "Task 2",
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
  width: 100%;
  height: 250px;
}
</style>
