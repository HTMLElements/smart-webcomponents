<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo shows how to export smart-pivot-table to a variety of popular
      file formats - CSV, HTML, JSON, PDF, TSV, XLSX, and XML.
    </div>
    <smart-pivot-table id="pivotTable"></smart-pivot-table>
    <div class="options">
      <div class="option">
        <smart-button id="csv">Export to CSV</smart-button>
      </div>
      <div class="option">
        <smart-button id="html">Export to HTML</smart-button>
      </div>
      <div class="option">
        <smart-button id="json">Export to JSON</smart-button>
      </div>
      <div class="option">
        <smart-button id="pdf">Export to PDF</smart-button>
      </div>
      <div class="option">
        <smart-button id="tsv">Export to TSV</smart-button>
      </div>
      <div class="option">
        <smart-button id="xlsx">Export to XLSX</smart-button>
      </div>
      <div class="option">
        <smart-button id="xml">Export to XML</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
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
              rowTotals: true,
              columns: [
                {
                  label: "Last Name",
                  dataField: "lastName",
                  dataType: "string",
                  allowRowGroup: true,
                  rowGroup: true
                },
                {
                  label: "First Name",
                  dataField: "firstName",
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
                  summary: "sum",
                  summarySettings: {
                    align: "center"
                  }
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
      document.getElementById("csv").addEventListener("click", function() {
        pivotTable.exportData("csv", "pivotTable");
      });
      document.getElementById("html").addEventListener("click", function() {
        pivotTable.exportData("html", "pivotTable");
      });
      document.getElementById("json").addEventListener("click", function() {
        pivotTable.exportData("json", "pivotTable");
      });
      document.getElementById("pdf").addEventListener("click", function() {
        pivotTable.exportData("pdf", "pivotTable");
      });
      document.getElementById("tsv").addEventListener("click", function() {
        pivotTable.exportData("tsv", "pivotTable");
      });
      document.getElementById("xlsx").addEventListener("click", function() {
        pivotTable.exportData("xlsx", "pivotTable");
      });
      document.getElementById("xml").addEventListener("click", function() {
        pivotTable.exportData("xml", "pivotTable");
      });
    });
  }
};
</script>

<style>
.smart-pivot-table {
  height: 750px;
}
</style>
