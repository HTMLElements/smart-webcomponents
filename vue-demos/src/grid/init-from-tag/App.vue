<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Grid Default Init as Custom Element</h1>
      <p>
        The Grid in this example is created from a "smart-grid" tag. That approach
        is the default one.
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
      new window.smartGrid("#grid", {
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
            dataField: "productName"
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
      });
    });
  }
};
</script>

<style>
smart-grid {
}
</style>
