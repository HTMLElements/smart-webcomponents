<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Data Grid Sticky Columns Header</h1>
      <p>
        When the Grid's height is 'auto', the height is a sum of the total rows
        height. The Grid does not have vertical scrollbars in this mode and to
        scroll up, down, the web page's scrollbars are used. The Sticky Columns
        feature, allows the Grid's Columns to be visible, while the user scrolls
        up/down with the web page's scrollbars.
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
        for (let i = 0; i < 50; i++) {
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
                allowColumnStickyPosition: true
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.Data,
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
html,
body {
  height: 500px !important;
}

smart-grid {
  width: 60%;
  height: auto;
}
</style>
