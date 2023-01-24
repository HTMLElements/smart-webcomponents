<template>
  <div class="vue-root">
    <div class="demo-description">This demo showcases the paging functionality of smart-table.</div>
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
              keyboardNavigation: true,
              paging: true,
              columns: [
                {
                  label: "id",
                  dataField: "id",
                  dataType: "number"
                },
                {
                  label: "First Name",
                  dataField: "firstName",
                  dataType: "string"
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  dataType: "string"
                },
                {
                  label: "Product Name",
                  dataField: "productName",
                  dataType: "string"
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  dataType: "number"
                },
                {
                  label: "Price",
                  dataField: "price",
                  dataType: "number",
                  formatFunction(settings) {
                    settings.template = "$" + settings.value;
                  }
                },
                {
                  label: "Total",
                  dataField: "total",
                  dataType: "number"
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
#navigateTo,
#pageIndex {
  height: 35px;
}

#pageIndex {
  width: 40px;
  box-sizing: border-box;
}
</style>
