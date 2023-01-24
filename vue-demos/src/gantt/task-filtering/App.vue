<template>
  <div class="vue-root">
        <div class="demo-description">
        <p>The following demo illustrates how to filter the tasks inside the GanttChart component. Two types of filtering are avaialble: default and
            advanced( via the <b>filterRow</b>). The default filtering mode filters all columns based
            on
            their cell values. Cell value might not be the same as the cell's actual content that appear inside the Table.
            The cell value is determined by the column settings defined in the <b>taskColumn</b>
            property. For example, the <u>Priority</u> column uses a <b>formatFunction</b> to display the priority
            labels ('Low', 'Medium', 'High') instead of the actual numeric values that represent them. The filtering is applied on the numeric
            values of the column since they represent the actual priority of the task.</p>
    </div>
    
    <smart-gantt-chart id="gantt"></smart-gantt-chart>
    <div class="options">
      <h3>Filter Row</h3>
      <div class="option">
        <p>Click on the button to enable or disable filter row</p>
        <smart-button id="filterRow">Enable</smart-button>
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
        "#gantt",
        class {
          get properties() {
            return {
              view: "week",
              durationUnit: "day",
              treeMin: 300,
              taskFiltering: true,
              hideTimelineHeaderDetails: true,
              taskColumns: [
                {
                  label: "Tasks",
                  value: "label",
                  size: "40%",
                },
                {
                  label: "Start Time",
                  value: "dateStart",
                  size: "30%",
                },
                {
                  label: "Priority",
                  value: "value",
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
                        },
                        {
                          label: "Task B-1",
                          value: 0,
                          class: "priority-low",
                          dateStart: "2021-05-06",
                          duration: 2,
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
                          duration: 2
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
        button = document.getElementById("filterRow");
      button.addEventListener("click", function () {
        ganttChart.filterRow = !ganttChart.filterRow;
        button.innerHTML = ganttChart.filterRow ? "Disable" : "Enable";
      });
    });
  },
};
</script>

<style>
smart-gantt-chart {
  width: calc(100% - 300px);
  height: auto;
  --smart-gantt-chart-task-fill-border-radius: 2px;
  --smart-gantt-chart-header-height: 40px;
}

@media only screen and (max-width: 600px) {
  .smart-gantt-chart {
    width: 100%;
  }
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

.options {
    padding: 20px;
    background-color: rgba(191, 191, 191, .15);
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 260px
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
