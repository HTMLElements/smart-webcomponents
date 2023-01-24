<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
    <div class="options">
      <div class="description">
        Tuesday and Thursday have been set as nonworking days.
      </div>
      <div class="option">
        <smart-check-box id="hideNonworkingWeekdays"
          >Hide Nonworking weekdays</smart-check-box
        >
      </div>
      <div class="option">
        <smart-check-box id="hideWeekend">Hide Weekend</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="hideAllDay">Hide All day</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
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
            label: "Apple Marketing Strategy",
            dateStart: new Date(currentYear, currentMonth, todayDate - 1),
            dateEnd: new Date(currentYear, currentMonth, todayDate + 1),
            backgroundColor: "#FF5722",
          },
          {
            label: "Google AdWords Strategy",
            dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
            dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
            backgroundColor: "#7CB342",
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
            backgroundColor: "#2196F3",
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
            backgroundColor: "#FFD600",
          },
        ];

      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              dataSource: data,
              view: "week",
              views: ["week", "month"],
              nonworkingDays: [2, 4]
            };
          }
        }
      );

      const scheduler = document.querySelector("smart-scheduler"),
        hideAllDayButton = document.getElementById("hideAllDay");

      scheduler.addEventListener("viewChange", function (event) {
        const view = event.detail.value;
        hideAllDayButton.classList[view === "month" ? "add" : "remove"](
          "smart-hidden"
        );
      });

      document
        .querySelector(".options")
        .addEventListener("change", function (event) {
          if (!(event.target instanceof window.Smart.CheckBox)) {
            return;
          }
          scheduler[event.target.id] = event.target.checked;
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
