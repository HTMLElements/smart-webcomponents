<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>DataGrid Paging with Grouping</h1>
      <p>
        The example demonstrates how to combine Grouping and Paging. The 'pageSize'
        property, when grouping is enabled determines the root groups size displayed
        per page.
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
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(100),
                groupBy: ["productName"],
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
              pager: {
                visible: true
              },
              paging: {
                enabled: true,
                pageSize: 2
              },
              filtering: {
                enabled: false
              },
              sorting: {
                enabled: false
              },
              behavior: {
                allowColumnReorder: true
              },
              grouping: {
                enabled: true,
                renderMode: "basic",
                groupBar: {
                  visible: true
                }
              },
              onAfterInit() {
                const rows = document
                  .querySelector("smart-grid")
                  .getVisibleRows();
                rows[0].expand();
              },
              columns: [
                {
                  label: "#",
                  width: 200,
                  dataField: "id"
                },
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
smart-grid {
  width: 100%;
  height: auto;
}
</style>
