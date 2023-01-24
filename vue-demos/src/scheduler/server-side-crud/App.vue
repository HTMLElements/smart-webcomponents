<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
    <h4>Data Base Data</h4>
    <smart-table id="table"></smart-table>
    <div class="options">
      <div class="description">
        <h2>Server-Side CRUD operations</h2>
        When a new Scheduler event is added, removed or updated a request with
        CRUD data object is made to the Server-Side Database. The server uses
        the SQL query sent by the Server-Side Datasource to get the events. The
        type of query is stored in the request's action property.
        <br />
        <br />This example uses a demo server with AlaSQL that generates SQL to
        show how a real server might use the requests sent by the Scheduler. The
        Server-Side Scheduler usage does not have any restrictions on the
        server-side technologies used.
      </div>
      <div class="option">
        <h4>SQL Query</h4>
        <div id="query"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.table.js";
import "smart-webcomponents/source/modules/smart.scheduler.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      // In this sample, we use http://alasql.org/ to show how to use SQL queries with Smart.Grid
      function DemoServer() {
        const alasql = window.alasql;
        alasql.options.cache = false;
        //Create the DataBase Table
        alasql(
          "CREATE TABLE Events (EventID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,Label NVARCHAR(255),DateStart NVARCHAR(255), DateEnd NVARCHAR(255), Description NVARCHAR(255),AllDay NVARCHAR(255))"
        );
        alasql(
          'INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Prepare Documentation","2021-01-25T22:00:00.000Z","2021-01-30T22:00:00.000Z","Prepare the documentation for tommorow\'s release","true")'
        );
        alasql(
          'INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Release Notes","2021-01-22T22:00:00.000Z","2021-01-25T22:00:00.000Z","Add release notes to the commits.","false")'
        );
        alasql(
          'INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Invite Customers For Discussion","2021-01-23T22:00:00.000Z","2021-01-28T22:00:00.000Z","Invite potential customers to a brief descussion on the products.","false")'
        );
        alasql(
          'INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Preview Customer Feedback","2021-01-04T22:00:00.000Z","2021-01-07T22:00:00.000Z","Preview the feedback from the customers.","false")'
        );
        alasql(
          'INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Meeting With A Major Client","2021-01-05T22:00:00.000Z","2021-01-06T22:00:00.000Z","Have a meeting with a big client from the states.","false")'
        );
        return {
          getData: function (request) {
            return executeSql(request);
          },
        };

        function executeSql(request) {
          const table = document.getElementById("table"),
            scheduler = document.getElementById("scheduler");
          let lastId;
          if (request) {
            // Deletes a Row.
            if (request.action === "delete") {
              const sqlDeleteQuery =
                "DELETE FROM Events WHERE " + request.query;
              window.alasql(sqlDeleteQuery);
              window.query.innerHTML = sqlDeleteQuery;
            }
            // Adds a Row.
            else if (request.action === "insert") {
              const sqlAddQuery =
                "INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES " +
                request.query;
              window.alasql(sqlAddQuery);
              window.query.innerHTML = sqlAddQuery;
            }
            // Updates a Row.
            else if (request.action === "update") {
              const sqlUpdateQuery = "UPDATE Events " + request.query;
              window.alasql(sqlUpdateQuery);
              window.query.innerHTML = sqlUpdateQuery;
            }
          } else {
            window.query.innerHTML = "";
          }
          // SQL Select query.
          const sql = "SELECT * FROM Events",
            result = window.alasql(sql);
          //Update the Table
          table.dataSource = new window.Smart.DataAdapter({
            dataSource: result,
            dataFields: [
              {
                name: "id",
                map: "EventID",
                dataType: "number",
              },
              {
                name: "label",
                map: "Label",
                dataType: "string",
              },
              {
                name: "dateStart",
                map: "DateStart",
                dataType: "string",
              },
              {
                name: "dateEnd",
                map: "DateEnd",
                dataType: "string",
              },
              {
                name: "description",
                map: "Description",
                dataType: "string",
              },
              {
                name: "allDay",
                map: "AllDay",
                dataType: "string",
              },
            ],
          });
          return result;
        }
      }

      window.demoServer = DemoServer();
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.demoServer.getData(),
                dataSourceType: "array",
                dataFields: [
                  {
                    name: "id",
                    map: "EventID",
                    dataType: "number",
                  },
                  {
                    name: "label",
                    map: "Label",
                    dataType: "string",
                  },
                  {
                    name: "dateStart",
                    map: "DateStart",
                    dataType: "string",
                  },
                  {
                    name: "dateEnd",
                    map: "DateEnd",
                    dataType: "string",
                  },
                  {
                    name: "description",
                    map: "Description",
                    dataType: "string",
                  },
                  {
                    name: "allDay",
                    map: "AllDay",
                    dataType: "string",
                  },
                ],
              }),
              view: "month",
              dateCurrent: new Date(2021, 0, 25),
            };
          }
        }
      );
      window.Smart(
        "#table",
        class {
          get properties() {
            return {
              keyboardNavigation: true,
              columns: [
                {
                  label: "Id",
                  dataField: "id",
                  width: 50,
                },
                {
                  label: "Label",
                  dataField: "label",
                },
                {
                  label: "Date Start",
                  dataField: "dateStart",
                  formatFunction: (settings) =>
                    (settings.value = new Date(settings.value).toString()),
                },
                {
                  label: "Date End",
                  dataField: "dateEnd",
                  formatFunction: (settings) =>
                    (settings.value = new Date(settings.value).toString()),
                },
                {
                  label: "Description",
                  dataField: "description",
                },
                {
                  label: "All Day",
                  dataField: "allDay",
                },
              ],
            };
          }
        }
      );

      const scheduler = document.getElementById("scheduler");

      function refreshData(action, eventItem) {
        let newData;
        switch (action) {
          case "update":
            newData = window.demoServer.getData({
              action: "update",
              query: `SET Label = "${
                eventItem.label
              }", DateStart = "${eventItem.dateStart.toISOString()}", DateEnd = "${eventItem.dateEnd.toISOString()}", Description = "${
                eventItem.description
              }", AllDay = "${!!eventItem.allDay}"
WHERE EventID = ${eventItem.id};`,
            });
            break;
          case "insert":
            newData = window.demoServer.getData({
              action: "insert",
              query: `("${
                eventItem.label
              }","${eventItem.dateStart.toISOString()}","${eventItem.dateEnd.toISOString()}","${
                eventItem.description || ""
              }","${!!eventItem.allDay}");`,
            });
            break;
          case "delete":
            newData = window.demoServer.getData({
              action: "delete",
              query: `EventID = ${eventItem.id};`,
            });
            break;
        }
        if (newData) {
          //Update the Scheduler
          scheduler.dataSource = new window.Smart.DataAdapter({
            dataSource: newData,
            dataSourceType: "array",
            dataFields: [
              {
                name: "id",
                map: "EventID",
                dataType: "number",
              },
              {
                name: "label",
                map: "Label",
                dataType: "string",
              },
              {
                name: "dateStart",
                map: "DateStart",
                dataType: "string",
              },
              {
                name: "dateEnd",
                map: "DateEnd",
                dataType: "string",
              },
              {
                name: "description",
                map: "Description",
                dataType: "string",
              },
              {
                name: "allDay",
                map: "AllDay",
                dataType: "string",
              },
            ],
          });
        }
      }
      scheduler.addEventListener("dragEnd", function (event) {
        const detail = event.detail,
          item = detail.item,
          newDates = detail.itemDateRange;
        item.dateStart = newDates.dateStart;
        item.dateEnd = newDates.dateEnd;
        refreshData("update", item);
      });
      scheduler.addEventListener("resizeEnd", function (event) {
        const detail = event.detail,
          item = detail.item,
          newDates = detail.itemDateRange;
        item.dateStart = newDates.dateStart;
        item.dateEnd = newDates.dateEnd;
        refreshData("update", item);
      });
      scheduler.addEventListener("itemUpdate", function (event) {
        refreshData("update", event.detail.item);
      });
      scheduler.addEventListener("itemRemove", function (event) {
        refreshData("delete", event.detail.item);
      });
      scheduler.addEventListener("itemInsert", function (event) {
        refreshData("insert", event.detail.item);
      });
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

.smart-scheduler,
.smart-table {
  width: calc(100% - 300px);
  height: calc(50% - 35px);
}

@media (max-width: 750px) {
  .smart-scheduler,
  .smart-table {
    width: 100%;
  }
}

#query {
  overflow: hidden;
  text-overflow: ellipsis;
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
