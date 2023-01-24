<template>
  <div class="vue-root">
    <smart-kanban id="kanban"></smart-kanban>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.kanban.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const kanbanTemplateHighPriority = document.createElement("template");
      kanbanTemplateHighPriority.id = "kanbanTemplateHighPriority";
      kanbanTemplateHighPriority.innerHTML = `<span class="attention">Task with HIGH priority. Please begin work as soon as possible.</span>
      <br />
      <br />
      {{text}}`;
      document.body.appendChild(kanbanTemplateHighPriority);

      const kanbanData = window.getKanbanData();
      kanbanData.push({
        id: 16,
        text: "Improve performance",
        status: "inProgress",
        checklist: [
          {
            text: "../../../demos/images/card-demo-chart-1.png",
            completed: true
          },
          {
            text: "../../../demos/images/card-demo-chart-2.png",
            completed: false
          },
          {
            text: "../../../demos/images/card-demo-chart-3.png",
            completed: true
          },
          {
            text: "../../../demos/images/card-demo-chart-4.png",
            completed: true
          }
        ]
      });

      function createImageThumbs(settings) {
        if (!settings.data.checklist) {
          return settings.text;
        }
        let toInclude = "";
        settings.data.checklist.forEach(subtask => {
          if (subtask.completed) {
            toInclude += `<div class="thumb" style="background-image: url('${subtask.text}');"></div>`;
          }
        });
        if (toInclude) {
          toInclude = `<div class="gallery">${toInclude}</div>`;
        }
        settings.text = `<span>${settings.text}</span>${toInclude}`;
      }
      window.Smart(
        "#kanban",
        class {
          get properties() {
            return {
              collapsible: true,
              dataSource: kanbanData,
              editable: true,
              columns: [
                {
                  label: "To do",
                  dataField: "toDo"
                },
                {
                  label: "In progress",
                  dataField: "inProgress"
                },
                {
                  label: "Testing",
                  dataField: "testing"
                },
                {
                  label: "Done",
                  dataField: "done"
                }
              ],
              textTemplate: function(settings) {
                const data = settings.data,
                  //task = settings.task,
                  text = settings.text;
                if (data.id === 16) {
                  createImageThumbs(settings);
                  return;
                }
                if (data.priority === "high" && data.status !== "done") {
                  data.color = "orangered";
                  settings.template = "#kanbanTemplateHighPriority"; // references a template element in the DOM
                  return;
                } else if (data.color === "orangered") {
                  data.color = null; // restores default color
                }
                if (data.checklist) {
                  let toComplete = "";
                  data.checklist.forEach(subtask => {
                    if (!subtask.completed) {
                      toComplete += `<li>${subtask.text}</li>`;
                    }
                  });
                  if (toComplete) {
                    toComplete = `<br /><br /><span>Remaining tasks:</span><ul>${toComplete}</ul>`;
                  }
                  settings.text = `<span>${text}</span>${toComplete}`;
                }
              }
            };
          }
        }
      );
    });
  }
};
</script>

<style>
html,
body,
#kanban {
  width: 100%;
  height: 100%;
}

html,
body {
  margin: 0;
}

.smart-kanban-task-text.high .priority {
  display: none;
}

.attention {
  color: orangered;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 5px;
  margin-top: 5px;
}

.thumb {
  border: 1px solid var(--smart-primary);
  height: 100px;
  background-size: cover;
}
</style>
