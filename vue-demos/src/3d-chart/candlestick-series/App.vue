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
      let sampleData = [];
      let startingDate = new Date("2020-05-21");
      for (let i = 0; i < 50; i++) {
        startingDate.setDate(startingDate.getDate() + 1);
        let fomrattedDate =
          startingDate.getDate() + "/" + (startingDate.getMonth() + 1);
        let high = Math.floor(Math.random() * 100) + 500;
        do {
          var low = Math.floor(Math.random() * 100) + 400;
        } while (low >= high);
        do {
          var openPrice = Math.floor(Math.random() * 100) + 400;
        } while (openPrice > high || openPrice < low);
        do {
          var closePrice = Math.floor(Math.random() * 100) + 400;
        } while (closePrice > high || closePrice < low);

        sampleData.push({
          Date: fomrattedDate,
          SPClose: closePrice,
          SPOpen: openPrice,
          SPHigh: high,
          SPLow: low,
        });
      }

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Stock Prices Changes",
              description: "",
              showLegend: false,
              cameraPosition: {
                y: 10,
                z: 45,
              },
              dataSource: sampleData,
              colorScheme: "scheme29",
              xAxis: {
                dataField: "Date",
              },
              valueAxis: {
                unitInterval: 100,
                minValue: 0,
                maxValue: 700,
                formatSettings: {
                  prefix: "$",
                },
              },
              gridOptions: {
                width: 80,
              },
              seriesGroups: [
                {
                  type: "candlestick",

                  series: [
                    {
                      dataFieldClose: "SPClose",
                      displayTextClose: "Close price",
                      dataFieldOpen: "SPOpen",
                      displayTextOpen: "Open price",
                      dataFieldHigh: "SPHigh",
                      displayTextHigh: "High price",
                      dataFieldLow: "SPLow",
                      displayTextLow: "Low price",
                      displayText: "S&P 500",
                    },
                  ],
                  colorFunction: function (value) {
                    return value.close > value.open ? "#E25848" : "#61D14F";
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