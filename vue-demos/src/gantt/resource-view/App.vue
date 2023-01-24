<template>
  <div class="vue-root">
    <div class="demo-description">
      <p>
        <b>Description</b>
        <br />Multiple tasks with resources assigned to some of them are displayed inside
        the GanttChart.
        <br />Those that do not have tasks assigned have a question mark. Projects are
        not allowed to have resources assigned to them, thanks to the
        <b>disableResources</b> property.
        <br />A formatFunction is applied to the "Assignee" column which displays tasks
        with multiple resources assigned in a different way.
        <br />The Resource Panel is hidden in order to see only the Tasks.
      </p>
    </div>
    <smart-gantt-chart id="ganttChart"></smart-gantt-chart>
    <div class="options">
      <h3>Switch view:</h3>
      <div class="option">
        <smart-check-box checked id="resourceView">Resource View</smart-check-box>
      </div>
      <div class="option">
        Resource view displays groups the tasks according to their assigned resources.
        Tasks that do not have resources assigned are added to the "Unassigned"
        group. Resource groups are sorted alphabetically.
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
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
              dataSource: [
                {
                  label: "Office Configuration",
                  synchronized: true,
                  expanded: true,
                  type: "task",
                  disableResources: true,
                  tasks: [
                    {
                      label: "Office Setup",
                      synchronized: true,
                      expanded: true,
                      disableResources: true,
                      type: "project",
                      tasks: [
                        {
                          label: "Office Acquiring",
                          dateStart: "2020-01-02",
                          dateEnd: "2020-01-05",
                          type: "task",
                          connections: [
                            {
                              target: 3,
                              type: 1
                            }
                          ],
                          resources: [
                            {
                              id: "taylor",
                              label: "Taylor"
                            },
                            {
                              id: "michael",
                              label: "Michael"
                            }
                          ]
                        },
                        {
                          label: "Office Interior",
                          dateStart: "2020-01-05",
                          dateEnd: "2020-01-15",
                          type: "task",
                          connections: [
                            {
                              target: 4,
                              type: 0
                            }
                          ],
                          resources: [
                            {
                              id: "anna",
                              label: "Anna"
                            },
                            {
                              id: "samantha",
                              label: "Samantha"
                            },
                            {
                              id: "christina",
                              label: "Christina"
                            }
                          ]
                        },
                        {
                          label: "Office Security",
                          dateStart: "2020-01-05",
                          dateEnd: "2020-01-10",
                          type: "task",
                          connections: [
                            {
                              target: 5,
                              type: 1
                            }
                          ],
                          resources: {
                            id: "tommy",
                            label: "Tommy"
                          }
                        }
                      ]
                    },
                    {
                      label: "Employee Positioning",
                      dateStart: "2020-01-11",
                      dateEnd: "2020-01-15",
                      type: "task",
                      resources: {
                        id: "carol",
                        label: "Carol"
                      }
                    },
                    {
                      label: "Cleaners",
                      dateStart: "2020-01-10",
                      dateEnd: "2020-01-15",
                      type: "task",
                      resources: {
                        id: "rachel",
                        label: "Rachel"
                      }
                    },
                    {
                      label: "Catering",
                      dateStart: "2020-01-11",
                      dateEnd: "2020-01-16",
                      type: "task"
                    },
                    {
                      label: "Transport",
                      dateStart: "2020-01-12",
                      dateEnd: "2020-01-17",
                      type: "task"
                    },
                    {
                      label: "Human Resources",
                      dateStart: "2020-01-10",
                      dateEnd: "2020-01-20",
                      type: "task",
                      resources: [
                        {
                          id: "annabell",
                          label: "Annabell"
                        },
                        {
                          id: "monica",
                          label: "Monica"
                        }
                      ]
                    }
                  ]
                },
                {
                  label: "Operations",
                  synchronized: true,
                  expanded: true,
                  disableResources: true,
                  type: "project",
                  tasks: [
                    {
                      label: "Development",
                      dateStart: "2020-01-20",
                      dateEnd: "2020-02-01",
                      type: "task",
                      resources: [
                        {
                          id: "jason",
                          label: "Jason"
                        },
                        {
                          id: "aaron",
                          label: "Aaron"
                        }
                      ]
                    },
                    {
                      label: "Marketing",
                      dateStart: "2020-01-10",
                      dateEnd: "2020-01-31",
                      type: "task",
                      resources: {
                        id: "sonya",
                        label: "Sonya"
                      }
                    },
                    {
                      label: "Quality Assurance",
                      dateStart: "2020-02-01",
                      dateEnd: "2020-02-05",
                      type: "task",
                      resources: {
                        id: "rick",
                        label: "Rick"
                      }
                    },
                    {
                      label: "Market Researchers",
                      dateStart: "2020-01-01",
                      dateEnd: "2020-01-05",
                      type: "task",
                      resources: ["jason", "sonya"]
                    },
                    {
                      label: "Managers",
                      dateStart: "2020-01-20",
                      dateEnd: "2020-01-31",
                      type: "task",
                      resources: {
                        id: "ryan",
                        label: "Ryan"
                      }
                    }
                  ]
                },
                {
                  label: "Production",
                  synchronized: true,
                  expanded: true,
                  disableResources: true,
                  type: "project",
                  progress: 50,
                  resources: 4,
                  tasks: [
                    {
                      label: "Technology",
                      synchronized: true,
                      expanded: true,
                      disableResources: true,
                      type: "project",
                      tasks: [
                        {
                          label: "Updates",
                          dateStart: "2020-01-16",
                          dateEnd: "2020-01-20",
                          type: "task",
                          connections: [
                            {
                              target: 19,
                              type: 0
                            }
                          ],
                          resources: {
                            id: "oliver",
                            label: "Oliver"
                          }
                        },
                        {
                          label: "Lifecycle",
                          dateStart: "2020-01-16",
                          dateEnd: "2020-01-18",
                          type: "task",
                          connections: [
                            {
                              target: 20,
                              type: 1
                            }
                          ]
                        },
                        {
                          label: "Testing",
                          dateStart: "2020-01-20",
                          dateEnd: "2020-01-25",
                          type: "task",
                          resources: {
                            id: "jessica",
                            label: "Jessica"
                          }
                        }
                      ]
                    },
                    {
                      label: "Servers and Backup",
                      dateStart: "2020-01-10",
                      dateEnd: "2020-01-12",
                      type: "task",
                      resources: "oliver"
                    },
                    {
                      label: "Meetings",
                      dateStart: "2020-01-12",
                      dateEnd: "2020-01-15",
                      type: "task",
                      resources: "ryan"
                    },
                    {
                      label: "Feedback and Improvements",
                      dateStart: "2020-02-01",
                      dateEnd: "2020-02-10",
                      type: "task"
                    }
                  ]
                }
              ],
              taskColumns: [
                {
                  label: "Task Name",
                  value: "label",
                  size: "40%"
                },
                {
                  label: "Start Time",
                  value: "dateStart",
                  size: "25%"
                },
                {
                  label: "Assignee",
                  value: "resources",
                  size: "20%",
                  formatFunction: function(data, taskIndex) {
                    const gantt = document.querySelector("smart-gantt-chart"),
                      resources = gantt.resources,
                      tasks = gantt.tasks,
                      getResource = d =>
                        resources.find(
                          res => res.id.toString() === d.toString()
                        );
                    if (tasks[taskIndex].disableResources) {
                      return "";
                    }
                    if (!data.length) {
                      return '<span class="gantt-chart-task-assignee unassigned">?</span>';
                    } else if (data.length === 1) {
                      return `<span>${getResource(data[0]).label}</span>`;
                    } else {
                      let result = "";
                      for (let i = 0; i < data.length; i++) {
                        const resource = getResource(data[i]);
                        if (resource) {
                          result += `<span class="gantt-chart-task-assignee ${resource.id.toLowerCase()}">${resource.label.charAt(
                            0
                          )}</span>`;
                        }
                      }
                      return result;
                    }
                  }
                },
                {
                  label: "Duration",
                  value: "duration"
                }
              ],
              treeSize: "30%",
              durationUnit: "day",
              hideResourcePanel: true,
              view: "week",
              timelineHeaderFormatFunction: function(date, type) {
                const gantt = document.querySelector("smart-gantt-chart");
                if (type === "week") {
                  const startDayOfWeek = new Date(date),
                    endDateOfWeek = new Date(date);
                  endDateOfWeek.setDate(date.getDate() + 6);
                  return (
                    startDayOfWeek.toLocaleDateString(gantt.locale, {
                      day: "numeric",
                      month: gantt.monthFormat,
                      year: gantt.yearFormat
                    }) +
                    " - " +
                    endDateOfWeek.toLocaleDateString(gantt.locale, {
                      day: "numeric",
                      month: gantt.monthFormat,
                      year: gantt.yearFormat
                    })
                  );
                }
                if (type === "day") {
                  return date.toLocaleDateString(gantt.locale, {
                    day: "numeric",
                    month: gantt.monthFormat
                  });
                }
              }
            };
          }
        }
      );

      const ganttChart = document.querySelector("smart-gantt-chart");
      ganttChart.view = "resource";
      document
        .getElementById("resourceView")
        .addEventListener("change", function(event) {
          ganttChart.view = event.detail.value ? "resource" : "week";
        });
    });
  }
};
</script>

<style>
smart-gantt-chart {
  width: calc(100% - 300px);
  --smart-gantt-chart-task-label-color: white;
  --smart-gantt-chart-task-color: #517eb5;
  --smart-gantt-chart-project-color: #45af50;
  --smart-gantt-chart-project-label-color: var(
    --smart-gantt-chart-task-label-color
  );
  --smart-gantt-chart-project-label-color-selected: var(
    --smart-gantt-chart-project-label-color
  );
  --smart-gantt-chart-task-label-color-selected: var(
    --smart-gantt-chart-task-label-color
  );
}
@media only screen and (max-width: 600px) {
  .smart-gantt-chart {
    width: 100%;
    height: auto;
  }
}

smart-gantt-chart .smart-task-item[group] > .smart-task-label-container,
smart-gantt-chart .smart-tree-items-group > .smart-tree-item-label-container {
  font-weight: bold;
}

smart-gantt-chart .gantt-chart-task-assignee {
  border-radius: 50%;
  color: white;
  background: linear-gradient(45deg, #13547a, #80d0c7);
  width: calc(var(--smart-gantt-chart-task-default-height) - 10px);
  height: calc(var(--smart-gantt-chart-task-default-height) - 10px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px 0px grey;
  margin-right: 5px;
}

smart-gantt-chart .unassigned {
  background: red;
}
</style>
