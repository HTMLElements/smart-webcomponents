<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
    <div class="options">
      <div class="option">
        <h4>Description:</h4>
        <p>
          The component creates a history of the events that have been removed,
          updated or inserted.
        </p>
        In this demo the Smart.Scheduler has it's header customized in order to
        contain two additional Buttons that allow to call the <b>undo</b> and
        <b>redo</b> operations of the Scheduler.
        <p>
          When the user makes changes to some of the events like drag and drop
          an event to another cell or delete an event the undo/redo buttons
          inside Scheduler's header section will be updated. Clicking on the
          buttons will restore the event that was modifed to it's previus or
          future state (depending on the action).
        </p>
      </div>
    </div>
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
        todayDate = today.getDate(),
        currentYear = today.getFullYear(),
        currentMonth = today.getMonth(),
        data = [
          {
            label: "Google AdWords Strategy",
            dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
            dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
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
          },
        ];
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              dataSource: data,
              view: "day",
              headerViewPosition: "near",
              headerTemplate: (header) => {
                if (header.querySelector(".quick-controls")) {
                  return;
                }
                const controlsContainer = document.createElement("div");
                controlsContainer.classList.add("quick-controls");
                controlsContainer.innerHTML =
                  "<label>Quick Settings:</label>" +
                  '<smart-button disabled class="undo" title="Undo"><span class="icon"></span></smart-button>' +
                  '<smart-button disabled class="redo" title="Redo"><span class="icon"></span></smart-button>';
                controlsContainer.addEventListener("click", buttonHandler);
                header.appendChild(controlsContainer);
              },
            };
          }
        }
      );

      function buttonHandler(event) {
        const target = event.target,
          scheduler = document.getElementById("scheduler");
        if (!target.closest) {
          return;
        }
        if (target.closest(".smart-button.undo")) {
          scheduler.undo();
        } else if (target.closest(".smart-button.redo")) {
          scheduler.redo();
        }
        updateButtons();
      }

      function updateButtons() {
        const scheduler = document.getElementById("scheduler"),
          buttonUndo = scheduler.querySelector(".smart-button.undo"),
          buttonRedo = scheduler.querySelector(".smart-button.redo");
        if (buttonUndo) {
          buttonUndo.disabled = !scheduler.canUndo();
        }
        if (buttonRedo) {
          buttonRedo.disabled = !scheduler.canRedo();
        }
      }

      const scheduler = document.getElementById("scheduler");
      scheduler.addEventListener("dragEnd", updateButtons);
      scheduler.addEventListener("resizeEnd", updateButtons);
      scheduler.addEventListener("itemRemove", updateButtons);
      scheduler.addEventListener("itemInsert", updateButtons);
      scheduler.addEventListener("itemUpdate", updateButtons);
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

.quick-controls {
  padding: var(--smart-scheduler-header-padding);
  display: grid;
  align-items: center;
  grid-column-gap: 10px;
  grid-template-columns: auto repeat(2, 1fr);
  grid-template-rows: 100%;
}

.undo .icon,
.redo .icon {
  position: relative;
  width: 100%;
  height: 100%;
}

.undo .icon::after,
.redo .icon::after {
  content: "\e90c";
  width: 100%;
  height: 100%;
  display: block;
  font-family: var(--smart-font-family-icon);
  font-size: var(--smart-font-size);
  font-weight: 600;
}

.redo .icon::after {
  transform: scaleX(-1);
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
