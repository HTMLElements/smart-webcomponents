<template>
  <div class="vue-root">
    <div id="primaryContainer">
      <div id="header">
        <smart-button id="toggleButton"></smart-button>
        <div id="title">Scheduler</div>
        <smart-button id="addNew" class="floating"
          ><span>Create</span>
        </smart-button>
      </div>
      <div class="content">
        <section id="sideA">
          <div class="button-container">
            <div id="logo"></div>
          </div>
          <div class="controls-container">
            <smart-calendar id="calendar"></smart-calendar>
            <smart-input
              id="searchBar"
              class="underlined"
              placeholder="Search for people"
            ></smart-input>
            <smart-tree
              id="tree"
              selection-mode="checkBox"
              toggle-element-position="far"
            >
              <smart-tree-items-group expanded
                >My calendars
                <smart-tree-item value="birthday" selected
                  >Birthdays</smart-tree-item
                >
                <smart-tree-item value="holiday" selected
                  >Holidays</smart-tree-item
                >
                <smart-tree-item value="event" selected>Events</smart-tree-item>
              </smart-tree-items-group>
            </smart-tree>
          </div>
        </section>
        <section id="sideB">
          <smart-scheduler id="scheduler"></smart-scheduler>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.calendar.js";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.tree.js";
import "smart-webcomponents/source/modules/smart.scheduler.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const today = new Date(),
        currentDate = today.getDate(),
        currentYear = today.getFullYear(),
        currentMonth = today.getMonth(),
        thanksgiving = (() => {
          const tempDate = new Date(currentYear, 10, 1);
          //4th Thursday of November
          tempDate.setDate(tempDate.getDate() - tempDate.getDay() + 25);
          return tempDate;
        })(),
        data = [
          {
            label: "Brochure Design Review",
            dateStart: new Date(currentYear, currentMonth, 10, 13, 15),
            dateEnd: new Date(currentYear, currentMonth, 12, 16, 15),
            status: "tentative",
            class: "event",
          },
          {
            label: "Website Re-Design Plan",
            dateStart: new Date(currentYear, currentMonth, 16, 16, 45),
            dateEnd: new Date(currentYear, currentMonth, 18, 11, 15),
            class: "event",
          },
          {
            label: "Update Sales Strategy Documents",
            dateStart: new Date(currentYear, currentMonth, 2, 12, 0),
            dateEnd: new Date(currentYear, currentMonth, 2, 13, 45),
            class: "event",
            repeat: {
              repeatFreq: "daily",
              repeatInterval: 2,
              repeatEnd: 5,
              exceptions: [
                {
                  date: new Date(currentYear, currentMonth, 4, 12, 0),
                  label: "Employee on sick leave. Reschedule for next day",
                  dateStart: new Date(currentYear, currentMonth, 5),
                  dateEnd: new Date(currentYear, currentMonth, 6),
                  status: "outOfOffice",
                  backgroundColor: "#F06292",
                },
                {
                  date: new Date(currentYear, currentMonth, 8, 12, 0),
                  label: "Employee on sick leave. Reschedule for next day",
                  dateStart: new Date(currentYear, currentMonth, 9),
                  dateEnd: new Date(currentYear, currentMonth, 10),
                  status: "outOfOffice",
                  backgroundColor: "#FFA000",
                },
              ],
            },
          },
          {
            label: "Non-Compete Agreements",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate - 1,
              8,
              15
            ),
            dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 9, 0),
            status: "outOfOffice",
            class: "event",
          },
          {
            label: "Approve Hiring of John Jeffers",
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
              15
            ),
            notifications: [
              {
                interval: 1,
                type: "days",
                time: [today.getHours(), today.getMinutes()],
                message: "Approve Hiring of John Jeffers tomorrow",
                iconType: "success",
              },
            ],
            status: "busy",
            class: "event",
          },
          {
            label: "Update NDA Agreement",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate - 2,
              11,
              45
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate - 2,
              13,
              45
            ),
            class: "event",
          },
          {
            label: "Update Employee Files with New NDA",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 2,
              14,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 2,
              16,
              45
            ),
            class: "event",
          },
          {
            label: "Compete Agreements",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate,
              today.getHours(),
              today.getMinutes() + 15
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate,
              today.getHours() + 1,
              45
            ),
            notifications: [
              {
                interval: 0,
                type: "days",
                time: [today.getHours(), today.getMinutes() + 1],
                message: "Compete Agreements in 15 minutes",
                iconType: "time",
              },
              {
                interval: 0,
                type: "days",
                time: [today.getHours(), today.getMinutes() + 2],
                message: "Compete Agreements in 14 minutes",
                iconType: "warning",
              },
            ],
            status: "outOfOffice",
            class: "event",
          },
          {
            label: "Approve Hiring of Mark Waterberg",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 3,
              10,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 3,
              11,
              15
            ),
            status: "busy",
            class: "event",
          },
          {
            label: "Update Employees Information",
            dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45),
            class: "event",
            repeat: {
              repeatFreq: "weekly",
              repeatInterval: 2,
              repeatOn: [2, 4],
              repeatEnd: new Date(2021, 5, 24),
            },
          },
          {
            label: "Prepare Shipping Cost Analysis Report",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              12,
              30
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              13,
              30
            ),
            class: "event",
            repeat: {
              repeatFreq: "monthly",
              repeatInterval: 1,
              repeatOn: [new Date(currentYear, currentMonth, currentDate + 1)],
            },
          },
          {
            label: "Provide Feedback on Shippers",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              14,
              15
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              16,
              0
            ),
            status: "tentative",
            class: "event",
          },
          {
            label: "Complete Shipper Selection Form",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              8,
              30
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              10,
              0
            ),
            class: "event",
          },
          {
            label: "Upgrade Server Hardware",
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
              14,
              15
            ),
            class: "event",
          },
          {
            label: "Upgrade Apps to Windows RT or stay with WinForms",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 2,
              today.getHours(),
              today.getMinutes() + 5
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 2,
              today.getHours() + 2
            ),
            status: "tentative",
            class: "event",
            repeat: {
              repeatFreq: "daily",
              repeatInterval: 1,
              repeatOn: currentDate + 1,
              repeatEnd: new Date(currentYear, currentMonth, currentDate + 7),
              exceptions: [
                {
                  date: new Date(
                    currentYear,
                    currentMonth,
                    currentDate + 4,
                    10,
                    30
                  ),
                  label: "A day off work",
                  status: "busy",
                  backgroundColor: "#64DD17",
                },
              ],
            },
            notifications: [
              {
                interval: 2,
                type: "days",
                time: [today.getHours(), today.getMinutes()],
                message: "Upgrade Apps to Windows RT in 5 minutes",
                iconType: "time",
              },
            ],
          },
          {
            label: "Peter's Birthday",
            dateStart: new Date(currentYear, currentMonth, 5),
            dateEnd: new Date(currentYear, currentMonth, 6),
            class: "birthday",
          },
          {
            label: "Michael's Brithday",
            dateStart: new Date(currentYear, currentMonth, 10),
            dateEnd: new Date(currentYear, currentMonth, 11),
            class: "birthday",
          },
          {
            label: "Christina's Birthday",
            dateStart: new Date(currentYear, currentMonth, 20),
            dateEnd: new Date(currentYear, currentMonth, 21),
            class: "birthday",
          },
          {
            label: "Halloween",
            dateStart: new Date(currentYear, 9, 31),
            dateEnd: new Date(currentYear, 9, 32),
            class: "holiday",
          },
          {
            label: "Marry Christmas",
            dateStart: new Date(currentYear, 11, 24),
            dateEnd: new Date(currentYear, 11, 26, 23, 59, 59),
            class: "holiday",
          },
          {
            label: "Thanksgiving",
            dateStart: thanksgiving,
            dateEnd: new Date(currentYear, 10, thanksgiving.getDate() + 1),
            class: "holiday",
          },
          {
            label: "Day after Thanksgiving",
            dateStart: new Date(currentYear, 10, thanksgiving.getDate() + 1),
            dateEnd: new Date(currentYear, 10, thanksgiving.getDate() + 2),
            class: "holiday",
          },
          {
            label: "Indipendence Day",
            dateStart: new Date(currentYear, 6, 4),
            dateEnd: new Date(currentYear, 6, 5),
            class: "holiday",
          },
          {
            label: "New Year's Eve",
            dateStart: new Date(currentYear, 11, 31),
            dateEnd: new Date(currentYear + 1, 0, 1),
            class: "holiday",
          },
        ];

      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              view: "month",
              views: [
                "day",
                {
                  type: "week",
                  hideWeekend: true,
                },
                {
                  type: "month",
                  hideWeekend: true,
                },
                "agenda",
                {
                  label: "4 days",
                  value: "workWeek",
                  type: "week",
                  shortcutKey: "X",
                  hideWeekend: false,
                  hideNonworkingWeekdays: true,
                },
              ],
              nonworkingDays: getPastThreeWeekdays(today.getDay()),
              dateCurrent: new Date(),
              dataSource: data,
              firstDayOfWeek: 1,
              disableDateMenu: true,
              currentTimeIndicator: true
            };
          }
        }
      );

      window.Smart(
        "#calendar",
        class {
          get properties() {
            return {
              //Properties
              scrollButtonsPosition: "far"
            };
          }
        }
      );

      const primaryContainer = document.getElementById("primaryContainer"),
        calendar = document.getElementById("calendar"),
        scheduler = document.querySelector("smart-scheduler");

      document
        .getElementById("toggleButton")
        .addEventListener("click", function () {
          primaryContainer.classList.toggle("collapse");
          scheduler.disableDateMenu = !primaryContainer.classList.contains(
            "collapse"
          );
        });

      document.getElementById("addNew").addEventListener("click", function () {
        scheduler.openWindow({
          class: "event",
        });
      });

      document
        .getElementById("calendar")
        .addEventListener("change", function (event) {
          scheduler.dateCurrent = event.detail.value;
        });

      document
        .getElementById("tree")
        .addEventListener("change", function (event) {
          const tree = event.target,
            types = tree.selectedIndexes.map((i) => tree.getItem(i).value);
          scheduler.dataSource = data.filter(
            (d) => types.indexOf(d.class) > -1
          );
        });

      scheduler.addEventListener("dragEnd", updateData);
      scheduler.addEventListener("resizeEnd", updateData);
      scheduler.addEventListener("itemUpdate", updateData);
      scheduler.addEventListener("itemRemove", updateData);

      //Update the Calendar date
      scheduler.addEventListener("dateChange", function (event) {
        calendar.selectedDates = [event.detail.value];
      });

      function updateData(event) {
        const item = event.detail.item;

        for (let i = 0; i < data.length; i++) {
          const dataItem = data[i];
          if (dataItem.label === item.label && dataItem.class === item.class) {
            event.type === "itemRemove"
              ? data.splice(i, 1)
              : data.splice(i, 1, item);
            return;
          }
        }
      }

      function getPastThreeWeekdays(weekday) {
        let weekdays = [];

        for (let i = 0; i < 3; i++) {
          weekdays.push((weekday - i + 7) % 7);
        }
        return weekdays;
      }
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
  --smart-scheduler-timeline-cell-min-width: 40px;
  --smart-scheduler-event-border-radius: 4px;
  --smart-scheduler-timeline-nonworking-color: var(--smart-background);
}

#app,
.vue-root {
  height: 100%;
}

.smart-scheduler {
  width: 100%;
  height: 100%;
  border-radius: initial;
}

#primaryContainer,
#primaryContainer .content {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
}

#primaryContainer {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
}

#primaryContainer .content {
  height: calc(100% - 50px);
}

#primaryContainer.collapse #sideA {
  width: 0;
}

#primaryContainer #sideA {
  width: 280px;
  transition: width 0.2s ease-in-out;
}

#primaryContainer.collapse #sideB {
  width: 100%;
  transition: width 0.2s ease-in-out;
}

#primaryContainer #sideB {
  width: calc(100% - 280px);
  transition: width 0.2s ease-in-out;
}

#sideA,
#sideB {
  height: 100%;
  box-sizing: border-box;
}

#header {
  position: relative;
  width: 100%;
  height: 50px;
  background-color: var(--smart-background);
  color: var(--smart-background-color);
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

#sideA {
  border-top: var(--smart-border-width) solid var(--smart-border);
}

#sideA .controls-container {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  max-height: calc(100% - 150px);
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: 100%;
  grid-row-gap: 20px;
  overflow: auto;
}

.button-container {
  height: 150px;
}

#sideA .smart-calendar {
  min-width: initial;
  max-width: 100%;
  height: 250px;
  min-height: initial;
  --smart-font-size: 12px;
  --smart-calendar-cell-size: 26px;
  --smart-calendar-cell-spacing: 4px;
  border: initial;
  --smart-surface: transparent;
}

.smart-input,
.smart-tree {
  width: 100%;
}

.smart-tree {
  height: 200px;
  border: initial;
}

#primaryContainer.collapse #addNew {
  width: 45px;
  border-radius: 50%;
}

#primaryContainer.collapse #addNew::after {
  left: 0;
  width: 100%;
  height: 100%;
}

#primaryContainer.collapse #addNew span {
  display: none;
}

#addNew {
  top: 100%;
  left: 20px;
  margin-top: 100px;
  position: absolute;
  cursor: pointer;
  width: 120px;
  height: 45px;
  border-radius: 25px;
  box-shadow: var(--smart-elevation-2);
  z-index: 1;
}

#addNew button {
  padding-left: 45px;
}

#addNew::after {
  content: "+";
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 10px;
  width: 30px;
  height: 100%;
  font-family: var(--smart-font-family-icon);
  font-size: 40px;
  color: inherit;
  background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#toggleButton {
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: initial;
  background: transparent;
  margin-right: 10px;
}

#toggleButton::after {
  content: var(--smart-icon-align-left);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: var(--smart-font-family-icon);
  font-size: 25px;
  box-sizing: border-box;
  pointer-events: none;
}

#title {
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  font-size: 20px;
  position: relative;
}

#logo {
  content: "";
  position: relative;
  width: 100%;
  height: 90px;
  background: url(https://www.htmlelements.com/wp-content/design/assets/images/csssprites.png) -465px -400px;
  filter: invert(0.8);
  box-sizing: border-box;
}

.smart-tree[selection-mode="checkBox"]
  smart-tree-items-group
  > .smart-tree-item-label-container::before,
.smart-tree[selection-mode="checkBox"]
  smart-tree-items-group
  > .smart-tree-item-label-container::after {
  content: initial !important;
}

.smart-tree .smart-tree-item[value="birthday"] {
  --smart-primary: green;
}

.smart-tree .smart-tree-item[value="holiday"] {
  --smart-primary: cornflowerblue;
}

.smart-tree .smart-tree-item[value="event"] {
  --smart-primary: purple;
}

.birthday {
  --smart-scheduler-event-background-rgb: 0, 129, 0;
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

.holiday {
  --smart-scheduler-event-background-rgb: 100, 149, 237;
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

.event {
  --smart-scheduler-event-background-rgb: 128, 0, 128;
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
