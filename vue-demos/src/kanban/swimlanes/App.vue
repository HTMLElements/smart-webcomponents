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
      const data = [
        {
          text: "Research of energy business",
          userId: 3,
          status: "done",
          swimlane: "client1"
        },
        {
          text: "Create Gannt chart",
          userId: 2,
          status: "inProgress",
          swimlane: "client1"
        },
        {
          text: "Develop prototype",
          userId: 4,
          status: "testing",
          swimlane: "client1"
        },
        {
          text: "Data extrapolation",
          userId: 3,
          status: "inProgress",
          swimlane: "client1"
        },
        {
          text: "Prepare requirements",
          userId: 1,
          status: "done",
          swimlane: "client2"
        },
        {
          text: "Try out new simulation",
          userId: 1,
          status: "testing",
          swimlane: "client2"
        },
        {
          text: "Create blueprints for new product",
          userId: 1,
          status: "toDo",
          swimlane: "client2"
        },
        {
          text: 'Calculate hours necessary for "EMV" project',
          userId: 2,
          status: "toDo",
          swimlane: "other"
        },
        {
          text: "Distribute final product",
          userId: 4,
          status: "done",
          swimlane: "other"
        }
      ];

      window.Smart(
        "#kanban",
        class {
          get properties() {
            return {
              collapsible: true,
              dataSource: data,
              editable: true,
              swimlanes: [
                {
                  label: 'Client "Energo"',
                  dataField: "client1"
                },
                {
                  label: 'Client "Sim-Prod Ltd."',
                  dataField: "client2",
                  color: "#C90086"
                },
                {
                  label: "Other clients",
                  dataField: "other",
                  color: "#03C7C0"
                }
              ],
              userList: true,
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
      const kanban = document.getElementById("kanban");
      kanban.whenRendered(() => {
        kanban.swimlanes = [
          {
            label: 'Client "Energo"',
            dataField: "client1"
          },
          {
            label: 'Client "Sim-Prod Ltd."',
            dataField: "client2",
            color: "#C90086"
          },
          {
            label: "Other clients",
            dataField: "other",
            color: "#03C7C0"
          }
        ];
      });
    });
  }
};
</script>

<style>
html,
body,
#app,
.vue-root,
#kanban {
  width: 100%;
  height: 100%;
}

html,
body {
  margin: 0;
}
</style>
