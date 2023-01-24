<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Grid Row Header Icons</h1>
      <p>The following appearance settings can be applied to rows header:</p>
      <ul>
        <li>showRowHeader - displays a row header.</li>
        <li>showRowHeaderNumber - displays a row header number.</li>
        <li>
          showRowHeaderEditIcon - displays an Edit icon, when the row is in
          <em>edit</em> state.
        </li>
        <li>
          showRowHeaderFocusIcon - displays a Focus icon, when the row is in
          <em>focus</em> state.
        </li>
        <li>
          showRowHeaderSelectIcon - displays a Select icon, when the pointer is
          over the row header. It indicated that the user can select the row.
        </li>
      </ul>
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
                showRowHeader: true,
                showRowHeaderSelectIcon: true,
                showRowHeaderFocusIcon: true,
                showRowHeaderEditIcon: true
              },
              selection: {
                enabled: true,
                allowRowHeaderSelection: true,
                mode: "extended"
              },
              editing: {
                enabled: true,
                mode: "row"
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(1000),
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
</style>
