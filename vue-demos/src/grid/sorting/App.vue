<template>
  <div class="vue-root">
    <div class="demo-description">Click on a column header to Sort by it.</div>
    <smart-grid id="grid"></smart-grid>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              sorting: {
                enabled: true
              },
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
                {
                  label: "Country",
                  dataField: "Country",
                  sortOrder: "desc"
                },
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
smart-grid {
  width: 100%;
  height: auto;
}
</style>
