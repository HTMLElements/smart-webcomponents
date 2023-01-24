<template>
  <div class="vue-root">
    <div id="description">
      <p>
        <b>Description:</b> The following demo displays a Company Acqusition
        process where the Timeline is in months by displaying the weeks of the
        months from their starting date. Some of the Tasks have Resources
        assigned to them. Selecting a resource from the Resource Tree will
        select the assigned task and vice versa. The Resource Timeline indicates
        the working hours for each week by resource. A Custom Header is applied
        to the Resource Panel and it contains controls that allow to show the
        resources by type or change the Resource Timeline view.
      </p>
    </div>
    <smart-gantt-chart id="ganttChart"></smart-gantt-chart>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.ganttchart.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#ganttChart",
        class {
          get properties() {
            return {
              dataSource: [
                {
                  label: "Company Acqusition",
                  synchronized: true,
                  expanded: true,
                  type: "task",
                  disableResources: true,
                  connections: [
                    {
                      target: 17,
                      type: 1,
                    },
                  ],
                  tasks: [
                    {
                      label: "Rebranding",
                      synchronized: true,
                      expanded: true,
                      type: "project",
                      disableResources: true,
                      tasks: [
                        {
                          label: "Software rebranding",
                          synchronized: true,
                          expanded: true,
                          type: "project",
                          disableResources: true,
                          tasks: [
                            {
                              label: "Website refresh",
                              dateStart: "2020-06-01",
                              dateEnd: "2020-06-30",
                              progress: 25,
                              type: "task",
                              connections: [
                                {
                                  target: 4,
                                  type: 0,
                                },
                              ],
                              resources: {
                                id: "lana",
                                label: "Lana",
                                type: "worker",
                              },
                            },
                            {
                              label: "Services refresh",
                              dateStart: "2020-06-01",
                              dateEnd: "2020-07-30",
                              progress: 15,
                              type: "task",
                              resources: {
                                id: "brian",
                                label: "Brian",
                                type: "worker",
                              },
                            },
                          ],
                        },
                        {
                          label: "Physical rebranding",
                          synchronized: true,
                          expanded: true,
                          type: "project",
                          disableResources: true,
                          tasks: [
                            {
                              label: "Building refresh",
                              dateStart: "2020-06-01",
                              dateEnd: "2020-09-30",
                              progress: 5,
                              type: "task",
                              connections: [
                                {
                                  target: 7,
                                  type: 0,
                                },
                              ],
                              resources: {
                                id: "buildCompany",
                                label: "Building Company",
                                type: "outsource",
                              },
                            },
                            {
                              label: "Company vehicles refresh",
                              dateStart: "2020-06-01",
                              dateEnd: "2020-08-31",
                              progress: 10,
                              type: "task",
                              resources: {
                                id: "carCompany",
                                label: "Car Company",
                                type: "outsource",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: "Contracting",
                      synchronized: true,
                      expanded: true,
                      type: "project",
                      disableResources: true,
                      tasks: [
                        {
                          label: "Review Current Staff",
                          dateStart: "2020-06-01",
                          dateEnd: "2020-07-30",
                          progress: 50,
                          type: "task",
                          connections: [
                            {
                              target: 10,
                              type: 1,
                            },
                          ],
                          resources: {
                            id: "rachel",
                            label: "Rachel",
                            type: "manager",
                          },
                        },
                        {
                          label: "Find More Clients",
                          dateStart: "2020-08-01",
                          dateEnd: "2020-12-01",
                          type: "task",
                          resources: {
                            id: "maria",
                            label: "Maria",
                            type: "manager",
                          },
                        },
                      ],
                    },
                    {
                      label: "Commercialization",
                      synchronized: true,
                      expanded: true,
                      type: "project",
                      disableResources: true,
                      tasks: [
                        {
                          label: "TV Commercials",
                          dateStart: "2020-06-01",
                          dateEnd: "2020-09-01",
                          progress: 30,
                          type: "task",
                          connections: [
                            {
                              target: 13,
                              type: 0,
                            },
                          ],
                          resources: [
                            {
                              id: "nate",
                              label: "Nate",
                              type: "commerce",
                            },
                            {
                              id: "miguel",
                              label: "Miguel",
                              type: "commerce",
                            },
                          ],
                        },
                        {
                          label: "Internet Commercials",
                          dateStart: "2020-06-01",
                          dateEnd: "2020-12-31",
                          progress: 60,
                          type: "task",
                          resources: {
                            id: "commerceCompany",
                            label: "Online Commercials",
                            type: "outsource",
                          },
                        },
                      ],
                    },
                    {
                      label: "Investments",
                      synchronized: true,
                      expanded: true,
                      type: "project",
                      disableResources: true,
                      tasks: [
                        {
                          label: "Bank Loans",
                          dateStart: "2020-05-01",
                          dateEnd: "2020-12-31",
                          progress: 70,
                          type: "task",
                          connections: [
                            {
                              target: 16,
                              type: 0,
                            },
                          ],
                          resources: {
                            id: "bank",
                            label: "Bank",
                            type: "investor",
                          },
                        },
                        {
                          label: "Direct Investors",
                          dateStart: "2020-06-01",
                          dateEnd: "2021-01-01",
                          progress: 30,
                          type: "task",
                          resources: {
                            id: "shareholders",
                            label: "Shareholders",
                            type: "investor",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "Phase 1 Completed",
                  dateStart: "2021-01-10",
                  type: "milestone",
                },
              ],
              taskColumns: [
                {
                  label: "Tasks",
                  value: "label",
                  size: "45%",
                },
                {
                  label: "Start Date",
                  value: "dateStart",
                  size: "20%",
                },
                {
                  label: "End Date",
                  value: "dateEnd",
                  size: "20%",
                },
                {
                  label: "Assigned",
                  value: "resources",
                  formatFunction: function (data) {
                    return `<span>${
                      data.length > 0 ? "&#10003" : "&#10007"
                    }</span>`;
                  },
                },
              ],
              resourceColumns: [
                {
                  label: "Employees",
                  value: "label",
                },
                {
                  label: "Position",
                  value: "type",
                  size: "25%",
                },
              ],
              treeSize: "30%",
              resourcePanelSize: "25%",
              durationUnit: "day",
              view: "month",
              timelineHeaderFormatFunction: function (
                date,
                type,
                isHeaderDetails
              ) {
                const that = document.querySelector("smart-gantt-chart"),
                  monthFormat = that.monthFormat,
                  weekStartDate = new Date(date);
                if (isHeaderDetails) {
                  return weekStartDate.toLocaleDateString(that.locale, {
                    month: monthFormat,
                    year: that.yearFormat,
                  });
                } else {
                  return weekStartDate.toLocaleDateString(that.locale, {
                    day: "numeric",
                    month: monthFormat,
                  });
                }
              },
            };
          }
        }
      );

      const ganttChart = document.querySelector("smart-gantt-chart"),
        template = document.createElement("template");

      template.id = "headerTemplate";
      template.innerHTML = `
            <div class="custom-resource-panel-header">
              <div class="treeHeader">
                <label>Resources Type:</label>
                <smart-drop-down-list id="resourceFilter" drop-down-append-to="body">
                  <smart-list-item value="all" selected>All</smart-list-item>
                  <smart-list-item value="investor">Investors</smart-list-item>
                  <smart-list-item value="manager">Managers</smart-list-item>
                  <smart-list-item value="worker">Workers</smart-list-item>
                  <smart-list-item value="outsource"
                    >External Company</smart-list-item
                  >
                </smart-drop-down-list>
              </div>
              <div class="timelineHeader">
                <smart-radio-button checked value="hours"
                  >Hours per week</smart-radio-button
                >
                <smart-radio-button value="tasks">Tasks per week</smart-radio-button>
              </div>
            </div>`;

      document.body.appendChild(template);
      ganttChart.resourcePanelHeaderTemplate = template.id;

      ganttChart.whenRendered(() => {
        document
          .querySelector(".custom-resource-panel-header")
          .addEventListener("change", function (event) {
            const target = event.target;
            if (target instanceof window.Smart.DropDownList) {
              const filter = event.detail.value,
                resources = ganttChart.resources;
              //Important Note: Begins a batch update
              ganttChart.beginUpdate();
              if (filter === "all") {
                for (let i = 0; i < resources.length; i++) {
                  const resource = resources[i];
                  if (resource.hidden) {
                    ganttChart.updateResource(resource, {
                      hidden: false,
                    });
                  }
                }
              } else {
                for (let i = 0; i < resources.length; i++) {
                  const resource = resources[i];
                  if (resource.type !== filter) {
                    ganttChart.updateResource(resource, {
                      hidden: true,
                    });
                  } else {
                    ganttChart.updateResource(resource, {
                      hidden: false,
                    });
                  }
                }
              }
              //Important Note: Ends the batch update
              ganttChart.endUpdate();
              return;
            }
            if (
              target instanceof window.Smart.RadioButton &&
              event.detail.value
            ) {
              ganttChart.resourceTimelineView = target.value;
            }
          });
      });
    });
  },
};
</script>

<style>
smart-gantt-chart {
  height: 80vh;
  --smart-gantt-chart-task-default-height: 35px;
}

.custom-resource-panel-header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2px 20px 2px 20px;
}

.custom-resource-panel-header .treeHeader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-resource-panel-header .timelineHeader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-resource-panel-header smart-drop-down-list {
  height: 100%;
  width: 150px;
  margin-left: 10px;
}

.custom-resource-panel-header smart-radio-button {
  height: 100%;
  --smart-background: transparent;
}

@media (max-width: 700px) {
  smart-gantt-chart {
    width: 95%;
    margin-left: 2%;
  }
}
</style>
