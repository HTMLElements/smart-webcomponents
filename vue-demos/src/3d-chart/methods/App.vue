<template>
  <div class="vue-root">
    <div class="container">
      <smart-3d-chart id="chart"></smart-3d-chart>
    </div>
    <div class="options">
      <div class="caption">Chart Methods</div>
      <div class="option">
        <h4>Series Group Index:</h4>
        <smart-number-input
          value="2"
          min="0"
          max="2"
          id="series-group"
        ></smart-number-input>
        <h4>Serie Index:</h4>
        <smart-number-input
          value="4"
          min="0"
          max="2"
          id="serie"
        ></smart-number-input>
        <h4>Item Index:</h4>
        <smart-number-input
          value="1"
          min="0"
          max="4"
          id="item"
        ></smart-number-input>
        <smart-button id="get-item">Get Item</smart-button>
        <br /><br />
        <smart-button id="show-item">Show Item</smart-button>
        <br />
        <smart-button id="hide-item">Hide Item</smart-button>
      </div>
      <div class="option">
        <br /><br />
        <smart-button id="get-value-axis">Get Value Axis Labels</smart-button>
        <br /><br />
        <smart-button id="get-x-axis">Get X Axis Labels</smart-button>
        <br /><br />
        <smart-button id="get-z-axis">Get Z Axis Labels</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.3dchart.js";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.numberinput.js";

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
              showLegendTable: true,
              cameraPosition: {
                x: 10,
                y: 30,
                z: 55,
              },
              dataSource: source,
              colorScheme: "scheme29",
              xAxis: {
                dataField: "Day",
              },
              valueAxis: {
                minValue: 0,
              },
              seriesGroups: [
                {
                  type: "stackedcolumn",
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
                  type: "stackedcolumn",
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
                  type: "stackedcolumn",
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