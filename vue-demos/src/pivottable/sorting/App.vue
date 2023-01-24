<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo showcases the sorting capabilities of smart-pivot-table which
      are enabled via the property
      <strong>sortMode</strong> which can be set to
      'none', 'one', or 'many'.
    </div>
    <smart-pivot-table id="pivotTable"></smart-pivot-table>
    <div class="options">
      <div class="option">
        <smart-check-box id="sortMode">sortMode: 'many'</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
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
              sortMode: "one",
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

      const pivotTable = document.getElementById("pivotTable");
      pivotTable.whenRendered(() => {
        pivotTable.sortBy(pivotTable.getDynamicColumns()[2], "desc");
      });

      document
        .getElementById("sortMode")
        .addEventListener("change", function(event) {
          pivotTable.sortMode = event.detail.value ? "many" : "one";
        });
    });
  }
};
</script>

<style>
.smart-pivot-table {
  height: 800px;
}
</style>
