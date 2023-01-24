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
        currentYear = today.getFullYear(),
        currentMonth = today.getMonth(),
        data = [
          {
            label: "Michael",
            dateStart: new Date(currentYear, currentMonth, 21, 9, 30),
            dateEnd: new Date(currentYear, currentMonth, 21, 11, 30),
          },
          {
            label: "Bobby",
            clientId: 1,
            dateStart: new Date(currentYear, currentMonth, 24, 10, 0),
            dateEnd: new Date(currentYear, currentMonth, 24, 12, 0),
          },
          {
            label: "Steven",
            clientId: 3,
            dateStart: new Date(currentYear, currentMonth, 21, 13),
            dateEnd: new Date(currentYear, currentMonth, 21, 15, 30),
          },
          {
            label: "Natally",
            clientId: 2,
            dateStart: new Date(currentYear, currentMonth, 22, 10, 0),
            dateEnd: new Date(currentYear, currentMonth, 22, 11, 0),
          },
          {
            label: "Monica",
            clientId: 3,
            dateStart: new Date(currentYear, currentMonth, 22, 12, 0),
            dateEnd: new Date(currentYear, currentMonth, 22, 13, 35),
          },
          {
            label: "George",
            clientId: 2,
            dateStart: new Date(currentYear, currentMonth, 21, 13, 0),
            dateEnd: new Date(currentYear, currentMonth, 21, 15, 15),
          },
          {
            label: "Anna",
            clientId: 1,
            dateStart: new Date(currentYear, currentMonth, 22, 9),
            dateEnd: new Date(currentYear, currentMonth, 22, 12, 15),
          },
          {
            label: "Yoanna",
            clientId: 2,
            dateStart: new Date(currentYear, currentMonth, 23, 12, 0),
            dateEnd: new Date(currentYear, currentMonth, 23, 14, 0),
          },
          {
            label: "Michael",
            clientId: 1,
            dateStart: new Date(currentYear, currentMonth, 21, 9),
            dateEnd: new Date(currentYear, currentMonth, 21, 11, 30),
          },
          {
            label: "Steven",
            clientId: 2,
            dateStart: new Date(currentYear, currentMonth, 24, 11, 0),
            dateEnd: new Date(currentYear, currentMonth, 24, 13, 30),
          },
          {
            label: "Bobby",
            clientId: 1,
            dateStart: new Date(currentYear, currentMonth, 23, 11, 0),
            dateEnd: new Date(currentYear, currentMonth, 23, 13, 30),
          },
          {
            label: "Monica",
            clientId: 2,
            dateStart: new Date(currentYear, currentMonth, 25, 10, 0),
            dateEnd: new Date(currentYear, currentMonth, 25, 11, 30),
          },
          {
            label: "George",
            clientId: 1,
            dateStart: new Date(currentYear, currentMonth, 25, 9, 0),
            dateEnd: new Date(currentYear, currentMonth, 25, 15, 0),
          },
          {
            label: "Yoanna",
            clientId: 3,
            dateStart: new Date(currentYear, currentMonth, 12, 16, 30),
            dateEnd: new Date(currentYear, currentMonth, 13, 18, 0),
          },
          {
            label: "Anna",
            clientId: 3,
            dateStart: new Date(currentYear, currentMonth, 25, 12, 20),
            dateEnd: new Date(currentYear, currentMonth, 25, 14, 0),
          },
          {
            label: "Natally",
            clientId: 1,
            dateStart: new Date(currentYear, currentMonth, 28, 9, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 28, 12, 0, 0),
          },
          {
            label: "Steven",
            clientId: 3,
            dateStart: new Date(currentYear, currentMonth, 28, 13, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 28, 15, 30, 0),
          },
          {
            label: "Yoanna",
            clientId: 3,
            dateStart: new Date(currentYear, currentMonth, 29, 13, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 29, 15, 45, 0),
          },
          {
            label: "Michael",
            clientId: 2,
            dateStart: new Date(currentYear, currentMonth, 29, 9, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 29, 12, 0, 0),
          },
          {
            label: "Monica",
            clientId: 1,
            dateStart: new Date(currentYear, currentMonth, 29, 11, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 29, 14, 15, 0),
          },
          {
            label: "Natally",
            clientId: 1,
            dateStart: new Date(currentYear, currentMonth - 1, 1, 9, 0, 0),
            dateEnd: new Date(currentYear, currentMonth - 1, 1, 11, 45, 0),
          },
          {
            label: "Bobby",
            clientId: 1,
            dateStart: new Date(currentYear, currentMonth, 30, 10, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 30, 11, 30, 0),
          },
          {
            label: "Steven",
            clientId: 3,
            dateStart: new Date(currentYear, currentMonth, 30, 13, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 30, 15, 0, 0),
          },
          {
            label: "Monica",
            clientId: 2,
            dateStart: new Date(currentYear, currentMonth, 30, 11, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 30, 14, 0, 0),
          },
          {
            label: "George",
            clientId: 2,
            dateStart: new Date(currentYear, currentMonth, 28, 10, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 28, 13, 0, 0),
          },
          {
            label: "Anna",
            clientId: 2,
            dateStart: new Date(currentYear, currentMonth - 1, 1, 12, 0, 0),
            dateEnd: new Date(currentYear, currentMonth - 1, 1, 15, 0, 0),
          },
          {
            label: "Yoanna",
            clientId: 2,
            dateStart: new Date(currentYear, currentMonth, 31, 9, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 31, 13, 0, 0),
          },
          {
            label: "Michael",
            clientId: 1,
            dateStart: new Date(currentYear, currentMonth, 31, 11, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 31, 14, 0, 0),
          },
        ];
      const clients = [
        {
          label: "Andrew White",
          id: 1,
          age: 34,
          discipline: "Cross Fit",
        },
        {
          label: "Nancy Smith",
          id: 2,
          age: 21,
          discipline: "Zumba",
        },
        {
          label: "Kate Johnson",
          id: 3,
          age: 35,
          discipline: "Yoga",
        },
      ];
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              view: "week",
              views: ["day", "week", "month"],
              dateCurrent: new Date(),
              dataSource: data,
              cellTemplate: function (cell, date) {
                if (cell.classList.contains("all-day") || cell.querySelector('.gym')) {
                  return;
                }
                
                const newContent = document.createElement("span");
                
                newContent.classList.add("gym");
                newContent.setAttribute("date", date.getDate().toString());

                if (this.view === "day" || this.view === "week") {
                  newContent.setAttribute("hour", date.getHours().toString());
                }
                
                cell.appendChild(newContent);
              },
              hourStart: 6,
              hourEnd: 22,
              firstDayOfWeek: 1,
              groups: ["clientId"],
              resources: [
                {
                  value: "clientId",
                  dataSource: clients,
                  label: "Client",
                }
              ]
            };
          }
        }
      );

      const scheduler = document.querySelector('smart-scheduler');

       scheduler.whenRendered(() => {
        const template = document.createElement("template");

        template.id = "groupTemplate";
        template.innerHTML = `
            <div class="resource-content">
              <div class="avatar"></div>
              <div>
                <div class="name">{{label}}</div>
                <div class="info">
                  <label>Age: {{age}}</label> <strong>{{discipline}}</strong>
                </div>
              </div>
            </div>`;

        document.body.appendChild(template);

        scheduler.groupTemplate = "groupTemplate";
      });
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
}

.smart-scheduler {
  width: 100%;
  height: 100%;
  --smart-scheduler-event-size-basic: 35px;
  --smart-scheduler-timeline-cell-width: 50px;
  --smart-scheduler-timeline-cell-min-width: 50px;
  --smart-scheduler-timeline-header-horizontal-group-size: 125px;
  --smart-scheduler-timeline-all-day-label-font-weight: 300;
  --smart-scheduler-timeline-header-cell-padding: 1px;
  /* --smart-scheduler-timeline-header-add-day-cells-size: 0; */
  /* Client variables */
  --employee-1-rgb-color: 59, 7, 72;
  --employee-2-rgb-color: 95, 54, 141;
  --employee-3-rgb-color: 5, 22, 61;
}

.smart-scheduler [clientId="1"],
.smart-scheduler [clientId="1"][other-month] {
  --smart-scheduler-timeline-weekend-color: rgba(
    var(--employee-1-rgb-color),
    0.2
  );
  --employee-rgb-color: var(--employee-1-rgb-color);
  --smart-scheduler-event-background-rgb: var(--employee-1-rgb-color);
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

.smart-scheduler [clientId="2"],
.smart-scheduler [clientId="2"][other-month] {
  --smart-scheduler-timeline-weekend-color: rgba(
    var(--employee-2-rgb-color),
    0.2
  );
  --employee-rgb-color: var(--employee-2-rgb-color);
  --smart-scheduler-event-background-rgb: var(--employee-2-rgb-color);
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

.smart-scheduler [clientId="3"],
.smart-scheduler [clientId="3"][other-month] {
  --smart-scheduler-timeline-weekend-color: rgba(
    var(--employee-3-rgb-color),
    0.2
  );
  --employee-rgb-color: var(--employee-3-rgb-color);
  --smart-scheduler-event-background-rgb: var(--employee-3-rgb-color);
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

/* CellTemplate styles */

.smart-scheduler .gym {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 2.5px;
  background-repeat: no-repeat;
  background-position: center;
}

/* GroupTemplate Styles */

.smart-scheduler .resource-content {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  width: 100%;
  height: 100%;
  background: rgba(var(--employee-rgb-color), 1);
}

.smart-scheduler .resource-content .avatar {
  padding: 0 10px 0 10px;
  height: 100%;
  display: flex;
  justify-content: center;
}

.smart-scheduler .resource-content .avatar::before {
  content: "";
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 0px;
  background-position: center;
  background-size: cover;
  box-shadow: 0 0 3px 3px inset rgba(var(--employee-rgb-color), 1);
}

.smart-scheduler [clientId="1"] .resource-content .avatar::before {
  background-image: url("./../../../demos/images/people/andrew.png");
}

.smart-scheduler [clientId="2"] .resource-content .avatar::before {
  background-image: url("./../../../demos/images/people/nancy.png");
}

.smart-scheduler [clientId="3"] .resource-content .avatar::before {
  background-image: url("./../../../demos/images/people/anne.png");
}

.smart-scheduler .resource-content > div,
.smart-scheduler .resource-content .info,
.smart-scheduler .resource-content .name {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.smart-scheduler .resource-content > div {
  padding: 0 10px 0 10px;
}

.smart-scheduler .resource-content .info,
.smart-scheduler .resource-content .name {
  align-items: flex-start;
}

.smart-scheduler .resource-content .info {
  color: white;
}

.smart-scheduler .resource-content .name {
  color: white;
  font-weight: 400;
  font-size: 28px;
}

#app,
.vue-root {
  height: 100%;
}
</style>
