<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Grid Cells Editing Confirm</h1>We implement the 'onCellUpdate' Grid function. When a cell value is edited,
      'onCellUpdate' is called. That callback can be used for Client-Server validation
      of the Cell Editing. The function is implemented for the 'Quantity' column
      and we simulate Ajax call to a Web Server by using setTimeout and confirm
      the changes by calling the 4th argument of 'onCellUpdate', which is a function.
      When we call it with 'true', changes are confirmed. Otherwise, they are
      canceled. In this example, when the 'Quantity' is > 10, changes are confirmed.
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
                dataSource: window.generateData(100),
                dataFields: [
                  "id: number",
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "available: bool",
                  "quantity: number",
                  "price: number",
                  "total: number"
                ]
              }),
              editing: {
                enabled: true,
                mode: "cell"
              },
              onCellUpdate(cell, oldValue, value, confirm) {
                if (value) {
                  if (value > 10) {
                    setTimeout(() => {
                      confirm(true);
                    }, 500);
                  } else {
                    setTimeout(() => {
                      confirm(false);
                    }, 500);
                  }
                } else {
                  confirm(true);
                }
              },
              selection: {
                enabled: true,
                allowCellSelection: true,
                allowRowHeaderSelection: true,
                allowColumnHeaderSelection: true,
                mode: "extended"
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
                  label: "Available",
                  dataField: "available",
                  template: "checkBox",
                  editor: "checkBox"
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
</style>
