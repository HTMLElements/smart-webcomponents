<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Dialog Row Editing in the Grid Web Component</h1>
      <p>
        Cell and Row editing in the Data grid component is optionally displayed
        in a dialog. This is achieved by setting the 'editing.dialog.enabled' property
        to 'true'. In this mode, when a user clicks on a cell or row, cell or row
        data is shown in a dialog window. The 'dialog' properties are 'header',
        'top', 'left', 'width', 'height' and 'header'.
      </p>
    </div>
    <smart-grid id="grid"></smart-grid>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
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
              appearance: {
                showRowHeaderNumber: true
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(1000),
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
                mode: "row",
                action: "none",
                dialog: {
                  enabled: true
                },
                commandColumn: {
                  visible: true,
                  position: "far"
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
    });
  }
};
</script>

<style>
@media only screen and (max-width: 700px) {
  smart-grid {
    width: 100%;
  }
}
</style>
