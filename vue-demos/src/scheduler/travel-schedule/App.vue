<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
    <div class="options">
      <div class="option">
        <h4>Filter Airways:</h4>
        <smart-check-box checked>Airways 1</smart-check-box>
        <smart-check-box checked>Airways 2</smart-check-box>
        <smart-check-box checked>Airways 3</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.scheduler.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const today = new Date(),
        scheduler = document.querySelector("smart-scheduler"),
        currentYear = today.getFullYear(),
        currentMonth = today.getMonth(),
        data = (function () {
          const data = [],
            airways = [
              {
                label: "Airways 1",
                backgroundColor: "#e67c73b3",
              },
              {
                label: "Airways 2",
                backgroundColor: "#0b8043b3",
              },
              {
                label: "Airways 3",
                backgroundColor: "#7986cbb3",
              },
            ];
          let monthDays = new Date();
          monthDays.setDate(1);
          monthDays.setDate(32);
          monthDays.setDate(0);
          monthDays = monthDays.getDate();
          for (let i = 1; i < monthDays + 1; i++) {
            for (let a = 0; a < airways.length; a++) {
              const airway = Object.assign({}, airways[a]),
                random = Math.round(Math.random() * 100),
                hourStart = random % 23,
                minutesStart = random % 59,
                hourEnd = Math.min(23, hourStart + (random % 6)),
                minutesEnd = Math.min(59, minutesStart + (random % 29)),
                price = "$" + (Math.random() * 1000).toFixed(2);
              data.push(
                Object.assign(airway, {
                  dateStart: new Date(
                    currentYear,
                    currentMonth,
                    i,
                    hourStart,
                    minutesStart
                  ),
                  hourStart: `${hourStart}:${
                    minutesStart < 10 ? minutesStart + "0" : minutesStart
                  }`,
                  hourEnd: `${hourEnd}:${
                    minutesEnd < 10 ? minutesEnd + "0" : minutesEnd
                  }`,
                  dateEnd: new Date(
                    currentYear,
                    currentMonth,
                    i,
                    hourEnd,
                    minutesEnd
                  ),
                  price: price,
                })
              );
            }
          }
          return data;
        })();
      let lowestPriceEvent;

      function getLowestPriceEvent(airways) {
        const events = scheduler.events;
        let lowestPriceEvent;
        for (let i = 0; i < events.length; i++) {
          const d = data[i];
          if (airways && !airways.includes(d.label)) {
            continue;
          }
          if (!lowestPriceEvent) {
            lowestPriceEvent = d;
            continue;
          }
          const lowestPrice = parseFloat(lowestPriceEvent.price.slice(1)),
            currentPrice = parseFloat(d.price.slice(1));
          if (lowestPrice > currentPrice) {
            lowestPriceEvent = d;
          }
        }
        return lowestPriceEvent;
      }

      function isLowestPriceEvent(eventObj) {
        const eventDateStart = eventObj.dateStart;
        let lowestPriceEvent = eventObj;
        //Find the lowest price airway for the Date
        for (let i = 0; i < data.length; i++) {
          const d = data[i],
            dateStart = d.dateStart;
          if (
            dateStart.getFullYear() === eventDateStart.getFullYear() &&
            dateStart.getMonth() === eventDateStart.getMonth() &&
            dateStart.getDate() === eventDateStart.getDate()
          ) {
            const lowestPrice = parseFloat(lowestPriceEvent.price.slice(1)),
              currentPrice = parseFloat(d.price.slice(1));
            if (lowestPrice > currentPrice) {
              lowestPriceEvent = d;
            }
          }
        }
        return lowestPriceEvent === eventObj;
      }
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              view: "month",
              dataSource: data,
              views: ["month"],
              disableWindowEditor: true,
              disableDrag: true,
              disableResize: true,
              headerTemplate: (header) => {
                header.innerHTML =
                  '<b class="scheduler-title">The Travel Schedule For The Current Month</b>';
              },
              cellTemplate: (cell, date) => {
                if (!lowestPriceEvent) {
                  lowestPriceEvent = getLowestPriceEvent();
                }
                let cellDate = date.getDate();
                if (cellDate === 1) {
                  cellDate = new Intl.DateTimeFormat(scheduler.locale, {
                    month: "short",
                    day: scheduler.dayFormat,
                  }).format(date);
                }
                if (lowestPriceEvent) {
                  const lowestPriceDate = lowestPriceEvent.dateStart;
                  if (
                    lowestPriceDate.getFullYear() === date.getFullYear() &&
                    lowestPriceDate.getMonth() === date.getMonth() &&
                    lowestPriceDate.getDate() === date.getDate()
                  ) {
                    cell.classList.add("best-price-cell");
                  } else {
                    cell.classList.remove("best-price-cell");
                  }
                }
                cell.textContent = cellDate;
              },
              filterable: true,
              filter: (eventObj) => isLowestPriceEvent(eventObj),
            };
          }
        }
      );

      const options = document.querySelector(".options");
      options.addEventListener("change", function (event) {
        const target = event.target,
          airways = Array.from(
            options.querySelectorAll("smart-check-box[checked]")
          ).map((checkBox) => checkBox.textContent.trim());
        if (target instanceof window.Smart.CheckBox) {
          lowestPriceEvent = getLowestPriceEvent(airways);
          scheduler.filter = (eventObj) => {
            if (!airways.includes(eventObj.label)) {
              return false;
            } else {
              return isLowestPriceEvent(eventObj);
            }
          };
        }
      });

      window.onload = function () {
        const template = document.createElement("template");

        template.id = "eventTemplate";
        template.innerHTML = `
                <div class="custom-event-content">
                    <div class="price">{{price}}</div>
                    <div class="details"><i>&#9992;</i>{{label}}</div>
                    <div class="flight-hours">
                        <div>Departure<div>{{hourStart}}</div></div>
                        <div>Arrival<div>{{hourEnd}}</div></div>
                    </div>
                </div>`;

        document.body.appendChild(template);

        document.querySelector("smart-scheduler").eventTemplate = template.id;
      };
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
  --smart-scheduler-event-size-basic: 55px;
  --smart-scheduler-event-border-radius: 2px;
  --smart-scheduler-timeline-weekend-color: transparent;
  --smart-background: transparent;
  --smart-scheduler-view-background: url("./../../../demos/images/cloud.png")
    no-repeat center/cover;
  --smart-scheduler-view-horizontal-line-color: transparent;
  --smart-scheduler-view-vertical-line-color: transparent;
}

.smart-scheduler-tooltip {
  --smart-scheduler-event-item-size: 125px;
}

.smart-scheduler .custom-event-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.smart-scheduler .flight-hours {
  display: none;
}

.smart-scheduler .price {
  font-size: 16px;
  font-weight: 500;
}

.smart-scheduler .details {
  display: flex;
  align-items: center;
  grid-column-gap: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.smart-scheduler .details i,
.smart-scheduler-tooltip .details i {
  font-size: 20px;
}

.smart-scheduler .best-price-cell::after {
  content: "Best Price";
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: var(--smart-scheduler-timeline-header-cell-padding);
  left: 0;
  top: 0;
  pointer-events: none;
  background-color: rgba(245, 245, 220, 0.5);
}

.options .smart-check-box {
  display: block;
}

.smart-scheduler .smart-scheduler-header {
  grid-template-columns: 100%;
}

.smart-scheduler .scheduler-title {
  text-align: center;
}

.smart-scheduler-tooltip .flight-hours {
  display: flex;
  grid-column-gap: 30px;
}

.smart-scheduler-tooltip .custom-event-content {
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  grid-row-gap: 10px;
}

.smart-scheduler-tooltip .details {
  border-bottom: var(--smart-border-width) solid var(--smart-border);
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-gap: 10px;
}

.smart-scheduler-tooltip .price {
  order: 1;
  font-weight: 600;
  font-size: 15px;
}

.smart-scheduler-tooltip .flight-hours {
  order: 2;
}

@media (max-width: 750px) {
  .smart-scheduler {
    width: 100%;
  }
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
