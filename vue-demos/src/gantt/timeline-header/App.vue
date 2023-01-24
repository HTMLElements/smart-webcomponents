<template>
  <div class="vue-root">
    <p>
      <b>Description:</b> Custom Task Columns with custom content.
    </p>
    <smart-gantt-chart id="ganttChart"></smart-gantt-chart>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.ganttchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#ganttChart",
        class {
          get properties() {
            return {
              sortable: true,
              dataSource: [
                {
                  label: "Summer Camp",
                  dateStart: "2021-06-01",
                  dateEnd: "2021-06-20",
                  type: "task",
                  resources: [
                    {
                      id: "jack",
                      label: "Jack",
                      type: "conditioner"
                    }
                  ]
                },
                {
                  label: "Stadium Maintenance",
                  dateStart: "2021-06-01",
                  dateEnd: "2021-07-30",
                  type: "task",
                  resources: [
                    {
                      id: "silvio",
                      label: "Silvio",
                      type: "director"
                    }
                  ],
                  connections: [
                    {
                      target: 0,
                      type: 0
                    }
                  ]
                },
                {
                  label: "Managing",
                  synchronized: true,
                  expanded: true,
                  disableResources: true,
                  type: "project",
                  connections: [
                    {
                      target: 4,
                      type: 2
                    }
                  ],
                  tasks: [
                    {
                      label: "Contracts Handling",
                      dateStart: "2021-06-01",
                      dateEnd: "2021-08-01",
                      resources: [
                        {
                          id: "yana",
                          label: "Yana",
                          type: "manager"
                        }
                      ],
                      connections: [
                        {
                          target: 5,
                          type: 0
                        }
                      ]
                    },
                    {
                      label: "Fans and Merchandise",
                      dateStart: "2021-07-01",
                      dateEnd: "2021-08-31",
                      resources: [
                        {
                          id: "tina",
                          label: "Tina",
                          type: "manager"
                        }
                      ]
                    },
                    {
                      label: "Transfers",
                      dateStart: "2021-06-01",
                      dateEnd: "2021-08-01",
                      type: "task",
                      resources: [
                        {
                          id: "michael",
                          label: "Michael",
                          type: "manager"
                        },
                        {
                          id: "antony",
                          label: "Antony",
                          type: "manager"
                        }
                      ]
                    }
                  ],
                  resources: [
                    {
                      id: "silvio",
                      label: "Silvio",
                      type: "owner"
                    }
                  ]
                },
                {
                  label: "Medical Treatment",
                  dateStart: "2021-06-21",
                  dateEnd: "2022-05-26",
                  type: "task",
                  resources: [
                    {
                      id: "oliver",
                      label: "Oliver",
                      type: "medic"
                    },
                    {
                      id: "melany",
                      label: "Melany",
                      type: "medic"
                    }
                  ],
                  connections: [
                    {
                      target: 7,
                      type: 0
                    }
                  ]
                },
                {
                  label: "Pre-season Training",
                  dateStart: "2021-06-21",
                  dateEnd: "2021-07-31",
                  type: "task",
                  resources: [
                    {
                      id: "michael",
                      label: "Michael",
                      type: "coach"
                    },
                    {
                      id: "antony",
                      label: "Antony",
                      type: "assistent"
                    }
                  ],
                  connections: [
                    {
                      target: 8,
                      type: 1
                    }
                  ]
                },
                {
                  label: "Winter Season",
                  dateStart: "2021-08-10",
                  dateEnd: "2021-12-31",
                  type: "task",
                  resources: [
                    {
                      id: "gigi",
                      label: "Gianluigi",
                      type: "defender"
                    }
                  ],
                  connections: [
                    {
                      target: 9,
                      type: 1
                    }
                  ]
                },
                {
                  label: "Mid-season Vacation",
                  dateStart: "2022-01-01",
                  dateEnd: "2022-01-20",
                  type: "task",
                  resources: [
                    {
                      id: "gigi",
                      label: "Gianluigi",
                      type: "defender"
                    }
                  ],
                  connections: [
                    {
                      target: 10,
                      type: 1
                    }
                  ]
                },
                {
                  label: "Spring Season",
                  dateStart: "2022-01-21",
                  dateEnd: "2022-05-24",
                  type: "task",
                  resources: [
                    {
                      id: "gigi",
                      label: "Gianluigi",
                      type: "defender"
                    }
                  ],
                  connections: [
                    {
                      target: 11,
                      type: 1
                    }
                  ]
                },
                {
                  label: "End Of Season",
                  dateStart: "2022-05-26",
                  disableResources: true,
                  type: "milestone"
                }
              ],
              dateStart: "2021-05-26",
              view: "month",
              treeSize: "30%",
              taskColumns: [
                {
                  label: "Labels",
                  value: "label",
                  //Column min size
                  size: "40%",
                  //Custom format function
                  formatFunction: function(label) {
                    if (label === "Learn") {
                      return ' <i class="material-icons">&#xE80C;</i>' + label;
                    } else if (label === "Work") {
                      return ' <i class="material-icons">&#xE30A;</i>' + label;
                    } else if (label === "Travel") {
                      return ' <i class="material-icons">&#xE53D;</i>' + label;
                    } else if (label === "Eat") {
                      return ' <i class="material-icons">&#xE56C;</i>' + label;
                    } else if (label === "Shop") {
                      return ' <i class="material-icons">&#xE25C;</i>' + label;
                    } else if (label === "Train") {
                      return ' <i class="material-icons">&#xE52F;</i>' + label;
                    } else {
                      return label;
                    }
                  }
                },
                {
                  label: "Date Start",
                  value: "dateStart",
                  //Custom format function
                  formatFunction: date => {
                    const ganttChart = document.querySelector(
                      "smart-gantt-chart"
                    );
                    return new Date(date).toLocaleDateString(
                      ganttChart.locale,
                      {}
                    );
                  },
                  size: "25%"
                },
                {
                  label: "Date End",
                  value: "dateEnd",
                  size: "25%"
                }
              ],
              headerTemplate: "headerTemplate",
              hideResourcePanel: true
            };
          }
        }
      );

      const ganttChart = document.querySelector("smart-gantt-chart");
      const views = ["day", "week", "month", "year"];
      let view, stateId, states;

      const headerTemplate = document.createElement("template");
      headerTemplate.id = "headerTemplate";
      headerTemplate.innerHTML = `<div class="header-controls">
        <div class="zooming">
          <smart-button id="zoomIn">
            <i class="material-icons">zoom_in</i>
          </smart-button>
          <smart-button id="zoomOut">
            <i class="material-icons">zoom_out</i>
          </smart-button>
        </div>
        <div class="resource-view">
          <smart-button id="view">Show Resource View</smart-button>
        </div>
        <div class="actions">
          <smart-button id="undo" disabled>
            <i class="material-icons">restore</i>
          </smart-button>
          <smart-button id="redo" disabled>
            <i class="material-icons">update</i>
          </smart-button>
        </div>
      </div>`;
      document.body.appendChild(headerTemplate);
      ganttChart.headerTemplate = "headerTemplate";

      ganttChart.whenRendered(() => {
        view = ganttChart.view;
        stateId = 0;
        states = {
          0: ganttChart.getState()
        };

        document
          .querySelector(".header-controls")
          .addEventListener("click", function(event) {
            const button = event.target.closest("smart-button");
            if (!button) {
              return;
            }
            //let targetView;
            switch (button.id) {
              case "view":
                if (ganttChart.view === "resource") {
                  ganttChart.view = view;
                } else {
                  view = ganttChart.view;
                  ganttChart.view = "resource";
                }
                break;
              case "zoomIn":
              case "zoomOut": {
                const isResourceView = ganttChart.view === "resource",
                  isZoomIn = button.id === "zoomIn",
                  maxValue = isZoomIn ? views[views.length - 1] : views[0];
                ganttChart.view = view =
                  views[views.indexOf(view) + (isZoomIn ? -1 : 1) * 1] ||
                  maxValue;
                if (isResourceView) {
                  ganttChart.view = "resource";
                }
                document.getElementById(
                  isZoomIn ? "zoomOut" : "zoomIn"
                ).disabled = false;
                if (
                  (isZoomIn && view === "day") ||
                  (!isZoomIn && view === "year")
                ) {
                  button.disabled = true;
                }
                break;
              }
              case "undo":
              case "redo":
                if (button.id === "undo") {
                  stateId -= 1;
                  if (states[stateId]) {
                    ganttChart.loadState(states[stateId]);
                    document.getElementById("redo").disabled = false;
                  }
                  if (!states[stateId] || !states[stateId - 1]) {
                    button.disabled = true;
                  }
                } else {
                  stateId += 1;
                  if (states[stateId]) {
                    ganttChart.loadState(states[stateId]);
                    document.getElementById("undo").disabled = false;
                  }
                  if (!states[stateId] || !states[stateId + 1]) {
                    button.disabled = true;
                  }
                }
                stateId = Math.max(
                  0,
                  Math.min(Object.keys(states).length - 1, stateId)
                );
                return;
            }
            ganttChart.ensureVisible(0);
          });
      });

      function storeState() {
        stateId++;
        states[stateId] = ganttChart.getState();
        document.getElementById("undo").disabled = false;
      }
      ganttChart.addEventListener("change", storeState);
      ganttChart.addEventListener("dragEnd", storeState);
      ganttChart.addEventListener("resizeEnd", storeState);
      ganttChart.addEventListener("progressChangeEnd", storeState);
      ganttChart.addEventListener("connectionEnd", storeState);
    });
  }
};
</script>

<style>
/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: inherit;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  font-size: 21px;
}

smart-gantt-chart {
  height: auto;
  --smart-gantt-chart-header-height: 40px;
}

.header-controls {
  height: 100%;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-column-gap: 5px;
  overflow: hidden;
  padding: 5px;
  --smart-button-padding: 2.5px 10px;
}

.zooming,
.resource-view,
.actions {
  min-height: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.zooming,
.actions {
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
}

.resource-view {
  justify-content: center;
}

.zooming smart-button,
.actions smart-button {
  width: auto;
  height: 100%;
}

.resource-view smart-button {
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
