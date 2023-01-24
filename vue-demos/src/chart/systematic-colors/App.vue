<template>
  <div class="vue-root">
    <div id="colorsContainer"></div>
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
      /// <reference path="./../../../source/typescript/smart.elements.d.ts" />
      const colors = [
          "#C8F08F",
          "#B4E051",
          "#8CD211",
          "#5AA700",
          "#4C8400",
          "#2D660A",
          "#144D14",
          "#0A3C02",
          "#0C2808",
          "#020301"
        ],
        sampleData = [
          {
            saturation: 40.42,
            brightness: 94.12
          },
          {
            saturation: 63.84,
            brightness: 87.84
          },
          {
            saturation: 91.9,
            brightness: 82.35
          },
          {
            saturation: 100,
            brightness: 65.49
          },
          {
            saturation: 100,
            brightness: 51.76
          },
          {
            saturation: 90.2,
            brightness: 40
          },
          {
            saturation: 74.03,
            brightness: 30.2
          },
          {
            saturation: 96.67,
            brightness: 23.53
          },
          {
            saturation: 80,
            brightness: 15.69
          },
          {
            saturation: 66.67,
            brightness: 1.18
          }
        ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "",
              description: "",
              borderLineWidth: 0,
              padding: {
                left: 15,
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
              showLegend: false,
              clip: false,
              xAxis: {
                dataField: "saturation",
                minValue: 0,
                maxValue: 100,
                unitInterval: 10,
                position: "top",
                title: {
                  text: "Saturation"
                },
                valuesOnTicks: true,
                labels: {
                  formatFunction(value) {
                    if (value !== 0) {
                      return " ";
                    }
                    return value;
                  }
                }
              },
              valueAxis: {
                minValue: 0,
                maxValue: 100,
                position: "right",
                title: {
                  text: "Brightness"
                },
                labels: {
                  horizontalAlignment: "right",
                  formatFunction(value) {
                    if (value % 100 !== 0) {
                      return " ";
                    }
                    return value;
                  }
                }
              },
              seriesGroups: [
                {
                  type: "scatter",
                  series: [
                    {
                      dataField: "brightness",
                      displayText: "Brightness",
                      symbolType: "circle",
                      symbolSize: 25,
                      lineWidth: 1,
                      useGradientColors: false,
                      colorFunction: function(value, itemIndex) {
                        return colors[itemIndex];
                      },
                      toolTipFormatFunction: function(value, itemIndex) {
                        return colors[itemIndex];
                      },
                      labels: {
                        visible: true,
                        offset: {
                          x: -27
                        },
                        formatFunction: function(value, itemIndex) {
                          return "" + (itemIndex + 1) * 10;
                        }
                      }
                    }
                  ]
                }
              ]
            };
          }
        }
      );

      const colorsContainer = document.getElementById("colorsContainer");
      for (let i = 0; i < colors.length; i++) {
        const colorDiv = document.createElement("div");
        colorDiv.style.backgroundColor = colors[i];
        colorDiv.innerHTML = `<span>${(i + 1) * 10}</span><span>${
          colors[i]
        }</span>`;
        colorsContainer.appendChild(colorDiv);
      }
    });
  }
};
</script>

<style>
body,
.vue-root {
  display: flex;
}

#colorsContainer {
  position: relative;
  top: 63px;
  width: 200px;
}

#colorsContainer > div {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 9.6px;
  height: 66px;
  color: white;
  font-family: var(--smart-font-family);
}

#colorsContainer > div:first-child,
#colorsContainer > div:nth-child(2),
#colorsContainer > div:nth-child(3),
#colorsContainer > div:nth-child(4) {
  color: black;
}

#chart {
  width: 840px;
  height: 820px;
}

#chart .smart-chart-axis-description {
  font-size: 20px;
}

#chart .smart-chart-axis-text {
  font-size: 15px;
}
</style>
