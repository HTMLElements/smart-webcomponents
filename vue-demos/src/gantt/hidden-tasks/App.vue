<template>
  <div class="vue-root">
    <smart-gantt-chart id="gantt"></smart-gantt-chart>
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
        "#gantt",
        class {
          get properties() {
            return {
              view: "week",
              durationUnit: "day",
              treeMin: 300,
              hideTimelineHeaderDetails: true,
              timelineHeaderFormatFunction: function (
                date,
                type,
                isHeaderDetailsContainer
              ) {
                const ganttChart = document.querySelector("smart-gantt-chart");
                if (isHeaderDetailsContainer) {
                  return "";
                }
                return date.toLocaleDateString(ganttChart.locale, {
                  day: "2-digit",
                  month: "short",
                });
              },
              taskColumns: [
                {
                  label: "Tasks",
                  value: "label",
                  size: "40%",
                  hideResizeBar: true,
                },
                {
                  label: "Start Time",
                  value: "dateStart",
                  size: "30%",
                  hideResizeBar: true,
                },
                {
                  label: "Priority",
                  value: "value",
                  hideResizeBar: true,
                  customEditor: function (label, value) {
                    const container = document.createDocumentFragment();
                    const labelElement = document.createElement("label");
                    const dropDownList = document.createElement(
                      "smart-drop-down-list"
                    );
                    labelElement.textContent = "Priority";
                    dropDownList.dropDownAppendTo = "body";
                    dropDownList.selectedIndexes = [value];
                    dropDownList.dataSource = [
                      {
                        label: "Low",
                        value: 0,
                      },
                      {
                        label: "Medium",
                        value: 1,
                      },
                      {
                        label: "High",
                        value: 2,
                      },
                    ];
                    container.appendChild(labelElement);
                    container.appendChild(dropDownList);
                    return container;
                  },
                  getCustomEditorValue: function (editor) {
                    return editor.querySelector("smart-drop-down-list")
                      .selectedIndexes[0];
                  },
                  formatFunction: (value) => ["Low", "Medium", "High"][value],
                },
              ],
              dataSource: [
                {
                  label: "Project A",
                  value: 1,
                  class: "priority-medium",
                  dateStart: "2021-05-01",
                  duration: 20,
                  expanded: true,
                  type: "project",
                  tasks: [
                    {
                      label: "Task A",
                      value: 2,
                      class: "priority-high",
                      dateStart: "2021-05-03",
                      duration: 5,
                      connections: [
                        {
                          target: 5,
                          type: 1,
                        },
                      ],
                    },
                    {
                      label: "Project A-1",
                      value: 2,
                      class: "priority-high",
                      dateStart: "2021-05-02",
                      duration: 10,
                      expanded: true,
                      type: "project",
                      tasks: [
                        {
                          label: "Task B",
                          value: 1,
                          class: "priority-medium",
                          dateStart: "2021-05-05",
                          duration: 3,
                          hidden: true,
                        },
                        {
                          label: "Task B-1",
                          value: 0,
                          class: "priority-low",
                          dateStart: "2021-05-06",
                          duration: 2,
                          hidden: true,
                        },
                        {
                          label: "Task B-2",
                          value: 2,
                          class: "priority-high",
                          dateStart: "2021-05-8",
                          duration: 3,
                        },
                        {
                          label: "Task B-3",
                          value: 2,
                          class: "priority-high",
                          dateStart: "2021-05-10",
                          duration: 4,
                        },
                        {
                          label: "Task B-4",
                          value: 1,
                          class: "priority-medium",
                          dateStart: "2021-05-10",
                          duration: 4,
                          hidden: true,
                        },
                      ],
                    },
                    {
                      label: "Project A-2",
                      value: 0,
                      class: "priority-low",
                      dateStart: "2021-05-05",
                      duration: 8,
                      expanded: true,
                      hidden: true,
                      type: "project",
                      tasks: [
                        {
                          label: "Task C",
                          value: 0,
                          class: "priority-low",
                          dateStart: "2021-05-05",
                          duration: 4,
                          connections: [
                            {
                              target: 10,
                              type: 1,
                            },
                            {
                              target: 11,
                              type: 1,
                            },
                          ],
                        },
                        {
                          label: "Task C-1",
                          value: 0,
                          class: "priority-low",
                          dateStart: "2021-05-10",
                          duration: 4,
                        },
                        {
                          label: "Task C-2",
                          value: 1,
                          class: "priority-medium",
                          dateStart: "2021-05-11",
                          duration: 3,
                          connections: [
                            {
                              target: 12,
                              type: 1,
                            },
                          ],
                        },
                        {
                          label: "Task C-3",
                          value: 1,
                          class: "priority-medium",
                          dateStart: "2021-05-12",
                          duration: 2,
                        },
                      ],
                    },
                  ],
                },
              ],
            };
          }
        }
      );

      const ganttChart = document.querySelector("smart-gantt-chart"),
        template = document.createElement("template");

      template.id = "headerTemplate";
      template.innerHTML = `
     <div class="task-filtering-container">
        <b>Hide tasks based on priority:</b>
        <div class="priority-container">
          <smart-check-box checked class="priority" id="high"
            >High</smart-check-box
          >
          <smart-check-box class="priority" id="medium">Normal</smart-check-box>
          <smart-check-box class="priority" id="low">Low</smart-check-box>
        </div>
      </div>`;

      document.body.appendChild(template);
      ganttChart.headerTemplate = template.id;

      ganttChart.addEventListener("change", function (event) {
        const target = event.target;
        if (target.classList.contains("priority")) {
          const getPriority = function (label) {
            switch (label) {
              case "high":
                return 2;
              case "medium":
                return 1;
              default:
                return 0;
            }
          };
          const checkBoxes = document.getElementsByClassName("priority");
          let priority = [];
          for (let i = 0; i < checkBoxes.length; i++) {
            const checkBox = checkBoxes[i];
            if (checkBox.checked) {
              priority.push(getPriority(checkBox.id));
            }
          }
          //Important Note: Begins a batch update
          ganttChart.beginUpdate();
          const tasks = ganttChart.tasks;
          for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            ganttChart.updateTask(task, {
              hidden: !priority.includes(task.value),
            });
          }
          //Important Note: Ends the batch update
          ganttChart.endUpdate();
        }
      });
    });
  },
};
</script>

<style>
smart-gantt-chart {
  height: auto;
  --smart-gantt-chart-task-fill-border-radius: 2px;
  --smart-gantt-chart-header-height: 40px;
}

smart-gantt-chart .priority-low {
  --smart-gantt-chart-task-color: var(--smart-success);
  --smart-gantt-chart-task-label-color: var(--smart-success-color);
  --smart-gantt-chart-task-label-color-selected: var(--smart-success-color);
  --smart-gantt-chart-project-label-color: var(--smart-success-color);
  --smart-gantt-chart-project-label-color-selected: var(--smart-success-color);
}

smart-gantt-chart .priority-medium {
  --smart-gantt-chart-task-color: var(--smart-toast-warning-background);
  --smart-gantt-chart-task-label-color: var(--smart-toast-warning-color);
  --smart-gantt-chart-task-label-color-selected: var(
    --smart-toast-warning-color
  );
  --smart-gantt-chart-project-label-color: var(--smart-toast-warning-color);
  --smart-gantt-chart-project-label-color-selected: var(
    --smart-toast-warning-color
  );
}

smart-gantt-chart .priority-high {
  --smart-gantt-chart-task-color: var(--smart-error);
  --smart-gantt-chart-task-label-color: var(--smart-error-color);
  --smart-gantt-chart-task-label-color-selected: var(--smart-error-color);
  --smart-gantt-chart-project-label-color: var(--smart-error-color);
  --smart-gantt-chart-project-label-color-selected: var(--smart-error-color);
}

.task-filtering-container {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  grid-column-gap: 10px;
  --smart-background: var(--smart-surface);
}

.priority-container {
  display: flex;
}
</style>
