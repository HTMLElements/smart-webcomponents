<template>
  <div class="vue-root">
    <div class="demo-description">
      Data in this demo is loaded on demand when you change Page, Sort or Filter.
      This is achieved by using the Grid's Data Virtualization in combination
      with DataAdapter's "virtualDataSource".
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
      (function generateData() {
        let data = new Array();
        let firstNames = [
          "Andrew",
          "Nancy",
          "Shelley",
          "Regina",
          "Yoshi",
          "Antoni",
          "Mayumi",
          "Ian",
          "Peter",
          "Lars",
          "Petra",
          "Martin",
          "Sven",
          "Elio",
          "Beate",
          "Cheryl",
          "Michael",
          "Guylene"
        ];
        let lastNames = [
          "Fuller",
          "Davolio",
          "Burke",
          "Murphy",
          "Nagase",
          "Saavedra",
          "Ohno",
          "Devling",
          "Wilson",
          "Peterson",
          "Winkler",
          "Bein",
          "Petersen",
          "Rossi",
          "Vileid",
          "Saylor",
          "Bjorn",
          "Nodier"
        ];
        let productNames = [
          "Black Tea",
          "Green Tea",
          "Caffe Espresso",
          "Doubleshot Espresso",
          "Caffe Latte",
          "White Chocolate Mocha",
          "Cramel Latte",
          "Caffe Americano",
          "Cappuccino",
          "Espresso Truffle",
          "Espresso con Panna",
          "Peppermint Mocha Twist"
        ];
        let priceValues = [
          "2.25",
          "1.5",
          "3.0",
          "3.3",
          "4.5",
          "3.6",
          "3.8",
          "2.5",
          "5.0",
          "1.75",
          "3.25",
          "4.0"
        ];
        for (let i = 0; i < 100000; i++) {
          let row = {};
          let productindex = Math.floor(Math.random() * productNames.length);
          let price = parseFloat(priceValues[productindex]);
          let quantity = 1 + Math.round(Math.random() * 10);
          row["id"] = 1 + i;
          row["firstName"] =
            firstNames[Math.floor(Math.random() * firstNames.length)];
          row["lastName"] =
            lastNames[Math.floor(Math.random() * lastNames.length)];
          row["productName"] = productNames[productindex];
          row["price"] = price;
          row["quantity"] = quantity;
          row["total"] = price * quantity;
          data[i] = row;
        }
        window.Data = data;
      })();

      //   function GetData(first, last) {
      //     return window.Data.slice(first, last);
      //   }
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              sorting: {
                enabled: true
              },
              filtering: {
                enabled: true
              },
              paging: {
                enabled: true,
                pageSize: 10,
                pageIndex: 0
              },
              pager: {
                position: "far",
                visible: true
              },
              dataSource: new window.Smart.DataAdapter({
                virtualDataSourceLength: 100000,
                virtualDataSourceCache: true,
                virtualDataSource: function(resultCallbackFunction, details) {
                  const that = this;
                  if (that.timer) {
                    clearTimeout(that.timer);
                  }
                  // Timer simulates AJAX data request.
                  that.timer = setTimeout(function() {
                    let data = window.Data.slice(0);
                    /*
The details argument has the following properties: 'sorting', 'filtering', 'grouping' and 'action'.
The 'action' could be 'dataBind', 'scroll', 'sort', 'filter', 'group', 'pageIndexChange' and 'pageSizeChange'.
'sorting' is an array with sorted columns and sort orders.
'filtering' is an array with filtered columns and smartFilterGroup objects.
'grouping' is an array of grouped columns.
*/
                    // Sorts the data.
                    if (
                      details.sorting.length > 0 &&
                      (details.action === "sort" ||
                        details.action === "dataBind")
                    ) {
                      let sortColumns = [];
                      let sortOrders = [];
                      for (let dataField in details.sorting) {
                        const sortOrder = details.sorting[dataField].sortOrder;
                        sortColumns.push(dataField);
                        sortOrders.push(sortOrder);
                      }
                      that.sortedData = window.Smart.DataAdapter.Sort(
                        data,
                        sortColumns,
                        sortOrders
                      );
                    } else if (details.sorting.length === 0) {
                      that.sortedData = null;
                    }
                    if (that.sortedData) {
                      data = that.sortedData;
                    }
                    // Filters the data.
                    if (
                      details.filtering.length > 0 &&
                      (details.action === "sort" ||
                        details.action === "filter" ||
                        details.action === "dataBind")
                    ) {
                      let filterColumns = [];
                      let filters = [];
                      for (let dataField in details.filtering) {
                        const filter = details.filtering[dataField];
                        filterColumns.push(dataField);
                        filters.push(filter);
                      }
                      that.filteredData = window.Smart.DataAdapter.Filter(
                        data,
                        filterColumns,
                        filters
                      );
                    } else if (details.filtering.length === 0) {
                      that.filteredData = null;
                    }
                    if (that.filteredData) {
                      data = that.filteredData;
                    }
                    // This callback returns the data to be displayed in the Grid. If virtualDataSourceLength is changed, updates the scroll height and pages count, too.
                    resultCallbackFunction({
                      dataSource: data.slice(details.first, details.last),
                      virtualDataSourceLength: data.length
                    });
                  }, 100);
                },
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
                "id",
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
                  dataField: "quantity"
                },
                {
                  label: "Unit Price",
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
    });
  }
};
</script>

<style>
</style>
