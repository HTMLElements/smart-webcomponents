<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Context Menu in Grid Web Component</h1>
      <p>
        Right Click on a Grid row to show a Context Menu. The Context menu is
        smartMenu component with two items - 'Edit' and 'Remove'. The 'Edit' item
        puts the clicked Grid row in edit mode. The 'Remove' item removes the clicked
        grid row.
      </p>
      <br />
      <br />
    </div>
    <smart-grid id="grid"></smart-grid>
    <smart-menu id="menu" mode="dropDown">
      <smart-menu-item data-id="Edit" label="<i class='material-icons'>edit</i>Edit"></smart-menu-item>
      <smart-menu-item data-id="Remove" label="<i class='material-icons'>delete</i> Remove"></smart-menu-item>
    </smart-menu>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              appearance: {
                showRowHeaderNumber: true
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(1000),
                dataFields: [
                  "id: number",
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "available: bool",
                  "quantity: number",
                  "price: number",
                  "total: number"
                ]
              }),
              editing: {
                enabled: true,
                action: "none",
                mode: "row"
              },
              columns: [
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
                  dataField: "productName",
                  editor: "autoComplete"
                },
                {
                  label: "Available",
                  dataField: "available",
                  template: "checkBox",
                  editor: "checkBox"
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  editor: "numberInput"
                },
                {
                  label: "Unit Price",
                  dataField: "price",
                  editor: "numberInput",
                  cellsFormat: "c2"
                }
              ]
            };
          }
        }
      );

      const grid = document.getElementById("grid");
      const menu = document.getElementById("menu");
      let rowId = null;
      grid.addEventListener("contextmenu", function(event) {
        event.stopPropagation();
        event.preventDefault();
        menu.open(event.pageX, event.pageY);
        return false;
      });
      menu.addEventListener("itemClick", function(event) {
        if (rowId === undefined) {
          return;
        }
        if (event.detail.item.getAttribute("data-id") === "Edit") {
          grid.beginEdit(rowId);
        } else {
          grid.deleteRow(rowId);
        }
      });
      grid.addEventListener("rowClick", function(event) {
        if (event.detail.originalEvent.which === 3) {
          const row = event.detail.row;
          rowId = row.id;
          event.detail.originalEvent.stopPropagation();
        }
      });
    });
  }
};
</script>

<style>
smart-grid {
  width: 100%;
}
#menu {
  height: auto;
  width: 150px;
}

@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  margin-right: 10px;
}
</style>
