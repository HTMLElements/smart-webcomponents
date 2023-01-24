<template>
  <div class="vue-root">
    <smart-kanban id="kanban"></smart-kanban>
    <div class="options">
      Manupulate column with status:
      <smart-input id="status" drop-down-button-position="right" value="toDo"></smart-input>
      <br />
      <br />
      <smart-button id="collapse">Collapse column</smart-button>
      <smart-button id="expand">Expand column</smart-button>
      <smart-button id="expandAll">Expand all columns</smart-button>
      <br />
      <br />Manipulate task with ID:
      <smart-numeric-text-box id="idSelector" input-format="integer" value="0"></smart-numeric-text-box>
      <br />
      <smart-button id="beginEdit">Begin edit</smart-button>
      <smart-button id="endEdit">End edit</smart-button>
      <smart-button id="cancelEdit">Cancel edit</smart-button>
      <smart-button id="addTask">Add task</smart-button>
      <smart-button id="copyTask">Copy task</smart-button>
      <smart-button id="moveTask">Move task</smart-button>
      <smart-button id="removeTask">Remove task</smart-button>
      <smart-button id="updateTask">Update task</smart-button>
      <smart-button id="ensureVisible">Ensure visible</smart-button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.kanban.js";
import "smart-webcomponents/source/modules/smart.numerictextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#kanban",
        class {
          get properties() {
            return {
              collapsible: true,
              dataSource: window.getKanbanData(),
              editable: true,
              textTemplate: function(settings) {
                settings.template = `<span class="smart-badge smart-badge-dark">${settings.data.id}</span>${settings.text}`;
              },
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
              ]
            };
          }
        }
      );

      const kanban = document.getElementById("kanban"),
        status = document.getElementById("status"),
        idSelector = document.getElementById("idSelector");

      status.dataSource = ["toDo", "inProgress", "testing", "done"];
      let counter = 1;
      document.getElementById("collapse").addEventListener("click", function() {
        kanban.collapse(status.value);
      });
      document.getElementById("expand").addEventListener("click", function() {
        kanban.expand(status.value);
      });
      document
        .getElementById("expandAll")
        .addEventListener("click", function() {
          kanban.expandAll();
        });
      document
        .getElementById("beginEdit")
        .addEventListener("click", function() {
          kanban.beginEdit(parseFloat(idSelector.value));
        });
      document.getElementById("endEdit").addEventListener("click", function() {
        kanban.endEdit();
      });
      document
        .getElementById("cancelEdit")
        .addEventListener("click", function() {
          kanban.cancelEdit();
        });
      document.getElementById("addTask").addEventListener("click", function() {
        kanban.addTask({
          id: 15 + counter,
          text: "New task " + counter,
          status: status.value
        });
        counter++;
      });
      document.getElementById("copyTask").addEventListener("click", function() {
        kanban.copyTask(parseFloat(idSelector.value));
      });
      document.getElementById("moveTask").addEventListener("click", function() {
        kanban.moveTask(parseFloat(idSelector.value), status.value);
      });
      document
        .getElementById("removeTask")
        .addEventListener("click", function() {
          kanban.removeTask(parseFloat(idSelector.value));
        });
      document
        .getElementById("updateTask")
        .addEventListener("click", function() {
          kanban.updateTask(parseFloat(idSelector.value), {
            text: "Updated task at " + new Date().toLocaleTimeString()
          });
        });
      document
        .getElementById("ensureVisible")
        .addEventListener("click", function() {
          kanban.ensureVisible(parseFloat(idSelector.value));
        });
    });
  }
};
</script>

<style>
#kanban {
  width: 1000px;
  height: 800px;
}

smart-button,
#status,
#idSelector {
  width: 100%;
}

smart-button {
  margin-bottom: 10px;
}

.smart-badge {
  margin-right: 5px;
}
</style>
