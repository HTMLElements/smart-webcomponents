<template>
  <div class="vue-root">
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption"></div>
      <div class="option">
        <smart-button id="xlsxBtn">Export to Excel</smart-button>
      </div>
      <div class="option">
        <smart-button id="pdfBtn">Export to PDF</smart-button>
      </div>
      <div class="option">
        <smart-button id="htmlBtn">Export to HTML</smart-button>
      </div>
      <div class="option">
        <smart-button id="csvBtn">Export to CSV</smart-button>
      </div>
      <div class="option">
        <smart-button id="tsvBtn">Export to TSV</smart-button>
      </div>
      <div class="option">
        <smart-button id="xmlBtn">Export to XML</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.grid.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.readyState === "complete" ? init() : (window.onload = init);

      function init() {
        const grid = document.querySelector("smart-grid");
        const xlsxBtn = document.querySelector("#xlsxBtn");
        const pdfBtn = document.querySelector("#pdfBtn");
        const csvBtn = document.querySelector("#csvBtn");
        const tsvBtn = document.querySelector("#tsvBtn");
        const xmlBtn = document.querySelector("#xmlBtn");
        const htmlBtn = document.querySelector("#htmlBtn");
        xlsxBtn.addEventListener("click", () => {
          grid.exportData("xlsx");
        });
        pdfBtn.addEventListener("click", () => {
          grid.exportData("pdf");
        });
        csvBtn.addEventListener("click", () => {
          grid.exportData("csv");
        });
        tsvBtn.addEventListener("click", () => {
          grid.exportData("tsv");
        });
        xmlBtn.addEventListener("click", () => {
          grid.exportData("xml");
        });
        htmlBtn.addEventListener("click", () => {
          grid.exportData("html");
        });
      }

      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(100),
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
              columns: [
                "id",
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
  width: 60%;
}
</style>
