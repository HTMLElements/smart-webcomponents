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
      const sampleData = [
        {
          a: 0.1535,
          b: 0.5
        },
        {
          a: 0.48,
          b: 20.5
        },
        {
          a: 10,
          b: 60
        },
        {
          a: 100,
          b: 80
        },
        {
          a: 200,
          b: 90
        },
        {
          a: 245.11,
          b: 100.13
        },
        {
          a: 300.13,
          b: 150.13
        },
        {
          a: 340,
          b: 200
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Logarithmic Scale x-Axis Example",
              renderEngine: "HTML5",
              description: "Horizontal axis with base 2 logarithmic scale",
              padding: {
                left: 15,
                top: 5,
                right: 15,
                bottom: 5
              },
              titlePadding: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 10
              },
              dataSource: sampleData,
              colorScheme: "scheme32",
              xAxis: {
                dataField: "a",
                logarithmicScale: true,
                logarithmicScaleBase: 2
              },
              valueAxis: {
                logarithmicScale: false,
                logarithmicScaleBase: 2,
                title: {
                  text: "Value"
                },
                labels: {
                  horizontalAlignment: "right"
                }
              },
              seriesGroups: [
                {
                  type: "line",
                  series: [
                    {
                      dataField: "a",
                      displayText: "A",
                      symbolType: "square",
                      symbolSize: 6,
                      dashStyle: "4,4",
                      lineWidth: 1
                    },
                    {
                      dataField: "b",
                      displayText: "B",
                      symbolType: "circle",
                      symbolSize: 6,
                      lineWidth: 1
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
