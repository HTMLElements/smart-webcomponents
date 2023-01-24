<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >This demo showcases how to retrieve data through HTTP in smart-table.</div>
    <smart-table id="table"></smart-table>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.table.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#table",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                virtualDataSourceLength: 500,
                virtualDataSourceCache: true,
                virtualDataSource: function(resultCallbackFunction, details) {
                  fetch(
                    "https://randomuser.me/api/?results=" +
                      (details.last - details.first)
                  )
                    .then(response => response.json())
                    .then(json => {
                      const data = json.results.map(result => {
                        return {
                          title: result.name.title,
                          firstName: result.name.first,
                          lastName: result.name.last,
                          phone: result.phone
                        };
                      });
                      resultCallbackFunction({
                        dataSource: data,
                        virtualDataSourceLength: 500
                      });
                    });
                },
                dataFields: [
                  "title: string",
                  "firstName: string",
                  "lastName: string",
                  "phone: string"
                ]
              }),
              paging: true,
              pageIndex: 0,
              pageSize: 10,
              columns: [
                {
                  label: "Title",
                  dataField: "title",
                  dataType: "string"
                },
                {
                  label: "First Name",
                  dataField: "firstName",
                  dataType: "string"
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  dataType: "string"
                },
                {
                  label: "Phone",
                  dataField: "phone",
                  dataType: "string"
                }
              ]
            };
          }
        }
      );
    });
  }
};
</script>

<style>
</style>
