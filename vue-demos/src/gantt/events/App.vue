<template>
  <div class="vue-root">
    <div class="demo-description">
      <p>
        GanttChart fires a number of events on different ocasions, like dragging,resizing,inserting/removing
        a connection between tasks or editing/removing/inserting a task/resource.
        Double click on a task in order to open the Editor Window. When an item
        is edited an event is fired and displayed in the log.
      </p>Events fired in
      the demo:
      <ul>
        <li>change - fired when selection is changed</li>
        <li>opening - fired when the editor window is opening</li>
        <li>open - fired when the editor window is opened</li>
        <li>closing - fired when the editor window is closing</li>
        <li>close - fired when the editor window is closed</li>
        <li>dragStart - fired when a task bar dragging is started</li>
        <li>dragEnd - fired when a task bar dragging is finished</li>
        <li>resizeStart - fired when a task bar resizing is started</li>
        <li>resizeEnd - fired when a task bar resizing is finished</li>
        <li>progressChangeStart - fired when task bar progress thumb dragging is started</li>
        <li>progressChangeEnd - fired when task bar progress thumb dragging is finished</li>
        <li>connetionStart - fired when task bar connecting is started</li>
        <li>connetionEnd - fired when task bar conneciting is finished.</li>
        <li>itemRemove - fired when a task/resource/connection is removed.</li>
        <li>itemInsert - fired when a task/resource/connection is inserted.</li>
        <li>itemUpdate - fired when a task/resource/connection is updated.</li>
        <li>
          itemClick - fired when a task bar/task tree item/resource tree item/connection
          is clicked.
        </li>
      </ul>
    </div>
    <smart-gantt-chart id="ganttChart"></smart-gantt-chart>
    <div class="options">
      <h3>Events:</h3>
      <div class="option" id="eventLog">
        <div id="log"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.ganttchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#ganttChart",
        class {
          get properties() {
            return {
              view: "week",
              durationUnit: "day",
              taskColumns: [
                {
                  label: "Name",
                  value: "label"
                }
              ],
              dataSource: [
                {
                  label: "Task A",
                  dateStart: "2021-01-15",
                  duration: 10
                },
                {
                  label: "Task B",
                  dateStart: "2021-01-14",
                  duration: 6
                },
                {
                  label: "Task C",
                  dateStart: "2021-01-16",
                  duration: 4
                },
                {
                  label: "Task D",
                  dateStart: "2021-01-13",
                  duration: 12
                },
                {
                  label: "Task E",
                  dateStart: "2021-01-18",
                  duration: 7
                },
                {
                  label: "Task F",
                  dateStart: "2021-01-15T00:00:00",
                  duration: 15
                }
              ]
            };
          }
        }
      );

      const ganttChart = document.querySelector("smart-gantt-chart"),
        log = document.getElementById("log"),
        eventNames = [
          "change",
          "opening",
          "closing",
          "open",
          "close",
          "dragStart",
          "dragEnd",
          "resizeStart",
          "resizeEnd",
          "progressChangeStart",
          "progressChangeEnd",
          "connectionStart",
          "connectionEnd",
          "itemRemove",
          "itemInsert",
          "itemUpdate",
          "itemClick"
        ];
      for (let i = 0; i < eventNames.length; i++) {
        ganttChart.addEventListener(eventNames[i], function(e) {
          log.innerHTML += e.type + "<br />";
        });
      }
    });
  }
};
</script>

<style>
.smart-gantt-chart {
  width: calc(100% - 300px);
  height: 450px;
}
@media only screen and (max-width: 600px) {
  .smart-gantt-chart {
    width: 100%;
    height: auto;
  }
}
</style>
