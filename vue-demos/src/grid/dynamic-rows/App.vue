<template>
  <div class="vue-root">
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="addRow">Add Row</smart-button>
      </div>
      <div class="option">
        <smart-button id="removeLastRow">Remove Last Row</smart-button>
      </div>
      <div class="option">
        <smart-button id="removeFirstRow">Remove First Row</smart-button>
      </div>
      <div class="option">
        <smart-button id="updateFirstRow">Update First Row</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
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

      const grid = document.getElementById("grid");
      let rows;
      grid.whenRendered(() => {
        rows = grid.rows;
      });
      const addRow = document.getElementById("addRow");
      const removeLastRow = document.getElementById("removeLastRow");
      const removeFirstRow = document.getElementById("removeFirstRow");
      const updateFirstRow = document.getElementById("updateFirstRow");
      const updateButtonsDisabledState = function() {
        removeLastRow.disabled = rows.length === 0;
        removeFirstRow.disabled = rows.length === 0;
        updateFirstRow.disabled = rows.length === 0;
      };
      const createRow = function() {
        const countries = [
          "Bulgaria",
          "Germany",
          "France",
          "Japan",
          "China",
          "Italy",
          "Spain",
          "Portugal",
          "India",
          "Romania",
          "Russia",
          "Serbia",
          "Turkey",
          "Israel"
        ];
        const newRow = new window.Smart.Grid.Row({
          data: {
            ID: Math.random(),
            Country: countries[parseInt("" + 10 * Math.random())],
            Area: parseInt("" + Math.random() * 1000000),
            Population_Rural: new Number("" + Math.random()).toFixed(2),
            Population_Total: parseInt("" + Math.random() * 10000000),
            GDP_Total: parseInt("" + Math.random() * 1000000)
          }
        });
        return newRow;
      };
      addRow.addEventListener("click", function() {
        rows.push(createRow());
        updateButtonsDisabledState();
      });
      removeLastRow.addEventListener("click", function() {
        rows.pop();
        updateButtonsDisabledState();
      });
      removeFirstRow.addEventListener("click", function() {
        rows.splice(0, 1);
        updateButtonsDisabledState();
      });
      updateFirstRow.addEventListener("click", function() {
        if (rows.length > 0) {
          rows[0] = createRow();
        }
      });
    });
  }
};
</script>

<style>
smart-grid {
  width: 60%;
}
</style>
