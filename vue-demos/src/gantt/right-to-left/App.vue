<template>
  <div class="vue-root">
    <div class="demo-description">
      Gantt Chart fully supports right-to-left (RTL) language locales. You can
      enable/disable the right-to-left support using rightToLeft property.
    </div>
    <smart-gantt-chart right-to-left view="month" locale="he"></smart-gantt-chart>
    <div class="options">
      <h3>Gantt Right To Left</h3>
      <div class="option">
        <smart-check-box checked>Right To Left</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.ganttchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const ganttChart = document.querySelector("smart-gantt-chart"),
        messages = Object.assign({}, ganttChart.messages);
      messages["he"] = {
        noId: "smartGanttChart דורש מזהה כדי לשמור / לטעון / לנקות מצב.",
        ok: "בסדר",
        cancel: "בטל",
        delete: "מחק",
        confirm: "{{componentName}} יימחק לצמיתות, <b> האם אתה בטוח? </b>",
        taskColumnLabel: "שם המטלה",
        label: "תווית",
        deleteLink: "מחק קישור"
      };
      ganttChart.messages = messages;
      ganttChart.dataSource = [
        {
          type: "project",
          label: "פרוייקט 1",
          dateStart: "2021-5-2",
          duration: 60 * 24 * 60 * 60 * 1000,
          expanded: true,
          connections: [
            {
              target: 1,
              type: 0
            }
          ],
          tasks: [
            {
              type: "task",
              label: "משימה 1.1",
              dateStart: "2021-5-5",
              duration: 10 * 24 * 60 * 60 * 1000,
              connections: [
                {
                  target: 2,
                  type: 1
                }
              ]
            },
            {
              type: "task",
              label: "משימה 1.2",
              dateStart: "2021-5-16",
              duration: 12 * 24 * 60 * 60 * 1000,
              connections: [
                {
                  target: 3,
                  type: 1
                }
              ]
            },
            {
              type: "milestone",
              label: "אבן דרך 1",
              dateStart: "2021-6-1",
              connections: [
                {
                  target: 4,
                  type: 1
                }
              ]
            },
            {
              type: "task",
              label: "משימה 1.3",
              dateStart: "2021-6-2",
              duration: 90 * 24 * 60 * 60 * 1000 //90 days in miliseconds
            }
          ]
        },
        {
          type: "project",
          label: "פרויקט 2",
          dateStart: "2021-10-1",
          duration: 60 * 24 * 60 * 60 * 1000,
          expanded: true,
          connections: [
            {
              target: 6,
              type: 0
            }
          ],
          tasks: [
            {
              type: "task",
              label: "משימה 2.1",
              dateStart: "2021-10-2",
              duration: 15 * 24 * 60 * 60 * 1000,
              connections: [
                {
                  target: 7,
                  type: 0
                }
              ]
            },
            {
              type: "task",
              label: "משימה 2.2",
              dateStart: "2021-10-2",
              duration: 10 * 24 * 60 * 60 * 1000,
              connections: [
                {
                  target: 8,
                  type: 1
                }
              ]
            },
            {
              type: "task",
              label: "משימה 2.3",
              dateStart: "2021-11-1",
              duration: 45 * 24 * 60 * 60 * 1000 //45 days in miliseconds
            }
          ]
        }
      ];
      document
        .querySelector("smart-check-box")
        .addEventListener("change", function(event) {
          ganttChart.rightToLeft = event.detail.value;
        });
    });
  }
};
</script>

<style>
smart-gantt-chart {
  width: calc(100% - 300px);
  height: auto;
}
@media (max-width: 700px) {
  smart-gantt-chart {
    width: 95%;
    margin-left: 2%;
  }
}
</style>
