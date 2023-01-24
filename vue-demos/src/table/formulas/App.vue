<template>
  <div class="vue-root">
    <div class="demo-description">This demo shows how to apply formulas as smart-table cell values. Formulas applied on initialization are:
        <ul>
            <li><strong>A2</strong> <em>=A1+1</em></li>
            <li><strong>A3</strong> <em>=A2+1</em></li>
            <li><strong>C4</strong> <em>=SUM(C1:C3)</em></li>
            <li><strong>D3</strong> <em>=D1&" "&D2&"!"</em></li>
            <li><strong>F8</strong> <em>=8+2</em></li>
            <li><strong>F9</strong> <em>=PI()</em></li>
            <li><strong>G10</strong> <em>=MAX(A10:E10)</em></li>
        </ul>
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
      const data = Array(10);

      data[0] = { A: 10, C: 1, D: 'Hello' };
      data[1] = { A: '=A1+1', C: 2, D: 'world' };
      data[2] = { A: '=A2+1', C: 3, D: '=D1&" "&D2&"!"' };
      data[3] = { C: '=SUM(C1:C3)' }
      data[7] = { F: '=8+2' }
      data[8] = { F: '=PI()' }
      data[9] = { A: 10, B: 20, C: 30, D: 11, E: 21, G: '=MAX(A10:E10)' }

      window.Smart('#table', class {
          get properties() {
              return {
                  dataSource: new window.Smart.DataAdapter({
                      dataSource: data,
                      dataFields: [
                          'A: string',
                          'B: string',
                          'C: string',
                          'D: string',
                          'E: string',
                          'F: string',
                          'G: string'
                      ]
                  }),
                  editing: true,
                  formulas: true,
                  keyboardNavigation: true,
                  columns: [
                      { label: 'A', dataField: 'A' },
                      { label: 'B', dataField: 'B' },
                      { label: 'C', dataField: 'C' },
                      { label: 'D', dataField: 'D' },
                      { label: 'E', dataField: 'E' },
                      { label: 'F', dataField: 'F' },
                      { label: 'G', dataField: 'G' }
                  ]
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
}

.smart-table thead th:not(:last-child),
.smart-table tbody td:not(:last-child) {
    border-right: var(--smart-border-width) solid var(--smart-border);
}

.smart-table th>.wrapper {
    justify-content: center;
}
</style>
