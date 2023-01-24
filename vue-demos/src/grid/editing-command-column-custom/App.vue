<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Command Column with Custom Command in Data Grid</h1>
      <p>
        The command column editing option allows you to customize the built-in
        commands, but also to implement a custom command. This example shows how
        to achieve that.
      </p>
    </div>
    <smart-grid id="grid"></smart-grid>
    <div id="description"></div>
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
                action: "none",
                mode: "row",
                commandColumn: {
                  visible: true,
                  displayMode: "icon",
                  dataSource: {
                    commandColumnDelete: {
                      visible: false
                    },
                    commandColumnCustom: {
                      icon: "smart-icon-ellipsis-vert",
                      command: "window.Smart.commandColumnCustomCommand",
                      visible: true,
                      label: "Text"
                    }
                  }
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
      window.Smart.commandColumnCustomCommand = function(row) {
        document.querySelector("#description").innerHTML =
          "Id: " +
          row.id +
          ", First Name: " +
          row.data.firstName +
          ", Last Name: " +
          row.data.lastName;
      };
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
