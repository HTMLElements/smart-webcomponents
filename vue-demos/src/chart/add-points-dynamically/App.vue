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
      const sampleData = [
        {
          x: 15,
          y: 30
        },
        {
          x: 55,
          y: 90
        }
      ];
      let maxX = 200,
        maxY = 200;
      window.Smart(
        "#chart",
        class {
          get properties() {
            return {
              animation: "none",
              caption: "Adding Data Points Dynamically",
              description: "Click the plot area to add a point",
              showLegend: false,
              padding: {
                left: 10,
                top: 5,
                right: 10,
                bottom: 5
              },
              titlePadding: {
                left: 50,
                top: 0,
                right: 0,
                bottom: 10
              },
              dataSource: sampleData,
              colorScheme: "scheme28",
              xAxis: {
                dataField: "x",
                minValue: 0,
                maxValue: maxX
              },
              valueAxis: {
                visible: true,
                title: {
                  text: ""
                },
                minValue: 0,
                maxValue: maxY,
                unitInterval: 50
              },
              seriesGroups: [
                {
                  type: "line",
                  series: [
                    {
                      dataField: "y",
                      symbolType: "circle",
                      symbolSize: 10
                    }
                  ]
                }
              ]
            };
          }
        }
      );

      const chart = document.getElementById("chart"),
        box = {
          x: 48,
          y: 479,
          width: 798,
          height: 420
        };
      let xRatio = box.width / maxX,
        yRatio = box.height / maxY;
      chart.addEventListener("click", function(event) {
        if (
          event.pageX < box.x ||
          event.pageX > box.x + box.width ||
          event.pageY < box.y - box.height ||
          event.pageY > box.y
        ) {
          return;
        }
        const x = (event.pageX - box.x) / xRatio,
          y = (box.y - event.pageY) / yRatio;
        sampleData.push({
          x: x,
          y: y
        });
        chart.update();
        if (x >= maxX * 0.9) {
          maxX += 50;
          xRatio = box.width / maxX;
          if (chart.xAxis) {
            chart.xAxis.maxValue = maxX;
          }
        }
        if (y >= maxY * 0.9) {
          maxY += 50;
          yRatio = box.height / maxY;
          if (chart.valueAxis) {
            chart.valueAxis.maxValue = maxY;
          }
        }
        chart.update();
      });
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
