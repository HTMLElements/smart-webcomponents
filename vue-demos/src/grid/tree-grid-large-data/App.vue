<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>TreeGrid data binding to large data set</h1>The TreeGrid in this demo is loaded with a large data set.
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
                dataSource: window.generateOrdersData(),
                id: "id",
                keyDataField: "id",
                parentDataField: "parentid",
                dataFields: [
                  "id: string",
                  "name: string",
                  "customer: string",
                  "price: number",
                  "date: date"
                ]
              }),
              behavior: {
                columnResizeMode: "growAndShrink"
              },
              columns: [
                {
                  label: "Order Name",
                  dataField: "name",
                  align: "center",
                  width: 200
                },
                {
                  label: "Customer",
                  dataField: "customer",
                  align: "center",
                  width: 200
                },
                {
                  label: "Price",
                  dataField: "price",
                  cellsFormat: "c2",
                  align: "center",
                  cellsAlign: "right",
                  width: 80
                },
                {
                  label: "Order Date",
                  dataField: "date",
                  align: "center",
                  cellsFormat: "dd-MMMM-yyyy hh:mm"
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
