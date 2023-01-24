<template>
  <div class="vue-root">
    <smart-query-builder id="queryBuilder"></smart-query-builder>
    <div class="options">
      <div class="option">
        <smart-check-box id="allowDrag" checked>Allow drag</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="showIcons" checked>Show icons in "Equals"</smart-check-box>
      </div>
      <div class="option"></div>
    </div>
    <div id="filterQueryValue"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.querybuilder.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#queryBuilder",
        class {
          get properties() {
            return {
              allowDrag: true,
              fields: [
                {
                  label: "Id",
                  dataField: "id",
                  dataType: "number"
                },
                {
                  label: "Product",
                  dataField: "productName",
                  dataType: "string"
                },
                {
                  label: "Unit Price",
                  dataField: "price",
                  dataType: "number"
                },
                {
                  label: "Purchased",
                  dataField: "purchased",
                  dataType: "datetime"
                },
                {
                  label: "Available",
                  dataField: "available",
                  dataType: "boolean"
                }
              ],
              showIcons: true,
              value: [
                [
                  ["purchased", "=", new Date(2019, 0, 4)],
                  "and",
                  ["productName", "<>", "Monitors"],
                  "or",
                  ["productName", "isblank"]
                ],
                "and",
                [["available", "=", true], "and", ["price", "<", 1300]],
                "or",
                [
                  ["productName", "=", "Televisions"],
                  "and",
                  ["price", "<", 4000]
                ]
              ]
            };
          }
        }
      );

      const queryBuilder = document.getElementById("queryBuilder"),
        filterQueryValue = document.getElementById("filterQueryValue");
      queryBuilder.whenRendered(() => {
        filterQueryValue.innerHTML = JSON.stringify(
          queryBuilder.value,
          null,
          "\t"
        );
      });

      queryBuilder.addEventListener("change", function() {
        filterQueryValue.innerHTML = JSON.stringify(
          queryBuilder.value,
          null,
          "\t"
        );
      });
      document
        .getElementById("allowDrag")
        .addEventListener("change", function(event) {
          queryBuilder.allowDrag = event.detail.value;
        });
      document
        .getElementById("showIcons")
        .addEventListener("change", function(event) {
          queryBuilder.showIcons = event.detail.value;
        });
    });
  }
};
</script>

<style>
body {
  height: 1000px;
}

#filterQueryValue {
  max-width: 60%;
  margin-top: 50px;
}
</style>
