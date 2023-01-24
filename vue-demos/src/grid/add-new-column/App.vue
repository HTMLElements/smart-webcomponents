<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>DataGrid Add New Column</h1>DataGrid has built-in UI for Dynamically Adding a New Column. To enable
      it, you need to set the 'editing.addNewColumn.visible' property to true.
      <br />Press the '+' button to open the 'New Column Dialog'. On open and close,
      the 'openColumnDialog' and 'closeColumnDialog' events are fired.
    </div>
    <smart-grid id="grid"></smart-grid>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.button.js";

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
                dataSource: window.generateData(100),
                dataFields: [
                  "id: number",
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "available: bool",
                  "date: date",
                  "quantity: number",
                  "price: number",
                  "total: number"
                ]
              }),
              selection: {
                enabled: true,
                allowCellSelection: true,
                allowRowHeaderSelection: true,
                allowColumnHeaderSelection: true,
                mode: "extended"
              },
              behavior: {
                columnResizeMode: "split"
              },
              sorting: {
                enabled: true
              },
              filtering: {
                enabled: true
              },
              editing: {
                enabled: true,
                addNewColumn: {
                  visible: true
                },
                mode: "cell"
              },
              columns: [
                {
                  label: "First Name",
                  dataField: "firstName",
                  editor: {
                    required: true,
                    template: "input"
                  }
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  editor: {
                    required: true,
                    template: "input"
                  }
                },
                {
                  label: "Product",
                  width: 200,
                  dataField: "productName",
                  editor: {
                    required: true,
                    template: "dropDownList"
                  }
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
smart-grid {
  width: 100%;
}
</style>
