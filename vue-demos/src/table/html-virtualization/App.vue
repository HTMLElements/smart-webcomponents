<template>
  <div class="vue-root">
    <div class="demo-description">
      This demo showcases a jqx-table with enabled HTML virtualization. This functionality allows for only visible
      rows to be rendered resulting in an increased Table performance.
    </div>
    <smart-table id="table"></smart-table>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.table.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const data = [], columns = [];
      for (let i = 65; i < 91; i++) {
          const letter = String.fromCharCode(i);
          columns.push({ label: letter, dataField: letter, width: 100 });
      }
      for (let i = 0; i < 10000; i++) {
          const dataPoint = {};
          for (let j = 65; j < 91; j++) {
              const letter = String.fromCharCode(j);
              dataPoint[String.fromCharCode(j)] = letter + i;
          }
          data.push(dataPoint);
      }
      window.Smart('#table', class {
          get properties() {
              return {
                  dataSource: data,
                  freezeHeader: true,
                  keyboardNavigation: true,
                  virtualization: true,
                  columns: columns
              };
          }
      });
    });
  }
};
</script>

<style>
.smart-table {
  width: 800px;
  height: 600px;
}
</style>
