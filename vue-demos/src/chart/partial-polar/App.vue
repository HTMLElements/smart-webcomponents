<template>
  <div class="vue-root">
    <smart-chart id="chart"></smart-chart>
    <div class="options">
      <table>
        <tr>
          <td>
            <p>Move the slider to change start angle:</p>
            <smart-slider
              id="sliderStartAngle"
              min="0"
              max="360"
              value="0"
              coerce
              labels-visibility="endPoints"
              ticks-visibility="major"
              show-unit
              unit="°"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            <p>Move the slider to change end angle:</p>
            <smart-slider
              id="sliderEndAngle"
              min="0"
              max="360"
              value="270"
              coerce
              labels-visibility="endPoints"
              ticks-visibility="major"
              show-unit
              unit="°"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            <p>Move the slider to rotate:</p>
            <smart-slider
              id="sliderRotate"
              min="0"
              max="360"
              value="0"
              coerce
              labels-visibility="endPoints"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            <p>Move the slider to change the radius:</p>
            <smart-slider
              id="sliderRadius"
              min="80"
              max="140"
              value="120"
              coerce
              labels-visibility="endPoints"
              ticks-visibility="major"
            ></smart-slider>
          </td>
        </tr>
        <tr>
          <td>
            <smart-check-box id="checkBoxAutoRotateLabels" checked>Auto-rotate labels</smart-check-box>
          </td>
        </tr>
        <tr>
          <td>
            <smart-check-box id="checkBoxTicksBetween">Ticks between values</smart-check-box>
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
          City: "London",
          SalesCountJan: 210,
          SalesRevenueJan: 123
        },
        {
          City: "Madrid",
          SalesCountJan: 190,
          SalesRevenueJan: 114
        },
        {
          City: "Munich",
          SalesCountJan: 201,
          SalesRevenueJan: 112
        },
        {
          City: "Amsterdam",
          SalesCountJan: 110,
          SalesRevenueJan: 98
        },
        {
          City: "Paris",
          SalesCountJan: 105,
          SalesRevenueJan: 93
        },
        {
          City: "Prague",
          SalesCountJan: 54,
          SalesRevenueJan: 100
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Sales volume and revenue by city",
              description: "(revenue in thousands)",
              animation: "none",
              showLegend: true,
              padding: {
                left: 5,
                top: 5,
                right: 5,
                bottom: 5
              },
              titlePadding: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 5
              },
              colorScheme: "scheme01",
              dataSource: sampleData,
              xAxis: {
                dataField: "City",
                valuesOnTicks: true,
                labels: {
                  autoRotate: true
                }
              },
              valueAxis: {
                labels: {
                  formatSettings: {
                    decimalPlaces: 0
                  },
                  autoRotate: true
                }
              },
              seriesGroups: [
                {
                  polar: true,
                  endAngle: 270,
                  radius: 120,
                  type: "line",
                  series: [
                    {
                      dataField: "SalesCountJan",
                      displayText: "Sales count",
                      opacity: 0.7,
                      lineWidth: 1,
                      radius: 2,
                      symbolType: "circle"
                    },
                    {
                      dataField: "SalesRevenueJan",
                      displayText: "Revenue",
                      opacity: 0.7,
                      lineWidth: 1,
                      radius: 2,
                      symbolType: "square"
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
        .getElementById("sliderStartAngle")
        .addEventListener("change", function(event) {
          const value = parseFloat(event.detail.value);
          chart.seriesGroups[0].startAngle = value;
          chart.update();
        });
      document
        .getElementById("sliderEndAngle")
        .addEventListener("change", function(event) {
          const value = parseFloat(event.detail.value);
          chart.seriesGroups[0].endAngle = value;
          chart.update();
        });
      document
        .getElementById("sliderRotate")
        .addEventListener("change", function(event) {
          const value = parseFloat(event.detail.value);
          if (!chart.seriesGroups && !chart.seriesGroups[0]) {
            return;
          }
          if (chart.seriesGroups[0]) {
            let startAngle = chart.seriesGroups[0].startAngle || 0,
              endAngle = chart.seriesGroups[0].endAngle || 0;
            if (isNaN(endAngle)) {
              endAngle = 360;
            }
            if (isNaN(startAngle)) {
              startAngle = 0;
            }
            const diff = endAngle - startAngle;
            chart.seriesGroups[0].startAngle = value;
            chart.seriesGroups[0].endAngle = value + diff;
            chart.update();
          }
        });
      document
        .getElementById("sliderRadius")
        .addEventListener("change", function(event) {
          const value = parseFloat(event.detail.value);
          chart.seriesGroups[0].radius = value;
          chart.update();
        });
      document
        .getElementById("checkBoxAutoRotateLabels")
        .addEventListener("change", function(event) {
          if (chart.xAxis && chart.xAxis.labels) {
            chart.xAxis.labels.autoRotate = event.detail.value;
          }
          if (chart.valueAxis && chart.valueAxis.labels) {
            chart.valueAxis.labels.autoRotate = event.detail.value;
          }
        });
      document
        .getElementById("checkBoxTicksBetween")
        .addEventListener("change", function(event) {
          if (chart.xAxis) {
            chart.xAxis.valuesOnTicks = !event.detail.value;
          }
        });
    });
  }
};
</script>

<style>
smart-slider {
  width: 250px;
  height: 50px;
}
smart-chart {
  max-width: 550px;
  width: 100%;
}
</style>
