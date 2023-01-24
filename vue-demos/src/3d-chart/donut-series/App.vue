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
      const source = [{
        Browser: 'Chrome',
        Share: 55
      },
      {
        Browser: 'Safari',
        Share: 30
      },
      {
        Browser: 'Firefox',
        Share: 10
      },
      {
        Browser: 'Other',
        Share: 5
      },
    ];

    const source2 = [{
        Browser: 'Chrome',
        Share: 20
      },
      {
        Browser: 'Safari',
        Share: 40
      },
      {
        Browser: 'Firefox',
        Share: 10
      },
      {
        Browser: 'Android',
        Share: 10
      },
      {
        Browser: 'Other',
        Share: 20
      },
    ];

    Smart(
      '#chart',
      class {
        get properties() {
          return {
            autoRotate: false,
            caption: 'Desktop browsers share',
            description: '(source: gs.statcounter.com)',
            showLegend: true,
            legendLayout: {
              flow: 'vertical',
              left: 30,
            },
            cameraPosition: {
              y: 18,
              z: 20,
            },
            lightColor: 'white',
            backgroundColor: 'white',
            selectMode: 'one',
            colorScheme: 'scheme01',
            seriesGroups: [{
                type: 'donut',
                showLabels: false,
                dataSource: source,
                series: [{
                  dataField: 'Share',
                  displayText: 'Browser',
                  initialAngle: 0,
                  radius: 8,
                  centerOffset: 0,
                  width: 3,
                  height: 2,
                  formatFunction: function (value) {
                    if (isNaN(value)) {
                      // Legend labels formatting
                      return value;
                    }

                    return parseFloat(value).toFixed(2) + '%';
                  },
                }, ],
              },
              {
                type: 'donut',
                showLabels: false,
                dataSource: source2,
                formatSettings: {sufix: ' (mobile)'},
                series: [{
                  dataField: 'Share',
                  displayText: 'Browser',
                  initialAngle: 0,
                  radius: 15,
                  centerOffset: 0,
                  width: 4,
                  height: 2,
                  formatFunction: function (value) {
                    if (isNaN(value)) {
                      // Legend labels formatting
                      return value;
                    }

                    return parseFloat(value).toFixed(2) + '%';
                  },
                }
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