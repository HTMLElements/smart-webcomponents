<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >This demo showcases how to show multiple header and footer rows in smart-table.</div>
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
      const customHeaderRowTemplate = document.createElement("template");
      customHeaderRowTemplate.id = "customHeaderRowTemplate";
      customHeaderRowTemplate.innerHTML = `<tr id="customHeaderRow">
        <th>The user's id</th>
        <th>The user's first name</th>
        <th>The user's last name</th>
        <th>Official product name</th>
        <th>The number of purchased items</th>
      </tr>`;
      document.body.appendChild(customHeaderRowTemplate);

      const customFooterRowTemplate = document.createElement("template");
      customFooterRowTemplate.id = "customFooterRowTemplate";
      customFooterRowTemplate.innerHTML = `<tr>
        <td>id</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Product Name</td>
        <td>Quantity</td>
      </tr>
      <tr>
        <td id="totalLabel" colspan="4">Total</td>
        <td id="totalQuantity"></td>
      </tr>`;
      document.body.appendChild(customFooterRowTemplate);

      const data = window.generateData(15);
      window.Smart(
        "#table",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: data,
                dataFields: [
                  "id: number",
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "quantity: number"
                ]
              }),
              footerRow: "customFooterRowTemplate",
              freezeFooter: true,
              freezeHeader: true,
              headerRow: "customHeaderRowTemplate",
              columns: [
                {
                  label: "id",
                  dataField: "id",
                  dataType: "number"
                },
                {
                  label: "First Name",
                  dataField: "firstName",
                  dataType: "string"
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  dataType: "string"
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
                }
              ]
            };
          }
        }
      );

      let totalQuantity = 0;
      data.forEach(dataPoint => (totalQuantity += dataPoint.quantity));

      const table = document.getElementById("table");
      table.whenRendered(() => {
        document.getElementById(
          "totalQuantity"
        ).innerHTML = totalQuantity.toString();
      });
    });
  }
};
</script>

<style>
.smart-table {
  height: 650px;
}

#totalLabel {
  text-align: right;
  font-weight: bold;
}

#customHeaderRow > th {
  font-size: 11px;
  font-style: italic;
}
</style>
