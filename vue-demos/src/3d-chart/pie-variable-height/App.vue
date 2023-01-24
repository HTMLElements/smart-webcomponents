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
        { Browser: "Chrome", Share: 48.13, Growth: 2 },
        { Browser: "Safari", Share: 32.21, Growth: 2.6 },
        { Browser: "Edge", Share: 7.79, Growth: 2.4 },
        { Browser: "Samsung Internet", Share: 4.02, Growth: 1.7 },
        { Browser: "Firefox", Share: 3.74, Growth: 1 },
        { Browser: "Other", Share: 3.71, Growth: 1.4 },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              autoRotate: false,
              caption: "Desktop browsers share",
              description: "Growth is represtented vertically",
              showLegend: true,
              legendLayout: {
                flow: "vertical",
                left: 30,
              },
              cameraPosition: {
                y: 15,
                z: 20,
              },
              dataSource: source,
              colorScheme: "scheme31",
              seriesGroups: [
                {
                  type: "pie",
                  showLabels: true,
                  series: [
                    {
                      dataField: "Share",
                      displayText: "Browser",
                      variableHeight: true,
                      variableHeightField: "Growth",
                      initialAngle: -60,
                      radius: 14,
                      labelRadius: 16,
                      centerOffset: 0,
                      height: 1,
                    },
                  ],
                  formatFunction: function (value) {
                    if (isNaN(value)) {
                      // Legend labels formatting
                      return value;
                    }

                    return parseFloat(value) + "%";
                  },
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