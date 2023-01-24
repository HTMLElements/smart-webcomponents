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
        { Month: 0, y2019: 140, y2020: 150, y2021: 200 },
        { Month: 1, y2019: 120, y2020: 160, y2021: 180 },
        { Month: 2, y2019: 100, y2020: 120, y2021: 195 },
        { Month: 3, y2019: 180, y2020: 200, y2021: 220 },
        { Month: 4, y2019: 220, y2020: 220, y2021: 260 },
        { Month: 5, y2019: 200, y2020: 220, y2021: 240 },
        { Month: 6, y2019: 175, y2020: 200, y2021: 250 },
        { Month: 7, y2019: 160, y2020: 185, y2021: 230 },
        { Month: 8, y2019: 200, y2020: 150, y2021: 210 },
        { Month: 9, y2019: 180, y2020: 150, y2021: 190 },
        { Month: 10, y2019: 160, y2020: 190, y2021: 230 },
        { Month: 11, y2019: 165, y2020: 120, y2021: 160 },
      ];

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Store Sales",
              description: "Comparison for the last 3 years",
              cameraPosition: {
                x: 30,
                y: 30,
                z: 70,
              },
              dataSource: sampleData,
              colorScheme: "scheme01",
              xAxis: {
                dataField: "Month",
                formatFunction: (value) => {
                  return months[value];
                },
              },
              gridOptions: {
                slotWidthZ: 10,
              },
              valueAxis: {
                unitInterval: 20,
              },
              seriesGroups: [
                {
                  type: "line",

                  series: [
                    { dataField: "y2019", displayText: "2019" },
                    { dataField: "y2020", displayText: "2020" },
                    { dataField: "y2021", displayText: "2021" },
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