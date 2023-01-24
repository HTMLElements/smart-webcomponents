import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";
import { Button } from "smart-webcomponents-react/button";
import { CheckBox } from "smart-webcomponents-react/checkbox";
import { ColoPicker } from "smart-webcomponents-react/colorpicker";
import { NumberInput } from "smart-webcomponents-react/numberinput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
    this.dynamicWidth = React.createRef();
    this.gridHeight = React.createRef();
    this.gridWidth = React.createRef();
    this.gridCellWidthX = React.createRef();
    this.gridCellWidthZ = React.createRef();
    this.gridLines = React.createRef();
    this.formatLabels = React.createRef();
  }
  dataSource = [
    {
      Day: "Monday",
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
      Day: "Tuesday",
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
      Day: "Wednesday",
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
      Day: "Thursday",
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
      Day: "Friday",
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

  caption = "Fitness & exercise weekly scorecard";

  description = "Time spent in vigorous exercise by 3 people";

  showLegend = true;

  colorScheme = "scheme29";

  cameraPosition = {
    x: 15,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: "Day",
  };

  seriesGroups = [
    {
      type: "column",

      series: [
        { dataField: "Keith", displayText: "Keith" },
        { dataField: "Erica", displayText: "Erica" },
        { dataField: "George", displayText: "George" },
      ],
    },
  ];

  init() {}

  componentDidMount() {
    this.dynamicWidth.addEventListener('change', (event) => {
      this.chart.gridOptions.dynamicWidth = event.target.checked;
      this.gridWidth.disabled = this.chart.gridOptions.dynamicWidth;
      this.gridCellWidthX.disabled = !this.chart.gridOptions.dynamicWidth;
  });

  this.gridHeight.addEventListener('change', (event) => {
      this.chart.gridOptions.height = event.detail.value;
  });

  this.gridWidth.addEventListener('change', (event) => {
      this.chart.gridOptions.width = event.detail.value;
  });

  this.gridCellWidthX.addEventListener('change', (event) => {
      this.chart.gridOptions.slotWidthX = event.detail.value;
  });

  this.gridCellWidthZ.addEventListener('change', (event) => {
      this.chart.gridOptions.slotWidthZ = event.detail.value;
  });

  this.gridLines.addEventListener('change', (event) => {
    this.chart.gridOptions.lineColor = event.detail.value;
  });

  this.formatLabels.addEventListener('click', () => {
    this.chart.valueAxis.formatSettings.sufix = ' min';
  });
  }

  render() {
    return (
      <div>
        <ThreeDChart
          id="chart"
          ref={this.chart}
          caption={this.caption}
          description={this.description}
          dataSource={this.dataSource}
          xAxis={this.xAxis}
          valueAxis={this.valueAxis}
          showLegend={this.showLegend}
          colorScheme={this.colorScheme}
          seriesGroups={this.seriesGroups}
          cameraPosition={this.cameraPosition}
        ></ThreeDChart>
        <div class="options">
          <div class="option">
            <CheckBox id="dynamic-width" ref={this.dynamicWidth}>Dynamic Width</CheckBox>
            <br />
            <br />
            <span>Height:</span>
            <NumberInput
              value="30"
              min="15"
              max="50"
              id="grid-height" ref={this.gridHeight}
            ></NumberInput>
            <br />
            <br />
            <span>Width:</span>
            <NumberInput
              value="90"
              min="50"
              max="120"
              id="grid-width" ref={this.gridWidth}
            ></NumberInput>
            <br />
            <br />
            <span>Grid Cell X-Width:</span>
            <NumberInput
              value="16"
              min="5"
              max="30"
              id="grid-cell-width-x" ref={this.gridCellWidthX}
              disabled
            ></NumberInput>
            <br />
            <br />
            <span>Grid Cell Z-Width:</span>
            <NumberInput
              value="16"
              min="5"
              max="30"
              id="grid-cell-width-z" ref={this.gridCellWidthZ}
            ></NumberInput>
          </div>
          <div class="option">
            <br />
            <br />
            <span>Grid Color:</span>
            <ColorPicker
              id="grid-lines"
              value="#808080"
              ref={this.gridLines}
            ></ColorPicker>
            <br />
            <br />
            <Button id="format-labels" ref={this.formatLabels}>Format Labels</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
