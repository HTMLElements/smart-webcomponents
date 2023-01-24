<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
    <div class="options">
      <div class="option">
        <h4>Current Time Indicator Color:</h4>
        <smart-color-input
          drop-down-button-position="right"
          id="indicator"
          class="color-selector"
          value="#005c99"
        ></smart-color-input>
      </div>
      <div class="option">
        <h4>Time Shade Color:</h4>
        <smart-color-input
          drop-down-button-position="right"
          id="shader"
          class="color-selector"
          value="#f4e0e080"
        ></smart-color-input>
      </div>
      <div class="option">
        <h4>Day/Week Horizontal Line Size:</h4>
        <smart-input
          drop-down-button-position="right"
          id="line-horizontal"
          class="size-selector"
          data-source='["1","2","5"]'
          value="1"
          readonly
        ></smart-input>
      </div>
      <div class="option">
        <h4>Day/Week Vertical Line Size:</h4>
        <smart-input
          drop-down-button-position="right"
          id="line-vertical"
          class="size-selector"
          data-source='["1","2","5"]'
          value="1"
          readonly
        ></smart-input>
      </div>
      <div class="option">
        <h4>Day/Week Horizontal Line color:</h4>
        <smart-color-input
          drop-down-button-position="right"
          id="line-horizontal"
          class="color-selector"
          value="#464646"
        ></smart-color-input>
      </div>
      <div class="option">
        <h4>Day/Week Vertical Line color:</h4>
        <smart-color-input
          drop-down-button-position="right"
          id="line-vertical"
          class="color-selector"
          value="#464646"
        ></smart-color-input>
      </div>
      <div class="option">
        <h4>Show Time Ruler Ticks:</h4>
        <smart-switch-button id="timeRulerTicks"></smart-switch-button>
      </div>
      <div class="option">
        <h4>Show Current Time Indicator:</h4>
        <smart-switch-button id="currentTimeIndicator"></smart-switch-button>
      </div>
      <div class="option">
        <h4>Shade Until Current Time:</h4>
        <smart-switch-button id="shadeUntilCurrentTime"></smart-switch-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.input.js";
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
            label: "Apply Marketing Strategy",
            dateStart: new Date(currentYear, currentMonth, todayDate - 1, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, todayDate + 3, 0, 0),
            backgroundColor: "#F9A825",
          },
          {
            label: "Google AdWords Strategy",
            dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
            dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
            backgroundColor: "#FF3D00",
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
            backgroundColor: "#3F51B5",
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
            backgroundColor: "#616161",
          },
        ];

      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              dataSource: data,
              view: "week",
              views: ["day", "week", "month"],
              firstDayOfWeek: 1,
              hourStart: 7,
              hourEnd: 21,
              timelineDayScale: "halfHour"
            };
          }
        }
      );

      const scheduler = document.querySelector("smart-scheduler");

      scheduler.whenRendered(() => {
        scheduler.scrollToDate(new Date());
      });

      document
        .querySelector(".options")
        .addEventListener("change", function (event) {
          const target = event.target;

          if (target instanceof window.Smart.SwitchButton) {
            scheduler[target.id] = event.target.checked;
          } else if (target.classList.contains("size-selector")) {
            let size,
              type = target.id;

            scheduler.classList.remove(
              `${type}-size-small`,
              `${type}-size-medium`,
              `${type}-size-large`
            );

            switch (target.value) {
              case "1":
                size = "small";
                break;
              case "2":
                size = "medium";
                break;
              default:
                size = "large";
                break;
            }

            scheduler.classList.add(`${type}-size-${size}`);
          } else if (target.classList.contains("color-selector")) {
            const color = event.detail.value,
              type = target.id;

            switch (type) {
              case "indicator":
                scheduler.style.setProperty(
                  "--smart-scheduler-current-time-indicator-background",
                  color
                );
                return;
              case "line-horizontal":
                scheduler.style.setProperty(
                  "--smart-scheduler-day-week-view-hour-color",
                  color
                );
                return;
              case "line-vertical":
                scheduler.style.setProperty(
                  "--smart-scheduler-day-week-view-vertical-line-color",
                  color
                );
                return;
              case "shader":
                scheduler.style.setProperty(
                  "--smart-scheduler-shader-background",
                  color
                );
                return;
            }
          }
        });
    });
  }
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

.smart-scheduler.line-vertical-size-small {
  --smart-scheduler-day-week-view-vertical-line-size: 1px;
}

.smart-scheduler.line-horizontal-size-small {
  --smart-scheduler-day-week-view-hour-size: 1px;
}

.smart-scheduler.line-vertical-size-medium {
  --smart-scheduler-day-week-view-vertical-line-size: 2px;
}

.smart-scheduler.line-horizontal-size-medium {
  --smart-scheduler-day-week-view-hour-size: 2px;
}

.smart-scheduler.line-vertical-size-large {
  --smart-scheduler-day-week-view-vertical-line-size: 5px;
}

.smart-scheduler.line-horizontal-size-large {
  --smart-scheduler-day-week-view-hour-size: 5px;
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
