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
      const data = [];
      for (let i = 0; i < 20; i++) {
        data.push({
          key: i,
          value1: ((Math.random() * 200) % 200) + 200,
          value2: ((Math.random() * 200) % 200) + 500,
          value3: (Math.random() * 200) % 200
        });
      }
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              animation: "none",
              caption: "Live updates performance",
              description: "Data changes every " + 10 + " milliseconds",
              showLegend: true,
              padding: {
                left: 10,
                top: 10,
                right: 10,
                bottom: 10
              },
              titlePadding: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 10
              },
              dataSource: data,
              xAxis: {
                dataField: "key",
                unitInterval: 1,
                valuesOnTicks: true,
                gridLines: {
                  visible: false
                }
              },
              valueAxis: {
                minValue: 0,
                maxValue: 750,
                title: {
                  text: "Index Value<br>"
                }
              },
              colorScheme: "scheme32",
              seriesGroups: [
                {
                  type: "line",
                  useGradientColors: false,
                  series: [
                    {
                      dataField: "value1",
                      displayText: "value1",
                      lineWidth: 2,
                      symbolType: "circle"
                    }
                  ]
                },
                {
                  type: "spline",
                  useGradientColors: false,
                  columnsGapPercent: 50,
                  alignEndPointsWithIntervals: true,
                  series: [
                    {
                      dataField: "value2",
                      displayText: "value2"
                    }
                  ]
                },
                {
                  type: "column",
                  useGradientColors: false,
                  columnsGapPercent: 50,
                  alignEndPointsWithIntervals: true,
                  series: [
                    {
                      dataField: "value3",
                      displayText: "value3"
                    }
                  ]
                }
              ]
            };
          }
        }
      );

      const chart = document.getElementById("chart"),
        timerFunction = function() {
          data.splice(0, 1);
          data.push({
            key: data[data.length - 1].key + 1,
            value1: ((Math.random() * 200) % 200) + 200,
            value2: ((Math.random() * 200) % 200) + 500,
            value3: (Math.random() * 200) % 200
          });
          chart.update();
        };

      chart.whenRendered(() => {
        setInterval(timerFunction, 10);
      });
    });
  }
};
</script>

<style>
#chart3 {
  width: 80%;
  height: 600px;
}
</style>
