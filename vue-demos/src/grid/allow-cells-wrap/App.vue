<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>
        Grid Cells Wrap enabled by setting the 'appearance.allowCellsWrap' property to
        <em>true</em>.
      </h1>
      <p>
        Enabling cells wrap, wraps the cell values. Row height is automatically
        re-calculated, if the 'rowHeight' property is set to 'auto'.
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
      window.window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              appearance: {
                alternationStart: 0,
                alternationCount: 2,
                showRowHeader: true,
                showRowHeaderFocusIcon: true,
                showRowHeaderSelectIcon: true
              },
              selection: {
                enabled: true,
                mode: "one",
                allowRowHeaderSelection: true
              },
              pager: {
                visible: true
              },
              paging: {
                enabled: true
              },
              layout: {
                rowHeight: "auto",
                allowCellsWrap: true
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
#grid {
  height: auto;
  width: 100%;
  max-width: 650px;
}

@media only screen and (max-width: 400px) {
  smart-grid {
    width: 100%;
  }
}
</style>
