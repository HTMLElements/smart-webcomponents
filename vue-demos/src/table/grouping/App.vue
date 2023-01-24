<template>
  <div class="vue-root">
    <div class="demo-description">This demo showcases the grouping functionality of smart-table.</div>
    <smart-table id="table"></smart-table>
    <div class="options">
      <div class="option">
        <smart-check-box id="hideGroupName">Hide group name</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="hideGroupCount">Hide group leaf count</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.table.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";

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
                dataSource: window.generateData(50),
                dataFields: [
                  "id: number",
                  "productName: string",
                  "quantity: number",
                  "price: number",
                  "date: date"
                ]
              }),
              grouping: true,
              keyboardNavigation: true,
              columns: [
                {
                  label: "id",
                  dataField: "id",
                  dataType: "number"
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
                  dataType: "number"
                },
                {
                  label: "Date Purchased",
                  dataField: "date",
                  dataType: "date"
                }
              ]
            };
          }
        }
      );

      const table = document.getElementById("table");
      document.getElementById('hideGroupName').addEventListener('change', function (event) {
        if (event.detail.value) {
          table.style.setProperty('--smart-table-group-name-display', 'none');
        }
        else {
          table.style.setProperty('--smart-table-group-name-display', null);
        }
      });
      document.getElementById('hideGroupCount').addEventListener('change', function (event) {
        if (event.detail.value) {
          table.style.setProperty('--smart-table-group-count-display', 'none');
        }
        else {
          table.style.setProperty('--smart-table-group-count-display', null);
        }
      });
      table.whenRendered(() => {
        table.addGroup("productName");
        table.addGroup("quantity");
      });
    });
  }
};
</script>

<style>
.smart-table {
  height: 500px;
}
</style>
