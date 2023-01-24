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
      window.Smart(
        "#kanban",
        class {
          get properties() {
            return {
              collapsible: true,
              dataSource: window.getKanbanHierarchicalData(),
              hierarchy: "tabs",
              columns: [
                {
                  label: "To do",
                  dataField: "toDo",
                  collapsed: true
                },
                {
                  label: "In progress",
                  dataField: "inProgress"
                },
                {
                  label: "Testing",
                  dataField: "testing",
                  orientation: "horizontal",
                  columns: [
                    {
                      label: "Manual testing",
                      dataField: "manualTesting",
                      selected: true,
                      columns: [
                        {
                          label: "Desktop devices",
                          dataField: "desktop"
                        },
                        {
                          label: "Mobile devices",
                          dataField: "mobile",
                          selected: true
                        }
                      ]
                    },
                    {
                      label: "Unit testing",
                      dataField: "unitTesting"
                    }
                  ]
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
</style>
