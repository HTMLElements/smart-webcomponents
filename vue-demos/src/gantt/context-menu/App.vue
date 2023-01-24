<template>
  <div class="vue-root">
    <div class="demo-description">
      Right click on a task inside the Timeline or the Tree to open the context
      menu.
    </div>
    <smart-gantt-chart id="ganttChart"></smart-gantt-chart>
    <smart-menu checkable mode="dropDown" close-action="down">
      <smart-menu-items-group separator>
        File
        <smart-menu-item separator>
          <i class="material-icons">drafts</i>File
        </smart-menu-item>
        <smart-menu-item>
          <i class="material-icons">folder</i>Open
        </smart-menu-item>
        <smart-menu-item>
          <i class="material-icons">save</i>Save
        </smart-menu-item>
        <smart-menu-item disabled separator>
          <i class="material-icons">save_alt</i>Save As
        </smart-menu-item>
        <smart-menu-item>
          <i class="material-icons">print</i>Print
        </smart-menu-item>
        <smart-menu-item disabled separator>
          <i class="material-icons">tune</i>Page Setup
        </smart-menu-item>
        <smart-menu-item>
          <i class="material-icons">close</i>Close
        </smart-menu-item>
      </smart-menu-items-group>
      <smart-menu-items-group>
        Edit
        <smart-menu-item>
          <i class="material-icons">undo</i>Undo
        </smart-menu-item>
        <smart-menu-item separator>
          <i class="material-icons">redo</i>Redo
        </smart-menu-item>
        <smart-menu-item separator>
          <i class="material-icons">select_all</i>Select All
        </smart-menu-item>
        <smart-menu-item>
          <i class="material-icons">content_cut</i>Cut
        </smart-menu-item>
        <smart-menu-item>
          <i class="material-icons">content_copy</i>Copy
        </smart-menu-item>
        <smart-menu-item>
          <i class="material-icons">content_paste</i>Paste
        </smart-menu-item>
      </smart-menu-items-group>
      <smart-menu-items-group>
        Help
        <smart-menu-item>
          <i class="material-icons">info</i>About
        </smart-menu-item>
        <smart-menu-item>
          <i class="material-icons">help</i>Help
        </smart-menu-item>
        <smart-menu-item>
          <i class="material-icons">bug_report</i>Bug Reporting
        </smart-menu-item>
      </smart-menu-items-group>
    </smart-menu>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.ganttchart.js";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#ganttChart",
        class {
          get properties() {
            return {
              view: "week",
              treeSize: 350,
              hideTimelineHeaderDetails: true,
              snapToNearest: true,
              timelineHeaderFormatFunction: function(
                date,
                type,
                isHeaderDetails,
                value
              ) {
                const ganttChart = document.querySelector("smart-gantt-chart");
                if (type === "day") {
                  return date.toLocaleDateString(ganttChart.locale, {
                    day: "numeric",
                    month: "short"
                  });
                }
                return value;
              },
              durationUnit: "day",
              taskColumns: [
                {
                  label: "Employee",
                  value: "label",
                  size: "50%"
                },
                {
                  label: "Start Time",
                  value: "dateStart"
                },
                {
                  label: "Duration",
                  value: "duration",
                  size: 30
                }
              ],
              dataSource: [
                {
                  label: "Mission A",
                  dateStart: "2021-08-01",
                  duration: 10,
                  progress: 22,
                  expanded: true,
                  type: "project",
                  tasks: [
                    {
                      label: "Stage 1",
                      dateStart: "2021-08-03",
                      duration: 5,
                      progress: 100,
                      type: "task"
                    },
                    {
                      label: "Stage 2",
                      dateStart: "2021-08-02",
                      duration: 6,
                      progress: 50,
                      expanded: true,
                      type: "project",
                      connections: [
                        {
                          target: 3,
                          type: 0
                        }
                      ],
                      tasks: [
                        {
                          label: "Task 2.1",
                          dateStart: "2021-08-03",
                          duration: 2,
                          progress: 100,
                          type: "task",
                          connections: [
                            {
                              target: 4,
                              type: 0
                            }
                          ]
                        },
                        {
                          label: "Task 2.2",
                          dateStart: "2021-08-06",
                          duration: 3,
                          progress: 80,
                          type: "task",
                          connections: [
                            {
                              target: 5,
                              type: 0
                            }
                          ]
                        },
                        {
                          label: "Task 2.3",
                          dateStart: "2021-08-10",
                          duration: 5,
                          progress: 20,
                          type: "task",
                          connections: [
                            {
                              target: 6,
                              type: 1
                            }
                          ]
                        },
                        {
                          label: "Task 2.4",
                          dateStart: "2021-08-10",
                          duration: 4,
                          progress: 5,
                          type: "task"
                        }
                      ]
                    },
                    {
                      label: "Stage 3",
                      dateStart: "2021-08-02",
                      duration: 6,
                      progress: 80,
                      type: "task"
                    }
                  ]
                },
                {
                  label: "Mission B",
                  dateStart: "2021-08-01",
                  duration: 20,
                  progress: 40,
                  expanded: true,
                  type: "project",
                  tasks: [
                    {
                      label: "Stage 1",
                      dateStart: "2021-08-02",
                      duration: 8,
                      progress: 50,
                      expanded: true,
                      type: "project",
                      connections: [
                        {
                          target: 10,
                          type: 2
                        },
                        {
                          target: 11,
                          type: 2
                        }
                      ],
                      tasks: [
                        {
                          label: "Task 1.1",
                          dateStart: "2021-08-02",
                          duration: 7,
                          progress: 60,
                          type: "task"
                        },
                        {
                          label: "Task 1.2",
                          dateStart: "2021-08-03",
                          duration: 7,
                          progress: 60,
                          type: "task"
                        }
                      ]
                    },
                    {
                      label: "Stage 2",
                      dateStart: "2021-08-11",
                      duration: 8,
                      progress: 60,
                      expanded: true,
                      type: "project",
                      connections: [
                        {
                          target: 13,
                          type: 2
                        }
                      ],
                      tasks: [
                        {
                          label: "Task 2.1",
                          dateStart: "2021-08-11",
                          duration: 8,
                          progress: 60,
                          type: "task"
                        }
                      ]
                    },
                    {
                      label: "Stage 3",
                      dateStart: "2021-08-13",
                      duration: 6,
                      progress: 50,
                      expanded: true,
                      type: "project",
                      connections: [
                        {
                          target: 15,
                          type: 2
                        },
                        {
                          target: 16,
                          type: 1
                        },
                        {
                          target: 17,
                          type: 1
                        }
                      ],
                      tasks: [
                        {
                          label: "Task 3.1",
                          dateStart: "2021-08-14",
                          duration: 5,
                          progress: 50,
                          type: "task"
                        },
                        {
                          label: "Task 3.2",
                          dateStart: "2021-08-14",
                          duration: 4,
                          progress: 50,
                          type: "task"
                        },
                        {
                          label: "Task 3.3",
                          dateStart: "2021-08-14",
                          duration: 3,
                          progress: 50,
                          type: "task"
                        }
                      ]
                    }
                  ]
                }
              ]
            };
          }
        }
      );

      const ganttChart = document.querySelector("smart-gantt-chart"),
        menu = document.querySelector("smart-menu");
      let preventDefaultContextMenu = false;
      ganttChart.addEventListener("itemClick", function(event) {
        if (event.target !== ganttChart) {
          return;
        }
        const originalEvent = event.detail.originalEvent;
        if (originalEvent.button === 2) {
          //Open Context Menu
          menu.open(originalEvent.pageX, originalEvent.pageY);
          //Prevent Browser context menu from opening
          preventDefaultContextMenu = true;
        }
      });
      document.addEventListener("contextmenu", function(event) {
        if (preventDefaultContextMenu) {
          event.preventDefault();
          preventDefaultContextMenu = false;
        }
      });
    });
  }
};
</script>

<style>
smart-gantt-chart {
  height: auto;
  --smart-gantt-chart-task-default-height: 34px;
  --smart-gantt-chart-task-fill-border-radius: 2.5px;
  --smart-gantt-chart-project-color: linear-gradient(-45deg, #3e5151, #decba4);
  --smart-gantt-chart-task-label-color: white;
  --smart-gantt-chart-task-label-color-selected: white;
  --smart-gantt-chart-task-color: linear-gradient(-45deg, #1f4037, #99f2c8);
  --smart-gantt-chart-project-label-color: white;
  --smart-gantt-chart-project-label-color-selected: white;
  --smart-gantt-chart-task-tree-splitter-bar-fit-size: var(
    --smart-gantt-chart-task-default-height
  );
}

smart-menu {
  --smart-menu-vertical-default-width: 100px;
  --smart-menu-vertical-default-height: auto;
}

.smart-menu .smart-menu-item-label-container {
  padding: 10px 20px 10px 20px;
}

/* ------------ Google fonts ------------ */

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
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  margin-right: 10px;
  margin-right: 5px;
  font-size: 16px;
}

/* ------------ */
</style>
