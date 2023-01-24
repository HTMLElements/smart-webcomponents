<template>
  <div class="vue-root">
    <div class="demo-description">DataGrid's Data is updated every 50ms</div>
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
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.getStockData(),
                dataFields: [
                  "symbol: string",
                  "name: string",
                  "region: string",
                  "matchScore: number"
                ]
              }),
              columns: [
                {
                  label: "Symbol",
                  dataField: "symbol"
                },
                {
                  label: "Name",
                  dataField: "name"
                },
                {
                  label: "Region",
                  dataField: "region"
                },
                {
                  label: "Match Score",
                  dataField: "matchScore"
                }
              ]
            };
          }
        }
      );

      const updateValues = function() {
        grid.beginUpdate();
        for (let i = 0; i < rows.length; i++) {
          const value = new Number(Math.random()).toFixed(2);
          const cell = rows[i].cells[3];
          if (value < 0.2) {
            cell.background = "#FC3752";
            cell.color = "#fff";
          } else if (value > 0.8) {
            cell.background = "#95FF00";
            cell.color = "#000";
          } else {
            cell.background = "#FF6800";
            cell.color = "#fff";
          }
          cell.value = value;
        }
        grid.endUpdate();
      };

      const grid = document.getElementById("grid");
      let rows;
      grid.whenRendered(() => {
        rows = grid.rows;
        updateValues();
      });

      setInterval(function() {
        updateValues();
      }, 50);
    });
  }
};
</script>

<style>
smart-grid {
  width: 60%;
  height: auto;
}
</style>
