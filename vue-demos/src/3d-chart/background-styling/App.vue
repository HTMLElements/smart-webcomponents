<template>
  <div class="vue-root">
    <div class="container">
      <smart-3d-chart id="chart"></smart-3d-chart>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.3dchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      let habitable = [];
      let nonHabitable = [];
      for (let i = 0; i < 25; i++) {
        habitable.push({
          valueY: Math.random() * 19 - 10,
          valueX: Math.random() * 19 - 10,
          valueZ: Math.random() * 19 - 10,
        });

        nonHabitable.push({
          valueY: Math.random() * 19 - 10,
          valueX: Math.random() * 19 - 10,
          valueZ: Math.random() * 19 - 10,
        });

        nonHabitable.push({
          valueY: Math.random() * 19 - 10,
          valueX: Math.random() * 19 - 10,
          valueZ: Math.random() * 19 - 10,
        });
      }
      let sunData = [{ valueY: 0, valueX: 0, valueZ: 0 }];
      Smart(
        "#chart",
        class {
          get properties() {
            return {
              animation: "none",
              caption: "Stars Map - Planetary systems near the Sun",
              description: "Distance in light years",
              showLegend: true,
              backgroundTexture: [
                "../../images/stars.jpg",
                "../../images/stars.jpg",
                "../../images/stars.jpg",
                "../../images/stars.jpg",
                "../../images/stars.jpg",
                "../../images/stars.jpg",
              ],
              cameraPosition: {
                x: 10,
                y: 10,
                z: 57,
              },
              colorScheme: "scheme32",
              xAxis: {
                dataField: "valueX",
                displayText: "X",
                minValue: -10,
                maxValue: 10,
              },
              zAxis: {
                dataField: "valueZ",
                displayText: "Z",
                minValue: -10,
                maxValue: 10,
              },
              valueAxis: {
                unitInterval: 2,
                minValue: -10,
                maxValue: 10,
                formatSettings: {
                  sufix: "ly",
                },
                displayText: "Y",
              },
              toolTipFormatSettings: {
                decimalPlaces: 2,
              },
              gridOptions: {
                width: 50,
              },
              seriesGroups: [
                {
                  type: "scatter",
                  dataSource: habitable,
                  series: [
                    {
                      dataField: "valueY",
                      displayText: "Habitable",
                      symbolSize: 1,
                      symbolType: "circle",
                      opacity: 1,
                    },
                  ],
                },
                {
                  type: "scatter",
                  dataSource: nonHabitable,
                  series: [
                    {
                      dataField: "valueY",
                      displayText: "Non-Habitable",
                      symbolSize: 1,
                      symbolType: "circle",
                      opacity: 1,
                    },
                  ],
                },
                {
                  type: "scatter",
                  dataSource: sunData,
                  series: [
                    {
                      dataField: "valueY",
                      displayText: "The Solar System",
                      symbolSize: 1.5,
                      symbolType: "circle",
                      opacity: 1,
                    },
                  ],
                },
              ],
            };
          }
        }
      );

      let chart = document.getElementById("chart");
      document.querySelectorAll(".radio-button").forEach((radioButton) => {
        radioButton.addEventListener("checkValue", (event) => {
          clearBackground(chart);
          if (event.target.id === "backgroundColor") {
            chart.backgroundColor = "white";
          } else if (event.target.id === "backgroundGradient") {
            chart.backgroundGradient = [
              "0, #ffffff",
              "0.5, #e6e6e6",
              "1, #ffffff",
            ];
          } else if (event.target.id === "backgroundImage") {
            chart.backgroundImage = "../../images/stars.jpg";
          } else if (event.target.id === "backgroundTexture") {
            chart.backgroundTexture = [
              "../../images/stars.jpg",
              "../../images/stars.jpg",
              "../../images/stars.jpg",
              "../../images/stars.jpg",
              "../../images/stars.jpg",
              "../../images/stars.jpg",
            ];
          }
        });
      });

      function clearBackground(chart) {
        chart.backgroundColor = "";
        chart.backgroundImage = "";
        chart.backgroundGradient = [];
        chart.backgroundTexture = [];
      }
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