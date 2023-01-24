<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Grid with Right to Left</h1>
      <p>
        Right to Left(RTL) is used for displaying languages that go from Right
        to Left, eg. Hebrew and Arabic. To get our Grid to display in RTL format,
        set the 'rightToLeft' boolean property or just add the attribute to the
        Grid's HTML tag..
      </p>
      <h2>Scroll Bars</h2>Vertical scrollbar in Right to Left layout appears on left side. Horizontal
      scrollbars starts from right-to-left, too.
      <h2>Frozen Columns</h2>
By default, when columns are frozen(pinned) to 'near', they will appear
      on 'left'. In RTL mode, they will appear on right side.
      <h2>Layout of Columns</h2>
The grid normally lays the columns out from left to right. In right to
      left layout, the columns lay out from the right to the left. Columns and
      Cells horizontal alignment is also reversed.
      <h2>Column Popups and Action buttons</h2>
Column popup is opened after the action button is clicked. It appears
      with smooth animation with a transform origin setting equal to 'right'.
      The Filter Panel's components(dropdownlists, numerics, datetimepickers,
      inputs) in the column popup also take into account the Grid's right to
      left settings. Sort, Filter and Action buttons are displayed in the left
      side of the column header, when RTL is applied.
      <h2>Column Resize</h2>
Column resizing begins when the user drags and drops the 'left' edge of
      the column. When the Grid is with normal layout, resize begins from the
      'right' edge.
      <h2>Paging</h2>
The Pager automatically aligns its buttons to the right side. All components
      in the pager are reversed.
      <h2>Keyboard navigation</h2>Left and Right arrow keys in 'right-to-left' layout are reversed.
    </div>
    <smart-grid right-to-left id="grid"></smart-grid>
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
                enabled: true,
                sortMode: "one"
              },
              filtering: {
                enabled: true,
                filter: [
                  ["firstName", "contains Andrew or contains Nancy"],
                  ["quantity", ">= 3 and <= 8"]
                ]
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
    });
  }
};
</script>

<style>
smart-grid {
  width: 100%;
}
body {
  height: 1000px;
}

h2 {
  font-size: 14px;
}
</style>
