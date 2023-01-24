<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Full Row Editing in Data Grid</h1>
      <p>
        The data grid offers different editing options in order to meet Enterprise
        needs. In this demo is demonstrated full row editing which is one of the
        editing modes supported by the grid. To enable the row editing, set the
        'editing.mode' to 'row'.
      </p>
      <br />
      <br />
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
                action: "click",
                mode: "row"
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
