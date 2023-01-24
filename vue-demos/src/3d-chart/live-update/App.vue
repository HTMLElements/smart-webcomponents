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
      let sampleData = [
        { Month: "Jan", Computers: 140, Laptops: 180 },
        { Month: "Feb", Computers: 120, Laptops: 160 },
        { Month: "Mar", Computers: 100, Laptops: 140 },
        { Month: "Apr", Computers: 180, Laptops: 200 },
        { Month: "May", Computers: 220, Laptops: 240 },
        { Month: "Jun", Computers: 200, Laptops: 220 },
        { Month: "Jul", Computers: 175, Laptops: 230 },
        { Month: "Aug", Computers: 160, Laptops: 210 },
        { Month: "Sep", Computers: 200, Laptops: 190 },
        { Month: "Oct", Computers: 180, Laptops: 170 },
        { Month: "Nov", Computers: 160, Laptops: 210 },
        { Month: "Dec", Computers: 165, Laptops: 140 },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Projected Sales of Electronic Store",
              description: "Chart is updated every 100ms",
              showLegend: false,
              cameraPosition: {
                x: 0,
                y: 15,
                z: 50,
              },
              controlsSettings: {
                enableRotate: false,
              },
              dataSource: sampleData,
              colorScheme: "scheme01",
              xAxis: {
                dataField: "Month",
              },
              gridOptions: {
                slotWidthZ: 10,
              },
              valueAxis: {
                unitInterval: 20,
              },
              seriesGroups: [
                {
                  type: "line",

                  series: [
                    { dataField: "Computers", displayText: "Computers" },
                    { dataField: "Laptops", displayText: "Laptops" },
                  ],
                },
              ],
            };
          }
        }
      );

      //generate sample data
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let i = 0;
      setInterval(function () {
        sampleData.splice(0, 1);
        sampleData.push({
          Month: months[i % months.length],
          Computers: Math.floor(Math.random() * (250 + 1)),
          Laptops: Math.floor(Math.random() * 250) + 50,
        });
        document.querySelector("#chart").update();
        i++;
      }, 100);
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