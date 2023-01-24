<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Grid Cells Editing with TimeInput and DateInput editors</h1>Click on any cell to begin edit its value. To confirm the changes, press
      'Enter' or click on another cell or outside the Grid. To cancel the changes,
      press 'Escape'.
    </div>
    <smart-grid id="grid"></smart-grid>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.dateinput.js";
import "smart-webcomponents/source/modules/smart.timeinput.js";

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
                dataSource: window.generateData(100),
                dataFields: [
                  "id: number",
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "available: bool",
                  "date: date",
                  "quantity: number",
                  "price: number",
                  "total: number"
                ]
              }),
              selection: {
                enabled: true,
                allowCellSelection: true,
                allowRowHeaderSelection: true,
                allowColumnHeaderSelection: true,
                mode: "extended"
              },
              editing: {
                enabled: true,
                mode: "cell"
              },
              columns: [
                {
                  label: "First Name",
                  dataField: "firstName"
                },
                {
                  label: "Last Name",
                  dataField: "lastName"
                },
                {
                  label: "Product",
                  dataField: "productName"
                },
                {
                  label: "Time",
                  dataType: "date",
                  dataField: "time",
                  cellsFormat: "hh:mm tt",
                  editor: "timeInput",
                  formatFunction(settings) {
                    if (!settings.value) {
                      settings.value = "12:00 AM";
                    }
                  }
                },
                {
                  label: "Date",
                  dataField: "date",
                  cellsFormat: "d",
                  editor: "dateInput"
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  editor: "numberInput"
                },
                {
                  label: "Unit Price",
                  dataField: "price",
                  editor: "numberInput",
                  cellsFormat: "c2"
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
@media only screen and (max-width: 700px) {
  smart-grid {
    width: 100%;
  }
}
</style>
