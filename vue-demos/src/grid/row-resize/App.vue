<template>
  <div class="vue-root">
    <div class="demo-description">
      The Data grid component supports row resizing in two levels - Grid's 'rowResizeMode'
      property and optionally 'allowResize' smartGrid.Row property. To enable
      row resizing, you need to set the 'rowResizeMode' property to 'split' or
      'growAndShrink'.
      <br />
      <br />In the 'split' mode, when you resize a row, the next row's height is also
      affected and the total height of both rows remains constant.
      <br />In the 'growAndShrink' mode, the resized row grows or shrinks.
      <br />Each row has 'minHeight' and 'maxHeight' properties which allow you to
      restrict the resizing of specific rows. You can disable the resize of specific
      row by setting its 'allowResize' property to false. Resizing requiest a
      visible Row header which is enabled by setting the 'appearance.showRowHeaderNumber'
      or 'appearance.showRowHeader' properties to 'true'.
      <br />To start row's resize, move the mouse cursor over the rows header and
      at the bottom of a header cell, the cursor is changed to a row resize cursor.
      Press the mouse button and Drag to resize. When you release the mouse button,
      the row is resized.
    </div>
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Row Resize Mode</div>
      <div class="option">
        <smart-radio-button id="none">None</smart-radio-button>
        <br />
        <br />
        <smart-radio-button id="split">Split</smart-radio-button>
        <br />
        <br />
        <smart-radio-button checked id="currentColumn">Grow and Shrink</smart-radio-button>
        <br />
        <br />
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
              behavior: {
                rowResizeMode: "growAndShrink"
              },
              layout: {
                rowHeight: 40
              },
              selection: {
                enabled: true,
                mode: "extended"
              },
              appearance: {
                showRowHeader: true
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

      const radioButtons = document.querySelectorAll("smart-radio-button");
      const grid = document.getElementById("grid");
      for (let i = 0; i < radioButtons.length; i++) {
        const radioButton = radioButtons[i];
        radioButton.addEventListener("change", function(event) {
          if (event.detail.value) {
            if (this.id === "none") {
              grid.behavior.rowResizeMode = "none";
            } else if (this.id === "split") {
              grid.behavior.rowResizeMode = "split";
            } else {
              grid.behavior.rowResizeMode = "growAndShrink";
            }
          }
        });
      }
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
