<template>
  <div class="vue-root">
    <div class="description">
      Scheduler Window Editors have been modifed. Double click on a scheduler
      cell to open the window.
    </div>
    <smart-scheduler id="scheduler"></smart-scheduler>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.scheduler.js";
import "smart-webcomponents/source/modules/smart.rating.js";
import "smart-webcomponents/source/modules/smart.progressbar.js";

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
            dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
            rating: 4,
            progress: 35,
            backgroundColor: "#039BE5",
          },
          {
            label: "New Brochures",
            dateStart: new Date(
              currentYear,
              currentMonth,
              todayDate - 1,
              11,
              30
            ),
            dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
            rating: 2.5,
            progress: 75,
            backgroundColor: "#0B8043",
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
            rating: 5,
            progress: 50,
            backgroundColor: "#3F51B5",
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
              firstDayOfWeek: 1,
            };
          }
        }
      );

      const scheduler = document.querySelector("smart-scheduler");

      scheduler.addEventListener("editDialogOpen", function (event) {
        const editors = event.detail.editors;

        if (!editors) {
          return;
        }

        const schedulerEvent = event.detail.item,
          descriptionEditor = editors.description,
          dateStartEditor = editors.dateStart,
          dateEndEditor = editors.dateEnd,
          labelEditor = editors.label,
          allDayEditor = editors.allDay,
          repeatEditor = editors.repeat,
          editorsContainer = editors.description.parentElement;

        dateStartEditor.querySelector(".smart-element").disabled = true;
        dateEndEditor.querySelector(".smart-element").disabled = true;
        repeatEditor.classList.add("smart-hidden");
        allDayEditor.classList.add("smart-hidden");
        labelEditor.querySelector(".smart-element").placeholder =
          "Enter a label...";
        descriptionEditor.querySelector(".smart-element").placeholder =
          "Enter a description for the event..";

        //Rating Element
        let ratingElement = editorsContainer.querySelector("#eventRating");

        if (!ratingElement) {
          const elementContainer = document.createElement("div"),
            label = document.createElement("label");

          label.textContent = "Rating: ";
          elementContainer.classList.add("smart-scheduler-window-editor");
          elementContainer.appendChild(label);

          ratingElement = document.createElement("smart-rating");
          ratingElement.id = "eventRating";

          elementContainer.append(ratingElement);
          editorsContainer.appendChild(elementContainer);
        }

        ratingElement.value = schedulerEvent.rating || 1;

        //ProgressBar
        let progressElement = editorsContainer.querySelector("#eventProgress");

        if (!progressElement) {
          const elementContainer = document.createElement("div"),
            label = document.createElement("label");

          label.textContent = "Progress: ";

          elementContainer.classList.add("smart-scheduler-window-editor");
          elementContainer.appendChild(label);

          progressElement = document.createElement("smart-progress-bar");
          progressElement.id = "eventProgress";
          progressElement.showProgressValue = true;

          elementContainer.append(progressElement);
          editorsContainer.appendChild(elementContainer);
        }

        progressElement.value = schedulerEvent.progress || 0;
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
  width: 100%;
  height: 100%;
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
