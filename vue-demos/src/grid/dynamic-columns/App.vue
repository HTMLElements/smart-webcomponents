<template>
  <div class="vue-root">
    <div class="demo-description">
      Grid Column CRUD example.Grid Columns can be added, updated or deleted
      the same way you work with basic Javascript Arrays. Here, we demonstrate
      how to use the Smart Grid API to update, remove the first or last column
      and add a new column,
    </div>
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="addColumn">Add Column</smart-button>
      </div>
      <div class="option">
        <smart-button id="removeLastColumn">Remove Last Column</smart-button>
      </div>
      <div class="option">
        <smart-button id="removeFirstColumn">Remove First Column</smart-button>
      </div>
      <div class="option">
        <smart-button id="updateFirstColumn">Update First Column Header</smart-button>
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
      let columns;
      grid.whenRendered(() => {
        columns = grid.columns;
      });
      const addColumn = document.getElementById("addColumn");
      const removeLastColumn = document.getElementById("removeLastColumn");
      const removeFirstColumn = document.getElementById("removeFirstColumn");
      const updateFirstColumn = document.getElementById("updateFirstColumn");

      const columnsList = [
        "ID",
        "Country",
        "Area",
        "Population_Urban",
        "Population_Rural",
        "Population_Total",
        "GDP_Agriculture",
        "GDP_Industry",
        "GDP_Services",
        "GDP_Total"
      ];
      const updateButtonsDisabledState = function() {
        addColumn.disabled = columns.length === columnsList.length;
        removeLastColumn.disabled = columns.length === 0;
        removeFirstColumn.disabled = columns.length === 0;
        updateFirstColumn.disabled =
          columns.length === 0 ||
          (columns.length > 0 && columns[0].label.indexOf("New") !== -1);
      };
      addColumn.addEventListener("click", function() {
        for (let i = 0; i < columnsList.length; i++) {
          let alreadyAdded = false;
          for (let j = 0; j < columns.length; j++) {
            const column = columns[j];
            if (column && column.label === columnsList[i]) {
              alreadyAdded = true;
              break;
            }
          }
          if (alreadyAdded) {
            continue;
          }
          const newColumn = new window.Smart.Grid.Column({
            label: columnsList[i],
            dataField: columnsList[i]
          });
          columns.push(newColumn);
          break;
        }
        updateButtonsDisabledState();
      });
      removeLastColumn.addEventListener("click", function() {
        columns.pop();
        updateButtonsDisabledState();
      });
      removeFirstColumn.addEventListener("click", function() {
        columns.splice(0, 1);
        updateButtonsDisabledState();
      });
      updateFirstColumn.addEventListener("click", function() {
        if (columns.length > 0) {
          columns[0].label = "New " + columns[0].label;
        }
        updateFirstColumn.disabled = true;
      });
    });
  }
};
</script>

<style>
smart-grid {
  width: 60%;
  height: auto;
  min-height: 349px;
}
smart-grid.smart-container {
  min-height: 349px;
}
.options smart-button {
  width: 100%;
}
</style>
