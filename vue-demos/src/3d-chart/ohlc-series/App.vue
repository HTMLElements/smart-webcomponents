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
          DOW: Math.floor(Math.random() * 200) + 100,
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
                x: 0,
                y: 10,
                z: 55,
              },
              dataSource: sampleData,
              colorScheme: "scheme29",
              xAxis: {
                dataField: "Date",
              },
              gridOptions: {
                slotWidthZ: 5,
              },
              valueAxis: {
                unitInterval: 100,
                minValue: 0,
              },
              seriesGroups: [
                {
                  type: "column",
                  series: [
                    {
                      dataField: "DOW",
                      displayText: "DOW Jones",
                    },
                  ],
                  colorFunction: function (value, itemIndex, serie, group) {
                    return value < 200 ? "#E25848" : "#61D14F";
                  },
                },
                {
                  type: "ohlc",

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
                  colorFunction: function (value, itemIndex, serie, group) {
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