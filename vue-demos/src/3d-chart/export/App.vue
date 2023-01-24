<template>
  <div class="vue-root">
    <div class="container">
      <smart-3d-chart id="chart"></smart-3d-chart>
    </div>
    <div class="options">
      <div class="caption">Chart Export</div>
      <div class="option">
        <smart-check-box id="legend" checked>Include Legend</smart-check-box>
        <br /><br />
        <smart-check-box id="caption" checked>Include Caption</smart-check-box>
        <br /><br />
      </div>
      <div class="option">
        <smart-button id="btn1">Export as PDF</smart-button>
        <br /><br />
        <smart-button id="btn2">Export as PNG</smart-button>
        <br /><br />
        <smart-button id="btn3">Export as JPEG</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.3dchart.js";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const source = [
        { Browser: "Chrome", Share: 48.13 },
        { Browser: "Safari", Share: 32.21 },
        { Browser: "Edge", Share: 7.79 },
        { Browser: "Samsung Internet", Share: 4.02 },
        { Browser: "Firefox", Share: 3.74 },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              autoRotate: false,
              caption: "Desktop browsers share",
              description: "(source: gs.statcounter.com)",
              showLegend: true,
              legendLayout: {
                flow: "vertical",
              },
              cameraPosition: {
                y: 18,
                z: 20,
              },
              dataSource: source,
              colorScheme: "scheme01",
              seriesGroups: [
                {
                  type: "pie",
                  showLabels: true,
                  series: [
                    {
                      dataField: "Share",
                      displayText: "Browser",
                      initialAngle: 0,
                      radius: 15,
                      labelRadius: 17,
                      centerOffset: 0,
                      height: 1.5,
                      formatFunction: function (value) {
                        if (isNaN(value)) {
                          // Legend labels formatting
                          return value;
                        }

                        return parseFloat(value).toFixed(2) + "%";
                      },
                    },
                  ],
                },
              ],
            };
          }
        }
      );

      document
        .getElementById("btn1")
        .addEventListener("click", function (event) {
          var chart = document.getElementById("chart");
          var includeLegend = document.getElementById("legend").checked;
          var includeCaption = document.getElementById("caption").checked;
          chart.saveAsPDF("myChart", includeLegend, includeCaption);
        });
      document
        .getElementById("btn2")
        .addEventListener("click", function (event) {
          var chart = document.getElementById("chart");
          var includeLegend = document.getElementById("legend").checked;
          var includeCaption = document.getElementById("caption").checked;
          chart.saveAsPNG("myChart", includeLegend, includeCaption);
        });
      document
        .getElementById("btn3")
        .addEventListener("click", function (event) {
          var chart = document.getElementById("chart");
          var includeLegend = document.getElementById("legend").checked;
          var includeCaption = document.getElementById("caption").checked;
          chart.saveAsJPEG("myChart", includeLegend, includeCaption);
        });
    });
  },
};
</script>
<style>
#chart {
  width: 80%;
  max-width: 1000px;
  height: 600px;
}
</style>