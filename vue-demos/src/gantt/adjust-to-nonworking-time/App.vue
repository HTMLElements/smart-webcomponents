<template>
  <div class="vue-root">
    <smart-gantt-chart id="gantt"></smart-gantt-chart>
    <div class="options">
      <h3>Adjust To Nonworking Time</h3>
      <div class="option">
        <p>
          The <b>adjustToNonworkingTime</b> determines whether the tasks are
          displayed according to the working time inside the Timeline. By
          default the proeprty is disabled and tasks are displayed according to
          the calendar time inside the timeline. When enabled, the
          <b>dateEnd</b> of the tasks is recalculated according to the duration
          in working time only. Work time is determined by the
          <b>nonworkingDays</b> and <b>nonwokringHours</b> properties.
        </p>
      </div>
      <div class="option">
        <p>
          Click on the button to enable or disable the adjustment to working
          time
        </p>
        <smart-button id="adjust">Click To Enable</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
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
              nonworkingDays: [0, 6],
              nonworkingHours: [[18, 6]],
              durationUnit: "day",
              view: "week",
              treeSize: "25%",
              disableSelection: true,
              keyboardNavigation: true,
              taskColumns: [
                {
                  label: "Tasks",
                  value: "label",
                  size: "40%",
                },
                {
                  label: "Expected End Date",
                  value: "dateEnd",
                },
                {
                  label: "Duration (days)",
                  value: "duration",
                },
              ],
              dataSource: [
                {
                  label: "Review announcement blog",
                  dateStart: "2021-01-10",
                  dateEnd: "2021-01-15",
                },
                {
                  label: "Company dogs email newsletter",
                  dateStart: "2021-01-01",
                  dateEnd: "2021-01-05",
                },
                {
                  label: "Launch new home page",
                  dateStart: "2021-01-11",
                  dateEnd: "2021-01-16",
                },
                {
                  label: "Establish Mars Colony",
                  dateStart: "2021-01-17",
                  dateEnd: "2021-01-19",
                },
                {
                  label: "Choose flight menu",
                  dateStart: "2021-01-02",
                  dateEnd: "2021-01-06",
                },
                {
                  label: "Find crew",
                  dateStart: "2021-01-01",
                  dateEnd: "2021-01-10",
                },
                {
                  label: "Test hibernation boxes",
                  dateStart: "2021-01-24",
                  dateEnd: "2021-01-28",
                },
              ],
            };
          }
        }
      );

      const ganttChart = document.querySelector("smart-gantt-chart"),
        button = document.getElementById("adjust");
      button.addEventListener("click", function () {
        ganttChart.adjustToNonworkingTime = !ganttChart.adjustToNonworkingTime;
        button.innerHTML =
          "Click to " +
          (ganttChart.adjustToNonworkingTime ? "Disable" : "Enable");
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

@media only screen and (max-width: 600px) {
  .smart-gantt-chart {
    width: 100%;
  }
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
