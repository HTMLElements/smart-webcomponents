<template>
  <div class="vue-root">
    <div class="demo-description">
      This page shows how to customize the Sort Icons and also how to always
      show a sort icon which indicates that a datagrid column is sortable. This
      is achieved by using the "autoShowColumnSortButton" property. The column's
      "allowSort" property determines whether a column is sortable.
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
              sorting: {
                enabled: true
              },
              appearance: {
                autoShowColumnSortButton: false
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
                  allowSort: false,
                  dataField: "firstName"
                },
                {
                  label: "Last Name",
                  dataField: "lastName"
                },
                {
                  label: "Product",
                  allowSort: false,
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

      //  document.getElementById('grid').appearance.autoShowColumnActionButton = true;
    });
  }
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");

smart-grid-column .smart-sort-button.smart-grid-icon {
  font-family: "FontAwesome";
  font-size: 13px;
  color: #9b9b9b;
}

smart-grid-column .smart-sort-button.smart-icon-sort:before {
  content: "\f0dc";
}

smart-grid-column .smart-sort-button.asc:before,
smart-grid-column .smart-sort-button.desc:before {
  content: "\f0dd";
}

@media only screen and (max-width: 700px) {
  smart-grid {
    width: 100%;
  }
}
</style>
