<template>
  <div class="vue-root">
    <smart-chart id="chart"></smart-chart>
    <div class="options">
      <table>
        <tr>
          <td>
            <b>Series group 1/2:</b>
          </td>
        </tr>
        <tr>
          <td>
            <smart-check-box id="btnStackedSeriesGroup1" checked>Stacked</smart-check-box>
          </td>
        </tr>
        <tr>
          <td>
            <smart-check-box id="btnStackedSeriesGroup2">Stacked</smart-check-box>
          </td>
        </tr>
        <tr>
          <td>
            Space between columns / padding:
            <smart-slider
              id="sliderColumnsGapPercentGroup1"
              min="0"
              max="99"
              value="25"
              coerce
              interval="1"
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            Space between columns / padding:
            <smart-slider
              id="sliderColumnsGapPercentGroup2"
              min="0"
              max="99"
              value="25"
              coerce
              interval="1"
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            Space between series:
            <smart-slider
              id="sliderSeriesGapGroup1"
              min="0"
              max="100"
              value="10"
              coerce
              interval="1"
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            Space between series:
            <smart-slider
              id="sliderSeriesGapGroup2"
              min="0"
              max="100"
              value="10"
              coerce
              interval="1"
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            Minimum column width:
            <smart-slider
              id="sliderMinWidthGroup1"
              min="0"
              max="50"
              value="0"
              coerce
              interval="1"
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            Minimum column width:
            <smart-slider
              id="sliderMinWidthGroup2"
              min="0"
              max="50"
              value="0"
              coerce
              interval="1"
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            Maximum column width:
            <smart-slider
              id="sliderMaxWidthGroup1"
              min="1"
              max="120"
              value="40"
              coerce
              interval="1"
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            Maximum column width:
            <smart-slider
              id="sliderMaxWidthGroup2"
              min="1"
              max="120"
              value="40"
              coerce
              interval="1"
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
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
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sampleData = [
        {
          Position: 0,
          Serie1: 30,
          Serie2: 5,
          Serie3: 25,
          Serie4: 30,
          Serie5: 10,
          Serie6: 5
        },
        {
          Position: 1,
          Serie1: 25,
          Serie2: 25,
          Serie3: 5,
          Serie4: 20,
          Serie5: 20,
          Serie6: 10
        },
        {
          Position: 3,
          Serie1: 30,
          Serie2: 5,
          Serie3: 25,
          Serie4: 10,
          Serie5: 20,
          Serie6: 15
        },
        {
          Position: 6,
          Serie1: 35,
          Serie2: 25,
          Serie3: 45,
          Serie4: 5,
          Serie5: 30,
          Serie6: 20
        },
        {
          Position: 7,
          Serie1: 5,
          Serie2: 20,
          Serie3: 25,
          Serie4: 20,
          Serie5: 40,
          Serie6: 15
        },
        {
          Position: 9,
          Serie1: 30,
          Serie2: 10,
          Serie3: 30,
          Serie4: 10,
          Serie5: 5,
          Serie6: 20
        },
        {
          Position: 10,
          Serie1: 60,
          Serie2: 45,
          Serie3: 10,
          Serie4: 20,
          Serie5: 10,
          Serie6: 15
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              animation: "none",
              caption: "Columns spacing and padding",
              description:
                "Example with two series groups and three series in each group",
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
              columnSeriesOverlap: true,
              xAxis: {
                dataField: "Position",
                tickMarks: {
                  visible: true,
                  unitInterval: 1,
                  color: "#BCBCBC"
                },
                gridLines: {
                  visible: true,
                  unitInterval: 1,
                  color: "#BCBCBC"
                },
                flip: false,
                valuesOnTicks: false
              },
              valueAxis: {
                unitInterval: 10,
                title: {
                  text: "Value"
                },
                tickMarks: {
                  color: "#BCBCBC"
                },
                gridLines: {
                  color: "#BCBCBC"
                },
                labels: {
                  horizontalAlignment: "right"
                }
              },
              colorScheme: "scheme04",
              seriesGroups: [
                {
                  type: "stackedcolumn",
                  columnsGapPercent: 25,
                  seriesGapPercent: 10,
                  columnsMaxWidth: 40,
                  columnsMinWidth: 1,
                  skipOverlappingPoints: false,
                  series: [
                    {
                      dataField: "Serie1",
                      displayText: "Serie1"
                    },
                    {
                      dataField: "Serie2",
                      displayText: "Serie2"
                    },
                    {
                      dataField: "Serie3",
                      displayText: "Serie3"
                    }
                  ]
                },
                {
                  type: "column",
                  greyScale: true,
                  columnsGapPercent: 25,
                  seriesGapPercent: 10,
                  columnsMaxWidth: 40,
                  columnsMinWidth: 1,
                  skipOverlappingPoints: false,
                  series: [
                    {
                      dataField: "Serie4",
                      displayText: "Serie4"
                    },
                    {
                      dataField: "Serie5",
                      displayText: "Serie5"
                    },
                    {
                      dataField: "Serie6",
                      displayText: "Serie6"
                    }
                  ]
                }
              ]
            };
          }
        }
      );

      const chart = document.getElementById("chart"),
        btnStackedSeriesGroup1 = document.getElementById(
          "btnStackedSeriesGroup1"
        ),
        btnStackedSeriesGroup2 = document.getElementById(
          "btnStackedSeriesGroup2"
        );
      btnStackedSeriesGroup1.addEventListener("change", function() {
        if (chart.seriesGroups && chart.seriesGroups[0]) {
          chart.seriesGroups[0].type = btnStackedSeriesGroup1.checked
            ? "stackedcolumn"
            : "column";
        }
      });
      btnStackedSeriesGroup2.addEventListener("change", function() {
        if (chart.seriesGroups && chart.seriesGroups[1]) {
          chart.seriesGroups[1].type = btnStackedSeriesGroup2.checked
            ? "stackedcolumn"
            : "column";
        }
      });
      // columns spacing
      document
        .getElementById("sliderColumnsGapPercentGroup1")
        .addEventListener("change", function(event) {
          if (chart.seriesGroups && chart.seriesGroups[0]) {
            chart.seriesGroups[0].columnsGapPercent = event.detail.value;
          }
        });
      document
        .getElementById("sliderColumnsGapPercentGroup2")
        .addEventListener("change", function(event) {
          if (chart.seriesGroups && chart.seriesGroups[1]) {
            chart.seriesGroups[1].columnsGapPercent = event.detail.value;
          }
        });
      // series spacing
      document
        .getElementById("sliderSeriesGapGroup1")
        .addEventListener("change", function(event) {
          if (chart.seriesGroups && chart.seriesGroups[0]) {
            chart.seriesGroups[0].seriesGapPercent = event.detail.value;
          }
        });
      document
        .getElementById("sliderSeriesGapGroup2")
        .addEventListener("change", function(event) {
          if (chart.seriesGroups && chart.seriesGroups[1]) {
            chart.seriesGroups[1].seriesGapPercent = event.detail.value;
          }
        });
      // min column width
      document
        .getElementById("sliderMinWidthGroup1")
        .addEventListener("change", function(event) {
          if (chart.seriesGroups && chart.seriesGroups[0]) {
            chart.seriesGroups[0].columnsMinWidth = event.detail.value;
          }
        });
      document
        .getElementById("sliderMinWidthGroup2")
        .addEventListener("change", function(event) {
          if (chart.seriesGroups && chart.seriesGroups[1]) {
            chart.seriesGroups[1].columnsMinWidth = event.detail.value;
          }
        });
      // max column width
      document
        .getElementById("sliderMaxWidthGroup1")
        .addEventListener("change", function(event) {
          if (chart.seriesGroups && chart.seriesGroups[0]) {
            chart.seriesGroups[0].columnsMaxWidth = event.detail.value;
          }
        });
      document
        .getElementById("sliderMaxWidthGroup2")
        .addEventListener("change", function(event) {
          if (chart.seriesGroups && chart.seriesGroups[1]) {
            chart.seriesGroups[1].columnsMaxWidth = event.detail.value;
          }
        });
    });
  }
};
</script>

<style>
table {
  padding-left: 30px;
  padding-top: 10px;
}

body {
  height: 800px;
}
smart-chart {
  width: 65%;
}
@media only screen and (max-width: 600px) {
  smart-chart {
    width: 100%;
  }
}
smart-slider {
  width: 200px;
  height: 50px;
}
</style>
