<template>
  <div class="vue-root">
    <div class="card-container">
      <div class="card-buttons-container">
        <div>
          <smart-input class="underlined" readonly value="Today"></smart-input>
          <smart-input class="underlined" readonly value="Last 7 days"></smart-input>
          <smart-input id="focusedInput" class="underlined" readonly value="Last 30 days" focus></smart-input>
          <smart-input
            class="underlined"
            readonly
            drop-down-button-position="right"
            value="Date Range: 6 Apr - 5 May 2020"
          ></smart-input>
        </div>
        <smart-button>Export</smart-button>
      </div>
      <div class="card-chart-container">
        <div class="chart-holder">
          <div class="chart-container">
            <div>
              <h2>Visitors by Hour</h2>
              <smart-input readonly value="Location" drop-down-button-position="right"></smart-input>
            </div>
            <div>
              <div>
                <b>Total Visitors:</b> 9
              </div>
              <div>
                <span class="custom-chart-legend">Pre-registration</span>
                <span class="custom-chart-legend">Walk-ins</span>
              </div>
            </div>
            <smart-chart id="chart"></smart-chart>
            <div class="custom-chart-legend2">Average 0 visitors per hour</div>
          </div>
        </div>
        <div class="chart-holder" id="card2">
          <div class="chart-container">
            <div>
              <h2>Walk-ins vs Pre-registration Visitors</h2>
              <smart-input readonly value="Location" drop-down-button-position="right"></smart-input>
            </div>
            <div>
              <smart-chart id="chart2"></smart-chart>
              <div>
                <span class="custom-chart-legend">
                  <b>2</b> Pre-registration
                </span>
                <span class="custom-chart-legend">
                  <b>7</b> Walk-ins
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-holder" id="card3">
          <div class="chart-container">
            <div>
              <h2>Peak Hours</h2>
              <smart-input readonly value="Location" drop-down-button-position="right"></smart-input>
            </div>
            <div>
              <div>
                <b>Total Visitors:</b> 369
              </div>
              <div>
                <span class="custom-chart-legend">Peak Hours</span>
                <span class="custom-chart-legend">Non Peak Hours</span>
              </div>
            </div>
            <smart-chart id="chart3"></smart-chart>
            <div class="custom-chart-legend2">Usually 41 people stay in peak hour</div>
          </div>
        </div>
        <div class="chart-holder">
          <div class="chart-container">
            <div>
              <h2>Avg. Time Taken for Registration</h2>
            </div>
            <div>
              <div>
                <b>Total Visitors:</b> 9
              </div>
              <div>
                <span class="custom-chart-legend">Pre-registration</span>
                <span class="custom-chart-legend">Walk-ins</span>
              </div>
            </div>
            <smart-chart id="chart4"></smart-chart>
            <div class="custom-chart-legend2">Pre-registrations: 0-50secs, Walk-ins: 0-54 secs</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.chart.js";
import "smart-webcomponents/source/modules/smart.input.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: " ",
              description: "",
              showLegend: false,
              borderLineWidth: 0,
              titlePadding: {
                left: 0,
                top: 0,
                bottom: 10
              },
              toolTipFormatFunction: function(
                value,
                itemIndex,
                serie,
                group,
                xAxisValue
              ) {
                return `Visitors: ${value}, Hours: ${parseInt(
                  xAxisValue + ""
                )}`;
              },
              dataSource: [
                {
                  Hour: 9,
                  preregistration: 0,
                  walkins: 1
                },
                {
                  Hour: 12,
                  preregistration: 2,
                  walkins: 0
                },
                {
                  Hour: 15,
                  preregistration: 0,
                  walkins: 1
                },
                {
                  Hour: 14.3,
                  preregistration: 0,
                  walkins: 1
                },
                {
                  Hour: 15,
                  preregistration: 0,
                  walkins: 1
                },
                {
                  Hour: 15.65,
                  preregistration: 0,
                  walkins: 1
                }
              ],
              xAxis: {
                dataField: "Hour",
                type: "linear",
                minValue: 9,
                maxValue: 24,
                unitInterval: 3,
                gridLines: {
                  visible: false,
                  color: "#e0e0e0"
                },
                formatFunction: function(label) {
                  return label === 24
                    ? "12a"
                    : label > 12
                    ? (label % 12) + "p"
                    : label + "a";
                }
              },
              colorScheme: "scheme29",
              seriesGroups: [
                {
                  type: "column",
                  columnsGapPercent: 10,
                  seriesGapPercent: 0,
                  valueAxis: {
                    unitInterval: 1,
                    minValue: 0,
                    maxValue: 2,
                    description: "Visitors",
                    axisSize: "auto",
                    gridLines: {
                      color: "#e0e0e0"
                    }
                  },
                  series: [
                    {
                      dataField: "preregistration",
                      displayText: "Pre-registration"
                    },
                    {
                      dataField: "walkins",
                      displayText: "Walk-ins"
                    }
                  ]
                }
              ]
            };
          }
        }
      );
      window.Smart(
        "#chart2",
        class {
          get properties() {
            return {
              caption: " ",
              description: "",
              showLegend: false,
              borderLineWidth: 0,
              titlePadding: {
                left: 0,
                top: 0,
                bottom: 10
              },
              toolTipFormatFunction: function(value, itemIndex, serie) {
                return `${
                  itemIndex === 1 ? "Walk-ins" : serie.displayText
                }: ${Math.round((value / 100) * 9)}`;
              },
              colorScheme: "scheme29",
              seriesGroups: [
                {
                  type: "donut",
                  dataSource: [
                    {
                      share: 23
                    },
                    {
                      share: 77
                    }
                  ],
                  xAxis: {
                    formatSettings: {
                      sufix: " (mobile)"
                    }
                  },
                  series: [
                    {
                      dataField: "share",
                      displayText: "Pre-registration",
                      labelRadius: 50,
                      initialAngle: 48,
                      radius: 80,
                      innerRadius: 60,
                      centerOffset: 0,
                      formatSettings: {
                        sufix: "%",
                        decimalPlaces: 1
                      }
                    }
                  ]
                }
              ]
            };
          }
        }
      );
      window.Smart(
        "#chart3",
        class {
          get properties() {
            return {
              caption: " ",
              description: "",
              showLegend: false,
              borderLineWidth: 0,
              titlePadding: {
                left: 0,
                top: 0,
                bottom: 10
              },
              toolTipFormatFunction: function(
                value,
                itemIndex,
                serie,
                group,
                xAxisValue
              ) {
                return `Visitors: ${value}, Hours: ${parseInt(
                  xAxisValue + ""
                )}`;
              },
              dataSource: [
                {
                  Hour: 9,
                  peakHours: 5,
                  nonPeakHours: 0
                },
                {
                  Hour: 10,
                  peakHours: 15,
                  nonPeakHours: 0
                },
                {
                  Hour: 11,
                  peakHours: 15,
                  nonPeakHours: 0
                },
                {
                  Hour: 12,
                  peakHours: 13,
                  nonPeakHours: 0
                },
                {
                  Hour: 13,
                  peakHours: 13,
                  nonPeakHours: 0
                },
                {
                  Hour: 14,
                  peakHours: 13,
                  nonPeakHours: 0
                },
                {
                  Hour: 15,
                  peakHours: 0,
                  nonPeakHours: 40
                },
                {
                  Hour: 16,
                  peakHours: 0,
                  nonPeakHours: 40
                },
                {
                  Hour: 17,
                  peakHours: 0,
                  nonPeakHours: 40
                },
                {
                  Hour: 18,
                  peakHours: 0,
                  nonPeakHours: 40
                },
                {
                  Hour: 19,
                  peakHours: 0,
                  nonPeakHours: 40
                },
                {
                  Hour: 20,
                  peakHours: 0,
                  nonPeakHours: 40
                },
                {
                  Hour: 21,
                  peakHours: 0,
                  nonPeakHours: 40
                },
                {
                  Hour: 22,
                  peakHours: 0,
                  nonPeakHours: 40
                },
                {
                  Hour: 23,
                  peakHours: 0,
                  nonPeakHours: 40
                }
              ],
              xAxis: {
                dataField: "Hour",
                type: "linear",
                minValue: 9,
                maxValue: 24,
                unitInterval: 3,
                gridLines: {
                  visible: false,
                  color: "#e0e0e0"
                },
                formatFunction: function(label) {
                  return label === 24
                    ? "12a"
                    : label > 12
                    ? (label % 12) + "p"
                    : label + "a";
                }
              },
              colorScheme: "scheme29",
              seriesGroups: [
                {
                  type: "column",
                  columnsGapPercent: 10,
                  seriesGapPercent: 0,
                  valueAxis: {
                    unitInterval: 20,
                    minValue: 0,
                    maxValue: 60,
                    description: "Visitors",
                    axisSize: "auto",
                    gridLines: {
                      color: "#e0e0e0"
                    }
                  },
                  series: [
                    {
                      dataField: "peakHours",
                      displayText: "Peak Hours"
                    },
                    {
                      dataField: "nonPeakHours",
                      displayText: "Non Peak Hours"
                    }
                  ]
                }
              ]
            };
          }
        }
      );
      window.Smart(
        "#chart4",
        class {
          get properties() {
            return {
              caption: " ",
              description: "",
              showLegend: false,
              borderLineWidth: 0,
              titlePadding: {
                left: 0,
                top: 0,
                bottom: 10
              },
              toolTipFormatFunction: function(
                value,
                itemIndex,
                serie,
                group,
                xAxisValue
              ) {
                let date = new Date();
                date.setDate(date.getDate() - date.getDay() + xAxisValue);
                return `Seconds: ${value}, Day: ${date.toLocaleDateString(
                  "en",
                  { weekday: "long" }
                )}`;
              },
              dataSource: [
                {
                  Day: 2,
                  preregistration: 40,
                  walkins: 45
                },
                {
                  Day: 3,
                  preregistration: 50,
                  walkins: 25
                },
                {
                  Day: 5,
                  preregistration: 0,
                  walkins: 30
                }
              ],
              xAxis: {
                dataField: "Day",
                type: "linear",
                minValue: 1,
                maxValue: 7,
                unitInterval: 1,
                gridLines: {
                  visible: false,
                  color: "#e0e0e0"
                },
                formatFunction: function(label) {
                  let date = new Date();
                  date.setDate(date.getDate() - date.getDay() + label);
                  return date
                    .toLocaleDateString("en", {
                      weekday: "long"
                    })
                    .slice(0, 2);
                }
              },
              colorScheme: "scheme29",
              seriesGroups: [
                {
                  type: "column",
                  columnsGapPercent: 25,
                  seriesGapPercent: 5,
                  valueAxis: {
                    unitInterval: 25,
                    minValue: 0,
                    maxValue: 50,
                    description: "Seconds",
                    axisSize: "auto",
                    gridLines: {
                      color: "#e0e0e0"
                    }
                  },
                  series: [
                    {
                      dataField: "preregistration",
                      displayText: "Pre-registration"
                    },
                    {
                      dataField: "walkins",
                      displayText: "Walk-ins"
                    }
                  ]
                }
              ]
            };
          }
        }
      );

      const chart = document.getElementById("chart"),
        chart2 = document.getElementById("chart2"),
        chart3 = document.getElementById("chart3"),
        chart4 = document.getElementById("chart4");
      chart.whenRendered(() => {
        chart.addColorScheme("custom", ["#1B5489", "#BDD831"]);
        chart.colorScheme = "custom";
      });
      chart2.whenRendered(() => {
        chart2.addColorScheme("custom", ["#1B5489", "#BDD831"]);
        chart2.colorScheme = "custom";
      });
      chart3.whenRendered(() => {
        chart3.addColorScheme("custom", ["#1B5489", "#EF8E99"]);
        chart3.colorScheme = "custom";
      });
      chart4.whenRendered(() => {
        chart4.addColorScheme("custom", ["#1B5489", "#BDD831"]);
        chart4.colorScheme = "custom";
      });
    });
  }
};
</script>

<style>
body {
  margin: 0 auto;
}

smart-chart {
  width: 100%;
  height: 100%;
  margin: initial;
}

.chart-holder {
  padding: 15px;
  border: 1px solid var(--smart-border);
  border-radius: var(--smart-border-radius);
}

.card-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.card-chart-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 70%;
  height: 100%;
}

.card-buttons-container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px 0 15px;
}

.card-buttons-container > div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-buttons-container smart-input {
  text-align: center;
}

.card-buttons-container smart-input:not(:last-of-type) {
  width: auto;
}

.card-buttons-container smart-button {
  background: #0b236b;
  color: white;
}

.card-buttons-container smart-button::after {
  content: var(--smart-icon-download-alt);
  font-family: var(--smart-font-family-icon);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 12px 0 0;
}

.chart-container {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  height: 100%;
  width: 100%;
}

#card2 .chart-container {
  grid-template-rows: auto 1fr;
}

.chart-container > div {
  display: flex;
  justify-content: space-between;
  --smart-text-box-default-width: 100px;
}

.chart-container > div:last-of-type {
  justify-content: flex-end;
}

.chart-container h2 {
  font-weight: 400;
  margin-top: 0;
}

.custom-chart-legend:first-of-type {
  margin-right: 10px;
}

.custom-chart-legend::before,
.custom-chart-legend2::before {
  content: var(--smart-icon-minus);
  color: #13548e;
  font-weight: 600;
  font-family: var(--smart-font-family-icon);
  margin-right: 5px;
}

.custom-chart-legend:last-of-type::before {
  color: #c2e028;
}

#card3 .custom-chart-legend:last-of-type::before {
  color: #ef8e99;
}

.custom-chart-legend2:first-of-type::before {
  content: var(--smart-icon-user);
}

.custom-chart-legend2::before {
  content: var(--smart-icon-clock);
}

#card2 .chart-container > div:last-of-type {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr auto;
}

#card2 .chart-container > div:last-of-type > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#chart2 {
  position: relative;
}

#chart2::after {
  content: "9";
  position: absolute;
  color: #238fab;
  font-size: 40px;
  display: flex;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

@media screen and (max-width: 700px) {
  .card-chart-container {
    grid-template-columns: 1fr;
  }
}
</style>
