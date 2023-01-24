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
        { Month: "Jan", y2021: 140, y2022: 180, y2020: 100 },
        { Month: "Feb", y2021: 120, y2022: 160, y2020: 80 },
        { Month: "Mar", y2021: 100, y2022: 140, y2020: 60 },
        { Month: "Apr", y2021: 180, y2022: 200, y2020: 140 },
        { Month: "May", y2021: 220, y2022: 240, y2020: 180 },
        { Month: "Jun", y2021: 200, y2022: 220, y2020: 160 },
        { Month: "Jul", y2021: 175, y2022: 230, y2020: 135 },
        { Month: "Aug", y2021: 160, y2022: 210, y2020: 120 },
        { Month: "Sep", y2021: 200, y2022: 190, y2020: 160 },
        { Month: "Oct", y2021: 180, y2022: 170, y2020: 140 },
        { Month: "Nov", y2021: 160, y2022: 210, y2020: 120 },
        { Month: "Dec", y2021: 165, y2022: 140, y2020: 125 },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Store Sales Per Month for 2020-2022",
              description: "",
              showLegend: true,
              cameraPosition: {
                x: 30,
                y: 30,
                z: 70,
              },
              dataSource: sampleData,
              colorScheme: "scheme01",
              xAxis: {
                dataField: "Month",
              },
              gridOptions: {
                slotWidthZ: 10,
              },
              valueAxis: {
                unitInterval: 20,
              },
              seriesGroups: [
                {
                  type: "spline",
                  series: [
                    { dataField: "y2020", displayText: "2020" },
                    { dataField: "y2021", displayText: "2021" },
                    { dataField: "y2022", displayText: "2022" },
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