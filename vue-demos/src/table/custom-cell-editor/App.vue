<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo showcases how to integrate a custom cell editor in smart-table.
      Double-click the a "Product Name" cell to initiate an edit operation.
    </div>
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
      window.Smart(
        "#table",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(10),
                dataFields: [
                  "id: number",
                  "productName: string",
                  "quantity: number",
                  "price: number",
                  "date: date"
                ]
              }),
              editing: true,
              editMode: "cell",
              columns: [
                {
                  label: "id",
                  dataField: "id",
                  dataType: "number"
                },
                {
                  label: "Product Name",
                  dataField: "productName",
                  dataType: "string",
                  editor: {
                    template: "<smart-drop-down-list></smart-drop-down-list>",
                    onInit(row, column, editor) {
                      editor.dataSource = [
                        "Black Tea",
                        "Green Tea",
                        "Caffe Espresso",
                        "Doubleshot Espresso",
                        "Caffe Latte",
                        "White Chocolate Mocha",
                        "Caramel Latte",
                        "Caffe Americano",
                        "Cappuccino",
                        "Espresso Truffle",
                        "Espresso con Panna",
                        "Peppermint Mocha Twist"
                      ];
                      editor.dropDownAppendTo = "body";
                    },
                    onRender(row, column, editor, value) {
                      editor.selectedValues = [value];
                    },
                    getValue(editor) {
                      return editor.selectedValues[0];
                    }
                  }
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  dataType: "number"
                },
                {
                  label: "Price",
                  dataField: "price",
                  dataType: "number"
                },
                {
                  label: "Date Purchased",
                  dataField: "date",
                  dataType: "date"
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
