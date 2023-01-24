<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
    <div class="options">
      <div class="option">
        <h4>Filter Options:</h4>
        <smart-button id="disableFiltering">Disable Filtering</smart-button>
        <smart-button id="applyFilter">Apply Filter</smart-button>
        <smart-button id="clearFilter" disabled>Clear Filter</smart-button>
      </div>
      <div class="option legend">
        <h4>Legend:</h4>
        <smart-switch-button checked></smart-switch-button>
      </div>
      <div class="option legend-location">
        <h4>Legend Location:</h4>
        <smart-radio-button checked>Footer</smart-radio-button>
        <smart-radio-button>Header</smart-radio-button>
      </div>
      <div class="option legend-position">
        <h4>Legend Position:</h4>
        <smart-radio-button checked>Near</smart-radio-button>
        <smart-radio-button>Far</smart-radio-button>
      </div>
      <div class="option legend-item">
        <h4>Disable/Enable Legend Item:</h4>
        <smart-check-box checked>Brainstorming Room</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.switchbutton.js";
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
            label: "Interview Job Candidaties",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate - 2,
              9,
              30
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate - 2,
              11,
              30
            ),
            roomId: 3,
          },
          {
            label: "Discuss New Project",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate - 3,
              8,
              30
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate - 3,
              10,
              30
            ),
            roomId: 2,
          },
          {
            label: "Meet With Customers",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate - 1,
              10,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate - 1,
              12,
              0
            ),
            roomId: 3,
          },
          {
            label: "Organize Vacations and Team Buildings",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate - 4,
              10,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate - 4,
              12,
              30
            ),
            roomId: 1,
          },
          {
            label: "Lunch Break",
            dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate - 2,
              14,
              30
            ),
            roomId: 1,
          },
          {
            label: "Work On Task A",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate - 1,
              12,
              30
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate - 1,
              14,
              45
            ),
            roomId: 2,
          },
          {
            label: "Conduct Research On New Technologies",
            dateStart: new Date(currentYear, currentMonth, currentDate, 13),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
            roomId: 4,
          },
          {
            label: "Review Juniors Employees Work",
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
            roomId: 2,
          },
          {
            label: "Setup New Client Accounts",
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
            roomId: 3,
          },
          {
            label: "Perform Additional Duties",
            dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              15,
              15
            ),
            roomId: 1,
          },
          {
            label: "Prepare Weekly/Monthly Report",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              13,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 2,
              15,
              15
            ),
            roomId: 2,
          },
          {
            label: "Install New Database",
            dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              12,
              15
            ),
            roomId: 1,
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
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 2,
              14,
              0
            ),
            roomId: 2,
          },
          {
            label: "Teach Junior Employees",
            dateStart: new Date(currentYear, currentMonth, currentDate, 9),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
            roomId: 3,
          },
          {
            label: "Mantain Database",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 3,
              11,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 3,
              13,
              30
            ),
            roomId: 2,
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
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 4,
              13,
              30
            ),
            roomId: 4,
          },
        ];
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              dataSource: data,
              hourStart: 6,
              hourEnd: 18,
              filterable: true,
              resources: [
                {
                  label: "Rooms",
                  value: "roomId",
                  dataSource: [
                    {
                      label: "Common Area",
                      id: 1,
                      backgroundColor: "#F7B2AD",
                    },
                    {
                      label: "Conference Room",
                      id: 2,
                      backgroundColor: "#984447",
                    },
                    {
                      label: "Meeting Room",
                      id: 3,
                      backgroundColor: "#F4AC45",
                    },
                    {
                      label: "Brainstorming Room",
                      id: 4,
                      disabled: true,
                      backgroundColor: "#27A195",
                    },
                  ],
                },
              ],
              showLegend: true,
              view: "week",
            };
          }
        }
      );

      const scheduler = document.getElementById("scheduler"),
        applyFilterButton = document.getElementById("applyFilter"),
        clearFilter = document.getElementById("clearFilter"),
        filetarbleButton = document.getElementById("disableFiltering");
      document
        .querySelector(".options")
        .addEventListener("change", function (event) {
          const target = event.target,
            detail = event.detail.value;
          if (target.closest(".legend")) {
            scheduler.showLegend = detail;
          } else if (target.closest(".legend-position")) {
            scheduler.legendPosition =
              target.textContent.toLocaleLowerCase().indexOf("near") > -1
                ? "near"
                : "far";
          } else if (target.closest(".legend-location")) {
            scheduler.legendLocation =
              target.textContent.toLocaleLowerCase().indexOf("header") > -1
                ? "header"
                : "footer";
          } else if (target.closest(".legend-item")) {
            const resources = scheduler.resources.slice(),
              resourceItem = resources[0].dataSource.find((i) => i.id === 4);
            if (resourceItem) {
              resourceItem.disabled = detail;
            }
            scheduler.resources = resources;
          }
        });
      applyFilterButton.addEventListener("click", function (event) {
        scheduler.filter = [
          //Show only Events from Room's with id 2 and 3
          {
            name: "roomId",
            value: (id) => ["2", "3"].indexOf(id + "") > -1,
          },
        ];
        applyFilterButton.disabled = true;
        clearFilter.disabled = false;
      });
      clearFilter.addEventListener("click", function (event) {
        scheduler.filter = null;
        clearFilter.disabled = true;
        applyFilterButton.disabled = false;
      });
      filetarbleButton.addEventListener("click", function (event) {
        scheduler.filterable = !scheduler.filterable;
        if (scheduler.filterable) {
          filetarbleButton.innerHTML = "Disable Filtering";
          if (scheduler.filter) {
            applyFilterButton.disabled = true;
            clearFilter.disabled = false;
          } else {
            applyFilterButton.disabled = false;
            clearFilter.disabled = true;
          }
        } else {
          filetarbleButton.innerHTML = "Enable Filtering";
          applyFilterButton.disabled = clearFilter.disabled = true;
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

#app,
.vue-root {
  width: 100%;
  height: 100%;
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

#applyFilter,
#clearFilter {
  margin-top: 10px;
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
