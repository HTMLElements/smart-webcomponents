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
          Index: "1",
          SerieA: -30,
          SerieB: -10,
          SerieC: -25
        },
        {
          Index: "2",
          SerieA: -25,
          SerieB: -25,
          SerieC: 10
        },
        {
          Index: "3",
          SerieA: 30,
          SerieB: 0,
          SerieC: 25
        },
        {
          Index: "4",
          SerieA: 35,
          SerieB: 25,
          SerieC: 45
        },
        {
          Index: "5",
          SerieA: 0,
          SerieB: 20,
          SerieC: 25
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Pyramid series",
              description: "This example demonstrates pyramid chart series",
              showLegend: true,
              padding: {
                left: 15,
                top: 15,
                right: 15,
                bottom: 15
              },
              titlePadding: {
                left: 90,
                top: 0,
                right: 0,
                bottom: 10
              },
              dataSource: sampleData,
              xAxis: {
                dataField: "Index",
                tickMarks: {
                  visible: true,
                  unitInterval: 1
                },
                gridLines: {
                  visible: true,
                  unitInterval: 1
                }
              },
              valueAxis: {
                labels: {
                  horizontalAlignment: "right"
                }
              },
              colorScheme: "scheme32",
              seriesGroups: [
                {
                  type: "column",
                  columnsGapPercent: 20,
                  seriesGapPercent: 20,
                  columnsTopWidthPercent: 0,
                  columnsBottomWidthPercent: 100,
                  series: [
                    {
                      dataField: "SerieA",
                      displayText: "Serie A"
                    },
                    {
                      dataField: "SerieB",
                      displayText: "Serie B"
                    },
                    {
                      dataField: "SerieC",
                      displayText: "Serie C"
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
</style>
