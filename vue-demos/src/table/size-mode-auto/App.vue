<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo showcases the "auto" column size mode of smart-table. In this
      mode, columns are sized based on their content and the value of the
      <strong>columnMinWidth</strong> property,
      unless there is not enough space in the Table, in which case ellipses are
      shown. User-set static column width is still respected.
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
              columnMinWidth: "50px",
              columnSizeMode: "auto",
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(50),
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
              selection: true,
              tooltip: true,
              columns: [
                {
                  label: "id",
                  dataField: "id",
                  dataType: "number",
                  width: 50
                },
                {
                  label: "First Name",
                  dataField: "firstName",
                  dataType: "string"
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  dataType: "string"
                },
                {
                  label: "Product Name",
                  dataField: "productName",
                  dataType: "string"
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  dataType: "number"
                },
                {
                  label: "Price",
                  dataField: "price",
                  dataType: "number"
                },
                {
                  label: "Total",
                  dataField: "total",
                  dataType: "number"
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
.smart-table {
  width: 100%;
  height: 600px;
}
</style>
