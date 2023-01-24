<template>
  <div class="vue-root">
    <div class="demo-description">
      The Grid component supports difference Cells selection configuration options.
      You can select one or multiple cells or have Excel-like Cells selection.
      It is also possible to select entire row or column or configure the selection
      on single or double click.
    </div>
    <smart-grid style="width:60%;" id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-check-box id="dblclickCheckBox">Select on Double Click</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="headerSelectionCheckBox">Allow Row Header Selection</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="colheaderSelectionCheckBox">Allow Column Header Selection</smart-check-box>
      </div>
      <div class="option">
        <smart-radio-button id="singleRadioButton">Single Selection</smart-radio-button>
        <br />
        <smart-radio-button id="multipleRadioButton">Multiple Selection</smart-radio-button>
        <br />
        <smart-radio-button id="extendedRadioButton" checked>Extended Selection</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              appearance: {
                showRowHeader: true
              },
              selection: {
                enabled: true,
                mode: "extended",
                allowCellSelection: true
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(3000),
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

      const grid = document.querySelector("#grid");
      const dblClickCheckBox = document.querySelector("#dblclickCheckBox");
      const headerSelectionCheckBox = document.querySelector(
        "#headerSelectionCheckBox"
      );
      const colheaderSelectionCheckBox = document.querySelector(
        "#colheaderSelectionCheckBox"
      );
      const singleRadioButton = document.querySelector("#singleRadioButton");
      const multipleRadioButton = document.querySelector(
        "#multipleRadioButton"
      );
      const extendedRadioButton = document.querySelector(
        "#extendedRadioButton"
      );
      dblClickCheckBox.addEventListener("change", function() {
        grid.selection.action = dblClickCheckBox.checked
          ? "doubleClick"
          : "click";
      });
      headerSelectionCheckBox.addEventListener("change", function() {
        grid.selection.allowRowHeaderSelection =
          headerSelectionCheckBox.checked;
      });
      colheaderSelectionCheckBox.addEventListener("change", function() {
        grid.selection.allowColumnHeaderSelection =
          colheaderSelectionCheckBox.checked;
      });
      const updateSelectionMode = function(event) {
        if (singleRadioButton === event.target && singleRadioButton.checked) {
          grid.selection.mode = "one";
        }
        if (
          multipleRadioButton === event.target &&
          multipleRadioButton.checked
        ) {
          grid.selection.mode = "many";
        }
        if (
          extendedRadioButton === event.target &&
          extendedRadioButton.checked
        ) {
          grid.selection.mode = "extended";
        }
      };
      singleRadioButton.addEventListener("change", function(event) {
        updateSelectionMode(event);
      });
      multipleRadioButton.addEventListener("change", function(event) {
        updateSelectionMode(event);
      });
      extendedRadioButton.addEventListener("change", function(event) {
        updateSelectionMode(event);
      });
    });
  }
};
</script>

<style>
@media only screen and (max-width: 400px) {
  smart-grid {
    width: 100%;
  }
}

smart-grid {
  max-width: 600px;
}
</style>
