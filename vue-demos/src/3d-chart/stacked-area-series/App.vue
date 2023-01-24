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
      const source = [
        {
          Year: "2020",
          USA: {
            Children: 40,
            Elderly: 20,
          },
          Germany: {
            Children: 30,
            Elderly: 20,
          },
          Japan: {
            Children: 20,
            Elderly: 40,
          },
        },
        {
          Year: "2021",
          USA: {
            Children: 45,
            Elderly: 15,
          },
          Germany: {
            Children: 25,
            Elderly: 20,
          },
          Japan: {
            Children: 20,
            Elderly: 50,
          },
        },
        {
          Year: "2022",
          USA: {
            Children: 50,
            Elderly: 10,
          },
          Germany: {
            Children: 20,
            Elderly: 20,
          },
          Japan: {
            Children: 10,
            Elderly: 60,
          },
        },
        {
          Year: "2023",
          USA: {
            Children: 55,
            Elderly: 5,
          },
          Germany: {
            Children: 15,
            Elderly: 20,
          },
          Japan: {
            Children: 10,
            Elderly: 70,
          },
        },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Population Changes of Children and Edlerly",
              description: "",
              showLegend: false,
              cameraPosition: {
                x: 15,
                y: 30,
                z: 70,
              },
              gridOptions: {
                slotWidthZ: 20,
              },
              dataSource: source,
              xAxis: {
                dataField: "Year",
              },
              valueAxis: {
                minValue: 0,
              },
              seriesGroups: [
                {
                  type: "stackedarea",
                  dataField: "Japan",
                  displayText: "Japan",
                  series: [
                    {
                      dataField: "Children",
                      displayText: "Children",
                    },
                    {
                      dataField: "Elderly",
                      displayText: "Elderly",
                    },
                  ],
                },
                {
                  type: "stackedarea",
                  dataField: "USA",
                  displayText: "USA",
                  series: [
                    {
                      dataField: "Children",
                      displayText: "Children",
                    },
                    {
                      dataField: "Elderly",
                      displayText: "Elderly",
                    },
                  ],
                },
                {
                  type: "stackedarea",
                  dataField: "Germany",
                  displayText: "Germany",
                  series: [
                    {
                      dataField: "Children",
                      displayText: "Children",
                    },
                    {
                      dataField: "Elderly",
                      displayText: "Elderly",
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