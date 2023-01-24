<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >This demo showcases the tree mode functionality of smart-table with filtering.</div>
    <smart-table id="table"></smart-table>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.table.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#table",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateOrdersData(50),
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
              filtering: true,
              keyboardNavigation: true,
              columns: [
                {
                  label: "Order Name",
                  dataField: "name"
                },
                {
                  label: "Customer",
                  dataField: "customer"
                },
                {
                  label: "Price",
                  dataField: "price",
                  dataType: "number",
                  formatFunction(settings) {
                    settings.template = "$" + settings.value.toFixed(2);
                  }
                },
                {
                  label: "Order Date",
                  dataField: "date",
                  dataType: "date"
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
.smart-table {
  height: auto;
  max-height: 500px;
}
</style>
