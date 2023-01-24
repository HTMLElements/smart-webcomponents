<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
    <div class="options">
      <div class="description">
        <h3>Server-Side Events Loading with MySql and PHP</h3>
        Data in this demo is loaded on demand from MySql Database and especially
        the 'Employees' table of the Northwind Database. Server request is made
        when you refresh the page. This is achieved by using the
        Smart.DataAdapter by setting it to the <b>dataSource</b> property of the
        Smart.Scheduler. The Server reponse represents a JSON array which
        contains the records for the Employees table.
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
              dataSource: new window.Smart.DataAdapter({
                beforeLoadComplete: (data) => {
                  //Handle Data from the Server before the DataAdapter handles it
                  return JSON.parse(data);
                },
                onBindingComplete: (boundSource) => {
                  //Modify the DataAdapter data before it is handled by the Scheduler
                  const today = new Date(),
                    year = today.getFullYear(),
                    month = today.getMonth(),
                    data = boundSource.data;
                  for (let i = 0; i < data.length; i++) {
                    const dateStart = data[i].dateStart;
                    data[i].dateStart = new Date(
                      year,
                      month,
                      dateStart.getDate(),
                      dateStart.getHours(),
                      dateStart.getMinutes()
                    );
                  }
                },
                dataSource: "scheduler_data.php",
                dataSourceType: "json",
                dataFields: [
                  {
                    name: "id",
                    map: "EmployeeId",
                    dataType: "number",
                  },
                  {
                    name: "dateStart",
                    map: "HireDate",
                    dataType: "date",
                  },
                  {
                    name: "label",
                    map: "FirstName",
                    dataType: "string",
                  },
                  {
                    name: "description",
                    map: "Title",
                    dataType: "string",
                  },
                ],
              }),
              view: "month",
              views: ["day", "week", "month"],
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
