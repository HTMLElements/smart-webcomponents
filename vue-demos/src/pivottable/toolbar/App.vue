<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo shows a smart-pivot-table with toolbar. The toolbar features
      drag-drop areas for manipulating the row group and pivot columns as well
      as the "Conditional formatting" and "Fields" buttons which open a dialog
      with further customization options.
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
              conditionalFormatting: [
                {
                  column: "quantity",
                  condition: "greaterThan",
                  firstValue: 7,
                  text: "#FFFFFF",
                  highlight: "#6AA84F"
                },
                {
                  column: "quantity",
                  condition: "between",
                  firstValue: 1,
                  secondValue: 3,
                  fontSize: "10px",
                  text: "#FFFFFF",
                  highlight: "#CC0000"
                }
              ],
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(25),
                dataFields: [
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "quantity: number",
                  "price: number",
                  "date: date"
                ]
              }),
              freezeHeader: true,
              keyboardNavigation: true,
              toolbar: true,
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
                  dataType: "number",
                  summary: "sum"
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
                },
                {
                  label: "Date Purchased",
                  dataField: "date",
                  dataType: "date"
                } // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
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
  max-height: 800px;
}
</style>
