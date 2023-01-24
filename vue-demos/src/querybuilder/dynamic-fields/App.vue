<template>
  <div class="vue-root">
    <smart-query-builder id="queryBuilder"></smart-query-builder>
    <div id="filterQueryValue"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
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
                  dataType: "number",
                  filterOperations: ["=", "<", ">"]
                },
                {
                  label: "Product",
                  dataField: "productName",
                  dataType: "string",
                  filterOperations: ["="]
                },
                {
                  label: "Product code",
                  dataField: "productCode",
                  dataType: "string"
                },
                {
                  label: "Unit Price",
                  dataField: "price",
                  dataType: "number"
                },
                {
                  label: "Produced",
                  dataField: "produced",
                  dataType: "date",
                  filterOperations: ["<", ">"]
                },
                {
                  label: "Purchased",
                  dataField: "purchased",
                  dataType: "dateTime"
                },
                {
                  label: "Available",
                  dataField: "available",
                  dataType: "boolean"
                }
              ],
              fieldsMode: "dynamic",
              showIcons: true,
              value: [
                [["customField", "<", 3], "or", ["id", "=", 3000]],
                "and",
                [["price", "<", 1300]],
                "or",
                [
                  ["produced", ">", new Date(2015, 3, 4)],
                  "and",
                  ["purchased", ">=", new Date(2019, 4, 23, 15, 33)]
                ]
              ],
              getDynamicField: function(field) {
                if (field === "customField") {
                  return {
                    label: "Custom Field",
                    dataField: field,
                    dataType: "number",
                    filterOperations: ["<", ">"]
                  };
                }
                return {
                  label: field,
                  dataField: field.toLowerCase(),
                  dataType: "string",
                  filterOperations: ["=", "startswith", "endswith"]
                };
              }
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
    });
  }
};
</script>

<style>
#filterQueryValue {
  position: absolute;
  width: 20%;
  right: 8px;
  top: 8px;
  white-space: pre;
  border: 1px dashed;
  padding: 10px;
}

.container {
  display: flex;
  flex-direction: row;
}
</style>
