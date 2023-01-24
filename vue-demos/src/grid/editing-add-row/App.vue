<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Add Row in Data Grid</h1>
      <p>
        The 'Add New Row' UI element enables users to quickly add rows to the
        Grid with a single click. This example shows how to display and customize
        the positioning of the 'Add New Row' element.
      </p>
    </div>
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Position</div>
      <div class="option">
        <smart-radio-button id="top">Top</smart-radio-button>
        <smart-radio-button checked id="both">Both</smart-radio-button>
        <smart-radio-button id="bottom">Bottom</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
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
                showRowHeaderNumber: true
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(15),
                dataFields: [
                  "id: number",
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "available: bool",
                  "quantity: number",
                  "price: number",
                  "total: number"
                ]
              }),
              editing: {
                enabled: true,
                action: "click",
                addDialog: {
                  enabled: true
                },
                addNewRow: {
                  visible: true,
                  position: "both"
                }
              },
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
                  dataField: "productName",
                  editor: "autoComplete"
                },
                {
                  label: "Available",
                  dataField: "available",
                  template: "checkBox",
                  editor: "checkBox"
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  editor: "numberInput"
                },
                {
                  label: "Unit Price",
                  dataField: "price",
                  editor: "numberInput",
                  cellsFormat: "c2"
                }
              ]
            };
          }
        }
      );

      const grid = document.getElementById("grid");
      const topButton = document.getElementById("top");
      const bothButton = document.getElementById("both");
      const bottomButton = document.getElementById("bottom");
      topButton.addEventListener("change", function() {
        if (topButton.checked) {
          grid.editing.addNewRow.position = "near";
        }
      });
      bothButton.addEventListener("change", function() {
        if (bothButton.checked) {
          grid.editing.addNewRow.position = "both";
        }
      });
      bottomButton.addEventListener("change", function() {
        if (bottomButton.checked) {
          grid.editing.addNewRow.position = "far";
        }
      });
    });
  }
};
</script>

<style>
smart-grid {
  width: 60%;
}
@media only screen and (max-width: 700px) {
  smart-grid {
    width: 100%;
  }
}
</style>
