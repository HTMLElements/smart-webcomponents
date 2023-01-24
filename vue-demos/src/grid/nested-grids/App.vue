<template>
  <div class="vue-root">
    <div class="demo-description">
      smartGrid can display nested Grids by using the Row Detail functionality.
      By expanding a Grid row in this demo, a Nested Grid is displayed showing
      additional details about data. That is achieved by enabling row details
      and implementing the 'onRowDetailInit' callback function.
    </div>
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
              appearance: {
                showRowHeaderNumber: true,
                allowRowDetailToggleAnimation: true
              },
              onRowInit(index, row) {
                if (index === 0) {
                  row.showDetail = true;
                }
              },
              onRowDetailInit(index, row, detail) {
                const grid = document.createElement("div");
                detail.appendChild(grid);
                new window.smartGrid(grid, {
                  dataSource: new window.Smart.DataAdapter({
                    dataSource: window
                      .getCountriesData()
                      .filter(data => data.ID === row.data.ID),
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
                    "Population_Urban",
                    "Population_Rural",
                    "Population_Total",
                    "GDP_Total"
                  ]
                });
              },
              rowDetail: {
                enabled: true,
                visible: true,
                height: 120
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
html,
body {
  height: 1200px;
}
smart-grid {
  height: auto;
  max-height: 700px;
  width: 100%;
}

smart-grid .smart-grid-row-detail smart-grid {
  margin-left: 20px;
  margin-top: 20px;
  line-height: initial;
  height: auto;
  width: calc(100% - 40px);
}
</style>
