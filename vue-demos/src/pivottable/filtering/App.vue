<template>
  <div class="vue-root">
    <div class="demo-description">This demo shows how to filter smart-pivot-table programmatically.</div>
    <smart-pivot-table id="pivotTable"></smart-pivot-table>
    <div class="options">
      <div class="caption">Filter Pivot Table:</div>
      <div class="option">
        <smart-button id="filter1">"Espresso" only</smart-button>
      </div>
      <div class="option">
        <smart-button id="filter2">Quantity > 5 only</smart-button>
      </div>
      <div class="option">
        <smart-button id="filter3">First name "Andrew" or last name "Ohno"</smart-button>
      </div>
      <div class="option">
        <smart-button id="clearFilters" disabled>Clear filters</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.pivottable.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#pivotTable",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(25),
                dataFields: [
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "quantity: number",
                  "price: number",
                  "date: date"
                ]
              }),
              freezeHeader: true,
              keyboardNavigation: true,
              columns: [
                {
                  label: "First Name",
                  dataField: "firstName",
                  dataType: "string",
                  allowRowGroup: true,
                  rowGroup: true
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
        filter1 = document.getElementById("filter1"),
        filter2 = document.getElementById("filter2"),
        filter3 = document.getElementById("filter3"),
        clearFilters = document.getElementById("clearFilters");

      function enableAll() {
        filter1.disabled = false;
        filter2.disabled = false;
        filter3.disabled = false;
        clearFilters.disabled = false;
      }
      filter1.addEventListener("click", function() {
        const filterGroup = new window.Smart.Utilities.FilterGroup(),
          filterObject = filterGroup.createFilter(
            "string",
            "espresso",
            "CONTAINS"
          );
        filterGroup.addFilter("or", filterObject);
        pivotTable.clearFilters();
        pivotTable.addFilter("productName", filterGroup);
        enableAll();
        filter1.disabled = true;
      });
      filter2.addEventListener("click", function() {
        const filterGroup = new window.Smart.Utilities.FilterGroup(),
          filterObject = filterGroup.createFilter("number", 5, "GREATER_THAN");
        filterGroup.addFilter("or", filterObject);
        pivotTable.clearFilters();
        pivotTable.addFilter("quantity", filterGroup);
        enableAll();
        filter2.disabled = true;
      });
      filter3.addEventListener("click", function() {
        const filterGroup1 = new window.Smart.Utilities.FilterGroup(),
          filterObject1 = filterGroup1.createFilter(
            "string",
            "Andrew",
            "EQUAL"
          ),
          filterGroup2 = new window.Smart.Utilities.FilterGroup(),
          filterObject2 = filterGroup2.createFilter("string", "Ohno", "EQUAL");
        filterGroup1.addFilter("or", filterObject1);
        filterGroup2.addFilter("or", filterObject2);
        pivotTable.clearFilters();
        pivotTable.addFilter("firstName", filterGroup1);
        pivotTable.addFilter("lastName", filterGroup2);
        enableAll();
        filter3.disabled = true;
      });
      clearFilters.addEventListener("click", function() {
        pivotTable.clearFilters();
        enableAll();
        clearFilters.disabled = true;
      });
    });
  }
};
</script>

<style>
.smart-pivot-table {
  max-height: 800px;
}
</style>
