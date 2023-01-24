<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.scheduler.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const dataSource = new window.Smart.DataAdapter({
        dataSource: "./../../../sampledata/scheduler/icalendar.ics",
        dataSourceType: "ics",
        dataFields: [
          {
            name: "dateStart",
            map: "DTSTART",
            dataType: "date",
          },
          {
            name: "dateEnd",
            map: "DTEND",
            dataType: "date",
          },
          {
            name: "label",
            map: "SUMMARY",
            dataType: "string",
          },
          {
            name: "location",
            map: "LOCATION",
            dataType: "string",
          },
          {
            name: "description",
            map: "DESCRIPTION",
            dataType: "string",
          },
          {
            name: "rrule",
            map: "RRULE",
            dataType: "string",
          },
          {
            name: "extdate",
            map: "EXDATE",
            dataType: "string",
          },
          {
            name: "status",
            map: "STATUS",
            dataType: "string",
          },
          {
            name: "reccurenceId",
            map: "RECURRENCEID",
            dataType: "string",
          },
          {
            name: "uid",
            map: "UID",
            dataType: "string",
          },
          {
            name: "categories",
            map: "CATEGORIES",
            dataType: "string",
          },
          {
            name: "alarm",
            map: "ALARM",
            dataType: "any",
          },
        ],
      });
      const priorityData = [
        {
          label: "Low Priority",
          id: 1,
          backgroundColor: "#1e90ff",
        },
        {
          label: "Medium Priority",
          id: 2,
          backgroundColor: "#ff9747",
        },
      ];
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              firstDayOfWeek: 1,
              view: "month",
              dataSource: dataSource,
              views: ["day", "week", "month"],
              timelineDayScale: "halfHour",
              resources: [
                {
                  label: "Priority",
                  value: "priorityId",
                  dataSource: priorityData
                },
              ],
            };
          }
        }
      );
    });
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.smart-scheduler {
  width: 100%;
  height: 100%;
  --smart-scheduler-view-item-size: 100px;
}

#app,
.vue-root {
  height: 100%;
}

.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 260px;
}

@media (max-width: 750px) {
  .options {
    position: relative;
    top: 30px;
    width: 240px;
    margin: 0 auto;
  }
}
</style>
