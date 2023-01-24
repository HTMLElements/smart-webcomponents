<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >This demo shows the right-to-left layout support of smart-pivot-table.</div>
    <smart-pivot-table id="pivotTable"></smart-pivot-table>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.pivottable.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const messages = {
        en: {
          add: "Add condition",
          all: "All columns",
          apply: "Apply",
          between: "Between",
          calculation: "Calculation",
          cancel: "Cancel",
          center: "center",
          clear: "Clear",
          clearFilter: "Clear filter",
          close: "Close",
          column: "Column:",
          columns: "Columns",
          columnSettings: "Column settings",
          condition: "Condition:",
          conditionalFormatting: "Conditional Formatting",
          CONTAINS_CASE_SENSITIVE: "contains (case sensitive)",
          CONTAINS: "contains",
          decimalPlaces: "Decimal places",
          decimalSeparator: "Decimal separator",
          details: "Details",
          DOES_NOT_CONTAIN_CASE_SENSITIVE: "does not contain (case sensitive)",
          DOES_NOT_CONTAIN: "does not contain",
          dragHerePivots: "Drag here to set pivots",
          dragHereRowGroups: "Drag here to set row groups",
          dragHereSummaries: "Drag here to set summaries",
          EMPTY: "empty",
          ENDS_WITH_CASE_SENSITIVE: "ends with (case sensitive)",
          ENDS_WITH: "ends with",
          EQUAL_CASE_SENSITIVE: "equal (case sensitive)",
          equal: "Equal To",
          EQUAL: "equal",
          fields: "Fields",
          filter: "Filter",
          filterCondition: "Filter condition",
          filterPlaceholder: "Filter",
          filters: "Filters",
          firstButton: "First",
          fontFamily: "Font family:",
          ontSize: "Font size:",
          format: "Format:",
          formatColumn: "Format Column",
          grandTotal: "Grand Total",
          GREATER_THAN_OR_EQUAL: "greater than or equal",
          GREATER_THAN: "greater than",
          greaterThan: "Greater Than",
          groupHeader: "Group",
          highlight: "Highlight",
          invalidValue: "Invalid value",
          itemsPerPage: "Items per page:",
          lastButton: "Last",
          left: "left",
          LESS_THAN_OR_EQUAL: "less than or equal",
          LESS_THAN: "less than",
          lessThan: "Less Than",
          moveTo: "Move to",
          negativesInBrackets: "Negatives in brackets",
          nextButton: "Next",
          NOT_EMPTY: "not empty",
          NOT_EQUAL: "not equal",
          NOT_NULL: "not null",
          notApplicable: "N/A",
          notEqual: "Not Equal To",
          NULL: "null",
          numberAlignment: "Number alignment",
          numberFormat: "Number format",
          numberPrefix: "Number prefix",
          ok: "OK",
          pivots: "Pivots",
          previousButton: "Previous",
          remove: "Remove condition",
          right: "right",
          row: "Row",
          rowGroups: "Row Groups",
          sameSummaryFunctionRequired:
            'smartPivotTable: When "columnTotals" is enabled, all summary columns must have the same "summary" function set (e.g. \'{{example}}\').',
          search: "Search...",
          secondValue: "Second value:",
          showRows: "Show records where:",
          STARTS_WITH_CASE_SENSITIVE: "starts with (case sensitive)",
          STARTS_WITH: "starts with",
          summaries: "Summaries",
          summaryPrefix: "of",
          summaryRequired:
            'smartPivotTable: At least one column with "summary" is required.',
          text: "Text",
          textAlignment: "Text alignment",
          thousandsSeparator: "Thousands separator",
          total: "Total",
          value: "Value:",
          with: "with"
        },
        he: {
          add: "הוסף תנאי",
          all: "כל העמודות",
          apply: "להגיש מועמדות",
          between: "בֵּין",
          calculation: "תַחשִׁיב",
          cancel: "לְבַטֵל",
          center: "מֶרְכָּז",
          clear: "ברור",
          clearFilter: "נקה את המסנן",
          close: "סגור",
          column: "טור:",
          columns: "עמודים",
          columnSettings: "הגדרות עמודה",
          condition: "מַצָב:",
          conditionalFormatting: "עיצוב מותנה",
          CONTAINS_CASE_SENSITIVE: "מכיל (רגיש רישיות)",
          CONTAINS: "מכיל",
          decimalPlaces: "מקומות עשרוניים",
          decimalSeparator: "מפריד עשרוני",
          details: "פרטים",
          DOES_NOT_CONTAIN_CASE_SENSITIVE: "לא מכיל (רגיש רישיות)",
          DOES_NOT_CONTAIN: "לא מכיל",
          dragHerePivots: "גרור לכאן להגדרת צירים",
          dragHereRowGroups: "גרור לכאן להגדרת קבוצות שורות",
          dragHereSummaries: "גרור לכאן כדי לקבוע סיכומים",
          EMPTY: "ריק",
          ENDS_WITH_CASE_SENSITIVE: "מסתיים ב (רגיש רישיות)",
          ENDS_WITH: "נגמר עם",
          EQUAL_CASE_SENSITIVE: "שווה (רגיש לרישיות",
          equal: "שווה ל",
          EQUAL: "שווה",
          fields: "שדות",
          filter: "לְסַנֵן",
          filterCondition: "מצב סינון",
          filterPlaceholder: "לְסַנֵן",
          filters: "מסננים",
          firstButton: "ראשון",
          fontFamily: "משפחת גופן:",
          ontSize: "גודל גופן:",
          format: "פוּרמָט:",
          formatColumn: "עמוד עמוד",
          grandTotal: "סכום סופי",
          GREATER_THAN_OR_EQUAL: "גדול או שווה",
          GREATER_THAN: "גדול מ",
          greaterThan: "גדול מ",
          groupHeader: "קְבוּצָה",
          highlight: "שִׂיא",
          invalidValue: "ערך לא תקין",
          itemsPerPage: "פריטים לעמוד:",
          lastButton: "אחרון",
          left: "שמאלה",
          LESS_THAN_OR_EQUAL: "פחות מ או שווה",
          LESS_THAN: "פחות מ",
          lessThan: "פחות מ",
          moveTo: "לעבור ל",
          negativesInBrackets: "שלילי בסוגריים",
          nextButton: "הַבָּא",
          NOT_EMPTY: "לא ריק",
          NOT_EQUAL: "לא שווה",
          NOT_NULL: "לא ריק",
          notApplicable: "לא ישים",
          notEqual: "לא שווה ל",
          NULL: "null",
          numberAlignment: "יישור מספרים",
          numberFormat: "פורמט מספרים",
          numberPrefix: "קידומת מספרים",
          ok: "בסדר",
          pivots: "צירים",
          previousButton: "קודם",
          remove: "הסר את המצב",
          right: "ימין",
          row: "שׁוּרָה",
          rowGroups: "קבוצות שורה",
          sameSummaryFunctionRequired:
            'smartPivotTable: כאשר "columnTotals" מופעל, על כל עמודות הסיכום להיות מוגדרות באותה פונקציית "סיכום" (למשל \'{{דוגמה}} \').',
          search: "לחפש...",
          secondValue: "ערך שני:",
          showRows: "הצג רשומות היכן:",
          STARTS_WITH_CASE_SENSITIVE: "מתחיל עם (רגיש רישיות)",
          STARTS_WITH: "מתחיל עם",
          summaries: "סיכומים",
          summaryPrefix: "שֶׁל",
          summaryRequired:
            'smartPivotTable: דרושה לפחות עמודה אחת עם "summary".',
          text: "טֶקסט",
          textAlignment: "יישור טקסט",
          thousandsSeparator: "אלפי מפרידים",
          total: 'סה"כ',
          value: "ערך:",
          with: "עם"
        }
      };
      window.Smart(
        "#pivotTable",
        class {
          get properties() {
            return {
              conditionalFormatting: [
                {
                  column: "quantity",
                  condition: "greaterThan",
                  firstValue: 7,
                  text: "#FFFFFF",
                  highlight: "#6AA84F"
                },
                {
                  column: "quantity",
                  condition: "between",
                  firstValue: 1,
                  secondValue: 3,
                  fontSize: "10px",
                  text: "#FFFFFF",
                  highlight: "#CC0000"
                }
              ],
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
              locale: "he",
              messages: messages,
              toolbar: true,
              rightToLeft: true,
              columns: [
                {
                  label: "שם פרטי",
                  dataField: "firstName",
                  dataType: "string",
                  allowRowGroup: true,
                  rowGroup: true
                },
                {
                  label: "שם משפחה",
                  dataField: "lastName",
                  dataType: "string",
                  allowPivot: true,
                  allowRowGroup: true,
                  rowGroup: true
                },
                {
                  label: "שם מוצר",
                  dataField: "productName",
                  dataType: "string",
                  allowPivot: true,
                  pivot: true
                },
                {
                  label: "כַּמוּת",
                  dataField: "quantity",
                  dataType: "number",
                  summary: "sum"
                },
                {
                  label: "מחיר",
                  dataField: "price",
                  dataType: "number",
                  summary: "sum",
                  summarySettings: {
                    prefix: "$",
                    decimalPlaces: 2
                  }
                },
                {
                  label: "תאריך רכישה",
                  dataField: "date",
                  dataType: "date"
                } // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
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
.smart-pivot-table {
  max-height: 800px;
}
</style>
