<template>
  <div class="vue-root">
    <smart-chart id="chart"></smart-chart>
    <br />
    <div id="options">
      <smart-check-box id="gradients">Use gradients</smart-check-box>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.chart.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sampleData = [
        {
          Day: "Monday",
          Keith: 30,
          Erica: 15,
          George: 25
        },
        {
          Day: "Tuesday",
          Keith: 25,
          Erica: 25,
          George: 30
        },
        {
          Day: "Wednesday",
          Keith: 30,
          Erica: 20,
          George: 25
        },
        {
          Day: "Thursday",
          Keith: 35,
          Erica: 25,
          George: 45
        },
        {
          Day: "Friday",
          Keith: 20,
          Erica: 20,
          George: 25
        },
        {
          Day: "Saturday",
          Keith: 30,
          Erica: 20,
          George: 30
        },
        {
          Day: "Sunday",
          Keith: 60,
          Erica: 45,
          George: 90
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Fitness & exercise weekly scorecard",
              description: "Time spent in vigorous exercise",
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
                  visible: true
                }
              },
              colorScheme: "scheme29",
              seriesGroups: [
                {
                  type: "column",
                  columnsGapPercent: 50,
                  seriesGapPercent: 0,
                  valueAxis: {
                    unitInterval: 10,
                    minValue: 0,
                    maxValue: 100,
                    description: "Time in minutes",
                    axisSize: "auto"
                  },
                  series: [
                    {
                      dataField: "Keith",
                      displayText: "Keith"
                    },
                    {
                      dataField: "Erica",
                      displayText: "Erica"
                    },
                    {
                      dataField: "George",
                      displayText: "George"
                    }
                  ]
                }
              ]
            };
          }
        }
      );

      const chart = document.getElementById("chart");
      document
        .getElementById("gradients")
        .addEventListener("change", function(event) {
          if (chart.seriesGroups && chart.seriesGroups[0]) {
            chart.seriesGroups[0].useGradientColors = event.detail.value;
            chart.update();
          }
        });
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
