<template>
  <div class="vue-root">
    <div class="demo-description">
      Grid Column Headers Reorder example. Move the pointer to a column header
      and start dragging it. When you drop it over another column header, columns
      are reordered. To enable column reorder, the behavior.allowColumnReorder
      is set to true. To disable the reorder of a column, you can set its "allowReorder"
      property to false. To cancel dragging, pres 'Escape' while you drag.
    </div>
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Event Log</div>
      <div class="option" id="log"></div>
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
              behavior: {
                allowColumnReorder: true
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(100),
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
              paging: {
                enabled: true
              },
              pager: {
                visible: true
              },
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
                  label: "Product",
                  width: 200,
                  dataField: "productName"
                },
                {
                  label: "Quantity",
                  width: 100,
                  dataField: "quantity"
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

      const grid = document.querySelector("smart-grid");
      const log = document.querySelector("#log");
      grid.addEventListener("columnDragStart", function() {});
      grid.onColumnDragStart = function(event) {
        log.innerHTML =
          "columnDragStart: " +
          event.detail.column.label +
          ", index: " +
          event.detail.index +
          "<br/>";
      };
      grid.onColumnDragging = function() {};
      grid.onColumnDragEnd = function(event) {
        log.innerHTML +=
          "columnDragEnd: " +
          event.detail.column.label +
          ", index: " +
          event.detail.index +
          ", new index: " +
          event.detail.newIndex +
          "<br/>";
      };
      grid.onColumnDragCancel = function(event) {
        log.innerHTML +=
          "columnDragCancel: " + event.detail.column.label + "<br/>";
      };
    });
  }
};
</script>

<style>
smart-grid {
  height: auto;
  width: 60%;
}

#log {
  font-size: 12px;
}

.demo-description {
  width: 60%;
}
</style>
