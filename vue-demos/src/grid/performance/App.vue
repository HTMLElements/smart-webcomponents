<template>
  <div class="vue-root">
    <div class="demo-description">
      DataGrid's Data is updated every 10ms. The View is with 10 columns and
      20 rows.
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
              dataSource: new window.Smart.DataAdapter({
                dataSource: 20
              }),
              columns: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
            };
          }
        }
      );

      const updateValues = function() {
        grid.beginUpdate();
        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          for (let j = 0; j < row.cells.length; j++) {
            const randomNum = Math.random();
            const value = new Number(randomNum).toFixed(2);
            const cell = rows[i].cells[j];
            cell.value = value;
            if (value < 0.2) {
              cell.background = "#27A2FC";
              cell.color = "#fff";
            } else if (value > 0.8) {
              cell.background = "#6C01FF";
              cell.color = "#000";
            } else {
              cell.background = "#FC27A2";
              cell.color = "#fff";
            }
          }
        }
        grid.endUpdate();
      };

      const grid = document.getElementById("grid");
      let rows;
      grid.whenRendered(() => {
        rows = grid.rows;
        updateValues();
        setInterval(function() {
          updateValues();
        }, 10);
      });
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
