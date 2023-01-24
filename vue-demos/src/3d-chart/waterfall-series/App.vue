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
      const seasonData = [
        {
          Episode: 1,
          Season1: 2220000,
          Season6: 7940000,
        },
        {
          Episode: 2,
          Season1: 2200000,
          Season6: 7290000,
        },
        {
          Episode: 3,
          Season1: 2440000,
          Season6: 7280000,
        },
        {
          Episode: 4,
          Season1: 2450000,
          Season6: 7820000,
        },
        {
          Episode: 5,
          Season1: 2580000,
          Season6: 7890000,
        },
        {
          Episode: 6,
          Season1: 2440000,
          Season6: 6710000,
        },
        {
          Episode: 7,
          Season1: 2400000,
          Season6: 7800000,
        },
        {
          Episode: 8,
          Season1: 2720000,
          Season6: 7600000,
        },
        {
          Episode: 9,
          Season1: 2660000,
          Season6: 7660000,
        },
        {
          Episode: 10,
          Season1: 3040000,
          Season6: 8890000,
        },
        {
          Episode: "Total",
          summary: true,
        },
      ];

      // convert raw data to differences
      for (let i = seasonData.length - 2; i > 0; i--) {
        seasonData[i].Season1 -= seasonData[i - 1].Season1;
        seasonData[i].Season6 -= seasonData[i - 1].Season6;
      }

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "'Game of Thrones' Viewership",
              description: "Season 1 vs Season 6",
              showLegend: false,
              cameraPosition: {
                x: 15,
                y: 30,
                z: 70,
              },
              dataSource: seasonData,
              xAxis: {
                dataField: "Episode",
              },
              gridOptions: {
                height: 35,
              },
              valueAxis: {
                unitInterval: 1000000,
                formatFunction: (value) => {
                  return (value / 1000000).toFixed(2) + "M";
                },
              },
              seriesGroups: [
                {
                  type: "waterfall",

                  series: [
                    {
                      dataField: "Season1",
                      summary: "summary",
                      displayText: "Season 1",
                      colorFunction: function (value, itemIndex) {
                        if (itemIndex === seasonData.length - 1) {
                          return "#FFA500"; // total
                        }

                        return value < 0 ? "#E25848" : "#61D14F";
                      },
                    },
                    {
                      dataField: "Season6",
                      summary: "summary",
                      displayText: "Season 6",
                      colorFunction: function (value, itemIndex) {
                        if (itemIndex === seasonData.length - 1) {
                          return "#5993FF"; // total
                        }

                        return value < 0 ? "#AF87FF" : "#8EDBFF";
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