<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo shows how to drill down into the summaries presented by smart-pivot-table.
      Double-click a cell to show a table with all rows whose data is summarized
      in that cell.
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
                dataSource: window.generateData(50),
                dataFields: [
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "quantity: number",
                  "price: number",
                  "date: date"
                ]
              }),
              drillDown: true,
              freezeHeader: true,
              grandTotal: true,
              keyboardNavigation: true,
              columns: [
                {
                  label: "First Name",
                  dataField: "firstName",
                  dataType: "string"
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  dataType: "string",
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
                  summary: "avg"
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
  height: 800px;
}
</style>
