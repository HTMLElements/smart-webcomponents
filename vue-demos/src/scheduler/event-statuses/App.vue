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
        currentDate = today.getDate(),
        currentYear = today.getFullYear(),
        currentMonth = today.getMonth();
      const data = [
        {
          label: "Website Re-Design Plan",
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate - 2,
            9,
            30
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 11, 30),
          status: "busy",
          backgroundColor: "#00C853",
        },
        {
          label: "Website Performance Optimization Plan",
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate - 3,
            8,
            30
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 10, 30),
          status: "busy",
          backgroundColor: "#8D6E63",
        },
        {
          label: "Book Flights to San Fran for Sales Trip",
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate - 1,
            10,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 0),
          status: "free",
          backgroundColor: "#0288D1",
        },
        {
          label: "Book Flights to Los Angeles for Business Trip",
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate - 4,
            10,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate - 4, 12, 30),
          status: "tentative",
          backgroundColor: "#D81B60",
        },
        {
          label: "Install New Router in Conference Room",
          dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
          dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 14, 30),
          status: "tentative",
          backgroundColor: "#F50057",
        },
        {
          label: "Add a new desk to the Dev Room",
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate - 1,
            12,
            30
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
          status: "outOfOffice",
          backgroundColor: "#F57F17",
        },
        {
          label: "Install New Router in Dev Room",
          dateStart: new Date(currentYear, currentMonth, currentDate, 13),
          dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
          status: "busy",
          backgroundColor: "#D500F9",
        },
        {
          label: "Approve Personal Computer Upgrade Plan",
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate + 1,
            10,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0),
          status: "free",
          backgroundColor: "#F57F17",
        },
        {
          label: "Final Budget Review",
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate + 1,
            12,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35),
          status: "busy",
          backgroundColor: "#2E7D32",
        },
        {
          label: "Old Brochures",
          dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 15, 15),
          backgroundColor: "#00BCD4",
        },
        {
          label: "New Brochures",
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate + 1,
            13,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15),
          backgroundColor: "#9575CD",
        },
        {
          label: "Install New Database",
          dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15),
          status: "tentative",
          backgroundColor: "#F57F17",
        },
        {
          label: "Approve New Online Marketing Strategy",
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate + 2,
            12,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
          status: "tentative",
          backgroundColor: "#E57373",
        },
        {
          label: "Upgrade Personal Computers",
          dateStart: new Date(currentYear, currentMonth, currentDate, 9),
          dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
          status: "free",
          backgroundColor: "#1976D2",
        },
        {
          label: "Prepare current Year Marketing Plan",
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate + 3,
            11,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 13, 30),
          status: "outOfOffice",
          backgroundColor: "#66BB6A",
        },
        {
          label: "Prepare current Year Marketing Plan",
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate + 4,
            11,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 30),
          status: "outOfOffice",
          backgroundColor: "#FF7043",
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
              views: ["week"],
              timelineDayScale: "halfHour",
              hourStart: 7,
              hourEnd: 17
            };
          }
        }
      );
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
  width: 100%;
  height: 100%;
}

#app,
.vue-root {
  height: 100%;
}
</style>
