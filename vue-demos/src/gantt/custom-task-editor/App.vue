<template>
  <div class="vue-root">
    <div class="demo-description">
      Gantt Chart in this example represents the working hours of the employees
      of a small company. Note that 12 PM is a non-working hour.
    </div>
    <smart-gantt-chart duration-unit="hour" view="day" nonworking-hours="[12]"></smart-gantt-chart>
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
      const gantt = document.querySelector("smart-gantt-chart");
      gantt.treeSize = "35%";
      gantt.taskColumns = [
        {
          label: "Tasks",
          value: "label",
          size: "35%"
        },
        {
          label: "Start Date",
          value: "dateStart",
          size: "35%"
        },
        {
          label: "Duration (Hours)",
          value: "duration",
          formatFunction: date => parseInt(date),
          customEditor: function() {
            let fragment = document.createDocumentFragment(),
              customEditorLabel = document.createElement("label"),
              dropDownList = document.createElement("smart-drop-down-list");
            customEditorLabel.innerHTML = "Duration";
            dropDownList.dropDownAppendTo = "body";
            dropDownList.dataSource = [4, 8, 12];
            fragment.appendChild(customEditorLabel);
            fragment.appendChild(dropDownList);
            return fragment;
          },
          setCustomEditorValue: function(editor, label, value) {
            const dropDownList = editor.querySelector("smart-drop-down-list");
            dropDownList.select(value.toString());
          },
          getCustomEditorValue: function(editor) {
            const dropDownList = editor.querySelector("smart-drop-down-list");
            return dropDownList.selectedValues[0];
          }
        }
      ];
      gantt.dataSource = [
        {
          label: "John",
          dateStart: "2021-06-17T06:30:00",
          connections: [
            {
              target: 1,
              type: 1
            }
          ],
          duration: 8,
          class: "john",
          type: "task"
        },
        {
          label: "Jane",
          dateStart: "2021-06-18T09:00:00",
          connections: [
            {
              target: 2,
              type: 1
            }
          ],
          duration: 8,
          class: "jane",
          type: "task"
        },
        {
          label: "Peter",
          dateStart: "2021-06-19T07:30:00",
          connections: [
            {
              target: 3,
              type: 1
            }
          ],
          duration: 8,
          class: "peter",
          type: "task"
        },
        {
          label: "Melania",
          dateStart: "2021-06-20T10:00:00",
          connections: [
            {
              target: 4,
              type: 1
            }
          ],
          duration: 8,
          class: "melania",
          type: "task"
        },
        {
          label: "Donald",
          dateStart: "2021-06-21T08:30:00",
          connections: [
            {
              target: 5,
              type: 1
            }
          ],
          duration: 8,
          class: "donald",
          type: "task"
        }
      ];
    });
  }
};
</script>

<style>
smart-gantt-chart {
  height: auto;
  --smart-gantt-chart-task-default-height: 50px;
  --smart-gantt-chart-selection: rgba(0, 199, 181, 0.2);
  --smart-gantt-chart-selection-color: black;
  --smart-gantt-chart-hover: rgba(0, 199, 181, 0.2);
  --smart-gantt-chart-hover-color: black;
  --smart-gantt-chart-timeline-nonworking-color: repeating-linear-gradient(
    45deg,
    #ffadaf,
    #ffadaf 10px,
    #ff8181 10px,
    #ff8181 20px
  );
  --smart-gantt-chart-task-default-label-color: white;
}

smart-gantt-chart .john {
  --smart-gantt-chart-task-default-color: rgb(124, 175, 199);
}

smart-gantt-chart .jane {
  --smart-gantt-chart-task-default-color: rgb(124, 130, 199);
}

smart-gantt-chart .peter {
  --smart-gantt-chart-task-default-color: rgb(163, 124, 199);
}

smart-gantt-chart .melania {
  --smart-gantt-chart-task-default-color: rgb(199, 124, 190);
}

smart-gantt-chart .donald {
  --smart-gantt-chart-task-default-color: rgb(199, 124, 145);
}
</style>
