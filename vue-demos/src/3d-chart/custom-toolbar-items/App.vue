<template>
  <div class="vue-root">
    <div class="container">
      <smart-3d-chart id="chart"></smart-3d-chart>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.3dchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sampleData = [
        { Day: "Monday", Keith: 30, Erica: 15, George: 25 },
        { Day: "Tuesday", Keith: 25, Erica: 25, George: 30 },
        { Day: "Wednesday", Keith: 30, Erica: 20, George: 25 },
        { Day: "Thursday", Keith: 35, Erica: 25, George: 45 },
        { Day: "Friday", Keith: 20, Erica: 20, George: 25 },
        { Day: "Saturday", Keith: 30, Erica: 20, George: 30 },
        { Day: "Sunday", Keith: 20, Erica: 45, George: 30 },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Fitness & exercise weekly scorecard",
              description: "Time spent in vigorous exercise by 3 people",
              showLegend: true,
              cameraPosition: {
                x: 15,
                y: 30,
                z: 70,
              },
              dataSource: sampleData,
              colorScheme: "scheme29",
              xAxis: {
                dataField: "Day",
              },
              valueAxis: {
                unitInterval: 5,
                minValue: 0,
              },
              controlsToolbarItems: [
                "reset-camera",
                "zoom-in",
                "zoom-out",
                "save-image",
                "camera-control",
                {
                  name: "change-type",
                  content: "<jqx-button>Change Type</jqx-button>",
                  action: function () {
                    let chartElem = document.getElementById("chart");
                    let type = chartElem.seriesGroups[0].type;
                    chartElem.seriesGroups[0].type =
                      type === "column" ? "line" : "column";
                    chartElem.refresh();
                  },
                },
              ],
              seriesGroups: [
                {
                  type: "column",

                  series: [
                    { dataField: "Keith", displayText: "Keith" },
                    { dataField: "Erica", displayText: "Erica" },
                    { dataField: "George", displayText: "George" },
                  ],
                },
              ],
            };
          }
        }
      );
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