<template>
  <div class="vue-root">
    <h2>Phase 1</h2>
    <smart-kanban id="phaseOneKanban"></smart-kanban>
    <h2>Phase 2</h2>
    <smart-kanban id="phaseTwoKanban"></smart-kanban>
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
      const dataPhaseOne = [
        {
          id: 0,
          status: "done",
          text: "Research"
        },
        {
          id: 1,
          status: "done",
          text: "Displaying data from data source"
        },
        {
          id: 2,
          status: "done",
          text: "Showing cover and title"
        },
        {
          id: 3,
          status: "done",
          text: "Property validation"
        },
        {
          id: 4,
          status: "done",
          text: "formatFunction and formatSettings"
        },
        {
          id: 5,
          status: "inProgress",
          text: "Expand/collapse arrow"
        },
        {
          id: 6,
          status: "inProgress",
          text: "Deferred scrolling"
        },
        {
          id: 7,
          status: "inProgress",
          text: "Virtual scrolling"
        },
        {
          id: 8,
          status: "inProgress",
          text: "Infinite scrolling"
        },
        {
          id: 9,
          status: "toDo",
          text: "Visible/hidden columns"
        },
        {
          id: 10,
          status: "toDo",
          text: "Editing"
        }
      ];
      const dataPhaseTwo = [
        {
          id: 11,
          status: "toDo",
          text: "Header"
        },
        {
          id: 12,
          status: "toDo",
          text: "Public methods"
        },
        {
          id: 13,
          status: "toDo",
          text: "Dragging with feedback"
        },
        {
          id: 14,
          status: "toDo",
          text: "Vertical virtualization"
        }
      ];
      window.Smart(
        "#phaseOneKanban",
        class {
          get properties() {
            return {
              selectionMode: "zeroOrManyExtended",
              addNewButton: true,
              collapsible: true,
              dataSource: dataPhaseOne,
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
                  label: "Done",
                  dataField: "done"
                }
              ]
            };
          }
        }
      );
      window.Smart(
        "#phaseTwoKanban",
        class {
          get properties() {
            return {
              selectionMode: "zeroOrManyExtended",
              addNewButton: true,
              collapsible: true,
              dataSource: dataPhaseTwo,
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
                  label: "Done",
                  dataField: "done"
                }
              ]
            };
          }
        }
      );
    });
  }
};
</script>

<style>
#phaseOneKanban,
#phaseTwoKanban {
  width: 800px;
  height: 400px;
}
</style>
