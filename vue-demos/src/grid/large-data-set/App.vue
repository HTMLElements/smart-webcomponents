<template>
  <div class="vue-root">
    <div class="demo-description">The Grid in this example is with 1000 columns, 10,000 rows</div>
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
              appearance: {
                showRowHeaderNumber: true
              },
              columnWidth: 100,
              dataSource: new window.Smart.DataAdapter({
                dataSource: 10000,
                dataFields: 1000
              }),
              onCellValue(cell) {
                cell.value = cell.row.index + "." + cell.column.index;
              }
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
  width: 60%;
  max-width: 800px;
}
</style>
