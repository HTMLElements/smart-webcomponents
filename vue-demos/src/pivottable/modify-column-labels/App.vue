<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo shows how modify labels displayed in the smart-pivot-table by
      implementing the
      <strong>onColumnRender</strong> and
      <strong>formatFunction</strong> callback
      functions.
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
              onColumnRender(settings) {
                if (settings.text === "Group") {
                  settings.text = settings.column.originalColumn.label.toUpperCase();
                  return;
                }
                if (settings.column.summary) {
                  settings.text =
                    "Σ(" + settings.column.originalColumn.label + ")";
                }
                if (
                  settings.fullDefinition.dataFields[0].label
                    .toLowerCase()
                    .indexOf("espresso") !== -1
                ) {
                  settings.cell.classList.add("highlight");
                }
              },
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
                  formatFunction(settings) {
                    let value = settings.value.split(" ");
                    settings.template = `<strong>${
                      value[0]
                    }</strong> - ${value[1].replace(/[()]/g, "")}`;
                  }
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
  height: 800px;
}

.smart-pivot-table th.highlight {
  --smart-background: #e6f4fd;
}
</style>
