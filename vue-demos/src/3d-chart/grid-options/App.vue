<template>
  <div class="vue-root">
    <div class="container">
      <smart-3d-chart id="chart"></smart-3d-chart>
    </div>
    <div class="options">
        <div class="option">
            <smart-check-box id="dynamic-width">Dynamic Width</smart-check-box>
            <br/><br/>
            <span>Height:</span>
            <smart-number-input value="30" min="15" max="50" id="grid-height"></smart-number-input>
            <br/><br/>
			<span>Width:</span>
            <smart-number-input value="90" min="50" max="120" id="grid-width"></smart-number-input>
            <br/><br/>
            <span>Grid Cell X-Width:</span>
            <smart-number-input value="16" min="5" max="30" id="grid-cell-width-x" disabled></smart-number-input>
            <br/><br/>
            <span>Grid Cell Z-Width:</span>
            <smart-number-input value="16" min="5" max="30" id="grid-cell-width-z"></smart-number-input>
        </div>
        <div class="option">
            <br/><br/>
            <span>Grid Color:</span>
			<smart-color-picker id="grid-lines" value="#808080"></smart-color-picker>
            <br/><br/>
			<smart-button id="format-labels">Format Labels</smart-button>
            
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
import "smart-webcomponents/source/modules/smart.colorpicker.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const source = [
  {
    Day: 'Monday',
    Keith: {
      Running: 10,
      Swimming: 20,
      Cycling: 30,
    },
    Erica: {
      Running: 13,
      Swimming: 30,
      Cycling: 23,
    },
    George: {
      Running: 15,
      Swimming: 70,
      Cycling: 10,
    },
  },
  {
    Day: 'Tuesday',
    Keith: {
      Running: 15,
      Swimming: 15,
      Cycling: 40,
    },
    Erica: {
      Running: 10,
      Swimming: 15,
      Cycling: 40,
    },
    George: {
      Running: 35,
      Swimming: 15,
      Cycling: 40,
    },
  },
  {
    Day: 'Wednesday',
    Keith: {
      Running: 55,
      Swimming: 15,
      Cycling: 10,
    },
    Erica: {
      Running: 15,
      Swimming: 60,
      Cycling: 5,
    },
    George: {
      Running: 50,
      Swimming: 5,
      Cycling: 10,
    },
  },
  {
    Day: 'Thursday',
    Keith: {
      Running: 15,
      Swimming: 15,
      Cycling: 40,
    },
    Erica: {
      Running: 15,
      Swimming: 15,
      Cycling: 40,
    },
    George: {
      Running: 15,
      Swimming: 15,
      Cycling: 5,
    },
  },
  {
    Day: 'Friday',
    Keith: {
      Running: 15,
      Swimming: 15,
      Cycling: 40,
    },
    Erica: {
      Running: 15,
      Swimming: 15,
      Cycling: 40,
    },
    George: {
      Running: 5,
      Swimming: 5,
      Cycling: 40,
    },
  },
];

Smart(
  '#chart',
  class {
    get properties() {
      return {
        caption: 'Fitness & exercise weekly scorecard',
        description: 'Time spent in vigorous exercise by 3 people',
        showLegend: true,
        cameraPosition: {
          x: 15,
          y: 30,
          z: 70,
        },
        dataSource: source,
        colorScheme: 'scheme29',
        xAxis: {
          dataField: 'Day',
        },
        seriesGroups: [
          {
            type: 'column',
            series: [
              { dataField: 'Keith', displayText: 'Keith' },
              { dataField: 'Erica', displayText: 'Erica' },
              { dataField: 'George', displayText: 'George' },
            ],
          },
        ],
      };
    }
  }
);
const chart = document.querySelector('#chart');
  document.getElementById('dynamic-width').addEventListener('change', function(event) {
    chart.gridOptions.dynamicWidth = event.target.checked;
    document.getElementById('grid-width').disabled = event.target.checked;
    document.getElementById('grid-cell-width-x').disabled  = !event.target.checked;
  });
  document.getElementById('grid-height').addEventListener('change', function(event) {
    chart.gridOptions.height = event.detail.value;
  });
  document.getElementById('grid-width').addEventListener('change', function(event) {
    chart.gridOptions.width = event.detail.value;
  });
  document.getElementById('grid-cell-width-x').addEventListener('change',function(event) {
    chart.gridOptions.slotWidthX = event.detail.value;
  });
  document.getElementById('grid-cell-width-z').addEventListener('change',function(event) {
    chart.gridOptions.slotWidthZ = event.detail.value;
  });
  document.getElementById('grid-lines').addEventListener('change',function(event) {
    chart.gridOptions.lineColor = event.detail.value;

  });
  document.getElementById('format-labels').addEventListener('click',function(event) {
    chart.valueAxis.formatSettings.sufix = ' min';

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