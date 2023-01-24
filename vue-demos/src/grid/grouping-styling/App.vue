<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Grid Group Styling</h1>
      <p>
        The example demonstrates how to style the Group Rows. The demo removes
        the horizontal and vertical offset by using CSS variables.
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
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(100),
                groupBy: ["firstName", "lastName"],
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
              grouping: {
                enabled: true,
                groupIndent: 0
              },
              columns: [
                {
                  label: "#",
                  width: 200,
                  dataField: "id"
                },
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
                  dataField: "quantity",
                  align: "right",
                  cellsAlign: "right"
                },
                {
                  label: "Unit Price",
                  dataField: "price",
                  align: "right",
                  cellsAlign: "right",
                  cellsFormat: "c2"
                },
                {
                  label: "Total",
                  dataField: "total",
                  align: "right",
                  cellsAlign: "right",
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
:root {
  --smart-grid-group-row-vertical-offset: 0;
  --smart-grid-group-row-horizontal-offset: 0;
  --smart-grid-group-row-border-radius: var(--smart-border-radius);
  --smart-grid-group-row-background: inherit;
}
smart-grid {
  width: 100%;
}
</style>
