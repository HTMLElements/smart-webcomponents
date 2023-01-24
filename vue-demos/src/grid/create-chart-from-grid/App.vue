<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Data Visualize Grid Data</h1>
      <p>
        Select a range of cells and press any of the toolbar buttons to create
        a Chart from the selection. To create a chart from the entire data set,
        just click any of the chart buttons.
      </p>
    </div>
    <p>
      <em>Click an icon to generate a chart based on the grid's selection.</em>
    </p>
    <template id="toolbarTemplate">
      <div id="toolbar">
        <div id="column">Column</div>
        <div id="line">Line</div>
        <div id="pie">Pie</div>
        <div id="bar">Bar</div>
        <div id="area">Area</div>
        <div id="scatter">Scatter</div>
      </div>
    </template>
    <div id="gridContainer">
      <smart-grid id="grid"></smart-grid>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.chart.js";
import "smart-webcomponents/source/modules/smart.textbox.js";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const data = [
        {
          Name: "Zavier Vargas",
          Income: 59039,
          Expenses: 13303,
          Debt: 15000
        },
        {
          Name: "Mark Beasley",
          Income: 22468,
          Expenses: 7600,
          Debt: 0
        },
        {
          Name: "Skyla Khan",
          Income: 111459,
          Expenses: 101009,
          Debt: 7300
        },
        {
          Name: "Deandre Weber",
          Income: 28233,
          Expenses: 31045,
          Debt: 21000
        },
        {
          Name: "Isla Doyle",
          Income: 92030,
          Expenses: 90581,
          Debt: 160000
        },
        {
          Name: "Jaslyn Barron",
          Income: 112083,
          Expenses: 100322,
          Debt: 43500
        },
        {
          Name: "Monserrat Mccann",
          Income: 92510,
          Expenses: 28345,
          Debt: 17890
        },
        {
          Name: "Britney Fuller",
          Income: 55091,
          Expenses: 55020,
          Debt: 31000
        },
        {
          Name: "Bernard Munoz",
          Income: 10030,
          Expenses: 43012,
          Debt: 30000
        },
        {
          Name: "Sherlyn Vincent",
          Income: 81209,
          Expenses: 14390,
          Debt: 3000
        }
      ];
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              appearance: {
                alternationCount: 2,
                showRowHeaderNumber: true,
                showRowHeader: true
              },
              header: {
                visible: true,
                template: "#toolbarTemplate"
              },
              sorting: {
                enabled: true
              },
              selection: {
                enabled: true,
                allowCellSelection: true,
                allowRowHeaderSelection: true,
                allowColumnHeaderSelection: true,
                mode: "extended"
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: data,
                dataFields: [
                  "Name: string",
                  "Income: number",
                  "Expenses: number",
                  "Debt: number"
                ]
              }),
              columns: [
                {
                  label: "Name",
                  dataField: "Name"
                },
                {
                  label: "Income (2019)",
                  dataField: "Income",
                  cellsFormat: "c0"
                },
                {
                  label: "Expenses (2019)",
                  dataField: "Expenses",
                  cellsFormat: "c0"
                },
                {
                  label: "Remaining Debt",
                  dataField: "Debt",
                  cellsFormat: "c0"
                }
              ]
            };
          }
        }
      );

      const grid = document.getElementById("grid");
      grid.whenRendered(() => {
        document.getElementById("column").addEventListener("click", function() {
          grid.createChart("column");
        });
        document.getElementById("line").addEventListener("click", function() {
          grid.createChart("line");
        });
        document.getElementById("pie").addEventListener("click", function() {
          grid.createChart("pie");
        });
        document.getElementById("bar").addEventListener("click", function() {
          grid.createChart("bar");
        });
        document.getElementById("area").addEventListener("click", function() {
          grid.createChart("area");
        });
        document
          .getElementById("scatter")
          .addEventListener("click", function() {
            grid.createChart("scatter");
          });
      });
    });
  }
};
</script>

<style>
#grid {
  width: 60%;
}
@media only screen and (max-width: 400px) {
  smart-grid {
    width: 100%;
  }
}
#toolbar {
  display: flex;
  height: 100%;
  padding: 0 1rem;
}

#toolbar.warning:after {
  content: "Selected data cannot be used to create a chart.";
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: var(--smart-error);
}

#toolbar > div {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-right: 15px;
  width: 35px;
  height: 30px;
  height: 100%;
  font-size: 12px;
  background-size: contain;
  background-repeat: no-repeat;
  user-select: none;
  cursor: pointer;
}

#toolbar > div:hover {
  background-color: var(--smart-grid-column-header-background-hover);
}

#toolbar > div:active {
  background-color: var(--smart-grid-column-header-background-active);
}

#toolbar > div.warning {
  outline: 2px solid var(--smart-error);
}

#column {
  background-image: url("../../../images/create-column.png");
}

#line {
  background-image: url("../../../images/create-line.png");
}

#pie {
  background-image: url("../../../images/create-pie.png");
}

#bar {
  background-image: url("../../../images/create-bar.png");
}

#area {
  background-image: url("../../../images/create-area.png");
}

#scatter {
  background-image: url("../../../images/create-scatter.png");
}

[theme="dark"] #column {
  background-image: url("../../../images/create-column-dark.png");
}

[theme="dark"] #line {
  background-image: url("../../../images/create-line-dark.png");
}

[theme="dark"] #pie {
  background-image: url("../../../images/create-pie-dark.png");
}

[theme="dark"] #bar {
  background-image: url("../../../images/create-bar-dark.png");
}

[theme="dark"] #area {
  background-image: url("../../../images/create-area-dark.png");
}

[theme="dark"] #scatter {
  background-image: url("../../../images/create-scatter-dark.png");
}
</style>
