<template>
  <div class="vue-root">
    <div class="demo-description">
      Grid Column Headers Resize example. Move the pointer to the right border
      of a column header.
      <br />When the cursor is changed to a col-resize cursor, press the mouse button
      or tap to start resize.
      <br />The column is resized when you release the pressed buttton.
    </div>
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Column Resize Mode</div>
      <div class="option">
        <smart-radio-button id="none">None</smart-radio-button>
        <br />
        <smart-radio-button id="split">Split</smart-radio-button>
        <br />
        <smart-radio-button checked id="growAndShrink">Grow and Shrink</smart-radio-button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

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
        for (let i = 0; i < 5000; i++) {
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
                {
                  label: "First Name",
                  width: 150,
                  dataField: "firstName"
                },
                {
                  label: "Last Name",
                  width: 150,
                  dataField: "lastName"
                },
                {
                  label: "Product",
                  width: 200,
                  dataField: "productName"
                },
                {
                  label: "Quantity",
                  width: 100,
                  dataField: "quantity"
                },
                {
                  label: "Unit Price",
                  width: 100,
                  dataField: "price",
                  cellsFormat: "c2"
                },
                {
                  label: "Total",
                  dataField: "total",
                  width: 200,
                  cellsFormat: "c2"
                }
              ]
            };
          }
        }
      );

      const radioButtons = document.querySelectorAll("smart-radio-button");
      const grid = document.getElementById("grid");
      for (let i = 0; i < radioButtons.length; i++) {
        const radioButton = radioButtons[i];
        radioButton.addEventListener("change", function(event) {
          if (event.detail.value) {
            if (this.id === "none") {
              grid.behavior.columnResizeMode = "none";
            } else if (this.id === "growAndShrink") {
              grid.behavior.columnResizeMode = "growAndShrink";
            } else {
              grid.behavior.columnResizeMode = "split";
            }
          }
        });
      }
    });
  }
};
</script>

<style>
@media only screen and (max-width: 400px) {
  smart-grid {
    width: 100%;
  }
}

smart-grid {
  max-width: 600px;
}
</style>
