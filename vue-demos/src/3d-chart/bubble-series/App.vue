<template>
  <div class="vue-root">
    <div class="container">
      <smart-3d-chart id="chart"></smart-3d-chart>
    </div>
    <div class="options">
        <table>
            <tr>
                <td>
                    <p>
                        Select Serie 1 Symbol:
                    </p>
                    <smart-drop-down-list id='dropDownSerie1Symbol' data-source='["circle", "diamond", "square", "triangle_up", "triangle_down", "triangle_left", "triangle_right"]' selection-mode="one" selected-indexes="[1]"></smart-drop-down-list>
                </td>         
            </tr>
			<tr>
			      <td>
                    <p>
                        Select Serie 2 Symbol:
                    </p>
                    <smart-drop-down-list id='dropDownSerie2Symbol' data-source='["circle", "diamond", "square", "triangle_up", "triangle_down", "triangle_left", "triangle_right"]' selection-mode="one" selected-indexes="[4]"></smart-drop-down-list>
                </td>
			</tr>
        </table>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.3dchart.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sampleData = [
        {
          City: "New York",
          SalesQ1: 310500,
          SalesQ2: 210500,
          YoYGrowthQ1: 1.05,
          YoYGrowthQ2: 1.25,
        },
        {
          City: "London",
          SalesQ1: 120000,
          SalesQ2: 169000,
          YoYGrowthQ1: 1.15,
          YoYGrowthQ2: 0.95,
        },
        {
          City: "Paris",
          SalesQ1: 205000,
          SalesQ2: 275500,
          YoYGrowthQ1: 1.45,
          YoYGrowthQ2: 1.15,
        },
        {
          City: "Tokyo",
          SalesQ1: 187000,
          SalesQ2: 130100,
          YoYGrowthQ1: 0.45,
          YoYGrowthQ2: 0.55,
        },
        {
          City: "Berlin",
          SalesQ1: 187000,
          SalesQ2: 113000,
          YoYGrowthQ1: 1.65,
          YoYGrowthQ2: 1.05,
        },
        {
          City: "San Francisco",
          SalesQ1: 142000,
          SalesQ2: 102000,
          YoYGrowthQ1: 0.75,
          YoYGrowthQ2: 0.15,
        },
        {
          City: "Chicago",
          SalesQ1: 171000,
          SalesQ2: 124000,
          YoYGrowthQ1: 0.75,
          YoYGrowthQ2: 0.65,
        },
      ];
      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Sales by City in Q1 and Q2, and YoY sales growth",
              description:
                "(the size of the circles represents relative YoY growth)",
              showLegend: true,
              cameraPosition: {
                x: 15,
                y: 30,
                z: 70,
              },
              dataSource: sampleData,
              colorScheme: "scheme32",
              xAxis: {
                dataField: "City",
              },
              valueAxis: {
                unitInterval: 50000,
                minValue: 0,
                maxValue: 400000,
                formatFunction: (value) => {
                  var formatter = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  });

                  return formatter.format(value);
                },
                formatSettings: {
                  prefix: "$",
                },
              },
              seriesGroups: [
                {
                  type: "bubble",
                  series: [
                    {
                      dataField: "SalesQ1",
                      radiusDataField: "YoYGrowthQ1",
                      minRadius: 2,
                      maxRadius: 7,
                      displayText: "Sales in Q1",
                      symbolType: "diamond",
                    },
                    {
                      dataField: "SalesQ2",
                      radiusDataField: "YoYGrowthQ2",
                      minRadius: 2,
                      maxRadius: 7,
                      displayText: "Sales in Q2",
                      symbolType: "triangle_down",
                    },
                  ],
                },
              ],
            };
          }
        }
      );

      const chart = document.getElementById("chart");

      document
        .getElementById("dropDownSerie1Symbol")
        .addEventListener("change", function (event) {
          chart.seriesGroups[0].series[0].symbolType = event.detail.value;
          chart.refresh();
        });
      document
        .getElementById("dropDownSerie2Symbol")
        .addEventListener("change", function (event) {
          chart.seriesGroups[0].series[1].symbolType = event.detail.value;
          chart.refresh();
        });
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