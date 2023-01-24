<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo showcases the cell validation functionality of smart-table.
      Double-click a cell to start an edit operation.
    </div>
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
                dataSource: window.generateData(10),
                dataFields: [
                  "id: number",
                  "productName: string",
                  "quantity: number",
                  "price: number",
                  "date: date"
                ]
              }),
              editing: true,
              editMode: "cell",
              columns: [
                {
                  label: "id",
                  dataField: "id",
                  dataType: "number"
                },
                {
                  label: "Product Name",
                  dataField: "productName",
                  dataType: "string",
                  validation(value) {
                    if (value === "") {
                      return {
                        message: "Product name is required!"
                      };
                    }
                    return true;
                  }
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  dataType: "number",
                  validation(value) {
                    if (isNaN(value) || value <= 5) {
                      return {
                        message: "Quantity has to be larger than 5!"
                      };
                    }
                    return true;
                  }
                },
                {
                  label: "Price",
                  dataField: "price",
                  dataType: "number",
                  validation(value) {
                    if (isNaN(value) || value <= 0) {
                      return false;
                    }
                    return true;
                  }
                },
                {
                  label: "Date Purchased",
                  dataField: "date",
                  dataType: "date",
                  validation(value) {
                    if (value.getTime() > new Date().getTime()) {
                      return false;
                    }
                    return true;
                  }
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
