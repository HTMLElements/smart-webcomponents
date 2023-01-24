<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo demonstrates the Grid's "change" event. The "change" event occurs
      when the user selects cells, rows or columns. The "change" event has two
      boolean arguments: "started" and "finished". When the selection starts,
      the "started" boolean argument value is "true". When the selection ends,
      the "finished" boolean argument value is "true". If the selection is with
      dragging, the values of "started" and "finished" is false.
    </div>
    <br />
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Events</div>
      <div class="option" id="eventsLog"></div>
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
              appearance: {
                showRowHeader: true
              },
              selection: {
                enabled: true,
                mode: "extended",
                allowCellSelection: true
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(3000),
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

      const grid = document.querySelector("#grid");
      const eventsLog = document.querySelector("#eventsLog");
      grid.addEventListener("change", function(event) {
        const detail = event.detail;
        const log = document.createElement("div");
        log.innerHTML =
          "change - started: " +
          detail.started +
          ", finished: " +
          detail.finished;
        if (detail.started) {
          eventsLog.innerHTML = "";
        }
        eventsLog.appendChild(log);
      });
    });
  }
};
</script>

<style>
smart-grid {
  width: 60%;
}
@media only screen and (max-width: 400px) {
  smart-grid {
    width: 100%;
  }
}
</style>
