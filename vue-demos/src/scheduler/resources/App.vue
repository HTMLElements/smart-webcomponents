<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
    <div class="options">
      <div class="description">
        <h4>Description</h4>
        Resources can have a specific background color that is applied to the
        events that use it.
      </div>
      <div class="option">
        <h4>Select Resource Priority:</h4>
        <smart-radio-button value="priorityId" checked
          >Priority</smart-radio-button
        >
        <smart-radio-button value="employeeId">Employee</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.scheduler.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const today = new Date(),
        currentDate = today.getDate(),
        currentYear = today.getFullYear(),
        currentMonth = today.getMonth();
      const dataWithGroups = [
        {
          label: "Website Re-Design Plan",
          priorityId: 1,
          employeeId: 1,
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate - 2,
            9,
            30
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 11, 30),
        },
        {
          label: "Book Flights to San Fran for Sales Trip",
          priorityId: 2,
          employeeId: 2,
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate - 1,
            10,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 0),
        },
        {
          label: "Install New Router in Conference Room",
          priorityId: 2,
          employeeId: 1,
          dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
          dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 14, 30),
        },
        {
          label: "Add a new desk to the Dev Room",
          priorityId: 1,
          employeeId: 2,
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate - 1,
            12,
            30
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
        },
        {
          label: "Install New Router in Dev Room",
          priorityId: 2,
          employeeId: 1,
          dateStart: new Date(currentYear, currentMonth, currentDate, 13),
          dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
        },
        {
          label: "Approve Personal Computer Upgrade Plan",
          priorityId: 2,
          employeeId: 2,
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate + 1,
            10,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0),
        },
        {
          label: "Final Budget Review",
          priorityId: 2,
          employeeId: 1,
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate + 1,
            12,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35),
        },
        {
          label: "Old Brochures",
          priorityId: 2,
          employeeId: 1,
          dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 15, 15),
        },
        {
          label: "New Brochures",
          priorityId: 2,
          employeeId: 2,
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate + 1,
            13,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15),
        },
        {
          label: "Install New Database",
          priorityId: 1,
          employeeId: 2,
          dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15),
        },
        {
          label: "Approve New Online Marketing Strategy",
          priorityId: 2,
          employeeId: 1,
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate + 2,
            12,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
        },
        {
          label: "Upgrade Personal Computers",
          priorityId: 1,
          employeeId: 1,
          dateStart: new Date(currentYear, currentMonth, currentDate, 9),
          dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
        },
        {
          label: "Prepare current Year Marketing Plan",
          priorityId: 2,
          employeeId: 1,
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate + 3,
            11,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 13, 30),
        },
        {
          label: "Prepare current Year Marketing Plan",
          priorityId: 2,
          employeeId: 1,
          dateStart: new Date(
            currentYear,
            currentMonth,
            currentDate + 4,
            11,
            0
          ),
          dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 30),
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
      const employees = [
        {
          label: "Andrew Heart",
          id: 1,
          age: 28,
          discipline: "ABS, Fitball, StepFit",
          backgroundColor: "#28a745",
        },
        {
          label: "Nancy Johnson",
          id: 2,
          age: 31,
          discipline: "Tennis, Yoga, Swimming",
          backgroundColor: "#8f73af",
        },
      ];
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              view: "workWeek",
              dataSource: dataWithGroups,
              views: [
                {
                  label: "Work Week",
                  value: "workWeek",
                  type: "week",
                  hideWeekend: true,
                },
                "month",
              ],
              timelineDayScale: "quarterHour",
              hourStart: 7,
              hourEnd: 17,
              firstDayOfWeek: 1,
              resources: [
                {
                  label: "Priority",
                  value: "priorityId",
                  dataSource: priorityData,
                },
                {
                  label: "Employee",
                  value: "employeeId",
                  dataSource: employees,
                },
              ],
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
          const schedulerResources = scheduler.resources,
            firstResource = event.target.value;
          let reorderedResources = [];

          //reorder the resources
          for (let i = 0; i < schedulerResources.length; i++) {
            const resource = schedulerResources[i];

            if (resource.value === firstResource) {
              reorderedResources.splice(0, 0, resource);
            } 
            else {
              reorderedResources.push(resource);
            }
          }
          
          scheduler.resources = reorderedResources;
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
