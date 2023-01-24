<template>
  <div class="vue-root">
    <div class="demo-description">
      Smart's App class defines the bindings between View and Data. When a Smart
      App instance is created, it adds all the properties found in its data object
      to Smart’s reactivity system. When the values of those properties change,
      the view will “react”, updating to match the new values. The "render" method
      of the instance defines the DOM within the app's root element.
    </div>
    <div id="app"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const app = new window.App({
        selector: "#app",
        components: [window.smartGrid, window.smartDropDownList],
        template: {
          "#grid": {
            properties: {
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
            },
            bind: {
              dataSource: "data",
              computed: function(propertyObject) {
                //const item = propertyObject.item;
                //const value = propertyObject.value;
                if (propertyObject.name === "data") {
                  propertyObject.value = new window.Smart.DataAdapter({
                    dataSource: propertyObject.value,
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
                  });
                }
              }
            }
          },
          "#dropDownList": {
            properties: {
              displayMember: "firstName"
            },
            bind: {
              dataSource: "data",
              selectedIndexes: "index"
            }
          }
        },
        data: {
          index: [1],
          data: window.generateData(100),
          message: "Hello Smart World"
        },
        render: function() {
          return `
<smartGrid id="grid"></smartGrid>
<br/><br/>
<span>
{{message}}
</span>
<br/><br/>
<smartDropDownList id="dropDownList"></smartDropDownList>
`;
        }
      });

      app.data.index = [2];
    });
  }
};
</script>

<style>
smart-grid {
}
</style>
