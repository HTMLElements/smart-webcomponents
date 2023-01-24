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
      const dropDownList = document.getElementById("dropDownMissingPointsMode");
      dropDownList.dataSource = ["skip", "zero", "connect"];

      const sampleData = [
        {
          a: 25,
          b: 21
        },
        {
          a: 28,
          b: 19
        },
        {
          a: 35,
          b: undefined
        },
        {
          a: 29,
          b: NaN
        },
        {
          a: 38,
          b: 18
        },
        {
          a: 36,
          b: 17
        },
        {
          a: 31,
          b: 21
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              animation: "none",
              caption: "Area series with missing points",
              description: "Sample area series with missing and invalid values",
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
                valuesOnTicks: true
              },
              colorScheme: "scheme30",
              seriesGroups: [
                {
                  type: "area",
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
                      dataField: "a",
                      lineWidth: 2,
                      symbolSize: 8,
                      symbolType: "circle",
                      opacity: 0.8
                    },
                    {
                      dataField: "b",
                      emptyPointsDisplay: "skip",
                      lineWidth: 2,
                      symbolSize: 8,
                      symbolType: "diamond",
                      opacity: 0.9
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
        .getElementById("dropDownMissingPointsMode")
        .addEventListener("change", function(event) {
          if (
            chart.seriesGroups &&
            chart.seriesGroups[0] &&
            chart.seriesGroups[0].series
          ) {
            chart.seriesGroups[0].series[1].emptyPointsDisplay =
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
