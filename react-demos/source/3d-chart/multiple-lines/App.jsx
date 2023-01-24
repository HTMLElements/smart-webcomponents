import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  dataSource = [
    { month: 'Jan', south: 500, west: 400, east: 1300, north: 1000 },
    { month: 'Feb', south: 1500, west: 800, east: 1600, north: 1000 },
    { month: 'Mar', south: 2000, west: 800, east: 1400, north: 900 },
    { month: 'Apr', south: 2500, west: 700, east: 1600, north: 1300 },
    { month: 'May', south: 3000, west: 900, east: 2300, north: 1400 },
  ];

  caption = 'Revenue by Month and Region'

  description = '';

  showLegend = true;

  colorScheme = 'scheme01';

  cameraPosition = {
    x: 30,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: 'month',
  };

  gridOptions = {
    slotWidthZ: 8,
  };

  valueAxis = {
    unitInterval: 600,
    maxValue: 3000,
    minValue: 0,
    formatSettings: {
      prefix: '$',
    }
  };

  seriesGroups = [
    {
      type: 'line',

      series: [
        { dataField: 'south', displayText: 'South' },
        { dataField: 'west', displayText: 'West' },
        { dataField: 'east', displayText: 'East' },
        { dataField: 'north', displayText: 'North' },
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
