<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>DataGrid Image Export</h1>This page demonstrates the Export to Image feature of the smartGrid web
      component. The Grid can be exported to .png or .jpeg image. You can specify
      whether to export all records or only part of the visible data by using
      the 'dataExport' property's 'view' boolean option.
    </div>
    <br />
    <br />
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption"></div>
      <div class="option">
        <smart-button id="pngBtn">Export to PNG</smart-button>
      </div>
      <div class="option">
        <smart-button id="jpegBtn">Export to JPEG</smart-button>
      </div>
      <div class="option">
        <smart-button id="exportAllBtn">Export All</smart-button>
      </div>
      <div class="option">
        <smart-button id="exportRestrictBtn">Export 25-50</smart-button>
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
                  formatFunction(formatObject) {
                    formatObject.value =
                      "$" + new Number(formatObject.cell.value).toFixed(2);
                    formatObject.cell.background = "#007ACC";
                    formatObject.cell.color = "#fff";
                  }
                }
              ]
            };
          }
        }
      );

      function init() {
        const grid = document.querySelector("smart-grid");
        const pngBtn = document.querySelector("#pngBtn");
        const jpegBtn = document.querySelector("#jpegBtn");
        const exportAllBtn = document.querySelector("#exportAllBtn");
        const exportRestrictBtn = document.querySelector("#exportRestrictBtn");
        pngBtn.addEventListener("click", () => {
          grid.exportData("png");
        });
        jpegBtn.addEventListener("click", () => {
          grid.exportData("jpeg");
        });
        exportAllBtn.addEventListener("click", () => {
          grid.dataExport.viewStart = null;
          grid.dataExport.viewEnd = null;
          grid.dataExport.view = false;
          grid.exportData("png");
          grid.dataExport.viewStart = 0;
          grid.dataExport.viewEnd = 50;
        });
        exportRestrictBtn.addEventListener("click", () => {
          grid.dataExport.viewStart = 25;
          grid.dataExport.viewEnd = 50;
          grid.dataExport.view = true;
          grid.exportData("png");
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
