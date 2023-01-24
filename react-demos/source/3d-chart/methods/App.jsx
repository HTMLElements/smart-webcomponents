import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";
import { Button } from "smart-webcomponents-react/button";
import { NumberInput } from "smart-webcomponents-react/numberinput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
    this.getItem = React.createRef();
    this.showItem = React.createRef();
    this.hideItem = React.createRef();
    this.getValueAxis = React.createRef();
    this.getXAxis = React.createRef();
    this.getZAxis = React.createRef();
    this.groupIndex = React.createRef();
    this.serieIndex = React.createRef();
    this.itemIndex = React.createRef();
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

  showLegendTable = true;

  colorScheme = "scheme29";

  cameraPosition = {
    x: 30,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: "Day",
  };

  valueAxis = {
    minValue: 0,
  };

  seriesGroups = [
    {
      type: "stackedcolumn",
      dataField: "Keith",
      displayText: "Keith",
      series: [
        {
          dataField: "Running",
          displayText: "Running",
        },
        {
          dataField: "Cycling",
          displayText: "Cycling",
        },
        {
          dataField: "Swimming",
          displayText: "Swimming",
        },
      ],
    },
    {
      type: "stackedcolumn",
      dataField: "Erica",
      displayText: "Erica",
      series: [
        {
          dataField: "Running",
          displayText: "Running",
        },
        {
          dataField: "Cycling",
          displayText: "Cycling",
        },
        {
          dataField: "Swimming",
          displayText: "Swimming",
        },
      ],
    },
    {
      type: "stackedcolumn",
      dataField: "George",
      displayText: "George",
      series: [
        {
          dataField: "Running",
          displayText: "Running",
        },
        {
          dataField: "Cycling",
          displayText: "Cycling",
        },
        {
          dataField: "Swimming",
          displayText: "Swimming",
        },
      ],
    },
  ];

  init() {}

  componentDidMount() {
    this.getItem.addEventListener("click", () => {
      var seriesGroup = this.groupIndex.value;
      var serie = this.serieIndex.value;
      var itemIndex = this.itemIndex.value;
      var item = this.chart.getItemByIndexes(seriesGroup, serie, itemIndex);
      alert(
        item.serieDisplayText +
          " " +
          item.xAxisField +
          " " +
          item.groupDisplayText +
          ": " +
          item.value
      );
    });

    this.showItem.addEventListener("click", () => {
      var seriesGroup = this.groupIndex.value;
      var serie = this.serieIndex.value;
      var itemIndex = this.itemIndex.value;
      this.chart.showItem(seriesGroup, serie, itemIndex);
    });

    this.hideItem.addEventListener("click", () => {
      var seriesGroup = this.groupIndex.value;
      var serie = this.serieIndex.value;
      var itemIndex = this.itemIndex.value;
      this.chart.hideItem(seriesGroup, serie, itemIndex);
    });

    this.getValueAxis.addEventListener("click", () => {
      var labels = this.chart.getValueAxisLabels();
      alert(labels);
    });

    this.getXAxis.addEventListener("click", () => {
      var labels = this.chart.getXAxisLabels();
      alert(labels);
    });

    this.getZAxis.addEventListener("click", () => {
      var labels = this.chart.getZAxisLabels();
      alert(labels);
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
          gridOptions={this.gridOptions}
        ></ThreeDChart>
        <div class="options">
          <div class="caption">Chart Methods</div>
          <div class="option">
            <h4>Series Group Index:</h4>
            <NumberInput
              ref={this.groupIndex}
              value={2}
              min={0}
              max={2}
              id="series-group"
            ></NumberInput>
            <h4>Serie Index:</h4>
            <NumberInput
              ref={this.serieIndex}
              value={4}
              min={0}
              max={2}
              id="serie"
            ></NumberInput>
            <h4>Item Index:</h4>
            <NumberInput
              ref={this.itemIndex}
              value={1}
              min={0}
              max={4}
              id="item"
            ></NumberInput>
            <Button id="get-item" ref={this.getItem}>
              Get Item
            </Button>
            <br />
            <br />
            <Button id="show-item" ref={this.showItem}>
              Show Item
            </Button>
            <br />
            <Button id="hide-item" ref={this.hideItem}>
              Hide Item
            </Button>
          </div>
          <div class="option">
            <br />
            <br />
            <Button id="get-value-axis" ref={this.getValueAxis}>
              Get Value Axis Labels
            </Button>
            <br />
            <br />
            <Button id="get-x-axis" ref={this.getXAxis}>
              Get X Axis Labels
            </Button>
            <br />
            <br />
            <Button id="get-z-axis" ref={this.getZAxis}>
              Get Z Axis Labels
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
