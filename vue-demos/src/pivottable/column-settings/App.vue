<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo shows how to apply styling and formatting settings to smart-pivot-table
      header and cells using the
      <strong>align</strong> and
      <strong>summarySettings</strong> column
      properties.
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
              freezeHeader: true,
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
                  rowGroup: true,
                  align: "right"
                },
                {
                  label: "Product Name",
                  dataField: "productName",
                  dataType: "string",
                  allowPivot: true,
                  pivot: true,
                  align: "center"
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  dataType: "number",
                  summary: "sum",
                  align: "right",
                  summarySettings: {
                    align: "right"
                  }
                },
                {
                  label: "Price",
                  dataField: "price",
                  dataType: "number",
                  summary: "sum",
                  summarySettings: {
                    align: "left",
                    prefix: "€",
                    decimalPlaces: 2,
                    thousandsSeparator: "",
                    decimalSeparator: ",",
                    negativesInBrackets: false
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
