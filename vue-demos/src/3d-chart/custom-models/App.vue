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
      const sampleData = [
        { Building: "Eiffel Tower", Height: 324 },
        { Building: "CN Tower", Height: 553 },
        { Building: "Shanghai Tower", Height: 632 },
        { Building: "Burj Khalifa", Height: 828 },
        { Building: "One World Trade Center", Height: 541 },
        { Building: "Empire State Building", Height: 443 },
      ];

      Smart(
        "#chart",
        class {
          get properties() {
            return {
              caption: "Famous Landmarks Around the World",
              description:
                "Visual Comparison of the height of famous buildings around the world",
              showLegend: false,
              cameraPosition: {
                y: 10,
                z: 60,
              },
              dataSource: sampleData,
              xAxis: {
                dataField: "Building",
              },
              valueAxis: {
                unitInterval: 100,
                minValue: 0,
                formatSettings: { sufix: "m" },
              },
              gridcOptions: {
                height: 60,
              },
              toolTipFormatSettings: { sufix: "m" },
              customModels: [
                {
                  groupIndex: 0,
                  serieIndex: 0,
                  itemIndex: 0,
                  model: "../../images/free__la_tour_eiffel.glb",
                },
                {
                  groupIndex: 0,
                  serieIndex: 0,
                  itemIndex: 1,
                  model: "../../images/gulas_cn_tower.glb",
                },
                {
                  groupIndex: 0,
                  serieIndex: 0,
                  itemIndex: 2,
                  model: "../../images/shanghai_tower.glb",
                },
                {
                  groupIndex: 0,
                  serieIndex: 0,
                  itemIndex: 3,
                  model: "../../images/burj_khalifa.glb",
                },
                {
                  groupIndex: 0,
                  serieIndex: 0,
                  itemIndex: 4,
                  model: "../../images/one_world_trade_center.glb",
                },
                {
                  groupIndex: 0,
                  serieIndex: 0,
                  itemIndex: 5,
                  model: "../../images/empire_state_building.glb",
                },
              ],
              seriesGroups: [
                {
                  type: "column",

                  series: [{ dataField: "Height", displayText: "" }],
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