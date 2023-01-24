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
          month: "Jan",
          min: -3,
          max: 3
        },
        {
          month: "Feb",
          min: -3,
          max: 5
        },
        {
          month: "Mar",
          min: 1,
          max: 10
        },
        {
          month: "Apr",
          min: 4,
          max: 15
        },
        {
          month: "May",
          min: 8,
          max: 18
        },
        {
          month: "Jun",
          min: 12,
          max: 23
        },
        {
          month: "Jul",
          min: 13,
          max: 25
        },
        {
          month: "Aug",
          min: 13,
          max: 24
        },
        {
          month: "Sep",
          min: 10,
          max: 20
        },
        {
          month: "Oct",
          min: 6,
          max: 14
        },
        {
          month: "Nov",
          min: 1,
          max: 8
        },
        {
          month: "Dec",
          min: -2,
          max: -1
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Temperature Averages by Month in Bern, Switzerland",
              description: "(source ncdc.noaa.gov)",
              showLegend: false,
              padding: {
                left: 10,
                top: 5,
                right: 10,
                bottom: 5
              },
              titlePadding: {
                left: 50,
                top: 0,
                right: 0,
                bottom: 10
              },
              dataSource: sampleData,
              colorScheme: "scheme05",
              xAxis: {
                dataField: "month",
                labels: {
                  angle: 90
                },
                gridLines: {
                  visible: false
                }
              },
              valueAxis: {
                visible: true,
                title: {
                  text: "Temperature (°C)"
                },
                flip: true,
                minValue: -10,
                maxValue: 30,
                formatSettings: {
                  decimalPlaces: 0
                }
              },
              seriesGroups: [
                {
                  type: "rangecolumn",
                  orientation: "horizontal",
                  columnsMaxWidth: 15,
                  series: [
                    {
                      dataFieldFrom: "min",
                      dataFieldTo: "max",
                      displayText: "Temperature Range"
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
