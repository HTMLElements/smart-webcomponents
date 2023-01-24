<template>
  <div class="vue-root">
    <smart-kanban id="kanban"></smart-kanban>
    <smart-menu id="menu" mode="dropDown">
      <smart-menu-item id="edit">Edit</smart-menu-item>
      <smart-menu-item id="copy">Copy</smart-menu-item>
      <smart-menu-item id="done">Mark as "Done"</smart-menu-item>
      <smart-menu-item id="removeAll">Remove all tasks</smart-menu-item>
    </smart-menu>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.kanban.js";
import "smart-webcomponents/source/modules/smart.menu.js";

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
        menu = document.getElementById("menu"),
        doneItem = document.getElementById("done"),
        removeAllItem = document.getElementById("removeAll");
      let processedTaskData, columnElement;
      kanban.addEventListener("contextmenu", function(event) {
        // disable the Kanban's default context menu
        event.preventDefault();
        return false;
      });
      kanban.addEventListener("mouseup", function(event) {
        if (event.button !== 2) {
          menu.close();
          return;
        }
        const target = event.target,
          taskElement = target.closest(".smart-kanban-task");
        if (taskElement) {
          processedTaskData = taskElement.data;
          doneItem.disabled = processedTaskData.status === "done";
          menu.classList.add("task");
          menu.classList.remove("column");
          menu.open(event.pageX + 5, event.pageY + 5);
          return;
        }
        columnElement = target.closest(".smart-kanban-column");
        if (columnElement) {
          removeAllItem.disabled =
            columnElement.querySelectorAll(".smart-kanban-task").length === 0;
          menu.classList.add("column");
          menu.classList.remove("task");
          menu.open(event.pageX + 5, event.pageY + 5);
          return;
        }
        menu.close();
      });
      menu.addEventListener("itemClick", function(event) {
        switch (event.detail.label) {
          case "Edit":
            kanban.beginEdit(processedTaskData.id);
            break;
          case "Copy":
            kanban.copyTask(processedTaskData.id);
            break;
          case 'Mark as "Done"':
            kanban.moveTask(processedTaskData.id, "done");
            break;
          case "Remove all tasks": {
            const allTaskElementsInColumn = Array.from(
              columnElement.querySelectorAll(".smart-kanban-task")
            );
            allTaskElementsInColumn.forEach(taskElement =>
              kanban.removeTask(taskElement)
            );
            break;
          }
        }
      });
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

#menu {
  height: auto;
}

#menu.task #removeAll,
#menu.column #edit,
#menu.column #copy,
#menu.column #done {
  display: none;
}

#removeAll {
  margin-top: var(--smart-border-radius);
}
</style>
