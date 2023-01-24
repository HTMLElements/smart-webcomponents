<template>
  <div class="vue-root">
    <div class="demo-description">
      smartGrid has a feature called Row Detail. It allows you to show additional
      useful information for the user by expanding a row. The Detail could be
      HTMLTemplateElement or String. It can host other Custom Elements. Click
      on any arrow to show the Row's Detail.
    </div>
    <smart-grid id="grid"></smart-grid>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              appearance: {
                showRowHeaderNumber: true,
                allowRowDetailToggleAnimation: true
              },
              onRowInit(index, row) {
                if (index === 0) {
                  row.showDetail = true;
                }
              },
              rowDetail: {
                enabled: true,
                visible: true,
                template: `
<smart-tabs>
<smart-tab-item label="Population">
<table>
<tr>
<td><strong>Urban:</strong></td>
<td>{{Population_Urban}}</td>
</tr>
<tr>
<td><strong>Rural:</strong></td>
<td>{{Population_Rural}}</td>
</tr>
<tr>
<td><strong>Total:</strong></td>
<td>{{Population_Total}}</td>
</tr>
</table>
</smart-tab-item>
<smart-tab-item label="GDP">
<table>
<tr>
<td><strong>Agriculture:</strong></td>
<td>{{GDP_Agriculture}}</td>
</tr>
<tr>
<td><strong>Industry:</strong></td>
<td>{{GDP_Industry}}</td>
</tr>
<tr>
<td><strong>Services:</strong></td>
<td>{{GDP_Services}}</td>
</tr>
<tr>
<td><strong>Total:</strong></td>
<td>{{GDP_Total}}</td>
</tr>
</table>
</smart-tab-item>
</smart-tabs>`
              },
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
html,
body {
  height: 1200px;
}

smart-grid {
  height: auto;
  max-height: 700px;
  width: 100%;
}

smart-tabs {
  margin-left: 20px;
  margin-top: 20px;
  line-height: initial;
  height: calc(100% - 40px);
  width: calc(100% - 40px);
}
</style>
