<template>
  <div class="vue-root">
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
      function toolTipCustomFormatFn(
        value,
        itemIndex,
        serie,
        group,
        xAxisValue
      ) {
        //const dataItem = data[itemIndex];
        return `<div style="text-align: left;">
<strong>Team: ${xAxisValue}</strong>
<br />Start day: ${value.from}
<br />End day: ${value.to}
</div>`;
      }
      const data = [
        {
          Person: "Planning",
          M1_From: 2,
          M1_To: 5,
          M2_From: 5,
          M2_To: 10
        },
        {
          Person: "Dev 1",
          M1_From: 5,
          M1_To: 7,
          M2_From: 9,
          M2_To: 17
        },
        {
          Person: "Dev 2",
          M1_From: 5,
          M1_To: 12,
          M2_From: 14,
          M2_To: 22
        },
        {
          Person: "QA 1",
          M1_From: 7,
          M1_To: 14,
          M2_From: 14,
          M2_To: 25
        }
      ];
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Monthly Project Schedule",
              description: "Website update plan",
              showLegend: true,
              padding: {
                left: 5,
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
              dataSource: data,
              xAxis: {
                dataField: "Person",
                unitInterval: 1,
                tickMarks: {
                  visible: true,
                  unitInterval: 1,
                  color: "#BCBCBC"
                }
              },
              colorScheme: "scheme32",
              seriesGroups: [
                {
                  orientation: "horizontal",
                  type: "rangecolumn",
                  columnsGapPercent: 100,
                  toolTipFormatFunction: toolTipCustomFormatFn,
                  valueAxis: {
                    flip: true,
                    minValue: 1,
                    maxValue: 30,
                    unitInterval: 1,
                    title: {
                      text: "Day"
                    },
                    tickMarks: {
                      color: "#BCBCBC"
                    }
                  },
                  series: [
                    {
                      dataFieldFrom: "M1_From",
                      dataFieldTo: "M1_To",
                      displayText: "Sprint 1",
                      opacity: 1
                    },
                    {
                      dataFieldFrom: "M2_From",
                      dataFieldTo: "M2_To",
                      displayText: "Sprint 2",
                      opacity: 1
                    }
                  ],
                  bands: [
                    {
                      minValue: 13,
                      maxValue: 16,
                      color: "#00FF00",
                      opacity: 0.15
                    },
                    {
                      minValue: 24,
                      maxValue: 27,
                      color: "#FFBC70",
                      opacity: 0.2
                    },
                    {
                      minValue: 29,
                      maxValue: 29,
                      color: "#FF0000",
                      opacity: 0.5,
                      lineWidth: 3
                    }
                  ]
                }
              ]
            };
          }
        }
      );
    });
  }
};
</script>

<style>
smart-chart {
  width: 100%;
  max-width: 850px;
}
</style>
