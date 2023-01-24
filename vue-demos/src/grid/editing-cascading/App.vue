<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Grid Cascading Cell Editors</h1>
      <p>
        This example demonstrates how to implement cascading cell editors in Grid
        using custom column editors.
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
      const data = [
          {
            Country: "Belgium",
            City: "Brussels"
          },
          {
            Country: "France",
            City: "Paris"
          },
          {
            Country: "USA",
            City: "Washington"
          },
          {
            Country: "Lebanon",
            City: "Beirut"
          }
        ],
        cities = {
          Belgium: ["Bruges", "Brussels", "Ghent"],
          France: ["Bordeaux", "Lille", "Paris"],
          USA: ["Los Angeles", "Minneapolis", "Washington"],
          Lebanon: ["Beirut", "Sidon", "Byblos"]
        };
      let grid;
      let change = false;
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: data,
                dataFields: ["Country: string", "City: string"]
              }),
              editing: {
                enabled: true,
                mode: "cell"
              },
              columns: [
                {
                  label: "Country",
                  dataField: "Country",
                  editor: {
                    template: "<smart-drop-down-list></smart-drop-down-list>",
                    onInit(row, column, editor) {
                      const dropDownList = editor.firstElementChild;
                      dropDownList.dataSource = [
                        "Belgium",
                        "France",
                        "USA",
                        "Lebanon"
                      ];
                      dropDownList.dropDownAppendTo = "body";
                      dropDownList.selectedValues = [
                        grid.rows[row].cells[0].value
                      ];
                      dropDownList.addEventListener("change", function() {
                        change = true;
                      });
                    },
                    onRender(row, column, editor) {
                      editor.firstElementChild.selectedValues = [
                        grid.rows[row].cells[0].value
                      ];
                    },
                    getValue() {
                      return this.firstElementChild.selectedValues[0];
                    }
                  }
                },
                {
                  label: "City",
                  dataField: "City",
                  editor: {
                    template: "<smart-drop-down-list></smart-drop-down-list>",
                    onInit(row, column, editor) {
                      const dropDownList = editor.firstElementChild;
                      dropDownList.dropDownAppendTo = "body";
                      dropDownList.placeholder = "Select a city...";
                    },
                    onRender(row, column, editor) {
                      const countryValue = grid.rows[row].cells[0].value,
                        citiesSource = cities[countryValue],
                        dropDownList = editor.firstElementChild;
                      dropDownList.dataSource = citiesSource;
                      dropDownList.selectedValues = [
                        grid.rows[row].cells[1].value
                      ];
                    },
                    getValue() {
                      return (
                        this.firstElementChild.selectedValues[0] ||
                        "Select a city..."
                      );
                    }
                  }
                }
              ]
            };
          }
        }
      );

      grid = document.getElementById("grid");
      grid.addEventListener("endEdit", function(event) {
        const detail = event.detail;
        if (detail.column.dataField === "Country" && change) {
          detail.row.cells[1].value = "Select a city...";
        }
        change = false;
      });
    });
  }
};
</script>

<style>
@media only screen and (max-width: 700px) {
  smart-grid {
    width: 100%;
  }
}

smart-grid {
  height: auto;
}
</style>
