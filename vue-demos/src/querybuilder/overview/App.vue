<template>
  <div class="vue-root">
    <div class="demo-description">
      The Query Builder component allows you to build complex quieries through
      UI. The output of the component is a JSON object with the query.
    </div>
    <smart-query-builder id="queryBuilder"></smart-query-builder>
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
body {
  height: 800px;
}
</style>
