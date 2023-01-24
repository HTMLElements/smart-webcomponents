<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >This demo demonstrates how to use FontAwesome filtering icons in the DataGrid.</div>
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
                sortMode: "one"
              },
              filtering: {
                enabled: true,
                filter: [
                  ["firstName", "contains Andrew or contains Nancy"],
                  ["quantity", ">= 3 and <= 8"]
                ]
              },
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
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");

smart-grid-column .smart-filter-button.smart-grid-icon {
  font-family: "FontAwesome";
  color: var(--smart-primary);
  font-size: 16px;
}

smart-grid-column .smart-filter-button.smart-icon-filter:before {
  content: "\f0b0";
}

@media only screen and (max-width: 700px) {
  smart-grid {
    width: 100%;
  }
}
</style>
