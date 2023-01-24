<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Grid Init From Attribute</h1>
      <p>
        The Grid in this example is created from a DIV tag with attribute 'smartGrid'
        when the page is loaded. That approach allows us to easily create the component
        from a DIV tag on demand to speed up the initial page load.
      </p>
    </div>
    <!-- eslint-disable-next-line -->
    <div is="smartGrid" id="grid"></div>
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
