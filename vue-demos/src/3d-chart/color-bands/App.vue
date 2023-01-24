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
      const data = [
        { Person: "Planning", M1_From: 2, M1_To: 5, M2_From: 5, M2_To: 10 },
        { Person: "Dev 1", M1_From: 5, M1_To: 7, M2_From: 9, M2_To: 17 },
        { Person: "Dev 2", M1_From: 5, M1_To: 12, M2_From: 14, M2_To: 22 },
        { Person: "QA 1", M1_From: 7, M1_To: 14, M2_From: 14, M2_To: 25 },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Monthly Project Schedule",
              description: "Website update plan",
              showLegend: true,
              dataSource: data,
              xAxis: {
                dataField: "Person",
                unitInterval: 1,
              },
              valueAxis: {
                minValue: 1,
                maxValue: 30,
                unitInterval: 6,
                formatFunction: function (value) {
                  return "Day " + value;
                },
              },
              colorScheme: "scheme32",
              seriesGroups: [
                {
                  orientation: "horizontal",
                  type: "rangecolumn",
                  columnsGapPercent: 100,
                  series: [
                    {
                      dataFieldFrom: "M2_From",
                      dataFieldTo: "M2_To",
                      displayText: "Sprint 2",
                      opacity: 1,
                      displayTextTo: "End Day",
                      displayTextFrom: "Start Day",
                    },
                    {
                      dataFieldFrom: "M1_From",
                      dataFieldTo: "M1_To",
                      displayText: "Sprint 1",
                      opacity: 1,
                      displayTextTo: "End Day",
                      displayTextFrom: "Start Day",
                    },
                  ],
                  bands: [
                    {
                      minValue: 13,
                      maxValue: 16,
                      color: "#00FF00",
                      opacity: 0.3,
                    },
                    {
                      minValue: 24,
                      maxValue: 27,
                      color: "#FFBC70",
                      opacity: 0.6,
                    },
                    {
                      minValue: 29,
                      maxValue: 29,
                      color: "#FF0000",
                      opacity: 0.45,
                      lineWidth: 3,
                    },
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