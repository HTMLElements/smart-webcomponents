<template>
  <div class="vue-root">
    <smart-kanban id="kanban"></smart-kanban>
    <div class="options">
      <smart-button id="saveState">Save state</smart-button>
      <br />
      <br />
      <smart-button id="loadState" disabled>Load state</smart-button>
      <br />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.kanban.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#kanban",
        class {
          get properties() {
            return {
              autoLoadState: true,
              collapsible: true,
              dataSource: window.getKanbanData(),
              editable: true,
              headerPosition: "top",
              selectionMode: "zeroOrManyExtended",
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
        loadState = document.getElementById("loadState");
      document
        .getElementById("saveState")
        .addEventListener("click", function() {
          kanban.saveState();
          loadState.disabled = false;
        });
      loadState.addEventListener("click", function() {
        kanban.loadState();
      });
    });
  }
};
</script>

<style>
#kanban {
  width: 1000px;
  height: 600px;
}
</style>
