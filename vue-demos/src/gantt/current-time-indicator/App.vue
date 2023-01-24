<template>
  <div class="vue-root">
    <smart-gantt-chart id="gantt"></smart-gantt-chart>
    <div class="options">
      <div class="option">
        <h4>Current Time Indicator:</h4>
        <smart-switch-button
          id="currentTimeIndicator"
          checked
        ></smart-switch-button>
      </div>
      <div class="option">
        <h4>Shade Untill Current Time:</h4>
        <smart-switch-button
          id="shadeUntilCurrentTime"
          checked
        ></smart-switch-button>
      </div>
      <div class="option">
        <h4>Current Time Indicator/Shader Update Interval:</h4>
        <smart-number-input
          id="currentTimeIndicatorInterval"
          value="60"
          min="1"
        ></smart-number-input>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.ganttchart.js";
import "smart-webcomponents/source/modules/smart.numberinput.js";
import "smart-webcomponents/source/modules/smart.switchbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth(),
        date = today.getDate();
      window.Smart(
        "#gantt",
        class {
          get properties() {
            return {
              view: "week",
              shadeUntilCurrentTime: true,
              currentTimeIndicator: true,
              currentTimeIndicatorInterval: 60,
              dateStart: new Date(year, month, date - 3),
              dateEnd: new Date(year, month, date + 9),
              taskColumns: [
                {
                  label: "Tasks",
                  value: "label",
                },
              ],
              dataSource: [
                {
                  label: "PRD & User-Stories",
                  dateStart: new Date(year, month, date - 2),
                  dateEnd: new Date(year, month, date - 1),
                  class: "product-team",
                  type: "task",
                },
                {
                  label: "Persona & Journey",
                  dateStart: new Date(year, month, date - 1),
                  dateEnd: new Date(year, month, date),
                  class: "marketing-team",
                  type: "task",
                },
                {
                  label: "Architecture",
                  dateStart: new Date(year, month, date),
                  dateEnd: new Date(year, month, date + 1),
                  class: "product-team",
                  type: "task",
                },
                {
                  label: "Prototyping",
                  dateStart: new Date(year, month, date + 1),
                  dateEnd: new Date(year, month, date + 2),
                  class: "dev-team",
                  type: "task",
                },
                {
                  label: "Design",
                  dateStart: new Date(year, month, date + 2),
                  dateEnd: new Date(year, month, date + 3),
                  class: "design-team",
                  type: "task",
                },
                {
                  label: "Development",
                  dateStart: new Date(year, month, date + 3),
                  dateEnd: new Date(year, month, date + 4),
                  class: "dev-team",
                  type: "task",
                },
                {
                  label: "Testing & QA",
                  dateStart: new Date(year, month, date + 4),
                  dateEnd: new Date(year, month, date + 5),
                  class: "qa-team",
                  type: "task",
                },
                {
                  label: "UAT Test",
                  dateStart: new Date(year, month, date + 5),
                  dateEnd: new Date(year, month, date + 6),
                  class: "product-team",
                  type: "task",
                },
                {
                  label: "Handover & Documentation",
                  dateStart: new Date(year, month, date + 6),
                  dateEnd: new Date(year, month, date + 7),
                  class: "marketing-team",
                  type: "task",
                },
                {
                  label: "Release",
                  dateStart: new Date(year, month, date + 7),
                  dateEnd: new Date(year, month, date + 8),
                  class: "release-team",
                  type: "task",
                },
              ],
            };
          }
        }
      );

      const ganttChart = document.querySelector("smart-gantt-chart");

      document
        .querySelector(".options")
        .addEventListener("change", function (event) {
          const target = event.target;
          if (target.id === "currentTimeIndicator") {
            ganttChart.currentTimeIndicator = event.target.checked;
            return;
          }
          if (target.id === "shadeUntilCurrentTime") {
            ganttChart.shadeUntilCurrentTime = event.target.checked;
            return;
          }
          if (target instanceof window.Smart.NumberInput) {
            ganttChart[target.id] = parseInt(event.target.value);
          }
        });
    });
  },
};
</script>

<style>
.smart-gantt-chart {
  width: calc(100% - 300px);
  height: auto;
}

@media (max-width: 750px) {
  .smart-gantt-chart {
    width: 100%;
  }
}

.smart-gantt-chart .product-team {
  --smart-gantt-chart-task-color: rgb(94, 99, 181);
  --smart-gantt-chart-task-label-color: white;
  --smart-gantt-chart-task-label-color-selected: white;
}

.smart-gantt-chart .marketing-team {
  --smart-gantt-chart-task-color: rgb(43, 195, 190);
}

.smart-gantt-chart .dev-team {
  --smart-gantt-chart-task-color: rgb(242, 115, 112);
  --smart-gantt-chart-task-label-color: white;
  --smart-gantt-chart-task-label-color-selected: white;
}

.smart-gantt-chart .design-team {
  --smart-gantt-chart-task-color: rgb(255, 197, 53);
}

.smart-gantt-chart .qa-team {
  --smart-gantt-chart-task-color: rgb(99, 181, 144);
}

.smart-gantt-chart .release-team {
  --smart-gantt-chart-task-color: rgb(188, 150, 223);
  --smart-gantt-chart-task-label-color: white;
}

.options {
    padding: 20px;
    background-color: rgba(191, 191, 191, .15);
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 260px
}

@media (max-width: 750px) {
    .options {
        position: relative;
        top: 30px;
        width: 240px;
        margin: 0 auto;
    }
}
</style>
