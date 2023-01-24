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
        { Day: 'Monday', Keith: 30, Erica: 15, George: 25, Monica: 20, Maria: 15, Average: 20 },
        { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30, Monica: 25, Maria: 20, Average: 38 },
        { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25, Monica: 10, Maria: 20, Average: 33 },
        { Day: 'Thursday', Keith: 35, Erica: 25, George: 45, Monica: 30, Maria: 30, Average: 31 },
        { Day: 'Friday', Keith: 20, Erica: 20, George: 25, Monica: 45, Maria: 30, Average: 52 },
        { Day: 'Saturday', Keith: 30, Erica: 20, George: 30, Monica: 60, Maria: 40, Average: 75 },
        { Day: 'Sunday', Keith: 60, Erica: 45, George: 90, Monica: 70, Maria: 50, Average: 73 }
      ];

      Smart(
        '#chart',
        class {
          get properties() {
            return {
              caption: 'Fitness & exercise weekly scorecard',
              description: 'Time spent in vigorous exercise by 3 people',
              showLegend: true,
              cameraPosition: {
                x: 15,
                y: 30,
                z: 70,
              },
              dataSource: sampleData,
              colorScheme: 'scheme29',
              xAxis: {
                dataField: 'Day',
              },
              valueAxis: {
                unitInterval: 10,
                minValue: 0,
                formatSettings: {
                  sufix: ' min',
                }
              },
              seriesGroups: [
                {
                  type: 'column',

                  series: [
                    { dataField: 'Keith', displayText: 'Keith' },
                    { dataField: 'Erica', displayText: 'Erica' },
                    { dataField: 'George', displayText: 'George' },
                  ],
                },
                {
                  type: 'line',
                  series: [
                      { dataField: 'Average', displayText: 'Average' }
                  ]
                }
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