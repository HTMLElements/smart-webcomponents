<template>
  <div class="vue-root">
    <div class="demo-description">
      <b>Save State</b> Button saves the current state of the Chart to LocalStorage.
      <b>Load State</b> Button
      reloads a previously saved state.
      <b>Reset</b> Button will erase any cache
      and will restore the Chart to it's initial state.
      <pre><b>Previously saved states of the element are pre-loade on page refresh !</b></pre>
      <br />
      <pre><b>Notice that the element must have an 'id' in order to save/load it's state.</b></pre>
    </div>
    <smart-gantt-chart id="myGanttChart" view="week"></smart-gantt-chart>
    <div class="options">
      <div class="option">
        <smart-button id="saveState">Save State</smart-button>
      </div>
      <div class="option">
        <smart-button id="loadState">Load State</smart-button>
      </div>
      <div class="option">
        <smart-button id="clearState">Reset</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.ganttchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const gantt = document.querySelector("smart-gantt-chart");

      function reset() {
        gantt.dataSource = [
          {
            label: "Clear Site",
            dateStart: "2021-01-1",
            dateEnd: "2021-01-10",
            connections: [
              {
                target: 1,
                type: 0
              }
            ]
          },
          {
            label: "Drainage & Foundation",
            dateStart: "2021-01-11",
            dateEnd: "2021-01-20",
            connections: [
              {
                target: 2,
                type: 1
              }
            ]
          },
          {
            label: "Ground Floor",
            dateStart: "2021-01-21",
            dateEnd: "2021-01-31",
            connections: [
              {
                target: 3,
                type: 1
              }
            ]
          },
          {
            label: "First Floor",
            dateStart: "2021-02-01",
            dateEnd: "2021-02-20",
            connections: [
              {
                target: 4,
                type: 1
              }
            ]
          },
          {
            label: "Roofing",
            dateStart: "2021-02-25",
            dateEnd: "2021-03-5",
            connections: [
              {
                target: 5,
                type: 1
              }
            ]
          },
          {
            label: "Connect Electricity",
            dateStart: "2021-03-6",
            dateEnd: "2021-03-15",
            connections: [
              {
                target: 6,
                type: 1
              }
            ]
          },
          {
            label: "Air Conditioning",
            dateStart: "2021-03-16",
            dateEnd: "2021-03-20",
            connections: [
              {
                target: 7,
                type: 1
              }
            ]
          },
          {
            label: "Interiors",
            dateStart: "2021-03-21",
            dateEnd: "2021-03-28",
            connections: [
              {
                target: 8,
                type: 1
              }
            ]
          },
          {
            label: "Racking",
            dateStart: "2021-03-31",
            dateEnd: "2021-04-10",
            connections: [
              {
                target: 9,
                type: 1
              }
            ]
          },
          {
            label: "Stock Shelving",
            dateStart: "2021-04-12",
            dateEnd: "2021-05-01"
          }
        ];
      }
      gantt.treeSize = "50%";
      gantt.taskColumns = [
        {
          label: "Tasks",
          value: "label",
          size: "50%"
        },
        {
          label: "Start Date",
          value: "dateStart",
          size: "25%"
        },
        {
          label: "End Date",
          value: "dateEnd"
        }
      ];
      gantt.loadState();
      //Check if a state has been loaded
      if (!gantt.dataSource.length) {
        reset();
      }
      document
        .getElementById("saveState")
        .addEventListener("click", function() {
          gantt.saveState();
        });
      document
        .getElementById("loadState")
        .addEventListener("click", function() {
          gantt.loadState();
        });
      document
        .getElementById("clearState")
        .addEventListener("click", function() {
          gantt.clearState();
          gantt.dataSource = [];
          reset();
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
@media (max-width: 700px) {
  smart-gantt-chart {
    width: 95%;
    margin-left: 2%;
  }
}

smart-button {
  width: 150px;
}

smart-gantt-chart .task {
  --smart-gantt-chart-task-default-color: rgb(94, 99, 181);
  --smart-gantt-chart-task-label-color: white;
}
</style>
