<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Batch Editing in Data Grid</h1>
      <p>
        The data grid allows you to edit and update multiple grid rows on the
        client side and send them with a single server request. To enable the Grid's
        batch editing, the 'editing.batch' property should be set to 'true' The
        'editing.commandBar' setting allows you to display a toolbar or statusbar
        with tools for saving and reverting the edit made by the users. This is
        done by setting 'editing.commandBar.visible' to 'true'.
      </p>
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
                batch: true,
                enabled: true,
                action: "click",
                commandBar: {
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
