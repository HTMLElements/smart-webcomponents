<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo shows how to display smart-pivot-table row nesting (based on
      <strong>rowGroup</strong> columns)
      in a classic, OLAP, layout. In this layout, there is a separate column
      for each level of nesting. Clicking the toggle button will change to the
      default, tree grid-like, style with a separate row for each record in the
      hierarchy.
    </div>
    <smart-pivot-table id="pivotTable"></smart-pivot-table>
    <div class="options">
      <div class="option">
        <smart-toggle-button id="toggleButton">
          Change
          <strong>groupLayout</strong> to '
          <span id="toggleButtonLabel">default</span>'
        </smart-toggle-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.pivottable.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      function generateData(rowscount) {
        const data = new Array();
        const firstNames = ["Andrew", "Nancy", "Shelley", "Regina", "Yoshi"];
        const lastNames = ["Fuller", "Davolio", "Burke", "Murphy", "Nagase"];
        const productNames = ["Black Tea", "Green Tea", "Caffe Espresso"];
        const priceValues = [
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
        for (let i = 0; i < rowscount; i++) {
          const row = {};
          const productindex = Math.floor(Math.random() * productNames.length);
          const price = parseFloat(priceValues[productindex]);
          const quantity = 1 + Math.round(Math.random() * 10);
          row["id"] = i;
          row["reportsto"] = Math.floor(Math.random() * firstNames.length);
          if (i % Math.floor(Math.random() * firstNames.length) === 0) {
            row["reportsto"] = null;
          }
          row["available"] = productindex % 2 === 0;
          row["firstName"] =
            firstNames[Math.floor(Math.random() * firstNames.length)];
          row["lastName"] =
            lastNames[Math.floor(Math.random() * lastNames.length)];
          row["name"] = row["firstName"] + " " + row["lastName"];
          row["productName"] = productNames[productindex];
          row["price"] = price;
          row["quantity"] = quantity;
          row["total"] = price * quantity;
          const date = new Date();
          date.setFullYear(
            2016,
            Math.floor(Math.random() * 11),
            Math.floor(Math.random() * 27)
          );
          date.setHours(0, 0, 0, 0);
          row["date"] = date;
          data[i] = row;
        }
        return data;
      }
      window.Smart(
        "#pivotTable",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: generateData(100),
                dataFields: [
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "quantity: number",
                  "price: number",
                  "available: boolean",
                  "date: date"
                ]
              }),
              freezeHeader: true,
              groupLayout: "classic",
              keyboardNavigation: true,
              onInit() {
                this.rows[0].expanded = true;
                this.rows[1].expanded = true;
              },
              columns: [
                {
                  label: "Last Name",
                  dataField: "lastName",
                  dataType: "string",
                  allowRowGroup: true,
                  rowGroup: true
                },
                {
                  label: "First Name",
                  dataField: "firstName",
                  dataType: "string",
                  allowRowGroup: true,
                  rowGroup: true
                },
                {
                  label: "Product Name",
                  dataField: "productName",
                  dataType: "string",
                  allowPivot: true,
                  pivot: true
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  dataType: "number",
                  summary: "sum"
                },
                {
                  label: "Price",
                  dataField: "price",
                  dataType: "number",
                  summary: "sum",
                  summarySettings: {
                    prefix: "$",
                    decimalPlaces: 2
                  }
                },
                {
                  label: "Available",
                  dataField: "available",
                  dataType: "boolean",
                  allowRowGroup: true,
                  rowGroup: true
                },
                {
                  label: "Date Purchased",
                  dataField: "date",
                  dataType: "date"
                } // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
              ]
            };
          }
        }
      );

      const pivotTable = document.getElementById("pivotTable"),
        toggleButtonLabel = document.getElementById("toggleButtonLabel");
      document
        .getElementById("toggleButton")
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            pivotTable.groupLayout = "default";
            toggleButtonLabel.innerHTML = "classic";
          } else {
            pivotTable.groupLayout = "classic";
            toggleButtonLabel.innerHTML = "default";
          }
        });
    });
  }
};
</script>

<style>
.smart-pivot-table {
  max-height: 750px;
}
</style>
