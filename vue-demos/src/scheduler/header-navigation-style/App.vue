<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
    <div class="options">
      <div class="description">
        <h4>Description</h4>
        <p>
          <b>headerNavigationStyle</b> determines the layout style of the header
          controls.
        </p>
        <p>Choose a style:</p>
      </div>
      <div class="option">
        <smart-radio-button checked>flat</smart-radio-button>
        <smart-radio-button>raised</smart-radio-button>
      </div>
      <div class="option">
        <h4>Additional settings:</h4>
        <smart-check-box id="hideTodayButton"
          >Hide Today Button</smart-check-box
        >
        <smart-check-box id="hideViewMenuCheckableItems"
          >Hide View Menu Checkable Item</smart-check-box
        >
        <smart-check-box id="disableDateMenu"
          >Disable Date Menu</smart-check-box
        >
        <smart-check-box id="disableViewMenu"
          >Disable View Menu</smart-check-box
        >
        <smart-check-box id="disableContextMenu"
          >Disable Context Menu</smart-check-box
        >
        <smart-check-box id="disableEventMenu"
          >Disable Event Menu</smart-check-box
        >
        <smart-check-box id="disableWindowEditor"
          >Disable Window Editor</smart-check-box
        >
        <smart-check-box id="disableDrag">Disable Event Drag</smart-check-box>
        <smart-check-box id="disableDrop">Disable Event Drop</smart-check-box>
        <smart-check-box id="disableResize"
          >Disable Event Resize</smart-check-box
        >
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
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
            backgroundColor: "#689F38",
          },
          {
            label: "Book Flights to San Fran for Sales Trip",
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
            backgroundColor: "#7986CB",
          },
          {
            label: "Install New Router in Conference Room",
            dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate - 2,
              14,
              30
            ),
            backgroundColor: "#8D6E63",
          },
          {
            label: "Add a new desk to the Dev Room",
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
            backgroundColor: "#00C853",
          },
          {
            label: "Install New Router in Dev Room",
            dateStart: new Date(currentYear, currentMonth, currentDate, 13),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
            backgroundColor: "#2196F3",
          },
          {
            label: "Approve Personal Computer Upgrade Plan",
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
            backgroundColor: "#689F38",
          },
          {
            label: "Final Budget Review",
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
            backgroundColor: "#FDD835",
          },
          {
            label: "Old Brochures",
            dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              15,
              15
            ),
            backgroundColor: "#FF8A65",
          },
          {
            label: "New Brochures",
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
            backgroundColor: "#0D47A1",
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
            backgroundColor: "#004D40",
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
            backgroundColor: "#FF3D00",
          },
          {
            label: "Upgrade Personal Computers",
            dateStart: new Date(currentYear, currentMonth, currentDate, 9),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
            backgroundColor: "#689F38",
          },
          {
            label: "Prepare current Year Marketing Plan",
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
            backgroundColor: "#2196F3",
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
            backgroundColor: "#CE93D8",
          },
        ];

      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              view: "day",
              dataSource: data,
              hourStart: 9,
              hourEnd: 18,
              firstDayOfWeek: 1,
            };
          }
        }
      );

      const scheduler = document.querySelector("smart-scheduler");

      document
        .querySelector(".options")
        .addEventListener("change", function (event) {
          const target = event.target;

          if (target instanceof window.Smart.RadioButton) {
            scheduler.headerNavigationStyle = target.textContent.trim();
          } 
          else if (target instanceof window.Smart.CheckBox) {
            scheduler[target.id] = event.detail.value;
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

.smart-scheduler {
  width: calc(100% - 260px);
  height: 100%;
  --smart-scheduler-timeline-cell-height: 50px;
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
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
