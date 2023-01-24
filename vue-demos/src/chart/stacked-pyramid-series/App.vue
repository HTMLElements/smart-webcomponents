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
          Period: "January 2019",
          "Marvel Comics": 39.24,
          DC: 29.7,
          "Image Comics": 7.56,
          "Dark Horse Comics": 3.95,
          "IDW Publishing": 3.65,
          "BOOM! Studios": 2.32
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "January 2021 Comic Book Market Share",
              description: "",
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
                dataField: "Period",
                visible: false
              },
              valueAxis: {
                visible: false
              },
              seriesGroups: [
                {
                  type: "stackedcolumn",
                  columnsGapPercent: 50,
                  seriesGapPercent: 0,
                  columnsTopWidthPercent: 0,
                  columnsBottomWidthPercent: 100,
                  columnsMinWidth: 600,
                  formatSettings: { sufix: "%" },
                  toolTipFormatFunction: function(value, index, series) {
                    return series.dataField + ": " + value + "%";
                  },
                  series: [
                    {
                      dataField: "Marvel Comics",
                      labels: {
                        visible: true,
                        offset: {
                          x: 270
                        }
                      }
                    },
                    {
                      dataField: "DC",
                      labels: {
                        visible: true,
                        offset: {
                          x: 150
                        }
                      }
                    },
                    {
                      dataField: "Image Comics",
                      labels: {
                        visible: true,
                        offset: {
                          x: 85
                        }
                      }
                    },
                    {
                      dataField: "Dark Horse Comics",
                      labels: {
                        visible: true,
                        offset: {
                          x: 60
                        }
                      }
                    },
                    {
                      dataField: "IDW Publishing",
                      labels: {
                        visible: true,
                        offset: {
                          x: 45
                        }
                      }
                    },
                    {
                      dataField: "BOOM! Studios",
                      labels: {
                        visible: true,
                        offset: {
                          x: 35
                        }
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
@media only screen and (max-width: 700px) {
  smart-chart {
    width: 100%;
  }
}
</style>
