<template>
  <div class="vue-root">
    <div class="demoDescription">
      The demo demonstrates how to set column width with CSS Variable and how
      to dynamically update the CSS variable depending on Media Queries.
    </div>
    <smart-grid id="grid"></smart-grid>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.getCountriesData(),
                dataFields: [
                  "ID: number",
                  "Country: string",
                  "Area: number",
                  "Population_Urban: number",
                  "Population_Rural: number",
                  "Population_Total: number",
                  "GDP_Agriculture: number",
                  "GDP_Industry: number",
                  "GDP_Services: number",
                  "GDP_Total: number"
                ]
              }),
              columns: [
                "Country",
                "Area",
                "Population_Rural",
                "Population_Total",
                "GDP_Total"
              ]
            };
          }
        }
      );
    });
  }
};
</script>

<style>
smart-grid {
  width: auto;
  height: auto;
  --smart-grid-template-columns: 250px 150px 150px 200px auto;
}

@media only screen and (max-width: 800px) {
  smart-grid {
    --smart-grid-template-columns: 150px 150px 150px 150px auto;
  }
}
@media only screen and (max-width: 600px) {
  smart-grid {
    --smart-grid-template-columns: 60px 60px 60px 60px auto;
  }
}
</style>
