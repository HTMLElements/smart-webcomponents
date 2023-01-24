import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  generateData(){
    const data = [];
    for(let year = 2012; year <= 2022; year++) {
      for(let month = 1; month <= 12; month++) {
        data.push({
          Date: new Date(year, month, 1),
          target: Math.round(Math.random() * 50 + 100),
          actual: Math.round(Math.random() * 50 + 100),
        });
      }
    }
    return data;
  }

  dataSource = this.generateData();

  caption = 'Targeted vs Achieved Sales'

  description = 'For the period 2012-2022';

  showLegend = true;

  colorScheme = 'scheme05';

  cameraPosition = {
    x: 30,
    y: 30,
    z: 50,
  };

  xAxis = {
    dataField: 'Date',
    type: 'date',
    formatFunction: (value) => {
      return (value.getMonth() + 1) + '-' + value.getFullYear();
    },
    labels: {
      step: 2,
      angle: 10,
    }
  };

  valueAxis = {
    unitInterval: 20,
    minValue: 0,
    formatSettings: {
      sufix: 'K',
      prefix: '$',
      decimalalPlaces: 2,
    }
  };

  seriesGroups = [
    {
      type: 'area',

      series: [
        { dataField: 'target', displayText: 'Targeted' },
        { dataField: 'actual', displayText: 'Achieved' },
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
