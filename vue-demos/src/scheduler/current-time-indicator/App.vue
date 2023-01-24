<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
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
          v-bind:value="1"
          v-bind:min="1"
        ></smart-number-input>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.switchbutton.js";
import "smart-webcomponents/source/modules/smart.scheduler.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const today = new Date(),
        todayDate = today.getDate(),
        currentYear = today.getFullYear(),
        currentMonth = today.getMonth(),
        data = [
          {
            label: "Google AdWords Strategy",
            dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
            dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
            backgroundColor: "#E67C73",
          },
          {
            label: "New Brochures",
            dateStart: new Date(
              currentYear,
              currentMonth,
              todayDate - 1,
              11,
              30
            ),
            dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
            backgroundColor: "#8E24AA",
          },
          {
            label: "Brochure Design Review",
            dateStart: new Date(
              currentYear,
              currentMonth,
              todayDate + 2,
              13,
              15
            ),
            dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
            backgroundColor: "#039BE5",
          },
        ];

      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              dataSource: data,
              currentTimeIndicator: true,
              shadeUntilCurrentTime: true,
              view: "day",
              views: [
                "day",
                "week",
                "month",
                "timelineDay",
                "timelineWeek",
                "timelineMonth",
              ],
              firstDayOfWeek: 1,
            };
          }
        }
      );

      const scheduler = document.querySelector("smart-scheduler");

      scheduler.whenRendered(() => {
        scheduler.scrollToDate(new Date());
      });

      scheduler.addEventListener("viewChange", function () {
        scheduler.scrollToDate(new Date());
      });

      document
        .querySelector(".options")
        .addEventListener("change", function (event) {
          const target = event.target;
          if (target.id === "currentTimeIndicator") {
            scheduler.currentTimeIndicator = event.target.checked;
            return;
          }
          if (target.id === "shadeUntilCurrentTime") {
            scheduler.shadeUntilCurrentTime = event.target.checked;
            return;
          }
          if (target instanceof window.Smart.NumberInput) {
            scheduler[target.id] = parseInt(event.target.value);
          }
        });
    });
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.smart-scheduler {
  width: calc(100% - 300px);
  height: 100%;
}

@media (max-width: 750px) {
  .smart-scheduler {
    width: 100%;
  }
}

#app,
.vue-root {
  height: 100%;
}

.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 260px;
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
