<template>
  <div class="vue-root">
    <smart-chart id="chart"></smart-chart>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.chart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sourceDesktop = [
          {
            Browser: "Chrome",
            Share: 68.95
          },
          {
            Browser: "Firefox",
            Share: 10.67
          },
          {
            Browser: "IE",
            Share: 6.42
          },
          {
            Browser: "Safari",
            Share: 5.35
          },
          {
            Browser: "Edge",
            Share: 4.2
          },
          {
            Browser: "Other",
            Share: 4.67
          }
        ],
        sourceMobile = [
          {
            Browser: "Chrome",
            Share: 54.84
          },
          {
            Browser: "Safari",
            Share: 19.16
          },
          {
            Browser: "UC Browser",
            Share: 11.33
          },
          {
            Browser: "Samsung Internet",
            Share: 5.71
          },
          {
            Browser: "Opera",
            Share: 4.53
          },
          {
            Browser: "Android",
            Share: 1.87
          },
          {
            Browser: "KaiOS",
            Share: 0.76
          },
          {
            Browser: "Firefox",
            Share: 0.38
          },
          {
            Browser: "QQ Browser",
            Share: 0.35
          },
          {
            Browser: "Other",
            Share: 1.07
          }
        ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Mobile & Desktop browsers share",
              description: "(source: gs.statcounter.com)",
              showLegend: true,
              showBorderLine: true,
              legendLayout: {
                left: 520,
                top: 170,
                width: 300,
                height: 200,
                flow: "vertical"
              },
              padding: {
                left: 5,
                top: 5,
                right: 5,
                bottom: 5
              },
              titlePadding: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 10
              },
              colorScheme: "scheme32",
              seriesGroups: [
                {
                  type: "donut",
                  offsetX: 250,
                  dataSource: sourceMobile,
                  xAxis: {
                    formatSettings: {
                      sufix: " (mobile)"
                    }
                  },
                  series: [
                    {
                      dataField: "Share",
                      displayText: "Browser",
                      labelRadius: 120,
                      initialAngle: 10,
                      radius: 130,
                      innerRadius: 90,
                      centerOffset: 0,
                      formatSettings: {
                        sufix: "%",
                        decimalPlaces: 1
                      }
                    }
                  ]
                },
                {
                  type: "donut",
                  offsetX: 250,
                  dataSource: sourceDesktop,
                  colorScheme: "scheme13",
                  xAxis: {
                    formatSettings: {
                      sufix: " (desktop)"
                    }
                  },
                  series: [
                    {
                      dataField: "Share",
                      displayText: "Browser",
                      labelRadius: 120,
                      initialAngle: 10,
                      radius: 70,
                      innerRadius: 30,
                      centerOffset: 0,
                      formatSettings: {
                        sufix: "%",
                        decimalPlaces: 1
                      }
                    }
                  ]
                }
              ]
            };
          }
        }
      );
    });
  }
};
</script>

<style>
smart-chart {
  width: 100%;
  max-width: 850px;
}
</style>
