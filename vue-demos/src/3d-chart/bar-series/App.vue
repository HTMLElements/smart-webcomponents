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
        {
          Year: "2008",
          Japan: 89.1,
          USA: 80.44,
          UK: 80.76,
          China: 46.54,
          Bulgaria: 71.62,
          India: 30.25,
        },
        {
          Year: "2009",
          Japan: 89.99,
          USA: 80.61,
          UK: 81.03,
          China: 47.88,
          Bulgaria: 71.96,
          India: 30.59,
        },
        {
          Year: "2010",
          Japan: 90.81,
          USA: 80.77,
          UK: 81.3,
          China: 49.23,
          Bulgaria: 72.3,
          India: 30.93,
        },
        {
          Year: "2011",
          Japan: 91.07,
          USA: 80.94,
          UK: 81.57,
          China: 50.51,
          Bulgaria: 72.64,
          India: 31.28,
        },
        {
          Year: "2012",
          Japan: 91.15,
          USA: 81.12,
          UK: 81.84,
          China: 51.76,
          Bulgaria: 72.97,
          India: 31.63,
        },
        {
          Year: "2013",
          Japan: 91.23,
          USA: 81.3,
          UK: 82.1,
          China: 53.01,
          Bulgaria: 73.31,
          India: 32,
        },
        {
          Year: "2014",
          Japan: 91.3,
          USA: 81.48,
          UK: 82.36,
          China: 54.26,
          Bulgaria: 73.65,
          India: 32.38,
        },
        {
          Year: "2015",
          Japan: 91.38,
          USA: 81.67,
          UK: 82.63,
          China: 55.5,
          Bulgaria: 73.99,
          India: 32.78,
        },
        {
          Year: "2016",
          Japan: 91.46,
          USA: 81.86,
          UK: 82.89,
          China: 56.74,
          Bulgaria: 74.33,
          India: 33.18,
        },
        {
          Year: "2017",
          Japan: 91.54,
          USA: 82.06,
          UK: 83.14,
          China: 57.96,
          Bulgaria: 74.67,
          India: 33.6,
        },
        {
          Year: "2018",
          Japan: 91.62,
          USA: 82.26,
          UK: 83.4,
          China: 59.15,
          Bulgaria: 75.01,
          India: 34.03,
        },
        {
          Year: "2019",
          Japan: 91.7,
          USA: 82.46,
          UK: 83.65,
          China: 60.31,
          Bulgaria: 75.35,
          India: 34.47,
        },
        {
          Year: "2020",
          Japan: 91.78,
          USA: 82.66,
          UK: 83.9,
          China: 61.43,
          Bulgaria: 75.69,
          India: 34.93,
        },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Percentage of population living in urban areas",
              description: "Change since 2008",
              showLegend: true,
              cameraPosition: {
                x: 40,
                y: 20,
                z: 55,
              },
              gridOptions: {
                height: 40,
                dynamicWidth: false,
                slotWidthX: 90,
                slotWidthZ: 10,
              },
              cameraAnimationSpeed: 2,
              dataSource: sampleData,
              colorScheme: "scheme32",
              xAxis: {
                dataField: "Year",
              },
              valueAxis: {
                unitInterval: 10,
                maxValue: 100,
                minValue: 40,
                formatSettings: {
                  sufix: "%",
                },
              },
              seriesGroups: [
                {
                  type: "bar",
                  series: [
                    { dataField: "Japan", displayText: "Japan" },
                    { dataField: "USA", displayText: "USA" },
                    { dataField: "China", displayText: "China" },
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