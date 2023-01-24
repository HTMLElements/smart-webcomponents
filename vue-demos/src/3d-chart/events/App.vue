<template>
  <div class="vue-root">
    <div class="container">
      <smart-3d-chart id="chart"></smart-3d-chart>
    </div>
    <h4>Chart Events:</h4>
    <div id="box"></div>
    <div class="options">
      <div class="caption">Chart Events</div>
      <div class="option">
        <h4>Item Index:</h4>
        <smart-number-input
          value="0"
          min="0"
          max="3"
          id="item"
        ></smart-number-input>
        <br /><br />
        <smart-button id="show-item">Show Item</smart-button>
        <br /><br />
        <smart-button id="hide-item">Hide Item</smart-button>
        <br /><br />
        <smart-button id="select-item">Select Item</smart-button>
        <br /><br />
        <smart-button id="unselect-item">Unselect Item</smart-button>
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
        { Type: "Completed", Count: 22 },
        { Type: "In Progress", Count: 19 },
        { Type: "Cancelled", Count: 13 },
        { Type: "Remaining", Count: 34 },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              autoRotate: false,
              caption: "Website Project",
              description: "Progress of the tasks",
              showLegend: true,
              legendLayout: {
                flow: "vertical",
              },
              cameraPosition: {
                y: 18,
                z: 20,
              },
              colorScheme: "scheme01",
              seriesGroups: [
                {
                  type: "pie",
                  showLabels: true,
                  dataSource: source,
                  series: [
                    {
                      dataField: "Count",
                      displayText: "Type",
                      initialAngle: 0,
                      radius: 15,
                      labelRadius: 17,
                      centerOffset: 0,
                      height: 1.5,
                    },
                  ],
                },
              ],
            };
          }
        }
      );

      document
        .getElementById("show-item")
        .addEventListener("click", function (event) {
          var chart = document.getElementById("chart");
          var itemIndex = parseInt(document.getElementById("item").value);
          chart.showItem(0, 0, itemIndex);
        });
      document
        .getElementById("hide-item")
        .addEventListener("click", function (event) {
          var chart = document.getElementById("chart");
          var itemIndex = parseInt(document.getElementById("item").value);
          chart.hideItem(0, 0, itemIndex);
        });
      document
        .getElementById("select-item")
        .addEventListener("click", function (event) {
          var chart = document.getElementById("chart");
          var itemIndex = parseInt(document.getElementById("item").value);
          chart.selectItem(0, 0, itemIndex);
        });
      document
        .getElementById("unselect-item")
        .addEventListener("click", function (event) {
          var chart = document.getElementById("chart");
          var itemIndex = parseInt(document.getElementById("item").value);
          chart.unselectItem(0, 0, itemIndex);
        });

      let events = ["itemClick", "hide", "show", "unselect", "select"];
      events.forEach((ev) =>
        chart.addEventListener(ev, function (e) {
          document.getElementById(
            "box"
          ).innerHTML += `${ev}, itemIndex:${e.detail.itemIndex}<br/>`;
        })
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

#box {
  display: block;
  font-family: Consolas, "courier new";
  background-color: #f1f1f1;
  margin-top: 15px;
  width: 800px;
  height: 300px;
  word-wrap: break-word;
  overflow: scroll;
}
</style>