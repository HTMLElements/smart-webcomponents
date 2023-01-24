import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {

  dataSource = [
    { Month: 'Jan', Computers: 140, Laptops: 180},
    { Month: 'Feb', Computers: 120, Laptops: 160},
    { Month: 'Mar', Computers: 100, Laptops: 140},
    { Month: 'Apr', Computers: 180, Laptops: 200},
    { Month: 'May', Computers: 220, Laptops: 240},
    { Month: 'Jun', Computers: 200, Laptops: 220},
    { Month: 'Jul', Computers: 175, Laptops: 230},
    { Month: 'Aug', Computers: 160, Laptops: 210},
    { Month: 'Sep', Computers: 200, Laptops: 190},
    { Month: 'Oct', Computers: 180, Laptops: 170},
    { Month: 'Nov', Computers: 160, Laptops: 210},
    { Month: 'Dec', Computers: 165, Laptops: 140},
  ];

  caption = 'Projected Sales of Electronic Store'

  description = 'Chart is updated every 100ms';

  showLegend = false;

  colorScheme = 'scheme01';

  controlsSettings = {
    enableRotate: false,
  }

  cameraPosition = {
    x: 0,
    y: 15,
    z: 50,
  };

  xAxis = {
    dataField: 'Month',
  };

  gridOptions = {
    slotWidthZ: 10,
  }

  valueAxis = {
    unitInterval: 20,
  };

  seriesGroups = [
    {
      type: 'line',

      series: [
        { dataField: 'Computers', displayText: 'Computers' },
        { dataField: 'Laptops', displayText: 'Laptops' },
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
          ref={this.chartRef}
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
