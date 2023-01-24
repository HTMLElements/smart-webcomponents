<template>
  <div class="vue-root">
    <div class="demo-description">
      <p>
        Resouces can be assigned to tasks via the
        <b>dataSource</b> property on
        initialization or the API methods. Clicking on the + icon will add a new
        task to the list at the same level.
      </p>
    </div>
    <smart-gantt-chart id="ganttChart"></smart-gantt-chart>
    <div class="options">
      <h3>Manage Resources:</h3>
      <div class="option">
        <smart-button id="insertResource">Insert</smart-button>
      </div>
      <div class="option">
        <smart-button id="updateResource">Update</smart-button>
      </div>
      <div class="option">
        <smart-button id="removeResource">Remove</smart-button>
      </div>
    </div>
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
              dataSource: [
                {
                  label: "Research",
                  synchronized: true,
                  expanded: true,
                  type: "task",
                  disableResources: true,
                  tasks: [
                    {
                      label: "Concept Formation",
                      dateStart: "2020-08-01",
                      dateEnd: "2020-08-31",
                      class: "concept-formation",
                      type: "task",
                      resources: {
                        id: 11,
                        label: "Will"
                      }
                    },
                    {
                      label: "Proposals",
                      synchronized: true,
                      expanded: true,
                      disableResources: true,
                      type: "project",
                      tasks: [
                        {
                          label: "Proposal Development",
                          dateStart: "2020-09-01",
                          dateEnd: "2020-10-31",
                          class: "proposal-development",
                          type: "task",
                          resources: {
                            id: 12,
                            label: "Taylor"
                          }
                        },
                        {
                          label: "Proposal Review & Submission",
                          dateStart: "2020-11-1",
                          dateEnd: "2020-11-31",
                          class: "proposal-review",
                          type: "task",
                          resources: {
                            id: 13,
                            label: "Leo"
                          }
                        }
                      ]
                    },
                    {
                      label: "Commercialization",
                      dateStart: "2020-11-01",
                      dateEnd: "2020-11-20",
                      type: "task",
                      class: "commercialization",
                      resources: {
                        id: 14,
                        label: "Veronica"
                      }
                    }
                  ]
                },
                {
                  label: "Planning",
                  synchronized: true,
                  expanded: true,
                  disableResources: true,
                  type: "project",
                  tasks: [
                    {
                      label: "Resource planning",
                      dateStart: "2020-10-01",
                      dateEnd: "2020-10-15",
                      class: "resource-planning",
                      type: "task",
                      resources: {
                        id: 8,
                        label: "Jessica"
                      }
                    },
                    {
                      label: "Target group & Usability",
                      dateStart: "2020-10-15",
                      dateEnd: "2020-11-31",
                      class: "target-group-usability",
                      type: "task",
                      resources: [
                        8,
                        {
                          id: 9,
                          label: "Anna"
                        }
                      ]
                    },
                    {
                      label: "Marketing Strategy",
                      dateStart: "2020-12-1",
                      dateEnd: "2020-12-31",
                      class: "marketing-strategy",
                      type: "task",
                      resources: {
                        id: 10,
                        label: "Christina"
                      }
                    }
                  ]
                },
                {
                  label: "Development",
                  synchronized: true,
                  expanded: true,
                  disableResources: true,
                  type: "project",
                  class: "development",
                  progress: 50,
                  resources: 4,
                  tasks: [
                    {
                      label: "Design",
                      dateStart: "2021-01-01T08:30:00",
                      dateEnd: "2021-02-28",
                      type: "task",
                      class: "design",
                      resources: {
                        id: 1,
                        label: "Mia"
                      }
                    },
                    {
                      label: "Coding",
                      dateStart: "2021-03-01",
                      dateEnd: "2021-6-01",
                      type: "task",
                      class: "coding",
                      resources: [
                        {
                          id: 2,
                          label: "Anthony"
                        },
                        0
                      ]
                    },
                    {
                      label: "Debugging",
                      dateStart: "2021-06-02",
                      dateEnd: "2021-6-31",
                      type: "task",
                      class: "debugging",
                      resources: [
                        {
                          id: 0,
                          label: "Jonathan"
                        },
                        2
                      ]
                    }
                  ]
                },
                {
                  label: "Dev Stage Completed",
                  dateEnd: "2021-06-01",
                  type: "milestone",
                  resources: 3
                },
                {
                  label: "Testing",
                  dateStart: "2021-06-02",
                  dateEnd: "2021-6-31",
                  type: "task",
                  class: "testing",
                  resources: [
                    {
                      id: 3,
                      label: "Peter"
                    },
                    {
                      id: 4,
                      label: "Liam"
                    },
                    1
                  ]
                },
                {
                  label: "Documentation",
                  dateStart: "2021-7-01",
                  dateEnd: "2021-7-31",
                  type: "task",
                  class: "documentation",
                  resources: [1]
                },
                {
                  id: "release",
                  class: "release",
                  label: "Release & Maintenance",
                  dateEnd: "2021-08-01",
                  type: "milestone"
                },
                {
                  label: "Evaluation",
                  synchronized: true,
                  expanded: true,
                  disableResources: true,
                  type: "project",
                  tasks: [
                    {
                      label: "Development strategy",
                      dateStart: "2021-08-01",
                      dateEnd: "2021-08-31",
                      class: "development-strategy",
                      type: "task",
                      resources: [
                        {
                          id: 5,
                          label: "Nelson"
                        }
                      ]
                    },
                    {
                      label: "Productivity",
                      dateStart: "2021-09-1",
                      dateEnd: "2021-09-31",
                      class: "productivity",
                      type: "task",
                      resources: [
                        {
                          id: 6,
                          label: "Philip"
                        }
                      ]
                    },
                    {
                      label: "Completion cost",
                      dateStart: "2021-10-01",
                      dateEnd: "2021-10-31",
                      class: "completion-cost",
                      type: "task",
                      resources: [
                        {
                          id: 7,
                          label: "Jenna"
                        }
                      ]
                    }
                  ]
                }
              ],
              taskColumns: [
                {
                  label: "Assignee",
                  value: "resources",
                  size: "35%",
                  formatFunction: function(data, taskIndex) {
                    const ganttChart = document.querySelector(
                      "smart-gantt-chart"
                    );
                    const resources = ganttChart.resources,
                      tasks = ganttChart.tasks;
                    if (tasks[taskIndex].disableResources) {
                      return "";
                    }
                    let result = "";
                    for (let i = 0; i < data.length; i++) {
                      const resource = resources.find(
                        res => res.id.toString() === data[i].toString()
                      );
                      if (resource) {
                        result += `<span class="gantt-chart-task-assignee ${resource.label.toLowerCase()}">${
                          resource.label
                        }</span>`;
                      }
                    }
                    return result.length
                      ? result
                      : '<span class="gantt-chart-task-assignee unassigned">Unassigned</span>';
                  }
                },
                {
                  label: "Task Name",
                  value: "label",
                  root: true
                },
                {
                  label: "Add",
                  value: "addTask",
                  min: 35,
                  formatFunction: function() {
                    return '<span class="add-task-button">+</span>';
                  }
                }
              ],
              treeSize: "25%",
              hideResourcePanel: true
            };
          }
        }
      );

      const ganttChart = document.querySelector("smart-gantt-chart"),
        insertButton = document.getElementById("insertResource"),
        removeButton = document.getElementById("removeResource");
      ganttChart.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("add-task-button")) {
          const newTaskIndex =
            Array.from(ganttChart.querySelectorAll(".add-task-button")).indexOf(
              target
            ) + 1;
          //Add a new Task
          ganttChart.insertTask(newTaskIndex, {
            label: "New Task",
            dateStart: ganttChart.dateStart
          });
          //Open the Editor to configure
          ganttChart.openWindow(newTaskIndex);
        }
      });
      insertButton.addEventListener("click", function() {
        const resource = {
          id: "new-resource",
          label: "New Resource",
          assignedTo: "release"
        };
        ganttChart.insertResource(0, resource);
        this.disabled = true;
      });
      document
        .getElementById("updateResource")
        .addEventListener("click", function() {
          if (!ganttChart.resources.length) {
            return;
          }
          ganttChart.updateResource(0, {
            label: "Updated resource"
          });
          this.disabled = true;
        });
      removeButton.addEventListener("click", function() {
        const resources = ganttChart.resources;
        if (!resources.length) {
          return;
        }
        ganttChart.removeResource(resources[resources.length - 1].id);
        insertButton.disabled = false;
      });
    });
  }
};
</script>

<style>
smart-gantt-chart {
  height: auto;
  width: calc(100% - 300px);
  --smart-gantt-chart-task-label-color: white;
  --smart-gantt-chart-task-color: salmon;
  --smart-gantt-chart-project-label-color: var(
    --smart-gantt-chart-task-label-color
  );
  --smart-gantt-chart-project-label-color-selected: var(
    --smart-gantt-chart-project-label-color
  );
  --smart-gantt-chart-task-label-color-selected: var(
    --smart-gantt-chart-task-label-color
  );
  /* Demo variables */
  --anthony-background: darkblue;
  --jonathan-background: #03a9f4;
  --mia-background: rgb(224, 102, 222);
  --peter-background: rgb(230, 174, 48);
  --liam-background: green;
  --will-background: blueviolet;
  --taylor-background: burlywood;
  --leo-background: cadetblue;
  --veronica-background: darkolivegreen;
  --jessica-background: deeppink;
  --anna-background: mediumpurple;
  --christina-background: tomato;
  --nelson-background: teal;
  --philip-background: steelblue;
  --jenna-background: rgb(139, 0, 0);
  --new-resource-background: rgb(64, 224, 208);
  --unassigned-background: red;
  --resource-color: white;
}
@media only screen and (max-width: 600px) {
  .smart-gantt-chart {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 700px) {
  smart-gantt-chart {
    width: 95%;
    margin-left: 2%;
  }
}

smart-gantt-chart .gantt-chart-task-assignee {
  border-radius: 20px;
  padding: 5px;
  color: var(--resource-color);
}

/*smart-gantt-chart .researchers {
        background: var(--researchers-background);
    }*/

smart-gantt-chart .anthony {
  background: var(--anthony-background);
}

smart-gantt-chart .jonathan {
  background: var(--jonathan-background);
}

smart-gantt-chart .mia {
  background: var(--mia-background);
}

smart-gantt-chart .peter {
  background: var(--peter-background);
}

smart-gantt-chart .liam {
  background: var(--liam-background);
}

smart-gantt-chart .will {
  background: var(--will-background);
}

smart-gantt-chart .taylor {
  background: var(--taylor-background);
}

smart-gantt-chart .leo {
  background: var(--leo-background);
}

smart-gantt-chart .veronica {
  background: var(--veronica-background);
}

smart-gantt-chart .jessica {
  background: var(--jessica-background);
}

smart-gantt-chart .anna {
  background: var(--anna-background);
}

smart-gantt-chart .christina {
  background: var(--christina-background);
}

smart-gantt-chart .nelson {
  background: var(--nelson-background);
}

smart-gantt-chart .philip {
  background: var(--philip-background);
}

smart-gantt-chart .jenna {
  background: var(--jenna-background);
}

smart-gantt-chart .unassigned {
  background: var(--unassigned-background);
}

smart-gantt-chart .new.resource {
  background: linear-gradient(black, var(--new-resource-background));
}

smart-gantt-chart .updated.resource {
  background: linear-gradient(black, var(--new-resource-background));
}

smart-gantt-chart .concept-formation {
  --smart-gantt-chart-task-color: var(--will-background);
}

smart-gantt-chart .proposal-development {
  --smart-gantt-chart-task-color: var(--taylor-background);
}

smart-gantt-chart .proposal-review {
  --smart-gantt-chart-task-color: var(--leo-background);
}

smart-gantt-chart .proposal-development {
  --smart-gantt-chart-task-color: var(--leo-background);
}

smart-gantt-chart .commercialization {
  --smart-gantt-chart-task-color: var(--veronica-background);
}

smart-gantt-chart .resource-planning {
  --smart-gantt-chart-task-color: var(--jessica-background);
}

smart-gantt-chart .target-group-usability {
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    var(--jessica-background),
    var(--anna-background)
  );
}

smart-gantt-chart .marketing-strategy {
  --smart-gantt-chart-task-color: var(--christina-background);
}

smart-gantt-chart .development {
  --smart-gantt-chart-project-color: var(--liam-background);
}

smart-gantt-chart .design {
  --smart-gantt-chart-task-color: var(--mia-background);
}

smart-gantt-chart .coding {
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    var(--anthony-background),
    var(--jonathan-background)
  );
}

smart-gantt-chart .debugging {
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    var(--jonathan-background),
    var(--anthony-background)
  );
}

smart-gantt-chart .testing {
  --smart-gantt-chart-task-color: linear-gradient(
    to right,
    var(--peter-background),
    var(--liam-background),
    var(--mia-background)
  );
}

smart-gantt-chart .documentation {
  --smart-gantt-chart-task-color: var(--mia-background);
}

smart-gantt-chart .development-strategy {
  --smart-gantt-chart-task-color: var(--nelson-background);
}

smart-gantt-chart .productivity {
  --smart-gantt-chart-task-color: var(--philip-background);
}

smart-gantt-chart .completion-cost {
  --smart-gantt-chart-task-color: var(--jenna-background);
}

smart-gantt-chart .add-task-button {
  font-size: 1.35rem;
  color: rgba(109, 113, 232, 0.5);
  font-weight: 900;
}

smart-gantt-chart .add-task-button:hover,
smart-gantt-chart .add-task-button:active {
  color: rgba(109, 113, 232, 1);
}
</style>
