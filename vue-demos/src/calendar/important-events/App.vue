<template>
  <div class="vue-root">
    <div class="demo-description">
      Most popular Tennis Events are added to the Calendar as
      <b>importantDates</b>.
      Hover over a date in order to see the Tooltip with the event description.
      Click on the calendar Button inside the Tooltip to edit the event. Double
      clicking on an empty date(non-important date) will allow to add a new event(important
      date) to the Calendar.
    </div>
    <smart-calendar id="calendar"></smart-calendar>
    <smart-window id="eventWindow" modal footer-template="windowFooterTemplate">
      <div class="window-content">
        <div>
          <label>Description</label>
          <smart-multiline-text-box
            id="descriptionInput"
            auto-expand
            placeholder="Enter description"
          ></smart-multiline-text-box>
        </div>
        <div>
          <label>Time period</label>
          <smart-date-range-input
            id="dateRangeInput"
            placeholder="Enter date(s)"
            drop-down-button-position="right"
            value-type="object"
          ></smart-date-range-input>
        </div>
      </div>
    </smart-window>
    <template id="headerTemplate">
      <div class="calendar-header">
        <div class="view-selection">
          <smart-button id="month" class="primary">Month</smart-button>
          <smart-button id="year">Year</smart-button>
          <smart-button id="decade">Decade</smart-button>
        </div>
        <div class="year-selector">{{date}}</div>
        <div class="navigation-buttons">
          <smart-button id="previous" class="flat rounded">&#xe902;</smart-button>
          <smart-button id="today" class="flat">Today</smart-button>
          <smart-button id="next" class="flat rounded">&#xe903;</smart-button>
        </div>
      </div>
    </template>

    <template id="tooltipTemplate">
      <div class="tooltip-content">
        <smart-button class="event-window-button button-icon floating primary"></smart-button>
        <span>{{day}}</span>
      </div>
    </template>

    <template id="windowFooterTemplate">
      <div class="window-footer-buttons">
        <smart-button id="buttonDelete">Delete</smart-button>
        <smart-button id="buttonCancel">Cancel</smart-button>
        <smart-button id="buttonSave">Save</smart-button>
      </div>
    </template>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.calendar.js";
import "smart-webcomponents/source/modules/smart.daterangeinput.js";
import "smart-webcomponents/source/modules/smart.multilinetextbox.js";
import "smart-webcomponents/source/modules/smart.window.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      //Events data
      let events = [
        {
          dateFrom: "2020-01-03",
          dateTo: "2020-01-12",
          description: "ATP Cup"
        },
        {
          dateFrom: "2020-01-20",
          dateTo: "2020-02-03",
          description: "Australian Open"
        },
        {
          dateFrom: "2020-02-03",
          dateTo: "2020-02-09",
          description: "Cordoba Open"
        },
        {
          dateFrom: "2020-02-10",
          dateTo: "2020-02-16",
          description: "New York Open"
        },
        {
          dateFrom: "2020-03-17",
          dateTo: "2020-03-17",
          description: "Saint Patrick's Day"
        },
        {
          dateFrom: "2020-03-25",
          dateTo: "2020-04-05",
          description: "Miami Open presneted by Itau"
        },
        {
          dateFrom: "2020-05-11",
          dateTo: "2020-05-17",
          description: "ATP Master Tennis"
        },
        {
          dateFrom: "2020-05-21",
          dateTo: "2020-05-21",
          description: "Arena Zagreb"
        },
        {
          dateFrom: "2020-05-23",
          dateTo: "2020-05-23",
          description: "Gwardia Stadium"
        },
        {
          dateFrom: "2020-05-24",
          dateTo: "2020-06-07",
          description: "French Open"
        },
        {
          dateFrom: "2021-06-08",
          dateTo: "2021-06-14",
          description: "Mercedess Cup"
        },
        {
          dateFrom: "2020-06-21",
          dateTo: "2020-07-04",
          description: "Wimbledon"
        },
        {
          dateFrom: "2020-07-08",
          dateTo: "2020-07-08",
          description: "Estadio Jose Zorila"
        },
        {
          dateFrom: "2020-07-11",
          dateTo: "2020-07-11",
          description: "Bessa Stadium"
        },
        {
          dateFrom: "2020-07-12",
          dateTo: "2020-07-12",
          description: "Estadio Olimpico - Seville"
        },
        {
          dateFrom: "2020-07-18",
          dateTo: "2020-07-26",
          description: "Indianopolis Tennis Championships"
        },
        {
          dateFrom: "2020-07-27",
          dateTo: "2020-08-01",
          description: "Countrywide Classic Tennis"
        },
        {
          dateFrom: "2020-08-03",
          dateTo: "2020-08-03",
          description: "Madison Square Garden"
        },
        {
          dateFrom: "2020-08-05",
          dateTo: "2020-08-05",
          description: "Happy Birthday John!"
        },
        {
          dateFrom: "2021-08-10",
          dateTo: "2021-08-16",
          description: "Rodgers Cup"
        },
        {
          dateFrom: "2020-08-07",
          dateTo: "2020-08-11",
          description: "Western & Southern Financial Group Women's Open"
        },
        {
          dateFrom: "2020-08-15",
          dateTo: "2020-08-23",
          description: "Rogers Cup Women's Tennis"
        },
        {
          dateFrom: "2020-08-29",
          dateTo: "2020-09-10",
          description: "US Open Tennis Championship"
        },
        {
          dateFrom: "2020-10-31",
          dateTo: "2020-10-31",
          description: "Konig Pilsener Arena"
        },
        {
          dateFrom: "2020-11-01",
          dateTo: "2020-11-01",
          description: "AWD Dome"
        },
        {
          dateFrom: "2020-11-07",
          dateTo: "2020-11-07",
          description: "SAP Arena"
        },
        {
          dateFrom: "2020-11-12",
          dateTo: "2020-11-12",
          description: "Recinto Ferial - Valencia"
        },
        {
          dateFrom: "2020-11-22",
          dateTo: "2020-11-27",
          description: "Barclays ATP World Tour Finals"
        },
        {
          dateFrom: "2020-12-01",
          dateTo: "2020-12-01",
          description: "Arena Nurnberg"
        },
        {
          dateFrom: "2020-12-12",
          dateTo: "2020-12-12",
          description: "Scottish Exhibition & Conference Center"
        },
        {
          dateFrom: "2020-12-19",
          dateTo: "2020-12-21",
          description: "International Horse Show"
        },
        {
          dateFrom: "2020-12-24",
          dateTo: "2020-12-26",
          description: "Merry Christmas !"
        },
        {
          dateFrom: "2020-12-27",
          dateTo: "2020-12-30",
          description: "Peter Pan"
        }
      ];
      //Handles Events Data
      function getImportantDates(dataSource) {
        let dates = [];
        if (!dataSource) {
          dataSource = events;
        }
        for (let i = 0; i < dataSource.length; i++) {
          const event = dataSource[i];
          let dateFrom = new Date(event.dateFrom),
            dateTo = new Date(event.dateTo);
          dateFrom.setHours(0, 0, 0, 0);
          dateTo.setHours(0, 0, 0, 0);
          while (dateFrom.getTime() < dateTo.getTime()) {
            dates.push({
              date: new Date(dateFrom),
              description: event.description
            });
            dateFrom.setDate(dateFrom.getDate() + 1);
            dateFrom.setHours(0, 0, 0, 0);
          }
          dates.push({
            date: new Date(dateTo),
            description: event.description
          });
        }
        return dates;
      }
      //Returns an event based on it's Date
      function getImportantDate(date) {
        date = new Date(date);
        date.setHours(0, 0, 0, 0);
        const event = importantDatesData.find(
          dateObj => dateObj.date.getTime() === date.getTime()
        );
        if (!event) {
          return;
        }
        const eventDates = importantDatesData.filter(
          dateObj => dateObj.description === event.description
        );
        if (eventDates.length) {
          return {
            from: eventDates[0].date,
            to: eventDates[eventDates.length - 1].date,
            description: event.description
          };
        }
      }
      let importantDatesData = getImportantDates();
      window.Smart(
        "#calendar",
        class {
          get properties() {
            return {
              months: 12,
              firstDayOfWeek: 1,
              importantDates: importantDatesData.map(dateObj => dateObj.date),
              scrollButtonsPosition: "far",
              selectedDates: ["2020-01-01"],
              headerTemplate: "headerTemplate",
              tooltipTemplate: "tooltipTemplate",
              tooltip: true
            };
          }
        }
      );

      const calendar = document.querySelector("smart-calendar"),
        descriptionInput = document.getElementById("descriptionInput"),
        dateRangeInput = document.getElementById("dateRangeInput"),
        eventWindow = document.getElementById("eventWindow");
      let eventDetails = null;
      //Handle Calendar Header buttons
      calendar.addEventListener("click", function(event) {
        let target = event.target;
        if (target.closest(".event-window-button")) {
          eventWindow.open();
        }
        target = target.closest("smart-button");
        if (!target) {
          return;
        }
        switch (target.id) {
          case "next":
            calendar.navigate(12);
            break;
          case "previous":
            calendar.navigate(-12);
            break;
          case "today":
            {
              const today = new Date();
              today.setDate(1);
              today.setMonth(0);
              calendar.navigate(today);
            }
            break;
          case "month":
            calendar.displayMode = "month";
            break;
          case "year":
            calendar.displayMode = "year";
            break;
          case "decade":
            calendar.displayMode = "decade";
            break;
        }
      });
      //Set the primary button for the current display mode
      calendar.addEventListener("displayModeChange", function() {
        const displayMode = calendar.displayMode,
          viewSelection = document.querySelector(".view-selection"),
          viewSelectionButtons = viewSelection.querySelectorAll("smart-button");
        for (let i = 0; i < viewSelectionButtons.length; i++) {
          const button = viewSelectionButtons[i];
          if (button.id !== displayMode) {
            button.classList.remove("primary");
          } else {
            button.classList.add("primary");
          }
        }
      });
      //Handle Tooltip and prepare editor window
      calendar.addEventListener("open", function(event) {
        const tooltip = event.detail.target;
        if (!(tooltip instanceof window.Smart.Tooltip)) {
          return;
        }
        eventDetails = getImportantDate(event.detail.value);
        if (eventDetails) {
          tooltip.value = eventWindow.label = descriptionInput.value =
            eventDetails.description;
          dateRangeInput.value = eventDetails;
        }
      });
      //Create new Event on DoubleClick
      calendar.addEventListener("dblclick", function(event) {
        const target = event.target,
          calendarCell = target.closest(".smart-calendar-cell");
        if (calendarCell) {
          const cellDate = new Date(calendarCell.value);
          eventDetails = getImportantDate(cellDate) || {
            from: cellDate,
            description: "New Event"
          };
          eventWindow.label = descriptionInput.value = eventDetails.description;
          dateRangeInput.value = eventDetails;
          eventWindow.open();
        }
      });
      //Delete Event
      document
        .getElementById("buttonDelete")
        ?.addEventListener("click", function() {
          if (!eventDetails) {
            eventWindow.close();
            return;
          }
          importantDatesData = importantDatesData.filter(
            dateObj => dateObj.description !== eventDetails.description
          );
          calendar.importantDates = importantDatesData.map(
            dateObj => dateObj.date
          );
          eventWindow.close();
        });
      //Cancel Event Editing
      document
        .getElementById("buttonCancel")
        ?.addEventListener("click", function() {
          eventWindow.close();
          eventDetails = null;
        });
      //Save Event
      document
        .getElementById("buttonSave")
        ?.addEventListener("click", function() {
          if (!eventDetails) {
            eventWindow.close();
            return;
          }
          importantDatesData = importantDatesData.filter(
            dateObj => dateObj.description !== eventDetails.description
          );
          const newDateRange = dateRangeInput.value;
          if (!newDateRange) {
            return;
          }
          const newImportantDates = getImportantDates([
            {
              dateFrom: newDateRange.from,
              dateTo: newDateRange.to,
              description: descriptionInput.value || ""
            }
          ]);
          importantDatesData = importantDatesData.concat(newImportantDates);
          calendar.importantDates = importantDatesData.map(
            dateObj => dateObj.date
          );
          eventWindow.close();
        });
    });
  }
};
</script>

<style>
smart-calendar[months="12"] {
  width: 100%;
  min-width: 100%;
  height: 800px;
  min-height: 800px;
  --smart-calendar-header-height: 60px;
  --smart-calendar-important-date-background: #0288d1;
  --smart-calendar-important-date-color: var(--smart-primary-color);
}

smart-calendar[months="12"] .smart-calendar-month {
  width: 25%;
}

@media only screen and (max-width: 768px) {
  smart-calendar[months="12"] .smart-calendar-month {
    width: 50%;
  }

  smart-calendar[months="12"]:not([months="1"]) {
    height: 1800px;
  }
}

.calendar-header {
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 10px 0 10px;
}

.view-selection,
.year-selector,
.navigation-buttons {
  width: 33.3%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.navigation-buttons .rounded {
  border-radius: 50%;
  --smart-button-padding: 0;
  --smart-font-family: var(--smart-font-family-icon);
  width: 35px;
  height: 35px;
}

.view-selection {
  justify-content: flex-start;
}

.view-selection smart-button:nth-last-of-type(2) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.view-selection smart-button:first-of-type {
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.view-selection smart-button:last-of-type {
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.navigation-buttons {
  justify-content: flex-end;
}

.navigation-buttons smart-button {
  margin-right: 5px;
}

.button-icon.floating {
  width: 35px;
  height: 35px;
  margin-right: 5px;
  --smart-button-padding: 0;
}

.button-icon .smart-button::after {
  content: "\e829";
  font-family: var(--smart-font-family-icon);
}

.window-footer-buttons {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 23% 23% 23% 23%;
  grid-column-gap: 2%;
  grid-template-areas: "buttonDelete . buttonCancel buttonSave";
  height: 100%;
}

.window-footer-buttons smart-button {
  width: 100%;
  height: 100%;
  --smart-button-padding: 0.2rem;
}

#buttonDelete {
  grid-area: buttonDelete;
}

#buttonCancel {
  grid-area: buttonCancel;
}

#buttonSave {
  grid-area: buttonSave;
}

#eventWindow {
  height: auto;
}

.window-content {
  width: 100%;
  height: 100%;
  padding: 5px;
}

.window-content > div {
  display: grid;
  grid-template-columns: 25% 75%;
  justify-items: center;
  align-items: center;
}

.window-content label {
  white-space: nowrap;
}

.smart-multiline-text-box {
  max-height: 60px;
}

.smart-multiline-text-box.smart-element,
.smart-date-range-input {
  width: 100%;
}

.window-content > div:first-of-type {
  margin-bottom: 20px;
}
</style>
