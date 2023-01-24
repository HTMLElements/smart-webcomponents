<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
    <div class="options">
      <div class="description">
        <h4>Description</h4>
        <p>
          The demos shows how to load Google Calendar tasks directly via URL.
        </p>
        <p>
          Thanks to the Smart.DataAdapter utility it is possible to load Google
          Calendar events to the Smart.Scheduler via the
          <b>dataSource</b> property.
        </p>
      </div>
    </div>
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
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              view: "month",
              dateCurrent: new Date(2021, 0, 20),
              dataSource: new window.Smart.DataAdapter({
                dataSource:
                  "https://calendar.google.com/calendar/ical/jqwidgetstest%40gmail.com/private-d980817fc2fd252df41420619aeeddbb/basic.ics",
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
              }),
              views: ["day", "week", "month", "agenda"],
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

#app,
.vue-root {
  width: 100%;
  height: 100%;
}

.smart-scheduler {
  width: calc(100% - 300px);
  height: 100%;
  --smart-scheduler-event-border-radius: 5px;
  --smart-scheduler-event-background: rgb(3, 155, 229);
}

@media (max-width: 750px) {
  .smart-scheduler {
    width: 100%;
  }
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
