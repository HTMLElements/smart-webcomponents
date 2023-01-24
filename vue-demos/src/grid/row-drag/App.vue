<template>
  <div class="vue-root">
    <div class="demo-description">
      Drag a row from Grid A and drop it into Grid B. The dragged row will be
      removed from Grid A, after the drop and will be added to Grid B.
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
                allowRowReorder: true
              },
              appearance: {
                showRowHeader: true,
                showRowHeaderDragIcon: true
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(10),
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
              appearance: {
                showRowHeader: true
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(0),
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

      const grid = document.querySelector("#grid");
      const grid2 = document.querySelector("#grid2");
      grid.onRowDragging = function(event) {
        event.detail.data.data();
        event.detail.data.feedbackLine.style.display = "none";
      };
      grid.onRowDragEnd = function(event) {
        const row = event.detail.row;
        const pointerEvent = event.detail.originalEvent;
        if (
          pointerEvent.pageY >= grid2.offsetTop &&
          pointerEvent.pageY <= grid2.offsetTop + grid2.offsetHeight
        ) {
          if (
            pointerEvent.pageX >= grid2.offsetLeft &&
            pointerEvent.pageX <= grid2.offsetLeft + grid2.offsetWidth
          ) {
            grid.rows.splice(grid.rows.indexOf(row), 1);
            grid2.rows.push(row.data);
          }
        }
      };
    });
  }
};
</script>

<style>
smart-grid {
  width: 100%;
  height: auto;
  min-height: 100px;
}

#log {
  font-size: 12px;
}

.demo-description {
  width: 60%;
}
</style>
