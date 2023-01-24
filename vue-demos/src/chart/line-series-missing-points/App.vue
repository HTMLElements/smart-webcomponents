<template>
  <div class="vue-root">
    <smart-chart id="chart"></smart-chart>
    <br />
    <div class="options">
      <p>Select missing points display mode:</p>
      <smart-drop-down-list
        id="dropDownMissingPointsMode"
        selection-mode="one"
        selected-indexes="[0]"
      ></smart-drop-down-list>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.chart.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sampleData = [
        29,
        undefined,
        10,
        15,
        10,
        undefined,
        NaN,
        30,
        25,
        undefined,
        33,
        19,
        11
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              animation: "none",
              caption: "Line serie with missing points",
              description: "Sample line serie with missing and invalid values",
              showLegend: true,
              padding: {
                left: 5,
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
              xAxis: {
                text: "x",
                valuesOnTicks: false
              },
              colorScheme: "scheme31",
              seriesGroups: [
                {
                  type: "line",
                  toolTipFormatFunction: function(value, itemIndex) {
                    return (
                      '<div style="text-align:left"><b>Index:</b> ' +
                      itemIndex +
                      "<br /><b>Value:</b> " +
                      value +
                      "<br /></div>"
                    );
                  },
                  valueAxis: {
                    title: {
                      text: "Value<br>"
                    }
                  },
                  series: [
                    {
                      emptyPointsDisplay: "skip",
                      displayText: "Value",
                      lineWidth: 2,
                      symbolSize: 8,
                      symbolType: "circle"
                    }
                  ]
                }
              ]
            };
          }
        }
      );

      const chart = document.getElementById("chart");

      const dropDownList = document.getElementById("dropDownMissingPointsMode");
      dropDownList.dataSource = ["skip", "zero", "connect"];
      dropDownList.addEventListener("change", function(event) {
        if (
          chart.seriesGroups &&
          chart.seriesGroups[0] &&
          chart.seriesGroups[0].series &&
          chart.seriesGroups[0].series[0]
        ) {
          chart.seriesGroups[0].series[0].emptyPointsDisplay =
            event.detail.value;
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
  max-width: 550px;
}
</style>
