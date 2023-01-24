<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Data Grid Lines Appearance</h1>
      <p>
        The Data Grid provides multiple line customization options. It can render
        horizontal or vertical lines only, or both horizontal and vertical lines.
        This is controlled by the 'appearance.showRowLines', 'appearance.showColumnLines',
        'appearance.showColumnHeaderLines' properties. In this demo, use the checkboxes
        to change the gridline style.
      </p>
    </div>
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Appearance</div>
      <div class="option">
        <smart-check-box checked id="headerLines">Column Header Lines</smart-check-box>
        <br />
        <br />
        <smart-check-box checked id="columnLines">Column Lines</smart-check-box>
        <br />
        <br />
        <smart-check-box checked id="rowLines">Row Lines</smart-check-box>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
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
        for (let i = 0; i < 15000; i++) {
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
                alternationStart: -1
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

      const checkboxes = document.querySelectorAll("smart-check-box");
      const grid = document.getElementById("grid");
      for (let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i];
        checkbox.addEventListener("change", function(event) {
          const value = event.detail.value;
          if (this.id === "headerLines") {
            grid.appearance.showColumnHeaderLines = value;
          } else if (this.id === "columnLines") {
            grid.appearance.showColumnLines = value;
          } else {
            grid.appearance.showRowLines = value;
          }
        });
      }
    });
  }
};
</script>

<style>
smart-grid {
  width: 60%;
}
@media only screen and (max-width: 400px) {
  smart-grid {
    width: 100%;
  }
}
</style>
