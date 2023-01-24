<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Filter Panel - DataGrid filtering UI</h1>
      <p>
        This example shows how to use the DataGrid filtering panel. Click on the
        Filter button in the Grid header to open the filtering panel.
      </p>
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
              sorting: {
                enabled: true,
                mode: "many"
              },
              filtering: {
                enabled: true
              },
              header: {
                visible: true
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(1000),
                dataFields: [
                  "id: number",
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "quantity: number",
                  "price: number",
                  "date: date",
                  "total: number"
                ]
              }),
              columns: [
                {
                  label: "Id",
                  dataField: "id",
                  allowSort: false,
                  allowHide: false
                },
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
                  label: "Quantity",
                  dataField: "quantity",
                  align: "right",
                  cellsAlign: "right"
                },
                {
                  label: "Delivery Date",
                  dataField: "date",
                  align: "right",
                  cellsAlign: "right",
                  cellsFormat: "d"
                },
                {
                  label: "Unit Price",
                  dataField: "price",
                  align: "right",
                  cellsAlign: "right",
                  cellsFormat: "c2"
                },
                {
                  label: "Total",
                  dataField: "total",
                  align: "right",
                  cellsAlign: "right",
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
smart-grid {
  width: 100%;
}
body {
  height: 1000px;
}
</style>
