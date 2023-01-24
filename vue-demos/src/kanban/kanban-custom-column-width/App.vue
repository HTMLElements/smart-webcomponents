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
              dataSource: window.getKanbanData(),
              columns: [
				{ color: '#33B679', label: 'To do', width: 300, dataField: 'toDo', allowHide: false },
				{ color: '#8E24AA', label: 'In progress', width: 400, dataField: 'inProgress' },
				{ color: '#039BE5', label: 'Testing', width: 300, dataField: 'testing' },
				{ color: '#DD5347', label: 'Done', width: 200, dataField: 'done', addNewButton: false }
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
