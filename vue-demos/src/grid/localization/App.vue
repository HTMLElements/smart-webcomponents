<template>
  <div class="vue-root">
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Language:</div>
      <div class="option">
        <br />
        <smart-radio-button class="language" id="enUK">English (UK)</smart-radio-button>
        <br />
        <smart-radio-button class="language" id="enUS">English (USA)</smart-radio-button>
        <br />
        <smart-radio-button class="language" id="de" checked>Deutsch</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const columnLabels = {
        en: {
          firstName: "First Name",
          lastName: "Last Name",
          date: "Date",
          price: "Price",
          quantity: "Quantity",
          total: "Total"
        },
        de: {
          firstName: "Vorname",
          lastName: "Familienname",
          price: "Preis",
          quantity: "Quantität",
          date: "Datum",
          total: "Gesamt"
        }
      };

      const radioButtons = document.querySelectorAll(
        "smart-radio-button.language"
      );
      const grid = document.getElementById("grid");
      // Defines the number format.
      const setFormat = function(column, locale) {
        if (column.dataField === "total" || column.dataField === "price") {
          column.formatSettings = {
            Intl: {
              NumberFormat: {
                style: "currency",
                currency:
                  locale === "de" ? "EUR" : locale === "enUK" ? "GBP" : "USD"
              }
            }
          };
        }
        if (column.dataField === "date") {
          column.formatSettings = {
            Intl: {
              DateTimeFormat: {
                dateStyle: "full"
              }
            }
          };
        }
      };
      for (let i = 0; i < radioButtons.length; i++) {
        const radioButton = radioButtons[i];
        radioButton.addEventListener("change", function(event) {
          const radioButton = event.target;
          // apply localization.
          if (event.detail.value) {
            // begin updating the grid.
            grid.beginUpdate();
            const locale = radioButton.id !== "de" ? "en" : "de";
            const columns = grid.columns;
            grid.locale = locale;
            for (let i = 0; i < columns.length; i++) {
              const column = columns[i];
              column.label = columnLabels[locale][column.dataField];
              setFormat(column, radioButton.id);
            }
            // end update and refresh.
            grid.endUpdate(false);
          }
        });
      }
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              sorting: {
                enabled: true
              },
              locale: "de",
              messages: {
                en: {
                  columnMenuItemSortAsc: "Sort {{mode}}",
                  columnMenuItemSortDesc: "Sort {{mode}}",
                  columnMenuItemRemoveSort: "Remove Sort"
                },
                de: {
                  columnMenuItemSortAsc: "Sortieren {{mode}}",
                  columnMenuItemSortDesc: "Sortieren {{mode}}",
                  columnMenuItemRemoveSort: "Sortierung entfernen"
                }
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(50),
                dataFields: [
                  "id: number",
                  "firstName: string",
                  "lastName: string",
                  "quantity: number",
                  "price: number",
                  "date: date",
                  "total: number"
                ]
              }),
              columns: [
                {
                  label: columnLabels["de"].firstName,
                  dataField: "firstName"
                },
                {
                  label: columnLabels["de"].lastName,
                  dataField: "lastName"
                },
                {
                  label: columnLabels["de"].date,
                  dataField: "date",
                  cellsFormat: "D",
                  formatSettings: {
                    Intl: {
                      DateTimeFormat: {
                        dateStyle: "full"
                      }
                    }
                  }
                },
                {
                  label: columnLabels["de"].quantity,
                  dataField: "quantity"
                },
                {
                  label: columnLabels["de"].price,
                  dataField: "price",
                  cellsFormat: "c2",
                  formatSettings: {
                    Intl: {
                      NumberFormat: {
                        style: "currency",
                        currency: "EUR"
                      }
                    }
                  }
                },
                {
                  label: columnLabels["de"].total,
                  dataField: "total",
                  cellsFormat: "c2",
                  formatSettings: {
                    Intl: {
                      NumberFormat: {
                        style: "currency",
                        currency: "EUR"
                      }
                    }
                  }
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
  min-height: 700px;
}

smart-grid {
  width: 60%;
}
@media only screen and (max-width: 400px) {
  smart-grid {
    width: 100%;
  }
}
</style>
