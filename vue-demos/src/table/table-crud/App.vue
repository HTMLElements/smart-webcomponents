<template>
  <div class="vue-root">
    <div class="demo-description">This demo shows how to Add, Remove and Update rows to a Table.</div>
    <smart-table class="table-dark table-striped" id="table"></smart-table>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="add">Add</smart-button>
      </div>
      <div class="option">
        <smart-button id="remove">Remove</smart-button>
      </div>
      <div class="option">
        <smart-button id="update">Update</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
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
                dataSource: window.getCountriesData(),
                dataFields: [
                  "ID: number",
                  "Country: string",
                  "Area: number",
                  "Population_Urban: number",
                  "Population_Rural: number",
                  "Population_Total: number",
                  "GDP_Agriculture: number",
                  "GDP_Industry: number",
                  "GDP_Services: number",
                  "GDP_Total: number"
                ]
              }),
              columns: [
                "Country",
                "Area",
                "Population_Rural",
                "Population_Total",
                "GDP_Total"
              ]
            };
          }
        }
      );

      const table = document.getElementById("table");
      let counter = 0;
      document.getElementById("add").onclick = function() {
        counter++;
        table.dataSource.add({
          Country: "Bulgaria" + counter,
          Area: "100000",
          Population_Rural: "8000000",
          Population_Total: "8100000",
          GDP_TOTAL: "12321321"
        });
      };
      document.getElementById("remove").onclick = function() {
        if (table.dataSource.length > 0) {
          table.dataSource.removeAt(table.dataSource.length - 1);
        }
      };
      document.getElementById("update").onclick = function() {
        if (table.dataSource.length > 0) {
          counter++;
          table.dataSource.update(0, {
            Country: "Bulgaria" + counter,
            Area: "100000",
            Population_Rural: "8000000",
            Population_Total: "8100000",
            GDP_TOTAL: "12321321321"
          });
        }
      };
    });
  }
};
</script>

<style>
#table {
  width: 60%;
  display: block;
}
</style>
