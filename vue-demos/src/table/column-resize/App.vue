<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo showcases column resizing in smart-table. Please note that
      column sizes continue to adhere to the behavior of the standard HTML table
      element's table-layout: fixed, upon which smart-table is based.
    </div>
    <smart-table id="table"></smart-table>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.table.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#table",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(15),
                dataFields: [
                  "id: number",
                  "productName: string",
                  "quantity: number",
                  "price: number",
                  "date: date",
                ],
              }),
              columnResize: true,
              columnResizeFeedback: true,
              tooltip: true,
              columns: [
                { label: "id", dataField: "id", dataType: "number", width: 50 },
                {
                  label: "Product Name",
                  dataField: "productName",
                  dataType: "string",
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  dataType: "number",
                },
                { label: "Price", dataField: "price", dataType: "number" },
                {
                  label: "Date Purchased",
                  dataField: "date",
                  dataType: "date",
                },
              ],
            };
          }
        }
      );
    });
  },
};
</script>

<style>
#table {
  width: 800px;
}
</style>
