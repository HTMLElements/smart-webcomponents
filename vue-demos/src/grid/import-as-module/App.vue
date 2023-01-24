<template>
  <div class="vue-root">
    <div class="demo-description">
      The Grid Component in this example is imported from Javascript ES6 module.
      All script dependencies are handled automatically by the Module.
    </div>
    <div id="grid"></div>
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
      document.readyState === "complete" ? init() : (window.onload = init);

      function init() {
        new window.smartGrid("#grid", {
          dataSource: new window.Smart.DataAdapter({
            dataSource: window.generateData(1000),
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
        });
      }
    });
  }
};
</script>

<style>
smart-grid {
}
</style>
