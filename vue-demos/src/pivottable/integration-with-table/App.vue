<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >This demo showcases how to integrate smart-pivot-table with smart-table.</div>
    <div id="mainContainer" class="table-mode">
      <div id="tableContainer">
        <smart-table id="table"></smart-table>
        <div id="panel">When Pivot Mode is enabled, the Pivot Table designer will appear here.</div>
      </div>
      <smart-pivot-table id="pivotTable" class="hidden"></smart-pivot-table>
      <div id="switchContainer">
        <smart-switch-button id="switchButton"></smart-switch-button>
        <div>Pivot Mode</div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.switchbutton.js";
import "smart-webcomponents/source/modules/smart.table.js";
import "smart-webcomponents/source/modules/smart.pivottable.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const data = window.generateData(25);

      function getSettings() {
        return {
          dataSource: new window.Smart.DataAdapter({
            dataSource: data,
            dataFields: [
              "firstName: string",
              "lastName: string",
              "productName: string",
              "quantity: number",
              "price: number"
            ]
          }),
          freezeHeader: true,
          keyboardNavigation: true,
          columns: [
            {
              label: "First Name",
              dataField: "firstName",
              dataType: "string",
              allowRowGroup: true
            },
            {
              label: "Last Name",
              dataField: "lastName",
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
              dataType: "number"
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
            }
          ]
        };
      }
      window.Smart(
        "#table",
        class {
          get properties() {
            return getSettings();
          }
        }
      );
      window.Smart(
        "#pivotTable",
        class {
          get properties() {
            return Object.assign(getSettings(), {
              designer: true
            });
          }
        }
      );

      const switchButton = document.getElementById("switchButton"),
        mainContainer = document.getElementById("mainContainer"),
        table = document.getElementById("table"),
        pivotTable = document.getElementById("pivotTable");
      switchButton.addEventListener("change", function(event) {
        if (event.detail.value) {
          mainContainer.classList.remove("table-mode");
          mainContainer.classList.add("pivot-mode");
        } else {
          mainContainer.classList.remove("pivot-mode");
          mainContainer.classList.add("table-mode");
          if (
            JSON.stringify(pivotTable.columns.toArray(), ["dataField"]) !==
            JSON.stringify(table.columns.toArray(), ["dataField"])
          ) {
            table.columns = pivotTable.columns.toArray();
          }
        }
      });
    });
  }
};
</script>

<style>
#mainContainer {
  position: relative;
  width: 100%;
  height: 800px;
}

#mainContainer * {
  box-sizing: border-box;
}

#tableContainer,
#pivotTable {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#tableContainer {
  display: flex;
}

#table {
  width: calc(100% - var(--smart-pivot-panel-width));
  height: 100%;
}

#table > .smart-container {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

#panel {
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--smart-border-width) solid var(--smart-border);
  border-top-right-radius: var(--smart-border-top-right-radius);
  border-bottom-right-radius: var(--smart-border-bottom-right-radius);
  border-left: none;
  width: var(--smart-pivot-panel-width);
  height: 100%;
  padding: 50px;
  text-align: justify;
  font-family: var(--smart-font-family);
  font-size: 13px;
  font-style: italic;
}

#pivotTable smart-pivot-panel {
  margin-top: 50px;
  height: calc(100% - 50px);
}

#switchContainer {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  border-bottom: var(--smart-border-width) solid var(--smart-border);
  width: var(--smart-pivot-panel-width);
  height: 50px;
  font-family: var(--smart-font-family);
}

#switchButton {
  margin-left: 10px;
  margin-right: 10px;
}

#mainContainer.pivot-mode #table,
#mainContainer.table-mode #pivotTable {
  visibility: hidden;
  pointer-events: none;
}

#mainContainer.pivot-mode #switchContainer {
  box-shadow: -1px 0px 0px 0px var(--smart-border);
}
</style>
