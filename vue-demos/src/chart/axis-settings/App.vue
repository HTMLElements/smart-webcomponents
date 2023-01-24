<template>
  <div class="vue-root">
    <smart-chart id="chart" animation="none"></smart-chart>
    <div class="options">
      <table>
        <tr>
          <td>
            <b>Value axis properties:</b>
          </td>
        </tr>
        <tr>
          <td>
            Left padding:
            <smart-slider
              id="sliderValueAxisLeftPadding"
              min="0"
              max="50"
              value="0"
              coerce
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            Right padding:
            <smart-slider
              id="sliderValueAxisRightPadding"
              min="0"
              max="50"
              value="0"
              coerce
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            Labels angle:
            <smart-slider
              id="sliderValueAxisAngle"
              min="0"
              max="360"
              value="0"
              coerce
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            <b>xAxis properties:</b>
          </td>
        </tr>
        <tr>
          <td>
            Top padding:
            <smart-slider
              id="sliderXAxisTopPadding"
              min="0"
              max="50"
              value="0"
              coerce
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            Bottom padding:
            <smart-slider
              id="sliderXAxisBottomPadding"
              min="0"
              max="50"
              value="0"
              coerce
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            Labels angle:
            <smart-slider
              id="sliderXAxisAngle"
              min="0"
              max="360"
              value="0"
              coerce
              labels-visibility="none"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            Position:
            <table>
              <tr>
                <td colspan="2">
                  <smart-radio-button id="btnLeft">Left</smart-radio-button>
                  <br />
                  <smart-radio-button id="btnRight" checked>Right</smart-radio-button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            Position:
            <table>
              <tr>
                <td colspan="2">
                  <smart-radio-button id="btnTop">Top</smart-radio-button>
                  <br />
                  <smart-radio-button id="btnBottom" checked>Bottom</smart-radio-button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <smart-check-box id="btnValueAxisFlip">Flip valueAxis positions</smart-check-box>
          </td>
        </tr>
        <tr>
          <td>
            <smart-check-box id="btnXAxisFlip">Flip xAxis positions</smart-check-box>
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
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const data = [
        {
          year: 2004,
          price: 0.1437
        },
        {
          year: 2005,
          price: 0.147
        },
        {
          year: 2006,
          price: 0.151
        },
        {
          year: 2007,
          price: 0.1605
        },
        {
          year: 2008,
          price: 0.1647
        },
        {
          year: 2009,
          price: 0.1736
        },
        {
          year: 2010,
          price: 0.1766
        },
        {
          year: 2011,
          price: 0.1902
        },
        {
          year: 2012,
          price: 0.1978
        },
        {
          year: 2017,
          price: 0.2113
        },
        {
          year: 2018,
          price: 0.2178
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              renderEngine: "HTML5",
              caption: "Electricity prices in Europe between 2004 and 2018",
              description: "dataSource: Eurostat",
              showLegend: true,
              padding: {
                left: 5,
                top: 5,
                right: 15,
                bottom: 5
              },
              titlePadding: {
                left: 90,
                top: 0,
                right: 0,
                bottom: 10
              },
              dataSource: data,
              xAxis: {
                padding: {
                  top: 0,
                  bottom: 0
                },
                labels: {
                  angle: 0
                },
                dataField: "year",
                displayText: "Year",
                valuesOnTicks: false,
                gridLines: {
                  color: "#CDCDCD"
                },
                tickMarks: {
                  color: "#CDCDCD"
                }
              },
              colorScheme: "scheme32",
              valueAxis: {
                position: "right",
                padding: {
                  left: 0,
                  right: 0
                },
                title: {
                  text: "<br><br>Price EUR / kWh"
                },
                labels: {
                  visible: true,
                  angle: 0,
                  formatSettings: {
                    decimalPlaces: 4,
                    sufix: " €"
                  }
                },
                tickMarks: {
                  visible: true,
                  color: "#CDCDCD",
                  size: 5
                },
                gridLines: {
                  visible: true,
                  color: "#CDCDCD"
                },
                alternatingBackgroundColor: "#EFEFEF",
                alternatingBackgroundColor2: "#CECECE",
                alternatingBackgroundOpacity: 0.2
              },
              seriesGroups: [
                {
                  type: "stepline",
                  series: [
                    {
                      formatSettings: {
                        decimalPlaces: 4
                      },
                      dataField: "price",
                      displayText: "Price per kWh",
                      labels: {
                        visible: true
                      },
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
      document
        .getElementById("sliderValueAxisLeftPadding")
        .addEventListener("change", function(event) {
          if (chart.valueAxis && chart.valueAxis.padding) {
            chart.valueAxis.padding.left = parseFloat(event.detail.value);
          }
        });
      document
        .getElementById("sliderValueAxisRightPadding")
        .addEventListener("change", function(event) {
          if (chart.valueAxis && chart.valueAxis.padding) {
            chart.valueAxis.padding.right = parseFloat(event.detail.value);
          }
        });
      document
        .getElementById("sliderValueAxisAngle")
        .addEventListener("change", function(event) {
          if (chart.valueAxis && chart.valueAxis.labels) {
            chart.valueAxis.labels.angle = parseFloat(event.detail.value);
          }
        });
      document
        .getElementById("sliderXAxisTopPadding")
        .addEventListener("change", function(event) {
          if (chart.xAxis && chart.xAxis.padding) {
            chart.xAxis.padding.top = parseFloat(event.detail.value);
          }
        });
      document
        .getElementById("sliderXAxisBottomPadding")
        .addEventListener("change", function(event) {
          if (chart.xAxis && chart.xAxis.padding) {
            chart.xAxis.padding.bottom = parseFloat(event.detail.value);
          }
        });
      document
        .getElementById("sliderXAxisAngle")
        .addEventListener("change", function(event) {
          if (chart.xAxis && chart.xAxis.labels) {
            chart.xAxis.labels.angle = parseFloat(event.detail.value);
          }
        });
      document
        .getElementById("btnLeft")
        .addEventListener("change", function(event) {
          if (event.detail.value && chart.valueAxis) {
            chart.valueAxis.position = "left";
          }
        });
      document
        .getElementById("btnRight")
        .addEventListener("change", function(event) {
          if (event.detail.value && chart.valueAxis) {
            chart.valueAxis.position = "right";
          }
        });
      document
        .getElementById("btnTop")
        .addEventListener("change", function(event) {
          if (event.detail.value && chart.xAxis) {
            chart.xAxis.position = "top";
          }
        });
      document
        .getElementById("btnBottom")
        .addEventListener("change", function(event) {
          if (event.detail.value && chart.xAxis) {
            chart.xAxis.position = "bottom";
          }
        });
      document
        .getElementById("btnValueAxisFlip")
        .addEventListener("change", function(event) {
          if (chart.valueAxis) {
            chart.valueAxis.flip = event.detail.value;
          }
        });
      document
        .getElementById("btnXAxisFlip")
        .addEventListener("change", function(event) {
          if (chart.xAxis) {
            chart.xAxis.flip = event.detail.value;
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
body,
html {
  height: 1000px;
}
</style>
