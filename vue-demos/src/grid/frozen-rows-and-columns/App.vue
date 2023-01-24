<template>
  <div class="vue-root">
    <div class="demo-description">This demo page shows how to freeze Grid Rows and Columns.</div>
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
                dataSource: window.generateData(3000),
                dataFields: [
                  "id: number",
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "quantity: number",
                  "price: number",
                  "total: number"
                ]
              }),
              columns: [
                {
                  label: "id",
                  freeze: "near",
                  dataField: "id",
                  width: 100
                },
                {
                  label: "First Name",
                  dataField: "firstName"
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  width: 250
                },
                {
                  label: "Product",
                  dataField: "productName",
                  width: 250
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  align: "right",
                  width: 250,
                  cellsAlign: "right"
                },
                {
                  label: "Unit Price",
                  dataField: "price",
                  align: "right",
                  width: 250,
                  cellsAlign: "right",
                  cellsFormat: "c2"
                },
                {
                  label: "Total",
                  freeze: "far",
                  dataField: "total",
                  width: 100,
                  align: "right",
                  cellsAlign: "right",
                  cellsFormat: "c2"
                }
              ],
              onRowInit(index, row) {
                if (index === 2999) {
                  row.freeze = "far";
                } else if (index === 0) {
                  row.freeze = "near";
                }
              }
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
}
@media only screen and (max-width: 700px) {
  smart-grid {
    width: 100%;
  }
}
</style>
