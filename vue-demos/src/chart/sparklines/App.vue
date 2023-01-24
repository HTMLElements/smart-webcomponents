<template>
  <div class="vue-root">
    <table>
      <thead>
        <tr>
          <th>City</th>
          <th>Store locations</th>
          <th>Monthly sales</th>
          <th>Daily sales trend</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.chart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sampleData = [
          {
            city: "London",
            count: 24,
            monthlySales: 1128430,
            dailyTrend: [
              12,
              8,
              9,
              3,
              4,
              5,
              6,
              2,
              3,
              4,
              5,
              6,
              12,
              4,
              11,
              4,
              13,
              9,
              10,
              12,
              12,
              8,
              13,
              7,
              15,
              9,
              11,
              12,
              9,
              8
            ]
          },
          {
            city: "New York",
            count: 35,
            monthlySales: 1434650,
            dailyTrend: [
              11,
              7,
              3,
              8,
              6,
              2,
              2,
              4,
              3,
              8,
              5,
              11,
              7,
              11,
              11,
              4,
              5,
              6,
              5,
              9,
              9,
              5,
              11,
              2,
              8,
              9,
              14,
              12,
              9,
              8
            ]
          },
          {
            city: "Berlin",
            count: 11,
            monthlySales: 498430,
            dailyTrend: [
              11,
              5,
              8,
              20,
              23,
              17,
              6,
              18,
              6,
              18,
              15,
              8,
              13,
              12,
              20,
              14,
              13,
              3,
              23,
              4,
              14,
              21,
              15,
              7,
              4,
              9,
              22,
              16,
              3,
              1
            ]
          },
          {
            city: "Madrid",
            count: 4,
            monthlySales: 181760,
            dailyTrend: [
              2,
              5,
              15,
              17,
              20,
              10,
              15,
              21,
              6,
              8,
              14,
              2,
              4,
              10,
              6,
              18,
              11,
              20,
              12,
              14,
              14,
              22,
              21,
              10,
              20,
              1,
              18,
              12,
              5,
              23
            ]
          },
          {
            city: "Paris",
            count: 9,
            monthlySales: 381760,
            dailyTrend: [
              15,
              19,
              15,
              13,
              17,
              21,
              3,
              8,
              8,
              13,
              8,
              21,
              19,
              8,
              8,
              22,
              3,
              12,
              18,
              14,
              15,
              6,
              15,
              17,
              14,
              1,
              14,
              3,
              8,
              15
            ]
          }
        ],
        positiveColor = getComputedStyle(document.documentElement)
          .getPropertyValue("--smart-primary")
          .trim(),
        negativeColor = getComputedStyle(document.documentElement)
          .getPropertyValue("--smart-error")
          .trim();

      function createSparkline(element, index) {
        let type;
        if (index % 2 === 0) {
          type = "column";
        } else if (index === 3) {
          type = "area";
        } else {
          type = "stepline";
        }
        const settings = {
          caption: "",
          description: "",
          showLegend: false,
          animation: "none",
          showBorderLine: false,
          showToolTips: false,
          backgroundColor: "transparent",
          padding: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          },
          titlePadding: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          },
          dataSource: sampleData[index].dailyTrend,
          xAxis: {
            visible: false,
            valuesOnTicks: false
          },
          seriesGroups: [
            {
              type: type,
              columnsGapPercent: 0,
              columnsMaxWidth: 2,
              valueAxis: {
                minValue: 0,
                visible: false
              },
              series: [
                {
                  linesUnselectMode: "click",
                  //lineWidth: 1,
                  colorFunction: function(value) {
                    return value < 10 ? negativeColor : positiveColor;
                  }
                }
              ]
            }
          ]
        };
        for (let setting in settings) {
          element[setting] = settings[setting];
        }
      }
      const tbody = document.getElementsByTagName("tbody")[0];
      sampleData.forEach(function(dataPoint, index) {
        const tr = document.createElement("tr");
        for (let field in dataPoint) {
          const td = document.createElement("td");
          if (field !== "dailyTrend") {
            td.innerHTML = dataPoint[field];
          } else {
            const sparkLine = document.createElement("smart-chart");
            createSparkline(sparkLine, index);
            td.appendChild(sparkLine);
          }
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      });
    });
  }
};
</script>

<style>
table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 900px;
  table-layout: fixed;
}
@media only screen and (max-width: 700px) {
  table {
    width: 100%;
    max-width: 100%;
    display: block;
  }
}
td,
th {
  border: 1px solid #ddd;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: var(--smart-primary);
  color: white;
  width: 200px;
}

tr {
  height: 100px;
}

smart-chart {
  width: 100%;
  height: 100px;
}
</style>
