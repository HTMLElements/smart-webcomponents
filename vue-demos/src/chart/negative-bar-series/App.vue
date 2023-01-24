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
          Country: "Switzerland",
          Inflation2012: -0.95,
          Inflation2011: -0.72
        },
        {
          Country: "USA",
          Inflation2012: 2.35,
          Inflation2011: 2.96
        },
        {
          Country: "Germany",
          Inflation2012: 2.03,
          Inflation2011: 2.1
        },
        {
          Country: "India",
          Inflation2012: 8.38,
          Inflation2011: 6.49
        },
        {
          Country: "China",
          Inflation2012: 3.34,
          Inflation2011: 4.06
        },
        {
          Country: "Canada",
          Inflation2012: 2.05,
          Inflation2011: 2.3
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "CPI inflation comparison by country",
              description: "Years: 2011 vs 2012",
              showLegend: true,
              padding: {
                left: 20,
                top: 5,
                right: 20,
                bottom: 5
              },
              titlePadding: {
                left: 90,
                top: 0,
                right: 0,
                bottom: 10
              },
              dataSource: sampleData,
              colorScheme: "scheme08",
              xAxis: {
                dataField: "Country"
              },
              valueAxis: {
                title: {
                  visible: false
                },
                unitInterval: 1,
                minValue: -5,
                maxValue: 10,
                labels: {
                  formatSettings: {
                    sufix: "%"
                  }
                }
              },
              seriesGroups: [
                {
                  type: "column",
                  orientation: "horizontal",
                  columnsGapPercent: 50,
                  toolTipFormatSettings: {
                    sufix: "%"
                  },
                  series: [
                    {
                      dataField: "Inflation2012",
                      displayText: "Inflation 2012"
                    },
                    {
                      dataField: "Inflation2011",
                      displayText: "Inflation 2011"
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
