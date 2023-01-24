<template>
  <div class="vue-root">
    <div class="demo-description">Freeze First and Last Columns Grid web component.</div>
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
                dataSource: window.generateData(30),
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
                  dataField: "id",
                  freeze: "near",
                  width: 30
                },
                {
                  label: "First Name",
                  width: 200,
                  dataField: "firstName"
                },
                {
                  label: "Last Name",
                  width: "25%",
                  dataField: "lastName"
                },
                {
                  label: "Product",
                  width: "25%",
                  dataField: "productName"
                },
                {
                  label: "Quantity",
                  width: "25%",
                  dataField: "quantity",
                  align: "right",
                  cellsAlign: "right"
                },
                {
                  label: "Unit Price",
                  width: "25%",
                  dataField: "price",
                  align: "right",
                  cellsAlign: "right",
                  cellsFormat: "c2"
                },
                {
                  freeze: "far",
                  label: "Total",
                  width: "25%",
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
@media only screen and (max-width: 700px) {
  smart-grid {
    width: 100%;
  }
}
</style>
