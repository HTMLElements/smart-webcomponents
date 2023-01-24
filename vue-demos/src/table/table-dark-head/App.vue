<template>
  <div class="vue-root">
    <div class="demo-description">
      Similar to tables and dark tables, use the modifier classes .thead-primary,
      .thead-secondary, .thead-surface, .thead-light or .thead-dark to make
      &lt;thead>s appear in primary, light or dark gray.
    </div>
    <smart-table class="table-hover table-striped thead-dark" id="table"></smart-table>
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
    });
  }
};
</script>

<style>
</style>
