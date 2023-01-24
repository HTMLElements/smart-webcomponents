<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>DateTimePicker Editor in smartGrid</h1>
      <p>
        Click on any cell in the 'Order Date' column to display a DateTimePicker
        column editor. When the Grid Column's 'dataType' is set to 'dateTime',
        the editor will display Calendar and TimePicker popups. When the column's
        'dataType' is 'time' the DateTimePicker displays TimePicker component for
        editing. For 'date' column, the Calendar component is used for editing.
      </p>
      <smart-grid id="grid"></smart-grid>
    </div>
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
                  "date: date",
                  "price: number",
                  "total: number"
                ]
              }),
              editing: {
                enabled: true,
                mode: "cell"
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
                  label: "Order Date",
                  width: 250,
                  dataField: "date",
                  editor: {
                    template: "dateTimePicker",
                    formatString: "d"
                    //onInit(index, dataField, editor) {}
                  }
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
body {
  height: 1000px;
}

@media only screen and (max-width: 700px) {
  smart-grid {
    width: 100%;
  }
}
</style>
