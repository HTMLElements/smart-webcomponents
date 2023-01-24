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
      const source = [
        { Browser: "Chrome", Share: 48.13 },
        { Browser: "Safari", Share: 32.21 },
        { Browser: "Edge", Share: 7.79 },
        { Browser: "Samsung Internet", Share: 4.02 },
        { Browser: "Firefox", Share: 3.74 },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Desktop browsers share",
              description: "(source: gs.statcounter.com)",
              showLegend: true,
              legendLayout: {
                flow: "vertical",
              },
              cameraPosition: {
                y: 18,
                z: 20,
              },
              dataSource: source,
              colorScheme: "scheme01",
              seriesGroups: [
                {
                  type: "pie",
                  showLabels: true,
                  series: [
                    {
                      dataField: "Share",
                      displayText: "Browser",
                      initialAngle: 40,
                      radius: 15,
                      labelRadius: 17,
                      centerOffset: 0,
                      height: 2,
                      formatFunction: function (value) {
                        if (isNaN(value)) {
                          // Legend labels formatting
                          return value;
                        }

                        return parseFloat(value) + "%";
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