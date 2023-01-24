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
          Planet: "Earth",
          Radius: 6371,
        },
        {
          Planet: "Moon",
          Radius: 1737,
        },
        {
          Planet: "Jupiter",
          Radius: 70000,
        },
        {
          Planet: "Neptune",
          Radius: 24600,
        },
        {
          Planet: "Sun",
          Radius: 696340,
        },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Logarithmic Comparison of planetary objects in base 10",
              description: "Radius in kilometres",
              showLegend: false,
              cameraPosition: {
                x: 55,
                y: 25,
                z: 60,
              },
              dataSource: sampleData,
              colorScheme: "scheme32",
              gridOptions: {
                height: 60,
                dynamicWidth: false,
                slotWidthX: 90,
                slotWidthZ: 30,
              },
              xAxis: {
                dataField: "Planet",
              },
              valueAxis: {
                formatFunction: function (value) {
                  return value.toFixed(2) + " km";
                },
                logarithmicScale: true,
                logarithmicScaleBase: 10,
              },
              seriesGroups: [
                {
                  type: "bar",
                  series: [
                    {
                      dataField: "Radius",
                      displayText: "",
                      formatSettings: {
                        prefix: "Radius: ",
                        suffix: " km",
                        thousandsSeparator: ",",
                      },
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