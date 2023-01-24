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
          Day: "Monday",
          Keith: {
            Running: 10,
            Swimming: 20,
            Cycling: 30,
          },
          Erica: {
            Running: 13,
            Swimming: 30,
            Cycling: 23,
          },
          George: {
            Running: 15,
            Swimming: 70,
            Cycling: 10,
          },
        },
        {
          Day: "Tuesday",
          Keith: {
            Running: 15,
            Swimming: 15,
            Cycling: 40,
          },
          Erica: {
            Running: 10,
            Swimming: 15,
            Cycling: 40,
          },
          George: {
            Running: 35,
            Swimming: 15,
            Cycling: 40,
          },
        },
        {
          Day: "Wednesday",
          Keith: {
            Running: 55,
            Swimming: 15,
            Cycling: 10,
          },
          Erica: {
            Running: 15,
            Swimming: 60,
            Cycling: 5,
          },
          George: {
            Running: 50,
            Swimming: 5,
            Cycling: 10,
          },
        },
        {
          Day: "Thursday",
          Keith: {
            Running: 15,
            Swimming: 15,
            Cycling: 40,
          },
          Erica: {
            Running: 15,
            Swimming: 15,
            Cycling: 40,
          },
          George: {
            Running: 15,
            Swimming: 15,
            Cycling: 5,
          },
        },
        {
          Day: "Friday",
          Keith: {
            Running: 15,
            Swimming: 15,
            Cycling: 40,
          },
          Erica: {
            Running: 15,
            Swimming: 15,
            Cycling: 40,
          },
          George: {
            Running: 5,
            Swimming: 5,
            Cycling: 40,
          },
        },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Fitness & exercise weekly scorecard",
              description: "Time spent in vigorous exercise by 3 people",
              showLegend: true,
              legendLayout: {
                flow: "horizontal",
              },
              cameraPosition: {
                x: 15,
                y: 30,
                z: 70,
              },
              dataSource: source,
              colorScheme: "scheme05",
              xAxis: {
                dataField: "Day",
              },
              valueAxis: {
                formatSettings: {
                  sufix: " %",
                },
              },
              seriesGroups: [
                {
                  type: "stackedcolumn100",
                  dataField: "Keith",
                  displayText: "Keith",
                  series: [
                    {
                      dataField: "Running",
                      displayText: "Running",
                    },
                    {
                      dataField: "Cycling",
                      displayText: "Cycling",
                    },
                    {
                      dataField: "Swimming",
                      displayText: "Swimming",
                    },
                  ],
                },
                {
                  type: "stackedcolumn100",
                  dataField: "Erica",
                  displayText: "Erica",
                  series: [
                    {
                      dataField: "Running",
                      displayText: "Running",
                    },
                    {
                      dataField: "Cycling",
                      displayText: "Cycling",
                    },
                    {
                      dataField: "Swimming",
                      displayText: "Swimming",
                    },
                  ],
                },
                {
                  type: "stackedcolumn100",
                  dataField: "George",
                  displayText: "George",
                  series: [
                    {
                      dataField: "Running",
                      displayText: "Running",
                    },
                    {
                      dataField: "Cycling",
                      displayText: "Cycling",
                    },
                    {
                      dataField: "Swimming",
                      displayText: "Swimming",
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