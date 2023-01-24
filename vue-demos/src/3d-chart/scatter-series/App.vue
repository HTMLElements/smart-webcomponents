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
      let sampleData1 = [];
      let sampleData2 = [];
      for (let i = 0; i < 150; i++) {
        sampleData1.push({
          valueY: Math.random() * 8 + 1,
          valueX: Math.random() * 8 + 1,
          valueZ: Math.random() * 8 + 1,
        });
        sampleData2.push({
          valueY: Math.random() * 8 + 1,
          valueX: Math.random() * 8 + 1,
          valueZ: Math.random() * 8 + 1,
        });
      }
      Smart(
        "#chart",
        class {
          get properties() {
            return {
              animation: "none",
              caption: "Research Sample",
              description: "",
              showLegend: true,
              cameraPosition: {
                x: 15,
                y: 10,
                z: 50,
              },
              colorScheme: "scheme32",
              showConnectionLines: false,
              xAxis: {
                dataField: "valueX",
                displayText: "X",
                unitInterval: 1,
                minValue: 0,
                maxValue: 10,
              },
              zAxis: {
                dataField: "valueZ",
                displayText: "Z",
                unitInterval: 1,
                minValue: 0,
                maxValue: 10,
              },
              valueAxis: {
                displayText: "Y",
                unitInterval: 1,
                minValue: 0,
                maxValue: 10,
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
                  dataSource: sampleData1,
                  series: [
                    {
                      dataField: "valueY",
                      displayText: "Type A",
                      symbolSize: 1.5,
                      symbolType: "triangle_down",
                      opacity: 1,
                    },
                  ],
                },
                {
                  type: "scatter",
                  dataSource: sampleData2,
                  series: [
                    {
                      dataField: "valueY",
                      displayText: "Type B",
                      symbolSize: 2,
                      symbolType: "triangle_up",
                      opacity: 1,
                    },
                  ],
                },
              ],
            };
          }
        }
      );
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