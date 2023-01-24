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
      let sampleData = [];
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
      for (let i = 0; i < 12; i++) {
        let obj = {
          Month: months[i],
          AMZNTo: Math.floor(Math.random() * 15) + 30,
          AMZNFrom: Math.floor(Math.random() * 15) + 25,
          GOOGTo: Math.floor(Math.random() * 20) + 80,
          GOOGFrom: Math.floor(Math.random() * 20) + 50,
          AAPLTo: Math.floor(Math.random() * 10) + 50,
          AAPLFrom: Math.floor(Math.random() * 15) + 30,
        };
        sampleData.push(obj);
      }

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Stock Changes in January 2022",
              description: "Generated with random data",
              cameraPosition: {
                x: 50,
                y: 40,
                z: 70,
              },
              dataSource: sampleData,
              colorScheme: "scheme05",
              xAxis: {
                dataField: "Month",
              },
              gridOptions: {
                slotWidthZ: 17,
                width: 120,
                height: 60,
              },
              valueAxis: {
                unitInterval: 15,
                minValue: 0,
                maxValue: 100,
                formatFunction: (value) => {
                  return parseFloat(value).toFixed(2) + "$";
                },
              },
              seriesGroups: [
                {
                  type: "rangearea",

                  series: [
                    {
                      dataFieldFrom: "GOOGFrom",
                      displayTextFrom: "From",
                      dataFieldTo: "GOOGTo",
                      displayTextTo: "To",
                      displayText: "Google",
                    },
                    {
                      dataFieldFrom: "AAPLFrom",
                      displayTextFrom: "From",
                      dataFieldTo: "AAPLTo",
                      displayTextTo: "To",
                      displayText: "Apple",
                    },
                    {
                      dataFieldFrom: "AMZNFrom",
                      displayTextFrom: "From",
                      dataFieldTo: "AMZNTo",
                      displayTextTo: "To",
                      displayText: "Amazon",
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