<template>
  <div class="vue-root">
    <div class="demo-description">
      This Data Grid demo illustrates difference settings of the Checkbox selection
      column.
    </div>
    <smart-grid style="width:60%;" id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-check-box id="enableCheckBox" checked>Enabled</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="selectAllModeCheckBox" checked>Select All CheckBox</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="positionCheckBox" checked>Position: Right</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="clickCheckBox" checked>Select on Cell Click</smart-check-box>
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
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              selection: {
                enabled: true,
                mode: "many",
                checkBoxes: {
                  selectAllMode: "page",
                  enabled: true,
                  position: "far"
                }
              },
              paging: {
                enabled: true
              },
              pager: {
                visible: true
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

      const enableCheckBox = document.getElementById("enableCheckBox");
      const positionCheckBox = document.getElementById("positionCheckBox");
      const clickCheckBox = document.getElementById("clickCheckBox");
      const selectAllCheckBox = document.getElementById(
        "selectAllModeCheckBox"
      );
      const grid = document.getElementById("grid");
      selectAllCheckBox.addEventListener("change", function() {
        grid.selection.checkBoxes.selectAllMode = selectAllCheckBox.checked
          ? "page"
          : "none";
      });
      enableCheckBox.addEventListener("change", function() {
        grid.selection.checkBoxes.enabled = enableCheckBox.checked;
      });
      positionCheckBox.addEventListener("change", function() {
        positionCheckBox.checked
          ? (grid.selection.checkBoxes.position = "far")
          : (grid.selection.checkBoxes.position = "near");
      });
      clickCheckBox.addEventListener("change", function() {
        clickCheckBox.checked
          ? (grid.selection.action = "click")
          : (grid.selection.action = "none");
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
