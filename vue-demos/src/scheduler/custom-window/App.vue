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
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const data = [
        {
          label: "World Climate Changes",
          dateStart: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() - 3,
            12,
            0,
            0
          ),
          dateEnd: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() - 3,
            15,
            30,
            0
          ),
          allDay: true,
          image: "./../../../demos/images/carousel-square-7.jpg",
          speaker: ["Linda", "Maria"],
          backgroundColor: "#F4511E",
        },
        {
          label: "Technologies",
          dateStart: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() - 1,
            10,
            0,
            0
          ),
          dateEnd: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() - 1,
            12,
            0,
            0
          ),
          allDay: true,
          image: "./../../../demos/images/smart-home-3148026_1920.jpg",
          speaker: ["Christopher", "Nina"],
          backgroundColor: "#7986CB",
        },
        {
          label: "Company Strategy",
          dateStart: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            6,
            0,
            0
          ),
          dateEnd: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            22,
            30,
            0
          ),
          allDay: true,
          image: "./../../../demos/images/digital-marketing-1725340_960_720.jpg",
          speaker: ["Michael", "Ivan"],
          backgroundColor: "#039BE5",
        },
        {
          label: "Marketing",
          dateStart: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            6,
            0,
            0
          ),
          dateEnd: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            22,
            0,
            0
          ),
          image: "./../../../demos/images/store.jpg",
          speaker: ["Marian"],
          backgroundColor: "#8E24AA",
        },
        {
          label: "Workflow",
          dateStart: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            8,
            0,
            0
          ),
          dateEnd: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            18,
            0,
            0
          ),
          image: "./../../../demos/images/office-1209640_960_720.jpg",
          speaker: ["Michelle", "Christy", "Nicole"],
          backgroundColor: "#616161",
        },
        {
          label: "Team Building",
          dateStart: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 1,
            10,
            0,
            0
          ),
          dateEnd: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 1,
            18,
            30,
            0
          ),
          image: "./../../../demos/images/carousel-square-4.jpg",
          speaker: ["Natalie"],
          backgroundColor: "#3F51B5",
        },
      ];
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              dataSource: data,
              view: "month",
              views: [],
              firstDayOfWeek: 1,
              windowCustomizationFunction: function (target, type, event) {
                //We want to constomize the event window, so if the window is type 'confirm' return
                if (type) {
                  return;
                }

                const scheduler = document.querySelector("smart-scheduler"),
                  events = scheduler.events;

                target.footerPosition = "none";
                target.label = "Events";

                let container = target.querySelector(".custom-container");

                if (!container) {
                  //Empty the window
                  target.clear();
                  container = document.createElement("div");
                  container.classList.add("custom-container");
                }

                container.remove();
                container.innerHTML = "";

                if (!scheduler.containsEvent(event)) {
                  //A cell is clicked. Show all events for the target cell
                  for (let i = 0; i < events.length; i++) {
                    const e = events[i];

                    if (
                      e.dateStart.getTime() >= event.dateStart.getTime() &&
                      e.dateEnd.getTime() <= event.dateEnd.getTime()
                    ) {
                      container.appendChild(createCard(events[i]));
                    }
                  }
                } else {
                  //Event is clicked. Show the event
                  container.appendChild(createCard(event));
                }

                //Show placeholder if no events
                if (!container.innerHTML) {
                  container.innerHTML = "No events at this time";
                }

                target.appendChild(container);
              },
            };
          }
        }
      );

      function createCard(event) {
        const token = document.createElement("div"),
          scheduler = document.querySelector("smart-scheduler"),
          dateTimeObject = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          };

        token.classList.add("event-token");
        token.innerHTML = `
            <div class="content-section">
            <label>From:</label>
            <div class="date-start"></div>
            </div>
            <div class="content-section">
            <label>To:</label>
            <div class="date-end"></div>
            </div>
            <div class="content-section">
            <label>Topic:</label>
            <div class="label"></div>
            </div>
            <div class="content-section">
            <label>Speaker:</label>
            <div class="speaker"></div>
            </div>
            <div class="content-section">
            <img class="image"></div>
            </div>`;

        token.querySelector(
          ".date-start"
        ).innerHTML = event.dateStart.toLocaleDateString(
          scheduler.locale,
          dateTimeObject
        );

        token.querySelector(
          ".date-end"
        ).innerHTML = event.dateEnd.toLocaleDateString(
          scheduler.locale,
          dateTimeObject
        );

        token.querySelector(".label").innerHTML = event.label || "";
        token.querySelector(".speaker").innerHTML = event.speaker
          ? event.speaker.toString()
          : "";
        token.querySelector(".image").src = event.image || "";
        return token;
      }
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
  width: 100%;
  height: 100%;
}

.custom-container {
  display: flex;
  flex-wrap: wrap;
  max-height: 500px;
}

.custom-container .event-token {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 grey;
  display: grid;
  grid-row-gap: 5px;
  width: 400px;
}

.custom-container .content-section {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-column-gap: 10px;
}

.custom-container img {
  width: 100%;
  height: 300px;
  border-radius: 5px;
}

.custom-container label {
  font-weight: 600;
}

#app,
.vue-root {
  height: 100%;
}
</style>
