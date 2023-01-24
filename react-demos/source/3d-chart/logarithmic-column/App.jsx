import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  dataSource = [
    {
      Planet: "Earth",
      Radius: 6371,
    },
    {
      Planet: "Moon",
      Radius: 1737,
    },
    {
      Planet: "Jupiter",
      Radius: 70000,
    },
    {
      Planet: "Neptune",
      Radius: 24600,
    },
    {
      Planet: "Sun",
      Radius: 696340,
    },
  ];

  caption = "Logarithmic Comparison of planetary objects in base 10";

  description = "Radius in kilometres";

  showLegend = false;

  colorScheme = "scheme32";

  cameraPosition = {
    x: 55,
    y: 25,
    z: 60,
  };

  xAxis = {
    dataField: "Planet",
  };

  valueAxis = {
    formatFunction: function (value) {
      return value.toFixed(2) + " km";
    },
    logarithmicScale: true,
    logarithmicScaleBase: 10,
  };

  gridOptions = {
    height: 60,
    dynamicWidth: false,
    slotWidthX: 90,
    slotWidthZ: 30,
  };

  seriesGroups = [
    {
      type: "column",
      series: [
        {
          dataField: "Radius",
          displayText: "",
          formatSettings: {
            prefix: "Radius: ",
            suffix: " km",
            thousandsSeparator: ",",
          },
        },
      ],
    },
  ];

  init() {}

  componentDidMount() {}

  render() {
    return (
      <div>
        <ThreeDChart
          id="chart"
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
      </div>
    );
  }
}

export default App;
