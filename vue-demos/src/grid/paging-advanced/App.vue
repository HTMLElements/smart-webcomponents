<template>
  <div class="vue-root">
    <div class="demo-description">
      Paging in Smart Grid is highly customizable. Use the options on the right
      to dynamically customize the Grid pager.
    </div>
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-check-box checked id="showBottomPager">Show Bottom Pager</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="changePageSizeSelectorPosition">Page Size Near Position</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box checked id="changePageIndexSelectorsCount">Page Index Count to 3</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="changeNavigationButtonsPosition">Nav Buttons Near Position</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box disabled id="changeNavigationInputPosition">Nav Input Near Position</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box disabled id="changeSummaryPosition">Summary Near Position</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="showPagerSummary">Show Pager Summary</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="showTopPager">Show Top Pager</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="showPageSizeSelector" checked>Show Page Size Selector</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="showPrevNextNavigationButtons" checked>Show Prev/Next Nav Buttons</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="showFirstLastNavigationButtons" checked>Show First/Last Nav Buttons</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="showNavigationButtonsAsLabels">Show Nav Buttons as Labels</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="showNavigationInput">Show Nav Input</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="showPagerIndexSelectors" checked>Show Pager Index Selectors</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="showPagerEllipsis" checked>Show Pager Ellipsis</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.grid.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      (function generateData() {
        let data = new Array();
        let firstNames = [
          "Andrew",
          "Nancy",
          "Shelley",
          "Regina",
          "Yoshi",
          "Antoni",
          "Mayumi",
          "Ian",
          "Peter",
          "Lars",
          "Petra",
          "Martin",
          "Sven",
          "Elio",
          "Beate",
          "Cheryl",
          "Michael",
          "Guylene"
        ];
        let lastNames = [
          "Fuller",
          "Davolio",
          "Burke",
          "Murphy",
          "Nagase",
          "Saavedra",
          "Ohno",
          "Devling",
          "Wilson",
          "Peterson",
          "Winkler",
          "Bein",
          "Petersen",
          "Rossi",
          "Vileid",
          "Saylor",
          "Bjorn",
          "Nodier"
        ];
        let productNames = [
          "Black Tea",
          "Green Tea",
          "Caffe Espresso",
          "Doubleshot Espresso",
          "Caffe Latte",
          "White Chocolate Mocha",
          "Cramel Latte",
          "Caffe Americano",
          "Cappuccino",
          "Espresso Truffle",
          "Espresso con Panna",
          "Peppermint Mocha Twist"
        ];
        let priceValues = [
          "2.25",
          "1.5",
          "3.0",
          "3.3",
          "4.5",
          "3.6",
          "3.8",
          "2.5",
          "5.0",
          "1.75",
          "3.25",
          "4.0"
        ];
        for (let i = 0; i < 5000; i++) {
          let row = {};
          let productindex = Math.floor(Math.random() * productNames.length);
          let price = parseFloat(priceValues[productindex]);
          let quantity = 1 + Math.round(Math.random() * 10);
          row["id"] = i;
          row["firstName"] =
            firstNames[Math.floor(Math.random() * firstNames.length)];
          row["lastName"] =
            lastNames[Math.floor(Math.random() * lastNames.length)];
          row["productName"] = productNames[productindex];
          row["price"] = price;
          row["quantity"] = quantity;
          row["total"] = price * quantity;
          data[i] = row;
        }
        window.Data = data;
      })();

      function GetData(first, last) {
        return window.Data.slice(first, last);
      }
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              paging: {
                enabled: true,
                pageSize: 10,
                pageIndex: 1
              },
              pager: {
                visible: true,
                pageSizeSelector: {
                  visible: true
                },
                pageIndexSelectors: {
                  dataSource: 3
                }
              },
              dataSource: new window.Smart.DataAdapter({
                virtualDataSourceLength: 5000,
                virtualDataSourceCache: true,
                virtualDataSource: function(resultCallbackFunction, details) {
                  setTimeout(function() {
                    resultCallbackFunction({
                      dataSource: GetData(details.first, details.last)
                    });
                  }, 100);
                },
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
                  dataField: "quantity"
                },
                {
                  label: "Unit Price",
                  dataField: "price",
                  cellsFormat: "c2"
                },
                {
                  label: "Total",
                  dataField: "total",
                  cellsFormat: "c2"
                }
              ]
            };
          }
        }
      );

      const checkBoxes = document.querySelectorAll("smart-check-box");
      const grid = document.querySelector("smart-grid");
      for (let i = 0; i < checkBoxes.length; i++) {
        const checkBox = checkBoxes[i];
        checkBox.addEventListener("change", function() {
          const checkBox = this;
          switch (checkBox.id) {
            case "showPagerSummary":
              grid.pager.summary.visible = checkBox.checked;
              document.querySelector(
                "#changeSummaryPosition"
              ).disabled = !checkBox.checked;
              break;
            case "showTopPager":
            case "showBottomPager":
              {
                const isTopPagerVisible = document.querySelector(
                  "#showTopPager"
                ).checked;
                const isBottomPagerVisible = document.querySelector(
                  "#showBottomPager"
                ).checked;
                grid.pager.visible = true;
                if (isTopPagerVisible && isBottomPagerVisible) {
                  grid.pager.position = "both";
                } else if (isTopPagerVisible) {
                  grid.pager.position = "near";
                } else if (isBottomPagerVisible) {
                  grid.pager.position = "far";
                } else {
                  grid.pager.visible = false;
                }
              }
              break;
            case "changePageIndexSelectorsCount":
              grid.pager.pageIndexSelectors.dataSource = checkBox.checked
                ? 3
                : 5;
              break;
            case "showPageSizeSelector":
              grid.pager.pageSizeSelector.visible = checkBox.checked;
              document.querySelector(
                "#changePageSizeSelectorPosition"
              ).disabled = !checkBox.checked;
              break;
            case "changePageSizeSelectorPosition":
              grid.pager.pageSizeSelector.position = checkBox.checked
                ? "near"
                : "far";
              break;
            case "changeSummaryPosition":
              grid.pager.summary.position = checkBox.checked ? "near" : "far";
              break;
            case "changeNavigationInputPosition":
              grid.pager.navigationInput.position = checkBox.checked
                ? "near"
                : "far";
              break;
            case "changeNavigationButtonsPosition":
              grid.pager.navigationButtons.position = checkBox.checked
                ? "near"
                : "far";
              break;
            case "showPrevNextNavigationButtons":
              grid.pager.navigationButtons.prevNextButtons.visible =
                checkBox.checked;
              if (
                !grid.pager.navigationButtons.prevNextButtons.visible &&
                !grid.pager.navigationButtons.firstLastButtons.visible
              ) {
                document.querySelector(
                  "#changeNavigationButtonsPosition"
                ).disabled = true;
                document.querySelector(
                  "#showNavigationButtonsAsLabels"
                ).disabled = true;
              } else {
                document.querySelector(
                  "#changeNavigationButtonsPosition"
                ).disabled = false;
                document.querySelector(
                  "#showNavigationButtonsAsLabels"
                ).disabled = false;
              }
              break;
            case "showFirstLastNavigationButtons":
              grid.pager.navigationButtons.firstLastButtons.visible =
                checkBox.checked;
              if (
                !grid.pager.navigationButtons.prevNextButtons.visible &&
                !grid.pager.navigationButtons.firstLastButtons.visible
              ) {
                document.querySelector(
                  "#changeNavigationButtonsPosition"
                ).disabled = true;
                document.querySelector(
                  "#showNavigationButtonsAsLabels"
                ).disabled = true;
              } else {
                document.querySelector(
                  "#changeNavigationButtonsPosition"
                ).disabled = false;
                document.querySelector(
                  "#showNavigationButtonsAsLabels"
                ).disabled = false;
              }
              break;
            case "showNavigationButtonsAsLabels":
              grid.pager.navigationButtons.labels.visible = checkBox.checked;
              break;
            case "showNavigationInput":
              document.querySelector(
                "#changeNavigationInputPosition"
              ).disabled = !checkBox.checked;
              grid.pager.navigationInput.visible = checkBox.checked;
              break;
            case "showPagerIndexSelectors":
              grid.pager.pageIndexSelectors.visible = checkBox.checked;
              break;
            case "showPagerEllipsis":
              grid.pager.autoEllipsis = checkBox.checked ? "both" : "none";
              break;
          }
        });
      }
    });
  }
};
</script>

<style>
smart-grid {
  width: 60%;
  height: 400px;
}
body {
  height: 1000px;
}
</style>
