<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >This demo showcases how to integrate Bootstrap components in smart-table.</div>
    <smart-table id="table"></smart-table>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.table.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const chemicalElementsData = [
        {
          number: 1,
          name: "Hydrogen",
          symbol: "H",
          weight: 1.008,
          abundance: 1400,
          originOfName: "Greek elements hydro- and -gen, 'water-forming'"
        },
        {
          number: 2,
          name: "Helium",
          symbol: "He",
          weight: 4.002602,
          abundance: 0.008,
          originOfName: "Greek hḗlios, 'sun'"
        },
        {
          number: 3,
          name: "Lithium",
          symbol: "Li",
          weight: 6.94,
          abundance: 20,
          originOfName: "Greek líthos, 'stone'"
        },
        {
          number: 4,
          name: "Beryllium",
          symbol: "Be",
          weight: 9.0121831,
          abundance: 2.8,
          originOfName:
            "Beryl, a mineral (ultimately from the name of Belur in southern India)"
        },
        {
          number: 5,
          name: "Boron",
          symbol: "B",
          weight: 10.81,
          abundance: 10,
          originOfName: "Borax, a mineral (from Arabic bawraq)"
        },
        {
          number: 6,
          name: "Carbon",
          symbol: "C",
          weight: 12.011,
          abundance: 200,
          originOfName: "Latin carbo, 'coal'"
        },
        {
          number: 7,
          name: "Nitrogen",
          symbol: "N",
          weight: 14.007,
          abundance: 19,
          originOfName: "Greek nítron and -gen, 'niter-forming'"
        },
        {
          number: 8,
          name: "Oxygen",
          symbol: "O",
          weight: 15.999,
          abundance: 461000,
          originOfName: "Greek oxy- and -gen, 'acid-forming'"
        },
        {
          number: 9,
          name: "Fluorine",
          symbol: "F",
          weight: 18.998403163,
          abundance: 585,
          originOfName: "Latin fluere, 'to flow'"
        },
        {
          number: 10,
          name: "Neon",
          symbol: "Ne",
          weight: 20.1797,
          abundance: 0.005,
          originOfName: "Greek néon, 'new'"
        }
      ];
      window.Smart(
        "#table",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: chemicalElementsData,
                dataFields: [
                  "number: number",
                  "name: string",
                  "symbol: string",
                  "weight: number",
                  "abundance: number",
                  "originOfName: string"
                ]
              }),
              columns: [
                {
                  label: "No.",
                  dataField: "number",
                  dataType: "number",
                  width: 50
                },
                {
                  label: "Name",
                  dataField: "name",
                  dataType: "string",
                  width: 200
                },
                {
                  label: "Symbol",
                  dataField: "symbol",
                  dataType: "string",
                  width: 150,
                  formatFunction(settings) {
                    settings.template = `<span class="badge badge-info">${settings.value}</span>`;
                  }
                },
                {
                  label: "Weight",
                  dataField: "weight",
                  dataType: "number",
                  width: 200
                },
                {
                  label: "Abundance",
                  dataField: "abundance",
                  dataType: "number",
                  width: 200,
                  formatFunction(settings) {
                    const logarithmicValue = Math.log10(settings.value);
                    settings.template = `<div class="progress">
<div class="progress-bar" role="progressbar" style="width: ${(logarithmicValue /
                      6) *
                      100}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;
                  }
                },
                {
                  label: "",
                  dataField: "originOfName",
                  dataType: "string",
                  width: 50,
                  formatFunction(settings) {
                    settings.template = `<span class="material-icons" data-placement="right" tabindex="1" data-trigger="focus" data-toggle="popover" title="Origin of name" data-content="${settings.value}">info</span>`;
                  }
                }
              ]
            };
          }
        }
      );

      const table = document.getElementById("table");
      table.whenRendered(() => {
        window.$('[data-toggle="popover"]').popover({
          boundary: "window"
        });
      });
    });
  }
};
</script>

<style>
.smart-table {
  width: 900px;
  margin: 8px;
}

span[data-toggle="popover"] {
  cursor: pointer;
  outline: none;
}
</style>
