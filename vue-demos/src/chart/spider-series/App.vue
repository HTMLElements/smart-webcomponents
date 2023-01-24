<template>
  <div class="vue-root">
    <smart-chart id="chart"></smart-chart>
    <div class="options">
      <table>
        <tr>
          <td>
            <p>Move the slider to rotate:</p>
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
            <p>Select the series type:</p>
            <smart-drop-down-list id="dropDownSeries" selection-mode="one" selected-indexes="[1]"></smart-drop-down-list>
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
            <p>Select color scheme:</p>
            <smart-drop-down-list id="dropDownColors" selection-mode="one" selected-indexes="[4]"></smart-drop-down-list>
          </td>
        </tr>
        <tr>
          <td>
            <smart-check-box id="checkBoxAutoRotateLabels">Auto-rotate labels</smart-check-box>
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
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sampleData = [
        {
          type: "Organic Search",
          month1: 1725090,
          month2: 3136190
        },
        {
          type: "Paid Search",
          month1: 925090,
          month2: 2136190
        },
        {
          type: "Direct",
          month1: 425090,
          month2: 936190
        },
        {
          type: "Referral",
          month1: 1250900,
          month2: 2536190
        },
        {
          type: "Twitter",
          month1: 350900,
          month2: 681900
        },
        {
          type: "Facebook",
          month1: 381900,
          month2: 831500
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Website audience acquision by source",
              description: "Month over month comparison",
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
              dataSource: sampleData,
              colorScheme: "scheme05",
              xAxis: {
                dataField: "type",
                displayText: "Traffic source",
                valuesOnTicks: true,
                labels: {
                  autoRotate: false
                }
              },
              valueAxis: {
                unitInterval: 1000000,
                labels: {
                  formatSettings: {
                    decimalPlaces: 0
                  },
                  formatFunction: function(value) {
                    return Math.round(value / 1000) + " K";
                  }
                }
              },
              seriesGroups: [
                {
                  spider: true,
                  startAngle: 0,
                  endAngle: 360,
                  radius: 120,
                  type: "spline",
                  series: [
                    {
                      dataField: "month1",
                      displayText: "January 2018",
                      opacity: 0.7,
                      radius: 2,
                      lineWidth: 2,
                      symbolType: "circle"
                    },
                    {
                      dataField: "month2",
                      displayText: "February 2018",
                      opacity: 0.7,
                      radius: 2,
                      lineWidth: 2,
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
          if (chart.seriesGroups && chart.seriesGroups[0]) {
            chart.seriesGroups[0].startAngle = value;
            chart.seriesGroups[0].endAngle = value + 360;
            chart.update();
          }
        });
      document
        .getElementById("sliderRadius")
        .addEventListener("change", function(event) {
          if (!chart.seriesGroups) {
            return;
          }
          const value = parseFloat(event.detail.value);
          if (chart.seriesGroups[0]) {
            chart.seriesGroups[0].radius = value;
            chart.update();
          }
        });

      const dropDownColors = document.getElementById("dropDownColors");
      dropDownColors.dataSource = [
        "scheme01",
        "scheme02",
        "scheme03",
        "scheme04",
        "scheme05",
        "scheme06",
        "scheme07",
        "scheme08"
      ];
      dropDownColors.addEventListener("change", function() {
        const dropDownList = this;
        chart.colorScheme = dropDownList.selectedValues[0];
      });

      const dropDownSeries = document.getElementById("dropDownSeries");
      dropDownSeries.dataSource = [
        "splinearea",
        "spline",
        "column",
        "scatter",
        "stackedcolumn",
        "stackedsplinearea",
        "stackedspline"
      ];
      dropDownSeries.addEventListener("change", function() {
        if (!chart.seriesGroups) {
          return;
        }
        if (chart.seriesGroups[0]) {
          const dropDownList = this;
          if (!dropDownList.selectedValues) {
            return;
          }
          chart.seriesGroups[0].type = dropDownList.selectedValues[0];
          chart.update();
        }
      });
      document
        .getElementById("checkBoxAutoRotateLabels")
        .addEventListener("change", function(event) {
          if (!chart) {
            return;
          }
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
          if (!chart || !chart.xAxis) {
            return;
          }
          chart.xAxis.valuesOnTicks = !event.detail.value;
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
