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
      const seasonData = [
        {
          Episode: 1,
          Season1: 2220000,
          Season6: 7940000
        },
        {
          Episode: 2,
          Season1: 2200000,
          Season6: 7290000
        },
        {
          Episode: 3,
          Season1: 2440000,
          Season6: 7280000
        },
        {
          Episode: 4,
          Season1: 2450000,
          Season6: 7820000
        },
        {
          Episode: 5,
          Season1: 2580000,
          Season6: 7890000
        },
        {
          Episode: 6,
          Season1: 2440000,
          Season6: 6710000
        },
        {
          Episode: 7,
          Season1: 2400000,
          Season6: 7800000
        },
        {
          Episode: 8,
          Season1: 2720000,
          Season6: 7600000
        },
        {
          Episode: 9,
          Season1: 2660000,
          Season6: 7660000
        },
        {
          Episode: 10,
          Season1: 3040000,
          Season6: 8890000
        },
        {
          Episode: "Total",
          summary: true,
          Season6: 0,
          Season1: 0
        }
      ];
      // convert raw data to differences
      for (let i = seasonData.length - 2; i > 0; i--) {
        seasonData[i].Season1 -= seasonData[i - 1].Season1;
        seasonData[i].Season6 -= seasonData[i - 1].Season6;
      }
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: '"Game of Thrones" Viewership',
              description: "Season 1 vs Season 6",
              showLegend: true,
              padding: {
                left: 10,
                top: 5,
                right: 10,
                bottom: 5
              },
              titlePadding: {
                left: 90,
                top: 0,
                right: 0,
                bottom: 10
              },
              dataSource: seasonData,
              xAxis: {
                type: "basic",
                dataField: "Episode",
                title: {
                  text: "Episode"
                },
                labels: {
                  angle: 0
                },
                valuesOnTicks: false
              },
              valueAxis: {
                minValue: 2000000,
                title: {
                  text: "Viewership (millions)"
                },
                unitInterval: 500000,
                labels: {
                  formatFunction: function(value) {
                    return value / 1000000 + " M";
                  }
                }
              },
              seriesGroups: [
                {
                  type: "waterfall",
                  series: [
                    {
                      dataField: "Season1",
                      summary: "summary",
                      displayText: "Season 1",
                      colorFunction: function(value, itemIndex) {
                        if (itemIndex === seasonData.length - 1) {
                          return "#F7C71B"; // total
                        }
                        return value < 0 ? "#FFBB84" : "#D8E24D";
                      }
                    },
                    {
                      dataField: "Season6",
                      summary: "summary",
                      displayText: "Season 6",
                      colorFunction: function(value, itemIndex) {
                        if (itemIndex === seasonData.length - 1) {
                          return "#5993FF"; // total
                        }
                        return value < 0 ? "#AF87FF" : "#8EDBFF";
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
#chart {
  height: 800px;
}
</style>
