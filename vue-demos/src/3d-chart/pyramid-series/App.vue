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
        { Browser: "Samsung Internet", Share: 14.02 },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              autoRotate: false,
              caption: "Desktop browsers share",
              description: "(source: gs.statcounter.com)",
              showLegend: true,
              legendLayout: {
                left: 10,
                flow: "vertical",
              },
              cameraPosition: {
                x: 10,
                y: 15,
                z: 35,
              },
              dataSource: source,
              colorScheme: "scheme01",
              seriesGroups: [
                {
                  type: "pyramid",
                  showLabels: true,
                  series: [
                    {
                      dataField: "Share",
                      displayText: "Browser",
                      width: 40,
                      height: 30,
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