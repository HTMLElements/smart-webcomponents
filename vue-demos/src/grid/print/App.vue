<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Printing Grid Data</h1>This page demonstrates how to Print the Grid data. The "dataExport" property
      allows you to specify the printing options. "dataExport.view" determines
      whether only the visible rows will be printed. "dataExport.viewStart" and
      "dataExport.viewEnd" specify the start and end row that will be printed.
      The "dataExport.header" property determines whether the Grid columns will
      be printed.
      <br />
      <h2>Page Break</h2>When Printing the Grid, all rows will have the CSS property "page-break-inside:
      avoid". We do that to ensure that a row is fully visible on one page and
      parts of it are not displayed on another page. For example: Part of the
      row on one printed page with the other part on the next printed page.
    </div>
    <br />
    <br />
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption"></div>
      <div class="option">
        <smart-button id="printBtn">Print</smart-button>
      </div>
      <div class="option">
        <smart-button id="printRestrictBtn">Print 25-50</smart-button>
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
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              appearance: {
                alternationStart: 0,
                alternationCount: 2
              },
              dataExport: {
                view: true,
                viewStart: 0,
                viewEnd: 50
              },
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
                  formatFunction(settings) {
                    settings.value =
                      "$" + new Number(settings.cell.value).toFixed(2);
                    settings.cell.background = "#007ACC";
                    settings.cell.color = "#fff";
                  }
                }
              ]
            };
          }
        }
      );

      function init() {
        const grid = document.querySelector("smart-grid");
        const printBtn = document.querySelector("#printBtn");
        const printRestrictBtn = document.querySelector("#printRestrictBtn");
        printBtn.addEventListener("click", () => {
          grid.print();
        });
        printRestrictBtn.addEventListener("click", () => {
          grid.dataExport.viewStart = 25;
          grid.dataExport.viewEnd = 50;
          grid.dataExport.view = true;
          grid.print();
          grid.dataExport.viewStart = 0;
          grid.dataExport.viewEnd = 50;
        });
      }
    });
  }
};
</script>

<style>
smart-grid,
.demo-description {
  width: 60%;
}
@media only screen and (max-width: 400px) {
  smart-grid,
  .demo-description {
    width: 100%;
  }
}
</style>
