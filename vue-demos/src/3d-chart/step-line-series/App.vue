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
      let startingDate = new Date("2022-01-01");
      for (let i = 0; i < 20; i++) {
        startingDate.setDate(startingDate.getDate() + 1);
        let fomrattedDate =
          startingDate.getDate() + "/" + (startingDate.getMonth() + 1);
        let obj = {
          Day: fomrattedDate,
          AMZN: Math.floor(Math.random() * 15) + 40,
          GOOG: Math.floor(Math.random() * 20) + 40,
          AAPL: Math.floor(Math.random() * 10) + 40,
        };
        sampleData.push(obj);
      }

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              autoRotate: false,
              caption: "Stock Changes in January 2022",
              description: "Generated with random data",
              showLegend: true,
              cameraPosition: {
                x: 25,
                y: 40,
                z: 70,
              },
              dataSource: sampleData,
              colorScheme: "scheme01",
              xAxis: {
                dataField: "Day",
                gridLines: {
                  visible: true,
                },
              },
              gridOptions: {
                slotWidthZ: 10,
                width: 120,
                height: 40,
              },
              valueAxis: {
                unitInterval: 15,
                minValue: 0,
                maxValue: 100,
                formatFunction: (value) => {
                  return parseFloat(value).toFixed(2) + "$";
                },
              },
              seriesGroups: [
                {
                  type: "stepline",

                  series: [
                    { dataField: "GOOG", displayText: "GOOG" },
                    { dataField: "AMZN", displayText: "AMZN" },
                    { dataField: "AAPL", displayText: "AAPL" },
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