<template>
  <div class="vue-root">
    <div class="demo-description">This demo showcases how to export the data of smart-table.</div>
    <smart-table id="table"></smart-table>
    <div class="options">
      <smart-button id="csv">Export to CSV</smart-button>
      <smart-button id="html">Export to HTML</smart-button>
      <smart-button id="json">Export to JSON</smart-button>
      <smart-button id="pdf">Export to PDF</smart-button>
      <smart-button id="tsv">Export to TSV</smart-button>
      <smart-button id="xlsx">Export to XLSX</smart-button>
      <smart-button id="xml">Export to XML</smart-button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
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
                dataSource: window.generateData(50),
                dataFields: [
                  "id: number",
                  "productName: string",
                  "quantity: number",
                  "price: number",
                  "date: date"
                ]
              }),
              columns: [
                {
                  label: "id",
                  dataField: "id",
                  dataType: "number"
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
                  label: "Date Purchased",
                  dataField: "date",
                  dataType: "date"
                }
              ]
            };
          }
        }
      );

      const table = document.getElementById("table");
      document.getElementById("csv").addEventListener("click", function() {
        table.exportData("csv", "table");
      });
      document.getElementById("html").addEventListener("click", function() {
        table.exportData("html", "table");
      });
      document.getElementById("json").addEventListener("click", function() {
        table.exportData("json", "table");
      });
      document.getElementById("pdf").addEventListener("click", function() {
        table.exportData("pdf", "table");
      });
      document.getElementById("tsv").addEventListener("click", function() {
        table.exportData("tsv", "table");
      });
      document.getElementById("xlsx").addEventListener("click", function() {
        table.exportData("xlsx", "table");
      });
      document.getElementById("xml").addEventListener("click", function() {
        table.exportData("xml", "table");
      });
    });
  }
};
</script>

<style>
.smart-table {
  width: 800px;
  height: 600px;
}
</style>
