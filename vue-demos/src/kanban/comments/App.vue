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
              currentUser: 1,
              dataSource: window.getKanbanData(),
              taskComments: true,
              users: [
                {
                  id: 0,
                  name: "Andrew",
                  image: "../../../demos/images/people/andrew.png"
                },
                {
                  id: 1,
                  name: "Anne",
                  image: "../../../demos/images/people/anne.png"
                },
                {
                  id: 2,
                  name: "Janet",
                  image: "../../../demos/images/people/janet.png"
                },
                {
                  id: 3,
                  name: "John",
                  image: "../../../demos/images/people/john.png"
                },
                {
                  id: 4,
                  name: "Laura",
                  image: "../../../demos/images/people/laura.png"
                }
              ],
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
