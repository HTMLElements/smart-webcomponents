<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
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
              footerTemplate: function (footerContainer) {
                if (footerContainer.querySelector(".custom-footer")) {
                  return;
                }
                const customFooter = document.createElement("div");
                customFooter.classList.add("custom-footer");
                customFooter.addEventListener("change", function (event) {
                  const target = event.target;
                  if (target instanceof window.Smart.RadioButton) {
                    const scheduler = document.querySelector("smart-scheduler"),
                      schedulerClassList = scheduler.classList;
                    //Remove previous classes
                    Array.from(schedulerClassList).forEach((c) => {
                      if (c.indexOf("color-") > -1) {
                        schedulerClassList.remove(c);
                      }
                    });
                    schedulerClassList.add("color-" + target.id);
                  }
                });
                customFooter.innerHTML = `<label>Select an Event color:</label>
                    <smart-radio-button id="green">Green</smart-radio-button><smart-radio-button id="yellow">Yellow</smart-radio-button>
                    <smart-radio-button id="purple">Purple</smart-radio-button><smart-radio-button id="brown">Brown</smart-radio-button>`;
                footerContainer.appendChild(customFooter);
              },
            };
          }
        }
      );
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

#app,
.vue-root {
  width: 100%;
  height: 100%;
}

.smart-scheduler {
  width: 100%;
  height: 100%;
}

.custom-footer {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px;
}

.color-icon {
  width: 15px;
  color: transparent;
}

#green {
  --smart-background: rgb(51, 182, 121);
}

#yellow {
  --smart-background: rgb(246, 191, 38);
}

#purple {
  --smart-background: rgb(142, 36, 170);
}

#brown {
  --smart-background: rgb(97, 97, 97);
}

.color-green {
  --smart-scheduler-event-background-rgb: 51, 182, 121;
  --smart-scheduler-event-background: rgba(
    var(--smart-scheduler-event-background-rgb),
    1
  );
  --smart-scheduler-event-focus: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.9
  );
  --smart-scheduler-event-hover: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.8
  );
}

.color-yellow {
  --smart-scheduler-event-background-rgb: 246, 191, 38;
  --smart-scheduler-event-background: rgba(
    var(--smart-scheduler-event-background-rgb),
    1
  );
  --smart-scheduler-event-focus: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.9
  );
  --smart-scheduler-event-hover: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.8
  );
}

.color-purple {
  --smart-scheduler-event-background-rgb: 142, 36, 170;
  --smart-scheduler-event-background: rgba(
    var(--smart-scheduler-event-background-rgb),
    1
  );
  --smart-scheduler-event-focus: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.9
  );
  --smart-scheduler-event-hover: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.8
  );
}

.color-brown {
  --smart-scheduler-event-background-rgb: 97, 97, 97;
  --smart-scheduler-event-background: rgba(
    var(--smart-scheduler-event-background-rgb),
    1
  );
  --smart-scheduler-event-focus: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.9
  );
  --smart-scheduler-event-hover: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.8
  );
}
</style>
