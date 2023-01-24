<template>
  <div class="vue-root">
    <smart-gantt-chart view="day" tree-size="125"></smart-gantt-chart>
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
      gantt.durationUnit = "hour";
      gantt.taskColumns = [
        {
          label: "Employee",
          value: "id"
        }
      ];
      gantt.timelineHeaderFormatFunction = function(
        date,
        type,
        isHeaderDetailsContainer
      ) {
        if (isHeaderDetailsContainer) {
          return "Time";
        } else {
          return date.toLocaleTimeString(gantt.locale, {
            hour: "numeric",
            minute: "numeric",
            hour12: true
          });
        }
      };
      gantt.dataSource = [
        {
          id: "Betty",
          label: "Morning Shift",
          dateStart: "2021-01-15T04:00:00",
          dateEnd: "2021-01-15T012:30:00",
          class: "morning-shift",
          type: "task"
        },
        {
          id: "William",
          label: "Afternoon-shift",
          dateStart: "2021-01-15T12:30:00",
          dateEnd: "2021-01-15T20:00:00",
          class: "afternoon-shift",
          type: "task"
        },
        {
          id: "Emma",
          label: "Half-day",
          dateStart: "2021-01-15T12:30:00",
          dateEnd: "2021-01-15T16:30:00",
          class: "half-day",
          type: "task"
        },
        {
          id: "Oliver",
          label: "Morning-shift",
          dateStart: "2021-01-15T04:00:00",
          dateEnd: "2021-01-15T12:30:00",
          class: "morning-shift",
          type: "task"
        },
        {
          id: "Jason",
          label: "Afternoon-shift",
          dateStart: "2021-01-15T12:30:00",
          dateEnd: "2021-01-15T20:00:00",
          class: "afternoon-shift",
          type: "task"
        },
        {
          id: "Alex",
          label: "Early-morning-support",
          dateStart: "2021-01-15T00:00:00",
          dateEnd: "2021-01-15T08:30:00",
          class: "early-morning-support",
          type: "task"
        },
        {
          id: "Lucas",
          label: "Half-day",
          dateStart: "2021-01-15T04:00:00",
          dateEnd: "2021-01-15T08:00:00",
          class: "half-day",
          type: "task"
        },
        {
          id: "Michael",
          label: "Early-morning-support",
          dateStart: "2021-01-15T00:00:00",
          dateEnd: "2021-01-15T08:30:00",
          class: "early-morning-support",
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
}

smart-gantt-chart[theme="dark"] {
  --smart-gantt-chart-task-label-color: black;
  --smart-gantt-chart-task-thumb-color: white;
}

smart-gantt-chart .morning-shift {
  --smart-gantt-chart-task-color: rgb(56, 181, 216);
}

smart-gantt-chart .half-day {
  --smart-gantt-chart-task-color: rgb(245, 174, 0);
}

smart-gantt-chart .early-morning-support {
  --smart-gantt-chart-task-color: rgb(255, 144, 166);
}

smart-gantt-chart .afternoon-shift {
  --smart-gantt-chart-task-color: rgb(34, 177, 141);
}
</style>
