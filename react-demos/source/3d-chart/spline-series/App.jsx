import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  dataSource = [
    { Month: 'Jan', y2021: 140, y2022: 180, y2020: 100 },
    { Month: 'Feb', y2021: 120, y2022: 160, y2020: 80 },
    { Month: 'Mar', y2021: 100, y2022: 140, y2020: 60 },
    { Month: 'Apr', y2021: 180, y2022: 200, y2020: 140 },
    { Month: 'May', y2021: 220, y2022: 240, y2020: 180 },
    { Month: 'Jun', y2021: 200, y2022: 220, y2020: 160 },
    { Month: 'Jul', y2021: 175, y2022: 230, y2020: 135 },
    { Month: 'Aug', y2021: 160, y2022: 210, y2020: 120 },
    { Month: 'Sep', y2021: 200, y2022: 190, y2020: 160 },
    { Month: 'Oct', y2021: 180, y2022: 170, y2020: 140 },
    { Month: 'Nov', y2021: 160, y2022: 210, y2020: 120 },
    { Month: 'Dec', y2021: 165, y2022: 140, y2020: 125 }, 
  ];

  caption = 'Store Sales Per Month for 2020-2022'

  description = '';

  showLegend = true;

  colorScheme = 'scheme01';

  cameraPosition = {
    x: 30,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: 'Month',
  };

  valueAxis = {
    unitInterval: 20,
  };

  seriesGroups = [
        {
          type: 'spline',
          series: [
            { dataField: 'y2020', displayText: '2020' },
            { dataField: 'y2021', displayText: '2021' },
            { dataField: 'y2022', displayText: '2022' },
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
        ></ThreeDChart>
      </div>
    );
  }
}

export default App;
