<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Grid Row Selection</h1>
      <p>
        The data grid component supports different configurations for selection.
        You can choose to select/unselect rows with API only or on single or double
        click by setting the 'selection.action' property to 'none', 'click' or
        'dblclick'. Clicking on a Grid Row or Column header can also be used for
        selection just like in Microsoft Excel. The 'selection.mode' property determines
        whether we will have Single or Multi-Row selection. The allowed values
        for that property are 'one', 'many' and 'extended'. 'one' allows only single
        row selection, while 'many' and 'extended' allow multi-row selection. The
        difference between 'many' and 'extended' Grid selection modes is that in
        'extended', users will have to click 'Ctrl' or 'Shift' keyboard keys to
        perform multiple selection.
      </p>
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
        <smart-radio-button id="multipleRadioButton" checked>Multiple Selection</smart-radio-button>
        <br />
        <smart-radio-button id="extendedRadioButton">Extended Selection</smart-radio-button>
      </div>
    </div>
    <br />
    <br />
    <div id="smartgrid"></div>
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
                action: "click"
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(1000),
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
              onBeforeInit() {},
              onRender() {},
              columns: [
                {
                  label: "First Name",
                  dataField: "firstName",
                  width: 300
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  width: 300
                },
                {
                  label: "Product",
                  dataField: "productName",
                  width: 300
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  align: "right",
                  width: 300,
                  cellsAlign: "right"
                },
                {
                  label: "Unit Price",
                  dataField: "price",
                  align: "right",
                  width: 300,
                  cellsAlign: "right",
                  cellsFormat: "c2"
                },
                {
                  label: "Total",
                  dataField: "total",
                  align: "right",
                  width: 300,
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
      grid.select(3);
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

      grid.whenRendered(() => {
        const gridRows = grid.rows,
          gridColumns = grid.columns;
        gridRows[0].allowSelect = null;
        gridColumns[0].allowSelect = null;
        gridRows[0].selected = true;
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
