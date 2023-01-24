<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
    <div class="options">
      <div class="demo-description">
        Scheduler's events can be exported to a PDF or XLSX file via the
        <b>exportData</b> method by clicking on the corresponding button.
      </div>
      <div class="option">
        <smart-button id="exportToXLSX">Export to XLSX</smart-button>
      </div>
      <div class="option">
        <smart-button id="exportToPDF">Export to PDF</smart-button>
      </div>
      <div class="option">
        <smart-button id="exportToHTML">Export to HTML</smart-button>
      </div>
      <div class="option">
        <smart-button id="exportToICal">Export to iCal</smart-button>
      </div>
      <div class="option">
        <smart-button id="print">Print</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.scheduler.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const today = new Date(),
        currentDate = today.getDate(),
        currentYear = today.getFullYear(),
        currentMonth = today.getMonth(),
        data = [
          {
            label: "Website Re-Design Plan",
            dateStart: new Date(currentYear, currentMonth, currentDate, 9, 30),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
          },
          {
            label: "Book Flights to San Fran for Sales Trip",
            priorityId: 1,
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 3,
              today.getHours() + 1,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 3,
              today.getHours() + 3,
              0
            ),
            notifications: [
              {
                interval: 0,
                type: "days",
                time: [today.getHours(), today.getMinutes() + 4],
                message: "Book Flights to San Fran for Sales Trip Early",
              },
              {
                interval: 0,
                type: "weeks",
                time: [today.getHours(), today.getMinutes() + 5],
                message: "Book Flights to San Fran for Sales Trip Late",
              },
            ],
          },
          {
            label: "Install New Router in Dev Room",
            priorityId: 1,
            dateStart: new Date(currentYear, currentMonth, currentDate, 13),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
            repeat: {
              repeatFreq: "monthly",
              repeatInterval: 1,
              repeatOn: today.getDate(),
            },
          },
          {
            label: "Google AdWords Strategy",
            dateStart: new Date(currentYear, currentMonth, 10),
            dateEnd: new Date(currentYear, currentMonth, 11),
            allDay: true,
            backgroundColor: "#F57F17",
            repeat: {
              repeatFreq: "weekly",
              repeatInterval: 5,
              repeatOn: [0, 2, 5],
              repeatEnd: new Date(currentYear, currentMonth + 2, 24),
              exceptions: [
                {
                  date: new Date(currentYear, currentMonth, 13),
                  dateStart: new Date(currentYear, currentMonth, 14),
                  label: "Google AdWords Strategy",
                  backgroundColor: "#F57F17",
                },
                {
                  date: new Date(currentYear, currentMonth + 1, 12),
                  label: "Google AdWords Strategy",
                  backgroundColor: "#F57F17",
                },
              ],
            },
          },
          {
            label: "Approve Personal Computer Upgrade Plan",
            priorityId: 2,
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              10,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              11,
              0
            ),
          },
          {
            label: "Final Budget Review",
            priorityId: 2,
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              12,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              13,
              35
            ),
          },
          {
            label: "New Brochures",
            priorityId: 2,
            dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 15),
          },
          {
            label: "Install New Database",
            priorityId: 1,
            dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              12,
              15
            ),
          },
          {
            label: "Approve New Online Marketing Strategy",
            priorityId: 2,
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 2,
              12,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 2,
              14,
              0
            ),
          },
          {
            label: "Upgrade Personal Computers",
            priorityId: 1,
            dateStart: new Date(currentYear, currentMonth, currentDate, 9),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
          },
        ];
      const priorityData = [
        {
          label: "Low Priority",
          id: 1,
          backgroundColor: "#1e90ff",
        },
        {
          label: "Medium Priority",
          id: 2,
          backgroundColor: "#ff9747",
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
              views: [
                "day",
                "week",
                "month",
                "timelineDay",
                "timelineWeek",
                "timelineMonth",
                "agenda",
              ],
              hourStart: 7,
              hourEnd: 19,
              firstDayOfWeek: 1,
              resources: [
                {
                  label: "Priority",
                  value: "priorityId",
                  dataSource: priorityData,
                },
              ],
            };
          }
        }
      );

      const scheduler = document.querySelector("smart-scheduler");

      document
        .getElementById("exportToXLSX")
        .addEventListener("click", () => scheduler.exportData("xlsx"));
      document
        .getElementById("exportToPDF")
        .addEventListener("click", () => scheduler.exportData("pdf"));
      document
        .getElementById("exportToHTML")
        .addEventListener("click", () => scheduler.exportData("html"));
      document
        .getElementById("exportToICal")
        .addEventListener("click", () => scheduler.exportData("iCal"));
      document
        .getElementById("print")
        .addEventListener("click", () => scheduler.print());
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

.options {
  width: 300px;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
</style>
