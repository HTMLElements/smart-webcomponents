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
      const sampleData = [
        { Month: "Q1 2021", AAPL: 0.5, AMZN: 0.6 },
        { Month: "Q2 2021", AAPL: 0.9, AMZN: -0.2 },
        { Month: "Q3 2021", AAPL: -0.4, AMZN: -0.5 },
        { Month: "Q4 2021", AAPL: 0.6, AMZN: 0.2 },
        { Month: "Q1 2022", AAPL: 0.1, AMZN: 0.4 },
        { Month: "Q2 2022", AAPL: -0.2, AMZN: 0.1 },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              autoRotate: false,
              caption: "Stock Changes in Financial Quaters",
              description: "",
              showLegend: false,
              cameraPosition: {
                x: 30,
                y: 40,
                z: 70,
              },
              dataSource: sampleData,
              colorScheme: "scheme01",
              xAxis: {
                dataField: "Month",
              },
              gridOptions: {
                slotWidthZ: 17,
                width: 100,
                height: 60,
              },
              valueAxis: {
                unitInterval: 0.2,
                minValue: -1,
                maxValue: 1,
                baselineValue: 0,
                formatSettings: {
                  sufix: "%",
                  decimalPlaces: 2,
                },
              },
              seriesGroups: [
                {
                  type: "column",

                  series: [
                    { dataField: "AAPL", displayText: "AAPL" },
                    { dataField: "AMZN", displayText: "AMZN" },
                  ],
                  colorFunction: function (value) {
                    return value < 0 ? "#E25848" : "#61D14F";
                  },
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