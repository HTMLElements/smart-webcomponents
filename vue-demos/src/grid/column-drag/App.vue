<template>
  <div class="vue-root">
    <div class="demo-description">
      Drag a column from Grid A and drop it into Grid B. Dragging of 'Product'
      column is disabled. Column Reorder in Grid A is disabled. Column Reorder
      in Grid B is enabled.
    </div>
    <h3>Grid A</h3>
    <br />
    <br />
    <smart-grid id="grid"></smart-grid>
    <br />
    <br />
    <h3>Grid B</h3>
    <smart-grid id="grid2"></smart-grid>
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
              behavior: {
                allowColumnReorder: true
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(20),
                autoGenerateColumns: false,
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
                  width: 150,
                  dataField: "firstName"
                },
                {
                  label: "Last Name",
                  width: 150,
                  dataField: "lastName"
                },
                {
                  label: "Quantity",
                  width: 100,
                  dataField: "quantity"
                },
                {
                  label: "Product",
                  dataField: "productName",
                  allowReorder: false
                },
                {
                  label: "Unit Price",
                  width: 100,
                  dataField: "price",
                  cellsFormat: "c2"
                },
                {
                  label: "Total",
                  dataField: "total",
                  cellsFormat: "c2"
                }
              ]
            };
          }
        }
      );
      window.Smart(
        "#grid2",
        class {
          get properties() {
            return {
              behavior: {
                allowColumnReorder: true
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(20),
                autoGenerateColumns: false,
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
              columns: []
            };
          }
        }
      );

      const grid = document.querySelector("#grid");
      const grid2 = document.querySelector("#grid2");
      grid.onColumnDragging = function(event) {
        event.detail.data.data();
        event.detail.data.feedbackLine.style.display = "none";
        event.detail.data.feedback.innerHTML = event.detail.column.label;
      };
      grid.onColumnDragEnd = function(event) {
        const column = event.detail.column;
        const pointerEvent = event.detail.originalEvent;
        if (
          pointerEvent.pageY >= grid2.offsetTop &&
          pointerEvent.pageY <= grid2.offsetTop + grid2.offsetHeight
        ) {
          if (
            pointerEvent.pageX >= grid2.offsetLeft &&
            pointerEvent.pageX <= grid2.offsetLeft + grid2.offsetWidth
          ) {
            grid.columns.splice(grid.columns.indexOf(column), 1);
            grid2.columns.push({
              label: column.label,
              dataField: column.dataField
            });
          }
        }
      };
    });
  }
};
</script>

<style>
smart-grid {
  width: 60%;
}

#log {
  font-size: 12px;
}

.demo-description {
  width: 60%;
}
</style>
