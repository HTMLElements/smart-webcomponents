<template>
  <div class="vue-root">
    <div class="demo-description">
      The Grid in this demo displays data in a series of rows and columns. This
      is the simplest case when the Grid is bound to a local data source.
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
              behavior: {
                columnResizeMode: "growAndShrink"
              },
              appearance: {
                alternationCount: 2,
                showRowHeader: true,
                showRowHeaderSelectIcon: true,
                showRowHeaderFocusIcon: true
              },
              paging: {
                enabled: true
              },
              pager: {
                visible: true
              },
              sorting: {
                enabled: true
              },
              editing: {
                enabled: true
              },
              selection: {
                enabled: true,
                allowCellSelection: true,
                allowRowHeaderSelection: true,
                allowColumnHeaderSelection: true,
                mode: "extended"
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(500),
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
                  dataField: "firstName",
                  columnGroup: "name"
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  columnGroup: "name"
                },
                {
                  label: "Product",
                  dataField: "productName",
                  columnGroup: "order"
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  columnGroup: "order"
                },
                {
                  label: "Unit Price",
                  dataField: "price",
                  cellsFormat: "c2",
                  columnGroup: "order",
                  formatFunction(settings) {
                    if (settings.value >= 4) {
                      settings.cell.background = "#00A45A";
                      settings.cell.color = "#fff";
                    } else if (settings.value < 2) {
                      settings.cell.background = "#DF3800";
                      settings.cell.color = "#fff";
                    } else {
                      settings.cell.background = "#FFFDE1";
                      settings.cell.color = "#333";
                    }
                    settings.value =
                      "$" + new Number(settings.value).toFixed(2);
                  }
                },
                {
                  label: "Total",
                  dataField: "total",
                  cellsFormat: "c2",
                  columnGroup: "order",
                  formatFunction(settings) {
                    if (settings.value >= 20) {
                      settings.cell.background = "#00A45A";
                      settings.cell.color = "#fff";
                    }
                    if (settings.value <= 5) {
                      settings.cell.background = "#DF3800";
                      settings.cell.color = "#fff";
                    } else {
                      settings.cell.background = "#FFFDE1";
                      settings.cell.color = "#333";
                    }
                    settings.value =
                      "$" + new Number(settings.value).toFixed(2);
                  }
                }
              ],
              columnGroups: [
                {
                  label: "Customer Name",
                  align: "center",
                  name: "name"
                },
                {
                  label: "Order Detals",
                  align: "center",
                  name: "order"
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
body {
  min-height: 700px;
}

smart-grid {
  width: 100%;
  height: auto;
}
</style>
