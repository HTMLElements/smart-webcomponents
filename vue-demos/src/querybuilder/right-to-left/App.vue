<template>
  <div class="vue-root">
    <smart-query-builder id="queryBuilder" right-to-left locale="he"></smart-query-builder>
    <div class="options">
      <div class="option">
        <smart-check-box id="allowDrag" checked>Allow drag</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="showIcons" checked>Show icons in "Equals"</smart-check-box>
      </div>
    </div>
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
                  label: "מזהה",
                  dataField: "id",
                  dataType: "number"
                },
                {
                  label: "מוצר",
                  dataField: "productName",
                  dataType: "string"
                },
                {
                  label: "מחיר ליחידה",
                  dataField: "price",
                  dataType: "number"
                },
                {
                  label: "נקנה",
                  dataField: "purchased",
                  dataType: "datetime"
                },
                {
                  label: "זמין",
                  dataField: "available",
                  dataType: "boolean"
                }
              ],
              showIcons: true,
              value: [
                [
                  ["purchased", "=", new Date(2019, 0, 4)],
                  "and",
                  ["productName", "<>", "צגים"],
                  "or",
                  ["productName", "isblank"]
                ],
                "and",
                [["available", "=", true], "and", ["price", "<", 1300]],
                "or",
                [["productName", "=", "טלוויזיות"], "and", ["price", "<", 4000]]
              ],
              messages: {
                he: {
                  add: "הוסף",
                  addCondition: "הוסף תנאי",
                  addGroup: "הוסף קבוצה",
                  and: "ו",
                  notand: "לא וגם",
                  or: "או",
                  notor: "לא אור",
                  "=": "שווים",
                  "<>": "לא שווה",
                  ">": "גדול מ",
                  ">=": "גדול מ או שווה ל",
                  "<": "פחות מ",
                  "<=": "פחות מ או שווה ל",
                  startswith: "מתחיל עם",
                  endswith: "נגמר עם",
                  contains: "מכיל",
                  notcontains: "לא מכיל",
                  isblank: "ריק",
                  isnotblank: "אינו ריק",
                  dateTabLabel: "תאריך",
                  timeTabLabel: "זמן",
                  queryLabel: "שאילתא"
                }
              }
            };
          }
        }
      );

      const queryBuilder = document.getElementById("queryBuilder");
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
smart-query-builder {
  display: inline-block;
}
</style>
