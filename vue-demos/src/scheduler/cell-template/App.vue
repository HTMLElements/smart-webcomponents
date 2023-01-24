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
        scheduler = document.querySelector("smart-scheduler"),
        currentYear = today.getFullYear(),
        specialDates = [
          {
            date: new Date(currentYear, 11, 24),
            label: "Christmas Eve",
            icon: "christmas-eve",
          },
          {
            date: new Date(currentYear, 11, 25),
            label: "Christmas Day",
            icon: "santa",
          },
          {
            date: new Date(currentYear, 11, 26),
            label: "Day After Christmas",
            icon: "christmas",
          },
          {
            date: new Date(currentYear, 11, 8),
            label: "Happy Birthday",
            icon: "birthday",
          },
          {
            date: new Date(currentYear, 11, 14),
            label: "Christmas Party",
            icon: "celebration2",
          },
          {
            date: new Date(currentYear, 11, 31),
            label: "New Year's Eve",
            icon: "celebration",
          },
          {
            date: new Date(currentYear, 0, 1),
            label: "First Day of the Year",
            icon: "first-day",
          },
          {
            date: new Date(currentYear, 2, 3),
            label: "Liberation Day",
            icon: "liberty",
          },
          {
            date: new Date(currentYear, 4, 1),
            label: "Labour Day",
            icon: "labour",
          },
          {
            date: new Date(currentYear, 2, 8),
            label: "Women's Day",
            icon: "flowers",
          },
          {
            date: new Date(currentYear, 1, 14),
            label: "Valentine's Day",
            icon: "love",
          },
          {
            date: new Date(currentYear, 1, 14),
            label: "Party Time",
            icon: "party",
          },
          {
            date: new Date(currentYear, 0, 21),
            label: "Happy Birthday",
            icon: "celebration3",
          },
          {
            date: new Date(currentYear, 3, 12),
            label: "Happy Birthday",
            icon: "party2",
          },
          {
            date: new Date(currentYear, 5, 7),
            label: "Happy Birthday",
            icon: "party3",
          },
          {
            date: new Date(currentYear, 6, 15),
            label: "Happy Birthday",
            icon: "party4",
          },
          {
            date: new Date(currentYear, 7, 24),
            label: "Happy Birthday",
            icon: "party",
          },
          {
            date: new Date(currentYear, 8, 4),
            label: "Happy Birthday",
            icon: "party2",
          },
        ],
        data = [
          {
            label: "Google AdWords Strategy",
            dateStart: new Date(currentYear, 11, 10, 9, 0),
            dateEnd: new Date(currentYear, 11, 11, 10, 30),
          },
          {
            label: "New Brochures",
            dateStart: new Date(currentYear, 11, 11, 11, 30),
            dateEnd: new Date(currentYear, 11, 12, 14, 15),
          },
          {
            label: "Brochure Design Review",
            dateStart: new Date(currentYear, 11, 12, 13, 15),
            dateEnd: new Date(currentYear, 11, 14, 16, 15),
          },
          {
            label: "Website Re-Design Plan",
            dateStart: new Date(currentYear, 11, 16, 16, 45),
            dateEnd: new Date(currentYear, 11, 20, 11, 15),
          },
          {
            label: "Rollout of New Website and Marketing Brochures",
            dateStart: new Date(currentYear, 11, 2, 8, 15),
            dateEnd: new Date(currentYear, 11, 2, 10, 45),
          },
          {
            label: "Update Sales Strategy Documents",
            dateStart: new Date(currentYear, 11, 2, 12, 0),
            dateEnd: new Date(currentYear, 11, 2, 13, 45),
          },
          {
            label: "Non-Compete Agreements",
            dateStart: new Date(currentYear, 11, 3, 8, 15),
            dateEnd: new Date(currentYear, 11, 3, 9, 0),
          },
          {
            label: "Approve Hiring of John Jeffers",
            dateStart: new Date(currentYear, 11, 3, 10, 0),
            dateEnd: new Date(currentYear, 11, 3, 11, 15),
          },
          {
            label: "Update NDA Agreement",
            dateStart: new Date(currentYear, 11, 3, 11, 45),
            dateEnd: new Date(currentYear, 11, 3, 13, 45),
          },
          {
            label: "Update Employee Files with New NDA",
            dateStart: new Date(currentYear, 11, 3, 14, 0),
            dateEnd: new Date(currentYear, 11, 3, 16, 45),
          },
          {
            label: "Submit Questions Regarding New NDA",
            dateStart: new Date(currentYear, 11, 6, 8, 0),
            dateEnd: new Date(currentYear, 11, 6, 9, 30),
          },
          {
            label: "Submit Signed NDA",
            dateStart: new Date(currentYear, 11, 6, 12, 45),
            dateEnd: new Date(currentYear, 11, 6, 14, 0),
          },
        ];
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              view: "month",
              dateCurrent: new Date(2021, 11, 1),
              dataSource: data,
              cellTemplate: (cell, date) => {
                let cellDate = date.getDate();
                if (cellDate === 1) {
                  cell.textContent = new Intl.DateTimeFormat(scheduler.locale, {
                    month: "short",
                    day: scheduler.dayFormat,
                  }).format(date);
                } else {
                  cell.textContent = cellDate + "";
                }
                const year = date.getFullYear(),
                  month = date.getMonth(),
                  dayNumber = date.getDate();
                const holiday = specialDates.find((d) => {
                  const date = d.date;
                  return (
                    date.getFullYear() === year &&
                    date.getMonth() === month &&
                    date.getDate() === dayNumber
                  );
                });
                if (holiday) {
                  cell.classList.add("custom-cell");
                  cell.setAttribute("holiday-name", holiday.label);
                  cell.style.setProperty(
                    "--cell-icon", `url('./../../../../demos/images/icons/${holiday.icon}.svg')`
                  );
                } else {
                  cell.removeAttribute("holiday-name");
                  cell.classList.remove("custom-cell");
                  cell.style.removeProperty("--cell-icon");
                }
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
  --smart-scheduler-event-color: var(--smart-secondary);
  --smart-scheduler-event-background: transparent;
}

.smart-scheduler .custom-cell::after {
  content: attr(holiday-name);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: var(--cell-icon);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30%;
  padding: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
