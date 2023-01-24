<template>
  <div class="vue-root">
    <div class="demo-description">This demo shows how to enable sticky footer in smart-table.</div>
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
      const customFooterRow = document.createElement("template");
      customFooterRow.id = "customFooterRow";
      customFooterRow.innerHTML = `<tr>
        <td id="totalLabel" colspan="4">Total</td>
        <td id="totalQuantity"></td>
      </tr>`;
      document.body.appendChild(customFooterRow);

      const data = window.generateData(50);
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
              footerRow: "customFooterRow",
              freezeFooter: true,
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
  width: 800px;
  height: 600px;
}

.smart-table[freeze-footer] tfoot td {
  background-color: var(--smart-primary);
  color: var(--smart-primary-color);
}

#totalLabel {
  text-align: right;
}
</style>
