<template>
  <div class="vue-root">
    <b>Description:</b> Connections can be created/removed using methods as
    well.
    <ul>
      <li>
        Add Connection - Create's a connection between "Task 1.2" and "Milestone
        1" of type Start-to-Start(0).
      </li>
      <li>
        Remove Specific Connection - Removes the selected connection from the
        Drop Down List.
      </li>
      <li>Remove All Connections - Removes all connections between the tasks.</li>
    </ul>
    <smart-gantt-chart></smart-gantt-chart>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <!--<input placeholder="a-b-c" id="connectionIdInput" />-->
        <smart-drop-down-list id="connectionSelector">
          <smart-list-item value="0-1-0">Project 1 - Task 1.1</smart-list-item>
          <smart-list-item value="1-2-2">Task 1.1 - Task 1.2</smart-list-item>
          <smart-list-item value="3-4-1">Milestone 1 - Task 2</smart-list-item>
        </smart-drop-down-list>
      </div>
      <div class="option">
        <smart-button id="createConButton">Add Connection</smart-button>
      </div>
      <div class="option">
        <smart-button id="deleteConButton">Remove Connection</smart-button>
      </div>
      <div class="option">
        <smart-button id="deleteAllConButton">Remove All</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.ganttchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const gantt = document.querySelector("smart-gantt-chart"),
        connectionSelector = document.getElementById("connectionSelector");
      gantt.dataSource = [
        {
          //Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
          label: "Project 1",
          synchronized: true,
          expanded: true,
          type: "project",
          connections: [
            {
              target: 1,
              type: 0
            }
          ],
          tasks: [
            {
              label: "Task 1.1",
              dateStart: "2020-05-10",
              dateEnd: "2021-04-10",
              type: "task",
              connections: [
                {
                  target: 2,
                  type: 2
                }
              ]
            },
            {
              label: "Task 1.2",
              dateStart: "2020-03-27",
              dateEnd: "2021-06-10",
              type: "task"
            },
            {
              label: "Milestone 1",
              dateEnd: "2021-03-15",
              type: "milestone",
              connections: [
                {
                  target: 4,
                  type: 1
                }
              ]
            }
          ]
        },
        {
          label: "Task 2",
          dateStart: "2021-06-21",
          dateEnd: "2021-12-10",
          type: "task"
        }
      ];
      document
        .getElementById("createConButton")
        .addEventListener("click", function() {
          const task = gantt.tasks[2];
          if (task && task.connections.length) {
            return;
          }
          gantt.createConnection("2-3-0");
          connectionSelector.insert(4, {
            value: "2-3-0",
            label: "Task 1.2 - Milestone 1"
          });
        });
      document
        .getElementById("deleteConButton")
        .addEventListener("click", function() {
          const con = connectionSelector.selectedValues[0];
          if (con) {
            gantt.removeConnection(con);
            connectionSelector.removeAt(connectionSelector.selectedIndexes[0]);
          }
        });
      document
        .getElementById("deleteAllConButton")
        .addEventListener("click", function() {
          gantt.removeAllConnections();
          connectionSelector.clearItems();
        });
    });
  }
};
</script>

<style>
smart-gantt-chart {
  width: calc(100% - 300px);
  height: auto;
}

smart-button {
  width: 100%;
}

@media (max-width: 700px) {
  smart-gantt-chart {
    width: 95%;
    margin-left: 2%;
  }
}
</style>
