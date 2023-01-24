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
      let weatherSampleData = [
        {
          Day: "Monday",
          LondonLow: 10,
          LondonHigh: 18,
          NewYorkLow: 8,
          NewYorkHigh: 15,
          BerlinLow: 5,
          BerlinHigh: 20,
        },
        {
          Day: "Tuesday",
          LondonLow: 13,
          LondonHigh: 18,
          NewYorkLow: 6,
          NewYorkHigh: 15,
          BerlinLow: 9,
          BerlinHigh: 24,
        },
        {
          Day: "Wednesday",
          LondonLow: 11,
          LondonHigh: 20,
          NewYorkLow: 8,
          NewYorkHigh: 15,
          BerlinLow: 12,
          BerlinHigh: 22,
        },
        {
          Day: "Thursday",
          LondonLow: 12,
          LondonHigh: 18,
          NewYorkLow: 13,
          NewYorkHigh: 20,
          BerlinLow: 7,
          BerlinHigh: 20,
        },
        {
          Day: "Friday",
          LondonLow: 18,
          LondonHigh: 21,
          NewYorkLow: 14,
          NewYorkHigh: 19,
          BerlinLow: 4,
          BerlinHigh: 20,
        },
        {
          Day: "Saturday",
          LondonLow: 24,
          LondonHigh: 29,
          NewYorkLow: 10,
          NewYorkHigh: 15,
          BerlinLow: 10,
          BerlinHigh: 19,
        },
        {
          Day: "Sunday",
          LondonLow: 11,
          LondonHigh: 20,
          NewYorkLow: 8,
          NewYorkHigh: 15,
          BerlinLow: 16,
          BerlinHigh: 28,
        },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Weather Forecast for Upcoming Week",
              description: "Berlin, London, New York",
              showLegend: true,
              cameraPosition: {
                x: 30,
                y: 80,
                z: 70,
              },
              dataSource: weatherSampleData,
              colorScheme: "scheme01",
              xAxis: {
                dataField: "Day",
              },
              gridOptions: {
                slotWidthZ: 17,
                width: 120,
                height: 60,
              },
              valueAxis: {
                unitInterval: 8,
                minValue: 0,
                maxValue: 40,
                formatFunction: (value) => {
                  return value + "°C";
                },
              },
              seriesGroups: [
                {
                  type: "splinerangearea",

                  series: [
                    {
                      dataFieldFrom: "BerlinLow",
                      displayTextFrom: "Low",
                      dataFieldTo: "BerlinHigh",
                      displayTextTo: "High",
                      displayText: "Berlin",
                    },
                    {
                      dataFieldFrom: "LondonLow",
                      displayTextFrom: "Low",
                      dataFieldTo: "LondonHigh",
                      displayTextTo: "High",
                      displayText: "London",
                    },
                    {
                      dataFieldFrom: "NewYorkLow",
                      displayTextFrom: "Low",
                      dataFieldTo: "NewYorkHigh",
                      displayTextTo: "High",
                      displayText: "New York",
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