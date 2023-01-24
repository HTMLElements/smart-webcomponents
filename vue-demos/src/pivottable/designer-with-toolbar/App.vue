<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo showcases a smart-pivot-table with both designer and toolbar
      enabled. Columns can be dragged between the toolbar and the designer to
      change their roles in the Pivot Table.
    </div>
    <smart-pivot-table id="pivotTable"></smart-pivot-table>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.pivottable.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#pivotTable",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(25),
                dataFields: [
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "quantity: number",
                  "price: number"
                ]
              }),
              designer: true,
              toolbar: true,
              freezeHeader: true,
              keyboardNavigation: true,
              columns: [
                {
                  label: "First Name",
                  dataField: "firstName",
                  dataType: "string",
                  allowRowGroup: true,
                  rowGroup: true
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  dataType: "string",
                  allowPivot: true,
                  allowRowGroup: true,
                  rowGroup: true
                },
                {
                  label: "Product Name",
                  dataField: "productName",
                  dataType: "string",
                  allowPivot: true,
                  pivot: true
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  dataType: "number"
                },
                {
                  label: "Price",
                  dataField: "price",
                  dataType: "number",
                  summary: "sum",
                  summarySettings: {
                    prefix: "$",
                    decimalPlaces: 2
                  }
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
.smart-pivot-table {
  height: 800px;
}
</style>
