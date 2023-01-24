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
              infiniteTimeline: true,
              infiniteTimelineStep: 10,
              taskColumns: [
                {
                  label: "Tasks",
                  value: "label",
                  size: "60%",
                },
                {
                  label: "Expected End Date",
                  value: "dateEnd",
                },
              ],
              dataSource: [
                {
                  label: "PRD & User-Stories",
                  dateStart: "2021-01-10",
                  dateEnd: "2022-03-10",
                },
                {
                  label: "Persona & Journey",
                  dateStart: "2021-02-01",
                  dateEnd: "2022-03-30",
                },
                {
                  label: "Architecture",
                  dateStart: "2021-02-11",
                  dateEnd: "2022-05-16",
                },
                {
                  label: "Prototyping",
                  dateStart: "2021-01-17",
                  dateEnd: "2022-05-01",
                },
                {
                  label: "Design",
                  dateStart: "2021-06-02",
                  dateEnd: "2022-08-01",
                },
                {
                  label: "Development",
                  dateStart: "2021-08-01",
                  dateEnd: "2022-09-10",
                },
                {
                  label: "Testing & QA",
                  dateStart: "2021-09-11",
                  dateEnd: "2022-12-10",
                },
              ],
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
}
</style>
