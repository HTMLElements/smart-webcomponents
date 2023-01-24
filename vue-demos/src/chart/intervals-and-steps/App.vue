<template>
  <div class="vue-root">
    <smart-chart id="chart"></smart-chart>
    <div class="options">
      <table>
        <tr>
          <td>
            <table>
              <tr>
                <td colspan="2">
                  <b>xAxis settings:</b>
                </td>
              </tr>
              <tr>
                <td>Labels step</td>
                <td>
                  <smart-numeric-text-box
                    id="inputXAxisLabelsStep"
                    min="1"
                    max="10"
                    value="2"
                    spin-buttons
                  ></smart-numeric-text-box>
                </td>
              </tr>
              <tr>
                <td>Grid lines step</td>
                <td>
                  <smart-numeric-text-box
                    id="inputXAxisGridLinesStep"
                    min="1"
                    max="10"
                    value="1"
                    spin-buttons
                  ></smart-numeric-text-box>
                </td>
              </tr>
              <tr>
                <td>Tick marks step</td>
                <td>
                  <smart-numeric-text-box
                    id="inputXAxisTickMarksStep"
                    min="1"
                    max="10"
                    value="1"
                    spin-buttons
                  ></smart-numeric-text-box>
                </td>
              </tr>
              <tr>
                <td>Unit unitInterval</td>
                <td>
                  <smart-numeric-text-box
                    id="inputXAxisUnitInterval"
                    min="1"
                    max="10"
                    value="1"
                    spin-buttons
                  ></smart-numeric-text-box>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <smart-check-box id="btnValuesBetweenTicks">Values between ticks</smart-check-box>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table>
              <tr>
                <td colspan="2">
                  <b>valueAxis settings:</b>
                </td>
              </tr>
              <tr>
                <td>Labels step</td>
                <td>
                  <smart-numeric-text-box
                    id="inputValueAxisLabelsStep"
                    min="1"
                    max="10"
                    value="1"
                    spin-buttons
                  ></smart-numeric-text-box>
                </td>
              </tr>
              <tr>
                <td>Grid lines step</td>
                <td>
                  <smart-numeric-text-box
                    id="inputValueAxisGridLinesStep"
                    min="1"
                    max="10"
                    value="1"
                    spin-buttons
                  ></smart-numeric-text-box>
                </td>
              </tr>
              <tr>
                <td>Tick marks step</td>
                <td>
                  <smart-numeric-text-box
                    id="inputValueAxisTickMarksStep"
                    min="1"
                    max="10"
                    value="1"
                    spin-buttons
                  ></smart-numeric-text-box>
                </td>
              </tr>
              <tr>
                <td>Unit unitInterval</td>
                <td>
                  <smart-numeric-text-box
                    id="inputValueAxisUnitInterval"
                    min="1"
                    max="10"
                    value="5"
                    spin-buttons
                  ></smart-numeric-text-box>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <smart-check-box id="btnValueAxisValuesBetweenTicks">Values between ticks</smart-check-box>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.chart.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.numerictextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sampleData = [
        12,
        3,
        16,
        12,
        24,
        15,
        17,
        9,
        31,
        25,
        15,
        5,
        8,
        19,
        23,
        15,
        31,
        26,
        11,
        19,
        5,
        1,
        8,
        18,
        12,
        3,
        16,
        12,
        24,
        15,
        17,
        9,
        31,
        25,
        15,
        5,
        8,
        19,
        23,
        15,
        31,
        26,
        11,
        19,
        5,
        1,
        8,
        18,
        5,
        12,
        11
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              animation: "none",
              caption: "Chart unitInterval and steps example",
              description: "",
              showLegend: true,
              enableCrosshairs: false,
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
              dataSource: sampleData,
              xAxis: {
                unitInterval: 1,
                gridLines: {
                  step: 1
                },
                tickMarks: {
                  step: 1
                },
                labels: {
                  step: 2
                }
              },
              valueAxis: {
                title: {
                  text: "Value<br>"
                },
                unitInterval: 5,
                gridLines: {
                  step: 1
                },
                tickMarks: {
                  step: 1
                },
                labels: {
                  step: 1
                },
                minValue: 0
              },
              colorScheme: "scheme05",
              seriesGroups: [
                {
                  type: "line",
                  series: [
                    {
                      displayText: "value",
                      opacity: 0.7
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
        .getElementById("inputXAxisLabelsStep")
        .addEventListener("change", function(event) {
          const value = parseFloat(event.detail.value);
          if (chart.xAxis && chart.xAxis.labels) {
            chart.xAxis.labels.step = value;
          }
        });
      document
        .getElementById("inputXAxisGridLinesStep")
        .addEventListener("change", function(event) {
          const value = parseFloat(event.detail.value);
          if (chart.xAxis && chart.xAxis.gridLines) {
            chart.xAxis.gridLines.step = value;
          }
        });
      document
        .getElementById("inputXAxisTickMarksStep")
        .addEventListener("change", function(event) {
          const value = parseFloat(event.detail.value);
          if (chart.xAxis && chart.xAxis.tickMarks) {
            chart.xAxis.tickMarks.step = value;
          }
        });
      document
        .getElementById("inputXAxisUnitInterval")
        .addEventListener("change", function(event) {
          const value = parseFloat(event.detail.value);
          if (chart.xAxis) {
            chart.xAxis.unitInterval = value;
          }
        });
      document
        .getElementById("btnValuesBetweenTicks")
        .addEventListener("change", function(event) {
          if (chart.xAxis) {
            chart.xAxis.valuesOnTicks = !event.detail.value;
          }
        });
      document
        .getElementById("inputValueAxisLabelsStep")
        .addEventListener("change", function(event) {
          const value = parseFloat(event.detail.value);
          if (chart.valueAxis && chart.valueAxis.labels) {
            chart.valueAxis.labels.step = value;
          }
        });
      document
        .getElementById("inputValueAxisGridLinesStep")
        .addEventListener("change", function(event) {
          const value = parseFloat(event.detail.value);
          if (chart.valueAxis && chart.valueAxis.gridLines) {
            chart.valueAxis.gridLines.step = value;
          }
        });
      document
        .getElementById("inputValueAxisTickMarksStep")
        .addEventListener("change", function(event) {
          const value = parseFloat(event.detail.value);
          if (chart.valueAxis && chart.valueAxis.tickMarks) {
            chart.valueAxis.tickMarks.step = value;
          }
        });
      document
        .getElementById("inputValueAxisUnitInterval")
        .addEventListener("change", function(event) {
          const value = parseFloat(event.detail.value);
          if (chart.valueAxis) {
            chart.valueAxis.unitInterval = value;
          }
        });
      document
        .getElementById("btnValueAxisValuesBetweenTicks")
        .addEventListener("change", function(event) {
          if (chart.valueAxis) {
            chart.valueAxis.valuesOnTicks = !event.detail.value;
          }
        });
    });
  }
};
</script>

<style>
smart-numeric-text-box {
  width: 60px;
}
smart-chart {
  width: 100%;
  max-width: 550px;
}
</style>
