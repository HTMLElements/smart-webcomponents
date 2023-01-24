<template>
  <div class="vue-root">
    <div class="container">
      <smart-3d-chart id="chart"></smart-3d-chart>
    </div>
    <div class="options">
		<div class="caption">Camera Controls</div>
        <div>
            <ul>
                <li>Hold mouse to rotate camera</li>
                <li>Scroll mouse wheel to zoom in/zoom out</li>
                <li>Right click with mouse to pan camera</li>
            </ul>
        </div>
        <div class="option">
            <smart-button id="stop-auto">Stop Auto-Rotate</smart-button>
            <br><br>
            <smart-button id="camera-pos">Set new camera position</smart-button>
        </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.3dchart.js";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sampleData = [
        { Year: "2017", Germany: 44.652, France: 38.781, UK: 40.857 },
        { Year: "2018", Germany: 47.973, France: 41.592, UK: 43.647 },
        { Year: "2019", Germany: 46.794, France: 40.578, UK: 43.07 },
        { Year: "2020", Germany: 46.252, France: 39.037, UK: 41.098 },
        { Year: "2021", Germany: 50.801, France: 43.518, UK: 47.334 },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              autoRotate: true,
              autoRotateSpeed: 5,
              caption: "GDP Per Capita Comparison",
              description:
                "Comparison of Germany, France and United Kingdom in thousands",
              showLegend: false,
              cameraPosition: {
                x: 10,
                y: 35,
                z: 70,
              },
              dataSource: sampleData,
              xAxis: {
                dataField: "Year",
              },
              valueAxis: {
                unitInterval: 8,
                minValue: 0,
                formatSettings: {
                  prefix: "$",
                  sufix: "K",
                  decimalPlaces: 0,
                },
              },
              seriesGroups: [
                {
                  type: "column",

                  series: [
                    { dataField: "Germany", displayText: "Germany" },
                    { dataField: "UK", displayText: "United Kingdom" },
                    { dataField: "France", displayText: "France" },
                  ],
                },
              ],
            };
          }
        }
      );

      document
        .getElementById("stop-auto")
        .addEventListener("click", function (event) {
          var chart = document.getElementById("chart");
          chart.autoRotate = false;
        });
      document
        .getElementById("camera-pos")
        .addEventListener("click", function (event) {
          var chart = document.getElementById("chart");
          chart.setCameraPosition(40, 30, 70);
        });
    });
  },
};
</script>
<style>
#chart {
  width: 80%;
  max-width: 1000px;
  height: 600px;
}
</style>