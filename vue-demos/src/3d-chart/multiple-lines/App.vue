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
        { month: 'Jan', south: 500, west: 400, east: 1300, north: 1000 },
        { month: 'Feb', south: 1500, west: 800, east: 1600, north: 1000 },
        { month: 'Mar', south: 2000, west: 800, east: 1400, north: 900 },
        { month: 'Apr', south: 2500, west: 700, east: 1600, north: 1300 },
        { month: 'May', south: 3000, west: 900, east: 2300, north: 1400 },
      ];

      Smart(
        '#chart',
        class {
          get properties() {
            return {
              caption: 'Revenue by Month and Region',
              description: '',
              showLegend: true,
              cameraPosition: {
                x: 30,
                y: 30,
                z: 70,
              },
              dataSource: sampleData,
              colorScheme: 'scheme01',
              xAxis: {
                dataField: 'month',
              },
              gridOptions: {
                slotWidthZ: 8,
              },
              valueAxis: {
                unitInterval: 600,
                maxValue: 3000,
                minValue: 0,
                formatSettings: {
                  prefix: '$',
                }
              },
              seriesGroups: [
                {
                  type: 'line',

                  series: [
                    { dataField: 'south', displayText: 'South' },
                    { dataField: 'west', displayText: 'West' },
                    { dataField: 'east', displayText: 'East' },
                    { dataField: 'north', displayText: 'North' },
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