<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Excel-like filtering UI</h1>
      <p>
        DataGrid excel-like filtering is enabled for all columns. The feature
        can be turned on/off by using the "filtering.filterMenu.mode = 'excel'"
        property. You can also enable it per column by using the column's "filterMenuMode"
        property and set it to 'excel'. Users may click the filter icons to see
        a drop-down where they can apply filters.
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
              appearance: {
                autoShowColumnFilterButton: false
              },
              sorting: {
                enabled: true,
                mode: "one"
              },
              filtering: {
                enabled: true,
                filterMenu: {
                  mode: "excel"
                }
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
