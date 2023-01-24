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
      let years = [
        "2021",
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030",
      ];
      let startDate = new Date(2021, 0, 1);
      for (let i = 0; i < 4000; i++) {
        let nextDate = new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + 1
        );
        startDate = nextDate;
        sampleData.push({
          Date: nextDate,
          Computers: Math.floor(Math.random() * 20) + 150,
          Laptops: Math.floor(Math.random() * 80 + 80),
        });
      }

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              animation: "none",
              caption: "Projected Electronic Sales for the next 10 years",
              description: "Dataset of 4000 points",
              cameraPosition: {
                x: 30,
                y: 30,
                z: 70,
              },
              dataSource: sampleData,
              colorScheme: "scheme01",
              xAxis: {
                dataField: "Date",
                labels: {
                  step: 2,
                },
                formatFunction: function (value) {
                  return months[value.getMonth()] + " " + value.getFullYear();
                },
              },
              gridOptions: {
                slotWidthZ: 15,
                dynamicWidth: false,
              },
              valueAxis: {
                unitInterval: 20,
                minValue: 0,
              },
              seriesGroups: [
                {
                  type: "area",

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