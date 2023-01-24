<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>TextArea Editor within smartGrid</h1>
      <p>
        The first three columns in this demo are with 'textArea' editor. With
        this editor, text is edited within 'textarea' HTML Element. By clicking
        the expand button, users will view more space for editing within a small
        popup window.
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
                  dataField: "firstName",
                  editor: "textArea"
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  editor: "textArea"
                },
                {
                  label: "Product",
                  dataField: "productName",
                  width: 150,
                  editor: "textArea"
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
