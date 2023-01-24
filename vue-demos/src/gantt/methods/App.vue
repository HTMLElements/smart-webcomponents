<template>
  <div class="vue-root">
    <div class="demo-description">
      <b>Description:</b>
      <b>Update</b> method updates the task with index 9 (
      if there's one).
      <b>Insert</b> method insert's a Project Task with two sub-tasks
      at position 8.
      <b>Remove</b> method removes the first Task.
    </div>
    <smart-gantt-chart></smart-gantt-chart>
    <div class="options">
      <div class="captions">Settings</div>
      <div class="option">
        <smart-button id="updateButton">Update</smart-button>
      </div>
      <div class="option">
        <smart-button id="insertButton">Insert</smart-button>
      </div>
      <div class="option">
        <smart-button id="removeButton">Remove</smart-button>
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
      const ganttChart = document.querySelector("smart-gantt-chart"),
        insertButton = document.getElementById("insertButton");
      ganttChart.treeSize = "45%";
      ganttChart.dataSource = [
        {
          label: "Project 1",
          dateStart: "2020-03-10T12:30:00",
          dateEnd: "2021-06-10T3:59:00",
          expanded: true,
          type: "project",
          connections: [
            {
              target: 1,
              type: 0
            }
          ],
          tasks: [
            {
              label: "Task 1.1",
              dateStart: "2020-02-10",
              dateEnd: "2021-01-10",
              type: "task",
              connections: [
                {
                  target: 2,
                  type: 1
                },
                {
                  target: 4,
                  type: 1
                }
              ]
            },
            {
              label: "Task 1.2",
              dateStart: "2020-10-10",
              dateEnd: "2021-2-31",
              type: "task",
              connections: [
                {
                  target: 3,
                  type: 1
                }
              ]
            },
            {
              label: "Project 1.1",
              dateStart: "2020-03-10T12:30:00",
              dateEnd: "2021-06-10T3:59:00",
              expanded: true,
              type: "project",
              connections: [
                {
                  target: 1,
                  type: 0
                }
              ],
              tasks: [
                {
                  label: "Task 1.1.1",
                  dateStart: "2020-02-10",
                  dateEnd: "2021-01-10",
                  type: "task",
                  connections: [
                    {
                      target: 2,
                      type: 1
                    },
                    {
                      target: 4,
                      type: 1
                    }
                  ]
                },
                {
                  label: "Task 1.1.2",
                  dateStart: "2020-10-10",
                  dateEnd: "2021-2-31",
                  type: "task",
                  connections: [
                    {
                      target: 3,
                      type: 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "Task 2",
          dateStart: "2020-03-10T15:30:00",
          dateEnd: "2021-08-10",
          type: "task"
        },
        {
          label: "Milestone 1",
          dateEnd: "2021-05-24",
          type: "milestone",
          connections: [
            {
              target: 5,
              type: 1
            }
          ]
        },
        {
          label: "Task 3",
          dateStart: "2021-02-05",
          dateEnd: "2021-07-08",
          progress: 50,
          type: "task"
        },
        {
          label: "Task 4",
          dateStart: "2020-03-10T15:30:00",
          dateEnd: "2021-08-10"
        }
      ];
      ganttChart.taskColumns = [
        {
          label: "Tasks",
          value: "label",
          size: "40%"
        },
        {
          label: "Date Start",
          value: "dateStart",
          //Custom format function
          formatFunction: date =>
            new Date(date).toLocaleDateString(ganttChart.locale, {
              year: "numeric",
              month: "short",
              day: "numeric"
            })
        },
        {
          label: "Date End",
          value: "dateEnd",
          size: "30%"
        }
      ];
      document
        .getElementById("updateButton")
        .addEventListener("click", function() {
          const taskDetails = {
            label: "Task Updated Successfully",
            dateEnd: "2021-1-1"
          };
          const targetTask = ganttChart.tasks[0];
          if (!targetTask) {
            return;
          }
          ganttChart.updateTask(0, taskDetails);
          this.disabled = true;
        });
      insertButton.addEventListener("click", function() {
        const tasks = {
          label: "Inserted Task 1",
          dateStart: "2020-08-10",
          dateEnd: "2020-12-23",
          tasks: [
            {
              label: "Inserted Sub-Task 1.1",
              dateStart: "2020-09-01",
              dateEnd: "2020-10-30"
            },
            {
              label: "Inserted Sub-Task 1.2",
              dateStart: "2020-11-01",
              dateEnd: "2020-12-23"
            }
          ]
        };
        ganttChart.insertTask(0, tasks);
        this.disabled = true;
      });
      document
        .getElementById("removeButton")
        .addEventListener("click", function() {
          ganttChart.removeTask(0);
          insertButton.disabled = false;
        });
    });
  }
};
</script>

<style>
smart-gantt-chart {
  width: calc(100% - 300px);
  height: auto;
}
@media (max-width: 700px) {
  smart-gantt-chart {
    width: 95%;
    margin-left: 2%;
  }
}
</style>
