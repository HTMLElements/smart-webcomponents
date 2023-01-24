<template>
  <div class="vue-root">
    <smart-chart id="chart"></smart-chart>
    <img src="../../../images/wind.png" />
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
          Day: "Monday",
          "Oklahoma City": 37,
          Sofia: 8,
          Bruges: 18
        },
        {
          Day: "Tuesday",
          "Oklahoma City": 29,
          Sofia: 11,
          Bruges: 16
        },
        {
          Day: "Wednesday",
          "Oklahoma City": 27,
          Sofia: 8,
          Bruges: 29
        },
        {
          Day: "Thursday",
          "Oklahoma City": 37,
          Sofia: 14,
          Bruges: 29
        },
        {
          Day: "Friday",
          "Oklahoma City": 37,
          Sofia: 11,
          Bruges: 27
        },
        {
          Day: "Saturday",
          "Oklahoma City": 39,
          Sofia: 6,
          Bruges: 24
        },
        {
          Day: "Sunday",
          "Oklahoma City": 42,
          Sofia: 8,
          Bruges: 21
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              borderLineColor: "#808080",
              backgroundImage:
                "../../../images/chart-custom-element-background.png",
              caption: "Wind Speed",
              description: "around the world",
              showLegend: true,
              padding: {
                left: 5,
                top: 5,
                right: 5,
                bottom: 5
              },
              titlePadding: {
                left: 90,
                top: 0,
                right: 0,
                bottom: 10
              },
              dataSource: sampleData,
              xAxis: {
                dataField: "Day",
                gridLines: {
                  visible: true,
                  color: "#404040",
                  step: 1
                },
                tickMarks: {
                  visible: true,
                  color: "#000000",
                  step: 2
                },
                valuesOnTicks: false
              },
              valueAxis: {
                description: "Time in minutes",
                gridLines: {
                  visible: true,
                  color: "#404040",
                  step: 2
                },
                tickMarks: {
                  visible: true,
                  color: "#000000",
                  step: 1
                },
                axisSize: "auto"
              },
              seriesGroups: [
                {
                  type: "column",
                  useGradientColors: true,
                  series: [
                    {
                      dataField: "Sofia",
                      fillColor: "#048BA8"
                    },
                    {
                      dataField: "Bruges",
                      fillColor: "#16DB93"
                    }
                  ]
                },
                {
                  type: "stackedline",
                  series: [
                    {
                      dataField: "Oklahoma City",
                      symbolType: "circle",
                      symbolSize: 10,
                      fillColorSymbol: "#3587CE",
                      fillColor: "#3587CE",
                      lineColor: "#0459A8"
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
img {
  width: 50px;
  position: absolute;
  left: 383px;
  top: 12px;
}

#chart {
  width: 100%;
}

#chart .smart-chart-axis-text,
#chart .smart-chart-legend-text {
  fill: #ffffff;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
}

.smart-chart-tooltip-text {
  color: #000000;
}

.smart-chart-tooltip-content {
  border-width: 2px;
  background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      #ccc 10px,
      #ccc 20px
    ),
    linear-gradient(to bottom, #eee, #999);
}
</style>
