<template>
  <div class="vue-root">
    <div class="scheduler-container">
      <smart-scheduler id="scheduler"></smart-scheduler>
      <smart-scheduler id="scheduler2"></smart-scheduler>
    </div>
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
            dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 10, 30),
            allDay: true,
            backgroundColor: "#3F51B5",
          },
          {
            label: "New Brochures",
            dateStart: new Date(
              currentYear,
              currentMonth,
              todayDate + 1,
              11,
              30
            ),
            dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 14, 15),
            backgroundColor: "#F4511E",
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
            backgroundColor: "#7986CB",
          },
          {
            label: "Rollout of New Website and Marketing Brochures",
            dateStart: new Date(
              currentYear,
              currentMonth,
              todayDate - 2,
              8,
              15
            ),
            dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 10, 45),
            backgroundColor: "#E67C73",
          },
          {
            label: "Update Sales Strategy Documents",
            dateStart: new Date(currentYear, currentMonth, todayDate, 12, 0),
            dateEnd: new Date(currentYear, currentMonth, todayDate, 13, 45),
            backgroundColor: "#616161",
          },
          {
            label: "Non-Compete Agreements",
            dateStart: new Date(
              currentYear,
              currentMonth,
              todayDate - 3,
              8,
              15
            ),
            dateEnd: new Date(currentYear, currentMonth, todayDate - 2, 9, 0),
            backgroundColor: "#E67C73",
          },
        ],
        data2 = [
          {
            label: "Update Website Marketing Brochures",
            dateStart: new Date(
              currentYear,
              currentMonth,
              todayDate - 1,
              8,
              15
            ),
            dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 45),
            backgroundColor: "#880E4F",
          },
          {
            label: "Prepare Sales Strategy Papers",
            dateStart: new Date(currentYear, currentMonth, todayDate, 12, 0),
            dateEnd: new Date(currentYear, currentMonth, todayDate, 13, 45),
            backgroundColor: "#3F51B5",
          },
          {
            label: "Complete Agreements",
            dateStart: new Date(currentYear, currentMonth, todayDate + 1, 8, 0),
            dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 10, 0),
            backgroundColor: "#558B2F",
          },
          {
            label: "Approve Hiring of Mark Waterberg",
            dateStart: new Date(
              currentYear,
              currentMonth,
              todayDate + 2,
              10,
              0
            ),
            dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
            backgroundColor: "#00BFA5",
          },
          {
            label: "Reach NDA Agreement",
            dateStart: new Date(
              currentYear,
              currentMonth,
              todayDate - 2,
              11,
              45
            ),
            dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 13, 45),
            backgroundColor: "#004D40",
          },
        ];
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              view: "week",
              dataSource: data,
              views: ["day", "week", "month"],
              hourStart: 9,
              timelineDayScale: "halfHour"
            };
          }
        }
      );
      window.Smart(
        "#scheduler2",
        class {
          get properties() {
            return {
              //Properties
              dataSource: data2,
              view: "week",
              views: ["day", "week", "month"],
              hourStart: 9,
              timelineDayScale: "halfHour"
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

.scheduler-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 20px;
}

.smart-scheduler {
  height: 100vh;
  --smart-scheduler-view-item-size: 100px;
}

@media (max-width: 750px) {
  .scheduler-container {
    grid-template-columns: initial;
    grid-row-gap: 20px;
  }

  .smart-scheduler {
    height: 100vh;
    --smart-scheduler-view-item-size: 100px;
  }
}

#app,
.vue-root {
  height: 100%;
}
</style>
